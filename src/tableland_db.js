// Import `connect` from the Tableland library
import { connect } from "@tableland/sdk";

export default async function CreateArticleTable() {
    const tableland = await connect({ network: "testnet", chain: "ethereum-goerli"});
    await tableland.siwe();
    const { article_table } = await tableland.create(
      `id integer primary key, title text, description text, author text, cid text`, // Table schema definition
    );
    console.log( article_table ); 
}