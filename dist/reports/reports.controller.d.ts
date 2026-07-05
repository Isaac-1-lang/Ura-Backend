import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getBeneficiariesPerDistrict(): Promise<{}>;
    getBeneficiariesPerProvince(): Promise<{}>;
    getAidDistributedPerProject(): Promise<{}>;
    getActiveProjects(): Promise<{
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        budget: number;
        startDate: Date;
        endDate: Date | null;
        targetProvince: string;
        targetDistrict: string;
        status: import(".prisma/client").$Enums.ProjectStatus;
        organizationId: string;
    }[]>;
}
