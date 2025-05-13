import { relative } from 'node:path';
import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { DEFAULT_FLUTTER_PATH, FLUTTER_NAMESPACE } from '../constants.mjs';
import command from './command.mjs';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  beforeQueue() {
    if (this.blueprintConfig.appDir) {
      throw new Error('flutter generator must run in backend application directory');
    }
  }

  get [BaseApplicationGenerator.INITIALIZING]() {
    return this.asInitializingTaskGroup({
      async initializingTemplateTask() {
        this.parseJHipsterArguments(command.arguments);
        this.parseJHipsterOptions(command.options);
      },
      loadConfigFromJHipster() {
        if (this.options.defaults || this.options.force) {
          this.blueprintStorage.defaults({ flutterDir: '' });
        }
      },
    });
  }

  get [BaseApplicationGenerator.PROMPTING]() {
    return this.asPromptingTaskGroup({
      async promptForFlutterDir() {
        await this.prompt(
          [
            {
              type: 'input',
              name: 'FlutterDir',
              message: 'Where do you want to generate a FLUTTER application?',
              default: DEFAULT_FLUTTER_PATH,
            },
          ],
          this.blueprintStorage,
        );
        this.blueprintStorage.defaults({ flutterDir: DEFAULT_FLUTTER_PATH });
      },
    });
  }

  get [BaseApplicationGenerator.COMPOSING]() {
    return this.asComposingTaskGroup({
      async composeReactNative() {
        if (this.jhipsterConfig.applicationType === 'microservice') return;
        const flutterDir = this.destinationPath(this.blueprintConfig.flutterDir);
        const appDir = relative(flutterDir, this.destinationPath());
        await this.composeWithJHipster(`jhipster-custom-blueprint:flutter`, {
          generatorOptions: {
            destinationRoot: flutterDir,
            appDir,
          },
        });
      },
    });
  }
}
