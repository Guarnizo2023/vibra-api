import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Challenge } from '../../challenges/schemas/challenge.schema';
import { User } from '../../users/schemas/user.schema';

@Schema()
export class UserChallenge extends Document {

    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    user: User;

    @Prop()
    challenge: Challenge;

    @Prop()
    responseNote: string;

}

export const UserChallengeSchema = SchemaFactory.createForClass(UserChallenge);