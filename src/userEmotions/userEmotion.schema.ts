import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Emotion } from 'src/emotions/emotion.schema';
import { User } from 'src/users/user.schema';
import { Event as events } from 'src/events/event.schema';

@Schema()
export class UserEmotion extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    user: User;    

    @Prop({ required: true })
    emotion: Emotion;    

    @Prop()
    event: events;

    @Prop({ required: true, default: 0})
    responseNote: string;
}

export const UserEmotionSchema = SchemaFactory.createForClass(UserEmotion);