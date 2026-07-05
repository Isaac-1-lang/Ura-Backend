import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
export declare class BeneficiariesController {
    private readonly beneficiariesService;
    constructor(beneficiariesService: BeneficiariesService);
    create(createBeneficiaryDto: CreateBeneficiaryDto): Promise<{
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
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    findOne(id: string): Promise<{
        distributions: ({
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
        })[];
    } & {
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
    }>;
    update(id: string, updateBeneficiaryDto: UpdateBeneficiaryDto): Promise<{
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
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__BeneficiaryClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
