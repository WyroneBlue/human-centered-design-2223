export function checkInViewport(element) {
    const rect = element.getBoundingClientRect();
    return ({
        inview: rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth),
        top: rect.top,
    });
}

export const closestToZero = (arr) => arr.reduce((a, b) => Math.abs(b) < Math.abs(a) ? b : a);
