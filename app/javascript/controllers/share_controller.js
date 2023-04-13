import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share"
export default class extends Controller {
  connect() {
    console.log("Connected to the share controller")
  }
}
