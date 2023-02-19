# peerio

A dApp that allows people to submit, access and review scholarly articles.

Users subscribe to peerio and are allowed the option to view scholarly articles within the data DAO or upload articles of their own. Submitted articles must be peer reviewed by other subscribers as a form of consensus. Reputation can be earned by reviewing an article and getting an article approved. Not providing an accurate review or receiving negative reviews will decrease reputation.

The articles are stored on IPFS using web3.storage while the CID's of this data is stored using Tableland.

The proccess of peer-reviewing helps to reduce:
- Plagiarism
- Limited and small review groups
- Lack of input from other  researchers working on related topic
- Unnecessary duplication of efforts
- A need for others to validate and replicate findings

## How it's Made
Peerio is made from React, IPFS, web3.storage, Tableland, and runs on the FEVM. Our smart contract is coded in Solidity which handles all of the backend for our peer review process of voting and peer review proposals. When a file is uploaded it is stored through IPFS's interface in a decentralized manner. This was done using Protocol Lab's service web3.storage. We also used Tableland to save information about the article while the actual file is stored on web3.storage.

The process of peer-reviewing reduces:
- Plagiarism
- Limited and small review groups
- Lack of input from other reseachers working on related topic
- Unnecessary duplication of efforts
- A need for others to validate and replicate findings

Peerio aims to provide solutions to these problems.

To launch a local version of our app you can run:

### `npm install`
Installs all the packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

