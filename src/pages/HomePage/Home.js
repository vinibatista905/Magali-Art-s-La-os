import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import Products from '../../components/Products/Products';

function Home() {
    return (
        <>
         <InfoSection {...homeObjOne} />   
         <InfoSection {...homeObjTwo} /> 
         <Products />
         <InfoSection {...homeObjThree} />   
           
        </>
    )
}

export default Home
