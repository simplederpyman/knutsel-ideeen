const ideas = [
  { title: "Papieren vlinder", materials: ["papier", "stiften", "schaar"], category: "papier", difficulty: "makkelijk", description: "Knip een vlinder uit papier en versier de vleugels met patronen." },
  { title: "WC-rol raket", materials: ["wc-rol", "verf", "papier"], category: "recyclen", difficulty: "makkelijk", description: "Maak van een wc-rol een raket met papieren vinnen." },
  { title: "Sokkenpop", materials: ["oude sok", "knopen", "lijm"], category: "textiel", difficulty: "makkelijk", description: "Gebruik een oude sok om een grappige handpop te maken." },
  { title: "Kroon van karton", materials: ["karton", "glitter", "lijm"], category: "verkleed", difficulty: "makkelijk", description: "Knip een kroon uit karton en versier hem als koning of koningin." },
  { title: "Papieren bloemen", materials: ["gekleurd papier", "lijm", "rietjes"], category: "papier", difficulty: "makkelijk", description: "Rol en knip blaadjes om een boeket papieren bloemen te maken." },
  { title: "Steen schilderen", materials: ["stenen", "acrylverf", "kwast"], category: "natuur", difficulty: "makkelijk", description: "Verander stenen in lieveheersbeestjes, monsters of fruit." },
  { title: "Eierdoos rups", materials: ["eierdoos", "verf", "pijpenragers"], category: "recyclen", difficulty: "makkelijk", description: "Knip een strook uit een eierdoos en maak er een vrolijke rups van." },
  { title: "Regenboog mobiel", materials: ["papier", "touw", "watten"], category: "kamerdecoratie", difficulty: "makkelijk", description: "Hang een regenboog met wolkjes boven je bed of bureau." },
  { title: "Masker van bord", materials: ["papieren bord", "elastiek", "stiften"], category: "verkleed", difficulty: "makkelijk", description: "Maak een dierenmasker of superheldenmasker van een bord." },
  { title: "Kijkdoos jungle", materials: ["schoenendoos", "papier", "lijm"], category: "3D", difficulty: "gemiddeld", description: "Bouw een mini-jungle in een doos met laagjes bomen en dieren." },
  { title: "Ketting van pasta", materials: ["droge pasta", "verf", "koord"], category: "sieraden", difficulty: "makkelijk", description: "Verf pasta in kleuren en rijg het tot een ketting." },
  { title: "Vingerverf boom", materials: ["verf", "papier"], category: "schilderen", difficulty: "makkelijk", description: "Maak een boom met een handafdruk als stam en vingers als takken." },
  { title: "Papieren vliegtuig parade", materials: ["papier", "stiften"], category: "papier", difficulty: "makkelijk", description: "Vouw verschillende vliegtuigjes en test welke het verst vliegt." },
  { title: "Mini schatkist", materials: ["luciferdoosje", "verf", "stickers"], category: "decoratie", difficulty: "makkelijk", description: "Versier een doosje als schatkist voor kleine schatten." },
  { title: "Dierenoren hoofdband", materials: ["karton", "hoofdband", "lijm"], category: "verkleed", difficulty: "makkelijk", description: "Maak kattenoren, berenoren of konijnenoren." },
  { title: "Papieren slinger", materials: ["papier", "nietmachine", "schaar"], category: "feest", difficulty: "makkelijk", description: "Maak een kleurrijke slinger van papieren ringen." },
  { title: "Handafdruk vis", materials: ["verf", "papier", "stift"], category: "schilderen", difficulty: "makkelijk", description: "Gebruik een handafdruk als basis voor een vis." },
  { title: "Knopenboom", materials: ["knopen", "papier", "lijm"], category: "collage", difficulty: "makkelijk", description: "Maak een boom en plak knopen als blaadjes of appels." },
  { title: "Karton stad", materials: ["karton", "stiften", "tape"], category: "3D", difficulty: "gemiddeld", description: "Bouw huizen, wegen en torens van kleine kartonnen doosjes." },
  { title: "Wol pompon kuiken", materials: ["wol", "vilt", "lijm"], category: "textiel", difficulty: "gemiddeld", description: "Maak een zacht kuikentje van gele pompons." },
  { title: "Blaasverf monsters", materials: ["verf", "rietje", "papier"], category: "schilderen", difficulty: "makkelijk", description: "Blaas verf over papier en maak er monsterfiguren van." },
  { title: "Kerstster van ijsstokjes", materials: ["ijsstokjes", "lijm", "glitter"], category: "feest", difficulty: "makkelijk", description: "Plak ijsstokjes in een stervorm en versier ze." },
  { title: "Papieren slak", materials: ["papier", "lijm", "oogjes"], category: "papier", difficulty: "makkelijk", description: "Rol een papieren spiraal als slakkenhuis." },
  { title: "Flessendop mozaïek", materials: ["flesdoppen", "karton", "lijm"], category: "recyclen", difficulty: "gemiddeld", description: "Maak een kleurrijk patroon of figuur met doppen." },
  { title: "Wol regenboog", materials: ["wol", "karton", "lijm"], category: "textiel", difficulty: "makkelijk", description: "Wikkel wol om karton in regenboogkleuren." },
  { title: "Vilt bloem broche", materials: ["vilt", "veiligheidsspeld", "lijm"], category: "sieraden", difficulty: "gemiddeld", description: "Knip lagen vilt en maak een draagbare bloem." },
  { title: "Papieren draak", materials: ["papier", "stiften", "schaar"], category: "papier", difficulty: "makkelijk", description: "Maak een vrolijke draak met een harmonica-lijf." },
  { title: "Sneeuwvlok knipsels", materials: ["papier", "schaar"], category: "papier", difficulty: "makkelijk", description: "Vouw papier en knip patronen voor sneeuwvlokken." },
  { title: "Kijker van rollen", materials: ["2 wc-rollen", "touw", "tape"], category: "recyclen", difficulty: "makkelijk", description: "Maak een verrekijker om avonturier te spelen." },
  { title: "Zee in een pot", materials: ["pot", "schelpjes", "zand"], category: "decoratie", difficulty: "makkelijk", description: "Maak een mini-strand in een glazen pot." },
  { title: "Pijpenrager bloem", materials: ["pijpenragers"], category: "bloemen", difficulty: "makkelijk", description: "Draai pijpenragers tot simpele bloemen." },
  { title: "Sticker collage", materials: ["stickers", "papier"], category: "collage", difficulty: "makkelijk", description: "Maak een kunstwerk alleen met stickers." },
  { title: "Piratenschip van kurk", materials: ["kurken", "papier", "tandenstokers"], category: "recyclen", difficulty: "gemiddeld", description: "Bouw een bootje van kurken en maak een zeil." },
  { title: "Papieren ijsjes", materials: ["karton", "papier", "lijm"], category: "papier", difficulty: "makkelijk", description: "Maak ijshoorntjes met fantasie-smaken van papier." },
  { title: "Dino voetafdruk", materials: ["verf", "papier"], category: "schilderen", difficulty: "makkelijk", description: "Gebruik een voetafdruk als lichaam van een dinosaurus." },
  { title: "Dromenvanger simpel", materials: ["karton", "wol", "veren"], category: "kamerdecoratie", difficulty: "gemiddeld", description: "Maak een simpele dromenvanger met een kartonnen ring." },
  { title: "Hartjesstempel", materials: ["wc-rol", "verf", "papier"], category: "stempelen", difficulty: "makkelijk", description: "Vouw een wc-rol tot hartvorm en stempel hartjes." },
  { title: "Papieren waaier", materials: ["papier", "stiften"], category: "papier", difficulty: "makkelijk", description: "Vouw een simpele waaier en versier hem vrolijk." },
  { title: "Toverstaf", materials: ["stokje", "lint", "glitterpapier"], category: "verkleed", difficulty: "makkelijk", description: "Maak een magische toverstaf met ster en linten." },
  { title: "Karton gitaar", materials: ["doos", "elastiek", "karton"], category: "muziek", difficulty: "gemiddeld", description: "Bouw een simpele gitaar van karton en elastiekjes." },
  { title: "Pinguïn van fles", materials: ["plastic fles", "verf", "papier"], category: "recyclen", difficulty: "gemiddeld", description: "Verf een fles zwart-wit en maak een pinguïn." },
  { title: "Papieren kroonluchter", materials: ["papier", "touw", "nietjes"], category: "kamerdecoratie", difficulty: "gemiddeld", description: "Maak een hangende decoratie met papieren stroken." },
  { title: "Handpop draak", materials: ["papieren zak", "papier", "lijm"], category: "verkleed", difficulty: "makkelijk", description: "Maak een draak-handpop van een papieren zak." },
  { title: "Boom van herfstbladeren", materials: ["bladeren", "papier", "lijm"], category: "natuur", difficulty: "makkelijk", description: "Gebruik echte bladeren voor een herfstkunstwerk." },
  { title: "Cupcake liner bloem", materials: ["cupcakevormpjes", "lijm", "papier"], category: "bloemen", difficulty: "makkelijk", description: "Maak bloemen van platte en gevouwen cupcakevormpjes." },
  { title: "Slang van dopjes", materials: ["flesdoppen", "koord", "stift"], category: "recyclen", difficulty: "gemiddeld", description: "Rijg doppen aan een koord voor een kleurrijke slang." },
  { title: "Mini vlaggetjeslijn", materials: ["papier", "touw", "lijm"], category: "feest", difficulty: "makkelijk", description: "Maak een kleine vlaggenlijn voor je kamer." },
  { title: "Zonnebloem bord", materials: ["papieren bord", "verf", "pitten"], category: "bloemen", difficulty: "makkelijk", description: "Verander een bord in een grote zonnebloem." },
  { title: "Monster bril", materials: ["karton", "stiften", "elastiek"], category: "verkleed", difficulty: "makkelijk", description: "Maak een gekke bril met monsterogen." },
  { title: "Kralenarmband", materials: ["kralen", "elastiek"], category: "sieraden", difficulty: "makkelijk", description: "Rijg kralen in een mooi kleurpatroon." },
  { title: "Papieren bootjes", materials: ["papier"], category: "papier", difficulty: "makkelijk", description: "Vouw bootjes en laat ze drijven in een bak water." },
  { title: "Vlinder van koffiefilters", materials: ["koffiefilters", "stiften", "knijper"], category: "papier", difficulty: "makkelijk", description: "Kleur koffiefilters in en knijp ze samen tot een vlinder." },
  { title: "Robot van doosjes", materials: ["doosjes", "folie", "lijm"], category: "recyclen", difficulty: "gemiddeld", description: "Bouw een robot van kleine verpakkingen en doosjes." },
  { title: "Papieren cactus", materials: ["groen papier", "potje", "lijm"], category: "decoratie", difficulty: "makkelijk", description: "Maak een cactus die nooit water nodig heeft." },
  { title: "Vis van cd", materials: ["oude cd", "papier", "lijm"], category: "recyclen", difficulty: "makkelijk", description: "Gebruik een oude cd als glinsterend vissenlichaam." },
  { title: "Lepel poppetje", materials: ["houten lepel", "stiften", "stof"], category: "poppen", difficulty: "makkelijk", description: "Maak een poppetje van een houten lepel." },
  { title: "Bloempot gezicht", materials: ["bloempot", "verf", "stift"], category: "decoratie", difficulty: "makkelijk", description: "Verf een grappig gezicht op een klein potje." },
  { title: "Karton doolhof", materials: ["schoenendoosdeksel", "rietjes", "lijm"], category: "spel", difficulty: "gemiddeld", description: "Maak een klein doolhof waar een knikker doorheen moet." },
  { title: "Papieren kroon vis", materials: ["papier", "lijm", "stiften"], category: "verkleed", difficulty: "makkelijk", description: "Maak een kroon met vissen en zeedieren erop." },
  { title: "Fruit mobiel", materials: ["karton", "verf", "touw"], category: "kamerdecoratie", difficulty: "gemiddeld", description: "Hang zelfgemaakte vruchten aan een mobiel." },
  { title: "Knijper vliegtuig", materials: ["wasknijper", "ijsstokjes", "lijm"], category: "voertuigen", difficulty: "makkelijk", description: "Maak een vliegtuigje van een knijper en stokjes." },
  { title: "Kabouterhuisje", materials: ["rol", "papier", "vilt"], category: "fantasie", difficulty: "gemiddeld", description: "Maak een mini-huisje voor kabouters." },
  { title: "Papieren pauw", materials: ["papier", "verf", "oogjes"], category: "dieren", difficulty: "makkelijk", description: "Maak een pauw met een grote uitgewaaierde staart." },
  { title: "Lenteboom met propjes", materials: ["crêpepapier", "lijm", "papier"], category: "collage", difficulty: "makkelijk", description: "Maak bloesem van kleine propjes papier." },
  { title: "Raceauto van rol", materials: ["wc-rol", "doppen", "verf"], category: "voertuigen", difficulty: "gemiddeld", description: "Maak een raceauto met doppen als wielen." },
  { title: "Papieren medaille", materials: ["karton", "lint", "stiften"], category: "feest", difficulty: "makkelijk", description: "Maak een medaille voor de kampioen van de dag." },
  { title: "Maan en sterren", materials: ["zwart papier", "folie", "lijm"], category: "ruimte", difficulty: "makkelijk", description: "Maak een nachtelijke collage met een glimmende maan." },
  { title: "Dierenmaskers set", materials: ["karton", "verf", "elastiek"], category: "verkleed", difficulty: "gemiddeld", description: "Maak meerdere maskers: leeuw, vos en panda." },
  { title: "Papieren bloemring", materials: ["papier", "lijm", "karton"], category: "bloemen", difficulty: "makkelijk", description: "Maak een krans van kleine papieren bloemen." },
  { title: "Regenmaker", materials: ["rol", "rijst", "folie"], category: "muziek", difficulty: "gemiddeld", description: "Maak een instrument dat klinkt als regen." },
  { title: "Schatkaart", materials: ["papier", "thee", "stift"], category: "fantasie", difficulty: "makkelijk", description: "Maak een oude schatkaart met verkleurd papier." },
  { title: "Papieren kikker", materials: ["papier", "stift"], category: "origami", difficulty: "makkelijk", description: "Vouw een kikker die echt een beetje kan springen." },
  { title: "Mini fotolijst", materials: ["ijsstokjes", "lijm", "verf"], category: "decoratie", difficulty: "makkelijk", description: "Maak een lijstje voor een kleine tekening of foto." },
  { title: "Tissue bloemen", materials: ["vloei- of tissuepapier", "draad"], category: "bloemen", difficulty: "makkelijk", description: "Maak luchtige bloemen van dun papier." },
  { title: "Karton vulkaan", materials: ["karton", "verf", "lijm"], category: "3D", difficulty: "gemiddeld", description: "Bouw een vulkaanvorm voor een stoer project." },
  { title: "Wol spin", materials: ["wol", "papier", "pijpenragers"], category: "dieren", difficulty: "makkelijk", description: "Maak een pluizige spin met acht poten." },
  { title: "Feesthoed", materials: ["karton", "elastiek", "glitter"], category: "feest", difficulty: "makkelijk", description: "Maak een vrolijke feesthoed voor een verjaardag." },
  { title: "Papieren trein", materials: ["papier", "lijm", "stiften"], category: "voertuigen", difficulty: "makkelijk", description: "Knip en plak een trein met meerdere wagons." },
  { title: "Zandkunst flesje", materials: ["flesje", "gekleurd zand"], category: "decoratie", difficulty: "makkelijk", description: "Vul een flesje met laagjes gekleurd zand." },
  { title: "Rups van pompons", materials: ["pompons", "lijm", "oogjes"], category: "dieren", difficulty: "makkelijk", description: "Plak pompons achter elkaar tot een rups." },
  { title: "Papieren lampion", materials: ["papier", "lijm", "schaar"], category: "feest", difficulty: "makkelijk", description: "Maak een klassieke lampion van gevouwen papier." },
  { title: "Ketting van rietjes", materials: ["rietjes", "koord", "schaar"], category: "sieraden", difficulty: "makkelijk", description: "Knip rietjes in stukjes en rijg ze als kralen." },
  { title: "Kleine ridder schild", materials: ["karton", "verf", "lint"], category: "verkleed", difficulty: "makkelijk", description: "Maak een stoer schild met je eigen familiewapen." },
  { title: "Papieren zon", materials: ["geel papier", "lijm", "stiften"], category: "weer", difficulty: "makkelijk", description: "Maak een zon met stralen en een lachend gezicht." },
  { title: "Doosje als garage", materials: ["schoenendoos", "stiften", "karton"], category: "spel", difficulty: "gemiddeld", description: "Maak een garage voor speelgoedauto’s." },
  { title: "Pasta mozaïek dier", materials: ["pasta", "lijm", "karton"], category: "collage", difficulty: "makkelijk", description: "Maak een dier door verschillende pastasoorten op te plakken." },
  { title: "Papieren ballon", materials: ["papier", "touw", "lijm"], category: "lucht", difficulty: "makkelijk", description: "Maak een heteluchtballon als muurdecoratie." },
  { title: "Kattenmasker", materials: ["karton", "elastiek", "stiften"], category: "verkleed", difficulty: "makkelijk", description: "Maak een lief of stoer kattenmasker." },
  { title: "Knutsel ijsbeer", materials: ["watten", "papier", "lijm"], category: "dieren", difficulty: "makkelijk", description: "Maak een zachte ijsbeer met watten." },
  { title: "Papieren harmonica slang", materials: ["papier", "lijm", "stiften"], category: "papier", difficulty: "makkelijk", description: "Vouw stroken papier tot een uitrekbare slang." },
  { title: "Kroon met edelstenen", materials: ["karton", "stickers", "glitter"], category: "verkleed", difficulty: "makkelijk", description: "Maak een luxe kroon vol nep-edelstenen." },
  { title: "Vlindertuin collage", materials: ["papier", "stickers", "lijm"], category: "collage", difficulty: "makkelijk", description: "Maak een tuin vol vlinders en bloemen." },
  { title: "Magneet van dop", materials: ["flesdop", "magneet", "lijm"], category: "recyclen", difficulty: "makkelijk", description: "Maak een koelkastmagneet met een mini-tekening erin." },
  { title: "Papieren camera", materials: ["karton", "stiften", "lint"], category: "fantasie", difficulty: "makkelijk", description: "Knip een camera uit en speel fotograaf." },
  { title: "Elfendeurtje", materials: ["ijsstokjes", "verf", "lijm"], category: "fantasie", difficulty: "gemiddeld", description: "Maak een mini-deurtje voor elfjes aan de muur of boom." },
  { title: "Slak van klei", materials: ["klei", "verf"], category: "boetseren", difficulty: "makkelijk", description: "Boetseer een slak met een spiraalhuis." },
  { title: "Raketslinger", materials: ["papier", "touw", "lijm"], category: "ruimte", difficulty: "makkelijk", description: "Maak een slinger van kleine raketten." },
  { title: "Papieren aquarium", materials: ["schoenendoos", "papier", "touw"], category: "3D", difficulty: "gemiddeld", description: "Maak vissen die in een doos lijken te zwemmen." },
  { title: "Vos van handafdruk", materials: ["verf", "papier", "stift"], category: "dieren", difficulty: "makkelijk", description: "Maak een vos met een handafdruk en oren." },
  { title: "Mini notitieboek", materials: ["papier", "nietjes", "karton"], category: "papier", difficulty: "makkelijk", description: "Maak een klein schriftje voor tekeningen of geheime notities." },
  { title: "Papieren rozet", materials: ["papier", "lijm"], category: "feest", difficulty: "gemiddeld", description: "Vouw een rozet voor decoratie of een prijs." },
  { title: "Bij van pompoms", materials: ["pompons", "pijpenragers", "lijm"], category: "dieren", difficulty: "makkelijk", description: "Maak een lieve bij met strepen en vleugels." },
  { title: "Karton telescoop", materials: ["keukenrol", "verf", "stickers"], category: "ruimte", difficulty: "makkelijk", description: "Versier een rol als eigen telescoop." },
  { title: "Papieren draaimolen", materials: ["papier", "splitpen", "rietje"], category: "speelgoed", difficulty: "gemiddeld", description: "Maak een draaiend molentje voor buiten." },
  { title: "Zeedier slinger", materials: ["papier", "touw", "lijm"], category: "zee", difficulty: "makkelijk", description: "Maak een slinger met vissen, zeesterren en krabben." },
  { title: "Kroon van bladeren", materials: ["bladeren", "karton", "lijm"], category: "natuur", difficulty: "makkelijk", description: "Maak een herfstkroon met echte bladeren." },
  { title: "Papieren huisdieren", materials: ["papier", "stiften", "lijm"], category: "dieren", difficulty: "makkelijk", description: "Maak een hele verzameling kleine huisdieren van papier." },
  { title: "Confetti kunst", materials: ["confetti", "lijm", "papier"], category: "collage", difficulty: "makkelijk", description: "Maak een feestelijk kunstwerk met confetti." },
  { title: "Kasteel van dozen", materials: ["kartonnen dozen", "verf", "schaar"], category: "3D", difficulty: "gemiddeld", description: "Bouw een stoer kasteel met torens en poorten." },
  { title: "Vogel van veertjes", materials: ["papier", "veren", "lijm"], category: "dieren", difficulty: "makkelijk", description: "Maak een vogel met echte of knutselveren." },
  { title: "Mini markt kraam", materials: ["doos", "papier", "stiften"], category: "spel", difficulty: "gemiddeld", description: "Maak een speelwinkeltje of marktkraam." },
  { title: "Papieren sterrenregen", materials: ["papier", "draad", "lijm"], category: "kamerdecoratie", difficulty: "makkelijk", description: "Hang sterren op verschillende hoogtes." },
  { title: "Robot hand", materials: ["karton", "rietjes", "touw"], category: "techniek", difficulty: "gemiddeld", description: "Maak een simpele robot-hand die kan buigen." }
];

const searchInput = document.getElementById('searchInput');
const randomBtn = document.getElementById('randomBtn');
const ideasGrid = document.getElementById('ideasGrid');
const featuredIdea = document.getElementById('featuredIdea');
const resultsCount = document.getElementById('resultsCount');

function createIdeaCard(idea) {
  const tags = [idea.category, idea.difficulty, ...idea.materials.slice(0, 3)]
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');

  return `
    <article class="idea-card">
      <h3>${idea.title}</h3>
      <div class="meta">Categorie: ${idea.category} · Moeilijkheid: ${idea.difficulty}</div>
      <p>${idea.description}</p>
      <div>${tags}</div>
    </article>
  `;
}

function renderIdeas(list) {
  ideasGrid.innerHTML = list.map(createIdeaCard).join('');
  resultsCount.textContent = `${list.length} idee${list.length === 1 ? '' : 'ën'} gevonden`;
}

function filterIdeas(query) {
  const q = query.toLowerCase().trim();
  if (!q) return ideas;

  return ideas.filter(idea => {
    const haystack = [
      idea.title,
      idea.category,
      idea.difficulty,
      idea.description,
      ...idea.materials
    ].join(' ').toLowerCase();

    return haystack.includes(q);
  });
}

function showRandomIdea() {
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  featuredIdea.classList.remove('hidden');
  featuredIdea.innerHTML = `
    <h2>Random idee: ${idea.title}</h2>
    <p><strong>Categorie:</strong> ${idea.category} | <strong>Moeilijkheid:</strong> ${idea.difficulty}</p>
    <p><strong>Materialen:</strong> ${idea.materials.join(', ')}</p>
    <p>${idea.description}</p>
  `;
}

searchInput.addEventListener('input', (e) => {
  renderIdeas(filterIdeas(e.target.value));
});

randomBtn.addEventListener('click', showRandomIdea);

renderIdeas(ideas);
