# Vibely — Stop coding. Start shipping.

Satirische Landingpage für ein KI-Coding-Produkt. Je weiter man scrollt, desto
sichtbarer wird die KI hinter dem Verkaufstext: Man kann ihr beim Nachdenken
zusehen, ihr Kontextfenster füllt sich, und am Ende komprimiert sie die ganze
Seite zu einer Zusammenfassung über dich. Dann übernimmt **/dev/wolves** und
redet kurz im Ernst über Agentic Engineering.

A lupusmalusdeviant production.

## Start

```sh
npm install
npm run dev      # http://localhost:4321  (EN) und /de/ (DE)
npm run build    # statisch nach dist/, je Sprache eine eigenständige HTML-Datei
```

## Aufbau

| Datei | Inhalt |
|---|---|
| `src/i18n/en.ts`, `src/i18n/de.ts` | Sämtliche Texte, beide mit derselben Form (`Dict`) |
| `src/components/Page.astro` | Die Seite: Prompt-Hero, Launch-Feed, Benchmark, Features, LinkedIn-Wand, Versionshinweise, Preisrechner, FAQ, Komprimierung |
| `src/components/Thought.astro` | Aufklappbares „Nachdenken“ des Verkaufs-Agents |
| `src/components/Demo.astro` | Agent behebt einen Tippfehler und zerlegt dabei alles |
| `src/components/AgentChat.astro` | Chat-Agent, der je Abschnitt aufdringlicher wird; Tab-Titel-Gag |
| `src/components/HackerTerminal.astro` | „hacked by /dev/wolves“-Plakette (ab dem Hack) + Film-Hacker-Terminal (ab der Kamera-Freigabe) |
| `src/components/Takeover.astro` | Der ernste Teil: Vibe Coding vs. Agentic Engineering |

## Mechaniken

- **Kontextfenster:** Leiste unter der Navigation, füllt sich mit der Scrolltiefe.
- **Komprimierung:** Erreicht man „Kontextfenster voll“, öffnet sich ein Fake-Systemdialog
  (`<dialog id="ctx-dialog">`). Dahinter schrumpft jeder Abschnitt mit `data-summary` auf eine
  Zeile, ohne dass die Seite unter dem Leser springt; schließen lässt sich der Dialog erst danach.
  Die Zusammenfassung erwähnt, ob man einen Gedanken aufgeklappt oder den Preisregler bewegt hat.
  „Kontext wiederherstellen“ lädt neu.
- **Der Hack schleicht sich ein:** Hero und Feed sind sauber. Benchmark und Features tragen
  Randnotizen, die wie vergessene Code-Kommentare aussehen (`WolfNote stage={1}`). Ab der
  Kamera-Freigabe werden sie dunkel (`stage={2}`) und das Hacker-Terminal taucht eingeklappt auf.
  Erst mit der Unterbrechung kommen Plakette, offenes Terminal und schiefe rote Notizen.
- Keine Tracker, nichts wird gesendet. `prefers-reduced-motion` schaltet die Animationen ab.

Neuer Abschnitt, der mitkomprimiert werden soll: `<section data-summary={…}>` direkt in `<main>`.

## Deployment

GitHub Pages über `.github/workflows/pages.yml`: Jeder Push auf `main` baut und veröffentlicht.
Adresse und Basispfad liefert `actions/configure-pages` (als `SITE`/`BASE` an Astro), deshalb
funktioniert dieselbe Konfiguration unter `…github.io/Vibely/` wie mit eigener Domain.
Einmalig nötig: *Settings → Pages → Build and deployment → Source: GitHub Actions*.

## Auffindbarkeit

- **Suche** (`meta.title`, `meta.description`): sagt offen, dass es Satire ist, mit den Begriffen,
  nach denen Leute suchen (Vibe Coding, Agentic Engineering, KI-Hype).
- **Link-Vorschau** (`meta.ogTitle`, `meta.ogDescription`, `public/og-en.png`, `public/og-de.png`):
  bleibt bewusst in der Rolle der Vibely-Werbung, damit LinkedIn & Co. die Pointe nicht verraten.
- Kanonische Adressen, `hreflang` (en, de, x-default), JSON-LD (`WebPage`, Genre Satire) und
  `sitemap.xml` entstehen beim Build aus `SITE`/`BASE`.
- Unter `…github.io/Vibely/` gilt keine eigene `robots.txt` (die läge an der Domain-Wurzel). Deshalb die
  Sitemap einmal in der Google Search Console einreichen: Property `https://lupusmalusdeviant.github.io/Vibely/`
  anlegen (Bestätigung per HTML-Tag), dann `sitemap.xml` eintragen. Ein Link von lupusmalus.dev
  hilft der Seite am meisten.
