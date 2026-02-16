import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="/">Netflix</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className='nav-link' to={"/home"}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to={"/shows"}>Shows</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to={"/usestate"}>UseStatdemo1</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo">
                                formdemo
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo2">
                                formdemo2
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo3">
                                formdemo3
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/formdemo4">
                                formdemo4
                            </Link>
                        </li>

                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};
