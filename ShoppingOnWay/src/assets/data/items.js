// src/data/items.js
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
// import image6 from '../images/6.jpg';
// import image7 from '../images/7.jpg';
// import image8 from '../images/8.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';
import image12 from '../images/12.jpg';
import image13 from '../images/13.jpg';
import image14 from '../images/14.jpg';


export const items = [
    {
      id: '1',
      image: image1, // Imported image
      company: 'Denim Co.',
      item_name: 'Classic Blue Jeans',
      original_price: 1045,
      current_price: 606,
      discount: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
        stars: 4.5,
        count: 1400,
      },
      description: 'These classic blue jeans offer a timeless style with a relaxed fit, perfect for everyday wear. Crafted from durable, high-quality denim, they ensure both comfort and longevity. The versatile design complements any casual or semi-formal look, whether you’re heading out for a weekend trip or to the office.',
    },
    {
      id: '2',
      image: image2, // Imported image
      company: 'Urban Outfitters',
      item_name: 'Violet Comfort Hoodie',
      original_price: 2599,
      current_price: 1507,
      discount: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
        stars: 4.3,
        count: 24,
      },
      description: 'Stay cozy and stylish with this violet comfort hoodie, featuring an oversized fit and plush interior. The hoodie is crafted from a blend of soft cotton and polyester, ensuring warmth without sacrificing breathability. It’s perfect for lounging at home, running errands, or layering over your favorite outfit for a relaxed streetwear vibe.',
    },
    {
      id: '3',
      image: image3, // Imported image
      company: 'Casual Vibes',
      item_name: 'Peach Loose Fit Pants',
      original_price: 1599,
      current_price: 495,
      discount: 69,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
        stars: 4.1,
        count: 249,
      },
      description: 'These peach-colored loose-fit pants offer the ultimate in comfort and style. Made with a lightweight, breathable fabric, they are perfect for a casual day out or lounging at home. The elastic waistband provides an adjustable fit, making them ideal for all body types, while the trendy color ensures you stand out wherever you go.',
    },
    {
      id: '4',
      image: image4, // Imported image
      company: 'Fashion Hub',
      item_name: 'Shirt Collection',
      original_price: 999,
      current_price: 499,
      discount: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
        stars: 5.0,
        count: 10,
      },
      description: 'The Fashion Hub Shirt Collection features a selection of elegant shirts designed for both formal and casual occasions. Each shirt is tailored from premium fabric that feels soft to the touch while maintaining its shape throughout the day. Whether you’re dressing up for a meeting or keeping it casual on a weekend, this collection has something for every style.',
    },
    {
      id: '5',
      image: image5, // Imported image
      company: 'Street Style',
      item_name: 'Deep Violet Oversized',
      original_price: 1399,
      current_price: 489,
      discount: 65,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
        stars: 4.2,
        count: 3500,
      },
      description: 'Make a bold statement with the Deep Violet Oversized top, perfect for those who love streetwear fashion. Its unique hue and oversized silhouette offer a comfortable yet chic style that’s ideal for layering with jeans or joggers. Designed for both comfort and flair, this piece is sure to turn heads wherever you go.',
    }
  ];
  

export const bestSeller = [
    {
        id: '6',
        image: image10, // Imported image
        company: 'EcoWear',
        item_name: 'Forest Green T-Shirt',
        original_price: 1045,
        current_price: 606,
        discount: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '7',
        image: image11, // Imported image
        company: 'Sunny Styles',
        item_name: 'Light Orange T-Shirt',
        original_price: 2599,
        current_price: 1507,
        discount: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '8',
        image: image12, // Imported image
        company: 'Pattern Play',
        item_name: 'Green T-Shirt with Pattern',
        original_price: 1599,
        current_price: 495,
        discount: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '9',
        image: image13, // Imported image
        company: 'Classic Threads',
        item_name: 'Jet Black T-Shirt',
        original_price: 999,
        current_price: 999,
        discount: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '10',
        image: image14, // Imported image
        company: 'Bright Basics',
        item_name: 'Crisp White T-Shirt',
        original_price: 1399,
        current_price: 489,
        discount: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
]