import { useNavigate } from 'react-router-dom';
import type { ItemProp } from '../types';

const Item = ({ name, price, image }: ItemProp) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/item', { 
            state: { 
                name, 
                price, 
                image 
            } 
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            role="button"
            tabIndex={0}
            aria-label={`View ${name} details, priced at $${price.toFixed(2)}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <div className="aspect-[4/3] w-full bg-gray-50">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-2 p-4">
                <h3 className="text-sm font-medium text-gray-900 leading-relaxed ml-1">
                    {name}
                </h3>
                <span className="self-start rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">
                    price: ${price.toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default Item;