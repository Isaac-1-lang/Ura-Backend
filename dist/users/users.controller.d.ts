import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
