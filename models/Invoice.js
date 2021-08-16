const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    pincode: {
      type: Number,
      required: true
    },
    items: {
      type: Object,
      required: true
    },
    tax: {
      type: String,
      required: true
    },
    discount: {
      type: String,
      required: true
    },
    subtotal: {
      type: String,
      required: true
    },
    tax_amout: {
      type: String,
      required: true
    },
    discount_amount: {
      type: String,
      required: true
    },
    grand_total: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Invoice', invoiceSchema);
