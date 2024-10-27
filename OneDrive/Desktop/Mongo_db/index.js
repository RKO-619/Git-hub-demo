const mongoose = require('mongoose');
const { schema } = require('moongose/models/user_model');

main()
.then(() => {
    console.log("connection sucesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);
