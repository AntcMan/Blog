import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share"
export default class extends Controller {
  static values = {
    url: String,
    title: String
  }

  connect() {
    console.log("Connected to the share controller");
  }

  async share(e) {
    e.preventDefault();

    const shareData = {
      title: this.titleValue,
      url: this.urlValue
    };

    console.log(shareData);

    try {
      console.log("Made it here")
      await navigator.share && navigator.canShare(shareData);
    } catch (err) {
      console.error("Share error:", err)
      alert("Failed to share blog post")
    };
  }
 }
