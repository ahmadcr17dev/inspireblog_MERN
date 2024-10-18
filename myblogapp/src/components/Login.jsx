import React, { useEffect, useState } from 'react';
import logos from '../images/logos.png';
import login from '../images/login.png';
import { json, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import axios from 'axios';

const Styledsection = styled.section`
    @media (max-width: 899px) and (min-width: 600px) {
        div:nth-child(1) {
            img {
                width: 100%;
                height: 100%;
            }
        }
        div:nth-child(2) {
        padding-bottom: 3rem;
            form {
                input {
                    width: 19rem;
                }
            }
        }
    }
    @media (max-width: 599px) and (min-width: 380px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid none;
        padding: .5rem;
        div:nth-child(1) {
            display: none;
            img {
                display: none;
            }
        }
        div:nth-child(2) {
            padding-bottom: 3rem;
            form {
                input {
                    width: 21rem;
                }
            }
        }
    }
    @media (max-width: 379px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid none;
        padding: .5rem;
        div:nth-child(1) {
            display: none;
            img {
                display: none;
            }
        }
        div:nth-child(2) {
            padding-bottom: 3rem;
            form {
                input {
                    width: 15rem;
                }
            }
        }
    }
`;

const Login = () => {

    const [sign, setsign] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();
        // const { email, password } = sign;
        try {
            const response = await axios.post('http://localhost:3000/auth/login', sign, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const { success, jwt, email } = await response.data
            if (success) {
                toast.success(response.data.message)
                localStorage.setItem('token', jwt)
                localStorage.setItem('email', email)
                setTimeout(() => {
                    navigate('/');
                }, 3000)
            }
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Server error. Please try again later.');
            }
        }
    }

    return (
        <>
            <Styledsection className='container flex justify-evenly mx-auto my-8 rounded-lg border h-full w-max font-poppins'>
                <div className='py-8 px-6'>
                    <img className='w-full h-full' src={login} alt='site logo' />
                </div>
                <div className='bg-purple-100 pt-24 px-6'>
                    <img className='w-46 h-14 block mx-auto' src={logos} alt='site logo' />
                    <form className='flex flex-col mt-8' onSubmit={handlelogin}>
                        <label className='text-gray-500 font-medium text-sm'>
                            Email
                        </label>
                        <input className='w-96 h-10 pl-4 rounded'
                            type='email'
                            placeholder='email address'
                            required
                            value={sign.email}
                            onChange={(e) => setsign({ ...sign, email: e.target.value })} />
                        <label className='text-gray-500 font-medium text-sm mt-4'>Password</label>
                        <input className='w-96 h-10 pl-4 rounded'
                            type='password'
                            placeholder='password'
                            required
                            value={sign.password}
                            onChange={(e) => setsign({ ...sign, password: e.target.value })} />
                        <NavLink to='/reset' className='text-sm text-green-700 text-right mt-4 font-medium underline'>
                            Forget Password?
                        </NavLink>
                        <Button
                            variant='contained'
                            sx={{ backgroundColor: 'rgb(168 85 247)', marginTop: '1.5rem' }}
                            type='submit'>
                            Sign In
                        </Button>
                        <div className='flex flex-row justify-center mt-8 text-sm'>
                            <p className='mr-1'>
                                Are you New?
                            </p>
                            <NavLink to='/register' className='text-green-700 underline'>
                                Create an Account
                            </NavLink>
                        </div>
                    </form>
                </div>
            </Styledsection>
        </>
    );
}

export default Login;