// Import `connect` from the Tableland library
import { connect } from "@tableland/sdk";

// defining to use in other functions
var tableland;
var article_table;

export async function createArticleTable() {
    tableland = await connect({ network: "testnet", chain: "ethereum-goerli"});
    await tableland.siwe();
    article_table = await tableland.create(
      `id integer primary key, title text, description text, author text, cid text`, // Table schema definition
      {
        prefix: `my_sdk_table` // Optional `prefix` used to define a human-readable string
      }
    );
    console.log( article_table ); 
}

export async function insertRow(id, title, description, author, cid) {
    const writeRes = await tableland.write(`INSERT INTO ${article_table} (id, title, description, author, cid) VALUES (${id}, '${title}', '${description}', '${author}', '${cid}');`);
}