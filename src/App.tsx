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
import { ImagePosition } from './features/content/ContentProps';

export default function App() {
  
  return (
    <>
      <Navigation />
      <Slider 
        imageUrl='https://cdn.pixabay.com/photo/2019/08/03/01/58/wstezyk-huntsman-4380924_960_720.jpg'
        titlePartOne='Become a'
        titlePartTwo='Web Developer'
        description='æalkdjf lkajd flkj aldkfj lakjd f'
        buttonText='Start Enrollment'
      />
      <Newsletter
        title='Sign up for our newsletter'
        emailPlaceholder='Enter email'
        buttonText='Subscribe'
      />
      <Cards />
      <Content 
          imageUrl='https://cdn.pixabay.com/photo/2018/05/13/16/19/saxophone-3397023_960_720.jpg'
          imagePosition={ImagePosition.LEFT}
          title='Learn React'
          subtitle='Learn to code React apps'
          description='ldfj lkaj dlæfkj alkdjf lkaj dfkaj dflækja dlkfj laækjdf læk'
          more='Read more.....'
      />
      <Content 
          imageUrl='https://cdn.pixabay.com/photo/2015/09/16/05/08/chess-942241_960_720.jpg'
          imagePosition={ImagePosition.RIGHT}
          title='Learn the Fundamentals'
          subtitle='Learn to code React apps'
          description='ldfj lkaj dlæfkj alkdjf lkaj dfkaj dflækja dlkfj laækjdf læk'
          more='Read more.....'
      />
      <Questions title='Frequently Asked Questions' />
      <Instructors 
        title='Our Instructors'
        description='aldkjf lakjdf lkaj dfasdf'
      />
      <Contact 
        imageUrl='https://cdn.pixabay.com/photo/2010/12/13/10/33/contact-2910_960_720.jpg'
        title='Contact Information'
        addressLabel='Address:'
        address='Álfheimar 11 104 Reykjavík'
        phoneLabel='Phone:'
        phone='775-1727'
        emailLabel='Email:'
        email='kristjan.kristmannsson@gmail.com'
      />
      <Footer />
    </>
  )
}