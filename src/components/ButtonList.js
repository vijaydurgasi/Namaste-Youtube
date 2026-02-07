import React from 'react';
import Button from './Button';
import { buttonConfig } from '../utils/buttonConfig';

const ButtonList = () => {
    return (
        <div className='bg-white'>
            <div className='flex gap-3 px-3 py-3 overflow-x-auto whitespace-nowrap'>
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