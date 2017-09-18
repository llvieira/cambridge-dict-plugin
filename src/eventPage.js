var menuItem = {
	"id": "cambridge_dict",
	"title": "CambridgeDict",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function encodeURI (str) {
	var replaced = str.toLowerCase().replace(/ /g, '-');
    return replaced;
};

chrome.contextMenus.onClicked.addListener(function(clickData) {
	if (clickData.menuItemId == "cambridge_dict" && clickData.selectionText) {
		var cambridgeDictUrl = "https://dictionary.cambridge.org/us/dictionary/english/" 
			+ encodeURI(clickData.selectionText);

		window.open(cambridgeDictUrl, "dictWindow");
	}
});
