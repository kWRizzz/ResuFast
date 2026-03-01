const app= require('./src/app')
const connectDB=require('./src/lib/db')
require('dotenv').config()

connectDB()

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Lwde ka server Chal gya `);
}) 