export const formatViewCount = (views) => {
    if (!views) return "";

    const num = Number(views);

    // Indian format
    // if (num >= 1_00_00_000) {
    //     return (num / 1_00_00_000).toFixed(1) + "Cr";
    // }

    // if (num >= 1_00_000) {
    //     return (num / 1_00_000).toFixed(1) + "L";
    // }

    // International format
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1) + "B";
    }

    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + "M";
    }

    if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + "K";
    }

    return num.toString();
};
