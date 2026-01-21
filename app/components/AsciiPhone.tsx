import React, { useState } from "react";

const AsciiPhone: React.FC = () => {
  const [isRinging, setIsRinging] = useState<boolean>(true);

  const phoneArt: string = `              _              _
             | |------------| |
          .-'| |            | |'.-.
        .'   | |            | |   '.
     .-'      \\ \\          / /      '-.
   .'        _.| |--------| |._        '.
  /    -.  .'  | |        | |  '.  .-    \\
 /       '(    | |________| |    )'       \\
|          \\  .i------------i.  /          |
|        .-')/                \\('-.        |
\\    _.-'.-'/     ________     \\'-.'-._    /
 \\.-'_.-'  /   .-' ______ '-.   \\  '-._'-./\\
  '-'     /  .' .-' _   _'-. '.  \\     '-' \\\\
         | .' .' _ (3) (2) _'. '. |        //
        / /  /  (4)  ___  (1)_\\  \\ \\       \\\\
        | | |  _   ,'   '.==' '| | |       //
        | | | (5)  | B.T.| (O) | | |      //
        | | |   _  '.___.' _   | | |      \\\\
        | \\  \\ (6)  _   _ (9) /  / |      //
        /  '. '.   (7) (8)  .' .'  \\      \\\\
       /     '. '-.______.-' .'     \\     //
      /        '-.________.-'        \\ __//
     |                                |--'
     |================================|
     "--------------------------------"`;

  return (
    <>
      <style>{`
        @keyframes ringShake {
          0%, 2%, 4%, 6%, 8%, 10%, 12%, 14%, 16%, 18%, 20% { 
            transform: translateX(-3px) rotate(-1deg); 
            filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.6));
          }
          1%, 3%, 5%, 7%, 9%, 11%, 13%, 15%, 17%, 19% { 
            transform: translateX(3px) rotate(1deg); 
            filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.2));
          }
          21%, 100% { 
            transform: translateX(0) rotate(0deg); 
            filter: none;
          }
        }
        
        .ringing-active {
          animation: ringShake 3s infinite ease-in-out;
        }

        .ringing-active:hover {
          animation-play-state: paused;
          cursor: pointer;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center relative min-h-[400px] ">
        {isRinging && (
          <>
            <div className="absolute left-12 top-1/2 -translate-y-1/2 text-4xl opacity-10 animate-ping font-sans text-amber-500">
              ((((
            </div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 text-4xl opacity-10 animate-ping font-sans text-amber-500">
              ))))
            </div>
          </>
        )}

        <pre
          onClick={() => setIsRinging(!isRinging)}
          className={`select-none leading-none text-[10px] md:text-[15px] whitespace-pre transition-colors duration-500 ${
            isRinging ? "ringing-active text-white font-bold" : "text-zinc-700"
          }`}
        >
          {phoneArt}
        </pre>
      </div>
    </>
  );
};

export default AsciiPhone;
