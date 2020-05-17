var data = {
	defaultLang: "en",
	langItem: lang["en"],
	lang: lang,
	menu: false,
	ethBalance: "--",
	tokenBalance: "--",
	playerID: "",
	day:0,
	sendError1: false,
	sendError2: false,
	sendError3: false,
	copySuccess: false,
	balanceError: false,
	countError:false,
	quitError: false,
	ingError: false,
	lowerError: false,
	quotaError:false,
	zroBalanceError:false,
	minCount:false,
	canPlay: false,
	recommendError: false,
	futureRule:false,
	luckRule:false,
	topRule:false,
	direcRule:false,
	directPop: false,
	groupPop: false,
	langList: {
		en: "English",
		cn: "中文（繁体）",
	},
	buyToken: {
		ethRatio: "--",
		usdtRatio: 0.5,
		ethNumber: 1,
		layer: 0,
		pid: null,
		address: null,
		tokenCount:0,
		quoat:"--",
		todayQuoat:0,
		
	},
	gameData: {
		bonusPool: "--",
		totalTimes: "--",
		myTimes: "--",
		isWin: 0,
		investNumber: 8,
	},
	financial: {
		joinDays: 5,
		quantity: 500,
		count:0,
		record: [],
	},
	tabData: {
		tokenItem: "buy",
		ecologyItem: "join",
		investCount: [4,8, 16, 32, 64,128],
		days: [5, 15, 30],
	},
	income: {
		staticRatio:"--",
		unsettled: {
			eth:"--",
			zro:"--"
		},
		settled: {
			eth:"--",
			zro:"--"
		},
		gameReward:{
			eth:"--",
			zro:"--"
		},
		statics: {
			eth:"--",
			zro:"--"
		},
		luck:"--",
		dynamic: {
			eth:"--",
			zro:"--",
			detail:{},
			invitation:"--",
		},
		
		inviting:[],
		recent:"--",
		limit: 0
	},
	team: {
		direct: {
			nodes: "--",
			invest: "--",
			financial:"--",
		},
		group: {
			nodes: "--",
			largeArea:{},
			secondArea:{},
			smallArea: {},
			directNew:"--",
			smallNew:"--",
		},
	},
	statistics:{
		tokenSales:"--",
		burnDown:"--",
		primary:"--",
		middle:"--",
		senior:"--",
		capital:"--"
	},
	rankData: {
		direct: {
			achievement: "--",
			top3: [{n:1,u:0,m:0},{n:2,u:0,m:0},{n:3,u:0,m:0}]
		},
		group: {
			achievement: "--",
			rank:"--",
			top10: []
		},
		
	},
	otherData: {
		grade: 0,
		superNode:0,
		nextStage: 0,
		a5Node: 0,
	},
	web3: null,
	web3Provider: null,
	contracts: {},
	pid: 0,

	isPlay: true,
	investAccount: 0,
	investTime:0,
	account: null,
	lastInvest: 0,
	blockTime:0,
	timeId: {
		"scoundDown": null,
		"show": null
	},
	whitePaper:"",
	video:"",
	ppt:"",
	realStatic:"--",
}