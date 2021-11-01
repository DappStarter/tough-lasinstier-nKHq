require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strategy cost soap column inflict person flock top'; 
let testAccounts = [
"0x0693eaf6518b69da571dc68dd21e90a0f8afc107865afaed92995bc792f4bb43",
"0xfcae7fd5769d8243179c49b5ca9757353cda796acb5e9195ed19f116a7cca1f1",
"0x85e9e05b307ef949dc48da56893d90118bff0b86975ef3b455dc43af39dc4a1b",
"0xcb6c77f81ac2655e81708ea92d79c1e212ba31d0c91e940b49b5aff9e2c6cbf4",
"0x744062a36b24c87ee49a65c1b67325e92c0da66ed96b4bed2f9a34f0b9bd9eed",
"0x31262b0227a00aa852138cbe27f24d64ffad3cd555b84ca57d36b672f6a337ee",
"0x79bf19665f9328c6b2d83535aa295d12afb2f6220c2874f7022fa26479bbb393",
"0xbaabf5b316030de70cfc84b7469d5613426c325e91764094cdda9d3859f66b01",
"0xb64ee91327acb7fb38034a55a70e4f70c82e5227d2035ed8992209746ba2c34d",
"0xc4e65c85b83c095003f8488eeb444d7995a5853009e1b587755fac874431edf9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

