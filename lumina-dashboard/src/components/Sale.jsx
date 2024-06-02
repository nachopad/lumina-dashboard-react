import { useContext, useState } from "react";

import { InitDataContext } from "../context/InitDataContext";
import GenericTable from "./GenericTable";
import PaginationNav from "./PaginationNav";

function Sale() {
  const { sales } = useContext(InitDataContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  if (!sales) {
    return <p>Cargando...</p>;
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentSales = sales.data?.orders?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sales.data?.orders?.length / itemsPerPage);

  const columns = [
    { header: "ID", accessor: (item) => item.id },
    { header: "User ID", accessor: (item) => item.user_id },
    { header: "Localidad", accessor: (item) => item.locality },
    { header: "Dirección", accessor: (item) => item.sending_address },
    { header: "Producto/s", accessor: (item) => item.products?.map((product) => product.title).join(", ") },
    { header: "Cantidad", accessor: (item) => item.products?.map((product) => product.ProductDetails.count).join(", ") },
    { header: "Total", accessor: (item) => `$ ${parseFloat(item.total).toFixed(3)}` },
  ];

  return (
    <>
      <GenericTable
        title={"Listado de ventas"}
        columns={columns}
        data={currentSales}
      />
      <PaginationNav
        pages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
  
export default Sale;
