const skills = [
    {skill: 'JavsScript', level: 5},
    {skill: 'HTML5', level: 5},
    {skill: 'CSS3', level: 5}
];

//Function to get all todos
const getAll = () => {
    return skills;
}

//Function to get one todo
const getOne = (index) => {
    return skills[index];
}

//creating a skill function
const createSkill = (id) => {
    skills.push(id);
}

const deleteOne = (id) => {
    skills.splice(id, 1)
}



module.exports = {
    getAll,
    getOne,
    createSkill,
    deleteOne
};