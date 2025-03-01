import pdfParse from "pdf-parse";

export async function parsePDF(file) {

  const dataBuffer = await file.arrayBuffer();

  const data = await pdfParse(Buffer.from(dataBuffer));

  return extractKeywords(data.text);
}

function extractKeywords(text) {
  const skillsRegex = /\b(JavaScript|Python|React|Java|SQL|Node\.js|AWS|Docker)\b/gi;
  const experienceRegex = /(\d+)\s*(years|yrs|Yrs)/gi;
  const educationRegex = /(Bachelor|Master|PhD|BSc|MSc|BE|ME|B\.Tech|M\.Tech)/gi;

  return {
    skills: text.match(skillsRegex) || [],
    experience: text.match(experienceRegex) || [],
    education: text.match(educationRegex) || [],
  };
}
