import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reader"
export default class extends Controller {
  connect() {
    console.log("Connected to the reader controller");
  }
}
