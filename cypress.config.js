const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  video: true,
  videoCompression: true,
  videoCompression: 15,
  // projectId: "2cjbc4",
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(
            __dirname,
            "cypress/fixtures",
            filePath,
          );
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return data;
        },
      });
      on("task", {
        writeToExcel({ data, filePath }) {
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(data);
          XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
          XLSX.writeFile(
            workbook,
            path.resolve(__dirname, "cypress/fixtures", filePath),
          );
          return null;
        },
      });
      on("task", {
        readFile(options) {
          const { fileName } = options;
          return new Promise((resolve, reject) => {
            fs.readFile(fileName, "utf8", (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          });
        },
        writeFile(options) {
          const { fileName, data } = options;
          return new Promise((resolve, reject) => {
            fs.writeFile(fileName, data, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve(true);
              }
            });
          });
        },
      });
    },
  },
});
