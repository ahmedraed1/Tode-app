require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { authenticationToken } = require("./utilities");
const validator = require("validator");
const User = require("./models/user.model");
const Note = require("./models/note.model");
const bcrypt = require("bcrypt");
const app = express();

const connectDB = require("./db/connect");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/auth", authenticationToken, (req, res) => {
  const { userId: id } = req.user;
  const user = User.findById(id);
  if (!user) {
    return res.status(400).json({ msg: "Invalid credentials", success: false });
  }
  res.status(200).json({ user, success: true });
});

app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ msg: "All fields are required", success: false });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "Invalid email", success: false });
  }
  if (!validator.isStrongPassword(password)) {
    return res
      .status(400)
      .json({ msg: "Password not strong enough", success: false });
  }

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res
      .status(400)
      .json({ msg: "User with this email already exists", success: false });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashPassword });
  if (!newUser) {
    return res
      .status(400)
      .json({ msg: "Failed to create new Account", success: false });
  }
  const token = jwt.sign(
    { userId: newUser._id, name: newUser.name },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.status(201).json({ token, success: true });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "All fields are required", success: false });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid credentials", success: false });
  }
  const isMatch = await user.comparePassword(password); // compare password

  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials", success: false });
  }
  const token = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
  res.status(200).json({ token, success: true });
});

app.post("/api/notes/create", authenticationToken, async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title || !content || !tags) {
    return res
      .status(400)
      .json({ msg: "All fields are required", success: false });
  }
  const newNote = await Note.create({
    title,
    content,
    tags,
    userId: req.user.userId,
  });
  if (!newNote) {
    return res
      .status(400)
      .json({ msg: "Failed to create new Note", success: false });
  }
  res.status(201).json({ newNote, success: true });
});

app.post("/api/notes/edit", authenticationToken, async (req, res) => {
  const { id, title, content, tags, isPinned } = req.body;
  if (!title || !content || !tags || !isPinned) {
    return res
      .status(400)
      .json({ msg: "All fields are required", success: false });
  }
  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { title, content, tags, isPinned },
    { new: true }
  );
  if (!updatedNote) {
    return res
      .status(400)
      .json({ msg: "Failed to update Note", success: false });
  }
  res.status(201).json({ updatedNote, success: true });
});

app.post("/api/notes/delete", authenticationToken, async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ msg: "All fields are required", success: false });
  }
  const deletedNote = await Note.findByIdAndDelete(id);
  if (!deletedNote) {
    return res
      .status(400)
      .json({ msg: "Failed to delete Note", success: false });
  }
  res.status(201).json({ deletedNote, success: true });
});

app.get("/api/notes", authenticationToken, async (req, res) => {
  const notes = await Note.find({ userId: req.user.userId }).sort({
    isPinned: -1,
  });
  if (!notes) {
    return res
      .status(400)
      .json({ msg: "Failed to fetch Notes", success: false });
  }
  res.status(201).json({ notes, success: true });
});

app.get("/api/notes/update-pinned", authenticationToken, async (req, res) => {
  const { id, isPinned } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ msg: "All fields are required", success: false });
  }
  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { isPinned },
    { new: true }
  );
  if (!updatedNote) {
    return res
      .status(400)
      .json({ msg: "Failed to update Note", success: false });
  }
  res.status(201).json({ updatedNote, success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log("Server started on port 3000");
});
