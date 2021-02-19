const { Schema, model } = require('mongoose')

const imgSchema = new Schema({
    img: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Img', imgSchema)