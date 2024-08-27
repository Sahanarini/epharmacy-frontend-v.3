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
// // import "./CreateProductForm.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   findProductById,
//   updateProduct,
// } from "../../../Redux/Customers/Product/Action";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const initialSizes = [
//   { name: "S", quantity: 0 },
//   { name: "M", quantity: 0 },
//   { name: "L", quantity: 0 },
// ];

// const UpdateProductForm = () => {
//   const [productData, setProductData] = useState({
//     imageUrl: "",
//     brand: "",
//     title: "",
//     color: "",
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
//   const { productId } = useParams();
//   const { customersProduct } = useSelector((store) => store);

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
//     dispatch(updateProduct());
//     console.log(productData);
//   };

//   useEffect(() => {
//     dispatch(findProductById({productId}));
//   }, [productId]);

//   useEffect(()=>{
//     if(customersProduct.product){
//         for(let key in productData){
//     setProductData((prev)=>({...prev,[key]:customersProduct.product[key]}))
//     console.log(customersProduct.product[key],"--------",key)
// }
//     }

//   },[customersProduct.product])

//   return (
//     <Fragment className="createProductContainer ">
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center" }}
//         className="py-10 text-center "
//       >
//         Add New Product
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
//               label="Color"
//               name="color"
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
//                 <MenuItem value="Men">Men</MenuItem>
//                 <MenuItem value="Women">Women</MenuItem>
//                 <MenuItem value="Kids">Kids</MenuItem>
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
//                 <MenuItem value="Clothing">Clothing</MenuItem>
//                 <MenuItem value="Accessories">Accessories</MenuItem>
//                 <MenuItem value="Brands">Brands</MenuItem>
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
//                 <MenuItem value="Tops">Tops</MenuItem>
//                 <MenuItem value="Dresses">Dresses</MenuItem>
//                 <MenuItem value="T-Shirts">T-Shirts</MenuItem>
//                 <MenuItem value="Saree">Saree</MenuItem>
//                 <MenuItem value="Saree">Saree</MenuItem>
//                 <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
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
//           {/* {productData.size.map((size, index) => (
//             <Grid container item spacing={3}>
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
//               </Grid>{" "}
//             </Grid>
//           ))} */}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               sx={{ p: 1.8 }}
//               className="py-20"
//               size="large"
//               type="submit"
//             >
//               Update Product
//             </Button>
//             {/* <Button
//               variant="contained"
//               sx={{ p: 1.8 }}
//               className="py-20 ml-10"
//               size="large"
//               onClick={()=>handleAddProducts(dressPage1)}
//             >
//               Add Products By Loop
//             </Button> */}
//           </Grid>
//         </Grid>
//       </form>
//     </Fragment>
//   );
// };

// export default UpdateProductForm;




// import { useState, useEffect, Fragment } from "react";
// import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { findProductById, updateProduct } from "../../../Redux/Customers/Product/Action";
// import { useParams, useNavigate } from "react-router-dom";

// const initialSizes = [
//   { name: "500mg", quantity: 0 },
//   { name: "650mg", quantity: 0 },
//   { name: "1000mg", quantity: 0 },
// ];



// const UpdateProductForm = () => {
//   const [productData, setProductData] = useState({
//     imageUrl: "",
//     brand: "",
//     title: "",
//     color: "",
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

//   const { productId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const { customersProduct } = useSelector((store) => store);

//   useEffect(() => {
//     // Fetch product details by ID
//     dispatch(findProductById({ productId }));
//   }, [dispatch, productId]);

//   useEffect(() => {
//     // Update form state with fetched product details
//     if (customersProduct.product) {
//       const product = customersProduct.product;
//       setProductData({
//         imageUrl: product.imageUrl || "",
//         brand: product.brand || "",
//         title: product.title || "",
//         color: product.color || "",
//         discountedPrice: product.discountedPrice || "",
//         price: product.price || "",
//         discountPersent: product.discountPersent || "",
//         size: product.size || initialSizes,
//         quantity: product.quantity || "",
//         topLavelCategory: product.topLavelCategory || "",
//         secondLavelCategory: product.secondLavelCategory || "",
//         thirdLavelCategory: product.thirdLavelCategory || "",
//         description: product.description || "",
//       });
//     }
//   }, [customersProduct.product]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSizeChange = (e, index) => {
//     const { name, value } = e.target;
//     const sizes = [...productData.size];
//     sizes[index][name] = value;
//     setProductData((prevState) => ({
//       ...prevState,
//       size: sizes,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateProduct({ productId, data: productData, jwt }));
//     navigate("/products"); // Redirect after successful update
//   };

//   return (
//     <Fragment>
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center" }}
//         className="py-10 text-center"
//       >
//         Update Product
//       </Typography>
//       <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
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
//           {/* <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Color"
//               name="dosage"
//               value={productData.color}
//               onChange={handleChange}
//             />
//           </Grid> */}
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
//           {/* <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Top Level Category</InputLabel>
//               <Select
//                 name="topLavelCategory"
//                 value={productData.topLavelCategory}
//                 onChange={handleChange}
//                 label="Top Level Category"
//               >
//                 <MenuItem value="Men">Men</MenuItem>
//                 <MenuItem value="Women">Women</MenuItem>
//                 <MenuItem value="Kids">Kids</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid> */}
//           {/* <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Second Level Category</InputLabel>
//               <Select
//                 name="secondLavelCategory"
//                 value={productData.secondLavelCategory}
//                 onChange={handleChange}
//                 label="Second Level Category"
//               >
//                 <MenuItem value="Clothing">Clothing</MenuItem>
//                 <MenuItem value="Accessories">Accessories</MenuItem>
//                 <MenuItem value="Brands">Brands</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid> */}
//           {/* <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Third Level Category</InputLabel>
//               <Select
//                 name="thirdLavelCategory"
//                 value={productData.thirdLavelCategory}
//                 onChange={handleChange}
//                 label="Third Level Category">
//                 <MenuItem value="Tops">Tops</MenuItem>
//                 <MenuItem value="Dresses">Dresses</MenuItem>
//                 <MenuItem value="T-Shirts">T-Shirts</MenuItem>
//                 <MenuItem value="Saree">Saree</MenuItem>
//                 <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid> */}
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
//                   onChange={(e) => handleSizeChange(e, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Quantity"
//                   name="quantity"
//                   type="number"
//                   value={size.quantity}
//                   onChange={(e) => handleSizeChange(e, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               sx={{ p: 1.8 }}
//               size="large"
//               type="submit"
//               onClick={(e) => handleSubmit(e)}
//             >
//               Update Product
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Fragment>
//   );
// };

// export default UpdateProductForm;




// import { useState, useEffect, Fragment } from "react";
// import {
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { findProductById, updateProduct } from "../../../Redux/Customers/Product/Action";
// import { useParams, useNavigate } from "react-router-dom";

// const initialSizes = [
//   { name: "500mg", quantity: 0 },
//   { name: "650mg", quantity: 0 },
//   { name: "1000mg", quantity: 0 },
// ];

// const UpdateProductForm = () => {
//   const [productData, setProductData] = useState({
//     imageUrl: "",
//     brand: "",
//     title: "",
//     color: "",
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

//   const { productId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const { customersProduct } = useSelector((store) => store);

//   useEffect(() => {
//     // Fetch product details by ID
//     dispatch(findProductById({ productId }));
//   }, [dispatch, productId]);

//   useEffect(() => {
//     // Update form state with fetched product details
//     if (customersProduct.product) {
//       const product = customersProduct.product;
//       setProductData({
//         imageUrl: product.imageUrl || "",
//         brand: product.brand || "",
//         title: product.title || "",
//         color: product.color || "",
//         discountedPrice: product.discountedPrice || "",
//         price: product.price || "",
//         discountPersent: product.discountPersent || "",
//         size: product.size || initialSizes,
//         quantity: product.quantity || "",
//         topLavelCategory: product.topLavelCategory || "",
//         secondLavelCategory: product.secondLavelCategory || "",
//         thirdLavelCategory: product.thirdLavelCategory || "",
//         description: product.description || "",
//       });
//     }
//   }, [customersProduct.product]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSizeChange = (e, index) => {
//     const { name, value } = e.target;
//     const sizes = [...productData.size];
//     sizes[index][name] = value;
//     setProductData((prevState) => ({
//       ...prevState,
//       size: sizes,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateProduct({ productId, data: productData, jwt }));
//     navigate("/products"); // Redirect after successful update
//   };

//   return (
//     <Fragment>
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center" }}
//         className="py-10 text-center"
//       >
//         Update Product
//       </Typography>
//       <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
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
//           {/* Uncomment and adjust if needed */}
//           {/* <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Color"
//               name="color"
//               value={productData.color}
//               onChange={handleChange}
//             />
//           </Grid> */}
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
//           {/* Uncomment and adjust if needed */}
//           {/* <Grid item xs={6} sm={4}>
//             <FormControl fullWidth>
//               <InputLabel>Top Level Category</InputLabel>
//               <Select
//                 name="topLavelCategory"
//                 value={productData.topLavelCategory}
//                 onChange={handleChange}
//                 label="Top Level Category"
//               >
//                 <MenuItem value="Men">Men</MenuItem>
//                 <MenuItem value="Women">Women</MenuItem>
//                 <MenuItem value="Kids">Kids</MenuItem>
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
//                 <MenuItem value="Clothing">Clothing</MenuItem>
//                 <MenuItem value="Accessories">Accessories</MenuItem>
//                 <MenuItem value="Brands">Brands</MenuItem>
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
//                 label="Third Level Category">
//                 <MenuItem value="Tops">Tops</MenuItem>
//                 <MenuItem value="Dresses">Dresses</MenuItem>
//                 <MenuItem value="T-Shirts">T-Shirts</MenuItem>
//                 <MenuItem value="Saree">Saree</MenuItem>
//                 <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid> */}
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
//                   onChange={(e) => handleSizeChange(e, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Quantity"
//                   name="quantity"
//                   type="number"
//                   value={size.quantity}
//                   onChange={(e) => handleSizeChange(e, index)}
//                   required
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               sx={{ p: 1.8 }}
//               size="large"
//               type="submit" // Form submission is handled by the form's onSubmit
//             >
//               Update Product
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Fragment>
//   );
// };

// export default UpdateProductForm;



import { useState, useEffect, Fragment } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { findProductById, updateProduct } from "../../../Redux/Customers/Product/Action";
import { useParams, useNavigate } from "react-router-dom";

const initialSizes = [
  { name: "500mg", quantity: 0 },
  { name: "650mg", quantity: 0 },
  { name: "1000mg", quantity: 0 },
];

const UpdateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { customersProduct } = useSelector((store) => store);

  useEffect(() => {
    // Fetch product details by ID
    dispatch(findProductById({ productId }));
  }, [dispatch, productId]);

  useEffect(() => {
    // Update form state with fetched product details
    if (customersProduct.product) {
      const product = customersProduct.product;
      setProductData({
        imageUrl: product.imageUrl || "",
        brand: product.brand || "",
        title: product.title || "",
        color: product.color || "",
        discountedPrice: product.discountedPrice || "",
        price: product.price || "",
        discountPersent: product.discountPersent || "",
        size: product.size || initialSizes,
        quantity: product.quantity || "",
        topLavelCategory: product.topLavelCategory || "",
        secondLavelCategory: product.secondLavelCategory || "",
        thirdLavelCategory: product.thirdLavelCategory || "",
        description: product.description || "",
      });
    }
  }, [customersProduct.product]);

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
    const { name, value } = e.target;
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
      await dispatch(updateProduct({ productId, data: productData, jwt }));
      setSnackbarMessage("Product updated successfully!");
      setSnackbarSeverity("success");
      navigate("/products"); // Redirect after successful update
    } catch (error) {
      setSnackbarMessage("Failed to update product. Please try again.");
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
        Update Product
      </Typography>
      <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* Uncomment and adjust if needed */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
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
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          {/* Uncomment and adjust if needed */}
          {/* <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category">
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="Dresses">Dresses</MenuItem>
                <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                <MenuItem value="Saree">Saree</MenuItem>
                <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
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
                  onChange={(e) => handleSizeChange(e, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="quantity"
                  type="number"
                  value={size.quantity}
                  onChange={(e) => handleSizeChange(e, index)}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              size="large"
              type="submit" // Form submission is handled by the form's onSubmit
            >
              Update Product
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

export default UpdateProductForm;
