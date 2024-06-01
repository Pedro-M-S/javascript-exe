const fs = require("fs");

// fs.writeFile("file.txt", "Hello, world!", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File created");
// });

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});