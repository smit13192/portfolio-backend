import { ApiResponse, SuccessResponse } from "../../../core/response/Response";
import { experienceService } from "../../experience/service/ExperienceService";
import { projectService } from "../../projects/service/ProjectService";
import { skillService } from "../../skills/service/SkillService";
import { userProfileService } from "../../user_profile/service/UserProfileService";

export class AppService {
    async get(): Promise<ApiResponse> {
        const skills = skillService.get();
        const experiences = experienceService.get();
        const projects = projectService.get();
        const userProfile = userProfileService.get();

        const promises = await Promise.all([
            skills,
            experiences,
            projects,
            userProfile,
        ]);

        return new SuccessResponse({
            statusCode: 200, data: {
                skills: promises[0].data,
                experiences: promises[1].data,
                projects: promises[2].data,
                userProfile: promises[3].data,
            }
        });
    }
}

export const appService = new AppService();