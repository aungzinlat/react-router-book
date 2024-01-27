import React from "react";
// import useFetch from "../hook/useFetch";
// import { GetBookData } from "../service/book.service";
import { Link } from "react-router-dom";
import BookComponents from "./Book.components";

const BookListComponents = ({ data }) => {
  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {" "}
        {data.map((data) => (
          <Link key={data.id} to={`/detail/${data.id}`}>
            <BookComponents key={data.id} data={data} />
          </Link>
        ))}{" "}
      </div>
    </div>
  );
};

export default BookListComponents;
