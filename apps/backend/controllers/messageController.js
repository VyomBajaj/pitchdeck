import Message from "../models/Message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { chatId, text } = req.body;
    const newMessage = new Message({ chatId, sender: req.user.id, text });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getChatMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};