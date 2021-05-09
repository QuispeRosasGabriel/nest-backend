import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  public getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `${limit} and ${offset} and ${brand} `;
  }

  @Get('products/filter')
  public getProductFilter() {
    return 'Yo soy filter';
  }

  @Get('/:productId')
  public getOne(@Param('productId') productId: string): string {
    return `Product ${productId}`;
  }

  @Post()
  public create(): Record<string, string> {
    return {
      status: 'ok',
      message: 'creado',
    };
  }
}
