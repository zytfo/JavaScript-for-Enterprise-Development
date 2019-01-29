# Steam Inventory Explorer
>Artur Khayaliev, BS4-DS

You can use this tool to explore steam users' inventories using different parameters, such as a name of the game (e.g. Team Fortress 2, Dota 2, CS:GO, etc.), a number of played hours, a number of games in user's library and so on.

## 1. API choice
I will use [Steam Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API) to get all data I need from Steam servers.

## 2. Use case and functionality
As I mentioned above, a user will be able to explore steam inventories using various parameters, such as a name of the game, a number of played hours, etc. Exploring of accounts will be implemented by user's steam ID (I guess) and it will grow in depth by some number: e.g. we want to find invetory of [this guy](http://steamcommunity.com/profiles/76561198167602704) and his friends, and friends of his friends and so on (that's why we define __depth__).

#### Why?
Since I traded a lot for last 5 years, almost every time I did it manually, i.e. I had to find many players one by one, which was very uncomfortable. I suggest an application, that will allow user to find more than one trader, as well as searching by certain item(s).

## 3. Architecture
How do I see it atm:
* Main screen will contain:
    1. Field which requires user's Steam API key.
    2. A few fields to fill, like name of the game, desired items (maybe their prices, that will be parsed from backpack.tf, etc), number of played hours, __depth__ of search in friends list, etc.
    3. Proxy lists (TBD), because, as far as I know, Steam bans IP-addresses if it gets more than 10 queries in small period of time.
* A page with results of searching and available actions, such as *add to friends*, open Steam profile and so on.
* Maybe some additional page which I will think about during development. 