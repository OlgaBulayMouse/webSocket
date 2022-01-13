const ws = new WebSocket('ws://localhost:5000/echo');

ws.addEventListener('open', () => {
  console.log('OPEN');
});

ws.addEventListener('message', message => {
  console.log('MESSAGE: ', message.data);
});

ws.addEventListener('error', () => {
  console.log('ERROR');
});

ws.addEventListener('close', () => {
  console.log('CLOSE');
});

function App() {
  const sendSomeDataToServer = () => {
    ws.send('CLIENT clicked:)');
  }
  return (
    <div onClick={sendSomeDataToServer}>
      Click me to send some data to server!
    </div>
  );
}

export default App;
