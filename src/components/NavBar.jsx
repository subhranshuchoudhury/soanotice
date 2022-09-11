import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/soanotice/apple-touch-icon.png" alt="Bootstrap" width="30" height="29" class="d-inline-block align-text-top"></img> SOA NOTICE
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas bg-dark offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                            </li>
                            <li data-bs-dismiss="offcanvas" className="nav-item">
                                <Link className='navigateLink' to="/soanotice/">GENERAL NOTIFICATION</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas" className="nav-item">
                                <Link className='navigateLink' to="/soanotice/student-notice">STUDENT NOTICE</Link>
                            </li>
                            <li data-bs-dismiss="offcanvas" className="nav-item">
                                <Link className='navigateLink' to="/soanotice/exam-notice">EXAM NOTICE</Link>
                            </li>
                            {
                                props.info.length !== 0 ? <li className="nav-item">

                                    <a href={props.info[0].download_link}><img className='apkDownloadBtn' src='/soanotice/Assets/download_apk.png' alt='apk download button'></img></a>
                                </li> : null
                            }


                            <b className='navigateLink'>Made with 💟<br></br>ver 3.0</b>


                        </ul>

                    </div >
                </div >
            </div >
        </nav ></>;
}

export default NavBar;
