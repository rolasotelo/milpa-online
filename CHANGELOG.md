# Milpa Client

Changelog for [la-milpa-online](https://github.com/rolasotelo/la-milpa-online)

## Issue [#3](https://github.com/rolasotelo/la-milpa-online/issues/3)

### Persist players and handle disconnections (client side)

    Persist players when reconnecting in the client side

- I plan to check on https://socket.io/get-started/private-messaging-part-2/ to solve the 'persist players' issue. (rola@hey.com)
- I'm still not sure if I should use localStorage or sessionStorage. But for now sessionStorage makes more sense, so I will leave it like that. (rola@hey.com)
- Probably later I will display a timer to let the player know for how long the room will be open, plus disconection messages for the remaining player. (rola@hey.com)
- Now that connections are more or less handled, probably a first functional board will be a natural follow up to this issue. (rola@hey.com)

## Issue [#6](https://github.com/rolasotelo/la-milpa-online/issues/6)

### Create match workflow (client side)

    Create match workflow with simplest layout posible.

- I plan to send an event everytime a player takes a action, this messsage will contain the new 'game status' that will be updated for both palyers in the room. Later I plan to implement the cards and the board with drag and drop functionality, but for now buttons will be enough and only a LQ version of the board will be implemented. (rola@hey.com)
- I wanted to step the difficulty of the game a bit up, so I came with the idea of adding another set of cards with a variety of effects that will allow more interaction between both players. I was thinking in being able to mess with your adversary Milpa and adding a bit of randomness to the game. This new deck of cards will be called 'the market' and the goods being sold there could be things like idols, tools to destroy plants, or other plants like Magueys that could be planted to around your Milpa. (rola@hey.com)
