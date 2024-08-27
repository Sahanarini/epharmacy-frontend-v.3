// import { Box, Grid } from "@mui/material";
// import React, { useEffect, useSyncExternalStore } from "react";
// import OrderCard from "./OrderCard";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderHistory } from "../../../Redux/Customers/Order/Action";

// const orderStatus = [
//   { label: "On The Way", value: "onTheWay" },
//   { label: "Delivered", value: "delevered" },
//   { label: "Cancelled", value: "cancelled" },
//   { label: "Returned", vlue: "returned" },
// ];

// const Order = () => {
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const {order}=useSelector(store=>store);

//   useEffect(() => {
//     dispatch(getOrderHistory({ jwt }));
//   }, [jwt]);
//   return (
//     <Box className="px-10">
//       <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
//         <Grid item xs={2.5} className="">
//           <div className="h-auto shadow-lg bg-white border p-5 sticky top-5">
//             <h1 className="font-bold text-lg">Filters</h1>
//             <div className="space-y-4 mt-10">
//               <h1 className="font-semibold">ORDER STATUS</h1>
//               {orderStatus.map((option, optionIdx) => (
//                 <div key={option.value} className="flex items-center">
//                   <input
//                     //   id={`filter-${section.id}-${optionIdx}`}
//                     //   name={`${section.id}[]`}
//                     defaultValue={option.value}
//                     type="checkbox"
//                     defaultChecked={option.checked}
//                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                   />
//                   <label
//                     //   htmlFor={`filter-${section.id}-${optionIdx}`}
//                     className="ml-3 text-sm text-gray-600"
//                   >
//                     {option.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={9}>
//           <Box className="space-y-5 ">
//             {order.orders?.length>0 && order.orders?.map((order )=> {
//               return order?.orderItems?.map((item,index)=> <OrderCard item={item} order={order} />)
//             })}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Order;


import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../Redux/Customers/Order/Action";

const orderStatusOptions = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delivered" },
  { label: "Confirmed", value: "Confirmed" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [filters, setFilters] = useState([]);
  const { order } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt, dispatch]);

  // Filter orders based on selected status
  const filteredOrders = order.orders?.filter(order =>
    filters.length === 0 || filters.includes(order.orderStatus)
  );

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setFilters(prevFilters =>
      checked ? [...prevFilters, value] : prevFilters.filter(f => f !== value)
    );
  };

  return (
    <Box className="px-10">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5} className="">
          {/* <div className="h-auto shadow-lg bg-white border p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filters</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatusOptions.map(option => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-${option.value}`}
                    name="orderStatus"
                    value={option.value}
                    type="checkbox"
                    onChange={handleFilterChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor={`filter-${option.value}`} className="ml-3 text-sm text-gray-600">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div> */}
        </Grid>
        <Grid item xs={9}>
          <Box className="space-y-5 ">
            {filteredOrders?.length > 0 ? (
              filteredOrders.map(order => 
                order?.orderItems?.map(item => (
                  <OrderCard key={item.id} item={item} order={order} />
                ))
              )
            ) : (
              <p>No orders found</p>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;

