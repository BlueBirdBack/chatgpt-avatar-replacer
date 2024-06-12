const avatarImage = `data:image/png;base64,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`;

function replaceAvatar(node) {
  // Find all the target divs within the node using querySelectorAll
  const targetDivs = node.querySelectorAll(
    "[data-testid='fruit-juice-profile'] > div > div > div > div"
  );

  // Loop through each target div and replace the avatar
  targetDivs.forEach((targetDiv) => {
    if (targetDiv.textContent.trim() === "BB") {
      // Replace the inner HTML of the parent div with the new structure
      targetDiv.parentElement.outerHTML = `<img src="${avatarImage}">`;
    }
  });
}

const observer = new MutationObserver((mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          replaceAvatar(node);
        }
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// document.addEventListener("DOMContentLoaded", function () {
//   replaceAvatar(document.body);
// });
