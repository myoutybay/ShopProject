import React from "react";
// import { withErrorBoundary } from "react-error-boundary";
import { HomePage, PostPage, ProductPage, SearchPage } from "./pages";
import { NormalLayout } from "./layout/NormalLayout";
import { SearchLayout } from "./layout/SearchLayout";

const routes = [
  {
    screencode: "N0001",
    layoutPath: "/",
    layoutComponent: <NormalLayout />,
    path: "",
    component: <HomePage />,
  },
  {
    screencode: "N0002",
    layoutPath: "/product",
    layoutComponent: <NormalLayout />,
    path: ":slug",
    component: <ProductPage />,
  },
  {
    screencode: "N0003",
    layoutPath: "/post",
    layoutComponent: <NormalLayout />,
    path: ":slug",
    component: <PostPage />,
  },
  {
    screencode: "N0004",
    layoutPath: "/search",
    layoutComponent: <SearchLayout />,
    path: "",
    component: <SearchPage />,
  },
];
// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }
export default routes.map((route) => {
  return {
    ...route,
    component: route.component,
  };
});
