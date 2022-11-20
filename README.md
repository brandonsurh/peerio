# peerio

A dApp that allows people to submit, read and review scholarly articles.

Users subscribe to peerio and are then allowed to access the collection of articles on the data DAO. They are also given the ability to upload their own articles to then be peer reviewed by other members of the data DAO (subscribers). Articles are only accepted into the collection when they pass the peer review as a form of consensus. If the article is passed, the author will be rewarded tokens. Peer reviewers will also be rewarded tokens for their participation in the review and their reputation scores will reflect their activity. Reputation is earned by reviewing an article and getting an article approved. Not providing an accurate review or receiving negative reviews will decrease reputation.

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

