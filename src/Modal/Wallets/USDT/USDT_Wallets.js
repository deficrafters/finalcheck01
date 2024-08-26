import mongoose from 'mongoose'

const USDT_Wallets = mongoose.Schema(
    {
        RecordOwner: {
            default: null,
            type: String
        },
        Deposit_Wallet_USDT: {
            default: 0,
            type: Number
        },
        Bonus_Wallet_USDT: {
            default: 0,
            type: Number
        },
        Winning_Wallet_USDT: {
            default: 0,
            type: Number
        },
        
        Deposit_Wallet_DMTZ: {
            default: 0,
            type: Number
        },
        Bonus_Wallet_DMTZ: {
            default: 0,
            type: Number
        },
        Winning_Wallet_DMTZ: {
            default: 0,
            type: Number
        }

    },
    {
        timestamps: true
    }
)

export default mongoose.models.USDT_Wallets || mongoose.model('USDT_Wallets', USDT_Wallets)
