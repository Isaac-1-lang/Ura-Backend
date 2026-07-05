"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const client_1 = require("@prisma/client");
let ReportsService = class ReportsService {
    prisma;
    cacheManager;
    constructor(prisma, cacheManager) {
        this.prisma = prisma;
        this.cacheManager = cacheManager;
    }
    async getBeneficiariesPerDistrict() {
        const cached = await this.cacheManager.get('beneficiaries_district');
        if (cached)
            return cached;
        const data = await this.prisma.beneficiary.groupBy({
            by: ['district'],
            _count: { _all: true },
        });
        await this.cacheManager.set('beneficiaries_district', data, 60000);
        return data;
    }
    async getBeneficiariesPerProvince() {
        const cached = await this.cacheManager.get('beneficiaries_province');
        if (cached)
            return cached;
        const data = await this.prisma.beneficiary.groupBy({
            by: ['province'],
            _count: { _all: true },
        });
        await this.cacheManager.set('beneficiaries_province', data, 60000);
        return data;
    }
    async getAidDistributedPerProject() {
        const cached = await this.cacheManager.get('aid_per_project');
        if (cached)
            return cached;
        const data = await this.prisma.distribution.groupBy({
            by: ['projectId'],
            _sum: { quantity: true },
        });
        await this.cacheManager.set('aid_per_project', data, 60000);
        return data;
    }
    async getActiveProjects() {
        return this.prisma.project.findMany({
            where: { status: client_1.ProjectStatus.ACTIVE },
        });
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], ReportsService);
//# sourceMappingURL=reports.service.js.map