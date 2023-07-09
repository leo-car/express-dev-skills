module.exports = {
    index,
    show,
};

const Devskill = require("../models/devskill");

function index(req, res) {
    res.render("devskills/index", {
        devskills: Devskill.getAll(),
    });
}

function show(req, res) {
    res.render("devskills/show", {
        devskill: Devskill.getOne(req.params.id),
    });
}


