let AA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let BB = [];
console.log([AA]);


for (let i = 0; i < AA.length; i++) {

    if (i % 2 === 0) {
        BB[i + 1] = AA[i]
    } else {
        BB[i - 1] = AA[i]
    }

}

process.stdout.write(BB.toString());