// users/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';

@Schema()
export class Session extends Document {
    
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    createIssue: Date;  

    @Prop({ required: false })
    endIssue: Date;   

    @Prop({ required: true})
    online: boolean;
     
    @Prop({ required: true })
    user: User;  

}

export const SessionSchema = SchemaFactory.createForClass(Session);