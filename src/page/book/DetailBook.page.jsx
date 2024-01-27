import React from "react";
import useFetch from "../../hook/useFetch";
import { useParams, Link } from "react-router-dom";
import { GetBookData } from "../../service/book.service";
import LoadingComponent from "../Loading.page";
import harryImg from "../../img/harry-cover.avif";

const DetailBookPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(GetBookData, `items/${id}`);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        // <div className="container mx-auto p-4">
        //   <div className="lg:flex">
        //     {/* Image */}
        //     <div className="lg:w-1/3">
        //       <img
        //         src={harryImg}
        //         alt="Book Cover"
        //         className="rounded-lg w-full h-auto"
        //       />
        //     </div>

        //     {/* Details */}
        //     <div className="lg:w-2/3 lg:ml-8">
        //       {/* Title */}
        //       <h1 className="text-3xl font-bold mb-4">Book Title</h1>

        //       {/* Author */}
        //       <p className="text-lg text-gray-600 mb-4">Author: John Doe</p>

        //       {/* Description */}
        //       <p className="text-lg mb-4">
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //       </p>
        //     </div>
        //   </div>
        // </div>

        <div className="container max-w-screen-md mx-auto p-8 mt-16 rounded shadow-md ">
          <div className=" pt-8 ps-8">
            <Link
              to="/"
              className="text-white mb-4  transition duration-300 ease-in-out px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
            >
              Back
            </Link>
          </div>
          <div className="max-w-screen-md mx-auto bg-white p-8  flex items-center justify-center">
            <div className="w-1/2">
              <img
                src={data.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
                className="w-full h-auto my-4"
              />
            </div>
            <div className="w-1/2 ml-8 flex flex-col justify-center items-left">
              <h1 className="text-4xl text-black font-bold mb-3">
                {data.volumeInfo.title}
              </h1>{" "}
              <p className="text-gray-400">
                <span className=" text-lg mb-4 font-bold">
                  {data.volumeInfo.categories} -
                </span>
                <span className=" text-lg">
                  {" "}
                  ({data.volumeInfo.publishedDate})
                </span>
              </p>
              <p className="text-gray-600 text-2xl mb-4 font-bold">
                {data.volumeInfo.authors}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-gray-800 text-xl space-y-5">
              {data.volumeInfo.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailBookPage;
