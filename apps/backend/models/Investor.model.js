import mongoose from "mongoose";

const investorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    investmentStage: { type: [String], enum: ["Seed", "Series A", "Series B", "Growth", "Late Stage"], required: true },
    investmentAmount: { type: Number, required: true },
    industries: { type: [String], required: true },
    portfolio: [
      {
        startup: { type: mongoose.Schema.Types.ObjectId, ref: "Startup" },
        investmentAmount: { type: Number },
        investedAt: { type: Date, default: Date.now },
      }
    ],
    interestedStartups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Startup" }],
    profileVisibility: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Investor = mongoose.model("Investor", investorSchema);
export default Investor;