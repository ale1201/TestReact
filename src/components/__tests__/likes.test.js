import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Likes from "../likes";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Likes/>, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

//Likes por defecto en 0
describe("Test for Likes", () => {
  it("By default the component shows 'Likes:0'", () => {
    const comp = container.querySelector("p");
    expect(comp.textContent).toBe("Likes: 0");
  });
});
//Cuando se hace clic en el botón Like, el número de likes se incremente en uno
describe("Test for Likes",() => {
    it("When clicking Like, likes increases", () => {
        const btn = container.querySelector("#increment");
        const p = container.querySelector("p");
        act(() => {
            btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(p.textContent).toBe("Likes: 1");
      });
})
//Cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
describe("Test for Likes",() => {
    it("When clicking Dislike, likes decreases", () => {
        const btn = container.querySelector("#decrement");
        const p = container.querySelector("p");
        act(() => {
            btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(p.textContent).toBe("Likes: -1");
      });
}) 