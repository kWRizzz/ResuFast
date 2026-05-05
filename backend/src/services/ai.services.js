const { GoogleGenAI } = require('@google/genai')
require('dotenv').config()

const { z } = require('zod')
const { zodToJsonSchema } = require('zod-to-json-schema')


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
    backend: "google"
})
// const invockGemini = async () => {
//     try {
//         const res = await ai.models.generateContent({
//             model: "gemini-2.5-flash",
//             contents: "Hello this is my first time integrating ai in mern stack ab dekho kya kya gand phad cheze banti hai accha ye free cheez ki limit bhi hai ??  "
//         })


//         const text = res.candidates[0].content.parts[0].text;

//         console.log("AI Response:", text);

//     } catch (error) {
//         console.log("error in services ai is not working " + error.message);

//     }
// }

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A match score which varies from 0 to 100"),
    technicalQuestions: z.array(z.object({
        questions: z.string().describe(" most important questions that can be asked "),
        intentions: z.string().describe("what was the intentions behind the questions asked "),
        answers: z.string().describe("what was the answers to that questions only in 100 words")
    })).describe("Tech Question should not exceed 100 words "),
    BehaviourQuestions: z.array(z.object({
        questions: z.string().describe("most important questions that can be asked "),
        intentions: z.string().describe("what was the intentions behind the questions asked"),
        answers: z.string().describe("what was the answers to that questions only in 100 words")
    })).describe("Behaviour question should not exceed more than 100 words "),
    skillGap: z.array(z.object({
        skills: z.string().describe("You lack this skills while you have these skills in 50 words max "),
        severity: z.enum(["low", "medium", "high"]).describe("severity in 50 words max")
    })).describe("skilgap should not exceed 60 words"),
    preprationPlan: z.array(z.object({
        days: z.number().describe("No of days from today not exceed 15 words"),
        focus: z.string().describe("How much focus should you do not exceed 15 words"),
        task: z.array(z.string()).describe("what task to do not exceed more than 20 words")
    })).describe("preparation plan should not exceed 50 to 60 words")
})


const generateContentAi = async ({ resume, selfDescription, jobDescription }) => {
    const prompt= `generate an interview detail for the candiate for the following repoort:
        resume:${resume},
        selfDescription:${selfDescription},
        jobDescription:${jobDescription}
    `

    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:prompt,
        config:{
            responseMimeType:"application/json",
            responseSchema:zodToJsonSchema(interviewReportSchema)
        }
    })
}

module.exports= generateContentAi


