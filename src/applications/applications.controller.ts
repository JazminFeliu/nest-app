import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Application } from './application.model';
import { ApplicationsService } from './applications.service';

@Controller('application')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationDto: Application) {
    return this.applicationsService.create(createApplicationDto);
  }

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationDto: Application) {
    return this.applicationsService.update(id, updateApplicationDto);
  }

  @Delete(':id')
  @ApiParam({name: 'id'})
  remove(@Param('id') id: string) {
    console.log(id);
    return this.applicationsService.remove(id);
  }
}

