var atomicassets;
(() => {
    var t = {
            751: function (t) {
                "use strict";
                var e, r, i, n, a, o, s, u, c, l, h, p, f = !1;

                function d(t, e, r) {
                    var i = t[e++],
                        n = t[e++],
                        a = t[e++],
                        o = t[e];
                    return "bige" === r ? 256 * (256 * (256 * i + n) + a) + o : 256 * (256 * (256 * o + a) + n) + i
                }

                function y(t, e, r, i) {
                    var n = e >>> 24 & 255,
                        a = e >> 16 & 255,
                        o = e >> 8 & 255,
                        s = 255 & e;
                    "bige" === i ? (t[r++] = n, t[r++] = a, t[r++] = o, t[r] = s) : (t[r++] = s, t[r++] = o, t[r++] = a, t[r] = n)
                }

                function m(t, e, r, i, n) {
                    "bige" === n ? (y(t, e, i, n), y(t, r, i + 4, n)) : (y(t, r, i, n), y(t, e, i + 4, n))
                }
                "function" == typeof Float32Array && (c = new Float32Array(1), l = new Uint8Array(c.buffer), c[0] = -1, f = 0 === l[3], e = function (t, e) {
                    return (e = e || 0) < 0 || e + 4 > t.length ? 0 : (l[0] = t[e++], l[1] = t[e++], l[2] = t[e++], l[3] = t[e], c[0])
                }, i = function (t, e) {
                    return (e = e || 0) < 0 || e + 4 > t.length ? 0 : (l[3] = t[e++], l[2] = t[e++], l[1] = t[e++], l[0] = t[e], c[0])
                }, r = function (t, e, r) {
                    r = r || 0, c[0] = e, t[r++] = l[0], t[r++] = l[1], t[r++] = l[2], t[r] = l[3]
                }, n = function (t, e, r) {
                    r = r || 0, c[0] = e, t[r++] = l[3], t[r++] = l[2], t[r++] = l[1], t[r] = l[0]
                }), "function" == typeof Float64Array && (h = new Float64Array(1), p = new Uint8Array(h.buffer), a = function (t, e) {
                    return (e = e || 0) < 0 || e + 8 > t.length ? 0 : (p[0] = t[e + 0], p[1] = t[e + 1], p[2] = t[e + 2], p[3] = t[e + 3], p[4] = t[e + 4], p[5] = t[e + 5], p[6] = t[e + 6], p[7] = t[e + 7], h[0])
                }, s = function (t, e) {
                    return (e = e || 0) < 0 || e + 8 > t.length ? 0 : (p[7] = t[e + 0], p[6] = t[e + 1], p[5] = t[e + 2], p[4] = t[e + 3], p[3] = t[e + 4], p[2] = t[e + 5], p[1] = t[e + 6], p[0] = t[e + 7], h[0])
                }, o = function (t, e, r) {
                    r = r || 0, h[0] = e, t[r + 0] = p[0], t[r + 1] = p[1], t[r + 2] = p[2], t[r + 3] = p[3], t[r + 4] = p[4], t[r + 5] = p[5], t[r + 6] = p[6], t[r + 7] = p[7]
                }, u = function (t, e, r) {
                    r = r || 0, h[0] = e, t[r + 0] = p[7], t[r + 1] = p[6], t[r + 2] = p[5], t[r + 3] = p[4], t[r + 4] = p[3], t[r + 5] = p[2], t[r + 6] = p[1], t[r + 7] = p[0]
                });
                for (var v = new Array, w = 0; w < 1200; w++) v[w] = Math.pow(2, w);
                var _ = new Array;
                for (w = 0; w < 1200; w++) _[w] = Math.pow(2, -w);

                function g(t) {
                    return t >= 0 ? v[t] : _[-t]
                }

                function b(t, e, r) {
                    var i, n, a = d(t, e, r),
                        o = d(t, e + 4, r);
                    "bige" === r ? (i = a, n = o) : (i = o, n = a);
                    var s = 4294967296 * (1048575 & i) + n,
                        u = (2146435072 & i) >>> 20;
                    return (i >> 31 || 1) * (0 === u ? s ? s * g(-1074) : 0 : u < 2047 ? s >= 0 ? (1 + 2220446049250313e-31 * s) * g(u - 1023) : 0 : s ? NaN : 1 / 0)
                }
                g(-1023);
                var A = Math.pow(2, -23),
                    E = Math.pow(2, -127);

                function M(t, e, r) {
                    var i = d(t, e, r),
                        n = 8388607 & i,
                        a = (2139095040 & i) >>> 23;
                    return (i >> 31 || 1) * (0 === a ? n ? n * A * 2 * E : 0 : a < 255 ? (1 + n * A) * g(a - 127) : n ? NaN : 1 / 0)
                }
                var O = {
                    exp: 0,
                    mant: 0
                };

                function S(t) {
                    var e = 0;
                    return t >= 2 ? (t *= g(-(e = z(1, t)))) >= 2 && (t /= 2, e += 1) : t < 1 && ((e = z(t, 2)) <= 1023 ? t *= g(e) : (t *= g(e - 100), t *= g(100)), e = -e), O.exp = e, O.mant = t, O
                }
                var x = Math.pow(2, 192);

                function z(t, e) {
                    for (var r = 0; t * x < e;) t *= x, r += 192;
                    for (; 0x10000000000000000 * t < e;) t *= 0x10000000000000000, r += 64;
                    for (; 65536 * t < e;) t *= 65536, r += 16;
                    for (; 64 * t < e;) t *= 64, r += 6;
                    for (; 2 * t < e;) t *= 2, r += 1;
                    return r
                }

                function P(t, e) {
                    return (t *= e) - Math.floor(t) != .5 || 1 & t ? t + .5 : t
                }

                function k(t, e, r, i) {
                    var n, a = 0;
                    e < 0 && (a = 2147483648, e = -e), e && e < 1 / 0 ? ((n = S(e)).exp += 127, n.exp <= 0 ? n.exp <= -25 ? (n.mant = 0, n.exp = 0) : (n.mant = P(n.mant, g(22 + n.exp)), n.exp = 0, n.mant >= 8388608 && (n.mant -= 8388608, n.exp += 1)) : (n.mant = P(n.mant - 1, 8388608), n.mant >= 8388608 && (n.mant -= 8388608, n.exp += 1), n.exp > 254 && (n.mant = 0, n.exp = 255)), y(t, a | n.exp << 23 | n.mant, r, i)) : y(t, 0 === e ? 1 / e < 0 ? 2147483648 : 0 : e === 1 / 0 ? 2139095040 | a : 2143289344, r, i)
                }
                new Uint8Array(8);
                var j = Math.pow(2, 52);

                function q(t, e, r, i) {
                    var n, a, o, s = 0;
                    e < 0 && (s = 2147483648, e = -e), e && e < 1 / 0 ? ((n = S(e)).exp += 1023, n.exp <= 0 ? (n.mant *= g(51 + n.exp), n.exp = 0) : n.mant = (n.mant - 1) * j, m(t, a = s | n.exp << 20 | n.mant / 4294967296, o = n.mant >>> 0, r, i)) : (0 === e ? (a = 1 / e < 0 ? 2147483648 : 0, o = 0) : e === 1 / 0 ? (a = s + 2146435072, o = 0) : (a = 2146959360, o = 0), m(t, a, o, r, i))
                }(function c() {
                    var l = t.exports || this;
                    l.readWord = d, l.writeWord = y, l.writeDoubleWord = m, l.readFloat = M, l.writeFloat = k, l.readDouble = b, l.writeDouble = q, l._useFloatArray = function (t) {
                        l._usingFloatArray = t, t ? ("full" == t && (l.readFloatLE = f ? i : e), l.writeFloatLE = f ? n : r, "full" == t && (l.readFloatBE = f ? e : i), l.writeFloatBE = f ? r : n, l.readDoubleLE = f ? s : a, l.writeDoubleLE = f ? u : o, l.readDoubleBE = f ? a : s, l.writeDoubleBE = f ? o : u) : (l._usingFloatArray = "", l.readFloatLE = function (t, e) {
                            return l.readFloat(t, e || 0, "le")
                        }, l.writeFloatLE = function (t, e, r) {
                            l.writeFloat(t, e, r || 0, "le")
                        }, l.readFloatBE = function (t, e) {
                            return l.readFloat(t, e || 0, "bige")
                        }, l.writeFloatBE = function (t, e, r) {
                            l.writeFloat(t, e, r || 0, "bige")
                        }, l.readDoubleLE = function (t, e) {
                            return l.readDouble(t, e || 0, "le")
                        }, l.writeDoubleLE = function (t, e, r) {
                            l.writeDouble(t, e, r || 0, "le")
                        }, l.readDoubleBE = function (t, e) {
                            return l.readDouble(t, e || 0, "bige")
                        }, l.writeDoubleBE = function (t, e, r) {
                            l.writeDouble(t, e, r || 0, "bige")
                        })
                    }, l._getBigeCpu = function () {
                        return f
                    }, l._setBigeCpu = function (t) {
                        f = t
                    }, l._useFloatArray(!1), l._useFloatArray(e && a && "fastest"), c.prototype = l
                }).call(this)
            },
            736: (t, e, r) => {
                var i;
                t = r.nmd(t);
                var n = function (t) {
                    "use strict";
                    var e = 1e7,
                        r = 9007199254740992,
                        i = p(r),
                        a = "0123456789abcdefghijklmnopqrstuvwxyz",
                        o = "function" == typeof BigInt;

                    function s(t, e, r, i) {
                        return void 0 === t ? s[0] : void 0 === e || 10 == +e && !r ? V(t) : Z(t, e, r, i)
                    }

                    function u(t, e) {
                        this.value = t, this.sign = e, this.isSmall = !1
                    }

                    function c(t) {
                        this.value = t, this.sign = t < 0, this.isSmall = !0
                    }

                    function l(t) {
                        this.value = t
                    }

                    function h(t) {
                        return -r < t && t < r
                    }

                    function p(t) {
                        return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
                    }

                    function f(t) {
                        d(t);
                        var r = t.length;
                        if (r < 4 && k(t, i) < 0) switch (r) {
                            case 0:
                                return 0;
                            case 1:
                                return t[0];
                            case 2:
                                return t[0] + t[1] * e;
                            default:
                                return t[0] + (t[1] + t[2] * e) * e
                        }
                        return t
                    }

                    function d(t) {
                        for (var e = t.length; 0 === t[--e];);
                        t.length = e + 1
                    }

                    function y(t) {
                        for (var e = new Array(t), r = -1; ++r < t;) e[r] = 0;
                        return e
                    }

                    function m(t) {
                        return t > 0 ? Math.floor(t) : Math.ceil(t)
                    }

                    function v(t, r) {
                        var i, n, a = t.length,
                            o = r.length,
                            s = new Array(a),
                            u = 0,
                            c = e;
                        for (n = 0; n < o; n++) u = (i = t[n] + r[n] + u) >= c ? 1 : 0, s[n] = i - u * c;
                        for (; n < a;) u = (i = t[n] + u) === c ? 1 : 0, s[n++] = i - u * c;
                        return u > 0 && s.push(u), s
                    }

                    function w(t, e) {
                        return t.length >= e.length ? v(t, e) : v(e, t)
                    }

                    function _(t, r) {
                        var i, n, a = t.length,
                            o = new Array(a),
                            s = e;
                        for (n = 0; n < a; n++) i = t[n] - s + r, r = Math.floor(i / s), o[n] = i - r * s, r += 1;
                        for (; r > 0;) o[n++] = r % s, r = Math.floor(r / s);
                        return o
                    }

                    function g(t, r) {
                        var i, n, a = t.length,
                            o = r.length,
                            s = new Array(a),
                            u = 0,
                            c = e;
                        for (i = 0; i < o; i++)(n = t[i] - u - r[i]) < 0 ? (n += c, u = 1) : u = 0, s[i] = n;
                        for (i = o; i < a; i++) {
                            if (!((n = t[i] - u) < 0)) {
                                s[i++] = n;
                                break
                            }
                            n += c, s[i] = n
                        }
                        for (; i < a; i++) s[i] = t[i];
                        return d(s), s
                    }

                    function b(t, r, i) {
                        var n, a, o = t.length,
                            s = new Array(o),
                            l = -r,
                            h = e;
                        for (n = 0; n < o; n++) a = t[n] + l, l = Math.floor(a / h), a %= h, s[n] = a < 0 ? a + h : a;
                        return "number" == typeof (s = f(s)) ? (i && (s = -s), new c(s)) : new u(s, i)
                    }

                    function A(t, r) {
                        var i, n, a, o, s = t.length,
                            u = r.length,
                            c = y(s + u),
                            l = e;
                        for (a = 0; a < s; ++a) {
                            o = t[a];
                            for (var h = 0; h < u; ++h) i = o * r[h] + c[a + h], n = Math.floor(i / l), c[a + h] = i - n * l, c[a + h + 1] += n
                        }
                        return d(c), c
                    }

                    function E(t, r) {
                        var i, n, a = t.length,
                            o = new Array(a),
                            s = e,
                            u = 0;
                        for (n = 0; n < a; n++) i = t[n] * r + u, u = Math.floor(i / s), o[n] = i - u * s;
                        for (; u > 0;) o[n++] = u % s, u = Math.floor(u / s);
                        return o
                    }

                    function M(t, e) {
                        for (var r = []; e-- > 0;) r.push(0);
                        return r.concat(t)
                    }

                    function O(t, e) {
                        var r = Math.max(t.length, e.length);
                        if (r <= 30) return A(t, e);
                        r = Math.ceil(r / 2);
                        var i = t.slice(r),
                            n = t.slice(0, r),
                            a = e.slice(r),
                            o = e.slice(0, r),
                            s = O(n, o),
                            u = O(i, a),
                            c = O(w(n, i), w(o, a)),
                            l = w(w(s, M(g(g(c, s), u), r)), M(u, 2 * r));
                        return d(l), l
                    }

                    function S(t, r, i) {
                        return new u(t < e ? E(r, t) : A(r, p(t)), i)
                    }

                    function x(t) {
                        var r, i, n, a, o = t.length,
                            s = y(o + o),
                            u = e;
                        for (n = 0; n < o; n++) {
                            i = 0 - (a = t[n]) * a;
                            for (var c = n; c < o; c++) r = a * t[c] * 2 + s[n + c] + i, i = Math.floor(r / u), s[n + c] = r - i * u;
                            s[n + o] = i
                        }
                        return d(s), s
                    }

                    function z(t, e) {
                        var r, i, n, a, o = t.length,
                            s = y(o);
                        for (n = 0, r = o - 1; r >= 0; --r) n = (a = 1e7 * n + t[r]) - (i = m(a / e)) * e, s[r] = 0 | i;
                        return [s, 0 | n]
                    }

                    function P(t, r) {
                        var i, n = V(r);
                        if (o) return [new l(t.value / n.value), new l(t.value % n.value)];
                        var a, h = t.value,
                            v = n.value;
                        if (0 === v) throw new Error("Cannot divide by zero");
                        if (t.isSmall) return n.isSmall ? [new c(m(h / v)), new c(h % v)] : [s[0], t];
                        if (n.isSmall) {
                            if (1 === v) return [t, s[0]];
                            if (-1 == v) return [t.negate(), s[0]];
                            var w = Math.abs(v);
                            if (w < e) {
                                a = f((i = z(h, w))[0]);
                                var _ = i[1];
                                return t.sign && (_ = -_), "number" == typeof a ? (t.sign !== n.sign && (a = -a), [new c(a), new c(_)]) : [new u(a, t.sign !== n.sign), new c(_)]
                            }
                            v = p(w)
                        }
                        var b = k(h, v);
                        if (-1 === b) return [s[0], t];
                        if (0 === b) return [s[t.sign === n.sign ? 1 : -1], s[0]];
                        a = (i = h.length + v.length <= 200 ? function (t, r) {
                            var i, n, a, o, s, u, c, l = t.length,
                                h = r.length,
                                p = e,
                                d = y(r.length),
                                m = r[h - 1],
                                v = Math.ceil(p / (2 * m)),
                                w = E(t, v),
                                _ = E(r, v);
                            for (w.length <= l && w.push(0), _.push(0), m = _[h - 1], n = l - h; n >= 0; n--) {
                                for (i = p - 1, w[n + h] !== m && (i = Math.floor((w[n + h] * p + w[n + h - 1]) / m)), a = 0, o = 0, u = _.length, s = 0; s < u; s++) a += i * _[s], c = Math.floor(a / p), o += w[n + s] - (a - c * p), a = c, o < 0 ? (w[n + s] = o + p, o = -1) : (w[n + s] = o, o = 0);
                                for (; 0 !== o;) {
                                    for (i -= 1, a = 0, s = 0; s < u; s++)(a += w[n + s] - p + _[s]) < 0 ? (w[n + s] = a + p, a = 0) : (w[n + s] = a, a = 1);
                                    o += a
                                }
                                d[n] = i
                            }
                            return w = z(w, v)[0], [f(d), f(w)]
                        }(h, v) : function (t, r) {
                            for (var i, n, a, o, s, u = t.length, c = r.length, l = [], h = [], p = e; u;)
                                if (h.unshift(t[--u]), d(h), k(h, r) < 0) l.push(0);
                                else {
                                    a = h[(n = h.length) - 1] * p + h[n - 2], o = r[c - 1] * p + r[c - 2], n > c && (a = (a + 1) * p), i = Math.ceil(a / o);
                                    do {
                                        if (k(s = E(r, i), h) <= 0) break;
                                        i--
                                    } while (i);
                                    l.push(i), h = g(h, s)
                                } return l.reverse(), [f(l), f(h)]
                        }(h, v))[0];
                        var A = t.sign !== n.sign,
                            M = i[1],
                            O = t.sign;
                        return "number" == typeof a ? (A && (a = -a), a = new c(a)) : a = new u(a, A), "number" == typeof M ? (O && (M = -M), M = new c(M)) : M = new u(M, O), [a, M]
                    }

                    function k(t, e) {
                        if (t.length !== e.length) return t.length > e.length ? 1 : -1;
                        for (var r = t.length - 1; r >= 0; r--)
                            if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
                        return 0
                    }

                    function j(t) {
                        var e = t.abs();
                        return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0))
                    }

                    function q(t, e) {
                        for (var r, i, a, o = t.prev(), s = o, u = 0; s.isEven();) s = s.divide(2), u++;
                        t: for (i = 0; i < e.length; i++)
                            if (!t.lesser(e[i]) && !(a = n(e[i]).modPow(s, t)).isUnit() && !a.equals(o)) {
                                for (r = u - 1; 0 != r; r--) {
                                    if ((a = a.square().mod(t)).isUnit()) return !1;
                                    if (a.equals(o)) continue t
                                }
                                return !1
                            }
                        return !0
                    }
                    u.prototype = Object.create(s.prototype), c.prototype = Object.create(s.prototype), l.prototype = Object.create(s.prototype), u.prototype.add = function (t) {
                        var e = V(t);
                        if (this.sign !== e.sign) return this.subtract(e.negate());
                        var r = this.value,
                            i = e.value;
                        return e.isSmall ? new u(_(r, Math.abs(i)), this.sign) : new u(w(r, i), this.sign)
                    }, u.prototype.plus = u.prototype.add, c.prototype.add = function (t) {
                        var e = V(t),
                            r = this.value;
                        if (r < 0 !== e.sign) return this.subtract(e.negate());
                        var i = e.value;
                        if (e.isSmall) {
                            if (h(r + i)) return new c(r + i);
                            i = p(Math.abs(i))
                        }
                        return new u(_(i, Math.abs(r)), r < 0)
                    }, c.prototype.plus = c.prototype.add, l.prototype.add = function (t) {
                        return new l(this.value + V(t).value)
                    }, l.prototype.plus = l.prototype.add, u.prototype.subtract = function (t) {
                        var e = V(t);
                        if (this.sign !== e.sign) return this.add(e.negate());
                        var r = this.value,
                            i = e.value;
                        return e.isSmall ? b(r, Math.abs(i), this.sign) : function (t, e, r) {
                            var i;
                            return k(t, e) >= 0 ? i = g(t, e) : (i = g(e, t), r = !r), "number" == typeof (i = f(i)) ? (r && (i = -i), new c(i)) : new u(i, r)
                        }(r, i, this.sign)
                    }, u.prototype.minus = u.prototype.subtract, c.prototype.subtract = function (t) {
                        var e = V(t),
                            r = this.value;
                        if (r < 0 !== e.sign) return this.add(e.negate());
                        var i = e.value;
                        return e.isSmall ? new c(r - i) : b(i, Math.abs(r), r >= 0)
                    }, c.prototype.minus = c.prototype.subtract, l.prototype.subtract = function (t) {
                        return new l(this.value - V(t).value)
                    }, l.prototype.minus = l.prototype.subtract, u.prototype.negate = function () {
                        return new u(this.value, !this.sign)
                    }, c.prototype.negate = function () {
                        var t = this.sign,
                            e = new c(-this.value);
                        return e.sign = !t, e
                    }, l.prototype.negate = function () {
                        return new l(-this.value)
                    }, u.prototype.abs = function () {
                        return new u(this.value, !1)
                    }, c.prototype.abs = function () {
                        return new c(Math.abs(this.value))
                    }, l.prototype.abs = function () {
                        return new l(this.value >= 0 ? this.value : -this.value)
                    }, u.prototype.multiply = function (t) {
                        var r, i, n, a = V(t),
                            o = this.value,
                            c = a.value,
                            l = this.sign !== a.sign;
                        if (a.isSmall) {
                            if (0 === c) return s[0];
                            if (1 === c) return this;
                            if (-1 === c) return this.negate();
                            if ((r = Math.abs(c)) < e) return new u(E(o, r), l);
                            c = p(r)
                        }
                        return new u(-.012 * (i = o.length) - .012 * (n = c.length) + 15e-6 * i * n > 0 ? O(o, c) : A(o, c), l)
                    }, u.prototype.times = u.prototype.multiply, c.prototype._multiplyBySmall = function (t) {
                        return h(t.value * this.value) ? new c(t.value * this.value) : S(Math.abs(t.value), p(Math.abs(this.value)), this.sign !== t.sign)
                    }, u.prototype._multiplyBySmall = function (t) {
                        return 0 === t.value ? s[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : S(Math.abs(t.value), this.value, this.sign !== t.sign)
                    }, c.prototype.multiply = function (t) {
                        return V(t)._multiplyBySmall(this)
                    }, c.prototype.times = c.prototype.multiply, l.prototype.multiply = function (t) {
                        return new l(this.value * V(t).value)
                    }, l.prototype.times = l.prototype.multiply, u.prototype.square = function () {
                        return new u(x(this.value), !1)
                    }, c.prototype.square = function () {
                        var t = this.value * this.value;
                        return h(t) ? new c(t) : new u(x(p(Math.abs(this.value))), !1)
                    }, l.prototype.square = function (t) {
                        return new l(this.value * this.value)
                    }, u.prototype.divmod = function (t) {
                        var e = P(this, t);
                        return {
                            quotient: e[0],
                            remainder: e[1]
                        }
                    }, l.prototype.divmod = c.prototype.divmod = u.prototype.divmod, u.prototype.divide = function (t) {
                        return P(this, t)[0]
                    }, l.prototype.over = l.prototype.divide = function (t) {
                        return new l(this.value / V(t).value)
                    }, c.prototype.over = c.prototype.divide = u.prototype.over = u.prototype.divide, u.prototype.mod = function (t) {
                        return P(this, t)[1]
                    }, l.prototype.mod = l.prototype.remainder = function (t) {
                        return new l(this.value % V(t).value)
                    }, c.prototype.remainder = c.prototype.mod = u.prototype.remainder = u.prototype.mod, u.prototype.pow = function (t) {
                        var e, r, i, n = V(t),
                            a = this.value,
                            o = n.value;
                        if (0 === o) return s[1];
                        if (0 === a) return s[0];
                        if (1 === a) return s[1];
                        if (-1 === a) return n.isEven() ? s[1] : s[-1];
                        if (n.sign) return s[0];
                        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
                        if (this.isSmall && h(e = Math.pow(a, o))) return new c(m(e));
                        for (r = this, i = s[1]; !0 & o && (i = i.times(r), --o), 0 !== o;) o /= 2, r = r.square();
                        return i
                    }, c.prototype.pow = u.prototype.pow, l.prototype.pow = function (t) {
                        var e = V(t),
                            r = this.value,
                            i = e.value,
                            n = BigInt(0),
                            a = BigInt(1),
                            o = BigInt(2);
                        if (i === n) return s[1];
                        if (r === n) return s[0];
                        if (r === a) return s[1];
                        if (r === BigInt(-1)) return e.isEven() ? s[1] : s[-1];
                        if (e.isNegative()) return new l(n);
                        for (var u = this, c = s[1];
                            (i & a) === a && (c = c.times(u), --i), i !== n;) i /= o, u = u.square();
                        return c
                    }, u.prototype.modPow = function (t, e) {
                        if (t = V(t), (e = V(e)).isZero()) throw new Error("Cannot take modPow with modulus 0");
                        var r = s[1],
                            i = this.mod(e);
                        for (t.isNegative() && (t = t.multiply(s[-1]), i = i.modInv(e)); t.isPositive();) {
                            if (i.isZero()) return s[0];
                            t.isOdd() && (r = r.multiply(i).mod(e)), t = t.divide(2), i = i.square().mod(e)
                        }
                        return r
                    }, l.prototype.modPow = c.prototype.modPow = u.prototype.modPow, u.prototype.compareAbs = function (t) {
                        var e = V(t),
                            r = this.value,
                            i = e.value;
                        return e.isSmall ? 1 : k(r, i)
                    }, c.prototype.compareAbs = function (t) {
                        var e = V(t),
                            r = Math.abs(this.value),
                            i = e.value;
                        return e.isSmall ? r === (i = Math.abs(i)) ? 0 : r > i ? 1 : -1 : -1
                    }, l.prototype.compareAbs = function (t) {
                        var e = this.value,
                            r = V(t).value;
                        return (e = e >= 0 ? e : -e) === (r = r >= 0 ? r : -r) ? 0 : e > r ? 1 : -1
                    }, u.prototype.compare = function (t) {
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        var e = V(t),
                            r = this.value,
                            i = e.value;
                        return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : k(r, i) * (this.sign ? -1 : 1)
                    }, u.prototype.compareTo = u.prototype.compare, c.prototype.compare = function (t) {
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        var e = V(t),
                            r = this.value,
                            i = e.value;
                        return e.isSmall ? r == i ? 0 : r > i ? 1 : -1 : r < 0 !== e.sign ? r < 0 ? -1 : 1 : r < 0 ? 1 : -1
                    }, c.prototype.compareTo = c.prototype.compare, l.prototype.compare = function (t) {
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        var e = this.value,
                            r = V(t).value;
                        return e === r ? 0 : e > r ? 1 : -1
                    }, l.prototype.compareTo = l.prototype.compare, u.prototype.equals = function (t) {
                        return 0 === this.compare(t)
                    }, l.prototype.eq = l.prototype.equals = c.prototype.eq = c.prototype.equals = u.prototype.eq = u.prototype.equals, u.prototype.notEquals = function (t) {
                        return 0 !== this.compare(t)
                    }, l.prototype.neq = l.prototype.notEquals = c.prototype.neq = c.prototype.notEquals = u.prototype.neq = u.prototype.notEquals, u.prototype.greater = function (t) {
                        return this.compare(t) > 0
                    }, l.prototype.gt = l.prototype.greater = c.prototype.gt = c.prototype.greater = u.prototype.gt = u.prototype.greater, u.prototype.lesser = function (t) {
                        return this.compare(t) < 0
                    }, l.prototype.lt = l.prototype.lesser = c.prototype.lt = c.prototype.lesser = u.prototype.lt = u.prototype.lesser, u.prototype.greaterOrEquals = function (t) {
                        return this.compare(t) >= 0
                    }, l.prototype.geq = l.prototype.greaterOrEquals = c.prototype.geq = c.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals, u.prototype.lesserOrEquals = function (t) {
                        return this.compare(t) <= 0
                    }, l.prototype.leq = l.prototype.lesserOrEquals = c.prototype.leq = c.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals, u.prototype.isEven = function () {
                        return 0 == (1 & this.value[0])
                    }, c.prototype.isEven = function () {
                        return 0 == (1 & this.value)
                    }, l.prototype.isEven = function () {
                        return (this.value & BigInt(1)) === BigInt(0)
                    }, u.prototype.isOdd = function () {
                        return 1 == (1 & this.value[0])
                    }, c.prototype.isOdd = function () {
                        return 1 == (1 & this.value)
                    }, l.prototype.isOdd = function () {
                        return (this.value & BigInt(1)) === BigInt(1)
                    }, u.prototype.isPositive = function () {
                        return !this.sign
                    }, c.prototype.isPositive = function () {
                        return this.value > 0
                    }, l.prototype.isPositive = c.prototype.isPositive, u.prototype.isNegative = function () {
                        return this.sign
                    }, c.prototype.isNegative = function () {
                        return this.value < 0
                    }, l.prototype.isNegative = c.prototype.isNegative, u.prototype.isUnit = function () {
                        return !1
                    }, c.prototype.isUnit = function () {
                        return 1 === Math.abs(this.value)
                    }, l.prototype.isUnit = function () {
                        return this.abs().value === BigInt(1)
                    }, u.prototype.isZero = function () {
                        return !1
                    }, c.prototype.isZero = function () {
                        return 0 === this.value
                    }, l.prototype.isZero = function () {
                        return this.value === BigInt(0)
                    }, u.prototype.isDivisibleBy = function (t) {
                        var e = V(t);
                        return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
                    }, l.prototype.isDivisibleBy = c.prototype.isDivisibleBy = u.prototype.isDivisibleBy, u.prototype.isPrime = function (e) {
                        var r = j(this);
                        if (r !== t) return r;
                        var i = this.abs(),
                            a = i.bitLength();
                        if (a <= 64) return q(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                        for (var o = Math.log(2) * a.toJSNumber(), s = Math.ceil(!0 === e ? 2 * Math.pow(o, 2) : o), u = [], c = 0; c < s; c++) u.push(n(c + 2));
                        return q(i, u)
                    }, l.prototype.isPrime = c.prototype.isPrime = u.prototype.isPrime, u.prototype.isProbablePrime = function (e, r) {
                        var i = j(this);
                        if (i !== t) return i;
                        for (var a = this.abs(), o = e === t ? 5 : e, s = [], u = 0; u < o; u++) s.push(n.randBetween(2, a.minus(2), r));
                        return q(a, s)
                    }, l.prototype.isProbablePrime = c.prototype.isProbablePrime = u.prototype.isProbablePrime, u.prototype.modInv = function (t) {
                        for (var e, r, i, a = n.zero, o = n.one, s = V(t), u = this.abs(); !u.isZero();) e = s.divide(u), r = a, i = s, a = o, s = u, o = r.subtract(e.multiply(o)), u = i.subtract(e.multiply(u));
                        if (!s.isUnit()) throw new Error(this.toString() + " and " + t.toString() + " are not co-prime");
                        return -1 === a.compare(0) && (a = a.add(t)), this.isNegative() ? a.negate() : a
                    }, l.prototype.modInv = c.prototype.modInv = u.prototype.modInv, u.prototype.next = function () {
                        var t = this.value;
                        return this.sign ? b(t, 1, this.sign) : new u(_(t, 1), this.sign)
                    }, c.prototype.next = function () {
                        var t = this.value;
                        return t + 1 < r ? new c(t + 1) : new u(i, !1)
                    }, l.prototype.next = function () {
                        return new l(this.value + BigInt(1))
                    }, u.prototype.prev = function () {
                        var t = this.value;
                        return this.sign ? new u(_(t, 1), !0) : b(t, 1, this.sign)
                    }, c.prototype.prev = function () {
                        var t = this.value;
                        return t - 1 > -r ? new c(t - 1) : new u(i, !0)
                    }, l.prototype.prev = function () {
                        return new l(this.value - BigInt(1))
                    };
                    for (var D = [1]; 2 * D[D.length - 1] <= e;) D.push(2 * D[D.length - 1]);
                    var N = D.length,
                        B = D[N - 1];

                    function T(t) {
                        return Math.abs(t) <= e
                    }

                    function C(t, e, r) {
                        e = V(e);
                        for (var i = t.isNegative(), a = e.isNegative(), o = i ? t.not() : t, s = a ? e.not() : e, u = 0, c = 0, l = null, h = null, p = []; !o.isZero() || !s.isZero();) u = (l = P(o, B))[1].toJSNumber(), i && (u = B - 1 - u), c = (h = P(s, B))[1].toJSNumber(), a && (c = B - 1 - c), o = l[0], s = h[0], p.push(r(u, c));
                        for (var f = 0 !== r(i ? 1 : 0, a ? 1 : 0) ? n(-1) : n(0), d = p.length - 1; d >= 0; d -= 1) f = f.multiply(B).add(n(p[d]));
                        return f
                    }
                    u.prototype.shiftLeft = function (t) {
                        var e = V(t).toJSNumber();
                        if (!T(e)) throw new Error(String(e) + " is too large for shifting.");
                        if (e < 0) return this.shiftRight(-e);
                        var r = this;
                        if (r.isZero()) return r;
                        for (; e >= N;) r = r.multiply(B), e -= N - 1;
                        return r.multiply(D[e])
                    }, l.prototype.shiftLeft = c.prototype.shiftLeft = u.prototype.shiftLeft, u.prototype.shiftRight = function (t) {
                        var e, r = V(t).toJSNumber();
                        if (!T(r)) throw new Error(String(r) + " is too large for shifting.");
                        if (r < 0) return this.shiftLeft(-r);
                        for (var i = this; r >= N;) {
                            if (i.isZero() || i.isNegative() && i.isUnit()) return i;
                            i = (e = P(i, B))[1].isNegative() ? e[0].prev() : e[0], r -= N - 1
                        }
                        return (e = P(i, D[r]))[1].isNegative() ? e[0].prev() : e[0]
                    }, l.prototype.shiftRight = c.prototype.shiftRight = u.prototype.shiftRight, u.prototype.not = function () {
                        return this.negate().prev()
                    }, l.prototype.not = c.prototype.not = u.prototype.not, u.prototype.and = function (t) {
                        return C(this, t, (function (t, e) {
                            return t & e
                        }))
                    }, l.prototype.and = c.prototype.and = u.prototype.and, u.prototype.or = function (t) {
                        return C(this, t, (function (t, e) {
                            return t | e
                        }))
                    }, l.prototype.or = c.prototype.or = u.prototype.or, u.prototype.xor = function (t) {
                        return C(this, t, (function (t, e) {
                            return t ^ e
                        }))
                    }, l.prototype.xor = c.prototype.xor = u.prototype.xor;
                    var I = 1 << 30;

                    function F(t) {
                        var r = t.value,
                            i = "number" == typeof r ? r | I : "bigint" == typeof r ? r | BigInt(I) : r[0] + r[1] * e | 1073758208;
                        return i & -i
                    }

                    function L(t, e) {
                        if (e.compareTo(t) <= 0) {
                            var r = L(t, e.square(e)),
                                i = r.p,
                                a = r.e,
                                o = i.multiply(e);
                            return o.compareTo(t) <= 0 ? {
                                p: o,
                                e: 2 * a + 1
                            } : {
                                p: i,
                                e: 2 * a
                            }
                        }
                        return {
                            p: n(1),
                            e: 0
                        }
                    }

                    function U(t, e) {
                        return t = V(t), e = V(e), t.greater(e) ? t : e
                    }

                    function J(t, e) {
                        return t = V(t), e = V(e), t.lesser(e) ? t : e
                    }

                    function R(t, e) {
                        if (t = V(t).abs(), e = V(e).abs(), t.equals(e)) return t;
                        if (t.isZero()) return e;
                        if (e.isZero()) return t;
                        for (var r, i, n = s[1]; t.isEven() && e.isEven();) r = J(F(t), F(e)), t = t.divide(r), e = e.divide(r), n = n.multiply(r);
                        for (; t.isEven();) t = t.divide(F(t));
                        do {
                            for (; e.isEven();) e = e.divide(F(e));
                            t.greater(e) && (i = e, e = t, t = i), e = e.subtract(t)
                        } while (!e.isZero());
                        return n.isUnit() ? t : t.multiply(n)
                    }
                    u.prototype.bitLength = function () {
                        var t = this;
                        return t.compareTo(n(0)) < 0 && (t = t.negate().subtract(n(1))), 0 === t.compareTo(n(0)) ? n(0) : n(L(t, n(2)).e).add(n(1))
                    }, l.prototype.bitLength = c.prototype.bitLength = u.prototype.bitLength;
                    var Z = function (t, e, r, i) {
                        r = r || a, t = String(t), i || (t = t.toLowerCase(), r = r.toLowerCase());
                        var n, o = t.length,
                            s = Math.abs(e),
                            u = {};
                        for (n = 0; n < r.length; n++) u[r[n]] = n;
                        for (n = 0; n < o; n++)
                            if ("-" !== (h = t[n]) && h in u && u[h] >= s) {
                                if ("1" === h && 1 === s) continue;
                                throw new Error(h + " is not a valid digit in base " + e + ".")
                            } e = V(e);
                        var c = [],
                            l = "-" === t[0];
                        for (n = l ? 1 : 0; n < t.length; n++) {
                            var h;
                            if ((h = t[n]) in u) c.push(V(u[h]));
                            else {
                                if ("<" !== h) throw new Error(h + " is not a valid character");
                                var p = n;
                                do {
                                    n++
                                } while (">" !== t[n] && n < t.length);
                                c.push(V(t.slice(p + 1, n)))
                            }
                        }
                        return G(c, e, l)
                    };

                    function G(t, e, r) {
                        var i, n = s[0],
                            a = s[1];
                        for (i = t.length - 1; i >= 0; i--) n = n.add(t[i].times(a)), a = a.times(e);
                        return r ? n.negate() : n
                    }

                    function W(t, e) {
                        if ((e = n(e)).isZero()) {
                            if (t.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            throw new Error("Cannot convert nonzero numbers to base 0.")
                        }
                        if (e.equals(-1)) {
                            if (t.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            if (t.isNegative()) return {
                                value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                                isNegative: !1
                            };
                            var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                            return r.unshift([1]), {
                                value: [].concat.apply([], r),
                                isNegative: !1
                            }
                        }
                        var i = !1;
                        if (t.isNegative() && e.isPositive() && (i = !0, t = t.abs()), e.isUnit()) return t.isZero() ? {
                            value: [0],
                            isNegative: !1
                        } : {
                            value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                            isNegative: i
                        };
                        for (var a, o = [], s = t; s.isNegative() || s.compareAbs(e) >= 0;) {
                            a = s.divmod(e), s = a.quotient;
                            var u = a.remainder;
                            u.isNegative() && (u = e.minus(u).abs(), s = s.next()), o.push(u.toJSNumber())
                        }
                        return o.push(s.toJSNumber()), {
                            value: o.reverse(),
                            isNegative: i
                        }
                    }

                    function H(t, e, r) {
                        var i = W(t, e);
                        return (i.isNegative ? "-" : "") + i.value.map((function (t) {
                            return function (t, e) {
                                return t < (e = e || a).length ? e[t] : "<" + t + ">"
                            }(t, r)
                        })).join("")
                    }

                    function $(t) {
                        if (h(+t)) {
                            var e = +t;
                            if (e === m(e)) return o ? new l(BigInt(e)) : new c(e);
                            throw new Error("Invalid integer: " + t)
                        }
                        var r = "-" === t[0];
                        r && (t = t.slice(1));
                        var i = t.split(/e/i);
                        if (i.length > 2) throw new Error("Invalid integer: " + i.join("e"));
                        if (2 === i.length) {
                            var n = i[1];
                            if ("+" === n[0] && (n = n.slice(1)), (n = +n) !== m(n) || !h(n)) throw new Error("Invalid integer: " + n + " is not a valid exponent.");
                            var a = i[0],
                                s = a.indexOf(".");
                            if (s >= 0 && (n -= a.length - s - 1, a = a.slice(0, s) + a.slice(s + 1)), n < 0) throw new Error("Cannot include negative exponent part for integers");
                            t = a += new Array(n + 1).join("0")
                        }
                        if (!/^([0-9][0-9]*)$/.test(t)) throw new Error("Invalid integer: " + t);
                        if (o) return new l(BigInt(r ? "-" + t : t));
                        for (var p = [], f = t.length, y = f - 7; f > 0;) p.push(+t.slice(y, f)), (y -= 7) < 0 && (y = 0), f -= 7;
                        return d(p), new u(p, r)
                    }

                    function V(t) {
                        return "number" == typeof t ? function (t) {
                            if (o) return new l(BigInt(t));
                            if (h(t)) {
                                if (t !== m(t)) throw new Error(t + " is not an integer.");
                                return new c(t)
                            }
                            return $(t.toString())
                        }(t) : "string" == typeof t ? $(t) : "bigint" == typeof t ? new l(t) : t
                    }
                    u.prototype.toArray = function (t) {
                        return W(this, t)
                    }, c.prototype.toArray = function (t) {
                        return W(this, t)
                    }, l.prototype.toArray = function (t) {
                        return W(this, t)
                    }, u.prototype.toString = function (e, r) {
                        if (e === t && (e = 10), 10 !== e) return H(this, e, r);
                        for (var i, n = this.value, a = n.length, o = String(n[--a]); --a >= 0;) i = String(n[a]), o += "0000000".slice(i.length) + i;
                        return (this.sign ? "-" : "") + o
                    }, c.prototype.toString = function (e, r) {
                        return e === t && (e = 10), 10 != e ? H(this, e, r) : String(this.value)
                    }, l.prototype.toString = c.prototype.toString, l.prototype.toJSON = u.prototype.toJSON = c.prototype.toJSON = function () {
                        return this.toString()
                    }, u.prototype.valueOf = function () {
                        return parseInt(this.toString(), 10)
                    }, u.prototype.toJSNumber = u.prototype.valueOf, c.prototype.valueOf = function () {
                        return this.value
                    }, c.prototype.toJSNumber = c.prototype.valueOf, l.prototype.valueOf = l.prototype.toJSNumber = function () {
                        return parseInt(this.toString(), 10)
                    };
                    for (var K = 0; K < 1e3; K++) s[K] = V(K), K > 0 && (s[-K] = V(-K));
                    return s.one = s[1], s.zero = s[0], s.minusOne = s[-1], s.max = U, s.min = J, s.gcd = R, s.lcm = function (t, e) {
                        return t = V(t).abs(), e = V(e).abs(), t.divide(R(t, e)).multiply(e)
                    }, s.isInstance = function (t) {
                        return t instanceof u || t instanceof c || t instanceof l
                    }, s.randBetween = function (t, r, i) {
                        t = V(t), r = V(r);
                        var n = i || Math.random,
                            a = J(t, r),
                            o = U(t, r).subtract(a).add(1);
                        if (o.isSmall) return a.add(Math.floor(n() * o));
                        for (var u = W(o, e).value, c = [], l = !0, h = 0; h < u.length; h++) {
                            var p = l ? u[h] : e,
                                f = m(n() * p);
                            c.push(f), f < p && (l = !1)
                        }
                        return a.add(s.fromArray(c, e, !1))
                    }, s.fromArray = function (t, e, r) {
                        return G(t.map(V), V(e || 10), r)
                    }, s
                }();
                t.hasOwnProperty("exports") && (t.exports = n), void 0 === (i = function () {
                    return n
                }.call(e, r, e, t)) || (t.exports = i)
            },
            746: function (t) {
                t.exports = function () {
                    "use strict";

                    function t(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function e(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }

                    function r(t, r, i) {
                        return r && e(t.prototype, r), i && e(t, i), t
                    }

                    function i(t, e, r) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function n(t) {
                        return t = t || Object.create(null), {
                            on: function (e, r) {
                                (t[e] || (t[e] = [])).push(r)
                            },
                            off: function (e, r) {
                                t[e] && t[e].splice(t[e].indexOf(r) >>> 0, 1)
                            },
                            emit: function (e, r) {
                                (t[e] || []).slice().map((function (t) {
                                    t(r)
                                })), (t["*"] || []).slice().map((function (t) {
                                    t(e, r)
                                }))
                            }
                        }
                    }
                    var a = "expiry",
                        o = function (t) {
                            if (t) throw new Error("Cannot use disposed instance.")
                        },
                        s = {
                            expiryCheckInterval: 100
                        },
                        u = function () {
                            function e() {
                                var r = this,
                                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t(this, e), i(this, "expire", (function () {
                                    o(r.disposed);
                                    for (var t = Date.now(), e = t; e >= r.lastExpiredTime; e -= 1) {
                                        var i = r.queue[e];
                                        i && (delete r.queue[e], i.forEach((function (t) {
                                            var e = t.key;
                                            return (0, t.onExpire)(e)
                                        })))
                                    }
                                    r.lastExpiredTime = t
                                })), this.config = Object.assign({}, s, n), this.queue = {}, this.disposed = !1, this.lastExpiredTime = Date.now() - 1;
                                var a = this.config.expiryCheckInterval;
                                this.timer = setInterval(this.expire, a)
                            }
                            return r(e, [{
                                key: "add",
                                value: function (t, e, r) {
                                    return o(this.disposed), this.queue[t] || (this.queue[t] = []), this.queue[t].push({
                                        key: e,
                                        onExpire: r
                                    }), !0
                                }
                            }, {
                                key: "remove",
                                value: function (t, e) {
                                    o(this.disposed);
                                    var r = this.queue[t];
                                    if (r) {
                                        var i = r.filter((function (t) {
                                            return t.key !== e
                                        }));
                                        return i.length ? this.queue[t] = i : delete this.queue[t], !0
                                    }
                                    return !1
                                }
                            }, {
                                key: "dispose",
                                value: function () {
                                    return o(this.disposed), clearInterval(this.timer), this.timer = null, this.queue = {}, this.disposed = !0, !0
                                }
                            }]), e
                        }(),
                        c = {
                            defaultCacheExpiryIn: 6e4,
                            expiryCheckInterval: 100
                        };
                    return function () {
                        function e() {
                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                            t(this, e), this.config = Object.assign({}, c, r);
                            var a = n(),
                                o = [a.on, a.off, a.emit];
                            this.on = o[0], this.off = o[1], this.emit = o[2], this.cacheStore = {}, this.disposed = !1;
                            var s = this.config.expiryCheckInterval;
                            this.cacheExpirer = new i({
                                expiryCheckInterval: s
                            })
                        }
                        return r(e, [{
                            key: "put",
                            value: function () {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.config.defaultCacheExpiryIn;
                                o(this.disposed), this.cacheStore[e] && this.remove(e);
                                var n = Date.now(),
                                    s = i ? n + i : null,
                                    u = {
                                        value: r,
                                        addedAt: n,
                                        expiryAt: s
                                    };
                                if (this.cacheStore[e] = u, s) {
                                    var c = function () {
                                        t.remove(e), t.emit(a, {
                                            key: e,
                                            data: t.cacheStore[e]
                                        })
                                    };
                                    this.cacheExpirer.add(s, e, c)
                                }
                                return this.emit("add", {
                                    key: e,
                                    data: u
                                }), u
                            }
                        }, {
                            key: "get",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                o(this.disposed);
                                var e = this.cacheStore[t];
                                return e ? (this.emit("get", {
                                    key: t,
                                    data: e
                                }), e) : null
                            }
                        }, {
                            key: "remove",
                            value: function (t) {
                                o(this.disposed);
                                var e = this.cacheStore[t];
                                if (e) {
                                    delete this.cacheStore[t];
                                    var r = e.expiryAt;
                                    return this.cacheExpirer.remove(r, t), this.emit("remove", {
                                        key: t,
                                        data: e
                                    }), !0
                                }
                                return !1
                            }
                        }, {
                            key: "dispose",
                            value: function () {
                                var t = this;
                                return o(this.disposed), Object.keys(this.cacheStore).forEach((function (e) {
                                    return t.remove(e)
                                })), this.emit("clear", {}), this.cacheExpirer.dispose(), this.disposed = !0, !0
                            }
                        }]), e
                    }()
                }()
            },
            307: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(311)),
                    a = i(r(843));

                function o(t, e) {
                    var r;
                    const i = {};
                    for (const t of e) {
                        const e = null !== (r = t.type) && void 0 !== r ? r : "data";
                        "number" == typeof t.value ? i[e + ":number." + t.key] = String(t.value) : "boolean" == typeof t.value ? i[e + ":bool." + t.key] = t.value ? "true" : "false" : i[e + "." + t.key] = t.value
                    }
                    return Object.assign({}, t, i)
                }
                e.default = class {
                    constructor(t, e, r) {
                        this.endpoint = t, this.namespace = e, r.fetch ? this.fetchBuiltin = r.fetch : this.fetchBuiltin = window.fetch, this.action = (async () => new n.default((await this.getConfig()).contract, this))()
                    }
                    async getConfig() {
                        return await this.fetchEndpoint("/v1/config", {})
                    }
                    async getAssets(t = {}, e = 1, r = 100, i = []) {
                        return await this.fetchEndpoint("/v1/assets", Object.assign({
                            page: e,
                            limit: r
                        }, o(t, i)))
                    }
                    async countAssets(t, e = []) {
                        return await this.countEndpoint("/v1/assets", o(t, e))
                    }
                    async getAsset(t) {
                        return await this.fetchEndpoint("/v1/assets/" + t, {})
                    }
                    async getAssetStats(t) {
                        return await this.fetchEndpoint("/v1/assets/" + t + "/stats", {})
                    }
                    async getAssetLogs(t, e = 1, r = 100, i = "desc") {
                        return await this.fetchEndpoint("/v1/assets/" + t + "/logs", {
                            page: e,
                            limit: r,
                            order: i
                        })
                    }
                    async getCollections(t = {}, e = 1, r = 100) {
                        return await this.fetchEndpoint("/v1/collections", Object.assign({
                            page: e,
                            limit: r
                        }, t))
                    }
                    async countCollections(t = {}) {
                        return await this.countEndpoint("/v1/collections", t)
                    }
                    async getCollection(t) {
                        return await this.fetchEndpoint("/v1/collections/" + t, {})
                    }
                    async getCollectionStats(t) {
                        return await this.fetchEndpoint("/v1/collections/" + t + "/stats", {})
                    }
                    async getCollectionLogs(t, e = 1, r = 100, i = "desc") {
                        return await this.fetchEndpoint("/v1/collections/" + t + "/logs", {
                            page: e,
                            limit: r,
                            order: i
                        })
                    }
                    async getSchemas(t = {}, e = 1, r = 100) {
                        return await this.fetchEndpoint("/v1/schemas", Object.assign({
                            page: e,
                            limit: r
                        }, t))
                    }
                    async countSchemas(t = {}) {
                        return await this.countEndpoint("/v1/schemas", t)
                    }
                    async getSchema(t, e) {
                        return await this.fetchEndpoint("/v1/schemas/" + t + "/" + e, {})
                    }
                    async getSchemaStats(t, e) {
                        return await this.fetchEndpoint("/v1/schemas/" + t + "/" + e + "/stats", {})
                    }
                    async getSchemaLogs(t, e, r = 1, i = 100, n = "desc") {
                        return await this.fetchEndpoint("/v1/schemas/" + t + "/" + e + "/logs", {
                            page: r,
                            limit: i,
                            order: n
                        })
                    }
                    async getTemplates(t = {}, e = 1, r = 100, i = []) {
                        return await this.fetchEndpoint("/v1/templates", Object.assign({
                            page: e,
                            limit: r
                        }, o(t, i)))
                    }
                    async countTemplates(t = {}, e = []) {
                        return await this.countEndpoint("/v1/templates", o(t, e))
                    }
                    async getTemplate(t, e) {
                        return await this.fetchEndpoint("/v1/templates/" + t + "/" + e, {})
                    }
                    async getTemplateStats(t, e) {
                        return await this.fetchEndpoint("/v1/templates/" + t + "/" + e + "/stats", {})
                    }
                    async getTemplateLogs(t, e, r = 1, i = 100, n = "desc") {
                        return await this.fetchEndpoint("/v1/templates/" + t + "/" + e + "/logs", {
                            page: r,
                            limit: i,
                            order: n
                        })
                    }
                    async getTransfers(t = {}, e = 1, r = 100) {
                        return await this.fetchEndpoint("/v1/transfers", Object.assign({
                            page: e,
                            limit: r
                        }, t))
                    }
                    async countTransfers(t = {}) {
                        return await this.countEndpoint("/v1/transfers", t)
                    }
                    async getOffers(t = {}, e = 1, r = 100) {
                        return await this.fetchEndpoint("/v1/offers", Object.assign({
                            page: e,
                            limit: r
                        }, t))
                    }
                    async countOffers(t = {}) {
                        return await this.countEndpoint("/v1/offers", t)
                    }
                    async getOffer(t) {
                        return await this.fetchEndpoint("/v1/offers/" + t, {})
                    }
                    async getAccounts(t = {}, e = 1, r = 100) {
                        return await this.fetchEndpoint("/v1/accounts", Object.assign({
                            page: e,
                            limit: r
                        }, t))
                    }
                    async getBurns(t = {}, e = 1, r = 100) {
                        return await this.fetchEndpoint("/v1/burns", Object.assign({
                            page: e,
                            limit: r
                        }, t))
                    }
                    async countAccounts(t = {}) {
                        return await this.countEndpoint("/v1/accounts", t)
                    }
                    async getAccount(t, e = {}) {
                        return await this.fetchEndpoint("/v1/accounts/" + t, e)
                    }
                    async getAccountCollection(t, e) {
                        return await this.fetchEndpoint("/v1/accounts/" + t + "/" + e, {})
                    }
                    async getAccountBurns(t, e = {}) {
                        return await this.fetchEndpoint("/v1/burns/" + t, e)
                    }
                    async fetchEndpoint(t, e) {
                        let r, i;
                        const n = this.fetchBuiltin,
                            o = Object.keys(e).map((t => {
                                let r = e[t];
                                return !0 === r && (r = "true"), !1 === r && (r = "false"), t + "=" + encodeURIComponent(r)
                            })).join("&");
                        try {
                            r = await n(this.endpoint + "/" + this.namespace + t + (o.length > 0 ? "?" + o : "")), i = await r.json()
                        } catch (t) {
                            throw new a.default(t.message, 500)
                        }
                        if (200 !== r.status) throw new a.default(i.message, r.status);
                        if (!i.success) throw new a.default(i.message, r.status);
                        return i.data
                    }
                    async countEndpoint(t, e) {
                        const r = await this.fetchEndpoint(t + "/_count", e);
                        return parseInt(r, 10)
                    }
                }
            },
            509: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = r(85),
                    a = i(r(147)),
                    o = i(r(909)),
                    s = i(r(162));
                e.default = class {
                    constructor(t, e, r, i, n, u, c, l = !0) {
                        this.api = t, this.owner = e, this.id = r, this._data = new Promise((async (n, a) => {
                            if (i) n(i);
                            else try {
                                n(await t.queue.fetchAsset(e, r, l))
                            } catch (t) {
                                a(t)
                            }
                        })), this._template = new Promise((async (e, r) => {
                            if (c) e(c);
                            else try {
                                const r = await this._data;
                                if (Number(r.template_id) < 0) return e(null);
                                e(new s.default(t, r.collection_name, r.template_id, void 0, void 0, l))
                            } catch (t) {
                                r(t)
                            }
                        })), this._collection = new Promise((async (e, r) => {
                            if (n) e(n);
                            else try {
                                const r = await this._data;
                                e(new a.default(t, r.collection_name, void 0, l))
                            } catch (t) {
                                r(t)
                            }
                        })), this._schema = new Promise((async (e, r) => {
                            if (u) e(u);
                            else try {
                                const r = await this._data;
                                e(new o.default(t, r.collection_name, r.schema_name, void 0, l))
                            } catch (t) {
                                r(t)
                            }
                        }))
                    }
                    async template() {
                        return await this._template
                    }
                    async collection() {
                        return await this._collection
                    }
                    async schema() {
                        return await this._schema
                    }
                    async backedTokens() {
                        return (await this._data).backed_tokens
                    }
                    async immutableData() {
                        const t = await this.schema(),
                            e = await this._data;
                        return n.deserialize(e.immutable_serialized_data, await t.format())
                    }
                    async mutableData() {
                        const t = await this.schema(),
                            e = await this._data;
                        return n.deserialize(e.mutable_serialized_data, await t.format())
                    }
                    async data() {
                        const t = await this.mutableData(),
                            e = await this.immutableData(),
                            r = await this.template(),
                            i = r ? await r.immutableData() : {};
                        return Object.assign({}, t, e, i)
                    }
                    async toObject() {
                        const t = await this.template(),
                            e = await this.collection(),
                            r = await this.schema();
                        return {
                            asset_id: this.id,
                            collection: await e.toObject(),
                            schema: await r.toObject(),
                            template: t ? await t.toObject() : null,
                            backedTokens: await this.backedTokens(),
                            immutableData: await this.immutableData(),
                            mutableData: await this.mutableData(),
                            data: await this.data()
                        }
                    }
                }
            },
            344: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(746));
                e.default = class {
                    constructor() {
                        this.cache = new n.default({
                            expiryCheckInterval: 6e4
                        })
                    }
                    getAsset(t, e) {
                        return e && (e.mutable_serialized_data = new Uint8Array(e.mutable_serialized_data), e.immutable_serialized_data = new Uint8Array(e.immutable_serialized_data)), this.access("assets", t, e)
                    }
                    deleteAsset(t) {
                        this.delete("assets", t)
                    }
                    getTemplate(t, e, r) {
                        return r && (r.immutable_serialized_data = new Uint8Array(r.immutable_serialized_data)), this.access("templates", t + ":" + e, r)
                    }
                    deleteTemplate(t, e) {
                        this.delete("templates", t + ":" + e)
                    }
                    getSchema(t, e, r) {
                        return this.access("schemas", t + ":" + e, r)
                    }
                    deleteSchema(t, e) {
                        this.delete("schemas", t + ":" + e)
                    }
                    getCollection(t, e) {
                        return this.access("collections", t, e)
                    }
                    deleteCollection(t) {
                        this.delete("collections", t)
                    }
                    getOffer(t, e) {
                        return this.access("offers", t, e)
                    }
                    deleteOffer(t) {
                        this.delete("offers", t)
                    }
                    access(t, e, r) {
                        if (void 0 === r) {
                            const r = this.cache.get(t + ":" + e);
                            return null === r ? null : r.value
                        }
                        return this.cache.put(t + ":" + e, r, 9e5), r
                    }
                    delete(t, e) {
                        this.cache.remove(t + ":" + e)
                    }
                }
            },
            147: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const i = r(577),
                    n = r(85);
                e.default = class {
                    constructor(t, e, r, i = !0) {
                        this.api = t, this.name = e, this._data = new Promise((async (n, a) => {
                            if (r) n(r);
                            else try {
                                n(await t.queue.fetchCollection(e, i))
                            } catch (t) {
                                a(t)
                            }
                        }))
                    }
                    async author() {
                        return (await this._data).author
                    }
                    async allowNotify() {
                        return (await this._data).allow_notify
                    }
                    async authorizedAccounts() {
                        return (await this._data).authorized_accounts
                    }
                    async notifyAccounts() {
                        return (await this._data).notify_accounts
                    }
                    async marketFee() {
                        return Number((await this._data).market_fee)
                    }
                    async data() {
                        return n.deserialize((await this._data).serialized_data, i.ObjectSchema((await this.api.config()).collection_format))
                    }
                    async toObject() {
                        return {
                            collection_name: this.name,
                            author: await this.author(),
                            allowNotify: await this.allowNotify(),
                            authorizedAccounts: await this.authorizedAccounts(),
                            notifyAccounts: await this.notifyAccounts(),
                            marketFee: await this.marketFee(),
                            data: await this.data()
                        }
                    }
                }
            },
            715: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(509));
                e.default = class {
                    constructor(t, e, r, i, a, o = !0) {
                        this.api = t, this.id = e, this._data = new Promise((async (t, i) => {
                            if (r) t(r);
                            else try {
                                t(await this.api.queue.fetchOffer(e, o))
                            } catch (t) {
                                i(t)
                            }
                        })), this._senderAssets = new Promise((async (t, e) => {
                            if (i) t(i);
                            else try {
                                const e = await this._data,
                                    r = await this.api.queue.fetchAccountAssets(e.sender);
                                return t(e.sender_asset_ids.map((t => {
                                    const i = r.find((e => e.asset_id === t));
                                    return i ? new n.default(this.api, e.sender, t, i, void 0, void 0, void 0, o) : t
                                })))
                            } catch (t) {
                                return e(t)
                            }
                        })), this._recipientAssets = new Promise((async (t, e) => {
                            if (a) t(a);
                            else try {
                                const e = await this._data,
                                    r = await this.api.queue.fetchAccountAssets(e.recipient);
                                return t(e.recipient_asset_ids.map((t => {
                                    const i = r.find((e => e.asset_id === t));
                                    return i ? new n.default(this.api, e.recipient, t, i, void 0, void 0, void 0, o) : t
                                })))
                            } catch (t) {
                                return e(t)
                            }
                        }))
                    }
                    async sender() {
                        return (await this._data).sender
                    }
                    async recipient() {
                        return (await this._data).recipient
                    }
                    async senderAssets() {
                        return await this._senderAssets
                    }
                    async recipientAssets() {
                        return await this._recipientAssets
                    }
                    async memo() {
                        return (await this._data).memo
                    }
                    async toObject() {
                        return {
                            offer_id: this.id,
                            sender: {
                                account: await this.sender(),
                                assets: await Promise.all((await this.senderAssets()).map((async t => "string" == typeof t ? t : await t.toObject())))
                            },
                            recipient: {
                                account: await this.recipient(),
                                assets: await Promise.all((await this.recipientAssets()).map((async t => "string" == typeof t ? t : await t.toObject())))
                            },
                            memo: await this.memo()
                        }
                    }
                }
            },
            141: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = class {
                    constructor(t, e = 4) {
                        this.api = t, this.requestLimit = e, this.elements = [], this.interval = null, this.preloadedCollections = {}
                    }
                    async fetchAsset(t, e, r = !0) {
                        return await this.fetch_single_row("assets", t, e, (t => r || void 0 !== t ? this.api.cache.getAsset(e, t) : null))
                    }
                    async fetchAccountAssets(t) {
                        return (await this.fetch_all_rows("assets", t, "asset_id")).map((t => this.api.cache.getAsset(t.asset_id, t)))
                    }
                    async fetchTemplate(t, e, r = !0) {
                        return await this.fetch_single_row("templates", t, e, (i => r || void 0 !== i ? this.api.cache.getTemplate(t, e, i) : null))
                    }
                    async fetchSchema(t, e, r = !0) {
                        return await this.fetch_single_row("schemas", t, e, (i => r || void 0 !== i ? this.api.cache.getSchema(t, e, i) : null))
                    }
                    async fetchCollection(t, e = !0) {
                        return await this.fetch_single_row("collections", this.api.contract, t, (r => e || void 0 !== r ? this.api.cache.getCollection(t, r) : null))
                    }
                    async fetchCollectionSchemas(t) {
                        return (await this.fetch_all_rows("schemas", t, "schema_name")).map((e => this.api.cache.getSchema(t, e.schema_name, e)))
                    }
                    async fetchCollectionTemplates(t) {
                        return (await this.fetch_all_rows("templates", t, "template_id")).map((e => this.api.cache.getTemplate(t, String(e.template_id), e)))
                    }
                    async preloadCollection(t, e = !0) {
                        (!e || !this.preloadedCollections[t] || this.preloadedCollections[t] + 9e5 < Date.now()) && (await this.fetchCollectionSchemas(t), await this.fetchCollectionTemplates(t))
                    }
                    async fetchOffer(t, e = !0) {
                        return await this.fetch_single_row("offers", this.api.contract, t, (r => e || void 0 !== r ? this.api.cache.getOffer(t, r) : null))
                    }
                    async fetchAccountOffers(t) {
                        const e = await Promise.all([this.fetch_all_rows("offers", this.api.contract, "offer_sender", t, t, 2, "name"), this.fetch_all_rows("offers", this.api.contract, "offer_recipient", t, t, 3, "name")]);
                        return e[0].concat(e[1]).map((t => this.api.cache.getOffer(t.offer_id, t)))
                    }
                    dequeue() {
                        this.interval || (this.interval = setInterval((async () => {
                            this.elements.length > 0 ? this.elements.shift()() : (clearInterval(this.interval), this.interval = null)
                        }), Math.ceil(1e3 / this.requestLimit)))
                    }
                    async fetch_single_row(t, e, r, i, n = 1, a = "") {
                        return new Promise(((o, s) => {
                            let u = i();
                            if (null !== u) return o(u);
                            this.elements.push((async () => {
                                if (u = i(), null !== u) return o(u);
                                try {
                                    const u = {
                                            code: this.api.contract,
                                            table: t,
                                            scope: e,
                                            limit: 1,
                                            lower_bound: r,
                                            upper_bound: r,
                                            index_position: n,
                                            key_type: a
                                        },
                                        c = await this.api.getTableRows(u);
                                    return 0 === c.rows.length ? s(new Error("Row not found for " + JSON.stringify(u))) : o(i(c.rows[0]))
                                } catch (t) {
                                    return s(t)
                                }
                            })), this.dequeue()
                        }))
                    }
                    async fetch_all_rows(t, e, r, i = "", n = "", a = 1, o = "") {
                        return new Promise((async (s, u) => {
                            this.elements.push((async () => {
                                const c = await this.api.getTableRows({
                                    code: this.api.contract,
                                    scope: e,
                                    table: t,
                                    lower_bound: i,
                                    upper_bound: n,
                                    limit: 1e3,
                                    index_position: a,
                                    key_type: o
                                });
                                c.more && 1 === a ? (this.elements.unshift((async () => {
                                    try {
                                        const i = await this.fetch_all_rows(t, e, r, c.rows[c.rows.length - 1][r], n, a, o);
                                        i.length > 0 && i.shift(), s(c.rows.concat(i))
                                    } catch (t) {
                                        u(t)
                                    }
                                })), this.dequeue()) : s(c.rows)
                            })), this.dequeue()
                        }))
                    }
                }
            },
            909: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = r(577),
                    a = i(r(147));
                e.default = class {
                    constructor(t, e, r, i, n = !0) {
                        this.api = t, this.collection = e, this.name = r, this._data = new Promise((async (a, o) => {
                            if (i) a(i);
                            else try {
                                a(await t.queue.fetchSchema(e, r, n))
                            } catch (t) {
                                o(t)
                            }
                        })), this._collection = new Promise((async (r, i) => {
                            try {
                                r(new a.default(t, e, void 0, n))
                            } catch (t) {
                                i(t)
                            }
                        }))
                    }
                    async format() {
                        return n.ObjectSchema((await this._data).format)
                    }
                    async rawFormat() {
                        return (await this._data).format
                    }
                    async toObject() {
                        return {
                            collection_name: this.collection,
                            schema_name: this.name,
                            format: await this.rawFormat()
                        }
                    }
                }
            },
            162: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = r(85),
                    a = i(r(909));
                e.default = class {
                    constructor(t, e, r, i, n, o = !0) {
                        this.api = t, this.collection = e, this.id = r, this._data = new Promise((async (n, a) => {
                            if (i) n(i);
                            else try {
                                n(await t.queue.fetchTemplate(e, r, o))
                            } catch (t) {
                                a(t)
                            }
                        })), this._schema = new Promise((async (t, r) => {
                            if (n) t(n);
                            else try {
                                const r = await this._data;
                                t(new a.default(this.api, e, r.schema_name, void 0, o))
                            } catch (t) {
                                r(t)
                            }
                        }))
                    }
                    async schema() {
                        return await this._schema
                    }
                    async immutableData() {
                        const t = await this._schema;
                        return n.deserialize((await this._data).immutable_serialized_data, await t.format())
                    }
                    async isTransferable() {
                        return (await this._data).transferable
                    }
                    async isBurnable() {
                        return (await this._data).burnable
                    }
                    async maxSupply() {
                        return (await this._data).max_supply
                    }
                    async circulation() {
                        return (await this._data).issued_supply
                    }
                    async toObject() {
                        return {
                            collection_name: this.collection,
                            template_id: this.id,
                            schema: await (await this.schema()).toObject(),
                            immutableData: await this.immutableData(),
                            transferable: await this.isTransferable(),
                            burnable: await this.isBurnable(),
                            maxSupply: await this.maxSupply(),
                            circulation: await this.circulation()
                        }
                    }
                }
            },
            707: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(700)),
                    a = i(r(116)),
                    o = i(r(509)),
                    s = i(r(344)),
                    u = i(r(147)),
                    c = i(r(715)),
                    l = i(r(141)),
                    h = i(r(909)),
                    p = i(r(162));
                e.default = class {
                    constructor(t, e, i = {
                        rateLimit: 4
                    }) {
                        this.endpoint = t, this.contract = e, i.fetch ? this.fetchBuiltin = i.fetch : this.fetchBuiltin = r.g.fetch, this.queue = new l.default(this, i.rateLimit), this.cache = new s.default, this.action = new n.default(this), this._config = new Promise((async (t, e) => {
                            try {
                                const r = await this.getTableRows({
                                    code: this.contract,
                                    scope: this.contract,
                                    table: "config"
                                });
                                return 1 !== r.rows.length ? e("invalid config") : t(r.rows[0])
                            } catch (t) {
                                e(t)
                            }
                        }))
                    }
                    async config() {
                        return await this._config
                    }
                    async getAsset(t, e, r = !0) {
                        r || this.cache.deleteAsset(e);
                        const i = await this.queue.fetchAsset(t, e, r);
                        return new o.default(this, t, e, i, void 0, void 0, void 0, r)
                    }
                    async getTemplate(t, e, r = !0) {
                        r || this.cache.deleteTemplate(t, e);
                        const i = await this.queue.fetchTemplate(t, e, r);
                        return new p.default(this, t, e, i, void 0, r)
                    }
                    async getCollection(t, e = !0) {
                        e || this.cache.deleteCollection(t);
                        const r = await this.queue.fetchCollection(t, e);
                        return new u.default(this, t, r, e)
                    }
                    async getCollectionTemplates(t) {
                        return (await this.queue.fetchCollectionTemplates(t)).map((e => new p.default(this, t, String(e.template_id), e, void 0)))
                    }
                    async getCollectionsSchemas(t) {
                        return (await this.queue.fetchCollectionSchemas(t)).map((e => new h.default(this, t, e.schema_name, void 0)))
                    }
                    async getSchema(t, e, r = !0) {
                        r || this.cache.deleteSchema(t, e);
                        const i = await this.queue.fetchSchema(t, e, r);
                        return new h.default(this, t, e, i, r)
                    }
                    async getOffer(t, e = !0) {
                        e || this.cache.deleteOffer(t);
                        const r = await this.queue.fetchOffer(t, e);
                        return new c.default(this, t, r, void 0, void 0, e)
                    }
                    async getAccountOffers(t) {
                        return (await this.queue.fetchAccountOffers(t)).map((t => new c.default(this, t.offer_id, t, void 0, void 0)))
                    }
                    async getAccountAssets(t) {
                        return (await this.queue.fetchAccountAssets(t)).map((e => new o.default(this, t, e.asset_id, e, void 0, void 0, void 0)))
                    }
                    async getCollectionInventory(t, e) {
                        return await this.queue.preloadCollection(t, !0), (await this.queue.fetchAccountAssets(e)).filter((e => e.collection_name === t)).map((t => new o.default(this, e, t.asset_id, t, void 0, void 0, void 0)))
                    }
                    async preloadCollection(t, e = !0) {
                        await this.queue.preloadCollection(t, e)
                    }
                    async getTableRows({
                        code: t,
                        scope: e,
                        table: r,
                        table_key: i = "",
                        lower_bound: n = "",
                        upper_bound: a = "",
                        index_position: o = 1,
                        key_type: s = ""
                    }) {
                        return await this.fetchRpc("/v1/chain/get_table_rows", {
                            code: t,
                            scope: e,
                            table: r,
                            table_key: i,
                            lower_bound: n,
                            upper_bound: a,
                            index_position: o,
                            key_type: s,
                            limit: 101,
                            reverse: !1,
                            show_payer: !1,
                            json: !0
                        })
                    }
                    async fetchRpc(t, e) {
                        let r, i;
                        try {
                            const n = this.fetchBuiltin;
                            r = await n(this.endpoint + t, {
                                body: JSON.stringify(e),
                                method: "POST"
                            }), i = await r.json()
                        } catch (t) {
                            throw t.isFetchError = !0, t
                        }
                        if (i.processed && i.processed.except || !r.ok) throw new a.default(i);
                        return i
                    }
                }
            },
            311: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const i = r(135);
                class n extends i.ActionGenerator {
                    constructor(t, e) {
                        super(t), this.api = e, this.config = e.getConfig()
                    }
                    async createcol(t, e, r, n, a, o, s, u) {
                        return super.createcol(t, e, r, n, a, o, s, i.toAttributeMap(u, (await this.config).collection_format))
                    }
                    async createtempl(t, e, r, n, a, o, s, u) {
                        const c = await this.api.getSchema(r, n),
                            l = i.toAttributeMap(u, c.format);
                        return super.createtempl(t, e, r, n, a, o, s, l)
                    }
                    async mintasset(t, e, r, n, a, o, s, u, c) {
                        const l = await this.api.getSchema(r, n),
                            h = i.toAttributeMap(s, l.format),
                            p = i.toAttributeMap(u, l.format);
                        return super.mintasset(t, e, r, n, a, o, h, p, c)
                    }
                    async setassetdata(t, e, r, n, a) {
                        const o = await this.api.getAsset(n),
                            s = i.toAttributeMap(a, o.schema.format);
                        return super.setassetdata(t, e, r, n, s)
                    }
                    async setcoldata(t, e, r) {
                        const n = i.toAttributeMap(r, (await this.config).collection_format);
                        return super.setcoldata(t, e, n)
                    }
                }
                e.default = n
            },
            135: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.toAttributeMap = e.ActionGenerator = void 0;
                const n = i(r(72));
                e.ActionGenerator = class {
                    constructor(t) {
                        this.contract = t
                    }
                    async acceptoffer(t, e) {
                        return this._pack(t, "acceptoffer", {
                            offer_id: e
                        })
                    }
                    async addcolauth(t, e, r) {
                        return this._pack(t, "addcolauth", {
                            collection_name: e,
                            account_to_add: r
                        })
                    }
                    async addconftoken(t, e, r) {
                        return this._pack(t, "addconftoken", {
                            token_contract: e,
                            token_symbol: r
                        })
                    }
                    async addnotifyacc(t, e, r) {
                        return this._pack(t, "addnotifyacc", {
                            collection_name: e,
                            account_to_add: r
                        })
                    }
                    async announcedepo(t, e, r) {
                        return this._pack(t, "announcedepo", {
                            owner: e,
                            symbol_to_announce: r
                        })
                    }
                    async backasset(t, e, r, i, n) {
                        return this._pack(t, "backasset", {
                            payer: e,
                            asset_owner: r,
                            asset_id: i,
                            token_to_back: n
                        })
                    }
                    async burnasset(t, e, r) {
                        return this._pack(t, "burnasset", {
                            asset_owner: e,
                            asset_id: r
                        })
                    }
                    async canceloffer(t, e) {
                        return this._pack(t, "canceloffer", {
                            offer_id: e
                        })
                    }
                    async createcol(t, e, r, i, n, a, o, s) {
                        return this._pack(t, "createcol", {
                            author: e,
                            collection_name: r,
                            allow_notify: i,
                            authorized_accounts: n,
                            notify_accounts: a,
                            market_fee: o,
                            data: s
                        })
                    }
                    async createoffer(t, e, r, i, n, a) {
                        return this._pack(t, "createoffer", {
                            sender: e,
                            recipient: r,
                            sender_asset_ids: i,
                            recipient_asset_ids: n,
                            memo: a
                        })
                    }
                    async createtempl(t, e, r, i, n, a, o, s) {
                        return this._pack(t, "createtempl", {
                            authorized_creator: e,
                            collection_name: r,
                            schema_name: i,
                            transferable: n,
                            burnable: a,
                            max_supply: o,
                            immutable_data: s
                        })
                    }
                    async createschema(t, e, r, i, n) {
                        return this._pack(t, "createschema", {
                            authorized_creator: e,
                            collection_name: r,
                            schema_name: i,
                            schema_format: n
                        })
                    }
                    async declineoffer(t, e) {
                        return this._pack(t, "declineoffer", {
                            offer_id: e
                        })
                    }
                    async extendschema(t, e, r, i, n) {
                        return this._pack(t, "extendschema", {
                            authorized_editor: e,
                            collection_name: r,
                            schema_name: i,
                            schema_format_extension: n
                        })
                    }
                    async forbidnotify(t, e) {
                        return this._pack(t, "forbidnotify", {
                            collection_name: e
                        })
                    }
                    async locktemplate(t, e, r, i) {
                        return this._pack(t, "locktemplate", {
                            authorized_editor: e,
                            collection_name: r,
                            template_id: i
                        })
                    }
                    async mintasset(t, e, r, i, n, a, o, s, u) {
                        return this._pack(t, "mintasset", {
                            authorized_minter: e,
                            collection_name: r,
                            schema_name: i,
                            template_id: n,
                            new_asset_owner: a,
                            immutable_data: o,
                            mutable_data: s,
                            tokens_to_back: u
                        })
                    }
                    async payofferram(t, e, r) {
                        return this._pack(t, "payofferram", {
                            payer: e,
                            offer_id: r
                        })
                    }
                    async remcolauth(t, e, r) {
                        return this._pack(t, "remcolauth", {
                            collection_name: e,
                            account_to_remove: r
                        })
                    }
                    async remnotifyacc(t, e, r) {
                        return this._pack(t, "remnotifyacc", {
                            collection_name: e,
                            account_to_remove: r
                        })
                    }
                    async setassetdata(t, e, r, i, n) {
                        return this._pack(t, "setassetdata", {
                            authorized_editor: e,
                            asset_owner: r,
                            asset_id: i,
                            new_mutable_data: n
                        })
                    }
                    async setcoldata(t, e, r) {
                        return this._pack(t, "setcoldata", {
                            collection_name: e,
                            data: r
                        })
                    }
                    async setmarketfee(t, e, r) {
                        return this._pack(t, "setmarketfee", {
                            collection_name: e,
                            market_fee: r
                        })
                    }
                    async transfer(t, e, r, i, n) {
                        return this._pack(t, "transfer", {
                            from: e,
                            to: r,
                            asset_ids: i,
                            memo: n
                        })
                    }
                    async withdraw(t, e, r) {
                        return this._pack(t, "withdraw", {
                            owner: e,
                            token_to_withdraw: r
                        })
                    }
                    _pack(t, e, r) {
                        return [{
                            account: this.contract,
                            name: e,
                            authorization: t,
                            data: r
                        }]
                    }
                }, e.toAttributeMap = function (t, e) {
                    const r = {},
                        i = [];
                    for (const t of e) r[t.name] = t.type;
                    const a = Object.keys(t);
                    for (const e of a) {
                        if (void 0 !== r[e]) throw new n.default("field not defined in schema");
                        i.push({
                            key: e,
                            value: [r[e], t[e]]
                        })
                    }
                    return i
                }
            },
            700: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const i = r(135);
                class n extends i.ActionGenerator {
                    constructor(t) {
                        super(t.contract), this.api = t
                    }
                    async createcol(t, e, r, n, a, o, s, u) {
                        const c = await this.api.config();
                        return super.createcol(t, e, r, n, a, o, s, i.toAttributeMap(u, c.collection_format))
                    }
                    async createtempl(t, e, r, n, a, o, s, u) {
                        const c = await this.api.getSchema(r, n),
                            l = i.toAttributeMap(u, await c.rawFormat());
                        return super.createtempl(t, e, r, n, a, o, s, l)
                    }
                    async mintasset(t, e, r, n, a, o, s, u, c) {
                        const l = await this.api.getTemplate(r, a),
                            h = i.toAttributeMap(s, await (await l.schema()).rawFormat()),
                            p = i.toAttributeMap(u, await (await l.schema()).rawFormat());
                        return super.mintasset(t, e, r, n, a, o, h, p, c)
                    }
                    async setassetdata(t, e, r, n, a) {
                        const o = await this.api.getAsset(r, n),
                            s = await o.schema(),
                            u = i.toAttributeMap(a, await s.rawFormat());
                        return super.setassetdata(t, e, r, n, u)
                    }
                    async setcoldata(t, e, r) {
                        const n = i.toAttributeMap(r, (await this.api.config()).collection_format);
                        return super.setcoldata(t, e, n)
                    }
                }
                e.default = n
            },
            843: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                class r extends Error {
                    constructor(t, e) {
                        super(t), this.message = t, this.status = e, this.isApiError = !0
                    }
                }
                e.default = r
            },
            528: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                class r extends Error {}
                e.default = r
            },
            116: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                class r extends Error {
                    constructor(t) {
                        t.error && t.error.details && t.error.details.length && t.error.details[0].message ? super(t.error.details[0].message) : t.processed && t.processed.except && t.processed.except.message ? super(t.processed.except.message) : super(t.message), this.json = t
                    }
                }
                e.default = r
            },
            698: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                class r extends Error {}
                e.default = r
            },
            72: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                class r extends Error {}
                e.default = r
            },
            748: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(698)),
                    a = r(685);
                e.default = class {
                    constructor(t) {
                        this.attributes = t, this.reserved = 4
                    }
                    deserialize(t, e = !1) {
                        const r = {};
                        for (; t.position < t.data.length;) {
                            const i = a.varint_decode(t);
                            if (i.equals(0)) break;
                            const n = this.getAttribute(i.toJSNumber(), !e);
                            n && (r[n.name] = n.value.deserialize(t))
                        }
                        return r
                    }
                    serialize(t) {
                        const e = [];
                        for (let r = 0; r < this.attributes.length; r++) {
                            const i = this.attributes[r];
                            void 0 !== t[i.name] && (e.push(a.varint_encode(r + this.reserved)), e.push(i.value.serialize(t[i.name])))
                        }
                        return e.push(a.varint_encode(0)), a.concat_byte_arrays(e)
                    }
                    getAttribute(t, e = !0) {
                        const r = t - this.reserved;
                        if (!(r >= this.attributes.length)) return this.attributes[Number(r)];
                        if (e) throw new n.default("attribute does not exists")
                    }
                }
            },
            484: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(698)),
                    a = r(432);
                e.default = class {
                    constructor(t) {
                        if (void 0 === a.ParserTypes[t]) throw new n.default(`attribute type '${t}' not defined`);
                        this.parser = a.ParserTypes[t]
                    }
                    deserialize(t) {
                        return this.parser.deserialize(t)
                    }
                    serialize(t) {
                        return this.parser.serialize(t)
                    }
                }
            },
            817: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const i = r(685);
                e.default = class {
                    constructor(t) {
                        this.element = t
                    }
                    deserialize(t) {
                        const e = i.varint_decode(t).toJSNumber(),
                            r = [];
                        for (let i = 0; i < e; i++) r.push(this.element.deserialize(t));
                        return r
                    }
                    serialize(t) {
                        const e = [i.varint_encode(t.length)];
                        for (const r of t) e.push(this.element.serialize(r));
                        return i.concat_byte_arrays(e)
                    }
                }
            },
            577: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ObjectSchema = void 0;
                const n = i(r(698)),
                    a = i(r(748)),
                    o = i(r(484)),
                    s = i(r(817));

                function u(t, e) {
                    const r = [];
                    let i = e[t];
                    void 0 === i && (i = []), delete e[t];
                    for (const t of i) r.push({
                        name: t.name,
                        value: c(t.type, e)
                    });
                    return new a.default(r)
                }

                function c(t, e) {
                    if (t.endsWith("[]")) return new s.default(c(t.substring(0, t.length - 2), e));
                    if (t.startsWith("object{") && t.endsWith("}")) {
                        const r = parseInt(t.substring(7, t.length - 1), 10);
                        if (isNaN(r)) throw new n.default(`invalid type '${t}'`);
                        return u(r, e)
                    }
                    return new o.default(t)
                }
                e.ObjectSchema = function (t) {
                    const e = {};
                    for (const r of t) {
                        const t = void 0 === r.parent ? 0 : r.parent;
                        void 0 === e[t] && (e[t] = []), e[t].push(r)
                    }
                    return u(0, e)
                }
            },
            685: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.byte_vector_to_int = e.int_to_byte_vector = e.concat_byte_arrays = e.hex_encode = e.hex_decode = e.base58_encode = e.base58_decode = e.zigzag_decode = e.zigzag_encode = e.integer_unsign = e.integer_sign = e.varint_decode = e.varint_encode = void 0;
                const n = i(r(736)),
                    a = i(r(528)),
                    o = i(r(72)),
                    s = i(r(663));
                e.varint_encode = function (t) {
                    const e = [];
                    let r = n.default(t);
                    if (r.lesser(0)) throw new o.default("cant pack negative integer");
                    for (;;) {
                        const t = r.and(127);
                        if (r = r.shiftRight(7), r.equals(0)) {
                            e.push(t.toJSNumber());
                            break
                        }
                        e.push(t.toJSNumber() + 128)
                    }
                    return new Uint8Array(e)
                }, e.varint_decode = function (t) {
                    let e = n.default(0);
                    for (let r = 0;; r++) {
                        if (t.position >= t.data.length) throw new a.default("failed to unpack integer");
                        const i = n.default(t.data[t.position]);
                        if (t.position += 1, i.lesser(128)) {
                            e = e.plus(i.shiftLeft(7 * r));
                            break
                        }
                        e = e.plus(i.and(127).shiftLeft(7 * r))
                    }
                    return e
                }, e.integer_sign = function (t, e) {
                    const r = n.default(t);
                    if (r.greaterOrEquals(n.default(2).pow(8 * e - 1))) throw new Error("cannot sign integer: too big");
                    return r.greaterOrEquals(0) ? r : r.negate().xor(n.default(2).pow(8 * e).minus(1)).plus(1)
                }, e.integer_unsign = function (t, e) {
                    const r = n.default(t);
                    if (r.greater(n.default(2).pow(8 * e))) throw new Error("cannot unsign integer: too big");
                    return r.greater(n.default(2).pow(8 * e - 1)) ? r.minus(1).xor(n.default(2).pow(8 * e).minus(1)).negate() : r
                }, e.zigzag_encode = function (t) {
                    const e = n.default(t);
                    return e.lesser(0) ? e.plus(1).multiply(-2).plus(1) : e.multiply(2)
                }, e.zigzag_decode = function (t) {
                    const e = n.default(t);
                    return e.mod(2).equals(0) ? e.divmod(2).quotient : e.divmod(2).quotient.multiply(-1).minus(1)
                };
                const u = new s.default("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
                e.base58_decode = function (t) {
                    return u.decode(t)
                }, e.base58_encode = function (t) {
                    return u.encode(t)
                }, e.hex_decode = function (t) {
                    const e = t.match(/.{1,2}/g);
                    return e ? new Uint8Array(e.map((t => parseInt(t, 16)))) : new Uint8Array(0)
                }, e.hex_encode = function (t) {
                    return t.reduce(((t, e) => t + e.toString(16).padStart(2, "0")), "")
                }, e.concat_byte_arrays = function (t) {
                    const e = new Uint8Array(t.reduce(((t, e) => t + e.length), 0));
                    let r = 0;
                    for (const i of t) e.set(i, r), r += i.length;
                    return e
                }, e.int_to_byte_vector = function (t) {
                    const e = [];
                    let r = n.default(t);
                    for (; r.notEquals(0);) e.push(r.and(255).toJSNumber()), r = r.shiftRight(8);
                    return new Uint8Array(e)
                }, e.byte_vector_to_int = function (t) {
                    let e = n.default(0);
                    for (let r = 0; r < t.length; r++) e = e.plus(n.default(t[r]).shiftLeft(8 * r));
                    return e.toJSNumber()
                }
            },
            663: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = class {
                    constructor(t) {
                        if (this.ALPHABET = t, t.length >= 255) throw new TypeError("Alphabet too long");
                        this.BASE_MAP = new Uint8Array(256);
                        for (let t = 0; t < this.BASE_MAP.length; t++) this.BASE_MAP[t] = 255;
                        for (let e = 0; e < t.length; e++) {
                            const r = t.charAt(e),
                                i = r.charCodeAt(0);
                            if (255 !== this.BASE_MAP[i]) throw new TypeError(r + " is ambiguous");
                            this.BASE_MAP[i] = e
                        }
                        this.BASE = t.length, this.LEADER = t.charAt(0), this.FACTOR = Math.log(this.BASE) / Math.log(256), this.iFACTOR = Math.log(256) / Math.log(this.BASE)
                    }
                    encode(t) {
                        if (0 === t.length) return "";
                        let e = 0,
                            r = 0,
                            i = 0;
                        const n = t.length;
                        for (; i !== n && 0 === t[i];) i++, e++;
                        const a = (n - i) * this.iFACTOR + 1 >>> 0,
                            o = new Uint8Array(a);
                        for (; i !== n;) {
                            let e = t[i],
                                n = 0;
                            for (let t = a - 1;
                                (0 !== e || n < r) && -1 !== t; t--, n++) e += 256 * o[t] >>> 0, o[t] = e % this.BASE >>> 0, e = e / this.BASE >>> 0;
                            if (0 !== e) throw new Error("Non-zero carry");
                            r = n, i++
                        }
                        let s = a - r;
                        for (; s !== a && 0 === o[s];) s++;
                        let u = this.LEADER.repeat(e);
                        for (; s < a; ++s) u += this.ALPHABET.charAt(o[s]);
                        return u
                    }
                    decode(t) {
                        const e = this.decodeUnsafe(t);
                        if (e) return e;
                        throw new Error("Non-base" + this.BASE + " character")
                    }
                    decodeUnsafe(t) {
                        if (0 === t.length) return new Uint8Array(0);
                        let e = 0;
                        if (" " === t[e]) return new Uint8Array(0);
                        let r = 0,
                            i = 0;
                        for (; t[e] === this.LEADER;) r++, e++;
                        const n = (t.length - e) * this.FACTOR + 1 >>> 0,
                            a = new Uint8Array(n);
                        for (; t[e];) {
                            let r = this.BASE_MAP[t.charCodeAt(e)];
                            if (255 === r) return new Uint8Array(0);
                            let o = 0;
                            for (let t = n - 1;
                                (0 !== r || o < i) && -1 !== t; t--, o++) r += this.BASE * a[t] >>> 0, a[t] = r % 256 >>> 0, r = r / 256 >>> 0;
                            if (0 !== r) throw new Error("Non-zero carry");
                            i = o, e++
                        }
                        if (" " === t[e]) return new Uint8Array(0);
                        let o = n - i;
                        for (; o !== n && 0 === a[o];) o++;
                        const s = new Uint8Array(r + (n - o));
                        s.fill(0, 0, r);
                        let u = r;
                        for (; o !== n;) s[u++] = a[o++];
                        return s
                    }
                }
            },
            110: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.prepare = void 0;
                class r {
                    constructor(t, e = 0) {
                        this.data = t, this.position = e
                    }
                }
                e.default = r, e.prepare = function (t) {
                    return new r(t, 0)
                }
            },
            74: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(337));
                class a extends n.default {
                    constructor() {
                        super(1)
                    }
                    deserialize(t) {
                        return 1 === super.deserialize(t)[0] ? 1 : 0
                    }
                    serialize(t) {
                        return super.serialize(new Uint8Array([t ? 1 : 0]))
                    }
                }
                e.default = a
            },
            111: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ByteParser = void 0;
                const n = i(r(836));
                class a extends n.default {
                    deserialize(t) {
                        return super.deserialize(t)
                    }
                    serialize(t) {
                        return super.serialize(t)
                    }
                }
                e.ByteParser = a
            },
            324: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(736)),
                    a = i(r(337));
                class o extends a.default {
                    deserialize(t) {
                        const e = super.deserialize(t).reverse();
                        let r = n.default(0);
                        for (const t of e) r = r.shiftLeft(8), r = r.plus(t);
                        return this.size <= 6 ? r.toJSNumber() : r.toString()
                    }
                    serialize(t) {
                        let e = n.default(t);
                        const r = [];
                        for (let t = 0; t < this.size; t++) r.push(e.and(255).toJSNumber()), e = e.shiftRight(8);
                        return super.serialize(new Uint8Array(r))
                    }
                }
                e.default = o
            },
            337: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(528)),
                    a = i(r(72));
                e.default = class {
                    constructor(t) {
                        this.size = t
                    }
                    deserialize(t) {
                        t.position += this.size;
                        const e = t.data.slice(t.position - this.size, t.position);
                        if (e.length !== this.size) throw new n.default("FixedParser: read past end");
                        return e
                    }
                    serialize(t) {
                        if (t.length !== this.size) throw new a.default("input data does not conform fixed size");
                        return t
                    }
                }
            },
            573: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(337)),
                    a = r(751);
                class o extends n.default {
                    constructor(t) {
                        super(t ? 8 : 4), this.isDouble = t
                    }
                    deserialize(t) {
                        return this.isDouble ? a.readDoubleLE(super.deserialize(t)) : a.readFloatLE(super.deserialize(t))
                    }
                    serialize(t) {
                        let e = [];
                        return this.isDouble ? (a.writeDoubleLE(e, t), super.serialize(new Uint8Array(e))) : (a.writeFloatLE(e, t), super.serialize(new Uint8Array(e)))
                    }
                }
                e.default = o
            },
            940: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = r(685),
                    a = i(r(836));
                class o extends a.default {
                    deserialize(t) {
                        return n.base58_encode(super.deserialize(t))
                    }
                    serialize(t) {
                        return super.serialize(n.base58_decode(t))
                    }
                }
                e.default = o
            },
            647: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(836));
                class a extends n.default {
                    deserialize(t) {
                        return (new TextDecoder).decode(super.deserialize(t))
                    }
                    serialize(t) {
                        return super.serialize((new TextEncoder).encode(t))
                    }
                }
                e.default = a
            },
            56: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(736)),
                    a = i(r(528)),
                    o = i(r(72)),
                    s = r(685);
                e.default = class {
                    constructor(t, e) {
                        this.size = t, this.unsigned = e
                    }
                    deserialize(t) {
                        let e = s.varint_decode(t);
                        if (this.unsigned || (e = s.zigzag_decode(e)), e.greaterOrEquals(n.default(2).pow(8 * this.size - (this.unsigned ? 0 : 1)))) throw new a.default("number '" + e.toString() + "' too large for given type");
                        return this.size <= 6 ? e.toJSNumber() : e.toString()
                    }
                    serialize(t) {
                        let e = n.default(t);
                        if (e.greaterOrEquals(n.default(2).pow(8 * this.size - (this.unsigned ? 0 : 1)))) throw new o.default("number '" + e.toString() + "' too large for given type");
                        return this.unsigned || (e = s.zigzag_encode(e)), s.varint_encode(e)
                    }
                }
            },
            836: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(r(528)),
                    a = r(685);
                e.default = class {
                    deserialize(t) {
                        const e = a.varint_decode(t).toJSNumber();
                        t.position += e;
                        const r = t.data.slice(t.position - e, t.position);
                        if (r.length !== e) throw new n.default("VariableParser: read past end");
                        return r
                    }
                    serialize(t) {
                        return a.concat_byte_arrays([a.varint_encode(t.length), t])
                    }
                }
            },
            18: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ParserTypes = void 0;
                const n = i(r(74)),
                    a = r(111),
                    o = i(r(324)),
                    s = i(r(573)),
                    u = i(r(940)),
                    c = i(r(647)),
                    l = i(r(56));
                e.ParserTypes = {
                    int8: new l.default(1, !1),
                    int16: new l.default(2, !1),
                    int32: new l.default(4, !1),
                    int64: new l.default(8, !1),
                    uint8: new l.default(1, !0),
                    uint16: new l.default(2, !0),
                    uint32: new l.default(4, !0),
                    uint64: new l.default(8, !0),
                    fixed8: new o.default(1),
                    fixed16: new o.default(2),
                    fixed32: new o.default(4),
                    fixed64: new o.default(8),
                    bool: new n.default,
                    bytes: new a.ByteParser,
                    string: new c.default,
                    image: new c.default,
                    ipfs: new u.default,
                    float: new s.default(!1),
                    double: new s.default(!0)
                }
            },
            85: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.deserialize = e.serialize = void 0;
                const n = i(r(748)),
                    a = r(685),
                    o = i(r(110));
                e.serialize = function (t, e) {
                    const r = e.serialize(t);
                    return e instanceof n.default ? r.slice(0, r.length - 1) : r
                }, e.deserialize = function (t, e) {
                    e instanceof n.default && (t = a.concat_byte_arrays([t, a.varint_encode(0)]));
                    const r = new o.default(t, 0);
                    return e.deserialize(r)
                }
            },
            432: function (t, e, r) {
                "use strict";
                var i = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ActionGenerator = e.ExplorerActionGenerator = e.RpcActionGenerator = e.ParserTypes = e.serialize = e.deserialize = e.ObjectSchema = e.ExplorerApi = e.RpcApi = void 0;
                const n = i(r(311));
                e.ExplorerActionGenerator = n.default;
                const a = r(135);
                Object.defineProperty(e, "ActionGenerator", {
                    enumerable: !0,
                    get: function () {
                        return a.ActionGenerator
                    }
                });
                const o = i(r(700));
                e.RpcActionGenerator = o.default;
                const s = i(r(307));
                e.ExplorerApi = s.default;
                const u = i(r(707));
                e.RpcApi = u.default;
                const c = r(577);
                Object.defineProperty(e, "ObjectSchema", {
                    enumerable: !0,
                    get: function () {
                        return c.ObjectSchema
                    }
                });
                const l = r(85);
                Object.defineProperty(e, "deserialize", {
                    enumerable: !0,
                    get: function () {
                        return l.deserialize
                    }
                }), Object.defineProperty(e, "serialize", {
                    enumerable: !0,
                    get: function () {
                        return l.serialize
                    }
                });
                const h = r(18);
                Object.defineProperty(e, "ParserTypes", {
                    enumerable: !0,
                    get: function () {
                        return h.ParserTypes
                    }
                })
            }
        },
        e = {};

    function r(i) {
        var n = e[i];
        if (void 0 !== n) return n.exports;
        var a = e[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return t[i].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports
    }
    r.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.nmd = t => (t.paths = [], t.children || (t.children = []), t);
    var i = r(432);
    atomicassets = i
})();