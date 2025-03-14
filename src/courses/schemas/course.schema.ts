import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { HightSchool } from 'src/hightSchools/schemas/hightSchool.schema';

@Schema()
export class Course extends Document {

    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'HightSchool' })
    hightSchool: HightSchool;

}

export const CourseSchema = SchemaFactory.createForClass(Course);