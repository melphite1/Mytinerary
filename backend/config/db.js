const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODB_URI,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(() => console.log("database conected"))
.catch(error => (console.log(error)))