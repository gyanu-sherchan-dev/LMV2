import express from "express";
import { createUser, getUser } from "../model/user/UserModel.js";

const router = express();

//create user
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "User created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create user",
        });
  } catch (error) {
    next(error);
  }
});

//login user
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await getUser(req.body);
    result?._id &&
      res.json({
        status: "success",
        message: "User created successfully",
      });
  } catch (error) {
    next(error);
  }
});

export default router;
