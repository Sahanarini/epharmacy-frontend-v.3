// import { Box, Grid, Typography } from "@mui/material";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import AdjustIcon from "@mui/icons-material/Adjust";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";

// const OrderCard = ({ item, order }) => {
//   const navigate = useNavigate();
//   console.log("items ", item,order,order.orderStatus);
//   return (
//     <Box className="p-5 shadow-lg hover:shadow-2xl border ">
//       <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
//         <Grid item xs={6}>
//           <div
//             onClick={() => navigate(`/account/order/${order?.id}`)}
//             className="flex cursor-pointer"
//           >
//             <img
//               className="w-[5rem] h-[5rem] object-cover object-top"
//               src={item?.product.imageUrl}
//               alt=""
//             />
//             <div className="ml-5">
//               <p className="mb-2">{item?.product.title}</p>
//               <p className="opacity-50 text-xs font-semibold space-x-5">
//                 <span>Size: {item?.size}</span>
//               </p>
//             </div>
//           </div>
//         </Grid>

//         <Grid item xs={2}>
//           <p>₹{item?.price}</p>
//         </Grid>
//         <Grid item xs={4}>
//           <p className="space-y-2 font-semibold">
//             {order?.orderStatus === "DELIVERED"? (
//              <>
//              <FiberManualRecordIcon
//                   sx={{ width: "15px", height: "15px" }}
//                   className="text-green-600 p-0 mr-2 text-sm"
//                 />
//                 <span>Delivered On Mar 03</span>

//             </>
//             ):  <>
               
//                 <AdjustIcon
//                 sx={{ width: "15px", height: "15px" }}
//                 className="text-green-600 p-0 mr-2 text-sm"
//               />
//               <span>Expected Delivery On Mar 03</span>
//               </>}
            
//           </p>
//           <p className="text-xs">Your Item Has Been Delivered</p>
//           {item.orderStatus === "DELIVERED" && (
//             <div
//               onClick={() => navigate(`/account/rate/{id}`)}
//               className="flex items-center text-blue-600 cursor-pointer"
//             >
//               <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
//               <span>Rate & Review Product</span>
//             </div>
//           )}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default OrderCard;
import { Box, Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();

  // Define unique messages for each order status
  const getStatusMessage = (status) => {
    switch (status) {
      case "DELIVERED":
        return { 
          icon: <FiberManualRecordIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 p-0 mr-2 text-sm" />,
          message: "Delivered",
          buttonText: null
        };
      case "SHIPPED":
        return {
          icon: <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-blue-600 p-0 mr-2 text-sm" />,
          message: "Shipped",
          buttonText: null
        };
      case "CONFIRMED":
        return {
          icon: <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-yellow-600 p-0 mr-2 text-sm" />,
          message: "Order Accepted",
          buttonText: null
        };
      case "CANCELLED":
        return {
          icon: <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-red-600 p-0 mr-2 text-sm" />,
          message: "Cancelled On Mar 03",
          buttonText: null
        };
      default:
        return {
          icon: <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-gray-600 p-0 mr-2 text-sm" />,
          message: "Status Unknown",
          buttonText: null
        };
    }
  };

  const { icon, message, buttonText } = getStatusMessage(order?.orderStatus);

  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/${order?.id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product.imageUrl}
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">{item?.product.title}</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: {item?.size}</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{item?.price}</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {icon}
            <span>{message}</span>
          </p>
          {buttonText && (
            <div
              onClick={() => navigate(`/account/rate/${order?.id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>{buttonText}</span>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;

