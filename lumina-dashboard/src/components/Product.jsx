import { useEffect, useState } from "react";

import GenericTable from "./GenericTable";
import PaginationNav from "./PaginationNav";

function Product() {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`http://localhost:3000/api/products/page?page=${currentPage}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    getProducts();
  }, [currentPage]);

  if (!products) {
    return <p>Cargando...</p>;
  }

  const currentProducts = products.products;
  const totalPages = products.totalPages;

  const columns = [
    { header: "ID", accessor: (item) => item.id },
    { header: "Título", accessor: (item) => item.title },
    { header: "Categorías", accessor: (item) => item.categories?.name || "N/A" },
    { header: "Precio", accessor: (item) => `$${parseFloat(item.price).toFixed(3)}` },
    { header: "Descuento", accessor: (item) => `% ${item.discounts?.percent || "N/A"}` },
  ];

  return (
    <>
      <GenericTable
        title={"Listado de productos"}
        data={currentProducts}
        columns={columns}
      />
      <PaginationNav
        pages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Product;
