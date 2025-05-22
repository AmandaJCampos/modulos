import crypto from  'crypto';

const senha = 'senha123'

//Criação de um Hash SHA256 e SHA512
// const sha256Hash = crypto.createHash('sha256').update(senha).digest('hex');
const sha256Hash = crypto.createHash('sha512').update(senha).digest('hex');
console.log('Hash SHA512:' , sha256Hash)
