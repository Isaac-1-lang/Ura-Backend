import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        organization: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            registrationNumber: string;
            sectorOfFocus: string;
        };
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        organization: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            registrationNumber: string;
            sectorOfFocus: string;
        };
        distributions: {
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
        }[];
    } & {
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
    }>;
    update(id: string, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
