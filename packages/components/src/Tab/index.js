import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const Tab = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > input:checked + label + div {
    display: block;
  }

  > input:focus + label {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  > input:checked + label {
    color: ${props => props.theme.colors.space100};
    background-color: ${props => props.theme.colors.uranus500};
  }

  > input:checked + label svg {
    color: ${props => props.theme.colors.moon100};
  }

  > input:not(:checked):hover + label {
    cursor: pointer;
    background-color: ${props => props.theme.colors.moon200};
  }

  :after {
    content: ' ';
    display: block;
    position: absolute;
    z-index: ${props => props.theme.zIndices[1]};
    width: 100%;
    height: 48px;
    border: solid 1px ${props => props.theme.colors.moon300};
    border-radius: 24px;
  }

  ${props =>
    !props.horizontal &&
    `
    @media only screen and (max-width: 47em) {
      > label {
        border: 1px solid ${props.theme.colors.moon300};
        flex: auto;

        &:first-of-type {
          margin-left: 0;
        }

        &:last-of-type {
          margin-right: 0;
        }
      }

      > input:checked + label {
        border-color: ${props.theme.colors.uranus500};
      }

      :after {
        display: none;
      }
    }
  `}

  ${space};
`;

const TabItem = styled.input.attrs(() => ({
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
`;

const TabLabel = styled.label`
  z-index: ${props => props.theme.zIndices[2]};
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 40px;
  padding: 8px 32px;
  margin: 4px 0;
  font: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: 600;
  color: ${props => props.theme.colors.moon500};
  text-align: center;
  text-transform: lowercase;
  white-space: nowrap;
  border: none;
  border-radius: 24px;
  transition: background-color 0.3s ease, color 0.3s ease;
  align-items: center;
  flex: 1;
  justify-content: center;

  &:first-of-type {
    margin-left: 4px;
  }

  &:last-of-type {
    margin-left: 4px;
  }

  > svg {
    margin-right: 8px;
    min-width: 16px;
    color: ${props => props.theme.colors.moon500};
  }
`;

const TabContent = styled.div`
  display: none;
  width: 100%;
  padding: 16px;
  order: 99;
`;

Tab.displayName = 'Tab';
TabItem.displayName = 'TabItem';
TabLabel.displayName = 'TabLabel';
TabContent.displayName = 'TabContent';

Tab.propTypes = {
  horizontal: PropTypes.bool,
  ...space.propTypes,
};

export { Tab, TabItem, TabLabel, TabContent };
