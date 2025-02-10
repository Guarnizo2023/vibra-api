// users/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class HightSchool extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    name: string;    

    @Prop({ required: true })
    adreess: string;

    @Prop({ required: true, unique: true  })
    nit: string;

    @Prop({ required: true, unique: true  })
    email: string;

}

export const HightSchoolSchema = SchemaFactory.createForClass(HightSchool);