import Express from "express";
import { allowUserByAdmin, checkAuthentication, deleteUserById, findAllUser, findUserById, getUserById, userLogin, userSignUp } from "../controllers/UserController/UserController.js";
import verifyJWT from "../middlewares/Auth.middleware.js"
import { upload } from "../middlewares/Multer.middleware.js";
const UserRouter = Express.Router();

UserRouter.post("/usersignup", upload.fields([
    { name: 'avatar', maxCount: 1 }
]), userSignUp);
UserRouter.post("/userlogin", userLogin);
UserRouter.get("/checkauth", verifyJWT, checkAuthentication);
UserRouter.get("/findbyid/:userId", verifyJWT, findUserById);
UserRouter.get("/bulk", findAllUser);
UserRouter.put("/allow/:userId", allowUserByAdmin);
UserRouter.delete("/delete/:userId", deleteUserById);
UserRouter.get("/findbyid/:userId", getUserById);

export default UserRouter;