import { html, render } from '@github/jtml';
import './css/style.css';

const URL_GIT =
    'https://github.com/porobertdev/frontendmentor-challenges/tree/gh-pages/src/challenges';

const PATH = './src/challenges';
const challenges = ['notifications-page'];
const container = document.querySelector('.challenges-container');

function Card(name) {
    const challenge = `${PATH}/${name}`;

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
                    <a href="${challenge}/index.html" target="_blank">
                        <img
                            src="./src/assets/eye.svg"
                            alt="clickable icon to see the challenge"
                        />
                    </a>
                    <a href="${URL_GIT}/${name}" target="_blank">
                        <img src="./src/assets/github.svg" alt="GitHub logo"
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
