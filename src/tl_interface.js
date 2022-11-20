// Import `connect` from the Tableland library
import { SUPPORTED_CHAINS, connect } from "@tableland/sdk";
import { useEffect } from "react";


export async function createArticleTable() {
    const localTestnet = SUPPORTED_CHAINS.custom
    //tableland = await connect({ network: "testnet", chain: "custom", chainId: 31415}); // connecting to wallabey
      // NOTE -- to use wallaby we will probably need to deploy tableland contracts!! BIG POINTS!!!
    const tableland = await connect({chain: "local-tableland"})  // connecting to local hardhat chain
    await tableland.siwe();
    const article_table = await tableland.create(
      `id integer primary key, title text, description text, author text, cid text`, // Table schema definition
      {
        prefix: `my_sdk_table` // Optional `prefix` used to define a human-readable string
      }
    );
    console.log( "Created Table", article_table ); 

    // save tableland and article table varaibles to local storage 
    localStorage.setItem("tableland", tableland);
    localStorage.setItem("article_table", article_table);
}

export async function insertRow(id, title, description, author, cid) {
    // grab table info from local storage 
    const tableland = localStorage.getItem("tableland");
    const article_table = localStorage.getItem("article_table");
    console.log("retriieved variables", { tableland, article_table })

    const writeRes = await tableland.write(`INSERT INTO ${article_table} (id, title, description, author, cid) VALUES (${id}, '${title}', '${description}', '${author}', '${cid}');`);
}