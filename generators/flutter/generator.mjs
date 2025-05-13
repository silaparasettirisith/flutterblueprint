import BaseApplicationGenerator from "generator-jhipster/generators/base-application";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";
import { entityfiles } from "./entityfiles.mjs";
import { files } from "./files.mjs";

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Angular generator for the JHipster Custom Blueprint
 * Extends the JHipster base application generator to provide custom Angular components
 */
export default class extends BaseApplicationGenerator {
  constructor(args, options, features) {
    // Log constructor call for debugging
    console.log(chalk.bgRed.white("Flutter GENERATOR CONSTRUCTOR CALLED"));

    super(args, options, {
      ...features,
      queueCommandTasks: true,
      sbsBlueprint: true,
      jhipster7Migration: true,
    });

    // Log more info after initialization
    console.log(chalk.bgRed.white("Flutter GENERATOR INITIALIZED"));
    console.log("Generator name:", this.options.name);

    // The template path will be set in the initializing phase
    this._templatePath = null;

    // Set skipInstall to true to prevent package.json modifications during development
    this.options.skipInstall = true;
  }

  // Priority needs to be higher than the default JHipster generator
  get priority() {
    return 100; // Higher than default JHipster priority
  }

  // Define jhipsterTemplatePath as a function instead of a getter
  jhipsterTemplatePath() {
    return path.join(__dirname, "templates");
  }

  async beforeQueue() {
    this.jhipsterConfig.clientFramework = "none";
    await this.dependsOnJHipster("bootstrap-application", {
      generatorOptions: {
        defaultBaseName: () => "flutterapp",
      },
    });
    await this.dependsOnJHipster("init");
    console.log("Client Framework:", this.jhipsterConfig.clientFramework);
  }

  get [BaseApplicationGenerator.INITIALIZING]() {
    return this.asInitializingTaskGroup({
      displayLogo() {
        this.log(
          chalk.green("Running Modern UI Blueprint - Flutter Generator")
        );
        this._templatePath = path.resolve(__dirname, "templates");
        this.sourceRoot(this._templatePath);

        // Set skipInstall to true to prevent package.json modifications
        this.options.skipInstall = true;
      },
    });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: files,
          context: application,
        });
      },
    });
  }

  get [BaseApplicationGenerator.WRITING_ENTITIES]() {
    return this.asWritingEntitiesTaskGroup({
      async writeEntities({ application, entities }) {
        console.log(this.jhipsterConfig);
        for (const entity of entities) {
          await this.writeFiles({
            sections: entityfiles,

            context: {
              ...entity,
              application: { ...application },
              ...application,
            },
          });
        }
      },
    });
  }
}
