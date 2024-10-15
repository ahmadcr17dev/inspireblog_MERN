import React, { useEffect, useState } from "react";
import logos from '../images/logos.png';
import styled from "styled-components";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Stylednavbar = styled.nav`
    @media (max-width: 1300px) and (min-width: 900px) {
        div:nth-child(1) img {
            width: 10rem;
            height: 4rem;
        }
        div:nth-child(2) ul li {
            font-size: 1rem;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        div:nth-child(1) img {
            width: 9rem;
            height: 4rem;
        }
        div:nth-child(2) ul li {
            font-size: 1rem;
            padding: 0rem .5rem 0rem .5rem;
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        padding: 1rem 0rem 0rem .3rem;
        div:nth-child(1) img {
            width: 11rem;
            height: 4rem;
        }
        div:nth-child(2) ul li {
            display: none;
            font-size: 0rem;
        }
        #bars {
            display: flex;
        }
    }
`;

const Styledmobile = styled.div`
    @media (max-width: 1990px) and (min-width: 600px) {
        display: none;
    }
    #mobile-menu {
        display: none;
        width: 70%;
        transition: transform 0.5s ease-in-out;
        position: fixed;
        left: 0%;
        top: 13%;
        overflow-x: hidden;
    }
`;

const Navbar = () => {

    const [menu, setmenu] = useState(true);
    const [authenticated, setauthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setauthenticated(true);
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        setauthenticated(false)
        navigate('/');
        toast.success("Logout Successfully");
    }

    const mobilemenu = () => {
        if (window.innerWidth <= 599) {
            document.getElementById('mobile-menu').style.display = 'block';
            setmenu(false);
        }
        else if (window.innerWidth > 599) {
            document.getElementById('mobile-menu').style.display = 'none';
            setmenu(true);
        }
    }

    const mobileclose = () => {
        document.getElementById('mobile-menu').style.display = 'none';
        setmenu(true);
    }

    return (
        <>
            <Stylednavbar className="flex justify-between font-poppins pt-4 px-8 bg-white fixed top-0 w-full">
                <div>
                    <img className="w-46 h-16" src={logos} alt='logo' />
                </div>
                <div>
                    <ul className="flex mt-6 text-lg subpixel-antialiased font-semimedium">
                        <li> <NavLink to='/' className="px-4">Home</NavLink> </li>
                        <li> <NavLink to='#' className="px-4">Blogs</NavLink> </li>
                        <li> <NavLink to='#' className="px-4">Admin</NavLink> </li>
                        {authenticated ? (
                            <>
                                <li> <NavLink to='account' className="px-4">Account</NavLink> </li>
                                <li><NavLink to='/' className="px-4" onClick={logout}>Logout</NavLink> </li>
                            </>
                        ) : (
                            <li><NavLink to='login' className="px-4">Login</NavLink> </li>
                        )}
                    </ul>
                </div>
                <div className="hidden mt-5 mr-4" id="bars">
                    {menu ? (
                        <HiMiniBars3BottomLeft color={'black'} size={'1.7rem'} onClick={mobilemenu} />
                    ) : (
                        <HiMiniBars3BottomRight color={'black'} size={'1.7rem'} onClick={mobileclose} />
                    )}
                </div>
            </Stylednavbar>
            <Styledmobile>
                <div>
                    <ul id="mobile-menu" className="pt-4 font-poppins h-full w-0 bg-white">
                        <li className="py-3 px-8 text-base"> <NavLink to='/'>Home</NavLink> </li>
                        <li className="py-3 px-8 text-base"> <NavLink to='#'>Blogs</NavLink> </li>
                        <li className="py-3 px-8 text-base"> <NavLink to='#'>Admin</NavLink> </li>
                        {authenticated ? (
                            <>
                                <li> <NavLink to='account' className="py-3 px-8 text-base">Account</NavLink> </li>
                                <li><NavLink to='/' className="py-3 px-8 text-base" onClick={logout}>Logout</NavLink> </li>
                            </>
                        ) : (
                            <li><NavLink to='login' className="py-3 px-8 text-base">Login</NavLink> </li>
                        )}
                    </ul>
                </div>
            </Styledmobile>
        </>
    );
}

export default Navbar;