import imageFile from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDesc = ['Fundamental', 'Core', 'Crucial', 'Essential'];

function getRandomDesc(maxLength) {
  return Math.floor(Math.random() * (maxLength + 1));
}
export default function Header() {
  const desc = reactDesc[getRandomDesc(3)];
  return (
    <header>
      <img src={imageFile} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are
        going to build!!!
      </p>
    </header>
  );
}