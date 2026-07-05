import { VulnerabilityCategory } from '@prisma/client';
export declare class CreateBeneficiaryDto {
    fullName: string;
    nationalId: string;
    householdSize: number;
    province: string;
    district: string;
    sector: string;
    cell: string;
    village: string;
    vulnerabilityCategory?: VulnerabilityCategory;
}
