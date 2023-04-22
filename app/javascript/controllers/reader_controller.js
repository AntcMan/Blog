import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reader"
export default class extends Controller {
  static targets = [ "readingTime", "content" ]

  connect() {
    console.log("Connected to the reader controller");
    this.readingTime();
  }

  readingTime() {
    const text = this.contentTarget.textContent;
    const wordsPerMinute = 235;
    const numberOfWords = text.split(/\s/g).length;
    const minutes = numberOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    this.readingTimeTarget.textContent = `${readTime} min read`;
  }
}
