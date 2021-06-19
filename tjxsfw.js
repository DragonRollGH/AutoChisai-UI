	var __wxAppData = __wxAppData || {};
	var __wxRoute = __wxRoute || "";
	var __wxRouteBegin = __wxRouteBegin || "";
	var __wxAppCode__ = __wxAppCode__ || {};
	var global = global || {};
	var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {};
	var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
	var Component = Component || function () {};
	var definePlugin = definePlugin || function () {};
	var requirePlugin = requirePlugin || function () {};
	var Behavior = Behavior || function () {};
	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/
	global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
	global.__wcc_version_info__ = {
		"customComponents": true,
		"fixZeroRpx": true,
		"propValueDeepCopy": false
	};
	var $gwxc
	var $gaic = {}
	$gwx = function (path, global) {
		if (typeof global === 'undefined') global = {};
		if (typeof __WXML_GLOBAL__ === 'undefined') {
			__WXML_GLOBAL__ = {};
		}
		__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

		function _(a, b) {
			if (typeof (b) != 'undefined') a.children.push(b);
		}

		function _v(k) {
			if (typeof (k) != 'undefined') return {
				tag: 'virtual',
				'wxKey': k,
				children: []
			};
			return {
				tag: 'virtual',
				children: []
			};
		}

		function _n(tag) {
			$gwxc++;
			if ($gwxc >= 16000) {
				throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
			};
			return {
				tag: 'wx-' + tag,
				attr: {},
				children: [],
				n: [],
				raw: {},
				generics: {}
			}
		}

		function _p(a, b) {
			b && a.properities.push(b);
		}

		function _s(scope, env, key) {
			return typeof (scope[key]) != 'undefined' ? scope[key] : env[key]
		}

		function _wp(m) {
			console.warn("WXMLRT_$gwx:" + m)
		}

		function _wl(tname, prefix) {
			_wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
		}
		$gwn = console.warn;
		$gwl = console.log;

		function $gwh() {
			function x() {}
			x.prototype = {
				hn: function (obj, all) {
					if (typeof (obj) == 'object') {
						var cnt = 0;
						var any1 = false,
							any2 = false;
						for (var x in obj) {
							any1 = any1 | x === '__value__';
							any2 = any2 | x === '__wxspec__';
							cnt++;
							if (cnt > 2) break;
						}
						return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
					}
					return "n";
				},
				nh: function (obj, special) {
					return {
						__value__: obj,
						__wxspec__: special ? special : true
					}
				},
				rv: function (obj) {
					return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
				},
				hm: function (obj) {
					if (typeof (obj) == 'object') {
						var cnt = 0;
						var any1 = false,
							any2 = false;
						for (var x in obj) {
							any1 = any1 | x === '__value__';
							any2 = any2 | x === '__wxspec__';
							cnt++;
							if (cnt > 2) break;
						}
						return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
					}
					return false;
				}
			}
			return new x;
		}
		wh = $gwh();

		function $gstack(s) {
			var tmp = s.split('\n ' + ' ' + ' ' + ' ');
			for (var i = 0; i < tmp.length; ++i) {
				if (0 == i) continue;
				if (")" === tmp[i][tmp[i].length - 1])
					tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
				else
					tmp[i] = "at anonymous function";
			}
			return tmp.join('\n ' + ' ' + ' ' + ' ');
		}

		function $gwrt(should_pass_type_info) {
			function ArithmeticEv(ops, e, s, g, o) {
				var _f = false;
				var rop = ops[0][1];
				var _a, _b, _c, _d, _aa, _bb;
				switch (rop) {
					case '?:':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h');
						_d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
						_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
						return _d;
						break;
					case '&&':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h');
						_d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
						_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
						return _d;
						break;
					case '||':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h');
						_d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
						_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
						return _d;
						break;
					case '+':
					case '*':
					case '/':
					case '%':
					case '|':
					case '^':
					case '&':
					case '===':
					case '==':
					case '!=':
					case '!==':
					case '>=':
					case '<=':
					case '>':
					case '<':
					case '<<':
					case '>>':
						_a = rev(ops[1], e, s, g, o, _f);
						_b = rev(ops[2], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
						switch (rop) {
							case '+':
								_d = wh.rv(_a) + wh.rv(_b);
								break;
							case '*':
								_d = wh.rv(_a) * wh.rv(_b);
								break;
							case '/':
								_d = wh.rv(_a) / wh.rv(_b);
								break;
							case '%':
								_d = wh.rv(_a) % wh.rv(_b);
								break;
							case '|':
								_d = wh.rv(_a) | wh.rv(_b);
								break;
							case '^':
								_d = wh.rv(_a) ^ wh.rv(_b);
								break;
							case '&':
								_d = wh.rv(_a) & wh.rv(_b);
								break;
							case '===':
								_d = wh.rv(_a) === wh.rv(_b);
								break;
							case '==':
								_d = wh.rv(_a) == wh.rv(_b);
								break;
							case '!=':
								_d = wh.rv(_a) != wh.rv(_b);
								break;
							case '!==':
								_d = wh.rv(_a) !== wh.rv(_b);
								break;
							case '>=':
								_d = wh.rv(_a) >= wh.rv(_b);
								break;
							case '<=':
								_d = wh.rv(_a) <= wh.rv(_b);
								break;
							case '>':
								_d = wh.rv(_a) > wh.rv(_b);
								break;
							case '<':
								_d = wh.rv(_a) < wh.rv(_b);
								break;
							case '<<':
								_d = wh.rv(_a) << wh.rv(_b);
								break;
							case '>>':
								_d = wh.rv(_a) >> wh.rv(_b);
								break;
							default:
								break;
						}
						return _c ? wh.nh(_d, "c") : _d;
						break;
					case '-':
						_a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
						_b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
						_d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
						return _c ? wh.nh(_d, "c") : _d;
						break;
					case '!':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) == 'h');
						_d = !wh.rv(_a);
						return _c ? wh.nh(_d, "c") : _d;
					case '~':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) == 'h');
						_d = ~wh.rv(_a);
						return _c ? wh.nh(_d, "c") : _d;
					default:
						$gwn('unrecognized op' + rop);
				}
			}

			function rev(ops, e, s, g, o, newap) {
				var op = ops[0];
				var _f = false;
				if (typeof newap !== "undefined") o.ap = newap;
				if (typeof (op) === 'object') {
					var vop = op[0];
					var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
					switch (vop) {
						case 2:
							return ArithmeticEv(ops, e, s, g, o);
							break;
						case 4:
							return rev(ops[1], e, s, g, o, _f);
							break;
						case 5:
							switch (ops.length) {
								case 2:
									_a = rev(ops[1], e, s, g, o, _f);
									return should_pass_type_info ? [_a] : [wh.rv(_a)];
									return [_a];
									break;
								case 1:
									return [];
									break;
								default:
									_a = rev(ops[1], e, s, g, o, _f);
									_b = rev(ops[2], e, s, g, o, _f);
									_a.push(
										should_pass_type_info ?
										_b :
										wh.rv(_b)
									);
									return _a;
									break;
							}
							break;
						case 6:
							_a = rev(ops[1], e, s, g, o);
							var ap = o.ap;
							_ta = wh.hn(_a) === 'h';
							_aa = _ta ? wh.rv(_a) : _a;
							o.is_affected |= _ta;
							if (should_pass_type_info) {
								if (_aa === null || typeof (_aa) === 'undefined') {
									return _ta ? wh.nh(undefined, 'e') : undefined;
								}
								_b = rev(ops[2], e, s, g, o, _f);
								_tb = wh.hn(_b) === 'h';
								_bb = _tb ? wh.rv(_b) : _b;
								o.ap = ap;
								o.is_affected |= _tb;
								if (_bb === null || typeof (_bb) === 'undefined' ||
									_bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
									return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
								}
								_d = _aa[_bb];
								if (typeof _d === 'function' && !ap) _d = undefined;
								_td = wh.hn(_d) === 'h';
								o.is_affected |= _td;
								return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
							} else {
								if (_aa === null || typeof (_aa) === 'undefined') {
									return undefined;
								}
								_b = rev(ops[2], e, s, g, o, _f);
								_tb = wh.hn(_b) === 'h';
								_bb = _tb ? wh.rv(_b) : _b;
								o.ap = ap;
								o.is_affected |= _tb;
								if (_bb === null || typeof (_bb) === 'undefined' ||
									_bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
									return undefined;
								}
								_d = _aa[_bb];
								if (typeof _d === 'function' && !ap) _d = undefined;
								_td = wh.hn(_d) === 'h';
								o.is_affected |= _td;
								return _td ? wh.rv(_d) : _d;
							}
							case 7:
								switch (ops[1][0]) {
									case 11:
										o.is_affected |= wh.hn(g) === 'h';
										return g;
									case 3:
										_s = wh.rv(s);
										_e = wh.rv(e);
										_b = ops[1][1];
										if (g && g.f && g.f.hasOwnProperty(_b)) {
											_a = g.f;
											o.ap = true;
										} else {
											_a = _s && _s.hasOwnProperty(_b) ?
												s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
										}
										if (should_pass_type_info) {
											if (_a) {
												_ta = wh.hn(_a) === 'h';
												_aa = _ta ? wh.rv(_a) : _a;
												_d = _aa[_b];
												_td = wh.hn(_d) === 'h';
												o.is_affected |= _ta || _td;
												_d = _ta && !_td ? wh.nh(_d, 'e') : _d;
												return _d;
											}
										} else {
											if (_a) {
												_ta = wh.hn(_a) === 'h';
												_aa = _ta ? wh.rv(_a) : _a;
												_d = _aa[_b];
												_td = wh.hn(_d) === 'h';
												o.is_affected |= _ta || _td;
												return wh.rv(_d);
											}
										}
										return undefined;
								}
								break;
							case 8:
								_a = {};
								_a[ops[1]] = rev(ops[2], e, s, g, o, _f);
								return _a;
								break;
							case 9:
								_a = rev(ops[1], e, s, g, o, _f);
								_b = rev(ops[2], e, s, g, o, _f);

								function merge(_a, _b, _ow) {
									var ka, _bbk;
									_ta = wh.hn(_a) === 'h';
									_tb = wh.hn(_b) === 'h';
									_aa = wh.rv(_a);
									_bb = wh.rv(_b);
									for (var k in _bb) {
										if (_ow || !_aa.hasOwnProperty(k)) {
											_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
										}
									}
									return _a;
								}
								var _c = _a
								var _ow = true
								if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
									_a = _b
									_b = _c
									_ow = false
								}
								if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
									var _r = {}
									return merge(merge(_r, _a, _ow), _b, _ow);
								} else
									return merge(_a, _b, _ow);
								break;
							case 10:
								_a = rev(ops[1], e, s, g, o, _f);
								_a = should_pass_type_info ? _a : wh.rv(_a);
								return _a;
								break;
							case 12:
								var _r;
								_a = rev(ops[1], e, s, g, o);
								if (!o.ap) {
									return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
								}
								var ap = o.ap;
								_b = rev(ops[2], e, s, g, o, _f);
								o.ap = ap;
								_ta = wh.hn(_a) === 'h';
								_tb = _ca(_b);
								_aa = wh.rv(_a);
								_bb = wh.rv(_b);
								snap_bb = $gdc(_bb, "nv_");
								try {
									_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
								} catch (e) {
									e.message = e.message.replace(/nv_/g, "");
									e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
									e.stack = e.stack.replace(/\snv_/g, " ");
									e.stack = $gstack(e.stack);
									if (g.debugInfo) {
										e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
										console.error(e);
									}
									_r = undefined;
								}
								return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
					}
				} else {
					if (op === 3 || op === 1) return ops[1];
					else if (op === 11) {
						var _a = '';
						for (var i = 1; i < ops.length; i++) {
							var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
							_a += typeof (xp) === 'undefined' ? '' : xp;
						}
						return _a;
					}
				}
			}

			function wrapper(ops, e, s, g, o, newap) {
				if (ops[0] == '11182016') {
					g.debugInfo = ops[2];
					return rev(ops[1], e, s, g, o, newap);
				} else {
					g.debugInfo = null;
					return rev(ops, e, s, g, o, newap);
				}
			}
			return wrapper;
		}
		gra = $gwrt(true);
		grb = $gwrt(false);

		function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
			{
				var o = {
					is_affected: false
				};
				var a = gra(ops, e, s, g, o);
				if (JSON.stringify(a) != JSON.stringify(expect_a) ||
					o.is_affected != expect_affected) {
					console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
				}
			} {
				var o = {
					is_affected: false
				};
				var a = grb(ops, e, s, g, o);
				if (JSON.stringify(a) != JSON.stringify(expect_b) ||
					o.is_affected != expect_affected) {
					console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
				}
			}
		}

		function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
			var _n = wh.hn(to_iter) === 'n';
			var scope = wh.rv(_s);
			var has_old_item = scope.hasOwnProperty(itemname);
			var has_old_index = scope.hasOwnProperty(indexname);
			var old_item = scope[itemname];
			var old_index = scope[indexname];
			var full = Object.prototype.toString.call(wh.rv(to_iter));
			var type = full[8];
			if (type === 'N' && full[10] === 'l') type = 'X';
			var _y;
			if (_n) {
				if (type === 'A') {
					var r_iter_item;
					for (var i = 0; i < to_iter.length; i++) {
						scope[itemname] = to_iter[i];
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						r_iter_item = wh.rv(to_iter[i]);
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'O') {
					var i = 0;
					var r_iter_item;
					for (var k in to_iter) {
						scope[itemname] = to_iter[k];
						scope[indexname] = _n ? k : wh.nh(k, 'h');
						r_iter_item = wh.rv(to_iter[k]);
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
						i++;
					}
				} else if (type === 'S') {
					for (var i = 0; i < to_iter.length; i++) {
						scope[itemname] = to_iter[i];
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(to_iter[i] + i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'N') {
					for (var i = 0; i < to_iter; i++) {
						scope[itemname] = i;
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else {}
			} else {
				var r_to_iter = wh.rv(to_iter);
				var r_iter_item, iter_item;
				if (type === 'A') {
					for (var i = 0; i < r_to_iter.length; i++) {
						iter_item = r_to_iter[i];
						iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
						r_iter_item = wh.rv(iter_item);
						scope[itemname] = iter_item
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'O') {
					var i = 0;
					for (var k in r_to_iter) {
						iter_item = r_to_iter[k];
						iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
						r_iter_item = wh.rv(iter_item);
						scope[itemname] = iter_item;
						scope[indexname] = _n ? k : wh.nh(k, 'h');
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
						i++
					}
				} else if (type === 'S') {
					for (var i = 0; i < r_to_iter.length; i++) {
						iter_item = wh.nh(r_to_iter[i], 'h');
						scope[itemname] = iter_item;
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(to_iter[i] + i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'N') {
					for (var i = 0; i < r_to_iter; i++) {
						iter_item = wh.nh(i, 'h');
						scope[itemname] = iter_item;
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else {}
			}
			if (has_old_item) {
				scope[itemname] = old_item;
			} else {
				delete scope[itemname];
			}
			if (has_old_index) {
				scope[indexname] = old_index;
			} else {
				delete scope[indexname];
			}
		}

		function _ca(o) {
			if (wh.hn(o) == 'h') return true;
			if (typeof o !== "object") return false;
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					if (_ca(o[i])) return true;
				}
			}
			return false;
		}

		function _da(node, attrname, opindex, raw, o) {
			var isaffected = false;
			var value = $gdc(raw, "", 2);
			if (o.ap && value && value.constructor === Function) {
				attrname = "$wxs:" + attrname;
				node.attr["$gdc"] = $gdc;
			}
			if (o.is_affected || _ca(raw)) {
				node.n.push(attrname);
				node.raw[attrname] = raw;
			}
			node.attr[attrname] = value;
		}

		function _r(node, attrname, opindex, env, scope, global) {
			global.opindex = opindex;
			var o = {},
				_env;
			var a = grb(z[opindex], env, scope, global, o);
			_da(node, attrname, opindex, a, o);
		}

		function _rz(z, node, attrname, opindex, env, scope, global) {
			global.opindex = opindex;
			var o = {},
				_env;
			var a = grb(z[opindex], env, scope, global, o);
			_da(node, attrname, opindex, a, o);
		}

		function _o(opindex, env, scope, global) {
			global.opindex = opindex;
			var nothing = {};
			var r = grb(z[opindex], env, scope, global, nothing);
			return (r && r.constructor === Function) ? undefined : r;
		}

		function _oz(z, opindex, env, scope, global) {
			global.opindex = opindex;
			var nothing = {};
			var r = grb(z[opindex], env, scope, global, nothing);
			return (r && r.constructor === Function) ? undefined : r;
		}

		function _1(opindex, env, scope, global, o) {
			var o = o || {};
			global.opindex = opindex;
			return gra(z[opindex], env, scope, global, o);
		}

		function _1z(z, opindex, env, scope, global, o) {
			var o = o || {};
			global.opindex = opindex;
			return gra(z[opindex], env, scope, global, o);
		}

		function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
			var o = {};
			var to_iter = _1(opindex, env, scope, global);
			wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
		}

		function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
			var o = {};
			var to_iter = _1z(z, opindex, env, scope, global);
			wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
		}


		function _m(tag, attrs, generics, env, scope, global) {
			var tmp = _n(tag);
			var base = 0;
			for (var i = 0; i < attrs.length; i += 2) {
				if (base + attrs[i + 1] < 0) {
					tmp.attr[attrs[i]] = true;
				} else {
					_r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
					if (base === 0) base = attrs[i + 1];
				}
			}
			for (var i = 0; i < generics.length; i += 2) {
				if (base + generics[i + 1] < 0) {
					tmp.generics[generics[i]] = "";
				} else {
					var $t = grb(z[base + generics[i + 1]], env, scope, global);
					if ($t != "") $t = "wx-" + $t;
					tmp.generics[generics[i]] = $t;
					if (base === 0) base = generics[i + 1];
				}
			}
			return tmp;
		}

		function _mz(z, tag, attrs, generics, env, scope, global) {
			var tmp = _n(tag);
			var base = 0;
			for (var i = 0; i < attrs.length; i += 2) {
				if (base + attrs[i + 1] < 0) {
					tmp.attr[attrs[i]] = true;
				} else {
					_rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
					if (base === 0) base = attrs[i + 1];
				}
			}
			for (var i = 0; i < generics.length; i += 2) {
				if (base + generics[i + 1] < 0) {
					tmp.generics[generics[i]] = "";
				} else {
					var $t = grb(z[base + generics[i + 1]], env, scope, global);
					if ($t != "") $t = "wx-" + $t;
					tmp.generics[generics[i]] = $t;
					if (base === 0) base = generics[i + 1];
				}
			}
			return tmp;
		}

		var nf_init = function () {
			if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
				nf_init_Object();
				nf_init_Function();
				nf_init_Array();
				nf_init_String();
				nf_init_Boolean();
				nf_init_Number();
				nf_init_Math();
				nf_init_Date();
				nf_init_RegExp();
			}
			if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
		};
		var nf_init_Object = function () {
			Object.defineProperty(Object.prototype, "nv_constructor", {
				writable: true,
				value: "Object"
			})
			Object.defineProperty(Object.prototype, "nv_toString", {
				writable: true,
				value: function () {
					return "[object Object]"
				}
			})
		}
		var nf_init_Function = function () {
			Object.defineProperty(Function.prototype, "nv_constructor", {
				writable: true,
				value: "Function"
			})
			Object.defineProperty(Function.prototype, "nv_length", {
				get: function () {
					return this.length;
				},
				set: function () {}
			});
			Object.defineProperty(Function.prototype, "nv_toString", {
				writable: true,
				value: function () {
					return "[function Function]"
				}
			})
		}
		var nf_init_Array = function () {
			Object.defineProperty(Array.prototype, "nv_toString", {
				writable: true,
				value: function () {
					return this.nv_join();
				}
			})
			Object.defineProperty(Array.prototype, "nv_join", {
				writable: true,
				value: function (s) {
					s = undefined == s ? ',' : s;
					var r = "";
					for (var i = 0; i < this.length; ++i) {
						if (0 != i) r += s;
						if (null == this[i] || undefined == this[i]) r += '';
						else if (typeof this[i] == 'function') r += this[i].nv_toString();
						else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
						else r += this[i].toString();
					}
					return r;
				}
			})
			Object.defineProperty(Array.prototype, "nv_constructor", {
				writable: true,
				value: "Array"
			})
			Object.defineProperty(Array.prototype, "nv_concat", {
				writable: true,
				value: Array.prototype.concat
			})
			Object.defineProperty(Array.prototype, "nv_pop", {
				writable: true,
				value: Array.prototype.pop
			})
			Object.defineProperty(Array.prototype, "nv_push", {
				writable: true,
				value: Array.prototype.push
			})
			Object.defineProperty(Array.prototype, "nv_reverse", {
				writable: true,
				value: Array.prototype.reverse
			})
			Object.defineProperty(Array.prototype, "nv_shift", {
				writable: true,
				value: Array.prototype.shift
			})
			Object.defineProperty(Array.prototype, "nv_slice", {
				writable: true,
				value: Array.prototype.slice
			})
			Object.defineProperty(Array.prototype, "nv_sort", {
				writable: true,
				value: Array.prototype.sort
			})
			Object.defineProperty(Array.prototype, "nv_splice", {
				writable: true,
				value: Array.prototype.splice
			})
			Object.defineProperty(Array.prototype, "nv_unshift", {
				writable: true,
				value: Array.prototype.unshift
			})
			Object.defineProperty(Array.prototype, "nv_indexOf", {
				writable: true,
				value: Array.prototype.indexOf
			})
			Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
				writable: true,
				value: Array.prototype.lastIndexOf
			})
			Object.defineProperty(Array.prototype, "nv_every", {
				writable: true,
				value: Array.prototype.every
			})
			Object.defineProperty(Array.prototype, "nv_some", {
				writable: true,
				value: Array.prototype.some
			})
			Object.defineProperty(Array.prototype, "nv_forEach", {
				writable: true,
				value: Array.prototype.forEach
			})
			Object.defineProperty(Array.prototype, "nv_map", {
				writable: true,
				value: Array.prototype.map
			})
			Object.defineProperty(Array.prototype, "nv_filter", {
				writable: true,
				value: Array.prototype.filter
			})
			Object.defineProperty(Array.prototype, "nv_reduce", {
				writable: true,
				value: Array.prototype.reduce
			})
			Object.defineProperty(Array.prototype, "nv_reduceRight", {
				writable: true,
				value: Array.prototype.reduceRight
			})
			Object.defineProperty(Array.prototype, "nv_length", {
				get: function () {
					return this.length;
				},
				set: function (value) {
					this.length = value;
				}
			});
		}
		var nf_init_String = function () {
			Object.defineProperty(String.prototype, "nv_constructor", {
				writable: true,
				value: "String"
			})
			Object.defineProperty(String.prototype, "nv_toString", {
				writable: true,
				value: String.prototype.toString
			})
			Object.defineProperty(String.prototype, "nv_valueOf", {
				writable: true,
				value: String.prototype.valueOf
			})
			Object.defineProperty(String.prototype, "nv_charAt", {
				writable: true,
				value: String.prototype.charAt
			})
			Object.defineProperty(String.prototype, "nv_charCodeAt", {
				writable: true,
				value: String.prototype.charCodeAt
			})
			Object.defineProperty(String.prototype, "nv_concat", {
				writable: true,
				value: String.prototype.concat
			})
			Object.defineProperty(String.prototype, "nv_indexOf", {
				writable: true,
				value: String.prototype.indexOf
			})
			Object.defineProperty(String.prototype, "nv_lastIndexOf", {
				writable: true,
				value: String.prototype.lastIndexOf
			})
			Object.defineProperty(String.prototype, "nv_localeCompare", {
				writable: true,
				value: String.prototype.localeCompare
			})
			Object.defineProperty(String.prototype, "nv_match", {
				writable: true,
				value: String.prototype.match
			})
			Object.defineProperty(String.prototype, "nv_replace", {
				writable: true,
				value: String.prototype.replace
			})
			Object.defineProperty(String.prototype, "nv_search", {
				writable: true,
				value: String.prototype.search
			})
			Object.defineProperty(String.prototype, "nv_slice", {
				writable: true,
				value: String.prototype.slice
			})
			Object.defineProperty(String.prototype, "nv_split", {
				writable: true,
				value: String.prototype.split
			})
			Object.defineProperty(String.prototype, "nv_substring", {
				writable: true,
				value: String.prototype.substring
			})
			Object.defineProperty(String.prototype, "nv_toLowerCase", {
				writable: true,
				value: String.prototype.toLowerCase
			})
			Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
				writable: true,
				value: String.prototype.toLocaleLowerCase
			})
			Object.defineProperty(String.prototype, "nv_toUpperCase", {
				writable: true,
				value: String.prototype.toUpperCase
			})
			Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
				writable: true,
				value: String.prototype.toLocaleUpperCase
			})
			Object.defineProperty(String.prototype, "nv_trim", {
				writable: true,
				value: String.prototype.trim
			})
			Object.defineProperty(String.prototype, "nv_length", {
				get: function () {
					return this.length;
				},
				set: function (value) {
					this.length = value;
				}
			});
		}
		var nf_init_Boolean = function () {
			Object.defineProperty(Boolean.prototype, "nv_constructor", {
				writable: true,
				value: "Boolean"
			})
			Object.defineProperty(Boolean.prototype, "nv_toString", {
				writable: true,
				value: Boolean.prototype.toString
			})
			Object.defineProperty(Boolean.prototype, "nv_valueOf", {
				writable: true,
				value: Boolean.prototype.valueOf
			})
		}
		var nf_init_Number = function () {
			Object.defineProperty(Number, "nv_MAX_VALUE", {
				writable: false,
				value: Number.MAX_VALUE
			})
			Object.defineProperty(Number, "nv_MIN_VALUE", {
				writable: false,
				value: Number.MIN_VALUE
			})
			Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
				writable: false,
				value: Number.NEGATIVE_INFINITY
			})
			Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
				writable: false,
				value: Number.POSITIVE_INFINITY
			})
			Object.defineProperty(Number.prototype, "nv_constructor", {
				writable: true,
				value: "Number"
			})
			Object.defineProperty(Number.prototype, "nv_toString", {
				writable: true,
				value: Number.prototype.toString
			})
			Object.defineProperty(Number.prototype, "nv_toLocaleString", {
				writable: true,
				value: Number.prototype.toLocaleString
			})
			Object.defineProperty(Number.prototype, "nv_valueOf", {
				writable: true,
				value: Number.prototype.valueOf
			})
			Object.defineProperty(Number.prototype, "nv_toFixed", {
				writable: true,
				value: Number.prototype.toFixed
			})
			Object.defineProperty(Number.prototype, "nv_toExponential", {
				writable: true,
				value: Number.prototype.toExponential
			})
			Object.defineProperty(Number.prototype, "nv_toPrecision", {
				writable: true,
				value: Number.prototype.toPrecision
			})
		}
		var nf_init_Math = function () {
			Object.defineProperty(Math, "nv_E", {
				writable: false,
				value: Math.E
			})
			Object.defineProperty(Math, "nv_LN10", {
				writable: false,
				value: Math.LN10
			})
			Object.defineProperty(Math, "nv_LN2", {
				writable: false,
				value: Math.LN2
			})
			Object.defineProperty(Math, "nv_LOG2E", {
				writable: false,
				value: Math.LOG2E
			})
			Object.defineProperty(Math, "nv_LOG10E", {
				writable: false,
				value: Math.LOG10E
			})
			Object.defineProperty(Math, "nv_PI", {
				writable: false,
				value: Math.PI
			})
			Object.defineProperty(Math, "nv_SQRT1_2", {
				writable: false,
				value: Math.SQRT1_2
			})
			Object.defineProperty(Math, "nv_SQRT2", {
				writable: false,
				value: Math.SQRT2
			})
			Object.defineProperty(Math, "nv_abs", {
				writable: false,
				value: Math.abs
			})
			Object.defineProperty(Math, "nv_acos", {
				writable: false,
				value: Math.acos
			})
			Object.defineProperty(Math, "nv_asin", {
				writable: false,
				value: Math.asin
			})
			Object.defineProperty(Math, "nv_atan", {
				writable: false,
				value: Math.atan
			})
			Object.defineProperty(Math, "nv_atan2", {
				writable: false,
				value: Math.atan2
			})
			Object.defineProperty(Math, "nv_ceil", {
				writable: false,
				value: Math.ceil
			})
			Object.defineProperty(Math, "nv_cos", {
				writable: false,
				value: Math.cos
			})
			Object.defineProperty(Math, "nv_exp", {
				writable: false,
				value: Math.exp
			})
			Object.defineProperty(Math, "nv_floor", {
				writable: false,
				value: Math.floor
			})
			Object.defineProperty(Math, "nv_log", {
				writable: false,
				value: Math.log
			})
			Object.defineProperty(Math, "nv_max", {
				writable: false,
				value: Math.max
			})
			Object.defineProperty(Math, "nv_min", {
				writable: false,
				value: Math.min
			})
			Object.defineProperty(Math, "nv_pow", {
				writable: false,
				value: Math.pow
			})
			Object.defineProperty(Math, "nv_random", {
				writable: false,
				value: Math.random
			})
			Object.defineProperty(Math, "nv_round", {
				writable: false,
				value: Math.round
			})
			Object.defineProperty(Math, "nv_sin", {
				writable: false,
				value: Math.sin
			})
			Object.defineProperty(Math, "nv_sqrt", {
				writable: false,
				value: Math.sqrt
			})
			Object.defineProperty(Math, "nv_tan", {
				writable: false,
				value: Math.tan
			})
		}
		var nf_init_Date = function () {
			Object.defineProperty(Date.prototype, "nv_constructor", {
				writable: true,
				value: "Date"
			})
			Object.defineProperty(Date, "nv_parse", {
				writable: true,
				value: Date.parse
			})
			Object.defineProperty(Date, "nv_UTC", {
				writable: true,
				value: Date.UTC
			})
			Object.defineProperty(Date, "nv_now", {
				writable: true,
				value: Date.now
			})
			Object.defineProperty(Date.prototype, "nv_toString", {
				writable: true,
				value: Date.prototype.toString
			})
			Object.defineProperty(Date.prototype, "nv_toDateString", {
				writable: true,
				value: Date.prototype.toDateString
			})
			Object.defineProperty(Date.prototype, "nv_toTimeString", {
				writable: true,
				value: Date.prototype.toTimeString
			})
			Object.defineProperty(Date.prototype, "nv_toLocaleString", {
				writable: true,
				value: Date.prototype.toLocaleString
			})
			Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
				writable: true,
				value: Date.prototype.toLocaleDateString
			})
			Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
				writable: true,
				value: Date.prototype.toLocaleTimeString
			})
			Object.defineProperty(Date.prototype, "nv_valueOf", {
				writable: true,
				value: Date.prototype.valueOf
			})
			Object.defineProperty(Date.prototype, "nv_getTime", {
				writable: true,
				value: Date.prototype.getTime
			})
			Object.defineProperty(Date.prototype, "nv_getFullYear", {
				writable: true,
				value: Date.prototype.getFullYear
			})
			Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
				writable: true,
				value: Date.prototype.getUTCFullYear
			})
			Object.defineProperty(Date.prototype, "nv_getMonth", {
				writable: true,
				value: Date.prototype.getMonth
			})
			Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
				writable: true,
				value: Date.prototype.getUTCMonth
			})
			Object.defineProperty(Date.prototype, "nv_getDate", {
				writable: true,
				value: Date.prototype.getDate
			})
			Object.defineProperty(Date.prototype, "nv_getUTCDate", {
				writable: true,
				value: Date.prototype.getUTCDate
			})
			Object.defineProperty(Date.prototype, "nv_getDay", {
				writable: true,
				value: Date.prototype.getDay
			})
			Object.defineProperty(Date.prototype, "nv_getUTCDay", {
				writable: true,
				value: Date.prototype.getUTCDay
			})
			Object.defineProperty(Date.prototype, "nv_getHours", {
				writable: true,
				value: Date.prototype.getHours
			})
			Object.defineProperty(Date.prototype, "nv_getUTCHours", {
				writable: true,
				value: Date.prototype.getUTCHours
			})
			Object.defineProperty(Date.prototype, "nv_getMinutes", {
				writable: true,
				value: Date.prototype.getMinutes
			})
			Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
				writable: true,
				value: Date.prototype.getUTCMinutes
			})
			Object.defineProperty(Date.prototype, "nv_getSeconds", {
				writable: true,
				value: Date.prototype.getSeconds
			})
			Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
				writable: true,
				value: Date.prototype.getUTCSeconds
			})
			Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
				writable: true,
				value: Date.prototype.getMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
				writable: true,
				value: Date.prototype.getUTCMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
				writable: true,
				value: Date.prototype.getTimezoneOffset
			})
			Object.defineProperty(Date.prototype, "nv_setTime", {
				writable: true,
				value: Date.prototype.setTime
			})
			Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
				writable: true,
				value: Date.prototype.setMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
				writable: true,
				value: Date.prototype.setUTCMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_setSeconds", {
				writable: true,
				value: Date.prototype.setSeconds
			})
			Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
				writable: true,
				value: Date.prototype.setUTCSeconds
			})
			Object.defineProperty(Date.prototype, "nv_setMinutes", {
				writable: true,
				value: Date.prototype.setMinutes
			})
			Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
				writable: true,
				value: Date.prototype.setUTCMinutes
			})
			Object.defineProperty(Date.prototype, "nv_setHours", {
				writable: true,
				value: Date.prototype.setHours
			})
			Object.defineProperty(Date.prototype, "nv_setUTCHours", {
				writable: true,
				value: Date.prototype.setUTCHours
			})
			Object.defineProperty(Date.prototype, "nv_setDate", {
				writable: true,
				value: Date.prototype.setDate
			})
			Object.defineProperty(Date.prototype, "nv_setUTCDate", {
				writable: true,
				value: Date.prototype.setUTCDate
			})
			Object.defineProperty(Date.prototype, "nv_setMonth", {
				writable: true,
				value: Date.prototype.setMonth
			})
			Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
				writable: true,
				value: Date.prototype.setUTCMonth
			})
			Object.defineProperty(Date.prototype, "nv_setFullYear", {
				writable: true,
				value: Date.prototype.setFullYear
			})
			Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
				writable: true,
				value: Date.prototype.setUTCFullYear
			})
			Object.defineProperty(Date.prototype, "nv_toUTCString", {
				writable: true,
				value: Date.prototype.toUTCString
			})
			Object.defineProperty(Date.prototype, "nv_toISOString", {
				writable: true,
				value: Date.prototype.toISOString
			})
			Object.defineProperty(Date.prototype, "nv_toJSON", {
				writable: true,
				value: Date.prototype.toJSON
			})
		}
		var nf_init_RegExp = function () {
			Object.defineProperty(RegExp.prototype, "nv_constructor", {
				writable: true,
				value: "RegExp"
			})
			Object.defineProperty(RegExp.prototype, "nv_exec", {
				writable: true,
				value: RegExp.prototype.exec
			})
			Object.defineProperty(RegExp.prototype, "nv_test", {
				writable: true,
				value: RegExp.prototype.test
			})
			Object.defineProperty(RegExp.prototype, "nv_toString", {
				writable: true,
				value: RegExp.prototype.toString
			})
			Object.defineProperty(RegExp.prototype, "nv_source", {
				get: function () {
					return this.source;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_global", {
				get: function () {
					return this.global;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
				get: function () {
					return this.ignoreCase;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_multiline", {
				get: function () {
					return this.multiline;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
				get: function () {
					return this.lastIndex;
				},
				set: function (v) {
					this.lastIndex = v;
				}
			});
		}
		nf_init();
		var nv_getDate = function () {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(Date);
			return new(Function.prototype.bind.apply(Date, args));
		}
		var nv_getRegExp = function () {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(RegExp);
			return new(Function.prototype.bind.apply(RegExp, args));
		}
		var nv_console = {}
		nv_console.nv_log = function () {
			var res = "WXSRT:";
			for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
			console.log(res);
		}
		var nv_parseInt = parseInt,
			nv_parseFloat = parseFloat,
			nv_isNaN = isNaN,
			nv_isFinite = isFinite,
			nv_decodeURI = decodeURI,
			nv_decodeURIComponent = decodeURIComponent,
			nv_encodeURI = encodeURI,
			nv_encodeURIComponent = encodeURIComponent;

		function $gdc(o, p, r) {
			o = wh.rv(o);
			if (o === null || o === undefined) return o;
			if (o.constructor === String || o.constructor === Boolean || o.constructor === Number) return o;
			if (o.constructor === Object) {
				var copy = {};
				for (var k in o)
					if (o.hasOwnProperty(k))
						if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
						else copy[p + k] = $gdc(o[k], p, r);
				return copy;
			}
			if (o.constructor === Array) {
				var copy = [];
				for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
				return copy;
			}
			if (o.constructor === Date) {
				var copy = new Date();
				copy.setTime(o.getTime());
				return copy;
			}
			if (o.constructor === RegExp) {
				var f = "";
				if (o.global) f += "g";
				if (o.ignoreCase) f += "i";
				if (o.multiline) f += "m";
				return (new RegExp(o.source, f));
			}
			if (r && o.constructor === Function) {
				if (r == 1) return $gdc(o(), undefined, 2);
				if (r == 2) return o;
			}
			return null;
		}
		var nv_JSON = {}
		nv_JSON.nv_stringify = function (o) {
			JSON.stringify(o);
			return JSON.stringify($gdc(o));
		}
		nv_JSON.nv_parse = function (o) {
			if (o === undefined) return undefined;
			var t = JSON.parse(o);
			return $gdc(t, 'nv_');
		}

		function _af(p, a, r, c) {
			p.extraAttr = {
				"t_action": a,
				"t_rawid": r
			};
			if (typeof (c) != 'undefined') p.extraAttr.t_cid = c;
		}

		function _ai(i, p, e, me, r, c) {
			var x = _grp(p, e, me);
			if (x) i.push(x);
			else {
				i.push('');
				_wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
			}
		}

		function _grp(p, e, me) {
			if (p[0] != '/') {
				var mepart = me.split('/');
				mepart.pop();
				var ppart = p.split('/');
				for (var i = 0; i < ppart.length; i++) {
					if (ppart[i] == '..') mepart.pop();
					else if (!ppart[i] || ppart[i] == '.') continue;
					else mepart.push(ppart[i]);
				}
				p = mepart.join('/');
			}
			if (me[0] == '.' && p[0] == '/') p = '.' + p;
			if (e[p]) return p;
			if (e[p + '.wxml']) return p + '.wxml';
		}

		function _gd(p, c, e, d) {
			if (!c) return;
			if (d[p][c]) return d[p][c];
			for (var x = e[p].i.length - 1; x >= 0; x--) {
				if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
			};
			for (var x = e[p].ti.length - 1; x >= 0; x--) {
				var q = _grp(e[p].ti[x], e, p);
				if (q && d[q][c]) return d[q][c]
			}
			var ii = _gapi(e, p);
			for (var x = 0; x < ii.length; x++) {
				if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
			}
			for (var k = e[p].j.length - 1; k >= 0; k--)
				if (e[p].j[k]) {
					for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
						var pp = _grp(e[e[p].j[k]].ti[q], e, p);
						if (pp && d[pp][c]) {
							return d[pp][c]
						}
					}
				}
		}

		function _gapi(e, p) {
			if (!p) return [];
			if ($gaic[p]) {
				return $gaic[p]
			};
			var ret = [],
				q = [],
				h = 0,
				t = 0,
				put = {},
				visited = {};
			q.push(p);
			visited[p] = true;
			t++;
			while (h < t) {
				var a = q[h++];
				for (var i = 0; i < e[a].ic.length; i++) {
					var nd = e[a].ic[i];
					var np = _grp(nd, e, a);
					if (np && !visited[np]) {
						visited[np] = true;
						q.push(np);
						t++;
					}
				}
				for (var i = 0; a != p && i < e[a].ti.length; i++) {
					var ni = e[a].ti[i];
					var nm = _grp(ni, e, a);
					if (nm && !put[nm]) {
						put[nm] = true;
						ret.push(nm);
					}
				}
			}
			$gaic[p] = ret;
			return ret;
		}
		var $ixc = {};

		function _ic(p, ent, me, e, s, r, gg) {
			var x = _grp(p, ent, me);
			ent[me].j.push(x);
			if (x) {
				if ($ixc[x]) {
					_wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
					return;
				}
				$ixc[x] = true;
				try {
					ent[x].f(e, s, r, gg)
				} catch (e) {}
				$ixc[x] = false;
			} else {
				_wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
			}
		}

		function _w(tn, f, line, c) {
			_wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
		}

		function _ev(dom) {
			var changed = false;
			delete dom.properities;
			delete dom.n;
			if (dom.children) {
				do {
					changed = false;
					var newch = [];
					for (var i = 0; i < dom.children.length; i++) {
						var ch = dom.children[i];
						if (ch.tag == 'virtual') {
							changed = true;
							for (var j = 0; ch.children && j < ch.children.length; j++) {
								newch.push(ch.children[j]);
							}
						} else {
							newch.push(ch);
						}
					}
					dom.children = newch;
				} while (changed);
				for (var i = 0; i < dom.children.length; i++) {
					_ev(dom.children[i]);
				}
			}
			return dom;
		}

		function _tsd(root) {
			if (root.tag == "wx-wx-scope") {
				root.tag = "virtual";
				root.wxCkey = "11";
				root['wxScopeData'] = root.attr['wx:scope-data'];
				delete root.n;
				delete root.raw;
				delete root.generics;
				delete root.attr;
			}
			for (var i = 0; root.children && i < root.children.length; i++) {
				_tsd(root.children[i]);
			}
			return root;
		}

		var e_ = {}
		if (typeof (global.entrys) === 'undefined') global.entrys = {};
		e_ = global.entrys;
		var d_ = {}
		if (typeof (global.defines) === 'undefined') global.defines = {};
		d_ = global.defines;
		var f_ = {}
		if (typeof (global.modules) === 'undefined') global.modules = {};
		f_ = global.modules || {};
		var p_ = {}
		__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
		__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
		__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
		var z = __WXML_GLOBAL__.ops_set.$gwx || [];

		function gz$gwx_1() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
			__WXML_GLOBAL__.ops_cached.$gwx_1 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, '_initComponent'])
				Z([3, 'v-dialog-login'])
				Z([
					[7],
					[3, 'isShow']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_1);
			return __WXML_GLOBAL__.ops_cached.$gwx_1
		}

		function gz$gwx_2() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_2) return __WXML_GLOBAL__.ops_cached.$gwx_2
			__WXML_GLOBAL__.ops_cached.$gwx_2 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, '_initComponent'])
				Z([3, 'v-dialog-login'])
				Z([
					[7],
					[3, 'isShow']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_2);
			return __WXML_GLOBAL__.ops_cached.$gwx_2
		}

		function gz$gwx_3() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_3) return __WXML_GLOBAL__.ops_cached.$gwx_3
			__WXML_GLOBAL__.ops_cached.$gwx_3 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_3);
			return __WXML_GLOBAL__.ops_cached.$gwx_3
		}

		function gz$gwx_4() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_4) return __WXML_GLOBAL__.ops_cached.$gwx_4
			__WXML_GLOBAL__.ops_cached.$gwx_4 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'nav-bar_bar'])
				Z([a, [3, 'top:'],
					[
						[7],
						[3, 'statusBarHeight']
					],
					[3, 'px;height:'],
					[
						[7],
						[3, 'cusnavH']
					],
					[3, 'px;']
				])
				Z([
					[7],
					[3, 'isSearch']
				])
				Z([3, 'nav-bar_icon'])
				Z([a, [3, 'height:'],
					[
						[6],
						[
							[7],
							[3, 'navbarBtn']
						],
						[3, 'height']
					],
					[3, 'px;line-height:'],
					[
						[2, '-'],
						[
							[6],
							[
								[7],
								[3, 'navbarBtn']
							],
							[3, 'height']
						],
						[1, 2]
					],
					[3, 'px; top:'],
					[
						[6],
						[
							[7],
							[3, 'navbarBtn']
						],
						[3, 'top']
					],
					[3, 'px; left:'],
					[
						[6],
						[
							[7],
							[3, 'navbarBtn']
						],
						[3, 'right']
					],
					[3, 'px; border-radius:'],
					[
						[2, '/'],
						[
							[6],
							[
								[7],
								[3, 'navbarBtn']
							],
							[3, 'height']
						],
						[1, 2]
					], z[1][5]
				])
				Z([
					[7],
					[3, 'haveBack']
				])
				Z([
					[7],
					[3, 'haveHome']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_4);
			return __WXML_GLOBAL__.ops_cached.$gwx_4
		}

		function gz$gwx_5() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_5) return __WXML_GLOBAL__.ops_cached.$gwx_5
			__WXML_GLOBAL__.ops_cached.$gwx_5 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'nav-bar_bar'])
				Z([a, [3, 'top:'],
					[
						[7],
						[3, 'statusBarHeight']
					],
					[3, 'px;height:'],
					[
						[7],
						[3, 'cusnavH']
					],
					[3, 'px;']
				])
				Z([
					[7],
					[3, 'isSearch']
				])
				Z([3, 'nav-bar_icon'])
				Z([a, [3, 'height:'],
					[
						[6],
						[
							[7],
							[3, 'navbarBtn']
						],
						[3, 'height']
					],
					[3, 'px;line-height:'],
					[
						[2, '-'],
						[
							[6],
							[
								[7],
								[3, 'navbarBtn']
							],
							[3, 'height']
						],
						[1, 2]
					],
					[3, 'px; top:'],
					[
						[6],
						[
							[7],
							[3, 'navbarBtn']
						],
						[3, 'top']
					],
					[3, 'px; left:'],
					[
						[6],
						[
							[7],
							[3, 'navbarBtn']
						],
						[3, 'right']
					],
					[3, 'px; border-radius:'],
					[
						[2, '/'],
						[
							[6],
							[
								[7],
								[3, 'navbarBtn']
							],
							[3, 'height']
						],
						[1, 2]
					], z[1][5]
				])
				Z([
					[7],
					[3, 'haveBack']
				])
				Z([
					[7],
					[3, 'haveHome']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_5);
			return __WXML_GLOBAL__.ops_cached.$gwx_5
		}

		function gz$gwx_6() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_6) return __WXML_GLOBAL__.ops_cached.$gwx_6
			__WXML_GLOBAL__.ops_cached.$gwx_6 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'onRefresh'])
				Z([3, 'onTouchBottom'])
				Z([1, true])
				Z([1, 100])
				Z([
					[7],
					[3, 'triggered']
				])
				Z([a, [3, 'width:100%;height:'],
					[
						[7],
						[3, 'height']
					],
					[3, 'px;']
				])
				Z([
					[7],
					[3, 'haveMore']
				])
				Z([
					[7],
					[3, 'isEmpty']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_6);
			return __WXML_GLOBAL__.ops_cached.$gwx_6
		}

		function gz$gwx_7() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_7) return __WXML_GLOBAL__.ops_cached.$gwx_7
			__WXML_GLOBAL__.ops_cached.$gwx_7 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'active-class'])
				Z([3, 'onCancel'])
				Z([3, 'onChange'])
				Z([3, 'onConfirm'])
				Z([
					[7],
					[3, 'cancelButtonText']
				])
				Z([3, 'van-area__picker'])
				Z([3, 'column-class'])
				Z([
					[7],
					[3, 'displayColumns']
				])
				Z([
					[7],
					[3, 'confirmButtonText']
				])
				Z([
					[7],
					[3, 'itemHeight']
				])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[7],
					[3, 'title']
				])
				Z([3, 'toolbar-class'])
				Z([3, 'name'])
				Z([
					[7],
					[3, 'visibleItemCount']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_7);
			return __WXML_GLOBAL__.ops_cached.$gwx_7
		}

		function gz$gwx_8() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_8) return __WXML_GLOBAL__.ops_cached.$gwx_8
			__WXML_GLOBAL__.ops_cached.$gwx_8 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'appParameter']
				])
				Z([
					[7],
					[3, 'ariaLabel']
				])
				Z([3, 'bindContact'])
				Z([3, 'bindError'])
				Z([3, 'bindGetPhoneNumber'])
				Z([3, 'bindGetUserInfo'])
				Z([3, 'bindLaunchApp'])
				Z([3, 'bindOpenSetting'])
				Z([3, 'onClick'])
				Z([
					[7],
					[3, 'businessId']
				])
				Z([a, [3, 'custom-class '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'button']
							],
							[
								[4],
								[
									[5],
									[
										[5],
										[
											[5],
											[
												[7],
												[3, 'type']
											]
										],
										[
											[7],
											[3, 'size']
										]
									],
									[
										[9],
										[
											[9],
											[
												[9],
												[
													[9],
													[
														[9],
														[
															[9],
															[
																[9],
																[
																	[8], 'block', [
																		[7],
																		[3, 'block']
																	]
																],
																[
																	[8], 'round', [
																		[7],
																		[3, 'round']
																	]
																]
															],
															[
																[8], 'plain', [
																	[7],
																	[3, 'plain']
																]
															]
														],
														[
															[8], 'square', [
																[7],
																[3, 'square']
															]
														]
													],
													[
														[8], 'loading', [
															[7],
															[3, 'loading']
														]
													]
												],
												[
													[8], 'disabled', [
														[7],
														[3, 'disabled']
													]
												]
											],
											[
												[8], 'hairline', [
													[7],
													[3, 'hairline']
												]
											]
										],
										[
											[8], 'unclickable', [
												[2, '||'],
												[
													[7],
													[3, 'disabled']
												],
												[
													[7],
													[3, 'loading']
												]
											]
										]
									]
								]
							]
						]
					],
					[3, ' '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'hairline']
						],
						[1, 'van-hairline--surround'],
						[1, '']
					]
				])
				Z([3, 'van-button--active hover-class'])
				Z([
					[7],
					[3, 'id']
				])
				Z([
					[7],
					[3, 'lang']
				])
				Z([
					[7],
					[3, 'openType']
				])
				Z([
					[7],
					[3, 'sendMessageImg']
				])
				Z([
					[7],
					[3, 'sendMessagePath']
				])
				Z([
					[7],
					[3, 'sendMessageTitle']
				])
				Z([
					[7],
					[3, 'sessionFrom']
				])
				Z([
					[7],
					[3, 'showMessageCard']
				])
				Z([a, [
						[7],
						[3, 'style']
					], z[10][3],
					[
						[7],
						[3, 'customStyle']
					]
				])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[2, '?:'],
					[
						[2, '==='],
						[
							[7],
							[3, 'type']
						],
						[1, 'default']
					],
					[1, '#c9c9c9'],
					[1, 'white']
				])
				Z([3, 'loading-class'])
				Z([
					[7],
					[3, 'loadingSize']
				])
				Z([
					[7],
					[3, 'loadingType']
				])
				Z([
					[7],
					[3, 'loadingText']
				])
				Z([3, ''])
				Z([
					[7],
					[3, 'icon']
				])
				Z([3, 'van-button__icon'])
				Z([3, 'line-height: inherit;'])
				Z(z[28])
				Z([3, '1.2em'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_8);
			return __WXML_GLOBAL__.ops_cached.$gwx_8
		}

		function gz$gwx_9() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_9) return __WXML_GLOBAL__.ops_cached.$gwx_9
			__WXML_GLOBAL__.ops_cached.$gwx_9 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'title']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_9);
			return __WXML_GLOBAL__.ops_cached.$gwx_9
		}

		function gz$gwx_10() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_10) return __WXML_GLOBAL__.ops_cached.$gwx_10
			__WXML_GLOBAL__.ops_cached.$gwx_10 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'onClick'])
				Z([a, [3, 'custom-class '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'cell']
							],
							[
								[4],
								[
									[5],
									[
										[5],
										[
											[7],
											[3, 'size']
										]
									],
									[
										[9],
										[
											[9],
											[
												[9],
												[
													[8], 'center', [
														[7],
														[3, 'center']
													]
												],
												[
													[8], 'required', [
														[7],
														[3, 'required']
													]
												]
											],
											[
												[8], 'borderless', [
													[2, '!'],
													[
														[7],
														[3, 'border']
													]
												]
											]
										],
										[
											[8], 'clickable', [
												[2, '||'],
												[
													[7],
													[3, 'isLink']
												],
												[
													[7],
													[3, 'clickable']
												]
											]
										]
									]
								]
							]
						]
					]
				])
				Z([3, 'van-cell--hover hover-class'])
				Z([3, '70'])
				Z([
					[7],
					[3, 'customStyle']
				])
				Z([
					[7],
					[3, 'icon']
				])
				Z([3, 'van-cell__left-icon-wrap'])
				Z([3, 'van-cell__left-icon'])
				Z(z[5])
				Z([3, ''])
				Z([3, 'icon'])
				Z([3, 'van-cell__title title-class'])
				Z([
					[2, '?:'],
					[
						[7],
						[3, 'titleWidth']
					],
					[
						[2, '+'],
						[
							[2, '+'],
							[
								[2, '+'],
								[1, 'max-width:'],
								[
									[7],
									[3, 'titleWidth']
								]
							],
							[1, ';min-width:']
						],
						[
							[7],
							[3, 'titleWidth']
						]
					],
					[1, '']
				])
				Z([
					[7],
					[3, 'title']
				])
				Z(z[9])
				Z([3, 'title'])
				Z([
					[2, '||'],
					[
						[7],
						[3, 'label']
					],
					[
						[7],
						[3, 'useLabelSlot']
					]
				])
				Z([3, 'van-cell__label label-class'])
				Z([
					[7],
					[3, 'useLabelSlot']
				])
				Z([3, 'label'])
				Z([
					[7],
					[3, 'label']
				])
				Z([3, 'van-cell__value value-class'])
				Z([
					[2, '?:'],
					[
						[7],
						[3, 'valueLeft']
					],
					[1, 'text-align:left;'],
					[1, '']
				])
				Z([
					[2, '||'],
					[
						[7],
						[3, 'value']
					],
					[
						[2, '==='],
						[
							[7],
							[3, 'value']
						],
						[1, 0]
					]
				])
				Z(z[9])
				Z([
					[7],
					[3, 'isLink']
				])
				Z([3, 'van-cell__right-icon-wrap right-icon-class'])
				Z([3, 'van-cell__right-icon'])
				Z([
					[2, '?:'],
					[
						[7],
						[3, 'arrowDirection']
					],
					[
						[2, '+'],
						[
							[2, '+'],
							[1, 'arrow'],
							[1, '-']
						],
						[
							[7],
							[3, 'arrowDirection']
						]
					],
					[1, 'arrow']
				])
				Z(z[9])
				Z([3, 'right-icon'])
				Z([3, 'extra'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_10);
			return __WXML_GLOBAL__.ops_cached.$gwx_10
		}

		function gz$gwx_11() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_11) return __WXML_GLOBAL__.ops_cached.$gwx_11
			__WXML_GLOBAL__.ops_cached.$gwx_11 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'onClickOverlay'])
				Z([
					[7],
					[3, 'closeOnClickOverlay']
				])
				Z([a, [3, 'van-dialog '],
					[
						[7],
						[3, 'className']
					]
				])
				Z([a, [3, 'width: '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'addUnit']
						],
						[
							[5],
							[
								[7],
								[3, 'width']
							]
						]
					],
					[3, ';'],
					[
						[7],
						[3, 'customStyle']
					]
				])
				Z([
					[7],
					[3, 'overlay']
				])
				Z([
					[7],
					[3, 'overlayStyle']
				])
				Z([
					[7],
					[3, 'show']
				])
				Z([
					[7],
					[3, 'transition']
				])
				Z([
					[7],
					[3, 'zIndex']
				])
				Z([
					[2, '||'],
					[
						[7],
						[3, 'title']
					],
					[
						[7],
						[3, 'useTitleSlot']
					]
				])
				Z([a, [3, 'van-dialog__header '],
					[
						[2, '?:'],
						[
							[2, '||'],
							[
								[7],
								[3, 'message']
							],
							[
								[7],
								[3, 'useSlot']
							]
						],
						[1, ''],
						[1, 'van-dialog--isolated']
					]
				])
				Z([
					[7],
					[3, 'useTitleSlot']
				])
				Z([3, 'title'])
				Z([
					[7],
					[3, 'title']
				])
				Z([
					[7],
					[3, 'useSlot']
				])
				Z([
					[7],
					[3, 'message']
				])
				Z([3, 'van-hairline--top van-dialog__footer'])
				Z([
					[7],
					[3, 'showCancelButton']
				])
				Z([3, 'onCancel'])
				Z([3, 'van-dialog__button van-hairline--right'])
				Z([3, 'van-dialog__cancel'])
				Z([a, [3, 'color: '],
					[
						[7],
						[3, 'cancelButtonColor']
					]
				])
				Z([
					[6],
					[
						[7],
						[3, 'loading']
					],
					[3, 'cancel']
				])
				Z([3, 'large'])
				Z([
					[7],
					[3, 'showConfirmButton']
				])
				Z([
					[7],
					[3, 'appParameter']
				])
				Z([3, 'onConfirm'])
				Z([3, 'bindContact'])
				Z([3, 'bindError'])
				Z([3, 'bindGetPhoneNumber'])
				Z([3, 'bindGetUserInfo'])
				Z([3, 'bindLaunchApp'])
				Z([3, 'bindOpenSetting'])
				Z([
					[7],
					[3, 'businessId']
				])
				Z([3, 'van-dialog__button'])
				Z([3, 'van-dialog__confirm'])
				Z([a, z[21][1],
					[
						[7],
						[3, 'confirmButtonColor']
					]
				])
				Z([
					[7],
					[3, 'lang']
				])
				Z([
					[6],
					[
						[7],
						[3, 'loading']
					],
					[3, 'confirm']
				])
				Z([
					[7],
					[3, 'confirmButtonOpenType']
				])
				Z([
					[7],
					[3, 'sendMessageImg']
				])
				Z([
					[7],
					[3, 'sendMessagePath']
				])
				Z([
					[7],
					[3, 'sendMessageTitle']
				])
				Z([
					[7],
					[3, 'sessionFrom']
				])
				Z([
					[7],
					[3, 'showMessageCard']
				])
				Z(z[23])
			})(__WXML_GLOBAL__.ops_cached.$gwx_11);
			return __WXML_GLOBAL__.ops_cached.$gwx_11
		}

		function gz$gwx_12() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_12) return __WXML_GLOBAL__.ops_cached.$gwx_12
			__WXML_GLOBAL__.ops_cached.$gwx_12 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'arrowDirection']
				])
				Z([
					[7],
					[3, 'border']
				])
				Z([
					[7],
					[3, 'center']
				])
				Z([
					[7],
					[3, 'clickable']
				])
				Z([3, 'van-field'])
				Z([
					[7],
					[3, 'customStyle']
				])
				Z([
					[7],
					[3, 'leftIcon']
				])
				Z([
					[7],
					[3, 'isLink']
				])
				Z([
					[7],
					[3, 'required']
				])
				Z([
					[7],
					[3, 'size']
				])
				Z([
					[7],
					[3, 'label']
				])
				Z([
					[7],
					[3, 'titleWidth']
				])
				Z([3, 'left-icon'])
				Z([3, 'icon'])
				Z([3, 'label'])
				Z([3, 'title'])
				Z([
					[12],
					[
						[6],
						[
							[7],
							[3, 'utils']
						],
						[3, 'bem']
					],
					[
						[5],
						[
							[5],
							[1, 'field__body']
						],
						[
							[4],
							[
								[5],
								[
									[5],
									[
										[7],
										[3, 'type']
									]
								],
								[
									[7],
									[3, 'system']
								]
							]
						]
					]
				])
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[2, '&&'],
							[
								[7],
								[3, 'clearable']
							],
							[
								[7],
								[3, 'focused']
							]
						],
						[
							[7],
							[3, 'value']
						]
					],
					[
						[2, '!'],
						[
							[7],
							[3, 'readonly']
						]
					]
				])
				Z([3, 'onClear'])
				Z([3, 'van-field__clear-root van-field__icon-root'])
				Z([3, 'clear'])
				Z([3, '16px'])
				Z([3, 'onClickIcon'])
				Z([3, 'van-field__icon-container'])
				Z([
					[2, '||'],
					[
						[7],
						[3, 'rightIcon']
					],
					[
						[7],
						[3, 'icon']
					]
				])
				Z([a, [3, 'van-field__icon-root '],
					[
						[7],
						[3, 'iconClass']
					]
				])
				Z([3, 'right-icon-class'])
				Z(z[24])
				Z(z[21])
				Z([3, 'right-icon'])
				Z(z[13])
				Z([3, 'button'])
				Z([
					[7],
					[3, 'errorMessage']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_12);
			return __WXML_GLOBAL__.ops_cached.$gwx_12
		}

		function gz$gwx_13() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_13) return __WXML_GLOBAL__.ops_cached.$gwx_13
			__WXML_GLOBAL__.ops_cached.$gwx_13 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'onClick'])
				Z([a, [3, 'custom-class '],
					[
						[7],
						[3, 'classPrefix']
					],
					[3, ' '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'isImageName']
						],
						[1, 'van-icon--image'],
						[
							[2, '+'],
							[
								[2, '+'],
								[
									[7],
									[3, 'classPrefix']
								],
								[1, '-']
							],
							[
								[7],
								[3, 'name']
							]
						]
					]
				])
				Z([a, [3, 'color: '],
					[
						[7],
						[3, 'color']
					],
					[3, ';font-size: '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'addUnit']
						],
						[
							[5],
							[
								[7],
								[3, 'size']
							]
						]
					],
					[3, ';'],
					[
						[7],
						[3, 'customStyle']
					]
				])
				Z([
					[2, '||'],
					[
						[2, '!=='],
						[
							[7],
							[3, 'info']
						],
						[1, null]
					],
					[
						[7],
						[3, 'dot']
					]
				])
				Z([3, 'van-icon__info'])
				Z([
					[7],
					[3, 'dot']
				])
				Z([
					[7],
					[3, 'info']
				])
				Z([
					[7],
					[3, 'isImageName']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_13);
			return __WXML_GLOBAL__.ops_cached.$gwx_13
		}

		function gz$gwx_14() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_14) return __WXML_GLOBAL__.ops_cached.$gwx_14
			__WXML_GLOBAL__.ops_cached.$gwx_14 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '||'],
					[
						[2, '&&'],
						[
							[2, '!=='],
							[
								[7],
								[3, 'info']
							],
							[1, null]
						],
						[
							[2, '!=='],
							[
								[7],
								[3, 'info']
							],
							[1, '']
						]
					],
					[
						[7],
						[3, 'dot']
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_14);
			return __WXML_GLOBAL__.ops_cached.$gwx_14
		}

		function gz$gwx_15() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_15) return __WXML_GLOBAL__.ops_cached.$gwx_15
			__WXML_GLOBAL__.ops_cached.$gwx_15 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([a, [3, 'custom-class van-loading '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'vertical']
						],
						[1, 'van-loading--vertical'],
						[1, '']
					]
				])
				Z([3, 'item in 12'])
				Z([3, 'index'])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'type']
					],
					[1, 'spinner']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_15);
			return __WXML_GLOBAL__.ops_cached.$gwx_15
		}

		function gz$gwx_16() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_16) return __WXML_GLOBAL__.ops_cached.$gwx_16
			__WXML_GLOBAL__.ops_cached.$gwx_16 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'onClick'])
				Z([3, 'noop'])
				Z([3, 'van-overlay'])
				Z([a, [3, 'z-index: '],
					[
						[7],
						[3, 'zIndex']
					],
					[3, '; '],
					[
						[7],
						[3, 'customStyle']
					]
				])
				Z([
					[7],
					[3, 'duration']
				])
				Z([
					[7],
					[3, 'show']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_16);
			return __WXML_GLOBAL__.ops_cached.$gwx_16
		}

		function gz$gwx_17() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_17) return __WXML_GLOBAL__.ops_cached.$gwx_17
			__WXML_GLOBAL__.ops_cached.$gwx_17 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_17);
			return __WXML_GLOBAL__.ops_cached.$gwx_17
		}

		function gz$gwx_18() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_18) return __WXML_GLOBAL__.ops_cached.$gwx_18
			__WXML_GLOBAL__.ops_cached.$gwx_18 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'toolbar'])
				Z([
					[7],
					[3, 'showToolbar']
				])
				Z([
					[7],
					[3, 'title']
				])
				Z([3, 'van-picker custom-class'])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'toolbarPosition']
					],
					[1, 'top']
				])
				Z([
					[9],
					[
						[9],
						[
							[9],
							[
								[8], 'showToolbar', [
									[7],
									[3, 'showToolbar']
								]
							],
							[
								[8], 'cancelButtonText', [
									[7],
									[3, 'cancelButtonText']
								]
							]
						],
						[
							[8], 'title', [
								[7],
								[3, 'title']
							]
						]
					],
					[
						[8], 'confirmButtonText', [
							[7],
							[3, 'confirmButtonText']
						]
					]
				])
				Z(z[0])
				Z([
					[7],
					[3, 'loading']
				])
				Z([3, '#1989fa'])
				Z([3, 'noop'])
				Z([3, 'van-picker__columns'])
				Z([a, [3, 'height: '],
					[
						[2, '*'],
						[
							[7],
							[3, 'itemHeight']
						],
						[
							[7],
							[3, 'visibleItemCount']
						]
					],
					[3, 'px']
				])
				Z([
					[2, '?:'],
					[
						[12],
						[
							[7],
							[3, 'isSimple']
						],
						[
							[5],
							[
								[7],
								[3, 'columns']
							]
						]
					],
					[
						[4],
						[
							[5],
							[
								[7],
								[3, 'columns']
							]
						]
					],
					[
						[7],
						[3, 'columns']
					]
				])
				Z([3, 'index'])
				Z([3, 'active-class'])
				Z([3, 'onChange'])
				Z([3, 'van-picker__column'])
				Z([3, 'column-class'])
				Z([
					[7],
					[3, 'index']
				])
				Z([
					[2, '||'],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'defaultIndex']
					],
					[
						[7],
						[3, 'defaultIndex']
					]
				])
				Z([
					[2, '?:'],
					[
						[12],
						[
							[7],
							[3, 'isSimple']
						],
						[
							[5],
							[
								[7],
								[3, 'columns']
							]
						]
					],
					[
						[7],
						[3, 'item']
					],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'values']
					]
				])
				Z([
					[7],
					[3, 'itemHeight']
				])
				Z([
					[7],
					[3, 'valueKey']
				])
				Z([
					[7],
					[3, 'visibleItemCount']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'toolbarPosition']
					],
					[1, 'bottom']
				])
				Z(z[5])
				Z(z[0])
			})(__WXML_GLOBAL__.ops_cached.$gwx_18);
			return __WXML_GLOBAL__.ops_cached.$gwx_18
		}

		function gz$gwx_19() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_19) return __WXML_GLOBAL__.ops_cached.$gwx_19
			__WXML_GLOBAL__.ops_cached.$gwx_19 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'overlay']
				])
				Z([3, 'onClickOverlay'])
				Z([
					[7],
					[3, 'overlayStyle']
				])
				Z([
					[7],
					[3, 'duration']
				])
				Z([
					[7],
					[3, 'show']
				])
				Z([
					[7],
					[3, 'zIndex']
				])
				Z([
					[7],
					[3, 'inited']
				])
				Z([3, 'onTransitionEnd'])
				Z([a, [3, 'custom-class '],
					[
						[7],
						[3, 'classes']
					],
					[3, ' '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'popup']
							],
							[
								[4],
								[
									[5],
									[
										[5],
										[
											[7],
											[3, 'position']
										]
									],
									[
										[9],
										[
											[9],
											[
												[8], 'round', [
													[7],
													[3, 'round']
												]
											],
											[
												[8], 'safe', [
													[7],
													[3, 'safeAreaInsetBottom']
												]
											]
										],
										[
											[8], 'safeTop', [
												[7],
												[3, 'safeAreaInsetTop']
											]
										]
									]
								]
							]
						]
					]
				])
				Z([a, [3, 'z-index: '], z[5],
					[3, '; -webkit-transition-duration:'],
					[
						[7],
						[3, 'currentDuration']
					],
					[3, 'ms; transition-duration:'],
					[
						[7],
						[3, 'currentDuration']
					],
					[3, 'ms; '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'display']
						],
						[1, ''],
						[1, 'display: none;']
					],
					[3, ';'],
					[
						[7],
						[3, 'customStyle']
					]
				])
				Z([
					[7],
					[3, 'closeable']
				])
				Z([3, 'onClickCloseIcon'])
				Z([a, [3, 'van-popup__close-icon van-popup__close-icon--'],
					[
						[7],
						[3, 'closeIconPosition']
					]
				])
				Z([
					[7],
					[3, 'closeIcon']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_19);
			return __WXML_GLOBAL__.ops_cached.$gwx_19
		}

		function gz$gwx_20() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_20) return __WXML_GLOBAL__.ops_cached.$gwx_20
			__WXML_GLOBAL__.ops_cached.$gwx_20 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_20);
			return __WXML_GLOBAL__.ops_cached.$gwx_20
		}

		function gz$gwx_21() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_21) return __WXML_GLOBAL__.ops_cached.$gwx_21
			__WXML_GLOBAL__.ops_cached.$gwx_21 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'van-radio custom-class'])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'labelPosition']
					],
					[1, 'left']
				])
				Z([3, 'onClickLabel'])
				Z([a, [3, 'label-class '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'radio__label']
							],
							[
								[4],
								[
									[5],
									[
										[5],
										[
											[7],
											[3, 'labelPosition']
										]
									],
									[
										[8], 'disabled', [
											[7],
											[3, 'disabled']
										]
									]
								]
							]
						]
					]
				])
				Z([3, 'onChange'])
				Z([3, 'van-radio__icon-wrap'])
				Z([a, [3, 'font-size: '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'addUnit']
						],
						[
							[5],
							[
								[7],
								[3, 'iconSize']
							]
						]
					],
					[3, ';']
				])
				Z([
					[7],
					[3, 'useIconSlot']
				])
				Z([3, 'icon'])
				Z([3, ''])
				Z([
					[12],
					[
						[6],
						[
							[7],
							[3, 'utils']
						],
						[3, 'bem']
					],
					[
						[5],
						[
							[5],
							[1, 'radio__icon']
						],
						[
							[4],
							[
								[5],
								[
									[5],
									[
										[7],
										[3, 'shape']
									]
								],
								[
									[9],
									[
										[8], 'disabled', [
											[7],
											[3, 'disabled']
										]
									],
									[
										[8], 'checked', [
											[2, '==='],
											[
												[7],
												[3, 'value']
											],
											[
												[7],
												[3, 'name']
											]
										]
									]
								]
							]
						]
					]
				])
				Z([3, 'icon-class'])
				Z([a, [3, 'line-height: '], z[6][2],
					[3, ';font-size: .8em;display: block;']
				])
				Z([3, 'success'])
				Z([a, z[6][1], z[6][2], z[6][3],
					[
						[2, '?:'],
						[
							[2, '&&'],
							[
								[2, '&&'],
								[
									[7],
									[3, 'checkedColor']
								],
								[
									[2, '!'],
									[
										[7],
										[3, 'disabled']
									]
								]
							],
							[
								[2, '==='],
								[
									[7],
									[3, 'value']
								],
								[
									[7],
									[3, 'name']
								]
							]
						],
						[
							[2, '+'],
							[
								[2, '+'],
								[
									[2, '+'],
									[
										[2, '+'],
										[1, 'border-color:'],
										[
											[7],
											[3, 'checkedColor']
										]
									],
									[1, '; background-color:']
								],
								[
									[7],
									[3, 'checkedColor']
								]
							],
							[1, ';']
						],
						[1, '']
					]
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'labelPosition']
					],
					[1, 'right']
				])
				Z(z[2])
				Z([a, z[3][1], z[3][2]])
			})(__WXML_GLOBAL__.ops_cached.$gwx_21);
			return __WXML_GLOBAL__.ops_cached.$gwx_21
		}

		function gz$gwx_22() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_22) return __WXML_GLOBAL__.ops_cached.$gwx_22
			__WXML_GLOBAL__.ops_cached.$gwx_22 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'steps']
				])
				Z([3, 'index'])
				Z([a, [
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'step']
							],
							[
								[4],
								[
									[5],
									[
										[5],
										[
											[7],
											[3, 'direction']
										]
									],
									[
										[12],
										[
											[7],
											[3, 'status']
										],
										[
											[5],
											[
												[5],
												[
													[7],
													[3, 'index']
												]
											],
											[
												[7],
												[3, 'active']
											]
										]
									]
								]
							]
						]
					],
					[3, ' van-hairline']
				])
				Z([
					[2, '?:'],
					[
						[2, '==='],
						[
							[12],
							[
								[7],
								[3, 'status']
							],
							[
								[5],
								[
									[5],
									[
										[7],
										[3, 'index']
									]
								],
								[
									[7],
									[3, 'active']
								]
							]
						],
						[1, 'inactive']
					],
					[
						[2, '+'],
						[1, 'color: '],
						[
							[7],
							[3, 'inactiveColor']
						]
					],
					[1, '']
				])
				Z([3, 'van-step__circle-container'])
				Z([
					[2, '!=='],
					[
						[7],
						[3, 'index']
					],
					[
						[7],
						[3, 'active']
					]
				])
				Z([
					[7],
					[3, 'inactiveIcon']
				])
				Z([
					[2, '?:'],
					[
						[2, '==='],
						[
							[12],
							[
								[7],
								[3, 'status']
							],
							[
								[5],
								[
									[5],
									[
										[7],
										[3, 'index']
									]
								],
								[
									[7],
									[3, 'active']
								]
							]
						],
						[1, 'inactive']
					],
					[
						[7],
						[3, 'inactiveColor']
					],
					[
						[7],
						[3, 'activeColor']
					]
				])
				Z([3, 'van-step__icon'])
				Z(z[6])
				Z([3, ''])
				Z(z[10])
				Z([
					[7],
					[3, 'activeColor']
				])
				Z(z[8])
				Z([
					[7],
					[3, 'activeIcon']
				])
				Z([
					[2, '!=='],
					[
						[7],
						[3, 'index']
					],
					[
						[2, '-'],
						[
							[6],
							[
								[7],
								[3, 'steps']
							],
							[3, 'length']
						],
						[1, 1]
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_22);
			return __WXML_GLOBAL__.ops_cached.$gwx_22
		}

		function gz$gwx_23() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_23) return __WXML_GLOBAL__.ops_cached.$gwx_23
			__WXML_GLOBAL__.ops_cached.$gwx_23 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_23);
			return __WXML_GLOBAL__.ops_cached.$gwx_23
		}

		function gz$gwx_24() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_24) return __WXML_GLOBAL__.ops_cached.$gwx_24
			__WXML_GLOBAL__.ops_cached.$gwx_24 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'shouldRender']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_24);
			return __WXML_GLOBAL__.ops_cached.$gwx_24
		}

		function gz$gwx_25() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_25) return __WXML_GLOBAL__.ops_cached.$gwx_25
			__WXML_GLOBAL__.ops_cached.$gwx_25 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([a, [3, 'custom-class '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'tabs']
							],
							[
								[4],
								[
									[5],
									[
										[7],
										[3, 'type']
									]
								]
							]
						]
					]
				])
				Z([3, 'onTouchScroll'])
				Z([
					[7],
					[3, 'container']
				])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'sticky']
					]
				])
				Z([
					[7],
					[3, 'offsetTop']
				])
				Z([
					[7],
					[3, 'zIndex']
				])
				Z([a, [
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'tabs__wrap']
							],
							[
								[8], 'scrollable', [
									[7],
									[3, 'scrollable']
								]
							]
						]
					],
					[3, ' '],
					[
						[2, '?:'],
						[
							[2, '&&'],
							[
								[2, '==='],
								[
									[7],
									[3, 'type']
								],
								[1, 'line']
							],
							[
								[7],
								[3, 'border']
							]
						],
						[1, 'van-hairline--top-bottom'],
						[1, '']
					]
				])
				Z([3, 'nav-left'])
				Z([a, [
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'tabs__nav']
							],
							[
								[4],
								[
									[5],
									[
										[7],
										[3, 'type']
									]
								]
							]
						]
					],
					[3, ' nav-class']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'type']
					],
					[1, 'line']
				])
				Z([
					[7],
					[3, 'tabs']
				])
				Z([3, 'index'])
				Z([3, 'onTap'])
				Z([a, [
						[12],
						[
							[6],
							[
								[7],
								[3, 'getters']
							],
							[3, 'tabClass']
						],
						[
							[5],
							[
								[5],
								[
									[2, '==='],
									[
										[7],
										[3, 'index']
									],
									[
										[7],
										[3, 'currentIndex']
									]
								]
							],
							[
								[7],
								[3, 'ellipsis']
							]
						]
					], z[6][2],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'tab']
							],
							[
								[9],
								[
									[9],
									[
										[8], 'active', [
											[2, '==='],
											[
												[7],
												[3, 'index']
											],
											[
												[7],
												[3, 'currentIndex']
											]
										]
									],
									[
										[8], 'disabled', [
											[6],
											[
												[7],
												[3, 'item']
											],
											[3, 'disabled']
										]
									]
								],
								[
									[8], 'complete', [
										[2, '!'],
										[
											[7],
											[3, 'ellipsis']
										]
									]
								]
							]
						]
					]
				])
				Z([
					[7],
					[3, 'index']
				])
				Z([
					[12],
					[
						[6],
						[
							[7],
							[3, 'getters']
						],
						[3, 'tabStyle']
					],
					[
						[5],
						[
							[5],
							[
								[5],
								[
									[5],
									[
										[5],
										[
											[5],
											[
												[5],
												[
													[5],
													[
														[5],
														[
															[2, '==='],
															[
																[7],
																[3, 'index']
															],
															[
																[7],
																[3, 'currentIndex']
															]
														]
													],
													[
														[7],
														[3, 'ellipsis']
													]
												],
												[
													[7],
													[3, 'color']
												]
											],
											[
												[7],
												[3, 'type']
											]
										],
										[
											[6],
											[
												[7],
												[3, 'item']
											],
											[3, 'disabled']
										]
									],
									[
										[7],
										[3, 'titleActiveColor']
									]
								],
								[
									[7],
									[3, 'titleInactiveColor']
								]
							],
							[
								[7],
								[3, 'swipeThreshold']
							]
						],
						[
							[7],
							[3, 'scrollable']
						]
					]
				])
				Z([
					[2, '||'],
					[
						[2, '!=='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'info']
						],
						[1, null]
					],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'dot']
					]
				])
				Z([3, 'van-tab__title__info'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'dot']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'info']
				])
				Z([3, 'nav-right'])
				Z([3, 'onTouchEnd'])
				Z(z[21])
				Z([3, 'onTouchMove'])
				Z([3, 'onTouchStart'])
				Z([3, 'van-tabs__content'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_25);
			return __WXML_GLOBAL__.ops_cached.$gwx_25
		}

		function gz$gwx_26() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_26) return __WXML_GLOBAL__.ops_cached.$gwx_26
			__WXML_GLOBAL__.ops_cached.$gwx_26 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([a, [3, 'custom-class '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'bem']
						],
						[
							[5],
							[
								[5],
								[1, 'tag']
							],
							[
								[4],
								[
									[5],
									[
										[5],
										[
											[5],
											[
												[7],
												[3, 'type']
											]
										],
										[
											[7],
											[3, 'size']
										]
									],
									[
										[9],
										[
											[9],
											[
												[8], 'mark', [
													[7],
													[3, 'mark']
												]
											],
											[
												[8], 'plain', [
													[7],
													[3, 'plain']
												]
											]
										],
										[
											[8], 'round', [
												[7],
												[3, 'round']
											]
										]
									]
								]
							]
						]
					],
					[3, ' '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'plain']
						],
						[1, 'van-hairline--surround'],
						[1, '']
					]
				])
				Z([a, [
						[2, '?:'],
						[
							[2, '&&'],
							[
								[7],
								[3, 'color']
							],
							[
								[2, '!'],
								[
									[7],
									[3, 'plain']
								]
							]
						],
						[
							[2, '+'],
							[
								[2, '+'],
								[1, 'background-color: '],
								[
									[7],
									[3, 'color']
								]
							],
							[1, ';']
						],
						[1, '']
					],
					[
						[2, '?:'],
						[
							[2, '||'],
							[
								[7],
								[3, 'textColor']
							],
							[
								[2, '&&'],
								[
									[7],
									[3, 'color']
								],
								[
									[7],
									[3, 'plain']
								]
							]
						],
						[
							[2, '+'],
							[1, 'color: '],
							[
								[2, '||'],
								[
									[7],
									[3, 'textColor']
								],
								[
									[7],
									[3, 'color']
								]
							]
						],
						[1, '']
					]
				])
				Z([
					[7],
					[3, 'closeable']
				])
				Z([3, 'onClose'])
				Z([3, 'van-tag__close'])
				Z([3, 'cross'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_26);
			return __WXML_GLOBAL__.ops_cached.$gwx_26
		}

		function gz$gwx_27() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_27) return __WXML_GLOBAL__.ops_cached.$gwx_27
			__WXML_GLOBAL__.ops_cached.$gwx_27 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'inited']
				])
				Z([3, 'onTransitionEnd'])
				Z([a, [3, 'van-transition custom-class '],
					[
						[7],
						[3, 'classes']
					]
				])
				Z([a, [3, '-webkit-transition-duration:'],
					[
						[7],
						[3, 'currentDuration']
					],
					[3, 'ms; transition-duration:'],
					[
						[7],
						[3, 'currentDuration']
					],
					[3, 'ms; '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'display']
						],
						[1, ''],
						[1, 'display: none;']
					],
					[3, ' '],
					[
						[7],
						[3, 'customStyle']
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_27);
			return __WXML_GLOBAL__.ops_cached.$gwx_27
		}

		function gz$gwx_28() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_28) return __WXML_GLOBAL__.ops_cached.$gwx_28
			__WXML_GLOBAL__.ops_cached.$gwx_28 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'van-uploader__wrapper'])
				Z([
					[7],
					[3, 'lists']
				])
				Z([3, 'index'])
				Z([
					[7],
					[3, 'previewImage']
				])
				Z([3, 'van-uploader__preview'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'isImage']
				])
				Z([3, ''])
				Z([3, 'van-uploader__file-icon'])
				Z([3, 'description'])
				Z([
					[7],
					[3, 'deletable']
				])
				Z([3, 'deleteItem'])
				Z([3, 'van-uploader__preview-delete'])
				Z([
					[7],
					[3, 'index']
				])
				Z([3, 'clear'])
				Z([
					[7],
					[3, 'isInCount']
				])
				Z([3, 'startUpload'])
				Z([3, 'van-uploader__slot'])
				Z(z[15])
				Z([3, 'van-uploader__upload'])
				Z([a, [3, 'width: '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'addUnit']
						],
						[
							[5],
							[
								[7],
								[3, 'previewSize']
							]
						]
					],
					[3, '; height: '],
					[
						[12],
						[
							[6],
							[
								[7],
								[3, 'utils']
							],
							[3, 'addUnit']
						],
						[
							[5],
							[
								[7],
								[3, 'previewSize']
							]
						]
					],
					[3, ';']
				])
				Z([3, 'van-uploader__upload-icon'])
				Z([3, 'plus'])
				Z([
					[7],
					[3, 'uploadText']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_28);
			return __WXML_GLOBAL__.ops_cached.$gwx_28
		}

		function gz$gwx_29() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_29) return __WXML_GLOBAL__.ops_cached.$gwx_29
			__WXML_GLOBAL__.ops_cached.$gwx_29 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([a, [3, '_root '],
					[
						[2, '?:'],
						[
							[7],
							[3, 'selectable']
						],
						[1, '_select'],
						[1, '']
					]
				])
				Z([
					[7],
					[3, 'containerStyle']
				])
				Z([
					[2, '!'],
					[
						[6],
						[
							[7],
							[3, 'nodes']
						],
						[1, 0]
					]
				])
				Z([3, '_add'])
				Z([
					[7],
					[3, 'nodes']
				])
				Z([3, '_root'])
				Z([
					[4],
					[
						[5],
						[
							[5],
							[
								[5],
								[
									[5],
									[
										[7],
										[3, 'lazyLoad']
									]
								],
								[
									[7],
									[3, 'loadingImg']
								]
							],
							[
								[7],
								[3, 'errorImg']
							]
						],
						[
							[7],
							[3, 'showImgMenu']
						]
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_29);
			return __WXML_GLOBAL__.ops_cached.$gwx_29
		}

		function gz$gwx_30() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_30) return __WXML_GLOBAL__.ops_cached.$gwx_30
			__WXML_GLOBAL__.ops_cached.$gwx_30 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'el'])
				Z([
					[2, '=='],
					[
						[6],
						[
							[7],
							[3, 'n']
						],
						[3, 'name']
					],
					[1, 'img']
				])
				Z([
					[2, '||'],
					[
						[2, '&&'],
						[
							[6],
							[
								[7],
								[3, 'opts']
							],
							[1, 1]
						],
						[
							[2, '!'],
							[
								[6],
								[
									[7],
									[3, 'ctrl']
								],
								[
									[7],
									[3, 'i']
								]
							]
						]
					],
					[
						[2, '<'],
						[
							[6],
							[
								[7],
								[3, 'ctrl']
							],
							[
								[7],
								[3, 'i']
							]
						],
						[1, 0]
					]
				])
				Z([
					[6],
					[
						[7],
						[3, 'n']
					],
					[3, 'text']
				])
				Z([
					[2, '=='],
					[
						[6],
						[
							[7],
							[3, 'n']
						],
						[3, 'name']
					],
					[1, 'br']
				])
				Z([
					[2, '=='],
					[
						[6],
						[
							[7],
							[3, 'n']
						],
						[3, 'name']
					],
					[1, 'a']
				])
				Z([3, 'linkTap'])
				Z([a, [
						[2, '?:'],
						[
							[6],
							[
								[6],
								[
									[7],
									[3, 'n']
								],
								[3, 'attrs']
							],
							[3, 'href']
						],
						[1, '_a '],
						[1, '']
					],
					[
						[6],
						[
							[6],
							[
								[7],
								[3, 'n']
							],
							[3, 'attrs']
						],
						[3, 'class']
					]
				])
				Z([
					[7],
					[3, 'i']
				])
				Z([3, '_hover'])
				Z([
					[6],
					[
						[6],
						[
							[7],
							[3, 'n']
						],
						[3, 'attrs']
					],
					[3, 'id']
				])
				Z([a, [3, 'display:inline;'],
					[
						[6],
						[
							[6],
							[
								[7],
								[3, 'n']
							],
							[3, 'attrs']
						],
						[3, 'style']
					]
				])
				Z([
					[6],
					[
						[7],
						[3, 'n']
					],
					[3, 'children']
				])
				Z([
					[7],
					[3, 'opts']
				])
				Z([3, 'display:inherit'])
				Z([
					[2, '=='],
					[
						[6],
						[
							[7],
							[3, 'n']
						],
						[3, 'name']
					],
					[1, 'video']
				])
				Z([
					[2, '=='],
					[
						[6],
						[
							[7],
							[3, 'n']
						],
						[3, 'name']
					],
					[1, 'audio']
				])
				Z([3, 'i1'])
				Z([3, 'n1'])
				Z([
					[7],
					[3, 'childs']
				])
				Z(z[17])
				Z([
					[12],
					[
						[7],
						[3, 'use']
					],
					[
						[5],
						[
							[7],
							[3, 'n1']
						]
					]
				])
				Z([
					[9],
					[
						[9],
						[
							[9],
							[
								[8], 'n', [
									[7],
									[3, 'n1']
								]
							],
							[
								[8], 'i', [
									[2, '+'],
									[1, ''],
									[
										[7],
										[3, 'i1']
									]
								]
							]
						],
						[
							[8], 'opts', [
								[7],
								[3, 'opts']
							]
						]
					],
					[
						[8], 'ctrl', [
							[7],
							[3, 'ctrl']
						]
					]
				])
				Z(z[0])
				Z([3, 'i2'])
				Z([3, 'n2'])
				Z([
					[6],
					[
						[7],
						[3, 'n1']
					],
					[3, 'children']
				])
				Z(z[24])
				Z([
					[12],
					[
						[7],
						[3, 'use']
					],
					[
						[5],
						[
							[7],
							[3, 'n2']
						]
					]
				])
				Z([
					[9],
					[
						[9],
						[
							[9],
							[
								[8], 'n', [
									[7],
									[3, 'n2']
								]
							],
							[
								[8], 'i', [
									[2, '+'],
									[
										[2, '+'],
										[
											[7],
											[3, 'i1']
										],
										[1, '_']
									],
									[
										[7],
										[3, 'i2']
									]
								]
							]
						],
						[
							[8], 'opts', [
								[7],
								[3, 'opts']
							]
						]
					],
					[
						[8], 'ctrl', [
							[7],
							[3, 'ctrl']
						]
					]
				])
				Z(z[0])
				Z([3, 'i3'])
				Z([3, 'n3'])
				Z([
					[6],
					[
						[7],
						[3, 'n2']
					],
					[3, 'children']
				])
				Z(z[31])
				Z([
					[12],
					[
						[7],
						[3, 'use']
					],
					[
						[5],
						[
							[7],
							[3, 'n3']
						]
					]
				])
				Z([
					[9],
					[
						[9],
						[
							[9],
							[
								[8], 'n', [
									[7],
									[3, 'n3']
								]
							],
							[
								[8], 'i', [
									[2, '+'],
									[
										[2, '+'],
										[
											[2, '+'],
											[
												[2, '+'],
												[
													[7],
													[3, 'i1']
												],
												[1, '_']
											],
											[
												[7],
												[3, 'i2']
											]
										],
										[1, '_']
									],
									[
										[7],
										[3, 'i3']
									]
								]
							]
						],
						[
							[8], 'opts', [
								[7],
								[3, 'opts']
							]
						]
					],
					[
						[8], 'ctrl', [
							[7],
							[3, 'ctrl']
						]
					]
				])
				Z(z[0])
				Z([3, 'i4'])
				Z([3, 'n4'])
				Z([
					[6],
					[
						[7],
						[3, 'n3']
					],
					[3, 'children']
				])
				Z(z[38])
				Z([
					[12],
					[
						[7],
						[3, 'use']
					],
					[
						[5],
						[
							[7],
							[3, 'n4']
						]
					]
				])
				Z([
					[9],
					[
						[9],
						[
							[9],
							[
								[8], 'n', [
									[7],
									[3, 'n4']
								]
							],
							[
								[8], 'i', [
									[2, '+'],
									[
										[2, '+'],
										[
											[2, '+'],
											[
												[2, '+'],
												[
													[2, '+'],
													[
														[2, '+'],
														[
															[7],
															[3, 'i1']
														],
														[1, '_']
													],
													[
														[7],
														[3, 'i2']
													]
												],
												[1, '_']
											],
											[
												[7],
												[3, 'i3']
											]
										],
										[1, '_']
									],
									[
										[7],
										[3, 'i4']
									]
								]
							]
						],
						[
							[8], 'opts', [
								[7],
								[3, 'opts']
							]
						]
					],
					[
						[8], 'ctrl', [
							[7],
							[3, 'ctrl']
						]
					]
				])
				Z(z[0])
				Z([3, 'i5'])
				Z([3, 'n5'])
				Z([
					[6],
					[
						[7],
						[3, 'n4']
					],
					[3, 'children']
				])
				Z(z[45])
				Z([
					[12],
					[
						[7],
						[3, 'use']
					],
					[
						[5],
						[
							[7],
							[3, 'n5']
						]
					]
				])
				Z([
					[9],
					[
						[9],
						[
							[9],
							[
								[8], 'n', [
									[7],
									[3, 'n5']
								]
							],
							[
								[8], 'i', [
									[2, '+'],
									[
										[2, '+'],
										[
											[2, '+'],
											[
												[2, '+'],
												[
													[2, '+'],
													[
														[2, '+'],
														[
															[2, '+'],
															[
																[2, '+'],
																[
																	[7],
																	[3, 'i1']
																],
																[1, '_']
															],
															[
																[7],
																[3, 'i2']
															]
														],
														[1, '_']
													],
													[
														[7],
														[3, 'i3']
													]
												],
												[1, '_']
											],
											[
												[7],
												[3, 'i4']
											]
										],
										[1, '_']
									],
									[
										[7],
										[3, 'i5']
									]
								]
							]
						],
						[
							[8], 'opts', [
								[7],
								[3, 'opts']
							]
						]
					],
					[
						[8], 'ctrl', [
							[7],
							[3, 'ctrl']
						]
					]
				])
				Z(z[0])
				Z([
					[6],
					[
						[7],
						[3, 'n5']
					],
					[3, 'children']
				])
				Z([a, [3, '_'],
					[
						[6],
						[
							[7],
							[3, 'n5']
						],
						[3, 'name']
					],
					[3, ' '],
					[
						[6],
						[
							[6],
							[
								[7],
								[3, 'n5']
							],
							[3, 'attrs']
						],
						[3, 'class']
					]
				])
				Z([
					[6],
					[
						[6],
						[
							[7],
							[3, 'n5']
						],
						[3, 'attrs']
					],
					[3, 'id']
				])
				Z(z[13])
				Z([
					[6],
					[
						[6],
						[
							[7],
							[3, 'n5']
						],
						[3, 'attrs']
					],
					[3, 'style']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_30);
			return __WXML_GLOBAL__.ops_cached.$gwx_30
		}

		function gz$gwx_31() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_31) return __WXML_GLOBAL__.ops_cached.$gwx_31
			__WXML_GLOBAL__.ops_cached.$gwx_31 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([1, false])
				Z([3, '我的'])
				Z([3, 'transparent'])
				Z([3, 'page-account'])
				Z([3, '_proxy'])
				Z([3, 'v-account-name'])
				Z([3, '23-0'])
				Z(z[1])
				Z([3, '../../../../images/refresh.svg'])
				Z(z[1])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'language']
					],
					[1, 'zh']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '23-2'])
				Z([3, '学校通知'])
				Z(z[1])
				Z(z[6])
				Z([3, '23-3'])
				Z([3, 'Notice'])
				Z(z[12])
				Z(z[1])
				Z(z[6])
				Z([3, '23-4'])
				Z([3, '风险核销'])
				Z(z[1])
				Z(z[6])
				Z([3, '23-5'])
				Z([3, 'Risk appeal'])
				Z(z[12])
				Z(z[1])
				Z(z[6])
				Z([3, '23-6'])
				Z([3, '清除缓存'])
				Z(z[1])
				Z(z[6])
				Z([3, '23-7'])
				Z([3, 'Clear Storage'])
				Z(z[1])
				Z([3, 'height: 70vh;width: 100vw;margin-top:5vh'])
				Z([3, 'center'])
				Z([
					[7],
					[3, 'noticeShow']
				])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'title']
				])
				Z([3, 'padding: 5px 10px;background-color: white;position: relative;'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'richText']
				])
				Z([3, 'background-color:white;display: flex;flex-direction: row;justify-content: space-between;position: fixed;left: 0;right: 0;bottom: 0;'])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'showCancel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'showConfirm']
				])
				Z(z[1])
				Z(z[6])
				Z(z[6])
				Z([3, '23-10'])
				Z([
					[7],
					[3, 'isShowAuth']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_31);
			return __WXML_GLOBAL__.ops_cached.$gwx_31
		}

		function gz$gwx_32() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_32) return __WXML_GLOBAL__.ops_cached.$gwx_32
			__WXML_GLOBAL__.ops_cached.$gwx_32 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '健康上报'])
				Z([
					[7],
					[3, 'isSuccess']
				])
				Z(z[1])
				Z([3, '#1aad19'])
				Z([3, 'checked'])
				Z([3, '100px'])
				Z(z[1])
				Z([3, '#FBD924'])
				Z([3, 'clock'])
				Z(z[7])
			})(__WXML_GLOBAL__.ops_cached.$gwx_32);
			return __WXML_GLOBAL__.ops_cached.$gwx_32
		}

		function gz$gwx_33() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_33) return __WXML_GLOBAL__.ops_cached.$gwx_33
			__WXML_GLOBAL__.ops_cached.$gwx_33 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'navTitle']
				])
				Z(z[1])
				Z(z[1])
				Z([3, 'center'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNoText']
				])
				Z([1, true])
				Z([3, '80px'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z(z[5])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'nameText']
				])
				Z(z[7])
				Z(z[8])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z([3, 'reserve-time-item'])
				Z([3, '_proxy'])
				Z([3, '26-0'])
				Z([3, 'multiSelector'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'riskArray']
				])
				Z([
					[7],
					[3, 'selectRiskIndex']
				])
				Z(z[1])
				Z(z[17])
				Z([3, '26-1'])
				Z(z[5])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vanFieldHealthLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'placeholderHealthLabel']
				])
				Z(z[7])
				Z(z[7])
				Z(z[8])
				Z([
					[7],
					[3, 'healthDescription']
				])
				Z(z[17])
				Z([3, '26-2'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'quarantineArray']
				])
				Z([3, '0'])
				Z(z[1])
				Z(z[5])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'quarantineLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'quarantinePlaceholder']
				])
				Z(z[7])
				Z(z[7])
				Z(z[8])
				Z([
					[7],
					[3, 'quarantineField']
				])
				Z([
					[7],
					[3, 'riskAddressShow']
				])
				Z(z[17])
				Z([3, '26-3'])
				Z([
					[7],
					[3, 'riskAddressArray']
				])
				Z(z[35])
				Z(z[1])
				Z(z[5])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'riskAddressLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'riskAddressPlaceholder']
				])
				Z(z[7])
				Z(z[7])
				Z(z[8])
				Z([
					[7],
					[3, 'riskAddressField']
				])
				Z(z[1])
				Z(z[17])
				Z([3, '26-4'])
				Z(z[5])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vanFieldPositionLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'placeholderPositionLabel']
				])
				Z(z[7])
				Z(z[8])
				Z([
					[7],
					[3, 'position']
				])
				Z(z[1])
				Z([3, 'height: 40%;'])
				Z([3, 'bottom'])
				Z([
					[7],
					[3, 'show']
				])
				Z([
					[7],
					[3, 'areaList']
				])
				Z(z[1])
				Z(z[17])
				Z(z[17])
				Z([3, 'Reset'])
				Z([3, '2'])
				Z([3, 'OK'])
				Z([3, '26-5'])
				Z([1, 110100])
				Z(z[1])
				Z(z[1])
				Z(z[17])
				Z([3, '26-7'])
				Z([3, 'multiRow'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'leaveReasonLabel']
				])
				Z([3, '120'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'leaveReasonPlaceholder']
				])
				Z(z[7])
				Z(z[8])
				Z([3, 'textarea'])
				Z([
					[7],
					[3, 'leaveReason']
				])
				Z(z[1])
				Z(z[1])
				Z(z[17])
				Z(z[17])
				Z([3, '26-9'])
				Z([
					[7],
					[3, 'isShowLocationAuth']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_33);
			return __WXML_GLOBAL__.ops_cached.$gwx_33
		}

		function gz$gwx_34() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_34) return __WXML_GLOBAL__.ops_cached.$gwx_34
			__WXML_GLOBAL__.ops_cached.$gwx_34 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([1, false])
				Z([3, '同济大学学生服务站'])
				Z(z[1])
				Z([3, 'height: 70vh;width: 100vw;margin-top:5vh'])
				Z([3, 'center'])
				Z([
					[7],
					[3, 'noticeShow']
				])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'title']
				])
				Z([3, 'padding: 5px 10px;background-color: white;position: relative;'])
				Z([3, '_proxy'])
				Z([3, '22-2'])
				Z([3, 'true'])
				Z([3, 'height:60vh;'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'richText']
				])
				Z([3, 'background-color:white;display: flex;flex-direction: row;justify-content: space-between;position: fixed;left: 0;right: 0;bottom: 0;'])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'showCancel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'notice']
					],
					[3, 'showConfirm']
				])
				Z(z[1])
				Z(z[10])
				Z(z[10])
				Z([3, '22-5'])
				Z([
					[7],
					[3, 'isShowAuth']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_34);
			return __WXML_GLOBAL__.ops_cached.$gwx_34
		}

		function gz$gwx_35() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_35) return __WXML_GLOBAL__.ops_cached.$gwx_35
			__WXML_GLOBAL__.ops_cached.$gwx_35 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '离校备案详情'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNoLabel']
				])
				Z([1, true])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNameLabel']
				])
				Z(z[5])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willStayLabel']
				])
				Z(z[5])
				Z([
					[7],
					[3, 'willStay']
				])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'leaveInfo']
						],
						[3, 'willStay']
					],
					[1, false]
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'lxDatetimePlanLabel']
				])
				Z(z[5])
				Z([
					[7],
					[3, 'lxDatetimePlan']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'leavePosiLabel']
				])
				Z(z[5])
				Z([
					[7],
					[3, 'leavePosi']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'transportationLabel']
				])
				Z(z[5])
				Z([
					[7],
					[3, 'transportation']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'fxDatetimePlanLabel']
				])
				Z(z[5])
				Z([
					[7],
					[3, 'fxDatetimePlan']
				])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'leaveInfo']
						],
						[3, 'willStay']
					],
					[1, true]
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'stayReasonLabel']
				])
				Z(z[5])
				Z([
					[7],
					[3, 'stayReason']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_35);
			return __WXML_GLOBAL__.ops_cached.$gwx_35
		}

		function gz$gwx_36() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_36) return __WXML_GLOBAL__.ops_cached.$gwx_36
			__WXML_GLOBAL__.ops_cached.$gwx_36 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '离校备案'])
				Z(z[1])
				Z([
					[7],
					[3, 'radio1']
				])
				Z(z[1])
				Z([3, '_proxy'])
				Z([3, '42-0'])
				Z([3, '1'])
				Z([3, 'font-weight: bold;'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNoLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNameLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-1'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'phoneLabel']
				])
				Z([3, '11'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'placeholderFill']
				])
				Z([1, true])
				Z([3, 'digit'])
				Z([
					[7],
					[3, 'q1_phone']
				])
				Z(z[6])
				Z([3, '42-2'])
				Z([3, 'region'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'outCampusAddressLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'placeholderSelect']
				])
				Z(z[22])
				Z(z[22])
				Z([3, 'text'])
				Z([
					[7],
					[3, 'q2_outCampusAddress']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-3'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q2_4_streetLabel']
				])
				Z([3, '25'])
				Z(z[21])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q2_4_street']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-4'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q2_5_streetDetailLabel']
				])
				Z(z[39])
				Z(z[21])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q2_5_streetDetail']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-5'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q3_1_name_emergency_contactLabel']
				])
				Z(z[39])
				Z(z[21])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q3_1_name']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-6'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q3_2_phone_emergency_contactLabel']
				])
				Z(z[20])
				Z(z[21])
				Z(z[22])
				Z(z[23])
				Z([
					[7],
					[3, 'q3_2_phone']
				])
				Z(z[6])
				Z([3, '42-7'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'relationArray']
				])
				Z([3, '0'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q3_3_relation_emergency_contactLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q3_3_relationShow']
				])
				Z(z[6])
				Z([3, '42-8'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studyTypeArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studyTypeLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q4_studyTypeShow']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'q4_studyType']
					],
					[1, '非全日制学生']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-9'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q5_1_companyLabel']
				])
				Z(z[39])
				Z(z[21])
				Z(z[33])
				Z([
					[7],
					[3, 'q5_1_company']
				])
				Z(z[6])
				Z([3, '42-10'])
				Z(z[27])
				Z(z[1])
				Z(z[6])
				Z([3, '42-11'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q5_2_companyAddressLabel']
				])
				Z(z[39])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q5_2_companyAddress']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-12'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q5_2_4_streetLabel']
				])
				Z(z[39])
				Z(z[21])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q5_2_4_street']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-13'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q5_2_5_streetDetailLabel']
				])
				Z(z[39])
				Z(z[21])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q5_2_5_streetDetail']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'q4_studyType']
					],
					[1, '交流生']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-14'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q6_originalSchoolLabel']
				])
				Z(z[39])
				Z(z[21])
				Z(z[22])
				Z(z[33])
				Z([
					[7],
					[3, 'q6_originalSchool']
				])
				Z(z[6])
				Z([3, '42-15'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'stayArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willStayLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z([
					[7],
					[3, 'isStayField']
				])
				Z([
					[2, '||'],
					[
						[2, '==='],
						[
							[7],
							[3, 'isStay']
						],
						[1, '0']
					],
					[
						[2, '==='],
						[
							[7],
							[3, 'isStay']
						],
						[1, '1']
					]
				])
				Z(z[6])
				Z([3, '42-16'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'abroadArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'goAbroadLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z([
					[7],
					[3, 'isAbroadField']
				])
				Z([
					[2, '||'],
					[
						[2, '==='],
						[
							[7],
							[3, 'isStay']
						],
						[1, '0']
					],
					[
						[2, '==='],
						[
							[7],
							[3, 'isStay']
						],
						[1, '1']
					]
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'isAbroad']
					],
					[1, '0']
				])
				Z([
					[2, '||'],
					[
						[2, '&&'],
						[
							[2, '==='],
							[
								[7],
								[3, 'isAbroad']
							],
							[1, '1']
						],
						[
							[2, '==='],
							[
								[7],
								[3, 'isStay']
							],
							[1, '0']
						]
					],
					[
						[2, '&&'],
						[
							[2, '==='],
							[
								[7],
								[3, 'isAbroad']
							],
							[1, '1']
						],
						[
							[2, '==='],
							[
								[7],
								[3, 'isStay']
							],
							[1, '1']
						]
					]
				])
				Z(z[1])
				Z([3, 'height: 40%;'])
				Z([3, 'bottom'])
				Z([
					[7],
					[3, 'areaShow']
				])
				Z([
					[7],
					[3, 'areaList']
				])
				Z(z[1])
				Z(z[6])
				Z(z[6])
				Z([3, 'Reset'])
				Z([3, '2'])
				Z([3, 'OK'])
				Z([3, '42-20'])
				Z([1, 110100])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'isStay']
					],
					[1, '0']
				])
				Z([3, 'margin-top: 10px;'])
				Z(z[6])
				Z([3, '42-22'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'transportationArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'transportationLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z([
					[7],
					[3, 'transportationShow']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'transportation']
					],
					[1, '火车']
				])
				Z(z[6])
				Z([3, '42-23'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'trainTypeArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q10_trainTypeLabel']
				])
				Z(z[30])
				Z(z[22])
				Z([
					[7],
					[3, 'q10_trainType']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-24'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q11_trainNumberLabel']
				])
				Z([3, '4'])
				Z(z[21])
				Z(z[23])
				Z([
					[7],
					[3, 'q11_trainNumber']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-25'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q12_1_train_carriageLabel']
				])
				Z(z[176])
				Z(z[21])
				Z(z[23])
				Z([
					[7],
					[3, 'q12_1_train_carriage']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-26'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q12_2_train_seatLabel']
				])
				Z([3, '3'])
				Z(z[21])
				Z([
					[7],
					[3, 'q12_2_train_seat']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'transportation']
					],
					[1, '飞机']
				])
				Z(z[6])
				Z([3, '42-27'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'airlineArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q13_airline_companyLabel']
				])
				Z(z[30])
				Z(z[22])
				Z([
					[7],
					[3, 'q13_airline']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-28'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q14_flight_numberLabel']
				])
				Z(z[206])
				Z(z[21])
				Z(z[23])
				Z([
					[7],
					[3, 'q14_flight_number']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-29'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'q15_flight_seatLabel']
				])
				Z(z[222])
				Z(z[21])
				Z([
					[7],
					[3, 'q15_flight_seat']
				])
				Z(z[6])
				Z([3, '42-30'])
				Z([3, '2021-03-15'])
				Z([3, 'date'])
				Z([3, '2021-02-12'])
				Z([3, '2021-02-18'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'fxDatetimePlanLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z([
					[7],
					[3, 'fxDatetimePlan']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'isStay']
					],
					[1, '1']
				])
				Z(z[181])
				Z(z[6])
				Z([3, '42-31'])
				Z(z[184])
				Z(z[74])
				Z(z[1])
				Z(z[187])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[191])
				Z(z[192])
				Z(z[6])
				Z([3, '42-32'])
				Z(z[195])
				Z(z[74])
				Z(z[1])
				Z(z[198])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[201])
				Z(z[1])
				Z(z[6])
				Z([3, '42-33'])
				Z(z[205])
				Z(z[206])
				Z(z[21])
				Z(z[22])
				Z(z[23])
				Z(z[209])
				Z(z[1])
				Z(z[6])
				Z([3, '42-34'])
				Z(z[213])
				Z(z[176])
				Z(z[21])
				Z(z[22])
				Z(z[23])
				Z(z[217])
				Z(z[1])
				Z(z[6])
				Z([3, '42-35'])
				Z(z[221])
				Z(z[222])
				Z(z[21])
				Z(z[22])
				Z(z[224])
				Z(z[225])
				Z(z[6])
				Z([3, '42-36'])
				Z(z[228])
				Z(z[74])
				Z(z[1])
				Z(z[231])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[234])
				Z(z[1])
				Z(z[6])
				Z([3, '42-37'])
				Z(z[238])
				Z(z[206])
				Z(z[21])
				Z(z[22])
				Z(z[23])
				Z(z[242])
				Z(z[1])
				Z(z[6])
				Z([3, '42-38'])
				Z(z[246])
				Z(z[222])
				Z(z[21])
				Z(z[22])
				Z(z[249])
				Z(z[6])
				Z([3, '42-39'])
				Z(z[252])
				Z(z[253])
				Z(z[254])
				Z(z[255])
				Z(z[1])
				Z(z[257])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z(z[261])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'isStay']
					],
					[1, '2']
				])
				Z(z[1])
				Z([
					[7],
					[3, 'radio2']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-40'])
				Z(z[8])
				Z(z[9])
				Z(z[6])
				Z([3, '42-41'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'stayReasonArray']
				])
				Z(z[74])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'stayReasonLabel']
				])
				Z(z[30])
				Z(z[22])
				Z(z[22])
				Z([
					[7],
					[3, 'stayReasonField']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'stayReasonIndex']
					],
					[
						[7],
						[3, 'stayReasonOtherIndex']
					]
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-42'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'stayReasonOtherLabel']
				])
				Z([3, '50'])
				Z(z[21])
				Z(z[22])
				Z([
					[7],
					[3, 'stayReasonOtherField']
				])
				Z(z[1])
				Z([
					[7],
					[3, 'radio3']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '42-43'])
				Z(z[8])
				Z(z[9])
			})(__WXML_GLOBAL__.ops_cached.$gwx_36);
			return __WXML_GLOBAL__.ops_cached.$gwx_36
		}

		function gz$gwx_37() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_37) return __WXML_GLOBAL__.ops_cached.$gwx_37
			__WXML_GLOBAL__.ops_cached.$gwx_37 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, '_initComponent'])
				Z([3, '同济大学学生服务用户协议'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_37);
			return __WXML_GLOBAL__.ops_cached.$gwx_37
		}

		function gz$gwx_38() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_38) return __WXML_GLOBAL__.ops_cached.$gwx_38
			__WXML_GLOBAL__.ops_cached.$gwx_38 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([1, false])
				Z([3, '通知'])
				Z(z[1])
				Z([3, '_proxy'])
				Z(z[5])
				Z([3, '24-0'])
				Z([3, '暂无通知'])
				Z([
					[7],
					[3, 'isShowMore']
				])
				Z([
					[7],
					[3, 'refresherHeight']
				])
				Z([
					[2, '<'],
					[
						[7],
						[3, 'total']
					],
					[1, 1]
				])
				Z([
					[7],
					[3, 'isRefreshing']
				])
				Z([3, 'index'])
				Z([3, 'item'])
				Z([
					[7],
					[3, 'dataList']
				])
				Z(z[13])
				Z([3, 'noti-item_content'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'title']
				])
				Z([
					[2, '&&'],
					[
						[2, '=='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'messageType']
						],
						[1, 'school_notice']
					],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'sender']
					]
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'replyDescription']
				])
				Z([3, 'noti-item_info'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'isReplyNeeded']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'isCheckNeeded']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_38);
			return __WXML_GLOBAL__.ops_cached.$gwx_38
		}

		function gz$gwx_39() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_39) return __WXML_GLOBAL__.ops_cached.$gwx_39
			__WXML_GLOBAL__.ops_cached.$gwx_39 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '问卷系统'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentID']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentName']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_39);
			return __WXML_GLOBAL__.ops_cached.$gwx_39
		}

		function gz$gwx_40() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_40) return __WXML_GLOBAL__.ops_cached.$gwx_40
			__WXML_GLOBAL__.ops_cached.$gwx_40 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '诚信承诺书'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentID']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentName']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z([
					[7],
					[3, 'content']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_40);
			return __WXML_GLOBAL__.ops_cached.$gwx_40
		}

		function gz$gwx_41() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_41) return __WXML_GLOBAL__.ops_cached.$gwx_41
			__WXML_GLOBAL__.ops_cached.$gwx_41 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '问卷系统'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentID']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentName']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z([3, '#1677b8'])
				Z([3, 'index'])
				Z([3, 'idx'])
				Z([1, 2])
				Z(z[11])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'tabs']
					],
					[
						[7],
						[3, 'idx']
					]
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'idx']
					],
					[1, 0]
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'idx']
					],
					[1, 1]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_41);
			return __WXML_GLOBAL__.ops_cached.$gwx_41
		}

		function gz$gwx_42() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_42) return __WXML_GLOBAL__.ops_cached.$gwx_42
			__WXML_GLOBAL__.ops_cached.$gwx_42 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '返校申请'])
				Z(z[1])
				Z([3, '学号'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([3, '姓名'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z([3, '离校日期'])
				Z([
					[6],
					[
						[7],
						[3, 'riskTotal']
					],
					[3, 'riskDescription']
				])
				Z(z[1])
				Z([3, '目的地'])
				Z([
					[6],
					[
						[7],
						[3, 'riskTotal']
					],
					[3, 'measure']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_42);
			return __WXML_GLOBAL__.ops_cached.$gwx_42
		}

		function gz$gwx_43() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_43) return __WXML_GLOBAL__.ops_cached.$gwx_43
			__WXML_GLOBAL__.ops_cached.$gwx_43 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '风险核销'])
				Z([3, 'margin-top: 20px;'])
				Z(z[1])
				Z([3, 'center'])
				Z([3, '学号'])
				Z([1, true])
				Z([3, '90px'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z(z[5])
				Z([3, '姓名'])
				Z(z[7])
				Z(z[8])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z([3, '_proxy'])
				Z([3, '36-2'])
				Z([
					[7],
					[3, 'hasMedicalTestReportArray']
				])
				Z([3, '0'])
				Z(z[1])
				Z(z[5])
				Z([3, '是否持有七日以内核酸检测报告'])
				Z([3, '请选择'])
				Z(z[7])
				Z([
					[7],
					[3, 'hasMedicalTestReport']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'hasMedicalTestReport']
					],
					[1, '是']
				])
				Z(z[16])
				Z([3, '36-3'])
				Z([
					[7],
					[3, 'hasMedicalTestReportDateArray']
				])
				Z(z[19])
				Z(z[1])
				Z(z[5])
				Z([3, '核酸检测日期'])
				Z(z[23])
				Z(z[7])
				Z(z[7])
				Z([
					[7],
					[3, 'hasMedicalTestReportDate']
				])
				Z(z[16])
				Z([3, '36-4'])
				Z([
					[7],
					[3, 'hasMedicalTestReportResultArray']
				])
				Z(z[19])
				Z(z[1])
				Z(z[5])
				Z([3, '核酸检测结果'])
				Z(z[23])
				Z(z[7])
				Z(z[7])
				Z([
					[7],
					[3, 'hasMedicalTestReportResult']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_43);
			return __WXML_GLOBAL__.ops_cached.$gwx_43
		}

		function gz$gwx_44() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_44) return __WXML_GLOBAL__.ops_cached.$gwx_44
			__WXML_GLOBAL__.ops_cached.$gwx_44 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '风险申诉'])
				Z([
					[7],
					[3, 'isSuccess']
				])
				Z(z[1])
				Z([3, '#1aad19'])
				Z([3, 'checked'])
				Z([3, '100px'])
				Z(z[1])
				Z([3, '#FBD924'])
				Z([3, 'clock'])
				Z(z[7])
			})(__WXML_GLOBAL__.ops_cached.$gwx_44);
			return __WXML_GLOBAL__.ops_cached.$gwx_44
		}

		function gz$gwx_45() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_45) return __WXML_GLOBAL__.ops_cached.$gwx_45
			__WXML_GLOBAL__.ops_cached.$gwx_45 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '==='],
					[
						[7],
						[3, 'language']
					],
					[1, 'zh']
				])
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '我的风险核销申请'])
				Z(z[2])
				Z([3, '学号'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfo']
					],
					[3, 'studentNo']
				])
				Z(z[2])
				Z([3, '姓名'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfo']
					],
					[3, 'name']
				])
				Z(z[2])
				Z([3, '申请时间'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfo']
					],
					[3, 'appealDateTime']
				])
				Z([
					[7],
					[3, 'showMedicalReportCell']
				])
				Z(z[2])
				Z([3, '核酸检测日期'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfoFull']
					],
					[3, 'stateMedicalTestReportDate']
				])
				Z(z[2])
				Z([3, '核酸检测结果'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfoFull']
					],
					[3, 'stateMedicalTestReportResult']
				])
				Z(z[2])
				Z([3, '申请状态'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfo']
					],
					[3, 'appealStatus']
				])
				Z([3, '#1E90FF'])
				Z(z[2])
				Z([3, 'vertical'])
				Z([
					[7],
					[3, 'steps']
				])
				Z(z[2])
				Z([3, '审核回复'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfo']
					],
					[3, 'appealReply']
				])
				Z(z[2])
				Z([3, '审核结果'])
				Z([
					[6],
					[
						[7],
						[3, 'appealInfo']
					],
					[3, 'appealResult']
				])
				Z([
					[7],
					[3, 'showGoAppealMedicalReport']
				])
				Z(z[1])
				Z(z[2])
				Z([3, 'My Application'])
				Z(z[2])
				Z([3, 'Student ID'])
				Z([3, '80px'])
				Z(z[6])
				Z(z[2])
				Z([3, 'Name'])
				Z(z[39])
				Z(z[9])
				Z(z[2])
				Z([3, 'Submit datetime'])
				Z(z[39])
				Z(z[12])
				Z(z[13])
				Z(z[2])
				Z([3, 'Nucleic acid test date'])
				Z(z[16])
				Z(z[2])
				Z([3, 'Nucleic acid test results'])
				Z(z[19])
				Z(z[2])
				Z([3, 'Processing'])
				Z(z[22])
				Z(z[23])
				Z(z[2])
				Z(z[25])
				Z([
					[7],
					[3, 'stepsEN']
				])
				Z(z[2])
				Z([3, 'Review Response'])
				Z(z[39])
				Z(z[29])
				Z(z[2])
				Z([3, 'Review Result'])
				Z(z[39])
				Z(z[32])
				Z(z[33])
			})(__WXML_GLOBAL__.ops_cached.$gwx_45);
			return __WXML_GLOBAL__.ops_cached.$gwx_45
		}

		function gz$gwx_46() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_46) return __WXML_GLOBAL__.ops_cached.$gwx_46
			__WXML_GLOBAL__.ops_cached.$gwx_46 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '风险核销记录'])
				Z(z[1])
				Z([3, 'info-o'])
				Z([3, 'index'])
				Z([3, 'item'])
				Z([
					[7],
					[3, 'riskList']
				])
				Z(z[5])
				Z([3, 'margin-bottom: 10rpx;'])
				Z(z[1])
				Z([3, 'width: 100%;'])
				Z([3, 'title'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 1]
				])
				Z(z[1])
				Z([3, '#FFA500'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 2]
				])
				Z(z[1])
				Z([3, '#CD7F32'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 3]
				])
				Z(z[1])
				Z([3, '#FF0000'])
				Z(z[12])
				Z(z[13])
				Z(z[1])
				Z([1, true])
				Z([
					[7],
					[3, 'index']
				])
				Z([3, '150'])
				Z([3, '0px'])
				Z([3, 'textarea'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'stateText']
				])
				Z(z[16])
				Z(z[1])
				Z(z[25])
				Z(z[26])
				Z(z[27])
				Z(z[28])
				Z(z[29])
				Z(z[30])
				Z(z[19])
				Z(z[1])
				Z(z[25])
				Z(z[26])
				Z(z[27])
				Z(z[28])
				Z(z[29])
				Z(z[30])
			})(__WXML_GLOBAL__.ops_cached.$gwx_46);
			return __WXML_GLOBAL__.ops_cached.$gwx_46
		}

		function gz$gwx_47() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_47) return __WXML_GLOBAL__.ops_cached.$gwx_47
			__WXML_GLOBAL__.ops_cached.$gwx_47 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '风险核销'])
				Z([3, '_proxy'])
				Z([3, '40-0'])
				Z([
					[7],
					[3, 'hasMedicalTestReportDateArray']
				])
				Z([3, '0'])
				Z(z[1])
				Z([3, 'center'])
				Z([3, '核酸检测日期'])
				Z([3, '请选择'])
				Z([1, true])
				Z(z[11])
				Z([
					[7],
					[3, 'hasMedicalTestReportDate']
				])
				Z(z[3])
				Z([3, '40-1'])
				Z([
					[7],
					[3, 'hasMedicalTestReportResultArray']
				])
				Z(z[6])
				Z(z[1])
				Z(z[8])
				Z([3, '核酸检测结果'])
				Z(z[10])
				Z(z[11])
				Z(z[11])
				Z([
					[7],
					[3, 'hasMedicalTestReportResult']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_47);
			return __WXML_GLOBAL__.ops_cached.$gwx_47
		}

		function gz$gwx_48() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_48) return __WXML_GLOBAL__.ops_cached.$gwx_48
			__WXML_GLOBAL__.ops_cached.$gwx_48 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '风险核销'])
				Z(z[1])
				Z([3, 'info-o'])
				Z([3, 'index'])
				Z([3, 'item'])
				Z([
					[7],
					[3, 'riskList']
				])
				Z(z[5])
				Z(z[1])
				Z([3, 'width: 100%;'])
				Z([3, 'title'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 1]
				])
				Z(z[1])
				Z([3, '#FFA500'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 2]
				])
				Z(z[1])
				Z([3, '#CD7F32'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 3]
				])
				Z(z[1])
				Z([3, '#FF0000'])
				Z(z[11])
				Z(z[12])
				Z(z[1])
				Z([3, '_proxy'])
				Z([3, '37-0'])
				Z([
					[7],
					[3, 'index']
				])
				Z(z[26])
				Z([3, '当日所在地'])
				Z([3, '请选择当日所在地'])
				Z([1, true])
				Z(z[30])
				Z([3, '80px'])
				Z([
					[6],
					[
						[7],
						[3, 'location']
					],
					[
						[7],
						[3, 'index']
					]
				])
				Z(z[1])
				Z(z[24])
				Z([3, '37-1'])
				Z(z[26])
				Z(z[26])
				Z([3, 'multiRow'])
				Z([3, '150'])
				Z([3, '必填项，请自述30日内是否有风险地区旅居史，是否与风险地区往来人员有密切接触史'])
				Z(z[30])
				Z([3, '0px'])
				Z([3, 'textarea'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'stateText']
				])
				Z(z[15])
				Z(z[1])
				Z(z[24])
				Z([3, '37-2'])
				Z(z[26])
				Z(z[26])
				Z(z[28])
				Z(z[29])
				Z(z[30])
				Z(z[30])
				Z(z[32])
				Z(z[33])
				Z(z[1])
				Z(z[24])
				Z([3, '37-3'])
				Z(z[26])
				Z(z[26])
				Z(z[39])
				Z(z[40])
				Z(z[41])
				Z(z[30])
				Z(z[43])
				Z(z[44])
				Z(z[45])
				Z(z[18])
				Z(z[1])
				Z(z[24])
				Z([3, '37-4'])
				Z(z[26])
				Z(z[26])
				Z(z[28])
				Z(z[29])
				Z(z[30])
				Z(z[30])
				Z(z[32])
				Z(z[33])
				Z(z[1])
				Z(z[24])
				Z([3, '37-5'])
				Z(z[26])
				Z(z[26])
				Z(z[39])
				Z(z[40])
				Z(z[41])
				Z(z[30])
				Z(z[43])
				Z(z[44])
				Z(z[45])
				Z(z[1])
				Z([3, 'height: 40%;'])
				Z([3, 'bottom'])
				Z([
					[7],
					[3, 'showVantArea']
				])
				Z([
					[7],
					[3, 'areaList']
				])
				Z(z[1])
				Z(z[24])
				Z(z[24])
				Z([3, 'Reset'])
				Z([3, '3'])
				Z([3, 'OK'])
				Z([3, '37-6'])
				Z([1, 110100])
			})(__WXML_GLOBAL__.ops_cached.$gwx_48);
			return __WXML_GLOBAL__.ops_cached.$gwx_48
		}

		function gz$gwx_49() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_49) return __WXML_GLOBAL__.ops_cached.$gwx_49
			__WXML_GLOBAL__.ops_cached.$gwx_49 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '返校申请'])
				Z(z[1])
				Z([3, '学号'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([3, '姓名'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z([3, '风险类型'])
				Z([
					[6],
					[
						[7],
						[3, 'riskTotal']
					],
					[3, 'riskDescription']
				])
				Z(z[1])
				Z([3, '防控措施'])
				Z([
					[6],
					[
						[7],
						[3, 'riskTotal']
					],
					[3, 'measure']
				])
				Z(z[1])
				Z([3, '_proxy'])
				Z([3, '32-3'])
				Z([3, 'multiRow'])
				Z([3, '进校事由'])
				Z([3, '150'])
				Z([3, '请填写进校原因，非必填项'])
				Z([3, '80px'])
				Z([3, 'textarea'])
				Z([
					[7],
					[3, 'returnReason']
				])
				Z(z[1])
			})(__WXML_GLOBAL__.ops_cached.$gwx_49);
			return __WXML_GLOBAL__.ops_cached.$gwx_49
		}

		function gz$gwx_50() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_50) return __WXML_GLOBAL__.ops_cached.$gwx_50
			__WXML_GLOBAL__.ops_cached.$gwx_50 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'navTitle']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNoText']
				])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'studentStudentno']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'nameText']
				])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'studentName']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'planJxCampusTimeText']
				])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'planJxDatetime']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'planJxCampusText']
				])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'planJxCampus']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'applyStatusText']
				])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'applyStatus']
				])
				Z([3, '#1E90FF'])
				Z(z[1])
				Z([3, 'vertical'])
				Z([
					[7],
					[3, 'steps']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'applyResultText']
				])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'applyReply']
				])
				Z([
					[7],
					[3, 'isHasExpireDatetime']
				])
				Z(z[1])
			})(__WXML_GLOBAL__.ops_cached.$gwx_50);
			return __WXML_GLOBAL__.ops_cached.$gwx_50
		}

		function gz$gwx_51() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_51) return __WXML_GLOBAL__.ops_cached.$gwx_51
			__WXML_GLOBAL__.ops_cached.$gwx_51 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, '_initComponent'])
				Z([3, '同济进校码'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_51);
			return __WXML_GLOBAL__.ops_cached.$gwx_51
		}

		function gz$gwx_52() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_52) return __WXML_GLOBAL__.ops_cached.$gwx_52
			__WXML_GLOBAL__.ops_cached.$gwx_52 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '进校点变更'])
				Z([3, 'margin-top: 10px;'])
				Z(z[1])
				Z(z[1])
				Z([3, 'center'])
				Z([3, '学号'])
				Z([1, true])
				Z([3, '90px'])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '姓名'])
				Z(z[8])
				Z(z[9])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '原申请进校点'])
				Z(z[8])
				Z(z[9])
				Z([
					[6],
					[
						[7],
						[3, 'applyInfo']
					],
					[3, 'planJxCampus']
				])
				Z(z[1])
				Z(z[6])
				Z([3, '变更原因'])
				Z(z[8])
				Z(z[9])
				Z([
					[7],
					[3, 'changeReason']
				])
				Z(z[1])
				Z([
					[2, '!=='],
					[
						[6],
						[
							[7],
							[3, 'riskList']
						],
						[3, 'length']
					],
					[1, 0]
				])
				Z(z[1])
				Z([3, 'info-o'])
				Z([3, 'index'])
				Z([3, 'item'])
				Z([
					[7],
					[3, 'riskList']
				])
				Z(z[33])
				Z(z[1])
				Z([3, 'width: 100%;'])
				Z([3, 'title'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 1]
				])
				Z(z[1])
				Z([3, '#FFA500'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 2]
				])
				Z(z[1])
				Z([3, '#CD7F32'])
				Z([
					[2, '==='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'riskType']
					],
					[1, 3]
				])
				Z(z[1])
				Z([3, '#FF0000'])
				Z(z[1])
				Z([3, '_proxy'])
				Z([
					[7],
					[3, 'oneButton']
				])
				Z([3, '35-2'])
				Z([
					[7],
					[3, 'msg']
				])
				Z([
					[7],
					[3, 'dialogShow']
				])
				Z([3, '错误'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_52);
			return __WXML_GLOBAL__.ops_cached.$gwx_52
		}

		function gz$gwx_53() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_53) return __WXML_GLOBAL__.ops_cached.$gwx_53
			__WXML_GLOBAL__.ops_cached.$gwx_53 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'bar']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'language']
					],
					[1, 'zh']
				])
				Z(z[1])
				Z([3, '_proxy'])
				Z([3, '28-0'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNoText']
				])
				Z([3, '20'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentNoHolderText']
				])
				Z([1, true])
				Z([3, '120rpx'])
				Z([3, 'number'])
				Z([
					[7],
					[3, 'studentNo']
				])
				Z(z[1])
				Z(z[5])
				Z([3, '28-1'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'passwordText']
				])
				Z(z[8])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'passwordHolderText']
				])
				Z(z[10])
				Z(z[11])
				Z([3, 'password'])
				Z([
					[7],
					[3, 'password']
				])
				Z(z[1])
				Z(z[5])
				Z([3, '28-2'])
				Z(z[7])
				Z(z[8])
				Z(z[9])
				Z(z[10])
				Z([3, '150rpx'])
				Z(z[12])
				Z(z[13])
				Z(z[1])
				Z(z[5])
				Z([3, '28-3'])
				Z(z[17])
				Z(z[8])
				Z(z[19])
				Z(z[10])
				Z(z[31])
				Z(z[22])
				Z(z[23])
				Z(z[1])
				Z(z[1])
				Z(z[5])
				Z([
					[7],
					[3, 'oneButton']
				])
				Z([3, '28-5'])
				Z([
					[7],
					[3, 'msg']
				])
				Z([
					[7],
					[3, 'dialogShow']
				])
				Z([3, '错误'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_53);
			return __WXML_GLOBAL__.ops_cached.$gwx_53
		}

		function gz$gwx_54() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_54) return __WXML_GLOBAL__.ops_cached.$gwx_54
			__WXML_GLOBAL__.ops_cached.$gwx_54 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '学籍认证'])
				Z([
					[7],
					[3, 'isSuccess']
				])
				Z(z[1])
				Z([3, '#1aad19'])
				Z([3, 'checked'])
				Z([3, '100px'])
				Z(z[1])
				Z([3, '#FBD924'])
				Z([3, 'clock'])
				Z(z[7])
			})(__WXML_GLOBAL__.ops_cached.$gwx_54);
			return __WXML_GLOBAL__.ops_cached.$gwx_54
		}

		function gz$gwx_55() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_55) return __WXML_GLOBAL__.ops_cached.$gwx_55
			__WXML_GLOBAL__.ops_cached.$gwx_55 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '学生身份认证'])
				Z(z[1])
				Z([3, '_proxy'])
				Z([3, '31-0'])
				Z([3, '原始手机号'])
				Z([3, '11'])
				Z([3, '请输入现在绑定的手机号'])
				Z([3, 'tel'])
				Z([
					[7],
					[3, 'name']
				])
				Z(z[1])
				Z(z[4])
				Z([3, '31-1'])
				Z([3, '更改手机号'])
				Z(z[7])
				Z([3, '请输入要更改的手机号'])
				Z(z[9])
				Z([
					[7],
					[3, 'studentNo']
				])
				Z(z[1])
				Z(z[4])
				Z([3, '31-2'])
				Z([3, '验证码'])
				Z([3, '20'])
				Z([3, '请输入验证码'])
				Z([3, 'name'])
				Z([
					[7],
					[3, 'verification']
				])
				Z(z[1])
				Z(z[1])
			})(__WXML_GLOBAL__.ops_cached.$gwx_55);
			return __WXML_GLOBAL__.ops_cached.$gwx_55
		}

		function gz$gwx_56() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_56) return __WXML_GLOBAL__.ops_cached.$gwx_56
			__WXML_GLOBAL__.ops_cached.$gwx_56 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'language']
					],
					[1, 'zh']
				])
				Z([3, '_initComponent'])
				Z([3, '个人信息'])
				Z(z[2])
				Z([3, 'Personal'])
				Z(z[1])
				Z(z[2])
				Z([3, '姓名'])
				Z([
					[7],
					[3, 'name']
				])
				Z(z[2])
				Z([3, '学号'])
				Z([
					[7],
					[3, 'studentNo']
				])
				Z(z[2])
				Z([3, '学院'])
				Z([
					[7],
					[3, 'college']
				])
				Z(z[2])
				Z([3, '手机号'])
				Z([
					[7],
					[3, 'phone']
				])
				Z(z[2])
				Z([3, 'Name'])
				Z(z[9])
				Z(z[2])
				Z([3, 'Student ID'])
				Z(z[12])
				Z(z[2])
				Z([3, 'College'])
				Z(z[15])
				Z(z[2])
				Z([3, 'Phone'])
				Z(z[18])
			})(__WXML_GLOBAL__.ops_cached.$gwx_56);
			return __WXML_GLOBAL__.ops_cached.$gwx_56
		}

		function gz$gwx_57() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_57) return __WXML_GLOBAL__.ops_cached.$gwx_57
			__WXML_GLOBAL__.ops_cached.$gwx_57 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '新冠疫苗接种率统计'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentID']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentName']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z([3, '_proxy'])
				Z([3, '42-28'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willingnessArray']
				])
				Z([3, '0'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willingnessLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willingnessPlaceholder']
				])
				Z([1, true])
				Z(z[16])
				Z([
					[7],
					[3, 'willingnessValue']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '0']
				])
				Z(z[9])
				Z([3, '42-29'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vaccinationSiteArray']
				])
				Z(z[12])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vaccinationSiteLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vaccinationSitePlaceholder']
				])
				Z(z[16])
				Z(z[16])
				Z([
					[7],
					[3, 'vaccinationSiteValue']
				])
				Z(z[9])
				Z([3, '42-30'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandArray']
				])
				Z(z[12])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandPlaceholder']
				])
				Z(z[16])
				Z(z[16])
				Z([
					[7],
					[3, 'brandValue']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'brandValue']
					],
					[1, '其他']
				])
				Z(z[1])
				Z(z[9])
				Z([3, '42-31'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandOtherLabel']
				])
				Z([3, '50'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandOtherPlaceholder']
				])
				Z(z[16])
				Z([
					[7],
					[3, 'brandOtherField']
				])
				Z([
					[2, '||'],
					[
						[2, '==='],
						[
							[7],
							[3, 'willingnessIdx']
						],
						[1, '1']
					],
					[
						[2, '==='],
						[
							[7],
							[3, 'willingnessIdx']
						],
						[1, '2']
					]
				])
				Z(z[9])
				Z([3, '42-34'])
				Z(z[32])
				Z(z[12])
				Z(z[1])
				Z(z[35])
				Z(z[36])
				Z(z[16])
				Z(z[16])
				Z(z[39])
				Z(z[40])
				Z(z[1])
				Z(z[9])
				Z([3, '42-35'])
				Z(z[44])
				Z(z[45])
				Z(z[46])
				Z(z[16])
				Z(z[48])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '3']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '4']
				])
				Z(z[1])
				Z(z[9])
				Z([3, '42-40'])
				Z([3, 'multiRow'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'notWillingReasonLabel']
				])
				Z([3, '100'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'notWillingReasonPlaceholder']
				])
				Z(z[16])
				Z([3, '80px'])
				Z([3, 'textarea'])
				Z([
					[7],
					[3, 'notWillingReason']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '5']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_57);
			return __WXML_GLOBAL__.ops_cached.$gwx_57
		}

		function gz$gwx_58() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_58) return __WXML_GLOBAL__.ops_cached.$gwx_58
			__WXML_GLOBAL__.ops_cached.$gwx_58 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '接种情况修改'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentID']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'studentNo']
				])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'studentName']
				])
				Z([
					[6],
					[
						[7],
						[3, 'studentInfo']
					],
					[3, 'name']
				])
				Z([3, '_proxy'])
				Z([3, '44-112'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willingnessArray']
				])
				Z([3, '0'])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willingnessLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'willingnessPlaceholder']
				])
				Z([1, true])
				Z(z[16])
				Z([
					[7],
					[3, 'willingnessValue']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '0']
				])
				Z(z[9])
				Z([3, '44-113'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vaccinationSiteArray']
				])
				Z(z[12])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vaccinationSiteLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'vaccinationSitePlaceholder']
				])
				Z(z[16])
				Z(z[16])
				Z([
					[7],
					[3, 'vaccinationSiteValue']
				])
				Z(z[9])
				Z([3, '44-114'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandArray']
				])
				Z(z[12])
				Z(z[1])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandLabel']
				])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandPlaceholder']
				])
				Z(z[16])
				Z(z[16])
				Z([
					[7],
					[3, 'brandValue']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'brandValue']
					],
					[1, '其他']
				])
				Z(z[1])
				Z(z[9])
				Z([3, '44-115'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandOtherLabel']
				])
				Z([3, '50'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'brandOtherPlaceholder']
				])
				Z(z[16])
				Z([
					[7],
					[3, 'brandOtherField']
				])
				Z([
					[2, '||'],
					[
						[2, '==='],
						[
							[7],
							[3, 'willingnessIdx']
						],
						[1, '1']
					],
					[
						[2, '==='],
						[
							[7],
							[3, 'willingnessIdx']
						],
						[1, '2']
					]
				])
				Z(z[9])
				Z([3, '44-118'])
				Z(z[32])
				Z(z[12])
				Z(z[1])
				Z(z[35])
				Z(z[36])
				Z(z[16])
				Z(z[16])
				Z(z[39])
				Z(z[40])
				Z(z[1])
				Z(z[9])
				Z([3, '44-119'])
				Z(z[44])
				Z(z[45])
				Z(z[46])
				Z(z[16])
				Z(z[48])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '3']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '4']
				])
				Z(z[1])
				Z(z[9])
				Z([3, '44-124'])
				Z([3, 'multiRow'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'notWillingReasonLabel']
				])
				Z([3, '100'])
				Z([
					[6],
					[
						[7],
						[3, 'preSet']
					],
					[3, 'notWillingReasonPlaceholder']
				])
				Z(z[16])
				Z([3, '80px'])
				Z([3, 'textarea'])
				Z([
					[7],
					[3, 'notWillingReason']
				])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'willingnessIdx']
					],
					[1, '5']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_58);
			return __WXML_GLOBAL__.ops_cached.$gwx_58
		}

		function gz$gwx_59() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_59) return __WXML_GLOBAL__.ops_cached.$gwx_59
			__WXML_GLOBAL__.ops_cached.$gwx_59 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'hs-page'])
				Z([3, '_initComponent'])
				Z([3, '新冠疫苗接种率统计'])
				Z([
					[7],
					[3, 'isSuccess']
				])
				Z(z[1])
				Z([3, '#1aad19'])
				Z([3, 'checked'])
				Z([3, '100px'])
				Z(z[1])
				Z([3, '#FBD924'])
				Z([3, 'clock'])
				Z(z[7])
			})(__WXML_GLOBAL__.ops_cached.$gwx_59);
			return __WXML_GLOBAL__.ops_cached.$gwx_59
		}
		__WXML_GLOBAL__.ops_set.$gwx = z;
		__WXML_GLOBAL__.ops_init.$gwx = true;
		var nv_require = function () {
			var nnm = {
				"m_./components/vant/dist/picker/index.wxml:isSimple": np_1,
				"m_./components/vant/dist/steps/index.wxml:status": np_2,
				"m_./components/vant/mp-html/node/node.wxml:use": np_10,
				"p_./components/vant/dist/picker-column/index.wxs": np_0,
				"p_./components/vant/dist/tabs/index.wxs": np_3,
				"p_./components/vant/dist/wxs/add-unit.wxs": np_4,
				"p_./components/vant/dist/wxs/array.wxs": np_5,
				"p_./components/vant/dist/wxs/bem.wxs": np_6,
				"p_./components/vant/dist/wxs/memoize.wxs": np_7,
				"p_./components/vant/dist/wxs/object.wxs": np_8,
				"p_./components/vant/dist/wxs/utils.wxs": np_9,
			};
			var nom = {};
			return function (n) {
				if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
				return function () {
					if (!nnm[n]) return undefined;
					try {
						if (!nom[n]) nom[n] = nnm[n]();
						return nom[n];
					} catch (e) {
						e.message = e.message.replace(/nv_/g, '');
						var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
						e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
						e.stack = e.stack.replace(/\snv_/g, ' ');
						e.stack = $gstack(e.stack);
						e.stack += '\n    at ' + n.substring(2);
						console.error(e);
					}
				}
			}
		}()
		f_['./components/vant/dist/button/index.wxml'] = {};
		f_['./components/vant/dist/button/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/button/index.wxml']['utils']();

		f_['./components/vant/dist/cell/index.wxml'] = {};
		f_['./components/vant/dist/cell/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/cell/index.wxml']['utils']();

		f_['./components/vant/dist/dialog/index.wxml'] = {};
		f_['./components/vant/dist/dialog/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/dialog/index.wxml']['utils']();

		f_['./components/vant/dist/field/index.wxml'] = {};
		f_['./components/vant/dist/field/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/field/index.wxml']['utils']();

		f_['./components/vant/dist/icon/index.wxml'] = {};
		f_['./components/vant/dist/icon/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/icon/index.wxml']['utils']();

		f_['./components/vant/dist/info/index.wxml'] = {};
		f_['./components/vant/dist/info/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/info/index.wxml']['utils']();

		f_['./components/vant/dist/loading/index.wxml'] = {};
		f_['./components/vant/dist/loading/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/loading/index.wxml']['utils']();

		f_['./components/vant/dist/picker-column/index.wxml'] = {};
		f_['./components/vant/dist/picker-column/index.wxml']['getOptionText'] = f_['./components/vant/dist/picker-column/index.wxs'] || nv_require("p_./components/vant/dist/picker-column/index.wxs");
		f_['./components/vant/dist/picker-column/index.wxml']['getOptionText']();

		f_['./components/vant/dist/picker-column/index.wxs'] = nv_require("p_./components/vant/dist/picker-column/index.wxs");

		function np_0() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_isObj(nv_x) {
				var nv_type = typeof nv_x;
				return (nv_x !== null && (nv_type === 'object' || nv_type === 'function'))
			};
			nv_module.nv_exports = (function (nv_option, nv_valueKey) {
				return (nv_isObj(nv_option) && nv_option[((nt_0 = (nv_valueKey), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] != null ? nv_option[((nt_1 = (nv_valueKey), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))] : nv_option)
			});
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/picker/index.wxml'] = {};
		f_['./components/vant/dist/picker/index.wxml']['isSimple'] = nv_require("m_./components/vant/dist/picker/index.wxml:isSimple");

		function np_1() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_isSimple(nv_columns) {
				return (nv_columns.nv_length && !nv_columns[(0)].nv_values)
			};
			nv_module.nv_exports = nv_isSimple;
			return nv_module.nv_exports;
		}
		f_['./components/vant/dist/picker/index.wxml']['isSimple'] = nv_require("m_./components/vant/dist/picker/index.wxml:isSimple");

		function np_1() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_isSimple(nv_columns) {
				return (nv_columns.nv_length && !nv_columns[(0)].nv_values)
			};
			nv_module.nv_exports = nv_isSimple;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/popup/index.wxml'] = {};
		f_['./components/vant/dist/popup/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/popup/index.wxml']['utils']();

		f_['./components/vant/dist/radio/index.wxml'] = {};
		f_['./components/vant/dist/radio/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/radio/index.wxml']['utils']();

		f_['./components/vant/dist/steps/index.wxml'] = {};
		f_['./components/vant/dist/steps/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/steps/index.wxml']['utils']();
		f_['./components/vant/dist/steps/index.wxml']['status'] = nv_require("m_./components/vant/dist/steps/index.wxml:status");

		function np_2() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_get(nv_index, nv_active) {
				if (nv_index < nv_active) {
					return ('finish')
				} else if (nv_index === nv_active) {
					return ('process')
				};
				return ('inactive')
			};
			nv_module.nv_exports = nv_get;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/sticky/index.wxml'] = {};
		f_['./components/vant/dist/sticky/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/sticky/index.wxml']['utils']();

		f_['./components/vant/dist/tab/index.wxml'] = {};
		f_['./components/vant/dist/tab/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/tab/index.wxml']['utils']();

		f_['./components/vant/dist/tabs/index.wxml'] = {};
		f_['./components/vant/dist/tabs/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/tabs/index.wxml']['utils']();
		f_['./components/vant/dist/tabs/index.wxml']['getters'] = f_['./components/vant/dist/tabs/index.wxs'] || nv_require("p_./components/vant/dist/tabs/index.wxs");
		f_['./components/vant/dist/tabs/index.wxml']['getters']();

		f_['./components/vant/dist/tabs/index.wxs'] = nv_require("p_./components/vant/dist/tabs/index.wxs");

		function np_3() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_tabClass(nv_active, nv_ellipsis) {
				var nv_classes = ['tab-class'];
				if (nv_active) {
					nv_classes.nv_push('tab-active-class')
				};
				if (nv_ellipsis) {
					nv_classes.nv_push('van-ellipsis')
				};
				return (nv_classes.nv_join(' '))
			};

			function nv_tabStyle(nv_active, nv_ellipsis, nv_color, nv_type, nv_disabled, nv_activeColor, nv_inactiveColor, nv_swipeThreshold, nv_scrollable) {
				var nv_styles = [];
				var nv_isCard = nv_type === 'card';
				if (nv_color && nv_isCard) {
					nv_styles.nv_push('border-color:' + nv_color);
					if (!nv_disabled) {
						if (nv_active) {
							nv_styles.nv_push('background-color:' + nv_color)
						} else {
							nv_styles.nv_push('color:' + nv_color)
						}
					}
				};
				var nv_titleColor = nv_active ? nv_activeColor : nv_inactiveColor;
				if (nv_titleColor) {
					nv_styles.nv_push('color:' + nv_titleColor)
				};
				if (nv_scrollable && nv_ellipsis) {
					nv_styles.nv_push('flex-basis:' + 88 / nv_swipeThreshold + '%')
				};
				return (nv_styles.nv_join(';'))
			};
			nv_module.nv_exports.nv_tabClass = nv_tabClass;
			nv_module.nv_exports.nv_tabStyle = nv_tabStyle;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/tag/index.wxml'] = {};
		f_['./components/vant/dist/tag/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/tag/index.wxml']['utils']();

		f_['./components/vant/dist/uploader/index.wxml'] = {};
		f_['./components/vant/dist/uploader/index.wxml']['utils'] = f_['./components/vant/dist/wxs/utils.wxs'] || nv_require("p_./components/vant/dist/wxs/utils.wxs");
		f_['./components/vant/dist/uploader/index.wxml']['utils']();

		f_['./components/vant/dist/wxs/add-unit.wxs'] = nv_require("p_./components/vant/dist/wxs/add-unit.wxs");

		function np_4() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_REGEXP = nv_getRegExp('^\x5cd+(\x5c.\x5cd+)?$');

			function nv_addUnit(nv_value) {
				if (nv_value == null) {
					return (undefined)
				};
				return (nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px' : nv_value)
			};
			nv_module.nv_exports = ({
				nv_addUnit: nv_addUnit,
			});
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/wxs/array.wxs'] = nv_require("p_./components/vant/dist/wxs/array.wxs");

		function np_5() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_isArray(nv_array) {
				return (nv_array && nv_array.nv_constructor === 'Array')
			};
			nv_module.nv_exports.nv_isArray = nv_isArray;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/wxs/bem.wxs'] = nv_require("p_./components/vant/dist/wxs/bem.wxs");

		function np_6() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_array = nv_require('p_./components/vant/dist/wxs/array.wxs')();
			var nv_object = nv_require('p_./components/vant/dist/wxs/object.wxs')();
			var nv_PREFIX = 'van-';

			function nv_join(nv_name, nv_mods) {
				nv_name = nv_PREFIX + nv_name;
				nv_mods = nv_mods.nv_map((function (nv_mod) {
					return (nv_name + '--' + nv_mod)
				}));
				nv_mods.nv_unshift(nv_name);
				return (nv_mods.nv_join(' '))
			};

			function nv_traversing(nv_mods, nv_conf) {
				if (!nv_conf) {
					return
				};
				if (typeof nv_conf === 'string' || typeof nv_conf === 'number') {
					nv_mods.nv_push(nv_conf)
				} else if (nv_array.nv_isArray(nv_conf)) {
					nv_conf.nv_forEach((function (nv_item) {
						nv_traversing(nv_mods, nv_item)
					}))
				} else if (typeof nv_conf === 'object') {
					nv_object.nv_keys(nv_conf).nv_forEach((function (nv_key) {
						nv_conf[((nt_0 = (nv_key), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] && nv_mods.nv_push(nv_key)
					}))
				}
			};

			function nv_bem(nv_name, nv_conf) {
				var nv_mods = [];
				nv_traversing(nv_mods, nv_conf);
				return (nv_join(nv_name, nv_mods))
			};
			nv_module.nv_exports.nv_bem = nv_bem;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/wxs/memoize.wxs'] = nv_require("p_./components/vant/dist/wxs/memoize.wxs");

		function np_7() {
			var nv_module = {
				nv_exports: {}
			};

			function nv_isPrimitive(nv_value) {
				var nv_type = typeof nv_value;
				return ((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))
			};

			function nv_call(nv_fn, nv_args) {
				if (nv_args.nv_length === 2) {
					return (nv_fn(nv_args[(0)], nv_args[(1)]))
				};
				if (nv_args.nv_length === 1) {
					return (nv_fn(nv_args[(0)]))
				};
				return (nv_fn())
			};

			function nv_serializer(nv_args) {
				if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])) {
					return (nv_args[(0)])
				};
				var nv_obj = ({});
				for (var nv_i = 0; nv_i < nv_args.nv_length; nv_i++) {
					nv_obj[((nt_5 = ('key' + nv_i), null == nt_5 ? undefined : 'number' === typeof nt_5 ? nt_5 : "nv_" + nt_5))] = nv_args[((nt_6 = (nv_i), null == nt_6 ? undefined : 'number' === typeof nt_6 ? nt_6 : "nv_" + nt_6))]
				};
				return (nv_JSON.nv_stringify(nv_obj))
			};

			function nv_memoize(nv_fn) {
				arguments.nv_length = arguments.length;
				var nv_cache = ({});
				return ((function () {
					arguments.nv_length = arguments.length;
					var nv_key = nv_serializer(arguments);
					if (nv_cache[((nt_7 = (nv_key), null == nt_7 ? undefined : 'number' === typeof nt_7 ? nt_7 : "nv_" + nt_7))] === undefined) {
						nv_cache[((nt_8 = (nv_key), null == nt_8 ? undefined : 'number' === typeof nt_8 ? nt_8 : "nv_" + nt_8))] = nv_call(nv_fn, arguments)
					};
					return (nv_cache[((nt_9 = (nv_key), null == nt_9 ? undefined : 'number' === typeof nt_9 ? nt_9 : "nv_" + nt_9))])
				}))
			};
			nv_module.nv_exports.nv_memoize = nv_memoize;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/wxs/object.wxs'] = nv_require("p_./components/vant/dist/wxs/object.wxs");

		function np_8() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_REGEXP = nv_getRegExp('{|}|\x22', 'g');

			function nv_keys(nv_obj) {
				return (nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP, '').nv_split(',').nv_map((function (nv_item) {
					return (nv_item.nv_split(':')[(0)])
				})))
			};
			nv_module.nv_exports.nv_keys = nv_keys;
			return nv_module.nv_exports;
		}

		f_['./components/vant/dist/wxs/utils.wxs'] = nv_require("p_./components/vant/dist/wxs/utils.wxs");

		function np_9() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_bem = nv_require('p_./components/vant/dist/wxs/bem.wxs')().nv_bem;
			var nv_memoize = nv_require('p_./components/vant/dist/wxs/memoize.wxs')().nv_memoize;
			var nv_addUnit = nv_require('p_./components/vant/dist/wxs/add-unit.wxs')().nv_addUnit;
			nv_module.nv_exports = ({
				nv_bem: nv_memoize(nv_bem),
				nv_memoize: nv_memoize,
				nv_addUnit: nv_addUnit,
			});
			return nv_module.nv_exports;
		}

		f_['./components/vant/mp-html/node/node.wxml'] = {};
		f_['./components/vant/mp-html/node/node.wxml']['use'] = nv_require("m_./components/vant/mp-html/node/node.wxml:use");

		function np_10() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_e = ({
				nv_abbr: !0,
				nv_b: !0,
				nv_big: !0,
				nv_code: !0,
				nv_del: !0,
				nv_em: !0,
				nv_i: !0,
				nv_ins: !0,
				nv_label: !0,
				nv_q: !0,
				nv_small: !0,
				nv_span: !0,
				nv_strong: !0,
				nv_sub: !0,
				nv_sup: !0,
			});
			nv_module.nv_exports = (function (nv_n) {
				return (!nv_n.nv_c && (!!nv_n.nv_text || !nv_e[((nt_0 = (nv_n.nv_name), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] && -1 == (nv_n.nv_attrs.nv_style || "").nv_indexOf("inline")))
			});
			return nv_module.nv_exports;
		}
		f_['./components/vant/mp-html/node/node.wxml']['use'] = nv_require("m_./components/vant/mp-html/node/node.wxml:use");

		function np_10() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_e = ({
				nv_abbr: !0,
				nv_b: !0,
				nv_big: !0,
				nv_code: !0,
				nv_del: !0,
				nv_em: !0,
				nv_i: !0,
				nv_ins: !0,
				nv_label: !0,
				nv_q: !0,
				nv_small: !0,
				nv_span: !0,
				nv_strong: !0,
				nv_sub: !0,
				nv_sup: !0,
			});
			nv_module.nv_exports = (function (nv_n) {
				return (!nv_n.nv_c && (!!nv_n.nv_text || !nv_e[((nt_0 = (nv_n.nv_name), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] && -1 == (nv_n.nv_attrs.nv_style || "").nv_indexOf("inline")))
			});
			return nv_module.nv_exports;
		}

		var x = ['./components/dialog-location.wxml', './components/dialog-login.wxml', './components/error-hint.wxml', './components/nav-bar-code.wxml', './components/nav-bar.wxml', './components/refresher-list/index.wxml', './components/vant/dist/area/index.wxml', './components/vant/dist/button/index.wxml', './components/vant/dist/cell-group/index.wxml', './components/vant/dist/cell/index.wxml', './components/vant/dist/dialog/index.wxml', './components/vant/dist/field/index.wxml', './components/vant/dist/icon/index.wxml', './components/vant/dist/info/index.wxml', './components/vant/dist/loading/index.wxml', './components/vant/dist/overlay/index.wxml', './components/vant/dist/picker-column/index.wxml', './components/vant/dist/picker/index.wxml', './components/vant/dist/popup/index.wxml', './components/vant/dist/radio-group/index.wxml', './components/vant/dist/radio/index.wxml', './components/vant/dist/steps/index.wxml', './components/vant/dist/sticky/index.wxml', './components/vant/dist/tab/index.wxml', './components/vant/dist/tabs/index.wxml', './components/vant/dist/tag/index.wxml', './components/vant/dist/transition/index.wxml', './components/vant/dist/uploader/index.wxml', './components/vant/mp-html/index.wxml', './components/vant/mp-html/node/node.wxml', './pages/account.wxml', './pages/dailyReport/complete.wxml', './pages/dailyReport/normal.wxml', './pages/index.wxml', './pages/leaveSchool/leaveSchoolDetailv2.wxml', './pages/leaveSchool/leaveSchoolv2.wxml', './pages/license.wxml', './pages/notification.wxml', './pages/questionnaire/qA2.wxml', './pages/questionnaire/qAttachment.wxml', './pages/questionnaire/qIndex.wxml', './pages/record/leaveSchool.wxml', './pages/returnSchool/appeal.wxml', './pages/returnSchool/appealComplete.wxml', './pages/returnSchool/appealDetail.wxml', './pages/returnSchool/appealDetailInfo.wxml', './pages/returnSchool/appealMedicalReport.wxml', './pages/returnSchool/appealSecStep.wxml', './pages/returnSchool/apply.wxml', './pages/returnSchool/applyDetail.wxml', './pages/returnSchool/returnCode.wxml', './pages/returnSchool/returnCodeChange.wxml', './pages/student/bind.wxml', './pages/student/bindComplete.wxml', './pages/student/changeInfo.wxml', './pages/student/detail.wxml', './pages/vaccination/apply.wxml', './pages/vaccination/applyDetail.wxml', './pages/vaccination/complete.wxml'];
		d_[x[0]] = {}
		var m0 = function (e, s, r, gg) {
			var z = gz$gwx_1()
			var oB = _mz(z, 'van-popup', ['bind_init', 0, 'class', 1, 'show', 1], [], e, s, gg)
			_(r, oB)
			return r
		}
		e_[x[0]] = {
			f: m0,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[1]] = {}
		var m1 = function (e, s, r, gg) {
			var z = gz$gwx_2()
			var oD = _mz(z, 'van-popup', ['bind_init', 0, 'class', 1, 'show', 1], [], e, s, gg)
			_(r, oD)
			return r
		}
		e_[x[1]] = {
			f: m1,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[2]] = {}
		var m2 = function (e, s, r, gg) {
			var z = gz$gwx_3()
			var cF = _n('slot')
			_(r, cF)
			return r
		}
		e_[x[2]] = {
			f: m2,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[3]] = {}
		var m3 = function (e, s, r, gg) {
			var z = gz$gwx_4()
			var oH = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
			var cI = _v()
			_(oH, cI)
			if (_oz(z, 2, e, s, gg)) {
				cI.wxVkey = 1
			}
			var oJ = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
			var lK = _v()
			_(oJ, lK)
			if (_oz(z, 5, e, s, gg)) {
				lK.wxVkey = 1
			}
			var aL = _v()
			_(oJ, aL)
			if (_oz(z, 6, e, s, gg)) {
				aL.wxVkey = 1
			}
			lK.wxXCkey = 1
			aL.wxXCkey = 1
			_(oH, oJ)
			cI.wxXCkey = 1
			_(r, oH)
			return r
		}
		e_[x[3]] = {
			f: m3,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[4]] = {}
		var m4 = function (e, s, r, gg) {
			var z = gz$gwx_5()
			var eN = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
			var bO = _v()
			_(eN, bO)
			if (_oz(z, 2, e, s, gg)) {
				bO.wxVkey = 1
			}
			var oP = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
			var xQ = _v()
			_(oP, xQ)
			if (_oz(z, 5, e, s, gg)) {
				xQ.wxVkey = 1
			}
			var oR = _v()
			_(oP, oR)
			if (_oz(z, 6, e, s, gg)) {
				oR.wxVkey = 1
			}
			xQ.wxXCkey = 1
			oR.wxXCkey = 1
			_(eN, oP)
			bO.wxXCkey = 1
			_(r, eN)
			return r
		}
		e_[x[4]] = {
			f: m4,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[5]] = {}
		var m5 = function (e, s, r, gg) {
			var z = gz$gwx_6()
			var cT = _mz(z, 'scroll-view', ['scrollY', -1, 'bindrefresherrefresh', 0, 'bindscrolltolower', 1, 'refresherEnabled', 1, 'refresherThreshold', 2, 'refresherTriggered', 3, 'style', 4], [], e, s, gg)
			var cW = _n('slot')
			_(cT, cW)
			var hU = _v()
			_(cT, hU)
			if (_oz(z, 6, e, s, gg)) {
				hU.wxVkey = 1
			}
			var oV = _v()
			_(cT, oV)
			if (_oz(z, 7, e, s, gg)) {
				oV.wxVkey = 1
			}
			hU.wxXCkey = 1
			oV.wxXCkey = 1
			_(r, cT)
			return r
		}
		e_[x[5]] = {
			f: m5,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[6]] = {}
		var m6 = function (e, s, r, gg) {
			var z = gz$gwx_7()
			var lY = _mz(z, 'van-picker', ['showToolbar', -1, 'activeClass', 0, 'bind:cancel', 1, 'bind:change', 1, 'bind:confirm', 2, 'cancelButtonText', 3, 'class', 4, 'columnClass', 5, 'columns', 6, 'confirmButtonText', 7, 'itemHeight', 8, 'loading', 9, 'title', 10, 'toolbarClass', 11, 'valueKey', 12, 'visibleItemCount', 13], [], e, s, gg)
			_(r, lY)
			return r
		}
		e_[x[6]] = {
			f: m6,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[7]] = {}
		var m7 = function (e, s, r, gg) {
			var z = gz$gwx_8()
			var t1 = _mz(z, 'button', ['appParameter', 0, 'ariaLabel', 1, 'bindcontact', 1, 'binderror', 2, 'bindgetphonenumber', 3, 'bindgetuserinfo', 4, 'bindlaunchapp', 5, 'bindopensetting', 6, 'bindtap', 7, 'businessId', 8, 'class', 9, 'hoverClass', 10, 'id', 11, 'lang', 12, 'openType', 13, 'sendMessageImg', 14, 'sendMessagePath', 15, 'sendMessageTitle', 16, 'sessionFrom', 17, 'showMessageCard', 18, 'style', 19], [], e, s, gg)
			var e2 = _v()
			_(t1, e2)
			if (_oz(z, 21, e, s, gg)) {
				e2.wxVkey = 1
				var o4 = _mz(z, 'van-loading', ['color', 22, 'customClass', 1, 'size', 2, 'type', 3], [], e, s, gg)
				_(e2, o4)
				var b3 = _v()
				_(e2, b3)
				if (_oz(z, 26, e, s, gg)) {
					b3.wxVkey = 1
				}
				b3.wxXCkey = 1
			} else {
				e2.wxVkey = 2
				var x5 = _v()
				_(e2, x5)
				if (_oz(z, 28, e, s, gg)) {
					x5.wxVkey = 1
					var o6 = _mz(z, 'van-icon', ['class', 29, 'customStyle', 1, 'name', 2, 'size', 3], [], e, s, gg)
					_(x5, o6)
				}
				var f7 = _n('slot')
				_(e2, f7)
				x5.wxXCkey = 1
				x5.wxXCkey = 3
			}
			e2.wxXCkey = 1
			e2.wxXCkey = 3
			e2.wxXCkey = 3
			_(r, t1)
			return r
		}
		e_[x[7]] = {
			f: m7,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[8]] = {}
		var m8 = function (e, s, r, gg) {
			var z = gz$gwx_9()
			var h9 = _v()
			_(r, h9)
			if (_oz(z, 0, e, s, gg)) {
				h9.wxVkey = 1
			}
			var o0 = _n('slot')
			_(r, o0)
			h9.wxXCkey = 1
			return r
		}
		e_[x[8]] = {
			f: m8,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[9]] = {}
		var m9 = function (e, s, r, gg) {
			var z = gz$gwx_10()
			var oBB = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'hoverClass', 1, 'hoverStayTime', 2, 'style', 3], [], e, s, gg)
			var lCB = _v()
			_(oBB, lCB)
			if (_oz(z, 5, e, s, gg)) {
				lCB.wxVkey = 1
				var tEB = _mz(z, 'van-icon', ['class', 6, 'customClass', 1, 'name', 2], [], e, s, gg)
				_(lCB, tEB)
			} else {
				lCB.wxVkey = 2
				var eFB = _n('slot')
				_rz(z, eFB, 'name', 10, e, s, gg)
				_(lCB, eFB)
			}
			var bGB = _mz(z, 'view', ['class', 11, 'style', 1], [], e, s, gg)
			var oHB = _v()
			_(bGB, oHB)
			if (_oz(z, 13, e, s, gg)) {
				oHB.wxVkey = 1
			} else {
				oHB.wxVkey = 2
				var oJB = _n('slot')
				_rz(z, oJB, 'name', 15, e, s, gg)
				_(oHB, oJB)
			}
			var xIB = _v()
			_(bGB, xIB)
			if (_oz(z, 16, e, s, gg)) {
				xIB.wxVkey = 1
				var fKB = _n('view')
				_rz(z, fKB, 'class', 17, e, s, gg)
				var cLB = _v()
				_(fKB, cLB)
				if (_oz(z, 18, e, s, gg)) {
					cLB.wxVkey = 1
					var hMB = _n('slot')
					_rz(z, hMB, 'name', 19, e, s, gg)
					_(cLB, hMB)
				} else if (_oz(z, 20, e, s, gg)) {
					cLB.wxVkey = 2
				}
				cLB.wxXCkey = 1
				_(xIB, fKB)
			}
			oHB.wxXCkey = 1
			xIB.wxXCkey = 1
			_(oBB, bGB)
			var oNB = _mz(z, 'view', ['class', 21, 'style', 1], [], e, s, gg)
			var cOB = _v()
			_(oNB, cOB)
			if (_oz(z, 23, e, s, gg)) {
				cOB.wxVkey = 1
			} else {
				cOB.wxVkey = 2
				var oPB = _n('slot')
				_(cOB, oPB)
			}
			cOB.wxXCkey = 1
			_(oBB, oNB)
			var aDB = _v()
			_(oBB, aDB)
			if (_oz(z, 25, e, s, gg)) {
				aDB.wxVkey = 1
				var lQB = _mz(z, 'van-icon', ['class', 26, 'customClass', 1, 'name', 2], [], e, s, gg)
				_(aDB, lQB)
			} else {
				aDB.wxVkey = 2
				var aRB = _n('slot')
				_rz(z, aRB, 'name', 30, e, s, gg)
				_(aDB, aRB)
			}
			var tSB = _n('slot')
			_rz(z, tSB, 'name', 31, e, s, gg)
			_(oBB, tSB)
			lCB.wxXCkey = 1
			lCB.wxXCkey = 3
			aDB.wxXCkey = 1
			aDB.wxXCkey = 3
			_(r, oBB)
			return r
		}
		e_[x[9]] = {
			f: m9,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[10]] = {}
		var m10 = function (e, s, r, gg) {
			var z = gz$gwx_11()
			var bUB = _mz(z, 'van-popup', ['bind:close', 0, 'closeOnClickOverlay', 1, 'customClass', 1, 'customStyle', 2, 'overlay', 3, 'overlayStyle', 4, 'show', 5, 'transition', 6, 'zIndex', 7], [], e, s, gg)
			var oVB = _v()
			_(bUB, oVB)
			if (_oz(z, 9, e, s, gg)) {
				oVB.wxVkey = 1
				var oXB = _n('view')
				_rz(z, oXB, 'class', 10, e, s, gg)
				var fYB = _v()
				_(oXB, fYB)
				if (_oz(z, 11, e, s, gg)) {
					fYB.wxVkey = 1
					var cZB = _n('slot')
					_rz(z, cZB, 'name', 12, e, s, gg)
					_(fYB, cZB)
				} else if (_oz(z, 13, e, s, gg)) {
					fYB.wxVkey = 2
				}
				fYB.wxXCkey = 1
				_(oVB, oXB)
			}
			var xWB = _v()
			_(bUB, xWB)
			if (_oz(z, 14, e, s, gg)) {
				xWB.wxVkey = 1
				var h1B = _n('slot')
				_(xWB, h1B)
			} else if (_oz(z, 15, e, s, gg)) {
				xWB.wxVkey = 2
			}
			var o2B = _n('view')
			_rz(z, o2B, 'class', 16, e, s, gg)
			var c3B = _v()
			_(o2B, c3B)
			if (_oz(z, 17, e, s, gg)) {
				c3B.wxVkey = 1
				var l5B = _mz(z, 'van-button', ['bind:click', 18, 'class', 1, 'customClass', 2, 'customStyle', 3, 'loading', 4, 'size', 5], [], e, s, gg)
				_(c3B, l5B)
			}
			var o4B = _v()
			_(o2B, o4B)
			if (_oz(z, 24, e, s, gg)) {
				o4B.wxVkey = 1
				var a6B = _mz(z, 'van-button', ['appParameter', 25, 'bind:click', 1, 'bindcontact', 2, 'binderror', 3, 'bindgetphonenumber', 4, 'bindgetuserinfo', 5, 'bindlaunchapp', 6, 'bindopensetting', 7, 'businessId', 8, 'class', 9, 'customClass', 10, 'customStyle', 11, 'lang', 12, 'loading', 13, 'openType', 14, 'sendMessageImg', 15, 'sendMessagePath', 16, 'sendMessageTitle', 17, 'sessionFrom', 18, 'showMessageCard', 19, 'size', 20], [], e, s, gg)
				_(o4B, a6B)
			}
			c3B.wxXCkey = 1
			c3B.wxXCkey = 3
			o4B.wxXCkey = 1
			o4B.wxXCkey = 3
			_(bUB, o2B)
			oVB.wxXCkey = 1
			xWB.wxXCkey = 1
			_(r, bUB)
			return r
		}
		e_[x[10]] = {
			f: m10,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[11]] = {}
		var m11 = function (e, s, r, gg) {
			var z = gz$gwx_12()
			var e8B = _mz(z, 'van-cell', ['arrowDirection', 0, 'border', 1, 'center', 1, 'clickable', 2, 'customClass', 3, 'customStyle', 4, 'icon', 5, 'isLink', 6, 'required', 7, 'size', 8, 'title', 9, 'titleWidth', 10], [], e, s, gg)
			var o0B = _mz(z, 'slot', ['name', 12, 'slot', 1], [], e, s, gg)
			_(e8B, o0B)
			var xAC = _mz(z, 'slot', ['name', 14, 'slot', 1], [], e, s, gg)
			_(e8B, xAC)
			var oBC = _n('view')
			_rz(z, oBC, 'class', 16, e, s, gg)
			var fCC = _v()
			_(oBC, fCC)
			if (_oz(z, 17, e, s, gg)) {
				fCC.wxVkey = 1
				var cDC = _mz(z, 'van-icon', ['bindtouchstart', 18, 'class', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(fCC, cDC)
			}
			var hEC = _mz(z, 'view', ['bind:tap', 22, 'class', 1], [], e, s, gg)
			var oFC = _v()
			_(hEC, oFC)
			if (_oz(z, 24, e, s, gg)) {
				oFC.wxVkey = 1
				var cGC = _mz(z, 'van-icon', ['class', 25, 'customClass', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(oFC, cGC)
			}
			var oHC = _n('slot')
			_rz(z, oHC, 'name', 29, e, s, gg)
			_(hEC, oHC)
			var lIC = _n('slot')
			_rz(z, lIC, 'name', 30, e, s, gg)
			_(hEC, lIC)
			oFC.wxXCkey = 1
			oFC.wxXCkey = 3
			_(oBC, hEC)
			var aJC = _n('slot')
			_rz(z, aJC, 'name', 31, e, s, gg)
			_(oBC, aJC)
			fCC.wxXCkey = 1
			fCC.wxXCkey = 3
			_(e8B, oBC)
			var b9B = _v()
			_(e8B, b9B)
			if (_oz(z, 32, e, s, gg)) {
				b9B.wxVkey = 1
			}
			b9B.wxXCkey = 1
			_(r, e8B)
			return r
		}
		e_[x[11]] = {
			f: m11,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[12]] = {}
		var m12 = function (e, s, r, gg) {
			var z = gz$gwx_13()
			var eLC = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
			var bMC = _v()
			_(eLC, bMC)
			if (_oz(z, 3, e, s, gg)) {
				bMC.wxVkey = 1
				var xOC = _mz(z, 'van-info', ['customClass', 4, 'dot', 1, 'info', 2], [], e, s, gg)
				_(bMC, xOC)
			}
			var oNC = _v()
			_(eLC, oNC)
			if (_oz(z, 7, e, s, gg)) {
				oNC.wxVkey = 1
			}
			bMC.wxXCkey = 1
			bMC.wxXCkey = 3
			oNC.wxXCkey = 1
			_(r, eLC)
			return r
		}
		e_[x[12]] = {
			f: m12,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[13]] = {}
		var m13 = function (e, s, r, gg) {
			var z = gz$gwx_14()
			var fQC = _v()
			_(r, fQC)
			if (_oz(z, 0, e, s, gg)) {
				fQC.wxVkey = 1
			}
			fQC.wxXCkey = 1
			return r
		}
		e_[x[13]] = {
			f: m13,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[14]] = {}
		var m14 = function (e, s, r, gg) {
			var z = gz$gwx_15()
			var hSC = _n('view')
			_rz(z, hSC, 'class', 0, e, s, gg)
			var oTC = _v()
			_(hSC, oTC)
			var cUC = function (lWC, oVC, aXC, gg) {
				var eZC = _v()
				_(aXC, eZC)
				if (_oz(z, 3, lWC, oVC, gg)) {
					eZC.wxVkey = 1
				}
				eZC.wxXCkey = 1
				return aXC
			}
			oTC.wxXCkey = 2
			_2z(z, 1, cUC, e, s, gg, oTC, 'item', 'index', 'index')
			var b1C = _n('slot')
			_(hSC, b1C)
			_(r, hSC)
			return r
		}
		e_[x[14]] = {
			f: m14,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[15]] = {}
		var m15 = function (e, s, r, gg) {
			var z = gz$gwx_16()
			var x3C = _mz(z, 'van-transition', ['bind:tap', 0, 'catch:touchmove', 1, 'customClass', 1, 'customStyle', 2, 'duration', 3, 'show', 4], [], e, s, gg)
			var o4C = _n('slot')
			_(x3C, o4C)
			_(r, x3C)
			return r
		}
		e_[x[15]] = {
			f: m15,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[16]] = {}
		var m16 = function (e, s, r, gg) {
			var z = gz$gwx_17()
			return r
		}
		e_[x[16]] = {
			f: m16,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[17]] = {}
		d_[x[17]]["toolbar"] = function (e, s, r, gg) {
			var z = gz$gwx_18()
			var b = x[17] + ':toolbar'
			r.wxVkey = b
			gg.f = $gdc(f_["./components/vant/dist/picker/index.wxml"], "", 1)
			if (p_[b]) {
				_wl(b, x[17]);
				return
			}
			p_[b] = true
			try {
				var oB = _v()
				_(r, oB)
				if (_oz(z, 1, e, s, gg)) {
					oB.wxVkey = 1
					var xC = _v()
					_(oB, xC)
					if (_oz(z, 2, e, s, gg)) {
						xC.wxVkey = 1
					}
					xC.wxXCkey = 1
				}
				oB.wxXCkey = 1
			} catch (err) {
				p_[b] = false
				throw err
			}
			p_[b] = false
			return r
		}
		var m17 = function (e, s, r, gg) {
			var z = gz$gwx_18()
			var h7C = _n('view')
			_rz(z, h7C, 'class', 3, e, s, gg)
			var o8C = _v()
			_(h7C, o8C)
			if (_oz(z, 4, e, s, gg)) {
				o8C.wxVkey = 1
				var lAD = _v()
				_(o8C, lAD)
				var aBD = _oz(z, 6, e, s, gg)
				var tCD = _gd(x[17], aBD, e_, d_)
				if (tCD) {
					var eDD = _1z(z, 5, e, s, gg) || {}
					var cur_globalf = gg.f
					lAD.wxXCkey = 3
					tCD(eDD, eDD, lAD, gg)
					gg.f = cur_globalf
				} else _w(aBD, x[17], 37, 16)
			}
			var c9C = _v()
			_(h7C, c9C)
			if (_oz(z, 7, e, s, gg)) {
				c9C.wxVkey = 1
				var bED = _n('loading')
				_rz(z, bED, 'color', 8, e, s, gg)
				_(c9C, bED)
			}
			var oFD = _mz(z, 'view', ['catch:touchmove', 9, 'class', 1, 'style', 2], [], e, s, gg)
			var xGD = _v()
			_(oFD, xGD)
			var oHD = function (cJD, fID, hKD, gg) {
				var cMD = _mz(z, 'picker-column', ['activeClass', 14, 'bind:change', 1, 'class', 2, 'customClass', 3, 'data-index', 4, 'defaultIndex', 5, 'initialOptions', 6, 'itemHeight', 7, 'valueKey', 8, 'visibleItemCount', 9], [], cJD, fID, gg)
				_(hKD, cMD)
				return hKD
			}
			xGD.wxXCkey = 4
			_2z(z, 12, oHD, e, s, gg, xGD, 'item', 'index', 'index')
			_(h7C, oFD)
			var o0C = _v()
			_(h7C, o0C)
			if (_oz(z, 24, e, s, gg)) {
				o0C.wxVkey = 1
				var oND = _v()
				_(o0C, oND)
				var lOD = _oz(z, 26, e, s, gg)
				var aPD = _gd(x[17], lOD, e_, d_)
				if (aPD) {
					var tQD = _1z(z, 25, e, s, gg) || {}
					var cur_globalf = gg.f
					oND.wxXCkey = 3
					aPD(tQD, tQD, oND, gg)
					gg.f = cur_globalf
				} else _w(lOD, x[17], 65, 16)
			}
			o8C.wxXCkey = 1
			c9C.wxXCkey = 1
			c9C.wxXCkey = 3
			o0C.wxXCkey = 1
			_(r, h7C)
			return r
		}
		e_[x[17]] = {
			f: m17,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[18]] = {}
		var m18 = function (e, s, r, gg) {
			var z = gz$gwx_19()
			var bSD = _v()
			_(r, bSD)
			if (_oz(z, 0, e, s, gg)) {
				bSD.wxVkey = 1
				var xUD = _mz(z, 'van-overlay', ['bind:click', 1, 'customStyle', 1, 'duration', 2, 'show', 3, 'zIndex', 4], [], e, s, gg)
				_(bSD, xUD)
			}
			var oTD = _v()
			_(r, oTD)
			if (_oz(z, 6, e, s, gg)) {
				oTD.wxVkey = 1
				var oVD = _mz(z, 'view', ['bind:transitionend', 7, 'class', 1, 'style', 2], [], e, s, gg)
				var cXD = _n('slot')
				_(oVD, cXD)
				var fWD = _v()
				_(oVD, fWD)
				if (_oz(z, 10, e, s, gg)) {
					fWD.wxVkey = 1
					var hYD = _mz(z, 'van-icon', ['bind:tap', 11, 'class', 1, 'name', 2], [], e, s, gg)
					_(fWD, hYD)
				}
				fWD.wxXCkey = 1
				fWD.wxXCkey = 3
				_(oTD, oVD)
			}
			bSD.wxXCkey = 1
			bSD.wxXCkey = 3
			oTD.wxXCkey = 1
			oTD.wxXCkey = 3
			return r
		}
		e_[x[18]] = {
			f: m18,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[19]] = {}
		var m19 = function (e, s, r, gg) {
			var z = gz$gwx_20()
			var c1D = _n('slot')
			_(r, c1D)
			return r
		}
		e_[x[19]] = {
			f: m19,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[20]] = {}
		var m20 = function (e, s, r, gg) {
			var z = gz$gwx_21()
			var l3D = _n('view')
			_rz(z, l3D, 'class', 0, e, s, gg)
			var a4D = _v()
			_(l3D, a4D)
			if (_oz(z, 1, e, s, gg)) {
				a4D.wxVkey = 1
				var e6D = _mz(z, 'view', ['bindtap', 2, 'class', 1], [], e, s, gg)
				var b7D = _n('slot')
				_(e6D, b7D)
				_(a4D, e6D)
			}
			var o8D = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'style', 2], [], e, s, gg)
			var x9D = _v()
			_(o8D, x9D)
			if (_oz(z, 7, e, s, gg)) {
				x9D.wxVkey = 1
				var o0D = _n('slot')
				_rz(z, o0D, 'name', 8, e, s, gg)
				_(x9D, o0D)
			} else {
				x9D.wxVkey = 2
				var fAE = _mz(z, 'van-icon', ['class', 10, 'customClass', 1, 'customStyle', 2, 'name', 3, 'style', 4], [], e, s, gg)
				_(x9D, fAE)
			}
			x9D.wxXCkey = 1
			x9D.wxXCkey = 3
			_(l3D, o8D)
			var t5D = _v()
			_(l3D, t5D)
			if (_oz(z, 15, e, s, gg)) {
				t5D.wxVkey = 1
				var cBE = _mz(z, 'view', ['bindtap', 16, 'class', 1], [], e, s, gg)
				var hCE = _n('slot')
				_(cBE, hCE)
				_(t5D, cBE)
			}
			a4D.wxXCkey = 1
			t5D.wxXCkey = 1
			_(r, l3D)
			return r
		}
		e_[x[20]] = {
			f: m20,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[21]] = {}
		var m21 = function (e, s, r, gg) {
			var z = gz$gwx_22()
			var cEE = _v()
			_(r, cEE)
			var oFE = function (aHE, lGE, tIE, gg) {
				var bKE = _mz(z, 'view', ['class', 2, 'style', 1], [], aHE, lGE, gg)
				var xME = _n('view')
				_rz(z, xME, 'class', 4, aHE, lGE, gg)
				var oNE = _v()
				_(xME, oNE)
				if (_oz(z, 5, aHE, lGE, gg)) {
					oNE.wxVkey = 1
					var fOE = _v()
					_(oNE, fOE)
					if (_oz(z, 6, aHE, lGE, gg)) {
						fOE.wxVkey = 1
						var cPE = _mz(z, 'van-icon', ['color', 7, 'customClass', 1, 'name', 2], [], aHE, lGE, gg)
						_(fOE, cPE)
					} else {
						fOE.wxVkey = 2
					}
					fOE.wxXCkey = 1
					fOE.wxXCkey = 3
				} else {
					oNE.wxVkey = 2
					var hQE = _mz(z, 'van-icon', ['color', 12, 'customClass', 1, 'name', 2], [], aHE, lGE, gg)
					_(oNE, hQE)
				}
				oNE.wxXCkey = 1
				oNE.wxXCkey = 3
				oNE.wxXCkey = 3
				_(bKE, xME)
				var oLE = _v()
				_(bKE, oLE)
				if (_oz(z, 15, aHE, lGE, gg)) {
					oLE.wxVkey = 1
				}
				oLE.wxXCkey = 1
				_(tIE, bKE)
				return tIE
			}
			cEE.wxXCkey = 4
			_2z(z, 0, oFE, e, s, gg, cEE, 'item', 'index', 'index')
			return r
		}
		e_[x[21]] = {
			f: m21,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[22]] = {}
		var m22 = function (e, s, r, gg) {
			var z = gz$gwx_23()
			var cSE = _n('slot')
			_(r, cSE)
			return r
		}
		e_[x[22]] = {
			f: m22,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[23]] = {}
		var m23 = function (e, s, r, gg) {
			var z = gz$gwx_24()
			var lUE = _v()
			_(r, lUE)
			if (_oz(z, 0, e, s, gg)) {
				lUE.wxVkey = 1
				var aVE = _n('slot')
				_(lUE, aVE)
			}
			lUE.wxXCkey = 1
			return r
		}
		e_[x[23]] = {
			f: m23,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[24]] = {}
		var m24 = function (e, s, r, gg) {
			var z = gz$gwx_25()
			var eXE = _n('view')
			_rz(z, eXE, 'class', 0, e, s, gg)
			var bYE = _mz(z, 'van-sticky', ['bind:scroll', 1, 'container', 1, 'disabled', 2, 'offsetTop', 3, 'zIndex', 4], [], e, s, gg)
			var oZE = _n('view')
			_rz(z, oZE, 'class', 6, e, s, gg)
			var x1E = _n('slot')
			_rz(z, x1E, 'name', 7, e, s, gg)
			_(oZE, x1E)
			var o2E = _n('view')
			_rz(z, o2E, 'class', 8, e, s, gg)
			var f3E = _v()
			_(o2E, f3E)
			if (_oz(z, 9, e, s, gg)) {
				f3E.wxVkey = 1
			}
			var c4E = _v()
			_(o2E, c4E)
			var h5E = function (c7E, o6E, o8E, gg) {
				var a0E = _mz(z, 'view', ['bind:tap', 12, 'class', 1, 'data-index', 2, 'style', 3], [], c7E, o6E, gg)
				var tAF = _v()
				_(a0E, tAF)
				if (_oz(z, 16, c7E, o6E, gg)) {
					tAF.wxVkey = 1
					var eBF = _mz(z, 'van-info', ['customClass', 17, 'dot', 1, 'info', 2], [], c7E, o6E, gg)
					_(tAF, eBF)
				}
				tAF.wxXCkey = 1
				tAF.wxXCkey = 3
				_(o8E, a0E)
				return o8E
			}
			c4E.wxXCkey = 4
			_2z(z, 10, h5E, e, s, gg, c4E, 'item', 'index', 'index')
			f3E.wxXCkey = 1
			_(oZE, o2E)
			var bCF = _n('slot')
			_rz(z, bCF, 'name', 20, e, s, gg)
			_(oZE, bCF)
			_(bYE, oZE)
			_(eXE, bYE)
			var oDF = _mz(z, 'view', ['bind:touchcancel', 21, 'bind:touchend', 1, 'bind:touchmove', 2, 'bind:touchstart', 3, 'class', 4], [], e, s, gg)
			var xEF = _n('slot')
			_(oDF, xEF)
			_(eXE, oDF)
			_(r, eXE)
			return r
		}
		e_[x[24]] = {
			f: m24,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[25]] = {}
		var m25 = function (e, s, r, gg) {
			var z = gz$gwx_26()
			var fGF = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
			var hIF = _n('slot')
			_(fGF, hIF)
			var cHF = _v()
			_(fGF, cHF)
			if (_oz(z, 2, e, s, gg)) {
				cHF.wxVkey = 1
				var oJF = _mz(z, 'van-icon', ['bind:click', 3, 'customClass', 1, 'name', 2], [], e, s, gg)
				_(cHF, oJF)
			}
			cHF.wxXCkey = 1
			cHF.wxXCkey = 3
			_(r, fGF)
			return r
		}
		e_[x[25]] = {
			f: m25,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[26]] = {}
		var m26 = function (e, s, r, gg) {
			var z = gz$gwx_27()
			var oLF = _v()
			_(r, oLF)
			if (_oz(z, 0, e, s, gg)) {
				oLF.wxVkey = 1
				var lMF = _mz(z, 'view', ['bind:transitionend', 1, 'class', 1, 'style', 2], [], e, s, gg)
				var aNF = _n('slot')
				_(lMF, aNF)
				_(oLF, lMF)
			}
			oLF.wxXCkey = 1
			return r
		}
		e_[x[26]] = {
			f: m26,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[27]] = {}
		var m27 = function (e, s, r, gg) {
			var z = gz$gwx_28()
			var ePF = _n('view')
			_rz(z, ePF, 'class', 0, e, s, gg)
			var oRF = _v()
			_(ePF, oRF)
			var xSF = function (fUF, oTF, cVF, gg) {
				var oXF = _v()
				_(cVF, oXF)
				if (_oz(z, 3, fUF, oTF, gg)) {
					oXF.wxVkey = 1
					var cYF = _n('view')
					_rz(z, cYF, 'class', 4, fUF, oTF, gg)
					var oZF = _v()
					_(cYF, oZF)
					if (_oz(z, 5, fUF, oTF, gg)) {
						oZF.wxVkey = 1
					} else {
						oZF.wxVkey = 2
						var a2F = _mz(z, 'van-icon', ['class', 7, 'name', 1], [], fUF, oTF, gg)
						_(oZF, a2F)
					}
					var l1F = _v()
					_(cYF, l1F)
					if (_oz(z, 9, fUF, oTF, gg)) {
						l1F.wxVkey = 1
						var t3F = _mz(z, 'van-icon', ['bind:tap', 10, 'class', 1, 'data-index', 2, 'name', 3], [], fUF, oTF, gg)
						_(l1F, t3F)
					}
					oZF.wxXCkey = 1
					oZF.wxXCkey = 3
					l1F.wxXCkey = 1
					l1F.wxXCkey = 3
					_(oXF, cYF)
				}
				oXF.wxXCkey = 1
				oXF.wxXCkey = 3
				return cVF
			}
			oRF.wxXCkey = 4
			_2z(z, 1, xSF, e, s, gg, oRF, 'item', 'index', 'index')
			var bQF = _v()
			_(ePF, bQF)
			if (_oz(z, 14, e, s, gg)) {
				bQF.wxVkey = 1
				var e4F = _mz(z, 'view', ['bind:tap', 15, 'class', 1], [], e, s, gg)
				var b5F = _n('slot')
				_(e4F, b5F)
				_(bQF, e4F)
				var o6F = _mz(z, 'view', ['bind:tap', 17, 'class', 1, 'style', 2], [], e, s, gg)
				var o8F = _mz(z, 'van-icon', ['class', 20, 'name', 1], [], e, s, gg)
				_(o6F, o8F)
				var x7F = _v()
				_(o6F, x7F)
				if (_oz(z, 22, e, s, gg)) {
					x7F.wxVkey = 1
				}
				x7F.wxXCkey = 1
				_(bQF, o6F)
			}
			bQF.wxXCkey = 1
			bQF.wxXCkey = 3
			_(r, ePF)
			return r
		}
		e_[x[27]] = {
			f: m27,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[28]] = {}
		var m28 = function (e, s, r, gg) {
			var z = gz$gwx_29()
			var c0F = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
			var hAG = _v()
			_(c0F, hAG)
			if (_oz(z, 2, e, s, gg)) {
				hAG.wxVkey = 1
				var oBG = _n('slot')
				_(hAG, oBG)
			}
			var cCG = _mz(z, 'node', ['catchadd', 3, 'childs', 1, 'id', 2, 'opts', 3], [], e, s, gg)
			_(c0F, cCG)
			hAG.wxXCkey = 1
			_(r, c0F)
			return r
		}
		e_[x[28]] = {
			f: m28,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[29]] = {}
		d_[x[29]]["el"] = function (e, s, r, gg) {
			var z = gz$gwx_30()
			var b = x[29] + ':el'
			r.wxVkey = b
			gg.f = $gdc(f_["./components/vant/mp-html/node/node.wxml"], "", 1)
			if (p_[b]) {
				_wl(b, x[29]);
				return
			}
			p_[b] = true
			try {
				var oB = _v()
				_(r, oB)
				if (_oz(z, 1, e, s, gg)) {
					oB.wxVkey = 1
					var xC = _v()
					_(oB, xC)
					if (_oz(z, 2, e, s, gg)) {
						xC.wxVkey = 1
					}
					xC.wxXCkey = 1
				} else if (_oz(z, 3, e, s, gg)) {
					oB.wxVkey = 2
				} else if (_oz(z, 4, e, s, gg)) {
					oB.wxVkey = 3
				} else if (_oz(z, 5, e, s, gg)) {
					oB.wxVkey = 4
					var oD = _mz(z, 'view', ['catchtap', 6, 'class', 1, 'data-i', 2, 'hoverClass', 3, 'id', 4, 'style', 5], [], e, s, gg)
					var fE = _mz(z, 'node', ['childs', 12, 'opts', 1, 'style', 2], [], e, s, gg)
					_(oD, fE)
					_(oB, oD)
				} else if (_oz(z, 15, e, s, gg)) {
					oB.wxVkey = 5
				} else if (_oz(z, 16, e, s, gg)) {
					oB.wxVkey = 6
				} else {
					oB.wxVkey = 7
				}
				oB.wxXCkey = 1
				oB.wxXCkey = 3
			} catch (err) {
				p_[b] = false
				throw err
			}
			p_[b] = false
			return r
		}
		var m29 = function (e, s, r, gg) {
			var z = gz$gwx_30()
			var lEG = _v()
			_(r, lEG)
			var aFG = function (eHG, tGG, bIG, gg) {
				var xKG = _v()
				_(bIG, xKG)
				if (_oz(z, 21, eHG, tGG, gg)) {
					xKG.wxVkey = 1
					var oLG = _v()
					_(xKG, oLG)
					var fMG = _oz(z, 23, eHG, tGG, gg)
					var cNG = _gd(x[29], fMG, e_, d_)
					if (cNG) {
						var hOG = _1z(z, 22, eHG, tGG, gg) || {}
						var cur_globalf = gg.f
						oLG.wxXCkey = 3
						cNG(hOG, hOG, oLG, gg)
						gg.f = cur_globalf
					} else _w(fMG, x[29], 6, 2091)
				} else {
					xKG.wxVkey = 2
					var oPG = _v()
					_(xKG, oPG)
					var cQG = function (lSG, oRG, aTG, gg) {
						var eVG = _v()
						_(aTG, eVG)
						if (_oz(z, 28, lSG, oRG, gg)) {
							eVG.wxVkey = 1
							var bWG = _v()
							_(eVG, bWG)
							var oXG = _oz(z, 30, lSG, oRG, gg)
							var xYG = _gd(x[29], oXG, e_, d_)
							if (xYG) {
								var oZG = _1z(z, 29, lSG, oRG, gg) || {}
								var cur_globalf = gg.f
								bWG.wxXCkey = 3
								xYG(oZG, oZG, bWG, gg)
								gg.f = cur_globalf
							} else _w(oXG, x[29], 6, 2355)
						} else {
							eVG.wxVkey = 2
							var f1G = _v()
							_(eVG, f1G)
							var c2G = function (o4G, h3G, c5G, gg) {
								var l7G = _v()
								_(c5G, l7G)
								if (_oz(z, 35, o4G, h3G, gg)) {
									l7G.wxVkey = 1
									var a8G = _v()
									_(l7G, a8G)
									var t9G = _oz(z, 37, o4G, h3G, gg)
									var e0G = _gd(x[29], t9G, e_, d_)
									if (e0G) {
										var bAH = _1z(z, 36, o4G, h3G, gg) || {}
										var cur_globalf = gg.f
										a8G.wxXCkey = 3
										e0G(bAH, bAH, a8G, gg)
										gg.f = cur_globalf
									} else _w(t9G, x[29], 6, 2623)
								} else {
									l7G.wxVkey = 2
									var oBH = _v()
									_(l7G, oBH)
									var xCH = function (fEH, oDH, cFH, gg) {
										var oHH = _v()
										_(cFH, oHH)
										if (_oz(z, 42, fEH, oDH, gg)) {
											oHH.wxVkey = 1
											var cIH = _v()
											_(oHH, cIH)
											var oJH = _oz(z, 44, fEH, oDH, gg)
											var lKH = _gd(x[29], oJH, e_, d_)
											if (lKH) {
												var aLH = _1z(z, 43, fEH, oDH, gg) || {}
												var cur_globalf = gg.f
												cIH.wxXCkey = 3
												lKH(aLH, aLH, cIH, gg)
												gg.f = cur_globalf
											} else _w(oJH, x[29], 6, 2898)
										} else {
											oHH.wxVkey = 2
											var tMH = _v()
											_(oHH, tMH)
											var eNH = function (oPH, bOH, xQH, gg) {
												var fSH = _v()
												_(xQH, fSH)
												if (_oz(z, 49, oPH, bOH, gg)) {
													fSH.wxVkey = 1
													var cTH = _v()
													_(fSH, cTH)
													var hUH = _oz(z, 51, oPH, bOH, gg)
													var oVH = _gd(x[29], hUH, e_, d_)
													if (oVH) {
														var cWH = _1z(z, 50, oPH, bOH, gg) || {}
														var cur_globalf = gg.f
														cTH.wxXCkey = 3
														oVH(cWH, cWH, cTH, gg)
														gg.f = cur_globalf
													} else _w(hUH, x[29], 6, 3180)
												} else {
													fSH.wxVkey = 2
													var oXH = _mz(z, 'node', ['childs', 52, 'class', 1, 'id', 2, 'opts', 3, 'style', 4], [], oPH, bOH, gg)
													_(fSH, oXH)
												}
												fSH.wxXCkey = 1
												fSH.wxXCkey = 3
												return xQH
											}
											tMH.wxXCkey = 4
											_2z(z, 47, eNH, fEH, oDH, gg, tMH, 'n5', 'i5', 'i5')
										}
										oHH.wxXCkey = 1
										oHH.wxXCkey = 3
										return cFH
									}
									oBH.wxXCkey = 4
									_2z(z, 40, xCH, o4G, h3G, gg, oBH, 'n4', 'i4', 'i4')
								}
								l7G.wxXCkey = 1
								l7G.wxXCkey = 3
								return c5G
							}
							f1G.wxXCkey = 4
							_2z(z, 33, c2G, lSG, oRG, gg, f1G, 'n3', 'i3', 'i3')
						}
						eVG.wxXCkey = 1
						eVG.wxXCkey = 3
						return aTG
					}
					oPG.wxXCkey = 4
					_2z(z, 26, cQG, eHG, tGG, gg, oPG, 'n2', 'i2', 'i2')
				}
				xKG.wxXCkey = 1
				xKG.wxXCkey = 3
				return bIG
			}
			lEG.wxXCkey = 4
			_2z(z, 19, aFG, e, s, gg, lEG, 'n1', 'i1', 'i1')
			return r
		}
		e_[x[29]] = {
			f: m29,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[30]] = {}
		var m30 = function (e, s, r, gg) {
			var z = gz$gwx_31()
			var aZH = _n('view')
			_rz(z, aZH, 'class', 0, e, s, gg)
			var t1H = _mz(z, 'nav-bar', ['bind_init', 1, 'haveBack', 1, 'title', 2, 'type', 3], [], e, s, gg)
			_(aZH, t1H)
			var e2H = _n('view')
			_rz(z, e2H, 'class', 5, e, s, gg)
			var b3H = _mz(z, 'view', ['bindtap', 6, 'class', 1, 'data-wpy-evt', 2], [], e, s, gg)
			var o4H = _mz(z, 'van-icon', ['bind_init', 9, 'name', 1], [], e, s, gg)
			_(b3H, o4H)
			_(e2H, b3H)
			var x5H = _n('van-cell-group')
			_rz(z, x5H, 'bind_init', 11, e, s, gg)
			var o6H = _v()
			_(x5H, o6H)
			if (_oz(z, 12, e, s, gg)) {
				o6H.wxVkey = 1
				var h9H = _mz(z, 'van-cell', ['isLink', -1, 'bind_init', 13, 'bindtap', 1, 'data-wpy-evt', 2, 'title', 3], [], e, s, gg)
				_(o6H, h9H)
			} else {
				o6H.wxVkey = 2
				var o0H = _mz(z, 'van-cell', ['isLink', -1, 'bind_init', 17, 'bindtap', 1, 'data-wpy-evt', 2, 'title', 3], [], e, s, gg)
				_(o6H, o0H)
			}
			var f7H = _v()
			_(x5H, f7H)
			if (_oz(z, 21, e, s, gg)) {
				f7H.wxVkey = 1
				var cAI = _mz(z, 'van-cell', ['isLink', -1, 'bind_init', 22, 'bindtap', 1, 'data-wpy-evt', 2, 'title', 3], [], e, s, gg)
				_(f7H, cAI)
			} else {
				f7H.wxVkey = 2
				var oBI = _mz(z, 'van-cell', ['isLink', -1, 'bind_init', 26, 'bindtap', 1, 'data-wpy-evt', 2, 'title', 3], [], e, s, gg)
				_(f7H, oBI)
			}
			var c8H = _v()
			_(x5H, c8H)
			if (_oz(z, 30, e, s, gg)) {
				c8H.wxVkey = 1
				var lCI = _mz(z, 'van-cell', ['bind_init', 31, 'bindtap', 1, 'data-wpy-evt', 2, 'title', 3], [], e, s, gg)
				_(c8H, lCI)
			} else {
				c8H.wxVkey = 2
				var aDI = _mz(z, 'van-cell', ['isLink', -1, 'bind_init', 35, 'bindtap', 1, 'data-wpy-evt', 2, 'title', 3], [], e, s, gg)
				_(c8H, aDI)
			}
			o6H.wxXCkey = 1
			o6H.wxXCkey = 3
			o6H.wxXCkey = 3
			f7H.wxXCkey = 1
			f7H.wxXCkey = 3
			f7H.wxXCkey = 3
			c8H.wxXCkey = 1
			c8H.wxXCkey = 3
			c8H.wxXCkey = 3
			_(e2H, x5H)
			_(aZH, e2H)
			var tEI = _mz(z, 'van-popup', ['useSlot', -1, 'bind_init', 39, 'customStyle', 1, 'position', 2, 'show', 3, 'title', 4], [], e, s, gg)
			var eFI = _n('view')
			_rz(z, eFI, 'style', 44, e, s, gg)
			var bGI = _mz(z, 'mp-html', ['bind_init', 45, 'content', 1], [], e, s, gg)
			_(eFI, bGI)
			var oHI = _n('view')
			_rz(z, oHI, 'style', 47, e, s, gg)
			var xII = _v()
			_(oHI, xII)
			if (_oz(z, 48, e, s, gg)) {
				xII.wxVkey = 1
			}
			var oJI = _v()
			_(oHI, oJI)
			if (_oz(z, 49, e, s, gg)) {
				oJI.wxVkey = 1
			}
			xII.wxXCkey = 1
			oJI.wxXCkey = 1
			_(eFI, oHI)
			_(tEI, eFI)
			_(aZH, tEI)
			var fKI = _mz(z, 'dialog-login', ['bind_init', 50, 'bindfail', 1, 'bindsuccess', 2, 'data-wpy-evt', 3, 'show', 4], [], e, s, gg)
			_(aZH, fKI)
			_(r, aZH)
			return r
		}
		e_[x[30]] = {
			f: m30,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[31]] = {}
		var m31 = function (e, s, r, gg) {
			var z = gz$gwx_32()
			var hMI = _n('view')
			_rz(z, hMI, 'class', 0, e, s, gg)
			var oNI = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(hMI, oNI)
			var cOI = _n('view')
			var oPI = _v()
			_(cOI, oPI)
			if (_oz(z, 3, e, s, gg)) {
				oPI.wxVkey = 1
				var lQI = _mz(z, 'van-icon', ['bind_init', 4, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(oPI, lQI)
			} else {
				oPI.wxVkey = 2
				var aRI = _mz(z, 'van-icon', ['bind_init', 8, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(oPI, aRI)
			}
			oPI.wxXCkey = 1
			oPI.wxXCkey = 3
			oPI.wxXCkey = 3
			_(hMI, cOI)
			_(r, hMI)
			return r
		}
		e_[x[31]] = {
			f: m31,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[32]] = {}
		var m32 = function (e, s, r, gg) {
			var z = gz$gwx_33()
			var eTI = _n('view')
			_rz(z, eTI, 'class', 0, e, s, gg)
			var bUI = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(eTI, bUI)
			var oVI = _n('van-cell-group')
			_rz(z, oVI, 'bind_init', 3, e, s, gg)
			var xWI = _mz(z, 'van-field', ['bind_init', 4, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(oVI, xWI)
			var oXI = _mz(z, 'van-field', ['bind_init', 10, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(oVI, oXI)
			var fYI = _n('view')
			_rz(z, fYI, 'class', 16, e, s, gg)
			var h1I = _mz(z, 'picker', ['bindchange', 17, 'data-wpy-evt', 1, 'mode', 2, 'range', 3, 'value', 4], [], e, s, gg)
			var o2I = _mz(z, 'van-field', ['bind_init', 22, 'bindchange', 1, 'data-wpy-evt', 2, 'inputAlign', 3, 'label', 4, 'placeholder', 5, 'readonly', 6, 'required', 7, 'titleWidth', 8, 'value', 9], [], e, s, gg)
			_(h1I, o2I)
			_(fYI, h1I)
			var c3I = _mz(z, 'picker', ['bindchange', 32, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var o4I = _mz(z, 'van-field', ['bind_init', 36, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'required', 5, 'titleWidth', 6, 'value', 7], [], e, s, gg)
			_(c3I, o4I)
			_(fYI, c3I)
			var cZI = _v()
			_(fYI, cZI)
			if (_oz(z, 44, e, s, gg)) {
				cZI.wxVkey = 1
				var l5I = _mz(z, 'picker', ['bindchange', 45, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var a6I = _mz(z, 'van-field', ['bind_init', 49, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'required', 5, 'titleWidth', 6, 'value', 7], [], e, s, gg)
				_(l5I, a6I)
				_(cZI, l5I)
			}
			var t7I = _mz(z, 'van-field', ['bind_init', 57, 'bindtap', 1, 'data-wpy-evt', 2, 'inputAlign', 3, 'label', 4, 'placeholder', 5, 'readonly', 6, 'titleWidth', 7, 'value', 8], [], e, s, gg)
			_(fYI, t7I)
			var e8I = _mz(z, 'van-popup', ['bind_init', 66, 'customStyle', 1, 'position', 2, 'show', 3], [], e, s, gg)
			var b9I = _mz(z, 'van-area', ['areaList', 70, 'bind_init', 1, 'bindcancel', 2, 'bindconfirm', 3, 'cancelButtonText', 4, 'columnsNum', 5, 'confirmButtonText', 6, 'data-wpy-evt', 7, 'value', 8], [], e, s, gg)
			_(e8I, b9I)
			_(fYI, e8I)
			cZI.wxXCkey = 1
			cZI.wxXCkey = 3
			_(oVI, fYI)
			_(eTI, oVI)
			var o0I = _n('van-cell-group')
			_rz(z, o0I, 'bind_init', 79, e, s, gg)
			var xAJ = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 80, 'bindchange', 1, 'data-wpy-evt', 2, 'inputClass', 3, 'label', 4, 'maxlength', 5, 'placeholder', 6, 'required', 7, 'titleWidth', 8, 'type', 9, 'value', 10], [], e, s, gg)
			_(o0I, xAJ)
			_(eTI, o0I)
			var oBJ = _n('error-hint')
			_rz(z, oBJ, 'bind_init', 91, e, s, gg)
			_(eTI, oBJ)
			var fCJ = _mz(z, 'dialog-location', ['bind_init', 92, 'bindfail', 1, 'bindsuccess', 2, 'data-wpy-evt', 3, 'show', 4], [], e, s, gg)
			_(eTI, fCJ)
			_(r, eTI)
			return r
		}
		e_[x[32]] = {
			f: m32,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[33]] = {}
		var m33 = function (e, s, r, gg) {
			var z = gz$gwx_34()
			var hEJ = _n('view')
			_rz(z, hEJ, 'class', 0, e, s, gg)
			var oFJ = _mz(z, 'nav-bar', ['bind_init', 1, 'haveBack', 1, 'title', 2], [], e, s, gg)
			_(hEJ, oFJ)
			var cGJ = _mz(z, 'van-popup', ['useSlot', -1, 'bind_init', 4, 'customStyle', 1, 'position', 2, 'show', 3, 'title', 4], [], e, s, gg)
			var oHJ = _n('view')
			_rz(z, oHJ, 'style', 9, e, s, gg)
			var lIJ = _mz(z, 'scroll-view', ['bindscrolltolower', 10, 'data-wpy-evt', 1, 'scrollY', 2, 'style', 3], [], e, s, gg)
			var aJJ = _mz(z, 'mp-html', ['bind_init', 14, 'content', 1], [], e, s, gg)
			_(lIJ, aJJ)
			_(oHJ, lIJ)
			var tKJ = _n('view')
			_rz(z, tKJ, 'style', 16, e, s, gg)
			var eLJ = _v()
			_(tKJ, eLJ)
			if (_oz(z, 17, e, s, gg)) {
				eLJ.wxVkey = 1
			}
			var bMJ = _v()
			_(tKJ, bMJ)
			if (_oz(z, 18, e, s, gg)) {
				bMJ.wxVkey = 1
			}
			eLJ.wxXCkey = 1
			bMJ.wxXCkey = 1
			_(oHJ, tKJ)
			_(cGJ, oHJ)
			_(hEJ, cGJ)
			var oNJ = _mz(z, 'dialog-login', ['bind_init', 19, 'bindfail', 1, 'bindsuccess', 2, 'data-wpy-evt', 3, 'show', 4], [], e, s, gg)
			_(hEJ, oNJ)
			_(r, hEJ)
			return r
		}
		e_[x[33]] = {
			f: m33,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[34]] = {}
		var m34 = function (e, s, r, gg) {
			var z = gz$gwx_35()
			var oPJ = _n('view')
			_rz(z, oPJ, 'class', 0, e, s, gg)
			var hSJ = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(oPJ, hSJ)
			var oTJ = _n('van-cell-group')
			var cUJ = _mz(z, 'van-field', ['bind_init', 3, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
			_(oTJ, cUJ)
			var oVJ = _mz(z, 'van-field', ['bind_init', 7, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
			_(oTJ, oVJ)
			_(oPJ, oTJ)
			var lWJ = _n('van-cell-group')
			var aXJ = _mz(z, 'van-field', ['bind_init', 11, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
			_(lWJ, aXJ)
			_(oPJ, lWJ)
			var fQJ = _v()
			_(oPJ, fQJ)
			if (_oz(z, 15, e, s, gg)) {
				fQJ.wxVkey = 1
				var tYJ = _n('van-cell-group')
				var eZJ = _mz(z, 'van-field', ['bind_init', 16, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
				_(tYJ, eZJ)
				var b1J = _mz(z, 'van-field', ['bind_init', 20, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
				_(tYJ, b1J)
				var o2J = _mz(z, 'van-field', ['bind_init', 24, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
				_(tYJ, o2J)
				var x3J = _mz(z, 'van-field', ['bind_init', 28, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
				_(tYJ, x3J)
				_(fQJ, tYJ)
			}
			var cRJ = _v()
			_(oPJ, cRJ)
			if (_oz(z, 32, e, s, gg)) {
				cRJ.wxVkey = 1
				var o4J = _n('van-cell-group')
				var f5J = _mz(z, 'van-field', ['bind_init', 33, 'label', 1, 'readonly', 2, 'value', 3], [], e, s, gg)
				_(o4J, f5J)
				_(cRJ, o4J)
			}
			fQJ.wxXCkey = 1
			fQJ.wxXCkey = 3
			cRJ.wxXCkey = 1
			cRJ.wxXCkey = 3
			_(r, oPJ)
			return r
		}
		e_[x[34]] = {
			f: m34,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[35]] = {}
		var m35 = function (e, s, r, gg) {
			var z = gz$gwx_36()
			var h7J = _n('view')
			_rz(z, h7J, 'class', 0, e, s, gg)
			var aBK = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(h7J, aBK)
			var tCK = _mz(z, 'van-radio-group', ['bind_init', 3, 'value', 1], [], e, s, gg)
			var eDK = _mz(z, 'van-radio', ['bind_init', 5, 'bindtap', 1, 'data-wpy-evt', 2, 'name', 3, 'style', 4], [], e, s, gg)
			_(tCK, eDK)
			_(h7J, tCK)
			var bEK = _n('van-cell-group')
			var oFK = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 10, 'title', 1, 'value', 2], [], e, s, gg)
			_(bEK, oFK)
			var xGK = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 13, 'title', 1, 'value', 2], [], e, s, gg)
			_(bEK, xGK)
			_(h7J, bEK)
			var oHK = _n('van-cell-group')
			var hKK = _mz(z, 'van-field', ['bind_init', 16, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
			_(oHK, hKK)
			var oLK = _mz(z, 'picker', ['bindchange', 25, 'data-wpy-evt', 1, 'mode', 2], [], e, s, gg)
			var cMK = _mz(z, 'van-field', ['bind_init', 28, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'type', 5, 'value', 6], [], e, s, gg)
			_(oLK, cMK)
			_(oHK, oLK)
			var oNK = _mz(z, 'van-field', ['bind_init', 35, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
			_(oHK, oNK)
			var lOK = _mz(z, 'van-field', ['bind_init', 44, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
			_(oHK, lOK)
			var aPK = _mz(z, 'van-field', ['bind_init', 53, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
			_(oHK, aPK)
			var tQK = _mz(z, 'van-field', ['bind_init', 62, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
			_(oHK, tQK)
			var eRK = _mz(z, 'picker', ['bindchange', 71, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var bSK = _mz(z, 'van-field', ['bind_init', 75, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'type', 5, 'value', 6], [], e, s, gg)
			_(eRK, bSK)
			_(oHK, eRK)
			var oTK = _mz(z, 'picker', ['bindchange', 82, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var xUK = _mz(z, 'van-field', ['bind_init', 86, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'type', 5, 'value', 6], [], e, s, gg)
			_(oTK, xUK)
			_(oHK, oTK)
			var fIK = _v()
			_(oHK, fIK)
			if (_oz(z, 93, e, s, gg)) {
				fIK.wxVkey = 1
				var oVK = _n('view')
				var fWK = _mz(z, 'van-field', ['bind_init', 94, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
				_(oVK, fWK)
				var cXK = _mz(z, 'picker', ['bindchange', 102, 'data-wpy-evt', 1, 'mode', 2], [], e, s, gg)
				var hYK = _mz(z, 'van-field', ['bind_init', 105, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'readonly', 6, 'required', 7, 'type', 8, 'value', 9], [], e, s, gg)
				_(cXK, hYK)
				_(oVK, cXK)
				var oZK = _mz(z, 'van-field', ['bind_init', 115, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
				_(oVK, oZK)
				var c1K = _mz(z, 'van-field', ['bind_init', 124, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
				_(oVK, c1K)
				_(fIK, oVK)
			}
			var cJK = _v()
			_(oHK, cJK)
			if (_oz(z, 133, e, s, gg)) {
				cJK.wxVkey = 1
				var o2K = _mz(z, 'van-field', ['bind_init', 134, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
				_(cJK, o2K)
			}
			fIK.wxXCkey = 1
			fIK.wxXCkey = 3
			cJK.wxXCkey = 1
			cJK.wxXCkey = 3
			_(h7J, oHK)
			var l3K = _n('van-cell-group')
			var t5K = _mz(z, 'picker', ['bindchange', 143, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var e6K = _mz(z, 'van-field', ['bind_init', 147, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
			_(t5K, e6K)
			_(l3K, t5K)
			var a4K = _v()
			_(l3K, a4K)
			if (_oz(z, 153, e, s, gg)) {
				a4K.wxVkey = 1
				var b7K = _mz(z, 'picker', ['bindchange', 154, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var o8K = _mz(z, 'van-field', ['bind_init', 158, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(b7K, o8K)
				_(a4K, b7K)
			}
			a4K.wxXCkey = 1
			a4K.wxXCkey = 3
			_(h7J, l3K)
			var o8J = _v()
			_(h7J, o8J)
			if (_oz(z, 164, e, s, gg)) {
				o8J.wxVkey = 1
				var x9K = _n('van-cell-group')
				var o0K = _v()
				_(x9K, o0K)
				if (_oz(z, 165, e, s, gg)) {
					o0K.wxVkey = 1
				}
				var fAL = _v()
				_(x9K, fAL)
				if (_oz(z, 166, e, s, gg)) {
					fAL.wxVkey = 1
				}
				var cBL = _mz(z, 'van-popup', ['bind_init', 167, 'customStyle', 1, 'position', 2, 'show', 3], [], e, s, gg)
				var hCL = _mz(z, 'van-area', ['areaList', 171, 'bind_init', 1, 'bindcancel', 2, 'bindconfirm', 3, 'cancelButtonText', 4, 'columnsNum', 5, 'confirmButtonText', 6, 'data-wpy-evt', 7, 'value', 8], [], e, s, gg)
				_(cBL, hCL)
				_(x9K, cBL)
				o0K.wxXCkey = 1
				fAL.wxXCkey = 1
				_(o8J, x9K)
			}
			var c9J = _v()
			_(h7J, c9J)
			if (_oz(z, 180, e, s, gg)) {
				c9J.wxVkey = 1
				var oDL = _n('view')
				_rz(z, oDL, 'style', 181, e, s, gg)
				var lGL = _mz(z, 'picker', ['bindchange', 182, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var aHL = _mz(z, 'van-field', ['bind_init', 186, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(lGL, aHL)
				_(oDL, lGL)
				var cEL = _v()
				_(oDL, cEL)
				if (_oz(z, 192, e, s, gg)) {
					cEL.wxVkey = 1
					var tIL = _n('view')
					var eJL = _mz(z, 'picker', ['bindchange', 193, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
					var bKL = _mz(z, 'van-field', ['bind_init', 197, 'label', 1, 'placeholder', 2, 'readonly', 3, 'value', 4], [], e, s, gg)
					_(eJL, bKL)
					_(tIL, eJL)
					var oLL = _mz(z, 'van-field', ['bind_init', 202, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
					_(tIL, oLL)
					var xML = _mz(z, 'van-field', ['bind_init', 210, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
					_(tIL, xML)
					var oNL = _mz(z, 'van-field', ['bind_init', 218, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'value', 6], [], e, s, gg)
					_(tIL, oNL)
					_(cEL, tIL)
				}
				var oFL = _v()
				_(oDL, oFL)
				if (_oz(z, 225, e, s, gg)) {
					oFL.wxVkey = 1
					var fOL = _n('view')
					var cPL = _mz(z, 'picker', ['bindchange', 226, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
					var hQL = _mz(z, 'van-field', ['bind_init', 230, 'label', 1, 'placeholder', 2, 'readonly', 3, 'value', 4], [], e, s, gg)
					_(cPL, hQL)
					_(fOL, cPL)
					var oRL = _mz(z, 'van-field', ['bind_init', 235, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
					_(fOL, oRL)
					var cSL = _mz(z, 'van-field', ['bind_init', 243, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'value', 6], [], e, s, gg)
					_(fOL, cSL)
					_(oFL, fOL)
				}
				var oTL = _mz(z, 'picker', ['bindchange', 250, 'data-wpy-evt', 1, 'end', 2, 'mode', 3, 'start', 4, 'value', 5], [], e, s, gg)
				var lUL = _mz(z, 'van-field', ['bind_init', 256, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(oTL, lUL)
				_(oDL, oTL)
				cEL.wxXCkey = 1
				cEL.wxXCkey = 3
				oFL.wxXCkey = 1
				oFL.wxXCkey = 3
				_(c9J, oDL)
			}
			var o0J = _v()
			_(h7J, o0J)
			if (_oz(z, 262, e, s, gg)) {
				o0J.wxVkey = 1
				var aVL = _n('view')
				_rz(z, aVL, 'style', 263, e, s, gg)
				var bYL = _mz(z, 'picker', ['bindchange', 264, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var oZL = _mz(z, 'van-field', ['bind_init', 268, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(bYL, oZL)
				_(aVL, bYL)
				var tWL = _v()
				_(aVL, tWL)
				if (_oz(z, 274, e, s, gg)) {
					tWL.wxVkey = 1
					var x1L = _n('view')
					var o2L = _mz(z, 'picker', ['bindchange', 275, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
					var f3L = _mz(z, 'van-field', ['bind_init', 279, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
					_(o2L, f3L)
					_(x1L, o2L)
					var c4L = _mz(z, 'van-field', ['bind_init', 285, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
					_(x1L, c4L)
					var h5L = _mz(z, 'van-field', ['bind_init', 294, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
					_(x1L, h5L)
					var o6L = _mz(z, 'van-field', ['bind_init', 303, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(x1L, o6L)
					_(tWL, x1L)
				}
				var eXL = _v()
				_(aVL, eXL)
				if (_oz(z, 311, e, s, gg)) {
					eXL.wxVkey = 1
					var c7L = _n('view')
					var o8L = _mz(z, 'picker', ['bindchange', 312, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
					var l9L = _mz(z, 'van-field', ['bind_init', 316, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
					_(o8L, l9L)
					_(c7L, o8L)
					var a0L = _mz(z, 'van-field', ['bind_init', 322, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'type', 7, 'value', 8], [], e, s, gg)
					_(c7L, a0L)
					var tAM = _mz(z, 'van-field', ['bind_init', 331, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(c7L, tAM)
					_(eXL, c7L)
				}
				var eBM = _mz(z, 'picker', ['bindchange', 339, 'data-wpy-evt', 1, 'end', 2, 'mode', 3, 'start', 4, 'value', 5], [], e, s, gg)
				var bCM = _mz(z, 'van-field', ['bind_init', 345, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(eBM, bCM)
				_(aVL, eBM)
				tWL.wxXCkey = 1
				tWL.wxXCkey = 3
				eXL.wxXCkey = 1
				eXL.wxXCkey = 3
				_(o0J, aVL)
			}
			var lAK = _v()
			_(h7J, lAK)
			if (_oz(z, 351, e, s, gg)) {
				lAK.wxVkey = 1
				var oDM = _n('view')
				var oFM = _mz(z, 'van-radio-group', ['bind_init', 352, 'value', 1], [], e, s, gg)
				var fGM = _mz(z, 'van-radio', ['bind_init', 354, 'bindtap', 1, 'data-wpy-evt', 2, 'name', 3, 'style', 4], [], e, s, gg)
				_(oFM, fGM)
				_(oDM, oFM)
				var cHM = _mz(z, 'picker', ['bindchange', 359, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var hIM = _mz(z, 'van-field', ['bind_init', 363, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(cHM, hIM)
				_(oDM, cHM)
				var xEM = _v()
				_(oDM, xEM)
				if (_oz(z, 369, e, s, gg)) {
					xEM.wxVkey = 1
					var oJM = _mz(z, 'van-field', ['bind_init', 370, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(xEM, oJM)
				}
				var cKM = _mz(z, 'van-radio-group', ['bind_init', 378, 'value', 1], [], e, s, gg)
				var oLM = _mz(z, 'van-radio', ['bind_init', 380, 'bindtap', 1, 'data-wpy-evt', 2, 'name', 3, 'style', 4], [], e, s, gg)
				_(cKM, oLM)
				_(oDM, cKM)
				xEM.wxXCkey = 1
				xEM.wxXCkey = 3
				_(lAK, oDM)
			}
			o8J.wxXCkey = 1
			o8J.wxXCkey = 3
			c9J.wxXCkey = 1
			c9J.wxXCkey = 3
			o0J.wxXCkey = 1
			o0J.wxXCkey = 3
			lAK.wxXCkey = 1
			lAK.wxXCkey = 3
			_(r, h7J)
			return r
		}
		e_[x[35]] = {
			f: m35,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[36]] = {}
		var m36 = function (e, s, r, gg) {
			var z = gz$gwx_37()
			var aNM = _mz(z, 'nav-bar', ['bind_init', 0, 'title', 1], [], e, s, gg)
			_(r, aNM)
			return r
		}
		e_[x[36]] = {
			f: m36,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[37]] = {}
		var m37 = function (e, s, r, gg) {
			var z = gz$gwx_38()
			var ePM = _n('view')
			_rz(z, ePM, 'class', 0, e, s, gg)
			var bQM = _mz(z, 'nav-bar', ['bind_init', 1, 'haveBack', 1, 'title', 2], [], e, s, gg)
			_(ePM, bQM)
			var oRM = _mz(z, 'refresher-list', ['bind_init', 4, 'bindload', 1, 'bindrefresh', 2, 'data-wpy-evt', 3, 'emptyText', 4, 'haveMore', 5, 'height', 6, 'isEmpty', 7, 'isRefreshing', 8], [], e, s, gg)
			var xSM = _v()
			_(oRM, xSM)
			var oTM = function (cVM, fUM, hWM, gg) {
				var cYM = _n('view')
				_rz(z, cYM, 'class', 17, cVM, fUM, gg)
				var oZM = _v()
				_(cYM, oZM)
				if (_oz(z, 18, cVM, fUM, gg)) {
					oZM.wxVkey = 1
				}
				var l1M = _v()
				_(cYM, l1M)
				if (_oz(z, 19, cVM, fUM, gg)) {
					l1M.wxVkey = 1
				}
				var a2M = _v()
				_(cYM, a2M)
				if (_oz(z, 20, cVM, fUM, gg)) {
					a2M.wxVkey = 1
				}
				var t3M = _n('view')
				_rz(z, t3M, 'class', 21, cVM, fUM, gg)
				var e4M = _v()
				_(t3M, e4M)
				if (_oz(z, 22, cVM, fUM, gg)) {
					e4M.wxVkey = 1
				}
				var b5M = _v()
				_(t3M, b5M)
				if (_oz(z, 23, cVM, fUM, gg)) {
					b5M.wxVkey = 1
				}
				e4M.wxXCkey = 1
				b5M.wxXCkey = 1
				_(cYM, t3M)
				oZM.wxXCkey = 1
				l1M.wxXCkey = 1
				a2M.wxXCkey = 1
				_(hWM, cYM)
				return hWM
			}
			xSM.wxXCkey = 2
			_2z(z, 15, oTM, e, s, gg, xSM, 'item', 'index', 'index')
			_(ePM, oRM)
			_(r, ePM)
			return r
		}
		e_[x[37]] = {
			f: m37,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[38]] = {}
		var m38 = function (e, s, r, gg) {
			var z = gz$gwx_39()
			var x7M = _n('view')
			_rz(z, x7M, 'class', 0, e, s, gg)
			var o8M = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(x7M, o8M)
			var f9M = _n('van-cell-group')
			var c0M = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(f9M, c0M)
			var hAN = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(f9M, hAN)
			_(x7M, f9M)
			_(r, x7M)
			return r
		}
		e_[x[38]] = {
			f: m38,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[39]] = {}
		var m39 = function (e, s, r, gg) {
			var z = gz$gwx_40()
			var cCN = _n('view')
			_rz(z, cCN, 'class', 0, e, s, gg)
			var oDN = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(cCN, oDN)
			var lEN = _n('van-cell-group')
			var aFN = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(lEN, aFN)
			var tGN = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(lEN, tGN)
			_(cCN, lEN)
			var eHN = _mz(z, 'mp-html', ['bind_init', 9, 'content', 1], [], e, s, gg)
			_(cCN, eHN)
			_(r, cCN)
			return r
		}
		e_[x[39]] = {
			f: m39,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[40]] = {}
		var m40 = function (e, s, r, gg) {
			var z = gz$gwx_41()
			var oJN = _n('view')
			_rz(z, oJN, 'class', 0, e, s, gg)
			var xKN = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(oJN, xKN)
			var oLN = _n('van-cell-group')
			var fMN = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(oLN, fMN)
			var cNN = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(oLN, cNN)
			_(oJN, oLN)
			var hON = _mz(z, 'van-tabs', ['bind_init', 9, 'color', 1], [], e, s, gg)
			var oPN = _v()
			_(hON, oPN)
			var cQN = function (lSN, oRN, aTN, gg) {
				var eVN = _mz(z, 'van-tab', ['bind_init', 15, 'title', 1], [], lSN, oRN, gg)
				var bWN = _v()
				_(eVN, bWN)
				if (_oz(z, 17, lSN, oRN, gg)) {
					bWN.wxVkey = 1
				}
				var oXN = _v()
				_(eVN, oXN)
				if (_oz(z, 18, lSN, oRN, gg)) {
					oXN.wxVkey = 1
				}
				bWN.wxXCkey = 1
				oXN.wxXCkey = 1
				_(aTN, eVN)
				return aTN
			}
			oPN.wxXCkey = 4
			_2z(z, 13, cQN, e, s, gg, oPN, 'idx', 'index', 'index')
			_(oJN, hON)
			_(r, oJN)
			return r
		}
		e_[x[40]] = {
			f: m40,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[41]] = {}
		var m41 = function (e, s, r, gg) {
			var z = gz$gwx_42()
			var oZN = _n('view')
			_rz(z, oZN, 'class', 0, e, s, gg)
			var f1N = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(oZN, f1N)
			var c2N = _n('van-cell-group')
			var h3N = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(c2N, h3N)
			var o4N = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(c2N, o4N)
			var c5N = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 9, 'title', 1, 'value', 2], [], e, s, gg)
			_(c2N, c5N)
			var o6N = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 12, 'title', 1, 'value', 2], [], e, s, gg)
			_(c2N, o6N)
			_(oZN, c2N)
			_(r, oZN)
			return r
		}
		e_[x[41]] = {
			f: m41,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[42]] = {}
		var m42 = function (e, s, r, gg) {
			var z = gz$gwx_43()
			var a8N = _n('view')
			_rz(z, a8N, 'class', 0, e, s, gg)
			var t9N = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(a8N, t9N)
			var e0N = _n('van-cell-group')
			_rz(z, e0N, 'style', 3, e, s, gg)
			var bAO = _n('van-cell-group')
			var oBO = _mz(z, 'van-field', ['bind_init', 4, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(bAO, oBO)
			var xCO = _mz(z, 'van-field', ['bind_init', 10, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(bAO, xCO)
			_(e0N, bAO)
			_(a8N, e0N)
			var oDO = _n('van-cell-group')
			var cFO = _mz(z, 'picker', ['bindchange', 16, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var hGO = _mz(z, 'van-field', ['bind_init', 20, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'value', 5], [], e, s, gg)
			_(cFO, hGO)
			_(oDO, cFO)
			var fEO = _v()
			_(oDO, fEO)
			if (_oz(z, 26, e, s, gg)) {
				fEO.wxVkey = 1
				var oHO = _n('view')
				var cIO = _mz(z, 'picker', ['bindchange', 27, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var oJO = _mz(z, 'van-field', ['bind_init', 31, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'required', 5, 'value', 6], [], e, s, gg)
				_(cIO, oJO)
				_(oHO, cIO)
				var lKO = _mz(z, 'picker', ['bindchange', 38, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var aLO = _mz(z, 'van-field', ['bind_init', 42, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'required', 5, 'value', 6], [], e, s, gg)
				_(lKO, aLO)
				_(oHO, lKO)
				_(fEO, oHO)
			}
			fEO.wxXCkey = 1
			fEO.wxXCkey = 3
			_(a8N, oDO)
			_(r, a8N)
			return r
		}
		e_[x[42]] = {
			f: m42,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[43]] = {}
		var m43 = function (e, s, r, gg) {
			var z = gz$gwx_44()
			var eNO = _n('view')
			_rz(z, eNO, 'class', 0, e, s, gg)
			var bOO = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(eNO, bOO)
			var oPO = _n('view')
			var xQO = _v()
			_(oPO, xQO)
			if (_oz(z, 3, e, s, gg)) {
				xQO.wxVkey = 1
				var oRO = _mz(z, 'van-icon', ['bind_init', 4, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(xQO, oRO)
			} else {
				xQO.wxVkey = 2
				var fSO = _mz(z, 'van-icon', ['bind_init', 8, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(xQO, fSO)
			}
			xQO.wxXCkey = 1
			xQO.wxXCkey = 3
			xQO.wxXCkey = 3
			_(eNO, oPO)
			_(r, eNO)
			return r
		}
		e_[x[43]] = {
			f: m43,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[44]] = {}
		var m44 = function (e, s, r, gg) {
			var z = gz$gwx_45()
			var hUO = _v()
			_(r, hUO)
			if (_oz(z, 0, e, s, gg)) {
				hUO.wxVkey = 1
				var oVO = _n('view')
				_rz(z, oVO, 'class', 1, e, s, gg)
				var oXO = _mz(z, 'nav-bar', ['bind_init', 2, 'title', 1], [], e, s, gg)
				_(oVO, oXO)
				var lYO = _n('van-cell-group')
				var t1O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 4, 'title', 1, 'value', 2], [], e, s, gg)
				_(lYO, t1O)
				var e2O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 7, 'title', 1, 'value', 2], [], e, s, gg)
				_(lYO, e2O)
				var b3O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 10, 'title', 1, 'value', 2], [], e, s, gg)
				_(lYO, b3O)
				var aZO = _v()
				_(lYO, aZO)
				if (_oz(z, 13, e, s, gg)) {
					aZO.wxVkey = 1
					var o4O = _n('view')
					var x5O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 14, 'title', 1, 'value', 2], [], e, s, gg)
					_(o4O, x5O)
					var o6O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 17, 'title', 1, 'value', 2], [], e, s, gg)
					_(o4O, o6O)
					_(aZO, o4O)
				}
				aZO.wxXCkey = 1
				aZO.wxXCkey = 3
				_(oVO, lYO)
				var f7O = _n('van-cell-group')
				var c8O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 20, 'title', 1], [], e, s, gg)
				var h9O = _mz(z, 'van-steps', ['active', 22, 'activeColor', 1, 'bind_init', 2, 'direction', 3, 'steps', 4], [], e, s, gg)
				_(c8O, h9O)
				_(f7O, c8O)
				var o0O = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 27, 'title', 1, 'value', 2], [], e, s, gg)
				_(f7O, o0O)
				var cAP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 30, 'title', 1, 'value', 2], [], e, s, gg)
				_(f7O, cAP)
				_(oVO, f7O)
				var cWO = _v()
				_(oVO, cWO)
				if (_oz(z, 33, e, s, gg)) {
					cWO.wxVkey = 1
				}
				cWO.wxXCkey = 1
				_(hUO, oVO)
			} else {
				hUO.wxVkey = 2
				var oBP = _n('view')
				_rz(z, oBP, 'class', 34, e, s, gg)
				var aDP = _mz(z, 'nav-bar', ['bind_init', 35, 'title', 1], [], e, s, gg)
				_(oBP, aDP)
				var tEP = _n('van-cell-group')
				var bGP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 37, 'title', 1, 'titleWidth', 2, 'value', 3], [], e, s, gg)
				_(tEP, bGP)
				var oHP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 41, 'title', 1, 'titleWidth', 2, 'value', 3], [], e, s, gg)
				_(tEP, oHP)
				var xIP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 45, 'title', 1, 'titleWidth', 2, 'value', 3], [], e, s, gg)
				_(tEP, xIP)
				var eFP = _v()
				_(tEP, eFP)
				if (_oz(z, 49, e, s, gg)) {
					eFP.wxVkey = 1
					var oJP = _n('view')
					var fKP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 50, 'title', 1, 'value', 2], [], e, s, gg)
					_(oJP, fKP)
					var cLP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 53, 'title', 1, 'value', 2], [], e, s, gg)
					_(oJP, cLP)
					_(eFP, oJP)
				}
				eFP.wxXCkey = 1
				eFP.wxXCkey = 3
				_(oBP, tEP)
				var hMP = _n('van-cell-group')
				var oNP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 56, 'title', 1], [], e, s, gg)
				var cOP = _mz(z, 'van-steps', ['active', 58, 'activeColor', 1, 'bind_init', 2, 'direction', 3, 'steps', 4], [], e, s, gg)
				_(oNP, cOP)
				_(hMP, oNP)
				var oPP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 63, 'title', 1, 'titleWidth', 2, 'value', 3], [], e, s, gg)
				_(hMP, oPP)
				var lQP = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 67, 'title', 1, 'titleWidth', 2, 'value', 3], [], e, s, gg)
				_(hMP, lQP)
				_(oBP, hMP)
				var lCP = _v()
				_(oBP, lCP)
				if (_oz(z, 71, e, s, gg)) {
					lCP.wxVkey = 1
				}
				lCP.wxXCkey = 1
				_(hUO, oBP)
			}
			hUO.wxXCkey = 1
			hUO.wxXCkey = 3
			hUO.wxXCkey = 3
			return r
		}
		e_[x[44]] = {
			f: m44,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[45]] = {}
		var m45 = function (e, s, r, gg) {
			var z = gz$gwx_46()
			var tSP = _n('view')
			_rz(z, tSP, 'class', 0, e, s, gg)
			var eTP = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(tSP, eTP)
			var bUP = _n('van-cell-group')
			var oVP = _mz(z, 'van-cell', ['bind_init', 3, 'icon', 1], [], e, s, gg)
			_(bUP, oVP)
			var xWP = _v()
			_(bUP, xWP)
			var oXP = function (cZP, fYP, h1P, gg) {
				var c3P = _n('view')
				_rz(z, c3P, 'style', 9, cZP, fYP, gg)
				var o4P = _mz(z, 'van-cell', ['bind_init', 10, 'style', 1], [], cZP, fYP, gg)
				var l5P = _n('view')
				_rz(z, l5P, 'slot', 12, cZP, fYP, gg)
				var a6P = _v()
				_(l5P, a6P)
				if (_oz(z, 13, cZP, fYP, gg)) {
					a6P.wxVkey = 1
					var b9P = _mz(z, 'van-tag', ['bind_init', 14, 'color', 1], [], cZP, fYP, gg)
					_(a6P, b9P)
				}
				var t7P = _v()
				_(l5P, t7P)
				if (_oz(z, 16, cZP, fYP, gg)) {
					t7P.wxVkey = 1
					var o0P = _mz(z, 'van-tag', ['bind_init', 17, 'color', 1], [], cZP, fYP, gg)
					_(t7P, o0P)
				}
				var e8P = _v()
				_(l5P, e8P)
				if (_oz(z, 19, cZP, fYP, gg)) {
					e8P.wxVkey = 1
					var xAQ = _mz(z, 'van-tag', ['bind_init', 20, 'color', 1], [], cZP, fYP, gg)
					_(e8P, xAQ)
				}
				a6P.wxXCkey = 1
				a6P.wxXCkey = 3
				t7P.wxXCkey = 1
				t7P.wxXCkey = 3
				e8P.wxXCkey = 1
				e8P.wxXCkey = 3
				_(o4P, l5P)
				_(c3P, o4P)
				var oBQ = _n('view')
				_rz(z, oBQ, 'slot', 22, cZP, fYP, gg)
				var fCQ = _v()
				_(oBQ, fCQ)
				if (_oz(z, 23, cZP, fYP, gg)) {
					fCQ.wxVkey = 1
					var oFQ = _mz(z, 'van-field', ['autosize', -1, 'placeholder', -1, 'showWordLimit', -1, 'bind_init', 24, 'disabled', 1, 'id', 2, 'maxlength', 3, 'titleWidth', 4, 'type', 5, 'value', 6], [], cZP, fYP, gg)
					_(fCQ, oFQ)
				}
				var cDQ = _v()
				_(oBQ, cDQ)
				if (_oz(z, 31, cZP, fYP, gg)) {
					cDQ.wxVkey = 1
					var cGQ = _mz(z, 'van-field', ['autosize', -1, 'placeholder', -1, 'showWordLimit', -1, 'bind_init', 32, 'disabled', 1, 'id', 2, 'maxlength', 3, 'titleWidth', 4, 'type', 5, 'value', 6], [], cZP, fYP, gg)
					_(cDQ, cGQ)
				}
				var hEQ = _v()
				_(oBQ, hEQ)
				if (_oz(z, 39, cZP, fYP, gg)) {
					hEQ.wxVkey = 1
					var oHQ = _mz(z, 'van-field', ['autosize', -1, 'placeholder', -1, 'showWordLimit', -1, 'bind_init', 40, 'disabled', 1, 'id', 2, 'maxlength', 3, 'titleWidth', 4, 'type', 5, 'value', 6], [], cZP, fYP, gg)
					_(hEQ, oHQ)
				}
				fCQ.wxXCkey = 1
				fCQ.wxXCkey = 3
				cDQ.wxXCkey = 1
				cDQ.wxXCkey = 3
				hEQ.wxXCkey = 1
				hEQ.wxXCkey = 3
				_(c3P, oBQ)
				_(h1P, c3P)
				return h1P
			}
			xWP.wxXCkey = 4
			_2z(z, 7, oXP, e, s, gg, xWP, 'item', 'index', 'index')
			_(tSP, bUP)
			_(r, tSP)
			return r
		}
		e_[x[45]] = {
			f: m45,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[46]] = {}
		var m46 = function (e, s, r, gg) {
			var z = gz$gwx_47()
			var aJQ = _n('view')
			_rz(z, aJQ, 'class', 0, e, s, gg)
			var tKQ = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(aJQ, tKQ)
			var eLQ = _n('van-cell-group')
			var bMQ = _mz(z, 'picker', ['bindchange', 3, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var oNQ = _mz(z, 'van-field', ['bind_init', 7, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'required', 5, 'value', 6], [], e, s, gg)
			_(bMQ, oNQ)
			_(eLQ, bMQ)
			var xOQ = _mz(z, 'picker', ['bindchange', 14, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var oPQ = _mz(z, 'van-field', ['bind_init', 18, 'inputAlign', 1, 'label', 2, 'placeholder', 3, 'readonly', 4, 'required', 5, 'value', 6], [], e, s, gg)
			_(xOQ, oPQ)
			_(eLQ, xOQ)
			_(aJQ, eLQ)
			_(r, aJQ)
			return r
		}
		e_[x[46]] = {
			f: m46,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[47]] = {}
		var m47 = function (e, s, r, gg) {
			var z = gz$gwx_48()
			var cRQ = _n('view')
			_rz(z, cRQ, 'class', 0, e, s, gg)
			var hSQ = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(cRQ, hSQ)
			var oTQ = _n('van-cell-group')
			var cUQ = _mz(z, 'van-cell', ['bind_init', 3, 'icon', 1], [], e, s, gg)
			_(oTQ, cUQ)
			var oVQ = _v()
			_(oTQ, oVQ)
			var lWQ = function (tYQ, aXQ, eZQ, gg) {
				var o2Q = _n('view')
				var x3Q = _mz(z, 'van-cell', ['bind_init', 9, 'style', 1], [], tYQ, aXQ, gg)
				var o4Q = _mz(z, 'view', ['s', -1, 'slot', 11], [], tYQ, aXQ, gg)
				var f5Q = _v()
				_(o4Q, f5Q)
				if (_oz(z, 12, tYQ, aXQ, gg)) {
					f5Q.wxVkey = 1
					var o8Q = _mz(z, 'van-tag', ['bind_init', 13, 'color', 1], [], tYQ, aXQ, gg)
					_(f5Q, o8Q)
				}
				var c6Q = _v()
				_(o4Q, c6Q)
				if (_oz(z, 15, tYQ, aXQ, gg)) {
					c6Q.wxVkey = 1
					var c9Q = _mz(z, 'van-tag', ['bind_init', 16, 'color', 1], [], tYQ, aXQ, gg)
					_(c6Q, c9Q)
				}
				var h7Q = _v()
				_(o4Q, h7Q)
				if (_oz(z, 18, tYQ, aXQ, gg)) {
					h7Q.wxVkey = 1
					var o0Q = _mz(z, 'van-tag', ['bind_init', 19, 'color', 1], [], tYQ, aXQ, gg)
					_(h7Q, o0Q)
				}
				f5Q.wxXCkey = 1
				f5Q.wxXCkey = 3
				c6Q.wxXCkey = 1
				c6Q.wxXCkey = 3
				h7Q.wxXCkey = 1
				h7Q.wxXCkey = 3
				_(x3Q, o4Q)
				_(o2Q, x3Q)
				var lAR = _n('view')
				_rz(z, lAR, 'slot', 21, tYQ, aXQ, gg)
				var aBR = _v()
				_(lAR, aBR)
				if (_oz(z, 22, tYQ, aXQ, gg)) {
					aBR.wxVkey = 1
					var bER = _mz(z, 'van-field', ['bind_init', 23, 'bindtap', 1, 'data-wpy-evt', 2, 'data-wpytap-a', 3, 'id', 4, 'label', 5, 'placeholder', 6, 'readonly', 7, 'required', 8, 'titleWidth', 9, 'value', 10], [], tYQ, aXQ, gg)
					_(aBR, bER)
					var oFR = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 34, 'bindchange', 1, 'data-wpy-evt', 2, 'data-wpychange-a', 3, 'id', 4, 'inputClass', 5, 'maxlength', 6, 'placeholder', 7, 'required', 8, 'titleWidth', 9, 'type', 10, 'value', 11], [], tYQ, aXQ, gg)
					_(aBR, oFR)
				}
				var tCR = _v()
				_(lAR, tCR)
				if (_oz(z, 46, tYQ, aXQ, gg)) {
					tCR.wxVkey = 1
					var xGR = _mz(z, 'van-field', ['bind_init', 47, 'bindtap', 1, 'data-wpy-evt', 2, 'data-wpytap-a', 3, 'id', 4, 'label', 5, 'placeholder', 6, 'readonly', 7, 'required', 8, 'titleWidth', 9, 'value', 10], [], tYQ, aXQ, gg)
					_(tCR, xGR)
					var oHR = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 58, 'bindchange', 1, 'data-wpy-evt', 2, 'data-wpychange-a', 3, 'id', 4, 'inputClass', 5, 'maxlength', 6, 'placeholder', 7, 'required', 8, 'titleWidth', 9, 'type', 10, 'value', 11], [], tYQ, aXQ, gg)
					_(tCR, oHR)
				}
				var eDR = _v()
				_(lAR, eDR)
				if (_oz(z, 70, tYQ, aXQ, gg)) {
					eDR.wxVkey = 1
					var fIR = _mz(z, 'van-field', ['bind_init', 71, 'bindtap', 1, 'data-wpy-evt', 2, 'data-wpytap-a', 3, 'id', 4, 'label', 5, 'placeholder', 6, 'readonly', 7, 'required', 8, 'titleWidth', 9, 'value', 10], [], tYQ, aXQ, gg)
					_(eDR, fIR)
					var cJR = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 82, 'bindchange', 1, 'data-wpy-evt', 2, 'data-wpychange-a', 3, 'id', 4, 'inputClass', 5, 'maxlength', 6, 'placeholder', 7, 'required', 8, 'titleWidth', 9, 'type', 10, 'value', 11], [], tYQ, aXQ, gg)
					_(eDR, cJR)
				}
				aBR.wxXCkey = 1
				aBR.wxXCkey = 3
				tCR.wxXCkey = 1
				tCR.wxXCkey = 3
				eDR.wxXCkey = 1
				eDR.wxXCkey = 3
				_(o2Q, lAR)
				_(eZQ, o2Q)
				return eZQ
			}
			oVQ.wxXCkey = 4
			_2z(z, 7, lWQ, e, s, gg, oVQ, 'item', 'index', 'index')
			var hKR = _mz(z, 'van-popup', ['bind_init', 94, 'customStyle', 1, 'position', 2, 'show', 3], [], e, s, gg)
			var oLR = _mz(z, 'van-area', ['areaList', 98, 'bind_init', 1, 'bindcancel', 2, 'bindconfirm', 3, 'cancelButtonText', 4, 'columnsNum', 5, 'confirmButtonText', 6, 'data-wpy-evt', 7, 'value', 8], [], e, s, gg)
			_(hKR, oLR)
			_(oTQ, hKR)
			_(cRQ, oTQ)
			_(r, cRQ)
			return r
		}
		e_[x[47]] = {
			f: m47,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[48]] = {}
		var m48 = function (e, s, r, gg) {
			var z = gz$gwx_49()
			var oNR = _n('view')
			_rz(z, oNR, 'class', 0, e, s, gg)
			var lOR = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(oNR, lOR)
			var aPR = _n('van-cell-group')
			var tQR = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(aPR, tQR)
			var eRR = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(aPR, eRR)
			var bSR = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 9, 'title', 1, 'value', 2], [], e, s, gg)
			_(aPR, bSR)
			var oTR = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 12, 'title', 1, 'value', 2], [], e, s, gg)
			_(aPR, oTR)
			_(oNR, aPR)
			var xUR = _n('van-cell-group')
			var oVR = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 15, 'bindchange', 1, 'data-wpy-evt', 2, 'inputClass', 3, 'label', 4, 'maxlength', 5, 'placeholder', 6, 'titleWidth', 7, 'type', 8, 'value', 9], [], e, s, gg)
			_(xUR, oVR)
			_(oNR, xUR)
			var fWR = _n('error-hint')
			_rz(z, fWR, 'bind_init', 25, e, s, gg)
			_(oNR, fWR)
			_(r, oNR)
			return r
		}
		e_[x[48]] = {
			f: m48,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[49]] = {}
		var m49 = function (e, s, r, gg) {
			var z = gz$gwx_50()
			var hYR = _n('view')
			_rz(z, hYR, 'class', 0, e, s, gg)
			var c1R = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(hYR, c1R)
			var o2R = _n('van-cell-group')
			var l3R = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(o2R, l3R)
			var a4R = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(o2R, a4R)
			var t5R = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 9, 'title', 1, 'value', 2], [], e, s, gg)
			_(o2R, t5R)
			var e6R = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 12, 'title', 1, 'value', 2], [], e, s, gg)
			_(o2R, e6R)
			_(hYR, o2R)
			var b7R = _n('van-cell-group')
			var o8R = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 15, 'title', 1], [], e, s, gg)
			var x9R = _mz(z, 'van-steps', ['active', 17, 'activeColor', 1, 'bind_init', 2, 'direction', 3, 'steps', 4], [], e, s, gg)
			_(o8R, x9R)
			_(b7R, o8R)
			var o0R = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 22, 'title', 1, 'value', 2], [], e, s, gg)
			_(b7R, o0R)
			_(hYR, b7R)
			var oZR = _v()
			_(hYR, oZR)
			if (_oz(z, 25, e, s, gg)) {
				oZR.wxVkey = 1
				var fAS = _n('error-hint')
				_rz(z, fAS, 'bind_init', 26, e, s, gg)
				_(oZR, fAS)
			}
			oZR.wxXCkey = 1
			oZR.wxXCkey = 3
			_(r, hYR)
			return r
		}
		e_[x[49]] = {
			f: m49,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[50]] = {}
		var m50 = function (e, s, r, gg) {
			var z = gz$gwx_51()
			var hCS = _mz(z, 'nav-bar', ['bind_init', 0, 'title', 1], [], e, s, gg)
			_(r, hCS)
			return r
		}
		e_[x[50]] = {
			f: m50,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[51]] = {}
		var m51 = function (e, s, r, gg) {
			var z = gz$gwx_52()
			var cES = _n('view')
			_rz(z, cES, 'class', 0, e, s, gg)
			var oFS = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(cES, oFS)
			var lGS = _n('view')
			_rz(z, lGS, 'style', 3, e, s, gg)
			var aHS = _n('van-cell-group')
			_rz(z, aHS, 'bind_init', 4, e, s, gg)
			var tIS = _mz(z, 'van-field', ['bind_init', 5, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(aHS, tIS)
			var eJS = _mz(z, 'van-field', ['bind_init', 11, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(aHS, eJS)
			var bKS = _mz(z, 'van-field', ['bind_init', 17, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(aHS, bKS)
			var oLS = _mz(z, 'van-field', ['bind_init', 23, 'inputAlign', 1, 'label', 2, 'readonly', 3, 'titleWidth', 4, 'value', 5], [], e, s, gg)
			_(aHS, oLS)
			_(lGS, aHS)
			var xMS = _n('van-cell-group')
			_rz(z, xMS, 'bind_init', 29, e, s, gg)
			var oNS = _v()
			_(xMS, oNS)
			if (_oz(z, 30, e, s, gg)) {
				oNS.wxVkey = 1
				var fOS = _mz(z, 'van-cell', ['bind_init', 31, 'icon', 1], [], e, s, gg)
				_(oNS, fOS)
			}
			var cPS = _v()
			_(xMS, cPS)
			var hQS = function (cSS, oRS, oTS, gg) {
				var aVS = _mz(z, 'van-cell', ['bind_init', 37, 'style', 1], [], cSS, oRS, gg)
				var tWS = _n('view')
				_rz(z, tWS, 'slot', 39, cSS, oRS, gg)
				var eXS = _v()
				_(tWS, eXS)
				if (_oz(z, 40, cSS, oRS, gg)) {
					eXS.wxVkey = 1
					var x1S = _mz(z, 'van-tag', ['bind_init', 41, 'color', 1], [], cSS, oRS, gg)
					_(eXS, x1S)
				}
				var bYS = _v()
				_(tWS, bYS)
				if (_oz(z, 43, cSS, oRS, gg)) {
					bYS.wxVkey = 1
					var o2S = _mz(z, 'van-tag', ['bind_init', 44, 'color', 1], [], cSS, oRS, gg)
					_(bYS, o2S)
				}
				var oZS = _v()
				_(tWS, oZS)
				if (_oz(z, 46, cSS, oRS, gg)) {
					oZS.wxVkey = 1
					var f3S = _mz(z, 'van-tag', ['bind_init', 47, 'color', 1], [], cSS, oRS, gg)
					_(oZS, f3S)
				}
				eXS.wxXCkey = 1
				eXS.wxXCkey = 3
				bYS.wxXCkey = 1
				bYS.wxXCkey = 3
				oZS.wxXCkey = 1
				oZS.wxXCkey = 3
				_(aVS, tWS)
				_(oTS, aVS)
				return oTS
			}
			cPS.wxXCkey = 4
			_2z(z, 35, hQS, e, s, gg, cPS, 'item', 'index', 'index')
			oNS.wxXCkey = 1
			oNS.wxXCkey = 3
			_(lGS, xMS)
			_(cES, lGS)
			var c4S = _mz(z, 'van-dialog', ['bind_init', 49, 'bindclose', 1, 'buttons', 2, 'data-wpy-evt', 3, 'message', 4, 'show', 5, 'title', 6], [], e, s, gg)
			_(cES, c4S)
			_(r, cES)
			return r
		}
		e_[x[51]] = {
			f: m51,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[52]] = {}
		var m52 = function (e, s, r, gg) {
			var z = gz$gwx_53()
			var o6S = _n('view')
			_rz(z, o6S, 'class', 0, e, s, gg)
			var c7S = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(o6S, c7S)
			var o8S = _n('view')
			var l9S = _v()
			_(o8S, l9S)
			if (_oz(z, 3, e, s, gg)) {
				l9S.wxVkey = 1
				var a0S = _mz(z, 'van-field', ['bind_init', 4, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'titleWidth', 7, 'type', 8, 'value', 9], [], e, s, gg)
				_(l9S, a0S)
				var tAT = _mz(z, 'van-field', ['bind_init', 14, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'titleWidth', 7, 'type', 8, 'value', 9], [], e, s, gg)
				_(l9S, tAT)
			} else {
				l9S.wxVkey = 2
				var eBT = _mz(z, 'van-field', ['bind_init', 24, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'titleWidth', 7, 'type', 8, 'value', 9], [], e, s, gg)
				_(l9S, eBT)
				var bCT = _mz(z, 'van-field', ['bind_init', 34, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'titleWidth', 7, 'type', 8, 'value', 9], [], e, s, gg)
				_(l9S, bCT)
			}
			var oDT = _n('error-hint')
			_rz(z, oDT, 'bind_init', 44, e, s, gg)
			_(o8S, oDT)
			var xET = _mz(z, 'van-dialog', ['bind_init', 45, 'bindclose', 1, 'buttons', 2, 'data-wpy-evt', 3, 'message', 4, 'show', 5, 'title', 6], [], e, s, gg)
			_(o8S, xET)
			l9S.wxXCkey = 1
			l9S.wxXCkey = 3
			l9S.wxXCkey = 3
			_(o6S, o8S)
			_(r, o6S)
			return r
		}
		e_[x[52]] = {
			f: m52,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[53]] = {}
		var m53 = function (e, s, r, gg) {
			var z = gz$gwx_54()
			var fGT = _n('view')
			_rz(z, fGT, 'class', 0, e, s, gg)
			var cHT = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(fGT, cHT)
			var hIT = _n('view')
			var oJT = _v()
			_(hIT, oJT)
			if (_oz(z, 3, e, s, gg)) {
				oJT.wxVkey = 1
				var cKT = _mz(z, 'van-icon', ['bind_init', 4, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(oJT, cKT)
			} else {
				oJT.wxVkey = 2
				var oLT = _mz(z, 'van-icon', ['bind_init', 8, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(oJT, oLT)
			}
			oJT.wxXCkey = 1
			oJT.wxXCkey = 3
			oJT.wxXCkey = 3
			_(fGT, hIT)
			_(r, fGT)
			return r
		}
		e_[x[53]] = {
			f: m53,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[54]] = {}
		var m54 = function (e, s, r, gg) {
			var z = gz$gwx_55()
			var aNT = _n('view')
			_rz(z, aNT, 'class', 0, e, s, gg)
			var tOT = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(aNT, tOT)
			var ePT = _n('view')
			var bQT = _mz(z, 'van-field', ['bind_init', 3, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
			_(ePT, bQT)
			var oRT = _mz(z, 'van-field', ['bind_init', 11, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
			_(ePT, oRT)
			var xST = _mz(z, 'van-field', ['bind_init', 19, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'type', 6, 'value', 7], [], e, s, gg)
			_(ePT, xST)
			var oTT = _n('error-hint')
			_rz(z, oTT, 'bind_init', 27, e, s, gg)
			_(ePT, oTT)
			var fUT = _n('error-hint')
			_rz(z, fUT, 'bind_init', 28, e, s, gg)
			_(ePT, fUT)
			_(aNT, ePT)
			_(r, aNT)
			return r
		}
		e_[x[54]] = {
			f: m54,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[55]] = {}
		var m55 = function (e, s, r, gg) {
			var z = gz$gwx_56()
			var hWT = _n('view')
			_rz(z, hWT, 'class', 0, e, s, gg)
			var oXT = _v()
			_(hWT, oXT)
			if (_oz(z, 1, e, s, gg)) {
				oXT.wxVkey = 1
				var cYT = _mz(z, 'nav-bar', ['bind_init', 2, 'title', 1], [], e, s, gg)
				_(oXT, cYT)
			} else {
				oXT.wxVkey = 2
				var oZT = _mz(z, 'nav-bar', ['bind_init', 4, 'title', 1], [], e, s, gg)
				_(oXT, oZT)
			}
			var l1T = _n('van-cell-group')
			var a2T = _v()
			_(l1T, a2T)
			if (_oz(z, 6, e, s, gg)) {
				a2T.wxVkey = 1
				var t3T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 7, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, t3T)
				var e4T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 10, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, e4T)
				var b5T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 13, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, b5T)
				var o6T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 16, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, o6T)
			} else {
				a2T.wxVkey = 2
				var x7T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 19, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, x7T)
				var o8T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 22, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, o8T)
				var f9T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 25, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, f9T)
				var c0T = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 28, 'title', 1, 'value', 2], [], e, s, gg)
				_(a2T, c0T)
			}
			a2T.wxXCkey = 1
			a2T.wxXCkey = 3
			a2T.wxXCkey = 3
			_(hWT, l1T)
			oXT.wxXCkey = 1
			oXT.wxXCkey = 3
			oXT.wxXCkey = 3
			_(r, hWT)
			return r
		}
		e_[x[55]] = {
			f: m55,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[56]] = {}
		var m56 = function (e, s, r, gg) {
			var z = gz$gwx_57()
			var oBU = _n('view')
			_rz(z, oBU, 'class', 0, e, s, gg)
			var eHU = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(oBU, eHU)
			var bIU = _n('van-cell-group')
			var oJU = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(bIU, oJU)
			var xKU = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(bIU, xKU)
			_(oBU, bIU)
			var oLU = _n('van-cell-group')
			var fMU = _mz(z, 'picker', ['bindchange', 9, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var cNU = _mz(z, 'van-field', ['bind_init', 13, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
			_(fMU, cNU)
			_(oLU, fMU)
			_(oBU, oLU)
			var cCU = _v()
			_(oBU, cCU)
			if (_oz(z, 19, e, s, gg)) {
				cCU.wxVkey = 1
				var hOU = _n('van-cell-group')
				var cQU = _mz(z, 'picker', ['bindchange', 20, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var oRU = _mz(z, 'van-field', ['bind_init', 24, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(cQU, oRU)
				_(hOU, cQU)
				var lSU = _mz(z, 'picker', ['bindchange', 30, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var aTU = _mz(z, 'van-field', ['bind_init', 34, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(lSU, aTU)
				_(hOU, lSU)
				var oPU = _v()
				_(hOU, oPU)
				if (_oz(z, 40, e, s, gg)) {
					oPU.wxVkey = 1
					var tUU = _mz(z, 'van-field', ['bind_init', 41, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(oPU, tUU)
				}
				oPU.wxXCkey = 1
				oPU.wxXCkey = 3
				_(cCU, hOU)
			}
			var oDU = _v()
			_(oBU, oDU)
			if (_oz(z, 49, e, s, gg)) {
				oDU.wxVkey = 1
				var eVU = _n('view')
				var oXU = _mz(z, 'picker', ['bindchange', 50, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var xYU = _mz(z, 'van-field', ['bind_init', 54, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(oXU, xYU)
				_(eVU, oXU)
				var bWU = _v()
				_(eVU, bWU)
				if (_oz(z, 60, e, s, gg)) {
					bWU.wxVkey = 1
					var oZU = _mz(z, 'van-field', ['bind_init', 61, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(bWU, oZU)
				}
				bWU.wxXCkey = 1
				bWU.wxXCkey = 3
				_(oDU, eVU)
			}
			var lEU = _v()
			_(oBU, lEU)
			if (_oz(z, 69, e, s, gg)) {
				lEU.wxVkey = 1
			}
			var aFU = _v()
			_(oBU, aFU)
			if (_oz(z, 70, e, s, gg)) {
				aFU.wxVkey = 1
				var f1U = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 71, 'bindchange', 1, 'data-wpy-evt', 2, 'inputClass', 3, 'label', 4, 'maxlength', 5, 'placeholder', 6, 'required', 7, 'titleWidth', 8, 'type', 9, 'value', 10], [], e, s, gg)
				_(aFU, f1U)
			}
			var tGU = _v()
			_(oBU, tGU)
			if (_oz(z, 82, e, s, gg)) {
				tGU.wxVkey = 1
			}
			cCU.wxXCkey = 1
			cCU.wxXCkey = 3
			oDU.wxXCkey = 1
			oDU.wxXCkey = 3
			lEU.wxXCkey = 1
			aFU.wxXCkey = 1
			aFU.wxXCkey = 3
			tGU.wxXCkey = 1
			_(r, oBU)
			return r
		}
		e_[x[56]] = {
			f: m56,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[57]] = {}
		var m57 = function (e, s, r, gg) {
			var z = gz$gwx_58()
			var h3U = _n('view')
			_rz(z, h3U, 'class', 0, e, s, gg)
			var t9U = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(h3U, t9U)
			var e0U = _n('van-cell-group')
			var bAV = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 3, 'title', 1, 'value', 2], [], e, s, gg)
			_(e0U, bAV)
			var oBV = _mz(z, 'van-cell', ['valueLeft', -1, 'bind_init', 6, 'title', 1, 'value', 2], [], e, s, gg)
			_(e0U, oBV)
			_(h3U, e0U)
			var xCV = _n('van-cell-group')
			var oDV = _mz(z, 'picker', ['bindchange', 9, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
			var fEV = _mz(z, 'van-field', ['bind_init', 13, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
			_(oDV, fEV)
			_(xCV, oDV)
			_(h3U, xCV)
			var o4U = _v()
			_(h3U, o4U)
			if (_oz(z, 19, e, s, gg)) {
				o4U.wxVkey = 1
				var cFV = _n('van-cell-group')
				var oHV = _mz(z, 'picker', ['bindchange', 20, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var cIV = _mz(z, 'van-field', ['bind_init', 24, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(oHV, cIV)
				_(cFV, oHV)
				var oJV = _mz(z, 'picker', ['bindchange', 30, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var lKV = _mz(z, 'van-field', ['bind_init', 34, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(oJV, lKV)
				_(cFV, oJV)
				var hGV = _v()
				_(cFV, hGV)
				if (_oz(z, 40, e, s, gg)) {
					hGV.wxVkey = 1
					var aLV = _mz(z, 'van-field', ['bind_init', 41, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(hGV, aLV)
				}
				hGV.wxXCkey = 1
				hGV.wxXCkey = 3
				_(o4U, cFV)
			}
			var c5U = _v()
			_(h3U, c5U)
			if (_oz(z, 49, e, s, gg)) {
				c5U.wxVkey = 1
				var tMV = _n('view')
				var bOV = _mz(z, 'picker', ['bindchange', 50, 'data-wpy-evt', 1, 'range', 2, 'value', 3], [], e, s, gg)
				var oPV = _mz(z, 'van-field', ['bind_init', 54, 'label', 1, 'placeholder', 2, 'readonly', 3, 'required', 4, 'value', 5], [], e, s, gg)
				_(bOV, oPV)
				_(tMV, bOV)
				var eNV = _v()
				_(tMV, eNV)
				if (_oz(z, 60, e, s, gg)) {
					eNV.wxVkey = 1
					var xQV = _mz(z, 'van-field', ['bind_init', 61, 'bindchange', 1, 'data-wpy-evt', 2, 'label', 3, 'maxlength', 4, 'placeholder', 5, 'required', 6, 'value', 7], [], e, s, gg)
					_(eNV, xQV)
				}
				eNV.wxXCkey = 1
				eNV.wxXCkey = 3
				_(c5U, tMV)
			}
			var o6U = _v()
			_(h3U, o6U)
			if (_oz(z, 69, e, s, gg)) {
				o6U.wxVkey = 1
			}
			var l7U = _v()
			_(h3U, l7U)
			if (_oz(z, 70, e, s, gg)) {
				l7U.wxVkey = 1
				var oRV = _mz(z, 'van-field', ['autosize', -1, 'showWordLimit', -1, 'bind_init', 71, 'bindchange', 1, 'data-wpy-evt', 2, 'inputClass', 3, 'label', 4, 'maxlength', 5, 'placeholder', 6, 'required', 7, 'titleWidth', 8, 'type', 9, 'value', 10], [], e, s, gg)
				_(l7U, oRV)
			}
			var a8U = _v()
			_(h3U, a8U)
			if (_oz(z, 82, e, s, gg)) {
				a8U.wxVkey = 1
			}
			o4U.wxXCkey = 1
			o4U.wxXCkey = 3
			c5U.wxXCkey = 1
			c5U.wxXCkey = 3
			o6U.wxXCkey = 1
			l7U.wxXCkey = 1
			l7U.wxXCkey = 3
			a8U.wxXCkey = 1
			_(r, h3U)
			return r
		}
		e_[x[57]] = {
			f: m57,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[58]] = {}
		var m58 = function (e, s, r, gg) {
			var z = gz$gwx_59()
			var cTV = _n('view')
			_rz(z, cTV, 'class', 0, e, s, gg)
			var hUV = _mz(z, 'nav-bar', ['bind_init', 1, 'title', 1], [], e, s, gg)
			_(cTV, hUV)
			var oVV = _n('view')
			var cWV = _v()
			_(oVV, cWV)
			if (_oz(z, 3, e, s, gg)) {
				cWV.wxVkey = 1
				var oXV = _mz(z, 'van-icon', ['bind_init', 4, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(cWV, oXV)
			} else {
				cWV.wxVkey = 2
				var lYV = _mz(z, 'van-icon', ['bind_init', 8, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
				_(cWV, lYV)
			}
			cWV.wxXCkey = 1
			cWV.wxXCkey = 3
			cWV.wxXCkey = 3
			_(cTV, oVV)
			_(r, cTV)
			return r
		}
		e_[x[58]] = {
			f: m58,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		if (path && e_[path]) {
			return function (env, dd, global) {
				$gwxc = 0;
				var root = {
					"tag": "wx-page"
				};
				root.children = []
				var main = e_[path].f
				if (typeof global === "undefined") global = {};
				global.f = $gdc(f_[path], "", 1);
				try {
					main(env, {}, root, global);
					_tsd(root)
				} catch (err) {
					console.log(err)
				}
				return root;
			}
		}
	}
	__wxAppCode__['components/dialog-location.json'] = {
		"component": true,
		"usingComponents": {
			"van-popup": "./vant/dist/popup/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/dialog-location.wxml'] = [$gwx, './components/dialog-location.wxml'];
	else __wxAppCode__['components/dialog-location.wxml'] = $gwx('./components/dialog-location.wxml');
	__wxAppCode__['components/dialog-login.json'] = {
		"component": true,
		"usingComponents": {
			"van-popup": "./vant/dist/popup/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/dialog-login.wxml'] = [$gwx, './components/dialog-login.wxml'];
	else __wxAppCode__['components/dialog-login.wxml'] = $gwx('./components/dialog-login.wxml');
	__wxAppCode__['components/error-hint.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/error-hint.wxml'] = [$gwx, './components/error-hint.wxml'];
	else __wxAppCode__['components/error-hint.wxml'] = $gwx('./components/error-hint.wxml');
	__wxAppCode__['components/nav-bar-code.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/nav-bar-code.wxml'] = [$gwx, './components/nav-bar-code.wxml'];
	else __wxAppCode__['components/nav-bar-code.wxml'] = $gwx('./components/nav-bar-code.wxml');
	__wxAppCode__['components/nav-bar.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/nav-bar.wxml'] = [$gwx, './components/nav-bar.wxml'];
	else __wxAppCode__['components/nav-bar.wxml'] = $gwx('./components/nav-bar.wxml');
	__wxAppCode__['components/refresher-list/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/refresher-list/index.wxml'] = [$gwx, './components/refresher-list/index.wxml'];
	else __wxAppCode__['components/refresher-list/index.wxml'] = $gwx('./components/refresher-list/index.wxml');
	__wxAppCode__['components/vant/dist/area/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-picker": "./../picker/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/area/index.wxml'] = [$gwx, './components/vant/dist/area/index.wxml'];
	else __wxAppCode__['components/vant/dist/area/index.wxml'] = $gwx('./components/vant/dist/area/index.wxml');
	__wxAppCode__['components/vant/dist/button/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index",
			"van-loading": "./../loading/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/button/index.wxml'] = [$gwx, './components/vant/dist/button/index.wxml'];
	else __wxAppCode__['components/vant/dist/button/index.wxml'] = $gwx('./components/vant/dist/button/index.wxml');
	__wxAppCode__['components/vant/dist/cell-group/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/cell-group/index.wxml'] = [$gwx, './components/vant/dist/cell-group/index.wxml'];
	else __wxAppCode__['components/vant/dist/cell-group/index.wxml'] = $gwx('./components/vant/dist/cell-group/index.wxml');
	__wxAppCode__['components/vant/dist/cell/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/cell/index.wxml'] = [$gwx, './components/vant/dist/cell/index.wxml'];
	else __wxAppCode__['components/vant/dist/cell/index.wxml'] = $gwx('./components/vant/dist/cell/index.wxml');
	__wxAppCode__['components/vant/dist/dialog/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-popup": "./../popup/index",
			"van-button": "./../button/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/dialog/index.wxml'] = [$gwx, './components/vant/dist/dialog/index.wxml'];
	else __wxAppCode__['components/vant/dist/dialog/index.wxml'] = $gwx('./components/vant/dist/dialog/index.wxml');
	__wxAppCode__['components/vant/dist/field/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-cell": "./../cell/index",
			"van-icon": "./../icon/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/field/index.wxml'] = [$gwx, './components/vant/dist/field/index.wxml'];
	else __wxAppCode__['components/vant/dist/field/index.wxml'] = $gwx('./components/vant/dist/field/index.wxml');
	__wxAppCode__['components/vant/dist/icon/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-info": "./../info/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/icon/index.wxml'] = [$gwx, './components/vant/dist/icon/index.wxml'];
	else __wxAppCode__['components/vant/dist/icon/index.wxml'] = $gwx('./components/vant/dist/icon/index.wxml');
	__wxAppCode__['components/vant/dist/info/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/info/index.wxml'] = [$gwx, './components/vant/dist/info/index.wxml'];
	else __wxAppCode__['components/vant/dist/info/index.wxml'] = $gwx('./components/vant/dist/info/index.wxml');
	__wxAppCode__['components/vant/dist/loading/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/loading/index.wxml'] = [$gwx, './components/vant/dist/loading/index.wxml'];
	else __wxAppCode__['components/vant/dist/loading/index.wxml'] = $gwx('./components/vant/dist/loading/index.wxml');
	__wxAppCode__['components/vant/dist/overlay/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-transition": "./../transition/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/overlay/index.wxml'] = [$gwx, './components/vant/dist/overlay/index.wxml'];
	else __wxAppCode__['components/vant/dist/overlay/index.wxml'] = $gwx('./components/vant/dist/overlay/index.wxml');
	__wxAppCode__['components/vant/dist/picker-column/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/picker-column/index.wxml'] = [$gwx, './components/vant/dist/picker-column/index.wxml'];
	else __wxAppCode__['components/vant/dist/picker-column/index.wxml'] = $gwx('./components/vant/dist/picker-column/index.wxml');
	__wxAppCode__['components/vant/dist/picker/index.json'] = {
		"component": true,
		"usingComponents": {
			"picker-column": "./../picker-column/index",
			"loading": "./../loading/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/picker/index.wxml'] = [$gwx, './components/vant/dist/picker/index.wxml'];
	else __wxAppCode__['components/vant/dist/picker/index.wxml'] = $gwx('./components/vant/dist/picker/index.wxml');
	__wxAppCode__['components/vant/dist/popup/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index",
			"van-overlay": "./../overlay/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/popup/index.wxml'] = [$gwx, './components/vant/dist/popup/index.wxml'];
	else __wxAppCode__['components/vant/dist/popup/index.wxml'] = $gwx('./components/vant/dist/popup/index.wxml');
	__wxAppCode__['components/vant/dist/radio-group/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/radio-group/index.wxml'] = [$gwx, './components/vant/dist/radio-group/index.wxml'];
	else __wxAppCode__['components/vant/dist/radio-group/index.wxml'] = $gwx('./components/vant/dist/radio-group/index.wxml');
	__wxAppCode__['components/vant/dist/radio/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/radio/index.wxml'] = [$gwx, './components/vant/dist/radio/index.wxml'];
	else __wxAppCode__['components/vant/dist/radio/index.wxml'] = $gwx('./components/vant/dist/radio/index.wxml');
	__wxAppCode__['components/vant/dist/steps/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/steps/index.wxml'] = [$gwx, './components/vant/dist/steps/index.wxml'];
	else __wxAppCode__['components/vant/dist/steps/index.wxml'] = $gwx('./components/vant/dist/steps/index.wxml');
	__wxAppCode__['components/vant/dist/sticky/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/sticky/index.wxml'] = [$gwx, './components/vant/dist/sticky/index.wxml'];
	else __wxAppCode__['components/vant/dist/sticky/index.wxml'] = $gwx('./components/vant/dist/sticky/index.wxml');
	__wxAppCode__['components/vant/dist/tab/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/tab/index.wxml'] = [$gwx, './components/vant/dist/tab/index.wxml'];
	else __wxAppCode__['components/vant/dist/tab/index.wxml'] = $gwx('./components/vant/dist/tab/index.wxml');
	__wxAppCode__['components/vant/dist/tabs/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-info": "./../info/index",
			"van-sticky": "./../sticky/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/tabs/index.wxml'] = [$gwx, './components/vant/dist/tabs/index.wxml'];
	else __wxAppCode__['components/vant/dist/tabs/index.wxml'] = $gwx('./components/vant/dist/tabs/index.wxml');
	__wxAppCode__['components/vant/dist/tag/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/tag/index.wxml'] = [$gwx, './components/vant/dist/tag/index.wxml'];
	else __wxAppCode__['components/vant/dist/tag/index.wxml'] = $gwx('./components/vant/dist/tag/index.wxml');
	__wxAppCode__['components/vant/dist/transition/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/transition/index.wxml'] = [$gwx, './components/vant/dist/transition/index.wxml'];
	else __wxAppCode__['components/vant/dist/transition/index.wxml'] = $gwx('./components/vant/dist/transition/index.wxml');
	__wxAppCode__['components/vant/dist/uploader/index.json'] = {
		"component": true,
		"usingComponents": {
			"van-icon": "./../icon/index"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/dist/uploader/index.wxml'] = [$gwx, './components/vant/dist/uploader/index.wxml'];
	else __wxAppCode__['components/vant/dist/uploader/index.wxml'] = $gwx('./components/vant/dist/uploader/index.wxml');
	__wxAppCode__['components/vant/mp-html/index.json'] = {
		"component": true,
		"usingComponents": {
			"node": "./node/node"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/mp-html/index.wxml'] = [$gwx, './components/vant/mp-html/index.wxml'];
	else __wxAppCode__['components/vant/mp-html/index.wxml'] = $gwx('./components/vant/mp-html/index.wxml');
	__wxAppCode__['components/vant/mp-html/node/node.json'] = {
		"component": true,
		"usingComponents": {
			"node": "./node"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/vant/mp-html/node/node.wxml'] = [$gwx, './components/vant/mp-html/node/node.wxml'];
	else __wxAppCode__['components/vant/mp-html/node/node.wxml'] = $gwx('./components/vant/mp-html/node/node.wxml');
	__wxAppCode__['pages/account.json'] = {
		"navigationBarTitleText": "我的",
		"component": true,
		"usingComponents": {
			"van-popup": "./../components/vant/dist/popup/index",
			"mp-html": "./../components/vant/mp-html/index",
			"van-cell-group": "./../components/vant/dist/cell-group/index",
			"van-cell": "./../components/vant/dist/cell/index",
			"van-icon": "./../components/vant/dist/icon/index",
			"dialog-login": "./../components/dialog-login",
			"nav-bar": "./../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/account.wxml'] = [$gwx, './pages/account.wxml'];
	else __wxAppCode__['pages/account.wxml'] = $gwx('./pages/account.wxml');
	__wxAppCode__['pages/dailyReport/complete.json'] = {
		"navigationBarTitleText": "健康上报",
		"component": true,
		"usingComponents": {
			"van-icon": "./../../components/vant/dist/icon/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/dailyReport/complete.wxml'] = [$gwx, './pages/dailyReport/complete.wxml'];
	else __wxAppCode__['pages/dailyReport/complete.wxml'] = $gwx('./pages/dailyReport/complete.wxml');
	__wxAppCode__['pages/dailyReport/normal.json'] = {
		"navigationBarTitleText": "健康上报",
		"component": true,
		"usingComponents": {
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-cell-group": "./../../components/vant/dist/cell-group/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-area": "./../../components/vant/dist/area/index",
			"dialog-login": "./../../components/dialog-login",
			"error-hint": "./../../components/error-hint",
			"dialog-location": "./../../components/dialog-location",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/dailyReport/normal.wxml'] = [$gwx, './pages/dailyReport/normal.wxml'];
	else __wxAppCode__['pages/dailyReport/normal.wxml'] = $gwx('./pages/dailyReport/normal.wxml');
	__wxAppCode__['pages/index.json'] = {
		"navigationStyle": "custom",
		"navigationBarTitleText": "同济大学学生服务站",
		"component": true,
		"usingComponents": {
			"nav-bar": "./../components/nav-bar",
			"van-popup": "./../components/vant/dist/popup/index",
			"van-dialog": "./../components/vant/dist/dialog/index",
			"mp-html": "./../components/vant/mp-html/index",
			"dialog-login": "./../components/dialog-login",
			"dialog-location": "./../components/dialog-location"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index.wxml'] = [$gwx, './pages/index.wxml'];
	else __wxAppCode__['pages/index.wxml'] = $gwx('./pages/index.wxml');
	__wxAppCode__['pages/leaveSchool/leaveSchoolDetailv2.json'] = {
		"navigationBarTitleText": "离校备案详情",
		"component": true,
		"usingComponents": {
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-area": "./../../components/vant/dist/area/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/leaveSchool/leaveSchoolDetailv2.wxml'] = [$gwx, './pages/leaveSchool/leaveSchoolDetailv2.wxml'];
	else __wxAppCode__['pages/leaveSchool/leaveSchoolDetailv2.wxml'] = $gwx('./pages/leaveSchool/leaveSchoolDetailv2.wxml');
	__wxAppCode__['pages/leaveSchool/leaveSchoolv2.json'] = {
		"navigationBarTitleText": "离校备案",
		"component": true,
		"usingComponents": {
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-area": "./../../components/vant/dist/area/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-radio": "./../../components/vant/dist/radio/index",
			"van-radio-group": "./../../components/vant/dist/radio-group/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/leaveSchool/leaveSchoolv2.wxml'] = [$gwx, './pages/leaveSchool/leaveSchoolv2.wxml'];
	else __wxAppCode__['pages/leaveSchool/leaveSchoolv2.wxml'] = $gwx('./pages/leaveSchool/leaveSchoolv2.wxml');
	__wxAppCode__['pages/license.json'] = {
		"component": true,
		"usingComponents": {
			"nav-bar": "./../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/license.wxml'] = [$gwx, './pages/license.wxml'];
	else __wxAppCode__['pages/license.wxml'] = $gwx('./pages/license.wxml');
	__wxAppCode__['pages/notification.json'] = {
		"navigationStyle": "custom",
		"navigationBarTitleText": "通知",
		"component": true,
		"usingComponents": {
			"refresher-list": "./../components/refresher-list/index",
			"nav-bar": "./../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/notification.wxml'] = [$gwx, './pages/notification.wxml'];
	else __wxAppCode__['pages/notification.wxml'] = $gwx('./pages/notification.wxml');
	__wxAppCode__['pages/questionnaire/qA2.json'] = {
		"navigationBarTitleText": "问卷系统",
		"component": true,
		"usingComponents": {
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-area": "./../../components/vant/dist/area/index",
			"van-tab": "./../../components/vant/dist/tab/index",
			"van-tabs": "./../../components/vant/dist/tabs/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/questionnaire/qA2.wxml'] = [$gwx, './pages/questionnaire/qA2.wxml'];
	else __wxAppCode__['pages/questionnaire/qA2.wxml'] = $gwx('./pages/questionnaire/qA2.wxml');
	__wxAppCode__['pages/questionnaire/qAttachment.json'] = {
		"navigationBarTitleText": "诚信承诺书",
		"component": true,
		"usingComponents": {
			"van-popup": "./../../components/vant/dist/popup/index",
			"mp-html": "./../../components/vant/mp-html/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-tab": "./../../components/vant/dist/tab/index",
			"van-tabs": "./../../components/vant/dist/tabs/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/questionnaire/qAttachment.wxml'] = [$gwx, './pages/questionnaire/qAttachment.wxml'];
	else __wxAppCode__['pages/questionnaire/qAttachment.wxml'] = $gwx('./pages/questionnaire/qAttachment.wxml');
	__wxAppCode__['pages/questionnaire/qIndex.json'] = {
		"navigationBarTitleText": "问卷系统",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-icon": "./../../components/vant/dist/icon/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tab": "./../../components/vant/dist/tab/index",
			"van-tabs": "./../../components/vant/dist/tabs/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/questionnaire/qIndex.wxml'] = [$gwx, './pages/questionnaire/qIndex.wxml'];
	else __wxAppCode__['pages/questionnaire/qIndex.wxml'] = $gwx('./pages/questionnaire/qIndex.wxml');
	__wxAppCode__['pages/record/leaveSchool.json'] = {
		"navigationBarTitleText": "离校备案",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/record/leaveSchool.wxml'] = [$gwx, './pages/record/leaveSchool.wxml'];
	else __wxAppCode__['pages/record/leaveSchool.wxml'] = $gwx('./pages/record/leaveSchool.wxml');
	__wxAppCode__['pages/returnSchool/appeal.json'] = {
		"navigationBarTitleText": "风险申诉",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-uploader": "./../../components/vant/dist/uploader/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/appeal.wxml'] = [$gwx, './pages/returnSchool/appeal.wxml'];
	else __wxAppCode__['pages/returnSchool/appeal.wxml'] = $gwx('./pages/returnSchool/appeal.wxml');
	__wxAppCode__['pages/returnSchool/appealComplete.json'] = {
		"navigationBarTitleText": "风险申诉",
		"component": true,
		"usingComponents": {
			"van-icon": "./../../components/vant/dist/icon/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/appealComplete.wxml'] = [$gwx, './pages/returnSchool/appealComplete.wxml'];
	else __wxAppCode__['pages/returnSchool/appealComplete.wxml'] = $gwx('./pages/returnSchool/appealComplete.wxml');
	__wxAppCode__['pages/returnSchool/appealDetail.json'] = {
		"navigationBarTitleText": "我的申诉",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-steps": "./../../components/vant/dist/steps/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/appealDetail.wxml'] = [$gwx, './pages/returnSchool/appealDetail.wxml'];
	else __wxAppCode__['pages/returnSchool/appealDetail.wxml'] = $gwx('./pages/returnSchool/appealDetail.wxml');
	__wxAppCode__['pages/returnSchool/appealDetailInfo.json'] = {
		"navigationBarTitleText": "风险核销记录",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-uploader": "./../../components/vant/dist/uploader/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/appealDetailInfo.wxml'] = [$gwx, './pages/returnSchool/appealDetailInfo.wxml'];
	else __wxAppCode__['pages/returnSchool/appealDetailInfo.wxml'] = $gwx('./pages/returnSchool/appealDetailInfo.wxml');
	__wxAppCode__['pages/returnSchool/appealMedicalReport.json'] = {
		"navigationBarTitleText": "风险申诉",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-uploader": "./../../components/vant/dist/uploader/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/appealMedicalReport.wxml'] = [$gwx, './pages/returnSchool/appealMedicalReport.wxml'];
	else __wxAppCode__['pages/returnSchool/appealMedicalReport.wxml'] = $gwx('./pages/returnSchool/appealMedicalReport.wxml');
	__wxAppCode__['pages/returnSchool/appealSecStep.json'] = {
		"navigationBarTitleText": "风险申诉",
		"component": true,
		"usingComponents": {
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-area": "./../../components/vant/dist/area/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-uploader": "./../../components/vant/dist/uploader/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/appealSecStep.wxml'] = [$gwx, './pages/returnSchool/appealSecStep.wxml'];
	else __wxAppCode__['pages/returnSchool/appealSecStep.wxml'] = $gwx('./pages/returnSchool/appealSecStep.wxml');
	__wxAppCode__['pages/returnSchool/apply.json'] = {
		"navigationBarTitleText": "返校申请",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/apply.wxml'] = [$gwx, './pages/returnSchool/apply.wxml'];
	else __wxAppCode__['pages/returnSchool/apply.wxml'] = $gwx('./pages/returnSchool/apply.wxml');
	__wxAppCode__['pages/returnSchool/applyDetail.json'] = {
		"navigationBarTitleText": "我的申请",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-steps": "./../../components/vant/dist/steps/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/applyDetail.wxml'] = [$gwx, './pages/returnSchool/applyDetail.wxml'];
	else __wxAppCode__['pages/returnSchool/applyDetail.wxml'] = $gwx('./pages/returnSchool/applyDetail.wxml');
	__wxAppCode__['pages/returnSchool/returnCode.json'] = {
		"navigationBarTitleText": "同济进校码",
		"component": true,
		"usingComponents": {
			"van-icon": "./../../components/vant/dist/icon/index",
			"nav-bar-code": "./../../components/nav-bar-code",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/returnCode.wxml'] = [$gwx, './pages/returnSchool/returnCode.wxml'];
	else __wxAppCode__['pages/returnSchool/returnCode.wxml'] = $gwx('./pages/returnSchool/returnCode.wxml');
	__wxAppCode__['pages/returnSchool/returnCodeChange.json'] = {
		"navigationBarTitleText": "进校点变更",
		"component": true,
		"usingComponents": {
			"van-dialog": "./../../components/vant/dist/dialog/index",
			"van-cell-group": "./../../components/vant/dist/cell-group/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-icon": "./../../components/vant/dist/icon/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSchool/returnCodeChange.wxml'] = [$gwx, './pages/returnSchool/returnCodeChange.wxml'];
	else __wxAppCode__['pages/returnSchool/returnCodeChange.wxml'] = $gwx('./pages/returnSchool/returnCodeChange.wxml');
	__wxAppCode__['pages/student/bind.json'] = {
		"navigationBarTitleText": "学籍认证",
		"component": true,
		"usingComponents": {
			"van-dialog": "./../../components/vant/dist/dialog/index",
			"van-cell-group": "./../../components/vant/dist/cell-group/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-icon": "./../../components/vant/dist/icon/index",
			"van-field": "./../../components/vant/dist/field/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/student/bind.wxml'] = [$gwx, './pages/student/bind.wxml'];
	else __wxAppCode__['pages/student/bind.wxml'] = $gwx('./pages/student/bind.wxml');
	__wxAppCode__['pages/student/bindComplete.json'] = {
		"navigationBarTitleText": "学籍认证",
		"component": true,
		"usingComponents": {
			"van-icon": "./../../components/vant/dist/icon/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/student/bindComplete.wxml'] = [$gwx, './pages/student/bindComplete.wxml'];
	else __wxAppCode__['pages/student/bindComplete.wxml'] = $gwx('./pages/student/bindComplete.wxml');
	__wxAppCode__['pages/student/changeInfo.json'] = {
		"navigationBarTitleText": "学生身份认证",
		"component": true,
		"usingComponents": {
			"van-cell-group": "./../../components/vant/dist/cell-group/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-icon": "./../../components/vant/dist/icon/index",
			"van-field": "./../../components/vant/dist/field/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/student/changeInfo.wxml'] = [$gwx, './pages/student/changeInfo.wxml'];
	else __wxAppCode__['pages/student/changeInfo.wxml'] = $gwx('./pages/student/changeInfo.wxml');
	__wxAppCode__['pages/student/detail.json'] = {
		"navigationBarTitleText": "个人信息",
		"component": true,
		"usingComponents": {
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-tag": "./../../components/vant/dist/tag/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/student/detail.wxml'] = [$gwx, './pages/student/detail.wxml'];
	else __wxAppCode__['pages/student/detail.wxml'] = $gwx('./pages/student/detail.wxml');
	__wxAppCode__['pages/vaccination/apply.json'] = {
		"navigationBarTitleText": "新冠疫苗接种率统计",
		"component": true,
		"usingComponents": {
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-area": "./../../components/vant/dist/area/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/vaccination/apply.wxml'] = [$gwx, './pages/vaccination/apply.wxml'];
	else __wxAppCode__['pages/vaccination/apply.wxml'] = $gwx('./pages/vaccination/apply.wxml');
	__wxAppCode__['pages/vaccination/applyDetail.json'] = {
		"navigationBarTitleText": "接种情况修改",
		"component": true,
		"usingComponents": {
			"van-tag": "./../../components/vant/dist/tag/index",
			"van-cell": "./../../components/vant/dist/cell/index",
			"van-field": "./../../components/vant/dist/field/index",
			"van-popup": "./../../components/vant/dist/popup/index",
			"van-area": "./../../components/vant/dist/area/index",
			"error-hint": "./../../components/error-hint",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/vaccination/applyDetail.wxml'] = [$gwx, './pages/vaccination/applyDetail.wxml'];
	else __wxAppCode__['pages/vaccination/applyDetail.wxml'] = $gwx('./pages/vaccination/applyDetail.wxml');
	__wxAppCode__['pages/vaccination/complete.json'] = {
		"navigationBarTitleText": "新冠疫苗接种率统计",
		"component": true,
		"usingComponents": {
			"van-icon": "./../../components/vant/dist/icon/index",
			"nav-bar": "./../../components/nav-bar"
		}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/vaccination/complete.wxml'] = [$gwx, './pages/vaccination/complete.wxml'];
	else __wxAppCode__['pages/vaccination/complete.wxml'] = $gwx('./pages/vaccination/complete.wxml');

	define("common/api.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t, a, o, s, d, u) {
			try {
				var r = e[d](u),
					n = r.value
			} catch (e) {
				return void a(e)
			}
			r.done ? t(n) : Promise.resolve(n).then(o, s)
		}

		function a(e) {
			return function () {
				var a = this,
					o = arguments;
				return new Promise(function (s, d) {
					function u(e) {
						t(n, s, d, u, r, "next", e)
					}

					function r(e) {
						t(n, s, d, u, r, "throw", e)
					}
					var n = e.apply(a, o);
					u(void 0)
				})
			}
		}
		var o, s = e(require("./../vendor.js")(2)),
			d = e(require("./httpUtils.js")),
			u = e(require("./utils.js")),
			r = e(require("./../store/index.js")),
			n = e(require("./log.js"));
		require("./../components/vant/dist/toast/toast.js");
		module.exports = {
			getParams: o,
			cloudLogin: function (e) {	///登录函数,参数e包括code和userInfo 20274
				var t = d.default.addPrefix("/api/user/social/sign_in");
				return new Promise(function (a) {
					wx.request({
						url: t,
						method: "post",
						header: {
							"content-type": "application/x-www-form-urlencoded",
							Authorization: "Basic YXBwOjEyMzQ1Ng== "
						},
						data: e,
						success: function (e) {
							return a(e)
						},
						fail: function () {
							u.default.wxErrorToast("apiCloudLogin", "request failed", "本地网络错误")
						}
					})
				})
			},
			cloudGetStudentInfo: function (e) {
				return new Promise(function (t, o) {
					d.default.get2("/api/school_tjxsfw_student/tblStudentUsers/my", void 0, function () {
						var o = a(s.default.mark(function a(o) {
							var d;
							return s.default.wrap(function (a) {
								for (;;) switch (a.prev = a.next) {
									case 0:
										console.log("[API cloudGetStudentInfo] ok"), 200 === o.code ? o.data ? ((d = o.data).pid = o.data.studentPid, d.studentNo = o.data.studentStudentno, d.name = o.data.studentName, d.college = o.data.studentCollegeName, d.phone = o.data.studentMobilephone, d.gender = o.data.studentGender, t(d)) : u.default.wxErrorToast("doGetBind", "No data1", o.message) : 403 === o.code ? (r.default.dispatch("clearUserTokens"), n.default.info("apiCloudGetStudentInfo:Tokens Expired"), u.default.wxToast("验证过期，请重新尝试", "Verification expired", e)) : null !== o.code ? u.default.wxErrorToast("doGetBind", "No data2", o.message) : u.default.wxErrorToast("doGetBind", "No data3", "服务器获取数据失败，请稍后尝试");
									case 2:
									case "end":
										return a.stop()
								}
							}, a)
						}));
						return function (e) {
							return o.apply(this, arguments)
						}
					}(), function () {
						u.default.wxErrorToast("apiCloudGetStudentInfo", "request failed", "本地网络错误")
					})
				})
			},
			cloudCheckActivation: function (e) {
				var t = r.default.state.student.studentInfo;
				return u.default.checkHasKey(t, "pid") ? isNaN(t.pid) ? u.default.wxErrorToast("apiCloudCheckActivation", "studentInfo Pid isNaN") : u.default.checkHasKey(o, "studentPid") ? isNaN(o.studentPid) ? (this.setGetParams(t), n.default.warn("bad params 2")) : n.default.info("cloudCheckActivation:Good getParams") : (this.setGetParams(t), n.default.warn("bad params 1 ")) : u.default.wxErrorToast("apiCloudCheckActivation", "studentInfo is　NULL or studentPid is NULL"), new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/tblStudentUsers/isActivated", o, function (a) {
						u.default.checkHasKey(a, "code") && u.default.checkHasKey(a, "data") ? 200 === a.code ? t(a.data) : 400 === a.code ? u.default.wxErrToast("apiCloudCheckActivation", a.code + ":" + a.message, a.message) : 403 === a.code ? (r.default.dispatch("clearUserTokens"), n.default.info("apiCloudCheckActivation:Tokens Expired"), u.default.wxToast("验证过期，请重新尝试", "Verification expired", e)) : u.default.wxErrToast("apiCloudCheckActivation", a.code + ":" + a.message, a.message) : u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3)
					}, function () {
						u.default.wxErrorToast("apiCloudCheckActivation", "request failed")
					})
				})
			},
			cloudCheckTodayReport: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkLogDailyreport/hasDoneToday", o, function (a) {
						if (console.log("daily", a), !u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudCheckTodayReport", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudCheckTodayReport", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudCheckTodayReport", "request failed")
					})
				})
			},
			cloudGetApplyInfo: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkLogJxApplication/my", o, function (a) {
						if (u.default.checkHasKey(a, "code") && u.default.checkHasKey(a, "data")) console.log(a), 200 === a.code ? t(a.data) : 400 === a.code && "没有有效的进校申请记录" === a.message ? u.default.wxToast("您暂未获准申请进校", "您暂未获准申请进校", e) : u.default.wxErrToast("apiCloudGetApplyInfo", a.code + ":" + a.message, a.message);
						else if (u.default.wxErrorToast("apiCloudGetApplyInfo", a), u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3), !u.default.checkHasKey(a.data, "jxaId")) return u.default.wxErrorToast("cloudGetApplyInfo", a.data), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3)
					}, function () {
						u.default.wxErrorToast("apiCloudGetApplyInfo", "request failed")
					})
				})
			},
			cloudGet30DailyReport: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkLogDailyreport/", o, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGet30DailyReport", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGet30DailyReport", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGet30DailyReport", "request failed")
					})
				})
			},
			cloudGetAppealInfo: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkLogAbnormalstate/my/latest", o, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGetAppealInfo", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						console.log("cloudGetAppealInfo", a), 200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGetAppealInfo", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGetAppealInfo", "request failed")
					})
				})
			},
			cloudGetRiskLocationGov: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkRefRisklocationsGov/", void 0, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGetRiskLocationGov", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGetRiskLocationGov", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGetRiskLocationGov", "request failed")
					})
				})
			},
			cloudGetNoticeArray: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/tblAnnouncement/", void 0, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGetNoticeArray", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGetNoticeArray", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGetNoticeArray", "request failed")
					})
				})
			},
			cloudPostApply: function (e, t) {
				return new Promise(function (a) {
					d.default.post("/api/school_tjxsfw_student/yqfkLogJxApplication", e, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPostApply", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, u.default.wxErrToast("apiCloudPostApply", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPostApply", "request failed")
					})
				})
			},
			cloudPostApplyYBG: function (e, t) {
				return new Promise(function (a) {
					d.default.post("/api/school_tjxsfw_student/yqfkLogJxApplication/queue", e, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPostApply", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, u.default.wxErrToast("apiCloudPostApply", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPostApply", "request failed")
					})
				})
			},
			cloudPostApplyChangeSchoolDoor: function (e, t) {
				return new Promise(function (a) {
					d.default.post("/api/school_tjxsfw_student/yqfkLogJxApplication/modifyPlanJxCampus", e, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPostApply", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, u.default.wxErrToast("apiCloudPostApply", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPostApply", "request failed")
					})
				})
			},
			cloudPostVacationLeaveInfo: function (e, t) {
				return new Promise(function (a) {
					d.default.post("/api/school_tjxsfw_student/yqfkLogLxDjHjV2", e, function (e) {
						if (console.log(e), !u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPostVacationLeaveInfo", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, a("Expected error"), u.default.wxErrToast("apiCloudPostVacationLeaveInfo", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPostVacationLeaveInfo", "request failed")
					})
				})
			},
			cloudUploadAppeal: function (e, t, a) {
				return new Promise(function (a) {
					d.default.upload("/api/school_tjxsfw_student/yqfkLogAbnormalstate", "imageFile", e, t, function (e) {
						200 === e.code ? a(e.data) : (e.code, u.default.wxErrToast("apiCloudUploadAppeal", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudUploadAppeal", "request failed", "本地网络错误")
					})
				})
			},
			cloudUploadMedicalTestReportAppeal: function (e, t, a) {
				return new Promise(function (a) {
					d.default.upload("/api/school_tjxsfw_student/yqfkLogAbnormalstate/uploadMedicalTestInfo", "imageFileMedicalTestReport", e, t, function (e) {
						200 === e.code ? a() : (e.code, u.default.wxErrToast("apiCloudUploadMedicalTestReportAppeal", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudUploadMedicalTestReportAppeal", "request failed", "本地网络错误")
					})
				})
			},
			setGetParams: function (e) {
				!u.default.checkHasKey(e, "pid") || isNaN(e.pid) ? u.default.wxErrorToast("setGetParams", "student pid NULL Data", "服务器正忙，请稍后重试") : o = {
					studentPid: e.pid
				}
			},
			cloudGetBoolVacationLeaveInfo: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkLogLxDjHjV2/hasSubmitted", o, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGetBoolVacationLeaveInfo", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGetBoolVacationLeaveInfo", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGetBoolVacationLeaveInfo", "request failed")
					})
				})
			},
			cloudGetVacationLeaveInfo: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkLogLxDjHjV2/byId", o, function (a) {
						if (console.log(a), !u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGetVacationLeaveInfo", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGetVacationLeaveInfo", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGetVacationLeaveInfo", "request failed")
					})
				})
			},
			cloudPutVacationLeaveInfo: function (e, t) {
				return new Promise(function (a) {
					d.default.put("/api/school_tjxsfw_student/yqfkLogLxDjHjV2", e, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPutVacationLeaveInfo", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, a("Expected error"), u.default.wxErrToast("apiCloudPutVacationLeaveInfo", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPutVacationLeaveInfo", "request failed")
					})
				})
			},
			cloudPostVaccinationInfo: function (e, t) {
				return new Promise(function (a) {
					d.default.post("/api/school_tjxsfw_student/yqfkQVaccine1", e, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPostVaccinationInfo", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, a("Expected error"), u.default.wxErrToast("apiCloudPostVaccinationInfo", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPostVaccinationInfo", "request failed")
					})
				})
			},
			cloudGetVaccinationInfo: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/yqfkQVaccine1/byId", o, function (a) {
						if (console.log(a), !u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("apiCloudGetVaccinationInfo", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("apiCloudGetVaccinationInfo", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("apiCloudGetVaccinationInfo", "request failed")
					})
				})
			},
			cloudPutVaccinationInfo: function (e, t) {
				return new Promise(function (a) {
					d.default.put("/api/school_tjxsfw_student/yqfkQVaccine1", e, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudPutVaccinationInfo", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t, 2e3);
						200 === e.code ? a(e.data) : (e.code, a("Expected error"), u.default.wxErrToast("apiCloudPutVaccinationInfo", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudPutVaccinationInfo", "request failed")
					})
				})
			},
			cloudUploadVaccinationInfo: function (e, t, a) {
				return new Promise(function (o) {
					d.default.upload("/api/school_tjxsfw_student/yqfkQVaccine1", "imageFileMedicalTestReport", e, t, function (e) {
						if (!(u.default.checkHasKey(e, "status") && u.default.checkHasKey(e, "message") && 500 === e.status && e.message.startsWith("Maximum"))) return u.default.checkHasKey(e, "code") && u.default.checkHasKey(e, "data") ? void(200 === e.code ? o(e.data) : (e.code, o("Expected error"), u.default.wxErrToast("apiCloudUploadVaccinationInfo", e.code + ":" + e.message, e.message))) : (u.default.wxErrorToast("apiCloudUploadVaccinationInfo", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", a, 2e3));
						u.default.wxToast("图片过大，请上传小于1MB的图片", "图片过大，请上传小于1MB的图片", a, 2e3)
					}, function () {
						u.default.wxErrorToast("apiCloudUploadVaccinationInfo", "request failed", "本地网络错误")
					})
				})
			},
			cloudUploadVaccinationInfoChange: function (e, t, a) {
				return new Promise(function (o) {
					d.default.upload("/api/school_tjxsfw_student/yqfkQVaccine1/image", "imageFileMedicalTestReport", e, t, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("apiCloudUploadVaccinationInfoChange", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", a, 2e3);
						200 === e.code ? o(e.data) : (e.code, o("Expected error"), u.default.wxErrToast("apiCloudUploadVaccinationInfoChange", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("apiCloudUploadVaccinationInfoChange", "request failed", "本地网络错误")
					})
				})
			},
			cloudGetQuestionnaireDefine: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/csQDef/", o, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("cloudGetQuestionnaireDefine", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("cloudGetQuestionnaireDefine", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("cloudGetQuestionnaireDefine", "request failed")
					})
				})
			},
			cloudGetQuestionnaireFinish: function (e) {
				return new Promise(function (t) {
					d.default.get("/api/school_tjxsfw_student/csFile/hasSubmitted", o, function (a) {
						if (!u.default.checkHasKey(a, "code") || !u.default.checkHasKey(a, "data")) return u.default.wxErrorToast("cloudGetQuestionnaireFinish", a), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
						200 === a.code ? t(a.data) : (a.code, u.default.wxErrToast("cloudGetQuestionnaireFinish", a.code + ":" + a.message, a.message))
					}, function () {
						u.default.wxErrorToast("cloudGetQuestionnaireFinish", "request failed")
					})
				})
			},
			cloudUploadQuestionnaireAnswer: function (e, t, a) {
				return new Promise(function (o) {
					d.default.upload("/api/school_tjxsfw_student/csFile", "imageFile", e, t, function (e) {
						if (!u.default.checkHasKey(e, "code") || !u.default.checkHasKey(e, "data")) return u.default.wxErrorToast("cloudPostQuestionnaireAnswer", e), void u.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", a, 2e3);
						200 === e.code ? o(e.data) : (e.code, u.default.wxErrToast("cloudPostQuestionnaireAnswer", e.code + ":" + e.message, e.message))
					}, function () {
						u.default.wxErrorToast("cloudPostQuestionnaireAnswer", "request failed")
					})
				})
			}
		};
	});
	define("common/area.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			data: {
				areaList: {
					province_list: {
						11e4: "北京市",
						12e4: "天津市",
						13e4: "河北省",
						14e4: "山西省",
						15e4: "内蒙古自治区",
						21e4: "辽宁省",
						22e4: "吉林省",
						23e4: "黑龙江省",
						31e4: "上海市",
						32e4: "江苏省",
						33e4: "浙江省",
						34e4: "安徽省",
						35e4: "福建省",
						36e4: "江西省",
						37e4: "山东省",
						41e4: "河南省",
						42e4: "湖北省",
						43e4: "湖南省",
						44e4: "广东省",
						45e4: "广西壮族自治区",
						46e4: "海南省",
						5e5: "重庆市",
						51e4: "四川省",
						52e4: "贵州省",
						53e4: "云南省",
						54e4: "西藏自治区",
						61e4: "陕西省",
						62e4: "甘肃省",
						63e4: "青海省",
						64e4: "宁夏回族自治区",
						65e4: "新疆维吾尔自治区",
						71e4: "台湾省",
						81e4: "香港特别行政区",
						82e4: "澳门特别行政区",
						9e5: "海外"
					},
					city_list: {
						110100: "北京市",
						120100: "天津市",
						130100: "石家庄市",
						130200: "唐山市",
						130300: "秦皇岛市",
						130400: "邯郸市",
						130500: "邢台市",
						130600: "保定市",
						130700: "张家口市",
						130800: "承德市",
						130900: "沧州市",
						131e3: "廊坊市",
						131100: "衡水市",
						140100: "太原市",
						140200: "大同市",
						140300: "阳泉市",
						140400: "长治市",
						140500: "晋城市",
						140600: "朔州市",
						140700: "晋中市",
						140800: "运城市",
						140900: "忻州市",
						141e3: "临汾市",
						141100: "吕梁市",
						150100: "呼和浩特市",
						150200: "包头市",
						150300: "乌海市",
						150400: "赤峰市",
						150500: "通辽市",
						150600: "鄂尔多斯市",
						150700: "呼伦贝尔市",
						150800: "巴彦淖尔市",
						150900: "乌兰察布市",
						152200: "兴安盟",
						152500: "锡林郭勒盟",
						152900: "阿拉善盟",
						210100: "沈阳市",
						210200: "大连市",
						210300: "鞍山市",
						210400: "抚顺市",
						210500: "本溪市",
						210600: "丹东市",
						210700: "锦州市",
						210800: "营口市",
						210900: "阜新市",
						211e3: "辽阳市",
						211100: "盘锦市",
						211200: "铁岭市",
						211300: "朝阳市",
						211400: "葫芦岛市",
						220100: "长春市",
						220200: "吉林市",
						220300: "四平市",
						220400: "辽源市",
						220500: "通化市",
						220600: "白山市",
						220700: "松原市",
						220800: "白城市",
						222400: "延边朝鲜族自治州",
						230100: "哈尔滨市",
						230200: "齐齐哈尔市",
						230300: "鸡西市",
						230400: "鹤岗市",
						230500: "双鸭山市",
						230600: "大庆市",
						230700: "伊春市",
						230800: "佳木斯市",
						230900: "七台河市",
						231e3: "牡丹江市",
						231100: "黑河市",
						231200: "绥化市",
						232700: "大兴安岭地区",
						310100: "上海市",
						320100: "南京市",
						320200: "无锡市",
						320300: "徐州市",
						320400: "常州市",
						320500: "苏州市",
						320600: "南通市",
						320700: "连云港市",
						320800: "淮安市",
						320900: "盐城市",
						321e3: "扬州市",
						321100: "镇江市",
						321200: "泰州市",
						321300: "宿迁市",
						330100: "杭州市",
						330200: "宁波市",
						330300: "温州市",
						330400: "嘉兴市",
						330500: "湖州市",
						330600: "绍兴市",
						330700: "金华市",
						330800: "衢州市",
						330900: "舟山市",
						331e3: "台州市",
						331100: "丽水市",
						340100: "合肥市",
						340200: "芜湖市",
						340300: "蚌埠市",
						340400: "淮南市",
						340500: "马鞍山市",
						340600: "淮北市",
						340700: "铜陵市",
						340800: "安庆市",
						341e3: "黄山市",
						341100: "滁州市",
						341200: "阜阳市",
						341300: "宿州市",
						341500: "六安市",
						341600: "亳州市",
						341700: "池州市",
						341800: "宣城市",
						350100: "福州市",
						350200: "厦门市",
						350300: "莆田市",
						350400: "三明市",
						350500: "泉州市",
						350600: "漳州市",
						350700: "南平市",
						350800: "龙岩市",
						350900: "宁德市",
						360100: "南昌市",
						360200: "景德镇市",
						360300: "萍乡市",
						360400: "九江市",
						360500: "新余市",
						360600: "鹰潭市",
						360700: "赣州市",
						360800: "吉安市",
						360900: "宜春市",
						361e3: "抚州市",
						361100: "上饶市",
						370100: "济南市",
						370200: "青岛市",
						370300: "淄博市",
						370400: "枣庄市",
						370500: "东营市",
						370600: "烟台市",
						370700: "潍坊市",
						370800: "济宁市",
						370900: "泰安市",
						371e3: "威海市",
						371100: "日照市",
						371300: "临沂市",
						371400: "德州市",
						371500: "聊城市",
						371600: "滨州市",
						371700: "菏泽市",
						410100: "郑州市",
						410200: "开封市",
						410300: "洛阳市",
						410400: "平顶山市",
						410500: "安阳市",
						410600: "鹤壁市",
						410700: "新乡市",
						410800: "焦作市",
						410900: "濮阳市",
						411e3: "许昌市",
						411100: "漯河市",
						411200: "三门峡市",
						411300: "南阳市",
						411400: "商丘市",
						411500: "信阳市",
						411600: "周口市",
						411700: "驻马店市",
						419e3: "省直辖县",
						420100: "武汉市",
						420200: "黄石市",
						420300: "十堰市",
						420500: "宜昌市",
						420600: "襄阳市",
						420700: "鄂州市",
						420800: "荆门市",
						420900: "孝感市",
						421e3: "荆州市",
						421100: "黄冈市",
						421200: "咸宁市",
						421300: "随州市",
						422800: "恩施土家族苗族自治州",
						429e3: "省直辖县",
						430100: "长沙市",
						430200: "株洲市",
						430300: "湘潭市",
						430400: "衡阳市",
						430500: "邵阳市",
						430600: "岳阳市",
						430700: "常德市",
						430800: "张家界市",
						430900: "益阳市",
						431e3: "郴州市",
						431100: "永州市",
						431200: "怀化市",
						431300: "娄底市",
						433100: "湘西土家族苗族自治州",
						440100: "广州市",
						440200: "韶关市",
						440300: "深圳市",
						440400: "珠海市",
						440500: "汕头市",
						440600: "佛山市",
						440700: "江门市",
						440800: "湛江市",
						440900: "茂名市",
						441200: "肇庆市",
						441300: "惠州市",
						441400: "梅州市",
						441500: "汕尾市",
						441600: "河源市",
						441700: "阳江市",
						441800: "清远市",
						441900: "东莞市",
						442e3: "中山市",
						445100: "潮州市",
						445200: "揭阳市",
						445300: "云浮市",
						450100: "南宁市",
						450200: "柳州市",
						450300: "桂林市",
						450400: "梧州市",
						450500: "北海市",
						450600: "防城港市",
						450700: "钦州市",
						450800: "贵港市",
						450900: "玉林市",
						451e3: "百色市",
						451100: "贺州市",
						451200: "河池市",
						451300: "来宾市",
						451400: "崇左市",
						460100: "海口市",
						460200: "三亚市",
						460300: "三沙市",
						460400: "儋州市",
						469e3: "省直辖县",
						500100: "重庆市",
						500200: "县",
						510100: "成都市",
						510300: "自贡市",
						510400: "攀枝花市",
						510500: "泸州市",
						510600: "德阳市",
						510700: "绵阳市",
						510800: "广元市",
						510900: "遂宁市",
						511e3: "内江市",
						511100: "乐山市",
						511300: "南充市",
						511400: "眉山市",
						511500: "宜宾市",
						511600: "广安市",
						511700: "达州市",
						511800: "雅安市",
						511900: "巴中市",
						512e3: "资阳市",
						513200: "阿坝藏族羌族自治州",
						513300: "甘孜藏族自治州",
						513400: "凉山彝族自治州",
						520100: "贵阳市",
						520200: "六盘水市",
						520300: "遵义市",
						520400: "安顺市",
						520500: "毕节市",
						520600: "铜仁市",
						522300: "黔西南布依族苗族自治州",
						522600: "黔东南苗族侗族自治州",
						522700: "黔南布依族苗族自治州",
						530100: "昆明市",
						530300: "曲靖市",
						530400: "玉溪市",
						530500: "保山市",
						530600: "昭通市",
						530700: "丽江市",
						530800: "普洱市",
						530900: "临沧市",
						532300: "楚雄彝族自治州",
						532500: "红河哈尼族彝族自治州",
						532600: "文山壮族苗族自治州",
						532800: "西双版纳傣族自治州",
						532900: "大理白族自治州",
						533100: "德宏傣族景颇族自治州",
						533300: "怒江傈僳族自治州",
						533400: "迪庆藏族自治州",
						540100: "拉萨市",
						540200: "日喀则市",
						540300: "昌都市",
						540400: "林芝市",
						540500: "山南市",
						540600: "那曲市",
						542500: "阿里地区",
						610100: "西安市",
						610200: "铜川市",
						610300: "宝鸡市",
						610400: "咸阳市",
						610500: "渭南市",
						610600: "延安市",
						610700: "汉中市",
						610800: "榆林市",
						610900: "安康市",
						611e3: "商洛市",
						620100: "兰州市",
						620200: "嘉峪关市",
						620300: "金昌市",
						620400: "白银市",
						620500: "天水市",
						620600: "武威市",
						620700: "张掖市",
						620800: "平凉市",
						620900: "酒泉市",
						621e3: "庆阳市",
						621100: "定西市",
						621200: "陇南市",
						622900: "临夏回族自治州",
						623e3: "甘南藏族自治州",
						630100: "西宁市",
						630200: "海东市",
						632200: "海北藏族自治州",
						632300: "黄南藏族自治州",
						632500: "海南藏族自治州",
						632600: "果洛藏族自治州",
						632700: "玉树藏族自治州",
						632800: "海西蒙古族藏族自治州",
						640100: "银川市",
						640200: "石嘴山市",
						640300: "吴忠市",
						640400: "固原市",
						640500: "中卫市",
						650100: "乌鲁木齐市",
						650200: "克拉玛依市",
						650400: "吐鲁番市",
						650500: "哈密市",
						652300: "昌吉回族自治州",
						652700: "博尔塔拉蒙古自治州",
						652800: "巴音郭楞蒙古自治州",
						652900: "阿克苏地区",
						653e3: "克孜勒苏柯尔克孜自治州",
						653100: "喀什地区",
						653200: "和田地区",
						654e3: "伊犁哈萨克自治州",
						654200: "塔城地区",
						654300: "阿勒泰地区",
						659e3: "自治区直辖县级行政区划",
						710100: "台北市",
						710200: "高雄市",
						710300: "台南市",
						710400: "台中市",
						710500: "金门县",
						710600: "南投县",
						710700: "基隆市",
						710800: "新竹市",
						710900: "嘉义市",
						711100: "新北市",
						711200: "宜兰县",
						711300: "新竹县",
						711400: "桃园县",
						711500: "苗栗县",
						711700: "彰化县",
						711900: "嘉义县",
						712100: "云林县",
						712400: "屏东县",
						712500: "台东县",
						712600: "花莲县",
						712700: "澎湖县",
						712800: "连江县",
						810100: "香港岛",
						810200: "九龙",
						810300: "新界",
						820100: "澳门半岛",
						820200: "离岛",
						901100: "亚洲",
						901200: "非洲",
						901300: "欧洲",
						901400: "北美",
						901500: "南美",
						901600: "大洋洲"
					},
					county_list: {
						110101: "东城区",
						110102: "西城区",
						110105: "朝阳区",
						110106: "丰台区",
						110107: "石景山区",
						110108: "海淀区",
						110109: "门头沟区",
						110111: "房山区",
						110112: "通州区",
						110113: "顺义区",
						110114: "昌平区",
						110115: "大兴区",
						110116: "怀柔区",
						110117: "平谷区",
						110118: "密云区",
						110119: "延庆区",
						120101: "和平区",
						120102: "河东区",
						120103: "河西区",
						120104: "南开区",
						120105: "河北区",
						120106: "红桥区",
						120110: "东丽区",
						120111: "西青区",
						120112: "津南区",
						120113: "北辰区",
						120114: "武清区",
						120115: "宝坻区",
						120116: "滨海新区",
						120117: "宁河区",
						120118: "静海区",
						120119: "蓟州区",
						130102: "长安区",
						130104: "桥西区",
						130105: "新华区",
						130107: "井陉矿区",
						130108: "裕华区",
						130109: "藁城区",
						130110: "鹿泉区",
						130111: "栾城区",
						130121: "井陉县",
						130123: "正定县",
						130125: "行唐县",
						130126: "灵寿县",
						130127: "高邑县",
						130128: "深泽县",
						130129: "赞皇县",
						130130: "无极县",
						130131: "平山县",
						130132: "元氏县",
						130133: "赵县",
						130181: "辛集市",
						130183: "晋州市",
						130184: "新乐市",
						130202: "路南区",
						130203: "路北区",
						130204: "古冶区",
						130205: "开平区",
						130207: "丰南区",
						130208: "丰润区",
						130209: "曹妃甸区",
						130224: "滦南县",
						130225: "乐亭县",
						130227: "迁西县",
						130229: "玉田县",
						130281: "遵化市",
						130283: "迁安市",
						130284: "滦州市",
						130302: "海港区",
						130303: "山海关区",
						130304: "北戴河区",
						130306: "抚宁区",
						130321: "青龙满族自治县",
						130322: "昌黎县",
						130324: "卢龙县",
						130390: "经济技术开发区",
						130402: "邯山区",
						130403: "丛台区",
						130404: "复兴区",
						130406: "峰峰矿区",
						130407: "肥乡区",
						130408: "永年区",
						130423: "临漳县",
						130424: "成安县",
						130425: "大名县",
						130426: "涉县",
						130427: "磁县",
						130430: "邱县",
						130431: "鸡泽县",
						130432: "广平县",
						130433: "馆陶县",
						130434: "魏县",
						130435: "曲周县",
						130481: "武安市",
						130502: "桥东区",
						130503: "桥西区",
						130521: "邢台县",
						130522: "临城县",
						130523: "内丘县",
						130524: "柏乡县",
						130525: "隆尧县",
						130526: "任县",
						130527: "南和县",
						130528: "宁晋县",
						130529: "巨鹿县",
						130530: "新河县",
						130531: "广宗县",
						130532: "平乡县",
						130533: "威县",
						130534: "清河县",
						130535: "临西县",
						130581: "南宫市",
						130582: "沙河市",
						130602: "竞秀区",
						130606: "莲池区",
						130607: "满城区",
						130608: "清苑区",
						130609: "徐水区",
						130623: "涞水县",
						130624: "阜平县",
						130626: "定兴县",
						130627: "唐县",
						130628: "高阳县",
						130629: "容城县",
						130630: "涞源县",
						130631: "望都县",
						130632: "安新县",
						130633: "易县",
						130634: "曲阳县",
						130635: "蠡县",
						130636: "顺平县",
						130637: "博野县",
						130638: "雄县",
						130681: "涿州市",
						130682: "定州市",
						130683: "安国市",
						130684: "高碑店市",
						130702: "桥东区",
						130703: "桥西区",
						130705: "宣化区",
						130706: "下花园区",
						130708: "万全区",
						130709: "崇礼区",
						130722: "张北县",
						130723: "康保县",
						130724: "沽源县",
						130725: "尚义县",
						130726: "蔚县",
						130727: "阳原县",
						130728: "怀安县",
						130730: "怀来县",
						130731: "涿鹿县",
						130732: "赤城县",
						130802: "双桥区",
						130803: "双滦区",
						130804: "鹰手营子矿区",
						130821: "承德县",
						130822: "兴隆县",
						130824: "滦平县",
						130825: "隆化县",
						130826: "丰宁满族自治县",
						130827: "宽城满族自治县",
						130828: "围场满族蒙古族自治县",
						130881: "平泉市",
						130902: "新华区",
						130903: "运河区",
						130921: "沧县",
						130922: "青县",
						130923: "东光县",
						130924: "海兴县",
						130925: "盐山县",
						130926: "肃宁县",
						130927: "南皮县",
						130928: "吴桥县",
						130929: "献县",
						130930: "孟村回族自治县",
						130981: "泊头市",
						130982: "任丘市",
						130983: "黄骅市",
						130984: "河间市",
						131002: "安次区",
						131003: "广阳区",
						131022: "固安县",
						131023: "永清县",
						131024: "香河县",
						131025: "大城县",
						131026: "文安县",
						131028: "大厂回族自治县",
						131081: "霸州市",
						131082: "三河市",
						131090: "开发区",
						131102: "桃城区",
						131103: "冀州区",
						131121: "枣强县",
						131122: "武邑县",
						131123: "武强县",
						131124: "饶阳县",
						131125: "安平县",
						131126: "故城县",
						131127: "景县",
						131128: "阜城县",
						131182: "深州市",
						140105: "小店区",
						140106: "迎泽区",
						140107: "杏花岭区",
						140108: "尖草坪区",
						140109: "万柏林区",
						140110: "晋源区",
						140121: "清徐县",
						140122: "阳曲县",
						140123: "娄烦县",
						140181: "古交市",
						140212: "新荣区",
						140213: "平城区",
						140214: "云冈区",
						140215: "云州区",
						140221: "阳高县",
						140222: "天镇县",
						140223: "广灵县",
						140224: "灵丘县",
						140225: "浑源县",
						140226: "左云县",
						140302: "城区",
						140303: "矿区",
						140311: "郊区",
						140321: "平定县",
						140322: "盂县",
						140403: "潞州区",
						140404: "上党区",
						140405: "屯留区",
						140406: "潞城区",
						140423: "襄垣县",
						140425: "平顺县",
						140426: "黎城县",
						140427: "壶关县",
						140428: "长子县",
						140429: "武乡县",
						140430: "沁县",
						140431: "沁源县",
						140502: "城区",
						140521: "沁水县",
						140522: "阳城县",
						140524: "陵川县",
						140525: "泽州县",
						140581: "高平市",
						140602: "朔城区",
						140603: "平鲁区",
						140621: "山阴县",
						140622: "应县",
						140623: "右玉县",
						140681: "怀仁市",
						140702: "榆次区",
						140721: "榆社县",
						140722: "左权县",
						140723: "和顺县",
						140724: "昔阳县",
						140725: "寿阳县",
						140726: "太谷县",
						140727: "祁县",
						140728: "平遥县",
						140729: "灵石县",
						140781: "介休市",
						140802: "盐湖区",
						140821: "临猗县",
						140822: "万荣县",
						140823: "闻喜县",
						140824: "稷山县",
						140825: "新绛县",
						140826: "绛县",
						140827: "垣曲县",
						140828: "夏县",
						140829: "平陆县",
						140830: "芮城县",
						140881: "永济市",
						140882: "河津市",
						140902: "忻府区",
						140921: "定襄县",
						140922: "五台县",
						140923: "代县",
						140924: "繁峙县",
						140925: "宁武县",
						140926: "静乐县",
						140927: "神池县",
						140928: "五寨县",
						140929: "岢岚县",
						140930: "河曲县",
						140931: "保德县",
						140932: "偏关县",
						140981: "原平市",
						141002: "尧都区",
						141021: "曲沃县",
						141022: "翼城县",
						141023: "襄汾县",
						141024: "洪洞县",
						141025: "古县",
						141026: "安泽县",
						141027: "浮山县",
						141028: "吉县",
						141029: "乡宁县",
						141030: "大宁县",
						141031: "隰县",
						141032: "永和县",
						141033: "蒲县",
						141034: "汾西县",
						141081: "侯马市",
						141082: "霍州市",
						141102: "离石区",
						141121: "文水县",
						141122: "交城县",
						141123: "兴县",
						141124: "临县",
						141125: "柳林县",
						141126: "石楼县",
						141127: "岚县",
						141128: "方山县",
						141129: "中阳县",
						141130: "交口县",
						141181: "孝义市",
						141182: "汾阳市",
						150102: "新城区",
						150103: "回民区",
						150104: "玉泉区",
						150105: "赛罕区",
						150121: "土默特左旗",
						150122: "托克托县",
						150123: "和林格尔县",
						150124: "清水河县",
						150125: "武川县",
						150202: "东河区",
						150203: "昆都仑区",
						150204: "青山区",
						150205: "石拐区",
						150206: "白云鄂博矿区",
						150207: "九原区",
						150221: "土默特右旗",
						150222: "固阳县",
						150223: "达尔罕茂明安联合旗",
						150302: "海勃湾区",
						150303: "海南区",
						150304: "乌达区",
						150402: "红山区",
						150403: "元宝山区",
						150404: "松山区",
						150421: "阿鲁科尔沁旗",
						150422: "巴林左旗",
						150423: "巴林右旗",
						150424: "林西县",
						150425: "克什克腾旗",
						150426: "翁牛特旗",
						150428: "喀喇沁旗",
						150429: "宁城县",
						150430: "敖汉旗",
						150502: "科尔沁区",
						150521: "科尔沁左翼中旗",
						150522: "科尔沁左翼后旗",
						150523: "开鲁县",
						150524: "库伦旗",
						150525: "奈曼旗",
						150526: "扎鲁特旗",
						150581: "霍林郭勒市",
						150602: "东胜区",
						150603: "康巴什区",
						150621: "达拉特旗",
						150622: "准格尔旗",
						150623: "鄂托克前旗",
						150624: "鄂托克旗",
						150625: "杭锦旗",
						150626: "乌审旗",
						150627: "伊金霍洛旗",
						150702: "海拉尔区",
						150703: "扎赉诺尔区",
						150721: "阿荣旗",
						150722: "莫力达瓦达斡尔族自治旗",
						150723: "鄂伦春自治旗",
						150724: "鄂温克族自治旗",
						150725: "陈巴尔虎旗",
						150726: "新巴尔虎左旗",
						150727: "新巴尔虎右旗",
						150781: "满洲里市",
						150782: "牙克石市",
						150783: "扎兰屯市",
						150784: "额尔古纳市",
						150785: "根河市",
						150802: "临河区",
						150821: "五原县",
						150822: "磴口县",
						150823: "乌拉特前旗",
						150824: "乌拉特中旗",
						150825: "乌拉特后旗",
						150826: "杭锦后旗",
						150902: "集宁区",
						150921: "卓资县",
						150922: "化德县",
						150923: "商都县",
						150924: "兴和县",
						150925: "凉城县",
						150926: "察哈尔右翼前旗",
						150927: "察哈尔右翼中旗",
						150928: "察哈尔右翼后旗",
						150929: "四子王旗",
						150981: "丰镇市",
						152201: "乌兰浩特市",
						152202: "阿尔山市",
						152221: "科尔沁右翼前旗",
						152222: "科尔沁右翼中旗",
						152223: "扎赉特旗",
						152224: "突泉县",
						152501: "二连浩特市",
						152502: "锡林浩特市",
						152522: "阿巴嘎旗",
						152523: "苏尼特左旗",
						152524: "苏尼特右旗",
						152525: "东乌珠穆沁旗",
						152526: "西乌珠穆沁旗",
						152527: "太仆寺旗",
						152528: "镶黄旗",
						152529: "正镶白旗",
						152530: "正蓝旗",
						152531: "多伦县",
						152921: "阿拉善左旗",
						152922: "阿拉善右旗",
						152923: "额济纳旗",
						210102: "和平区",
						210103: "沈河区",
						210104: "大东区",
						210105: "皇姑区",
						210106: "铁西区",
						210111: "苏家屯区",
						210112: "浑南区",
						210113: "沈北新区",
						210114: "于洪区",
						210115: "辽中区",
						210123: "康平县",
						210124: "法库县",
						210181: "新民市",
						210190: "经济技术开发区",
						210202: "中山区",
						210203: "西岗区",
						210204: "沙河口区",
						210211: "甘井子区",
						210212: "旅顺口区",
						210213: "金州区",
						210214: "普兰店区",
						210224: "长海县",
						210281: "瓦房店市",
						210283: "庄河市",
						210302: "铁东区",
						210303: "铁西区",
						210304: "立山区",
						210311: "千山区",
						210321: "台安县",
						210323: "岫岩满族自治县",
						210381: "海城市",
						210390: "高新区",
						210402: "新抚区",
						210403: "东洲区",
						210404: "望花区",
						210411: "顺城区",
						210421: "抚顺县",
						210422: "新宾满族自治县",
						210423: "清原满族自治县",
						210502: "平山区",
						210503: "溪湖区",
						210504: "明山区",
						210505: "南芬区",
						210521: "本溪满族自治县",
						210522: "桓仁满族自治县",
						210602: "元宝区",
						210603: "振兴区",
						210604: "振安区",
						210624: "宽甸满族自治县",
						210681: "东港市",
						210682: "凤城市",
						210702: "古塔区",
						210703: "凌河区",
						210711: "太和区",
						210726: "黑山县",
						210727: "义县",
						210781: "凌海市",
						210782: "北镇市",
						210793: "经济技术开发区",
						210802: "站前区",
						210803: "西市区",
						210804: "鲅鱼圈区",
						210811: "老边区",
						210881: "盖州市",
						210882: "大石桥市",
						210902: "海州区",
						210903: "新邱区",
						210904: "太平区",
						210905: "清河门区",
						210911: "细河区",
						210921: "阜新蒙古族自治县",
						210922: "彰武县",
						211002: "白塔区",
						211003: "文圣区",
						211004: "宏伟区",
						211005: "弓长岭区",
						211011: "太子河区",
						211021: "辽阳县",
						211081: "灯塔市",
						211102: "双台子区",
						211103: "兴隆台区",
						211104: "大洼区",
						211122: "盘山县",
						211202: "银州区",
						211204: "清河区",
						211221: "铁岭县",
						211223: "西丰县",
						211224: "昌图县",
						211281: "调兵山市",
						211282: "开原市",
						211302: "双塔区",
						211303: "龙城区",
						211321: "朝阳县",
						211322: "建平县",
						211324: "喀喇沁左翼蒙古族自治县",
						211381: "北票市",
						211382: "凌源市",
						211402: "连山区",
						211403: "龙港区",
						211404: "南票区",
						211421: "绥中县",
						211422: "建昌县",
						211481: "兴城市",
						220102: "南关区",
						220103: "宽城区",
						220104: "朝阳区",
						220105: "二道区",
						220106: "绿园区",
						220112: "双阳区",
						220113: "九台区",
						220122: "农安县",
						220182: "榆树市",
						220183: "德惠市",
						220192: "经济技术开发区",
						220202: "昌邑区",
						220203: "龙潭区",
						220204: "船营区",
						220211: "丰满区",
						220221: "永吉县",
						220281: "蛟河市",
						220282: "桦甸市",
						220283: "舒兰市",
						220284: "磐石市",
						220302: "铁西区",
						220303: "铁东区",
						220322: "梨树县",
						220323: "伊通满族自治县",
						220381: "公主岭市",
						220382: "双辽市",
						220402: "龙山区",
						220403: "西安区",
						220421: "东丰县",
						220422: "东辽县",
						220502: "东昌区",
						220503: "二道江区",
						220521: "通化县",
						220523: "辉南县",
						220524: "柳河县",
						220581: "梅河口市",
						220582: "集安市",
						220602: "浑江区",
						220605: "江源区",
						220621: "抚松县",
						220622: "靖宇县",
						220623: "长白朝鲜族自治县",
						220681: "临江市",
						220702: "宁江区",
						220721: "前郭尔罗斯蒙古族自治县",
						220722: "长岭县",
						220723: "乾安县",
						220781: "扶余市",
						220802: "洮北区",
						220821: "镇赉县",
						220822: "通榆县",
						220881: "洮南市",
						220882: "大安市",
						222401: "延吉市",
						222402: "图们市",
						222403: "敦化市",
						222404: "珲春市",
						222405: "龙井市",
						222406: "和龙市",
						222424: "汪清县",
						222426: "安图县",
						230102: "道里区",
						230103: "南岗区",
						230104: "道外区",
						230108: "平房区",
						230109: "松北区",
						230110: "香坊区",
						230111: "呼兰区",
						230112: "阿城区",
						230113: "双城区",
						230123: "依兰县",
						230124: "方正县",
						230125: "宾县",
						230126: "巴彦县",
						230127: "木兰县",
						230128: "通河县",
						230129: "延寿县",
						230183: "尚志市",
						230184: "五常市",
						230202: "龙沙区",
						230203: "建华区",
						230204: "铁锋区",
						230205: "昂昂溪区",
						230206: "富拉尔基区",
						230207: "碾子山区",
						230208: "梅里斯达斡尔族区",
						230221: "龙江县",
						230223: "依安县",
						230224: "泰来县",
						230225: "甘南县",
						230227: "富裕县",
						230229: "克山县",
						230230: "克东县",
						230231: "拜泉县",
						230281: "讷河市",
						230302: "鸡冠区",
						230303: "恒山区",
						230304: "滴道区",
						230305: "梨树区",
						230306: "城子河区",
						230307: "麻山区",
						230321: "鸡东县",
						230381: "虎林市",
						230382: "密山市",
						230402: "向阳区",
						230403: "工农区",
						230404: "南山区",
						230405: "兴安区",
						230406: "东山区",
						230407: "兴山区",
						230421: "萝北县",
						230422: "绥滨县",
						230502: "尖山区",
						230503: "岭东区",
						230505: "四方台区",
						230506: "宝山区",
						230521: "集贤县",
						230522: "友谊县",
						230523: "宝清县",
						230524: "饶河县",
						230602: "萨尔图区",
						230603: "龙凤区",
						230604: "让胡路区",
						230605: "红岗区",
						230606: "大同区",
						230621: "肇州县",
						230622: "肇源县",
						230623: "林甸县",
						230624: "杜尔伯特蒙古族自治县",
						230702: "伊春区",
						230703: "南岔区",
						230704: "友好区",
						230705: "西林区",
						230706: "翠峦区",
						230707: "新青区",
						230708: "美溪区",
						230709: "金山屯区",
						230710: "五营区",
						230711: "乌马河区",
						230712: "汤旺河区",
						230713: "带岭区",
						230714: "乌伊岭区",
						230715: "红星区",
						230716: "上甘岭区",
						230722: "嘉荫县",
						230781: "铁力市",
						230803: "向阳区",
						230804: "前进区",
						230805: "东风区",
						230811: "郊区",
						230822: "桦南县",
						230826: "桦川县",
						230828: "汤原县",
						230881: "同江市",
						230882: "富锦市",
						230883: "抚远市",
						230902: "新兴区",
						230903: "桃山区",
						230904: "茄子河区",
						230921: "勃利县",
						231002: "东安区",
						231003: "阳明区",
						231004: "爱民区",
						231005: "西安区",
						231025: "林口县",
						231081: "绥芬河市",
						231083: "海林市",
						231084: "宁安市",
						231085: "穆棱市",
						231086: "东宁市",
						231102: "爱辉区",
						231121: "嫩江县",
						231123: "逊克县",
						231124: "孙吴县",
						231181: "北安市",
						231182: "五大连池市",
						231202: "北林区",
						231221: "望奎县",
						231222: "兰西县",
						231223: "青冈县",
						231224: "庆安县",
						231225: "明水县",
						231226: "绥棱县",
						231281: "安达市",
						231282: "肇东市",
						231283: "海伦市",
						232701: "漠河市",
						232721: "呼玛县",
						232722: "塔河县",
						232790: "松岭区",
						232791: "呼中区",
						232792: "加格达奇区",
						232793: "新林区",
						310101: "黄浦区",
						310104: "徐汇区",
						310105: "长宁区",
						310106: "静安区",
						310107: "普陀区",
						310109: "虹口区",
						310110: "杨浦区",
						310112: "闵行区",
						310113: "宝山区",
						310114: "嘉定区",
						310115: "浦东新区",
						310116: "金山区",
						310117: "松江区",
						310118: "青浦区",
						310120: "奉贤区",
						310151: "崇明区",
						320102: "玄武区",
						320104: "秦淮区",
						320105: "建邺区",
						320106: "鼓楼区",
						320111: "浦口区",
						320113: "栖霞区",
						320114: "雨花台区",
						320115: "江宁区",
						320116: "六合区",
						320117: "溧水区",
						320118: "高淳区",
						320205: "锡山区",
						320206: "惠山区",
						320211: "滨湖区",
						320213: "梁溪区",
						320214: "新吴区",
						320281: "江阴市",
						320282: "宜兴市",
						320302: "鼓楼区",
						320303: "云龙区",
						320305: "贾汪区",
						320311: "泉山区",
						320312: "铜山区",
						320321: "丰县",
						320322: "沛县",
						320324: "睢宁县",
						320381: "新沂市",
						320382: "邳州市",
						320391: "工业园区",
						320402: "天宁区",
						320404: "钟楼区",
						320411: "新北区",
						320412: "武进区",
						320413: "金坛区",
						320481: "溧阳市",
						320505: "虎丘区",
						320506: "吴中区",
						320507: "相城区",
						320508: "姑苏区",
						320509: "吴江区",
						320581: "常熟市",
						320582: "张家港市",
						320583: "昆山市",
						320585: "太仓市",
						320590: "工业园区",
						320591: "高新区",
						320602: "崇川区",
						320611: "港闸区",
						320612: "通州区",
						320623: "如东县",
						320681: "启东市",
						320682: "如皋市",
						320684: "海门市",
						320685: "海安市",
						320691: "高新区",
						320703: "连云区",
						320706: "海州区",
						320707: "赣榆区",
						320722: "东海县",
						320723: "灌云县",
						320724: "灌南县",
						320803: "淮安区",
						320804: "淮阴区",
						320812: "清江浦区",
						320813: "洪泽区",
						320826: "涟水县",
						320830: "盱眙县",
						320831: "金湖县",
						320890: "经济开发区",
						320902: "亭湖区",
						320903: "盐都区",
						320904: "大丰区",
						320921: "响水县",
						320922: "滨海县",
						320923: "阜宁县",
						320924: "射阳县",
						320925: "建湖县",
						320981: "东台市",
						321002: "广陵区",
						321003: "邗江区",
						321012: "江都区",
						321023: "宝应县",
						321081: "仪征市",
						321084: "高邮市",
						321090: "经济开发区",
						321102: "京口区",
						321111: "润州区",
						321112: "丹徒区",
						321181: "丹阳市",
						321182: "扬中市",
						321183: "句容市",
						321202: "海陵区",
						321203: "高港区",
						321204: "姜堰区",
						321281: "兴化市",
						321282: "靖江市",
						321283: "泰兴市",
						321302: "宿城区",
						321311: "宿豫区",
						321322: "沭阳县",
						321323: "泗阳县",
						321324: "泗洪县",
						330102: "上城区",
						330103: "下城区",
						330104: "江干区",
						330105: "拱墅区",
						330106: "西湖区",
						330108: "滨江区",
						330109: "萧山区",
						330110: "余杭区",
						330111: "富阳区",
						330112: "临安区",
						330122: "桐庐县",
						330127: "淳安县",
						330182: "建德市",
						330203: "海曙区",
						330205: "江北区",
						330206: "北仑区",
						330211: "镇海区",
						330212: "鄞州区",
						330213: "奉化区",
						330225: "象山县",
						330226: "宁海县",
						330281: "余姚市",
						330282: "慈溪市",
						330302: "鹿城区",
						330303: "龙湾区",
						330304: "瓯海区",
						330305: "洞头区",
						330324: "永嘉县",
						330326: "平阳县",
						330327: "苍南县",
						330328: "文成县",
						330329: "泰顺县",
						330381: "瑞安市",
						330382: "乐清市",
						330402: "南湖区",
						330411: "秀洲区",
						330421: "嘉善县",
						330424: "海盐县",
						330481: "海宁市",
						330482: "平湖市",
						330483: "桐乡市",
						330502: "吴兴区",
						330503: "南浔区",
						330521: "德清县",
						330522: "长兴县",
						330523: "安吉县",
						330602: "越城区",
						330603: "柯桥区",
						330604: "上虞区",
						330624: "新昌县",
						330681: "诸暨市",
						330683: "嵊州市",
						330702: "婺城区",
						330703: "金东区",
						330723: "武义县",
						330726: "浦江县",
						330727: "磐安县",
						330781: "兰溪市",
						330782: "义乌市",
						330783: "东阳市",
						330784: "永康市",
						330802: "柯城区",
						330803: "衢江区",
						330822: "常山县",
						330824: "开化县",
						330825: "龙游县",
						330881: "江山市",
						330902: "定海区",
						330903: "普陀区",
						330921: "岱山县",
						330922: "嵊泗县",
						331002: "椒江区",
						331003: "黄岩区",
						331004: "路桥区",
						331022: "三门县",
						331023: "天台县",
						331024: "仙居县",
						331081: "温岭市",
						331082: "临海市",
						331083: "玉环市",
						331102: "莲都区",
						331121: "青田县",
						331122: "缙云县",
						331123: "遂昌县",
						331124: "松阳县",
						331125: "云和县",
						331126: "庆元县",
						331127: "景宁畲族自治县",
						331181: "龙泉市",
						340102: "瑶海区",
						340103: "庐阳区",
						340104: "蜀山区",
						340111: "包河区",
						340121: "长丰县",
						340122: "肥东县",
						340123: "肥西县",
						340124: "庐江县",
						340181: "巢湖市",
						340190: "高新技术开发区",
						340191: "经济技术开发区",
						340202: "镜湖区",
						340203: "弋江区",
						340207: "鸠江区",
						340208: "三山区",
						340221: "芜湖县",
						340222: "繁昌县",
						340223: "南陵县",
						340225: "无为县",
						340302: "龙子湖区",
						340303: "蚌山区",
						340304: "禹会区",
						340311: "淮上区",
						340321: "怀远县",
						340322: "五河县",
						340323: "固镇县",
						340402: "大通区",
						340403: "田家庵区",
						340404: "谢家集区",
						340405: "八公山区",
						340406: "潘集区",
						340421: "凤台县",
						340422: "寿县",
						340503: "花山区",
						340504: "雨山区",
						340506: "博望区",
						340521: "当涂县",
						340522: "含山县",
						340523: "和县",
						340602: "杜集区",
						340603: "相山区",
						340604: "烈山区",
						340621: "濉溪县",
						340705: "铜官区",
						340706: "义安区",
						340711: "郊区",
						340722: "枞阳县",
						340802: "迎江区",
						340803: "大观区",
						340811: "宜秀区",
						340822: "怀宁县",
						340824: "潜山县",
						340825: "太湖县",
						340826: "宿松县",
						340827: "望江县",
						340828: "岳西县",
						340881: "桐城市",
						341002: "屯溪区",
						341003: "黄山区",
						341004: "徽州区",
						341021: "歙县",
						341022: "休宁县",
						341023: "黟县",
						341024: "祁门县",
						341102: "琅琊区",
						341103: "南谯区",
						341122: "来安县",
						341124: "全椒县",
						341125: "定远县",
						341126: "凤阳县",
						341181: "天长市",
						341182: "明光市",
						341202: "颍州区",
						341203: "颍东区",
						341204: "颍泉区",
						341221: "临泉县",
						341222: "太和县",
						341225: "阜南县",
						341226: "颍上县",
						341282: "界首市",
						341302: "埇桥区",
						341321: "砀山县",
						341322: "萧县",
						341323: "灵璧县",
						341324: "泗县",
						341390: "经济开发区",
						341502: "金安区",
						341503: "裕安区",
						341504: "叶集区",
						341522: "霍邱县",
						341523: "舒城县",
						341524: "金寨县",
						341525: "霍山县",
						341602: "谯城区",
						341621: "涡阳县",
						341622: "蒙城县",
						341623: "利辛县",
						341702: "贵池区",
						341721: "东至县",
						341722: "石台县",
						341723: "青阳县",
						341802: "宣州区",
						341821: "郎溪县",
						341822: "广德县",
						341823: "泾县",
						341824: "绩溪县",
						341825: "旌德县",
						341881: "宁国市",
						350102: "鼓楼区",
						350103: "台江区",
						350104: "仓山区",
						350105: "马尾区",
						350111: "晋安区",
						350112: "长乐区",
						350121: "闽侯县",
						350122: "连江县",
						350123: "罗源县",
						350124: "闽清县",
						350125: "永泰县",
						350128: "平潭县",
						350181: "福清市",
						350203: "思明区",
						350205: "海沧区",
						350206: "湖里区",
						350211: "集美区",
						350212: "同安区",
						350213: "翔安区",
						350302: "城厢区",
						350303: "涵江区",
						350304: "荔城区",
						350305: "秀屿区",
						350322: "仙游县",
						350402: "梅列区",
						350403: "三元区",
						350421: "明溪县",
						350423: "清流县",
						350424: "宁化县",
						350425: "大田县",
						350426: "尤溪县",
						350427: "沙县",
						350428: "将乐县",
						350429: "泰宁县",
						350430: "建宁县",
						350481: "永安市",
						350502: "鲤城区",
						350503: "丰泽区",
						350504: "洛江区",
						350505: "泉港区",
						350521: "惠安县",
						350524: "安溪县",
						350525: "永春县",
						350526: "德化县",
						350527: "金门县",
						350581: "石狮市",
						350582: "晋江市",
						350583: "南安市",
						350602: "芗城区",
						350603: "龙文区",
						350622: "云霄县",
						350623: "漳浦县",
						350624: "诏安县",
						350625: "长泰县",
						350626: "东山县",
						350627: "南靖县",
						350628: "平和县",
						350629: "华安县",
						350681: "龙海市",
						350702: "延平区",
						350703: "建阳区",
						350721: "顺昌县",
						350722: "浦城县",
						350723: "光泽县",
						350724: "松溪县",
						350725: "政和县",
						350781: "邵武市",
						350782: "武夷山市",
						350783: "建瓯市",
						350802: "新罗区",
						350803: "永定区",
						350821: "长汀县",
						350823: "上杭县",
						350824: "武平县",
						350825: "连城县",
						350881: "漳平市",
						350902: "蕉城区",
						350921: "霞浦县",
						350922: "古田县",
						350923: "屏南县",
						350924: "寿宁县",
						350925: "周宁县",
						350926: "柘荣县",
						350981: "福安市",
						350982: "福鼎市",
						360102: "东湖区",
						360103: "西湖区",
						360104: "青云谱区",
						360105: "湾里区",
						360111: "青山湖区",
						360112: "新建区",
						360121: "南昌县",
						360123: "安义县",
						360124: "进贤县",
						360190: "经济技术开发区",
						360192: "高新区",
						360202: "昌江区",
						360203: "珠山区",
						360222: "浮梁县",
						360281: "乐平市",
						360302: "安源区",
						360313: "湘东区",
						360321: "莲花县",
						360322: "上栗县",
						360323: "芦溪县",
						360402: "濂溪区",
						360403: "浔阳区",
						360404: "柴桑区",
						360423: "武宁县",
						360424: "修水县",
						360425: "永修县",
						360426: "德安县",
						360428: "都昌县",
						360429: "湖口县",
						360430: "彭泽县",
						360481: "瑞昌市",
						360482: "共青城市",
						360483: "庐山市",
						360490: "经济技术开发区",
						360502: "渝水区",
						360521: "分宜县",
						360602: "月湖区",
						360603: "余江区",
						360681: "贵溪市",
						360702: "章贡区",
						360703: "南康区",
						360704: "赣县区",
						360722: "信丰县",
						360723: "大余县",
						360724: "上犹县",
						360725: "崇义县",
						360726: "安远县",
						360727: "龙南县",
						360728: "定南县",
						360729: "全南县",
						360730: "宁都县",
						360731: "于都县",
						360732: "兴国县",
						360733: "会昌县",
						360734: "寻乌县",
						360735: "石城县",
						360781: "瑞金市",
						360802: "吉州区",
						360803: "青原区",
						360821: "吉安县",
						360822: "吉水县",
						360823: "峡江县",
						360824: "新干县",
						360825: "永丰县",
						360826: "泰和县",
						360827: "遂川县",
						360828: "万安县",
						360829: "安福县",
						360830: "永新县",
						360881: "井冈山市",
						360902: "袁州区",
						360921: "奉新县",
						360922: "万载县",
						360923: "上高县",
						360924: "宜丰县",
						360925: "靖安县",
						360926: "铜鼓县",
						360981: "丰城市",
						360982: "樟树市",
						360983: "高安市",
						361002: "临川区",
						361003: "东乡区",
						361021: "南城县",
						361022: "黎川县",
						361023: "南丰县",
						361024: "崇仁县",
						361025: "乐安县",
						361026: "宜黄县",
						361027: "金溪县",
						361028: "资溪县",
						361030: "广昌县",
						361102: "信州区",
						361103: "广丰区",
						361121: "上饶县",
						361123: "玉山县",
						361124: "铅山县",
						361125: "横峰县",
						361126: "弋阳县",
						361127: "余干县",
						361128: "鄱阳县",
						361129: "万年县",
						361130: "婺源县",
						361181: "德兴市",
						370102: "历下区",
						370103: "市中区",
						370104: "槐荫区",
						370105: "天桥区",
						370112: "历城区",
						370113: "长清区",
						370114: "章丘区",
						370115: "济阳区",
						370116: "莱芜区",
						370117: "钢城区",
						370124: "平阴县",
						370126: "商河县",
						370190: "高新区",
						370202: "市南区",
						370203: "市北区",
						370211: "黄岛区",
						370212: "崂山区",
						370213: "李沧区",
						370214: "城阳区",
						370215: "即墨区",
						370281: "胶州市",
						370283: "平度市",
						370285: "莱西市",
						370290: "开发区",
						370302: "淄川区",
						370303: "张店区",
						370304: "博山区",
						370305: "临淄区",
						370306: "周村区",
						370321: "桓台县",
						370322: "高青县",
						370323: "沂源县",
						370402: "市中区",
						370403: "薛城区",
						370404: "峄城区",
						370405: "台儿庄区",
						370406: "山亭区",
						370481: "滕州市",
						370502: "东营区",
						370503: "河口区",
						370505: "垦利区",
						370522: "利津县",
						370523: "广饶县",
						370602: "芝罘区",
						370611: "福山区",
						370612: "牟平区",
						370613: "莱山区",
						370634: "长岛县",
						370681: "龙口市",
						370682: "莱阳市",
						370683: "莱州市",
						370684: "蓬莱市",
						370685: "招远市",
						370686: "栖霞市",
						370687: "海阳市",
						370690: "开发区",
						370702: "潍城区",
						370703: "寒亭区",
						370704: "坊子区",
						370705: "奎文区",
						370724: "临朐县",
						370725: "昌乐县",
						370781: "青州市",
						370782: "诸城市",
						370783: "寿光市",
						370784: "安丘市",
						370785: "高密市",
						370786: "昌邑市",
						370790: "开发区",
						370791: "高新区",
						370811: "任城区",
						370812: "兖州区",
						370826: "微山县",
						370827: "鱼台县",
						370828: "金乡县",
						370829: "嘉祥县",
						370830: "汶上县",
						370831: "泗水县",
						370832: "梁山县",
						370881: "曲阜市",
						370883: "邹城市",
						370890: "高新区",
						370902: "泰山区",
						370911: "岱岳区",
						370921: "宁阳县",
						370923: "东平县",
						370982: "新泰市",
						370983: "肥城市",
						371002: "环翠区",
						371003: "文登区",
						371082: "荣成市",
						371083: "乳山市",
						371091: "经济技术开发区",
						371102: "东港区",
						371103: "岚山区",
						371121: "五莲县",
						371122: "莒县",
						371302: "兰山区",
						371311: "罗庄区",
						371312: "河东区",
						371321: "沂南县",
						371322: "郯城县",
						371323: "沂水县",
						371324: "兰陵县",
						371325: "费县",
						371326: "平邑县",
						371327: "莒南县",
						371328: "蒙阴县",
						371329: "临沭县",
						371402: "德城区",
						371403: "陵城区",
						371422: "宁津县",
						371423: "庆云县",
						371424: "临邑县",
						371425: "齐河县",
						371426: "平原县",
						371427: "夏津县",
						371428: "武城县",
						371481: "乐陵市",
						371482: "禹城市",
						371502: "东昌府区",
						371521: "阳谷县",
						371522: "莘县",
						371523: "茌平县",
						371524: "东阿县",
						371525: "冠县",
						371526: "高唐县",
						371581: "临清市",
						371602: "滨城区",
						371603: "沾化区",
						371621: "惠民县",
						371622: "阳信县",
						371623: "无棣县",
						371625: "博兴县",
						371681: "邹平市",
						371702: "牡丹区",
						371703: "定陶区",
						371721: "曹县",
						371722: "单县",
						371723: "成武县",
						371724: "巨野县",
						371725: "郓城县",
						371726: "鄄城县",
						371728: "东明县",
						410102: "中原区",
						410103: "二七区",
						410104: "管城回族区",
						410105: "金水区",
						410106: "上街区",
						410108: "惠济区",
						410122: "中牟县",
						410181: "巩义市",
						410182: "荥阳市",
						410183: "新密市",
						410184: "新郑市",
						410185: "登封市",
						410190: "高新技术开发区",
						410191: "经济技术开发区",
						410202: "龙亭区",
						410203: "顺河回族区",
						410204: "鼓楼区",
						410205: "禹王台区",
						410212: "祥符区",
						410221: "杞县",
						410222: "通许县",
						410223: "尉氏县",
						410225: "兰考县",
						410302: "老城区",
						410303: "西工区",
						410304: "瀍河回族区",
						410305: "涧西区",
						410306: "吉利区",
						410311: "洛龙区",
						410322: "孟津县",
						410323: "新安县",
						410324: "栾川县",
						410325: "嵩县",
						410326: "汝阳县",
						410327: "宜阳县",
						410328: "洛宁县",
						410329: "伊川县",
						410381: "偃师市",
						410402: "新华区",
						410403: "卫东区",
						410404: "石龙区",
						410411: "湛河区",
						410421: "宝丰县",
						410422: "叶县",
						410423: "鲁山县",
						410425: "郏县",
						410481: "舞钢市",
						410482: "汝州市",
						410502: "文峰区",
						410503: "北关区",
						410505: "殷都区",
						410506: "龙安区",
						410522: "安阳县",
						410523: "汤阴县",
						410526: "滑县",
						410527: "内黄县",
						410581: "林州市",
						410590: "开发区",
						410602: "鹤山区",
						410603: "山城区",
						410611: "淇滨区",
						410621: "浚县",
						410622: "淇县",
						410702: "红旗区",
						410703: "卫滨区",
						410704: "凤泉区",
						410711: "牧野区",
						410721: "新乡县",
						410724: "获嘉县",
						410725: "原阳县",
						410726: "延津县",
						410727: "封丘县",
						410728: "长垣县",
						410781: "卫辉市",
						410782: "辉县市",
						410802: "解放区",
						410803: "中站区",
						410804: "马村区",
						410811: "山阳区",
						410821: "修武县",
						410822: "博爱县",
						410823: "武陟县",
						410825: "温县",
						410882: "沁阳市",
						410883: "孟州市",
						410902: "华龙区",
						410922: "清丰县",
						410923: "南乐县",
						410926: "范县",
						410927: "台前县",
						410928: "濮阳县",
						411002: "魏都区",
						411003: "建安区",
						411024: "鄢陵县",
						411025: "襄城县",
						411081: "禹州市",
						411082: "长葛市",
						411102: "源汇区",
						411103: "郾城区",
						411104: "召陵区",
						411121: "舞阳县",
						411122: "临颍县",
						411202: "湖滨区",
						411203: "陕州区",
						411221: "渑池县",
						411224: "卢氏县",
						411281: "义马市",
						411282: "灵宝市",
						411302: "宛城区",
						411303: "卧龙区",
						411321: "南召县",
						411322: "方城县",
						411323: "西峡县",
						411324: "镇平县",
						411325: "内乡县",
						411326: "淅川县",
						411327: "社旗县",
						411328: "唐河县",
						411329: "新野县",
						411330: "桐柏县",
						411381: "邓州市",
						411402: "梁园区",
						411403: "睢阳区",
						411421: "民权县",
						411422: "睢县",
						411423: "宁陵县",
						411424: "柘城县",
						411425: "虞城县",
						411426: "夏邑县",
						411481: "永城市",
						411502: "浉河区",
						411503: "平桥区",
						411521: "罗山县",
						411522: "光山县",
						411523: "新县",
						411524: "商城县",
						411525: "固始县",
						411526: "潢川县",
						411527: "淮滨县",
						411528: "息县",
						411602: "川汇区",
						411621: "扶沟县",
						411622: "西华县",
						411623: "商水县",
						411624: "沈丘县",
						411625: "郸城县",
						411626: "淮阳县",
						411627: "太康县",
						411628: "鹿邑县",
						411681: "项城市",
						411690: "经济开发区",
						411702: "驿城区",
						411721: "西平县",
						411722: "上蔡县",
						411723: "平舆县",
						411724: "正阳县",
						411725: "确山县",
						411726: "泌阳县",
						411727: "汝南县",
						411728: "遂平县",
						411729: "新蔡县",
						419001: "济源市",
						420102: "江岸区",
						420103: "江汉区",
						420104: "硚口区",
						420105: "汉阳区",
						420106: "武昌区",
						420107: "青山区",
						420111: "洪山区",
						420112: "东西湖区",
						420113: "汉南区",
						420114: "蔡甸区",
						420115: "江夏区",
						420116: "黄陂区",
						420117: "新洲区",
						420202: "黄石港区",
						420203: "西塞山区",
						420204: "下陆区",
						420205: "铁山区",
						420222: "阳新县",
						420281: "大冶市",
						420302: "茅箭区",
						420303: "张湾区",
						420304: "郧阳区",
						420322: "郧西县",
						420323: "竹山县",
						420324: "竹溪县",
						420325: "房县",
						420381: "丹江口市",
						420502: "西陵区",
						420503: "伍家岗区",
						420504: "点军区",
						420505: "猇亭区",
						420506: "夷陵区",
						420525: "远安县",
						420526: "兴山县",
						420527: "秭归县",
						420528: "长阳土家族自治县",
						420529: "五峰土家族自治县",
						420581: "宜都市",
						420582: "当阳市",
						420583: "枝江市",
						420590: "经济开发区",
						420602: "襄城区",
						420606: "樊城区",
						420607: "襄州区",
						420624: "南漳县",
						420625: "谷城县",
						420626: "保康县",
						420682: "老河口市",
						420683: "枣阳市",
						420684: "宜城市",
						420702: "梁子湖区",
						420703: "华容区",
						420704: "鄂城区",
						420802: "东宝区",
						420804: "掇刀区",
						420822: "沙洋县",
						420881: "钟祥市",
						420882: "京山市",
						420902: "孝南区",
						420921: "孝昌县",
						420922: "大悟县",
						420923: "云梦县",
						420981: "应城市",
						420982: "安陆市",
						420984: "汉川市",
						421002: "沙市区",
						421003: "荆州区",
						421022: "公安县",
						421023: "监利县",
						421024: "江陵县",
						421081: "石首市",
						421083: "洪湖市",
						421087: "松滋市",
						421102: "黄州区",
						421121: "团风县",
						421122: "红安县",
						421123: "罗田县",
						421124: "英山县",
						421125: "浠水县",
						421126: "蕲春县",
						421127: "黄梅县",
						421181: "麻城市",
						421182: "武穴市",
						421202: "咸安区",
						421221: "嘉鱼县",
						421222: "通城县",
						421223: "崇阳县",
						421224: "通山县",
						421281: "赤壁市",
						421303: "曾都区",
						421321: "随县",
						421381: "广水市",
						422801: "恩施市",
						422802: "利川市",
						422822: "建始县",
						422823: "巴东县",
						422825: "宣恩县",
						422826: "咸丰县",
						422827: "来凤县",
						422828: "鹤峰县",
						429004: "仙桃市",
						429005: "潜江市",
						429006: "天门市",
						429021: "神农架林区",
						430102: "芙蓉区",
						430103: "天心区",
						430104: "岳麓区",
						430105: "开福区",
						430111: "雨花区",
						430112: "望城区",
						430121: "长沙县",
						430181: "浏阳市",
						430182: "宁乡市",
						430202: "荷塘区",
						430203: "芦淞区",
						430204: "石峰区",
						430211: "天元区",
						430212: "渌口区",
						430223: "攸县",
						430224: "茶陵县",
						430225: "炎陵县",
						430281: "醴陵市",
						430302: "雨湖区",
						430304: "岳塘区",
						430321: "湘潭县",
						430381: "湘乡市",
						430382: "韶山市",
						430405: "珠晖区",
						430406: "雁峰区",
						430407: "石鼓区",
						430408: "蒸湘区",
						430412: "南岳区",
						430421: "衡阳县",
						430422: "衡南县",
						430423: "衡山县",
						430424: "衡东县",
						430426: "祁东县",
						430481: "耒阳市",
						430482: "常宁市",
						430502: "双清区",
						430503: "大祥区",
						430511: "北塔区",
						430521: "邵东县",
						430522: "新邵县",
						430523: "邵阳县",
						430524: "隆回县",
						430525: "洞口县",
						430527: "绥宁县",
						430528: "新宁县",
						430529: "城步苗族自治县",
						430581: "武冈市",
						430602: "岳阳楼区",
						430603: "云溪区",
						430611: "君山区",
						430621: "岳阳县",
						430623: "华容县",
						430624: "湘阴县",
						430626: "平江县",
						430681: "汨罗市",
						430682: "临湘市",
						430702: "武陵区",
						430703: "鼎城区",
						430721: "安乡县",
						430722: "汉寿县",
						430723: "澧县",
						430724: "临澧县",
						430725: "桃源县",
						430726: "石门县",
						430781: "津市市",
						430802: "永定区",
						430811: "武陵源区",
						430821: "慈利县",
						430822: "桑植县",
						430902: "资阳区",
						430903: "赫山区",
						430921: "南县",
						430922: "桃江县",
						430923: "安化县",
						430981: "沅江市",
						431002: "北湖区",
						431003: "苏仙区",
						431021: "桂阳县",
						431022: "宜章县",
						431023: "永兴县",
						431024: "嘉禾县",
						431025: "临武县",
						431026: "汝城县",
						431027: "桂东县",
						431028: "安仁县",
						431081: "资兴市",
						431102: "零陵区",
						431103: "冷水滩区",
						431121: "祁阳县",
						431122: "东安县",
						431123: "双牌县",
						431124: "道县",
						431125: "江永县",
						431126: "宁远县",
						431127: "蓝山县",
						431128: "新田县",
						431129: "江华瑶族自治县",
						431202: "鹤城区",
						431221: "中方县",
						431222: "沅陵县",
						431223: "辰溪县",
						431224: "溆浦县",
						431225: "会同县",
						431226: "麻阳苗族自治县",
						431227: "新晃侗族自治县",
						431228: "芷江侗族自治县",
						431229: "靖州苗族侗族自治县",
						431230: "通道侗族自治县",
						431281: "洪江市",
						431302: "娄星区",
						431321: "双峰县",
						431322: "新化县",
						431381: "冷水江市",
						431382: "涟源市",
						433101: "吉首市",
						433122: "泸溪县",
						433123: "凤凰县",
						433124: "花垣县",
						433125: "保靖县",
						433126: "古丈县",
						433127: "永顺县",
						433130: "龙山县",
						440103: "荔湾区",
						440104: "越秀区",
						440105: "海珠区",
						440106: "天河区",
						440111: "白云区",
						440112: "黄埔区",
						440113: "番禺区",
						440114: "花都区",
						440115: "南沙区",
						440117: "从化区",
						440118: "增城区",
						440203: "武江区",
						440204: "浈江区",
						440205: "曲江区",
						440222: "始兴县",
						440224: "仁化县",
						440229: "翁源县",
						440232: "乳源瑶族自治县",
						440233: "新丰县",
						440281: "乐昌市",
						440282: "南雄市",
						440303: "罗湖区",
						440304: "福田区",
						440305: "南山区",
						440306: "宝安区",
						440307: "龙岗区",
						440308: "盐田区",
						440309: "龙华区",
						440310: "坪山区",
						440311: "光明区",
						440402: "香洲区",
						440403: "斗门区",
						440404: "金湾区",
						440507: "龙湖区",
						440511: "金平区",
						440512: "濠江区",
						440513: "潮阳区",
						440514: "潮南区",
						440515: "澄海区",
						440523: "南澳县",
						440604: "禅城区",
						440605: "南海区",
						440606: "顺德区",
						440607: "三水区",
						440608: "高明区",
						440703: "蓬江区",
						440704: "江海区",
						440705: "新会区",
						440781: "台山市",
						440783: "开平市",
						440784: "鹤山市",
						440785: "恩平市",
						440802: "赤坎区",
						440803: "霞山区",
						440804: "坡头区",
						440811: "麻章区",
						440823: "遂溪县",
						440825: "徐闻县",
						440881: "廉江市",
						440882: "雷州市",
						440883: "吴川市",
						440890: "经济技术开发区",
						440902: "茂南区",
						440904: "电白区",
						440981: "高州市",
						440982: "化州市",
						440983: "信宜市",
						441202: "端州区",
						441203: "鼎湖区",
						441204: "高要区",
						441223: "广宁县",
						441224: "怀集县",
						441225: "封开县",
						441226: "德庆县",
						441284: "四会市",
						441302: "惠城区",
						441303: "惠阳区",
						441322: "博罗县",
						441323: "惠东县",
						441324: "龙门县",
						441402: "梅江区",
						441403: "梅县区",
						441422: "大埔县",
						441423: "丰顺县",
						441424: "五华县",
						441426: "平远县",
						441427: "蕉岭县",
						441481: "兴宁市",
						441502: "城区",
						441521: "海丰县",
						441523: "陆河县",
						441581: "陆丰市",
						441602: "源城区",
						441621: "紫金县",
						441622: "龙川县",
						441623: "连平县",
						441624: "和平县",
						441625: "东源县",
						441702: "江城区",
						441704: "阳东区",
						441721: "阳西县",
						441781: "阳春市",
						441802: "清城区",
						441803: "清新区",
						441821: "佛冈县",
						441823: "阳山县",
						441825: "连山壮族瑶族自治县",
						441826: "连南瑶族自治县",
						441881: "英德市",
						441882: "连州市",
						441901: "中堂镇",
						441903: "南城街道办事处",
						441904: "长安镇",
						441905: "东坑镇",
						441906: "樟木头镇",
						441907: "莞城街道办事处",
						441908: "石龙镇",
						441909: "桥头镇",
						441910: "万江街道办事处",
						441911: "麻涌镇",
						441912: "虎门镇",
						441913: "谢岗镇",
						441914: "石碣镇",
						441915: "茶山镇",
						441916: "东城街道办事处",
						441917: "洪梅镇",
						441918: "道滘镇",
						441919: "高埗镇",
						441920: "企石镇",
						441921: "凤岗镇",
						441922: "大岭山镇",
						441923: "松山湖管委会",
						441924: "清溪镇",
						441925: "望牛墩镇",
						441926: "厚街镇",
						441927: "常平镇",
						441928: "寮步镇",
						441929: "石排镇",
						441930: "横沥镇",
						441931: "塘厦镇",
						441932: "黄江镇",
						441933: "大朗镇",
						441934: "东莞港",
						441935: "东莞生态园",
						441990: "沙田镇",
						442001: "南头镇",
						442002: "神湾镇",
						442003: "东凤镇",
						442004: "五桂山街道办事处",
						442005: "黄圃镇",
						442006: "小榄镇",
						442007: "石岐区街道办事处",
						442008: "横栏镇",
						442009: "三角镇",
						442010: "三乡镇",
						442011: "港口镇",
						442012: "沙溪镇",
						442013: "板芙镇",
						442015: "东升镇",
						442016: "阜沙镇",
						442017: "民众镇",
						442018: "东区街道办事处",
						442019: "火炬开发区街道办事处",
						442020: "西区街道办事处",
						442021: "南区街道办事处",
						442022: "古镇镇",
						442023: "坦洲镇",
						442024: "大涌镇",
						442025: "南朗镇",
						445102: "湘桥区",
						445103: "潮安区",
						445122: "饶平县",
						445202: "榕城区",
						445203: "揭东区",
						445222: "揭西县",
						445224: "惠来县",
						445281: "普宁市",
						445302: "云城区",
						445303: "云安区",
						445321: "新兴县",
						445322: "郁南县",
						445381: "罗定市",
						450102: "兴宁区",
						450103: "青秀区",
						450105: "江南区",
						450107: "西乡塘区",
						450108: "良庆区",
						450109: "邕宁区",
						450110: "武鸣区",
						450123: "隆安县",
						450124: "马山县",
						450125: "上林县",
						450126: "宾阳县",
						450127: "横县",
						450202: "城中区",
						450203: "鱼峰区",
						450204: "柳南区",
						450205: "柳北区",
						450206: "柳江区",
						450222: "柳城县",
						450223: "鹿寨县",
						450224: "融安县",
						450225: "融水苗族自治县",
						450226: "三江侗族自治县",
						450302: "秀峰区",
						450303: "叠彩区",
						450304: "象山区",
						450305: "七星区",
						450311: "雁山区",
						450312: "临桂区",
						450321: "阳朔县",
						450323: "灵川县",
						450324: "全州县",
						450325: "兴安县",
						450326: "永福县",
						450327: "灌阳县",
						450328: "龙胜各族自治县",
						450329: "资源县",
						450330: "平乐县",
						450332: "恭城瑶族自治县",
						450381: "荔浦市",
						450403: "万秀区",
						450405: "长洲区",
						450406: "龙圩区",
						450421: "苍梧县",
						450422: "藤县",
						450423: "蒙山县",
						450481: "岑溪市",
						450502: "海城区",
						450503: "银海区",
						450512: "铁山港区",
						450521: "合浦县",
						450602: "港口区",
						450603: "防城区",
						450621: "上思县",
						450681: "东兴市",
						450702: "钦南区",
						450703: "钦北区",
						450721: "灵山县",
						450722: "浦北县",
						450802: "港北区",
						450803: "港南区",
						450804: "覃塘区",
						450821: "平南县",
						450881: "桂平市",
						450902: "玉州区",
						450903: "福绵区",
						450921: "容县",
						450922: "陆川县",
						450923: "博白县",
						450924: "兴业县",
						450981: "北流市",
						451002: "右江区",
						451021: "田阳县",
						451022: "田东县",
						451023: "平果县",
						451024: "德保县",
						451026: "那坡县",
						451027: "凌云县",
						451028: "乐业县",
						451029: "田林县",
						451030: "西林县",
						451031: "隆林各族自治县",
						451081: "靖西市",
						451102: "八步区",
						451103: "平桂区",
						451121: "昭平县",
						451122: "钟山县",
						451123: "富川瑶族自治县",
						451202: "金城江区",
						451203: "宜州区",
						451221: "南丹县",
						451222: "天峨县",
						451223: "凤山县",
						451224: "东兰县",
						451225: "罗城仫佬族自治县",
						451226: "环江毛南族自治县",
						451227: "巴马瑶族自治县",
						451228: "都安瑶族自治县",
						451229: "大化瑶族自治县",
						451302: "兴宾区",
						451321: "忻城县",
						451322: "象州县",
						451323: "武宣县",
						451324: "金秀瑶族自治县",
						451381: "合山市",
						451402: "江州区",
						451421: "扶绥县",
						451422: "宁明县",
						451423: "龙州县",
						451424: "大新县",
						451425: "天等县",
						451481: "凭祥市",
						460105: "秀英区",
						460106: "龙华区",
						460107: "琼山区",
						460108: "美兰区",
						460202: "海棠区",
						460203: "吉阳区",
						460204: "天涯区",
						460205: "崖州区",
						460321: "西沙群岛",
						460322: "南沙群岛",
						460323: "中沙群岛的岛礁及其海域",
						460401: "那大镇",
						460402: "和庆镇",
						460403: "南丰镇",
						460404: "大成镇",
						460405: "雅星镇",
						460406: "兰洋镇",
						460407: "光村镇",
						460408: "木棠镇",
						460409: "海头镇",
						460410: "峨蔓镇",
						460411: "王五镇",
						460412: "白马井镇",
						460413: "中和镇",
						460414: "排浦镇",
						460415: "东成镇",
						460416: "新州镇",
						460417: "洋浦经济开发区",
						460418: "华南热作学院",
						469001: "五指山市",
						469002: "琼海市",
						469005: "文昌市",
						469006: "万宁市",
						469007: "东方市",
						469021: "定安县",
						469022: "屯昌县",
						469023: "澄迈县",
						469024: "临高县",
						469025: "白沙黎族自治县",
						469026: "昌江黎族自治县",
						469027: "乐东黎族自治县",
						469028: "陵水黎族自治县",
						469029: "保亭黎族苗族自治县",
						469030: "琼中黎族苗族自治县",
						500101: "万州区",
						500102: "涪陵区",
						500103: "渝中区",
						500104: "大渡口区",
						500105: "江北区",
						500106: "沙坪坝区",
						500107: "九龙坡区",
						500108: "南岸区",
						500109: "北碚区",
						500110: "綦江区",
						500111: "大足区",
						500112: "渝北区",
						500113: "巴南区",
						500114: "黔江区",
						500115: "长寿区",
						500116: "江津区",
						500117: "合川区",
						500118: "永川区",
						500119: "南川区",
						500120: "璧山区",
						500151: "铜梁区",
						500152: "潼南区",
						500153: "荣昌区",
						500154: "开州区",
						500155: "梁平区",
						500156: "武隆区",
						500229: "城口县",
						500230: "丰都县",
						500231: "垫江县",
						500233: "忠县",
						500235: "云阳县",
						500236: "奉节县",
						500237: "巫山县",
						500238: "巫溪县",
						500240: "石柱土家族自治县",
						500241: "秀山土家族苗族自治县",
						500242: "酉阳土家族苗族自治县",
						500243: "彭水苗族土家族自治县",
						510104: "锦江区",
						510105: "青羊区",
						510106: "金牛区",
						510107: "武侯区",
						510108: "成华区",
						510112: "龙泉驿区",
						510113: "青白江区",
						510114: "新都区",
						510115: "温江区",
						510116: "双流区",
						510117: "郫都区",
						510121: "金堂县",
						510129: "大邑县",
						510131: "蒲江县",
						510132: "新津县",
						510181: "都江堰市",
						510182: "彭州市",
						510183: "邛崃市",
						510184: "崇州市",
						510185: "简阳市",
						510191: "高新区",
						510302: "自流井区",
						510303: "贡井区",
						510304: "大安区",
						510311: "沿滩区",
						510321: "荣县",
						510322: "富顺县",
						510402: "东区",
						510403: "西区",
						510411: "仁和区",
						510421: "米易县",
						510422: "盐边县",
						510502: "江阳区",
						510503: "纳溪区",
						510504: "龙马潭区",
						510521: "泸县",
						510522: "合江县",
						510524: "叙永县",
						510525: "古蔺县",
						510603: "旌阳区",
						510604: "罗江区",
						510623: "中江县",
						510681: "广汉市",
						510682: "什邡市",
						510683: "绵竹市",
						510703: "涪城区",
						510704: "游仙区",
						510705: "安州区",
						510722: "三台县",
						510723: "盐亭县",
						510725: "梓潼县",
						510726: "北川羌族自治县",
						510727: "平武县",
						510781: "江油市",
						510791: "高新区",
						510802: "利州区",
						510811: "昭化区",
						510812: "朝天区",
						510821: "旺苍县",
						510822: "青川县",
						510823: "剑阁县",
						510824: "苍溪县",
						510903: "船山区",
						510904: "安居区",
						510921: "蓬溪县",
						510922: "射洪县",
						510923: "大英县",
						511002: "市中区",
						511011: "东兴区",
						511024: "威远县",
						511025: "资中县",
						511083: "隆昌市",
						511102: "市中区",
						511111: "沙湾区",
						511112: "五通桥区",
						511113: "金口河区",
						511123: "犍为县",
						511124: "井研县",
						511126: "夹江县",
						511129: "沐川县",
						511132: "峨边彝族自治县",
						511133: "马边彝族自治县",
						511181: "峨眉山市",
						511302: "顺庆区",
						511303: "高坪区",
						511304: "嘉陵区",
						511321: "南部县",
						511322: "营山县",
						511323: "蓬安县",
						511324: "仪陇县",
						511325: "西充县",
						511381: "阆中市",
						511402: "东坡区",
						511403: "彭山区",
						511421: "仁寿县",
						511423: "洪雅县",
						511424: "丹棱县",
						511425: "青神县",
						511502: "翠屏区",
						511503: "南溪区",
						511504: "叙州区",
						511523: "江安县",
						511524: "长宁县",
						511525: "高县",
						511526: "珙县",
						511527: "筠连县",
						511528: "兴文县",
						511529: "屏山县",
						511602: "广安区",
						511603: "前锋区",
						511621: "岳池县",
						511622: "武胜县",
						511623: "邻水县",
						511681: "华蓥市",
						511702: "通川区",
						511703: "达川区",
						511722: "宣汉县",
						511723: "开江县",
						511724: "大竹县",
						511725: "渠县",
						511781: "万源市",
						511802: "雨城区",
						511803: "名山区",
						511822: "荥经县",
						511823: "汉源县",
						511824: "石棉县",
						511825: "天全县",
						511826: "芦山县",
						511827: "宝兴县",
						511902: "巴州区",
						511903: "恩阳区",
						511921: "通江县",
						511922: "南江县",
						511923: "平昌县",
						512002: "雁江区",
						512021: "安岳县",
						512022: "乐至县",
						513201: "马尔康市",
						513221: "汶川县",
						513222: "理县",
						513223: "茂县",
						513224: "松潘县",
						513225: "九寨沟县",
						513226: "金川县",
						513227: "小金县",
						513228: "黑水县",
						513230: "壤塘县",
						513231: "阿坝县",
						513232: "若尔盖县",
						513233: "红原县",
						513301: "康定市",
						513322: "泸定县",
						513323: "丹巴县",
						513324: "九龙县",
						513325: "雅江县",
						513326: "道孚县",
						513327: "炉霍县",
						513328: "甘孜县",
						513329: "新龙县",
						513330: "德格县",
						513331: "白玉县",
						513332: "石渠县",
						513333: "色达县",
						513334: "理塘县",
						513335: "巴塘县",
						513336: "乡城县",
						513337: "稻城县",
						513338: "得荣县",
						513401: "西昌市",
						513422: "木里藏族自治县",
						513423: "盐源县",
						513424: "德昌县",
						513425: "会理县",
						513426: "会东县",
						513427: "宁南县",
						513428: "普格县",
						513429: "布拖县",
						513430: "金阳县",
						513431: "昭觉县",
						513432: "喜德县",
						513433: "冕宁县",
						513434: "越西县",
						513435: "甘洛县",
						513436: "美姑县",
						513437: "雷波县",
						520102: "南明区",
						520103: "云岩区",
						520111: "花溪区",
						520112: "乌当区",
						520113: "白云区",
						520115: "观山湖区",
						520121: "开阳县",
						520122: "息烽县",
						520123: "修文县",
						520181: "清镇市",
						520201: "钟山区",
						520203: "六枝特区",
						520221: "水城县",
						520281: "盘州市",
						520302: "红花岗区",
						520303: "汇川区",
						520304: "播州区",
						520322: "桐梓县",
						520323: "绥阳县",
						520324: "正安县",
						520325: "道真仡佬族苗族自治县",
						520326: "务川仡佬族苗族自治县",
						520327: "凤冈县",
						520328: "湄潭县",
						520329: "余庆县",
						520330: "习水县",
						520381: "赤水市",
						520382: "仁怀市",
						520402: "西秀区",
						520403: "平坝区",
						520422: "普定县",
						520423: "镇宁布依族苗族自治县",
						520424: "关岭布依族苗族自治县",
						520425: "紫云苗族布依族自治县",
						520502: "七星关区",
						520521: "大方县",
						520522: "黔西县",
						520523: "金沙县",
						520524: "织金县",
						520525: "纳雍县",
						520526: "威宁彝族回族苗族自治县",
						520527: "赫章县",
						520602: "碧江区",
						520603: "万山区",
						520621: "江口县",
						520622: "玉屏侗族自治县",
						520623: "石阡县",
						520624: "思南县",
						520625: "印江土家族苗族自治县",
						520626: "德江县",
						520627: "沿河土家族自治县",
						520628: "松桃苗族自治县",
						522301: "兴义市",
						522302: "兴仁市",
						522323: "普安县",
						522324: "晴隆县",
						522325: "贞丰县",
						522326: "望谟县",
						522327: "册亨县",
						522328: "安龙县",
						522601: "凯里市",
						522622: "黄平县",
						522623: "施秉县",
						522624: "三穗县",
						522625: "镇远县",
						522626: "岑巩县",
						522627: "天柱县",
						522628: "锦屏县",
						522629: "剑河县",
						522630: "台江县",
						522631: "黎平县",
						522632: "榕江县",
						522633: "从江县",
						522634: "雷山县",
						522635: "麻江县",
						522636: "丹寨县",
						522701: "都匀市",
						522702: "福泉市",
						522722: "荔波县",
						522723: "贵定县",
						522725: "瓮安县",
						522726: "独山县",
						522727: "平塘县",
						522728: "罗甸县",
						522729: "长顺县",
						522730: "龙里县",
						522731: "惠水县",
						522732: "三都水族自治县",
						530102: "五华区",
						530103: "盘龙区",
						530111: "官渡区",
						530112: "西山区",
						530113: "东川区",
						530114: "呈贡区",
						530115: "晋宁区",
						530124: "富民县",
						530125: "宜良县",
						530126: "石林彝族自治县",
						530127: "嵩明县",
						530128: "禄劝彝族苗族自治县",
						530129: "寻甸回族彝族自治县",
						530181: "安宁市",
						530302: "麒麟区",
						530303: "沾益区",
						530304: "马龙区",
						530322: "陆良县",
						530323: "师宗县",
						530324: "罗平县",
						530325: "富源县",
						530326: "会泽县",
						530381: "宣威市",
						530402: "红塔区",
						530403: "江川区",
						530422: "澄江县",
						530423: "通海县",
						530424: "华宁县",
						530425: "易门县",
						530426: "峨山彝族自治县",
						530427: "新平彝族傣族自治县",
						530428: "元江哈尼族彝族傣族自治县",
						530502: "隆阳区",
						530521: "施甸县",
						530523: "龙陵县",
						530524: "昌宁县",
						530581: "腾冲市",
						530602: "昭阳区",
						530621: "鲁甸县",
						530622: "巧家县",
						530623: "盐津县",
						530624: "大关县",
						530625: "永善县",
						530626: "绥江县",
						530627: "镇雄县",
						530628: "彝良县",
						530629: "威信县",
						530681: "水富市",
						530702: "古城区",
						530721: "玉龙纳西族自治县",
						530722: "永胜县",
						530723: "华坪县",
						530724: "宁蒗彝族自治县",
						530802: "思茅区",
						530821: "宁洱哈尼族彝族自治县",
						530822: "墨江哈尼族自治县",
						530823: "景东彝族自治县",
						530824: "景谷傣族彝族自治县",
						530825: "镇沅彝族哈尼族拉祜族自治县",
						530826: "江城哈尼族彝族自治县",
						530827: "孟连傣族拉祜族佤族自治县",
						530828: "澜沧拉祜族自治县",
						530829: "西盟佤族自治县",
						530902: "临翔区",
						530921: "凤庆县",
						530922: "云县",
						530923: "永德县",
						530924: "镇康县",
						530925: "双江拉祜族佤族布朗族傣族自治县",
						530926: "耿马傣族佤族自治县",
						530927: "沧源佤族自治县",
						532301: "楚雄市",
						532322: "双柏县",
						532323: "牟定县",
						532324: "南华县",
						532325: "姚安县",
						532326: "大姚县",
						532327: "永仁县",
						532328: "元谋县",
						532329: "武定县",
						532331: "禄丰县",
						532501: "个旧市",
						532502: "开远市",
						532503: "蒙自市",
						532504: "弥勒市",
						532523: "屏边苗族自治县",
						532524: "建水县",
						532525: "石屏县",
						532527: "泸西县",
						532528: "元阳县",
						532529: "红河县",
						532530: "金平苗族瑶族傣族自治县",
						532531: "绿春县",
						532532: "河口瑶族自治县",
						532601: "文山市",
						532622: "砚山县",
						532623: "西畴县",
						532624: "麻栗坡县",
						532625: "马关县",
						532626: "丘北县",
						532627: "广南县",
						532628: "富宁县",
						532801: "景洪市",
						532822: "勐海县",
						532823: "勐腊县",
						532901: "大理市",
						532922: "漾濞彝族自治县",
						532923: "祥云县",
						532924: "宾川县",
						532925: "弥渡县",
						532926: "南涧彝族自治县",
						532927: "巍山彝族回族自治县",
						532928: "永平县",
						532929: "云龙县",
						532930: "洱源县",
						532931: "剑川县",
						532932: "鹤庆县",
						533102: "瑞丽市",
						533103: "芒市",
						533122: "梁河县",
						533123: "盈江县",
						533124: "陇川县",
						533301: "泸水市",
						533323: "福贡县",
						533324: "贡山独龙族怒族自治县",
						533325: "兰坪白族普米族自治县",
						533401: "香格里拉市",
						533422: "德钦县",
						533423: "维西傈僳族自治县",
						540102: "城关区",
						540103: "堆龙德庆区",
						540104: "达孜区",
						540121: "林周县",
						540122: "当雄县",
						540123: "尼木县",
						540124: "曲水县",
						540127: "墨竹工卡县",
						540202: "桑珠孜区",
						540221: "南木林县",
						540222: "江孜县",
						540223: "定日县",
						540224: "萨迦县",
						540225: "拉孜县",
						540226: "昂仁县",
						540227: "谢通门县",
						540228: "白朗县",
						540229: "仁布县",
						540230: "康马县",
						540231: "定结县",
						540232: "仲巴县",
						540233: "亚东县",
						540234: "吉隆县",
						540235: "聂拉木县",
						540236: "萨嘎县",
						540237: "岗巴县",
						540302: "卡若区",
						540321: "江达县",
						540322: "贡觉县",
						540323: "类乌齐县",
						540324: "丁青县",
						540325: "察雅县",
						540326: "八宿县",
						540327: "左贡县",
						540328: "芒康县",
						540329: "洛隆县",
						540330: "边坝县",
						540402: "巴宜区",
						540421: "工布江达县",
						540422: "米林县",
						540423: "墨脱县",
						540424: "波密县",
						540425: "察隅县",
						540426: "朗县",
						540502: "乃东区",
						540521: "扎囊县",
						540522: "贡嘎县",
						540523: "桑日县",
						540524: "琼结县",
						540525: "曲松县",
						540526: "措美县",
						540527: "洛扎县",
						540528: "加查县",
						540529: "隆子县",
						540530: "错那县",
						540531: "浪卡子县",
						540602: "色尼区",
						540621: "嘉黎县",
						540622: "比如县",
						540623: "聂荣县",
						540624: "安多县",
						540625: "申扎县",
						540626: "索县",
						540627: "班戈县",
						540628: "巴青县",
						540629: "尼玛县",
						540630: "双湖县",
						542521: "普兰县",
						542522: "札达县",
						542523: "噶尔县",
						542524: "日土县",
						542525: "革吉县",
						542526: "改则县",
						542527: "措勤县",
						610102: "新城区",
						610103: "碑林区",
						610104: "莲湖区",
						610111: "灞桥区",
						610112: "未央区",
						610113: "雁塔区",
						610114: "阎良区",
						610115: "临潼区",
						610116: "长安区",
						610117: "高陵区",
						610118: "鄠邑区",
						610122: "蓝田县",
						610124: "周至县",
						610202: "王益区",
						610203: "印台区",
						610204: "耀州区",
						610222: "宜君县",
						610302: "渭滨区",
						610303: "金台区",
						610304: "陈仓区",
						610322: "凤翔县",
						610323: "岐山县",
						610324: "扶风县",
						610326: "眉县",
						610327: "陇县",
						610328: "千阳县",
						610329: "麟游县",
						610330: "凤县",
						610331: "太白县",
						610402: "秦都区",
						610403: "杨陵区",
						610404: "渭城区",
						610422: "三原县",
						610423: "泾阳县",
						610424: "乾县",
						610425: "礼泉县",
						610426: "永寿县",
						610428: "长武县",
						610429: "旬邑县",
						610430: "淳化县",
						610431: "武功县",
						610481: "兴平市",
						610482: "彬州市",
						610502: "临渭区",
						610503: "华州区",
						610522: "潼关县",
						610523: "大荔县",
						610524: "合阳县",
						610525: "澄城县",
						610526: "蒲城县",
						610527: "白水县",
						610528: "富平县",
						610581: "韩城市",
						610582: "华阴市",
						610602: "宝塔区",
						610603: "安塞区",
						610621: "延长县",
						610622: "延川县",
						610623: "子长县",
						610625: "志丹县",
						610626: "吴起县",
						610627: "甘泉县",
						610628: "富县",
						610629: "洛川县",
						610630: "宜川县",
						610631: "黄龙县",
						610632: "黄陵县",
						610702: "汉台区",
						610703: "南郑区",
						610722: "城固县",
						610723: "洋县",
						610724: "西乡县",
						610725: "勉县",
						610726: "宁强县",
						610727: "略阳县",
						610728: "镇巴县",
						610729: "留坝县",
						610730: "佛坪县",
						610802: "榆阳区",
						610803: "横山区",
						610822: "府谷县",
						610824: "靖边县",
						610825: "定边县",
						610826: "绥德县",
						610827: "米脂县",
						610828: "佳县",
						610829: "吴堡县",
						610830: "清涧县",
						610831: "子洲县",
						610881: "神木市",
						610902: "汉滨区",
						610921: "汉阴县",
						610922: "石泉县",
						610923: "宁陕县",
						610924: "紫阳县",
						610925: "岚皋县",
						610926: "平利县",
						610927: "镇坪县",
						610928: "旬阳县",
						610929: "白河县",
						611002: "商州区",
						611021: "洛南县",
						611022: "丹凤县",
						611023: "商南县",
						611024: "山阳县",
						611025: "镇安县",
						611026: "柞水县",
						620102: "城关区",
						620103: "七里河区",
						620104: "西固区",
						620105: "安宁区",
						620111: "红古区",
						620121: "永登县",
						620122: "皋兰县",
						620123: "榆中县",
						620201: "市辖区",
						620290: "雄关区",
						620291: "长城区",
						620292: "镜铁区",
						620293: "新城镇",
						620294: "峪泉镇",
						620295: "文殊镇",
						620302: "金川区",
						620321: "永昌县",
						620402: "白银区",
						620403: "平川区",
						620421: "靖远县",
						620422: "会宁县",
						620423: "景泰县",
						620502: "秦州区",
						620503: "麦积区",
						620521: "清水县",
						620522: "秦安县",
						620523: "甘谷县",
						620524: "武山县",
						620525: "张家川回族自治县",
						620602: "凉州区",
						620621: "民勤县",
						620622: "古浪县",
						620623: "天祝藏族自治县",
						620702: "甘州区",
						620721: "肃南裕固族自治县",
						620722: "民乐县",
						620723: "临泽县",
						620724: "高台县",
						620725: "山丹县",
						620802: "崆峒区",
						620821: "泾川县",
						620822: "灵台县",
						620823: "崇信县",
						620825: "庄浪县",
						620826: "静宁县",
						620881: "华亭市",
						620902: "肃州区",
						620921: "金塔县",
						620922: "瓜州县",
						620923: "肃北蒙古族自治县",
						620924: "阿克塞哈萨克族自治县",
						620981: "玉门市",
						620982: "敦煌市",
						621002: "西峰区",
						621021: "庆城县",
						621022: "环县",
						621023: "华池县",
						621024: "合水县",
						621025: "正宁县",
						621026: "宁县",
						621027: "镇原县",
						621102: "安定区",
						621121: "通渭县",
						621122: "陇西县",
						621123: "渭源县",
						621124: "临洮县",
						621125: "漳县",
						621126: "岷县",
						621202: "武都区",
						621221: "成县",
						621222: "文县",
						621223: "宕昌县",
						621224: "康县",
						621225: "西和县",
						621226: "礼县",
						621227: "徽县",
						621228: "两当县",
						622901: "临夏市",
						622921: "临夏县",
						622922: "康乐县",
						622923: "永靖县",
						622924: "广河县",
						622925: "和政县",
						622926: "东乡族自治县",
						622927: "积石山保安族东乡族撒拉族自治县",
						623001: "合作市",
						623021: "临潭县",
						623022: "卓尼县",
						623023: "舟曲县",
						623024: "迭部县",
						623025: "玛曲县",
						623026: "碌曲县",
						623027: "夏河县",
						630102: "城东区",
						630103: "城中区",
						630104: "城西区",
						630105: "城北区",
						630121: "大通回族土族自治县",
						630122: "湟中县",
						630123: "湟源县",
						630202: "乐都区",
						630203: "平安区",
						630222: "民和回族土族自治县",
						630223: "互助土族自治县",
						630224: "化隆回族自治县",
						630225: "循化撒拉族自治县",
						632221: "门源回族自治县",
						632222: "祁连县",
						632223: "海晏县",
						632224: "刚察县",
						632321: "同仁县",
						632322: "尖扎县",
						632323: "泽库县",
						632324: "河南蒙古族自治县",
						632521: "共和县",
						632522: "同德县",
						632523: "贵德县",
						632524: "兴海县",
						632525: "贵南县",
						632621: "玛沁县",
						632622: "班玛县",
						632623: "甘德县",
						632624: "达日县",
						632625: "久治县",
						632626: "玛多县",
						632701: "玉树市",
						632722: "杂多县",
						632723: "称多县",
						632724: "治多县",
						632725: "囊谦县",
						632726: "曲麻莱县",
						632801: "格尔木市",
						632802: "德令哈市",
						632803: "茫崖市",
						632821: "乌兰县",
						632822: "都兰县",
						632823: "天峻县",
						640104: "兴庆区",
						640105: "西夏区",
						640106: "金凤区",
						640121: "永宁县",
						640122: "贺兰县",
						640181: "灵武市",
						640202: "大武口区",
						640205: "惠农区",
						640221: "平罗县",
						640302: "利通区",
						640303: "红寺堡区",
						640323: "盐池县",
						640324: "同心县",
						640381: "青铜峡市",
						640402: "原州区",
						640422: "西吉县",
						640423: "隆德县",
						640424: "泾源县",
						640425: "彭阳县",
						640502: "沙坡头区",
						640521: "中宁县",
						640522: "海原县",
						650102: "天山区",
						650103: "沙依巴克区",
						650104: "新市区",
						650105: "水磨沟区",
						650106: "头屯河区",
						650107: "达坂城区",
						650109: "米东区",
						650121: "乌鲁木齐县",
						650202: "独山子区",
						650203: "克拉玛依区",
						650204: "白碱滩区",
						650205: "乌尔禾区",
						650402: "高昌区",
						650421: "鄯善县",
						650422: "托克逊县",
						650502: "伊州区",
						650521: "巴里坤哈萨克自治县",
						650522: "伊吾县",
						652301: "昌吉市",
						652302: "阜康市",
						652323: "呼图壁县",
						652324: "玛纳斯县",
						652325: "奇台县",
						652327: "吉木萨尔县",
						652328: "木垒哈萨克自治县",
						652701: "博乐市",
						652702: "阿拉山口市",
						652722: "精河县",
						652723: "温泉县",
						652801: "库尔勒市",
						652822: "轮台县",
						652823: "尉犁县",
						652824: "若羌县",
						652825: "且末县",
						652826: "焉耆回族自治县",
						652827: "和静县",
						652828: "和硕县",
						652829: "博湖县",
						652901: "阿克苏市",
						652922: "温宿县",
						652923: "库车县",
						652924: "沙雅县",
						652925: "新和县",
						652926: "拜城县",
						652927: "乌什县",
						652928: "阿瓦提县",
						652929: "柯坪县",
						653001: "阿图什市",
						653022: "阿克陶县",
						653023: "阿合奇县",
						653024: "乌恰县",
						653101: "喀什市",
						653121: "疏附县",
						653122: "疏勒县",
						653123: "英吉沙县",
						653124: "泽普县",
						653125: "莎车县",
						653126: "叶城县",
						653127: "麦盖提县",
						653128: "岳普湖县",
						653129: "伽师县",
						653130: "巴楚县",
						653131: "塔什库尔干塔吉克自治县",
						653201: "和田市",
						653221: "和田县",
						653222: "墨玉县",
						653223: "皮山县",
						653224: "洛浦县",
						653225: "策勒县",
						653226: "于田县",
						653227: "民丰县",
						654002: "伊宁市",
						654003: "奎屯市",
						654004: "霍尔果斯市",
						654021: "伊宁县",
						654022: "察布查尔锡伯自治县",
						654023: "霍城县",
						654024: "巩留县",
						654025: "新源县",
						654026: "昭苏县",
						654027: "特克斯县",
						654028: "尼勒克县",
						654201: "塔城市",
						654202: "乌苏市",
						654221: "额敏县",
						654223: "沙湾县",
						654224: "托里县",
						654225: "裕民县",
						654226: "和布克赛尔蒙古自治县",
						654301: "阿勒泰市",
						654321: "布尔津县",
						654322: "富蕴县",
						654323: "福海县",
						654324: "哈巴河县",
						654325: "青河县",
						654326: "吉木乃县",
						659001: "石河子市",
						659002: "阿拉尔市",
						659003: "图木舒克市",
						659004: "五家渠市",
						659005: "北屯市",
						659006: "铁门关市",
						659007: "双河市",
						659008: "可克达拉市",
						659009: "昆玉市",
						710101: "中正区",
						710102: "大同区",
						710103: "中山区",
						710104: "松山区",
						710105: "大安区",
						710106: "万华区",
						710107: "信义区",
						710108: "士林区",
						710109: "北投区",
						710110: "内湖区",
						710111: "南港区",
						710112: "文山区",
						710199: "其它区",
						710201: "新兴区",
						710202: "前金区",
						710203: "芩雅区",
						710204: "盐埕区",
						710205: "鼓山区",
						710206: "旗津区",
						710207: "前镇区",
						710208: "三民区",
						710209: "左营区",
						710210: "楠梓区",
						710211: "小港区",
						710241: "苓雅区",
						710242: "仁武区",
						710243: "大社区",
						710244: "冈山区",
						710245: "路竹区",
						710246: "阿莲区",
						710247: "田寮区",
						710248: "燕巢区",
						710249: "桥头区",
						710250: "梓官区",
						710251: "弥陀区",
						710252: "永安区",
						710253: "湖内区",
						710254: "凤山区",
						710255: "大寮区",
						710256: "林园区",
						710257: "鸟松区",
						710258: "大树区",
						710259: "旗山区",
						710260: "美浓区",
						710261: "六龟区",
						710262: "内门区",
						710263: "杉林区",
						710264: "甲仙区",
						710265: "桃源区",
						710266: "那玛夏区",
						710267: "茂林区",
						710268: "茄萣区",
						710299: "其它区",
						710301: "中西区",
						710302: "东区",
						710303: "南区",
						710304: "北区",
						710305: "安平区",
						710306: "安南区",
						710339: "永康区",
						710340: "归仁区",
						710341: "新化区",
						710342: "左镇区",
						710343: "玉井区",
						710344: "楠西区",
						710345: "南化区",
						710346: "仁德区",
						710347: "关庙区",
						710348: "龙崎区",
						710349: "官田区",
						710350: "麻豆区",
						710351: "佳里区",
						710352: "西港区",
						710353: "七股区",
						710354: "将军区",
						710355: "学甲区",
						710356: "北门区",
						710357: "新营区",
						710358: "后壁区",
						710359: "白河区",
						710360: "东山区",
						710361: "六甲区",
						710362: "下营区",
						710363: "柳营区",
						710364: "盐水区",
						710365: "善化区",
						710366: "大内区",
						710367: "山上区",
						710368: "新市区",
						710369: "安定区",
						710399: "其它区",
						710401: "中区",
						710402: "东区",
						710403: "南区",
						710404: "西区",
						710405: "北区",
						710406: "北屯区",
						710407: "西屯区",
						710408: "南屯区",
						710431: "太平区",
						710432: "大里区",
						710433: "雾峰区",
						710434: "乌日区",
						710435: "丰原区",
						710436: "后里区",
						710437: "石冈区",
						710438: "东势区",
						710439: "和平区",
						710440: "新社区",
						710441: "潭子区",
						710442: "大雅区",
						710443: "神冈区",
						710444: "大肚区",
						710445: "沙鹿区",
						710446: "龙井区",
						710447: "梧栖区",
						710448: "清水区",
						710449: "大甲区",
						710450: "外埔区",
						710451: "大安区",
						710499: "其它区",
						710507: "金沙镇",
						710508: "金湖镇",
						710509: "金宁乡",
						710510: "金城镇",
						710511: "烈屿乡",
						710512: "乌坵乡",
						710614: "南投市",
						710615: "中寮乡",
						710616: "草屯镇",
						710617: "国姓乡",
						710618: "埔里镇",
						710619: "仁爱乡",
						710620: "名间乡",
						710621: "集集镇",
						710622: "水里乡",
						710623: "鱼池乡",
						710624: "信义乡",
						710625: "竹山镇",
						710626: "鹿谷乡",
						710701: "仁爱区",
						710702: "信义区",
						710703: "中正区",
						710704: "中山区",
						710705: "安乐区",
						710706: "暖暖区",
						710707: "七堵区",
						710799: "其它区",
						710801: "东区",
						710802: "北区",
						710803: "香山区",
						710899: "其它区",
						710901: "东区",
						710902: "西区",
						710999: "其它区",
						711130: "万里区",
						711132: "板桥区",
						711133: "汐止区",
						711134: "深坑区",
						711135: "石碇区",
						711136: "瑞芳区",
						711137: "平溪区",
						711138: "双溪区",
						711139: "贡寮区",
						711140: "新店区",
						711141: "坪林区",
						711142: "乌来区",
						711143: "永和区",
						711144: "中和区",
						711145: "土城区",
						711146: "三峡区",
						711147: "树林区",
						711148: "莺歌区",
						711149: "三重区",
						711150: "新庄区",
						711151: "泰山区",
						711152: "林口区",
						711153: "芦洲区",
						711154: "五股区",
						711155: "八里区",
						711156: "淡水区",
						711157: "三芝区",
						711158: "石门区",
						711287: "宜兰市",
						711288: "头城镇",
						711289: "礁溪乡",
						711290: "壮围乡",
						711291: "员山乡",
						711292: "罗东镇",
						711293: "三星乡",
						711294: "大同乡",
						711295: "五结乡",
						711296: "冬山乡",
						711297: "苏澳镇",
						711298: "南澳乡",
						711299: "钓鱼台",
						711387: "竹北市",
						711388: "湖口乡",
						711389: "新丰乡",
						711390: "新埔镇",
						711391: "关西镇",
						711392: "芎林乡",
						711393: "宝山乡",
						711394: "竹东镇",
						711395: "五峰乡",
						711396: "横山乡",
						711397: "尖石乡",
						711398: "北埔乡",
						711399: "峨眉乡",
						711414: "中坜区",
						711415: "平镇区",
						711417: "杨梅区",
						711418: "新屋区",
						711419: "观音区",
						711420: "桃园区",
						711421: "龟山区",
						711422: "八德区",
						711423: "大溪区",
						711425: "大园区",
						711426: "芦竹区",
						711487: "中坜市",
						711488: "平镇市",
						711489: "龙潭乡",
						711490: "杨梅市",
						711491: "新屋乡",
						711492: "观音乡",
						711493: "桃园市",
						711494: "龟山乡",
						711495: "八德市",
						711496: "大溪镇",
						711497: "复兴乡",
						711498: "大园乡",
						711499: "芦竹乡",
						711520: "头份市",
						711582: "竹南镇",
						711583: "头份镇",
						711584: "三湾乡",
						711585: "南庄乡",
						711586: "狮潭乡",
						711587: "后龙镇",
						711588: "通霄镇",
						711589: "苑里镇",
						711590: "苗栗市",
						711591: "造桥乡",
						711592: "头屋乡",
						711593: "公馆乡",
						711594: "大湖乡",
						711595: "泰安乡",
						711596: "铜锣乡",
						711597: "三义乡",
						711598: "西湖乡",
						711599: "卓兰镇",
						711736: "员林市",
						711774: "彰化市",
						711775: "芬园乡",
						711776: "花坛乡",
						711777: "秀水乡",
						711778: "鹿港镇",
						711779: "福兴乡",
						711780: "线西乡",
						711781: "和美镇",
						711782: "伸港乡",
						711783: "员林镇",
						711784: "社头乡",
						711785: "永靖乡",
						711786: "埔心乡",
						711787: "溪湖镇",
						711788: "大村乡",
						711789: "埔盐乡",
						711790: "田中镇",
						711791: "北斗镇",
						711792: "田尾乡",
						711793: "埤头乡",
						711794: "溪州乡",
						711795: "竹塘乡",
						711796: "二林镇",
						711797: "大城乡",
						711798: "芳苑乡",
						711799: "二水乡",
						711982: "番路乡",
						711983: "梅山乡",
						711984: "竹崎乡",
						711985: "阿里山乡",
						711986: "中埔乡",
						711987: "大埔乡",
						711988: "水上乡",
						711989: "鹿草乡",
						711990: "太保市",
						711991: "朴子市",
						711992: "东石乡",
						711993: "六脚乡",
						711994: "新港乡",
						711995: "民雄乡",
						711996: "大林镇",
						711997: "溪口乡",
						711998: "义竹乡",
						711999: "布袋镇",
						712180: "斗南镇",
						712181: "大埤乡",
						712182: "虎尾镇",
						712183: "土库镇",
						712184: "褒忠乡",
						712185: "东势乡",
						712186: "台西乡",
						712187: "仑背乡",
						712188: "麦寮乡",
						712189: "斗六市",
						712190: "林内乡",
						712191: "古坑乡",
						712192: "莿桐乡",
						712193: "西螺镇",
						712194: "二仑乡",
						712195: "北港镇",
						712196: "水林乡",
						712197: "口湖乡",
						712198: "四湖乡",
						712199: "元长乡",
						712451: "崁顶乡",
						712467: "屏东市",
						712468: "三地门乡",
						712469: "雾台乡",
						712470: "玛家乡",
						712471: "九如乡",
						712472: "里港乡",
						712473: "高树乡",
						712474: "盐埔乡",
						712475: "长治乡",
						712476: "麟洛乡",
						712477: "竹田乡",
						712478: "内埔乡",
						712479: "万丹乡",
						712480: "潮州镇",
						712481: "泰武乡",
						712482: "来义乡",
						712483: "万峦乡",
						712484: "莰顶乡",
						712485: "新埤乡",
						712486: "南州乡",
						712487: "林边乡",
						712488: "东港镇",
						712489: "琉球乡",
						712490: "佳冬乡",
						712491: "新园乡",
						712492: "枋寮乡",
						712493: "枋山乡",
						712494: "春日乡",
						712495: "狮子乡",
						712496: "车城乡",
						712497: "牡丹乡",
						712498: "恒春镇",
						712499: "满州乡",
						712584: "台东市",
						712585: "绿岛乡",
						712586: "兰屿乡",
						712587: "延平乡",
						712588: "卑南乡",
						712589: "鹿野乡",
						712590: "关山镇",
						712591: "海端乡",
						712592: "池上乡",
						712593: "东河乡",
						712594: "成功镇",
						712595: "长滨乡",
						712596: "金峰乡",
						712597: "大武乡",
						712598: "达仁乡",
						712599: "太麻里乡",
						712686: "花莲市",
						712687: "新城乡",
						712688: "太鲁阁",
						712689: "秀林乡",
						712690: "吉安乡",
						712691: "寿丰乡",
						712692: "凤林镇",
						712693: "光复乡",
						712694: "丰滨乡",
						712695: "瑞穗乡",
						712696: "万荣乡",
						712697: "玉里镇",
						712698: "卓溪乡",
						712699: "富里乡",
						712794: "马公市",
						712795: "西屿乡",
						712796: "望安乡",
						712797: "七美乡",
						712798: "白沙乡",
						712799: "湖西乡",
						712896: "南竿乡",
						712897: "北竿乡",
						712898: "东引乡",
						712899: "莒光乡",
						810101: "中西区",
						810102: "湾仔区",
						810103: "东区",
						810104: "南区",
						810201: "九龙城区",
						810202: "油尖旺区",
						810203: "深水埗区",
						810204: "黄大仙区",
						810205: "观塘区",
						810301: "北区",
						810302: "大埔区",
						810303: "沙田区",
						810304: "西贡区",
						810305: "元朗区",
						810306: "屯门区",
						810307: "荃湾区",
						810308: "葵青区",
						810309: "离岛区",
						820102: "花地玛堂区",
						820103: "花王堂区",
						820104: "望德堂区",
						820105: "大堂区",
						820106: "风顺堂区",
						820202: "嘉模堂区",
						820203: "路氹填海区",
						820204: "圣方济各堂区",
						901101: "阿富汗",
						901102: "亚美尼亚",
						901103: "阿塞拜疆",
						901104: "巴林",
						901105: "孟加拉国",
						901106: "不丹",
						901107: "文莱",
						901108: "柬埔寨",
						901109: "东帝汶",
						901110: "乔治亚州",
						901111: "印度",
						901112: "印度尼西亚",
						901113: "伊朗",
						901114: "伊拉克",
						901115: "以色列",
						901116: "日本",
						901117: "乔丹",
						901118: "哈萨克斯坦",
						901119: "科威特",
						901120: "吉尔吉斯斯坦",
						901121: "老挝",
						901122: "黎巴嫩",
						901123: "马来西亚",
						901124: "马尔代夫",
						901125: "蒙古",
						901126: "缅甸",
						901127: "尼泊尔",
						901128: "朝鲜",
						901129: "阿曼",
						901130: "巴基斯坦",
						901131: "巴勒斯坦",
						901132: "菲律宾人",
						901133: "卡塔尔",
						901134: "沙特阿拉伯",
						901135: "新加坡",
						901136: "韩国",
						901137: "斯里兰卡",
						901138: "叙利亚",
						901139: "塔吉克斯坦",
						901140: "泰国",
						901141: "土耳其",
						901142: "土库曼斯坦",
						901143: "阿拉伯联合酋长国",
						901144: "乌兹别克斯坦",
						901145: "越南",
						901146: "也门",
						901201: "阿尔及利亚",
						901202: "安哥拉",
						901203: "贝宁",
						901204: "博茨瓦纳",
						901205: "布基纳法索",
						901206: "布隆迪",
						901207: "喀麦隆",
						901208: "佛得角",
						901209: "中非",
						901210: "乍得",
						901211: "科摩罗",
						901212: "刚果（布拉柴维尔）",
						901213: "刚果（DRC）",
						901214: "科特迪瓦",
						901215: "吉布提",
						901216: "埃及",
						901217: "赤道几内亚",
						901218: "厄立特里亚",
						901219: "埃塞俄比亚",
						901220: "加蓬",
						901221: "冈比亚",
						901222: "加纳",
						901223: "几内亚",
						901224: "几内亚比绍",
						901225: "肯尼亚",
						901226: "Lesotho",
						901227: "利比里亚",
						901228: "利比亚",
						901229: "马达加斯加",
						901230: "马拉维",
						901231: "马里",
						901232: "毛里塔尼亚",
						901233: "毛里求斯",
						901234: "摩洛哥",
						901235: "莫桑比克",
						901236: "纳米比亚",
						901237: "尼日尔",
						901238: "尼日利亚",
						901239: "卢旺达",
						901240: "圣多美和普林西比",
						901241: "塞内加尔",
						901242: "塞舌尔",
						901243: "塞拉利昂",
						901244: "索马里",
						901245: "南非",
						901246: "南苏丹",
						901247: "苏丹",
						901248: "斯威士兰",
						901249: "坦桑尼亚",
						901250: "多哥",
						901251: "突尼斯",
						901252: "乌干达",
						901253: "赞比亚",
						901254: "津巴布韦",
						901301: "阿尔巴尼亚",
						901302: "安道尔",
						901303: "奥地利",
						901304: "白俄罗斯",
						901305: "比利时",
						901306: "黑山",
						901307: "波斯尼亚和黑塞哥维那",
						901308: "保加利亚",
						901309: "克罗地亚",
						901310: "塞浦路斯",
						901311: "捷克共和国",
						901312: "丹麦",
						901313: "爱沙尼亚",
						901314: "芬兰",
						901315: "法国",
						901316: "德国",
						901317: "希腊",
						901318: "匈牙利",
						901319: "冰岛",
						901320: "爱尔兰",
						901321: "意大利",
						901322: "拉脱维亚",
						901323: "列支敦士登",
						901324: "立陶宛",
						901325: "卢森堡",
						901326: "马耳他",
						901327: "摩尔多瓦",
						901328: "摩纳哥",
						901329: "荷兰",
						901330: "北马其顿",
						901331: "挪威",
						901332: "波兰",
						901333: "葡萄牙",
						901334: "罗马尼亚",
						901335: "俄罗斯",
						901336: "圣马力诺",
						901337: "塞尔维亚",
						901338: "斯洛伐克",
						901339: "斯洛文尼亚",
						901340: "西班牙",
						901341: "瑞典",
						901342: "瑞士",
						901343: "乌克兰",
						901344: "英国",
						901345: "梵蒂冈",
						901401: "安提瓜和巴布达",
						901402: "巴巴多斯",
						901403: "伯利兹",
						901404: "加拿大",
						901405: "哥斯达黎加",
						901406: "古巴",
						901407: "多米尼加",
						901408: "多米尼加",
						901409: "萨尔瓦多",
						901410: "格林纳达",
						901411: "危地马拉",
						901412: "海地",
						901413: "洪都拉斯",
						901414: "牙买加",
						901415: "墨西哥",
						901416: "尼加拉瓜",
						901417: "巴拿马",
						901418: "圣基茨和尼维斯",
						901419: "圣卢西亚",
						901420: "圣文森特和格林纳丁斯",
						901421: "巴哈马",
						901422: "特立尼达和多巴哥",
						901423: "美国",
						901501: "阿根廷",
						901502: "玻利维亚",
						901503: "巴西",
						901504: "智利",
						901505: "哥伦比亚",
						901506: "厄瓜多尔",
						901507: "圭亚那",
						901508: "巴拉圭",
						901509: "秘鲁",
						901510: "苏里南",
						901511: "乌拉圭",
						901512: "委内瑞拉",
						901601: "澳大利亚",
						901602: "库克群岛",
						901603: "密克罗尼西亚联邦",
						901604: "斐济",
						901605: "基里巴斯",
						901606: "马绍尔群岛",
						901607: "瑙鲁",
						901608: "新西兰",
						901609: "纽埃",
						901610: "帕劳",
						901611: "巴布亚新几内亚",
						901612: "萨摩亚",
						901613: "所罗门群岛",
						901614: "汤加",
						901615: "图瓦卢",
						901616: "瓦努阿图"
					}
				}
			}
		};
		exports.default = e;
	});
	define("common/areaAbroad.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var a = {
			data: {
				areaList: {
					province_list: {
						11e4: "Asia",
						12e4: "Africa",
						13e4: "Europe",
						14e4: "North America",
						15e4: "South America",
						16e4: "Oceania"
					},
					city_list: {
						110100: "Afghanistan",
						110200: "Armenia",
						110300: "Azerbaijan",
						110400: "Bahrain",
						110500: "Bangladesh",
						110600: "Bhutan",
						110700: "Brunei",
						110800: "Cambodia",
						110900: "East Timor",
						111e3: "Georgia",
						111100: "India",
						111200: "Indonesia",
						111300: "Iran",
						111400: "Iraq",
						111500: "Israel",
						111600: "Japan",
						111700: "Jordan",
						111800: "Kazakhstan",
						111900: "Kuwait",
						112e3: "Kyrgyzstan",
						112100: "Laos",
						112200: "Lebanon",
						112300: "Malaysia",
						112400: "Maldives",
						112500: "Mongolia",
						112600: "Myanmar",
						112700: "Nepal",
						112800: "North Korea",
						112900: "Oman",
						113e3: "Pakistan",
						113100: "Palestine",
						113200: "Philippines",
						113300: "Qatar",
						113400: "Saudi Arabia",
						113500: "Singapore",
						113600: "South Korea",
						113700: "Sri Lanka",
						113800: "Syria",
						113900: "Tajikistan",
						114e3: "Thailand",
						114100: "Turkey",
						114200: "Turkmenistan",
						114300: "United Arab Emirates",
						114400: "Uzbekistan",
						114500: "Vietnam",
						114600: "Yemen",
						120100: "Algeria",
						120200: "Angola",
						120300: "Benin",
						120400: "Botswana",
						120500: "Burkina Faso",
						120600: "Burundi",
						120700: "Cameroon",
						120800: "Cape Verde",
						120900: "Central Africa",
						121e3: "Chad",
						121100: "Comoros",
						121200: "Congo (Brazzaville)",
						121300: "Congo (DRC)",
						121400: "Côte d'Ivoire",
						121500: "Djibouti",
						121600: "Egypt",
						121700: "Equatorial Guinea",
						121800: "Eritrea",
						121900: "Ethiopia",
						122e3: "Gabon",
						122100: "Gambia",
						122200: "Ghana",
						122300: "Guinea",
						122400: "Guinea-Bissau",
						122500: "Kenya",
						122600: "Lesotho",
						122700: "Liberia",
						122800: "Libya",
						122900: "Madagascar",
						123e3: "Malawi",
						123100: "Mali",
						123200: "Mauritania",
						123300: "Mauritius",
						123400: "Morocco",
						123500: "Mozambique",
						123600: "Namibia",
						123700: "Niger",
						123800: "Nigeria",
						123900: "Rwanda",
						124e3: "Sao Tome and Principe",
						124100: "Senegal",
						124200: "Seychelles",
						124300: "Sierra Leone",
						124400: "Somalia",
						124500: "South Africa",
						124600: "South Sudan",
						124700: "Sudan",
						124800: "Swaziland",
						124900: "Tanzania",
						125e3: "Togo",
						125100: "Tunisia",
						125200: "Uganda",
						125300: "Zambia",
						125400: "Zimbabwe",
						130100: "Albania",
						130200: "Andorra",
						130300: "Austria",
						130400: "Belarus",
						130500: "Belgium",
						130600: "Black Mountain",
						130700: "Bosnia and Herzegovina",
						130800: "Bulgaria",
						130900: "Croatia",
						131e3: "Cyprus",
						131100: "Czech Republic",
						131200: "Denmark",
						131300: "Estonia",
						131400: "Finland",
						131500: "France",
						131600: "Germany",
						131700: "Greece",
						131800: "Hungary",
						131900: "Iceland",
						132e3: "Ireland",
						132100: "Italy",
						132200: "Latvia",
						132300: "Liechtenstein",
						132400: "Lithuania",
						132500: "Luxembourg",
						132600: "Malta",
						132700: "Moldova",
						132800: "Monaco",
						132900: "Netherlands",
						133e3: "Northern Macedonia",
						133100: "Norway",
						133200: "Poland",
						133300: "Portugal",
						133400: "Romania",
						133500: "Russia",
						133600: "San Marino",
						133700: "Serbia",
						133800: "Slovakia",
						133900: "Slovenia",
						134e3: "Spain",
						134100: "Sweden",
						134200: "Switzerland",
						134300: "Ukraine",
						134400: "United Kingdom",
						134500: "Vatican",
						140100: "Antigua and Barbuda",
						140200: "Barbados",
						140300: "Belize",
						140400: "Canada",
						140500: "Costa Rica",
						140600: "Cuba",
						140700: "Dominica",
						140800: "Dominica",
						140900: "El Salvador",
						141e3: "Grenada",
						141100: "Guatemala",
						141200: "Haiti",
						141300: "Honduras",
						141400: "Jamaica",
						141500: "Mexico",
						141600: "Nicaragua",
						141700: "Panama",
						141800: "Saint Kitts and Nevis",
						141900: "Saint Lucia",
						142e3: "Saint Vincent and the Grenadines",
						142100: "The Bahamas",
						142200: "Trinidad and Tobago",
						142300: "United States",
						150100: "Argentina",
						150200: "Bolivia",
						150300: "Brazil",
						150400: "Chile",
						150500: "Colombia",
						150600: "Ecuador",
						150700: "Guyana",
						150800: "Paraguay",
						150900: "Peru",
						151e3: "Suriname",
						151100: "Uruguay",
						151200: "Venezuela",
						160100: "Australia",
						160200: "Cook Islands",
						160300: "Federated States of Micronesia",
						160400: "Fiji",
						160500: "Kiribati",
						160600: "Marshall Islands",
						160700: "Nauru",
						160800: "New Zealand",
						160900: "Niue",
						161e3: "Palau",
						161100: "Papua New Guinea",
						161200: "Samoa",
						161300: "Solomon Islands",
						161400: "Tonga",
						161500: "Tuvalu",
						161600: "Vanuatu"
					},
					county_list: {}
				}
			}
		};
		exports.default = a;
	});
	define("common/areaAbroadCN.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			data: {
				areaList: {
					province_list: {
						11e4: "Asia",
						12e4: "Africa",
						13e4: "Europe",
						14e4: "North America",
						15e4: "South America",
						16e4: "Oceania"
					},
					city_list: {
						110100: "阿富汗",
						110200: "亚美尼亚",
						110300: "阿塞拜疆",
						110400: "巴林",
						110500: "孟加拉国",
						110600: "不丹",
						110700: "文莱",
						110800: "柬埔寨",
						110900: "东帝汶",
						111e3: "乔治亚州",
						111100: "印度",
						111200: "印度尼西亚",
						111300: "伊朗",
						111400: "伊拉克",
						111500: "以色列",
						111600: "日本",
						111700: "乔丹",
						111800: "哈萨克斯坦",
						111900: "科威特",
						112e3: "吉尔吉斯斯坦",
						112100: "老挝",
						112200: "黎巴嫩",
						112300: "马来西亚",
						112400: "马尔代夫",
						112500: "蒙古",
						112600: "缅甸",
						112700: "尼泊尔",
						112800: "朝鲜",
						112900: "阿曼",
						113e3: "巴基斯坦",
						113100: "巴勒斯坦",
						113200: "菲律宾人",
						113300: "卡塔尔",
						113400: "沙特阿拉伯",
						113500: "新加坡",
						113600: "韩国",
						113700: "斯里兰卡",
						113800: "叙利亚",
						113900: "塔吉克斯坦",
						114e3: "泰国",
						114100: "土耳其",
						114200: "土库曼斯坦",
						114300: "阿拉伯联合酋长国",
						114400: "乌兹别克斯坦",
						114500: "越南",
						114600: "也门",
						120100: "阿尔及利亚",
						120200: "安哥拉",
						120300: "贝宁",
						120400: "博茨瓦纳",
						120500: "布基纳法索",
						120600: "布隆迪",
						120700: "喀麦隆",
						120800: "佛得角",
						120900: "中非",
						121e3: "乍得",
						121100: "科摩罗",
						121200: "刚果（布拉柴维尔）",
						121300: "刚果（DRC）",
						121400: "科特迪瓦",
						121500: "吉布提",
						121600: "埃及",
						121700: "赤道几内亚",
						121800: "厄立特里亚",
						121900: "埃塞俄比亚",
						122e3: "加蓬",
						122100: "冈比亚",
						122200: "加纳",
						122300: "几内亚",
						122400: "几内亚比绍",
						122500: "肯尼亚",
						122600: " Lesotho",
						122700: "利比里亚",
						122800: "利比亚",
						122900: "马达加斯加",
						123e3: "马拉维",
						123100: "马里",
						123200: "毛里塔尼亚",
						123300: "毛里求斯",
						123400: "摩洛哥",
						123500: "莫桑比克",
						123600: "纳米比亚",
						123700: "尼日尔",
						123800: "尼日利亚",
						123900: "卢旺达",
						124e3: "圣多美和普林西比",
						124100: "塞内加尔",
						124200: "塞舌尔",
						124300: "塞拉利昂",
						124400: "索马里",
						124500: "南非",
						124600: "南苏丹",
						124700: "苏丹",
						124800: "斯威士兰",
						124900: "坦桑尼亚",
						125e3: "多哥",
						125100: "突尼斯",
						125200: "乌干达",
						125300: "赞比亚",
						125400: "津巴布韦",
						130100: "阿尔巴尼亚",
						130200: "安道尔",
						130300: "奥地利",
						130400: "白俄罗斯",
						130500: "比利时",
						130600: "黑山",
						130700: "波斯尼亚和黑塞哥维那",
						130800: "保加利亚",
						130900: "克罗地亚",
						131e3: "塞浦路斯",
						131100: "捷克共和国",
						131200: "丹麦",
						131300: "爱沙尼亚",
						131400: "芬兰",
						131500: "法国",
						131600: "德国",
						131700: "希腊",
						131800: "匈牙利",
						131900: "冰岛",
						132e3: "爱尔兰",
						132100: "意大利",
						132200: "拉脱维亚",
						132300: "列支敦士登",
						132400: "立陶宛",
						132500: "卢森堡",
						132600: "马耳他",
						132700: "摩尔多瓦",
						132800: "摩纳哥",
						132900: "荷兰",
						133e3: "北马其顿",
						133100: "挪威",
						133200: "波兰",
						133300: "葡萄牙",
						133400: "罗马尼亚",
						133500: "俄罗斯",
						133600: "圣马力诺",
						133700: "塞尔维亚",
						133800: "斯洛伐克",
						133900: "斯洛文尼亚",
						134e3: "西班牙",
						134100: "瑞典",
						134200: "瑞士",
						134300: "乌克兰",
						134400: "英国",
						134500: "梵蒂冈",
						140100: "安提瓜和巴布达",
						140200: "巴巴多斯",
						140300: "伯利兹",
						140400: "加拿大",
						140500: "哥斯达黎加",
						140600: "古巴",
						140700: "多米尼加",
						140800: "多米尼加",
						140900: "萨尔瓦多",
						141e3: "格林纳达",
						141100: "危地马拉",
						141200: "海地",
						141300: "洪都拉斯",
						141400: "牙买加",
						141500: "墨西哥",
						141600: "尼加拉瓜",
						141700: "巴拿马",
						141800: "圣基茨和尼维斯",
						141900: "圣卢西亚",
						142e3: "圣文森特和格林纳丁斯",
						142100: "巴哈马",
						142200: "特立尼达和多巴哥",
						142300: "美国",
						150100: "阿根廷",
						150200: "玻利维亚",
						150300: "巴西",
						150400: "智利",
						150500: "哥伦比亚",
						150600: "厄瓜多尔",
						150700: "圭亚那",
						150800: "巴拉圭",
						150900: "秘鲁",
						151e3: "苏里南",
						151100: "乌拉圭",
						151200: "委内瑞拉",
						160100: "澳大利亚",
						160200: "库克群岛",
						160300: "密克罗尼西亚联邦",
						160400: "斐济",
						160500: "基里巴斯",
						160600: "马绍尔群岛",
						160700: "瑙鲁",
						160800: "新西兰",
						160900: "纽埃",
						161e3: "帕劳",
						161100: "巴布亚新几内亚",
						161200: "萨摩亚",
						161300: "所罗门群岛",
						161400: "汤加",
						161500: "图瓦卢",
						161600: "瓦努阿图"
					},
					county_list: {}
				}
			}
		};
		exports.default = e;
	});
	define("common/base64.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		! function () {
			var r = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],
				t = function (r) {
					for (var t = new Array; r > 0;) {
						var n = r % 2;
						r = Math.floor(r / 2), t.push(n)
					}
					return t.reverse(), t
				},
				n = function (r) {
					for (var t = 0, n = 0, o = r.length - 1; o >= 0; --o) 1 == r[o] && (t += Math.pow(2, n)), ++n;
					return t
				},
				o = function (r, t) {
					for (var n = 8 - (r + 1) + 6 * (r - 1) - t.length; --n >= 0;) t.unshift(0);
					for (var o = [], a = r; --a >= 0;) o.push(1);
					o.push(0);
					for (var c = 0, e = 8 - (r + 1); c < e; ++c) o.push(t[c]);
					for (var f = 0; f < r - 1; ++f) {
						o.push(1), o.push(0);
						for (var h = 6; --h >= 0;) o.push(t[c++])
					}
					return o
				},
				a = {
					encoder: function (a) {
						for (var c = [], e = [], f = 0, h = a.length; f < h; ++f) {
							var s = a.charCodeAt(f),
								u = t(s);
							if (s < 128) {
								for (var v = 8 - u.length; --v >= 0;) u.unshift(0);
								e = e.concat(u)
							} else s >= 128 && s <= 2047 ? e = e.concat(o(2, u)) : s >= 2048 && s <= 65535 ? e = e.concat(o(3, u)) : s >= 65536 && s <= 2097151 ? e = e.concat(o(4, u)) : s >= 2097152 && s <= 67108863 ? e = e.concat(o(5, u)) : s >= 4e6 && s <= 2147483647 && (e = e.concat(o(6, u)))
						}
						for (var i = 0, f = 0, h = e.length; f < h; f += 6) {
							var l = f + 6 - h;
							2 == l ? i = 2 : 4 == l && (i = 4);
							for (var g = i; --g >= 0;) e.push(0);
							c.push(n(e.slice(f, f + 6)))
						}
						for (var p = "", f = 0, h = c.length; f < h; ++f) p += r[c[f]];
						for (var f = 0, h = i / 2; f < h; ++f) p += "=";
						return p
					},
					decoder: function (o) {
						var a = o.length,
							c = 0;
						"=" == o.charAt(a - 1) && ("=" == o.charAt(a - 2) ? (c = 4, o = o.substring(0, a - 2)) : (c = 2, o = o.substring(0, a - 1)));
						for (var e = [], f = 0, h = o.length; f < h; ++f)
							for (var s = o.charAt(f), u = 0, v = r.length; u < v; ++u)
								if (s == r[u]) {
									var i = t(u),
										l = i.length;
									if (6 - l > 0)
										for (var g = 6 - l; g > 0; --g) i.unshift(0);
									e = e.concat(i);
									break
								} c > 0 && (e = e.slice(0, e.length - c));
						for (var p = [], A = [], f = 0, h = e.length; f < h;)
							if (0 == e[f]) p = p.concat(n(e.slice(f, f + 8))), f += 8;
							else {
								for (var d = 0; f < h && 1 == e[f];) ++d, ++f;
								for (A = A.concat(e.slice(f + 1, f + 8 - d)), f += 8 - d; d > 1;) A = A.concat(e.slice(f + 2, f + 8)), f += 8, --d;
								p = p.concat(n(A)), A = []
							} return p
					}
				};
			module.exports = {
				CusBASE64: a
			}
		}();
	});
	define("common/dateFormat.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = function (e, t, r) {
			var n = e.getFullYear();
			return t && (e.getMonth() < 9 ? n += "-0" + (e.getMonth() + 1) : n += "-" + (e.getMonth() + 1), e.getDate() < 10 ? n += "-0" + e.getDate() : n += "-" + e.getDate()), r && (e.getHours() < 10 ? n += " 0" + e.getHours() : n += " " + e.getHours(), e.getMinutes() < 10 ? n += ":0" + e.getMinutes() : n += ":" + e.getMinutes(), e.getSeconds() < 10 ? n += ":0" + e.getSeconds() : n += ":" + e.getSeconds()), n
		};
		module.exports = {
			date2Week: function (e) {
				var t = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
					r = new Date(Date.parse(e.replace(/-/g, "/")));
				return e.substr(0, 11) + t[r.getDay()]
			},
			dateText: function (t) {
				if (!t) return t;
				var r = new Date,
					n = e(r, !0);
				r.setTime(r.getTime() - 864e5);
				var g = e(r, !0);
				if (t.length >= 16) {
					var s = t.substr(0, 10),
						u = t.substr(10, 6);
					return 0 === n.indexOf(s) ? "今天" + u : g === s ? "昨天" + u : s + u
				}
			},
			dateHour: e
		};
	});
	define("common/eventHub.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = new(function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(require("./../vendor.js")(0)).default);
		exports.default = e;
	});
	define("common/httpUtils.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, e, o, i, a) {
			n(void 0, t, e, o, i, a)
		}

		function e(t) {
			return 0 === t.indexOf("/") && u ? u + t : t
		}

		function n(t, n, i, a, u, c) {
			wx.showLoading({
				mask: !0,
				title: "正在加载中..."
			}), t || (t = r, r.Authorization = "Bearer " + s.default.state.user.accessToken), wx.request({
				url: e(n),
				data: o(i),
				method: a,
				header: t,
				success: function (t) {
					wx.hideLoading(), t.data && u(t.data)
				},
				fail: function (t) {
					wx.hideLoading(), wx.showToast({
						title: "网络错误，请稍后再试",
						icon: "none"
					}), c && c(t)
				}
			})
		}

		function o(t) {
			return t
		}

		function i(t, e, n, o, i) {
			a(void 0, t, e, n, o, i)
		}

		function a(t, n, i, a, u, c) {
			t || (t = r, r.Authorization = "Bearer " + s.default.state.user.accessToken), wx.request({
				url: e(n),
				data: o(i),
				method: a,
				header: t,
				success: function (t) {
					t.data && u(t.data)
				},
				fail: function (t) {
					wx.showToast({
						title: "网络错误，请稍后再试",
						icon: "none"
					}), c && c(t)
				}
			})
		}
		var u, s = function (t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(require("./../store/index.js")),
			r = {
				"content-type": "application/x-www-form-urlencoded",
				Authorization: "Bearer " + s.default.state.user.accessToken
			};
		module.exports = {
			post: function (e, n, o, i) {
				t(e, n, "POST", o, i)
			},
			put: function (e, n, o, i) {
				t(e, n, "PUT", o, i)
			},
			get: function (e, n, o, i) {
				t(e, n, "GET", o, i)
			},
			get2: function (t, e, n, o) {
				i(t, e, "GET", n, o)
			},
			upload: function (t, n, o, i, a, u) {
				var r = {
					"Content-Type": "application/json",
					Authorization: "Bearer " + s.default.state.user.accessToken
				};
				wx.showLoading({
					mask: !0,
					title: "数据上传中..."
				}), wx.uploadFile({
					header: r,
					url: e(t),
					filePath: o,
					name: n,
					formData: i,
					success: function (t) {
						wx.hideLoading(), a(JSON.parse(t.data))
					},
					fail: function (t) {
						wx.hideLoading(), u && u(t)
					}
				})
			},
			addPrefix: e,
			setDomain: function (t) {
				u = t
			},
			wxPromisify: function (t) {
				return function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return new Promise(function (n, o) {
						e.success = function (t) {
							n(t)
						}, e.fail = function (t) {
							o(t)
						}, t(e)
					})
				}
			}
		};
	});
	define("common/log.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;
		module.exports = {
			info: function () {
				t && t.info.apply(t, arguments)
			},
			warn: function () {
				t && t.warn.apply(t, arguments)
			},
			error: function () {
				t && t.error.apply(t, arguments)
			},
			setFilterMsg: function (e) {
				t && t.setFilterMsg && "string" == typeof e && t.setFilterMsg(e)
			},
			addFilterMsg: function (e) {
				t && t.addFilterMsg && "string" == typeof e && t.addFilterMsg(e)
			}
		};
	});
	define("common/qqmap-wx-jssdk.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function e(t, e) {
			for (var i = 0; i < e.length; i++) {
				var s = e[i];
				s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
			}
		}

		function i(t, i, s) {
			return i && e(t.prototype, i), s && e(t, s), t
		}
		var s = {
				KEY_ERR: 311,
				KEY_ERR_MSG: "key格式错误",
				PARAM_ERR: 310,
				PARAM_ERR_MSG: "请求参数信息有误",
				SYSTEM_ERR: 600,
				SYSTEM_ERR_MSG: "系统错误",
				WX_ERR_CODE: 1e3,
				WX_OK_CODE: 200
			},
			o = "https://apis.map.qq.com/ws/",
			n = o + "place/v1/suggestion",
			r = {
				driving: "driving",
				transit: "transit"
			},
			a = {
				safeAdd: function (t, e) {
					var i = (65535 & t) + (65535 & e);
					return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
				},
				bitRotateLeft: function (t, e) {
					return t << e | t >>> 32 - e
				},
				md5cmn: function (t, e, i, s, o, n) {
					return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(e, t), this.safeAdd(s, n)), o), i)
				},
				md5ff: function (t, e, i, s, o, n, r) {
					return this.md5cmn(e & i | ~e & s, t, e, o, n, r)
				},
				md5gg: function (t, e, i, s, o, n, r) {
					return this.md5cmn(e & s | i & ~s, t, e, o, n, r)
				},
				md5hh: function (t, e, i, s, o, n, r) {
					return this.md5cmn(e ^ i ^ s, t, e, o, n, r)
				},
				md5ii: function (t, e, i, s, o, n, r) {
					return this.md5cmn(i ^ (e | ~s), t, e, o, n, r)
				},
				binlMD5: function (t, e) {
					t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
					var i, s, o, n, r, a = 1732584193,
						l = -271733879,
						d = -1732584194,
						c = 271733878;
					for (i = 0; i < t.length; i += 16) s = a, o = l, n = d, r = c, a = this.md5ff(a, l, d, c, t[i], 7, -680876936), c = this.md5ff(c, a, l, d, t[i + 1], 12, -389564586), d = this.md5ff(d, c, a, l, t[i + 2], 17, 606105819), l = this.md5ff(l, d, c, a, t[i + 3], 22, -1044525330), a = this.md5ff(a, l, d, c, t[i + 4], 7, -176418897), c = this.md5ff(c, a, l, d, t[i + 5], 12, 1200080426), d = this.md5ff(d, c, a, l, t[i + 6], 17, -1473231341), l = this.md5ff(l, d, c, a, t[i + 7], 22, -45705983), a = this.md5ff(a, l, d, c, t[i + 8], 7, 1770035416), c = this.md5ff(c, a, l, d, t[i + 9], 12, -1958414417), d = this.md5ff(d, c, a, l, t[i + 10], 17, -42063), l = this.md5ff(l, d, c, a, t[i + 11], 22, -1990404162), a = this.md5ff(a, l, d, c, t[i + 12], 7, 1804603682), c = this.md5ff(c, a, l, d, t[i + 13], 12, -40341101), d = this.md5ff(d, c, a, l, t[i + 14], 17, -1502002290), l = this.md5ff(l, d, c, a, t[i + 15], 22, 1236535329), a = this.md5gg(a, l, d, c, t[i + 1], 5, -165796510), c = this.md5gg(c, a, l, d, t[i + 6], 9, -1069501632), d = this.md5gg(d, c, a, l, t[i + 11], 14, 643717713), l = this.md5gg(l, d, c, a, t[i], 20, -373897302), a = this.md5gg(a, l, d, c, t[i + 5], 5, -701558691), c = this.md5gg(c, a, l, d, t[i + 10], 9, 38016083), d = this.md5gg(d, c, a, l, t[i + 15], 14, -660478335), l = this.md5gg(l, d, c, a, t[i + 4], 20, -405537848), a = this.md5gg(a, l, d, c, t[i + 9], 5, 568446438), c = this.md5gg(c, a, l, d, t[i + 14], 9, -1019803690), d = this.md5gg(d, c, a, l, t[i + 3], 14, -187363961), l = this.md5gg(l, d, c, a, t[i + 8], 20, 1163531501), a = this.md5gg(a, l, d, c, t[i + 13], 5, -1444681467), c = this.md5gg(c, a, l, d, t[i + 2], 9, -51403784), d = this.md5gg(d, c, a, l, t[i + 7], 14, 1735328473), l = this.md5gg(l, d, c, a, t[i + 12], 20, -1926607734), a = this.md5hh(a, l, d, c, t[i + 5], 4, -378558), c = this.md5hh(c, a, l, d, t[i + 8], 11, -2022574463), d = this.md5hh(d, c, a, l, t[i + 11], 16, 1839030562), l = this.md5hh(l, d, c, a, t[i + 14], 23, -35309556), a = this.md5hh(a, l, d, c, t[i + 1], 4, -1530992060), c = this.md5hh(c, a, l, d, t[i + 4], 11, 1272893353), d = this.md5hh(d, c, a, l, t[i + 7], 16, -155497632), l = this.md5hh(l, d, c, a, t[i + 10], 23, -1094730640), a = this.md5hh(a, l, d, c, t[i + 13], 4, 681279174), c = this.md5hh(c, a, l, d, t[i], 11, -358537222), d = this.md5hh(d, c, a, l, t[i + 3], 16, -722521979), l = this.md5hh(l, d, c, a, t[i + 6], 23, 76029189), a = this.md5hh(a, l, d, c, t[i + 9], 4, -640364487), c = this.md5hh(c, a, l, d, t[i + 12], 11, -421815835), d = this.md5hh(d, c, a, l, t[i + 15], 16, 530742520), l = this.md5hh(l, d, c, a, t[i + 2], 23, -995338651), a = this.md5ii(a, l, d, c, t[i], 6, -198630844), c = this.md5ii(c, a, l, d, t[i + 7], 10, 1126891415), d = this.md5ii(d, c, a, l, t[i + 14], 15, -1416354905), l = this.md5ii(l, d, c, a, t[i + 5], 21, -57434055), a = this.md5ii(a, l, d, c, t[i + 12], 6, 1700485571), c = this.md5ii(c, a, l, d, t[i + 3], 10, -1894986606), d = this.md5ii(d, c, a, l, t[i + 10], 15, -1051523), l = this.md5ii(l, d, c, a, t[i + 1], 21, -2054922799), a = this.md5ii(a, l, d, c, t[i + 8], 6, 1873313359), c = this.md5ii(c, a, l, d, t[i + 15], 10, -30611744), d = this.md5ii(d, c, a, l, t[i + 6], 15, -1560198380), l = this.md5ii(l, d, c, a, t[i + 13], 21, 1309151649), a = this.md5ii(a, l, d, c, t[i + 4], 6, -145523070), c = this.md5ii(c, a, l, d, t[i + 11], 10, -1120210379), d = this.md5ii(d, c, a, l, t[i + 2], 15, 718787259), l = this.md5ii(l, d, c, a, t[i + 9], 21, -343485551), a = this.safeAdd(a, s), l = this.safeAdd(l, o), d = this.safeAdd(d, n), c = this.safeAdd(c, r);
					return [a, l, d, c]
				},
				binl2rstr: function (t) {
					var e, i = "",
						s = 32 * t.length;
					for (e = 0; e < s; e += 8) i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
					return i
				},
				rstr2binl: function (t) {
					var e, i = [];
					for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1) i[e] = 0;
					var s = 8 * t.length;
					for (e = 0; e < s; e += 8) i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
					return i
				},
				rstrMD5: function (t) {
					return this.binl2rstr(this.binlMD5(this.rstr2binl(t), 8 * t.length))
				},
				rstrHMACMD5: function (t, e) {
					var i, s, o = this.rstr2binl(t),
						n = [],
						r = [];
					for (n[15] = r[15] = void 0, o.length > 16 && (o = this.binlMD5(o, 8 * t.length)), i = 0; i < 16; i += 1) n[i] = 909522486 ^ o[i], r[i] = 1549556828 ^ o[i];
					return s = this.binlMD5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length), this.binl2rstr(this.binlMD5(r.concat(s), 640))
				},
				rstr2hex: function (t) {
					var e, i, s = "";
					for (i = 0; i < t.length; i += 1) e = t.charCodeAt(i), s += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
					return s
				},
				str2rstrUTF8: function (t) {
					return unescape(encodeURIComponent(t))
				},
				rawMD5: function (t) {
					return this.rstrMD5(this.str2rstrUTF8(t))
				},
				hexMD5: function (t) {
					return this.rstr2hex(this.rawMD5(t))
				},
				rawHMACMD5: function (t, e) {
					return this.rstrHMACMD5(this.str2rstrUTF8(t), str2rstrUTF8(e))
				},
				hexHMACMD5: function (t, e) {
					return this.rstr2hex(this.rawHMACMD5(t, e))
				},
				md5: function (t, e, i) {
					return e ? i ? this.rawHMACMD5(e, t) : this.hexHMACMD5(e, t) : i ? this.rawMD5(t) : this.hexMD5(t)
				},
				getSig: function (t, e, i, s) {
					var o = null,
						n = [];
					return Object.keys(t).sort().forEach(function (e) {
						n.push(e + "=" + t[e])
					}), "search" == i && (o = "/ws/place/v1/search?" + n.join("&") + e), "suggest" == i && (o = "/ws/place/v1/suggestion?" + n.join("&") + e), "reverseGeocoder" == i && (o = "/ws/geocoder/v1/?" + n.join("&") + e), "geocoder" == i && (o = "/ws/geocoder/v1/?" + n.join("&") + e), "getCityList" == i && (o = "/ws/district/v1/list?" + n.join("&") + e), "getDistrictByCityId" == i && (o = "/ws/district/v1/getchildren?" + n.join("&") + e), "calculateDistance" == i && (o = "/ws/distance/v1/?" + n.join("&") + e), "direction" == i && (o = "/ws/direction/v1/" + s + "?" + n.join("&") + e), o = this.md5(o)
				},
				location2query: function (t) {
					if ("string" == typeof t) return t;
					for (var e = "", i = 0; i < t.length; i++) {
						var s = t[i];
						e && (e += ";"), s.location && (e = e + s.location.lat + "," + s.location.lng), s.latitude && s.longitude && (e = e + s.latitude + "," + s.longitude)
					}
					return e
				},
				rad: function (t) {
					return t * Math.PI / 180
				},
				getEndLocation: function (t) {
					for (var e = t.split(";"), i = [], s = 0; s < e.length; s++) i.push({
						lat: parseFloat(e[s].split(",")[0]),
						lng: parseFloat(e[s].split(",")[1])
					});
					return i
				},
				getDistance: function (t, e, i, s) {
					var o = this.rad(t),
						n = this.rad(i),
						r = o - n,
						a = this.rad(e) - this.rad(s),
						l = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(o) * Math.cos(n) * Math.pow(Math.sin(a / 2), 2)));
					return l *= 6378136.49, l = Math.round(1e4 * l) / 1e4, parseFloat(l.toFixed(0))
				},
				getWXLocation: function (t, e, i) {
					wx.getLocation({
						type: "gcj02",
						success: t,
						fail: e,
						complete: i
					})
				},
				getLocationParam: function (t) {
					return "string" == typeof t && (t = 2 === t.split(",").length ? {
						latitude: t.split(",")[0],
						longitude: t.split(",")[1]
					} : {}), t
				},
				polyfillParam: function (t) {
					t.success = t.success || function () {}, t.fail = t.fail || function () {}, t.complete = t.complete || function () {}
				},
				checkParamKeyEmpty: function (t, e) {
					if (!t[e]) {
						var i = this.buildErrorConfig(s.PARAM_ERR, s.PARAM_ERR_MSG + e + "参数格式有误");
						return t.fail(i), t.complete(i), !0
					}
					return !1
				},
				checkKeyword: function (t) {
					return !this.checkParamKeyEmpty(t, "keyword")
				},
				checkLocation: function (t) {
					var e = this.getLocationParam(t.location);
					if (!e || !e.latitude || !e.longitude) {
						var i = this.buildErrorConfig(s.PARAM_ERR, s.PARAM_ERR_MSG + " location参数格式有误");
						return t.fail(i), t.complete(i), !1
					}
					return !0
				},
				buildErrorConfig: function (t, e) {
					return {
						status: t,
						message: e
					}
				},
				handleData: function (t, e, i) {
					if ("search" == i) {
						for (var s = e.data, o = [], n = 0; n < s.length; n++) o.push({
							id: s[n].id || null,
							title: s[n].title || null,
							latitude: s[n].location && s[n].location.lat || null,
							longitude: s[n].location && s[n].location.lng || null,
							address: s[n].address || null,
							category: s[n].category || null,
							tel: s[n].tel || null,
							adcode: s[n].ad_info && s[n].ad_info.adcode || null,
							city: s[n].ad_info && s[n].ad_info.city || null,
							district: s[n].ad_info && s[n].ad_info.district || null,
							province: s[n].ad_info && s[n].ad_info.province || null
						});
						t.success(e, {
							searchResult: s,
							searchSimplify: o
						})
					} else if ("suggest" == i) {
						for (var r = e.data, a = [], n = 0; n < r.length; n++) a.push({
							adcode: r[n].adcode || null,
							address: r[n].address || null,
							category: r[n].category || null,
							city: r[n].city || null,
							district: r[n].district || null,
							id: r[n].id || null,
							latitude: r[n].location && r[n].location.lat || null,
							longitude: r[n].location && r[n].location.lng || null,
							province: r[n].province || null,
							title: r[n].title || null,
							type: r[n].type || null
						});
						t.success(e, {
							suggestResult: r,
							suggestSimplify: a
						})
					} else if ("reverseGeocoder" == i) {
						var l = e.result,
							d = {
								address: l.address || null,
								latitude: l.location && l.location.lat || null,
								longitude: l.location && l.location.lng || null,
								adcode: l.ad_info && l.ad_info.adcode || null,
								city: l.address_component && l.address_component.city || null,
								district: l.address_component && l.address_component.district || null,
								nation: l.address_component && l.address_component.nation || null,
								province: l.address_component && l.address_component.province || null,
								street: l.address_component && l.address_component.street || null,
								street_number: l.address_component && l.address_component.street_number || null,
								recommend: l.formatted_addresses && l.formatted_addresses.recommend || null,
								rough: l.formatted_addresses && l.formatted_addresses.rough || null
							};
						if (l.pois) {
							for (var c = l.pois, u = [], n = 0; n < c.length; n++) u.push({
								id: c[n].id || null,
								title: c[n].title || null,
								latitude: c[n].location && c[n].location.lat || null,
								longitude: c[n].location && c[n].location.lng || null,
								address: c[n].address || null,
								category: c[n].category || null,
								adcode: c[n].ad_info && c[n].ad_info.adcode || null,
								city: c[n].ad_info && c[n].ad_info.city || null,
								district: c[n].ad_info && c[n].ad_info.district || null,
								province: c[n].ad_info && c[n].ad_info.province || null
							});
							t.success(e, {
								reverseGeocoderResult: l,
								reverseGeocoderSimplify: d,
								pois: c,
								poisSimplify: u
							})
						} else t.success(e, {
							reverseGeocoderResult: l,
							reverseGeocoderSimplify: d
						})
					} else if ("geocoder" == i) {
						var g = e.result,
							f = {
								title: g.title || null,
								latitude: g.location && g.location.lat || null,
								longitude: g.location && g.location.lng || null,
								adcode: g.ad_info && g.ad_info.adcode || null,
								province: g.address_components && g.address_components.province || null,
								city: g.address_components && g.address_components.city || null,
								district: g.address_components && g.address_components.district || null,
								street: g.address_components && g.address_components.street || null,
								street_number: g.address_components && g.address_components.street_number || null,
								level: g.level || null
							};
						t.success(e, {
							geocoderResult: g,
							geocoderSimplify: f
						})
					} else if ("getCityList" == i) {
						var h = e.result[0],
							m = e.result[1],
							p = e.result[2];
						t.success(e, {
							provinceResult: h,
							cityResult: m,
							districtResult: p
						})
					} else if ("getDistrictByCityId" == i) {
						var y = e.result[0];
						t.success(e, y)
					} else if ("calculateDistance" == i) {
						for (var _ = e.result.elements, v = [], n = 0; n < _.length; n++) v.push(_[n].distance);
						t.success(e, {
							calculateDistanceResult: _,
							distance: v
						})
					} else if ("direction" == i) {
						var R = e.result.routes;
						t.success(e, R)
					} else t.success(e)
				},
				buildWxRequestConfig: function (t, e, i) {
					var o = this;
					return e.header = {
						"content-type": "application/json"
					}, e.method = "GET", e.success = function (e) {
						var s = e.data;
						0 === s.status ? o.handleData(t, s, i) : t.fail(s)
					}, e.fail = function (e) {
						e.statusCode = s.WX_ERR_CODE, t.fail(o.buildErrorConfig(s.WX_ERR_CODE, e.errMsg))
					}, e.complete = function (e) {
						switch (+e.statusCode) {
							case s.WX_ERR_CODE:
								t.complete(o.buildErrorConfig(s.WX_ERR_CODE, e.errMsg));
								break;
							case s.WX_OK_CODE:
								var i = e.data;
								0 === i.status ? t.complete(i) : t.complete(o.buildErrorConfig(i.status, i.message));
								break;
							default:
								t.complete(o.buildErrorConfig(s.SYSTEM_ERR, s.SYSTEM_ERR_MSG))
						}
					}, e
				},
				locationProcess: function (t, e, i, o) {
					var n = this;
					i = i || function (e) {
						e.statusCode = s.WX_ERR_CODE, t.fail(n.buildErrorConfig(s.WX_ERR_CODE, e.errMsg))
					}, o = o || function (e) {
						e.statusCode == s.WX_ERR_CODE && t.complete(n.buildErrorConfig(s.WX_ERR_CODE, e.errMsg))
					}, t.location ? n.checkLocation(t) && e(a.getLocationParam(t.location)) : n.getWXLocation(e, i, o)
				}
			},
			l = function () {
				function e(i) {
					if (t(this, e), !i.key) throw Error("key值不能为空");
					this.key = i.key
				}
				return i(e, [{
					key: "search",
					value: function (t) {
						var e = this;
						if (t = t || {}, a.polyfillParam(t), a.checkKeyword(t)) {
							var i = {
								keyword: t.keyword,
								orderby: t.orderby || "_distance",
								page_size: t.page_size || 10,
								page_index: t.page_index || 1,
								output: "json",
								key: e.key
							};
							t.address_format && (i.address_format = t.address_format), t.filter && (i.filter = t.filter);
							var s = t.distance || "1000",
								o = t.auto_extend || 1,
								n = null,
								r = null;
							t.region && (n = t.region), t.rectangle && (r = t.rectangle);
							a.locationProcess(t, function (e) {
								n && !r ? (i.boundary = "region(" + n + "," + o + "," + e.latitude + "," + e.longitude + ")", t.sig && (i.sig = a.getSig(i, t.sig, "search"))) : r && !n ? (i.boundary = "rectangle(" + r + ")", t.sig && (i.sig = a.getSig(i, t.sig, "search"))) : (i.boundary = "nearby(" + e.latitude + "," + e.longitude + "," + s + "," + o + ")", t.sig && (i.sig = a.getSig(i, t.sig, "search"))), wx.request(a.buildWxRequestConfig(t, {
									url: "https://apis.map.qq.com/ws/place/v1/search",
									data: i
								}, "search"))
							})
						}
					}
				}, {
					key: "getSuggestion",
					value: function (t) {
						var e = this;
						if (t = t || {}, a.polyfillParam(t), a.checkKeyword(t)) {
							var i = {
								keyword: t.keyword,
								region: t.region || "全国",
								region_fix: t.region_fix || 0,
								policy: t.policy || 0,
								page_size: t.page_size || 10,
								page_index: t.page_index || 1,
								get_subpois: t.get_subpois || 0,
								output: "json",
								key: e.key
							};
							if (t.address_format && (i.address_format = t.address_format), t.filter && (i.filter = t.filter), t.location) {
								a.locationProcess(t, function (e) {
									i.location = e.latitude + "," + e.longitude, t.sig && (i.sig = a.getSig(i, t.sig, "suggest")), wx.request(a.buildWxRequestConfig(t, {
										url: n,
										data: i
									}, "suggest"))
								})
							} else t.sig && (i.sig = a.getSig(i, t.sig, "suggest")), wx.request(a.buildWxRequestConfig(t, {
								url: n,
								data: i
							}, "suggest"))
						}
					}
				}, {
					key: "reverseGeocoder",
					value: function (t) {
						var e = this;
						t = t || {}, a.polyfillParam(t);
						var i = {
							coord_type: t.coord_type || 5,
							get_poi: t.get_poi || 0,
							output: "json",
							key: e.key
						};
						t.poi_options && (i.poi_options = t.poi_options);
						a.locationProcess(t, function (e) {
							i.location = e.latitude + "," + e.longitude, t.sig && (i.sig = a.getSig(i, t.sig, "reverseGeocoder")), wx.request(a.buildWxRequestConfig(t, {
								url: "https://apis.map.qq.com/ws/geocoder/v1/",
								data: i
							}, "reverseGeocoder"))
						})
					}
				}, {
					key: "geocoder",
					value: function (t) {
						var e = this;
						if (t = t || {}, a.polyfillParam(t), !a.checkParamKeyEmpty(t, "address")) {
							var i = {
								address: t.address,
								output: "json",
								key: e.key
							};
							t.region && (i.region = t.region), t.sig && (i.sig = a.getSig(i, t.sig, "geocoder")), wx.request(a.buildWxRequestConfig(t, {
								url: "https://apis.map.qq.com/ws/geocoder/v1/",
								data: i
							}, "geocoder"))
						}
					}
				}, {
					key: "getCityList",
					value: function (t) {
						var e = this;
						t = t || {}, a.polyfillParam(t);
						var i = {
							output: "json",
							key: e.key
						};
						t.sig && (i.sig = a.getSig(i, t.sig, "getCityList")), wx.request(a.buildWxRequestConfig(t, {
							url: "https://apis.map.qq.com/ws/district/v1/list",
							data: i
						}, "getCityList"))
					}
				}, {
					key: "getDistrictByCityId",
					value: function (t) {
						var e = this;
						if (t = t || {}, a.polyfillParam(t), !a.checkParamKeyEmpty(t, "id")) {
							var i = {
								id: t.id || "",
								output: "json",
								key: e.key
							};
							t.sig && (i.sig = a.getSig(i, t.sig, "getDistrictByCityId")), wx.request(a.buildWxRequestConfig(t, {
								url: "https://apis.map.qq.com/ws/district/v1/getchildren",
								data: i
							}, "getDistrictByCityId"))
						}
					}
				}, {
					key: "calculateDistance",
					value: function (t) {
						var e = this;
						if (t = t || {}, a.polyfillParam(t), !a.checkParamKeyEmpty(t, "to")) {
							var i = {
								mode: t.mode || "walking",
								to: a.location2query(t.to),
								output: "json",
								key: e.key
							};
							if (t.from && (t.location = t.from), "straight" == i.mode) {
								s = function (e) {
									for (var s = a.getEndLocation(i.to), o = {
											message: "query ok",
											result: {
												elements: []
											},
											status: 0
										}, n = 0; n < s.length; n++) o.result.elements.push({
										distance: a.getDistance(e.latitude, e.longitude, s[n].lat, s[n].lng),
										duration: 0,
										from: {
											lat: e.latitude,
											lng: e.longitude
										},
										to: {
											lat: s[n].lat,
											lng: s[n].lng
										}
									});
									for (var r = o.result.elements, l = [], n = 0; n < r.length; n++) l.push(r[n].distance);
									return t.success(o, {
										calculateResult: r,
										distanceResult: l
									})
								};
								a.locationProcess(t, s)
							} else {
								var s = function (e) {
									i.from = e.latitude + "," + e.longitude, t.sig && (i.sig = a.getSig(i, t.sig, "calculateDistance")), wx.request(a.buildWxRequestConfig(t, {
										url: "https://apis.map.qq.com/ws/distance/v1/",
										data: i
									}, "calculateDistance"))
								};
								a.locationProcess(t, s)
							}
						}
					}
				}, {
					key: "direction",
					value: function (t) {
						var e = this;
						if (t = t || {}, a.polyfillParam(t), !a.checkParamKeyEmpty(t, "to")) {
							var i = {
								output: "json",
								key: e.key
							};
							"string" == typeof t.to ? i.to = t.to : i.to = t.to.latitude + "," + t.to.longitude;
							var s = null;
							t.mode = t.mode || r.driving, s = "https://apis.map.qq.com/ws/direction/v1/" + t.mode, t.from && (t.location = t.from), t.mode == r.driving && (t.from_poi && (i.from_poi = t.from_poi), t.heading && (i.heading = t.heading), t.speed && (i.speed = t.speed), t.accuracy && (i.accuracy = t.accuracy), t.road_type && (i.road_type = t.road_type), t.to_poi && (i.to_poi = t.to_poi), t.from_track && (i.from_track = t.from_track), t.waypoints && (i.waypoints = t.waypoints), t.policy && (i.policy = t.policy), t.plate_number && (i.plate_number = t.plate_number)), t.mode == r.transit && (t.departure_time && (i.departure_time = t.departure_time), t.policy && (i.policy = t.policy));
							a.locationProcess(t, function (e) {
								i.from = e.latitude + "," + e.longitude, t.sig && (i.sig = a.getSig(i, t.sig, "direction", t.mode)), wx.request(a.buildWxRequestConfig(t, {
									url: s,
									data: i
								}, "direction"))
							})
						}
					}
				}]), e
			}();
		module.exports = l;
	});
	define("common/utils.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t < 10 ? "0" + t : t
		}

		function e(e) {
			null == e && (e = new Date);
			var n = e.getDate(),
				o = e.getMonth() + 1;
			return e.getFullYear() + "-" + t(o) + "-" + t(n)
		}

		function n(e) {
			null == e && (e = new Date);
			var n = e.getDate(),
				o = e.getMonth() + 1;
			return e.getFullYear() + "/" + t(o) + "/" + t(n)
		}
		var o = function (t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(require("./log.js"));
		module.exports = {
			wxToast: function (t, e, n) {
				var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1500;
				"zh" === n ? wx.showToast({
					title: t,
					mask: !0,
					icon: "none",
					duration: o
				}) : wx.showToast({
					title: e,
					mask: !0,
					icon: "none",
					duration: o
				})
			},
			wxLoading: function (t, e, n) {
				"zh" === n ? wx.showLoading({
					mask: !0,
					title: t
				}) : wx.showLoading({
					mask: !0,
					title: e
				})
			},
			wxModal: function (t, e, n, o, r) {
				var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "确定",
					a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "取消";
				"zh" === n ? wx.showModal({
					title: "提示",
					content: t,
					confirmText: i,
					cancelText: a,
					success: function (t) {
						t.confirm ? o() : t.cancel && r()
					}
				}) : wx.showModal({
					title: "Prompt",
					content: e,
					confirmText: i,
					cancelText: a,
					success: function (t) {
						t.confirm ? o() : t.cancel && r()
					}
				})
			},
			sleep: function (t) {
				return new Promise(function (e) {
					return setTimeout(function () {
						e("1")
					}, t)
				})
			},
			wxErrToast: function (t, e, n) {
				var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1500;
				o.default.warn(t + ":" + e), wx.showToast({
					title: n,
					icon: "none",
					duration: r
				})
			},
			wxErrorToast: function (t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1500;
				o.default.error(t + ":" + e), n && wx.showToast({
					title: n,
					icon: "none",
					duration: r
				})
			},
			checkHasKey: function (t, e) {
				return !(!t || !t.hasOwnProperty(e))
			},
			isFutureTime: function (t) {
				return (new Date).getTime() <= new Date(t).getTime()
			},
			getFormatDateTime: function (n) {
				var o = n.getHours(),
					r = n.getMinutes(),
					i = n.getSeconds();
				return e(n) + " " + t(o) + ":" + t(r) + ":" + t(i)
			},
			getFormatDate: e,
			adaptAppleDatetime: function (t) {
				return new Date(t.replace(/-/g, "/"))
			},
			getFormatAppleDatetime: function (e) {
				var o = e.getHours(),
					r = e.getMinutes(),
					i = e.getSeconds();
				return n(e) + " " + t(o) + ":" + t(r) + ":" + t(i)
			},
			getFormatAppleDate: n,
			completeDate: t,
			isToday: function (t) {
				return (new Date).toDateString() === new Date(t).toDateString()
			},
			rpxTopx: function (t) {
				return wx.getSystemInfoSync().windowWidth / 750 * Number(t)
			},
			isObject: function (t) {
				return !(!t || "[object Object]" !== Object.prototype.toString.call(t))
			}
		};
	});
	define("components/vant/dist/common/color.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.GRAY_DARK = exports.GRAY = exports.ORANGE = exports.GREEN = exports.WHITE = exports.BLUE = exports.RED = void 0;
		exports.RED = "#ee0a24";
		exports.BLUE = "#1989fa";
		exports.WHITE = "#fff";
		exports.GREEN = "#07c160";
		exports.ORANGE = "#ff976a";
		exports.GRAY = "#323233";
		exports.GRAY_DARK = "#969799";
	});
	define("components/vant/dist/common/component.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e, s, a) {
			return s in e ? Object.defineProperty(e, s, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[s] = a, e
		}

		function s(e, s, a) {
			Object.keys(a).forEach(function (r) {
				e[r] && (s[a[r]] = e[r])
			})
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.VantComponent = function () {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				o = {};
			s(t, o, {
				data: "data",
				props: "properties",
				mixins: "behaviors",
				methods: "methods",
				beforeCreate: "created",
				created: "attached",
				mounted: "ready",
				relations: "relations",
				destroyed: "detached",
				classes: "externalClasses"
			});
			var i = t.relation;
			i && (o.relations = Object.assign(o.relations || {}, e({}, "../".concat(i.name, "/index"), i))), o.externalClasses = o.externalClasses || [], o.externalClasses.push("custom-class"), o.behaviors = o.behaviors || [], o.behaviors.push(a.basic), t.field && o.behaviors.push("wx://form-field"), o.options = {
				multipleSlots: !0,
				addGlobalClass: !0
			}, (0, r.observe)(t, o), Component(o)
		};
		var a = require("./../mixins/basic.js"),
			r = require("./../mixins/observer/index.js");
	});
	define("components/vant/dist/common/utils.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(n) {
			return (t = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function (t) {
				return void 0 === t ? "undefined" : e(t)
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t)
			})(n)
		}

		function n(t) {
			return void 0 !== t && null !== t
		}

		function o(t) {
			return /^\d+(\.\d+)?$/.test(t)
		}
		var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
			return typeof t
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.isDef = n, exports.isObj = function (n) {
			var o = t(n);
			return null !== n && ("object" === o || "function" === o)
		}, exports.isNumber = o, exports.range = function (t, n, o) {
			return Math.min(Math.max(t, n), o)
		}, exports.nextTick = function (t) {
			setTimeout(function () {
				t()
			}, 1e3 / 30)
		}, exports.getSystemInfoSync = function () {
			return null == r && (r = wx.getSystemInfoSync()), r
		}, exports.addUnit = function (t) {
			if (n(t)) return t = String(t), o(t) ? "".concat(t, "px") : t
		};
		var r = null;
	});
	define("components/vant/dist/dialog/dialog.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t() {
			var t = getCurrentPages();
			return t[t.length - 1]
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = [],
			n = function n(o) {
				return o = Object.assign(Object.assign({}, n.currentOptions), o), new Promise(function (n, s) {
					var c = (o.context || t()).selectComponent(o.selector);
					delete o.context, delete o.selector, c ? (c.setData(Object.assign({
						onCancel: s,
						onConfirm: n
					}, o)), e.push(c)) : console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确")
				})
			};
		n.defaultOptions = {
			show: !0,
			title: "",
			width: null,
			message: "",
			zIndex: 100,
			overlay: !0,
			selector: "#van-dialog",
			className: "",
			asyncClose: !1,
			transition: "scale",
			customStyle: "",
			messageAlign: "",
			overlayStyle: "",
			confirmButtonText: "确认",
			cancelButtonText: "取消",
			showConfirmButton: !0,
			showCancelButton: !1,
			closeOnClickOverlay: !1,
			confirmButtonOpenType: ""
		}, n.alert = n, n.confirm = function (t) {
			return n(Object.assign({
				showCancelButton: !0
			}, t))
		}, n.close = function () {
			e.forEach(function (t) {
				t.close()
			}), e = []
		}, n.stopLoading = function () {
			e.forEach(function (t) {
				t.stopLoading()
			})
		}, n.setDefaultOptions = function (t) {
			Object.assign(n.currentOptions, t)
		}, n.resetDefaultOptions = function () {
			n.currentOptions = Object.assign({}, n.defaultOptions)
		}, n.resetDefaultOptions();
		var o = n;
		exports.default = o;
	});
	define("components/vant/dist/mixins/basic.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.basic = void 0;
		var e = Behavior({
			methods: {
				$emit: function () {
					this.triggerEvent.apply(this, arguments)
				},
				getRect: function (e, t) {
					var r = this;
					return new Promise(function (i) {
						wx.createSelectorQuery().in(r)[t ? "selectAll" : "select"](e).boundingClientRect(function (e) {
							t && Array.isArray(e) && e.length && i(e), !t && e && i(e)
						}).exec()
					})
				}
			}
		});
		exports.basic = e;
	});
	define("components/vant/dist/mixins/button.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.button = void 0;
		var e = Behavior({
			externalClasses: ["hover-class"],
			properties: {
				id: String,
				lang: {
					type: String,
					value: "en"
				},
				businessId: Number,
				sessionFrom: String,
				sendMessageTitle: String,
				sendMessagePath: String,
				sendMessageImg: String,
				showMessageCard: Boolean,
				appParameter: String,
				ariaLabel: String
			}
		});
		exports.button = e;
	});
	define("components/vant/dist/mixins/link.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.link = void 0;
		var e = Behavior({
			properties: {
				url: String,
				linkType: {
					type: String,
					value: "navigateTo"
				}
			},
			methods: {
				jumpLink: function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "url",
						t = this.data[e];
					t && wx[this.data.linkType]({
						url: t
					})
				}
			}
		});
		exports.link = e;
	});
	define("components/vant/dist/mixins/observer/behavior.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.behavior = void 0;
		var e = Behavior({
			methods: {
				set: function (e, t) {
					return this.setData(e, t), new Promise(function (e) {
						return wx.nextTick(e)
					})
				}
			}
		});
		exports.behavior = e;
	});
	define("components/vant/dist/mixins/observer/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.observe = function (r, i) {
			var o = r.watch;
			if (i.behaviors.push(e.behavior), o) {
				var t = i.properties || {};
				Object.keys(o).forEach(function (e) {
					if (e in t) {
						var r = t[e];
						null !== r && "type" in r || (r = {
							type: r
						}), r.observer = o[e], t[e] = r
					}
				}), i.properties = t
			}
		};
		var e = require("./behavior.js");
	});
	define("components/vant/dist/mixins/open-type.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.openType = void 0;
		var e = Behavior({
			properties: {
				openType: String
			},
			methods: {
				bindGetUserInfo: function (e) {
					this.$emit("getuserinfo", e.detail)
				},
				bindContact: function (e) {
					this.$emit("contact", e.detail)
				},
				bindGetPhoneNumber: function (e) {
					this.$emit("getphonenumber", e.detail)
				},
				bindError: function (e) {
					this.$emit("error", e.detail)
				},
				bindLaunchApp: function (e) {
					this.$emit("launchapp", e.detail)
				},
				bindOpenSetting: function (e) {
					this.$emit("opensetting", e.detail)
				}
			}
		});
		exports.openType = e;
	});
	define("components/vant/dist/mixins/touch.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, e) {
			return t > e && t > s ? "horizontal" : e > t && e > s ? "vertical" : ""
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.touch = void 0;
		var s = 10,
			e = Behavior({
				methods: {
					resetTouchStatus: function () {
						this.direction = "", this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0
					},
					touchStart: function (t) {
						this.resetTouchStatus();
						var s = t.touches[0];
						this.startX = s.clientX, this.startY = s.clientY
					},
					touchMove: function (s) {
						var e = s.touches[0];
						this.deltaX = e.clientX - this.startX, this.deltaY = e.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), this.offsetY = Math.abs(this.deltaY), this.direction = this.direction || t(this.offsetX, this.offsetY)
					}
				}
			});
		exports.touch = e;
	});
	define("components/vant/dist/mixins/transition.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.transition = void 0;
		var e = require("./../common/utils.js"),
			t = function (e) {
				return {
					enter: "van-".concat(e, "-enter van-").concat(e, "-enter-active enter-class enter-active-class"),
					"enter-to": "van-".concat(e, "-enter-to van-").concat(e, "-enter-active enter-to-class enter-active-class"),
					leave: "van-".concat(e, "-leave van-").concat(e, "-leave-active leave-class leave-active-class"),
					"leave-to": "van-".concat(e, "-leave-to van-").concat(e, "-leave-active leave-to-class leave-active-class")
				}
			},
			n = function () {
				return new Promise(function (e) {
					return setTimeout(e, 1e3 / 30)
				})
			};
		exports.transition = function (a) {
			return Behavior({
				properties: {
					customStyle: String,
					show: {
						type: Boolean,
						value: a,
						observer: "observeShow"
					},
					duration: {
						type: null,
						value: 300,
						observer: "observeDuration"
					},
					name: {
						type: String,
						value: "fade"
					}
				},
				data: {
					type: "",
					inited: !1,
					display: !1
				},
				attached: function () {
					this.data.show && this.enter()
				},
				methods: {
					observeShow: function (e) {
						e ? this.enter() : this.leave()
					},
					enter: function () {
						var a = this,
							s = this.data,
							i = s.duration,
							o = s.name,
							r = t(o),
							c = (0, e.isObj)(i) ? i.enter : i;
						this.status = "enter", this.$emit("before-enter"), Promise.resolve().then(n).then(function () {
							a.checkStatus("enter"), a.$emit("enter"), a.setData({
								inited: !0,
								display: !0,
								classes: r.enter,
								currentDuration: c
							})
						}).then(n).then(function () {
							a.checkStatus("enter"), a.transitionEnded = !1, a.setData({
								classes: r["enter-to"]
							})
						}).catch(function () {})
					},
					leave: function () {
						var a = this;
						if (this.data.display) {
							var s = this.data,
								i = s.duration,
								o = s.name,
								r = t(o),
								c = (0, e.isObj)(i) ? i.leave : i;
							this.status = "leave", this.$emit("before-leave"), Promise.resolve().then(n).then(function () {
								a.checkStatus("leave"), a.$emit("leave"), a.setData({
									classes: r.leave,
									currentDuration: c
								})
							}).then(n).then(function () {
								a.checkStatus("leave"), a.transitionEnded = !1, setTimeout(function () {
									return a.onTransitionEnd()
								}, c), a.setData({
									classes: r["leave-to"]
								})
							}).catch(function () {})
						}
					},
					checkStatus: function (e) {
						if (e !== this.status) throw new Error("incongruent status: ".concat(e))
					},
					onTransitionEnd: function () {
						if (!this.transitionEnded) {
							this.transitionEnded = !0, this.$emit("after-".concat(this.status));
							var e = this.data,
								t = e.show,
								n = e.display;
							!t && n && this.setData({
								display: !1
							})
						}
					}
				}
			})
		};
	});
	define("components/vant/dist/picker/shared.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.pickerProps = void 0;
		var e = {
			title: String,
			loading: Boolean,
			showToolbar: Boolean,
			cancelButtonText: {
				type: String,
				value: "取消"
			},
			confirmButtonText: {
				type: String,
				value: "确认"
			},
			visibleItemCount: {
				type: Number,
				value: 5
			},
			itemHeight: {
				type: Number,
				value: 44
			}
		};
		exports.pickerProps = e;
	});
	define("components/vant/dist/toast/toast.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return (0, s.isObj)(e) ? e : {
				message: e
			}
		}

		function t() {
			var e = getCurrentPages();
			return e[e.length - 1]
		}

		function n(n) {
			var s = Object.assign(Object.assign({}, i), e(n)),
				o = (s.context || t()).selectComponent(s.selector);
			if (o) return delete s.context, delete s.selector, o.clear = function () {
				o.setData({
					show: !1
				}), s.onClose && s.onClose()
			}, r.push(o), o.setData(s), clearTimeout(o.timer), s.duration > 0 && (o.timer = setTimeout(function () {
				o.clear(), r = r.filter(function (e) {
					return e !== o
				})
			}, s.duration)), o;
			console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确")
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var s = require("./../common/utils.js"),
			o = {
				type: "text",
				mask: !1,
				message: "",
				show: !0,
				zIndex: 1e3,
				duration: 2e3,
				position: "middle",
				forbidClick: !1,
				loadingType: "circular",
				selector: "#van-toast"
			},
			r = [],
			i = Object.assign({}, o),
			a = function (t) {
				return function (s) {
					return n(Object.assign({
						type: t
					}, e(s)))
				}
			};
		n.loading = a("loading"), n.success = a("success"), n.fail = a("fail"), n.clear = function () {
			r.forEach(function (e) {
				e.clear()
			}), r = []
		}, n.setDefaultOptions = function (e) {
			Object.assign(i, e)
		}, n.resetDefaultOptions = function () {
			i = Object.assign({}, o)
		};
		var c = n;
		exports.default = c;
	});
	define("components/vant/dist/uploader/utils.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return t.some(function (t) {
				return -1 !== e.indexOf(".".concat(t))
			})
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.isImageUrl = e, exports.isImageFile = function (t) {
			return t.type ? 0 === t.type.indexOf("image") : t.path ? e(t.path) : !!t.url && e(t.url)
		};
		var t = ["jpeg", "jpg", "gif", "png", "svg"];
	});
	define("components/vant/mp-html/parser.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			for (var i = Object.create(null), s = t.split(","), e = s.length; e--;) i[s[e]] = !0;
			return i
		}

		function i(t, i) {
			for (var s = t.indexOf("&"); - 1 != s;) {
				var e = t.indexOf(";", s + 3),
					n = void 0;
				if (-1 == e) break;
				"#" == t[s + 1] ? (n = parseInt(("x" == t[s + 2] ? "0" : "") + t.substring(s + 2, e)), isNaN(n) || (t = t.substr(0, s) + String.fromCharCode(n) + t.substr(e + 1))) : (n = t.substring(s + 1, e), (a.entities[n] || "amp" == n && i) && (t = t.substr(0, s) + (a.entities[n] || "&") + t.substr(e + 1))), s = t.indexOf("&", s + 1)
			}
			return t
		}

		function s(t) {
			this.options = t.data || {}, this.tagStyle = Object.assign(a.tagStyle, this.options.tagStyle), this.imgList = t.imgList || [], this.plugins = t.plugins || [], this.attrs = Object.create(null), this.stack = [], this.nodes = []
		}

		function e(t) {
			this.handler = t
		}
		var a = {
				trustTags: t("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
				blockTags: t("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
				ignoreTags: t("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
				voidTags: t("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
				entities: {
					lt: "<",
					gt: ">",
					quot: '"',
					apos: "'",
					ensp: " ",
					emsp: " ",
					nbsp: " ",
					semi: ";",
					ndash: "–",
					mdash: "—",
					middot: "·",
					lsquo: "‘",
					rsquo: "’",
					ldquo: "“",
					rdquo: "”",
					bull: "•",
					hellip: "…"
				},
				tagStyle: {
					address: "font-style:italic",
					big: "display:inline;font-size:1.2em",
					caption: "display:table-caption;text-align:center",
					center: "text-align:center",
					cite: "font-style:italic",
					dd: "margin-left:40px",
					mark: "background-color:yellow",
					pre: "font-family:monospace;white-space:pre",
					s: "text-decoration:line-through",
					small: "display:inline;font-size:0.8em",
					strike: "text-decoration:line-through",
					u: "text-decoration:underline"
				}
			},
			n = {},
			r = wx.getSystemInfoSync(),
			h = r.windowWidth,
			o = r.system,
			l = t(" ,\r,\n,\t,\f"),
			c = 0;
		s.prototype.parse = function (t) {
			for (var i = this.plugins.length; i--;) this.plugins[i].onUpdate && (t = this.plugins[i].onUpdate(t, a) || t);
			for (new e(this).parse(t); this.stack.length;) this.popNode();
			return this.nodes
		}, s.prototype.expose = function () {
			for (var t = this.stack.length; t--;) {
				var i = this.stack[t];
				if ("a" == i.name || i.c) return;
				i.c = 1
			}
		}, s.prototype.hook = function (t) {
			for (var i = this.plugins.length; i--;)
				if (this.plugins[i].onParse && 0 == this.plugins[i].onParse(t, this)) return !1;
			return !0
		}, s.prototype.getUrl = function (t) {
			var i = this.options.domain;
			return "/" == t[0] ? "/" == t[1] ? t = (i ? i.split("://")[0] : "http") + ":" + t : i && (t = i + t) : !i || t.includes("data:") || t.includes("://") || (t = i + "/" + t), t
		}, s.prototype.parseStyle = function (t) {
			var i = t.attrs,
				s = (this.tagStyle[t.name] || "").split(";").concat((i.style || "").split(";")),
				e = {},
				a = "";
			i.id && (this.options.useAnchor ? this.expose() : "img" != t.name && "a" != t.name && "video" != t.name && "audio" != t.name && (i.id = void 0)), i.width && (e.width = parseFloat(i.width) + (i.width.includes("%") ? "%" : "px"), i.width = void 0), i.height && (e.height = parseFloat(i.height) + (i.height.includes("%") ? "%" : "px"), i.height = void 0);
			for (var n = 0, r = s.length; n < r; n++) {
				var o = s[n].split(":");
				if (!(o.length < 2)) {
					var c = o.shift().trim().toLowerCase(),
						d = o.join(":").trim();
					if ("-" == d[0] && d.lastIndexOf("-") > 0 || d.includes("safe")) a += ";".concat(c, ":").concat(d);
					else if (!e[c] || d.includes("import") || !e[c].includes("import")) {
						if (d.includes("url")) {
							var p = d.indexOf("(") + 1;
							if (p) {
								for (;
									'"' == d[p] || "'" == d[p] || l[d[p]];) p++;
								d = d.substr(0, p) + this.getUrl(d.substr(p))
							}
						} else d.includes("rpx") && (d = d.replace(/[0-9.]+\s*rpx/g, function (t) {
							return parseFloat(t) * h / 750 + "px"
						}));
						e[c] = d
					}
				}
			}
			return t.attrs.style = a, e
		}, s.prototype.onTagName = function (t) {
			this.tagName = this.xml ? t : t.toLowerCase(), "svg" == this.tagName && (this.xml = !0)
		}, s.prototype.onAttrName = function (t) {
			"data-" == (t = this.xml ? t : t.toLowerCase()).substr(0, 5) ? "data-src" != t || this.attrs.src ? "img" == this.tagName || "a" == this.tagName ? this.attrName = t : this.attrName = void 0 : this.attrName = "src" : (this.attrName = t, this.attrs[t] = "T")
		}, s.prototype.onAttrVal = function (t) {
			var s = this.attrName || "";
			"style" == s || "href" == s ? this.attrs[s] = i(t, !0) : s.includes("src") ? this.attrs[s] = this.getUrl(i(t, !0)) : s && (this.attrs[s] = t)
		}, s.prototype.onOpenTag = function (t) {
			var i = Object.create(null);
			i.name = this.tagName, i.attrs = this.attrs, this.attrs = Object.create(null);
			var s = i.attrs,
				e = this.stack[this.stack.length - 1],
				r = e ? e.children : this.nodes,
				o = this.xml ? t : a.voidTags[i.name];
			if (n[i.name] && (s.class = n[i.name] + (s.class ? " " + s.class : "")), "embed" == i.name) {
				var l = s.src || "";
				l.includes(".mp4") || l.includes(".3gp") || l.includes(".m3u8") || (s.type || "").includes("video") ? i.name = "video" : (l.includes(".mp3") || l.includes(".wav") || l.includes(".aac") || l.includes(".m4a") || (s.type || "").includes("audio")) && (i.name = "audio"), s.autostart && (s.autoplay = "T"), s.controls = "T"
			}
			if ("video" != i.name && "audio" != i.name || ("video" != i.name || s.id || (s.id = "v" + c++), s.controls || s.autoplay || (s.controls = "T"), i.src = [], s.src && (i.src.push(s.src), s.src = void 0), this.expose()), o) {
				if (!this.hook(i) || a.ignoreTags[i.name]) return void("base" != i.name || this.options.domain ? "source" == i.name && e && ("video" == e.name || "audio" == e.name) && s.src && e.src.push(s.src) : this.options.domain = s.href);
				var d = this.parseStyle(i);
				if ("img" == i.name) {
					if (s.src && (s.src.includes("webp") && (i.webp = "T"), s.src.includes("data:") && !s["original-src"] && (s.ignore = "T"), !s.ignore || i.webp || s.src.includes("cloud://"))) {
						for (var p = this.stack.length; p--;) {
							var u = this.stack[p];
							if ("a" == u.name) {
								i.a = u.attrs;
								break
							}
							var g = u.attrs.style || "";
							if (!g.includes("flex:") || g.includes("flex:0") || g.includes("flex: 0") || d.width && d.width.includes("%"))
								if (g.includes("flex") && "100%" == d.width)
									for (var f = p + 1; f < this.stack.length; f++) {
										var m = this.stack[f].attrs.style || "";
										if (!m.includes(";width") && !m.includes(" width") && 0 != m.indexOf("width")) {
											d.width = "";
											break
										}
									} else g.includes("inline-block") && (d.width && "%" == d.width[d.width.length - 1] ? (u.attrs.style += ";max-width:" + d.width, d.width = "") : u.attrs.style += ";max-width:100%");
								else {
									d.width = "100% !important", d.height = "";
									for (var v = p + 1; v < this.stack.length; v++) this.stack[v].attrs.style = (this.stack[v].attrs.style || "").replace("inline-", "")
								} u.c = 1
						}
						i.i = this.imgList.length;
						var y = s["original-src"] || s.src;
						if (this.imgList.includes(y)) {
							var x = y.indexOf("://");
							if (-1 != x) {
								x += 3;
								for (var b = y.substr(0, x); x < y.length && "/" != y[x]; x++) b += Math.random() > .5 ? y[x].toUpperCase() : y[x];
								y = b += y.substr(x)
							}
						}
						this.imgList.push(y)
					}
					"inline" == d.display && (d.display = ""), s.ignore && (d["max-width"] = d["max-width"] || "100%", s.style += ";-webkit-touch-callout:none"), parseInt(d.width) > h && (d.height = void 0), d.width && (d.width.includes("auto") ? d.width = "" : (i.w = "T", d.height && !d.height.includes("auto") && (i.h = "T")))
				} else if ("svg" == i.name) return r.push(i), this.stack.push(i), void this.popNode();
				for (var w in d) d[w] && (s.style += ";".concat(w, ":").concat(d[w].replace(" !important", "")));
				s.style = s.style.substr(1) || void 0
			} else("pre" == i.name || (s.style || "").includes("white-space") && s.style.includes("pre")) && (this.pre = i.pre = !0), i.children = [], this.stack.push(i);
			r.push(i)
		}, s.prototype.onCloseTag = function (t) {
			t = this.xml ? t : t.toLowerCase();
			var i;
			for (i = this.stack.length; i-- && this.stack[i].name != t;);
			if (-1 != i)
				for (; this.stack.length > i;) this.popNode();
			else "p" != t && "br" != t || (this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push({
				name: t,
				attrs: {}
			})
		}, s.prototype.popNode = function () {
			var t = this.stack.pop(),
				i = t.attrs,
				s = t.children,
				e = this.stack[this.stack.length - 1],
				n = e ? e.children : this.nodes;
			if (!this.hook(t) || a.ignoreTags[t.name]) return "title" == t.name && s.length && "text" == s[0].type && this.options.setTitle && wx.setNavigationBarTitle({
				title: s[0].text
			}), void n.pop();
			if (t.pre) {
				t.pre = this.pre = void 0;
				for (var r = this.stack.length; r--;) this.stack[r].pre && (this.pre = !0)
			}
			if ("svg" == t.name) {
				var o = "",
					l = i.style;
				return i.style = "", i.viewbox && (i.viewBox = i.viewbox), i.xmlns = "http://www.w3.org/2000/svg",
					function t(i) {
						o += "<" + i.name;
						for (var s in i.attrs) {
							var e = i.attrs[s];
							e && (o += " ".concat(s, '="').concat(e, '"'))
						}
						if (i.children) {
							o += ">";
							for (var a = 0; a < i.children.length; a++) t(i.children[a]);
							o += "</" + i.name + ">"
						} else o += "/>"
					}(t), t.name = "img", t.attrs = {
						src: "data:image/svg+xml;utf8," + o.replace(/#/g, "%23"),
						style: l,
						ignore: "T"
					}, t.children = void 0, void(this.xml = !1)
			}
			var c = {};
			if (i.align && ("table" == t.name ? "center" == i.align ? c["margin-inline-start"] = c["margin-inline-end"] = "auto" : c.float = i.align : c["text-align"] = i.align, i.align = void 0), "font" == t.name && (i.color && (c.color = i.color, i.color = void 0), i.face && (c["font-family"] = i.face, i.face = void 0), i.size)) {
				var d = parseInt(i.size);
				isNaN(d) || (d < 1 ? d = 1 : d > 7 && (d = 7), c["font-size"] = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"][d - 1]), i.size = void 0
			}
			if ((i.class || "").includes("align-center") && (c["text-align"] = "center"), Object.assign(c, this.parseStyle(t)), parseInt(c.width) > h && (c["max-width"] = "100%", c["box-sizing"] = "border-box"), a.blockTags[t.name]) t.name = "div";
			else if (a.trustTags[t.name] || this.xml)
				if ("a" == t.name || "ad" == t.name) this.expose();
				else if ("video" == t.name || "audio" == t.name) t.children = void 0;
			else if ("ul" != t.name && "ol" != t.name || !t.c) {
				if ("table" == t.name) {
					var p = parseFloat(i.cellpadding),
						u = parseFloat(i.cellspacing),
						g = parseFloat(i.border);
					if (t.c && (isNaN(p) && (p = 2), isNaN(u) && (u = 2)), g && (i.style += ";border:" + g + "px solid gray"), t.flag && t.c) {
						t.flag = void 0, c.display = "grid", u ? (c["grid-gap"] = u + "px", c.padding = u + "px") : g && (i.style += ";border-left:0;border-top:0");
						var f = [],
							m = [],
							v = [],
							y = {};
						! function t(i) {
							for (var s = 0; s < i.length; s++) "tr" == i[s].name ? m.push(i[s]) : t(i[s].children || [])
						}(s);
						for (var x = 1; x <= m.length; x++) {
							for (var b = 1, w = 0; w < m[x - 1].children.length; w++, b++) {
								var k = m[x - 1].children[w];
								if ("td" == k.name || "th" == k.name) {
									for (; y[x + "." + b];) b++;
									k.c = 1;
									var N = k.attrs.style || "",
										T = N.indexOf("width") ? N.indexOf(";width") : 0;
									if (-1 != T) {
										var O = N.indexOf(";", T + 6); - 1 == O && (O = N.length), k.attrs.colspan || (f[b] = N.substring(T ? T + 7 : 6, O)), N = N.substr(0, T) + N.substr(O)
									}
									if (N += (g ? ";border:".concat(g, "px solid gray") + (u ? "" : ";border-right:0;border-bottom:0") : "") + (p ? ";padding:".concat(p, "px") : ""), k.attrs.colspan && (N += ";grid-column-start:".concat(b, ";grid-column-end:").concat(b + parseInt(k.attrs.colspan)), k.attrs.rowspan || (N += ";grid-row-start:".concat(x, ";grid-row-end:").concat(x + 1)), b += parseInt(k.attrs.colspan) - 1), k.attrs.rowspan) {
										N += ";grid-row-start:".concat(x, ";grid-row-end:").concat(x + parseInt(k.attrs.rowspan)), k.attrs.colspan || (N += ";grid-column-start:".concat(b, ";grid-column-end:").concat(b + 1));
										for (var C = 1; C < k.attrs.rowspan; C++) y[x + C + "." + b] = 1
									}
									N && (k.attrs.style = N), v.push(k)
								}
							}
							if (1 == x) {
								for (var S = "", A = 1; A < b; A++) S += (f[A] ? f[A] : "auto") + " ";
								c["grid-template-columns"] = S
							}
						}
						t.children = v
					} else t.c && (c.display = "table"), isNaN(u) || (c["border-spacing"] = u + "px"), (g || p || t.c) && function i(s) {
						for (var e = 0; e < s.length; e++) {
							var a = s[e];
							t.c && (a.c = 1), "th" == a.name || "td" == a.name ? (g && (a.attrs.style = "border:".concat(g, "px solid gray;").concat(a.attrs.style || "")), p && (a.attrs.style = "padding:".concat(p, "px;").concat(a.attrs.style || ""))) : a.children && i(a.children)
						}
					}(s);
					if (this.options.scrollTable && !(i.style || "").includes("inline")) {
						var z = Object.assign({}, t);
						t.name = "div", t.attrs = {
							style: "overflow-x:auto;padding:1px"
						}, t.children = [z], i = z.attrs
					}
				} else if ("td" != t.name && "th" != t.name || !i.colspan && !i.rowspan) {
					if ("ruby" == t.name) {
						t.name = "span";
						for (var I = 0; I < s.length - 1; I++) "text" == s[I].type && "rt" == s[I + 1].name && (s[I] = {
							name: "span",
							attrs: {
								style: "display:inline-block"
							},
							children: [{
								name: "div",
								attrs: {
									style: "font-size:50%;text-align:start"
								},
								children: s[I + 1].children
							}, s[I]]
						}, s.splice(I + 1, 1))
					}
				} else
					for (var j = this.stack.length; j--;)
						if ("table" == this.stack[j].name) {
							this.stack[j].flag = 1;
							break
						}
			} else {
				var L = {
					a: "lower-alpha",
					A: "upper-alpha",
					i: "lower-roman",
					I: "upper-roman"
				};
				L[i.type] && (i.style += ";list-style-type:" + L[i.type], i.type = void 0), t.c = 1;
				for (var q = s.length; q--;) "li" == s[q].name && (s[q].c = 1)
			} else t.name = "span";
			if ((c.display || "").includes("flex") && !t.c)
				for (var F = s.length; F--;) {
					var U = s[F];
					U.f && (U.attrs.style = (U.attrs.style || "") + U.f, U.f = void 0)
				}
			var V = e && (e.attrs.style || "").includes("flex") && !t.c && !(c.display || "").includes("inline");
			V && (t.f = ";max-width:100%");
			for (var B in c)
				if (c[B]) {
					var P = ";".concat(B, ":").concat(c[B].replace(" !important", ""));
					V && (B.includes("flex") && "flex-direction" != B || "align-self" == B || "-" == c[B][0] || "width" == B && P.includes("%")) ? (t.f += P, "width" == B && (i.style += ";width:100%")) : i.style += P
				} i.style = i.style.substr(1) || void 0
		}, s.prototype.onText = function (t) {
			if (!this.pre) {
				for (var s, e = "", a = 0, n = t.length; a < n; a++) l[t[a]] ? (" " != e[e.length - 1] && (e += " "), "\n" != t[a] || s || (s = !0)) : e += t[a];
				if (" " == e && s) return;
				t = e
			}
			var r = Object.create(null);
			r.type = "text", r.text = i(t), this.hook(r) && ("force" == this.options.selectable && o.includes("iOS") && (this.expose(), r.us = "T"), (this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push(r))
		}, e.prototype.parse = function (t) {
			this.content = t || "", this.i = 0, this.start = 0, this.state = this.text;
			for (var i = this.content.length; - 1 != this.i && this.i < i;) this.state()
		}, e.prototype.checkClose = function (t) {
			var i = "/" == this.content[this.i];
			return !!(">" == this.content[this.i] || i && ">" == this.content[this.i + 1]) && (t && this.handler[t](this.content.substring(this.start, this.i)), this.i += i ? 2 : 1, this.start = this.i, this.handler.onOpenTag(i), "script" == this.handler.tagName ? (this.i = this.content.indexOf("</", this.i), -1 != this.i && (this.i += 2, this.start = this.i), this.state = this.endTag) : this.state = this.text, !0)
		}, e.prototype.text = function () {
			if (this.i = this.content.indexOf("<", this.i), -1 != this.i) {
				var t = this.content[this.i + 1];
				if (t >= "a" && t <= "z" || t >= "A" && t <= "Z") this.start != this.i && this.handler.onText(this.content.substring(this.start, this.i)), this.start = ++this.i, this.state = this.tagName;
				else if ("/" == t || "!" == t || "?" == t) {
					this.start != this.i && this.handler.onText(this.content.substring(this.start, this.i));
					var i = this.content[this.i + 2];
					if ("/" == t && (i >= "a" && i <= "z" || i >= "A" && i <= "Z")) return this.i += 2, this.start = this.i, this.state = this.endTag;
					var s = "--\x3e";
					"!" == t && "-" == this.content[this.i + 2] && "-" == this.content[this.i + 3] || (s = ">"), this.i = this.content.indexOf(s, this.i), -1 != this.i && (this.i += s.length, this.start = this.i)
				} else this.i++
			} else this.start < this.content.length && this.handler.onText(this.content.substring(this.start, this.content.length))
		}, e.prototype.tagName = function () {
			if (l[this.content[this.i]]) {
				for (this.handler.onTagName(this.content.substring(this.start, this.i)); l[this.content[++this.i]];);
				this.i < this.content.length && !this.checkClose() && (this.start = this.i, this.state = this.attrName)
			} else this.checkClose("onTagName") || this.i++
		}, e.prototype.attrName = function () {
			var t = this.content[this.i];
			if (l[t] || "=" == t) {
				this.handler.onAttrName(this.content.substring(this.start, this.i));
				for (var i = "=" == t, s = this.content.length; ++this.i < s;)
					if (t = this.content[this.i], !l[t]) {
						if (this.checkClose()) return;
						if (i) return this.start = this.i, this.state = this.attrVal;
						if ("=" != this.content[this.i]) return this.start = this.i, this.state = this.attrName;
						i = !0
					}
			} else this.checkClose("onAttrName") || this.i++
		}, e.prototype.attrVal = function () {
			var t = this.content[this.i],
				i = this.content.length;
			if ('"' == t || "'" == t) {
				if (this.start = ++this.i, this.i = this.content.indexOf(t, this.i), -1 == this.i) return;
				this.handler.onAttrVal(this.content.substring(this.start, this.i))
			} else
				for (; this.i < i; this.i++) {
					if (l[this.content[this.i]]) {
						this.handler.onAttrVal(this.content.substring(this.start, this.i));
						break
					}
					if (this.checkClose("onAttrVal")) return
				}
			for (; l[this.content[++this.i]];);
			this.i < i && !this.checkClose() && (this.start = this.i, this.state = this.attrName)
		}, e.prototype.endTag = function () {
			var t = this.content[this.i];
			if (l[t] || ">" == t || "/" == t) {
				if (this.handler.onCloseTag(this.content.substring(this.start, this.i)), ">" != t && (this.i = this.content.indexOf(">", this.i), -1 == this.i)) return;
				this.start = ++this.i, this.state = this.text
			} else this.i++
		}, module.exports = s;
	});
	define("mixins/common.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var t = e(require("./../store/index.js")),
			a = e(require("./../common/utils.js")),
			n = e(require("./questionnaire.js")),
			i = (e(require("./../common/api.js")), {
				data: {},
				methods: {
					doCheckHasQuestionnaireAndSubmit: function (e) {
						return new Promise(function (t) {
							n.default.methods.doCheckQuestionnaire(e).then(function (e) {
								t(e)
							})
						})
					},
					doCheckNativeAndNotInChina: function () {
						return !0
					},
					doCheckActivationAndVaccinationInfo: function () {
						var e = this;
						return new Promise(function (t) {
							e.isExistActivation(e.language).then(function () {
								e.isExistVaccinationInfo(e.language).then(function (e) {
									t(a.default.checkHasKey(e, "autoid") ? !0 : !1)
								})
							})
						})
					},
					doCheckActivationAndLeaveInfo: function () {
						var e = this;
						return new Promise(function (t) {
							e.isExistActivation(e.language).then(function () {
								e.isExistLeaveInfo(e.language).then(function (e) {
									t(a.default.checkHasKey(e, "autoid") ? !0 : !1)
								})
							})
						})
					},
					doCloudCheckBeforeApplyAppealReturnCode: function () {
						var e = this;
						return new Promise(function (n) {
							e.isExistActivation(e.language).then(function () {
								e.isExistTodayReport(e.language).then(function () {
									var i = t.default.state.returnSchool.nextApplyRequestAvailableTime;
									if (console.log("nextRequestAvailableTime", i), null !== i && a.default.isFutureTime(i)) {
										var o = t.default.state.returnSchool.applyInfo;
										return n(o)
									}
									e.isExistApplyInfo().then(function (t) {
										var a = (new Date).getTime() + 5e3;
										e.setApplyInfo(t), e.setNextApplyRequestAvailableTime(a), n(t)
									})
								})
							})
						})
					},
					doCheckApplyInfo: function (e) {
						var t = this;
						return new Promise(function (n) {
							var i = new Date(a.default.adaptAppleDatetime(e.expireDatetime)).getTime();
							console.log("applyInfo.expireDatetime", e.expireDatetime), a.default.isFutureTime(i) ? null === e.planJxDatetime ? n("No planJxDatetime") : isNaN(e.planJxDatetime) && !isNaN(Date.parse(a.default.adaptAppleDatetime(e.planJxDatetime))) && !0 !== e.statusIsaccepted ? n("Has planJxDatetime") : isNaN(e.planJxDatetime) && !isNaN(Date.parse(a.default.adaptAppleDatetime(e.planJxDatetime))) && !0 === e.statusIsaccepted ? n("Accept") : (a.default.wxErrorToast("doCloudCheckBeforeApply", "unknown failed"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t.language, 2e3)) : a.default.wxToast("您的申请已过期", "Your application has expired", t.language, 2e3)
						})
					},
					doCloudCheckRiskInfo: function () {
						var e = this,
							n = this;
						return new Promise(function (i) {
							var o = t.default.state.returnSchool.nextDailyReportRequestAvailableTime;
							if (null !== o && a.default.isFutureTime(o)) {
								var u = t.default.state.student.riskInfo;
								if (a.default.checkHasKey(u, "riskTotal")) return e.doJxCampusCalculation(u), void i(u)
							}
							n.doMakeRiskList(n.language).then(function (t) {
								n.setRiskInfo(t);
								var o = (new Date).getTime() + 5e3;
								a.default.isToday(o) && n.setNextDailyReportRequestAvailableTime(o), e.doJxCampusCalculation(t), i(t)
							})
						})
					},
					doCheckHasAppealChangeRisk: function (e) {
						return a.default.checkHasKey(e, "riskDescription") ? e.riskType >= 2 ? 0 : 1 === e.riskType ? 1 : -1 : 0
					},
					doCheckAppealWithRisk: function () {
						var e = this;
						return new Promise(function (t) {
							e.doCloudCheckRiskInfo().then(function (n) {
								e.isExistAppealInfo(e.language).then(function (i) {
									if (console.log("appealInfo", i), a.default.checkHasKey(n.riskTotal, "riskDescription"))
										if (console.log("2ji", i), i) {
											if ("0" === i.replyResult) return t();
											if ("0" === i.furtherreplyResult) return t();
											if ("1" === i.furtherreplyResult) return t();
											wx.navigateTo({
												url: "/pages/returnSchool/appealDetail"
											})
										} else wx.reLaunch({
											url: "/pages/returnSchool/appeal"
										});
									else i ? wx.navigateTo({
										url: "/pages/returnSchool/appealDetail"
									}) : a.default.wxToast("记录良好，无需风险核销", "Not Needed", e.language)
								})
							})
						})
					},
					doCheckJxCampusWithRisk: function () {
						var e = this;
						return new Promise(function (t) {
							e.doCloudCheckRiskInfo().then(function (n) {
								console.log("riskInfo", n);
								var i = e.doJxCampusCalculation(n);
								console.log("JxCampusList", i), e.isExistApplyInfo().then(function (o) {
									var u = new Date(a.default.adaptAppleDatetime(o.planJxDatetime)).getTime() - 2556e5;
									if (i[0].indexOf(o.planJxCampus) >= 0)
										if (a.default.checkHasKey(n.riskTotal, "riskDescription"))
											if (1 === n.riskTotal.riskType) a.default.wxToast("您有新的风险记录，请先完成风险核销", "您有新的风险记录，请先完成风险核销", e.language, 3e3);
											else {
												if (!(n.riskTotal.riskType >= 2)) return void a.default.wxToast("数据错误，请尝试清除缓存后重启小程序", "数据错误，请尝试清除缓存后重启小程序", e.language);
												if (a.default.isFutureTime(u)) return void a.default.wxToast(" 您已获得进校资格，进校码将在到校日期前48小时内生成", "您已获得进校资格，进校码将在到校日期前48小时内生成", e.language, 3e3);
												wx.redirectTo({
													url: "/pages/returnSchool/returnCode?ybg=1"
												})
											}
									else {
										if (a.default.isFutureTime(u)) return void a.default.wxToast(" 您已获得进校资格，进校码将在到校日期前48小时内生成", "您已获得进校资格，进校码将在到校日期前48小时内生成", e.language, 3e3);
										wx.redirectTo({
											url: "/pages/returnSchool/returnCode"
										})
									} else a.default.checkHasKey(n.riskTotal, "riskDescription") ? (1 === n.riskTotal.riskType ? a.default.wxToast("您的进校风险评估结果已变更，经风险销核后可正常入校", "您的进校风险评估结果已变更，经风险销核后可正常入校", e.language) : a.default.wxModal("您的进校风险评估结果已变更，请重选进校点", "您的进校风险评估结果已变更，请重选进校点", e.language, function () {
										wx.redirectTo({
											url: "/pages/returnSchool/returnCodeChange?ybg=1"
										})
									}, function () {}, "更改校区"), t()) : a.default.wxModal("您的进校风险评估结果已变更，请重选进校点", "您的进校风险评估结果已变更，请重选进校点", e.language, function () {
										wx.redirectTo({
											url: "/pages/returnSchool/returnCodeChange?ybg=1"
										})
									}, function () {}, "更改校区")
								})
							})
						})
					}
				}
			});
		exports.default = i;
	});
	define("mixins/exist.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var t = e(require("./../common/httpUtils.js")),
			a = e(require("./../common/utils.js")),
			i = e(require("./../common/api.js")),
			o = e(require("./../store/index.js")),
			s = {
				data: {
					activation: !0
				},
				methods: {
					isExistQuestionnaire: function (e) {
						return new Promise(function (t) {
							i.default.cloudGetQuestionnaireDefine(e).then(function (a) {
								a.length > 0 ? i.default.cloudGetQuestionnaireFinish(e).then(function (e) {
									t(!0 === e ? {
										res: e,
										qArray: a
									} : a)
								}) : t(!1)
							})
						})
					},
					isExistVaccinationInfo: function (e) {
						var t = this;
						return new Promise(function (s) {
							if (!a.default.isFutureTime("2021/02/01")) {
								var n = o.default.state.vaccination.nextVaccinationRequestAvailableTime;
								if (null !== n && (n -= 108e5, a.default.isFutureTime(n))) {
									var l = o.default.state.vaccination.vaccinationInfo;
									return void s(l)
								}
							}
							i.default.cloudGetVaccinationInfo(e).then(function (i) {
								!1 === i ? (t.setVaccinationInfo(null), s(!1)) : a.default.checkHasKey(i, "autoid") ? null !== i.autoid ? (t.setVaccinationInfo(i), t.setVaccinationRequestAvailableTime((new Date).getTime() + 72e5), s(i)) : s(!1) : (a.default.wxErrorToast("isExistVaccinationInfo", "NULL isExistVaccinationInfo"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3))
							})
						})
					},
					isExistLeaveInfo: function (e) {
						var t = this;
						return new Promise(function (s) {
							if (!a.default.isFutureTime("2021/01/20")) {
								var n = o.default.state.leaveSchool.nextLeaveInfoRequestAvailableTime;
								if (null !== n && a.default.isFutureTime(n)) {
									var l = o.default.state.leaveSchool.leaveInfo;
									return void s(l)
								}
							}
							i.default.cloudGetVacationLeaveInfo(e).then(function (i) {
								!1 === i ? (t.setLeaveInfo(null), s(!1)) : a.default.checkHasKey(i, "autoid") ? null !== i.autoid ? (t.setLeaveInfo(i), t.setNextLeaveInfoRequestAvailableTime((new Date).getTime() + 432e5), s(i)) : s(!1) : (a.default.wxErrorToast("isExistLeaveInfo", "NULL isExistLeaveInfo"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3))
							})
						})
					},
					isExistActivation: function (e) {
						var t = this;
						return new Promise(function (s) {
							var n = o.default.state.student.nextActivationRequestAvailableTime;
							if (null !== n && a.default.isFutureTime(n)) {
								if (!0 === o.default.state.student.isHasActivation) return void s();
								t.setNextActivationRequestAvailableTime((new Date).getTime()), a.default.wxErrorToast("isExistActivation", "NULL isExistActivation"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3)
							}
							i.default.cloudCheckActivation(e).then(function (i) {
								if (!0 === i) {
									t.setHasActivation(!0);
									var o = (new Date).getTime() + 12e5;
									a.default.isToday(o) && t.setNextActivationRequestAvailableTime(o), s()
								} else !1 === i ? a.default.wxToast("您的账户尚未激活，请联系辅导员", "Your account has not been activated, please contact the counselor", e) : a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3)
							})
						})
					},
					isExistTodayReport: function (e) {
						var t = this;
						return new Promise(function (s) {
							var n = o.default.state.student.nextTodayReportRequestAvailableTime;
							if (console.log("TodayReportNextRequestAvailableTime", n), null !== n && a.default.isFutureTime(n)) {
								if (!0 === o.default.state.student.isHasTodayReport) return void s();
								!1 === o.default.state.student.isHasTodayReport ? (t.setNextTodayReportRequestAvailableTime((new Date).getTime()), a.default.wxToast("请先完成今日健康上报", "Please complete today's health report first", e, 2e3)) : (t.setNextTodayReportRequestAvailableTime((new Date).getTime()), a.default.wxErrorToast("isNeedDailyReport", "NULL isReport Data"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3))
							}
							i.default.cloudCheckTodayReport(e).then(function (i) {
								if (!0 === i) {
									t.setHasTodayReport(!0);
									var o = (new Date).getTime() + 864e5,
										n = a.default.getFormatDate(new Date(o)),
										l = new Date(n).getTime() - 3e5 - 288e5;
									a.default.isToday(l) && t.setNextTodayReportRequestAvailableTime(l), s()
								} else !1 === i ? a.default.wxToast("请先完成今日健康上报", "Please complete today's health report first", e, 2e3) : (a.default.wxErrorToast("isNeedDailyReport", "NULL isReport Data"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3))
							})
						})
					},
					isExistApplyInfo: function (e) {
						return new Promise(function (t) {
							i.default.cloudGetApplyInfo(e).then(function (i) {
								console.log("applyRecord", i), "" !== i.jxaId ? t(i) : "" === i.jxaId ? (a.default.wxErrorToast("isExitApplyRecord", "NULL jxaId Data"), a.default.wxToast("您暂无返校资格", "You do not have permission to go back to school", e, 2e3)) : (a.default.wxErrorToast("isExitApplyRecord", "Unexpected"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3))
							})
						})
					},
					isExistAppealInfo: function (e) {
						var t = this;
						return new Promise(function (s) {
							var n = o.default.state.returnSchool.nextAppealRequestAvailableTime;
							if (console.log("appealNextRequestAvailableTime", n), null !== n && a.default.isFutureTime(n)) {
								var l = o.default.state.returnSchool.appealInfo;
								s(l)
							} else i.default.cloudGetAppealInfo(e).then(function (i) {
								if (i)
									if (a.default.checkHasKey(i, "autoid"))
										if ("" === i.autoid) a.default.wxErrorToast("isExistAppealInfo", "Unexpected autoid NULL data "), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
										else {
											t.setAppealInfo(i);
											var o = (new Date).getTime() + 5e3;
											t.setNextAppealRequestAvailableTime(o), s(i)
										}
								else a.default.wxErrorToast("isExistAppealInfo", "Unexpected appealInfo"), a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", e, 2e3);
								else {
									t.setAppealInfo(i);
									var n = (new Date).getTime() + 5e3;
									t.setNextAppealRequestAvailableTime(n), s(i)
								}
							})
						})
					},
					doCheckExistActivationAndDailyReportForDailyReportRouting: function () {
						var e = this;
						t.default.get("/api/school_tjxsfw_student/tblStudentUsers/isActivated", e.getParams, function (i) {
							console.log("activated", i), 200 === i.code ? (e.activation = i.data, t.default.get("/api/school_tjxsfw_student/yqfkLogDailyreport/hasDoneToday", e.getParams, function (e) {
								console.log(e), 200 === e.code && (e.data ? wx.redirectTo({
									url: "/pages/dailyReport/complete"
								}) : wx.reLaunch({
									url: "/pages/dailyReport/normal"
								}))
							})) : a.default.wxToast("您的账户尚未激活，请联系辅导员", "Your account has not been activated, please contact the counselor", e.language)
						})
					},
					isExistActivationWithParam: function (e, a) {
						var i = this;
						t.default.get("/api/school_tjxsfw_student/tblStudentUsers/isActivated", i.getParams, function (t) {
							console.log("activated", t), 200 === t.code && (i.activation = t.data, e(a))
						})
					}
				}
			};
		exports.default = s;
	});
	define("mixins/leaveSchool.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		e(require("./../common/httpUtils.js"));
		var t = e(require("./../store/index.js")),
			i = e(require("./../common/api.js")),
			s = e(require("./../common/utils.js")),
			n = (e(require("./exist.js")), {
				data: {
					isHasSubmitted: null
				},
				methods: {
					doSubmitLeaveInfo: function (e, n) {
						var r = this,
							o = this;
						return o.doCheckIsHasSubmitted(), new Promise(function (a) {
							o.isHasSubmitted ? (e.autoid = t.default.state.leaveSchool.leaveInfo.autoid, i.default.cloudPutVacationLeaveInfo(e, n).then(function (e) {
								if ("Expected error" === e) return a(e), !1;
								i.default.cloudGetVacationLeaveInfo(n).then(function (e) {
									!1 === e ? a(!1) : s.default.checkHasKey(e, "autoid") ? null !== e.autoid ? (r.setLeaveInfo(e), r.setNextLeaveInfoRequestAvailableTime((new Date).getTime() + 432e5), a(e)) : a(!1) : (s.default.wxErrorToast("isExistLeaveInfo", "NULL isExistLeaveInfo"), s.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", n, 2e3))
								})
							})) : i.default.cloudPostVacationLeaveInfo(e, n).then(function (e) {
								if ("Expected error" === e) return a(e), !1;
								o.isExistLeaveInfo(o.language).then(function (e) {
									a(e)
								})
							})
						})
					},
					doCheckIsHasSubmitted: function () {
						s.default.checkHasKey(this.leaveInfo, "lxDatetimePlan") ? null === this.leaveInfo.lxDatetimePlan ? this.isHasSubmitted = !1 : this.isHasSubmitted = !0 : this.isHasSubmitted = !1
					},
					doCheckLeaveSchoolFinish: function () {
						return "" !== this.isStay
					},
					doCheckLeaveTimeFinish: function () {
						return this.preSet.leaveTime !== this.preSetCN.leaveTime || this.preSet.leaveTime !== this.preSetEN.leaveTime
					},
					doCheckDestinationFinish: function () {
						return "zh" === this.language ? this.preSet.leavePosi !== this.preSetCN.leavePosi || this.preSet.leaveAbroadPosi !== this.preSetCN.leaveAbroadPosi : this.preSet.leavePosi !== this.preSetEN.leavePosi || this.preSet.leaveAbroadPosi !== this.preSetEN.leaveAbroadPosi
					},
					doCheckTransportationFinish: function () {
						return "" !== this.transportation
					},
					doCheckReturnDateFinish: function () {
						return "" !== this.fxDatetimePlan
					},
					doCheckStayReasonFinish: function () {
						return "" !== this.stayReasonIndex && (this.stayReasonIndex !== this.stayReasonOtherIndex || "" !== this.stayReasonOtherField)
					},
					doCheckQ1Finish: function () {
						return "" !== this.q1_phone
					},
					doCheckQ2Finish: function () {
						return "" !== this.q2_outCampusAddress && ("" !== this.q2_4_street && "" !== this.q2_5_streetDetail)
					},
					doCheckQ3Finish: function () {
						return "" !== this.q3_1_name && ("" !== this.q3_2_phone && "" !== this.q3_3_relation)
					},
					doCheckQ4Finish: function () {
						return "" !== this.q4_studyType
					},
					doCheckQ5Finish: function () {
						if ("非全日制学生" === this.q4_studyType) {
							if ("" === this.q5_2_companyAddress) return !1;
							if ("" === this.q5_2_4_street) return !1;
							if ("" === this.q5_2_5_streetDetail) return !1
						} else if ("交流生" === this.q4_studyType && "" === this.q6_originalSchool) return !1;
						return !0
					},
					doCheckQ10_15Finish: function () {
						if ("火车" === this.transportation) {
							if ("" === this.q10_trainType) return !1;
							if ("" === this.q11_trainNumber) return !1;
							if ("" === this.q12_1_train_carriage) return !1;
							if ("" === this.q12_2_train_seat) return !1
						} else if ("飞机" === this.transportation) {
							if ("" === this.q13_airline) return !1;
							if ("" === this.q14_flight_number) return !1;
							if ("" === this.q15_flight_seat) return !1
						}
						return !0
					},
					doCheckRadio1: function () {
						return "1" === this.radio1
					},
					doCheckRadio2: function () {
						return "1" === this.radio2
					},
					doCheckRadio3: function () {
						return "1" === this.radio3
					}
				}
			});
		exports.default = n;
	});
	define("mixins/location.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
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
					isLocationAuth: function () {
						var e = this;
						return new Promise(function (t) {
							wx.getSetting({
								success: function (o) {
									o.authSetting["scope.userLocation"] ? (e.isHasLocationAuth = !0, t()) : wx.authorize({
										scope: "scope.userLocation",
										success: function () {
											e.isHasLocationAuth = !0, t()
										},
										fail: function () {
											e.isHasLocationAuth = !1, e.isShowLocationAuth = !0
										}
									})
								}
							})
						})
					},
					onSuccessWxLocation: function () {
						this.isHasLocationAuth = !0, this.isShowLocationAuth = !1, this.getLocation()
					},
					onCancelWxLocation: function () {
						this.isShowLocationAuth = !1
					},
					getLocation: function () {
						var e = this;
						return new Promise(function (t) {
							new o.default({
								key: "O6FBZ-4UT63-ZP23H-Y6OJO-EW2X5-EBFS4"
							}).reverseGeocoder({
								sig: "ppP9yPhAg3zXQ7e1ukEMYFyoPujhUR0",
								success: function (o) {
									e.latitude = o.result.location.lat, e.longitude = o.result.location.lng, e.nation = o.result.address_component.nation, e.province = o.result.address_component.province, e.city = o.result.address_component.city, e.district = o.result.address_component.district, e.isHasLocation = !0, e.position = o.result.address, "China" !== e.nation && "china" !== e.nation || (e.nation = "中国"), "中国" === e.nation && (i.default.checkHasKey(o.result.address_reference.town, "title") ? e.locStreet = o.result.address_reference.town.title : e.locStreet = o.result.address_component.street, e.locStreetno = o.result.address_component.street_number), void 0 === e.province && (e.province = o.result.address_component.ad_level_1, e.city = o.result.address_component.ad_level_2, e.district = o.result.address_component.ad_level_3), "South Korea" === e.nation && (e.nation = "韩国"), "" === e.nation && ("" === o.result.ad_info.nation ? e.show = !0 : e.nation = o.result.ad_info.nation), t()
								},
								fail: function (o) {
									wx.getLocation({
										type: "wgs84",
										success: function (o) {
											var n = {
												latitude: o.latitude,
												longitude: o.longitude
											};
											console.log(n), e.getLocationReverseGeocoder(n).then(function () {
												t()
											})
										},
										fail: function (t) {
											"getLocation:fail system permission denied" === t.errMsg ? (i.default.wxToast("请检查您的终端是否已开启位置服务,并授权微信使用!", "Please authorize WeChat location permissions", e.language, 3e3), n.default.info("getLocation:fail system permission denied")) : "getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF" === t.errMsg ? i.default.wxToast("微信定位失败，请打开WIFI后重试", "", "zh") : (i.default.wxErrorToast("getLocation", t.errMsg, "定位失败"), e.show = !0)
										}
									})
								},
								complete: function (e) {
									console.log(e)
								}
							})
						})
					},
					getLocationTest: function () {
						var e = this;
						return new Promise(function (t) {
							e.getLocationLatAndLong().then(function (o) {
								e.getLocationReverseGeocoder(o).then(function () {
									t()
								})
							})
						})
					},
					getLocationLatAndLong: function () {
						var e = this;
						return new Promise(function (t) {
							wx.getLocation({
								type: "gcj02",
								success: function (e) {
									var o = {
										latitude: e.latitude,
										longitude: e.longitude
									};
									console.log(o), t(o)
								},
								fail: function (t) {
									"getLocation:fail system permission denied" === t.errMsg ? (i.default.wxToast("请检查您的终端是否已开启位置服务,并授权微信使用!", "Please authorize WeChat location permissions", e.language, 3e3), n.default.info("getLocation:fail system permission denied")) : (i.default.wxErrorToast("getLocation", t.errMsg, "定位失败"), e.show = !0)
								}
							})
						})
					},
					getLocationReverseGeocoder: function (e) {
						var t = this;
						return new Promise(function (n) {
							new o.default({
								key: "O6FBZ-4UT63-ZP23H-Y6OJO-EW2X5-EBFS4"
							}).reverseGeocoder({
								location: e,
								sig: "ppP9yPhAg3zXQ7e1ukEMYFyoPujhUR0",
								success: function (e) {
									t.latitude = e.result.location.lat, t.longitude = e.result.location.lng, t.nation = e.result.address_component.nation, t.province = e.result.address_component.province, t.city = e.result.address_component.city, t.district = e.result.address_component.district, t.isHasLocation = !0, t.position = e.result.address, "China" !== t.nation && "china" !== t.nation || (t.nation = "中国"), "中国" === t.nation && (i.default.checkHasKey(e.result.address_reference.town, "title") ? t.locStreet = e.result.address_reference.town.title : t.locStreet = e.result.address_component.street, t.locStreetno = e.result.address_component.street_number), void 0 === t.province && (t.province = e.result.address_component.ad_level_1, t.city = e.result.address_component.ad_level_2, t.district = e.result.address_component.ad_level_3), "South Korea" === t.nation && (t.nation = "韩国"), "" === t.nation && ("" === e.result.ad_info.nation ? t.show = !0 : t.nation = e.result.ad_info.nation), n()
								},
								fail: function (e) {
									i.default.wxToast("定位失败!", "Location service failed!", t.language), t.show = !0
								},
								complete: function (e) {
									console.log(e)
								}
							})
						})
					},
					sendLocation: function (e, o, s, a, r) {
						var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "unknown",
							l = this;
						return new Promise(function (u) {
							if ("" === l.nation) return i.default.wxToast("定位失败，请重试！", "Location service failed!", l.language), l.ishasSendThisTime = !1, !1;
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
							"中国" === l.nation && (f.locStreet = l.locStreet, f.locStreetno = l.locStreetno), t.default.post("/api/school_tjxsfw_student/yqfkLogDailyreport/v3", f, function (e) {
								200 === e.code ? (l.massageDailyReport = e.message, n.default.info("send location ok!"), u()) : (i.default.wxErrToast("sendLocation", e.message, e.message), l.ishasSendThisTime = !1)
							}, function (e) {
								l.massageDailyReport = e.message, l.ishasSendThisTime = !1
							})
						})
					}
				}
			};
		exports.default = s;
	});
	define("mixins/login.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		e(require("./../common/httpUtils.js"));
		var t = e(require("./../common/utils.js")),
			n = (e(require("./../common/log.js")), e(require("./../common/api.js"))),
			o = e(require("./../store/index.js")),
			s = {
				data: {
					isShowAuth: !1,
					waitAuth: !1,
					loginErrorCount: 0,
					wxUserInfo: void 0,
					code: void 0
				},
				methods: {
					isNeedLogin: function () {
						var e = this;
						return !o.default.state.user.userInfo && (e.waitAuth = !0, e.wxLogin().then(function (t) {
							return e.wxUserInfo ? e.cloudLogin(t, e.wxUserInfo) : e.wxGetSetting().then(function (n) {
								return e.wxGetUserInfo(n).then(function (n) {
									return e.cloudLogin(t, n)  ///t是code,20239
								})
							})
						}))
					},
					wxLogin: function () {
						var e = this;
						return new Promise(function (n) {
							wx.login({
								success: function (o) {
									o.code ? (e.code = o.code, n(o.code)) : t.default.wxErrToast("wxLogin", o.errMsg, "res.errMsg")
								},
								fail: function () {
									t.default.wxErrToast("wxLogin", "fail", "本地网络错误！")
								}
							})
						})
					},
					cloudLogin: function (e, o) {  ///重构登录函数,参数是code,o是userInfo,userInfo是微信昵称头像地区等.,20256
						var s = this,
							i = this;
						return new Promise(function (r) {
							var u = {
								code: e,
								deviceSystem: "",
								appVersion: s.appVersion,
								appChannel: "xcx",
								socialChannel: "weixin"
							};
							try {
								var a = s.$app.$options.globalData;
								u.deviceSystem = a.systemInfo.deviceSystem
							} catch (e) {}
							if (console.log("before"), !o) return console.log("mid"), r(!0);
							console.log("after"), u.userInfo = o, i.setUserInfo(o), n.default.cloudLogin(u).then(function (e) {
								return console.log(e), 200 === e.data.code ? (i.setUserTokens(e.data.data), i.doGetBind("check"), t.default.wxToast("服务器连接成功", "Sever connected", i.language), r(!1)) : (t.default.wxErrToast("cloudLogin", e.data.code + ":" + e.data.message, e.data.message), r(!0))
							})
						})
					},
					onCancelWxUserInfo: function () {
						this.isShowAuth = !1, this.waitAuth = !1
					},
					onSuccessWxUserInfo: function (e) {
						var t = this;
						e && (t.wxUserInfo = e, t.waitAuth = !1, t.cloudLogin(this.code, this.wxUserInfo), t.isShowAuth = !1)
					},
					repeatedGetStudentInfo: function (e, o, s) {
						var i = this;
						if (o > s) return null;
						n.default.cloudGetStudentInfo().then(function (n) {
							for (var r = 0; r < e.length; r++)
								if (n.studentPid === e[r].studentPid) return n;
							return o += 1, e.push(n), t.default.sleep(1e3), i.repeatedGetStudentInfo(e, o, s)
						}).catch()
					},
					wxGetSetting: function () {
						return new Promise(function (e) {
							wx.getSetting({
								success: function (t) {
									e(t)
								}
							})
						})
					},
					wxGetUserInfo: function (e) {
						var n = this;
						return new Promise(function (o) {
							e.authSetting["scope.userInfo"] ? wx.getUserInfo({
								success: function (e) {
									var t = JSON.stringify(e.userInfo);
									return n.setUserInfo(t), o(t)
								},
								fail: function () {
									t.default.wxErrToast("wxGetUserInfo", "get userInfo failed", "获取用户信息失败")
								},
								complete: function () {
									n.waitAuth = !1
								}
							}) : n.waitAuth && (n.isShowAuth = !0)
						})
					},
					getInfo: function () {
						if (this.userInfo) {
							if (this.studentInfo) return !0;
							this.doGetBind("check")
						} else this.wxLogin()
					},
					checkInfo: function () {
						this.studentInfo
					},
					validateAccess: function () {
						var e = this;
						return !e.isNeedLogin() && !!e.isBind
					},
					onRequestSubscribeMessage: function (e, n) {
						var o = this,
							s = o.systemInfo.SDKVersion;
						100 * Number(s[0]) + 10 * Number(s[2]) + Number(s[4]) < 244 ? t.default.wxToast("您的微信版本过低，请升级至6.7.3以上版本", "Please update your Wechat", o.language) : wx.requestSubscribeMessage({
							tmplIds: e,
							success: function (s) {
								"accept" === s[e[0]] ? n() : t.default.wxToast("请开启订阅消息权限", "Please enable the subscription message permission", o.language), console.log("requestSubscribeMessage2", s)
							},
							fail: function (e) {
								t.default.wxToast("请开启订阅消息权限", "Please enable the subscription message permission", o.language)
							}
						})
					}
				}
			};
		exports.default = s;
	});
	define("mixins/notice.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		e(require("./../common/httpUtils.js"));
		var t = e(require("./../store/index.js")),
			r = e(require("./../common/utils.js")),
			i = e(require("./../common/api.js")),
			o = {
				data: {
					noticeArray_id: [],
					noticeArrayShow: [],
					noticeArrayCloud: []
				},
				methods: {
					doGetNewNotice: function () {
						var e = this,
							o = this;
						return new Promise(function (a) {
							var n = t.default.state.student.noticeArray;
							if (o.noticeArray_id = [], Array.isArray(n))
								for (var u = 0; u < n.length; u++) o.noticeArray_id.push(n[u].id);
							var d = t.default.state.student.nextNoticeArrayAvailableTime;
							return console.log(d), null !== d && r.default.isFutureTime(d) ? (o.noticeArrayCloud = n, console.log("store", n), a()) : !!r.default.checkHasKey(o.studentInfo, "studentPid") && void i.default.cloudGetNoticeArray(e.language).then(function (e) {
								console.log(o.noticeArray_id), o.noticeArrayCloud = e, Array.isArray(o.noticeArray_id) && o.noticeArray_id.length > 0 ? o.noticeArrayShow = e.filter(function (e) {
									return o.noticeArray_id.indexOf(e.id) < 0
								}) : o.noticeArrayShow = e;
								var t = (new Date).getTime() + 864e5,
									i = r.default.getFormatDate(new Date(t)),
									n = new Date(i).getTime() - 3e5 - 288e5;
								r.default.isToday(n) ? o.setNextNoticeArrayAvailableTime(n) : o.setNextNoticeArrayAvailableTime(n - 3e5), a()
							})
						})
					}
				}
			};
		exports.default = o;
	});
	define("mixins/questionnaire.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var t = e(require("./../store/index.js")),
			a = e(require("./../common/utils.js")),
			r = (e(require("./../common/api.js")), e(require("./exist.js"))),
			i = {
				data: {},
				methods: {
					doCheckQuestionnaire: function (e) {
						var i = this;
						return t.default.dispatch("setQArray", []), t.default.dispatch("setQArrayFinish", []), new Promise(function (s) {
							r.default.methods.isExistQuestionnaire(i.language).then(function (r) {
								if ("dailyReport" === e)
									if (Array.isArray(r)) {
										t.default.dispatch("setQArray", r);
										var u = a.default.adaptAppleDatetime(r[0].startDatetime),
											d = a.default.adaptAppleDatetime(r[0].endDatetime);
										!a.default.isFutureTime(u) && a.default.isFutureTime(d) ? (a.default.wxToast("您有必填问卷尚未完成，请先完成问卷", "您有必填问卷尚未完成，请先完成问卷", i.language, 2e3), s(!1)) : s("goDailyReport")
									} else a.default.isObject(r) && t.default.dispatch("setQArrayFinish", r.qArray), s("goDailyReport");
								else "questionnaire" === e && (Array.isArray(r) ? t.default.dispatch("setQArray", r) : a.default.isObject(r) && t.default.dispatch("setQArrayFinish", r.qArray), s("goQuestionnaire"))
							})
						})
					}
				}
			};
		exports.default = i;
	});
	define("mixins/refresh.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var t = {
			data: {
				isTabPage: !0,
				dataList: [],
				pageNum: 1,
				pageSize: 10,
				pageCount: 0,
				total: -1,
				isRefreshing: !1,
				isShowMore: !1,
				refresherHeight: 500
			},
			methods: {
				initWhenLoad: function () {
					var t = getApp().$wepy.$options.globalData;
					this.refresherHeight = t.refresherHeight, this.isTabPage || (this.refresherHeight = t.refresherHeight + t.systemInfo.screenHeight - t.systemInfo.windowHeight), this.doGetDataList()
				},
				onRefresh: function (t) {
					var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					this.isRefreshing = e, this.total = -1, this.dataList = [], this.pageNum = 1, this.pageCount = -1, this.doGetDataList()
				},
				onLoadMore: function () {
					this.doGetDataList()
				},
				stopRefresh: function () {
					this.isRefreshing = !1
				},
				onGetDataListEnd: function (t, e) {
					this.stopRefresh(), this.total = t, 0 !== t && (this.pageCount = e, this.isShowMore = this.pageCount > 0 && this.pageNum < this.pageCount, this.pageNum += 1)
				}
			},
			onLoad: function (t) {
				this.initBeforeLoad && this.initBeforeLoad(t), this.initWhenLoad()
			}
		};
		exports.default = t;
	});
	define("mixins/returnSchool.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		e(require("./../common/httpUtils.js")), e(require("./../store/index.js"));
		var t = e(require("./../common/api.js")),
			i = e(require("./../common/utils.js")),
			a = {
				data: {
					dict_riskType: ["无风险", "健康状态异常", "未上报", "重点低风险地区", "重点高风险地区"],
					dict_riskDescription: ["无风险", "存在健康状态异常记录", "30天内存在未连续健康上报记录", "14天内存在重点低风险地区旅居史", "30天内存在重点高风险地区旅居史", "14天内存在重点高风险地区旅居史"],
					dict_measure: ["无", "需风险核销", "需核酸抗体检测", "需14天隔离健康观察"],
					dict_campus: ["同济迎宾馆", "四平路校区", "彰武路校区", "铁岭路学生社区", "沪北校区", "沪西校区", "嘉定校区", "四平路校区南区"],
					dict_campusMatchMeasure: [
						[0],
						[1, 2, 3, 4, 5, 6, 7]
					],
					dict_campusPosition: ["上海市杨浦区彰武路69号", "上海市杨浦区四平路1239号", "上海市杨浦区彰武路100号", "上海市杨浦区铁岭路30号", "上海市静安区共和新路1238号", "上海市普陀区真南路500号", "上海市嘉定区曹安公路4800号", "上海市杨浦区赤峰路67号"],
					riskList: [],
					riskTotal: {},
					reportList: [],
					jxCampusList: [
						[]
					]
				},
				methods: {
					doCalcuHighRiskDateList: function (e) {
						var t = e.riskList;
						0 === t.length && i.default.wxErrorToast("doCalcuHighRiskDateList", "null risk", "数据错误");
						for (var a = "", r = 0; r < t.length; r++) {
							var s = t[r];
							if (3 === s.riskType)
								if ("" === a) a = i.default.adaptAppleDatetime(s.date);
								else {
									var o = new Date(a),
										u = new Date(i.default.adaptAppleDatetime(s.date));
									o < u && (a = u)
								}
						}
						return "" !== a ? a : 0
					},
					doJxCampusCalculation: function (e) {
						var t = this;
						t.jxCampusList = [
							[]
						]; {
							if (i.default.checkHasKey(e, "riskTotal")) {
								var a = e.riskTotal;
								if (void 0 !== a && a.riskType > 1) return t.jxCampusList[0].push(t.dict_campus[t.dict_campusMatchMeasure[0][0]]), t.jxCampusList;
								for (var r = 0; r < t.dict_campusMatchMeasure[1].length; r++) {
									var s = t.dict_campusMatchMeasure[1][r];
									t.jxCampusList[0].push(t.dict_campus[s])
								}
								return t.jxCampusList
							}
							i.default.wxErrorToast("doJxCampusCalculation", "riskInfo NULL", "获取风险详情错误")
						}
					},
					doGet30DailyReport: function (e) {
						var i = this;
						return new Promise(function (a) {
							t.default.cloudGet30DailyReport(e).then(function (e) {
								i.setDailyReportList(e), a(e)
							})
						})
					},
					doMakeRiskList: function (e) {
						var t = this;
						return new Promise(function (i) {
							t.doGet30DailyReport(e).then(function (e) {
								var a = t.doSetRiskInfo(e);
								t.setRiskInfo(a), i(a)
							})
						})
					},
					doSetRiskInfo: function (e) {
						var t = this.doRiskCalculation(e, this.dict_measure, this.dict_riskDescription);
						return this.setRiskInfo(t), t
					},
					doRiskCalculation: function (e, t, a) {
						for (var r = this, s = e.length, o = (new Date).getTime(), u = [], n = void 0, l = 0; l < 30; l++) {
							for (var c = new Date(o - 864e5 * l), d = 0, p = 0, f = "", k = "", m = "", D = [], v = 0, h = 0; h < s; h++) {
								var T = i.default.getFormatAppleDate(new Date(i.default.adaptAppleDatetime(e[h].reportDatetime)));
								if (T === i.default.getFormatAppleDate(c)) {
									switch (console.log("reportDate", T), console.log("checkDate", c), e[h].locRisklevel) {
										case "未上报":
											p = 2, f = t[d = 1], k = a[2];
											break;
										case "无风险":
											break;
										case "健康状态异常":
											p = 1, f = t[d = 1], k = a[1];
											break;
										case "重点低风险地区":
											p = 3;
											var g = parseInt((new Date(o).getTime() - new Date(T).getTime()) / 864e5);
											if (g <= 14) f = t[d = 2], k = a[3];
											else if (!(g <= 30)) return i.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", r.language, 2e3), void i.default.wxErrorToast("doRiskCalculation", "校核时间" + g);
											break;
										case "重点高风险地区":
											p = 4;
											var L = parseInt((new Date(o).getTime() - new Date(T).getTime()) / 864e5);
											if (L <= 14) f = t[d = 3], k = a[5];
											else {
												if (!(L <= 30)) return i.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", r.language, 2e3), void i.default.wxErrorToast("doRiskCalculation", "校核时间" + L);
												f = t[d = 2], k = a[4]
											}
									}
									if (v = e[h].autoid, m = i.default.getFormatDate(new Date(T)), d > 0) {
										var w = {
											autoid: v,
											riskLevel: p,
											riskType: d,
											date: m,
											measure: f,
											riskDescription: k
										};
										D.push(w)
									}
								}
							}
							if (0 !== D.length) {
								var x = 0;
								D.reduce(function (e, t, i) {
									return t.riskLevel > e ? (x = i, t.riskLevel) : e
								}, 0);
								d = D[x].riskType, f = D[x].measure, k = D[x].riskDescription, m = D[x].date, p = D[x].riskLevel
							}
							if (m || (p = 2, f = t[d = 1], k = a[2], m = i.default.getFormatDate(new Date(c))), d > 0) {
								var y = {
									autoid: v,
									riskLevel: p,
									riskType: d,
									date: m,
									measure: f,
									riskDescription: k
								};
								u.push(y), void 0 !== n ? n.riskType > d || (n.riskType < d ? n = y : -1 === n.riskDescription.indexOf(y.riskDescription) && (n.riskDescription = n.riskDescription + "，" + y.riskDescription)) : n = y
							}
						}
						return {
							riskTotal: n,
							riskList: u
						}
					}
				}
			};
		exports.default = a;
	});
	define("mixins/studentBind.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t, n, a, r, u, d) {
			try {
				var s = e[u](d),
					i = s.value
			} catch (e) {
				return void n(e)
			}
			s.done ? t(i) : Promise.resolve(i).then(a, r)
		}

		function n(e) {
			return function () {
				var n = this,
					a = arguments;
				return new Promise(function (r, u) {
					function d(e) {
						t(i, r, u, d, s, "next", e)
					}

					function s(e) {
						t(i, r, u, d, s, "throw", e)
					}
					var i = e.apply(n, a);
					d(void 0)
				})
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var a = e(require("./../vendor.js")(2)),
			r = e(require("./../common/httpUtils.js")),
			u = e(require("./../store/index.js")),
			d = e(require("./../common/utils.js")),
			s = e(require("./../common/api.js")),
			i = {
				data: {
					waitBind: !1
				},
				methods: {
					isNeedBind: function () {
						var e = this;
						if (!d.default.checkHasKey(this.studentInfo, "pid")) return d.default.wxToast("请先认证学籍信息", "Please get AUTHORIZATION first", e.language), !0;
						var t = u.default.state.student.nextStudentInfoAvailableTime;
						return (null === t || !d.default.isFutureTime(t)) && new Promise(function (t) {
							s.default.cloudGetStudentInfo(e.language).then(function (n) {
								e.doSetBindInfo(n), t()
							})
						})
					},
					doSetBindInfo: function (e) {
						this.setBind(!0), this.setStudentInfo(e), s.default.setGetParams(e), this.setNextStudentInfoAvailableTime((new Date).getTime() + 108e6)
					},
					doGetBind: function (e) {  ///绑定学籍
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
							s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
							i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
							o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
						d.default.wxToast("正在获取学籍信息...", "Loading...", t.language, 5e3), i += 1, r.default.get2("/api/school_tjxsfw_student/tblStudentUsers/my", void 0, function () {
							var r = n(a.default.mark(function n(r) {
								var l, c, f, g;
								return a.default.wrap(function (n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											if (console.log("[API getBind] ok			"), 200 === r.code ? r.data ? ((l = r.data).pid = r.data.studentPid, l.studentNo = r.data.studentStudentno, l.name = r.data.studentName, l.college = r.data.studentCollegeName, l.phone = r.data.studentMobilephone, l.gender = r.data.studentGender, l.pid && s.push(l)) : o = r.message : null !== r.code ? o = r.message : (d.default.wxErrorToast("doGetBind", "No data"), o = "服务器获取数据失败，请稍后尝试"), c = null, !(i >= 1 && s.length >= 2 && i <= 2)) {
												n.next = 17;
												break
											}
											f = 0;
										case 5:
											if (!(f < s.length)) {
												n.next = 17;
												break
											}
											g = f + 1;
										case 7:
											if (!(g < s.length)) {
												n.next = 14;
												break
											}
											if (s[f].pid !== s[g].pid) {
												n.next = 11;
												break
											}
											return c = s[f], n.abrupt("break", 17);
										case 11:
											g++, n.next = 7;
											break;
										case 14:
											f++, n.next = 5;
											break;
										case 17:
											return n.next = 19, d.default.sleep(1e3);
										case 19:
											if (!(i <= 2 && null === c)) {
												n.next = 23;
												break
											}
											t.doGetBind(e, t, s, i, o), n.next = 44;
											break;
										case 23:
											if (wx.hideToast(), null !== c) {
												n.next = 36;
												break
											}
											u.default.dispatch("clearStorageStudentData"), n.t0 = e, n.next = "check" === n.t0 ? 29 : "myStatus" === n.t0 ? 30 : "bind" === n.t0 ? 32 : 34;
											break;
										case 29:
											return n.abrupt("break", 34);
										case 30:
											return wx.navigateTo({
												url: "/pages/student/bind"
											}), n.abrupt("break", 34);
										case 32:
											t.msg = o, t.dialogShow = !0;
										case 34:
											n.next = 44;
											break;
										case 36:
											t.doSetBindInfo(c), n.t1 = e, n.next = "check" === n.t1 ? 40 : "myStatus" === n.t1 ? 41 : "bind" === n.t1 ? 43 : 44;
											break;
										case 40:
											return n.abrupt("break", 44);
										case 41:
											return wx.navigateTo({
												url: "/paegs/student/detail"
											}), n.abrupt("break", 44);
										case 43:
											wx.redirectTo({
												url: "/pages/student/bindComplete"
											});
										case 44:
										case "end":
											return n.stop()
									}
								}, n)
							}));
							return function (e) {
								return r.apply(this, arguments)
							}
						}(), function () {
							d.default.wxToast("本地网络错误", "Please check your network", t.language)
						})
					}
				}
			};
		exports.default = i;
	});
	define("mixins/test.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var i = {
			data: {
				mixin: "MixinText"
			},
			methods: {
				mixintap: function () {
					this.mixin = "MixinText" + (Math.random() + "").substring(3, 7), console.log("mixin method tap")
				},
				tap: function () {
					console.log("tap in mixin")
				}
			},
			created: function () {
				console.log("created in mixin")
			}
		};
		exports.default = i;
	});
	define("mixins/vaccination.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		t(require("./../common/httpUtils.js"));
		var e = t(require("./../store/index.js")),
			i = t(require("./../common/api.js")),
			n = t(require("./../common/utils.js")),
			a = (t(require("./exist.js")), t(require("./../store/vaccination.js")), {
				data: {
					isHasSubmitted: null
				},
				methods: {
					doSubmitVaccinationInfo: function (t, a) {
						var o = this,
							c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							u = this;
						return u.doCheckIsHasSubmitted(), new Promise(function (s) {
							u.isHasSubmitted ? (t.autoid = e.default.state.vaccination.vaccinationInfo.autoid, null === c ? (t.stateMedicalTestReportImgurl = "", i.default.cloudPutVaccinationInfo(t, a).then(function (t) {
								if ("Expected error" === t) return s(t), !1;
								i.default.cloudGetVaccinationInfo(a).then(function (t) {
									!1 === t ? s(!1) : n.default.checkHasKey(t, "autoid") ? null !== t.autoid ? (o.setVaccinationInfo(t), o.setVaccinationRequestAvailableTime((new Date).getTime() + 72e5), s(t)) : s(!1) : (n.default.wxErrorToast("isExistVaccinationInfo", "NULL isExistVaccinationInfo"), n.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", a, 2e3))
								})
							})) : i.default.cloudUploadVaccinationInfoChange(c, t, a).then(function (t) {
								if ("Expected error" === t) return s(t), !1;
								i.default.cloudGetVaccinationInfo(a).then(function (t) {
									!1 === t ? s(!1) : n.default.checkHasKey(t, "autoid") ? null !== t.autoid ? (o.setVaccinationInfo(t), o.setVaccinationRequestAvailableTime((new Date).getTime() + 72e5), s(t)) : s(!1) : (n.default.wxErrorToast("isExistVaccinationInfo", "NULL isExistVaccinationInfo"), n.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", a, 2e3))
								})
							})) : null === c ? i.default.cloudPostVaccinationInfo(t, a).then(function (t) {
								if ("Expected error" === t) return s(t), !1;
								u.isExistVaccinationInfo(u.language).then(function (t) {
									s(t)
								})
							}) : i.default.cloudUploadVaccinationInfo(c, t, a).then(function (t) {
								if ("Expected error" === t) return s(t), !1;
								u.isExistVaccinationInfo(u.language).then(function (t) {
									s(t)
								})
							})
						})
					},
					doCheckIsHasSubmitted: function () {
						console.log(this.vaccinationInfo), n.default.checkHasKey(this.vaccinationInfo, "autoid") ? null === this.vaccinationInfo.autoid ? this.isHasSubmitted = !1 : this.isHasSubmitted = !0 : this.isHasSubmitted = !1
					}
				}
			});
		exports.default = a;
	});
	define("store/app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			state: {
				version: "1.4.12",
				isProd: !0
			},
			mutations: {},
			actions: {}
		};
		exports.default = e;
	});
	define("store/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var r = e(require("./../vendor.js")(0)),
			u = e(require("./../vendor.js")(4)),
			t = e(require("./user.js")),
			a = e(require("./app.js")),
			s = e(require("./visitor.js")),
			i = e(require("./student.js")),
			o = e(require("./returnSchool.js")),
			l = e(require("./vaccination.js")),
			d = e(require("./leaveSchool.js")),
			n = e(require("./questionnaire.js"));
		r.default.use(u.default);
		var f = new u.default.Store({
			modules: {
				app: a.default,
				user: t.default,
				visitor: s.default,
				student: i.default,
				returnSchool: o.default,
				leaveSchool: d.default,
				vaccination: l.default,
				questionnaire: n.default
			}
		});
		exports.default = f;
	});
	define("store/leaveSchool.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			state: {
				nextLeaveInfoRequestAvailableTime: null,
				leaveInfo: null
			},
			mutations: {
				SET_leaveInfo: function (e, a) {
					e.leaveInfo = a
				},
				SET_nextLeaveInfoRequestAvailableTime: function (e, a) {
					e.nextLeaveInfoRequestAvailableTime = a
				}
			},
			actions: {
				setLeaveInfo: function (e, a) {
					(0, e.commit)("SET_leaveInfo", a), wx.setStorageSync("leaveInfo", a)
				},
				setNextLeaveInfoRequestAvailableTime: function (e, a) {
					(0, e.commit)("SET_nextLeaveInfoRequestAvailableTime", a), wx.setStorageSync("nextLeaveInfoRequestAvailableTime", a)
				},
				clearLeaveSchoolCache: function (e) {
					var a = e.commit;
					a("SET_leaveInfo", 0), a("SET_nextLeaveInfoRequestAvailableTime", 0);
					try {
						wx.removeStorageSync("leaveInfo"), wx.removeStorageSync("nextLeaveInfoRequestAvailableTime")
					} catch (e) {}
				},
				getLeaveSchoolStorage: function (e) {
					var a = e.commit;
					try {
						var t = wx.getStorageSync("leaveInfo");
						t && a("SET_leaveInfo", t), (t = wx.getStorageSync("nextLeaveInfoRequestAvailableTime")) && a("SET_nextLeaveInfoRequestAvailableTime", t)
					} catch (e) {}
				}
			}
		};
		exports.default = e;
	});
	define("store/questionnaire.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var r = {
			state: {
				qArray: [],
				qArrayFinish: []
			},
			mutations: {
				SET_qArray: function (r, t) {
					r.qArray = t
				},
				SET_qArrayFinish: function (r, t) {
					r.qArrayFinish = t
				}
			},
			actions: {
				setQArray: function (r, t) {
					(0, r.commit)("SET_qArray", t), wx.setStorageSync("qArray", t)
				},
				setQArrayFinish: function (r, t) {
					(0, r.commit)("SET_qArrayFinish", t), wx.setStorageSync("qArrayFinish", t)
				},
				clearQuestionnaireCache: function (r) {
					var t = r.commit;
					t("SET_qArray", 0), t("SET_qArrayFinish", 0);
					try {
						wx.removeStorageSync("setQArray"), wx.removeStorageSync("qArrayFinish")
					} catch (r) {}
				},
				getQuestionnaireStorage: function (r) {
					var t = r.commit;
					try {
						var a = wx.getStorageSync("setQArray");
						a && t("SET_qArray", a), (a = wx.getStorageSync("qArrayFinish")) && t("SET_qArrayFinish", a)
					} catch (r) {}
				}
			}
		};
		exports.default = r;
	});
	define("store/returnSchool.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			state: {
				nextApplyRequestAvailableTime: null,
				applyInfo: null,
				nextAppealRequestAvailableTime: null,
				appealInfo: null,
				nextDailyReportRequestAvailableTime: null,
				dailyReportList: null,
				medicalTestReportInfo: {},
				uploadImg: "../../images/upload.png",
				uploadMedicalTestReportImg: "../../images/upload.png"
			},
			mutations: {
				SET_NEXTAPPLYREQUESTAVAILABELTIME: function (e, t) {
					e.nextApplyRequestAvailableTime = t
				},
				SET_nextAppealRequestAvailableTime: function (e, t) {
					e.nextAppealRequestAvailableTime = t
				},
				SET_nextDailyReportRequestAvailableTime: function (e, t) {
					e.nextDailyReportRequestAvailableTime = t
				},
				SET_APPLYINFO: function (e, t) {
					e.applyInfo = t
				},
				SET_APPEALINFO: function (e, t) {
					e.appealInfo = t
				},
				SET_DAILYREPORTLIST: function (e, t) {
					e.dailyReportList = t
				},
				SET_MedicalTestReportInfo: function (e, t) {
					e.medicalTestReportInfo = t
				},
				SET_UPLOADIMG: function (e, t) {
					e.uploadImg = t
				},
				SET_UploadMedicalTestReportImg: function (e, t) {
					e.uploadMedicalTestReportImg = t
				}
			},
			actions: {
				setNextApplyRequestAvailableTime: function (e, t) {
					(0, e.commit)("SET_NEXTAPPLYREQUESTAVAILABELTIME", t), wx.setStorageSync("nextApplyRequestAvailableTime", t)
				},
				setNextAppealRequestAvailableTime: function (e, t) {
					(0, e.commit)("SET_nextAppealRequestAvailableTime", t), wx.setStorageSync("nextAppealRequestAvailableTime", t)
				},
				setNextDailyReportRequestAvailableTime: function (e, t) {
					(0, e.commit)("SET_nextDailyReportRequestAvailableTime", t), wx.setStorageSync("nextDailyReportRequestAvailableTime", t)
				},
				setApplyInfo: function (e, t) {
					(0, e.commit)("SET_APPLYINFO", t), wx.setStorageSync("applyInfo", t)
				},
				setAppealInfo: function (e, t) {
					(0, e.commit)("SET_APPEALINFO", t), wx.setStorageSync("appealInfo", t)
				},
				setDailyReportList: function (e, t) {
					(0, e.commit)("SET_DAILYREPORTLIST", t), wx.setStorageSync("dailyReportList", t)
				},
				setMedicalTestReportInfo: function (e, t) {
					(0, e.commit)("SET_MedicalTestReportInfo", t), wx.setStorageSync("medicalTestReportInfo", t)
				},
				setUploadImg: function (e, t) {
					(0, e.commit)("SET_UPLOADIMG", t), wx.setStorageSync("uploadImg", t)
				},
				setUploadMedicalTestReportImg: function (e, t) {
					(0, e.commit)("SET_UploadMedicalTestReportImg", t), wx.setStorageSync("uploadMedicalTestReportImg", t)
				},
				clearUploadImg: function (e) {
					var t = e.commit;
					t("SET_UPLOADIMG", "../../images/upload.png"), t("SET_UploadMedicalTestReportImg", "../../images/upload.png"), t("SET_MedicalTestReportInfo", {});
					try {
						wx.removeStorageSync("uploadImg"), wx.removeStorageSync("uploadMedicalTestReportImg"), wx.removeStorageSync("medicalTestReportInfo")
					} catch (e) {}
				},
				clearReturnSchoolCache: function (e) {
					var t = e.commit;
					t("SET_APPLYINFO", 0), t("SET_APPEALINFO", 0);
					try {
						wx.removeStorageSync("applyInfo"), wx.removeStorageSync("appealInfo")
					} catch (e) {}
				},
				getReturnSchoolStorage: function (e) {
					var t = e.commit;
					try {
						var a = wx.getStorageSync("nextApplyRequestAvailableTime");
						a && t("SET_NEXTAPPLYREQUESTAVAILABELTIME", a), (a = wx.getStorageSync("nextAppealRequestAvailableTime")) && t("SET_nextAppealRequestAvailableTime", a), (a = wx.getStorageSync("nextDailyReportRequestAvailableTime")) && t("SET_nextDailyReportRequestAvailableTime", a), (a = wx.getStorageSync("applyInfo")) && t("SET_APPLYINFO", a), (a = wx.getStorageSync("appealInfo")) && t("SET_APPEALINFO", a), (a = wx.getStorageSync("dailyReportList")) && t("SET_DAILYREPORTLIST", a)
					} catch (e) {}
				}
			}
		};
		exports.default = e;
	});
	define("store/student.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			state: {
				isBind: !1,
				nextActivationRequestAvailableTime: null,
				nextStudentInfoAvailableTime: null,
				nextTodayReportRequestAvailableTime: null,
				nextNoticeArrayAvailableTime: null,
				isHasActivation: !1,
				isHasTodayReport: !1,
				studentInfo: null,
				riskInfo: null,
				dormInfo: null,
				noticeArray: []
			},
			mutations: {
				SET_BIND: function (e, t) {
					e.isBind = t
				},
				SET_NextActivationRequestAvailableTime: function (e, t) {
					e.nextActivationRequestAvailableTime = t
				},
				SET_NextStudentInfoAvailableTime: function (e, t) {
					e.nextStudentInfoAvailableTime = t
				},
				SET_NextTodayReportRequestAvailableTime: function (e, t) {
					e.nextTodayReportRequestAvailableTime = t
				},
				SET_NextNoticeArrayAvailableTime: function (e, t) {
					e.nextNoticeArrayAvailableTime = t
				},
				SET_isHasActivation: function (e, t) {
					e.isHasActivation = t
				},
				SET_isHasTodayReport: function (e, t) {
					e.isHasTodayReport = t
				},
				SET_STUDENTINFO: function (e, t) {
					e.studentInfo = t
				},
				SET_RISKINFO: function (e, t) {
					e.riskInfo = t
				},
				SET_NOTICEARRAY: function (e, t) {
					e.noticeArray = t
				}
			},
			actions: {
				setBind: function (e, t) {
					(0, e.commit)("SET_BIND", t), wx.setStorageSync("isBind", t)
				},
				setNextActivationRequestAvailableTime: function (e, t) {
					(0, e.commit)("SET_NextActivationRequestAvailableTime", t), wx.setStorageSync("nextActivationRequestAvailableTime", t)
				},
				setNextStudentInfoAvailableTime: function (e, t) {
					(0, e.commit)("SET_NextStudentInfoAvailableTime", t), wx.setStorageSync("nextStudentInfoAvailableTime", t)
				},
				setNextTodayReportRequestAvailableTime: function (e, t) {
					(0, e.commit)("SET_NextTodayReportRequestAvailableTime", t), wx.setStorageSync("nextTodayReportRequestAvailableTime", t)
				},
				setNextNoticeArrayAvailableTime: function (e, t) {
					(0, e.commit)("SET_NextNoticeArrayAvailableTime", t), wx.setStorageSync("nextNoticeArrayAvailableTime", t)
				},
				setHasActivation: function (e, t) {
					(0, e.commit)("SET_isHasActivation", t), wx.setStorageSync("isHasActivation", t)
				},
				setHasTodayReport: function (e, t) {
					(0, e.commit)("SET_isHasTodayReport", t), wx.setStorageSync("isHasTodayReport", t)
				},
				setStudentInfo: function (e, t) {
					(0, e.commit)("SET_STUDENTINFO", t), wx.setStorageSync("studentInfo", t)
				},
				setRiskInfo: function (e, t) {
					(0, e.commit)("SET_RISKINFO", t), wx.setStorageSync("riskInfo", t)
				},
				setNoticeArray: function (e, t) {
					(0, e.commit)("SET_NOTICEARRAY", t), wx.setStorageSync("noticeArray", t)
				},
				clearStorageStudentData: function (e) {
					var t = e.commit;
					t("SET_BIND", 0), t("SET_NextActivationRequestAvailableTime", 0), t("SET_NextStudentInfoAvailableTime", 0), t("SET_NextTodayReportRequestAvailableTime", 0), t("SET_NextNoticeArrayAvailableTime", 0), t("SET_isHasActivation", 0), t("SET_HASCLOCKINTODAY", 0), t("SET_isHasTodayReport", 0), t("SET_STUDENTINFO", 0), t("SET_RISKINFO", 0), t("SET_NOTICEARRAY", 0);
					try {
						wx.removeStorageSync("isBind"), wx.removeStorageSync("nextActivationRequestAvailableTime"), wx.removeStorageSync("nextStudentInfoAvailableTime"), wx.removeStorageSync("nextTodayReportRequestAvailableTime"), wx.removeStorageSync("nextNoticeArrayAvailableTime"), wx.removeStorageSync("isHasActivation"), wx.removeStorageSync("isHasTodayReport"), wx.removeStorageSync("studentInfo"), wx.removeStorageSync("riskInfo"), wx.removeStorageSync("noticeArray")
					} catch (e) {}
				},
				changeStorageStudentData: function (e) {
					var t = e.commit;
					try {
						var i = wx.getStorageSync("studentInfo");
						i && t("SET_STUDENTINFO", i), (i = wx.getStorageSync("isBind")) && t("SET_BIND", i), (i = wx.getStorageSync("nextActivationRequestAvailableTime")) && t("SET_NextActivationRequestAvailableTime", i), (i = wx.getStorageSync("nextStudentInfoAvailableTime")) && t("SET_NextStudentInfoAvailableTime", i), (i = wx.getStorageSync("nextTodayReportRequestAvailableTime")) && t("SET_NextTodayReportRequestAvailableTime", i), (i = wx.getStorageSync("nextNoticeArrayAvailableTime")) && t("SET_NextNoticeArrayAvailableTime", i), (i = wx.getStorageSync("isHasActivation")) && t("SET_isHasActivation", i), (i = wx.getStorageSync("isHasTodayReport")) && t("SET_isHasTodayReport", i), (i = wx.getStorageSync("riskInfo")) && t("SET_RISKINFO", i), (i = wx.getStorageSync("dormInfo")) && t("SET_DORMINFO", i), (i = wx.getStorageSync("noticeArray")) && t("SET_NOTICEARRAY", i)
					} catch (e) {}
				}
			}
		};
		exports.default = e;
	});
	define("store/user.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		! function (e) {
			e && e.__esModule
		}(require("./../common/httpUtils.js"));
		var e = {
			state: {
				isRefreshed: !1,
				userInfo: null,
				accessToken: null,
				refreshToken: null,
				expiresIn: null,
				jti: null,
				unReadCount: 0
			},
			mutations: {
				SET_REFRESH: function (e, t) {
					e.isRefreshed = t
				},
				SET_ACCESS_TOKEN: function (e, t) {
					e.accessToken = t
				},
				SET_REFRESH_TOKEN: function (e, t) {
					e.refreshToken = t
				},
				SET_EXPIRES_IN: function (e, t) {
					e.expiresIn = t
				},
				SET_JTI: function (e, t) {
					e.jti = t
				},
				SET_USER_INFO: function (e, t) {
					e.userInfo = t
				},
				SET_UNREAD_COUNT: function (e, t) {
					e.unReadCount = t
				}
			},
			actions: {
				setUnreadCount: function (e, t) {
					(0, e.commit)("SET_UNREAD_COUNT", t)
				},
				setUserInfo: function (e, t) {
					(0, e.commit)("SET_USER_INFO", t), wx.setStorageSync("user_info", JSON.stringify(t))
				},
				setUserTokens: function (e, t) {
					var n = e.commit;
					n("SET_ACCESS_TOKEN", t.access_token), wx.setStorageSync("access_token", t.access_token), n("SET_REFRESH_TOKEN", t.refresh_token), wx.setStorageSync("refresh_token", t.refresh_token), n("SET_JTI", t.jti), wx.setStorageSync("jti", t.jti);
					var S = t.expires_in,
						o = parseInt((new Date).getTime() / 1e3);
					n("SET_EXPIRES_IN", o + S - 100), wx.setStorageSync("expires_in", o + S - 100)
				},
				clearUserTokens: function (e) {
					var t = e.commit;
					t("SET_ACCESS_TOKEN", null), t("SET_REFRESH_TOKEN", null), t("SET_JTI", null), t("SET_EXPIRES_IN", null), t("SET_USER_INFO", null);
					try {
						wx.removeStorageSync("access_token"), wx.removeStorageSync("refresh_token"), wx.removeStorageSync("jti"), wx.removeStorageSync("expires_in"), wx.removeStorageSync("user_info")
					} catch (e) {}
				},
				changeStorageData: function (e) {
					var t = e.commit;
					try {
						var n = wx.getStorageSync("user_info");
						if (n) {
							var S = JSON.parse(n);
							t("SET_USER_INFO", S)
						}(n = wx.getStorageSync("access_token")) && t("SET_ACCESS_TOKEN", n), (n = wx.getStorageSync("expires_in")) && t("SET_EXPIRES_IN", n), (n = wx.getStorageSync("is_certification_exist")) && t("SET_CERTIFICATION_EXIST", n), (n = wx.getStorageSync("is_child_add")) && t("SET_CHILD_ADD", n), wx.getStorage({
							key: "jti",
							success: function (e) {
								t("SET_JTI", e.data)
							}
						})
					} catch (e) {}
				},
				setRefresh: function (e) {
					(0, e.commit)("SET_REFRESH", !0), wx.setStorageSync("isRefreshed", !0)
				},
				getRefresh: function (e) {
					var t = e.commit,
						n = wx.getStorageSync("isRefreshed");
					console.log(n), n && t("SET_REFRESH", n)
				}
			}
		};
		exports.default = e;
	});
	define("store/vaccination.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = {
			state: {
				nextVaccinationRequestAvailableTime: null,
				vaccinationInfo: null
			},
			mutations: {
				SET_VaccinationInfo: function (e, a) {
					e.vaccinationInfo = a
				},
				SET_nextVaccinationRequestAvailableTime: function (e, a) {
					e.nextVaccinationRequestAvailableTime = a
				}
			},
			actions: {
				setVaccinationInfo: function (e, a) {
					(0, e.commit)("SET_VaccinationInfo", a), wx.setStorageSync("vaccinationInfo", a)
				},
				setVaccinationRequestAvailableTime: function (e, a) {
					(0, e.commit)("SET_nextVaccinationRequestAvailableTime", a), wx.setStorageSync("nextVaccinationRequestAvailableTime", a)
				},
				clearLeaveSchoolCache: function (e) {
					var a = e.commit;
					a("SET_VaccinationInfo", 0), a("SET_nextVaccinationRequestAvailableTime", 0);
					try {
						wx.removeStorageSync("vaccinationInfo"), wx.removeStorageSync("nextVaccinationRequestAvailableTime")
					} catch (e) {}
				},
				getLeaveSchoolStorage: function (e) {
					var a = e.commit;
					try {
						var n = wx.getStorageSync("vaccinationInfo");
						n && a("SET_VaccinationInfo", n), (n = wx.getStorageSync("nextVaccinationRequestAvailableTime")) && a("SET_nextVaccinationRequestAvailableTime", n)
					} catch (e) {}
				}
			}
		};
		exports.default = e;
	});
	define("store/visitor.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var i = {
			state: {
				visitorInfo: null,
				isChildAdd: 0,
				isCertificationExist: 0,
				isCertificationValid: 0
			},
			mutations: {
				SET_CHILD_ADD: function (i, t) {
					i.isChildAdd = t
				},
				SET_CERTIFICATION_EXIST: function (i, t) {
					i.isCertificationExist = t
				},
				SET_CERTIFICATION_VALID: function (i, t) {
					i.isCertificationValid = t
				}
			},
			actions: {
				setChildAdd: function (i, t) {
					(0, i.commit)("SET_CHILD_ADD", t), wx.setStorage({
						key: "is_child_add",
						data: t
					})
				},
				setCertificationExist: function (i, t) {
					(0, i.commit)("SET_CERTIFICATION_EXIST", t), wx.setStorage({
						key: "is_certification_exist",
						data: t
					})
				},
				setCertificationValid: function (i, t) {
					(0, i.commit)("SET_CERTIFICATION_VALID", t), wx.setStorage({
						key: "is_certification_valid",
						data: t
					})
				},
				clearVisitorCache: function (i) {
					var t = i.commit;
					t("SET_CHILD_ADD", 0), t("SET_CERTIFICATION_EXIST", 0), t("SET_CERTIFICATION_VALID", 0);
					try {
						wx.removeStorageSync("is_child_add"), wx.removeStorageSync("is_certification_exist"), wx.removeStorageSync("is_certification_valid")
					} catch (i) {}
				}
			}
		};
		exports.default = i;
	});
	define("vendor.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			e = {
				Number: Number,
				Array: Array,
				Date: Date,
				Error: Error,
				Math: Math,
				Object: Object,
				Function: Function,
				RegExp: RegExp,
				String: String,
				TypeError: TypeError,
				parseInt: parseInt,
				parseFloat: parseFloat,
				isNaN: isNaN
			},
			r = e,
			n = {
				env: {}
			};
		! function (t) {
			function e(n) {
				if (r[n]) return r[n].exports;
				var o = r[n] = {
					exports: {},
					id: n,
					loaded: !1
				};
				return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
			}
			var r = {};
			e.m = t, e.c = r, e.p = "/", module.exports = e
		}([function (e, r, n) {
			function o(t) {
				return "function" == typeof t && /native code/.test(t.toString())
			}

			function i(e) {
				return null !== e && "object" === (void 0 === e ? "undefined" : t(e))
			}

			function a(t) {
				return "[object Object]" === Et.call(t)
			}

			function s(t, e) {
				return Ot.call(t, e)
			}

			function u(t, e, r) {}

			function c(t) {
				var e = parseFloat(String(t));
				return e >= 0 && Math.floor(e) === e && isFinite(t)
			}

			function h(t, e) {
				void 0 === e && (e = 0);
				for (var r = t.length - e, n = new Array(r); r--;) n[r] = t[r + e];
				return n
			}

			function f() {
				var e, r, n, o, i, s, u = arguments,
					c = arguments[0] || {},
					h = 1,
					p = arguments.length,
					l = !1;
				for ("boolean" == typeof c && (l = c, c = arguments[h] || {}, h++), "object" !== (void 0 === c ? "undefined" : t(c)) && "function" != typeof c && (c = {}), h === p && (c = this, h--); h < p; h++)
					if (e = u[h])
						for (r in e) n = c[r], c !== (o = e[r]) && (l && o && (a(o) || (i = Array.isArray(o))) ? (i ? (i = !1, s = n && Array.isArray(n) ? n : []) : s = n && a(n) ? n : {}, c[r] = f(l, s, o)) : c[r] = o);
				return c
			}

			function p(t, e) {
				return void 0 === e && (e = !0), gt(t) ? f(e, [], t) : "" + t == "null" ? t : a(t) ? f(e, {}, t) : t
			}

			function l(t, e, r) {
				if (e)
					for (var n = e; n = n.$parent;) {
						var o = n.$options.errorCaptured;
						if (o)
							for (var i = 0; i < o.length; i++) try {
								if (!1 === o[i].call(n, t, e, r)) return
							} catch (t) {
								d(t, n, "errorCaptured hook")
							}
					}
				d(t, e, r)
			}

			function d(t, e, r) {
				if ($t.errorHandler) try {
					return $t.errorHandler.call(null, t, e, r)
				} catch (t) {
					v(t, null, "config.errorHandler")
				}
				v(t, e, r)
			}

			function v(t, e, r) {
				if (Nt("Error in " + r + ': "' + t.toString() + '"', e), "undefined" == typeof console) throw t;
				console.error(t)
			}

			function y() {
				Tt = !1;
				var t = jt.slice(0);
				jt.length = 0;
				for (var e = 0; e < t.length; e++) t[e]()
			}

			function m(t, e) {
				var r;
				if (jt.push(function () {
						if (t) try {
							t.call(e)
						} catch (t) {
							l(t, e, "nextTick")
						} else r && r(e)
					}), Tt || (Tt = !0, St ? Dt() : Mt()), !t && "undefined" != typeof Promise) return new Promise(function (t) {
					r = t
				})
			}

			function g() {
				var t = Vt.slice(0);
				Vt.length = 0;
				for (var e = 0; e < t.length; e++) t[e]()
			}

			function _(t, e) {
				var r;
				if (Vt.push(function () {
						if (t) try {
							t.call(e)
						} catch (t) {
							l(t, e, "nextTick")
						} else r && r(e)
					}), !t && "undefined" != typeof Promise) return new Promise(function (t) {
					r = t
				})
			}

			function b(t, e) {
				if (t.length) {
					var r = t.indexOf(e);
					if (r > -1) return t.splice(r, 1)
				}
			}

			function w(t, e, r, n) {
				Object.defineProperty(t, e, {
					value: r,
					enumerable: !!n,
					writable: !0,
					configurable: !0
				})
			}

			function E(t) {
				if (!Gt.test(t)) {
					var e = t.split(".");
					return function (t) {
						for (var r = 0; r < e.length; r++) {
							if (!t) return;
							t = t[e[r]]
						}
						return t
					}
				}
			}

			function O(t) {
				Kt.target && Ft.push(Kt.target), Kt.target = t
			}

			function C() {
				Kt.target = Ft.pop()
			}

			function A(t, e, r) {
				e.traverseOp(t, r.pathKeys, r.pathMap, function (t, e) {
					return t.path in e.pathMap ? null : (e.addPath(t), t)
				})
			}

			function x(t, e, r) {
				e.traverseOp(t, r.pathKeys, r.pathMap, function (t, e) {
					return e.delPath(t.path), t
				})
			}

			function k(t, e, r) {
				var n;
				if (r) {
					for (var o = [], i = {}, a = 0; a < e.length; a++) {
						var s = Wt(t, r[e[a]].path);
						o.push(s), i[s] = {
							key: t,
							root: r[e[a]].root,
							path: s
						}
					}
					return {
						combinePathKeys: o,
						combinePathMap: i
					}
				}
				return {
					combinePathKeys: [t],
					combinePathMap: (n = {}, n[t] = {
						key: t,
						root: t,
						path: t
					}, n)
				}
			}

			function $(t, e, r) {
				i(e) && s(e, "__ob__") && x(t, e.__ob__.op, r.__ob__.op)
			}

			function N(t, e) {
				t.__proto__ = e
			}

			function P(t, e, r) {
				for (var n = 0, o = r.length; n < o; n++) {
					var i = r[n];
					w(t, i, e[i])
				}
			}

			function L(t) {
				var e = t.vm,
					r = t.key,
					n = t.value,
					o = t.parent,
					u = t.root;
				if (i(n)) {
					var c;
					return s(n, "__ob__") && n.__ob__ instanceof qt ? A(r, (c = n.__ob__).op, o.__ob__.op) : Qt.shouldConvert && (Array.isArray(n) || a(n)) && Object.isExtensible(n) && !n._isVue && (c = new qt({
						vm: e,
						key: r,
						value: n,
						parent: o
					})), u && c && c.vmCount++, c
				}
			}

			function M(t) {
				var e = t.vm,
					r = t.obj,
					n = t.key,
					o = t.value,
					a = t.parent,
					u = t.customSetter,
					c = t.shallow,
					h = new Kt,
					f = Object.getOwnPropertyDescriptor(r, n);
				if (!f || !1 !== f.configurable) {
					var p = f && f.get;
					p || 2 !== arguments.length || (o = r[n]);
					var l = f && f.set,
						d = !c && L({
							vm: e,
							key: n,
							value: o,
							parent: r
						});
					Object.defineProperty(r, n, {
						enumerable: !0,
						configurable: !0,
						get: function () {
							var t = p ? p.call(r) : o;
							return Kt.target && (h.depend(), d && (d.dep.depend(), Array.isArray(t) && T(t))), t
						},
						set: function (t) {
							var f = p ? p.call(r) : o;
							t === f || t !== t && f !== f || (i(o) && s(o, "__ob__") && x(n, o.__ob__.op, a.__ob__.op), u && u(), l ? l.call(r, t) : o = t, e && e.$dirty && e.$dirty.set(r.__ob__.op, n, t), d = !c && L({
								vm: e,
								key: n,
								value: t,
								parent: a
							}), h.notify())
						}
					})
				}
			}

			function D(t, e, r, n) {
				if (Array.isArray(e) && c(r)) return e.length = Math.max(e.length, r), e.splice(r, 1, n), n;
				if (r in e && !(r in Object.prototype)) return e[r] = n, n;
				var o = e.__ob__;
				return e._isVue || o && o.vmCount ? (Nt("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : o ? (i(e[r]) && s(e[r], "__ob__") && x(r, e[r].__ob__.op, o.op), M({
					vm: t,
					obj: o.value,
					key: r,
					value: n,
					parent: o.value
				}), t && t.$dirty && s(e, "__ob__") && t.$dirty.set(e.__ob__.op, r, n), o.dep.notify(), n) : (e[r] = n, n)
			}

			function j(t, e) {
				if (Array.isArray(t) && c(e)) t.splice(e, 1);
				else {
					var r = t.__ob__;
					t._isVue || r && r.vmCount ? Nt("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : s(t, e) && (t[e] = null, delete t[e], r && r.dep.notify())
				}
			}

			function T(t) {
				for (var e = void 0, r = 0, n = t.length; r < n; r++)(e = t[r]) && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && T(e)
			}

			function S(t) {
				B(t, te), te.clear()
			}

			function B(t, e) {
				var r, n, o = Array.isArray(t);
				if ((o || i(t)) && !Object.isFrozen(t)) {
					if (t.__ob__) {
						var a = t.__ob__.dep.id;
						if (e.has(a)) return;
						e.add(a)
					}
					if (o)
						for (r = t.length; r--;) B(t[r], e);
					else
						for (r = (n = Object.keys(t)).length; r--;) B(t[n[r]], e)
				}
			}

			function I() {
				ue = re.length = ne.length = 0, oe = {}, ie = {}, ae = se = !1
			}

			function R(t) {
				void 0 === t && (t = 0), se = !0;
				var e, r;
				0 === t && re.sort(function (t, e) {
					return t.id - e.id
				});
				var n = [];
				for (0 === t && (ue = 0); ue < re.length; ue++)
					if ((e = re[ue]) && e.isRenderWatcher) n.push(e);
					else if (r = e.id, oe[r] = null, e.run(), null != oe[r] && (ie[r] = (ie[r] || 0) + 1, ie[r] > ee)) return Nt("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm), void I();
				n.length && n.forEach(function (t) {
					oe[t.id] = null, t.run()
				}), re.slice(ue).length ? R(t + 1) : I()
			}

			function V(t) {
				var e = t.id;
				if (null == oe[e]) {
					if (oe[e] = !0, se) {
						for (var r = re.length - 1; r > ue && re[r].id > t.id;) r--;
						re.splice(r + 1, 0, t)
					} else re.push(t);
					ae || (ae = !0, m(R))
				}
			}

			function G(t, e, r) {
				pe.get = function () {
					return this[e][r]
				}, pe.set = function (t) {
					this[e][r] = t
				}, Object.defineProperty(t, r, pe)
			}

			function H(t, e) {
				e || (e = {}), t.data = e
			}

			function K(t, e) {
				e || (e = {});
				var r;
				r = "function" == typeof e ? e.call(t) : p(e), t._data = r, Object.keys(r).forEach(function (e) {
					G(t, "_data", e)
				}), L({
					vm: t,
					key: "",
					value: r,
					parent: "",
					root: !0
				})
			}

			function F(t, e) {
				e && Object.keys(e).forEach(function (r) {
					t.$watch(r, e[r])
				})
			}

			function W(t) {
				return function () {
					var e = this._computedWatchers && this._computedWatchers[t];
					if (e) return e.key = t, e.dirty && e.evaluate(), Kt.target && e.depend(), e.value
				}
			}

			function U(e, r) {
				if (r) {
					var n = e._computedWatchers = Object.create(null),
						o = {
							computed: !0
						};
					Object.keys(r).forEach(function (i) {
						var a = r[i],
							s = "object" === (void 0 === a ? "undefined" : t(a)) ? a.get : a;
						s && "function" == typeof s || console.error('Getter is missing for computed property "' + i + '"'), n[i] = new he(e, s || function () {}, function () {}, o), "function" == typeof a ? (pe.get = W(i), pe.set = function () {}) : (pe.get = !1 !== a.cache ? W(i) : a.get, pe.set = a.set), Object.defineProperty(e, i, pe)
					})
				}
			}

			function Y(t) {
				for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];
				if (t.installed) return this;
				var n = t.install || t;
				bt(n) && n.apply(t, [this].concat(e)), t.installed = 1
			}

			function X(t) {
				void 0 === t && (t = {}), de.mixin = (de.mixin || []).concat(t)
			}

			function J(t, e, r) {
				var n = t.hooks[e],
					o = t.$app.hooks[e],
					i = r;
				return [n, o].forEach(function (e) {
					bt(e) && (i = e.call(t, i), _t(i) && (i = r))
				}), i
			}

			function z(t, e) {
				void 0 === e && (e = {}), t.hooks = e
			}

			function Q(t, e) {
				var r = {};
				if (yt(e) && (r = [e]), gt(e)) e.forEach(function (n) {
					r[n] = {
						type: null,
						observer: ge(t, e, n)
					}
				});
				else if (wt(e))
					for (var n in e) {
						var o = e[n],
							i = {};
						_t(o.type) ? i.type = null : gt(o.type) ? (i.type = null, console.warn('In mini-app, mutiple type is not allowed. The type of "' + n + '" will changed to "null"')) : -1 === me.indexOf(o.type) ? (i.type = null, console.warn('Type property of props "' + n + '" is invalid. Only String/Number/Boolean/Object/Array/null is allowed in weapp Component')) : i.type = o.type, _t(o.default) || (bt(o.default) ? i.value = o.default.call(t) : i.value = o.default), i.observer = ge(t, e, o), r[n] = i
					}
				Object.keys(r).forEach(function (t) {}), t.properties = r
			}

			function q(t, e) {
				t._props = {}, e && (Object.keys(e).forEach(function (r) {
					t._props[r] = e[r].value, G(t, "_props", r)
				}), L({
					vm: t,
					key: "",
					value: t._props,
					root: !0
				}))
			}

			function Z(t, e, r) {
				t._init = !1;
				var n = null;
				return new he(t, function () {
					if (t._init || e.forEach(function (e) {
							return p(t[e])
						}), t.$dirty.length() || n) {
						var o = t.$dirty.get("key");
						r.forEach(function (e) {
							return t[e]
						});
						var i = t.$dirty.pop();
						Object.keys(o).forEach(function (e) {
							return p(t[e])
						}), t._init && (i = J(t, "before-setData", i)), (i || n) && (t._init ? n ? (t.$wx.setData(Object.assign(n, i || {}), g), n = null) : t.$wx.setData(i, g) : (null === n && (n = {}), Object.assign(n, i)))
					}
					t._init = !0
				}, function () {}, null, !0)
			}

			function tt(t, e) {
				e && Object.keys(e).forEach(function (r) {
					t[r] = e[r]
				})
			}

			function et(t, e) {
				t.methods = {};
				var r = t.methods;
				r._initComponent = function (t) {
					var e = t.detail,
						r = t.target.dataset,
						n = r.ref,
						o = r.wpyEvt,
						i = this.$wepy;
					return i.$children.push(e), n && (i.$refs[n] && Nt('duplicate ref "' + n + '" will be covered by the last instance.\n', i), i.$refs[n] = e), e.$evtId = o, e.$parent = i, e.$app = i.$app, e.$root = i.$root, i
				}, r._proxy = be, e && Object.keys(e).forEach(function (t) {
					r[t] = e[t]
				})
			}

			function rt(t) {
				var e = t.$parent,
					r = e.$rel;
				t._events = {};
				var n = r.info.on,
					o = t.$evtId;
				o && n[o].forEach(function (n) {
					t.$on(n, function () {
						r.handlers[o][n].apply(e, arguments)
					})
				})
			}

			function nt(t, e, r) {
				void 0 === r && (r = {}), t.onLaunch = function () {
					for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
					var o = new ve;
					return Ee = o, o.$options = e, o.$route = {}, o.$rel = r, o.$wx = this, this.$wepy = o, z(o, e.hooks), tt(o, e.methods), Ce(o, o.$options, "onLaunch", t)
				}, Ae(Ct, r, "app").forEach(function (r) {
					!t[r] && e[r] && (bt(e[r]) || gt(e[r])) && (t[r] = function () {
						for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
						return Ce(Ee, Ee.$options, r, t)
					})
				})
			}

			function ot(t, e, r, n) {
				var o = n ? fe : ye;
				t.created = function () {
					for (var i = [], a = arguments.length; a--;) i[a] = arguments[a];
					var s = new o;
					return s.$dirty = new we("path"), s.$children = [], s.$refs = {}, this.$wepy = s, s.$wx = this, s.$is = this.is, s.$options = e, s.$rel = r, s._watchers = [], n || (s.$root = s, s.$app = Ee), "custom-tab-bar/index" === this.is && (s.$app = Ee, s.$parent = Ee), s.$id = ++Oe + (n ? ".1" : ".0"), Ce(s, s.$options, "beforeCreate", i), z(s, e.hooks), q(s, t.properties), K(s, t.data, n), tt(s, e.methods), U(s, e.computed, !0), F(s, e.watch), Z(s, Object.keys(s._data).concat(Object.keys(s._props)).concat(Object.keys(s._computedWatchers || {})), Object.keys(s._computedWatchers || {})), Ce(s, s.$options, "created", i)
				}, n ? t.attached = function () {
					for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];
					var n = t.properties || {},
						o = this.properties,
						i = this.$wepy;
					return this.triggerEvent("_init", i), i.$forceUpdate(), rt(i), Object.keys(n).forEach(function (t) {
						return i[t] = o[t]
					}), Ce(i, i.$options, "attached", e)
				} : (t.attached = function () {
					for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
					var n = this.$wepy,
						o = n.$app,
						i = getCurrentPages(),
						a = i[i.length - 1],
						s = a.__route__,
						u = a.__wxWebviewId__,
						c = r.refs || [],
						h = wx.createSelectorQuery();
					return c.forEach(function (t) {
						var e = t.id,
							r = t.ref,
							o = e.name,
							i = r.name,
							a = "#" + o;
						e.bind && (o = n[e.name], a = "#" + o, n.$watch(e.name, function (t) {
							a = "#" + (o = t), n.$refs[i] = h.select(a)
						})), r.bind && (i = n[r.name], n.$watch(r.name, function (t, e) {
							i = t, n.$refs[e] = null, n.$refs[t] = h.select(a)
						})), n.$refs[i] = h.select(a)
					}), n.$forceUpdate(), o.$route.path !== s && (o.$route.path = s, o.$route.webViewId = u, n.routed && n.routed()), Ce(n, n.$options, "attached", t)
				}, Ae(At, r, "page").forEach(function (r) {
					!t[r] && e[r] && (bt(e[r]) || gt(e[r])) && (t.methods[r] = function () {
						for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
						return Ce(this.$wepy, this.$wepy.$options, r, t)
					})
				})), Ae(xt, r, "component").forEach(function (r) {
					t[r] || "beforeCreate" === r || !bt(e[r]) && !gt(e[r]) || (t[r] = function () {
						for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
						return Ce(this.$wepy, this.$wepy.$options, r, t)
					})
				})
			}

			function it(t) {
				return $e || ut(), $e[t] ? $e[t] : at
			}

			function at(t, e, r, n) {
				t[r] || (t[r] = n)
			}

			function st(t, e) {
				return t && e ? Object.assign({}, t, e) : t || e
			}

			function ut() {
				if ($e) return $e;
				($e = xe.optionMergeStrategies).data = $e.props = $e.methods = $e.computed = $e.watch = $e.hooks = function (t, e, r, n) {
					e[r] = st(e[r], n)
				}, kt.forEach(function (t) {
					$e[t] || ($e[t] = function (t, e, r, n) {
						e[r] ? e[r] = [n].concat(e[r]) : e[r] = gt(n) ? n : [n]
					})
				})
			}

			function ct(t, e, r) {
				if (r || de.mixin)
					if (ke || (r = (de.mixin || []).concat(r), ke = !0), gt(r)) r.forEach(function (r) {
						return ct(t, e, r)
					}), ke = !1;
					else {
						$e || ut();
						for (var n in r) {
							o = it(n);
							var o = $e[n] || at;
							o(t, e, n, r[n])
						}
					}
			}

			function ht(t, e) {
				e || (e = {}), t.relations = e
			}

			function ft(t, e) {
				var r = {};
				return ct(r, t, t.mixins), nt(r, t, e), App(r)
			}

			function pt(t, e) {
				void 0 === t && (t = {});
				var r = {
					externalClasses: t.externalClasses || [],
					options: t.options || {}
				};
				return ct(r, t, t.mixins), t.properties ? (r.properties = t.properties, t.props && console.warn("props will be ignore, if properties is set")) : t.props && Q(r, t.props), et(r, t.methods, !0), H(r, t.data, !0), ht(r, t.relations), ot(r, t, e, !0), Component(r)
			}

			function lt(t, e) {
				void 0 === t && (t = {});
				var r = {
					externalClasses: t.externalClasses || [],
					options: t.options || {}
				};
				return ct(r, t, t.mixins), t.properties ? (r.properties = t.properties, t.props && console.warn("props will be ignore, if properties is set")) : t.props && Q(r, t.props), et(r, t.methods), H(r, t.data), ot(r, t, e), Component(r)
			}
			var dt, vt = "__proto__" in {};
			dt = "undefined" != typeof Set && o(Set) ? Set : function () {
				function t() {
					this.set = Object.create(null)
				}
				return t.prototype.has = function (t) {
					return !0 === this.set[t]
				}, t.prototype.add = function (t) {
					this.set[t] = !0
				}, t.prototype.clear = function () {
					this.set = Object.create(null)
				}, t
			}();
			var yt = function (t) {
					return "string" == typeof t
				},
				mt = function (t) {
					return "number" == typeof t
				},
				gt = Array.isArray,
				_t = function (t) {
					return void 0 === t
				},
				bt = function (t) {
					return "function" == typeof t
				},
				wt = i,
				Et = Object.prototype.toString,
				Ot = Object.prototype.hasOwnProperty,
				Ct = ["onLaunch", "onShow", "onHide", "onError", "onPageNotFound"],
				At = ["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize"],
				xt = ["beforeCreate", "created", "attached", "ready", "moved", "detached"],
				kt = [].concat(Ct).concat(At).concat(xt),
				$t = {},
				Nt = u,
				Pt = function (t) {
					return 'Found in component: "' + t.$is + '"'
				},
				Lt = "undefined" != typeof console;
			Nt = function (t, e) {
				Lt && !$t.silent && console.error("[WePY warn]: " + t + (e ? Pt(e) : ""))
			};
			var Mt, Dt, jt = [],
				Tt = !1,
				St = !1;
			if ("undefined" != typeof setImmediate && o(setImmediate)) Dt = function () {
				setImmediate(y)
			};
			else if ("undefined" == typeof MessageChannel || !o(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Dt = function () {
				setTimeout(y, 0)
			};
			else {
				var Bt = new MessageChannel,
					It = Bt.port2;
				Bt.port1.onmessage = y, Dt = function () {
					It.postMessage(1)
				}
			}
			if ("undefined" != typeof Promise && o(Promise)) {
				var Rt = Promise.resolve();
				Mt = function () {
					Rt.then(y)
				}
			} else Mt = Dt;
			var Vt = [],
				Gt = /[^\w.$]/,
				Ht = 0,
				Kt = function () {
					this.id = Ht++, this.subs = []
				};
			Kt.prototype.addSub = function (t) {
				this.subs.push(t)
			}, Kt.prototype.removeSub = function (t) {
				b(this.subs, t)
			}, Kt.prototype.depend = function () {
				Kt.target && Kt.target.addDep(this)
			}, Kt.prototype.notify = function () {
				for (var t = this.subs.slice(), e = 0, r = t.length; e < r; e++) t[e].update()
			}, Kt.target = null;
			var Ft = [],
				Wt = function (t, e) {
					return mt(t) ? e + "[" + t + "]" : e + "." + t
				},
				Ut = function (t) {
					return i(t) && s(t, "__ob__") ? t.__ob__.op : null
				},
				Yt = function (t, e, r) {
					if (this.ob = e, r) {
						var n = k(t, r.pathKeys, r.pathMap),
							o = n.combinePathKeys,
							i = n.combinePathMap;
						this.pathKeys = o, this.pathMap = i
					} else this.pathKeys = null, this.pathMap = null
				};
			Yt.prototype.traverseOp = function (t, e, r, n) {
				for (var o = this, i = k(t, e, r), a = i.combinePathMap, s = i.combinePathKeys, u = [], c = {}, h = !1, f = 0; f < s.length; f++) {
					var p = n(a[s[f]], o);
					p && (h = !0, u.push(p.path), c[p.path] = p)
				}
				if (h) {
					var l = this.ob.value;
					if (Array.isArray(l))
						for (var d = 0; d < l.length; d++) {
							var v = Ut(l[d]);
							v && v.traverseOp(d, u, c, n)
						} else
							for (var y = Object.keys(l), m = 0; m < y.length; m++) {
								var g = y[m],
									_ = Ut(l[g]);
								_ && _.traverseOp(g, u, c, n)
							}
				}
			}, Yt.prototype.addPath = function (t) {
				this.pathKeys.push(t.path), this.pathMap[t.path] = t
			}, Yt.prototype.delPath = function (t) {
				b(this.pathKeys, t), delete this.pathMap[t]
			};
			var Xt = Array.prototype,
				Jt = Object.create(Xt);
			["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
				var e = Xt[t];
				w(Jt, t, function () {
					for (var r = this, n = [], o = arguments.length; o--;) n[o] = arguments[o];
					var i = this.length;
					if (i > 0) switch (t) {
						case "pop":
							$(i - 1, this[i - 1], this);
							break;
						case "shift":
							$(0, this[0], this);
							break;
						case "splice":
						case "sort":
						case "reverse":
							for (var a = 0; a < this.length; a++) $(a, r[a], r)
					}
					var s = e.apply(this, n),
						u = this.__ob__,
						c = u.vm;
					if (c.$dirty)
						if ("push" === t) {
							var h = u.value.length - 1;
							c.$dirty.set(u.op, h, u.value[h])
						} else c.$dirty.set(u.op, null, u.value);
					return u.observeArray(u.key, u.value), u.dep.notify(), s
				})
			});
			var zt = Object.getOwnPropertyNames(Jt),
				Qt = {
					shouldConvert: !0
				},
				qt = function (t) {
					var e = t.vm,
						r = t.key,
						n = t.value,
						o = t.parent;
					this.value = n, this.dep = new Kt, this.vmCount = 0, this.vm = e, this.op = new Yt(r, this, o && o.__ob__ && o.__ob__.op), w(n, "__ob__", this), Array.isArray(n) ? ((vt ? N : P)(n, Jt, zt), this.observeArray(r, n)) : this.walk(r, n)
				};
			qt.prototype.walk = function (t, e) {
				for (var r = this, n = Object.keys(e), o = 0; o < n.length; o++) M({
					vm: r.vm,
					obj: e,
					key: n[o],
					value: e[n[o]],
					parent: e
				})
			}, qt.prototype.observeArray = function (t, e) {
				for (var r = this, n = 0, o = e.length; n < o; n++) L({
					vm: r.vm,
					key: n,
					value: e[n],
					parent: e
				})
			}, qt.prototype.hasPath = function (t) {
				for (var e = this.vm, r = "", n = 0; n < t.length;) {
					if ("." !== t[n] && "[" !== t[n] && "]" !== t[n]) r += t[n];
					else if (0 !== r.length && (e = e[r], r = "", !i(e))) return !1;
					n++
				}
				return !0
			}, qt.prototype.isPathEq = function (t, e) {
				for (var r = this.vm, n = "", o = 0; o < t.length;) {
					if ("." !== t[o] && "[" !== t[o] && "]" !== t[o]) n += t[o];
					else if (0 !== n.length && (r = r[n], n = "", !i(r))) return !1;
					o++
				}
				return 0 !== n.length && (r = r[n]), e === r
			};
			var Zt = function () {
				this._events = {}
			};
			Zt.prototype.$set = function (t, e, r) {
				return D(this, t, e, r)
			}, Zt.prototype.$delete = function (t, e) {
				return j(t, e)
			}, Zt.prototype.$on = function (t, e) {
				var r = this;
				return gt(t) ? t.forEach(function (t) {
					yt(t) ? r.$on(t, e) : wt(t) && r.$on(t.event, t.fn)
				}) : (this._events[t] || (this._events[t] = [])).push(e), this
			}, Zt.prototype.$once = function () {}, Zt.prototype.$off = function (t, e) {
				var r = this;
				if (!t && !e) return this._events = Object.create(null), this;
				if (gt(t)) return t.forEach(function (t) {
					yt(t) ? r.$off(t, e) : wt(t) && r.$off(t.event, t.fn)
				}), this;
				if (!this._events[t]) return this;
				if (!e) return this._events[t] = null, this;
				if (e)
					for (var n = this._events[t], o = n.length; o--;) {
						var i = n[o];
						if (i === e || i.fn === e) {
							n.splice(o, 1);
							break
						}
					}
				return this
			}, Zt.prototype.$emit = function (t) {
				var e = this,
					r = this,
					n = t.toLowerCase(),
					o = this._events[t] || [];
				n !== t && r._events[n];
				var i = h(arguments, 1);
				return o.forEach(function (n) {
					try {
						n.apply(e, i)
					} catch (e) {
						l(e, r, 'event handler for "' + t + '"')
					}
				}), this
			};
			var te = new dt,
				ee = 100,
				re = [],
				ne = [],
				oe = {},
				ie = {},
				ae = !1,
				se = !1,
				ue = 0,
				ce = 0,
				he = function (t, e, r, n, o) {
					this.vm = t, o && (t._watcher = this), t._watchers.push(this), n ? (this.deep = !!n.deep, this.user = !!n.user, this.computed = !!n.computed, this.sync = !!n.sync) : this.deep = this.user = this.computed = this.sync = !1, this.cb = r, this.id = ++ce, this.active = !0, this.dirty = this.computed, this.deps = [], this.newDeps = [], this.depIds = new dt, this.newDepIds = new dt, this.isRenderWatcher = o, this.expression = e.toString(), "function" == typeof e ? this.getter = e : (this.getter = E(e), this.getter || (this.getter = function () {}, Nt('Failed watching path: "' + e + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', t))), this.value = this.computed ? void 0 : this.get()
				};
			he.prototype.get = function () {
				O(this);
				var t, e = this.vm;
				try {
					t = this.getter.call(e, e)
				} catch (t) {
					if (!this.user) throw t;
					l(t, e, 'getter for watcher "' + this.expression + '"')
				} finally {
					this.deep && S(t), C(), this.isRenderWatcher || this.cleanupDeps()
				}
				return t
			}, he.prototype.addDep = function (t) {
				var e = t.id;
				this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
			}, he.prototype.cleanupDeps = function () {
				for (var t = this, e = this.deps.length; e--;) {
					var r = t.deps[e];
					t.newDepIds.has(r.id) || r.removeSub(t)
				}
				var n = this.depIds;
				this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
			}, he.prototype.update = function () {
				this.computed ? this.dirty = !0 : this.sync ? this.run() : V(this)
			}, he.prototype.run = function () {
				if (this.active) {
					var t = this.get();
					if (t !== this.value || i(t) || this.deep) {
						var e = this.value;
						if (this.value = t, this.user) try {
							this.cb.call(this.vm, t, e)
						} catch (t) {
							l(t, this.vm, 'callback for watcher "' + this.expression + '"')
						} else this.cb.call(this.vm, t, e)
					}
				}
			}, he.prototype.evaluate = function () {
				if (this.value = this.get(), this.vm.$dirty) {
					var t = this._computedWatchers && this._computedWatchers[this.key] ? this.vm._computedWatchers[this.key].value : this.value;
					this.vm.$dirty.push(this.key, this.key, t, this.value)
				}
				return this.dirty = !1, this.value
			}, he.prototype.depend = function () {
				var t = this;
				if (Kt.target)
					for (var e = this.deps.length; e--;) t.deps[e].depend()
			}, he.prototype.teardown = function () {
				var t = this;
				if (this.active) {
					this.vm._isBeingDestroyed || b(this.vm._watchers, this);
					for (var e = this.deps.length; e--;) t.deps[e].removeSub(t);
					this.active = !1
				}
			};
			var fe = function (t) {
				function e() {
					t.apply(this, arguments)
				}
				return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.$watch = function (t, e, r) {
					var n = this,
						o = this;
					if (gt(e) && e.forEach(function (e) {
							n.$watch(t, e, r)
						}), a(e)) {
						var i = e;
						return r = i, "string" == typeof (i = i.handler) && (i = this[i]), this.$watch(t, i, r)
					}(r = r || {}).user = !0;
					var s = new he(o, t, e, r);
					return r.immediate && e.call(o, s.value),
						function () {
							s.teardown()
						}
				}, e.prototype.$forceUpdate = function () {
					this._watcher && this._watcher.update()
				}, e
			}(Zt);
			fe.prototype.$nextTick = _;
			var pe = {
					enumerable: !0,
					configurable: !0,
					get: u,
					set: u
				},
				le = function (t) {
					function e(e) {
						void 0 === e && (e = {});
						var r = new t;
						return e.data && K(r, e.data), F(r), U(r, e.computed), r
					}
					return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
				}(fe),
				de = Object.create(null),
				ve = function (t) {
					function e() {
						t.call(this)
					}
					return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
				}(Zt),
				ye = function (t) {
					function e() {
						t.apply(this, arguments)
					}
					return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.$launch = function (t, e) {
						this.$route("reLaunch", t, e)
					}, e.prototype.$navigate = function (t, e) {
						this.$route("navigate", t, e)
					}, e.prototype.$redirect = function (t, e) {
						this.$route("redirect", t, e)
					}, e.prototype.$back = function (t) {
						return void 0 === t && (t = {}), mt(t) && (t = {
							delta: t
						}), t.delta || (t.delta = 1), wx.navigateBack(t)
					}, e.prototype.$route = function (t, e, r) {
						void 0 === r && (r = {});
						var n;
						if (yt(e)) {
							var o = [];
							if (wt(r))
								for (var i in r) _t(r[i]) || o.push(i + "=" + encodeURIComponent(r[i]));
							o.length && (e = e + "?" + o.join("&")), n = {
								url: e
							}
						} else n = e;
						var a = wx[t] || wx[t + "To"];
						if (bt(a)) return a(n)
					}, e
				}(fe),
				me = [String, Number, Boolean, Object, Array, null],
				ge = function () {
					return function (t, e, r) {
						var n = this.$wepy;
						if (!(r.length > 1)) {
							var o = t;
							"function" == typeof o && (o = o.call(n)), n[r[0]] = o
						}
					}
				},
				_e = function (t) {
					var e = t.detail,
						r = t.target,
						n = t.currentTarget;
					this.$wx = t, this.type = t.type, this.timeStamp = t.timeStamp, e && (this.x = e.x, this.y = e.y), this.target = r, this.currentTarget = n, this.touches = t.touches, this.changedTouches = t.changedTouches
				},
				be = function (t) {
					var e = this.$wepy,
						r = t.type,
						n = (t.currentTarget || t.target).dataset,
						o = n.wpyEvt,
						i = n.modelId,
						a = e.$rel || {},
						s = (a.handlers ? a.handlers[o] || {} : {})[r],
						u = a.models[i];
					if (s || u) {
						for (var c = new _e(t), h = 0, f = [], p = [], l = !1, d = !u; h++ < 26 && (!l || !d);) {
							var v = String.fromCharCode(64 + h);
							if (!l) {
								var y = "wpy" + r + v;
								y in n ? f.push(n[y]) : l = !0
							}
							if (!d && u) {
								var m = "model" + v;
								m in n ? p.push(n[m]) : d = !0
							}
						}
						if (u && r === u.type && bt(u.handler) && u.handler.call(e, t.detail.value, p), bt(s)) {
							if (!1 === J(e, "before-event", {
									event: c,
									params: f.concat(c)
								})) return;
							return s.apply(e, f.concat(c))
						}
						if (!u) throw new Error("Unrecognized event")
					}
				},
				we = function (t) {
					this.reset(), this.type = t || "path"
				};
			we.prototype.push = function (t, e, r, n) {
				void 0 !== n && (this._keys[t] = r, this._path[e] = n, this._length++)
			}, we.prototype.pop = function () {
				var t = Object.create(null);
				return "path" === this.type ? t = this._path : "key" === this.type && (t = this._keys), this.reset(), t
			}, we.prototype.get = function (t) {
				return "path" === t ? this._path : this._keys
			}, we.prototype.set = function (t, e, r) {
				var n, o;
				if (null != e) {
					var i = k(e, t.pathKeys, t.pathMap);
					o = i.combinePathKeys, n = i.combinePathMap
				} else o = t.pathKeys, n = t.pathMap;
				var a = n[o[0]],
					s = a.root,
					u = a.path;
				this.push(s, u, s === u ? r : t.ob.vm[s], r)
			}, we.prototype.reset = function () {
				return this._keys = {}, this._path = {}, this._length = 0, this
			}, we.prototype.length = function () {
				return this._length
			};
			var Ee, Oe = 0,
				Ce = function (t, e, r, n) {
					var o, i = e[r];
					if (bt(i)) o = e[r].apply(t, n);
					else if (gt(i))
						for (var a in i) bt(i[a]) && (o = i[a].apply(t, n));
					return o
				},
				Ae = function (t, e, r) {
					var n = t.concat([]);
					if (e && e.lifecycle && e.lifecycle[r]) {
						var o = [];
						bt(e.lifecycle[r]) && (o = e.lifecycle[r].call(null, n)), o.forEach(function (t) {
							n.indexOf(t) > -1 ? Nt("'" + t + "' is already implemented in current version, please remove it from your lifecycel config") : n.push(t)
						})
					}
					return n
				},
				xe = {
					optionMergeStrategies: {},
					constants: {
						WEAPP_LIFECYCLE: kt,
						WEAPP_APP_LIFECYCLE: Ct,
						WEAPP_PAGE_LIFECYCLE: At,
						WEAPP_COMPONENT_LIFECYCLE: xt
					}
				},
				ke = !1,
				$e = null,
				Ne = function (t) {
					return t.use = Y, t.mixin = X, t.set = function (e, r, n) {
						D.apply(t, [void 0, e, r, n])
					}, t.delete = j, t.observe = L, t.nextTick = _, t.app = ft, t.page = lt, t.component = pt, t
				}(le);
			Ne.config = xe, Ne.global = de, Ne.version = "2.0.0-alpha.11", e.exports = Ne
		}, function (e, r, n) {
			! function (r) {
				function n(t, e, r, n) {
					var o = e && e.prototype instanceof i ? e : i,
						a = Object.create(o.prototype),
						s = new d(n || []);
					return a._invoke = h(t, r, s), a
				}

				function o(t, e, r) {
					try {
						return {
							type: "normal",
							arg: t.call(e, r)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}

				function i() {}

				function a() {}

				function s() {}

				function u(t) {
					["next", "throw", "return"].forEach(function (e) {
						t[e] = function (t) {
							return this._invoke(e, t)
						}
					})
				}

				function c(e) {
					function r(n, i, a, s) {
						var u = o(e[n], e, i);
						if ("throw" !== u.type) {
							var c = u.arg,
								h = c.value;
							return h && "object" === (void 0 === h ? "undefined" : t(h)) && _.call(h, "__await") ? Promise.resolve(h.__await).then(function (t) {
								r("next", t, a, s)
							}, function (t) {
								r("throw", t, a, s)
							}) : Promise.resolve(h).then(function (t) {
								c.value = t, a(c)
							}, s)
						}
						s(u.arg)
					}
					var n;
					this._invoke = function (t, e) {
						function o() {
							return new Promise(function (n, o) {
								r(t, e, n, o)
							})
						}
						return n = n ? n.then(o, o) : o()
					}
				}

				function h(t, e, r) {
					var n = x;
					return function (i, a) {
						if (n === $) throw new Error("Generator is already running");
						if (n === N) {
							if ("throw" === i) throw a;
							return y()
						}
						for (r.method = i, r.arg = a;;) {
							var s = r.delegate;
							if (s) {
								var u = f(s, r);
								if (u) {
									if (u === P) continue;
									return u
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if (n === x) throw n = N, r.arg;
								r.dispatchException(r.arg)
							} else "return" === r.method && r.abrupt("return", r.arg);
							n = $;
							var c = o(t, e, r);
							if ("normal" === c.type) {
								if (n = r.done ? N : k, c.arg === P) continue;
								return {
									value: c.arg,
									done: r.done
								}
							}
							"throw" === c.type && (n = N, r.method = "throw", r.arg = c.arg)
						}
					}
				}

				function f(t, e) {
					var r = t.iterator[e.method];
					if (r === m) {
						if (e.delegate = null, "throw" === e.method) {
							if (t.iterator.return && (e.method = "return", e.arg = m, f(t, e), "throw" === e.method)) return P;
							e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
						}
						return P
					}
					var n = o(r, t.iterator, e.arg);
					if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, P;
					var i = n.arg;
					return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = m), e.delegate = null, P) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, P)
				}

				function p(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function l(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function d(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(p, this), this.reset(!0)
				}

				function v(t) {
					if (t) {
						var e = t[w];
						if (e) return e.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var r = -1,
								n = function e() {
									for (; ++r < t.length;)
										if (_.call(t, r)) return e.value = t[r], e.done = !1, e;
									return e.value = m, e.done = !0, e
								};
							return n.next = n
						}
					}
					return {
						next: y
					}
				}

				function y() {
					return {
						value: m,
						done: !0
					}
				}
				var m, g = Object.prototype,
					_ = g.hasOwnProperty,
					b = "function" == typeof Symbol ? Symbol : {},
					w = b.iterator || "@@iterator",
					E = b.asyncIterator || "@@asyncIterator",
					O = b.toStringTag || "@@toStringTag",
					C = "object" === (void 0 === e ? "undefined" : t(e)),
					A = r.regeneratorRuntime;
				if (A) C && (e.exports = A);
				else {
					(A = r.regeneratorRuntime = C ? e.exports : {}).wrap = n;
					var x = "suspendedStart",
						k = "suspendedYield",
						$ = "executing",
						N = "completed",
						P = {},
						L = {};
					L[w] = function () {
						return this
					};
					var M = Object.getPrototypeOf,
						D = M && M(M(v([])));
					D && D !== g && _.call(D, w) && (L = D);
					var j = s.prototype = i.prototype = Object.create(L);
					a.prototype = j.constructor = s, s.constructor = a, s[O] = a.displayName = "GeneratorFunction", A.isGeneratorFunction = function (t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name))
					}, A.mark = function (t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : (t.__proto__ = s, O in t || (t[O] = "GeneratorFunction")), t.prototype = Object.create(j), t
					}, A.awrap = function (t) {
						return {
							__await: t
						}
					}, u(c.prototype), c.prototype[E] = function () {
						return this
					}, A.AsyncIterator = c, A.async = function (t, e, r, o) {
						var i = new c(n(t, e, r, o));
						return A.isGeneratorFunction(e) ? i : i.next().then(function (t) {
							return t.done ? t.value : i.next()
						})
					}, u(j), j[O] = "Generator", j[w] = function () {
						return this
					}, j.toString = function () {
						return "[object Generator]"
					}, A.keys = function (t) {
						var e = [];
						for (var r in t) e.push(r);
						return e.reverse(),
							function r() {
								for (; e.length;) {
									var n = e.pop();
									if (n in t) return r.value = n, r.done = !1, r
								}
								return r.done = !0, r
							}
					}, A.values = v, d.prototype = {
						constructor: d,
						reset: function (t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(l), !t)
								for (var e in this) "t" === e.charAt(0) && _.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval
						},
						dispatchException: function (t) {
							function e(e, n) {
								return i.type = "throw", i.arg = t, r.next = e, n && (r.method = "next", r.arg = m), !!n
							}
							if (this.done) throw t;
							for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
								var o = this.tryEntries[n],
									i = o.completion;
								if ("root" === o.tryLoc) return e("end");
								if (o.tryLoc <= this.prev) {
									var a = _.call(o, "catchLoc"),
										s = _.call(o, "finallyLoc");
									if (a && s) {
										if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
										if (this.prev < o.finallyLoc) return e(o.finallyLoc)
									} else if (a) {
										if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < o.finallyLoc) return e(o.finallyLoc)
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var n = this.tryEntries[r];
								if (n.tryLoc <= this.prev && _.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
									var o = n;
									break
								}
							}
							o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
							var i = o ? o.completion : {};
							return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, P) : this.complete(i)
						},
						complete: function (t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), P
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), l(r), P
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										l(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function (t, e, r) {
							return this.delegate = {
								iterator: v(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = m), P
						}
					}
				}
			}(function () {
				return this
			}() || Function("return this")())
		}, function (t, e, r) {
			var n = function () {
					return this
				}() || Function("return this")(),
				o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
				i = o && n.regeneratorRuntime;
			if (n.regeneratorRuntime = void 0, t.exports = r(1), o) n.regeneratorRuntime = i;
			else try {
				delete n.regeneratorRuntime
			} catch (t) {
				n.regeneratorRuntime = void 0
			}
		}, function (o, i, a) {
			function s(t) {
				function e() {
					var t = this.$options;
					t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store)
				}
				if (Number(t.version.split(".")[0]) >= 2) t.mixin({
					beforeCreate: e
				});
				else {
					var r = t.prototype._init;
					t.prototype._init = function (t) {
						void 0 === t && (t = {}), t.init = t.init ? [e].concat(t.init) : e, r.call(this, t)
					}
				}
			}

			function u(t) {
				j && (t._devtoolHook = j, j.emit("vuex:init", t), j.on("vuex:travel-to-state", function (e) {
					t.replaceState(e)
				}), t.subscribe(function (t, e) {
					j.emit("vuex:mutation", t, e)
				}))
			}

			function c(t, e) {
				Object.keys(t).forEach(function (r) {
					return e(t[r], r)
				})
			}

			function h(e) {
				return null !== e && "object" === (void 0 === e ? "undefined" : t(e))
			}

			function f(t) {
				return t && "function" == typeof t.then
			}

			function p(t, e) {
				if (!t) throw new Error("[vuex] " + e)
			}

			function l(t, e) {
				return function () {
					return t(e)
				}
			}

			function d(t, e, r) {
				if ("production" !== n.env.NODE_ENV && v(t, r), e.update(r), r.modules)
					for (var o in r.modules) {
						if (!e.getChild(o)) return void("production" !== n.env.NODE_ENV && console.warn("[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"));
						d(t.concat(o), e.getChild(o), r.modules[o])
					}
			}

			function v(t, e) {
				Object.keys(V).forEach(function (r) {
					if (e[r]) {
						var n = V[r];
						c(e[r], function (e, o) {
							p(n.assert(e), y(t, r, o, e, n.expected))
						})
					}
				})
			}

			function y(t, e, r, n, o) {
				var i = e + " should be " + o + ' but "' + e + "." + r + '"';
				return t.length > 0 && (i += ' in module "' + t.join(".") + '"'), i += " is " + JSON.stringify(n) + "."
			}

			function m(t, e) {
				return e.indexOf(t) < 0 && e.push(t),
					function () {
						var r = e.indexOf(t);
						r > -1 && e.splice(r, 1)
					}
			}

			function g(t, e) {
				t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);
				var r = t.state;
				b(t, r, [], t._modules.root, !0), _(t, r, e)
			}

			function _(t, e, r) {
				var n = t._vm;
				t.getters = {}, t._makeLocalGettersCache = Object.create(null);
				var o = {};
				c(t._wrappedGetters, function (e, r) {
					o[r] = l(e, t), Object.defineProperty(t.getters, r, {
						get: function () {
							return t._vm[r]
						},
						enumerable: !0
					})
				});
				var i = I.config.silent;
				I.config.silent = !0, t._vm = new I({
					data: {
						$$state: e
					},
					computed: o
				}), I.config.silent = i, t.strict && x(t), n && (r && t._withCommit(function () {
					n._data.$$state = null
				}), I.nextTick(function () {
					return n.$destroy()
				}))
			}

			function b(t, e, r, o, i) {
				var a = !r.length,
					s = t._modules.getNamespace(r);
				if (o.namespaced && (t._modulesNamespaceMap[s] && "production" !== n.env.NODE_ENV && console.error("[vuex] duplicate namespace " + s + " for the namespaced module " + r.join("/")), t._modulesNamespaceMap[s] = o), !a && !i) {
					var u = k(e, r.slice(0, -1)),
						c = r[r.length - 1];
					t._withCommit(function () {
						"production" !== n.env.NODE_ENV && c in u && console.warn('[vuex] state field "' + c + '" was overridden by a module with the same name at "' + r.join(".") + '"'), I.set(u, c, o.state)
					})
				}
				var h = o.context = w(t, s, r);
				o.forEachMutation(function (e, r) {
					O(t, s + r, e, h)
				}), o.forEachAction(function (e, r) {
					var n = e.root ? r : s + r,
						o = e.handler || e;
					C(t, n, o, h)
				}), o.forEachGetter(function (e, r) {
					A(t, s + r, e, h)
				}), o.forEachChild(function (n, o) {
					b(t, e, r.concat(o), n, i)
				})
			}

			function w(t, e, r) {
				var o = "" === e,
					i = {
						dispatch: o ? t.dispatch : function (r, o, i) {
							var a = $(r, o, i),
								s = a.payload,
								u = a.options,
								c = a.type;
							if (u && u.root || (c = e + c, "production" === n.env.NODE_ENV || t._actions[c])) return t.dispatch(c, s);
							console.error("[vuex] unknown local action type: " + a.type + ", global type: " + c)
						},
						commit: o ? t.commit : function (r, o, i) {
							var a = $(r, o, i),
								s = a.payload,
								u = a.options,
								c = a.type;
							u && u.root || (c = e + c, "production" === n.env.NODE_ENV || t._mutations[c]) ? t.commit(c, s, u) : console.error("[vuex] unknown local mutation type: " + a.type + ", global type: " + c)
						}
					};
				return Object.defineProperties(i, {
					getters: {
						get: o ? function () {
							return t.getters
						} : function () {
							return E(t, e)
						}
					},
					state: {
						get: function () {
							return k(t.state, r)
						}
					}
				}), i
			}

			function E(t, e) {
				if (!t._makeLocalGettersCache[e]) {
					var r = {},
						n = e.length;
					Object.keys(t.getters).forEach(function (o) {
						if (o.slice(0, n) === e) {
							var i = o.slice(n);
							Object.defineProperty(r, i, {
								get: function () {
									return t.getters[o]
								},
								enumerable: !0
							})
						}
					}), t._makeLocalGettersCache[e] = r
				}
				return t._makeLocalGettersCache[e]
			}

			function O(t, e, r, n) {
				(t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
					r.call(t, n.state, e)
				})
			}

			function C(t, e, r, n) {
				(t._actions[e] || (t._actions[e] = [])).push(function (e) {
					var o = r.call(t, {
						dispatch: n.dispatch,
						commit: n.commit,
						getters: n.getters,
						state: n.state,
						rootGetters: t.getters,
						rootState: t.state
					}, e);
					return f(o) || (o = Promise.resolve(o)), t._devtoolHook ? o.catch(function (e) {
						throw t._devtoolHook.emit("vuex:error", e), e
					}) : o
				})
			}

			function A(t, e, r, o) {
				t._wrappedGetters[e] ? "production" !== n.env.NODE_ENV && console.error("[vuex] duplicate getter key: " + e) : t._wrappedGetters[e] = function (t) {
					return r(o.state, o.getters, t.state, t.getters)
				}
			}

			function x(t) {
				t._vm.$watch(function () {
					return this._data.$$state
				}, function () {
					"production" !== n.env.NODE_ENV && p(t._committing, "do not mutate vuex store state outside mutation handlers.")
				}, {
					deep: !0,
					sync: !0
				})
			}

			function k(t, e) {
				return e.length ? e.reduce(function (t, e) {
					return t[e]
				}, t) : t
			}

			function $(e, r, o) {
				return h(e) && e.type && (o = r, r = e, e = e.type), "production" !== n.env.NODE_ENV && p("string" == typeof e, "expects string as the type, but found " + (void 0 === e ? "undefined" : t(e)) + "."), {
					type: e,
					payload: r,
					options: o
				}
			}

			function N(t) {
				I && t === I ? "production" !== n.env.NODE_ENV && console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.") : s(I = t)
			}

			function P(t) {
				return L(t) ? Array.isArray(t) ? t.map(function (t) {
					return {
						key: t,
						val: t
					}
				}) : Object.keys(t).map(function (e) {
					return {
						key: e,
						val: t[e]
					}
				}) : []
			}

			function L(t) {
				return Array.isArray(t) || h(t)
			}

			function M(t) {
				return function (e, r) {
					return "string" != typeof e ? (r = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, r)
				}
			}

			function D(t, e, r) {
				var o = t._modulesNamespaceMap[r];
				return "production" === n.env.NODE_ENV || o || console.error("[vuex] module namespace not found in " + e + "(): " + r), o
			}
			var j = (void 0 !== e ? e : void 0 !== r ? r : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__,
				T = function (t, e) {
					this.runtime = e, this._children = Object.create(null), this._rawModule = t;
					var r = t.state;
					this.state = ("function" == typeof r ? r() : r) || {}
				},
				S = {
					namespaced: {
						configurable: !0
					}
				};
			S.namespaced.get = function () {
				return !!this._rawModule.namespaced
			}, T.prototype.addChild = function (t, e) {
				this._children[t] = e
			}, T.prototype.removeChild = function (t) {
				delete this._children[t]
			}, T.prototype.getChild = function (t) {
				return this._children[t]
			}, T.prototype.update = function (t) {
				this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters)
			}, T.prototype.forEachChild = function (t) {
				c(this._children, t)
			}, T.prototype.forEachGetter = function (t) {
				this._rawModule.getters && c(this._rawModule.getters, t)
			}, T.prototype.forEachAction = function (t) {
				this._rawModule.actions && c(this._rawModule.actions, t)
			}, T.prototype.forEachMutation = function (t) {
				this._rawModule.mutations && c(this._rawModule.mutations, t)
			}, Object.defineProperties(T.prototype, S);
			var B = function (t) {
				this.register([], t, !1)
			};
			B.prototype.get = function (t) {
				return t.reduce(function (t, e) {
					return t.getChild(e)
				}, this.root)
			}, B.prototype.getNamespace = function (t) {
				var e = this.root;
				return t.reduce(function (t, r) {
					return e = e.getChild(r), t + (e.namespaced ? r + "/" : "")
				}, "")
			}, B.prototype.update = function (t) {
				d([], this.root, t)
			}, B.prototype.register = function (t, e, r) {
				var o = this;
				void 0 === r && (r = !0), "production" !== n.env.NODE_ENV && v(t, e);
				var i = new T(e, r);
				0 === t.length ? this.root = i : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i), e.modules && c(e.modules, function (e, n) {
					o.register(t.concat(n), e, r)
				})
			}, B.prototype.unregister = function (t) {
				var e = this.get(t.slice(0, -1)),
					r = t[t.length - 1];
				e.getChild(r).runtime && e.removeChild(r)
			};
			var I, R = {
					assert: function (t) {
						return "function" == typeof t
					},
					expected: "function"
				},
				V = {
					getters: R,
					mutations: R,
					actions: {
						assert: function (e) {
							return "function" == typeof e || "object" === (void 0 === e ? "undefined" : t(e)) && "function" == typeof e.handler
						},
						expected: 'function or object with "handler" function'
					}
				},
				G = function t(r) {
					var o = this;
					void 0 === r && (r = {}), !I && void 0 !== e && e.Vue && N(e.Vue), "production" !== n.env.NODE_ENV && (p(I, "must call Vue.use(Vuex) before creating a store instance."), p("undefined" != typeof Promise, "vuex requires a Promise polyfill in this browser."), p(this instanceof t, "store must be called with the new operator."));
					var i = r.plugins;
					void 0 === i && (i = []);
					var a = r.strict;
					void 0 === a && (a = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new B(r), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new I, this._makeLocalGettersCache = Object.create(null);
					var s = this,
						c = this,
						h = c.dispatch,
						f = c.commit;
					this.dispatch = function (t, e) {
						return h.call(s, t, e)
					}, this.commit = function (t, e, r) {
						return f.call(s, t, e, r)
					}, this.strict = a;
					var l = this._modules.root.state;
					b(this, l, [], this._modules.root), _(this, l), i.forEach(function (t) {
						return t(o)
					}), (void 0 !== r.devtools ? r.devtools : I.config.devtools) && u(this)
				},
				H = {
					state: {
						configurable: !0
					}
				};
			H.state.get = function () {
				return this._vm._data.$$state
			}, H.state.set = function (t) {
				"production" !== n.env.NODE_ENV && p(!1, "use store.replaceState() to explicit replace store state.")
			}, G.prototype.commit = function (t, e, r) {
				var o = this,
					i = $(t, e, r),
					a = i.type,
					s = i.payload,
					u = i.options,
					c = {
						type: a,
						payload: s
					},
					h = this._mutations[a];
				h ? (this._withCommit(function () {
					h.forEach(function (t) {
						t(s)
					})
				}), this._subscribers.forEach(function (t) {
					return t(c, o.state)
				}), "production" !== n.env.NODE_ENV && u && u.silent && console.warn("[vuex] mutation type: " + a + ". Silent option has been removed. Use the filter functionality in the vue-devtools")) : "production" !== n.env.NODE_ENV && console.error("[vuex] unknown mutation type: " + a)
			}, G.prototype.dispatch = function (t, e) {
				var r = this,
					o = $(t, e),
					i = o.type,
					a = o.payload,
					s = {
						type: i,
						payload: a
					},
					u = this._actions[i];
				if (u) {
					try {
						this._actionSubscribers.filter(function (t) {
							return t.before
						}).forEach(function (t) {
							return t.before(s, r.state)
						})
					} catch (t) {
						"production" !== n.env.NODE_ENV && (console.warn("[vuex] error in before action subscribers: "), console.error(t))
					}
					return (u.length > 1 ? Promise.all(u.map(function (t) {
						return t(a)
					})) : u[0](a)).then(function (t) {
						try {
							r._actionSubscribers.filter(function (t) {
								return t.after
							}).forEach(function (t) {
								return t.after(s, r.state)
							})
						} catch (t) {
							"production" !== n.env.NODE_ENV && (console.warn("[vuex] error in after action subscribers: "), console.error(t))
						}
						return t
					})
				}
				"production" !== n.env.NODE_ENV && console.error("[vuex] unknown action type: " + i)
			}, G.prototype.subscribe = function (t) {
				return m(t, this._subscribers)
			}, G.prototype.subscribeAction = function (t) {
				return m("function" == typeof t ? {
					before: t
				} : t, this._actionSubscribers)
			}, G.prototype.watch = function (t, e, r) {
				var o = this;
				return "production" !== n.env.NODE_ENV && p("function" == typeof t, "store.watch only accepts a function."), this._watcherVM.$watch(function () {
					return t(o.state, o.getters)
				}, e, r)
			}, G.prototype.replaceState = function (t) {
				var e = this;
				this._withCommit(function () {
					e._vm._data.$$state = t
				})
			}, G.prototype.registerModule = function (t, e, r) {
				void 0 === r && (r = {}), "string" == typeof t && (t = [t]), "production" !== n.env.NODE_ENV && (p(Array.isArray(t), "module path must be a string or an Array."), p(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, e), b(this, this.state, t, this._modules.get(t), r.preserveState), _(this, this.state)
			}, G.prototype.unregisterModule = function (t) {
				var e = this;
				"string" == typeof t && (t = [t]), "production" !== n.env.NODE_ENV && p(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function () {
					var r = k(e.state, t.slice(0, -1));
					I.delete(r, t[t.length - 1])
				}), g(this)
			}, G.prototype.hotUpdate = function (t) {
				this._modules.update(t), g(this, !0)
			}, G.prototype._withCommit = function (t) {
				var e = this._committing;
				this._committing = !0, t(), this._committing = e
			}, Object.defineProperties(G.prototype, H);
			var K = M(function (t, e) {
					var r = {};
					return "production" === n.env.NODE_ENV || L(e) || console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), P(e).forEach(function (e) {
						var n = e.key,
							o = e.val;
						r[n] = function () {
							var e = this.$store.state,
								r = this.$store.getters;
							if (t) {
								var n = D(this.$store, "mapState", t);
								if (!n) return;
								e = n.context.state, r = n.context.getters
							}
							return "function" == typeof o ? o.call(this, e, r) : e[o]
						}, r[n].vuex = !0
					}), r
				}),
				F = M(function (t, e) {
					var r = {};
					return "production" === n.env.NODE_ENV || L(e) || console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), P(e).forEach(function (e) {
						var n = e.key,
							o = e.val;
						r[n] = function () {
							for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];
							var n = this.$store.commit;
							if (t) {
								var i = D(this.$store, "mapMutations", t);
								if (!i) return;
								n = i.context.commit
							}
							return "function" == typeof o ? o.apply(this, [n].concat(e)) : n.apply(this.$store, [o].concat(e))
						}
					}), r
				}),
				W = M(function (t, e) {
					var r = {};
					return "production" === n.env.NODE_ENV || L(e) || console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), P(e).forEach(function (e) {
						var o = e.key,
							i = e.val;
						i = t + i, r[o] = function () {
							if (!t || D(this.$store, "mapGetters", t)) {
								if ("production" === n.env.NODE_ENV || i in this.$store.getters) return this.$store.getters[i];
								console.error("[vuex] unknown getter: " + i)
							}
						}, r[o].vuex = !0
					}), r
				}),
				U = M(function (t, e) {
					var r = {};
					return "production" === n.env.NODE_ENV || L(e) || console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), P(e).forEach(function (e) {
						var n = e.key,
							o = e.val;
						r[n] = function () {
							for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];
							var n = this.$store.dispatch;
							if (t) {
								var i = D(this.$store, "mapActions", t);
								if (!i) return;
								n = i.context.dispatch
							}
							return "function" == typeof o ? o.apply(this, [n].concat(e)) : n.apply(this.$store, [o].concat(e))
						}
					}), r
				}),
				Y = {
					Store: G,
					install: N,
					version: "3.1.2",
					mapState: K,
					mapMutations: F,
					mapGetters: W,
					mapActions: U,
					createNamespacedHelpers: function (t) {
						return {
							mapState: K.bind(null, t),
							mapGetters: W.bind(null, t),
							mapMutations: F.bind(null, t),
							mapActions: U.bind(null, t)
						}
					}
				};
			o.exports = Y
		}, function (t, e, r) {
			function n(t) {
				o.install(t), t.mixin({
					created: function () {
						var t = this,
							e = this.$options.computed;
						for (var r in e) ! function (r) {
							e[r].vuex && t.$watch(r, function () {
								this._computedWatchers[r].evaluate()
							}, {
								deep: !0
							})
						}(r)
					}
				})
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var o = r(3),
				i = {
					Store: o.Store,
					install: n,
					version: "2.0.2",
					mapState: o.mapState,
					mapMutations: o.mapMutations,
					mapGetters: o.mapGetters,
					mapActions: o.mapActions,
					createNamespacedHelpers: o.createNamespacedHelpers
				};
			e.Store = o.Store, e.mapState = o.mapState, e.mapMutations = o.mapMutations, e.mapGetters = o.mapGetters, e.mapActions = o.mapActions, e.createNamespacedHelpers = o.createNamespacedHelpers, e.default = i, e.install = n, e.version = "2.0.2"
		}, function (e, r, n) {
			function o(t) {
				this.mode = _.MODE_8BIT_BYTE, this.data = t
			}

			function i(t, e) {
				this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
			}

			function a(t, e) {
				if (void 0 == t.length) throw new Error(t.length + "/" + e);
				for (var r = 0; r < t.length && 0 == t[r];) r++;
				this.num = new Array(t.length - r + e);
				for (var n = 0; n < t.length - r; n++) this.num[n] = t[n + r]
			}

			function s(t, e) {
				this.totalCount = t, this.dataCount = e
			}

			function u() {
				this.buffer = new Array, this.length = 0
			}

			function c(t) {
				var e, r, n, o;
				for (e = "", n = t.length, r = 0; r < n; r++)(o = t.charCodeAt(r)) >= 1 && o <= 127 ? e += t.charAt(r) : o > 2047 ? (e += String.fromCharCode(224 | o >> 12 & 15), e += String.fromCharCode(128 | o >> 6 & 63), e += String.fromCharCode(128 | o >> 0 & 63)) : (e += String.fromCharCode(192 | o >> 6 & 31), e += String.fromCharCode(128 | o >> 0 & 63));
				return e
			}
			var h = Object.prototype.hasOwnProperty,
				f = Object.prototype.toString,
				p = Object.defineProperty,
				l = Object.getOwnPropertyDescriptor,
				d = function (t) {
					return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === f.call(t)
				},
				v = function (t) {
					if (!t || "[object Object]" !== f.call(t)) return !1;
					var e, r = h.call(t, "constructor"),
						n = t.constructor && t.constructor.prototype && h.call(t.constructor.prototype, "isPrototypeOf");
					if (t.constructor && !r && !n) return !1;
					for (e in t);
					return void 0 === e || h.call(t, e)
				},
				y = function (t, e) {
					p && "__proto__" === e.name ? p(t, e.name, {
						enumerable: !0,
						configurable: !0,
						value: e.newValue,
						writable: !0
					}) : t[e.name] = e.newValue
				},
				m = function (t, e) {
					if ("__proto__" === e) {
						if (!h.call(t, e)) return;
						if (l) return l(t, e).value
					}
					return t[e]
				},
				g = function e() {
					var r, n, o, i, a, s, u = arguments[0],
						c = 1,
						h = arguments.length,
						f = !1;
					for ("boolean" == typeof u && (f = u, u = arguments[1] || {}, c = 2), (null == u || "object" != (void 0 === u ? "undefined" : t(u)) && "function" != typeof u) && (u = {}); c < h; ++c)
						if (null != (r = arguments[c]))
							for (n in r) o = m(u, n), u !== (i = m(r, n)) && (f && i && (v(i) || (a = d(i))) ? (a ? (a = !1, s = o && d(o) ? o : []) : s = o && v(o) ? o : {}, y(u, {
								name: n,
								newValue: e(f, s, i)
							})) : void 0 !== i && y(u, {
								name: n,
								newValue: i
							}));
					return u
				};
			o.prototype = {
				getLength: function (t) {
					return this.data.length
				},
				write: function (t) {
					for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
				}
			}, i.prototype = {
				addData: function (t) {
					var e = new o(t);
					this.dataList.push(e), this.dataCache = null
				},
				isDark: function (t, e) {
					if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
					return this.modules[t][e]
				},
				getModuleCount: function () {
					return this.moduleCount
				},
				make: function () {
					if (this.typeNumber < 1) {
						var t = 1;
						for (t = 1; t < 40; t++) {
							for (var e = s.getRSBlocks(t, this.errorCorrectLevel), r = new u, n = 0, o = 0; o < e.length; o++) n += e[o].dataCount;
							for (o = 0; o < this.dataList.length; o++) {
								var i = this.dataList[o];
								r.put(i.mode, 4), r.put(i.getLength(), E.getLengthInBits(i.mode, t)), i.write(r)
							}
							if (r.getLengthInBits() <= 8 * n) break
						}
						this.typeNumber = t
					}
					this.makeImpl(!1, this.getBestMaskPattern())
				},
				makeImpl: function (t, e) {
					this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
					for (var r = 0; r < this.moduleCount; r++) {
						this.modules[r] = new Array(this.moduleCount);
						for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null
					}
					this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = i.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
				},
				setupPositionProbePattern: function (t, e) {
					for (var r = -1; r <= 7; r++)
						if (!(t + r <= -1 || this.moduleCount <= t + r))
							for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4)
				},
				getBestMaskPattern: function () {
					for (var t = 0, e = 0, r = 0; r < 8; r++) {
						this.makeImpl(!0, r);
						var n = E.getLostPoint(this);
						(0 == r || t > n) && (t = n, e = r)
					}
					return e
				},
				createMovieClip: function (t, e, r) {
					var n = t.createEmptyMovieClip(e, r);
					this.make();
					for (var o = 0; o < this.modules.length; o++)
						for (var i = 1 * o, a = 0; a < this.modules[o].length; a++) {
							var s = 1 * a;
							this.modules[o][a] && (n.beginFill(0, 100), n.moveTo(s, i), n.lineTo(s + 1, i), n.lineTo(s + 1, i + 1), n.lineTo(s, i + 1), n.endFill())
						}
					return n
				},
				setupTimingPattern: function () {
					for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
					for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
				},
				setupPositionAdjustPattern: function () {
					for (var t = E.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
						for (var r = 0; r < t.length; r++) {
							var n = t[e],
								o = t[r];
							if (null == this.modules[n][o])
								for (var i = -2; i <= 2; i++)
									for (var a = -2; a <= 2; a++) this.modules[n + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a
						}
				},
				setupTypeNumber: function (t) {
					for (var e = E.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
						var n = !t && 1 == (e >> r & 1);
						this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
					}
					for (r = 0; r < 18; r++) n = !t && 1 == (e >> r & 1), this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
				},
				setupTypeInfo: function (t, e) {
					for (var r = this.errorCorrectLevel << 3 | e, n = E.getBCHTypeInfo(r), o = 0; o < 15; o++) {
						var i = !t && 1 == (n >> o & 1);
						o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i
					}
					for (o = 0; o < 15; o++) i = !t && 1 == (n >> o & 1), o < 8 ? this.modules[8][this.moduleCount - o - 1] = i : o < 9 ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i;
					this.modules[this.moduleCount - 8][8] = !t
				},
				mapData: function (t, e) {
					for (var r = -1, n = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2)
						for (6 == a && a--;;) {
							for (var s = 0; s < 2; s++)
								if (null == this.modules[n][a - s]) {
									var u = !1;
									i < t.length && (u = 1 == (t[i] >>> o & 1)), E.getMask(e, n, a - s) && (u = !u), this.modules[n][a - s] = u, -1 == --o && (i++, o = 7)
								} if ((n += r) < 0 || this.moduleCount <= n) {
								n -= r, r = -r;
								break
							}
						}
				}
			}, i.PAD0 = 236, i.PAD1 = 17, i.createData = function (t, e, r) {
				for (var n = s.getRSBlocks(t, e), o = new u, a = 0; a < r.length; a++) {
					var c = r[a];
					o.put(c.mode, 4), o.put(c.getLength(), E.getLengthInBits(c.mode, t)), c.write(o)
				}
				var h = 0;
				for (a = 0; a < n.length; a++) h += n[a].dataCount;
				if (o.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * h + ")");
				for (o.getLengthInBits() + 4 <= 8 * h && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
				for (; !(o.getLengthInBits() >= 8 * h || (o.put(i.PAD0, 8), o.getLengthInBits() >= 8 * h));) o.put(i.PAD1, 8);
				return i.createBytes(o, n)
			}, i.createBytes = function (t, e) {
				for (var r = 0, n = 0, o = 0, i = new Array(e.length), s = new Array(e.length), u = 0; u < e.length; u++) {
					var c = e[u].dataCount,
						h = e[u].totalCount - c;
					n = Math.max(n, c), o = Math.max(o, h), i[u] = new Array(c);
					for (var f = 0; f < i[u].length; f++) i[u][f] = 255 & t.buffer[f + r];
					r += c;
					var p = E.getErrorCorrectPolynomial(h),
						l = new a(i[u], p.getLength() - 1).mod(p);
					for (s[u] = new Array(p.getLength() - 1), f = 0; f < s[u].length; f++) {
						var d = f + l.getLength() - s[u].length;
						s[u][f] = d >= 0 ? l.get(d) : 0
					}
				}
				var v = 0;
				for (f = 0; f < e.length; f++) v += e[f].totalCount;
				var y = new Array(v),
					m = 0;
				for (f = 0; f < n; f++)
					for (u = 0; u < e.length; u++) f < i[u].length && (y[m++] = i[u][f]);
				for (f = 0; f < o; f++)
					for (u = 0; u < e.length; u++) f < s[u].length && (y[m++] = s[u][f]);
				return y
			};
			for (var _ = {
					MODE_NUMBER: 1,
					MODE_ALPHA_NUM: 2,
					MODE_8BIT_BYTE: 4,
					MODE_KANJI: 8
				}, b = {
					L: 1,
					M: 0,
					Q: 3,
					H: 2
				}, w = {
					PATTERN000: 0,
					PATTERN001: 1,
					PATTERN010: 2,
					PATTERN011: 3,
					PATTERN100: 4,
					PATTERN101: 5,
					PATTERN110: 6,
					PATTERN111: 7
				}, E = {
					PATTERN_POSITION_TABLE: [
						[],
						[6, 18],
						[6, 22],
						[6, 26],
						[6, 30],
						[6, 34],
						[6, 22, 38],
						[6, 24, 42],
						[6, 26, 46],
						[6, 28, 50],
						[6, 30, 54],
						[6, 32, 58],
						[6, 34, 62],
						[6, 26, 46, 66],
						[6, 26, 48, 70],
						[6, 26, 50, 74],
						[6, 30, 54, 78],
						[6, 30, 56, 82],
						[6, 30, 58, 86],
						[6, 34, 62, 90],
						[6, 28, 50, 72, 94],
						[6, 26, 50, 74, 98],
						[6, 30, 54, 78, 102],
						[6, 28, 54, 80, 106],
						[6, 32, 58, 84, 110],
						[6, 30, 58, 86, 114],
						[6, 34, 62, 90, 118],
						[6, 26, 50, 74, 98, 122],
						[6, 30, 54, 78, 102, 126],
						[6, 26, 52, 78, 104, 130],
						[6, 30, 56, 82, 108, 134],
						[6, 34, 60, 86, 112, 138],
						[6, 30, 58, 86, 114, 142],
						[6, 34, 62, 90, 118, 146],
						[6, 30, 54, 78, 102, 126, 150],
						[6, 24, 50, 76, 102, 128, 154],
						[6, 28, 54, 80, 106, 132, 158],
						[6, 32, 58, 84, 110, 136, 162],
						[6, 26, 54, 82, 110, 138, 166],
						[6, 30, 58, 86, 114, 142, 170]
					],
					G15: 1335,
					G18: 7973,
					G15_MASK: 21522,
					getBCHTypeInfo: function (t) {
						for (var e = t << 10; E.getBCHDigit(e) - E.getBCHDigit(E.G15) >= 0;) e ^= E.G15 << E.getBCHDigit(e) - E.getBCHDigit(E.G15);
						return (t << 10 | e) ^ E.G15_MASK
					},
					getBCHTypeNumber: function (t) {
						for (var e = t << 12; E.getBCHDigit(e) - E.getBCHDigit(E.G18) >= 0;) e ^= E.G18 << E.getBCHDigit(e) - E.getBCHDigit(E.G18);
						return t << 12 | e
					},
					getBCHDigit: function (t) {
						for (var e = 0; 0 != t;) e++, t >>>= 1;
						return e
					},
					getPatternPosition: function (t) {
						return E.PATTERN_POSITION_TABLE[t - 1]
					},
					getMask: function (t, e, r) {
						switch (t) {
							case w.PATTERN000:
								return (e + r) % 2 == 0;
							case w.PATTERN001:
								return e % 2 == 0;
							case w.PATTERN010:
								return r % 3 == 0;
							case w.PATTERN011:
								return (e + r) % 3 == 0;
							case w.PATTERN100:
								return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
							case w.PATTERN101:
								return e * r % 2 + e * r % 3 == 0;
							case w.PATTERN110:
								return (e * r % 2 + e * r % 3) % 2 == 0;
							case w.PATTERN111:
								return (e * r % 3 + (e + r) % 2) % 2 == 0;
							default:
								throw new Error("bad maskPattern:" + t)
						}
					},
					getErrorCorrectPolynomial: function (t) {
						for (var e = new a([1], 0), r = 0; r < t; r++) e = e.multiply(new a([1, O.gexp(r)], 0));
						return e
					},
					getLengthInBits: function (t, e) {
						if (1 <= e && e < 10) switch (t) {
							case _.MODE_NUMBER:
								return 10;
							case _.MODE_ALPHA_NUM:
								return 9;
							case _.MODE_8BIT_BYTE:
							case _.MODE_KANJI:
								return 8;
							default:
								throw new Error("mode:" + t)
						} else if (e < 27) switch (t) {
							case _.MODE_NUMBER:
								return 12;
							case _.MODE_ALPHA_NUM:
								return 11;
							case _.MODE_8BIT_BYTE:
								return 16;
							case _.MODE_KANJI:
								return 10;
							default:
								throw new Error("mode:" + t)
						} else {
							if (!(e < 41)) throw new Error("type:" + e);
							switch (t) {
								case _.MODE_NUMBER:
									return 14;
								case _.MODE_ALPHA_NUM:
									return 13;
								case _.MODE_8BIT_BYTE:
									return 16;
								case _.MODE_KANJI:
									return 12;
								default:
									throw new Error("mode:" + t)
							}
						}
					},
					getLostPoint: function (t) {
						for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
							for (var o = 0; o < e; o++) {
								for (var i = 0, a = t.isDark(n, o), s = -1; s <= 1; s++)
									if (!(n + s < 0 || e <= n + s))
										for (var u = -1; u <= 1; u++) o + u < 0 || e <= o + u || 0 == s && 0 == u || a == t.isDark(n + s, o + u) && i++;
								i > 5 && (r += 3 + i - 5)
							}
						for (n = 0; n < e - 1; n++)
							for (o = 0; o < e - 1; o++) {
								var c = 0;
								t.isDark(n, o) && c++, t.isDark(n + 1, o) && c++, t.isDark(n, o + 1) && c++, t.isDark(n + 1, o + 1) && c++, 0 != c && 4 != c || (r += 3)
							}
						for (n = 0; n < e; n++)
							for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
						for (o = 0; o < e; o++)
							for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
						var h = 0;
						for (o = 0; o < e; o++)
							for (n = 0; n < e; n++) t.isDark(n, o) && h++;
						return r += Math.abs(100 * h / e / e - 50) / 5 * 10
					}
				}, O = {
					glog: function (t) {
						if (t < 1) throw new Error("glog(" + t + ")");
						return O.LOG_TABLE[t]
					},
					gexp: function (t) {
						for (; t < 0;) t += 255;
						for (; t >= 256;) t -= 255;
						return O.EXP_TABLE[t]
					},
					EXP_TABLE: new Array(256),
					LOG_TABLE: new Array(256)
				}, C = 0; C < 8; C++) O.EXP_TABLE[C] = 1 << C;
			for (C = 8; C < 256; C++) O.EXP_TABLE[C] = O.EXP_TABLE[C - 4] ^ O.EXP_TABLE[C - 5] ^ O.EXP_TABLE[C - 6] ^ O.EXP_TABLE[C - 8];
			for (C = 0; C < 255; C++) O.LOG_TABLE[O.EXP_TABLE[C]] = C;
			a.prototype = {
				get: function (t) {
					return this.num[t]
				},
				getLength: function () {
					return this.num.length
				},
				multiply: function (t) {
					for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
						for (var n = 0; n < t.getLength(); n++) e[r + n] ^= O.gexp(O.glog(this.get(r)) + O.glog(t.get(n)));
					return new a(e, 0)
				},
				mod: function (t) {
					if (this.getLength() - t.getLength() < 0) return this;
					for (var e = O.glog(this.get(0)) - O.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
					for (n = 0; n < t.getLength(); n++) r[n] ^= O.gexp(O.glog(t.get(n)) + e);
					return new a(r, 0).mod(t)
				}
			}, s.RS_BLOCK_TABLE = [
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
				[4, 101, 81],
				[1, 80, 50, 4, 81, 51],
				[4, 50, 22, 4, 51, 23],
				[3, 36, 12, 8, 37, 13],
				[2, 116, 92, 2, 117, 93],
				[6, 58, 36, 2, 59, 37],
				[4, 46, 20, 6, 47, 21],
				[7, 42, 14, 4, 43, 15],
				[4, 133, 107],
				[8, 59, 37, 1, 60, 38],
				[8, 44, 20, 4, 45, 21],
				[12, 33, 11, 4, 34, 12],
				[3, 145, 115, 1, 146, 116],
				[4, 64, 40, 5, 65, 41],
				[11, 36, 16, 5, 37, 17],
				[11, 36, 12, 5, 37, 13],
				[5, 109, 87, 1, 110, 88],
				[5, 65, 41, 5, 66, 42],
				[5, 54, 24, 7, 55, 25],
				[11, 36, 12],
				[5, 122, 98, 1, 123, 99],
				[7, 73, 45, 3, 74, 46],
				[15, 43, 19, 2, 44, 20],
				[3, 45, 15, 13, 46, 16],
				[1, 135, 107, 5, 136, 108],
				[10, 74, 46, 1, 75, 47],
				[1, 50, 22, 15, 51, 23],
				[2, 42, 14, 17, 43, 15],
				[5, 150, 120, 1, 151, 121],
				[9, 69, 43, 4, 70, 44],
				[17, 50, 22, 1, 51, 23],
				[2, 42, 14, 19, 43, 15],
				[3, 141, 113, 4, 142, 114],
				[3, 70, 44, 11, 71, 45],
				[17, 47, 21, 4, 48, 22],
				[9, 39, 13, 16, 40, 14],
				[3, 135, 107, 5, 136, 108],
				[3, 67, 41, 13, 68, 42],
				[15, 54, 24, 5, 55, 25],
				[15, 43, 15, 10, 44, 16],
				[4, 144, 116, 4, 145, 117],
				[17, 68, 42],
				[17, 50, 22, 6, 51, 23],
				[19, 46, 16, 6, 47, 17],
				[2, 139, 111, 7, 140, 112],
				[17, 74, 46],
				[7, 54, 24, 16, 55, 25],
				[34, 37, 13],
				[4, 151, 121, 5, 152, 122],
				[4, 75, 47, 14, 76, 48],
				[11, 54, 24, 14, 55, 25],
				[16, 45, 15, 14, 46, 16],
				[6, 147, 117, 4, 148, 118],
				[6, 73, 45, 14, 74, 46],
				[11, 54, 24, 16, 55, 25],
				[30, 46, 16, 2, 47, 17],
				[8, 132, 106, 4, 133, 107],
				[8, 75, 47, 13, 76, 48],
				[7, 54, 24, 22, 55, 25],
				[22, 45, 15, 13, 46, 16],
				[10, 142, 114, 2, 143, 115],
				[19, 74, 46, 4, 75, 47],
				[28, 50, 22, 6, 51, 23],
				[33, 46, 16, 4, 47, 17],
				[8, 152, 122, 4, 153, 123],
				[22, 73, 45, 3, 74, 46],
				[8, 53, 23, 26, 54, 24],
				[12, 45, 15, 28, 46, 16],
				[3, 147, 117, 10, 148, 118],
				[3, 73, 45, 23, 74, 46],
				[4, 54, 24, 31, 55, 25],
				[11, 45, 15, 31, 46, 16],
				[7, 146, 116, 7, 147, 117],
				[21, 73, 45, 7, 74, 46],
				[1, 53, 23, 37, 54, 24],
				[19, 45, 15, 26, 46, 16],
				[5, 145, 115, 10, 146, 116],
				[19, 75, 47, 10, 76, 48],
				[15, 54, 24, 25, 55, 25],
				[23, 45, 15, 25, 46, 16],
				[13, 145, 115, 3, 146, 116],
				[2, 74, 46, 29, 75, 47],
				[42, 54, 24, 1, 55, 25],
				[23, 45, 15, 28, 46, 16],
				[17, 145, 115],
				[10, 74, 46, 23, 75, 47],
				[10, 54, 24, 35, 55, 25],
				[19, 45, 15, 35, 46, 16],
				[17, 145, 115, 1, 146, 116],
				[14, 74, 46, 21, 75, 47],
				[29, 54, 24, 19, 55, 25],
				[11, 45, 15, 46, 46, 16],
				[13, 145, 115, 6, 146, 116],
				[14, 74, 46, 23, 75, 47],
				[44, 54, 24, 7, 55, 25],
				[59, 46, 16, 1, 47, 17],
				[12, 151, 121, 7, 152, 122],
				[12, 75, 47, 26, 76, 48],
				[39, 54, 24, 14, 55, 25],
				[22, 45, 15, 41, 46, 16],
				[6, 151, 121, 14, 152, 122],
				[6, 75, 47, 34, 76, 48],
				[46, 54, 24, 10, 55, 25],
				[2, 45, 15, 64, 46, 16],
				[17, 152, 122, 4, 153, 123],
				[29, 74, 46, 14, 75, 47],
				[49, 54, 24, 10, 55, 25],
				[24, 45, 15, 46, 46, 16],
				[4, 152, 122, 18, 153, 123],
				[13, 74, 46, 32, 75, 47],
				[48, 54, 24, 14, 55, 25],
				[42, 45, 15, 32, 46, 16],
				[20, 147, 117, 4, 148, 118],
				[40, 75, 47, 7, 76, 48],
				[43, 54, 24, 22, 55, 25],
				[10, 45, 15, 67, 46, 16],
				[19, 148, 118, 6, 149, 119],
				[18, 75, 47, 31, 76, 48],
				[34, 54, 24, 34, 55, 25],
				[20, 45, 15, 61, 46, 16]
			], s.getRSBlocks = function (t, e) {
				var r = s.getRsBlockTable(t, e);
				if (void 0 == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
				for (var n = r.length / 3, o = new Array, i = 0; i < n; i++)
					for (var a = r[3 * i + 0], u = r[3 * i + 1], c = r[3 * i + 2], h = 0; h < a; h++) o.push(new s(u, c));
				return o
			}, s.getRsBlockTable = function (t, e) {
				switch (e) {
					case b.L:
						return s.RS_BLOCK_TABLE[4 * (t - 1) + 0];
					case b.M:
						return s.RS_BLOCK_TABLE[4 * (t - 1) + 1];
					case b.Q:
						return s.RS_BLOCK_TABLE[4 * (t - 1) + 2];
					case b.H:
						return s.RS_BLOCK_TABLE[4 * (t - 1) + 3];
					default:
						return
				}
			}, u.prototype = {
				get: function (t) {
					var e = Math.floor(t / 8);
					return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
				},
				put: function (t, e) {
					for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1))
				},
				getLengthInBits: function () {
					return this.length
				},
				putBit: function (t) {
					var e = Math.floor(this.length / 8);
					this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = function (t) {
				t = t || {}, (t = g(!0, {
					width: 256,
					height: 256,
					x: 0,
					y: 0,
					typeNumber: -1,
					correctLevel: b.H,
					background: "#ffffff",
					foreground: "#000000",
					image: {
						imageResource: "",
						dx: 0,
						dy: 0,
						dWidth: 100,
						dHeight: 100
					}
				}, t)).canvasId || t.ctx ? function () {
					var e, r = new i(t.typeNumber, t.correctLevel);
					r.addData(c(t.text)), r.make(), e = t.ctx ? t.ctx : t._this ? wx.createCanvasContext && wx.createCanvasContext(t.canvasId, t._this) : wx.createCanvasContext && wx.createCanvasContext(t.canvasId);
					for (var n = t.width / r.getModuleCount(), o = t.height / r.getModuleCount(), a = 0; a < r.getModuleCount(); a++)
						for (var s = 0; s < r.getModuleCount(); s++) {
							var u = r.isDark(a, s) ? t.foreground : t.background;
							e.setFillStyle(u);
							var h = Math.ceil((s + 1) * n) - Math.floor(s * n),
								f = Math.ceil((a + 1) * n) - Math.floor(a * n);
							e.fillRect(Math.round(s * n) + t.x, Math.round(a * o) + t.y, h, f)
						}
					t.image.imageResource && e.drawImage(t.image.imageResource, t.image.dx, t.image.dy, t.image.dWidth, t.image.dHeight), e.draw(!1, function (e) {
						t.callback && t.callback(e)
					})
				}() : console.warn("please set canvasId or ctx!")
			}
		}]);
	});
	define("app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var t = e(require("./vendor.js")(0)),
			n = e(require("./common/eventHub.js")),
			a = require("./common/httpUtils.js"),
			o = e(require("./store/index.js")),
			s = require("./common/api.js");
		require("./vendor.js")(4);
		t.default.app({
			store: o.default,
			hooks: {},
			globalData: {
				userInfo: null,
				studentInfo: null,
				language: "zh",
				shareData: {},
				qrCodeScene: !1,
				systemInfo: null,
				headerBtnPosi: !1,
				navbarHeight: void 0,
				statusBarHeight: void 0,
				refresherHeight: 500
			},
			onLaunch: function (e) {
				var t = this;
				t.clearStorage().then(function () {
					o.default.state.user.isRefreshed || (console.log("clear storage"), wx.clearStorageSync(), o.default.dispatch("setRefresh"), console.log("clear storage", o.default.state.user.isRefreshed))
				}), (0, a.setDomain)(t.$rel.info.domain), console.log("app onLaunch", e), n.default.$on("app-launch", function () {
					console.log("app-launch event emitted, the params are:");
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					console.log(t)
				}), t.getSystemInfo().then(t.calNavBarHeigt()).then(t.setLocalLanguage()).then(t.getStorage()).then(function () {
					null !== o.default.state.student.studentInfo && (0, s.setGetParams)(o.default.state.student.studentInfo), t.getUpdate()
				})
			},
			onPageNotFound: function (e) {
				wx.redirectTo({
					url: "pages/index"
				})
			},
			methods: {
				getUpdate: function () {
					if (wx.canIUse("getUpdateManager")) {
						var e = wx.getUpdateManager();
						e.onCheckForUpdate(function (t) {
							t.hasUpdate && (e.onUpdateReady(function () {
								wx.showModal({
									title: "更新提示",
									content: "新版本已经准备好，是否重启应用？",
									success: function (t) {
										console.log("success====", t), t.confirm && e.applyUpdate()
									}
								})
							}), e.onUpdateFailed(function () {
								wx.showModal({
									title: "已经有新版本了哟~",
									content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
								})
							}))
						})
					}
				},
				clearStorage: function () {
					return new Promise(function (e) {
						o.default.dispatch("getRefresh"), e()
					})
				},
				getStorage: function () {
					return new Promise(function (e) {
						o.default.dispatch("getReturnSchoolStorage"), o.default.dispatch("getLeaveSchoolStorage"), o.default.dispatch("changeStorageData"), o.default.dispatch("changeStorageStudentData"), e()
					})
				},
				setLocalLanguage: function () {
					var e = this.$options.globalData,
						t = e.systemInfo.language;
					return new Promise(function (n) {
						t.length > 3 ? e.language = t.substr(0, 2) : e.language = t, "zh" !== e.language && (wx.setTabBarItem({
							index: 0,
							text: "Index"
						}), wx.setTabBarItem({
							index: 1,
							text: "My"
						})), n()
					})
				},
				getSystemInfo: function () {
					var e = this.$options.globalData;
					return new Promise(function (t) {
						var n = wx.getSystemInfoSync();
						e.systemInfo = n, t()
					})
				},
				calNavBarHeigt: function () {
					var e = this.$options.globalData;
					return new Promise(function (t) {
						e.headerBtnPosi || (e.headerBtnPosi = wx.getMenuButtonBoundingClientRect());
						var n = e.systemInfo.stat7usBarHeight,
							a = e.headerBtnPosi,
							o = {
								height: a.height,
								width: a.width,
								top: a.top - n,
								bottom: a.bottom - a.height - n,
								right: e.systemInfo.windowWidth - a.right
							},
							s = a.bottom + o.bottom;
						e.navbarHeight = s, e.statusBarHeight = n, e.refresherHeight = e.systemInfo.windowHeight - s, t("calNavBarHeight Finish")
					})
				}
			}
		}, {
			info: {
				noPromiseAPI: ["createSelectorQuery"],
				domain: "https://tjxsfw.chisai.tech"
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				noPromiseAPI: ["createSelectorQuery"],
				domain: "https://tjxsfw.chisai.tech"
			},
			handlers: {},
			models: {},
			refs: void 0
		});
	});
	require("app.js");
	__wxRoute = 'components/dialog-location';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/dialog-location.js';
	define("components/dialog-location.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(function (n) {
			return n && n.__esModule ? n : {
				default: n
			}
		})(require("./../vendor.js")(0)).default.component({
			props: {
				show: {
					type: Boolean,
					default: !1
				}
			},
			data: {
				isAgreed: !1,
				wxUserInfo: void 0,
				isShow: !1
			},
			watch: {
				show: function (n, t) {
					this.isShow = n
				}
			},
			methods: {
				onCancel: function () {
					this.$emit("fail")
				},
				onGetPermission: function (n) {
					var t = n.$wx.detail.authSetting;
					console.log(n), t["scope.userLocation"] ? this.$emit("success") : this.$emit("fail")
				}
			}
		}, {
			info: {
				components: {
					"van-popup": {
						path: "vant\\dist\\popup\\index"
					}
				},
				on: {}
			},
			handlers: {
				"77-0": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onCancel(n)
					}
				},
				"77-1": {
					opensetting: function () {
						var n = arguments[arguments.length - 1];
						return void this.onGetPermission(n)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-popup": {
						path: "vant\\dist\\popup\\index"
					}
				},
				on: {}
			},
			handlers: {
				"77-0": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onCancel(n)
					}
				},
				"77-1": {
					opensetting: function () {
						var n = arguments[arguments.length - 1];
						return void this.onGetPermission(n)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("components/dialog-location.js");
	__wxRoute = 'components/dialog-login';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/dialog-login.js';
	define("components/dialog-login.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(function (n) {
			return n && n.__esModule ? n : {
				default: n
			}
		})(require("./../vendor.js")(0)).default.component({
			props: {
				show: {
					type: Boolean,
					default: !1
				}
			},
			data: {
				isAgreed: !1,
				wxUserInfo: void 0,
				isShow: !1
			},
			watch: {
				show: function (n, o) {
					this.isShow = n
				}
			},
			methods: {
				onCancel: function () {
					this.$emit("fail")
				},
				onGotUserInfo: function (n) {
					var o = n.$wx.detail;
					o && this.$emit("success", o.rawData)
				}
			}
		}, {
			info: {
				components: {
					"van-popup": {
						path: "vant\\dist\\popup\\index"
					}
				},
				on: {}
			},
			handlers: {
				"76-0": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onCancel(n)
					}
				},
				"76-1": {
					getuserinfo: function () {
						var n = arguments[arguments.length - 1];
						return void this.onGotUserInfo(n)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-popup": {
						path: "vant\\dist\\popup\\index"
					}
				},
				on: {}
			},
			handlers: {
				"76-0": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onCancel(n)
					}
				},
				"76-1": {
					getuserinfo: function () {
						var n = arguments[arguments.length - 1];
						return void this.onGotUserInfo(n)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("components/dialog-login.js");
	__wxRoute = 'components/error-hint';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/error-hint.js';
	define("components/error-hint.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(function (o) {
			return o && o.__esModule ? o : {
				default: o
			}
		})(require("./../vendor.js")(0)).default.component({
			props: {
				text: {
					type: String
				},
				padding: !0
			}
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		});
	});
	require("components/error-hint.js");
	__wxRoute = 'components/nav-bar-code';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/nav-bar-code.js';
	define("components/nav-bar-code.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = function (t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(require("./../vendor.js")(0)),
			n = getApp();
		t.default.component({
			properties: {
				type: {
					type: String,
					value: "default"
				},
				title: {
					type: String,
					value: ""
				},
				isSearch: {
					type: Boolean,
					value: !1
				},
				haveBack: {
					type: Boolean,
					value: !0
				},
				haveHome: {
					type: Boolean,
					value: !1
				}
			},
			data: {
				statusBarHeight: 20,
				navbarHeight: 64,
				navbarBtn: {
					height: 32,
					width: 87,
					top: 6,
					bottom: 6,
					right: 10
				},
				cusnavH: 44
			},
			attached: function () {
				var t = n.$wepy.$options.globalData;
				t.systemInfo || (t.systemInfo = wx.getSystemInfoSync()), t.headerBtnPosi || (t.headerBtnPosi = wx.getMenuButtonBoundingClientRect());
				var e = t.systemInfo.statusBarHeight,
					o = t.headerBtnPosi,
					a = {
						height: o.height,
						width: o.width,
						top: o.top - e,
						bottom: o.bottom - o.height - e,
						right: t.systemInfo.windowWidth - o.right
					};
				this.haveBack && (1 !== getCurrentPages().length ? (this.haveBack = !0, this.haveHome = !1) : (this.haveBack = !1, this.haveHome = !0));
				var i = a.height + a.top + a.bottom;
				this.statusBarHeight = e, this.navbarHeight = o.bottom + a.bottom, this.navbarBtn = a, this.cusnavH = i
			},
			methods: {
				_goBack: function () {
					wx.navigateBack()
				},
				bindKeyInput: function () {
					console.log(e.detail.value)
				}
			}
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {
				"79-0": {
					input: function () {
						var t = arguments[arguments.length - 1];
						return void this.bindKeyInput(t)
					}
				},
				"79-1": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this._goBack(t)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {
				"79-0": {
					input: function () {
						var t = arguments[arguments.length - 1];
						return void this.bindKeyInput(t)
					}
				},
				"79-1": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this._goBack(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("components/nav-bar-code.js");
	__wxRoute = 'components/nav-bar';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/nav-bar.js';
	define("components/nav-bar.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = function (t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(require("./../vendor.js")(0)),
			n = getApp();
		t.default.component({
			properties: {
				type: {
					type: String,
					value: "default"
				},
				title: {
					type: String,
					value: ""
				},
				isSearch: {
					type: Boolean,
					value: !1
				},
				haveBack: {
					type: Boolean,
					value: !0
				},
				haveHome: {
					type: Boolean,
					value: !1
				}
			},
			data: {
				statusBarHeight: 20,
				navbarHeight: 64,
				navbarBtn: {
					height: 32,
					width: 87,
					top: 6,
					bottom: 6,
					right: 10
				},
				cusnavH: 44
			},
			attached: function () {
				var t = n.$wepy.$options.globalData;
				t.systemInfo || (t.systemInfo = wx.getSystemInfoSync()), t.headerBtnPosi || (t.headerBtnPosi = wx.getMenuButtonBoundingClientRect());
				var e = t.systemInfo.statusBarHeight,
					o = t.headerBtnPosi,
					a = {
						height: o.height,
						width: o.width,
						top: o.top - e,
						bottom: o.bottom - o.height - e,
						right: t.systemInfo.windowWidth - o.right
					};
				this.haveBack && (1 !== getCurrentPages().length ? (this.haveBack = !0, this.haveHome = !1) : (this.haveBack = !1, this.haveHome = !0));
				var i = a.height + a.top + a.bottom;
				this.statusBarHeight = e, this.navbarHeight = o.bottom + a.bottom, this.navbarBtn = a, this.cusnavH = i
			},
			methods: {
				_goBack: function () {
					wx.navigateBack()
				},
				bindKeyInput: function () {
					console.log(e.detail.value)
				}
			}
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {
				"75-0": {
					input: function () {
						var t = arguments[arguments.length - 1];
						return void this.bindKeyInput(t)
					}
				},
				"75-1": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this._goBack(t)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {},
				on: {}
			},
			handlers: {
				"75-0": {
					input: function () {
						var t = arguments[arguments.length - 1];
						return void this.bindKeyInput(t)
					}
				},
				"75-1": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this._goBack(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("components/nav-bar.js");
	__wxRoute = 'components/refresher-list/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/refresher-list/index.js';
	define("components/refresher-list/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Component({
			properties: {
				isRefreshing: {
					type: Boolean,
					value: !1
				},
				haveMore: {
					type: Boolean,
					value: !1
				},
				isLoading: {
					type: Boolean,
					value: !1
				},
				isEmpty: {
					type: Boolean,
					value: !1
				},
				emptyText: {
					type: String
				},
				height: {
					type: Number,
					value: 500
				}
			},
			observers: {
				isRefreshing: function (e) {
					this.setData({
						triggered: e
					})
				}
			},
			data: {
				triggered: !1
			},
			methods: {
				onTouchBottom: function (e) {
					this.properties.haveMore && this.triggerEvent("load")
				},
				onRefresh: function () {
					this.triggerEvent("refresh")
				}
			}
		});
	});
	require("components/refresher-list/index.js");
	__wxRoute = 'components/vant/dist/area/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/area/index.js';
	define("components/vant/dist/area/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e, r) {
			return i(e) || n(e, r) || t()
		}

		function t() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}

		function n(e, t) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
				var n = [],
					i = !0,
					r = !1,
					c = void 0;
				try {
					for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
				} catch (e) {
					r = !0, c = e
				} finally {
					try {
						i || null == a.return || a.return()
					} finally {
						if (r) throw c
					}
				}
				return n
			}
		}

		function i(e) {
			if (Array.isArray(e)) return e
		}
		var r = require("./../common/component.js"),
			c = require("./../picker/shared.js");
		(0, r.VantComponent)({
			classes: ["active-class", "toolbar-class", "column-class"],
			props: Object.assign(Object.assign({}, c.pickerProps), {
				value: String,
				areaList: {
					type: Object,
					value: {}
				},
				columnsNum: {
					type: null,
					value: 3
				},
				columnsPlaceholder: {
					type: Array,
					observer: function (e) {
						this.setData({
							typeToColumnsPlaceholder: {
								province: e[0] || "",
								city: e[1] || "",
								county: e[2] || ""
							}
						})
					}
				}
			}),
			data: {
				columns: [{
					values: []
				}, {
					values: []
				}, {
					values: []
				}],
				displayColumns: [{
					values: []
				}, {
					values: []
				}, {
					values: []
				}],
				typeToColumnsPlaceholder: {}
			},
			watch: {
				value: function (e) {
					this.code = e, this.setValues()
				},
				areaList: "setValues",
				columnsNum: function (e) {
					this.setData({
						displayColumns: this.data.columns.slice(0, +e)
					})
				}
			},
			mounted: function () {
				var e = this;
				setTimeout(function () {
					e.setValues()
				}, 0)
			},
			methods: {
				getPicker: function () {
					return null == this.picker && (this.picker = this.selectComponent(".van-area__picker")), this.picker
				},
				onCancel: function (e) {
					this.emit("cancel", e.detail)
				},
				onConfirm: function (e) {
					var t = e.detail.index,
						n = e.detail.value;
					n = this.parseOutputValues(n), this.emit("confirm", {
						value: n,
						index: t
					})
				},
				emit: function (e, t) {
					t.values = t.value, delete t.value, this.$emit(e, t)
				},
				parseOutputValues: function (e) {
					var t = this.data.columnsPlaceholder;
					return e.map(function (e, n) {
						return e ? ((e = JSON.parse(JSON.stringify(e))).code && e.name !== t[n] || (e.code = "", e.name = ""), e) : e
					})
				},
				onChange: function (e) {
					var t = this,
						n = e.detail,
						i = n.index,
						r = n.picker,
						c = n.value;
					this.code = c[i].code, this.setValues().then(function () {
						t.$emit("change", {
							picker: r,
							values: t.parseOutputValues(r.getValues()),
							index: i
						})
					})
				},
				getConfig: function (e) {
					var t = this.data.areaList;
					return t && t["".concat(e, "_list")] || {}
				},
				getList: function (e, t) {
					var n = this.data.typeToColumnsPlaceholder,
						i = [];
					if ("province" !== e && !t) return i;
					var r = this.getConfig(e);
					if (i = Object.keys(r).map(function (e) {
							return {
								code: e,
								name: r[e]
							}
						}), t && ("9" === t[0] && "city" === e && (t = "9"), i = i.filter(function (e) {
							return 0 === e.code.indexOf(t)
						})), n[e] && i.length) {
						var c = "province" === e ? "" : "city" === e ? "000000".slice(2, 4) : "000000".slice(4, 6);
						i.unshift({
							code: "".concat(t).concat(c),
							name: n[e]
						})
					}
					return i
				},
				getIndex: function (e, t) {
					var n = "province" === e ? 2 : "city" === e ? 4 : 6,
						i = this.getList(e, t.slice(0, n - 2));
					"9" === t[0] && "province" === e && (n = 1), t = t.slice(0, n);
					for (var r = 0; r < i.length; r++)
						if (i[r].code.slice(0, n) === t) return r;
					return 0
				},
				setValues: function () {
					var t = this,
						n = this.getConfig("county"),
						i = this.code;
					i || (i = this.data.columnsPlaceholder.length ? "000000" : Object.keys(n)[0] ? Object.keys(n)[0] : "");
					var r = this.getList("province"),
						c = this.getList("city", i.slice(0, 2)),
						s = this.getPicker();
					if (s) {
						var a = [];
						if (a.push(s.setColumnValues(0, r, !1)), a.push(s.setColumnValues(1, c, !1)), c.length && "00" === i.slice(2, 4)) {
							var u = e(c, 1);
							i = u[0].code
						}
						return a.push(s.setColumnValues(2, this.getList("county", i.slice(0, 4)), !1)), Promise.all(a).catch(function () {}).then(function () {
							return s.setIndexes([t.getIndex("province", i), t.getIndex("city", i), t.getIndex("county", i)])
						}).catch(function () {})
					}
				},
				getValues: function () {
					var e = this.getPicker();
					return e ? e.getValues().filter(function (e) {
						return !!e
					}) : []
				},
				getDetail: function () {
					var e = this.getValues(),
						t = {
							code: "",
							country: "",
							province: "",
							city: "",
							county: ""
						};
					if (!e.length) return t;
					var n = e.map(function (e) {
						return e.name
					});
					return t.code = e[e.length - 1].code, "9" === t.code[0] ? (t.country = n[1] || "", t.province = n[2] || "") : (t.province = n[0] || "", t.city = n[1] || "", t.county = n[2] || ""), t
				},
				reset: function (e) {
					return this.code = e || "", this.setValues()
				}
			}
		});
	});
	require("components/vant/dist/area/index.js");
	__wxRoute = 'components/vant/dist/button/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/button/index.js';
	define("components/vant/dist/button/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../common/component.js"),
			t = require("./../mixins/button.js"),
			o = require("./../mixins/open-type.js");
		(0, e.VantComponent)({
			mixins: [t.button, o.openType],
			classes: ["hover-class", "loading-class"],
			data: {
				style: ""
			},
			props: {
				icon: String,
				plain: Boolean,
				block: Boolean,
				round: Boolean,
				square: Boolean,
				loading: Boolean,
				hairline: Boolean,
				disabled: Boolean,
				loadingText: String,
				customStyle: String,
				loadingType: {
					type: String,
					value: "circular"
				},
				type: {
					type: String,
					value: "default"
				},
				size: {
					type: String,
					value: "normal"
				},
				loadingSize: {
					type: String,
					value: "20px"
				},
				color: {
					type: String,
					observer: function (e) {
						var t = "";
						e && (t += "color: ".concat(this.data.plain ? e : "white", ";"), this.data.plain || (t += "background: ".concat(e, ";")), -1 !== e.indexOf("gradient") ? t += "border: 0;" : t += "border-color: ".concat(e, ";")), t !== this.data.style && this.setData({
							style: t
						})
					}
				}
			},
			methods: {
				onClick: function () {
					this.data.disabled || this.data.loading || this.$emit("click")
				}
			}
		});
	});
	require("components/vant/dist/button/index.js");
	__wxRoute = 'components/vant/dist/cell-group/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/cell-group/index.js';
	define("components/vant/dist/cell-group/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				title: String,
				border: {
					type: Boolean,
					value: !0
				}
			}
		});
	});
	require("components/vant/dist/cell-group/index.js");
	__wxRoute = 'components/vant/dist/cell/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/cell/index.js';
	define("components/vant/dist/cell/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../mixins/link.js");
		(0, require("./../common/component.js").VantComponent)({
			classes: ["title-class", "label-class", "value-class", "right-icon-class", "hover-class"],
			mixins: [e.link],
			props: {
				title: null,
				value: null,
				icon: String,
				size: String,
				label: String,
				valueLeft: Boolean,
				center: Boolean,
				isLink: Boolean,
				required: Boolean,
				clickable: Boolean,
				titleWidth: String,
				customStyle: String,
				arrowDirection: String,
				useLabelSlot: Boolean,
				border: {
					type: Boolean,
					value: !0
				}
			},
			methods: {
				onClick: function (e) {
					this.$emit("click", e.detail), this.jumpLink()
				}
			}
		});
	});
	require("components/vant/dist/cell/index.js");
	__wxRoute = 'components/vant/dist/dialog/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/dialog/index.js';
	define("components/vant/dist/dialog/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function n(n, o, t) {
			return o in n ? Object.defineProperty(n, o, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : n[o] = t, n
		}
		var o = require("./../common/component.js"),
			t = require("./../mixins/button.js"),
			e = require("./../mixins/open-type.js"),
			i = require("./../common/color.js");
		(0, o.VantComponent)({
			mixins: [t.button, e.openType],
			props: {
				show: Boolean,
				title: String,
				message: String,
				useSlot: Boolean,
				className: String,
				customStyle: String,
				asyncClose: Boolean,
				messageAlign: String,
				overlayStyle: String,
				useTitleSlot: Boolean,
				showCancelButton: Boolean,
				closeOnClickOverlay: Boolean,
				confirmButtonOpenType: String,
				width: null,
				zIndex: {
					type: Number,
					value: 2e3
				},
				confirmButtonText: {
					type: String,
					value: "确认"
				},
				cancelButtonText: {
					type: String,
					value: "取消"
				},
				confirmButtonColor: {
					type: String,
					value: i.BLUE
				},
				cancelButtonColor: {
					type: String,
					value: i.GRAY
				},
				showConfirmButton: {
					type: Boolean,
					value: !0
				},
				overlay: {
					type: Boolean,
					value: !0
				},
				transition: {
					type: String,
					value: "scale"
				}
			},
			data: {
				loading: {
					confirm: !1,
					cancel: !1
				}
			},
			watch: {
				show: function (n) {
					!n && this.stopLoading()
				}
			},
			methods: {
				onConfirm: function () {
					this.handleAction("confirm")
				},
				onCancel: function () {
					this.handleAction("cancel")
				},
				onClickOverlay: function () {
					this.onClose("overlay")
				},
				handleAction: function (o) {
					this.data.asyncClose && this.setData(n({}, "loading.".concat(o), !0)), this.onClose(o)
				},
				close: function () {
					this.setData({
						show: !1
					})
				},
				stopLoading: function () {
					this.setData({
						loading: {
							confirm: !1,
							cancel: !1
						}
					})
				},
				onClose: function (n) {
					this.data.asyncClose || this.close(), this.$emit("close", n), this.$emit(n, {
						dialog: this
					});
					var o = this.data["confirm" === n ? "onConfirm" : "onCancel"];
					o && o(this)
				}
			}
		});
	});
	require("components/vant/dist/dialog/index.js");
	__wxRoute = 'components/vant/dist/field/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/field/index.js';
	define("components/vant/dist/field/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../common/component.js"),
			t = require("./../common/utils.js");
		(0, e.VantComponent)({
			field: !0,
			classes: ["input-class", "right-icon-class"],
			props: {
				size: String,
				icon: String,
				label: String,
				error: Boolean,
				fixed: Boolean,
				focus: Boolean,
				center: Boolean,
				isLink: Boolean,
				leftIcon: String,
				rightIcon: String,
				disabled: Boolean,
				autosize: Boolean,
				readonly: Boolean,
				required: Boolean,
				password: Boolean,
				iconClass: String,
				clearable: Boolean,
				clickable: Boolean,
				inputAlign: String,
				placeholder: String,
				customStyle: String,
				confirmType: String,
				confirmHold: Boolean,
				holdKeyboard: Boolean,
				errorMessage: String,
				arrowDirection: String,
				placeholderStyle: String,
				errorMessageAlign: String,
				selectionEnd: {
					type: Number,
					value: -1
				},
				selectionStart: {
					type: Number,
					value: -1
				},
				showConfirmBar: {
					type: Boolean,
					value: !0
				},
				adjustPosition: {
					type: Boolean,
					value: !0
				},
				cursorSpacing: {
					type: Number,
					value: 50
				},
				maxlength: {
					type: Number,
					value: -1
				},
				type: {
					type: String,
					value: "text"
				},
				border: {
					type: Boolean,
					value: !0
				},
				titleWidth: {
					type: String,
					value: "90px"
				}
			},
			data: {
				focused: !1,
				system: (0, t.getSystemInfoSync)().system.split(" ").shift().toLowerCase()
			},
			methods: {
				onInput: function (e) {
					var t = this,
						o = (e.detail || {}).value,
						n = void 0 === o ? "" : o;
					this.setData({
						value: n
					}, function () {
						t.emitChange(n)
					})
				},
				onFocus: function (e) {
					this.setData({
						focused: !0
					}), this.$emit("focus", e.detail)
				},
				onBlur: function (e) {
					this.setData({
						focused: !1
					}), this.$emit("blur", e.detail)
				},
				onClickIcon: function () {
					this.$emit("click-icon")
				},
				onClear: function () {
					var e = this;
					this.setData({
						value: ""
					}, function () {
						e.emitChange(""), e.$emit("clear", "")
					})
				},
				onConfirm: function () {
					this.$emit("confirm", this.data.value)
				},
				emitChange: function (e) {
					this.$emit("input", e), this.$emit("change", e)
				}
			}
		});
	});
	require("components/vant/dist/field/index.js");
	__wxRoute = 'components/vant/dist/icon/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/icon/index.js';
	define("components/vant/dist/icon/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				dot: Boolean,
				info: null,
				size: null,
				color: String,
				customStyle: String,
				classPrefix: {
					type: String,
					value: "van-icon"
				},
				name: {
					type: String,
					observer: function (n) {
						this.setData({
							isImageName: -1 !== n.indexOf("/")
						})
					}
				}
			},
			methods: {
				onClick: function () {
					this.$emit("click")
				}
			}
		});
	});
	require("components/vant/dist/icon/index.js");
	__wxRoute = 'components/vant/dist/info/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/info/index.js';
	define("components/vant/dist/info/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				dot: Boolean,
				info: null,
				customStyle: String
			}
		});
	});
	require("components/vant/dist/info/index.js");
	__wxRoute = 'components/vant/dist/loading/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/loading/index.js';
	define("components/vant/dist/loading/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				color: String,
				vertical: Boolean,
				type: {
					type: String,
					value: "circular"
				},
				size: String,
				textSize: String
			}
		});
	});
	require("components/vant/dist/loading/index.js");
	__wxRoute = 'components/vant/dist/overlay/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/overlay/index.js';
	define("components/vant/dist/overlay/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				show: Boolean,
				customStyle: String,
				duration: {
					type: null,
					value: 300
				},
				zIndex: {
					type: Number,
					value: 1
				}
			},
			methods: {
				onClick: function () {
					this.$emit("click")
				},
				noop: function () {}
			}
		});
	});
	require("components/vant/dist/overlay/index.js");
	__wxRoute = 'components/vant/dist/picker-column/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/picker-column/index.js';
	define("components/vant/dist/picker-column/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("./../common/component.js"),
			e = require("./../common/utils.js");
		(0, t.VantComponent)({
			classes: ["active-class"],
			props: {
				valueKey: String,
				className: String,
				itemHeight: Number,
				visibleItemCount: Number,
				initialOptions: {
					type: Array,
					value: []
				},
				defaultIndex: {
					type: Number,
					value: 0
				}
			},
			data: {
				startY: 0,
				offset: 0,
				duration: 0,
				startOffset: 0,
				options: [],
				currentIndex: 0
			},
			created: function () {
				var t = this,
					e = this.data,
					n = e.defaultIndex,
					i = e.initialOptions;
				this.set({
					currentIndex: n,
					options: i
				}).then(function () {
					t.setIndex(n)
				})
			},
			watch: {
				defaultIndex: function (t) {
					this.setIndex(t)
				}
			},
			methods: {
				getCount: function () {
					return this.data.options.length
				},
				onTouchStart: function (t) {
					this.setData({
						startY: t.touches[0].clientY,
						startOffset: this.data.offset,
						duration: 0
					})
				},
				onTouchMove: function (t) {
					var n = this.data,
						i = t.touches[0].clientY - n.startY;
					this.setData({
						offset: (0, e.range)(n.startOffset + i, -this.getCount() * n.itemHeight, n.itemHeight)
					})
				},
				onTouchEnd: function () {
					var t = this.data;
					if (t.offset !== t.startOffset) {
						this.setData({
							duration: 200
						});
						var n = (0, e.range)(Math.round(-t.offset / t.itemHeight), 0, this.getCount() - 1);
						this.setIndex(n, !0)
					}
				},
				onClickItem: function (t) {
					var e = t.currentTarget.dataset.index;
					this.setIndex(e, !0)
				},
				adjustIndex: function (t) {
					for (var n = this.data, i = this.getCount(), s = t = (0, e.range)(t, 0, i); s < i; s++)
						if (!this.isDisabled(n.options[s])) return s;
					for (var a = t - 1; a >= 0; a--)
						if (!this.isDisabled(n.options[a])) return a
				},
				isDisabled: function (t) {
					return (0, e.isObj)(t) && t.disabled
				},
				getOptionText: function (t) {
					var n = this.data;
					return (0, e.isObj)(t) && n.valueKey in t ? t[n.valueKey] : t
				},
				setIndex: function (t, e) {
					var n = this,
						i = this.data,
						s = -(t = this.adjustIndex(t) || 0) * i.itemHeight;
					return t !== i.currentIndex ? this.set({
						offset: s,
						currentIndex: t
					}).then(function () {
						e && n.$emit("change", t)
					}) : this.set({
						offset: s
					})
				},
				setValue: function (t) {
					for (var e = this.data.options, n = 0; n < e.length; n++)
						if (this.getOptionText(e[n]) === t) return this.setIndex(n);
					return Promise.resolve()
				},
				getValue: function () {
					var t = this.data;
					return t.options[t.currentIndex]
				}
			}
		});
	});
	require("components/vant/dist/picker-column/index.js");
	__wxRoute = 'components/vant/dist/picker/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/picker/index.js';
	define("components/vant/dist/picker/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../common/component.js"),
			t = require("./shared.js");
		(0, e.VantComponent)({
			classes: ["active-class", "toolbar-class", "column-class"],
			props: Object.assign(Object.assign({}, t.pickerProps), {
				valueKey: {
					type: String,
					value: "text"
				},
				toolbarPosition: {
					type: String,
					value: "top"
				},
				defaultIndex: {
					type: Number,
					value: 0
				},
				columns: {
					type: Array,
					value: [],
					observer: function () {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						this.simple = e.length && !e[0].values, this.children = this.selectAllComponents(".van-picker__column"), Array.isArray(this.children) && this.children.length && this.setColumns().catch(function () {})
					}
				}
			}),
			beforeCreate: function () {
				this.children = []
			},
			methods: {
				noop: function () {},
				setColumns: function () {
					var e = this,
						t = this.data,
						n = (this.simple ? [{
							values: t.columns
						}] : t.columns).map(function (t, n) {
							return e.setColumnValues(n, t.values)
						});
					return Promise.all(n)
				},
				emit: function (e) {
					var t = e.currentTarget.dataset.type;
					this.simple ? this.$emit(t, {
						value: this.getColumnValue(0),
						index: this.getColumnIndex(0)
					}) : this.$emit(t, {
						value: this.getValues(),
						index: this.getIndexes()
					})
				},
				onChange: function (e) {
					this.simple ? this.$emit("change", {
						picker: this,
						value: this.getColumnValue(0),
						index: this.getColumnIndex(0)
					}) : this.$emit("change", {
						picker: this,
						value: this.getValues(),
						index: e.currentTarget.dataset.index
					})
				},
				getColumn: function (e) {
					return this.children[e]
				},
				getColumnValue: function (e) {
					var t = this.getColumn(e);
					return t && t.getValue()
				},
				setColumnValue: function (e, t) {
					var n = this.getColumn(e);
					return null == n ? Promise.reject(new Error("setColumnValue: 对应列不存在")) : n.setValue(t)
				},
				getColumnIndex: function (e) {
					return (this.getColumn(e) || {}).data.currentIndex
				},
				setColumnIndex: function (e, t) {
					var n = this.getColumn(e);
					return null == n ? Promise.reject(new Error("setColumnIndex: 对应列不存在")) : n.setIndex(t)
				},
				getColumnValues: function (e) {
					return (this.children[e] || {}).data.options
				},
				setColumnValues: function (e, t) {
					var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						s = this.children[e];
					return null == s ? Promise.reject(new Error("setColumnValues: 对应列不存在")) : JSON.stringify(s.data.options) === JSON.stringify(t) ? Promise.resolve() : s.set({
						options: t
					}).then(function () {
						n && s.setIndex(0)
					})
				},
				getValues: function () {
					return this.children.map(function (e) {
						return e.getValue()
					})
				},
				setValues: function (e) {
					var t = this,
						n = e.map(function (e, n) {
							return t.setColumnValue(n, e)
						});
					return Promise.all(n)
				},
				getIndexes: function () {
					return this.children.map(function (e) {
						return e.data.currentIndex
					})
				},
				setIndexes: function (e) {
					var t = this,
						n = e.map(function (e, n) {
							return t.setColumnIndex(n, e)
						});
					return Promise.all(n)
				}
			}
		});
	});
	require("components/vant/dist/picker/index.js");
	__wxRoute = 'components/vant/dist/popup/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/popup/index.js';
	define("components/vant/dist/popup/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../common/component.js"),
			t = require("./../mixins/transition.js");
		(0, e.VantComponent)({
			classes: ["enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class"],
			mixins: [(0, t.transition)(!1)],
			props: {
				round: Boolean,
				closeable: Boolean,
				customStyle: String,
				overlayStyle: String,
				transition: {
					type: String,
					observer: "observeClass"
				},
				zIndex: {
					type: Number,
					value: 100
				},
				overlay: {
					type: Boolean,
					value: !0
				},
				closeIcon: {
					type: String,
					value: "cross"
				},
				closeIconPosition: {
					type: String,
					value: "top-right"
				},
				closeOnClickOverlay: {
					type: Boolean,
					value: !0
				},
				position: {
					type: String,
					value: "center",
					observer: "observeClass"
				},
				safeAreaInsetBottom: {
					type: Boolean,
					value: !0
				},
				safeAreaInsetTop: {
					type: Boolean,
					value: !1
				}
			},
			created: function () {
				this.observeClass()
			},
			methods: {
				onClickCloseIcon: function () {
					this.$emit("close")
				},
				onClickOverlay: function () {
					this.$emit("click-overlay"), this.data.closeOnClickOverlay && this.$emit("close")
				},
				observeClass: function () {
					var e = this.data,
						t = e.transition,
						o = e.position,
						s = {
							name: t || o
						};
					"none" === t && (s.duration = 0), this.setData(s)
				}
			}
		});
	});
	require("components/vant/dist/popup/index.js");
	__wxRoute = 'components/vant/dist/radio-group/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/radio-group/index.js';
	define("components/vant/dist/radio-group/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			field: !0,
			relation: {
				name: "radio",
				type: "descendant",
				linked: function (e) {
					this.children = this.children || [], this.children.push(e), this.updateChild(e)
				},
				unlinked: function (e) {
					this.children = this.children.filter(function (i) {
						return i !== e
					})
				}
			},
			props: {
				value: {
					type: null,
					observer: "updateChildren"
				},
				disabled: {
					type: Boolean,
					observer: "updateChildren"
				}
			},
			methods: {
				updateChildren: function () {
					var e = this;
					(this.children || []).forEach(function (i) {
						return e.updateChild(i)
					})
				},
				updateChild: function (e) {
					var i = this.data,
						t = i.value,
						n = i.disabled;
					e.setData({
						value: t,
						disabled: n || e.data.disabled
					})
				}
			}
		});
	});
	require("components/vant/dist/radio-group/index.js");
	__wxRoute = 'components/vant/dist/radio/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/radio/index.js';
	define("components/vant/dist/radio/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			field: !0,
			relation: {
				name: "radio-group",
				type: "ancestor",
				linked: function (e) {
					this.parent = e
				},
				unlinked: function () {
					this.parent = null
				}
			},
			classes: ["icon-class", "label-class"],
			props: {
				value: null,
				disabled: Boolean,
				useIconSlot: Boolean,
				checkedColor: String,
				labelPosition: {
					type: String,
					value: "right"
				},
				labelDisabled: Boolean,
				shape: {
					type: String,
					value: "round"
				},
				iconSize: {
					type: null,
					value: 20
				}
			},
			methods: {
				emitChange: function (e) {
					var n = this.parent || this;
					n.$emit("input", e), n.$emit("change", e)
				},
				onChange: function (e) {
					console.log(e), this.emitChange(this.data.name)
				},
				onClickLabel: function () {
					var e = this.data,
						n = e.disabled,
						t = e.labelDisabled,
						a = e.name;
					n || t || this.emitChange(a)
				}
			}
		});
	});
	require("components/vant/dist/radio/index.js");
	__wxRoute = 'components/vant/dist/steps/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/steps/index.js';
	define("components/vant/dist/steps/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../common/component.js"),
			t = require("./../common/color.js");
		(0, e.VantComponent)({
			props: {
				icon: String,
				steps: Array,
				active: Number,
				direction: {
					type: String,
					value: "horizontal"
				},
				activeColor: {
					type: String,
					value: t.GREEN
				},
				inactiveColor: {
					type: String,
					value: t.GRAY_DARK
				},
				activeIcon: {
					type: String,
					value: "checked"
				},
				inactiveIcon: String
			}
		});
	});
	require("components/vant/dist/steps/index.js");
	__wxRoute = 'components/vant/dist/sticky/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/sticky/index.js';
	define("components/vant/dist/sticky/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				zIndex: {
					type: Number,
					value: 99
				},
				offsetTop: {
					type: Number,
					value: 0,
					observer: "observeContent"
				},
				disabled: {
					type: Boolean,
					observer: function (t) {
						this.mounted && (t ? this.disconnectObserver() : this.initObserver())
					}
				},
				container: {
					type: null,
					observer: function (t) {
						"function" == typeof t && this.data.height && this.observeContainer()
					}
				}
			},
			data: {
				wrapStyle: "",
				containerStyle: ""
			},
			methods: {
				setStyle: function () {
					var t = this.data,
						e = t.offsetTop,
						n = t.height,
						i = t.fixed,
						o = t.zIndex;
					i ? this.setData({
						wrapStyle: "top: ".concat(e, "px;"),
						containerStyle: "height: ".concat(n, "px; z-index: ").concat(o, ";")
					}) : this.setData({
						wrapStyle: "",
						containerStyle: ""
					})
				},
				getContainerRect: function () {
					var t = this.data.container();
					return new Promise(function (e) {
						return t.boundingClientRect(e).exec()
					})
				},
				initObserver: function () {
					var t = this;
					this.disconnectObserver(), this.getRect(".van-sticky").then(function (e) {
						t.setData({
							height: e.height
						}), wx.nextTick(function () {
							t.observeContent(), t.observeContainer()
						})
					})
				},
				disconnectObserver: function (t) {
					if (t) {
						var e = this[t];
						e && e.disconnect()
					} else this.contentObserver && this.contentObserver.disconnect(), this.containerObserver && this.containerObserver.disconnect()
				},
				observeContent: function () {
					var t = this,
						e = this.data.offsetTop;
					this.disconnectObserver("contentObserver");
					var n = this.createIntersectionObserver({
						thresholds: [0, 1]
					});
					this.contentObserver = n, n.relativeToViewport({
						top: -e
					}), n.observe(".van-sticky", function (e) {
						t.data.disabled || t.setFixed(e.boundingClientRect.top)
					})
				},
				observeContainer: function () {
					var t = this;
					if ("function" == typeof this.data.container) {
						var e = this.data.height;
						this.getContainerRect().then(function (n) {
							t.containerHeight = n.height, t.disconnectObserver("containerObserver");
							var i = t.createIntersectionObserver({
								thresholds: [0, 1]
							});
							t.containerObserver = i, i.relativeToViewport({
								top: t.containerHeight - e
							}), i.observe(".van-sticky", function (e) {
								t.data.disabled || t.setFixed(e.boundingClientRect.top)
							})
						})
					}
				},
				setFixed: function (t) {
					var e = this,
						n = this.data,
						i = n.offsetTop,
						o = n.height,
						s = this.containerHeight,
						r = s && o ? t > o - s && t < i : t < i;
					this.$emit("scroll", {
						scrollTop: t,
						isFixed: r
					}), this.setData({
						fixed: r
					}), wx.nextTick(function () {
						e.setStyle()
					})
				}
			},
			mounted: function () {
				this.mounted = !0, this.data.disabled || this.initObserver()
			},
			destroyed: function () {
				this.disconnectObserver()
			}
		});
	});
	require("components/vant/dist/sticky/index.js");
	__wxRoute = 'components/vant/dist/tab/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/tab/index.js';
	define("components/vant/dist/tab/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			relation: {
				name: "tabs",
				type: "ancestor",
				linked: function (t) {
					this.parent = t
				},
				unlinked: function () {
					this.parent = null
				}
			},
			props: {
				dot: Boolean,
				info: null,
				title: String,
				disabled: Boolean,
				titleStyle: String,
				name: {
					type: [Number, String],
					value: ""
				}
			},
			data: {
				active: !1
			},
			watch: {
				title: "update",
				disabled: "update",
				dot: "update",
				info: "update",
				titleStyle: "update"
			},
			methods: {
				getComputedName: function () {
					return "" !== this.data.name ? this.data.name : this.index
				},
				updateRender: function (t, e) {
					var n = e.data;
					this.inited = this.inited || t, this.setData({
						active: t,
						shouldRender: this.inited || !n.lazyRender,
						shouldShow: t || n.animated
					})
				},
				update: function () {
					this.parent && this.parent.updateTabs()
				}
			}
		});
	});
	require("components/vant/dist/tab/index.js");
	__wxRoute = 'components/vant/dist/tabs/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/tabs/index.js';
	define("components/vant/dist/tabs/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, r) {
			return i(t) || n(t, r) || e()
		}

		function e() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}

		function n(t, e) {
			if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
				var n = [],
					i = !0,
					r = !1,
					a = void 0;
				try {
					for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
				} catch (t) {
					r = !0, a = t
				} finally {
					try {
						i || null == o.return || o.return()
					} finally {
						if (r) throw a
					}
				}
				return n
			}
		}

		function i(t) {
			if (Array.isArray(t)) return t
		}
		var r = require("./../common/component.js"),
			a = require("./../mixins/touch.js"),
			s = require("./../common/utils.js");
		(0, r.VantComponent)({
			mixins: [a.touch],
			classes: ["nav-class", "tab-class", "tab-active-class", "line-class"],
			relation: {
				name: "tab",
				type: "descendant",
				linked: function (t) {
					t.index = this.children.length, this.children.push(t), this.updateTabs()
				},
				unlinked: function (t) {
					this.children = this.children.filter(function (e) {
						return e !== t
					}).map(function (t, e) {
						return t.index = e, t
					}), this.updateTabs()
				}
			},
			props: {
				color: {
					type: String,
					observer: "setLine"
				},
				sticky: Boolean,
				animated: {
					type: Boolean,
					observer: function () {
						this.setTrack(), this.children.forEach(function (t) {
							return t.updateRender()
						})
					}
				},
				swipeable: Boolean,
				lineWidth: {
					type: [String, Number],
					value: -1,
					observer: "setLine"
				},
				lineHeight: {
					type: [String, Number],
					value: -1,
					observer: "setLine"
				},
				titleActiveColor: String,
				titleInactiveColor: String,
				active: {
					type: [String, Number],
					value: 0,
					observer: function (t) {
						t !== this.getCurrentName() && this.setCurrentIndexByName(t)
					}
				},
				type: {
					type: String,
					value: "line"
				},
				border: {
					type: Boolean,
					value: !0
				},
				ellipsis: {
					type: Boolean,
					value: !0
				},
				duration: {
					type: Number,
					value: .3
				},
				zIndex: {
					type: Number,
					value: 1
				},
				swipeThreshold: {
					type: Number,
					value: 4,
					observer: function (t) {
						this.setData({
							scrollable: this.children.length > t || !this.data.ellipsis
						})
					}
				},
				offsetTop: {
					type: Number,
					value: 0
				},
				lazyRender: {
					type: Boolean,
					value: !0
				}
			},
			data: {
				tabs: [],
				lineStyle: "",
				scrollLeft: 0,
				scrollable: !1,
				trackStyle: "",
				currentIndex: null,
				container: null
			},
			beforeCreate: function () {
				this.children = []
			},
			mounted: function () {
				var t = this;
				this.setData({
					container: function () {
						return t.createSelectorQuery().select(".van-tabs")
					}
				}), this.setLine(!0), this.setTrack(), this.scrollIntoView()
			},
			methods: {
				updateTabs: function () {
					var t = this.children,
						e = void 0 === t ? [] : t,
						n = this.data;
					this.setData({
						tabs: e.map(function (t) {
							return t.data
						}),
						scrollable: this.children.length > n.swipeThreshold || !n.ellipsis
					}), this.setCurrentIndexByName(this.getCurrentName() || n.active)
				},
				trigger: function (t) {
					var e = this.data.currentIndex,
						n = this.children[e];
					(0, s.isDef)(n) && this.$emit(t, {
						index: e,
						name: n.getComputedName(),
						title: n.data.title
					})
				},
				onTap: function (t) {
					var e = this,
						n = t.currentTarget.dataset.index;
					this.children[n].data.disabled ? this.trigger("disabled") : (this.setCurrentIndex(n), wx.nextTick(function () {
						e.trigger("click")
					}))
				},
				setCurrentIndexByName: function (t) {
					var e = this.children,
						n = (void 0 === e ? [] : e).filter(function (e) {
							return e.getComputedName() === t
						});
					n.length && this.setCurrentIndex(n[0].index)
				},
				setCurrentIndex: function (t) {
					var e = this,
						n = this.data,
						i = this.children,
						r = void 0 === i ? [] : i;
					if (!(!(0, s.isDef)(t) || t >= r.length || t < 0) && (r.forEach(function (n, i) {
							var r = i === t;
							r === n.data.active && n.inited || n.updateRender(r, e)
						}), t !== n.currentIndex)) {
						var a = null !== n.currentIndex;
						this.setData({
							currentIndex: t
						}), wx.nextTick(function () {
							e.setLine(), e.setTrack(), e.scrollIntoView(), e.trigger("input"), a && e.trigger("change")
						})
					}
				},
				getCurrentName: function () {
					var t = this.children[this.data.currentIndex];
					if (t) return t.getComputedName()
				},
				setLine: function (t) {
					var e = this;
					if ("line" === this.data.type) {
						var n = this.data,
							i = n.color,
							r = n.duration,
							a = n.currentIndex,
							o = n.lineWidth,
							c = n.lineHeight;
						this.getRect(".van-tab", !0).then(function () {
							var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								l = n[a];
							if (null != l) {
								var u = -1 !== o ? o : l.width / 2,
									d = -1 !== c ? "height: ".concat((0, s.addUnit)(c), "; border-radius: ").concat((0, s.addUnit)(c), ";") : "",
									h = n.slice(0, a).reduce(function (t, e) {
										return t + e.width
									}, 0);
								h += (l.width - u) / 2;
								var f = t ? "" : "transition-duration: ".concat(r, "s; -webkit-transition-duration: ").concat(r, "s;");
								e.setData({
									lineStyle: "\n            ".concat(d, "\n            width: ").concat((0, s.addUnit)(u), ";\n            background-color: ").concat(i, ";\n            -webkit-transform: translateX(").concat(h, "px);\n            transform: translateX(").concat(h, "px);\n            ").concat(f, "\n          ")
								})
							}
						})
					}
				},
				setTrack: function () {
					var t = this.data,
						e = t.animated,
						n = t.duration,
						i = t.currentIndex;
					e && this.setData({
						trackStyle: "\n          transform: translate3d(".concat(-100 * i, "%, 0, 0);\n          -webkit-transition-duration: ").concat(n, "s;\n          transition-duration: ").concat(n, "s;\n        ")
					})
				},
				scrollIntoView: function () {
					var e = this,
						n = this.data,
						i = n.currentIndex;
					n.scrollable && Promise.all([this.getRect(".van-tab", !0), this.getRect(".van-tabs__nav")]).then(function (n) {
						var r = t(n, 2),
							a = r[0],
							s = r[1],
							o = a[i],
							c = a.slice(0, i).reduce(function (t, e) {
								return t + e.width
							}, 0);
						e.setData({
							scrollLeft: c - (s.width - o.width) / 2
						})
					})
				},
				onTouchScroll: function (t) {
					this.$emit("scroll", t.detail)
				},
				onTouchStart: function (t) {
					this.data.swipeable && this.touchStart(t)
				},
				onTouchMove: function (t) {
					this.data.swipeable && this.touchMove(t)
				},
				onTouchEnd: function () {
					if (this.data.swipeable) {
						var t = this.data,
							e = t.tabs,
							n = t.currentIndex,
							i = this.direction,
							r = this.deltaX,
							a = this.offsetX;
						"horizontal" === i && a >= 50 && (r > 0 && 0 !== n ? this.setCurrentIndex(n - 1) : r < 0 && n !== e.length - 1 && this.setCurrentIndex(n + 1))
					}
				}
			}
		});
	});
	require("components/vant/dist/tabs/index.js");
	__wxRoute = 'components/vant/dist/tag/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/tag/index.js';
	define("components/vant/dist/tag/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(0, require("./../common/component.js").VantComponent)({
			props: {
				size: String,
				mark: Boolean,
				color: String,
				plain: Boolean,
				round: Boolean,
				textColor: String,
				type: {
					type: String,
					value: "default"
				},
				closeable: Boolean
			},
			methods: {
				onClose: function () {
					this.$emit("close")
				}
			}
		});
	});
	require("components/vant/dist/tag/index.js");
	__wxRoute = 'components/vant/dist/transition/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/transition/index.js';
	define("components/vant/dist/transition/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var s = require("./../common/component.js"),
			e = require("./../mixins/transition.js");
		(0, s.VantComponent)({
			classes: ["enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class"],
			mixins: [(0, e.transition)(!0)]
		});
	});
	require("components/vant/dist/transition/index.js");
	__wxRoute = 'components/vant/dist/uploader/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/dist/uploader/index.js';
	define("components/vant/dist/uploader/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./../common/component.js"),
			t = require("./utils.js");
		(0, e.VantComponent)({
			props: {
				disabled: Boolean,
				multiple: Boolean,
				uploadText: String,
				useBeforeRead: Boolean,
				previewSize: {
					type: null,
					value: 90
				},
				name: {
					type: [Number, String],
					value: ""
				},
				accept: {
					type: String,
					value: "image"
				},
				sizeType: {
					type: Array,
					value: ["original", "compressed"]
				},
				capture: {
					type: Array,
					value: ["album", "camera"]
				},
				fileList: {
					type: Array,
					value: [],
					observer: "formatFileList"
				},
				maxSize: {
					type: Number,
					value: Number.MAX_VALUE
				},
				maxCount: {
					type: Number,
					value: 100
				},
				deletable: {
					type: Boolean,
					value: !0
				},
				previewImage: {
					type: Boolean,
					value: !0
				},
				previewFullImage: {
					type: Boolean,
					value: !0
				},
				imageFit: {
					type: String,
					value: "scaleToFill"
				}
			},
			data: {
				lists: [],
				computedPreviewSize: "",
				isInCount: !0
			},
			methods: {
				formatFileList: function () {
					var e = this.data,
						i = e.fileList,
						a = void 0 === i ? [] : i,
						n = e.maxCount,
						r = a.map(function (e) {
							return Object.assign(Object.assign({}, e), {
								isImage: void 0 === e.isImage ? (0, t.isImageFile)(e) : e.isImage
							})
						});
					this.setData({
						lists: r,
						isInCount: r.length < n
					})
				},
				startUpload: function () {
					var e = this;
					if (!this.data.disabled) {
						var t = this.data,
							i = t.name,
							a = void 0 === i ? "" : i,
							n = t.capture,
							r = t.maxCount,
							s = t.multiple,
							o = t.maxSize,
							l = t.accept,
							u = t.sizeType,
							m = t.lists,
							c = t.useBeforeRead,
							p = void 0 !== c && c,
							f = r - m.length;
						("image" === l ? new Promise(function (e, t) {
							wx.chooseImage({
								count: s ? f > 9 ? 9 : f : 1,
								sourceType: n,
								sizeType: u,
								success: e,
								fail: t
							})
						}) : new Promise(function (e, t) {
							wx.chooseMessageFile({
								count: s ? f : 1,
								type: "file",
								success: e,
								fail: t
							})
						})).then(function (t) {
							var i = s ? t.tempFiles : t.tempFiles[0];
							if (i instanceof Array) {
								if (!i.every(function (e) {
										return e.size <= o
									})) return void e.$emit("oversize", {
									name: a
								})
							} else if (i.size > o) return void e.$emit("oversize", {
								name: a
							});
							p ? e.$emit("before-read", {
								file: i,
								name: a,
								callback: function (t) {
									t && e.$emit("after-read", {
										file: i,
										name: a
									})
								}
							}) : e.$emit("after-read", {
								file: i,
								name: a
							})
						}).catch(function (t) {
							e.$emit("error", t)
						})
					}
				},
				deleteItem: function (e) {
					var t = e.currentTarget.dataset.index;
					this.$emit("delete", {
						index: t,
						name: this.data.name
					})
				},
				doPreviewImage: function (e) {
					if (this.data.previewFullImage) {
						var t = e.currentTarget.dataset.url,
							i = this.data.lists.filter(function (e) {
								return e.isImage
							}).map(function (e) {
								return e.url || e.path
							});
						this.$emit("click-preview", {
							url: t,
							name: this.data.name
						}), wx.previewImage({
							urls: i,
							current: t,
							fail: function () {
								wx.showToast({
									title: "预览图片失败",
									icon: "none"
								})
							}
						})
					}
				}
			}
		});
	});
	require("components/vant/dist/uploader/index.js");
	__wxRoute = 'components/vant/mp-html/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/mp-html/index.js';
	define("components/vant/mp-html/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var t = require("./parser.js"),
			n = [];
		Component({
			data: {
				nodes: []
			},
			properties: {
				containerStyle: String,
				content: {
					type: String,
					value: "",
					observer: function (e) {
						this.setContent(e)
					}
				},
				copyLink: {
					type: Boolean,
					value: !0
				},
				domain: String,
				errorImg: String,
				lazyLoad: Boolean,
				loadingImg: String,
				pauseVideo: {
					type: Boolean,
					value: !0
				},
				previewImg: {
					type: Boolean,
					value: !0
				},
				scrollTable: Boolean,
				selectable: null,
				setTitle: {
					type: Boolean,
					value: !0
				},
				showImgMenu: {
					type: Boolean,
					value: !0
				},
				tagStyle: Object,
				useAnchor: null
			},
			created: function () {
				this.plugins = [];
				for (var e = n.length; e--;) this.plugins.push(new n[e](this))
			},
			detached: function () {
				clearInterval(this._timer), this._hook("onDetached")
			},
			methods: {
				in: function (e, t, n) {
					e && t && n && (this._in = {
						page: e,
						selector: t,
						scrollTop: n
					})
				},
				navigateTo: function (t, n) {
					var o = this;
					return new Promise(function (i, r) {
						if (!o.data.useAnchor) return r("Anchor is disabled");
						var a = wx.createSelectorQuery().in(o._in ? o._in.page : o).select((o._in ? o._in.selector : "._root") + (t ? "".concat(">>>", "#").concat(t) : "")).boundingClientRect();
						o._in ? a.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect() : a.selectViewport().scrollOffset(), a.exec(function (t) {
							if (!t[0]) return r("Label not found");
							var a = t[1].scrollTop + t[0].top - (t[2] ? t[2].top : 0) + (n || parseInt(o.data.useAnchor) || 0);
							o._in ? o._in.page.setData(e({}, o._in.scrollTop, a)) : wx.pageScrollTo({
								scrollTop: a,
								duration: 300
							}), i()
						})
					})
				},
				getText: function (e) {
					var t = "";
					return function e(n) {
						for (var o = 0; o < n.length; o++) {
							var i = n[o];
							if ("text" == i.type) t += i.text.replace(/&amp;/g, "&");
							else if ("br" == i.name) t += "\n";
							else {
								var r = "p" == i.name || "div" == i.name || "tr" == i.name || "li" == i.name || "h" == i.name[0] && i.name[1] > "0" && i.name[1] < "7";
								r && t && "\n" != t[t.length - 1] && (t += "\n"), i.children && e(i.children), r && "\n" != t[t.length - 1] ? t += "\n" : "td" != i.name && "th" != i.name || (t += "\t")
							}
						}
					}(e || this.data.nodes), t
				},
				getRect: function () {
					var e = this;
					return new Promise(function (t, n) {
						wx.createSelectorQuery().in(e).select("._root").boundingClientRect().exec(function (e) {
							return e[0] ? t(e[0]) : n("Root label not found")
						})
					})
				},
				setContent: function (e, n) {
					var o = this;
					this.imgList && n || (this.imgList = []), this._videos = [];
					var i = {},
						r = new t(this).parse(e);
					if (n)
						for (var a = this.data.nodes.length, l = r.length; l--;) i["nodes[".concat(a + l, "]")] = r[l];
					else i.nodes = r;
					this.setData(i, function () {
						o._hook("onLoad"), o.triggerEvent("load")
					});
					var s;
					clearInterval(this._timer), this._timer = setInterval(function () {
						o.getRect().then(function (e) {
							e.height == s && (o.triggerEvent("ready", e), clearInterval(o._timer)), s = e.height
						}).catch(function () {})
					}, 350)
				},
				_hook: function (e) {
					for (var t = n.length; t--;) this.plugins[t][e] && this.plugins[t][e]()
				},
				_add: function (e) {
					e.detail.root = this
				}
			}
		});
	});
	require("components/vant/mp-html/index.js");
	__wxRoute = 'components/vant/mp-html/node/node';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'components/vant/mp-html/node/node.js';
	define("components/vant/mp-html/node/node.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, i, e) {
			return i in t ? Object.defineProperty(t, i, {
				value: e,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[i] = e, t
		}
		Component({
			data: {
				ctrl: {}
			},
			properties: {
				childs: Array,
				opts: Array
			},
			attached: function () {
				this.triggerEvent("add", this, {
					bubbles: !0,
					composed: !0
				})
			},
			methods: {
				noop: function () {},
				getNode: function (t) {
					for (var i = t.split("_"), e = this.data.childs[i[0]], r = 1; r < i.length; r++) e = e.children[i[r]];
					return e
				},
				play: function (t) {
					if (this.root.data.pauseVideo) {
						for (var i = !1, e = t.target.id, r = this.root._videos.length; r--;) this.root._videos[r].id == e ? i = !0 : this.root._videos[r].pause();
						if (!i) {
							var a = wx.createVideoContext(e, this);
							a.id = e, this.root._videos.push(a)
						}
					}
				},
				imgTap: function (t) {
					var i = this.getNode(t.target.dataset.i);
					if (i.a) return this.linkTap(i.a);
					if (!i.attrs.ignore && (this.root.triggerEvent("imgtap", i.attrs), this.root.data.previewImg)) {
						var e = this.root.imgList[i.i];
						wx.previewImage({
							current: e,
							urls: this.root.imgList
						})
					}
				},
				imgLoad: function (i) {
					var e, r = i.target.dataset.i;
					this.getNode(r).w ? (this.data.opts[1] && !this.data.ctrl[r] || -1 == this.data.ctrl[r]) && (e = 1) : e = i.detail.width, e && this.setData(t({}, "ctrl." + r, e))
				},
				linkTap: function (t) {
					var i = t.currentTarget ? this.getNode(t.currentTarget.dataset.i) : {},
						e = i.attrs || t,
						r = e.href;
					this.root.triggerEvent("linktap", Object.assign({
						innerText: this.root.getText(i.children || [])
					}, e)), r && ("#" == r[0] ? this.root.navigateTo(r.substring(1)).catch(function () {}) : r.includes("://") ? this.root.data.copyLink && wx.setClipboardData({
						data: r,
						success: function () {
							return wx.showToast({
								title: "链接已复制"
							})
						}
					}) : wx.navigateTo({
						url: r,
						fail: function () {
							wx.switchTab({
								url: r,
								fail: function () {}
							})
						}
					}))
				},
				mediaError: function (i) {
					var e = i.target.dataset.i,
						r = this.getNode(e);
					if ("video" == r.name || "audio" == r.name) {
						var a = (this.data.ctrl[e] || 0) + 1;
						if (a > r.src.length && (a = 0), a < r.src.length) return this.setData(t({}, "ctrl." + e, a))
					} else "img" == r.name && this.data.opts[2] && this.setData(t({}, "ctrl." + e, -1));
					this.root && this.root.triggerEvent("error", {
						source: r.name,
						attrs: r.attrs,
						errMsg: i.detail.errMsg
					})
				}
			}
		});
	});
	require("components/vant/mp-html/node/node.js");
	__wxRoute = 'pages/leaveSchool/leaveSchoolDetailv2';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/leaveSchool/leaveSchoolDetailv2.js';
	define("pages/leaveSchool/leaveSchoolDetailv2.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function a(e, a) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				a && (o = o.filter(function (a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				})), t.push.apply(t, o)
			}
			return t
		}

		function t(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? a(Object(n), !0).forEach(function (a) {
					o(e, a, n[a])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (a) {
					Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
				})
			}
			return e
		}

		function o(e, a, t) {
			return a in e ? Object.defineProperty(e, a, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[a] = t, e
		}
		var n = e(require("./../../vendor.js")(0)),
			r = e(require("./../../store/index.js")),
			l = require("./../../vendor.js")(4),
			i = e(require("./../../mixins/leaveSchool.js")),
			s = e(require("./../../mixins/exist.js")),
			c = e(require("./../../mixins/login.js")),
			h = e(require("./../../common/utils.js")),
			p = e(require("./../../common/area.js"));
		n.default.page({
			store: r.default,
			mixins: [s.default, c.default, i.default],
			data: {
				preSet: {
					studentNoLabel: "学号",
					studentNameLabel: "姓名",
					willStayLabel: "是否离校",
					lxDatetimePlanLabel: "计划离校时间",
					leavePosiLabel: "目的地",
					transportationLabel: "交通方式",
					fxDatetimePlanLabel: "预估返校日期",
					willStayArray: ["离校", "不离校"],
					stayReasonLabel: "留校事由",
					stayReasonArray: ["假期有课程和学习任务", "撰写论文和科研项目需要", "家庭关系矛盾", "个人经济困难", "工作或实习需要", "身体健康原因", "计划与家人在上海过年", "其他"],
					noRecord: "未备案",
					goChangeRecordLabel: "修改备案"
				},
				preSetCN: {
					studentNoLabel: "学号",
					studentNameLabel: "姓名",
					willStayLabel: "是否离校",
					willStayPrompt: "请选择2月12日前是否离校",
					phoneLabel: "当前中国大陆手机号码",
					phonePrompt: "请填写个人紧急联系方式",
					outCampusAddressLabel: "行政区域",
					outCampusAddressPrompt: "请填写中国大陆校外常住地址，若无，请填写校内宿舍",
					q2_4_streetLabel: "街道（村）",
					q2_5_streetDetailLabel: "详细地址",
					emergencyContactPrompt: "请填写假期紧急联络人，若无，请填写学院辅导员信息",
					q3_1_name_emergency_contactLabel: "姓名",
					q3_2_phone_emergency_contactLabel: "中国大陆手机号码",
					q3_3_relation_emergency_contactLabel: "关系",
					studyTypeLabel: "学籍类型",
					studyTypePrompt: "请填写学籍信息",
					q5_1_companyLabel: "当前工作单位名称",
					q5_2_companyAddressLabel: "当前工作联系地址",
					q5_2_4_streetLabel: "街道（村）",
					q5_2_5_streetDetailLabel: "详细地址",
					q6_originalSchoolLabel: "原学校名称",
					q10_trainTypeLabel: "班次类型",
					q11_trainNumberLabel: "班次号（数字类型）",
					q12_1_train_carriageLabel: "车厢号",
					q12_2_train_seatLabel: "座位号",
					q13_airline_companyLabel: "航空公司",
					q14_flight_numberLabel: "航班号（数字类型）",
					q15_flight_seatLabel: "座位号（两位数字）",
					goAbroadLabel: "是否出国",
					goAbroadPrompt: "请选择寒假是否有出国计划",
					lxDatetimePlanLabel: "离校时间",
					leavePosiLabel: "目的地",
					leaveAbroadPosiLabel: "国外目的地",
					transportationLabel: "交通方式",
					transportationPrompt: "请填写交通方式",
					fxDatetimePlanLabel: "预估返校日期",
					fxDatetimePlanPrompt: "请选择预估返校日期",
					submitLabel: "提交备案",
					placeholderSelect: "请选择",
					placeholderFill: "请填写",
					leaveTime: "请选择",
					leavePosi: "请选择",
					leaveAbroadPosi: "请选择",
					stayArray: ["计划离校", "已离校", "不离校"],
					relationArray: ["配偶", "父亲", "母亲", "兄弟", "姐妹", "祖父母", "其他亲戚", "同学", "同事", "街坊邻里", "同济教师"],
					studyTypeArray: ["非全日制学生", "全日制学生", "交流生", "预科生"],
					transportationArray: ["火车", "飞机", "客运汽车", "自驾", "市内交通"],
					trainTypeArray: ["C", "D", "G", "K", "L", "T", "Y", "Z", " "],
					airlineArray: ["2G", "2P", "3E", "3K", "3U", "5B", "5J", "7C", "8L", "8M", "9C", "9D", "9H", "A6", "AA", "AC", "AE", "AF", "AH", "AI", "AK", "AL", "AM", "AQ", "AY", "AZ", "B7", "BA", "BI", "BK", "BL", "BR", "BS", "CA", "CA", "CA", "CA", "CI", "CN", "CX", "CZ", "D7", "DD", "DL", "DR", "DV", "DZ", "E3", "EK", "ET", "EU", "EY", "FD", "FE", "FG", "FM", "FU", "G5", "G9", "GA", "GJ", "GK", "GS", "GT", "GX", "GY", "HA", "HB", "HO", "HU", "HX", "HY", "HZ", "I4", "IA", "IB", "ID", "IJ", "IK", "IO", "IT", "J2", "JD", "JQ", "JR", "JS", "JT", "K6", "KA", "KC", "KE", "KL", "KN", "KQ", "KY", "LH", "LJ", "LO", "LQ", "LT", "LX", "LY", "M0", "MD", "MF", "MH", "MI", "MK", "MM", "MR", "MS", "MU", "MU", "NH", "NL", "NO", "NS", "NX", "NZ", "OD", "OM", "OQ", "OS", "OX", "OZ", "PG", "PK", "PN", "PR", "PS", "Q2", "QD", "QF", "QG", "QH", "QR", "QV", "QW", "R3", "RY", "S7", "SC", "SJ", "SK", "SL", "SQ", "SU", "SV", "SZ", "T5", "TG", "TK", "TR", "TV", "TW", "U6", "UA", "UL", "UO", "UQ", "UT", "VJ", "VN", "VS", "VZ", "W5", "WE", "WY", "XJ", "XW", "Y7", "Y8", "Z2", "ZA", "ZE", "ZF", "ZH", "ZM"],
					abroadArray: ["不出国", "出国"],
					stayReasonArray: ["假期有课程和学习任务", "撰写论文和科研项目需要", "疫情防控要求", "家庭关系矛盾", "路途遥远花费较大", "工作或实习需要", "身体健康原因", "计划与家人在上海过年", "其他"],
					stayReasonLabel: "留校事由",
					stayReasonOtherLabel: "请填写留校事由",
					stayReasonPrompt: "请选择留校事由",
					noRecord: "未备案",
					goChangeRecordLabel: "修改备案",
					multiRow: "normal"
				},
				preSetEN: {
					studentNoLabel: "Student NO.",
					studentNameLabel: "Name",
					willStayLabel: "Stay in School druing vacation or not",
					willStayPrompt: "Will you leave school before Feb. 12th 2021",
					phoneLabel: "Phone Number",
					phonePrompt: "Pls fill in your Cell Phone Number in China",
					outCampusAddressLabel: "Postal off campus addr. in China ",
					outCampusAddressPrompt: "Only for the International student & HK, Macau or Taiwan Student: You can fill in the dormitory addr. , if you don't have postal off campus addr. in China",
					q2_4_streetLabel: "Street (vallage,community)",
					q2_5_streetDetailLabel: "Detailed address",
					emergencyContactPrompt: "Emergency contact information",
					q3_1_name_emergency_contactLabel: "Name",
					q3_2_phone_emergency_contactLabel: "Phone Number",
					q3_3_relation_emergency_contactLabel: "Relation",
					studyTypeLabel: "The type of status as a student",
					studyTypePrompt: "Pls choose the type of your status as a student",
					q5_1_companyLabel: "Employer Name",
					q5_2_companyAddressLabel: "Postal work addr. in China",
					q5_2_4_streetLabel: "Street (vallage,community)",
					q5_2_5_streetDetailLabel: "Detailed address",
					q6_originalSchoolLabel: "The university you come from",
					q10_trainTypeLabel: "Train type",
					q11_trainNumberLabel: "Train No.",
					q12_1_train_carriageLabel: "Carriage No.",
					q12_2_train_seatLabel: "Seat No.",
					q13_airline_companyLabel: "Airline Co.",
					q14_flight_numberLabel: "Fligt No.",
					q15_flight_seatLabel: "Seat No.",
					goAbroadLabel: "Leave China Mainland or not",
					goAbroadPrompt: "Pls indicate will you leave China Mainland or not.",
					lxDatetimePlanLabel: "Leave-school Date",
					leavePosiLabel: "Destination",
					leaveAbroadPosiLabel: "Destination out of China Mainland",
					transportationLabel: "Transportation",
					transportationPrompt: "Pls choose your scheduled transportation",
					fxDatetimePlanLabel: "Scheduled Return-school Date",
					fxDatetimePlanPrompt: "Pls fill in your scheduled return-school date",
					submitLabel: "Submit",
					placeholderSelect: "Pls select one",
					placeholderFill: "Pls fill in",
					leaveTime: "Pls select the datetime",
					leavePosi: "Pls select ",
					leaveAbroadPosi: "Pls select",
					stayArray: ["Plan to leave school", "Have left school", "Won't leave"],
					relationArray: ["Spouse", "Father", "Mother", "Brother", "Sister", "Grandparents", "Other relatives", "Schoolmate", "Colleague", "Neighbours", "Tongji teacher"],
					studyTypeArray: ["Part-time student", "Full-time student", "Exchange student", "Temporary student"],
					transportationArray: ["Train", "AirPlane", "Intercity Bus", "Non-Public trasportation", "Incity transportation"],
					trainTypeArray: ["C", "D", "G", "K", "L", "T", "Y", "Z", " "],
					airlineArray: ["2G", "2P", "3E", "3K", "3U", "5B", "5J", "7C", "8L", "8M", "9C", "9D", "9H", "A6", "AA", "AC", "AE", "AF", "AH", "AI", "AK", "AL", "AM", "AQ", "AY", "AZ", "B7", "BA", "BI", "BK", "BL", "BR", "BS", "CA", "CA", "CA", "CA", "CI", "CN", "CX", "CZ", "D7", "DD", "DL", "DR", "DV", "DZ", "E3", "EK", "ET", "EU", "EY", "FD", "FE", "FG", "FM", "FU", "G5", "G9", "GA", "GJ", "GK", "GS", "GT", "GX", "GY", "HA", "HB", "HO", "HU", "HX", "HY", "HZ", "I4", "IA", "IB", "ID", "IJ", "IK", "IO", "IT", "J2", "JD", "JQ", "JR", "JS", "JT", "K6", "KA", "KC", "KE", "KL", "KN", "KQ", "KY", "LH", "LJ", "LO", "LQ", "LT", "LX", "LY", "M0", "MD", "MF", "MH", "MI", "MK", "MM", "MR", "MS", "MU", "MU", "NH", "NL", "NO", "NS", "NX", "NZ", "OD", "OM", "OQ", "OS", "OX", "OZ", "PG", "PK", "PN", "PR", "PS", "Q2", "QD", "QF", "QG", "QH", "QR", "QV", "QW", "R3", "RY", "S7", "SC", "SJ", "SK", "SL", "SQ", "SU", "SV", "SZ", "T5", "TG", "TK", "TR", "TV", "TW", "U6", "UA", "UL", "UO", "UQ", "UT", "VJ", "VN", "VS", "VZ", "W5", "WE", "WY", "XJ", "XW", "Y7", "Y8", "Z2", "ZA", "ZE", "ZF", "ZH", "ZM"],
					abroadArray: ["Won't leave China mainland", "Will leave China Mainland"],
					stayReasonArray: ["Have courses and study tasks", "Work on my paper or research", "Epidemic prevention and control requirements", "Contradictions in family relations", "It's a long way to my home and costs a lot", "The requirement of job or internship", "Physical health reasons", "Spend the vacation with family in Shanghai", "Other reasons"],
					stayReasonLabel: "Why do you plan to stay at Tongji Univ during the vacation?",
					stayReasonOtherLabel: "Pls fill in your reason",
					stayReasonPrompt: "Pls select your reason",
					noRecord: "No record",
					goChangeRecordLabel: "Modification record",
					multiRow: "normal"
				},
				language: "zh",
				willStay: "",
				lxDatetimePlan: "",
				fxDatetimePlan: "",
				leavePosi: "",
				transportation: "",
				stayReason: ""
			},
			onLoad: function () {
				var e = getApp();
				this.language = e.$wepy.$options.globalData.language, "zh" === this.language ? this.preSet = JSON.parse(JSON.stringify(this.preSetCN)) : this.preSet = JSON.parse(JSON.stringify(this.preSetEN)), this.areaList = p.default.data.areaList, this.doRefreshData()
			},
			onShow: function () {},
			computed: t({}, (0, l.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				leaveInfo: function (e) {
					return e.leaveSchool.leaveInfo
				}
			})),
			methods: t({}, (0, l.mapActions)(["setApplyInfo"]), {
				goChangeSubmit: function () {
					wx.redirectTo({
						url: "/pages/leaveSchool/leaveSchoolv2"
					})
				},
				doRefreshData: function () {
					var e = this.preSetCN.stayArray.indexOf(this.leaveInfo.q7LeaveSchoolPlan);
					if (this.willStay = this.preSet.stayArray[e], "其他" === this.leaveInfo.stayReason) this.stayReason = this.leaveInfo.stayReasonOther;
					else {
						var a = this.preSetCN.stayReasonArray.indexOf(this.leaveInfo.stayReason);
						this.stayReason = this.preSet.stayReasonArray[a]
					}!0 !== this.leaveInfo.willStay && (this.lxDatetimePlan = h.default.getFormatDate(h.default.adaptAppleDatetime(this.leaveInfo.lxDatetimePlan)), null !== this.leaveInfo.fxDatetimePlan ? this.fxDatetimePlan = h.default.getFormatDate(h.default.adaptAppleDatetime(this.leaveInfo.fxDatetimePlan)) : this.fxDatetimePlan = this.preSet.noRecord, "中国" === this.leaveInfo.locNation ? this.leavePosi = this.leaveInfo.locProvince + "-" + this.leaveInfo.locCity + "-" + this.leaveInfo.locDistrict : "" !== this.leaveInfo.locNation ? this.leavePosi = this.leaveInfo.locNation : this.leavePosi = this.preSet.noRecord, this.leaveInfo.vehicle ? this.transportation = this.leaveInfo.vehicle : this.transportation = this.preSet.noRecord)
				}
			})
		}, {
			info: {
				components: {
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
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
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"43-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSubmit(e)
					}
				},
				"43-1": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goChangeSubmit(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/leaveSchool/leaveSchoolDetailv2.js");
	__wxRoute = 'pages/leaveSchool/leaveSchoolv2';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/leaveSchool/leaveSchoolv2.js';
	define("pages/leaveSchool/leaveSchoolv2.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var a = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), a.push.apply(a, n)
			}
			return a
		}

		function a(e) {
			for (var a = 1; a < arguments.length; a++) {
				var i = null != arguments[a] ? arguments[a] : {};
				a % 2 ? t(Object(i), !0).forEach(function (t) {
					n(e, t, i[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
				})
			}
			return e
		}

		function n(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		var i = e(require("./../../vendor.js")(0)),
			r = e(require("./../../store/index.js")),
			o = require("./../../vendor.js")(4),
			s = e(require("./../../mixins/leaveSchool.js")),
			l = e(require("./../../mixins/exist.js")),
			h = e(require("./../../mixins/login.js")),
			c = e(require("./../../common/utils.js")),
			d = e(require("./../../common/areaAbroad.js")),
			p = e(require("./../../common/areaAbroadCN.js"));
		i.default.page({
			store: r.default,
			mixins: [l.default, h.default, s.default],
			data: {
				preSet: {},
				preSetCN: {
					studentNoLabel: "学号",
					studentNameLabel: "姓名",
					willStayLabel: "是否离校",
					willStayPrompt: "请选择2月12日前是否离校",
					phoneLabel: "当前中国大陆手机号码",
					phonePrompt: "请填写个人紧急联系方式",
					outCampusAddressLabel: "行政区域",
					outCampusAddressPrompt: "请填写中国大陆校外常住地址，若无，请填写校内宿舍",
					outCampusAddressPromptRed: "",
					q2_4_streetLabel: "街道（村）",
					q2_5_streetDetailLabel: "详细地址",
					emergencyContactPrompt: "请填写假期紧急联络人，若无，请填写学院辅导员信息",
					emergencyContactPromptRed: "",
					q3_1_name_emergency_contactLabel: "姓名",
					q3_2_phone_emergency_contactLabel: "中国大陆手机号码",
					q3_3_relation_emergency_contactLabel: "关系",
					studyTypeLabel: "学籍类型",
					studyTypePrompt: "请填写学籍信息",
					q5_1_companyLabel: "当前工作单位名称",
					q5_2_companyAddressLabel: "当前工作联系地址",
					q5_2_4_streetLabel: "街道（村）",
					q5_2_5_streetDetailLabel: "详细地址",
					q6_originalSchoolLabel: "原学校名称",
					q10_trainTypeLabel: "班次类型",
					q11_trainNumberLabel: "班次号",
					q12_1_train_carriageLabel: "车厢号",
					q12_2_train_seatLabel: "座位号",
					q13_airline_companyLabel: "航空公司",
					q14_flight_numberLabel: "航班号",
					q15_flight_seatLabel: "座位号",
					goAbroadLabel: "是否出国",
					goAbroadPrompt: "请选择寒假是否有出国计划",
					lxDatetimePlanLabel: "离校时间",
					leavePosiLabel: "目的地",
					leaveAbroadPosiLabel: "国外目的地",
					transportationLabel: "交通方式",
					transportationPrompt: "请填写交通方式",
					fxDatetimePlanLabel: "预估返校日期",
					fxDatetimePlanPrompt: "请选择预估返校日期",
					submitLabel: "提交备案",
					placeholderSelect: "请选择",
					placeholderFill: "请填写",
					leaveTime: "请选择",
					leavePosi: "请选择",
					leaveAbroadPosi: "请选择",
					stayArray: ["计划离校", "已离校", "不离校"],
					relationArray: ["配偶", "父亲", "母亲", "兄弟", "姐妹", "祖父母", "其他亲戚", "同学", "同事", "街坊邻里", "同济教师"],
					studyTypeArray: ["非全日制学生", "全日制学生", "交流生", "预科生"],
					transportationArray: ["火车", "飞机", "客运汽车", "自驾", "市内交通"],
					trainTypeArray: ["C", "D", "G", "K", "L", "T", "Y", "Z", " "],
					airlineArray: ["2G", "2P", "3E", "3K", "3U", "5B", "5J", "7C", "8L", "8M", "9C", "9D", "9H", "A6", "AA", "AC", "AE", "AF", "AH", "AI", "AK", "AL", "AM", "AQ", "AY", "AZ", "B7", "BA", "BI", "BK", "BL", "BR", "BS", "CA", "CA", "CA", "CA", "CI", "CN", "CX", "CZ", "D7", "DD", "DL", "DR", "DV", "DZ", "E3", "EK", "ET", "EU", "EY", "FD", "FE", "FG", "FM", "FU", "G5", "G9", "GA", "GJ", "GK", "GS", "GT", "GX", "GY", "HA", "HB", "HO", "HU", "HX", "HY", "HZ", "I4", "IA", "IB", "ID", "IJ", "IK", "IO", "IT", "J2", "JD", "JQ", "JR", "JS", "JT", "K6", "KA", "KC", "KE", "KL", "KN", "KQ", "KY", "LH", "LJ", "LO", "LQ", "LT", "LX", "LY", "M0", "MD", "MF", "MH", "MI", "MK", "MM", "MR", "MS", "MU", "MU", "NH", "NL", "NO", "NS", "NX", "NZ", "OD", "OM", "OQ", "OS", "OX", "OZ", "PG", "PK", "PN", "PR", "PS", "Q2", "QD", "QF", "QG", "QH", "QR", "QV", "QW", "R3", "RY", "S7", "SC", "SJ", "SK", "SL", "SQ", "SU", "SV", "SZ", "T5", "TG", "TK", "TR", "TV", "TW", "U6", "UA", "UL", "UO", "UQ", "UT", "VJ", "VN", "VS", "VZ", "W5", "WE", "WY", "XJ", "XW", "Y7", "Y8", "Z2", "ZA", "ZE", "ZF", "ZH", "ZM"],
					abroadArray: ["不出国", "出国"],
					stayReasonArray: ["假期有课程和学习任务", "撰写论文和科研项目需要", "疫情防控要求", "家庭关系矛盾", "路途遥远花费较大", "工作或实习需要", "身体健康原因", "计划与家人在上海过年", "其他"],
					stayReasonLabel: "留校事由",
					stayReasonOtherLabel: "请填写留校事由",
					stayReasonPrompt: "请选择留校事由",
					multiRow: "normal"
				},
				preSetEN: {
					studentNoLabel: "Student NO.",
					studentNameLabel: "Name",
					willStayLabel: "Stay in School druing vacation or not",
					willStayPrompt: "Will you leave school before Feb. 12th 2021",
					phoneLabel: "Phone Number",
					phonePrompt: "Pls fill in your Cell Phone Number in China",
					outCampusAddressLabel: "Postal off campus addr. in China ",
					outCampusAddressPrompt: "Pls fill in your Postal off campus addr. in China. ",
					outCampusAddressPromptRed: "Only for the International student & HK, Macau or Taiwan Student: You can fill in the dormitory addr. , if you don't have postal off campus addr. in China",
					q2_4_streetLabel: "Street (vallage,community)",
					q2_5_streetDetailLabel: "Detailed address",
					emergencyContactPrompt: "Emergency contact information",
					emergencyContactPromptRed: "Only for the International student & HK, Macau or Taiwan Student: You can fill in one of Tongji teachers who you are familiar with as contact , If you don't have other relatives in China",
					q3_1_name_emergency_contactLabel: "Name",
					q3_2_phone_emergency_contactLabel: "Phone Number",
					q3_3_relation_emergency_contactLabel: "Relation",
					studyTypeLabel: "The type of status as a student",
					studyTypePrompt: "Pls choose the type of your status as a student",
					q5_1_companyLabel: "Employer Name",
					q5_2_companyAddressLabel: "Postal work addr. in China",
					q5_2_4_streetLabel: "Street (vallage,community)",
					q5_2_5_streetDetailLabel: "Detailed address",
					q6_originalSchoolLabel: "The university you come from",
					q10_trainTypeLabel: "Train type",
					q11_trainNumberLabel: "Train No.",
					q12_1_train_carriageLabel: "Carriage No.",
					q12_2_train_seatLabel: "Seat No.",
					q13_airline_companyLabel: "Airline Co.",
					q14_flight_numberLabel: "Fligt No.",
					q15_flight_seatLabel: "Seat No.",
					goAbroadLabel: "Leave China Mainland or not",
					goAbroadPrompt: "Pls indicate will you leave China Mainland or not.",
					lxDatetimePlanLabel: "Leave-school Date",
					leavePosiLabel: "Destination",
					leaveAbroadPosiLabel: "Destination out of China Mainland",
					transportationLabel: "Transport",
					transportationPrompt: "Pls choose your scheduled transportation",
					fxDatetimePlanLabel: "Scheduled Return-school Date",
					fxDatetimePlanPrompt: "Pls fill in your scheduled return-school date",
					submitLabel: "Submit",
					placeholderSelect: "Pls select one",
					placeholderFill: "Pls fill in",
					leaveTime: "Pls select the datetime",
					leavePosi: "Pls select ",
					leaveAbroadPosi: "Pls select",
					stayArray: ["Plan to leave school", "Have left school", "Won't leave"],
					relationArray: ["Spouse", "Father", "Mother", "Brother", "Sister", "Grandparents", "Other relatives", "Schoolmate", "Colleague", "Neighbours", "Tongji teacher"],
					studyTypeArray: ["Part-time student", "Full-time student", "Exchange student", "Temporary student"],
					transportationArray: ["Train", "AirPlane", "Intercity Bus", "Non-Public trasportation", "Incity transportation"],
					trainTypeArray: ["C", "D", "G", "K", "L", "T", "Y", "Z", " "],
					airlineArray: ["2G", "2P", "3E", "3K", "3U", "5B", "5J", "7C", "8L", "8M", "9C", "9D", "9H", "A6", "AA", "AC", "AE", "AF", "AH", "AI", "AK", "AL", "AM", "AQ", "AY", "AZ", "B7", "BA", "BI", "BK", "BL", "BR", "BS", "CA", "CA", "CA", "CA", "CI", "CN", "CX", "CZ", "D7", "DD", "DL", "DR", "DV", "DZ", "E3", "EK", "ET", "EU", "EY", "FD", "FE", "FG", "FM", "FU", "G5", "G9", "GA", "GJ", "GK", "GS", "GT", "GX", "GY", "HA", "HB", "HO", "HU", "HX", "HY", "HZ", "I4", "IA", "IB", "ID", "IJ", "IK", "IO", "IT", "J2", "JD", "JQ", "JR", "JS", "JT", "K6", "KA", "KC", "KE", "KL", "KN", "KQ", "KY", "LH", "LJ", "LO", "LQ", "LT", "LX", "LY", "M0", "MD", "MF", "MH", "MI", "MK", "MM", "MR", "MS", "MU", "MU", "NH", "NL", "NO", "NS", "NX", "NZ", "OD", "OM", "OQ", "OS", "OX", "OZ", "PG", "PK", "PN", "PR", "PS", "Q2", "QD", "QF", "QG", "QH", "QR", "QV", "QW", "R3", "RY", "S7", "SC", "SJ", "SK", "SL", "SQ", "SU", "SV", "SZ", "T5", "TG", "TK", "TR", "TV", "TW", "U6", "UA", "UL", "UO", "UQ", "UT", "VJ", "VN", "VS", "VZ", "W5", "WE", "WY", "XJ", "XW", "Y7", "Y8", "Z2", "ZA", "ZE", "ZF", "ZH", "ZM"],
					abroadArray: ["Won't leave China mainland", "Will leave China Mainland"],
					stayReasonArray: ["Have courses and study tasks", "Work on my paper or research", "Epidemic prevention and control requirements", "Contradictions in family relations", "It's a long way to my home and costs a lot", "The requirement of job or internship", "Physical health reasons", "Spend the vacation with family in Shanghai", "Other reasons"],
					stayReasonLabel: "Why do you plan to stay at Tongji Univ during the vacation?",
					stayReasonOtherLabel: "Pls fill in your reason",
					stayReasonPrompt: "Pls select your reason",
					multiRow: "normal"
				},
				language: "zh",
				areaShow: !1,
				areaList: [],
				selectStartTimeIndex: [0],
				startTimeArray: [],
				nation: "",
				province: "",
				city: "",
				district: "",
				isStay: "",
				isAbroad: "",
				isStayField: "",
				isAbroadField: "",
				transportation: "",
				fxDatetimePlan: "",
				stayReasonIndex: "",
				stayReasonField: "",
				stayReasonOtherField: "",
				stayReasonOtherIndex: "8",
				stayEndDate: "2021-02-18",
				submitDisable: !1,
				q1_phone: "",
				q2_outCampusAddress: "",
				q2_1_province: "",
				q2_2_city: "",
				q2_3_district: "",
				q2_4_street: "",
				q2_5_streetDetail: "",
				q3_1_name: "",
				q3_2_phone: "",
				q3_3_relation: "",
				q4_studyType: "",
				q5_1_company: "",
				q5_2_companyAddress: "",
				q5_2_1_province: "",
				q5_2_2_city: "",
				q5_2_3_district: "",
				q5_2_4_street: "",
				q5_2_5_streetDetail: "",
				q6_originalSchool: "",
				q10_trainType: "",
				q11_trainNumber: "",
				q12_1_train_carriage: "",
				q12_2_train_seat: "",
				q13_airline: "",
				q14_flight_number: "",
				q15_flight_seat: "",
				q3_3_relationShow: "",
				q4_studyTypeShow: "",
				transportationShow: "",
				notice1: '<p class="MsoNormal" align="center" style="text-align:center;">\n\t<b>同济大学学生寒假离校、留校登记备案（第二轮）<span></span></b>\n</p>\n<p class="MsoNormal">\n\t<br />\n</p>\n<p class="MsoNormal">\n\t各位同学：<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.0pt;">\n\t根据学校《关于<span>2021</span>年寒假工作安排的通知》，学生于<span>1</span>月<span>25</span>日至<span>2</span>月<span>26</span>日放寒假。近期全国多点、多地发生新冠肺炎疫情，根据教育部《关于加强今冬明春校园疫情防控工作的通知》、上海市教委疫情防控工作的部署和学校疫情防控领导小组的会议精神，学生应严格按照学校的统一部署，在做好疫情防控的前提下，做好自己寒假出行安排并登记备案。<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.1pt;">\n\t<b>学校关于寒假放假和新学期开学相关规定（节选）<span></span></b>\n</p>\n<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\n\t一、不出境。不去国内中高风险地区和疫情严重地区。建议学生不到重点地区（中高风险地区所在地级市【省自治区地级市，直辖市行政区】）。<span></span>\n</p>\n<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\n\t二、家在中高风险地区和疫情严重地区的学生假期不返乡。建议家在重点地区学生不返乡。\n</p>\n<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\n\t三、学生完成期末考试或完成本学期学习科研任务即可安排离校返乡。<span></span>\n</p>\n<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\n\t四、学生寒假返乡应直达返乡地点，返乡途中加强自我防护，不在外滞留。学生返乡后应增强自我防护意识，自觉减少流动，建议不进行旅游或探亲访友活动，不到人流密集地区，不到中高风险地区和重点地区。<span></span>\n</p>\n<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\n\t五、寒假期间仍需每日健康上报。如返乡后所在地出现疫情，学生要积极配合当地防疫管理规定要求做好疫情防控工作，并及时向学校报告。<span></span>\n</p>\n<p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">\n\t六、学生未经批准不得提前返校。<span></span>\n</p>\n<p class="MsoNormal" align="center" style="text-align:center;">\n</p>',
				notice2: '<p class="MsoNormal" align="center" style="text-align:center;">\n\t<b>寒假留校学生管理规定（节选）<span></span></b>\n</p>\n<p class="MsoNormal" style="margin-left:0;text-indent:0;">\n\t1、寒假期间学校实行控制式管理。学生每日健康上报要及时精准，一旦发生未及时打卡或者打卡位置在外地，系统将关闭进校权限。学生凭一卡通进出校门，学生进出社区要登记并测量体温。<span></span>\n</p>\n<p class="MsoNormal" style="margin-left:0;text-indent:0;">\n\t2、学院要对寒假留校学生进行精准管理。寒假留校学生应尽量减少外出，不聚集，不离开上海，外出过夜需向学院和社区请假。寒假留校学生要及时关注自身身体状况，一旦身体有异常，要第一时间就医并汇报学院。寒假留校学生不得与来自中高风险地区和重点地区人员会面。<span></span>\n</p>',
				notice3: '<p class="MsoNormal" align="center" style="text-align:center;">\n\t<b>同济大学<span>2021</span>年寒假学生留校纪律规范承诺书<span></span></b>\n</p>\n<p class="MsoNormal" style="text-indent:28.0pt;">\n\t为确保本人寒假留校安全，作为一名大学生，有义务、有责任向学校、导师、家长（配偶）做出如下承诺：<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.1pt;">\n\t<b>遵守教育管理纪律。</b>本人已就寒假留校一事如实告知家长（配偶）、辅导员和导师，并征得了他们同意；本人自愿服从学校各项管理规定。<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.1pt;">\n\t<b>遵守健康监测纪律</b>。本人将坚持科学佩戴口罩、定时监测体温，保持卫生健康、加强自我防护；如出现身体不适，及时上报学校处置。<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.1pt;">\n\t<b>遵守教学科研纪律。</b>本人保证严格遵守教学科研安全纪律，未经导师同意、不开展高危实验，离开相应场所关闭切断电源。<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.1pt;">\n\t<b>遵守宿舍管理纪律</b>。本人服从寒假期间学生社区中心关于宿舍管理的相关安排，离开宿舍到宿管员处登记备案，杜绝违纪违法活动。<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.1pt;">\n\t<b>遵守疫情防控纪律。</b>不瞒报、缓报、谎报有关信息；尽量减少外出，不聚集，不离开上海，坚持每日健康上报。未经批准绝不私自离开校园，不在外留宿；不造谣、不信谣、不传谣。<span></span>\n</p>\n<p class="MsoNormal" style="text-indent:28.0pt;">\n\t本人保证：对自我人身生命健康和人身财产安全负责，并将积极配合学院做好疫情防控工作。<span></span>\n</p>',
				radio1: "0",
				radio2: "0",
				radio3: "0"
			},
			onLoad: function () {
				var e = getApp();
				this.language = e.$wepy.$options.globalData.language, "zh" === this.language ? this.preSet = JSON.parse(JSON.stringify(this.preSetCN)) : this.preSet = JSON.parse(JSON.stringify(this.preSetEN)), this.doSetStoreData(), this.areaList = d.default.data.areaList, this.areaListCN = p.default.data.areaList
			},
			onShow: function () {
				this.setStartTimeArray("2021-01-21", null)
			},
			computed: a({}, (0, o.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				leaveInfo: function (e) {
					return e.leaveSchool.leaveInfo
				}
			})),
			methods: a({}, (0, o.mapActions)(["setLeaveInfo", "setNextLeaveInfoRequestAvailableTime"]), {
				onSubmit: function () {
					var e = this;
					if (e.doCheckSubmitAvailable()) {
						e.submitDisable = !0;
						var t = {
							locNation: e.nation,
							studentPid: e.studentInfo.pid,
							locProvince: e.province,
							locCity: e.city,
							locDistrict: e.district,
							vehicle: e.transportation,
							q21Province: e.q2_1_province,
							q22City: e.q2_2_city,
							q23District: e.q2_3_district,
							q24Street: e.q2_4_street,
							q25Streetno: e.q2_5_streetDetail,
							q31NameEmergencyContact: e.q3_1_name,
							q33RelationEmergencyContact: e.q3_3_relation,
							q4Studytype: e.q4_studyType,
							q10TrainType: e.q10_trainType,
							q11TrainNumber: e.q11_trainNumber,
							q121TrainCarriage: e.q12_1_train_carriage,
							q122TrainSeat: e.q12_2_train_seat,
							q13AirlineCompany: e.q13_airline,
							q14FlightNumber: e.q14_flight_number,
							q15FlightSeat: e.q15_flight_seat
						};
						if ("2" === e.isStay ? (t.stayReason = this.preSetCN.stayReasonArray[this.stayReasonIndex], t.stayReasonOther = this.stayReasonOtherField, t.willStay = !0, this.preSet.leaveTime = this.stayEndDate) : (t.stayReason = "", t.stayReasonOther = "", t.willStay = !1), "2021-02-11 以后" === e.preSet.leaveTime || "After 2021-02-11" === e.preSet.leaveTime ? t.lxDatetimePlan = "2021-02-21 23:00:00" : t.lxDatetimePlan = e.preSet.leaveTime + " 23:00:00", e.fxDatetimePlan ? t.fxDatetimePlan = e.fxDatetimePlan + " 23:00:00" : t.fxDatetimePlan = "2021-03-01 23:00:00", !e.doCheckIsPhone(e.q1_phone)) return c.default.wxToast("个人紧急联系方式格式有误", "Incorrect format of personal emergency contact information", e.language), e.submitDisable = !1, !1;
						if (t.q1Phone = e.q1_phone, !e.doCheckIsPhone(e.q3_2_phone)) return c.default.wxToast("紧急联系人手机号码格式有误", "Incorrect format of mobile phone number of emergency contact", e.language), e.submitDisable = !1, !1;
						if (t.q32PhoneEmergencyContact = e.q3_2_phone, "非全日制学生" === e.q4_studyType ? (t.q51Company = e.q5_1_company, t.q521ProvinceOfCompany = e.q5_2_1_province, t.q522CityOfCompany = e.q5_2_2_city, t.q523DistrictOfCompany = e.q5_2_3_district, t.q524StreetOfCompany = e.q5_2_4_street, t.q525StreetnoOfCompany = e.q5_2_5_streetDetail, t.q6OriginalSchool = "") : "交流生" === e.q4_studyType ? (t.q51Company = "", t.q521ProvinceOfCompany = "", t.q522CityOfCompany = "", t.q523DistrictOfCompany = "", t.q524StreetOfCompany = "", t.q525StreetnoOfCompany = "", t.q6OriginalSchool = e.q6_originalSchool) : (t.q51Company = "", t.q521ProvinceOfCompany = "", t.q522CityOfCompany = "", t.q523DistrictOfCompany = "", t.q524StreetOfCompany = "", t.q525StreetnoOfCompany = "", t.q6OriginalSchool = ""), "0" === e.isStay) t.q7LeaveSchoolPlan = "计划离校";
						else if ("1" === e.isStay) t.q7LeaveSchoolPlan = "已离校";
						else {
							if ("2" !== e.isStay) return e.submitDisable = !1, void c.default.wxToast("未知错误，请重试", "Unknown error, please try again", e.language);
							t.q7LeaveSchoolPlan = "不离校"
						}
						this.doSubmitLeaveInfo(t, e.language).then(function (t) {
							!1 === t ? c.default.wxModal("网络拥堵，请稍后重试", "Network congestion, please try again later", e.language, function () {
								wx.reLaunch({
									url: "pages/index"
								})
							}, function () {
								e.submitDisable = !1
							}) : "Expected error" === t ? e.submitDisable = !1 : (e.leaveInfo = t, wx.redirectTo({
								url: "/pages/leaveSchool/leaveSchoolDetailv2"
							}))
						})
					}
				},
				doSetStoreData: function () {
					var e = this;
					if (c.default.checkHasKey(this.leaveInfo, "autoid")) {
						e.nation = this.leaveInfo.locNation, e.province = this.leaveInfo.locProvince, e.city = this.leaveInfo.locCity, e.district = this.leaveInfo.locDistrict, e.transportation = this.leaveInfo.vehicle, e.q1_phone = this.leaveInfo.q1Phone, e.q2_1_province = this.leaveInfo.q21Province, e.q2_2_city = this.leaveInfo.q22City, e.q2_3_district = this.leaveInfo.q23District, e.q2_4_street = this.leaveInfo.q24Street, e.q2_5_streetDetail = this.leaveInfo.q25Streetno, e.q3_1_name = this.leaveInfo.q31NameEmergencyContact, e.q3_2_phone = this.leaveInfo.q32PhoneEmergencyContact, e.q3_3_relation = this.leaveInfo.q33RelationEmergencyContact, e.q4_studyType = this.leaveInfo.q4Studytype, e.q10_trainType = this.leaveInfo.q10TrainType, e.q11_trainNumber = this.leaveInfo.q11TrainNumber, e.q12_1_train_carriage = this.leaveInfo.q121TrainCarriage, e.q12_2_train_seat = this.leaveInfo.q122TrainSeat, e.q13_airline = this.leaveInfo.q13AirlineCompany, e.q14_flight_number = this.leaveInfo.q14FlightNumber, e.q15_flight_seat = this.leaveInfo.q15FlightSeat, e.q5_1_company = this.leaveInfo.q51Company, e.q5_2_1_province = this.leaveInfo.q521ProvinceOfCompany, e.q5_2_2_city = this.leaveInfo.q522CityOfCompany, e.q5_2_3_district = this.leaveInfo.q523DistrictOfCompany, e.q5_2_4_street = this.leaveInfo.q524StreetOfCompany, e.q5_2_5_streetDetail = this.leaveInfo.q525StreetnoOfCompany, e.q6_originalSchool = this.leaveInfo.q6OriginalSchool, e.q2_outCampusAddress = this.q2_1_province + "-" + this.q2_2_city + "-" + this.q2_3_district, e.q5_2_companyAddress = this.q5_2_1_province + "-" + this.q5_2_2_city + "-" + this.q5_2_3_district;
						var t = this.preSetCN.stayArray.indexOf(this.leaveInfo.q7LeaveSchoolPlan);
						if (e.isStay = t.toString(), "zh" === e.language) e.q3_3_relationShow = this.leaveInfo.q33RelationEmergencyContact, e.q4_studyTypeShow = this.leaveInfo.q4Studytype, e.isStayField = this.leaveInfo.q7LeaveSchoolPlan, e.transportationShow = this.leaveInfo.vehicle;
						else {
							var a = this.preSetCN.relationArray.indexOf(this.leaveInfo.q33RelationEmergencyContact);
							e.q3_3_relationShow = this.preSetEN.relationArray[a];
							var n = this.preSetCN.studyTypeArray.indexOf(this.leaveInfo.q4Studytype);
							e.q4_studyTypeShow = this.preSetEN.studyTypeArray[n], e.isStayField = this.preSetEN.stayArray[t];
							var i = this.preSetCN.transportationArray.indexOf(this.leaveInfo.vehicle);
							e.transportationShow = this.preSetEN.transportationArray[i], console.log(e.transportationShow)
						}
						"中国" === this.leaveInfo.locNation ? (e.isAbroad = "0", e.isAbroadField = this.preSet.abroadArray[this.isAbroad], e.preSet.leavePosi = this.province + "-" + this.city + "-" + this.district) : (e.isAbroad = "1", e.isAbroadField = this.preSet.abroadArray[this.isAbroad], e.preSet.leaveAbroadPosi = this.nation), "0" === e.isStay || "1" === e.isStay ? (e.preSet.leaveTime = this.leaveInfo.lxDatetimePlan.slice(0, 10), e.fxDatetimePlan = this.leaveInfo.fxDatetimePlan.slice(0, 10)) : (this.stayReasonIndex = this.preSetCN.stayReasonArray.indexOf(this.leaveInfo.stayReason).toString(), e.stayReasonField = this.preSet.stayReasonArray[this.stayReasonIndex], e.stayReasonOtherField = this.leaveInfo.stayReasonOther)
					}
				},
				doCheckSubmitAvailable: function () {
					if (!this.doCheckQ1Finish()) return c.default.wxToast("请完成问题1", "Please complete question 1", this.language), !1;
					if (!this.doCheckQ2Finish()) return c.default.wxToast("请完成问题2", "Please complete question 2", this.language), !1;
					if (!this.doCheckQ3Finish()) return c.default.wxToast("请完成问题3", "Please complete question 3", this.language), !1;
					if (!this.doCheckQ4Finish()) return c.default.wxToast("请完成问题4", "Please complete question 4", this.language), !1;
					if (!this.doCheckQ5Finish()) return c.default.wxToast("请完成问题4", "Please complete question 4", this.language), !1;
					if (!this.doCheckLeaveSchoolFinish()) return c.default.wxToast("请完成离校问题", "Please complete the question of whether to leave school or not", this.language), !1;
					if (!this.doCheckRadio1()) return c.default.wxToast("请完成所有必填项#1001", "Please complete all required items #1001", this.language), !1;
					if ("2" === this.isStay) {
						if (!this.doCheckStayReasonFinish()) return c.default.wxToast("请完成留校原因", "Please complete the reasons for staying at Tongji Univ", this.language), !1;
						if (!this.doCheckRadio2()) return c.default.wxToast("请完成所有必填项#1002", "Please complete all required items #1002", this.language), !1;
						if (!this.doCheckRadio3()) return c.default.wxToast("请完成所有必填项#1003", "Please complete all required items #1003", this.language), !1
					} else {
						if (!this.doCheckLeaveTimeFinish()) return c.default.wxToast("请完成离校时间", "Please complete the time to leave school", this.language), !1;
						if (!this.doCheckTransportationFinish()) return c.default.wxToast("请选择交通方式", "Please choose the mode of transport", this.language), !1;
						if ("1" === this.isStay && !this.doCheckQ10_15Finish()) return c.default.wxToast("请完成离校方式备案", "Please complete the way of leaving school for the record", this.language), !1;
						if (!this.doCheckDestinationFinish()) return c.default.wxToast("请完成离校目的地备案", "Please complete the destination record", this.language), !1;
						if (!this.doCheckReturnDateFinish()) return c.default.wxToast("请完成返校日期备案", "Please complete the record of the return date", this.language), !1
					}
					return !0
				},
				onRadio1Change: function (e) {
					"1" === this.radio1 ? this.radio1 = "0" : this.radio1 = "1"
				},
				onRadio2Change: function (e) {
					"1" === this.radio2 ? this.radio2 = "0" : this.radio2 = "1"
				},
				onRadio3Change: function (e) {
					"1" === this.radio3 ? this.radio3 = "0" : this.radio3 = "1"
				},
				onReturnDateChanged: function (e) {
					this.fxDatetimePlan = e.$wx.detail.value
				},
				onStayChanged: function (e) {
					this.doClean("isStay"), this.isStay = e.$wx.detail.value, this.isStayField = this.preSet.stayArray[this.isStay]
				},
				onAbroadChanged: function (e) {
					this.doClean("isAbroad"), this.isAbroad = e.$wx.detail.value, this.isAbroadField = this.preSet.abroadArray[this.isAbroad]
				},
				onLeavePosiChanged: function (e) {
					this.nation = "中国", this.province = e.$wx.detail.value[0], this.city = e.$wx.detail.value[1], this.district = e.$wx.detail.value[2], this.preSet.leavePosi = this.province + "-" + this.city + "-" + this.district
				},
				onStartTimeChanged: function (e) {
					this.doClean("lxDatatimePaln");
					var t = e.$wx.detail.value[0];
					this.preSet.leaveTime = this.startTimeArray[0][t]
				},
				onStayReasonChanged: function (e) {
					this.stayReasonIndex = e.$wx.detail.value, this.stayReasonField = this.preSet.stayReasonArray[this.stayReasonIndex]
				},
				onStayReasonOtherChanged: function (e) {
					this.stayReasonOtherField = e.$wx.detail
				},
				onClickAbroadPosi: function () {
					this.areaShow = !0
				},
				q1_phoneChange: function (e) {
					this.q1_phone = e.$wx.detail
				},
				q2_1addressChange: function (e) {
					this.q2_1_province = e.$wx.detail.value[0], this.q2_2_city = e.$wx.detail.value[1], this.q2_3_district = e.$wx.detail.value[2], this.q2_outCampusAddress = this.q2_1_province + "-" + this.q2_2_city + "-" + this.q2_3_district
				},
				q2_4_streetChange: function (e) {
					this.q2_4_street = e.$wx.detail
				},
				q2_5_streetDetailChange: function (e) {
					this.q2_5_streetDetail = e.$wx.detail
				},
				q3_1_nameChange: function (e) {
					this.q3_1_name = e.$wx.detail
				},
				q3_2_phoneChange: function (e) {
					this.q3_2_phone = e.$wx.detail
				},
				onRelationChanged: function (e) {
					var t = e.$wx.detail.value;
					this.q3_3_relationShow = this.preSet.relationArray[t], this.q3_3_relation = this.preSetCN.relationArray[t]
				},
				onStudyTypeChanged: function (e) {
					var t = e.$wx.detail.value;
					this.q4_studyTypeShow = this.preSet.studyTypeArray[t], this.q4_studyType = this.preSetCN.studyTypeArray[t]
				},
				q5_1addressChange: function (e) {
					this.q5_2_1_province = e.$wx.detail.value[0], this.q5_2_2_city = e.$wx.detail.value[1], this.q5_2_3_district = e.$wx.detail.value[2], this.q5_2_companyAddress = this.q5_2_1_province + "-" + this.q5_2_2_city + "-" + this.q5_2_3_district
				},
				q5_1_companyChange: function (e) {
					this.q5_1_company = e.$wx.detail
				},
				q5_2_4_streetChange: function (e) {
					this.q5_2_4_street = e.$wx.detail
				},
				q5_2_5_streetDetailChange: function (e) {
					this.q5_2_5_streetDetail = e.$wx.detail
				},
				q6_originalSchoolChange: function (e) {
					this.q6_originalSchool = e.$wx.detail
				},
				onTransportationChange: function (e) {
					var t = e.$wx.detail.value;
					this.transportationShow = this.preSet.transportationArray[t], this.transportation = this.preSetCN.transportationArray[t]
				},
				onTrainChange: function (e) {
					var t = e.$wx.detail.value;
					this.q10_trainType = this.preSet.trainTypeArray[t]
				},
				q11_trainNumberChange: function (e) {
					this.q11_trainNumber = e.$wx.detail
				},
				q12_1_train_carriageChange: function (e) {
					this.q12_1_train_carriage = e.$wx.detail
				},
				q12_2_train_seatChange: function (e) {
					this.q12_2_train_seat = e.$wx.detail
				},
				onAirlineChange: function (e) {
					var t = e.$wx.detail.value;
					this.q13_airline = this.preSet.airlineArray[t]
				},
				q14_flight_numberChange: function (e) {
					this.q14_flight_number = e.$wx.detail
				},
				q15_flight_seatChange: function (e) {
					this.q15_flight_seat = e.$wx.detail
				},
				onConfirm: function (e) {
					this.areaShow = !1;
					var t = e.$wx.detail.values[1].code;
					this.nation = this.areaListCN.city_list[t], this.preSet.leaveAbroadPosi = this.areaList.city_list[t]
				},
				onCancel: function (e) {
					this.areaShow = !1
				},
				doCheckIsPhone: function (e) {
					return !(11 !== e.length || !/^((1)+\d{10})$/.test(e))
				},
				doClean: function (e) {
					switch (e) {
						case "isStay":
							this.isAbroad = "", "zh" === this.language ? this.preSet = JSON.parse(JSON.stringify(this.preSetCN)) : this.preSet = JSON.parse(JSON.stringify(this.preSetEN)), this.nation = "", this.province = "", this.city = "", this.district = "", this.isStayField = "", this.isAbroadField = "", this.transportation = "", this.fxDatetimePlan = "", this.transportation = "", this.q10_trainType = "", this.q11_trainNumber = "", this.q12_1_train_carriage = "", this.q12_2_train_seat = "", this.q13_airline = "", this.q14_flight_number = "", this.q15_flight_seat = "", this.transportationShow = "";
							break;
						case "isAbroad":
							"zh" === this.language ? this.preSet = JSON.parse(JSON.stringify(this.preSetCN)) : this.preSet = JSON.parse(JSON.stringify(this.preSetEN)), this.nation = "", this.province = "", this.city = "", this.district = "", this.isAbroadField = "", this.transportation = "", this.fxDatetimePlan = ""
					}
					this.submitDisable = !1
				},
				getDateList: function () {
					for (var e = [], t = new Date(c.default.getFormatAppleDate(new Date("2020/12/01"))), a = new Date("2021/02/11"); a.getTime() - t.getTime() >= 0;) {
						var n = t.getFullYear().toString(),
							i = 1 === (t.getMonth() + 1).toString().length ? "0" + (t.getMonth() + 1).toString() : t.getMonth() + 1,
							r = 1 === t.getDate().toString().length ? "0" + t.getDate() : t.getDate();
						e.push(n + "-" + i + "-" + r), t.setDate(t.getDate() + 1)
					}
					return e
				},
				setStartTimeArray: function (e, t) {
					var a = 0,
						n = [];
					if (null == e) e = (n = this.getDateList())[0];
					else
						for (var i = (n = this.getDateList()).length, r = 0; r < i; r++)
							if (n[r] === e) {
								a = r;
								break
							} this.startTimeArray = [n], this.selectStartTimeIndex = [a]
				}
			})
		}, {
			info: {
				components: {
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
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
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-radio": {
						path: "..\\..\\components\\vant\\dist\\radio\\index"
					},
					"van-radio-group": {
						path: "..\\..\\components\\vant\\dist\\radio-group\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"42-0": ["tap"],
					"42-1": ["change"],
					"42-3": ["change"],
					"42-4": ["change"],
					"42-5": ["change"],
					"42-6": ["change"],
					"42-9": ["change"],
					"42-11": ["change"],
					"42-12": ["change"],
					"42-13": ["change"],
					"42-14": ["change"],
					"42-20": ["confirm", "cancel"],
					"42-24": ["change"],
					"42-25": ["change"],
					"42-26": ["change"],
					"42-28": ["change"],
					"42-29": ["change"],
					"42-33": ["change"],
					"42-34": ["change"],
					"42-35": ["change"],
					"42-37": ["change"],
					"42-38": ["change"],
					"42-40": ["tap"],
					"42-42": ["change"],
					"42-43": ["tap"]
				}
			},
			handlers: {
				"42-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRadio1Change(e)
					}
				},
				"42-1": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q1_phoneChange(e)
					}
				},
				"42-2": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q2_1addressChange(e)
					}
				},
				"42-3": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q2_4_streetChange(e)
					}
				},
				"42-4": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q2_5_streetDetailChange(e)
					}
				},
				"42-5": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q3_1_nameChange(e)
					}
				},
				"42-6": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q3_2_phoneChange(e)
					}
				},
				"42-7": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRelationChanged(e)
					}
				},
				"42-8": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStudyTypeChanged(e)
					}
				},
				"42-9": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q5_1_companyChange(e)
					}
				},
				"42-10": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q5_1addressChange(e)
					}
				},
				"42-11": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q5_2_companyChange(e)
					}
				},
				"42-12": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q5_2_4_streetChange(e)
					}
				},
				"42-13": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q5_2_5_streetDetailChange(e)
					}
				},
				"42-14": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q6_originalSchoolChange(e)
					}
				},
				"42-15": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStayChanged(e)
					}
				},
				"42-16": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onAbroadChanged(e)
					}
				},
				"42-17": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStartTimeChanged(e)
					}
				},
				"42-18": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onLeavePosiChanged(e)
					}
				},
				"42-19": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onClickAbroadPosi(e)
					}
				},
				"42-20": {
					confirm: function () {
						var e = arguments[arguments.length - 1];
						return void this.onConfirm(e)
					},
					cancel: function () {
						var e = arguments[arguments.length - 1];
						return void this.onCancel(e)
					}
				},
				"42-22": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onTransportationChange(e)
					}
				},
				"42-23": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onTrainChange(e)
					}
				},
				"42-24": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q11_trainNumberChange(e)
					}
				},
				"42-25": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q12_1_train_carriageChange(e)
					}
				},
				"42-26": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q12_2_train_seatChange(e)
					}
				},
				"42-27": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onAirlineChange(e)
					}
				},
				"42-28": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q14_flight_numberChange(e)
					}
				},
				"42-29": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q15_flight_seatChange(e)
					}
				},
				"42-30": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onReturnDateChanged(e)
					}
				},
				"42-31": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onTransportationChange(e)
					}
				},
				"42-32": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onTrainChange(e)
					}
				},
				"42-33": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q11_trainNumberChange(e)
					}
				},
				"42-34": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q12_1_train_carriageChange(e)
					}
				},
				"42-35": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q12_2_train_seatChange(e)
					}
				},
				"42-36": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onAirlineChange(e)
					}
				},
				"42-37": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q14_flight_numberChange(e)
					}
				},
				"42-38": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.q15_flight_seatChange(e)
					}
				},
				"42-39": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onReturnDateChanged(e)
					}
				},
				"42-40": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRadio2Change(e)
					}
				},
				"42-41": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStayReasonChanged(e)
					}
				},
				"42-42": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStayReasonOtherChanged(e)
					}
				},
				"42-43": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRadio3Change(e)
					}
				},
				"42-44": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSubmit(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/leaveSchool/leaveSchoolv2.js");
	__wxRoute = 'pages/questionnaire/qA2';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/questionnaire/qA2.js';
	define("pages/questionnaire/qA2.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var a = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				e && (i = i.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), a.push.apply(a, i)
			}
			return a
		}

		function a(t, e, a) {
			return e in t ? Object.defineProperty(t, e, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = a, t
		}
		var i = t(require("./../../vendor.js")(0)),
			n = require("./../../vendor.js")(4),
			r = t(require("./../../store/index.js"));
		i.default.page({
			store: r.default,
			data: {
				canvasName: "handWriting",
				ctx: "",
				canvasWidth: 0,
				canvasHeight: 0,
				transparent: 1,
				selectColor: "black",
				lineColor: "#1A1A1A",
				lineSize: 1.5,
				lineMin: .5,
				lineMax: 4,
				pressure: 1,
				smoothness: 60,
				currentPoint: {},
				currentLine: [],
				firstTouch: !0,
				radius: 1,
				cutArea: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				},
				bethelPoint: [],
				lastPoint: 0,
				chirography: [],
				currentChirography: {},
				linePrack: [],
				preSet: {},
				preSetCN: {
					studentID: "学号",
					studentName: "姓名",
					confirmLabel: "确定",
					cancelLabel: "取消"
				},
				preSetEN: {},
				tabs: ["待完成", "已完成"]
			},
			onLoad: function () {
				var t = getApp();
				this.language = t.$wepy.$options.globalData.language, this.preSet = JSON.parse(JSON.stringify(this.preSetCN)), this.setContext()
			},
			computed: function (t) {
				for (var i = 1; i < arguments.length; i++) {
					var n = null != arguments[i] ? arguments[i] : {};
					i % 2 ? e(Object(n), !0).forEach(function (e) {
						a(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}({}, (0, n.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				}
			})),
			methods: {
				setContext: function () {
					var t = this,
						e = this.data.canvasName,
						a = wx.createCanvasContext(e);
					this.setData({
						ctx: a
					}), wx.createSelectorQuery().select(".handCenter").boundingClientRect(function (e) {
						t.setData({
							canvasWidth: e.width,
							canvasHeight: e.height
						})
					}).exec()
				},
				uploadScaleStart: function (t) {
					if ("touchstart" != t.type) return !1;
					var e = this.data.ctx;
					e.setFillStyle(this.data.lineColor), e.setGlobalAlpha(this.data.transparent);
					var a = {
							x: t.touches[0].x,
							y: t.touches[0].y
						},
						i = this.data.currentLine;
					i.unshift({
						time: (new Date).getTime(),
						dis: 0,
						x: a.x,
						y: a.y
					}), this.setData({
						currentPoint: a
					}), this.data.firstTouch && this.setData({
						cutArea: {
							top: a.y,
							right: a.x,
							bottom: a.y,
							left: a.x
						},
						firstTouch: !1
					}), this.pointToLine(i)
				},
				uploadScaleMove: function (t) {
					if ("touchmove" != t.type) return !1;
					t.cancelable && (t.defaultPrevented || t.preventDefault());
					var e = {
						x: t.touches[0].x,
						y: t.touches[0].y
					};
					e.y < this.data.cutArea.top && (this.data.cutArea.top = e.y), e.y < 0 && (this.data.cutArea.top = 0), e.x > this.data.cutArea.right && (this.data.cutArea.right = e.x), this.data.canvasWidth - e.x <= 0 && (this.data.cutArea.right = this.data.canvasWidth), e.y > this.data.cutArea.bottom && (this.data.cutArea.bottom = e.y), this.data.canvasHeight - e.y <= 0 && (this.data.cutArea.bottom = this.data.canvasHeight), e.x < this.data.cutArea.left && (this.data.cutArea.left = e.x), e.x < 0 && (this.data.cutArea.left = 0), this.setData({
						lastPoint: this.data.currentPoint,
						currentPoint: e
					});
					var a = this.data.currentLine;
					a.unshift({
						time: (new Date).getTime(),
						dis: this.distance(this.data.currentPoint, this.data.lastPoint),
						x: e.x,
						y: e.y
					}), this.pointToLine(a)
				},
				uploadScaleEnd: function (t) {
					if ("touchend" != t.type) return 0;
					var e = {
						x: t.changedTouches[0].x,
						y: t.changedTouches[0].y
					};
					this.setData({
						lastPoint: this.data.currentPoint,
						currentPoint: e
					});
					var a = this.data.currentLine;
					if (a.unshift({
							time: (new Date).getTime(),
							dis: this.distance(this.data.currentPoint, this.data.lastPoint),
							x: e.x,
							y: e.y
						}), a.length > 2) a[0].time, a[a.length - 1].time, a.length;
					this.pointToLine(a);
					var i = {
							lineSize: this.data.lineSize,
							lineColor: this.data.lineColor
						},
						n = this.data.chirography;
					n.unshift(i), this.setData({
						chirography: n
					});
					var r = this.data.linePrack;
					r.unshift(this.data.currentLine), this.setData({
						linePrack: r,
						currentLine: []
					})
				},
				retDraw: function () {
					this.data.ctx.clearRect(0, 0, 700, 730), this.data.ctx.draw()
				},
				pointToLine: function (t) {
					this.calcBethelLine(t)
				},
				calcBethelLine: function (t) {
					if (t.length <= 1) t[0].r = this.data.radius;
					else {
						var e, a, i, n, r, s, o, c, h = 0,
							l = 0;
						t.length <= 2 ? (e = t[1].x, n = t[1].y, a = e + .5 * ((i = t[1].x + .5 * (t[0].x - t[1].x)) - e), r = n + .5 * ((s = t[1].y + .5 * (t[0].y - t[1].y)) - n)) : (e = t[2].x + .5 * (t[1].x - t[2].x), n = t[2].y + .5 * (t[1].y - t[2].y), a = t[1].x, r = t[1].y, i = a + .5 * (t[0].x - a), s = r + .5 * (t[0].y - r)), o = this.distance({
							x: i,
							y: s
						}, {
							x: e,
							y: n
						}), c = this.data.radius;
						for (var d = 0; d < t.length - 1 && (h += t[d].dis, l += t[d].time - t[d + 1].time, !(h > this.data.smoothness)); d++);
						this.setData({
							radius: Math.min(l / o * this.data.pressure + this.data.lineMin, this.data.lineMax) * this.data.lineSize
						}), t[0].r = this.data.radius, t.length <= 2 ? (c + this.data.radius) / 2 : ((t[2].r + t[1].r) / 2, t[1].r, (t[1].r + t[0].r) / 2);
						for (var u = [], x = 0; x < 5; x++) {
							var p = x / 4,
								y = (1 - p) * (1 - p) * e + 2 * p * (1 - p) * a + p * p * i,
								v = (1 - p) * (1 - p) * n + 2 * p * (1 - p) * r + p * p * s,
								f = c + (this.data.radius - c) / 5 * x;
							if (u.push({
									x: y,
									y: v,
									r: f
								}), 3 == u.length) {
								var g = this.ctaCalc(u[0].x, u[0].y, u[0].r, u[1].x, u[1].y, u[1].r, u[2].x, u[2].y, u[2].r);
								g[0].color = this.data.lineColor, this.bethelDraw(g, 1), u = [{
									x: y,
									y: v,
									r: f
								}]
							}
						}
						this.setData({
							currentLine: t
						})
					}
				},
				distance: function (t, e) {
					var a = e.x - t.x,
						i = e.y - t.y;
					return Math.sqrt(a * a + i * i)
				},
				ctaCalc: function (t, e, a, i, n, r, s, o, c) {
					var h, l, d, u, x, p, y, v, f, g = [];
					h = i - t, u = l = (l = n - e) / (d = 2 * Math.sqrt(h * h + l * l + 1e-4)) * a, x = -(h = h / d * a), p = i - s, v = -(y = (y = n - o) / (d = 2 * Math.sqrt(p * p + y * y + 1e-4)) * c), f = p = p / d * c, g.push({
						mx: t + u,
						my: e + x,
						color: "#1A1A1A"
					}), g.push({
						c1x: i + u,
						c1y: n + x,
						c2x: i + v,
						c2y: n + f,
						ex: s + v,
						ey: o + f
					}), g.push({
						c1x: s + v - p,
						c1y: o + f - y,
						c2x: s - v - p,
						c2y: o - f - y,
						ex: s - v,
						ey: o - f
					}), g.push({
						c1x: i - v,
						c1y: n - f,
						c2x: i - u,
						c2y: n - x,
						ex: t - u,
						ey: e - x
					}), g.push({
						c1x: t - u - h,
						c1y: e - x - l,
						c2x: t + u - h,
						c2y: e + x - l,
						ex: t + u,
						ey: e + x
					}), g[0].mx = g[0].mx.toFixed(1), g[0].mx = parseFloat(g[0].mx), g[0].my = g[0].my.toFixed(1), g[0].my = parseFloat(g[0].my);
					for (var m = 1; m < g.length; m++) g[m].c1x = g[m].c1x.toFixed(1), g[m].c1x = parseFloat(g[m].c1x), g[m].c1y = g[m].c1y.toFixed(1), g[m].c1y = parseFloat(g[m].c1y), g[m].c2x = g[m].c2x.toFixed(1), g[m].c2x = parseFloat(g[m].c2x), g[m].c2y = g[m].c2y.toFixed(1), g[m].c2y = parseFloat(g[m].c2y), g[m].ex = g[m].ex.toFixed(1), g[m].ex = parseFloat(g[m].ex), g[m].ey = g[m].ey.toFixed(1), g[m].ey = parseFloat(g[m].ey);
					return g
				},
				bethelDraw: function (t, e, a) {
					var i = this.data.ctx;
					i.beginPath(), i.moveTo(t[0].mx, t[0].my), void 0 != a ? (i.setFillStyle(a), i.setStrokeStyle(a)) : (i.setFillStyle(t[0].color), i.setStrokeStyle(t[0].color));
					for (var n = 1; n < t.length; n++) i.bezierCurveTo(t[n].c1x, t[n].c1y, t[n].c2x, t[n].c2y, t[n].ex, t[n].ey);
					i.stroke(), void 0 != e && i.fill(), i.draw(!0)
				},
				selectColorEvent: function (t) {
					console.log(t);
					var e = t.currentTarget.dataset.colorValue,
						a = t.currentTarget.dataset.color;
					this.setData({
						selectColor: a,
						lineColor: e
					})
				},
				setCanvasBg: function (t) {
					console.log(999), this.data.ctx.rect(0, 0, this.data.canvasWidth, this.data.canvasHeight - 4), this.data.ctx.setFillStyle(t), this.data.ctx.fill(), this.data.ctx.draw()
				}
			}
		}, {
			info: {
				components: {
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
					},
					"van-area": {
						path: "..\\..\\components\\vant\\dist\\area\\index"
					},
					"van-tab": {
						path: "..\\..\\components\\vant\\dist\\tab\\index"
					},
					"van-tabs": {
						path: "..\\..\\components\\vant\\dist\\tabs\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"126-22": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.selectColorEvent(t)
					}
				},
				"126-23": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.selectColorEvent(t)
					}
				},
				"126-24": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.retDraw(t)
					}
				},
				"126-25": {
					touchstart: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleStart(t)
					},
					touchmove: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleMove(t)
					},
					touchend: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleEnd(t)
					},
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.mouseDown(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/questionnaire/qA2.js");
	__wxRoute = 'pages/record/leaveSchool';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/record/leaveSchool.js';
	define("pages/record/leaveSchool.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function n(e) {
			for (var n = 1; n < arguments.length; n++) {
				var o = null != arguments[n] ? arguments[n] : {};
				n % 2 ? t(Object(o), !0).forEach(function (t) {
					r(e, t, o[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
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
		var o = e(require("./../../vendor.js")(0)),
			i = (e(require("./../../common/httpUtils.js")), require("./../../common/dateFormat.js"), e(require("./../../store/index.js"))),
			a = require("./../../vendor.js")(4),
			u = e(require("./../../mixins/returnSchool.js")),
			s = e(require("./../../mixins/exist.js")),
			c = e(require("./../../mixins/login.js")),
			p = e(require("./../../mixins/location.js"));
		e(require("./../../common/utils.js")), e(require("./../../common/api.js"));
		o.default.page({
			store: i.default,
			mixins: [s.default, c.default, p.default, u.default],
			data: {
				language: "zh"
			},
			onLoad: function () {
				var e = getApp();
				this.language = e.$wepy.$options.globalData.language
			},
			onShow: function () {},
			computed: n({}, (0, a.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				applyInfo: function (e) {
					return e.returnSchool.applyInfo
				},
				riskInfo: function (e) {
					return e.student.riskInfo
				}
			})),
			methods: n({}, (0, a.mapActions)(["setApplyInfo"]), {
				onSubmit: function () {}
			})
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"41-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSubmit(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/record/leaveSchool.js");
	__wxRoute = 'pages/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index.js';
	define("pages/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				t && (o = o.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, o)
			}
			return n
		}

		function n(e) {
			for (var n = 1; n < arguments.length; n++) {
				var i = null != arguments[n] ? arguments[n] : {};
				n % 2 ? t(Object(i), !0).forEach(function (t) {
					o(e, t, i[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
				})
			}
			return e
		}

		function o(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var i = e(require("./../vendor.js")(0)),
			a = (e(require("./../common/httpUtils.js")), e(require("./../common/utils.js"))),
			r = e(require("./../common/api.js")),
			s = (e(require("./../common/log.js")), e(require("./../components/vant/dist/dialog/dialog.js")), require("./../vendor.js")(4)),
			c = e(require("./../store/index.js")),
			l = e(require("./../mixins/exist.js")),
			u = e(require("./../mixins/login.js")),
			d = e(require("./../mixins/location.js")),
			h = e(require("./../mixins/returnSchool.js")),
			p = e(require("./../mixins/studentBind.js")),
			f = e(require("./../mixins/notice.js")),
			g = e(require("./../mixins/common.js"));
		i.default.page({
			store: c.default,
			mixins: [l.default, u.default, d.default, h.default, p.default, g.default, f.default],
			data: {
				language: "zh",
				menus: [{
					id: 1,
					img: "../images/ic_dailyreport_dark.svg",
					title: "健康上报",
					titleEN: "Daily Report"
				}, {
					id: 4,
					img: "../images/ic_vaccines.png",
					title: "疫苗接种",
					titleEN: "Vaccination"
				}],
				menus_2: [{
					id: 2,
					img: "../images/ic_application_dark.svg",
					title: "进校申请",
					titleEN: "Application to enter the campus"
				}, {
					id: 3,
					img: "../images/ic_questionnaire2.png",
					title: "问卷系统",
					titleEN: "Questionnaires"
				}],
				swiperH: 360,
				indicatorDots: !1,
				vertical: !1,
				autoplay: !1,
				interval: 2e3,
				duration: 500,
				imgUrls: ["../images/tj2.png"],
				announce: void 0,
				announceGetTime: 0,
				deviceSystem: void 0,
				getParams: null,
				systemInfo: null,
				isHasRefreshed: !1,
				noticeShow: !1,
				noticeOrderID: 0,
				notice: {},
				disableConfirmButton: !0,
				showImage: !0
			},
			computed: n({}, (0, s.mapState)({
				appVersion: function (e) {
					return e.app.version
				},
				isProd: function (e) {
					return e.app.isProd
				},
				userInfo: function (e) {
					return e.user.userInfo
				},
				expiresIn: function (e) {
					return e.user.expiresIn
				},
				studentInfo: function (e) {
					return e.student.studentInfo
				}
			})),
			onLoad: function () {
				var e = this,
					t = getApp();
				this.systemInfo = t.$wepy.$options.globalData.systemInfo, this.language = t.$wepy.$options.globalData.language, this.studentInfo && (this.getParams = {
					studentPid: this.studentInfo.pid
				}), this.doGetNewNotice().then(function (t) {
					e.doRefreshShowNotice(e.noticeOrderID)
				}), console.log("index - onLoad")
			},
			onHide: function () {
				console.log("index - onHide")
			},
			onUnLoad: function () {
				console.log("index - onUnLoad")
			},
			onShow: function () {
				console.log("index - onShow")
			},
			onReady: function () {},
			methods: n({}, (0, s.mapActions)(["setUserTokens", "setUserInfo", "changeStorageData", "setNextApplyRequestAvailableTime", "setDailyReportList", "setRiskInfo", "setStudentInfo", "setApplyInfo", "setNextAppealRequestAvailableTime", "setNextDailyReportRequestAvailableTime", "setBind", "setNextActivationRequestAvailableTime", "setNextTodayReportRequestAvailableTime", "setHasActivation", "setHasTodayReport", "setLeaveInfo", "setNextLeaveInfoRequestAvailableTime", "setNextStudentInfoAvailableTime", "setNoticeArray", "setNextNoticeArrayAvailableTime", "setVaccinationInfo", "setVaccinationRequestAvailableTime", "setQArray", "setQArrayFinish"]), {
				onScrollEnd: function () {
					this.disableConfirmButton = !1
				},
				doRefreshShowNotice: function (e) {
					var t = this.noticeArrayShow.length,
						n = t - e - 1;
					0 === t || n < 0 ? (this.noticeShow = !1, Array.isArray(this.noticeArrayCloud) && this.noticeArrayCloud.length > 0 && c.default.dispatch("setNoticeArray", this.noticeArrayCloud), this.noticeArrayShow = []) : 0 === n ? (this.noticeShow = !0, this.notice = 1 === t ? {
						title: this.noticeArrayShow[e].title,
						richText: this.noticeArrayShow[e].content,
						showCancel: !1,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "确定"
					} : {
						title: this.noticeArrayShow[e].title,
						richText: this.noticeArrayShow[e].content,
						showCancel: !0,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "确定"
					}) : 0 === e ? (this.noticeShow = !0, this.notice = {
						title: this.noticeArrayShow[e].title,
						richText: this.noticeArrayShow[e].content,
						showCancel: !1,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "下一条"
					}) : (this.noticeShow = !0, this.notice = {
						title: this.noticeArrayShow[e].title,
						richText: this.noticeArrayShow[e].content,
						showCancel: !0,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "下一条"
					})
				},
				onDialogConfirm: function (e) {
					console.log(e), this.noticeOrderID = this.noticeOrderID + 1, this.disableConfirmButton = !0, this.doRefreshShowNotice(this.noticeOrderID)
				},
				onDialogCancel: function (e) {
					console.log(e), this.noticeOrderID = this.noticeOrderID - 1, this.doRefreshShowNotice(this.noticeOrderID)
				},
				onMenuItemClick: function (e) {
					var t = this;
					if (t.isNeedLogin()) return !1;
					var n = t.isNeedBind();
					if (!0 === n) return !1;
					if (!1 !== n && !1 === t.isHasRefreshed) return n.then(function () {
						t.isHasRefreshed = !0, t.onMenuItemClick(e)
					}), !1;
					switch (e) {
						case 1:
							r.default.cloudCheckActivation(t.language).then(function (e) {
								!0 === e ? t.doCheckHasQuestionnaireAndSubmit("dailyReport").then(function (e) {
									"goDailyReport" === e && r.default.cloudCheckTodayReport(t.language).then(function (e) {
										!0 === e ? wx.redirectTo({
											url: "/pages/dailyReport/complete"
										}) : !1 === e ? wx.reLaunch({
											url: "/pages/dailyReport/normal"
										}) : a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t.language, 2e3)
									})
								}) : !1 === e ? a.default.wxToast("您的账户尚未激活，请联系辅导员", "Your account has not been activated, please contact the counselor", t.language) : a.default.wxToast("服务器访问人数过多，请稍后尝试", "The server is busy, please try later", t.language, 2e3)
							});
							break;
						case 2:
							t.doCloudCheckBeforeApplyAppealReturnCode().then(function (e) {
								return t.doCheckApplyInfo(e).then(function (e) {
									switch (e) {
										case "No planJxDatetime":
											t.doCloudCheckRiskInfo().then(function (e) {
												var n = t.doCheckHasAppealChangeRisk(e.riskTotal);
												0 === n ? wx.reLaunch({
													url: "/pages/returnSchool/apply"
												}) : 1 === n ? a.default.wxToast("您有未核销的风险，请进行风险核销", "您有未核销的风险，请进行风险核销", t.language) : a.default.wxErrorToast("doCheckHasAppealChangeRisk", "unknown error", "未知错误")
											});
											break;
										case "Has planJxDatetime":
										case "Accept":
											wx.navigateTo({
												url: "/pages/returnSchool/applyDetail"
											})
									}
								})
							});
							break;
						case 3:
							t.isExistActivation(t.language).then(function () {
								t.doCheckHasQuestionnaireAndSubmit("questionnaire").then(function (e) {
									"goQuestionnaire" === e && wx.navigateTo({
										url: "/pages/questionnaire/qIndex"
									})
								})
							});
							break;
						case 4:
							if (!t.doCheckNativeAndNotInChina()) return a.default.wxToast("该功能暂未向您授权", "该功能暂未向您授权", t.language), !1;
							t.doCheckActivationAndVaccinationInfo().then(function (e) {
								e ? wx.navigateTo({
									url: "/pages/vaccination/applyDetail"
								}) : wx.navigateTo({
									url: "/pages/vaccination/apply"
								})
							})
					}
				}
			})
		}, {
			info: {
				components: {
					"nav-bar": {
						path: "..\\components\\nav-bar"
					},
					"van-popup": {
						path: "..\\components\\vant\\dist\\popup\\index"
					},
					"van-dialog": {
						path: "..\\components\\vant\\dist\\dialog\\index"
					},
					"mp-html": {
						path: "..\\components\\vant\\mp-html\\index"
					},
					"dialog-login": {
						path: "..\\components\\dialog-login"
					},
					"dialog-location": {
						path: "..\\components\\dialog-location"
					}
				},
				on: {
					"22-5": ["success", "fail"]
				}
			},
			handlers: {
				"22-0": {
					tap: function (e) {
						return void this.onMenuItemClick(e.id)
					}
				},
				"22-1": {
					tap: function (e) {
						return void this.onMenuItemClick(e.id)
					}
				},
				"22-2": {
					scrolltolower: function () {
						var e = arguments[arguments.length - 1];
						return void this.onScrollEnd(e)
					}
				},
				"22-3": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onDialogCancel(e)
					}
				},
				"22-4": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onDialogConfirm(e)
					}
				},
				"22-5": {
					success: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSuccessWxUserInfo(e)
					},
					fail: function () {
						var e = arguments[arguments.length - 1];
						return void this.onCancelWxUserInfo(e)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"nav-bar": {
						path: "..\\components\\nav-bar"
					},
					"van-popup": {
						path: "..\\components\\vant\\dist\\popup\\index"
					},
					"van-dialog": {
						path: "..\\components\\vant\\dist\\dialog\\index"
					},
					"mp-html": {
						path: "..\\components\\vant\\mp-html\\index"
					},
					"dialog-login": {
						path: "..\\components\\dialog-login"
					},
					"dialog-location": {
						path: "..\\components\\dialog-location"
					}
				},
				on: {
					"22-5": ["success", "fail"]
				}
			},
			handlers: {
				"22-0": {
					tap: function (e) {
						return void this.onMenuItemClick(e.id)
					}
				},
				"22-1": {
					tap: function (e) {
						return void this.onMenuItemClick(e.id)
					}
				},
				"22-2": {
					scrolltolower: function () {
						var e = arguments[arguments.length - 1];
						return void this.onScrollEnd(e)
					}
				},
				"22-3": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onDialogCancel(e)
					}
				},
				"22-4": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onDialogConfirm(e)
					}
				},
				"22-5": {
					success: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSuccessWxUserInfo(e)
					},
					fail: function () {
						var e = arguments[arguments.length - 1];
						return void this.onCancelWxUserInfo(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/index.js");
	__wxRoute = 'pages/account';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/account.js';
	define("pages/account.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e, n, o, i, a, r) {
			try {
				var s = t[a](r),
					c = s.value
			} catch (t) {
				return void n(t)
			}
			s.done ? e(c) : Promise.resolve(c).then(o, i)
		}

		function n(t) {
			return function () {
				var n = this,
					o = arguments;
				return new Promise(function (i, a) {
					function r(t) {
						e(c, i, a, r, s, "next", t)
					}

					function s(t) {
						e(c, i, a, r, s, "throw", t)
					}
					var c = t.apply(n, o);
					r(void 0)
				})
			}
		}

		function o(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t);
				e && (o = o.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, o)
			}
			return n
		}

		function i(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? o(Object(n), !0).forEach(function (e) {
					a(t, e, n[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				})
			}
			return t
		}

		function a(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var r = t(require("./../vendor.js")(2)),
			s = t(require("./../vendor.js")(0)),
			c = t(require("./../store/index.js")),
			u = t(require("./../common/utils.js")),
			l = t(require("./../common/log.js")),
			d = t(require("./../common/api.js")),
			h = require("./../vendor.js")(4),
			f = t(require("./../mixins/exist.js")),
			p = t(require("./../mixins/login.js")),
			m = t(require("./../mixins/returnSchool.js")),
			g = t(require("./../mixins/studentBind.js")),
			v = t(require("./../mixins/common.js")),
			C = t(require("./../mixins/notice.js"));
		s.default.page({
			store: c.default,
			mixins: [f.default, p.default, m.default, g.default, v.default, C.default],
			data: {
				studentDescription: "",
				language: "zh",
				menus: [{
					id: 1,
					img: "../images/ic_valid_dark.svg",
					title: "学籍认证",
					titleEN: "Authentication"
				}, {
					id: 2,
					img: "../images/ic_returncode_dark.svg",
					title: "进校码",
					titleEN: "Entry code"
				}],
				studentInfoRemark: "请登录并认证学籍",
				studentInfoRemarkEN: "Please log in and verify student status",
				paddingTop: 92,
				getParams: null,
				schoolStatus: "",
				freshTimes: 0,
				isHasRefreshed: !1,
				noticeShow: !1,
				noticeOrderID: 0,
				notice: {},
				disableConfirmButton: !0,
				showImage: !0
			},
			computed: i({}, (0, h.mapState)({
				appVersion: function (t) {
					return t.app.version
				},
				isProd: function (t) {
					return t.app.isProd
				},
				userInfo: function (t) {
					return t.user.userInfo
				},
				isBind: function (t) {
					return t.student.isBind
				},
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				isHasDailyReportToday: function (t) {
					return t.student.isHasDailyReportToday
				},
				isHasQualification: function (t) {
					return t.returnSchool.isHasQualification
				},
				isInSchool: function (t) {
					return t.student.isInSchool
				}
			})),
			onLoad: function () {
				var t = getApp().$wepy.$options.globalData;
				this.language = t.language, t.navbarHeight && (this.paddingTop = t.navbarHeight + 15), this.studentInfo && (this.getParams = {
					studentPid: this.studentInfo.pid
				})
			},
			onShow: function () {
				var t = this;
				t.checker = setInterval(function () {
					u.default.checkHasKey(t.studentInfo, "pid") && (t.doShowStudentInfo(), t.checker && clearInterval(t.checker))
				}, 200)
			},
			onUnload: function () {
				this.checker && clearInterval(this.checker)
			},
			onHide: function () {
				this.checker && clearInterval(this.checker)
			},
			methods: i({}, (0, h.mapActions)(["setApplyInfo", "setChildAdd", "setUserTokens", "setUserInfo", "setBind", "setStudentInfo", "setNextApplyRequestAvailableTime", "setDailyReportList", "setRiskInfo", "setAppealInfo", "setNextAppealRequestAvailableTime", "setNextDailyReportRequestAvailableTime", "setNextActivationRequestAvailableTime", "setNextTodayReportRequestAvailableTime", "setHasActivation", "setHasTodayReport", "setNextStudentInfoAvailableTime", "setNextNoticeArrayAvailableTime", "setNoticeArray"]), {
				doRefreshShowNotice: function (t) {
					var e = this.noticeArrayCloud.length,
						n = e - t - 1;
					0 === e || n < 0 ? this.noticeShow = !1 : 0 === n ? (this.noticeShow = !0, this.notice = 1 === e ? {
						title: this.noticeArrayCloud[t].title,
						richText: this.noticeArrayCloud[t].content,
						showCancel: !1,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "确定"
					} : {
						title: this.noticeArrayCloud[t].title,
						richText: this.noticeArrayCloud[t].content,
						showCancel: !0,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "确定"
					}) : 0 === t ? (this.noticeShow = !0, this.notice = {
						title: this.noticeArrayCloud[t].title,
						richText: this.noticeArrayCloud[t].content,
						showCancel: !1,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "下一条"
					}) : (this.noticeShow = !0, this.notice = {
						title: this.noticeArrayCloud[t].title,
						richText: this.noticeArrayCloud[t].content,
						showCancel: !0,
						cancelText: "上一条",
						showConfirm: !0,
						confirmText: "下一条"
					})
				},
				onDialogConfirm: function (t) {
					this.noticeOrderID = this.noticeOrderID + 1, this.doRefreshShowNotice(this.noticeOrderID)
				},
				onDialogCancel: function (t) {
					this.noticeOrderID = this.noticeOrderID - 1, this.doRefreshShowNotice(this.noticeOrderID)
				},
				onMenuItemClick: function (t) {
					var e = this;
					if (e.isNeedLogin()) return !1;
					if (1 !== t) {
						var n = e.isNeedBind();
						if (!0 === n) return !1;
						if (!1 !== n && !1 === e.isHasRefreshed) return n.then(function () {
							e.isHasRefreshed = !0, e.onMenuItemClick(t)
						}), !1
					}
					switch (t) {
						case 0:
							e.freshTimes < 3 ? d.default.cloudCheckActivation(e.language).then(function () {
								d.default.cloudGetStudentInfo(e.language).then(function (t) {
									e.doSetBindInfo(t), e.doShowStudentInfo(), u.default.wxToast("刷新成功", "Refresh successfully", e.language), e.freshTimes = e.freshTimes + 1
								})
							}) : u.default.wxToast("刷新次数过多，请稍后再试", "Refresh too many times, please try again later", e.language);
							break;
						case 1:
							u.default.checkHasKey(this.studentInfo, "pid") ? wx.navigateTo({
								url: "/pages/student/detail"
							}) : wx.navigateTo({
								url: "/pages/student/bind"
							});
							break;
						case 2:
							e.doCloudCheckBeforeApplyAppealReturnCode().then(function (t) {
								e.doCheckApplyInfo(t).then(function (t) {
									switch (console.log(t), t) {
										case "No planJxDatetime":
											u.default.wxToast("尚未提交申请", "尚未提交申请", e.language);
											break;
										case "Has planJxDatetime":
											u.default.wxToast("请等待审核通过", "请等待审核通过", e.language);
											break;
										case "Accept":
											e.doCheckJxCampusWithRisk()
									}
								})
							});
							break;
						case 11:
							e.doCloudCheckBeforeApplyAppealReturnCode().then(function (t) {
								return e.doCheckApplyInfo(t).then(function (t) {
									e.doCheckAppealWithRisk().then(function () {
										console.log(1), wx.redirectTo({
											url: "/pages/returnSchool/appealDetail?isShowNewAppealButton=true"
										})
									})
								})
							});
							break;
						case 12:
							var o = this.noticeArrayCloud.length;
							this.noticeOrderID = 0, o > 0 ? this.doRefreshShowNotice(this.noticeOrderID) : d.default.cloudGetNoticeArray(this.language).then(function (t) {
								e.noticeArrayCloud = t, e.setNoticeArray(t), 0 === (o = t.length) ? u.default.wxToast("当前暂无通知", "No notice at present", e.language) : e.doRefreshShowNotice(e.noticeOrderID)
							})
					}
				},
				doShowStudentInfo: function () {
					var t = this;
					"1" === t.studentInfo.statusTjyktStatus ? t.schoolStatus = "在校" : t.schoolStatus = "校园权限已被冻结，需办理进校手续开通", "zh" === t.language ? (t.studentDescription = "学号： " + t.studentInfo.studentNo + "\n姓名： " + t.studentInfo.name + "\n" + t.schoolStatus, t.menus[0].title = "我的学籍") : (t.studentDescription = "StudentNo： " + t.studentInfo.studentNo + "\nName： " + t.studentInfo.name + "\n" + t.schoolStatus, t.menus[0].title = "Student Info")
				},
				onContactClick: function (t) {
					this.$emit("contact", t.detail)
				},
				onClearStorage: function () {
					var t = this;
					u.default.wxModal("是否确认清除缓存，该功能可能对部分机型无效", "Confirm to clear the storage and reLaunch", this.language, function () {
						try {
							t.doClearStorageSync()
						} catch (t) {}
					}, function () {
						l.default.info("clear storage cancel")
					})
				},
				doClearStorageSync: function () {
					var t = n(r.default.mark(function t() {
						var e = this;
						return r.default.wrap(function (t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return t.next = 2, wx.clearStorage();
								case 2:
									wx.clearStorageSync(), u.default.wxToast("正在清理...", "Cleaning...", this.language, 3500), setTimeout(function () {
										u.default.wxToast("清理完成！请在右上角三个点处，点击重新进入小程序", "Finished！Please Reload the Miniprogram！", e.language, 1500)
									}, 3500);
								case 5:
								case "end":
									return t.stop()
							}
						}, t, this)
					}));
					return function () {
						return t.apply(this, arguments)
					}
				}()
			})
		}, {
			info: {
				components: {
					"van-popup": {
						path: "..\\components\\vant\\dist\\popup\\index"
					},
					"mp-html": {
						path: "..\\components\\vant\\mp-html\\index"
					},
					"van-cell-group": {
						path: "..\\components\\vant\\dist\\cell-group\\index"
					},
					"van-cell": {
						path: "..\\components\\vant\\dist\\cell\\index"
					},
					"van-icon": {
						path: "..\\components\\vant\\dist\\icon\\index"
					},
					"dialog-login": {
						path: "..\\components\\dialog-login"
					},
					"nav-bar": {
						path: "..\\components\\nav-bar"
					}
				},
				on: {
					"23-2": ["tap"],
					"23-3": ["tap"],
					"23-4": ["tap"],
					"23-5": ["tap"],
					"23-6": ["tap"],
					"23-7": ["tap"],
					"23-10": ["success", "fail"]
				}
			},
			handlers: {
				"23-0": {
					tap: function () {
						return void this.onMenuItemClick(0)
					}
				},
				"23-1": {
					tap: function (t) {
						return void this.onMenuItemClick(t.id)
					}
				},
				"23-2": {
					tap: function () {
						return void this.onMenuItemClick(12)
					}
				},
				"23-3": {
					tap: function () {
						return void this.onMenuItemClick(12)
					}
				},
				"23-4": {
					tap: function () {
						return void this.onMenuItemClick(11)
					}
				},
				"23-5": {
					tap: function () {
						return void this.onMenuItemClick(11)
					}
				},
				"23-6": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onClearStorage(t)
					}
				},
				"23-7": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onClearStorage(t)
					}
				},
				"23-8": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onDialogCancel(t)
					}
				},
				"23-9": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onDialogConfirm(t)
					}
				},
				"23-10": {
					success: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSuccessWxUserInfo(t)
					},
					fail: function () {
						var t = arguments[arguments.length - 1];
						return void this.onCancelWxUserInfo(t)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-popup": {
						path: "..\\components\\vant\\dist\\popup\\index"
					},
					"mp-html": {
						path: "..\\components\\vant\\mp-html\\index"
					},
					"van-cell-group": {
						path: "..\\components\\vant\\dist\\cell-group\\index"
					},
					"van-cell": {
						path: "..\\components\\vant\\dist\\cell\\index"
					},
					"van-icon": {
						path: "..\\components\\vant\\dist\\icon\\index"
					},
					"dialog-login": {
						path: "..\\components\\dialog-login"
					},
					"nav-bar": {
						path: "..\\components\\nav-bar"
					}
				},
				on: {
					"23-2": ["tap"],
					"23-3": ["tap"],
					"23-4": ["tap"],
					"23-5": ["tap"],
					"23-6": ["tap"],
					"23-7": ["tap"],
					"23-10": ["success", "fail"]
				}
			},
			handlers: {
				"23-0": {
					tap: function () {
						return void this.onMenuItemClick(0)
					}
				},
				"23-1": {
					tap: function (t) {
						return void this.onMenuItemClick(t.id)
					}
				},
				"23-2": {
					tap: function () {
						return void this.onMenuItemClick(12)
					}
				},
				"23-3": {
					tap: function () {
						return void this.onMenuItemClick(12)
					}
				},
				"23-4": {
					tap: function () {
						return void this.onMenuItemClick(11)
					}
				},
				"23-5": {
					tap: function () {
						return void this.onMenuItemClick(11)
					}
				},
				"23-6": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onClearStorage(t)
					}
				},
				"23-7": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onClearStorage(t)
					}
				},
				"23-8": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onDialogCancel(t)
					}
				},
				"23-9": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onDialogConfirm(t)
					}
				},
				"23-10": {
					success: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSuccessWxUserInfo(t)
					},
					fail: function () {
						var t = arguments[arguments.length - 1];
						return void this.onCancelWxUserInfo(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/account.js");
	__wxRoute = 'pages/notification';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/notification.js';
	define("pages/notification.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				t && (o = o.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, o)
			}
			return n
		}

		function n(e) {
			for (var n = 1; n < arguments.length; n++) {
				var i = null != arguments[n] ? arguments[n] : {};
				n % 2 ? t(Object(i), !0).forEach(function (t) {
					o(e, t, i[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
				})
			}
			return e
		}

		function o(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var i = e(require("./../vendor.js")(0)),
			r = e(require("./../store/index.js")),
			s = require("./../vendor.js")(4),
			a = e(require("./../common/httpUtils.js")),
			c = require("./../common/dateFormat.js"),
			l = e(require("./../mixins/refresh.js"));
		i.default.page({
			store: r.default,
			mixins: [l.default],
			data: {
				hasNext: !0,
				active: 0,
				isCheckingItem: null,
				isCheckingStatus: !1
			},
			computed: n({}, (0, s.mapState)({
				userInfo: function (e) {
					return e.user.userInfo
				},
				unReadCount: function (e) {
					return e.user.unReadCount
				}
			})),
			methods: n({}, (0, s.mapActions)(["setUnreadCount"]), {
				onNotiDetailClick: function (e) {
					var t = "";
					switch (e.messageType) {
						case "invite_to_school":
						case "invite_to_school_reply_accept":
						case "invite_to_school_reply_deny":
						case "apply_to_school":
						case "apply_to_school_reply_accept":
						case "apply_to_school_reply_deny":
							t = "/pages/reservation/detail?id=" + e.foreignId;
							break;
						case "ask_for_leave":
						case "ask_for_leave_reply_accept":
						case "ask_for_leave_reply_deny":
							break;
						case "school_notice":
							t = "/pages/announcement/school?id=" + e.id + "&title=" + e.title + "&content=" + e.all_content + "&sendTime=" + e.sendTime, e.senderName && (t = t + "&senderName=" + e.senderName), e.schoolName && (t = t + "&schoolName=" + e.schoolName);
							break;
						case "system_notice":
							t = "/pages/announcement/school?id=" + e.id;
							break;
						case "student_attendance":
							break;
						default:
							return
					}
					wx.navigateTo({
						url: t
					})
				},
				onNotiCheckClick: function (e, t) {
					this.isCheckingItem = t, this.isCheckingStatus = e;
					var n = this;
					wx.showModal({
						title: "提示",
						content: e ? "您是否确定要接受此邀约" : "您是否确定要拒绝此邀约",
						success: function (e) {
							e.confirm ? n.checkNotification() : e.cancel
						}
					})
				},
				checkNotification: function () {
					var e = {
							orderId: this.isCheckingItem.foreignId,
							messageType: this.isCheckingStatus ? "invite_to_school_reply_accept" : "invite_to_school_reply_deny"
						},
						t = this;
					a.default.post("/api/school/visitApply/invite/reply", e, function (e) {
						200 === e.code ? t.onRefresh(null, !1) : wx.showToast({
							title: e.message,
							icon: "none"
						})
					})
				},
				doGetDataList: function () {
					if (this.userInfo && (!(this.pageCount > 0) || this.isShowMore)) {
						var e = this,
							t = {
								pageNum: this.pageNum,
								pageSize: this.pageSize
							};
						a.default.get("/api/school/notification/list/my", t, function (t) {
							if (200 === t.code) {
								var n = t.data.data,
									o = 0,
									i = !0,
									r = !1,
									s = void 0;
								try {
									for (var a, l = n[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
										var d = a.value;
										switch (d.isRead || (o += 1), d.dateText = (0, c.dateText)(d.sendTime), d.isCheckNeeded = !d.isReplyNeeded, (d.schoolName || d.senderName) && (d.schoolName ? (d.sender = d.schoolName, d.senderName && (d.sender = d.sender + " - " + d.senderName)) : d.senderName && (d.sender = d.senderName)), d.messageType) {
											case "invite_to_school":
											case "invite_to_school_reply_accept":
											case "invite_to_school_reply_deny":
												d.isReplied ? (d.isReplyNeeded = !1, d.isCheckNeeded = !0, 1 === parseInt(d.replyStatus) ? d.replyDescription = "已接受" : 2 === parseInt(d.replyStatus) && (d.replyDescription = "已拒绝")) : d.isCheckNeeded = !1;
												break;
											case "school_notice":
											case "system_notice":
												d.all_content = d.content, d.content.length > 50 && (d.content = d.content.substr(0, 50) + "...");
												break;
											case "bind_student_reply_accept":
											case "bind_student_reply_deny":
												d.isCheckNeeded = !1
										}
									}
								} catch (e) {
									r = !0, s = e
								} finally {
									try {
										i || null == l.return || l.return()
									} finally {
										if (r) throw s
									}
								}
								e.dataList = e.dataList.concat(n), e.onGetDataListEnd(t.data.total, t.data.pageCount), (o > 0 || 0 !== e.unReadCount) && e.checkAllRead()
							} else e.onGetDataListEnd(0, 0)
						})
					}
				},
				checkAllRead: function () {
					var e = this;
					a.default.post("/api/school/notification/unread", {
						userId: this.userInfo.id
					}, function (t) {
						200 === t.code && (wx.removeTabBarBadge({
							index: 1
						}), e.setUnreadCount(0))
					})
				}
			})
		}, {
			info: {
				components: {
					"refresher-list": {
						path: "..\\components\\refresher-list\\index"
					},
					"nav-bar": {
						path: "..\\components\\nav-bar"
					}
				},
				on: {
					"24-0": ["refresh", "load"]
				}
			},
			handlers: {
				"24-0": {
					refresh: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRefresh(e)
					},
					load: function () {
						var e = arguments[arguments.length - 1];
						return void this.onLoadMore(e)
					}
				},
				"24-2": {
					tap: function (e) {
						return void this.onNotiCheckClick(!1, e)
					}
				},
				"24-3": {
					tap: function (e) {
						return void this.onNotiCheckClick(!0, e)
					}
				},
				"24-4": {
					tap: function (e) {
						return void this.onNotiDetailClick(e)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"refresher-list": {
						path: "..\\components\\refresher-list\\index"
					},
					"nav-bar": {
						path: "..\\components\\nav-bar"
					}
				},
				on: {
					"24-0": ["refresh", "load"]
				}
			},
			handlers: {
				"24-0": {
					refresh: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRefresh(e)
					},
					load: function () {
						var e = arguments[arguments.length - 1];
						return void this.onLoadMore(e)
					}
				},
				"24-2": {
					tap: function (e) {
						return void this.onNotiCheckClick(!1, e)
					}
				},
				"24-3": {
					tap: function (e) {
						return void this.onNotiCheckClick(!0, e)
					}
				},
				"24-4": {
					tap: function (e) {
						return void this.onNotiDetailClick(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/notification.js");
	__wxRoute = 'pages/license';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/license.js';
	define("pages/license.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		})(require("./../vendor.js")(0)).default.page({
			data: {
				nodes: '<div style="text-size:14px;line-height:26px;"><p align="left" style="text-align:left;text-indent:28.0pt;"><span>同济大学balabala</span></p></div>'
			}
		}, {
			info: {
				components: {
					"nav-bar": {
						path: "..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"nav-bar": {
						path: "..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		});
	});
	require("pages/license.js");
	__wxRoute = 'pages/dailyReport/normal';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/dailyReport/normal.js';
	define("pages/dailyReport/normal.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
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
						i || null == r.return || r.return()
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
				t && (i = i.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, i)
			}
			return n
		}

		function s(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? o(Object(n), !0).forEach(function (t) {
					r(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
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
		l.default.page({
			store: u.default,
			mixins: [v.default, p.default, g.default],
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
				userInfo: function (e) {
					return e.user.userInfo
				},
				expiresIn: function (e) {
					return e.user.expiresIn
				},
				isBind: function (e) {
					return e.student.isBind
				},
				studentInfo: function (e) {
					return e.student.studentInfo
				}
			})),
			onLoad: function () {
				var e = getApp().$wepy.$options.globalData;
				this.systemInfo = e.systemInfo, this.language = e.language, e.navbarHeight && (this.paddingTop = e.navbarHeight + 15), "zh" === e.language ? this.preSet = this.preSetCN : this.preSet = this.preSetEN, this.riskAddressArray.push(this.preSet.riskAddressArray[0]), this.areaList = m.default.data.areaList, this.areaListCN = k.default.data.areaList, this.doGetLocationAndCheckLastReportCity()
			},
			onShow: function () {},
			methods: s({}, (0, d.mapActions)(["setUserTokens", "setUserInfo", "changeStorageData", "setStudentInfo"]), {
				onFieldChange: function (e) {
					this.leaveReason = e.$wx.detail
				},
				doCheckStatement: function () {
					return "display:block" === this.showVantField && "" !== this.leaveReason || "display:none" === this.showVantField
				},
				doGetLocationAndCheckLastReportCity: function () {
					var e = this;
					e.isLocationAuth().then(function () {
						var n = e.getLocation(),
							i = c.default.cloudGetRiskLocationGov(e.language);
						Promise.all([n, i]).then(function (n) {
							var i = t(n, 2),
								a = (i[0], i[1]);
							e.doCheckLocationChange(), e.doCheckRiskLocationGov(a)
						})
					})
				},
				doCheckLocationChange: function () {
					var e = this;
					e.nation !== e.studentInfo.statusLastreportLocNation && "display:none" === e.showVantField && (e.showVantField = "display:block"), "中国" === e.nation ? (e.province !== e.studentInfo.statusLastreportLocProvince && "display:none" === e.showVantField && (e.showVantField = "display:block"), e.city !== e.studentInfo.statusLastreportLocCity && "display:none" === e.showVantField && (e.showVantField = "display:block")) : e.province !== e.studentInfo.statusLastreportLocProvince && "display:none" === e.showVantField && (e.showVantField = "display:block")
				},
				doCheckRiskLocationGov: function (e) {
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
				doCheckTime: function (e, t) {
					if (null === t) return !0;
					var n = new Date(f.default.adaptAppleDatetime(e)).getTime(),
						i = new Date(f.default.adaptAppleDatetime(t)).getTime(),
						a = (new Date).getTime();
					return n <= a && i >= a
				},
				onQuarantineChanged: function (e) {
					var t = e.$wx.detail.value;
					this.quarantineField = this.preSet.quarantineArray[t], this.vacationRiskInfo.studentStatusQuarantine = this.preSetCN.quarantineArray[t]
				},
				onRiskAddressChanged: function (e) {
					var t = Number(e.$wx.detail.value);
					this.riskAddressField = this.riskAddressArray[t], t === this.riskLevelArray.length - 1 ? null === this.riskAddressRegionNotStreet ? (this.vacationRiskInfo.locRiskAddress = "不在范围内", this.vacationRiskInfo.locRiskLevelGov = "低风险") : (this.vacationRiskInfo.locRiskAddress = this.riskAddressRegionNotStreet.locRiskAddress, this.vacationRiskInfo.locRiskLevelGov = this.riskAddressRegionNotStreet.locRiskLevelGov) : (this.vacationRiskInfo.locRiskAddress = this.riskAddressArray[t], this.vacationRiskInfo.locRiskLevelGov = this.riskLevelArray[t])
				},
				onPosiClick: function () {
					"" !== this.nation || this.ishasLocaThisTime || (this.ishasLocaThisTime = !0, this.doGetLocationAndCheckLastReportCity(), h.default.info("tap for location"))
				},
				getDate: function () {
					this.datetime = this.jsDateFormatter(new Date)
				},
				jsDateFormatter: function (e) {
					var t = e.getFullYear(),
						n = e.getMonth() + 1,
						i = e.getDate(),
						a = e.getHours(),
						o = e.getMinutes(),
						s = e.getSeconds();
					return n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), s < 10 && (s = "0" + s), t + "-" + n + "-" + i + " " + a + ":" + o + ":" + s
				},
				showNowPosition: function () {
					this.isHasLocation && (this.position = this.nation + "," + this.province + "," + this.city + "," + this.district)
				},
				doCheckAllFieldFinish: function () {
					return this.health < 0 ? (f.default.wxToast(this.preSetCN.infoHeath, this.preSetEN.infoHeath, this.language), !1) : "" === this.vacationRiskInfo.studentStatusQuarantine ? (f.default.wxToast("请选择当前隔离状态", "Please choose your status", this.language), !1) : !(this.riskLevelArray.length > 1 && "" === this.riskAddressField) || (f.default.wxToast("请选择近期是否去过风险地区", "Please select whether you have been to the risk area recently", this.language), !1)
				},
				doDailyReport: function () {
					var e = this,
						t = this;
					t.onRequestSubscribeMessage(["CYgmmMJV34J8tqXA5GUG1bvaVtXD-Zyoey_hUsS76vY"], function () {
						if (t.getDate(), !t.doCheckAllFieldFinish()) return !1;
						if (t.isHasLocation)
							if (t.doCheckStatement())
								if (t.ishasSendThisTime) f.default.wxToast("点击速度过快", "点击速度过快", t.language);
								else {
									t.ishasSendThisTime = !0;
									var n = "unknown";
									try {
										n = t.systemInfo.platform
									} catch (e) {}
									1 === e.riskLevelArray.length && (e.vacationRiskInfo.locRiskAddress = "不在范围内", e.vacationRiskInfo.locRiskLevelGov = "低风险"), t.sendLocation(t.studentInfo, t.health, t.datetime, t.leaveReason, t.vacationRiskInfo, n).then(function () {
										t.studentInfo.statusLastreportLocNation = t.nation, t.studentInfo.statusLastreportLocProvince = t.province, t.studentInfo.statusLastreportLocCity = t.city, t.studentInfo.statusLastreportDatetime = f.default.getFormatAppleDatetime(new Date), t.setStudentInfo(t.studentInfo), wx.reLaunch({
											url: "/pages/dailyReport/complete"
										})
									})
								}
						else f.default.wxToast("请完成所有必填项", "Please complete all required fields", t.language);
						else f.default.wxToast(t.preSetCN.infoPosi, t.preSetEN.infoPosi, t.language)
					})
				},
				onRiskChanged: function (e) {
					var t = e.$wx.detail.value[0];
					this.health = t, this.healthDescription = this.preSet.riskArray[0][t]
				},
				onConfirm: function (e) {
					var t = e.$wx.detail.values[1].code;
					this.nation = this.areaListCN.city_list[t], this.position = e.$wx.detail.values[1].name, this.isHasLocation = !0, this.show = !1, this.ishasLocaThisTime = !1, this.doCheckLocationChange()
				},
				onCancel: function (e) {
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
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRiskChanged(e)
					}
				},
				"26-1": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(e)
					}
				},
				"26-2": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onQuarantineChanged(e)
					}
				},
				"26-3": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRiskAddressChanged(e)
					}
				},
				"26-4": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onPosiClick(e)
					}
				},
				"26-5": {
					confirm: function () {
						var e = arguments[arguments.length - 1];
						return void this.onConfirm(e)
					},
					cancel: function () {
						var e = arguments[arguments.length - 1];
						return void this.onCancel(e)
					}
				},
				"26-7": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e)
					}
				},
				"26-8": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.doDailyReport(e)
					}
				},
				"26-9": {
					success: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSuccessWxLocation(e)
					},
					fail: function () {
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
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRiskChanged(e)
					}
				},
				"26-1": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(e)
					}
				},
				"26-2": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onQuarantineChanged(e)
					}
				},
				"26-3": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onRiskAddressChanged(e)
					}
				},
				"26-4": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onPosiClick(e)
					}
				},
				"26-5": {
					confirm: function () {
						var e = arguments[arguments.length - 1];
						return void this.onConfirm(e)
					},
					cancel: function () {
						var e = arguments[arguments.length - 1];
						return void this.onCancel(e)
					}
				},
				"26-7": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e)
					}
				},
				"26-8": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.doDailyReport(e)
					}
				},
				"26-9": {
					success: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSuccessWxLocation(e)
					},
					fail: function () {
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
	define("pages/dailyReport/complete.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function n(n) {
			return n && n.__esModule ? n : {
				default: n
			}
		}
		var e = n(require("./../../vendor.js")(0)),
			o = (require("./../../vendor.js")(4), n(require("./../../store/index.js")));
		e.default.page({
			store: o.default,
			data: {
				isSuccess: !0
			},
			methods: {
				onHomeClick: function () {
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
					tap: function () {
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
					tap: function () {
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
	define("pages/student/bind.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t);
				e && (o = o.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, o)
			}
			return n
		}

		function n(t) {
			for (var n = 1; n < arguments.length; n++) {
				var r = null != arguments[n] ? arguments[n] : {};
				n % 2 ? e(Object(r), !0).forEach(function (e) {
					o(t, e, r[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (e) {
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
		r.default.page({
			store: d.default,
			mixins: [u.default, c.default],
			data: {
				language: "zh",
				preSetCN: {
					bar: "学籍认证",
					studentNoText: "学号",
					studentNoHolderText: "请输入您的学号",
					passwordText: "认证码",
					passwordHolderText: "身份证12-17位/学号",  ///密码,30246
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
				userInfo: function (t) {
					return t.user.userInfo
				},
				isBind: function (t) {
					return t.student.isBind
				}
			})),
			onLoad: function () {
				var t = getApp();
				this.language = t.$wepy.$options.globalData.language, "zh" === this.language ? this.preSet = this.preSetCN : this.preSet = this.preSetEN
			},
			methods: n({}, (0, a.mapActions)(["setBind", "setStudentInfo", "setUserInfo", "setUserTokens", "setNextStudentInfoAvailableTime"]), {
				onBindSubmit: function () {
					var t = this;
					if (!this.studentNo) return this.msg = "请输入学号", this.dialogShow = !0, !1;
					if (!this.password) return this.msg = "请输入身份验证码", this.dialogShow = !0, !1; ///登录验证
					var e = {
						studentStudentno: this.studentNo,
						studentPassword: this.password
					};
					i.default.post("/api/school_tjxsfw_student/tblStudentUsers/check", e, function (e) {
						200 === e.code ? t.doGetBind("bind") : 403 === e.code ? (s.default.wxErrorToast("onBindSubmit", "Tokens Expired", "验证过期，请重新尝试", 3e3), d.default.dispatch("clearUserTokens"), t.isNeedLogin()) : s.default.wxToast(e.message, e.message, t.language)
					}, function () {
						s.default.wxToast("本地网络错误", "Please check your network", t.language)
					})
				},
				onDialogClose: function () {
					this.dialogShow = !1
				},
				onPasswordChanged: function (t) {
					var e = t.$wx.detail;
					this.password = e
				},
				onStudentNoChanged: function (t) {
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
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(t)
					}
				},
				"28-1": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onPasswordChanged(t)
					}
				},
				"28-2": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(t)
					}
				},
				"28-3": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onPasswordChanged(t)
					}
				},
				"28-4": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBindSubmit(t)
					}
				},
				"28-5": {
					close: function () {
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
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(t)
					}
				},
				"28-1": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onPasswordChanged(t)
					}
				},
				"28-2": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(t)
					}
				},
				"28-3": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onPasswordChanged(t)
					}
				},
				"28-4": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBindSubmit(t)
					}
				},
				"28-5": {
					close: function () {
						var t = arguments[arguments.length - 1];
						return void this.onDialogClose(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/student/bind.js");
	__wxRoute = 'pages/student/bindComplete';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/student/bindComplete.js';
	define("pages/student/bindComplete.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function n(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var r = e(require("./../../vendor.js")(0)),
			o = require("./../../vendor.js")(4),
			i = e(require("./../../store/index.js"));
		r.default.page({
			store: i.default,
			data: {
				isSuccess: !0
			},
			onLoad: function (e) {
				this.setCertificationExist(1)
			},
			methods: function (e) {
				for (var r = 1; r < arguments.length; r++) {
					var o = null != arguments[r] ? arguments[r] : {};
					r % 2 ? t(Object(o), !0).forEach(function (t) {
						n(e, t, o[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
					})
				}
				return e
			}({}, (0, o.mapActions)(["setCertificationExist"]), {
				onHomeClick: function () {
					wx.switchTab({
						url: "/pages/index"
					})
				}
			})
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
				"29-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onHomeClick(e)
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
				"29-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onHomeClick(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/student/bindComplete.js");
	__wxRoute = 'pages/student/detail';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/student/detail.js';
	define("pages/student/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				t && (o = o.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, o)
			}
			return n
		}

		function n(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var o = e(require("./../../vendor.js")(0)),
			r = (e(require("./../../common/httpUtils.js")), e(require("./../../store/index.js"))),
			a = require("./../../vendor.js")(4);
		o.default.page({
			store: r.default,
			data: {
				language: "zh",
				name: "",
				studentNo: "",
				college: "",
				phone: ""
			},
			computed: function (e) {
				for (var o = 1; o < arguments.length; o++) {
					var r = null != arguments[o] ? arguments[o] : {};
					o % 2 ? t(Object(r), !0).forEach(function (t) {
						n(e, t, r[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					})
				}
				return e
			}({}, (0, a.mapState)({
				userInfo: function (e) {
					return e.user.userInfo
				},
				studentInfo: function (e) {
					return e.student.studentInfo
				}
			})),
			onLoad: function () {
				var e = getApp();
				this.language = e.$wepy.$options.globalData.language, this.name = this.studentInfo.name, this.studentNo = this.studentInfo.studentNo, this.college = this.studentInfo.college, this.phone = this.studentInfo.phone
			},
			methods: {
				onEditClick: function () {
					wx.navigateTo("/pages/student/changeInfo")
				},
				onDeleteClick: function () {}
			}
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		});
	});
	require("pages/student/detail.js");
	__wxRoute = 'pages/student/changeInfo';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/student/changeInfo.js';
	define("pages/student/changeInfo.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function n(n) {
			return n && n.__esModule ? n : {
				default: n
			}
		}

		function e(n, e) {
			var t = Object.keys(n);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(n);
				e && (o = o.filter(function (e) {
					return Object.getOwnPropertyDescriptor(n, e).enumerable
				})), t.push.apply(t, o)
			}
			return t
		}

		function t(n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = null != arguments[t] ? arguments[t] : {};
				t % 2 ? e(Object(i), !0).forEach(function (e) {
					o(n, e, i[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function (e) {
					Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
				})
			}
			return n
		}

		function o(n, e, t) {
			return e in n ? Object.defineProperty(n, e, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : n[e] = t, n
		}
		var i = n(require("./../../vendor.js")(0)),
			r = n(require("./../../common/httpUtils.js")),
			a = require("./../../vendor.js")(4),
			s = n(require("./../../store/index.js"));
		i.default.page({
			store: s.default,
			data: {
				name: "",
				studentNo: "",
				verification: "",
				errHint: "",
				isPhotoNeed: !1
			},
			computed: t({}, (0, a.mapState)({
				userInfo: function (n) {
					return n.user.userInfo
				},
				isBind: function (n) {
					return n.student.isBind
				}
			})),
			onLoad: function () {},
			methods: t({}, (0, a.mapActions)(["setBind", "setStudentInfo"]), {
				onBindSubmit: function () {
					var n = this,
						e = this;
					if (console.log(this.name), this.name.length < 2) this.errHint = "请输入您的姓名，至少2个字";
					else {
						var t = {
							studentOldPhone: this.studentNo,
							studentNowPhone: this.password,
							studentVerification: this.verification
						};
						r.default.post("/api/school_tjxsfw_student/tblStudentUsers/check", t, function (t) {
							console.log(t), 200 === t.code ? (e.setBind(!0), r.default.get("/api/school_tjxsfw_student/tblStudentUsers/my", void 0, function (n) {
								var t = n.data;
								if (t) {
									var o = {
										pid: t.studentPid,
										studentNo: t.studentStudentno,
										name: t.studentName,
										college: t.studentCollegeName,
										phone: t.studentMobilephone
									};
									e.setStudentInfo(o), wx.navigateTo({
										url: "/pages/student/bindComplete"
									})
								}
							})) : n.errHint = t.message
						})
					}
				},
				onStudentNameChanged: function (n) {
					var e = n.$wx.detail;
					this.name = " ", e = e.replace(/[^·a-zA-Z\u4E00-\u9FA5]/g, ""), this.name = e
				},
				onStudentNoChanged: function (n) {
					console.log(n);
					var e = n.$wx.detail;
					this.studentNo = " ", e = 1 === e.length ? e.replace(/[^1-9]/g, "") : e.replace(/[^0-9]/g, ""), this.studentNo = e
				}
			})
		}, {
			info: {
				components: {
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
					"31-0": ["change"],
					"31-1": ["change"],
					"31-2": ["change"]
				}
			},
			handlers: {
				"31-0": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onStudentNameChanged(n)
					}
				},
				"31-1": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(n)
					}
				},
				"31-2": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onStudentNameChanged(n)
					}
				},
				"31-3": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onBindSubmit(n)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
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
					"31-0": ["change"],
					"31-1": ["change"],
					"31-2": ["change"]
				}
			},
			handlers: {
				"31-0": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onStudentNameChanged(n)
					}
				},
				"31-1": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onStudentNoChanged(n)
					}
				},
				"31-2": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onStudentNameChanged(n)
					}
				},
				"31-3": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onBindSubmit(n)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/student/changeInfo.js");
	__wxRoute = 'pages/returnSchool/apply';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/apply.js';
	define("pages/returnSchool/apply.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(t);
				e && (a = a.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, a)
			}
			return n
		}

		function n(t) {
			for (var n = 1; n < arguments.length; n++) {
				var i = null != arguments[n] ? arguments[n] : {};
				n % 2 ? e(Object(i), !0).forEach(function (e) {
					a(t, e, i[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
				})
			}
			return t
		}

		function a(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var i = t(require("./../../vendor.js")(0)),
			r = (t(require("./../../common/httpUtils.js")), require("./../../common/dateFormat.js"), t(require("./../../store/index.js"))),
			o = require("./../../vendor.js")(4),
			s = t(require("./../../mixins/returnSchool.js")),
			l = t(require("./../../mixins/exist.js")),
			u = t(require("./../../mixins/login.js")),
			g = t(require("./../../mixins/location.js")),
			h = t(require("./../../common/utils.js")),
			p = t(require("./../../common/api.js"));
		i.default.page({
			store: r.default,
			mixins: [l.default, u.default, g.default, s.default],
			data: {
				language: "zh",
				show: !1,
				teacherName: "",
				reason: "",
				startTime: "请选择",
				endTime: "请选择",
				duration: "请先选择进校时间",
				returnPosi: "请选择",
				returnReason: "",
				isNeedCode: !1,
				selectedRadio: void 0,
				errHint: void 0,
				schoolIdBj: void 0,
				studentIdBj: void 0,
				hourList: ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
				durationArray: ["0.5小时", "1小时"],
				selectReturnPosiIndex: [0],
				ReturnPosiArray: [
					[]
				],
				durationValueArray: [],
				selectStartTimeIndex: [0],
				multiTimeArray: [],
				startTimeArray: [],
				isDurationEnable: !1,
				isNeedRequestSubscribe: !1,
				isAddChildEnable: !1,
				riskTotal: null,
				isApplyFirstThisTime: !0,
				nowDatetime: "",
				highRisk3dayStartDate: ""
			},
			onLoad: function () {
				var t = getApp();
				this.language = t.$wepy.$options.globalData.language, h.default.checkHasKey(this.riskInfo.riskTotal, "riskDescription") ? this.riskTotal = this.riskInfo.riskTotal : this.riskTotal = {
					riskDescription: "无风险",
					measure: "无措施"
				}, this.jxCampusList = this.doJxCampusCalculation(this.riskInfo), this.ReturnPosiArray = this.jxCampusList, this.nowDatetime = h.default.getFormatDateTime(new Date)
			},
			onShow: function () {
				this.setStartTimeArray(null, null)
			},
			computed: n({}, (0, o.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				applyInfo: function (t) {
					return t.returnSchool.applyInfo
				},
				riskInfo: function (t) {
					return t.student.riskInfo
				}
			})),
			methods: n({}, (0, o.mapActions)(["setApplyInfo"]), {
				onFieldChange: function (t) {
					this.returnReason = t.$wx.detail
				},
				onRiskAppealClick: function () {
					wx.navigateTo({
						url: "/pages/returnSchool/appeal"
					})
				},
				onReturnPosiChanged: function (t) {
					var e = t.$wx.detail.value[0];
					this.returnPosi = this.ReturnPosiArray[0][e]
				},
				onSubmit: function () {
					var t = this;
					if ("请选择" !== t.returnPosi && "Please Choose" !== t.returnPosi)
						if ("请选择" !== t.startTime && "Please Choose" !== t.startTime) {
							var e = {
								planJxCampus: t.returnPosi,
								planJxDatetime: t.startTime + " 23:00:00",
								planJxStatement: t.returnReason,
								jxaId: t.applyInfo.jxaId
							};
							if (t.isApplyFirstThisTime)
								if (setTimeout(function () {
										t.isApplyFirstThisTime = !0
									}, 1500), "同济迎宾馆" === e.planJxCampus) {
									if (3 === this.riskTotal.riskType) {
										var n = new Date(this.highRisk3dayStartDate).getTime(),
											a = new Date(h.default.getFormatAppleDate(new Date(t.startTime))).getTime();
										e.dateLength = a >= n ? 3 : 14
									} else {
										if (2 !== this.riskTotal.riskType) return void h.default.wxToast("未知错误", "Failed", t.language);
										e.dateLength = 3
									}
									p.default.cloudPostApplyYBG(e, t.language).then(function (e) {
										"" === e && (t.applyInfo.planJxCampus = t.returnPosi, t.applyInfo.planJxStatement = t.returnReason, t.applyInfo.planJxDatetime = t.startTime, t.setApplyInfo(t.applyInfo), wx.redirectTo({
											url: "/pages/returnSchool/applyDetail"
										}))
									})
								} else p.default.cloudPostApply(e, t.language).then(function (e) {
									"" === e && (t.applyInfo.planJxCampus = t.returnPosi, t.applyInfo.planJxStatement = t.returnReason, t.applyInfo.planJxDatetime = t.startTime, t.setApplyInfo(t.applyInfo), wx.redirectTo({
										url: "/pages/returnSchool/applyDetail"
									}))
								});
							else h.default.wxToast("重复请求", "重复请求", t.language)
						} else h.default.wxToast("请选择进校日期", "Please choose enter campus date", t.language);
					else h.default.wxToast("请选择进校点", "Please choose enter campus", t.language)
				},
				doHighRiskCalcu: function () {
					var t = this.doCalcuHighRiskDateList(this.riskInfo);
					return 0 === t ? (h.default.wxErrorToast("doHighRiskCalcu", "null high risk", "数据错误"), !1) : new Date(t).getTime() + 12096e5
				},
				getDateList: function () {
					var t = [],
						e = new Date(h.default.getFormatAppleDate(new Date)),
						n = null,
						a = new Date("2021/02/18"),
						i = new Date("2021/02/18"),
						o = new Date("2021/02/18");
					if (1 !== this.ReturnPosiArray[0].length) {
						for (e = Number(r.default.state.student.studentInfo.studentNo) >= 2e6 ? e.getTime() > i.getTime() ? e : i : e.getTime() > o.getTime() ? e : o, (n = new Date(h.default.getFormatAppleDate(new Date))).setDate(n.getDate() + 15); n.getTime() - e.getTime() >= 0;) {
							var s = e.getFullYear().toString(),
								l = 1 === (e.getMonth() + 1).toString().length ? "0" + (e.getMonth() + 1).toString() : e.getMonth() + 1,
								u = 1 === e.getDate().toString().length ? "0" + e.getDate() : e.getDate();
							t.push(s + "-" + l + "-" + u), e.setDate(e.getDate() + 1)
						}
						return t
					}
					if (3 === this.riskTotal.riskType) {
						e.getTime() < a.getTime() && (e = a);
						for (var g = new Date(h.default.getFormatAppleDate(new Date(this.doHighRiskCalcu()))), p = new Date(h.default.getFormatAppleDate(new Date)); p.getTime() > a.getTime() || a.getTime() <= g.getTime();) a.setDate(a.getDate() + 3);
						for (p = a, this.highRisk3dayStartDate = h.default.getFormatAppleDate(new Date(p)), (n = new Date(h.default.getFormatAppleDate(new Date))).setDate(n.getDate() + 15); g.getTime() - e.getTime() >= 0;) {
							var d = e.getFullYear().toString(),
								m = 1 === (e.getMonth() + 1).toString().length ? "0" + (e.getMonth() + 1).toString() : e.getMonth() + 1,
								c = 1 === e.getDate().toString().length ? "0" + e.getDate() : e.getDate();
							t.push(d + "-" + m + "-" + c), e.setDate(e.getDate() + 1)
						}
						for (; n.getTime() - p.getTime() >= 0;) {
							var f = p.getFullYear().toString(),
								D = 1 === (p.getMonth() + 1).toString().length ? "0" + (p.getMonth() + 1).toString() : p.getMonth() + 1,
								T = 1 === p.getDate().toString().length ? "0" + p.getDate() : p.getDate();
							t.push(f + "-" + D + "-" + T), p.setDate(p.getDate() + 3)
						}
						return t
					}
					if (2 === this.riskTotal.riskType) {
						for (; e.getTime() > a.getTime();) a.setDate(a.getDate() + 3);
						for (e = a, (n = new Date(h.default.getFormatAppleDate(new Date))).setDate(n.getDate() + 15); n.getTime() - e.getTime() >= 0;) {
							var v = e.getFullYear().toString(),
								y = 1 === (e.getMonth() + 1).toString().length ? "0" + (e.getMonth() + 1).toString() : e.getMonth() + 1,
								S = 1 === e.getDate().toString().length ? "0" + e.getDate() : e.getDate();
							t.push(v + "-" + y + "-" + S), e.setDate(e.getDate() + 3)
						}
						return t
					}
					h.default.wxToast("未知错误", "Failed", this.language)
				},
				setStartTimeArray: function (t, e) {
					var n = 0,
						a = [];
					null == t ? t = (a = this.getDateList())[0] : (a = this.startTimeArray[0], n = this.selectStartTimeIndex[0]), this.startTimeArray = [a], this.selectStartTimeIndex = [n]
				},
				onStartTimeChanged: function (t) {
					console.log("onLoad", this.jxCampusList);
					var e = t.$wx.detail.value[0],
						n = this.startTimeArray[0][e];
					this.startTime = n
				},
				onStartTimeColumnChanged: function (t) {},
				onTimeDurationChanged: function (t) {},
				updateEndTime: function () {}
			})
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"32-3": ["change"]
				}
			},
			handlers: {
				"32-0": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStartTimeChanged(t)
					},
					columnchange: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStartTimeColumnChanged(t)
					}
				},
				"32-2": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onReturnPosiChanged(t)
					}
				},
				"32-3": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onFieldChange(t)
					}
				},
				"32-4": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSubmit(t)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"32-3": ["change"]
				}
			},
			handlers: {
				"32-0": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStartTimeChanged(t)
					},
					columnchange: function () {
						var t = arguments[arguments.length - 1];
						return void this.onStartTimeColumnChanged(t)
					}
				},
				"32-2": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onReturnPosiChanged(t)
					}
				},
				"32-3": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onFieldChange(t)
					}
				},
				"32-4": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSubmit(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/apply.js");
	__wxRoute = 'pages/returnSchool/applyDetail';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/applyDetail.js';
	define("pages/returnSchool/applyDetail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(t);
				e && (a = a.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, a)
			}
			return n
		}

		function n(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var a = t(require("./../../vendor.js")(0)),
			p = (t(require("./../../common/httpUtils.js")), require("./../../common/dateFormat.js"), t(require("./../../store/index.js"))),
			i = require("./../../vendor.js")(4),
			o = (t(require("./../../mixins/returnSchool.js")), t(require("./../../mixins/exist.js"))),
			s = t(require("./../../mixins/login.js")),
			r = t(require("./../../common/utils.js"));
		a.default.page({
			store: p.default,
			mixins: [o.default, s.default],
			data: {
				preSetCN: {
					studentNoText: "学号",
					nameText: "姓名",
					applyTimeText: "申请时间",
					navTitle: "我的申请",
					planJxCampusTimeText: "申请进校时间",
					planJxCampusText: "申请进校校区",
					applyStatusText: "申请状态",
					applyResultText: "申请结果"
				},
				preSetEN: {
					studentNoText: "Student ID",
					nameText: "Name",
					applyTimeText: "Submit Datetime",
					navTitle: "My Application",
					planJxCampusTimeText: "Arrival DateTime",
					planJxCampusText: "Dest. Campus",
					applyStatusText: "Application Status",
					applyResultText: "Application Result"
				},
				stepsEN: [{
					text: "Waiting for Counsellor Review"
				}, {
					text: "Approved"
				}],
				preSet: {},
				language: "zh",
				applyInfo: null,
				steps: [{
					text: "待学院审核"
				}, {
					text: "已审批"
				}],
				isHasExpireDatetime: !1
			},
			onLoad: function () {
				var t = getApp();
				this.language = t.$wepy.$options.globalData.language, this.initApplyInfo(), "zh" === this.language ? this.preSet = this.preSetCN : (this.preSet = this.preSetEN, this.steps = this.stepsEN), r.default.checkHasKey(this.applyInfo, "expireDatetime") && this.applyInfo.expireDatetime && (this.isHasExpireDatetime = !0), console.log("detail ", this.applyInfo)
			},
			onShow: function () {},
			computed: function (t) {
				for (var a = 1; a < arguments.length; a++) {
					var p = null != arguments[a] ? arguments[a] : {};
					a % 2 ? e(Object(p), !0).forEach(function (e) {
						n(t, e, p[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(p)) : e(Object(p)).forEach(function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(p, e))
					})
				}
				return t
			}({}, (0, i.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				applyInfo: function (t) {
					return t.returnSchool.applyInfo
				}
			})),
			methods: {
				onChangeApply: function () {},
				initApplyInfo: function () {
					var t = p.default.state.returnSchool.applyInfo;
					this.applyInfo = {
						studentNo: t.studentStudentno,
						name: t.studentName,
						applyTime: t.updateDateTime,
						planJxCampus: t.planJxCampus
					}, null !== t.statusIsaccepted ? (this.applyInfo.applyStatus = 1, t.statusIsaccepted ? this.applyInfo.applyReply = "zh" === this.language ? "申请通过" : "Accept" : this.applyInfo.applyReply = "zh" === this.language ? "申请拒绝" : "Reject") : (this.applyInfo.applyStatus = 0, this.applyInfo.applyReply = "zh" === this.language ? "暂无回复" : "No Reply Yet");
					var e = new Date(r.default.adaptAppleDatetime(t.planJxDatetime)),
						n = e.getFullYear().toString(),
						a = 1 === (e.getMonth() + 1).toString().length ? "0" + (e.getMonth() + 1).toString() : e.getMonth() + 1,
						i = 1 === e.getDate().toString().length ? "0" + e.getDate() : e.getDate();
					this.applyInfo.planJxDatetime = n + "-" + a + "-" + i
				}
			}
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-steps": {
						path: "..\\..\\components\\vant\\dist\\steps\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"33-0": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onChangeApply(t)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-steps": {
						path: "..\\..\\components\\vant\\dist\\steps\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"33-0": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onChangeApply(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/applyDetail.js");
	__wxRoute = 'pages/returnSchool/returnCode';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/returnCode.js';
	define("pages/returnSchool/returnCode.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function n(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var r = e(require("./../../vendor.js")(0)),
			o = require("./../../vendor.js")(4),
			i = e(require("./../../store/index.js")),
			s = e(require("./../../vendor.js")(5)),
			a = e(require("./../../common/utils.js")),
			d = e(require("./../../common/base64.js")),
			l = e(require("./../../mixins/returnSchool.js"));
		r.default.page({
			store: i.default,
			mixins: [l.default],
			data: {
				dict_college: ["材料科学与工程学院", "测绘与地理信息学院", "创新创业学院", "电子与信息工程学院", "法学院", "国际文化交流学院", "国际足球学院", "海洋与地球科学学院", "航空航天与力学学院", "化学科学与工程学院", "环境科学与工程学院", "机械与能源工程学院", "建筑与城市规划学院", "交通运输工程学院", "经济与管理学院", "口腔医学院", "马克思主义学院", "汽车学院", "人文学院", "软件学院", "上海国际知识产权学院", "设计创意学院", "生命科学与技术学院", "数学科学学院", "体育教学部", "铁道与城市轨道交通研究院", "土木工程学院", "外国语学院", "物理科学与工程学院", "新生院济美学堂", "新生院济勤学堂", "新生院济人学堂", "新生院济世学堂", "新生院同德学堂", "新生院同和学堂", "新生院同心学堂", "新生院同舟学堂", "学生处", "医学院", "艺术与传媒学院", "政治与国际关系学院", "职业技术教育学院", "中德工程学院", "中德学院", "中意学院", "新生院强基计划学堂"],
				codeBook: {
					A: "f",
					B: "b",
					C: "d",
					D: "2",
					E: "Z",
					F: "t",
					G: "8",
					H: "3",
					I: "*",
					J: "G",
					K: "W",
					L: "A",
					M: "U",
					N: "H",
					O: "s",
					P: "i",
					Q: "e",
					R: "5",
					S: "7",
					T: "+",
					U: "O",
					V: "6",
					W: "V",
					X: "z",
					Y: "4",
					Z: "n",
					a: "x",
					b: "0",
					c: "X",
					d: "Y",
					e: "L",
					f: "N",
					g: "q",
					h: "B",
					i: "P",
					j: "h",
					k: "9",
					l: "v",
					m: "/",
					n: "1",
					o: "r",
					p: "j",
					q: "C",
					r: "u",
					s: "m",
					t: "M",
					u: "p",
					v: "-",
					w: "c",
					x: "g",
					y: "y",
					z: "R",
					0: "I",
					1: "l",
					2: "S",
					3: "E",
					4: "F",
					5: "T",
					6: "=",
					7: "a",
					8: "D",
					9: "k",
					"+": "K",
					"-": "J",
					"*": "w",
					"/": "Q",
					"=": "o"
				},
				riskColor: "#ffffff",
				returnPosi: "",
				returnPosiDetail: "",
				dict_returnPosiDetail: ["上海市杨浦区彰武路69号", "上海市杨浦区四平路1239号", "上海市杨浦区彰武路100号", "上海市杨浦区铁岭路30号", "上海市静安区共和新路1238号", "上海市普陀区真南路500号", "上海市嘉定区曹安公路4800号", "上海市杨浦区赤峰路67号"],
				dateTime: "",
				text: null,
				isSuccess: !0,
				times: 10,
				planJxDate: null
			},
			computed: function (e) {
				for (var r = 1; r < arguments.length; r++) {
					var o = null != arguments[r] ? arguments[r] : {};
					r % 2 ? t(Object(o), !0).forEach(function (t) {
						n(e, t, o[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
					})
				}
				return e
			}({}, (0, o.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				riskInfo: function (e) {
					return e.student.riskInfo
				},
				applyInfo: function (e) {
					return e.returnSchool.applyInfo
				}
			})),
			onLoad: function () {
				var e = this;
				console.log(this.studentInfo), a.default.checkHasKey(this.studentInfo, "gender") ? "男" === this.studentInfo.gender ? this.riskColor = "#003f7e" : "女" === this.studentInfo.gender ? this.riskColor = "#EE2672" : this.riskColor = "#00CCFF" : this.riskColor = "#00CCFF", this.returnPosi = this.applyInfo.planJxCampus, this.planJxDate = a.default.getFormatDate(new Date(a.default.adaptAppleDatetime(this.applyInfo.planJxDatetime)));
				var t = this.dict_campus.indexOf(this.returnPosi);
				t >= 0 && (this.returnPosiDetail = this.dict_returnPosiDetail[t]), e.doGenerateText(), e.makeQrcode();
				var n = (new Date).getTime() + 864e5,
					r = a.default.getFormatAppleDate(new Date(n));
				e.times = parseInt((new Date(r).getTime() - (new Date).getTime() - 288e5) / 1e3 / 60) - 1, this.refresher = setInterval(function () {
					e.times > 0 ? (e.doGenerateText(), e.makeQrcode(), e.times = e.times - 1, console.log(e.times)) : e.refresher && clearInterval(e.refresher)
				}, 6e4), e.dateTime = a.default.getFormatDateTime(new Date), e.timer = setInterval(function () {
					e.dateTime = a.default.getFormatDateTime(new Date)
				}, 1e3)
			},
			onHide: function () {
				console.log("returnCode OnHide"), this.timer && clearInterval(this.timer), this.refresher && clearInterval(this.refresher)
			},
			onUnload: function () {
				console.log("returnCode onUnload"), this.timer && clearInterval(this.timer), this.refresher && clearInterval(this.refresher)
			},
			methods: {
				doGenerateText: function () {
					var e = a.default.getFormatDateTime(new Date) + "," + this.doGetRiskCode() + "," + this.doGetPlanJxCampusCode() + "," + this.applyInfo.planJxDatetime + "," + this.studentInfo.pid + "," + this.studentInfo.studentNo + "," + d.default.CusBASE64.encoder(this.studentInfo.name) + "," + this.doGetCollegeCode() + "," + this.applyInfo.jxaId,
						t = d.default.CusBASE64.encoder(e);
					this.text = this.doReplaceByDict(t), console.log("text", this.text)
				},
				doGetRiskCode: function () {
					if (a.default.checkHasKey(this.riskInfo.riskTotal, "riskDescription")) return "0" + this.dict_riskDescription.indexOf(this.riskInfo.riskTotal.riskDescription).toString();
					return "00"
				},
				doGetPlanJxCampusCode: function () {
					var e = this.dict_campus.indexOf(this.applyInfo.planJxCampus);
					if (e >= 0) return a.default.completeDate(e);
					a.default.wxErrorToast("doGetPlanJxCampusCode", "applyInfo NO JxCampus")
				},
				doGetCollegeCode: function () {
					var e = this.dict_college.indexOf(this.studentInfo.college);
					if (e >= 0) return a.default.completeDate(e);
					a.default.wxErrorToast("doGetCollegeCode", "studentInfo NO college")
				},
				doReplaceByDict: function (e) {
					for (var t = "", n = 0; n < e.length; n++) t += this.codeBook[e[n]];
					return t
				},
				rpxTorpx: function (e) {
					return wx.getSystemInfoSync().windowWidth / 750 * Number(e)
				},
				makeQrcode: function () {
					var e = this.rpxTorpx(400);
					console.log("text length", this.text.length), (0, s.default)({
						width: e,
						height: e,
						canvasId: "myQrcode",
						text: this.text,
						correctLevel: 0
					})
				},
				refreshQrcode: function () {
					this.times > 0 && (this.doGenerateText(), this.makeQrcode(), this.times = this.times - 1)
				},
				onHomeClick: function () {
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
					"nav-bar-code": {
						path: "..\\..\\components\\nav-bar-code"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"34-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.refreshQrcode(e)
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
					"nav-bar-code": {
						path: "..\\..\\components\\nav-bar-code"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"34-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.refreshQrcode(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/returnCode.js");
	__wxRoute = 'pages/returnSchool/returnCodeChange';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/returnCodeChange.js';
	define("pages/returnSchool/returnCodeChange.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function n(n) {
			return n && n.__esModule ? n : {
				default: n
			}
		}

		function t(n, t) {
			var e = Object.keys(n);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(n);
				t && (o = o.filter(function (t) {
					return Object.getOwnPropertyDescriptor(n, t).enumerable
				})), e.push.apply(e, o)
			}
			return e
		}

		function e(n) {
			for (var e = 1; e < arguments.length; e++) {
				var i = null != arguments[e] ? arguments[e] : {};
				e % 2 ? t(Object(i), !0).forEach(function (t) {
					o(n, t, i[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
					Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
				})
			}
			return n
		}

		function o(n, t, e) {
			return t in n ? Object.defineProperty(n, t, {
				value: e,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : n[t] = e, n
		}
		var i = n(require("./../../vendor.js")(0)),
			s = (n(require("./../../common/httpUtils.js")), require("./../../vendor.js")(4)),
			a = n(require("./../../store/index.js")),
			r = n(require("./../../common/utils.js")),
			u = n(require("./../../common/api.js")),
			c = n(require("./../../mixins/returnSchool.js"));
		i.default.page({
			store: a.default,
			mixins: [c.default],
			data: {
				language: "zh",
				studentNo: "",
				password: "",
				msg: "",
				isPhotoNeed: !1,
				dialogShow: !1,
				oneButton: [{
					text: "确定"
				}],
				ReturnPosiArray: [
					[]
				],
				selectReturnPosiIndex: 0,
				returnPosi: "请选择",
				changeReason: "",
				riskList: []
			},
			computed: e({}, (0, s.mapState)({
				userInfo: function (n) {
					return n.user.userInfo
				},
				studentInfo: function (n) {
					return n.student.studentInfo
				},
				riskInfo: function (n) {
					return n.student.riskInfo
				},
				applyInfo: function (n) {
					return n.returnSchool.applyInfo
				}
			})),
			onLoad: function () {
				var n = getApp();
				this.language = n.$wepy.$options.globalData.language, this.doGenerateReasonAndCampusList(), console.log("riskList", this.riskList)
			},
			methods: e({}, (0, s.mapActions)(["setBind", "setStudentInfo", "setApplyInfo"]), {
				doGenerateReasonAndCampusList: function () {
					if (r.default.checkHasKey(this.riskInfo.riskTotal, "riskDescription")) {
						if ("同济迎宾馆" !== this.applyInfo.planJxCampus && this.riskInfo.riskTotal.riskType > 1) {
							this.changeReason = "疫情重点地区变化", this.riskList = this.riskInfo.riskList;
							for (var n = 0; n < this.riskList.length; n++) this.riskList[n].riskDescription = this.dict_riskType[this.riskList[n].riskLevel];
							this.ReturnPosiArray = this.doJxCampusCalculation(this.riskInfo)
						}
					} else "同济迎宾馆" === this.applyInfo.planJxCampus && (this.changeReason = "疫情重点地区变化", this.ReturnPosiArray = this.doJxCampusCalculation(this.riskInfo))
				},
				onReturnPosiChanged: function (n) {
					var t = n.$wx.detail.value[0];
					this.returnPosi = this.ReturnPosiArray[0][t]
				},
				onJxCampusChange: function () {
					var n = this;
					if ("请选择" !== this.returnPosi) {
						var t = {
							jxaId: this.applyInfo.jxaId,
							planJxCampus: this.returnPosi
						};
						console.log(t), u.default.cloudPostApplyChangeSchoolDoor(t, this.language).then(function () {
							r.default.wxModal("变更成功", "Success", n.language, function () {
								wx.reLaunch({
									url: "/pages/account"
								})
							}, function () {
								wx.reLaunch({
									url: "/pages/account"
								})
							})
						})
					} else r.default.wxToast("请选择进校点", "Please choose the campus", this.language)
				},
				onDialogClose: function () {
					this.dialogShow = !1
				},
				onPasswordChanged: function (n) {
					var t = n.$wx.detail;
					this.password = t
				},
				onStudentNoChanged: function (n) {
					console.log(n);
					var t = n.$wx.detail;
					this.studentNo = " ", this.studentNo = t
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
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"35-2": ["close"]
				}
			},
			handlers: {
				"35-0": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onReturnPosiChanged(n)
					}
				},
				"35-1": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onJxCampusChange(n)
					}
				},
				"35-2": {
					close: function () {
						var n = arguments[arguments.length - 1];
						return void this.onDialogClose(n)
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
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"35-2": ["close"]
				}
			},
			handlers: {
				"35-0": {
					change: function () {
						var n = arguments[arguments.length - 1];
						return void this.onReturnPosiChanged(n)
					}
				},
				"35-1": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onJxCampusChange(n)
					}
				},
				"35-2": {
					close: function () {
						var n = arguments[arguments.length - 1];
						return void this.onDialogClose(n)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/returnCodeChange.js");
	__wxRoute = 'pages/returnSchool/appeal';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/appeal.js';
	define("pages/returnSchool/appeal.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var a = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), a.push.apply(a, n)
			}
			return a
		}

		function a(e) {
			for (var a = 1; a < arguments.length; a++) {
				var o = null != arguments[a] ? arguments[a] : {};
				a % 2 ? t(Object(o), !0).forEach(function (t) {
					n(e, t, o[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
				})
			}
			return e
		}

		function n(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var o = e(require("./../../vendor.js")(0)),
			s = (e(require("./../../common/httpUtils.js")), e(require("./../../mixins/exist.js"))),
			i = e(require("./../../mixins/login.js")),
			r = e(require("./../../store/index.js")),
			l = require("./../../vendor.js")(4),
			d = e(require("./../../common/utils.js")),
			c = {
				components: {
					Test: e(require("./../../mixins/test.js")).default
				}
			};
		exports.default = c, o.default.page({
			store: r.default,
			mixins: [s.default, i.default],
			data: {
				language: "zh",
				uploadImg: "../../images/upload.png",
				uploadMedicalTestReportImg: "../../images/upload.png",
				time: "过去30天内的风险",
				riskList: [],
				hasMedicalTestReportArray: ["是", "否"],
				hasMedicalTestReportDateArray: [],
				hasMedicalTestReportResultArray: ["阴性", "阳性"],
				hasMedicalTestReport: "",
				hasMedicalTestReportDate: "",
				hasMedicalTestReportResult: "",
				medicalTestReportInfo: {}
			},
			computed: a({}, (0, l.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				}
			})),
			onLoad: function () {
				this.getDateList()
			},
			onShow: function () {
				console.log("onShow")
			},
			onUnload: function () {},
			methods: a({}, (0, l.mapActions)(["setUploadImg", "setUploadMedicalTestReportImg", "setMedicalTestReportInfo"]), {
				onMedicalTestReportChanged: function (e) {
					console.log(e);
					var t = e.$wx.detail.value;
					this.hasMedicalTestReport = this.hasMedicalTestReportArray[t], "否" === this.hasMedicalTestReport && (r.default.dispatch("setMedicalTestReportInfo", {}), r.default.dispatch("setUploadMedicalTestReportImg", "../../images/upload.png"))
				},
				onMedicalTestReportDateChanged: function (e) {
					var t = e.$wx.detail.value;
					this.hasMedicalTestReportDate = this.hasMedicalTestReportDateArray[t], this.medicalTestReportInfo.stateMedicalTestReportDate = this.hasMedicalTestReportDate + " 00:00:00", r.default.dispatch("setMedicalTestReportInfo", this.medicalTestReportInfo)
				},
				onMedicalTestReportResultChanged: function (e) {
					var t = e.$wx.detail.value;
					this.hasMedicalTestReportResult = this.hasMedicalTestReportResultArray[t], this.medicalTestReportInfo.stateMedicalTestReportResult = this.hasMedicalTestReportResult, r.default.dispatch("setMedicalTestReportInfo", this.medicalTestReportInfo)
				},
				getDateList: function () {
					for (var e = [], t = new Date, a = new Date(t.getTime() - 5184e5); t.getTime() - a.getTime() >= 0;) {
						var n = a.getFullYear().toString(),
							o = 1 === (a.getMonth() + 1).toString().length ? "0" + (a.getMonth() + 1).toString() : a.getMonth() + 1,
							s = 1 === a.getDate().toString().length ? "0" + a.getDate() : a.getDate();
						e.unshift(n + "-" + o + "-" + s), a.setDate(a.getDate() + 1)
					}
					this.hasMedicalTestReportDateArray = e
				},
				showImage: function () {
					var e = [];
					e.push("http://www.chisai.tech/static/txxck.jpg"), wx.previewImage({
						urls: e,
						current: e[0]
					})
				},
				chooseImage: function (e) {
					var t = this;
					wx.chooseImage({
						sizeType: ["original", "compressed"],
						sourceType: ["album"],
						success: function (e) {
							t.uploadImg = e.tempFilePaths[0], t.setUploadImg(t.uploadImg)
						}
					})
				},
				chooseMedicalTestReportImage: function (e) {
					var t = this;
					wx.chooseImage({
						sizeType: ["original", "compressed"],
						sourceType: ["album", "camera"],
						success: function (e) {
							t.uploadMedicalTestReportImg = e.tempFilePaths[0], t.setUploadMedicalTestReportImg(t.uploadMedicalTestReportImg)
						}
					})
				},
				onReasonChanged: function (e) {
					var t = e.$wx.detail;
					this.returnReason = t
				},
				onRiskAppealClick: function () {},
				onReturnPosiChanged: function (e) {
					var t = e.$wx.detail.value[0];
					this.returnPosi = this.ReturnPosiArray[0][t]
				},
				onNextStep: function () {
					var e = this;
					if ("../../images/upload.png" === e.uploadImg) return d.default.wxToast("请选择通信行程卡截图", "请选择通信行程卡截图", e.language), !1;
					if ("是" === e.hasMedicalTestReport) {
						if ("../../images/upload.png" === e.uploadMedicalTestReportImg) return d.default.wxToast("请提交核酸检测报告图片", "请提交核酸检测报告图片", e.language), !1;
						if ("" === e.hasMedicalTestReportDate) return d.default.wxToast("请选择核酸检测报告日期", "请选择核酸检测报告日期", e.language), !1;
						if ("" === e.hasMedicalTestReportResult) return d.default.wxToast("请选择核酸检测报告结果", "请选择核酸检测报告结果", e.language), !1
					}
					e.setUploadImg(e.uploadImg), e.setUploadMedicalTestReportImg(e.uploadMedicalTestReportImg), wx.navigateTo({
						url: "/pages/returnSchool/appealSecStep"
					})
				},
				onSubmit: function () {}
			})
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"36-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.showImage(e)
					}
				},
				"36-1": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.chooseImage(e)
					}
				},
				"36-2": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportChanged(e)
					}
				},
				"36-3": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportDateChanged(e)
					}
				},
				"36-4": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportResultChanged(e)
					}
				},
				"36-5": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.chooseMedicalTestReportImage(e)
					}
				},
				"36-6": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onNextStep(e)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"36-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.showImage(e)
					}
				},
				"36-1": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.chooseImage(e)
					}
				},
				"36-2": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportChanged(e)
					}
				},
				"36-3": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportDateChanged(e)
					}
				},
				"36-4": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportResultChanged(e)
					}
				},
				"36-5": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.chooseMedicalTestReportImage(e)
					}
				},
				"36-6": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onNextStep(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/appeal.js");
	__wxRoute = 'pages/returnSchool/appealSecStep';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/appealSecStep.js';
	define("pages/returnSchool/appealSecStep.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				e && (i = i.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, i)
			}
			return n
		}

		function n(t) {
			for (var n = 1; n < arguments.length; n++) {
				var a = null != arguments[n] ? arguments[n] : {};
				n % 2 ? e(Object(a), !0).forEach(function (e) {
					i(t, e, a[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
				})
			}
			return t
		}

		function i(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var a = t(require("./../../vendor.js")(0)),
			o = (t(require("./../../common/httpUtils.js")), t(require("./../../mixins/exist.js"))),
			s = t(require("./../../mixins/login.js")),
			r = (t(require("./../../common/log.js")), t(require("./../../store/index.js"))),
			l = require("./../../vendor.js")(4),
			u = t(require("./../../common/utils.js")),
			c = t(require("./../../common/api.js")),
			d = t(require("./../../common/area.js")),
			p = t(require("./../../mixins/returnSchool.js"));
		a.default.page({
			store: r.default,
			mixins: [o.default, s.default, p.default],
			data: {
				uploadImg: "../../images/upload.png",
				riskInfo: null,
				language: "zh",
				stateText: "",
				isRequired: [],
				time: "过去30天内的风险",
				riskList: [],
				areaList: null,
				showVantArea: !1,
				nowIndex: null,
				location: [],
				statusFirstApi: {
					status: !1,
					autoid: null
				}
			},
			computed: n({}, (0, l.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				riskInfo: function (t) {
					return t.student.riskInfo
				},
				uploadImg: function (t) {
					return t.returnSchool.uploadImg
				},
				uploadMedicalTestReportImg: function (t) {
					return t.returnSchool.uploadMedicalTestReportImg
				},
				medicalTestReportInfo: function (t) {
					return t.returnSchool.medicalTestReportInfo
				}
			})),
			onLoad: function (t) {
				var e = this,
					n = e.riskInfo.riskList;
				if (0 === n.length) u.default.wxErrorToast("appealSecStep", "bad", "服务器错误");
				else {
					e.riskList = n, console.log(e.riskList);
					for (var i = 0; i < e.riskList.length; i++) e.riskList[i].riskDescription = e.dict_riskType[e.riskList[i].riskLevel], e.riskList[i].location = "", e.riskList[i].nation = void 0, this.riskList[i].province = void 0, this.riskList[i].city = void 0, this.riskList[i].district = void 0
				}
				var a = getApp();
				this.language = a.$wepy.$options.globalData.language, this.areaList = d.default.data.areaList
			},
			onShow: function () {
				console.log("onShow")
			},
			onHide: function () {},
			onUnLoad: function () {},
			methods: n({}, (0, l.mapActions)(["setAppealInfo", "setNextApplyRequestAvailableTime", "setNextAppealRequestAvailableTime", "setUploadImg"]), {
				onConfirm: function (t) {
					this.showVantArea = !1;
					var e = t.$wx.detail.values[0].code,
						n = t.$wx.detail.values[1].code,
						i = t.$wx.detail.values[2].code,
						a = this.areaList.province_list[e],
						o = this.riskList[this.nowIndex];
					"海外" === a ? (o.location = this.areaList.county_list[i], o.nation = this.areaList.county_list[i], o.province = "未知", o.city = "未知", o.district = "未知", this.$set(this.riskList, this.nowIndex, o)) : (o.location = this.areaList.province_list[e] + "-" + this.areaList.city_list[n] + "-" + this.areaList.county_list[i], o.nation = "中国", o.province = this.areaList.province_list[e], o.city = this.areaList.city_list[n], o.district = this.areaList.county_list[i], this.$set(this.riskList, this.nowIndex, o)), console.log(this.riskList[this.nowIndex].location), this.$set(this.location, this.nowIndex, this.riskList[this.nowIndex].location), this.nowIndex = null
				},
				onCancel: function (t) {
					var e = this.riskList[this.nowIndex];
					e.location = "", e.nation = void 0, e.province = void 0, e.city = void 0, e.district = void 0, this.$set(this.riskList, this.nowIndex, e), this.$set(this.location, this.nowIndex, this.riskList[this.nowIndex].location), this.showVantArea = !1, this.nowIndex = null
				},
				onFiledClick: function (t, e) {
					console.log(t), console.log(e), this.nowIndex = e, this.showVantArea = !0
				},
				onFieldChange: function (t, e) {
					this.riskList[e].stateText = t.$wx.detail
				},
				catStateText: function () {
					var t = [];
					console.log("this.riskList", this.riskList);
					for (var e = 0; e < this.riskList.length; e++) {
						var n = {};
						if (n.autoid = this.riskList[e].autoid, n.dateTime = u.default.getFormatDateTime(new Date(this.riskList[e].date)), n.riskLevel = this.riskList[e].riskDescription, n.statement = this.riskList[e].stateText, n.nation = this.riskList[e].nation, n.province = this.riskList[e].province, n.city = this.riskList[e].city, n.district = this.riskList[e].district, n.nation = this.riskList[e].nation, n.province = this.riskList[e].province, n.city = this.riskList[e].city, n.district = this.riskList[e].district, console.log("oneRecord", n), void 0 === n.statement) return !1;
						if (void 0 === n.nation) return !1;
						t.push(n)
					}
					return this.stateText = JSON.stringify(t), !0
				},
				onReasonChanged: function (t) {
					var e = t.$wx.detail;
					this.returnReason = e
				},
				onRiskAppealClick: function () {},
				onReturnPosiChanged: function (t) {
					var e = t.$wx.detail.value[0];
					this.returnPosi = this.ReturnPosiArray[0][e]
				},
				onSubmit: function () {
					var t = this;
					if ("../../images/upload.png" === t.uploadImg) return u.default.wxToast("请选择图片！", "请选择图片！", t.language), !1;
					if (u.default.checkHasKey(t.medicalTestReportInfo, "stateMedicalTestReportDate") && "../../images/upload.png" === t.uploadMedicalTestReportImg) return u.default.wxToast("请提交核酸检测报告图片", "请提交核酸检测报告图片", t.language), !1;
					if (!t.catStateText()) return u.default.wxToast("请完成所有必填项！", "请完成所有必填项！", t.language), !1;
					console.log(t.uploadImg);
					var e = {
						studentPid: t.studentInfo.pid,
						studentName: t.studentInfo.name,
						studentStudentno: t.studentInfo.studentNo,
						studentCollege: t.studentInfo.college,
						studentMajor: t.studentInfo.studentMajorName,
						studentClass: t.studentInfo.studentClassName,
						stateText: t.stateText,
						stateType: 0
					};
					u.default.wxModal("确认提交", "Confirmation", t.language, function () {
						if (u.default.checkHasKey(t.medicalTestReportInfo, "stateMedicalTestReportDate"))
							if (!1 === t.statusFirstApi.status) c.default.cloudUploadAppeal(t.uploadImg, e, t.language).then(function (e) {
								t.statusFirstApi = {
									status: !0,
									autoid: e
								};
								var n = {
									autoid: e,
									stateMedicalTestReportDate: t.medicalTestReportInfo.stateMedicalTestReportDate,
									stateMedicalTestReportResult: t.medicalTestReportInfo.stateMedicalTestReportResult
								};
								c.default.cloudUploadMedicalTestReportAppeal(t.uploadMedicalTestReportImg, n, t.language).then(function () {
									u.default.wxModal("提交成功", "Success", t.language, function () {
										wx.reLaunch({
											url: "/pages/account"
										})
									}, function () {
										wx.reLaunch({
											url: "/pages/account"
										})
									})
								})
							});
							else {
								var n = {
									autoid: t.statusFirstApi.autoid,
									stateMedicalTestReportDate: t.medicalTestReportInfo.stateMedicalTestReportDate,
									stateMedicalTestReportResult: t.medicalTestReportInfo.stateMedicalTestReportResult
								};
								c.default.cloudUploadMedicalTestReportAppeal(t.uploadMedicalTestReportImg, n, t.language).then(function () {
									u.default.wxModal("提交成功", "Success", t.language, function () {
										wx.reLaunch({
											url: "/pages/account"
										})
									}, function () {
										wx.reLaunch({
											url: "/pages/account"
										})
									})
								})
							}
						else c.default.cloudUploadAppeal(t.uploadImg, e, t.language).then(function () {
							u.default.wxModal("提交成功", "Success", t.language, function () {
								wx.reLaunch({
									url: "/pages/account"
								})
							}, function () {
								wx.reLaunch({
									url: "/pages/account"
								})
							})
						})
					}, function () {})
				}
			})
		}, {
			info: {
				components: {
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
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
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"37-0": ["tap"],
					"37-1": ["change"],
					"37-2": ["tap"],
					"37-3": ["change"],
					"37-4": ["tap"],
					"37-5": ["change"],
					"37-6": ["confirm", "cancel"]
				}
			},
			handlers: {
				"37-0": {
					tap: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFiledClick(e, t)
					}
				},
				"37-1": {
					change: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e, t)
					}
				},
				"37-2": {
					tap: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFiledClick(e, t)
					}
				},
				"37-3": {
					change: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e, t)
					}
				},
				"37-4": {
					tap: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFiledClick(e, t)
					}
				},
				"37-5": {
					change: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e, t)
					}
				},
				"37-6": {
					confirm: function () {
						var t = arguments[arguments.length - 1];
						return void this.onConfirm(t)
					},
					cancel: function () {
						var t = arguments[arguments.length - 1];
						return void this.onCancel(t)
					}
				},
				"37-8": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSubmit(t)
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
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-area": {
						path: "..\\..\\components\\vant\\dist\\area\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"37-0": ["tap"],
					"37-1": ["change"],
					"37-2": ["tap"],
					"37-3": ["change"],
					"37-4": ["tap"],
					"37-5": ["change"],
					"37-6": ["confirm", "cancel"]
				}
			},
			handlers: {
				"37-0": {
					tap: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFiledClick(e, t)
					}
				},
				"37-1": {
					change: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e, t)
					}
				},
				"37-2": {
					tap: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFiledClick(e, t)
					}
				},
				"37-3": {
					change: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e, t)
					}
				},
				"37-4": {
					tap: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFiledClick(e, t)
					}
				},
				"37-5": {
					change: function (t) {
						var e = arguments[arguments.length - 1];
						return void this.onFieldChange(e, t)
					}
				},
				"37-6": {
					confirm: function () {
						var t = arguments[arguments.length - 1];
						return void this.onConfirm(t)
					},
					cancel: function () {
						var t = arguments[arguments.length - 1];
						return void this.onCancel(t)
					}
				},
				"37-8": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSubmit(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/appealSecStep.js");
	__wxRoute = 'pages/returnSchool/appealDetail';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/appealDetail.js';
	define("pages/returnSchool/appealDetail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var a = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), a.push.apply(a, n)
			}
			return a
		}

		function a(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		var n = e(require("./../../vendor.js")(0)),
			o = e(require("./../../store/index.js")),
			p = require("./../../vendor.js")(4),
			l = e(require("./../../mixins/returnSchool.js")),
			i = e(require("./../../mixins/exist.js")),
			r = e(require("./../../mixins/login.js")),
			s = e(require("./../../common/utils.js"));
		n.default.page({
			store: o.default,
			mixins: [i.default, r.default, l.default],
			data: {
				language: "zh",
				isShowButton: "display:none",
				appealInfo: {},
				showGoAppealMedicalReport: !1,
				showMedicalReportCell: !1,
				GoAppealMedicalReportButtonText: "",
				stepsEN: [{
					text: "Waiting for counsellor review"
				}, {
					text: "Waiting for school review"
				}, {
					text: "Approved"
				}],
				steps: [{
					text: "待学院审核"
				}, {
					text: "待学校审核"
				}, {
					text: "已审批"
				}]
			},
			onLoad: function (e) {
				var t = getApp();
				if (this.language = t.$wepy.$options.globalData.language, s.default.checkHasKey(e, "isShowNewAppealButton")) {
					console.log("option", e);
					var a = e.isShowNewAppealButton;
					this.isShowButton = a ? "display:block" : "display:none"
				}
				s.default.checkHasKey(this.appealInfoFull, "replyDatetime") && null === this.appealInfoFull.replyDatetime && (this.showGoAppealMedicalReport = !0), s.default.checkHasKey(this.appealInfoFull, "stateMedicalTestReportImgurl") && (null !== this.appealInfoFull.stateMedicalTestReportImgurl ? (this.showMedicalReportCell = !0, "zh" === this.language ? this.GoAppealMedicalReportButtonText = "修改核酸检测报告（非必须）" : this.GoAppealMedicalReportButtonText = "Modification of nucleic acid test report (not required)") : "zh" === this.language ? this.GoAppealMedicalReportButtonText = "提交核酸检测报告（非必须）" : this.GoAppealMedicalReportButtonText = "Submit nucleic acid test report (not required)"), this.doSetAppealShow()
			},
			onShow: function () {},
			computed: function (e) {
				for (var n = 1; n < arguments.length; n++) {
					var o = null != arguments[n] ? arguments[n] : {};
					n % 2 ? t(Object(o), !0).forEach(function (t) {
						a(e, t, o[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
					})
				}
				return e
			}({}, (0, p.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				appealInfoFull: function (e) {
					return e.returnSchool.appealInfo
				}
			})),
			methods: {
				goAppealMedicalReport: function () {
					wx.navigateTo({
						url: "/pages/returnSchool/appealMedicalReport"
					})
				},
				doSetAppealShow: function () {
					this.appealInfo = {
						studentNo: this.appealInfoFull.studentStudentno,
						name: this.appealInfoFull.studentName,
						appealDateTime: this.appealInfoFull.stateDatetime
					}, console.log(this.appealInfoFull), null !== this.appealInfoFull.replyResult ? null !== this.appealInfoFull.furtherreplyResult ? (this.appealInfo.appealStatus = 2, this.appealInfo.appealReply = this.appealInfoFull.furtherreplyText, "1" === this.appealInfoFull.furtherreplyResult ? this.appealInfo.appealResult = "审核通过" : "0" === this.appealInfoFull.furtherreplyResult && (this.appealInfo.appealResult = "审核未通过")) : (this.appealInfo.appealStatus = 1, this.appealInfo.appealReply = this.appealInfoFull.replyText, "0" === this.appealInfoFull.replyResult && (this.appealInfo.appealResult = "审核未通过")) : (this.appealInfo.appealStatus = 0, this.appealInfo.appealReply = "暂无回复"), console.log(this.appealInfo)
				},
				onAppealInfo: function () {},
				onChangeAppeal: function () {},
				goAppealDetailInfo: function () {
					wx.navigateTo({
						url: "/pages/returnSchool/appealDetailInfo"
					})
				},
				goNewAppeal: function () {
					wx.reLaunch({
						url: "/pages/returnSchool/appeal"
					})
				}
			}
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-steps": {
						path: "..\\..\\components\\vant\\dist\\steps\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"38-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goNewAppeal(e)
					}
				},
				"38-1": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealMedicalReport(e)
					}
				},
				"38-2": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealDetailInfo(e)
					}
				},
				"38-3": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goNewAppeal(e)
					}
				},
				"38-4": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealMedicalReport(e)
					}
				},
				"38-5": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealDetailInfo(e)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-steps": {
						path: "..\\..\\components\\vant\\dist\\steps\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"38-0": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goNewAppeal(e)
					}
				},
				"38-1": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealMedicalReport(e)
					}
				},
				"38-2": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealDetailInfo(e)
					}
				},
				"38-3": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goNewAppeal(e)
					}
				},
				"38-4": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealMedicalReport(e)
					}
				},
				"38-5": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.goAppealDetailInfo(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/appealDetail.js");
	__wxRoute = 'pages/returnSchool/appealDetailInfo';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/appealDetailInfo.js';
	define("pages/returnSchool/appealDetailInfo.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				t && (o = o.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, o)
			}
			return n
		}

		function n(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var o = e(require("./../../vendor.js")(0)),
			r = (e(require("./../../common/httpUtils.js")), e(require("./../../mixins/exist.js"))),
			i = e(require("./../../mixins/login.js")),
			a = e(require("./../../store/index.js")),
			s = require("./../../vendor.js")(4),
			l = e(require("./../../common/utils.js")),
			u = e(require("./../../mixins/returnSchool.js"));
		o.default.page({
			store: a.default,
			mixins: [r.default, i.default, u.default],
			data: {
				uploadImg: "../../images/upload.png",
				stateText: "",
				isRequired: [],
				time: "过去30天内的风险",
				riskList: []
			},
			computed: function (e) {
				for (var o = 1; o < arguments.length; o++) {
					var r = null != arguments[o] ? arguments[o] : {};
					o % 2 ? t(Object(r), !0).forEach(function (t) {
						n(e, t, r[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					})
				}
				return e
			}({}, (0, s.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				appealInfoFull: function (e) {
					return e.returnSchool.appealInfo
				}
			})),
			onLoad: function (e) {
				this.unfoldStateText()
			},
			onShow: function () {
				console.log("onShow")
			},
			methods: {
				unfoldStateText: function () {
					console.log(this.appealInfoFull);
					var e = JSON.parse(this.appealInfoFull.stateText);
					console.log(e);
					for (var t = 0; t < e.length; t++) {
						var n = this.dict_riskDescription.indexOf(e[t].riskLevel),
							o = 1,
							r = {
								riskType: o = 5 === n ? 3 : n > 2 && n < 5 ? 2 : 1,
								riskDescription: e[t].riskLevel,
								stateText: void 0 === e[t].statement ? " " : e[t].statement,
								date: l.default.getFormatDate(new Date(l.default.adaptAppleDatetime(e[t].dateTime)))
							};
						console.log(r), this.riskList.push(r)
					}
				},
				onReasonChanged: function (e) {
					var t = e.$wx.detail;
					this.returnReason = t
				},
				onRiskAppealClick: function () {},
				onReturnPosiChanged: function (e) {
					var t = e.$wx.detail.value[0];
					this.returnPosi = this.ReturnPosiArray[0][t]
				},
				onSubmit: function () {}
			}
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/appealDetailInfo.js");
	__wxRoute = 'pages/returnSchool/appealMedicalReport';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/appealMedicalReport.js';
	define("pages/returnSchool/appealMedicalReport.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function t(e, t) {
			var a = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), a.push.apply(a, n)
			}
			return a
		}

		function a(e) {
			for (var a = 1; a < arguments.length; a++) {
				var o = null != arguments[a] ? arguments[a] : {};
				a % 2 ? t(Object(o), !0).forEach(function (t) {
					n(e, t, o[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
				})
			}
			return e
		}

		function n(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		var o = e(require("./../../vendor.js")(0)),
			s = (e(require("./../../common/httpUtils.js")), e(require("./../../mixins/exist.js"))),
			i = e(require("./../../mixins/login.js")),
			r = e(require("./../../store/index.js")),
			l = require("./../../vendor.js")(4),
			c = e(require("./../../common/utils.js")),
			d = e(require("./../../common/api.js"));
		o.default.page({
			store: r.default,
			mixins: [s.default, i.default],
			data: {
				language: "zh",
				uploadImg: "../../images/upload.png",
				uploadMedicalTestReportImg: "../../images/upload.png",
				time: "过去30天内的风险",
				riskList: [],
				hasMedicalTestReportArray: ["是", "否"],
				hasMedicalTestReportDateArray: [],
				hasMedicalTestReportResultArray: ["阴性", "阳性"],
				hasMedicalTestReport: "",
				hasMedicalTestReportDate: "",
				hasMedicalTestReportResult: "",
				medicalTestReportInfo: {}
			},
			computed: a({}, (0, l.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				appealInfoFull: function (e) {
					return e.returnSchool.appealInfo
				}
			})),
			onLoad: function () {
				this.getDateList()
			},
			onShow: function () {
				console.log("onShow")
			},
			onUnload: function () {},
			methods: a({}, (0, l.mapActions)(["setUploadImg", "setUploadMedicalTestReportImg", "setMedicalTestReportInfo"]), {
				onMedicalTestReportChanged: function (e) {
					console.log(e);
					var t = e.$wx.detail.value;
					this.hasMedicalTestReport = this.hasMedicalTestReportArray[t], "否" === this.hasMedicalTestReport && (r.default.dispatch("setMedicalTestReportInfo", {}), r.default.dispatch("setUploadMedicalTestReportImg", "../../images/upload.png"))
				},
				onMedicalTestReportDateChanged: function (e) {
					var t = e.$wx.detail.value;
					this.hasMedicalTestReportDate = this.hasMedicalTestReportDateArray[t], this.medicalTestReportInfo.stateMedicalTestReportDate = this.hasMedicalTestReportDate + " 00:00:00", r.default.dispatch("setMedicalTestReportInfo", this.medicalTestReportInfo)
				},
				onMedicalTestReportResultChanged: function (e) {
					var t = e.$wx.detail.value;
					this.hasMedicalTestReportResult = this.hasMedicalTestReportResultArray[t], this.medicalTestReportInfo.stateMedicalTestReportResult = this.hasMedicalTestReportResult, r.default.dispatch("setMedicalTestReportInfo", this.medicalTestReportInfo)
				},
				getDateList: function () {
					for (var e = [], t = new Date, a = new Date(t.getTime() - 5184e5); t.getTime() - a.getTime() >= 0;) {
						var n = a.getFullYear().toString(),
							o = 1 === (a.getMonth() + 1).toString().length ? "0" + (a.getMonth() + 1).toString() : a.getMonth() + 1,
							s = 1 === a.getDate().toString().length ? "0" + a.getDate() : a.getDate();
						e.unshift(n + "-" + o + "-" + s), a.setDate(a.getDate() + 1)
					}
					this.hasMedicalTestReportDateArray = e
				},
				showImage: function () {
					var e = [];
					e.push("http://www.chisai.tech/static/txxck.jpg"), wx.previewImage({
						urls: e,
						current: e[0]
					})
				},
				chooseImage: function (e) {
					var t = this;
					wx.chooseImage({
						sizeType: ["original", "compressed"],
						sourceType: ["album"],
						success: function (e) {
							t.uploadImg = e.tempFilePaths[0], t.setUploadImg(t.uploadImg)
						}
					})
				},
				chooseMedicalTestReportImage: function (e) {
					var t = this;
					wx.chooseImage({
						sizeType: ["original", "compressed"],
						sourceType: ["album", "camera"],
						success: function (e) {
							t.uploadMedicalTestReportImg = e.tempFilePaths[0], t.setUploadMedicalTestReportImg(t.uploadMedicalTestReportImg)
						}
					})
				},
				onReasonChanged: function (e) {
					var t = e.$wx.detail;
					this.returnReason = t
				},
				onRiskAppealClick: function () {},
				onReturnPosiChanged: function (e) {
					var t = e.$wx.detail.value[0];
					this.returnPosi = this.ReturnPosiArray[0][t]
				},
				onNextStep: function () {},
				onSubmit: function () {
					var e = this;
					if ("../../images/upload.png" === e.uploadMedicalTestReportImg) return c.default.wxToast("请提交核酸检测报告图片", "请提交核酸检测报告图片", e.language), !1;
					if ("" === e.hasMedicalTestReportDate) return c.default.wxToast("请选择核酸检测报告日期", "请选择核酸检测报告日期", e.language), !1;
					if ("" === e.hasMedicalTestReportResult) return c.default.wxToast("请选择核酸检测报告结果", "请选择核酸检测报告结果", e.language), !1;
					var t = {
						autoid: e.appealInfoFull.autoid,
						stateMedicalTestReportDate: e.medicalTestReportInfo.stateMedicalTestReportDate,
						stateMedicalTestReportResult: e.medicalTestReportInfo.stateMedicalTestReportResult
					};
					d.default.cloudUploadMedicalTestReportAppeal(e.uploadMedicalTestReportImg, t, e.language).then(function () {
						c.default.wxModal("提交成功", "Success", e.language, function () {
							wx.reLaunch({
								url: "/pages/account"
							})
						}, function () {
							wx.reLaunch({
								url: "/pages/account"
							})
						})
					})
				}
			})
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"40-0": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportDateChanged(e)
					}
				},
				"40-1": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportResultChanged(e)
					}
				},
				"40-2": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.chooseMedicalTestReportImage(e)
					}
				},
				"40-3": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSubmit(e)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-uploader": {
						path: "..\\..\\components\\vant\\dist\\uploader\\index"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"40-0": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportDateChanged(e)
					}
				},
				"40-1": {
					change: function () {
						var e = arguments[arguments.length - 1];
						return void this.onMedicalTestReportResultChanged(e)
					}
				},
				"40-2": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.chooseMedicalTestReportImage(e)
					}
				},
				"40-3": {
					tap: function () {
						var e = arguments[arguments.length - 1];
						return void this.onSubmit(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/appealMedicalReport.js");
	__wxRoute = 'pages/returnSchool/appealComplete';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/returnSchool/appealComplete.js';
	define("pages/returnSchool/appealComplete.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function n(n) {
			return n && n.__esModule ? n : {
				default: n
			}
		}
		var e = n(require("./../../vendor.js")(0)),
			o = (require("./../../vendor.js")(4), n(require("./../../store/index.js")));
		e.default.page({
			store: o.default,
			data: {
				isSuccess: !0
			},
			methods: {
				onHomeClick: function () {
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
				"41-0": {
					tap: function () {
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
				"41-0": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onHomeClick(n)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/returnSchool/appealComplete.js");
	__wxRoute = 'pages/vaccination/apply';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/vaccination/apply.js';
	define("pages/vaccination/apply.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var a = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t);
				e && (n = n.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), a.push.apply(a, n)
			}
			return a
		}

		function a(t) {
			for (var a = 1; a < arguments.length; a++) {
				var i = null != arguments[a] ? arguments[a] : {};
				a % 2 ? e(Object(i), !0).forEach(function (e) {
					n(t, e, i[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
				})
			}
			return t
		}

		function n(t, e, a) {
			return e in t ? Object.defineProperty(t, e, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = a, t
		}
		var i = t(require("./../../vendor.js")(0)),
			s = t(require("./../../store/index.js")),
			o = require("./../../vendor.js")(4),
			r = t(require("./../../mixins/exist.js")),
			l = t(require("./../../mixins/login.js")),
			u = t(require("./../../common/utils.js")),
			c = t(require("./../../mixins/vaccination.js"));
		t(require("./../../common/api.js"));
		i.default.page({
			store: s.default,
			mixins: [r.default, l.default, c.default],
			data: {
				language: "zh",
				submitDisable: !1,
				uploadImg: "../../images/upload.png",
				preSet: {},
				preSetCN: {
					studentID: "学号",
					studentName: "姓名",
					willingnessLabel: "接种情况",
					willingnessPlaceholder: "请选择是否已接种疫苗",
					willingnessArray: ["我已完成两针接种", "我已完成一针接种（校内）", "我已完成一针接种（校外）", "不适宜接种", "不愿意接种", "计划接种，暂未预约"],
					notSuitableReasonLabel: "不适宜接种原因",
					notSuitableReasonArray: ["对疫苗中任何成分过敏", "既往发生过疫苗接种严重过敏反应\n（如急性过敏反应、血管神经性水肿、呼吸困难）", "患急性疾病", "患严重慢性疾病", "处于慢性疾病的急性发病期", "发热", "妊娠期", "哺乳期", "患未控制的癫痫和其他进行性神经系统疾病", "有格林巴利综合征病史者", "28天内接种过其他疫苗或者注射过免疫球蛋白", "未满十八岁"],
					brandArray: ["中国生物北京生物制品研究所", "北京科兴中维生物技术有限公司", "中国生物武汉生物制品研究所", "其他"],
					vaccinationSiteArray: ["校内接种点", "校外接种点", "第一针校内，第二针校外", "第一针校外，第二针校内"],
					vaccinationSiteLabel: "接种地点",
					vaccinationSitePlaceholder: "请选择接种疫苗的地点",
					brandLabel: "疫苗品牌",
					brandPlaceholder: "请选择已接种疫苗的生产企业",
					brandOtherLabel: "其他品牌",
					brandOtherPlaceholder: "请填写",
					notWillingReasonLabel: "不愿意接种原因",
					notWillingReasonPlaceholder: "请填写不愿意接种原因",
					applyCampusDatetimeLabel: "计划接种校区-日期",
					confirmLabel: "确定",
					cancelLabel: "取消"
				},
				preSetEN: {
					studentID: "",
					studentName: "",
					willingnessLabel: "",
					willingnessArray: [],
					notSuitableReasonArray: []
				},
				url: "http://www.chisai.tech/hcc_20210527175825.jpg",
				willingnessIdx: "",
				willingnessValue: "",
				vaccinationSiteValue: "",
				notSuitableReason: "请选择",
				notWillingReason: "",
				applyCampusDatetime: "请选择",
				applyTime: "请选择",
				areaShow: !1,
				q41Campus: "",
				q42SatationAddress: "",
				q43VaccinationDate: "",
				q45VaccinationTime: "",
				brandValue: "",
				brandOtherField: "",
				multiArray: [
					["四平路校区", "嘉定校区", "校外"]
				],
				satationAddressArray: {
					11e4: "新体育馆一楼",
					12e4: "体育馆一楼"
				},
				areaList: {
					province_list: {
						11e4: "四平路校区",
						12e4: "嘉定校区"
					},
					city_list: {
						110100: "2021-04-03",
						110200: "2021-04-04",
						110300: "2021-04-05",
						120100: "2021-04-09",
						120200: "2021-04-10",
						120300: "2021-04-11"
					}
				}
			},
			onLoad: function () {
				var t = getApp();
				this.language = t.$wepy.$options.globalData.language, this.preSet = JSON.parse(JSON.stringify(this.preSetCN));
				var e = this.doSetDateList();
				this.multiArray.push(e)
			},
			onShow: function () {},
			computed: a({}, (0, o.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				vaccinationInfo: function (t) {
					return t.vaccination.vaccinationInfo
				}
			})),
			methods: a({}, (0, o.mapActions)(["setVaccinationInfo", "setVaccinationRequestAvailableTime"]), {
				doSetDateList: function () {
					for (var t = [], e = new Date, a = new Date("2021/07/20"); a.getTime() - e.getTime() >= 0;) {
						var n = e.getFullYear().toString(),
							i = 1 === (e.getMonth() + 1).toString().length ? "0" + (e.getMonth() + 1).toString() : e.getMonth() + 1,
							s = 1 === e.getDate().toString().length ? "0" + e.getDate() : e.getDate();
						t.push(n + "-" + i + "-" + s), e.setDate(e.getDate() + 1)
					}
					return t
				},
				doCheckSubmitAvailable: function () {
					if ("" === this.willingnessIdx) return u.default.wxToast("请选择接种意愿", "Please choose your willingness to be vaccinated", this.language), !1;
					switch (this.willingnessIdx) {
						case "0":
							if ("" === this.vaccinationSiteValue) return u.default.wxToast("请选择接种地点", "请选择接种地点", this.language), !1;
							if ("../../images/upload.png" === this.uploadImg) return u.default.wxToast("请选择图片", "Please select the image", this.language), !1;
							if ("" === this.brandValue) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							if ("其他" === this.brandValue && "" === this.brandOtherField) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							break;
						case "1":
						case "2":
							if ("../../images/upload.png" === this.uploadImg) return u.default.wxToast("请选择图片", "Please select the image", this.language), !1;
							if ("" === this.brandValue) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							if ("请选择" === this.applyCampusDatetime || "Pls choose" === this.notSuitableReason) return u.default.wxToast("请选择接种时间和校区", "Please select the vaccination time and campus", this.language), !1;
							if ("其他" === this.brandValue && "" === this.brandOtherField) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							break;
						case "3":
							if ("请选择" === this.notSuitableReason || "Pls choose" === this.notSuitableReason) return u.default.wxToast("请选择原因", "Please select the reason", this.language), !1;
							break;
						case "4":
							if ("" === this.notWillingReason) return u.default.wxToast("请填写原因", "Please fill in the reason", this.language), !1
					}
					return !0
				},
				doClean: function (t) {
					switch (t) {
						case "willing":
							this.notSuitableReason = "请选择", this.willingnessValue = "", this.vaccinationSiteValue = "", this.notWillingReason = "", this.brandValue = "", this.q41Campus = "", this.q42SatationAddress = "", this.q43VaccinationDate = "", this.q45VaccinationTime = "", this.applyCampusDatetime = "请选择", this.uploadImg = "../../images/upload.png", this.brandOtherField = ""
					}
				},
				onWillingChanged: function (t) {
					this.doClean("willing");
					var e = t.$wx.detail.value;
					this.willingnessIdx = e, this.willingnessValue = this.preSet.willingnessArray[e]
				},
				onVaccinationSiteChanged: function (t) {
					var e = t.$wx.detail.value;
					this.vaccinationSiteValue = this.preSet.vaccinationSiteArray[e]
				},
				onBrandChanged: function (t) {
					var e = t.$wx.detail.value;
					this.brandValue = this.preSet.brandArray[e]
				},
				onSelected: function (t) {
					var e = t.$wx.detail.value;
					this.q41Campus = this.multiArray[0][e[0]], this.q43VaccinationDate = this.multiArray[1][e[1]], this.applyCampusDatetime = this.q41Campus + "\n" + this.q43VaccinationDate
				},
				onNotSuitableReasonChanged: function (t) {
					var e = t.$wx.detail.value;
					this.notSuitableReason = this.preSet.notSuitableReasonArray[e]
				},
				onNotWillingReasonFieldChange: function (t) {
					this.notWillingReason = t.$wx.detail
				},
				onApplyTimeChanged: function (t) {
					var e = t.$wx.detail.value;
					this.applyTime = this.applyTimeArray[e]
				},
				onShowCampusDate: function () {
					this.areaShow = !0
				},
				onBrandOtherChanged: function (t) {
					this.brandOtherField = t.$wx.detail
				},
				onConfirm: function (t) {
					var e = t.$wx.detail.values[0].code,
						a = t.$wx.detail.values[1].code,
						n = t.$wx.detail.values[2].code;
					this.q41Campus = this.areaList.province_list[e], this.q42SatationAddress = this.satationAddressArray[e], this.q43VaccinationDate = this.areaList.city_list[a], this.q45VaccinationTime = this.areaList.county_list[n], this.applyCampusDatetime = this.q41Campus + "【" + this.q42SatationAddress + "】\n" + this.q43VaccinationDate + "\n" + this.q45VaccinationTime, this.areaShow = !1
				},
				onCancel: function (t) {
					this.areaShow = !1
				},
				onSubmit: function () {
					if (!this.doCheckSubmitAvailable()) return !1;
					this.submitDisable = !0;
					var t = {
						studentPid: this.studentInfo.studentPid,
						studentName: this.studentInfo.studentName,
						studentStudentno: this.studentInfo.studentNo,
						studentCollegeName: this.studentInfo.studentCollegeName,
						studentMajorName: this.studentInfo.studentMajorName,
						studentClassName: this.studentInfo.studentClassName,
						studentInfoNative: this.studentInfo.studentInfoNative,
						studentGender: this.studentInfo.studentGender,
						willDo: 0,
						q1VaccinationWish: this.willingnessValue,
						q2Forbiddenreason: "",
						q3Selfreason: "",
						q41Campus: "",
						q42SatationAddress: "",
						q43VaccinationDate: "",
						q45VaccinationTime: "",
						brand: this.brandValue,
						source: s.default.state.app.version
					};
					switch (this.willingnessIdx) {
						case "0":
							t.q5VaccinatedInSchool = this.vaccinationSiteValue, "其他" === this.brandValue && (t.brand = this.brandOtherField);
							break;
						case "1":
						case "2":
							"其他" === this.brandValue && (t.brand = this.brandOtherField), t.q41Campus = this.q41Campus, t.q42SatationAddress = this.q42SatationAddress, t.q43VaccinationDate = this.q43VaccinationDate, t.q45VaccinationTime = this.q45VaccinationTime;
							break;
						case "3":
							t.q2Forbiddenreason = this.notSuitableReason;
							break;
						case "4":
							t.q3Selfreason = this.notWillingReason;
							break;
						case "5":
							t.q41Campus = this.q41Campus
					}
					var e = this;
					"../../images/upload.png" === this.uploadImg ? this.doSubmitVaccinationInfo(t, this.language).then(function (t) {
						!1 === t ? u.default.wxModal("网络拥堵，请稍后重试", "Network congestion, please try again later", e.language, function () {
							wx.reLaunch({
								url: "pages/index"
							})
						}, function () {
							e.submitDisable = !1
						}) : "Expected error" === t ? e.submitDisable = !1 : (e.vaccinationInfo = t, wx.redirectTo({
							url: "/pages/vaccination/complete"
						}))
					}) : this.doSubmitVaccinationInfo(t, this.language, this.uploadImg).then(function (t) {
						!1 === t ? u.default.wxModal("网络拥堵，请稍后重试", "Network congestion, please try again later", e.language, function () {
							wx.reLaunch({
								url: "pages/index"
							})
						}, function () {
							e.submitDisable = !1
						}) : "Expected error" === t ? e.submitDisable = !1 : (e.vaccinationInfo = t, wx.redirectTo({
							url: "/pages/vaccination/complete"
						}))
					})
				},
				chooseImage: function (t) {
					var e = this;
					wx.chooseImage({
						sizeType: ["original", "compressed"],
						sourceType: ["album"],
						success: function (t) {
							e.uploadImg = t.tempFilePaths[0]
						}
					})
				},
				showImage: function () {
					var t = this.url,
						e = [];
					e.push(t), wx.previewImage({
						urls: e,
						current: e[0]
					})
				}
			})
		}, {
			info: {
				components: {
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
					},
					"van-area": {
						path: "..\\..\\components\\vant\\dist\\area\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"42-31": ["change"],
					"42-35": ["change"],
					"42-40": ["change"]
				}
			},
			handlers: {
				"42-28": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onWillingChanged(t)
					}
				},
				"42-29": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onVaccinationSiteChanged(t)
					}
				},
				"42-30": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandChanged(t)
					}
				},
				"42-31": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandOtherChanged(t)
					}
				},
				"42-32": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.showImage(t)
					}
				},
				"42-33": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.chooseImage(t)
					}
				},
				"42-34": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandChanged(t)
					}
				},
				"42-35": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandOtherChanged(t)
					}
				},
				"42-36": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSelected(t)
					}
				},
				"42-37": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.showImage(t)
					}
				},
				"42-38": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.chooseImage(t)
					}
				},
				"42-39": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onNotSuitableReasonChanged(t)
					}
				},
				"42-40": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onNotWillingReasonFieldChange(t)
					}
				},
				"42-41": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSubmit(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/vaccination/apply.js");
	__wxRoute = 'pages/vaccination/complete';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/vaccination/complete.js';
	define("pages/vaccination/complete.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function n(n) {
			return n && n.__esModule ? n : {
				default: n
			}
		}
		var e = n(require("./../../vendor.js")(0)),
			o = (require("./../../vendor.js")(4), n(require("./../../store/index.js")));
		e.default.page({
			store: o.default,
			data: {
				isSuccess: !0
			},
			methods: {
				onHomeClick: function () {
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
				"43-0": {
					tap: function () {
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
				"43-0": {
					tap: function () {
						var n = arguments[arguments.length - 1];
						return void this.onHomeClick(n)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/vaccination/complete.js");
	__wxRoute = 'pages/vaccination/applyDetail';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/vaccination/applyDetail.js';
	define("pages/vaccination/applyDetail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(t);
				e && (a = a.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, a)
			}
			return n
		}

		function n(t) {
			for (var n = 1; n < arguments.length; n++) {
				var i = null != arguments[n] ? arguments[n] : {};
				n % 2 ? e(Object(i), !0).forEach(function (e) {
					a(t, e, i[e])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
				})
			}
			return t
		}

		function a(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var i = t(require("./../../vendor.js")(0)),
			s = t(require("./../../store/index.js")),
			o = require("./../../vendor.js")(4),
			r = t(require("./../../mixins/exist.js")),
			l = t(require("./../../mixins/login.js")),
			u = t(require("./../../common/utils.js")),
			c = t(require("./../../mixins/vaccination.js"));
		t(require("./../../common/api.js"));
		i.default.page({
			store: s.default,
			mixins: [r.default, l.default, c.default],
			data: {
				language: "zh",
				submitDisable: !1,
				uploadImg: "../../images/upload.png",
				preSet: {},
				preSetCN: {
					studentID: "学号",
					studentName: "姓名",
					willingnessLabel: "接种情况",
					willingnessPlaceholder: "请选择是否已接种疫苗",
					willingnessArray: ["我已完成两针接种", "我已完成一针接种（校内）", "我已完成一针接种（校外）", "不适宜接种", "不愿意接种", "计划接种，暂未预约"],
					notSuitableReasonLabel: "不适宜接种原因",
					notSuitableReasonArray: ["对疫苗中任何成分过敏", "既往发生过疫苗接种严重过敏反应\n（如急性过敏反应、血管神经性水肿、呼吸困难）", "患急性疾病", "患严重慢性疾病", "处于慢性疾病的急性发病期", "发热", "妊娠期", "哺乳期", "患未控制的癫痫和其他进行性神经系统疾病", "有格林巴利综合征病史者", "28天内接种过其他疫苗或者注射过免疫球蛋白", "未满十八岁"],
					brandArray: ["中国生物北京生物制品研究所", "北京科兴中维生物技术有限公司", "中国生物武汉生物制品研究所", "其他"],
					vaccinationSiteArray: ["校内接种点", "校外接种点", "第一针校内，第二针校外", "第一针校外，第二针校内"],
					vaccinationSiteLabel: "接种地点",
					vaccinationSitePlaceholder: "请选择接种疫苗的地点",
					brandLabel: "疫苗品牌",
					brandPlaceholder: "请选择已接种疫苗的生产企业",
					brandOtherLabel: "其他品牌",
					brandOtherPlaceholder: "请填写",
					notWillingReasonLabel: "不愿意接种原因",
					notWillingReasonPlaceholder: "请填写不愿意接种原因",
					applyCampusDatetimeLabel: "计划接种校区-日期",
					confirmLabel: "确定",
					cancelLabel: "取消"
				},
				preSetEN: {
					studentID: "",
					studentName: "",
					willingnessLabel: "",
					willingnessArray: [],
					notSuitableReasonArray: []
				},
				url: "http://www.chisai.tech/hcc_20210527175825.jpg",
				willingnessIdx: "",
				willingnessValue: "",
				vaccinationSiteValue: "",
				notSuitableReason: "请选择",
				notWillingReason: "",
				applyCampusDatetime: "请选择",
				applyTime: "请选择",
				areaShow: !1,
				q41Campus: "",
				q42SatationAddress: "",
				q43VaccinationDate: "",
				q45VaccinationTime: "",
				brandValue: "",
				brandOtherField: "",
				multiArray: [
					["四平路校区", "嘉定校区", "校外"]
				],
				satationAddressArray: {
					11e4: "新体育馆一楼",
					12e4: "体育馆一楼"
				},
				areaList: {
					province_list: {
						11e4: "四平路校区",
						12e4: "嘉定校区"
					},
					city_list: {
						110100: "2021-04-03",
						110200: "2021-04-04",
						110300: "2021-04-05",
						120100: "2021-04-09",
						120200: "2021-04-10",
						120300: "2021-04-11"
					}
				}
			},
			onLoad: function () {
				var t = getApp();
				this.language = t.$wepy.$options.globalData.language, this.preSet = JSON.parse(JSON.stringify(this.preSetCN));
				var e = this.doSetDateList();
				this.multiArray.push(e), this.doInit()
			},
			onShow: function () {},
			computed: n({}, (0, o.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				vaccinationInfo: function (t) {
					return t.vaccination.vaccinationInfo
				}
			})),
			methods: n({}, (0, o.mapActions)(["setVaccinationInfo", "setVaccinationRequestAvailableTime"]), {
				doInit: function () {
					this.willingnessValue = this.vaccinationInfo.q1VaccinationWish, this.willingnessIdx = this.preSetCN.willingnessArray.indexOf(this.willingnessValue).toString(), this.vaccinationSiteValue = this.vaccinationInfo.q5VaccinatedInSchool, -1 === this.preSetCN.brandArray.indexOf(this.vaccinationInfo.brand) ? (this.brandValue = "其他", this.brandOtherField = this.vaccinationInfo.brand) : this.brandValue = this.vaccinationInfo.brand, this.q41Campus = this.vaccinationInfo.q41Campus, this.q43VaccinationDate = this.vaccinationInfo.q43VaccinationDate, this.applyCampusDatetime = this.q41Campus + "\n" + this.q43VaccinationDate, this.notSuitableReason = this.vaccinationInfo.q2Forbiddenreason, this.notWillingReason = this.vaccinationInfo.q3Selfreason
				},
				doSetDateList: function () {
					for (var t = [], e = new Date, n = new Date("2021/09/20"); n.getTime() - e.getTime() >= 0;) {
						var a = e.getFullYear().toString(),
							i = 1 === (e.getMonth() + 1).toString().length ? "0" + (e.getMonth() + 1).toString() : e.getMonth() + 1,
							s = 1 === e.getDate().toString().length ? "0" + e.getDate() : e.getDate();
						t.push(a + "-" + i + "-" + s), e.setDate(e.getDate() + 1)
					}
					return t
				},
				doCheckSubmitAvailable: function () {
					if ("" === this.willingnessIdx) return u.default.wxToast("请选择接种意愿", "Please choose your willingness to be vaccinated", this.language), !1;
					switch (this.willingnessIdx) {
						case "0":
							if ("" === this.vaccinationSiteValue) return u.default.wxToast("请选择接种地点", "请选择接种地点", this.language), !1;
							if ("../../images/upload.png" === this.uploadImg) return u.default.wxToast("请选择图片", "Please select the image", this.language), !1;
							if ("" === this.brandValue) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							if ("其他" === this.brandValue && "" === this.brandOtherField) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							break;
						case "1":
						case "2":
							if ("../../images/upload.png" === this.uploadImg) return u.default.wxToast("请选择图片", "Please select the image", this.language), !1;
							if ("" === this.brandValue) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							if ("请选择" === this.applyCampusDatetime || "Pls choose" === this.notSuitableReason) return u.default.wxToast("请选择接种时间和校区", "Please select the vaccination time and campus", this.language), !1;
							if ("其他" === this.brandValue && "" === this.brandOtherField) return u.default.wxToast("请填写已接种疫苗品牌", "请填写已接种疫苗品牌", this.language), !1;
							break;
						case "3":
							if ("请选择" === this.notSuitableReason || "Pls choose" === this.notSuitableReason) return u.default.wxToast("请选择原因", "Please select the reason", this.language), !1;
							break;
						case "4":
							if ("" === this.notWillingReason) return u.default.wxToast("请填写原因", "Please fill in the reason", this.language), !1
					}
					return !0
				},
				doClean: function (t) {
					switch (t) {
						case "willing":
							this.notSuitableReason = "请选择", this.willingnessValue = "", this.vaccinationSiteValue = "", this.notWillingReason = "", this.brandValue = "", this.q41Campus = "", this.q42SatationAddress = "", this.q43VaccinationDate = "", this.q45VaccinationTime = "", this.applyCampusDatetime = "请选择", this.uploadImg = "../../images/upload.png", this.brandOtherField = ""
					}
				},
				onWillingChanged: function (t) {
					this.doClean("willing");
					var e = t.$wx.detail.value;
					this.willingnessIdx = e, this.willingnessValue = this.preSet.willingnessArray[e]
				},
				onVaccinationSiteChanged: function (t) {
					var e = t.$wx.detail.value;
					this.vaccinationSiteValue = this.preSet.vaccinationSiteArray[e]
				},
				onBrandChanged: function (t) {
					var e = t.$wx.detail.value;
					this.brandValue = this.preSet.brandArray[e]
				},
				onSelected: function (t) {
					var e = t.$wx.detail.value;
					this.q41Campus = this.multiArray[0][e[0]], this.q43VaccinationDate = this.multiArray[1][e[1]], this.applyCampusDatetime = this.q41Campus + "\n" + this.q43VaccinationDate
				},
				onNotSuitableReasonChanged: function (t) {
					var e = t.$wx.detail.value;
					this.notSuitableReason = this.preSet.notSuitableReasonArray[e]
				},
				onNotWillingReasonFieldChange: function (t) {
					this.notWillingReason = t.$wx.detail
				},
				onApplyTimeChanged: function (t) {
					var e = t.$wx.detail.value;
					this.applyTime = this.applyTimeArray[e]
				},
				onShowCampusDate: function () {
					this.areaShow = !0
				},
				onBrandOtherChanged: function (t) {
					this.brandOtherField = t.$wx.detail
				},
				onConfirm: function (t) {
					var e = t.$wx.detail.values[0].code,
						n = t.$wx.detail.values[1].code,
						a = t.$wx.detail.values[2].code;
					this.q41Campus = this.areaList.province_list[e], this.q42SatationAddress = this.satationAddressArray[e], this.q43VaccinationDate = this.areaList.city_list[n], this.q45VaccinationTime = this.areaList.county_list[a], this.applyCampusDatetime = this.q41Campus + "【" + this.q42SatationAddress + "】\n" + this.q43VaccinationDate + "\n" + this.q45VaccinationTime, this.areaShow = !1
				},
				onCancel: function (t) {
					this.areaShow = !1
				},
				onSubmit: function () {
					if (!this.doCheckSubmitAvailable()) return !1;
					this.submitDisable = !0;
					var t = {
						studentPid: this.studentInfo.studentPid,
						studentName: this.studentInfo.studentName,
						studentStudentno: this.studentInfo.studentNo,
						studentCollegeName: this.studentInfo.studentCollegeName,
						studentMajorName: this.studentInfo.studentMajorName,
						studentClassName: this.studentInfo.studentClassName,
						studentInfoNative: this.studentInfo.studentInfoNative,
						studentGender: this.studentInfo.studentGender,
						willDo: 0,
						q1VaccinationWish: this.willingnessValue,
						q2Forbiddenreason: "",
						q3Selfreason: "",
						q41Campus: "",
						q42SatationAddress: "",
						q43VaccinationDate: "",
						q45VaccinationTime: "",
						brand: this.brandValue,
						source: s.default.state.app.version
					};
					switch (this.willingnessIdx) {
						case "0":
							t.q5VaccinatedInSchool = this.vaccinationSiteValue, "其他" === this.brandValue && (t.brand = this.brandOtherField);
							break;
						case "1":
						case "2":
							"其他" === this.brandValue && (t.brand = this.brandOtherField), t.q41Campus = this.q41Campus, t.q42SatationAddress = this.q42SatationAddress, t.q43VaccinationDate = this.q43VaccinationDate, t.q45VaccinationTime = this.q45VaccinationTime;
							break;
						case "3":
							t.q2Forbiddenreason = this.notSuitableReason;
							break;
						case "4":
							t.q3Selfreason = this.notWillingReason;
							break;
						case "5":
							t.q41Campus = this.q41Campus
					}
					var e = this;
					"../../images/upload.png" === this.uploadImg ? this.doSubmitVaccinationInfo(t, this.language).then(function (t) {
						!1 === t ? u.default.wxModal("网络拥堵，请稍后重试", "Network congestion, please try again later", e.language, function () {
							wx.reLaunch({
								url: "pages/index"
							})
						}, function () {
							e.submitDisable = !1
						}) : "Expected error" === t ? e.submitDisable = !1 : (e.setVaccinationInfo(t), wx.redirectTo({
							url: "/pages/vaccination/complete"
						}))
					}) : this.doSubmitVaccinationInfo(t, this.language, this.uploadImg).then(function (t) {
						!1 === t ? u.default.wxModal("网络拥堵，请稍后重试", "Network congestion, please try again later", e.language, function () {
							wx.reLaunch({
								url: "pages/index"
							})
						}, function () {
							e.submitDisable = !1
						}) : "Expected error" === t ? e.submitDisable = !1 : (e.setVaccinationInfo(t), wx.redirectTo({
							url: "/pages/vaccination/complete"
						}))
					})
				},
				chooseImage: function (t) {
					var e = this;
					wx.chooseImage({
						sizeType: ["original", "compressed"],
						sourceType: ["album"],
						success: function (t) {
							e.uploadImg = t.tempFilePaths[0]
						}
					})
				},
				showImage: function () {
					var t = this.url,
						e = [];
					e.push(t), wx.previewImage({
						urls: e,
						current: e[0]
					})
				}
			})
		}, {
			info: {
				components: {
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
					},
					"van-area": {
						path: "..\\..\\components\\vant\\dist\\area\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {
					"44-115": ["change"],
					"44-119": ["change"],
					"44-124": ["change"]
				}
			},
			handlers: {
				"44-112": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onWillingChanged(t)
					}
				},
				"44-113": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onVaccinationSiteChanged(t)
					}
				},
				"44-114": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandChanged(t)
					}
				},
				"44-115": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandOtherChanged(t)
					}
				},
				"44-116": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.showImage(t)
					}
				},
				"44-117": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.chooseImage(t)
					}
				},
				"44-118": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandChanged(t)
					}
				},
				"44-119": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onBrandOtherChanged(t)
					}
				},
				"44-120": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSelected(t)
					}
				},
				"44-121": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.showImage(t)
					}
				},
				"44-122": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.chooseImage(t)
					}
				},
				"44-123": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onNotSuitableReasonChanged(t)
					}
				},
				"44-124": {
					change: function () {
						var t = arguments[arguments.length - 1];
						return void this.onNotWillingReasonFieldChange(t)
					}
				},
				"44-125": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.onSubmit(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/vaccination/applyDetail.js");
	__wxRoute = 'pages/questionnaire/qIndex';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/questionnaire/qIndex.js';
	define("pages/questionnaire/qIndex.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function n(e, n) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				n && (r = r.filter(function (n) {
					return Object.getOwnPropertyDescriptor(e, n).enumerable
				})), t.push.apply(t, r)
			}
			return t
		}

		function t(e, n, t) {
			return n in e ? Object.defineProperty(e, n, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[n] = t, e
		}
		var r = e(require("./../../vendor.js")(0)),
			o = require("./../../vendor.js")(4),
			i = e(require("./../../store/index.js")),
			a = (e(require("./../../common/api.js")), e(require("./../../mixins/questionnaire.js")));
		r.default.page({
			store: i.default,
			mixins: [a.default],
			data: {
				preSet: {},
				preSetCN: {
					studentID: "学号",
					studentName: "姓名",
					confirmLabel: "确定",
					cancelLabel: "取消"
				},
				preSetEN: {},
				tabs: ["待完成", "已完成"]
			},
			onLoad: function () {
				var e = getApp();
				this.language = e.$wepy.$options.globalData.language, this.preSet = JSON.parse(JSON.stringify(this.preSetCN)), console.log(this.qArray), console.log(this.qArrayFinish)
			},
			computed: function (e) {
				for (var r = 1; r < arguments.length; r++) {
					var o = null != arguments[r] ? arguments[r] : {};
					r % 2 ? n(Object(o), !0).forEach(function (n) {
						t(e, n, o[n])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function (n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n))
					})
				}
				return e
			}({}, (0, o.mapState)({
				studentInfo: function (e) {
					return e.student.studentInfo
				},
				qArray: function (e) {
					return e.questionnaire.qArray
				},
				qArrayFinish: function (e) {
					return e.questionnaire.qArrayFinish
				}
			})),
			methods: {
				onHomeClick: function () {
					wx.switchTab({
						url: "/pages/index"
					})
				},
				goQuestionnaire: function (e) {
					wx.redirectTo({
						url: "/pages/questionnaire/qAttachment?qIdx=" + e
					})
				}
			}
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-icon": {
						path: "..\\..\\components\\vant\\dist\\icon\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tab": {
						path: "..\\..\\components\\vant\\dist\\tab\\index"
					},
					"van-tabs": {
						path: "..\\..\\components\\vant\\dist\\tabs\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"45-0": {
					tap: function (e) {
						return void this.goQuestionnaire(e)
					}
				}
			},
			models: {},
			refs: void 0
		}, {
			info: {
				components: {
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-icon": {
						path: "..\\..\\components\\vant\\dist\\icon\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tab": {
						path: "..\\..\\components\\vant\\dist\\tab\\index"
					},
					"van-tabs": {
						path: "..\\..\\components\\vant\\dist\\tabs\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"45-0": {
					tap: function (e) {
						return void this.goQuestionnaire(e)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/questionnaire/qIndex.js");
	__wxRoute = 'pages/questionnaire/qAttachment';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/questionnaire/qAttachment.js';
	define("pages/questionnaire/qAttachment.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function e(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				e && (i = i.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), n.push.apply(n, i)
			}
			return n
		}

		function n(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var i = t(require("./../../vendor.js")(0)),
			a = require("./../../vendor.js")(4),
			s = t(require("./../../store/index.js")),
			r = t(require("./../../common/api.js")),
			o = t(require("./../../common/utils.js"));
		i.default.page({
			store: s.default,
			data: {
				canvasName: "handWriting",
				ctx: "",
				canvasWidth: 0,
				canvasHeight: 0,
				transparent: 1,
				selectColor: "black",
				lineColor: "#1A1A1A",
				lineSize: 1.5,
				lineMin: .5,
				lineMax: 4,
				pressure: 1,
				smoothness: 60,
				currentPoint: {},
				currentLine: [],
				firstTouch: !0,
				radius: 1,
				cutArea: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				},
				bethelPoint: [],
				lastPoint: 0,
				chirography: [],
				currentChirography: {},
				linePrack: [],
				preSet: {},
				preSetCN: {
					studentID: "学号",
					studentName: "姓名",
					confirmLabel: "确定",
					cancelLabel: "取消"
				},
				preSetEN: {},
				qIdx: 0,
				content: "",
				tempFilePath: ""
			},
			onLoad: function (t) {
				var e = getApp();
				this.language = e.$wepy.$options.globalData.language, this.preSet = JSON.parse(JSON.stringify(this.preSetCN)), this.setContext();
				var n = this;
				this.setImage().then(function () {
					n.setBackground()
				}), this.qIdx = t.qIdx, this.content = this.qArray[this.qIdx].content.replace("新生院**学堂", this.studentInfo.college), this.content = this.content.replace("承诺人：XXX", "承诺人：" + this.studentInfo.studentName), this.content = this.content.replace("学号：XXXXXXX", "学号：" + this.studentInfo.studentNo), this.content = this.content.replace("年", (new Date).getFullYear().toString() + "年"), this.content = this.content.replace("月", ((new Date).getMonth() + 1).toString() + "月"), this.content = this.content.replace("日", (new Date).getDate().toString() + "日")
			},
			computed: function (t) {
				for (var i = 1; i < arguments.length; i++) {
					var a = null != arguments[i] ? arguments[i] : {};
					i % 2 ? e(Object(a), !0).forEach(function (e) {
						n(t, e, a[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
					})
				}
				return t
			}({}, (0, a.mapState)({
				studentInfo: function (t) {
					return t.student.studentInfo
				},
				qArray: function (t) {
					return t.questionnaire.qArray
				},
				qArrayFinish: function (t) {
					return t.questionnaire.qArrayFinish
				}
			})),
			methods: {
				setContext: function () {
					var t = this,
						e = this.canvasName,
						n = wx.createCanvasContext(e);
					this.ctx = n, wx.createSelectorQuery().select(".handCenter").boundingClientRect(function (e) {
						t.canvasWidth = e.width, t.canvasHeight = e.height
					}).exec()
				},
				setImage: function () {
					var t = this;
					return new Promise(function (e) {
						wx.downloadFile({
							url: "https://tjxsfw.chisai.tech/letter_20210412180503.png",
							success: function (n) {
								200 === n.statusCode && (t.tempFilePath = n.tempFilePath, e())
							}
						})
					})
				},
				setBackground: function () {
					this.ctx.drawImage(this.tempFilePath, 0, 0, this.canvasWidth, this.canvasHeight), this.ctx.draw()
				},
				uploadScaleStart: function (t) {
					if ("touchstart" != t.type) return !1;
					var e = this.ctx;
					e.setFillStyle(this.lineColor), e.setGlobalAlpha(this.transparent);
					var n = {
							x: t.touches[0].x,
							y: t.touches[0].y
						},
						i = this.currentLine;
					i.unshift({
						time: (new Date).getTime(),
						dis: 0,
						x: n.x,
						y: n.y
					}), this.currentPoint = n, this.firstTouch && (this.cutArea = {
						top: n.y,
						right: n.x,
						bottom: n.y,
						left: n.x
					}, this.firstTouch = !1), this.pointToLine(i)
				},
				uploadScaleMove: function (t) {
					if ("touchmove" != t.type) return !1;
					t.cancelable && (t.defaultPrevented || t.preventDefault());
					var e = {
						x: t.touches[0].x,
						y: t.touches[0].y
					};
					e.y < this.cutArea.top && (this.cutArea.top = e.y), e.y < 0 && (this.cutArea.top = 0), e.x > this.cutArea.right && (this.cutArea.right = e.x), this.canvasWidth - e.x <= 0 && (this.cutArea.right = this.canvasWidth), e.y > this.cutArea.bottom && (this.cutArea.bottom = e.y), this.canvasHeight - e.y <= 0 && (this.cutArea.bottom = this.canvasHeight), e.x < this.cutArea.left && (this.cutArea.left = e.x), e.x < 0 && (this.cutArea.left = 0), this.lastPoint = this.currentPoint, this.currentPoint = e;
					var n = this.currentLine;
					n.unshift({
						time: (new Date).getTime(),
						dis: this.distance(this.currentPoint, this.lastPoint),
						x: e.x,
						y: e.y
					}), this.pointToLine(n)
				},
				uploadScaleEnd: function (t) {
					if ("touchend" != t.type) return 0;
					var e = {
						x: t.changedTouches[0].x,
						y: t.changedTouches[0].y
					};
					this.lastPoint = this.currentPoint, this.currentPoint = e;
					var n = this.currentLine;
					if (n.unshift({
							time: (new Date).getTime(),
							dis: this.distance(this.currentPoint, this.lastPoint),
							x: e.x,
							y: e.y
						}), n.length > 2) n[0].time, n[n.length - 1].time, n.length;
					this.pointToLine(n);
					var i = {
							lineSize: this.lineSize,
							lineColor: this.lineColor
						},
						a = this.chirography;
					a.unshift(i), this.chirography = a;
					var s = this.linePrack;
					s.unshift(this.currentLine), this.linePrack = s, this.currentLine = []
				},
				retDraw: function () {
					this.ctx.clearRect(0, 0, 700, 730), this.ctx.draw();
					var t = this;
					this.setImage().then(function () {
						t.setBackground()
					}), t.chirography = [], t.linePrack = []
				},
				pointToLine: function (t) {
					this.calcBethelLine(t)
				},
				calcBethelLine: function (t) {
					if (t.length <= 1) t[0].r = this.radius;
					else {
						var e, n, i, a, s, r, o, c, h = 0,
							u = 0;
						t.length <= 2 ? (e = t[1].x, a = t[1].y, n = e + .5 * ((i = t[1].x + .5 * (t[0].x - t[1].x)) - e), s = a + .5 * ((r = t[1].y + .5 * (t[0].y - t[1].y)) - a)) : (e = t[2].x + .5 * (t[1].x - t[2].x), a = t[2].y + .5 * (t[1].y - t[2].y), n = t[1].x, s = t[1].y, i = n + .5 * (t[0].x - n), r = s + .5 * (t[0].y - s)), o = this.distance({
							x: i,
							y: r
						}, {
							x: e,
							y: a
						}), c = this.radius;
						for (var l = 0; l < t.length - 1 && (h += t[l].dis, u += t[l].time - t[l + 1].time, !(h > this.smoothness)); l++);
						this.radius = Math.min(u / o * this.pressure + this.lineMin, this.lineMax) * this.lineSize, t[0].r = this.radius, t.length <= 2 ? (c + this.radius) / 2 : ((t[2].r + t[1].r) / 2, t[1].r, (t[1].r + t[0].r) / 2);
						for (var d = [], p = 0; p < 5; p++) {
							var v = p / 4,
								x = (1 - v) * (1 - v) * e + 2 * v * (1 - v) * n + v * v * i,
								f = (1 - v) * (1 - v) * a + 2 * v * (1 - v) * s + v * v * r,
								m = c + (this.radius - c) / 5 * p;
							if (d.push({
									x: x,
									y: f,
									r: m
								}), 3 == d.length) {
								var y = this.ctaCalc(d[0].x, d[0].y, d[0].r, d[1].x, d[1].y, d[1].r, d[2].x, d[2].y, d[2].r);
								y[0].color = this.lineColor, this.bethelDraw(y, 1), d = [{
									x: x,
									y: f,
									r: m
								}]
							}
						}
						this.currentLine = t
					}
				},
				distance: function (t, e) {
					var n = e.x - t.x,
						i = e.y - t.y;
					return Math.sqrt(n * n + i * i)
				},
				ctaCalc: function (t, e, n, i, a, s, r, o, c) {
					var h, u, l, d, p, v, x, f, m, y = [];
					h = i - t, d = u = (u = a - e) / (l = 2 * Math.sqrt(h * h + u * u + 1e-4)) * n, p = -(h = h / l * n), v = i - r, f = -(x = (x = a - o) / (l = 2 * Math.sqrt(v * v + x * x + 1e-4)) * c), m = v = v / l * c, y.push({
						mx: t + d,
						my: e + p,
						color: "#1A1A1A"
					}), y.push({
						c1x: i + d,
						c1y: a + p,
						c2x: i + f,
						c2y: a + m,
						ex: r + f,
						ey: o + m
					}), y.push({
						c1x: r + f - v,
						c1y: o + m - x,
						c2x: r - f - v,
						c2y: o - m - x,
						ex: r - f,
						ey: o - m
					}), y.push({
						c1x: i - f,
						c1y: a - m,
						c2x: i - d,
						c2y: a - p,
						ex: t - d,
						ey: e - p
					}), y.push({
						c1x: t - d - h,
						c1y: e - p - u,
						c2x: t + d - h,
						c2y: e + p - u,
						ex: t + d,
						ey: e + p
					}), y[0].mx = y[0].mx.toFixed(1), y[0].mx = parseFloat(y[0].mx), y[0].my = y[0].my.toFixed(1), y[0].my = parseFloat(y[0].my);
					for (var g = 1; g < y.length; g++) y[g].c1x = y[g].c1x.toFixed(1), y[g].c1x = parseFloat(y[g].c1x), y[g].c1y = y[g].c1y.toFixed(1), y[g].c1y = parseFloat(y[g].c1y), y[g].c2x = y[g].c2x.toFixed(1), y[g].c2x = parseFloat(y[g].c2x), y[g].c2y = y[g].c2y.toFixed(1), y[g].c2y = parseFloat(y[g].c2y), y[g].ex = y[g].ex.toFixed(1), y[g].ex = parseFloat(y[g].ex), y[g].ey = y[g].ey.toFixed(1), y[g].ey = parseFloat(y[g].ey);
					return y
				},
				bethelDraw: function (t, e, n) {
					var i = this.ctx;
					i.beginPath(), i.moveTo(t[0].mx, t[0].my), void 0 != n ? (i.setFillStyle(n), i.setStrokeStyle(n)) : (i.setFillStyle(t[0].color), i.setStrokeStyle(t[0].color));
					for (var a = 1; a < t.length; a++) i.bezierCurveTo(t[a].c1x, t[a].c1y, t[a].c2x, t[a].c2y, t[a].ex, t[a].ey);
					i.stroke(), void 0 != e && i.fill(), i.draw(!0)
				},
				selectColorEvent: function (t, e) {
					this.selectColor = t, this.lineColor = e
				},
				subCanvas: function () {
					this.ctx.draw(!0, function () {
						wx.canvasToTempFilePath({
							canvasId: "handWriting",
							fileType: "png",
							quality: 1,
							success: function (t) {
								wx.showToast({
									title: "已保存"
								}), wx.saveImageToPhotosAlbum({
									filePath: t.tempFilePath,
									success: function (t) {
										wx.showToast({
											title: "已成功保存到相册",
											duration: 2e3
										})
									}
								})
							}
						})
					})
				},
				saveCanvasAsImg: function () {
					wx.canvasToTempFilePath({
						canvasId: "handWriting",
						fileType: "png",
						quality: 1,
						success: function (t) {
							wx.saveImageToPhotosAlbum({
								filePath: t.tempFilePath,
								success: function (t) {
									wx.showToast({
										title: "已保存到相册",
										duration: 2e3
									})
								}
							})
						}
					})
				},
				previewCanvasImg: function () {
					wx.canvasToTempFilePath({
						canvasId: "handWriting",
						fileType: "jpg",
						quality: 1,
						success: function (t) {
							wx.previewImage({
								urls: [t.tempFilePath]
							})
						}
					})
				},
				uploadCanvasImg: function () {
					var t = this;
					t.chirography.length, wx.canvasToTempFilePath({
						canvasId: "handWriting",
						fileType: "png",
						quality: 1,
						success: function (e) {
							var n = {
								studentName: t.studentInfo.studentName,
								studentStudentno: t.studentInfo.studentStudentno,
								studentCollegeName: t.studentInfo.studentCollegeName,
								studentMajorName: t.studentInfo.studentMajorName,
								studentClassName: t.studentInfo.studentClassName,
								fileUsage: "新生院承诺书",
								studentPid: t.studentInfo.studentPid
							};
							r.default.cloudUploadQuestionnaireAnswer(e.tempFilePath, n, t.language).then(function () {
								o.default.wxModal("提交成功！", "提交成功！", t.language, function () {
									wx.reLaunch({
										url: "/pages/index"
									})
								}, function () {
									wx.reLaunch({
										url: "/pages/index"
									})
								})
							})
						}
					})
				},
				setCanvasBg: function (t) {
					this.ctx.rect(0, 0, this.canvasWidth, this.canvasHeight - 4), this.ctx.setFillStyle(t), this.ctx.fill(), this.ctx.draw()
				}
			}
		}, {
			info: {
				components: {
					"van-popup": {
						path: "..\\..\\components\\vant\\dist\\popup\\index"
					},
					"mp-html": {
						path: "..\\..\\components\\vant\\mp-html\\index"
					},
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-tab": {
						path: "..\\..\\components\\vant\\dist\\tab\\index"
					},
					"van-tabs": {
						path: "..\\..\\components\\vant\\dist\\tabs\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"46-0": {
					touchstart: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleStart(t)
					},
					touchmove: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleMove(t)
					},
					touchend: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleEnd(t)
					}
				},
				"46-3": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.retDraw(t)
					}
				},
				"46-4": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.saveCanvasAsImg(t)
					}
				},
				"46-5": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadCanvasImg(t)
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
					"mp-html": {
						path: "..\\..\\components\\vant\\mp-html\\index"
					},
					"van-cell": {
						path: "..\\..\\components\\vant\\dist\\cell\\index"
					},
					"van-field": {
						path: "..\\..\\components\\vant\\dist\\field\\index"
					},
					"van-tag": {
						path: "..\\..\\components\\vant\\dist\\tag\\index"
					},
					"van-tab": {
						path: "..\\..\\components\\vant\\dist\\tab\\index"
					},
					"van-tabs": {
						path: "..\\..\\components\\vant\\dist\\tabs\\index"
					},
					"error-hint": {
						path: "..\\..\\components\\error-hint"
					},
					"nav-bar": {
						path: "..\\..\\components\\nav-bar"
					}
				},
				on: {}
			},
			handlers: {
				"46-0": {
					touchstart: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleStart(t)
					},
					touchmove: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleMove(t)
					},
					touchend: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadScaleEnd(t)
					}
				},
				"46-3": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.retDraw(t)
					}
				},
				"46-4": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.saveCanvasAsImg(t)
					}
				},
				"46-5": {
					tap: function () {
						var t = arguments[arguments.length - 1];
						return void this.uploadCanvasImg(t)
					}
				}
			},
			models: {},
			refs: void 0
		});
	});
	require("pages/questionnaire/qAttachment.js");