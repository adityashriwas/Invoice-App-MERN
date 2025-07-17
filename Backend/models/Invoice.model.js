import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  clientEmail: {
    type: String
  },
  items: [
    {
      description: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ["paid", "unpaid", "overdue"],
    default: "unpaid"
  }
}, {
  timestamps: true
});

export default mongoose.model("Invoice", invoiceSchema);
