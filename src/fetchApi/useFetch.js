const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    var options = {
      method: "GET",
      url: "https://realty-mole-property-api.p.rapidapi.com/properties",
      params: { address: fullAddress },
      headers: {
        "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
        "x-rapidapi-key": "7bdd8d7c63msh369accce28b05f5p1bc7a3jsn70c5720ff919",
      },
    };
    const fetchData = async () => {
      try {
        const resp = await axios.request(options);
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};
