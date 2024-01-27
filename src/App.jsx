import useFetch from "./hook/useFetch";
import { GetBookData } from "./service/book.service";
import { Routes, Route, NavLink } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import NotFound from "./NotFound";

import harryImg from "./img/harry-cover.avif";
import { NavComponents } from "./components";
import axios from "axios";
import { API_URL } from "./lib/constant";

const App = () => {
  const { data } = useFetch(GetBookData, "items");
  // const book = data.map((i) => console.log(i));
  console.log(data);

  return (
    <div>
      <NavComponents />
      {/* <SpacerComponents /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<DetailBookPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>

    // <div className="max-w-[900px] mx-auto py-10 text-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //   {/* Card 1 */}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>
    //   {/* Card 2 */}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       className="w-full h-48 object-cover"
    //       src="https://placekitten.com/640/480"
    //       alt="Card Image"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>
    //   {/* Repeat similar card structures for more cards */}
    // </div>
  );
};

export default App;

//custom hook
//=>build in hook => useState , useEffect , useRef , useContext , useReducer , useLayoutEffect , useId , useTransition , useCallback , useMemo , etc ...
//=>lib provide hook => useParams , useNavigate , useLocation useSearchParams
//=>
