import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  private counterId = 1;
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

  public findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      //throw 'error al encontrar el producto';
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  public create(payload) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  public update(id: number, payload) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
