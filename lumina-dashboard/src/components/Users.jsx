import { useContext, useState } from "react";

import { InitDataContext } from "../context/InitDataContext";
import GenericTable from "./GenericTable";
import PaginationNav from "./PaginationNav";

function Users() {
  const { users } = useContext(InitDataContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  if (!users) {
    return <p>Cargando...</p>;
  }

  const startIndex = (currentPage) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUsers = users.data.users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.data.users.length / itemsPerPage);

  const columns = [
    { header: "ID", accessor: (item) => item.id },
    { header: "Nombre", accessor: (item) => item.full_name },
    { header: "E-mail", accessor: (item) => item.email },
  ];

  return (
    <>
      <GenericTable
        title={"Listado de usuarios"}
        columns={columns}
        data={currentUsers}
      />
      <PaginationNav
        pages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
  
export default Users;
