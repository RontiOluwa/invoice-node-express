const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/invoices', feedController.getInvoices);

// POST /feed/post
router.post(
  '/invoice', feedController.createInvoice
);

router.get('/invoice/:invoiceId', feedController.getInvoice);

module.exports = router;
