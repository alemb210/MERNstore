export type ItemProp = {
    name: string;
    price: number;
    image: string;
};

const Item = ({ name, price, image }: ItemProp) => {
    return (
        <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            role="article"
            aria-label={`Store item: ${name}`}
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
}

export default Item;