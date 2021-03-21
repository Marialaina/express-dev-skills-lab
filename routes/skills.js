//1) SET UP THE ROUTER SO THE LINK WORKS (to set up a custome router we need to require express)
const express = require(`express`);
const router = express.Router();
const skillsCtrl = require(`../controllers/skills`)



//2) INITIALIZE A ROUTER OBJECT

//3) REQUIRE THE CONTROLLER MODULE

//4) DEFINE OUR ROUTES
//all routes in this module start at /skills

router.get(`/`, skillsCtrl.index);
router.get(`/:id`, skillsCtrl.show);

router.get("/new", skillsCtrl.new)

router.delete("/:id", skillsCtrl.delete)


router.post(`/`, skillsCtrl.createSkill);
// router.get(`/:id`, skillsCtrl.show)
//5) EXPORT THE ROUTER OBJECT

module.exports = router;