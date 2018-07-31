import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Dashboard extends Component {
    render(){
        return(
            <div>
                Dashboard
                <Link to='/storefront'><button>Store</button></Link>
            </div>
        )
    }
}

export default Dashboard;