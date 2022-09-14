---
sidebar_position: 8
---
# filetree Module

## Overview
The File Tree module is responsible for keeping record of a user's files and organizing them in a way that is accessible. When a user uploads a file using the Storage module, the file is only accessible from the File ID (FID) which makes the process clunky and obtuse to remember every file uploaded to Jackal. Furthermore, every single upload would be required to be public, or the user would need to keep track of every symmetric key used to encrypt the files and manually map them to the FIDs. The solution to this is a tree structure storing each file as an entry in the tree. Organizing this structure is also trivial as we can assign children to pseudo files that we call folders. Finally to keep track of encryption keys, the protocol maps every file to their respective key.

![Protocol Overview](/img/jkl_paper/filetree1.png)


## Folder Abstraction
These, of course, are all abstractions of what’s actually under the hood. The File Tree module doesn’t actually handle any of the folder logic, system believes it is storing files that act as metadata stores, which then updates to reflect changes in folders. This gives the user experience the feeling that folders and files are separate entities in the tree, but in reality they are identical.

## File Entry Structure

Storing files entries on-chain is a hurdle being that the chain itself is public. This requires the use of client-side encryption before uploading data to the chain itself. The main component of a file is location (Address), allowing users to query the rest of the data from the file. You can think of the location as a key in a traditional key-value store or a path in bucket-based storage. The address is hashed using SHA256 to ensure it is impossible to retrieve the plain-text representation of the file name, while still being able to query the file using its given name. 

![Protocol Overview](/img/jkl_paper/filetree2.png)

The second most important data point in a file is the content of the file, this field is extremely versatile as it can store any string. Traditionally this is used to store a JSON list of FIDs to point to a file on the Storage Module, however the protocol can also theoretically use it to store short bits of text like encrypted passwords for a private password manager. The owner tag is a hashed version of the owner hiding what address owns each file, this field can be changed to reflect transferral of ownership. When making changes to the file such as deletion, movement or adding/removing viewers/editors, the owner field is consulted to determine permissions. The same applies for edit access, editors can update the contents but nothing else. 

## Encrypted Viewing Access

For users to view files, they need access to the symmetric keys used to encrypt the files. To do this, the protocol has a map of hashed addresses with each user’s respective version of the symmetric key encrypted with that address's corresponding public key. The protocol can then store that map in the file entry to act as an encryption key discovery layer. The addresses in this viewing list are only able to access files and decrypt the data in their client, they have no privileges over the modification of the file entry in any way.

