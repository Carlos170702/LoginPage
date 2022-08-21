import './App.css'
import { Hero } from './components/hero'
import imagen1 from './assets/imagen1.jpg';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import { Slider } from './components/Slider';
import { NavBar } from './components/NavBar';

function App() {

  const navlinks = [
    { id: 1, url: '#', title: 'home' },
    { id: 2, url: '#', title: 'Images' },
    { id: 3, url: '#', title: 'Contact' },
  ]

  return (
    <div className="App">
      <NavBar navlinks={navlinks} />

      <Hero imageSrc={imagen1} />

      <Slider
        imageSrc={imagen1}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={true}
      />

      <Slider
        imageSrc={imagen2}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={false}
      />

      <Slider
        imageSrc={imagen3}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={true}
      />

      <Slider
        imageSrc={imagen4}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={false}
      />

    </div>

  )
}

export default App
