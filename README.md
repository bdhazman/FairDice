# "Fair" Dice
A dice (2x 6-faced die) simulator that rolls a number based on exact probability rather than complete randomness.

Use it [here!](https://bdhazman.github.io/fairDice/fairDice.html)

Great for Settlers of Catan!

## Why it's needed
Honestly, I was sick of losing in Settlers of Catan due to poorly placed settlements.

But actually, when playing the game I realized that the game Catan would go a lot more as expected if the dice rolls were rolled in the proportion that they are supposed to be based on probability and not on fate/randomness.

My initial idea to solve this issue was to make 36 numbered cards representing the possible rolls in the following proportions:

| Roll | Probability of being rolled |
| ------------- | ------------- |
| 2 | 1/36 |
| 3 | 2/36 |
| 4 | 3/36 |
| 5 | 4/36 |
| 6 | 5/36 |
| 7 | 6/36 |
| 8 | 5/36 |
| 9 | 4/36 |
| 10 | 3/36 |
| 11 | 2/36 |
| 12 | 1/36 |

Since I'm better with programming than arts and crafts I figured the easier option would be to simulate this with a program instead.

## How it does it
Essentially, the program generates a deck of cards that looks like this (below table representations are shortened for the sake of both of us):

| rolls |
| - |
| 2 |
| 3 |
| 3 |
| 4 |
| 4 |
| 4 |
| 5 |
| 5 |
| 5 |
| 5 |
| ...|

then it shuffles it:

| rolls |
| - |
| 3 |
| 4 |
| 10|
| 6 |
| 7 |
| 11|
| 4 |
| 7 |
| 8 |
| 8 |
|...|

Then, on each roll, a card is taken from the top of the deck and put aside. When the deck is empty it is reshuffled.

So, you don't get complete randomness, but you get the correct proportionality according to probability of the dice rolls in a shuffled manner.
