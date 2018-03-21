// ==UserScript==
// @name         AlphaRacer Turbo
// @version      1
// @author       Alpha
// @match        https://www.nitrotype.com/race/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    function start() {
        UltraTypeCore.on('raceStart', () => {
            setTimeout(() => {
                // Send an insanely mutated type packet that instantly wins the race
                UltraTypeCore.sendTypePacket(true, 15);
            }, 100);
        }).on('raceFinish', () => {
            // Auto refresh the page
            setTimeout(location.reload.bind(window.location), 2);
        });
    }
    setInterval(() => {
        if (unsafeWindow["UltraTypeCore"]) {
            start(); // Call when UltraType is loaded
            clearInterval(this);
            return;
        }
    }, 100);
})();
