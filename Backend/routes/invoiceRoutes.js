import express from "express";
import { createInvoice, getUserInvoices, deleteInvoice } from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/create", createInvoice);
router.get('/user/:userId', getUserInvoices);
router.delete('/:id', deleteInvoice);



export default router;
