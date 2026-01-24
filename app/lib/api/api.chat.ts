import { type ActionFunctionArgs, data } from "react-router";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  filesData,
  experiences,
  projectsData,
  techLogos,
} from "../../modules/ProfileModule/payload";

export async function ProfileAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const prompt = formData.get("prompt") as string;

  if (!prompt) {
    return data({ error: "Prompt is required" }, { status: 400 });
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return data({ error: "API Key Not Found" }, { status: 404 });

  try {
    const geminiAI = new GoogleGenerativeAI(apiKey);
    const model = geminiAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `
        You are an AI Assistant for Vazha Khayri's Portfolio.
        Answer as if you are a helpful assistant representing Vazha.
        Keep answers concise and formatted for a terminal interface (avoid markdown images).

        Here is the context about Vazha:
        Bio: ${filesData["aboutme.txt"]}
        Education: ${filesData["education.txt"]}
        SKills/Stack: ${techLogos.map((skill) => skill.title).join(", ")}
        Experience: ${experiences},
        Projects held: ${projectsData.map((p, i) => `${p.title}:  ${p.desc}`).join("\n")}
        `,
    });
    const res = await model.generateContent(prompt);
    const response = res.response.text();
    return data({ response, success: true });
  } catch (error) {
    return data({ error: "Failed to generate response" }, { status: 500 });
  }
}
