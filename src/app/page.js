"use client";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";
import SearchForm from "../app/components/SearchFrom.components";
import SearchResults from "../app/components/SerachResults.components";
import LoadingSpinner from "../app/components/LoadSpinner.components";
import ErrorAlert from "../app/components/ErrorAlert.components";

const Home = () => {
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originCity || !destinationCity) {
      alert("Please fill out both fields");
      return;
    }

    setLoading(true);
    setError(null);

    const apiUrl = `expedia-backend-production.up.railway.app/api/packages`;

    try {
      // const response = await fetch(apiUrl);
      const response = await axios.get(apiUrl, {
        params: {
          origin: originCity,
          destination: destinationCity,
        },
      });
      console.log(response);

      const offers = response?.data?.offers?.Package;
      console.log(offers);

      if (offers && offers.length > 0) {
        setOffers(offers);
      } else {
        setError("No results found.");
        setOffers([]);
      }
    } catch (err) {
      setError("Error fetching data.");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search for Travel Packages</h1>

      <SearchForm
        originCity={originCity}
        setOriginCity={setOriginCity}
        destinationCity={destinationCity}
        setDestinationCity={setDestinationCity}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      <ErrorAlert errorMessage={error} />

      <SearchResults offers={offers} />
    </div>
  );
};

export default Home;
