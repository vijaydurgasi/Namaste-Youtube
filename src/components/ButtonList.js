import React from 'react'
import Button from './Button';



const ButtonList = () => {


    const buttonList = [
        "All", "Hyped", "Live", "News", "Podcast", "Music", "Gaming", "cooking", "Cricket", "Trading", "Fitness", "Comedy", "Movies", "Technology", "Education"];
    return (
        <div className='flex gap-2 px-2 py-2 '>
            {buttonList.map((name) => (
                <Button key={name} name={name} />
            ))}
        </div>
    );
};

export default ButtonList;