// eslint-disable-next-line import/no-extraneous-dependencies
import Shepherd from 'shepherd.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'shepherd.js/dist/css/shepherd.css';

export default class ShepherdTour {
  constructor({ config }) {
    this.config = config;
    this.tour = null;
  }

  loadScript() {
    const currentUrl = window.location.href;
    const pageConfig = this.config[currentUrl];

    if (!pageConfig || !pageConfig.instruction || !pageConfig.instruction.length) {
      return;
    }

    this.tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-default',
        scrollTo: true,
      },
    });

    pageConfig.instruction.forEach((step) => {
      const processedButtons = step.buttons.map((button) => ({
        text: button.text,
        action() {
          if (button.action && typeof this[button.action] === 'function') {
            this[button.action]();
          }
        },
      }));
      this.tour.addStep({
        ...step,
        buttons: processedButtons,
      });
    });

    this.tour.start();
  }
}
