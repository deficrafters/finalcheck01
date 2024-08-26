import mongoose from 'mongoose'

const DepositWalletTransaction = mongoose.Schema(
    {
        RecordOwner: {
            default: null,
            type: String
        },
        Type: {
            default: null,
            type: String
        },
        Amount: {
            default: null,
            type: String
        },
        tokentype: {
            default: null,
            type: String
        },
        network: {
            default: null,
            type: String
        },
        status: {
            default: null,
            type: String
        },
        address: {
            default: null,
            type: String
        },
        hash: {
            default: null,
            type: String
        },
        USDT_Value: {
            default: null,
            type: String
        },

    },
    {
        timestamps: true
    }
)

export default mongoose.models.DepositWalletTransaction || mongoose.model('DepositWalletTransaction', DepositWalletTransaction)
