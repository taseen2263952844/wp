/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const phoneNumber = '8801571019442';
  const url1 = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('huahahah')}`;
  const url2 = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('myahaa')}`;

  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center gap-3.5 p-4 select-none">
      <a
        href={url1}
        target="_blank"
        rel="noopener noreferrer"
        className="w-56 max-w-[85vw] py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white font-medium text-base sm:text-lg text-center shadow-xs transition duration-150 ease-in-out active:scale-95 flex items-center justify-center cursor-pointer"
      >
        WhatsApp 1
      </a>
      <a
        href={url2}
        target="_blank"
        rel="noopener noreferrer"
        className="w-56 max-w-[85vw] py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white font-medium text-base sm:text-lg text-center shadow-xs transition duration-150 ease-in-out active:scale-95 flex items-center justify-center cursor-pointer"
      >
        WhatsApp 2
      </a>
    </main>
  );
}
