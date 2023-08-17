// In most BTC-derived coins, the below parameters can be found in the 'src/chainparams.cpp' Mainnet configuration.
// These below params share the same names as the CPP params, so finding and editing these is easy-peasy!
// <[network_byte] [32_byte_payload] [0x01] [4_byte_checksum]>
export const PRIVKEY_BYTE_LENGTH = 38;

export const COIN_DECIMALS = 8;
export const COIN = 10 ** 8;

/** The maximum gap (absence of transactions within a range of derived addresses) before an account search ends */
export const MAX_ACCOUNT_GAP = 20;

/* Internal tweaking parameters */
// A new encryption password must be 'at least' this long.
export const MIN_PASS_LENGTH = 6;

/** BIP21 coin prefix */
export const BIP21_PREFIX = 'fsc';

/* chainparams */
export const cChainParams = {
    current: null,
    main: {
        name: 'mainnet',
        collateralInSats: 10000 * COIN,
        isTestnet: false,
        TICKER: 'FSC',
        PUBKEY_PREFIX: ['F'],
        STAKING_PREFIX: 'S',
        PUBKEY_ADDRESS: 35,
        SECRET_KEY: 18,
        BIP44_TYPE: 119,
        BIP44_TYPE_LEDGER: 77,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 51472,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'rockdev', url: 'https://explorer.fsocietychain.com' },
        ],
        Nodes: [{ name: 'Duddino', url: 'ns1.fsocietychain.com' }, 
		{ name: 'Zuddino', url: 'https://ns1.fsocietychain.com' },
		],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        budgetCycleBlocks: 43200,
        proposalFee: 50 * COIN,
        maxPaymentCycles: 6,
        maxPayment: 10 * 43200 * COIN, // 43200 blocks of 10 PIV
    },
    testnet: {
        name: 'testnet',
        collateralInSats: 10000 * COIN,
        isTestnet: true,
        TICKER: 'tPIV',
        PUBKEY_PREFIX: ['x', 'y'],
        STAKING_PREFIX: 'W',
        PUBKEY_ADDRESS: 139,
        SECRET_KEY: 239,
        BIP44_TYPE: 1,
        BIP44_TYPE_LEDGER: 1,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 51474,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'rockdev', url: 'https://testnet.rockdev.org' },
        ],
        Nodes: [{ name: 'Duddino', url: 'https://rpc.duddino.com/testnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        budgetCycleBlocks: 144,
        proposalFee: 50 * COIN,
        maxPaymentCycles: 20,
        maxPayment: 10 * 144 * COIN, // 144 blocks of 10 tPIV
    },
};
// Set default chain
cChainParams.current = cChainParams.main;
