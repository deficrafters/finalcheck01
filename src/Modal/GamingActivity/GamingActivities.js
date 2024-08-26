import mongoose from 'mongoose'

const GamingActivities = mongoose.Schema(
    {
        GameOwner: {
            default: null,
            type: String
        },
        GameType: {
            default: null,
            type: String
        },
        GameName: {
            default: null,
            type: String
        },
        WinningAmount: {
            default: null,
            type: Number
        },
        TicketCount: {
            default: 0,
            type: Number
        }

    },
    {
        timestamps: true
    }
)

export default mongoose.models.GamingActivities || mongoose.model('GamingActivities', GamingActivities)
