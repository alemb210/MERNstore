export type ItemProp = {
    name: string;
    price: number;
    image: string;
};

export type Product = ItemProp & {
    _id: string;
};