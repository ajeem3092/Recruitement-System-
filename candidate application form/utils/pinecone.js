import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
  apiKey: process.env.pcsk_3e7Zds_3KChuVdZCr1SagkVkD29DUBKF4tzt1hgmtp9cGuUeXaWokqenQQFuPBMRPUjoEu,
  environment: "us-east-1",
});

export const pineconeIndex = pinecone.index("loggingcandidate");