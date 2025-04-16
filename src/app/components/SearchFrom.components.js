import React from "react";

const SearchForm = ({
  originCity,
  setOriginCity,
  destinationCity,
  setDestinationCity,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="card p-4">
      <h4 className="card-title text-center">Enter Travel Details</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="originCity" className=" ms-2">
            Origin City
          </label>
          <input
            type="text"
            className="form-control m-2"
            id="originCity"
            placeholder="Enter Origin City"
            value={originCity}
            onChange={(e) => setOriginCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="destinationCity" className="ms-2">
            Destination City
          </label>
          <input
            type="text"
            className="form-control m-2"
            id="destinationCity"
            placeholder="Enter Destination City"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block m-2"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
