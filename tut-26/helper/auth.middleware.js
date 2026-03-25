import jwt from "jsonwebtoken";
import { userModel } from "../models/users.model.js";

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token,"secratKey123");

        const user = await userModel.findOne({email:decoded.email});
        req.user = user;
        next();

    } catch (err) {
        res.json({
            sucess: false,
            message: err.message
        })
    }
}