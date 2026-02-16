import React from 'react';
import Button from './Button';
import { buttonConfig } from '../utils/buttonConfig';

const ButtonList = () => {
    return (
        <div className='bg-white'>
            <div className='
flex flex-wrap md:flex-nowrap
gap-2 md:gap-3
px-3 py-3
overflow-x-visible md:overflow-x-auto
'>

                {buttonConfig.map((item) => (
                    <Button
                        key={item.label}
                        label={item.label}
                        type={item.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default ButtonList;