import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  InputFilePreview,
  InputFilePreviewCloseIcon,
  InputFilePreviewImage,
  InputFilePreviewItem,
  InputFilePreviewRemoveButton,
  InputFilePreviewText,
} from './index.js';

storiesOf('inputs|uploaded files preview', module).add('default', () => (
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
