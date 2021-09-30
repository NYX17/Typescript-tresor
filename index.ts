import './style.css';
import {Aktie} from './aktie';
import {Schmuck} from './schmuck';
import {Tresor} from './tresor';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<hi>Zum Ausführen Console aufrufen!</h1>';

let a1: Aktie = new Aktie(1, 90.77, 'SMD', 50.0);
let a2: Aktie = new Aktie(2, 90.77, 'SMD', 50.0);
let s1: Schmuck = new Schmuck(1, 90.77, 'Halskette');