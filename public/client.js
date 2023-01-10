const socket = io();
let name;

do {
    name = prompt('enter userName');
} while (!name);

const textarea = document.querySelector('.textarea');
const messageArea = document.querySelector('.messageArea')

textarea.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        sendMessage(e.target.value);
    }
});



const sendMessage = (msg) => {
    let bio = {
        user: name,
        message: msg.trim()
    }
    
    //send to server

socket.emit('messages', bio);

    //appendMessage


    appendMessage(bio, 'outgoining')
    scrolltoptobottom();
}

const appendMessage = (bio, type) => {
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className, 'message');

    let msgs = `
<h4>${bio.user}</h4>
<p>${bio.message}</p>
`
    mainDiv.innerHTML = msgs;
    messageArea.appendChild(mainDiv);
    textarea.value = '';
}


//receive msg 
 


socket.on('messages', (bio) => {
    appendMessage(bio, 'incoming')
    scrolltoptobottom()
});


const scrolltoptobottom = () => {
        messageArea.scrollTop = messageArea.scrollHeight
    }






















