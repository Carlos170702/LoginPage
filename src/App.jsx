import './App.css'
import { Hero } from './components/hero'
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

      <Hero imageSrc={"https://firebasestorage.googleapis.com/v0/b/carrlitos-8c495.appspot.com/o/imagen4.jpg?alt=media&token=a4892dc2-7b44-490b-b1cf-74baf38308d4"} />

      <Slider
        imageSrc={"https://firebasestorage.googleapis.com/v0/b/carrlitos-8c495.appspot.com/o/imagen2.jpg?alt=media&token=730333ff-6069-434f-ae9d-abced1173c71"}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={true}
      />

      <Slider
        imageSrc={"https://firebasestorage.googleapis.com/v0/b/carrlitos-8c495.appspot.com/o/imagen1.jpg?alt=media&token=f2f7b416-0390-411d-8f9e-f14425f1877d"}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={false}
      />

      <Slider
        imageSrc={"https://firebasestorage.googleapis.com/v0/b/carrlitos-8c495.appspot.com/o/imagen3.jpg?alt=media&token=17628cca-7227-414e-b8f6-f091d524c89d"}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={true}
      />

      <Slider
        imageSrc={"https://firebasestorage.googleapis.com/v0/b/carrlitos-8c495.appspot.com/o/imagen4.jpg?alt=media&token=a4892dc2-7b44-490b-b1cf-74baf38308d4"}
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        flipped={false}
      />

    </div>

  )
}

export default App
