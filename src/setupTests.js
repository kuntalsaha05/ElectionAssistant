import '@testing-library/jest-dom';

// Polyfill for scrollIntoView which is not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = function() {};
