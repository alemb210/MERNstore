import { useLocation, Navigate } from 'react-router-dom';
import type { ItemProp } from "../types";

const ItemPage = () => {
    const location = useLocation();
    const itemData = location.state as ItemProp;

    // If no item data is provided, redirect to home
    if (!itemData || !itemData.name || !itemData.price || !itemData.image) {
        return <Navigate to="/" replace />;
    }

    const { name, price, image } = itemData;

    return (
        <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center px-6 py-6">
            <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden min-h-[600px] relative">

                {/* Image Section */}
                <div className="flex-1 bg-gray-100 flex items-center justify-center p-10">
                    <img
                        src={image}
                        alt={name}
                        className="max-w-full max-h-full object-cover rounded-lg"
                    />
                </div>

                {/* Information Section */}
                <div className="flex-1 p-16 flex flex-col justify-center gap-6">
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        {name}
                    </h1>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-gray-900">
                            ${price.toFixed(2)}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                            In Stock
                        </span>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        This is a test product.
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold cursor-pointer transition-colors duration-200 shadow-md">
                            Add to Cart
                        </button>

                        <button className="bg-transparent hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-200 border-2 border-blue-600">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;