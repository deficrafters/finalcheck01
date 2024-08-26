import mongoose from 'mongoose'

const JackpotWinners = mongoose.Schema(
    {
        Jackpot_Winner_Owner: {
            default: null,
            type: String
        },
        Game_ID: {
            default: null,
            type: String
        },
        Game: {
            default: null,
            type: String
        },
        Price: {
            default: null,
            type: Number
        },
        Entries: {
            default: null,
            type: Number
        },
        Tickets: {
            default: [],
            type: Array
        },
        Hash: {
            default: null,
            type: String
        },
        Winning_Amount: {
            default: null,
            type: String
        },
        Winning_Percantage: {
            default: null,
            type: String
        },
        Draw_Position: {
            default: null,
            type: String
        }

    },
    {
        timestamps: true
    }
)

export default mongoose.models.JackpotWinners || mongoose.model('JackpotWinners', JackpotWinners)
