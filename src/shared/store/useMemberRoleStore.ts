import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';

export enum MemberRole {
  NORMAL = 'normal',
  EXPERT = 'expert',
}

interface MemberRoleState {
  memberRole: MemberRole;
  setMemberRole: (memberRole: MemberRole) => void;
}

export const useMemberRoleStore = create<MemberRoleState>()(
  persist(
    (set) => ({
      memberRole: MemberRole.NORMAL,
      setMemberRole: (memberRole: MemberRole) => set({ memberRole }),
    }),
    {
      name: 'member-role-storage',
    },
  ),
);
