import { DistributionsService } from './distributions.service';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
export declare class DistributionsController {
    private readonly distributionsService;
    constructor(distributionsService: DistributionsService);
    create(createDistributionDto: CreateDistributionDto, req: any): import(".prisma/client").Prisma.Prisma__DistributionClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        beneficiaryId: string;
        itemType: string;
        quantity: number;
        location: string;
        distributionDate: Date;
        notes: string | null;
        fieldAgentId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        project: {
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
        };
        beneficiary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string;
            nationalId: string;
            householdSize: number;
            province: string;
            district: string;
            sector: string;
            cell: string;
            village: string;
            vulnerabilityCategory: import(".prisma/client").$Enums.VulnerabilityCategory;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        beneficiaryId: string;
        itemType: string;
        quantity: number;
        location: string;
        distributionDate: Date;
        notes: string | null;
        fieldAgentId: string;
    })[]>;
    findOne(id: string): Promise<{
        project: {
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
        };
        beneficiary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            fullName: string;
            nationalId: string;
            householdSize: number;
            province: string;
            district: string;
            sector: string;
            cell: string;
            village: string;
            vulnerabilityCategory: import(".prisma/client").$Enums.VulnerabilityCategory;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        beneficiaryId: string;
        itemType: string;
        quantity: number;
        location: string;
        distributionDate: Date;
        notes: string | null;
        fieldAgentId: string;
    }>;
    update(id: string, updateDistributionDto: UpdateDistributionDto): import(".prisma/client").Prisma.Prisma__DistributionClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        beneficiaryId: string;
        itemType: string;
        quantity: number;
        location: string;
        distributionDate: Date;
        notes: string | null;
        fieldAgentId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__DistributionClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        beneficiaryId: string;
        itemType: string;
        quantity: number;
        location: string;
        distributionDate: Date;
        notes: string | null;
        fieldAgentId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
