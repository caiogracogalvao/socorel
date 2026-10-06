document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quote-form");
    if (!form) return;
    const note = document.getElementById("quote-note");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const f = new FormData(form);
        const nome = (f.get("nome") || "").trim();
        const seg = f.get("segmento");
        const msg = (f.get("mensagem") || "").trim();
        if (!nome || !seg || !msg) {
            note.textContent = "Preencha nome, segmento e produto/quantidade para continuar.";
            return;
        }
        const emp = (f.get("empresa") || "").trim();
        const texto = `Olá! Meu nome é ${nome}${emp ? ", da empresa " + emp : ""}.\nSegmento: ${seg}.\n${msg}`;
        note.textContent = "Abrindo o WhatsApp com a sua mensagem…";
        window.open("https://wa.me/558432232955?text=" + encodeURIComponent(texto), "_blank", "noopener");
    });
});
