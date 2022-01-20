const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });

  event.currentTarget.setAttribute('aria-selected', true);

  const id = event.currentTarget.id;
  const tabPanel = tabs.querySelector(`[aria-label="${id}"]`);
  // console.log(tabPanel);
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
