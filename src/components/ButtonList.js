import React from 'react'
import Button from './Button';



const ButtonList = () => {


    const buttonList = [
        "All", "Hyped", "Live", "News", "Podcast", "Music", "Gaming", "Cooking", "Cricket", "Trading", "Fitness", "Comedy", "Movies", "Technology", "Education"];
    return (

        <div className='sticky top-14 z-10 bg-white'>
            <div className='flex gap-2 px-2 py-2 overflow-x-auto whitespace-nowrap'>
                {buttonList.map((name) => (
                    <Button key={name} name={name} />
                ))}
            </div>
        </div>
    );
};

export default ButtonList;