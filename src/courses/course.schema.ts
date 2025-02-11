// users/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HightSchool } from 'src/hightSchools/hightSchool.schema';

@Schema()
export class Course extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    name: string;    

    @Prop({ required: true, unique: true })
    hightSchools: HightSchool;

}

export const CourseSchema = SchemaFactory.createForClass(Course);