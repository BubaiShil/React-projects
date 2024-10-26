import React from 'react';
import { BarChart2, ShoppingBag, Users, DollarSign, ShoppingCart, TrendingUp, Settings } from 'lucide-react'; // or any other icon library you're using

export const salesData = [
  { name: "January", sales: 7000 },
  { name: "February", sales: 6800 },
  { name: "March", sales: 7700 },
  { name: "April", sales: 7500 },
  { name: "May", sales: 8300 },
  { name: "June", sales: 8800 },
  { name: "July", sales: 5200 },
  { name: "August", sales: 4700 },
  { name: "September", sales: 6000 },
  { name: "October", sales: 5700 },
  { name: "November", sales: 6200 },
  { name: "December", sales: 8100 },
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
  { name: "Overview", icon: <BarChart2 color= "#03C9D7"/>, href: "/" },
  { name: "Products", icon: <ShoppingBag color= "#03C9D7"/>,  href: "/products" },
  { name: "Users", icon: <Users color= "#03C9D7"/>,  href: "/users" },
  { name: "Sales", icon: <DollarSign color= "#03C9D7"/>,  href: "/sales" },
  { name: "Orders", icon: <ShoppingCart color= "#03C9D7"/>, href: "/orders" },
  { name: "Analytics", icon: <TrendingUp color= "#03C9D7"/>,  href: "/analytics" },
  { name: "Settings", icon: <Settings color= "#03C9D7"/>, href: "/settings" },
];

const DashboardData = () => {
  return null; // Optionally return null since this file is just for exporting data
};

export default DashboardData;
