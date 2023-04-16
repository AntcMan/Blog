import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share"
export default class extends Controller {
  static targets = ["url", "title"];

  connect() {
    console.log("Connected to the share controller");
  }
  async share(e) {
    e.preventDefault();

    const shareData = {
      title: this.titleTarget.textContent,
      url: this.data.get("urlValue"),
    };
    console.log(shareData);
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Share error:", err)
      alert("Failed to share blog post")
    };
  }
 }
