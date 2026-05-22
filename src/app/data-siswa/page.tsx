'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DataSiswaPage() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  }, []);

  const navItems = [
    { name: 'Dasbor', icon: 'dashboard', path: '/dashboard' },
    { name: 'Data Siswa', icon: 'group', path: '/data-siswa' },
    { name: 'Data Nilai Siswa', icon: 'grade', path: '/data-nilai-siswa' },
    { name: 'Repositori Dokumen', icon: 'description', path: '#' },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[50] transition-opacity"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* SideNavBar Shell */}
      <aside
        id="sidebar"
        className={`fixed h-full left-0 top-0 bg-surface-container border-r border-outline-variant flex flex-col z-[60] transition-all-custom ${isCollapsed ? 'sidebar-collapsed collapsed' : 'sidebar-expanded'}`}
      >
        <div className="p-md flex items-center gap-sm overflow-hidden whitespace-nowrap">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              school
            </span>
          </div>
          <div className="hide-collapsed">
            <h1 className="font-headline-md text-headline-md font-bold text-on-surface">ScholarSys</h1>
            <p className="text-[10px] text-on-surface-variant tracking-wider uppercase">Manajemen Institusi</p>
          </div>
        </div>

        {/* Sidebar Toggle Button (Desktop Only) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute -right-3 top-20 bg-primary-container text-on-primary-container w-6 h-6 rounded-full border border-outline-variant items-center justify-center hover:scale-110 active:scale-95 transition-all z-[70]"
        >
          <span className="material-symbols-outlined text-[16px]">
            {isCollapsed ? 'chevron_right' : 'chevron_left'}
          </span>
        </button>

        <nav className="mt-lg flex-grow px-sm space-y-xs overflow-hidden">
          {navItems.map((item) => {
            const isActive = item.path === '/data-siswa';
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`nav-item w-full flex items-center gap-base px-md py-sm transition-colors duration-200 ${isActive
                  ? 'text-primary font-bold bg-primary-container/10 border-r-4 border-primary rounded-r-lg'
                  : 'text-on-surface-variant hover:bg-surface-container-high rounded-lg'
                  }`}
              >
                <span className="material-symbols-outlined shrink-0">{item.icon}</span>
                <span className="font-body-md text-body-md hide-collapsed">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-md mt-auto overflow-hidden">
          <div className="profile-card glass-card p-sm rounded-xl flex items-center gap-sm">
            <img
              alt="Admin Profile"
              className="w-10 h-10 shrink-0 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT19qR_Aa29Ry5p2_F4OYbDRZYlIzwZAENu6rvpZtN7JVGJQ3lG4aZYgJ80W3QvNCiAjholzPedh_nc4zymM6aLtj5OAy6bgvCurm5WDubaa798DlmtTXMo62m57qQg5r4KNVnrwq4CmFHq5fJRCpgeBT-Hphzmpuw4ODEROLnCXZ0dd_oO4ZHnTg-d92Qnm9I2cBk8YBaC4eWAkcZ5dsUPmnSpd5uRyXD5SXNr7RSbWF8XJi-TYQ2JkJrKuX6ZGDsO2csxg7eubE"
            />
            <div className="overflow-hidden hide-collapsed text-left">
              <p className="font-label-md text-label-md truncate">Admin ScholSys</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Principal Office</p>
            </div>
            <Link href="/login" className="ml-auto text-on-surface-variant hover:text-primary transition-all active:scale-95 hide-collapsed">
              <span className="material-symbols-outlined">logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        id="mainContent"
        className={`transition-all-custom flex flex-col min-h-screen ${isCollapsed ? 'main-collapsed' : 'main-expanded'}`}
      >
        {/* TopNavBar Shell */}
        <header className="w-full px-4 md:px-margin-desktop py-4 md:py-6 sticky top-0 z-40 bg-surface/90 backdrop-blur-xl border-b border-outline-variant flex flex-col justify-center shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="md:hidden p-1.5 -ml-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-on-surface tracking-tight">Manajemen Data Siswa</h2>
                <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl mt-1">
                  Kelola dan pantau data institusional siswa secara terpusat.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <button className="w-full md:w-auto justify-center px-4 py-2 bg-primary-container text-on-primary-container text-sm font-bold rounded-lg hover:brightness-110 transition-all flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Unduh Laporan
              </button>
            </div>
          </div>
        </header>

        {/* Page Canvas */}
        <div className="p-4 md:p-margin-desktop flex flex-col gap-6 md:gap-lg">

          {/* Data Table Section */}
          <div className="glass-card rounded-xl border border-outline-variant flex flex-col overflow-hidden shadow-lg">

            {/* Table Action Bar */}
            <div className="p-4 border-b border-outline-variant/50 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-surface-container-low/30">

              {/* Search */}
              <div className="w-full flex-1 xl:max-w-2xl relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-[20px]">search</span>
                <input
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low hover:bg-surface-container border border-outline-variant rounded-xl text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-sm md:font-body-md"
                  placeholder="Cari NISN, nama, atau ID..."
                  type="text"
                />
              </div>

              {/* Filters & Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface-container-low hover:bg-surface-container px-4 py-2.5 rounded-xl border border-outline-variant hover:border-primary transition-all group">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary">filter_list</span>
                      <span className="text-sm font-semibold text-on-surface-variant group-hover:text-primary whitespace-nowrap">Kelas: Semua</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">arrow_drop_down</span>
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface-container-low hover:bg-surface-container px-4 py-2.5 rounded-xl border border-outline-variant hover:border-primary transition-all group">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary">account_tree</span>
                      <span className="text-sm font-semibold text-on-surface-variant group-hover:text-primary whitespace-nowrap">Jurusan: Semua</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">arrow_drop_down</span>
                  </button>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-8 w-[1px] bg-outline-variant mx-1"></div>

                {/* Tambah Button */}
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 w-full sm:w-auto shrink-0">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                  <span className="text-sm md:text-base">Tambah Siswa</span>
                </button>
              </div>
            </div>

            {/* Actual Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-surface-container-highest/50 border-b border-outline-variant">
                  <tr>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">No</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">NISN / ID</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">Nama Siswa</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">Kelas</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">Jurusan</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {/* Row 1 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">01</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928101</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">AD</div>
                        <span className="font-body-md text-on-surface font-semibold">Aditya Dharmawan</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPA 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all" title="Update">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all" title="Delete">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">02</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928102</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">BR</div>
                        <span className="font-body-md text-on-surface font-semibold">Bunga Ramadhani</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPS 3</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">03</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928103</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">CP</div>
                        <span className="font-body-md text-on-surface font-semibold">Candra Pratama</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XI-IPA 2</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">04</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928104</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">DA</div>
                        <span className="font-body-md text-on-surface font-semibold">Dian Anugrah</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPA 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">05</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928105</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">EL</div>
                        <span className="font-body-md text-on-surface font-semibold">Eka Lestari</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">X-Bahasa</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Bahasa &amp; Sastra</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">06</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928106</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">FA</div>
                        <span className="font-body-md text-on-surface font-semibold">Fahri Akbar</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XI-IPA 3</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 7 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">07</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928107</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">GM</div>
                        <span className="font-body-md text-on-surface font-semibold">Gita Maharani</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPS 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 8 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">08</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928108</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">HS</div>
                        <span className="font-body-md text-on-surface font-semibold">Hendra Saputra</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">X-IPA 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 9 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">09</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928109</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">IN</div>
                        <span className="font-body-md text-on-surface font-semibold">Intan Nuraini</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XI-Bahasa</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Bahasa &amp; Sastra</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 10 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">10</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928110</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">JA</div>
                        <span className="font-body-md text-on-surface font-semibold">Jamaludin Arif</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPS 2</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 11 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">11</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928111</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">KK</div>
                        <span className="font-body-md text-on-surface font-semibold">Kurniawan Kusuma</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">X-IPA 2</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 12 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">12</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928112</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">LM</div>
                        <span className="font-body-md text-on-surface font-semibold">Lestari Mega</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XI-IPA 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 13 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">13</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928113</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">MS</div>
                        <span className="font-body-md text-on-surface font-semibold">Maulana Syah</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPS 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 14 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">14</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928114</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">NP</div>
                        <span className="font-body-md text-on-surface font-semibold">Nanda Putri</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">X-Bahasa</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Bahasa &amp; Sastra</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 15 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">15</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928115</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">OR</div>
                        <span className="font-body-md text-on-surface font-semibold">Oki Ramadhan</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XI-IPS 2</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 16 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">16</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928116</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">PW</div>
                        <span className="font-body-md text-on-surface font-semibold">Putri Wulandari</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-IPA 3</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 17 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">17</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928117</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">QA</div>
                        <span className="font-body-md text-on-surface font-semibold">Qori Alfarizi</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">X-IPA 3</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sains &amp; Matematika</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 18 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">18</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928118</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">RF</div>
                        <span className="font-body-md text-on-surface font-semibold">Rizky Febrian</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XI-IPS 3</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 19 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">19</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928119</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">ST</div>
                        <span className="font-body-md text-on-surface font-semibold">Siti Tarwiyah</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">XII-Bahasa</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Bahasa &amp; Sastra</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 20 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">20</td>
                    <td className="px-md py-md font-body-sm text-on-surface font-mono">0045928120</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">TW</div>
                        <span className="font-body-md text-on-surface font-semibold">Tegar Wibowo</span>
                      </div>
                    </td>
                    <td className="px-md py-md">
                      <span className="px-sm py-xs bg-tertiary-container/20 text-tertiary rounded-full text-[12px] font-bold">X-IPS 1</span>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface-variant">Sosial &amp; Ekonomi</td>
                    <td className="px-md py-md text-right">
                      <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-xs hover:bg-primary-container/20 text-primary rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-xs hover:bg-error-container/20 text-error rounded transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-4 py-3 bg-surface-container-high/30 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-label-md text-label-md text-on-surface-variant text-center md:text-left">
                Menampilkan <span className="text-on-surface font-bold">1-20</span> dari <span className="text-on-surface font-bold">1,240</span> siswa
              </p>
              <div className="flex items-center gap-1">
                <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded transition-all disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-[20px]">first_page</span>
                </button>
                <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded transition-all disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <div className="flex items-center gap-1 mx-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary-container text-on-primary-container rounded-lg font-bold text-label-md">1</span>
                  <span className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-lg text-on-surface-variant text-label-md cursor-pointer transition-all">2</span>
                  <span className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-lg text-on-surface-variant text-label-md cursor-pointer transition-all">3</span>
                  <span className="w-8 h-8 flex items-center justify-center text-on-surface-variant text-label-md">...</span>
                  <span className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-lg text-on-surface-variant text-label-md cursor-pointer transition-all">62</span>
                </div>
                <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded transition-all">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
                <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded transition-all">
                  <span className="material-symbols-outlined text-[20px]">last_page</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-auto px-4 md:px-margin-desktop py-md border-t border-outline-variant/30 text-on-surface-variant opacity-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-md text-label-md text-center md:text-left">© 2024 ScholarSys Academic Systems. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
