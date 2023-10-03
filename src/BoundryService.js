const getMarginTop = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-top"));
};

const getMarginRight = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-right"));
};

const getMarginBottom = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-bottom"));
};

const getMarginLeft = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-left"));
};

const calculateX = (rect, computedStyle) => {
    return rect.x - getMarginLeft(computedStyle);
};

const calculateY = (rect, computedStyle) => {
    return rect.y - getMarginTop(computedStyle);
};

const calculateRight = (rect, computedStyle) => {
    return rect.right + getMarginRight(computedStyle);
};

const calculateBottom = (rect, computedStyle) => {
    return rect.bottom + getMarginBottom(computedStyle);
};

const calculateHeight = (rect, computedStyle) => {
    return rect.height + getMarginTop(computedStyle) + getMarginBottom(computedStyle);
};

const calculateWidth = (rect, computedStyle) => {
    return rect.width + getMarginLeft(computedStyle) + getMarginRight(computedStyle);
};

export const calculateBoundry = (ref) => {
    const rect = ref.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(ref);
    return {
        x: calculateX(rect, computedStyle),
        y: calculateY(rect, computedStyle),
        right: calculateRight(rect, computedStyle),
        bottom: calculateBottom(rect, computedStyle),
        height: calculateHeight(rect, computedStyle),
        width: calculateWidth(rect, computedStyle)
    };
};

export const defaultBoundry = (rect) => {
    return {
        x: 0,
        y: 0,
        right: 0,
        bottom: 0,
        height: 0,
        width: 0
    };
};
