import mongoose from 'mongoose'

const ShortRecord = mongoose.Schema(
  {
    Owner: {
      default: 'null',
      type: String
    },
    challenge_entries_100k: {
      default: 0,
      type: Number
    },
    Self_Entries: {
      default: 0,
      type: Number
    },
    Referral_Entries: {
      default: 0,
      type: Number
    },
    Referral_Reward: {
      default: 0,
      type: Number
    },
    Spin_Reward: {
      default: 0,
      type: Number
    },
    Signup_Bonus: {
      default: 0,
      type: Number
    },
    Spin_Wheel_DMTZ_Token: {
      default: 0,
      type: Number
    },
    Coin_Quest_Free_Winning_DMTZ: { // <=== need to consider
      default: 0,
      type: Number
    },
    Coin_Quest_Paid_Winning_USDT: { // <=== need to consider
      default: 0,
      type: Number
    },
    Jackpot_Paid_Winning_USDT: { // <=== need to consider
      default: 0,
      type: Number
    },
    USDT_Tokens: {
      default: 0,
      type: Number
    },
    DGT_tokens: {
      default: 0,
      type: Number
    },
  },
  {
    timestamps: true
  }
)

export default mongoose.models.ShortRecord || mongoose.model('ShortRecord', ShortRecord)