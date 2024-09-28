import { model, Schema } from "mongoose";

interface IUserProfile {
    name: string;
    designation: string;
    experience: string;
    description: string;
    focusFramework: string;
    instagramLink: string;
    gitLink: string;
    linkedInLink: string;
    cv: string;
    aboutMe: string;
    email: string;
    phoneNo: string;
    createdAt: Date;
    updatedAt: Date;
}

const userProfileSchema = new Schema<IUserProfile>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    designation: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    focusFramework: {
        type: String,
        required: true
    },
    instagramLink: {
        type: String,
        required: true
    },
    gitLink: {
        type: String,
        required: true
    },
    linkedInLink: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    aboutMe: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);



const UserProfileModel = model('user-profile', userProfileSchema);

export default UserProfileModel;