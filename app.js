"use strict";
// Dil sözlüğü: data-i18n anahtarları. Varsayılan: tarayıcı dili Türkçe ise Türkçe, değilse İngilizce.
const T = {
  tr: {
    nav_features: "Özellikler", nav_screens: "Ekranlar", nav_play: "Nasıl oynarım?",
    lead: "Otoyolda makas at, polisten kaç, arkadaşlarınla yarış!",
    play: "TARAYICIDA OYNA", android: "Android APK", iphone: "iPhone'a ekle",
    p1: "Ücretsiz", p2: "Kurulum yok", p3: "Online yarış", p4: "Skor tablosu",
    badge_a: "3 harita", badge_b: "Hepsi eşit araç!",
    f_title: "Neler var?", f_sub: "Kısa, hızlı, bağımlılık yapan otoyol yarışı. Telefondan tek parmakla oynanır.",
    f1h: "Makas at, kombo yap", f1p: "Trafikte yakın geçişler puan ve kombo kazandırır. Ne kadar riskli, o kadar skor.",
    f2h: "Polisten kaç", f2p: "Kural dışı gidersen yıldızın artar. Polis arabaları, hızlı yarış arabaları ve helikopter peşine düşer.",
    f3h: "Arkadaşlarınla yarış", f3p: "Oda kur, kodu paylaş ya da arkadaşını yarışa davet et. İki oyuncu aynı trafikte yarışır.",
    f4h: "Skor tablosu", f4p: "En yüksek skorlar herkese açık tabloda. Profil fotoğrafın ve adınla yerini al.",
    f5h: "Kendi tarzını yarat", f5p: "Boya, alev, duman, neon ve çerçeveler. Tüm araçların performansı eşit, fark sadece görünüşte.",
    f6h: "3 farklı harita", f6p: "Neonlu gece şehri, güneşli yeşil vadi ve kızgın çöl. Her biri kendi havasında.",
    s_title: "Oyundan kareler", s_sub: "Telefonda dikey, tek elle.",
    cap1: "Ana menü", cap2: "Yeşil Vadi", cap3: "Gece Sürüşü", cap4: "Çöl", cap5: "Garaj", cap6: "Skor tablosu",
    i_title: "Nasıl oynarım?", i_sub: "En hızlısı tarayıcı. İstersen telefonuna da ekle.",
    tab_web: "Tarayıcı", tab_and: "Android", tab_ios: "iPhone",
    w1: "Aşağıdaki düğmeye dokun, oyun birkaç saniyede açılır (ilk açılış yaklaşık 47 MB indirir, Wi-Fi iyi olur).",
    w2: "Dil seçip OYNA'ya bas. Online ve skor tablosu için ONLINE'dan ücretsiz hesap aç.",
    w3: "Yarışa başla: ekranda parmağını sağa sola kaydır, pedal fren, (!) el freni.",
    a1: "APK dosyasını indir.", a2: "Dosyaya dokun. Telefon \"bilinmeyen kaynaklardan yüklemeye izin ver\" diye sorarsa izin ver.",
    a3: "Play Protect uyarı verirse \"yine de yükle\" de. Oyun Google Play'e çıkınca buradan değil mağazadan kurabileceksin.",
    a_note: "Not: APK sürümü tarayıcı sürümünden daha eski olabilir. En güncel hâli için tarayıcıda oyna.",
    i1: "Safari'de oyunu aç.", i2: "Alttaki Paylaş düğmesine dokun.", i3: "\"Ana Ekrana Ekle\"yi seç. Artık uygulama gibi tam ekran açılır.",
    i_note: "iPhone için App Store sürümü yok, bu yöntem uygulama gibi çalışır.",
    final_h: "Hazır mısın?", final_p: "Bir tur at, skorunu tabloya yaz.",
    foot_made: "Sut Games tarafından yapıldı", privacy: "Gizlilik", contact: "İletişim",
  },
  en: {
    nav_features: "Features", nav_screens: "Screens", nav_play: "How to play",
    lead: "Weave through traffic, outrun the cops, race your friends!",
    play: "PLAY IN BROWSER", android: "Android APK", iphone: "Add to iPhone",
    p1: "Free", p2: "No install", p3: "Online races", p4: "Leaderboard",
    badge_a: "3 maps", badge_b: "All cars equal!",
    f_title: "What's inside?", f_sub: "Quick, addictive highway racing. Played with one finger on your phone.",
    f1h: "Weave and combo", f1p: "Close passes earn points and combos. The riskier you drive, the higher you score.",
    f2h: "Outrun the cops", f2p: "Break the rules and your wanted stars rise. Patrol cars, fast race cars and a helicopter come for you.",
    f3h: "Race your friends", f3p: "Create a room, share the code or invite a friend. Two players race in the same traffic.",
    f4h: "Leaderboard", f4p: "The best scores live on a public board. Claim your spot with your name and profile picture.",
    f5h: "Make it yours", f5p: "Paint, flames, smoke, neon and frames. Every car performs the same, the difference is only style.",
    f6h: "3 different maps", f6p: "A neon night city, a sunny green valley and a scorching desert. Each with its own mood.",
    s_title: "Screenshots", s_sub: "Portrait, one-handed.",
    cap1: "Main menu", cap2: "Green Valley", cap3: "Night Drive", cap4: "Desert", cap5: "Garage", cap6: "Leaderboard",
    i_title: "How to play", i_sub: "The browser is the fastest way. Add it to your phone if you like.",
    tab_web: "Browser", tab_and: "Android", tab_ios: "iPhone",
    w1: "Tap the button below and the game opens in a few seconds (the first load downloads about 47 MB, Wi-Fi helps).",
    w2: "Pick a language and press PLAY. For online and the leaderboard, create a free account under ONLINE.",
    w3: "Start racing: slide your finger left and right, the pedal brakes, (!) is the handbrake.",
    a1: "Download the APK file.", a2: "Tap the file. If your phone asks to allow installs from unknown sources, allow it.",
    a3: "If Play Protect warns you, choose install anyway. Once the game is on Google Play you will install it from the store instead.",
    a_note: "Note: the APK may be older than the browser version. Play in the browser for the latest.",
    i1: "Open the game in Safari.", i2: "Tap the Share button at the bottom.", i3: "Choose \"Add to Home Screen\". It then opens full-screen like an app.",
    i_note: "There is no App Store version, this method behaves like an app.",
    final_h: "Ready?", final_p: "Play a run and put your score on the board.",
    foot_made: "Made by Sut Games", privacy: "Privacy", contact: "Contact",
  },
};

function getLang() {
  try { const s = localStorage.getItem("lp_lang"); if (s === "tr" || s === "en") return s; } catch (e) { /* kapalı */ }
  return (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
}
function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach((el) => { const v = T[l][el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.l === l)));
  try { localStorage.setItem("lp_lang", l); } catch (e) { /* kapalı */ }
}
document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.l)));
setLang(getLang());

// Telefon çerçevesindeki ekran görüntüleri sırayla değişir
const shots = [...document.querySelectorAll(".phone .shots img")];
let si = 0;
if (shots.length > 1) setInterval(() => { shots[si].classList.remove("on"); si = (si + 1) % shots.length; shots[si].classList.add("on"); }, 2600);

// Sekmeler
const tabs = [...document.querySelectorAll(".tab")];
tabs.forEach((t) => t.addEventListener("click", () => {
  tabs.forEach((x) => x.setAttribute("aria-selected", String(x === t)));
  document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("on", p.id === t.dataset.p));
}));
// iPhone'da açılırsa iPhone sekmesi, Android'de açılırsa Android sekmesi hazır gelir
const ua = navigator.userAgent || "";
const pick = /iPhone|iPad|iPod/.test(ua) ? "p_ios" : (/Android/.test(ua) ? "p_and" : "p_web");
const pt = tabs.find((t) => t.dataset.p === pick); if (pt) pt.click();

// Kayarak görünme
const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 }) : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
