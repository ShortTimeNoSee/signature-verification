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
----
<div style="color: black; background-color: #f80; padding: 0.1em;">Hello, GitHib!\
This message is from Nicholas A. Thompson, sent at or very close to 06:15 UTC to GitHub users.
 
To verify this message was indeed sent by Nicholas Thompson, please follow these steps:

\- Copy the entire message (excluding the encryption signature below, but including these instructions) and paste it into the first text box on my signature verification tool: https://shorttimenosee.github.io/signature-verification/

\- Copy the encryption signature provided and paste it into the second text box.\
\- Click "Verify."

This uses cryptographic signing to ensure that the message could only have been sent by someone with access to my private key. Any tampering with the message or signature will cause the verification to fail, providing a reliable check of authenticity.</div>
<div style="color: black; background-color: #80f; padding: 0.1em;">exTt0MRrhS++vab17VT654SomOWonYAt/NOmvaG/o6aSsMxEU53a16wGdrT0Ts5591eRQg00xpqEbkID8+rwZDQHJ5ZLYsVuRV3p4yZ3lUSHxhW51igJlxw7MsFTztyQDITG3PbEjJXtRXl5KTrdKvDm00rmg2W3roungPCI01586I86AOmlmX3/bDgXN4DKzKhGyULVBHwpgKP1CTz0EPcV8dPdXcn3mzLDrXiUh8BGpvZIP0hD8GMA2Sv8vFJ6sIilefy98ro13t2kZhCkE9qt9dU1e3N9ElvEQO8IMWnm7ILQMLjMnhGp8s5qq5aJzkskOCLoQvFfODM1h9bsKg==</div>
----
Instructions:
- Open the [Signature Verification Tool](https://shorttimenosee.github.io/signature-verification)
- Message: Copy everything in orange from "Hello, Github!" up to (including) "providing a reliable check of authenticity." Paste this into the first text box on the signature verification tool.
- Key: Copy everything in purple from "exTt0MRrhS++vab17VT654SomOWonYAt/NOmvaG/o6aSsMxEU53a16wGdrT0Ts5591eRQg00xpqEbkID8..." to the end of the key. Paste this into the second text box.
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
