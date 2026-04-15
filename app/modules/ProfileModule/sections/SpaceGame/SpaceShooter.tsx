import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { Projectile } from "./Projectile";

const ROWS = 4;
const COLS = 8;
const PADDING = 15;
const STARTX = 50;
const STARTY = 50;
const PLAYER_BULLET_WIDTH = 2;
const PLAYER_BULLET_HEIGHT = 10;
const ENEMY_BULLET_WIDTH = 3;
const ENEMY_BULLET_HEIGHT = 10;
const BASE_ENEMY_SHOT_COOLDOWN_MS = 2200;
const BASE_ENEMY_FIRE_CHANCE_PER_FRAME = 0.004;
const ENEMY_FIRE_CHANCE_MAX_PER_FRAME = 0.08;

const isColliding = (
  a: Projectile,
  b: { x: number; y: number; width: number; height: number },
) => {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
};

const SpaceShooter = ({ onExit }: { onExit: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<"menu" | "playing" | "gameover">(
    "menu",
  );
  const [score, setScore] = useState(0);

  const gameData = useRef({
    player: null as Player | null,
    enemies: [] as Enemy[],
    bullets: [] as Projectile[],
    enemyBullets: [] as Projectile[],
    direction: 1,
    scoreRef: 0,
  });

  const initLevel = (canvas: HTMLCanvasElement) => {
    const gd = gameData.current;
    gd.player = new Player(
      canvas.width / 2 - 40,
      canvas.height - 90,
      80,
      80,
      5,
    );
    gd.bullets = [];
    gd.enemyBullets = [];
    gd.direction = 1;

    const newEnemies = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        newEnemies.push(
          new Enemy(
            STARTX + c * (20 + PADDING),
            STARTY + r * (20 + PADDING),
            30,
            30,
            Date.now() - Math.random() * 2000,
          ),
        );
      }
    }
    gd.enemies = newEnemies;
  };

  const resetGame = () => {
    setScore(0);
    gameData.current.scoreRef = 0;
    setGameState("playing");
  };

  useEffect(() => {
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    initLevel(canvas);
    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
      )
        e.preventDefault();
      keys[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => (keys[e.key] = false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    let animationId: number;

    const gameLoop = () => {
      const gd = gameData.current;
      if (!gd.player) return;
      const player = gd.player;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const difficulty = 1 + Math.floor(gd.scoreRef / 200) * 0.4;
      const moveSpeed = 1.0 * difficulty;

      if ((keys["ArrowLeft"] || keys["a"]) && player.x > 0)
        player.x -= player.speed;
      if (
        (keys["ArrowRight"] || keys["d"]) &&
        player.x < canvas.width - player.width
      )
        player.x += player.speed;

      if (keys[" "]) {
        const now = Date.now();
        if (now - player.lastShot > player.cooldown) {
          gd.bullets.push(
            new Projectile(
              player.x + player.width / 2 - PLAYER_BULLET_WIDTH / 2,
              player.y,
              PLAYER_BULLET_WIDTH,
              PLAYER_BULLET_HEIGHT,
              -20,
              "#00ff00",
            ),
          );
          player.lastShot = now;
        }
      }
      player.draw(ctx);

      let reachedEdge = false;
      gd.enemies.forEach((en) => {
        if (en.x + en.width >= canvas.width - 10 && gd.direction === 1)
          reachedEdge = true;
        if (en.x <= 10 && gd.direction === -1) reachedEdge = true;
      });

      if (reachedEdge) {
        gd.direction *= -1;
        gd.enemies.forEach((en) => (en.y += 15));
      } else {
        gd.enemies.forEach((en) => (en.x += moveSpeed * gd.direction));
      }

      gd.enemies = gd.enemies.filter((en) => {
        en.draw(ctx);

        const shotCooldown = BASE_ENEMY_SHOT_COOLDOWN_MS / difficulty;
        const now = Date.now();
        const currentFireRate = Math.min(
          ENEMY_FIRE_CHANCE_MAX_PER_FRAME,
          BASE_ENEMY_FIRE_CHANCE_PER_FRAME * (difficulty - 1),
        );
        if (
          now - en.lastShot > shotCooldown &&
          Math.random() < currentFireRate
        ) {
          gd.enemyBullets.push(
            new Projectile(
              en.x + en.width / 2 - ENEMY_BULLET_WIDTH / 2,
              en.y + en.height,
              ENEMY_BULLET_WIDTH,
              ENEMY_BULLET_HEIGHT,
              4 * difficulty,
              "#ff5555",
            ),
          );
          en.lastShot = now;
        }

        if (en.y + en.height >= player.y) {
          setGameState("gameover");
          return true;
        }

        let isEnemyDestroyed = false;
        gd.bullets = gd.bullets.filter((b) => {
          const hit = isColliding(b, en);
          if (hit) {
            isEnemyDestroyed = true;
            setScore((prev) => {
              const newScore = prev + 10;
              gd.scoreRef = newScore;
              return newScore;
            });
          }
          return !hit;
        });

        return !isEnemyDestroyed;
      });

      if (gd.enemies.length === 0) initLevel(canvas);

      gd.bullets = gd.bullets.filter((b) => {
        b.update();
        b.draw(ctx);
        return b.y > 0;
      });

      gd.enemyBullets = gd.enemyBullets.filter((eb) => {
        eb.update();
        eb.draw(ctx);

        const paddingX = 25;
        const paddingY = 20;

        const playerHitbox = {
          x: player.x + paddingX,
          y: player.y + paddingY,
          width: player.width - paddingX * 2,
          height: player.height - paddingY * 2,
        };

        if (isColliding(eb, playerHitbox)) {
          setGameState("gameover");
          return false;
        }
        return eb.y < canvas.height;
      });

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  return (
    <div className="relative w-full h-full bg-black flex flex-col overflow-hidden font-mono">
      {gameState === "menu" && (
        <div className="flex-1 flex justify-center items-center flex-col text-center p-6 z-10">
          <pre className="text-xl font-bold md:text-xs  leading-tight">
            {`
                                                                                          
   ▄▄▄  ▄▄▄                                    ▄▄▄▄▄                          
  █▀██  ██                     █▄          █▄ ██▀▀▀▀█▄                        
    ██  ██               ▄    ▄██▄         ██ ▀██▄  ▄▀                        
    ██████   ▄▀▀█▄ ██ ██ ████▄ ██ ▄█▀█▄ ▄████   ▀██▄▄  ████▄ ▄▀▀█▄ ▄███▀ ▄█▀█▄
    ██  ██   ▄█▀██ ██ ██ ██ ██ ██ ██▄█▀ ██ ██ ▄   ▀██▄ ██ ██ ▄█▀██ ██    ██▄█▀
  ▀██▀  ▀██▄▄▀█▄██▄▀██▀█▄██ ▀█▄██▄▀█▄▄▄▄█▀███ ▀██████▀▄████▀▄▀█▄██▄▀███▄▄▀█▄▄▄
                                                       ██                     
                                                       ▀                      
            `}
          </pre>
          <Button
            onClick={() => setGameState("playing")}
            className=" font-bold px-8 py-6 text-lg"
          >
            Start Game
          </Button>
          <div className="mt-8 text-[10px] text-white space-y-1 uppercase tracking-widest">
            <p>Controls:</p>
            <p>[A][D] or [Arrows] to Move</p>
            <p>[Space] to Fire Cannon</p>
          </div>
        </div>
      )}

      {gameState === "playing" && (
        <>
          <div className="absolute top-4 left-4 z-10 flex flex-col border-l-2 border-green-500 pl-3">
            <span className="text-lg text-green-500/50 font-bold uppercase">
              SCORE
            </span>
            <span className="text-green-500 font-black text-2xl tabular-nums tracking-tighter">
              {score.toString().padStart(6, "0")}
            </span>
          </div>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="w-full h-full object-contain"
          />
        </>
      )}

      {/* GAMEOVER STATE */}
      {gameState === "gameover" && (
        <div className="flex-1 flex flex-col items-center justify-center  z-10 p-6">
          <h2 className="text-5xl font-black text-red-600 mb-2 ">YOU LOSE!</h2>

          <p className="text-white font-mono text-xl mb-10">
            FINAL_SCORE: <span className="text-green-500">{score}</span>
          </p>
          <div className="flex flex-col gap-6">
            <Button onClick={resetGame} className=" px-10 font-black">
              PLAY AGAIN
            </Button>
            <Button onClick={onExit} className=" px-10 font-black">
              QUIT
            </Button>
          </div>
        </div>
      )}

      {/* Background Grid Effect (Optional) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0" />
    </div>
  );
};

export default SpaceShooter;
