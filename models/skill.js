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
    return skills[index]
}



module.exports = {
    getAll,
    getOne
};