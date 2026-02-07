const Shimmer = ({ type = "video", count = 12 }) => {
    if (type === "video") {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                {Array(count)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="w-full bg-gray-200 rounded-lg overflow-hidden animate-pulse shadow-lg"
                        >
                            <div className="w-full aspect-video bg-gray-300 rounded-lg">


                                <div className="p-4 space-y-4">
                                    <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        );
    }

    if (type === "list") {
        return (
            <div className="p-6 space-y-6">
                {Array(count)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="flex gap-6 items-center animate-pulse"
                        >
                            <div className="h-20 w-32 bg-gray-300 rounded"></div>
                            <div className="flex-1 space-y-3">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
            </div>
        );
    }

    if (type === "watch") {
        return (
            <div className="w-full flex justify-center px-6 animate-pulse">
                <div className="w-full max-w-4xl">
                    <div className="relative w-full pt-[56.25%] bg-gray-300 rounded-xl"></div>

                    <div className="mt-6 space-y-4">
                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default Shimmer;
