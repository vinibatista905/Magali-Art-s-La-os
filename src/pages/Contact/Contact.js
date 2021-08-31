import React from 'react';
import { homeObjThree } from '../Products/Data';
import InfoSection from '../../components/InfoSection/InfoSection';

function Home() {
    return (
        <>
           
         <InfoSection {...homeObjThree} />   
        </>
    )
}

export default Home
