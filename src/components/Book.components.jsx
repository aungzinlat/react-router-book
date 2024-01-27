import React from "react";
import harryCover from "../img/harry-cover.avif";
const BookComponents = ({ data }) => {
  return (
    // <div className="book flex flex-col rounded max-w-sm text-black">
    //   <div className=" book-img max-w-xs mx-auto">
    //     <img className=" rounded-sm" src={harryCover} alt="book cover" />
    //   </div>
    //   <div className=" book-info mt-2 max-w-xs">
    //     <div>
    //       <span>Title :{bookName}</span>
    //     </div>
    //     <div>
    //       <span>Athor : {author}</span>
    //       <span></span>
    //     </div>
    //     <div className="">
    //       <span className=" line-clamp-2">Description :{description}</span>
    //     </div>
    //   </div>
    // </div>

    <div className=" rounded-lg max-w-lg bg-white my-10 shadow-md text-left">
      <div className=" p-6 flex items-center justify-center">
        <img
          className=" h-60 mb-4"
          src={data.volumeInfo.imageLinks.smallThumbnail}
          alt="book img"
        />
      </div>

      <div className="p-6 text-center">
        <h5 className="  mb-2 line-clamp-1 text-xl font-bold tracking-wide text-neutral-800 ">
          {data.volumeInfo.title}
        </h5>
        <h5 className=" mb-2 line-clamp-1 font-bold tracking-wide text-neutral-400 ">
          {data.volumeInfo.authors}
        </h5>

        <p className="mb-2 text-base text-left line-clamp-3 text-neutral-800">
          {data.volumeInfo.description}.
        </p>
      </div>
    </div>
  );
};

export default BookComponents;
