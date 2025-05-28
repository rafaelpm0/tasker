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
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ServiceService = class ServiceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createServiceDto) {
        return this.prisma.service.create({
            data: createServiceDto,
        });
    }
    async findAll() {
        const result = await this.prisma.service.findMany({
            orderBy: { id: 'asc' },
            include: {
                client: true,
                typeService: true,
            },
        });
        console.log(JSON.stringify(result, null, 2));
        return result;
    }
    async findOne(id) {
        const service = await this.prisma.service.findUnique({
            where: { id },
        });
        if (!service) {
            throw new common_1.NotFoundException(`Serviço com ID ${id} não encontrado`);
        }
        return service;
    }
    async update(id, updateServiceDto) {
        try {
            return await this.prisma.service.update({
                where: { id },
                data: updateServiceDto,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Serviço com ID ${id} não encontrado`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.service.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Serviço com ID ${id} não encontrado`);
        }
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiceService);
//# sourceMappingURL=service.service.js.map