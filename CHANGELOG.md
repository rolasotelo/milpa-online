# Milpa Client

Changelog for [la-milpa-online](https://github.com/rolasotelo/la-milpa-online)

## Issue [#3](https://github.com/rolasotelo/la-milpa-online/issues/3)

### Persist players and handle disconnections (client side)

    Persist players when reconnecting in the client side

- I plan to check on https://socket.io/get-started/private-messaging-part-2/ to solve the 'persist players' issue.
- I'm still not sure if I should use localStorage or sessionStorage. But for now sessionStorage makes more sense, so I will leave it like that.
- Probably later I will display a timer to let the player know for how long the room will be open, plus disconection messages for the remaining player.
- Now that connections are more or less handled, probably a first functional board will be a natural follow up to this issue.
