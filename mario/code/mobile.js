const IsSButtonPressed = () => (document.getElementById('SButton').getAttribute('aria-pressed') === 'true');

document.getElementById('SButton').addEventListener('touchstart', () => document.getElementById('SButton').setAttribute('aria-pressed', 'true'));
document.getElementById('SButton').addEventListener('touchend', () => document.getElementById('SButton').setAttribute('aria-pressed', 'false'));



const IsAButtonPressed = () => (document.getElementById('AButton').getAttribute('aria-pressed') === 'true');

document.getElementById('AButton').addEventListener('touchstart', () => document.getElementById('AButton').setAttribute('aria-pressed', 'true'));
document.getElementById('AButton').addEventListener('touchend', () => document.getElementById('AButton').setAttribute('aria-pressed', 'false'));



const IsLeftButtonPressed = () => (document.getElementById('LeftButton').getAttribute('aria-pressed') === 'true');

document.getElementById('LeftButton').addEventListener('touchstart', () => document.getElementById('LeftButton').setAttribute('aria-pressed', 'true'));
document.getElementById('LeftButton').addEventListener('touchend', () => document.getElementById('LeftButton').setAttribute('aria-pressed', 'false'));



const IsRightButtonPressed = () => (document.getElementById('RightButton').getAttribute('aria-pressed') === 'true');

document.getElementById('RightButton').addEventListener('touchstart', () => document.getElementById('RightButton').setAttribute('aria-pressed', 'true'));
document.getElementById('RightButton').addEventListener('touchend', () => document.getElementById('RightButton').setAttribute('aria-pressed', 'false'));



const IsUpButtonPressed = () => (document.getElementById('UpButton').getAttribute('aria-pressed') === 'true');

document.getElementById('UpButton').addEventListener('touchstart', () => document.getElementById('UpButton').setAttribute('aria-pressed', 'true'));
document.getElementById('UpButton').addEventListener('touchend', () => document.getElementById('UpButton').setAttribute('aria-pressed', 'false'));



const IsDownButtonPressed = () => (document.getElementById('DownButton').getAttribute('aria-pressed') === 'true');

document.getElementById('DownButton').addEventListener('touchstart', () => document.getElementById('DownButton').setAttribute('aria-pressed', 'true'));
document.getElementById('DownButton').addEventListener('touchend', () => document.getElementById('DownButton').setAttribute('aria-pressed', 'false'));
