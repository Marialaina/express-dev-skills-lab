//REQUIRE MODULES
const express = require(`express`);
const skillsRouter = require(`./routes/skills`)
const methodOverride = require(`method-override`)


//CREATE THE EXPRESS LAB

const app = express();

//CONFIGURE THE APP (app.set)

//WE'LL USE THE EJS VIEW ENGINE

app.set(`view engine`, `ejs`);

//MOUNT MIDDLEWARE (app.use)

app.use(express.urlencoded({extended: false}))

//enable method override
app.use(methodOverride(`_method`))

//MOUNT ROUTES


app.get(`/`, (req, res) => {
    res.render(`index`);
});

//all routes pertaining to /skills/*
app.use(`/skills`, skillsRouter)

//TELL THE APP TO LISTEN ON PORT 3000

app.listen(3000, () => {
    console.log(`Express is listening on port 3000`);
});

