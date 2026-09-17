import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRUMACCREG.SHOP - Shop Acc Liên Quân Uy Tín Tự Động',
  description: 'Hệ thống bán tài khoản Liên Quân Reg, Acc trắng thông tin tự động 24/7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-slate-900 text-slate-100 min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
