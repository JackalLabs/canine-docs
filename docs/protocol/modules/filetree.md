---
sidebar_position: 8
---
# Filetree Module

## Overview
The Jackal Filetree module is responsible for organizing and managing user files in a secure and user-friendly way. When a user uploads a file using the Storage module, the file is only accessible from the File ID (FID), which can be challenging to remember for every file uploaded to Jackal. Additionally, every single upload would be required to be public, or the user would need to keep track of every symmetric key used to encrypt the files and manually map them to the FIDs. To address this issue, the File Tree module implements a tree structure to store each file as an entry in the tree. Organizing this structure is also trivial as we can assign children to pseudo files that we call folders. Finally, to keep track of encryption keys, the protocol maps every file to its respective key, emphasizing the security and privacy posture that the File Tree module enables.

![Protocol Overview](/img/jkl_paper/filetree1.png)


## Folder Abstraction
These, of course, are all abstractions of what's actually under the hood. The File Tree module doesn't actually handle any of the folder logic; the system believes it is storing files that act as metadata stores, which then update to reflect changes in folders. This gives the user experience the feeling that folders and files are separate entities in the tree, but in reality, they are identical.

## File Entry Structure
Storing file entries on-chain is a challenge since the chain itself is public. This requires the use of client-side encryption before uploading data to the chain itself. The main component of a file is location (Address), allowing users to query the rest of the data from the file. You can think of the location as a key in a traditional key-value store or a path in bucket-based storage. The address is hashed using SHA256 to ensure it is impossible to retrieve the plain-text representation of the file name while still being able to query the file using its given name.

![Protocol Overview](/img/jkl_paper/filetree2.png)

The second most important data point in a file is the content of the file. This field is extremely versatile as it can store any string. Traditionally this is used to store a JSON list of FIDs to point to a file on the Storage Module; however, the protocol can also theoretically use it to store short bits of text like encrypted passwords for a private password manager. The owner tag is a hashed version of the owner, hiding what address owns each file. This field can be changed to reflect the transferral of ownership. When making changes to the file such as deletion, movement, or adding/removing viewers/editors, the owner field is consulted to determine permissions. The same applies to edit access; editors can update the contents but nothing else.

## Encrypted Viewing Access

For users to view files, they need access to the symmetric keys used to encrypt the files. To do this, the protocol has a map of hashed addresses with each user's respective version of the symmetric key encrypted with that address's corresponding public key. The protocol can then store that map in the file entry to act as an encryption key discovery layer. The addresses in this viewing list are only able to access files and decrypt the data in their client; they have no privileges over the modification of the file entry in any way. This approach ensures that the File Tree module maintains a strong security and privacy posture for user data.
