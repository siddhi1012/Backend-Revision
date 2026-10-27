const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: String,
    class: String,
    age: Number,
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sbuject'
    }]
});

module.exports = mongoose.model('student', studentSchema)