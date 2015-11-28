(function() {
    'use strict';

    Array.prototype.map.call([
        {
            id: '0',
            title: 'Form Filler',
            contexts: ['editable']
        },
        {
            id: '1',
            parentId: '0',
            title: 'Fill this field',
            contexts: ['editable']
        },
        {
            id: '2',
            parentId: '0',
            title: 'Fill this form',
            contexts: ['editable']
        },
        {
            id: '3',
            parentId: '0',
            title: 'Fill all fields',
            contexts: ['editable']
        }
    ], function(item) {
        return chrome.contextMenus.create(item);
    });

    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(tab.id, {
            file: 'content.bundle.js'
        });
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        console.log(info, tab);
        switch (info.menuItemId) {
            case '1':
                console.log('fill field');
                break;
            case '2':
                console.log('fill form');
                break;
            case '3':
                console.log('fill all fields');
                break;
            default: break;
        }
        chrome.tabs.sendMessage(tab.id, 'eventElement', function(response) {
            console.log(response);
        });
    });
})();
