import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
class Tag {

    @Prop({ required: true, unique: true }) name: string;
}

const TagSchema = SchemaFactory.createForClass(Tag);

@Schema({ timestamps: true })
class Task {

    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    dueDate: Date;

    @Prop({ type: String, enum: ['Done', 'Failed', 'Pending'], default: 'Pending' })
    status: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Tag' }]})
    tags: Tag[]
}

const TaskSchema = SchemaFactory.createForClass(Task);

@Schema({ timestamps: true })
export class User {

    @Prop({ required: true, unique: true })
    userName: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    profile: {
        email: string;
        age: number;
        phoneNumber: number;
    }

    @Prop({ type: [{ type: [TaskSchema] }]})
    tasks: Task[]

    @Prop({ type: [{ type: [TagSchema] }]})
    tags: Tag[]
}

export const UserSchema = SchemaFactory.createForClass(User);

// we got only one schema here, 'USER' Schema and no more and all of the Tasks and Tags are embedded inside it!