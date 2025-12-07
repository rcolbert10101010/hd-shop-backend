import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WorkordersService } from './workorders.service';
import { CreateWorkorderDto } from './dto/create-workorder.dto';
import { UpdateWorkorderDto } from './dto/update-workorder.dto';

@Controller('workorders')
export class WorkordersController {
  constructor(private readonly service: WorkordersService) {}

  @Post()
  create(@Body() data: CreateWorkorderDto) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateWorkorderDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
