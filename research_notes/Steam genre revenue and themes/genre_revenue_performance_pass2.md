# Steam per-game revenue outcomes by genre, pass 2: filling the genres pass 1 missed (research notes, compiled 13 Oct 2026)

**Access and coverage**
- **No page could be opened directly.**
  - WebFetch is unavailable here.
  - I tried curl once on each of these hosts and every one returned HTTP 403 from the egress proxy: pcgamer.com, gamesradar.com, automaton-media.com, ixbt.games, gameworldobserver.com, presskit.gg, pokeindie.com, gameindustrylibrary.com and voxbooster.com. That is in addition to the hosts already known to be blocked.
- **Every figure below comes from a search-engine extract of the page it cites.** Extracts sometimes mislabel table columns. Wherever I had to infer what a row means, I say so.
- **Search budget:** I used all 60 searches allowed.
- **Pass-1 numbers:** I repeat them only where they are needed as a baseline or to complete a table, and mark them "(pass 1)".
- **Revenue figures:** all are third-party estimates, not Valve data. "Gross" means before Valve's cut, refunds and taxes.
- **Older data:** anything dated before 2024 is labelled "older data".

## Q1. Per-game outcomes for the genres pass 1 could not cover: median revenue, share above $100k/$300k/$1M, and 2024/2025 releases reaching 1,000+ reviews

### Takeaway
I found per-game outcome numbers for 13 of the 21 requested genres. Almost all of them are 1,000-review hit rates; there are only a few medians and a few We Love It shares above $100k. No source publishes a per-genre share above $300k or above $1M for any of these genres.

**Chris Zukowski's 2025 single-genre count** (all-release baseline 2.99%):
- Near the baseline: horror (3.2%) and idle/incremental (2.8%).
- Below it: racing (2.1%) and tower defense (1.8%).
- About one-third of the baseline (0.9–1.2%): automation, metroidvania, colony sim, RTS and soulslike.
- Lowest: city builders (0.5%).

**Steam Page Analyzer's tag-based count** (games released Jan 2024–Jun 2025, baseline 4.2%):
- More favourable to the same genres: metroidvania 6.2%, idler 5.6%.
- Puts cozy (11%) and life sim (8.6%) at 2.0–2.6 times its baseline.

The two sources disagree mostly because they count differently (see Inferences).

**Genres with no usable per-game statistics** in any 2024–2026 source: turn-based tactics, auto-battler, base building as a tag, MMO, dating sim, casual and extraction shooter (case studies only). Job/shop sims have only qualitative coverage. Fighting and sports have only 2023 rates (older data), plus one We Love It share above $100k for sports.

### Cited Findings

#### A. Sources new in this pass: who, when, what period, what method
- **How To Market A Game (HTMAG), "What the hell happened in 2025?", 27 Jan 2026**
  - **Sample:** 2025 releases, pulled from VG Insights on 4 Jan 2026. 20,282 releases, of which 608 reached 1,000 reviews. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
  - **Exclusions:** games based on famous IP and Chinese-only titles. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [VoxBooster summary](https://voxbooster.com/blog/indie-game-statistics-2026)
  - **Table layout:** Genre | number of games with 1,000 reviews | total released in the genre in 2025 | 2025 % | 2024 %. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
  - **Method asymmetry:**
    - The "total released" denominators come from Steam tags. In Zukowski's words, he "relied on tags to get the 'total released' number" because he could not check all 20,000 games by hand. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
    - The hits are assigned one genre each by hand (pass 1).
- **HTMAG, "What the hell happened in 2024?", 15 Jan 2025**
  - Same type of table for 2024 releases.
  - Adds a filtered view limited to games with 700+ Steam followers. — [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- **HTMAG, "What are the top selling indie games of 2023?", 25 Jan 2024 (older data)**
  - Same table structure for 2023 releases. — [HTMAG 2023](https://howtomarketagame.com/2024/01/25/what-are-the-top-selling-indie-games-of-2023/)
- **Steam Page Analyzer (SPA) "niche data" pages**
  - **Cohort:** one fixed cohort, games released 1 Jan 2024–30 Jun 2025, counted from public store-search data on 27 Sep 2026. — [SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania)
  - **Metric:** the share that "reached 1,000 reviews", with 95% intervals. SPA calls 1,000 reviews "the usual rule of thumb for roughly $150,000 in gross revenue". — [SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania)
  - **Baseline:** 4.2% of the whole cohort reached 1,000 reviews. — [SPA cozy](https://www.steampageanalyzer.com/niches/cozy)
  - **SPA's own caveat:** players add tags to games that are already popular, "which flatters the hit rates of narrow tags". It advises comparing sub-niches with each other rather than with Steam overall. Sample sizes are small, often 30–60 games per sub-tag. — [SPA idler](https://www.steampageanalyzer.com/niches/idler); [SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania)
  - **Reliability:** SPA is a commercial vendor. Pass 1 rated its genre revenue ranges as low reliability, and the site itself says its genre multiplier table is extrapolated with no measured sample behind it. — [SPA multiplier table](https://www.steampageanalyzer.com/blog/steam-review-to-sales-multiplier)
- **Immutable genre benchmarks (detail added to pass 1)**
  - **Dataset:** pulled 10 Sep 2026; 107 sub-genres, of which the published table shows 20. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
  - **Revenue method:** revenue = copies × current list price. That ignores discounts, regional pricing, bundles and refunds, so the page itself says real numbers are likely lower. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- **We Love It (WLI) top-10 list, via PC Gamer (c. late Aug 2026; the search tool dated it about 43 days before 13 Oct 2026)**
  - **Ranking:** genres ranked by "hit rate", the share of games with the tag that "made more than $100k". — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)
  - **Counting rule:** a game counts in every genre among its six most popular tags, so a roguelike FPS counts in both genres. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)

#### B. Baselines to compare against (new in this pass)
| Baseline | Value | Population / period | Source |
|---|---|---|---|
| Share reaching 1,000 reviews | 4.2% | Steam games released Jan 2024–Jun 2025, counted 27 Sep 2026 | [SPA cozy](https://www.steampageanalyzer.com/niches/cozy) |
| Median review count of a Steam game | 11 reviews | Same cohort | [SPA cozy](https://www.steampageanalyzer.com/niches/cozy) |
| Share of all titles above $100k (WLI) | 14.4% | Paid games, all release years (WLI 2026) | [Game World Observer, 1 Sep 2026](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years); [WN Hub](https://wnhub.io/news/stores-and-publishing/item-51947) |
| WLI median lifetime gross | $3,558 in one version of the report (pass 1 found $3,462 and $3,631) | Same | [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years) |
| Median Steam game | "roughly $1,000 in lifetime revenue, never reaches 10 user reviews" (2026 blog estimate drawing on VG Insights and SteamDB data) | All Steam games | [SPA median game 2026](https://www.steampageanalyzer.com/blog/median-steam-game-2026) |

The 2024 and 2025 Zukowski baselines (2.44% and 2.99%) are in pass 1.

#### C. Per-genre data matrix (thresholds exactly as each source states them)
Column guide:
- **Z 2025 [2024]:** Zukowski's count of games reaching 1,000 reviews ÷ releases carrying the genre tag. "(d)" marks a rate I derived from the counts (math shown).
- **SPA:** the share of Jan 2024–Jun 2025 releases with the tag that reached 1,000 reviews.
- **Medians:** gross revenue.
- **n/r:** not retrieved.

| Genre | Median revenue per game | Share ≥$100k | Z: reached 1,000 reviews, 2025 [2024] | SPA: reached 1,000 reviews | Volume and other signals |
|---|---|---|---|---|---|
| **Idle / incremental** | "Idler": **$2,870**; 4,358 games; median 574 copies ([Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) | n/r | **27 of 965 = 2.79%** ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)). The 2024 rate was not retrieved. An extract gives "2024 16 games" with 1,000 reviews; it may be a mid-year count ([HTMAG Q2 2025](https://howtomarketagame.com/2025/08/04/2025-q2-games-that-are-selling/)) | "Idler": **5.6% of 967**, 1.3x the 4.2% baseline ([SPA idler](https://www.steampageanalyzer.com/niches/idler)) | Idler-tagged releases: 572 (2024) → 940 (2025) → **1,566 in 2026 so far, +150%** on the same weeks of 2025 ([SPA idler](https://www.steampageanalyzer.com/niches/idler)). WN Hub: idle games on Steam grew fivefold over two years (paywalled) ([WN Hub](https://wnhub.io/news/stores-and-publishing/item-50959)) |
| **Job / shop / work sim** | n/r | n/r | No separate row. These games fall under Simulation (43/1,048) or Management (19/549) (pass 1) | n/r | Qualitative only; see section D |
| **Factory / automation** | SPA: "$200,000–$500,000+ for titles with 100+ reviews", the "highest median revenue of any indie genre". Survivorship-biased and extrapolated; low reliability ([SPA revenue data](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)) | n/r | **5 of 420 = 1.19%** [1.57%] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | Sub-niche "Automation" inside the Idler page: 13.6% ([SPA idler](https://www.steampageanalyzer.com/niches/idler)) | SPA counts factory games among the "low-refund genres" (5–10%) ([SPA refunds](https://www.steampageanalyzer.com/blog/steam-refund-rates-data)) |
| **Metroidvania** | n/r | n/r | **3 of 269 = 1.1%** [2.21%] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | **6.2% of 402**, 1.5x the baseline ([SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania)) | Silksong was the only metroidvania on Steam's weekly top-seller chart in 2026 ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-metroidvanias-are-still-coming-thick-and-fast-but-has-the-world-moved-on/)). No metroidvania appeared among early-2025 hits ([HTMAG, Apr 2025](https://howtomarketagame.com/2025/04/11/the-hit-games-of-early-2025/)) |
| **Tower defense** | n/r | n/r | **9 of 511 = 1.76%** [**8 of 557 = 1.44%**] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)) | Tower defense as a sub-tag inside the Action Roguelike page: 3.3% of 61 (95% interval 0.9–11.2%) ([SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)) | Hits: 1 in Q1 2024, 2 in Q1 2025 ([HTMAG, Apr 2025](https://howtomarketagame.com/2025/04/11/the-hit-games-of-early-2025/)); 5 by Aug 2025, against 8 in all of 2024 ([HTMAG, Aug 2025](https://howtomarketagame.com/2025/08/13/gnomes-tower-defense-with-10-month-dev-time-hits-367484/)) |
| **Auto-battler** | n/r | n/r | No row | No page found | Qualitative and anecdotal only; see section D |
| **Cozy** | Closest figure: Immutable "Farming Sim" ~$8,690 ([Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)) | n/r | No cozy row (farming is in pass 1) | **11%** (95% interval 8.9–13.7%), 2.6x the baseline. The median cozy game has 50 reviews against 11 for the median Steam game ([SPA cozy](https://www.steampageanalyzer.com/niches/cozy)) | Sub-niches and price bands in section D. The report's title cites 1,041 cozy releases; the period was not visible in the extract ([SPA cozy report](https://www.steampageanalyzer.com/blog/cozy-games-steam-2026-niche-report)) |
| **Life sim** | n/r | n/r | No row | **8.6%** (7.1–10.4%), 2.0x the baseline. Median 36 reviews; median list price $6.99 ([SPA life sim](https://www.steampageanalyzer.com/niches/life-sim)). SPA's cooking page gives 11.9% for a 67-game cut ([SPA cooking](https://www.steampageanalyzer.com/niches/cooking)) | Life Sim releases: 614 (2024) → 922 (2025) ([SPA life sim](https://www.steampageanalyzer.com/niches/life-sim)) |
| **Soulslike** | n/r | n/r | **3 of 340**: the extract gives "about 0.8%"; I compute 0.88% (d). [0.83%] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | Souls-like as a sub-tag inside the Metroidvania page: **13.3% of 45** ([SPA metroidvania](https://www.steampageanalyzer.com/niches/metroidvania)) | Among games with 700+ followers: 3 of 92 = 3.26%; cohort year unclear (see Q2) ([HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) |
| **Extraction shooter** | n/r | n/r | No row. "Multiplayer Shooter" accounted for 21 of the 608 hits in 2025; total releases n/r ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | n/r | Case data only, mostly AAA; see section D |
| **Co-op / "friendslop"** | n/r | n/r | No row | Sub-tag "Online Co-Op" inside the Action Roguelike page: **20% of 50** (interval about 11–33%) ([SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)) | Revenue scale, concentration and 2026 data in section D and Q4 |
| **Turn-based tactics** | n/r | n/r | n/r | n/r | None found |
| **RTS** | n/r | n/r | **4 of 442 = 0.9%** [0.82%] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | n/r | One extract misread the summary text as 3 of 340 for RTS. That row is the soulslike row; the table itself gives RTS as 4 of 442 |
| **Base building** | n/r | n/r | No row | Closest figure: sub-tag "Building" inside the Cozy page: 23.4% of 47 ([SPA cozy](https://www.steampageanalyzer.com/niches/cozy)) | Zukowski: tower defense hits are usually TD "plus a deeper meta layer such as basebuilding or 4X" ([HTMAG buyers guide, Jul 2025](https://howtomarketagame.com/2025/07/02/crafty-buildy-strategy-simulation-buyers-guide/)) |
| **Colony sim** | SPA: $150,000–$400,000 median, counting only titles with 100+ reviews (low reliability) ([SPA revenue data](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)). Immutable $17,300 (pass 1) | n/r | **2 of 193 = 1.0%** [**1 of 158 = 0.63%**] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/); [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)) | n/r | SPA lists colony sims among the lowest-refund genres (5–9%) ([SPA revenue data](https://www.steampageanalyzer.com/blog/indie-game-revenue-data)) |
| **MMO** | n/r | n/r | n/r | n/r | Case data only; see section D |
| **Fighting** | n/r | n/r | Older data, 2023 releases: **Fighter 6 of 80 = 7.50%** ([HTMAG 2023](https://howtomarketagame.com/2024/01/25/what-are-the-top-selling-indie-games-of-2023/)) | n/r | No 2024–2026 per-game data found |
| **Sports** | n/r | WLI: **14.8%**, rank 10 of WLI's 30 genres, all release years ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | Older data, 2023 releases: **Sports 6 of 656 = 0.91%** ([HTMAG 2023](https://howtomarketagame.com/2024/01/25/what-are-the-top-selling-indie-games-of-2023/)) | n/r | PC Gamer says sports ranks well partly because fewer games carry the tag than broader tags ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) |
| **Racing** | In WLI's lowest-median group (pass 1) | WLI 15.8%; rank 8 now confirmed ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | **14 of 654 = 2.1%** [1.34%] ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | n/r | The top-grossing new Steam release of 2026 so far is a racing game: Forza Horizon 6, $197.7M (Alinea) ([GameDev Reports](https://gamedevreports.substack.com/p/alinea-analytics-steam-reached-highest)) |
| **Visual novel** | Immutable: **$10,300**; 12,646 games; median 1,140 copies ([Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)). WLI $7,012 (pass 1). Older data: a median of $1,000–$2,000 with "over 4,000 projects" in recent years ([WN Hub, 2023 Gamalytic coverage](https://wnhub.io/news/stores-and-publishing/item-42136)) | WLI 16.5%, rank 5 ([PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)) | No visual novel row. 19 fully translated FMV visual novels were among the 2025 hits. "Sexual content": **21 of 1,846 = 1.14% (d)** ([HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)) | **4.0%**, 0.95x the baseline. Median 24 reviews; median price of paid visual novels $7.99 ([SPA visual novel](https://www.steampageanalyzer.com/niches/visual-novel)) | The most review-prone audience on Steam; see the multipliers in section D |
| **Dating sim** | n/r | n/r | n/r | n/r | Steam data: none. Only mobile or unsourced otome figures exist; see section D |
| **Casual** | n/r | n/r | n/r | n/r | Nothing found in WLI, Immutable, HTMAG or SPA extracts |

#### D. Genre detail where the evidence is qualitative, anecdotal or conflicting
- **Idle / incremental**
  - **Price bands:** most idle games are priced under $5, where 2.5% reached 1,000 reviews. The $10–$14.99 band did best at 16.1%. — [SPA idler](https://www.steampageanalyzer.com/niches/idler)
  - **Sub-niches:**
    - Cozy idle: 21.1% of 38.
    - Resource Management: 19.5%.
    - Automation: 13.6%.

    — [SPA idler](https://www.steampageanalyzer.com/niches/idler)
  - **July 2026 small-team hits** (anecdotes, survivorship by definition):
    - "Sir, We Have an Orc Problem": incremental + tower defense, 2 developers, a little over 4 months. — [HTMAG, 18 Aug 2026](https://howtomarketagame.com/2026/08/18/the-week-of-the-golden-age/)
    - "Bills Must Be Paid": incremental, 2 developers, 7 months, $6.99. — [HTMAG, 20 Aug 2026](https://howtomarketagame.com/2026/08/20/part-2-the-week-of-the-golden-age/)
- **Job / shop / work simulators** (PC Gamer "Steam Week in Review" column, 2026)
  - **Release flood:** 14 retail sims came out in one week (the week ending 26 July). The author used a narrow definition that excluded idle games with retail themes and horror games set in shops. He dates the trend to late 2024. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-a-torrent-of-janky-retail-sims-continues-to-flood-steam-and-theres-no-end-in-sight/)
  - **Weak performance:**
    - Most titles in that July table peaked at single- or double-digit concurrent players. The exceptions were Boba Cafe Simulator (7,523) and Bookshop Simulator (1,378).
    - Many are built on a $50 Unity convenience-store template.
    - Publisher Hard Shark Games' highest peak across all its listings is 13 concurrent players.

    — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-a-torrent-of-janky-retail-sims-continues-to-flood-steam-and-theres-no-end-in-sight/)
  - **Sorting and tidying sims:**
    - Librarian: Tidy Up the Arcane Library (April 2026) peaked at 29,469 concurrent players and has over 17,000 reviews, with "a dozen more" sorting games scheduled for August alone. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-games-about-sorting-1000s-of-mundane-objects-onto-shelves-is-the-new-craze-sweeping-pc-gaming/)
    - A September piece says the trend is going through the same "gold rush of low-effort iteration" as retail sims. — [PC Gamer](https://www.pcgamer.com/games/sim/steams-tidying-game-trend-is-about-to-get-the-haunted-meat-its-been-missing/)
  - **Q1 2026:** simulation overtook management, with Retro Rewind passing 5,000 reviews. — [HTMAG 2026 Q1](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
  - **Gap:** I found no revenue or hit-rate data for this sub-genre.
- **Tower defense**
  - Zukowski ties the genre's 2025 revival to tower defense "merging" with city builders. — [HTMAG, Aug 2025](https://howtomarketagame.com/2025/08/13/gnomes-tower-defense-with-10-month-dev-time-hits-367484/)
  - Anecdote: Gnomes, a tower defense game with a 10-month development time, reached $367,484 (the title does not say whether this is gross or net). — [HTMAG, Aug 2025](https://howtomarketagame.com/2025/08/13/gnomes-tower-defense-with-10-month-dev-time-hits-367484/)
  - **Unclear SPA cut:**
    - SPA's tower defense figures describe 61 games in the 2024–2025 cohort, of which 19.7% reached 100+ reviews.
    - They also show 60 releases in 2026 so far against 35 for the same period of 2025 (+71%), and 185 unreleased titles. — [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
    - That is far below Zukowski's tag counts (557 in 2024, 511 in 2025), so this is probably the tower-defense × action-roguelike overlap, not all tower defense games (inference).
- **Auto-battler**
  - Zukowski lists autobattlers among genres having "a strong moment". He highlights a pixel-art PvP autobattler on the front page of the most-played demos list in the October 2025 Next Fest. — [HTMAG, Oct 2025](https://howtomarketagame.com/2025/10/20/steam-next-fest-october-2025-checking-in-on-the-games-that-broke-through/)
  - Anecdote: "How Many Dudes?", an autobattler roguelike from 7 developers over about a year, launched 30 Jul 2026 at $14.99 and sold 242,000 units on Steam. — [HTMAG, 21 Aug 2026](https://howtomarketagame.com/2026/08/21/part-3-the-week-of-the-golden-age-how-many-dudes/)
  - No base rate was found.
- **Cozy and life sim, broken down by price and sub-niche**
  - **Cozy price bands:** 2.7% of games under $5 reached 1,000 reviews; 45.2% of games at $20 and up did. — [SPA cozy](https://www.steampageanalyzer.com/niches/cozy)
  - **Cozy sub-niches:**
    - Crafting 30% (20 games); Farming Sim 27.8%; Building 23.4% (47).
    - Idler 15.8% (57); Incremental 7.5% (40); Puzzle 5.9%.

    — [SPA cozy](https://www.steampageanalyzer.com/niches/cozy)
  - **Life sim price bands:** 2% under $5; 34.2% at $20 and up. — [SPA life sim](https://www.steampageanalyzer.com/niches/life-sim)
- **Metroidvania and soulslike**
  - PC Gamer's view: good metroidvanias keep launching, but the genre's commercial "heat" has faded. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-metroidvanias-are-still-coming-thick-and-fast-but-has-the-world-moved-on/)
  - Zukowski found it "surprising" to see no platformer, metroidvania or puzzle games among early-2025 hits. — [HTMAG, Apr 2025](https://howtomarketagame.com/2025/04/11/the-hit-games-of-early-2025/)
  - In his 2025 review, puzzle and platformers were "the least performant genres". — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
- **Extraction / multiplayer shooters**
  - **Zukowski:**
    - By the 2025 Q2 report, 7 multiplayer shooters had reached 1,000 reviews, and only one (Splitgate 2) was "still alive". He wrote that "indie developers should never make them". — [HTMAG Q2 2025](https://howtomarketagame.com/2025/08/04/2025-q2-games-that-are-selling/)
    - Over 2025 as a whole, "Multiplayer Shooter" (21 hits) displaced Open World Survival Craft from the top-10 list by hit count. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
  - **Case data** (Steam concurrent players, mostly AAA/AA, not revenue):
    - ARC Raiders peaked near 482,000 on 16 Nov 2025. By spring 2026 its 24-hour peak was 90,138, which the source calls a 79% drop measured against New Year's Day. — [players.com.ua](https://players.com.ua/en/news/arc-raiders-loses-nearly-80-of-its-steam-player-base-this-year/?amp=1); [PCGamesN](https://www.pcgamesn.com/arc-raiders/player-count-march)
    - Marathon (Mar 2026) peaked at 88,337 on launch day. — [FRVR](https://frvr.com/blog/news/marathon-player-count) Later reports put its three-month peak around 40,000 and a later 24-hour peak around 5,000. — [Insider Gaming](https://insider-gaming.com/tarkov-outpacing-arc-raiders-marathon-pc/)
    - The indie Level Zero: Extraction peaked at about 2,601 in Sep 2024, and its developer suspended further development in early 2025. — [Mezha](https://mezha.ua/en/2025/02/15/further-development-of-the-ukrainian-shooter-level-zero-extraction-has-been-suspended/amp/)
  - No count of extraction-shooter releases or failure rate was found.
- **Co-op / friendslop**
  - **Revenue scale:** Alinea estimates that games with co-op modes grossed $8.2B on Steam in 2025 ([Notebookcheck](https://www.notebookcheck.net/Games-with-co-op-modes-generated-8-2-billion-in-gross-revenue-on-Steam-in-2025.1218225.0.html)) and over $4B in H1 2025 ([GameDev Reports](https://gamedevreports.substack.com/p/alinea-analytics-co-op-games-generated)).
  - **Top sellers:** 4 of the 10 best-selling Steam games of 2025 by copies were friendslop titles, including R.E.P.O. (18.5M copies) and PEAK (15.4M). The extract did not say which outlet this came from; I infer Alinea. — [Alinea](https://alineaanalytics.substack.com/p/the-top-new-2025-games-by-players)
  - **Mid-tier example:** Mage Arena sold over 624,000 copies in a week, with "net revenue of $3,698,080". — [GameDiscoverCo](https://newsletter.gamediscover.co/p/how-two-friendslop-hits-got-the-audience)
  - **Saturation (Zukowski, Jul 2026):**
    - He analysed 16 co-op party games and concluded the genre is not saturated.
    - Concurrent players across all friendslop games: 281,000 when R.E.P.O. launched (Mar 2025); 350,000 when MECCHA CHAMELEON launched.
    - Top titles take over 50% of the friendslop player base, then fade to about 10% within 3–9 months.

    — [HTMAG, 30 Jul 2026](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated/)
  - **Gap:** no friendslop-specific count of games reaching 1,000 reviews was found.
- **MMO**
  - The only data found is one case. Ashes of Creation entered Steam Early Access in Dec 2025 at about $50. Its developer, Intrepid Studios, is closing; the headline says the game collapsed "two months after launch". — [Notebookcheck](https://www.notebookcheck.net/Entire-studio-shuttered-One-of-the-most-ambitious-MMOs-of-recent-years-collapses-two-months-after-launch.1217876.0.html)
  - No base rates were found.
- **Visual novels and adult games**
  - **2025 hits:**
    - Zukowski counted 19 fully translated FMV visual novels from Chinese studios among the 2025 games with 1,000 reviews. Without them, 32 games in "more traditional narrative" styles remain. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
    - One publisher released 138 adult visual novels in 2025.
    - "Sexual content" was 1,846 of the 20,282 releases (9.10%).

    — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)
  - **Sales per review: SPA's own pages disagree.**
    - Its lookup page puts visual novels at 15–25x (midpoint 20x) and says visual novel audiences are "the most review-prone on Steam". Its example: a visual novel with 200 reviews may have sold only 4,000 copies. — [SPA multiplier table](https://www.steampageanalyzer.com/blog/steam-review-to-sales-multiplier)
    - Its calculator uses 30x by default (range 20–45x). — [SPA calculator](https://www.steampageanalyzer.com/tools/revenue-calculator)
  - **For comparison, the calculator's defaults for other genres** (another SPA page gives strategy and simulation 25–40x instead): sports 55x, racing 50x, strategy 45x, simulation 40x. — [SPA calculator](https://www.steampageanalyzer.com/tools/revenue-calculator)
- **Dating sim** (secondary context only; not Steam data)
  - otome.com projects global otome revenue of about $5.69B in 2025, citing an unnamed "analyst consensus", and puts PC at about 15% of the market in 2023 (also unsourced). — [otome.com](https://otome.com/2025/06/06/female-gamers-are-reshaping-the-market/)
  - Sensor Tower's otome data is mobile-only. — [Sensor Tower](https://sensortower.com/blog/2025-q2-unified-top-5-otome%20games-revenue-us-60789073241bc16eb88c6e7f)

### Inferences
- **The two hit-rate sources disagree systematically, and the disagreement comes from how they count.** My explanation, not stated by either source:
  - **Zukowski's rates run low for "secondary-tag" genres.** His numerator assigns each hit one genre by hand, while his denominator counts every release carrying the tag. A hit tagged Automation but filed under Simulation, or tagged Metroidvania but filed under Soulslike, adds to one genre's denominator without adding to its numerator. Genres that usually appear as a secondary tag therefore come out low: automation, colony sim, city builder, tower defense, metroidvania and soulslike.
  - **SPA's rates run high.** It counts any game carrying the tag, and by its own admission narrow tags get "flattered" because players add tags to games that are already popular.
  - **SPA had more time.** Its cohort had 15–32 months to collect reviews, against 0–12 months for Zukowski. That fits its higher baseline (4.2% vs 2.44–2.99%).
  - **Implication:** the true tag-level rate probably lies between the two. Compare each source against its own baseline, as in the table below.

| Genre | Zukowski 2025 (÷ 2.99%) | Zukowski 2024 (÷ 2.44%) | SPA Jan 2024–Jun 2025 (÷ 4.2%) |
|---|---|---|---|
| Cozy | — | — | 2.62x (11 ÷ 4.2) |
| Life sim | — | — | 2.05x (8.6 ÷ 4.2) |
| Horror | 1.08x (3.23 ÷ 2.99) | — | — |
| Idle / idler | 0.93x (2.79 ÷ 2.99) | — | 1.33x (5.6 ÷ 4.2) |
| Visual novel | — | — | 0.95x (4.0 ÷ 4.2) |
| RPG | 0.81x (2.42 ÷ 2.99) | 0.60x (1.46 ÷ 2.44) | — |
| Racing | 0.72x (2.14 ÷ 2.99) | 0.55x (1.34 ÷ 2.44) | — |
| Tower defense | 0.59x (1.76 ÷ 2.99) | 0.59x (1.44 ÷ 2.44) | 0.79x (3.3 ÷ 4.2; sub-tag only) |
| Automation | 0.40x (1.19 ÷ 2.99) | 0.64x (1.57 ÷ 2.44) | 3.24x (13.6 ÷ 4.2; idler × automation only) |
| Metroidvania | 0.37x (1.12 ÷ 2.99) | 0.91x (2.21 ÷ 2.44) | 1.48x (6.2 ÷ 4.2) |
| Colony sim | 0.35x (1.04 ÷ 2.99) | 0.26x (0.63 ÷ 2.44) | — |
| RTS | 0.30x (0.90 ÷ 2.99) | 0.34x (0.82 ÷ 2.44) | — |
| Soulslike | 0.29x (0.88 ÷ 2.99) | 0.34x (0.83 ÷ 2.44) | 3.17x (13.3 ÷ 4.2; metroidvania × souls-like only) |
| City builder | 0.17x (0.50 ÷ 2.99) | 1.11x (2.70 ÷ 2.44) | — |

All multiples are derived.

- **What 1,000 reviews means in revenue depends on the genre (derived).** The math:
  - **Visual novels:** using SPA's 20–30x review multiplier, 1,000 reviews ≈ 20,000–30,000 copies. At the $7.99 median visual novel price that is about $160k–$240k at list price, before discounts. So for visual novels, 1,000 reviews usually means below $300k gross.
  - **Sports and racing:** at SPA's defaults (55x and 50x), 1,000 reviews implies 1.83x (55 ÷ 30) and 1.67x (50 ÷ 30) as many copies as for a visual novel at 30x.
  - These multipliers come from a vendor table that the vendor itself calls extrapolated.
- **Estimated share above $300k (derived, using pass 1's heuristic of multiplying a ≥$100k share by 0.37–0.63):**
  - Sports: 14.8% × 0.37–0.63 ≈ 5.5–9.3%.
  - Roguelite: 15.3% × 0.37–0.63 ≈ 5.7–9.6%.
  - All titles: 14.4% × 0.37–0.63 ≈ 5.3–9.1%.
  - These are all-release-year figures, so they overstate the odds for a 2025–26 release (pass 1 showed this deflation).
- **Price strongly predicts reaching 1,000 reviews in every SPA niche**, with games under $5 at 0.8–2.7% and $15–$20+ games at 16–45%. This is correlation, not causation:
  - Higher price usually comes with more scope and funding, which also drive success.
  - At a higher price, each review also represents more revenue.
- **Saturation warning for idle (inference).**
  - 2025 releases: idle already sits near Zukowski's baseline (0.93x).
  - 2026 volume: Idler-tagged releases are running 2.5x the 2025 pace in 2026 so far.
  - Precedent: pass 1 showed volume growth diluting roguelike deckbuilders' hit rate. A similar dilution for idle is plausible but not yet measured.
- **Survivorship ranking of the new evidence, least biased first:**
  1. Zukowski's 1,000-review rates (all releases in the denominator).
  2. SPA niche rates (all tagged releases, but the narrow-tag flattery noted above).
  3. Immutable medians (copies × current list price, not discounted).
  4. SPA genre revenue ranges (only titles with 100+ reviews).
  5. Anecdotes such as How Many Dudes?, Gnomes and Mage Arena (survivors by definition).

  The factory/automation and colony-sim "$150k–$500k" medians rest only on level 4.
- **Extraction shooters and MMOs:** the only evidence is collapses of big-budget games, and no source gives a release count. Indie odds in these genres cannot be quantified from what I found.

### Gaps
- **No per-game statistics** (median, hit rate or threshold share) in any 2024–2026 source for: turn-based tactics, auto-battler, base building as its own tag, MMO, dating sim, casual, job/shop sims, extraction shooter, and friendslop as a defined category.
- **No source publishes per-genre shares above $300k or above $1M** for any target genre. Zukowski's 1,000-review rate remains the nearest proxy (about $150k–$300k+).
- **Fighting and sports:** the only Zukowski rates are from 2023 releases (older data). I found no 2024 or 2025 rows for either.
- **Missing 2024 rows:** total releases for idle, horror (main table), metroidvania, racing, automation, RTS, soulslike and sexual content were not retrieved, only their 2024 percentages.
- **Unresolved definitions and conflicts:**
  - The year of the idle and soulslike 700+-follower rows.
  - What SPA's tower-defense cut (61 games) covers.
  - SPA life sim at 8.6% vs 11.9%.
  - SPA's visual novel multiplier at 20x vs 30x.
- **Unverified claim:** one search summary listed WLI's median order as "visual novel, simulation, RPG, horror, psychological horror, point-and-click, then sports", after sandbox. I could not tie it to a citable page, so it is not used above.

## Q2. Zukowski's complete genre lists for 2025 (608 of 20,282 releases) and 2024 (445 releases)

### Takeaway
**2025:** I recovered 18 genre rows with both hits and releases, plus 4 genres with hit counts only. Together they account for 368 of the 608 hits; the rest of the table remains unretrieved.

**2024:** I recovered six complete rows, the 2024 rates for 13 genres (from the 2025 table's 2024 column), and a 700+-follower subset.

**Ranking:**
- Open World Survival Craft and farming lead by a wide margin.
- Horror, idle, RPG and racing sit near the baseline.
- Secondary-tag strategy and sim genres sit at 0.2–0.6x the baseline.
- City builders and 2D platformers are at the bottom.
- By raw hit count, narrative, simulation and horror lead.

### Cited Findings
**2025 top 10 by hit count:** Narrative 51, Simulation 43, Horror 39, RPG 28, Idle/Incremental 27, Roguelike 22, Sexual content 21, Multiplayer Shooter 21 ("Back again"), Shooter 21, Management 19.
- Zukowski: "9 out of the 10 genres at the top of the list in 2025 were exactly the same as the years previous". Multiplayer Shooter replaced Open World Survival Craft.

— [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)

**2025 rate table, every retrieved row.** Sorted by 2025 rate. Pass-1 rows are marked P1. "(d)" = derived.

| Genre | Reached 1,000 reviews (2025) | Released 2025 | 2025 rate | 2024 rate | 2024 hits / released | × 2.99% (d) |
|---|---|---|---|---|---|---|
| Open World Survival Craft (P1) | 15 | 72 | 20.8% | 24.47% | **23 / 94** | 7.0x |
| Farming (P1) | 5 | 60 | 8.3% | 20.83% | **10 / 48** | 2.8x |
| Roguelike Deckbuilder (P1) | 11 | 212 | 5.1% | 6.7% | n/r | 1.7x |
| Simulation (P1) | 43 | 1,048 | 4.1% | 3.8% | n/r | 1.4x |
| Management (P1) | 19 | 549 | 3.4% | 5.4% | n/r | 1.1x |
| **Horror** | 39 | 1,208 | 3.23% (d) | n/r | 47 / n/r (700+-follower subset: 47 / 383) | 1.08x |
| **Idle / Incremental** | 27 | 965 | 2.79% | n/r | n/r | 0.93x |
| **RPG** | 28 | 1,158 | 2.42% (d) | 1.46% (d) | **17 / 1,161** | 0.81x |
| **Racing** | 14 | 654 | 2.1% | 1.34% | n/r | 0.72x |
| **Tower Defense** | 9 | 511 | 1.76% | 1.44% | **8 / 557** | 0.59x |
| **Automation** | 5 | 420 | 1.19% | 1.57% | n/r | 0.40x |
| **Sexual content** | 21 | 1,846 | 1.14% (d) | n/r | n/r | 0.38x |
| **Metroidvania** | 3 | 269 | 1.1% | 2.21% | n/r | 0.37x |
| **Colony Sim** | 2 | 193 | 1.0% | 0.63% | **1 / 158** | 0.35x |
| **RTS** | 4 | 442 | 0.9% | 0.82% | n/r | 0.30x |
| **Souls-like** | 3 | 340 | ~0.8% as given; 0.88% (d) | 0.83% | n/r | 0.29x |
| City Builder (P1 for 2025) | 2 | 397 | 0.5% | **2.70%** | **10 (d) / 370** | 0.17x |
| 2D Platformer (P1) | 3 | 1,658 | 0.18% | 0.25% | n/r | 0.06x |
| Narrative | 51 (32 without the 19 FMV visual novels) | n/r | n/r | n/r | 30 hits in 2024 (P1) | — |
| Roguelike | 22 | n/r | n/r | n/r | n/r | — |
| Multiplayer Shooter | 21 | n/r | n/r | n/r | n/r | — |
| Shooter | 21 | n/r | n/r | n/r | n/r | — |

Sources:
- 2025 columns and the 2024 percentages: [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/).
- 2024 counts: [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/).
- City builder 2024 releases (370) and colony sim 2024 (1 of 158): [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/).
- The 2025 table rows "City Builder | 2 | 397 | 0.5% | 2.70%", "Automation | 5 | 420 | 1.19% | 1.57%" and "Colony Sim | 2 | 193 | 1.0% | 0.63%" were quoted verbatim in an extract of [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/).

**Derived values:**

| Value | Math |
|---|---|
| Horror 2025 rate | 39 ÷ 1,208 = 3.23% |
| RPG 2025 rate | 28 ÷ 1,158 = 2.42% |
| RPG 2024 rate | 17 ÷ 1,161 = 1.46% |
| Sexual content 2025 rate | 21 ÷ 1,846 = 1.14% |
| Souls-like 2025 rate | 3 ÷ 340 = 0.88% |
| City builder 2024 hits | 2.70% × 370 = 10.0 |
| Multiples (last column) | 2025 rate ÷ 2.99% |

**Filtered view: only games with 700+ Steam followers**
- **2024:** Farming 52.63%, Open World Survival Craft 40.35%. — [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- **Horror · 47 · 383 · 12.27%.** The extract did not label the columns. I read it as 47 hits among 383 horror games with 700+ followers in 2024: 383 is far too small to be all 2024 horror releases (2025 had 1,208), and 47 matches 2024's horror hit count. — [HTMAG 2024](https://howtomarketagame.com/2025/01/15/what-the-hell-happened-in-2024/)
- **Idle · 20 · 87 · 22.99%** and **Souls-like · 3 · 92 · 3.26%.** The extract labels these as 2024 releases with 700+ followers, but the idle row's 20 hits conflicts with an extract giving 16 idle hits in 2024, so the cohort year is unclear. — [HTMAG](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)

**Older rows (2023 releases, older data):** Fighter 6 / 80 = 7.50%; Sports 6 / 656 = 0.91%. The column labels were confirmed: games reaching 1,000 reviews | total released in 2023 | percentage. — [HTMAG 2023](https://howtomarketagame.com/2024/01/25/what-are-the-top-selling-indie-games-of-2023/)

**Method notes**
- Zukowski: "determining the genre off the tags is very hard". — [HTMAG 2023](https://howtomarketagame.com/2024/01/25/what-are-the-top-selling-indie-games-of-2023/)
- The 1,000-review counts come from aggregators such as VG Insights rather than Steam store pages, because store pages split reviews by region. — [HTMAG 2025](https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/)

### Inferences
- **Coverage of the 2025 table (derived).** The retrieved rows sum to 368 hits:
  - OWSC 15 + farming 5 + RDB 11 + simulation 43 + management 19 = 93
  - + horror 39 + idle 27 + RPG 28 + racing 14 + TD 9 = 210
  - + automation 5 + sexual content 21 + metroidvania 3 + colony sim 2 + RTS 4 + soulslike 3 + city builder 2 + 2D platformer 3 = 253
  - + narrative 51 + roguelike 22 + multiplayer shooter 21 + shooter 21 = **368**

  That is 368 ÷ 608 = 60.5% of hits. About 240 hits (39.5%) sit in rows not retrieved, for example action, adventure, puzzle, FPS, card and strategy games. This assumes each hit counts in only one row, which is not confirmed for the rate table.
- **Most 2024→2025 swings are within noise.**
  - With 1–14 hits per genre, a change of one or two hits moves the rate by 10–50% in relative terms. For example, colony sim went from 1 to 2 hits.
  - **Larger drops that look real:**
    - City builder: 2.70% → 0.5%, i.e. about 10 hits → 2.
    - Farming: 20.83% → 8.3%, i.e. 10 hits → 5.
    - Metroidvania: 2.21% → 1.1%.
  - **Possible improvements:** racing (1.34% → 2.1%) and tower defense (1.44% → 1.76%). Both are small samples.
- **The 700+-follower filter multiplies rates by about 2–5x** (farming 20.83% → 52.63%; OWSC 24.47% → 40.35%; horror ≈ 12% among followed games). Much of the per-genre gap is therefore explained by pre-launch traction rather than genre alone. This is an inference: the filter is a marker of marketing reach and quality, not a cause.

### Gaps
- **2025 table:** release counts for Narrative, Roguelike, Multiplayer Shooter and Shooter, and any further rows (for example puzzle, point-and-click, deckbuilder, bullet heaven, visual novel, sports, fighting, casual), were not retrieved.
  - One summary claimed point-and-click also reached "three of 1,658". That looks like a mix-up with the 2D platformer row, so I did not use it.
- **2024 table:** release totals for most genres were not retrieved. One unidentified 2024 genre had 656 releases and a 3.05% rate (about 20 hits, derived).
- **Total 2024 releases:** sources give 18,234, 18,239 and 18,324 (pass 1 and this brief). I could not resolve which is correct.

## Q3. The complete per-genre tables in We Love It's "Steam Revenue Report" (Aug 2026, refreshed Oct 2026) and Immutable's sub-genre medians (Sep 2026)

### Takeaway
**We Love It:** the top-10 list by share above $100k is now complete; ranks 9 and 10 are roguelite (15.3%) and sports (14.8%). Together with pass 1's three lowest values, 13 of WLI's 30 genres have known hit rates. Apart from sandbox, FPS and RPG, every genre retrieved sits within 1.03–1.17x of the platform-wide 14.4%. Only two exact WLI medians are known (sandbox and visual novel).

**Immutable:** 15 of the 20 published rows are now known. New this pass: visual novel $10,300, RPG $9,770, farming sim ~$8,690, idler $2,870 and puzzle $2,390, plus game and copy counts for several rows.

I found nothing on whether the October 2026 refresh of WLI changed any genre values.

### Cited Findings
**WLI share of games that "made more than $100k" (all release years; a game counts toward a genre when the tag is one of its top six)**

| Rank | Genre | Share >$100k | × the 14.4% all-title share (derived) |
|---|---|---|---|
| 1 | Sandbox | 27.3% | 1.90x |
| 2 | FPS | 21.6% | 1.50x |
| 3 | RPG | 19.4% | 1.35x |
| 4 | Simulation | 16.9% | 1.17x |
| 5 | Visual Novel | 16.5% | 1.15x |
| 6 | Horror | 16.1% | 1.12x |
| 7 | Strategy | 16.1% | 1.12x |
| 8 | Racing | 15.8% | 1.10x |
| 9 | **Roguelite** | **15.3%** | 1.06x |
| 10 | **Sports** | **14.8%** | 1.03x |
| — | All titles | 14.4% | 1.00x |
| (P1) | Puzzle / 2D Platformer / Hidden Object | 9.5% / 5.5% / 5.4% | 0.66x / 0.38x / 0.38x |

Sources:
- Ranks 1–10: [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/).
- 14.4%: [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years) and [WN Hub](https://wnhub.io/news/stores-and-publishing/item-51947). I did not establish which outlet first printed it.
- PC Gamer notes that horror and strategy are tied, so their order is arbitrary. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)

**Other WLI facts**
- Lowest medians: racing, puzzle, arcade and platformer, "around $1,000 or less". — [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years)
- Attribution: coverage describes the report as coming from Totally Human Media's We Love It site, and credits its 2026-cohort figures to Totally Human Media and VaporLens. — [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years); [Mezha](https://mezha.ua/en/news/steam-games-statistics-315726/)
- Conflict with pass 1: GamesRadar's "Action RPG 19%" (pass 1) does not appear in PC Gamer's top 10. If an action-RPG genre scored 19%, it would rank fourth. Either action RPG is not one of WLI's 30 genres, or GamesRadar's 19% refers to RPG (19.4–19.5%). — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-here-are-the-top-10-most-popular-genres-on-steam/)

**Immutable sub-genre medians (gross; copies × current list price; dataset pulled 10 Sep 2026)**

| Sub-genre | Games | Median copies | Median gross | Implied price = gross ÷ copies (derived) | Status |
|---|---|---|---|---|---|
| Open World Survival Craft | 684 | 7,290 | $102,000 | ~$13.99 | Game and copy counts new; median P1 |
| 4X | 648 | 3,900 | $50,000 | ~$12.82 | P1 |
| Colony Sim | 1,167 | 2,280 | $17,300 | ~$7.59 | P1 |
| Grand Strategy | n/r | n/r | $14,700 | — | P1 (attribution to Immutable inferred) |
| **Visual Novel** | 12,646 | 1,140 | **$10,300** | ~$9.04 | New |
| **RPG** | 24,666 | 979 | **$9,770** | ~$9.98 | New |
| **Farming Sim** | n/r | n/r | **~$8,690** | — | New |
| Adventure | n/r | n/r | $6,520 | — | P1 |
| *Median of all 107 sub-genres* | | | *$4,837* | | P1 |
| Strategy | 27,804 | n/r | $4,040 | — | P1 (attribution inferred) |
| **Idler** | 4,358 | 574 | **$2,870** | ~$5.00 | New |
| Horror | n/r | n/r | $2,590 | — | P1 |
| Action | n/r | n/r | $2,530 | — | P1 |
| **Puzzle** | 26,452 | 477 | **$2,390** | ~$5.01 | New |
| Survival Horror | 5,430 | 683 | $2,050 | ~$3.00 | P1 |
| 2D Platformer | n/r | n/r | $1,040 | — | P1 |

— [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)

**Immutable's own notes**
- Revenue within a genre follows a power law, so averages are "dragged upward by a few outliers", which is why it reports medians. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- Only about 1.5% of the roughly 20,000 games released in 2025 crossed $1M. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)
- Immutable sells marketing services, which is a possible conflict of interest. — [Immutable](https://www.immutable.com/insights/steam-genre-revenue-benchmarks)

### Inferences
- **WLI's genre spread is compressed (derived).**
  - Ranks 4–10 sit within 1.03–1.17x of the 14.4% all-title share. That leaves only sandbox (1.90x), FPS (1.50x) and RPG (1.35x) clearly above the market.
  - Two features of the method plausibly flatten genre differences: counting every top-six tag, and pooling every release year since the store began (pass 1).
  - WLI's ≥$100k rates are therefore a weak tool for separating mid-table genres. Zukowski's 2025 single-genre rates spread much wider (0.06x–7.0x).
- **The 35x standard multiplier likely skews some genres (derived; assumes WLI applies one multiplier to every genre, as pass 1 reported).**
  - **Visual novels:** if their true ratio is SPA's 20–30x, WLI's 35x standard overstates them by 35 ÷ 20 = 1.75x to 35 ÷ 30 = 1.17x. That gives an adjusted median of about $7,012 ÷ 1.75 ≈ $4,000 to $7,012 ÷ 1.17 ≈ $6,000, and a correspondingly lower hit rate.
  - **Sports (55x) and racing (50x):** 35x would understate them by 1.57x and 1.43x. Racing's "≈$1,000 or less" median might then be about $1,400.
  - These adjustments rest on a vendor multiplier table the vendor calls extrapolated, so treat them as directional.
- **Immutable's medians track standard price points (derived).**
  - Gross ÷ copies lands almost exactly on $13.99, $9.99, $4.99–5.00 and $2.99.
  - That suggests each median is effectively "median copies × the list price of the middle-ranked titles". Combined with the roughly 20-title midpoint sample (pass 1), a sub-genre's median is highly sensitive to the price of a few mid-ranked games.
  - Undiscounted list price also makes all Immutable medians overstate realised gross.
- **Visual novels are the clearest disagreement between sources:**
  - Immutable median $10,300 (2.1x its cross-sub-genre median: 10,300 ÷ 4,837).
  - WLI $7,012 and 16.5% (1.15x).
  - SPA hit rate 4.0% (0.95x its baseline).
  - Older Gamalytic data: $1k–$2k.

  A plausible explanation is that review-based estimators overstate visual novel sales because visual novel buyers review unusually often. This is an inference.

### Gaps
- **WLI:**
  - Share above $100k for 17 of the 30 genres (for example casual, action, adventure, arcade, point-and-click, open world, survival, metroidvania, card or deckbuilding, fighting, MMO, city builder and tower defense, assuming those are among the 30).
  - Medians for 28 of 30 genres.
  - All top-decile dollar values.
  - The year-relative genre medians.
  - The full list of the 30 genres.
  - Whether the 10 Oct 2026 refresh (about 102,481 games, pass 1) changed any genre values.
- **Immutable:** 5 of the 20 published rows (2 of the "known" rows are only inferred to be Immutable's), the other 87 sub-genres, and game and copy counts for 4X-style rows that lack them.

## Q4. Is there any 2026-cohort data (games released January–September 2026) broken down by genre?

### Takeaway
No source yet gives 2026 per-genre release counts paired with outcome rates or medians; Zukowski's annual tables appear in late January. What exists:
- Zukowski's Q1 2026 hit counts by genre: friendslop 3, horror 3 (vs 7 at the same point of 2025), idle 4 (vs 5).
- His friendslop and July 2026 small-team-hit analyses.
- SPA's 2026 release-volume surges: Idler +150%, and +71% in a tower-defense cut.
- Platform-wide 2026 cohort statistics:
  - H1 2026 (WN Hub): median $196, 67% under $1,000, 1.2% over $1M, 95th percentile $130,000.
  - WLI: $1,728 median for paid releases with at least one review.
  - Alinea: 2026 releases took only 21% of H1 2026 Steam revenue.

### Cited Findings
- **Q1 2026 hits (HTMAG, 14 May 2026)**
  - Friendslop had the most games reaching 1,000 reviews by the end of Q1, with three: YAPYAP, Super Battle Golf and Roadside Research.
  - Horror: 3, against 7 at the same point of 2025.
  - Idle: 4 (Berry Bury Berry, Scritchy Scratchy, Gamblers Table, Horripilant), against 5 at the same point of 2025.
  - Simulation overtook management; Retro Rewind passed 5,000 reviews in Q1.
  - Sin Spire, which is horror-themed, was the only adult title to reach 1,000 reviews in Q1.

  — [HTMAG 2026 Q1](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
- **Competition ratio:** the ratio of games with 0–9 reviews to games with 1,000+ reviews rose from 26 to 1 in 2024 to 38 to 1 in 2026. — [HTMAG 2026 Q1](https://howtomarketagame.com/2026/05/14/2026-q1-games/)
- **Friendslop, Jul 2026:** see Q1 section D for the analysis of 16 games, the concurrent-player peaks and the fade pattern. No 1,000-review count was given. — [HTMAG, 30 Jul 2026](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated/)
- **July 2026 small-team bestsellers:** Sir, We Have an Orc Problem (incremental + tower defense); Bills Must Be Paid (incremental); How Many Dudes? (autobattler roguelike, 242,000 units). — [HTMAG part 1](https://howtomarketagame.com/2026/08/18/the-week-of-the-golden-age/); [part 2](https://howtomarketagame.com/2026/08/20/part-2-the-week-of-the-golden-age/); [part 3](https://howtomarketagame.com/2026/08/21/part-3-the-week-of-the-golden-age-how-many-dudes/)
- **Other 2026 HTMAG posts that exist but were not retrieved:**
  - "2026 State of Bullet Heavens" (19 May 2026). — [HTMAG](https://howtomarketagame.com/2026/05/19/2026-state-of-bullet-heavens-how-vital-shell-succeeded/)
  - "You probably shouldn't launch a horror game in October" (8 Sep 2026). — [HTMAG](https://howtomarketagame.com/2026/09/08/horror-games-dont-need-to-launch-in-october/)
- **2026 release volume by genre**
  - Idler: 1,566 releases in 2026 so far, +150% on the same weeks of 2025. — [SPA idler](https://www.steampageanalyzer.com/niches/idler)
  - SPA's tower-defense cut: 60 vs 35 (+71%). — [SPA action roguelike](https://www.steampageanalyzer.com/niches/action-roguelike)
  - 14 retail sims in a single week in July. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-a-torrent-of-janky-retail-sims-continues-to-flood-steam-and-theres-no-end-in-sight/)
  - More than 300 games released in one week of June 2026, 120 of them with AI disclosures. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-more-than-300-games-released-on-steam-last-week-and-120-of-them-had-ai-disclosures/)
  - In 2026, Silksong (January) was the only metroidvania on the weekly top-seller chart. — [PC Gamer](https://www.pcgamer.com/gaming-industry/steam-week-in-review-metroidvanias-are-still-coming-thick-and-fast-but-has-the-world-moved-on/)
- **Platform-wide 2026 cohort statistics (no genre split)**
  - **WN Hub, H1 2026 (paywalled; data provider not visible in the extract):** almost 12,000 new releases; median revenue $196; 67% earned under $1,000; 1.2% passed $1 million; the 95th-percentile release earned $130,000. — [WN Hub](https://wnhub.io/news/stores-and-publishing/item-51469)
  - **SteamDB:** 11,979 releases in H1 2026. — [Game World Observer](https://gameworldobserver.com/2026/09/01/the-median-revenue-of-games-on-steam-has-been-declining-for-12-consecutive-years)
  - **Totally Human Media / VaporLens (WLI authors):** the $1,728 median for 2026 paid releases to 1 Sep (pass 1) excludes paid games with no reviews and is estimated from review counts. Sources say this method difference likely explains the gap with WN Hub's $196. — [Mezha](https://mezha.ua/en/news/steam-games-statistics-315726/)
  - **Alinea, H1 2026:**
    - Steam grossed $11.1B, up 14.5% year on year.
    - Titles launched in 2026 took 21% of that revenue, down from 27% in 2025 and 29% in 2024.
    - Top new releases: Forza Horizon 6 ($197.7M), Resident Evil Requiem ($194.5M) and Crimson Desert ($190.1M).
    - Alinea credits growth partly to Asian (especially Chinese) users, higher new-release prices, viral co-op hits and the return of major publishers.

    — [GameDev Reports](https://gamedevreports.substack.com/p/alinea-analytics-steam-reached-highest); [WN Hub](https://wnhub.io/news/analytics/item-51407); [Alinea](https://alineaanalytics.substack.com/p/steam-is-having-another-record-year)

### Inferences
- **Expected timing (inference from cadence):** the first full 2026 genre table from Zukowski would normally appear in late January 2027. His 2024 and 2025 posts appeared on 15 Jan 2025 and 27 Jan 2026.
- **Only same-point comparisons are valid for 2026.** Full-year 2024/25 rates cannot be compared with a partial 2026 cohort, because review counts are still accumulating. The Q1-vs-Q1 counts can be compared:
  - Horror: −57% (7 → 3).
  - Idle: −20% (5 → 4).
  - Both counts are tiny, so these are signals, not trends.
- **2026 odds per release look tougher (derived):**
  - The 0–9 to 1,000+ ratio worsened by 38 ÷ 26 = 1.46x.
  - The new-release share of revenue fell from 27% to 21% while releases kept rising.
  - By definition of the 95th percentile, 5% of H1 2026 releases had earned at least $130,000 by mid-year, and 1.2% had passed $1M. These partial-year, censored figures are not comparable with pass 1's full-year 2025 figures (8% above $100k; about 1.5% above $1M; different sources).
- **The visible 2026 small-team hits cluster in incremental, tower-defense and autobattler hybrids, plus friendslop.**
  - This is anecdotal and survivorship-biased.
  - It coincides with a 2.5x surge in Idler releases, which may dilute that niche's odds later in the year (inference).
- **Derived revenue figure:** How Many Dudes? at 242,000 units × $14.99 ≈ $3.63M gross at list price. This is an upper bound: discounts and regional pricing lower realised revenue.

### Gaps
- **Missing 2026 genre data:** release counts paired with outcome rates or medians, for any genre, from any source.
- **WN Hub H1 2026:** I could not see its genre breakdowns, if any, or its data provider.
- **No 2026 cohort data at all** for: cozy/life sim (SPA's cohort ends Jun 2025), metroidvania, soulslike, RTS, colony sim, automation, sports, racing, fighting, MMO, visual novel, dating sim or casual.
- **Unread 2026 posts:** "2026 State of Bullet Heavens" and the horror-timing post were not retrieved.
