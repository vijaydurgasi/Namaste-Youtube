import React from 'react'
import { UserIcon_URL } from '../utils/Constants';

const Comment = ({ commentData }) => {

    return (
        <div className="flex items-start gap-3 mt-4 hover:bg-gray-100 shadow-sm rounded-lg">

            <img
                className="w-10 h-10 rounded-full"
                src={UserIcon_URL}
                alt="user"
            />
            <div>
                <p className="font-semibold text-sm">
                    {commentData.name}
                </p>
                <p className="text-sm text-gray-700">
                    {commentData.text}
                </p>
            </div>

        </div>
    );
};

export default Comment;