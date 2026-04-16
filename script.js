const questions = [
      { id: 1, question: "面对一个高波动但高预期的标的，你如何分配仓位？", options: [{t:"满仓梭哈，追求极致收益", type:"A"}, {t:"严格控制仓位，不超过 10%", type:"B"}, {t:"根据量化模型计算出的最优夏普比率分配", type:"C"}, {t:"凭盘感，感觉大盘要起飞就加仓", type:"D"}] },
      { id: 2, question: "你认为决定投资成败的最核心因素是？", options: [{t:"敢于在别人不敢买的时候下重注", type:"A"}, {t:"严守安全边际，不亏损就是赢", type:"B"}, {t:"对宏观经济和财务报表的深度拆解", type:"C"}, {t:"对市场情绪和资金流向的敏锐捕捉", type:"D"}] },
      { id: 3, question: "当持仓出现浮亏，且基本面未发生恶化时，你会？", options: [{t:"坚决加仓，摊低成本", type:"A"}, {t:"立即止损，寻找确定性更高的机会", type:"B"}, {t:"重新复盘逻辑，确认是否属于“错杀”", type:"C"}, {t:"观察盘面，如果趋势破位就走人", type:"D"}] },
      { id: 4, question: "你更倾向于哪种盈利模式？", options: [{t:"捕捉市场短期暴涨的趋势", type:"F"}, {t:"长期持有优秀企业，享受复利", type:"E"}, {t:"通过高频交易赚取微小价差", type:"F"}, {t:"深度调研，挖掘被市场忽视的隐形冠军", type:"E"}] },
      { id: 5, question: "关于“顺势”与“逆向”，你的信条是？", options: [{t:"顺势而为，趋势是最好的朋友", type:"H"}, {t:"别人贪婪我恐惧，别人恐惧我贪婪", type:"G"}, {t:"市场永远是对的，跟随主力资金", type:"H"}, {t:"只有反共识，才能获得超额收益", type:"G"}] },
      { id: 6, question: "你如何看待财报与研报？", options: [{t:"必须逐行阅读，寻找数据背后的真相", type:"C"}, {t:"仅作参考，市场情绪才是关键", type:"D"}, {t:"研报是滞后的，我的直觉更准", type:"D"}, {t:"财报是基础，是构建投资体系的基石", type:"C"}] },
      { id: 7, question: "在极端行情（如股灾）中，你的第一反应是？", options: [{t:"极度恐慌，立刻清仓避险", type:"B"}, {t:"极度兴奋，准备抄底优质资产", type:"A"}, {t:"冷静分析市场流动性枯竭的原因", type:"C"}, {t:"凭直觉判断这是否是“最后一跌”", type:"D"}] },
      { id: 8, question: "你对“时间”的理解是？", options: [{t:"时间是复利的朋友，越久越香", type:"E"}, {t:"时间是成本，越快回本越好", type:"F"}, {t:"时间是波动的来源，利用波动获利", type:"F"}, {t:"时间是价值的过滤器，最终会回归价值", type:"E"}] },
      { id: 9, question: "如果市场出现明显的板块轮动，你会？", options: [{t:"迅速调仓，紧跟热点板块", type:"H"}, {t:"坚守自己的持仓，不被噪音干扰", type:"G"}, {t:"分析轮动逻辑，判断是否具备持续性", type:"C"}, {t:"凭感觉，觉得热点会持续就追", type:"D"}] },
      { id: 10, question: "你认为投资中最难克服的人性弱点是？", options: [{t:"贪婪，总想赚取最后一块铜板", type:"A"}, {t:"恐惧，在底部不敢出手", type:"B"}, {t:"傲慢，认为自己永远正确", type:"C"}, {t:"盲从，容易被大众情绪左右", type:"H"}] },
      { id: 11, question: "你的投资组合构建逻辑是？", options: [{t:"集中持仓，重仓少数几只牛股", type:"A"}, {t:"分散配置，降低非系统性风险", type:"B"}, {t:"基于数学模型，进行多因子配置", type:"C"}, {t:"基于对未来趋势的判断，进行主题投资", type:"D"}] },
      { id: 12, question: "你如何评价自己的投资风格？", options: [{t:"像猎豹，静候时机，一击必中", type:"D"}, {t:"像乌龟，稳扎稳打，慢慢变富", type:"C"}, {t:"像冲浪者，在波浪中寻找平衡", type:"H"}, {t:"像考古学家，在废墟中挖掘价值", type:"G"}] }    
];
let currentQ = 0;
let scores = { A:0, B:0, C:0, D:0, E:0, F:0, G:0, H:0 };

function startQuiz() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQ];
    document.getElementById('question').innerText = q.question;
    const optDiv = document.getElementById('options');
    optDiv.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.t;
        btn.onclick = () => {
            scores[opt.type]++;
            currentQ++;
            currentQ < questions.length ? showQuestion() : showResult();
        };
        optDiv.appendChild(btn);
    });
}

function showResult() {
    // 1. 计算 4 个维度的最终倾向
    let type = "";
    type += (scores.A >= scores.B ? "A" : "B");
    type += (scores.C >= scores.D ? "C" : "D");
    type += (scores.E >= scores.F ? "E" : "F");
    type += (scores.G >= scores.H ? "G" : "H");

    // 2. 定义映射表（已添加 img 属性，请确保 images 文件夹里文件名对应）
    const mapping = {
      "ACEG": { name: "沃伦·巴菲特", title: "价值苦行僧 · 时间的信徒", desc: "你拥有极度稀缺的“延迟满足”能力。在你的世界里，市场波动不是风险，而是获取廉价筹码的恩赐。", img: "images/ACEG.jpg" },
      "ACEH": { name: "查理·芒格", title: "睿智杠精 · 逻辑的化身", desc: "你是典型的“多元思维模型”践行者。你不仅关注财务报表，更关注心理学、历史学和物理学对商业的影响。", img: "images/ACEH.jpg" },
      "ACFG": { name: "詹姆斯·西蒙斯", title: "量化之神 · 数学建模者", desc: "你相信世界万物皆可量化。你用数学模型取代了人类的直觉，通过高频交易在市场的微小波动中提取利润。", img: "images/ACFG.jpg" },
      "ACFH": { name: "彼得·林奇", title: "消费观察家 · 生活中的猎手", desc: "你坚信“投资就在身边”。你不依赖复杂的数学模型，而是通过观察商场里谁在排队、谁在买单来捕捉牛股。", img: "images/ACFH.jpg" },
      "ADEG": { name: "霍华德·马克斯", title: "周期预言家 · 逆向思维者", desc: "你是“第二层次思维”的信徒。当所有人都在欢呼时，你看到了风险；当所有人都在绝望时，你看到了机会。", img: "images/ADEG.jpg" },
      "ADEH": { name: "凯西·伍德", title: "创新狂热粉 · 信仰的信徒", desc: "你是未来的赌徒。你对颠覆性技术有着近乎偏执的信仰，愿意为了 5 年后的爆发而忍受现在的剧烈波动。", img: "images/ADEH.jpg" },
      "ADFG": { name: "乔治·索罗斯", title: "混乱制造者 · 反身性大师", desc: "你深谙“反身性”原理，认为市场不仅反映现实，更能改变现实。你擅长通过做空来挑战泡沫。", img: "images/ADFG.jpg" },
      "ADFH": { name: "孙宇晨", title: "流量收割机 · 空气币操盘手", desc: "你深谙人性，明白在金融市场中，共识就是最大的价值，而流量是共识的源头。", img: "images/ADFH.jpg" },
      "BCEG": { name: "塞斯·卡拉曼", title: "安全边际卫士 · 极度防御者", desc: "你把“不亏钱”视为投资的第一原则。你通过极低的价格买入资产，构建巨大的安全边际。", img: "images/BCEG.jpg" },
      "BCEH": { name: "约翰·博格", title: "指数躺平派 · 拒绝折腾者", desc: "你是“大道至简”的极致。你认为试图战胜市场是徒劳的，于是你选择了拥抱市场。", img: "images/BCEH.jpg" },
      "BCFG": { name: "瑞·达利欧", title: "原则机器 · 经济模型构建者", desc: "你像是一个在操作经济机器的工程师。你通过“全天候组合”来对抗各种经济环境。", img: "images/BCFG.jpg" },
      "BCFH": { name: "彼得·蒂尔", title: "反共识狂人 · 从0到1者", desc: "你是“反共识”的践行者。你认为竞争是平庸的，只有垄断才是成功的。", img: "images/BCFH.jpg" },
      "BDEG": { name: "杰西·利弗莫尔", title: "投机之王 · 孤独的狩猎者", desc: "你深知市场情绪的波动，擅长在趋势中获利，并懂得在危险来临时迅速离场。", img: "images/BDEG.jpg" },
      "BDEH": { name: "徐翔", title: "涨停板敢死队 · 极致博弈者", desc: "你对盘面语言、资金流向和情绪周期有着恐怖的敏感度。你追求的是极致的效率。", img: "images/BDEH.jpg" },
      "BDFG": { name: "葛卫东", title: "趋势之王 · 重仓博弈者", desc: "你是天生的“趋势猎手”。你敢于在关键时刻重仓出击，捕捉大级别的行情。", img: "images/BDFG.jpg" },
      "BDFH": { name: "朋友圈韭菜", title: "气氛组组长 · 追涨杀跌先锋", desc: "你是市场的“燃料”。你总是听风就是雨，哪里热闹往哪钻。", img: "images/BDFH.jpg" }
    };

    // 3. 获取并渲染结果
    const res = mapping[type] || mapping["BDFH"];
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('res-name').innerText = res.name;
    document.getElementById('res-title').innerText = res.title;
    document.getElementById('res-desc').innerText = res.desc;
    
    // 关键：渲染图片
    document.getElementById('res-img').src = res.img; 
}