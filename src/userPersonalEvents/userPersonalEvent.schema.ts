import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PersonalEvent } from 'src/personalEvents/personalEvent.schema';
import { User } from 'src/users/user.schema';

@Schema()
export class UserPersonalEvent extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    user: User;    

    @Prop()
    personalEvent: PersonalEvent;

}

export const UserPersonalEventSchema = SchemaFactory.createForClass(UserPersonalEvent);