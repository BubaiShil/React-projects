// src/data/items.js
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

export const items = [
    {
        id: '1',
        image: image1, // Imported image
        company: 'Nikon',
        item_name: 'Nikon COOLPIX A300 Point & Shoot Camera 20.1 MP',
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
        id: '2',
        image: image2, // Imported image
        company: 'Blue Heaven',
        item_name: 'Blue Heaven Festive Fair Tone Make Up Kit - Vanilla (10Pcs)',
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
        id: '3',
        image: image3, // Imported image
        company: 'HERO',
        item_name: 'Calcuttacycleco Hero Cycles For Mens And Boys 27.5 T Mountain/Hardtail Cycle',
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
        id: '4',
        image: image4, // Imported image
        company: 'Apple',
        item_name: 'MacBook M1',
        original_price: 99999,
        current_price: 89999,
        discount: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '5',
        image: image5, // Imported image
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
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
    {
        id: '6',
        image: image6, // Imported image
        company: 'Watch',
        item_name: 'Men ReactX Watch',
        original_price: 14995,
        current_price: 14995,
        discount: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '7',
        image: image7, // Imported image
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '8',
        image: image8, // Imported image
        company: 'Nivea',
        item_name: 'Men Fresh Deodorant 150ml',
        original_price: 285,
        current_price: 142,
        discount: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];
