const router = require("express").Router();
const orderController = require("../controllers/product.controller");

router.get("", orderController.getAll);
router.get("/:id", orderController.getOne);
router.post("/", orderController.createOne);
router.post("/bulk", orderController.createMany);
router.put("/:id", orderController.updateOne);
router.delete("/:id", orderController.deleteOne);

module.exports = router;
