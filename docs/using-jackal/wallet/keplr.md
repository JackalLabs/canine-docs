---
sidebar_position: 2
---
# Keplr Wallet


The Keplr browser extension is a wallet for accessing some Jackal applications in the [Cosmos ecosystem](https://cosmos.network/). Keplr can be used to exchange/manage JKL and other Cosmos-based tokens, participate in governance from the [Jackal Dashboard](/docs/using-jackal/dashboard.md), and use Jackal Storage. 

To use Jackal applications with a __high privacy and security posture__, create a new [Jackal Wallet](/docs/using-jackal/wallet/jackalwallet.md) or import private keys into a Jackal Wallet. 

## Set up Keplr
More information about setting up a Keplr wallet can be found in the official [Keplr Documentation](https://docs.keplr.app/).

Open the Keplr extension on your browser. If you are setting up Keplr for the first time, you can either __create a new account__ or __import an existing account__.

## Create a new account

There are two ways to create a new Keplr account:

__Most Secure__
- Mnemonic/seed phrase.

__Easiest__ 
- One-click login. 

### Create an account with a Seed Phrase

1. In the initial pop-up window, choose Create New Account
    - If you have used Keplr before, click on the silhouette in the upper-right corner, then the blue box labeled __Add Account__, and select __Create New Account__.

2. Choose to have a seed/mnemonic phrase of 24 words, and save the phrase.
    - You can change the derivation path by clicking on Advanced, but this is optional [learn more in the Keplr FAQ](https://faq.keplr.app/)

3. Enter a name for your account. This can be changed later.

4. Once you have transcribed your 24 word seed/mnemonic phrase, click on __Next__

5. To confirm the creation of the new account, click on the words on the right order in which they appear in your seed/mnemonic phrase, and press __Register__.

5. If you have not used Keplr before, set a password for the Keplr extension, and click __Confirm__.

### Import an existing account

 There are several ways to import an existing account:

- via a __mnemonic/seed phrase/private key__.
- via __ledger__.

__Import with a Seed Phrase__

1. In the initial pop-up window, choose Import Existing Account
If you have used Keplr before, click on the silhouette in the upper-right corner, then the blue box labeled __Add Account__, and select __Import Existing Account__.

2. Enter your mnemonic/seed phrase/private key in the appropriate slot, seperating the words with spaces and make sure to check they are spelled correctly.

3. Make sure you have imported the account with the correct derivation path, viewable by clicking on __Advanced__.

    - Normally, the derivation path should be m/44'/…’/0/0/0, but if you see that importing the account via mnemonic on Keplr, the Cosmos Mainnet address displayed is different than yours, it is possible the derivation path ends with 1 (or another number) instead of 0.

    - If this is the case, you just have to start the process over, and replace the last 0 with 1

    - Learn more in the [Keplr FAQ](https://faq.keplr.app/)

4. If you have not used Keplr before, set a password for the Keplr extension, and click __Confirm__.

__Import with Ledger__
1. In the initial pop-up window, choose Import Ledger.
    - If you have used Keplr before, click on the silhouette in the upper-right corner, then the blue box labeled __Add Account__, and select __Import Ledger__.

2. To complete the connection with your Ledger Nano Hard Wallet, follow the steps described in the pop-up that appears. A detailed tutorial can be found [here](https://medium.com/chainapsis/how-to-use-ledger-nano-hardware-wallet-with-keplr-9ea7f07826c2). 

3. If you have not used Keplr before, set a password for the Keplr extension, and click __Confirm__.

## Connecting Keplr to the Jackal Protocol
Once you are signed in to the Keplr extension, you can connect the wallet with the Jackal Protocol. Once on the __Jackal Dashboard__ you will be prompted to connect your Keplr wallet. 