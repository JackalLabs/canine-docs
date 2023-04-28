---
sidebar_position: 2
---
# Encryption in Jackal Protocol

The Jackal Protocol utilizes encryption techniques to ensure the privacy and security of user data. The two primary encryption models within the protocol are file encryption and file-entry encryption. File encryption secures the files themselves, while file-entry encryption focuses on securing the file entries on the blockchain.

## File Encryption

File encryption is essential for protecting the data stored on storage providers within the Jackal Protocol. Before transferring files to storage providers, the user's client encrypts the files using a randomly generated symmetric key. The Advanced Encryption Standard (AES-256) is used for this encryption process, resulting in a securely encrypted file.

![File Encryption Process](/img/jkl_paper/enc1.png)

The symmetric key's secure storage is equally crucial, as exposing it would compromise the file's encryption. The Jackal Chain's File Tree Module serves as a safe and immutable location for storing the encrypted symmetric key alongside the file's location.

## Integrated Encryption Scheme

The protocol uses an Integrated Encryption Scheme based on AES and the Elliptic Curve cryptography, which generates Bech32 addresses for secure key storage.

![Integrated Encryption Scheme](/img/jkl_paper/enc2.png)

To securely store the symmetric key, the protocol encrypts it with the user's public key. This process ensures that only the user with the corresponding private key can decrypt the symmetric key.

![Symmetric Key Decryption](/img/jkl_paper/enc3.png)

When decrypting a file, the user's private key is used to decrypt the symmetric key. Once the symmetric key is retrieved, it can be used to decrypt the file stored on the storage provider, resulting in the original uploaded file.

## File Sharing and Access

To share files with other users, the protocol first decrypts the symmetric key from the chain, then retrieves the external user's public key from the chain, and encrypts the symmetric key with the external user's public key. By appending the newly encrypted symmetric key to the file entry, the external user gains access to the file.

By leveraging encryption techniques for both files and file entries, the Jackal Protocol ensures the privacy, security, and integrity of user data throughout the storage and sharing processes.
