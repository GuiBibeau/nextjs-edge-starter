import type { NextRequest } from "next/server";

export default async function handler(req: NextRequest) {
  // Contrary to regular Next.js API routes, we use Standard Web APIs
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  return new Response(`Hello ${name ?? "World"}!`);
}

// this will specify to the Vercel build system to deply to the edge network!
export const config = {
  runtime: "experimental-edge",
};
