const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bannerSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    images: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    imgs: {
        type: Array,
        default: Array,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Banners', bannerSchema);
