import { readFileSync } from 'fs';
import chalk from 'chalk';

const fileUrl = new URL('../package.json', import.meta.url);
const packagejs = JSON.parse(readFileSync(fileUrl));

export const printJHipsterLogo = () => {
  console.log('\n');
  const chalk = require('chalk');

  console.log('\n');
  console.log(chalk.cyan('     ██╗ ██████╗ ██╗  ██╗██████╗ ██╗███████╗████████╗███████╗██████╗ ') + chalk.green('   ███████╗██╗     ██╗   ██╗████████╗████████╗███████╗██████╗ '));
console.log(chalk.cyan('     ██║██╔═══██╗██║ ██╔╝██╔══██╗██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗') + chalk.green('     ██╔════╝██║     ██║   ██║╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗'));
console.log(chalk.cyan('     ██║██║   ██║█████╔╝ ██████╔╝██║███████╗   ██║   █████╗  ██████╔╝') + chalk.green('     █████╗  ██║     ██║   ██║   ██║      ██║   █████╗  ██████╔╝'));
console.log(chalk.cyan('██   ██║██║   ██║██╔═██╗ ██╔═══╝ ██║╚════██║   ██║   ██╔══╝  ██╔══██╗') + chalk.green('     ██╔══╝  ██║     ██║   ██║   ██║      ██║   ██╔══╝  ██╔══██╗'));
console.log(chalk.cyan('╚█████╔╝╚██████╔╝██║  ██╗██║     ██║███████║   ██║   ███████╗██║  ██║') + chalk.green('     ██║     ███████╗╚██████╔╝   ██║      ██║   ███████╗██║  ██║'));
console.log(chalk.cyan(' ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝') + chalk.green('     ╚═╝     ╚══════╝ ╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝'));

  console.log('\n');
  console.log(chalk.white.bold('                          https://www.jhipster.tech'));
  console.log(chalk.white('        Welcome to ') + chalk.blue.bold('JHipster Flutter') + chalk.white(' application generator! 🚀'));
  console.log(chalk.white(`        Application will be generated in: ${chalk.yellow(process.cwd())}`));
  console.log(
    chalk.green('_________________________________________________________________________________________\n'),
  );
  
  console.log(
    chalk.white(
      `  Documentation for creating an application is at ${chalk.yellow(
        'https://github.com/jhipster/generator-jhipster-flutter-/blob/main/README.md#getting-started',
      )}`,
    ),
  );
  console.log(
    chalk.white(
      `  If you find JHipster flutter  useful, consider sponsoring the project at ${chalk.yellow(
        'https://opencollective.com/generator-jhipster',
      )}`,
    ),
  );
  console.log(
    chalk.green(' _______________________________________________________________________________________________________________\n'),
  );
};
