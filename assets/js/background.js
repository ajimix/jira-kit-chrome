/**
 * Add listener for all ajax request, so we can work with the new information.
 */
chrome.webRequest.onCompleted.addListener( function( details ) {
	chrome.tabs.getSelected( null, function( tab ) {
		chrome.tabs.sendRequest( tab.id, {}, function(){} );
	} );
}, {
	urls: [
		"*://site.domain/*"
	]
});