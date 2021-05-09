import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class CategoryService {
  private products: Array<Product> = [
    {
      id: 1,
      name: 't-shirt',
      stock: 1,
      price: 120,
      description: 'my t-shirt',
      img: '',
    },
    {
      id: 2,
      name: 't-shirt',
      stock: 4,
      price: 120,
      description: 'my t-shirt',
      img: '',
    },
    {
      id: 3,
      name: 't-shirt',
      stock: 5,
      price: 120,
      description: 'my t-shirt',
      img: '',
    },
  ];

  public findAll() {
      return this.products;
  }
  
  public findOne (id: number) {
      return this.products.find((product) => product.id === id);
  }

  public create (payload) {
      const newProduct = {
          
      }
  }

}
