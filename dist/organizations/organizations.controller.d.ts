import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: OrganizationsService);
    create(createOrganizationDto: CreateOrganizationDto): import(".prisma/client").Prisma.Prisma__OrganizationClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        registrationNumber: string;
        sectorOfFocus: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        registrationNumber: string;
        sectorOfFocus: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        registrationNumber: string;
        sectorOfFocus: string;
    }>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): import(".prisma/client").Prisma.Prisma__OrganizationClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        registrationNumber: string;
        sectorOfFocus: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__OrganizationClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        registrationNumber: string;
        sectorOfFocus: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
