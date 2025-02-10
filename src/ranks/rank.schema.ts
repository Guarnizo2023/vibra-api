import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserChallenge } from 'src/userChallenge/userChallenge.schema';
import { UserEmotion } from 'src/userEmotions/userEmotion.schema';
import { UserPersonalEvent } from 'src/userPersonalEvents/userPersonalEvent.schema';

@Schema()
export class Rank extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    userEmotion: UserEmotion;    

    @Prop({ required: true })
    userChallenge: UserChallenge;    

    @Prop()
    userPersonalEvent: UserPersonalEvent;

    @Prop({ required: true, default: 0})
    responseNote: string;
}

export const RankSchema = SchemaFactory.createForClass(Rank);