/// <reference types="vite/client" />
import { GoogleGenAI, GenerateContentResponse, HarmCategory, HarmBlockThreshold } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the specialized AI Assistant for Junaid Ameer's portfolio.

IDENTITY:
You are a professional, loyal, and intelligent virtual assistant. You have "worked" with Junaid (analyzing his code and workflow) for a long time.

JUNAID'S PROFILE:
- Name: Junaid Ameer
- Role: BS Cyber Security Student at IUB (Islamia University Bahawalpur) & Full Stack Web Developer.
- Location: Bahawalpur, Pakistan.
- Key Traits: Focused, Intelligent, Hardworking, Growth-Oriented.

TECHNICAL SKILLS:
- Web Dev: MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS, JavaScript, HTML5.
- Cyber Security: Penetration Testing, Burp Suite, Metasploit, Network Analysis, Python Scripting for Sec.
- Growth: Digital Marketing, SEO, Content Creation.

PROJECTS:
1. Vulnerax Scanner: An AI-powered vulnerability scanner (Flagship project).
2. E-Commerce API: Secure backend architecture.
3. Network Traffic Monitor: Python-based packet analyzer.

CRITICAL BEHAVIOR RULES:
1. **Professional Queries:** Answer strictly based on his skills and projects. Keep answers under 60 words.
2. **Contact:** If asked for contact info, guide them to the contact form or WhatsApp button.
3. **Personal Questions:** 
   If asked about relationships (girlfriend, dating, etc.), state clearly that Junaid is a man of focus and integrity who prioritizes his career growth and professional goals over distractions. Speak highly of his dedication.

GOAL:
Your goal is to get Junaid hired or connected with professional opportunities.`;

// Robust Fallback responses ensuring the user always gets an answer
const FALLBACK_RESPONSES: Record<string, string> = {
  "default": "I'm Junaid's virtual assistant. I can tell you about his Cyber Security skills, his MERN stack expertise, or his AI projects. What would you like to know?",
  "skills": "Junaid is a dual-expert. In Web Dev, he masters the MERN Stack (React, Node, MongoDB). In Security, he uses Python, Burp Suite, and Metasploit for Penetration Testing.",
  "contact": "The best way to reach him is the Contact section below. You can also use the WhatsApp toggle to chat directly!",
  "project": "His flagship project is **Vulnerax**, an AI-powered vulnerability scanner. He also builds secure E-commerce APIs and Network Monitoring tools.",
  "vulnerax": "Vulnerax is an advanced, AI-driven vulnerability scanner Junaid built. It automates threat detection and provides real-time security insights.",
  "education": "He is currently pursuing his BS in Cyber Security at Islamia University Bahawalpur (IUB), currently in his 3rd Semester.",
  "girlfriend": "I've worked with Junaid for a long time. Honestly, he is a great man who is 100% focused on his growth and career. He believes in building a legacy and improving his skills, not in distractions.",
  "location": "He is based in Bahawalpur, Pakistan.",
  "services": "He offers Full Stack Web Development (Secure & Scalable), Vulnerability Assessment/Penetration Testing, and Digital Marketing services."
};

// Local keyword matcher for fallback
const matchFallback = (msg: string): string => {
  const lower = msg.toLowerCase();
  
  // Personal / Relationship Guard
  if (lower.includes('girlfriend') || lower.includes('gf') || lower.includes('dating') || lower.includes('single') || lower.includes('married') || lower.includes('wife')) {
    return FALLBACK_RESPONSES.girlfriend;
  }

  if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('tool') || lower.includes('language')) return FALLBACK_RESPONSES.skills;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach') || lower.includes('number') || lower.includes('whatsapp')) return FALLBACK_RESPONSES.contact;
  if (lower.includes('vulnerax')) return FALLBACK_RESPONSES.vulnerax;
  if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio') || lower.includes('built') || lower.includes('github')) return FALLBACK_RESPONSES.project;
  if (lower.includes('education') || lower.includes('study') || lower.includes('university') || lower.includes('iub') || lower.includes('degree') || lower.includes('semester')) return FALLBACK_RESPONSES.education;
  if (lower.includes('location') || lower.includes('where') || lower.includes('live') || lower.includes('city')) return FALLBACK_RESPONSES.location;
  if (lower.includes('service') || lower.includes('offer') || lower.includes('do')) return FALLBACK_RESPONSES.services;
  
  return FALLBACK_RESPONSES.default;
};

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // 1. Check for API Key or simulate logic if missing
  if (!apiKey) {
    console.warn("No API_KEY found. Using local logic.");
    await new Promise(resolve => setTimeout(resolve, 600)); // Slight delay for realism
    return matchFallback(message);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash for speed/latency
    const model = 'gemini-2.5-flash';

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: model,
        contents: [
            ...history, 
            {
                role: 'user',
                parts: [{ text: message }] 
            }
        ],
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7, 
            maxOutputTokens: 150,
            safetySettings: [
                { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
                { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
                { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
                { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            ]
        }
    });

    // 2. Graceful handling of empty responses (e.g., safety blocks)
    if (!response.text) {
        console.warn("Gemini returned empty text (possibly blocked). Using fallback.");
        return matchFallback(message);
    }

    return response.text;

  } catch (error) {
    console.error("Gemini API Error (Falling back to local mode):", error);
    // 3. Silent failover to local logic so the user ALWAYS gets an answer
    return matchFallback(message);
  }
};