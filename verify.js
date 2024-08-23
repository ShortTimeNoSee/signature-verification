// verify.js
async function verifySignature() {
    const message = document.getElementById('message').value;
    const base64Signature = document.getElementById('signature').value;

    const publicKeyPem = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2Qs/943VR4wIoj13sD0v
    JcVfFs/KIO/Jo3OG34erEFxzJ6P4/1t6OVE30DPTBUJPFvi8zwbb3QRzDJSB3KOW
    lIz9+3V2cyaRb0rLZ2Q/RS1HkgnuSTMbdWmlHm7YU4TzOFLHuELqK5XwgAywvDVy
    LvQw/1IU0qG+wulOybuW3GvoDPi/u7ArKfn30ZxY/eq0RU357b2p4kXRowi4qzj6
    zhB2Zidh//GxSqH63AQYfLDac+0lMmQrJI6haFpH7GdU3CoLCVrbURc177JugYp0
    R2rRwPsdzieD8INjVlQ8AjjnPDyiz+4goh1/6mYdJkUmu7z2LLFMnn3RcNWLgr8P
    4QIDAQAB
    -----END PUBLIC KEY-----`;

    const forge = window.forge;
    const pki = forge.pki;
    const md = forge.md.sha256.create();

    const publicKey = pki.publicKeyFromPem(publicKeyPem);
    const signature = forge.util.decode64(base64Signature);

    md.update(message, 'utf8');

    const isValid = publicKey.verify(md.digest().bytes(), signature);
    document.getElementById('result').innerText = isValid ? 'Signature is valid!' : 'Signature is invalid.';
}
