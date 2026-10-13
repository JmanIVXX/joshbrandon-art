# Steam themes and settings, pass 2 (gap-filling): per-theme statistics, 2025–2026 demand signals and theme × genre records

> **Research conditions (read first).** Researched 13 Oct 2026. This pass adds to `theme_player_interest.md` (pass 1) and does not repeat its findings. Where a pass-1 figure is needed for a comparison, it is marked "(pass 1)".
>
> **Access.** The egress proxy refused (CONNECT 403) every data host I tried:
> - Steam itself: store.steampowered.com, steamcommunity.com, api.steampowered.com.
> - Data sites: steamdb.info, vginsights.com, steambase.io, steampageanalyzer.com, steamcharts.com, steam250.com.
> - Trend and streaming sites: trends.google.com, twitchtracker.com, sullygnome.com.
> - News sites: automaton-media.com, gamedeveloper.com, gameworldobserver.com, wnhub.io, games.gg, pcgamer.com, ixbt.games.
> - Newsletters: opgamemarketing.substack.com.
> - Hosts blocked per the brief: gamalytic, games-stats, weloveit, immutable and others.
>
> **What that means for the figures.** **Every figure below comes from WebSearch result extracts** (about 60 queries), not from reading full pages or live tables. Extracts sometimes paraphrase or mis-attribute, and I flag that where I saw it. All Steam revenue and unit figures are third-party estimates, since Valve publishes no sales data. "games-stats" figures are *estimated net revenue*; Gamalytic and Immutable figures are *gross*. Snapshot labels ("as of 2025/2026") are as the pages state them.

## 1. Per-theme Steam statistics: game count, median/mean revenue per game, share above revenue thresholds, and games reaching 1,000+ reviews (2024/2025)

### Takeaway
All-releases revenue medians exist for only a few theme-adjacent rows, all from one dataset (Immutable / Gamalytic, Aug 2026):
- **Visual Novel:** 12,646 games, **$10,300** median gross.
- **Farming Sim:** 1,494 games, **$8,690** median gross.
- **Horror and Survival Horror** (pass 1).
- Comparison point: the 107-sub-genre median is **$4,837**.

Theme tags such as fantasy, sci-fi, space, zombies, post-apocalyptic, cozy, anime and military are **not rows in Immutable's table**. No We Love It theme-tag figures surfaced; the report is organised by about 30 genres.

The best theme-level success-rate data come from Steam Page Analyzer:
- **Cozy:** **11%** of 2024–H1 2025 cozy releases reached 1,000 reviews, against **4.2%** across Steam.
- **Visual Novel:** about **4%** reached 1,000 reviews.

For the other themes, this pass adds games-stats tag counts and top earners (pirates, underwater, Lovecraftian, mythology, steampunk, post-apocalyptic, dinosaurs, space, military/WWII, cozy, cute, heist). It found **no theme-tag median, mean or share above $100k/$300k** for any of the requested themes.

### Cited Findings

#### A. Per-game medians (all releases)
- **Immutable, "What does the median game in your genre earn on Steam?"**
  - Coverage: 107 sub-genres. Per the extract the data are "Gamalytic estimates, Aug 2026"; the brief dates the page Sep 2026, and its publication date was not captured.
  - Overall: median gross across the 107 sub-genres is **$4,837**, and **81 of 107** sub-genres have a median under $10,000.
  - Rows found (games / median copies / median gross):
    - **Visual Novel:** **12,646 / 1,140 / $10,300**.
    - **Farming Sim:** **1,494 / 1,080 / $8,690**.
    - **Open World Survival Craft:** count not captured / **$102,000**.
    - **4X:** **$50,000**.
  - Not rows in the table: Space Sim, Cozy, Military, Wargame, Anime, Fantasy, Sci-fi, Space, Zombies, Post-apocalyptic. Cozy and Anime appear only as Steam tags in a separate tagging guide.
  - Precision caveat: the page states that each median "is read from a sample of roughly twenty titles" and that figures are rounded. That sits oddly with row counts in the thousands, so treat the precision as uncertain.
  - Source: [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **Immutable, separate page:** about **20.8%** of Open World Survival Craft releases cleared **1,000 reviews**, against about **0.18%** of 2D Platformer releases (period not captured). — [Immutable (via search extract of immutable.com)](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **SteamTrender** (free tag-analytics tool; snapshot of 131,875 games dated **2026-10-11**, updated daily): **Cozy + Farming Sim** has **86 games**, **median revenue $31K** and a **top-3 share of 39%**. No other tag combination was captured. — [SteamTrender](https://steamtrender.com/)
- **We Love It "Steam Revenue Report"** (Totally Human Media and VaporLens; published **20 Aug 2026**, about 100,000 titles, review-based Boxleiter-style estimates):
  - **14.4%** of all titles exceed **$100,000** in estimated lifetime revenue.
  - Median for **2026 releases: $1,728** (as of 1 Sep 2026), against about **$15,000 for 2016 releases**. Cohort medians have fallen 12 years in a row.
  - Visual novels have the **second-highest median after sandbox**, ahead of simulation, RPG, horror and point-and-click.
  - Hit rates (share ≥$100k): **sandbox 27.3%** (27.4% in other write-ups), **FPS 21.6%**, **RPG 19.4%**, **hidden object 5.4%**, **2D platformer 5.5%**.
  - Lowest medians (about $1,000 or less): racing, puzzle, arcade, platformer.
  - The extracts showed **no theme-tag rows** (zombies, fantasy, space and so on).
  - One extract gives the all-time median as **$3,558** ("September 2026 study"); pass 1 recorded **$3,462** from the Oct 2026 page. This is probably a refresh, but the cause is unconfirmed.
  - Sources: [Game World Observer, 1 Sep 2026](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years); [WN Hub](https://wnhub.io/news/stores-and-publishing/item-51948); [Mezha](https://mezha.ua/en/news/steam-games-statistics-315726/); [Automaton West](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/); [iXBT, 25 Aug 2026](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.amp.html); [We Love It](https://weloveit.io/developers/steam-revenue-report/)
- **Steam Page Analyzer (SPA)**, single vendor. The extract describes these as unsourced "consensus" ranges with no sample size, and attributes them to the site's indie-revenue/refund posts:
  - Colony sims: median lifetime gross **$150,000–$400,000**.
  - City builders: **$75,000–$250,000**.
  - Median indie game: **$5,000–$15,000**.
  - These ranges are far above Immutable-style all-release medians, so treat them as success-skewed.
  - Source: [SPA indie revenue](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)

#### B. Share of releases reaching 1,000 reviews (theme-level, 2024–2026)
- **SPA niche method.** Cohort = games released **1 Jan 2024–30 Jun 2025**, using community tags. Steam-wide baseline for the same cohort: **4.2%** reached 1,000 reviews. SPA treats 1,000 reviews as a rough stand-in for about **$150,000 gross**, not a revenue figure. It warns that players add narrow tags to games that are already popular, which flatters narrow-tag hit rates. — [SPA cozy niche](https://www.steampageanalyzer.com/niches/cozy); [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
- **Cozy:**
  - 661 released in the cohort; **11%** reached 1,000 reviews (vs 4.2%).
  - By price: under $5 **2.7%**; $20 and up **45.2%** (31 games).
  - By sub-niche: **cozy farming sims 27.8%** (36 games; SPA's plausible range is about 16–44%); **cozy puzzle 5.9%**.
  - Sources: [SPA cozy niche](https://www.steampageanalyzer.com/niches/cozy); [SPA cozy 2026 report](https://www.steampageanalyzer.com/blog/cozy-games-steam-2026-niche-report)
- **Visual Novel:** 1,889 released in the cohort; **4%** reached 1,000 reviews (vs 4.2%). — [SPA visual novel](https://www.steampageanalyzer.com/niches/visual-novel)
- **Genre comparators from the same method:**
  - Metroidvania **6.2%** (median 22 reviews, $9.99 median price). Its Souls-like sub-niche reached **13.3%** (45 games).
  - Action Roguelike **3.5%**. Within it, Online Co-op reached **20%** (50 games) and the Survival sub-tag **0.8%** (118 games; 95% range 0.1–4.6%).
  - Steam-wide median: **11 reviews at a $4.99 median list price**.
  - Sources: [SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania); [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
- **Factory automation:** **8.4%** of automation games *released in 2026 so far* reached 1,000 reviews (SPA). — [SPA factory automation](https://www.steampageanalyzer.com/optimize/factory-automation)
- **Steam-wide 2025:** **608 of 20,282** 2025 releases reached 1,000 reviews (**2.99%**), per Chris Zukowski's count as relayed by SPA. A PC Gamer figure puts 2025 releases at **21,382**, so release totals differ by tracker. — [SPA, How many games](https://www.steampageanalyzer.com/blog/how-many-games-release-on-steam); [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-take-cover-because-it-looks-like-more-than-half-of-steam-games-will-have-an-ai-disclosure-by-2027-2028/)
- **Psychological horror:** **47** indie psychological-horror games released **20 Mar–20 Sep 2026** had reached 100+ reviews (SPA review-mining study of 9,566 reviews). No denominator was captured. — [SPA indie horror study](https://www.steampageanalyzer.com/blog/indie-horror-game-mistakes-steam-reviews)

#### C. Tag counts and top earners from games-stats (estimated net revenue; survivorship-biased top lists)

| Theme tag | Games tagged (snapshot label) | Top earners (est. net) | Small/long-tail examples | Source |
|---|---|---|---|---|
| Post-apocalyptic | **5,378** (page labelled "as of 2025"); **1,739** in a 2022 snapshot | Top ≈$380M (2025; ≈$450M in 2022). DayZ leads post-apocalyptic-related lists at ≈$440–450M | ≈$1,700 each around rank 660 (2022 snapshot) | [games-stats 2025](https://games-stats.com/steam/?page=144&tag=post-apocalyptic); [2022](https://games-stats.com/steam/?page=23&tag=post-apocalyptic) |
| Pirates | **1,009** (2026) | Sea of Thieves ≈$240M (315,126 reviews, $39.99); AC IV Black Flag ≈$53M; ATLAS ≈$21M; One Piece PW4 ≈$13M; Return of the Obra Dinn ≈$11M; Pillars of Eternity II ≈$11M; Marauders ≈$7.7M; AC Rogue ≈$7.5M; Like a Dragon: Pirate Yakuza ≈$6.4M | Tempest ≈$510k; Corsairs Legacy ≈$430k; Pirates Outlaws ≈$250k | [games-stats Pirates](https://games-stats.com/steam/?tag=pirates); [Tempest](https://games-stats.com/steam/game/tempest-pirate-action-rpg/); [Corsairs Legacy](https://games-stats.com/steam/game/corsairs-legacy-pirate-action-rpg/); [Pirates Outlaws](https://games-stats.com/steam/game/pirates-outlaws/) |
| Lovecraftian | **1,997** (2026) | Darkest Dungeon ≈$67M; Remnant: From the Ashes ≈$36M; SOMA ≈$26M; Lobotomy Corporation ≈$25M; DREDGE ≈$22M; Darkest Dungeon II ≈$18M; What Remains of Edith Finch ≈$18M; CARRION ≈$15M; Scorn ≈$14M; SIGNALIS ≈$11M | n/c | [games-stats Lovecraftian](https://games-stats.com/steam/?tag=lovecraftian) |
| Mythology | **2,984** (2026) | No clean top list. Gujian3 ≈$23M; Age of Mythology: Retold ≈$12M. Black Myth: Wukong (≈$1B) sat on the dark fantasy list | The visible rows were ≈$1,900 or less | [games-stats Mythology](https://games-stats.com/steam/?page=25&tag=mythology); [AoM Retold](https://games-stats.com/steam/game/age-of-mythology-retold/) |
| Steampunk | **≈1,208** (2026) | Top title ≈$88M (name not captured) | ≈$55–95 each around ranks 571–583 | [games-stats Steampunk](https://games-stats.com/steam/?page=20&tag=steampunk) |
| Underwater | **965** (page labelled 2025) | Monster Hunter Wilds ≈$230M (a tagging quirk); Subnautica ≈$170M (623,208 followers); Raft ≈$120M; Subnautica: Below Zero ≈$52M; Dave the Diver ≈$47M; Barotrauma ≈$37M; BioShock Remastered ≈$19M; Stranded Deep ≈$16M; Maneater ≈$11M | n/c | [games-stats Underwater](https://games-stats.com/steam/?tag=underwater) |
| Dinosaurs | n/c | ARK: Survival Evolved ≈$170M (584,107 reviews); Horizon Zero Dawn CE ≈$92M; ARK: Survival Ascended ≈$90M; Jurassic World Evolution ≈$46M; JWE2 ≈$45M; The Isle ≈$41M; JWE3 (Oct 2025) ≈$12M | Dinosaurs Dominion ≈$6,300; Dinosaur Simulator ≈$2,400 | [games-stats Dinosaurs](https://games-stats.com/steam/?tag=dinosaurs) |
| Space / Space Sim | n/c | Space (labelled 2025): HELLDIVERS 2 ≈$440M; No Man's Sky ≈$190M; Halo MCC ≈$120M. Space Sim (labelled 2026): No Man's Sky ≈$360M; Starfield ≈$110M; Kerbal Space Program ≈$91M | n/c | [games-stats Space](https://games-stats.com/steam/?tag=space); [Space Sim](https://games-stats.com/steam/?page=1&tag=space-sim) |
| Military | n/c | Call of Duty ≈$780M; Battlefield 6 ≈$360M; Hearts of Iron IV ≈$260M; Hell Let Loose ≈$110M (2026) | n/c | [games-stats Military](https://games-stats.com/steam/?tag=military) |
| World War II | n/c | **Older (2023 snapshot):** HOI IV ≈$120M; Sniper Elite 4 ≈$46M; Hell Let Loose ≈$46M; CoD: WWII ≈$27M; Wolfenstein II ≈$19M | n/c | [games-stats WWII](https://games-stats.com/steam/?tag=world-war-ii) |
| World War I | n/c | Battlefield 1 ≈$150M; Verdun ≈$11M (2026) | n/c | [games-stats WWI](https://games-stats.com/steam/?tag=world-war-i) |
| Western | n/c (tag page not surfaced) | Wild West Dynasty ≈$860k | n/c | [games-stats Wild West Dynasty](https://games-stats.com/steam/game/wild-west-dynasty/) |
| Cozy | n/c | PowerWash Simulator ≈$24M; Paralives ≈$14M (Early Access; its own page says ≈$16M); Hello Kitty Island Adventure ≈$7.2M; Tiny Glade ≈$6.4M | n/c | [games-stats Cozy](https://games-stats.com/steam/?tag=cozy); [Paralives](https://games-stats.com/steam/game/paralives/) |
| Cute | n/c | Stardew Valley ≈$250M (882,803 reviews); Fall Guys ≈$160M; Monster Hunter Wilds ≈$150M; Hollow Knight: Silksong ≈$150M; Hollow Knight ≈$140M | n/c | [games-stats Cute](https://games-stats.com/steam/?tag=cute) |
| Heist / Crime | n/c | Heist tag: Persona 5 Royal ≈$110M (92,710 reviews); PAYDAY 3 ≈$28M; PAYDAY: The Heist ≈$4.2M; SteamWorld Heist ≈$1.1M; Perfect Heist 2 ≈$680K. Crime tag: GTA V ≈$1.1B; Schedule I ≈$110M | UNDETECTED ≈$18K; BLOCK HEIST ≈$250 (13 reviews) | [games-stats Stealth](https://games-stats.com/steam/?tag=stealth); [PAYDAY: The Heist](https://games-stats.com/steam/game/paydaytm-the-heist/); [SteamWorld Heist](https://games-stats.com/steam/game/steamworld-heist/); [Perfect Heist 2](https://games-stats.com/steam/game/perfect-heist-2/); [UNDETECTED](https://games-stats.com/steam/game/undetected/); [BLOCK HEIST](https://games-stats.com/steam/game/block-heist/); [games-stats overall](https://games-stats.com/steam/) |
| Mechs | n/c | The extract's ranking showed only small titles at the top (Adeptus Titanicus: Dominus ≈$320k; Override: Mech City Brawl ≈$310k; Heavy Gear Assault ≈$180k). **This looks like an incomplete page snapshot; do not use it as the mech top end** | Ironclad Tactics ≈$68k | [games-stats Mechs](https://games-stats.com/steam/?tag=mechs) |

(n/c = not captured.)

#### D. Per-game estimates for individual zombie, space and other theme titles (other estimators)
- **Gamalytic** (gross):
  - **Project Zomboid** 16.8M copies, **$201.3M**.
  - **No More Room in Hell 2** 684.9K copies, $14.6M.
  - **Dead by Daylight** 19.7M, $180.7M.
  - **Zombie Exodus: Safe Haven** 9.3k copies, $38.2k.
  - Gamalytic's stated accuracy: 77% of estimates within 30% error and 98% within 50%; small games are less accurate.
  - Sources: [Gamalytic PZ](https://gamalytic.com/game/108600); [NMRiH2](https://gamalytic.com/game/292000); [DbD](https://gamalytic.com/game/381210); [Zombie Exodus](https://gamalytic.com/game/543980); [Gamalytic About](https://gamalytic.com/about)
- **The estimators disagree on Project Zomboid.** SPA's Boxleiter estimate is **12.2M–27.9M copies, $243.8M–$557.2M gross**, from 348,450 reviews. — [SPA Project Zomboid](https://www.steampageanalyzer.com/games/108600)
- **VG Insights:**
  - **Space Engineers** $56.8M, 3.8M units.
  - **Prey** (Sci-fi/Space tags) $49.2M, 1.9M units.
  - **Kerbal Space Program 2** $32.7M, 841k units.
  - Tag-level medians appear to need VG Insights' paid tools.
  - Sources: [VG Insights Space Engineers](https://vginsights.com/game/space-engineers); [Prey](https://vginsights.com/game/prey); [KSP2](https://vginsights.com/game/kerbal-space-program-2)
- **Survival Horror among $1M+ games:** Survival Horror is **5.17% of action-genre revenue** among projects above $1M gross (GameDiscoverCo analysis; date not captured; the extract's attribution is loose). — [GameDevReports on GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-steam-revenue-distribution)

#### E. Source conflicts noticed in this pass
- **No Man's Sky:** ≈$360M (Space Sim, labelled 2026) vs ≈$190M (Space, labelled 2025).
- **Hearts of Iron IV:** ≈$310M (RTS 2026) vs ≈$260M (Military 2026) vs ≈$120M (WWII 2023).
- **Monster Hunter Wilds:** ≈$150M (Cute) vs ≈$230M (Underwater).

The differing snapshot dates within games-stats probably explain these. — [games-stats Space](https://games-stats.com/steam/?tag=space); [Space Sim](https://games-stats.com/steam/?page=1&tag=space-sim); [RTS](https://games-stats.com/steam/?tag=rts); [Military](https://games-stats.com/steam/?tag=military); [WWII](https://games-stats.com/steam/?tag=world-war-ii); [Cute](https://games-stats.com/steam/?tag=cute); [Underwater](https://games-stats.com/steam/?tag=underwater)

### Inferences
- **Derived, Immutable medians as multiples of the $4,837 cross-sub-genre median:**

  | Row | Calculation | Multiple |
  |---|---|---|
  | Visual Novel | $10,300 / $4,837 | **2.13×** |
  | Farming Sim | $8,690 / $4,837 | **1.80×** |
  | Open World Survival Craft | $102,000 / $4,837 | **21.1×** |
  | 4X | $50,000 / $4,837 | **10.3×** |
  | Horror (pass 1) | | 0.54× |

  These are internally comparable because they come from one dataset.
- **Derived, implied price (a ratio of medians, not a true median price):** Visual Novel $10,300 / 1,140 ≈ **$9.04**; Farming Sim $8,690 / 1,080 ≈ **$8.05**. Both sit well above pass 1's ≈$3 implied price for horror.
- **Derived, number of games reaching 1,000 reviews in the SPA 2024–H1 2025 cohort:**
  - Cozy: 11% × 661 ≈ **73** (range 69–76 if 11% is rounded from 10.5–11.5%).
  - Visual Novel: 4% × 1,889 ≈ **76** (range 66–85).

  These and pass 1's horror counts (HTMAG: 47 in 2024, 39 in 2025, using a different method) are the only theme-level counts of 1,000-review games found.
- **Derived, distance to the $300k "moderate success" bar:**
  - SteamTrender's Cozy + Farming Sim median ($31K) is about **10%** of $300k ($31k / $300k = 0.103).
  - Immutable's Visual Novel median is **3.4%** and its Farming Sim median **2.9%** of $300k.
  - In every theme with a median, the median game is far below $300k, so threshold shares (hit rates) matter more than medians for the brief's definition.
- **Derived, bridging 1,000 reviews to revenue:**
  - SPA's equivalence is about $150k gross per 1,000 reviews.
  - Under We Love It's 35× standard multiplier (pass 1), 1,000 reviews ≈ 35,000 units. That is ≈$700k at a $20 list price (1,000 × 35 × $20) and ≈$175k at $5.
  - So SPA's cozy "$20+ = 45.2%" bucket plausibly clears $300k at list price, while the "<$5 = 2.7%" bucket would not even when it hits 1,000 reviews.
  - This is a list-price ceiling: discounts and regional pricing lower realized revenue.
- **Derived, catalog shares** (using pass 1's derived games-stats catalog of ≈168,000 games; tag snapshots differ by date, so these are rough):

  | Tag | Calculation | Share |
  |---|---|---|
  | Post-apocalyptic | 5,378 / 168,000 | **3.2%** |
  | Mythology | 2,984 / 168,000 | **1.8%** |
  | Lovecraftian | 1,997 / 168,000 | **1.2%** |
  | Steampunk | 1,208 / 168,000 | **0.7%** |
  | Pirates | 1,009 / 168,000 | **0.6%** |
  | Underwater | 965 / 168,000 | **0.6%** |
- **Derived, post-apocalyptic supply growth:** (5,378 − 1,739) / 1,739 = **+209%** (3.09×) between the 2022 and "2025" games-stats snapshots. Part of this is catalog growth and retroactive tagging, which cannot be separated here.
- **Lovecraftian top earners are AA/indie-scale.** All of its visible top ten sit in the ≈$11M–$67M range, with no $100M+ title. Dark fantasy (≈$1B top, pass 1), military (≈$780M), cute (≈$250M) and pirates (≈$240M) all have far larger tops. A small theme with a mid-sized top end fits a niche where non-AAA titles can lead, but **no median exists to show what the typical Lovecraftian release earns**.
- **Horror and Visual Novel: the sources disagree.** We Love It ranks horror's median **5th of about 30 genres**, whereas Immutable puts Horror's median at **0.54×** the sub-genre median (pass 1). Plausible reasons:
  - We Love It counts only priced games with ≥1 review whose top-six tags include Horror.
  - Immutable's inclusion rule for its Horror row is unstated.

  Visual Novel is above the middle in both datasets.

### Gaps
- **No median, mean or ≥$100k/≥$300k share was found for any requested theme tag:** fantasy, dark fantasy, medieval, sci-fi, space, post-apocalyptic, zombies, cyberpunk, Lovecraftian, mythology, anime, military/war, WWII, western, pirates, cozy (only the cozy + farming median), cute/animals, dinosaurs, mechs, aliens, crime/heist, steampunk, underwater. Reasons:
  - games-stats pages say they show "average, median and total revenues", but those numbers were never in the extracts (probably rendered by JavaScript).
  - Gamalytic, VG Insights and SteamDB tag pages were not in the search index or were unreachable.
- **Number of 1,000-review games by theme for 2024 and 2025:** only horror (pass 1), cozy and visual novel (derived above). No such counts for any other theme.
- **Aliens:** no data of any kind surfaced.
- **Cyberpunk, anime (as a tag), fantasy, dark fantasy, medieval, sci-fi:** no new per-tag numbers beyond pass 1.
- **Mechs:** the games-stats extract appears incomplete. Its true top end and tag count were not captured.
- **Western and dinosaur tag counts:** not captured.
- **Immutable's "about twenty titles per median"** statement and its full 107-row table remain unverified. Only six rows have been captured across both passes.

## 2. Which themes perform best per game, and which are most crowded relative to their results

### Takeaway
On the few like-for-like measures available, the **cozy family performs best per game**:
- **Cozy:** 11% reached 1,000 reviews, 2.6× the Steam rate; **cozy farming** 27.8%.
- **Farming Sim:** median 1.8× the sub-genre median.
- **Visual novels:** above-median revenue (Immutable 2.13×; We Love It #2 genre median) but only an average 1,000-review rate (4% vs 4.2%), which fits a compressed distribution with few zeros and few breakouts.

**Horror** remains the clearest case of high crowding against weak median results (pass 1), although We Love It's genre ranking disagrees.

On **supply**, cozy and post-apocalyptic are growing fastest:
- **Cozy:** 2026 releases are running **+143%** year on year against about +45% for Steam overall (SPA).
- **Post-apocalyptic:** tagged games roughly tripled between 2022 and 2025.

Smaller themes (Lovecraftian, underwater, pirates, steampunk, at roughly 0.6–1.2% of the catalog each) show mid-sized non-AAA top earners. Without medians, though, "under-served" stays a hypothesis.

### Cited Findings
- **Cozy:**
  - Like-for-like hit rates (SPA, 1,000 reviews, 2024–H1 2025 cohort): cozy **11%**; cozy farming **27.8%** (36 games); cozy puzzle **5.9%**; visual novel **4%**; metroidvania **6.2%**; action roguelike **3.5%**; Steam **4.2%**.
  - **SPA's caveat:** narrow-tag hit rates are flattered because players add tags such as Cozy to games that are already popular, and part of cozy's growth is a labelling effect that SPA cannot separate from store data.
  - Sources: [SPA cozy](https://www.steampageanalyzer.com/niches/cozy); [SPA cozy 2026 report](https://www.steampageanalyzer.com/blog/cozy-games-steam-2026-niche-report); [SPA niches filling fastest](https://www.steampageanalyzer.com/blog/steam-niches-2026-filling-fastest)
- **Like-for-like medians (Immutable/Gamalytic, Aug 2026):** Visual Novel $10,300 (12,646 games); Farming Sim $8,690 (1,494); cross-sub-genre median $4,837. Pass 1's Horror ($2,590; 15,142) and Survival Horror ($2,050; 5,430) rows come from the same table. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **We Love It genre medians (Aug 2026):** sandbox, then visual novels, simulation, RPG, horror and point-and-click; racing, puzzle, arcade and platformer lowest (about $1,000 or less). — [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years); [Automaton West](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
- **Supply growth in 2026, SPA niche data (snapshot 27 Sep 2026; 1 Jan–27 Sep 2026 vs the same weeks of 2025):**
  - Steam overall: **+45%**.
  - Cozy: **1,041 vs 428** (2026 passed all of 2025's cozy total by 6 Aug). **2,730** cozy pages were still unreleased.
  - Within cozy: Cozy Idler **49 → 200**; Incremental **17 → 139**.
  - Genre comparators: Action Roguelike **1,505 (+57%)**; Roguelite **631 vs 354 (+78%)**; Bullet Heaven **200 vs 42 (+376%)**; Metroidvania **+9%**.
  - Sources: [SPA niches filling fastest](https://www.steampageanalyzer.com/blog/steam-niches-2026-filling-fastest); [SPA cozy 2026 report](https://www.steampageanalyzer.com/blog/cozy-games-steam-2026-niche-report); [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
- **Overall release growth (other trackers):**
  - **11,979** releases in H1 2026, per SteamDB as cited by Mezha / Game World Observer. — [Mezha](https://mezha.ua/en/news/steam-games-statistics-315726/)
  - **9,517** in H1 2025 (+9.5% year on year). — [WN Hub H1 2025](https://wnhub.io/news/stores-and-publishing/item-48224)
  - Releases grew 32% in 2024 and 11% in 2025, per a search extract summarising SPA and Zukowski / VG Insights. — [SPA, How many games](https://www.steampageanalyzer.com/blog/how-many-games-release-on-steam)
- **"Cozy" as positioning:**
  - The word "cozy" in Steam sales pitches is up **675% since 2022**.
  - The share of *high-earning* Steam titles using the term rose from **0.4% (2022) to 3.1% (2025)**.
  - Source: [Outlook Respawn, Feb 2026](https://respawn.outlookindia.com/gaming/gaming-news/steam-vibe-shift-why-cozy-is-the-most-dominant-keyword-of-2026)
- **Tag sizes captured in this pass (games-stats):** Post-apocalyptic 5,378 (1,739 in 2022); Mythology 2,984; Lovecraftian 1,997; Steampunk ≈1,208; Pirates 1,009; Underwater 965. Pass 1 adds Horror 15,142 (Immutable), Dark Fantasy 8,577, Zombies ≈5,577 and Cyberpunk ≈5,051 (games-stats). — [games-stats Post-apocalyptic](https://games-stats.com/steam/?page=144&tag=post-apocalyptic); [Mythology](https://games-stats.com/steam/?page=25&tag=mythology); [Lovecraftian](https://games-stats.com/steam/?tag=lovecraftian); [Steampunk](https://games-stats.com/steam/?page=20&tag=steampunk); [Pirates](https://games-stats.com/steam/?tag=pirates); [Underwater](https://games-stats.com/steam/?tag=underwater)
- **Long tails visible inside themes** (they confirm skew but cannot yield medians):
  - Post-apocalyptic ≈$1,700 per game around rank 660 (2022).
  - Mythology visible rows ≈$1,900 or less.
  - Steampunk ≈$55–95 around ranks 571–583.
  - Small pirate titles $250k–$510k.
  - Small dinosaur titles ≈$2,400–$6,300.
  - Sources: games-stats pages cited in Section 1.
- **Mechs: hype without retention.**
  - Mecha BREAK (free PvP mech shooter) hit about **317,500** peak CCU in its Feb 2025 open beta while "Mostly Negative". At its July 2025 launch it peaked **>130,000** CCU with **63%** positive across 6,000+ reviews.
  - A 22 Jul 2026 snapshot shows **60%** across **28,848** reviews and **732** players in-game.
  - Coverage calls the mecha sub-genre "often overlooked" with "hit-and-miss performances", Armored Core VI being the major exception.
  - Sources: [WN Hub](https://wnhub.io/news/stores-and-publishing/item-47172); [TechNode](https://technode.com/2025/07/04/mecha-break-launches-globally-but-faces-widespread-player-criticism/); [Raijin](https://raijin.gg/app/2452280/Mecha_BREAK); [Notebookcheck](https://www.notebookcheck.net/New-free-PvP-mech-shooter-with-flashy-graphics-and-slick-aerial-combat-tops-Steam-player-charts-hours-after-launch.1050500.0.html)

### Inferences
- **Per-game ranking where like-for-like evidence exists:**

  | Tier | Themes | Basis |
  |---|---|---|
  | Strong | Cozy, especially cozy farming and cozy at $20+ | Hit rate |
  | Strong | Farming Sim | Median |
  | Above median, average hit rate | Visual Novel | Median vs hit rate |
  | Below median | Horror and Survival Horror (pass 1) | Median |

  No like-for-like per-game measure exists for the other requested themes, so they **cannot be ranked** from the data gathered.
- **Most crowded relative to results:**
  - *Horror*: largest tag, sub-par median in Immutable, but strong hit counts in HTMAG (pass 1), so it is polarized.
  - *Cozy*: the risk is rising. Its strong 2024–H1 2025 hit rate was measured *before* a 2026 supply surge (+143% year on year against Steam's +45%), and part of the measured hit rate may be tag inflation.
  - *Post-apocalyptic*: supply roughly tripled from 2022 to 2025 (derived), with a visible ≈$1,700 long tail and no median.
  - *Zombies, cyberpunk, dark fantasy*: large tags (pass 1) with revenue concentrated in AAA/AA titles.
- **Smaller themes whose top earners look AA- or indie-scale** (team sizes and budgets were not verified in this pass; the label rests on the absence of $500M+ titles and on general knowledge):
  - Lovecraftian: ≈1.2% of the catalog; top ten all ≈$11M–$67M.
  - Underwater: ≈0.6%; Subnautica, Raft, Barotrauma, Dave the Diver and Stranded Deep at ≈$16M–$170M.
  - Pirates: ≈0.6%; Sea of Thieves plus a 2026 breakout, Windrose (Section 3).
  - Steampunk: ≈0.7%.

  These are the best candidates for "less crowded but proven" themes. The evidence is survivorship-biased (top lists only), so this remains a **hypothesis**, not a finding.
- **Mechs:** the 2025 evidence points to strong *curiosity* (very high beta and launch CCU) but weak *retention and reception* for the one big entrant. That is a sample of one F2P title and says little about premium indie mech games.

### Gaps
- No per-theme medians or hit rates for zombies, post-apocalyptic, cyberpunk, sci-fi, space, fantasy, medieval, mythology, Lovecraftian, pirates, underwater, steampunk, western, dinosaurs, mechs, aliens, heist or military/WWII. Crowding "relative to results" can therefore only be assessed for horror, cozy, visual novel and farming sim.
- Yearly release counts by theme tag (SteamDB `stats/releases/?tagid=`) could not be retrieved, so supply trends rest on games-stats snapshots and SPA's cozy series.
- SPA's +45% Steam-wide 2026 growth (Jan–Sep) and the trackers' H1 figures (11,979 vs 9,517 ≈ +26%, derived) differ. The windows and trackers differ, so the true 2026 growth rate is uncertain.

## 3. Current (2025–2026) demand signals by theme: wishlists, Next Fest, Twitch/YouTube, search interest, surveys

### Takeaway
The 2025–2026 signals cluster around four themes:
- **Dark/historical fantasy action:** the top wishlisted upcoming games as of Aug 2026 are Phantom Blade Zero, The Blood of Dawnwalker and Onimusha. Dark fantasy and Souls-like tags clustered among the June 2026 Next Fest wishlist leaders.
- **Survival in a distinctive setting:** Subnautica 2 (underwater; about 3.8M wishlists, then 4M+ sales in 5 days in May 2026) and Windrose (pirates; #3 most-played Feb 2026 demo, 1.5M+ sales after its April 2026 launch).
- **Co-op of any setting:** BOMBANANA!, Far Far West (western-fantasy) and the co-op tag cluster at Next Fest.
- **Horror:** five horror-adjacent titles in the Oct 2025 Next Fest top ten (by my labels; see Inferences); Twitch horror at 287M hours in Jan–Sep 2026, with the Horror tab +6% year on year.

**Cozy** shows strong keyword and supply momentum but no theme-level Google Trends series was obtained. **Mechs** spiked on hype (Mecha BREAK) but failed on retention. No 2024–2026 survey percentages on settings were found.

### Cited Findings

#### Wishlists (third-party estimates; Valve's "Top Wishlists" chart weights velocity and is not a 1:1 count)
- **Alinea Analytics, Feb 2026 (2026-dated releases):** Subnautica 2 **≈3.8M** (wishlistable since Nov 2024); Forza Horizon 6 **≈2.6M**; Resident Evil Requiem **≈2.5M**. Deadlock and Light No Fire were reported between Subnautica 2 and Forza on Valve's chart. — [Alinea](https://alineaanalytics.substack.com/p/the-top-2026-games-by-steam-wishlists); [Outlook Respawn](https://respawn.outlookindia.com/gaming/gaming-news/subnautica-2-tops-steam-wishlist-followed-by-forza-horizon-6)
- **Early Aug 2026, citing GameDiscoverCo estimates:** Phantom Blade Zero **≈1.62M**; The Blood of Dawnwalker **≈1.47M**; Onimusha: Way of the Sword **≈1.18M**. — [Khel Now](https://khelnow.com/gaming/phantom-blade-zero-reportedly-becomes-steams-most-wishlisted-game-of-202608)
- **iXBT, 30 Sep 2026, most-wanted October 2026 Steam releases:**
  - The search extract lists Phantom Blade Zero (29 Oct) first, then over the hill (14 Oct), then ACE COMBAT 8 (2 Oct). Also listed: AION 2, Gears of War: E-Day, Valor Mortis.
  - **The ordering is ambiguous.** The article's headline reads, in translation, "many are waiting for a cozy analog of SnowRunner, but it has a competitor for players' attention". That could mean the SnowRunner-like title leads.
  - I identify the "cozy analog of SnowRunner" as over the hill, which Impulse Gamer describes as an off-road exploration game with 1960s–80s vehicles. That identification is mine.
  - Sources: [iXBT](https://ixbt.games/en/news/2026/09/30/nazvana-samaia-zelannaia-igra-na-pk-v-steam-v-oktiabre-2026-mnogie-zdut-uiutnyi-analog-snowrunner-no-u-nego-est-konkurent-za-vnimanie-igrokov.html); [Impulse Gamer](https://www.impulsegamer.com/valve-reveals-the-top-50-most-played-demos-from-junes-steam-next-fest/)
- **Gamescom 2026 (23–30 Aug), Alinea:** The Witcher 3 expansion *Songs of the Past* gained **≈451,000** new wishlists, 72,000 ahead of second place. Alinea notes wishlists are an interest indicator, not a launch-sales predictor. — [Inven Global](https://www.invenglobal.com/articles/25606/alinea-estimates-the-witcher-3-expansion-as-most-wishlisted-gamescom-title-on-steam)
- **Cozy:** Bryter cites strong 2026 wishlist numbers for Witchbrook and Outbound (no figures captured). — [Bryter](https://www.bryter-global.com/blog/the-rise-of-cozy-gaming)
- **Benchmark (HTMAG, Feb 2025):** entering the top 25 of Steam's "Popular Upcoming" took about **7,400 followers** at the start of Next Fest. — [HTMAG Feb 2025](https://howtomarketagame.com/2025/03/04/steam-next-fest-feb-2025/)

#### Steam Next Fest, 2025–2026
- **Feb 2025 (23 Feb–3 Mar):**
  - Follower gains: **Mecha BREAK #1 (+16,400)**, Gothic 1 Remake #2 (+7,400), Dune: Awakening #5 (+6,000), Game of Thrones: Kingsroad #6 (+5,700). GameDiscoverCo calls Mecha BREAK a timing-driven, mainly Asian breakout. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-games-hit-big-in-steams-feb)
  - Peak CCU: RoadCraft 12,559 (third-best demo to date); Gothic 1 Remake demo 10,222. — [GamesMarket](https://www.gamesmarket.global/demos-and-more-many-gsa-studios-taking-part-in-steam-next-fest-178ea0bbb794977957a12e9eb42cf1bc/)
  - Late risers on the "Top Demos" chart: Megabonk, Emissary Zero, Is This Seat Taken?, 9 Kings, Fellowship, Shape of Dreams. — [HTMAG](https://howtomarketagame.com/2025/03/04/steam-next-fest-feb-2025/)
- **June 2025 (9–16 June):**
  - GameDiscoverCo wishlist gains during the fest:

    | Game | Est. wishlists gained |
    |---|---|
    | Stellar Blade (launched during the fest; ineligible) | ≈227.2k |
    | Vindictus: Defying Fate | ≈151.6k |
    | Dispatch | ≈110.2k |
    | No, I'm not a Human | ≈90.3k |
    | Jump Ship | ≈89.7k |
    | PIONER | ≈82.9k |
    | Solo Leveling: ARISE OVERDRIVE | ≈72.9k |
    | Dead as Disco | ≈71.9k |
    | Ball X Pit | ≈67.5k |
    | Ratatan | ≈61.9k |

  - GameDiscoverCo says these estimates run **20–40% low**. Over 2,600 demos took part.
  - Sources: [Game World Observer](https://gameworldobserver.com/2025/06/19/gamediscoverco-named-the-games-with-the-most-wishlists-following-the-june-2025s-steam-next-fest); [GameDiscoverCo](https://newsletter.gamediscover.co/p/who-won-june-2025s-steam-next-fest)
- **Oct 2025 (13–20 Oct):**
  - Valve's top 10 by unique players: **Half Sword, Heroes of Might and Magic: Olden Era, YAPYAP, Final Sentence, REANIMAL, Everwind, The Midnight Walkers, The Cube, Save Us, Misery**. Only one full ranking was found; games.gg corroborates the top five. A WN Hub list starting with Once Human / Level Zero / Tiny Glade belongs to an older fest.
  - GameDiscoverCo: **five games gained >100k wishlists** during the fest (Reanimal, Everwind, Final Sentence, HoMM, YapYap); Misery was #6 and Starsand Island #9.
  - Sources: [GeekChamp](https://geekchamp.com/?p=1056577); [games.gg](https://games.gg/ur/news/steam-next-fest-october-2025-highlights/); [GameDiscoverCo](https://newsletter.gamediscover.co/p/who-won-october-2025s-steam-next)
- **Feb 2026 (23 Feb–2 Mar; one wiki revision says 17–24 Feb):**
  - Valve top 50: **#1 Marathon, #2 Burglin' Gnomes, #3 Windrose, #4 Vampire Crawlers**. — [Shacknews](https://www.shacknews.com/article/148104/top-50-steam-next-fest-games-2026); [ScreenHub](https://www.screenhub.com.au/news/games/steam-next-fest-most-played-demos-2694855/)
  - **Windrose (pirate survival)** was reported as the most-wishlisted game of the fest, per Alinea. Its demo added **≈474,000** wishlists. A community wiki, citing SteamDB, reports 22,396 peak CCU and 800k+ demo players (secondary). — [Insider Gaming](https://insider-gaming.com/the-most-wishlisted-game-of-steam-next-fest-2026-has-been-revealed-its-claimed/); [TweakTown](https://tweaktown.com/news/111385/windrose-sails-past-1-5-million-sales-as-pirate-craze-explodes/index.html); [The Games Wiki](https://thegameswiki.com/windrose/wiki/steam-next-fest-2026/history/6f01ed83-ea70-4376-854d-e1b83c512eb9)
  - Context:
    - About 3,500+ demos, reported as +51% vs Feb 2025 (attribution uncertain). — [Ziva](https://ziva.sh/blogs/steam-next-fest-2026)
    - Chris Zukowski's survey of 182 participating developers put the **median gain at ≈800 wishlists** (reported secondhand). — [Cinevva guide](https://app.cinevva.com/guides/steam-next-fest-strategy-gamedeveloper)
    - "How Many Dudes?" +14,740 wishlists (unconfirmed). — [Tech Insider](https://tech-insider.org/steam-next-fest-june-2026/)
- **June 2026 (15–22 June):**
  - Valve most-played: **#1 BOMBANANA!** (co-op bomb defusal; >1M added the demo, >675k played). **#2 IRON NEST: Heavy Turret Simulator**, a "dieselpunk artillery sim" by two developers with 250k+ pre-existing wishlists; one Substack credits ≈+200k wishlists during the fest, and a 124,622 figure elsewhere conflicts.
  - Also in the top tier: **Echoes of Aincrad** (Sword Art Online action RPG; peak 14,408), **Mistfall Hunter** ("dark fantasy extraction ARPG"; peak 16,683) and **over the hill**.
  - Sources: [Impulse Gamer](https://www.impulsegamer.com/valve-reveals-the-top-50-most-played-demos-from-junes-steam-next-fest/); [Recognizing Patterns](https://recognizingpatterns.substack.com/p/steam-next-fest-june-2026-communities)
  - GameDiscoverCo: **co-op and online co-op tags clustered among the top wishlist gainers, along with Souls-like and dark fantasy**. Its top 10 included Empulse (#6) and Embers of the Uncrowned (#10). — [GameDiscoverCo June 2026](https://newsletter.gamediscover.co/p/who-won-june-2026s-steam-next-fest)
  - Scale and distribution (secondary analyses; attribution uncertain):
    - More than 4,300 demos.
    - Median game gained **≈200 wishlists**.
    - Only **788 of 4,175** analysed games entered with >2,000 wishlists.
    - Top 5% gained **≈7,000** wishlists, down from ≈10,000 a year earlier.
    - 26.5% of demos carried an AI disclosure.
    - Sources: [WN Hub](https://wnhub.io/news/stores-and-publishing/item-51221); [Tech Insider](https://tech-insider.org/steam-next-fest-june-2026/); [Recognizing Patterns](https://recognizingpatterns.substack.com/p/steam-next-fest-june-2026-communities)
- **Oct 2026 edition:** scheduled **19–26 Oct 2026**, so it had not yet happened at the research date. The dates come from a search extract summarising 2026 Next Fest guides; which guide stated them is uncertain. — [Ziva](https://ziva.sh/blogs/steam-next-fest-2026); [games.gg Feb 2026 guide](https://games.gg/news/steam-next-fest-february-2026-full-guide/)
- **Space-sim demo data point:** the hardcore space sim Capital Command earned **22,862 wishlists** from a demo with a 10-minute median playtime (single game). — [SPA demo length](https://www.steampageanalyzer.com/blog/how-long-should-a-steam-demo-be)

#### 2026 launches that function as theme-demand evidence
- **Windrose (pirates; co-op PvE survival).** Early Access launched **14 Apr 2026** at $29.99.
  - Sales: **1M copies in 6 days**, **>1.5M** per TweakTown; Alinea's estimate is "past 1.3M".
  - Revenue: Alinea estimates **≈$30M gross** (≈10 days per Intellinews).
  - Players: Steam peak **222,134** CCU on 19 Apr.
  - Team: Kraken Express (≈60 people, Uzbekistan); published by Pocket Pair Publishing. TweakTown frames it as a "pirate craze".
  - Sources: [TweakTown](https://tweaktown.com/news/111385/windrose-sails-past-1-5-million-sales-as-pirate-craze-explodes/index.html); [Shacknews](https://www.shacknews.com/article/148765/windrose-one-million-copies-sold); [Alinea](https://alineaanalytics.substack.com/p/windrose-sails-past-13m); [Intellinews](https://www.intellinews.com/tashkent-studio-s-pirate-survival-game-windrose-pulls-in-30mn-in-10-days-440443/)
- **Far Far West (western; "robot-cowboy" co-op extraction shooter with spells and raid bosses, a "fantasy take on the Old West").** Early Access launched **28 Apr 2026** at about $20.
  - Sales: **≈250k in 48 hours**; **1M units in under two weeks** (publisher announcement).
  - Reception and players: **97% positive** across 12,000+ reviews; peak **43,832** CCU.
  - Team: Evil Raptor, published by Fireshine.
  - Sources: [PCGamesN](https://www.pcgamesn.com/far-far-west/steam-success); [EG7 via MFN](https://mfn.se/a/enad-global-7/far-far-west-has-surpassed-1-million-units-sold-on-steam.iframe); [Fix Gaming Channel](https://www.fixgamingchannel.com/far-far-west-passes-1-million-sales-on-steam/)
- **Subnautica 2 (underwater survival sequel).** Early Access launched **14 May 2026**.
  - Sales: **2M copies in 12 hours**; **>4M in 5 days**.
  - Players: Steam peak **467,582**.
  - Streaming: Twitch peak **>413,000** concurrent viewers; YouTube Live **>109,000**.
  - Reception: about 91% positive across ≈73k reviews.
  - Sources: [Gematsu](https://www.gematsu.com/2026/05/subnautica-2-early-access-sales-top-two-million-in-12-hours); [Inven Global](https://www.invenglobal.com/articles/22046/subnautica-2-sells-4-million-copies-in-5-days-of-early-access-peak-concurrent-players-hit-460k); [VGC](https://www.videogameschronicle.com/news/subnautica-2-sells-2-million-in-12-hours-with-over-600k-concurrent-players/); [Fullcleared](https://fullcleared.com/news/subnautica-2-tops-1m-sold-465k-concurrent-players/)
- **Manor Lords (medieval city builder; solo developer; 2024 Early Access).**
  - Sales: **2M within about three weeks** (May 2024); **3M+ copies across all stores by Feb 2025**.
  - Players: peak **173,178** CCU, a record for a city builder on Steam.
  - Reception: **87%** positive across 57,000+ reviews (Feb 2025).
  - Sources: [Hooded Horse press release](https://gamespress.com/Manor-Lords-celebrates-three-million-sales); [Destructoid](https://destructoid.com/manor-lords-surpasses-devs-wildest-expectations-with-more-than-2m-copies-sold-so-far)

#### Streaming and search interest
- **Twitch "State of Gaming 2026"** (released 9 Sep 2026; covers 1 Jan–1 Sep 2026):
  - Gaming total **8.6B** hours watched; top five games ≈1.7B hours.
  - **Horror genre 287M hours**; content on the dedicated **Horror tab 93M hours, +6% year on year**.
  - The "creatures and companions" grouping (Pokopia, Slime Rancher, cozy-adjacent) **142M hours**.
  - **Indie-tagged channels +51%** year on year, with Meccha Chameleon, Slay the Spire 2 and Big Walk cited among titles accruing **>348M** total hours.
  - Sources: [GamesBeat](https://gamesbeat.com/twitchs-state-of-gaming-2026-report-shows-growing-interest-in-indies-horror-games-exclusive/); [Tubefilter](https://www.tubefilter.com/2026/09/09/twitch-state-of-gaming-2026-jynxzi-league-of-legends/); [Streamer.guide](https://streamer.guide/blog/twitch-state-of-gaming-2026)
- **2025 Twitch genre chart:** a Statista chart of the most popular genres on Twitch by hours watched (Sept 2025) exists but is paywalled. — [Statista](https://www.statista.com/statistics/1495515/most-popular-game-genres-twitch)
- **Search interest:**
  - Google Trends showed the word "cozy" passing "wholesome" by 2021 and "casual" by 2022. This is the word itself, not "cozy games", and not Steam-specific.
  - On Steam, "cozy" in sales pitches is **+675% since 2022**. — [Outlook Respawn, Feb 2026](https://respawn.outlookindia.com/gaming/gaming-news/steam-vibe-shift-why-cozy-is-the-most-dominant-keyword-of-2026)
- **Page conversion (SPA estimates, no published sample):** horror Coming Soon pages convert **12–18%** of visits to wishlists; city builders **8–12%**. — [SPA conversion by genre](https://www.steampageanalyzer.com/blog/steam-conversion-rate-by-genre)

#### Surveys (secondary context only)
- **Owlcat Games "BIG Community Survey 2025"** (results 27 Nov 2025; 25,000+ respondents; Owlcat's CRPG-fan audience): **59%** said their favourite genres *and settings* matter when choosing their next game. The setting-by-setting breakdown was not in the extracts. — [Owlcat](https://owlcat.games/news/98)
- **No 2024–2026 Quantic Foundry post on setting preferences** was found. Pass 1's 2017/2023 data remain the latest.

### Inferences
- **Theme labels below are my own classification from general knowledge unless the cited source described the game. They are not sourced facts.** Labels that came from sources: Windrose (pirates), IRON NEST (dieselpunk), Mistfall Hunter (dark fantasy), Echoes of Aincrad (SAO/anime IP), Far Far West (western-fantasy), over the hill (off-road, "cozy" analog), Mecha BREAK (mech).

  | Edition | My theme reading |
  |---|---|
  | Oct 2025 Next Fest top 10 | Medieval (Half Sword); fantasy strategy (Olden Era); fantasy/wizard co-op (YAPYAP); horror or horror-adjacent (REANIMAL, Final Sentence, The Midnight Walkers [zombie], Misery [post-apocalyptic survival]); fantasy survival sandbox (Everwind) |
  | June 2025 wishlist leaders | Anime-styled action (Vindictus, Solo Leveling); superhero narrative (Dispatch); horror (No, I'm not a Human); space co-op (Jump Ship); post-apocalyptic MMO shooter (PIONER) |
  | Aug 2026 wishlist leaders | Dark/historical fantasy action (Phantom Blade Zero, The Blood of Dawnwalker, Onimusha) |

  Overall:
  - **Fantasy/dark fantasy and horror recur most often** across the 2025–2026 top lists.
  - Anime IP, post-apocalyptic, sci-fi extraction and pirates each appear at least once.
  - Westerns appear through a 2026 launch, not Next Fest.
  - Mechs appear once, and that title failed on retention.
- **Derived, Twitch shares:** horror is 287M / 8.6B ≈ **3.3%** of gaming hours watched on Twitch (Jan–Sep 2026), and the Horror tab alone is 93M / 8.6B ≈ **1.1%**. Horror's streaming demand is steady to rising (+6% for the tab) and is a meaningful marketing channel.
- **Derived, Windrose:** $30M / $29.99 ≈ **1.0M copies**. Alinea's ≈$30M estimate therefore lines up with the reported 1M-in-6-days milestone at list price.
- **Derived, Far Far West upper bound:** 1M units × ≈$20 ≈ **$20M gross**. This is a list-price ceiling, before discounts, regional pricing and Steam's cut.
- **2026's three theme breakouts share a shape.** Windrose (pirates), Far Far West (western) and Subnautica 2 (underwater) are all **co-op or survival structures in a distinctive, less-crowded setting** (pirates ≈0.6% and underwater ≈0.6% of tagged games, derived in Section 1). The pattern fits the hypothesis that a fresh setting on a proven multiplayer/survival loop is a strong 2026 demand signal. However, Windrose comes from a ≈60-person studio and Subnautica 2 is a sequel from the studio behind Subnautica (≈$170M est.). Far Far West's team size was not captured. The pattern therefore says little about solo or small-team odds.
- **Median vs top at Next Fest.** The median Next Fest participant gained only ≈200 wishlists (June 2026) to ≈800 (Feb 2026 survey), while theme winners gained 100k–474k. Theme alone does not lift a typical demo; the top-list themes describe where outliers landed.

### Gaps
- **SteamDB's most-wishlisted list itself** was not reachable. The wishlist ranks above are secondary and third-party estimates (Alinea, GameDiscoverCo), dated Feb and Aug 2026. No current (Oct 2026) full list by theme was captured, and no wishlist totals were aggregated by tag.
- **Full Valve top-50 lists** for each Next Fest were not captured, only the top 4–10 and fragments. Nor was a theme-tag tally of any top 50 (the WN Hub June 2026 genre analysis is paywalled).
- **Google Trends series** for theme queries ("zombie game", "medieval game", "pirate game", "cozy game" and so on) were not obtained; trends.google.com was blocked and no secondary series surfaced.
- **YouTube viewership by theme:** none, apart from Subnautica 2's launch YouTube Live peak.
- **Twitch 2025 genre breakdown:** Statista, paywalled. Twitch theme data beyond horror and "creatures and companions" were not captured.
- **Survey data:** Owlcat's setting percentages and any 2024–2026 Quantic Foundry or Newzoo setting-preference data were not found.
- **Zombie-specific 2025–2026 demand data:** the search returned only low-quality SEO pages, so none was included.

## 4. Theme × genre combinations with the strongest measured record

### Takeaway
The strongest *measured* theme × genre record found is **cozy × farming sim**:
- SPA: **27.8%** reached 1,000 reviews, against 11% for cozy overall and 4.2% Steam-wide.
- SteamTrender: **$31K median** across 86 games.
- Immutable: Farming Sim median **$8,690**, 1.8× the sub-genre median.

The next strongest:
- **Souls-like × metroidvania** (dark-fantasy-adjacent): 13.3%.
- **Online co-op × action roguelike:** 20%.

Among setting-plus-genre pairings with only top-earner and launch evidence, **open-world survival (craft) paired with a distinctive setting** has the deepest record: pirates, underwater, dinosaurs, zombies/post-apocalyptic. Its genre median is $102k (Immutable), about 20.8% of releases reach 1,000 reviews, and 2026 brought breakouts in Windrose and Subnautica 2. **Survival as a secondary tag on action roguelikes performs poorly (0.8%)**, so the strength belongs to the open-world survival loop, not the word "survival".

### Cited Findings
- **Cozy × farming sim:** 27.8% reached 1,000 reviews (36 games; range ≈16–44%) vs cozy 11% and Steam 4.2% (SPA, 2024–H1 2025 cohort). — [SPA cozy 2026 report](https://www.steampageanalyzer.com/blog/cozy-games-steam-2026-niche-report)
  - SteamTrender Cozy + Farming Sim: 86 games, median revenue **$31K**, top-3 share 39% (snapshot 11 Oct 2026). — [SteamTrender](https://steamtrender.com/)
  - Immutable Farming Sim: 1,494 games, median **$8,690**. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **Cozy × puzzle:** **5.9%**. **Cozy by price:** $20+ **45.2%** (31 games) vs under $5 **2.7%**. — [SPA cozy 2026 report](https://www.steampageanalyzer.com/blog/cozy-games-steam-2026-niche-report)
- **Cozy × idle/incremental:** releases surging in 2026 (Cozy Idler 49 → 200; Incremental 17 → 139). No hit rate was captured. — [SPA niches filling fastest](https://www.steampageanalyzer.com/blog/steam-niches-2026-filling-fastest)
- **Souls-like × metroidvania:** **13.3%** (45 games) vs 6.2% for metroidvania overall. — [SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania)
- **Co-op × action roguelike:** online co-op **20%** (50 games). Survival × action roguelike: **0.8%** (118 games). — [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
- **Co-op generally:** Alinea Analytics' 2025 Year in Review found co-op-tagged games had the **highest average revenue in 2025**. — [GameDevReports on Alinea](https://gamedevreports.substack.com/p/alinea-analytics-2025-year-in-review)
  - June 2026 Next Fest wishlist leaders clustered in **co-op/online co-op, Souls-like and dark fantasy**. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/who-won-june-2026s-steam-next-fest)
- **Open World Survival Craft (the genre partner):** median gross **$102,000** (Immutable/Gamalytic, Aug 2026), the highest row captured; about **20.8%** of releases cleared 1,000 reviews (Immutable). — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
  - Survival-type titles at the top of theme lists:

    | Theme | Survival-type top earners | Source |
    |---|---|---|
    | Pirates | Sea of Thieves ≈$240M; ATLAS ≈$21M | [games-stats Pirates](https://games-stats.com/steam/?tag=pirates) |
    | Underwater | Subnautica ≈$170M; Raft ≈$120M; Subnautica: Below Zero ≈$52M; Barotrauma ≈$37M; Stranded Deep ≈$16M | [games-stats Underwater](https://games-stats.com/steam/?tag=underwater) |
    | Dinosaurs | ARK: Survival Evolved ≈$170M; ARK: Survival Ascended ≈$90M; The Isle ≈$41M | [games-stats Dinosaurs](https://games-stats.com/steam/?tag=dinosaurs) |
    | Zombies | Project Zomboid (Gamalytic: $201.3M gross) | [Gamalytic PZ](https://gamalytic.com/game/108600) |

  - **2026 launches:** Windrose (pirate survival, >1.5M sales) and Subnautica 2 (>4M in 5 days). — [TweakTown](https://tweaktown.com/news/111385/windrose-sails-past-1-5-million-sales-as-pirate-craze-explodes/index.html); [Inven Global](https://www.invenglobal.com/articles/22046/subnautica-2-sells-4-million-copies-in-5-days-of-early-access-peak-concurrent-players-hit-460k)
- **Dinosaurs × management sim:** Jurassic World Evolution ≈$46M; JWE2 ≈$45M; JWE3 (Oct 2025) ≈$12M. — [games-stats Dinosaurs](https://games-stats.com/steam/?tag=dinosaurs)
- **Underwater × management/adventure:** Dave the Diver ≈$47M. — [games-stats Underwater](https://games-stats.com/steam/?tag=underwater)
- **Medieval × city builder:** Manor Lords, solo developer, 3M+ copies (all stores) by Feb 2025 and a record 173,178 CCU for a city builder. No medieval × city-builder median was found. — [Hooded Horse press release](https://gamespress.com/Manor-Lords-celebrates-three-million-sales)
- **Lovecraftian/cosmic horror × varied genres**, all with ≈$11M–$67M estimated net:
  - Roguelike RPG/strategy: Darkest Dungeon I/II.
  - Horror adventure: SOMA, SIGNALIS.
  - Management: Lobotomy Corporation.
  - Fishing adventure: DREDGE.
  - Reverse-horror action: CARRION.
  - Shooter: Remnant.
  - Source: [games-stats Lovecraftian](https://games-stats.com/steam/?tag=lovecraftian)
- **Military/WWII × grand strategy and × multiplayer shooter:** Hearts of Iron IV ≈$260M (Military 2026); Hell Let Loose ≈$110M (Military 2026). Smaller: Verdun (WWI) ≈$11M. — [games-stats Military](https://games-stats.com/steam/?tag=military); [games-stats WWI](https://games-stats.com/steam/?tag=world-war-i)
- **Heist × co-op shooter:** PAYDAY 3 ≈$28M; PAYDAY: The Heist ≈$4.2M; Perfect Heist 2 (online social) ≈$680K. — [games-stats Stealth](https://games-stats.com/steam/?tag=stealth); [PAYDAY: The Heist](https://games-stats.com/steam/game/paydaytm-the-heist/); [Perfect Heist 2](https://games-stats.com/steam/game/perfect-heist-2/)
- **Western × co-op extraction (with fantasy elements):** Far Far West, 1M units in under two weeks (Apr–May 2026). **Western × life sim:** Wild West Dynasty ≈$860k. — [EG7 via MFN](https://mfn.se/a/enad-global-7/far-far-west-has-surpassed-1-million-units-sold-on-steam.iframe); [games-stats Wild West Dynasty](https://games-stats.com/steam/game/wild-west-dynasty/)
- **Zombies × survivors-like roguelike:** Yet Another Zombie Survivors, 5,598 reviews, 94% positive, $14.99, listed by SPA among the action-roguelike niche's breakouts. — [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
- **Space × sim/sandbox:**
  - No Man's Sky ≈$360M (Space Sim list), Starfield ≈$110M, Kerbal Space Program ≈$91M. — [games-stats Space Sim](https://games-stats.com/steam/?page=1&tag=space-sim)
  - Space Engineers $56.8M (VG Insights). — [VG Insights](https://vginsights.com/game/space-engineers)
  - No space × automation or space × colony-sim intersection data were found. SPA's factory-automation page shows 8.4% of 2026 automation releases reaching 1,000 reviews (not space-specific). — [SPA factory automation](https://www.steampageanalyzer.com/optimize/factory-automation)
- **Mechs × F2P PvP:** Mecha BREAK, 317.5k beta peak, then 60% positive across 28,848 reviews and 732 players by July 2026. — [WN Hub](https://wnhub.io/news/stores-and-publishing/item-47172); [Raijin](https://raijin.gg/app/2452280/Mecha_BREAK)

### Inferences
- **Ranking by strength of evidence:**
  1. **Cozy × farming sim.** Hit rate, median and genre median all agree. The caveats are small samples (36 and 86 games), tag inflation, and a 2026 cozy supply surge that postdates the hit-rate cohort.
  2. **Open-world survival × distinctive setting** (pirates, underwater, dinosaurs, zombies/post-apocalyptic). It has the highest genre median, the highest captured 1,000-review share, and repeated top earners and 2026 breakouts. There is no theme × OWSC median, so the theme's own contribution is unmeasured.
  3. **Co-op structures**, from roguelike online co-op at 20%, the Alinea 2025 co-op revenue lead and the 2026 Next Fest clustering.
  4. **Souls-like × metroidvania** (13.3%).

  **Derived:** cozy × farming 27.8% / 4.2% ≈ **6.6×** the Steam baseline; cozy overall 11% / 4.2% ≈ **2.6×**.
- **"Survival" depends on the base genre:**
  - As the *core loop* (open-world survival craft), it carries the strongest medians: $102k median, about 20.8% of releases reaching 1,000 reviews.
  - As a *secondary tag* on action roguelikes, it underperforms badly (0.8%).

  Theme pairings should be judged on the base genre's own record.
- **Price is a confounder in the cozy result.** The cozy hit rate swings from 2.7% under $5 to 45.2% at $20+. Much of the "cozy" advantage may reflect larger-scope, higher-priced productions rather than the theme itself. The same may hold for other themes, but no other theme's price split was found.
- **Medieval × city builder** has a famous success (Manor Lords) but no rate-based evidence. Its record could be one outlier, so treat it as unproven rather than strong.

### Gaps
- **No tag-intersection medians or hit rates** for: zombies × survival crafting, post-apocalyptic × survival, fantasy × roguelite/deckbuilder, space × automation/colony sim, medieval × city builder/colony sim, cute × management, horror × co-op, mechs × any genre, pirates × survival, western × anything. Only Cozy + Farming Sim was captured (SteamTrender). SteamTrender, Immutable's Steam Tag Analyser and Gamalytic would answer this directly, but were unreachable or not indexed with these values.
- **Hit rates for the SPA niches beyond cozy, visual novel, metroidvania and action roguelike** were not captured. SPA's "Steam Niche Index" (22 further niches, aggregate data published as JSON per the cozy report) was unreachable.
- **HTMAG's 2025 genre breakdown of 1,000-review games beyond horror** (pass 1: narrative 51, simulation 43, horror 39) was not captured in more detail, so survival, cozy, roguelike and other counts for 2025 are missing.
