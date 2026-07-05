import { Role } from '@prisma/client';
export declare class RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: Role;
}
