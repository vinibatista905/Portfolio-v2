import React, { useEffect } from 'react';
import './work.scss';
import Separator from '../../common/separator';
import { WorkData } from '../../data/work';
import WorkCard from './work-card';
import Aos from "aos";
import "aos/dist/aos.css";

function Work() {
    useEffect(() =>{
        Aos.init({duration: 2000});
      }, [])

    const data = WorkData;

    return (
        <div data-aos="fade-up" className='work'>
           <Separator />
           <label className='section-title'>Serviços</label>
           <div className='work-list'>
            {data.map((item) =>{
                return(
                    <WorkCard item={item} />
                )
            })}
           </div>
        </div>
    )
}

export default Work
