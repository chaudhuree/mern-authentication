const express = require("express");

const router = express.Router();

// middlewares
const { requireSignin, isAdmin } = require("../middlewares/auth.js");
// controllers
const {
  register,
  login,
  isLoginCheck,
  isAdminCheck,
  secret,
  updateProfile,
} = require("../controllers/auth.js");

router.post("/register", register);
router.post("/login", login);
router.get("/auth-check", requireSignin, isLoginCheck);
router.get("/admin-check", requireSignin, isAdmin, isAdminCheck);

router.put("/profile", requireSignin, updateProfile);

// testing
router.get("/secret", requireSignin, isAdmin, secret);

module.exports = router;
