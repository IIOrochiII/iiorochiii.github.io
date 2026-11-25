/* ============ TUTAJ EDYTUJESZ ============ */
const SITE = {
  name: "Daniel Postołowicz",
  bio: "Absolwent informatyki na Uniwersytecie w Białymstoku. Buduję aplikacje, bawię się algorytmami i generatorami liczb pseudolosowych.",
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
    title: "Generatory liczb pseudolosowych",
    date: "2026",
    desc: "Praca inżynierska: porównanie generatorów PRNG i testy ich jakości statystycznej.",
    tags: ["Python", "Statystyka"],
    repo: "https://github.com/IIOrochiII/Dyplom",
    demo: ""
  },
  {
    title: "RaySnake",
    date: "2026",
    desc: "Klon kultowej gry snake stworzony w języku C przy pomocy RayLib",
    tags: ["C", "Raylib"],
    repo: "https://github.com/IIOrochiII/ray-snake",
    demo: ""
  },
    {
    title: "Best Budget Planer",
    date: "2026",
    desc: "Projekt zrealizowany na zajęciach z Filipem.N oraz Juliuszem.R, aplikacja do sterowania wydatkami oraz dysponowaniem czasem.",
    tags: ["Javascript", "Html","WebDev","Rest"],
    repo: "https://github.com/Nester303/bestbudgetplaner",
    demo: ""
  },
  // {
    // title: "Nazwa projektu",
    // date: "2025",
    // desc: "Krótki opis: co robi program i jaki problem rozwiązuje.",
    // tags: ["C#", ".NET"],
    // repo: "https://github.com/TWOJ-LOGIN/projekt",
    // demo: ""
  // }
];
/* ========================================= */

const $ = id => document.getElementById(id);
const ALL = "Wszystkie";

// Jedna sekcja = lista, filtry po tagach i komunikat o braku wyników.
function makeSection(key, items){
  const s = { key, items, active: ALL };
  s.render = function(){
    const tags = [ALL, ...new Set(s.items.flatMap(p => p.tags || []))];
    if (!tags.includes(s.active)) s.active = ALL;
    $("filters-" + key).replaceChildren(...tags.map(t => {
      const b = document.createElement("button");
      b.type = "button"; b.textContent = t;
      b.setAttribute("aria-pressed", String(t === s.active));
      b.onclick = () => { s.active = t; s.render(); };
      return b;
    }));
    const shown = s.items.filter(p => s.active === ALL || (p.tags || []).includes(s.active));
    $("empty-" + key).hidden = shown.length > 0;
    if (!shown.length) $("empty-" + key).textContent = s.items.length ? "Brak pozycji z tym tagiem." : s.emptyText || "";
    $("list-" + key).replaceChildren(...shown.map(card));
  };
  return s;
}

function card(p){
  const li = document.createElement("li");
  li.className = "project";
  const time = Object.assign(document.createElement("time"), { textContent: p.date || "" });
  const box = document.createElement("div");
  const h = document.createElement("h3");
  const main = p.repo || p.demo;
  if (main) h.append(Object.assign(document.createElement("a"), { href: main, textContent: p.title, target: "_blank", rel: "noopener" }));
  else h.textContent = p.title;
  const d = Object.assign(document.createElement("p"), { textContent: p.desc });
  const ul = document.createElement("ul"); ul.className = "tags";
  (p.tags || []).forEach(t => ul.append(Object.assign(document.createElement("li"), { textContent: t })));
  box.append(h, d, ul);
  const links = document.createElement("div"); links.className = "row-links";
  [["Kod", p.repo], ["Demo", p.demo]].forEach(([l, u]) => {
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
      desc: x.description || "Brak opisu.",
      tags: [x.language, ...(x.topics || [])].filter(Boolean),
      repo: x.html_url,
      demo: x.homepage || ""
    }));
  sec.emptyText = "Brak publicznych repozytoriów do wyświetlenia.";
}

function init(){
  document.title = SITE.name + " – projekty";
  $("name").textContent = SITE.name;
  $("footname").textContent = SITE.name;
  $("bio").textContent = SITE.bio;
  $("year").textContent = new Date().getFullYear();
  SITE.contact.forEach(c => {
    const a = document.createElement("a");
    a.href = c.url; a.textContent = c.label;
    if (!c.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    $("contact").append(a);
  });

  makeSection("projects", PROJECTS).render();

  if (SITE.githubUser) {
    const repos = makeSection("repos", []);
    $("sec-repos").hidden = false;
    $("empty-repos").hidden = false;
    $("empty-repos").textContent = "Ładowanie repozytoriów…";
    loadRepos(repos).then(() => repos.render()).catch(() => {
      $("empty-repos").hidden = false;
      $("empty-repos").textContent = "Nie udało się pobrać repozytoriów z GitHuba. Spróbuj odświeżyć stronę.";
    });
  }
}
init();