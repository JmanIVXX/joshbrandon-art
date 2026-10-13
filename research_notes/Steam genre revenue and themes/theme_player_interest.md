# Steam themes and settings (not gameplay genres): player interest, revenue, saturation and trends

> **Research conditions (read first).** Researched 13 Oct 2026. In this sandbox, WebFetch failed DNS resolution for every host, and the egress proxy returned 403 (organization policy) for gamalytic.com, api.gamalytic.com, games-stats.com, steamspy.com, howtomarketagame.com, newsletter.gamediscover.co and gamedevreports.substack.com. The shared WebSearch budget for the turn ran out after about 25 queries. **Every figure below therefore comes from search-engine extracts of the cited pages, not from reading the full pages.** None could be checked against the live tables. Many requested theme tags remain uncovered (listed in each Gaps section). Revenue figures on Steam are always third-party estimates.

## 1. Per-theme tag statistics: number of games, per-game median/mean revenue, total revenue, and share reaching $100k / $300k / $1M

### Takeaway
I could get all-releases revenue medians for only two theme-type tags: Horror (15,142 games, $2,590 median gross) and Survival Horror (5,430 games, $2,050 median gross). Both are well below Immutable's $4,837 median across 107 sub-genres, so the typical horror release underperforms the typical Steam release. For Dark Fantasy, Zombies, Cyberpunk and Medieval I found tag counts and top earners but no medians. Their top earners are AAA/AA titles at $100M to $1B each, so tag totals and means say almost nothing about a non-AAA game's odds. I found no source giving the share of games above $100k, $300k or $1M for any theme tag.

### Cited Findings

#### Source methodologies and caveats
- **games-stats.com** is a third-party "Steam Marketing Tool". Its per-tag pages, titled "Top <Tag> Games by sales and revenue on Steam as of 2026", rank games by *estimated net revenue* and show review counts. The extracts did not show the methodology or crawl date. Rankings are top-seller views, so they carry survivorship bias, and tags overlap heavily (one game can appear in several lists). — [games-stats Zombies](https://games-stats.com/steam/?tag=zombies); [games-stats Dark Fantasy](https://games-stats.com/steam/?tag=dark-fantasy)
- **Immutable, "What does the median game in your genre earn on Steam?"** (publication date not captured) takes revenue as estimated copies × *current list price*. Figures are **gross**, before Steam's cut, refunds and discounts, and come from a third-party dataset covering 107 sub-genres. The page recommends medians because revenue inside a genre follows a power law. One extract says each sub-genre median rests on a sample of "roughly twenty titles", which conflicts with the per-tag game counts in the table, and another extract mentions an unexplained "$17,300" tag median. Treat Immutable's precision as uncertain. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **We Love It "Steam Revenue Report"** (page citation date 10 Oct 2026, by We Love It / Totally Human Media) estimates lifetime earnings as reviews × price × a multiplier: 20x conservative, 35x standard, 50x optimistic. It covers 102,481 *priced games with at least one review*. It excludes non-game software, adult-only, unreleased and over-$120 listings. A game counts toward a genre/tag only if that tag is among its **six most popular tags**. "Hit rate" means the share of games clearing **$100,000** in estimated lifetime earnings. A genre-by-year table divides each genre's median by the all-games median for that release year, leaving cells blank when fewer than 20 games qualify. — [We Love It](https://weloveit.io/developers/steam-revenue-report/)
- **Gamalytic** uses a proprietary algorithm combining concurrent-player data, an "advanced version of the review multiplier method" and publicly disclosed sales. One extract describes its figures as gross, before Valve's cut. GameDiscoverCo's older description of a tag-median list calls them "estimated net revenue", so **gross/net labels differ across sources**. — [GameDevReports on Gamalytic](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned); [GameDiscoverCo, "Analyzing the top Steam tags"](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)
- **How To Market A Game (Chris Zukowski)** year-end reviews count *indie* games that reached **1,000 Steam reviews** in a calendar year, with one author-assigned genre per game. "Horror" is defined as the Steam tags Horror + Dark. The author notes that Narrative and Horror overlap ("close call… to list them as horror or Narrative"). — [HTMAG, "What the hell happened in 2025?" (27 Jan 2026)](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- **games.gg** genre/subgenre analysis (about June 2026, derived from a page age of roughly 124 days) covers only games above $1M lifetime revenue, with one genre and one subgenre per game. The authors flag the survivorship bias themselves. — [games.gg](https://games.gg/news/steam-game-revenue-by-genre-and-subgenre/)
- **opgamemarketing, "So You're Making a Pixel Art Game?"** (about Sept 2025, derived from a page age of roughly 400 days) uses a pixel-art sample whose baseline median is about $349k. That baseline shows the sample is **success-filtered**, not all releases. The extract did not confirm the data source. — [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game)
- **SteamDB** has a tag list with product counts (counting basis unclear; see the conflict in the table) and per-tag yearly release summaries. — [SteamDB tags](https://steamdb.info/tags/); [SteamDB Pixel Graphics releases](https://steamdb.info/stats/releases/?tagid=3964)

#### Theme-tag table (everything obtained)
| Theme tag | Games tagged | Per-game median / mean | Notable top earners (est.) | Source |
|---|---|---|---|---|
| Horror | **15,142** | **Median gross $2,590**; median copies 867 | n/c | [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks) |
| Survival Horror | **5,430** | **Median gross $2,050**; median copies 683 | n/c | [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks) |
| Zombies | **~5,577** (games-stats, "as of 2026"). SteamDB tag list shows **1,278** (snapshot about 140 days old ≈ late May 2026), which conflicts | Median not found. A small zombie title is shown at ~$9,600 | DayZ ~$440M (~385k reviews, Dec 2018); 7 Days to Die ~$240M; The Forest ~$220M; Dying Light 2 ~$190M; Dying Light ~$180M; Resident Evil Requiem (Feb 2026) ~$140M (104,573 reviews; 253,300 followers) | [games-stats Zombies](https://games-stats.com/steam/?tag=zombies); [SteamDB tags](https://steamdb.info/tags/) |
| Dark Fantasy | **8,577 = 5.1% of all Steam games** (2026). An older 2023 snapshot of the same page listed **3,927** | Median not found | Black Myth: Wukong ~$1B; Elden Ring ~$940M; Baldur's Gate 3 ~$850M; Witcher 3 ~$620M; Dark Souls III ~$320M; Sekiro ~$290M; Clair Obscur: Expedition 33 ~$200M; Hollow Knight ~$140M; Total War: Warhammer III ~$120M | [games-stats Dark Fantasy 2026](https://games-stats.com/steam/?tag=dark-fantasy); [2023 snapshot](https://games-stats.com/steam/?page=12&tag=dark-fantasy) |
| Fantasy | **5,059** (SteamDB tag list; counting basis unclear) | All-releases median not found. In the success-filtered pixel-art sample: 87 titles, median ~$381,866, "success index" 2.13 | n/c | [SteamDB tags](https://steamdb.info/tags/); [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game) |
| Magic (fantasy-adjacent) | n/c | Pixel-art sample: 27 titles, median ~$520,187 | n/c | [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game) |
| Medieval | **945** (SteamDB tag list; basis unclear) | Median not found. In the pixel-art sample, "on the lower end" | Witcher 3 ~$620M (812,145 reviews); Mount & Blade II: Bannerlord ~$210M; Kingdom Come: Deliverance II (2025) ~$150M; Crimson Desert (Mar 2026) ~$120M; AoE II: DE ~$100M; Dragon's Dogma 2 (2024) ~$99M; Crusader Kings III ~$89M; Shadow of War ~$82M; KCD (2018) ~$79M; Dark Souls II SotFS ~$62M. Smaller: Medieval Dynasty ~$27M; Going Medieval ~$9.6M; Medieval Engineers ~$1.1M | [games-stats Medieval](https://games-stats.com/steam/?tag=medieval); [SteamDB tags](https://steamdb.info/tags/); [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game) |
| Sci-fi | **4,000** (SteamDB tag list; basis unclear) | Median not found. In the pixel-art sample, "on the lower end" | n/c | [SteamDB tags](https://steamdb.info/tags/); [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game) |
| Space | **1,958** (SteamDB tag list; basis unclear) | Not found | n/c | [SteamDB tags](https://steamdb.info/tags/) |
| Cyberpunk | **~5,051** (games-stats, 2026) | Not found | Top figure "near $1B" (Cyberpunk 2077; the extract is unclear whether it sits in the cyberpunk list or the FPS list); Ghostrunner ~$27M. The list only partially loaded | [games-stats Cyberpunk](https://games-stats.com/steam/?tag=cyberpunk) |
| Post-apocalyptic | n/c | n/c | Rust ~$870M (in the Survival tag list; described as post-apocalyptic survival) | [games-stats Survival](https://games-stats.com/steam/?tag=survival) |
| Anime | **4,832** (SteamDB tag list; basis unclear) | games-stats shows an average and median but the extract did not capture them | n/c | [SteamDB tags](https://steamdb.info/tags/); [games-stats Anime](https://games-stats.com/steam/?tag=anime) |
| Cute (cozy-adjacent) | n/c | Pixel-art sample: 101 titles, median ~$375,839 | n/c | [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game) |
| Pixel Graphics (art style, context for "pixel-art horror") | SteamDB tag list **4,516** vs SteamDB release stats: **4,106 released in 2025**, 18,579 cumulative through 2025, 19,125 including 546 in 2026 at crawl time | Pixel-art success sample baseline ~$349k | n/c | [SteamDB tags](https://steamdb.info/tags/); [SteamDB Pixel Graphics releases](https://steamdb.info/stats/releases/?tagid=3964) |

(n/c = not captured.)

**Conflict to note:** SteamDB's tag-list counts cannot be counting all games carrying a tag. Pixel Graphics shows 4,516 there against 19,125 cumulative releases on SteamDB's own release page, and Zombies shows 1,278 against ~5,577 on games-stats. The tag list probably counts something narrower, or the search extract misread a column. Use the SteamDB tag-list counts at most for rough ordering, not as tag sizes. — [SteamDB tags](https://steamdb.info/tags/); [SteamDB Pixel Graphics releases](https://steamdb.info/stats/releases/?tagid=3964); [games-stats Zombies](https://games-stats.com/steam/?tag=zombies)

#### Market-wide baselines for comparing theme medians
- We Love It: median lifetime earnings **$3,462** for paid games with at least one review. Estimated total $129.8B across 102,481 games (all-time, report dated Oct 2026). — [We Love It](https://weloveit.io/developers/steam-revenue-report/)
- Immutable: the median game across 107 sub-genres earns about **$4,837 gross**, and in most sub-genres the median is under $10,000 gross. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- Gamalytic, by release-year cohort: 2024 releases had the lowest median revenue, **$222**, and 2025 releases the second-lowest, **$249**. Young cohorts have had less time to accumulate. — [game-developers.org, "2025 Steam Game Revenue Distribution"](https://game-developers.org/2025-steam-game-revenue-distribution)
- Gamalytic older data (2023 or earlier): 67% of Steam games earned under $5k. Excluding free titles, the median was **$700**; for games priced above $5 it was about **$4,000**. — [GameDevReports](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned)
- Steam Page Analyzer: the median indie game makes **$5k–$15k** lifetime gross (no sample size published). — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)
- Concentration: the top 1% of games earn **84.5%** of estimated revenue (GamesRadar coverage of a Steam-wide revenue analysis; date not captured). — [GamesRadar](https://www.gamesradar.com/games/behold-the-whole-history-of-steams-economy-in-one-picture-the-top-1-percent-of-games-earn-84-5-percent-of-estimated-revenue-and-most-games-barely-make-anything/)
- GameDiscoverCo (older, pre-2024, exact date not captured): the median of all Steam tag medians was about **$2,600**. Example tag medians: Colony Sim $44,000 (292 games), Roguelike Deckbuilder $38,000, 4X $35,000, defined as the 50th-percentile estimated net revenue of all games with the tag. One extract attributes the list to Gamalytic and another to games-stats.com, so the attribution is uncertain. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)

#### Threshold shares (theme-specific data is very thin)
- We Love It's hit rate (≥$100k estimated lifetime earnings) is **27.4% for Sandbox**, the highest, described as "Steam's most consistently successful genre". I did not capture hit rates for any theme tag. — [We Love It](https://weloveit.io/developers/steam-revenue-report/); [Automaton West](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
- How To Market A Game: in 2025, **39 of 1,208 horror releases (3.2%) reached 1,000 reviews**, up from **1.81% in 2024**, when horror produced 47 such games. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- No source gave the share of games above $300k or $1M per theme tag. The games.gg >$1M dataset assigns genres, not themes. — [games.gg](https://games.gg/news/steam-game-revenue-by-genre-and-subgenre/)

### Inferences
- **Derived, horror versus the typical sub-genre:** $2,590 / $4,837 = **0.54**, so the median Horror game earns about 54% of the median sub-genre game. For Survival Horror, $2,050 / $4,837 = **0.42**. Both use the same Immutable dataset, so the comparison is internally consistent.
- **Derived, implied price point:** $2,590 / 867 copies ≈ **$2.99**, and Survival Horror $2,050 / 683 ≈ **$3.00**. A ratio of medians is not the true median price, but it suggests the middle of the horror distribution is dominated by very cheap, low-scope titles.
- **Derived, catalog shares on games-stats:** Dark Fantasy's 8,577 = 5.1% implies a total catalog of about 8,577 / 0.051 ≈ **168,000** games (range 166.5k–169.8k given rounding of 5.1%). That makes Zombies about 5,577 / 168,000 ≈ **3.3%** and Cyberpunk about 5,051 / 168,000 ≈ **3.0%** of all games.
- **Derived, bridge from review-count hits to the $300k "moderate success" bar:** $300k gross needs 30,000 units at a $10 average realized price. Under We Love It's multipliers (20–50 units per review) that is about 600–1,500 reviews (30,000/50 to 30,000/20). At the 35x standard multiplier, 1,000 reviews ≈ 35,000 units, which reaches $300k at an average realized price of about $8.57 ($300,000 / 35,000). HTMAG's 1,000-review bar therefore roughly matches $300k for a game around $10, but not for a $3–5 horror title, where 1,000 reviews ≈ $100k–$175k at 35x (35,000 × $3 to $5).
- **Derived, distance from median to $300k for horror:** 30,000 units / 867 median copies ≈ **35×** the median horror game's sales.
- Theme medians from different datasets are **not comparable**. Medians range from $222 (Gamalytic 2024 cohort) to $4,837 (Immutable sub-genre median) because inclusion rules (free games, at least one review, cohort age, top-6-tag rules) differ. Theme-to-theme comparisons are only valid within one dataset.

### Gaps
- No medians, means, totals or threshold shares were captured for Zombies, Fantasy, Dark Fantasy, Medieval, Sci-fi, Space, Post-apocalyptic, Cyberpunk, Psychological Horror, Lovecraftian, Historical, WWII, Rome, Vikings, Mythology, Anime, Military, War, Western, Pirates, Cozy, Cute, Nature, Animals, Superhero, Steampunk, Underwater, Dinosaurs, Mechs, Aliens, Crime or Heist. Gamalytic, games-stats and SteamSpy were all unreachable (policy 403), and the search budget ran out.
- Suggested follow-up sources, all showing per-tag figures: the We Love It report (genre economics with median, top decile and hit rate, plus the genre-by-year table); the Immutable 107-sub-genre table; games-stats tag pages, whose URL pattern is `games-stats.com/steam/?tag=<slug>` (observed slugs include zombies, dark-fantasy, medieval, cyberpunk, horror, survival-horror, anime, mythology, dystopian); the Gamalytic tag list or API; and SteamDB `stats/releases/?tagid=<id>` for counts by year.
- The SteamDB tag-list counting basis is unresolved (see conflict above).
- Immutable's sampling (about 20 titles per median?) is unverified.

## 2. Demand signals beyond revenue: surveys, streaming, search interest, wishlists and followers

### Takeaway
The only setting-preference survey evidence found is older (2017–2023) and comes mainly from Quantic Foundry. High Fantasy and Sci-Fi are the most broadly appealing settings, with clear gender and age splits: women lean to High Fantasy and Medieval, men to Sci-Fi and Post-Apocalyptic, and older gamers to Sci-Fi. Zombie Apocalypse, Contemporary Superheroes and WWI/WWII were the *least* appealing settings in 2017. I collected no Twitch/YouTube, Google Trends or wishlist-by-theme data, because the search budget ran out.

### Cited Findings
- **Quantic Foundry, "Female Gamers Want To Kill You, Just Not With Guns" (9 Feb 2017; older data):**
  - High Fantasy and Sci-Fi are the most appealing settings overall. Men rank Sci-Fi first and women rank High Fantasy first.
  - Third place is Post-Apocalyptic Earth for men and Medieval Europe for women.
  - The least appealing settings are **Contemporary Superheroes, Zombie Apocalypse and WWI/WWII**, and WWI/WWII shows one of the largest gender gaps.
  - On weapons, the biggest gender gap is for conventional guns/rifles, then futuristic laser/plasma weapons. Magical spells are the exception, where men did not rate higher.
  - Sources: [Quantic Foundry 2017](https://quanticfoundry.com/2017/02/09/theme-and-weapon/); [Kill Screen summary](https://www.killscreen.com/study-finds-female-players-may-not-guns-still-killing/)
- **Quantic Foundry, "Beam Me Up: The Demographic and Motivational Appeal of Sci-Fi" (7 Nov 2023; older data; optional survey Feb 2022–Oct 2023, N=13,296, run alongside the Gamer Motivation Profile):**
  - Gamers aged 35+ are about **twice as likely** as 13–17-year-olds to rate Sci-Fi "extremely appealing" as a setting.
  - The sample skews young: about 7% were 35+ and 45% were 18–24, per the search extract's reading of the demographics.
  - The post separates "fantasy sci-fi" (Star Wars-like) from hard sci-fi, but the extracts did not capture those figures.
  - Sources: [Quantic Foundry 2023](https://quanticfoundry.com/2023/11/07/sci-fi/); [MassivelyOP](https://massivelyop.com/2023/11/28/quantic-foundrys-survey-examines-the-motivations-of-gamers-drawn-to-sci-fi-settings/)
- **A 2019 survey of 1,266 players, reported secondhand (older data; attribution to Quantic Foundry unverified):**
  - Epic fantasy and sci-fi were the most attractive settings. Women gravitated to fantasy and men to sci-fi, and men often chose post-apocalyptic.
  - Women were much more willing to play shooters or fighting games in a fantasy setting than in a realistic one.
  - Women preferred bows, swords and spells; men preferred firearms. In a faction choice, half the men picked a technical faction and half the women picked magic.
  - Source: [WN Hub](https://wnhub.io/news/analytics/item-16335)
- **Statista (2023 survey; older data; underlying survey publisher not captured):** **50%** of regular indie-game buyers, **45%** of light indie buyers and **35%** of traditional game buyers named **fantasy** among their top three game themes. — [Statista](https://statista.com/statistics/1552688/indie-and-traditional-game-buyer-video-game-setting-preference)
- **GameBusiness.jp (26 Jan 2017; older; reporting an overseas survey):** farming sim was the #1 genre preferred by female gamers. This is cozy-adjacent and a genre rather than a setting. — [GameBusiness.jp](https://www.gamebusiness.jp/article/2017/01/26/12890.html)
- **Follower data point:** Resident Evil Requiem (zombie-tagged, released Feb 2026) shows 253,300 Steam followers and 104,573 reviews on games-stats. — [games-stats Zombies](https://games-stats.com/steam/?tag=zombies)
- **Hit-list evidence:** in HTMAG's counts of indie games reaching 1,000 reviews, horror was the top genre in 2022, 2023 and 2024 (47 in 2024) and third in 2025 (39), behind Narrative (51) and Simulation (43). Horror is a theme/genre hybrid in HTMAG's taxonomy. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)

### Inferences
- The surveys agree that **fantasy and sci-fi** are the broadest-appeal settings, with demographic tilts: fantasy and medieval toward women, sci-fi and post-apocalyptic toward men, sci-fi toward ages 35+. All of this is pre-2024 and drawn from self-selected samples (Quantic Foundry's Gamer Motivation Profile takers skew young and engaged), so treat it as directional.
- **Zombies sit in tension across sources.** The 2017 survey rates Zombie Apocalypse among the least appealing settings, yet zombie *survival* games (DayZ, 7 Days to Die, The Forest) are among Steam's biggest earners (Section 4). The data fit a reading in which zombie demand runs through specific genre implementations (survival, sandbox, co-op) rather than through the setting itself. This is an inference, not a measured result.
- Fantasy's survey lead matches the pixel-art success sample, where Fantasy, Magic and Cute outperformed the sample baseline (Section 1). It also coincides with very high supply (Dark Fantasy alone has 8,577 tagged games), so demand and competition are both high.

### Gaps
- **Twitch/YouTube viewership by theme** (TwitchTracker, SullyGnome, StreamsCharts): not collected. The search budget ran out.
- **Google Trends** for themes such as "zombie game", "cozy game", "medieval game", "cyberpunk game" and "horror game", 2020–2026: not collected.
- **Steam wishlist and follower data by tag**, and most-wishlisted lists by tag: not collected beyond the single Resident Evil Requiem follower count.
- **2024–2026 survey data on setting preferences:** none found. The Quantic Foundry post-2023 output on settings, Newzoo and other surveys were not searched.
- Exact percentages from the Quantic Foundry 2017 post were not captured (only rank orders), and the 2019 survey's publisher could not be confirmed.

## 3. Oversaturated versus under-served themes

### Takeaway
The best-evidenced case of saturation "at the median" is **horror, including survival horror**: the largest theme-type tag found (15,142 games) has below-typical medians. Horror is also one of the most reliable producers of indie hits, so it is polarized rather than dead. Zombies (~5,577 games), Cyberpunk (~5,051) and Dark Fantasy (8,577, more than doubled since 2023) show high supply with revenue concentrated in AAA/AA titles, but no all-release medians were found to confirm saturation. I could not establish under-served themes from the data gathered; only weak hypotheses are possible.

### Cited Findings
- Horror: 15,142 games, median gross $2,590. Survival Horror: 5,430 games, $2,050. The 107-sub-genre median is $4,837. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- Horror's hit share (indie releases reaching 1,000 reviews) rose to 3.2% of 1,208 releases in 2025 from 1.81% in 2024. Horror was the #1 hit genre in 2022–2024 and #3 in 2025. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- The Dark Fantasy tag grew from 3,927 games (2023 snapshot) to 8,577 (2026), which is 5.1% of all Steam games. — [games-stats Dark Fantasy](https://games-stats.com/steam/?tag=dark-fantasy); [2023 snapshot](https://games-stats.com/steam/?page=12&tag=dark-fantasy)
- Zombies: ~5,577 tagged games. Top earners are large established titles (DayZ ~$440M, 7 Days to Die ~$240M), while small zombie titles show very low estimates, such as one at ~$9,600. — [games-stats Zombies](https://games-stats.com/steam/?tag=zombies)
- Cyberpunk: ~5,051 tagged games. Apart from the near-$1B top figure, the only visible entry was Ghostrunner at ~$27M, though the list only partially loaded. — [games-stats Cyberpunk](https://games-stats.com/steam/?tag=cyberpunk)
- Pixel art: 4,106 Pixel Graphics releases in 2025. — [SteamDB](https://steamdb.info/stats/releases/?tagid=3964). Within a success-filtered pixel-art sample, Fantasy (87 titles, ~$381,866 median), Magic (27, ~$520,187) and Cute (101, ~$375,839) were among the best-performing tags, while Sci-fi, Medieval and Horror were "on the lower end" (numbers not captured). — [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game)
- Counterpoint: Game Oracle argues that blaming poor performance on Steam oversaturation "may be overstated". — [Game Oracle](https://www.game-oracle.com/blog/is-steam-really-saturated)
- Survey low-appeal settings (2017; older): Contemporary Superheroes, Zombie Apocalypse, WWI/WWII. — [Quantic Foundry 2017](https://quanticfoundry.com/2017/02/09/theme-and-weapon/)

### Inferences
- **Horror:** the sources disagree in emphasis, and both can hold. Immutable's medians say the *typical* horror game does worse than the typical Steam game. HTMAG's counts say horror produces an unusually large *number of hits*, with a 2025 hit share (3.2%) above the roughly 1–2% range implied for 2024. The horror market looks crowded and polarized: many cheap, low-scope entries (implied ~$3 price point; see Section 1) drag the median down, while a meaningful top slice breaks out.
- **"Pixel-art horror" oversaturation:** the data partly support this. Pixel art is high-volume (4,106 releases in 2025), and among *successful* pixel-art games, horror sat at the lower end of median revenue. No direct pixel-art × horror count or median was found.
- **Zombies, cyberpunk and dark fantasy:** each takes roughly 3–5% of the catalog (derived in Section 1), and each tag's revenue is concentrated in a handful of AAA/AA games. With no all-release medians, "oversaturated" is a reasonable hypothesis but **unproven** here. The 2017 survey's low rating for Zombie Apocalypse adds a weak demand-side signal against generic zombie settings.
- **Under-served (hypotheses only):** (a) Magic and Cute outperform within the pixel-art success sample. (b) Medieval's low SteamDB tag-list count (945, unreliable basis) sits beside strong 2024–2026 medieval top earners: Dragon's Dogma 2 (2024), Kingdom Come: Deliverance II (2025) and Crimson Desert (2026). Neither is adequate evidence of under-supply. No data were gathered for western, pirates, underwater, dinosaurs, mechs, steampunk, aliens or crime/heist.

### Gaps
- A demand-to-supply ratio by theme (for example, median or hit rate versus release count) could not be computed for any theme except Horror.
- A claim surfaced in a search summary (blog not identified) that clustering of zombie-survival, battle-royale and roguelite releases cut per-title revenue. It could not be attributed or verified, so it is excluded from the findings.
- No data on under-served themes such as western, pirates, underwater, dinosaurs, mechs, steampunk, aliens, crime/heist, mythology, Vikings or Rome.

## 4. Theme × genre combinations with the strongest track records

### Takeaway
No source gave theme × genre medians directly. The top-earner lists show themes paying off most when paired with systemic, high-median genres:
- **zombies or post-apocalyptic × survival / open-world crafting:** DayZ, 7 Days to Die, The Forest, Rust
- **medieval × RPG, strategy and colony/life sim:** Witcher 3, KCD/KCD2, Bannerlord, Crusader Kings III, Medieval Dynasty, Going Medieval
- **dark fantasy × action-RPG/soulslike, CRPG and metroidvania:** Elden Ring, Black Myth, Baldur's Gate 3, Hollow Knight

Separately, genre-level medians point to colony sim, 4X, survival crafting, city builder/management and sandbox as the strongest genre partners.

### Cited Findings
- **Zombies:** top earners are survival/open-world (DayZ ~$440M; 7 Days to Die ~$240M; The Forest ~$220M), first-person action (Dying Light 2 ~$190M; Dying Light ~$180M) and AAA survival-horror (Resident Evil Requiem, Feb 2026, ~$140M). — [games-stats Zombies](https://games-stats.com/steam/?tag=zombies)
- **Post-apocalyptic × survival:** Rust ~$870M (Survival tag list). — [games-stats Survival](https://games-stats.com/steam/?tag=survival)
- **Medieval:**
  - RPG: Witcher 3 ~$620M; KCD2 ~$150M; Dragon's Dogma 2 ~$99M; KCD ~$79M.
  - Strategy and grand strategy: Bannerlord ~$210M; AoE II: DE ~$100M; Crusader Kings III ~$89M.
  - Life/colony sim: Medieval Dynasty ~$27M; Going Medieval ~$9.6M.
  - Engineering sandbox: Medieval Engineers ~$1.1M.
  - Source: [games-stats Medieval](https://games-stats.com/steam/?tag=medieval)
- **Dark fantasy:** soulslike or action-RPG (Elden Ring ~$940M; Black Myth: Wukong ~$1B; Dark Souls III ~$320M; Sekiro ~$290M), CRPG (Baldur's Gate 3 ~$850M), turn-based RPG (Clair Obscur ~$200M), metroidvania (Hollow Knight ~$140M) and strategy (Total War: Warhammer III ~$120M). — [games-stats Dark Fantasy](https://games-stats.com/steam/?tag=dark-fantasy)
- **Genre partners with the highest medians:**
  - Older Gamalytic data (about 2023) ranked survival games with open-world crafting, colony simulators, 4X, city builders and management highest. — [GameDevReports](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned)
  - Older GameDiscoverCo tag medians: Colony Sim $44,000 (292 games), Roguelike Deckbuilder $38,000, 4X $35,000. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)
  - We Love It (Oct 2026): sandbox has the highest median and a 27.4% hit rate. — [We Love It](https://weloveit.io/developers/steam-revenue-report/); [Automaton West](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
  - Coverage of the same report says platformers generate low revenue. — [ResetEra thread on Automaton report](https://www.resetera.com/threads/automaton-media-report-on-best-selling-genres-on-steam-shows-sandbox-games-are-heavy-earners-platformer-games-generate-low-revenue.1612870/)
- **Horror × narrative:** HTMAG notes many 2025 narrative hits "have dark, horror-like settings", and that classifying them as Narrative or Horror was a close call. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- **Successful-games (>$1M) genre context, survivorship-biased:**
  - Revenue share: Action 58.37%, RPG 17.11%, Strategy 13.97%, Simulation 9.76% of lifetime revenue.
  - Mean revenue per game: action roguelike $8.4M (104 games), metroidvania $7.9M (53 games).
  - Source: [games.gg](https://games.gg/news/steam-game-revenue-by-genre-and-subgenre/)
- **Co-op:** games.gg headlines that "Co-op Games Earn $4.1 Billion on Steam" (headline only; period and method not captured). — [games.gg](https://games.gg/news/co-op-games-earn-4-billion-on-steam/)
- **Pixel art × theme:** Fantasy, Magic and Cute beat the pixel-art sample baseline, while Sci-fi, Medieval and Horror were lower (success-filtered sample). — [opgamemarketing](https://opgamemarketing.substack.com/p/so-youre-making-a-pixel-art-game)

### Inferences
- A theme's biggest earners appear in the same genre families that carry the highest *genre* medians: survival crafting, colony/management, 4X/strategy and sandbox. This supports the brief's hypotheses that zombies/post-apocalyptic × survival and medieval × colony/city-building/strategy are strong pairings. The support comes from top-earner lists (survivorship-biased) plus genre medians, **not** from theme × genre medians.
- Dark fantasy's top end is dominated by large-budget action-RPGs. Its non-AAA evidence in these sources is Hollow Knight (metroidvania, ~$140M), but metroidvanias average $7.9M even among >$1M games, so the dark fantasy × metroidvania pairing is hit-driven.
- Horror's hit strength appears tied to narrative and short-form designs (HTMAG's horror/narrative overlap). No source captured horror × co-op specifically.

### Gaps
- No direct data for these hypothesized pairings: space × 4X/sim/automation, horror × co-op, fantasy × roguelite/deckbuilder, medieval × city builder (as a combined tag median), mechs × any genre, cozy × farming/life sim. A tag-intersection query (Gamalytic, Immutable's Steam Tag Analyser, or games-stats with two tags) is needed. — [Immutable Steam Tag Analyser](https://www.immutable.com/resources/free-steam-tools/steam-tag-analyzer) (tool exists; not run)
- Candidates to verify in follow-up (named here as lookups, not findings): the 2024–2026 medieval city builders, the co-op horror titles of 2023–2025, and the 2025–2026 underwater and mech releases.

## 5. Trend direction 2020–2026 by theme

### Takeaway
Numeric trend evidence was obtained for only a few themes:
- **Dark Fantasy supply** more than doubled between a 2023 snapshot and 2026 (+118%, derived).
- **Horror** stayed a top-three indie hit generator every year from 2022 to 2025, and its 2025 hit share rose (1.81% to 3.2%).
- **Medieval and dark fantasy** kept producing large new top earners in 2024–2026 YTD.

Most other themes could not be assigned a rising, stable or falling direction with data.

### Cited Findings
- **Dark Fantasy:** 3,927 tagged games in the 2023 snapshot, 8,577 in 2026 (5.1% of the catalog). — [games-stats 2023 snapshot](https://games-stats.com/steam/?page=12&tag=dark-fantasy); [games-stats 2026](https://games-stats.com/steam/?tag=dark-fantasy)
- **Horror:**
  - #1 indie hit genre in 2022, 2023 and 2024 (47 games reaching 1,000 reviews in 2024); #3 in 2025 (39).
  - Share of horror releases reaching 1,000 reviews rose from 1.81% (2024) to 3.2% (2025), with 1,208 horror releases in 2025 under HTMAG's classification.
  - Sources: [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- **Pixel Graphics (art-style context):** 4,106 releases in 2025; cumulative 18,579 through 2025; 546 more in 2026 at crawl time (cumulative 19,125). — [SteamDB](https://steamdb.info/stats/releases/?tagid=3964)
- **Market-wide context:** the 2024 release cohort had the lowest median revenue ($222) and the 2025 cohort the second-lowest ($249) in Gamalytic data. — [game-developers.org](https://game-developers.org/2025-steam-game-revenue-distribution)
- **New big earners by theme, 2024–2026:**
  - Medieval: Dragon's Dogma 2 (2024, ~$99M), Kingdom Come: Deliverance II (2025, ~$150M), Crimson Desert (Mar 2026, ~$120M). — [games-stats Medieval](https://games-stats.com/steam/?tag=medieval)
  - Dark fantasy: Clair Obscur: Expedition 33 (~$200M); Black Myth: Wukong (~$1B). — [games-stats Dark Fantasy](https://games-stats.com/steam/?tag=dark-fantasy)
  - Zombies: Resident Evil Requiem (Feb 2026, ~$140M). — [games-stats Zombies](https://games-stats.com/steam/?tag=zombies)
- **Sandbox (genre):** described as having "exploded on Steam in recent years" while keeping the highest median. A genre-by-year relative-median table exists, but its values were not captured. — [We Love It](https://weloveit.io/developers/steam-revenue-report/)

### Inferences
- **Derived, Dark Fantasy supply growth:** (8,577 − 3,927) / 3,927 = **+118%** (2.18×) between the 2023 snapshot and 2026. Part of this may reflect catalog growth overall and retroactive player tagging, and the 2023 catalog total was not captured, so the change in share cannot be computed. Direction: **supply strongly rising**.
- **Horror:** demand is *stable-to-rising* at the hit level (top-three hit genre four years running, rising 2025 hit share), while competition is high. The 2024 vs 2025 hit shares may not be comparable: 47 hits at 1.81% implies about 2,597 horror releases in 2024 (47 / 0.0181, derived), more than twice the 1,208 reported for 2025. That suggests HTMAG's classification or denominator changed between years.
- **Medieval and dark fantasy:** sustained AAA/AA demand through 2026 YTD (multiple $100M+ new entries since 2024). This says little about the non-AAA medieval or dark fantasy median.
- **Zombies:** the largest zombie earners in the extract include DayZ (Dec 2018), and the 2026 entry is a AAA franchise title (Resident Evil Requiem). There is no evidence here on the 2020–2026 direction for non-AAA zombie games.
- Because cohort medians for 2024 and 2025 are the lowest on record across *all* themes (Gamalytic), any theme's recent-cohort median must be compared with its cohort, not with older releases.

### Gaps
- No yearly release counts (2020–2026) were captured for any theme tag except Pixel Graphics. SteamDB's per-tag `stats/releases/?tagid=<id>` pages exist and would answer this directly.
- No yearly median or hit-rate series by theme. The We Love It genre-by-year table, and Gamalytic yearly filters, would answer this for tags in their genre sets.
- No Google Trends or Twitch time series for any theme (search budget exhausted).
- No direction could be assigned with data for: Fantasy (non-dark), Sci-fi, Space, Post-apocalyptic, Cyberpunk, Psychological/Cosmic horror, WWII, Rome, Vikings, Mythology (Norse/Greek/Japanese), Anime, Military/modern war, Western, Pirates, Cozy/nature/animals, Superheroes, Steampunk, Underwater, Dinosaurs, Mechs, Aliens, Crime/heist.
