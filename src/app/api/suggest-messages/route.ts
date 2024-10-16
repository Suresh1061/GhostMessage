import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: Request) {
    try {
        // Generate a new prompt on each request
        const { prompt } = await request.json();

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        return NextResponse.json({
            success: true,
            message: response,
        }, {
            status: 200
        });
    } catch (error) {
        console.log("Error generating messages", error);
        return NextResponse.json({
            success: false,
            message: 'Error generating messages',
        }, { status: 500 });
    }
}
