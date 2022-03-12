import axios from "axios";

const options = {
  method: "GET",
  url: "https://realty-mole-property-api.p.rapidapi.com/properties",
  params: { address: "5500 Grand Lake Dr, San Antonio, TX 78244" },
  headers: {
    "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
    "x-rapidapi-key": "7bdd8d7c63msh369accce28b05f5p1bc7a3jsn70c5720ff919",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
