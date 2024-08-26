import mongoose from 'mongoose'

const BuyCoinQuestPool = mongoose.Schema(
    {
        owner: {
            default: null,
            type: String
        },
        poolID: {
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
            default: 0,
            type: Number
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
        TicketCount: {
            default: null,
            type: Number
        },
        Type: {
            default: null,
            type: String
        },
        Hash: {
            default: null,
            type: String
        },
        soldOutTickets: {
            default: { total: 1000, sold: 600 },
            type: Object
        },
        includeFreeTicket:{
            default: false,
            type: Boolean
        },
        
        

    },
    {
        timestamps: true
    }
)

export default mongoose.models.BuyCoinQuestPool || mongoose.model('BuyCoinQuestPool', BuyCoinQuestPool)
