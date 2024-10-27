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

export const categoryData = [
  { name: "Electronics & Gadgets", value: 5500 },
  { name: "Apparel & Fashion", value: 4300 },
  { name: "Home Improvement & Decor", value: 3900 },
  { name: "Books & Media", value: 2800 },
  { name: "Sports & Outdoor Gear", value: 2500 },
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
  { name: "Users", icon: <Users color="#03C9D7" />, href: "/users" },
  { name: "Sales", icon: <DollarSign color="#03C9D7" />, href: "/sales" },
  { name: "Orders", icon: <ShoppingCart color="#03C9D7" />, href: "/orders" },
  {
    name: "Analytics",
    icon: <TrendingUp color="#03C9D7" />,
    href: "/analytics",
  },
  { name: "Settings", icon: <Settings color="#03C9D7" />, href: "/settings" },
];

const DashboardData = () => {
  return null; // Optionally return null since this file is just for exporting data
};

export default DashboardData;
