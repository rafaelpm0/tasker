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
exports.TypeServiceController = void 0;
const common_1 = require("@nestjs/common");
const typeService_service_1 = require("./typeService.service");
const create_typeService_dto_1 = require("./dto/create-typeService.dto");
const update_typeService_dto_1 = require("./dto/update-typeService.dto");
const swagger_1 = require("@nestjs/swagger");
let TypeServiceController = class TypeServiceController {
    constructor(typeServiceService) {
        this.typeServiceService = typeServiceService;
    }
    create(createTypeServiceDto) {
        return this.typeServiceService.create(createTypeServiceDto);
    }
    findAll() {
        return this.typeServiceService.findAll();
    }
    findOne(id) {
        return this.typeServiceService.findOne(+id);
    }
    update(id, updateTypeServiceDto) {
        return this.typeServiceService.update(+id, updateTypeServiceDto);
    }
    remove(id) {
        return this.typeServiceService.remove(+id);
    }
};
exports.TypeServiceController = TypeServiceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo tipo de serviço' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_typeService_dto_1.CreateTypeServiceDto]),
    __metadata("design:returntype", void 0)
], TypeServiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os tipos de serviço' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar tipo de serviço por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeServiceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar tipo de serviço' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_typeService_dto_1.UpdateTypeServiceDto]),
    __metadata("design:returntype", void 0)
], TypeServiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover tipo de serviço' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeServiceController.prototype, "remove", null);
exports.TypeServiceController = TypeServiceController = __decorate([
    (0, swagger_1.ApiTags)('type-service'),
    (0, common_1.Controller)('type-service'),
    __metadata("design:paramtypes", [typeService_service_1.TypeServiceService])
], TypeServiceController);
//# sourceMappingURL=typeService.controller.js.map