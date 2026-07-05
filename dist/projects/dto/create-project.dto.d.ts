import { ProjectStatus } from '@prisma/client';
export declare class CreateProjectDto {
    name: string;
    description?: string;
    budget: number;
    startDate: string;
    endDate?: string;
    targetProvince: string;
    targetDistrict: string;
    status?: ProjectStatus;
    organizationId: string;
}
