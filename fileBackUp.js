const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

// Define source and destination directories
const sourceDir = './content';
const destinationDir = './update';

// Function to copy a file using streams
function copyFile(sourcePath, destinationPath, callback) {
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);

  pipeline(sourceStream, destinationStream, err => {
    if (err) {
      console.error('Error copying file:', err);
      callback(err);
    } else {
      console.log('File copied:', sourcePath, '->', destinationPath);
      callback();
    }
  });
}

// Function to copy a directory recursively
function copyDirectory(sourceDir, destinationDir) {
  try {
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir);
    }

    const items = fs.readdirSync(sourceDir);
    items.forEach(item => {
      const sourceItemPath = path.join(sourceDir, item);
      const destinationItemPath = path.join(destinationDir, item);

      const stat = fs.statSync(sourceItemPath);
      if (stat.isDirectory()) {
        copyDirectory(sourceItemPath, destinationItemPath);
      } else {
        copyFile(sourceItemPath, destinationItemPath, err => {
          if (err) {
            console.error('Error copying file:', err);
          }
        });
      }
    });
  } catch (err) {
    console.error('Error copying directory:', err);
  }
}

// Perform the backup
copyDirectory(sourceDir, destinationDir);
console.log('File and Directories Backup Completed Successfully.');
