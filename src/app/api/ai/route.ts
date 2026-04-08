import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({ content: "Le serveur a bien reçu votre texte : " + data.text.substring(0, 20) + "..." });
  } catch (err) {
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 });
  }
}