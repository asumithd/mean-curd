const { Schema, model } = require('mongoose')

const companySchema = new Schema({
    first_name: { type: String },
    company_name: { type: String },
    email: { type: String },
    phone: { type: String },
    description: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Company', companySchema)