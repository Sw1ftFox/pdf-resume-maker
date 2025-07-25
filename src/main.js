import "./css/main.css";
import "./css/resume-container.css";

import "./css/components/avatar.css";
import "./css/components/header.css";
import "./css/components/languages.css";
import "./css/components/experience.css";
import "./css/components/tools.css";
import "./css/components/education.css";
import "./css/components/interests.css";
import "./css/components/contacts.css";
import "./css/components/download-button.css";

import "./css/editable.css";
import "./css/animations.css";
import "./css/media.css";
import "./css/pdf-mode.css";

import { initEditor } from "./js/editor";
import { initPDFExport } from "./js/pdf-export";
import { initDoubleClick } from "./js/double-click";

document.addEventListener("DOMContentLoaded", () => {
  initEditor();
  initPDFExport();
  initDoubleClick();
});
