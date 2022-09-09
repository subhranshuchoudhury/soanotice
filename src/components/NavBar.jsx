import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar bg-light fixed-top">
            <div className="container-fluid">
                <b className="navbar-brand title-text">🔔 CSE NOTIFICATIONS</b>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 style={{ color: "black" }} className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <button className="btn btn-warning" style={{ cursor: "pointer" }} onClick={() => window.location.reload()} aria-current="page">🔁 REFRESH/RELOAD</button>
                            </li>

                            <li className="nav-item">
                                <b className="nav-link active" style={{ cursor: "pointer" }} aria-current="page">
                                    <button data-bs-dismiss="offcanvas" aria-label="Close" className='btn-dark btn' onClick={props.toggleMode}>{props.currentMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</button>
                                </b>
                            </li>
                            <li className="nav-item">
                                <a href={props.data.length !== 0 ? props.data[0].download_l : "https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.png"} type="button" className="btn btn-success"><span class="material-icons">
                                    android
                                </span> Download APK</a>
                            </li>
                            {
                                props.data.length !== 0 && props.data[0].ver > props.developeVersion ? <li className="nav-item">
                                    <a className="nav-link" href={props.data[0].download_l}><span className="material-icons">
                                        file_download
                                    </span><b style={{ cursor: "pointer", color: "black", backgroundColor: "red" }}>Download Latest App ⚠️</b></a></li> : <b style={{ cursor: "pointer", color: "black" }}>✅ NO UPDATES</b>

                            }
                            <li className="nav-item dropdown">
                                <b className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Me
                                </b>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="mailto:subhransuchoudhury00@gmail.com">✉️ Gmail</a></li>
                                    <li><a className="dropdown-item" href="https://wa.me/918249587552">📞 WhatsApp</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><b className="dropdown-item">Ver 2.0.0</b></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default NavBar;
