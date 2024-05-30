import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/City/city';
import { cities } from './cz-cities';

const HomePage = () => ( cities.map(city => <City key={city.name} name={city.name} population={city.population} area={city.area} district={city.district} photo={city.photo}/>))


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Česká města</h1>
      <HomePage />
  </div>
)
