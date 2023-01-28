const fs = require("fs");
const http = require("http");

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
