// Dynamically control page title
const path = window.location.pathname;
const filename = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');

// Set dictionary here
const pageTitle = {
  "index": "Home",
  "research": "Research",
  "teaching": "Teaching"
};

const titleBase = "Carter Bryson";
const dynamicTitle = pageTitle[filename] || "Page";

document.title = `${titleBase} | ${dynamicTitle}`;
