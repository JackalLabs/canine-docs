---
sidebar_position: 2
---
# Encryption
Jackal has two main features that rely on encryption techniques to keep user data private and secure. The two main models are file encryption and file-entry encryption. These reside in different locations within the protocol. The files themselves are stored on Storage Providers, which require files to be encrypted before they are transferred to those machines. The file entries are data structures living directly on-chain in the File Tree blockchain module, again needing to be encrypted on the client's device before being sent to the blockchain. The file encryption model is simply performed by taking the file as raw bytes and randomly generating a key in the user's client. This key is called a Symmetric Key. We then pass both the key and the file through AES256 encryption, which results in an encrypted file that can safely be sent to the Storage-Providers.


![Protocol Overview](/img/jkl_paper/enc1.png)

What is done with this key is equally important as the encryption performed on the file; if the key were made public, all encryption on the file itself would be naught. Therefore, we need to store this key somewhere safe and immutable. This safe place is the Jackal Chain, specifically the File Tree Module. The key is stored in the encrypted form alongside the file's location to make mapping each key to its respective file easy. To get this key into its encrypted form, we use an Integrated Encryption Scheme based on AES and the Elliptic Curve used to generate Bech32 Addresses [Reference]. To do this, the protocol takes a user's public key and encrypts the private key with it.

![Protocol Overview](/img/jkl_paper/enc2.png)

After this, the protocol ends up with an encrypted key that only the user whose public key was used can decrypt. When looking to decrypt a file, the process is reversed and instead uses the user's private key to decrypt the symmetric key. Following the retrieval of the symmetric key, we can decrypt the file stored on the Storage-Providers, leaving us with the originaly uploaded file.

![Protocol Overview](/img/jkl_paper/enc3.png)

When sharing files, we can semi-repeat this process by first decrypting the key from the chain. Then we can grab the public key of an external user from the chain itself and encrypt the files with that key instead of our own. Finally, we append the newly encrypted symmetric key to the file entry giving that user access to the key.