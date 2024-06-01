import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            name: 'url',
            message: 'Provide the URL to generate QR code',
            validate(answer) {
                if (answer.length === 0) {
                    return 'You must provide a URL';
                }
                return true;
            },
        },
    ])
    .then((answers) => {
        let url = answers.url;
        let qr_svg = qr.image(url);
        try {
            qr_svg.pipe(fs.createWriteStream('output/qrcode.png'));
            fs.writeFile("output/userinput.txt", url, (err) => {
                console.log("Files created");
            });
        } catch (err) {
            console.error(err.message);
        }
    });