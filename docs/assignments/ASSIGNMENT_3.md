# Assignment 3 Practice (+ homework)

If you want to catch up:

```
git checkout assignment-3
```

## 3.1 Search component

- Create a search component `<FVSearch />`.

- Implement the following requirements:
    - It uses a [Text Field](https://mui.com/material-ui/react-text-field/)
      - you'll have to install [Material Design for React](https://mui.com/material-ui/getting-started/installation/)
    - It emits an [onChange Event](https://reactjs.org/docs/dom-elements.html#onchange) every time input changes
    - It's rendered above `<FVProductsList />` in the `App` component.

Resources:

- [DOM Elements](https://reactjs.org/docs/dom-elements.html)
- [Lifting state up](https://reactjs.org/docs/lifting-state-up.html)
- [Material Design for React](https://mui.com/material-ui/getting-started/installation/)

## 3.2 Filter products

- Filter products based on search query from the `FVSearch` component.

- Implement the following requirements:
    - Place it in the App.tsx
    - It uses [useState](https://reactjs.org/docs/hooks-state.html) hook to manage state.
    - Create a function for filtering and place it in the `shared` folder.
      - It filters products based on the title
    - Don't mutate the original product array.

## 3.4 Rating component (Bonus)

Rating stars are currently hard coded. In this assignment, you'll have to use plain JS to generate 5 `span` elements with
either a full, half or empty star. Here's some TypeScript that helps to type and render the stars:

```typescript
type Star = 0 | 0.5 | 1;

const STARS_ELEMENTS: Record<Star, JSX.Element> = {
  '0': <FontAwesomeIcon icon={faStarEmpty} />,
  '0.5': <FontAwesomeIcon icon={faStarHalfStroke} />,
  '1': <FontAwesomeIcon icon={faStar} />
};
```

- Implement the following requirements:
    - It accepts `rate` and `count`.
    - It rounds up/down to full or half numbers.
      - 3.7 -> 3.5 stars
      - 3.75 -> 4 stars
      - 1.20 = 1 star
      - 1.25 = 1.5 star
    - It is properly unit-tested.

## 3.5 Additional sources (Bonus)

### React

- [React Docs](https://beta.reactjs.org/)
- [Getting Started with React.js](https://reactjs.org/docs/getting-started.html)
- [The React Cheatsheet for 2022](https://www.freecodecamp.org/news/the-react-cheatsheet/)
- [Create React App](https://create-react-app.dev/)

- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React With Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM&ab_channel=ReactConf)

- [How to Manage State in React](https://www.freecodecamp.org/news/how-to-manage-state-in-react/)
- [Next.js](https://nextjs.org/)

### TypeScript

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Cheat Sheets](https://www.typescriptlang.org/cheatsheets)
- [No BS TS - Typescript course](https://www.youtube.com/watch?v=LKVHFHJsiO0&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&ab_channel=JackHerrington)
- [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
    explains the built-in TypeScript utility types.

[Solution](https://github.com/FrontValue/react-training/compare/assignment-3...assignment-4)
