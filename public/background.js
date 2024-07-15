// import { desiredUrl } from "../data/constants";

chrome.webNavigation.onCompleted.addListener(
  async () => {
    await chrome.action.openPopup();
  },
  { url: [
    { hostContains: 'linkedin.com/jobs' },
  ]},
);

// chrome.webNavigation.onCompleted.addListener(
//   getTablUrl()
// )

// chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
//   if (info.url || info.status === 'loading') {
//     const url = info.url || tab.pendingUrl || tab.url;
//     console.log(url); // prints in the *background* console
//   }
// });


chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === "getDocumentURL") {
    // Update the state with the document content received from content script
    chrome.storage.local.set({ documentContent: message });
  }
});