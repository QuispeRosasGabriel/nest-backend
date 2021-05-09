import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Static routes must be before of dynamic routes

  @Get('products/filter')
  public getProductFilter() {
    return 'Yo soy filter';
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

  //QUERY PARAMS
  @Get('products')
  public getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `${limit} and ${offset} and ${brand} `;
  }
}
