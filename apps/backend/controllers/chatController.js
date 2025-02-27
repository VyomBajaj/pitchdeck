import Chat from "../models/Chat.model.js";

export const createChat = async (req, res) => {
  try {
    const { userId } = req.body;
    const existingChat = await Chat.findOne({
      members: { $all: [req.user.id, userId] },
    });

    if (existingChat) return res.status(200).json(existingChat);

    const newChat = new Chat({ members: [req.user.id, userId] });
    await newChat.save();

    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserChats = async (req, res) => {
  try {
    const chats = await Chat.find({ members: req.user.id }).populate("members", "name");
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};