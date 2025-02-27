import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    founder: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    industry: { type: String, required: true },
    stage: { type: String, enum: ["Idea", "MVP", "Seed", "Series A", "Growth"], required: true },
    fundingGoal: { type: Number, required: true },
    description: { type: String, required: true },
    website: { type: String },
    pitchVideo: { type: String },
    tags: { type: [String], default: [] },
    interestedInvestors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    upvotes: { type: Number, default: 0 },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String },
        createdAt: { type: Date, default: Date.now },
      }
    ],
  },
  { timestamps: true }
);

const Startup = mongoose.model("Startup", startupSchema);
export default Startup;