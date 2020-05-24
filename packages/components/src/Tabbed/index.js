import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Adapted from Inclusive Components book (https://inclusive-components.design/)
export const assembleTabs = () => {
  const tabbed = document.querySelector('.a-tabbed');

  if (!tabbed) return false;

  const tablist = tabbed.querySelector('ul');
  const tabs = tablist.querySelectorAll('a');
  const panels = tabbed.querySelectorAll('[id^="section"]');

  if (!tabs.length || !panels.length) {
    return false;
  }

  // The tab switching
  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    // Make the active tab focusable by the user
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    // Get the indices of the new and old tabs to find the correct tab panels to show and hide
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  };

  // Add the tablist role to the first <ul> in the a.tabbed container
  tablist.setAttribute('role', 'tablist');

  // Add semantics and remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', `tab${i + 1}`);
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);

      // Determine arrow key pressed
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : null;

      // Switch to the new tab if it exists
      if (dir !== null) {
        e.preventDefault();

        // Find correct tab to focus
        let newIndex;
        if (tabs[dir]) {
          newIndex = dir;
        } else {
          // Loop around if adjacent tab doesn't exist
          newIndex = dir === index - 1 ? tabs.length - 1 : 0;
        }
        switchTab(e.currentTarget, tabs[newIndex]);
        tabs[newIndex].focus();
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Initially activate the first tab and reveal the first tab panel
  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
};

const Tabs = styled.ul`
  padding: 0;
`;

const TabContainer = styled.li`
  display: inline-block;

  [aria-selected='true'] {
    color: ${props => props.theme.colors.uranus500};
    border-bottom: 2px solid ${props => props.theme.colors.uranus500};

    svg {
      fill: ${props => props.theme.colors.uranus500};
    }
  }
`;

const TabItem = styled.a`
  border-bottom: 2px solid ${props => props.theme.colors.moon300};
  color: ${props => props.theme.colors.moon500};
  display: inline-flex;
  font: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.texts.small};
  line-height: 26px;
  padding: 10px 20px 8px;
  text-decoration: none;

  svg {
    fill: ${props => props.theme.colors.moon500};
    margin-right: 4px;
  }

  &:hover {
    color: ${props => props.theme.colors.moon300};
    border-bottom: 2px solid ${props => props.theme.colors.moon200};

    svg {
      fill: ${props => props.theme.colors.moon300};
    }
  }
`;

export const Section = styled.section``;

export const Tab = ({ id, children, selected, ...rest }) => (
  <TabContainer>
    <TabItem href={`#${id}`} aria-selected={selected} {...rest}>
      {children}
    </TabItem>
  </TabContainer>
);

const Tabbed = ({ tabs, sections }) => {
  useEffect(() => {
    assembleTabs();
  }, []);

  return (
    <div className="a-tabbed">
      <Tabs>{tabs}</Tabs>
      {sections}
    </div>
  );
};

Tabbed.displayName = 'Tabbed';
Section.displayName = 'Section';
Tab.displayName = 'Tab';

Tabbed.propTypes = {
  tabs: PropTypes.node.isRequired,
  sections: PropTypes.node.isRequired,
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default Tabbed;
