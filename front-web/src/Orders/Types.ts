export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri:string;
}

export type OrderLocationdata = {
    latitude: number;
    longitude: number;
    address: String;
}

export type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationdata;

