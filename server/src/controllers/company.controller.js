// const hello = (req, res) => { res.send("Rendering file") };

const companyctrl = {}

const Company = require('../models/company')
companyctrl.getCompanys = async (req, res) => {
    const companys = await Company.find();
    res.json(companys)
}
companyctrl.createCompany = async (req, res) => {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.send({
        message: "Company Created"
    })
}
companyctrl.getCompany = async (req, res) => {
    const company = await Company.findById(req.params.id);
    res.send(company);
}
companyctrl.editCompany = async (req, res) => {
    await Company.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "Company Updated"
    });
}
companyctrl.deleteCompany = async (req, res) => {
    await Company.findByIdAndDelete(req.params.id);
    res.json({
        status: "Company Deleted"
    });
}

module.exports = companyctrl;
