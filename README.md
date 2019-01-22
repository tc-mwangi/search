# GithubSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## GithubSearch.

## Description
[GithubSearch](https://tc-mwangi.github.io/githubsearch/) is a an app that allows

## Screenshots

### Homepage

![Image](images/screencapture-file-Users-WanjiruMwangi-Desktop-pig-dice-game-html-2018-12-19-05_47_04.png)


## Live Site

[GithubSearch](https://tc-mwangi.github.io/pig-dice/).


## Built With

* [Visual Studio Code](https://atom.io/) - Text editor.
* [Boostrap](https://getbootstrap.com/) - Content library.
* [Angular](https://owlcarousel2.github.io/OwlCarousel2/) - jQuery plugin.

## Behavior Driven Development (BDD)

| User Inputs  | Example Outputs  |
|----          |       :---|
| When it receives:    | It should return:|
|          | |                        
| User clicks "Play". | User is taken to the game console.  |
| Player "Rolls" dice. | Dice face displays a random number from 1-6.  |
| Player rolls a number from 2-6. | The number is added to Player's present score, Player may roll dice again. |
| Player rolls a 1.  | The player's present score displays 0, Console displays "too bad!", Play moves to next Player.  |  
| Player holds/chooses to forfeit roll.  | Points for the round are added to Player's total counter, Play moves to next Player.  |
|  Player's total score is >== 100  | Player wins the game, game play is disabled, Console displays "Player " " wins!".  |
| When player 1 is playing.  | Player 2 cannot Play, Player 2's console is disabled.  |  
| When Player 2 is playing.  |  Player 1 cannot Play, Player 2's console is disabled. |
| User clicks "New Game".  | Game is reset/refreshed, Both counters display 0, Prompt player 1 to start.  |
| Optional Rules  |
| Player rolls a hat-trick (three "6's" in a row)  | The player's present score displays 0, Console displays "too bad!", Play moves to next Player.
| Limit the number of rounds to 10  | Game ends after the set number of rounds  |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

* **Loise Mwangi** - *Initial work* - [GithubSearch](https://github.com/tc-mwangi/pig-dice)

## Acknowledgments

* [Flaticon](https://www.flaticon.com) - Avatar and dice images used.
* [Pencimation](https://www.youtube.com/channel/UCUAL--p3qAa27luR0IYbjZA) - The animated video used.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/tc-mwangi/pig-dice/blob/master/LICENSE) file for details


Setup/Installation Requirements
To start using this project use the following commands:

git clone https://github.com/MaryannGitonga/Github-Search.git
cd Github-Search
Run the following commands on either Atom or Vs Code Editor
atom .
code . 
Behavior Driven Development
The app should should display the user's properties when the SEARCH button is clicked:

Input Example: Input user's name and click SEARCH

Output Example: The respective user's properties are displayed

The app should open the user's Github account on a new tab when VIEW PROFILE ON GITHUB button is clicked:

Input Example: Click VIEW PROFILE ON GITHUB button

Output Example: Respective user's account is opened in a new tab

The app should open the specific repository when the VIEW THIS PROJECT ON GITHUB button is clicked:

Input Example: Click VIEW THIS PROJECT ON GITHUB button

Output Example: Respective user's specific repository is opened in a new tab



