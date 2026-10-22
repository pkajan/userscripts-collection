// ==UserScript==
// @name         SubsPlease Date Formatter (YYYY/MM/DD)
// @namespace    pk-userscripts-collection
// @version      1.0
// @description  Use normal date format, not eagles per gallon
// @author       pKajan
// @match        https://subsplease.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=https://subsplease.org/
// @grant        none
// @downloadURL  https://github.com/pkajan/userscripts-collection/raw/main/subsplease.org_date_formatter.user.js
// @updateURL    https://github.com/pkajan/userscripts-collection/raw/main/subsplease.org_date_formatter.user.js
// ==/UserScript==

(function() {
    'use strict';

    function formatDate(element) {
        // Check if the element has already been formatted
        if (element.dataset.formatted) return;

        // Try to match text in MM/DD/YY format (e.g., 09/21/26)
        let text = element.textContent.trim();
        let match = text.match(/^(\d{2})\/(\d{2})\/(\d{2})$/);

        if (match) {
            let month = match[1];
            let day = match[2];
            let year = '20' + match[3];

            element.textContent = `${year}-${month}-${day}`;
            element.dataset.formatted = "true";
        }
    }

    function processDates() {
        // Target release time/date cells
        const timeElements = document.querySelectorAll('.release-item-time span');
        timeElements.forEach(formatDate);
    }

    // Run on initial page load
    processDates();

    // Observe dynamic changes on the page (in case content loads asynchronously)
    const observer = new MutationObserver((mutations) => {
        processDates();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();