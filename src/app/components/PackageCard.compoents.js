import Image from "next/image";
import React from "react";

const PackageCard = ({ offer }) => {
  const hotel = offer.hotelInfo;
  const flight = offer.flightInfo;
  const pricing = offer.packagePricingInfo;
  console.log(offer.hotelInfo);

  return (
    <div className="card mb-4 shadow-sm border-0 ">
      <div className="row g-0">
        {/* Image */}
        <div className="col-md-4 ">
          <img
            src={hotel.bigHotelImageUrl}
            className="img-fluid rounded-start object-fit-cover h-100"
            alt={hotel.hotelName}
          />
        </div>

        {/* Content */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100 w-100">
            <div>
              {/* Hotel Name & Location */}
              <h5 className="card-title fw-bold">{hotel.hotelName}</h5>
              <p className="text-muted mb-1">{hotel.hotelCity}</p>

              {/* Description */}
              <p className="card-text">
                Stay at <strong>{hotel.hotelName}</strong> in {hotel.hotelCity},
                offering {hotel.hotelStarRating}-star service and top amenities.
              </p>
            </div>

            {/* Rating and Price */}
            <div className="d-flex justify-content-between align-items-end mt-3">
              <div>
                <span className="badge bg-success fs-6 me-2">
                  {hotel.formattedHotelGuestReviewRating}
                </span>
                <small className="text-muted">
                  {hotel.hotelReviewTotal} reviews
                </small>
              </div>
              <div className="text-end">
                <span className="text-success fw-bold">
                  {pricing.formattedPerPassengerPackagePrice}
                </span>
                <br />
                <small className="text-muted">
                  includes flight + stay
                  <br />
                  {pricing.formattedTotalPriceValue} package total
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
