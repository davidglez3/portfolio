import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre mí', path: '/about' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Mi Portfolio
        </Link>
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-gray-600 hover:text-gray-900 transition ${
                  router.pathname === item.path ? 'font-semibold text-gray-900' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;