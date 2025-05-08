const mongoose = require("mongoose")

const roductSchema = new mongoose.Schema({

  name: {type: String, require: true},
  price: {type: Number, require: true},
  image: {type: String, default: ""},
  quantity: {type: Number, default: 0},
  instock: {type: Boolean, default: false},

})
const product = new mongoose.model("product", roductSchema)

//if i am going to use some something outside of this file i most export it 

module.exports = product

