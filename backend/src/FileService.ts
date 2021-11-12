import * as uuid from 'uuid';
import * as path from 'path';
import fileUpload from 'express-fileupload';

class FileService {
  async saveFile(file: fileUpload.UploadedFile | fileUpload.UploadedFile[]) {
    try {
      let fileName = uuid.v4() + '.jpg';
      if (!file) {
        fileName = 'ask.png';
        return fileName;
      }

      const filePath = path.resolve('static', fileName);
      console.log(filePath);
      if (Array.isArray(file)) {
        file.forEach((element) => element.mv(filePath));
      } else {
        file.mv(filePath);
      }

      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
