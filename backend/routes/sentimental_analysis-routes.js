import bodyParser from "body-parser";
import path from "path"
import reader from 'xlsx';
import  { PythonShell } from "python-shell";
import Excel from 'exceljs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// C:/cb/cb-js
console.log(__dirname);

// sends a message to the Python script via stdin

console.log(__dirname+" dir nameeeers")
  const sentimental_analysis = async(content)=>{
    console.log(content)
   await  exTest(content);
   console.log("Hello")
const options = {
  mode: "text",
  //pythonPath: "/usr/bin/python", // replace with your Python path
  pythonOptions: ["-u"], // unbuffered output
  scriptPath: __dirname, // path to your Python script
  args: [path.join(__dirname, "sentimental_analysis.xlsx")], // path to your Excel file
};
const pyshell = new PythonShell("sentimental_analysis.py", options);
console.log(options)
console.log(pyshell.error)


await pyshell.on("message", (message) => {
  console.log(`Received message from Python: ${message}`);
});

await pyshell.on("error", (error) => {
  console.log(`Python script error: ${error}`);
});

await pyshell.on("close", (code) => {
  console.log(`Python script exited with code ${code}`);
});

}












async function exTest(content){
  const workbook =  new Excel.Workbook();
  const worksheet = await workbook.addWorksheet("Sheet1");

// worksheet.columns = [
//  {header: 'Id', key: 'id', width: 10},
//  {header: 'Name', key: 'name', width: 32}, 
//  {header: 'D.O.B.', key: 'dob', width: 15,}
// ];

// worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970, 1, 1)});
// worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7)});

// save under export.xlsx
await workbook.xlsx.writeFile(__dirname+'/sentimental_analysis.xlsx');

//load a copy of export.xlsx
const newWorkbook = new Excel.Workbook();
await newWorkbook.xlsx.readFile(__dirname+'/sentimental_analysis.xlsx');

const newworksheet = newWorkbook.getWorksheet('Sheet1');
newworksheet.columns = [
{header: 'data', key: 'data', width: 1000}
];
console.log(content+" this is content")
await newworksheet.addRow({data: content});

await newWorkbook.xlsx.writeFile(__dirname+'/sentimental_analysis.xlsx');

console.log("File is written");

};

export default sentimental_analysis
