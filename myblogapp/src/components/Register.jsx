import React, { useState } from 'react';
import register from '../images/register.png';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logos from '../images/logos.png';
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

const Register = () => {

    const [sign, setsign] = useState({
        username: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate();

    const handleregister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', sign, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success(response.data.message);
            console.log('Reg:', response.data)
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Server error. Please try again later.');
            }
        }
    };

    return (
        <>
            <Styledsection className='container flex flex-row-reverse justify-evenly mx-auto my-8 rounded-lg border h-full w-max font-poppins'>
                <div className='py-8 px-6'>
                    <img className='w-full h-full' src={register} alt='site logo' />
                </div>
                <div className='bg-purple-100 pt-24 px-6'>
                    <img className='w-46 h-14 block mx-auto' src={logos} alt='site logo' />
                    <form className='flex flex-col my-8' onSubmit={handleregister}>
                        <label className='text-gray-500 font-medium text-sm mt-4'>
                            username
                        </label>
                        <input className='w-96 h-10 pl-4 rounded'
                            type='text'
                            placeholder='username'
                            required
                            name='name'
                            value={sign.username}
                            onChange={(e) => setsign({ ...sign, username: e.target.value })} />
                        <label className='text-gray-500 font-medium text-sm mt-4'>Email</label>
                        <input className='w-96 h-10 pl-4 rounded'
                            type='email'
                            placeholder='email address'
                            required
                            name='email'
                            value={sign.email}
                            onChange={(e) => setsign({ ...sign, email: e.target.value })} />
                        <label className='text-gray-500 font-medium text-sm mt-4'>Password</label>
                        <input className='w-96 h-10 pl-4 rounded'
                            type='password'
                            placeholder='password'
                            required
                            name='password'
                            value={sign.password}
                            onChange={(e) => setsign({ ...sign, password: e.target.value })} />
                        <Button
                            variant='contained'
                            type='submit'
                            sx={{ backgroundColor: 'rgb(168 85 247)', marginTop: '1.5rem' }}>
                            Register
                        </Button>
                        <div className='flex flex-row justify-center mt-8 text-sm'>
                            <p className='mr-1'>
                                Already have an account?
                            </p>
                            <NavLink to='/login' className='text-green-700 underline'>
                                Sign In
                            </NavLink>
                        </div>
                    </form>
                </div>
            </Styledsection>
        </>
    );
}

export default Register;