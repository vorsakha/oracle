<h1 align="center">ORACLE</h1>

## 🚀 Tech Stack

- React Native CLI
- TypeScript
- styled-components
- eslint
- Husky
- Storybook
- Detox

## ✔️ About

Oracle goes through crypto market history to get a glance at the current conditions, depending on specific time frames.

## ✔️ Screens

### Home
![oracle-home-signal](https://user-images.githubusercontent.com/13293669/196155077-8a0f3e41-b167-4450-87ec-4096fe5f9687.gif)

### Search
![oracle-search](https://user-images.githubusercontent.com/13293669/196155228-e7ddf501-e136-4928-b0bd-8098b402545c.gif)


### Favorites
![oracle-favorites](https://user-images.githubusercontent.com/13293669/196155246-da71de47-45e5-4ae0-b972-55451144a8b8.gif)



## ✔️ Install

```
yarn install
yarn husky-init
```

## Possible build Issues

### (Android for linux users) If you end up with the "SDK location not found" issue
Create a local.properties file at the android folder and paste this:
```
sdk.dir = /home/$USER/Android/Sdk
```


### 'cz' is not a git command.
```
git: 'cz' is not a git command. See 'git --help'.
```
Install commitizen as a global npm package
```
npm install -g commitizen
```
