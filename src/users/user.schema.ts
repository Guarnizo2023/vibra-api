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

    @Prop({ required: false })
    typeDocument: string;

    @Prop({ required: true })
    email: string;

    @Prop({ default: false })
    keepSessionActive: boolean;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Role', required: false })
    role: string;

    @Prop({ required: true })
    avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);