# Steam per-game revenue outcomes by genre, sub-genre and tag (research notes, compiled 13 Oct 2026)

**Access and coverage:** the primary pages (weloveit.io, immutable.com, newsletter.gamediscover.co, howtomarketagame.com) could not be opened from this environment. Fetches failed with a network-policy 403 or a DNS error. The shared web-search budget also ran out before every table could be pulled. As a result, every figure below comes from a search-engine excerpt of the page it cites, or from press coverage of that page. Where outlets report slightly different numbers for the same study (for example 27.3% vs 27.6%), both values are shown. All revenue figures are third-party estimates; none of them is Valve sales data. Unless stated otherwise, "gross" means before Valve's 30% cut, refunds and taxes, and excludes DLC and in-app purchases. Anything dated before 2024 is labelled as older data.

## Q1. For each genre/sub-genre/tag: median and mean revenue per game, and the share of releases above $100k, ~$300k and $1M

### Takeaway
Only three 2024–2026 sources publish per-genre outcome statistics, and between them they cover about 30 genres:
- **We Love It (2026):** median, top decile and the share of games above $100k.
- **Immutable (Sep 2026):** sub-genre medians.
- **Chris Zukowski:** the share of each year's releases that reach 1,000 or more reviews. He equates that with roughly $150k–$300k gross, so it is the closest proxy for the $300k bar.

Survival-crafting and sandbox games stand out in every source:
- About 21–24% of open-world survival-craft (OWSC) releases reached 1,000+ reviews in 2024–25.
- 27%+ of sandbox games clear $100k.

At the bottom, 2D platformers, puzzle, hidden-object and arcade games have medians near $1k and hit rates of 0.2–5.5%. None of these sources publishes per-genre means or per-genre shares above $1M. For about half of the requested genres I found no per-game statistics at all (see Gaps).

### Cited Findings

#### A. Source register: who, when, what period, what method, what caveats
- **We Love It "Steam Revenue Report" (WLI)**
  - **Authors:** Ichiro Lambe, Matt Martindale and Dr. Tim Ermilov. The report states it is not affiliated with Valve. — [WLI report page](https://weloveit.io/developers/steam-revenue-report/)
  - **Publication date:** c. 19–20 Aug 2026. — [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/); [GameNGuide, 19 Aug 2026](https://www.gamenguide.com/articles/108822/20260819/sandbox-games-become-major-steam-earners-study-98555-titles-rpgs-fps-remain-huge.htm)
  - **Sample:** the report page was later dated 10 Oct 2026 and covered about 102,481 paid games — [WLI](https://weloveit.io/developers/steam-revenue-report/). August coverage said 98,555 games ([GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) or 99,206 games ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)). The dataset appears to have been refreshed after launch.
  - **Revenue method:** the Boxleiter method, i.e. review count × a multiplier × price. The report gives a conservative 20x, a standard 35x and an optimistic 50x estimate. It says the credible multiplier range is about 20x–60x "depending on genre, price, era and audience". — [WLI](https://weloveit.io/developers/steam-revenue-report/); [ixbt.games, 25 Aug 2026](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)
  - **Scope:** paid games only. It excludes free-to-play games, games with no reviews and add-ons, and it does not account for development cost, tax, marketing or platform fees. — [GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/); [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
  - **Genre rule and metrics:** a game counts toward a genre only when that tag is one of its six most popular tags. The report covers 30 major genres and gives three metrics for each: the median, the top-decile value, and a "hit rate" (the share of games with at least $100,000 in estimated lifetime earnings). — [WLI](https://weloveit.io/developers/steam-revenue-report/)
  - **Year-by-year view:** the report also divides each genre's median by the median of all games released that year, so a value above 1.0 means the genre beat the market. — [WLI](https://weloveit.io/developers/steam-revenue-report/) I could not retrieve those values.
  - **Survivorship flag:** dropping zero-review games raises the medians compared with all releases. The sample also spans every release year since the store began, including eras when Steam was far less crowded.
- **Immutable, "What does the median game in your genre earn on Steam?" (IMM)**
  - **Date and scope:** c. Sep 2026; 107 sub-genres; gross revenue before Steam's cut. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
  - **Data source:** "every number… derived from a licensed third-party sales-estimation dataset". Immutable's revenue calculator cites Gamalytic estimates (Aug 2026, 25,771 games). — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks); [Immutable calculator](https://www.immutable.com/resources/free-steam-tools/steam-revenue-calculator)
  - **Method:** according to its method note, each median is read from a sample of about 20 titles taken at the tag's middle rank. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
  - **Caveats:** the method is a small-sample midpoint. The 25,771-game base is smaller than at least one per-tag count reported alongside it (27,804 strategy games), so it is unclear what the base actually is. One search excerpt noted that the specific rows do not show a Gamalytic attribution.
- **Chris Zukowski, How To Market A Game (HTMAG)**
  - **Method:** in his annual "What the hell happened in [year]?" posts, he downloads every release from the previous year each January and filters to games with 1,000+ reviews. He then checks each Steam page by hand and assigns each game one genre. He warns that Steam tagging is inconsistent. — [HTMAG 2025 post, 27 Jan 2026](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [Softonic summary](https://en.softonic.com/articles/in-2025-more-games-were-uploaded-to-steam-than-ever-before-but-less-than-3-have-received-a-thousand-reviews)
  - **What 1,000 reviews means in revenue:** he states it two ways. His H1-2024 analysis says 1,000 reviews "roughly corresponds to about $300k in gross revenue" — [Game World Observer, 18 Jul 2024](https://gameworldobserver.com/2024/07/18/top-game-genres-on-steam-first-half-2024-key-trends). His 2025 post says 1,000 reviews "typically correlates with revenue of $150,000+" — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/).
  - **No survivorship in the denominator:** the base includes every release, not only games that sold.
- **GameDiscoverCo (Simon Carless), mostly using Danny Weinbaum's tag data**
  - **"Analyzing the top Steam tags"** (c. Jan 2023; older data) ranks tags by the share of games above $200k and $500k in estimated lifetime gross. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags); [Game Developer reprint](https://www.gamedeveloper.com/business/analyzing-the-top-steam-tags-2)
  - **"Which genre should your next PC game be in?"** (older, pre-2024) ranks tags by median revenue. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)
  - **"Which genres have 'ruled' Steam? A new view!"** (c. mid-2025) gives every $1M+ game one genre and one sub-genre, then measures revenue share. It is survivorship-biased by design, because only $1M+ games are included. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new); [Game World Observer, 1 Jul 2025](https://gameworldobserver.com/2025/07/01/analytics-three-quarters-of-game-revenue-on-steam-comes-from-action-and-rpgs)
- **Gamalytic**
  - **Sep 2023 market report and infographic** (older data; games released in the previous three years). — [Gamalytic infographic](https://gamalytic.com/blog/steam-revenue-infographic); [Game World Observer, 6 Oct 2023](https://gameworldobserver.com/2023/10/06/steam-stats-41k-games-last-3-years-half-made-500-or-less)
  - **Lifetime revenue distribution** for about 71,000 games; publication date not captured, probably 2023–24. — [GameDev Reports](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned)
  - **Method and accuracy:** gross revenue before Valve's cut, excluding DLC and in-app purchases, from a proprietary model. Gamalytic's self-assessment says 77% of its per-game estimates fall within ±30% and 98% within ±50%. — [GameDev Reports](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned); [Steam Page Analyzer comparison](https://www.steampageanalyzer.com/blog/steam-revenue-calculator-comparison)
- **VG Insights** (now hosted by Sensor Tower): its Global Indie Games Market Report 2024 came out in Oct 2024. I found no VG Insights per-genre medians for 2024–2026. — [VGI report PDF](https://app.sensortower.com/vgi/assets/reports/VGI_Global_Indie_Games_Market_Report_2024.pdf); [Game World Observer, 16 Oct 2024](https://gameworldobserver.com/2024/10/16/indie-games-revenue-steam-vs-aaa-titles-vg-insights)
- **Lower-reliability aggregators:** none of these publishes a sample size or full method.
  - Steam Page Analyzer gives ranges computed only on games with 100+ reviews. — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)
  - profitable.app publishes genre medians (Sep 2026) with no stated method. — [profitable.app](https://profitable.app/steam/genres)
  - games.gg reports sub-genre averages computed only on $1M+ titles. — [games.gg](https://games.gg/news/steam-revenue-distribution-by-genre/)

#### B. Platform-wide baselines (all genres together)
| Metric | Value | Population / period | Source |
|---|---|---|---|
| Median estimated lifetime revenue | $3,462 (report page) / $3,631 (August coverage) | Paid games with ≥1 review, all years up to 2026 | [WLI](https://weloveit.io/developers/steam-revenue-report/); [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/) |
| Share of estimated revenue earned by the top 1% of games | 84.5% | Same | [GamesRadar](https://www.gamesradar.com/games/behold-the-whole-history-of-steams-economy-in-one-picture-the-top-1-percent-of-games-earn-84-5-percent-of-estimated-revenue-and-most-games-barely-make-anything/) |
| Total estimated revenue | ~$129.8B | ~100k paid games | [ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html) |
| Median across 107 sub-genre medians | $4,837 gross; "in most sub-genres the median game… under $10,000 gross" | Sep 2026 | [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks) |
| Lifetime revenue distribution | 67% <$5k; 17.2% $5k–$50k; 6.9% $50k–$200k; 8.9% >$200k | ~71,000 games (older) | [GameDev Reports / Gamalytic](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned) |
| Games released in the previous 3 years | 76.5% <$5k; 13.4% $5k–$50k; 4.5% $50k–$200k; 5.6% >$200k | Older data | [GameDev Reports / Gamalytic](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned) |
| ~41k games released in the previous 3 years | 50% grossed ≤$500; median ≈$700 excluding free games; median ≈$4,000 for games priced above $5 | Sep 2023 (older) | [Game World Observer](https://gameworldobserver.com/2023/10/06/steam-stats-41k-games-last-3-years-half-made-500-or-less); [Gamalytic](https://gamalytic.com/blog/steam-revenue-infographic) |
| 2025 releases reaching ≥1,000 reviews | 608 of 20,282 = 2.99% | 2025 releases, counted in Jan 2026 | [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/) |
| 2025 releases >$100k | 8% | 2025 releases (secondary coverage of a Gamalytic analysis; I could not confirm which article carries which figure) | [game-developers.org](https://game-developers.org/2025-steam-game-revenue-distribution); [MP1st](https://mp1st.com/news/40-of-steam-games-in-2025-earned-less-than-100) |
| 2025 releases <$1,000 / ≥$50k | 66% / 9.9% | 2025 releases (secondary) | [game-developers.org](https://game-developers.org/2025-steam-game-revenue-distribution) |
| 2025 releases <$100 | 40% | 2025 releases | [MP1st](https://mp1st.com/news/40-of-steam-games-in-2025-earned-less-than-100) |
| 2025 releases >$1M | "just over 300" of ~20,000 ≈ 1.5% (Alinea Analytics) | 2025 releases (secondary) | [VoxBooster](https://voxbooster.com/blog/indie-game-statistics-2026/) |
| Median revenue of a 2025 release | $249 (secondary; one summary credits Gamalytic, another credits VG Insights + Alinea) | 2025 releases | [game-developers.org](https://game-developers.org/steam-paradox-2025-revenue-volume) |
| Median by release year | ~$15,000 for 2016 releases → ~$1,728 for 2026 releases up to 1 Sep; "12 consecutive years" of decline (the excerpt also says "on average"; underlying dataset not named) | By release year | [Game World Observer, 1 Sep 2026](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years) |
| Top-20 new releases of 2025 | All >$50M Steam gross; 13 >$100M | 2025 | [GameDev Reports / GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-most-successful-new) |

#### C. Per-genre data matrix (thresholds exactly as each source reports them)
"≥1k rev." means the share of that year's releases that reached at least 1,000 Steam reviews (Zukowski). He equates that with roughly $150k–$300k+ gross. Bracketed figures are 2024 values.

| Genre / tag | Median revenue per game | WLI share ≥$100k (all release years) | ≥1k rev. 2025 [2024] | Older threshold data | Other / means / notes |
|---|---|---|---|---|---|
| Open World Survival Craft | **$102,000** ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); $10k across ~300 titles, 2023 report (older) ([Gamalytic](https://gamalytic.com/blog/steam-revenue-infographic)) | (see Sandbox) | 15 of 72 = **20.8%** [24.47%] ([HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building); [presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch)) | "Crafting" tag: 686 games, 32% >$500k (c. Jan 2023) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags); [Game Developer](https://www.gamedeveloper.com/business/analyzing-the-top-steam-tags-2)) | Steam Page Analyzer: $100k–$350k median among games with 100+ reviews (low reliability) ([SPA](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)) |
| Sandbox | **~$7,973**, the highest of WLI's 30 genres ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/); [GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) | **27.3%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) / 27.4% ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)) / 27.6% ([GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)); the highest of the 30 | — | — | Also the highest top decile; Palworld alone is estimated at ~$500M ([GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) |
| Farming | — | — | 5 of 60 = **8.3%** [20.8%] ([PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building); [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | — | Small base (60 releases), so the rate swings a lot from year to year |
| Roguelike deckbuilder | $38,000 (older) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)); "by far" the best median of any indie genre for 2019–22 releases (older) ([HTMAG 2022](https://howtomarketagame.com/2022/04/18/what-genres-are-popular-on-steam-in-2022/); [Game World Observer](https://gameworldobserver.com/2022/04/22/roguelike-deckbuilders-beat-all-indie-genres-on-steam-in-terms-of-sales-but-only-99-such-titles-released-since-2019)) | — | 11 of 212 = **5.1%** [6.7%] ([PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building); [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | Only 99 releases in 2019–Apr 2022 ([Game World Observer](https://gameworldobserver.com/2022/04/22/roguelike-deckbuilders-beat-all-indie-genres-on-steam-in-terms-of-sales-but-only-99-such-titles-released-since-2019)) | Games reaching 1,000 reviews: 7 in 2023, 4 in H1 2024 ([GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-results-of-the)). A secondary 2025 article says this genre is among the lowest in average revenue per game ([game-developers.org](https://game-developers.org/steam-paradox-2025-revenue-volume)); that claim conflicts with the others |
| Rogue-lite / action roguelike / survivors-like (bullet heaven) | — | — | Survivors-like breakouts reaching 1,000 reviews: 10 (2022), 17 (2023), 1 (2024) ([GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024)) | Rogue-lite tag: 414 games, 15% >$200k, 9% >$500k (c. Jan 2023) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags); [Game Developer](https://www.gamedeveloper.com/business/analyzing-the-top-steam-tags-2)) | Mean of $8.4M across 104 action-roguelike titles; this appears to count only $1M+ titles (survivorship) ([games.gg](https://games.gg/news/steam-revenue-distribution-by-genre/)). Alinea: roguelikes grossed ~$400M on Steam in 2025, +80% vs 2024 (secondary) ([rec0ded88](https://rec0ded88.com/statistics/roguelike-genre/)). Valve made "Bullet Heaven" an official tag in May 2026 ([GameRant](https://gamerant.com/best-bullet-heaven-games-steam-ranked/)) |
| Simulation | ~$2.1K (method unknown) ([profitable.app](https://profitable.app/steam/genres)) | **16.9%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | 43 of 1,048 = **4.1%** [3.8%] ([PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)) | VG Insights, Jan–Aug 2020: 15% of indie simulation games >$200k (older) ([Statista](https://www.statista.com/statistics/1356730/steam-indie-game-revenue-genre/)) | In WLI's group of next-highest medians ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) |
| Management / tycoon | — | — | 19 of 549 = **3.4%** [5.4%] ([PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)) | — | Gamalytic 2023 says management "tend[s] to do well" (older) ([Gamalytic](https://gamalytic.com/blog/steam-revenue-infographic)) |
| City builder | $22,000 (older) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)) | — | **2 of 397** = 0.5% (rate derived from the counts) ([HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | — | Steam Page Analyzer: $75k–$250k among games with 100+ reviews (low reliability) ([SPA](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)) |
| Colony sim | **$17,300**; 1,167 games; median 2,280 copies ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); $8k across 444 games in the 2023 report (older) ([Game World Observer](https://gameworldobserver.com/2023/10/06/steam-stats-41k-games-last-3-years-half-made-500-or-less)); $44,000 across 292 games (older) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)) | — | — | — | Steam Page Analyzer says colony sims and factory/automation games show "the highest median revenue among indie genres" (low reliability) ([SPA](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)) |
| 4X | **$50,000**; 648 games; median 3,900 copies ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); $8k across 183 games in the 2023 report (older) ([Game World Observer](https://gameworldobserver.com/2023/10/06/steam-stats-41k-games-last-3-years-half-made-500-or-less)); $35,000 (older) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)) | — | — | — | GameDiscoverCo warns that PC-hot genres often don't carry over to console, because 4X and grand strategy games are hard to control and sell poorly on Switch and Xbox (paraphrased from a search excerpt) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)) |
| Grand strategy | $14,700 (the excerpt said "an analytics site" using a sampling estimate; I infer it is Immutable) ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); $19,000 (older) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)) | — | — | — | — |
| Strategy (broad tag) | $4,040 across 27,804 games (same attribution caveat) ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) | **16.1%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | — | VG Insights, 2020: 14% of indie strategy games >$200k (older) ([Statista](https://www.statista.com/statistics/1356730/steam-indie-game-revenue-genre/)) | 13.97% of all-time revenue from $1M+ games ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new)) |
| RTS / turn-based strategy / JRPG | — | — | — | — | "On the way down" among hit PC games compared with 2021 ([GameDiscoverCo](https://newsletter.gamediscover.co/p/how-have-the-genres-of-hit-pc-games)) |
| RPG | ~$1.9K (method unknown) ([profitable.app](https://profitable.app/steam/genres)) | **19.4%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) / 19.5% ([GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) | 28 of the 608 games that reached 1,000 reviews in 2025 (total RPG releases not retrieved) ([GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/)) | VG Insights, 2020: 16% of indie RPGs >$200k (older) ([Statista](https://www.statista.com/statistics/1356730/steam-indie-game-revenue-genre/)) | 17.11% of all-time revenue from $1M+ games ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new)) |
| Action RPG | — | **19%** ([GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) | — | — | "Remains strong" among hit PC games ([GameDiscoverCo](https://newsletter.gamediscover.co/p/how-have-the-genres-of-hit-pc-games)) |
| FPS / shooter | — | **21.6%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) / 21.8% ([GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) | — | 655 games: 21% >$200k, 14% >$500k (c. Jan 2023) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)) | Shooters' top decile is "almost on par" with sandbox ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)). Arena Shooter and FPS are the largest action sub-genres by revenue among $1M+ games ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new)) |
| Horror (incl. psychological) | $2,590 ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) | **16.1%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | Games reaching 1,000 reviews: 39 of 608 in 2025; 47 in 2024; 28 in 2023; 29 in 2022 (total horror releases not retrieved) ([GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/); [GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024)) | — | In WLI's group of next-highest medians ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) |
| Survival horror | **$2,050**; 5,430 games; median 683 copies ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) | — | — | — | — |
| Visual novel | **$7,012**, second-highest of the 30 ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/); [GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)) | **16.5%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | — | — | A secondary 2025 article says visual novels have among the lowest average revenue per game ([game-developers.org](https://game-developers.org/steam-paradox-2025-revenue-volume)); this conflicts with WLI |
| Narrative (incl. walking-sim-type games) | — | — | 51 of the 608 games reaching 1,000 reviews in 2025, the most of any genre; 30 in 2024 (total narrative releases not retrieved) ([GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/); [GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024)) | — | — |
| Adventure / point-and-click | $6,520 for "Adventure" ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) | — | — | — | Point-and-click (translated as "quests" in Russian coverage) is in WLI's group of next-highest medians ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) |
| Action (broad) | $2,530 ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); ~$1K (method unknown) ([profitable.app](https://profitable.app/steam/genres)) | — | — | — | 58.37% of all-time revenue from $1M+ games ([GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new)) |
| Racing | In WLI's lowest-median group ("around $1,000 or less") ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) | **15.8%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | Listed after management, "at lower rates" (value not retrieved) ([HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | — | Fourth-highest top decile, after sandbox, shooters and RPG ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)) |
| Puzzle | In WLI's lowest-median group (≈$1,000 or less) ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) | **9.5%** ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | — | — | Zukowski (2022) says indies over-produce puzzle games (older) ([HTMAG 2022](https://howtomarketagame.com/2022/04/18/what-genres-are-popular-on-steam-in-2022/)) |
| Arcade | In WLI's lowest-median group (≈$1,000 or less) ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) | — | — | — | — |
| Platformer / 2D platformer | $1,040 for 2D platformer ([IMM](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); platformer in WLI's lowest-median group ([ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html)) | **5.5%** for 2D platformer ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | 3 of 1,658 = **0.18%** [0.25%] ([presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch); [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | Platformer: 1,166 games, 7% >$200k, 4% >$500k. Side Scroller: 463 games, 12% >$200k (c. Jan 2023) ([GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)) | 2D Platformer and Puzzle Platformer are in the bottom 25 of 93 tags for pre-launch hype in 2024 ([GameDiscoverCo](https://newsletter.gamediscover.co/p/what-pc-game-genres-have-the-most)) |
| Hidden object | — | **5.4%**, the lowest value retrieved ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | — | — | — |
| Metroidvania | — | — | — | — | Mean of $7.9M across 53 titles, counting only those that grossed ≥$1M (survivorship) ([games.gg](https://games.gg/news/steam-revenue-distribution-by-genre/)). A PC Gamer headline asks whether "the world has moved on" while metroidvanias keep "coming thick and fast" (headline only) ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-metroidvanias-are-still-coming-thick-and-fast-but-has-the-world-moved-on/)) |
| Co-op multiplayer | — | — | 51 of the 232 games that reached 1,000 reviews in H1 2024 (≈21%) were tagged co-op ([GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024); [Game World Observer](https://gameworldobserver.com/2024/07/18/top-game-genres-on-steam-first-half-2024-key-trends)) | — | — |

Caveat on the WLI hit-rate column: the values from Simulation (16.9%) down to Hidden Object (5.4%) appeared in a single search excerpt of PC Gamer's table. A later targeted search did not surface those rows again.

#### D. Means (mean revenue per game)
- I found no 2024–2026 source that gives a per-genre mean across all releases.
- The only per-genre means found are from survivorship-biased samples:
  - Action roguelike: $8.4M mean across 104 titles; metroidvania: $7.9M across 53 titles. Both appear to count only titles that grossed ≥$1M. — [games.gg](https://games.gg/news/steam-revenue-distribution-by-genre/)
  - A Reddit-voted list of 57 popular bullet-heaven games averages 987,889 units sold at an average price of $7, or $10,368,486 gross. The figures are VG Insights-derived, and the sample includes only popular games. — [RogueRanker](https://rogueranker.com/best-bullet-heaven-games/)
- VG Insights (Oct 2024) gives average revenue per indie developer by their game number: about $120,000 for a developer's first game, $168,000 for the second and $209,000 for the third. These are means, not medians. — [VGI report PDF](https://app.sensortower.com/vgi/assets/reports/VGI_Global_Indie_Games_Market_Report_2024.pdf)

#### E. The $1M threshold and the nearest reported thresholds
- **2025 releases above $1M:** about 1.5%, or just over 300 of roughly 20,000 releases (Alinea Analytics, secondary). — [VoxBooster](https://voxbooster.com/blog/indie-game-statistics-2026/)
- **Share above $500k, the closest per-genre threshold found (c. Jan 2023, older):** Crafting 32%, FPS 14%, Rogue-lite 9%, Platformer 4%. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags); [Game Developer](https://www.gamedeveloper.com/business/analyzing-the-top-steam-tags-2)

### Inferences
- **What 1,000 reviews means in dollars (derived).**
  - Units: 1,000 reviews × WLI's 35x standard multiplier = 35,000 units. Across WLI's credible 20x–60x range, that is 20,000–60,000 units.
  - Revenue: at an average realized gross price of $5 per unit (after discounts and regional pricing), 30,000–35,000 units come to about $150k–$175k. At $10 per unit they come to $300k–$350k.
  - Conclusion: Zukowski's 1,000-review rate is a reasonable proxy for the share reaching "≥$150k–$300k". It understates the $300k bar for cheap games (often horror, visual novels and casual) and overstates it for expensive ones (often strategy and simulation). The genre-price link is my inference; I found no source that measures price by genre.
- **Mean versus median (derived).** WLI's total of about $129.8B ÷ about 99,206 games ≈ $1.31M mean per paid game. That is about 360–380 times the $3.5k–$3.6k median. This is why per-genre means, where they exist, are meaningless as "typical" outcomes.
- **Converting a ≥$100k share into a ≥$300k share (derived; show math).** I assume the upper tail roughly follows a power law, P(>R) ∝ R^−α.
  - Fitting α to the older GameDiscoverCo shares above $200k and $500k:
    - FPS: ln(21/14) ÷ ln(2.5) = 0.44
    - Rogue-lite: ln(15/9) ÷ ln(2.5) = 0.56
    - Platformer: ln(7/4) ÷ ln(2.5) = 0.61
  - Fitting α to Gamalytic's shares above $50k and $200k:
    - Lifetime: ln(15.8/8.9) ÷ ln(4) = 0.41
    - Releases from the previous three years: ln(10.1/5.6) ÷ ln(4) = 0.43
  - P(>$300k) ÷ P(>$100k) = 3^−α, which gives 0.51–0.63 for those α values.
  - Cross-check: Zukowski's 2.99% of 2025 releases at 1,000+ reviews ÷ the reported 8% of 2025 releases above $100k = 0.37.
  - Working band: **multiply a ≥$100k hit rate by roughly 0.37–0.63 to estimate the ≥$300k rate.** This is a heuristic, not a measured statistic.
- **The data favours survival-crafting/sandbox, but the two overlap.** WLI's "sandbox" and Zukowski's "OWSC" overlap heavily: Palworld-type games carry both tags. They are best treated as one family that ranks first on every metric.
- **Absolute medians disagree by up to 10x between sources.** OWSC is $10k in Gamalytic's 2023 report and $102k in Immutable's 2026 table; 4X is $8k vs $50k. This most likely reflects differences in sample construction (all releases vs a filtered base; a 20-title midpoint sample) rather than real growth. Use within-source rankings, not cross-source dollar comparisons.

### Gaps
- **No per-game median, mean or threshold shares found in 2024–2026 data for:** survivors-like/bullet heaven as a tag (it only became an official Steam tag in May 2026), base building, factory/automation (only a low-reliability claim), tower defense, auto-battler, job/work simulator, cozy, dating sim, walking sim (as a separate tag), soulslike, metroidvania (a $1M+-only mean exists), CRPG, JRPG (trend direction only), turn-based tactics, RTS (trend direction only), PvP multiplayer, extraction shooter, sports, fighting, MMO, idle/incremental, non-roguelike deckbuilder/card game, and casual.
- **Full tables I could not retrieve:** WLI's per-genre medians and top-decile dollar values beyond sandbox and visual novel, and its year-relative ratios; Immutable's full 107-row table; Zukowski's full 2024 and 2025 genre tables (total releases for horror, narrative, RPG, roguelite and racing); VG Insights' 2024 genre breakdowns. The pages were blocked and the search budget was exhausted.
- **Missing statistics:** no source gives per-genre means across all releases, or per-genre shares above $1M.
- **Unresolved discrepancies:** the WLI hit-rate values differ slightly across outlets (27.3/27.4/27.6%), and I could not check them against the report itself. Immutable's attribution to Gamalytic and its base size are also unconfirmed.

## Q2. Which genres/tags have the highest median revenue and "success rate" (as opposed to the highest total revenue)? Ranked tables

### Takeaway
On per-game odds, the survival-crafting/sandbox family ranks first in every 2024–2026 dataset found. Next come farming and roguelike deckbuilders (both above the 2.99% baseline in 2025), followed by deep PC strategy/sim (4X and colony sim, on medians). FPS and RPG/ARPG rank high on the share above $100k, but those shares are probably inflated by big-budget games.

At the bottom are 2D platformers, hidden-object, puzzle and arcade games, along with city builders on 2025 odds. Total revenue ranks Action (58%) and RPG (17%) first among $1M+ games, which tells you nothing about a typical game's odds.

### Cited Findings

#### Ranking 1: 2025 success rate (share of 2025 releases reaching ≥1,000 reviews ≈ $150k–$300k+)
| Rank | Genre | 2025: released → reached 1,000 reviews | 2025 rate | 2024 rate | Multiple of the 2.99% all-release baseline (derived) |
|---|---|---|---|---|---|
| 1 | Open World Survival Craft | 72 → 15 | 20.8% | 24.47% | 7.0x |
| 2 | Farming | 60 → 5 | 8.3% | 20.8% | 2.8x |
| 3 | Roguelike deckbuilder | 212 → 11 | 5.1% | 6.7% | 1.7x |
| 4 | Simulation | 1,048 → 43 | 4.1% | 3.8% | 1.4x |
| 5 | Management | 549 → 19 | 3.4% | 5.4% | 1.1x |
| — | **All 2025 releases** | 20,282 → 608 | 2.99% | 2.44% | 1.0x |
| 6 | City builder | 397 → 2 | 0.5% (derived) | n/a | 0.17x |
| 7 | 2D platformer | 1,658 → 3 | 0.18% | 0.25% | 0.06x |

Sources: [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [PokeIndie reproduction of the table](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building); [presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch); [GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/). The 11 of 212 count works out to 5.19%, against a reported 5.1%; 19 of 549 is 3.46%, against a reported 3.4%. These look like truncation rather than errors.

#### Ranking 2: WLI share above $100k (all release years), with a derived estimate for $300k
| Rank | Genre | Share ≥$100k (WLI 2026) | Derived share ≥$300k (× 0.37–0.63; see Q1 Inferences) |
|---|---|---|---|
| 1 | Sandbox | 27.3–27.6% | ~10–17% |
| 2 | FPS | 21.6–21.8% | ~8–14% |
| 3 | RPG | 19.4–19.5% | ~7–12% |
| 4 | Action RPG | 19% | ~7–12% |
| 5 | Simulation | 16.9% | ~6–11% |
| 6 | Visual novel | 16.5% | ~6–10% |
| 7= | Horror | 16.1% | ~6–10% |
| 7= | Strategy | 16.1% | ~6–10% |
| 9 | Racing | 15.8% | ~6–10% |
| 10 | Puzzle | 9.5% | ~3.5–6% |
| 11 | 2D platformer | 5.5% | ~2–3.5% |
| 12 | Hidden object | 5.4% | ~2–3.4% |

Sources: [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/); [GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/); [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/). The derived column is my estimate, not a source figure.

#### Ranking 3: median revenue per game (ranked within each source; sources are not on a common basis)
- **Immutable (c. Sep 2026, gross):**

  | Sub-genre | Median |
  |---|---|
  | OWSC | $102,000 |
  | 4X | $50,000 |
  | Colony sim | $17,300 |
  | Grand strategy | $14,700 (attribution inferred) |
  | Adventure | $6,520 |
  | *Median of all 107 sub-genres* | *$4,837* |
  | Strategy (broad) | $4,040 (attribution inferred) |
  | Horror | $2,590 |
  | Action | $2,530 |
  | Survival horror | $2,050 |
  | 2D platformer | $1,040 |

  — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **WLI (Aug–Oct 2026):**
  - Top medians: sandbox ~$7,973 (highest), then visual novel $7,012, then a group of simulation, RPG, horror and point-and-click (values not retrieved).
  - Overall median: $3,462–$3,631.
  - Lowest medians: racing, puzzle, arcade and platformer (≈$1,000 or less).
  - Sources: [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/); [ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html); [GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)
- **GameDiscoverCo with Weinbaum's data (older, pre-2024):**
  - Colony sim $44,000 (292 games); roguelike deckbuilder $38,000; 4X $35,000; city builder $22,000; grand strategy $19,000.
  - One excerpt describes "about $5,000" as the baseline across sub-genres. Another says the median of the tag medians is about $2,600 and calls the figures "net".
  - — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)
- **Gamalytic (Sep 2023, older):** OWSC ~$10k; 4X $8k; colony sim $8k. For comparison, the overall median excluding free games was about $700. — [Game World Observer](https://gameworldobserver.com/2023/10/06/steam-stats-41k-games-last-3-years-half-made-500-or-less); [Gamalytic](https://gamalytic.com/blog/steam-revenue-infographic)

#### Ranking 4: total revenue (what not to confuse with odds)
- **Share of all-time Steam revenue among $1M+ games, one genre per game:** Action 58.37%, RPG 17.11%, Strategy 13.97%, Simulation 9.76%. GameDiscoverCo says Action's share is outsized relative to its game count because of a few evergreen titles. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new); [Game World Observer](https://gameworldobserver.com/2025/07/01/analytics-three-quarters-of-game-revenue-on-steam-comes-from-action-and-rpgs)
- **Concentration:** the top 1% of paid games earn 84.5% of estimated revenue. — [GamesRadar](https://www.gamesradar.com/games/behold-the-whole-history-of-steams-economy-in-one-picture-the-top-1-percent-of-games-earn-84-5-percent-of-estimated-revenue-and-most-games-barely-make-anything/)
- **The contrast with typical outcomes:** Action's median is only $2,530 ([Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) or about $1K ([profitable.app](https://profitable.app/steam/genres)), despite its 58% share of the total.
- **Why medians can mislead:** Weinbaum writes that "if a certain genre is particularly boom or bust, let's say 40% make mountains of money and 60% flop with less than 5k in revenue, the median would show a very low figure." Carless calls the share of games above a revenue level "a great stat because it shows you exactly what benchmark of games you have to compete with." — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)

### Inferences
- **Consolidated tiers for the chance that a typical non-AAA 2025–26 release reaches ≥$300k gross (my synthesis, not a source ranking).**
  - **Tier 1 (≈10–25%):**
    - Open World Survival Craft: 20.8% (2025) and 24.47% (2024) reached 1,000 reviews.
    - Sandbox: ~10–17%, derived from WLI. WLI covers all release years, so the figure for 2025 releases is probably lower.
  - **Tier 2 (≈5–10%):**
    - Farming: 8.3% in 2025, but only 60 releases, so it is volatile.
    - Roguelike deckbuilder: 5.1–6.7%.
    - FPS, RPG and action RPG: 7–14% derived from WLI. These are all-year figures and probably inflated by big-budget games; I found no 2025 rate.
    - 4X and colony sim: placed here on high medians ($50k and $17.3k) only, with no hit-rate data.
  - **Tier 3 (≈3–5%):**
    - Simulation (4.1%) and management (3.4%).
    - Horror: 6–10% derived from WLI across all years, but very high release volume and a $2.6k median.
    - Visual novel: conflicting evidence.
    - Broad strategy.
    - Racing: low median combined with a 15.8% hit rate, i.e. bimodal.
  - **Tier 4 (≈0.2–3%):**
    - City builder (0.5% in 2025).
    - Puzzle (3.5–6% derived from WLI across all years; lower for recent releases).
    - Hidden object (2–3.4% derived from WLI across all years).
    - 2D platformer (0.18%).
- **WLI's all-years base overstates current odds.** Comparing WLI-derived ≥$300k estimates with Zukowski's 2025 rates gives a rough deflator:
  - Simulation: 6.3–10.6% derived vs 4.1% actual, so ÷1.5–2.6.
  - 2D platformer: 2.0–3.5% derived vs 0.18% actual, so ÷11–19.

  Older eras and the exclusion of zero-review games inflate WLI rates the most for crowded, declining genres. Differences in how each source assigns genres (top-six tags vs one manual label) also contribute. This is derived and approximate.
- **Median and hit rate can diverge:**
  - Visual novels: high median ($7,012) but a middling hit rate (16.5%). That pattern suggests many modest earners rather than breakouts.
  - Racing: low median but a 15.8% hit rate and a high top decile, i.e. boom or bust. Licensed big-budget racing franchises probably drive the top (inference).
  - FPS: second on hit rate. GameDiscoverCo's own caveat applies: "do you think you can make a first-person shooter that you can stand behind for less than $500k?" — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)
- **Correlation is not causation.** Genres with few, expensive, experienced-team releases (OWSC, 4X) may show high rates partly because of who enters them. None of the sources controls for budget or team experience.

### Gaps
- There is no single source that ranks every requested genre on the same metric and cohort.
- WLI's top-decile dollar values, Immutable's full ranking and Zukowski's complete genre list could not be retrieved.
- There is no hit-rate data for 4X, colony sim, grand strategy, city builder (other than 2025), metroidvania, soulslike, tower defense, auto-battler and the other genres listed in the Q1 Gaps.

## Q3. Which genres have high release volume but poor typical outcomes?

### Takeaway
2D platformers are the clearest example of high volume with poor typical outcomes: 1,658 releases in 2025 produced 3 games with 1,000+ reviews, and the median is about $1k. Puzzle, arcade, hidden-object and broad "action" games also combine large catalogues with medians of roughly $1k–$2.5k. Survival horror has 5,430 games at a $2,050 median, even though horror produces many breakout hits in absolute terms. In 2025, city builders produced only 2 games with 1,000+ reviews from 397 releases. Roguelike deckbuilders are saturating: release volume rose roughly 7x while the success rate fell. I found no direct statistics for the "casual" tag.

### Cited Findings
- **2D platformers**
  - 1,658 releases in 2025, of which 3 reached 1,000 reviews (0.18%); the 2024 rate was 0.25%. — [presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch); [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
  - 2D platformer median $1,040 ([Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)); 5.5% of 2D platformers above $100k ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)).
  - Older data: 1,166 platformer-tagged games, of which 7% grossed >$200k. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)
  - In 2024, 2D Platformer, Top-Down Shooter, Puzzle Platformer and Twin Stick Shooter were all in the bottom 25 of 93 tags for pre-launch hype. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/what-pc-game-genres-have-the-most)
  - Headline: "Steam players don't care about platformers unless they mixed with other genres". — [WN Hub](https://wnhub.io/news/stores-and-publishing/item-44107)
  - Platformers "generally show relatively low revenues" despite hits like Sonic and Celeste. — [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
- **WLI's lowest medians:** racing, puzzle, arcade and platformer (≈$1,000 or less). Hidden object has the lowest share above $100k (5.4%) and puzzle sits at 9.5%. — [ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html); [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)
- **Zukowski (2022, indie-only, older):** "Indie developers are still making way too many genres that don't do that well on Steam: mostly platformers (of all varieties), puzzle games, and FPS." — [HTMAG 2022](https://howtomarketagame.com/2022/04/18/what-genres-are-popular-on-steam-in-2022/); [Game World Observer](https://gameworldobserver.com/2022/04/22/roguelike-deckbuilders-beat-all-indie-genres-on-steam-in-terms-of-sales-but-only-99-such-titles-released-since-2019)
- **Horror and survival horror**
  - Survival horror has 5,430 games, a median of $2,050 and median sales of 683 copies. Horror overall has a $2,590 median. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
  - Yet horror produced 47 of the 445 games that reached 1,000 reviews in 2024 (the most of any genre that year) and 39 of the 608 in 2025. — [GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024); [GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/)
- **Broad action and strategy tags**
  - Action median $2,530 ([Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) or about $1K ([profitable.app](https://profitable.app/steam/genres)).
  - Broad strategy: 27,804 games at a $4,040 median, against $14,700 for grand strategy (I infer both come from Immutable). — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **City builders:** 397 releases in 2025 produced 2 games with 1,000+ reviews. — [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- **Roguelike deckbuilders:** 99 releases from 2019 to Apr 2022 ([Game World Observer](https://gameworldobserver.com/2022/04/22/roguelike-deckbuilders-beat-all-indie-genres-on-steam-in-terms-of-sales-but-only-99-such-titles-released-since-2019)), compared with 212 in 2025 alone. The 1,000-review rate fell from 6.7% to 5.1% between 2024 and 2025. — [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)
- **Simulation:** high volume (1,048 releases in 2025) but still above the baseline (4.1%, or 1.4x). It is not a "poor outcome" genre. — [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)
- **Visual novels:** the evidence conflicts. WLI ranks them second on median ($7,012) with a 16.5% share above $100k ([Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/); [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)). A secondary article citing Gamalytic places them among the lowest in average revenue per game ([game-developers.org](https://game-developers.org/steam-paradox-2025-revenue-volume)). A separate Automaton report on a wishlist-to-sales study says NSFW games show "unusually high" conversion ([Automaton](https://automaton-media.com/en/news/steam-wishlist-to-sales-study-shows-how-genre-release-timing-and-reviews-affect-success-nsfw-games-show-unusually-high-conversion-rate/)); I did not retrieve its figures.

### Inferences
- **Roguelike deckbuilder volume growth (derived):** about 99 releases over about 3.3 years is ~30 per year, against 212 in 2025, so volume rose roughly 7x. Over the same period the genre's success rate fell from "best median of any indie genre" (2022) to 5.1% (2025). It is still 1.7x the baseline, but trending down.
- **"High-volume, poor typical outcome" genres** with consistent 2024–2026 evidence: 2D platformer (worst), puzzle, arcade, hidden object, broad action, and survival horror / broad horror on median. Horror is the special case: a poor median, but many absolute hits, because so many horror games are released.
- **City builders:** the 2025 result (0.5%) conflicts with older medians ($22k). Possible explanations include rising saturation and Zukowski assigning some city-builder hits to "simulation" or "management". Both are unverified.
- **Visual novels:** the gap between sources may reflect WLI excluding zero-review games and including an adult-VN sub-market. This is speculative and needs the WLI tag breakdown to confirm.

### Gaps
- No statistics found for the "Casual" tag, dating sims, or visual-novel release volume.
- Release counts by genre for 2024 and 2026 were not retrieved, except the 2025 figures above.
- For metroidvania volume, only a headline was found.

## Q4. Indie/small-team view, and whether conclusions change across release-year cohorts (2022–2025, plus 2026 YTD)

### Takeaway
Almost no genre-level data is restricted to indie games. Because AA/AAA games are a tiny share of releases by count, the medians effectively describe indie outcomes. The shares above $100k for FPS, RPG and racing are the figures most likely to be inflated by big-budget games.

Across cohorts, the share of all releases reaching 1,000 reviews ran 2.74% (2022) → 2.56% (2023) → 2.44% (2024) → 2.99% (2025). Medians by release year fall steadily, partly because recent games have had less time to earn.

Genre rankings at the top are stable: survival-crafting was first in both 2024 and 2025. Several 2024 leaders weakened in 2025 (farming, management, roguelike deckbuilders), while simulation held. Survivors-likes boomed in 2022–23, collapsed in 2024 and revived in 2025.

### Cited Findings

#### Indie-specific data
- **Zukowski's 2022 genre analysis (older):** indie games released 2019–2022, with AA/AAA titles and games under 10 reviews removed, using VG Insights Boxleiter estimates. Roguelike deckbuilders had the best median; platformers, puzzle and FPS were over-produced. — [HTMAG 2022](https://howtomarketagame.com/2022/04/18/what-genres-are-popular-on-steam-in-2022/); [Game World Observer](https://gameworldobserver.com/2022/04/22/roguelike-deckbuilders-beat-all-indie-genres-on-steam-in-terms-of-sales-but-only-99-such-titles-released-since-2019)
- **Median lifetime revenue of 2019 releases:** $1,136 (VG Insights data, older). — [Game World Observer, 29 Nov 2022](https://gameworldobserver.com/2022/11/29/median-indie-game-earnings-steam-barely-over-1000)
- **VG Insights Global Indie Games Market Report 2024**
  - Indies took 48% of the $8.3B in full-game Steam revenue from 1 Jan to 30 Sep 2024, and 58% of copies sold. — [Game World Observer](https://gameworldobserver.com/2024/10/16/indie-games-revenue-steam-vs-aaa-titles-vg-insights)
  - Segment revenue benchmarks: "Triple-I" ~$50M+, middle market ~$10M, small teams ~$1M, hobbyists ~$50K. — [VGI report PDF](https://app.sensortower.com/vgi/assets/reports/VGI_Global_Indie_Games_Market_Report_2024.pdf)
  - Share of revenue: small teams (3–15 people) 20%, medium teams (15–50) 19%, hobby projects 8%. The excerpt does not say whether these are shares of indie revenue or of total revenue. — [VGI report PDF](https://app.sensortower.com/vgi/assets/reports/VGI_Global_Indie_Games_Market_Report_2024.pdf)
  - A secondary source says the segment chart excludes games that sold fewer than 2,000 units. — [VGI report PDF](https://app.sensortower.com/vgi/assets/reports/VGI_Global_Indie_Games_Market_Report_2024.pdf)
- **VG Insights, Jan–Aug 2020 (older):** RPG (16%), simulation (15%) and strategy (14%) had the largest shares of indie games earning >$200k. About 41–43% of games in those genres earned <$10k. — [Statista](https://www.statista.com/statistics/1356730/steam-indie-game-revenue-genre/)
- **Zukowski on Steam's capacity (Jan 2023, older):** "Steam can only promote up to around 500 indie games per year". — [Game World Observer](https://gameworldobserver.com/2023/01/30/chris-zukowski-steam-can-only-promote-up-to-around-500-indie-games-per-year)
- **Horror for small developers:** a Zukowski-based summary calls horror "the #1 genre on Steam in the last 3 years in terms of 'success' (number of projects that exceeded 1,000 reviews) for small developers". — [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)

#### Cohort data
| Release year | Steam releases | Reached ≥1,000 reviews | Share | Source |
|---|---|---|---|---|
| 2022 | n/r | n/r | 2.74% | [GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/) |
| 2023 | n/r | n/r | 2.56% | [Softonic](https://en.softonic.com/articles/in-2025-more-games-were-uploaded-to-steam-than-ever-before-but-less-than-3-have-received-a-thousand-reviews) |
| 2024 | 18,234 (another summary says 18,324) | 445 | 2.44% | [GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/) |
| 2025 | 20,282 | 608 | 2.99% | [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/) |
| 2026, up to 1 Sep | ~17,200 (Game World Observer's count; it puts 2025 at ~23,000) | n/r | n/r | [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years) |

(n/r = not retrieved.)

- **2024 vs 2023:** the number of games reaching 1,000 reviews rose 25%, but total releases rose 31%, so the success share fell slightly. Zukowski credits Valve's late-2024 change that lets developers notify wishlisters when a demo launches for more exposure. — [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- **Early 2024:** 72 games reached 1,000 reviews in Q1 2024 and 232 of 8,000+ did so in H1 2024. — [Game World Observer](https://gameworldobserver.com/2024/07/18/top-game-genres-on-steam-first-half-2024-key-trends)
- **Genre success rates, 2024 → 2025:**
  - Open World Survival Craft: 24.47% → 20.8%
  - Farming: 20.8% → 8.3%
  - Roguelike deckbuilder: 6.7% → 5.1%
  - Simulation: 3.8% → 4.1%
  - Management: 5.4% → 3.4%
  - 2D platformer: 0.25% → 0.18%

  — [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building); [presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch)
- **Counts of games reaching 1,000 reviews, by genre and year:**
  - Horror: 29 (2022), 28 (2023), 47 (2024), 39 (2025).
  - Narrative: 30 (2024), 51 (2025).
  - Survivors-likes: 10 (2022), 17 (2023), 1 (2024). Zukowski (2024): these "flared up but [are] fading", while roguelikes and simulation are "quite stable".
  - Roguelike deckbuilders: 7 (2023), 4 (H1 2024), 11 (2025).

  — [GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024); [GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/); [GameDev Reports H1 2024](https://gamedevreports.substack.com/p/how-to-market-a-game-results-of-the)
- **Survivors-like revival in 2025:** MidHard Games' year-end review names The Spell Brigade, BALL x PIT and Megabonk as the year's standouts. Megabonk peaked at 117,000 concurrent players, against Vampire Survivors' 77,000. — [WN Hub](https://wnhub.io/news/other/item-49655)
- **Roguelike revenue in 2025:** Alinea estimates Steam roguelike gross at ~$400M for the year, +80% on 2024 (secondary). — [rec0ded88](https://rec0ded88.com/statistics/roguelike-genre/)
- **Co-op:** about 21% (51) of H1-2024 games with 1,000+ reviews were tagged co-op. — [GameDev Reports](https://gamedevreports.substack.com/p/how-to-market-a-game-steam-in-2024)
- **Medians by release year:**
  - Game World Observer: ~$15,000 for 2016 releases falling to ~$1,728 for 2026 releases up to 1 Sep, a "12 consecutive years" decline. — [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years)
  - Gamalytic: 5.6% of games from the previous three years earned >$200k, against 8.9% across the whole catalogue. — [GameDev Reports](https://gamedevreports.substack.com/p/gamalytic-67-of-games-on-steam-earned)
- **2025 releases:** 8% above $100k; 66% below $1k; 40% below $100; a median of $249 (attribution varies between secondary summaries). — [game-developers.org](https://game-developers.org/2025-steam-game-revenue-distribution); [MP1st](https://mp1st.com/news/40-of-steam-games-in-2025-earned-less-than-100); [game-developers.org](https://game-developers.org/steam-paradox-2025-revenue-volume)
- **Zukowski on 2025:** "We might be in a bit of an indie golden age". — [GamesRadar](https://www.gamesradar.com/games/a-terrifying-20-282-games-were-released-on-steam-in-2025-and-just-608-managed-to-get-1-000-reviews-expert-finds-we-might-be-in-a-bit-of-an-indie-golden-age/)

### Inferences
- **Growth in 2025 (derived):** games reaching 1,000 reviews rose 608 ÷ 445 = +36.6% year on year, while releases rose 20,282 ÷ 18,234 = +11.2%. Both 2024 counts sit above Zukowski's earlier estimate that Steam can promote "around 500 indie games per year", and the 2025 count is well above it.
- **Back-calculated 2023 figures (derived):** about 356 games reached 1,000 reviews (445 ÷ 1.25) from about 13,920 releases (18,234 ÷ 1.31), which is 2.56%. That matches the reported 2023 rate, so the series is internally consistent.
- **2026 release pace (derived):** 17,200 releases by 1 Sep (day 243) annualizes to about 25,800 on Game World Observer's counting basis. That compares with Game World Observer's ~23,000 for 2025; Zukowski's 2025 count was 20,282 on a different basis. Competition per release keeps rising.
- **Falling medians are partly an artifact.** Recent releases have had less time to earn (right-censoring), so median-by-year comparisons overstate the decline. The 2025 median of $249 and the 2026 median of ~$1,728 cannot both be on the same basis, because a partial 2026 cohort should not out-earn the full 2025 one. The underlying populations evidently differ (for example, paid games with reviews vs all releases).
- **Which conclusions hold across cohorts:**
  - Survival-crafting at the top: holds in 2023 (older data), 2024 and 2025.
  - 2D platformers at the bottom: holds in 2022, 2024 and 2025.
  - Volatile: farming (small base), survivors-likes (fad cycle) and roguelike deckbuilders (saturating).
  - Rising: horror and narrative counts.
- **Indie vs AAA:** none of the genre datasets separates indie from AAA. In crowded indie-heavy genres such as platformer, puzzle and horror, the medians describe indie outcomes. In FPS, RPG and racing, the shares above $100k likely include a meaningful number of AA/AAA titles, which overstates a small team's odds there. This is inference, not measured.

### Gaps
- No genre-level stats restricted to indies for 2024–2026.
- No 2026 year-to-date genre success rates; the 2026 analysis would normally appear in Jan 2027.
- WLI's year-relative genre medians were not retrieved; they would show which genres beat each cohort's median.
- Release counts by genre for 2022–2024 were not retrieved.

## Q5. What do the main Steam data analysts conclude about the best and worst genres for indie revenue, and where do they agree or disagree?

### Takeaway
The analysts agree on the top and the bottom:
- **Top:** survival-crafting/sandbox, deep "core-PC" strategy and simulation, and, at least until recently, roguelike deckbuilders.
- **Bottom:** 2D platformers, puzzle games, and generic action/arcade games.

They disagree on horror, visual novels, FPS, city builders and the size of the medians. Most of those disagreements come from method rather than market facts:
- **Metric:** median vs count of hits vs share above a threshold vs total revenue.
- **Sample:** only games with ≥1 review, games with ≥10 reviews, all releases, or $1M+ games only.
- **Genre assignment:** top-six tags vs a single manual label.

### Cited Findings
- **Chris Zukowski (How To Market A Game)**
  - **Best:**
    - Open World Survival Craft has the highest 1,000-review rate in both 2024 and 2025. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch)
    - "Crafty-buildy games are still what the Steam audience wants" (mid-2024). — [Game World Observer](https://gameworldobserver.com/2024/07/18/top-game-genres-on-steam-first-half-2024-key-trends); [HTMAG Q2 2024](https://howtomarketagame.com/2024/07/16/what-games-are-selling-q2-2024/)
    - Farming, roguelike deckbuilders, simulation and management come next in 2025. — [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)
    - Horror produces the most hits for small developers by count. — [PokeIndie](https://pokeindie.com/blog/game-genre-study-2026-which-genres-are-worth-building)
    - In 2022 (older data), roguelike deckbuilders had the best median of any indie genre. — [HTMAG 2022](https://howtomarketagame.com/2022/04/18/what-genres-are-popular-on-steam-in-2022/)
  - **Worst:** 2D platformers (0.18–0.25%) and over-produced platformers, puzzle and FPS. — [presskit.gg](https://presskit.gg/field-guides/how-many-wishlists-to-launch); [HTMAG 2022](https://howtomarketagame.com/2022/04/18/what-genres-are-popular-on-steam-in-2022/)
  - **Trend:** survivors-likes are fading, while roguelikes and simulation are stable (as of 2024). — [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- **Simon Carless / GameDiscoverCo (including Danny Weinbaum's data)**
  - **Best by median (older data):** colony sim, roguelike deckbuilder, 4X, city builder and grand strategy. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genre-should-your-next-pc-game)
  - "Deeper strategic and sim-centric gameplay for a 'core PC' audience has a greater chance of 'hype' (and sales)." — [GameDiscoverCo](https://newsletter.gamediscover.co/p/what-pc-game-genres-have-the-most)
  - **Worst for hype:** 2D platformer, top-down shooter, puzzle platformer and twin-stick shooter, all in the bottom 25 of 93 tags. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/what-pc-game-genres-have-the-most)
  - **Older tag data:** only 7% of platformers grossed >$200k; FPS had a strong 21% but is expensive to make. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/analyzing-the-top-steam-tags)
  - **Among hit games:** JRPG, RTS and turn-based strategy are declining since 2021, while action RPG remains strong. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/how-have-the-genres-of-hit-pc-games)
  - **Total revenue:** Action (58%) and RPG (17%) dominate the revenue of $1M+ games. — [GameDiscoverCo](https://newsletter.gamediscover.co/p/which-genres-have-ruled-steam-a-new)
- **Gamalytic**
  - "PC players prefer deep, complex games. That's why genres like 4X, management and survival-craft tend to do well." — [Gamalytic](https://gamalytic.com/blog/steam-revenue-infographic)
  - 2023 medians (older): OWSC ~$10k; 4X and colony sim $8k each; overall median excluding free games about $700. — [Game World Observer](https://gameworldobserver.com/2023/10/06/steam-stats-41k-games-last-3-years-half-made-500-or-less)
  - A secondary article citing Gamalytic's 2025 data says visual novels and roguelike deckbuilders "showed the lowest average revenue per game", and that action plus RPG make up 75% of platform revenue. — [game-developers.org](https://game-developers.org/steam-paradox-2025-revenue-volume)
- **VG Insights**
  - A secondary blog citing VG Insights names RPG, strategy and simulation as the most promising genres for earnings; I could not verify this against the primary report. — [Kevuru Games](https://kevurugames.com/blog/indie-game-development-the-all-you-need-guide-to-revenues-most-profitable-genres-monetization-bonus-top-10-best-indie-games/)
  - 2020 data (older): RPG, simulation and strategy had the highest shares of indie games earning >$200k (16%, 15% and 14%). — [Statista](https://www.statista.com/statistics/1356730/steam-indie-game-revenue-genre/)
- **Ichiro Lambe et al. (We Love It Steam Revenue Report, 2026)**
  - Sandbox is the "most reliably bankable genre on the whole platform", with the highest median, top decile and share above $100k. FPS and RPG/ARPG follow on that share; visual novels have the second-highest median. — [GamesRadar](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/); [Automaton](https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/)
  - Lowest medians: racing, puzzle, arcade and platformer. Lowest shares above $100k: 2D platformer and hidden object. — [ixbt.games](https://ixbt.games/en/news/2026/08/25/430298-issledovanie-steam-pokazalo-kakie-zanry-obespecivaiut-naibolee-stabilnyi-deneznyi-potok.html); [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)
  - GamesRadar notes the report's "genre math is also a little opaque". I could not tell which of GamesRadar's two articles on the report carries the line. — [GamesRadar (economy piece)](https://www.gamesradar.com/games/behold-the-whole-history-of-steams-economy-in-one-picture-the-top-1-percent-of-games-earn-84-5-percent-of-estimated-revenue-and-most-games-barely-make-anything/); [GamesRadar (sandbox piece)](https://www.gamesradar.com/games/steam-has-been-taken-over-by-sandbox-games-including-palworld-study-of-98-555-games-finds-but-rpgs-and-fps-games-are-still-massive/)
- **Lars Doucet:** I found no genre-revenue analysis from him in this search session (see Gaps).

#### Agreement / disagreement matrix
| Genre | Zukowski | GameDiscoverCo | Gamalytic | VG Insights | WLI (Lambe et al.) | Net |
|---|---|---|---|---|---|---|
| Survival-craft / sandbox | Top success rate 2024–25 | Crafting: 32% >$500k (older) | Top 2023 median among genres listed | — | Top median and top share >$100k | **Agree: best** |
| 4X / colony sim / grand strategy | — | High medians (older) | "Tend to do well" (2023) | Strategy among top 2020 shares | Strategy 16.1% (mid-pack) | Mostly agree: above average |
| City builder | 0.5% in 2025 | $22k median (older) | Listed among high medians (2023) | — | — | **Disagree (era / method)** |
| Roguelike deckbuilder | Best median (2022); 5.1–6.7% (2024–25) | $38k median (older) | Secondary 2025 claim: among lowest averages | — | — | **Disagree (saturation)** |
| Survivors-like / roguelite | Boom 2022–23, bust 2024, revival 2025 (MidHard) | Rogue-lite 15% >$200k (older) | — | — | — | Cyclical |
| Horror | Most hits by count | — | — | — | 16.1% share >$100k; in top-median group | Immutable median $2,590 → **typical vs absolute disagree** |
| Visual novel | — | — | Secondary: among lowest averages | — | Second-highest median ($7,012) | **Disagree** |
| FPS | Over-produced by indies (2022) | 21% >$200k but costly | — | — | 21.6–21.8% (2nd) | **Disagree (AAA skew vs indie cost)** |
| Simulation / management | 4.1% / 3.4% (2025) | Sim-centric favoured | Management "does well" | Sim among top 2020 shares | Simulation 16.9% | Agree: above average |
| RPG / ARPG | 28 games with 1,000+ reviews in 2025 | ARPG strong; JRPG declining | — | RPG top 2020 share | 19–19.5% | Agree: above average (but totals skewed) |
| Platformer / 2D platformer | Worst (0.18–0.25%) | 7% >$200k; bottom-25 for hype | — | — | 5.5%; lowest-median group | **Agree: worst** |
| Puzzle / arcade / hidden object | Puzzle over-produced | Puzzle platformer bottom-25 for hype | — | — | Lowest medians; 9.5% / 5.4% | **Agree: poor** |
| Action (broad) | — | 58% of $1M+ revenue | Action plus RPG 75% of revenue (secondary) | — | — | Totals high, medians low ($2.5k) |

Sources: as cited in the bullets above and in the Q1 matrix.

### Inferences
- **The strongest cross-source consensus pick** for per-game odds is the survival-crafting/sandbox family. It has five independent signals from four organisations spanning 2023–2026:
  - Zukowski (HTMAG): 1,000-review rates for 2024 and 2025.
  - Gamalytic: 2023 median.
  - Immutable: 2026 median, built on Gamalytic-licensed data, so not fully independent of Gamalytic.
  - WLI (Lambe et al.): 2026 median and share above $100k.
- **The strongest consensus avoid** is the 2D platformer. Puzzle and hidden object follow, with consistent but thinner evidence.
- **Disagreements mostly come from the metric.** Horror and narrative lead on raw hit counts because of sheer volume, while their medians are low. Visual novels look good on WLI's median, which excludes zero-review games, and poor on a secondary "average" claim. FPS and RPG look good on the share above $100k across all years, which includes AA/AAA titles, but are flagged as costly or over-produced for indies.
- **Survivorship bias ranking (inference).** Sources ordered from least to most survivorship-biased:
  1. Zukowski: all releases are in the denominator.
  2. Gamalytic: all releases.
  3. WLI: drops zero-review games.
  4. Immutable: base unclear.
  5. Steam Page Analyzer: 100+ reviews only.
  6. GameDiscoverCo's $1M+ analysis and the games.gg means: survivors only.

  Conclusions resting only on the last two (for example, metroidvania means) should be weighted least.

### Gaps
- **Lars Doucet:** no genre-revenue work found in this session. His known Steam analyses (from my background knowledge, not verified here) predate 2024 and would be older data in any case.
- **Ichiro Lambe:** no standalone analysis found beyond his co-authorship of the WLI report (a Totally Human Media machine-learning post on "hidden genres" exists but was not retrieved — [Totally Human Media](https://www.totallyhuman.io/blog/uncovering-steams-hidden-genres)).
- **VG Insights:** no 2024–2026 genre medians found; its genre ranking is known only through a secondary blog.
- **Older Game Developer study:** "Genre Viability on Steam and Other Trends — An Analysis Using Review Count" was found but not retrieved. — [Game Developer](https://www.gamedeveloper.com/business/genre-viability-on-steam-and-other-trends---an-analysis-using-review-count)
- **GDC talks:** none containing per-genre revenue statistics were located.
- **Next step:** with the search budget exhausted, a follow-up session with direct page access should pull the WLI "Genre Economics" charts, the Immutable 107-row table, the full HTMAG 2024 and 2025 genre tables, and the VG Insights 2024 report's genre pages.
