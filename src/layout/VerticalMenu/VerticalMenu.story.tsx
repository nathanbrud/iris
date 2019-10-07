import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  VerticalMenuItemContent,
  VerticalMenuNested,
  VerticalMenuItem,
  VerticalMenuActionButton,
  VerticalMenuHeaderGroup,
} from '.';
import { PopOverList } from '../../components/portals/PopOverList/PopOverList';

import {
  PopOut,
  CirclePlus,
  Folder,
  Home,
  HomeFilled,
  Gear,
} from '../../icons';

import { Story } from '../../storybook';

const componentName = 'Vertical Menu';

storiesOf(`Layout|${componentName}`, module)
  .add('basic', () => (
    <Story title={componentName} subTitle="basic">
      <VerticalMenuNested
        actionButton={
          <VerticalMenuActionButton
            icon={<CirclePlus />}
            tooltipText="click to add new item"
          />
        }
        label="Menu Label"
        labelId="testMenu"
        labelIcon={<Folder />}
        subMenuItems={subMenuItems}
        nestedButtonLabel="toggle menu"
      />
    </Story>
  ))
  .add('complex', () => (
    <Story title={componentName} subTitle="complex" width="100%">
      <VerticalMenuDemoDocs />
    </Story>
  ));

const VerticalMenuDemoDocs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dynamicMenuItems, setDynamicMenuItems] = useState([]);

  const doClick = e =>
    console.log('Demo Click Handler: You Clicked:', e.target);
  const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen);

  const makeMenuItem = () => {
    setDynamicMenuItems([
      ...dynamicMenuItems,
      newItem(dynamicMenuItems.length),
    ]);
  };

  return (
    <>
      <VerticalMenuHeaderGroup
        actionButtonIcon={<CirclePlus />}
        actionButtonTooltipText="Tooltip Text"
        actionButtonOnClick={doClick}
        label="Section Label 1"
        labelId="Section1"
      >
        <VerticalMenuNested
          isOpen={menuOpen}
          label="Menu Label"
          labelId="testMenu"
          nestedButtonLabel="toggle menu"
          onClick={toggleMenu}
          subMenuItems={subMenuItems}
        />
      </VerticalMenuHeaderGroup>
      <VerticalMenuHeaderGroup
        label="Section Label 2"
        labelId="Section2"
      >
        <VerticalMenuNested
          actionButton={
            <VerticalMenuActionButton
              icon={<CirclePlus />}
              tooltipText="click to add new item"
              onClick={makeMenuItem}
            />
          }
          isOpen={!menuOpen}
          label="Menu Label"
          labelId="testMenu"
          labelIcon={<Folder />}
          nestedButtonLabel="toggle menu"
          onClick={toggleMenu}
          subMenuItems={subMenuItems}
        />
      </VerticalMenuHeaderGroup>
      <VerticalMenuNested
        isOpen={menuOpen}
        label="Dynamic Menu"
        labelId="testDynamicMenu"
        nestedButtonLabel="toggle menu"
        onClick={toggleMenu}
        subMenuItems={dynamicMenuItems}
      />
      <VerticalMenuItem>
        <a href="#" onClick={doClick}>
          <VerticalMenuItemContent
            label="Stand Alone Link With Link Icon"
            linkActionIcon={<PopOut />}
          />
        </a>
      </VerticalMenuItem>
      <VerticalMenuItem>
        <a href="#" onClick={doClick}>
          <VerticalMenuItemContent
            label="Stand Alone Link With Label Icon"
            labelIcon={<Home />}
            labelIconActive={<HomeFilled />}
          />
        </a>
      </VerticalMenuItem>
      <VerticalMenuItem
        nestedInteractionContent={PopOverDemoList}
        menuPanelTooltip="Show Menu"
      >
        <a href="#" onClick={doClick}>
          <VerticalMenuItemContent
            label="Menu With Nested Menu on Hover"
            truncateLabel
          />
        </a>
      </VerticalMenuItem>
      <VerticalMenuItem
        isActive
        nestedInteractionContent={PopOverDemoList}
        menuPanelTooltip="Show Menu"
      >
        <a href="#" onClick={doClick}>
          <VerticalMenuItemContent
            isActive
            label="Active Menu With Nested Menu on Hover"
            truncateLabel
          />
        </a>
      </VerticalMenuItem>
    </>
  );
};

const doClick = e => {
  e.preventDefault();
  console.log('Demo Click Handler: You Clicked:', e.target);
};

const subMenuItems = [
  <VerticalMenuItem>
    <a href="#" onClick={doClick}>
      <VerticalMenuItemContent label="Nested Item 1" />
    </a>
  </VerticalMenuItem>,
  <VerticalMenuItem isActive>
    <a href="#" onClick={doClick}>
      <VerticalMenuItemContent isActive label="Nested Item 2" />
    </a>
  </VerticalMenuItem>,
];

const newItem = length => (
  <VerticalMenuItem>
    <a href="#">
      <VerticalMenuItemContent label={`Dynamic Item ${length + 1}`} />
    </a>
  </VerticalMenuItem>
);

const PopOverDemoList = (
  <div>
    <PopOverList
      header="Section 1"
      menuItems={[
        {
          label: 'Item 1',
          href: '#',
        },
        {
          label: 'Selected Item',
          href: '#',
          isSelected: true,
        },
      ]}
    />
    <PopOverList
      hasDivider
      menuItems={[
        {
          label: 'Item 3',
          icon: <Gear />,
          href: '#',
        },
        {
          label: 'Item 4',
          href: '#',
        },
      ]}
    />
  </div>
);
