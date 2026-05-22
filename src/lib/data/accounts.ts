export type Role = 'superadmin' | 'guru' | 'kepala_sekolah';

export interface Account {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'active' | 'inactive';
}

export const staticAccounts: Account[] = [
  {
    id: 'USR-001',
    name: 'Administrator Utama',
    email: 'superadmin@scholarsys.edu',
    role: 'superadmin',
    status: 'active',
  },
  {
    id: 'USR-002',
    name: 'Budi Santoso, S.Pd',
    email: 'budi.santoso@scholarsys.edu',
    role: 'guru',
    status: 'active',
  },
  {
    id: 'USR-003',
    name: 'Dra. Siti Aminah, M.Pd',
    email: 'siti.aminah@scholarsys.edu',
    role: 'kepala_sekolah',
    status: 'active',
  },
];
