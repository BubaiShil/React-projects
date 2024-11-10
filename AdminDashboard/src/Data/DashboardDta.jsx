import React from "react";
import {
  BarChart2,
  ShoppingBag,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
} from "lucide-react";

export const salesData = [
  { name: "Jan", sales: 7000 },
  { name: "Feb", sales: 6800 },
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
	{ id: 1, name: "Amit Sharma", email: "amit@example.com", role: "Customer", status: "Active", img: "https://flexy-react-dark.netlify.app/assets/3-0594bd0b.jpg" },
	{ id: 2, name: "Priya Singh", email: "priya@example.com", role: "Admin", status: "Active", img: "https://flexy-react-dark.netlify.app/assets/4-76ce6c0c.jpg" },
	{ id: 3, name: "Ravi Kumar", email: "ravi@example.com", role: "Customer", status: "Inactive", img: "https://flexy-react-dark.netlify.app/assets/1-32ddcd87.jpg" },
	{ id: 4, name: "Anjali Patel", email: "anjali@example.com", role: "Customer", status: "Active", img: "https://flexy-react-dark.netlify.app/assets/2-1c16a104.jpg" },
	{ id: 5, name: "Vikram Rao", email: "vikram@example.com", role: "Moderator", status: "Inactive", img: "https://flexy-react-dark.netlify.app/assets/3-0594bd0b.jpg" },
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
    img: "https://cdn.pixabay.com/photo/2020/09/24/14/51/earphones-5598952_640.jpg",
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
    img: "https://cdn.pixabay.com/photo/2022/02/11/09/21/leather-wallet-7006894_640.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
    img: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
    img: "https://cdn.pixabay.com/photo/2016/11/19/17/17/beverage-1840426_640.jpg",
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
    img: "https://cdn.pixabay.com/photo/2021/10/03/04/23/yoga-mats-6676903_640.jpg",
  },
];

export const categoryData = [
  { name: "Electronics & Gadgets", value: 5500 },
  { name: "Apparel & Fashion", value: 4300 },
  { name: "Home Improve & Decor", value: 3900 },
  { name: "Books & Media", value: 2800 },
  { name: "Sports & Outdoor Gear", value: 2500 },
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
  { name: "Overview", icon: <BarChart2 color="#03C9D7" />, href: "/" },
  {
    name: "Products",
    icon: <ShoppingBag color="#03C9D7" />,
    href: "/products",
  },
  { name: "Sales", icon: <DollarSign color="#03C9D7" />, href: "/sales" },
  { name: "Users", icon: <Users color="#03C9D7" />, href: "/users" },
  { name: "Orders", icon: <ShoppingCart color="#03C9D7" />, href: "/orders" },
  { name: "Settings", icon: <Settings color="#03C9D7" />, href: "/settings" },
];

const DashboardData = () => {
  return null; // Optionally return null since this file is just for exporting data
};

export default DashboardData;
