import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from './models';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) { }

  @Get()
  findAll(): Flight[] {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Flight {
    return this.flightService.findOne(Number(id));
  }

  @Post()
  create(@Body() flight: Flight): number {
    return this.flightService.create(flight);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() flight: Flight): Flight {
    if (this.flightService.exist(Number(id))) {
      return this.flightService.update(flight)
    } else {
        return undefined;
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.flightService.delete(Number(id));
  }

}
