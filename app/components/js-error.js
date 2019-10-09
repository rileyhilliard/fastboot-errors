import Component from '@ember/component';

export default class JSError extends Component {

  constructor() {
    super(...arguments);

    try {
      // accessing something that doesnt exist in node to prove a node-only error scenario
      console.log('document.<properties> exists in web clients, but not node: ', document.location.href);
    } catch (e) {
      throw new Error(`This is an error thrown from the <JsError /> component constructor. Original error: ${e.message}`);
    }
  }
}
