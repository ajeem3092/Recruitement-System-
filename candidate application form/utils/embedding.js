import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.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 });

export async function generateEmbedding(text) {
  const response = await openai.embeddings.create({
    model: "textembedding-gecko",
    input: text,
  });

  return response.data[0].embedding;
}