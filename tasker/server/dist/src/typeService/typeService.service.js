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
exports.TypeServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let TypeServiceService = class TypeServiceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTypeServiceDto) {
        return this.prisma.typeService.create({
            data: createTypeServiceDto,
        });
    }
    async findAll() {
        return this.prisma.typeService.findMany({
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const typeService = await this.prisma.typeService.findUnique({
            where: { id },
        });
        if (!typeService) {
            throw new common_1.NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
        }
        return typeService;
    }
    async update(id, updateTypeServiceDto) {
        try {
            return await this.prisma.typeService.update({
                where: { id },
                data: updateTypeServiceDto,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.typeService.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2003') {
                    throw new common_1.BadRequestException(`Não é possível remover o tipo de serviço com ID ${id} porque ele está sendo referenciado por outro registro.`);
                }
            }
            throw new common_1.NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
        }
    }
};
exports.TypeServiceService = TypeServiceService;
exports.TypeServiceService = TypeServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TypeServiceService);
//# sourceMappingURL=typeService.service.js.map