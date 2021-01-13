import axios from "axios";

const API_URL = 'http://10.1.1.106:8080'

export function fetOrders() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderid: number) {
    return axios.put(`${API_URL}/orders/${orderid}/delivered`);
}