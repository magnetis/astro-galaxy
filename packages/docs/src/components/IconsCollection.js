import React from 'react';
import styled from 'styled-components';
import * as icons from '@magnetis/astro-galaxy-icons';

const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px -12px 25px;
`;

const Item = styled.div`
  display: flex;
  margin: 12px 12px 40px;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
`;

const Container = styled.div`
  border: solid 1px ${props => props.theme.colors.moon300};
  border-radius: 8px;
  padding: 24px;
  width: 82px;
  height: 82px;
`;

const Name = styled.div`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  margin-top: 24px;
  position: absolute;
  align-self: center;
`;

const dashboardIcons = [
  'IconAdditional',
  'IconChart',
  'IconInvite',
  'IconTime',
  'IconDown',
  'IconSheet',
  'IconChat',
  'IconFlag',
  'IconTransactions',
  'IconHeart',
];

const supportIcon = [
  'IconAlert',
  'IconArrowDown',
  'IconArrowLeft',
  'IconArrowRight',
  'IconArrowUp',
  'IconBalloon',
  'IconBank',
  'IconCake',
  'IconCalendar',
  'IconCalendarCheck',
  'IconChartUp',
  'IconChat',
  'IconCircleCheck',
  'IconCircleDown',
  'IconCircleLeft',
  'IconCircleLess',
  'IconCircleMail',
  'IconCircleMore',
  'IconCircleRight',
  'IconCircleUp',
  'IconClock',
  'IconClose',
  'IconCoin',
  'IconComparison',
  'IconConfiguration',
  'IconCopy',
  'IconCup',
  'IconDiagonalLeft',
  'IconDiagonalRight',
  'IconDocument',
  'IconDollars',
  'IconDown',
  'IconDownload',
  'IconDropDown',
  'IconDropLeft',
  'IconDropRight',
  'IconDropUp',
  'IconEyeClosed',
  'IconEyeOpen',
  'IconFloater',
  'IconGift',
  'IconHouse',
  'IconInfo',
  'IconKey',
  'IconLaptop',
  'IconLight',
  'IconLocker',
  'IconLogout',
  'IconMagnifier',
  'IconMail',
  'IconMenu',
  'IconMoneyBag',
  'IconMountain',
  'IconPencil',
  'IconPhone',
  'IconPhoto',
  'IconPizza',
  'IconPlay',
  'IconProfile',
  'IconReturn',
  'IconSliders',
  'IconTax',
  'IconTrash',
  'IconUpdate',
  'IconUpload',
  'IconWarning',
  'IconXMen',
];

const DashboardIcons = () => (
  <Collection>
    {dashboardIcons.map(icon => {
      const Tag = icons[icon];
      return (
        <Item>
          <Container>
            <Tag color="moon900" size={32} />
          </Container>
          <Name>{icons[icon].name}</Name>
        </Item>
      );
    })}
  </Collection>
);

const SupportIcons = () => (
  <Collection>
    {supportIcon.map(icon => {
      const Tag = icons[icon];
      return (
        <Item>
          <Container>
            <Tag color="moon900" size={32} />
          </Container>
          <Name>{icons[icon].name}</Name>
        </Item>
      );
    })}
  </Collection>
);

export { DashboardIcons, SupportIcons };
