var app = new Vue({
	el: "#app",
	data: data,
	methods: {
		SC: function(name, value) {
			var Days = 7;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		},
		GC: function(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if(arr = document.cookie.match(reg))
				return unescape(arr[2]);
			else
				return null;
		},
		IL: function() {
			var _t = this, value = this.GC("lang");for(var key in _t.lang) {
				if(key == value) {
					_t.langItem = _t.lang[key];
					break;
				}}
		},
		changeLang: function(index) {
			this.SC("lang", index),this.IL(),this.menu = false
		},
		displayMenu: function() {
			this.menu = !this.menu;
		},
		tokenTab: function(index) {
			this.tabData.tokenItem = index
		},
		clickTab: function(index) {
			this.tabData.ecologyItem = index
		},
		investTab: function(index) {
			this.gameData.investNumber = index;
		},
		daysTab: function(index) {
			this.financial.joinDays = index;

		},
		showPop: function(arg, callback) {

			if(arg == "futureRule") {
				this.futureRule = true;
			} else if(arg == "luckRule") {
				this.luckRule = true;
			} else if(arg == "topRule") {
				this.topRule = true;
			} else if(arg == "direcRule") {
				this.direcRule = true;
			}else if(arg == "directPop") {
				this.directPop = true;
				this.inviteTopList();
			}
		},
		hidePop: function() {

			this.copySuccess = false;
			this.balanceError = false;
			this.canPlay = false;

			this.lowerError = false;
			this.recommendError = false;

			this.countError = false;
			this.quotaError = false;
			this.futureRule = false;
			this.luckRule = false;
			this.topRule = false;
			this.direcRule = false;
			this.minCount = false;
			this.zroBalanceError = false;
			this.directPop = false;

		},
		getQuantity: function(val) {
			this.quantity = val;
		},
		i: async function() {
			return (this.IL(),this.PID(),await this.I3());
		},
		I3: async function() {
			if(window.ethereum) {
				window.web3 = new Web3(ethereum);
				try {
					await ethereum.enable();
					this.web3Provider = ethereum;
				} catch(error) {}
			} else if(window.web3) {
				this.web3Provider = web3.currentProvider;
				window.web3 = new Web3(web3.currentProvider);
			} else {
				console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
			}
			return (this.A(),this.I());
		},
		IG: function() {
			var _t = this;
			_t.getEthBalance();
			_t.getTokenBalance();

			_t.getToken();
			_t.getUserInfo();
			_t.getGameInfo();
			_t.getURL();
			_t.getStaticReward();
			
			setTimeout(function() {
				_t.getRecord();
			}, 3000);

			setInterval(function() {
				_t.getEthBalance();
				_t.getTokenBalance();

				_t.getToken();
				_t.getUserInfo();
				_t.getGameInfo();
				_t.getRecord();
				_t.getURL();
				_t.getStaticReward();
				

			}, 30000);

		},
		copy: function() {
			var _t = this;
			var clipboard = new ClipboardJS('.btn');
			clipboard.on('success', function(e) {
				e.clearSelection();
				_t.copySuccess = true;
			});

			clipboard.on('error', function(e) {
				alert("copy failed!")
			});
		},
		I: function() {
			var _t = this;
			_t.contracts.game = TruffleContract(game_info);
			_t.contracts.game.setProvider(_t.web3Provider);
			_t.contracts.token = TruffleContract(token_info);
			_t.contracts.token.setProvider(_t.web3Provider);
			_t.IG();
		},
		PID: function() {
			var reg = new RegExp('(^|&)' + 'id' + '=([^&]*)(&|$)'),r = window.location.search.substr(1).match(reg);
			this.pid = r != null?parseInt(decodeURIComponent(r[2])):0;
		},
		getEthBalance: function() { 
			var _t = this;
			var account = web3.eth.coinbase;
			web3.eth.getBalance(account, function(error, result) {
				_t.ethBalance = result / 10 ** 18;
				
			})
		},

		getTokenBalance: function() { // token数量
			var account = web3.eth.coinbase,
				_t = this;
			this.contracts.token.deployed().then(function(instance) {
				contract = instance;
				return contract.balanceOf(account);
			}).then(function(result) {
				
				_t.tokenBalance = result / 10 ** 8;
			}).catch(function(err) {
				console.log(err.message + " at token.balanceOf error");
			});
		},
		getURL: function() { // getURL
			var account = web3.eth.coinbase,
				_t = this;
			this.contracts.token.deployed().then(function(instance) {

				return [instance.openUrl(0), instance.openUrl(1), instance.openUrl(2)];
			}).then(function(ps) {
				Promise.all(ps).then(function(result) {
					
					_t.whitePaper = result[0];
					_t.video = result[1];
					_t.ppt = result[2];
				})
			}).catch(function(err) {
				console.log(err.message + " at token.getURL error");
			});
		},
		inviteTopList: function() { // inviteTopList
			
			var account = web3.eth.coinbase,
				_t = this;
			   
			this.contracts.game.deployed().then(function(instance) {

				return [instance.DayInviteTopMapping(_t.day,0), instance.DayInviteTopMapping(_t.day,1), instance.DayInviteTopMapping(_t.day,2)];
			}).then(function(ps) {
				Promise.all(ps).then(function(result) {
					
                  
					_t.rankData.direct.top3[0].u = parseInt(result[0][1]);
					_t.rankData.direct.top3[0].m = result[0][2] / 10 ** 18;
					_t.rankData.direct.top3[1].u = parseInt(result[1][1]);
					_t.rankData.direct.top3[1].m = result[1][2] / 10 ** 18;
					_t.rankData.direct.top3[2].u = parseInt(result[2][1]);
					_t.rankData.direct.top3[2].m = result[2][2] / 10 ** 18;
				})
			}).catch(function(err) {
				console.log(err.message + " at inviteTopList error");
			});
		},

		toBuyToken: function() { 
			var amount = this.buyToken.ethNumber,
				_t = this;
			var value = amount * 10 ** 18;
			var contract;

			var pid;

			if(_t.buyToken.pid == 0) {
				pid = _t.pid;
			} else {
				pid = _t.buyToken.pid
			}

			if(pid == 0) {
				_t.recommendError = true;
				return false;
			} else if(_t.buyToken.todayQuoat == 0) {
				_t.quotaError = true;
				return false;
			} else if(amount < 0.1) {
				this.countError = true;
				this.buyToken.ethNumber = 1;
				return false;
			} else if(this.buyToken.ethNumber >= this.ethBalance) {
				_t.balanceError = true;
				return false;
			}

			var account = web3.eth.coinbase;
			_t.contracts.token.deployed().then(function(instance) {
				contract = instance;
				return contract.buy(_t.pid, {
					from: account,
					value: value
				});
			}).then(function(result) {
				console.log(result + " at contract.buy(" + _t.pid + ")");
				setTimeout(function() {
					_t.getEthBalance();
					_t.getTokenBalance();
					_t.getInfo();
					_t.getToken();
				}, 5000);
			}).catch(function(err) {
				console.log(err.message + " at contract.buy(" + _t.pid + ") error");
			});

		},

		getToken: function() { 
			var _t = this,
				account = parseInt(this.buyToken.ethNumber * 10000);
			_t.contracts.token.deployed().then(function(instance) {
				return instance.estimateTokenAmount(account)
			}).then(function(result) {
				_t.buyToken.tokenCount = result[0] / 10 ** 8;

				_t.buyToken.todayQuoat = result[1] / 10000;

				if(_t.buyToken.ethNumber > _t.buyToken.todayQuoat) {
					_t.buyToken.ethNumber = _t.buyToken.todayQuoat
				}

			}).catch(function(err) {
				console.log(err.message + " at getToken");
			});

		},
		inputCount: function() {
			this.getToken();
		},

		investIn: function() { 

			var _t = this,
				amount = parseFloat(this.gameData.investNumber);
			var pid;

			if(_t.buyToken.pid == 0) {
				pid = _t.pid;
			} else {
				pid = _t.buyToken.pid
			}

			if(pid == 0) {
				_t.recommendError = true;
				return false;
			} else if(amount > _t.ethBalance) {
				_t.balanceError = true;
				return false;
			} else if(_t.income.limit > 0) {

				_t.canPlay = true;
				return false;

			} else if(amount < _t.lastInvest) {
				_t.lowerError = true;
				return false;
			}

			var account = web3.eth.coinbase;
			_t.contracts.game.deployed().then(function(instance) {
				contract = instance;
				return contract.investIn.sendTransaction(_t.pid, {
					from: account,
					value: amount * 10 ** 18
				})
			}).then(function(result) {
				
				setTimeout(function() {
					_t.getEthBalance();
					_t.getGameInfo();
					_t.getUserInfo();
				}, 5000);

			}).catch(function(err) {
				console.log(err.message + " at investIn error");
			});
		},

		storeToken: function() { 
			var _t = this,
				amount = parseInt(_t.financial.quantity);
			var days = parseInt(_t.financial.joinDays);

			var pid;

			if(_t.buyToken.pid == 0) {
				pid = _t.pid;
			} else {
				pid = _t.buyToken.pid;
			}

			if(pid == 0) {
				_t.recommendError = true;
				return false;
			} else if(amount < 500) {
				_t.minCount = true;
				return false;
			} else if(_t.tokenBalance < _t.financial.quantity) {
				_t.zroBalanceError = true;
				return false;
			}

			_t.contracts.token.deployed().then(function(instance) {
				return instance.storeToken(amount * 10 ** 8, days, pid)
			}).then(function(result) {

				setTimeout(function() {
					_t.getTokenBalance();
					_t.getInfo();
					_t.getRecord();
				}, 5000);

			}).catch(function(err) {
				console.log(err.message + " at getToken");
			});

		},
        getStaticReward: function() {
			var _t = this,
				account = web3.eth.coinbase;
			_t.contracts.game.deployed().then(function(instance) {
				contract = instance;
				return contract.getStaticReward(account)
			}).then(function(result) {

               if(result[0]==0){
               	   _t.realStatic=0
               }else if( _t.income.recent==0){
               	  _t.realStatic=0 
               }else{
               	  var todayStatic=result[1]/10**18/result[0];
               	  _t.realStatic=(todayStatic / _t.income.recent) *100/ _t.income.staticRatio;
               }
                
			}).catch(function(err) {
				console.log(err.message + " at getStaticReward error");
			});

		},
		getUserInfo: function() { 
			var _t = this,
				account = web3.eth.coinbase;
			_t.contracts.game.deployed().then(function(instance) {
				contract = instance;
				return contract.getUserInfo(account)
			}).then(function(result) {
				_t.income.unsettled.eth = result[0][0] / 10 ** 18;
				_t.income.unsettled.zro = result[0][1] / 10 ** 8;
				_t.income.limit = result[0][2] / 10 ** 18;
				_t.income.recent = result[0][3] / 10 ** 18;
				_t.income.gameReward.eth = result[0][4] / 10 ** 18;
				_t.income.gameReward.zro = result[0][5] / 10 ** 8;
				_t.rankData.direct.achievement = result[0][6] / 10 ** 18;

				_t.income.settled.eth = result[0][7] / 10 ** 18;
				_t.income.settled.zro = result[0][8] / 10 ** 8;

				_t.income.statics.eth = result[0][9] / 10 ** 18;
				_t.income.dynamic.eth = result[0][10] / 10 ** 18;

				_t.lastInvest = result[0][3] / 10 ** 18;
				

				_t.playerID = parseInt(result[1]);
				_t.buyToken.pid = parseInt(result[2]);
				
				_t.TimeDisplay("coundDown", result[3]);

				_t.otherData.superNode = parseInt(result[4]);

				
				_t.otherData.grade = parseInt(result[5]);
				_t.buyToken.address = account;

				

				_t.getInfo();

			}).catch(function(err) {
				console.log(err.message + " at getUserInfo error");
			});

		},
		getInfo: function() { 
			var _t = this;

			
			_t.contracts.token.deployed().then(function(instance) {
				return instance.getInfo(_t.playerID)
			}).then(function(result) {
				

				_t.financial.count = parseInt(result[0]);
				_t.buyToken.layer = parseInt(result[1]) + 1;
				_t.buyToken.quoat = result[2] / (10 ** 8);

				_t.buyToken.ethRatio = parseInt(result[3] / 100);
				_t.income.statics.zro = result[4] / (10 ** 8);
				_t.team.direct.financial = result[5] / (10 ** 8);

				_t.statistics.burnDown = result[6] / (10 ** 8);
				_t.statistics.tokenSales = result[7] / (10 ** 8);

			}).catch(function(err) {
				console.log(err.message + " at getInfo Error");
			});
		},
		getRecord: function() { 
			var _t = this;
			_t.financial.record = [];
			var max = _t.financial.count;
			for(var i = max; i > 0; i--) {
				_t.contracts.token.deployed().then((function(i) {
					return function(instance) {
						contract = instance;
						return contract.getStoreInfo(_t.playerID, i)
					};
				})(i)).then((function(i) {
					return function(result) {
						
						_t.financial.record.push({
							time: parseInt(result[2]),
							count: result[1] / 10 ** 8,
							income: result[6] / 10 ** 8,
							days: parseInt(result[3]),
							surplus: parseInt(result[4]),
							id: i,
							redeemed: result[5],
							isredeem: result[7],
						});
						_t.financial.record.sort(compare);

						

					};
				})(i)).catch(function(err) {
					console.log(err.message + " at getRecord error");
				});
			}

		},
		reStoreToken: function(i) { 
			var _t = this;
			_t.contracts.token.deployed().then(function(instance) {
				return instance.reStoreToken(i)
			}).then(function(result) {

				
			}).catch(function(err) {
				console.log(err.message + " at reStoreToken Error");
			});
		},
		redeemStoreToken: function(i) { 
			var _t = this;
			_t.contracts.token.deployed().then(function(instance) {
				return instance.redeemStoreToken(i)
			}).then(function(result) {

				
			}).catch(function(err) {
				console.log(err.message + " at redeemStoreToken Error");
			});
		},
		getGameInfo: function() { 
			var _t = this,
				account = web3.eth.coinbase;
			_t.contracts.game.deployed().then(function(instance) {
				return instance.getGameInfo(account)
			}).then(function(result) {
				
				_t.team.direct.nodes = parseInt(result[0][0]);
				_t.team.direct.invest = result[0][1] / (10 ** 18);

				_t.statistics.primary = parseInt(result[0][2]);
				_t.statistics.middle = parseInt(result[0][3]);
				_t.statistics.senior = parseInt(result[0][4]);
				_t.day = parseInt(result[0][5]);
				_t.gameData.bonusPool = result[0][8] / (10 ** 18);
				
				_t.statistics.capital = result[0][12] / (10 ** 18);

				_t.income.staticRatio = result[0][6] / 100;

				_t.blockTime = result[2];
				_t.TimeDisplay("show", result[3]);

				_t.inviteTopList();
			}).catch(function(err) {
				console.log(err.message + " at getGameInfo Error");
			});
		},

		TimeDisplay: function(id, totalSeconds) { 
			var _t = this;
			var hours = Math.floor(totalSeconds / (60 * 60));
			if(hours < 10) {
				hours = "0" + hours;
			}
			var modulo = totalSeconds % (60 * 60);
			var minutes = Math.floor(modulo / 60);
			if(minutes < 10) {
				minutes = "0" + minutes;
			}
			modulo = modulo % 60;
			var seconds = modulo % 60;
			if(seconds < 10) {
				seconds = "0" + seconds;
			}
			$("#" + id).html("<span>" + hours + "</span>:<span>" + minutes + "</span>:<span>" + seconds + "</span>");
			if(_t.timeId[id]) clearTimeout(_t.timeId[id]);
			if(totalSeconds > 0) {
				_t.timeId[id] = setTimeout(function() {
					_t.TimeDisplay(id, --totalSeconds);
				}, 1000);
			}
		},

		calcReward: function() { 
			var _t = this,
				account = web3.eth.coinbase;
			_t.contracts.game.deployed().then(function(instance) {
				return instance.calcReward.sendTransaction({
					from: account
				})
			}).then(function(result) {
			
				setTimeout(function() {
					_t.getGameInfo();
					_t.getUserInfo();

				}, 3000);
			}).catch(function(err) {
				console.log(err.message + " at calc error");
			});
		},

		outReward: function() { 
			var _t = this,
				account = web3.eth.coinbase;

			if(_t.getFee > _t.tokenBalance) {
				_t.zroBalanceError = true;
				return false
			}
			_t.contracts.game.deployed().then(function(instance) {
				return instance.outReward.sendTransaction({
					from: account
				})
			}).then(function(result) {
			

				setTimeout(function() {
					_t.getGameInfo();
					_t.getUserInfo();
					_t.getEthBalance();
					_t.getTokenBalance();
				}, 3000);
			}).catch(function(err) {
				console.log(err.message + " at outReward error");
			});
		},

		A: function() {
			var _t = this;
			_t.account = web3.eth.coinbase;
			setInterval(function() {
				if(_t.account != web3.eth.coinbase) {
					_t.account = web3.eth.coinbase;
					window.location.reload();
				}
			}, 3000);
		},
	},
	computed: {
		formatURL: function() {
			var url = window.location.href;
			if(url.indexOf("?") != -1) {
				var offest = url.indexOf("?");
				var newUrl = url.substr(0, offest);
				return newUrl + "?id=" + this.playerID;
			} else {
				return url + "?id=" + this.playerID;
			}
		},

		getFee: function() {
			if(isNaN(this.buyToken.ethRatio)) {
				return "--"
			}
			return parseFloat(this.income.gameReward.eth * this.buyToken.ethRatio * 5 / 100).toFixed(4)
		},
		times: function() {
			var value = ~~this.income.recent;
			if(value == 0) {
				return "2.x"
			}else if(value == 4) {
				return 1.8
			} else if(value == 8) {
				return 2
			} else if(value == 16) {
				return 2.2
			} else if(value == 32) {
				return 2.4
			} else if(value == 64) {
				return 2.6
			}else if(value ==128) {
				return 2.8
			}
		},
		topTime: function() {
			var time=new Date(this.blockTime * 1000).getDay();
			if(time==0){
				time=7
			}else{
				time=time;
			}
			return 7 - time;
		}
	},mounted: function() {
		
		return (this.GC("lang") || this.SC("lang", this.defaultLang),this.i());
	}
})