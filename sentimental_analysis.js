const express = require("express");
const bodyParser = require("body-parser");
const path=require("path")
const { PythonShell } = require("python-shell");

// sends a message to the Python script via stdin

const options = {
  mode: "text",
  //pythonPath: "/usr/bin/python", // replace with your Python path
  pythonOptions: ["-u"], // unbuffered output
  scriptPath: "", // path to your Python script
  args: [path.join(__dirname, "sentimental_analysis.xlsx")], // path to your Excel file
};
const pyshell = new PythonShell("sentimental_analysis.py", options);
console.log("Hello")

pyshell.on("message", (message) => {
  console.log(`Received message from Python: ${message}`);
});

pyshell.on("error", (error) => {
  console.log(`Python script error: ${error}`);
});

pyshell.on("close", (code) => {
  console.log(`Python script exited with code ${code}`);
});