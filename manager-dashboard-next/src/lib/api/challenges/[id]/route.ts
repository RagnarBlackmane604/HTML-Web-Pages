import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const challenge = {
    id,
    title: `Challenge #${id}`,
    description: "Example challenge description",
  };

  return NextResponse.json(challenge);
}
