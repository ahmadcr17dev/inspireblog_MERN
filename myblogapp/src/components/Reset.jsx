import React, { useState } from "react";
import login from '../images/login.png';
import styled from "styled-components";
import logos from '../images/logos.png';
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

const Reset = () => {

    const [email, setemail] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <Styledsection className='container flex justify-evenly mx-auto my-8 rounded-lg border h-full w-max font-poppins'>
                <div className='py-8 px-6'>
                    <img className='w-full h-full' src={login} alt='site logo' />
                </div>
                <div className="bg-purple-100 pt-24 px-6">
                    <img className='w-46 h-14 block mx-auto' src={logos} alt='site logo' />
                    <form className='flex flex-col mt-8'>
                        <label className='text-gray-500 font-medium text-sm' htmlFor="email">Email</label>
                        <input className='w-96 h-10 pl-4 rounded' type='email' placeholder='email address' required value={email} onChange={(e) => setemail(e.target.value)} />
                        <Button variant='contained' sx={{ backgroundColor: 'rgb(168 85 247)', marginTop: '1.5rem' }} type='submit'>Submit</Button>
                    </form>
                </div>
            </Styledsection>
        </>
    );
}

export default Reset;