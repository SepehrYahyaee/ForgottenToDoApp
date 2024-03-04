import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @Prop({ required: true })
    userName: string;

    @Prop({ required: true })
    password: string;

    @Prop(raw({
        email: { type: String },
        age: { type: Date },
        phoneNumber: { type: Number }
    }))
    profile: Record<string, any>;

    @Prop(raw({
        title: { type: String },
        description: { type: String },
        dueDate: { type: Date },
        status: { type: String, enum: ['Done', 'Failed', 'Pending'], default: 'Pending'},

    }))
    tasks: Record<string, any>
}

export const UserSchema = SchemaFactory.createForClass(User);