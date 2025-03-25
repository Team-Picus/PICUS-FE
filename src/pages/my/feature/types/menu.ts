export enum MenuType {
  CUSTOMER_CENTER = '고객센터',
  POLICIES = '약관 및 정책',
  LOGOUT = '로그아웃',
  ACCOUNT_DELETE = '회원탈퇴',
}

export const customerSupportMenus: MenuType[] = [MenuType.CUSTOMER_CENTER, MenuType.POLICIES];

export const loginMenus: MenuType[] = [MenuType.LOGOUT, MenuType.ACCOUNT_DELETE];
