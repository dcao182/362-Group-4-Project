import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { async } from "@firebase/util";

const CreateListing = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { loading, setLoading } = useState(false);

  const [formData, setFormData] = useState({
    type: "",
    address: "",
    appartment: "",
    city: "",
    state: "",
    price: 0,
    zipCode: 0,
    bedrooms: 1,
    bathrooms: 1,
    images: "",
  });

  const {
    type,
    address,
    appartment,
    city,
    state,
    zipCode,
    price,
    bedrooms,
    bathrooms,
    images,
  } = formData;

  formData.user = currentUser.uid;

  const submitHandle = async (e) => {
    e.preventDefault();

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
      fullAddress: `${address} ${appartment}, ${city}, ${state} ${zipCode}`,
    };

    const docRef = await addDoc(collection(db, "sell_listing"), formDataCopy);
    toast.success("Listing saved");
    type == "sell" ? navigate(`/sell_listing`) : navigate(`/rent_listing`);
  };

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container flex flex-col">
        <div>
          <header>Create A Listing</header>
        </div>
        <main>
          <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md">
              <form onSubmit={submitHandle}>
                <div className="block mb-6">
                  <label className="mx-5">
                    <input
                      className="mx-2"
                      type="radio"
                      id="type"
                      value="sell"
                      name="type"
                      onClick={onMutate}
                    />
                    Sell
                  </label>
                  <label className="mx-5">
                    <input
                      className="mx-2"
                      type="radio"
                      id="type"
                      value="rent"
                      name="type"
                      onClick={onMutate}
                    />
                    Rent
                  </label>
                </div>
                <label htmlFor="address" className="block mb-6">
                  Address
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="text"
                    id="address"
                    value={address}
                    onChange={onMutate}
                  />
                </label>

                <label htmlFor="appartment" className="block mb-6">
                  Appartment
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="text"
                    id="appartment"
                    value={appartment}
                    onChange={onMutate}
                  />
                </label>

                <label htmlFor="city" className="block mb-6">
                  City
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="text"
                    id="city"
                    value={city}
                    onChange={onMutate}
                  />
                </label>
                <label htmlFor="state" className="block mb-6">
                  State
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="text"
                    id="state"
                    value={state}
                    onChange={onMutate}
                  />
                </label>

                <label htmlFor="zipCode" className="block mb-6">
                  Zip Code
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="text"
                    id="zipCode"
                    value={zipCode}
                    onChange={onMutate}
                  />
                </label>

                <label htmlFor="price" className="block mb-6">
                  Price
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="number"
                    id="price"
                    value={price}
                    onChange={onMutate}
                    required
                  />
                </label>

                <label htmlFor="images" className="block mb-6">
                  Images
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    type="url"
                    id="images"
                    value={images}
                    onChange={onMutate}
                    required
                  />
                </label>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateListing;
