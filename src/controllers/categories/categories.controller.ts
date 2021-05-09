import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //Static routes must be before of dynamic routes

  @Get('/:id/products/:productId')
  public getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Product ${productId} and ${id}`;
  }
}
