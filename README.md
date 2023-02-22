# One Plant Frontend 🪴

## About The Project

### Background
One Plant is a Web3 project inspired by [Prometheans](https://prometheans.xyz/). It has a plant that survives for 15 minutes without being watered, and to water the plant a user has to mint an NFT within those 15 minutes. The NFTs minted are all different based on the time the user minted them. The aim of the game is to keep the plant alive for as long as possible. The game uses a pay-what-you-want pricing model which enables users to mint an NFT for free, but if they donate at least 0.02ETH, they will be put on a whitelist for future projects by Coin Plants.

### Project Folder Structure
This repository contains the frontend code for the website.
```
├───src
│   ├───abi (contains ABI JSON file)
│   ├───assets (contains images, SVGs, and fonts)
│   ├───components (contains React components)
│   ├───hooks (contains custom hooks)
│   └───utils (contains helper code – especially Web3 interaction code)
├───index.html (based HTML file)
├───public (contains resources for base HTML file)
├───vite.config.ts (contains configurations for vite build tools)
└───package.json (contains dependencies and npm calls)
```

### Built With
The following tools/technologies were used for the frontend code:

- [<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" align="center">](https://vitejs.dev/)
- [<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" align="center">](https://reactjs.org/)
- [<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" align="center">](https://www.typescriptlang.org/)
- [<img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white" align="center">](https://web3js.readthedocs.io/en/v1.8.2/)

## Setup
Follow these steps if you want to run this app locally:

1. Clone the repository into your local directory
    ```
    git clone https://github.com/nkhatri7/one-plant-frontend.git
    ```
2. Install NPM packages
    ```
    npm install
    ```
3. Create `.env` file and create ENV variables (might work without)
    ```
    VITE_ALCHEMY_KEY=
    VITE_ALCHEMY_URL=
    ```
4. Run the app
    ```
    npm run dev
    ```

## Acknowledgements
None of this would be possible without these people:

- Founder: [@themavrek](https://twitter.com/themavrek)
- Artwork: [@ninaspixels](https://twitter.com/ninaspixels)
- Solidity/Smart Contract: [@spartablock](https://twitter.com/spartablock)

Special shoutout to [Gitmoji](https://gitmoji.dev/) for inspiring me to incorporate emojis into my commit messages! I've been using their guide for emojis consistently throughout this project and will continue to do so in future projects.