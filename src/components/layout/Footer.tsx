export default function Footer() {
  return (
    <footer
      className="bg-gray-100 dark:bg-gray-900
        border-t border-gray-200 dark:border-gray-700
        text-center py-6 px-4
        text-gray-500 dark:text-gray-400 text-sm"
    >
      <p>
        &copy; {new Date().getFullYear()} Batuhan Yasar Ozkan &mdash; Firat
        Universitesi, Yazilim Muhendisligi
      </p>
      <p className="mt-1 text-xs">
        React + TypeScript + Tailwind CSS ile olusturuldu.
      </p>
    </footer>
  );
}
