import { Bot, Github, Linkedin, MessageSquare, Monitor, Rocket, Newspaper } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-dark to-dark-100 pt-32 md:pt-40">
        <div className="container text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                O mascote da FURIA direto no seu Telegram
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Receba atualizações sobre partidas, estatísticas e muito mais através do Furico Bot
              </p>
              <a
                href="https://t.me/FuricoFuriosoBot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Bot className="w-5 h-5" />
                Iniciar Bot
              </a>
            </div>
            <div className="flex-1 relative w-full max-w-md">
              <Image
                src="/furico-bot.png"
                alt="Furico Bot"
                width={400}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section bg-dark-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Sobre o Projeto</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300">
            <p className="mb-4">
              O Furico Bot é um protótipo desenvolvido como parte de um desafio técnico, 
              integrando a API da HLTV com a OpenAI para trazer informações relevantes 
              sobre a FURIA diretamente para o Telegram.
            </p>
            <p>
              Este projeto demonstra a capacidade de criar soluções inovadoras que 
              combinam diferentes tecnologias para melhorar a experiência dos fãs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="section bg-dark">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-100 p-6 rounded-xl">
              <Newspaper className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">news</h3>
              <p className="text-gray-300">Receba as ultimas notícias do mundo do esports diretamente do Furico</p>
            </div>
            <div className="bg-dark-100 p-6 rounded-xl">
              <Monitor className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">próxima partida</h3>
              <p className="text-gray-300">Veja informações sobre a próxima partida da FURIA</p>
            </div>
            <div className="bg-dark-100 p-6 rounded-xl">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">estatísticas</h3>
              <p className="text-gray-300">Receba estatisticas atualizadas sobre os jogadores da FURIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="como-usar" className="section bg-dark-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Como Usar</h2>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-dark rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-100">Acesse o Bot</h3>
                  <p className="text-gray-300">Clique no botão "Iniciar Bot" ou acesse @FuricoFuriosoBot no Telegram</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-dark rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-100">Inicie a Conversa</h3>
                  <p className="text-gray-300">Clique em "Start" e interaja com o Furico, pergunte sobre as ultimas notícias, próxima partida, estatísticas. Furico também entra na torcida junto com você.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section id="codigo" className="section bg-dark">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Código Fonte</h2>
          <a
            href="https://github.com/marcustomazelli/bot-furia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Ver no GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section bg-dark-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contato</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-dark-300 border border-dark-200 text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-dark-300 border border-dark-200 text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-dark-300 border border-dark-200 text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 