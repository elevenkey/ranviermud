'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return {
    usage: 'who',
    command: (state) => (args, player) => {
      Broadcast.sayAt(player, "<bold><red>                  在线名单</bold></red>");
      Broadcast.sayAt(player, "<bold><red>===============================================</bold></red>");
      Broadcast.sayAt(player, '');

      let numPlayers = 0;
      state.PlayerManager.players.forEach((otherPlayer) => {
        numPlayers++;
        Broadcast.sayAt(player, ' * ' + otherPlayer.name);
      });

      Broadcast.sayAt(player, '共 ' + numPlayers + ' 名玩家在线');
    }
  };
};
