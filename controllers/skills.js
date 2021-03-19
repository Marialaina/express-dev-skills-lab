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

// const newSkill = (req, res) => {
//     res.render(`views/skills/show`)
// }




module.exports = {
    index,
    show
}