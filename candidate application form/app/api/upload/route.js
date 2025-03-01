import { parsePDF } from "@/utils/pdfParser";
import { pineconeIndex } from "@/utils/pinecone";
import { generateEmbedding } from "@/utils/embedding";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("resume");

  if (!file) return Response.json({ error: "No file uploaded" }, { status: 400 });

  try {
    const extractedData = await parsePDF(file);
    const text = `${extractedData.skills.join(", ")} ${extractedData.experience.join(", ")} ${extractedData.education.join(", ")}`;
    const embedding = await generateEmbedding(text);

    await pineconeIndex.upsert([{ id: Date.now().toString(), values: embedding }]);

    return Response.json({ success: true, data: extractedData });
  } 
  catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
