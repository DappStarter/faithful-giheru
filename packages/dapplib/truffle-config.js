require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain unfold half clog outer gauge'; 
let testAccounts = [
"0xf59817c7405eff2f9ce68c350fe02c735f136adb44ef128409f28071435c762d",
"0xdb7a1f0778472dbe50b92eec8845dff6b08a31054616bab144e80d0a87e58a93",
"0xa935ffc7b4de9c55e5735ce8e64c9b34dcc306ebbe6c54f5da49c416e8e4f8de",
"0x2e0db8adfd5e598b4c7eb9fd7efd6fa8bf406d8da5ff462042c076f603cbc8a4",
"0x9cd0593392090504b1084d29111bbd4aed02e5535d7cc71e2c98d64c04218d19",
"0x568a55f6b58104a837561f1936d7b1c570889bd0d32af10d1fa159b936d9c5fb",
"0x7b8cf2005e9179e61440ab9f85b821384d909f4063107a3ca0f890f6008ed689",
"0x2f5b6ca4daf76b2dbd0dec04fda3c56e24721001234880b11f86e06d2dc04495",
"0x7e986e62f2583b4647917382f8d35a046d56c505ed4ecaa3fe6ffd103dd899bf",
"0x25a3be85466acf1fc468300d00a496285fb52acfa9cf4f8c5fa44ec4a5e29996"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
