__wxRoute = 'pages/dailyReport/normal';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/dailyReport/normal.js';
define("pages/dailyReport/normal.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";

	function e(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function t(e, t) {
		return a(e) || i(e, t) || n()
	}
	function n() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance")
	}
	function i(e, t) {
		if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
			var n = [],
				i = !0,
				a = !1,
				o = void 0;
			try {
				for (var s, r = e[Symbol.iterator](); !(i = (s = r.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
			} catch (e) {
				a = !0, o = e
			} finally {
				try {
					i || null == r.
					return ||r.
					return ()
				} finally {
					if (a) throw o
				}
			}
			return n
		}
	}
	function a(e) {
		if (Array.isArray(e)) return e
	}
	function o(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), n.push.apply(n, i)
		}
		return n
	}
	function s(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2 ? o(Object(n), !0).forEach(function(t) {
				r(e, t, n[t])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
			})
		}
		return e
	}
	function r(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var l = e(require("./../../vendor.js")(0)),
		c = e(require("./../../common/api.js")),
		h = e(require("./../../common/log.js")),
		d = require("./../../vendor.js")(4),
		u = e(require("./../../store/index.js")),
		f = e(require("./../../common/utils.js")),
		v = e(require("./../../mixins/exist.js")),
		p = e(require("./../../mixins/login.js")),
		g = e(require("./../../mixins/location.js")),
		m = e(require("./../../common/areaAbroad.js")),
		k = e(require("./../../common/areaAbroadCN.js"));
	l.
default.page({
		store: u.
	default,
		mixins:
		[v.
	default, p.
	default, g.
	default],
		data: {
			language: "zh",
			preSetCN: {
				studentNoText: "学号",
				nameText: "姓名",
				navTitle: "健康上报",
				remarkLabel: "请先选择今日健康状态",
				vanFieldHealthLabel: "健康状态",
				placeholderHealthLabel: "请选择健康状态",
				vanFieldPositionLabel: "当前位置",
				placeholderPositionLabel: "等待定位",
				riskArray: [
					["健康", "有发热症状", "新冠肺炎【疑似确诊】", "新冠肺炎【确诊】"]
				],
				buttonLabel: "提交",
				infoHeath: "请选择今日健康状态",
				infoPosi: "请尝试重新定位",
				goodPrompt: "为了保护您的隐私，本程序仅记录行政区域信息，用于疫情防控研判。",
				buttonSubscribeMessage: "下次提醒我",
				leaveReasonLabel: "位置变动原因",
				leaveReasonPlaceholder: "检测到市级位置变动，请填写原因",
				quarantineLabel: "隔离状态",
				quarantinePlaceholder: "请选择当前隔离状态",
				quarantineArray: ["正常（未隔离）", "居家隔离（自我健康观察）", "集中隔离（集中医学观察）"],
				riskAddressLabel: "风险地址",
				riskAddressPlaceholder: "请选择近期是否去过以下地址",
				riskAddressArray: ["近期未去过上述地址"]
			},
			preSetEN: {
				studentNoText: "Student ID",
				nameText: "Name",
				navTitle: "Daily Report",
				remarkLabel: "Please select today's health status first\n",
				vanFieldHealthLabel: "Health\n Status",
				placeholderHealthLabel: "Please select health status",
				vanFieldPositionLabel: "Current Position",
				placeholderPositionLabel: "Waiting for positioning",
				riskArray: [
					["Healthy", "Feverish,etc", "Suspected COVID-19 Patient", "Confirmed COVID-19 Patient"]
				],
				buttonLabel: "Submit",
				infoHeath: "Please select today's health status",
				infoPosi: "Please get location information",
				goodPrompt: "According to the privacy policy, only the district information would be recorded, and apply for COVID-19 epidemic prevention.",
				buttonSubscribeMessage: "Remind me next time",
				leaveReasonLabel: "Reason for location change",
				leaveReasonPlaceholder: "City-level location change detected, please fill in the reason",
				quarantineLabel: "Under quarantine",
				quarantinePlaceholder: "Pls choose your status",
				quarantineArray: ["Nope", "Quarantine at home", "Enforced quarantine in the isolation station"],
				riskAddressLabel: "Risk places",
				riskAddressPlaceholder: " Are you currently in the following places?",
				riskAddressArray: ["Never been any places above resently"]
			},
			datetime: "",
			items: [{
				value: "0",
				name: "健康/Healthy"
			}, {
				value: "1",
				name: "有发热症状/Feverish,etc"
			}, {
				value: "2",
				name: "新冠肺炎【疑似确诊】/Suspected COVID-19 Patient"
			}, {
				value: "3",
				name: "新冠肺炎【确诊病例】/Confirmed COVID-19 Patient"
			}],
			selectRiskIndex: [0],
			selectRisk: "",
			preSet: {},
			health: -1,
			healthDescription: "",
			selectAbroadIndex: [0, 0],
			areaList: null,
			areaListCN: null,
			show: !1,
			ishasSendThisTime: !1,
			ishasLocaThisTime: !1,
			getParams: null,
			systemInfo: null,
			vacationRiskInfo: {
				studentStatusQuarantine: "",
				locRiskAddress: "",
				locRiskLevelGov: ""
			},
			isShowRiskAddressArray: !1,
			showVantField: "display:none",
			leaveReason: "",
			statement: "",
			quarantineField: "",
			riskAddressField: "",
			riskLevelArray: ["低风险"],
			riskAddressArray: [],
			riskAddressShow: !1,
			riskAddressRegionNotStreet: null
		},
		computed: s({}, (0, d.mapState)({
			userInfo: function(e) {
				return e.user.userInfo
			},
			expiresIn: function(e) {
				return e.user.expiresIn
			},
			isBind: function(e) {
				return e.student.isBind
			},
			studentInfo: function(e) {
				return e.student.studentInfo
			}
		})),
		onLoad: function() {
			var e = getApp().$wepy.$options.globalData;
			this.systemInfo = e.systemInfo, this.language = e.language, e.navbarHeight && (this.paddingTop = e.navbarHeight + 15), "zh" === e.language ? this.preSet = this.preSetCN : this.preSet = this.preSetEN, this.riskAddressArray.push(this.preSet.riskAddressArray[0]), this.areaList = m.
		default.data.areaList, this.areaListCN = k.
		default.data.areaList, this.doGetLocationAndCheckLastReportCity()
		},
		onShow: function() {},
		methods: s({}, (0, d.mapActions)(["setUserTokens", "setUserInfo", "changeStorageData", "setStudentInfo"]), {
			onFieldChange: function(e) {
				this.leaveReason = e.$wx.detail
			},
			doCheckStatement: function() {
				return "display:block" === this.showVantField && "" !== this.leaveReason || "display:none" === this.showVantField
			},
			doGetLocationAndCheckLastReportCity: function() {
				var e = this;
				e.isLocationAuth().then(function() {
					var n = e.getLocation(),
						i = c.
					default.cloudGetRiskLocationGov(e.language);
					Promise.all([n, i]).then(function(n) {
						var i = t(n, 2),
							a = (i[0], i[1]);
						e.doCheckLocationChange(), e.doCheckRiskLocationGov(a)
					})
				})
			},
			doCheckLocationChange: function() {
				var e = this;
				e.nation !== e.studentInfo.statusLastreportLocNation && "display:none" === e.showVantField && (e.showVantField = "display:block"), "中国" === e.nation ? (e.province !== e.studentInfo.statusLastreportLocProvince && "display:none" === e.showVantField && (e.showVantField = "display:block"), e.city !== e.studentInfo.statusLastreportLocCity && "display:none" === e.showVantField && (e.showVantField = "display:block")) : e.province !== e.studentInfo.statusLastreportLocProvince && "display:none" === e.showVantField && (e.showVantField = "display:block")
			},
			doCheckRiskLocationGov: function(e) {
				if ("中国" !== this.nation) return !1;
				for (var t = e.length, n = 0; n < t; n++) {
					var i = e[n];
					if (this.doCheckTime(i.rlStartDatetime, i.rlEndDatetime)) {
						if (null !== i.rlCityName && "" !== i.rlCityName.replace(/\s*/g, "") || (i.rlCityName = null), null !== i.rlDistrictName && "" !== i.rlDistrictName.replace(/\s*/g, "") || (i.rlDistrictName = null), null !== i.rlStreetName && "" !== i.rlStreetName.replace(/\s*/g, "") || (i.rlStreetName = null), this.province === i.rlProvinceName && null === i.rlCityName) {
							if ("市全范围" === this.vacationRiskInfo.locRiskAddress || "区全范围" === this.vacationRiskInfo.locRiskAddress) continue;
							this.vacationRiskInfo.locRiskAddress = "省全范围", this.vacationRiskInfo.locRiskLevelGov = i.rlInfoRisklevel
						}
						if (this.city === i.rlCityName && null === i.rlDistrictName) {
							if ("区全范围" === this.vacationRiskInfo.locRiskAddress) continue;
							this.vacationRiskInfo.locRiskAddress = "市全范围", this.vacationRiskInfo.locRiskLevelGov = i.rlInfoRisklevel
						}
						this.district === i.rlDistrictName && null === i.rlStreetName && (this.vacationRiskInfo.locRiskAddress = "区全范围", this.vacationRiskInfo.locRiskLevelGov = i.rlInfoRisklevel), this.district === i.rlDistrictName && null !== i.rlStreetName && (this.riskAddressArray.unshift(i.rlStreetName), this.riskLevelArray.unshift(i.rlInfoRisklevel), this.riskAddressShow = !0)
					}
				}
				"" !== this.vacationRiskInfo.locRiskAddress && this.riskLevelArray.length > 1 && (this.riskAddressRegionNotStreet = JSON.parse(JSON.stringify(this.vacationRiskInfo)))
			},
			doCheckTime: function(e, t) {
				if (null === t) return !0;
				var n = new Date(f.
			default.adaptAppleDatetime(e)).getTime(),
					i = new Date(f.
				default.adaptAppleDatetime(t)).getTime(),
					a = (new Date).getTime();
				return n <= a && i >= a
			},
			onQuarantineChanged: function(e) {
				var t = e.$wx.detail.value;
				this.quarantineField = this.preSet.quarantineArray[t], this.vacationRiskInfo.studentStatusQuarantine = this.preSetCN.quarantineArray[t]
			},
			onRiskAddressChanged: function(e) {
				var t = Number(e.$wx.detail.value);
				this.riskAddressField = this.riskAddressArray[t], t === this.riskLevelArray.length - 1 ? null === this.riskAddressRegionNotStreet ? (this.vacationRiskInfo.locRiskAddress = "不在范围内", this.vacationRiskInfo.locRiskLevelGov = "低风险") : (this.vacationRiskInfo.locRiskAddress = this.riskAddressRegionNotStreet.locRiskAddress, this.vacationRiskInfo.locRiskLevelGov = this.riskAddressRegionNotStreet.locRiskLevelGov) : (this.vacationRiskInfo.locRiskAddress = this.riskAddressArray[t], this.vacationRiskInfo.locRiskLevelGov = this.riskLevelArray[t])
			},
			onPosiClick: function() {
				"" !== this.nation || this.ishasLocaThisTime || (this.ishasLocaThisTime = !0, this.doGetLocationAndCheckLastReportCity(), h.
			default.info("tap for location"))
			},
			getDate: function() {
				this.datetime = this.jsDateFormatter(new Date)
			},
			jsDateFormatter: function(e) {
				var t = e.getFullYear(),
					n = e.getMonth() + 1,
					i = e.getDate(),
					a = e.getHours(),
					o = e.getMinutes(),
					s = e.getSeconds();
				return n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), s < 10 && (s = "0" + s), t + "-" + n + "-" + i + " " + a + ":" + o + ":" + s
			},
			showNowPosition: function() {
				this.isHasLocation && (this.position = this.nation + "," + this.province + "," + this.city + "," + this.district)
			},
			doCheckAllFieldFinish: function() {
				return this.health < 0 ? (f.
			default.wxToast(this.preSetCN.infoHeath, this.preSetEN.infoHeath, this.language), !1) : "" === this.vacationRiskInfo.studentStatusQuarantine ? (f.
			default.wxToast("请选择当前隔离状态", "Please choose your status", this.language), !1) : !(this.riskLevelArray.length > 1 && "" === this.riskAddressField) || (f.
			default.wxToast("请选择近期是否去过风险地区", "Please select whether you have been to the risk area recently", this.language), !1)
			},
			doDailyReport: function() {
				var e = this,
					t = this;
				t.onRequestSubscribeMessage(["CYgmmMJV34J8tqXA5GUG1bvaVtXD-Zyoey_hUsS76vY"], function() {
					if (t.getDate(), !t.doCheckAllFieldFinish()) return !1;
					if (t.isHasLocation) if (t.doCheckStatement()) if (t.ishasSendThisTime) f.
				default.wxToast("点击速度过快", "点击速度过快", t.language);
					else {
						t.ishasSendThisTime = !0;
						var n = "unknown";
						try {
							n = t.systemInfo.platform
						} catch (e) {}
						1 === e.riskLevelArray.length && (e.vacationRiskInfo.locRiskAddress = "不在范围内", e.vacationRiskInfo.locRiskLevelGov = "低风险"), t.sendLocation(t.studentInfo, t.health, t.datetime, t.leaveReason, t.vacationRiskInfo, n).then(function() {
							t.studentInfo.statusLastreportLocNation = t.nation, t.studentInfo.statusLastreportLocProvince = t.province, t.studentInfo.statusLastreportLocCity = t.city, t.studentInfo.statusLastreportDatetime = f.
						default.getFormatAppleDatetime(new Date), t.setStudentInfo(t.studentInfo), wx.reLaunch({
								url: "/pages/dailyReport/complete"
							})
						})
					} else f.
				default.wxToast("请完成所有必填项", "Please complete all required fields", t.language);
					else f.
				default.wxToast(t.preSetCN.infoPosi, t.preSetEN.infoPosi, t.language)
				})
			},
			onRiskChanged: function(e) {
				var t = e.$wx.detail.value[0];
				this.health = t, this.healthDescription = this.preSet.riskArray[0][t]
			},
			onConfirm: function(e) {
				var t = e.$wx.detail.values[1].code;
				this.nation = this.areaListCN.city_list[t], this.position = e.$wx.detail.values[1].name, this.isHasLocation = !0, this.show = !1, this.ishasLocaThisTime = !1, this.doCheckLocationChange()
			},
			onCancel: function(e) {
				this.position = "", this.nation = "", this.show = !1, this.isHasLocation = !1, this.ishasLocaThisTime = !1
			}
		})
	}, {
		info: {
			components: {
				"van-popup": {
					path: "..\\..\\components\\vant\\dist\\popup\\index"
				},
				"van-cell-group": {
					path: "..\\..\\components\\vant\\dist\\cell-group\\index"
				},
				"van-cell": {
					path: "..\\..\\components\\vant\\dist\\cell\\index"
				},
				"van-field": {
					path: "..\\..\\components\\vant\\dist\\field\\index"
				},
				"van-area": {
					path: "..\\..\\components\\vant\\dist\\area\\index"
				},
				"dialog-login": {
					path: "..\\..\\components\\dialog-login"
				},
				"error-hint": {
					path: "..\\..\\components\\error-hint"
				},
				"dialog-location": {
					path: "..\\..\\components\\dialog-location"
				},
				"nav-bar": {
					path: "..\\..\\components\\nav-bar"
				}
			},
			on: {
				"26-1": ["change"],
				"26-4": ["tap"],
				"26-5": ["confirm", "cancel"],
				"26-7": ["change"],
				"26-9": ["success", "fail"]
			}
		},
		handlers: {
			"26-0": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onRiskChanged(e)
				}
			},
			"26-1": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onStudentNoChanged(e)
				}
			},
			"26-2": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onQuarantineChanged(e)
				}
			},
			"26-3": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onRiskAddressChanged(e)
				}
			},
			"26-4": {
				tap: function() {
					var e = arguments[arguments.length - 1];
					return void this.onPosiClick(e)
				}
			},
			"26-5": {
				confirm: function() {
					var e = arguments[arguments.length - 1];
					return void this.onConfirm(e)
				},
				cancel: function() {
					var e = arguments[arguments.length - 1];
					return void this.onCancel(e)
				}
			},
			"26-7": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onFieldChange(e)
				}
			},
			"26-8": {
				tap: function() {
					var e = arguments[arguments.length - 1];
					return void this.doDailyReport(e)
				}
			},
			"26-9": {
				success: function() {
					var e = arguments[arguments.length - 1];
					return void this.onSuccessWxLocation(e)
				},
				fail: function() {
					var e = arguments[arguments.length - 1];
					return void this.onCancelWxLocation(e)
				}
			}
		},
		models: {},
		refs: void 0
	}, {
		info: {
			components: {
				"van-popup": {
					path: "..\\..\\components\\vant\\dist\\popup\\index"
				},
				"van-cell-group": {
					path: "..\\..\\components\\vant\\dist\\cell-group\\index"
				},
				"van-cell": {
					path: "..\\..\\components\\vant\\dist\\cell\\index"
				},
				"van-field": {
					path: "..\\..\\components\\vant\\dist\\field\\index"
				},
				"van-area": {
					path: "..\\..\\components\\vant\\dist\\area\\index"
				},
				"dialog-login": {
					path: "..\\..\\components\\dialog-login"
				},
				"error-hint": {
					path: "..\\..\\components\\error-hint"
				},
				"dialog-location": {
					path: "..\\..\\components\\dialog-location"
				},
				"nav-bar": {
					path: "..\\..\\components\\nav-bar"
				}
			},
			on: {
				"26-1": ["change"],
				"26-4": ["tap"],
				"26-5": ["confirm", "cancel"],
				"26-7": ["change"],
				"26-9": ["success", "fail"]
			}
		},
		handlers: {
			"26-0": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onRiskChanged(e)
				}
			},
			"26-1": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onStudentNoChanged(e)
				}
			},
			"26-2": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onQuarantineChanged(e)
				}
			},
			"26-3": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onRiskAddressChanged(e)
				}
			},
			"26-4": {
				tap: function() {
					var e = arguments[arguments.length - 1];
					return void this.onPosiClick(e)
				}
			},
			"26-5": {
				confirm: function() {
					var e = arguments[arguments.length - 1];
					return void this.onConfirm(e)
				},
				cancel: function() {
					var e = arguments[arguments.length - 1];
					return void this.onCancel(e)
				}
			},
			"26-7": {
				change: function() {
					var e = arguments[arguments.length - 1];
					return void this.onFieldChange(e)
				}
			},
			"26-8": {
				tap: function() {
					var e = arguments[arguments.length - 1];
					return void this.doDailyReport(e)
				}
			},
			"26-9": {
				success: function() {
					var e = arguments[arguments.length - 1];
					return void this.onSuccessWxLocation(e)
				},
				fail: function() {
					var e = arguments[arguments.length - 1];
					return void this.onCancelWxLocation(e)
				}
			}
		},
		models: {},
		refs: void 0
	});
});
require("pages/dailyReport/normal.js");
__wxRoute = 'pages/dailyReport/complete';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/dailyReport/complete.js';
define("pages/dailyReport/complete.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";

	function n(n) {
		return n && n.__esModule ? n : {
		default:
			n
		}
	}
	var e = n(require("./../../vendor.js")(0)),
		o = (require("./../../vendor.js")(4), n(require("./../../store/index.js")));
	e.
default.page({
		store: o.
	default,
		data:
		{
			isSuccess: !0
		},
		methods: {
			onHomeClick: function() {
				wx.switchTab({
					url: "/pages/index"
				})
			}
		}
	}, {
		info: {
			components: {
				"van-icon": {
					path: "..\\..\\components\\vant\\dist\\icon\\index"
				},
				"nav-bar": {
					path: "..\\..\\components\\nav-bar"
				}
			},
			on: {}
		},
		handlers: {
			"27-0": {
				tap: function() {
					var n = arguments[arguments.length - 1];
					return void this.onHomeClick(n)
				}
			}
		},
		models: {},
		refs: void 0
	}, {
		info: {
			components: {
				"van-icon": {
					path: "..\\..\\components\\vant\\dist\\icon\\index"
				},
				"nav-bar": {
					path: "..\\..\\components\\nav-bar"
				}
			},
			on: {}
		},
		handlers: {
			"27-0": {
				tap: function() {
					var n = arguments[arguments.length - 1];
					return void this.onHomeClick(n)
				}
			}
		},
		models: {},
		refs: void 0
	});
});
require("pages/dailyReport/complete.js");
__wxRoute = 'pages/student/bind';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/student/bind.js';
define("pages/student/bind.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";

	function t(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function e(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(t);
			e && (o = o.filter(function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			})), n.push.apply(n, o)
		}
		return n
	}
	function n(t) {
		for (var n = 1; n < arguments.length; n++) {
			var r = null != arguments[n] ? arguments[n] : {};
			n % 2 ? e(Object(r), !0).forEach(function(e) {
				o(t, e, r[e])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
			})
		}
		return t
	}
	function o(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	var r = t(require("./../../vendor.js")(0)),
		s = t(require("./../../common/utils.js")),
		i = t(require("./../../common/httpUtils.js")),
		a = require("./../../vendor.js")(4),
		d = t(require("./../../store/index.js")),
		u = t(require("./../../mixins/login.js")),
		c = t(require("./../../mixins/studentBind.js"));
	r.
default.page({
		store: d.
	default,
		mixins:
		[u.
	default, c.
	default],
		data: {
			language: "zh",
			preSetCN: {
				bar: "学籍认证",
				studentNoText: "学号",
				studentNoHolderText: "请输入您的学号",
				passwordText: "认证码",
				passwordHolderText: "身份证12-17位/学号",
				promptText: "若认证码错误，请联系辅导员查询",
				submitText: "提交"
			},
			preSetEN: {
				bar: "Authorization",
				studentNoText: "Student ID",
				studentNoHolderText: "Please input your student ID",
				passwordText: "Password",
				passwordHolderText: "Student ID/Chinese ID card number 12th-17th digits",
				promptText: "If the password is incorrect, Please contact counsellor",
				submitText: "Submit"
			},
			preSet: {},
			studentNo: "",
			password: "",
			msg: "",
			isPhotoNeed: !1,
			dialogShow: !1,
			oneButton: [{
				text: "确定"
			}]
		},
		computed: n({}, (0, a.mapState)({
			userInfo: function(t) {
				return t.user.userInfo
			},
			isBind: function(t) {
				return t.student.isBind
			}
		})),
		onLoad: function() {
			var t = getApp();
			this.language = t.$wepy.$options.globalData.language, "zh" === this.language ? this.preSet = this.preSetCN : this.preSet = this.preSetEN
		},
		methods: n({}, (0, a.mapActions)(["setBind", "setStudentInfo", "setUserInfo", "setUserTokens", "setNextStudentInfoAvailableTime"]), {
			onBindSubmit: function() {
				var t = this;
				if (!this.studentNo) return this.msg = "请输入学号", this.dialogShow = !0, !1;
				if (!this.password) return this.msg = "请输入身份验证码", this.dialogShow = !0, !1;
				var e = {
					studentStudentno: this.studentNo,
					studentPassword: this.password
				};
				i.
			default.post("/api/school_tjxsfw_student/tblStudentUsers/check", e, function(e) {
					200 === e.code ? t.doGetBind("bind") : 403 === e.code ? (s.
				default.wxErrorToast("onBindSubmit", "Tokens Expired", "验证过期，请重新尝试", 3e3), d.
				default.dispatch("clearUserTokens"), t.isNeedLogin()) : s.
				default.wxToast(e.message, e.message, t.language)
				}, function() {
					s.
				default.wxToast("本地网络错误", "Please check your network", t.language)
				})
			},
			onDialogClose: function() {
				this.dialogShow = !1
			},
			onPasswordChanged: function(t) {
				var e = t.$wx.detail;
				this.password = e
			},
			onStudentNoChanged: function(t) {
				console.log(t);
				var e = t.$wx.detail;
				this.studentNo = " ", this.studentNo = e
			}
		})
	}, {
		info: {
			components: {
				"van-dialog": {
					path: "..\\..\\components\\vant\\dist\\dialog\\index"
				},
				"van-cell-group": {
					path: "..\\..\\components\\vant\\dist\\cell-group\\index"
				},
				"van-cell": {
					path: "..\\..\\components\\vant\\dist\\cell\\index"
				},
				"van-icon": {
					path: "..\\..\\components\\vant\\dist\\icon\\index"
				},
				"van-field": {
					path: "..\\..\\components\\vant\\dist\\field\\index"
				},
				"error-hint": {
					path: "..\\..\\components\\error-hint"
				},
				"nav-bar": {
					path: "..\\..\\components\\nav-bar"
				}
			},
			on: {
				"28-0": ["change"],
				"28-1": ["change"],
				"28-2": ["change"],
				"28-3": ["change"],
				"28-5": ["close"]
			}
		},
		handlers: {
			"28-0": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onStudentNoChanged(t)
				}
			},
			"28-1": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onPasswordChanged(t)
				}
			},
			"28-2": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onStudentNoChanged(t)
				}
			},
			"28-3": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onPasswordChanged(t)
				}
			},
			"28-4": {
				tap: function() {
					var t = arguments[arguments.length - 1];
					return void this.onBindSubmit(t)
				}
			},
			"28-5": {
				close: function() {
					var t = arguments[arguments.length - 1];
					return void this.onDialogClose(t)
				}
			}
		},
		models: {},
		refs: void 0
	}, {
		info: {
			components: {
				"van-dialog": {
					path: "..\\..\\components\\vant\\dist\\dialog\\index"
				},
				"van-cell-group": {
					path: "..\\..\\components\\vant\\dist\\cell-group\\index"
				},
				"van-cell": {
					path: "..\\..\\components\\vant\\dist\\cell\\index"
				},
				"van-icon": {
					path: "..\\..\\components\\vant\\dist\\icon\\index"
				},
				"van-field": {
					path: "..\\..\\components\\vant\\dist\\field\\index"
				},
				"error-hint": {
					path: "..\\..\\components\\error-hint"
				},
				"nav-bar": {
					path: "..\\..\\components\\nav-bar"
				}
			},
			on: {
				"28-0": ["change"],
				"28-1": ["change"],
				"28-2": ["change"],
				"28-3": ["change"],
				"28-5": ["close"]
			}
		},
		handlers: {
			"28-0": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onStudentNoChanged(t)
				}
			},
			"28-1": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onPasswordChanged(t)
				}
			},
			"28-2": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onStudentNoChanged(t)
				}
			},
			"28-3": {
				change: function() {
					var t = arguments[arguments.length - 1];
					return void this.onPasswordChanged(t)
				}
			},
			"28-4": {
				tap: function() {
					var t = arguments[arguments.length - 1];
					return void this.onBindSubmit(t)
				}
			},
			"28-5": {
				close: function() {
					var t = arguments[arguments.length - 1];
					return void this.onDialogClose(t)
				}
			}
		},
		models: {},
		refs: void 0
	});
});

define("mixins/location.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";

	function e(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}), exports.
default = void 0;
	var t = e(require("./../common/httpUtils.js")),
		o = e(require("./../common/qqmap-wx-jssdk.js")),
		n = e(require("./../common/log.js")),
		i = e(require("./../common/utils.js")),
		s = {
			data: {
				isShowLocationAuth: !1,
				isHasLocationAuth: !1,
				isHasLocation: !1,
				isInTerritory: !0,
				position: "",
				latitude: "",
				longitude: "",
				nation: "",
				province: "",
				city: "",
				district: "",
				locStreet: "",
				locStreetno: "",
				massageDailyReport: ""
			},
			methods: {
				isLocationAuth: function() {
					var e = this;
					return new Promise(function(t) {
						wx.getSetting({
							success: function(o) {
								o.authSetting["scope.userLocation"] ? (e.isHasLocationAuth = !0, t()) : wx.authorize({
									scope: "scope.userLocation",
									success: function() {
										e.isHasLocationAuth = !0, t()
									},
									fail: function() {
										e.isHasLocationAuth = !1, e.isShowLocationAuth = !0
									}
								})
							}
						})
					})
				},
				onSuccessWxLocation: function() {
					this.isHasLocationAuth = !0, this.isShowLocationAuth = !1, this.getLocation()
				},
				onCancelWxLocation: function() {
					this.isShowLocationAuth = !1
				},
				getLocation: function() {
					var e = this;
					return new Promise(function(t) {
						new o.
					default ({
							key: "O6FBZ-4UT63-ZP23H-Y6OJO-EW2X5-EBFS4"
						}).reverseGeocoder({
							sig: "ppP9yPhAg3zXQ7e1ukEMYFyoPujhUR0",
							success: function(o) {
								e.latitude = o.result.location.lat, e.longitude = o.result.location.lng, e.nation = o.result.address_component.nation, e.province = o.result.address_component.province, e.city = o.result.address_component.city, e.district = o.result.address_component.district, e.isHasLocation = !0, e.position = o.result.address, "China" !== e.nation && "china" !== e.nation || (e.nation = "中国"), "中国" === e.nation && (i.
							default.checkHasKey(o.result.address_reference.town, "title") ? e.locStreet = o.result.address_reference.town.title:
								e.locStreet = o.result.address_component.street, e.locStreetno = o.result.address_component.street_number), void 0 === e.province && (e.province = o.result.address_component.ad_level_1, e.city = o.result.address_component.ad_level_2, e.district = o.result.address_component.ad_level_3), "South Korea" === e.nation && (e.nation = "韩国"), "" === e.nation && ("" === o.result.ad_info.nation ? e.show = !0 : e.nation = o.result.ad_info.nation), t()
							},
							fail: function(o) {
								wx.getLocation({
									type: "wgs84",
									success: function(o) {
										var n = {
											latitude: o.latitude,
											longitude: o.longitude
										};
										console.log(n), e.getLocationReverseGeocoder(n).then(function() {
											t()
										})
									},
									fail: function(t) {
										"getLocation:fail system permission denied" === t.errMsg ? (i.
									default.wxToast("请检查您的终端是否已开启位置服务,并授权微信使用!", "Please authorize WeChat location permissions", e.language, 3e3), n.
									default.info("getLocation:fail system permission denied")) : "getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF" === t.errMsg ? i.
									default.wxToast("微信定位失败，请打开WIFI后重试", "", "zh"):
										(i.
									default.wxErrorToast("getLocation", t.errMsg, "定位失败"), e.show = !0)
									}
								})
							},
							complete: function(e) {
								console.log(e)
							}
						})
					})
				},
				getLocationTest: function() {
					var e = this;
					return new Promise(function(t) {
						e.getLocationLatAndLong().then(function(o) {
							e.getLocationReverseGeocoder(o).then(function() {
								t()
							})
						})
					})
				},
				getLocationLatAndLong: function() {
					var e = this;
					return new Promise(function(t) {
						wx.getLocation({
							type: "gcj02",
							success: function(e) {
								var o = {
									latitude: e.latitude,
									longitude: e.longitude
								};
								console.log(o), t(o)
							},
							fail: function(t) {
								"getLocation:fail system permission denied" === t.errMsg ? (i.
							default.wxToast("请检查您的终端是否已开启位置服务,并授权微信使用!", "Please authorize WeChat location permissions", e.language, 3e3), n.
							default.info("getLocation:fail system permission denied")) : (i.
							default.wxErrorToast("getLocation", t.errMsg, "定位失败"), e.show = !0)
							}
						})
					})
				},
				getLocationReverseGeocoder: function(e) {
					var t = this;
					return new Promise(function(n) {
						new o.
					default ({
							key: "O6FBZ-4UT63-ZP23H-Y6OJO-EW2X5-EBFS4"
						}).reverseGeocoder({
							location: e,
							sig: "ppP9yPhAg3zXQ7e1ukEMYFyoPujhUR0",
							success: function(e) {
								t.latitude = e.result.location.lat, t.longitude = e.result.location.lng, t.nation = e.result.address_component.nation, t.province = e.result.address_component.province, t.city = e.result.address_component.city, t.district = e.result.address_component.district, t.isHasLocation = !0, t.position = e.result.address, "China" !== t.nation && "china" !== t.nation || (t.nation = "中国"), "中国" === t.nation && (i.
							default.checkHasKey(e.result.address_reference.town, "title") ? t.locStreet = e.result.address_reference.town.title:
								t.locStreet = e.result.address_component.street, t.locStreetno = e.result.address_component.street_number), void 0 === t.province && (t.province = e.result.address_component.ad_level_1, t.city = e.result.address_component.ad_level_2, t.district = e.result.address_component.ad_level_3), "South Korea" === t.nation && (t.nation = "韩国"), "" === t.nation && ("" === e.result.ad_info.nation ? t.show = !0 : t.nation = e.result.ad_info.nation), n()
							},
							fail: function(e) {
								i.
							default.wxToast("定位失败!", "Location service failed!", t.language), t.show = !0
							},
							complete: function(e) {
								console.log(e)
							}
						})
					})
				},
				sendLocation: function(e, o, s, a, r) {
					var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "unknown",
						l = this;
					return new Promise(function(u) {
						if ("" === l.nation) return i.
					default.wxToast("定位失败，请重试！", "Location service failed!", l.language), l.ishasSendThisTime = !1, !1;
						var d = !1;
						"" !== a && (d = !0), "中国" !== l.nation && (r.locRiskAddress = "国外全范围", r.locRiskLevelGov = "高风险");
						var f = {
							studentPid: e.pid,
							studentName: e.name,
							studentStudentno: e.studentNo,
							studentCollege: e.college,
							locLat: l.latitude,
							locLng: l.longitude,
							locNation: l.nation,
							locProvince: l.province,
							locCity: l.city,
							locDistrict: l.district,
							healthy: o,
							source: "weixin," + c,
							reportDatetime: s,
							hasMoved: d,
							leaveReason: a,
							locNation1: e.statusLastreportLocNation,
							locProvince1: e.statusLastreportLocProvince,
							locCity1: e.statusLastreportLocCity,
							locRiskaddress: r.locRiskAddress,
							locRisklevelGoverment: r.locRiskLevelGov,
							studentStatusQuarantine: r.studentStatusQuarantine
						};
						"中国" === l.nation && (f.locStreet = l.locStreet, f.locStreetno = l.locStreetno), t.
					default.post("/api/school_tjxsfw_student/yqfkLogDailyreport/v3", f, function(e) {
							200 === e.code ? (l.massageDailyReport = e.message, n.
						default.info("send location ok!"), u()) : (i.
						default.wxErrToast("sendLocation", e.message, e.message), l.ishasSendThisTime = !1)
						}, function(e) {
							l.massageDailyReport = e.message, l.ishasSendThisTime = !1
						})
					})
				}
			}
		};
	exports.
default = s;
});