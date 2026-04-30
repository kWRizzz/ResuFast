const mongoose = require('mongoose')

/**
 * 
 * Job Description Schema:String
 * Resume :string
 * Self Description:String
 * 
 * matchScore:Number
 * 
 * Technical Question:
 * [
 *  {
 *      questions:""
 *      intentions:""
 *      Answers:""
 *  }
 * ]
 * 
 * Behaviour Questions:
 * [
 *  {
 *      questions:""
 *      intentions:""
 *      Answers:""
 *  }
 * ]
 * 
 * Skill Gap:
 * [
 *  {
 *      skills:""
 *      sevirity:{
 *                  type:String
 *                  enum:["low","med","high"]   
 *               }
 *  }
 * ]
 * 
 * prepration Plan:[{
 *      
 *      day:String
 *      focus:String
 *      task:[string] 
 * }]
 * 
 **/




const interviewReportSchema = mongoose.Schema({

    JobDescription: {
        type: String,
        required: true
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
        required: true
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestions:[technicalQuestionsSchema],
    BehaviourQuestions:[BehaviourQuestionSchema],
    skillGap:[skillGapSchema],
    preprationPlan:[preprationPlanSchema]
},
{
    timestamps:true
}
)

const technicalQuestionsSchema = mongoose.Schema({
    questions: {
        type: String,
        required: true
    },
    intentions: {
        type: String,
        required: true
    },
    answers: {
        type: String,
        required: true
    }
},
{
    _id:false
}
)

const BehaviourQuestionSchema = mongoose.Schema({
    questions: {
        type: String,
        required: true
    },
    intentions: {
        type: String,
        required: true
    },
    answers: {
        type: String,
        required: true
    }
},
{
    _id:false
}
)

const skillGapSchema= mongoose.Schema({
    skills:{
        type:String,
        required:true
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:true
    }
},
{
    _id:false
}

)

const preprationPlanSchema= mongoose.Schema({
    days:{
        type:Number,
        required:true
    },
    focus:{
        type:String,
        required:true
    },
    task:[
        {
            type:String,
            required:true
        }
    ]
},
{
    _id:false
}
)


module.exports= mongoose.model("interviewreport",interviewReportSchema)

