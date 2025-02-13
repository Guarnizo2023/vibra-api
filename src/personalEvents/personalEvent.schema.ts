import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class PersonalEvent extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    name: string;    

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'HightSchool' })
    hightSchool: string;

}

export const PersonalEventSchema = SchemaFactory.createForClass(PersonalEvent);