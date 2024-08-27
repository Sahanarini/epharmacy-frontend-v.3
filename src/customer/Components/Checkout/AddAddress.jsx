// import * as React from "react";
// import { Grid, TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { createOrder } from "../../../Redux/Customers/Order/Action";
// import userEvent from "@testing-library/user-event";
// import AddressCard from "../adreess/AdreessCard";
// import { useState } from "react";

// export default function AddDeliveryAddressForm({ handleNext }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { auth } = useSelector((store) => store);
//   const [selectedAddress, setSelectedAdress] = useState(null);

//   // console.log("auth", auth);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console

//     const address = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       streetAddress: data.get("address"),
//       city: data.get("city"),
//       state: data.get("state"),
//       zipCode: data.get("zip"),
//       mobile: data.get("phoneNumber"),
//     };

//     dispatch(createOrder({ address, jwt, navigate }));
//     // after perfoming all the opration
//     handleNext();
//   };

//   const handleCreateOrder = (item) => {
//     dispatch(createOrder({ address:item, jwt, navigate }));
//     handleNext();
//   };

//   return (
//     <Grid container spacing={4}>
//       <Grid item xs={12} lg={5}>
//         <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
//           {auth.user?.addresses.map((item) => (
//             <div
//               onClick={() => setSelectedAdress(item)}
//               className="p-5 py-7 border-b cursor-pointer"
//             >
//               {" "}
//               <AddressCard address={item} />
//               {selectedAddress?.id === item.id && (
//                 <Button
//                   sx={{ mt: 2 }}
//                   size="large"
//                   variant="contained"
//                   color="primary"
//                   onClick={()=>handleCreateOrder(item)}
//                 >
//                   Delivered Here
//                 </Button>
//               )}
//             </div>
//           ))}
//         </Box>
//       </Grid>
//       <Grid item xs={12} lg={7}>
//         <Box className="border rounded-md shadow-md p-5">
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="firstName"
//                   name="firstName"
//                   label="First Name"
//                   fullWidth
//                   autoComplete="given-name"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="lastName"
//                   name="lastName"
//                   label="Last Name"
//                   fullWidth
//                   autoComplete="given-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="address"
//                   name="address"
//                   label="Address"
//                   fullWidth
//                   autoComplete="shipping address"
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="city"
//                   name="city"
//                   label="City"
//                   fullWidth
//                   autoComplete="shipping address-level2"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="state"
//                   name="state"
//                   label="State/Province/Region"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="zip"
//                   name="zip"
//                   label="Zip / Postal code"
//                   fullWidth
//                   autoComplete="shipping postal-code"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   label="Phone Number"
//                   fullWidth
//                   autoComplete="tel"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   sx={{ padding: ".9rem 1.5rem" }}
//                   size="large"
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                 >
//                   Delivered Here
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import { useState } from "react";

export default function AddDeliveryAddressForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const errors = {};
    if (!formState.firstName) errors.firstName = "First Name is required";
    if (!formState.lastName) errors.lastName = "Last Name is required";
    if (!formState.address) errors.address = "Address is required";
    if (!formState.city) errors.city = "City is required";
    if (!formState.state) errors.state = "State is required";
    if (!formState.zip) {
      errors.zip = "Zip Code is required";
    } else if (!/^\d{6}$/.test(formState.zip)) {
      errors.zip = "Zip Code must be a 6-digit number";
    }
    if (!formState.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formState.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be a 10-digit number";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const address = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      streetAddress: formState.address,
      city: formState.city,
      state: formState.state,
      zipCode: formState.zip,
      mobile: formState.phoneNumber,
    };

    dispatch(createOrder({ address, jwt, navigate }));
    handleNext();
  };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address:item, jwt, navigate }));
    handleNext();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          {auth.user?.addresses.map((item) => (
            <div
              onClick={() => setSelectedAdress(item)}
              className="p-5 py-7 border-b cursor-pointer"
              key={item.id}
            >
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  role="button"
                  variant="contained"
                  color="primary"
                  onClick={() => handleCreateOrder(item)}
                >
                  Delivered Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  id="firstName"
                  name="firstName"
                  role="firstname"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                  value={formState.firstName}
                  onChange={handleChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  id="lastName"
                  name="lastName"
                  role="lastname"

                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                  value={formState.lastName}
                  onChange={handleChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 
                  id="address"
                  name="address"
                  role="address"

                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                  value={formState.address}
                  onChange={handleChange}
                  error={Boolean(errors.address)}
                  helperText={errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  id="city"
                  name="city"
                  role="city"

                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  value={formState.city}
                  onChange={handleChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  id="state"
                  name="state"
                  role="state"

                  label="State/Province/Region"
                  fullWidth
                  value={formState.state}
                  onChange={handleChange}
                  error={Boolean(errors.state)}
                  helperText={errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  role="pincode"

                  value={formState.zip}
                  onChange={handleChange}
                  error={Boolean(errors.zip)}
                  helperText={errors.zip}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  id="phoneNumber"
                  role="phonenumber"

                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                  value={formState.phoneNumber}
                  onChange={handleChange}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Delivered Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
