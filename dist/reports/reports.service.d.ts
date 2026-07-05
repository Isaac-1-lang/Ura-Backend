import { PrismaService } from '../prisma/prisma.service';
import type { Cache } from 'cache-manager';
export declare class ReportsService {
    private prisma;
    private cacheManager;
    constructor(prisma: PrismaService, cacheManager: Cache);
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
