import { useContext } from 'react';

import { InitDataContext } from '../context/InitDataContext'; 
import GenericTable from './GenericTable';

function Product() {
    const { products } = useContext(InitDataContext);

    if (!products) {
        return <p>Cargando...</p>;
    }

    const columns = [
        { header: 'ID', accessor: item => item.id },
        { header: 'Título', accessor: item => item.title },
        { header: 'Categorías', accessor: item => item.categories?.name || 'N/A' },
        { header: 'Precio', accessor: item => `$${parseFloat(item.price).toFixed(3)}` },
        { header: 'Descuento', accessor: item => `% ${item.discounts?.percent || 'N/A'}` }
    ];

    return (
        <GenericTable title={'Listado de productos'} columns={columns} data={products.data.products} />
    );
}

export default Product;
