import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { IconDropDown, IconDropUp } from '@magnetis/astro-galaxy-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.space400};
  margin-bottom: 32px;
  background-image: ${props => (props.dark ? props.theme.gradients.blackhole : 'none')};
`;

const PreviewWrapper = styled.div`
  padding: 25px 15px;
  border-bottom: 1px solid ${props => props.theme.colors.space400};

  & > div {
    margin: -8px;
  }

  & > div > * {
    margin: 8px;
  }
`;

const EditorWrapper = styled.div`
  background: ${props => props.theme.colors.space200};
  padding: 15px 5px !important;
  display: ${props => (props.visible ? 'block' : 'none')};

  textarea {
    outline: none;
  }
`;

const EditorToggle = styled.button`
  border: 0;
  outline: none;
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.space200};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

function Playground({ scope, code, dark }) {
  const [showEditor, setShowEditor] = useState(false);

  function toggleEditor() {
    setShowEditor(x => !x);
  }

  return (
    <Wrapper dark={dark}>
      <LiveProvider
        code={`<>
${code}
</>`}
        scope={scope}>
        <PreviewWrapper>
          <LivePreview />
        </PreviewWrapper>
        <EditorWrapper visible={showEditor}>
          <LiveEditor />
        </EditorWrapper>
        <EditorToggle onClick={toggleEditor}>
          {showEditor ? <IconDropUp /> : <IconDropDown />}
        </EditorToggle>
      </LiveProvider>
    </Wrapper>
  );
}

export default Playground;
