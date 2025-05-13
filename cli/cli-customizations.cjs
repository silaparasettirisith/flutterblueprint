// This file will not be overwritten by generate-blueprint
module.exports = {
  defaultCommand: 'flutter',
  printBlueprintLogo: undefined,
  printLogo: async () => {
    const { printJHipsterLogo } = await import('./print-jhipster-logo.js');
    await printJHipsterLogo();
  },
};
