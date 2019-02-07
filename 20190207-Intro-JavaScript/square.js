function square1(size){
    for (let i = 0; i < size; i++) {  
        for (let j = 0; j < size; j++) {
            process.stdout.write("*");
            if(j === size -1)
                process.stdout.write("\n");
        }
    }
}

function square2(size){
    for (let i = 0; i < size; i++) {  
        for (let j = 0; j < size; j++) {
            if(i === 0 || i === size -1 ||
               j === 0 || j === size -1)
                process.stdout.write("*");
            else
                process.stdout.write(" ");

            if(j === size -1)
                process.stdout.write("\n");
        }
    }
}

console.log("quadrato pieno con lato 10:");
square1(10);

console.log("quadrato vuoto con lato 10:");
square2(10);