import { async } from "@firebase/util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { fetchData } from "../fetchApi/fetchData";
const CreateListing = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: "",
    appartment: "",
    city: "",
    state: "",
    price: 0,
    zipCode: 0,
  });

  const { address, appartment, city, state, zipCode, price } = formData;

  formData.fullAddress = `${formData.address} ${formData.appartment}, ${formData.city}, ${formData.state} ${formData.zipCode}`;
  formData.user = currentUser.uid;

  const submitHandle = (e) => {
    e.preventDefault();
  };

  // fetch data from rapidAPI
  //   try {
  //     const response = fetchData(formData.fullAddress);
  //     console.log(response);
  //   } catch (e) {
  //     toast.error(e.message);
  //   }

  return (
    <>
      <div className="container flex flex-col">
        <div>
          <header>Create A Listing</header>
        </div>
        <main>
          <form onSubmit={submitHandle}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => {
                setFormData((prev) => {
                  // return {...formData, formData.price = e.target.value}
                });
              }}
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={() => {}}
            />
          </form>
        </main>
      </div>
    </>
  );
};

export default CreateListing;
