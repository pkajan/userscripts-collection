// ==UserScript==
// @name         Wider Gemini Interface + Wide Tables
// @namespace    pk-userscripts-collection
// @version      1.2
// @description  Expands the text input area, conversation, and tables in Gemini to maximum width.
// @author       pKajan
// @match        https://gemini.google.com/*
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL  https://github.com/pkajan/userscripts-collection/raw/main/gemini.google.com_wider_chat.user.js
// @updateURL    https://github.com/pkajan/userscripts-collection/raw/main/gemini.google.com_wider_chat.user.js
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        .conversation-container,
        main,
        .chat-history,
        input-area,
        .input-area-container,
        .message-content,
        div[class*="max-w-"] {
            max-width: 96% !important;
        }

        table-block,
        .table-block,
        .table-content,
        .table-block-component,
        response-element {
            max-width: 100% !important;
        }

        .horizontal-scroll-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: auto !important;
        }

        table[data-path-to-node] {
            width: 100% !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }
})();
