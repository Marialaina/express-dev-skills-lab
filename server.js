//REQUIRE MODULES
const express = require(`express`);

//CREATE THE EXPRESS LAB

const app = express();

//CONFIGURE THE APP (app.set)

//WE'LL USE THE EJS VIEW ENGINE

app.set(`view engine`, `ejs`);

//MOUNT MIDDLEWARE (app.use)

//MOUNT ROUTES
app.get(`/`, (req, res) => {
    res.render(`index`);
});

//TELL THE APP TO LISTEN ON PORT 3000

app.listen(3000, () => {
    console.log(`Express is listening on port 3000`);
});

