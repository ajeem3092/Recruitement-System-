import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.AIzaSyB1EC36cVN_2C5YZhrtoTLBsI1KFVbX3Lw);

export async function generateSummary(resumeText) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Summarize this resume into a candidate profile:\n${resumeText}`;
  const response = await model.generateContent(prompt);
  return response.response.text();
}

export async function matchCandidate(jobDescription, resumeText) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Evaluate this resume against the given job description and provide feedback on missing skills:\n
  Job Description: ${jobDescription}\n
  Resume: ${resumeText}`;

  const response = await model.generateContent(prompt);
  return response.response.text();
}
