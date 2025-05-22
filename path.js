import path from 'path';

//Manipulação de caminhos
const dirName = path.dirname('/path/file.txt');
const baseName = path.basename('/path/file.txt');
const extName = path.extname('/path/file.txt');
const joinPath = path.join('/path/','/file.txt');
const resolvePath = path.resolve('file.txt');


console.log('Diretório ' , dirName);
console.log('Nome do Arquivo ' , baseName);
console.log('Extensão do Arquivo ' , extName);
console.log('Caminho Combinado ' , joinPath);
console.log('Caminho Absoluto ' , resolvePath);