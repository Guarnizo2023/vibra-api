import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Emotion } from 'src/emotions/emotion.schema';
import { User } from 'src/users/user.schema';
import { Event } from 'src/events/event.schema';

@Schema()
export class UserEmotion extends Document {

    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    user: User;

    @Prop({ required: true })
    emotion: Emotion;

    @Prop()
    event: Event;

    @Prop({ required: true })
    responseNote: string;
}

export const UserEmotionSchema = SchemaFactory.createForClass(UserEmotion);