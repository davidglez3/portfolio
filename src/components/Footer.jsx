import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;