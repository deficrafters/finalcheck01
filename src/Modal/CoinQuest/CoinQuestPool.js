import mongoose from 'mongoose'

const CoinQuestPool = mongoose.Schema(
    {
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
        timelineIST: {
            default: null,
            type: String
        },
        winningscheme: {
            default: null,
            type: String
        },
        soldOutTickets: {
            default: { total: 10, sold: 0 },
            type: Object
        },
        Display: {
            default: true,
            type: Boolean
        },
        isFree: {
            default: false,
            type: Boolean
        },
        WinerChoosed: {
            default: false,
            type: Boolean
        },
        

    },
    {
        timestamps: true
    }
)

export default mongoose.models.CoinQuestPool || mongoose.model('CoinQuestPool', CoinQuestPool)
