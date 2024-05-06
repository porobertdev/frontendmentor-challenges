const btn = document.querySelector('.notification__action');

btn.addEventListener('click', readNotifications);

function readNotifications(event) {
    const unread = document.querySelectorAll('.card--unread');

    if (unread.length != 0) {
        unread.forEach((notification) => {
            notification.classList.replace('card--unread', 'card--read');
        });

        const counter = document.querySelector('.notification__count');
        counter.textContent = 0;
    }
}
