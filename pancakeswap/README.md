# NeonEVM Pancakeswap Demo

This repository contains a set of hardhat scripts to deploy **Pancakeswap** exchange contracts along with **WNEON**,
**ERC20ForSPLMintable** tokens and liquidity pools provisioned with liquidity.

## Install dependencies

Run `npm install`

## Set environment variables

The following environment variables must be set in a `.env` file (see `.env.example`):

- Private key of the deployer account `DEPLOYER_KEY`
- Private key of the Solana payer account `SOLANA_WALLET`
- NeonEVM RPC endpoint `NEON_EVM_NODE`
- Solana RPC endpoint `SOLANA_RPC_NODE`
- NeonEVM faucet API endpoint `NEON_FAUCET`

## Run setup script

```bash
npm run deploy
```

This script will do the following on the `curvestand` network (RPC endpoint set as `NEON_EVM_NODE` environment variable):

- Deploy `WNEON` contract
- Deploy **Pancakeswap** exchange contracts `PancakeFactory` and `PancakeRouter`
- Deploy two `ERC20ForSPLMintable` tokens `TOKEN_A` and `TOKEN_B`
- Deploy two `ERC20ForSPLMintableV2` tokens `TOKEN_Av2` and `TOKEN_Bv2`
- Create `PancakePair`s `WNEON-TOKEN_A`, `WNEON-TOKEN_B`, `TOKEN_A-TOKEN_B`, `TOKEN_Av2-TOKEN_Bv2`
- Provide liquidity to those pairs

Adding contracts addresses to `config.js` file will prevent deployment of those contracts during script execution.

```shell
npm run airdrop
```

This script distributes tokens for all accounts specified in the `.env` config.

Token address: 0x2Fd82A7c5567AbFaFC9f789056Bd1d4070625D60
Token spl address: HcPLHPLk8xZyppjHt4w1H2x1KyK3jDUwQnTLVYsrpyt7
Token name: Token A
Token symbol: TOKEN_A
Token decimals: 9
Token mint authority: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a

Deploying ERC20ForSPLMintable contract to neondevnet...
ERC20ForSPLMintable contract deployed to: 0xF06C25C608ffC48a514E4d9aDD8f69f8f2D14162

Token address: 0xF06C25C608ffC48a514E4d9aDD8f69f8f2D14162
Token spl address: BANCA8FsU5v9uhgCPb8dUQtZJK4KDbxmhViQwVZgosQG
Token name: Token B
Token symbol: TOKEN_B
Token decimals: 12
Token mint authority: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a

Deploying ERC20ForSPLMintable contract to neondevnet...
ERC20ForSPLMintable contract deployed to: 0x58808E2ec3d324919b2618950a3c664d7502c2c1

Token address: 0x58808E2ec3d324919b2618950a3c664d7502c2c1
Token spl address: 54HroihBWxX47H5zopmpnxSx7n4m4CMHFABszpzTBVJR
Token name: Token A (v2)
Token symbol: TOKEN_Av2
Token decimals: 9
Token mint authority: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a

Deploying ERC20ForSPLMintable contract to neondevnet...
ERC20ForSPLMintable contract deployed to: 0x90f26d36A8d146D02E44529897848c3a802aAc42

Token address: 0x90f26d36A8d146D02E44529897848c3a802aAc42
Token spl address: BJZYGboTN6LdszquApiUZYGKhPLYyFY2aVT18iNfCTWb
Token name: Token B (v2)
Token symbol: TOKEN_Bv2
Token decimals: 9
Token mint authority: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployed new WNEON/TOKEN_A pair at address: 0x0000000000000000000000000000000000000000
Minted 2000.0 WNEON to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer WNEON balance: 0.0
Approved PancakeRouter to spend 0.0 WNEON on behalf of deployer
PancakeRouter WNEON allowance: 0.0
Minted 7333.0 TOKEN_A to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer TOKEN_A balance: 0.0
Approved PancakeRouter to spend 7333.0 TOKEN_A on behalf of deployer
PancakeRouter TOKEN_A allowance: 7333.0
Added liquidity to WNEON/TOKEN_A PancakePair
--> Pair reserves: [0, 0]
--> LP address: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
--> LP balance: 0.0
Deployed new WNEON/TOKEN_B pair at address: 0x0000000000000000000000000000000000000000
Minted 5300.0 WNEON to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer WNEON balance: 0.0
Approved PancakeRouter to spend 0.0 WNEON on behalf of deployer
PancakeRouter WNEON allowance: 0.0
Minted 14530.0 TOKEN_B to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer TOKEN_B balance: 0.0
Approved PancakeRouter to spend 14530.0 TOKEN_B on behalf of deployer
PancakeRouter TOKEN_B allowance: 14530.0
Added liquidity to WNEON/TOKEN_B PancakePair
--> Pair reserves: [0, 0]
--> LP address: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
--> LP balance: 0.0
Deployed new TOKEN_A/TOKEN_B pair at address: 0x0000000000000000000000000000000000000000
Minted 6345.0 TOKEN_A to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer TOKEN_A balance: 0.0
Approved PancakeRouter to spend 0.0 TOKEN_A on behalf of deployer
PancakeRouter TOKEN_A allowance: 0.0
Minted 53809.0 TOKEN_B to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer TOKEN_B balance: 53809.0
Approved PancakeRouter to spend 53809.0 TOKEN_B on behalf of deployer
PancakeRouter TOKEN_B allowance: 53809.0
Added liquidity to TOKEN_A/TOKEN_B PancakePair
--> Pair reserves: [0, 0]
--> LP address: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
--> LP balance: 0.0
Deployed new TOKEN_Av2/TOKEN_Bv2 pair at address: 0x0000000000000000000000000000000000000000
Minted 30000.0 TOKEN_Av2 to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer TOKEN_Av2 balance: 0.0
Approved PancakeRouter to spend 0.0 TOKEN_Av2 on behalf of deployer
PancakeRouter TOKEN_Av2 allowance: 0.0
Minted 65000.0 TOKEN_Bv2 to deployer address 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
Deployer TOKEN_Bv2 balance: 65000.0
Approved PancakeRouter to spend 65000.0 TOKEN_Bv2 on behalf of deployer
PancakeRouter TOKEN_Bv2 allowance: 65000.0
Added liquidity to TOKEN_Av2/TOKEN_Bv2 PancakePair
--> Pair reserves: [0, 0]
--> LP address: 0xAaA11D5b2873af87c887CaaBE05109e903F1be6a
--> LP balance: 0.0
# week-7
