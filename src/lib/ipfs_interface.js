import { Web3Storage } from "web3.storage";

function getAccessToken () {
    const token = process.env.REACT_APP_WEB3STORAGE_TOKEN
    return token
}

function makeStorageClient () {
    return new Web3Storage({
        token: getAccessToken()
    })
}

export default async function storeFiles (files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    //console.log('stored files with cid: ', cid)
    return cid
}
