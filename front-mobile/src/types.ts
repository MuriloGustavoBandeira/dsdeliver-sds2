export type Order = {
    id: number;
    address: String,
    latitude: number;
    longitude: number;
    moment: String,
    status: String,
    products: Product[];
    total: number
}

export type Product = {
    "id": number;
    name: String,
    price: number;
    description: String,
    imageUri: String
}