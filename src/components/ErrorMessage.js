import React from "react";

export default function ErrorMessage({ err }) {
  const errorMessage = err == "Error: 404" ? "Error 404: Not found" : err.message + " Please try again";

  return (
    <div className="mx-auto mt-5 container">
      <h2 className="text-center">Sorry ! An error has been occurred</h2>
      <h4 className="text-center">
        {errorMessage}
      </h4>
    </div>
  );
}
