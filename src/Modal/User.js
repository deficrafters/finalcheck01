import mongoose from 'mongoose'

const User = mongoose.Schema(
  {
    UserName: {
      default: 'null',
      type: 'String'
    },
    SponserCode: {
      default: 'null',
      type: 'String'
    },
    FullName: {
      default: 'null',
      type: 'String'
    },
    Country: {
      default: 'null',
      type: 'String'
    },
    ContactNumber: {
      default: 0,
      type: 'Number'
    },
    EmailId: {
      default: 'null',
      type: 'String'
    },
    EmailVerified: {
      default: 'Yes',
      type: 'String'
    },
    UserActive: {
      default: true,
      type: 'Bool'
    },
    MainWallet: {
      default: 0,
      type: 'Number'
    },
    ReferWallet: {
      default: 0,
      type: Number
    },
    ReferralID: {
      default: 'null',
      type: 'String'
    },
    Passsword: {
      default: 'null',
      type: 'String'
    },
    WalletAddress: {
      default: 'null',
      type: 'String'
    },
  },
  {
    timestamps: true
  }
)

export default mongoose.models.myuserp || mongoose.model('myuserp', User)
