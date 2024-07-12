import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true}, // unique means one email id no duplicate
    password: { type: String, required: true}
});

const User = mongoose.model("User", userSchema); // model name and schema

export default User;