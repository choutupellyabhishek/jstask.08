function print(callback) {
    callback();
    console.log("hello");
}
print(() => console.log("Hii"));
