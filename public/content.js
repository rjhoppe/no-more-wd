chrome.runtime.sendMessage({
  action: "getDocumentURL",
  content: document.location.href,
});