module.exports = (io) => {
  io.on('chat', (socket) => { // 웹소켓 연결 시
    console.log('Socket initiated!');
    socket.on('chat', (data) => { // 클라이언트에서 newScoreToServer 이벤트 요청 시
      console.log('get Chat!');
      io.emit('chat', {message : "쉿"});
    });
  });
};