const SELECTORS = {
  UPGRADE_BUTTON: ".flex.w-full.flex-row.flex-wrap-reverse.justify-between",
  HEADER_CHAT_MODEL: ".group .text-token-text-secondary",
  CHAT_GPT_ICONS: ".relative.p-1.rounded-sm.text-white.flex.items-center",
};

function checkAndApplyModifications() {
  function removeSvgElement() {
    const svgElement = document.querySelector('svg[viewBox="0 0 24 24"][fill="currentColor"][aria-hidden="true"][class^="icon-sm"]');

    if (svgElement) {
      svgElement.remove();
    }
  }

function removeUpgrade() {
  const elementsToRemove = document.querySelectorAll(SELECTORS.UPGRADE_BUTTON);
  elementsToRemove.forEach((element) => {
    element.remove();
  });
}

function updateHeaderChatModel() {
  const textElement = document.querySelector(SELECTORS.HEADER_CHAT_MODEL);

  if (textElement) {
    textElement.textContent = "4";
  }
}

  function updateChatGptIcons() {
    const chatGptIcons = document.querySelectorAll(SELECTORS.CHAT_GPT_ICONS);

    chatGptIcons.forEach((icon) => {
      icon.style.backgroundColor = "#715fde";
    });
  }

  removeUpgrade();
  updateHeaderChatModel();
  updateChatGptIcons();
}

setInterval(checkAndApplyModifications, 10);
