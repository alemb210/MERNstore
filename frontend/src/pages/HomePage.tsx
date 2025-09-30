import { useState, useEffect } from 'react';
import Item from '../components/Item';
import axios from 'axios';

interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/items');
                console.log(resp.data);
                setProducts(resp.data);
            }
            catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 pt-24">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">いらっしゃいませ(´・ω・｀)</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Item
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;