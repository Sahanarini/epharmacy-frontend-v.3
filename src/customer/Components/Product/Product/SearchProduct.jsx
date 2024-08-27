// import { Fragment, useState } from "react";
// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import Pagination from "@mui/material/Pagination";
// import TextField from '@mui/material/TextField';

// import { filters, singleFilter, sortOptions } from "./FilterData";
// import ProductCard from "../ProductCard/ProductCard";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import {
//   findProducts,
//   searchProduct,
// } from "../../../../Redux/Customers/Product/Action";
// import { Backdrop, CircularProgress } from "@mui/material";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function SearchProduct() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const {keyword} = useParams();
//   const { customersProduct } = useSelector((store) => store);
//   const location = useLocation();
//   const [isLoaderOpen, setIsLoaderOpen] = useState(false);

//   const handleLoderClose = () => {
//     setIsLoaderOpen(false);
//   };

  
//   // console.log("location - ", colorValue, sizeValue,price,disccount);

//   const handleSortChange = (value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("sort", value);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };
//   const handlePaginationChange = (event, value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("page", value);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   useEffect(() => {
    
//     dispatch(findProducts());
//   }, [
//    keyword
//   ]);

 


//   useEffect(() => {
//     if (customersProduct.loading) {
//       setIsLoaderOpen(true);
//     } else {
//       setIsLoaderOpen(false);
//     }
//   }, [customersProduct.loading]);

//   const handleSearch=(e)=>{
//     const keyword=e.target.value;
//     dispatch(searchProduct(keyword))

//   }

//   return (
//     <div className="bg-white -z-20 ">
//       <div>
//         {/* Mobile filter dialog */}
//         <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//           <Dialog
//             as="div"
//             className="relative z-40 lg:hidden"
//             onClose={setMobileFiltersOpen}
//           >
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-black bg-opacity-25" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-40 flex">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition ease-in-out duration-300 transform"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transition ease-in-out duration-300 transform"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                   <div className="flex items-center justify-between px-4">
//                     <h2 className="text-lg font-medium text-gray-900">
//                       Filters
//                     </h2>
//                     <button
//                       type="button"
//                       className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                       onClick={() => setMobileFiltersOpen(false)}
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>

//                   {/* Filters */}
//                   <form className="mt-4 border-t border-gray-200">
//                     {filters.map((section) => (
//                       <Disclosure
//                         as="div"
//                         key={section.id}
//                         className="border-t border-gray-200 px-4 py-6"
//                         // open={false}
//                       >
//                         {({ open }) => (
//                           <>
//                             <h3 className="-mx-2 -my-3 flow-root">
//                               <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                 <span className="font-medium text-gray-900">
//                                   {section.name}
//                                 </span>
//                                 <span className="ml-6 flex items-center">
//                                   {open ? (
//                                     <MinusIcon
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   ) : (
//                                     <PlusIcon
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   )}
//                                 </span>
//                               </Disclosure.Button>
//                             </h3>
//                             <Disclosure.Panel className="pt-6">
//                               <div className="space-y-6">
//                                 {section.options.map((option, optionIdx) => (
//                                   <div
//                                     key={option.value}
//                                     className="flex items-center"
//                                   >
//                                     <input
//                                       id={`filter-mobile-${section.id}-${optionIdx}`}
//                                       name={`${section.id}[]`}
//                                       defaultValue={option.value}
//                                       type="checkbox"
//                                       defaultChecked={option.checked}
//                                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      
//                                     />
//                                     <label
//                                       htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                       className="ml-3 min-w-0 flex-1 text-gray-500"
//                                       // onClick={()=>handleFilter(option.value,section.id)}
//                                     >
//                                       {option.label}
//                                     </label>
//                                   </div>
//                                 ))}
//                               </div>
//                             </Disclosure.Panel>
//                           </>
//                         )}
//                       </Disclosure>
//                     ))}
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         <main className="mx-auto px-4 lg:px-14 ">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               Search Product
//             </h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                   <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                     Sort
//                     <ChevronDownIcon
//                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                   </Menu.Button>
//                 </div>

//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <div className="py-1">
//                       {sortOptions.map((option) => (
//                         <Menu.Item key={option.name}>
//                           {({ active }) => (
//                             <p
//                               onClick={() => handleSortChange(option.query)}
//                               className={classNames(
//                                 option.current
//                                   ? "font-medium text-gray-900"
//                                   : "text-gray-500",
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm cursor-pointer"
//                               )}
//                             >
//                               {option.name}
//                             </p>
//                           )}
//                         </Menu.Item>
//                       ))}
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>

//               <button
//                 type="button"
//                 className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
//               >
//                 <span className="sr-only">View grid</span>
//                 <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
//               </button>
//               <button
//                 type="button"
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pb-24 pt-6">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div>
              
//               <div className=" gap-y-10 ">
               

//                 {/* Product grid */}
//                 <div className=" w-full">
//                 <TextField
//                       id="outlined-basic"
//                       label="search product..."
//                       variant="outlined"
//                       onChange={handleSearch}
//                     />
//                   <div className="flex flex-wrap justify-center bg-white py-5 rounded-md ">
//                     {customersProduct?.searchProducts?.map((item) => (
//                       <ProductCard product={item} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>

//         {/* pagination section */}
//         <section className="w-full px-[3.6rem]">
//           <div className="mx-auto px-4 py-5 flex justify-center shadow-lg border rounded-md">
//             <Pagination
//               count={customersProduct.products?.totalPages}
//               color="primary"
//               className=""
//               onChange={handlePaginationChange}
//             />
//           </div>
//         </section>

//         {/* {backdrop} */}
//         <section>
//           <Backdrop
//             sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//             open={isLoaderOpen}
//             onClick={handleLoderClose}
//           >
//             <CircularProgress color="inherit" />
//           </Backdrop>
//         </section>
//       </div>
//     </div>
//   );
// }

// import { Fragment, useState, useEffect } from "react";
// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import TextField from '@mui/material/TextField';
// import Pagination from "@mui/material/Pagination";
// import { filters, sortOptions } from "./FilterData";
// import ProductCard from "../ProductCard/ProductCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { findProducts, searchProduct } from "../../../../Redux/Customers/Product/Action";
// import { Backdrop, CircularProgress } from "@mui/material";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function SearchProduct() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [isLoaderOpen, setIsLoaderOpen] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { customersProduct } = useSelector((store) => store);

//   useEffect(() => {
//     // Fetch initial products with default filters
//     const initialFilters = {
//       colors: '',
//       sizes: '',
//       minPrice: '',
//       maxPrice: '',
//       minDiscount: '',
//       category: '',
//       stock: '',
//       sort: '',
//       pageNumber: 1,
//       pageSize: 10,
//     };
//     dispatch(findProducts(initialFilters));
//   }, [dispatch]);

//   useEffect(() => {
//     if (customersProduct.loading) {
//       setIsLoaderOpen(true);
//     } else {
//       setIsLoaderOpen(false);
//     }
//   }, [customersProduct.loading]);

//   useEffect(() => {
//     // Display all products or search results based on searchTerm
//     if (searchTerm) {
//       dispatch(searchProduct(searchTerm));
//     } else {
//       dispatch(findProducts({
//         colors: '',
//         sizes: '',
//         minPrice: '',
//         maxPrice: '',
//         minDiscount: '',
//         category: '',
//         stock: '',
//         sort: '',
//         pageNumber: 1,
//         pageSize: 10,
//       }));
//     }
//   }, [searchTerm, dispatch]);

//   useEffect(() => {
//     if (customersProduct.searchProducts) {
//       setDisplayedProducts(customersProduct.searchProducts);
//     }
//   }, [customersProduct.searchProducts]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSortChange = (value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("sort", value);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   const handlePaginationChange = (event, value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("page", value);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   return (
//     <div className="bg-white -z-20">
//       {/* Mobile filter dialog */}
//       <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-40 lg:hidden"
//           onClose={setMobileFiltersOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                 <div className="flex items-center justify-between px-4">
//                   <h2 className="text-lg font-medium text-gray-900">
//                     Filters
//                   </h2>
//                   <button
//                     type="button"
//                     className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                     onClick={() => setMobileFiltersOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Filters */}
//                 <form className="mt-4 border-t border-gray-200">
//                   {filters.map((section) => (
//                     <Disclosure
//                       as="div"
//                       key={section.id}
//                       className="border-t border-gray-200 px-4 py-6"
//                     >
//                       {({ open }) => (
//                         <>
//                           <h3 className="-mx-2 -my-3 flow-root">
//                             <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                               <span className="font-medium text-gray-900">
//                                 {section.name}
//                               </span>
//                               <span className="ml-6 flex items-center">
//                                 {open ? (
//                                   <MinusIcon className="h-5 w-5" aria-hidden="true" />
//                                 ) : (
//                                   <PlusIcon className="h-5 w-5" aria-hidden="true" />
//                                 )}
//                               </span>
//                             </Disclosure.Button>
//                           </h3>
//                           <Disclosure.Panel className="pt-6">
//                             <div className="space-y-6">
//                               {section.options.map((option, optionIdx) => (
//                                 <div
//                                   key={option.value}
//                                   className="flex items-center"
//                                 >
//                                   <input
//                                     id={`filter-mobile-${section.id}-${optionIdx}`}
//                                     name={`${section.id}[]`}
//                                     defaultValue={option.value}
//                                     type="checkbox"
//                                     defaultChecked={option.checked}
//                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                   />
//                                   <label
//                                     htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                     className="ml-3 min-w-0 flex-1 text-gray-500"
//                                   >
//                                     {option.label}
//                                   </label>
//                                 </div>
//                               ))}
//                             </div>
//                           </Disclosure.Panel>
//                         </>
//                       )}
//                     </Disclosure>
//                   ))}
//                 </form>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <main className="mx-auto px-4 lg:px-14">
//         <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//             Search Product
//           </h1>

//           <div className="flex items-center">
//             <Menu as="div" className="relative inline-block text-left">
//               <div>
//                 <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Sort
//                   <ChevronDownIcon
//                     className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                     aria-hidden="true"
//                   />
//                 </Menu.Button>
//               </div>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div className="py-1">
//                     {sortOptions.map((option) => (
//                       <Menu.Item key={option.name}>
//                         {({ active }) => (
//                           <p
//                             onClick={() => handleSortChange(option.query)}
//                             className={classNames(
//                               option.current
//                                 ? "bg-gray-100 text-gray-900"
//                                 : "text-gray-700",
//                               "block px-4 py-2 text-sm cursor-pointer"
//                             )}
//                           >
//                             {option.name}
//                           </p>
//                         )}
//                       </Menu.Item>
//                     ))}
//                   </div>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           </div>
//         </div>

//         {/* Search Input */}
//         <div className="py-6">
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search for products..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
//           {displayedProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="py-6">
//           <Pagination
//             count={Math.ceil(customersProduct.totalProducts / 10)}
//             onChange={handlePaginationChange}
//           />
//         </div>

//         {/* Loader */}
//         <Backdrop open={isLoaderOpen}>
//           <CircularProgress color="inherit" />
//         </Backdrop>
//       </main>
//     </div>
//   );
// }








// import { Fragment, useState, useEffect } from "react";
// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   MinusIcon,
//   PlusIcon,
// } from "@heroicons/react/20/solid";
// import TextField from '@mui/material/TextField';
// import Pagination from "@mui/material/Pagination";
// import { filters, sortOptions } from "./FilterData";
// import ProductCard from "../ProductCard/ProductCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { findProducts, searchProduct } from "../../../../Redux/Customers/Product/Action";
// import { Backdrop, CircularProgress } from "@mui/material";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function SearchProduct() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("a"); // Initial search term
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [isLoaderOpen, setIsLoaderOpen] = useState(false);
//   const [showSearchBar, setShowSearchBar] = useState(false); // State to control search bar visibility

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { customersProduct } = useSelector((store) => store);

//   useEffect(() => {
//     // Fetch initial products with default filters
//     const initialFilters = {
//       colors: '',
//       sizes: '',
//       minPrice: '',
//       maxPrice: '',
//       minDiscount: '',
//       category: '',
//       stock: '',
//       sort: '',
//       pageNumber: 1,
//       pageSize: 10,
//     };
//     dispatch(findProducts(initialFilters));
//   }, [dispatch]);

//   useEffect(() => {
//     if (customersProduct.loading) {
//       setIsLoaderOpen(true);
//     } else {
//       setIsLoaderOpen(false);
//     }
//   }, [customersProduct.loading]);

//   useEffect(() => {
//     // Display all products or search results based on searchTerm
//     if (searchTerm) {
//       dispatch(searchProduct(searchTerm));
//     } else {
//       dispatch(findProducts({
//         colors: '',
//         sizes: '',
//         minPrice: '',
//         maxPrice: '',
//         minDiscount: '',
//         category: '',
//         stock: '',
//         sort: '',
//         pageNumber: 1,
//         pageSize: 10,
//       }));
//     }
//   }, [searchTerm, dispatch]);

//   useEffect(() => {
//     if (customersProduct.searchProducts) {
//       setDisplayedProducts(customersProduct.searchProducts);
//     }
//   }, [customersProduct.searchProducts]);

//   useEffect(() => {
//     // Perform search with 'a' and hide the search input initially
//     dispatch(searchProduct('a'));

//     // After a short delay, show the search bar and clear the search term
//     setTimeout(() => {
//       setShowSearchBar(true);
//       setSearchTerm(""); // Clear the search term after initial search
//     }, 1000); // Adjust delay as needed1
//   }, [dispatch]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSortChange = (value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("sort", value);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   const handlePaginationChange = (event, value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("page", value);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   return (
//     <div className="bg-white -z-20">
//       {/* Mobile filter dialog */}
//       <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-40 lg:hidden"
//           onClose={setMobileFiltersOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                 <div className="flex items-center justify-between px-4">
//                   <h2 className="text-lg font-medium text-gray-900">
//                     Filters
//                   </h2>
//                   <button
//                     type="button"
//                     className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                     onClick={() => setMobileFiltersOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Filters */}
//                 {/* <form className="mt-4 border-t border-gray-200">
//                   {filters.map((section) => (
//                     <Disclosure
//                       as="div"
//                       key={section.id}
//                       className="border-t border-gray-200 px-4 py-6"
//                     >
//                       {({ open }) => (
//                         <>
//                           <h3 className="-mx-2 -my-3 flow-root">
//                             <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                               <span className="font-medium text-gray-900">
//                                 {section.name}
//                               </span>
//                               <span className="ml-6 flex items-center">
//                                 {open ? (
//                                   <MinusIcon className="h-5 w-5" aria-hidden="true" />
//                                 ) : (
//                                   <PlusIcon className="h-5 w-5" aria-hidden="true" />
//                                 )}
//                               </span>
//                             </Disclosure.Button>
//                           </h3>
//                           <Disclosure.Panel className="pt-6">
//                             <div className="space-y-6">
//                               {section.options.map((option, optionIdx) => (
//                                 <div
//                                   key={option.value}
//                                   className="flex items-center"
//                                 >
//                                   <input
//                                     id={`filter-mobile-${section.id}-${optionIdx}`}
//                                     name={`${section.id}[]`}
//                                     defaultValue={option.value}
//                                     type="checkbox"
//                                     defaultChecked={option.checked}
//                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                   />
//                                   <label
//                                     htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                     className="ml-3 min-w-0 flex-1 text-gray-500"
//                                   >
//                                     {option.label}
//                                   </label>
//                                 </div>
//                               ))}
//                             </div>
//                           </Disclosure.Panel>
//                         </>
//                       )}
//                     </Disclosure>
//                   ))}
//                 </form> */}
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <main className="mx-auto px-4 lg:px-14">
//         <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//             Search Product
//           </h1>

//           <div className="flex items-center">
//             <Menu as="div" className="relative inline-block text-left">
//               <div>
//                 {/* <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Sort
//                   <ChevronDownIcon
//                     className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                     aria-hidden="true"
//                   />
//                 </Menu.Button> */}
//               </div>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div className="py-1">
//                     {sortOptions.map((option) => (
//                       <Menu.Item key={option.name}>
//                         {({ active }) => (
//                           <p
//                             onClick={() => handleSortChange(option.query)}
//                             className={classNames(
//                               option.current
//                                 ? "bg-gray-100 text-gray-900"
//                                 : "text-gray-700",
//                               "block px-4 py-2 text-sm cursor-pointer"
//                             )}
//                           >
//                             {option.name}
//                           </p>
//                         )}
//                       </Menu.Item>
//                     ))}
//                   </div>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           </div>
//         </div>

//         {/* Search Input */}
//         <div
//           className={`py-6 transition-transform duration-500 ${
//             showSearchBar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//           }`}
//         >
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search for products..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
//           {displayedProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="py-6">
//           <Pagination
//             count={Math.ceil(customersProduct.totalProducts / 10)}
//             onChange={handlePaginationChange}
//           />
//         </div>

//         {/* Loader */}
//         <Backdrop open={isLoaderOpen}>
//           <CircularProgress color="inherit" />
//         </Backdrop>
//       </main>
//     </div>
//   );
// }




// import { Fragment, useState, useEffect } from "react";
// import { Dialog, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import TextField from '@mui/material/TextField';
// import Pagination from "@mui/material/Pagination";
// import ProductCard from "../ProductCard/ProductCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { findProducts, searchProduct } from "../../../../Redux/Customers/Product/Action";
// import { Backdrop, CircularProgress } from "@mui/material";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function SearchProduct() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("a"); // Initial search term
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [isLoaderOpen, setIsLoaderOpen] = useState(false);
//   const [showSearchBar, setShowSearchBar] = useState(false); // State to control search bar visibility
//   const [selectedCategories, setSelectedCategories] = useState({
//     medicines: false,
//     supplements: false,
//     nutritionalDrinks: false,
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { customersProduct } = useSelector((store) => store);

//   useEffect(() => {
//     // Fetch initial products with default filters
//     const initialFilters = {
//       colors: '',
//       sizes: '',
//       minPrice: '',
//       maxPrice: '',
//       minDiscount: '',
//       category: '',
//       stock: '',
//       sort: '',
//       pageNumber: 1,
//       pageSize: 10,
//     };
//     dispatch(findProducts(initialFilters));
//   }, [dispatch]);

//   useEffect(() => {
//     if (customersProduct.loading) {
//       setIsLoaderOpen(true);
//     } else {
//       setIsLoaderOpen(false);
//     }
//   }, [customersProduct.loading]);

//   useEffect(() => {
//     // Display all products or search results based on searchTerm
//     if (searchTerm) {
//       dispatch(searchProduct(searchTerm));
//     } else {
//       dispatch(findProducts({
//         colors: '',
//         sizes: '',
//         minPrice: '',
//         maxPrice: '',
//         minDiscount: '',
//         category: '',
//         stock: '',
//         sort: '',
//         pageNumber: 1,
//         pageSize: 10,
//       }));
//     }
//   }, [searchTerm, dispatch]);

//   useEffect(() => {
//     if (customersProduct.searchProducts) {
//       filterProducts(customersProduct.searchProducts);
//     }
//   }, [customersProduct.searchProducts, selectedCategories]);

//   useEffect(() => {
//     // Perform search with 'a' and hide the search input initially
//     dispatch(searchProduct('a'));

//     // After a short delay, show the search bar and clear the search term
//     setTimeout(() => {
//       setShowSearchBar(true);
//       setSearchTerm(""); // Clear the search term after initial search
//     }, 1000); // Adjust delay as needed
//   }, [dispatch]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePaginationChange = (event, value) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("page", value);
//     navigate({ search: `?${searchParams.toString()}` });
//   };

//   const handleCategoryChange = (event) => {
//     const { name, checked } = event.target;
//     setSelectedCategories(prevState => ({
//       ...prevState,
//       [name]: checked
//     }));
//   };

//   const filterProducts = (products) => {
//     // Filter products based on selected categories
//     const categoryFilters = Object.keys(selectedCategories).filter(
//       (key) => selectedCategories[key]
//     );

//     const filteredProducts = products.filter(product => {
//       const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(product.category.name.toLowerCase());
//       return matchesCategory;
//     });

//     setDisplayedProducts(filteredProducts);
//   };

//   return (
//     <div className="bg-white -z-20">
//       {/* Mobile filter dialog */}
//       <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-40 lg:hidden"
//           onClose={setMobileFiltersOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                 <div className="flex items-center justify-between px-4">
//                   <h2 className="text-lg font-medium text-gray-900">
//                     Filters
//                   </h2>
//                   <button
//                     type="button"
//                     className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                     onClick={() => setMobileFiltersOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <main className="mx-auto px-4 lg:px-14 flex">
//         {/* Side filter panel */}
//         <aside className="w-1/4 px-4">
//           <div className="bg-white p-4 shadow-md rounded-md">
//             <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
//             <div className="flex flex-col space-y-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="medicines"
//                   checked={selectedCategories.medicines}
//                   onChange={handleCategoryChange}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
//                 />
//                 <span className="ml-2">Medicines</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="supplements"
//                   checked={selectedCategories.supplements}
//                   onChange={handleCategoryChange}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
//                 />
//                 <span className="ml-2">Supplements</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="nutritionalDrinks"
//                   checked={selectedCategories.nutritionalDrinks}
//                   onChange={handleCategoryChange}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
//                 />
//                 <span className="ml-2">Nutritional Drinks</span>
//               </label>
//             </div>
//           </div>
//         </aside>

//         <div className="w-3/4 pl-4">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               Search Product
//             </h1>

//             <div className="flex items-center">
//               {/* Sorting dropdown removed */}
//             </div>
//           </div>

//           {/* Search Input */}
//           <div
//             className={`py-6 transition-transform duration-500 ${
//               showSearchBar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//             }`}
//           >
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Search for products..."
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
//             {displayedProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="py-6">
//             <Pagination
//               count={Math.ceil(customersProduct.totalProducts / 10)}
//               onChange={handlePaginationChange}
//             />
//           </div>

//           {/* Loader */}
//           <Backdrop open={isLoaderOpen}>
//             <CircularProgress color="inherit" />
//           </Backdrop>
//         </div>
//       </main>
//     </div>
//   );
// }





import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import TextField from '@mui/material/TextField';
import Pagination from "@mui/material/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts, searchProduct } from "../../../../Redux/Customers/Product/Action";
import { Backdrop, CircularProgress } from "@mui/material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchProduct() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Clear initial search term
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false); // State to control search bar visibility
  const [selectedFilters, setSelectedFilters] = useState({
    medicine: false,
    supplements: false,
    nutritionalDrink: false
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { customersProduct } = useSelector((store) => store);

  useEffect(() => {
    // Fetch initial products
    const initialFilters = {
      colors: '',
      sizes: '',
      minPrice: '',
      maxPrice: '',
      minDiscount: '',
      category: '',
      stock: '',
      sort: '',
      pageNumber: 1,
      pageSize: 10,
    };
    dispatch(findProducts(initialFilters));
  }, [dispatch]);

  useEffect(() => {
    if (customersProduct.loading) {
      setIsLoaderOpen(true);
    } else {
      setIsLoaderOpen(false);
    }
  }, [customersProduct.loading]);

  useEffect(() => {
    if (customersProduct.searchProducts) {
      setAllProducts(customersProduct.searchProducts);
      filterProducts(customersProduct.searchProducts);
    }
  }, [customersProduct.searchProducts, selectedFilters]);

  useEffect(() => {
    dispatch(searchProduct(searchTerm));
    setTimeout(() => {
      setShowSearchBar(true);
    }, 1000);
  }, [dispatch, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    navigate({ search: `?${searchParams.toString()}` });
  };

  const handleCheckboxChange = (e) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked
    }));
  };

  const filterProducts = (products) => {
    const filters = Object.keys(selectedFilters).filter(key => selectedFilters[key]);
    const filteredProducts = products.filter(product => 
      filters.length === 0 || filters.some(filter => product.title.toLowerCase().includes(filter.toLowerCase()))
    );
    setDisplayedProducts(filteredProducts);
  };

  return (
    <div className="bg-white -z-20">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    Filters
                  </h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto px-4 lg:px-14 flex">
        {/* Side filter panel */}
        <aside className="w-1/4 px-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Filter by Title</h2>
            <div>
              <div className="flex items-center">
                <input
                  id="medicine"
                  name="medicine"
                  type="checkbox"
                  checked={selectedFilters.medicine}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4"
                />
                <label htmlFor="medicine" className="ml-2 text-sm text-gray-700">Medicine</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="supplements"
                  name="supplements"
                  type="checkbox"
                  checked={selectedFilters.supplements}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4"
                />
                <label htmlFor="supplements" className="ml-2 text-sm text-gray-700">Supplements</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="nutritionalDrink"
                  name="nutritionalDrink"
                  type="checkbox"
                  checked={selectedFilters.nutritionalDrink}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4"
                />
                <label htmlFor="nutritionalDrink" className="ml-2 text-sm text-gray-700">Nutritional Drink</label>
              </div>
            </div>
          </div>
        </aside>

        <div className="w-3/4 pl-4">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Search Product
            </h1>

            <div className="flex items-center">
              {/* Sorting dropdown removed */}
            </div>
          </div>

          {/* Search Input */}
          <div
            className={`py-6 transition-transform duration-500 ${
              showSearchBar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="py-6">
            <Pagination
              count={Math.ceil(customersProduct.totalProducts / 10)}
              onChange={handlePaginationChange}
            />
          </div>

          {/* Loader */}
          <Backdrop open={isLoaderOpen}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </main>
    </div>
  );
}
