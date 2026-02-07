import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Era from './components/Era'
import RoleSelect from './components/RoleSelect'



function App() {
  const [view, setView] = useState('home') // home | era | roles | story
  const eras = [
    {
      title: 'The Great Depression',
      years: '1929–1939',
      rating: 'PG',
      status: 'start',
      image:
        'https://images.unsplash.com/photo-1587553906014-b2b4060dd6f5?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'World War II',
      years: '1939–1945',
      rating: 'R',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1571840933517-88a527cd7008?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Apollo 11: Moon Landing',
      years: '1969',
      rating: 'PG',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1614726365930-627c75da663e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Fall of the Berlin Wall',
      years: '1989',
      rating: 'PG-13',
      status: 'soon',
      image:
        'https://assets.pewresearch.org/wp-content/uploads/sites/12/2014/10/FT_14.10.15_berlinWallPhoto.jpg',
      },  
      {
      title: 'Chernobyl Disaster',
      years: '1986',
      rating: 'R',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1590355200067-675cf378fb74?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    {
      title: 'Civil Rights Movement',
      years: '1954–1968',
      rating: 'PG-13',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1576568699714-a3f4950805d5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <div className="app">
      <header className="site-header">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000088/63402711-film-clap-board-cinema-sign-white-icon-on-red-circle.jpg"
            alt="Film icon"
          />
          <div>
            <p className="logo-subtitle">Immersive Era Stories</p>
          </div>
        </div>
        <nav className="site-nav">
          <button className="ghost-btn" type="button" onClick={() => setView('home')}>
            Home
          </button>
          <a href="#now">Now Showing</a>
          <a href="#how">How It Works</a>
          <a href="#stories">Stories</a>
        </nav>
      </header>

      {view === 'home' && (
        <section id="now" className="now-showing">
          <div className="section-title">
            <h3>Now Showing</h3>
            <p>Tap a story tile to enter a different era.</p>
          </div>

          <div className="tile-grid">
            {eras.map((era) => (
              <Tile
                key={era.title}
                era={era}
                onStart={era.status === 'start' ? () => setView('era') : undefined}
              />
            ))}
          </div>
        </section>
      )}

      {view === 'era' && <Era onStart={() => setView('roles')} />}

      {view === 'roles' && <RoleSelect onChoose={() => setView('story')} />}

      {view === 'story' && <StoryScene onBack={() => setView('roles')} />}
    </div>
  )
}

export default App
