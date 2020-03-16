import React from 'react';
import { useSelect } from 'downshift';
import styled, { css } from 'styled-components';

const items = [
  {
    image:
      'https://images.ctfassets.net/o9153kt66j4s/3Eza8hl0Ox17euSgr6NeHi/da1b3e0204bb5947eb8bb19d4a13e422/Screen_Shot_2020-03-13_at_4.40.29_PM.png?h=250',
    value: 'Hero 1'
  },
  {
    image:
      'https://images.ctfassets.net/o9153kt66j4s/1JagBF9HiMXrd4p4lXB8zN/b6aadd8491869005324efc114ba33b9d/Screen_Shot_2020-03-13_at_5.46.30_PM.png?h=250',
    value: 'Hero 2'
  },
  {
    image:
      'https://images.ctfassets.net/o9153kt66j4s/5JDIllLo3x6HI7NzEUlRYf/4fa0c9a5adb8dff1a1c7a0b95e82c1c4/Screen_Shot_2020-03-13_at_5.47.54_PM.png?h=250',
    value: 'Hero 3'
  }
];

const Container = styled.div`
  overflow: hidden;
`;

const List = styled.ul`
  width: 100%;
  z-index: 1000;
  max-height: 200px;
  background-color: #fff;
  list-style: none;
  padding-left: 0;
  overflow-y: auto;
  &:focus {
    outline: none;
  }
  ${props =>
    props.isOpen &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.25rem;
    `}
`;

const Item = styled.li`
  padding: 8px 16px;
  background-color: #fff;
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  &:hover {
    background-color: #eff0f1;
  }
`;

const Image = styled.img`
  margin-right: 1rem;
`;

const ItemBody = styled.div`
  flex: 1;
`;

const Button = styled.button`
  border: 1px solid #d3dce0;
  outline: none;
  background-color: #fff;
  max-height: 2.5rem;
  width: 100%;
  padding: 8px;
  font-size: 0.875rem;
  color: #536171;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

export const Dropdown = () => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items });

  return (
    <Container>
      <Button {...getToggleButtonProps()}>
        {selectedItem || 'Select an item'}
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="css-tj5bde-Svg">
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
        </svg>
      </Button>
      <List isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <Item key={`${item}${index}`} {...getItemProps({ item, index })}>
              <Image src={item.image} alt="Hero 1 type" />
              <ItemBody>{item.value}</ItemBody>
            </Item>
          ))}
      </List>
    </Container>
  );
};
