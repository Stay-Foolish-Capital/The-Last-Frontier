const IsSButtonPressed = () => (document.getElementById('SButton').getAttribute('aria-pressed') === 'true');

document.getElementById('SButton').addEventListener('mousedown', () => document.getElementById('SButton').setAttribute('aria-pressed', 'true'));
document.getElementById('SButton').addEventListener('mouseup', () => document.getElementById('SButton').setAttribute('aria-pressed', 'false'));



const IsAButtonPressed = () => (document.getElementById('AButton').getAttribute('aria-pressed') === 'true');

document.getElementById('AButton').addEventListener('mousedown', () => document.getElementById('AButton').setAttribute('aria-pressed', 'true'));
document.getElementById('AButton').addEventListener('mouseup', () => document.getElementById('AButton').setAttribute('aria-pressed', 'false'));



const IsLeftButtonPressed = () => (document.getElementById('LeftButton').getAttribute('aria-pressed') === 'true');

document.getElementById('LeftButton').addEventListener('mousedown', () => document.getElementById('LeftButton').setAttribute('aria-pressed', 'true'));
document.getElementById('LeftButton').addEventListener('mouseup', () => document.getElementById('LeftButton').setAttribute('aria-pressed', 'false'));



const IsRightButtonPressed = () => (document.getElementById('RightButton').getAttribute('aria-pressed') === 'true');

document.getElementById('RightButton').addEventListener('mousedown', () => document.getElementById('RightButton').setAttribute('aria-pressed', 'true'));
document.getElementById('RightButton').addEventListener('mouseup', () => document.getElementById('RightButton').setAttribute('aria-pressed', 'false'));



const IsUpButtonPressed = () => (document.getElementById('UpButton').getAttribute('aria-pressed') === 'true');

document.getElementById('UpButton').addEventListener('mousedown', () => document.getElementById('UpButton').setAttribute('aria-pressed', 'true'));
document.getElementById('UpButton').addEventListener('mouseup', () => document.getElementById('UpButton').setAttribute('aria-pressed', 'false'));



const IsDownButtonPressed = () => (document.getElementById('DownButton').getAttribute('aria-pressed') === 'true');

document.getElementById('DownButton').addEventListener('mousedown', () => document.getElementById('DownButton').setAttribute('aria-pressed', 'true'));
document.getElementById('DownButton').addEventListener('mouseup', () => document.getElementById('DownButton').setAttribute('aria-pressed', 'false'));