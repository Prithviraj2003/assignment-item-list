import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/itemsSlice";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && photo && price && quantity) {
      const newItem = {
        id: Date.now(),
        name,
        photo,
        price: price,
        quantity: quantity,
      };
      dispatch(addItem(newItem));
      setName("");
      setPhoto("");
      setPrice("");
      setQuantity("");
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-target="#add-item-modal"
        data-bs-toggle="modal"
      >
        Add Item
      </button>
      <div
        className="modal fade"
        id="add-item-modal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header mb-3">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Add Item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit} className="m-2">
              <div className="form-group ">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter item name"
                />
              </div>
              <div className="form-group">
                <label>Photo URL</label>
                <input
                  type="text"
                  className="form-control"
                  value={photo}
                  required
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Enter photo URL"
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter item price"
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  value={quantity}
                  required
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
