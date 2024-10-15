import React, { useEffect } from "react";
import logos from '../images/logos.png';
import hero from '../images/hero.png';
import { Button } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import styled from "styled-components";

const Styledsection = styled.section`
    .edit-icon:hover {
        cursor: pointer;
    }
`;

const Account = () => {

    return (
        <>
            <Styledsection className="font-poppins">
                <div className="w-full">
                    <img src={logos} alt="site logo" className="w-56 mt-10 ml-6" />
                </div>
                <div className="container flex flex-row justify-center mt-16">
                    <div className="border-2 px-4 pt-16 pb-6 shadow-lg rounded-lg">
                        <div className="flex justify-end mb-4">
                            <CiEdit size={'1.5rem'} className="edit-icon" />
                        </div>
                        <img src={hero} alt="hero" className="container border-2 border-purple-500 rounded-full h-36 w-36 mx-auto" />
                        <h5 className="text-center my-4 font-semibold">name</h5>
                        <p className="text-center">johndoe1031gmail.com</p>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgb(168 85 247)', marginTop: '1rem'
                            }}
                            className="container"
                        >
                            Post a Blog</Button>
                    </div>
                    <div>

                    </div>
                </div>
            </Styledsection>
        </>
    )
}

export default Account;