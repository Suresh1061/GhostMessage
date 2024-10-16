const GeneratePrompt = () => {
    const topics = [
        "Write an inspiring message.",
        "What advice would you give to someone feeling low?",
        "Suggest three motivational quotes.",
        "Share a life lesson you've learned recently.",
        "What would you say to encourage someone pursuing their dreams?",
        "If you could give one piece of advice to your younger self, what would it be?",
        "How do you overcome challenges in difficult times?",
        "What makes you feel most grateful in life right now?",
        "What's the best piece of advice you've ever received?",
        "What question would you ask to spark a deep conversation with someone?"
    ]

    const timestamp = new Date().getTime();
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    const prompt = `Generate three sentences about the topic '${randomTopic}' at time ${timestamp}. Each sentence should be under 200 words. The output should be a single string, with each sentence is separated by '||'. Do not add '||' at the start or end of the string. Do not include numbers, bullet points, special characters, or any other symbols. The output should only contain plain sentences or questions separated by '||'`;

    return prompt
}

export default GeneratePrompt