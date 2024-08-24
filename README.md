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
