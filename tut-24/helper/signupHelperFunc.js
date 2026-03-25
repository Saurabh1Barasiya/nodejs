import bcrypt from "bcrypt";
import { userModel } from "../Models/users.models.js";


export const signupHelperFunc = async (req, res) => {
    try {
        const { firstName, lastName, email, gender, password } = req.body;

        const proctedPassword = await bcrypt.hash(password, 10);

        if (proctedPassword) {
            const newUser = userModel({
                firstName,
                lastName,
                email,
                gender,
                password: proctedPassword
            });
            await newUser.save();

            res.json({
                sucess: true,
                message: "signup page..."
            })
        } else {
            throw new Error("some thing went wrong...");
        }

    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
}