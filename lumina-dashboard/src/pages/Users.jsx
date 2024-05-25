import { Component } from 'react';

import Users from '../components/Users';

class Categories extends Component {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <Users />
            </div>
        )
    }
}

export default Categories;