const questions = [
    { id: 1, question: "你看好一款潜在收益不错但波动较大的产品，会如何安排投入资金？", options: [
        {t:"投入较大比例资金，把握潜在收益机会", type:"A"},
        {t:"投入小比例资金，控制整体波动风险", type:"B"},
        {t:"结合自身资产情况，按合理比例分配投入", type:"C"},
        {t:"根据近期市场走势，灵活决定投入金额", type:"D"}
    ]},
    { id: 2, question: "你认为理财获得收益，最核心依靠的是？", options: [
        {t:"对机会的判断，以及敢于出手的魄力", type:"A"},
        {t:"对风险的把控，守住本金的底线思维", type:"B"},
        {t:"对产品 / 行业的深度了解与理性分析", type:"C"},
        {t:"对市场情绪和资金动向的敏锐感知", type:"D"}
    ]},
    { id: 3, question: "持有的产品出现暂时的亏损，但底层逻辑未发生变化，你会？", options: [
        {t:"适当加仓，降低整体持仓成本", type:"A"},
        {t:"减仓离场，避免亏损进一步扩大", type:"B"},
        {t:"重新梳理逻辑，验证是否仍值得持有", type:"C"},
        {t:"观察走势形态，再决定后续操作", type:"D"}
    ]},
    { id: 4, question: "你更偏好的理财收益方式是？", options: [
        {t:"把握短期趋势，赚取阶段性上涨收益", type:"F"},
        {t:"长期持有优质标的，获取时间复利", type:"E"},
        {t:"通过多次小额操作，累积稳定收益", type:"F"},
        {t:"挖掘被低估的标的，等待价值兑现", type:"E"}
    ]},
    { id: 5, question: "当市场形成一致看法（全民看涨 / 看跌）时，你会？", options: [
        {t:"顺应市场趋势，跟随主流方向操作", type:"H"},
        {t:"保持独立判断，在市场极端时反向思考", type:"G"},
        {t:"关注主流资金动向，跟随资金节奏", type:"H"},
        {t:"避开拥挤共识，寻找被忽视的机会", type:"G"}
    ]},
    { id: 6, question: "做理财决策前，你如何看待数据、分析报告等信息？", options: [
        {t:"细致研读信息，以数据为核心决策依据", type:"C"},
        {t:"参考信息即可，最终结合自身感受判断", type:"D"},
        {t:"信息仅作辅助，更相信自身直观判断", type:"D"},
        {t:"以信息分析为基础，不做无依据决策", type:"C"}
    ]},
    { id: 7, question: "市场出现大幅波动、整体情绪恐慌时，你的第一反应是？", options: [
        {t:"优先控制风险，保障资产安全", type:"B"},
        {t:"关注优质标的，寻找低位布局机会", type:"A"},
        {t:"冷静分析波动原因，不情绪化操作", type:"C"},
        {t:"凭经验判断市场阶段，再做应对", type:"D"}
    ]},
    { id: 8, question: "对于理财的时间成本，你的看法是？", options: [
        {t:"长期持有能熨平波动，时间会放大收益", type:"E"},
        {t:"希望资金高效周转，尽快看到收益结果", type:"F"},
        {t:"利用短期波动操作，提升资金使用效率", type:"F"},
        {t:"好的标的需要时间兑现，愿意耐心等待", type:"E"}
    ]},
    { id: 9, question: "市场热点快速切换时，你会如何应对？", options: [
        {t:"调整持仓，跟上当前主流热点方向", type:"H"},
        {t:"坚守原有持仓，不被短期热点干扰", type:"G"},
        {t:"分析热点持续性，再决定是否调整", type:"C"},
        {t:"根据自身感受，判断是否参与热点", type:"D"}
    ]},
    { id: 10, question: "理财过程中，你最容易受哪种自身特质影响？", options: [
        {t:"希望收益最大化，不愿错过潜在机会", type:"A"},
        {t:"对亏损较为敏感，倾向规避不确定性", type:"B"},
        {t:"相信自身判断，坚持自己的决策逻辑", type:"C"},
        {t:"容易受周围人观点影响，跟随大众选择", type:"H"}
    ]},
    { id: 11, question: "你安排理财资金的整体思路是？", options: [
        {t:"聚焦少数看好的方向，集中配置", type:"A"},
        {t:"分散配置不同类型产品，降低单一风险", type:"B"},
        {t:"按规划搭建组合，遵循既定配置规则", type:"C"},
        {t:"围绕市场主线，按主题方向配置资金", type:"D"}
    ]},
    { id: 12, question: "用一种状态形容你的理财方式，你更贴近？", options: [
        {t:"等待合适时机，精准把握机会", type:"D"},
        {t:"稳步推进，以稳健为核心原则", type:"C"},
        {t:"顺应市场变化，灵活调整节奏", type:"H"},
        {t:"挖掘小众机会，寻找被低估的方向", type:"G"}
    ]}
];

let currentQ = 0;
let answers = new Array(questions.length).fill(null);

const nameToTag = {
    "沃伦·巴菲特":"（股神｜全球价值投资教父）",
    "查理·芒格":"（巴菲特黄金搭档｜多元思维大师）",
    "詹姆斯·西蒙斯":"（量化之王｜文艺复兴科技创始人）",
    "彼得·林奇":"（传奇基金经理｜业余投资者标杆）",
    "霍华德·马克斯":"（周期投资大师｜橡树资本创始人）",
    "凯西·伍德":"（木头姐｜创新科技投资女王）",
    "乔治·索罗斯":"（金融大鳄｜做空大师）",
    "孙宇晨":"（币圈话题人物｜热点营销玩家）",
    "塞斯·卡拉曼":"（安全边际之王｜极致保守投资家）",
    "约翰·博格":"（指数基金之父｜躺平投资鼻祖）",
    "瑞·达利欧":"（桥水基金创始人｜全天候策略之父）",
    "彼得·蒂尔":"（硅谷投资教父｜从0到1理论提出者）",
    "杰西·利弗莫尔":"（投机之王｜百年美股传奇作手）",
    "徐翔":"（涨停板敢死队总舵主｜A股传奇游资）",
    "葛卫东":"（期货大佬｜趋势投资大咖）",
    "朋友圈韭菜":"（市场跟风散户｜追涨杀跌气氛组）",
    "所有投资大师":"（所有专业理性投资者）"
};

function startQuiz(){
    document.getElementById('home').style.display='none';
    document.getElementById('quiz').style.display='block';
    answers=new Array(questions.length).fill(null);
    showQuestion();
}

function showQuestion(){
    const q=questions[currentQ];
    document.getElementById('question').innerText=q.question;
    const optDiv=document.getElementById('options');
    optDiv.innerHTML='';
    const total=questions.length;
    const current=currentQ+1;
    document.getElementById('progress-fill').style.width=(current/total)*100+'%';
    document.getElementById('progress-text').innerText=`${current}/${total}`;
    document.getElementById('prev-btn').disabled=currentQ===0;
    q.options.forEach(opt=>{
        const btn=document.createElement('button');
        btn.innerText=opt.t;
        if(answers[currentQ]?.type===opt.type)btn.classList.add('selected');
        btn.onclick=()=>{
            answers[currentQ]=opt;
            currentQ++;
            currentQ<total?showQuestion():showResult();
        };
        optDiv.appendChild(btn);
    });
}

function prevQuestion(){
    if(currentQ>0){currentQ--;showQuestion();}
}

// 全局图表实例，防止重复绘制
let personalityChart = null;

function showResult(){
    let scores={A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};
    answers.forEach(ans=>ans&&scores[ans.type]++);

    // 计算四大维度得分（0-100）
    const dim1 = scores.A + scores.B === 0 ? 50 : Math.round(scores.A/(scores.A+scores.B)*100);
    const dim2 = scores.C + scores.D === 0 ? 50 : Math.round(scores.C/(scores.C+scores.D)*100);
    const dim3 = scores.E + scores.F === 0 ? 50 : Math.round(scores.E/(scores.E+scores.F)*100);
    const dim4 = scores.G + scores.H === 0 ? 50 : Math.round(scores.G/(scores.G+scores.H)*100);

    const type=
        (scores.A>=scores.B?"A":"B")+
        (scores.C>=scores.D?"C":"D")+
        (scores.E>=scores.F?"E":"F")+
        (scores.G>=scores.H?"G":"H");

    const mapping={
        "ACEG":{name:"沃伦·巴菲特",tag:"股神｜全球价值投资教父",title:"价值苦行僧 · 时间的信徒",desc:"你是兼具理性研判、逆向思考与长期耐心的价值型投资者，做决策前会结合自身资产合理规划仓位，依托深度分析锚定核心价值，从不被短期走势与市场情绪左右。面对浮亏与市场恐慌，你能坚守底层逻辑、逆向布局优质标的，拒绝追涨杀跌与热点跟风；你信奉复利的力量，愿意用时间等待价值兑现，始终兼顾收益机会与风险边界，这种稳扎稳打、独立清醒的特质，让你能穿越市场周期，长期积累稳健收益。",img:"images/ACEG.webp"},
        "ACEH":{name:"查理·芒格",tag:"巴菲特黄金搭档｜多元思维大师",title:"睿智杠精 · 逻辑的化身",desc:"你是拥有多元思维模型的理性投资者，决策时既重视数据与行业分析，又能灵活顺应市场节奏，不被单一认知局限判断。你会基于自身资产情况合理配置资金，面对亏损会重新梳理逻辑验证价值，既不盲目加仓也不随意割肉，对市场共识保持独立思考，既不盲从大众也不刻意对抗趋势。你的优势在于跨维度的思考能力与冷静的决策心态，能避开市场陷阱，在长期持有与灵活应对间找到最优平衡。",img:"images/ACEH.webp"},
        "ACFG":{name:"詹姆斯·西蒙斯",tag:"量化之王｜文艺复兴科技创始人",title:"量化之神 · 数学建模者",desc:"你是典型的规则化、数据驱动型投资者，所有理财决策都依托严谨分析与既定规划，从不凭直觉随意操作。你擅长通过合理的资金分配与多次小额操作积累收益，重视资金周转效率，面对市场波动会冷静分析成因，依据数据与形态判断走势，不被恐慌情绪裹挟。你排斥无逻辑的跟风与情绪化交易，依靠系统化的思路应对市场变化，用理性规则替代主观感受，在波动中持续捕捉稳定收益。",img:"images/ACFG.webp"},
        "ACFH":{name:"彼得·林奇",tag:"传奇基金经理｜业余投资者标杆",title:"消费观察家 · 生活中的猎手",desc:"你是擅长挖掘价值、贴近市场实际的实战型投资者，习惯从真实感受与市场细节中发现机会，资金配置灵活且注重短期机会与长期价值的结合。你会依据市场走势调整投入，面对浮亏会观察形态再做决策，不执着于死守也不盲目割肉，对热点切换有自己的判断，既不盲目追逐也不完全排斥。你善于发现被市场忽视的优质标的，愿意耐心等待价值兑现，用接地气的投资思路，在日常市场中挖掘超额收益。",img:"images/ACFH.webp"},
        "ADEG":{name:"霍华德·马克斯",tag:"周期投资大师｜橡树资本创始人",title:"周期预言家 · 逆向思维者",desc:"你是精通周期规律、擅长逆向布局的资深投资者，敢于在市场恐慌时布局机会，同时依托深度分析把控决策，在极端行情中保持绝对冷静。你会集中把握优质机会，面对浮亏坚守底层逻辑，在市场形成一致共识时反向思考，避开拥挤的热门方向，重视长期复利与价值兑现。你对市场周期有着敏锐感知，能在贪婪与恐慌间找准节奏，用逆向思维收获别人难以捕捉的超额收益。",img:"images/ADEG.webp"},
        "ADEH":{name:"凯西·伍德",tag:"木头姐｜创新科技投资女王",title:"创新狂热粉 · 信仰的信徒",desc:"你是敢于布局未来、拥抱高潜力机会的成长型投资者，愿意为优质标的承担合理波动，决策时兼顾市场情绪与自身判断，灵活顺应市场趋势调整策略。你聚焦主线方向配置资金，面对亏损会依据经验判断市场阶段，不被短期波动打乱节奏，同时坚守自己看好的长期方向。你对新兴机会有着强烈敏感度，不畏惧短期波动，坚信长期价值终将兑现，是市场中敢于布局未来的先锋型选手。",img:"images/ADEH.webp"},
        "ADFG":{name:"乔治·索罗斯",tag:"金融大鳄｜做空大师",title:"混乱制造者 · 反身性大师",desc:"你是擅长把握市场波动、逆向捕捉机会的博弈型投资者，对市场情绪与资金动向极为敏锐，依靠独立判断在市场极端时寻找机会，拒绝随波逐流。你注重资金高效周转，通过阶段性趋势操作积累收益，面对热点会独立判断持续性，在恐慌行情中敢于布局错位机会。你不被市场共识绑架，善于利用市场波动与情绪偏差获利，在混乱的市场行情中总能找到属于自己的收益窗口。",img:"images/ADFG.webp"},
        "ADFH":{name:"孙宇晨",tag:"币圈话题人物｜热点营销玩家",title:"流量收割机 · 热点投机者",desc:"你是擅长捕捉市场热点、顺应流量趋势的灵活型投资者，决策高度贴合市场情绪与主流方向，善于把握阶段性上涨机会，依靠灵活操作提升资金效率。你会根据市场感受参与热点，面对波动凭直觉快速应对，不纠结于深度分析，更看重市场共识与短期机会。你对市场热度有着天然敏感度，能快速跟上主流节奏，在热点轮动中快速切换，是典型的顺势而为、聚焦短期收益的市场参与者。",img:"images/ADFH.webp"},
        "BCEG":{name:"塞斯·卡拉曼",tag:"安全边际之王｜极致保守投资家",title:"安全边际卫士 · 极度防御者",desc:"你是将风险控制放在首位、极致看重本金安全的防御型投资者，始终以小比例资金参与投资，依托深度分析做决策，绝不承担无必要的不确定性。面对浮亏会优先控制风险，在市场恐慌时坚守安全底线，逆向思考避开风险标的，坚持长期持有熨平波动。你对亏损高度敏感，拒绝激进操作与盲目跟风，所有决策都以守住本金为前提，用极致的谨慎与耐心，在市场中稳步守护资产、积累稳健收益。",img:"images/BCEG.webp"},
        "BCEH":{name:"约翰·博格",tag:"指数基金之父｜躺平投资鼻祖",title:"指数躺平派 · 长期主义者",desc:"你是追求稳健长期、拒绝折腾的躺平型投资者，习惯分散配置资产降低风险，决策理性且顺应市场整体趋势，不做主观的激进判断。你以长期持有获取复利，面对热点切换坚守原有持仓，不被短期诱惑干扰，面对市场波动冷静应对，优先保障资产安全。你排斥频繁操作与追涨杀跌，相信长期市场规律，用最简单的分散配置与长期持有，实现省心、稳健的财富积累。",img:"images/BCEH.webp"},
        "BCFG":{name:"瑞·达利欧",tag:"桥水基金创始人｜全天候策略之父",title:"原则机器 · 全天候策略师",desc:"你是依靠规则体系、全天候应对市场的策略型投资者，严格按照规划搭建资产组合，重视数据与分析，通过灵活的短期操作提升资金效率，不被情绪左右决策。你会分散配置应对不同市场环境，面对波动分析核心原因，在市场共识中保持独立判断，用系统化规则应对所有行情。你不受市场牛熊影响，依靠既定策略平衡风险与收益，在任何市场环境下都能保持稳定的投资节奏。",img:"images/BCFG.webp"},
        "BCFH":{name:"彼得·蒂尔",tag:"硅谷投资教父｜从0到1理论提出者",title:"反共识狂人 · 从零到一投资者",desc:"你是敢于反共识、挖掘从零到一机会的前瞻型投资者，决策理性且注重资金效率，善于挖掘被市场低估的小众机会，不跟随主流热点盲目操作。你会合理分配资金，面对亏损验证核心逻辑，在市场一致看好时保持警惕，专注长期价值兑现。你拒绝从众投资，坚信独立判断才能收获超额收益，用独特的眼光挖掘未被市场发现的优质机会，耐心等待成长爆发。",img:"images/BCFH.webp"},
        "BDEG":{name:"杰西·利弗莫尔",tag:"投机之王｜百年美股传奇作手",title:"投机之王 · 趋势猎手",desc:"你是精准把握时机、顺应趋势的交易型投资者，擅长等待最佳出手节点，对市场走势与情绪阶段判断精准，敢于在合适时机布局，同时控制风险敞口。你依据市场形态做决策，在市场极端时逆向思考，注重短期趋势收益，不被长期执念束缚。你对市场机会的嗅觉极为敏锐，出手果断且懂得规避风险，在趋势行情中能精准踩点，是天生的市场节奏把握者。",img:"images/BDEG.webp"},
        "BDEH":{name:"徐翔",tag:"涨停板敢死队总舵主｜A股传奇游资",title:"涨停板敢死队 · 短线博弈者",desc:"你是聚焦短线节奏、精准捕捉资金动向的实战型交易者，对市场情绪与热点方向极为敏感，顺应资金节奏快速操作，注重资金的快速周转与阶段性收益。你会灵活调整持仓跟上热点，面对波动凭经验快速应对，控制仓位规避不确定性，不被深度分析束缚决策。你擅长跟随市场主力节奏，在短线波动中快速获利，出手快、决策准，是典型的短线博弈高手。",img:"images/BDEH.webp"},
        "BDFG":{name:"葛卫东",tag:"期货大佬｜趋势投资大咖",title:"趋势之王 · 重仓交易者",desc:"你是敢于重仓顺势、把握大级别行情的趋势型投资者，聚焦市场主线方向配置资金，对趋势持续性判断精准，善于逆向挖掘机会，同时控制风险底线。你依靠短期趋势操作积累收益，面对市场波动冷静判断阶段，不盲从大众也不刻意逆势，在机会明确时敢于集中布局。你对市场趋势有着极强的把控力，能拿住趋势行情、避开震荡陷阱，在大级别行情中收获丰厚收益。",img:"images/BDFG.webp"},
        "BDFH":{name:"朋友圈韭菜",tag:"市场跟风散户｜追涨杀跌气氛组",title:"气氛组组长 · 追涨杀跌选手",desc:"你是典型的市场情绪跟随者，理财决策容易受周围观点与热点风向影响，习惯追逐当下热门方向，注重快速看到收益结果，缺乏独立的决策逻辑。你会依据市场感受随意操作，面对亏损容易恐慌离场，在市场一致看涨时盲目跟风，不懂得控制仓位与风险。你是市场情绪的放大器，虽能在行情向好时获得短期收益，但极易因追涨杀跌产生亏损，需要建立独立思考与风险意识。",img:"images/BDFH.webp"}
    };

    const res=mapping[type]||mapping["BDFH"];
    document.getElementById('quiz').style.display='none';
    document.getElementById('result').style.display='block';
    document.getElementById('res-name').innerText=res.name;
    document.getElementById('res-tag').innerText=res.tag;
    document.getElementById('res-title').innerText=res.title;
    document.getElementById('res-desc').innerText=res.desc;
    document.getElementById('res-img').src=res.img;

    // ========== 绘制人格维度雷达图 ==========
    const ctx = document.getElementById('personalityChart').getContext('2d');
    // 销毁旧图表
    if(personalityChart) personalityChart.destroy();
    personalityChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['激进倾向','理性分析','长期耐心','逆向思维'],
            datasets: [{
                label: '你的人格维度得分',
                data: [dim1, dim2, dim3, dim4],
                backgroundColor: 'rgba(110,96,231,0.2)',
                borderColor: 'rgba(110,96,231,1)',
                pointBackgroundColor: '#6E60E7',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#6E60E7'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {display:true},
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {stepSize:20}
                }
            },
            plugins: {
                legend: {position:'bottom'}
            }
        }
    });

    saveResultToLocal(res);
}

function showMatch(){
    const name=document.getElementById('res-name').innerText;
    const matchBox=document.getElementById('match-text');
    const matchMap={
        "沃伦·巴菲特":{soulmate:"查理·芒格",opponent:"杰西·利弗莫尔",reason:"现实黄金搭档，共同践行长期价值投资；死对头为极致短线投机者，投资底层逻辑完全相悖"},
        "查理·芒格":{soulmate:"沃伦·巴菲特",opponent:"徐翔",reason:"多元思维模型互补，坚守理性价值投资；死对头为短线涨停博弈，违背长期投资原则"},
        "詹姆斯·西蒙斯":{soulmate:"瑞·达利欧",opponent:"葛卫东",reason:"均为量化模型派，依靠数据与规则决策；死对头凭盘感博弈，排斥系统化投资"},
        "彼得·林奇":{soulmate:"彼得·蒂尔",opponent:"孙宇晨",reason:"擅长从生活中挖掘成长股，聚焦实体价值；死对头为流量投机，无实质价值支撑"},
        "霍华德·马克斯":{soulmate:"塞斯·卡拉曼",opponent:"朋友圈韭菜",reason:"深耕逆向投资与安全边际，精准判断市场周期；死对头追涨杀跌，完全无视风险"},
        "凯西·伍德":{soulmate:"彼得·蒂尔",opponent:"约翰·博格",reason:"押注颠覆性创新赛道，追求高成长收益；死对头为被动指数派，排斥高波动标的"},
        "乔治·索罗斯":{soulmate:"杰西·利弗莫尔",opponent:"塞斯·卡拉曼",reason:"擅长宏观博弈与趋势投机，抓市场大波动；死对头为极致防御派，拒绝高风险投机"},
        "孙宇晨":{soulmate:"朋友圈韭菜",opponent:"詹姆斯·西蒙斯",reason:"依靠热点与流量共识获利，受众高度重合；死对头为纯量化派，彻底排斥情绪投机"},
        "塞斯·卡拉曼":{soulmate:"霍华德·马克斯",opponent:"凯西·伍德",reason:"把本金安全放在第一位，极致保守防御；死对头为高波动创新投机，风险偏好完全对立"},
        "约翰·博格":{soulmate:"瑞·达利欧",opponent:"乔治·索罗斯",reason:"主张指数躺平与分散配置，长期稳健；死对头为激进宏观投机，频繁操作违背原则"},
        "瑞·达利欧":{soulmate:"詹姆斯·西蒙斯",opponent:"徐翔",reason:"全天候策略+模型配置，用规则战胜人性；死对头为短线情绪化博弈，无投资体系"},
        "彼得·蒂尔":{soulmate:"彼得·林奇",opponent:"约翰·博格",reason:"挖掘从0到1的超级成长股，产业洞察力极强；死对头为被动指数派，拒绝主动选股"},
        "杰西·利弗莫尔":{soulmate:"乔治·索罗斯",opponent:"沃伦·巴菲特",reason:"极致趋势投机，靠情绪与波动获利；死对头为长期价值派，鄙视短线投机行为"},
        "徐翔":{soulmate:"葛卫东",opponent:"查理·芒格",reason:"专注短线资金博弈，精准抓市场情绪；死对头为理性价值派，完全排斥短线炒作"},
        "葛卫东":{soulmate:"徐翔",opponent:"塞斯·卡拉曼",reason:"重仓趋势博弈，对市场敏感度极高；死对头为极致防御派，不认同激进投资"},
        "朋友圈韭菜":{soulmate:"孙宇晨",opponent:"所有投资大师",reason:"跟风热点、情绪决策，与流量投机者共生；与所有专业大师的理性投资逻辑完全对立"}
    };
    const data=matchMap[name]||{soulmate:"未匹配",opponent:"未匹配",reason:"数据异常，请重新测试"};
    const soulmateWithTag=`${data.soulmate}${nameToTag[data.soulmate]||''}`;
    const opponentWithTag=`${data.opponent}${nameToTag[data.opponent]||''}`;
    matchBox.innerHTML=`💖 投资灵魂伴侣：<b>${soulmateWithTag}</b><br>💢 投资死对头：<b>${opponentWithTag}</b><br>📝 匹配理由：${data.reason}`;
}
