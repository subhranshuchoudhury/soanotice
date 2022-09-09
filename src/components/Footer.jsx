import React from 'react';

const Footer = (props) => {
    console.log()
    return (


        <nav className="navbar fixed-bottom bg-light">
            <div className="container-fluid">
                {
                    props.data[0].notice === "" ? null : <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong >Important Notice!</strong> {props.data[0].notice}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                {
                    props.data[0].message === "" ? null : <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <strong >Message: </strong> {props.data[0].message}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }

            </div>
        </nav>
    );
}

export default Footer;
