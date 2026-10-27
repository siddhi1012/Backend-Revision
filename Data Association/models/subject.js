const mongoose = require("mongoose");
const student = require("./student");

const subjectSchema = mongoose.Schema({
    subjectName: String,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    marks: Number
})

module.exports = mongoose.model("subject", subjectSchema);