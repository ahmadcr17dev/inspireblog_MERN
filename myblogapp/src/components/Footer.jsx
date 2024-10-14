import React from 'react';
import logos from '../images/logos.png';
import styled from 'styled-components';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Styledsection = styled.section`
    background-color: whitesmoke;
`;

const Footer = () => {
    return (
        <>
            <Styledsection className='w-full pt-16 pb-8 bg-skin-500 mt-8'>
                <div>
                    <img className='w-46 h-16 mx-auto' src={logos} alt='logo' />
                </div>
                <div className='flex justify-center mt-8'>
                    <TiSocialFacebook size={'1.99rem'} />
                    <TiSocialTwitter size={'1.99rem'} />
                    <TiSocialPinterest size={'1.99rem'} />
                    <TiSocialLinkedin size={'1.99rem'} />
                </div>
            </Styledsection>
        </>
    );
}

export default Footer;