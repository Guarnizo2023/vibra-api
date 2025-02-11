import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { HightSchool } from 'src/hightSchools/hightSchool.schema';
import { Role } from 'src/roles/role.schema';

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
    
    @Prop({ required: true })
    hightSchool: HightSchool;

    @Prop({ required: true  })
    course: Course;

    @Prop({ default: false })
    keepSessionActive: boolean;
    
    @Prop({ unique: true  })
    rol: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);