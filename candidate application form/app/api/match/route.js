import { matchCandidate, generateFeedback } from "@/utils/gemini";

export async function POST(req) {
  const { jobDescription, resumeText } = await req.json();

  if (!jobDescription || !resumeText) {
    return Response.json({ error: "Missing input" }, { status: 400 });
  }

  try {
    const matchResult = await matchCandidate(jobDescription, resumeText);
    const feedback = await generateFeedback(jobDescription, resumeText);

    return Response.json({ success: true, matchResult, feedback });
  } 
  catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
