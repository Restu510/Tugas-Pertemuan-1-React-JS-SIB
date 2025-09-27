export default function Home() {
    return (
      <div className="w-100">
        {/* Hero Section */}
        <section className="bg-light text-dark text-center p-5 w-100">
          <div className="container-fluid">
            <h1 className="display-4 fw-bold">Welcome to My Website</h1>
            <p className="lead">Ini adalah halaman Home yang sudah dirapikan.</p>
            <img src="/vite.svg" alt="hero" width="100" />
          </div>
        </section>
  
        {/* Content Section */}
        <section className="container-fluid my-5">
          <h2 className="fw-bold">Tentang Kami</h2>
          <p>
            Kami adalah tim kreatif yang mengembangkan aplikasi berbasis React dan Bootstrap.
          </p>
        </section>
      </div>
    )
  }
  