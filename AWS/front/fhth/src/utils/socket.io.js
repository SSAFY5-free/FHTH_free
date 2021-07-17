import socket from "socket.io"

socket.on('newScoreToClient', function (data) {
    scores.push(data);
    updateScoreboard(scores);
  });