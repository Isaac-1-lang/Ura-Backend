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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DistributionsService = class DistributionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createDistributionDto, fieldAgentId) {
        return this.prisma.distribution.create({
            data: {
                ...createDistributionDto,
                distributionDate: new Date(createDistributionDto.distributionDate),
                fieldAgentId,
            },
        });
    }
    findAll() {
        return this.prisma.distribution.findMany({
            include: {
                project: true,
                beneficiary: true,
            }
        });
    }
    async findOne(id) {
        const distribution = await this.prisma.distribution.findUnique({
            where: { id },
            include: {
                project: true,
                beneficiary: true,
            }
        });
        if (!distribution)
            throw new common_1.NotFoundException('Distribution not found');
        return distribution;
    }
    update(id, updateDistributionDto) {
        const data = { ...updateDistributionDto };
        if (data.distributionDate)
            data.distributionDate = new Date(data.distributionDate);
        return this.prisma.distribution.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.distribution.delete({ where: { id } });
    }
};
exports.DistributionsService = DistributionsService;
exports.DistributionsService = DistributionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DistributionsService);
//# sourceMappingURL=distributions.service.js.map