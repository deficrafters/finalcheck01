import mongoose from 'mongoose'

const ForgetPasswordModal = mongoose.Schema(
    {
        RecordOwner: {
            default: 'null',
            type: 'String'
        },
        identifier: {
            default: 'null',
            type: 'String'
        },
        otp: {
            default: 'null',
            type: 'String'
        },
        Real_User_Id: {
            default: 'null',
            type: 'String'
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.models.ForgetPasswordModal || mongoose.model('ForgetPasswordModal', ForgetPasswordModal)
