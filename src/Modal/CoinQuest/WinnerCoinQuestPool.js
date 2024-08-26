import mongoose from 'mongoose'

const WinnerCoinQuestPool = mongoose.Schema(
    {
        Winner_Owner: {
            default: null,
            type: String
        },
        Winning_Amount: {
            default: null,
            type: String
        },
        currency: {
            default: null,
            type: String
        },
        name: {
            default: null,
            type: String
        },
        image: {
            default: null,
            type: String
        },
        route: {
            default: null,
            type: String
        },
        amount: {
            default: null,
            type: String
        },
        prizeValue: {
            default: null,
            type: String
        },
        bettingslots: {
            default: null,
            type: String
        },
        timeline: {
            default: null,
            type: String
        },
        winningscheme: {
            default: null,
            type: String
        },
        GameID: {
            default: null,
            type: String
        },
        soldOutTickets: {
            default: { total: 1000, sold: 600 },
            type: Object
        },
        

    },
    {
        timestamps: true
    }
)

export default mongoose.models.WinnerCoinQuestPool || mongoose.model('WinnerCoinQuestPool', WinnerCoinQuestPool)
