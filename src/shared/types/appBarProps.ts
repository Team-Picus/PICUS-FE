// type BaseAppBarProps = {
//   title?: string;
//   leftHeaderAction?: HeaderAction;
//   rightHeaderActionArr?: HeaderAction[];
//   dropdownItems?: string[];
//   onSearch?: () => void;
// };
//
// type HeaderAction = {
//   icon: string;
//   onClick?: () => void;
// };
//
// export type ExpertAppBarProps = Pick<BaseAppBarProps, 'title' | 'leftHeaderAction'>;
//
// export type DropdownAppBarProps = Pick<BaseAppBarProps, 'title' | 'dropdownItems' | 'leftHeaderAction'>;
//
// export type SearchAppBarProps = Pick<BaseAppBarProps, 'title' | 'onSearch' | 'leftHeaderAction'>;