for (let i = 1; i <= 50; i++){
    if (i % 5 == 0 && i % 3 == 0)
        console.log("foo bar");
    else if (i % 5 == 0)
        console.log("bar");
    else if (i % 3 == 0)
        console.log("foo");
    else 
        console.log(`${i}`);
}