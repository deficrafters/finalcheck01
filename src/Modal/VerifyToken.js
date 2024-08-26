import mongoose from 'mongoose'

const VerifyToken = mongoose.Schema(
  {
    TokenAddress: {
      default: 'null',
      type: 'String'
    },
    Email: {
      default: 'null',
      type: 'String'
    },
    Password: {
      default: 'null',
      type: 'String'
    },
    ReferralID: {
      default: null,
      type: 'String'
    },
    Verified: {
      default: false,
      type: Boolean
    },
  },
  {
    timestamps: true
  }
)

export default mongoose.models.VerifyToken || mongoose.model('VerifyToken', VerifyToken)