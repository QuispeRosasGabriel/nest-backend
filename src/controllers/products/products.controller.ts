import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IProduct } from 'src/utils/interfaces';

@Controller('products')
export class ProductsController {
  @Get('')
  public getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `you searched for ${limit} and ${offset} and ${brand}`,
    };
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
  public create(@Body() payload: IProduct): Record<string, unknown> {
    return {
      status: 'ok',
      message: 'creado',
      payload,
    };
  }

  @Put(':id')
  public update(@Param('id') id: number, @Body() payload: unknown) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  public delete(@Param('id') id: number) {
    return {
      message: `el producto con id: ${id} fue eliminado`,
    };
  }
}
