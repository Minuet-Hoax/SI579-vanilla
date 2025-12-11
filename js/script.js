const tripButton = document.querySelector('#trip-button');
const tripMessage = document.querySelector('#trip-message');

const tripUrl = 'https://example.com';

let isShowing = false;

if (tripButton && tripMessage) {
  tripButton.addEventListener('click', () => {
    isShowing = !isShowing;

    tripMessage.innerHTML = isShowing
    ? `
      <span class="trip-emoji" aria-hidden="true">✈️</span>
      <span class="trip-dots">...</span>
      <span class="trip-text">
        Follow
        <a href="${tripUrl}" target="_blank" rel="noreferrer">this link</a>
        to join my past and future trips.
      </span>
    `
    : '';

    tripButton.textContent = isShowing ? 'Hide travel invite' : 'Show travel invite';
  });
}
