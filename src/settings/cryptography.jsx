// Realizando a criptografia dos dados:
import CryptoJS from 'crypto-js';

export class Cryptography {
  constructor(key, iv) {
    // Converter a chave e o IV para o formato adequado
    this.keyUtf8 = CryptoJS.enc.Utf8.parse(key);
    this.ivUtf8 = CryptoJS.enc.Utf8.parse(iv);
  }

  encode(object) {
    // Transformar o objeto para formato JSON:
    const jsonString = JSON.stringify(object);

    // Criptografar os dados com AES:
    const encrypted = CryptoJS.AES.encrypt(jsonString, this.keyUtf8, { iv: this.ivUtf8, padding: CryptoJS.pad.Pkcs7 });

    // Retornando a string encriptografada:
    return encrypted.toString();
  }

  decode(token) {
      // Obtendo o Token e descriptografando, gerando os objeto com os dados:
      const bytes = CryptoJS.AES.decrypt(token, this.keyUtf8, { iv: this.ivUtf8 });
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
  }
}