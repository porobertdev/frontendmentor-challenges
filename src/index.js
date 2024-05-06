import { html, render } from '@github/jtml';
import './css/style.css';

const URL = {
    live: 'https://porobertdev.github.io/frontendmentor-challenges',
    git: 'https://github.com/porobertdev/frontendmentor-challenges',
};
const PATH = './challenges';
const challenges = ['notifications-page'];
const container = document.querySelector('.challenges-container');

function Card(name) {
    const challenge = `${PATH}/${name}/`;

    return html`
        <div class="card">
            <div class="card__top">
                <h1 class="card__name">
                    ${name
                        .split('-')
                        .map((word) => word[0].toUpperCase() + word.slice(1))
                        .join(' ')}
                </h1>
                <div class="card__links">
                    <a href="${URL.live}/${name}/index.html">
                        <img
                            src="./assets/eye.svg"
                            alt="clickable icon to see the challenge"
                        />
                    </a>
                    <a href="${URL.git}/src/challenges/${name}">
                        <img src="./assets/github.svg" alt="GitHub logo"
                    /></a>
                </div>
            </div>

            <div class="card__content">
                <img
                    src="${challenge}/design/solution.png"
                    alt=""
                    class="card__image"
                />
            </div>
        </div>
    `;
}

challenges.forEach((name) => {
    render(Card(name), container);
});
