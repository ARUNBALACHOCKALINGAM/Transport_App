const userController = require("./controllers/userController")
const orderController = require("./controllers/orderController")

const router = require("express").Router()
const cors = require("cors")

router.use(cors())

router.get("/", (req, res) => res.json("Server up and running at PORT 3000"))

router.post("/checkToken", userController.checkToken);

router.post('/register',userController.apiRegister)
router.post('/login',userController.apiLogin)

router.post('/create',orderController.createOrder);
router.get('/orders',orderController.getOrders);
router.post('/getsingleorder',orderController.getsingleorder);
router.post('/changestatus',orderController.changeStatus);
router.post('/deleteorder',orderController.deleteorder);




module.exports = router