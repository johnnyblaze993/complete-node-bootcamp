const fs = require("fs");
const http = require("http");
const url = require("url");

///////////////////////////////////////////////////
//FILES

//blocking async code
// const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf8"); // first argument is the path to the file, second argument is the encoding

// const textOut = `I like avocados bro. ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync("./1-node-farm/starter/txt/output.txt", textOut);

//syncrounus code is also called blocking code because it blocks the execution of the code until the file is read and written

// //non-blocking async code
// fs.readFile("./1-node-farm/starter/txt/start.txt", "utf8", (err, data1) => {
//   fs.readFile(
//     `./1-node-farm/starter/txt/${data1}.txt`,
//     "utf8",
//     (err, data2) => {
//       console.log(data2);
//       fs.readFile(
//         `./1-node-farm/starter/txt/append.txt`,
//         "utf8",
//         (err, data3) => {
//           console.log(data3);

//           fs.writeFile(
//             "./1-node-farm/starter/txt/final.txt",
//             `${data2}\n${data3}`,
//             "utf8",
//             (err) => {
//               console.log("Your file has been written");
//             }
//           );
//         }
//       );
//     }
//   );
// });
// console.log("this will be read first");

//async await instead of callbacks
// async function readAndWriteFiles() {
//   try {
//     const data1 = await fs.promises.readFile(
//       "./1-node-farm/starter/txt/start.txt",
//       "utf8"
//     );
//     const data2 = await fs.promises.readFile(
//       `./1-node-farm/starter/txt/${data1}.txt`,
//       "utf8"
//     );
//     console.log(data2);
//     const data3 = await fs.promises.readFile(
//       `./1-node-farm/starter/txt/append.txt`,
//       "utf8"
//     );
//     console.log(data3);
//     await fs.promises.writeFile(
//       "./1-node-farm/starter/txt/final.txt",
//       `${data2}\n${data3}`,
//       "utf8"
//     );
//     console.log("Your file has been written");
//   } catch (err) {
//     console.error(err);
//   }
// }
// console.log("this will be read first");
// readAndWriteFiles();

///////////////////////////////////////////////////
//server
const tempOverview = fs.readFileSync(
  `${__dirname}/1-node-farm/starter/templates/template-overview.html`,
  "utf-8"
);

const data = fs.readFileSync(
  `${__dirname}/1-node-farm/starter/dev-data/data.json`,
  "utf-8"
); //syncrounus code is okay when its in the top level code
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathway = req.url;

  //overview page
  if (pathway === "/" || pathway === "/overview") {
    res.end("This is the overview");

    //product page
  } else if (pathway === "/product") {
    res.end("This is the product");

    //api
  } else if (pathway === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    //not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world", //meta data
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
