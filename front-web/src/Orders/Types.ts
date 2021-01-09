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

type ProductId = {
    id: number;
}

type OrderPayload = {
    products: ProductId[];
} & OrderLocationdata;

