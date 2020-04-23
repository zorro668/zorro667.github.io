var lang = {
	cn: {
		com: {
			success: "提交成功",
			title: "追 風",
			rule: "規則",
			tip: "提示",
			the: "第",
			times: "筆",
			count_error: "最低購買0.1ETH",
			lowerError: "不能低於上次投資額",
			copySuccess: "複製成功",
			balance: "帳戶餘額",
			balanceError: "餘額不足",
			noInvest: "未投資或已出局",
			noId: "推薦人不能為空！",
			detail: "明細",
			quotaError:"今日額度已售完，明天再來！",
			minCount:"最低500",	
			zroBalanceError:"ZRO餘額不足",
		},
		token: {
			market: "當前行情",
			title: "通 證 購 買",
			buy: "購買",
			my: "我 的",
			fund: ["發展基金", "保障基金", "穩定基金", "激勵基金"],
			stage: "當前階段",
			getToken: "獲得通證",
			quota: ["今日剩餘額度", "本阶剩余额度"],
			tokenRule: "\
一. 發行量：3.3億枚；\n\
二. 分配比例：\n\
發展基金：3%；\n\
保障基金：20%；\n\
穩定基金：7%；\n\
礦層基金：30%；\n\
激勵基金：40%；\n\
三. 發展基金990萬的對撞機制\n\
層數 / 通證量（萬枚）/ 比例\n\
L1 / 40 / 1:2000；\n\
L2 / 50 / 1:1851；\n\
L3 / 60 / 1:1714；\n\
L4 / 70 / 1:1590；\n\
L5 / 80 / 1:1470；\n\
L6 / 90 / 1:1361；\n\
L7 / 100 / 1:1261；\n\
L8 / 110 / 1:1167；\n\
L9 / 120 / 1:1081；\n\
L10 / 130 / 1:844；\n\
L11 / 140 / 1:777；\n\
四. 20%保障基金6600萬通證，每天釋放6600枚，該部分購買的ETH全部流入驗證池為投資者提供保障，發展基金對撞結束，開始釋放保障基金。",
		},
		game: {
			title: "等風來  不如追風去",
			intro: "【追風】是一款以太坊智能合約的DAPP理財遊戲，所有規則及分配上鏈，是一個百分之百公正.公平.透明的去中心化可编程金融生態。",
			quotation: "當前行情",
			join: "參與",
			joinGame: "參 與 遊 戲",
			invite: "邀請",
			rule: "規則",
			send: "發送",
			my_share: "我的邀請人是",
			share_count: "我的邀請數量",
			invite_link: "我的邀請鏈接",
			copy: "復制我的邀請鏈接",
			canPlay: "出局前不能再投資",
			myAddress: "我的地址",
			myID: "我的ID",
			future: "未 來 基 金",
			futureText: "參與每筆投資理財的2%資金進入未來基金池，未來基金池上額為5000ETH，該池為48小時倒數計時歸零時開獎，獎金由最後投資的50個節點按投資權重比獲取。理財池每進4ETH，倒數計時時間順延4小時，但最大上限時間為48小時。",
			countDown: "倒計時",
			whitePaper: "白皮書",
			video:"視頻",
			ppt: "其他資料",
			join_title: "參與遊戲，選擇套餐",
			viewRule: "查看規則",
			luckPrize: "LUCK幸运奖",
			totalInvest: "當前投資總筆數",
			myInvest: "我的投資",
			win: "已中獎",
			ecology: "量 化 生 態",
			quantify: "量化",
			record: "記錄",
			day: "天",
			time: "時間",
			count: "數量",
			days: "天數",
			status: "狀態",
			processing: "理財中",
			redeem: "贖回",
			reInvest: "复投",
			futureRule: '\
1.投4，8，16，32，64，128ETH，對應，1.8倍，2.倍，2.2倍，2.4倍，2.6倍，2.8倍出局。\n\
2.出局後原點可複投，原網體保留。\n\
3.複投必須大於或等於原投資級別。\n\
4.根據系統運營的活躍參數產生日分紅收益數值。',
            
            ecologyRule:"量化靜態收益（數量最低500枚）\n\
時長     收益（月化）\n\
5天      3%\n\
15天    5%\n\
30天    8%\n\
\n\
量化推廣收益：小區靜態收益的10%",
		},
		income: {
			title: "我的收益",
			unsettled_income: "未結算收益",
			settle: "結算",
			gameReward_income: "可提現收益",
			gameReward: "提現",
			static_income: "靜態收益",
			dynamic_income: "動態收益",
			total_settled: "已結算收益",
			limit_income: "倍動靜出局還差",
			countDown: "區塊分紅時間",
			fee: "服務費",
			base:"今日靜態分紅基數",
		    luckyPrize:"幸運獎",
		    recentInvest:"最近投資",
		    
		    
		},
		detail: {
			title: "動態明細",
			node_icome: "超級節點獎",
			samllArea: "組隊獎勵",
			teamArea: "戰隊獎勵",
			team: "戰隊網絡",
			weight: "全域網絡",
			invite: "邀請獎",
			extend: "量化推廣獎",
			topTitle: "TOP英雄獎",
			share_title: "邀請俠士榜",
			small_title: "小區TOP獎",
			brand_found:"品牌自治基金",
		},
		team: {
			direct_push: "我的邀請",
			direct_node: "我的邀請節點",
			direct_achievement: "我的邀請業績",
			my_team: "我的戰隊",
			team_node: "戰隊節點",
			large_area: "大區業績",
			second_area: "次大區業績",
			small_area: "小區總業績",
			viewDetail:"查看詳細",
			invest:"投資",
			financial:"理財",
			directNew:"本月邀請新增",
			smallNew:"本月小區新增",
		},
		statistics: {
			title: "其他數據",
			my_level: "我的級別",
			statistics: "數 據 統 計",
			next_stage: "下一階段還差",
			A5_node: "A5節點數量",
			token_sales: "通證銷售總數",
			burn_down: "通證焚毀總數",
			nodeName: ["普通節點", "","智勇節點(F1)", "智能節點(F2)", "智慧節點(F3)"],
			superNode:"超級節點",
			todayCapital:"今日進場資金",
		},
		ranking: {
			title: "TOP英雄",
			Countdown: "開獎倒計時",
			share_title: "邀請俠士獎",
			small_title: "本週小區TOP榜",
			achievement: "我的業績",
			rank: "我的排名",
			veiw_top10: "查看前10名節點",
			veiw_top3: "查看前3名",
			rank3: "本日邀請前3名",
			group10: "本週小區前10名",
			rank_title: "排名",
			ac_title: "業績",
			id: "ID",
			topRule:"小區TOP榜：1% \n\
每週新增的獎勵1%排名，前5名 \n\
第一名：45%，第二名：25%，第三名：15%​​，第四名：10%，第五名：5%",
            direcRule:"邀請俠士獎：1%（拿當天新增業績的1%）\n\
邀請業績實时排名，顯示前3排名：\n\
第一名：50%，第二名：30%，第三名：20%",
	},
},
	en: {
		com: {
			success: "Submit Success",
			title: "WIND CHASING",
			rule: "Rules",
			tip: "Tips",
			the: "The",
			times: "times",
			count_error: "Minimum purchase 0.1 ETH",
			lowerError: "Cannot be lower than the last investment",
			copySuccess: "Successful replication",
			balance: "Balance",
			balanceError: "Insufficient balance",
			noInvest: "Not invested or out of needs",
			noId: "Recommender cannot be empty!",
			detail: "Detail",
			quotaError:"The quota is sold out today, come back tomorrow!",
			minCount:"Minimum 500",	
			zroBalanceError:"Balance Insufficient",
		},
		token: {
			market: "Market",
			title: "Buy Token",
			buy: "Buy",
			my: "My",
			fund: ["Develop", "Ensure", "Stable", "Stable"],
			stage: "Stage",
			getToken: "Get Token",
			quota: ["Today's quota", "Quota of this stage"],
			tokenRule: "\
1、Circulation: 330 million; \n\
2、Distribution ratio: \n\
Development Fund: 3%; \n\
Security Fund: 20%; \n\
Stabilization fund: 7%; \n\
Deposit fund: 30%; \n\
Incentive fund: 40%; \n\
3、9.9 million collision mechanism of development fund \n\
Number of floors / number of passes (10000) / proportion \n\
L1 / 40 / 1:2000; \n\
L2 / 50 / 1:1851; \n\
L3 / 60 / 1:1714; \n\
L4 / 70 / 1:1590; \n\
L5 / 80 / 1:1470; \n\
L6 / 90 / 1:1361； \n\
L7 / 100 / 1:1261; \n\
L8 / 110 / 1:1167; \n\
L9 / 120 / 1:1081; \n\
L10 / 130 / 1:844; \n\
L11 / 140 / 1:777; \n\
4、The 20% guarantee fund has 66 million certificates and 6600 certificates are released every day. All the ETH purchased by this part flows into the verification pool to provide protection for investors. The development fund collision ends and the guarantee fund is released"
		},
		game: {
			title: "It's better to chase after the wind comes",
			intro: "[follow the wind] is a DAPP financial management game of Ethereum smart contract. All rules and distribution are linked. It is a 100% fair, fair and transparent decentralized programmable financial ecosystem.",
			quotation: "Current Market",
			join: "Join",
			joinGame: "Join Game",
			invite: "Invite",
			rule: "Rules",
			send: "Send",
			my_share: "My directly recommended is",
			share_count: "Directly recommended quantity",
			invite_link: "My invitation link",
			copy: "Copy Link",
			canPlay: "No reinvestment before tripling out",
			myAddress: "My address",
			myID: "My ID",
			future: "Future Fund",
			futureText: "2% of the funds involved in each investment and wealth management enter the future fund pool, with the amount of 5000eth on the future fund pool. The pool will start when the 48 hour countdown returns to zero, and the bonus will be obtained from the 50 nodes of the final investment according to the investment weight ratio. The countdown time will be postponed for 4 hours for each 4 eth in the wealth management pool, but the maximum time limit is 48 hours.",
			countDown: "Count Down",
			whitePaper: "White Paper",
			video:"Video",
			ppt: "File",
			join_title: "Investment and choose",
			viewRule: "View Rules",
			luckPrize: "Luck Prize",
			totalInvest: "Total number of invest",
			myInvest: "My Invest",
			win: "Win Prize",
			ecology: "Ecology",
			quantify: "Quantify",
			record: "record",
			day: "day",
			time: "Time",
			count: "Count",
			days: "Day",
			status: "Status",
			processing: "Processing",
			redeem: "Redeem",
			reInvest: "reInvest",
			futureRule: '\
1. Cast 4, 8, 16, 32, 64,128eth, corresponding,1.8. Times ,2. Times, 2.2 times, 2.4 times, 2.6 times,2.8 Times out. \n\
2. The origin can be re cast after outgoing, and the original network body is reserved. \n\
3. The reinvestment must be greater than or equal to the original investment level. \n\
4. According to the active parameters of the system operation, the value of dividend income on the production date.',
           
            ecologyRule:"Quantified static benefits (minimum 500) \n\
Duration income (monthly) \n\
5 days 3% \n\
15 days 5% \n\
30 days 8% \n\
\n\
Quantitative promotion income: 10% of the static income of the community",
		},
		income: {
			title: "My earning",
			unsettled_income: "Unsettled earning",
			settle: "Settle",
			gameReward_income: "Cashable earning",
			gameReward: "Withdraw",
			static_income: "Static earning",
			dynamic_income: "Dynamic earning",
			total_settled: "Settled earning",
			limit_income: " times out needs",
			countDown: "Countdown",
			fee: "fees",
			base:"Today's static base",
			luckyPrize:"Luck Prize",
			recentInvest:"Recent Invest",
			
		},
		detail: {
			title: "Dynamic Details",
			node_icome: "Node Award",
			samllArea: "Small reward",
			teamArea: "Team reard",
			team: "Team network",
			weight: "Global network",
			invite: "Invite award",
			extend: "Recommend award",
			topTitle: "Top Heroes reard",
			share_title: "Direct push top reard",
			small_title: "Small aera top reard",
			brand_found:"Brand Found",
		},
		team: {
			direct_push: "My direct push",
			direct_node: "Direct push node",
			direct_achievement: "Direct push achievement",
			my_team: "My Team",
			team_node: "Team Node",
			large_area: "Large area",
			second_area: "Second area",
			small_area: "small area",
			viewDetail:"View Detail",
			financial:"Financial",
			invest:"Invest",
			directNew:"Directly added this month",
			smallNew:"Small Area added this month",
		},
		statistics: {
			title: "Other Data",
			my_level: "Level",
			statistics: "Data Statistics",
			next_stage: "Distance next stage",
			A5_node: "A5 Node quantity",
			token_sales: "Total token sold",
			burn_down: "Total token destroyed",
			nodeName: ["Ordinary node", "", "Brave Node (F1)","Intelligent node (F2)",  "Smart node (F3)"],
			superNode:"Super node",
			todayCapital:"Today's capital",

		},
		ranking: {
			title: "Top Heroes",
			Countdown: "Countdown",
			share_title: "Direct push rank",
			small_title: "Small aera  rank",
			achievement: "My Performance",
			rank: "My rank",
			keep_up: "Come on",
			veiw_top10: "check Top 10 node",
			veiw_top3: "Top 3",
			rank3: "Top 3 invited today",
			group10: "Small Top 10 this week",
			rank_title:"Rank",
			ac_title: "Achievement",
			id: "ID",
			topRule:"top list of communities: 1% \n\
1% newly added every week, top 5 \n\
First place: 45%, second place: 25%, third place: 15%, fourth place: 10%, fifth place: 5%",
            direcRule:"Invited Knight Award: 1% (take 1% of the new performance of the day)\n\
Invite performance ranking in real time, showing the top 3 rankings, first place: 50%, second place: 30%, third place: 20%",
		},
		
	},

}