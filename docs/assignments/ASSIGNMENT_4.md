# Assignment 4 Routing

If you want to catch up:

```
git checkout assignment-4
```

## 4.1 Prepare App for routing

- Add a Router

```
npm install --save react-router-dom
```

## 4.2 Home page

Let's create a home page.

- Create a folder `pages`
- Create a file 'HomePage.tsx' component in folder `pages`
- Add some text to the page

## 4.3 Products Overview

- Create a file 'ProductsOverview.tsx' component and place it in the `pages` folder
- Now we have to decouple our app from all products related logic
    - Move the template and implementation of the `App` component to the `ProductsOverview` component

## 4.4 Configuring routes and adding navigation

- Add the following content to the `App` component

```tsx
const FVNavigation = () => {
  const style = ({ isActive = false }) => ({
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <>
      <nav>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/products-overview" style={style}>
          Products overview
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FVNavigation />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="products-overview" element={<ProductsOverview />} />
            <Route path="*" element={<p>404!</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
```

You should now be able to navigate between pages.
You can add styling as you see fit.
<FVNavigation /> can be a separate component with its styling If you think it's nessasery!

Resources:

- [Adding a Router](https://create-react-app.dev/docs/adding-a-router/)
- [React Router](https://reactrouter.com/en/6.6.1)
- [React Router examples](https://reactrouter.com/en/6.6.1/start/examples#examples)

[Solution](https://github.com/FrontValue/react-training/compare/assignment-4...assignment-5)
