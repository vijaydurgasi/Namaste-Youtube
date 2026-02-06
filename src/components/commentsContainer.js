import React from 'react';
import Comment from './comment';

const commentData = [
    {
        name: "vijay",
        text: "Excallent",
        replies: [
            {
                name: "vijay",
                text: "Excallent",
                replies: [],
            },
        ],
    },
    {
        name: "vijay",
        text: "Excallent",
        replies: [],
    },
    {
        name: "vijay",
        text: "Excallent",
        replies: [],
    },
];

const Comments = () => {
    return (
        <div className=''>
            <h1 className='font-bold'>comments</h1>
            <Comment commentData={commentData[0]} />
        </div>
    )
}

export default Comments;