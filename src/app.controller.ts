import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { PCBService } from './app.service';
import { PCBComponentProperties } from './constants';

@Controller()
export class AppController {
  constructor(private readonly PCBService: PCBService) {}

  @Get()
  getHello(): string {
    return this.PCBService.determineComponent({});
  }

  @Post()
  @HttpCode(202)
  isValidPCBComponent(@Body() PCBComponent: Body): HttpStatus | HttpException {
    const componentType = this.PCBService.determineComponent(PCBComponent);
    const componentExists =
      componentType && PCBComponentProperties[componentType];
    if (componentExists) {
      if (
        this.PCBService.validateComponent(
          PCBComponent,
          PCBComponentProperties[componentType],
        )
      ) {
        return HttpStatus.ACCEPTED;
      } else {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: `Invalid ${componentType}`,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Invalid component`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
