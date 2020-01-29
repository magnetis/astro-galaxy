import React from 'react';
import {
  InputFilePreview,
  InputFilePreviewItem,
  InputFilePreviewRemoveButton,
  InputFilePreviewText,
  InputFilePreviewImage,
  InputFilePreviewCloseIcon,
} from '@magnetis/astro-galaxy-components';

describe('InputFilePreview', () => {
  it('should render with image', () => {
    const json = rendererCreateWithTheme(
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
      </InputFilePreview>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render with text', () => {
    const json = rendererCreateWithTheme(
      <InputFilePreview>
        <InputFilePreviewItem>
          <InputFilePreviewRemoveButton>
            <InputFilePreviewCloseIcon />
          </InputFilePreviewRemoveButton>
          <InputFilePreviewText>financialreport.csv</InputFilePreviewText>
        </InputFilePreviewItem>
      </InputFilePreview>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render with trucated text', () => {
    const json = rendererCreateWithTheme(
      <InputFilePreview>
        <InputFilePreviewItem>
          <InputFilePreviewRemoveButton>
            <InputFilePreviewCloseIcon />
          </InputFilePreviewRemoveButton>
          <InputFilePreviewText truncate>financialreport.csv</InputFilePreviewText>
        </InputFilePreviewItem>
      </InputFilePreview>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render mutiples items with image and text', () => {
    const json = rendererCreateWithTheme(
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
          <InputFilePreviewText truncate>financialreport.csv</InputFilePreviewText>
        </InputFilePreviewItem>
        <InputFilePreviewItem>
          <InputFilePreviewRemoveButton>
            <InputFilePreviewCloseIcon />
          </InputFilePreviewRemoveButton>
          <InputFilePreviewText>financialreport.csv</InputFilePreviewText>
        </InputFilePreviewItem>
      </InputFilePreview>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});

describe('InputFilePreviewText', () => {
  it('should render trucated text with correct style', () => {
    const json = rendererCreateWithTheme(
      <InputFilePreviewText truncate>financialreport.csv</InputFilePreviewText>
    ).toJSON();

    expect(json).toHaveStyleRule('overflow', 'hidden');
    expect(json).toHaveStyleRule('text-overflow', 'ellipsis');
    expect(json).toHaveStyleRule('white-space', 'nowrap');
    expect(json).toMatchSnapshot();
  });

  it('should render full text with correct style', () => {
    const json = rendererCreateWithTheme(
      <InputFilePreviewText>financialreport.csv</InputFilePreviewText>
    ).toJSON();

    expect(json).toHaveStyleRule('overflow', 'auto');
    expect(json).toHaveStyleRule('text-overflow', 'clip');
    expect(json).toHaveStyleRule('white-space', 'normal');
    expect(json).toMatchSnapshot();
  });
});
