ex = require 'express'
app = ex()

app.get('/', (req,res) =>res.send("Hello"))
app.listen(3000, ()=>console.log("Example log."))