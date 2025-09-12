// break
// continue


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }   
    console.log(i);
}

console.log("Loop exited");

for (let j = 0; j < 10; j++) {
    if (j === 5) {
        continue; // skip the iteration when j is 5
    }
    console.log(j);
}