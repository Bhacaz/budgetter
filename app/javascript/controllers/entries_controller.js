import { Controller } from "stimulus"
import bulmaCalendar from "bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js"

export default class extends Controller {
  static targets = ['soldSum']

  resetForm() {
    this.element.reset()
    console.log(this.element)
    console.log(this.soldSumTarget)
    this.soldSumTarget.innerHTML = 'Hello';
  }

  connect() {
    bulmaCalendar.attach('[type="date"]');
  }
}
