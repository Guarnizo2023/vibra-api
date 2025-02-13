import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class UserEmotion extends Document {

    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Emotion' })
    emotion: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
    event: string;

    @Prop({ required: true })
    responseNote: string;
}

export const UserEmotionSchema = SchemaFactory.createForClass(UserEmotion);