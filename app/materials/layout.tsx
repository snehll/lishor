"use client";

export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>{`
        /* Hide navbar and footer on materials pages */
        nav,
        footer {
          display: none !important;
        }

        @media print {
          nav,
          footer {
            display: none !important;
          }
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            margin: 10mm;
            size: A4;
          }
        }
      `}</style>
      {children}
    </>
  );
}
