import os from 'os';

//Informações sobre o Sistema Operacional (OS)
const arquitetura = os.arch();
//console.log('Sistema Operacional: ' , arquitetura);

const plataforma = os.platform();
//console.log('Platarforma: ' , plataforma);

const CPUs = os.cpus();
// console.log('CPUs(Processadores): ' , CPUs);
// console.log('Números de Processadores: ' , CPUs.length);
// console.log('CPUs: ' , CPUs);

const ram = os.totalmem();
/*console.log('Memória Total(Bytes): ' , ram);
console.log('Memória Total(Kbytes): ' , ram  / 1024);
console.log('Memória Total(MBytes): ' , (ram  / 1024 / 1024).toFixed(2));
console.log('Memória Total(GBytes): ' , (ram / 1024 / 1024 / 1024).toFixed(0));*/

const freeRAM = os.freemem();
/*console.log('Memória Total(Bytes): ' , freeRAM);
console.log('Memória Total(Kbytes): ' , freeRAM  / 1024);
console.log('Memória Total(MBytes): ' , (freeRAM  / 1024 / 1024).toFixed(2));
console.log('Memória Total(GBytes): ' , (freeRAM / 1024 / 1024 / 1024).toFixed(2));*/

//Interfaces de Redes
const rede = os.networkInterfaces();
// console.log('Interfaces de redes' , rede);




