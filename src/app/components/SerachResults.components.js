import React from "react";
import PackageCard from "./PackageCard.compoents";

const SearchResults = ({ offers }) => {
  return (
    <div className="row mt-5">
      {offers.length > 0 ? (
        offers.map((offer, index) => <PackageCard key={index} offer={offer} />)
      ) : (
        <div className="col-12 text-center">
          <p>No results found. Try a different search!</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
