import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
// import { SellListingItem } from "../components/SellListingItem";
// import "../fetchApi/fetchData";
function Listing({ listing_type }) {
  const { currentUser } = useAuth();
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(listing_type);
  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const sellListings = collection(db, "sell_listing");
        console.log(sellListings);
        const sellQuery = query(
          sellListings,
          where("type", "==", type),
          // where("fullAddress", "array-contains-any", ["92840"]),
          // orderBy("timestamp", "desc"),
          limit(10)
        );
        const querySnap = await getDocs(sellQuery);
        let listings = [];

        querySnap.forEach((doc) => {
          console.log(doc.data());
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(true);
      } catch (e) {
        toast.error(e.message);
      }
    };
    fetchListings();
  }, [type]);
  return !loading ? (
    <h1>Is Loading...</h1>
  ) : listings.length > 0 ? (
    <>
      <div className="mx-auto flex flex-col justify-center ">
        {listings.map((listing) => {
          // <div className="">
          //   {/* <SellListingItem
          //     imageUrl={listing.data.imgUrl[0]}
          //     imageAlt={"House for Sale"}
          //     fullAddress={listing.data.fullAddress}
          //     price={listing.data.price}
          //     btnContent={"Learn More"}
          //     id={listing.id}
          //     key={listing.id}
          //   /> */}
          //   <h1>Listings</h1>;
          // </div>;
          return (
            <div className=" m-4">
              <div
                key={listing.id}
                className="card md:card-side bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src={listing.data.images}
                    alt={"House For Sale"}
                    width={600}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{listing.data.fullAddress}</h2>
                  <p>
                    {listing.data.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">{"Learn More"}</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <p>No Listing for sales</p>
  );
}

export default Listing;
