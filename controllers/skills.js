const index = (req, res) => {
    res.render(`skills/index`, {
        skills: Skill.getAll()
    })
}
const Skill = require(`../models/skill`)

const show = (req, res) => {
    res.render(`skills/show`, {
        skills: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

const newSkill = (req, res) => {
    res.render(`views/skills/show`)
}

// const createSkill = (req, res) => {
//     console.log(req.body);
//     req.body.done = false;
//     Skill.createSkill(req.body);
//     res.redirect('/skills')
// }




module.exports = {
    index,
    show,
    // new: newSkill,
    // createSkill
}