# Which genres indie/AA publishers sign for Steam: second, gap-filling pass (remaining publishers, revenue leaders, stated preferences, signing data)

> **Method and reliability note (read first).**
>
> - **Scope.** I compiled these notes on 13 Oct 2026 as a second pass. They **do not repeat** the first-pass notes (`publisher_funded_genres.md`), which cover Hooded Horse, Devolver, Kepler, Annapurna, Outersloth, Pocketpair Publishing, published-vs-self-published averages and Voyer Law deal terms. Pass-1 publishers appear here only in one clearly labelled combined count (Q1-B).
> - **Access.** `curl` to store.steampowered.com, en.wikipedia.org and gg.deals returned HTTP 403 from the organization's egress proxy, so I could not read any page directly. **Every finding comes from web-search result extracts.** I used the full budget of 60 searches.
> - **Title lists.** For many publishers the titles come from **user-maintained databases** (Backloggd, PlayPile, GamePressure) or showcase round-ups. These lists are incomplete, and some 2026 dates are stale. Treat counts as indicative, not a census.
> - **Steam tags.** I could not open Steam store tags, so I could not cross-check any genre label I assigned myself.
>
> **Evidence labels.**
>
> - **[HARD DATA]**: company results or filings, deal and signing announcements, showcase line-ups, and analytics estimates with a named provider or method.
> - **[LISTING]**: a title or date from a user-maintained database or aggregator. Factual in kind, but unverified.
> - **[SELF-REPORTED]**: figures a company states about itself.
> - **[OPINION/ANECDOTE]**: interviews, panels, AMA write-ups and commentary.
> - **[OLDER DATA]**: published before 2024, or covering a period before 2024.
>
> **Genre buckets.** This scheme is my own and I applied it identically to every publisher. Each title gets one primary bucket:
>
> | Code | Bucket |
> |---|---|
> | RL | Roguelike/roguelite hybrid: deckbuilders, survivors-likes, roguelite shooters, roguelite tower defence |
> | ST | Strategy, tactics, 4X, RTS or tower defence (not roguelite) |
> | MG | Management or builder sim: city/colony/base builder, tycoon, god sim, automation |
> | JS | Job, vehicle or hunting sim |
> | CZ | Cozy or life sim, farming, cooking |
> | RPG | Role-playing game |
> | AC | Action, platformer, metroidvania or action-adventure, including soulslike, stealth and beat 'em up |
> | SH | Shooter (not roguelite), including co-op and extraction shooters |
> | HR | Horror |
> | NP | Narrative adventure or puzzle: point-and-click, detective, puzzle |
> | VN | Visual novel, otome or dating game |
> | SV | Survival or crafting |
> | RS | Racing or sports |
> | MP | Party, co-op or PvP multiplayer |
> | OT | Other (for example rhythm) |
> | ? | Genre not established |
>
> **Where each genre label comes from:**
>
> - **(s)**: the genre wording appears in the cited source extract.
> - **(a)**: **my own classification** from general knowledge of the title, not verified this session.
> - **(a-low)**: my own classification, low confidence.
> - **(t)**: inferred from the title alone (the weakest).
>
> **Inclusion rule.** I counted new titles released, announced or signed in 2024–2026. A few signed in 2026 for 2027 release are flagged. DLC, expansions, remasters or "editions" and pure ports are left out of the counts and listed separately where known.

## Q1. What genres are the 2024–2026 releases and announced signings of the remaining indie/AA publishers? (tally)

### Takeaway
I covered 25 publishers plus everplay's simulation arm, astragon. Across them I found **208 titles**, and could establish a genre for **133**. No single genre dominates the classified titles:

- **Action/platformer/metroidvania:** 16%
- **Roguelite hybrids:** 11%
- **Horror:** 10%
- **Management sims:** 8%

The mix divides sharply by type of publisher:

- **AA or owned-studio publishers** (Nacon, THQ Nordic, Pullup, Krafton, Gryphline, astragon) lean towards racing/sports (24% of their classified titles), action, RPG and job sims. These mostly come from in-house franchises.
- **Indie labels** (95 classified titles) lean towards:
  - roguelites: 16%
  - action/platformers: 15%
  - horror: 11%
  - management sims: 11%
  - strategy: 9%
  - narrative/puzzle adventures: 9%

Racing/sports and job sims barely appear in indie-label slates (1 title each). I could not classify **36% of all titles (75 of 208)**, so all shares are indicative.

### Cited Findings

#### A. Tally table: titles by genre bucket, 2024–2026
Counts per publisher. Section C gives the label for each title and its source. Publisher type is my grouping: "AA" means AA or owned-studio publishers; HandyGames and Daedalic count as indie labels even though larger groups own them.

| Publisher (type; period covered) | RL | ST | MG | JS | CZ | RPG | AC | SH | HR | NP | VN | SV | RS | MP | OT | ? | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Raw Fury (indie; 2025 releases + 2026 slate) | 3 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 2 | 4 | 0 | 0 | 0 | 0 | 0 | 2 | 15 |
| Team17 label of everplay (indie; 2025–26) | 1 | 1 | 2 | 0 | 0 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 0 | 3 | 0 | 3 | 15 |
| everplay simulation arm, astragon (AA; 2025) | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| tinyBuild (indie; Connect 2026 slate) | 2 | 0 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 8 |
| Playstack (indie; 2024–26) | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 2 | 8 |
| Curve Games (indie; 2025–26) | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 5 |
| Fireshine Games (indie; 2025–26) | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 5 |
| THQ Nordic (AA; Aug 2025 showcase slate) | 0 | 0 | 1 | 0 | 0 | 2 | 3 | 0 | 1 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 10 |
| HandyGames, THQ Nordic's indie label (2025–26) | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 6 |
| Nacon (AA; FY25/26 + announced) | 0 | 0 | 0 | 1 | 0 | 2 | 2 | 1 | 1 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 14 |
| Daedalic, Nacon's indie label (2025–26) | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 |
| Pullup: Focus/Dotemu (AA; FY25/26 + FY26/27 line-up) | 0 | 0 | 0 | 2 | 0 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 12 |
| Krafton (AA; owned studios + second-party deal) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 4 |
| Kwalee PC/console label (indie; 2025–26) | 1 | 0 | 1 | 0 | 0 | 0 | 2 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 4 | 10 |
| Thunderful (indie; 2026 pipeline) | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 3 |
| Headup (indie; 2025–26) | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 9 |
| Akupara Games (indie; 2025–26) | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 7 | 10 |
| Freedom Games (indie; 2024–26) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 5 | 6 |
| Wandering Wizard (indie; 2025–26) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 |
| 2 Left Thumbs (micro-publisher; dated 2025–26) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 14 |
| PQube (indie; 2025–26) | 0 | 1 | 1 | 0 | 0 | 1 | 2 | 0 | 1 | 0 | 4 | 0 | 0 | 0 | 0 | 7 | 17 |
| Wired Productions (indie; 2025–26) | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 7 |
| Modern Wolf (indie; 2024 only, none found for 2025–26) | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| Joystick Ventures (indie; 2025–26, mostly console versions) | 1 | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 8 |
| Gryphline (AA; Hypergryph in-house) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 3 |
| Paradox Arc (indie; 2025–26) | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 3 |
| **Total (26 rows)** | **15** | **9** | **11** | **6** | **3** | **10** | **21** | **9** | **13** | **10** | **5** | **4** | **10** | **6** | **1** | **75** | **208** |

**Studio-funded labels with 2026 signings (kept out of the totals above; details in D):**

| Label | RL | ST | MG | JS | CZ | RPG | AC | SH | HR | NP | VN | SV | RS | MP | OT | ? | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Kinetic Publishing (Phasmophobia developer; formed Jan 2026) | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 5 |
| Aggro Crab label | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| Yogscast Games (2026 signings found) | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| Envar Publishing (first signing, Aug 2026) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

#### B. Overall genre count (my calculation from the table above)
Percentages are shares of **classified** titles only.

| Bucket | All 26 rows (208 titles; 133 classified) | Indie-label subset (163; 95 classified) | AA subset (45; 38 classified) | New studio-funded labels (10) | Combined with pass-1 publishers, mapped (242; 164 classified) |
|---|---|---|---|---|---|
| AC action/platformer/metroidvania | 21 (15.8%) | 14 (14.7%) | 7 (18.4%) | 2 | 27 (16.5%) |
| RL roguelike/roguelite hybrid | 15 (11.3%) | 15 (15.8%) | 0 | 3 | 20 (12.2%) |
| HR horror | 13 (9.8%) | 10 (10.5%) | 3 (7.9%) | 2 | 14 (8.5%) |
| MG management/builder sim | 11 (8.3%) | 10 (10.5%) | 1 (2.6%) | 0 | 15 (9.1%) |
| RPG | 10 (7.5%) | 5 (5.3%) | 5 (13.2%) | 0 | 15 (9.1%) |
| NP narrative/puzzle adventure | 10 (7.5%) | 9 (9.5%) | 1 (2.6%) | 0 | 11 (6.7%) |
| RS racing/sports | 10 (7.5%) | 1 (1.1%) | 9 (23.7%) | 1 | 11 (6.7%) |
| ST strategy/tactics (non-roguelite) | 9 (6.8%) | 9 (9.5%) | 0 | 0 | 15 (9.1%) |
| SH shooter | 9 (6.8%) | 6 (6.3%) | 3 (7.9%) | 0 | 10 (6.1%) |
| JS job/vehicle/hunting sim | 6 (4.5%) | 1 (1.1%) | 5 (13.2%) | 1 | 6 (3.7%) |
| MP party/co-op/PvP | 6 (4.5%) | 4 (4.2%) | 2 (5.3%) | 0 | 6 (3.7%) |
| VN visual novel/otome/dating | 5 (3.8%) | 5 (5.3%) | 0 | 0 | 5 (3.0%) |
| SV survival/crafting | 4 (3.0%) | 3 (3.2%) | 1 (2.6%) | 0 | 5 (3.0%) |
| CZ cozy/life/farming/cooking | 3 (2.3%) | 2 (2.1%) | 1 (2.6%) | 1 | 3 (1.8%) |
| OT other (rhythm) | 1 (0.8%) | 1 (1.1%) | 0 | 0 | 1 (0.6%) |
| ? genre not established | 75 | 68 | 7 | 0 | 78 |

**How the combined column was built.** It adds the pass-1 tallies for Hooded Horse (12), Devolver (5 named), Kepler (10) and Pocketpair (7), re-mapped into my buckets:

- **Hooded Horse:** city/colony builders to MG 4; 4X, tactics and unverified "strategy" to ST 6; roguelite strategy to RL 2.
- **Devolver:** RL 2, SH 1, NP 1, AC 1.
- **Kepler:** RPG 4, AC 2, SV 1, RS 1 (Rematch), ? 2.
- **Pocketpair:** HR 1, RPG 1, RL 1, AC 3, ? 1.

I left out Annapurna (pass 1 assigned no sourced genres) and Outersloth (its self-reported categories do not map cleanly).

#### C. Title-level evidence by publisher (labels and sources)

- **Raw Fury** [LISTING plus HARD DATA announcements]
  - **2025 releases:** Post Trauma HR (a); Knights in Tight Spaces RL (a); Blue Prince NP (a), a puzzle adventure with roguelike room-drafting; Kathy Rain 2: Soothsayer NP (a); The Séance of Blake Manor NP (a); Monsters Are Coming! Rock & Road RL (a), a roguelite tower-defence game slated for PC on 20 Nov 2025; Routine HR (a).
  - **2026 slate:**
    - Esoteric Ebb, RPG (s): "role-playing" on Wikipedia, a single-player CRPG on its store listing, PC 3 Mar 2026.
    - Last Man Sitting, RL (s): "roguelite arena shooter" with bullet-hell swarms, from DoubleMoose Games.
    - KuloNiku: Bowl Up!, CZ (s): a cozy cooking game.
    - Rivage, NP (s): a first-person puzzle game from Exnilo Studio.
    - Craftlings, ST (s): side-scrolling strategy from ARIANO Games. The year is unconfirmed.
    - Deep Dish Dungeon, AC (s, **sources conflict**): Gematsu calls it an action game from Behold Studios; Gamebiz calls it a survival-exploration game about cooking and crafting.
    - Not established: Regions of Ruin: Runegate (one listing also shows "Regions of Ruin 2", counted once) and My Work Is Not Yet Done.
  - Sources: [Wikipedia: Raw Fury](https://en.wikipedia.org/wiki/Raw_Fury); [TwistedVoxel](https://twistedvoxel.com/raw-fury-expands-publishing-lineup-with-new-partnerships-and-2026-release-plans/); [Allkeyshop](https://www.allkeyshop.com/blog/raw-fury-3-titles-3-release-dates-all-coming-to-game-pass-this-year-news-n); [Wikipedia: Esoteric Ebb](https://en.wikipedia.org/wiki/Esoteric_Ebb); [Gematsu: Raw Fury](https://www.gematsu.com/companies/raw-fury); [Gamebiz (JP)](https://gamebiz.jp/news/425392)
- **Team17 label (everplay)** [LISTING]
  - **2025:** Date Everything! VN (a); Nice Day for Fishing RPG (a), a cozy fishing RPG; Jumping Jazz Cats MP (a-low); Goblin Cleanup MP (a-low), co-op, 18 Sep 2025; Ritual of Raven ?, 7 Aug 2025; Worms Across Worlds ST (a), artillery strategy, 7 Aug 2025, platform not confirmed.
  - **2026:**
    - Sintopia, MG (s): "God sim management", 16 Apr 2026.
    - Wardrum, RL (s): "turn-based rhythm roguelite", 7 May 2026.
    - LumenTale: Memories of Trey, RPG (s): "Monster Collector RPG", 26 May 2026.
    - Rogue Point, SH (a): co-op FPS, possibly with roguelite structure, 4 Aug 2026.
    - Hell Let Loose: Vietnam, SH (a): 13 Aug 2026.
    - Golf With Your Friends 2, MP (a): Q4 2026.
    - RockBeasts, MG (s): "story-driven management game about running a band".
    - Not established: Silver Pines (8 Oct 2026) and Skinwalker: First Blood (Q2).
  - **Excluded:** Hell Let Loose DLCs (7 Oct 2025); Heroes of Hammerwatch II: Celestial Ruins (DLC); Age of Darkness: Final Stand (a 2021 game whose 2025 listing is probably a re-release).
  - **Listed for 2027:** Holstin and Greak 2: Alliance of the Storms.
  - Sources: [Backloggd: Team17](https://backloggd.com/company/team17/); [Backloggd releases](https://backloggd.com/company/team17/release/); [PlayPile: Team17](https://playpile.gg/publishers/team17); [Gamesplanet Team17 listing](https://us.gamesplanet.com/publishers/153-team17-digital?page=3); [Team17 gamescom press release (Games Press)](https://gamespress.com/Team17-reveals-their-line-up-of-games-for-Gamescom-2024)
- **everplay simulation arm (astragon)** [HARD DATA]
  - Firefighting Simulator: Ignite JS (a) and Seafarer: The Ship Sim JS (a). Both "performed below expectations" in FY2025.
  - The extract did not name the label; attributing them to astragon is **my inference**.
  - Sources: [everplay FY2025 results (Ticker RNS, 24 Mar 2026)](https://www.ticker.app/lse/EVPL/rns/2026-03-24/Unaudited-Final-Results-2025/7774X); [everplay Q4 2025 call transcript (roic.ai)](https://www.roic.ai/quote/EVPL.L/transcripts/2025-year/4-quarter)
- **tinyBuild** [HARD DATA: tinyBuild Connect showcase, 14 Sep 2026]
  - Graveyard Keeper 2, MG (a): 22 Sep 2026.
  - Hull Rupture, RL (s): "base management and tower defense roguelike" from Konfa Games, 4 Nov 2026.
  - The Crab is Walking, RL (s): "roguelite kingdom builder".
  - The Lift, JS (s): "supernatural handyman sim", 2027.
  - Kingmakers, SH (a): early access on Steam, no date given.
  - Not established: Probably Stolen (28 Oct), Road to Jukai (formerly Silent Road; 2027) and Trainfort (playtest).
  - Hozy only received an update and is not counted.
  - Sources: [Digital Citizen](https://www.digitalcitizen.life/tinybuild-connect-2026-reveals-new-games-release-dates-and-major-updates/); [Prima Games](https://primagames.com/news/everything-announced-at-tinybuild-connect-2026); [SteamDeckHQ](https://steamdeckhq.com/news/tinybuild-connect-2026-summary/)
- **Playstack** [LISTING]
  - Balatro, RL (a): 2024.
  - Abiotic Factor, SV (a): early access 2024; Backloggd lists 1.0 on 22 Jul 2025.
  - Void/Breaker, RL (a-low): 2025.
  - Unbeatable, OT (a): rhythm adventure, 9 Dec 2025.
  - Raccoin: Coin Pusher Roguelike, RL (s, from the title): 31 Mar 2026.
  - Mortal Shell II, AC (a): soulslike, 20 Aug 2026.
  - Not established: Little Problems (9 Sep 2025) and One Move Away (Ramage Games; 28 May 2026).
  - **Excluded:** Abiotic Factor expansions (Temple of Stone; Entropic Break in Q4 2026); The Last Faith DLC; the Unbeatable content companion; Golden Idol Investigations, which appears to be add-on content.
  - Sources: [Backloggd: Playstack](https://backloggd.com/company/playstack/); [PlayPile: Playstack](https://playpile.gg/publishers/playstack); [MobyGames](https://www.mobygames.com/company/playstack-limited); [Gematsu tag](https://www.gematsu.com/tag/playstack)
- **Curve Games** [LISTING plus HARD DATA announcements]
  - Mechborn, RL (s): "roguelike deckbuilder" with Turtle Juice, announced Jan 2026, for late 2026 on PC (Steam) and consoles.
  - Cloudscrapers, MG (s): "relaxing resource-management strategy", Steam 14 Sep 2026.
  - Not established: Badlands Crew (28 Apr 2025), Super Loco World (14 Jul 2025) and Sovereign Tower (6 Aug 2026).
  - **Excluded:** The Ascent: Complete Edition; Serial Cleaner: Blood & Confetti (probably DLC); the Dungeons of Hinterberg episode (DLC).
  - In a July 2026 piece, GodIsAGeek said Curve had "3 new games to reveal this month"; these are unidentified.
  - Sources: [Backloggd: Curve](https://backloggd.com/company/curve-games/); [Gematsu: Mechborn (Jan 2026)](https://www.gematsu.com/2026/01/roguelike-deckbuilder-mechborn-announced-for-ps5-xbox-series-switch-2-switch-and-pc); [Inven Global: Mechborn](https://www.invenglobal.com/articles/20122/mechborn-revealed-curve-games-roguelike-deckbuilder-blends-mech-anime-greek-mythology-and-kaiju-combat); [Game Developer: Cloudscrapers press release](https://www.gamedeveloper.com/press-release/cloudscrapers-launches-on-steam-this-september-demo-available-now); [GodIsAGeek](https://godisageek.com/tag/stealth-inc-ultimate-edition/)
- **Fireshine Games** [LISTING]
  - A.I.L.A, HR (a): listed for Xbox on 25 Nov 2025; a PC date is not confirmed in the extract.
  - Tales of Seikyu, CZ (a): farming life sim, listed for 2025 in the gamescom 2024 roster; I could not confirm it shipped.
  - Denshattack!, AC (a): arcade train action, consoles 15 Jul 2026.
  - Not established: Duskfade (13 Aug 2026) and Gunboat God (2026, per the 2024 roster).
  - An "upcoming horror title" (2025) went unnamed and may be A.I.L.A, so it is not counted separately.
  - **Excluded:** Core Keeper Switch 2 Edition (port).
  - Sources: [Time Extension: Fireshine](https://www.timeextension.com/companies/fireshine_games); [PSU: Fireshine](https://www.psu.com/publisher/fireshine-games/); [gamescom 2024 roster (MartinCID)](https://www.martincid.com/technology-sv/fireshine-games-set-to-dazzle-gamescom-with-10-playable-titles-including-an-exclusive-sneak-peek-at-an-unannounced-new-game/)
- **THQ Nordic** [HARD DATA: Digital Showcase, 1 Aug 2025]
  - Wreckreation, RS (s): "racing and building", open-world "MixWorld".
  - The Guild – Europa 1410, MG (s): "medieval dynasty sim".
  - Titan Quest II, RPG (a): early access on Steam.
  - SpongeBob SquarePants: Titans of the Tide, AC (a): 18 Nov 2025.
  - Tides of Tomorrow, NP (a).
  - Wreckfest 2, RS (a).
  - Gothic 1 Remake, RPG (a).
  - REANIMAL, HR (a).
  - The Eternal Life of Goldman, AC (a).
  - Darksiders 4, AC (a): reported by Icy Veins only.
  - These are mainly owned or Embracer IP, not third-party indie signings.
  - Sources: [Insider Gaming](https://insider-gaming.com/thq-nordic-digital-showcase-2025-everything-announced/); [Game Developer recap](https://www.gamedeveloper.com/press-release/thq-nordic-showcase-2025-recap-all-announcements-trailers-steam-sale-details); [Icy Veins](https://wp-prod.icy-veins.com/?p=87307)
- **HandyGames** [LISTING]
  - Oddsparks: An Automation Adventure, MG (t): 2025; add-ons not counted.
  - Tattoo Tycoon, MG (t): 24 Oct 2025.
  - Not established: Regulators (21 May 2025), Lethal Honor: Order of the Apocalypse (7 Oct 2025), A Rat's Quest: The Way Back Home (3 Apr 2026) and Space Grunts: Chrono Shard (22 Jun 2026).
  - Secondary context, not counted:
    - 12 Orangepixel retro games were added to its catalogue.
    - It made party titles for Amazon's GameNight (mobile/TV).
    - Its publishing arm now operates as **THQ Nordic Mobile**; only the company site says so, dating it to Aug 2026.
  - Sources: [Backloggd: HandyGames releases](https://backloggd.com/company/handygames/release/); [HandyGames site](https://handy-games.com/en/); [HandyGames press: Orangepixel](https://press.handy-games.com/handygames-expands-indie-legacy-with-12-retro-hits-from-orangepixel)
- **Nacon** [HARD DATA: FY2025-26 results for Apr 2025–Mar 2026, published 20 Jul 2026, plus quarterly sales releases]
  - **Releases or sales drivers in the year:**
    - RS (a): Tour de France 2025, Pro Cycling Manager 25, Rugby League 26, Cricket 26, Rennsport.
    - AC (a): Hell is Us; Styx: Blades of Greed (stealth).
    - SH (a): RoboCop: Rogue City – Unfinished Business, a standalone expansion.
    - RPG (a): GreedFall: The Dying World.
  - The Mound, HR (a): released 15 Jul 2026.
  - **Announced:** MXGP 26 RS (a); Endurance Motorsport RS (a); Edge of Memories RPG (a); Hunting Simulator 3 JS (a).
  - Sources: [Nacon annual results press release (MFN)](https://mfn.se/all/a/nacon-s-a/press-release-nacon-annual-results-2025-2026-sales-for-the-1st-quarter-2026-2027-388e3380); [Investgame PDF](https://investgame.net/news/pdf/2026-07-20-nacon_earnings_2025_26_english_wp/); [Q3 sales (Game Industry Library)](https://gameindustrylibrary.com/documents/ca-third-quarter-2025-26-124-2-m-2/read)
- **Daedalic** [LISTING plus SELF-REPORTED showcase PR]
  - Yield: Fall of Rome, ST (s): "4X strategy", early access Jan 2025.
  - Star Trek: Voyager – Across the Unknown, ST (a): survival strategy. Its date is disputed (PSU lists 31 Dec 2025).
  - New Cycle, MG (a): city-builder.
  - The Occultist, HR (a).
  - Not established: Bloodgrounds (late 2025), Into the Emberlands, Woodo (2026) and Surviving Deponia (2026).
  - New Cycle, The Occultist and Into the Emberlands are listed among "recent hits"; their release years are not confirmed in the extracts.
  - Sources: [Daedalic Days showcase PR (13 Aug 2026)](https://daedalic.prezly.com/today-publisher-daedalic-entertainment-puts-developers-and-their-games-center-stage-in-its-first-public-daedalic-days-showcase); [PlayPile: Daedalic](https://playpile.gg/publishers/daedalic-entertainment); [Daedalic Steam Deck PR](https://daedalic.prezly.com/steam-deck-fans-rejoice-daedalic-entertainment-brings-big-updates-new-releases-and-sales); [PSU: Daedalic](https://www.psu.com/publisher/daedalic-entertainment/); [GamesMarket](https://www.gamesmarket.global/how-daedalic-entertainment-is-setting-itself-up-for-the-future/)
- **Pullup Entertainment (Focus/Dotemu)** [HARD DATA: FY2025/26 results, 11 Jun 2026]
  - **FY25/26 line-up:** MIO: Memories in Orbit AC (a), a metroidvania; Roadcraft JS (a); John Carpenter's Toxic Commando SH (a), co-op.
  - **FY26/27 line-up:**
    - Resonance: A Plague Tale Legacy, AC (a).
    - Gallipoli (BlackMill), SH (a): WW1 first-person shooter.
    - A new Train Sim World (Dovetail), JS (a).
    - Not established: Road Kings, BioEden, and the Dotemu titles Chivalware, Theos: City of Myth, Wardens of Avalon and Warhammer Age of Sigmar: Deathmaster.
  - Pullup says the line-up will add indie titles from its **Deck13 Spotlight** and **The Arcade Crew** labels (unnamed).
  - Two FY25/26 Dotemu releases are mentioned but were not named in the extract, so they are not counted.
  - Sources: [AMF filing (11 Jun 2026)](https://echanges.dila.gouv.fr/OPENDATA/AMF/ACT/2026/06/FCACT080073_20260611.pdf); [Investgame PDF](https://investgame.net/news/pdf/2026-06-12-pullup_pr_english_earnings_fy26_final_wp/); [GamesMarket](https://www.gamesmarket.global/pullup-capitalizes-on-strong-back-catalog-and-two-dotemu-releases)
- **Krafton** [HARD DATA]
  - inZOI, CZ (s): "life-simulation game".
  - MIMESIS, HR (a): co-op horror.
  - Subnautica 2, SV (a): early access 14 May 2026.
  - ZETA from Nirvanana, MP (s): "character-based strategic PvP". This was Krafton's first second-party publishing deal made through an equity investment in an outside developer. The signing date is not shown and is probably 2024; release was slated for 2025.
  - Sources: [Massively OP (11 Feb 2026)](https://massivelyop.com/2026/02/11/q4-2025-celebrating-a-record-year-krafton-teases-subnautica-2-and-plops-og-subnautica-on-switch-2/); [4Gamer](https://www.4gamer.net/games/754/G075492/20260115037/index_2.html); [GodIsAGeek: Subnautica 2](https://godisageek.com/2026/07/subnautica-2-five-million-sales/); [Digital Terminal: Nirvanana deal](https://digitalterminal.in/gaming/krafton-signs-publishing-partnership-with-game-developer-nirvanana)
- **Kwalee (PC/console label)** [HARD DATA for The Precinct; LISTING for the rest]
  - The Precinct, AC (s): "Neon-Noir Action Sandbox Police Game" from Fallen Tree Games, released 13 May 2025 on PC and consoles at $29.99.
  - Hordes of Hunger, RL (a): a 2025 preview put it on PC that year; Wikipedia lists 2026.
  - Grime II, AC (a): soulslike metroidvania.
  - Call of the Elder Gods, NP (a).
  - Town to City, MG (a).
  - Don't Stop Girlypop!, SH (a).
  - Not established: GladiEATers, Hark the Ghoul, Ground Zero and Retro Space.
  - The upcoming titles come from a mid-2025 Kwalee list, without dates.
  - Sources: [Gematsu: The Precinct](https://www.gematsu.com/2025/03/the-precinct-launches-may-13); [Games Press: The Precinct](https://gamespress.westeu-v2.propressroom.com/Neon-Noir-Action-Sandbox-Police-Game-The-Precinct-Launches-on-PC-and-C); [Wikipedia: Kwalee](https://en.wikipedia.org/wiki/Kwalee); [Folha Vitória](https://www.folhavitoria.com.br/games/the-precinct-e-hordes-of-hunger-chegando-em-2025/)
- **Thunderful** [OPINION: analyst note; LISTING]
  - Replaced, AC (a): PC 12 Mar 2026, per a database listing.
  - ASKA, SV (a): full release in H1 2026.
  - Planet of Lana II, AC (a): puzzle-platformer from Wishfully, 2026.
  - Redeye (Nov 2025) expects H1 2026 to be "led by" Replaced and ASKA. It sees a possible SteamWorld Dig 2 sequel in 2027, and notes Atari's rising stake.
  - Sources: [Redeye Q3 review (Börsvärlden)](https://borsvarlden.com/artiklar/thunderful-q3-review-promising-pipeline-in-h1-2026-redeye); [GameSystemRequirements: Thunderful Publishing](https://gamesystemrequirements.com/company/thunderful-publishing)
- **Headup** [LISTING plus HARD DATA gamescom line-ups]
  - Bloodshed, RL (a-low): 22 May 2025.
  - Bridge Constructor Studio, NP (a): physics construction puzzle, 17 Jul 2025.
  - Super Meat Boy 3D, AC (a): 2026; one database says 31 Mar.
  - Industria 2, SH (a): 29 Apr 2026.
  - The Coma 3: Bloodlines, HR (a): 30 Apr 2026.
  - Royal Revolt Survivors, RL (t): shown at gamescom 2025.
  - Not established: Causal Loop (gamescom 2025), and Second Stone and The 9th Dragon (gamescom 2026).
  - Sources: [GamesMarket: gamescom 2025 line-up](https://www.gamesmarket.global/gamescom-2025-headup-announces-gamescom-2025-line-up-6230a89a8374c6df396a1065df87421c/); [GamesMarket: gamescom 2026 line-up](https://www.gamesmarket.global/headup-announces-gamescom-2026-lineup/); [GameSystemRequirements: Headup](https://gamesystemrequirements.com/company/headup-games)
- **Akupara Games** [LISTING plus news]
  - Cabernet, RPG (s): "2D vampire RPG", 20 Feb 2025 on PC and consoles.
  - AOKAKI, AC (s): "side-scrolling platformer" from Concha Indigo.
  - Airframe Ultra, RS (a): anti-gravity racing, listed for Oct 2026 (an older listing said 2024).
  - Not established: Repose (14 Apr 2025), Echo Weaver, Cornhole Hero and Dino Jump (with Pixeljam, 23 Jul 2026), Montabi, The Immortal John Triptych and Backside of the Moon.
  - Sources: [Wikipedia: Akupara Games](https://en.wikipedia.org/wiki/Akupara_Games); [Gaming Trend: Pixeljam/Behold partnership](https://gamingtrend.com/news/akupara-games-joins-forces-with-pixeljam-and-behold-studios); [Gaming Trend tag](https://gamingtrend.com/tag/akupara-games/); [Gematsu: Akupara Direct 2026](https://www.gematsu.com/tag/akupara-direct-2026); [GamePressure](https://www.gamepressure.com/companies/akupara-games/zb2423)
- **Freedom Games** [LISTING]
  - Puzzles For Clef, NP (t): 2024.
  - Not established: Asterogues (late 2024), Unlinked Mask (2024), Subterrain: Mines of Titan (2024), SoulQuest (2026) and Mariachi Legends (2026).
  - I found no 2025 releases.
  - Sources: [PlayPile: Freedom Games](https://playpile.gg/publishers/freedom-games); [Vandal](https://vandal.elespanol.com/compania/freedom-games)
- **Wandering Wizard** (Los Angeles) [LISTING, single source]
  - The Cecil: The Journey Begins (3 Apr 2025), Castle of Secrets (22 May 2025), Above the Snow (23 Apr 2026) and Survivor Mercs (30 Apr 2026). None of their genres were established.
  - Source: [Backloggd: Wandering Wizard](https://backloggd.com/company/wandering-wizard/)
- **2 Left Thumbs** [LISTING]
  - **2025:** Croak Crusader (7 Feb), Novus Orbis (10 Feb), Picayune Dreams: Contamination (20 Feb), Schism (7 Mar), Tower of Kalemonvo (28 Mar) and Die For The Lich (10 Nov).
  - **2026:** Underboard (6 Feb), Dice A Million (25 Feb), Crawling Angels (18 Mar), Wasteland Bites (3 Apr), Besmirch (11 May), 17.waves (29 May), Overtrick (Q2; Backloggd also shows 17 Jul) and Lured In (17 Jul).
  - Only Picayune Dreams is classified: RL (a), a survivors-like, which may be an expansion. The other 13 are not established.
  - About 10 more undated 2026 entries are not counted, for example Void Pachinko, Idle Chibi Knight and Cardaver.
  - Sources: [Backloggd: 2 Left Thumbs](https://backloggd.com/company/2-left-thumbs/); [PlayPile: 2 Left Thumbs](https://playpile.gg/publishers/2-left-thumbs)
- **PQube** [HARD DATA: Dec 2024 showcase; LISTING]
  - **2025:**
    - VN (a): BUSTAFELLOWS Season 2 (otome); Death Match Love Comedy (a-low); Him, the Smile & Bloom (otome); Iwakura Aria (a-low; mystery).
    - AC (a): Gal Guardians: Servants of the Dark (27 Mar 2025); Chronicles of the Wolf (metroidvania, 19 Jun 2025).
    - Discounty, MG (a): shop management, 21 Aug 2025.
    - Class of Heroes 3 Remaster, RPG (a): dungeon crawler, 18 Sep 2025.
    - Tormented Souls II, HR (a): 23 Oct 2025.
    - Not established: Genso Manege (31 Jan 2025).
  - **2026:**
    - Panzer Knights: Commander's Edition, ST (a): WWII RTS edition, 13 Aug 2026.
    - Not established: Beyond Words, Adorable Adventures, Necrophosis: Full Consciousness, K-Pop Idol Stories: Road to Debut, Kusan: City of Wolves and The Detectorist Guild.
  - **Excluded:** Phantom Breaker: Battle Grounds Ultimate (probably a re-release); History: Legends of War (preview mention only).
  - Sources: [Siliconera](https://www.siliconera.com/?p=1068997); [Backloggd: PQube](https://backloggd.com/company/pqube--1/); [Gematsu: PQube Asia Showcase 2024](https://www.gematsu.com/2024/12/pqube-asia-showcase-2024-set-for-december-11)
- **Wired Productions** [LISTING]
  - HR (a): Karma: The Dark World (2025; edition dates 27 Mar and 19 Jun 2025), Beneath (27 Oct 2025), BrokenLore: Don't Lie (10 Sep 2026) and Agni: Village of Calamity (2026).
  - Warhammer 40,000: Speed Freeks, MP (a): vehicular PvP, 22 May 2025.
  - Hotel Architect, MG (a): 14 May 2026.
  - Not established: Task Time (16 Apr 2026).
  - **Excluded:** Aaero 2: Black Razor Edition (an edition); a Bulwark Evolution DLC pack.
  - Sources: [Backloggd: Wired Productions](https://backloggd.com/company/wired-productions/); [PlayPile](https://playpile.gg/publishers/wired-productions)
- **Modern Wolf** [SELF-REPORTED]
  - 2024 only: ZERO Sievert, SH (a), extraction shooter, 1.0 in Oct 2024; Void Sols, AC (a), top-down soulslike, 12 Nov 2024.
  - I found **no 2025–2026 titles**. In Nov 2024 it said it was "looking for its next project to sign".
  - Sources: [Games Press: Modern Wolf's most successful year](https://gamespress.com/Modern-Wolf-Celebrates-its-Most-Successful-Year-to-Date); [PlayPile](https://playpile.gg/publishers/modern-wolf)
- **Joystick Ventures** [LISTING]
  - Most entries are **console versions in 2025–26** of games already on PC. For Steam they show portfolio genre, not new Steam releases.
  - Toy Tactics, ST (a): RTS.
  - Runeomicon, ST (s): "tower-defense", public playtest 30 Oct 2025.
  - W.I.L.D. Tactics, ST (t): announced for PC.
  - Hell of an Office, AC (a).
  - ANTONBLAST, AC (a).
  - Do Not Feed the Monkeys 2099, NP (a).
  - Chicken Police: Into the HIVE!, NP (a).
  - StarVaders, RL (a): roguelike deckbuilder.
  - Sources: [Gematsu: Joystick Ventures](https://www.gematsu.com/companies/joystick-ventures); [CB Insights](https://www.cbinsights.com/company/joystick-ventures)
- **Gryphline** [HARD DATA, secondary context: mobile/gacha-led]
  - Arknights: Endfield, RPG (a); POPUCOM, MP (a), a co-op puzzle platformer; Ex Astris, not established.
  - All three are Hypergryph in-house titles. I found **no third-party indie signings**. A POPUCOM 1.2 update was co-published with Fireshine.
  - Sources: [Gematsu: Gryphline](https://www.gematsu.com/companies/hypergryph-network-technology/gryph-frontier/gryphline); [GamerBraves](https://www.gamerbraves.com/tag/gryph-frontier/)
- **Paradox Arc** [HARD DATA: press releases]
  - Darfall, ST (s): "Build, Battle, and Survive the Undead Onslaught", 8 May 2025.
  - Escape the Mad Empire, not established: early access 22 Apr 2025.
  - Guardians of the Wild Sky, SV (s): "open-world survival-crafting" from Blue Isle Studios, announced 18 Aug 2026 for 2027.
  - **Excluded:** Across the Obelisk DLCs.
  - Source: [Paradox Interactive: Paradox Arc press releases](https://www.paradoxinteractive.com/media/press-releases/paradox-arc)

#### D. Studio-funded and new labels with 2026 signings (not in the main totals)
- **Kinetic Publishing** (Kinetic Games, the Phasmophobia developer) was formed in Jan 2026, funded by Phasmophobia's success. It plans to back 2–3 indie projects a year. Its first showcase, on 12 Aug 2026, revealed five games [HARD DATA]:
  - Contact Protocol, JS (s): sci-fi starship job sim, spring 2027.
  - Crescent County, RS (s): witchy open-world racing, summer 2027.
  - PRECOGNITION, HR (s): sci-fi horror live-action investigation from Sam Barlow, spring 2028.
  - Shellbound, AC (s): "parasitic metroidvania", summer 2028.
  - Aether Wizard Life, CZ (s): cozy wizard life sim, autumn 2028.
  - Sources disagree on platforms (PC plus Xbox, plus PS5/Switch 2).
  - Sources: [Game Developer press release](https://www.gamedeveloper.com/press-release/phasmophobia-team-reveals-the-first-five-games-in-its-publishing-lineup-at-the-debut-kinetic-publishing-showcase); [GodIsAGeek](https://godisageek.com/2026/08/kinetic-publishing-showcase-games/); [Xbox Wire](https://news.xbox.com/en-us/2026/08/12/kinetic-publishing-showcase-recap-sam-barlow/); [Kinetic announcement](https://kineticgames.co.uk/news/announcing-kinetic-publishing); [Mobidictum](https://mobidictum.com/kinetic-games-publishing-label-kinetic-publishing/)
- **Aggro Crab's label** signed two projects: ThirtyThree's precision platformer Rebounder, AC (s), and Bubby Darkstar's psychedelic horror Subway Midnight, HR (s). (Pass 1 already noted its 1–2 signings a year.) The extract did not show which result carried this. — [GameDev.net indie-publishing topic](https://gamedev.net/news/topic/indie-publishing/)
- **Yogscast Games** signed two roguelites for H1 2026 [HARD DATA]:
  - Infinity Sweeper, RL (s): minesweeper-style deduction roguelite from Longshot Studio, Serbia, with a Steam demo.
  - The Gate Must Stand, RL (s): "dark fantasy roguelike tower defense", co-published with Gamersky.
  - Sources: [Inven Global](https://www.invenglobal.com/articles/19863/yogscast-games-signs-two-new-roguelites-for-2026-launch); [VGC](https://www.videogameschronicle.com/news/yogscast-games-announces-two-new-roguelikes-infinity-sweeper-and-the-gate-must-stand)
- **Envar Publishing** (Aug 2026) received "over a hundred pitches" from May onwards. Its first signing is an unannounced "Adventure/Roguelite" game, RL (s), from the new Spanish studio Two Weeks at Home [SELF-REPORTED]. — [Inderes](https://www.inderes.se/en/releases/envar-publishing-announces-its-first-signed-game)

#### E. Corporate context that shapes these slates (hard data unless labelled)
- **everplay** (Team17's renamed parent) FY2025, released 24 Mar 2026 and covering calendar 2025 [HARD DATA]:
  - Revenue £166.0m; adjusted EBITDA £48.5m; profit before tax £36.6m (+44%).
  - 11 new titles in 2025.
  - 75% of income came from the back catalogue.
  - First-party IP revenue £56.13m; third-party IP £109.86m.
  - astragon revenue fell 33% to £29.5m.
  - The FY2026 pipeline has more than 15 new games, 5 of them first-party.
  - Segments: Games Label, Simulation and Edutainment.
  - Sources: [Ticker RNS](https://www.ticker.app/lse/EVPL/rns/2026-03-24/Unaudited-Final-Results-2025/7774X); [Game Industry Library](https://gameindustrylibrary.com/documents/everplay-group-fy2025-unaudited-earnings-release/read)
- The rebrand to everplay (Jan 2025) left Team17 as the label name. CEO Steve Bell said it reflects aspirations "to expand our reach across complementary sectors within the broader indie market". — [astragon/everplay rebrand release](https://www.astragon.com/news/detail/team17-group-plc-announces-company-re-brand-to-everplay-group-plc)
- **Nacon** is in judicial reorganisation, and its studios Cyanide and Kylotonn entered proceedings on 30 Mar 2026. Q1 FY26/27 sales rose 4.1% to €32.6m. — [Nacon results (MFN)](https://mfn.se/all/a/nacon-s-a/press-release-nacon-annual-results-2025-2026-sales-for-the-1st-quarter-2026-2027-388e3380)
- **Pullup** FY25/26: revenue €281.4m, adjusted EBIT €12.6m, net debt €85.7m. It sold its stake in Douze Dixièmes (Focus still publishes MIO) and discontinued Leikir Studio's activity (Jan 2026 filing). — [AMF (Jun 2026)](https://echanges.dila.gouv.fr/OPENDATA/AMF/ACT/2026/06/FCACT080073_20260611.pdf); [AMF (Jan 2026)](https://echanges.dila.gouv.fr/OPENDATA/AMF/ACT/2026/01/FCACT077866_20260115.pdf)
- **Playstack sale:**
  - TruFin announced on 21 May 2026 that it would sell its 84.5% stake to VantageCo (an IMC subsidiary) for about £112.4m ($151m). Other reports value the deal at £125m/$169m.
  - Completion was targeted for 10 Jun 2026; I could not confirm that it closed.
  - Playstack was named Best UK Publisher at the Ukie awards in 2026, for the second year running.
  - Sources: [PocketGamer.biz](https://www.pocketgamer.biz/vantageco-acquires-majority-stake-in-uk-games-publisher-playstack/); [Shacknews](https://shacknews.com/article/149361/playstack-owner-trufin-sells-playstack-to-imc); [Tech Insider](https://tech-insider.org/playstack-acquisition-2026/); [PlayNews](https://www.playnews.gg/en/publishers/playstack)
- **Raw Fury / Neon Doctrine** (Oct 2025): Neon Doctrine is merging into Raw Fury, which will manage its catalogue. CEO Iain Garner and co-founder Vlad Tsopljak are leaving. Both labels belong to Combined Effect. — [Gematsu](https://www.gematsu.com/2025/10/neon-doctrine-to-merge-into-raw-fury); [WN Hub](https://wnhub.io/news/stores-and-publishing/item-49177)
- **tinyBuild** pre-close update (5 Feb 2026): the 2026 pipeline is "strong" and "heavily weighted towards the second half". — [Investegate](https://www.investegate.co.uk/announcement/rns/tinybuild-inc-di-reg-s-cat-3---tbld/pre-close-trading-update/9410009)
- **Fireshine**: founder James Cato retired and Brian Foote became CEO in Feb 2025. — [PCGamesInsider](https://www.pcgamesinsider.biz/news/74954/fireshine-promotes-brian-foote-to-ceo/)
- **Krafton**:
  - It planned second-party publishing through equity stakes in outside developers; ZETA was the first case.
  - It disclosed 26 games in development, 12 of them due within two years (the date of the disclosure was not shown).
  - It has a "Big Franchise" strategy.
  - Sources: [Digital Terminal](https://digitalterminal.in/gaming/krafton-signs-publishing-partnership-with-game-developer-nirvanana); [Game Developer: Krafton Q2 2026](https://www.gamedeveloper.com/press-release/krafton-announces-second-quarter-2026-results); [Korea JoongAng Daily](https://www.koreajoongangdaily.com/business/krafton-hopes-new-big-franchise-strategy-can-find-the-next-pubg/12156574)
- **Micro-publishers** [LISTING/SELF-REPORTED]:
  - 2 Left Thumbs is a one-person label that grew out of a YouTube channel. It has about 30 games, all on Windows. — [PlayPile](https://playpile.gg/publishers/2-left-thumbs)
  - Freedom Games has published 66 titles since 2020. — [PlayPile](https://playpile.gg/publishers/freedom-games)
  - Wired claims more than 100 games published or produced; PlayPile counts 35. — [PlayNews](https://www.playnews.gg/en/publishers/wired-productions); [PlayPile](https://playpile.gg/publishers/wired-productions)
- [OLDER DATA] Older corporate context:
  - Daedalic stopped developing games to focus solely on publishing in Jun 2023, and has been a Nacon subsidiary since Apr 2022. — [GamePressure](https://www.gamepressure.com/companies/daedalic-entertainment/zcb4f)
  - Gryphline launched in Dec 2023. — [GamerBraves](https://www.gamerbraves.com/tag/gryph-frontier/)
  - Paradox Arc launched in Aug 2022. GamePressure, summarising Paradox's 2023 business vision, says 60–80% of games under the initiative were cancelled. — [GamePressure](https://www.gamepressure.com/companies/paradox-interactive/z7151)

### Inferences
- **Publisher type matters more than "publishers in general".** In the AA group, the weight of racing/sports, job sims and RPGs comes from in-house franchises:
  - Nacon: sports and racing.
  - THQ Nordic: Embracer IP.
  - Pullup: Saber and Dovetail sims.
  - astragon: job sims.

  These are not third-party indie signings. For "what gets signed from indie developers", the indie-label subset (95 classified titles) is the better base.
- **Indie labels:** the largest cluster is systemic, replayable designs:
  - roguelite, strategy and management sims together make 34 of 95 classified titles (36%).
  - **horror (10) and narrative/puzzle adventures (9) together make 20%** and are published by several labels: Raw Fury, Wired, PQube, Headup, Joystick and Kwalee.

  This qualifies pass 1's inference that narrative-led games are funded mainly by curator-style labels. Several mainstream indie labels publish them too, though often with a mystery or horror hook (Séance of Blake Manor, Kathy Rain 2, Chicken Police). That hook observation is my own reading of the titles.
- **Horror is a live signing category in 2025–2026.** Evidence:
  - Wired: 4 of 7 titles.
  - Raw Fury: 2 of 15.
  - New studio-funded labels: Kinetic's PRECOGNITION and Aggro Crab's Subway Midnight; pass 1 also has Pocketpair's first signing, Dead Take.
- **Cozy and life sims are scarce in these slates** (2 of 95 indie classified titles), even though cozy-tagged releases nearly doubled in 2025 (see Q3). Either cozy games are mostly self-published, or cozy-focused publishers fall outside this sample. My data cannot tell which.
- **The roguelite share is sensitive to labelling.** Counting Blue Prince (roguelike room-drafting) and Rogue Point (described by some as roguelite) as RL would raise the indie RL share from 15.8% to about 17.9% (17 of 95; my calculation). Roguelite structure also appears inside other buckets.
- **The tally counts titles, not revenue.** PQube (17), Raw Fury (15), Team17 (15), Nacon (14) and 2 Left Thumbs (14) dominate the counts. The micro-publishers (2 Left Thumbs, Wandering Wizard, Freedom Games) supply 22 of the 75 unclassified titles.

### Gaps
- **75 of 208 titles are unclassified** because the extracts gave no genre. I could not check Steam tags (store.steampowered.com is blocked). Every (a), (a-low) and (t) label is my own classification and needs checking.
- **Dates:** Backloggd and PlayPile entries are user-maintained. Several 2026 dates had passed by 13 Oct 2026 without confirmation that the games launched (for example Silver Pines and Sovereign Tower).
- **Not identified or not counted:**
  - Pullup's two FY25/26 Dotemu releases.
  - Curve's three July 2026 reveals.
  - Krafton's 12 near-term releases.
  - Embracer's reported "76 different games in a year" figure ([Insider Gaming](https://insider-gaming.com/embracer-group-release-76-different-games-in-year/)), which I did not retrieve.
- **Not found:** any third-party indie signings for Gryphline, and any 2025–2026 titles for Modern Wolf.
- **Joystick Ventures:** its 2025–26 entries are mostly console ports, and the extracts did not establish their original PC release years.

## Q2. Which publishers earned the most from new Steam releases in 2025 and 2026, and in which genres?

### Takeaway
I found **no 2025 or 2026 ranking of publishers by revenue from new Steam releases**. The GameDiscoverCo and Alinea material visible in search extracts ranks **games**, not publishers. At game level, most of the 2025 and H1 2026 indie-scale revenue went to titles that were either self-published or not from a traditional indie publisher:

- R.E.P.O., PEAK and Schedule I: reported as not coming from a major publisher.
- Meccha Chameleon: self-published.
- Escape from Duckov: published by Bilibili.
- Subnautica 2: published by Krafton.

The genres that made the money:

- Co-op "friendslop": R.E.P.O., PEAK, Schedule I, RV There Yet? and Meccha Chameleon.
- An extraction-style shooter: Escape from Duckov.
- A roguelike deckbuilder: Slay the Spire 2.
- Open-world survival: Subnautica 2.

Among the publishers in Q1, the clearest commercial evidence is:

- **Krafton:** Subnautica 2 sold more than 5m copies in 22 days, and inZOI and MIMESIS each passed 1m.
- **everplay:** its 2025 new titles earned 80% more revenue than the previous year's new titles, but two job sims underperformed.
- **Playstack:** sold at a valuation of about £112–125m, after Balatro.

### Cited Findings
- **No publisher-level new-release ranking found.** Searches for GameDiscoverCo and Alinea 2025 and H1 2026 publisher rankings returned only game rankings. GameDiscoverCo's "Who won Steam's 'Best of 2025' revenue rankings?" exists but could not be read (blocked host). — [GameDiscoverCo (title only)](https://newsletter.gamediscover.co/p/who-won-steams-best-of-2025-revenue)
- **Steam's own "Best of 2025" New Releases chart cannot rank publishers precisely** [HARD DATA on method]:
  - It ranks games released in 2025 by revenue, using each game's first two weeks on sale.
  - Valve does not publish exact ranks; titles are "listed in random order".
  - The list was generated on 15 Dec 2025, with final data due on 15 Jan 2026.
  - Sources: [Gfinity](https://www.gfinityesports.com/article/steams-2025-charts-show-indies-outselling-million-dollar-blockbusters); [FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)
- **GameDiscoverCo 2025 estimates** [HARD DATA, estimates; data from 1 Jan to mid-Dec 2025]:
  - Steam's total gross revenue in 2025 was **$16.9bn**, of which **$14.98bn** came from third-party games.
  - **Sources disagree:** Alinea's 2025 figure, cited in pass 1, is $17.7bn for 1 Jan–19 Dec, a different method and window.
  - The top 3 new releases by units were R.E.P.O., PEAK and Battlefield 6.
  - The extract did not show which GameDiscoverCo page carried the $16.9bn figure.
  - Sources: [GameDiscoverCo: Steam's "24% cut" numbers](https://newsletter.gamediscover.co/p/revealed-the-numbers-behind-steams); [GameDev Reports recap (Dec 2025–Jan 2026)](https://gamedevreports.substack.com/p/weekly-gaming-reports-recap-december-51b)
- **Alinea's 2025 top indie earners** (the five headline figures are in pass 1):
  - Dispatch, RV There Yet? and Deltarune "performed exceptionally well", with undisclosed earnings.
  - A third-party summary says the **top three (Schedule I, R.E.P.O., PEAK) did not come from a major publisher**, citing SteamData Research and VG Insights. Attribution among the results is uncertain.
  - Sources: [WN Hub (Dec 2025)](https://wnhub.io/news/analytics/item-49645); [Alinea blog](https://alineaanalytics.com/blog/2025-in-review/); [VoxBooster](https://voxbooster.com/blog/indie-game-statistics-2026)
- **Escape from Duckov** [HARD DATA]:
  - Published by **Bilibili** and developed by its in-house studio Team Soda.
  - Launched 16 Oct 2025 at $17.99.
  - Sold 2m copies on Steam by 28 Oct 2025.
  - PCGamesN calls it "Tarkov-like by name but not by nature".
  - Sources: [TechNode (17 Oct 2025)](https://technode.com/2025/10/17/bilibili-publishes-absurdist-duck-themed-shooter-escape-from-duckov); [Inven Global](https://labs.invenglobal.com/articles/19823/escape-from-duckov-sells-2-million-copies-in-12-days-the-duck-craze-takes-over-steam); [PCGamesN](https://www.pcgamesn.com/escape-from-duckov/steam-launch)
- **Friendslop's share of 2025 unit sales** [HARD DATA, estimates]:
  - 4 of the 10 best-selling Steam games of 2025 by copies were friendslop: R.E.P.O. (18.5m), PEAK (15.4m), Schedule I (9.1m) and RV There Yet? (5.7m).
  - The figures are attributed to GameDev Reports and relayed in a How To Market A Game piece dated 30 Jul 2026.
  - Sources: [How To Market A Game: "So, is Friendslop Saturated?"](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated); [Game Industry Library](https://gameindustrylibrary.com/research/shared/6-how-has-the-friendslop-genre-evolved)
- **H1 2026, Alinea** [HARD DATA, estimates; covers Jan–Jun 2026; published around Jul 2026]:
  - Steam gross revenue was **$11.1bn**, up 14.5% year on year.
  - Titles launched in 2026 made **21%** of revenue, down from 27% in H1 2025 and 29% in H1 2024.
  - Top new releases by revenue (the extract's order is inconsistent, so ordered by value here): Forza Horizon 6 ($197.7m), Resident Evil Requiem ($194.5m), Crimson Desert (>$190m), Slay the Spire 2 ($141.7m) and Subnautica 2 ($133.6m).
  - **Meccha Chameleon ranked sixth** at a $6 price.
  - One German Notebookcheck article calls the period H2; the other sources say H1.
  - Sources: [GameDev Reports summary of Alinea](https://gamedevreports.substack.com/p/alinea-analytics-steam-reached-highest); [Outlook Respawn](https://respawn.outlookindia.com/gaming/gaming-news/steam-hits-record-111-billion-as-older-games-drive-growth); [Tech Insider](https://tech-insider.org/steam-h1-2026-revenue-record/); [Notebookcheck (DE)](https://www.notebookcheck.com/Steam-Bestes-Halbjahr-aller-Zeiten-bringt-etliche-Milliarden-an-Umsatz.1339058.0.html)
- **Meccha Chameleon** [HARD DATA plus secondary reporting]:
  - Steam lists lemorion_1224 as both developer and publisher, and Tech Insider says it had "no publisher, no marketing campaign".
  - It sold 15m+ copies in under a month after its 9–10 Jun 2026 launch, with a later report of 20m.
  - Sources disagree on whether the team is two people or one.
  - GosuGamers calls it "the next Steam friendslop hit".
  - Sources: [ConsolePulse](https://consolepulse.com/pc/reviews/meccha-chameleon-human-crafted-chaos-review); [Tech Insider](https://tech-insider.org/meccha-chameleon-15-million-sales-2026/); [GosuGamers](https://gosugamers.net/entertainment/news/78629-meccha-chameleon-surpasses-3-million-sales-becoming-the-next-steam-friendslop-hit)
- **GameDiscoverCo, May 2026** [HARD DATA, estimates]: Subnautica 2 led new Steam releases with 4.35m copies. Forza Horizon 6 had 2.58m purchases and $152.2m. — [Game Industry Library copy of GameDiscoverCo](https://gameindustrylibrary.com/documents/gamediscoverco-top-games-on-steam-and-consoles-in-may-2026-sponsored-by-pwn-games)
- **Krafton** [HARD DATA]:
  - Subnautica 2 (early access 14 May 2026) sold more than 5m copies in its first 22 days. — [GodIsAGeek (Jul 2026)](https://godisageek.com/2026/07/subnautica-2-five-million-sales/)
  - inZOI and MIMESIS each passed 1m copies (Feb 2026 earnings coverage). — [Massively OP](https://massivelyop.com/2026/02/11/q4-2025-celebrating-a-record-year-krafton-teases-subnautica-2-and-plops-og-subnautica-on-switch-2/); [4Gamer](https://www.4gamer.net/games/754/G075492/20260115037/index_2.html)
  - Q2 2026 revenue was ₩1.2902tn ($889.1m), up 94.9% year on year. This covers all platforms; PUBG remains the largest driver. — [Game Developer press release](https://www.gamedeveloper.com/press-release/krafton-announces-second-quarter-2026-results)
- **everplay**, FY2025 call (Mar 2026) [SELF-REPORTED]:
  - Its 11 new titles of 2025 "generated 80% more revenues than all the new titles in the past year".
  - Firefighting Simulator: Ignite and Seafarer: The Ship Sim "performed below expectations".
  - Source: [roic.ai transcript](https://www.roic.ai/quote/EVPL.L/transcripts/2025-year/4-quarter)
- **Devolver** (FY2025 results, Apr 2026; adds to pass 1) [HARD DATA]: in January, three Devolver titles were in Steam's Global Top 10 Best Sellers at the same time, a first for the company. It flagged an initial unaudited estimate of about **$3.5m in impairments** on "underperformance of certain released titles". — [Hargreaves Lansdown news](https://www.hl.co.uk/shares/stock-market-news/aim-and-small-cap-news/aim-bulletin/devolver-digital-reports-further-improvement-in-full-year-performance); [AJ Bell](https://www.ajbell.co.uk/news/articles/devolver-digital-sees-strong-start-2026-after-annual-sales-edge)
- **Hooded Horse** (2024 year summary) [SELF-REPORTED]: 9.5m wishlists and 4.5m copies sold. — [WN Hub](https://wnhub.io/news/stores-and-publishing/item-45773)
- **Nacon**: FY25/26 catalogue sales were driven by Hell is Us (action-adventure), Cricket 26, Rennsport, Tour de France 2025, Pro Cycling Manager 25 and Rugby League 26 (sports and racing) [HARD DATA, all platforms]. — [Game Industry Library: Nacon Q3](https://gameindustrylibrary.com/documents/ca-third-quarter-2025-26-124-2-m-2/read)
- **All-time publisher rankings** (context only; not new releases):
  - Sensor Tower, as of Aug 2025: EA, Ubisoft, Bandai Namco, 2K and Bethesda at the top.
  - Gamalytic, all-time: Valve $16.7bn, Krafton $5.7bn, EA $5bn.
  - [OLDER DATA, probably 2022–23] VG Insights: the 250 largest publishers made 91% of Steam revenue over the previous 365 days, with Bandai Namco above $800m, driven by Elden Ring.
  - Sources: [Game Industry Library (AI-synthesised page citing Sensor Tower/Gamalytic)](https://gameindustrylibrary.com/research/shared/7-what-are-the-most-succesful-publishers-on-steam-in-the-last-few-years); [VG Insights](https://wp.vginsights.com/steam-publishers-landscape-concentration-and-dominance-of-the-us/2)

### Inferences
- **The question cannot be answered at publisher level from public data.** The best proxy is game-level rankings plus publisher status. On that proxy, the biggest new-release revenue in 2025 and H1 2026 at indie scale went to:
  - co-op/friendslop games that were self-published or not from a major publisher;
  - games from large companies outside the indie-publisher system (Bilibili, Krafton).

  The traditional indie publishers' documented 2025 winners are in systemic genres: Kepler's RPG and Devolver's roguelites in pass 1, Playstack's Balatro in 2024, and Hooded Horse's strategy games.
- **The friendslop wave appears to have run mostly outside the slates tallied in Q1.** Only Team17's Goblin Cleanup and Golf With Your Friends 2, and Krafton's MIMESIS, map to co-op party or co-op horror. This rests on partial publisher-status checks; see Gaps.
- **New releases are a shrinking slice of Steam revenue** (H1 shares of 29%, then 27%, then 21%). everplay earns 75% of income from its back catalogue. Long-tail genres therefore weigh more in publisher economics. This is consistent with pass 1's back-catalogue inference.

### Gaps
- No GameDiscoverCo, Alinea, Gamalytic or Sensor Tower **publisher** ranking for 2025 or 2026 new releases was retrievable. The blocked GameDiscoverCo "Best of 2025" analysis may contain one.
- I did **not** verify the publisher status of Hollow Knight: Silksong, Slay the Spire 2, Dispatch or RV There Yet?. The "not from a major publisher" claim for the top three comes from a third-party summary.
- No per-title revenue is available for most Q1 publishers' 2025–26 releases. everplay, Nacon, Pullup and Krafton report revenue at company level or across all platforms.

## Q3. What do publishers and scouts say in 2025–2026 about the genres they seek or avoid?

### Takeaway
Explicit 2025–2026 genre wish-lists remain **rare**. What exists is mostly:

- **Exclusion lists:** VR/AR, free-to-play, educational or family games, games about politics or religion, and (in older statements) MOBA, battle royale and sports.
- **A few positive signals:**
  - **Akupara's pitch page** favours "deckbuilders, narrative-driven games, and unique mechanics".
  - **Yogscast** sees "continued player appetite for rogue-style games".
  - **Indie GO Fund** expects more "CloverPit-like" and friendslop projects in 2026, with co-op and simulators "stable".

Pitchify's co-founder says publishers are clearer about what they **don't** want than what they want, and that signing starts with an emotional reaction to the game. The new studio-funded labels (Kinetic, Aggro Crab) actually sign across horror, platformers, sims and cozy games. Sources disagree on saturation: some see continued demand for roguelites and co-op, while data show friendslop hits fading fast and cozy releases nearly doubling.

### Cited Findings
**Publisher pitch-page wording**
- **Akupara Games, "Pitch a Game" page** [HARD DATA for the wording; page date not shown]:
  - Considers "most genres" and favours **deckbuilders, narrative-driven games, and unique mechanics**.
  - **Excludes** educational or family-focused titles, VR/AR, and games centred on politics or religion.
  - Preferred engine: Unity, then GameMaker, Unreal, Godot and Construct, in that order.
  - Source: [Akupara Games: Pitch a Game](https://www.akuparagames.com/pitch-a-game/)

**Interviews, AMAs and panels, 2025–2026** [OPINION/ANECDOTE unless noted]
- **Yogscast Games:** managing director Simon Byron says the publisher sees "continued player appetite for rogue-style games". This accompanied two roguelite signings for H1 2026. VGC frames them as a "commitment to support solo and micro studios". The article date is not shown; it predates the H1 2026 launches. — [Inven Global](https://www.invenglobal.com/articles/19863/yogscast-games-signs-two-new-roguelites-for-2026-launch); [VGC](https://www.videogameschronicle.com/news/yogscast-games-announces-two-new-roguelikes-infinity-sweeper-and-the-gate-must-stand)
- **Indie GO Fund** (a publisher and investment fund for teams from Russia, the CIS and Eastern Europe). Danila Kamenev, head of publishing, in a 2025 year-in-review interview (around Dec 2025–Jan 2026):
  - [SELF-REPORTED] The team grew from 10 to 100+ people during 2025. It invested in **more than 25 projects totalling 300m roubles**. It plans almost 15 releases in 2026, so it needs 15+ new projects.
  - [OPINION] He expects **more "CloverPit-like" and friendslop ("friend-slope") projects in 2026**, and says co-op games and simulators "will remain stable genres".
  - Sources: [WN Hub](https://wnhub.io/news/investment/item-49759); [Habr company profile](https://career.habr.com/companies/indie-go-fund)
- **Pitchify (Gina Jackson) AMA write-up** (Game Republic, 2026):
  - Publishers focus heavily on **audience fit**.
  - They "are often clearer about what they don't want than what they do want", setting boundaries rather than narrow genre targets.
  - Early signing decisions are **emotional, with data coming afterward**: a scout or BD manager reacts first to the overall feeling of a game.
  - Source: [Game Republic](https://gamerepublic.net/news/what-publishers-really-want-a-lesson-on-pitching-with-pitchify/)
- **Pitchify "Pitch Direct" launch** (2026) [HARD DATA on the platform]:
  - Publishers state budget ranges, timelines, platforms **and genres**, and developers submit only where they match.
  - Named participants include **Curve Games, Team17, Miniclip and Kwalee**.
  - One report counted 15 active submission calls from nine publishers at launch.
  - The publishers' actual genre criteria are not shown in the extracts.
  - Source: [PocketGamer.biz](https://www.pocketgamer.biz/pitchify-launches-pitch-direct-to-make-pitching-to-publishers-more-transparent)
- **Impact Pitch Up 2025**, a UK pitch event with publisher panellists:
  - Publishers want mechanics, timeline, budget, target platforms, engine and price point up front.
  - Lead with gameplay footage rather than concept art.
  - No genre preferences appear in the extract.
  - Source: [Impress: 10 key takeaways](https://impress.games/blog/10-key-takeaways-from-impact-pitch-up-2025)
- **Developer view** (WN Hub interview, Dmitry Muratov): "It's very challenging for games to find publishers. Everyone is scrutinizing projects even more carefully than before." The extract did not show which WN Hub item carried the quote. — [WN Hub](https://wnhub.io/news/other/item-49743)
- **Akupara marketing advice** (GameMaker blog, 2025): Steam releases rose from 300 in 2012 to 18,000 in 2024, which it gives as the reason competition is harder. — [GameMaker blog](https://gamemaker.io/en/blog/indie-game-publishing-2025)

**Revealed preference: what new 2026 labels actually signed** [HARD DATA]
- **Kinetic Publishing** (Phasmophobia developer; 2–3 projects a year) signed five games: a job sim, open-world racing, a metroidvania, a cozy life sim and an FMV horror investigation. A horror studio's label therefore did not confine itself to horror. — [Game Developer](https://www.gamedeveloper.com/press-release/phasmophobia-team-reveals-the-first-five-games-in-its-publishing-lineup-at-the-debut-kinetic-publishing-showcase)
- **Aggro Crab:** a precision platformer and a psychedelic horror game. — [GameDev.net](https://gamedev.net/news/topic/indie-publishing/)
- **Envar Publishing:** first signing after 100+ pitches is an "Adventure/Roguelite". — [Inderes](https://www.inderes.se/en/releases/envar-publishing-announces-its-first-signed-game)
- **Paradox Arc:** signed an open-world survival-crafting game (Aug 2026). **Curve:** signed a roguelike deckbuilder and a cozy resource-management strategy game (2026). — [Paradox Arc releases](https://www.paradoxinteractive.com/media/press-releases/paradox-arc); [Gematsu: Mechborn](https://www.gematsu.com/2026/01/roguelike-deckbuilder-mechborn-announced-for-ps5-xbox-series-switch-2-switch-and-pc)

**Market signals relevant to publishers' genre appetite (2025–2026)**
- **Friendslop** (How To Market A Game, 30 Jul 2026) [ANALYSIS of player-count data; conclusions are OPINION]:
  - Across 16 co-op party games, combined player counts are still rising.
  - "Top-performing Friendslop titles will take over 50% of the playerbase then fade to 10% within 3–9 months."
  - Source: [How To Market A Game](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated)
- Gamble With Your Friends reportedly sold more than 500k copies in the 3 days after its 1 May 2026 launch. — [Critical Hits (PT)](https://criticalhits.com.br/games/novo-jogo-friendslop-explode-na-steam-e-vende-500-mil-copias-em-3-dias/)
- A new co-op party game reached 12th on Steam's most-wishlisted list within a week of its announcement (Jul 2026). — [games.gg (IT)](https://games.gg/it/news/friendslop-il-nuovo-titolo-è-già-al-12-posto-tra-i-più-desiderati-su-steam/)
- **Cozy** [HARD DATA, estimates, via secondary outlet]:
  - SteamDB counted **543 Cozy-tagged releases in 2025**, against 698 in all earlier years combined.
  - 3.1% of high-earning titles used "cozy" in their pitch in 2025, up from 0.4% in 2022.
  - Sources: [Outlook Respawn (2025)](https://respawn.outlookindia.com/gaming/gaming-guides/small-teams-huge-margins-cozy-games-are-2025s-stable-bet); [Outlook Respawn: "Steam vibe shift" (2026)](https://respawn.outlookindia.com/amp/story/gaming/gaming-news/steam-vibe-shift-why-cozy-is-the-most-dominant-keyword-of-2026)

**[OLDER DATA] Publisher statements, undated, likely before 2020 (GamesBeat "IndieBeat")**
- **Raw Fury:** not a fit for free-to-play mobile.
- **Playdius:** avoids VR, F2P and local-multiplayer games; wants midcore-to-hardcore PC/console games and casual narrative games for mobile.
- **Square Enix Collective** (Phil Elliott, then director of indie publishing): sports games are "a tough sell", and MOBAs and battle royales are a poor fit because the market is crowded. Elliott has been Modern Wolf's CEO since Mar 2023 ([Games Press](https://gamespress.com/Modern-Wolf-Appoints-Phil-Elliott-as-New-CEO)).
- **Team17** (Troy Horton, developer relations): avoids MOBAs and digital card games because those markets are crowded.
- Source: [GamesBeat](https://gamesbeat.com/the-indiebeat-tips-from-publishers-and-how-to-pitch-to-them/)
- [OLDER DATA, 2021] A META Publishing BD director said the co-op boom "does not mean that now players and publishers are only interested in co-op games". — [Game World Observer (2021)](https://gameworldobserver.com/2021/03/15/meta-publishing)

### Inferences
- **Exclusions are more consistent across publishers than inclusions.** The excluded categories are VR/AR, F2P, educational/family, politics/religion and, in older statements, MOBA, battle royale and sports. None of the 2025–2026 sources excludes the mainstream premium PC indie genres: roguelite, strategy, management, horror, narrative, platformer and co-op.
- **Positive 2025–2026 signals cluster in two places:**
  - **Roguelite variants:** Yogscast; Indie GO Fund's CloverPit-likes; Akupara's deckbuilders; Envar's first signing.
  - **Co-op/friendslop:** Indie GO Fund.

  **Horror** is prominent in what new studio-funded labels actually sign.
- **Sources disagree on saturation:**
  - Yogscast and Indie GO Fund describe continued demand for roguelites and co-op.
  - How To Market A Game's data show friendslop hits are short-lived.
  - Pass 1 cites "peak roguelite" commentary and 212 roguelike deckbuilders shipping in 2025.
  - Cozy-tag volume nearly doubled in 2025.
- Platforms like Pitchify that make genre a submission filter suggest **genre fit works as a hard gate at the inbox**, while the final decision is described as emotional, followed by data. This is my inference from how the platform is designed.
- The old exclusion statements (Team17 avoiding digital card games) do not match current slates: Team17 now publishes a rhythm roguelite (Wardrum) and Curve and Joystick publish roguelike deckbuilders. Older genre stances should therefore not be treated as current.

### Gaps
- I found **no 2025–2026 on-record genre statements** from BD or scouting staff at Raw Fury, Team17, Playstack, Fireshine, Curve, Kwalee, PQube, Wired or Headup.
- The genre criteria that Curve, Team17, Miniclip and Kwalee entered on Pitchify Pitch Direct are not visible in the extracts.
- LinkedIn posts by publishing leads and Reddit r/gamedev AMAs did not surface through search; the one AMA found is Pitchify's.
- The Akupara pitch page is undated.
- The Indie GO Fund 2025 Steam genre report that Kamenev mentioned was not found.

## Q4. Is there data on which genres get signed most often, or on published vs self-published success by genre?

### Takeaway
I found **no public dataset that counts publisher signings by genre** across publishers, and **none that splits published versus self-published success by genre**. The closest proxies are:

1. **The portfolio tally in Q1.** It measures share of slates, not signing frequency or success rate.
2. **Publisher-matching platforms that record genre as a filter but publish no aggregates.** Pitchify Pitch Direct (2026) is the example found.
3. **Selectivity data points without genre breakdowns:**
   - Envar: 100+ pitches led to 1 signing in about 3 months.
   - Kinetic: 2–3 projects a year.
   - Indie GO Fund: 25+ investments in 2025.
   - Paradox Arc: 60–80% of projects cancelled [OLDER DATA].
4. **Genre revenue studies not split by publisher status.** One July 2025 report puts Action at 58.4% of Steam revenue, RPG at 17.1% and Strategy at 14.0%. An Aug 2025 study finds sandbox games stand out.

### Cited Findings
- **Pitchify Pitch Direct** (2026): genres are a structured field that publishers fill in. I found no aggregate statistics on which genres publishers request or sign. — [PocketGamer.biz](https://www.pocketgamer.biz/pitchify-launches-pitch-direct-to-make-pitching-to-publishers-more-transparent)
- **VG Insights publisher database:** it lists each Steam publisher's genre mix and is promoted for finding publishers to pitch. Only the header was returned, so I have no figures. — [VG Insights publishers database](https://vginsights.com/publishers-database)
- **Selectivity and funnel data** [SELF-REPORTED unless noted]:
  - **Envar Publishing:** "over a hundred pitches" from May to Aug 2026, ending in its first signing (an Adventure/Roguelite). — [Inderes](https://www.inderes.se/en/releases/envar-publishing-announces-its-first-signed-game)
  - **Kinetic Publishing:** plans 2–3 indie projects a year and revealed 5 signings in Aug 2026. — [Mobidictum](https://mobidictum.com/kinetic-games-publishing-label-kinetic-publishing/); [Game Developer](https://www.gamedeveloper.com/press-release/phasmophobia-team-reveals-the-first-five-games-in-its-publishing-lineup-at-the-debut-kinetic-publishing-showcase)
  - **Indie GO Fund:** more than 25 projects funded in 2025 (300m roubles). — [WN Hub](https://wnhub.io/news/investment/item-49759)
  - [OLDER DATA, 2023] **Paradox Arc:** 60–80% of games under the initiative cancelled; only the most promising continued. Reported by GamePressure from Paradox's 2023 business vision. — [GamePressure](https://www.gamepressure.com/companies/paradox-interactive/z7151)
- **Published versus self-published:**
  - The OPG 2024 study (headline numbers in pass 1) says it "also covers genre performance", but the extract shows no genre-by-publisher-status cross-tabulation. — [OPG Substack](https://opgamemarketing.substack.com/p/the-2024-indie-and-aa-game-market)
  - A self-published-only analysis is quoted as saying "top 25% of self-published indie games revenue expectations have almost halved to $26,000" and that "c. 3,000 self-published indie games have made over $100k gross revenue on Steam". It has no genre split. **The source page and date are uncertain:** it appeared alongside Into Indie Games, VoxBooster and a GameDev Reports recap from July 2025. — [Into Indie Games](https://intoindiegames.com/features/how-much-money-do-steam-games-make/); [GameDev Reports recap (Jul 2025)](https://gamedevreports.substack.com/p/weekly-gaming-reports-recap-july-8d7?open=false)
- **Genre revenue shares, not split by publisher status:**
  - [HARD DATA?, Jul 2025] One report says **Action earned 58.37% of Steam revenue, RPGs 17.11% and Strategy 13.97%**. Steam's multi-genre tagging means the shares are unlikely to be exclusive. The extract did not identify the report; it appeared with the GameDev Reports recap. — [GameDev Reports recap (Jul 2025)](https://gamedevreports.substack.com/p/weekly-gaming-reports-recap-july-8d7?open=false)
  - [HARD DATA, estimates; Aug 2025] Totally Human Media's Steam Revenue Report covers about 100,000 titles and uses the Boxleiter review-multiplier method. It finds **sandbox games consistently produce strong sellers**. — [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
  - GameDiscoverCo's Steam hype data show subgenres staying in stable high, medium or low bands of player interest. A related wishlist analysis says strategy and RPG games "make a lot of money". The date was not shown and attribution in the extract is partial. — [GameDiscoverCo: "What genres do PC gamers want"](https://newsletter.gamediscover.co/p/what-genres-do-pc-gamers-want-and)
- [OLDER DATA, 2000–2005 data] A Video Game Journal analysis judged FPS the "most attractive" genre for publishers and sports "unattractive". It is included only to show that genre-attractiveness studies for publishers are old. — [Game Developer](https://www.gamedeveloper.com/game-platforms/analysts-fps-most-attractive-genre-for-publishers)

### Inferences
- With no signing-by-genre dataset, the **Q1 portfolio tally is the best available proxy** for which genres get signed. In the indie-label subset (95 classified titles) the order is roguelite 16%, action/platformer 15%, horror 11%, management 11%, strategy 9% and narrative/puzzle 9%. It records what publishers chose to release or announce, not their acceptance rate per genre, and it is title-weighted.
- The funnel data suggest **very low acceptance rates**: about 1% at Envar, from one label's self-report over three months (my calculation). That fits pass 1's evidence that small labels sign only 1–2 games a year. Whether acceptance rates differ by genre is unknown.
- Genre revenue shares show where the money is, which publishers say they weigh. Without a split by publisher status, they cannot show whether publishing improves outcomes more in some genres than in others.

### Gaps
- No signing counts by genre were found from Pitchify, from other pitch databases or publisher-matching services, or from publisher surveys (the GDC 2026 State of the Industry and Trends Report extracts in pass 1 had no genre-of-signing data).
- No published-versus-self-published success figures by genre were found from Gamalytic, VG Insights, GameDiscoverCo, How To Market A Game or OPG.
- The VG Insights publisher database's genre-mix figures and Indie GO Fund's promised 2025 Steam genre report were not retrievable.
- A 2026 analysis reportedly ranks visual novels, simulation and RPG highest by estimated revenue. I could not identify its source or method, so it is not used.
