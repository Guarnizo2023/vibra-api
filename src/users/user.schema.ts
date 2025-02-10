// users/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { HightSchool } from 'src/highSchools/hightSchool.schema';
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

    @Prop({ default: true })
    keepSessionActive: boolean;
    
    @Prop({ default: true, unique: true  })
    rol: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);