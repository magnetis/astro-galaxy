import styled from 'styled-components';

const TextAreaWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
TextAreaWrapper.displayName = 'TextAreaWrapper';

const TextArea = styled.textarea`
  width: 100%;
  padding: 25px 16px 5px;
  font: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.moon900};
  background-color: ${props => props.theme.colors.space100};
  border: 1px solid ${props => props.theme.colors.moon500};
  border-radius: 8px;

  &:disabled {
    color: ${props => props.theme.colors.moon300};
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.moon100};
    border: 1px solid ${props => props.theme.colors.moon200};
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.uranus500};
    outline: none;
  }

  &:focus + label {
    top: 8px;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.texts.verySmall};
    color: ${props => props.theme.colors.uranus500};
  }
`;
TextArea.displayName = 'TextArea';

const TextAreaLabel = styled.label`
  position: absolute;
  top: 16px;
  left: 16px;
  font: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.moon400};
  pointer-events: none;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;
TextAreaLabel.displayName = 'TextAreaLabel';

export { TextAreaWrapper, TextArea, TextAreaLabel };
