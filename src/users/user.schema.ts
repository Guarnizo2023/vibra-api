import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class User extends Document {
    
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;    

    @Prop({ required: true, unique: true })
    documentNumber: string;

    @Prop({ required: true })
    typeDocument: string;

    @Prop({ required: true })
    email: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Course' })
    course: string;

    @Prop({ default: false })
    keepSessionActive: boolean;
    
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Role' })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);