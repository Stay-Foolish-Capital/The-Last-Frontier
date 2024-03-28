/**
	Represents support for mobile.
	Code by Kento Morishima, 2024
*/
function ToggleButtonState(buttonId, state) {
    document.getElementById(buttonId).setAttribute('aria-pressed', state);
}

function AddButtonListerners(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('touchstart', () => ToggleButtonState(buttonId, 'true'));
    button.addEventListener('touchend', () => ToggleButtonState(buttonId, 'false'));
}

const buttons = ['SButton', 'AButton', 'LeftButton', 'RightButton', 'UpButton', 'DownButton'];

buttons.forEach(AddButtonListerners);

const IsButtonPressed = (buttonId) => (document.getElementById(buttonId).getAttribute('aria-pressed') === 'true');