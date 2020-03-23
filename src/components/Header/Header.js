import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a className="brand-logo" href="#!">{ title }</a>
            </div>
        </nav>
     );
}

Header.propTyps = {
    title: PropTypes.string.isRequired
}
 
export default Header;