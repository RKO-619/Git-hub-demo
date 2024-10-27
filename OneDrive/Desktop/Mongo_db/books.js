const mongoose = require('mongoose');
const { schema } = require('moongose/models/user_model');

main()
.then(() => {
    console.log("connection sucesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const userSchema = new mongoose.Schema({
    title :{
      type:  String,
      required: true,
    },
    author: {
       type: String,
    },
    price : {
       type: Number,
       min: [1, "price is too low for amazon"]
    },
    category:{
        type: String,
        enum: ["fiction","non-fiction"],
    },
});

const Book = mongoose.model("Book", userSchema);

// let book1 = new Book({
//     title: "Atomic habits",
//     author: "RD",
//     price: "900",
//     category: "fiction"
// });
// book1.save().then((res) => {
//     console.log(res);
// })
// .catch(err => console.log(err));

Book.findByIdAndUpdate("671cd23fdc93572ac8a36e1e", {price : -500},{runValidators: true})
.then((res) => {
    console.log(res);
})
.catch(err => console.log(err.errors.price.properties.message));

