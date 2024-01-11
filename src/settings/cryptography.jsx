// Realizando a criptografia dos dados:
import CryptoJs from 'crypto-js';

export class Cryptography {
  constructor(key, iv) {
    // Converter a chave e o IV para o formato adequado
    this.keyUtf8 = CryptoJs.enc.Utf8.parse(key);
    this.ivUtf8 = CryptoJs.enc.Utf8.parse(iv);
  }

  encode(object) {
    // Transformar o objeto para formato JSON:
    const jsonString = JSON.stringify(object);

    // Criptografar os dados com AES:
    const encrypted = CryptoJs.AES.encrypt(jsonString, this.keyUtf8, { iv: this.ivUtf8 });

    // Retornando a string encriptografada:
    return encrypted.toString();
  }

  decode(token) {
    try{
      const bytes = CryptoJs.AES.decrypt(token, this.keyUtf8, { iv: this.ivUtf8 });
      const data = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
      return data;  
    }
    catch(error){
      console.log('Erro ao tentar descriptografar: ', error);
    }
  }
}