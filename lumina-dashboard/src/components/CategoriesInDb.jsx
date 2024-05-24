import { useContext } from 'react';

import { InitDataContext } from '../context/InitDataContext';

function CategoriesInDb() {
    const { products } = useContext(InitDataContext);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3" >
                    <h5 className="m-0 font-weight-light text-gray-800">Categorías existentes</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {products?.data?.countByCategory.map((category, index) => {
                            return (
                                <div key={index} className="col-lg-6 mb-4" >
                                    <div className="card dark-card shadow">
                                        <div className="card-body text-uppercase">
                                            { category.name }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesInDb;