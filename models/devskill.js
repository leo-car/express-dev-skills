const devskills = [
    { id: 101223, devskill: "A little bit of HTML", done: true},
    { id: 105905, devskill: "A little bit of CSS", done: true},
    { id: 106085, devskill: "A little bit of Javascript", done: true},
    { id: 108100, devskill: "A little bit of Express", done: true}
];

module.exports =  {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return devskills;
}

function getOne(id) {
    id = parseInt(id);

    return devskills.find(devskill => devskill.id === id);
}


function create(devskill) {
    devskill.id = Date.now() % 1000000;
    devskill.done = false;
    devskills.push(devskill);
}
    
function deleteOne(id) {
    id = parseInt(id);
    const idx = devskills.findIndex(devskill => devskill.id === id)
    devskills.splice(idx, 1)
}