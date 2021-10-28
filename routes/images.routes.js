const { Router } = require("express");
const {
    postImages,
    putImages,

} = require("../controllers/images.controller");

const router = Router();

router.post("/", postImages);

router.put("/:id", putImages);




module.exports = router;