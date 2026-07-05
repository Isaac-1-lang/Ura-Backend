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
exports.DistributionsController = void 0;
const common_1 = require("@nestjs/common");
const distributions_service_1 = require("./distributions.service");
const create_distribution_dto_1 = require("./dto/create-distribution.dto");
const update_distribution_dto_1 = require("./dto/update-distribution.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
let DistributionsController = class DistributionsController {
    distributionsService;
    constructor(distributionsService) {
        this.distributionsService = distributionsService;
    }
    create(createDistributionDto, req) {
        return this.distributionsService.create(createDistributionDto, req.user.id);
    }
    findAll() {
        return this.distributionsService.findAll();
    }
    findOne(id) {
        return this.distributionsService.findOne(id);
    }
    update(id, updateDistributionDto) {
        return this.distributionsService.update(id, updateDistributionDto);
    }
    remove(id) {
        return this.distributionsService.remove(id);
    }
};
exports.DistributionsController = DistributionsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.FIELD_AGENT),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_distribution_dto_1.CreateDistributionDto, Object]),
    __metadata("design:returntype", void 0)
], DistributionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DistributionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistributionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.FIELD_AGENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_distribution_dto_1.UpdateDistributionDto]),
    __metadata("design:returntype", void 0)
], DistributionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistributionsController.prototype, "remove", null);
exports.DistributionsController = DistributionsController = __decorate([
    (0, swagger_1.ApiTags)('distributions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('distributions'),
    __metadata("design:paramtypes", [distributions_service_1.DistributionsService])
], DistributionsController);
//# sourceMappingURL=distributions.controller.js.map