// Define CSS selectors for elements
const SELECTORS = {
  UPGRADE_BUTTON: ".flex.px-3.py-1.items-center.gap-3.transition-colors.duration-200.cursor-pointer.text-sm.rounded-md",
  HEADER_CHAT_MODEL: ".flex.flex-1.flex-grow.items-center.gap-1.px-2.py-1.text-gray-600.dark\\:text-gray-200.sm\\:justify-center.sm\\:p-0",
  CHAT_GPT_ICONS: ".relative.p-1.rounded-sm.text-white.flex.items-center",
  SEND_BUTTON: ".absolute.p-1.rounded-md.right-2.disabled\\:text-gray-400, .enabled\\:bg-brand-purple.text-white.transition-colors.disabled\\:opacity-40",
};

// Function to remove the "Upgrade to Plus" button
function removeUpgradeButton() {
  const upgradeToPlusButton = document.querySelectorAll(SELECTORS.UPGRADE_BUTTON)[2];

  if (upgradeToPlusButton && upgradeToPlusButton.textContent === "Upgrade to Plus") {
    upgradeToPlusButton.remove();
  }
}

// Function to update the chat model in the header
function updateHeaderChatModel() {
  const headerSpan = document.querySelector(SELECTORS.HEADER_CHAT_MODEL);

  if (headerSpan) {
    const modelText = headerSpan.children[0].textContent;
    if (modelText === "Default (GPT-3.5)") {
      headerSpan.children[0].textContent = "Default (GPT-4)";
    }
  }
}

// Function to update chat GPT icons
function updateChatGptIcons() {
  const chatGptIcons = document.querySelectorAll(SELECTORS.CHAT_GPT_ICONS);

  chatGptIcons.forEach((icon) => {
    icon.style.backgroundColor = "#715fde";
  });
}

// Function to change the button background color
function changeButtonBackgroundColor() {
  const button = document.querySelector(SELECTORS.SEND_BUTTON);

  if (button) {
    const style = button.getAttribute("style");
    if (style && style.includes("background-color")) {
      button.style.backgroundColor = "#715fde";
    }
  }
}

// Function to handle mutations
function handleMutations() {
  removeUpgradeButton();
  changeButtonBackgroundColor();
  updateChatGptIcons();
  updateHeaderChatModel();
}

// Create a MutationObserver to watch for changes
const observer = new MutationObserver(handleMutations);
observer.observe(document.body, { childList: true, subtree: true });

// Check if the document is already loaded
if (document.readyState !== "loading") {
  handleMutations();
} else {
  document.addEventListener("DOMContentLoaded", handleMutations);
}
