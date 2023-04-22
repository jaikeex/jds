import logo from '../src/assets/favicon.png';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', logo);
document.head.appendChild(link);
