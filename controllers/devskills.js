module.exports = {
    index,
    show,
    new: newDevskill,
    create,
    delete: deleteDevskill
};

const Devskill = require("../models/devskill");

function index(req, res) {
    res.render("devskills/index", {
        devskills: Devskill.getAll(),
        title: "All Dev-Skills"
    });
}

function show(req, res) {
    res.render("devskills/show", {
        devskill: Devskill.getOne(req.params.id),
        title: "Dev-Skills Details"
    });
}

function newDevskill(req, res) {
    res.render("devskills/new", {title: "New Devskill"});   
}

function create(req, res) {
    Devskill.create(req.body);
    res.redirect("/devskills")
}

function deleteDevskill(req, res) {
    Devskill.deleteOne(req.params.id);
    res.redirect("/devskills");
}
