const http = require('http')
const server = http.createServer((req, res) => {
  res.end('fuck')
})
// 添加ws服务
const io = require('socket.io')(server);
let connectionList = [];

const CLIENT_RTC_EVENT = 'CLIENT_RTC_EVENT';
const SERVER_RTC_EVENT = 'SERVER_RTC_EVENT';

const CLIENT_USER_EVENT = 'CLIENT_USER_EVENT';
const SERVER_USER_EVENT = 'SERVER_USER_EVENT';

const CLIENT_USER_EVENT_LOGIN = 'CLIENT_USER_EVENT_LOGIN';
const SERVER_USER_EVENT_UPDATE_USERS = 'SERVER_USER_EVENT_UPDATE_USERS';

function getOnlineUser() {
  return connectionList
    .filter(item => {
      return item.userName !== '';
    })
    .map(item => {
      return {
        userName: item.userName
      };
    });
}

function setUserName(connection, userName) {
  connectionList.forEach(item => {
    if (item.connection.id === connection.id) {
      item.userName = userName;
    }
  });
}

function updateUsers(connection) {
  connection.emit(SERVER_USER_EVENT, {
    type: SERVER_USER_EVENT_UPDATE_USERS,
    payload: getOnlineUser()
  });
}

io.on('connection', function (connection) {

  connectionList.push({
    connection: connection,
    userName: ''
  });

  // 连接上的用户，推送在线用户列表
  // connection.emit(SERVER_USER_EVENT, { type: SERVER_USER_EVENT_UPDATE_USERS, payload: getOnlineUser()});
  updateUsers(connection);

  connection.on(CLIENT_USER_EVENT, function (jsonString) {
    const msg = JSON.parse(jsonString);
    const {
      type,
      payload
    } = msg;

    if (type === CLIENT_USER_EVENT_LOGIN) {
      setUserName(connection, payload.loginName);
      connectionList.forEach(item => {
        // item.connection.emit(SERVER_USER_EVENT, { type: SERVER_USER_EVENT_UPDATE_USERS, payload: getOnlineUser()});
        updateUsers(item.connection);
      });
    }
  });

  connection.on(CLIENT_RTC_EVENT, function (jsonString) {
    const msg = JSON.parse(jsonString);
    const {
      payload
    } = msg;
    const target = payload.target;

    const targetConn = connectionList.find(item => {
      return item.userName === target;
    });
    if (targetConn) {
      targetConn.connection.emit(SERVER_RTC_EVENT, msg);
    }
  });

  connection.on('disconnect', function () {
    connectionList = connectionList.filter(item => {
      return item.connection.id !== connection.id;
    });
    connectionList.forEach(item => {
      // item.connection.emit(SERVER_USER_EVENT, { type: SERVER_USER_EVENT_UPDATE_USERS, payload: getOnlineUser()});
      updateUsers(item.connection);
    });
  });
});

server.listen(3000)
