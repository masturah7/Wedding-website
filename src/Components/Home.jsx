import Carousel from 'react-bootstrap/Carousel';



// importing of images
import img1 from '../assets/slider2.jpg';
import img2 from '../assets/slider1.jpg';
import img3 from '../assets/slider3.jpg';
const slides = [

    {
        imageUrl:img2,
        title: 'Ayodele Abigael Feranmi & Akande Samuel Olalekan',
        description: 'A love story rooted in faith and friendship.'
    },

    {
        imageUrl:img1,
        title: 'We’re Getting Married, February 27, 2026',
        description: 'Join us as we begin our forever together.'
    },
    {
        imageUrl:img3,
        title: 'Two Hearts • One Journey',
        description: 'Celebrating love, commitment, and a lifetime of happiness.'
  }
];

function Home() {
  return (
    <Carousel id='home' fade data-bs-ride="carousel" interval={3000} pause={false}>
        {slides.map((slide, index) => (

        <Carousel.Item key={index} className='slider '>
        <img src={slide.imageUrl} alt={slide.title} />
        <div className="overlay"></div>
        <Carousel.Caption>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
      
      
    </Carousel>
  );
}

export default Home;