import TopBar from '../components/TopBar';
import Slider from '../components/Slider';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

const HomePage = () => {
  return (
    <div className="relative">
      <TopBar />
      <Slider images={images} />
    </div>
  );
};

export default HomePage;