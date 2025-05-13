import { asCommand } from 'generator-jhipster';

export default asCommand({
  options: {
    flutterDir: {
      desc: 'Directory of JHipster application',
      type: String,
      scope: 'blueprint',
    },
  },
});
