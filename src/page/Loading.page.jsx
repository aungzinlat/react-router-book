import React from "react";

const LoadingComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center z-50">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default LoadingComponent;
