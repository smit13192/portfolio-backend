import { model, Schema } from "mongoose";

interface ISkill {
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

const skillSchema = new Schema<ISkill>({
    name: {
        type: String,
        required: true,
        unique: true
    }
},
    { timestamps: true }
);



const SkillModel = model('skills', skillSchema);

export default SkillModel;