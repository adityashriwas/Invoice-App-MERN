import express from "express";
import { createInvoice, getInvoices, getUserInvoices, getInvoiceById, updateInvoice, deleteInvoice } from "../controllers/invoiceController.js";

const router = express.Router();

router.get("/", getInvoices);
router.post("/create", createInvoice);
router.get('/:id', getInvoiceById);
router.get('/user/:userId', getUserInvoices);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);



export default router;
