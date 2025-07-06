import mongoose, {Schema} from 'mongoose'

const imageSchema = new Schema({
    ImageUrl: {
        type: String,
        required: true,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Type: {
        type: String,
        enum: ['profile', 'cover', 'post'],
        required: true,
    },

}, {timestamps: true}

)

export default mongoose.models.Image || mongoose.model('Image', imageSchema)