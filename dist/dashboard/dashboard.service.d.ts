import { PrismaService } from '../prisma/prisma.service';
import type { Cache } from 'cache-manager';
export declare class DashboardService {
    private prisma;
    private cacheManager;
    constructor(prisma: PrismaService, cacheManager: Cache);
    getSummary(): Promise<{}>;
}
