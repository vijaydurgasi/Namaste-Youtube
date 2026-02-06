import React from 'react'
import Button from './Button';
import { buttonConfig } from '../utils/buttonConfig';

const ButtonList = () => {

    return (

        <div className='sticky top-14 z-10 bg-white'>
            <div className='flex gap-2 px-2 py-2 overflow-x-auto whitespace-nowrap'>
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