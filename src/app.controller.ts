import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/:productId')
  public getProduct(@Param('productId') productId: string): string {
    return `Product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  public getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Product ${productId} and ${id}`;
  }
}
