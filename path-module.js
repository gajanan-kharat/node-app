

const path = require('path');
console.log("======= path Module =========");

console.log("===== join() =======");
const pathFile = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(pathFile);

const file = "resume.pdf";
console.log(`File Extension is: ${path.extname(file)}`);

const filePath = "/Users/gajanan/Documents/CODEMIND/Repo/node-app/dir1/dir2/test.txt";

console.log(`Base Name: ${path.basename(filePath)}`);
console.log(`Directory  Name: ${path.dirname(filePath)}`);

// https://www.zoom.us/meeting/82184057048
// https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048
// https://www.zoom.us/meeting/82184057048?ampDeviceId=5aa4eb78-03a2-4789-9ca0-89afef856689&ampSessionId=1742914162121


function add(n1, n2){
    console.log(n1+n2);
}   
add(10, 30);
