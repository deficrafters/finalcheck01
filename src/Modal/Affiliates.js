import mongoose from 'mongoose'

const Affiliates = mongoose.Schema(
    {
        RecordOwner: {
            default: null,
            type: String
        },
        FromUserID: {
            default: null,
            type: String
        },
        FromUserName: {
            default: null,
            type: String
        },
        ToUserID: {
            default: null,
            type: String
        },
        ToUserName: {
            default: null,
            type: String
        },
        Reward: {
            default: 0,
            type: Number
        },

    },
    {
        timestamps: true
    }
)

export default mongoose.models.Affiliates || mongoose.model('Affiliates', Affiliates)
