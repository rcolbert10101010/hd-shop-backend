import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkorderDto } from './dto/create-workorder.dto';
import { UpdateWorkorderDto } from './dto/update-workorder.dto';

@Injectable()
export class WorkordersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateWorkorderDto) {
    return this.prisma.workOrder.create({ data });
  }

  findAll() {
    return this.prisma.workOrder.findMany();
  }

  findOne(id: string) {
    return this.prisma.workOrder.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateWorkorderDto) {
    return this.prisma.workOrder.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.workOrder.delete({ where: { id } });
  }
}
