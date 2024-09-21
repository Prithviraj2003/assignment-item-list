import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ItemList from "../components/ItemList";
import itemsReducer from "../features/itemsSlice";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../components/SearchBar";

// This function will render a component with the Redux store, similar to the Provider component in the index.js file
const renderWithRedux = (
  component,
  {
    store = configureStore({
      reducer: {
        items: itemsReducer,
      },
    }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe("functionality test", () => {
  test("renders correct number of items per page", () => {
    renderWithRedux(<ItemList />);

    // it checks if the 6 items are rendered on the page or not
    expect(screen.getAllByRole("img").length).toBe(6);
  });

  test("pagination works correctly", () => {
    renderWithRedux(<ItemList />);

    // Page 1 should display Item Apple and Banana
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();

    // Click on Page 2 button
    const page2Button = screen.getByText("2");
    fireEvent.click(page2Button); // No need to wrap this in act

    // Page 2 should display Item Peach
    expect(screen.getByText("Peach")).toBeInTheDocument();
  });

  test("filters items based on search input", () => {
    // Render both SearchBar and ItemList components together because searchBar is used to filter items in the ItemList component
    renderWithRedux(
      <>
        <SearchBar />
        <ItemList />
      </>
    );

    // Set the search term to "Apple" to filter the items
    const searchInput = screen.getByPlaceholderText("Search items...");
    fireEvent.change(searchInput, { target: { value: "Apple" } });

    // Only Apple should be displayed
    expect(screen.getByText("Apple")).toBeInTheDocument();
    // Other items shouldn't show up
    expect(screen.queryByText("Banana")).toBeNull();
  });
});
