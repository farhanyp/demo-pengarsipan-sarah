'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dasbor');

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
            const isActive = item.path === '/dashboard';
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
              alt="Dr. Aris Thorne"
              className="w-10 h-10 shrink-0 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGmbLj2lcMt7JEsOqW2p9b6qmoYVmy1ts7Odt2bjI_V76RzhlteJuqIdwNyrjockJLVc6MlzWhkwCZSnnFFG1p7yEAVgXr3R1VsuOc9G7MyFitEwuLlHhUcOZsCvhOkas8gqkCTENu1Pkds-18Rzo6bFNu0PVLBPQd8jAPrgwy8ZTYd08Lqjj4ljStQMylEp-II3UQn4yPWJ1uc4rFZh4DURoZ8VM6J2rtS2WxuS4GGiuuqKYxCm0qHhLOcCorxZFkhn8650bmdFc"
            />
            <div className="overflow-hidden hide-collapsed text-left">
              <p className="font-label-md text-label-md truncate">Dr. Aris Thorne</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Administrator</p>
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
        <header className="w-full px-4 md:px-margin-desktop py-4 md:py-6 sticky top-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant flex flex-col justify-center shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="md:hidden p-1.5 -ml-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-on-surface tracking-tight">Dashboard Utama</h2>
                <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl mt-1">
                  Pantau metrik akademik real-time dan ringkasan performa seluruh siswa.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="p-4 md:p-margin-desktop space-y-6 md:space-y-lg">
          {/* Welcome Header */}


          {/* Metrics Summary Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-gutter">
            {/* Total Siswa */}
            <div className="glass-card p-md rounded-xl flex flex-col justify-between h-[180px]">
              <div className="flex justify-between items-start">
                <div className="p-xs bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">group</span>
                </div>
                <span className="text-xs font-bold text-tertiary">+4.2%</span>
              </div>
              <div>
                <p className="font-headline-xl text-headline-xl text-on-surface">1,284</p>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Total Siswa</p>
              </div>
            </div>
            {/* Total Nilai / Rerata */}
            <div className="glass-card p-md rounded-xl flex flex-col justify-between h-[180px]">
              <div className="flex justify-between items-start">
                <div className="p-xs bg-secondary-container/30 rounded-lg text-secondary">
                  <span className="material-symbols-outlined">grade</span>
                </div>
                <span className="text-xs font-bold text-secondary">Aman</span>
              </div>
              <div>
                <p className="font-headline-xl text-headline-xl text-on-surface">88.5</p>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Rata-rata Nilai</p>
              </div>
            </div>
            {/* Total Dokumen */}
            <div className="glass-card p-md rounded-xl flex flex-col justify-between h-[180px]">
              <div className="flex justify-between items-start">
                <div className="p-xs bg-tertiary-container/30 rounded-lg text-tertiary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">Update Harian</span>
              </div>
              <div>
                <p className="font-headline-xl text-headline-xl text-on-surface">3,492</p>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Total Dokumen</p>
              </div>
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-gutter">
            {/* Performance Summary */}
            <div className="lg:col-span-8 glass-card p-md rounded-xl min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between mb-lg">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Tren Performa Siswa</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Ringkasan distribusi nilai dari modul Data Nilai Siswa.</p>
                </div>
                <div className="flex gap-base">
                  <button className="text-xs font-bold text-on-surface-variant border border-outline-variant px-sm py-1 rounded-full hover:bg-surface-container-high transition-colors">
                    Jurusan
                  </button>
                  <button className="text-xs font-bold text-primary border border-primary px-sm py-1 rounded-full bg-primary/5">
                    Semua
                  </button>
                </div>
              </div>
              <div className="flex-grow flex items-end gap-md pb-md">
                <div className="w-full h-48 border-l border-b border-outline-variant relative">
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 Q10,75 20,85 T40,60 T60,65 T80,40 T100,50" fill="none" stroke="#ffaedf" strokeWidth="2"></path>
                    <path d="M0,85 Q10,80 20,90 T40,70 T60,75 T80,55 T100,65" fill="none" stroke="#a64d79" strokeDasharray="4" strokeWidth="1.5"></path>
                  </svg>
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-on-surface-variant font-bold">
                    <span>JAN</span><span>MAR</span><span>MEI</span><span>JUL</span><span>SEP</span><span>NOV</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-md pt-md border-t border-outline-variant">
                <div>
                  <p className="text-[10px] uppercase text-on-surface-variant mb-xs">Performa Tertinggi</p>
                  <p className="font-body-md text-body-md text-on-surface">MIPA</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-on-surface-variant mb-xs">Pertumbuhan Avg.</p>
                  <p className="font-body-md text-body-md text-on-surface">+12.4%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-on-surface-variant mb-xs">Target Tercapai</p>
                  <p className="font-body-md text-body-md text-on-surface">94.2%</p>
                </div>
              </div>
            </div>

            {/* Recent Documents */}
            <div className="lg:col-span-4 glass-card p-md rounded-xl flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Dokumen Terbaru</h3>
              <div className="space-y-sm flex-grow overflow-y-auto pr-xs">
                {/* Doc 1 */}
                <div className="flex items-center gap-sm p-sm rounded-lg hover:bg-surface-container-high transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-semibold truncate">Laporan_Semester_2024.pdf</p>
                    <p className="text-[10px] text-on-surface-variant">2.4 MB • 2 jam lalu</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
                </div>
                {/* Doc 2 */}
                <div className="flex items-center gap-sm p-sm rounded-lg hover:bg-surface-container-high transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary">
                    <span className="material-symbols-outlined">table_chart</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-semibold truncate">Data_Nilai_CS_Final.xlsx</p>
                    <p className="text-[10px] text-on-surface-variant">1.1 MB • 5 jam lalu</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
                </div>
                {/* Doc 3 */}
                <div className="flex items-center gap-sm p-sm rounded-lg hover:bg-surface-container-high transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary">
                    <span className="material-symbols-outlined">article</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-semibold truncate">Update_Kebijakan_Institusi.docx</p>
                    <p className="text-[10px] text-on-surface-variant">450 KB • Kemarin</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
                </div>
                {/* Doc 4 */}
                <div className="flex items-center gap-sm p-sm rounded-lg hover:bg-surface-container-high transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary">
                    <span className="material-symbols-outlined">folder_zip</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-semibold truncate">Arsip_Foto_Fakultas.zip</p>
                    <p className="text-[10px] text-on-surface-variant">142 MB • 2 hari lalu</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
                </div>
              </div>
              <button className="mt-md w-full py-xs border border-outline-variant rounded-lg text-label-md hover:bg-surface-container-high transition-all">
                Lihat Semua Repositori
              </button>
            </div>
          </section>

          {/* Bottom Table Section */}
          <section className="glass-card rounded-xl overflow-hidden">
            <div className="px-md py-sm border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Siswa Berprestasi</h3>
              <div className="flex items-center gap-sm">
                <span className="text-label-md text-on-surface-variant">Pembaruan terakhir: 14:02 WIB</span>
                <button className="p-xs hover:bg-surface-container-high rounded-full transition-all">
                  <span className="material-symbols-outlined text-sm">refresh</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
                    <th className="px-md py-sm font-semibold">Nama Siswa</th>
                    <th className="px-md py-sm font-semibold">NISN</th>
                    <th className="px-md py-sm font-semibold">Jurusan</th>
                    <th className="px-md py-sm font-semibold">Nilai</th>
                    <th className="px-md py-sm font-semibold">Status</th>
                    <th className="px-md py-sm font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-surface-container-highest transition-colors group">
                    <td className="px-md py-sm flex items-center gap-sm">
                      <img
                        alt="Siswa 1"
                        className="w-8 h-8 rounded-full border border-outline-variant"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWoj7-DTC9llOuEyR0ENgKbitUUgAmUANueLhV1kcwKAuDgBxWvrl-u8cQmfd6ACyiDohBWPg3gOivxrlDKq46N5juHjCC5VDD9Ko_9CcLXt9IZeRn4JJ78a7q79UHPuTWe0nL-3yplPYhLp3jRMaAfjeZd13VVvmjEjZqCscNCynnathFh1HaupUU8CI7zJVOctZkRxIsTMksMg3-NGNaBsPQsuRPRjsTZcuDnxBwdyVWy15kY1TghGr2f2HiiSuaIlSmsHz4s3c"
                      />
                      <span className="font-body-md text-body-md">Sarah Jenkins</span>
                    </td>
                    <td className="px-md py-sm font-body-sm text-on-surface-variant">#202400122</td>
                    <td className="px-md py-sm font-body-sm">MIPA</td>
                    <td className="px-md py-sm font-bold text-primary">96.5</td>
                    <td className="px-md py-sm">
                      <span className="px-xs py-[2px] rounded bg-tertiary-container/20 text-tertiary text-[10px] font-bold uppercase">Honor Roll</span>
                    </td>
                    <td className="px-md py-sm text-right">
                      <button className="text-on-surface-variant group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-highest transition-colors group">
                    <td className="px-md py-sm flex items-center gap-sm">
                      <img
                        alt="Siswa 2"
                        className="w-8 h-8 rounded-full border border-outline-variant"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfAJlQ9A5iHU5ogSWzzh_wN17vHmwXUi8O0twRj9N_EMu2t50z4qE0KCfLIuTXwScL4sdk_keQO8LOuMj9xVxpny3n9Z3hLbGQItO7LQuwolqBfodXNoXPI6tQXYOw3srGCIok2GCpq5-0bHvi6aDzRYUT2dOhArSHW4B7TMjYlenk04TiukfGV3_1pIuITL-i4N4AYI9B17_8V2ea9FUMALCIOv6yrvI5p1lmTEwwWiViKa8SKRt_wo0h2LpsBVSHl4N5OKo4m0"
                      />
                      <span className="font-body-md text-body-md">Marco Verratti</span>
                    </td>
                    <td className="px-md py-sm font-body-sm text-on-surface-variant">#202400451</td>
                    <td className="px-md py-sm font-body-sm">IPS</td>
                    <td className="px-md py-sm font-bold text-primary">94.2</td>
                    <td className="px-md py-sm">
                      <span className="px-xs py-[2px] rounded bg-tertiary-container/20 text-tertiary text-[10px] font-bold uppercase">Honor Roll</span>
                    </td>
                    <td className="px-md py-sm text-right">
                      <button className="text-on-surface-variant group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-highest transition-colors group">
                    <td className="px-md py-sm flex items-center gap-sm">
                      <img
                        alt="Siswa 3"
                        className="w-8 h-8 rounded-full border border-outline-variant"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOiE9AZYB9BTrwEg8jXvo99fI-kfhAOhLRAK39CsQsgolcqp6c-AVuVwB9VTKXZCA7uRk_fs7BxAgBWJ9qnGtSMMdjGktHfRQSvYGtLhSOY0L6MUlntOHOoB1GMGMhX7bcXm6Mmf-dImGC3T2kGSb6D5P8mp_CGYNlAiadQ2fKG2-4DqYep7WGGHBTjJm2xPHK3eCd0bIpnh8Bgn8aG0Fv5hCRGscx_GnTGMrgERc0GGHJSu9eqAbLykPCW69iyztW-lp2kV3gX0A"
                      />
                      <span className="font-body-md text-body-md">Elena Rodriguez</span>
                    </td>
                    <td className="px-md py-sm font-body-sm text-on-surface-variant">#202400982</td>
                    <td className="px-md py-sm font-body-sm">MIPA</td>
                    <td className="px-md py-sm font-bold text-primary">92.8</td>
                    <td className="px-md py-sm">
                      <span className="px-xs py-[2px] rounded bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase">Distinction</span>
                    </td>
                    <td className="px-md py-sm text-right">
                      <button className="text-on-surface-variant group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
