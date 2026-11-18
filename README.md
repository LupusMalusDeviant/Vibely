# Vibely — Your codebase, endlich autonom.

Satirische Marketing-Seite über KI-Hype, Vibe Coding und LinkedIn-Thought-Leader,
die beim Scrollen immer creepier wird – bis **/dev/wolves** die Seite übernimmt und
kurz ernst über Agentic Engineering redet. A lupusmalusdeviant production.

## Start

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # statisch nach dist/
```

## Aufbau

| Datei | Inhalt |
|---|---|
| `src/pages/index.astro` | Alle Marketing-Abschnitte (Hero → Kontakt → Leere) |
| `src/components/HackerTerminal.astro` | „hacked by /dev/wolves“-Plakette + Mini-Terminal mit Film-Hacker-Skript |
| `src/components/AgentChat.astro` | Chat-Agent, der je nach Abschnitt zu aufmerksam wird; Tab-Titel-Gag |
| `src/components/Demo.astro` | „Live-Demo“: Agent fixt einen Tippfehler |
| `src/components/Takeover.astro` | Der ernste Twist: Vibe Coding vs. Agentic Engineering |
| `src/styles/global.css` | Design-Tokens, Creep-Helfer (`.serif`, `.tilt-*`, `.drift`) |

Creep-Mechanik: Serifenschrift schleicht sich ein, Karten verrutschen leicht, Texte kippen.
Keine Tracker, nichts wird gesendet – Uhrzeit/OS kommen nur lokal aus dem Browser.
`prefers-reduced-motion` schaltet Tipp- und Glitch-Animationen ab.
