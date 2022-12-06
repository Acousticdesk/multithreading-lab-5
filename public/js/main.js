const name = window.prompt('What is your name?');
const party = window.prompt('Please, enter the party name');
const secret = window.prompt('Please, enter your secret');

const socket = io(undefined, {
  query: {
    name,
    party,
    secret
  }
});

socket.on('secret-shared', function(msg) {
  console.log(msg);
  if (msg.name === party) {
    window.secret.innerHTML = `${msg.name} says: ${msg.secret}`;
  }
});
