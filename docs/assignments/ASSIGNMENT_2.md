# Assignment 2 Testing

If you want to catch up:

```
git checkout assignment-2
```

## 2.1 Mock data

To reduce boilerplate code in tests it's a good idea to centralize mock data creation.

- Create a file called `shared/product.mock.ts` and paste the following code:

```typescript
import { Product } from '../types/product';

export const createProductMock = (product: Partial<Product> = {}): Product => ({
  price: 10,
  description: 'description',
  title: 'title',
  category: 'category',
  image: 'image',
  id: 1,
  rating: {
    count: 10,
    rate: 5
  },
  ...product
});
```

Resources:

- [Partial type](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [...spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

This mock function returns a default mock object that can be overridden by the caller:

```typescript
// Usage
createProductMock(); // default
createProductMock({ id: 2 }); // default + custom id
createProductMock({ id: 2, title: 'foo' }); // default + custom id + custom title
```

## 2.2 FVProducts Component

- Study the following test and copy it to `FVProducts/FVProducts.test.ts`:

```typescript
describe('<FVProducts />', () => {
  const productsMock: Product[] = [
    createProductMock({
      id: 1
    }),
    createProductMock({
      id: 2
    }),
    createProductMock({
      id: 3
    })
  ];

  it('should render 3 products', () => {
    render(<FVProducts products={productsMock} />);
    const products = screen.getByTestId('FVProducts');
    const productItems = products.querySelectorAll('.product');

    expect(productItems.length).toBe(3);

    productItems.forEach((item, index) => {
      const product = render(<FVProduct {...productsMock[index]} />);
      const productComponent = product.container.querySelector('.product');

      expect(item).toStrictEqual(productComponent);
    });
  });
});
```

## 2.3 FVProduct Component

- Test `FVProduct` by implementing the following test cases:

```typescript
it('should render product title, category, description and price', () => {
  // ...
});

it('should render a rating', () => {
  // ...
});

it('should render a square image with src and alt', () => {
  // ...
});
```

Resources:

- [Component Testing Overview](https://reactjs.org/docs/testing.html)
- [Running Tests](https://create-react-app.dev/docs/running-tests/)

[Solution](https://github.com/FrontValue/react-training/compare/assignment-2...assignment-3)
