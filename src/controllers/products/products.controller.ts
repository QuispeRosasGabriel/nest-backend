import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe
} from '@nestjs/common';
import { IProduct } from 'src/utils/interfaces';
import { ProductService } from '../../services/product/product.service';
@Controller('products')
export class ProductsController {
  public constructor(private readonly productService: ProductService) {}

  @Get('')
  public getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
    /*return {
      message: `you searched for ${limit} and ${offset} and ${brand}`,
    };*/
  }

  @Get('products/filter')
  public getProductFilter() {
    return 'Yo soy filter';
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.OK)
  public getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
    //return this.productService.findOne(+productId);
  }

  @Post()
  public create(@Body() payload: IProduct): Record<string, unknown> {
    return this.productService.create(payload);
  }

  @Put(':id')
  public update(@Param('id') id: number, @Body() payload: unknown) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  public delete(@Param('id') id: number) {
    return {
      message: `el producto con id: ${id} fue eliminado`,
    };
  }
}
