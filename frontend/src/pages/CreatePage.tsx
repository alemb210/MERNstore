import React, { useState } from 'react';
import axios from 'axios';

interface Item { 
    name: string;
    price: number;
    image: string;
}

const CreatePage = () => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        const toAdd: Item = {
            name: e.currentTarget.name,
            price: parseFloat(e.currentTarget.price.value),
            image: e.currentTarget.image.value,
        };
        console.log(toAdd);
        if(!toAdd.name || !toAdd.price || !toAdd.image) return;
        setLoading(true);
        try {
            const resp = await axios.post('http://127.0.0.1:8000/items', toAdd);
            console.log(resp.data.data);
            if(resp.data.success) {
                alert('Product created successfully');
                setLoading(false);
                window.location.href = '/';
            }
            else {
                alert('Error creating product');
                setLoading(false);
            }
        }
        catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Product</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" type="text" placeholder="Product Name" className="border p-2 rounded w-full" required/>
                    <input name="price" type="number" placeholder="Price" className="border p-2 rounded w-full" step="0.01" min="0" required />
                    <input name="image" type="url" placeholder="Image URL" className="border p-2 rounded w-full" />
                    <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full disabled:opacity-50">
                        {loading ? 'Creating...' : 'Create Product'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;