import mongoose from 'mongoose'

const UserBasicInformation = mongoose.Schema(
  {
    Owner: {
      default: 'null',
      type: 'String'
    },
    Fname: {
      default: 'null',
      type: 'String'
    },
    Lname: {
      default: 'null',
      type: 'String'
    },
    Email: {
      default: 'null',
      type: 'String'
    },
    ContactNumber: {
      default: 0,
      type: 'Number'
    },
    Country: {
      default: 'null',
      type: 'String'
    },
    PinCode: {
      default: 'null',
      type: 'String'
    },
    DialCode: {
      default: "null",
      type: 'String'
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models.UserBasicInformation || mongoose.model('UserBasicInformation', UserBasicInformation)
