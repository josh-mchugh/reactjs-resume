const calculateMarginTop = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-top"));
};

const calculateMarginRight = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-right"));
};

const calculateMarginBottom = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-bottom"));
};

const calculateMarginLeft = (computedStyle) => {
    return parseFloat(computedStyle.getPropertyValue("margin-left"));
};

const calculateX = (rect, computedStyle) => {
    return rect.x - calculateMarginLeft(computedStyle);
};

const calculateY = (rect, computedStyle) => {
    return rect.y - calculateMarginTop(computedStyle);
};

const calculateRight = (rect, computedStyle) => {
    return rect.right + calculateMarginRight(computedStyle);
};

const calculateBottom = (rect, computedStyle) => {
    return rect.bottom + calculateMarginBottom(computedStyle);
};

const calculateHeight = (rect, computedStyle) => {
    return rect.height + calculateMarginTop(computedStyle) + calculateMarginBottom(computedStyle);
};

const calculateWidth = (rect, computedStyle) => {
    return rect.width + calculateMarginLeft(computedStyle) + calculateMarginRight(computedStyle);
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
