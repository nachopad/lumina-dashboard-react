import { useContext, useState, useEffect } from "react";

import { InitDataContext } from '../context/InitDataContext'; 
import ContentRowProduct from "./ContentRowProducts";
import CategoriesInDb from "./CategoriesInDb";
import LastProductInDb from "./LastProductInDb";

function ContentRowTop() {
    const { products, users } = useContext(InitDataContext);
    const [lastProduct, setLastProduct] = useState(null);

    useEffect(() => {
        setLastProduct(products?.data?.products[products?.data?.products.length - 1]);
    }, [products]);

    const data = [
        {
            title: 'Productos añadidos',
            color: 'primary',
            icon: 'fas fa-tshirt',
            quantity: products?.data?.countProducts
        },
        {
            title: 'Total de categorías',
            color: 'success',
            icon: 'fas fa-stream',
            quantity: products?.data.countByCategory?.length
        },
        {
            title: 'Cantidad usuarios',
            color: 'warning',
            icon: 'fa-user',
            quantity: users?.data?.count
        }
    ]

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Panel de gestión</h1>
            </div>
            <ContentRowProduct data={ data } />
            <div className="row">
                {lastProduct && <LastProductInDb data={ lastProduct } />}
                <CategoriesInDb />
            </div>
        </div>
    );
}

export default ContentRowTop;