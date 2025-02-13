import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class UserPersonalEvent extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

     
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    user: string;    

         
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'PersonalEvent' })
    personalEvent: string;

}

export const UserPersonalEventSchema = SchemaFactory.createForClass(UserPersonalEvent);