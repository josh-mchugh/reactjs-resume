const calculateX = (rect) => {
    return window.scrollX + rect.x;
};

const calculateY = (rect) => {
    return window.scrollY + rect.y;
};

const calculateRight = (rect) => {
    return calculateX(rect) + rect.width;
};

const calculateBottom = (rect) => {
    return calculateY(rect) + rect.height;
};

export const calculateBoundry = (rect) => {
    return {
        x: calculateX(rect),
        y: calculateY(rect),
        right: calculateRight(rect),
        bottom: calculateBottom(rect)
    };
};
