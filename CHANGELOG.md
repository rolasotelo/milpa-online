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

## Issue [#22](https://github.com/rolasotelo/la-milpa-online/issues/22)

### Score at the end of turn and final score

    continuation of the implementation of rules plus score history popover.

- Now it's time to compute the score at the end of each turn and at the end of the game. It's a different problem than scoring after playing a card, because it will potentially alter any card in the board and have to consider whole rows and colums and the state of both the milpa and its edges. My first approach will be a function that receives both the current score a board state of a player and returns an updated copy. This function will probably flatten the milpa and edges to find all different present cards and then apply the another function specific to that card that again will receive the whole board and score. (rola@hey.com) Oct 2021

- Making the rules for scoring at the end of the turn and atthe end of the game is now properly set up and thers is a full implementation for corn, blue corn and beans. And just as important as that is the system I implemented for storing and dispalying a score history that is so helpful in card games. I will continue with the remaining card rules in different PR due to this one already being long enough. I just want to mention how cool and helpful underscore has been for messing with arrays and objects (rola@hey.com) Nov 2021

## Issue [#25](https://github.com/rolasotelo/la-milpa-online/issues/25)

### Implement scoring for Chilli and Pumpkin

    Scoring Chilli and Pumpkin at the end of turn and at the end of game. Plus make huitlacoche so you can only add it once to a crop.

- I'm still not sure about how Chilli will work, but I have a good Idea about pumpkin, which I see having its roots spread along your milpa with certain probability for then giving you more points points when harvest depending on the amount of pumpkin flowers in your milpa. This is the reason why I decided the attend the issue that you can add add huitlacoche to a plan more than once because there is no limit for modifiers, but now, you will be able to only have one unique modifier per card (Pumpkin flowers will be modifiers too). (rola@hey.com) Nov 2021

- I was struggling to come with something original for chilli but then this ocurred to me, most of extra points you will get from putting cards together, but what if a subset of cards benefy from being alone, at least for some turns. So contrary to most crops chilli will get more cacao on its harvest turns if it's alone so not every card feels like it plays the same. (rola@hey.com) Nov 2021

- Scoring Chilli at the end of the game was quite simple having already implemented the scoring of blue corn. This time the adjacency needed to be diagonally instead, the the instead of putting conditions for checking top, bottom, left and right, checking topLeft, topRight, bottomLeft and bottomRight was needed. (rola@hey.com) Nov 2021

- I really like the idea of implemeting some randomness in the game when it still gives you room to act on. For example with Pumpkin flowers, you can still decide if you want to put something on top of them or not, I'm still not sure what to do with manure, but I will probably work on that next, because it already hapenned to me that I can not end a game because manure cannot been put ot top of anything but empty slots. (rola@hey.com) Nov 2021

## Issue [#27](https://github.com/rolasotelo/la-milpa-online/issues/27)

### Implement scoring for Cactus and Coatlicue

    Scoring Cactus and Coatlicue at the end of turn and at the end of game. Plus make Manure so you can place it on top of other crops.

- I have a good idea on what to implement for Coatlicue, when the figure is placed in your board then there will be a percentage of gaining her favor each turn and scoring some points, but in the case the figure is placed in the opponents board another slower percentage will have the opposite effect. I plan to discern wheter a firuge is yours or not with a modifier. (rola@hey.com) Nov 2021

- Now that game has more card rules, I have realized that too many limitations on what cards can be played on top of what card can make for the game being solved so I decided to make not only manure playable on top of other cards, but also corns (Corn, Blue Corn and Red Corn) now will be playable on top of each other, but of course the rule of maximum 2 crops in a slot will still be there. This will make posible to have all the end of game corn conditions satisfied more than once each. Next PR will implement Red Corn and Huitlacoche scoring, which will make natural to handle the new corn interactions (rola@hey.com) Nov 2021

## Issue [#29](https://github.com/rolasotelo/la-milpa-online/issues/29)

### Implement scoring for Red Corn and Huitlacoche

    Scoring Red corn and Huitlacoche at the end of turn and at the end of game. Plus make corns playable on top of each other.

- I will start by making changing rules for all corn colors so they can be playable on top of each other, one thing that I need to keep an eye on is how huitlacoche going to interact with an stack of corns. (rola@hey.com) Nov 2021

## Issue [#31](https://github.com/rolasotelo/la-milpa-online/issues/31)

### Implement scoring for Quelites and Cricket

- For Cricket I know I want to make them jump along a column or row in your milpa, depending on where it is put. And on every jump it will destroy a crop. (rola@hey.com) Nov 2021

- The Score for Cricket has been probably the most difficult one that I have implemented and I had already imaginated it was going to be like this, because it has interactions between the milpa and the edges. But perhaps the thing that took me the most time was debugging the method that updates the crickets positions because of me not realizing that I was not deep copying the arrays. (rola@hey.com) Nov 2021

- I'm still not sure what to implement as a rule for scoring quelites and cricket at the end of the game, or even if one is needed, but I will leave for a revision. Next in the list are Tomatillo and Maguey. (rola@hey.com) Nov 2021

## Issue [#33](https://github.com/rolasotelo/la-milpa-online/issues/33)

### Implement scoring for Maguey and Tomatillo

- For Maguey I know that I want to make it so you gain extra cacao for your completed columns or rows, but I'm still not sure of how to make it different from corn. As for Tomatillo I also have a clear idea, this being that tomatillos can not be around each other which requiere a bit of planning but apart from that I'm not sure. (rola@hey.com) Nov 2021

- 2 more cards to go. Tlaloc and Tomatoe and then some balancing. (rola@hey.com) Nov 2021

## Issue [#35](https://github.com/rolasotelo/la-milpa-online/issues/35)

### Implement scoring for Tomatoe and Tlaloc

    Scoring Tomatoe and Tlaloc at the end of turn and at the end of game.

- For Tomatoe I'm thinking that I could make it point extra cacao when it is in the same slot with tomatillo and for the scoring at the end of the game maybe scoring extra tomatoe if you surpass 3 tomatoes, which only one player can make it. As for Tlaloc I know that it should interact with the column or row it is immediatly out of, but I'm still not sure how, maybe It can point for every crop in the row or column and have a bonus if the line is full. (rola@hey.com) Nov 2021

## Issue [#37](https://github.com/rolasotelo/la-milpa-online/issues/37)

### Welcome page revamp: Herobox

    Revamp welcome page herobox with new 3D look.

- This has been a really fruitful PR, a lot of lessons learned regarding fonts, css positioning and svg's, plus internationalization with l18n. I additionally hosted my first svg document in a S3 bucket. In next PR's I will complete the welcome page (Leaderboard and Infographic) plus I will try to put the translations in separate files for then using suspense loading when loading them. (rola@hey.com) Nov 2021

## Issue [#43](https://github.com/rolasotelo/la-milpa-online/issues/43)

### Implement Infographic in Welcome page

    Add infographic section to welcome page.

- Continuation of the work done in the previous PR, now it's turn for the infographic section to be implemented. (rola@hey.com) Nov 2021
