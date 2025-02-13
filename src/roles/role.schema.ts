import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Role extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    description: string;

    @Prop({ required: true })
    permissions: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);