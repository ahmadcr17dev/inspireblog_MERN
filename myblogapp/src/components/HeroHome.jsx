import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import hero from '../images/hero.png';

const Styledsection = styled.section`
    width: 90%;
    img {
        width: 60rem;
    }
    @media (max-width: 1300px) and (min-width: 1100px) {
        width: 90%;
        img {
            width: 50rem;
        }
        div:nth-child(1) {
            width: 90%;
            h5 {
                font-size: 0.8rem;
            }
            h1 {
                font-size: 2.7rem;
            }
            p {
                font-size: 0.88rem;
            }
        }
    }
    @media (max-width: 1099px) and (min-width: 900px) {
        width: 90%;
        img {
            width: 45rem;
        }
        div:nth-child(1) {
            width: 90%;
            h5 {
                font-size: 0.8rem;
            }
            h1 {
                font-size: 2.5rem;
            }
            p {
                font-size: 0.88rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        width: 90%;
        img {
            width: 100%;
            height: 100%;
        }
        div:nth-child(1) {
            width: 90%;
            h5 {
                font-size: 0.7rem;
            }
            h1 {
                font-size: 2rem;
                line-height: 2.4rem;
            }
            p {
                font-size: 0.77rem;
            }
            Button {
                padding: 0.5rem 3rem 0.5rem 3rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5rem auto 1rem auto;
        padding: 1rem;
        img {
            width: 100%;
            height: 100%;
        }
        div:nth-child(1) {
            width: 100%;
            text-align: center;
            h5 {
                font-size: 1rem;
                display: block;
                margin: 0rem auto 1rem auto;
            }
            h1 {
                font-size: 2rem;
                line-height: 2.4rem;
            }
            p {
                font-size: 0.9rem;
            }
            Button {
                padding: 0.5rem 4rem 0.5rem 4rem;
            }
        }
    }
    @media (max-width: 399px) and (min-width: 330px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        img {
            width: 100%;
            height: 100%;
        }
        div:nth-child(1) {
            width: 100%;
            text-align: center;
            h5 {
                font-size: .8rem;
                display: block;
                margin: 0rem auto 1rem auto;
            }
            h1 {
                font-size: 1.8rem;
                line-height: 2.4rem;
            }
            p {
                font-size: 0.8rem;
            }
            Button {
                padding: 0.5rem 4rem 0.5rem 4rem;
            }
        }
    }
    @media (max-width: 329px) and (min-width: 0px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        img {
            width: 100%;
            height: 100%;
        }
        div:nth-child(1) {
            width: 100%;
            text-align: center;
            h5 {
                font-size: .7rem;
                display: block;
                margin: 0rem auto 1rem auto;
            }
            h1 {
                font-size: 1.5rem;
                line-height: 2.4rem;
            }
            p {
                font-size: 0.8rem;
            }
            Button {
                padding: 0.5rem 4rem 0.5rem 4rem;
            }
        }
    }
`;

const HeroHome = () => {
    return (
        <>
            <Styledsection className='container flex flex-row justify-between font-poppins mt-36 mx-auto'>
                <div className='mt-24 w-[90%]'>
                    <h5 className='text-base font-bold bg-purple-200 w-max px-4 py-1 rounded-full mb-3'>Your Daily Dose of Inspiration and Ideas</h5>
                    <h1 className='text-5xl font-semibold leading-[3.8rem]'>
                        A Journey of <span className='text-purple-500'> Inspiration </span> and <span className='text-purple-500'> Growth </span> With InspireBlog
                    </h1>
                    <p className='font-medium text-gray-500 text-base mt-8'>
                        InspireBlog is your go-to source for daily motivation, creative ideas, and personal growth. We aim to ignite your passion, spark new thoughts, and empower you to take action. Let's have a look now
                    </p>
                    <Button variant='contained' sx={{ backgroundColor: 'rgb(168 85 247)', color: 'white', padding: '0.5rem 4rem 0.5rem 4rem', marginTop: '1rem' }}>Visit Now</Button>
                </div>
                <div>
                    <img src={hero} alt='pics' className='h-full' />
                </div>
            </Styledsection>
        </>
    );
}

export default HeroHome;