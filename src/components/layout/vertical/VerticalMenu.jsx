"use client";

// Next Imports
import { useParams } from "next/navigation";

// MUI Imports
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import PerfectScrollbar from "react-perfect-scrollbar";

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from "@menu/vertical-menu";
import CustomChip from "@core/components/mui/Chip";

// import { GenerateVerticalMenu } from '@components/GenerateMenu'
// Hook Imports
import { useSettings } from "@core/hooks/useSettings";
import useVerticalNav from "@menu/hooks/useVerticalNav";

// Styled Component Imports
import StyledVerticalNavExpandIcon from "@menu/styles/vertical/StyledVerticalNavExpandIcon";

// Style Imports
import menuItemStyles from "@core/styles/vertical/menuItemStyles";
import menuSectionStyles from "@core/styles/vertical/menuSectionStyles";

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon
    open={open}
    transitionDuration={transitionDuration}
  >
    <i className="tabler-chevron-right" />
  </StyledVerticalNavExpandIcon>
);

const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme();
  const verticalNavOptions = useVerticalNav();
  const { settings } = useSettings();
  const params = useParams();
  const { isBreakpointReached } = useVerticalNav();

  // Vars
  const { transitionDuration } = verticalNavOptions;
  const { lang: locale, id } = params;
  const ScrollWrapper = isBreakpointReached ? "div" : PerfectScrollbar;

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: "bs-full overflow-y-auto overflow-x-hidden",
            onScroll: (container) => scrollMenu(container, false),
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: (container) => scrollMenu(container, true),
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => (
          <RenderExpandIcon
            open={open}
            transitionDuration={transitionDuration}
          />
        )}
        renderExpandedMenuItemIcon={{
          icon: <i className="tabler-circle text-xs" />,
        }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu
          label={dictionary["navigation"].dashboards}
          icon={<i className="tabler-smart-home" />}
          suffix={
            <CustomChip label="4" size="small" color="error" round="true" />
          }
        >
          <MenuItem href={`/${locale}/dashboards/crm`}>
            {dictionary["navigation"].crm}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/sales`}>
            {dictionary["navigation"].sales}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/orders`}>
            {dictionary["navigation"].orders}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/payment_billing`}>
            {dictionary["navigation"].payment_billing}
          </MenuItem>
        </SubMenu>
        <MenuSection label={dictionary["navigation"].quotation_management}>
          <SubMenu
            label={dictionary["navigation"].quotation_management}
            icon={<i className="tabler-brand-qq" />}
          >
            <MenuItem href={`/${locale}/quotation_management/quotation`}>
              {dictionary["navigation"].quotation}
            </MenuItem>
            <MenuItem href={`/${locale}/quotation_management/favorite_list`}>
              {dictionary["navigation"].favorite_list}
            </MenuItem>
            <MenuItem href={`/${locale}/quotation_management/products_list`}>
              {dictionary["navigation"].products_list}
            </MenuItem>
            <MenuItem href={`/${locale}/quotation_management/product_details`}>
              {dictionary["navigation"].product_details}
            </MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={dictionary["navigation"].order_management}>
          <MenuItem
            href={`/${locale}/order_management`}
            icon={<i className="tabler-table-down" />}
          >
            {dictionary["navigation"].order_management}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary["navigation"].customer_management}>
          <SubMenu
            label={dictionary["navigation"].customer_management}
            icon={<i className="tabler-friends" />}
          >
            <MenuItem
              href={`/${locale}/customer_management/customers_list`}
            >
              {dictionary["navigation"].customers_list}
            </MenuItem>
            <MenuItem
              href={`/${locale}/customer_management/follow_up_list`}
            >
              {dictionary["navigation"].follow_up_list}
            </MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  );
};

export default VerticalMenu;
