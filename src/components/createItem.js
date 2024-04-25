/* eslint-disable linebreak-style */
/**
 * Create item.
 *
 * @param {object} item - The item data.
 * @returns {HTMLElement} The item element.
 */

export const createItem = (item) => {
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);

    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = item.src;
    img.alt = item.title;

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    article.append(img, itemInfo);

    const header = document.createElement('header');

    const title = document.createElement('h4');
    title.innerText = item.title;

    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = `$${item.price}`;

    header.append(title, price);

    const desc = document.createElement('p');
    desc.classList.add('item-text');
    desc.innerText = item.desc;

    itemInfo.append(header, desc);
    return article;
};
