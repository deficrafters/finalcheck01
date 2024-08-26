import mongoose from 'mongoose'

const SpinWheel = mongoose.Schema(
  {
    RecordOwner: {
      default: 'null',
      type: 'String'
    },
    Amount: {
      default: 0,
      type: 'Number'
    },
  
  },
  {
    timestamps: true
  }
)

export default mongoose.models.SpinWheel || mongoose.model('SpinWheel', SpinWheel)
