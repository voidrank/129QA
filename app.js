/**
 * Created by lancy on 11/9/15.
 */


var DATA = [
    {content:"一、一二九部分\n1、一二九运动爆发于（   ）年。\nA、1934 B、1935 C、1936 D、1937",answer:"B"},
    {content:"2、一二九运动最先在（   ）发生，然后得到全国各地社会各界的响应和支持。\nA北京 B北平 C天津 D 河北",answer:"A"},
    {content:"3、一二九运动中最流行的口号是：（   ）\nA、“打倒日本帝国主义！”\nB、“华北危急！中华民族危急！”\nC、“打倒卖国贼！”“立即向日本宣战！”\nD、“全国武装起来保卫华北！”。",answer:"B"},
    {content:"4、一二九运动是在（   ）的领导下进行。\nA、全国学联 B、中国共产党 C、国民党左派 D、工人阶级",answer:"B"},
    {content:"5、一二九运动的性质是（   ）\nA、反对资产阶级专政 B、反对封建军阀 C、抗日救国 D、解放中国",answer:"C"},
    {content:"6、九一八事变后，日本帝国主义进一步发动华北事变，企图使（   ）五省脱离中国，由日本控制。在这个历史背景下，中国共产党领导了“一二九”学生抗日救亡爱国运动。\nA 冀、鲁、晋、察、吉 B 冀、鲁、晋、察、绥\nC 冀、鲁、晋、察、辽 D 冀、鲁、晋、察、黑",answer:"B"},
    {content:"7、1935年12月10日，北平各大中学校发表联合宣言，宣布自即日起举行总罢课。提出罢课的具体目标是（   ）（多选题）\nA 誓死反对分割我国领土主权的傀儡组织。\nB 反对投降外交。 \nC 要求动员全国抗日。\nD 争取救国自由。呼吁全国各界立即响应，一致行动。要求当局立即释放被捕学生，撤回封锁各校的军警。",answer:"ABCD"},
    {content:"8、一二九运动在历史上讲，是准备（    ）的一个非常重要的方面。\nA 百团大战 B “八一三”淞沪抗战 C 抗日战争 D 西安事变",answer:"C"},
    {content:"9、一二?九运动是在什么情况之下发生的（   ）（多选题）\nA 在共产党被认为绝对无权、绝对不合法的国民党统治区 B 军事“围剿” C 文化“围剿” D 中国政府发表《自卫抗战声明》",answer:"AD"},
    {content:"10、1936年1月，京、津等地学生组织（   ），深入到工农群众中去宣传抗日。\nA 学生联合会 B学生委员会 C 自卫队 D 南下宣传团",answer:"D"},
    {content:"二、抗日战争部分\n1、19世纪末，帝国主义在中国掀起了瓜分狂潮，其中日本以为其势力范围(   )\nA、长江流域 B、山东省 C、福建省 D、广西省",answer:"C"},
    {content:"2.1935年1月,(   )确定了毛泽东在中共中央和红军的领导地位，是党的历史上一个生死攸关的转折点，标志着中国共产党在政治上开始走向成熟。\nA.八七会议 B.遵义会议 C.洛川会议",answer:"B"},
    {content:"3.1935年，日本帝国主义发动(   )，旨在把中国华北地区变为第二个“满洲国”。\nA.八一三事变 B.华北事变 C.七七事变 D.九一八事变",answer:"B"},
    {content:"4.1936年12月12日，张学良和杨虎城发动了西安事变，对蒋介石实行兵谏，要求停止内战，一致抗日。中共中央派遣(   )到达西安，确定了用和平方式解决西安事变的方针，促进了抗日民族统一战线的形成。\nA.董必武 B.周恩来 C.朱德 D.毛泽东",answer:"B"},
    {content:"5.1937年9月，八路军115师取得(   )。这是全国抗战以来中国军队的第一次大胜利，打破了日军不可战胜的神话，振奋了全国人心，提高了共产党和八路军的威望。\nA.台儿庄大捷 B.雁门关大捷 C.平型关大捷 D百团战役全面胜利",answer:"C"},
    {content:"6.1938年五六月间，毛泽东发表(   )的演讲，针对部分人的“中国必亡论”和“中国速胜论”，科学地预见到抗日战争将经过战略防御、战略相持和战略反攻三个阶段，才能取得最后胜利，强调争取抗战胜利的唯一正确道路是充分动员和依靠群众，实行人民战争。\nA.《论持久战》 B.《矛盾论》 C.《实践论》 D. 《中国革命战争的战略问题》",answer:"A"},
    {content:"7.1939年10月4日，毛泽东为中共中央的刊物《共产党人》撰写发刊词，明确提出了中国共产党在中国革命中战胜敌人的三个法宝，这就是统一战线、(   )和党的建设。 \nA.武装斗争 B.三大纪律 C.和平谈判 D.长期斗争",answer:"A"},
    {content:"8、1943年底，根据开罗会议的决议中国政府决定派国远征军队从北部再次进入缅甸，迅速攻人缅甸，迅速攻人缅北地区。次年春，在美国的一再要求和压力下，蒋介石被迫同意将驻扎云南的中国军队增援缅甸战场。5月，中国远征军一举攻占缅北重镇密支那，打通中国与(   )的陆上通道。\nA、越南 B、泰国 C、印度 D、老挝",answer:"A"},
    {content:"9、开罗会议达成共识，将(   )以来在台湾和澎湖岛等中国领土归还中国，并恢复朝鲜的独立和自由。\nA、日俄战争 B、第二次世界大战 C、甲午战争 D、第一次世界大战",answer:"D"},
    {content:"10、1945年7月26日，（   ）三国联合发表《波茨坦公告》，重申《开罗宣言》的各项原则，敦促日本立即无条件投降，并确定战后占领和管制日本的基本原则\nA、美英苏 B、中美苏 C、中美英 D、中英苏",answer:"C"}
];

var koa = require("koa");
var render = require("koa-ejs");
var router = require("koa-router")();
var session = require("koa-session");
var serve = require("koa-static");
var mount = require("koa-mount");
var bodyParser = require("koa-bodyparser");

var app = koa();
app.use(bodyParser());
var staticServer = koa();


render(app, {
    root: __dirname,
    layout: "index",
    viewExt: "html",
    cache: false,
    debug: true,
});

router.get("/", function * () {
    this.session.index = this.session.index | 0;
    this.session.end = this.session.end | 0;

    if (this.session.index < DATA.length && this.session.end === 0)
        yield this.render("index", DATA[this.session.index]);
    else
        this.body = "问答结束";
});

router.post("/answer", function * () {
    this.session.index = this.session.index | 0;
    var answer = this.request.body.answer;
    if (this.session.index < DATA.length && this.session.end === 0) {
        console.log(answer);
        if (answer !== DATA[this.session.index].answer) {
            this.session.end = 1;
            this.body = "回答错误";
        }
        else {
            this.session.index++;
            this.body = "回答正确";
        }
    }
    else {
        this.body = "问答结束";
    }
});


staticServer.use(serve("."));

app.keys = ['askjdfzxluy28ry2iu hr4ojhxzbcv ;iu24hf;qu3hg'];
app.use(mount("/static", staticServer));
app.use(session(app));
app.use(router.routes());

app.listen(7000);
