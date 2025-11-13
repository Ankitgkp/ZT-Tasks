function clock() {
    setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString()); // this converts to local time format in string
    }, 1000);
}
clock();