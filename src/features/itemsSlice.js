import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  //its initial state which contains all the items and the search term . this will provide the initial state of the items slice 
  initialState: {
    allItems: [
      {
        id: 1,
        name: "Apple",
        photo:
          "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
        price: 5,
        quantity: 10,
      },
      {
        id: 2,
        name: "Banana",
        photo:
          "https://media.istockphoto.com/id/528532355/photo/banana.jpg?s=612x612&w=0&k=20&c=ViF5PDHRCiin2ASj8yutnQ5uPuh0QoPRFJLSPfZDKQ4=",
        price: 3,
        quantity: 20,
      },
      {
        id: 3,
        name: "Orange",
        photo:
          "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
        price: 7,
        quantity: 15,
      },
      {
        id: 4,
        name: "Pear",
        photo:
          "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?s=612x612&w=0&k=20&c=KwN77KxCAl025ZaSBgzO7aqM9DALlBcrX0TXUNF5kDs=",
        price: 7,
        quantity: 15,
      },
      {
        id: 5,
        name: "Pineapple",
        photo:
          "https://media.istockphoto.com/id/1141377960/photo/raw-pineapple-with-green-background-image.jpg?s=612x612&w=0&k=20&c=7Ca1S6LWroWeeD3ReqAL_p_l0GRuBSZ3Olxz1tmSjmU=",
        price: 7,
        quantity: 15,
      },
      {
        id: 6,
        name: "Grapes",
        photo:
          "https://media.istockphoto.com/id/842928214/photo/fresh-grapes-in-the-basket.jpg?s=612x612&w=0&k=20&c=SPUyIifWeeXCda_P8sqE0WFvZ-pDyaQ4aZLjNHpYEc4=",
        price: 7,
        quantity: 15,
      },
      {
        id: 7,
        name: "Strawberry",
        photo:
          "https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.jpg?s=612x612&w=0&k=20&c=sg8D6YofX0K9og_ugF4R50QrPAKQUvHn5vJGfr-7Zk4=",
        price: 7,
        quantity: 15,
      },
        {
            id: 8,
            name: "Watermelon",
            photo:
            "https://media.istockphoto.com/id/1405808436/photo/the-whole-body-of-fresh-watermelon.jpg?s=612x612&w=0&k=20&c=9k1M7u3xveRAePhJxHkfo30ZHgNvY-S0uqVWtRc7VC8=",
            price: 7,
            quantity: 15,
        },
        {
            id: 9,
            name: "Mango",
            photo:
            "https://media.istockphoto.com/id/168370138/photo/mango.jpg?s=612x612&w=0&k=20&c=ENq2BrUV8dNH2rth_ZYBBtS9RWDwCbI25SfulxirmnQ=",
            price: 7,
            quantity: 15,
        },
        {
            id: 10,
            name: "Kiwi",
            photo:
            "https://media.istockphoto.com/id/834807852/photo/whole-kiwi-fruit-and-half-kiwi-fruit-on-white.jpg?s=612x612&w=0&k=20&c=zliUVnZlYPcOxEDYef7PMmOEEODFr8FUkTYqqFVaRG8=",
            price: 7,
            quantity: 15,
        },
        {
            id: 11,
            name: "Peach",
            photo:
            "https://media.istockphoto.com/id/1151868959/photo/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white.jpg?s=612x612&w=0&k=20&c=RLTbnKnN6w85oXn4qA8y8WYN3OMpGxEDc1nI7VY0gWU=",
            price: 7,
            quantity: 15,
        },
        {
            id: 12,
            name: "Cherry",
            photo:
            "https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6BV79sui5Hc6lj555eV_ePiGlKfdZveIG9B5hIWidug=",
            price: 7,
            quantity: 15,
        },
        
      // Add more items here as needed
    ],
    searchTerm: "",
  },
  //reducers are functions that are used to change the state of the items slice. setSearchTerm is used to set the search term and addItem is used to add an item to the allItems array
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addItem: (state, action) => {
      state.allItems.push(action.payload);
    },
  },
});

export const { setSearchTerm, addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
