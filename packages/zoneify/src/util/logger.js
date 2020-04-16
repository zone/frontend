const { bold, dim, red } = require('kleur');
const ora = require('ora');

const spinner = ora();

const levels = {
  error: 0,
  info: 1,
  debug: 2,
};

let logLevel = levels.info;

const formatter = ({ level, message }) => {
  switch (level) {
    case 'debug':
      return dim(`${bold('DEBUG')} ${message}`);
    case 'error':
      return red(`${bold('ERROR')} ${message}`);
    case 'info':
    default:
      return message;
  }
};

const logMessage = level => message => {
  if (levels[level] > logLevel) {
    return;
  }

  const formattedMessage = formatter({ level, message });
  const wasSpinning = spinner.isSpinning;
  const previousMessage = spinner.text;

  if (wasSpinning) {
    spinner.stop();
  }

  // eslint-disable-next-line no-console
  console.log(formattedMessage);

  if (wasSpinning) {
    spinner.start(previousMessage);
  }
};

const log = {
  ...Object.keys(levels).reduce(
    (logger, level) => ({ ...logger, [level]: logMessage(level) }),
    {}
  ),
  get level() {
    const [level] = Object.entries(levels).find(
      ([, value]) => value === logLevel
    );

    return level;
  },
  set level(level) {
    if (Object.keys(levels).includes(level)) {
      logLevel = levels[level];
    }
  },
};

module.exports = {
  formatter,
  spinner,
  levels,
  log,
};
