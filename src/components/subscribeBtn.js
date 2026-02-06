import { useState } from "react";

const SubscribeButton = () => {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <button
            onClick={() => setSubscribed(!subscribed)}
            className={`  hover:border border-gray-300 px-6 py-2 rounded-full font-medium transition-all
        ${subscribed
                    ? "bg-gray-200 text-gray-700"
                    : "bg-black-200 text-red-700 font-bold"
                }
      `}
        >
            {subscribed ? "Subscribed" : "Subscribe"}
        </button>
    );
};

export default SubscribeButton;
