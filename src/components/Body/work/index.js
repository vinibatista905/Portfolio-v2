import React from 'react';
import './work.scss';
import Separator from '../../common/separator';
import { WorkData } from '../../data/work';
import WorkCard from './work-card';

function Work() {
    const data = WorkData;

    return (
        <div className='work'>
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