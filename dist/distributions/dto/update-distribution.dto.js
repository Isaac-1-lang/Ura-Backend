"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDistributionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_distribution_dto_1 = require("./create-distribution.dto");
class UpdateDistributionDto extends (0, swagger_1.PartialType)(create_distribution_dto_1.CreateDistributionDto) {
}
exports.UpdateDistributionDto = UpdateDistributionDto;
//# sourceMappingURL=update-distribution.dto.js.map