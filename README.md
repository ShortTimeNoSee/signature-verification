# Signature Verification Tool

## Overview

This web-based tool verifies the authenticity of messages signed with a private key. It is designed for messages signed by Nicholas A. Thompson.

## How It Works

1. **Input**: Enter the message and its base64-encoded signature.
2. **Verification**: The tool uses an embedded public key to check the signature against the message.

## Usage

1. Open the tool [here](https://shorttimenosee.github.io/signature-verification/).
2. Paste the message into the first text box.
3. Paste the base64-encoded signature into the second text box.
4. Click "Verify" to check the message's authenticity.

### Example
<hr />
Hello, GitHib!<br />
This message is from Nicholas A. Thompson, sent at or very close to 06:23 UTC to GitHub users.
 
To verify this message was indeed sent by Nicholas Thompson, please follow these steps:

\- Copy the entire message (excluding the encryption signature below, but including these instructions) and paste it into the first text box on my signature verification tool: [https://shorttimenosee.github.io/signature-verification/](https://shorttimenosee.github.io/signature-verification/)\
\- Copy the encryption signature provided and paste it into the second text box.\
\- Click "Verify."

This uses cryptographic signing to ensure that the message could only have been sent by someone with access to my private key. Any tampering with the message or signature will cause the verification to fail, providing a reliable check of authenticity.\
v+qHglqwnlrsvZEk0rk7qscy2h6FgIoGhu5NjkvXZbsxwA5r6FPlpHEaSbfK2pohw+Np8PUYn4iNAyQppKDYOxjiuECnvRWkf3HNqjYIOz7J52Ad0POpElNF41uz2abRmHth6ulY7JM7qYD2IH08Lm5m8Yl3WlaQ801sANkhqxnfpREHPAF9ub3ocfZHrLxNxIsLQBm0DCnO0nGlibuGRFGkQX+rLlo9connA6wmCihvmwZjgzb5X7I0RkKDlwPIfWzKSOOQ+aKaEJZNsWWYui4mT7s/uBYwux2Y6wS6aiPOaZIOK3rRBeAzFBStHdgmi2VrZJuv2kRklkhd1pKj8w==<hr />

Instructions:
- Open the [signature verification tool](https://shorttimenosee.github.io/signature-verification/).
- Message: Copy everything from "Hello, Github!" up to (including) "providing a reliable check of authenticity." Paste this into the first text box on the signature verification tool.
- Key: Copy everything from "v+qHglqwnlrsvZEk0rk7qscy2h6FgIoGhu5NjkvXZbsxwA5r6FPlpHEaSbfK2pohw+..." to the end of the key. Paste this into the second text box.
- Click Verify.

## Code Details

- **index.html**: Layout and styles.
- **verify.js**: Handles verification using the Forge library.

### Public Key

The tool uses a specific public key. To use it with a different key:

1. Replace the public key in `verify.js` with your own in PEM format.
2. Ensure the corresponding private key signs the messages.

## Notes

- This tool is set up for Nicholas A. Thompson’s messages. Modify the public key in `verify.js` for other uses.
- Ensure the message and signature are formatted correctly to avoid errors.

## License

MIT License. See the [LICENSE](LICENSE) file for details.
