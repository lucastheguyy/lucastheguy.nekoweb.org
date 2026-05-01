fetch(arted)
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".section-images");

    data.forEach(item => {
      const block = document.createElement("div");

      // --- title + date ---
      const desc = document.createElement("div");
      desc.className = "image-description";

      const p = document.createElement("p");
      p.innerHTML = `"${item.title}"<br>${item.date}`;
      desc.appendChild(p);

      // --- image ---
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title || "art image";
      img.loading = "lazy";

      // --- optional caption (RAW HTML) ---
      const caption = document.createElement("div");
      if (item.html && item.html.trim() !== "") {
        caption.innerHTML = item.html;
      }

      // --- assemble ---
      block.appendChild(desc);
      block.appendChild(img);
      if (item.html && item.html.trim() !== "") {
        block.appendChild(caption);
      }

      block.appendChild(document.createElement("hr"));

      container.appendChild(block);
    });
  })
  .catch(err => {
    console.error("Failed to load art.json:", err);
  });