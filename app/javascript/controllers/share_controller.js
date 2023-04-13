import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share"
export default class extends Controller {
  static targets = ["url", "title,", "content"];

  connect() {
    console.log("Connected to the share controller");
    console.log(this.data.get("urlValue"));
  }
  async share(e) {
    e.preventDefault();

    const shareData = {
      title: this.titleTarget.value,
      body: this.contentTarget.textContent,
      url: this.data.get("urlValue"),
    };
    console.log(shareData);
  }
 }
