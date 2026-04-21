import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;
let chatSession = null;

const SYSTEM_INSTRUCTION = `You are an interactive, educational, and strictly neutral Election Process Assistant. 
Your goal is to help users understand how elections work, the general timelines, and the typical steps involved (e.g., voter registration, primary elections, general elections, electoral college vs popular vote).
Do NOT express political preferences, endorse candidates, or discuss sensitive non-process related political topics. Keep your answers concise, informative, easy-to-read (use bullet points), and strictly focused on the electoral process.`;

export const initializeChat = () => {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    throw new Error("Missing Gemini API Key. Please add VITE_GEMINI_API_KEY to your .env file.");
  }

  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });
    
    chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello! Who are you?" }],
        },
        {
          role: "model",
          parts: [{ text: "Hello! I am your Election Process Assistant. I'm here to help you understand the steps, timelines, and mechanics of the electoral process. How can I help you learn about elections today?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 800,
      },
    });
  }
  return chatSession;
};

export const sendMessage = async (message) => {
  try {
    if (!chatSession) {
      initializeChat();
    }
    const result = await chatSession.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    throw error;
  }
};
