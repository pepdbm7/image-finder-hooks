import React, { useState } from "react";
const Error = ({ message }) => {
  return <p className="my-3 p-3 text-center alert alert-danger">{message}</p>;
};

export default Error;
