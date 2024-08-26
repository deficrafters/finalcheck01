import mongoose from 'mongoose'

const PurchasedJackpotTicket = mongoose.Schema(
    {
        TicketOwner: {
            default: null,
            type: String
        },
        game: {
            default: null,
            type: String
        },
        price: {
            default: null,
            type: Number
        },
        entries: {
            default: null,
            type: Number
        },
        tickets: {
            default: [],
            type: Array
        },
        hash: {
            default: null,
            type: String
        }

    },
    {
        timestamps: true
    }
)

export default mongoose.models.PurchasedJackpotTicket || mongoose.model('PurchasedJackpotTicket', PurchasedJackpotTicket)
