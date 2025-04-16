import React from "react";

const ErrorAlert = ({ errorMessage }) => {
  return errorMessage ? (
    <div className="alert alert-danger mt-4">{errorMessage}</div>
  ) : null;
};

export default ErrorAlert;
