import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DropdownButton from '@shared/assets/dropdown.svg';
import styledComponent from 'styled-components';
import React, { useState } from 'react';

interface DropdownMenuProps {
  dropdownItems: string[];
  onItemClick: (item: string) => void;
}

const CustomMenu: React.FC<DropdownMenuProps> = ({ dropdownItems, onItemClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [rotate, setRotate] = useState(false);
  const [selectedItem, setSelectedItem] = useState('스냅작가');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setRotate(!rotate);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setRotate(false);
  };

  const handleMenuItemClick = (item: string) => {
    onItemClick(item);
    setSelectedItem(item);
    handleClose();
  };

  return (
    <div>
      <MenuSection onClick={handleClick}>
        <span>{selectedItem}</span>
        <img
          src={DropdownButton}
          style={{
            transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
          alt={'dropdown'}
        />
      </MenuSection>

      {/* 커스텀 메뉴 */}
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'dropdown-button' }}
      >
        {dropdownItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default CustomMenu;

// aria hidden 부분 오류 나중에 추가로 공부해서 수정해야 할 듯
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={3}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    aria-hidden={false}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    minWidth: 150,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 20px -5px',
  },
  '& .MuiMenuItem-root': {
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const MenuSection = styledComponent.div`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 24px;
    font-weight: bold;
  }
`;
