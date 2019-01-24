# Github Search App
Version 0.0.1: January 22, 2019.

[GithubSearchApp](https://tc-mwangi.github.io/githubsearch/) is a web app where a user may view my Github profile and search other user's public profiles and repositories.

## Screenshots

![Image](https://github.com/tc-mwangi/github-search-app/blob/master/src/assets/images/screencapture-localhost-49154-landing-2019-01-22-14_26_02.png)


## Live Site

Check out the site at: [GithubSearch](https://tc-mwangi.github.io/github-search-app/).

## Getting Started

### Prerequisites

* [Node](https://nodejs.org/en/).
* [Angular](https://angular.io/).
* [npm](https://www.npmjs.com/) or any other manager you prefer.  

Run these commands to confirm all dependencies are installed:

Node:

```
node -v
```

npm:

```
npm -v
```

Angular:

```
ng --version
```

## Setup/Installation

* Clone directory
* Run the following commands on either Atom or Visual Studio Code Editor.
```
atom .
```
```
code . 
```
or any code editor of your choice.

* serve using:
```
ng serve
```


* Navigate to 'http://localhost:4200/'

## BDD
| Behaviour                              | Input Example     | Output Example    |
|----               | :---:             |---: |
| The program should handle:    | When it receives:     | It should return  |                             
|----               | :---:             |---: |
| click events | click My Profile  | Switch to the profile page. 
| click events | click Search  | Switch to the search page.
| external links | click link icons  | Redirect user to external pages.  
| inputs | github username  | Display github profile info.  
          

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - Code editor.
* [Boostrap](https://getbootstrap.com/) - CSS library.
* [Angular](https://angular.io/) - Web Framework.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

* **Loise Mwangi** - *Initial work* - [GithubSearchApp](https://github.com/tc-mwangi/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/tc-mwangi/github-search-app/blob/master/LICENCE.md) file for details.
