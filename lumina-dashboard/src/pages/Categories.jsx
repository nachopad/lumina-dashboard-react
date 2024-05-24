import { Component } from 'react';

import CategoriesInDb from '../components/CategoriesInDb';

class Categories extends Component {
    render() {
        return (
            <div className='full-screen'>
                <CategoriesInDb />
            </div>
        )
    }
}

export default Categories;