import { userModel } from "../Models/users.models.js";
import bcrypt from "bcrypt";
import validator from 'validator';

export const loginHelperFunc = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validator.isEmail(email)) {
            throw Error("please eneter valid email...");
        }

        const exestingUser = await userModel.findOne({ email });
        const match = await bcrypt.compare(password, exestingUser.password);

        console.log(match);

        if (match) {
            return res.json({
                sucess: true,
                message: "login sucessfully..."
            })
        } else {
            throw Error("password mismatch, plase eneter valid password :");
        }
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
}