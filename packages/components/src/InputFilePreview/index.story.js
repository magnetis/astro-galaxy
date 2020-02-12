import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  InputFilePreview,
  InputFilePreviewItem,
  InputFilePreviewRemoveButton,
  InputFilePreviewText,
  InputFilePreviewImage,
  InputFilePreviewCloseIcon,
} from './index.js';

storiesOf('input file preview', module).add('default', () => (
  <>
    <InputFilePreview>
      <InputFilePreviewItem>
        <InputFilePreviewRemoveButton>
          <InputFilePreviewCloseIcon />
        </InputFilePreviewRemoveButton>
        <InputFilePreviewImage
          alt="Logo Magnetis"
          src="https://i.ytimg.com/vi/t07h052QLG8/maxresdefault.jpg"
        />
      </InputFilePreviewItem>
      <InputFilePreviewItem>
        <InputFilePreviewRemoveButton>
          <InputFilePreviewCloseIcon />
        </InputFilePreviewRemoveButton>
        <InputFilePreviewText>financialreport.csv</InputFilePreviewText>
      </InputFilePreviewItem>
      <InputFilePreviewItem>
        <InputFilePreviewRemoveButton>
          <InputFilePreviewCloseIcon />
        </InputFilePreviewRemoveButton>
        <InputFilePreviewText truncate>financialreport.csv</InputFilePreviewText>
      </InputFilePreviewItem>
    </InputFilePreview>
  </>
));
