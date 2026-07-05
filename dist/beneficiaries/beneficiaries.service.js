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
exports.BeneficiariesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BeneficiariesService = class BeneficiariesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBeneficiaryDto) {
        const existing = await this.prisma.beneficiary.findUnique({
            where: { nationalId: createBeneficiaryDto.nationalId }
        });
        if (existing) {
            throw new common_1.ConflictException('Beneficiary with this National ID already exists');
        }
        return this.prisma.beneficiary.create({
            data: createBeneficiaryDto,
        });
    }
    findAll() {
        return this.prisma.beneficiary.findMany();
    }
    async findOne(id) {
        const beneficiary = await this.prisma.beneficiary.findUnique({
            where: { id },
            include: { distributions: { include: { project: true } } }
        });
        if (!beneficiary)
            throw new common_1.NotFoundException('Beneficiary not found');
        return beneficiary;
    }
    async update(id, updateBeneficiaryDto) {
        if (updateBeneficiaryDto.nationalId) {
            const existing = await this.prisma.beneficiary.findUnique({
                where: { nationalId: updateBeneficiaryDto.nationalId }
            });
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException('National ID is already in use by another beneficiary');
            }
        }
        return this.prisma.beneficiary.update({
            where: { id },
            data: updateBeneficiaryDto,
        });
    }
    remove(id) {
        return this.prisma.beneficiary.delete({ where: { id } });
    }
};
exports.BeneficiariesService = BeneficiariesService;
exports.BeneficiariesService = BeneficiariesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BeneficiariesService);
//# sourceMappingURL=beneficiaries.service.js.map