import './components/Main';
import './styles/index.scss';

// TODO Add transparent clock

// Ik this is dumb but cbs to make it any other way and MSFT has this on their website so I just borrowed it...
/*
const popover = document.createElement('div');
popover.id = 'text-limit-reached-popover';

const removePopover = () => {
    const existingPopover = document.getElementById(popover.id);
    if (existingPopover && existingPopover.parentElement) {
        existingPopover.parentElement.removeChild(existingPopover);
    }
};

removePopover();

popover.style.webkitBorderRadius = '4px';

const message = document.createElement('p');
message.textContent = 'Here is an example popover';

const closeButton = document.createElement('a');
closeButton.textContent = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = '3px';
closeButton.style.right = '8px';
closeButton.style.color = 'white';

closeButton.onclick = () => {
    removePopover();
};

popover.appendChild(message);
popover.appendChild(closeButton);
document.body.appendChild(popover);
*/
