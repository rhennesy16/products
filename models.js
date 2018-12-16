const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/com-man', { useNewUrlParser: true });


const ProductSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Give me a name please"],
        minlength: [3, "Come on, give me atleast 3 characters"]
    },
    qty: {
        type: Number,
        required: [true, "Please enter a quantity"],
        min: [0, "Can't sell nothing if nothing is here...."],
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
        min: [0, "Price cannot be less than 0"],
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);