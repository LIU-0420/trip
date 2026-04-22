export type Attraction = {
  id: number;
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  imageCreditName: string;
  imageLicense: string;
  imageSourceUrl: string;
  imageCommonsUrl: string;
  region: string;
  category: string;
  summary: string;
  tagline: string;
  recommendedDuration: string;
  bestSeason: string;
  openTime: string;
  ticketInfo: string;
  address: string;
  transportation: string;
  heroTone: string;
  tags: string[];
  highlights: string[];
  routeGuide: string[];
  photoSpots: string[];
  tips: string[];
  avoidPitfalls: string[];
  foodRecommendations: string[];
  hotelRecommendations: string[];
  relatedAttractions: string[];
  coordinates: string;
};

export type Itinerary = {
  id: number;
  title: string;
  duration: string;
  audience: string;
  summary: string;
  highlights: string[];
  dailyPlan: {
    day: string;
    stops: string[];
  }[];
};

export type FoodSpot = {
  id: number;
  area: string;
  title: string;
  summary: string;
  mustTry: string[];
};

export type StayArea = {
  id: number;
  area: string;
  vibe: string;
  suitableFor: string;
  reasons: string[];
};

export const attractions: Attraction[] = [
  {
    id: 1,
    slug: "gulangyu",
    name: "鼓浪屿",
    image: "/images/attractions/gulangyu.jpg",
    imageAlt: "鼓浪屿海边建筑与海岸风景",
    imageCreditName: "gdczjkk",
    imageLicense: "CC BY 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E9%BC%93%E6%B5%AA%E5%B1%BF_-_panoramio.jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:%E9%BC%93%E6%B5%AA%E5%B1%BF_-_panoramio.jpg",
    region: "思明区",
    category: "海岛人文",
    summary: "厦门最具代表性的海岛景点，适合慢逛、看建筑、听海风。",
    tagline: "第一次来厦门，鼓浪屿几乎是一定要安排的核心目的地。",
    recommendedDuration: "半天到 1 天",
    bestSeason: "10 月到次年 4 月",
    openTime: "全天开放，轮渡按航班时间运行",
    ticketInfo: "岛上免费，部分景点和轮渡需单独购票",
    address: "厦门市思明区鼓浪屿",
    transportation: "从厦鼓码头或邮轮中心厦鼓码头乘轮渡上岛",
    heroTone: "from-[#ffd7a8] via-[#fff0d8] to-[#d1ecff]",
    tags: ["必打卡", "看建筑", "慢节奏", "亲子友好"],
    highlights: [
      "万国建筑群很适合边走边看",
      "龙头路适合吃小吃和买伴手礼",
      "日光岩和菽庄花园适合补充经典打卡点",
    ],
    routeGuide: [
      "上午早一点上岛，避开人流高峰。",
      "从三丘田附近开始逛老别墅区，再去龙头路。",
      "下午安排日光岩或菽庄花园，傍晚乘船返程。",
    ],
    photoSpots: ["最美转角", "港仔后沙滩", "菽庄花园海边步道"],
    tips: [
      "尽量轻装上岛，老街和坡道较多。",
      "提前看好回程船班，旺季不要卡点返回。",
      "岛上适合步行，不建议安排太满。",
    ],
    avoidPitfalls: [
      "不要把所有时间都花在龙头路排队买小吃。",
      "旺季中午以后人会明显变多，建议早上上岛。",
      "轮渡码头不同，回程前先确认自己登岛的码头信息。",
    ],
    foodRecommendations: ["龙头路海蛎煎", "花生汤", "鱼丸汤"],
    hotelRecommendations: ["鼓浪屿岛上民宿", "中山路附近酒店"],
    relatedAttractions: ["shapowei", "zhongshan-road"],
    coordinates: "24.4478, 118.0678",
  },
  {
    id: 2,
    slug: "nanputuo",
    name: "南普陀寺",
    image: "/images/attractions/nanputuo.jpg",
    imageAlt: "南普陀寺建筑与寺院环境",
    imageCreditName: "Tiger@西北",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E5%8E%A6%E9%97%A8%E5%8D%97%E6%99%AE%E9%99%80%E5%AF%BA%E5%A4%A9%E7%8E%8B%E6%AE%BF_-_panoramio.jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:%E5%8E%A6%E9%97%A8%E5%8D%97%E6%99%AE%E9%99%80%E5%AF%BA%E5%A4%A9%E7%8E%8B%E6%AE%BF_-_panoramio.jpg",
    region: "思明区",
    category: "人文历史",
    summary: "厦门最受欢迎的寺院景点之一，适合和厦门大学、沙坡尾串联游玩。",
    tagline: "想看山海相连的城市气质，南普陀是非常高效的一站。",
    recommendedDuration: "1.5 到 3 小时",
    bestSeason: "全年皆宜，秋冬更舒适",
    openTime: "通常为白天开放，建议出发前确认公告",
    ticketInfo: "免费开放",
    address: "厦门市思明区思明南路 515 号",
    transportation: "可打车、公交到南普陀寺站，步行可串联厦大周边",
    heroTone: "from-[#f5d8b3] via-[#fff5e7] to-[#d7efe5]",
    tags: ["免费", "山景", "人文", "适合半日游"],
    highlights: [
      "寺院建筑与背山景观组合很出片",
      "登五老峰能俯瞰厦门大学和海岸线",
      "和沙坡尾、中山路串联很顺路",
    ],
    routeGuide: [
      "上午先逛寺院主体区域，节奏会更舒服。",
      "体力充足可以继续登五老峰看城市视野。",
      "下山后可顺路去厦大周边或沙坡尾。",
    ],
    photoSpots: ["大雄宝殿外广场", "放生池附近", "五老峰观景位"],
    tips: [
      "穿着尽量得体，注意寺院礼仪。",
      "上山台阶较多，穿舒适运动鞋。",
      "节假日香客较多，建议错峰。",
    ],
    avoidPitfalls: [
      "不要把上山时间安排在正午，晒且体感累。",
      "不要低估登山消耗，带好水。",
      "旺季停车不方便，更建议公共交通或打车。",
    ],
    foodRecommendations: ["素饼", "沙茶面", "花生汤"],
    hotelRecommendations: ["厦大周边精品酒店", "中山路商圈酒店"],
    relatedAttractions: ["shapowei", "botanical-garden"],
    coordinates: "24.4399, 118.0995",
  },
  {
    id: 3,
    slug: "huandao-road",
    name: "环岛路",
    image: "/images/attractions/huandao-road.jpg",
    imageAlt: "厦门环岛路海滩与海边风景",
    imageCreditName: "Tiger@西北",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E5%8E%A6%E9%97%A8%E7%8E%AF%E5%B2%9B%E8%B7%AF%E6%A4%B0%E9%A3%8E%E5%AF%A8%E6%B5%B7%E6%BB%A9_-_panoramio.jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:%E5%8E%A6%E9%97%A8%E7%8E%AF%E5%B2%9B%E8%B7%AF%E6%A4%B0%E9%A3%8E%E5%AF%A8%E6%B5%B7%E6%BB%A9_-_panoramio.jpg",
    region: "思明区",
    category: "海边风光",
    summary: "看海、骑行、散步都很舒服，是厦门海边城市感最强的一段。",
    tagline: "想感受厦门的海风和慢节奏，环岛路是最直接的入口。",
    recommendedDuration: "2 到 4 小时",
    bestSeason: "10 月到次年 5 月",
    openTime: "全天开放",
    ticketInfo: "免费开放",
    address: "厦门市思明区环岛南路沿线",
    transportation: "可打车到音乐广场、黄厝海滩、曾厝垵等节点开始游玩",
    heroTone: "from-[#a6ddff] via-[#e0f5ff] to-[#fff8dd]",
    tags: ["看海", "骑行", "日落", "情侣友好"],
    highlights: [
      "沿海步道视野开阔，适合发呆和慢走",
      "黄厝、椰风寨一线适合看日出或日落",
      "可以和曾厝垵联动安排半天路线",
    ],
    routeGuide: [
      "下午从曾厝垵或音乐广场附近开始。",
      "沿海慢走或骑行，途中选择一两个海滩停留。",
      "傍晚找视野好的海边点位看日落。",
    ],
    photoSpots: ["黄厝海滩", "音乐广场海边", "椰风寨海岸线"],
    tips: [
      "海边风大，带薄外套会更舒服。",
      "防晒要做好，尤其晴天上午和下午。",
      "骑行时注意人流和车辆混行区域。",
    ],
    avoidPitfalls: [
      "不要安排中午长时间暴晒骑行。",
      "旺季海边停车位紧张，尽量打车前往。",
      "部分共享单车停放点有限，提前留意还车区域。",
    ],
    foodRecommendations: ["海鲜排档", "椰子饮品", "烧仙草"],
    hotelRecommendations: ["黄厝海景民宿", "环岛路度假酒店"],
    relatedAttractions: ["zengcuoan", "shapowei"],
    coordinates: "24.4184, 118.1456",
  },
  {
    id: 4,
    slug: "shapowei",
    name: "沙坡尾",
    image: "/images/attractions/shapowei.jpg",
    imageAlt: "厦门沙坡尾港口与渔船景色",
    imageCreditName: "mojojo.cn",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Fishing_boats_in_Shapowei,_Xiamen.jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:Fishing_boats_in_Shapowei,_Xiamen.jpg",
    region: "思明区",
    category: "文艺街区",
    summary: "兼具老港口气质和年轻创意氛围，适合吃喝逛拍和夜晚散步。",
    tagline: "如果你喜欢城市中的文艺感和生活感，沙坡尾很容易让人停下来。",
    recommendedDuration: "2 到 3 小时",
    bestSeason: "全年皆宜，傍晚最好",
    openTime: "街区全天开放，店铺营业时间各不相同",
    ticketInfo: "街区免费",
    address: "厦门市思明区沙坡尾街区",
    transportation: "适合和南普陀、厦门大学、中山路串联打车前往",
    heroTone: "from-[#ffd4c7] via-[#fff0ea] to-[#d7e7ff]",
    tags: ["文艺", "夜游", "小店", "适合拍照"],
    highlights: [
      "老港避风坞的氛围很特别",
      "街区里有很多小店和咖啡馆",
      "夜晚灯光亮起后更有感觉",
    ],
    routeGuide: [
      "下午四点以后进入街区比较合适。",
      "先逛主街小店，再绕到港边散步。",
      "晚上可以继续去中山路或八市附近吃饭。",
    ],
    photoSpots: ["避风坞码头边", "艺术墙面", "临街咖啡店门口"],
    tips: [
      "适合慢逛，不适合赶场式打卡。",
      "很多店铺更偏轻社交和拍照，可提前做一点筛选。",
      "晚上气氛更好，但节假日也更挤。",
    ],
    avoidPitfalls: [
      "不要抱着所有店都要进的思路，挑几家更舒服。",
      "网红店排队长时可以灵活换店。",
      "停车不算方便，更建议打车。",
    ],
    foodRecommendations: ["咖啡烘焙店", "创意小吃", "海鲜小馆"],
    hotelRecommendations: ["大学路周边酒店", "中山路轻奢酒店"],
    relatedAttractions: ["nanputuo", "zhongshan-road"],
    coordinates: "24.4378, 118.0937",
  },
  {
    id: 5,
    slug: "zengcuoan",
    name: "曾厝垵",
    image: "/images/attractions/zengcuoan.jpg",
    imageAlt: "厦门曾厝垵街区建筑与街景",
    imageCreditName: "Augustohai",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E6%9B%BE%E5%8E%9D%E5%9E%B5092633.jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:%E6%9B%BE%E5%8E%9D%E5%9E%B5092633.jpg",
    region: "思明区",
    category: "街区夜游",
    summary: "适合游客体验厦门街巷氛围和夜市节奏的热门区域。",
    tagline: "想轻松吃吃逛逛、顺便连接海边路线，曾厝垵很合适。",
    recommendedDuration: "2 到 4 小时",
    bestSeason: "全年皆宜，夜间体验更好",
    openTime: "街区全天开放，店铺晚上更热闹",
    ticketInfo: "免费开放",
    address: "厦门市思明区曾厝垵街区",
    transportation: "可与环岛路连线，公交或打车都方便",
    heroTone: "from-[#ffe0b5] via-[#fff4db] to-[#cfe9ff]",
    tags: ["夜市", "小吃", "年轻人", "海边联动"],
    highlights: [
      "街区密集，适合轻松逛吃",
      "离海边近，适合串联环岛路",
      "晚上的烟火气最强",
    ],
    routeGuide: [
      "傍晚先去环岛路看海。",
      "晚饭时间转入曾厝垵街区觅食。",
      "饭后继续边走边逛小店和夜市。",
    ],
    photoSpots: ["街区入口灯牌", "巷子转角", "夜市灯串区域"],
    tips: [
      "更适合安排在晚上。",
      "小吃种类很多，建议少量多尝。",
      "旺季人多，保管好随身物品。",
    ],
    avoidPitfalls: [
      "不要对环境抱有过高安静预期，整体偏热闹。",
      "网红店不一定最值得排，先看现场情况。",
      "靠近节假日时停车非常紧张。",
    ],
    foodRecommendations: ["沙茶面", "海蛎煎", "花生卷冰淇淋"],
    hotelRecommendations: ["曾厝垵民宿", "环岛路度假酒店"],
    relatedAttractions: ["huandao-road", "botanical-garden"],
    coordinates: "24.4252, 118.1455",
  },
  {
    id: 6,
    slug: "botanical-garden",
    name: "厦门园林植物园",
    image: "/images/attractions/botanical-garden.jpg",
    imageAlt: "厦门园林植物园景观与绿色植物",
    imageCreditName: "stone wu",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E6%A4%8D%E7%89%A9%E5%9B%AD_-_panoramio_(1).jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:%E6%A4%8D%E7%89%A9%E5%9B%AD_-_panoramio_(1).jpg",
    region: "思明区",
    category: "自然风光",
    summary: "雨林世界和多肉植物区是拍照热门区域，适合半天慢逛。",
    tagline: "想在厦门看一场层次丰富的绿色景观，植物园是很稳的选择。",
    recommendedDuration: "3 到 5 小时",
    bestSeason: "秋冬到春季",
    openTime: "白天开放，具体以景区公告为准",
    ticketInfo: "需购买门票",
    address: "厦门市思明区虎园路 25 号附近",
    transportation: "可打车直达西门或南门，体力安排很重要",
    heroTone: "from-[#cce7b0] via-[#edf7d9] to-[#fff5da]",
    tags: ["拍照", "自然", "亲子友好", "半日游"],
    highlights: [
      "雨林喷雾时段氛围感很强",
      "多肉植物区很适合拍照",
      "园区大，适合边走边逛",
    ],
    routeGuide: [
      "建议提前看喷雾时间，优先安排雨林世界。",
      "再去多肉植物区和经典观景区域。",
      "最后根据体力补充其他园区。",
    ],
    photoSpots: ["雨林世界木栈道", "多肉植物区", "高处观景点"],
    tips: [
      "园区较大，鞋子一定要舒服。",
      "带水和防蚊用品会更轻松。",
      "拍照建议避开中午强光。",
    ],
    avoidPitfalls: [
      "不要低估步行距离，半天会比较充实。",
      "高温天气体感会明显偏闷。",
      "雨林喷雾时间要提前看，不然容易错过。",
    ],
    foodRecommendations: ["简餐咖啡", "中山路小吃", "沙坡尾餐厅"],
    hotelRecommendations: ["中山路商圈酒店", "厦大周边酒店"],
    relatedAttractions: ["nanputuo", "zengcuoan"],
    coordinates: "24.4541, 118.1020",
  },
  {
    id: 7,
    slug: "zhongshan-road",
    name: "中山路步行街",
    image: "/images/attractions/zhongshan-road.jpg",
    imageAlt: "中山路步行街街景与骑楼建筑",
    imageCreditName: "lienyuan lee",
    imageLicense: "CC BY 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%B1%B1%E8%B7%AF%E6%AD%A5%E8%A1%8C%E8%A1%97_Zhongshan_Road_Pedestrian_Zone_-_panoramio.jpg",
    imageCommonsUrl:
      "https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%B1%B1%E8%B7%AF%E6%AD%A5%E8%A1%8C%E8%A1%97_Zhongshan_Road_Pedestrian_Zone_-_panoramio.jpg",
    region: "思明区",
    category: "城市烟火",
    summary: "适合感受厦门老城烟火气、逛吃和安排夜游。",
    tagline: "想把厦门的城市节奏吃进胃里，中山路非常高效。",
    recommendedDuration: "2 到 4 小时",
    bestSeason: "全年皆宜，晚上更热闹",
    openTime: "街区全天开放，店铺营业时间不同",
    ticketInfo: "免费开放",
    address: "厦门市思明区中山路步行街",
    transportation: "公交、地铁、打车都方便，适合晚上安排",
    heroTone: "from-[#ffd1c2] via-[#fff1e6] to-[#f2e2be]",
    tags: ["夜游", "美食", "老城", "购物"],
    highlights: [
      "骑楼街景很有老城味道",
      "适合集中尝厦门特色小吃",
      "和八市、沙坡尾串联效率高",
    ],
    routeGuide: [
      "傍晚先到中山路主街逛骑楼。",
      "边走边挑厦门特色小吃。",
      "有体力可继续去八市或鹭江道。",
    ],
    photoSpots: ["骑楼街景", "街口招牌区", "夜间灯光路段"],
    tips: [
      "更适合安排在晚上。",
      "热门节假日人很多，尽量轻装出行。",
      "小吃很多，建议做取舍。",
    ],
    avoidPitfalls: [
      "不要只吃最明显的网红店，巷子里也有不错选择。",
      "节假日停车难，公共交通更省心。",
      "如果追求安静氛围，中山路不是最佳选择。",
    ],
    foodRecommendations: ["土笋冻", "海蛎煎", "花生汤"],
    hotelRecommendations: ["中山路商圈酒店", "鹭江道景观酒店"],
    relatedAttractions: ["gulangyu", "shapowei"],
    coordinates: "24.4557, 118.0819",
  },
];

export const itineraries: Itinerary[] = [
  {
    id: 1,
    title: "厦门经典 2 日游",
    duration: "2 天 1 夜",
    audience: "第一次来厦门的游客",
    summary: "用最短时间覆盖鼓浪屿、南普陀、沙坡尾和中山路等经典区域。",
    highlights: ["景点密度高", "路线成熟", "拍照和体验兼顾"],
    dailyPlan: [
      {
        day: "Day 1",
        stops: ["鼓浪屿", "龙头路", "中山路步行街"],
      },
      {
        day: "Day 2",
        stops: ["南普陀寺", "厦大周边", "沙坡尾", "环岛路看日落"],
      },
    ],
  },
  {
    id: 2,
    title: "海边松弛 1 日游",
    duration: "1 天",
    audience: "情侣、轻度休闲游客",
    summary: "把重心放在海边和街区氛围，不追求高强度打卡。",
    highlights: ["看海舒服", "节奏轻松", "适合拍照"],
    dailyPlan: [
      {
        day: "Day 1",
        stops: ["环岛路", "黄厝海滩", "曾厝垵", "沙坡尾夜游"],
      },
    ],
  },
  {
    id: 3,
    title: "文艺慢逛 3 日游",
    duration: "3 天 2 夜",
    audience: "喜欢慢节奏和内容体验的游客",
    summary: "适合把厦门的海岛、人文、街区和植物景观都看一遍。",
    highlights: ["内容丰富", "不赶路", "适合深度体验"],
    dailyPlan: [
      {
        day: "Day 1",
        stops: ["鼓浪屿", "日光岩", "菽庄花园"],
      },
      {
        day: "Day 2",
        stops: ["南普陀寺", "植物园", "沙坡尾"],
      },
      {
        day: "Day 3",
        stops: ["环岛路", "曾厝垵", "中山路步行街"],
      },
    ],
  },
];

export const foodSpots: FoodSpot[] = [
  {
    id: 1,
    area: "中山路",
    title: "老城味道最集中",
    summary: "适合一口气尝到厦门经典小吃，是第一次来厦门的安全区。",
    mustTry: ["海蛎煎", "沙茶面", "花生汤"],
  },
  {
    id: 2,
    area: "八市周边",
    title: "更接近日常生活感",
    summary: "适合想吃地道海鲜和市井味道的游客。",
    mustTry: ["海鲜排档", "土笋冻", "鱼丸汤"],
  },
  {
    id: 3,
    area: "沙坡尾",
    title: "文艺餐厅和咖啡馆较多",
    summary: "适合下午茶、简餐和夜间氛围用餐。",
    mustTry: ["咖啡烘焙", "融合料理", "创意甜品"],
  },
];

export const stayAreas: StayArea[] = [
  {
    id: 1,
    area: "中山路商圈",
    vibe: "热闹方便",
    suitableFor: "第一次来厦门、希望交通方便的人",
    reasons: ["吃饭选择多", "离码头和老城近", "夜游方便"],
  },
  {
    id: 2,
    area: "环岛路",
    vibe: "度假感强",
    suitableFor: "想看海、想住得松弛一点的人",
    reasons: ["海景资源好", "适合早起看海", "度假酒店和民宿较多"],
  },
  {
    id: 3,
    area: "曾厝垵",
    vibe: "年轻热闹",
    suitableFor: "预算中等、喜欢夜生活和小吃的人",
    reasons: ["靠近海边", "夜里也热闹", "民宿选择多"],
  },
  {
    id: 4,
    area: "厦大周边",
    vibe: "文艺安静",
    suitableFor: "想兼顾景点和生活气息的人",
    reasons: ["靠近南普陀和沙坡尾", "步行串联景点方便", "适合慢逛"],
  },
];

export const siteStats = [
  { label: "首批热门景点", value: "7 个" },
  { label: "现成行程方案", value: "3 条" },
  { label: "高频推荐区域", value: "4 个" },
];

export function getAttractionBySlug(slug: string) {
  return attractions.find((item) => item.slug === slug);
}

export function getRelatedAttractions(slugs: string[]) {
  return attractions.filter((item) => slugs.includes(item.slug));
}
