import { SITE_URL } from "@/helper/BASE_URL";

export const content = {
  soldOutTickets: { total: 1000, sold: 600 },
  users: [{ id: 1, name: "Wilson", image: "/User_01.jpg" }],
  winnersSoFar: 4352,
  playerA: "Catherine",
  playerB: "Sonia",
  gameDates: {
    coinQuest: {
      coinQuestUsdt: "01 May 2024 23:20:00",
      coinQuestEth: "01 May 2024 12:33:00",
      coinQuestBnb: "29 April 2024 23:44:00",
      coinQuestXrp: "30 April 2024 00:30:00",
    },
    jackpotMadness: "01 April 2024 21:33:00",
    dreamzDual: {
      miniBlast: "29 April 2024 22:28:00",
      powerBlast: "29 April 2024 21:33:00",
      superBlast: "29 April 2024 21:33:00",
      megaBlast: "29 April 2024 21:33:00",
      dreamzBlast: "29 April 2024 21:33:00",
    },
    dreamzThree: "01 April 2024 21:33:00",
  },
  menus: {

    homeMenu: [
      // { name: "Trending", url: "#trending" },
      { name: "Games", url: SITE_URL+"#games" },
      { name: "Promotions", url: "#promotions" },
      { name: "Winners", url: "#winners" },
      // { name: "FAQ", url: "#faq" },
    ],

    sideMenu: [
      {
        name: "preSale",
        displayTitle: "",
        showTitle: false,
        content: [

          {
            name: "Early Pre-Sale Live",
            containsIcon: true,
            icon: "/nav-icons/nav-img-2.png",
            route: "/games",
            externalWebsite: "https://earlybird.dreamgamez.io",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,
          },
        ],
      },
      {
        name: "games",
        displayTitle: "DreamZ Games",
        showTitle: true,
        content: [
          {
            name: "coin quest",
            containsIcon: true,
            icon: "/nav-icons/nav-img-3.png",
            route: "/games/coin-quest",
            hasSubMenu: false,
            subMenuItems: [
            ],
            highlight: false,

          },
          {
            name: "jackpot madness",
            containsIcon: true,
            icon: "/nav-icons/nav-img-4.png",
            route: "/games/jackpot-madness",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,

          },
          {
            name: "dreamz dual",
            containsIcon: true,
            icon: "/nav-icons/nav-img-5.png",
            route: "/games/dreamz-dual",
            hasSubMenu: true,
            subMenuItems: [
              { name: "Landing", route: "/games/dreamz-dual" },
              { name: "Mini Blast", route: "/games/dreamz-dual/mini-blast" },
              { name: "Power Blast", route: "/games/dreamz-dual/power-blast" },
              { name: "Super Blast", route: "/games/dreamz-dual/super-blast" },
              { name: "Mega Blast", route: "/games/dreamz-dual/mega-blast" },
              { name: "Dreamz Blast", route: "/games/dreamz-dual/dreamz-blast" },
            ],
            highlight: false,

          },
         
        ]
      },
      {
        name: "coinQuest",
        displayTitle: "Coin Quest- Win Free DMZT",
        showTitle: true,
        content: [
          {
            name: "Daily - $750",
            containsIcon: true,
            icon: "/nav-icons/nav-img-3.png",
            route: "",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,
          },
          {
            name: "Weekly - $00",
            containsIcon: true,
            icon: "/nav-icons/nav-img-4.png",
            route: "",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,
          },
          {
            name: "Monthly - $00",
            containsIcon: true,
            icon: "/nav-icons/nav-img-5.png",
            route: "",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,
          }
        ],
      },
      {
        name: "others",
        displayTitle: "",
        showTitle: false,
        content: [
          {
            name: "Promotions",
            containsIcon: true,
            icon: "/nav-icons/nav-img-2.png",
            route: "/#promotions",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,
          },
          {
            name: "100K Challenge",
            containsIcon: true,
            icon: "/nav-icons/nav-img-7.png",
            route: "/challenge",
            hasSubMenu: false,
            subMenuItems: [],
            highlight: false,

          },
        ],
      },
    ],
    cqMenu: [
      { name: "Games", url: SITE_URL+"#games" },
      { name: "How To Play", url: "#how-to-play" },
      { name: "Winners", url: "#winners" },
      // { name: "FAQs", url: "#faq" },
    ],
    cqGameMenu: [
      { name: "Popular Entries", url: "#popular-entries" },
      { name: "Activity", url: "#activity" },
      { name: "Games", url: SITE_URL+"#games" },
      { name: "Rules", url: "#how-to-play" },
      { name: "Winners", url: "#winners" },
    ],
    jackpotGameMenu: [
      { name: "Prizes", url: "#prize" },
      { name: "Play", url: "#play" },
      { name: "Popular Entries", url: "#popular-entries" },
      { name: "Rules", url: "#how-to-play" },
      { name: "Winners", url: "#winners" },
    ],
    dreamDualGameMenu: {
      landing: [
        { name: "Live Games", url: "#games" },
        { name: "Rules", url: "#how-to-play" },
        { name: "Winners", url: "#winners" },
        // { name: "FAQ", url: "#faq" },
      ],
      games: [
        { name: "Winners", url: "#winners" },
        { name: "Live Games", url: "#games" },
      ],
    },
    dreamThreeGameMenu: [
      { name: "Prize", url: "#prize" },
      { name: "Pools", url: "#pools" },
      { name: "Activity", url: "#activity" },
      { name: "Games Rules", url: "#how-to-play" },
      { name: "Draw", url: "#draw" },
      { name: "Winners", url: "#winners" },
    ],
    cartMenu: [],
    aboutMenu: [],
    userSubMenuItems: [
      { id: 1, itemName: "Profile", route: "" },
      { id: 2, itemName: "Earnings", route: "" },
      { id: 3, itemName: "Logout", route: "" },
    ],
  },
  gameBarItems: [
    {
      name: "Promotions",
      href: "#promotions",
      image: "/category-icon-05.png",
    },
    {
      name: "Coin Quest",
      href: "#coin-quest",
      image: "/category-icon-01.png",
    },
    {
      name: "Jackpot Madness",
      href: "#jackpot",
      image: "/category-icon-03.png",
    },
    {
      name: "DreamZ Dual",
      href: "#dreamz-dual",
      image: "/category-icon-02.png",
    },
    {
      name: "DreamZ 3",
      href: "#dreamz-three",
      image: "/category-icon-04.png",
    },
  ],
  analyticsData: [
    {
      value: 100,
      name: "Registered Users",
      image: "/analytics-icon-01.png",
    },
    {
      value: 100,
      name: "Rewards Distributed",
      image: "/analytics-icon-02.png",
    },
    { value: 2000, name: "Winners", image: "/analytics-icon-01.png" },
  ],
  sectionData: {
    trendingGames: {
      title: "Trending Games",
      description: "",
      buttonContent: "show all",
    },
    gameGenres: {
      title: "Game Genres",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sit voluptas consectetur suscipit aspernatur, impedit ipsa soluta ullam laboriosam earum molestias, et ea repellat, voluptatibus molestiae corporis tempora illo non!",
      buttonContent: "find out more",
    },
    promotions: {
      title: "Promotions",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sit voluptas consectetur suscipit aspernatur, impedit ipsa soluta ullam laboriosam earum molestias, et ea repellat, voluptatibus molestiae corporis tempora illo non!",
      buttonContent: "find out more",
    },
    coinQuest: {
      title: "Coin Quest",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sit voluptas consectetur suscipit aspernatur, impedit ipsa soluta.",
      buttonContent: "show all",
    },
    dreamzDual: {
      title: "DreamZ Dual",
      description:
        "",
      buttonContent: "show all",
    },
    dreamzThree: {
      title: "DreamZ 3",
      description:
        "",
      buttonContent: "show all",
    },
    dreamzCasual: {
      title: "DreamZ Casual",
      description:
        "",
      buttonContent: "show all",
    },
  },
  gameGenres: [
    {
      id: 1,
      name: "coin quest",
      image: "/Thumbnail-Art_01.jpg",
      color: "#4A3A1B",
      route: "/games/coin-quest",
      comingSoon: false,
    },
    {
      id: 2,
      name: "jackpot madness",
      image: "/Thumbnail-Art_03.jpg",
      color: "#705B34",
      route: "/games/jackpot-madness",
      comingSoon: false,
    },
    {
      id: 3,
      name: "dreamz dual",
      image: "/Thumbnail-Art_02.jpg",
      color: "#132C4A ",
      route: "/games/dreamz-dual",
      comingSoon: true,
    },
    {
      id: 4,
      name: "dreamz three",
      image: "/Thumbnail-Art_04.jpg",
      color: "#344F70",
      route: "/",
      comingSoon: true,
    },
    // {
    //   id: 5,
    //   name: "spin The wheel",
    //   image: "/Thumbnail-Art_05.jpg",
    //   color: "#806C48",
    //   route: "/games/spin-wheel",
    //   comingSoon: true,
    // },
    {
      id: 6,
      name: "dreamz casual",
      image: "/Thumbnail-Art_06.jpg",
      color: "#562970",
      route: "/",
      comingSoon: true,
    },
  ],
  promotionsCardData: [
    {
      id: 1,
      title: "Play Free & Earn Big!",
      caption: "",
      image: "/Play-Free-BG-07.jpg",
      btnText: "Play Now!",
      route: "/",
    },
    {
      id: 2,
      title: "Spin The Wheel",
      caption: "Get Ready To Win!",
      image: "/Spin-The-Wheel-BG-01.jpg",
      btnText: "Spin Now!",
      route: "/",
    },
    {
      id: 3,
      title: "Refer A Friend & Earn USDT",
      caption: "Every Referral = 0.5 USDT",
      image: "/Refer-Friend-BG-05.jpg",
      btnText: "Refer & Earn!",
      route: "/",
    },
  ],
  coinQuestCardsData: [
    {
      id: 1,
      currency: "eth",
      name: "3 eth",
      image: "/Thumbnail-Art_01.jpg",
      route: "/games/coin-quest/eth",
      amount: "10 usdt",
      prizeValue: "100$",
      bettingslots: "1000",
      timeline: "30 days or early",
      winningscheme: "guaranteed winner",
      soldOutTickets: { total: 1000, sold: 600 },
    },
    {
      id: 2,
      currency: "xrp",
      name: "10000 xrp",
      image: "/Thumbnail-Art_01.jpg",
      route: "/games/coin-quest/xrp",
      amount: "10 usdt",
      prizeValue: "100$",
      bettingslots: "1500",
      timeline: "30 days or early",
      winningscheme: "guaranteed winner",
      soldOutTickets: { total: 1000, sold: 400 },
    },
    {
      id: 3,
      currency: "bnb",
      name: "bnb 10",
      image: "/Thumbnail-Art_01.jpg",
      route: "/games/coin-quest/bnb",
      amount: "10 usdt",
      prizeValue: "100$",
      bettingslots: "500",
      timeline: "30 days or early",
      winningscheme: "guaranteed winner",
      soldOutTickets: { total: 1000, sold: 800 },
    },
    {
      id: 4,
      currency: "usdt",
      name: "usdt 10000",
      image: "/Thumbnail-Art_01.jpg",
      route: "/games/coin-quest/usdt",
      amount: "10 usdt",
      prizeValue: "100$",
      bettingslots: "1500",
      timeline: "30 days or early",
      winningscheme: "guaranteed winner",
      soldOutTickets: { total: 1000, sold: 200 },
    },
    {
      id: 5,
      currency: "usdt",
      name: "usdt 1000",
      image: "/Thumbnail-Art_01.jpg",
      route: "/games/coin-quest/usdt",
      amount: "1 usdt",
      prizeValue: "100$",
      bettingslots: "2000",
      timeline: "",
      winningscheme: "guaranteed winner daily",
      soldOutTickets: { total: 1000, sold: 350 },
    },
  ],
  coinQuestGameHighlights: [
    "Enter the pool",
    "Limited entries",
    "Guaranteed winners",
  ],
  dreamzDualCardData: [
    {
      id: 1,
      name: "mini blast",
      status: "closed",
      image: "/Thumbnail-Art_02.jpg",
      route: "/",
      amount: "$5",
      winningamount: "8 $ (get 80%)",
      announcementType: "Instant",
      announcementTime: "Within 1-2 min",
      winningscheme: "guaranteed winner",
    },
    {
      id: 2,
      name: "power blast",
      status: "closed",
      image: "/Thumbnail-Art_02.jpg",
      route: "",
      amount: "$10",
      winningamount: "16 $ (get 80%)",
      announcementType: "Instant",
      announcementTime: "Within 1-2 min",
      winningscheme: "maximum winner - 1",
    },
    {
      id: 3,
      name: "mega power",
      status: "live",
      image: "/Thumbnail-Art_02.jpg",
      route: "",
      amount: "$20",
      winningamount: "32 $ (get 80%)",
      announcementType: "Instant",
      announcementTime: "Within 1-2 min",
      winningscheme: "maximum winner - 1",
    },
    {
      id: 4,
      name: "super power",
      status: "live",
      image: "/Thumbnail-Art_02.jpg",
      route: "",
      amount: "$50",
      winningamount: "80 $ (get 80%)",
      announcementType: "Instant",
      announcementTime: "Within 1-2 min",
      winningscheme: "maximum winner - 1",
    },
  ],
  dreamzDualNewCardData: [
    {
      id: 1,
      name: "mini",
      status: "live",
      route: "/games/dreamz-dual/mini-blast",
      entryAmount: "5 USDT",
      prizeValue: "8 USDT",
      winningProbability: "50%",
    },
    {
      id: 2,
      name: "power",
      status: "closed",
      route: "/games/dreamz-dual/power-blast",
      entryAmount: "5 USDT",
      prizeValue: "8 USDT",
      winningProbability: "50%",
    },
    {
      id: 3,
      name: "super",
      status: "closed",
      route: "/games/dreamz-dual/super-blast",
      entryAmount: "5 USDT",
      prizeValue: "8 USDT",
      winningProbability: "50%",
    },
    {
      id: 4,
      name: "mega",
      status: "closed",
      route: "/games/dreamz-dual/mega-blast",
      entryAmount: "5 USDT",
      prizeValue: "8 USDT",
      winningProbability: "50%",
    },
    {
      id: 5,
      name: "dreamz",
      status: "closed",
      route: "/games/dreamz-dual/dreamz-blast",
      entryAmount: "5 USDT",
      prizeValue: "8 USDT",
      winningProbability: "50%",
    },
  ],
  socialData: [
    {
      id: 1,
      route: "/games/dreamz-dual/mini-blast",
      image: "/twitter.png",
      title: "Twitter",
      isClaimed: true,
      link: "@Dreamgamezcoin",
    },
    {
      id: 2,
      route: "/games/dreamz-dual/power-blast",
      image: "/telegram.png",
      title: "Telegram",
      isClaimed: false,
      link: "@Dreamgamezcoin",
    },
    {
      id: 3,
      route: "/games/dreamz-dual/super-blast",
      image: "/instagram.png",
      title: "Instagram",
      isClaimed: false,
      link: "@Dreamgamezcoin",
    },
    {
      id: 4,
      route: "/games/dreamz-dual/mega-blast",
      image: "/discord.png",
      title: "Discord",
      isClaimed: false,
      link: "@Dreamgamezcoin",
    },
    // {
    //   id: 5,
    //   route: "/games/dreamz-dual/mega-blast",
    //   image: "/linkedin.png",
    //   title: "LinkedIn",
    //   isClaimed: false,
    //   link: "@Dreamgamezcoin",
    // },
  ],
  dreamzThreeCardData: [
    {
      id: 1,
      name: "game 1",
      image: "/Thumbnail-Art_04.jpg",
      route: "/games/dreamz-three",
      amount: "3 usdt",
    },
    {
      id: 2,
      name: "game 2",
      image: "/Thumbnail-Art_04.jpg",
      route: "/games/dreamz-three",
      amount: "5 usdt",
    },
    {
      id: 3,
      name: "game 3",
      image: "/Thumbnail-Art_04.jpg",
      route: "/games/dreamz-three",
      amount: "10 usdt",
    },
    {
      id: 4,
      name: "game 4",
      image: "/Thumbnail-Art_04.jpg",
      route: "/games/dreamz-three",
      amount: "50 usdt",
    },
  ],
  dreamzThreeGameCardData: [
    {
      winningAmount: "500",
      entryPrice: "5",
      image: "/dreamz-three/Tether.jpg",
    },
    {
      winningAmount: "1000",
      entryPrice: "10",
      image: "/dreamz-three/Tether.jpg",
    },
    {
      winningAmount: "2000",
      entryPrice: "20",
      image: "/dreamz-three/Tether.jpg",
    },
    {
      winningAmount: "5000",
      entryPrice: "50",
      image: "/dreamz-three/Tether.jpg",
    },
  ],
  dreamzCasualCardData: [
    {
      id: 1,
      name: "lucky dice",
      image: "/Thumbnail-Art_06.jpg",
      route: "/",
      catch: "play free & earn DMZT tokens",
      gameState: "Coming Soon",
    },
    {
      id: 2,
      name: "rock paper & scissors",
      image: "/Thumbnail-Art_06.jpg",
      route: "/",
      catch: "play free & earn DMZT tokens",
      gameState: "Coming Soon",
    },
    {
      id: 3,
      name: "dreamz fantasy cricket",
      image: "/Thumbnail-Art_06.jpg",
      route: "/",
      catch: "play free & earn DMZT tokens",
      gameState: "Coming Soon",
    },
    {
      id: 4,
      name: "dreamz fantasy football",
      image: "/Thumbnail-Art_06.jpg",
      route: "/",
      catch: "play free & earn DMZT tokens",
      gameState: "Coming Soon",
    },
  ],
  weeklyWinners: {
    title: "Weekly Winners",
    header: ["User Name", "Game Title", "Winnings", "Winning Date"],
    rows: [
      {
        user: "User 1",
        gameTitle: "3 ETH",
        winnings: "200 ETH",
        winningDate: { day: "10", month: "march", year: "2024" },
      },
      {
        user: "User 2",
        gameTitle: "10000 XRP",
        winnings: "200 ETH",
        winningDate: { day: "10", month: "march", year: "2024" },
      },
      {
        user: "User 3",
        gameTitle: "BNB 10",
        winnings: "200 ETH",
        winningDate: { day: "10", month: "march", year: "2024" },
      },
      {
        user: "User 4",
        gameTitle: "USDT 10000",
        winnings: "200 ETH",
        winningDate: { day: "10", month: "march", year: "2024" },
      },
      {
        user: "User 5",
        gameTitle: "USDT 1000",
        winnings: "200 ETH",
        winningDate: { day: "10", month: "march", year: "2024" },
      },
      {
        user: "User 6",
        gameTitle: "300 USDT",
        winnings: "200 ETH",
        winningDate: { day: "10", month: "march", year: "2024" },
      },
    ],
  },
  table: {
    winners: {
      weeklyWinners: {
        title: "Weekly Winners",
        header: ["Game", "User", "Won", "Winning Date"],
        rows: [
          {
            "Game": "Coin Quest",
            "Winner": "DG2325",
            "Won": "500",
            winningDate: "2024-07-19T14:26:25.778Z"
          }
        ],
      },
      walletTable: {
        title: "Dreamz Weekly Winners",
        header: ["TYPE", "TOKEN", "TRANSACTION HASH", "DATE"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
      cqWinners: {
        title: "Coin Quest Winners",
        header: ["Game", "Winner", "Won", "winningDate"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
      jackpotWinners: {
        title: "Jackpot Winners",
        header: ["User Name", "Game Title", "Winnings", "Winning Date"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
      dDualWinners: {
        title: " Dreamz Dual Winners",
        header: ["User Name", "Game Title", "Winnings", "Winning Date"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
    },
    activityTable: {
      title: "Activity",
      header: ["UserName", "Entries","Type", "Date","HASH"],
      rows: [
        {
          user: "User 1",
          placedTickets: "2",
          date: "1/4/2024",
        },
        {
          user: "User 2",
          placedTickets: "5",
          date: "1/4/2024",
        },
        {
          user: "User 3",
          placedTickets: "2",
          date: "1/4/2024",
        },
        {
          user: "User 4",
          placedTickets: "3",
          date: "1/4/2024",
        },
      ],
    },
    drawTable: {
      drawDate: "24 april 2024",
      header: ["Match", "Winning Numbers", "Prize", "Winners", "Total Prize"],
      rows: [
        {
          match: "straight",
          winningNumbers: "671",
          prize: "3000 $",
          winners: "2",
          totalPrize: "6000$",
        },
        {
          match: "reverse",
          winningNumbers: "176",
          prize: "300 $",
          winners: "2",
          totalPrize: "600$",
        },
        {
          match: "mix-1",
          winningNumbers: "167",
          prize: "100 $",
          winners: "3",
          totalPrize: "300$",
        },
        {
          match: "mix-2",
          winningNumbers: "716",
          prize: "100 $",
          winners: "4",
          totalPrize: "400$",
        },
        {
          match: "mix-3",
          winningNumbers: "761",
          prize: "100 $",
          winners: "7",
          totalPrize: "700$",
        },
        {
          match: "mix-4",
          winningNumbers: "617",
          prize: "100 $",
          winners: "2",
          totalPrize: "200$",
        },
      ],
    },
  },
  frequentQuestionsData: [
    {
      id: 1,
      question: "How do CoinQuest games work?",
      answer: "CoinQuest games are high-winning probability raffle games with limited participation and guaranteed winners. Each game comes with a time limit and a fixed number of entries. The game is considered complete when the timeline ends or the maximum number of entries is reached. At that point, a winner is selected at random using a cryptographically verifiable system. The code used for choosing the winner will be made available for public view once the game has concluded."
    },
    {
      id: 2,
      question: "How can I join CoinQuest games?",
      answer: "You can participate in CoinQuest games by purchasing entries into the pool either through your DreamGameZ wallet or if you don’t have sufficient balance, you can purchase by connecting any of your Web3 wallets such as Metamask, Trust Wallet, etc. Once you have chosen your desired CoinQuest game, navigate to Game Details and purchase as many tickets as you wish. The more tickets you enter, the higher your chances of winning."
    },
    {
      id: 3,
      question: "Do all CoinQuest games start and finish at the same time?",
      answer: "No, there are different pools running with different prizes and different timelines. We have daily, weekly, and monthly CoinQuest games. You can choose to participate in whichever game you prefer."
    },
    {
      id: 4,
      question: "What are free CoinQuest games?",
      answer: "There are certain CoinQuest games where you can get one entry for free and the winning pool amount will be paid in DMZT tokens worth the same value. You can also purchase additional entries to boost your chances of winning these games."
    },
    {
      id: 5,
      question: "How can I claim the DMZT tokens after winning?",
      answer: "DMZT tokens are the digital utility coins developed by DreamGameZ. You can claim your winning tokens once we list DMZT tokens on an exchange."
    },
    {
      id: 6,
      question: "How will DreamGameZ notify me if I win the prize?",
      answer: "After the winner is drawn, you can claim your prize in your profile. Winners will be notified by email and an in-platform notification. Make sure you opt-in to emails and save dreamgamez.io as a safe sender. The details of the winner will also be displayed in the Winner’s Section of the website."
    },
    {
      id: 7,
      question: "What do I need to do if I win?",
      answer: "If you win, navigate to your profile or the game page to claim the prize. The winnings will be immediately transferred to your wallet following your claim request."
    },
    {
      id: 8,
      question: "Can I participate from anywhere in the world?",
      answer: "Yes, blockchain-based raffles like DreamGameZ are decentralized, allowing global participation. Unlike traditional lotteries such as the US Powerball, which are restricted to residents within the country, blockchain raffles do not have geographical limitations, enabling people from all over the world to participate."
    },
    {
      id: 9,
      question: "What if the CoinQuest Game conditions are not met?",
      answer: "All CoinQuest games on our platform will come to a fair and timely draw if the predetermined criteria are met. Our system is designed to automatically draw the raffle when either the maximum number of entries is reached or the time runs out. However, DreamGameZ reserves the right to cancel the games at any time. In such a case, where a game is canceled, all entered tickets will be refunded to the respective users."
    },
    {
      id: 10,
      question: "How are winners drawn in CoinQuest?",
      answer: "Winners are randomly selected through a secure process powered by our cryptographically verifiable system. Each purchased entry is stored in the competition smart contract, and the more entries you buy, the higher your chances of winning. For instance, if you buy 15 tickets, all 15 are recorded as separate entries, thus increasing your odds of winning."
    },
    {
      id: 11,
      question: "Is there a way to increase my chances of winning in CoinQuest games?",
      answer: "Yes, you can always increase your chances of winning by purchasing more tickets, ideally by using the multi-entry bundles. By using these bundles, you not only increase your chances of winning, but you can also save on gas fees. Our gas-optimized contract allows you to register all of your entries for the same or sometimes even lower gas fees than a single free entry. This efficient method saves time and provides the most cost-effective way to increase your chances in CoinQuest games."
    },
    {
      id: 12,
      question: "Is there a limit to how many entries I can buy?",
      answer: "No, there is no limit on the number of entries an individual can buy."
    },
    {
      id: 13,
      question: "Can I withdraw my entry?",
      answer: "No, once an entry is submitted to the smart contract, it cannot be retracted and will exist on the blockchain permanently. Nevertheless, if the game is canceled for any reason, all entered tickets will be refunded to the users."
    },
    {
      id: 14,
      question: "What if I can't find an answer to my question?",
      answer: "If you haven't found an answer to your question, please email us at support@dreamgamez.io for further assistance."
    }
  ],
  jackpotfrequentQuestionsData: [
    {
      id: 1,
      question: "How does Jackpot Madness work?",
      answer: "Jackpot Madness is a monthly raffle game with unlimited winnings and guaranteed winners. There are no limits on the number of entries or a maximum cap limit. The game begins on the 1st of every month and ends on the last day of the month. Once the game has ended, the winners are selected and the pool amount is distributed as below:\n- First Prize winner gets 50% of the pool amount\n- Second Prize winner gets 10% of the pool amount\n- Third Prize winner gets 5% of the pool amount\n- 5 winners will get 1% each of the pool amount"
    },
    {
      id: 2,
      question: "How can I join Jackpot Madness?",
      answer: "You can participate in Jackpot games by purchasing the entries into the pool either through your DreamGameZ wallet or if you don’t have sufficient balance, you can purchase by connecting any of the Web3 wallets like Metamask, Trust Wallet, etc. Simply navigate to the game details and purchase as many tickets as you wish. The more tickets you enter, the higher your chances of winning."
    },
    {
      id: 3,
      question: "How often is the Jackpot Madness game held?",
      answer: "Jackpot Madness is held every month. Only one game is active at a time, and a new game starts only after the current one has concluded."
    },
    {
      id: 4,
      question: "How will DreamGameZ notify me if I win the prize?",
      answer: "After the winner is drawn, you can claim your prize in your profile. Winners will be notified by email and an in-platform notification. Make sure you opt-in to emails and save dreamgamez.io as a safe sender. The details of the winner will also be displayed in the Winner’s Section of the website."
    },
    {
      id: 5,
      question: "What do I need to do if I win?",
      answer: "If you win, navigate to your profile or the game page to claim the prize. The winnings will be immediately transferred to your wallet following your claim request."
    },
    {
      id: 6,
      question: "Can I participate from anywhere in the world?",
      answer: "Yes, blockchain-based raffles like DreamGameZ are decentralized, allowing global participation. Unlike traditional lotteries such as the US Powerball, which are restricted to residents within the country, blockchain raffles do not have geographical limitations, enabling people from all over the world to participate."
    },
    {
      id: 7,
      question: "What if the Jackpot Madness conditions are not met?",
      answer: "Jackpot Madness does not have any specific conditions to meet. The game has simple rules with no limit on the number of participants. The winning amount increases with each entry. When the game ends, the winners will be chosen and the corresponding winning amount will be distributed among them."
    },
    {
      id: 8,
      question: "How are winners drawn in Jackpot Madness?",
      answer: "Winners are randomly selected through a secure process powered by our cryptographically verifiable system. Each purchased entry is stored in the competition smart contract, and the more entries you buy, the higher your chances of winning. For instance, if you buy 15 tickets, all 15 are recorded as separate entries, thus increasing your odds of winning."
    },
    {
      id: 9,
      question: "Is there a way to increase my chances of winning in Jackpot Madness?",
      answer: "Yes, you can always increase your chances of winning by purchasing more tickets, ideally by using the multi-entry bundles. By using these bundles, you not only increase your chances of winning, but you can also save on gas fees. Our gas-optimized contract allows you to register all of your entries for the same or sometimes even lower gas fees than a single free entry. This efficient method saves time and provides the most cost-effective way to increase your chances in Jackpot Madness."
    },
    {
      id: 10,
      question: "Is there a limit to how many entries I can buy?",
      answer: "No, there is no limit on the number of entries an individual can buy."
    },
    {
      id: 11,
      question: "Can I withdraw my entry?",
      answer: "No, once an entry is submitted to the smart contract, it cannot be retracted and will exist on the blockchain permanently. Nevertheless, if the game is canceled for any reason, all entered tickets will be refunded to the users."
    },
    {
      id: 12,
      question: "What if I can't find an answer to my question?",
      answer: "If you haven't found an answer to your question, please email us at support@dreamgamez.io for further assistance."
    }
  ],
  jackpotGameStats: [
    { participants: "12888" },
    { entries: "1288" },
    { totalPool: "128500" },
    { ticketsSold: "597" },
  ],
  popularEntries: {
    coinQuest: [
      {
        id: 1,
        game: "coin quest",
        gameTitle: "win by 2x",
        tickets: [],
        entries: 2,
        price: 20,
      },
      {
        id: 2,
        game: "coin quest",
        gameTitle: "win by 5x",
        tickets: [],
        entries: 5,
        price: 50,
      },
      {
        id: 3,
        game: "coin quest",
        gameTitle: "win by 10x",
        tickets: [],
        entries: 10,
        price: 100,
      },
      {
        id: 4,
        game: "coin quest",
        gameTitle: "win by 20x",
        tickets: [],
        entries: 20,
        price: 200,
      },
    ],
    jackpot: [
      {
        id: 1,
        game: "jackpot madness",
        gameTitle: "win by 2x",
        tickets: [],
        entries: 2,
        price: 20,
      },
      {
        id: 2,
        game: "jackpot madness",
        gameTitle: "win by 3x",
        tickets: [],
        entries: 3,
        price: 30,
      },
      {
        id: 3,
        game: "jackpot madness",
        gameTitle: "win by 4x",
        tickets: [],
        entries: 4,
        price: 40,
      },
      {
        id: 4,
        game: "jackpot madness",
        gameTitle: "win by 5x",
        tickets: [],
        entries: 5,
        price: 50,
      },
      // {
      //   id: 5,
      //   game: "jackpot madness",
      //   gameTitle: "win by 6x",
      //   tickets: [],
      //   entries: 6,
      //   price: 60,
      // },
      // {
      //   id: 6,
      //   game: "jackpot madness",
      //   gameTitle: "win by 7x",
      //   tickets: [],
      //   entries: 7,
      //   price: 70,
      // },
      // {
      //   id: 7,
      //   game: "jackpot madness",
      //   gameTitle: "win by 8x",
      //   tickets: [],
      //   entries: 8,
      //   price: 80,
      // },
      // {
      //   id: 8,
      //   game: "jackpot madness",
      //   gameTitle: "win by 9x",
      //   tickets: [],
      //   entries: 9,
      //   price: 90,
      // },
      // {
      //   id: 9,
      //   game: "jackpot madness",
      //   gameTitle: "win by 10x",
      //   tickets: [],
      //   entries: 10,
      //   price: 100,
      // },
    ],
  },
  howToPlay: {
    coinQuest: [
      {
        icon: "/Connect-Wallet.svg",
        textA: "Buy Tickets",
        textB: "Connect your Web3 or DreamGameZ wallet & choose the number of entries.",
      },
      {
        icon: "/Select-Pool.svg",
        textA: "Wait For The Draw",
        textB: "Draw will occur on the scheduled date or when the pool limit is reached.",
      },
      {
        icon: "/Fav-Crypto.svg",
        textA: "Claim Your Prize",
        textB: "You can view the results of the draw on the website & claim your reward directly to your wallet.",
      },
    ],
  },
  footer: {
    socialIcons: [
      {
        name: "instagram",
        icon: "/footer-social-icons/instagram.svg",
        href: "https://www.instagram.com/dreamgamezcoin",
      },
      {
        name: "discord",
        icon: "/footer-social-icons/discord.svg",
        href: "https://discord.com/invite/VNSZaQwx",
      },
      {
        name: "linkedin",
        icon: "/footer-social-icons/linkedin.svg",
        href: "https://www.linkedin.com/company/dreamgamezcoin",
      },
      {
        name: "telegram",
        icon: "/footer-social-icons/telegram.svg",
        href: "https://t.me/DreamGameZ",
      },
      {
        name: "twitter",
        icon: "/footer-social-icons/twitter.svg",
        href: "https://x.com/dreamgamezcoin",
      },
    ],
  },
};