import React from 'react'
import Header from "../../components/Header"
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
const CraftBreadRecipePage = (props) => {

    let { id } = useParams(); 

    useEffect(() => {
        console.log(`${id}`);
    },[]);

    // .....

}


export default CraftBreadRecipePage