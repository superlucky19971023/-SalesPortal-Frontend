// MUI Imports
import Grid from "@mui/material/Grid";

// Component Imports
import Component from "@/views/apps/quotation/product_details/component";

const ProductsList = async () => {
  // Vars
  const now = new Date();
  const currentMonth = now.toLocaleString("default", { month: "short" });
  const data = [
    {
      id: "1",
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      address: "7777 Mendez Plains",
      company: "Hall-Robbins PLC",
      companyEmail: "don85@johnson.com",
      country: "USA",
      contact: "(616) 865-4180",
      name: "Door of shop in Mendez Plains",
      total: 100,
      avatarColor: "primary",
      invoiceStatus: "Paid",
      url: '/images/illustrations/quotation/1.png',
      balance: "$724",
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "2",
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: "04033 Wesley Wall Apt. 961",
      company: "Mccann LLC and Sons",
      companyEmail: "brenda49@taylor.info",
      country: "Haiti",
      contact: "(226) 204-8287",
      name: "Lexus Car",
      total: 100,
      url: '/images/illustrations/quotation/2.png',
      invoiceStatus: "Downloaded",
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "3",
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      address: "7777 Mendez Plains",
      company: "Hall-Robbins PLC",
      companyEmail: "don85@johnson.com",
      country: "USA",
      contact: "(616) 865-4180",
      name: "Door of shop in Mendez Plains",
      total: 100,
      avatarColor: "primary",
      invoiceStatus: "Paid",
      url: '/images/illustrations/quotation/3.png',
      balance: "$724",
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "4",
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: "04033 Wesley Wall Apt. 961",
      company: "Mccann LLC and Sons",
      companyEmail: "brenda49@taylor.info",
      country: "Haiti",
      contact: "(226) 204-8287",
      name: "Lexus Car",
      total: 100,
      url: '/images/illustrations/quotation/4.png',
      invoiceStatus: "Downloaded",
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "5",
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      address: "7777 Mendez Plains",
      company: "Hall-Robbins PLC",
      companyEmail: "don85@johnson.com",
      country: "USA",
      contact: "(616) 865-4180",
      name: "Door of shop in Mendez Plains",
      total: 100,
      avatarColor: "primary",
      invoiceStatus: "Paid",
      url: '/images/illustrations/quotation/5.png',
      balance: "$724",
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "6",
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: "04033 Wesley Wall Apt. 961",
      company: "Mccann LLC and Sons",
      companyEmail: "brenda49@taylor.info",
      country: "Haiti",
      contact: "(226) 204-8287",
      name: "Lexus Car",
      total: 100,
      url: '/images/illustrations/quotation/6.png',
      invoiceStatus: "Downloaded",
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "7",
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      address: "7777 Mendez Plains",
      company: "Hall-Robbins PLC",
      companyEmail: "don85@johnson.com",
      country: "USA",
      contact: "(616) 865-4180",
      name: "Door of shop in Mendez Plains",
      total: 100,
      avatarColor: "primary",
      invoiceStatus: "Paid",
      url: '/images/illustrations/quotation/7.png',
      balance: "$724",
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`,
    },
    {
      id: "8",
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: "04033 Wesley Wall Apt. 961",
      company: "Mccann LLC and Sons",
      companyEmail: "brenda49@taylor.info",
      country: "Haiti",
      contact: "(226) 204-8287",
      name: "Lexus Car",
      total: 100,
      url: '/images/illustrations/quotation/8.png',
      invoiceStatus: "Downloaded",
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Component resData={data} />
      </Grid>
    </Grid>
  );
};

export default ProductsList;
