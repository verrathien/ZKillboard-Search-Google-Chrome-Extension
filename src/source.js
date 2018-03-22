chrome.contextMenus.create({
    title: "ZKillboard for '%s'", 
    contexts:["selection"], 
    onclick: function(info, tab) {
	  var newURL = "https://zkillboard.com/search/" + info.selectionText + "/";
	  chrome.tabs.create({ url: newURL });
    }
});