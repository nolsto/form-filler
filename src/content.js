require('expose?jQuery!expose?$!jquery');
require('expose?chance!./chance');
require('jquery-chancyforms');

chrome.storage.sync.get('formfiller', function(items) {
});

$('form').fill({overwrite: true});
