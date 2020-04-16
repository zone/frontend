const { bold } = require('kleur');
const path = require('path');
const { log } = require('../util/logger');
const createQueue = require('../util/createQueue');
const { writeFile } = require('../util/fileSystem');

const queue = createQueue();

exports.add = ({ payload }) => {
  log.debug(`Queued file: ${payload.fileName}`);

  return queue.enqueue(payload);
};

exports.run = async () => {
  if (queue.size === 0) {
    return Promise.resolve();
  }

  log.debug('Adding files...');

  const workInProgress = queue.items.map(
    ({ fileName, filePath = './', content }) => {
      log.debug(`Adding file ${fileName}`);

      const destinationPath = path.join(process.cwd(), filePath);
      const destination = path.join(destinationPath, fileName);

      return writeFile(destination, content).catch(() => {
        throw new Error(
          `Could not write ${bold(fileName)}.\nCheck ${bold(
            destinationPath
          )} exists and is writable.`
        );
      });
    }
  );

  return Promise.all(workInProgress);
};
