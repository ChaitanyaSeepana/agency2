import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Simple response that will definitely work
    return NextResponse.json({ message: "Email endpoint working" });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 