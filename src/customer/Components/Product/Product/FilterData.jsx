// export const color = [
//   "white",
//   "Black",
//   "Red",
//   "marun",
//   "Being",
//   "Pink",
//   "Green",
//   "Yellow",
// ];

export const filters = [
  // {
  //   id: "color",
  //   name: "",
  //   options: [
  //     { value: "white", label: "White" },
  //     { value: "beige", label: "Beige" },
  //     { value: "blue", label: "Blue" },
  //     { value: "brown", label: "Brown" },
  //     { value: "green", label: "Green" },
  //     { value: "purple", label: "Purple" },
  //     {value:"yellow",label:"Yellow"}
  //   ],
  // },

  // {
  //   id: "size",
  //   name: "Size",
  //   options: [
  //     { value: "S", label: "S" },
  //     { value: "M", label: "M" },
  //     { value: "L", label: "L" },
  //   ],
  // },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "100-500", label: "₹100 To ₹500" },
      { value: "500-5000", label: "₹500 To ₹5000" },
      { value: "5000-10000", label: "₹5000 To ₹10000" },
     
    ],
  },
  {
    id: "disccout",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
