
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import StepsHeader from './StepsHeader';
import { OrderLocationdata, Product } from './Types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './Helpers';
import  ProductsList  from './ProductsList';
import './styles.css';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectProducts, setSelectProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
    const totalPrice = selectProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => {
            toast.warning('Erro ao lista produtos');
            })
    }, []);


    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectProducts, product)

        if (isAlreadySelected) {
            const selected = selectProducts.filter(item => item.id !== product.id);
            setSelectProducts(selected);
        } else {
            setSelectProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! N: ${response.data.id}`);
          setSelectProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectProducts}

                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary
                    amount={selectProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    )
}

export default Orders;