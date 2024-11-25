import React from "react";
import earphones from "../Data/pics/earphones.jpg";
import coffe from "../Data/pics/coffe.jpg";
import yoga from "../Data/pics/yoga.jpg";
import watch from "../Data/pics/watch.jpg";
import wallet from "../Data/pics/wallet.jpg";
import pic1 from "../Data/pics/pic1.jpg";
import pic2 from "../Data/pics/pic2.jpg";
import pic3 from "../Data/pics/pic3.jpg";
import pic4 from "../Data/pics/pic4.jpg";
import pic5 from "../Data/pics/pic5.jpg";
import {
  BarChart2,
  ShoppingBagIcon,
  DollarSign,
  Settings,
  Kanban,
  Users2Icon,
  ShoppingCartIcon,
} from "lucide-react";

export const salesData = [
  { name: "Jan", sales: 5000 },
  { name: "Feb", sales: 6000 },
  { name: "Mar", sales: 7700 },
  { name: "April", sales: 7500 },
  { name: "May", sales: 8300 },
  { name: "June", sales: 8800 },
  { name: "July", sales: 5200 },
  { name: "Aug", sales: 4700 },
  { name: "Sept", sales: 6000 },
  { name: "Oct", sales: 5700 },
  { name: "Nov", sales: 6200 },
  { name: "Dec", sales: 8100 },
];

export const userData = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@example.com",
    role: "Customer",
    status: "Active",
    img: pic1,
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Admin",
    status: "Active",
    img: pic2,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    email: "ravi@example.com",
    role: "Customer",
    status: "Inactive",
    img: pic3,
  },
  {
    id: 4,
    name: "Anjali Patel",
    email: "anjali@example.com",
    role: "Customer",
    status: "Active",
    img: pic4,
  },
  {
    id: 5,
    name: "Vikram Rao",
    email: "vikram@example.com",
    role: "Moderator",
    status: "Inactive",
    img: pic5,
  },
];

export const userInsightsData = [
  { name: "18-24", value: 18 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 22 },
  { name: "45-54", value: 12 },
  { name: "55+", value: 13 },
];

export const userGrowthData = [
  { month: "Jan", users: 800 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 2500 },
  { month: "Apr", users: 1800 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 2200 },
  { month: "Jul", users: 3300 },
  { month: "Aug", users: 2900 },
  { month: "Sep", users: 5000 },
  { month: "Oct", users: 3100 },
  { month: "Nov", users: 2700 },
  { month: "Dec", users: 4300 },
];

export const productData = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
    img: earphones,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
    img: wallet,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
    img: watch,
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
    img: coffe,
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
    img: yoga,
  },
];

export const categoryData = [
  { name: "Electronics & Gadgets", value: 5500 },
  { name: "Apparel & Fashion", value: 4300 },
  { name: "Home Improve & Decor", value: 3900 },
  { name: "Books & Media", value: 2800 },
  { name: "Sports & Outdoor Gear", value: 2500 },
];

export const dailyOrdersData = [
  { date: "07/01", orders: 50 },
  { date: "07/02", orders: 65 },
  { date: "07/03", orders: 55 },
  { date: "07/04", orders: 70 },
  { date: "07/05", orders: 68 },
  { date: "07/06", orders: 72 },
  { date: "07/07", orders: 78 },
];

export const orderStatusData = [
  { name: "Pending", value: 20 },
  { name: "Processing", value: 35 },
  { name: "Shipped", value: 50 },
  { name: "Delivered", value: 100 },
];

export const orderData = [
  {
    id: "ORD101",
    customer: "Emma Wilson",
    total: 320.5 * 83,
    status: "Shipped",
    date: "2023-09-01",
  },
  {
    id: "ORD102",
    customer: "Liam Brown",
    total: 450.0 * 83,
    status: "Delivered",
    date: "2023-09-02",
  },
  {
    id: "ORD103",
    customer: "Olivia Davis",
    total: 275.3 * 83,
    status: "Pending",
    date: "2023-09-03",
  },
  {
    id: "ORD104",
    customer: "Noah Johnson",
    total: 810.4 * 83,
    status: "Processing",
    date: "2023-09-04",
  },
  {
    id: "ORD105",
    customer: "Sophia Moore",
    total: 125.9 * 83,
    status: "Shipped",
    date: "2023-09-05",
  },
  {
    id: "ORD106",
    customer: "James Garcia",
    total: 380.25 * 83,
    status: "Pending",
    date: "2023-09-06",
  },
  {
    id: "ORD107",
    customer: "Isabella Martinez",
    total: 200.7 * 83,
    status: "Delivered",
    date: "2023-09-07",
  },
  {
    id: "ORD108",
    customer: "Mason Taylor",
    total: 210.4 * 83,
    status: "Processing",
    date: "2023-09-08",
  },
];

export const dailySalesData = [
  { day: "Monday", sales: 1200 },
  { day: "Tuesday", sales: 1500 },
  { day: "Wednesday", sales: 1800 },
  { day: "Thursday", sales: 2000 },
  { day: "Friday", sales: 2500 },
  { day: "Saturday", sales: 3000 },
  { day: "Sunday", sales: 2800 },
];

export const MONTHLY_ACTIVE_USERS = [
  { month: "January", users: 2000 },
  { month: "February", users: 2500 },
  { month: "March", users: 2200 },
  { month: "April", users: 2700 },
  { month: "May", users: 3000 },
  { month: "June", users: 2800 },
  { month: "July", users: 3100 },
  { month: "August", users: 2900 },
  { month: "September", users: 3300 },
  { month: "October", users: 3500 },
  { month: "November", users: 3400 },
  { month: "December", users: 3700 },
];

export const SALES_CHANNEL_DATA = [
  { name: "E-commerce Website", value: 56000 },
  { name: "Mobile Shopping App", value: 45000 },
  { name: "Online Marketplaces", value: 38000 },
  { name: "Social Media Platforms", value: 24000 },
];

export const SIDEBAR_ITEMS = [
  { name: "Overview", icon: <Kanban color="#03C9D7" />, href: "/" },
  {
    name: "Products",
    icon: <ShoppingBagIcon color="#03C9D7" />,
    href: "/products",
  },
  { name: "Sales", icon: <DollarSign color="#03C9D7" />, href: "/sales" },
  { name: "Users", icon: <Users2Icon color="#03C9D7" />, href: "/users" },
  {
    name: "Orders",
    icon: <ShoppingCartIcon color="#03C9D7" />,
    href: "/orders",
  },
  { name: "Settings", icon: <Settings color="#03C9D7" />, href: "/settings" },
];

const DashboardData = () => {
  return null; // Optionally return null since this file is just for exporting data
};

export default DashboardData;
