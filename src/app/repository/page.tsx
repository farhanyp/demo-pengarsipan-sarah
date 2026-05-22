'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RepositoryPage() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  }, []);

  const navItems = [
    { name: 'Dasbor', icon: 'dashboard', path: '/dashboard' },
    { name: 'Data Siswa', icon: 'group', path: '/data-siswa' },
    { name: 'Data Nilai Siswa', icon: 'grade', path: '/data-nilai-siswa' },
    { name: 'Repositori Dokumen', icon: 'description', path: '/repository' },
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
            const isActive = item.path === '/repository';
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
                <h2 className="text-xl md:text-2xl font-bold text-on-surface tracking-tight">Repositori Dokumen</h2>
                <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl mt-1">
                  Pusat penyimpanan aman untuk seluruh dokumen institusi.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-high hidden md:flex">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-high hidden md:flex">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <section className="p-4 md:p-margin-desktop flex flex-col gap-6 md:gap-lg flex-1">

          {/* Main Table Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
            <div className="relative w-full flex-1 xl:max-w-2xl group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] group-focus-within:text-primary transition-colors">search</span>
              <input
                className="w-full bg-surface-container-low hover:bg-surface-container border border-outline-variant rounded-xl py-2.5 pl-12 pr-4 text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
                placeholder="Cari dokumen institusi..."
                type="text"
              />
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Tambah Dokumen
            </button>
          </div>

          <div className="glass-card rounded-2xl border border-outline-variant overflow-hidden shadow-lg">
            <div className="p-4 md:p-md border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-low/30">
              <h3 className="font-body-lg text-body-lg font-bold text-on-surface">Unggahan Terbaru</h3>
              <div className="flex gap-2">
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg transition-colors border border-outline-variant/50">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg transition-colors border border-outline-variant/50">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-surface-container-highest/50 border-b border-outline-variant">
                  <tr>
                    <th className="px-md py-md text-label-md text-on-surface-variant/60 font-medium tracking-widest uppercase">No</th>
                    <th className="px-md py-md text-label-md text-on-surface-variant/60 font-medium tracking-widest uppercase">Nama Dokumen</th>
                    <th className="px-md py-md text-label-md text-on-surface-variant/60 font-medium tracking-widest uppercase">Tipe File</th>
                    <th className="px-md py-md text-label-md text-on-surface-variant/60 font-medium tracking-widest uppercase">Tanggal Diunggah</th>
                    <th className="px-md py-md text-label-md text-on-surface-variant/60 font-medium tracking-widest uppercase">Ukuran</th>
                    <th className="px-md py-md text-label-md text-on-surface-variant/60 font-medium tracking-widest uppercase text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {/* Row 1 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">01</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-error">picture_as_pdf</span>
                        <span className="text-body-sm font-semibold text-on-surface">Laporan_Akademik_Semester_Ganjil.pdf</span>
                      </div>
                    </td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">PDF Document</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">12 Okt 2023</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">2.4 MB</td>
                    <td className="px-md py-md text-right">
                      <button className="text-on-surface-variant hover:text-error hover:bg-error-container/20 p-2 rounded transition-all opacity-0 group-hover:opacity-100" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">02</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">table_chart</span>
                        <span className="text-body-sm font-semibold text-on-surface">Data_Nilai_UAS_Final.xlsx</span>
                      </div>
                    </td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">Excel Spreadsheet</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">10 Okt 2023</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">850 KB</td>
                    <td className="px-md py-md text-right">
                      <button className="text-on-surface-variant hover:text-error hover:bg-error-container/20 p-2 rounded transition-all opacity-0 group-hover:opacity-100" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">03</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-tertiary">image</span>
                        <span className="text-body-sm font-semibold text-on-surface">Sertifikat_Akreditasi_Institusi.png</span>
                      </div>
                    </td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">PNG Image</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">08 Okt 2023</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">1.1 MB</td>
                    <td className="px-md py-md text-right">
                      <button className="text-on-surface-variant hover:text-error hover:bg-error-container/20 p-2 rounded transition-all opacity-0 group-hover:opacity-100" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">04</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-error">picture_as_pdf</span>
                        <span className="text-body-sm font-semibold text-on-surface">Surat_Keputusan_Rektor_v2.pdf</span>
                      </div>
                    </td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">PDF Document</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">05 Okt 2023</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">3.7 MB</td>
                    <td className="px-md py-md text-right">
                      <button className="text-on-surface-variant hover:text-error hover:bg-error-container/20 p-2 rounded transition-all opacity-0 group-hover:opacity-100" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">05</td>
                    <td className="px-md py-md">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">article</span>
                        <span className="text-body-sm font-semibold text-on-surface">Panduan_Operasional_Lab.docx</span>
                      </div>
                    </td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">Word Document</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant">01 Okt 2023</td>
                    <td className="px-md py-md text-body-sm text-on-surface-variant font-mono">450 KB</td>
                    <td className="px-md py-md text-right">
                      <button className="text-on-surface-variant hover:text-error hover:bg-error-container/20 p-2 rounded transition-all opacity-0 group-hover:opacity-100" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-4 py-3 bg-surface-container-high/30 border-t border-outline-variant flex items-center justify-between">
              <p className="text-label-md text-on-surface-variant">Menampilkan <span className="text-on-surface font-bold">5</span> dari <span className="text-on-surface font-bold">1,284</span> dokumen</p>
              <div className="flex gap-1">
                <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded border border-outline-variant/30 disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded font-bold text-label-md">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded font-bold text-label-md transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded font-bold text-label-md transition-colors">3</button>
                <span className="w-8 h-8 flex items-center justify-center text-on-surface-variant text-label-md">...</span>
                <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded border border-outline-variant/30 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
