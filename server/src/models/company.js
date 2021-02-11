const { Schema, model } = require('mongoose')

const companySchema = new Schema({
    first_name: { type: String, required: true },
    company_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Company', companySchema)