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
exports.ServiceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_service_1 = require("./service.service");
const create_service_dto_1 = require("./dto/create-service.dto");
const update_service_dto_1 = require("./dto/update-service.dto");
let ServiceController = class ServiceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
    }
    create(createServiceDto) {
        return this.serviceService.create(createServiceDto);
    }
    findAll() {
        return this.serviceService.findAll();
    }
    findOne(id) {
        return this.serviceService.findOne(+id);
    }
    update(id, updateClientDto) {
        return this.serviceService.update(+id, updateClientDto);
    }
    remove(id) {
        return this.serviceService.remove(+id);
    }
};
exports.ServiceController = ServiceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo serviço' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Serviço criado com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_dto_1.CreateServiceDto]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os serviços' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de serviços retornada com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um serviço pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serviço encontrado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serviço atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serviço removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "remove", null);
exports.ServiceController = ServiceController = __decorate([
    (0, swagger_1.ApiTags)('service'),
    (0, common_1.Controller)('service'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ServiceController);
//# sourceMappingURL=service.controller.js.map