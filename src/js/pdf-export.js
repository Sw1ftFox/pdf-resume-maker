import html2pdf from "html2pdf.js";

export function initPDFExport() {
  const btn = document.getElementById("download-pdf");

  btn.addEventListener("click", async () => {
    const originalBtnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Generating PDF...";

    document.getElementById("resume").classList.add("pdf-mode");

    try {
      const element = document.getElementById("resume");
      const opt = {
        margin: [10, 10, 10, 10],
        filename: "resume.pdf",
        image: {
          type: "jpeg",
          quality: 0.95,
        },
        html2canvas: {
          scale: 1,
          windowWidth: 800,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: "#FFFFFF",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
          avoid: [".job", ".courses > div", ".column-header"],
        },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      document.getElementById("resume").classList.remove("pdf-mode");
      btn.disabled = false;
      btn.textContent = originalBtnText;
    }
  });
}
