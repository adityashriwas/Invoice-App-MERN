import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  productName:{
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
});

export default mongoose.model("Invoice", invoiceSchema);
