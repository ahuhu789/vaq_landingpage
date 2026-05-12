import './style.css';
import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';
import { initCarousel } from './components/carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    initCarousel();
});
