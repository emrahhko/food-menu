/* eslint-disable linebreak-style */
import { filterHandler } from '../handlers/filterHandler.js';

/**
 * Create button.
 *
 * @param {object} btn - The button object data.
 * @returns {HTMLElement} The button element.
 */

export const createButton = (btn) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = btn.id;
    button.classList.add('filter-btn');
    button.innerText = btn.text;

    button.addEventListener('click', () => {
        const id = button.id;
        filterHandler(id);
    });
    return button;
};
