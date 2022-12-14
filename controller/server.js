const app = require("./main")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/auth", {
  useUnifiedTopology : true,
  useNewUrlParser    : true,
})

const con = mongoose.connection
con.on("open", () => {
  console.log("database connected")
})

app.listen(8000, () => {
  console.log("Server is running on Port 8000")
})
module.exports = con
