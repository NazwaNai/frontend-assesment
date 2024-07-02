import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShoppingCart, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-transparent backdrop-blur-md z-10">
      <Link href="/">
        <a className="text-white">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white text-xl" />
        </a>
      </Link>
      <div className="flex space-x-4">
        <Link href="/cart">
          <a className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl" />
          </a>
        </Link>
        <FontAwesomeIcon icon={faShareAlt} className="text-white text-xl" />
      </div>
    </div>
  );
};

export default TopBar;