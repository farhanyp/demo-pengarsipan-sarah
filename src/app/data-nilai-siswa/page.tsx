'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DataNilaiSiswaPage() {
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
            const isActive = item.path === '/data-nilai-siswa';
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
                <h2 className="text-xl md:text-2xl font-bold text-on-surface tracking-tight">Data Nilai Siswa</h2>
                <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl mt-1">
                  Pantau dan kelola performa akademik serta rekapitulasi nilai.
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

          {/* Bento Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-md">
            <div className="glass-card p-4 md:p-md rounded-xl border border-outline-variant flex flex-col gap-2 hover:border-primary/50 transition-all">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Rata-rata Kelas</p>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-primary font-bold">87.4</span>
                <span className="text-tertiary font-label-md">+2.1%</span>
              </div>
              <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-primary h-full w-[87%] rounded-full"></div>
              </div>
            </div>
            <div className="glass-card p-4 md:p-md rounded-xl border border-outline-variant flex flex-col gap-2 hover:border-primary/50 transition-all">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Nilai Tertinggi</p>
              <span className="font-headline-xl text-headline-xl text-on-surface font-bold">99.0</span>
              <p className="font-label-md text-on-surface-variant">Matematika - XII-IPA 1</p>
            </div>
            <div className="glass-card p-4 md:p-md rounded-xl border border-outline-variant flex flex-col gap-2 hover:border-error/50 transition-all">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Siswa Remedial</p>
              <span className="font-headline-xl text-headline-xl text-error font-bold">4</span>
              <p className="font-label-md text-on-surface-variant">Turun dari 7 bulan lalu</p>
            </div>
            <div className="glass-card p-4 md:p-md rounded-xl border border-outline-variant flex flex-col gap-2 hover:border-tertiary/50 transition-all">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Partisipasi Ujian</p>
              <span className="font-headline-xl text-headline-xl text-tertiary font-bold">100%</span>
              <p className="font-label-md text-on-surface-variant">Semua 1,240 siswa selesai</p>
            </div>
          </div>

          {/* Data Table Section */}
          <div className="glass-card rounded-xl border border-outline-variant flex flex-col overflow-hidden shadow-lg">
            
            {/* Table Action Bar */}
            <div className="p-4 border-b border-outline-variant/50 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-surface-container-low/30">
              
              {/* Search */}
              <div className="w-full flex-1 xl:max-w-xl relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-[20px]">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low hover:bg-surface-container border border-outline-variant rounded-xl text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-sm md:font-body-md" 
                  placeholder="Cari nama siswa atau mata pelajaran..." 
                  type="text" 
                />
              </div>

              {/* Filters & Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">
                <div className="flex bg-surface-container-low hover:bg-surface-container rounded-xl p-1 border border-outline-variant transition-all">
                  <button className="px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md shadow-sm">Ganjil</button>
                  <button className="px-3 py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors rounded-lg">Genap</button>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-surface-container-low hover:bg-surface-container px-4 py-2.5 rounded-xl border border-outline-variant hover:border-primary transition-all group">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary">filter_list</span>
                      <span className="text-sm font-semibold text-on-surface-variant group-hover:text-primary whitespace-nowrap">Kelas: Semua</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">arrow_drop_down</span>
                  </button>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-8 w-[1px] bg-outline-variant mx-1"></div>

                {/* Tambah Button */}
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 w-full sm:w-auto shrink-0">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span className="text-sm md:text-base whitespace-nowrap">Tambah Nilai</span>
                </button>
              </div>
            </div>

            {/* Actual Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-surface-container-highest/50 border-b border-outline-variant">
                  <tr>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">No</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">Nama Siswa</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest">Mata Pelajaran</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest text-center">Nilai Tugas</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest text-center">Nilai Ujian</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest text-center">Nilai Akhir</th>
                    <th className="px-md py-md font-label-md text-label-md text-on-surface-variant opacity-60 uppercase tracking-widest text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {/* Row 1 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">01</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-secondary">AS</div>
                        <div>
                          <p className="font-body-md text-on-surface font-semibold">Aditya Saputra</p>
                          <p className="text-[11px] text-on-surface-variant">ID: 0045928101</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface">Matematika</td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">85</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">90</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="px-sm py-1 bg-primary/10 text-primary border border-primary/20 rounded font-bold text-body-md">88.5</span>
                    </td>
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
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-[10px] font-bold text-tertiary">BR</div>
                        <div>
                          <p className="font-body-md text-on-surface font-semibold">Budi Ramadhan</p>
                          <p className="text-[11px] text-on-surface-variant">ID: 0045928102</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface">Fisika</td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">78</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">82</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="px-sm py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded font-bold text-body-md">80.4</span>
                    </td>
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
                  {/* Row 3 (Remedial) */}
                  <tr className="hover:bg-error-container/10 bg-error/5 transition-colors group">
                    <td className="px-md py-md font-body-sm text-on-surface-variant">03</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">CM</div>
                        <div>
                          <p className="font-body-md text-on-surface font-semibold">Citra Mahendra</p>
                          <p className="text-[11px] text-on-surface-variant">ID: 0045928103</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface">Kimia</td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">60</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">65</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="px-sm py-1 bg-error/10 text-error border border-error/20 rounded font-bold text-body-md">63.0</span>
                    </td>
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
                    <td className="px-md py-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-[10px] font-bold text-primary">DP</div>
                        <div>
                          <p className="font-body-md text-on-surface font-semibold">Dian Pratama</p>
                          <p className="text-[11px] text-on-surface-variant">ID: 0045928104</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-md py-md font-body-sm text-on-surface">Bahasa Inggris</td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">92</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="font-body-md text-on-surface font-bold">95</span>
                    </td>
                    <td className="px-md py-md text-center">
                      <span className="px-sm py-1 bg-primary/10 text-primary border border-primary/20 rounded font-bold text-body-md">94.1</span>
                    </td>
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
                Menampilkan <span className="text-on-surface font-bold">1-4</span> dari <span className="text-on-surface font-bold">1,240</span> entri nilai
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
                  <span className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded-lg text-on-surface-variant text-label-md cursor-pointer transition-all">310</span>
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
          <div className="flex gap-md">
            <Link className="font-label-md text-label-md hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="font-label-md text-label-md hover:text-primary transition-colors" href="#">Terms of Service</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
