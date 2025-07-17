import Invoice from "../models/invoice.model.js";

export const createInvoice = async (req, res) => {
  try {
    const {
      user, productName, productPrice, quantity
    } = req.body;

    const newInvoice = new Invoice({
      user,
      productName,
      productPrice,
      quantity
    });

    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserInvoices = async (req, res) => {
  try {
    const { userId } = req.params;
    const invoices = await Invoice.find({ user: userId });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch invoices', error });
  }
};


export const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInvoice = await Invoice.findByIdAndDelete(id);
    if (!deletedInvoice) return res.status(404).json({ message: 'Invoice not found' });
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete invoice', error });
  }
};
