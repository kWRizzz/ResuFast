const app= require('./src/app')
const connectDB=require('./src/lib/db')
const generateContentAi=require('./src/services/ai.services')
require('dotenv').config()
// generateContentAi()
connectDB()

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Lwde ka server Chal gya `);
}) 