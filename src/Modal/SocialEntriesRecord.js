import mongoose from 'mongoose'

const SocialEntriesRecord = mongoose.Schema(
  {
    Owner: {
      default: 'null',
      type: 'String'
    },
    SocialType: {
      default: 'null',
      type: 'String'
    },
    GotEntries: {
      default: 0,
      type: 'Number'
    },
    UserName: {
      default: 0,
      type: 'String'
    },
  },
  {
    timestamps: true
  }
)

export default mongoose.models.SocialEntriesRecord || mongoose.model('SocialEntriesRecord', SocialEntriesRecord)