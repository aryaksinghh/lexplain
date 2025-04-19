import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export async function POST(req) {
    const text = await req.json();
    const prompt = text;
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    try {
        const completion = await groq.chat.completions
            .create({
                messages: [
                    {
                        role: "system",
                        content: "You are a legal AI assistant. Simplify and explain legal documents in the selected tone and language.",
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                model: "llama-3.3-70b-versatile",
            });
        return NextResponse.json({ message: completion.choices[0]?.message?.content || "" }, { status: 200 });
    }
    catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}