import './App.css'
import Navigation from './features/navigation/Navigation';
import Slider from './features/slider/Slider';
import Newsletter from './features/newsletter/Newsletter';
import Cards from './features/card/Cards';
import Content from './features/content/Content';
import Questions from './features/question/Questions';
import Instructors from './features/instructor/Instructors';
import Contact from './features/contact/Contact';
import Footer from './features/footer/Footer';

export default function App() {
  return (
    <>
      <Navigation />
      <Slider />
      <Newsletter />
      <Cards />
      <Content />
      <Questions />
      <Instructors />
      <Content />
      <Contact />
      <Footer />
    </>
  )
}