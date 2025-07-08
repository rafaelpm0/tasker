"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const prisma_service_1 = require("./prisma/prisma.service");
const service_service_1 = require("./src/service/service.service");
describe('ServiceService', () => {
    let service;
    let prisma;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [service_service_1.ServiceService, prisma_service_1.PrismaService],
        }).compile();
        service = module.get(service_service_1.ServiceService);
        prisma = module.get(prisma_service_1.PrismaService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('create', () => {
        it('should create a service', async () => {
            const createServiceDto = { description: 'Test Service', client_id: 1, type_serv_id: 1, qtn_min: 60 };
            prisma.service.create = jest.fn().mockResolvedValue(createServiceDto);
            const result = await service.create(createServiceDto);
            expect(result).toEqual(createServiceDto);
            expect(prisma.service.create).toHaveBeenCalledWith({ data: createServiceDto });
        });
    });
    describe('findAll', () => {
        it('should return all services', async () => {
            const services = [{ id: 1, description: 'Test Service' }];
            prisma.service.findMany = jest.fn().mockResolvedValue(services);
            const result = await service.findAll();
            expect(result).toEqual(services);
            expect(prisma.service.findMany).toHaveBeenCalled();
        });
    });
    describe('findOne', () => {
        it('should return a service if found', async () => {
            const serviceData = { id: 1, description: 'Test Service' };
            prisma.service.findUnique = jest.fn().mockResolvedValue(serviceData);
            const result = await service.findOne(1);
            expect(result).toEqual(serviceData);
            expect(prisma.service.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        });
        it('should throw NotFoundException if service not found', async () => {
            prisma.service.findUnique = jest.fn().mockResolvedValue(null);
            await expect(service.findOne(1)).rejects.toThrow('Serviço com ID 1 não encontrado');
        });
    });
    describe('update', () => {
        it('should update a service', async () => {
            const updateServiceDto = { description: 'Updated Service' };
            const updatedService = { id: 1, ...updateServiceDto };
            prisma.service.update = jest.fn().mockResolvedValue(updatedService);
            const result = await service.update(1, updateServiceDto);
            expect(result).toEqual(updatedService);
            expect(prisma.service.update).toHaveBeenCalledWith({ where: { id: 1 }, data: updateServiceDto });
        });
        it('should throw NotFoundException if service not found', async () => {
            prisma.service.update = jest.fn().mockRejectedValue(new Error());
            await expect(service.update(1, {})).rejects.toThrow('Serviço com ID 1 não encontrado');
        });
    });
    describe('remove', () => {
        it('should remove a service', async () => {
            const removedService = { id: 1, description: 'Test Service' };
            prisma.service.delete = jest.fn().mockResolvedValue(removedService);
            const result = await service.remove(1);
            expect(result).toEqual(removedService);
            expect(prisma.service.delete).toHaveBeenCalledWith({ where: { id: 1 } });
        });
        it('should throw NotFoundException if service not found', async () => {
            prisma.service.delete = jest.fn().mockRejectedValue(new Error());
            await expect(service.remove(1)).rejects.toThrow('Serviço com ID 1 não encontrado');
        });
    });
});
//# sourceMappingURL=test_package.test.js.map