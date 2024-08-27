// import { useState } from "react";
// import { Typography } from "@mui/material";
// import {
//   Grid,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";

// import { Fragment } from "react";
// import "./CreateProductForm.css";
// import { useDispatch } from "react-redux";
// import { createProduct } from "../../../Redux/Customers/Product/Action";

// const initialSizes = [
//   { name: "500mg", quantity: 0 },
//   { name: "650mg", quantity: 0 },
//   { name: "1000mg", quantity: 0 },
// ];

// const CreateProductForm = () => {
//   const [productData, setProductData] = useState({
//     imageUrl: "",
//     brand: "",
//     title: "",
//     color: "", // Retained the variable name as 'color'
//     discountedPrice: "",
//     price: "",
//     discountPersent: "",
//     size: initialSizes,
//     quantity: "",
//     topLavelCategory: "",
//     secondLavelCategory: "",
//     thirdLavelCategory: "",
//     description: "",
//   });

//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSizeChange = (e, index) => {
//     let { name, value } = e.target;
//     name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

//     const sizes = [...productData.size];
//     sizes[index][name] = value;
//     setProductData((prevState) => ({
//       ...prevState,
//       size: sizes,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createProduct({ data: productData, jwt }));
//     console.log(productData);
//   };

//   return (
//     <Fragment className="createProductContainer">
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center" }}
//         className="py-10 text-center"
//       >
//         Add New Pharmaceutical Product
//       </Typography>
//       <form
//         onSubmit={handleSubmit}
//         className="createProductContainer min-h-screen"
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Image URL"
//               name="imageUrl"
//               value={productData.imageUrl}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Brand"
//               name="brand"
//               value={productData.brand}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Title"
//               name="title"
//               value={productData.title}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Dosage" // Changed label here
//               name="color" // Variable name remains 'color'
//               value={productData.color}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Quantity"
//               name="quantity"
//               value={productData.quantity}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Price"
//               name="price"
//               value={productData.price}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Discounted Price"
//               name="discountedPrice"
//               value={productData.discountedPrice}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Discount Percentage"
//               name="discountPersent"
//               value={productData.discountPersent}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Top Level Category</InputLabel>
//               <Select
//                 name="topLavelCategory"
//                 value={productData.topLavelCategory}
//                 onChange={handleChange}
//                 label="Top Level Category"
//               >
//                 <MenuItem value="medicines">Medicines</MenuItem>
//                 <MenuItem value="supplements">Supplements</MenuItem>
//                 <MenuItem value="personal_care">Personal Care</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Second Level Category</InputLabel>
//               <Select
//                 name="secondLavelCategory"
//                 value={productData.secondLavelCategory}
//                 onChange={handleChange}
//                 label="Second Level Category"
//               >
//                 <MenuItem value="prescription">Prescription</MenuItem>
//                 <MenuItem value="over_the_counter">Over-the-Counter</MenuItem>
//                 <MenuItem value="vitamins">Vitamins</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Third Level Category</InputLabel>
//               <Select
//                 name="thirdLavelCategory"
//                 value={productData.thirdLavelCategory}
//                 onChange={handleChange}
//                 label="Third Level Category"
//               >
//                 <MenuItem value="antibiotics">Antibiotics</MenuItem>
//                 <MenuItem value="pain_relief">Pain Relief</MenuItem>
//                 <MenuItem value="cough_cold">Cough & Cold</MenuItem>
//                 <MenuItem value="digestive_aids">Digestive Aids</MenuItem>
//                 <MenuItem value="skin_care">Skin Care</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="outlined-multiline-static"
//               label="Description"
//               multiline
//               name="description"
//               rows={3}
//               onChange={handleChange}
//               value={productData.description}
//             />
//           </Grid>
//           {productData.size.map((size, index) => (
//             <Grid container item spacing={3} key={index}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Size Name"
//                   name="name"
//                   value={size.name}
//                   onChange={(event) => handleSizeChange(event, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Quantity"
//                   name="size_quantity"
//                   type="number"
//                   onChange={(event) => handleSizeChange(event, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               sx={{ p: 0.7 }}
//               color="primary"
//               size="large"
//               type="submit"
//             >
//               Add New Product
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Fragment>
//   );
// };

// export default CreateProductForm;




// import { useState } from "react";
// import { Typography } from "@mui/material";
// import {
//   Grid,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { Fragment } from "react";
// import "./CreateProductForm.css";
// import { useDispatch } from "react-redux";
// import { createProduct } from "../../../Redux/Customers/Product/Action";

// const initialSizes = [
//   { name: "500mg", quantity: 0 },
//   { name: "650mg", quantity: 0 },
//   { name: "1000mg", quantity: 0 },
// ];

// const CreateProductForm = () => {
//   const [productData, setProductData] = useState({
//     imageUrl: "",
//     brand: "",
//     title: "",
//     color: "", // Retained the variable name as 'color'
//     discountedPrice: "",
//     price: "",
//     discountPersent: "",
//     size: initialSizes,
//     quantity: "",
//     topLavelCategory: "",
//     secondLavelCategory: "",
//     thirdLavelCategory: "",
//     description: "",
//   });

//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'

//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSizeChange = (e, index) => {
//     let { name, value } = e.target;
//     name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

//     const sizes = [...productData.size];
//     sizes[index][name] = value;
//     setProductData((prevState) => ({
//       ...prevState,
//       size: sizes,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(createProduct({ data: productData, jwt }));
//       setSnackbarMessage("Product added successfully!");
//       setSnackbarSeverity("success");
//     } catch (error) {
//       setSnackbarMessage("Failed to add product. Please try again.");
//       setSnackbarSeverity("error");
//     }
//     setSnackbarOpen(true);
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Fragment>
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center" }}
//         className="py-10 text-center"
//       >
//         Add New Pharmaceutical Product
//       </Typography>
//       <form
//         onSubmit={handleSubmit}
//         className="createProductContainer min-h-screen"
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Image URL"
//               role="imageurl"
//               name="imageUrl"
//               value={productData.imageUrl}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Brand"
//               role="brand"

//               name="brand"
//               value={productData.brand}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Title"
//               role="title"

//               name="title"
//               value={productData.title}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               role="dosage"

//               label="Dosage" // Changed label here
//               name="color" // Variable name remains 'color'
//               value={productData.color}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Quantity"
//               role="quantity"

//               name="quantity"
//               value={productData.quantity}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Price"
//               role="price"

//               name="price"
//               value={productData.price}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Discounted Price"
//               role="discountprice"

//               name="discountedPrice"
//               value={productData.discountedPrice}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Discount Percentage"
//               role="discountpercentage"

//               name="discountPersent"
//               value={productData.discountPersent}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Top Level Category</InputLabel>
//               <Select
//                 name="topLavelCategory"
//                 value={productData.topLavelCategory}
//                 onChange={handleChange}
//                 label="Top Level Category"
//               >
//                 <MenuItem value="medicines">Medicines</MenuItem>
//                 <MenuItem value="supplements">Supplements</MenuItem>
//                 <MenuItem value="personal_care">Personal Care</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Second Level Category</InputLabel>
//               <Select
//                 name="secondLavelCategory"
//                 value={productData.secondLavelCategory}
//                 onChange={handleChange}
//                 label="Second Level Category"
//               >
//                 <MenuItem value="prescription">Prescription</MenuItem>
//                 <MenuItem value="over_the_counter">Over-the-Counter</MenuItem>
//                 <MenuItem value="vitamins">Vitamins</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Third Level Category</InputLabel>
//               <Select
//                 name="thirdLavelCategory"
//                 value={productData.thirdLavelCategory}
//                 onChange={handleChange}
//                 label="Third Level Category"
//               >
//                 <MenuItem value="antibiotics">Antibiotics</MenuItem>
//                 <MenuItem value="pain_relief">Pain Relief</MenuItem>
//                 <MenuItem value="cough_cold">Cough & Cold</MenuItem>
//                 <MenuItem value="digestive_aids">Digestive Aids</MenuItem>
//                 <MenuItem value="skin_care">Skin Care</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="outlined-multiline-static"
//               label="Description"
//               multiline
//               name="description"
//               rows={3}
//               onChange={handleChange}
//               value={productData.description}
//             />
//           </Grid>
//           {productData.size.map((size, index) => (
//             <Grid container item spacing={3} key={index}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Size Name"
//                   name="name"
//                   value={size.name}
//                   onChange={(event) => handleSizeChange(event, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Quantity"
//                   name="size_quantity"
//                   type="number"
//                   onChange={(event) => handleSizeChange(event, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               sx={{ p: 0.7 }}
//               color="primary"
//               size="large"
//               type="submit"
//             >
//               Add New Product
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbarSeverity}
//           sx={{ width: '100%' }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Fragment>
//   );
// };

// export default CreateProductForm;


//correct form



// import { useState } from "react";
// import { Typography } from "@mui/material";
// import {
//   Grid,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { Fragment } from "react";
// import "./CreateProductForm.css";
// import { useDispatch } from "react-redux";
// import { createProduct } from "../../../Redux/Customers/Product/Action";

// const initialSizes = [
//   { name: "500mg", quantity: 0 },
//   { name: "650mg", quantity: 0 },
//   { name: "1000mg", quantity: 0 },
// ];

// const defaultCategories = {
//   topLavelCategory: "medicines",
//   secondLavelCategory: "prescription",
//   thirdLavelCategory: "antibiotics",
// };

// const CreateProductForm = () => {
//   const [productData, setProductData] = useState({
//     imageUrl: "",
//     brand: "",
//     title: "",
//     color: defaultCategories.topLavelCategory, // Default value
//     discountedPrice: "",
//     price: "",
//     discountPersent: "",
//     size: initialSizes,
//     quantity: "",
//     topLavelCategory: defaultCategories.topLavelCategory, // Default value
//     secondLavelCategory: defaultCategories.secondLavelCategory, // Default value
//     thirdLavelCategory: defaultCategories.thirdLavelCategory, // Default value
//     description: "",
//   });

//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'

//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSizeChange = (e, index) => {
//     let { name, value } = e.target;
//     name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

//     const sizes = [...productData.size];
//     sizes[index][name] = value;
//     setProductData((prevState) => ({
//       ...prevState,
//       size: sizes,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(createProduct({ data: productData, jwt }));
//       setSnackbarMessage("Product added successfully!");
//       setSnackbarSeverity("success");
//     } catch (error) {
//       setSnackbarMessage("Failed to add product. Please try again.");
//       setSnackbarSeverity("error");
//     }
//     setSnackbarOpen(true);
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Fragment>
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center" }}
//         className="py-10 text-center"
//       >
//         Add New Medicine
//       </Typography>
//       <form
//         onSubmit={handleSubmit}
//         className="createProductContainer min-h-screen"
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Image URL"
//               role="imageurl"
//               name="imageUrl"
//               value={productData.imageUrl}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Brand"
//               role="brand"
//               name="brand"
//               value={productData.brand}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Title"
//               role="title"
//               name="title"
//               value={productData.title}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} hidden> {/* Hidden field */}
//             <TextField
//               fullWidth
//               role="dosage"
//               label="Dosage" // Changed label here
//               name="color" // Variable name remains 'color'
//               value={productData.color}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Quantity"
//               role="quantity"
//               name="quantity"
//               value={productData.quantity}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Price"
//               role="price"
//               name="price"
//               value={productData.price}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Discounted Price"
//               role="discountprice"
//               name="discountedPrice"
//               value={productData.discountedPrice}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Discount Percentage"
//               role="discountpercentage"
//               name="discountPersent"
//               value={productData.discountPersent}
//               onChange={handleChange}
//               type="number"
//             />
//           </Grid>
//           <Grid item xs={6} sm={4} hidden> {/* Hidden field */}
//             <FormControl fullWidth>
//               <InputLabel>Top Level Category</InputLabel>
//               <Select
//                 name="topLavelCategory"
//                 value={productData.topLavelCategory}
//                 onChange={handleChange}
//                 label="Top Level Category"
//               >
//                 <MenuItem value="medicines">Medicines</MenuItem>
//                 <MenuItem value="supplements">Supplements</MenuItem>
//                 <MenuItem value="personal_care">Personal Care</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6} sm={4} hidden> {/* Hidden field */}
//             <FormControl fullWidth>
//               <InputLabel>Second Level Category</InputLabel>
//               <Select
//                 name="secondLavelCategory"
//                 value={productData.secondLavelCategory}
//                 onChange={handleChange}
//                 label="Second Level Category"
//               >
//                 <MenuItem value="prescription">Prescription</MenuItem>
//                 <MenuItem value="over_the_counter">Over-the-Counter</MenuItem>
//                 <MenuItem value="vitamins">Vitamins</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={6} sm={4} hidden> {/* Hidden field */}
//             <FormControl fullWidth>
//               <InputLabel>Third Level Category</InputLabel>
//               <Select
//                 name="thirdLavelCategory"
//                 value={productData.thirdLavelCategory}
//                 onChange={handleChange}
//                 label="Third Level Category"
//               >
//                 <MenuItem value="antibiotics">Antibiotics</MenuItem>
//                 <MenuItem value="pain_relief">Pain Relief</MenuItem>
//                 <MenuItem value="cough_cold">Cough & Cold</MenuItem>
//                 <MenuItem value="digestive_aids">Digestive Aids</MenuItem>
//                 <MenuItem value="skin_care">Skin Care</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="outlined-multiline-static"
//               label="Description"
//               multiline
//               name="description"
//               rows={3}
//               onChange={handleChange}
//               value={productData.description}
//             />
//           </Grid>
//           {productData.size.map((size, index) => (
//             <Grid container item spacing={3} key={index}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label=""
//                   name="name"
//                   value={size.name}
//                   onChange={(event) => handleSizeChange(event, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Quantity"
//                   name="size_quantity"
//                   type="number"
//                   onChange={(event) => handleSizeChange(event, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               sx={{ p: 0.7 }}
//               color="primary"
//               size="large"
//               type="submit"
//             >
//               Add New Product
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbarSeverity}
//           sx={{ width: '100%' }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Fragment>
//   );
// };

// export default CreateProductForm;

import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";

const initialSizes = [
  { name: "500mg", quantity: 0 },
  { name: "650mg", quantity: 0 },
  { name: "1000mg", quantity: 0 },
];

const defaultCategories = {
  topLavelCategory: "medicines",
  secondLavelCategory: "prescription",
  thirdLavelCategory: "antibiotics",
};

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: defaultCategories.topLavelCategory,
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: defaultCategories.topLavelCategory,
    secondLavelCategory: defaultCategories.secondLavelCategory,
    thirdLavelCategory: defaultCategories.thirdLavelCategory,
    description: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "discountPersent") {
      const discountPercent = parseInt(value, 10); // Parse as integer
      const price = parseInt(productData.price, 10); // Parse as integer
      const discountedPrice = price - (price * discountPercent) / 100;
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
        discountedPrice: Math.round(discountedPrice), // Round off to whole number
      }));
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name = name === "size_quantity" ? "quantity" : name;

    const sizes = [...productData.size];
    sizes[index][name] = value;

    // Update total quantity
    const totalSizeQuantity = sizes.reduce((total, size) => total + parseInt(size.quantity || 0, 10), 0);

    if (totalSizeQuantity > parseInt(productData.quantity || 0, 10)) {
      setSnackbarMessage("Total size quantity cannot exceed the initial quantity.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }

    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the size quantities before submitting
    const totalSizeQuantity = productData.size.reduce((total, size) => total + parseInt(size.quantity || 0, 10), 0);

    if (totalSizeQuantity > parseInt(productData.quantity || 0, 10)) {
      setSnackbarMessage("Total size quantity cannot exceed the initial quantity.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    try {
      await dispatch(createProduct({ data: productData, jwt }));
      setSnackbarMessage("Product added successfully!");
      setSnackbarSeverity("success");
    } catch (error) {
      setSnackbarMessage("Failed to add product. Please try again.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Fragment>
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center"
      >
        Add New Medicine
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              role="imageurl"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              role="brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Category"
              role="title"
              name="category"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} hidden>
            <TextField
              fullWidth
              role="dosage"
              label="Dosage"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Initial Quantity"
              role="quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              role="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              role="discountprice"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              role="discountpercentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4} hidden>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="medicines">Medicines</MenuItem>
                <MenuItem value="supplements">Supplements</MenuItem>
                <MenuItem value="personal_care">Personal Care</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4} hidden>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="prescription">Prescription</MenuItem>
                <MenuItem value="over_the_counter">Over-the-Counter</MenuItem>
                <MenuItem value="vitamins">Vitamins</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4} hidden>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="antibiotics">Antibiotics</MenuItem>
                <MenuItem value="pain_relief">Pain Relief</MenuItem>
                <MenuItem value="cough_cold">Cough & Cold</MenuItem>
                <MenuItem value="digestive_aids">Digestive Aids</MenuItem>
                <MenuItem value="skin_care">Skin Care</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  value={size.quantity}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 0.7 }}
              color="primary"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default CreateProductForm;


