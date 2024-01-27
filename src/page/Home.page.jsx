import React from "react";
import { GetBookData } from "../service/book.service";
import useFetch from "../hook/useFetch";
import { BookListComponents } from "../components";
import LoadingComponent from "./Loading.page";

const HomePage = () => {
  const { loading, data, error } = useFetch(GetBookData, "items");
  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div>
          <BookListComponents key={data.id} data={data} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
