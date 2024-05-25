import { useContext } from 'react';
import { InitDataContext } from '../context/InitDataContext';
import GenericTable from './GenericTable';

function Users() {
    const { users } = useContext(InitDataContext);

    if (!users) {
        return <p>Cargando...</p>;
    }

    const columns = [
        { header: 'ID', accessor: item => item.id },
        { header: 'Nombre', accessor: item => item.full_name },
        { header: 'E-mail', accessor: item => item.email },
    ];

    return (
        <GenericTable title={'Listado de usuarios'} columns={columns} data={users.data.users} />
    );
}

export default Users;