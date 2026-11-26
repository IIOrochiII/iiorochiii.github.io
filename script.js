/* ============ TUTAJ EDYTUJESZ ============ */
// Teksty w dwóch językach zapisujesz jako { pl: "...", en: "..." }.
// Zwykły napis (np. nazwa technologii) jest wyświetlany tak samo w obu językach.
const SITE = {
  name: "Daniel Postołowicz",
  bio: {
    pl: "Absolwent informatyki na Uniwersytecie w Białymstoku. Buduję aplikacje, różne aplikacje i ostatnio zajmuje arduino.",
    en: "Computer science graduate of the University of Białystok. I build applications, all kinds of them, and lately I have been working with Arduino."
  },
  contact: [
    { label: "GitHub",   url: "https://github.com/IIOrochiII" },
    //{ label: "LinkedIn", url: "https://www.linkedin.com/in/TWOJ-PROFIL" },
    { label: "E-mail",   url: "mailto:danielpostolowiczpraca@gmail.com" }
  ],
  // Login GitHub: sekcja "Repozytoria" pobierze Twoje repozytoria automatycznie. Zostaw "", aby ją ukryć.
  githubUser: "IIOrochiII"
};

// Dodawanie projektu = skopiuj jeden blok { ... }, wklej i zmień treść.
const PROJECTS = [
  {
    title: { pl: "Generatory liczb pseudolosowych", en: "Pseudorandom number generators" },
    date: "2026",
    desc: {
      pl: "Praca inżynierska: porównanie generatorów PRNG i testy ich jakości statystycznej.",
      en: "Engineering thesis: a comparison of PRNGs and tests of their statistical quality."
    },
    tags: ["Python", { pl: "Statystyka", en: "Statistics" }],
    repo: "https://github.com/IIOrochiII/Dyplom",
    demo: ""
  },
  {
    title: "RaySnake",
    date: "2026",
    desc: {
      pl: "Klon kultowej gry snake stworzony w języku C przy pomocy RayLib",
      en: "A clone of the classic Snake game written in C with Raylib."
    },
    tags: ["C", "Raylib"],
    repo: "https://github.com/IIOrochiII/ray-snake",
    demo: ""
  },
  {
    title: "Best Budget Planer",
    date: "2026",
    desc: {
      pl: "Projekt zrealizowany na zajęciach z Filipem.N oraz Juliuszem.R, aplikacja do sterowania wydatkami oraz dysponowaniem czasem.",
      en: "A class project built with Filip N. and Juliusz R.: an app for managing expenses and time."
    },
    tags: ["Javascript", "Html", "WebDev", "Rest"],
    repo: "https://github.com/Nester303/bestbudgetplaner",
    demo: ""
  },
  {
    title: { pl: "Przetwarzanie obrazów cyfrowych", en: "Digital image processing" },
    date: "2026",
    desc: {
      pl: "Aplikacja desktopowa z interfejsem Tkinter: transformacje punktowe, mieszanie obrazów, operacje na histogramie oraz filtry dolno-, górnoprzepustowe i statystyczne, zaimplementowane od podstaw.",
      en: "A desktop app with a Tkinter GUI: point transforms, image blending, histogram operations, and low-pass, high-pass and statistical filters, all implemented from scratch."
    },
    tags: ["Python", "Tkinter", "Pillow", { pl: "Przetwarzanie obrazu", en: "Image processing" }],
    repo: "https://github.com/IIOrochiII/PyFilters", // TODO: wklej link do repozytorium, np. "https://github.com/IIOrochiII/NAZWA-REPO"
    demo: ""
  },
  {
    title: { pl: "Organization App: drzewo organizacji", en: "Organization App: org chart" },
    date: "2026",
    desc: {
      pl: "Aplikacja webowa do zarządzania strukturą organizacyjną: działy wyświetlane jako drzewo, a ich przynależność zmienia się przeciągnięciem na inny dział. REST API w Spring Boot, baza PostgreSQL w Dockerze.",
      en: "A web app for managing an organization structure: departments are shown as a tree and can be re-parented by dragging them onto another department. Spring Boot REST API with PostgreSQL running in Docker."
    },
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker"],
    repo:  "https://github.com/IIOrochiII/managment-app"
, // popraw, jeśli repozytorium nazywa się inaczej
    demo: "https://github.com/IIOrochiII/managment-app"
  },
  {
  title: { pl: "Dokumentacja Projektu Kino", en: "Cinema App Documentation" },
  date: "2026",
  desc: {
    pl: "Dokumentacja Aplikacji służącej do obsługi kina, zawiera kompleksowy opis agentów, przepływu zdarzeń, diagramu klas, aktorów",
    en: "Documentation of Cinema Application, describes actors in system,events also includes flow charts, class diagrams."
  },
  tags: ["Documentation", "System Engineering", "Project Documentation", "WebDev"],
  repo: "https://mega.nz/file/YPtXxZoZ#Oe6vsrP5qCucNbzNq-vc86rjp1B6sTbE1HLaY6_a9OQ", // popraw, jeśli repozytorium nazywa się inaczej
  demo: ""
  },
  // {
    // title: { pl: "Nazwa projektu", en: "Project name" },
    // date: "2025",
    // desc: { pl: "Krótki opis: co robi program.", en: "Short description: what the program does." },
    // tags: ["C#", ".NET"],
    // repo: "https://github.com/TWOJ-LOGIN/projekt",
    // demo: ""
  // }
];
/* ========================================= */

// Teksty interfejsu
const UI = {
  pl: {
    projects: "Projekty", repos: "Repozytoria",
    filterProjects: "Filtr projektów", filterRepos: "Filtr repozytoriów",
    all: "Wszystkie", code: "Kod", demo: "Demo",
    noTag: "Brak pozycji z tym tagiem.",
    empty: "Brak pozycji do wyświetlenia.",
    noRepos: "Brak publicznych repozytoriów do wyświetlenia.",
    loading: "Ładowanie repozytoriów…",
    error: "Nie udało się pobrać repozytoriów z GitHuba. Spróbuj odświeżyć stronę.",
    noDesc: "Brak opisu.",
    titleSuffix: "projekty",
    meta: "Portfolio projektów studenta informatyki."
  },
  en: {
    projects: "Projects", repos: "Repositories",
    filterProjects: "Project filter", filterRepos: "Repository filter",
    all: "All", code: "Code", demo: "Demo",
    noTag: "No items with this tag.",
    empty: "Nothing to display.",
    noRepos: "No public repositories to display.",
    loading: "Loading repositories…",
    error: "Could not fetch repositories from GitHub. Try refreshing the page.",
    noDesc: "No description.",
    titleSuffix: "projects",
    meta: "Project portfolio of a computer science student."
  }
};
const LANGS = [["pl", "PL", "Polski"], ["en", "EN", "English"]];

const $ = id => document.getElementById(id);

// Język: zapamiętany wybór, a w razie jego braku język przeglądarki (pl albo en).
let lang = null;
try { lang = localStorage.getItem("lang"); } catch (e) {}
if (!UI[lang]) lang = (navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en";

// Zwraca tekst w aktualnym języku (dla { pl, en }) albo sam napis.
const tr = v => (v && typeof v === "object") ? (v[lang] ?? v.pl ?? "") : (v ?? "");

const sections = [];

// Jedna sekcja = lista, filtry po tagach i komunikat o braku wyników.
// status: "ready" | "loading" | "error"
function makeSection(key, items){
  const s = { key, items, active: null, status: "ready" };
  s.render = function(){
    const ui = UI[lang];
    const tagsOf = p => (p.tags || []).map(tr);
    const tags = [...new Set(s.items.flatMap(tagsOf))];
    if (s.active !== null && !tags.includes(s.active)) s.active = null;
    $("filters-" + key).replaceChildren(...[null, ...tags].map(tag => {
      const b = document.createElement("button");
      b.type = "button"; b.textContent = tag === null ? ui.all : tag;
      b.setAttribute("aria-pressed", String(tag === s.active));
      b.onclick = () => { s.active = tag; s.render(); };
      return b;
    }));
    const shown = s.items.filter(p => s.active === null || tagsOf(p).includes(s.active));
    const msg = s.status === "loading" ? ui.loading
              : s.status === "error" ? ui.error
              : !s.items.length ? (key === "repos" ? ui.noRepos : ui.empty)
              : !shown.length ? ui.noTag : "";
    $("empty-" + key).textContent = msg;
    $("empty-" + key).hidden = !msg;
    $("list-" + key).replaceChildren(...shown.map(card));
  };
  sections.push(s);
  return s;
}

function card(p){
  const ui = UI[lang];
  const li = document.createElement("li");
  li.className = "project";
  const time = Object.assign(document.createElement("time"), { textContent: p.date || "" });
  const box = document.createElement("div");
  const h = document.createElement("h3");
  const main = p.repo || p.demo;
  if (main) h.append(Object.assign(document.createElement("a"), { href: main, textContent: tr(p.title), target: "_blank", rel: "noopener" }));
  else h.textContent = tr(p.title);
  const d = Object.assign(document.createElement("p"), { textContent: tr(p.desc) || ui.noDesc });
  const ul = document.createElement("ul"); ul.className = "tags";
  (p.tags || []).forEach(x => ul.append(Object.assign(document.createElement("li"), { textContent: tr(x) })));
  box.append(h, d, ul);
  const links = document.createElement("div"); links.className = "row-links";
  [[ui.code, p.repo], [ui.demo, p.demo]].forEach(([l, u]) => {
    if (u) links.append(Object.assign(document.createElement("a"), { href: u, textContent: l, target: "_blank", rel: "noopener" }));
  });
  if (links.children.length) box.append(links);
  li.append(time, box);
  return li;
}

async function loadRepos(sec){
  const r = await fetch("https://api.github.com/users/" + SITE.githubUser + "/repos?sort=updated&per_page=100");
  if (!r.ok) throw new Error(r.status);
  const repos = await r.json();
  // Pomijamy forki oraz repozytoria, które masz już jako ręczne projekty.
  const known = new Set(PROJECTS.map(p => (p.repo || "").toLowerCase()));
  sec.items = repos
    .filter(x => !x.fork && !known.has(x.html_url.toLowerCase()))
    .map(x => ({
      title: x.name,
      date: (x.pushed_at || "").slice(0, 4),
      desc: x.description || "",
      tags: [x.language, ...(x.topics || [])].filter(Boolean),
      repo: x.html_url,
      demo: x.homepage || ""
    }));
}

function renderLangButtons(){
  $("lang").replaceChildren(...LANGS.map(([code, label, full]) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = label;
    b.lang = code; b.setAttribute("aria-label", full);
    b.setAttribute("aria-pressed", String(code === lang));
    b.onclick = () => {
      if (code === lang) return;
      lang = code;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      applyLang();
    };
    return b;
  }));
}

// Ustawia wszystkie teksty zgodnie z aktualnym językiem.
function applyLang(){
  const ui = UI[lang];
  document.documentElement.lang = lang;
  document.title = SITE.name + " – " + ui.titleSuffix;
  document.querySelector('meta[name="description"]').setAttribute("content", ui.meta);
  $("bio").textContent = tr(SITE.bio);
  $("h-projects").textContent = ui.projects;
  $("h-repos").textContent = ui.repos;
  document.querySelector("#sec-projects .bar").setAttribute("aria-label", ui.filterProjects);
  document.querySelector("#sec-repos .bar").setAttribute("aria-label", ui.filterRepos);
  $("contact").replaceChildren(...SITE.contact.map(c => {
    const a = document.createElement("a");
    a.href = c.url; a.textContent = tr(c.label);
    if (!c.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }));
  renderLangButtons();
  sections.forEach(s => { s.active = null; s.render(); });
}

function init(){
  $("name").textContent = SITE.name;
  $("footname").textContent = SITE.name;
  $("year").textContent = new Date().getFullYear();

  makeSection("projects", PROJECTS);

  let repos = null;
  if (SITE.githubUser) {
    repos = makeSection("repos", []);
    repos.status = "loading";
    $("sec-repos").hidden = false;
  }

  applyLang();

  if (repos) {
    loadRepos(repos)
      .then(() => { repos.status = "ready"; repos.render(); })
      .catch(() => { repos.status = "error"; repos.render(); });
  }
}
init();
