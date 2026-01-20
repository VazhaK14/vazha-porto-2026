import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { FileDiff, TerminalIcon, NotebookIcon } from "lucide-react";
import React, {
  useState,
  useEffect,
  useRef,
  type KeyboardEventHandler,
} from "react";
import { filesData } from "../payload";

type FileName = keyof typeof filesData;
type NewHistory = {
  type: string;
  content: string | string[];
};

const Profile = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootLines, setBootLines] = useState([]);
  const [history, setHistory] = useState<NewHistory[]>([]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      const container = terminalEndRef.current;
      container.scrollTop = container.scrollHeight;
    }
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
              "Command yang dapat digunakan adalah: \n- ls (show files)\n- cat [input desired file] (read file)\n- vazhafetch (vazha's cpu stats)\n- clear (clear the terminal)\n- help.",
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
          newHistory.push({ type: "output", content: "dummy" });
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

  return (
    <section className="min-h-screen px-12  relative text-white">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <Card
          className="w-full max-md:h-72 flex flex-col overflow-hidden"
          onClick={() => inputRef.current?.focus()}
        >
          <CardHeader className="flex bg-white text-black flex-row justify-between shrink-0">
            <CardTitle> session: portfolio console</CardTitle>
            <TerminalIcon />
          </CardHeader>
          <div
            className="px-2 max-h-72 md:max-h-[630px] py-4 overflow-y-auto custom-scrollbar flex-1"
            ref={terminalEndRef}
          >
            <p className="max-md:text-sm">
              [HINT]: Type 'help' for displaying console command
            </p>
            <div className="space-y-2">
              {history.map((item, i) => (
                <div key={i}>
                  {item.type === "input" ? (
                    <div className="flex gap-2 items-center">
                      <span className="max-md:text-sm inline-block text-white select-none whitespace-nowrap">
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
                    <p className=" max-md:text-sm text-white whitespace-pre-wrap">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}

              <div className="flex text-center items-center gap-2">
                <span className=" max-md:text-sm inline-block text-white select-none whitespace-nowrap">
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
                    style={{ textOverflow: "clip" }}
                  />
                  {input.length > 86 && (
                    <div className="absolute right-0 bg-black text-green-500 pl-2 pr-1 font-bold animate-pulse">
                      {">"}
                    </div>
                  )}
                </div>
              </div>

              <div ref={terminalEndRef} />
            </div>
          </div>
        </Card>
        <div className="md:w-3xl flex flex-col gap-3">
          <Card>
            <CardHeader className="flex bg-white text-black flex-row justify-between">
              <CardTitle> session: profile picture</CardTitle>
              <TerminalIcon />
            </CardHeader>
            <img src="/vazha.png" alt="Vazha's Picture" className="border " />
          </Card>
          <div className="flex flex-row gap-3 justify-between">
            <Card className="w-full text-center">
              <CardHeader className="flex bg-white text-black flex-row justify-between">
                <CardTitle>projects handled</CardTitle>
              </CardHeader>
              <h1 className="font-bold py-4 crt-title text-4xl">8++</h1>
            </Card>
            <Card className="w-full text-center">
              <CardHeader className="flex  bg-white text-black flex-row justify-between">
                <CardTitle className="t"> Experience (Year)</CardTitle>
              </CardHeader>
              <h1 className="font-bold py-4 crt-title scanlines text-4xl">
                1++
              </h1>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
