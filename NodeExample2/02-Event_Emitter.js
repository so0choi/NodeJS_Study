"use strict";

"use strict";

// socket.io (채팅) 같은 모듈에서 사용될 수 있는 기능
const EventEmitter = require("events");

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager();

// on : 임의 이벤트 발생했을 때 실행할 동작 지정
chatManager.on("join", () => {
  console.log("New user joined.");
});

// emit : 임의 이벤트 실행 시키는 메서드
chatManager.emit("join");
