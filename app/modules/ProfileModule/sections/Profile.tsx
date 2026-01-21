import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { TerminalIcon, NotebookIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { bootSequence, filesData, VAZHAFETCH } from "../payload";
import Skills from "./Skills";

type FileName = keyof typeof filesData;
type NewHistory = {
  type: string;
  content: string | string[];
};

const Profile = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [hasBooted, setHasBooted] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [history, setHistory] = useState<NewHistory[]>([]);
  const [input, setInput] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || hasBooted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBooted(true);
        }
      },
      {
        threshold: 1,
      },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const el = terminalContainerRef.current;
    if (!el) return;

    el.scrollTop = el.scrollHeight;
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedInput = input.trim().toLowerCase();
      const [command, ...args] = trimmedInput.split(" ");
      const arg = args[0];

      let newHistory = [...history, { type: "input", content: input }];

      switch (command) {
        case "help":
          newHistory.push({
            type: "output",
            content:
              "List of usable commands: \n- ls (show files)\n- cat [input desired file] (read file)\n- vazhafetch (vazha's cpu stats)\n- clear (clear the terminal)\n- help",
          });
          break;
        case "ls":
          newHistory.push({
            type: "output",
            content: Object.keys(filesData),
          });
          break;
        case "cat":
          if (arg && filesData[arg as FileName]) {
            newHistory.push({
              type: "output",
              content: filesData[arg as FileName],
            });
          } else {
            newHistory.push({
              type: "output",
              content: arg
                ? `Error: File '${arg}' not found`
                : "Cat: file arg found.",
            });
          }
          break;
        case "vazhafetch":
          newHistory.push({ type: "output", content: VAZHAFETCH });
          break;
        case "clear":
          newHistory = [];
          break;
        case "":
          break;

        default:
          newHistory.push({
            type: "output",
            content: `sh: ${command}: command not found`,
          });
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  useEffect(() => {
    if (!hasBooted) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setBootLines((prev) => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setBootLines((prev) => [...prev, "Welcome to Vazha's Portfolio"]);

          setTimeout(() => {
            setIsBooting(false);
          }, 700);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [hasBooted]);

  return (
    <section
      id="profile"
      ref={sectionRef}
      className=" flex flex-col justify-center min-h-screen  relative text-white"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <Card
          className="w-full border-2 border-white max-md:h-72 flex flex-col overflow-hidden crt-card"
          onClick={() => inputRef.current?.focus()}
        >
          <CardHeader>
            <CardTitle>session: portfolio console</CardTitle>
            <TerminalIcon />
          </CardHeader>

          <div
            ref={terminalContainerRef}
            className="px-2 max-h-72 md:max-h-[630px] py-4 overflow-y-auto custom-scrollbar flex-1 relative z-20"
          >
            {isBooting ? (
              <div className="space-y-1">
                {bootLines.map((line, idx) => (
                  <div key={idx} className=" tracking-tighter">
                    {line}
                  </div>
                ))}
                <div className="w-3 h-6 bg-white animate-pulse inline-block mt-2" />
              </div>
            ) : (
              <>
                <p className="max-md:text-sm">
                  [HINT]: Type 'help' for displaying console command
                </p>

                <div className="space-y-2">
                  {history.map((item, i) => (
                    <div key={i}>
                      {item.type === "input" ? (
                        <div className="flex gap-2 items-center">
                          <span className="max-md:text-sm text-white select-none whitespace-nowrap">
                            guest@portfolio:~${" "}
                          </span>
                          <span className="max-md:text-sm text-green-500 font-bold">
                            {item.content}
                          </span>
                        </div>
                      ) : Array.isArray(item.content) ? (
                        <div className="py-1 max-md:text-sm space-y-1">
                          {item.content.map((file, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <NotebookIcon className="size-5" />
                              <span>{file}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="max-md:text-sm text-white whitespace-pre-wrap">
                          {item.content}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center gap-2">
                    <span className="max-md:text-sm text-white select-none whitespace-nowrap">
                      guest@portfolio:~${" "}
                    </span>

                    <div className="relative flex-1 flex items-center overflow-hidden">
                      <input
                        type="text"
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent max-md:text-sm w-full text-green-500 border-none outline-none font-bold caret-white whitespace-nowrap overflow-hidden"
                      />

                      {input.length > 86 && (
                        <div className="absolute right-0 bg-black text-green-500 pl-2 pr-1 font-bold animate-pulse">
                          {">"}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Card>

        <div className="md:w-3xl flex flex-col gap-3">
          <Card className=" border-2 border-white">
            <CardHeader className="flex bg-white text-black flex-row justify-between relative z-20">
              <CardTitle> session: profile picture</CardTitle>
              <TerminalIcon />
            </CardHeader>
            <div className="relative z-20">
              <img
                src="/vazha.png"
                alt="Vazha's Picture"
                className="border w-full"
              />
            </div>
          </Card>
          <div className="flex flex-row gap-3 justify-between">
            <Card className="w-full text-center border-2 border-white">
              <CardHeader className="flex bg-white text-black flex-row justify-between relative z-20">
                <CardTitle>projects handled</CardTitle>
              </CardHeader>
              <h1 className="font-bold py-4 crt-title text-4xl relative z-20">
                8++
              </h1>
            </Card>
            <Card className="w-full text-center border-2 border-white">
              <CardHeader className="flex  bg-white text-black flex-row justify-between relative z-20">
                <CardTitle className="t"> Experience (Year)</CardTitle>
              </CardHeader>
              <h1 className="font-bold py-4 crt-title text-4xl relative z-20">
                1++
              </h1>
            </Card>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Profile;
