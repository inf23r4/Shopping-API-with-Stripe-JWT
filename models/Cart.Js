const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true,},
        pruducts: [{
            productId: {
                type: String
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
        ],     
    },{timestamps: true});

    module.exports = moongoose.model("Cart", CartSchema )