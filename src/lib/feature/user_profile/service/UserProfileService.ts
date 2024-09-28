import { ApiError } from "../../../core/error/ApiError";
import { ApiResponse, SuccessResponse } from "../../../core/response/Response";
import UserProfileModel from "../model/UserProfileModel";

export class UserProfileService {
    async post(data: any, cv?: string): Promise<ApiResponse> {

        let userProfile = await UserProfileModel.findOne();
        if (!userProfile) {
            if (!cv) {
                throw new ApiError(400, "CV is required");
            }
            userProfile = new UserProfileModel({
                ...data,
                cv: cv,
            });
            await userProfile.save();
            return new SuccessResponse({
                statusCode: 201,
                message: "User profile created successfully",
                data: userProfile
            });
        }
        if (cv) {
            data.cv = cv;
        }
        userProfile = await UserProfileModel.findOneAndUpdate(
            { _id: userProfile._id },
            data,
            { new: true }
        );

        return new SuccessResponse({
            statusCode: 200,
            message: "User profile update successfully",
            data: userProfile
        });
    }

    async get(): Promise<ApiResponse> {
        let findUser = await UserProfileModel.findOne();
        if (!findUser) {
            throw new ApiError(400, "No user profile found");
        }
        return new SuccessResponse({
            statusCode: 200,
            message: "User profile accessed successfully",
            data: findUser
        });
    }
}

export const userProfileService = new UserProfileService();