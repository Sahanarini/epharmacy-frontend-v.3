




// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Pagination,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";

// import React from "react";
// // import { dressPage1 } from "../../../Data/dress/page1";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteProduct,
//   updateProduct,
//   findProducts,
// } from "../../../Redux/Customers/Product/Action";

// const ProductsTable = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { customersProduct } = useSelector((store) => store);
//   const [filterValue, setFilterValue] = useState({
//     availability: "",
//     category: "",
//     sort: "",
//   });

//   // query
//   const searchParams = new URLSearchParams(location.search);
//   const availability = searchParams.get("availability");
//   const category = searchParams.get("category");
//   const sort = searchParams.get("sort");
//   const page = searchParams.get("page");

//   const handlePaginationChange = (event, value) => {
//     searchParams.set("page", value - 1);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   useEffect(() => {
//     // setFilterValue({ availability, category, sort });
//     const data = {
//       category: category || "",
//       colors: [],
//       sizes: [],
//       minPrice: 0,
//       maxPrice: 100000,
//       minDiscount: 0,
//       sort: sort || "price_low",
//       pageNumber: page || 0,
//       pageSize: 10,
//       stock: availability,
//     };
//     dispatch(findProducts(data));
//   }, [availability, category, sort, page, customersProduct.deleteProduct]);

//   const handleFilterChange = (e, sectionId) => {
//     console.log(e.target.value, sectionId);
//     setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
//     searchParams.set(sectionId, e.target.value);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   const handleDeleteProduct = (productId) => {
//     console.log("delete product ", productId);
//     dispatch(deleteProduct(productId));
//   };
 

//   return (
//     <Box width={"100%"}>
//       {/* <Card className="p-3">
//         <CardHeader
//           title="Sort"
//           sx={{
//             pt: 0,
//             alignItems: "center",
//             "& .MuiCardHeader-action": { mt: 0.6 },
//           }}
//         />
//         <Grid container spacing={2}>
//           <Grid item xs={4}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">Category</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={filterValue.category}
//                 label="Category"
//                 onChange={(e) => handleFilterChange(e, "category")}
//               >
//                 <MenuItem value={"pant"}>Men's Pants</MenuItem>
//                 <MenuItem value={"mens_kurta"}>Men's Kurta</MenuItem>
//                 <MenuItem value={"saree"}>Saree</MenuItem>
//                 <MenuItem value={"lengha_choli"}>Lengha Choli</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={4}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">
//                 Availability
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={filterValue.availability}
//                 label="Availability"
//                 onChange={(e) => handleFilterChange(e, "availability")}
//               >
//                 <MenuItem value={"All"}>All</MenuItem>
//                 <MenuItem value={"in_stock"}>Instock</MenuItem>
//                 <MenuItem value={"out_of_stock"}>Out Of Stock</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={4}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">
//                 Sort By Price
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={filterValue.sort}
//                 label="Sort By Price"
//                 onChange={(e) => handleFilterChange(e, "sort")}
//               >
//                 <MenuItem value={"price_high"}>Heigh - Low</MenuItem>
//                 <MenuItem value={"price_low"}>Low - Heigh</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//       </Card> */}

//       <Card className="mt-2">
//         <CardHeader
//           title="All Products"
//           sx={{
//             pt: 2,
//             alignItems: "center",
//             "& .MuiCardHeader-action": { mt: 0.6 },
//           }}
//         />
//         <TableContainer>
//           <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell>Title</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {customersProduct?.products?.content?.map((item) => (
//                 <TableRow
//                   hover
//                   key={item.name}
//                   sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
//                 >
//                   <TableCell>
//                     {" "}
//                     <Avatar alt={item.titel} src={item.imageUrl} />{" "}
//                   </TableCell>

//                   <TableCell
//                     sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
//                   >
//                     <Box sx={{ display: "flex", flexDirection: "column" }}>
//                       <Typography
//                         sx={{
//                           fontWeight: 500,
//                           fontSize: "0.875rem !important",
//                         }}
//                       >
//                         {item.title}
//                       </Typography>
//                       <Typography variant="caption">{item.brand}</Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     {item.category.name}
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     {item.discountedPrice}
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     {item.quantity}
//                   </TableCell>


//                   <TableCell sx={{ textAlign: "center" }}>
//                     <Button
//                       variant="text"
//                       onClick={() => handleDeleteProduct(item.id)}
//                     >
//                       Update
//                     </Button>
//                   </TableCell>



//                   <TableCell sx={{ textAlign: "center" }}>
//                     <Button
//                       variant="text"
//                       onClick={() => handleDeleteProduct(item.id)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
//       <Card className="mt-2 border">
//         <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
//           <Pagination
//             count={customersProduct.products?.totalPages}
//             color="primary"
//             className=""
//             onChange={handlePaginationChange}
//             // value={page}
//           />
//         </div>
//       </Card>
//     </Box>
//   );
// };

// export default ProductsTable;


// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   Pagination,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle
// } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteProduct,
//   updateProduct,
//   findProducts,
// } from "../../../Redux/Customers/Product/Action";

// const ProductsTable = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { products, deleteProduct } = useSelector((store) => store.customersProduct);
//   const [filterValue, setFilterValue] = useState({
//     availability: "",
//     category: "",
//     sort: "",
//   });

//   const [editProduct, setEditProduct] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     price: '',
//     quantity: '',
//   });

//   const searchParams = new URLSearchParams(location.search);
//   const availability = searchParams.get("availability");
//   const category = searchParams.get("category");
//   const sort = searchParams.get("sort");
//   const page = searchParams.get("page");

//   const handlePaginationChange = (event, value) => {
//     searchParams.set("page", value - 1);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   useEffect(() => {
//     const data = {
//       category: category || "",
//       colors: [],
//       sizes: [],
//       minPrice: 0,
//       maxPrice: 100000,
//       minDiscount: 0,
//       sort: sort || "price_low",
//       pageNumber: page || 0,
//       pageSize: 10,
//       stock: availability,
//     };
//     dispatch(findProducts(data));
//   }, [availability, category, sort, page, deleteProduct]);

//   const handleFilterChange = (e, sectionId) => {
//     setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
//     searchParams.set(sectionId, e.target.value);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   const handleDeleteProduct = (productId) => {
//     dispatch(deleteProduct(productId));
//   };

//   const handleEditClick = (product) => {
//     setEditProduct(product);
//     setFormData({
//       title: product.title,
//       price: product.discountedPrice,
//       quantity: product.quantity,
//     });
//     setOpen(true);
//   };

//   const handleUpdateProduct = (e) => {
//     e.preventDefault();
//     const updatedProduct = {
//       ...editProduct,
//       title: formData.title,
//       discountedPrice: formData.price,
//       quantity: formData.quantity,
//     };
//     dispatch(updateProduct(updatedProduct)).then(() => {
//       dispatch(findProducts({ /* Add any necessary params here */ }));
//     });
//     setOpen(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <Box width={"100%"}>
//       <Card className="mt-2">
//         <CardHeader
//           title="All Products"
//           sx={{ pt: 2, alignItems: "center", "& .MuiCardHeader-action": { mt: 0.6 } }}
//         />
//         <TableContainer>
//           <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell>Title</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.content?.map((item) => (
//                 <TableRow
//                   hover
//                   key={item.id}
//                   sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
//                 >
//                   <TableCell>
//                     <Avatar alt={item.title} src={item.imageUrl} />
//                   </TableCell>
//                   <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
//                     <Box sx={{ display: "flex", flexDirection: "column" }}>
//                       <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
//                         {item.title}
//                       </Typography>
//                       <Typography variant="caption">{item.brand}</Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>{item.category.name}</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>{item.discountedPrice}</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>{item.quantity}</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     <Button variant="text" onClick={() => handleEditClick(item)}>Update</Button>
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     <Button variant="text" onClick={() => handleDeleteProduct(item.id)}>Delete</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>

//       <Card className="mt-2 border">
//         <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
//           <Pagination
//             count={products.totalPages}
//             color="primary"
//             onChange={handlePaginationChange}
//           />
//         </div>
//       </Card>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Edit Product</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleUpdateProduct}>
//             <TextField
//               autoFocus
//               margin="dense"
//               name="title"
//               label="Title"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={formData.title}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="dense"
//               name="price"
//               label="Price"
//               type="number"
//               fullWidth
//               variant="standard"
//               value={formData.price}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="dense"
//               name="quantity"
//               label="Quantity"
//               type="number"
//               fullWidth
//               variant="standard"
//               value={formData.quantity}
//               onChange={handleChange}
//             />
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//               <Button type="submit">Update</Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default ProductsTable;






// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Pagination,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteProduct,
//   findProducts,
// } from "../../../Redux/Customers/Product/Action";

// const ProductsTable = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { customersProduct } = useSelector((store) => store);
//   const [filterValue, setFilterValue] = useState({
//     availability: "",
//     category: "",
//     sort: "",
//   });

//   const searchParams = new URLSearchParams(location.search);
//   const availability = searchParams.get("availability");
//   const category = searchParams.get("category");
//   const sort = searchParams.get("sort");
//   const page = searchParams.get("page");

//   const handlePaginationChange = (event, value) => {
//     searchParams.set("page", value - 1);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   useEffect(() => {
//     const data = {
//       category: category || "",
//       colors: [],
//       sizes: [],
//       minPrice: 0,
//       maxPrice: 100000,
//       minDiscount: 0,
//       sort: sort || "price_low",
//       pageNumber: page || 0,
//       pageSize: 10,
//       stock: availability,
//     };
//     dispatch(findProducts(data));
//   }, [availability, category, sort, page, customersProduct.deleteProduct]);

//   const handleFilterChange = (e, sectionId) => {
//     setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
//     searchParams.set(sectionId, e.target.value);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   const handleDeleteProduct = (productId) => {
//     dispatch(deleteProduct(productId));
//   };

//   const handleUpdateProduct = (productId) => {
//     navigate(`/update-product/${productId}`);
//   };

//   return (
//     <Box width={"100%"}>
//       <Card className="mt-2">
//         <CardHeader
//           title="All Products"
//           sx={{
//             pt: 2,
//             alignItems: "center",
//             "& .MuiCardHeader-action": { mt: 0.6 },
//           }}
//         />
//         <TableContainer>
//           <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell>product</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {customersProduct?.products?.content?.map((item) => (
//                 <TableRow
//                   hover
//                   key={item.id}
//                   sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
//                 >
//                   <TableCell>
//                     <Avatar alt={item.title} src={item.imageUrl} />
//                   </TableCell>
//                   <TableCell
//                     sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
//                   >
//                     <Box sx={{ display: "flex", flexDirection: "column" }}>
//                       <Typography
//                         sx={{
//                           fontWeight: 500,
//                           fontSize: "0.875rem !important",
//                         }}
//                       >
//                         {item.title}
//                       </Typography>
//                       <Typography variant="caption">{item.brand}</Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     {item.category.name}
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     {item.discountedPrice}
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     {item.quantity}
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     <Button
//                       variant="text"
//                       onClick={() => handleUpdateProduct(item.id)}
//                     >
//                       Update
//                     </Button>
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     <Button
//                       variant="text"
//                       onClick={() => handleDeleteProduct(item.id)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
//       <Card className="mt-2 border">
//         <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
//           <Pagination
//             count={customersProduct.products?.totalPages}
//             color="primary"
//             onChange={handlePaginationChange}
//           />
//         </div>
//       </Card>
//     </Box>
//   );
// };

// export default ProductsTable;


