/*
  Contains mocks of BITBOX library calls.
*/

"use strict";

const sinon = require("sinon");

// Inspect JS Objects.
const util = require("util");
util.inspect.defaultOptions = {
  showHidden: true,
  colors: true
};

const addressDetails = [
  {
    balance: 0,
    balanceSat: 0,
    totalReceived: 0,
    totalReceivedSat: 0,
    totalSent: 0,
    totalSentSat: 0,
    unconfirmedBalance: 0,
    unconfirmedBalanceSat: 0,
    unconfirmedTxApperances: 0,
    txApperances: 0,
    transactions: [],
    legacyAddress: "mv9wPCHx2iCdbXBkJ1UTAZCAq57PCL2YQ9",
    cashAddress: "bchtest:qzsfqeqtdk6plsvglccadkqtf0trf2nyz58090e6tt"
  },
  {
    balance: 0,
    balanceSat: 0,
    totalReceived: 0.1,
    totalReceivedSat: 10000000,
    totalSent: 0.1,
    totalSentSat: 10000000,
    unconfirmedBalance: 0,
    unconfirmedBalanceSat: 0,
    unconfirmedTxApperances: 0,
    txApperances: 2,
    transactions: [
      "26564508facb32a5f6893cb7bdfd2dcc264b248a1aa7dd0a572117667418ae5b",
      "85ddb8215fc3701a493cf1c450644c5ef32c55aaa2f48ae2d008944394f3e4d3"
    ],
    legacyAddress: "n3A9BmjrEG3ubJeoAJGwjkymhmqZhGbZR2",
    cashAddress: "bchtest:qrkkx8au5lxsu2hka2c4ecn3juxjpcuz05wh08hhl2",
    addressIndex: 1
  },
  {
    balance: 0.03,
    balanceSat: 3000000,
    totalReceived: 0.03,
    totalReceivedSat: 3000000,
    totalSent: 0,
    totalSentSat: 0,
    unconfirmedBalance: 0,
    unconfirmedBalanceSat: 0,
    unconfirmedTxApperances: 0,
    txApperances: 1,
    transactions: [
      "26564508facb32a5f6893cb7bdfd2dcc264b248a1aa7dd0a572117667418ae5b"
    ],
    legacyAddress: "msnHMfK2pwaBWdE7a7y4f7atdzYahRM7t8",
    cashAddress: "bchtest:qzrg022p8ykc90c27gy808pmz3lzlwk6lg77y3h8fm",
    addressIndex: 2
  },
  {
    balance: 0.06999752,
    balanceSat: 6999752,
    totalReceived: 0.06999752,
    totalReceivedSat: 6999752,
    totalSent: 0,
    totalSentSat: 0,
    unconfirmedBalance: 0,
    unconfirmedBalanceSat: 0,
    unconfirmedTxApperances: 0,
    txApperances: 1,
    transactions: [
      "26564508facb32a5f6893cb7bdfd2dcc264b248a1aa7dd0a572117667418ae5b"
    ],
    legacyAddress: "mjSPWfCwCgHZC27nS8GQ4AXz9ehhb2GFqz",
    cashAddress: "bchtest:qq4sx72yfuhqryzm9h23zez27n6n24hdavvfqn2ma3",
    addressIndex: 3
  }
];

const utxos = [
  [
    {
      txid: "26564508facb32a5f6893cb7bdfd2dcc264b248a1aa7dd0a572117667418ae5b",
      vout: 1,
      scriptPubKey: "76a9142b0379444f2e01905b2dd511644af4f53556edeb88ac",
      amount: 0.06999752,
      satoshis: 6999752,
      height: 1265272,
      confirmations: 644,
      legacyAddress: "mjSPWfCwCgHZC27nS8GQ4AXz9ehhb2GFqz",
      cashAddress: "bchtest:qq4sx72yfuhqryzm9h23zez27n6n24hdavvfqn2ma3",
      hdIndex: 3
    },
    {
      txid: "26564508facb32a5f6893cb7bdfd2dcc264b248a1aa7dd0a572117667418ae5b",
      vout: 0,
      scriptPubKey: "76a9148687a941392d82bf0af208779c3b147e2fbadafa88ac",
      amount: 0.03,
      satoshis: 3000000,
      height: 1265272,
      confirmations: 733,
      legacyAddress: "mjSPWfCwCgHZC27nS8GQ4AXz9ehhb2GFqz",
      cashAddress: "bchtest:qq4sx72yfuhqryzm9h23zez27n6n24hdavvfqn2ma3",
      hdIndex: 2
    }
  ]
];

class mockTransactionBuilder {
  constructor() {
    this.hashTypes = {
      SIGHASH_ALL: 0x01,
      SIGHASH_NONE: 0x02,
      SIGHASH_SINGLE: 0x03,
      SIGHASH_ANYONECANPAY: 0x80,
      SIGHASH_BITCOINCASH_BIP143: 0x40,
      ADVANCED_TRANSACTION_MARKER: 0x00,
      ADVANCED_TRANSACTION_FLAG: 0x01
    };

    this.transaction = new MockTxBuilder();
  }
  addInput() {
    sinon.stub().returns({});
  }
  addOutput() {
    sinon.stub().returns({});
  }
  sign() {
    sinon.stub().returns({});
  }
  build() {
    return new MockTxBuilder();
  }
}

class MockTxBuilder {
  constructor() {}
  toHex() {
    return "mockTXHex";
  }
  build() {
    return this.toHex;
  }
}

const mockTransactions = {
  pagesTotal: 1,
  txs: [
    {
      txid: "6a685a21d3a37226326d71cf1d5902fa5a67c51025713f1b56c1b05cdc38399d",
      version: 2,
      locktime: 0,
      vin: [
        {
          txid:
            "2af38a6749b32e36a2804d95becfafcea12b58fdee840e57c14219fc8d4b724e",
          vout: 0,
          sequence: 4294967295,
          n: 0,
          scriptSig: {
            hex:
              "47304402206265a9a108a8861cca6c75a4702d179e23e061dd18cd6016eb04f38d2c9be7e5022028fcf4133b07d48f6ddaf031dfad1c1de3a1fea66dbe9c05aa63b3b5430c308d412103ac7fa295271559c620d0d24fa6754f14d33768d1af959ed5fd1ada4ce117315b",
            asm:
              "304402206265a9a108a8861cca6c75a4702d179e23e061dd18cd6016eb04f38d2c9be7e5022028fcf4133b07d48f6ddaf031dfad1c1de3a1fea66dbe9c05aa63b3b5430c308d[ALL|FORKID] 03ac7fa295271559c620d0d24fa6754f14d33768d1af959ed5fd1ada4ce117315b"
          },
          addr: "bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf",
          valueSat: 548332238,
          value: 5.48332238,
          doubleSpentTxID: null
        }
      ],
      vout: [
        {
          value: "5.48331192",
          n: 0,
          scriptPubKey: {
            hex: "76a9140ee020c07f39526ac5505c54fa1ab98490979b8388ac",
            asm:
              "OP_DUP OP_HASH160 0ee020c07f39526ac5505c54fa1ab98490979b83 OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf"],
            type: "pubkeyhash"
          },
          spentTxId:
            "44b61963a5cc4485a3f37c1257af94e51d8a6ee78c6a850d82a240317914c622",
          spentIndex: 0,
          spentHeight: 1279681
        },
        {
          value: "0.00000000",
          n: 1,
          scriptPubKey: {
            hex: "6a1408776863000000000000022c000000003352a7f7",
            asm: "OP_RETURN 08776863000000000000022c000000003352a7f7"
          },
          spentTxId: null,
          spentIndex: null,
          spentHeight: null
        },
        {
          value: "0.00000546",
          n: 2,
          scriptPubKey: {
            hex: "76a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac",
            asm:
              "OP_DUP OP_HASH160 3a9b2b0c12fe722fcf653b6ef5dcc38732d6ff51 OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn"],
            type: "pubkeyhash"
          },
          spentTxId: null,
          spentIndex: null,
          spentHeight: null
        }
      ],
      blockhash:
        "000000000000030bee568d677b6b99ee7d2d00b25d1fe95df5e73b484f00c322",
      blockheight: 1276000,
      confirmations: 19952,
      time: 1545783641,
      blocktime: 1545783641,
      valueOut: 5.48331738,
      size: 256,
      valueIn: 5.48332238,
      fees: 0.000005
    },
    {
      txid: "2af38a6749b32e36a2804d95becfafcea12b58fdee840e57c14219fc8d4b724e",
      version: 2,
      locktime: 0,
      vin: [
        {
          txid:
            "1b5b153a227e592259f6d292bfa324587b114a6ec9677ab7c8e40e13ed272d98",
          vout: 0,
          sequence: 4294967295,
          n: 0,
          scriptSig: {
            hex:
              "483045022100c786a60a3770a70ee17afd541d4497c49dc284121a1f07eaeb3a7b61dd6fd0a502203710b755d36e7794ec4f6b333cfe3768b4c9d5b73afd826a8e924396ea893e76412103ac7fa295271559c620d0d24fa6754f14d33768d1af959ed5fd1ada4ce117315b",
            asm:
              "3045022100c786a60a3770a70ee17afd541d4497c49dc284121a1f07eaeb3a7b61dd6fd0a502203710b755d36e7794ec4f6b333cfe3768b4c9d5b73afd826a8e924396ea893e76[ALL|FORKID] 03ac7fa295271559c620d0d24fa6754f14d33768d1af959ed5fd1ada4ce117315b"
          },
          addr: "bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf",
          valueSat: 548333284,
          value: 5.48333284,
          doubleSpentTxID: null
        }
      ],
      vout: [
        {
          value: "5.48332238",
          n: 0,
          scriptPubKey: {
            hex: "76a9140ee020c07f39526ac5505c54fa1ab98490979b8388ac",
            asm:
              "OP_DUP OP_HASH160 0ee020c07f39526ac5505c54fa1ab98490979b83 OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf"],
            type: "pubkeyhash"
          },
          spentTxId:
            "6a685a21d3a37226326d71cf1d5902fa5a67c51025713f1b56c1b05cdc38399d",
          spentIndex: 0,
          spentHeight: 1276000
        },
        {
          value: "0.00000000",
          n: 1,
          scriptPubKey: {
            hex: "6a1408776863000000000000022c00000000336950b3",
            asm: "OP_RETURN 08776863000000000000022c00000000336950b3"
          },
          spentTxId: null,
          spentIndex: null,
          spentHeight: null
        },
        {
          value: "0.00000546",
          n: 2,
          scriptPubKey: {
            hex: "76a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac",
            asm:
              "OP_DUP OP_HASH160 3a9b2b0c12fe722fcf653b6ef5dcc38732d6ff51 OP_EQUALVERIFY OP_CHECKSIG",
            addresses: ["bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn"],
            type: "pubkeyhash"
          },
          spentTxId: null,
          spentIndex: null,
          spentHeight: null
        }
      ],
      blockhash:
        "000000000000030bee568d677b6b99ee7d2d00b25d1fe95df5e73b484f00c322",
      blockheight: 1276000,
      confirmations: 19952,
      time: 1545783641,
      blocktime: 1545783641,
      valueOut: 5.48332784,
      size: 257,
      valueIn: 5.48333284,
      fees: 0.000005
    }
  ],
  legacyAddress: "mkrqNTCLguVKLye5Wg6y5Z3rCrK8Urq9a1",
  cashAddress: "bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn",
  currentPage: 0
};

// Mock Address.Transaction.details()
const mockTransactionDetails = {
  txid: "a77762bb47c130e755cc053db51333bbd64596eefd18baffc08a447749863fa9",
  version: 2,
  locktime: 0,
  vin: [
    {
      txid: "3c17c8e82ff8c5b1eb7109b0c554dfbda4dd7a9b69cc67f7917c77f6eab580c0",
      vout: 1,
      sequence: 4294967295,
      n: 0,
      scriptSig: {
        hex:
          "47304402206109655a258103dbd3bc586ce25265499aec2e7145a85f4b582c142fef389e9902201b2b6decd0424fb007da66fb03c32c1babeabbbfa37cdf61c62f79c6287036e24121024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6be",
        asm:
          "304402206109655a258103dbd3bc586ce25265499aec2e7145a85f4b582c142fef389e9902201b2b6decd0424fb007da66fb03c32c1babeabbbfa37cdf61c62f79c6287036e2[ALL|FORKID] 024d4e7f522f67105b7bf5f9dbe557e7b2244613fdfcd6fe09304f93877328f6be"
      },
      value: 9979504,
      legacyAddress: "mkrqNTCLguVKLye5Wg6y5Z3rCrK8Urq9a1",
      cashAddress: "bchtest:qqafk2cvztl8yt70v5akaawucwrn94hl2yups7rzfn"
    }
  ],
  vout: [
    {
      value: "0.00010000",
      n: 0,
      scriptPubKey: {
        hex: "76a9140ee020c07f39526ac5505c54fa1ab98490979b8388ac",
        asm:
          "OP_DUP OP_HASH160 0ee020c07f39526ac5505c54fa1ab98490979b83 OP_EQUALVERIFY OP_CHECKSIG",
        addresses: ["mgscFRQyQAFpmxDjp1FGX7ALhGa11iqMbU"],
        type: "pubkeyhash"
      },
      spentTxId: null,
      spentIndex: null,
      spentHeight: null
    },
    {
      value: "0.09969256",
      n: 1,
      scriptPubKey: {
        hex: "76a9143a9b2b0c12fe722fcf653b6ef5dcc38732d6ff5188ac",
        asm:
          "OP_DUP OP_HASH160 3a9b2b0c12fe722fcf653b6ef5dcc38732d6ff51 OP_EQUALVERIFY OP_CHECKSIG",
        addresses: ["mkrqNTCLguVKLye5Wg6y5Z3rCrK8Urq9a1"],
        type: "pubkeyhash"
      },
      spentTxId:
        "044eb9debb938c097c9a91e94bfb102c4447a1dc4a85aa1f4a32f28c8241ba61",
      spentIndex: 0,
      spentHeight: 1273102
    }
  ],
  blockhash: "00000000ce6fb45be8b2747e067f30a993ccb4ab9e6b9cebd9ad82ee7c1ef646",
  blockheight: 1273102,
  confirmations: 78,
  time: 1544328309,
  blocktime: 1544328309,
  valueOut: 0.09979256,
  size: 225,
  valueIn: 0.09979504,
  fees: 0.00000248
};

const bitboxMock = {
  Mnemonic: {
    generate: sinon.stub().returns({}),
    wordLists: sinon.stub().returns({}),
    toSeed: sinon.stub().returns({})
  },
  HDNode: {
    fromSeed: sinon.stub().returns({}),
    derivePath: sinon.stub().returns({}),
    toCashAddress: sinon.stub().returns({}),
    toLegacyAddress: sinon.stub().returns({}),
    toKeyPair: sinon.stub().returns({})
  },
  Address: {
    details: sinon.stub().returns(addressDetails),
    utxo: sinon.stub().returns(utxos),
    toLegacyAddress: sinon.stub().returns({}),
    transactions: sinon.stub().returns(mockTransactions),
    toCashAddress: sinon
      .stub()
      .returns(`bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf`)
  },
  TransactionBuilder: mockTransactionBuilder,
  Transaction: {
    details: sinon.stub().returns(mockTransactionDetails)
  },
  BitcoinCash: {
    getByteCount: sinon.stub().returns(250)
  },
  RawTransactions: {
    sendRawTransaction: sinon.stub().returns(`mockTXID`)
  }
};

module.exports = bitboxMock;
