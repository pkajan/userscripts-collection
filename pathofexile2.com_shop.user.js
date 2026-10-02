// ==UserScript==
// @name        Path of Exile 2 shop Sorter
// @namespace   pk-userscripts-collection
// @version     2.0
// @description Sorts items on the Path of Exile shop page by price.
// @author      pKajan
// @match       https://pathofexile2.com/shop/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @grant       none
// @downloadURL https://github.com/pkajan/userscripts-collection/raw/main/pathofexile2.com_shop.user.js
// @updateURL   https://github.com/pkajan/userscripts-collection/raw/main/pathofexile2.com_shop.user.js
// ==/UserScript==

(function() {
    'use strict';
    let isSorting = false;

    function resort() {
        if (isSorting) return;
        isSorting = true;
        const container = document.querySelector('.mtx-list__list');
        if (!container) {
            console.error("Container element not found.");
            isSorting = false;
            return;
        }
        const shopItems = Array.from(container.querySelectorAll('.shop-purchase-frame'));
        if (shopItems.length > 0) {
            shopItems.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.shop-purchase-frame__button span').textContent.trim());
                const priceB = parseInt(b.querySelector('.shop-purchase-frame__button span').textContent.trim());
                return priceA - priceB;
            });
            // Re-append the sorted elements
            shopItems.forEach(shopItem => {
                container.appendChild(shopItem);
            });
            console.log("Resorted items by price.");
        }
        isSorting = false;
    }

    function simulateScrollDown() {
        let previousScrollPosition = window.scrollY;
        let consecutiveStagnantScrolls = 2;
        const scrollInterval = setInterval(() => {
            if (window.scrollY === previousScrollPosition) {
                consecutiveStagnantScrolls++;
            } else {
                consecutiveStagnantScrolls = 0;
            }
            if (consecutiveStagnantScrolls >= 2) {
                clearInterval(scrollInterval);
                resort();
            }
        }, 500);
    }
    // Set up a MutationObserver to watch for changes in the container
    const containerObserver = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const hasNewItems = mutation.addedNodes.length > 0 && Array.from(mutation.addedNodes).some(node => node.classList && node.classList.contains('shop-purchase-frame'));
                if (hasNewItems) {
                    observer.disconnect();
                    setTimeout(() => {
                        simulateScrollDown();
                    }, 500);
                    // Reconnect the observer to watch for future changes
                    setTimeout(() => {
                        observer.observe(document.querySelector('.mtx-list__list'), {
                            childList: true
                        });
                    }, 1500);
                }
            }
        }
    });

    const startObserving = () => {
        const container = document.querySelector('.mtx-list__list');
        if (container) {
            containerObserver.observe(container, {
                childList: true
            });
            simulateScrollDown(); // Initial run on page load
        } else {
            // Retry if container is not immediately available
            setTimeout(startObserving, 500);
        }
    };
    startObserving();
})();
