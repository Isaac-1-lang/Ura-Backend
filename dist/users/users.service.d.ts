import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        id: string;
        active: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        id: string;
        active: boolean;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        id: string;
        passwordHash: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
