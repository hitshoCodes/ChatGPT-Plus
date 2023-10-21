const SELECTORS = {
  UPGRADE_BUTTON: ".flex.px-3.py-1.items-center.gap-3.transition-colors.duration-200.cursor-pointer.text-sm.rounded-md",
  HEADER_CHAT_MODEL: ".flex.flex-1.flex-grow.items-center.gap-1.px-2.py-1.text-gray-600.dark\\:text-gray-200.sm\\:justify-center.sm\\:p-0",
  CHAT_GPT_ICONS: ".relative.p-1.rounded-sm.text-white.flex.items-center",
  SEND_BUTTON: ".absolute.p-1.rounded-md.right-2.disabled\\:text-gray-400, .enabled\\:bg-brand-purple.text-white.transition-colors.disabled\\:opacity-40",
};

function checkAndApplyModifications() {
  function removeSvgElement() {
    const svgElement = document.querySelector('svg[viewBox="0 0 24 24"][fill="currentColor"][aria-hidden="true"][class^="icon-sm"]');

    if (svgElement) {
      svgElement.remove();
    }
  }

  function removeUpgradeToPlusButton() {
    const elementsToRemove = document.querySelectorAll('.mt-2');

    elementsToRemove.forEach((element) => {
      const hasButtonStructure = element.querySelector('button.btn-primary');

      if (hasButtonStructure) {
        element.remove();
      }
    });
  }

  function updateHeaderText() {
    const originalElement = document.querySelector('.text-4xl.font-semibold.text-center.text-gray-200.dark\\:text-gray-600.ml-auto.mr-auto.mb-10.sm\\:mb-16.flex.gap-2.items-center.justify-center.flex-grow');

    if (originalElement && !originalElement.classList.contains('header-updated')) {
      const plusSpan = document.createElement('span');
      plusSpan.className = 'rounded-md bg-yellow-200 px-1.5 py-0.5 text-xl font-semibold uppercase text-gray-800';
      plusSpan.textContent = 'PLUS';

      originalElement.appendChild(document.createTextNode(' '));
      originalElement.appendChild(plusSpan);

      originalElement.classList.add('header-updated');
    }
  }

  function removeUpgradeButton() {
    const upgradeToPlusButton = document.querySelectorAll(SELECTORS.UPGRADE_BUTTON)[2];

    if (upgradeToPlusButton && upgradeToPlusButton.textContent === "Upgrade to Plus") {
      upgradeToPlusButton.remove();
    }
  }

  function updateHeaderChatModel() {
    const headerSpan = document.querySelector(SELECTORS.HEADER_CHAT_MODEL);

    if (headerSpan) {
      const modelText = headerSpan.children[0].textContent;
      if (modelText === "Default (GPT-3.5)") {
        headerSpan.children[0].textContent = "Default (GPT-4)";
      }
    }
  }

  function updateChatGptIcons() {
    const chatGptIcons = document.querySelectorAll(SELECTORS.CHAT_GPT_ICONS);

    chatGptIcons.forEach((icon) => {
      icon.style.backgroundColor = "#715fde";
    });
  }

  function changeButtonBackgroundColor() {
    const button = document.querySelector(SELECTORS.SEND_BUTTON);

    if (button) {
      const style = button.getAttribute("style");
      if (style && style.includes("background-color")) {
        button.style.backgroundColor = "#715fde";
      }
    }
  }

  removeUpgradeButton();
  changeButtonBackgroundColor();
  updateChatGptIcons();
  updateHeaderChatModel();
  removeSvgElement();
  updateHeaderText();
  removeUpgradeToPlusButton();
}

setInterval(checkAndApplyModifications, 10);
