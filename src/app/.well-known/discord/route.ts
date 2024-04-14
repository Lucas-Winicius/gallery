import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const discord = process.env.NEXT_PUBLIC_DISCORD;
  return NextResponse.json(discord);
}
