import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconXMen } from '@magnetis/astro-galaxy-icons';

const InputFilePreview = styled.div`
  display: flex;
  padding: 8px;
`;

const InputFilePreviewItem = styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  margin-right: 32px;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.moon100};
  border-radius: 4px;
  justify-content: middle;
  align-items: center;
`;

const InputFilePreviewRemoveButton = styled.button.attrs(props => ({
  'aria-label': props['aria-label'] || 'Clique para remover o arquivo.',
}))`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  padding: 0;
  font-size: ${props => props.theme.fontSizes[0]};
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  outline: none;
  background-color: ${props => props.theme.colors.space100};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.moon300};
  }
`;

const InputFilePreviewText = styled.p`
  font: ${props => props.theme.fonts.secondary};
  width: 80px;
  padding: 12px;
  margin: 0;
  font-size: 10px;
  word-wrap: break-word;

  overflow: ${props => (props.truncate ? 'hidden' : 'auto')};
  text-overflow: ${props => (props.truncate ? 'ellipsis' : 'clip')};
  white-space: ${props => (props.truncate ? 'nowrap' : 'normal')};
`;

const InputFilePreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const InputFilePreviewCloseIcon = styled(IconXMen)`
  width: 20px;
  height: 20px;
  margin-left: -1px;
  color: ${props => props.theme.colors.moon500};
`;

InputFilePreviewText.defaultProps = {
  truncate: false,
};

InputFilePreviewText.propTypes = {
  truncate: PropTypes.bool,
};

InputFilePreview.displayName = 'InputFilePreview';
InputFilePreviewItem.displayName = 'InputFilePreviewItem';
InputFilePreviewRemoveButton.displayName = 'InputFilePreviewRemoveButton';
InputFilePreviewText.displayName = 'InputFilePreviewText';
InputFilePreviewImage.displayName = 'InputFilePreviewImage';
InputFilePreviewCloseIcon.displayName = 'InputFilePreviewCloseIcon';

export {
  InputFilePreview,
  InputFilePreviewItem,
  InputFilePreviewRemoveButton,
  InputFilePreviewText,
  InputFilePreviewImage,
  InputFilePreviewCloseIcon,
};
