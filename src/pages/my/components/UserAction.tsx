import ActionMenu from '@my/components/ActionMenu.tsx';
import { customerSupportMenus, loginMenus } from '@my/feature/types/menu.ts';

const UserAction = () => {
  return (
    <div>
      <ActionMenu label="고객지원" menuItems={customerSupportMenus} />
      <ActionMenu label="로그인" menuItems={loginMenus} />
    </div>
  );
};

export default UserAction;
