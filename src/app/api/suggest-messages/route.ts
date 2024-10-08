import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Adjectives array for variation
const topics = [
    'travel',
    'hobbies',
    'music',
    'movies',
    'books',
    'goals',
    'food',
    'memories',
    'friendship',
    'dreams',
    'family',
    'favorite places',
    'technology',
    'sports',
    'personal growth',
    'adventure',
    'nature',
    'creativity',
    'learning',
    'fun facts'
];

// Helper function to generate a random prompt
const getRandomPrompt = () => {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const prompt = `Generate three open-ended questions or sentences about the topic "${randomTopic}". The output should be a single string where the three sentences are separated only by '||' not other symbol. Do not add '||' at the start or end of the string and do not include any additional symbols, characters, or numbers at the start of the responses.. Each sentence should be under 200 words and encourage engaging, thoughtful conversations.`;
    return prompt;
};


export async function GET() {
    try {
        // Generate a new prompt on each request
        const prompt = getRandomPrompt();

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        return NextResponse.json({
            success: true,
            message: response, // Send generated text
        }, { status: 200 });
    } catch (error) {
        console.log("Error generating messages", error);
        return NextResponse.json({
            success: false,
            message: 'Error generating messages',
        }, { status: 500 });
    }
}
