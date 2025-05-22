import crypto from  'crypto';

const senha = 'senha123'

//Criação de um Hash SHA256 e SHA512
const sha256Hash = crypto.createHash('sha256').update(senha).digest('hex');
// const sha256Hash = crypto.createHash('sha512').update(senha).digest('hex');
console.log('Hash SHA256:' , sha256Hash)


//Criação de um HMAC (Hash-based Message Authentication Code)
const palavraSecreta = 'GeraçãoTech';
const hmac = crypto.createHmac("sha256", palavraSecreta).update(senha).digest('hex');
console.log('HMAC SHA256: ', hmac);

