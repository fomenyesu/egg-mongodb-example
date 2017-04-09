module.exports = app => {
  class SomeService extends app.Service {
    * list() {
      const rule = this.app.config.robot.ua;
    }
  }
  return SomeService;
};