import { Controller } from "stimulus"
import bulmaCalendar from "bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js"

export default class extends Controller {
  resetForm() {
    this.element.reset()
  }

  connect() {
    bulmaCalendar.attach('[type="date"]');
  }
}
