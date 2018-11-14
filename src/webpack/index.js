import FallingLeaves from './modules/FallingLeaves';

class Index {
  /**
   * constructor
   */
  constructor() {
    console.log('ss');

    new FallingLeaves();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
