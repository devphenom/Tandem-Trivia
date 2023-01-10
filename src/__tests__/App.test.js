import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders without crashing", () => {
  const renderedAppComponent = render(<App />);
  expect(renderedAppComponent).toBeTruthy();
});
