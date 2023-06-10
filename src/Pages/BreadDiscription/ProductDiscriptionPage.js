import React from 'react'
import Header from "../../components/Header"
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
const ProductDiscriptionPage = (props) => {

    let { id } = useParams(); 
    console.log(`${id}`);
    

}

export default ProductDiscriptionPage