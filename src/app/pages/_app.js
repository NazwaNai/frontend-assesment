// pages/_app.js

import '../styles/globals.css'; // Sesuaikan dengan path ke file global CSS Anda
import TopBar from '../components/TopBar'; // Import TopBar
import Slider from '../components/Slider'; // Import Slider

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <TopBar /> {/* Tampilkan TopBar di setiap halaman */}
      <Component {...pageProps} /> {/* Render halaman yang sesuai dengan properti yang diberikan */}
      {/* Tampilkan Slider di setiap halaman jika perlu */}
      <Slider images={['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg']} />
    </div>
  );
}

export default MyApp;
