const { validationResult } = require('express-validator/check');

const Invoice = require('../models/Invoice');

exports.getInvoices = (req, res, next) => {
  Invoice.find()
    .then(invoice => {
      res
        .status(200)
        .json({ message: 'Fetched Invoices successfully.', invoice: invoice });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createInvoice = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const fullname = req.body.fullname;
  const phone = req.body.phone;
  const address = req.body.address;
  const email = req.body.email;
  const pincode = req.body.pincode;
  const items = req.body.items;
  const tax = req.body.tax;
  const discount = req.body.discount;
  const subtotal = req.body.subtotal;
  const tax_amout = req.body.tax_amout;
  const discount_amount = req.body.discount_amount;
  const grand_total = req.body.grand_total;
  const invoice = new Invoice({
    fullname,
    phone,
    address,
    email,
    pincode,
    items,
    tax,
    discount,
    subtotal,
    tax_amout,
    discount_amount,
    grand_total
  });
  invoice
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Invoice created successfully!',
        invoice: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getInvoice = (req, res, next) => {
  const invoiceId = req.params.invoiceId;
  Invoice.findById(invoiceId)
    .then(invoice => {
      if (!invoice) {
        const error = new Error('Could not find Invoice.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Invoice fetched.', invoice: invoice });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
