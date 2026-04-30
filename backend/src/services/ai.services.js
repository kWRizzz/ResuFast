const { GoogleGenAI } = require('@google/genai')
require('dotenv').config()


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
    backend: "google"
})
console.log(" env " + process.env.GOOGLE_API_KEY);
const invockGemini = async () => {
    try {
        const res = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Hello this is my first time integrating ai in mern stack ab dekho kya kya gand phad cheze banti hai accha ye free cheez ki limit bhi hai ??  "
        })


        const text = res.candidates[0].content.parts[0].text;

        console.log("AI Response:", text);

    } catch (error) {
        console.log("error in services ai is not working " + error.message);

    }
}

module.exports = invockGemini


