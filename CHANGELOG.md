# Milpa Client

Changelog for [la-milpa-online](https://github.com/rolasotelo/la-milpa-online)

## Issue [#3](https://github.com/rolasotelo/la-milpa-online/issues/3)

### Persist players and handle disconnections (client side)

    Persist players when reconnecting in the client side

- I plan to check on https://socket.io/get-started/private-messaging-part-2/ to solve the 'persist players' issue. (rola@hey.com)
- I'm still not sure if I should use localStorage or sessionStorage. But for now sessionStorage makes more sense, so I will leave it like that. (rola@hey.com) Sep 2021
- Probably later I will display a timer to let the player know for how long the room will be open, plus disconection messages for the remaining player. (rola@hey.com)
- Now that connections are more or less handled, probably a first functional board will be a natural follow up to this issue. (rola@hey.com) Sep 2021

## Issue [#6](https://github.com/rolasotelo/la-milpa-online/issues/6)

### Create match workflow (client side)

    Create match workflow with simplest layout posible.

- I plan to send an event everytime a player takes a action, this messsage will contain the new 'game status' that will be updated for both palyers in the room. Later I plan to implement the cards and the board with drag and drop functionality, but for now buttons will be enough and only a LQ version of the board will be implemented. (rola@hey.com) Sep 2021
- I wanted to step the difficulty of the game a bit up, so I came with the idea of adding another set of cards with a variety of effects that will allow more interaction between both players. I was thinking in being able to mess with your adversary Milpa and adding a bit of randomness to the game. This new deck of cards will be called 'the market' and the goods being sold there could be things like idols, tools to destroy plants, or other plants like Magueys that could be planted to around your Milpa. (rola@hey.com) Sep 2021
- With this commit I pretty much finished the logic for the interaction between cards and filled or empty slots. I'm actually very happy of how everything turned out at the end. This idea regarding attribute canInteractWith ocurred to me about learning about Attribute Based Access Control Authorization. Next step is to complete the workflow with turn passing between players and finishing the match. (rola@hey) Sep 2021
- Well you can place cards infinetly in any players milpa, I guess that's something jeje. Now in all seriousness I'm quite proud of the system that manages wheter you can play a card or not in a slot. It makes really easy to add new cards. The next step is to have a fully fleshed match with rules and scoring at the end of it. (rola@hey.com) Sep 2021

## Issue [#19](https://github.com/rolasotelo/la-milpa-online/issues/19)

### First match with basic rules and scoring (client side)

    handle events and workflow to be able to complete a match with final scoring and the option to play again.

- I haven't yet think about how the scoring system will work, but I'm planing to have three different moments in which a crop can give points, first will be inmediatly after you play it, it will grant you some points (the easiest to handle), then at the end of each round every crop in your milpa can give you points depending on certain conditions (I will try to design these rules such as they don't depend on others crops in milpa, but things like which turn it is or after certain probability), and finally at the end of the game there will be a final score that will take all sort of things in account, especially the sorrounding crops and all the crops in a single space (the must difficult one). (rola@hey.com) Sep 2021
- I'm currently thinking on what the best way to handle multiple crops and goods in a single slot is, and originally I was thinking about having a main card and adding tags to that card depending on subsequent cards played on the same slot. For example if you play a tomatoe in the same slot where there was already a corn, then the corn will get a 'tomate' tag but there will continue to be just one card. My current idea is having an array instead and I hope that would do the scoring process a bit simplier. It will be easier to get the array of icons to display and I could still identify which crop was first there. I probably also need to set a limit of crops in the same space and the idea of tags with modifiers can still be considered with corn and guitlacoche. (rola@hey.com) Oct 2021
- Start of functional programming overhaul. Enter the Pure Realm. (rola@hey.com) Oct 2021
- Now Milpa and Edges are of type AnyCard[][][] which means that there can be an array of cards on each slot, no limit is provided yet. (rola@hey.com) Oct 2021
- Now a complete game can be played, and although there is no scoring at the end of each turn nor at the end of the game, a good architecture for this has been developed. The other two moments of scoring will be attended on another PR due to this being already quite large. (rola@hey.com) Oct 2021
