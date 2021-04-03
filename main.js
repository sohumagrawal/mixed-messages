// this project generates a random message everytime it is run
const part1 = ['i ', 'me ', 'you ', 'us ', 'we '] // sets array for parts 1-5
const part2 = ['is ', 'are ']
const part3 = ['cleaing ', 'brooming ', 'taking out ']
const part4 = ['the trash ', 'the tables ', 'the floor ']
const part5 = ['today', 'tommorow', 'yesterday']

// logs random values to the console
console.log(part1[Math.floor(Math.random() * part1.length)] + part2[Math.floor(Math.random() * part2.length)] + part3[Math.floor(Math.random() * part3.length)] + part4[Math.floor(Math.random() * part4.length)] + part5[Math.floor(Math.random() * part5.length)])
 