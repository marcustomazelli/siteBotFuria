import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-200 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold text-primary">Marcus Tomazelli</p>
            <p className="text-gray-400">Desenvolvedor Full Stack</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/marcustomazelli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-tomazelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-300 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Furico Bot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 