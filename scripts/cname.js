const fse = require('fs-extra');

// 文件复制
try {
    fse.copySync('./CNAME', './docs/CNAME');
    console.log('Success: copy CNAME success!');
  } catch (err) {
    console.error(err);
  }
  
  