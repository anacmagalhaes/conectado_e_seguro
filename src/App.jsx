function App() {

  return (
    <>
      <div className="bg-blue-950 text-white min-h-screen font-sans">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-blue-900 shadow-md sticky top-0 z-50">
          <h1 className="text-xl font-bold mr-5">Conectado e Seguro</h1>
          <nav className="space-x-4">
            <a href="#video" className="hover:text-yellow-300">Vídeo</a>
            <a href="#dicas" className="hover:text-yellow-300">Dicas</a>
            <a href="#sobre" className="hover:text-yellow-300">Sobre</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="text-center px-6 py-16 bg-blue-800" id="video">
          <h2 className="text-3xl font-bold mb-4">Segurança Digital para Todos</h2>
          <p className="mb-6 text-lg">Mesmo que você não seja da TI, proteger seus dados é essencial!</p>
          <div className="aspect-video max-w-3xl mx-auto">
            <iframe
              className="w-full h-full rounded-lg"
              
        
              src="https://www.youtube.com/embed/H_mX-X23Gc0"
              title="Vídeo de Segurança Digital"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Dicas */}
        <section id="dicas" className="px-6 py-12 bg-white text-blue-950">
          <h2 className="text-2xl font-bold text-center mb-8">Dicas Rápidas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🔐",
                text: "Use senhas fortes e únicas",
              },
              {
                icon: "📩",
                text: "Não clique em links suspeitos",
              },
              {
                icon: "🔑",
                text: "Ative a verificação em duas etapas",
              },
              {
                icon: "🧑‍💻",
                text: "Use guia anônima em PCs públicos",
              },
              {
                icon: "📶",
                text: "Evite Wi-Fi público para dados sensíveis",
              },
              {
                icon: "🛡️",
                text: "Ative a autenticação em 2 fatores",
              },
            ].map((dica, i) => (
              <div key={i} className="bg-blue-100 rounded-lg p-4 shadow-md flex items-start">
                <div className="text-3xl mr-4">{dica.icon}</div>
                <p className="text-lg font-medium">{dica.text}</p>
              </div>
            ))}
          </div>
        </section>



        {/* Sobre */}
        <section id="sobre" className="px-6 py-12 bg-blue-900 text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Sobre a Campanha</h2>
          <p className="max-w-3xl mx-auto text-center text-lg">
            Esta campanha foi desenvolvida por uma estudante do curso de <strong>Sistemas de Informação</strong>, com o objetivo de levar a importância da segurança digital a toda comunidade acadêmica, de forma simples, prática e acessível.
          </p>
        </section>

        {/* Rodapé */}
        <footer className="bg-white text-blue-950 text-center px-6 py-6">
          <p className="mb-2">Segurança digital é pra todos. Começa com você.</p>
          <p className="text-sm">© 2025 - Campanha Conectado e Seguro | Desenvolvido por uma aluna de Sistemas de Informação</p>
        </footer>
      </div>

    </>
  )
}

export default App
