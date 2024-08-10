import { Link } from "react-router-dom";

export const Footer = () => {
    const currentDate = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-gray-200 m-0 dark:bg-gray-800 dark:border-b-1 dark:border-gray-200">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentDate} <Link to="/" className="hover:underline">Movimate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.instagram.com/ig_shahab_9?utm_source=qr&igsh=MWM0cW1mNmppa2Vpbw==" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6"  >Instagram</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/mohd-shahab-249281208" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a href="https://x.com/Shahab_786_?t=-be8RGrxQ_sC8NHyakJE-Q&s=03" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">Twitter</a>
            </li>
            <li>
                <a href="https://github.com/gitshahab" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </li>
        </ul>
        </div>
    </footer>
  );
}
