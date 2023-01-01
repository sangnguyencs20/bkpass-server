const mongoose = require('mongoose'),  Schema = mongoose.Schema;

const feedbackSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    numStarsRate: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: false,
        unique: true
    },
    phoneNum : {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    gender : {
        type: String,
        enum: ['male', 'female', 'secret'],
        required: true
    },
    password : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    feedbacks : {
        type: [feedbackSchema],
        default: []
    },
    numSellingItems: {
        type: Number,
        default: 0
    },
    numSaledItems: {
        type: Number,
        default: 0
    },
    averageStarsRate : {
        type: Number,
        default: 0
    },
    numRate: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    }
})
userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}
module.exports = mongoose.model("Users", userSchema, "Users");