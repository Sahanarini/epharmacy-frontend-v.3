// import React from "react";
// import { productdata } from "../../../data";
// import ProductCard from "../ProductCard/ProductCard";


// const ProductPage = () => {
//   return (
//     <div className="px-10 -z-10">
//       {/* heading part */}
//       <div className="flex justify-between py-5">
//         <p className="font-bold">Filter</p>
//         <p>Sort</p>
//       </div>

//       {/* bottom part */}
//       <div className="flex justify-between ">
//         {/* filter */}
//         <div className="w-[20%] border rounded-md bg-white"></div>
//         {/* product */}

//         <div className="flex  flex-wrap justify-between w-[78%] bg-white border p-5 rounded-md">
//           {productdata.map((item) => (
//             <ProductCard product={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/admin/products/all');
        console.log("API Response:", response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setError("Unexpected response format");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="px-10 -z-10">
      {/* heading part */}
      <div className="flex justify-between py-5">
        <p className="font-bold">Filter</p>
        <p>Sort</p>
      </div>

      {/* bottom part */}
      <div className="flex justify-between">
        {/* filter */}
        <div className="w-[20%] border rounded-md bg-white"></div>
        {/* product */}
        <div className="flex flex-wrap justify-between w-[78%] bg-white border p-5 rounded-md">
          {products.length > 0 ? (
            products.map((item) => (
              <ProductCard key={item.id || item._id} product={item} />
            ))
          ) : (
            <p className="w-full text-center">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
