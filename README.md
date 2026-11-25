# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/ukyo9k/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/ukyo9k/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the [make.fun bounty "Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02) ($500 total, top 50 share).

Five posts from [@Ukyo9k](https://x.com/Ukyo9k) on X, each a quote of, or a direct reply to, a different one of [@makefunai](https://x.com/makefunai)'s newest posts, each carrying make.fun / @makefunai and the play code `makefun-isthmus-whistle-solar` in its own words. Score: 2 points per repost and per quote, 1 per like, summed over all five posts.

## The posts

1. https://x.com/Ukyo9k/status/2125654792672535007 — quote of make.fun post 2125610034209939567
2. https://x.com/Ukyo9k/status/2125648775804747841 — reply to make.fun post 2125609728088666351
3. https://x.com/Ukyo9k/status/2125654026742026480 — quote of make.fun post 2125375203744391226
4. https://x.com/Ukyo9k/status/2125651343033487857 — reply to make.fun post 2125247026728235268
5. https://x.com/Ukyo9k/status/2125654290647916678 — quote of make.fun post 2125246707512553850

The full list lives in [`POSTS.json`](POSTS.json).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POSTS.json` to `$MAKEFUN_OUTPUT_DIR/POSTS.json`, byte-for-byte, and verifies the copy matches. No network, no secrets, deterministic.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
