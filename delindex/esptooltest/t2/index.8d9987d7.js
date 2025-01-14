
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = new Map();
function $7d39d93f9098a310$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$7d39d93f9098a310$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping.get(id);
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

parcelRegister("gcSQu", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("17fYX").then(()=>parcelRequire('iwKFf'));

});
parcelRegister("92x9i", function(module, exports) {
"use strict";

function $694e03a97467efc7$var$load(id) {
    // eslint-disable-next-line no-undef
    return import((parcelRequire("aKzDW")).resolve(id));
}
module.exports = $694e03a97467efc7$var$load;

});


parcelRegister("4e0vU", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("35K3k").then(()=>parcelRequire('2rgbf'));

});

parcelRegister("ky1SY", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("vZCF2").then(()=>parcelRequire('4uwlf'));

});

parcelRegister("2EAPS", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("d4LkX").then(()=>parcelRequire('goOsG'));

});

parcelRegister("2lWmv", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("cJDqv").then(()=>parcelRequire('33Iaz'));

});

parcelRegister("2Exj3", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("3OCVy").then(()=>parcelRequire('ZyG7t'));

});

parcelRegister("l1j0E", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("eXP7h").then(()=>parcelRequire('1Zjpz'));

});

parcelRegister("jF0Ow", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("fa8eB").then(()=>parcelRequire('cPKkO'));

});

parcelRegister("bQFHR", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("9N6hS").then(()=>parcelRequire('31SZA'));

});

parcelRegister("4CSyV", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("gmXBg").then(()=>parcelRequire('3BUdr'));

});

parcelRegister("2j7bN", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("hHpLC").then(()=>parcelRequire('hMNzR'));

});

parcelRegister("ktqd8", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("gbY4J").then(()=>parcelRequire('jDde6'));

});

parcelRegister("75lrL", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = Promise.all([
    $92x9i("ELGPK"),
    $92x9i("jJvTY")
]).then(()=>parcelRequire('7WxGE'));

});

parcelRegister("duKZl", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("ELGPK").then(()=>parcelRequire('5CcEa'));

});

parcelRegister("dvhVK", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("8itJW").then(()=>parcelRequire('4ALwD'));

});

parcelRegister("i252s", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = Promise.all([
    $92x9i("8itJW"),
    $92x9i("3qJU9")
]).then(()=>parcelRequire('kUD0R'));

});

parcelRegister("i6fLF", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = Promise.all([
    $92x9i("8itJW"),
    $92x9i("fk33s")
]).then(()=>parcelRequire('gVK7e'));

});

parcelRegister("3UbGO", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("dJVWW").then(()=>parcelRequire('H1kyH'));

});

parcelRegister("duiLk", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("at51o").then(()=>parcelRequire('jI9O3'));

});

parcelRegister("2CBAX", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("2pBtn").then(()=>parcelRequire('dTziU'));

});

parcelRegister("fzzuQ", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("cXe3K").then(()=>parcelRequire('6fpwM'));

});

parcelRegister("5MwrU", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = Promise.all([
    $92x9i("gbY4J"),
    $92x9i("i7djm")
]).then(()=>parcelRequire('41MQS'));

});

parcelRegister("3KHBw", function(module, exports) {

$parcel$export(module.exports, "ROM", () => $2bb77dda76009c14$export$c643cc54d6326a6f);
/**
 * Represents a chip ROM with basic registers field and abstract functions.
 */ class $2bb77dda76009c14$export$c643cc54d6326a6f {
    /**
     * Get the chip erase size.
     * @param {number} offset - Offset to start erase.
     * @param {number} size - Size to erase.
     * @returns {number} The erase size of the chip as number.
     */ getEraseSize(offset, size) {
        return size;
    }
}

});

var $b573ec460edd35fb$exports = {};

(parcelRequire("aKzDW")).register(new URL("", import.meta.url).toString(), JSON.parse("[\"epDtc\",\"index.8d9987d7.js\",\"17fYX\",\"stub_flasher_32.bc06e557.js\",\"35K3k\",\"stub_flasher_32c2.63c0ddda.js\",\"vZCF2\",\"stub_flasher_32c3.1f4c3acb.js\",\"d4LkX\",\"stub_flasher_32c5.2d91a6ff.js\",\"cJDqv\",\"stub_flasher_32c6.7e3cbb90.js\",\"3OCVy\",\"stub_flasher_32c61.82908af8.js\",\"eXP7h\",\"stub_flasher_32h2.42b7a893.js\",\"fa8eB\",\"stub_flasher_32p4.90dd8add.js\",\"9N6hS\",\"stub_flasher_32s2.38b7c15e.js\",\"gmXBg\",\"stub_flasher_32s3.d91381f3.js\",\"hHpLC\",\"stub_flasher_8266.4f4307c8.js\",\"gbY4J\",\"esp32.3f2660d9.js\",\"jJvTY\",\"esp32c2.11753622.js\",\"ELGPK\",\"esp32c3.566f2292.js\",\"8itJW\",\"esp32c6.5b449d27.js\",\"3qJU9\",\"esp32c61.7aaa628f.js\",\"fk33s\",\"esp32c5.9aff0e3e.js\",\"dJVWW\",\"esp32h2.a06e4253.js\",\"at51o\",\"esp32s3.e35b3ad8.js\",\"2pBtn\",\"esp32s2.315a8ac7.js\",\"cXe3K\",\"esp8266.29587a4a.js\",\"i7djm\",\"esp32p4.433a1fb3.js\"]"));

/**
 * Represents a Espressif chip error.
 */ class $ebb8d82b6f845895$export$5b519f82636185ec extends Error {
}
/**
 * Represents a Espressif timeout chip error.
 */ class $ebb8d82b6f845895$export$66d311bf29d5c89c extends $ebb8d82b6f845895$export$5b519f82636185ec {
}


/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */ // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ /* Public constants ==========================================================*/ /* ===========================================================================*/ //const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const $2438585bd7e1d91e$var$Z_FIXED$1 = 4;
//const Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */ const $2438585bd7e1d91e$var$Z_BINARY = 0;
const $2438585bd7e1d91e$var$Z_TEXT = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const $2438585bd7e1d91e$var$Z_UNKNOWN$1 = 2;
/*============================================================================*/ function $2438585bd7e1d91e$var$zero$1(buf) {
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
}
// From zutil.h
const $2438585bd7e1d91e$var$STORED_BLOCK = 0;
const $2438585bd7e1d91e$var$STATIC_TREES = 1;
const $2438585bd7e1d91e$var$DYN_TREES = 2;
/* The three kinds of block type */ const $2438585bd7e1d91e$var$MIN_MATCH$1 = 3;
const $2438585bd7e1d91e$var$MAX_MATCH$1 = 258;
/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */ const $2438585bd7e1d91e$var$LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */ const $2438585bd7e1d91e$var$LITERALS$1 = 256;
/* number of literal bytes 0..255 */ const $2438585bd7e1d91e$var$L_CODES$1 = $2438585bd7e1d91e$var$LITERALS$1 + 1 + $2438585bd7e1d91e$var$LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */ const $2438585bd7e1d91e$var$D_CODES$1 = 30;
/* number of distance codes */ const $2438585bd7e1d91e$var$BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */ const $2438585bd7e1d91e$var$HEAP_SIZE$1 = 2 * $2438585bd7e1d91e$var$L_CODES$1 + 1;
/* maximum heap size */ const $2438585bd7e1d91e$var$MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */ const $2438585bd7e1d91e$var$Buf_size = 16;
/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */ const $2438585bd7e1d91e$var$MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */ const $2438585bd7e1d91e$var$END_BLOCK = 256;
/* end of block literal code */ const $2438585bd7e1d91e$var$REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */ const $2438585bd7e1d91e$var$REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */ const $2438585bd7e1d91e$var$REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */ const $2438585bd7e1d91e$var$extra_lbits = /* extra bits for each length code */ new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
]);
const $2438585bd7e1d91e$var$extra_dbits = /* extra bits for each distance code */ new Uint8Array([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
]);
const $2438585bd7e1d91e$var$extra_blbits = /* extra bits for each bit length code */ new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
]);
const $2438585bd7e1d91e$var$bl_order = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
const $2438585bd7e1d91e$var$DIST_CODE_LEN = 512; /* see definition of array dist_code below */ 
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const $2438585bd7e1d91e$var$static_ltree = new Array(($2438585bd7e1d91e$var$L_CODES$1 + 2) * 2);
$2438585bd7e1d91e$var$zero$1($2438585bd7e1d91e$var$static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */ const $2438585bd7e1d91e$var$static_dtree = new Array($2438585bd7e1d91e$var$D_CODES$1 * 2);
$2438585bd7e1d91e$var$zero$1($2438585bd7e1d91e$var$static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */ const $2438585bd7e1d91e$var$_dist_code = new Array($2438585bd7e1d91e$var$DIST_CODE_LEN);
$2438585bd7e1d91e$var$zero$1($2438585bd7e1d91e$var$_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */ const $2438585bd7e1d91e$var$_length_code = new Array($2438585bd7e1d91e$var$MAX_MATCH$1 - $2438585bd7e1d91e$var$MIN_MATCH$1 + 1);
$2438585bd7e1d91e$var$zero$1($2438585bd7e1d91e$var$_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */ const $2438585bd7e1d91e$var$base_length = new Array($2438585bd7e1d91e$var$LENGTH_CODES$1);
$2438585bd7e1d91e$var$zero$1($2438585bd7e1d91e$var$base_length);
/* First normalized length for each code (0 = MIN_MATCH) */ const $2438585bd7e1d91e$var$base_dist = new Array($2438585bd7e1d91e$var$D_CODES$1);
$2438585bd7e1d91e$var$zero$1($2438585bd7e1d91e$var$base_dist);
/* First normalized distance for each code (0 = distance of 1) */ function $2438585bd7e1d91e$var$StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree; /* static tree or NULL */ 
    this.extra_bits = extra_bits; /* extra bits for each code or NULL */ 
    this.extra_base = extra_base; /* base index for extra_bits */ 
    this.elems = elems; /* max number of elements in the tree */ 
    this.max_length = max_length; /* max bit length for the codes */ 
    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree = static_tree && static_tree.length;
}
let $2438585bd7e1d91e$var$static_l_desc;
let $2438585bd7e1d91e$var$static_d_desc;
let $2438585bd7e1d91e$var$static_bl_desc;
function $2438585bd7e1d91e$var$TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree; /* the dynamic tree */ 
    this.max_code = 0; /* largest code with non zero frequency */ 
    this.stat_desc = stat_desc; /* the corresponding static tree */ 
}
const $2438585bd7e1d91e$var$d_code = (dist)=>{
    return dist < 256 ? $2438585bd7e1d91e$var$_dist_code[dist] : $2438585bd7e1d91e$var$_dist_code[256 + (dist >>> 7)];
};
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */ const $2438585bd7e1d91e$var$put_short = (s, w)=>{
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
};
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */ const $2438585bd7e1d91e$var$send_bits = (s, value, length)=>{
    if (s.bi_valid > $2438585bd7e1d91e$var$Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        $2438585bd7e1d91e$var$put_short(s, s.bi_buf);
        s.bi_buf = value >> $2438585bd7e1d91e$var$Buf_size - s.bi_valid;
        s.bi_valid += length - $2438585bd7e1d91e$var$Buf_size;
    } else {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        s.bi_valid += length;
    }
};
const $2438585bd7e1d91e$var$send_code = (s, c, tree)=>{
    $2438585bd7e1d91e$var$send_bits(s, tree[c * 2], tree[c * 2 + 1]);
};
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */ const $2438585bd7e1d91e$var$bi_reverse = (code, len)=>{
    let res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while (--len > 0);
    return res >>> 1;
};
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */ const $2438585bd7e1d91e$var$bi_flush = (s)=>{
    if (s.bi_valid === 16) {
        $2438585bd7e1d91e$var$put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
    }
};
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */ const $2438585bd7e1d91e$var$gen_bitlen = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc;    /* the tree descriptor */
    const tree = desc.dyn_tree;
    const max_code = desc.max_code;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const extra = desc.stat_desc.extra_bits;
    const base = desc.stat_desc.extra_base;
    const max_length = desc.stat_desc.max_length;
    let h; /* heap index */ 
    let n, m; /* iterate over the tree elements */ 
    let bits; /* bit length */ 
    let xbits; /* extra bits */ 
    let f; /* frequency */ 
    let overflow = 0; /* number of elements with bit length too large */ 
    for(bits = 0; bits <= $2438585bd7e1d91e$var$MAX_BITS$1; bits++)s.bl_count[bits] = 0;
    /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */ tree[s.heap[s.heap_max] * 2 + 1] = 0; /* root of the heap */ 
    for(h = s.heap_max + 1; h < $2438585bd7e1d91e$var$HEAP_SIZE$1; h++){
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        /* We overwrite tree[n].Dad which is no longer needed */ if (n > max_code) continue;
         /* not a leaf node */ 
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) xbits = extra[n - base];
        f = tree[n * 2] /*.Freq*/ ;
        s.opt_len += f * (bits + xbits);
        if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0) return;
    // Tracev((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */ do {
        bits = max_length - 1;
        while(s.bl_count[bits] === 0)bits--;
        s.bl_count[bits]--; /* move one leaf down the tree */ 
        s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */ 
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */ overflow -= 2;
    }while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */ for(bits = max_length; bits !== 0; bits--){
        n = s.bl_count[bits];
        while(n !== 0){
            m = s.heap[--h];
            if (m > max_code) continue;
            if (tree[m * 2 + 1] !== bits) {
                // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
                s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2] /*.Freq*/ ;
                tree[m * 2 + 1] = bits;
            }
            n--;
        }
    }
};
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */ const $2438585bd7e1d91e$var$gen_codes = (tree, max_code, bl_count)=>{
    //    ct_data *tree;             /* the tree to decorate */
    //    int max_code;              /* largest code with non zero frequency */
    //    ushf *bl_count;            /* number of codes at each bit length */
    const next_code = new Array($2438585bd7e1d91e$var$MAX_BITS$1 + 1); /* next code value for each bit length */ 
    let code = 0; /* running code value */ 
    let bits; /* bit index */ 
    let n; /* code index */ 
    /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */ for(bits = 1; bits <= $2438585bd7e1d91e$var$MAX_BITS$1; bits++){
        code = code + bl_count[bits - 1] << 1;
        next_code[bits] = code;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    for(n = 0; n <= max_code; n++){
        let len = tree[n * 2 + 1] /*.Len*/ ;
        if (len === 0) continue;
        /* Now reverse the bits */ tree[n * 2] = $2438585bd7e1d91e$var$bi_reverse(next_code[len]++, len);
    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
};
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */ const $2438585bd7e1d91e$var$tr_static_init = ()=>{
    let n; /* iterates over tree elements */ 
    let bits; /* bit counter */ 
    let length; /* length value */ 
    let code; /* code value */ 
    let dist; /* distance index */ 
    const bl_count = new Array($2438585bd7e1d91e$var$MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
    //if (static_init_done) return;
    /* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */ length = 0;
    for(code = 0; code < $2438585bd7e1d91e$var$LENGTH_CODES$1 - 1; code++){
        $2438585bd7e1d91e$var$base_length[code] = length;
        for(n = 0; n < 1 << $2438585bd7e1d91e$var$extra_lbits[code]; n++)$2438585bd7e1d91e$var$_length_code[length++] = code;
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */ $2438585bd7e1d91e$var$_length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */ dist = 0;
    for(code = 0; code < 16; code++){
        $2438585bd7e1d91e$var$base_dist[code] = dist;
        for(n = 0; n < 1 << $2438585bd7e1d91e$var$extra_dbits[code]; n++)$2438585bd7e1d91e$var$_dist_code[dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */ 
    for(; code < $2438585bd7e1d91e$var$D_CODES$1; code++){
        $2438585bd7e1d91e$var$base_dist[code] = dist << 7;
        for(n = 0; n < 1 << $2438585bd7e1d91e$var$extra_dbits[code] - 7; n++)$2438585bd7e1d91e$var$_dist_code[256 + dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    /* Construct the codes of the static literal tree */ for(bits = 0; bits <= $2438585bd7e1d91e$var$MAX_BITS$1; bits++)bl_count[bits] = 0;
    n = 0;
    while(n <= 143){
        $2438585bd7e1d91e$var$static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        $2438585bd7e1d91e$var$static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        $2438585bd7e1d91e$var$static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        $2438585bd7e1d91e$var$static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */ $2438585bd7e1d91e$var$gen_codes($2438585bd7e1d91e$var$static_ltree, $2438585bd7e1d91e$var$L_CODES$1 + 1, bl_count);
    /* The static distance tree is trivial: */ for(n = 0; n < $2438585bd7e1d91e$var$D_CODES$1; n++){
        $2438585bd7e1d91e$var$static_dtree[n * 2 + 1] = 5;
        $2438585bd7e1d91e$var$static_dtree[n * 2] = $2438585bd7e1d91e$var$bi_reverse(n, 5);
    }
    // Now data ready and we can init static trees
    $2438585bd7e1d91e$var$static_l_desc = new $2438585bd7e1d91e$var$StaticTreeDesc($2438585bd7e1d91e$var$static_ltree, $2438585bd7e1d91e$var$extra_lbits, $2438585bd7e1d91e$var$LITERALS$1 + 1, $2438585bd7e1d91e$var$L_CODES$1, $2438585bd7e1d91e$var$MAX_BITS$1);
    $2438585bd7e1d91e$var$static_d_desc = new $2438585bd7e1d91e$var$StaticTreeDesc($2438585bd7e1d91e$var$static_dtree, $2438585bd7e1d91e$var$extra_dbits, 0, $2438585bd7e1d91e$var$D_CODES$1, $2438585bd7e1d91e$var$MAX_BITS$1);
    $2438585bd7e1d91e$var$static_bl_desc = new $2438585bd7e1d91e$var$StaticTreeDesc(new Array(0), $2438585bd7e1d91e$var$extra_blbits, 0, $2438585bd7e1d91e$var$BL_CODES$1, $2438585bd7e1d91e$var$MAX_BL_BITS);
//static_init_done = true;
};
/* ===========================================================================
 * Initialize a new block.
 */ const $2438585bd7e1d91e$var$init_block = (s)=>{
    let n; /* iterates over tree elements */ 
    /* Initialize the trees. */ for(n = 0; n < $2438585bd7e1d91e$var$L_CODES$1; n++)s.dyn_ltree[n * 2] = 0;
    for(n = 0; n < $2438585bd7e1d91e$var$D_CODES$1; n++)s.dyn_dtree[n * 2] = 0;
    for(n = 0; n < $2438585bd7e1d91e$var$BL_CODES$1; n++)s.bl_tree[n * 2] = 0;
    s.dyn_ltree[$2438585bd7e1d91e$var$END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.sym_next = s.matches = 0;
};
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */ const $2438585bd7e1d91e$var$bi_windup = (s)=>{
    if (s.bi_valid > 8) $2438585bd7e1d91e$var$put_short(s, s.bi_buf);
    else if (s.bi_valid > 0) //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
    s.bi_buf = 0;
    s.bi_valid = 0;
};
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */ const $2438585bd7e1d91e$var$smaller = (tree, n, m, depth)=>{
    const _n2 = n * 2;
    const _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
};
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */ const $2438585bd7e1d91e$var$pqdownheap = (s, tree, k)=>{
    //    deflate_state *s;
    //    ct_data *tree;  /* the tree to restore */
    //    int k;               /* node to move down */
    const v = s.heap[k];
    let j = k << 1; /* left son of k */ 
    while(j <= s.heap_len){
        /* Set j to the smallest of the two sons: */ if (j < s.heap_len && $2438585bd7e1d91e$var$smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
        /* Exit if v is smaller than both sons */ if ($2438585bd7e1d91e$var$smaller(tree, v, s.heap[j], s.depth)) break;
        /* Exchange v with the smallest son */ s.heap[k] = s.heap[j];
        k = j;
        /* And continue down the tree, setting j to the left son of k */ j <<= 1;
    }
    s.heap[k] = v;
};
// inlined manually
// const SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */ const $2438585bd7e1d91e$var$compress_block = (s, ltree, dtree)=>{
    //    deflate_state *s;
    //    const ct_data *ltree; /* literal tree */
    //    const ct_data *dtree; /* distance tree */
    let dist; /* distance of matched string */ 
    let lc; /* match length or unmatched char (if dist == 0) */ 
    let sx = 0; /* running index in sym_buf */ 
    let code; /* the code to send */ 
    let extra; /* number of extra bits to send */ 
    if (s.sym_next !== 0) do {
        dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
        dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
        lc = s.pending_buf[s.sym_buf + sx++];
        if (dist === 0) $2438585bd7e1d91e$var$send_code(s, lc, ltree); /* send a literal byte */ 
        else {
            /* Here, lc is the match length - MIN_MATCH */ code = $2438585bd7e1d91e$var$_length_code[lc];
            $2438585bd7e1d91e$var$send_code(s, code + $2438585bd7e1d91e$var$LITERALS$1 + 1, ltree); /* send the length code */ 
            extra = $2438585bd7e1d91e$var$extra_lbits[code];
            if (extra !== 0) {
                lc -= $2438585bd7e1d91e$var$base_length[code];
                $2438585bd7e1d91e$var$send_bits(s, lc, extra); /* send the extra length bits */ 
            }
            dist--; /* dist is now the match distance - 1 */ 
            code = $2438585bd7e1d91e$var$d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
            $2438585bd7e1d91e$var$send_code(s, code, dtree); /* send the distance code */ 
            extra = $2438585bd7e1d91e$var$extra_dbits[code];
            if (extra !== 0) {
                dist -= $2438585bd7e1d91e$var$base_dist[code];
                $2438585bd7e1d91e$var$send_bits(s, dist, extra); /* send the extra distance bits */ 
            }
        } /* literal or match pair ? */ 
    /* Check that the overlay between pending_buf and sym_buf is ok: */ //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
    }while (sx < s.sym_next);
    $2438585bd7e1d91e$var$send_code(s, $2438585bd7e1d91e$var$END_BLOCK, ltree);
};
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */ const $2438585bd7e1d91e$var$build_tree = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc; /* the tree descriptor */
    const tree = desc.dyn_tree;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const elems = desc.stat_desc.elems;
    let n, m; /* iterate over heap elements */ 
    let max_code = -1; /* largest code with non zero frequency */ 
    let node; /* new node being created */ 
    /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */ s.heap_len = 0;
    s.heap_max = $2438585bd7e1d91e$var$HEAP_SIZE$1;
    for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
    } else tree[n * 2 + 1] = 0;
    /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */ while(s.heap_len < 2){
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) s.static_len -= stree[node * 2 + 1] /*.Len*/ ;
    /* node is 0 or 1 so it does not have extra bits */ }
    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */ for(n = s.heap_len >> 1 /*int /2*/ ; n >= 1; n--)$2438585bd7e1d91e$var$pqdownheap(s, tree, n);
    /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */ node = elems; /* next internal node of the tree */ 
    do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/ n = s.heap[1 /*SMALLEST*/ ];
        s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
        $2438585bd7e1d91e$var$pqdownheap(s, tree, 1 /*SMALLEST*/ );
        /***/ m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */ 
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */ 
        s.heap[--s.heap_max] = m;
        /* Create a new node father of n and m */ tree[node * 2] = tree[n * 2] + tree[m * 2] /*.Freq*/ ;
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        /* and insert the new node in the heap */ s.heap[1 /*SMALLEST*/ ] = node++;
        $2438585bd7e1d91e$var$pqdownheap(s, tree, 1 /*SMALLEST*/ );
    }while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];
    /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */ $2438585bd7e1d91e$var$gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */ $2438585bd7e1d91e$var$gen_codes(tree, max_code, s.bl_count);
};
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */ const $2438585bd7e1d91e$var$scan_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree;   /* the tree to be scanned */
    //    int max_code;    /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 0xffff; /* guard */ 
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) s.bl_tree[curlen * 2] += count;
        else if (curlen !== 0) {
            if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
            s.bl_tree[$2438585bd7e1d91e$var$REP_3_6 * 2]++;
        } else if (count <= 10) s.bl_tree[$2438585bd7e1d91e$var$REPZ_3_10 * 2]++;
        else s.bl_tree[$2438585bd7e1d91e$var$REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */ const $2438585bd7e1d91e$var$send_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree; /* the tree to be scanned */
    //    int max_code;       /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    /* tree[max_code+1].Len = -1; */ /* guard already set */ if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) do $2438585bd7e1d91e$var$send_code(s, curlen, s.bl_tree);
        while (--count !== 0);
        else if (curlen !== 0) {
            if (curlen !== prevlen) {
                $2438585bd7e1d91e$var$send_code(s, curlen, s.bl_tree);
                count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            $2438585bd7e1d91e$var$send_code(s, $2438585bd7e1d91e$var$REP_3_6, s.bl_tree);
            $2438585bd7e1d91e$var$send_bits(s, count - 3, 2);
        } else if (count <= 10) {
            $2438585bd7e1d91e$var$send_code(s, $2438585bd7e1d91e$var$REPZ_3_10, s.bl_tree);
            $2438585bd7e1d91e$var$send_bits(s, count - 3, 3);
        } else {
            $2438585bd7e1d91e$var$send_code(s, $2438585bd7e1d91e$var$REPZ_11_138, s.bl_tree);
            $2438585bd7e1d91e$var$send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */ const $2438585bd7e1d91e$var$build_bl_tree = (s)=>{
    let max_blindex; /* index of last bit length code of non zero freq */ 
    /* Determine the bit length frequencies for literal and distance trees */ $2438585bd7e1d91e$var$scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    $2438585bd7e1d91e$var$scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */ $2438585bd7e1d91e$var$build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */ for(max_blindex = $2438585bd7e1d91e$var$BL_CODES$1 - 1; max_blindex >= 3; max_blindex--){
        if (s.bl_tree[$2438585bd7e1d91e$var$bl_order[max_blindex] * 2 + 1] !== 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */ s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));
    return max_blindex;
};
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */ const $2438585bd7e1d91e$var$send_all_trees = (s, lcodes, dcodes, blcodes)=>{
    //    deflate_state *s;
    //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
    let rank; /* index in bl_order */ 
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    $2438585bd7e1d91e$var$send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */ 
    $2438585bd7e1d91e$var$send_bits(s, dcodes - 1, 5);
    $2438585bd7e1d91e$var$send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */ 
    for(rank = 0; rank < blcodes; rank++)//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    $2438585bd7e1d91e$var$send_bits(s, s.bl_tree[$2438585bd7e1d91e$var$bl_order[rank] * 2 + 1], 3);
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    $2438585bd7e1d91e$var$send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */ 
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    $2438585bd7e1d91e$var$send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */ 
//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */ const $2438585bd7e1d91e$var$detect_data_type = (s)=>{
    /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */ let block_mask = 0xf3ffc07f;
    let n;
    /* Check for non-textual ("block-listed") bytes. */ for(n = 0; n <= 31; n++, block_mask >>>= 1){
        if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) return $2438585bd7e1d91e$var$Z_BINARY;
    }
    /* Check for textual ("allow-listed") bytes. */ if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return $2438585bd7e1d91e$var$Z_TEXT;
    for(n = 32; n < $2438585bd7e1d91e$var$LITERALS$1; n++){
        if (s.dyn_ltree[n * 2] !== 0) return $2438585bd7e1d91e$var$Z_TEXT;
    }
    /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */ return $2438585bd7e1d91e$var$Z_BINARY;
};
let $2438585bd7e1d91e$var$static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */ const $2438585bd7e1d91e$var$_tr_init$1 = (s)=>{
    if (!$2438585bd7e1d91e$var$static_init_done) {
        $2438585bd7e1d91e$var$tr_static_init();
        $2438585bd7e1d91e$var$static_init_done = true;
    }
    s.l_desc = new $2438585bd7e1d91e$var$TreeDesc(s.dyn_ltree, $2438585bd7e1d91e$var$static_l_desc);
    s.d_desc = new $2438585bd7e1d91e$var$TreeDesc(s.dyn_dtree, $2438585bd7e1d91e$var$static_d_desc);
    s.bl_desc = new $2438585bd7e1d91e$var$TreeDesc(s.bl_tree, $2438585bd7e1d91e$var$static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */ $2438585bd7e1d91e$var$init_block(s);
};
/* ===========================================================================
 * Send a stored block
 */ const $2438585bd7e1d91e$var$_tr_stored_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    $2438585bd7e1d91e$var$send_bits(s, ($2438585bd7e1d91e$var$STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */ 
    $2438585bd7e1d91e$var$bi_windup(s); /* align on byte boundary */ 
    $2438585bd7e1d91e$var$put_short(s, stored_len);
    $2438585bd7e1d91e$var$put_short(s, ~stored_len);
    if (stored_len) s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
    s.pending += stored_len;
};
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */ const $2438585bd7e1d91e$var$_tr_align$1 = (s)=>{
    $2438585bd7e1d91e$var$send_bits(s, $2438585bd7e1d91e$var$STATIC_TREES << 1, 3);
    $2438585bd7e1d91e$var$send_code(s, $2438585bd7e1d91e$var$END_BLOCK, $2438585bd7e1d91e$var$static_ltree);
    $2438585bd7e1d91e$var$bi_flush(s);
};
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */ const $2438585bd7e1d91e$var$_tr_flush_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block, or NULL if too old */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    let opt_lenb, static_lenb; /* opt_len and static_len in bytes */ 
    let max_blindex = 0; /* index of last bit length code of non zero freq */ 
    /* Build the Huffman trees unless a stored block is forced */ if (s.level > 0) {
        /* Check if the file is binary or text */ if (s.strm.data_type === $2438585bd7e1d91e$var$Z_UNKNOWN$1) s.strm.data_type = $2438585bd7e1d91e$var$detect_data_type(s);
        /* Construct the literal and distance trees */ $2438585bd7e1d91e$var$build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        $2438585bd7e1d91e$var$build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */ max_blindex = $2438585bd7e1d91e$var$build_bl_tree(s);
        /* Determine the best encoding. Compute the block lengths in bytes. */ opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->sym_next / 3));
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    } else // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */ 
    if (stored_len + 4 <= opt_lenb && buf !== -1) /* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */ $2438585bd7e1d91e$var$_tr_stored_block$1(s, buf, stored_len, last);
    else if (s.strategy === $2438585bd7e1d91e$var$Z_FIXED$1 || static_lenb === opt_lenb) {
        $2438585bd7e1d91e$var$send_bits(s, ($2438585bd7e1d91e$var$STATIC_TREES << 1) + (last ? 1 : 0), 3);
        $2438585bd7e1d91e$var$compress_block(s, $2438585bd7e1d91e$var$static_ltree, $2438585bd7e1d91e$var$static_dtree);
    } else {
        $2438585bd7e1d91e$var$send_bits(s, ($2438585bd7e1d91e$var$DYN_TREES << 1) + (last ? 1 : 0), 3);
        $2438585bd7e1d91e$var$send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        $2438585bd7e1d91e$var$compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */ $2438585bd7e1d91e$var$init_block(s);
    if (last) $2438585bd7e1d91e$var$bi_windup(s);
// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
};
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */ const $2438585bd7e1d91e$var$_tr_tally$1 = (s, dist, lc)=>{
    //    deflate_state *s;
    //    unsigned dist;  /* distance of matched string */
    //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
    s.pending_buf[s.sym_buf + s.sym_next++] = dist;
    s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
    s.pending_buf[s.sym_buf + s.sym_next++] = lc;
    if (dist === 0) /* lc is the unmatched char */ s.dyn_ltree[lc * 2]++;
    else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */ dist--; /* dist = match distance - 1 */ 
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
        s.dyn_ltree[($2438585bd7e1d91e$var$_length_code[lc] + $2438585bd7e1d91e$var$LITERALS$1 + 1) * 2]++;
        s.dyn_dtree[$2438585bd7e1d91e$var$d_code(dist) * 2]++;
    }
    return s.sym_next === s.sym_end;
};
var $2438585bd7e1d91e$var$_tr_init_1 = $2438585bd7e1d91e$var$_tr_init$1;
var $2438585bd7e1d91e$var$_tr_stored_block_1 = $2438585bd7e1d91e$var$_tr_stored_block$1;
var $2438585bd7e1d91e$var$_tr_flush_block_1 = $2438585bd7e1d91e$var$_tr_flush_block$1;
var $2438585bd7e1d91e$var$_tr_tally_1 = $2438585bd7e1d91e$var$_tr_tally$1;
var $2438585bd7e1d91e$var$_tr_align_1 = $2438585bd7e1d91e$var$_tr_align$1;
var $2438585bd7e1d91e$var$trees = {
    _tr_init: $2438585bd7e1d91e$var$_tr_init_1,
    _tr_stored_block: $2438585bd7e1d91e$var$_tr_stored_block_1,
    _tr_flush_block: $2438585bd7e1d91e$var$_tr_flush_block_1,
    _tr_tally: $2438585bd7e1d91e$var$_tr_tally_1,
    _tr_align: $2438585bd7e1d91e$var$_tr_align_1
};
// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const $2438585bd7e1d91e$var$adler32 = (adler, buf, len, pos)=>{
    let s1 = adler & 0xffff | 0, s2 = adler >>> 16 & 0xffff | 0, n = 0;
    while(len !== 0){
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
        }while (--n);
        s1 %= 65521;
        s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
};
var $2438585bd7e1d91e$var$adler32_1 = $2438585bd7e1d91e$var$adler32;
// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
const $2438585bd7e1d91e$var$makeTable = ()=>{
    let c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k = 0; k < 8; k++)c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
        table[n] = c;
    }
    return table;
};
// Create table on load. Just 255 signed longs. Not a problem.
const $2438585bd7e1d91e$var$crcTable = new Uint32Array($2438585bd7e1d91e$var$makeTable());
const $2438585bd7e1d91e$var$crc32 = (crc, buf, len, pos)=>{
    const t = $2438585bd7e1d91e$var$crcTable;
    const end = pos + len;
    crc ^= -1;
    for(let i = pos; i < end; i++)crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    return crc ^ -1; // >>> 0;
};
var $2438585bd7e1d91e$var$crc32_1 = $2438585bd7e1d91e$var$crc32;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var $2438585bd7e1d91e$var$messages = {
    2: 'need dictionary',
    /* Z_NEED_DICT       2  */ 1: 'stream end',
    /* Z_STREAM_END      1  */ 0: '',
    /* Z_OK              0  */ '-1': 'file error',
    /* Z_ERRNO         (-1) */ '-2': 'stream error',
    /* Z_STREAM_ERROR  (-2) */ '-3': 'data error',
    /* Z_DATA_ERROR    (-3) */ '-4': 'insufficient memory',
    /* Z_MEM_ERROR     (-4) */ '-5': 'buffer error',
    /* Z_BUF_ERROR     (-5) */ '-6': 'incompatible version' /* Z_VERSION_ERROR (-6) */ 
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var $2438585bd7e1d91e$var$constants$2 = {
    /* Allowed flush values; see deflate() and inflate() below for details */ Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */ Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */ Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */ Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */ Z_DEFLATED: 8
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const { _tr_init: $2438585bd7e1d91e$var$_tr_init, _tr_stored_block: $2438585bd7e1d91e$var$_tr_stored_block, _tr_flush_block: $2438585bd7e1d91e$var$_tr_flush_block, _tr_tally: $2438585bd7e1d91e$var$_tr_tally, _tr_align: $2438585bd7e1d91e$var$_tr_align } = $2438585bd7e1d91e$var$trees;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: $2438585bd7e1d91e$var$Z_NO_FLUSH$2, Z_PARTIAL_FLUSH: $2438585bd7e1d91e$var$Z_PARTIAL_FLUSH, Z_FULL_FLUSH: $2438585bd7e1d91e$var$Z_FULL_FLUSH$1, Z_FINISH: $2438585bd7e1d91e$var$Z_FINISH$3, Z_BLOCK: $2438585bd7e1d91e$var$Z_BLOCK$1, Z_OK: $2438585bd7e1d91e$var$Z_OK$3, Z_STREAM_END: $2438585bd7e1d91e$var$Z_STREAM_END$3, Z_STREAM_ERROR: $2438585bd7e1d91e$var$Z_STREAM_ERROR$2, Z_DATA_ERROR: $2438585bd7e1d91e$var$Z_DATA_ERROR$2, Z_BUF_ERROR: $2438585bd7e1d91e$var$Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: $2438585bd7e1d91e$var$Z_DEFAULT_COMPRESSION$1, Z_FILTERED: $2438585bd7e1d91e$var$Z_FILTERED, Z_HUFFMAN_ONLY: $2438585bd7e1d91e$var$Z_HUFFMAN_ONLY, Z_RLE: $2438585bd7e1d91e$var$Z_RLE, Z_FIXED: $2438585bd7e1d91e$var$Z_FIXED, Z_DEFAULT_STRATEGY: $2438585bd7e1d91e$var$Z_DEFAULT_STRATEGY$1, Z_UNKNOWN: $2438585bd7e1d91e$var$Z_UNKNOWN, Z_DEFLATED: $2438585bd7e1d91e$var$Z_DEFLATED$2 } = $2438585bd7e1d91e$var$constants$2;
/*============================================================================*/ const $2438585bd7e1d91e$var$MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */ const $2438585bd7e1d91e$var$MAX_WBITS$1 = 15;
/* 32K LZ77 window */ const $2438585bd7e1d91e$var$DEF_MEM_LEVEL = 8;
const $2438585bd7e1d91e$var$LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ const $2438585bd7e1d91e$var$LITERALS = 256;
/* number of literal bytes 0..255 */ const $2438585bd7e1d91e$var$L_CODES = $2438585bd7e1d91e$var$LITERALS + 1 + $2438585bd7e1d91e$var$LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ const $2438585bd7e1d91e$var$D_CODES = 30;
/* number of distance codes */ const $2438585bd7e1d91e$var$BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ const $2438585bd7e1d91e$var$HEAP_SIZE = 2 * $2438585bd7e1d91e$var$L_CODES + 1;
/* maximum heap size */ const $2438585bd7e1d91e$var$MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ const $2438585bd7e1d91e$var$MIN_MATCH = 3;
const $2438585bd7e1d91e$var$MAX_MATCH = 258;
const $2438585bd7e1d91e$var$MIN_LOOKAHEAD = $2438585bd7e1d91e$var$MAX_MATCH + $2438585bd7e1d91e$var$MIN_MATCH + 1;
const $2438585bd7e1d91e$var$PRESET_DICT = 0x20;
const $2438585bd7e1d91e$var$INIT_STATE = 42; /* zlib header -> BUSY_STATE */ 
//#ifdef GZIP
const $2438585bd7e1d91e$var$GZIP_STATE = 57; /* gzip header -> BUSY_STATE | EXTRA_STATE */ 
//#endif
const $2438585bd7e1d91e$var$EXTRA_STATE = 69; /* gzip extra block -> NAME_STATE */ 
const $2438585bd7e1d91e$var$NAME_STATE = 73; /* gzip file name -> COMMENT_STATE */ 
const $2438585bd7e1d91e$var$COMMENT_STATE = 91; /* gzip comment -> HCRC_STATE */ 
const $2438585bd7e1d91e$var$HCRC_STATE = 103; /* gzip header CRC -> BUSY_STATE */ 
const $2438585bd7e1d91e$var$BUSY_STATE = 113; /* deflate -> FINISH_STATE */ 
const $2438585bd7e1d91e$var$FINISH_STATE = 666; /* stream complete */ 
const $2438585bd7e1d91e$var$BS_NEED_MORE = 1; /* block not completed, need more input or more output */ 
const $2438585bd7e1d91e$var$BS_BLOCK_DONE = 2; /* block flush performed */ 
const $2438585bd7e1d91e$var$BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */ 
const $2438585bd7e1d91e$var$BS_FINISH_DONE = 4; /* finish done, accept no more input or output */ 
const $2438585bd7e1d91e$var$OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
const $2438585bd7e1d91e$var$err = (strm, errorCode)=>{
    strm.msg = $2438585bd7e1d91e$var$messages[errorCode];
    return errorCode;
};
const $2438585bd7e1d91e$var$rank = (f)=>{
    return f * 2 - (f > 4 ? 9 : 0);
};
const $2438585bd7e1d91e$var$zero = (buf)=>{
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
};
/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */ const $2438585bd7e1d91e$var$slide_hash = (s)=>{
    let n, m;
    let p;
    let wsize = s.w_size;
    n = s.hash_size;
    p = n;
    do {
        m = s.head[--p];
        s.head[p] = m >= wsize ? m - wsize : 0;
    }while (--n);
    n = wsize;
    //#ifndef FASTEST
    p = n;
    do {
        m = s.prev[--p];
        s.prev[p] = m >= wsize ? m - wsize : 0;
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */ }while (--n);
//#endif
};
/* eslint-disable new-cap */ let $2438585bd7e1d91e$var$HASH_ZLIB = (s, prev, data)=>(prev << s.hash_shift ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let $2438585bd7e1d91e$var$HASH = $2438585bd7e1d91e$var$HASH_ZLIB;
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */ const $2438585bd7e1d91e$var$flush_pending = (strm)=>{
    const s = strm.state;
    //_tr_flush_bits(s);
    let len = s.pending;
    if (len > strm.avail_out) len = strm.avail_out;
    if (len === 0) return;
    strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) s.pending_out = 0;
};
const $2438585bd7e1d91e$var$flush_block_only = (s, last)=>{
    $2438585bd7e1d91e$var$_tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    $2438585bd7e1d91e$var$flush_pending(s.strm);
};
const $2438585bd7e1d91e$var$put_byte = (s, b)=>{
    s.pending_buf[s.pending++] = b;
};
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */ const $2438585bd7e1d91e$var$putShortMSB = (s, b)=>{
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
};
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */ const $2438585bd7e1d91e$var$read_buf = (strm, buf, start, size)=>{
    let len = strm.avail_in;
    if (len > size) len = size;
    if (len === 0) return 0;
    strm.avail_in -= len;
    // zmemcpy(buf, strm->next_in, len);
    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
    if (strm.state.wrap === 1) strm.adler = $2438585bd7e1d91e$var$adler32_1(strm.adler, buf, len, start);
    else if (strm.state.wrap === 2) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, buf, len, start);
    strm.next_in += len;
    strm.total_in += len;
    return len;
};
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */ const $2438585bd7e1d91e$var$longest_match = (s, cur_match)=>{
    let chain_length = s.max_chain_length; /* max hash chain length */ 
    let scan = s.strstart; /* current string */ 
    let match; /* matched string */ 
    let len; /* length of current match */ 
    let best_len = s.prev_length; /* best match length so far */ 
    let nice_match = s.nice_match; /* stop if match long enough */ 
    const limit = s.strstart > s.w_size - $2438585bd7e1d91e$var$MIN_LOOKAHEAD ? s.strstart - (s.w_size - $2438585bd7e1d91e$var$MIN_LOOKAHEAD) : 0 /*NIL*/ ;
    const _win = s.window; // shortcut
    const wmask = s.w_mask;
    const prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */ const strend = s.strstart + $2438585bd7e1d91e$var$MAX_MATCH;
    let scan_end1 = _win[scan + best_len - 1];
    let scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    /* Do not waste too much time if we already have a good match: */ if (s.prev_length >= s.good_match) chain_length >>= 2;
    /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */ if (nice_match > s.lookahead) nice_match = s.lookahead;
    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
        /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */ if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
        /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */ scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
        /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */ do ;
        while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
        len = $2438585bd7e1d91e$var$MAX_MATCH - (strend - scan);
        scan = strend - $2438585bd7e1d91e$var$MAX_MATCH;
        if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) break;
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) return best_len;
    return s.lookahead;
};
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */ const $2438585bd7e1d91e$var$fill_window = (s)=>{
    const _w_size = s.w_size;
    let n, more, str;
    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    do {
        more = s.window_size - s.lookahead - s.strstart;
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
        /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */ if (s.strstart >= _w_size + (_w_size - $2438585bd7e1d91e$var$MIN_LOOKAHEAD)) {
            s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */ s.block_start -= _w_size;
            if (s.insert > s.strstart) s.insert = s.strstart;
            $2438585bd7e1d91e$var$slide_hash(s);
            more += _w_size;
        }
        if (s.strm.avail_in === 0) break;
        /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
        n = $2438585bd7e1d91e$var$read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        /* Initialize the hash value now that we have some input: */ if (s.lookahead + s.insert >= $2438585bd7e1d91e$var$MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[str + 1]);
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while(s.insert){
                /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[str + $2438585bd7e1d91e$var$MIN_MATCH - 1]);
                s.prev[str & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = str;
                str++;
                s.insert--;
                if (s.lookahead + s.insert < $2438585bd7e1d91e$var$MIN_MATCH) break;
            }
        }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */ }while (s.lookahead < $2438585bd7e1d91e$var$MIN_LOOKAHEAD && s.strm.avail_in !== 0);
/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */ const $2438585bd7e1d91e$var$deflate_stored = (s, flush)=>{
    /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */ let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
    /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */ let len, left, have, last = 0;
    let used = s.strm.avail_in;
    do {
        /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */ len = 65535 /* MAX_STORED */ ; /* maximum deflate stored block length */ 
        have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
        if (s.strm.avail_out < have) break;
        /* maximum stored block length that will fit in avail_out: */ have = s.strm.avail_out - have;
        left = s.strstart - s.block_start; /* bytes left in window */ 
        if (len > left + s.strm.avail_in) len = left + s.strm.avail_in; /* limit len to the input */ 
        if (len > have) len = have; /* limit len to the output */ 
        /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */ if (len < min_block && (len === 0 && flush !== $2438585bd7e1d91e$var$Z_FINISH$3 || flush === $2438585bd7e1d91e$var$Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) break;
        /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */ last = flush === $2438585bd7e1d91e$var$Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
        $2438585bd7e1d91e$var$_tr_stored_block(s, 0, 0, last);
        /* Replace the lengths in the dummy stored block with len. */ s.pending_buf[s.pending - 4] = len;
        s.pending_buf[s.pending - 3] = len >> 8;
        s.pending_buf[s.pending - 2] = ~len;
        s.pending_buf[s.pending - 1] = ~len >> 8;
        /* Write the stored block header bytes. */ $2438585bd7e1d91e$var$flush_pending(s.strm);
        //#ifdef ZLIB_DEBUG
        //    /* Update debugging counts for the data about to be copied. */
        //    s->compressed_len += len << 3;
        //    s->bits_sent += len << 3;
        //#endif
        /* Copy uncompressed bytes from the window to next_out. */ if (left) {
            if (left > len) left = len;
            //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
            s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
            s.strm.next_out += left;
            s.strm.avail_out -= left;
            s.strm.total_out += left;
            s.block_start += left;
            len -= left;
        }
        /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */ if (len) {
            $2438585bd7e1d91e$var$read_buf(s.strm, s.strm.output, s.strm.next_out, len);
            s.strm.next_out += len;
            s.strm.avail_out -= len;
            s.strm.total_out += len;
        }
    }while (last === 0);
    /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */ used -= s.strm.avail_in; /* number of input bytes directly copied */ 
    if (used) {
        /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */ if (used >= s.w_size) {
            s.matches = 2; /* clear hash */ 
            //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
            s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
            s.strstart = s.w_size;
            s.insert = s.strstart;
        } else {
            if (s.window_size - s.strstart <= used) {
                /* Slide the window down. */ s.strstart -= s.w_size;
                //zmemcpy(s->window, s->window + s->w_size, s->strstart);
                s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
                if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
                if (s.insert > s.strstart) s.insert = s.strstart;
            }
            //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
            s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
            s.strstart += used;
            s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
        }
        s.block_start = s.strstart;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* If the last block was written to next_out, then done. */ if (last) return $2438585bd7e1d91e$var$BS_FINISH_DONE;
    /* If flushing and all input has been consumed, then done. */ if (flush !== $2438585bd7e1d91e$var$Z_NO_FLUSH$2 && flush !== $2438585bd7e1d91e$var$Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) return $2438585bd7e1d91e$var$BS_BLOCK_DONE;
    /* Fill the window with any remaining input. */ have = s.window_size - s.strstart;
    if (s.strm.avail_in > have && s.block_start >= s.w_size) {
        /* Slide the window down. */ s.block_start -= s.w_size;
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
        have += s.w_size; /* more space now */ 
        if (s.insert > s.strstart) s.insert = s.strstart;
    }
    if (have > s.strm.avail_in) have = s.strm.avail_in;
    if (have) {
        $2438585bd7e1d91e$var$read_buf(s.strm, s.window, s.strstart, have);
        s.strstart += have;
        s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */ have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
    /* maximum stored block length that will fit in pending: */ have = s.pending_buf_size - have > 65535 /* MAX_STORED */  ? 65535 /* MAX_STORED */  : s.pending_buf_size - have;
    min_block = have > s.w_size ? s.w_size : have;
    left = s.strstart - s.block_start;
    if (left >= min_block || (left || flush === $2438585bd7e1d91e$var$Z_FINISH$3) && flush !== $2438585bd7e1d91e$var$Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
        len = left > have ? have : left;
        last = flush === $2438585bd7e1d91e$var$Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
        $2438585bd7e1d91e$var$_tr_stored_block(s, s.block_start, len, last);
        s.block_start += len;
        $2438585bd7e1d91e$var$flush_pending(s.strm);
    }
    /* We've done all we can with the available input and output. */ return last ? $2438585bd7e1d91e$var$BS_FINISH_STARTED : $2438585bd7e1d91e$var$BS_NEED_MORE;
};
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */ const $2438585bd7e1d91e$var$deflate_fast = (s, flush)=>{
    let hash_head; /* head of the hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < $2438585bd7e1d91e$var$MIN_LOOKAHEAD) {
            $2438585bd7e1d91e$var$fill_window(s);
            if (s.lookahead < $2438585bd7e1d91e$var$MIN_LOOKAHEAD && flush === $2438585bd7e1d91e$var$Z_NO_FLUSH$2) return $2438585bd7e1d91e$var$BS_NEED_MORE;
            if (s.lookahead === 0) break; /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= $2438585bd7e1d91e$var$MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[s.strstart + $2438585bd7e1d91e$var$MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */ if (hash_head !== 0 /*NIL*/  && s.strstart - hash_head <= s.w_size - $2438585bd7e1d91e$var$MIN_LOOKAHEAD) /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = $2438585bd7e1d91e$var$longest_match(s, hash_head);
        if (s.match_length >= $2438585bd7e1d91e$var$MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, s.strstart - s.match_start, s.match_length - $2438585bd7e1d91e$var$MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */ if (s.match_length <= s.max_lazy_match /*max_insert_length*/  && s.lookahead >= $2438585bd7e1d91e$var$MIN_MATCH) {
                s.match_length--; /* string at strstart already in table */ 
                do {
                    s.strstart++;
                    /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[s.strstart + $2438585bd7e1d91e$var$MIN_MATCH - 1]);
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                /***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */ }while (--s.match_length !== 0);
                s.strstart++;
            } else {
                s.strstart += s.match_length;
                s.match_length = 0;
                s.ins_h = s.window[s.strstart];
                /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[s.strstart + 1]);
            //#if MIN_MATCH != 3
            //                Call UPDATE_HASH() MIN_MATCH-3 more times
            //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */ }
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
            if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
        /***/ }
    }
    s.insert = s.strstart < $2438585bd7e1d91e$var$MIN_MATCH - 1 ? s.strstart : $2438585bd7e1d91e$var$MIN_MATCH - 1;
    if (flush === $2438585bd7e1d91e$var$Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ $2438585bd7e1d91e$var$flush_block_only(s, true);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_FINISH_STARTED;
        /***/ return $2438585bd7e1d91e$var$BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
    /***/ }
    return $2438585bd7e1d91e$var$BS_BLOCK_DONE;
};
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */ const $2438585bd7e1d91e$var$deflate_slow = (s, flush)=>{
    let hash_head; /* head of hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    let max_insert;
    /* Process the input block. */ for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < $2438585bd7e1d91e$var$MIN_LOOKAHEAD) {
            $2438585bd7e1d91e$var$fill_window(s);
            if (s.lookahead < $2438585bd7e1d91e$var$MIN_LOOKAHEAD && flush === $2438585bd7e1d91e$var$Z_NO_FLUSH$2) return $2438585bd7e1d91e$var$BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= $2438585bd7e1d91e$var$MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[s.strstart + $2438585bd7e1d91e$var$MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     */ s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = $2438585bd7e1d91e$var$MIN_MATCH - 1;
        if (hash_head !== 0 /*NIL*/  && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - $2438585bd7e1d91e$var$MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = $2438585bd7e1d91e$var$longest_match(s, hash_head);
            /* longest_match() sets match_start */ if (s.match_length <= 5 && (s.strategy === $2438585bd7e1d91e$var$Z_FILTERED || s.match_length === $2438585bd7e1d91e$var$MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ )) /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */ s.match_length = $2438585bd7e1d91e$var$MIN_MATCH - 1;
        }
        /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */ if (s.prev_length >= $2438585bd7e1d91e$var$MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - $2438585bd7e1d91e$var$MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - $2438585bd7e1d91e$var$MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */ s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[s.strstart + $2438585bd7e1d91e$var$MIN_MATCH - 1]);
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
            /***/ }
            while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = $2438585bd7e1d91e$var$MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
                /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
                if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
            /***/ }
        } else if (s.match_available) {
            /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) /*** FLUSH_BLOCK_ONLY(s, 0) ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
        } else {
            /* There is no previous match to compare with, wait for
       * the next step to decide.
       */ s.match_available = 1;
            s.strstart++;
            s.lookahead--;
        }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
    }
    s.insert = s.strstart < $2438585bd7e1d91e$var$MIN_MATCH - 1 ? s.strstart : $2438585bd7e1d91e$var$MIN_MATCH - 1;
    if (flush === $2438585bd7e1d91e$var$Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ $2438585bd7e1d91e$var$flush_block_only(s, true);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_FINISH_STARTED;
        /***/ return $2438585bd7e1d91e$var$BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
    /***/ }
    return $2438585bd7e1d91e$var$BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */ const $2438585bd7e1d91e$var$deflate_rle = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    let prev; /* byte at distance one to match */ 
    let scan, strend; /* scan goes up to strend for length of run */ 
    const _win = s.window;
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */ if (s.lookahead <= $2438585bd7e1d91e$var$MAX_MATCH) {
            $2438585bd7e1d91e$var$fill_window(s);
            if (s.lookahead <= $2438585bd7e1d91e$var$MAX_MATCH && flush === $2438585bd7e1d91e$var$Z_NO_FLUSH$2) return $2438585bd7e1d91e$var$BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* See how many times the previous byte repeats */ s.match_length = 0;
        if (s.lookahead >= $2438585bd7e1d91e$var$MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                strend = s.strstart + $2438585bd7e1d91e$var$MAX_MATCH;
                do ;
                while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
                s.match_length = $2438585bd7e1d91e$var$MAX_MATCH - (strend - scan);
                if (s.match_length > s.lookahead) s.match_length = s.lookahead;
            }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */ if (s.match_length >= $2438585bd7e1d91e$var$MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);
            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, 1, s.match_length - $2438585bd7e1d91e$var$MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
            if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === $2438585bd7e1d91e$var$Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ $2438585bd7e1d91e$var$flush_block_only(s, true);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_FINISH_STARTED;
        /***/ return $2438585bd7e1d91e$var$BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
    /***/ }
    return $2438585bd7e1d91e$var$BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */ const $2438585bd7e1d91e$var$deflate_huff = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we have a literal to write. */ if (s.lookahead === 0) {
            $2438585bd7e1d91e$var$fill_window(s);
            if (s.lookahead === 0) {
                if (flush === $2438585bd7e1d91e$var$Z_NO_FLUSH$2) return $2438585bd7e1d91e$var$BS_NEED_MORE;
                break; /* flush the current block */ 
            }
        }
        /* Output a literal byte */ s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = $2438585bd7e1d91e$var$_tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
            if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === $2438585bd7e1d91e$var$Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ $2438585bd7e1d91e$var$flush_block_only(s, true);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_FINISH_STARTED;
        /***/ return $2438585bd7e1d91e$var$BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ $2438585bd7e1d91e$var$flush_block_only(s, false);
        if (s.strm.avail_out === 0) return $2438585bd7e1d91e$var$BS_NEED_MORE;
    /***/ }
    return $2438585bd7e1d91e$var$BS_BLOCK_DONE;
};
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */ function $2438585bd7e1d91e$var$Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
const $2438585bd7e1d91e$var$configuration_table = [
    /*      good lazy nice chain */ new $2438585bd7e1d91e$var$Config(0, 0, 0, 0, $2438585bd7e1d91e$var$deflate_stored),
    /* 0 store only */ new $2438585bd7e1d91e$var$Config(4, 4, 8, 4, $2438585bd7e1d91e$var$deflate_fast),
    /* 1 max speed, no lazy matches */ new $2438585bd7e1d91e$var$Config(4, 5, 16, 8, $2438585bd7e1d91e$var$deflate_fast),
    /* 2 */ new $2438585bd7e1d91e$var$Config(4, 6, 32, 32, $2438585bd7e1d91e$var$deflate_fast),
    /* 3 */ new $2438585bd7e1d91e$var$Config(4, 4, 16, 16, $2438585bd7e1d91e$var$deflate_slow),
    /* 4 lazy matches */ new $2438585bd7e1d91e$var$Config(8, 16, 32, 32, $2438585bd7e1d91e$var$deflate_slow),
    /* 5 */ new $2438585bd7e1d91e$var$Config(8, 16, 128, 128, $2438585bd7e1d91e$var$deflate_slow),
    /* 6 */ new $2438585bd7e1d91e$var$Config(8, 32, 128, 256, $2438585bd7e1d91e$var$deflate_slow),
    /* 7 */ new $2438585bd7e1d91e$var$Config(32, 128, 258, 1024, $2438585bd7e1d91e$var$deflate_slow),
    /* 8 */ new $2438585bd7e1d91e$var$Config(32, 258, 258, 4096, $2438585bd7e1d91e$var$deflate_slow)
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */ const $2438585bd7e1d91e$var$lm_init = (s)=>{
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/ $2438585bd7e1d91e$var$zero(s.head); // Fill with NIL (= 0);
    /* Set the default configuration parameters:
   */ s.max_lazy_match = $2438585bd7e1d91e$var$configuration_table[s.level].max_lazy;
    s.good_match = $2438585bd7e1d91e$var$configuration_table[s.level].good_length;
    s.nice_match = $2438585bd7e1d91e$var$configuration_table[s.level].nice_length;
    s.max_chain_length = $2438585bd7e1d91e$var$configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = $2438585bd7e1d91e$var$MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
};
function $2438585bd7e1d91e$var$DeflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.status = 0; /* as the name implies */ 
    this.pending_buf = null; /* output still pending */ 
    this.pending_buf_size = 0; /* size of pending_buf */ 
    this.pending_out = 0; /* next pending byte to output to the stream */ 
    this.pending = 0; /* nb of bytes in the pending buffer */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.gzhead = null; /* gzip header information to write */ 
    this.gzindex = 0; /* where in extra, name, or comment */ 
    this.method = $2438585bd7e1d91e$var$Z_DEFLATED$2; /* can only be DEFLATED */ 
    this.last_flush = -1; /* value of flush param for previous deflate call */ 
    this.w_size = 0; /* LZ77 window size (32K by default) */ 
    this.w_bits = 0; /* log2(w_size)  (8..16) */ 
    this.w_mask = 0; /* w_size - 1 */ 
    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */ this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */ this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */ this.head = null; /* Heads of the hash chains or NIL. */ 
    this.ins_h = 0; /* hash index of string to be inserted */ 
    this.hash_size = 0; /* number of elements in hash table */ 
    this.hash_bits = 0; /* log2(hash_size) */ 
    this.hash_mask = 0; /* hash_size-1 */ 
    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */ this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */ this.match_length = 0; /* length of best match */ 
    this.prev_match = 0; /* previous match */ 
    this.match_available = 0; /* set if previous match exists */ 
    this.strstart = 0; /* start of string to insert */ 
    this.match_start = 0; /* start of matching string */ 
    this.lookahead = 0; /* number of valid bytes ahead in window */ 
    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */ this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */ this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */ this.level = 0; /* compression level (1..9) */ 
    this.strategy = 0; /* favor or force Huffman coding*/ 
    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */ this.nice_match = 0; /* Stop searching when current match exceeds this */ 
    /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree = new Uint16Array($2438585bd7e1d91e$var$HEAP_SIZE * 2);
    this.dyn_dtree = new Uint16Array((2 * $2438585bd7e1d91e$var$D_CODES + 1) * 2);
    this.bl_tree = new Uint16Array((2 * $2438585bd7e1d91e$var$BL_CODES + 1) * 2);
    $2438585bd7e1d91e$var$zero(this.dyn_ltree);
    $2438585bd7e1d91e$var$zero(this.dyn_dtree);
    $2438585bd7e1d91e$var$zero(this.bl_tree);
    this.l_desc = null; /* desc. for literal tree */ 
    this.d_desc = null; /* desc. for distance tree */ 
    this.bl_desc = null; /* desc. for bit length tree */ 
    //ush bl_count[MAX_BITS+1];
    this.bl_count = new Uint16Array($2438585bd7e1d91e$var$MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new Uint16Array(2 * $2438585bd7e1d91e$var$L_CODES + 1); /* heap used to build the Huffman trees */ 
    $2438585bd7e1d91e$var$zero(this.heap);
    this.heap_len = 0; /* number of elements in the heap */ 
    this.heap_max = 0; /* element of largest frequency */ 
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */ this.depth = new Uint16Array(2 * $2438585bd7e1d91e$var$L_CODES + 1); //uch depth[2*L_CODES+1];
    $2438585bd7e1d91e$var$zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
   */ this.sym_buf = 0; /* buffer for distances and literals/lengths */ 
    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */ this.sym_next = 0; /* running index in sym_buf */ 
    this.sym_end = 0; /* symbol table full when sym_next reaches this */ 
    this.opt_len = 0; /* bit length of current block with optimal trees */ 
    this.static_len = 0; /* bit length of current block with static trees */ 
    this.matches = 0; /* number of string matches in current block */ 
    this.insert = 0; /* bytes at end of window left to insert */ 
    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */ this.bi_valid = 0;
/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */ }
/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */ const $2438585bd7e1d91e$var$deflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const s = strm.state;
    if (!s || s.strm !== strm || s.status !== $2438585bd7e1d91e$var$INIT_STATE && //#ifdef GZIP
    s.status !== $2438585bd7e1d91e$var$GZIP_STATE && //#endif
    s.status !== $2438585bd7e1d91e$var$EXTRA_STATE && s.status !== $2438585bd7e1d91e$var$NAME_STATE && s.status !== $2438585bd7e1d91e$var$COMMENT_STATE && s.status !== $2438585bd7e1d91e$var$HCRC_STATE && s.status !== $2438585bd7e1d91e$var$BUSY_STATE && s.status !== $2438585bd7e1d91e$var$FINISH_STATE) return 1;
    return 0;
};
const $2438585bd7e1d91e$var$deflateResetKeep = (strm)=>{
    if ($2438585bd7e1d91e$var$deflateStateCheck(strm)) return $2438585bd7e1d91e$var$err(strm, $2438585bd7e1d91e$var$Z_STREAM_ERROR$2);
    strm.total_in = strm.total_out = 0;
    strm.data_type = $2438585bd7e1d91e$var$Z_UNKNOWN;
    const s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) s.wrap = -s.wrap;
    s.status = //#ifdef GZIP
    s.wrap === 2 ? $2438585bd7e1d91e$var$GZIP_STATE : //#endif
    s.wrap ? $2438585bd7e1d91e$var$INIT_STATE : $2438585bd7e1d91e$var$BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
     : 1; // adler32(0, Z_NULL, 0)
    s.last_flush = -2;
    $2438585bd7e1d91e$var$_tr_init(s);
    return $2438585bd7e1d91e$var$Z_OK$3;
};
const $2438585bd7e1d91e$var$deflateReset = (strm)=>{
    const ret = $2438585bd7e1d91e$var$deflateResetKeep(strm);
    if (ret === $2438585bd7e1d91e$var$Z_OK$3) $2438585bd7e1d91e$var$lm_init(strm.state);
    return ret;
};
const $2438585bd7e1d91e$var$deflateSetHeader = (strm, head)=>{
    if ($2438585bd7e1d91e$var$deflateStateCheck(strm) || strm.state.wrap !== 2) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$2;
    strm.state.gzhead = head;
    return $2438585bd7e1d91e$var$Z_OK$3;
};
const $2438585bd7e1d91e$var$deflateInit2 = (strm, level, method, windowBits, memLevel, strategy)=>{
    if (!strm) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$2;
    let wrap = 1;
    if (level === $2438585bd7e1d91e$var$Z_DEFAULT_COMPRESSION$1) level = 6;
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap = 2; /* write gzip wrapper instead */ 
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > $2438585bd7e1d91e$var$MAX_MEM_LEVEL || method !== $2438585bd7e1d91e$var$Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > $2438585bd7e1d91e$var$Z_FIXED || windowBits === 8 && wrap !== 1) return $2438585bd7e1d91e$var$err(strm, $2438585bd7e1d91e$var$Z_STREAM_ERROR$2);
    if (windowBits === 8) windowBits = 9;
    /* until 256-byte window bug fixed */ const s = new $2438585bd7e1d91e$var$DeflateState();
    strm.state = s;
    s.strm = strm;
    s.status = $2438585bd7e1d91e$var$INIT_STATE; /* to pass state test in deflateReset() */ 
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + $2438585bd7e1d91e$var$MIN_MATCH - 1) / $2438585bd7e1d91e$var$MIN_MATCH);
    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);
    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */
    s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */ 
    /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */ s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new Uint8Array(s.pending_buf_size);
    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->sym_buf = s->pending_buf + s->lit_bufsize;
    s.sym_buf = s.lit_bufsize;
    //s->sym_end = (s->lit_bufsize - 1) * 3;
    s.sym_end = (s.lit_bufsize - 1) * 3;
    /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */ s.level = level;
    s.strategy = strategy;
    s.method = method;
    return $2438585bd7e1d91e$var$deflateReset(strm);
};
const $2438585bd7e1d91e$var$deflateInit = (strm, level)=>{
    return $2438585bd7e1d91e$var$deflateInit2(strm, level, $2438585bd7e1d91e$var$Z_DEFLATED$2, $2438585bd7e1d91e$var$MAX_WBITS$1, $2438585bd7e1d91e$var$DEF_MEM_LEVEL, $2438585bd7e1d91e$var$Z_DEFAULT_STRATEGY$1);
};
/* ========================================================================= */ const $2438585bd7e1d91e$var$deflate$2 = (strm, flush)=>{
    if ($2438585bd7e1d91e$var$deflateStateCheck(strm) || flush > $2438585bd7e1d91e$var$Z_BLOCK$1 || flush < 0) return strm ? $2438585bd7e1d91e$var$err(strm, $2438585bd7e1d91e$var$Z_STREAM_ERROR$2) : $2438585bd7e1d91e$var$Z_STREAM_ERROR$2;
    const s = strm.state;
    if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === $2438585bd7e1d91e$var$FINISH_STATE && flush !== $2438585bd7e1d91e$var$Z_FINISH$3) return $2438585bd7e1d91e$var$err(strm, strm.avail_out === 0 ? $2438585bd7e1d91e$var$Z_BUF_ERROR$1 : $2438585bd7e1d91e$var$Z_STREAM_ERROR$2);
    const old_flush = s.last_flush;
    s.last_flush = flush;
    /* Flush as much pending output as possible */ if (s.pending !== 0) {
        $2438585bd7e1d91e$var$flush_pending(strm);
        if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */ s.last_flush = -1;
            return $2438585bd7e1d91e$var$Z_OK$3;
        }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */ } else if (strm.avail_in === 0 && $2438585bd7e1d91e$var$rank(flush) <= $2438585bd7e1d91e$var$rank(old_flush) && flush !== $2438585bd7e1d91e$var$Z_FINISH$3) return $2438585bd7e1d91e$var$err(strm, $2438585bd7e1d91e$var$Z_BUF_ERROR$1);
    /* User must not provide more input after the first FINISH: */ if (s.status === $2438585bd7e1d91e$var$FINISH_STATE && strm.avail_in !== 0) return $2438585bd7e1d91e$var$err(strm, $2438585bd7e1d91e$var$Z_BUF_ERROR$1);
    /* Write the header */ if (s.status === $2438585bd7e1d91e$var$INIT_STATE && s.wrap === 0) s.status = $2438585bd7e1d91e$var$BUSY_STATE;
    if (s.status === $2438585bd7e1d91e$var$INIT_STATE) {
        /* zlib header */ let header = $2438585bd7e1d91e$var$Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;
        if (s.strategy >= $2438585bd7e1d91e$var$Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
        else if (s.level < 6) level_flags = 1;
        else if (s.level === 6) level_flags = 2;
        else level_flags = 3;
        header |= level_flags << 6;
        if (s.strstart !== 0) header |= $2438585bd7e1d91e$var$PRESET_DICT;
        header += 31 - header % 31;
        $2438585bd7e1d91e$var$putShortMSB(s, header);
        /* Save the adler32 of the preset dictionary: */ if (s.strstart !== 0) {
            $2438585bd7e1d91e$var$putShortMSB(s, strm.adler >>> 16);
            $2438585bd7e1d91e$var$putShortMSB(s, strm.adler & 0xffff);
        }
        strm.adler = 1; // adler32(0L, Z_NULL, 0);
        s.status = $2438585bd7e1d91e$var$BUSY_STATE;
        /* Compression must start with an empty pending buffer */ $2438585bd7e1d91e$var$flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return $2438585bd7e1d91e$var$Z_OK$3;
        }
    }
    //#ifdef GZIP
    if (s.status === $2438585bd7e1d91e$var$GZIP_STATE) {
        /* gzip header */ strm.adler = 0; //crc32(0L, Z_NULL, 0);
        $2438585bd7e1d91e$var$put_byte(s, 31);
        $2438585bd7e1d91e$var$put_byte(s, 139);
        $2438585bd7e1d91e$var$put_byte(s, 8);
        if (!s.gzhead) {
            $2438585bd7e1d91e$var$put_byte(s, 0);
            $2438585bd7e1d91e$var$put_byte(s, 0);
            $2438585bd7e1d91e$var$put_byte(s, 0);
            $2438585bd7e1d91e$var$put_byte(s, 0);
            $2438585bd7e1d91e$var$put_byte(s, 0);
            $2438585bd7e1d91e$var$put_byte(s, s.level === 9 ? 2 : s.strategy >= $2438585bd7e1d91e$var$Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            $2438585bd7e1d91e$var$put_byte(s, $2438585bd7e1d91e$var$OS_CODE);
            s.status = $2438585bd7e1d91e$var$BUSY_STATE;
            /* Compression must start with an empty pending buffer */ $2438585bd7e1d91e$var$flush_pending(strm);
            if (s.pending !== 0) {
                s.last_flush = -1;
                return $2438585bd7e1d91e$var$Z_OK$3;
            }
        } else {
            $2438585bd7e1d91e$var$put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
            $2438585bd7e1d91e$var$put_byte(s, s.gzhead.time & 0xff);
            $2438585bd7e1d91e$var$put_byte(s, s.gzhead.time >> 8 & 0xff);
            $2438585bd7e1d91e$var$put_byte(s, s.gzhead.time >> 16 & 0xff);
            $2438585bd7e1d91e$var$put_byte(s, s.gzhead.time >> 24 & 0xff);
            $2438585bd7e1d91e$var$put_byte(s, s.level === 9 ? 2 : s.strategy >= $2438585bd7e1d91e$var$Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            $2438585bd7e1d91e$var$put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
                $2438585bd7e1d91e$var$put_byte(s, s.gzhead.extra.length & 0xff);
                $2438585bd7e1d91e$var$put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
            }
            if (s.gzhead.hcrc) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending, 0);
            s.gzindex = 0;
            s.status = $2438585bd7e1d91e$var$EXTRA_STATE;
        }
    }
    if (s.status === $2438585bd7e1d91e$var$EXTRA_STATE) {
        if (s.gzhead.extra /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
            while(s.pending + left > s.pending_buf_size){
                let copy = s.pending_buf_size - s.pending;
                // zmemcpy(s.pending_buf + s.pending,
                //    s.gzhead.extra + s.gzindex, copy);
                s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
                s.pending = s.pending_buf_size;
                //--- HCRC_UPDATE(beg) ---//
                if (s.gzhead.hcrc && s.pending > beg) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                //---//
                s.gzindex += copy;
                $2438585bd7e1d91e$var$flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return $2438585bd7e1d91e$var$Z_OK$3;
                }
                beg = 0;
                left -= copy;
            }
            // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
            //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
            let gzhead_extra = new Uint8Array(s.gzhead.extra);
            // zmemcpy(s->pending_buf + s->pending,
            //     s->gzhead->extra + s->gzindex, left);
            s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
            s.pending += left;
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = $2438585bd7e1d91e$var$NAME_STATE;
    }
    if (s.status === $2438585bd7e1d91e$var$NAME_STATE) {
        if (s.gzhead.name /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    $2438585bd7e1d91e$var$flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return $2438585bd7e1d91e$var$Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                $2438585bd7e1d91e$var$put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = $2438585bd7e1d91e$var$COMMENT_STATE;
    }
    if (s.status === $2438585bd7e1d91e$var$COMMENT_STATE) {
        if (s.gzhead.comment /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    $2438585bd7e1d91e$var$flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return $2438585bd7e1d91e$var$Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                $2438585bd7e1d91e$var$put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = $2438585bd7e1d91e$var$crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        //---//
        }
        s.status = $2438585bd7e1d91e$var$HCRC_STATE;
    }
    if (s.status === $2438585bd7e1d91e$var$HCRC_STATE) {
        if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
                $2438585bd7e1d91e$var$flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return $2438585bd7e1d91e$var$Z_OK$3;
                }
            }
            $2438585bd7e1d91e$var$put_byte(s, strm.adler & 0xff);
            $2438585bd7e1d91e$var$put_byte(s, strm.adler >> 8 & 0xff);
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
        }
        s.status = $2438585bd7e1d91e$var$BUSY_STATE;
        /* Compression must start with an empty pending buffer */ $2438585bd7e1d91e$var$flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return $2438585bd7e1d91e$var$Z_OK$3;
        }
    }
    //#endif
    /* Start a new block or continue the current one.
   */ if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== $2438585bd7e1d91e$var$Z_NO_FLUSH$2 && s.status !== $2438585bd7e1d91e$var$FINISH_STATE) {
        let bstate = s.level === 0 ? $2438585bd7e1d91e$var$deflate_stored(s, flush) : s.strategy === $2438585bd7e1d91e$var$Z_HUFFMAN_ONLY ? $2438585bd7e1d91e$var$deflate_huff(s, flush) : s.strategy === $2438585bd7e1d91e$var$Z_RLE ? $2438585bd7e1d91e$var$deflate_rle(s, flush) : $2438585bd7e1d91e$var$configuration_table[s.level].func(s, flush);
        if (bstate === $2438585bd7e1d91e$var$BS_FINISH_STARTED || bstate === $2438585bd7e1d91e$var$BS_FINISH_DONE) s.status = $2438585bd7e1d91e$var$FINISH_STATE;
        if (bstate === $2438585bd7e1d91e$var$BS_NEED_MORE || bstate === $2438585bd7e1d91e$var$BS_FINISH_STARTED) {
            if (strm.avail_out === 0) s.last_flush = -1;
            return $2438585bd7e1d91e$var$Z_OK$3;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */ }
        if (bstate === $2438585bd7e1d91e$var$BS_BLOCK_DONE) {
            if (flush === $2438585bd7e1d91e$var$Z_PARTIAL_FLUSH) $2438585bd7e1d91e$var$_tr_align(s);
            else if (flush !== $2438585bd7e1d91e$var$Z_BLOCK$1) {
                $2438585bd7e1d91e$var$_tr_stored_block(s, 0, 0, false);
                /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */ if (flush === $2438585bd7e1d91e$var$Z_FULL_FLUSH$1) {
                    /*** CLEAR_HASH(s); ***/ /* forget history */ $2438585bd7e1d91e$var$zero(s.head); // Fill with NIL (= 0);
                    if (s.lookahead === 0) {
                        s.strstart = 0;
                        s.block_start = 0;
                        s.insert = 0;
                    }
                }
            }
            $2438585bd7e1d91e$var$flush_pending(strm);
            if (strm.avail_out === 0) {
                s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */ 
                return $2438585bd7e1d91e$var$Z_OK$3;
            }
        }
    }
    if (flush !== $2438585bd7e1d91e$var$Z_FINISH$3) return $2438585bd7e1d91e$var$Z_OK$3;
    if (s.wrap <= 0) return $2438585bd7e1d91e$var$Z_STREAM_END$3;
    /* Write the trailer */ if (s.wrap === 2) {
        $2438585bd7e1d91e$var$put_byte(s, strm.adler & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.adler >> 8 & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.adler >> 16 & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.adler >> 24 & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.total_in & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.total_in >> 8 & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.total_in >> 16 & 0xff);
        $2438585bd7e1d91e$var$put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
        $2438585bd7e1d91e$var$putShortMSB(s, strm.adler >>> 16);
        $2438585bd7e1d91e$var$putShortMSB(s, strm.adler & 0xffff);
    }
    $2438585bd7e1d91e$var$flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */ if (s.wrap > 0) s.wrap = -s.wrap;
    /* write the trailer only once! */ return s.pending !== 0 ? $2438585bd7e1d91e$var$Z_OK$3 : $2438585bd7e1d91e$var$Z_STREAM_END$3;
};
const $2438585bd7e1d91e$var$deflateEnd = (strm)=>{
    if ($2438585bd7e1d91e$var$deflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$2;
    const status = strm.state.status;
    strm.state = null;
    return status === $2438585bd7e1d91e$var$BUSY_STATE ? $2438585bd7e1d91e$var$err(strm, $2438585bd7e1d91e$var$Z_DATA_ERROR$2) : $2438585bd7e1d91e$var$Z_OK$3;
};
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */ const $2438585bd7e1d91e$var$deflateSetDictionary = (strm, dictionary)=>{
    let dictLength = dictionary.length;
    if ($2438585bd7e1d91e$var$deflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$2;
    const s = strm.state;
    const wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== $2438585bd7e1d91e$var$INIT_STATE || s.lookahead) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$2;
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */ if (wrap === 1) /* adler32(strm->adler, dictionary, dictLength); */ strm.adler = $2438585bd7e1d91e$var$adler32_1(strm.adler, dictionary, dictLength, 0);
    s.wrap = 0; /* avoid computing Adler-32 in read_buf */ 
    /* if dictionary would fill window, just replace the history */ if (dictLength >= s.w_size) {
        if (wrap === 0) {
            /*** CLEAR_HASH(s); ***/ $2438585bd7e1d91e$var$zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
        }
        /* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
        let tmpDict = new Uint8Array(s.w_size);
        tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */ const avail = strm.avail_in;
    const next = strm.next_in;
    const input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    $2438585bd7e1d91e$var$fill_window(s);
    while(s.lookahead >= $2438585bd7e1d91e$var$MIN_MATCH){
        let str = s.strstart;
        let n = s.lookahead - ($2438585bd7e1d91e$var$MIN_MATCH - 1);
        do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = $2438585bd7e1d91e$var$HASH(s, s.ins_h, s.window[str + $2438585bd7e1d91e$var$MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
        }while (--n);
        s.strstart = str;
        s.lookahead = $2438585bd7e1d91e$var$MIN_MATCH - 1;
        $2438585bd7e1d91e$var$fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = $2438585bd7e1d91e$var$MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return $2438585bd7e1d91e$var$Z_OK$3;
};
var $2438585bd7e1d91e$var$deflateInit_1 = $2438585bd7e1d91e$var$deflateInit;
var $2438585bd7e1d91e$var$deflateInit2_1 = $2438585bd7e1d91e$var$deflateInit2;
var $2438585bd7e1d91e$var$deflateReset_1 = $2438585bd7e1d91e$var$deflateReset;
var $2438585bd7e1d91e$var$deflateResetKeep_1 = $2438585bd7e1d91e$var$deflateResetKeep;
var $2438585bd7e1d91e$var$deflateSetHeader_1 = $2438585bd7e1d91e$var$deflateSetHeader;
var $2438585bd7e1d91e$var$deflate_2$1 = $2438585bd7e1d91e$var$deflate$2;
var $2438585bd7e1d91e$var$deflateEnd_1 = $2438585bd7e1d91e$var$deflateEnd;
var $2438585bd7e1d91e$var$deflateSetDictionary_1 = $2438585bd7e1d91e$var$deflateSetDictionary;
var $2438585bd7e1d91e$var$deflateInfo = 'pako deflate (from Nodeca project)';
/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/ var $2438585bd7e1d91e$var$deflate_1$2 = {
    deflateInit: $2438585bd7e1d91e$var$deflateInit_1,
    deflateInit2: $2438585bd7e1d91e$var$deflateInit2_1,
    deflateReset: $2438585bd7e1d91e$var$deflateReset_1,
    deflateResetKeep: $2438585bd7e1d91e$var$deflateResetKeep_1,
    deflateSetHeader: $2438585bd7e1d91e$var$deflateSetHeader_1,
    deflate: $2438585bd7e1d91e$var$deflate_2$1,
    deflateEnd: $2438585bd7e1d91e$var$deflateEnd_1,
    deflateSetDictionary: $2438585bd7e1d91e$var$deflateSetDictionary_1,
    deflateInfo: $2438585bd7e1d91e$var$deflateInfo
};
const $2438585bd7e1d91e$var$_has = (obj, key)=>{
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var $2438585bd7e1d91e$var$assign = function(obj /*from1, from2, from3, ...*/ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        const source = sources.shift();
        if (!source) continue;
        if (typeof source !== 'object') throw new TypeError(source + 'must be non-object');
        for(const p in source)if ($2438585bd7e1d91e$var$_has(source, p)) obj[p] = source[p];
    }
    return obj;
};
// Join array of chunks to single array.
var $2438585bd7e1d91e$var$flattenChunks = (chunks)=>{
    // calculate data length
    let len = 0;
    for(let i = 0, l = chunks.length; i < l; i++)len += chunks[i].length;
    // join chunks
    const result = new Uint8Array(len);
    for(let i = 0, pos = 0, l = chunks.length; i < l; i++){
        let chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
    }
    return result;
};
var $2438585bd7e1d91e$var$common = {
    assign: $2438585bd7e1d91e$var$assign,
    flattenChunks: $2438585bd7e1d91e$var$flattenChunks
};
// String encode/decode helpers
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let $2438585bd7e1d91e$var$STR_APPLY_UIA_OK = true;
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
    $2438585bd7e1d91e$var$STR_APPLY_UIA_OK = false;
}
// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const $2438585bd7e1d91e$var$_utf8len = new Uint8Array(256);
for(let q = 0; q < 256; q++)$2438585bd7e1d91e$var$_utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
$2438585bd7e1d91e$var$_utf8len[254] = $2438585bd7e1d91e$var$_utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)
var $2438585bd7e1d91e$var$string2buf = (str)=>{
    if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) return new TextEncoder().encode(str);
    let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    // count binary size
    for(m_pos = 0; m_pos < str_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }
    // allocate buffer
    buf = new Uint8Array(buf_len);
    // convert
    for(i = 0, m_pos = 0; i < buf_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) /* one byte */ buf[i++] = c;
        else if (c < 0x800) {
            /* two bytes */ buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
        } else if (c < 0x10000) {
            /* three bytes */ buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        } else {
            /* four bytes */ buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        }
    }
    return buf;
};
// Helper
const $2438585bd7e1d91e$var$buf2binstring = (buf, len)=>{
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
        if (buf.subarray && $2438585bd7e1d91e$var$STR_APPLY_UIA_OK) return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
    let result = '';
    for(let i = 0; i < len; i++)result += String.fromCharCode(buf[i]);
    return result;
};
// convert array to string
var $2438585bd7e1d91e$var$buf2string = (buf, max)=>{
    const len = max || buf.length;
    if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) return new TextDecoder().decode(buf.subarray(0, max));
    let i, out;
    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    const utf16buf = new Array(len * 2);
    for(out = 0, i = 0; i < len;){
        let c = buf[i++];
        // quick process ascii
        if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
        }
        let c_len = $2438585bd7e1d91e$var$_utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
        }
        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while(c_len > 1 && i < len){
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
        }
        // terminated by end of string?
        if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
        }
        if (c < 0x10000) utf16buf[out++] = c;
        else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
        }
    }
    return $2438585bd7e1d91e$var$buf2binstring(utf16buf, out);
};
// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var $2438585bd7e1d91e$var$utf8border = (buf, max)=>{
    max = max || buf.length;
    if (max > buf.length) max = buf.length;
    // go back from last position, until start of sequence found
    let pos = max - 1;
    while(pos >= 0 && (buf[pos] & 0xC0) === 0x80)pos--;
    // Very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) return max;
    // If we came to start of buffer - that means buffer is too small,
    // return max too.
    if (pos === 0) return max;
    return pos + $2438585bd7e1d91e$var$_utf8len[buf[pos]] > max ? pos : max;
};
var $2438585bd7e1d91e$var$strings = {
    string2buf: $2438585bd7e1d91e$var$string2buf,
    buf2string: $2438585bd7e1d91e$var$buf2string,
    utf8border: $2438585bd7e1d91e$var$utf8border
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function $2438585bd7e1d91e$var$ZStream() {
    /* next input byte */ this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */ this.avail_in = 0;
    /* total number of input bytes read so far */ this.total_in = 0;
    /* next output byte should be put there */ this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */ this.avail_out = 0;
    /* total number of bytes output so far */ this.total_out = 0;
    /* last error message, NULL if no error */ this.msg = '' /*Z_NULL*/ ;
    /* not visible by applications */ this.state = null;
    /* best guess about the data type: binary or text */ this.data_type = 2 /*Z_UNKNOWN*/ ;
    /* adler32 value of the uncompressed data */ this.adler = 0;
}
var $2438585bd7e1d91e$var$zstream = $2438585bd7e1d91e$var$ZStream;
const $2438585bd7e1d91e$var$toString$1 = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: $2438585bd7e1d91e$var$Z_NO_FLUSH$1, Z_SYNC_FLUSH: $2438585bd7e1d91e$var$Z_SYNC_FLUSH, Z_FULL_FLUSH: $2438585bd7e1d91e$var$Z_FULL_FLUSH, Z_FINISH: $2438585bd7e1d91e$var$Z_FINISH$2, Z_OK: $2438585bd7e1d91e$var$Z_OK$2, Z_STREAM_END: $2438585bd7e1d91e$var$Z_STREAM_END$2, Z_DEFAULT_COMPRESSION: $2438585bd7e1d91e$var$Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY: $2438585bd7e1d91e$var$Z_DEFAULT_STRATEGY, Z_DEFLATED: $2438585bd7e1d91e$var$Z_DEFLATED$1 } = $2438585bd7e1d91e$var$constants$2;
/* ===========================================================================*/ /**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/ /* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/ /**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/ /**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/ /**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/ function $2438585bd7e1d91e$var$Deflate$1(options) {
    this.options = $2438585bd7e1d91e$var$common.assign({
        level: $2438585bd7e1d91e$var$Z_DEFAULT_COMPRESSION,
        method: $2438585bd7e1d91e$var$Z_DEFLATED$1,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: $2438585bd7e1d91e$var$Z_DEFAULT_STRATEGY
    }, options || {});
    let opt = this.options;
    if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
    else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ''; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new $2438585bd7e1d91e$var$zstream();
    this.strm.avail_out = 0;
    let status = $2438585bd7e1d91e$var$deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== $2438585bd7e1d91e$var$Z_OK$2) throw new Error($2438585bd7e1d91e$var$messages[status]);
    if (opt.header) $2438585bd7e1d91e$var$deflate_1$2.deflateSetHeader(this.strm, opt.header);
    if (opt.dictionary) {
        let dict;
        // Convert data if needed
        if (typeof opt.dictionary === 'string') // If we need to compress text, change encoding to utf8.
        dict = $2438585bd7e1d91e$var$strings.string2buf(opt.dictionary);
        else if ($2438585bd7e1d91e$var$toString$1.call(opt.dictionary) === '[object ArrayBuffer]') dict = new Uint8Array(opt.dictionary);
        else dict = opt.dictionary;
        status = $2438585bd7e1d91e$var$deflate_1$2.deflateSetDictionary(this.strm, dict);
        if (status !== $2438585bd7e1d91e$var$Z_OK$2) throw new Error($2438585bd7e1d91e$var$messages[status]);
        this._dict_set = true;
    }
}
/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ $2438585bd7e1d91e$var$Deflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    let status, _flush_mode;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? $2438585bd7e1d91e$var$Z_FINISH$2 : $2438585bd7e1d91e$var$Z_NO_FLUSH$1;
    // Convert data if needed
    if (typeof data === 'string') // If we need to compress text, change encoding to utf8.
    strm.input = $2438585bd7e1d91e$var$strings.string2buf(data);
    else if ($2438585bd7e1d91e$var$toString$1.call(data) === '[object ArrayBuffer]') strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        // Make sure avail_out > 6 to avoid repeating markers
        if ((_flush_mode === $2438585bd7e1d91e$var$Z_SYNC_FLUSH || _flush_mode === $2438585bd7e1d91e$var$Z_FULL_FLUSH) && strm.avail_out <= 6) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        status = $2438585bd7e1d91e$var$deflate_1$2.deflate(strm, _flush_mode);
        // Ended => flush and finish
        if (status === $2438585bd7e1d91e$var$Z_STREAM_END$2) {
            if (strm.next_out > 0) this.onData(strm.output.subarray(0, strm.next_out));
            status = $2438585bd7e1d91e$var$deflate_1$2.deflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return status === $2438585bd7e1d91e$var$Z_OK$2;
        }
        // Flush if out buffer full
        if (strm.avail_out === 0) {
            this.onData(strm.output);
            continue;
        }
        // Flush if requested and has data
        if (_flush_mode > 0 && strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ $2438585bd7e1d91e$var$Deflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ $2438585bd7e1d91e$var$Deflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === $2438585bd7e1d91e$var$Z_OK$2) this.result = $2438585bd7e1d91e$var$common.flattenChunks(this.chunks);
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/ function $2438585bd7e1d91e$var$deflate$1(input, options) {
    const deflator = new $2438585bd7e1d91e$var$Deflate$1(options);
    deflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (deflator.err) throw deflator.msg || $2438585bd7e1d91e$var$messages[deflator.err];
    return deflator.result;
}
/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function $2438585bd7e1d91e$var$deflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return $2438585bd7e1d91e$var$deflate$1(input, options);
}
/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/ function $2438585bd7e1d91e$var$gzip$1(input, options) {
    options = options || {};
    options.gzip = true;
    return $2438585bd7e1d91e$var$deflate$1(input, options);
}
var $2438585bd7e1d91e$var$Deflate_1$1 = $2438585bd7e1d91e$var$Deflate$1;
var $2438585bd7e1d91e$var$deflate_2 = $2438585bd7e1d91e$var$deflate$1;
var $2438585bd7e1d91e$var$deflateRaw_1$1 = $2438585bd7e1d91e$var$deflateRaw$1;
var $2438585bd7e1d91e$var$gzip_1$1 = $2438585bd7e1d91e$var$gzip$1;
var $2438585bd7e1d91e$var$constants$1 = $2438585bd7e1d91e$var$constants$2;
var $2438585bd7e1d91e$var$deflate_1$1 = {
    Deflate: $2438585bd7e1d91e$var$Deflate_1$1,
    deflate: $2438585bd7e1d91e$var$deflate_2,
    deflateRaw: $2438585bd7e1d91e$var$deflateRaw_1$1,
    gzip: $2438585bd7e1d91e$var$gzip_1$1,
    constants: $2438585bd7e1d91e$var$constants$1
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
const $2438585bd7e1d91e$var$BAD$1 = 16209; /* got a data error -- remain here until reset */ 
const $2438585bd7e1d91e$var$TYPE$1 = 16191; /* i: waiting for type bits, including last-flag bit */ 
/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */ var $2438585bd7e1d91e$var$inffast = function inflate_fast(strm, start) {
    let _in; /* local strm.input */ 
    let last; /* have enough input while in < last */ 
    let _out; /* local strm.output */ 
    let beg; /* inflate()'s initial strm.output */ 
    let end; /* while out < end, enough space available */ 
    //#ifdef INFLATE_STRICT
    let dmax; /* maximum distance from zlib header */ 
    //#endif
    let wsize; /* window size or zero if not using window */ 
    let whave; /* valid bytes in the window */ 
    let wnext; /* window write index */ 
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    let s_window; /* allocated sliding window, if wsize != 0 */ 
    let hold; /* local strm.hold */ 
    let bits; /* local strm.bits */ 
    let lcode; /* local strm.lencode */ 
    let dcode; /* local strm.distcode */ 
    let lmask; /* mask for first level of length codes */ 
    let dmask; /* mask for first level of distance codes */ 
    let here; /* retrieved table entry */ 
    let op; /* code bits, operation, extra bits, or */ 
    /*  window position, window bytes to copy */ let len; /* match length, unused bytes */ 
    let dist; /* match distance */ 
    let from; /* where to copy match from */ 
    let from_source;
    let input, output; // JS specific, because we have no pointers
    /* copy state to local variables */ const state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
    dmax = state.dmax;
    //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
     input data or output space */ top: do {
        if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
        }
        here = lcode[hold & lmask];
        dolen: for(;;){
            op = here >>> 24 /*here.bits*/ ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/ ;
            if (op === 0) //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff /*here.val*/ ;
            else if (op & 16) {
                len = here & 0xffff /*here.val*/ ;
                op &= 15; /* number of extra bits */ 
                if (op) {
                    if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                }
                //Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                }
                here = dcode[hold & dmask];
                dodist: for(;;){
                    op = here >>> 24 /*here.bits*/ ;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 0xff /*here.op*/ ;
                    if (op & 16) {
                        dist = here & 0xffff /*here.val*/ ;
                        op &= 15; /* number of extra bits */ 
                        if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += input[_in++] << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & (1 << op) - 1;
                        //#ifdef INFLATE_STRICT
                        if (dist > dmax) {
                            strm.msg = 'invalid distance too far back';
                            state.mode = $2438585bd7e1d91e$var$BAD$1;
                            break top;
                        }
                        //#endif
                        hold >>>= op;
                        bits -= op;
                        //Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = _out - beg; /* max distance in output */ 
                        if (dist > op) {
                            op = dist - op; /* distance back in window */ 
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = 'invalid distance too far back';
                                    state.mode = $2438585bd7e1d91e$var$BAD$1;
                                    break top;
                                }
                            }
                            from = 0; // window index
                            from_source = s_window;
                            if (wnext === 0) {
                                from += wsize - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            } else if (wnext < op) {
                                from += wsize + wnext - op;
                                op -= wnext;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = 0;
                                    if (wnext < len) {
                                        op = wnext;
                                        len -= op;
                                        do output[_out++] = s_window[from++];
                                        while (--op);
                                        from = _out - dist; /* rest from output */ 
                                        from_source = output;
                                    }
                                }
                            } else {
                                from += wnext - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            }
                            while(len > 2){
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                len -= 3;
                            }
                            if (len) {
                                output[_out++] = from_source[from++];
                                if (len > 1) output[_out++] = from_source[from++];
                            }
                        } else {
                            from = _out - dist; /* copy direct from output */ 
                            do {
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                len -= 3;
                            }while (len > 2);
                            if (len) {
                                output[_out++] = output[from++];
                                if (len > 1) output[_out++] = output[from++];
                            }
                        }
                    } else if ((op & 64) === 0) {
                        here = dcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                        continue dodist;
                    } else {
                        strm.msg = 'invalid distance code';
                        state.mode = $2438585bd7e1d91e$var$BAD$1;
                        break top;
                    }
                    break; // need to emulate goto via "continue"
                }
            } else if ((op & 64) === 0) {
                here = lcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                continue dolen;
            } else if (op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = $2438585bd7e1d91e$var$TYPE$1;
                break top;
            } else {
                strm.msg = 'invalid literal/length code';
                state.mode = $2438585bd7e1d91e$var$BAD$1;
                break top;
            }
            break; // need to emulate goto via "continue"
        }
    }while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */ len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */ strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const $2438585bd7e1d91e$var$MAXBITS = 15;
const $2438585bd7e1d91e$var$ENOUGH_LENS$1 = 852;
const $2438585bd7e1d91e$var$ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
const $2438585bd7e1d91e$var$CODES$1 = 0;
const $2438585bd7e1d91e$var$LENS$1 = 1;
const $2438585bd7e1d91e$var$DISTS$1 = 2;
const $2438585bd7e1d91e$var$lbase = new Uint16Array([
    /* Length codes 257..285 base */ 3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
]);
const $2438585bd7e1d91e$var$lext = new Uint8Array([
    /* Length codes 257..285 extra */ 16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
]);
const $2438585bd7e1d91e$var$dbase = new Uint16Array([
    /* Distance codes 0..29 base */ 1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
]);
const $2438585bd7e1d91e$var$dext = new Uint8Array([
    /* Distance codes 0..29 extra */ 16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
]);
const $2438585bd7e1d91e$var$inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts)=>{
    const bits = opts.bits;
    //here = opts.here; /* table entry for duplication */
    let len = 0; /* a code's length in bits */ 
    let sym = 0; /* index of code symbols */ 
    let min = 0, max = 0; /* minimum and maximum code lengths */ 
    let root = 0; /* number of index bits for root table */ 
    let curr = 0; /* number of index bits for current table */ 
    let drop = 0; /* code bits to drop for sub-table */ 
    let left = 0; /* number of prefix codes available */ 
    let used = 0; /* code entries in table used */ 
    let huff = 0; /* Huffman code */ 
    let incr; /* for incrementing code, index */ 
    let fill; /* index for replicating entries */ 
    let low; /* low bits for current root entry */ 
    let mask; /* mask for low root bits */ 
    let next; /* next available space in table */ 
    let base = null; /* base value table to use */ 
    //  let shoextra;    /* extra bits table to use */
    let match; /* use base and extra for symbol >= match */ 
    const count = new Uint16Array($2438585bd7e1d91e$var$MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    const offs = new Uint16Array($2438585bd7e1d91e$var$MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    let extra = null;
    let here_bits, here_op, here_val;
    /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */ for(len = 0; len <= $2438585bd7e1d91e$var$MAXBITS; len++)count[len] = 0;
    for(sym = 0; sym < codes; sym++)count[lens[lens_index + sym]]++;
    /* bound code lengths, force root to be within code lengths */ root = bits;
    for(max = $2438585bd7e1d91e$var$MAXBITS; max >= 1; max--){
        if (count[max] !== 0) break;
    }
    if (root > max) root = max;
    if (max === 0) {
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = 20971520;
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = 20971520;
        opts.bits = 1;
        return 0; /* no symbols, but wait for decoding to report error */ 
    }
    for(min = 1; min < max; min++){
        if (count[min] !== 0) break;
    }
    if (root < min) root = min;
    /* check for an over-subscribed or incomplete set of lengths */ left = 1;
    for(len = 1; len <= $2438585bd7e1d91e$var$MAXBITS; len++){
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;
         /* over-subscribed */ 
    }
    if (left > 0 && (type === $2438585bd7e1d91e$var$CODES$1 || max !== 1)) return -1; /* incomplete set */ 
    /* generate offsets into symbol table for each length for sorting */ offs[1] = 0;
    for(len = 1; len < $2438585bd7e1d91e$var$MAXBITS; len++)offs[len + 1] = offs[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(sym = 0; sym < codes; sym++)if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
    /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === $2438585bd7e1d91e$var$CODES$1) {
        base = extra = work; /* dummy value--not used */ 
        match = 20;
    } else if (type === $2438585bd7e1d91e$var$LENS$1) {
        base = $2438585bd7e1d91e$var$lbase;
        extra = $2438585bd7e1d91e$var$lext;
        match = 257;
    } else {
        base = $2438585bd7e1d91e$var$dbase;
        extra = $2438585bd7e1d91e$var$dext;
        match = 0;
    }
    /* initialize opts for loop */ huff = 0; /* starting code */ 
    sym = 0; /* starting code symbol */ 
    len = min; /* starting code length */ 
    next = table_index; /* current table to fill in */ 
    curr = root; /* current table index bits */ 
    drop = 0; /* current bits to drop from code for index */ 
    low = -1; /* trigger new sub-table when len > root */ 
    used = 1 << root; /* use root table entries */ 
    mask = used - 1; /* mask for comparing low */ 
    /* check available table space */ if (type === $2438585bd7e1d91e$var$LENS$1 && used > $2438585bd7e1d91e$var$ENOUGH_LENS$1 || type === $2438585bd7e1d91e$var$DISTS$1 && used > $2438585bd7e1d91e$var$ENOUGH_DISTS$1) return 1;
    /* process all codes and make table entries */ for(;;){
        /* create table entry */ here_bits = len - drop;
        if (work[sym] + 1 < match) {
            here_op = 0;
            here_val = work[sym];
        } else if (work[sym] >= match) {
            here_op = extra[work[sym] - match];
            here_val = base[work[sym] - match];
        } else {
            here_op = 96; /* end of block */ 
            here_val = 0;
        }
        /* replicate for those indices with low len bits equal to huff */ incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill; /* save offset to next table */ 
        do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        }while (fill !== 0);
        /* backwards increment the len-bit code huff */ incr = 1 << len - 1;
        while(huff & incr)incr >>= 1;
        if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
        } else huff = 0;
        /* go to next symbol, update count, len */ sym++;
        if (--count[len] === 0) {
            if (len === max) break;
            len = lens[lens_index + work[sym]];
        }
        /* create new sub-table if needed */ if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */ if (drop === 0) drop = root;
            /* increment past last table */ next += min; /* here min is 1 << curr */ 
            /* determine length of next table */ curr = len - drop;
            left = 1 << curr;
            while(curr + drop < max){
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }
            /* check for enough space */ used += 1 << curr;
            if (type === $2438585bd7e1d91e$var$LENS$1 && used > $2438585bd7e1d91e$var$ENOUGH_LENS$1 || type === $2438585bd7e1d91e$var$DISTS$1 && used > $2438585bd7e1d91e$var$ENOUGH_DISTS$1) return 1;
            /* point entry in root table to sub-table */ low = huff & mask;
            /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/ table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */ if (huff !== 0) //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 4194304;
    /* set return parameters */ //opts.table_index += used;
    opts.bits = root;
    return 0;
};
var $2438585bd7e1d91e$var$inftrees = $2438585bd7e1d91e$var$inflate_table;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const $2438585bd7e1d91e$var$CODES = 0;
const $2438585bd7e1d91e$var$LENS = 1;
const $2438585bd7e1d91e$var$DISTS = 2;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_FINISH: $2438585bd7e1d91e$var$Z_FINISH$1, Z_BLOCK: $2438585bd7e1d91e$var$Z_BLOCK, Z_TREES: $2438585bd7e1d91e$var$Z_TREES, Z_OK: $2438585bd7e1d91e$var$Z_OK$1, Z_STREAM_END: $2438585bd7e1d91e$var$Z_STREAM_END$1, Z_NEED_DICT: $2438585bd7e1d91e$var$Z_NEED_DICT$1, Z_STREAM_ERROR: $2438585bd7e1d91e$var$Z_STREAM_ERROR$1, Z_DATA_ERROR: $2438585bd7e1d91e$var$Z_DATA_ERROR$1, Z_MEM_ERROR: $2438585bd7e1d91e$var$Z_MEM_ERROR$1, Z_BUF_ERROR: $2438585bd7e1d91e$var$Z_BUF_ERROR, Z_DEFLATED: $2438585bd7e1d91e$var$Z_DEFLATED } = $2438585bd7e1d91e$var$constants$2;
/* STATES ====================================================================*/ /* ===========================================================================*/ const $2438585bd7e1d91e$var$HEAD = 16180; /* i: waiting for magic header */ 
const $2438585bd7e1d91e$var$FLAGS = 16181; /* i: waiting for method and flags (gzip) */ 
const $2438585bd7e1d91e$var$TIME = 16182; /* i: waiting for modification time (gzip) */ 
const $2438585bd7e1d91e$var$OS = 16183; /* i: waiting for extra flags and operating system (gzip) */ 
const $2438585bd7e1d91e$var$EXLEN = 16184; /* i: waiting for extra length (gzip) */ 
const $2438585bd7e1d91e$var$EXTRA = 16185; /* i: waiting for extra bytes (gzip) */ 
const $2438585bd7e1d91e$var$NAME = 16186; /* i: waiting for end of file name (gzip) */ 
const $2438585bd7e1d91e$var$COMMENT = 16187; /* i: waiting for end of comment (gzip) */ 
const $2438585bd7e1d91e$var$HCRC = 16188; /* i: waiting for header crc (gzip) */ 
const $2438585bd7e1d91e$var$DICTID = 16189; /* i: waiting for dictionary check value */ 
const $2438585bd7e1d91e$var$DICT = 16190; /* waiting for inflateSetDictionary() call */ 
const $2438585bd7e1d91e$var$TYPE = 16191; /* i: waiting for type bits, including last-flag bit */ 
const $2438585bd7e1d91e$var$TYPEDO = 16192; /* i: same, but skip check to exit inflate on new block */ 
const $2438585bd7e1d91e$var$STORED = 16193; /* i: waiting for stored size (length and complement) */ 
const $2438585bd7e1d91e$var$COPY_ = 16194; /* i/o: same as COPY below, but only first time in */ 
const $2438585bd7e1d91e$var$COPY = 16195; /* i/o: waiting for input or output to copy stored block */ 
const $2438585bd7e1d91e$var$TABLE = 16196; /* i: waiting for dynamic block table lengths */ 
const $2438585bd7e1d91e$var$LENLENS = 16197; /* i: waiting for code length code lengths */ 
const $2438585bd7e1d91e$var$CODELENS = 16198; /* i: waiting for length/lit and distance code lengths */ 
const $2438585bd7e1d91e$var$LEN_ = 16199; /* i: same as LEN below, but only first time in */ 
const $2438585bd7e1d91e$var$LEN = 16200; /* i: waiting for length/lit/eob code */ 
const $2438585bd7e1d91e$var$LENEXT = 16201; /* i: waiting for length extra bits */ 
const $2438585bd7e1d91e$var$DIST = 16202; /* i: waiting for distance code */ 
const $2438585bd7e1d91e$var$DISTEXT = 16203; /* i: waiting for distance extra bits */ 
const $2438585bd7e1d91e$var$MATCH = 16204; /* o: waiting for output space to copy string */ 
const $2438585bd7e1d91e$var$LIT = 16205; /* o: waiting for output space to write literal */ 
const $2438585bd7e1d91e$var$CHECK = 16206; /* i: waiting for 32-bit check value */ 
const $2438585bd7e1d91e$var$LENGTH = 16207; /* i: waiting for 32-bit length (gzip) */ 
const $2438585bd7e1d91e$var$DONE = 16208; /* finished check, done -- remain here until reset */ 
const $2438585bd7e1d91e$var$BAD = 16209; /* got a data error -- remain here until reset */ 
const $2438585bd7e1d91e$var$MEM = 16210; /* got an inflate() memory error -- remain here until reset */ 
const $2438585bd7e1d91e$var$SYNC = 16211; /* looking for synchronization bytes to restart inflate() */ 
/* ===========================================================================*/ const $2438585bd7e1d91e$var$ENOUGH_LENS = 852;
const $2438585bd7e1d91e$var$ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
const $2438585bd7e1d91e$var$MAX_WBITS = 15;
/* 32K LZ77 window */ const $2438585bd7e1d91e$var$DEF_WBITS = $2438585bd7e1d91e$var$MAX_WBITS;
const $2438585bd7e1d91e$var$zswap32 = (q)=>{
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
};
function $2438585bd7e1d91e$var$InflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.mode = 0; /* current inflate mode */ 
    this.last = false; /* true if processing last block */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */ 
    this.havedict = false; /* true if dictionary provided */ 
    this.flags = 0; /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */ 
    this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */ 
    this.check = 0; /* protected copy of check value */ 
    this.total = 0; /* protected copy of output count */ 
    // TODO: may be {}
    this.head = null; /* where to save gzip header information */ 
    /* sliding window */ this.wbits = 0; /* log base 2 of requested window size */ 
    this.wsize = 0; /* window size or zero if not using window */ 
    this.whave = 0; /* valid bytes in the window */ 
    this.wnext = 0; /* window write index */ 
    this.window = null; /* allocated sliding window, if needed */ 
    /* bit accumulator */ this.hold = 0; /* input bit accumulator */ 
    this.bits = 0; /* number of bits in "in" */ 
    /* for string and stored block copying */ this.length = 0; /* literal or length of data to copy */ 
    this.offset = 0; /* distance back to copy string from */ 
    /* for table and code decoding */ this.extra = 0; /* extra bits needed */ 
    /* fixed and dynamic code tables */ this.lencode = null; /* starting table for length/literal codes */ 
    this.distcode = null; /* starting table for distance codes */ 
    this.lenbits = 0; /* index bits for lencode */ 
    this.distbits = 0; /* index bits for distcode */ 
    /* dynamic table building */ this.ncode = 0; /* number of code length code lengths */ 
    this.nlen = 0; /* number of length code lengths */ 
    this.ndist = 0; /* number of distance code lengths */ 
    this.have = 0; /* number of code lengths in lens[] */ 
    this.next = null; /* next available space in codes[] */ 
    this.lens = new Uint16Array(320); /* temporary storage for code lengths */ 
    this.work = new Uint16Array(288); /* work area for code table building */ 
    /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
    this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */ 
    this.distdyn = null; /* dynamic table for distance codes (JS specific) */ 
    this.sane = 0; /* if false, allow invalid distance too far */ 
    this.back = 0; /* bits back of last unprocessed length/lit */ 
    this.was = 0; /* initial length of match */ 
}
const $2438585bd7e1d91e$var$inflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const state = strm.state;
    if (!state || state.strm !== strm || state.mode < $2438585bd7e1d91e$var$HEAD || state.mode > $2438585bd7e1d91e$var$SYNC) return 1;
    return 0;
};
const $2438585bd7e1d91e$var$inflateResetKeep = (strm)=>{
    if ($2438585bd7e1d91e$var$inflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    const state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ''; /*Z_NULL*/ 
    if (state.wrap) strm.adler = state.wrap & 1;
    state.mode = $2438585bd7e1d91e$var$HEAD;
    state.last = 0;
    state.havedict = 0;
    state.flags = -1;
    state.dmax = 32768;
    state.head = null /*Z_NULL*/ ;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new Int32Array($2438585bd7e1d91e$var$ENOUGH_LENS);
    state.distcode = state.distdyn = new Int32Array($2438585bd7e1d91e$var$ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return $2438585bd7e1d91e$var$Z_OK$1;
};
const $2438585bd7e1d91e$var$inflateReset = (strm)=>{
    if ($2438585bd7e1d91e$var$inflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    const state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return $2438585bd7e1d91e$var$inflateResetKeep(strm);
};
const $2438585bd7e1d91e$var$inflateReset2 = (strm, windowBits)=>{
    let wrap;
    /* get the state */ if ($2438585bd7e1d91e$var$inflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    const state = strm.state;
    /* extract wrap request from windowBits parameter */ if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else {
        wrap = (windowBits >> 4) + 5;
        if (windowBits < 48) windowBits &= 15;
    }
    /* set number of window bits, free window if different */ if (windowBits && (windowBits < 8 || windowBits > 15)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    if (state.window !== null && state.wbits !== windowBits) state.window = null;
    /* update state and reset the rest of it */ state.wrap = wrap;
    state.wbits = windowBits;
    return $2438585bd7e1d91e$var$inflateReset(strm);
};
const $2438585bd7e1d91e$var$inflateInit2 = (strm, windowBits)=>{
    if (!strm) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    //strm.msg = Z_NULL;                 /* in case we return an error */
    const state = new $2438585bd7e1d91e$var$InflateState();
    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.strm = strm;
    state.window = null /*Z_NULL*/ ;
    state.mode = $2438585bd7e1d91e$var$HEAD; /* to pass state test in inflateReset2() */ 
    const ret = $2438585bd7e1d91e$var$inflateReset2(strm, windowBits);
    if (ret !== $2438585bd7e1d91e$var$Z_OK$1) strm.state = null /*Z_NULL*/ ;
    return ret;
};
const $2438585bd7e1d91e$var$inflateInit = (strm)=>{
    return $2438585bd7e1d91e$var$inflateInit2(strm, $2438585bd7e1d91e$var$DEF_WBITS);
};
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */ let $2438585bd7e1d91e$var$virgin = true;
let $2438585bd7e1d91e$var$lenfix, $2438585bd7e1d91e$var$distfix; // We have no pointers in JS, so keep tables separate
const $2438585bd7e1d91e$var$fixedtables = (state)=>{
    /* build fixed huffman tables if first call (may not be thread safe) */ if ($2438585bd7e1d91e$var$virgin) {
        $2438585bd7e1d91e$var$lenfix = new Int32Array(512);
        $2438585bd7e1d91e$var$distfix = new Int32Array(32);
        /* literal/length table */ let sym = 0;
        while(sym < 144)state.lens[sym++] = 8;
        while(sym < 256)state.lens[sym++] = 9;
        while(sym < 280)state.lens[sym++] = 7;
        while(sym < 288)state.lens[sym++] = 8;
        $2438585bd7e1d91e$var$inftrees($2438585bd7e1d91e$var$LENS, state.lens, 0, 288, $2438585bd7e1d91e$var$lenfix, 0, state.work, {
            bits: 9
        });
        /* distance table */ sym = 0;
        while(sym < 32)state.lens[sym++] = 5;
        $2438585bd7e1d91e$var$inftrees($2438585bd7e1d91e$var$DISTS, state.lens, 0, 32, $2438585bd7e1d91e$var$distfix, 0, state.work, {
            bits: 5
        });
        /* do this just once */ $2438585bd7e1d91e$var$virgin = false;
    }
    state.lencode = $2438585bd7e1d91e$var$lenfix;
    state.lenbits = 9;
    state.distcode = $2438585bd7e1d91e$var$distfix;
    state.distbits = 5;
};
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */ const $2438585bd7e1d91e$var$updatewindow = (strm, src, end, copy)=>{
    let dist;
    const state = strm.state;
    /* if it hasn't been done already, allocate space for the window */ if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new Uint8Array(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */ if (copy >= state.wsize) {
        state.window.set(src.subarray(end - state.wsize, end), 0);
        state.wnext = 0;
        state.whave = state.wsize;
    } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) dist = copy;
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
        copy -= dist;
        if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            state.window.set(src.subarray(end - copy, end), 0);
            state.wnext = copy;
            state.whave = state.wsize;
        } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) state.wnext = 0;
            if (state.whave < state.wsize) state.whave += dist;
        }
    }
    return 0;
};
const $2438585bd7e1d91e$var$inflate$2 = (strm, flush)=>{
    let state;
    let input, output; // input/output buffers
    let next; /* next input INDEX */ 
    let put; /* next output INDEX */ 
    let have, left; /* available input and output */ 
    let hold; /* bit buffer */ 
    let bits; /* bits in bit buffer */ 
    let _in, _out; /* save starting available input and output */ 
    let copy; /* number of stored or match bytes to copy */ 
    let from; /* where to copy match bytes from */ 
    let from_source;
    let here = 0; /* current decoding table entry */ 
    let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //let last;                   /* parent table entry */
    let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    let len; /* length to copy for repeats, bits to drop */ 
    let ret; /* return code */ 
    const hbuf = new Uint8Array(4); /* buffer for gzip header crc calculation */ 
    let opts;
    let n; // temporary variable for NEED_BITS
    const order = /* permutation of code lengths */ new Uint8Array([
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ]);
    if ($2438585bd7e1d91e$var$inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.mode === $2438585bd7e1d91e$var$TYPE) state.mode = $2438585bd7e1d91e$var$TYPEDO;
     /* skip check */ 
    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---
    _in = have;
    _out = left;
    ret = $2438585bd7e1d91e$var$Z_OK$1;
    inf_leave: for(;;)switch(state.mode){
        case $2438585bd7e1d91e$var$HEAD:
            if (state.wrap === 0) {
                state.mode = $2438585bd7e1d91e$var$TYPEDO;
                break;
            }
            //=== NEEDBITS(16);
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.wrap & 2 && hold === 0x8b1f) {
                if (state.wbits === 0) state.wbits = 15;
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = $2438585bd7e1d91e$var$crc32_1(state.check, hbuf, 2, 0);
                //===//
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = $2438585bd7e1d91e$var$FLAGS;
                break;
            }
            if (state.head) state.head.done = false;
            if (!(state.wrap & 1) || /* check if zlib header allowed */ (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            if ((hold & 0x0f) !== $2438585bd7e1d91e$var$Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 0x0f) + 8;
            if (state.wbits === 0) state.wbits = len;
            if (len > 15 || len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            // !!! pako patch. Force use `options.windowBits` if passed.
            // Required to always use max window size by default.
            state.dmax = 1 << state.wbits;
            //state.dmax = 1 << len;
            state.flags = 0; /* indicate zlib header */ 
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = hold & 0x200 ? $2438585bd7e1d91e$var$DICTID : $2438585bd7e1d91e$var$TYPE;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            break;
        case $2438585bd7e1d91e$var$FLAGS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 0xff) !== $2438585bd7e1d91e$var$Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            if (state.flags & 0xe000) {
                strm.msg = 'unknown header flags set';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            if (state.head) state.head.text = hold >> 8 & 1;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = $2438585bd7e1d91e$var$crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = $2438585bd7e1d91e$var$TIME;
        /* falls through */ case $2438585bd7e1d91e$var$TIME:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) state.head.time = hold;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = $2438585bd7e1d91e$var$crc32_1(state.check, hbuf, 4, 0);
            //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = $2438585bd7e1d91e$var$OS;
        /* falls through */ case $2438585bd7e1d91e$var$OS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
            }
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = $2438585bd7e1d91e$var$crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = $2438585bd7e1d91e$var$EXLEN;
        /* falls through */ case $2438585bd7e1d91e$var$EXLEN:
            if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) state.head.extra_len = hold;
                if (state.flags & 0x0200 && state.wrap & 4) {
                    //=== CRC2(state.check, hold);
                    hbuf[0] = hold & 0xff;
                    hbuf[1] = hold >>> 8 & 0xff;
                    state.check = $2438585bd7e1d91e$var$crc32_1(state.check, hbuf, 2, 0);
                //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            } else if (state.head) state.head.extra = null /*Z_NULL*/ ;
            state.mode = $2438585bd7e1d91e$var$EXTRA;
        /* falls through */ case $2438585bd7e1d91e$var$EXTRA:
            if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) copy = have;
                if (copy) {
                    if (state.head) {
                        len = state.head.extra_len - state.length;
                        if (!state.head.extra) // Use untyped array for more convenient processing later
                        state.head.extra = new Uint8Array(state.head.extra_len);
                        state.head.extra.set(input.subarray(next, // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        next + copy), /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/ len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                    }
                    if (state.flags & 0x0200 && state.wrap & 4) state.check = $2438585bd7e1d91e$var$crc32_1(state.check, input, copy, next);
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = $2438585bd7e1d91e$var$NAME;
        /* falls through */ case $2438585bd7e1d91e$var$NAME:
            if (state.flags & 0x0800) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    // TODO: 2 or 1 bytes?
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.name_max*/ ) state.head.name += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = $2438585bd7e1d91e$var$crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.name = null;
            state.length = 0;
            state.mode = $2438585bd7e1d91e$var$COMMENT;
        /* falls through */ case $2438585bd7e1d91e$var$COMMENT:
            if (state.flags & 0x1000) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.comm_max*/ ) state.head.comment += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = $2438585bd7e1d91e$var$crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.comment = null;
            state.mode = $2438585bd7e1d91e$var$HCRC;
        /* falls through */ case $2438585bd7e1d91e$var$HCRC:
            if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.check & 0xffff)) {
                    strm.msg = 'header crc mismatch';
                    state.mode = $2438585bd7e1d91e$var$BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            }
            if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = $2438585bd7e1d91e$var$TYPE;
            break;
        case $2438585bd7e1d91e$var$DICTID:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            strm.adler = state.check = $2438585bd7e1d91e$var$zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = $2438585bd7e1d91e$var$DICT;
        /* falls through */ case $2438585bd7e1d91e$var$DICT:
            if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return $2438585bd7e1d91e$var$Z_NEED_DICT$1;
            }
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = $2438585bd7e1d91e$var$TYPE;
        /* falls through */ case $2438585bd7e1d91e$var$TYPE:
            if (flush === $2438585bd7e1d91e$var$Z_BLOCK || flush === $2438585bd7e1d91e$var$Z_TREES) break inf_leave;
        /* falls through */ case $2438585bd7e1d91e$var$TYPEDO:
            if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = $2438585bd7e1d91e$var$CHECK;
                break;
            }
            //=== NEEDBITS(3); */
            while(bits < 3){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.last = hold & 0x01 /*BITS(1)*/ ;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//
            switch(hold & 0x03){
                case 0:
                    /* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = $2438585bd7e1d91e$var$STORED;
                    break;
                case 1:
                    /* fixed block */ $2438585bd7e1d91e$var$fixedtables(state);
                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = $2438585bd7e1d91e$var$LEN_; /* decode codes */ 
                    if (flush === $2438585bd7e1d91e$var$Z_TREES) {
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                        break inf_leave;
                    }
                    break;
                case 2:
                    /* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = $2438585bd7e1d91e$var$TABLE;
                    break;
                case 3:
                    strm.msg = 'invalid block type';
                    state.mode = $2438585bd7e1d91e$var$BAD;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            break;
        case $2438585bd7e1d91e$var$STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            state.length = hold & 0xffff;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = $2438585bd7e1d91e$var$COPY_;
            if (flush === $2438585bd7e1d91e$var$Z_TREES) break inf_leave;
        /* falls through */ case $2438585bd7e1d91e$var$COPY_:
            state.mode = $2438585bd7e1d91e$var$COPY;
        /* falls through */ case $2438585bd7e1d91e$var$COPY:
            copy = state.length;
            if (copy) {
                if (copy > have) copy = have;
                if (copy > left) copy = left;
                if (copy === 0) break inf_leave;
                //--- zmemcpy(put, next, copy); ---
                output.set(input.subarray(next, next + copy), put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = $2438585bd7e1d91e$var$TYPE;
            break;
        case $2438585bd7e1d91e$var$TABLE:
            //=== NEEDBITS(14); */
            while(bits < 14){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.nlen = (hold & 0x1f) + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 0x1f) + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 0x0f) + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = $2438585bd7e1d91e$var$LENLENS;
        /* falls through */ case $2438585bd7e1d91e$var$LENLENS:
            while(state.have < state.ncode){
                //=== NEEDBITS(3);
                while(bits < 3){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
            //---//
            }
            while(state.have < 19)state.lens[order[state.have++]] = 0;
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {
                bits: state.lenbits
            };
            ret = $2438585bd7e1d91e$var$inftrees($2438585bd7e1d91e$var$CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = $2438585bd7e1d91e$var$CODELENS;
        /* falls through */ case $2438585bd7e1d91e$var$CODELENS:
            while(state.have < state.nlen + state.ndist){
                for(;;){
                    here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                if (here_val < 16) {
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    state.lens[state.have++] = here_val;
                } else {
                    if (here_val === 16) {
                        //=== NEEDBITS(here.bits + 2);
                        n = here_bits + 2;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        if (state.have === 0) {
                            strm.msg = 'invalid bit length repeat';
                            state.mode = $2438585bd7e1d91e$var$BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + (hold & 0x03); //BITS(2);
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                    //---//
                    } else if (here_val === 17) {
                        //=== NEEDBITS(here.bits + 3);
                        n = here_bits + 3;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 3 + (hold & 0x07); //BITS(3);
                        //--- DROPBITS(3) ---//
                        hold >>>= 3;
                        bits -= 3;
                    //---//
                    } else {
                        //=== NEEDBITS(here.bits + 7);
                        n = here_bits + 7;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 11 + (hold & 0x7f); //BITS(7);
                        //--- DROPBITS(7) ---//
                        hold >>>= 7;
                        bits -= 7;
                    //---//
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = 'invalid bit length repeat';
                        state.mode = $2438585bd7e1d91e$var$BAD;
                        break;
                    }
                    while(copy--)state.lens[state.have++] = len;
                }
            }
            /* handle error breaks in while */ if (state.mode === $2438585bd7e1d91e$var$BAD) break;
            /* check for end-of-block code (better have one) */ if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */ state.lenbits = 9;
            opts = {
                bits: state.lenbits
            };
            ret = $2438585bd7e1d91e$var$inftrees($2438585bd7e1d91e$var$LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;
            if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = {
                bits: state.distbits
            };
            ret = $2438585bd7e1d91e$var$inftrees($2438585bd7e1d91e$var$DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;
            if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = $2438585bd7e1d91e$var$LEN_;
            if (flush === $2438585bd7e1d91e$var$Z_TREES) break inf_leave;
        /* falls through */ case $2438585bd7e1d91e$var$LEN_:
            state.mode = $2438585bd7e1d91e$var$LEN;
        /* falls through */ case $2438585bd7e1d91e$var$LEN:
            if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                $2438585bd7e1d91e$var$inffast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---
                if (state.mode === $2438585bd7e1d91e$var$TYPE) state.back = -1;
                break;
            }
            state.back = 0;
            for(;;){
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = $2438585bd7e1d91e$var$LIT;
                break;
            }
            if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = $2438585bd7e1d91e$var$TYPE;
                break;
            }
            if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            state.extra = here_op & 15;
            state.mode = $2438585bd7e1d91e$var$LENEXT;
        /* falls through */ case $2438585bd7e1d91e$var$LENEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = $2438585bd7e1d91e$var$DIST;
        /* falls through */ case $2438585bd7e1d91e$var$DIST:
            for(;;){
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = $2438585bd7e1d91e$var$DISTEXT;
        /* falls through */ case $2438585bd7e1d91e$var$DISTEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = $2438585bd7e1d91e$var$BAD;
                break;
            }
            //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = $2438585bd7e1d91e$var$MATCH;
        /* falls through */ case $2438585bd7e1d91e$var$MATCH:
            if (left === 0) break inf_leave;
            copy = _out - left;
            if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = $2438585bd7e1d91e$var$BAD;
                        break;
                    }
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                } else from = state.wnext - copy;
                if (copy > state.length) copy = state.length;
                from_source = state.window;
            } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
            }
            if (copy > left) copy = left;
            left -= copy;
            state.length -= copy;
            do output[put++] = from_source[from++];
            while (--copy);
            if (state.length === 0) state.mode = $2438585bd7e1d91e$var$LEN;
            break;
        case $2438585bd7e1d91e$var$LIT:
            if (left === 0) break inf_leave;
            output[put++] = state.length;
            left--;
            state.mode = $2438585bd7e1d91e$var$LEN;
            break;
        case $2438585bd7e1d91e$var$CHECK:
            if (state.wrap) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    // Use '|' instead of '+' to make sure that result is signed
                    hold |= input[next++] << bits;
                    bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/ state.flags ? $2438585bd7e1d91e$var$crc32_1(state.check, output, _out, put - _out) : $2438585bd7e1d91e$var$adler32_1(state.check, output, _out, put - _out);
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if (state.wrap & 4 && (state.flags ? hold : $2438585bd7e1d91e$var$zswap32(hold)) !== state.check) {
                    strm.msg = 'incorrect data check';
                    state.mode = $2438585bd7e1d91e$var$BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = $2438585bd7e1d91e$var$LENGTH;
        /* falls through */ case $2438585bd7e1d91e$var$LENGTH:
            if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.total & 0xffffffff)) {
                    strm.msg = 'incorrect length check';
                    state.mode = $2438585bd7e1d91e$var$BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = $2438585bd7e1d91e$var$DONE;
        /* falls through */ case $2438585bd7e1d91e$var$DONE:
            ret = $2438585bd7e1d91e$var$Z_STREAM_END$1;
            break inf_leave;
        case $2438585bd7e1d91e$var$BAD:
            ret = $2438585bd7e1d91e$var$Z_DATA_ERROR$1;
            break inf_leave;
        case $2438585bd7e1d91e$var$MEM:
            return $2438585bd7e1d91e$var$Z_MEM_ERROR$1;
        case $2438585bd7e1d91e$var$SYNC:
        /* falls through */ default:
            return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    }
    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---
    if (state.wsize || _out !== strm.avail_out && state.mode < $2438585bd7e1d91e$var$BAD && (state.mode < $2438585bd7e1d91e$var$CHECK || flush !== $2438585bd7e1d91e$var$Z_FINISH$1)) $2438585bd7e1d91e$var$updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out);
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/ state.flags ? $2438585bd7e1d91e$var$crc32_1(state.check, output, _out, strm.next_out - _out) : $2438585bd7e1d91e$var$adler32_1(state.check, output, _out, strm.next_out - _out);
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === $2438585bd7e1d91e$var$TYPE ? 128 : 0) + (state.mode === $2438585bd7e1d91e$var$LEN_ || state.mode === $2438585bd7e1d91e$var$COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === $2438585bd7e1d91e$var$Z_FINISH$1) && ret === $2438585bd7e1d91e$var$Z_OK$1) ret = $2438585bd7e1d91e$var$Z_BUF_ERROR;
    return ret;
};
const $2438585bd7e1d91e$var$inflateEnd = (strm)=>{
    if ($2438585bd7e1d91e$var$inflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    let state = strm.state;
    if (state.window) state.window = null;
    strm.state = null;
    return $2438585bd7e1d91e$var$Z_OK$1;
};
const $2438585bd7e1d91e$var$inflateGetHeader = (strm, head)=>{
    /* check state */ if ($2438585bd7e1d91e$var$inflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    const state = strm.state;
    if ((state.wrap & 2) === 0) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    /* save header structure */ state.head = head;
    head.done = false;
    return $2438585bd7e1d91e$var$Z_OK$1;
};
const $2438585bd7e1d91e$var$inflateSetDictionary = (strm, dictionary)=>{
    const dictLength = dictionary.length;
    let state;
    let dictid;
    let ret;
    /* check state */ if ($2438585bd7e1d91e$var$inflateStateCheck(strm)) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== $2438585bd7e1d91e$var$DICT) return $2438585bd7e1d91e$var$Z_STREAM_ERROR$1;
    /* check for correct dictionary identifier */ if (state.mode === $2438585bd7e1d91e$var$DICT) {
        dictid = 1; /* adler32(0, null, 0)*/ 
        /* dictid = adler32(dictid, dictionary, dictLength); */ dictid = $2438585bd7e1d91e$var$adler32_1(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) return $2438585bd7e1d91e$var$Z_DATA_ERROR$1;
    }
    /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ ret = $2438585bd7e1d91e$var$updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
        state.mode = $2438585bd7e1d91e$var$MEM;
        return $2438585bd7e1d91e$var$Z_MEM_ERROR$1;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return $2438585bd7e1d91e$var$Z_OK$1;
};
var $2438585bd7e1d91e$var$inflateReset_1 = $2438585bd7e1d91e$var$inflateReset;
var $2438585bd7e1d91e$var$inflateReset2_1 = $2438585bd7e1d91e$var$inflateReset2;
var $2438585bd7e1d91e$var$inflateResetKeep_1 = $2438585bd7e1d91e$var$inflateResetKeep;
var $2438585bd7e1d91e$var$inflateInit_1 = $2438585bd7e1d91e$var$inflateInit;
var $2438585bd7e1d91e$var$inflateInit2_1 = $2438585bd7e1d91e$var$inflateInit2;
var $2438585bd7e1d91e$var$inflate_2$1 = $2438585bd7e1d91e$var$inflate$2;
var $2438585bd7e1d91e$var$inflateEnd_1 = $2438585bd7e1d91e$var$inflateEnd;
var $2438585bd7e1d91e$var$inflateGetHeader_1 = $2438585bd7e1d91e$var$inflateGetHeader;
var $2438585bd7e1d91e$var$inflateSetDictionary_1 = $2438585bd7e1d91e$var$inflateSetDictionary;
var $2438585bd7e1d91e$var$inflateInfo = 'pako inflate (from Nodeca project)';
/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/ var $2438585bd7e1d91e$var$inflate_1$2 = {
    inflateReset: $2438585bd7e1d91e$var$inflateReset_1,
    inflateReset2: $2438585bd7e1d91e$var$inflateReset2_1,
    inflateResetKeep: $2438585bd7e1d91e$var$inflateResetKeep_1,
    inflateInit: $2438585bd7e1d91e$var$inflateInit_1,
    inflateInit2: $2438585bd7e1d91e$var$inflateInit2_1,
    inflate: $2438585bd7e1d91e$var$inflate_2$1,
    inflateEnd: $2438585bd7e1d91e$var$inflateEnd_1,
    inflateGetHeader: $2438585bd7e1d91e$var$inflateGetHeader_1,
    inflateSetDictionary: $2438585bd7e1d91e$var$inflateSetDictionary_1,
    inflateInfo: $2438585bd7e1d91e$var$inflateInfo
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function $2438585bd7e1d91e$var$GZheader() {
    /* true if compressed data believed to be text */ this.text = 0;
    /* modification time */ this.time = 0;
    /* extra flags (not used when writing a gzip file) */ this.xflags = 0;
    /* operating system */ this.os = 0;
    /* pointer to extra field or Z_NULL if none */ this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */ this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //
    /* space at extra (only when reading header) */ // this.extra_max  = 0;
    /* pointer to zero-terminated file name or Z_NULL */ this.name = '';
    /* space at name (only when reading header) */ // this.name_max   = 0;
    /* pointer to zero-terminated comment or Z_NULL */ this.comment = '';
    /* space at comment (only when reading header) */ // this.comm_max   = 0;
    /* true if there was or will be a header crc */ this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */ this.done = false;
}
var $2438585bd7e1d91e$var$gzheader = $2438585bd7e1d91e$var$GZheader;
const $2438585bd7e1d91e$var$toString = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: $2438585bd7e1d91e$var$Z_NO_FLUSH, Z_FINISH: $2438585bd7e1d91e$var$Z_FINISH, Z_OK: $2438585bd7e1d91e$var$Z_OK, Z_STREAM_END: $2438585bd7e1d91e$var$Z_STREAM_END, Z_NEED_DICT: $2438585bd7e1d91e$var$Z_NEED_DICT, Z_STREAM_ERROR: $2438585bd7e1d91e$var$Z_STREAM_ERROR, Z_DATA_ERROR: $2438585bd7e1d91e$var$Z_DATA_ERROR, Z_MEM_ERROR: $2438585bd7e1d91e$var$Z_MEM_ERROR } = $2438585bd7e1d91e$var$constants$2;
/* ===========================================================================*/ /**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/ /* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/ /**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/ /**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/ /**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/ function $2438585bd7e1d91e$var$Inflate$1(options) {
    this.options = $2438585bd7e1d91e$var$common.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ''
    }, options || {});
    const opt = this.options;
    // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) opt.windowBits = -15;
    }
    // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
    // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible
    if (opt.windowBits > 15 && opt.windowBits < 48) // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    {
        if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
    }
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ''; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new $2438585bd7e1d91e$var$zstream();
    this.strm.avail_out = 0;
    let status = $2438585bd7e1d91e$var$inflate_1$2.inflateInit2(this.strm, opt.windowBits);
    if (status !== $2438585bd7e1d91e$var$Z_OK) throw new Error($2438585bd7e1d91e$var$messages[status]);
    this.header = new $2438585bd7e1d91e$var$gzheader();
    $2438585bd7e1d91e$var$inflate_1$2.inflateGetHeader(this.strm, this.header);
    // Setup dictionary
    if (opt.dictionary) {
        // Convert data if needed
        if (typeof opt.dictionary === 'string') opt.dictionary = $2438585bd7e1d91e$var$strings.string2buf(opt.dictionary);
        else if ($2438585bd7e1d91e$var$toString.call(opt.dictionary) === '[object ArrayBuffer]') opt.dictionary = new Uint8Array(opt.dictionary);
        if (opt.raw) {
            status = $2438585bd7e1d91e$var$inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== $2438585bd7e1d91e$var$Z_OK) throw new Error($2438585bd7e1d91e$var$messages[status]);
        }
    }
}
/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ $2438585bd7e1d91e$var$Inflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    let status, _flush_mode, last_avail_out;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? $2438585bd7e1d91e$var$Z_FINISH : $2438585bd7e1d91e$var$Z_NO_FLUSH;
    // Convert data if needed
    if ($2438585bd7e1d91e$var$toString.call(data) === '[object ArrayBuffer]') strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = $2438585bd7e1d91e$var$inflate_1$2.inflate(strm, _flush_mode);
        if (status === $2438585bd7e1d91e$var$Z_NEED_DICT && dictionary) {
            status = $2438585bd7e1d91e$var$inflate_1$2.inflateSetDictionary(strm, dictionary);
            if (status === $2438585bd7e1d91e$var$Z_OK) status = $2438585bd7e1d91e$var$inflate_1$2.inflate(strm, _flush_mode);
            else if (status === $2438585bd7e1d91e$var$Z_DATA_ERROR) // Replace code with more verbose
            status = $2438585bd7e1d91e$var$Z_NEED_DICT;
        }
        // Skip snyc markers if more data follows and not raw mode
        while(strm.avail_in > 0 && status === $2438585bd7e1d91e$var$Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0){
            $2438585bd7e1d91e$var$inflate_1$2.inflateReset(strm);
            status = $2438585bd7e1d91e$var$inflate_1$2.inflate(strm, _flush_mode);
        }
        switch(status){
            case $2438585bd7e1d91e$var$Z_STREAM_ERROR:
            case $2438585bd7e1d91e$var$Z_DATA_ERROR:
            case $2438585bd7e1d91e$var$Z_NEED_DICT:
            case $2438585bd7e1d91e$var$Z_MEM_ERROR:
                this.onEnd(status);
                this.ended = true;
                return false;
        }
        // Remember real `avail_out` value, because we may patch out buffer content
        // to align utf8 strings boundaries.
        last_avail_out = strm.avail_out;
        if (strm.next_out) {
            if (strm.avail_out === 0 || status === $2438585bd7e1d91e$var$Z_STREAM_END) {
                if (this.options.to === 'string') {
                    let next_out_utf8 = $2438585bd7e1d91e$var$strings.utf8border(strm.output, strm.next_out);
                    let tail = strm.next_out - next_out_utf8;
                    let utf8str = $2438585bd7e1d91e$var$strings.buf2string(strm.output, next_out_utf8);
                    // move tail & realign counters
                    strm.next_out = tail;
                    strm.avail_out = chunkSize - tail;
                    if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
                    this.onData(utf8str);
                } else this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
            }
        }
        // Must repeat iteration if out buffer is full
        if (status === $2438585bd7e1d91e$var$Z_OK && last_avail_out === 0) continue;
        // Finalize if end of stream reached.
        if (status === $2438585bd7e1d91e$var$Z_STREAM_END) {
            status = $2438585bd7e1d91e$var$inflate_1$2.inflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return true;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ $2438585bd7e1d91e$var$Inflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ $2438585bd7e1d91e$var$Inflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === $2438585bd7e1d91e$var$Z_OK) {
        if (this.options.to === 'string') this.result = this.chunks.join('');
        else this.result = $2438585bd7e1d91e$var$common.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/ function $2438585bd7e1d91e$var$inflate$1(input, options) {
    const inflator = new $2438585bd7e1d91e$var$Inflate$1(options);
    inflator.push(input);
    // That will never happens, if you don't cheat with options :)
    if (inflator.err) throw inflator.msg || $2438585bd7e1d91e$var$messages[inflator.err];
    return inflator.result;
}
/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function $2438585bd7e1d91e$var$inflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return $2438585bd7e1d91e$var$inflate$1(input, options);
}
/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/ var $2438585bd7e1d91e$var$Inflate_1$1 = $2438585bd7e1d91e$var$Inflate$1;
var $2438585bd7e1d91e$var$inflate_2 = $2438585bd7e1d91e$var$inflate$1;
var $2438585bd7e1d91e$var$inflateRaw_1$1 = $2438585bd7e1d91e$var$inflateRaw$1;
var $2438585bd7e1d91e$var$ungzip$1 = $2438585bd7e1d91e$var$inflate$1;
var $2438585bd7e1d91e$var$constants = $2438585bd7e1d91e$var$constants$2;
var $2438585bd7e1d91e$var$inflate_1$1 = {
    Inflate: $2438585bd7e1d91e$var$Inflate_1$1,
    inflate: $2438585bd7e1d91e$var$inflate_2,
    inflateRaw: $2438585bd7e1d91e$var$inflateRaw_1$1,
    ungzip: $2438585bd7e1d91e$var$ungzip$1,
    constants: $2438585bd7e1d91e$var$constants
};
const { Deflate: $2438585bd7e1d91e$var$Deflate, deflate: $2438585bd7e1d91e$var$deflate, deflateRaw: $2438585bd7e1d91e$var$deflateRaw, gzip: $2438585bd7e1d91e$var$gzip } = $2438585bd7e1d91e$var$deflate_1$1;
const { Inflate: $2438585bd7e1d91e$var$Inflate, inflate: $2438585bd7e1d91e$var$inflate, inflateRaw: $2438585bd7e1d91e$var$inflateRaw, ungzip: $2438585bd7e1d91e$var$ungzip } = $2438585bd7e1d91e$var$inflate_1$1;
var $2438585bd7e1d91e$export$ae157b6234afe138 = $2438585bd7e1d91e$var$Deflate;
var $2438585bd7e1d91e$export$2316623ecd1285ab = $2438585bd7e1d91e$var$deflate;
var $2438585bd7e1d91e$export$e95d6a8f69fb340a = $2438585bd7e1d91e$var$deflateRaw;
var $2438585bd7e1d91e$export$69f0ea7cf3a331a8 = $2438585bd7e1d91e$var$gzip;
var $2438585bd7e1d91e$export$d1de70a877d6e43c = $2438585bd7e1d91e$var$Inflate;
var $2438585bd7e1d91e$export$cae1ce83fe4a1782 = $2438585bd7e1d91e$var$inflate;
var $2438585bd7e1d91e$export$d0f0aa2d05c905c5 = $2438585bd7e1d91e$var$inflateRaw;
var $2438585bd7e1d91e$export$95adf9d270383091 = $2438585bd7e1d91e$var$ungzip;
var $2438585bd7e1d91e$export$1a988e7317c65621 = $2438585bd7e1d91e$var$constants$2;
var $2438585bd7e1d91e$export$2e2bcd8739ae039 = {
    Deflate: $2438585bd7e1d91e$export$ae157b6234afe138,
    deflate: $2438585bd7e1d91e$export$2316623ecd1285ab,
    deflateRaw: $2438585bd7e1d91e$export$e95d6a8f69fb340a,
    gzip: $2438585bd7e1d91e$export$69f0ea7cf3a331a8,
    Inflate: $2438585bd7e1d91e$export$d1de70a877d6e43c,
    inflate: $2438585bd7e1d91e$export$cae1ce83fe4a1782,
    inflateRaw: $2438585bd7e1d91e$export$d0f0aa2d05c905c5,
    ungzip: $2438585bd7e1d91e$export$95adf9d270383091,
    constants: $2438585bd7e1d91e$export$1a988e7317c65621
};


/* global SerialPort, ParityType, FlowControlType */ /**
 * Wrapper class around Webserial API to communicate with the serial device.
 * @param {typeof import("w3c-web-serial").SerialPort} device - Requested device prompted by the browser.
 *
 * ```
 * const port = await navigator.serial.requestPort();
 * ```
 */ class $4616b1a2f9a5b082$export$86495b081fef8e52 {
    constructor(device, tracing = false, enableSlipReader = true){
        this.device = device;
        this.tracing = tracing;
        this.slipReaderEnabled = false;
        this.baudrate = 0;
        this.traceLog = "";
        this.lastTraceTime = Date.now();
        this.buffer = new Uint8Array(0);
        this.SLIP_END = 0xc0;
        this.SLIP_ESC = 0xdb;
        this.SLIP_ESC_END = 0xdc;
        this.SLIP_ESC_ESC = 0xdd;
        this._DTR_state = false;
        this.slipReaderEnabled = enableSlipReader;
    }
    /**
     * Request the serial device vendor ID and Product ID as string.
     * @returns {string} Return the device VendorID and ProductID from SerialPortInfo as formatted string.
     */ getInfo() {
        const info = this.device.getInfo();
        return info.usbVendorId && info.usbProductId ? `WebSerial VendorID 0x${info.usbVendorId.toString(16)} ProductID 0x${info.usbProductId.toString(16)}` : "";
    }
    /**
     * Request the serial device product id from SerialPortInfo.
     * @returns {number | undefined} Return the product ID.
     */ getPid() {
        return this.device.getInfo().usbProductId;
    }
    /**
     * Format received or sent data for tracing output.
     * @param {string} message Message to format as trace line.
     */ trace(message) {
        const delta = Date.now() - this.lastTraceTime;
        const prefix = `TRACE ${delta.toFixed(3)}`;
        const traceMessage = `${prefix} ${message}`;
        console.log(traceMessage);
        this.traceLog += traceMessage + "\n";
    }
    async returnTrace() {
        try {
            await navigator.clipboard.writeText(this.traceLog);
            console.log("Text copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    }
    hexify(s) {
        return Array.from(s).map((byte)=>byte.toString(16).padStart(2, "0")).join("").padEnd(16, " ");
    }
    hexConvert(uint8Array, autoSplit = true) {
        if (autoSplit && uint8Array.length > 16) {
            let result = "";
            let s = uint8Array;
            while(s.length > 0){
                const line = s.slice(0, 16);
                const asciiLine = String.fromCharCode(...line).split("").map((c)=>c === " " || c >= " " && c <= "~" && c !== "  " ? c : ".").join("");
                s = s.slice(16);
                result += `\n    ${this.hexify(line.slice(0, 8))} ${this.hexify(line.slice(8))} | ${asciiLine}`;
            }
            return result;
        } else return this.hexify(uint8Array);
    }
    /**
     * Format data packet using the Serial Line Internet Protocol (SLIP).
     * @param {Uint8Array} data Binary unsigned 8 bit array data to format.
     * @returns {Uint8Array} Formatted unsigned 8 bit data array.
     */ slipWriter(data) {
        const outData = [];
        outData.push(0xc0);
        for(let i = 0; i < data.length; i++){
            if (data[i] === 0xdb) outData.push(0xdb, 0xdd);
            else if (data[i] === 0xc0) outData.push(0xdb, 0xdc);
            else outData.push(data[i]);
        }
        outData.push(0xc0);
        return new Uint8Array(outData);
    }
    /**
     * Write binary data to device using the WebSerial device writable stream.
     * @param {Uint8Array} data 8 bit unsigned data array to write to device.
     */ async write(data) {
        const outData = this.slipWriter(data);
        if (this.device.writable) {
            const writer = this.device.writable.getWriter();
            if (this.tracing) {
                console.log("Write bytes");
                this.trace(`Write ${outData.length} bytes: ${this.hexConvert(outData)}`);
            }
            await writer.write(outData);
            writer.releaseLock();
        }
    }
    /**
     * Append a buffer array after another buffer array
     * @param {Uint8Array} arr1 - First array buffer.
     * @param {Uint8Array} arr2 - magic hex number to select ROM.
     * @returns {Uint8Array} Return a 8 bit unsigned array.
     */ appendArray(arr1, arr2) {
        const combined = new Uint8Array(arr1.length + arr2.length);
        combined.set(arr1);
        combined.set(arr2, arr1.length);
        return combined;
    }
    // Asynchronous generator to yield incoming data chunks
    async *readLoop(timeout) {
        if (!this.reader) return;
        try {
            while(true){
                const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Read timeout exceeded")), timeout));
                // Await the race between the timeout and the reader read
                const result = await Promise.race([
                    this.reader.read(),
                    timeoutPromise
                ]);
                // If a timeout occurs, result will be null; otherwise, it will have { value, done }
                if (result === null) break;
                const { value: value, done: done } = result;
                if (done || !value) break;
                yield value; // Yield each data chunk
            }
        } catch (error) {
            console.error("Error reading from serial port:", error);
        } finally{
            this.buffer = new Uint8Array(0);
        }
    }
    // Read a specific number of bytes
    async newRead(numBytes, timeout) {
        if (this.buffer.length >= numBytes) {
            const output = this.buffer.slice(0, numBytes);
            this.buffer = this.buffer.slice(numBytes); // Remove the returned data from buffer
            return output;
        }
        while(this.buffer.length < numBytes){
            const readLoop = this.readLoop(timeout);
            const { value: value, done: done } = await readLoop.next();
            if (done || !value) break;
            // Append the newly read data to the buffer
            this.buffer = this.appendArray(this.buffer, value);
        }
        // Return as much data as possible
        const output = this.buffer.slice(0, numBytes);
        this.buffer = this.buffer.slice(numBytes);
        return output;
    }
    async flushInput() {
        var _a;
        if (this.reader && !await this.reader.closed) {
            await this.reader.cancel();
            this.reader.releaseLock();
            this.reader = (_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.getReader();
        }
    }
    async flushOutput() {
        var _a, _b;
        this.buffer = new Uint8Array(0);
        await ((_a = this.device.writable) === null || _a === void 0 ? void 0 : _a.getWriter().close());
        (_b = this.device.writable) === null || _b === void 0 || _b.getWriter().releaseLock();
    }
    // `inWaiting` returns the count of bytes in the buffer
    inWaiting() {
        return this.buffer.length;
    }
    /**
     * Detect if the data read from device is a Fatal or Guru meditation error.
     * @param {Uint8Array} input Data read from device
     */ detectPanicHandler(input) {
        const guruMeditationRegex = /G?uru Meditation Error: (?:Core \d panic'ed \(([a-zA-Z ]*)\))?/;
        const fatalExceptionRegex = /F?atal exception \(\d+\): (?:([a-zA-Z ]*)?.*epc)?/;
        const inputString = new TextDecoder("utf-8").decode(input);
        const match = inputString.match(guruMeditationRegex) || inputString.match(fatalExceptionRegex);
        if (match) {
            const cause = match[1] || match[2];
            const msg = `Guru Meditation Error detected${cause ? ` (${cause})` : ""}`;
            throw new Error(msg);
        }
    }
    /**
     * Take a data array and return the first well formed packet after
     * replacing the escape sequence. Reads at least 8 bytes.
     * @param {number} timeout Timeout read data.
     * @yields {Uint8Array} Formatted packet using SLIP escape sequences.
     */ async *read(timeout) {
        var _a;
        if (!this.reader) this.reader = (_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.getReader();
        let partialPacket = null;
        let isEscaping = false;
        let successfulSlip = false;
        while(true){
            const waitingBytes = this.inWaiting();
            const readBytes = await this.newRead(waitingBytes > 0 ? waitingBytes : 1, timeout);
            if (!readBytes || readBytes.length === 0) {
                const msg = partialPacket === null ? successfulSlip ? "Serial data stream stopped: Possible serial noise or corruption." : "No serial data received." : `Packet content transfer stopped`;
                this.trace(msg);
                throw new Error(msg);
            }
            this.trace(`Read ${readBytes.length} bytes: ${this.hexConvert(readBytes)}`);
            let i = 0; // Track position in readBytes
            while(i < readBytes.length){
                const byte = readBytes[i++];
                if (partialPacket === null) {
                    if (byte === this.SLIP_END) partialPacket = new Uint8Array(0); // Start of a new packet
                    else {
                        this.trace(`Read invalid data: ${this.hexConvert(readBytes)}`);
                        const remainingData = await this.newRead(this.inWaiting(), timeout);
                        this.trace(`Remaining data in serial buffer: ${this.hexConvert(remainingData)}`);
                        this.detectPanicHandler(new Uint8Array([
                            ...readBytes,
                            ...remainingData || []
                        ]));
                        throw new Error(`Invalid head of packet (0x${byte.toString(16)}): Possible serial noise or corruption.`);
                    }
                } else if (isEscaping) {
                    isEscaping = false;
                    if (byte === this.SLIP_ESC_END) partialPacket = this.appendArray(partialPacket, new Uint8Array([
                        this.SLIP_END
                    ]));
                    else if (byte === this.SLIP_ESC_ESC) partialPacket = this.appendArray(partialPacket, new Uint8Array([
                        this.SLIP_ESC
                    ]));
                    else {
                        this.trace(`Read invalid data: ${this.hexConvert(readBytes)}`);
                        const remainingData = await this.newRead(this.inWaiting(), timeout);
                        this.trace(`Remaining data in serial buffer: ${this.hexConvert(remainingData)}`);
                        this.detectPanicHandler(new Uint8Array([
                            ...readBytes,
                            ...remainingData || []
                        ]));
                        throw new Error(`Invalid SLIP escape (0xdb, 0x${byte.toString(16)})`);
                    }
                } else if (byte === this.SLIP_ESC) isEscaping = true;
                else if (byte === this.SLIP_END) {
                    this.trace(`Received full packet: ${this.hexConvert(partialPacket)}`);
                    this.buffer = this.appendArray(this.buffer, readBytes.slice(i));
                    yield partialPacket;
                    partialPacket = null;
                    successfulSlip = true;
                } else partialPacket = this.appendArray(partialPacket, new Uint8Array([
                    byte
                ]));
            }
        }
    }
    /**
     * Read from serial device without slip formatting.
     * @yields {Uint8Array} The next number in the Fibonacci sequence.
     */ async *rawRead() {
        if (!this.reader) return;
        try {
            while(true){
                const { value: value, done: done } = await this.reader.read();
                if (done || !value) break;
                if (this.tracing) {
                    console.log("Raw Read bytes");
                    this.trace(`Read ${value.length} bytes: ${this.hexConvert(value)}`);
                }
                yield value; // Yield each data chunk
            }
        } catch (error) {
            console.error("Error reading from serial port:", error);
        } finally{
            this.buffer = new Uint8Array(0);
        }
    }
    /**
     * Send the RequestToSend (RTS) signal to given state
     * # True for EN=LOW, chip in reset and False EN=HIGH, chip out of reset
     * @param {boolean} state Boolean state to set the signal
     */ async setRTS(state) {
        await this.device.setSignals({
            requestToSend: state
        });
        // # Work-around for adapters on Windows using the usbser.sys driver:
        // # generate a dummy change to DTR so that the set-control-line-state
        // # request is sent with the updated RTS state and the same DTR state
        // Referenced to esptool.py
        await this.setDTR(this._DTR_state);
    }
    /**
     * Send the dataTerminalReady (DTS) signal to given state
     * # True for IO0=LOW, chip in reset and False IO0=HIGH
     * @param {boolean} state Boolean state to set the signal
     */ async setDTR(state) {
        this._DTR_state = state;
        await this.device.setSignals({
            dataTerminalReady: state
        });
    }
    /**
     * Connect to serial device using the Webserial open method.
     * @param {number} baud Number baud rate for serial connection. Default is 115200.
     * @param {typeof import("w3c-web-serial").SerialOptions} serialOptions Serial Options for WebUSB SerialPort class.
     */ async connect(baud = 115200, serialOptions = {}) {
        var _a;
        await this.device.open({
            baudRate: baud,
            dataBits: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.dataBits,
            stopBits: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.stopBits,
            bufferSize: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.bufferSize,
            parity: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.parity,
            flowControl: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.flowControl
        });
        this.baudrate = baud;
        this.reader = (_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.getReader();
    }
    async sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    /**
     * Wait for a given timeout ms for serial device unlock.
     * @param {number} timeout Timeout time in milliseconds (ms) to sleep
     */ async waitForUnlock(timeout) {
        while(this.device.readable && this.device.readable.locked || this.device.writable && this.device.writable.locked)await this.sleep(timeout);
    }
    /**
     * Disconnect from serial device by running SerialPort.close() after streams unlock.
     */ async disconnect() {
        var _a, _b;
        if ((_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.locked) await ((_b = this.reader) === null || _b === void 0 ? void 0 : _b.cancel());
        await this.waitForUnlock(400);
        await this.device.close();
        this.reader = undefined;
    }
}


/**
 * Sleep for ms milliseconds
 * @param {number} ms Milliseconds to wait
 * @returns {Promise<void>}
 */ function $c7981c93d06fe700$var$sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
class $c7981c93d06fe700$export$4de7cfbc0d78cb8e {
    constructor(transport, resetDelay){
        this.resetDelay = resetDelay;
        this.transport = transport;
    }
    async reset() {
        await this.transport.setDTR(false);
        await this.transport.setRTS(true);
        await $c7981c93d06fe700$var$sleep(100);
        await this.transport.setDTR(true);
        await this.transport.setRTS(false);
        await $c7981c93d06fe700$var$sleep(this.resetDelay);
        await this.transport.setDTR(false);
    }
}
class $c7981c93d06fe700$export$f728aa04f347362c {
    constructor(transport){
        this.transport = transport;
    }
    async reset() {
        await this.transport.setRTS(false);
        await this.transport.setDTR(false);
        await $c7981c93d06fe700$var$sleep(100);
        await this.transport.setDTR(true);
        await this.transport.setRTS(false);
        await $c7981c93d06fe700$var$sleep(100);
        await this.transport.setRTS(true);
        await this.transport.setDTR(false);
        await this.transport.setRTS(true);
        await $c7981c93d06fe700$var$sleep(100);
        await this.transport.setRTS(false);
        await this.transport.setDTR(false);
    }
}
class $c7981c93d06fe700$export$529f1679a228f28a {
    constructor(transport, usingUsbOtg = false){
        this.transport = transport;
        this.usingUsbOtg = usingUsbOtg;
        this.transport = transport;
    }
    async reset() {
        if (this.usingUsbOtg) {
            await $c7981c93d06fe700$var$sleep(200);
            await this.transport.setRTS(false);
            await $c7981c93d06fe700$var$sleep(200);
        } else {
            await $c7981c93d06fe700$var$sleep(100);
            await this.transport.setRTS(false);
        }
    }
}
function $c7981c93d06fe700$export$929a22f56823f4cb(seqStr) {
    const commands = [
        "D",
        "R",
        "W"
    ];
    const commandsList = seqStr.split("|");
    for (const cmd of commandsList){
        const code = cmd[0];
        const arg = cmd.slice(1);
        if (!commands.includes(code)) return false; // Invalid command code
        if (code === "D" || code === "R") {
            if (arg !== "0" && arg !== "1") return false; // Invalid argument for D and R commands
        } else if (code === "W") {
            const delay = parseInt(arg);
            if (isNaN(delay) || delay <= 0) return false; // Invalid argument for W command
        }
    }
    return true; // All commands are valid
}
class $c7981c93d06fe700$export$587746fadce59bb9 {
    constructor(transport, sequenceString){
        this.transport = transport;
        this.sequenceString = sequenceString;
        this.transport = transport;
    }
    async reset() {
        const resetDictionary = {
            D: async (arg)=>await this.transport.setDTR(arg),
            R: async (arg)=>await this.transport.setRTS(arg),
            W: async (delay)=>await $c7981c93d06fe700$var$sleep(delay)
        };
        try {
            const isValidSequence = $c7981c93d06fe700$export$929a22f56823f4cb(this.sequenceString);
            if (!isValidSequence) return;
            const cmds = this.sequenceString.split("|");
            for (const cmd of cmds){
                const cmdKey = cmd[0];
                const cmdVal = cmd.slice(1);
                if (cmdKey === "W") await resetDictionary["W"](Number(cmdVal));
                else if (cmdKey === "D" || cmdKey === "R") await resetDictionary[cmdKey](cmdVal === "1");
            }
        } catch (error) {
            throw new Error("Invalid custom reset sequence");
        }
    }
}
var $c7981c93d06fe700$export$2e2bcd8739ae039 = {
    ClassicReset: $c7981c93d06fe700$export$4de7cfbc0d78cb8e,
    CustomReset: $c7981c93d06fe700$export$587746fadce59bb9,
    HardReset: $c7981c93d06fe700$export$529f1679a228f28a,
    UsbJtagSerialReset: $c7981c93d06fe700$export$f728aa04f347362c,
    validateCustomResetStringSequence: $c7981c93d06fe700$export$929a22f56823f4cb
};


var $eb08ceb29680012e$exports = {};
$eb08ceb29680012e$exports = function _atob(str) {
    return atob(str);
};













async function $c14fcc49e58a64cf$export$575862e1d5c85871(chipName) {
    let jsonStub;
    switch(chipName){
        case "ESP32":
            jsonStub = await (parcelRequire("gcSQu"));
            break;
        case "ESP32-C2":
            jsonStub = await (parcelRequire("4e0vU"));
            break;
        case "ESP32-C3":
            jsonStub = await (parcelRequire("ky1SY"));
            break;
        case "ESP32-C5":
            jsonStub = await (parcelRequire("2EAPS"));
            break;
        case "ESP32-C6":
            jsonStub = await (parcelRequire("2lWmv"));
            break;
        case "ESP32-C61":
            jsonStub = await (parcelRequire("2Exj3"));
            break;
        case "ESP32-H2":
            jsonStub = await (parcelRequire("l1j0E"));
            break;
        case "ESP32-P4":
            jsonStub = await (parcelRequire("jF0Ow"));
            break;
        case "ESP32-S2":
            jsonStub = await (parcelRequire("bQFHR"));
            break;
        case "ESP32-S3":
            jsonStub = await (parcelRequire("4CSyV"));
            break;
        case "ESP8266":
            jsonStub = await (parcelRequire("2j7bN"));
            break;
    }
    if (jsonStub) return {
        bss_start: jsonStub.bss_start,
        data: jsonStub.data,
        data_start: jsonStub.data_start,
        entry: jsonStub.entry,
        text: jsonStub.text,
        text_start: jsonStub.text_start,
        decodedData: $c14fcc49e58a64cf$export$7e57cd56df6c9bb5(jsonStub.data),
        decodedText: $c14fcc49e58a64cf$export$7e57cd56df6c9bb5(jsonStub.text)
    };
    return;
}
function $c14fcc49e58a64cf$export$7e57cd56df6c9bb5(dataStr) {
    const decoded = (0, (/*@__PURE__*/$parcel$interopDefault($eb08ceb29680012e$exports)))(dataStr);
    const chardata = decoded.split("").map(function(x) {
        return x.charCodeAt(0);
    });
    return new Uint8Array(chardata);
}


/**
 * Pad to the next alignment boundary
 * @param {Uint8Array} data Uint8Array data to pad
 * @param {number} alignment Alignment boundary to fulfill
 * @param {number} padCharacter Character to fill with
 * @returns {Uint8Array} Padded UInt8Array image
 */ function $216eff205ef04904$export$fcbe1efa6919329(data, alignment, padCharacter = 0xff) {
    const padMod = data.length % alignment;
    if (padMod !== 0) {
        const padding = new Uint8Array(alignment - padMod).fill(padCharacter);
        const paddedData = new Uint8Array(data.length + padding.length);
        paddedData.set(data);
        paddedData.set(padding, data.length);
        return paddedData;
    }
    return data;
}













/**
 * Return the chip ROM based on the given magic number
 * @param {number} magic - magic hex number to select ROM.
 * @returns {ROM} The chip ROM class related to given magic hex number.
 */ async function $b9be20b2c9078c9b$var$magic2Chip(magic) {
    switch(magic){
        case 0x00f01d83:
            {
                const { ESP32ROM: ESP32ROM } = await (parcelRequire("ktqd8"));
                return new ESP32ROM();
            }
        case 0x6f51306f:
        case 0x7c41a06f:
            {
                const { ESP32C2ROM: ESP32C2ROM } = await (parcelRequire("75lrL"));
                return new ESP32C2ROM();
            }
        case 0x6921506f:
        case 0x1b31506f:
        case 0x4881606f:
        case 0x4361606f:
            {
                const { ESP32C3ROM: ESP32C3ROM } = await (parcelRequire("duKZl"));
                return new ESP32C3ROM();
            }
        case 0x2ce0806f:
            {
                const { ESP32C6ROM: ESP32C6ROM } = await (parcelRequire("dvhVK"));
                return new ESP32C6ROM();
            }
        case 0x33f0206f:
        case 0x2421606f:
            {
                const { ESP32C61ROM: ESP32C61ROM } = await (parcelRequire("i252s"));
                return new ESP32C61ROM();
            }
        case 0x1101406f:
        case 0x63e1406f:
            {
                const { ESP32C5ROM: ESP32C5ROM } = await (parcelRequire("i6fLF"));
                return new ESP32C5ROM();
            }
        case 0xd7b73e80:
            {
                const { ESP32H2ROM: ESP32H2ROM } = await (parcelRequire("3UbGO"));
                return new ESP32H2ROM();
            }
        case 0x09:
            {
                const { ESP32S3ROM: ESP32S3ROM } = await (parcelRequire("duiLk"));
                return new ESP32S3ROM();
            }
        case 0x000007c6:
            {
                const { ESP32S2ROM: ESP32S2ROM } = await (parcelRequire("2CBAX"));
                return new ESP32S2ROM();
            }
        case 0xfff0c101:
            {
                const { ESP8266ROM: ESP8266ROM } = await (parcelRequire("fzzuQ"));
                return new ESP8266ROM();
            }
        case 0x0:
        case 0x0addbad0:
        case 0x7039ad9:
            {
                const { ESP32P4ROM: ESP32P4ROM } = await (parcelRequire("5MwrU"));
                return new ESP32P4ROM();
            }
        default:
            return null;
    }
}
class $b9be20b2c9078c9b$export$b0f7a6c745790308 {
    /**
     * Create a new ESPLoader to perform serial communication
     * such as read/write flash memory and registers using a LoaderOptions object.
     * @param {LoaderOptions} options - LoaderOptions object argument for ESPLoader.
     * ```
     * const myLoader = new ESPLoader({ transport: Transport, baudrate: number, terminal?: IEspLoaderTerminal });
     * ```
     */ constructor(options){
        this.ESP_RAM_BLOCK = 0x1800;
        this.ESP_FLASH_BEGIN = 0x02;
        this.ESP_FLASH_DATA = 0x03;
        this.ESP_FLASH_END = 0x04;
        this.ESP_MEM_BEGIN = 0x05;
        this.ESP_MEM_END = 0x06;
        this.ESP_MEM_DATA = 0x07;
        this.ESP_WRITE_REG = 0x09;
        this.ESP_READ_REG = 0x0a;
        this.ESP_SPI_ATTACH = 0x0d;
        this.ESP_CHANGE_BAUDRATE = 0x0f;
        this.ESP_FLASH_DEFL_BEGIN = 0x10;
        this.ESP_FLASH_DEFL_DATA = 0x11;
        this.ESP_FLASH_DEFL_END = 0x12;
        this.ESP_SPI_FLASH_MD5 = 0x13;
        // Only Stub supported commands
        this.ESP_ERASE_FLASH = 0xd0;
        this.ESP_ERASE_REGION = 0xd1;
        this.ESP_READ_FLASH = 0xd2;
        this.ESP_RUN_USER_CODE = 0xd3;
        this.ESP_IMAGE_MAGIC = 0xe9;
        this.ESP_CHECKSUM_MAGIC = 0xef;
        // Response code(s) sent by ROM
        this.ROM_INVALID_RECV_MSG = 0x05; // response if an invalid message is received
        this.DEFAULT_TIMEOUT = 3000;
        this.ERASE_REGION_TIMEOUT_PER_MB = 30000;
        this.ERASE_WRITE_TIMEOUT_PER_MB = 40000;
        this.MD5_TIMEOUT_PER_MB = 8000;
        this.CHIP_ERASE_TIMEOUT = 120000;
        this.FLASH_READ_TIMEOUT = 100000;
        this.MAX_TIMEOUT = this.CHIP_ERASE_TIMEOUT * 2;
        this.CHIP_DETECT_MAGIC_REG_ADDR = 0x40001000;
        this.DETECTED_FLASH_SIZES = {
            0x12: "256KB",
            0x13: "512KB",
            0x14: "1MB",
            0x15: "2MB",
            0x16: "4MB",
            0x17: "8MB",
            0x18: "16MB"
        };
        this.DETECTED_FLASH_SIZES_NUM = {
            0x12: 256,
            0x13: 512,
            0x14: 1024,
            0x15: 2048,
            0x16: 4096,
            0x17: 8192,
            0x18: 16384
        };
        this.USB_JTAG_SERIAL_PID = 0x1001;
        this.romBaudrate = 115200;
        this.debugLogging = false;
        this.syncStubDetected = false;
        /**
         * Get flash size bytes from flash size string.
         * @param {string} flashSize Flash Size string
         * @returns {number} Flash size bytes
         */ this.flashSizeBytes = function(flashSize) {
            let flashSizeB = -1;
            if (flashSize.indexOf("KB") !== -1) flashSizeB = parseInt(flashSize.slice(0, flashSize.indexOf("KB"))) * 1024;
            else if (flashSize.indexOf("MB") !== -1) flashSizeB = parseInt(flashSize.slice(0, flashSize.indexOf("MB"))) * 1048576;
            return flashSizeB;
        };
        this.IS_STUB = false;
        this.FLASH_WRITE_SIZE = 0x4000;
        this.transport = options.transport;
        this.baudrate = options.baudrate;
        if (options.serialOptions) this.serialOptions = options.serialOptions;
        if (options.romBaudrate) this.romBaudrate = options.romBaudrate;
        if (options.terminal) {
            this.terminal = options.terminal;
            this.terminal.clean();
        }
        if (typeof options.debugLogging !== "undefined") this.debugLogging = options.debugLogging;
        if (options.port) this.transport = new (0, $4616b1a2f9a5b082$export$86495b081fef8e52)(options.port);
        if (typeof options.enableTracing !== "undefined") this.transport.tracing = options.enableTracing;
        this.info("esptool.js");
        this.info("Serial port " + this.transport.getInfo());
    }
    _sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    /**
     * Write to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ write(str, withNewline = true) {
        if (this.terminal) {
            if (withNewline) this.terminal.writeLine(str);
            else this.terminal.write(str);
        } else // eslint-disable-next-line no-console
        console.log(str);
    }
    /**
     * Write error message to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ error(str, withNewline = true) {
        this.write(`Error: ${str}`, withNewline);
    }
    /**
     * Write information message to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ info(str, withNewline = true) {
        this.write(str, withNewline);
    }
    /**
     * Write debug message to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ debug(str, withNewline = true) {
        if (this.debugLogging) this.write(`Debug: ${str}`, withNewline);
    }
    /**
     * Convert short integer to byte array
     * @param {number} i - Number to convert.
     * @returns {Uint8Array} Byte array.
     */ _shortToBytearray(i) {
        return new Uint8Array([
            i & 0xff,
            i >> 8 & 0xff
        ]);
    }
    /**
     * Convert an integer to byte array
     * @param {number} i - Number to convert.
     * @returns {ROM} The chip ROM class related to given magic hex number.
     */ _intToByteArray(i) {
        return new Uint8Array([
            i & 0xff,
            i >> 8 & 0xff,
            i >> 16 & 0xff,
            i >> 24 & 0xff
        ]);
    }
    /**
     * Convert a byte array to short integer.
     * @param {number} i - Number to convert.
     * @param {number} j - Number to convert.
     * @returns {number} Return a short integer number.
     */ _byteArrayToShort(i, j) {
        return i | j >> 8;
    }
    /**
     * Convert a byte array to integer.
     * @param {number} i - Number to convert.
     * @param {number} j - Number to convert.
     * @param {number} k - Number to convert.
     * @param {number} l - Number to convert.
     * @returns {number} Return a integer number.
     */ _byteArrayToInt(i, j, k, l) {
        return i | j << 8 | k << 16 | l << 24;
    }
    /**
     * Append a buffer array after another buffer array
     * @param {ArrayBuffer} buffer1 - First array buffer.
     * @param {ArrayBuffer} buffer2 - magic hex number to select ROM.
     * @returns {ArrayBufferLike} Return an array buffer.
     */ _appendBuffer(buffer1, buffer2) {
        const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
        tmp.set(new Uint8Array(buffer1), 0);
        tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
        return tmp.buffer;
    }
    /**
     * Append a buffer array after another buffer array
     * @param {Uint8Array} arr1 - First array buffer.
     * @param {Uint8Array} arr2 - magic hex number to select ROM.
     * @returns {Uint8Array} Return a 8 bit unsigned array.
     */ _appendArray(arr1, arr2) {
        const c = new Uint8Array(arr1.length + arr2.length);
        c.set(arr1, 0);
        c.set(arr2, arr1.length);
        return c;
    }
    /**
     * Convert a unsigned 8 bit integer array to byte string.
     * @param {Uint8Array} u8Array - magic hex number to select ROM.
     * @returns {string} Return the equivalent string.
     */ ui8ToBstr(u8Array) {
        let bStr = "";
        for(let i = 0; i < u8Array.length; i++)bStr += String.fromCharCode(u8Array[i]);
        return bStr;
    }
    /**
     * Convert a byte string to unsigned 8 bit integer array.
     * @param {string} bStr - binary string input
     * @returns {Uint8Array} Return a 8 bit unsigned integer array.
     */ bstrToUi8(bStr) {
        const u8Array = new Uint8Array(bStr.length);
        for(let i = 0; i < bStr.length; i++)u8Array[i] = bStr.charCodeAt(i);
        return u8Array;
    }
    /**
     * Flush the serial input by raw read with 200 ms timeout.
     */ async flushInput() {
        try {
            await this.transport.flushInput();
        } catch (e) {
            this.error(e.message);
        }
    }
    /**
     * Use the device serial port read function with given timeout to create a valid packet.
     * @param {number} op Operation number
     * @param {number} timeout timeout number in milliseconds
     * @returns {[number, Uint8Array]} valid response packet.
     */ async readPacket(op = null, timeout = this.DEFAULT_TIMEOUT) {
        // Check up-to next 100 packets for valid response packet
        for(let i = 0; i < 100; i++){
            const { value: p } = await this.transport.read(timeout).next();
            if (!p || p.length < 8) continue;
            const resp = p[0];
            if (resp !== 1) continue;
            const opRet = p[1];
            const val = this._byteArrayToInt(p[4], p[5], p[6], p[7]);
            const data = p.slice(8);
            if (resp == 1) {
                if (op == null || opRet == op) return [
                    val,
                    data
                ];
                else if (data[0] != 0 && data[1] == this.ROM_INVALID_RECV_MSG) {
                    await this.flushInput();
                    throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("unsupported command error");
                }
            }
        }
        throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("invalid response");
    }
    /**
     * Write a serial command to the chip
     * @param {number} op - Operation number
     * @param {Uint8Array} data - Unsigned 8 bit array
     * @param {number} chk - channel number
     * @param {boolean} waitResponse - wait for response ?
     * @param {number} timeout - timeout number in milliseconds
     * @returns {Promise<[number, Uint8Array]>} Return a number and a 8 bit unsigned integer array.
     */ async command(op = null, data = new Uint8Array(0), chk = 0, waitResponse = true, timeout = this.DEFAULT_TIMEOUT) {
        if (op != null) {
            if (this.transport.tracing) this.transport.trace(`command op:0x${op.toString(16).padStart(2, "0")} data len=${data.length} wait_response=${waitResponse ? 1 : 0} timeout=${(timeout / 1000).toFixed(3)} data=${this.transport.hexConvert(data)}`);
            const pkt = new Uint8Array(8 + data.length);
            pkt[0] = 0x00;
            pkt[1] = op;
            pkt[2] = this._shortToBytearray(data.length)[0];
            pkt[3] = this._shortToBytearray(data.length)[1];
            pkt[4] = this._intToByteArray(chk)[0];
            pkt[5] = this._intToByteArray(chk)[1];
            pkt[6] = this._intToByteArray(chk)[2];
            pkt[7] = this._intToByteArray(chk)[3];
            let i;
            for(i = 0; i < data.length; i++)pkt[8 + i] = data[i];
            await this.transport.write(pkt);
        }
        if (!waitResponse) return [
            0,
            new Uint8Array(0)
        ];
        return this.readPacket(op, timeout);
    }
    /**
     * Read a register from chip.
     * @param {number} addr - Register address number
     * @param {number} timeout - Timeout in milliseconds (Default: 3000ms)
     * @returns {number} - Command number value
     */ async readReg(addr, timeout = this.DEFAULT_TIMEOUT) {
        const pkt = this._intToByteArray(addr);
        const val = await this.command(this.ESP_READ_REG, pkt, undefined, undefined, timeout);
        return val[0];
    }
    /**
     * Write a number value to register address in chip.
     * @param {number} addr - Register address number
     * @param {number} value - Number value to write in register
     * @param {number} mask - Hex number for mask
     * @param {number} delayUs Delay number
     * @param {number} delayAfterUs Delay after previous delay
     */ async writeReg(addr, value, mask = 0xffffffff, delayUs = 0, delayAfterUs = 0) {
        let pkt = this._appendArray(this._intToByteArray(addr), this._intToByteArray(value));
        pkt = this._appendArray(pkt, this._intToByteArray(mask));
        pkt = this._appendArray(pkt, this._intToByteArray(delayUs));
        if (delayAfterUs > 0) {
            pkt = this._appendArray(pkt, this._intToByteArray(this.chip.UART_DATE_REG_ADDR));
            pkt = this._appendArray(pkt, this._intToByteArray(0));
            pkt = this._appendArray(pkt, this._intToByteArray(0));
            pkt = this._appendArray(pkt, this._intToByteArray(delayAfterUs));
        }
        await this.checkCommand("write target memory", this.ESP_WRITE_REG, pkt);
    }
    /**
     * Sync chip by sending sync command.
     * @returns {[number, Uint8Array]} Command result
     */ async sync() {
        this.debug("Sync");
        const cmd = new Uint8Array(36);
        let i;
        cmd[0] = 0x07;
        cmd[1] = 0x07;
        cmd[2] = 0x12;
        cmd[3] = 0x20;
        for(i = 0; i < 32; i++)cmd[4 + i] = 0x55;
        try {
            let resp = await this.command(0x08, cmd, undefined, undefined, 100);
            // ROM bootloaders send some non-zero "val" response. The flasher stub sends 0.
            // If we receive 0 then it probably indicates that the chip wasn't or couldn't be
            // reset properly and esptool is talking to the flasher stub.
            this.syncStubDetected = resp[0] === 0;
            for(let i = 0; i < 7; i++){
                resp = await this.command();
                this.syncStubDetected = this.syncStubDetected && resp[0] === 0;
            }
            return resp;
        } catch (e) {
            this.debug("Sync err " + e);
            throw e;
        }
    }
    /**
     * Attempt to connect to the chip by sending a reset sequence and later a sync command.
     * @param {string} mode - Reset mode to use
     * @param {ResetStrategy} resetStrategy - Reset strategy class to use for connect
     * @returns {string} - Returns 'success' or 'error' message.
     */ async _connectAttempt(mode = "default_reset", resetStrategy) {
        this.debug("_connect_attempt " + mode);
        await resetStrategy.reset();
        const waitingBytes = this.transport.inWaiting();
        const readBytes = await this.transport.newRead(waitingBytes > 0 ? waitingBytes : 1, this.DEFAULT_TIMEOUT);
        const binaryString = Array.from(readBytes, (byte)=>String.fromCharCode(byte)).join("");
        const regex = /boot:(0x[0-9a-fA-F]+)(.*waiting for download)?/;
        const match = binaryString.match(regex);
        let bootLogDetected = false, bootMode = "", downloadMode = false;
        if (match) {
            bootLogDetected = true;
            bootMode = match[1];
            downloadMode = !!match[2];
        }
        let lastError = "";
        for(let i = 0; i < 5; i++)try {
            this.debug(`Sync connect attempt ${i}`);
            const resp = await this.sync();
            this.debug(resp[0].toString());
            return "success";
        } catch (error) {
            this.debug(`Error at sync ${error}`);
            if (error instanceof Error) lastError = error.message;
            else if (typeof error === "string") lastError = error;
            else lastError = JSON.stringify(error);
        }
        if (bootLogDetected) {
            lastError = `Wrong boot mode detected (${bootMode}).
        This chip needs to be in download mode.`;
            if (downloadMode) lastError = `Download mode successfully detected, but getting no sync reply:
           The serial TX path seems to be down.`;
        }
        return lastError;
    }
    constructResetSequency() {
        if (this.transport.getPid() === this.USB_JTAG_SERIAL_PID) {
            // Custom reset sequence, which is required when the device
            // is connecting via its USB-JTAG-Serial peripheral
            this.debug("using USB JTAG Serial Reset");
            return [
                new (0, $c7981c93d06fe700$export$f728aa04f347362c)(this.transport)
            ];
        } else {
            const DEFAULT_RESET_DELAY = 50;
            const EXTRA_DELAY = DEFAULT_RESET_DELAY + 500;
            this.debug("using Classic Serial Reset");
            return [
                new (0, $c7981c93d06fe700$export$4de7cfbc0d78cb8e)(this.transport, DEFAULT_RESET_DELAY),
                new (0, $c7981c93d06fe700$export$4de7cfbc0d78cb8e)(this.transport, EXTRA_DELAY)
            ];
        }
    }
    /**
     * Perform a connection to chip.
     * @param {string} mode - Reset mode to use. Example: 'default_reset' | 'no_reset'
     * @param {number} attempts - Number of connection attempts
     * @param {boolean} detecting - Detect the connected chip
     */ async connect(mode = "default_reset", attempts = 7, detecting = false) {
        let resp;
        this.info("Connecting...", false);
        await this.transport.connect(this.romBaudrate, this.serialOptions);
        const resetSequences = this.constructResetSequency();
        for(let i = 0; i < attempts; i++){
            const resetSequence = resetSequences[i % resetSequences.length];
            resp = await this._connectAttempt(mode, resetSequence);
            if (resp === "success") break;
        }
        if (resp !== "success") throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Failed to connect with the device");
        this.debug("Connect attempt successful.");
        this.info("\n\r", false);
        if (!detecting) {
            const chipMagicValue = await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR) >>> 0;
            this.debug("Chip Magic " + chipMagicValue.toString(16));
            const chip = await $b9be20b2c9078c9b$var$magic2Chip(chipMagicValue);
            if (this.chip === null) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)(`Unexpected CHIP magic value ${chipMagicValue}. Failed to autodetect chip type.`);
            else this.chip = chip;
        }
    }
    /**
     * Connect and detect the existing chip.
     * @param {string} mode Reset mode to use for connection.
     */ async detectChip(mode = "default_reset") {
        await this.connect(mode, this.romBaudrate);
        this.info("Detecting chip type... ", false);
        if (this.chip != null) this.info(this.chip.CHIP_NAME);
        else this.info("unknown!");
    }
    /**
     * Execute the command and check the command response.
     * @param {string} opDescription Command operation description.
     * @param {number} op Command operation number
     * @param {Uint8Array} data Command value
     * @param {number} chk Checksum to use
     * @param {number} timeout TImeout number in milliseconds (ms)
     * @returns {number} Command result
     */ async checkCommand(opDescription = "", op = null, data = new Uint8Array(0), chk = 0, timeout = this.DEFAULT_TIMEOUT) {
        this.debug("check_command " + opDescription);
        const resp = await this.command(op, data, chk, undefined, timeout);
        if (resp[1].length > 4) return resp[1];
        else return resp[0];
    }
    /**
     * Start downloading an application image to RAM
     * @param {number} size Image size number
     * @param {number} blocks Number of data blocks
     * @param {number} blocksize Size of each data block
     * @param {number} offset Image offset number
     */ async memBegin(size, blocks, blocksize, offset) {
        /* XXX: Add check to ensure that STUB is not getting overwritten */ if (this.IS_STUB) {
            const loadStart = offset;
            const loadEnd = offset + size;
            const stub = await (0, $c14fcc49e58a64cf$export$575862e1d5c85871)(this.chip.CHIP_NAME);
            if (stub) {
                const areasToCheck = [
                    [
                        stub.bss_start || stub.data_start,
                        stub.data_start + stub.decodedData.length
                    ],
                    [
                        stub.text_start,
                        stub.text_start + stub.decodedText.length
                    ]
                ];
                for (const [stubStart, stubEnd] of areasToCheck){
                    if (loadStart < stubEnd && loadEnd > stubStart) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)(`Software loader is resident at 0x${stubStart.toString(16).padStart(8, "0")}-0x${stubEnd.toString(16).padStart(8, "0")}. 
            Can't load binary at overlapping address range 0x${loadStart.toString(16).padStart(8, "0")}-0x${loadEnd.toString(16).padStart(8, "0")}. 
            Either change binary loading address, or use the no-stub option to disable the software loader.`);
                }
            }
        }
        this.debug("mem_begin " + size + " " + blocks + " " + blocksize + " " + offset.toString(16));
        let pkt = this._appendArray(this._intToByteArray(size), this._intToByteArray(blocks));
        pkt = this._appendArray(pkt, this._intToByteArray(blocksize));
        pkt = this._appendArray(pkt, this._intToByteArray(offset));
        await this.checkCommand("enter RAM download mode", this.ESP_MEM_BEGIN, pkt);
    }
    /**
     * Get the checksum for given unsigned 8-bit array
     * @param {Uint8Array} data Unsigned 8-bit integer array
     * @param {number} state Initial checksum
     * @returns {number} - Array checksum
     */ checksum(data, state = this.ESP_CHECKSUM_MAGIC) {
        for(let i = 0; i < data.length; i++)state ^= data[i];
        return state;
    }
    /**
     * Send a block of image to RAM
     * @param {Uint8Array} buffer Unsigned 8-bit array
     * @param {number} seq Sequence number
     */ async memBlock(buffer, seq) {
        let pkt = this._appendArray(this._intToByteArray(buffer.length), this._intToByteArray(seq));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, buffer);
        const checksum = this.checksum(buffer);
        await this.checkCommand("write to target RAM", this.ESP_MEM_DATA, pkt, checksum);
    }
    /**
     * Leave RAM download mode and run application
     * @param {number} entrypoint - Entrypoint number
     */ async memFinish(entrypoint) {
        const isEntry = entrypoint === 0 ? 1 : 0;
        const pkt = this._appendArray(this._intToByteArray(isEntry), this._intToByteArray(entrypoint));
        await this.checkCommand("leave RAM download mode", this.ESP_MEM_END, pkt, undefined, 200); // XXX: handle non-stub with diff timeout
    }
    /**
     * Configure SPI flash pins
     * @param {number} hspiArg -  Argument for SPI attachment
     */ async flashSpiAttach(hspiArg) {
        const pkt = this._intToByteArray(hspiArg);
        await this.checkCommand("configure SPI flash pins", this.ESP_SPI_ATTACH, pkt);
    }
    /**
     * Scale timeouts which are size-specific.
     * @param {number} secondsPerMb Seconds per megabytes as number
     * @param {number} sizeBytes Size bytes number
     * @returns {number} - Scaled timeout for specified size.
     */ timeoutPerMb(secondsPerMb, sizeBytes) {
        const result = secondsPerMb * (sizeBytes / 1000000);
        if (result < 3000) return 3000;
        else return result;
    }
    /**
     * Start downloading to Flash (performs an erase)
     * @param {number} size Size to erase
     * @param {number} offset Offset to erase
     * @returns {number} Number of blocks (of size self.FLASH_WRITE_SIZE) to write.
     */ async flashBegin(size, offset) {
        const numBlocks = Math.floor((size + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE);
        const eraseSize = this.chip.getEraseSize(offset, size);
        const d = new Date();
        const t1 = d.getTime();
        let timeout = 3000;
        if (this.IS_STUB == false) timeout = this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB, size);
        this.debug("flash begin " + eraseSize + " " + numBlocks + " " + this.FLASH_WRITE_SIZE + " " + offset + " " + size);
        let pkt = this._appendArray(this._intToByteArray(eraseSize), this._intToByteArray(numBlocks));
        pkt = this._appendArray(pkt, this._intToByteArray(this.FLASH_WRITE_SIZE));
        pkt = this._appendArray(pkt, this._intToByteArray(offset));
        if (this.IS_STUB == false) pkt = this._appendArray(pkt, this._intToByteArray(0)); // XXX: Support encrypted
        await this.checkCommand("enter Flash download mode", this.ESP_FLASH_BEGIN, pkt, undefined, timeout);
        const t2 = d.getTime();
        if (size != 0 && this.IS_STUB == false) this.info("Took " + (t2 - t1) / 1000 + "." + (t2 - t1) % 1000 + "s to erase flash block");
        return numBlocks;
    }
    /**
     * Start downloading compressed data to Flash (performs an erase)
     * @param {number} size Write size
     * @param {number} compsize Compressed size
     * @param {number} offset Offset for write
     * @returns {number} Returns number of blocks (size self.FLASH_WRITE_SIZE) to write.
     */ async flashDeflBegin(size, compsize, offset) {
        const numBlocks = Math.floor((compsize + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE);
        const eraseBlocks = Math.floor((size + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE);
        const d = new Date();
        const t1 = d.getTime();
        let writeSize, timeout;
        if (this.IS_STUB) {
            writeSize = size;
            timeout = this.DEFAULT_TIMEOUT;
        } else {
            writeSize = eraseBlocks * this.FLASH_WRITE_SIZE;
            timeout = this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB, writeSize);
        }
        this.info("Compressed " + size + " bytes to " + compsize + "...");
        let pkt = this._appendArray(this._intToByteArray(writeSize), this._intToByteArray(numBlocks));
        pkt = this._appendArray(pkt, this._intToByteArray(this.FLASH_WRITE_SIZE));
        pkt = this._appendArray(pkt, this._intToByteArray(offset));
        if ((this.chip.CHIP_NAME === "ESP32-S2" || this.chip.CHIP_NAME === "ESP32-S3" || this.chip.CHIP_NAME === "ESP32-C3" || this.chip.CHIP_NAME === "ESP32-C2") && this.IS_STUB === false) pkt = this._appendArray(pkt, this._intToByteArray(0));
        await this.checkCommand("enter compressed flash mode", this.ESP_FLASH_DEFL_BEGIN, pkt, undefined, timeout);
        const t2 = d.getTime();
        if (size != 0 && this.IS_STUB === false) this.info("Took " + (t2 - t1) / 1000 + "." + (t2 - t1) % 1000 + "s to erase flash block");
        return numBlocks;
    }
    /**
     * Write block to flash, retry if fail
     * @param {Uint8Array} data Unsigned 8-bit array data.
     * @param {number} seq Sequence number
     * @param {number} timeout Timeout in milliseconds (ms)
     */ async flashBlock(data, seq, timeout) {
        let pkt = this._appendArray(this._intToByteArray(data.length), this._intToByteArray(seq));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, data);
        const checksum = this.checksum(data);
        await this.checkCommand("write to target Flash after seq " + seq, this.ESP_FLASH_DATA, pkt, checksum, timeout);
    }
    /**
     * Write block to flash, send compressed, retry if fail
     * @param {Uint8Array} data Unsigned int 8-bit array data to write
     * @param {number} seq Sequence number
     * @param {number} timeout Timeout in milliseconds (ms)
     */ async flashDeflBlock(data, seq, timeout) {
        let pkt = this._appendArray(this._intToByteArray(data.length), this._intToByteArray(seq));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, data);
        const checksum = this.checksum(data);
        this.debug("flash_defl_block " + data[0].toString(16) + " " + data[1].toString(16));
        await this.checkCommand("write compressed data to flash after seq " + seq, this.ESP_FLASH_DEFL_DATA, pkt, checksum, timeout);
    }
    /**
     * Leave flash mode and run/reboot
     * @param {boolean} reboot Reboot after leaving flash mode ?
     */ async flashFinish(reboot = false) {
        const val = reboot ? 0 : 1;
        const pkt = this._intToByteArray(val);
        await this.checkCommand("leave Flash mode", this.ESP_FLASH_END, pkt);
    }
    /**
     * Leave compressed flash mode and run/reboot
     * @param {boolean} reboot Reboot after leaving flash mode ?
     */ async flashDeflFinish(reboot = false) {
        const val = reboot ? 0 : 1;
        const pkt = this._intToByteArray(val);
        await this.checkCommand("leave compressed flash mode", this.ESP_FLASH_DEFL_END, pkt);
    }
    /**
     * Run an arbitrary SPI flash command.
     *
     * This function uses the "USR_COMMAND" functionality in the ESP
     * SPI hardware, rather than the precanned commands supported by
     * hardware. So the value of spiflashCommand is an actual command
     * byte, sent over the wire.
     *
     * After writing command byte, writes 'data' to MOSI and then
     * reads back 'readBits' of reply on MISO. Result is a number.
     * @param {number} spiflashCommand Command to execute in SPI
     * @param {Uint8Array} data Data to send
     * @param {number} readBits Number of bits to read
     * @returns {number} Register SPI_W0_REG value
     */ async runSpiflashCommand(spiflashCommand, data, readBits) {
        // SPI_USR register flags
        const SPI_USR_COMMAND = -2147483648;
        const SPI_USR_MISO = 268435456;
        const SPI_USR_MOSI = 134217728;
        // SPI registers, base address differs ESP32* vs 8266
        const base = this.chip.SPI_REG_BASE;
        const SPI_CMD_REG = base + 0x00;
        const SPI_USR_REG = base + this.chip.SPI_USR_OFFS;
        const SPI_USR1_REG = base + this.chip.SPI_USR1_OFFS;
        const SPI_USR2_REG = base + this.chip.SPI_USR2_OFFS;
        const SPI_W0_REG = base + this.chip.SPI_W0_OFFS;
        let setDataLengths;
        if (this.chip.SPI_MOSI_DLEN_OFFS != null) setDataLengths = async (mosiBits, misoBits)=>{
            const SPI_MOSI_DLEN_REG = base + this.chip.SPI_MOSI_DLEN_OFFS;
            const SPI_MISO_DLEN_REG = base + this.chip.SPI_MISO_DLEN_OFFS;
            if (mosiBits > 0) await this.writeReg(SPI_MOSI_DLEN_REG, mosiBits - 1);
            if (misoBits > 0) await this.writeReg(SPI_MISO_DLEN_REG, misoBits - 1);
        };
        else setDataLengths = async (mosiBits, misoBits)=>{
            const SPI_DATA_LEN_REG = SPI_USR1_REG;
            const SPI_MOSI_BITLEN_S = 17;
            const SPI_MISO_BITLEN_S = 8;
            const mosiMask = mosiBits === 0 ? 0 : mosiBits - 1;
            const misoMask = misoBits === 0 ? 0 : misoBits - 1;
            const val = misoMask << SPI_MISO_BITLEN_S | mosiMask << SPI_MOSI_BITLEN_S;
            await this.writeReg(SPI_DATA_LEN_REG, val);
        };
        const SPI_CMD_USR = 262144;
        const SPI_USR2_COMMAND_LEN_SHIFT = 28;
        if (readBits > 32) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Reading more than 32 bits back from a SPI flash operation is unsupported");
        if (data.length > 64) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Writing more than 64 bytes of data with one SPI command is unsupported");
        const dataBits = data.length * 8;
        const oldSpiUsr = await this.readReg(SPI_USR_REG);
        const oldSpiUsr2 = await this.readReg(SPI_USR2_REG);
        let flags = SPI_USR_COMMAND;
        let i;
        if (readBits > 0) flags |= SPI_USR_MISO;
        if (dataBits > 0) flags |= SPI_USR_MOSI;
        await setDataLengths(dataBits, readBits);
        await this.writeReg(SPI_USR_REG, flags);
        let val = 7 << SPI_USR2_COMMAND_LEN_SHIFT | spiflashCommand;
        await this.writeReg(SPI_USR2_REG, val);
        if (dataBits == 0) await this.writeReg(SPI_W0_REG, 0);
        else {
            if (data.length % 4 != 0) {
                const padding = new Uint8Array(data.length % 4);
                data = this._appendArray(data, padding);
            }
            let nextReg = SPI_W0_REG;
            for(i = 0; i < data.length - 4; i += 4){
                val = this._byteArrayToInt(data[i], data[i + 1], data[i + 2], data[i + 3]);
                await this.writeReg(nextReg, val);
                nextReg += 4;
            }
        }
        await this.writeReg(SPI_CMD_REG, SPI_CMD_USR);
        for(i = 0; i < 10; i++){
            val = await this.readReg(SPI_CMD_REG) & SPI_CMD_USR;
            if (val == 0) break;
        }
        if (i === 10) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("SPI command did not complete in time");
        const stat = await this.readReg(SPI_W0_REG);
        await this.writeReg(SPI_USR_REG, oldSpiUsr);
        await this.writeReg(SPI_USR2_REG, oldSpiUsr2);
        return stat;
    }
    /**
     * Read flash id by executing the SPIFLASH_RDID flash command.
     * @returns {Promise<number>} Register SPI_W0_REG value
     */ async readFlashId() {
        const SPIFLASH_RDID = 0x9f;
        const pkt = new Uint8Array(0);
        return await this.runSpiflashCommand(SPIFLASH_RDID, pkt, 24);
    }
    /**
     * Execute the erase flash command
     * @returns {Promise<number | Uint8Array>} Erase flash command result
     */ async eraseFlash() {
        this.info("Erasing flash (this may take a while)...");
        let d = new Date();
        const t1 = d.getTime();
        const ret = await this.checkCommand("erase flash", this.ESP_ERASE_FLASH, undefined, undefined, this.CHIP_ERASE_TIMEOUT);
        d = new Date();
        const t2 = d.getTime();
        this.info("Chip erase completed successfully in " + (t2 - t1) / 1000 + "s");
        return ret;
    }
    /**
     * Convert a number or unsigned 8-bit array to hex string
     * @param {number | Uint8Array } buffer Data to convert to hex string.
     * @returns {string} A hex string
     */ toHex(buffer) {
        return Array.prototype.map.call(buffer, (x)=>("00" + x.toString(16)).slice(-2)).join("");
    }
    /**
     * Calculate the MD5 Checksum command
     * @param {number} addr Address number
     * @param {number} size Package size
     * @returns {string} MD5 Checksum string
     */ async flashMd5sum(addr, size) {
        const timeout = this.timeoutPerMb(this.MD5_TIMEOUT_PER_MB, size);
        let pkt = this._appendArray(this._intToByteArray(addr), this._intToByteArray(size));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        let res = await this.checkCommand("calculate md5sum", this.ESP_SPI_FLASH_MD5, pkt, undefined, timeout);
        if (res instanceof Uint8Array && res.length > 16) res = res.slice(0, 16);
        const strmd5 = this.toHex(res);
        return strmd5;
    }
    async readFlash(addr, size, onPacketReceived = null) {
        let pkt = this._appendArray(this._intToByteArray(addr), this._intToByteArray(size));
        pkt = this._appendArray(pkt, this._intToByteArray(0x1000));
        pkt = this._appendArray(pkt, this._intToByteArray(1024));
        const res = await this.checkCommand("read flash", this.ESP_READ_FLASH, pkt);
        if (res != 0) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Failed to read memory: " + res);
        let resp = new Uint8Array(0);
        while(resp.length < size){
            const { value: packet } = await this.transport.read(this.FLASH_READ_TIMEOUT).next();
            if (packet instanceof Uint8Array) {
                if (packet.length > 0) {
                    resp = this._appendArray(resp, packet);
                    await this.transport.write(this._intToByteArray(resp.length));
                    if (onPacketReceived) onPacketReceived(packet, resp.length, size);
                }
            } else throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Failed to read memory: " + packet);
        }
        return resp;
    }
    /**
     * Upload the flasher ROM bootloader (flasher stub) to the chip.
     * @returns {ROM} The Chip ROM
     */ async runStub() {
        if (this.syncStubDetected) {
            this.info("Stub is already running. No upload is necessary.");
            return this.chip;
        }
        this.info("Uploading stub...");
        const stubFlasher = await (0, $c14fcc49e58a64cf$export$575862e1d5c85871)(this.chip.CHIP_NAME);
        if (stubFlasher === undefined) {
            this.debug("Error loading Stub json");
            throw new Error("Error loading Stub json");
        }
        const stub = [
            stubFlasher.decodedText,
            stubFlasher.decodedData
        ];
        for(let i = 0; i < stub.length; i++)if (stub[i]) {
            const offs = i === 0 ? stubFlasher.text_start : stubFlasher.data_start;
            const length = stub[i].length;
            const blocks = Math.floor((length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK);
            await this.memBegin(length, blocks, this.ESP_RAM_BLOCK, offs);
            for(let seq = 0; seq < blocks; seq++){
                const fromOffs = seq * this.ESP_RAM_BLOCK;
                const toOffs = fromOffs + this.ESP_RAM_BLOCK;
                await this.memBlock(stub[i].slice(fromOffs, toOffs), seq);
            }
        }
        this.info("Running stub...");
        await this.memFinish(stubFlasher.entry);
        const { value: packetResult } = await this.transport.read(this.DEFAULT_TIMEOUT).next();
        const packetStr = String.fromCharCode(...packetResult);
        if (packetStr !== "OHAI") throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)(`Failed to start stub. Unexpected response ${packetStr}`);
        this.info("Stub running...");
        this.IS_STUB = true;
        return this.chip;
    }
    /**
     * Change the chip baudrate.
     */ async changeBaud() {
        this.info("Changing baudrate to " + this.baudrate);
        const secondArg = this.IS_STUB ? this.romBaudrate : 0;
        const pkt = this._appendArray(this._intToByteArray(this.baudrate), this._intToByteArray(secondArg));
        await this.command(this.ESP_CHANGE_BAUDRATE, pkt);
        this.info("Changed");
        await this.transport.disconnect();
        await this._sleep(50);
        await this.transport.connect(this.baudrate, this.serialOptions);
    }
    /**
     * Execute the main function of ESPLoader.
     * @param {string} mode Reset mode to use
     * @returns {string} chip ROM
     */ async main(mode = "default_reset") {
        await this.detectChip(mode);
        const chip = await this.chip.getChipDescription(this);
        this.info("Chip is " + chip);
        this.info("Features: " + await this.chip.getChipFeatures(this));
        this.info("Crystal is " + await this.chip.getCrystalFreq(this) + "MHz");
        this.info("MAC: " + await this.chip.readMac(this));
        await this.chip.readMac(this);
        if (typeof this.chip.postConnect != "undefined") await this.chip.postConnect(this);
        await this.runStub();
        if (this.romBaudrate !== this.baudrate) await this.changeBaud();
        return chip;
    }
    /**
     * Parse a given flash size string to a number
     * @param {string} flsz Flash size to request
     * @returns {number} Flash size number
     */ parseFlashSizeArg(flsz) {
        if (typeof this.chip.FLASH_SIZES[flsz] === "undefined") throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Flash size " + flsz + " is not supported by this chip type. Supported sizes: " + this.chip.FLASH_SIZES);
        return this.chip.FLASH_SIZES[flsz];
    }
    /**
     * Update the image flash parameters with given arguments.
     * @param {string} image binary image as string
     * @param {number} address flash address number
     * @param {string} flashSize Flash size string
     * @param {string} flashMode Flash mode string
     * @param {string} flashFreq Flash frequency string
     * @returns {string} modified image string
     */ _updateImageFlashParams(image, address, flashSize, flashMode, flashFreq) {
        this.debug("_update_image_flash_params " + flashSize + " " + flashMode + " " + flashFreq);
        if (image.length < 8) return image;
        if (address != this.chip.BOOTLOADER_FLASH_OFFSET) return image;
        if (flashSize === "keep" && flashMode === "keep" && flashFreq === "keep") {
            this.info("Not changing the image");
            return image;
        }
        const magic = parseInt(image[0]);
        let aFlashMode = parseInt(image[2]);
        const flashSizeFreq = parseInt(image[3]);
        if (magic !== this.ESP_IMAGE_MAGIC) {
            this.info("Warning: Image file at 0x" + address.toString(16) + " doesn't look like an image file, so not changing any flash settings.");
            return image;
        }
        /* XXX: Yet to implement actual image verification */ if (flashMode !== "keep") {
            const flashModes = {
                qio: 0,
                qout: 1,
                dio: 2,
                dout: 3
            };
            aFlashMode = flashModes[flashMode];
        }
        let aFlashFreq = flashSizeFreq & 0x0f;
        if (flashFreq !== "keep") {
            const flashFreqs = {
                "40m": 0,
                "26m": 1,
                "20m": 2,
                "80m": 0xf
            };
            aFlashFreq = flashFreqs[flashFreq];
        }
        let aFlashSize = flashSizeFreq & 0xf0;
        if (flashSize !== "keep") aFlashSize = this.parseFlashSizeArg(flashSize);
        const flashParams = aFlashMode << 8 | aFlashFreq + aFlashSize;
        this.info("Flash params set to " + flashParams.toString(16));
        if (parseInt(image[2]) !== aFlashMode << 8) image = image.substring(0, 2) + (aFlashMode << 8).toString() + image.substring(3);
        if (parseInt(image[3]) !== aFlashFreq + aFlashSize) image = image.substring(0, 3) + (aFlashFreq + aFlashSize).toString() + image.substring(4);
        return image;
    }
    /**
     * Write set of file images into given address based on given FlashOptions object.
     * @param {FlashOptions} options FlashOptions to configure how and what to write into flash.
     */ async writeFlash(options) {
        this.debug("EspLoader program");
        if (options.flashSize !== "keep") {
            const flashEnd = this.flashSizeBytes(options.flashSize);
            for(let i = 0; i < options.fileArray.length; i++){
                if (options.fileArray[i].data.length + options.fileArray[i].address > flashEnd) throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)(`File ${i + 1} doesn't fit in the available flash`);
            }
        }
        if (this.IS_STUB === true && options.eraseAll === true) await this.eraseFlash();
        let image, address;
        for(let i = 0; i < options.fileArray.length; i++){
            this.debug("Data Length " + options.fileArray[i].data.length);
            image = options.fileArray[i].data;
            this.debug("Image Length " + image.length);
            if (image.length === 0) {
                this.debug("Warning: File is empty");
                continue;
            }
            image = this.ui8ToBstr((0, $216eff205ef04904$export$fcbe1efa6919329)(this.bstrToUi8(image), 4));
            address = options.fileArray[i].address;
            image = this._updateImageFlashParams(image, address, options.flashSize, options.flashMode, options.flashFreq);
            let calcmd5 = null;
            if (options.calculateMD5Hash) {
                calcmd5 = options.calculateMD5Hash(image);
                this.debug("Image MD5 " + calcmd5);
            }
            const uncsize = image.length;
            let blocks;
            if (options.compress) {
                const uncimage = this.bstrToUi8(image);
                image = this.ui8ToBstr((0, $2438585bd7e1d91e$export$2316623ecd1285ab)(uncimage, {
                    level: 9
                }));
                blocks = await this.flashDeflBegin(uncsize, image.length, address);
            } else blocks = await this.flashBegin(uncsize, address);
            let seq = 0;
            let bytesSent = 0;
            const totalBytes = image.length;
            if (options.reportProgress) options.reportProgress(i, 0, totalBytes);
            let d = new Date();
            const t1 = d.getTime();
            let timeout = 5000;
            // Create a decompressor to keep track of the size of uncompressed data
            // to be written in each chunk.
            const inflate = new (0, $2438585bd7e1d91e$export$d1de70a877d6e43c)({
                chunkSize: 1
            });
            let totalLenUncompressed = 0;
            inflate.onData = function(chunk) {
                totalLenUncompressed += chunk.byteLength;
            };
            while(image.length > 0){
                this.debug("Write loop " + address + " " + seq + " " + blocks);
                this.info("Writing at 0x" + (address + totalLenUncompressed).toString(16) + "... (" + Math.floor(100 * (seq + 1) / blocks) + "%)");
                const block = this.bstrToUi8(image.slice(0, this.FLASH_WRITE_SIZE));
                if (options.compress) {
                    const lenUncompressedPrevious = totalLenUncompressed;
                    inflate.push(block, false);
                    const blockUncompressed = totalLenUncompressed - lenUncompressedPrevious;
                    let blockTimeout = 3000;
                    if (this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB, blockUncompressed) > 3000) blockTimeout = this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB, blockUncompressed);
                    if (this.IS_STUB === false) // ROM code writes block to flash before ACKing
                    timeout = blockTimeout;
                    await this.flashDeflBlock(block, seq, timeout);
                    if (this.IS_STUB) // Stub ACKs when block is received, then writes to flash while receiving the block after it
                    timeout = blockTimeout;
                } else throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Yet to handle Non Compressed writes");
                bytesSent += block.length;
                image = image.slice(this.FLASH_WRITE_SIZE, image.length);
                seq++;
                if (options.reportProgress) options.reportProgress(i, bytesSent, totalBytes);
            }
            if (this.IS_STUB) await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR, timeout);
            d = new Date();
            const t = d.getTime() - t1;
            if (options.compress) this.info("Wrote " + uncsize + " bytes (" + bytesSent + " compressed) at 0x" + address.toString(16) + " in " + t / 1000 + " seconds.");
            if (calcmd5) {
                const res = await this.flashMd5sum(address, uncsize);
                if (new String(res).valueOf() != new String(calcmd5).valueOf()) {
                    this.info("File  md5: " + calcmd5);
                    this.info("Flash md5: " + res);
                    throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("MD5 of file does not match data in flash!");
                } else this.info("Hash of data verified.");
            }
        }
        this.info("Leaving...");
        if (this.IS_STUB) {
            await this.flashBegin(0, 0);
            if (options.compress) await this.flashDeflFinish();
            else await this.flashFinish();
        }
    }
    /**
     * Read SPI flash manufacturer and device id.
     */ async flashId() {
        this.debug("flash_id");
        const flashid = await this.readFlashId();
        this.info("Manufacturer: " + (flashid & 0xff).toString(16));
        const flidLowbyte = flashid >> 16 & 0xff;
        this.info("Device: " + (flashid >> 8 & 0xff).toString(16) + flidLowbyte.toString(16));
        this.info("Detected flash size: " + this.DETECTED_FLASH_SIZES[flidLowbyte]);
    }
    async getFlashSize() {
        this.debug("flash_id");
        const flashid = await this.readFlashId();
        const flidLowbyte = flashid >> 16 & 0xff;
        return this.DETECTED_FLASH_SIZES_NUM[flidLowbyte];
    }
    /**
     * Perform a chip hard reset by setting RTS to LOW and then HIGH.
     */ async hardReset() {
        await this.transport.setRTS(true); // EN->LOW
        await this._sleep(100);
        await this.transport.setRTS(false);
    }
    /**
     * Soft reset the device chip. Soft reset with run user code is the closest.
     */ async softReset() {
        if (!this.IS_STUB) {
            // "run user code" is as close to a soft reset as we can do
            await this.flashBegin(0, 0);
            await this.flashFinish(false);
        } else if (this.chip.CHIP_NAME != "ESP8266") throw new (0, $ebb8d82b6f845895$export$5b519f82636185ec)("Soft resetting is currently only supported on ESP8266");
        else // running user code from stub loader requires some hacks
        // in the stub loader
        await this.command(this.ESP_RUN_USER_CODE, undefined, undefined, false);
    }
}




var $3KHBw = parcelRequire("3KHBw");




/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of
 * the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in
 * writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing
 * permissions and limitations under the License.
 */ 'use strict';
var $d2bbb828b377f05f$export$24d5ae9391ffe6e0;
(function(SerialPolyfillProtocol) {
    SerialPolyfillProtocol[SerialPolyfillProtocol["UsbCdcAcm"] = 0] = "UsbCdcAcm";
})($d2bbb828b377f05f$export$24d5ae9391ffe6e0 || ($d2bbb828b377f05f$export$24d5ae9391ffe6e0 = {}));
const $d2bbb828b377f05f$var$kSetLineCoding = 0x20;
const $d2bbb828b377f05f$var$kSetControlLineState = 0x22;
const $d2bbb828b377f05f$var$kSendBreak = 0x23;
const $d2bbb828b377f05f$var$kDefaultBufferSize = 255;
const $d2bbb828b377f05f$var$kDefaultDataBits = 8;
const $d2bbb828b377f05f$var$kDefaultParity = 'none';
const $d2bbb828b377f05f$var$kDefaultStopBits = 1;
const $d2bbb828b377f05f$var$kAcceptableDataBits = [
    16,
    8,
    7,
    6,
    5
];
const $d2bbb828b377f05f$var$kAcceptableStopBits = [
    1,
    2
];
const $d2bbb828b377f05f$var$kAcceptableParity = [
    'none',
    'even',
    'odd'
];
const $d2bbb828b377f05f$var$kParityIndexMapping = [
    'none',
    'odd',
    'even'
];
const $d2bbb828b377f05f$var$kStopBitsIndexMapping = [
    1,
    1.5,
    2
];
const $d2bbb828b377f05f$var$kDefaultPolyfillOptions = {
    protocol: $d2bbb828b377f05f$export$24d5ae9391ffe6e0.UsbCdcAcm,
    usbControlInterfaceClass: 2,
    usbTransferInterfaceClass: 10
};
/**
 * Utility function to get the interface implementing a desired class.
 * @param {USBDevice} device The USB device.
 * @param {number} classCode The desired interface class.
 * @return {USBInterface} The first interface found that implements the desired
 * class.
 * @throws TypeError if no interface is found.
 */ function $d2bbb828b377f05f$var$findInterface(device, classCode) {
    const configuration = device.configurations[0];
    for (const iface of configuration.interfaces){
        const alternate = iface.alternates[0];
        if (alternate.interfaceClass === classCode) return iface;
    }
    throw new TypeError(`Unable to find interface with class ${classCode}.`);
}
/**
 * Utility function to get an endpoint with a particular direction.
 * @param {USBInterface} iface The interface to search.
 * @param {USBDirection} direction The desired transfer direction.
 * @return {USBEndpoint} The first endpoint with the desired transfer direction.
 * @throws TypeError if no endpoint is found.
 */ function $d2bbb828b377f05f$var$findEndpoint(iface, direction) {
    const alternate = iface.alternates[0];
    for (const endpoint of alternate.endpoints){
        if (endpoint.direction == direction) return endpoint;
    }
    throw new TypeError(`Interface ${iface.interfaceNumber} does not have an ` + `${direction} endpoint.`);
}
/**
 * Implementation of the underlying source API[1] which reads data from a USB
 * endpoint. This can be used to construct a ReadableStream.
 *
 * [1]: https://streams.spec.whatwg.org/#underlying-source-api
 */ class $d2bbb828b377f05f$var$UsbEndpointUnderlyingSource {
    /**
     * Constructs a new UnderlyingSource that will pull data from the specified
     * endpoint on the given USB device.
     *
     * @param {USBDevice} device
     * @param {USBEndpoint} endpoint
     * @param {function} onError function to be called on error
     */ constructor(device, endpoint, onError){
        this.type = 'bytes';
        this.device_ = device;
        this.endpoint_ = endpoint;
        this.onError_ = onError;
    }
    /**
     * Reads a chunk of data from the device.
     *
     * @param {ReadableByteStreamController} controller
     */ pull(controller) {
        (async ()=>{
            var _a;
            let chunkSize;
            if (controller.desiredSize) {
                const d = controller.desiredSize / this.endpoint_.packetSize;
                chunkSize = Math.ceil(d) * this.endpoint_.packetSize;
            } else chunkSize = this.endpoint_.packetSize;
            try {
                const result = await this.device_.transferIn(this.endpoint_.endpointNumber, chunkSize);
                if (result.status != 'ok') {
                    controller.error(`USB error: ${result.status}`);
                    this.onError_();
                }
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.buffer) {
                    const chunk = new Uint8Array(result.data.buffer, result.data.byteOffset, result.data.byteLength);
                    controller.enqueue(chunk);
                }
            } catch (error) {
                controller.error(error.toString());
                this.onError_();
            }
        })();
    }
}
/**
 * Implementation of the underlying sink API[2] which writes data to a USB
 * endpoint. This can be used to construct a WritableStream.
 *
 * [2]: https://streams.spec.whatwg.org/#underlying-sink-api
 */ class $d2bbb828b377f05f$var$UsbEndpointUnderlyingSink {
    /**
     * Constructs a new UnderlyingSink that will write data to the specified
     * endpoint on the given USB device.
     *
     * @param {USBDevice} device
     * @param {USBEndpoint} endpoint
     * @param {function} onError function to be called on error
     */ constructor(device, endpoint, onError){
        this.device_ = device;
        this.endpoint_ = endpoint;
        this.onError_ = onError;
    }
    /**
     * Writes a chunk to the device.
     *
     * @param {Uint8Array} chunk
     * @param {WritableStreamDefaultController} controller
     */ async write(chunk, controller) {
        try {
            const result = await this.device_.transferOut(this.endpoint_.endpointNumber, chunk);
            if (result.status != 'ok') {
                controller.error(result.status);
                this.onError_();
            }
        } catch (error) {
            controller.error(error.toString());
            this.onError_();
        }
    }
}
class $d2bbb828b377f05f$export$237d90817cb05a2f {
    /**
     * constructor taking a WebUSB device that creates a SerialPort instance.
     * @param {USBDevice} device A device acquired from the WebUSB API
     * @param {SerialPolyfillOptions} polyfillOptions Optional options to
     * configure the polyfill.
     */ constructor(device, polyfillOptions){
        this.polyfillOptions_ = Object.assign(Object.assign({}, $d2bbb828b377f05f$var$kDefaultPolyfillOptions), polyfillOptions);
        this.outputSignals_ = {
            dataTerminalReady: false,
            requestToSend: false,
            break: false
        };
        this.device_ = device;
        this.controlInterface_ = $d2bbb828b377f05f$var$findInterface(this.device_, this.polyfillOptions_.usbControlInterfaceClass);
        this.transferInterface_ = $d2bbb828b377f05f$var$findInterface(this.device_, this.polyfillOptions_.usbTransferInterfaceClass);
        this.inEndpoint_ = $d2bbb828b377f05f$var$findEndpoint(this.transferInterface_, 'in');
        this.outEndpoint_ = $d2bbb828b377f05f$var$findEndpoint(this.transferInterface_, 'out');
    }
    /**
     * Getter for the readable attribute. Constructs a new ReadableStream as
     * necessary.
     * @return {ReadableStream} the current readable stream
     */ get readable() {
        var _a;
        if (!this.readable_ && this.device_.opened) this.readable_ = new ReadableStream(new $d2bbb828b377f05f$var$UsbEndpointUnderlyingSource(this.device_, this.inEndpoint_, ()=>{
            this.readable_ = null;
        }), {
            highWaterMark: (_a = this.serialOptions_.bufferSize) !== null && _a !== void 0 ? _a : $d2bbb828b377f05f$var$kDefaultBufferSize
        });
        return this.readable_;
    }
    /**
     * Getter for the writable attribute. Constructs a new WritableStream as
     * necessary.
     * @return {WritableStream} the current writable stream
     */ get writable() {
        var _a;
        if (!this.writable_ && this.device_.opened) this.writable_ = new WritableStream(new $d2bbb828b377f05f$var$UsbEndpointUnderlyingSink(this.device_, this.outEndpoint_, ()=>{
            this.writable_ = null;
        }), new ByteLengthQueuingStrategy({
            highWaterMark: (_a = this.serialOptions_.bufferSize) !== null && _a !== void 0 ? _a : $d2bbb828b377f05f$var$kDefaultBufferSize
        }));
        return this.writable_;
    }
    /**
     * a function that opens the device and claims all interfaces needed to
     * control and communicate to and from the serial device
     * @param {SerialOptions} options Object containing serial options
     * @return {Promise<void>} A promise that will resolve when device is ready
     * for communication
     */ async open(options) {
        this.serialOptions_ = options;
        this.validateOptions();
        try {
            await this.device_.open();
            if (this.device_.configuration === null) await this.device_.selectConfiguration(1);
            await this.device_.claimInterface(this.controlInterface_.interfaceNumber);
            if (this.controlInterface_ !== this.transferInterface_) await this.device_.claimInterface(this.transferInterface_.interfaceNumber);
            await this.setLineCoding();
            await this.setSignals({
                dataTerminalReady: true
            });
        } catch (error) {
            if (this.device_.opened) await this.device_.close();
            throw new Error('Error setting up device: ' + error.toString());
        }
    }
    /**
     * Closes the port.
     *
     * @return {Promise<void>} A promise that will resolve when the port is
     * closed.
     */ async close() {
        const promises = [];
        if (this.readable_) promises.push(this.readable_.cancel());
        if (this.writable_) promises.push(this.writable_.abort());
        await Promise.all(promises);
        this.readable_ = null;
        this.writable_ = null;
        if (this.device_.opened) {
            await this.setSignals({
                dataTerminalReady: false,
                requestToSend: false
            });
            await this.device_.close();
        }
    }
    /**
     * Forgets the port.
     *
     * @return {Promise<void>} A promise that will resolve when the port is
     * forgotten.
     */ async forget() {
        return this.device_.forget();
    }
    /**
     * A function that returns properties of the device.
     * @return {SerialPortInfo} Device properties.
     */ getInfo() {
        return {
            usbVendorId: this.device_.vendorId,
            usbProductId: this.device_.productId
        };
    }
    /**
     * A function used to change the serial settings of the device
     * @param {object} options the object which carries serial settings data
     * @return {Promise<void>} A promise that will resolve when the options are
     * set
     */ reconfigure(options) {
        this.serialOptions_ = Object.assign(Object.assign({}, this.serialOptions_), options);
        this.validateOptions();
        return this.setLineCoding();
    }
    /**
     * Sets control signal state for the port.
     * @param {SerialOutputSignals} signals The signals to enable or disable.
     * @return {Promise<void>} a promise that is resolved when the signal state
     * has been changed.
     */ async setSignals(signals) {
        this.outputSignals_ = Object.assign(Object.assign({}, this.outputSignals_), signals);
        if (signals.dataTerminalReady !== undefined || signals.requestToSend !== undefined) {
            // The Set_Control_Line_State command expects a bitmap containing the
            // values of all output signals that should be enabled or disabled.
            //
            // Ref: USB CDC specification version 1.1 §6.2.14.
            const value = (this.outputSignals_.dataTerminalReady ? 1 : 0) | (this.outputSignals_.requestToSend ? 2 : 0);
            await this.device_.controlTransferOut({
                'requestType': 'class',
                'recipient': 'interface',
                'request': $d2bbb828b377f05f$var$kSetControlLineState,
                'value': value,
                'index': this.controlInterface_.interfaceNumber
            });
        }
        if (signals.break !== undefined) {
            // The SendBreak command expects to be given a duration for how long the
            // break signal should be asserted. Passing 0xFFFF enables the signal
            // until 0x0000 is send.
            //
            // Ref: USB CDC specification version 1.1 §6.2.15.
            const value = this.outputSignals_.break ? 0xFFFF : 0x0000;
            await this.device_.controlTransferOut({
                'requestType': 'class',
                'recipient': 'interface',
                'request': $d2bbb828b377f05f$var$kSendBreak,
                'value': value,
                'index': this.controlInterface_.interfaceNumber
            });
        }
    }
    /**
     * Checks the serial options for validity and throws an error if it is
     * not valid
     */ validateOptions() {
        if (!this.isValidBaudRate(this.serialOptions_.baudRate)) throw new RangeError('invalid Baud Rate ' + this.serialOptions_.baudRate);
        if (!this.isValidDataBits(this.serialOptions_.dataBits)) throw new RangeError('invalid dataBits ' + this.serialOptions_.dataBits);
        if (!this.isValidStopBits(this.serialOptions_.stopBits)) throw new RangeError('invalid stopBits ' + this.serialOptions_.stopBits);
        if (!this.isValidParity(this.serialOptions_.parity)) throw new RangeError('invalid parity ' + this.serialOptions_.parity);
    }
    /**
     * Checks the baud rate for validity
     * @param {number} baudRate the baud rate to check
     * @return {boolean} A boolean that reflects whether the baud rate is valid
     */ isValidBaudRate(baudRate) {
        return baudRate % 1 === 0;
    }
    /**
     * Checks the data bits for validity
     * @param {number} dataBits the data bits to check
     * @return {boolean} A boolean that reflects whether the data bits setting is
     * valid
     */ isValidDataBits(dataBits) {
        if (typeof dataBits === 'undefined') return true;
        return $d2bbb828b377f05f$var$kAcceptableDataBits.includes(dataBits);
    }
    /**
     * Checks the stop bits for validity
     * @param {number} stopBits the stop bits to check
     * @return {boolean} A boolean that reflects whether the stop bits setting is
     * valid
     */ isValidStopBits(stopBits) {
        if (typeof stopBits === 'undefined') return true;
        return $d2bbb828b377f05f$var$kAcceptableStopBits.includes(stopBits);
    }
    /**
     * Checks the parity for validity
     * @param {string} parity the parity to check
     * @return {boolean} A boolean that reflects whether the parity is valid
     */ isValidParity(parity) {
        if (typeof parity === 'undefined') return true;
        return $d2bbb828b377f05f$var$kAcceptableParity.includes(parity);
    }
    /**
     * sends the options alog the control interface to set them on the device
     * @return {Promise} a promise that will resolve when the options are set
     */ async setLineCoding() {
        var _a, _b, _c;
        // Ref: USB CDC specification version 1.1 §6.2.12.
        const buffer = new ArrayBuffer(7);
        const view = new DataView(buffer);
        view.setUint32(0, this.serialOptions_.baudRate, true);
        view.setUint8(4, $d2bbb828b377f05f$var$kStopBitsIndexMapping.indexOf((_a = this.serialOptions_.stopBits) !== null && _a !== void 0 ? _a : $d2bbb828b377f05f$var$kDefaultStopBits));
        view.setUint8(5, $d2bbb828b377f05f$var$kParityIndexMapping.indexOf((_b = this.serialOptions_.parity) !== null && _b !== void 0 ? _b : $d2bbb828b377f05f$var$kDefaultParity));
        view.setUint8(6, (_c = this.serialOptions_.dataBits) !== null && _c !== void 0 ? _c : $d2bbb828b377f05f$var$kDefaultDataBits);
        const result = await this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': $d2bbb828b377f05f$var$kSetLineCoding,
            'value': 0x00,
            'index': this.controlInterface_.interfaceNumber
        }, buffer);
        if (result.status != 'ok') throw new DOMException('NetworkError', 'Failed to set line coding.');
    }
}
/** implementation of the global navigator.serial object */ class $d2bbb828b377f05f$var$Serial {
    /**
     * Requests permission to access a new port.
     *
     * @param {SerialPortRequestOptions} options
     * @param {SerialPolyfillOptions} polyfillOptions
     * @return {Promise<SerialPort>}
     */ async requestPort(options, polyfillOptions) {
        polyfillOptions = Object.assign(Object.assign({}, $d2bbb828b377f05f$var$kDefaultPolyfillOptions), polyfillOptions);
        const usbFilters = [];
        if (options && options.filters) for (const filter of options.filters){
            const usbFilter = {
                classCode: polyfillOptions.usbControlInterfaceClass
            };
            if (filter.usbVendorId !== undefined) usbFilter.vendorId = filter.usbVendorId;
            if (filter.usbProductId !== undefined) usbFilter.productId = filter.usbProductId;
            usbFilters.push(usbFilter);
        }
        if (usbFilters.length === 0) usbFilters.push({
            classCode: polyfillOptions.usbControlInterfaceClass
        });
        const device = await navigator.usb.requestDevice({
            'filters': usbFilters
        });
        const port = new $d2bbb828b377f05f$export$237d90817cb05a2f(device, polyfillOptions);
        return port;
    }
    /**
     * Get the set of currently available ports.
     *
     * @param {SerialPolyfillOptions} polyfillOptions Polyfill configuration that
     * should be applied to these ports.
     * @return {Promise<SerialPort[]>} a promise that is resolved with a list of
     * ports.
     */ async getPorts(polyfillOptions) {
        polyfillOptions = Object.assign(Object.assign({}, $d2bbb828b377f05f$var$kDefaultPolyfillOptions), polyfillOptions);
        const devices = await navigator.usb.getDevices();
        const ports = [];
        devices.forEach((device)=>{
            try {
                const port = new $d2bbb828b377f05f$export$237d90817cb05a2f(device, polyfillOptions);
                ports.push(port);
            } catch (e) {
            // Skip unrecognized port.
            }
        });
        return ports;
    }
}
const $d2bbb828b377f05f$export$6c2c9a00e27c07e8 = new $d2bbb828b377f05f$var$Serial();


const $382e02c9bbd5d50b$var$baudrates = document.getElementById("baudrates");
const $382e02c9bbd5d50b$var$consoleBaudrates = document.getElementById("consoleBaudrates");
const $382e02c9bbd5d50b$var$connectButton = document.getElementById("connectButton");
const $382e02c9bbd5d50b$var$traceButton = document.getElementById("copyTraceButton");
const $382e02c9bbd5d50b$var$disconnectButton = document.getElementById("disconnectButton");
const $382e02c9bbd5d50b$var$resetButton = document.getElementById("resetButton");
const $382e02c9bbd5d50b$var$consoleStartButton = document.getElementById("consoleStartButton");
const $382e02c9bbd5d50b$var$consoleStopButton = document.getElementById("consoleStopButton");
const $382e02c9bbd5d50b$var$eraseButton = document.getElementById("eraseButton");
const $382e02c9bbd5d50b$var$addFileButton = document.getElementById("addFile");
const $382e02c9bbd5d50b$var$programButton = document.getElementById("programButton");
const $382e02c9bbd5d50b$var$filesDiv = document.getElementById("files");
const $382e02c9bbd5d50b$var$terminal = document.getElementById("terminal");
const $382e02c9bbd5d50b$var$programDiv = document.getElementById("program");
const $382e02c9bbd5d50b$var$consoleDiv = document.getElementById("console");
const $382e02c9bbd5d50b$var$lblBaudrate = document.getElementById("lblBaudrate");
const $382e02c9bbd5d50b$var$lblConsoleBaudrate = document.getElementById("lblConsoleBaudrate");
const $382e02c9bbd5d50b$var$lblConsoleFor = document.getElementById("lblConsoleFor");
const $382e02c9bbd5d50b$var$lblConnTo = document.getElementById("lblConnTo");
const $382e02c9bbd5d50b$var$table = document.getElementById("fileTable");
const $382e02c9bbd5d50b$var$alertDiv = document.getElementById("alertDiv");
const $382e02c9bbd5d50b$var$debugLogging = document.getElementById("debugLogging");
const $382e02c9bbd5d50b$var$serialLib = !navigator.serial && navigator.usb ? (0, $d2bbb828b377f05f$export$6c2c9a00e27c07e8) : navigator.serial;
const $382e02c9bbd5d50b$var$term = new Terminal({
    cols: 120,
    rows: 40
});
$382e02c9bbd5d50b$var$term.open($382e02c9bbd5d50b$var$terminal);
let $382e02c9bbd5d50b$var$device = null;
let $382e02c9bbd5d50b$var$transport;
let $382e02c9bbd5d50b$var$chip = null;
let $382e02c9bbd5d50b$var$esploader;
$382e02c9bbd5d50b$var$disconnectButton.style.display = "none";
$382e02c9bbd5d50b$var$traceButton.style.display = "none";
$382e02c9bbd5d50b$var$eraseButton.style.display = "none";
$382e02c9bbd5d50b$var$consoleStopButton.style.display = "none";
$382e02c9bbd5d50b$var$resetButton.style.display = "none";
$382e02c9bbd5d50b$var$filesDiv.style.display = "none";
/**
 * The built in Event object.
 * @external Event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */ /**
 * File reader handler to read given local file.
 * @param {Event} evt File Select event
 */ function $382e02c9bbd5d50b$var$handleFileSelect(evt) {
    const file = evt.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev)=>{
        evt.target.data = ev.target.result;
    };
    reader.readAsBinaryString(file);
}
const $382e02c9bbd5d50b$var$espLoaderTerminal = {
    clean () {
        $382e02c9bbd5d50b$var$term.clear();
    },
    writeLine (data) {
        $382e02c9bbd5d50b$var$term.writeln(data);
    },
    write (data) {
        $382e02c9bbd5d50b$var$term.write(data);
    }
};
$382e02c9bbd5d50b$var$connectButton.onclick = async ()=>{
    if ($382e02c9bbd5d50b$var$device === null) {
        $382e02c9bbd5d50b$var$device = await $382e02c9bbd5d50b$var$serialLib.requestPort({});
        $382e02c9bbd5d50b$var$transport = new (0, $4616b1a2f9a5b082$export$86495b081fef8e52)($382e02c9bbd5d50b$var$device, true);
    }
    try {
        const flashOptions = {
            transport: $382e02c9bbd5d50b$var$transport,
            baudrate: parseInt($382e02c9bbd5d50b$var$baudrates.value),
            terminal: $382e02c9bbd5d50b$var$espLoaderTerminal,
            debugLogging: $382e02c9bbd5d50b$var$debugLogging.checked
        };
        $382e02c9bbd5d50b$var$esploader = new (0, $b9be20b2c9078c9b$export$b0f7a6c745790308)(flashOptions);
        $382e02c9bbd5d50b$var$chip = await $382e02c9bbd5d50b$var$esploader.main();
    // Temporarily broken
    // await esploader.flashId();
    } catch (e) {
        console.error(e);
        $382e02c9bbd5d50b$var$term.writeln(`Error: ${e.message}`);
    }
    console.log("Settings done for :" + $382e02c9bbd5d50b$var$chip);
    $382e02c9bbd5d50b$var$lblBaudrate.style.display = "none";
    $382e02c9bbd5d50b$var$lblConnTo.innerHTML = "Connected to device: " + $382e02c9bbd5d50b$var$chip;
    $382e02c9bbd5d50b$var$lblConnTo.style.display = "block";
    $382e02c9bbd5d50b$var$baudrates.style.display = "none";
    $382e02c9bbd5d50b$var$connectButton.style.display = "none";
    $382e02c9bbd5d50b$var$disconnectButton.style.display = "initial";
    $382e02c9bbd5d50b$var$traceButton.style.display = "initial";
    $382e02c9bbd5d50b$var$eraseButton.style.display = "initial";
    $382e02c9bbd5d50b$var$filesDiv.style.display = "initial";
    $382e02c9bbd5d50b$var$consoleDiv.style.display = "none";
};
$382e02c9bbd5d50b$var$traceButton.onclick = async ()=>{
    if ($382e02c9bbd5d50b$var$transport) $382e02c9bbd5d50b$var$transport.returnTrace();
};
$382e02c9bbd5d50b$var$resetButton.onclick = async ()=>{
    if ($382e02c9bbd5d50b$var$transport) {
        await $382e02c9bbd5d50b$var$transport.setDTR(false);
        await new Promise((resolve)=>setTimeout(resolve, 100));
        await $382e02c9bbd5d50b$var$transport.setDTR(true);
    }
};
$382e02c9bbd5d50b$var$eraseButton.onclick = async ()=>{
    $382e02c9bbd5d50b$var$eraseButton.disabled = true;
    try {
        await $382e02c9bbd5d50b$var$esploader.eraseFlash();
    } catch (e) {
        console.error(e);
        $382e02c9bbd5d50b$var$term.writeln(`Error: ${e.message}`);
    } finally{
        $382e02c9bbd5d50b$var$eraseButton.disabled = false;
    }
};
$382e02c9bbd5d50b$var$addFileButton.onclick = ()=>{
    const rowCount = $382e02c9bbd5d50b$var$table.rows.length;
    const row = $382e02c9bbd5d50b$var$table.insertRow(rowCount);
    //Column 1 - Offset
    const cell1 = row.insertCell(0);
    const element1 = document.createElement("input");
    element1.type = "text";
    element1.id = "offset" + rowCount;
    element1.value = "0x0000";
    cell1.appendChild(element1);
    // Column 2 - File selector
    const cell2 = row.insertCell(1);
    const element2 = document.createElement("input");
    element2.type = "file";
    element2.id = "selectFile" + rowCount;
    element2.name = "selected_File" + rowCount;
    element2.addEventListener("change", $382e02c9bbd5d50b$var$handleFileSelect, false);
    cell2.appendChild(element2);
    // Column 3  - Progress
    const cell3 = row.insertCell(2);
    cell3.classList.add("progress-cell");
    cell3.style.display = "none";
    cell3.innerHTML = `<progress value="0" max="100"></progress>`;
    // Column 4  - Remove File
    const cell4 = row.insertCell(3);
    cell4.classList.add("action-cell");
    if (rowCount > 1) {
        const element4 = document.createElement("input");
        element4.type = "button";
        const btnName = "button" + rowCount;
        element4.name = btnName;
        element4.setAttribute("class", "btn");
        element4.setAttribute("value", "Remove"); // or element1.value = "button";
        element4.onclick = function() {
            $382e02c9bbd5d50b$var$removeRow(row);
        };
        cell4.appendChild(element4);
    }
};
/**
 * The built in HTMLTableRowElement object.
 * @external HTMLTableRowElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement}
 */ /**
 * Remove file row from HTML Table
 * @param {HTMLTableRowElement} row Table row element to remove
 */ function $382e02c9bbd5d50b$var$removeRow(row) {
    const rowIndex = Array.from($382e02c9bbd5d50b$var$table.rows).indexOf(row);
    $382e02c9bbd5d50b$var$table.deleteRow(rowIndex);
}
/**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */ function $382e02c9bbd5d50b$var$cleanUp() {
    $382e02c9bbd5d50b$var$device = null;
    $382e02c9bbd5d50b$var$transport = null;
    $382e02c9bbd5d50b$var$chip = null;
}
$382e02c9bbd5d50b$var$disconnectButton.onclick = async ()=>{
    if ($382e02c9bbd5d50b$var$transport) await $382e02c9bbd5d50b$var$transport.disconnect();
    $382e02c9bbd5d50b$var$term.reset();
    $382e02c9bbd5d50b$var$lblBaudrate.style.display = "initial";
    $382e02c9bbd5d50b$var$baudrates.style.display = "initial";
    $382e02c9bbd5d50b$var$consoleBaudrates.style.display = "initial";
    $382e02c9bbd5d50b$var$connectButton.style.display = "initial";
    $382e02c9bbd5d50b$var$disconnectButton.style.display = "none";
    $382e02c9bbd5d50b$var$traceButton.style.display = "none";
    $382e02c9bbd5d50b$var$eraseButton.style.display = "none";
    $382e02c9bbd5d50b$var$lblConnTo.style.display = "none";
    $382e02c9bbd5d50b$var$filesDiv.style.display = "none";
    $382e02c9bbd5d50b$var$alertDiv.style.display = "none";
    $382e02c9bbd5d50b$var$consoleDiv.style.display = "initial";
    $382e02c9bbd5d50b$var$cleanUp();
};
let $382e02c9bbd5d50b$var$isConsoleClosed = false;
$382e02c9bbd5d50b$var$consoleStartButton.onclick = async ()=>{
    if ($382e02c9bbd5d50b$var$device === null) {
        $382e02c9bbd5d50b$var$device = await $382e02c9bbd5d50b$var$serialLib.requestPort({});
        $382e02c9bbd5d50b$var$transport = new (0, $4616b1a2f9a5b082$export$86495b081fef8e52)($382e02c9bbd5d50b$var$device, true);
    }
    $382e02c9bbd5d50b$var$lblConsoleFor.style.display = "block";
    $382e02c9bbd5d50b$var$lblConsoleBaudrate.style.display = "none";
    $382e02c9bbd5d50b$var$consoleBaudrates.style.display = "none";
    $382e02c9bbd5d50b$var$consoleStartButton.style.display = "none";
    $382e02c9bbd5d50b$var$consoleStopButton.style.display = "initial";
    $382e02c9bbd5d50b$var$resetButton.style.display = "initial";
    $382e02c9bbd5d50b$var$programDiv.style.display = "none";
    await $382e02c9bbd5d50b$var$transport.connect(parseInt($382e02c9bbd5d50b$var$consoleBaudrates.value));
    $382e02c9bbd5d50b$var$isConsoleClosed = false;
    while(!$382e02c9bbd5d50b$var$isConsoleClosed){
        const readLoop = $382e02c9bbd5d50b$var$transport.rawRead();
        const { value: value, done: done } = await readLoop.next();
        if (done || !value) break;
        $382e02c9bbd5d50b$var$term.write(value);
    }
    console.log("quitting console");
};
$382e02c9bbd5d50b$var$consoleStopButton.onclick = async ()=>{
    $382e02c9bbd5d50b$var$isConsoleClosed = true;
    if ($382e02c9bbd5d50b$var$transport) {
        await $382e02c9bbd5d50b$var$transport.disconnect();
        await $382e02c9bbd5d50b$var$transport.waitForUnlock(1500);
    }
    $382e02c9bbd5d50b$var$term.reset();
    $382e02c9bbd5d50b$var$lblConsoleBaudrate.style.display = "initial";
    $382e02c9bbd5d50b$var$consoleBaudrates.style.display = "initial";
    $382e02c9bbd5d50b$var$consoleStartButton.style.display = "initial";
    $382e02c9bbd5d50b$var$consoleStopButton.style.display = "none";
    $382e02c9bbd5d50b$var$resetButton.style.display = "none";
    $382e02c9bbd5d50b$var$lblConsoleFor.style.display = "none";
    $382e02c9bbd5d50b$var$programDiv.style.display = "initial";
    $382e02c9bbd5d50b$var$cleanUp();
};
/**
 * Validate the provided files images and offset to see if they're valid.
 * @returns {string} Program input validation result
 */ function $382e02c9bbd5d50b$var$validateProgramInputs() {
    const offsetArr = [];
    const rowCount = $382e02c9bbd5d50b$var$table.rows.length;
    let row;
    let offset = 0;
    let fileData = null;
    // check for mandatory fields
    for(let index = 1; index < rowCount; index++){
        row = $382e02c9bbd5d50b$var$table.rows[index];
        //offset fields checks
        const offSetObj = row.cells[0].childNodes[0];
        offset = parseInt(offSetObj.value);
        // Non-numeric or blank offset
        if (Number.isNaN(offset)) return "Offset field in row " + index + " is not a valid address!";
        else if (offsetArr.includes(offset)) return "Offset field in row " + index + " is already in use!";
        else offsetArr.push(offset);
        const fileObj = row.cells[1].childNodes[0];
        fileData = fileObj.data;
        if (fileData == null) return "No file selected for row " + index + "!";
    }
    return "success";
}
$382e02c9bbd5d50b$var$programButton.onclick = async ()=>{
    const alertMsg = document.getElementById("alertmsg");
    const err = $382e02c9bbd5d50b$var$validateProgramInputs();
    if (err != "success") {
        alertMsg.innerHTML = "<strong>" + err + "</strong>";
        $382e02c9bbd5d50b$var$alertDiv.style.display = "block";
        return;
    }
    // Hide error message
    $382e02c9bbd5d50b$var$alertDiv.style.display = "none";
    const fileArray = [];
    const progressBars = [];
    for(let index = 1; index < $382e02c9bbd5d50b$var$table.rows.length; index++){
        const row = $382e02c9bbd5d50b$var$table.rows[index];
        const offSetObj = row.cells[0].childNodes[0];
        const offset = parseInt(offSetObj.value);
        const fileObj = row.cells[1].childNodes[0];
        const progressBar = row.cells[2].childNodes[0];
        progressBar.textContent = "0";
        progressBars.push(progressBar);
        row.cells[2].style.display = "initial";
        row.cells[3].style.display = "none";
        fileArray.push({
            data: fileObj.data,
            address: offset
        });
    }
    try {
        const flashOptions = {
            fileArray: fileArray,
            flashSize: "keep",
            eraseAll: false,
            compress: true,
            reportProgress: (fileIndex, written, total)=>{
                progressBars[fileIndex].value = written / total * 100;
            },
            calculateMD5Hash: (image)=>CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image))
        };
        await $382e02c9bbd5d50b$var$esploader.writeFlash(flashOptions);
    } catch (e) {
        console.error(e);
        $382e02c9bbd5d50b$var$term.writeln(`Error: ${e.message}`);
    } finally{
        // Hide progress bars and show erase buttons
        for(let index = 1; index < $382e02c9bbd5d50b$var$table.rows.length; index++){
            $382e02c9bbd5d50b$var$table.rows[index].cells[2].style.display = "none";
            $382e02c9bbd5d50b$var$table.rows[index].cells[3].style.display = "initial";
        }
    }
};
$382e02c9bbd5d50b$var$addFileButton.onclick(undefined);


//# sourceMappingURL=index.8d9987d7.js.map
