(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kds-root-kds'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kds-root-kds'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korma-root-korma'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korma-root-korma'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korma-root-korma'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korma-root-korma'.");
    }root['korma-root-korma'] = factory(typeof this['korma-root-korma'] === 'undefined' ? {} : this['korma-root-korma'], kotlin, this['kds-root-kds']);
  }
}(this, function (_, Kotlin, $module$kds_root_kds) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var IntPriorityQueue = $module$kds_root_kds.com.soywiz.kds.IntPriorityQueue;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var math = Kotlin.kotlin.math;
  var Comparable = Kotlin.kotlin.Comparable;
  var Math_0 = Math;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var numberToDouble = Kotlin.numberToDouble;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var numberToInt = Kotlin.numberToInt;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var Array_0 = Array;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var genericSort = $module$kds_root_kds.com.soywiz.kds.genericSort_bepgem$;
  var SortOps = $module$kds_root_kds.com.soywiz.kds.SortOps;
  var DoubleArrayList = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList;
  var IntArrayList = $module$kds_root_kds.com.soywiz.kds.IntArrayList;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var max = Kotlin.kotlin.collections.max_l63kqw$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var Collection = Kotlin.kotlin.collections.Collection;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var min = Kotlin.kotlin.collections.min_l63kqw$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var equals = Kotlin.equals;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var get_size = $module$kds_root_kds.com.soywiz.kds.get_size_dqpcmq$;
  var FastIntMap = $module$kds_root_kds.com.soywiz.kds.FastIntMap_287e2$;
  var Pool = $module$kds_root_kds.com.soywiz.kds.Pool;
  var Pool_init = $module$kds_root_kds.com.soywiz.kds.Pool_init_rz0iom$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwUPAE = Kotlin.throwUPAE;
  var IntArrayList_init = $module$kds_root_kds.com.soywiz.kds.IntArrayList_init_38vc8i$;
  var DoubleArrayList_init = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList_init_avch8c$;
  var getCallableRef = Kotlin.getCallableRef;
  var throwCCE = Kotlin.throwCCE;
  var trimEnd = Kotlin.kotlin.text.trimEnd_gw00vp$;
  var Any = Object;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_bvy38s$;
  var log = Kotlin.kotlin.math.log_lu1900$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var isNaN_1 = Kotlin.kotlin.isNaN_81szk$;
  var isInfinite_0 = Kotlin.kotlin.isInfinite_81szk$;
  var L0 = Kotlin.Long.ZERO;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var Random = Kotlin.kotlin.random.Random;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var BSearchResult = $module$kds_root_kds.com.soywiz.kds.BSearchResult;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  Matrix$Type.prototype = Object.create(Enum.prototype);
  Matrix$Type.prototype.constructor = Matrix$Type;
  MajorOrder.prototype = Object.create(Enum.prototype);
  MajorOrder.prototype.constructor = MajorOrder;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  PointArrayList$PointSortOpts.prototype = Object.create(SortOps.prototype);
  PointArrayList$PointSortOpts.prototype.constructor = PointArrayList$PointSortOpts;
  PointIntArrayList$PointSortOpts.prototype = Object.create(SortOps.prototype);
  PointIntArrayList$PointSortOpts.prototype.constructor = PointIntArrayList$PointSortOpts;
  Shape2d$Empty.prototype = Object.create(Shape2d.prototype);
  Shape2d$Empty.prototype.constructor = Shape2d$Empty;
  Shape2d$Line.prototype = Object.create(Shape2d.prototype);
  Shape2d$Line.prototype.constructor = Shape2d$Line;
  Shape2d$Circle.prototype = Object.create(Shape2d.prototype);
  Shape2d$Circle.prototype.constructor = Shape2d$Circle;
  Shape2d$Rectangle.prototype = Object.create(Shape2d.prototype);
  Shape2d$Rectangle.prototype.constructor = Shape2d$Rectangle;
  Shape2d$Polygon.prototype = Object.create(Shape2d.prototype);
  Shape2d$Polygon.prototype.constructor = Shape2d$Polygon;
  Shape2d$Polyline.prototype = Object.create(Shape2d.prototype);
  Shape2d$Polyline.prototype.constructor = Shape2d$Polyline;
  Shape2d$Complex.prototype = Object.create(Shape2d.prototype);
  Shape2d$Complex.prototype.constructor = Shape2d$Complex;
  LineCap.prototype = Object.create(Enum.prototype);
  LineCap.prototype.constructor = LineCap;
  LineJoin.prototype = Object.create(Enum.prototype);
  LineJoin.prototype.constructor = LineJoin;
  PolygonScanline$IntArrayListSort.prototype = Object.create(SortOps.prototype);
  PolygonScanline$IntArrayListSort.prototype.constructor = PolygonScanline$IntArrayListSort;
  PolygonScanline.prototype = Object.create(RastScale.prototype);
  PolygonScanline.prototype.constructor = PolygonScanline;
  StrokeToFill$EdgePoint.prototype = Object.create(Enum.prototype);
  StrokeToFill$EdgePoint.prototype.constructor = StrokeToFill$EdgePoint;
  Winding.prototype = Object.create(Enum.prototype);
  Winding.prototype.constructor = Winding;
  function Korma() {
    Korma_instance = this;
    this.VERSION = KORMA_VERSION;
  }
  Korma.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korma',
    interfaces: []
  };
  var Korma_instance = null;
  function Korma_getInstance() {
    if (Korma_instance === null) {
      new Korma();
    }return Korma_instance;
  }
  function AStar(width, height, isBlocking) {
    AStar$Companion_getInstance();
    this.width = width;
    this.height = height;
    this.isBlocking = isBlocking;
    this.NULL_0 = new AStarNode(-1);
    var array = new Int32Array(Kotlin.imul(this.width, this.height));
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i % this.width;
    }
    this.posX_0 = array;
    var array_0 = new Int32Array(Kotlin.imul(this.width, this.height));
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = i_0 / this.width | 0;
    }
    this.posY_0 = array_0;
    var array_1 = new Int32Array(Kotlin.imul(this.width, this.height));
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = 2147483647;
    }
    this.weights_0 = array_1;
    var array_2 = new Int32Array(Kotlin.imul(this.width, this.height));
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      array_2[i_2] = this.NULL_0.index;
    }
    this.prev_0 = array_2;
    this.queue_0 = IntPriorityQueue.Companion.invoke_ynrz7b$(void 0, AStar$queue$lambda(this));
  }
  function AStar$Companion() {
    AStar$Companion_instance = this;
  }
  function AStar$Companion$invoke$lambda(closure$board) {
    return function (x, y) {
      return closure$board.get_vux9f0$(x, y);
    };
  }
  AStar$Companion.prototype.invoke_9zsmt2$ = function (board) {
    return new AStar(board.width, board.height, AStar$Companion$invoke$lambda(board));
  };
  function AStar$Companion$find$lambda(closure$board) {
    return function (x, y) {
      return closure$board.get_vux9f0$(x, y);
    };
  }
  AStar$Companion.prototype.find_43y20a$ = function (board, x0, y0, x1, y1, findClosest, diagonals) {
    if (findClosest === void 0)
      findClosest = false;
    if (diagonals === void 0)
      diagonals = false;
    return (new AStar(board.width, board.height, AStar$Companion$find$lambda(board))).find_eibivg$(x0, y0, x1, y1, findClosest, diagonals);
  };
  AStar$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AStar$Companion_instance = null;
  function AStar$Companion_getInstance() {
    if (AStar$Companion_instance === null) {
      new AStar$Companion();
    }return AStar$Companion_instance;
  }
  function AStar$find$lambda(closure$out) {
    return function (x, y) {
      closure$out.add_vux9f0$(x, y);
      return Unit;
    };
  }
  AStar.prototype.find_eibivg$ = function (x0, y0, x1, y1, findClosest, diagonals) {
    if (findClosest === void 0)
      findClosest = false;
    if (diagonals === void 0)
      diagonals = false;
    var out = new PointIntArrayList();
    this.find_8i08jz$(x0, y0, x1, y1, findClosest, diagonals, AStar$find$lambda(out));
    out.reverse();
    return out;
  };
  AStar.prototype.find_8i08jz$ = function (x0, y0, x1, y1, findClosest, diagonals, emit) {
    if (findClosest === void 0)
      findClosest = false;
    if (diagonals === void 0)
      diagonals = false;
    var tmp$, tmp$_0;
    this.queue_0.clear();
    tmp$ = this.weights_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      this.weights_0[n] = 2147483647;
    }
    tmp$_0 = this.prev_0;
    for (var n_0 = 0; n_0 !== tmp$_0.length; ++n_0) {
      this.prev_0[n_0] = this.NULL_0.index;
    }
    var first = this.getNode_0(x0, y0);
    var dest = this.getNode_0(x1, y1);
    var closest = first;
    var closestDist = Point$Companion_getInstance().distance_6y0v78$(x0, y0, x1, y1);
    if (!this.get_value_0(first)) {
      this.queue_0.add_11rb$(first.index);
      this.set_weight_0(first, 0);
    }while (!this.queue_0.isEmpty()) {
      var last = new AStarNode(this.queue_0.removeHead());
      var dist = Point$Companion_getInstance().distance_6y0v78$(this.get_posX_0(last), this.get_posY_0(last), this.get_posX_0(dest), this.get_posY_0(dest));
      if (dist < closestDist) {
        closestDist = dist;
        closest = last;
      }var nweight = this.get_weight_0(last) + 1 | 0;
      for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0)
            continue;
          if (!diagonals && dx !== 0 && dy !== 0)
            continue;
          var x = this.get_posX_0(last) + dx | 0;
          var y = this.get_posY_0(last) + dy | 0;
          if (this.inside_0(x, y) && !this.get_value_0(this.getNode_0(x, y))) {
            var n_1 = this.getNode_0(x, y);
            if (nweight < this.get_weight_0(n_1)) {
              this.set_prev_0(n_1, last);
              this.queue_0.add_11rb$(n_1.index);
              this.set_weight_0(n_1, nweight);
            }}}
      }
    }
    if (findClosest || (closest != null ? closest.equals(dest) : null)) {
      var current = closest;
      while (!(current != null ? current.equals(this.NULL_0) : null)) {
        emit(this.get_posX_0(current), this.get_posY_0(current));
        current = this.get_prev_0(current);
      }
    }};
  AStar.prototype.inside_0 = function (x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.width;
    if (0 <= x && x < tmp$) {
      tmp$_0 = this.height;
      tmp$_1 = (0 <= y && y < tmp$_0);
    } else
      tmp$_1 = false;
    return tmp$_1;
  };
  AStar.prototype.getNode_0 = function (x, y) {
    return new AStarNode(Kotlin.imul(y, this.width) + x | 0);
  };
  AStar.prototype.get_posX_0 = function ($receiver) {
    return this.posX_0[$receiver.index];
  };
  AStar.prototype.get_posY_0 = function ($receiver) {
    return this.posY_0[$receiver.index];
  };
  AStar.prototype.get_value_0 = function ($receiver) {
    return this.isBlocking(this.get_posX_0($receiver), this.get_posY_0($receiver));
  };
  AStar.prototype.get_weight_0 = function ($receiver) {
    return this.weights_0[$receiver.index];
  };
  AStar.prototype.set_weight_0 = function ($receiver, value) {
    this.weights_0[$receiver.index] = value;
  };
  AStar.prototype.get_prev_0 = function ($receiver) {
    return new AStarNode(this.prev_0[$receiver.index]);
  };
  AStar.prototype.set_prev_0 = function ($receiver, value) {
    this.prev_0[$receiver.index] = value.index;
  };
  AStar.prototype.neighborhoods_0 = function ($receiver, diagonals, emit) {
    for (var dy = -1; dy <= 1; dy++) {
      for (var dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0)
          continue;
        if (!diagonals && dx !== 0 && dy !== 0)
          continue;
        var x = this.get_posX_0($receiver) + dx | 0;
        var y = this.get_posY_0($receiver) + dy | 0;
        if (this.inside_0(x, y) && !this.get_value_0(this.getNode_0(x, y))) {
          emit(this.getNode_0(x, y));
        }}
    }
  };
  function AStar$queue$lambda(this$AStar) {
    return function (a, b) {
      return this$AStar.get_weight_0(new AStarNode(a)) - this$AStar.get_weight_0(new AStarNode(b)) | 0;
    };
  }
  AStar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AStar',
    interfaces: []
  };
  function AStarNode(index) {
    this.index = index;
  }
  AStarNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AStarNode',
    interfaces: []
  };
  AStarNode.prototype.unbox = function () {
    return this.index;
  };
  AStarNode.prototype.toString = function () {
    return 'AStarNode(index=' + Kotlin.toString(this.index) + ')';
  };
  AStarNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  AStarNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.index, other.index))));
  };
  function KormaExperimental() {
  }
  KormaExperimental.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KormaExperimental',
    interfaces: [Annotation]
  };
  function Anchor(sx, sy) {
    Anchor$Companion_getInstance();
    this.sx = sx;
    this.sy = sy;
  }
  function Anchor$Companion() {
    Anchor$Companion_instance = this;
    this.TOP_LEFT = new Anchor(0.0, 0.0);
    this.TOP_CENTER = new Anchor(0.5, 0.0);
    this.TOP_RIGHT = new Anchor(1.0, 0.0);
    this.MIDDLE_LEFT = new Anchor(0.0, 0.5);
    this.MIDDLE_CENTER = new Anchor(0.5, 0.5);
    this.MIDDLE_RIGHT = new Anchor(1.0, 0.5);
    this.BOTTOM_LEFT = new Anchor(0.0, 1.0);
    this.BOTTOM_CENTER = new Anchor(0.5, 1.0);
    this.BOTTOM_RIGHT = new Anchor(1.0, 1.0);
  }
  Anchor$Companion.prototype.invoke_vux9f0$ = function (sx, sy) {
    return new Anchor(sx, sy);
  };
  Anchor$Companion.prototype.invoke_dleff0$ = function (sx, sy) {
    return new Anchor(sx, sy);
  };
  Anchor$Companion.prototype.invoke_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Anchor.Companion.invoke_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Anchor_init = _.com.soywiz.korma.geom.Anchor;
    return function (sx, sy) {
      return new Anchor_init(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Anchor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Anchor$Companion_instance = null;
  function Anchor$Companion_getInstance() {
    if (Anchor$Companion_instance === null) {
      new Anchor$Companion();
    }return Anchor$Companion_instance;
  }
  Anchor.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return new Anchor(interpolate_1(ratio, this.sx, other.sx), interpolate_1(ratio, this.sy, other.sy));
  };
  Anchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Anchor',
    interfaces: [Interpolable]
  };
  Anchor.prototype.component1 = function () {
    return this.sx;
  };
  Anchor.prototype.component2 = function () {
    return this.sy;
  };
  Anchor.prototype.copy_lu1900$ = function (sx, sy) {
    return new Anchor(sx === void 0 ? this.sx : sx, sy === void 0 ? this.sy : sy);
  };
  Anchor.prototype.toString = function () {
    return 'Anchor(sx=' + Kotlin.toString(this.sx) + (', sy=' + Kotlin.toString(this.sy)) + ')';
  };
  Anchor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sx) | 0;
    result = result * 31 + Kotlin.hashCode(this.sy) | 0;
    return result;
  };
  Anchor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sx, other.sx) && Kotlin.equals(this.sy, other.sy)))));
  };
  function Angle(radians) {
    Angle$Companion_getInstance();
    this.radians = radians;
  }
  Angle.prototype.toString = function () {
    return get_degrees(this).toString() + '.degrees';
  };
  function Angle$Companion() {
    Angle$Companion_instance = this;
    this.ZERO = new Angle(0.0);
    this.PI2_8be2vx$ = math.PI * 2;
    this.DEG2RAD_8be2vx$ = math.PI / 180.0;
    this.RAD2DEG_8be2vx$ = 180.0 / math.PI;
    this.MAX_DEGREES_8be2vx$ = 360.0;
    this.MAX_RADIANS_8be2vx$ = this.PI2_8be2vx$;
    this.HALF_DEGREES_8be2vx$ = this.MAX_DEGREES_8be2vx$ / 2.0;
    this.HALF_RADIANS_8be2vx$ = this.MAX_RADIANS_8be2vx$ / 2.0;
  }
  Angle$Companion.prototype.fromRadians_14dthe$ = function (radians) {
    return new Angle(radians);
  };
  Angle$Companion.prototype.fromDegrees_14dthe$ = function (degrees) {
    return new Angle(this.degreesToRadians_14dthe$(degrees));
  };
  Angle$Companion.prototype.fromRadians_mx4ult$ = function (radians) {
    return this.fromRadians_14dthe$(radians);
  };
  Angle$Companion.prototype.fromDegrees_mx4ult$ = function (degrees) {
    return this.fromDegrees_14dthe$(degrees);
  };
  Angle$Companion.prototype.fromRadians_za3lpa$ = function (radians) {
    return this.fromRadians_14dthe$(radians);
  };
  Angle$Companion.prototype.fromDegrees_za3lpa$ = function (degrees) {
    return this.fromDegrees_14dthe$(degrees);
  };
  Angle$Companion.prototype.fromRadians_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Angle.Companion.fromRadians_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (radians) {
      return this.fromRadians_14dthe$(numberToDouble(radians));
    };
  }));
  Angle$Companion.prototype.fromDegrees_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Angle.Companion.fromDegrees_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (degrees) {
      return this.fromDegrees_14dthe$(numberToDouble(degrees));
    };
  }));
  Angle$Companion.prototype.cos01_14dthe$ = function (ratio) {
    var x = this.PI2_8be2vx$ * ratio;
    return Math_0.cos(x);
  };
  Angle$Companion.prototype.sin01_14dthe$ = function (ratio) {
    var x = this.PI2_8be2vx$ * ratio;
    return Math_0.sin(x);
  };
  Angle$Companion.prototype.tan01_14dthe$ = function (ratio) {
    var x = this.PI2_8be2vx$ * ratio;
    return Math_0.tan(x);
  };
  Angle$Companion.prototype.degreesToRadians_14dthe$ = function (degrees) {
    return degrees * this.DEG2RAD_8be2vx$;
  };
  Angle$Companion.prototype.radiansToDegrees_14dthe$ = function (radians) {
    return radians * this.RAD2DEG_8be2vx$;
  };
  Angle$Companion.prototype.shortDistanceTo_1h8ip2$ = function (from, to) {
    var r0 = umod(from.radians, this.MAX_RADIANS_8be2vx$);
    var r1 = umod(to.radians, this.MAX_RADIANS_8be2vx$);
    var diff = (r1 - r0 + this.HALF_RADIANS_8be2vx$) % this.MAX_RADIANS_8be2vx$ - this.HALF_RADIANS_8be2vx$;
    return diff < -this.HALF_RADIANS_8be2vx$ ? new Angle(diff + this.MAX_RADIANS_8be2vx$) : new Angle(diff);
  };
  Angle$Companion.prototype.longDistanceTo_1h8ip2$ = function (from, to) {
    var tmp$;
    var short = this.shortDistanceTo_1h8ip2$(from, to);
    if (short != null ? short.equals(this.ZERO) : null)
      tmp$ = this.ZERO;
    else if (short.compareTo_11rb$(this.ZERO) < 0)
      tmp$ = plus(get_degrees_1(360), short);
    else
      tmp$ = plus(get_degrees_1(-360), short);
    return tmp$;
  };
  Angle$Companion.prototype.between_6y0v78$ = function (x0, y0, x1, y1) {
    var y = y1 - y0;
    var x = x1 - x0;
    var angle = Math_0.atan2(y, x);
    return angle < 0 ? new Angle(angle + this.PI2_8be2vx$) : new Angle(angle);
  };
  Angle$Companion.prototype.between_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Angle.Companion.between_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x0, y0, x1, y1) {
      return this.between_6y0v78$(numberToDouble(x0), numberToDouble(y0), numberToDouble(x1), numberToDouble(y1));
    };
  }));
  Angle$Companion.prototype.between_v3tj7w$ = function (p0, p1) {
    return this.between_6y0v78$(get_x(p0), get_y(p0), get_x(p1), get_y(p1));
  };
  Angle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Angle$Companion_instance = null;
  function Angle$Companion_getInstance() {
    if (Angle$Companion_instance === null) {
      new Angle$Companion();
    }return Angle$Companion_instance;
  }
  Angle.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.compareTo(this.radians, other.radians);
  };
  Angle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Angle',
    interfaces: [Comparable]
  };
  Angle.prototype.unbox = function () {
    return this.radians;
  };
  Angle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.radians) | 0;
    return result;
  };
  Angle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.radians, other.radians))));
  };
  var cos = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.cos_4crm0z$', wrapFunction(function () {
    var Math_0 = Math;
    return function (angle) {
      var x = angle.radians;
      return Math_0.cos(x);
    };
  }));
  var sin = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.sin_4crm0z$', wrapFunction(function () {
    var Math_0 = Math;
    return function (angle) {
      var x = angle.radians;
      return Math_0.sin(x);
    };
  }));
  var tan = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.tan_4crm0z$', wrapFunction(function () {
    var Math_0 = Math;
    return function (angle) {
      var x = angle.radians;
      return Math_0.tan(x);
    };
  }));
  function get_cosine($receiver) {
    var x = $receiver.radians;
    return Math_0.cos(x);
  }
  function get_sine($receiver) {
    var x = $receiver.radians;
    return Math_0.sin(x);
  }
  function get_tangent($receiver) {
    var x = $receiver.radians;
    return Math_0.tan(x);
  }
  function get_degrees($receiver) {
    return Angle$Companion_getInstance().radiansToDegrees_14dthe$($receiver.radians);
  }
  function get_absoluteValue($receiver) {
    var tmp$ = Angle$Companion_getInstance();
    var $receiver_0 = $receiver.radians;
    return tmp$.fromRadians_14dthe$(Math_0.abs($receiver_0));
  }
  function shortDistanceTo($receiver, other) {
    return Angle$Companion_getInstance().shortDistanceTo_1h8ip2$($receiver, other);
  }
  function longDistanceTo($receiver, other) {
    return Angle$Companion_getInstance().longDistanceTo_1h8ip2$($receiver, other);
  }
  function times($receiver, scale) {
    return new Angle($receiver.radians * scale);
  }
  function div($receiver, scale) {
    return new Angle($receiver.radians / scale);
  }
  function times_0($receiver, scale) {
    return times($receiver, scale);
  }
  function div_0($receiver, scale) {
    return div($receiver, scale);
  }
  var times_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.times_lav7ze$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var times = _.com.soywiz.korma.geom.times_gh9cj6$;
    return function ($receiver, scale) {
      return times($receiver, numberToDouble(scale));
    };
  }));
  var div_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.div_lav7ze$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var div = _.com.soywiz.korma.geom.div_gh9cj6$;
    return function ($receiver, scale) {
      return div($receiver, numberToDouble(scale));
    };
  }));
  function div_2($receiver, other) {
    return $receiver.radians / other.radians;
  }
  function plus($receiver, other) {
    return new Angle($receiver.radians + other.radians);
  }
  function minus($receiver, other) {
    return new Angle($receiver.radians - other.radians);
  }
  function unaryMinus($receiver) {
    return new Angle(-$receiver.radians);
  }
  function unaryPlus($receiver) {
    return new Angle(+$receiver.radians);
  }
  function compareTo($receiver, other) {
    return Kotlin.compareTo($receiver.radians, other.radians);
  }
  function contains($receiver, angle) {
    return inBetween_1(angle, $receiver.start, $receiver.endInclusive, true);
  }
  function contains_0($receiver, angle) {
    return inBetween_1(angle, $receiver.start, $receiver.endExclusive, false);
  }
  function until_0($receiver, other) {
    return new OpenRange($receiver, other);
  }
  function inBetweenInclusive($receiver, min, max) {
    return inBetween_1($receiver, min, max, true);
  }
  function inBetweenExclusive($receiver, min, max) {
    return inBetween_1($receiver, min, max, false);
  }
  function inBetween($receiver, range) {
    return inBetween_1($receiver, range.start, range.endInclusive, true);
  }
  function inBetween_0($receiver, range) {
    return inBetween_1($receiver, range.start, range.endExclusive, false);
  }
  function inBetween_1($receiver, min, max, inclusive) {
    var tmp$;
    var nthis = get_normalized($receiver);
    var nmin = get_normalized(min);
    var nmax = get_normalized(max);
    if (nmin.compareTo_11rb$(nmax) > 0)
      tmp$ = nthis.compareTo_11rb$(nmin) >= 0 || (inclusive ? nthis.compareTo_11rb$(nmax) <= 0 : nthis.compareTo_11rb$(nmax) < 0);
    else
      tmp$ = (nthis.compareTo_11rb$(nmin) >= 0 && (inclusive ? nthis.compareTo_11rb$(nmax) <= 0 : nthis.compareTo_11rb$(nmax) < 0));
    return tmp$;
  }
  function get_degrees_0($receiver) {
    return Angle$Companion_getInstance().fromDegrees_14dthe$($receiver);
  }
  function get_radians($receiver) {
    return Angle$Companion_getInstance().fromRadians_14dthe$($receiver);
  }
  function get_degrees_1($receiver) {
    return Angle$Companion_getInstance().fromDegrees_za3lpa$($receiver);
  }
  function get_radians_0($receiver) {
    return Angle$Companion_getInstance().fromRadians_za3lpa$($receiver);
  }
  function get_degrees_2($receiver) {
    return Angle$Companion_getInstance().fromDegrees_mx4ult$($receiver);
  }
  function get_radians_1($receiver) {
    return Angle$Companion_getInstance().fromRadians_mx4ult$($receiver);
  }
  var get_degrees_3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.get_degrees_rcaex3$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return Angle.Companion.fromDegrees_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_radians_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.get_radians_rcaex3$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return Angle.Companion.fromRadians_14dthe$(numberToDouble($receiver));
    };
  }));
  function get_normalized($receiver) {
    return new Angle(umod($receiver.radians, Angle$Companion_getInstance().MAX_RADIANS_8be2vx$));
  }
  function interpolate($receiver, l, r) {
    return get_radians(interpolate_1($receiver, l.radians, r.radians));
  }
  function BoundsBuilder() {
    BoundsBuilder$Companion_getInstance();
    this.tempRect = Rectangle$Companion_getInstance().invoke();
    this.npoints_d7e9sv$_0 = 0;
    this.xmin_uznz5k$_0 = BoundsBuilder$Companion_getInstance().MAX_0;
    this.xmax_uzo4ui$_0 = BoundsBuilder$Companion_getInstance().MIN_0;
    this.ymin_uz46k7$_0 = BoundsBuilder$Companion_getInstance().MAX_0;
    this.ymax_uz4c95$_0 = BoundsBuilder$Companion_getInstance().MIN_0;
  }
  function BoundsBuilder$Companion() {
    BoundsBuilder$Companion_instance = this;
    this.MIN_0 = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
    this.MAX_0 = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
  }
  BoundsBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BoundsBuilder$Companion_instance = null;
  function BoundsBuilder$Companion_getInstance() {
    if (BoundsBuilder$Companion_instance === null) {
      new BoundsBuilder$Companion();
    }return BoundsBuilder$Companion_instance;
  }
  Object.defineProperty(BoundsBuilder.prototype, 'npoints', {
    get: function () {
      return this.npoints_d7e9sv$_0;
    },
    set: function (npoints) {
      this.npoints_d7e9sv$_0 = npoints;
    }
  });
  Object.defineProperty(BoundsBuilder.prototype, 'xmin', {
    get: function () {
      return this.xmin_uznz5k$_0;
    },
    set: function (xmin) {
      this.xmin_uznz5k$_0 = xmin;
    }
  });
  Object.defineProperty(BoundsBuilder.prototype, 'xmax', {
    get: function () {
      return this.xmax_uzo4ui$_0;
    },
    set: function (xmax) {
      this.xmax_uzo4ui$_0 = xmax;
    }
  });
  Object.defineProperty(BoundsBuilder.prototype, 'ymin', {
    get: function () {
      return this.ymin_uz46k7$_0;
    },
    set: function (ymin) {
      this.ymin_uz46k7$_0 = ymin;
    }
  });
  Object.defineProperty(BoundsBuilder.prototype, 'ymax', {
    get: function () {
      return this.ymax_uz4c95$_0;
    },
    set: function (ymax) {
      this.ymax_uz4c95$_0 = ymax;
    }
  });
  BoundsBuilder.prototype.isEmpty = function () {
    return this.npoints === 0;
  };
  BoundsBuilder.prototype.isNotEmpty = function () {
    return this.npoints > 0;
  };
  BoundsBuilder.prototype.reset = function () {
    this.xmin = BoundsBuilder$Companion_getInstance().MAX_0;
    this.xmax = BoundsBuilder$Companion_getInstance().MIN_0;
    this.ymin = BoundsBuilder$Companion_getInstance().MAX_0;
    this.ymax = BoundsBuilder$Companion_getInstance().MIN_0;
    this.npoints = 0;
  };
  BoundsBuilder.prototype.add_lu1900$ = function (x, y) {
    var a = this.xmin;
    this.xmin = Math_0.min(a, x);
    var a_0 = this.xmax;
    this.xmax = Math_0.max(a_0, x);
    var a_1 = this.ymin;
    this.ymin = Math_0.min(a_1, y);
    var a_2 = this.ymax;
    this.ymax = Math_0.max(a_2, y);
    this.npoints = this.npoints + 1 | 0;
    return this;
  };
  BoundsBuilder.prototype.add_y2mxf1$ = function (x, y, transform) {
    return this.add_lu1900$(transform.transformX_lu1900$(x, y), transform.transformY_lu1900$(x, y));
  };
  BoundsBuilder.prototype.getBoundsOrNull_2da8yn$ = function (out) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    return this.npoints === 0 ? null : out.setBounds_6y0v78$(this.xmin, this.ymin, this.xmax, this.ymax);
  };
  BoundsBuilder.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    if (this.getBoundsOrNull_2da8yn$(out) == null) {
      out.setBounds_tjonv8$(0, 0, 0, 0);
    }return out;
  };
  BoundsBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundsBuilder',
    interfaces: []
  };
  function add($receiver, x, y) {
    return $receiver.add_lu1900$(x, y);
  }
  var add_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.add_jjtjgn$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.add_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  function add_1($receiver, p) {
    return $receiver.add_lu1900$(get_x(p), get_y(p));
  }
  function add_2($receiver, ps) {
    var tmp$;
    tmp$ = ps.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      add_1($receiver, p);
    }
    return $receiver;
  }
  function add_3($receiver, ps) {
    var tmp$;
    tmp$ = ps.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.add_lu1900$(ps.getX_za3lpa$(n), ps.getY_za3lpa$(n));
  }
  function add_4($receiver, rect) {
    if (rect.isNotEmpty) {
      $receiver.add_lu1900$(rect.left, rect.top);
      $receiver.add_lu1900$(rect.right, rect.bottom);
    }return $receiver;
  }
  function add_5($receiver, p, transform) {
    return $receiver.add_y2mxf1$(get_x(p), get_y(p), transform);
  }
  function add_6($receiver, ps, transform) {
    var tmp$;
    tmp$ = ps.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      add_5($receiver, p, transform);
    }
    return $receiver;
  }
  function add_7($receiver, ps, transform) {
    var tmp$;
    tmp$ = ps.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.add_y2mxf1$(ps.getX_za3lpa$(n), ps.getY_za3lpa$(n), transform);
  }
  function add_8($receiver, rect, transform) {
    if (rect.isNotEmpty) {
      $receiver.add_y2mxf1$(rect.left, rect.top, transform);
      $receiver.add_y2mxf1$(rect.right, rect.bottom, transform);
    }return $receiver;
  }
  function IMatrix() {
    IMatrix$Companion_getInstance();
  }
  function IMatrix$Companion() {
    IMatrix$Companion_instance = this;
  }
  IMatrix$Companion.prototype.invoke_9wz194$ = function (a, b, c, d, tx, ty) {
    if (a === void 0)
      a = 1;
    if (b === void 0)
      b = 0;
    if (c === void 0)
      c = 0;
    if (d === void 0)
      d = 1;
    if (tx === void 0)
      tx = 0;
    if (ty === void 0)
      ty = 0;
    return new Matrix(numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d), numberToDouble(tx), numberToDouble(ty));
  };
  IMatrix$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IMatrix$Companion_instance = null;
  function IMatrix$Companion_getInstance() {
    if (IMatrix$Companion_instance === null) {
      new IMatrix$Companion();
    }return IMatrix$Companion_instance;
  }
  IMatrix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IMatrix',
    interfaces: []
  };
  function get_a($receiver) {
    return $receiver._a;
  }
  function get_b($receiver) {
    return $receiver._b;
  }
  function get_c($receiver) {
    return $receiver._c;
  }
  function get_d($receiver) {
    return $receiver._d;
  }
  function get_tx($receiver) {
    return $receiver._tx;
  }
  function get_ty($receiver) {
    return $receiver._ty;
  }
  function Matrix(a, b, c, d, tx, ty) {
    Matrix$Companion_getInstance();
    if (a === void 0)
      a = 1.0;
    if (b === void 0)
      b = 0.0;
    if (c === void 0)
      c = 0.0;
    if (d === void 0)
      d = 1.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }
  Object.defineProperty(Matrix.prototype, '_a', {
    get: function () {
      return this.a;
    }
  });
  Object.defineProperty(Matrix.prototype, '_b', {
    get: function () {
      return this.b;
    }
  });
  Object.defineProperty(Matrix.prototype, '_c', {
    get: function () {
      return this.c;
    }
  });
  Object.defineProperty(Matrix.prototype, '_d', {
    get: function () {
      return this.d;
    }
  });
  Object.defineProperty(Matrix.prototype, '_tx', {
    get: function () {
      return this.tx;
    }
  });
  Object.defineProperty(Matrix.prototype, '_ty', {
    get: function () {
      return this.ty;
    }
  });
  function Matrix$Companion() {
    Matrix$Companion_instance = this;
  }
  Matrix$Companion.prototype.invoke_w8lrqs$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.Companion.invoke_w8lrqs$', wrapFunction(function () {
    var Matrix_init = _.com.soywiz.korma.geom.Matrix;
    return function (a, b, c, d, tx, ty) {
      if (b === void 0)
        b = 0.0;
      if (c === void 0)
        c = 0.0;
      if (d === void 0)
        d = 1.0;
      if (tx === void 0)
        tx = 0.0;
      if (ty === void 0)
        ty = 0.0;
      return new Matrix_init(a, b, c, d, tx, ty);
    };
  }));
  Matrix$Companion.prototype.invoke_mbbjvw$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.Companion.invoke_mbbjvw$', wrapFunction(function () {
    var Matrix_init = _.com.soywiz.korma.geom.Matrix;
    return function (a, b, c, d, tx, ty) {
      if (b === void 0)
        b = 0;
      if (c === void 0)
        c = 0;
      if (d === void 0)
        d = 1;
      if (tx === void 0)
        tx = 0;
      if (ty === void 0)
        ty = 0;
      return new Matrix_init(a, b, c, d, tx, ty);
    };
  }));
  Matrix$Companion.prototype.invoke_9wz194$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.Companion.invoke_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Matrix_init = _.com.soywiz.korma.geom.Matrix;
    return function (a, b, c, d, tx, ty) {
      if (b === void 0)
        b = 0.0;
      if (c === void 0)
        c = 0.0;
      if (d === void 0)
        d = 1.0;
      if (tx === void 0)
        tx = 0.0;
      if (ty === void 0)
        ty = 0.0;
      return new Matrix_init(numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d), numberToDouble(tx), numberToDouble(ty));
    };
  }));
  Matrix$Companion.prototype.invoke_19kw1g$ = function (m, out) {
    if (out === void 0)
      out = new Matrix();
    return out.copyFrom_1ktkmn$(m);
  };
  Matrix$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix$Companion_instance = null;
  function Matrix$Companion_getInstance() {
    if (Matrix$Companion_instance === null) {
      new Matrix$Companion();
    }return Matrix$Companion_instance;
  }
  function Matrix$Type(name, ordinal, id, hasRotation, hasScale, hasTranslation) {
    Enum.call(this);
    this.id = id;
    this.hasRotation = hasRotation;
    this.hasScale = hasScale;
    this.hasTranslation = hasTranslation;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Matrix$Type_initFields() {
    Matrix$Type_initFields = function () {
    };
    Matrix$Type$IDENTITY_instance = new Matrix$Type('IDENTITY', 0, 1, false, false, false);
    Matrix$Type$TRANSLATE_instance = new Matrix$Type('TRANSLATE', 1, 2, false, false, true);
    Matrix$Type$SCALE_instance = new Matrix$Type('SCALE', 2, 3, false, true, false);
    Matrix$Type$SCALE_TRANSLATE_instance = new Matrix$Type('SCALE_TRANSLATE', 3, 4, false, true, true);
    Matrix$Type$COMPLEX_instance = new Matrix$Type('COMPLEX', 4, 5, true, true, true);
  }
  var Matrix$Type$IDENTITY_instance;
  function Matrix$Type$IDENTITY_getInstance() {
    Matrix$Type_initFields();
    return Matrix$Type$IDENTITY_instance;
  }
  var Matrix$Type$TRANSLATE_instance;
  function Matrix$Type$TRANSLATE_getInstance() {
    Matrix$Type_initFields();
    return Matrix$Type$TRANSLATE_instance;
  }
  var Matrix$Type$SCALE_instance;
  function Matrix$Type$SCALE_getInstance() {
    Matrix$Type_initFields();
    return Matrix$Type$SCALE_instance;
  }
  var Matrix$Type$SCALE_TRANSLATE_instance;
  function Matrix$Type$SCALE_TRANSLATE_getInstance() {
    Matrix$Type_initFields();
    return Matrix$Type$SCALE_TRANSLATE_instance;
  }
  var Matrix$Type$COMPLEX_instance;
  function Matrix$Type$COMPLEX_getInstance() {
    Matrix$Type_initFields();
    return Matrix$Type$COMPLEX_instance;
  }
  Matrix$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Matrix$Type$values() {
    return [Matrix$Type$IDENTITY_getInstance(), Matrix$Type$TRANSLATE_getInstance(), Matrix$Type$SCALE_getInstance(), Matrix$Type$SCALE_TRANSLATE_getInstance(), Matrix$Type$COMPLEX_getInstance()];
  }
  Matrix$Type.values = Matrix$Type$values;
  function Matrix$Type$valueOf(name) {
    switch (name) {
      case 'IDENTITY':
        return Matrix$Type$IDENTITY_getInstance();
      case 'TRANSLATE':
        return Matrix$Type$TRANSLATE_getInstance();
      case 'SCALE':
        return Matrix$Type$SCALE_getInstance();
      case 'SCALE_TRANSLATE':
        return Matrix$Type$SCALE_TRANSLATE_getInstance();
      case 'COMPLEX':
        return Matrix$Type$COMPLEX_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.Matrix.Type.' + name);
    }
  }
  Matrix$Type.valueOf_61zpoe$ = Matrix$Type$valueOf;
  Matrix.prototype.getType = function () {
    var tmp$;
    var hasRotation = this.b !== 0.0 || this.c !== 0.0;
    var hasScale = this.a !== 1.0 || this.d !== 1.0;
    var hasTranslation = this.tx !== 0.0 || this.ty !== 0.0;
    if (hasRotation)
      tmp$ = Matrix$Type$COMPLEX_getInstance();
    else if (hasScale && hasTranslation)
      tmp$ = Matrix$Type$SCALE_TRANSLATE_getInstance();
    else if (hasScale)
      tmp$ = Matrix$Type$SCALE_getInstance();
    else if (hasTranslation)
      tmp$ = Matrix$Type$TRANSLATE_getInstance();
    else
      tmp$ = Matrix$Type$IDENTITY_getInstance();
    return tmp$;
  };
  Matrix.prototype.setTo_15yvbs$ = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };
  Matrix.prototype.setTo_w8lrqs$ = function (a, b, c, d, tx, ty) {
    return this.setTo_15yvbs$(a, b, c, d, tx, ty);
  };
  Matrix.prototype.setTo_mbbjvw$ = function (a, b, c, d, tx, ty) {
    return this.setTo_15yvbs$(a, b, c, d, tx, ty);
  };
  Matrix.prototype.copyFrom_1ktkmn$ = function (that) {
    this.setTo_15yvbs$(that.a, that.b, that.c, that.d, that.tx, that.ty);
    return this;
  };
  Matrix.prototype.rotate_4crm0z$ = function (angle) {
    var theta = angle.radians;
    var cos = Math_0.cos(theta);
    var sin = Math_0.sin(theta);
    var a1 = this.a * cos - this.b * sin;
    this.b = this.a * sin + this.b * cos;
    this.a = a1;
    var c1 = this.c * cos - this.d * sin;
    this.d = this.c * sin + this.d * cos;
    this.c = c1;
    var tx1 = this.tx * cos - this.ty * sin;
    this.ty = this.tx * sin + this.ty * cos;
    this.tx = tx1;
    return this;
  };
  Matrix.prototype.skew_lu1900$ = function (skewX, skewY) {
    var sinX = Math_0.sin(skewX);
    var cosX = Math_0.cos(skewX);
    var sinY = Math_0.sin(skewY);
    var cosY = Math_0.cos(skewY);
    return this.setTo_15yvbs$(this.a * cosY - this.b * sinX, this.a * sinY + this.b * cosX, this.c * cosY - this.d * sinX, this.c * sinY + this.d * cosX, this.tx * cosY - this.ty * sinX, this.tx * sinY + this.ty * cosX);
  };
  Matrix.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.setTo_15yvbs$(this.a * sx, this.b * sx, this.c * sy, this.d * sy, this.tx * sx, this.ty * sy);
  };
  Matrix.prototype.prescale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.setTo_15yvbs$(this.a * sx, this.b * sx, this.c * sy, this.d * sy, this.tx, this.ty);
  };
  Matrix.prototype.translate_lu1900$ = function (dx, dy) {
    this.tx = this.tx + dx;
    this.ty = this.ty + dy;
    return this;
  };
  Matrix.prototype.pretranslate_lu1900$ = function (dx, dy) {
    this.tx += this.a * dx + this.c * dy;
    this.ty += this.b * dx + this.d * dy;
    return this;
  };
  Matrix.prototype.prerotate_4crm0z$ = function (angle) {
    var m = new Matrix();
    m.rotate_4crm0z$(angle);
    this.premultiply_1ktkmn$(m);
    return this;
  };
  Matrix.prototype.preskew_lu1900$ = function (skewX, skewY) {
    var m = new Matrix();
    m.skew_lu1900$(skewX, skewY);
    this.premultiply_1ktkmn$(m);
    return this;
  };
  Matrix.prototype.premultiply_1ktkmn$ = function (m) {
    return this.premultiply_15yvbs$(m.a, m.b, m.c, m.d, m.tx, m.ty);
  };
  Matrix.prototype.premultiply_15yvbs$ = function (la, lb, lc, ld, ltx, lty) {
    return this.setTo_15yvbs$(la * this.a + lb * this.c, la * this.b + lb * this.d, lc * this.a + ld * this.c, lc * this.b + ld * this.d, ltx * this.a + lty * this.c + this.tx, ltx * this.b + lty * this.d + this.ty);
  };
  Matrix.prototype.multiply_19kw1g$ = function (l, r) {
    return this.setTo_15yvbs$(l.a * r.a + l.b * r.c, l.a * r.b + l.b * r.d, l.c * r.a + l.d * r.c, l.c * r.b + l.d * r.d, l.tx * r.a + l.ty * r.c + r.tx, l.tx * r.b + l.ty * r.d + r.ty);
  };
  Matrix.prototype.deltaTransformPoint_3qfxs9$ = function (point) {
    var x = get_x(point) * this.a + get_y(point) * this.c;
    var y = get_x(point) * this.b + get_y(point) * this.d;
    return new Point(numberToDouble(x), numberToDouble(y));
  };
  Matrix.prototype.identity = function () {
    return this.setTo_15yvbs$(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
  };
  Matrix.prototype.invert_1ktkmn$ = function (matrixToInvert) {
    if (matrixToInvert === void 0)
      matrixToInvert = this;
    var src = matrixToInvert;
    var dst = this;
    var norm = src.a * src.d - src.b * src.c;
    if (norm === 0.0) {
      dst.setTo_15yvbs$(0.0, 0.0, 0.0, 0.0, -src.tx, -src.ty);
    } else {
      var inorm = 1.0 / norm;
      var d = src.a * inorm;
      var a = src.d * inorm;
      var b = src.b * -inorm;
      var c = src.c * -inorm;
      dst.setTo_15yvbs$(a, b, c, d, -a * src.tx - c * src.ty, -b * src.tx - d * src.ty);
    }
    return this;
  };
  Matrix.prototype.inverted_1ktkmn$ = function (out) {
    if (out === void 0)
      out = new Matrix();
    return out.invert_1ktkmn$(this);
  };
  Matrix.prototype.setTransform_5mv93l$ = function (x, y, scaleX, scaleY, rotation, skewX, skewY) {
    if (skewX === 0.0 && skewY === 0.0) {
      if (rotation != null ? rotation.equals(get_radians_0(0)) : null) {
        this.setTo_15yvbs$(scaleX, 0.0, 0.0, scaleY, x, y);
      } else {
        var x_0 = rotation.radians;
        var cos = Math_0.cos(x_0);
        var x_1 = rotation.radians;
        var sin = Math_0.sin(x_1);
        this.setTo_15yvbs$(cos * scaleX, sin * scaleY, -sin * scaleX, cos * scaleY, x, y);
      }
    } else {
      this.identity();
      this.scale_lu1900$(scaleX, scaleY);
      this.skew_lu1900$(skewX, skewY);
      this.rotate_4crm0z$(rotation);
      this.translate_lu1900$(x, y);
    }
    return this;
  };
  Matrix.prototype.clone = function () {
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  Matrix.prototype.setTo_9wz194$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.setTo_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (a, b, c, d, tx, ty) {
      return this.setTo_15yvbs$(numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d), numberToDouble(tx), numberToDouble(ty));
    };
  }));
  Matrix.prototype.scale_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.scale_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (sx, sy) {
      if (sy === void 0)
        sy = sx;
      return this.scale_lu1900$(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Matrix.prototype.prescale_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.prescale_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (sx, sy) {
      if (sy === void 0)
        sy = sx;
      return this.prescale_lu1900$(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Matrix.prototype.translate_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.translate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (dx, dy) {
      return this.translate_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  Matrix.prototype.pretranslate_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.pretranslate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (dx, dy) {
      return this.pretranslate_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  Matrix.prototype.skew_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.skew_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (skewX, skewY) {
      return this.skew_lu1900$(numberToDouble(skewX), numberToDouble(skewY));
    };
  }));
  Matrix.prototype.preskew_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.preskew_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (skewX, skewY) {
      return this.preskew_lu1900$(numberToDouble(skewX), numberToDouble(skewY));
    };
  }));
  Matrix.prototype.premultiply_9wz194$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.premultiply_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (la, lb, lc, ld, ltx, lty) {
      return this.premultiply_15yvbs$(numberToDouble(la), numberToDouble(lb), numberToDouble(lc), numberToDouble(ld), numberToDouble(ltx), numberToDouble(lty));
    };
  }));
  Matrix.prototype.rotateRadians_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.rotateRadians_3p81yu$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.rotate_4crm0z$(Angle.Companion.fromRadians_14dthe$(numberToDouble(angle)));
    };
  }));
  Matrix.prototype.rotateDegrees_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.rotateDegrees_3p81yu$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.rotate_4crm0z$(Angle.Companion.fromDegrees_14dthe$(numberToDouble(angle)));
    };
  }));
  Matrix.prototype.prerotateRadians_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.prerotateRadians_3p81yu$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.prerotate_4crm0z$(Angle.Companion.fromRadians_14dthe$(numberToDouble(angle)));
    };
  }));
  Matrix.prototype.prerotateDegrees_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.prerotateDegrees_3p81yu$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.prerotate_4crm0z$(Angle.Companion.fromDegrees_14dthe$(numberToDouble(angle)));
    };
  }));
  Matrix.prototype.setTransform_wywvsx$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.setTransform_wywvsx$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, scaleX, scaleY, rotation, skewX, skewY) {
      return this.setTransform_5mv93l$(numberToDouble(x), numberToDouble(y), numberToDouble(scaleX), numberToDouble(scaleY), rotation, numberToDouble(skewX), numberToDouble(skewY));
    };
  }));
  Matrix.prototype.times_1ktkmn$ = function (that) {
    return (new Matrix()).multiply_19kw1g$(this, that);
  };
  Matrix.prototype.transformX_lu1900$ = function (px, py) {
    return this.a * px + this.c * py + this.tx;
  };
  Matrix.prototype.transformY_lu1900$ = function (px, py) {
    return this.d * py + this.b * px + this.ty;
  };
  Matrix.prototype.transform_aaz6cc$ = function (px, py, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    return out.setTo_lu1900$(this.transformX_lu1900$(px, py), this.transformY_lu1900$(px, py));
  };
  Matrix.prototype.transform_jhva45$ = function (p, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    return this.transform_aaz6cc$(get_x(p), get_y(p), out);
  };
  Matrix.prototype.transformX_3qfxs9$ = function (p) {
    return this.transformX_lu1900$(get_x(p), get_y(p));
  };
  Matrix.prototype.transformY_3qfxs9$ = function (p) {
    return this.transformY_lu1900$(get_x(p), get_y(p));
  };
  Matrix.prototype.transformXf_lu1900$ = function (px, py) {
    return this.transformX_lu1900$(px, py);
  };
  Matrix.prototype.transformYf_lu1900$ = function (px, py) {
    return this.transformY_lu1900$(px, py);
  };
  Matrix.prototype.transformXf_dleff0$ = function (px, py) {
    return this.transformX_lu1900$(px, py);
  };
  Matrix.prototype.transformYf_dleff0$ = function (px, py) {
    return this.transformY_lu1900$(px, py);
  };
  Matrix.prototype.transform_whtjak$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.transform_whtjak$', wrapFunction(function () {
    var Point = _.com.soywiz.korma.geom.Point;
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py, out) {
      if (out === void 0)
        out = Point.Companion.invoke();
      return this.transform_aaz6cc$(numberToDouble(px), numberToDouble(py), out);
    };
  }));
  Matrix.prototype.transformXf_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.transformXf_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py) {
      return this.transformX_lu1900$(numberToDouble(px), numberToDouble(py));
    };
  }));
  Matrix.prototype.transformYf_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.transformYf_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py) {
      return this.transformY_lu1900$(numberToDouble(px), numberToDouble(py));
    };
  }));
  Matrix.prototype.transformX_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.transformX_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py) {
      return this.transformX_lu1900$(numberToDouble(px), numberToDouble(py));
    };
  }));
  Matrix.prototype.transformY_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.transformY_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py) {
      return this.transformY_lu1900$(numberToDouble(px), numberToDouble(py));
    };
  }));
  function Matrix$Transform(x, y, scaleX, scaleY, skewX, skewY, rotation) {
    Matrix$Transform$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = 1.0;
    if (skewX === void 0)
      skewX = 0.0;
    if (skewY === void 0)
      skewY = 0.0;
    if (rotation === void 0)
      rotation = get_radians_0(0);
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.skewX = skewX;
    this.skewY = skewY;
    this.rotation = rotation;
  }
  function Matrix$Transform$Companion() {
    Matrix$Transform$Companion_instance = this;
  }
  Matrix$Transform$Companion.prototype.invoke_o29yf5$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.Transform.Companion.invoke_o29yf5$', wrapFunction(function () {
    var get_radians = _.com.soywiz.korma.geom.get_radians_s8ev3n$;
    var numberToDouble = Kotlin.numberToDouble;
    var Matrix$Matrix$Transform_init = _.com.soywiz.korma.geom.Matrix.Transform;
    return function (x, y, scaleX, scaleY, skewX, skewY, rotation) {
      if (x === void 0)
        x = 0.0;
      if (y === void 0)
        y = 0.0;
      if (scaleX === void 0)
        scaleX = 1.0;
      if (scaleY === void 0)
        scaleY = 1.0;
      if (skewX === void 0)
        skewX = 0.0;
      if (skewY === void 0)
        skewY = 0.0;
      if (rotation === void 0)
        rotation = get_radians(0);
      return new Matrix$Matrix$Transform_init(numberToDouble(x), numberToDouble(y), numberToDouble(scaleX), numberToDouble(scaleY), numberToDouble(skewX), numberToDouble(skewY), rotation);
    };
  }));
  Matrix$Transform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix$Transform$Companion_instance = null;
  function Matrix$Transform$Companion_getInstance() {
    if (Matrix$Transform$Companion_instance === null) {
      new Matrix$Transform$Companion();
    }return Matrix$Transform$Companion_instance;
  }
  Matrix$Transform.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return (new Matrix$Transform()).setToInterpolated_bs4suk$(ratio, this, other);
  };
  Matrix$Transform.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_5mv93l$(interpolate_1(ratio, l.x, r.x), interpolate_1(ratio, l.y, r.y), interpolate_1(ratio, l.scaleX, r.scaleX), interpolate_1(ratio, l.scaleY, r.scaleY), interpolate(ratio, l.rotation, r.rotation), interpolate_1(ratio, l.skewX, r.skewX), interpolate_1(ratio, l.skewY, r.skewY));
  };
  Matrix$Transform.prototype.identity = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    this.skewX = 0.0;
    this.skewY = 0.0;
    this.rotation = get_radians_0(0);
  };
  Matrix$Transform.prototype.setMatrix_onv4sa$ = function (matrix) {
    var PI_4 = math.PI / 4.0;
    this.x = matrix._tx;
    this.y = matrix._ty;
    var x = -matrix._c / matrix._d;
    this.skewX = Math_0.atan(x);
    var x_0 = matrix._b / matrix._a;
    this.skewY = Math_0.atan(x_0);
    if (this.skewX !== this.skewX)
      this.skewX = 0.0;
    if (this.skewY !== this.skewY)
      this.skewY = 0.0;
    var tmp$;
    if (this.skewX > -PI_4 && this.skewX < PI_4) {
      var tmp$_0 = matrix._d;
      var x_1 = this.skewX;
      tmp$ = tmp$_0 / Math_0.cos(x_1);
    } else {
      var tmp$_1 = -matrix._c;
      var x_2 = this.skewX;
      tmp$ = tmp$_1 / Math_0.sin(x_2);
    }
    this.scaleY = tmp$;
    var tmp$_2;
    if (this.skewY > -PI_4 && this.skewY < PI_4) {
      var tmp$_3 = matrix._a;
      var x_3 = this.skewY;
      tmp$_2 = tmp$_3 / Math_0.cos(x_3);
    } else {
      var tmp$_4 = matrix._b;
      var x_4 = this.skewY;
      tmp$_2 = tmp$_4 / Math_0.sin(x_4);
    }
    this.scaleX = tmp$_2;
    var x_5 = this.skewX - this.skewY;
    if (Math_0.abs(x_5) < 1.0E-4) {
      this.rotation = get_radians(this.skewX);
      this.skewX = 0.0;
      this.skewY = 0.0;
    } else {
      this.rotation = get_radians_0(0);
    }
    return this;
  };
  Matrix$Transform.prototype.setMatrix_1ktkmn$ = function (matrix) {
    var PI_4 = math.PI / 4.0;
    this.x = matrix.tx;
    this.y = matrix.ty;
    var x = -matrix.c / matrix.d;
    this.skewX = Math_0.atan(x);
    var x_0 = matrix.b / matrix.a;
    this.skewY = Math_0.atan(x_0);
    if (this.skewX !== this.skewX)
      this.skewX = 0.0;
    if (this.skewY !== this.skewY)
      this.skewY = 0.0;
    var tmp$;
    if (this.skewX > -PI_4 && this.skewX < PI_4) {
      var tmp$_0 = matrix.d;
      var x_1 = this.skewX;
      tmp$ = tmp$_0 / Math_0.cos(x_1);
    } else {
      var tmp$_1 = -matrix.c;
      var x_2 = this.skewX;
      tmp$ = tmp$_1 / Math_0.sin(x_2);
    }
    this.scaleY = tmp$;
    var tmp$_2;
    if (this.skewY > -PI_4 && this.skewY < PI_4) {
      var tmp$_3 = matrix.a;
      var x_3 = this.skewY;
      tmp$_2 = tmp$_3 / Math_0.cos(x_3);
    } else {
      var tmp$_4 = matrix.b;
      var x_4 = this.skewY;
      tmp$_2 = tmp$_4 / Math_0.sin(x_4);
    }
    this.scaleX = tmp$_2;
    var x_5 = this.skewX - this.skewY;
    if (Math_0.abs(x_5) < 1.0E-4) {
      this.rotation = get_radians(this.skewX);
      this.skewX = 0.0;
      this.skewY = 0.0;
    } else {
      this.rotation = get_radians_0(0);
    }
    return this;
  };
  Matrix$Transform.prototype.toMatrix_1ktkmn$ = function (out) {
    if (out === void 0)
      out = new Matrix();
    return out.setTransform_5mv93l$(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY);
  };
  Matrix$Transform.prototype.copyFrom_y2sis1$ = function (that) {
    return this.setTo_5mv93l$(that.x, that.y, that.scaleX, that.scaleY, that.rotation, that.skewX, that.skewY);
  };
  Matrix$Transform.prototype.setTo_5mv93l$ = function (x, y, scaleX, scaleY, rotation, skewX, skewY) {
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.rotation = rotation;
    this.skewX = skewX;
    this.skewY = skewY;
    return this;
  };
  Matrix$Transform.prototype.setTo_wywvsx$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.Transform.setTo_wywvsx$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, scaleX, scaleY, rotation, skewX, skewY) {
      return this.setTo_5mv93l$(numberToDouble(x), numberToDouble(y), numberToDouble(scaleX), numberToDouble(scaleY), rotation, numberToDouble(skewX), numberToDouble(skewY));
    };
  }));
  Matrix$Transform.prototype.clone = function () {
    return (new Matrix$Transform()).copyFrom_y2sis1$(this);
  };
  Matrix$Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: [Interpolable, MutableInterpolable]
  };
  Matrix$Transform.prototype.component1 = function () {
    return this.x;
  };
  Matrix$Transform.prototype.component2 = function () {
    return this.y;
  };
  Matrix$Transform.prototype.component3 = function () {
    return this.scaleX;
  };
  Matrix$Transform.prototype.component4 = function () {
    return this.scaleY;
  };
  Matrix$Transform.prototype.component5 = function () {
    return this.skewX;
  };
  Matrix$Transform.prototype.component6 = function () {
    return this.skewY;
  };
  Matrix$Transform.prototype.component7 = function () {
    return this.rotation;
  };
  Matrix$Transform.prototype.copy_w6555d$ = function (x, y, scaleX, scaleY, skewX, skewY, rotation) {
    return new Matrix$Transform(x === void 0 ? this.x : x, y === void 0 ? this.y : y, scaleX === void 0 ? this.scaleX : scaleX, scaleY === void 0 ? this.scaleY : scaleY, skewX === void 0 ? this.skewX : skewX, skewY === void 0 ? this.skewY : skewY, rotation === void 0 ? this.rotation : rotation);
  };
  Matrix$Transform.prototype.toString = function () {
    return 'Transform(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', scaleX=' + Kotlin.toString(this.scaleX)) + (', scaleY=' + Kotlin.toString(this.scaleY)) + (', skewX=' + Kotlin.toString(this.skewX)) + (', skewY=' + Kotlin.toString(this.skewY)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  Matrix$Transform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleY) | 0;
    result = result * 31 + Kotlin.hashCode(this.skewX) | 0;
    result = result * 31 + Kotlin.hashCode(this.skewY) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  Matrix$Transform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scaleX, other.scaleX) && Kotlin.equals(this.scaleY, other.scaleY) && Kotlin.equals(this.skewX, other.skewX) && Kotlin.equals(this.skewY, other.skewY) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function Matrix$Computed(matrix, transform) {
    Matrix$Computed$Companion_getInstance();
    this.matrix = matrix;
    this.transform = transform;
  }
  function Matrix$Computed$Companion() {
    Matrix$Computed$Companion_instance = this;
  }
  Matrix$Computed$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix$Computed$Companion_instance = null;
  function Matrix$Computed$Companion_getInstance() {
    if (Matrix$Computed$Companion_instance === null) {
      new Matrix$Computed$Companion();
    }return Matrix$Computed$Companion_instance;
  }
  Matrix$Computed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Computed',
    interfaces: []
  };
  function Matrix$Matrix$Computed_init(matrix, $this) {
    $this = $this || Object.create(Matrix$Computed.prototype);
    Matrix$Computed.call($this, matrix, (new Matrix$Transform()).setMatrix_1ktkmn$(matrix));
    return $this;
  }
  function Matrix$Matrix$Computed_init_0(transform, $this) {
    $this = $this || Object.create(Matrix$Computed.prototype);
    Matrix$Computed.call($this, transform.toMatrix_1ktkmn$(), transform);
    return $this;
  }
  Matrix.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_15yvbs$(interpolate_1(ratio, l.a, r.a), interpolate_1(ratio, l.b, r.b), interpolate_1(ratio, l.c, r.c), interpolate_1(ratio, l.d, r.d), interpolate_1(ratio, l.tx, r.tx), interpolate_1(ratio, l.ty, r.ty));
  };
  Matrix.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return (new Matrix()).setToInterpolated_bs4suk$(ratio, this, other);
  };
  Matrix.prototype.keep_vbqeof$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix.keep_vbqeof$', function (callback) {
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = this.tx;
    var ty = this.ty;
    try {
      return callback(this);
    }finally {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
  });
  Matrix.prototype.toString = function () {
    return 'Matrix(a=' + this.a + ', b=' + this.b + ', c=' + this.c + ', d=' + this.d + ', tx=' + this.tx + ', ty=' + this.ty + ')';
  };
  Matrix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix',
    interfaces: [Interpolable, MutableInterpolable, IMatrix]
  };
  Matrix.prototype.component1 = function () {
    return this.a;
  };
  Matrix.prototype.component2 = function () {
    return this.b;
  };
  Matrix.prototype.component3 = function () {
    return this.c;
  };
  Matrix.prototype.component4 = function () {
    return this.d;
  };
  Matrix.prototype.component5 = function () {
    return this.tx;
  };
  Matrix.prototype.component6 = function () {
    return this.ty;
  };
  Matrix.prototype.copy_15yvbs$ = function (a, b, c, d, tx, ty) {
    return new Matrix(a === void 0 ? this.a : a, b === void 0 ? this.b : b, c === void 0 ? this.c : c, d === void 0 ? this.d : d, tx === void 0 ? this.tx : tx, ty === void 0 ? this.ty : ty);
  };
  Matrix.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.tx) | 0;
    result = result * 31 + Kotlin.hashCode(this.ty) | 0;
    return result;
  };
  Matrix.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.c, other.c) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.tx, other.tx) && Kotlin.equals(this.ty, other.ty)))));
  };
  function times_2($receiver, that) {
    return multiply(new Matrix(), $receiver, that);
  }
  function transformX($receiver, px, py) {
    return $receiver._a * px + $receiver._c * py + $receiver._tx;
  }
  function transformY($receiver, px, py) {
    return $receiver._d * py + $receiver._b * px + $receiver._ty;
  }
  function transform($receiver, px, py, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    return out.setTo_lu1900$(transformX($receiver, px, py), transformY($receiver, px, py));
  }
  var transform_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transform_ew9zwh$', wrapFunction(function () {
    var Point = _.com.soywiz.korma.geom.Point;
    var numberToDouble = Kotlin.numberToDouble;
    var transform = _.com.soywiz.korma.geom.transform_7akd1r$;
    return function ($receiver, px, py, out) {
      if (out === void 0)
        out = Point.Companion.invoke();
      return transform($receiver, numberToDouble(px), numberToDouble(py), out);
    };
  }));
  var transform_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transform_su616o$', wrapFunction(function () {
    var Point = _.com.soywiz.korma.geom.Point;
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    var transform = _.com.soywiz.korma.geom.transform_7akd1r$;
    return function ($receiver, p, out) {
      if (out === void 0)
        out = Point.Companion.invoke();
      return transform($receiver, get_x(p), get_y(p), out);
    };
  }));
  var transformXf = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transformXf_11m42z$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var transformX = _.com.soywiz.korma.geom.transformX_ccqrid$;
    return function ($receiver, px, py) {
      return transformX($receiver, numberToDouble(px), numberToDouble(py));
    };
  }));
  var transformYf = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transformYf_11m42z$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var transformY = _.com.soywiz.korma.geom.transformY_ccqrid$;
    return function ($receiver, px, py) {
      return transformY($receiver, numberToDouble(px), numberToDouble(py));
    };
  }));
  var transformX_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transformX_11m42z$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var transformX = _.com.soywiz.korma.geom.transformX_ccqrid$;
    return function ($receiver, px, py) {
      return transformX($receiver, numberToDouble(px), numberToDouble(py));
    };
  }));
  var transformY_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transformY_11m42z$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var transformY = _.com.soywiz.korma.geom.transformY_ccqrid$;
    return function ($receiver, px, py) {
      return transformY($receiver, numberToDouble(px), numberToDouble(py));
    };
  }));
  var transformX_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transformX_1w4g18$', wrapFunction(function () {
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    var transformX = _.com.soywiz.korma.geom.transformX_ccqrid$;
    return function ($receiver, p) {
      return transformX($receiver, get_x(p), get_y(p));
    };
  }));
  var transformY_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.transformY_1w4g18$', wrapFunction(function () {
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    var transformY = _.com.soywiz.korma.geom.transformY_ccqrid$;
    return function ($receiver, p) {
      return transformY($receiver, get_x(p), get_y(p));
    };
  }));
  function invert($receiver, matrixToInvert) {
    if (matrixToInvert === void 0)
      matrixToInvert = $receiver;
    var src = matrixToInvert;
    var dst = $receiver;
    var norm = src._a * src._d - src._b * src._c;
    if (norm === 0.0) {
      dst.setTo_15yvbs$(0.0, 0.0, 0.0, 0.0, -src._tx, -src._ty);
    } else {
      var inorm = 1.0 / norm;
      var d = src._a * inorm;
      var a = src._d * inorm;
      var b = src._b * -inorm;
      var c = src._c * -inorm;
      dst.setTo_15yvbs$(a, b, c, d, -a * src._tx - c * src._ty, -b * src._tx - d * src._ty);
    }
    return $receiver;
  }
  function multiply($receiver, l, r) {
    return $receiver.setTo_15yvbs$(l._a * r._a + l._b * r._c, l._a * r._b + l._b * r._d, l._c * r._a + l._d * r._c, l._c * r._b + l._d * r._d, l._tx * r._a + l._ty * r._c + r._tx, l._tx * r._b + l._ty * r._d + r._ty);
  }
  function premultiply($receiver, m) {
    return $receiver.premultiply_15yvbs$(m._a, m._b, m._c, m._d, m._tx, m._ty);
  }
  function copyFrom($receiver, that) {
    $receiver.setTo_15yvbs$(that._a, that._b, that._c, that._d, that._tx, that._ty);
    return $receiver;
  }
  function MajorOrder(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MajorOrder_initFields() {
    MajorOrder_initFields = function () {
    };
    MajorOrder$ROW_instance = new MajorOrder('ROW', 0);
    MajorOrder$COLUMN_instance = new MajorOrder('COLUMN', 1);
  }
  var MajorOrder$ROW_instance;
  function MajorOrder$ROW_getInstance() {
    MajorOrder_initFields();
    return MajorOrder$ROW_instance;
  }
  var MajorOrder$COLUMN_instance;
  function MajorOrder$COLUMN_getInstance() {
    MajorOrder_initFields();
    return MajorOrder$COLUMN_instance;
  }
  MajorOrder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MajorOrder',
    interfaces: [Enum]
  };
  function MajorOrder$values() {
    return [MajorOrder$ROW_getInstance(), MajorOrder$COLUMN_getInstance()];
  }
  MajorOrder.values = MajorOrder$values;
  function MajorOrder$valueOf(name) {
    switch (name) {
      case 'ROW':
        return MajorOrder$ROW_getInstance();
      case 'COLUMN':
        return MajorOrder$COLUMN_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.MajorOrder.' + name);
    }
  }
  MajorOrder.valueOf_61zpoe$ = MajorOrder$valueOf;
  function Matrix3D() {
    Matrix3D$Companion_getInstance();
    this.data = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
  }
  function Matrix3D$Companion() {
    Matrix3D$Companion_instance = this;
    this.M00 = 0;
    this.M10 = 1;
    this.M20 = 2;
    this.M30 = 3;
    this.M01 = 4;
    this.M11 = 5;
    this.M21 = 6;
    this.M31 = 7;
    this.M02 = 8;
    this.M12 = 9;
    this.M22 = 10;
    this.M32 = 11;
    this.M03 = 12;
    this.M13 = 13;
    this.M23 = 14;
    this.M33 = 15;
  }
  Matrix3D$Companion.prototype.invoke_p62hku$ = function (m) {
    return (new Matrix3D()).copyFrom_p62hku$(m);
  };
  Matrix3D$Companion.prototype.rowMajorIndex_vux9f0$ = function (row, column) {
    return (row * 4 | 0) + column | 0;
  };
  Matrix3D$Companion.prototype.columnMajorIndex_vux9f0$ = function (row, column) {
    return (column * 4 | 0) + row | 0;
  };
  Matrix3D$Companion.prototype.index_llqg6d$ = function (row, column, order) {
    return order === MajorOrder$ROW_getInstance() ? this.rowMajorIndex_vux9f0$(row, column) : this.columnMajorIndex_vux9f0$(row, column);
  };
  Matrix3D$Companion.prototype.multiply_br0ibq$ = function (left, right, out) {
    if (out === void 0)
      out = new Float32Array(16);
    for (var row = 0; row < 4; row++) {
      for (var column = 0; column < 4; column++) {
        var value = 0.0;
        for (var n = 0; n < 4; n++) {
          value += left[this.columnMajorIndex_vux9f0$(row, n)] * right[this.columnMajorIndex_vux9f0$(n, column)];
        }
        out[this.columnMajorIndex_vux9f0$(row, column)] = value;
      }
    }
    return out;
  };
  Matrix3D$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix3D$Companion_instance = null;
  function Matrix3D$Companion_getInstance() {
    if (Matrix3D$Companion_instance === null) {
      new Matrix3D$Companion();
    }return Matrix3D$Companion_instance;
  }
  Matrix3D.prototype.get_vux9f0$ = function (row, column) {
    return this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row, column)];
  };
  Matrix3D.prototype.set_n0b4r3$ = function (row, column, value) {
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row, column)] = value;
  };
  Matrix3D.prototype.set_224j3y$ = function (row, column, value) {
    this.set_n0b4r3$(row, column, value);
  };
  Matrix3D.prototype.set_qt1dr2$ = function (row, column, value) {
    this.set_n0b4r3$(row, column, value);
  };
  Matrix3D.prototype.set_6vqek6$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_6vqek6$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (row, column, value) {
      this.set_n0b4r3$(row, column, numberToDouble(value));
    };
  }));
  Object.defineProperty(Matrix3D.prototype, 'v00', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v00', function () {
      return this.data[0];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v00_mx4ult$', function (v) {
      this.data[0] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v01', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v01', function () {
      return this.data[4];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v01_mx4ult$', function (v) {
      this.data[4] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v02', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v02', function () {
      return this.data[8];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v02_mx4ult$', function (v) {
      this.data[8] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v03', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v03', function () {
      return this.data[12];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v03_mx4ult$', function (v) {
      this.data[12] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v10', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v10', function () {
      return this.data[1];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v10_mx4ult$', function (v) {
      this.data[1] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v11', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v11', function () {
      return this.data[5];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v11_mx4ult$', function (v) {
      this.data[5] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v12', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v12', function () {
      return this.data[9];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v12_mx4ult$', function (v) {
      this.data[9] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v13', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v13', function () {
      return this.data[13];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v13_mx4ult$', function (v) {
      this.data[13] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v20', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v20', function () {
      return this.data[2];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v20_mx4ult$', function (v) {
      this.data[2] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v21', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v21', function () {
      return this.data[6];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v21_mx4ult$', function (v) {
      this.data[6] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v22', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v22', function () {
      return this.data[10];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v22_mx4ult$', function (v) {
      this.data[10] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v23', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v23', function () {
      return this.data[14];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v23_mx4ult$', function (v) {
      this.data[14] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v30', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v30', function () {
      return this.data[3];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v30_mx4ult$', function (v) {
      this.data[3] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v31', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v31', function () {
      return this.data[7];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v31_mx4ult$', function (v) {
      this.data[7] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v32', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v32', function () {
      return this.data[11];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v32_mx4ult$', function (v) {
      this.data[11] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'v33', {
    get: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.get_v33', function () {
      return this.data[15];
    }),
    set: defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.set_v33_mx4ult$', function (v) {
      this.data[15] = v;
    })
  });
  Object.defineProperty(Matrix3D.prototype, 'transposed', {
    get: function () {
      return this.clone().transpose();
    }
  });
  Matrix3D.prototype.transpose = function () {
    return this.setColumns_8odxlg$(this.data[0], this.data[4], this.data[8], this.data[12], this.data[1], this.data[5], this.data[9], this.data[13], this.data[2], this.data[6], this.data[10], this.data[14], this.data[3], this.data[7], this.data[11], this.data[15]);
  };
  Matrix3D.prototype.setRows_8odxlg$ = function (a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33) {
    this.data[0] = a00;
    this.data[4] = a01;
    this.data[8] = a02;
    this.data[12] = a03;
    this.data[1] = a10;
    this.data[5] = a11;
    this.data[9] = a12;
    this.data[13] = a13;
    this.data[2] = a20;
    this.data[6] = a21;
    this.data[10] = a22;
    this.data[14] = a23;
    this.data[3] = a30;
    this.data[7] = a31;
    this.data[11] = a32;
    this.data[15] = a33;
    return this;
  };
  Matrix3D.prototype.setColumns_8odxlg$ = function (a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33) {
    this.data[0] = a00;
    this.data[4] = a01;
    this.data[8] = a02;
    this.data[12] = a03;
    this.data[1] = a10;
    this.data[5] = a11;
    this.data[9] = a12;
    this.data[13] = a13;
    this.data[2] = a20;
    this.data[6] = a21;
    this.data[10] = a22;
    this.data[14] = a23;
    this.data[3] = a30;
    this.data[7] = a31;
    this.data[11] = a32;
    this.data[15] = a33;
    return this;
  };
  Matrix3D.prototype.setColumns4x4_9752rg$ = function (f, offset) {
    return this.setColumns_8odxlg$(f[offset + 0 | 0], f[offset + 1 | 0], f[offset + 2 | 0], f[offset + 3 | 0], f[offset + 4 | 0], f[offset + 5 | 0], f[offset + 6 | 0], f[offset + 7 | 0], f[offset + 8 | 0], f[offset + 9 | 0], f[offset + 10 | 0], f[offset + 11 | 0], f[offset + 12 | 0], f[offset + 13 | 0], f[offset + 14 | 0], f[offset + 15 | 0]);
  };
  Matrix3D.prototype.setRows4x4_9752rg$ = function (f, offset) {
    return this.setRows_8odxlg$(f[offset + 0 | 0], f[offset + 1 | 0], f[offset + 2 | 0], f[offset + 3 | 0], f[offset + 4 | 0], f[offset + 5 | 0], f[offset + 6 | 0], f[offset + 7 | 0], f[offset + 8 | 0], f[offset + 9 | 0], f[offset + 10 | 0], f[offset + 11 | 0], f[offset + 12 | 0], f[offset + 13 | 0], f[offset + 14 | 0], f[offset + 15 | 0]);
  };
  Matrix3D.prototype.setColumns3x3_9752rg$ = function (f, offset) {
    return this.setColumns_8odxlg$(f[offset + 0 | 0], f[offset + 1 | 0], f[offset + 2 | 0], 0.0, f[offset + 3 | 0], f[offset + 4 | 0], f[offset + 5 | 0], 0.0, f[offset + 6 | 0], f[offset + 7 | 0], f[offset + 8 | 0], 0.0, 0.0, 0.0, 0.0, 1.0);
  };
  Matrix3D.prototype.setRows3x3_9752rg$ = function (f, offset) {
    return this.setRows_8odxlg$(f[offset + 0 | 0], f[offset + 1 | 0], f[offset + 2 | 0], 0.0, f[offset + 3 | 0], f[offset + 4 | 0], f[offset + 5 | 0], 0.0, f[offset + 6 | 0], f[offset + 7 | 0], f[offset + 8 | 0], 0.0, 0.0, 0.0, 0.0, 1.0);
  };
  Matrix3D.prototype.setColumns2x2_9752rg$ = function (f, offset) {
    return this.setColumns_8odxlg$(f[offset + 0 | 0], f[offset + 1 | 0], 0.0, 0.0, f[offset + 1 | 0], f[offset + 2 | 0], 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  };
  Matrix3D.prototype.setRows2x2_9752rg$ = function (f, offset) {
    return this.setRows_8odxlg$(f[offset + 0 | 0], f[offset + 1 | 0], 0.0, 0.0, f[offset + 1 | 0], f[offset + 2 | 0], 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  };
  Matrix3D.prototype.setRow_xpxj32$ = function (row, a, b, c, d) {
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row, 0)] = a;
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row, 1)] = b;
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row, 2)] = c;
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row, 3)] = d;
    return this;
  };
  Matrix3D.prototype.setColumn_xpxj32$ = function (column, a, b, c, d) {
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(0, column)] = a;
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(1, column)] = b;
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(2, column)] = c;
    this.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(3, column)] = d;
    return this;
  };
  Matrix3D.prototype.getRow_i8oon4$ = function (n, target) {
    if (target === void 0)
      target = new Float32Array(4);
    var m = n * 4 | 0;
    target[0] = this.data[m + 0 | 0];
    target[1] = this.data[m + 1 | 0];
    target[2] = this.data[m + 2 | 0];
    target[3] = this.data[m + 3 | 0];
    return target;
  };
  Matrix3D.prototype.getColumn_i8oon4$ = function (n, target) {
    if (target === void 0)
      target = new Float32Array(4);
    target[0] = this.data[n + 0 | 0];
    target[1] = this.data[n + 4 | 0];
    target[2] = this.data[n + 8 | 0];
    target[3] = this.data[n + 12 | 0];
    return target;
  };
  Object.defineProperty(Matrix3D.prototype, 'determinant', {
    get: function () {
      return 0.0 + this.data[3] * this.data[6] * this.data[9] * this.data[12] - this.data[2] * this.data[7] * this.data[9] * this.data[12] - this.data[3] * this.data[5] * this.data[10] * this.data[12] + this.data[1] * this.data[7] * this.data[10] * this.data[12] + this.data[2] * this.data[5] * this.data[11] * this.data[12] - this.data[1] * this.data[6] * this.data[11] * this.data[12] - this.data[3] * this.data[6] * this.data[8] * this.data[13] + this.data[2] * this.data[7] * this.data[8] * this.data[13] + this.data[3] * this.data[4] * this.data[10] * this.data[13] - this.data[0] * this.data[7] * this.data[10] * this.data[13] - this.data[2] * this.data[4] * this.data[11] * this.data[13] + this.data[0] * this.data[6] * this.data[11] * this.data[13] + this.data[3] * this.data[5] * this.data[8] * this.data[14] - this.data[1] * this.data[7] * this.data[8] * this.data[14] - this.data[3] * this.data[4] * this.data[9] * this.data[14] + this.data[0] * this.data[7] * this.data[9] * this.data[14] + this.data[1] * this.data[4] * this.data[11] * this.data[14] - this.data[0] * this.data[5] * this.data[11] * this.data[14] - this.data[2] * this.data[5] * this.data[8] * this.data[15] + this.data[1] * this.data[6] * this.data[8] * this.data[15] + this.data[2] * this.data[4] * this.data[9] * this.data[15] - this.data[0] * this.data[6] * this.data[9] * this.data[15] - this.data[1] * this.data[4] * this.data[10] * this.data[15] + this.data[0] * this.data[5] * this.data[10] * this.data[15];
    }
  });
  Object.defineProperty(Matrix3D.prototype, 'determinant3x3', {
    get: function () {
      return 0.0 + this.data[0] * this.data[5] * this.data[10] + this.data[4] * this.data[9] * this.data[2] + this.data[8] * this.data[1] * this.data[6] - this.data[0] * this.data[9] * this.data[6] - this.data[4] * this.data[1] * this.data[10] - this.data[8] * this.data[5] * this.data[2];
    }
  });
  Matrix3D.prototype.setRow_i8oon4$ = function (row, data) {
    return this.setRow_xpxj32$(row, data[0], data[1], data[2], data[3]);
  };
  Matrix3D.prototype.setColumn_i8oon4$ = function (column, data) {
    return this.setColumn_xpxj32$(column, data[0], data[1], data[2], data[3]);
  };
  Matrix3D.prototype.setRow_2ws8i$ = function (row, data) {
    return this.setRow_xpxj32$(row, data.x, data.y, data.w, data.z);
  };
  Matrix3D.prototype.setColumn_2ws8i$ = function (column, data) {
    return this.setColumn_xpxj32$(column, data.x, data.y, data.w, data.z);
  };
  Matrix3D.prototype.setRow_gjg7rq$ = function (row, a, b, c, d) {
    return this.setRow_xpxj32$(row, a, b, c, d);
  };
  Matrix3D.prototype.setRow_4qozqa$ = function (row, a, b, c, d) {
    return this.setRow_xpxj32$(row, a, b, c, d);
  };
  Matrix3D.prototype.setColumn_gjg7rq$ = function (column, a, b, c, d) {
    return this.setColumn_xpxj32$(column, a, b, c, d);
  };
  Matrix3D.prototype.setColumn_4qozqa$ = function (column, a, b, c, d) {
    return this.setColumn_xpxj32$(column, a, b, c, d);
  };
  Matrix3D.prototype.setRow_pbxp4m$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setRow_pbxp4m$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (row, a, b, c, d) {
      return this.setRow_xpxj32$(row, numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d));
    };
  }));
  Matrix3D.prototype.setColumn_pbxp4m$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setColumn_pbxp4m$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (column, a, b, c, d) {
      return this.setColumn_xpxj32$(column, numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d));
    };
  }));
  Matrix3D.prototype.identity = function () {
    return this.setColumns_8odxlg$(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  };
  Matrix3D.prototype.setToTranslation_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToTranslation_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z, w) {
      if (w === void 0)
        w = 1.0;
      return this.setToTranslation_7b5o5w$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  Matrix3D.prototype.setToTranslation_6y0v78$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.setToTranslation_7b5o5w$(x, y, z, w);
  };
  Matrix3D.prototype.setToTranslation_tjonv8$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1;
    return this.setToTranslation_7b5o5w$(x, y, z, w);
  };
  Matrix3D.prototype.setToTranslation_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.setRows_8odxlg$(numberToDouble(1), numberToDouble(0), numberToDouble(0), numberToDouble(x), numberToDouble(0), numberToDouble(1), numberToDouble(0), numberToDouble(y), numberToDouble(0), numberToDouble(0), numberToDouble(1), numberToDouble(z), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(w));
  };
  Matrix3D.prototype.setToScale_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToScale_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z, w) {
      if (w === void 0)
        w = 1.0;
      return this.setToScale_7b5o5w$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  Matrix3D.prototype.setToScale_6y0v78$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.setToScale_7b5o5w$(x, y, z, w);
  };
  Matrix3D.prototype.setToScale_tjonv8$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1;
    return this.setToScale_7b5o5w$(x, y, z, w);
  };
  Matrix3D.prototype.setToScale_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.setRows_8odxlg$(numberToDouble(x), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(y), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(z), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(w));
  };
  Matrix3D.prototype.setToShear_a2j3zq$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToShear_a2j3zq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z) {
      return this.setToShear_y2kzbl$(numberToDouble(x), numberToDouble(y), numberToDouble(z));
    };
  }));
  Matrix3D.prototype.setToShear_yvo9jy$ = function (x, y, z) {
    return this.setToShear_y2kzbl$(x, y, z);
  };
  Matrix3D.prototype.setToShear_qt1dr2$ = function (x, y, z) {
    return this.setToShear_y2kzbl$(x, y, z);
  };
  Matrix3D.prototype.setToShear_y2kzbl$ = function (x, y, z) {
    return this.setRows_8odxlg$(numberToDouble(1), numberToDouble(y), numberToDouble(z), numberToDouble(0), numberToDouble(x), numberToDouble(1), numberToDouble(z), numberToDouble(0), numberToDouble(x), numberToDouble(y), numberToDouble(1), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  };
  Matrix3D.prototype.setToRotationX_4crm0z$ = function (angle) {
    var x = angle.radians;
    var c = Math_0.cos(x);
    var x_0 = angle.radians;
    var s = Math_0.sin(x_0);
    var a12 = -s;
    return this.setRows_8odxlg$(numberToDouble(1), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(c), numberToDouble(a12), numberToDouble(0), numberToDouble(0), numberToDouble(s), numberToDouble(c), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  };
  Matrix3D.prototype.setToRotationY_4crm0z$ = function (angle) {
    var x = angle.radians;
    var c = Math_0.cos(x);
    var x_0 = angle.radians;
    var s = Math_0.sin(x_0);
    var a20 = -s;
    return this.setRows_8odxlg$(numberToDouble(c), numberToDouble(0), numberToDouble(s), numberToDouble(0), numberToDouble(0), numberToDouble(1), numberToDouble(0), numberToDouble(0), numberToDouble(a20), numberToDouble(0), numberToDouble(c), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  };
  Matrix3D.prototype.setToRotationZ_4crm0z$ = function (angle) {
    var x = angle.radians;
    var c = Math_0.cos(x);
    var x_0 = angle.radians;
    var s = Math_0.sin(x_0);
    var a01 = -s;
    return this.setRows_8odxlg$(numberToDouble(c), numberToDouble(a01), numberToDouble(0), numberToDouble(0), numberToDouble(s), numberToDouble(c), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  };
  Matrix3D.prototype.setToRotation_tl69sd$ = function (angle, direction) {
    return this.setToRotation_s8wrlk$(angle, direction.x, direction.y, direction.z);
  };
  Matrix3D.prototype.setToRotation_7wb8pt$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToRotation_7wb8pt$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle, x, y, z) {
      return this.setToRotation_s8wrlk$(angle, numberToDouble(x), numberToDouble(y), numberToDouble(z));
    };
  }));
  Matrix3D.prototype.setToRotation_gwtwuf$ = function (angle, x, y, z) {
    return this.setToRotation_s8wrlk$(angle, x, y, z);
  };
  Matrix3D.prototype.setToRotation_109mz9$ = function (angle, x, y, z) {
    return this.setToRotation_s8wrlk$(angle, x, y, z);
  };
  Matrix3D.prototype.setToRotation_s8wrlk$ = function (angle, x, y, z) {
    var x_0 = x * x + y * y + z * z;
    var mag = Math_0.sqrt(x_0);
    var norm = 1.0 / mag;
    var nx = x * norm;
    var ny = y * norm;
    var nz = z * norm;
    var x_1 = angle.radians;
    var c = Math_0.cos(x_1);
    var x_2 = angle.radians;
    var s = Math_0.sin(x_2);
    var t = 1 - c;
    var tx = t * nx;
    var ty = t * ny;
    var a00 = tx * nx + c;
    var a01 = tx * ny - s * nz;
    var a02 = tx * nz + s * ny;
    var a10 = tx * ny + s * nz;
    var a11 = ty * ny + c;
    var a12 = ty * nz - s * nx;
    var a20 = tx * nz - s * ny;
    var a21 = ty * nz + s * nx;
    var a22 = t * nz * nz + c;
    return this.setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(a02), numberToDouble(0), numberToDouble(a10), numberToDouble(a11), numberToDouble(a12), numberToDouble(0), numberToDouble(a20), numberToDouble(a21), numberToDouble(a22), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  };
  Matrix3D.prototype.multiply_lb2hp0$ = function (l, r) {
    return this.setRows_8odxlg$(l.data[0] * r.data[0] + l.data[4] * r.data[1] + l.data[8] * r.data[2] + l.data[12] * r.data[3], l.data[0] * r.data[4] + l.data[4] * r.data[5] + l.data[8] * r.data[6] + l.data[12] * r.data[7], l.data[0] * r.data[8] + l.data[4] * r.data[9] + l.data[8] * r.data[10] + l.data[12] * r.data[11], l.data[0] * r.data[12] + l.data[4] * r.data[13] + l.data[8] * r.data[14] + l.data[12] * r.data[15], l.data[1] * r.data[0] + l.data[5] * r.data[1] + l.data[9] * r.data[2] + l.data[13] * r.data[3], l.data[1] * r.data[4] + l.data[5] * r.data[5] + l.data[9] * r.data[6] + l.data[13] * r.data[7], l.data[1] * r.data[8] + l.data[5] * r.data[9] + l.data[9] * r.data[10] + l.data[13] * r.data[11], l.data[1] * r.data[12] + l.data[5] * r.data[13] + l.data[9] * r.data[14] + l.data[13] * r.data[15], l.data[2] * r.data[0] + l.data[6] * r.data[1] + l.data[10] * r.data[2] + l.data[14] * r.data[3], l.data[2] * r.data[4] + l.data[6] * r.data[5] + l.data[10] * r.data[6] + l.data[14] * r.data[7], l.data[2] * r.data[8] + l.data[6] * r.data[9] + l.data[10] * r.data[10] + l.data[14] * r.data[11], l.data[2] * r.data[12] + l.data[6] * r.data[13] + l.data[10] * r.data[14] + l.data[14] * r.data[15], l.data[3] * r.data[0] + l.data[7] * r.data[1] + l.data[11] * r.data[2] + l.data[15] * r.data[3], l.data[3] * r.data[4] + l.data[7] * r.data[5] + l.data[11] * r.data[6] + l.data[15] * r.data[7], l.data[3] * r.data[8] + l.data[7] * r.data[9] + l.data[11] * r.data[10] + l.data[15] * r.data[11], l.data[3] * r.data[12] + l.data[7] * r.data[13] + l.data[11] * r.data[14] + l.data[15] * r.data[15]);
  };
  Matrix3D.prototype.multiply_s1w6dd$ = function (scale, l) {
    if (l === void 0)
      l = this;
    for (var n = 0; n < 16; n++)
      this.data[n] = l.data[n] * scale;
    return this;
  };
  Matrix3D.prototype.copyFrom_p62hku$ = function (that) {
    for (var n = 0; n < 16; n++)
      this.data[n] = that.data[n];
    return this;
  };
  Matrix3D.prototype.transform0_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.data[0] * x + this.data[4] * y + this.data[8] * z + this.data[12] * w;
  };
  Matrix3D.prototype.transform1_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.data[1] * x + this.data[5] * y + this.data[9] * z + this.data[13] * w;
  };
  Matrix3D.prototype.transform2_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.data[2] * x + this.data[6] * y + this.data[10] * z + this.data[14] * w;
  };
  Matrix3D.prototype.transform3_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return this.data[3] * x + this.data[7] * y + this.data[11] * z + this.data[15] * w;
  };
  Matrix3D.prototype.transform_b7upj8$ = function (x, y, z, w, out) {
    if (w === void 0)
      w = 1.0;
    if (out === void 0)
      out = Vector3D$Companion_getInstance().invoke_tjonv8$(0, 0, 0, 0);
    return out.setTo_7b5o5w$(this.transform0_7b5o5w$(x, y, z, w), this.transform1_7b5o5w$(x, y, z, w), this.transform2_7b5o5w$(x, y, z, w), this.transform3_7b5o5w$(x, y, z, w));
  };
  Matrix3D.prototype.transform_glqd9o$ = function (v, out) {
    if (out === void 0)
      out = new Vector3D();
    return this.transform_b7upj8$(v.x, v.y, v.z, v.w, out);
  };
  Matrix3D.prototype.setToOrtho_7qujcj$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToOrtho_7qujcj$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (rect, near, far) {
      if (near === void 0)
        near = 0.0;
      if (far === void 0)
        far = 1.0;
      return this.setToOrtho_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, numberToDouble(near), numberToDouble(far));
    };
  }));
  Matrix3D.prototype.setToOrtho_5nic8t$ = function (rect, near, far) {
    if (near === void 0)
      near = 0.0;
    if (far === void 0)
      far = 1.0;
    return this.setToOrtho_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, near, far);
  };
  Matrix3D.prototype.setToOrtho_glgttr$ = function (rect, near, far) {
    if (near === void 0)
      near = 0.0;
    if (far === void 0)
      far = 1.0;
    return this.setToOrtho_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, near, far);
  };
  Matrix3D.prototype.setToOrtho_vk37xb$ = function (rect, near, far) {
    if (near === void 0)
      near = 0;
    if (far === void 0)
      far = 1;
    return this.setToOrtho_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, near, far);
  };
  Matrix3D.prototype.setToOrtho_9wz194$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToOrtho_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (left, right, bottom, top, near, far) {
      return this.setToOrtho_w8lrqs$(numberToDouble(left), numberToDouble(right), numberToDouble(bottom), numberToDouble(top), numberToDouble(near), numberToDouble(far));
    };
  }));
  Matrix3D.prototype.setToOrtho_15yvbs$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToOrtho_15yvbs$', function (left, right, bottom, top, near, far) {
    return this.setToOrtho_w8lrqs$(left, right, bottom, top, near, far);
  });
  Matrix3D.prototype.setToOrtho_mbbjvw$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToOrtho_mbbjvw$', function (left, right, bottom, top, near, far) {
    return this.setToOrtho_w8lrqs$(left, right, bottom, top, near, far);
  });
  Matrix3D.prototype.setToOrtho_w8lrqs$ = function (left, right, bottom, top, near, far) {
    if (near === void 0)
      near = 0.0;
    if (far === void 0)
      far = 1.0;
    var sx = 2 / (right - left);
    var sy = 2 / (top - bottom);
    var sz = -2 / (far - near);
    var tx = -(right + left) / (right - left);
    var ty = -(top + bottom) / (top - bottom);
    var tz = -(far + near) / (far - near);
    return this.setRows_8odxlg$(numberToDouble(sx), numberToDouble(0), numberToDouble(0), numberToDouble(tx), numberToDouble(0), numberToDouble(sy), numberToDouble(0), numberToDouble(ty), numberToDouble(0), numberToDouble(0), numberToDouble(sz), numberToDouble(tz), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  };
  Matrix3D.prototype.setToFrustum_7qujcj$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToFrustum_7qujcj$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (rect, zNear, zFar) {
      if (zNear === void 0)
        zNear = 0.0;
      if (zFar === void 0)
        zFar = 1.0;
      return this.setToFrustum_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, numberToDouble(zNear), numberToDouble(zFar));
    };
  }));
  Matrix3D.prototype.setToFrustum_5nic8t$ = function (rect, zNear, zFar) {
    if (zNear === void 0)
      zNear = 0.0;
    if (zFar === void 0)
      zFar = 1.0;
    return this.setToFrustum_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, zNear, zFar);
  };
  Matrix3D.prototype.setToFrustum_glgttr$ = function (rect, zNear, zFar) {
    if (zNear === void 0)
      zNear = 0.0;
    if (zFar === void 0)
      zFar = 1.0;
    return this.setToFrustum_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, zNear, zFar);
  };
  Matrix3D.prototype.setToFrustum_vk37xb$ = function (rect, zNear, zFar) {
    if (zNear === void 0)
      zNear = 0;
    if (zFar === void 0)
      zFar = 1;
    return this.setToFrustum_w8lrqs$(rect.left, rect.right, rect.bottom, rect.top, zNear, zFar);
  };
  Matrix3D.prototype.setToFrustum_9wz194$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToFrustum_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (left, right, bottom, top, zNear, zFar) {
      if (zNear === void 0)
        zNear = 0.0;
      if (zFar === void 0)
        zFar = 1.0;
      return this.setToFrustum_w8lrqs$(numberToDouble(left), numberToDouble(right), numberToDouble(bottom), numberToDouble(top), numberToDouble(zNear), numberToDouble(zFar));
    };
  }));
  Matrix3D.prototype.setToFrustum_15yvbs$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToFrustum_15yvbs$', function (left, right, bottom, top, zNear, zFar) {
    if (zNear === void 0)
      zNear = 0.0;
    if (zFar === void 0)
      zFar = 1.0;
    return this.setToFrustum_w8lrqs$(left, right, bottom, top, zNear, zFar);
  });
  Matrix3D.prototype.setToFrustum_mbbjvw$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToFrustum_mbbjvw$', function (left, right, bottom, top, zNear, zFar) {
    if (zNear === void 0)
      zNear = 0;
    if (zFar === void 0)
      zFar = 1;
    return this.setToFrustum_w8lrqs$(left, right, bottom, top, zNear, zFar);
  });
  Matrix3D.prototype.setToFrustum_w8lrqs$ = function (left, right, bottom, top, zNear, zFar) {
    if (zNear === void 0)
      zNear = 0.0;
    if (zFar === void 0)
      zFar = 1.0;
    if (zNear <= 0.0 || zFar <= zNear) {
      throw Exception_init('Error: Required zNear > 0 and zFar > zNear, but zNear ' + zNear + ', zFar ' + zFar);
    }if (left === right || top === bottom) {
      throw Exception_init('Error: top,bottom and left,right must not be equal');
    }var zNear2 = 2.0 * zNear;
    var dx = right - left;
    var dy = top - bottom;
    var dz = zFar - zNear;
    var A = (right + left) / dx;
    var B = (top + bottom) / dy;
    var C = -1.0 * (zFar + zNear) / dz;
    var D = -2.0 * (zFar * zNear) / dz;
    var a00 = zNear2 / dx;
    var a11 = zNear2 / dy;
    return this.setRows_8odxlg$(numberToDouble(a00), numberToDouble(0), numberToDouble(A), numberToDouble(0), numberToDouble(0), numberToDouble(a11), numberToDouble(B), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(C), numberToDouble(D), numberToDouble(0), numberToDouble(0), numberToDouble(-1), numberToDouble(0));
  };
  Matrix3D.prototype.setToPerspective_7wb8pt$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Matrix3D.setToPerspective_7wb8pt$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (fovy, aspect, zNear, zFar) {
      return this.setToPerspective_s8wrlk$(fovy, numberToDouble(aspect), numberToDouble(zNear), numberToDouble(zFar));
    };
  }));
  Matrix3D.prototype.setToPerspective_gwtwuf$ = function (fovy, aspect, zNear, zFar) {
    return this.setToPerspective_s8wrlk$(fovy, aspect, zNear, zFar);
  };
  Matrix3D.prototype.setToPerspective_s8wrlk$ = function (fovy, aspect, zNear, zFar) {
    var x = fovy.radians / 2.0;
    var top = Math_0.tan(x) * zNear;
    var bottom = -1.0 * top;
    var left = aspect * bottom;
    var right = aspect * top;
    return this.setToFrustum_w8lrqs$(left, right, bottom, top, zNear, zFar);
  };
  Matrix3D.prototype.equals = function (other) {
    return Kotlin.isType(other, Matrix3D) && contentEquals(this.data, other.data);
  };
  Matrix3D.prototype.hashCode = function () {
    return contentHashCode(this.data);
  };
  Matrix3D.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_61zpoe$('Matrix3D(\n');
    for (var row = 0; row < 4; row++) {
      $receiver.append_61zpoe$('  [ ');
      for (var col = 0; col < 4; col++) {
        if (col !== 0)
          $receiver.append_61zpoe$(', ');
        var v = this.get_vux9f0$(row, col);
        if (Math_0.floor(v) === v)
          $receiver.append_s8jyv4$(numberToInt(v));
        else
          $receiver.append_s8jyv4$(v);
      }
      $receiver.append_61zpoe$(' ],\n');
    }
    $receiver.append_61zpoe$(')');
    return $receiver.toString();
  };
  Matrix3D.prototype.clone = function () {
    return (new Matrix3D()).copyFrom_p62hku$(this);
  };
  Matrix3D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix3D',
    interfaces: []
  };
  function copyToFloatWxH($receiver, out, rows, columns, order) {
    copyToFloatWxH_0($receiver, out, rows, columns, order, 0);
  }
  function copyToFloatWxH_0($receiver, out, rows, columns, order, offset) {
    var tmp$, tmp$_0;
    var n = offset;
    if (order === MajorOrder$ROW_getInstance()) {
      for (var column = 0; column < columns; column++) {
        for (var row = 0; row < rows; row++) {
          out[tmp$ = n, n = tmp$ + 1 | 0, tmp$] = $receiver.data[Matrix3D$Companion_getInstance().rowMajorIndex_vux9f0$(row, column)];
        }
      }
    } else {
      for (var column_0 = 0; column_0 < columns; column_0++) {
        for (var row_0 = 0; row_0 < rows; row_0++) {
          out[tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0] = $receiver.data[Matrix3D$Companion_getInstance().columnMajorIndex_vux9f0$(row_0, column_0)];
        }
      }
    }
  }
  function copyToFloat2x2($receiver, out, order) {
    copyToFloatWxH_0($receiver, out, 2, 2, order, 0);
  }
  function copyToFloat3x3($receiver, out, order) {
    copyToFloatWxH_0($receiver, out, 3, 3, order, 0);
  }
  function copyToFloat4x4($receiver, out, order) {
    copyToFloatWxH_0($receiver, out, 4, 4, order, 0);
  }
  function copyToFloat2x2_0($receiver, out, order, offset) {
    copyToFloatWxH_0($receiver, out, 2, 2, order, offset);
  }
  function copyToFloat3x3_0($receiver, out, order, offset) {
    copyToFloatWxH_0($receiver, out, 3, 3, order, offset);
  }
  function copyToFloat4x4_0($receiver, out, order, offset) {
    copyToFloatWxH_0($receiver, out, 4, 4, order, offset);
  }
  var setRows = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setRows_6zrupt$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33) {
      return $receiver.setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(a02), numberToDouble(a03), numberToDouble(a10), numberToDouble(a11), numberToDouble(a12), numberToDouble(a13), numberToDouble(a20), numberToDouble(a21), numberToDouble(a22), numberToDouble(a23), numberToDouble(a30), numberToDouble(a31), numberToDouble(a32), numberToDouble(a33));
    };
  }));
  function setRows_0($receiver, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33) {
    return $receiver.setRows_8odxlg$(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33);
  }
  var setColumns = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setColumns_6zrupt$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33) {
      return $receiver.setColumns_8odxlg$(numberToDouble(a00), numberToDouble(a10), numberToDouble(a20), numberToDouble(a30), numberToDouble(a01), numberToDouble(a11), numberToDouble(a21), numberToDouble(a31), numberToDouble(a02), numberToDouble(a12), numberToDouble(a22), numberToDouble(a32), numberToDouble(a03), numberToDouble(a13), numberToDouble(a23), numberToDouble(a33));
    };
  }));
  function setColumns_0($receiver, a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33) {
    return $receiver.setColumns_8odxlg$(a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33);
  }
  var setRows3x3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setRows3x3_2rvse1$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a01, a02, a10, a11, a12, a20, a21, a22) {
      return $receiver.setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(a02), 0.0, numberToDouble(a10), numberToDouble(a11), numberToDouble(a12), 0.0, numberToDouble(a20), numberToDouble(a21), numberToDouble(a22), 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function setRows3x3_0($receiver, a00, a01, a02, a10, a11, a12, a20, a21, a22) {
    return $receiver.setRows_8odxlg$(a00, a01, a02, 0.0, a10, a11, a12, 0.0, a20, a21, a22, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var setColumns3x3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setColumns3x3_2rvse1$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a10, a20, a01, a11, a21, a02, a12, a22) {
      return $receiver.setColumns_8odxlg$(numberToDouble(a00), numberToDouble(a10), numberToDouble(a20), 0.0, numberToDouble(a01), numberToDouble(a11), numberToDouble(a21), 0.0, numberToDouble(a02), numberToDouble(a12), numberToDouble(a22), 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function setColumns3x3_0($receiver, a00, a10, a20, a01, a11, a21, a02, a12, a22) {
    return $receiver.setColumns_8odxlg$(a00, a10, a20, 0.0, a01, a11, a21, 0.0, a02, a12, a22, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var setRows2x2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setRows2x2_kqdnpj$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a01, a10, a11) {
      return $receiver.setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), 0.0, 0.0, numberToDouble(a10), numberToDouble(a11), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function setRows2x2_0($receiver, a00, a01, a10, a11) {
    return $receiver.setRows_8odxlg$(a00, a01, 0.0, 0.0, a10, a11, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var fromRows = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.fromRows_e9mslf$', wrapFunction(function () {
    var Matrix3D_init = _.com.soywiz.korma.geom.Matrix3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33) {
      return (new Matrix3D_init()).setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(a02), numberToDouble(a03), numberToDouble(a10), numberToDouble(a11), numberToDouble(a12), numberToDouble(a13), numberToDouble(a20), numberToDouble(a21), numberToDouble(a22), numberToDouble(a23), numberToDouble(a30), numberToDouble(a31), numberToDouble(a32), numberToDouble(a33));
    };
  }));
  function fromRows_0($receiver, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33) {
    return (new Matrix3D()).setRows_8odxlg$(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33);
  }
  var fromColumns = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.fromColumns_e9mslf$', wrapFunction(function () {
    var Matrix3D_init = _.com.soywiz.korma.geom.Matrix3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33) {
      return (new Matrix3D_init()).setColumns_8odxlg$(numberToDouble(a00), numberToDouble(a10), numberToDouble(a20), numberToDouble(a30), numberToDouble(a01), numberToDouble(a11), numberToDouble(a21), numberToDouble(a31), numberToDouble(a02), numberToDouble(a12), numberToDouble(a22), numberToDouble(a32), numberToDouble(a03), numberToDouble(a13), numberToDouble(a23), numberToDouble(a33));
    };
  }));
  function fromColumns_0($receiver, a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33) {
    return (new Matrix3D()).setColumns_8odxlg$(a00, a10, a20, a30, a01, a11, a21, a31, a02, a12, a22, a32, a03, a13, a23, a33);
  }
  var setColumns2x2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setColumns2x2_kqdnpj$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a10, a01, a11) {
      return $receiver.setColumns_8odxlg$(numberToDouble(a00), numberToDouble(a10), 0.0, 0.0, numberToDouble(a01), numberToDouble(a11), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function setColumns2x2_0($receiver, a00, a10, a01, a11) {
    return $receiver.setColumns_8odxlg$(a00, a10, 0.0, 0.0, a01, a11, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var fromRows3x3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.fromRows3x3_bxle5z$', wrapFunction(function () {
    var Matrix3D_init = _.com.soywiz.korma.geom.Matrix3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a01, a02, a10, a11, a12, a20, a21, a22) {
      var $receiver_0 = new Matrix3D_init();
      var a00_0 = numberToDouble(a00);
      var a01_0 = numberToDouble(a01);
      var a02_0 = numberToDouble(a02);
      var a10_0 = numberToDouble(a10);
      var a11_0 = numberToDouble(a11);
      var a12_0 = numberToDouble(a12);
      var a20_0 = numberToDouble(a20);
      var a21_0 = numberToDouble(a21);
      var a22_0 = numberToDouble(a22);
      return $receiver_0.setRows_8odxlg$(numberToDouble(a00_0), numberToDouble(a01_0), numberToDouble(a02_0), 0.0, numberToDouble(a10_0), numberToDouble(a11_0), numberToDouble(a12_0), 0.0, numberToDouble(a20_0), numberToDouble(a21_0), numberToDouble(a22_0), 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function fromRows3x3_0($receiver, a00, a01, a02, a10, a11, a12, a20, a21, a22) {
    return (new Matrix3D()).setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(a02), 0.0, numberToDouble(a10), numberToDouble(a11), numberToDouble(a12), 0.0, numberToDouble(a20), numberToDouble(a21), numberToDouble(a22), 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var fromColumns3x3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.fromColumns3x3_bxle5z$', wrapFunction(function () {
    var Matrix3D_init = _.com.soywiz.korma.geom.Matrix3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a10, a20, a01, a11, a21, a02, a12, a22) {
      var $receiver_0 = new Matrix3D_init();
      var a00_0 = numberToDouble(a00);
      var a10_0 = numberToDouble(a10);
      var a20_0 = numberToDouble(a20);
      var a01_0 = numberToDouble(a01);
      var a11_0 = numberToDouble(a11);
      var a21_0 = numberToDouble(a21);
      var a02_0 = numberToDouble(a02);
      var a12_0 = numberToDouble(a12);
      var a22_0 = numberToDouble(a22);
      return $receiver_0.setColumns_8odxlg$(numberToDouble(a00_0), numberToDouble(a10_0), numberToDouble(a20_0), 0.0, numberToDouble(a01_0), numberToDouble(a11_0), numberToDouble(a21_0), 0.0, numberToDouble(a02_0), numberToDouble(a12_0), numberToDouble(a22_0), 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function fromColumns3x3_0($receiver, a00, a10, a20, a01, a11, a21, a02, a12, a22) {
    return (new Matrix3D()).setColumns_8odxlg$(numberToDouble(a00), numberToDouble(a10), numberToDouble(a20), 0.0, numberToDouble(a01), numberToDouble(a11), numberToDouble(a21), 0.0, numberToDouble(a02), numberToDouble(a12), numberToDouble(a22), 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var fromRows2x2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.fromRows2x2_ix13uj$', wrapFunction(function () {
    var Matrix3D_init = _.com.soywiz.korma.geom.Matrix3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a01, a10, a11) {
      var $receiver_0 = new Matrix3D_init();
      var a00_0 = numberToDouble(a00);
      var a01_0 = numberToDouble(a01);
      var a10_0 = numberToDouble(a10);
      var a11_0 = numberToDouble(a11);
      return $receiver_0.setRows_8odxlg$(numberToDouble(a00_0), numberToDouble(a01_0), 0.0, 0.0, numberToDouble(a10_0), numberToDouble(a11_0), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function fromRows2x2_0($receiver, a00, a01, a10, a11) {
    return (new Matrix3D()).setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), 0.0, 0.0, numberToDouble(a10), numberToDouble(a11), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var fromColumns2x2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.fromColumns2x2_ix13uj$', wrapFunction(function () {
    var Matrix3D_init = _.com.soywiz.korma.geom.Matrix3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, a00, a10, a01, a11) {
      var $receiver_0 = new Matrix3D_init();
      var a00_0 = numberToDouble(a00);
      var a10_0 = numberToDouble(a10);
      var a01_0 = numberToDouble(a01);
      var a11_0 = numberToDouble(a11);
      return $receiver_0.setColumns_8odxlg$(numberToDouble(a00_0), numberToDouble(a10_0), 0.0, 0.0, numberToDouble(a01_0), numberToDouble(a11_0), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    };
  }));
  function fromColumns2x2_0($receiver, a00, a10, a01, a11) {
    return (new Matrix3D()).setColumns_8odxlg$(numberToDouble(a00), numberToDouble(a10), 0.0, 0.0, numberToDouble(a01), numberToDouble(a11), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  function times_3($receiver, that) {
    return (new Matrix3D()).multiply_lb2hp0$($receiver, that);
  }
  function times_4($receiver, value) {
    return Matrix3D$Companion_getInstance().invoke_p62hku$($receiver).multiply_s1w6dd$(value);
  }
  function times_5($receiver, value) {
    return times_4($receiver, value);
  }
  var times_6 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.times_hjr7iv$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var times = _.com.soywiz.korma.geom.times_2zf9fo$;
    return function ($receiver, value) {
      return times($receiver, numberToDouble(value));
    };
  }));
  function div_3($receiver, value) {
    return times_4($receiver, 1.0 / value);
  }
  function div_4($receiver, value) {
    return div_3($receiver, value);
  }
  var div_5 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.div_hjr7iv$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var div = _.com.soywiz.korma.geom.div_2zf9fo$;
    return function ($receiver, value) {
      return div($receiver, numberToDouble(value));
    };
  }));
  function multiply_0($receiver, scale, l) {
    if (l === void 0)
      l = $receiver;
    return $receiver.multiply_s1w6dd$(scale, l);
  }
  var multiply_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.multiply_jlynhh$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, scale, l) {
      if (l === void 0)
        l = $receiver;
      return $receiver.multiply_s1w6dd$(numberToDouble(scale), l);
    };
  }));
  var tempMat3D;
  function translate($receiver, x, y, z, w, temp) {
    if (w === void 0)
      w = 1.0;
    if (temp === void 0)
      temp = tempMat3D;
    temp.setToTranslation_7b5o5w$(x, y, z, w);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  function rotate($receiver, angle, x, y, z, temp) {
    if (temp === void 0)
      temp = tempMat3D;
    temp.setToRotation_s8wrlk$(angle, x, y, z);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  function scale($receiver, x, y, z, w, temp) {
    if (w === void 0)
      w = 1.0;
    if (temp === void 0)
      temp = tempMat3D;
    temp.setToScale_7b5o5w$(x, y, z, w);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  var translate_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.translate_xz4w49$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var translate = _.com.soywiz.korma.geom.translate_nur0j3$;
    return function ($receiver, x, y, z, w, temp) {
      if (w === void 0)
        w = 1.0;
      if (temp === void 0)
        temp = geom.tempMat3D;
      return translate($receiver, x, y, z, w, temp);
    };
  }));
  var rotate_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.rotate_ov6v7i$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var rotate = _.com.soywiz.korma.geom.rotate_etqn9z$;
    return function ($receiver, angle, x, y, z, temp) {
      if (temp === void 0)
        temp = geom.tempMat3D;
      return rotate($receiver, angle, x, y, z, temp);
    };
  }));
  var scale_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.scale_xz4w49$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var scale = _.com.soywiz.korma.geom.scale_nur0j3$;
    return function ($receiver, x, y, z, w, temp) {
      if (w === void 0)
        w = 1.0;
      if (temp === void 0)
        temp = geom.tempMat3D;
      return scale($receiver, x, y, z, w, temp);
    };
  }));
  var translate_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.translate_yluqtt$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var translate = _.com.soywiz.korma.geom.translate_nur0j3$;
    return function ($receiver, x, y, z, w, temp) {
      if (w === void 0)
        w = 1;
      if (temp === void 0)
        temp = geom.tempMat3D;
      return translate($receiver, x, y, z, w, temp);
    };
  }));
  var rotate_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.rotate_rzsy52$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var rotate = _.com.soywiz.korma.geom.rotate_etqn9z$;
    return function ($receiver, angle, x, y, z, temp) {
      if (temp === void 0)
        temp = geom.tempMat3D;
      return rotate($receiver, angle, x, y, z, temp);
    };
  }));
  var scale_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.scale_yluqtt$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var scale = _.com.soywiz.korma.geom.scale_nur0j3$;
    return function ($receiver, x, y, z, w, temp) {
      if (w === void 0)
        w = 1;
      if (temp === void 0)
        temp = geom.tempMat3D;
      return scale($receiver, x, y, z, w, temp);
    };
  }));
  var translate_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.translate_bjipaf$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var numberToDouble = Kotlin.numberToDouble;
    var translate = _.com.soywiz.korma.geom.translate_nur0j3$;
    return function ($receiver, x, y, z, w, temp) {
      if (w === void 0)
        w = 1.0;
      if (temp === void 0)
        temp = geom.tempMat3D;
      return translate($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w), temp);
    };
  }));
  var rotate_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.rotate_y1t1wm$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var numberToDouble = Kotlin.numberToDouble;
    var rotate = _.com.soywiz.korma.geom.rotate_etqn9z$;
    return function ($receiver, angle, x, y, z, temp) {
      if (temp === void 0)
        temp = geom.tempMat3D;
      return rotate($receiver, angle, numberToDouble(x), numberToDouble(y), numberToDouble(z), temp);
    };
  }));
  var scale_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.scale_bjipaf$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var numberToDouble = Kotlin.numberToDouble;
    var scale = _.com.soywiz.korma.geom.scale_nur0j3$;
    return function ($receiver, x, y, z, w, temp) {
      if (w === void 0)
        w = 1.0;
      if (temp === void 0)
        temp = geom.tempMat3D;
      return scale($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w), temp);
    };
  }));
  function setToRotation($receiver, quat, temp) {
    if (temp === void 0)
      temp = tempMat3D;
    toMatrix_0(quat, temp);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  function setToRotation_0($receiver, euler, temp) {
    if (temp === void 0)
      temp = tempMat3D;
    toMatrix(euler, temp);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  function rotate_3($receiver, x, y, z, temp) {
    if (temp === void 0)
      temp = tempMat3D;
    rotate($receiver, x, 1.0, 0.0, 0.0);
    rotate($receiver, y, 0.0, 1.0, 0.0);
    rotate($receiver, z, 0.0, 0.0, 1.0);
    return $receiver;
  }
  function rotate_4($receiver, euler, temp) {
    if (temp === void 0)
      temp = tempMat3D;
    setToRotation_0(temp, euler);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  function rotate_5($receiver, quat, temp) {
    if (temp === void 0)
      temp = tempMat3D;
    setToRotation(temp, quat);
    $receiver.multiply_lb2hp0$($receiver, temp);
    return $receiver;
  }
  function sub($receiver, l, r) {
    return $receiver.setTo_7b5o5w$(l.x - r.x, l.y - r.y, l.z - r.z, l.w - r.w);
  }
  function add_9($receiver, l, r) {
    return $receiver.setTo_7b5o5w$(l.x + r.x, l.y + r.y, l.z + r.z, l.w + r.w);
  }
  function cross($receiver, a, b) {
    return $receiver.setTo_7b5o5w$(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x, 1.0);
  }
  var tempVec1;
  var tempVec2;
  var tempVec3;
  function setToLookAt($receiver, eye, target, up) {
    var z = sub(tempVec1, eye, target);
    if (z.length3Squared === 0.0)
      z.z = 1.0;
    z.normalize_t4ex0$();
    var x = cross(tempVec2, up, z);
    if (x.length3Squared === 0.0) {
      var x_0 = up.z;
      if (Math_0.abs(x_0) === 1.0)
        z.x = z.x + 1.0E-4;
      else
        z.z = z.z + 1.0E-4;
      z.normalize_t4ex0$();
      cross(x, up, z);
    }x.normalize_t4ex0$();
    var y = cross(tempVec3, z, x);
    return $receiver.setRows_8odxlg$(x.x, y.x, z.x, 0.0, x.y, y.y, z.y, 0.0, x.z, y.z, z.z, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  var translate_3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.translate_mozq5f$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var translate = _.com.soywiz.korma.geom.translate_nur0j3$;
    return function ($receiver, v, temp) {
      if (temp === void 0)
        temp = geom.tempMat3D;
      return translate($receiver, v.x, v.y, v.z, v.w, temp);
    };
  }));
  var rotate_6 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.rotate_odkci4$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var rotate = _.com.soywiz.korma.geom.rotate_etqn9z$;
    return function ($receiver, angle, v, temp) {
      if (temp === void 0)
        temp = geom.tempMat3D;
      return rotate($receiver, angle, v.x, v.y, v.z, temp);
    };
  }));
  var scale_3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.scale_mozq5f$', wrapFunction(function () {
    var geom = _.com.soywiz.korma.geom;
    var scale = _.com.soywiz.korma.geom.scale_nur0j3$;
    return function ($receiver, v, temp) {
      if (temp === void 0)
        temp = geom.tempMat3D;
      return scale($receiver, v.x, v.y, v.z, v.w, temp);
    };
  }));
  function setTRS($receiver, translation, rotation, scale) {
    var rx = rotation.x;
    var ry = rotation.y;
    var rz = rotation.z;
    var rw = rotation.w;
    var xt = rx + rx;
    var yt = ry + ry;
    var zt = rz + rz;
    var xx = rx * xt;
    var xy = rx * yt;
    var xz = rx * zt;
    var yy = ry * yt;
    var yz = ry * zt;
    var zz = rz * zt;
    var wx = rw * xt;
    var wy = rw * yt;
    var wz = rw * zt;
    var a00 = (1 - (yy + zz)) * scale.x;
    var a01 = (xy - wz) * scale.y;
    var a02 = (xz + wy) * scale.z;
    var a03 = translation.x;
    var a10 = (xy + wz) * scale.x;
    var a11 = (1 - (xx + zz)) * scale.y;
    var a12 = (yz - wx) * scale.z;
    var a13 = translation.y;
    var a20 = (xz - wy) * scale.x;
    var a21 = (yz + wx) * scale.y;
    var a22 = (1 - (xx + yy)) * scale.z;
    var a23 = translation.z;
    return $receiver.setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(a02), numberToDouble(a03), numberToDouble(a10), numberToDouble(a11), numberToDouble(a12), numberToDouble(a13), numberToDouble(a20), numberToDouble(a21), numberToDouble(a22), numberToDouble(a23), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  }
  var tempMat1;
  function getTRS($receiver, position, rotation, scale) {
    var det = $receiver.determinant;
    var tmp$ = $receiver.data[12];
    var tmp$_0 = $receiver.data[13];
    var z = $receiver.data[14];
    position.setTo_7b5o5w$(numberToDouble(tmp$), numberToDouble(tmp$_0), numberToDouble(z), numberToDouble(1));
    var tmp$_1 = Vector3D$Companion_getInstance().length_y2kzbl$($receiver.data[0], $receiver.data[1], $receiver.data[2]) * Math_0.sign(det);
    var tmp$_2 = Vector3D$Companion_getInstance().length_y2kzbl$($receiver.data[4], $receiver.data[5], $receiver.data[6]);
    var z_0 = Vector3D$Companion_getInstance().length_y2kzbl$($receiver.data[8], $receiver.data[9], $receiver.data[10]);
    scale.setTo_7b5o5w$(numberToDouble(tmp$_1), numberToDouble(tmp$_2), numberToDouble(z_0), numberToDouble(1));
    var invSX = 1.0 / scale.x;
    var invSY = 1.0 / scale.y;
    var invSZ = 1.0 / scale.z;
    var tmp$_3 = tempMat1;
    var tmp$_4 = $receiver.data[0] * invSX;
    var tmp$_5 = $receiver.data[4] * invSY;
    var tmp$_6 = $receiver.data[8] * invSZ;
    var tmp$_7 = $receiver.data[12];
    var tmp$_8 = $receiver.data[1] * invSX;
    var tmp$_9 = $receiver.data[5] * invSY;
    var tmp$_10 = $receiver.data[9] * invSZ;
    var tmp$_11 = $receiver.data[13];
    var tmp$_12 = $receiver.data[2] * invSX;
    var tmp$_13 = $receiver.data[6] * invSY;
    var tmp$_14 = $receiver.data[10] * invSZ;
    var tmp$_15 = $receiver.data[14];
    var tmp$_16 = $receiver.data[3];
    var tmp$_17 = $receiver.data[7];
    var tmp$_18 = $receiver.data[11];
    var a33 = $receiver.data[15];
    setFromRotationMatrix(rotation, tmp$_3.setRows_8odxlg$(numberToDouble(tmp$_4), numberToDouble(tmp$_5), numberToDouble(tmp$_6), numberToDouble(tmp$_7), numberToDouble(tmp$_8), numberToDouble(tmp$_9), numberToDouble(tmp$_10), numberToDouble(tmp$_11), numberToDouble(tmp$_12), numberToDouble(tmp$_13), numberToDouble(tmp$_14), numberToDouble(tmp$_15), numberToDouble(tmp$_16), numberToDouble(tmp$_17), numberToDouble(tmp$_18), numberToDouble(a33)));
    return $receiver;
  }
  function invert_0($receiver, m) {
    if (m === void 0)
      m = $receiver;
    var target = $receiver;
    var t11 = m.data[9] * m.data[14] * m.data[7] - m.data[13] * m.data[10] * m.data[7] + m.data[13] * m.data[6] * m.data[11] - m.data[5] * m.data[14] * m.data[11] - m.data[9] * m.data[6] * m.data[15] + m.data[5] * m.data[10] * m.data[15];
    var t12 = m.data[12] * m.data[10] * m.data[7] - m.data[8] * m.data[14] * m.data[7] - m.data[12] * m.data[6] * m.data[11] + m.data[4] * m.data[14] * m.data[11] + m.data[8] * m.data[6] * m.data[15] - m.data[4] * m.data[10] * m.data[15];
    var t13 = m.data[8] * m.data[13] * m.data[7] - m.data[12] * m.data[9] * m.data[7] + m.data[12] * m.data[5] * m.data[11] - m.data[4] * m.data[13] * m.data[11] - m.data[8] * m.data[5] * m.data[15] + m.data[4] * m.data[9] * m.data[15];
    var t14 = m.data[12] * m.data[9] * m.data[6] - m.data[8] * m.data[13] * m.data[6] - m.data[12] * m.data[5] * m.data[10] + m.data[4] * m.data[13] * m.data[10] + m.data[8] * m.data[5] * m.data[14] - m.data[4] * m.data[9] * m.data[14];
    var det = m.data[0] * t11 + m.data[1] * t12 + m.data[2] * t13 + m.data[3] * t14;
    if (det === 0.0) {
      println("Matrix doesn't have inverse");
      return m.identity();
    }var detInv = 1 / det;
    return target.setRows_8odxlg$(t11 * detInv, t12 * detInv, t13 * detInv, t14 * detInv, (m.data[13] * m.data[10] * m.data[3] - m.data[9] * m.data[14] * m.data[3] - m.data[13] * m.data[2] * m.data[11] + m.data[1] * m.data[14] * m.data[11] + m.data[9] * m.data[2] * m.data[15] - m.data[1] * m.data[10] * m.data[15]) * detInv, (m.data[8] * m.data[14] * m.data[3] - m.data[12] * m.data[10] * m.data[3] + m.data[12] * m.data[2] * m.data[11] - m.data[0] * m.data[14] * m.data[11] - m.data[8] * m.data[2] * m.data[15] + m.data[0] * m.data[10] * m.data[15]) * detInv, (m.data[12] * m.data[9] * m.data[3] - m.data[8] * m.data[13] * m.data[3] - m.data[12] * m.data[1] * m.data[11] + m.data[0] * m.data[13] * m.data[11] + m.data[8] * m.data[1] * m.data[15] - m.data[0] * m.data[9] * m.data[15]) * detInv, (m.data[8] * m.data[13] * m.data[2] - m.data[12] * m.data[9] * m.data[2] + m.data[12] * m.data[1] * m.data[10] - m.data[0] * m.data[13] * m.data[10] - m.data[8] * m.data[1] * m.data[14] + m.data[0] * m.data[9] * m.data[14]) * detInv, (m.data[5] * m.data[14] * m.data[3] - m.data[13] * m.data[6] * m.data[3] + m.data[13] * m.data[2] * m.data[7] - m.data[1] * m.data[14] * m.data[7] - m.data[5] * m.data[2] * m.data[15] + m.data[1] * m.data[6] * m.data[15]) * detInv, (m.data[12] * m.data[6] * m.data[3] - m.data[4] * m.data[14] * m.data[3] - m.data[12] * m.data[2] * m.data[7] + m.data[0] * m.data[14] * m.data[7] + m.data[4] * m.data[2] * m.data[15] - m.data[0] * m.data[6] * m.data[15]) * detInv, (m.data[4] * m.data[13] * m.data[3] - m.data[12] * m.data[5] * m.data[3] + m.data[12] * m.data[1] * m.data[7] - m.data[0] * m.data[13] * m.data[7] - m.data[4] * m.data[1] * m.data[15] + m.data[0] * m.data[5] * m.data[15]) * detInv, (m.data[12] * m.data[5] * m.data[2] - m.data[4] * m.data[13] * m.data[2] - m.data[12] * m.data[1] * m.data[6] + m.data[0] * m.data[13] * m.data[6] + m.data[4] * m.data[1] * m.data[14] - m.data[0] * m.data[5] * m.data[14]) * detInv, (m.data[9] * m.data[6] * m.data[3] - m.data[5] * m.data[10] * m.data[3] - m.data[9] * m.data[2] * m.data[7] + m.data[1] * m.data[10] * m.data[7] + m.data[5] * m.data[2] * m.data[11] - m.data[1] * m.data[6] * m.data[11]) * detInv, (m.data[4] * m.data[10] * m.data[3] - m.data[8] * m.data[6] * m.data[3] + m.data[8] * m.data[2] * m.data[7] - m.data[0] * m.data[10] * m.data[7] - m.data[4] * m.data[2] * m.data[11] + m.data[0] * m.data[6] * m.data[11]) * detInv, (m.data[8] * m.data[5] * m.data[3] - m.data[4] * m.data[9] * m.data[3] - m.data[8] * m.data[1] * m.data[7] + m.data[0] * m.data[9] * m.data[7] + m.data[4] * m.data[1] * m.data[11] - m.data[0] * m.data[5] * m.data[11]) * detInv, (m.data[4] * m.data[9] * m.data[2] - m.data[8] * m.data[5] * m.data[2] + m.data[8] * m.data[1] * m.data[6] - m.data[0] * m.data[9] * m.data[6] - m.data[4] * m.data[1] * m.data[10] + m.data[0] * m.data[5] * m.data[10]) * detInv);
  }
  var setToMap = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setToMap_h5thxz$', function ($receiver, filter) {
    return $receiver.setRows_8odxlg$(filter($receiver.data[0]), filter($receiver.data[4]), filter($receiver.data[8]), filter($receiver.data[12]), filter($receiver.data[1]), filter($receiver.data[5]), filter($receiver.data[9]), filter($receiver.data[13]), filter($receiver.data[2]), filter($receiver.data[6]), filter($receiver.data[10]), filter($receiver.data[14]), filter($receiver.data[3]), filter($receiver.data[7]), filter($receiver.data[11]), filter($receiver.data[15]));
  });
  function setToInterpolated($receiver, a, b, ratio) {
    return $receiver.setColumns_8odxlg$(interpolate_0(ratio, a.data[0], b.data[0]), interpolate_0(ratio, a.data[1], b.data[1]), interpolate_0(ratio, a.data[2], b.data[2]), interpolate_0(ratio, a.data[3], b.data[3]), interpolate_0(ratio, a.data[4], b.data[4]), interpolate_0(ratio, a.data[5], b.data[5]), interpolate_0(ratio, a.data[6], b.data[6]), interpolate_0(ratio, a.data[7], b.data[7]), interpolate_0(ratio, a.data[8], b.data[8]), interpolate_0(ratio, a.data[9], b.data[9]), interpolate_0(ratio, a.data[10], b.data[10]), interpolate_0(ratio, a.data[11], b.data[11]), interpolate_0(ratio, a.data[12], b.data[12]), interpolate_0(ratio, a.data[13], b.data[13]), interpolate_0(ratio, a.data[14], b.data[14]), interpolate_0(ratio, a.data[15], b.data[15]));
  }
  function copyFrom_0($receiver, that) {
    return toMatrix3D(that, $receiver);
  }
  function toMatrix3D($receiver, out) {
    if (out === void 0)
      out = new Matrix3D();
    var a00 = get_a($receiver);
    var a01 = get_c($receiver);
    var a03 = get_tx($receiver);
    var a10 = get_b($receiver);
    var a11 = get_d($receiver);
    var a13 = get_ty($receiver);
    return out.setRows_8odxlg$(numberToDouble(a00), numberToDouble(a01), numberToDouble(0), numberToDouble(a03), numberToDouble(a10), numberToDouble(a11), numberToDouble(0), numberToDouble(a13), numberToDouble(0), numberToDouble(0), numberToDouble(1), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1));
  }
  function Orientation(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Orientation_initFields() {
    Orientation_initFields = function () {
    };
    Orientation$CLOCK_WISE_instance = new Orientation('CLOCK_WISE', 0, 1);
    Orientation$COUNTER_CLOCK_WISE_instance = new Orientation('COUNTER_CLOCK_WISE', 1, -1);
    Orientation$COLLINEAR_instance = new Orientation('COLLINEAR', 2, 0);
    Orientation$Companion_getInstance();
  }
  var Orientation$CLOCK_WISE_instance;
  function Orientation$CLOCK_WISE_getInstance() {
    Orientation_initFields();
    return Orientation$CLOCK_WISE_instance;
  }
  var Orientation$COUNTER_CLOCK_WISE_instance;
  function Orientation$COUNTER_CLOCK_WISE_getInstance() {
    Orientation_initFields();
    return Orientation$COUNTER_CLOCK_WISE_instance;
  }
  var Orientation$COLLINEAR_instance;
  function Orientation$COLLINEAR_getInstance() {
    Orientation_initFields();
    return Orientation$COLLINEAR_instance;
  }
  function Orientation$Companion() {
    Orientation$Companion_instance = this;
    this.EPSILON_0 = 1.0E-12;
  }
  Orientation$Companion.prototype.orient2d_36hh2h$ = function (pa, pb, pc) {
    return this.orient2d_15yvbs$(get_x(pa), get_y(pa), get_x(pb), get_y(pb), get_x(pc), get_y(pc));
  };
  Orientation$Companion.prototype.orient2d_15yvbs$ = function (paX, paY, pbX, pbY, pcX, pcY) {
    var detleft = (paX - pcX) * (pbY - pcY);
    var detright = (paY - pcY) * (pbX - pcX);
    var val = detleft - detright;
    if (val > -this.EPSILON_0 && val < this.EPSILON_0)
      return Orientation$COLLINEAR_getInstance();
    if (val > 0)
      return Orientation$COUNTER_CLOCK_WISE_getInstance();
    return Orientation$CLOCK_WISE_getInstance();
  };
  Orientation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Orientation$Companion_instance = null;
  function Orientation$Companion_getInstance() {
    Orientation_initFields();
    if (Orientation$Companion_instance === null) {
      new Orientation$Companion();
    }return Orientation$Companion_instance;
  }
  Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function Orientation$values() {
    return [Orientation$CLOCK_WISE_getInstance(), Orientation$COUNTER_CLOCK_WISE_getInstance(), Orientation$COLLINEAR_getInstance()];
  }
  Orientation.values = Orientation$values;
  function Orientation$valueOf(name) {
    switch (name) {
      case 'CLOCK_WISE':
        return Orientation$CLOCK_WISE_getInstance();
      case 'COUNTER_CLOCK_WISE':
        return Orientation$COUNTER_CLOCK_WISE_getInstance();
      case 'COLLINEAR':
        return Orientation$COLLINEAR_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.Orientation.' + name);
    }
  }
  Orientation.valueOf_61zpoe$ = Orientation$valueOf;
  function IPoint() {
    IPoint$Companion_getInstance();
  }
  function IPoint$Companion() {
    IPoint$Companion_instance = this;
  }
  IPoint$Companion.prototype.invoke = function () {
    return new Point(0.0, 0.0);
  };
  IPoint$Companion.prototype.invoke_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.IPoint.Companion.invoke_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (x, y) {
      return new Point_init(numberToDouble(x), numberToDouble(y));
    };
  }));
  IPoint$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IPoint$Companion_instance = null;
  function IPoint$Companion_getInstance() {
    if (IPoint$Companion_instance === null) {
      new IPoint$Companion();
    }return IPoint$Companion_instance;
  }
  IPoint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IPoint',
    interfaces: []
  };
  function get_x($receiver) {
    return $receiver._x;
  }
  function get_y($receiver) {
    return $receiver._y;
  }
  function invoke($receiver, v) {
    return new Point(v._x, v._y);
  }
  function middle($receiver, a, b) {
    return new Point((a._x + b._x) * 0.5, (a._y + b._y) * 0.5);
  }
  function angle($receiver, a, b) {
    var tmp$ = Angle$Companion_getInstance();
    var x = dot(a, b) / (get_length(a) * get_length(b));
    return tmp$.fromRadians_14dthe$(Math_0.acos(x));
  }
  function compare($receiver, l, r) {
    return Point$Companion_getInstance().compare_6y0v78$(l._x, l._y, r._x, r._y);
  }
  function distance($receiver, a, b) {
    return Point$Companion_getInstance().distance_6y0v78$(a._x, a._y, b._x, b._y);
  }
  function copyFrom_1($receiver, that) {
    return $receiver.setTo_lu1900$(that._x, that._y);
  }
  function add_10($receiver, p) {
    return setToAdd($receiver, $receiver, p);
  }
  function sub_0($receiver, p) {
    return setToSub($receiver, $receiver, p);
  }
  function plus_0($receiver, that) {
    var x = $receiver._x + that._x;
    var y = $receiver._y + that._y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function minus_0($receiver, that) {
    var x = $receiver._x - that._x;
    var y = $receiver._y - that._y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function times_7($receiver, that) {
    var x = $receiver._x * that._x;
    var y = $receiver._y * that._y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function div_6($receiver, that) {
    var x = $receiver._x / that._x;
    var y = $receiver._y / that._y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  var times_8 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.times_mc4xcy$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function ($receiver, scale) {
      var x = $receiver._x * numberToDouble(scale);
      var y = $receiver._y * numberToDouble(scale);
      return new Point_init(numberToDouble(x), numberToDouble(y));
    };
  }));
  var div_7 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.div_mc4xcy$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function ($receiver, scale) {
      var x = $receiver._x / numberToDouble(scale);
      var y = $receiver._y / numberToDouble(scale);
      return new Point_init(numberToDouble(x), numberToDouble(y));
    };
  }));
  function dot($receiver, that) {
    return $receiver._x * that._x + $receiver._y * that._y;
  }
  var distanceTo = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.distanceTo_1hi0wo$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Math_0 = Math;
    return function ($receiver, x, y) {
      var x_0 = numberToDouble(x) - $receiver._x;
      var y_0 = numberToDouble(y) - $receiver._y;
      return Math_0.hypot(x_0, y_0);
    };
  }));
  function distanceTo_0($receiver, that) {
    var x = that._x;
    var y = that._y;
    var x_0 = numberToDouble(x) - $receiver._x;
    var y_0 = numberToDouble(y) - $receiver._y;
    return Math_0.hypot(x_0, y_0);
  }
  function angleTo($receiver, other) {
    return Angle$Companion_getInstance().between_6y0v78$($receiver._x, $receiver._y, other._x, other._y);
  }
  function transformed($receiver, mat, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    return setToTransform(out, mat, $receiver);
  }
  function get_0($receiver, index) {
    switch (index) {
      case 0:
        return $receiver._x;
      case 1:
        return $receiver._y;
      default:throw new IndexOutOfBoundsException("IPoint doesn't have " + index + ' component');
    }
  }
  function get_unit($receiver) {
    var scale = get_length($receiver);
    var x = $receiver._x / numberToDouble(scale);
    var y = $receiver._y / numberToDouble(scale);
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function get_length($receiver) {
    var x = $receiver._x;
    var y = $receiver._y;
    return Math_0.hypot(x, y);
  }
  function get_magnitude($receiver) {
    var x = $receiver._x;
    var y = $receiver._y;
    return Math_0.hypot(x, y);
  }
  function get_normalized_0($receiver) {
    var imag = 1.0 / get_magnitude($receiver);
    var x = $receiver._x * imag;
    var y = $receiver._y * imag;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function get_mutable($receiver) {
    return new Point($receiver._x, $receiver._y);
  }
  function get_immutable($receiver) {
    var x = $receiver._x;
    var y = $receiver._y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function copy($receiver) {
    var x = $receiver._x;
    var y = $receiver._y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function setToTransform($receiver, mat, p) {
    return setToTransform_0($receiver, mat, p._x, p._y);
  }
  function setToTransform_0($receiver, mat, x, y) {
    return $receiver.setTo_lu1900$(transformX(mat, x, y), transformY(mat, x, y));
  }
  function setToAdd($receiver, a, b) {
    return $receiver.setTo_lu1900$(a._x + b._x, a._y + b._y);
  }
  function setToSub($receiver, a, b) {
    return $receiver.setTo_lu1900$(a._x - b._x, a._y - b._y);
  }
  function setToMul($receiver, a, b) {
    return $receiver.setTo_lu1900$(a._x * b._x, a._y * b._y);
  }
  function setToMul_0($receiver, a, s) {
    return $receiver.setTo_lu1900$(a._x * s, a._y * s);
  }
  var setToMul_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setToMul_ytx2uo$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var setToMul = _.com.soywiz.korma.geom.setToMul_u0b7eg$;
    return function ($receiver, a, s) {
      return setToMul($receiver, a, numberToDouble(s));
    };
  }));
  function setToDiv($receiver, a, b) {
    return $receiver.setTo_lu1900$(a._x / b._x, a._y / b._y);
  }
  function setToDiv_0($receiver, a, s) {
    return $receiver.setTo_lu1900$(a._x / s, a._y / s);
  }
  var setToDiv_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setToDiv_ytx2uo$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var setToDiv = _.com.soywiz.korma.geom.setToDiv_u0b7eg$;
    return function ($receiver, a, s) {
      return setToDiv($receiver, a, numberToDouble(s));
    };
  }));
  function plusAssign($receiver, that) {
    $receiver.setTo_lu1900$($receiver.x + that._x, $receiver.y + that._y);
  }
  function Point(x, y) {
    Point$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  Object.defineProperty(Point.prototype, '_x', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(Point.prototype, '_y', {
    get: function () {
      return this.y;
    }
  });
  Point.prototype.compareTo_11rb$ = function (other) {
    return Point$Companion_getInstance().compare_6y0v78$(this.x, this.y, other._x, other._y);
  };
  Point.prototype.compareTo_4l17gg$ = function (other) {
    return Point$Companion_getInstance().compare_6y0v78$(this.x, this.y, other.x, other.y);
  };
  Point.prototype.setToZero = function () {
    return this.setTo_lu1900$(0.0, 0.0);
  };
  Point.prototype.setToOne = function () {
    return this.setTo_lu1900$(1.0, 1.0);
  };
  Point.prototype.setToUp = function () {
    return this.setTo_lu1900$(0.0, -1.0);
  };
  Point.prototype.setToDown = function () {
    return this.setTo_lu1900$(0.0, +1.0);
  };
  Point.prototype.setToLeft = function () {
    return this.setTo_lu1900$(-1.0, 0.0);
  };
  Point.prototype.setToRight = function () {
    return this.setTo_lu1900$(+1.0, 0.0);
  };
  function Point$Companion() {
    Point$Companion_instance = this;
    this.Zero = new Point(0.0, 0.0);
    this.One = new Point(1.0, 1.0);
    this.Up = new Point(0.0, +1.0);
    this.Down = new Point(0.0, -1.0);
    this.Left = new Point(-1.0, 0.0);
    this.Right = new Point(+1.0, 0.0);
  }
  Point$Companion.prototype.invoke = function () {
    return new Point(0.0, 0.0);
  };
  Point$Companion.prototype.invoke_4l17gg$ = function (v) {
    return new Point(v.x, v.y);
  };
  Point$Companion.prototype.invoke_dleff0$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_dleff0$', wrapFunction(function () {
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (x, y) {
      return new Point_init(x, y);
    };
  }));
  Point$Companion.prototype.invoke_vux9f0$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_vux9f0$', wrapFunction(function () {
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (x, y) {
      return new Point_init(x, y);
    };
  }));
  Point$Companion.prototype.invoke_za3lpa$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_za3lpa$', wrapFunction(function () {
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (xy) {
      return new Point_init(xy, xy);
    };
  }));
  Point$Companion.prototype.invoke_mx4ult$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_mx4ult$', wrapFunction(function () {
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (xy) {
      return new Point_init(xy, xy);
    };
  }));
  Point$Companion.prototype.invoke_14dthe$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_14dthe$', wrapFunction(function () {
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (xy) {
      return new Point_init(xy, xy);
    };
  }));
  Point$Companion.prototype.invoke_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (x, y) {
      return new Point_init(numberToDouble(x), numberToDouble(y));
    };
  }));
  Point$Companion.prototype.invoke_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.invoke_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Point_init = _.com.soywiz.korma.geom.Point;
    return function (xy) {
      return new Point_init(numberToDouble(xy), numberToDouble(xy));
    };
  }));
  Point$Companion.prototype.middle_xwdphw$ = function (a, b) {
    return new Point((a.x + b.x) * 0.5, (a.y + b.y) * 0.5);
  };
  Point$Companion.prototype.angle_xwdphw$ = function (a, b) {
    var tmp$ = Angle$Companion_getInstance();
    var x = a.dot_4l17gg$(b) / (a.length * b.length);
    return tmp$.fromRadians_14dthe$(Math_0.acos(x));
  };
  Point$Companion.prototype.angle_6y0v78$ = function (ax, ay, bx, by) {
    return Angle$Companion_getInstance().between_6y0v78$(ax, ay, bx, by);
  };
  Point$Companion.prototype.compare_6y0v78$ = function (lx, ly, rx, ry) {
    var ret = Kotlin.compareTo(ly, ry);
    return ret === 0 ? Kotlin.compareTo(lx, rx) : ret;
  };
  Point$Companion.prototype.compare_xwdphw$ = function (l, r) {
    return this.compare_6y0v78$(l.x, l.y, r.x, r.y);
  };
  Point$Companion.prototype.angle_15yvbs$ = function (x1, y1, x2, y2, x3, y3) {
    return Angle$Companion_getInstance().between_6y0v78$(x1 - x2, y1 - y2, x1 - x3, y1 - y3);
  };
  Point$Companion.prototype.distance_lu1900$ = function (a, b) {
    var x = a - b;
    return Math_0.abs(x);
  };
  Point$Companion.prototype.distance_6y0v78$ = function (x1, y1, x2, y2) {
    var x = x1 - x2;
    var y = y1 - y2;
    return Math_0.hypot(x, y);
  };
  Point$Companion.prototype.distance_7b5o5w$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.distance_7b5o5w$', function (x1, y1, x2, y2) {
    return this.distance_6y0v78$(x1, y1, x2, y2);
  });
  Point$Companion.prototype.distance_tjonv8$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.distance_tjonv8$', function (x1, y1, x2, y2) {
    return this.distance_6y0v78$(x1, y1, x2, y2);
  });
  Point$Companion.prototype.distance_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.Companion.distance_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x1, y1, x2, y2) {
      return this.distance_6y0v78$(numberToDouble(x1), numberToDouble(y1), numberToDouble(x2), numberToDouble(y2));
    };
  }));
  Point$Companion.prototype.distance_xwdphw$ = function (a, b) {
    return this.distance_6y0v78$(a.x, a.y, b.x, b.y);
  };
  Point$Companion.prototype.distance_aixlx8$ = function (a, b) {
    return this.distance_6y0v78$(a.x, a.y, b.x, b.y);
  };
  Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }return Point$Companion_instance;
  }
  Point.prototype.setTo_lu1900$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Point.prototype.neg = function () {
    return this.setTo_lu1900$(-this.x, -this.y);
  };
  Point.prototype.mul_14dthe$ = function (s) {
    return this.setTo_lu1900$(this.x * s, this.y * s);
  };
  Point.prototype.mul_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.mul_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (s) {
      return this.mul_14dthe$(numberToDouble(s));
    };
  }));
  Point.prototype.mul_mx4ult$ = function (s) {
    return this.mul_14dthe$(s);
  };
  Point.prototype.mul_za3lpa$ = function (s) {
    return this.mul_14dthe$(s);
  };
  Point.prototype.add_4l17gg$ = function (p) {
    return this.setToAdd_xwdphw$(this, p);
  };
  Point.prototype.sub_4l17gg$ = function (p) {
    return this.setToSub_xwdphw$(this, p);
  };
  Point.prototype.copyFrom_4l17gg$ = function (that) {
    return this.setTo_lu1900$(that.x, that.y);
  };
  Point.prototype.setToTransform_4le9et$ = function (mat, p) {
    return this.setToTransform_lueayd$(mat, p.x, p.y);
  };
  Point.prototype.setToTransform_lueayd$ = function (mat, x, y) {
    return this.setTo_lu1900$(mat.transformX_lu1900$(x, y), mat.transformY_lu1900$(x, y));
  };
  Point.prototype.setToAdd_xwdphw$ = function (a, b) {
    return this.setTo_lu1900$(a.x + b.x, a.y + b.y);
  };
  Point.prototype.setToSub_xwdphw$ = function (a, b) {
    return this.setTo_lu1900$(a.x - b.x, a.y - b.y);
  };
  Point.prototype.setToMul_xwdphw$ = function (a, b) {
    return this.setTo_lu1900$(a.x * b.x, a.y * b.y);
  };
  Point.prototype.setToMul_4civ2q$ = function (a, s) {
    return this.setTo_lu1900$(a.x * s, a.y * s);
  };
  Point.prototype.setToDiv_xwdphw$ = function (a, b) {
    return this.setTo_lu1900$(a.x / b.x, a.y / b.y);
  };
  Point.prototype.setToDiv_4civ2q$ = function (a, s) {
    return this.setTo_lu1900$(a.x / s, a.y / s);
  };
  Point.prototype.plusAssign_4l17gg$ = function (that) {
    this.setTo_lu1900$(this.x + that.x, this.y + that.y);
  };
  Point.prototype.setToMul_964qiy$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.setToMul_964qiy$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (a, s) {
      return this.setToMul_4civ2q$(a, numberToDouble(s));
    };
  }));
  Point.prototype.setToDiv_964qiy$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.setToDiv_964qiy$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (a, s) {
      return this.setToDiv_4civ2q$(a, numberToDouble(s));
    };
  }));
  Point.prototype.plus_4l17gg$ = function (that) {
    return new Point(this._x + that._x, this._y + that._y);
  };
  Point.prototype.minus_4l17gg$ = function (that) {
    return new Point(this._x - that._x, this._y - that._y);
  };
  Point.prototype.times_4l17gg$ = function (that) {
    return new Point(this._x * that._x, this._y * that._y);
  };
  Point.prototype.div_4l17gg$ = function (that) {
    return new Point(this._x / that._x, this._y / that._y);
  };
  Point.prototype.dot_4l17gg$ = function (that) {
    return this._x * that._x + this._y * that._y;
  };
  Point.prototype.times_14dthe$ = function (scale) {
    return new Point(this._x * scale, this._y * scale);
  };
  Point.prototype.times_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.times_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (scale) {
      return this.times_14dthe$(numberToDouble(scale));
    };
  }));
  Point.prototype.times_mx4ult$ = function (scale) {
    return this.times_14dthe$(scale);
  };
  Point.prototype.times_za3lpa$ = function (scale) {
    return this.times_14dthe$(scale);
  };
  Point.prototype.div_14dthe$ = function (scale) {
    return new Point(this._x / scale, this._y / scale);
  };
  Point.prototype.div_3p81yu$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.div_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (scale) {
      return this.div_14dthe$(numberToDouble(scale));
    };
  }));
  Point.prototype.div_mx4ult$ = function (scale) {
    return this.div_14dthe$(scale);
  };
  Point.prototype.div_za3lpa$ = function (scale) {
    return this.div_14dthe$(scale);
  };
  Point.prototype.distanceTo_lu1900$ = function (x, y) {
    var x_0 = x - this._x;
    var y_0 = y - this._y;
    return Math_0.hypot(x_0, y_0);
  };
  Point.prototype.distanceTo_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Point.distanceTo_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Math_0 = Math;
    return function (x, y) {
      var x_0 = numberToDouble(x) - this._x;
      var y_0 = numberToDouble(y) - this._y;
      return Math_0.hypot(x_0, y_0);
    };
  }));
  Point.prototype.distanceTo_vux9f0$ = function (x, y) {
    return this.distanceTo_lu1900$(x, y);
  };
  Point.prototype.distanceTo_dleff0$ = function (x, y) {
    return this.distanceTo_lu1900$(x, y);
  };
  Point.prototype.distanceTo_4l17gg$ = function (that) {
    return this.distanceTo_lu1900$(that._x, that._y);
  };
  Point.prototype.angleTo_4l17gg$ = function (other) {
    return Angle$Companion_getInstance().between_6y0v78$(this._x, this._y, other._x, other._y);
  };
  Point.prototype.transformed_4le9et$ = function (mat, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    return out.setToTransform_4le9et$(mat, this);
  };
  Point.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:throw new IndexOutOfBoundsException("IPoint doesn't have " + index + ' component');
    }
  };
  Object.defineProperty(Point.prototype, 'mutable', {
    get: function () {
      return new Point(this._x, this._y);
    }
  });
  Object.defineProperty(Point.prototype, 'immutable', {
    get: function () {
      return new Point(this._x, this._y);
    }
  });
  Point.prototype.copy = function () {
    return new Point(this._x, this._y);
  };
  Object.defineProperty(Point.prototype, 'unit', {
    get: function () {
      return this.div_14dthe$(this.length);
    }
  });
  Object.defineProperty(Point.prototype, 'length', {
    get: function () {
      var x = this._x;
      var y = this._y;
      return Math_0.hypot(x, y);
    }
  });
  Object.defineProperty(Point.prototype, 'magnitude', {
    get: function () {
      var x = this._x;
      var y = this._y;
      return Math_0.hypot(x, y);
    }
  });
  Object.defineProperty(Point.prototype, 'normalized', {
    get: function () {
      var imag = 1.0 / this.magnitude;
      return new Point(this._x * imag, this._y * imag);
    }
  });
  Point.prototype.normalize = function () {
    var len = this.length;
    this.setTo_lu1900$(this.x / len, this.y / len);
  };
  Point.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return Point$Companion_getInstance().invoke().setToInterpolated_bs4suk$(ratio, this, other);
  };
  Point.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_lu1900$(interpolate_1(ratio, l.x, r.x), interpolate_1(ratio, l.y, r.y));
  };
  Point.prototype.toString = function () {
    return '(' + get_niceStr_0(this.x) + ', ' + get_niceStr_0(this.y) + ')';
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: [IPoint, Comparable, Interpolable, MutableInterpolable]
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_lu1900$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function get_unit_0($receiver) {
    return $receiver.div_14dthe$($receiver.length);
  }
  var setTo = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setTo_j4d39r$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.setTo_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  function IPointInt() {
    IPointInt$Companion_getInstance();
  }
  function IPointInt$Companion() {
    IPointInt$Companion_instance = this;
  }
  IPointInt$Companion.prototype.invoke_vux9f0$ = function (x, y) {
    return PointInt$Companion_getInstance().invoke_vux9f0$(x, y);
  };
  IPointInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IPointInt$Companion_instance = null;
  function IPointInt$Companion_getInstance() {
    if (IPointInt$Companion_instance === null) {
      new IPointInt$Companion();
    }return IPointInt$Companion_instance;
  }
  IPointInt.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IPointInt',
    interfaces: []
  };
  function PointInt(p) {
    PointInt$Companion_getInstance();
    this.p = p;
  }
  PointInt.prototype.compareTo_11rb$ = function (other) {
    return PointInt$Companion_getInstance().compare_tjonv8$(this.x, this.y, other.x, other.y);
  };
  function PointInt$Companion() {
    PointInt$Companion_instance = this;
  }
  PointInt$Companion.prototype.invoke = function () {
    return PointInt$Companion_getInstance().invoke_vux9f0$(0, 0);
  };
  PointInt$Companion.prototype.invoke_vux9f0$ = function (x, y) {
    return new PointInt(new Point(x, y));
  };
  PointInt$Companion.prototype.compare_tjonv8$ = function (lx, ly, rx, ry) {
    var ret = Kotlin.primitiveCompareTo(ly, ry);
    return ret === 0 ? Kotlin.primitiveCompareTo(lx, rx) : ret;
  };
  PointInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PointInt$Companion_instance = null;
  function PointInt$Companion_getInstance() {
    if (PointInt$Companion_instance === null) {
      new PointInt$Companion();
    }return PointInt$Companion_instance;
  }
  Object.defineProperty(PointInt.prototype, 'x', {
    get: function () {
      return numberToInt(this.p.x);
    },
    set: function (value) {
      this.p.x = value;
    }
  });
  Object.defineProperty(PointInt.prototype, 'y', {
    get: function () {
      return numberToInt(this.p.y);
    },
    set: function (value) {
      this.p.y = value;
    }
  });
  PointInt.prototype.setTo_vux9f0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  PointInt.prototype.setTo_kp3ah4$ = function (that) {
    return this.setTo_vux9f0$(that.x, that.y);
  };
  PointInt.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  PointInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointInt',
    interfaces: [Comparable, IPointInt]
  };
  PointInt.prototype.unbox = function () {
    return this.p;
  };
  PointInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.p) | 0;
    return result;
  };
  PointInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.p, other.p))));
  };
  function plus_1($receiver, that) {
    return PointInt$Companion_getInstance().invoke_vux9f0$($receiver.x + that.x | 0, $receiver.y + that.y | 0);
  }
  function minus_1($receiver, that) {
    return PointInt$Companion_getInstance().invoke_vux9f0$($receiver.x - that.x | 0, $receiver.y - that.y | 0);
  }
  function times_9($receiver, that) {
    return PointInt$Companion_getInstance().invoke_vux9f0$(Kotlin.imul($receiver.x, that.x), Kotlin.imul($receiver.y, that.y));
  }
  function div_8($receiver, that) {
    return PointInt$Companion_getInstance().invoke_vux9f0$($receiver.x / that.x | 0, $receiver.y / that.y | 0);
  }
  function rem($receiver, that) {
    return PointInt$Companion_getInstance().invoke_vux9f0$($receiver.x % that.x, $receiver.y % that.y);
  }
  function asInt($receiver) {
    return new PointInt($receiver);
  }
  function asDouble($receiver) {
    return $receiver.p;
  }
  function get_int($receiver) {
    return PointInt$Companion_getInstance().invoke_vux9f0$(numberToInt($receiver.x), numberToInt($receiver.y));
  }
  function get_int_0($receiver) {
    return PointInt$Companion_getInstance().invoke_vux9f0$(numberToInt($receiver._x), numberToInt($receiver._y));
  }
  function get_float($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function getPolylineLength($receiver) {
    var tmp$;
    var out = 0.0;
    var prev = null;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var cur = tmp$.next();
      if (prev != null)
        out += prev.distanceTo_4l17gg$(cur);
      prev = cur;
    }
    return out;
  }
  function bounds($receiver, out, bb) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    if (bb === void 0)
      bb = new BoundsBuilder();
    return add_2(bb, $receiver).getBounds_2da8yn$(out);
  }
  function getPolylineLength_0($receiver) {
    var tmp$;
    var out = 0.0;
    var prev = null;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var cur = tmp$.next();
      if (prev != null)
        out += distanceTo_0(prev, cur);
      prev = cur;
    }
    return out;
  }
  function bounds_0($receiver, out, bb) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    if (bb === void 0)
      bb = new BoundsBuilder();
    return add_2(bb, $receiver).getBounds_2da8yn$(out);
  }
  function PointArea(size) {
    this.size = size;
    var array = Array_0(this.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Point$Companion_getInstance().invoke();
    }
    this.points = array;
    this.offset = 0;
  }
  PointArea.prototype.alloc = function () {
    var tmp$;
    return this.points[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$];
  };
  PointArea.prototype.Point_lu1900$ = function (x, y) {
    return this.alloc().setTo_lu1900$(x, y);
  };
  PointArea.prototype.Point_vux9f0$ = function (x, y) {
    return this.Point_lu1900$(x, y);
  };
  PointArea.prototype.Point = function () {
    return this.Point_lu1900$(0.0, 0.0);
  };
  PointArea.prototype.Point_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.PointArea.Point_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      return this.Point_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  PointArea.prototype.plus_5jbsoh$ = function ($receiver, other) {
    return setToAdd(this.alloc(), $receiver, other);
  };
  PointArea.prototype.minus_5jbsoh$ = function ($receiver, other) {
    return setToSub(this.alloc(), $receiver, other);
  };
  PointArea.prototype.times_5jbsoh$ = function ($receiver, value) {
    return setToMul(this.alloc(), $receiver, value);
  };
  PointArea.prototype.div_5jbsoh$ = function ($receiver, value) {
    return setToDiv(this.alloc(), $receiver, value);
  };
  PointArea.prototype.times_r5qst6$ = function ($receiver, value) {
    return setToMul_0(this.alloc(), $receiver, value);
  };
  PointArea.prototype.div_r5qst6$ = function ($receiver, value) {
    return setToDiv_0(this.alloc(), $receiver, value);
  };
  PointArea.prototype.times_hikog6$ = function ($receiver, value) {
    return this.times_r5qst6$($receiver, value);
  };
  PointArea.prototype.div_hikog6$ = function ($receiver, value) {
    return this.div_r5qst6$($receiver, value);
  };
  PointArea.prototype.times_mc4xcy$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.PointArea.times_mc4xcy$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, value) {
      return this.times_r5qst6$($receiver, numberToDouble(value));
    };
  }));
  PointArea.prototype.div_mc4xcy$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.PointArea.div_mc4xcy$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, value) {
      return this.div_r5qst6$($receiver, numberToDouble(value));
    };
  }));
  PointArea.prototype.invoke_1axekc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.PointArea.invoke_1axekc$', function (callback) {
    var oldOffset = this.offset;
    try {
      callback(this);
    }finally {
      this.offset = oldOffset;
    }
  });
  PointArea.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointArea',
    interfaces: []
  };
  function IPointArrayList() {
  }
  IPointArrayList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IPointArrayList',
    interfaces: []
  };
  function getPoint($receiver, index) {
    return new Point($receiver.getX_za3lpa$(index), $receiver.getY_za3lpa$(index));
  }
  function getIPoint($receiver, index) {
    var x = $receiver.getX_za3lpa$(index);
    var y = $receiver.getY_za3lpa$(index);
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function toPoints($receiver) {
    var $receiver_0 = until(0, $receiver.size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(getPoint($receiver, item));
    }
    return destination;
  }
  function toIPoints($receiver) {
    var $receiver_0 = until(0, $receiver.size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(getIPoint($receiver, item));
    }
    return destination;
  }
  var contains_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.contains_8lf6i7$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var contains = _.com.soywiz.korma.geom.contains_lzs23j$;
    return function ($receiver, x, y) {
      return contains($receiver, numberToDouble(x), numberToDouble(y));
    };
  }));
  function contains_2($receiver, x, y) {
    return contains_4($receiver, x, y);
  }
  function contains_3($receiver, x, y) {
    return contains_4($receiver, x, y);
  }
  function contains_4($receiver, x, y) {
    var tmp$;
    tmp$ = $receiver.size;
    for (var n = 0; n < tmp$; n++)
      if ($receiver.getX_za3lpa$(n) === x && $receiver.getY_za3lpa$(n) === y)
        return true;
    return false;
  }
  function PointArrayList(capacity) {
    PointArrayList$Companion_getInstance();
    if (capacity === void 0)
      capacity = 7;
    this.xList_0 = new DoubleArrayList(capacity);
    this.yList_0 = new DoubleArrayList(capacity);
  }
  Object.defineProperty(PointArrayList.prototype, 'size', {
    get: function () {
      return this.xList_0.size;
    }
  });
  PointArrayList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  PointArrayList.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  PointArrayList.prototype.clear = function () {
    this.xList_0.clear();
    this.yList_0.clear();
    return this;
  };
  function PointArrayList$Companion() {
    PointArrayList$Companion_instance = this;
  }
  PointArrayList$Companion.prototype.invoke_r4cj56$ = function (capacity, callback) {
    if (capacity === void 0)
      capacity = 7;
    var $receiver = new PointArrayList(capacity);
    callback($receiver);
    return $receiver;
  };
  function PointArrayList$Companion$invoke$lambda(closure$points) {
    return function ($receiver) {
      for (var n = 0; n !== closure$points.size; ++n) {
        $receiver.add_lu1900$(get_x(closure$points.get_za3lpa$(n)), get_y(closure$points.get_za3lpa$(n)));
      }
      return Unit;
    };
  }
  PointArrayList$Companion.prototype.invoke_k4f1po$ = function (points) {
    return PointArrayList$Companion_getInstance().invoke_r4cj56$(points.size, PointArrayList$Companion$invoke$lambda(points));
  };
  function PointArrayList$Companion$invoke$lambda_0(closure$points) {
    return function ($receiver) {
      for (var n = 0; n !== closure$points.length; ++n) {
        $receiver.add_lu1900$(get_x(closure$points[n]), get_y(closure$points[n]));
      }
      return Unit;
    };
  }
  PointArrayList$Companion.prototype.invoke_hfwgde$ = function (points) {
    return PointArrayList$Companion_getInstance().invoke_r4cj56$(points.length, PointArrayList$Companion$invoke$lambda_0(points));
  };
  PointArrayList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PointArrayList$Companion_instance = null;
  function PointArrayList$Companion_getInstance() {
    if (PointArrayList$Companion_instance === null) {
      new PointArrayList$Companion();
    }return PointArrayList$Companion_instance;
  }
  PointArrayList.prototype.add_lu1900$ = function (x, y) {
    this.xList_0.plusAssign_14dthe$(x);
    this.yList_0.plusAssign_14dthe$(y);
    return this;
  };
  PointArrayList.prototype.add_4l17gg$ = function (p) {
    return this.add_lu1900$(p.x, p.y);
  };
  PointArrayList.prototype.add_25dzef$ = function (p) {
    var tmp$;
    tmp$ = p.size;
    for (var n = 0; n < tmp$; n++) {
      this.add_lu1900$(p.getX_za3lpa$(n), p.getY_za3lpa$(n));
    }
    return this;
  };
  PointArrayList.prototype.fastForEach_tuav61$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.PointArrayList.fastForEach_tuav61$', function (block) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      block(this.getX_za3lpa$(n), this.getY_za3lpa$(n));
    }
  });
  PointArrayList.prototype.copyFrom_25dzef$ = function (other) {
    this.clear();
    this.add_25dzef$(other);
    return this;
  };
  PointArrayList.prototype.clone_25dzef$ = function (out) {
    if (out === void 0)
      out = new PointArrayList();
    return out.clear().add_25dzef$(this);
  };
  PointArrayList.prototype.toList = function () {
    var out = ArrayList_init_0();
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      out.add_11rb$(new Point(this.getX_za3lpa$(n), this.getY_za3lpa$(n)));
    }
    return out;
  };
  PointArrayList.prototype.getX_za3lpa$ = function (index) {
    return this.xList_0.getAt_za3lpa$(index);
  };
  PointArrayList.prototype.getY_za3lpa$ = function (index) {
    return this.yList_0.getAt_za3lpa$(index);
  };
  PointArrayList.prototype.insertAt_zj2pt$ = function (index, p) {
    var size = p.size;
    this.xList_0.insertAt_q6hait$(index, p.xList_0.data, 0, size);
    this.yList_0.insertAt_q6hait$(index, p.yList_0.data, 0, size);
    return this;
  };
  PointArrayList.prototype.insertAt_w4xg1m$ = function (index, x, y) {
    this.xList_0.insertAt_5wr77w$(index, x);
    this.yList_0.insertAt_5wr77w$(index, y);
    return this;
  };
  PointArrayList.prototype.insertAt_rwdt8h$ = function (index, point) {
    return this.insertAt_w4xg1m$(index, get_x(point), get_y(point));
  };
  PointArrayList.prototype.removeAt_vux9f0$ = function (index, count) {
    if (count === void 0)
      count = 1;
    this.xList_0.removeAt_vux9f0$(index, count);
    this.yList_0.removeAt_vux9f0$(index, count);
    return this;
  };
  PointArrayList.prototype.setX_5wr77w$ = function (index, x) {
    this.xList_0.set_5wr77w$(index, x);
  };
  PointArrayList.prototype.setY_5wr77w$ = function (index, y) {
    this.yList_0.set_5wr77w$(index, y);
  };
  PointArrayList.prototype.setXY_w4xg1m$ = function (index, x, y) {
    this.xList_0.set_5wr77w$(index, x);
    this.yList_0.set_5wr77w$(index, y);
  };
  PointArrayList.prototype.transform_onv4sa$ = function (matrix) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var x = this.getX_za3lpa$(n);
      var y = this.getY_za3lpa$(n);
      this.setX_5wr77w$(n, transformX(matrix, x, y));
      this.setY_5wr77w$(n, transformY(matrix, x, y));
    }
  };
  PointArrayList.prototype.toString = function () {
    var tmp$;
    var sb = StringBuilder_init();
    sb.append_s8itvh$(91);
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var x = this.getX_za3lpa$(n);
      var y = this.getY_za3lpa$(n);
      if (n !== 0) {
        sb.append_61zpoe$(', ');
      }sb.append_s8itvh$(40);
      if (x === round(x))
        sb.append_s8jyv4$(numberToInt(x));
      else
        sb.append_s8jyv4$(x);
      sb.append_61zpoe$(', ');
      if (y === round(y))
        sb.append_s8jyv4$(numberToInt(y));
      else
        sb.append_s8jyv4$(y);
      sb.append_s8itvh$(41);
    }
    sb.append_s8itvh$(93);
    return sb.toString();
  };
  PointArrayList.prototype.swap_vux9f0$ = function (indexA, indexB) {
    this.xList_0.swapIndices_vux9f0$(indexA, indexB);
    this.yList_0.swapIndices_vux9f0$(indexA, indexB);
  };
  PointArrayList.prototype.reverse = function () {
    var tmp$;
    tmp$ = this.size / 2 | 0;
    for (var n = 0; n < tmp$; n++)
      this.swap_vux9f0$(0 + n | 0, this.size - 1 - n | 0);
  };
  PointArrayList.prototype.sort = function () {
    genericSort(this, 0, this.size - 1 | 0, PointArrayList$PointSortOpts_getInstance());
  };
  function PointArrayList$PointSortOpts() {
    PointArrayList$PointSortOpts_instance = this;
    SortOps.call(this);
  }
  PointArrayList$PointSortOpts.prototype.compare_8olpll$ = function (p, l, r) {
    return Point$Companion_getInstance().compare_6y0v78$(p.getX_za3lpa$(l), p.getY_za3lpa$(l), p.getX_za3lpa$(r), p.getY_za3lpa$(r));
  };
  PointArrayList$PointSortOpts.prototype.swap_8olpll$ = function (subject, indexL, indexR) {
    subject.swap_vux9f0$(indexL, indexR);
  };
  PointArrayList$PointSortOpts.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PointSortOpts',
    interfaces: [SortOps]
  };
  var PointArrayList$PointSortOpts_instance = null;
  function PointArrayList$PointSortOpts_getInstance() {
    if (PointArrayList$PointSortOpts_instance === null) {
      new PointArrayList$PointSortOpts();
    }return PointArrayList$PointSortOpts_instance;
  }
  PointArrayList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointArrayList',
    interfaces: [IPointArrayList]
  };
  var add_11 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.add_dyo8bs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.add_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  function add_12($receiver, p) {
    return $receiver.add_lu1900$(p._x, p._y);
  }
  function add_13($receiver, other) {
    var tmp$;
    tmp$ = other.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.add_lu1900$(other.getX_za3lpa$(n), other.getY_za3lpa$(n));
    return $receiver;
  }
  var setX = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setX_mx0hxg$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, index, x) {
      $receiver.setX_5wr77w$(index, numberToDouble(x));
    };
  }));
  var setY = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setY_mx0hxg$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, index, y) {
      $receiver.setY_5wr77w$(index, numberToDouble(y));
    };
  }));
  var setXY = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setXY_kl8v7y$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, index, x, y) {
      $receiver.setXY_w4xg1m$(index, numberToDouble(x), numberToDouble(y));
    };
  }));
  function setX_0($receiver, index, x) {
    $receiver.setX_5wr77w$(index, x);
  }
  function setY_0($receiver, index, y) {
    $receiver.setY_5wr77w$(index, y);
  }
  function setXY_0($receiver, index, x, y) {
    $receiver.setXY_w4xg1m$(index, x, y);
  }
  function setX_1($receiver, index, x) {
    $receiver.setX_5wr77w$(index, x);
  }
  function setY_1($receiver, index, y) {
    $receiver.setY_5wr77w$(index, y);
  }
  function setXY_1($receiver, index, x, y) {
    $receiver.setXY_w4xg1m$(index, x, y);
  }
  function IPointIntArrayList() {
  }
  IPointIntArrayList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IPointIntArrayList',
    interfaces: []
  };
  function PointIntArrayList(capacity) {
    PointIntArrayList$Companion_getInstance();
    if (capacity === void 0)
      capacity = 7;
    this.xList_0 = new IntArrayList(capacity);
    this.yList_0 = new IntArrayList(capacity);
  }
  Object.defineProperty(PointIntArrayList.prototype, 'size', {
    get: function () {
      return this.xList_0.size;
    }
  });
  PointIntArrayList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  PointIntArrayList.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  PointIntArrayList.prototype.clear = function () {
    this.xList_0.clear();
    this.yList_0.clear();
  };
  function PointIntArrayList$Companion() {
    PointIntArrayList$Companion_instance = this;
  }
  PointIntArrayList$Companion.prototype.invoke_3liz77$ = function (capacity, callback) {
    if (capacity === void 0)
      capacity = 7;
    var $receiver = new PointIntArrayList(capacity);
    callback($receiver);
    return $receiver;
  };
  function PointIntArrayList$Companion$invoke$lambda(closure$points) {
    return function ($receiver) {
      for (var n = 0; n !== closure$points.size; ++n) {
        $receiver.add_vux9f0$(closure$points.get_za3lpa$(n).x, closure$points.get_za3lpa$(n).y);
      }
      return Unit;
    };
  }
  PointIntArrayList$Companion.prototype.invoke_oulxyx$ = function (points) {
    return PointIntArrayList$Companion_getInstance().invoke_3liz77$(points.size, PointIntArrayList$Companion$invoke$lambda(points));
  };
  function PointIntArrayList$Companion$invoke$lambda_0(closure$points) {
    return function ($receiver) {
      for (var n = 0; n !== closure$points.length; ++n) {
        $receiver.add_vux9f0$(closure$points[n].x, closure$points[n].y);
      }
      return Unit;
    };
  }
  PointIntArrayList$Companion.prototype.invoke_evk7jf$ = function (points) {
    return PointIntArrayList$Companion_getInstance().invoke_3liz77$(points.length, PointIntArrayList$Companion$invoke$lambda_0(points));
  };
  PointIntArrayList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PointIntArrayList$Companion_instance = null;
  function PointIntArrayList$Companion_getInstance() {
    if (PointIntArrayList$Companion_instance === null) {
      new PointIntArrayList$Companion();
    }return PointIntArrayList$Companion_instance;
  }
  PointIntArrayList.prototype.add_vux9f0$ = function (x, y) {
    this.xList_0.plusAssign_za3lpa$(x);
    this.yList_0.plusAssign_za3lpa$(y);
    return this;
  };
  PointIntArrayList.prototype.fastForEach_nnebrl$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.PointIntArrayList.fastForEach_nnebrl$', function (block) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      block(this.getX_za3lpa$(n), this.getY_za3lpa$(n));
    }
  });
  PointIntArrayList.prototype.toList = function () {
    var out = ArrayList_init_0();
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var x = this.getX_za3lpa$(n);
      var y = this.getY_za3lpa$(n);
      out.add_11rb$(PointInt$Companion_getInstance().invoke_vux9f0$(x, y));
    }
    return out;
  };
  PointIntArrayList.prototype.getX_za3lpa$ = function (index) {
    return this.xList_0.getAt_za3lpa$(index);
  };
  PointIntArrayList.prototype.getY_za3lpa$ = function (index) {
    return this.yList_0.getAt_za3lpa$(index);
  };
  PointIntArrayList.prototype.setX_vux9f0$ = function (index, x) {
    this.xList_0.set_vux9f0$(index, x);
  };
  PointIntArrayList.prototype.setY_vux9f0$ = function (index, y) {
    this.yList_0.set_vux9f0$(index, y);
  };
  PointIntArrayList.prototype.setXY_qt1dr2$ = function (index, x, y) {
    this.xList_0.set_vux9f0$(index, x);
    this.yList_0.set_vux9f0$(index, y);
  };
  PointIntArrayList.prototype.toString = function () {
    var tmp$;
    var sb = StringBuilder_init();
    sb.append_s8itvh$(91);
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var x = this.getX_za3lpa$(n);
      var y = this.getY_za3lpa$(n);
      if (n !== 0) {
        sb.append_61zpoe$(', ');
      }sb.append_s8itvh$(40);
      sb.append_s8jyv4$(x);
      sb.append_61zpoe$(', ');
      sb.append_s8jyv4$(y);
      sb.append_s8itvh$(41);
    }
    sb.append_s8itvh$(93);
    return sb.toString();
  };
  PointIntArrayList.prototype.swap_vux9f0$ = function (indexA, indexB) {
    this.xList_0.swapIndices_vux9f0$(indexA, indexB);
    this.yList_0.swapIndices_vux9f0$(indexA, indexB);
  };
  PointIntArrayList.prototype.reverse = function () {
    var tmp$;
    tmp$ = this.size / 2 | 0;
    for (var n = 0; n < tmp$; n++)
      this.swap_vux9f0$(0 + n | 0, this.size - 1 - n | 0);
  };
  PointIntArrayList.prototype.sort = function () {
    genericSort(this, 0, this.size - 1 | 0, PointIntArrayList$PointSortOpts_getInstance());
  };
  function PointIntArrayList$PointSortOpts() {
    PointIntArrayList$PointSortOpts_instance = this;
    SortOps.call(this);
  }
  PointIntArrayList$PointSortOpts.prototype.compare_8olpll$ = function (p, l, r) {
    return PointInt$Companion_getInstance().compare_tjonv8$(p.getX_za3lpa$(l), p.getY_za3lpa$(l), p.getX_za3lpa$(r), p.getY_za3lpa$(r));
  };
  PointIntArrayList$PointSortOpts.prototype.swap_8olpll$ = function (subject, indexL, indexR) {
    subject.swap_vux9f0$(indexL, indexR);
  };
  PointIntArrayList$PointSortOpts.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PointSortOpts',
    interfaces: [SortOps]
  };
  var PointIntArrayList$PointSortOpts_instance = null;
  function PointIntArrayList$PointSortOpts_getInstance() {
    if (PointIntArrayList$PointSortOpts_instance === null) {
      new PointIntArrayList$PointSortOpts();
    }return PointIntArrayList$PointSortOpts_instance;
  }
  PointIntArrayList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointIntArrayList',
    interfaces: [IPointIntArrayList]
  };
  function add_14($receiver, p) {
    return $receiver.add_vux9f0$(p.x, p.y);
  }
  function add_15($receiver, other) {
    var tmp$;
    tmp$ = other.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.add_vux9f0$(other.getX_za3lpa$(n), other.getY_za3lpa$(n));
    return $receiver;
  }
  function getPoint_0($receiver, index) {
    return PointInt$Companion_getInstance().invoke_vux9f0$($receiver.getX_za3lpa$(index), $receiver.getY_za3lpa$(index));
  }
  function getIPoint_0($receiver, index) {
    return IPointInt$Companion_getInstance().invoke_vux9f0$($receiver.getX_za3lpa$(index), $receiver.getY_za3lpa$(index));
  }
  function toPoints_0($receiver) {
    var $receiver_0 = until(0, $receiver.size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(getPoint_0($receiver, item));
    }
    return destination;
  }
  function toIPoints_0($receiver) {
    var $receiver_0 = until(0, $receiver.size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(getIPoint_0($receiver, item));
    }
    return destination;
  }
  function contains_5($receiver, x, y) {
    var tmp$;
    tmp$ = $receiver.size;
    for (var n = 0; n < tmp$; n++)
      if ($receiver.getX_za3lpa$(n) === x && $receiver.getY_za3lpa$(n) === y)
        return true;
    return false;
  }
  function EulerRotation(x, y, z) {
    EulerRotation$Companion_getInstance();
    if (x === void 0)
      x = get_degrees_1(0);
    if (y === void 0)
      y = get_degrees_1(0);
    if (z === void 0)
      z = get_degrees_1(0);
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function EulerRotation$Companion() {
    EulerRotation$Companion_instance = this;
  }
  EulerRotation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EulerRotation$Companion_instance = null;
  function EulerRotation$Companion_getInstance() {
    if (EulerRotation$Companion_instance === null) {
      new EulerRotation$Companion();
    }return EulerRotation$Companion_instance;
  }
  EulerRotation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EulerRotation',
    interfaces: []
  };
  EulerRotation.prototype.component1 = function () {
    return this.x;
  };
  EulerRotation.prototype.component2 = function () {
    return this.y;
  };
  EulerRotation.prototype.component3 = function () {
    return this.z;
  };
  EulerRotation.prototype.copy_p5makv$ = function (x, y, z) {
    return new EulerRotation(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  EulerRotation.prototype.toString = function () {
    return 'EulerRotation(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + ')';
  };
  EulerRotation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  EulerRotation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Quaternion(x, y, z, w) {
    Quaternion$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 1.0;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  Quaternion.prototype.get_za3lpa$ = function (index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
  };
  Quaternion.prototype.setToFunc_2xafxe$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Quaternion.setToFunc_2xafxe$', function (callback) {
    return this.setTo_6y0v78$(callback(0), callback(1), callback(2), callback(3));
  });
  Quaternion.prototype.setTo_6y0v78$ = function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  };
  function Quaternion$Companion() {
    Quaternion$Companion_instance = this;
  }
  Quaternion$Companion.prototype.dotProduct_tyayac$ = function (l, r) {
    return l.x * r.x + l.y * r.y + l.z * r.z + l.w * r.w;
  };
  Quaternion$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Quaternion$Companion_instance = null;
  function Quaternion$Companion_getInstance() {
    if (Quaternion$Companion_instance === null) {
      new Quaternion$Companion();
    }return Quaternion$Companion_instance;
  }
  Quaternion.prototype.normalize_v317bm$ = function (v) {
    if (v === void 0)
      v = this;
    var length = 1.0 / Vector3D$Companion_getInstance().length_6y0v78$(v.x, v.y, v.z, v.w);
    return this.setTo_6y0v78$(v.x / length, v.y / length, v.z / length, v.w / length);
  };
  Quaternion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quaternion',
    interfaces: []
  };
  Quaternion.prototype.component1 = function () {
    return this.x;
  };
  Quaternion.prototype.component2 = function () {
    return this.y;
  };
  Quaternion.prototype.component3 = function () {
    return this.z;
  };
  Quaternion.prototype.component4 = function () {
    return this.w;
  };
  Quaternion.prototype.copy_6y0v78$ = function (x, y, z, w) {
    return new Quaternion(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Quaternion.prototype.toString = function () {
    return 'Quaternion(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', z=' + Kotlin.toString(this.z)) + (', w=' + Kotlin.toString(this.w)) + ')';
  };
  Quaternion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Quaternion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  var Quaternion_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Quaternion_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Quaternion_init = _.com.soywiz.korma.geom.Quaternion;
    return function (x, y, z, w) {
      return new Quaternion_init(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  function Quaternion_1(x, y, z, w) {
    return new Quaternion(x, y, z, w);
  }
  function Quaternion_2(x, y, z, w) {
    return new Quaternion(x, y, z, w);
  }
  var setQuaternion = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setQuaternion_kwl54s$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var quaternionToEuler = _.com.soywiz.korma.geom.quaternionToEuler_6m5xkn$;
    return function ($receiver, x, y, z, w) {
      return quaternionToEuler(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w), $receiver);
    };
  }));
  function setQuaternion_0($receiver, x, y, z, w) {
    return quaternionToEuler_3(x, y, z, w, $receiver);
  }
  function setQuaternion_1($receiver, x, y, z, w) {
    return quaternionToEuler_3(x, y, z, w, $receiver);
  }
  function setQuaternion_2($receiver, x, y, z, w) {
    return quaternionToEuler_3(x, y, z, w, $receiver);
  }
  function setQuaternion_3($receiver, quaternion) {
    return quaternionToEuler_0(quaternion.x, quaternion.y, quaternion.z, quaternion.w, $receiver);
  }
  function setTo_0($receiver, x, y, z) {
    $receiver.x = x;
    $receiver.y = y;
    $receiver.z = z;
    return $receiver;
  }
  function setTo_1($receiver, other) {
    return setTo_0($receiver, other.x, other.y, other.z);
  }
  function setEuler($receiver, x, y, z) {
    return eulerToQuaternion_0(x, y, z, $receiver);
  }
  function setEuler_0($receiver, euler) {
    return eulerToQuaternion(euler, $receiver);
  }
  function setTo_2($receiver, euler) {
    return eulerToQuaternion(euler, $receiver);
  }
  var setTo_3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setTo_u3d1mb$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y, z, w) {
      return $receiver.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  function setTo_4($receiver, x, y, z, w) {
    return $receiver.setTo_6y0v78$(x, y, z, w);
  }
  function setTo_5($receiver, x, y, z, w) {
    return $receiver.setTo_6y0v78$(x, y, z, w);
  }
  var copyFrom_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.copyFrom_3rltyn$', function ($receiver, other) {
    return $receiver.setTo_6y0v78$(other.x, other.y, other.z, other.w);
  });
  var setTo_6 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setTo_3rltyn$', function ($receiver, other) {
    return $receiver.setTo_6y0v78$(other.x, other.y, other.z, other.w);
  });
  var tempQuat;
  function toMatrix($receiver, out) {
    if (out === void 0)
      out = new Matrix3D();
    return toMatrix_0(setEuler_0(tempQuat, $receiver), out);
  }
  function toMatrix_0($receiver, out) {
    if (out === void 0)
      out = new Matrix3D();
    return quaternionToMatrix($receiver, out);
  }
  function eulerToQuaternion(euler, quaternion) {
    if (quaternion === void 0)
      quaternion = new Quaternion();
    return eulerToQuaternion_0(euler.x, euler.y, euler.z, quaternion);
  }
  function quaternionToEuler(q, euler) {
    if (euler === void 0)
      euler = new EulerRotation();
    return quaternionToEuler_0(q.x, q.y, q.z, q.w, euler);
  }
  function quaternionToEuler_0(x, y, z, w, euler) {
    if (euler === void 0)
      euler = new EulerRotation();
    return quaternionToEuler_3(x, y, z, w, euler);
  }
  function quaternionToEuler_1(x, y, z, w, euler) {
    if (euler === void 0)
      euler = new EulerRotation();
    return quaternionToEuler_3(x, y, z, w, euler);
  }
  var quaternionToEuler_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.quaternionToEuler_4surfl$', wrapFunction(function () {
    var EulerRotation_init = _.com.soywiz.korma.geom.EulerRotation;
    var numberToDouble = Kotlin.numberToDouble;
    var quaternionToEuler = _.com.soywiz.korma.geom.quaternionToEuler_6m5xkn$;
    return function (x, y, z, w, euler) {
      if (euler === void 0)
        euler = new EulerRotation_init();
      return quaternionToEuler(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w), euler);
    };
  }));
  function eulerToQuaternion_0(roll, pitch, yaw, quaternion) {
    if (quaternion === void 0)
      quaternion = new Quaternion();
    var x = times(roll, 0.5).radians;
    var cr = Math_0.cos(x);
    var x_0 = times(roll, 0.5).radians;
    var sr = Math_0.sin(x_0);
    var x_1 = times(pitch, 0.5).radians;
    var cp = Math_0.cos(x_1);
    var x_2 = times(pitch, 0.5).radians;
    var sp = Math_0.sin(x_2);
    var x_3 = times(yaw, 0.5).radians;
    var cy = Math_0.cos(x_3);
    var x_4 = times(yaw, 0.5).radians;
    var sy = Math_0.sin(x_4);
    return quaternion.setTo_6y0v78$(cy * cp * sr - sy * sp * cr, sy * cp * sr + cy * sp * cr, sy * cp * cr - cy * sp * sr, cy * cp * cr + sy * sp * sr);
  }
  function quaternionToEuler_3(x, y, z, w, euler) {
    if (euler === void 0)
      euler = new EulerRotation();
    var tmp$;
    var sinrCosp = +2.0 * (w * x + y * z);
    var cosrCosp = +1.0 - 2.0 * (x * x + y * y);
    var roll = Math_0.atan2(sinrCosp, cosrCosp);
    var sinp = +2.0 * (w * y - z * x);
    if (Math_0.abs(sinp) >= 1)
      tmp$ = sinp > 0 ? math.PI / 2 : -math.PI / 2;
    else {
      tmp$ = Math_0.asin(sinp);
    }
    var pitch = tmp$;
    var sinyCosp = +2.0 * (w * z + x * y);
    var cosyCosp = +1.0 - 2.0 * (y * y + z * z);
    var yaw = Math_0.atan2(sinyCosp, cosyCosp);
    return setTo_0(euler, get_radians(roll), get_radians(pitch), get_radians(yaw));
  }
  var tempMat1_0;
  var tempMat2;
  function quaternionToMatrix(quat, out, temp1, temp2) {
    if (out === void 0)
      out = new Matrix3D();
    if (temp1 === void 0)
      temp1 = tempMat1_0;
    if (temp2 === void 0)
      temp2 = tempMat2;
    setRows_0(temp1, quat.w, quat.z, -quat.y, quat.x, -quat.z, quat.w, quat.x, quat.y, quat.y, -quat.x, quat.w, quat.z, -quat.x, -quat.y, -quat.z, quat.w);
    setRows_0(temp2, quat.w, quat.z, -quat.y, -quat.x, -quat.z, quat.w, quat.x, -quat.y, quat.y, -quat.x, quat.w, -quat.z, quat.x, quat.y, quat.z, quat.w);
    return out.multiply_lb2hp0$(temp1, temp2);
  }
  function setFromRotationMatrix($receiver, m) {
    var q = $receiver;
    var t = m.data[0] + m.data[5] + m.data[10];
    if (t > 0) {
      var x = t + 1.0;
      var s = 0.5 / Math_0.sqrt(x);
      q.setTo_6y0v78$((m.data[6] - m.data[9]) * s, (m.data[8] - m.data[2]) * s, (m.data[1] - m.data[4]) * s, 0.25 / s);
    } else {
      var tmp$ = m.data[0] > m.data[5];
      if (tmp$) {
        tmp$ = m.data[0] > m.data[10];
      }if (tmp$) {
        var x_0 = 1.0 + m.data[0] - m.data[5] - m.data[10];
        var s_0 = 2.0 * Math_0.sqrt(x_0);
        q.setTo_6y0v78$(0.25 * s_0, (m.data[4] + m.data[1]) / s_0, (m.data[8] + m.data[2]) / s_0, (m.data[6] - m.data[9]) / s_0);
      } else {
        if (m.data[5] > m.data[10]) {
          var x_1 = 1.0 + m.data[5] - m.data[0] - m.data[10];
          var s_1 = 2.0 * Math_0.sqrt(x_1);
          q.setTo_6y0v78$((m.data[4] + m.data[1]) / s_1, 0.25 * s_1, (m.data[9] + m.data[6]) / s_1, (m.data[8] - m.data[2]) / s_1);
        } else {
          var x_2 = 1.0 + m.data[10] - m.data[0] - m.data[5];
          var s_2 = 2.0 * Math_0.sqrt(x_2);
          q.setTo_6y0v78$((m.data[8] + m.data[2]) / s_2, (m.data[9] + m.data[6]) / s_2, 0.25 * s_2, (m.data[1] - m.data[4]) / s_2);
        }
      }
    }
    return $receiver;
  }
  function unaryMinus_0($receiver) {
    return new Quaternion(-$receiver.x, -$receiver.y, -$receiver.z, -$receiver.w);
  }
  function plus_2($receiver, other) {
    return new Quaternion($receiver.x + other.x, $receiver.y + other.y, $receiver.z + other.z, $receiver.w + other.w);
  }
  function minus_2($receiver, other) {
    return new Quaternion($receiver.x - other.x, $receiver.y - other.y, $receiver.z - other.z, $receiver.w - other.w);
  }
  function times_10($receiver, scale) {
    return new Quaternion($receiver.x * scale, $receiver.y * scale, $receiver.z * scale, $receiver.w * scale);
  }
  function times_11($receiver, scale) {
    return times_10(scale, $receiver);
  }
  function negate($receiver) {
    return $receiver.setTo_6y0v78$(-$receiver.x, -$receiver.y, -$receiver.z, -$receiver.w);
  }
  function setToFunc($receiver, l, r, func) {
    return $receiver.setTo_6y0v78$(func(l.x, r.x), func(l.y, r.y), func(l.z, r.z), func(l.w, r.w));
  }
  function setToFunc_0($receiver, l, r, func) {
    return $receiver.setTo_7b5o5w$(func(l.x, r.x), func(l.y, r.y), func(l.z, r.z), func(l.w, r.w));
  }
  var tleft;
  var tright;
  function setToSlerp$lambda(closure$t) {
    return function (l, r) {
      return l + closure$t * (r - l);
    };
  }
  function setToSlerp$lambda_0(closure$s0, closure$s1) {
    return function (l, r) {
      return closure$s0 * l + closure$s1 * r;
    };
  }
  function setToSlerp($receiver, left, right, t) {
    var tleft_0 = tleft.setTo_6y0v78$(left.x, left.y, left.z, left.w).normalize_v317bm$();
    var tright_0 = tright.setTo_6y0v78$(right.x, right.y, right.z, right.w).normalize_v317bm$();
    var dot = Quaternion$Companion_getInstance().dotProduct_tyayac$(tleft_0, right);
    if (dot < 0.0) {
      negate(tright_0);
      dot = -dot;
    }if (dot > 0.99995)
      return setToFunc($receiver, tleft_0, tright_0, setToSlerp$lambda(t));
    var x = dot;
    var angle0 = Math_0.acos(x);
    var angle1 = angle0 * t;
    var s1 = Math_0.sin(angle1) / Math_0.sin(angle0);
    var s0 = Math_0.cos(angle1) - dot * s1;
    return setToFunc($receiver, tleft_0, tright_0, setToSlerp$lambda_0(s0, s1));
  }
  function setToNlerp($receiver, left, right, t) {
    var sign = Quaternion$Companion_getInstance().dotProduct_tyayac$(left, right) < 0 ? -1 : 1;
    return $receiver.setTo_6y0v78$((1.0 - t) * left.get_za3lpa$(0) + t * right.get_za3lpa$(0) * sign, (1.0 - t) * left.get_za3lpa$(1) + t * right.get_za3lpa$(1) * sign, (1.0 - t) * left.get_za3lpa$(2) + t * right.get_za3lpa$(2) * sign, (1.0 - t) * left.get_za3lpa$(3) + t * right.get_za3lpa$(3) * sign).normalize_v317bm$();
  }
  function setToInterpolated_0($receiver, left, right, t) {
    return setToSlerp($receiver, left, right, t);
  }
  function IRectangle() {
    IRectangle$Companion_getInstance();
  }
  function IRectangle$Companion() {
    IRectangle$Companion_instance = this;
  }
  IRectangle$Companion.prototype.invoke_6y0v78$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.IRectangle.Companion.invoke_6y0v78$', wrapFunction(function () {
    var Rectangle_init = _.com.soywiz.korma.geom.Rectangle;
    return function (x, y, width, height) {
      return new Rectangle_init(x, y, width, height);
    };
  }));
  IRectangle$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.IRectangle.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      return new Rectangle(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  IRectangle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IRectangle$Companion_instance = null;
  function IRectangle$Companion_getInstance() {
    if (IRectangle$Companion_instance === null) {
      new IRectangle$Companion();
    }return IRectangle$Companion_instance;
  }
  IRectangle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IRectangle',
    interfaces: []
  };
  function get_x_0($receiver) {
    return $receiver._x;
  }
  function get_y_0($receiver) {
    return $receiver._y;
  }
  function get_width($receiver) {
    return $receiver._width;
  }
  function get_height($receiver) {
    return $receiver._height;
  }
  function get_left($receiver) {
    return $receiver._x;
  }
  function get_top($receiver) {
    return $receiver._y;
  }
  function get_right($receiver) {
    return $receiver._x + $receiver._width;
  }
  function get_bottom($receiver) {
    return $receiver._y + $receiver._height;
  }
  function Rectangle(x, y, width, height) {
    Rectangle$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(Rectangle.prototype, '_x', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(Rectangle.prototype, '_y', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(Rectangle.prototype, '_width', {
    get: function () {
      return this.width;
    }
  });
  Object.defineProperty(Rectangle.prototype, '_height', {
    get: function () {
      return this.height;
    }
  });
  function Rectangle$Companion() {
    Rectangle$Companion_instance = this;
  }
  Rectangle$Companion.prototype.invoke = function () {
    return new Rectangle(0.0, 0.0, 0.0, 0.0);
  };
  Rectangle$Companion.prototype.invoke_tjonv8$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Rectangle.Companion.invoke_tjonv8$', wrapFunction(function () {
    var Rectangle_init = _.com.soywiz.korma.geom.Rectangle;
    return function (x, y, width, height) {
      return new Rectangle_init(x, y, width, height);
    };
  }));
  Rectangle$Companion.prototype.fromBounds_6y0v78$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Rectangle.Companion.fromBounds_6y0v78$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    return function (left, top, right, bottom) {
      return Rectangle.Companion.invoke().setBounds_6y0v78$(left, top, right, bottom);
    };
  }));
  Rectangle$Companion.prototype.fromBounds_tjonv8$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Rectangle.Companion.fromBounds_tjonv8$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    return function (left, top, right, bottom) {
      return Rectangle.Companion.invoke().setBounds_tjonv8$(left, top, right, bottom);
    };
  }));
  Rectangle$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Rectangle.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Rectangle_init = _.com.soywiz.korma.geom.Rectangle;
    return function (x, y, width, height) {
      return new Rectangle_init(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Rectangle$Companion.prototype.fromBounds_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Rectangle.Companion.fromBounds_1ugm5o$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (left, top, right, bottom) {
      return Rectangle.Companion.invoke().setBounds_6y0v78$(numberToDouble(left), numberToDouble(top), numberToDouble(right), numberToDouble(bottom));
    };
  }));
  Rectangle$Companion.prototype.isContainedIn_z5mqcu$ = function (a, b) {
    return a.x >= b.x && a.y >= b.y && a.x + a.width <= b.x + b.width && a.y + a.height <= b.y + b.height;
  };
  Rectangle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Rectangle$Companion_instance = null;
  function Rectangle$Companion_getInstance() {
    if (Rectangle$Companion_instance === null) {
      new Rectangle$Companion();
    }return Rectangle$Companion_instance;
  }
  Object.defineProperty(Rectangle.prototype, 'isEmpty', {
    get: function () {
      return this.area === 0.0;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'isNotEmpty', {
    get: function () {
      return this.area !== 0.0;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'area', {
    get: function () {
      return this.width * this.height;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'left', {
    get: function () {
      return this.x;
    },
    set: function (value) {
      this.x = value;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'top', {
    get: function () {
      return this.y;
    },
    set: function (value) {
      this.y = value;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'right', {
    get: function () {
      return this.x + this.width;
    },
    set: function (value) {
      this.width = value - this.x;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'bottom', {
    get: function () {
      return this.y + this.height;
    },
    set: function (value) {
      this.height = value - this.y;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'position', {
    get: function () {
      return new Point(this.x, this.y);
    }
  });
  Object.defineProperty(Rectangle.prototype, 'size', {
    get: function () {
      return Size$Companion_getInstance().invoke_lu1900$(this.width, this.height);
    }
  });
  Rectangle.prototype.setTo_6y0v78$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.setTo_tjonv8$ = function (x, y, width, height) {
    return this.setTo_6y0v78$(x, y, width, height);
  };
  Rectangle.prototype.setTo_7b5o5w$ = function (x, y, width, height) {
    return this.setTo_6y0v78$(x, y, width, height);
  };
  Rectangle.prototype.copyFrom_2da8yn$ = function (that) {
    return this.setTo_6y0v78$(that.x, that.y, that.width, that.height);
  };
  Rectangle.prototype.setBounds_6y0v78$ = function (left, top, right, bottom) {
    return this.setTo_6y0v78$(left, top, right - left, bottom - top);
  };
  Rectangle.prototype.setBounds_tjonv8$ = function (left, top, right, bottom) {
    return this.setBounds_6y0v78$(left, top, right, bottom);
  };
  Rectangle.prototype.setBounds_7b5o5w$ = function (left, top, right, bottom) {
    return this.setBounds_6y0v78$(left, top, right, bottom);
  };
  Rectangle.prototype.times_14dthe$ = function (scale) {
    return new Rectangle(this.x * scale, this.y * scale, this.width * scale, this.height * scale);
  };
  Rectangle.prototype.div_14dthe$ = function (scale) {
    return new Rectangle(this.x / scale, this.y / scale, this.width / scale, this.height / scale);
  };
  Rectangle.prototype.times_mx4ult$ = function (scale) {
    return this.times_14dthe$(scale);
  };
  Rectangle.prototype.div_mx4ult$ = function (scale) {
    return this.div_14dthe$(scale);
  };
  Rectangle.prototype.times_za3lpa$ = function (scale) {
    return this.times_14dthe$(scale);
  };
  Rectangle.prototype.div_za3lpa$ = function (scale) {
    return this.div_14dthe$(scale);
  };
  Rectangle.prototype.contains_2da8yn$ = function (that) {
    return Rectangle$Companion_getInstance().isContainedIn_z5mqcu$(that, this);
  };
  Rectangle.prototype.contains_4l17gg$ = function (that) {
    return this.contains_lu1900$(that.x, that.y);
  };
  Rectangle.prototype.contains_lu1900$ = function (x, y) {
    return x >= this.left && x < this.right && (y >= this.top && y < this.bottom);
  };
  Rectangle.prototype.contains_dleff0$ = function (x, y) {
    return this.contains_lu1900$(x, y);
  };
  Rectangle.prototype.contains_vux9f0$ = function (x, y) {
    return this.contains_lu1900$(x, y);
  };
  Rectangle.prototype.intersects_2da8yn$ = function (that) {
    return this.intersectsX_2da8yn$(that) && this.intersectsY_2da8yn$(that);
  };
  Rectangle.prototype.intersectsX_2da8yn$ = function (that) {
    return that.left <= this.right && that.right >= this.left;
  };
  Rectangle.prototype.intersectsY_2da8yn$ = function (that) {
    return that.top <= this.bottom && that.bottom >= this.top;
  };
  Rectangle.prototype.setToIntersection_z5mqcu$ = function (a, b) {
    a.intersection_z5mqcu$(b, this);
    return this;
  };
  Rectangle.prototype.intersection_2da8yn$ = function (that) {
    return this.intersection_z5mqcu$(that, Rectangle$Companion_getInstance().invoke());
  };
  Rectangle.prototype.intersection_z5mqcu$ = function (that, target) {
    if (target === void 0)
      target = Rectangle$Companion_getInstance().invoke();
    var tmp$;
    if (this.intersects_2da8yn$(that)) {
      var a = this.left;
      var b = that.left;
      var tmp$_0 = Math_0.max(a, b);
      var a_0 = this.top;
      var b_0 = that.top;
      var tmp$_1 = Math_0.max(a_0, b_0);
      var a_1 = this.right;
      var b_1 = that.right;
      var tmp$_2 = Math_0.min(a_1, b_1);
      var a_2 = this.bottom;
      var b_2 = that.bottom;
      tmp$ = target.setBounds_6y0v78$(tmp$_0, tmp$_1, tmp$_2, Math_0.min(a_2, b_2));
    } else
      tmp$ = null;
    return tmp$;
  };
  Rectangle.prototype.displaced_lu1900$ = function (dx, dy) {
    return new Rectangle(this.x + dx, this.y + dy, this.width, this.height);
  };
  Rectangle.prototype.displace_lu1900$ = function (dx, dy) {
    return this.setTo_6y0v78$(this.x + dx, this.y + dy, this.width, this.height);
  };
  Rectangle.prototype.displaced_dleff0$ = function (dx, dy) {
    return this.displaced_lu1900$(dx, dy);
  };
  Rectangle.prototype.displace_dleff0$ = function (dx, dy) {
    return this.displace_lu1900$(dx, dy);
  };
  Rectangle.prototype.displaced_vux9f0$ = function (dx, dy) {
    return this.displaced_lu1900$(dx, dy);
  };
  Rectangle.prototype.displace_vux9f0$ = function (dx, dy) {
    return this.displace_lu1900$(dx, dy);
  };
  Rectangle.prototype.place_5ouhs4$ = function (item, anchor, scale, out) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    return this.place_meekrp$(item.width, item.height, anchor, scale, out);
  };
  Rectangle.prototype.place_meekrp$ = function (width, height, anchor, scale, out) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    var ow = scale.transformW_6y0v78$(width, height, this.width, this.height);
    var oh = scale.transformH_6y0v78$(width, height, this.width, this.height);
    var x = (this.width - ow) * anchor.sx;
    var y = (this.height - oh) * anchor.sy;
    return out.setTo_6y0v78$(x, y, ow, oh);
  };
  Rectangle.prototype.inflate_lu1900$ = function (dx, dy) {
    this.x -= dx;
    this.width += 2 * dx;
    this.y -= dy;
    this.height += 2 * dy;
  };
  Rectangle.prototype.inflate_dleff0$ = function (dx, dy) {
    this.inflate_lu1900$(dx, dy);
  };
  Rectangle.prototype.inflate_vux9f0$ = function (dx, dy) {
    this.inflate_lu1900$(dx, dy);
  };
  Rectangle.prototype.clone = function () {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  Rectangle.prototype.setToAnchoredRectangle_7qw0rf$ = function (item, anchor, container) {
    return this.setToAnchoredRectangle_58bjxv$(item.size, anchor, container);
  };
  Rectangle.prototype.setToAnchoredRectangle_58bjxv$ = function (item, anchor, container) {
    return this.setTo_6y0v78$(container.x + anchor.sx * (container.width - item.width), container.y + anchor.sy * (container.height - item.height), item.width, item.height);
  };
  Rectangle.prototype.toString = function () {
    return 'Rectangle(x=' + get_niceStr_0(this.x) + ', y=' + get_niceStr_0(this.y) + ', width=' + get_niceStr_0(this.width) + ', height=' + get_niceStr_0(this.height) + ')';
  };
  Rectangle.prototype.toStringBounds = function () {
    return 'Rectangle([' + get_niceStr_0(this.left) + ',' + get_niceStr_0(this.top) + ']-[' + get_niceStr_0(this.right) + ',' + get_niceStr_0(this.bottom) + '])';
  };
  Rectangle.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return Rectangle$Companion_getInstance().invoke().setToInterpolated_bs4suk$(ratio, this, other);
  };
  Rectangle.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_6y0v78$(interpolate_1(ratio, l.x, r.x), interpolate_1(ratio, l.y, r.y), interpolate_1(ratio, l.width, r.width), interpolate_1(ratio, l.height, r.height));
  };
  Rectangle.prototype.getAnchoredPosition_fuc547$ = function (anchor, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    return out.setTo_lu1900$(this.left + this.width * anchor.sx, this.top + this.height * anchor.sy);
  };
  Rectangle.prototype.toInt = function () {
    var x = this.x;
    var y = this.y;
    var width = this.width;
    var height = this.height;
    return new RectangleInt(new Rectangle(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height)));
  };
  Rectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: [Sizeable, IRectangle, Interpolable, MutableInterpolable]
  };
  Rectangle.prototype.component1 = function () {
    return this.x;
  };
  Rectangle.prototype.component2 = function () {
    return this.y;
  };
  Rectangle.prototype.component3 = function () {
    return this.width;
  };
  Rectangle.prototype.component4 = function () {
    return this.height;
  };
  Rectangle.prototype.copy_6y0v78$ = function (x, y, width, height) {
    return new Rectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function contains_6($receiver, that) {
    return $receiver.contains_lu1900$(get_x(that), get_y(that));
  }
  var setTo_7 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setTo_dpu63g$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y, width, height) {
      return $receiver.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  var setBounds = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setBounds_dpu63g$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, left, top, right, bottom) {
      return $receiver.setBounds_6y0v78$(numberToDouble(left), numberToDouble(top), numberToDouble(right), numberToDouble(bottom));
    };
  }));
  var times_12 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.times_hnwsli$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, scale) {
      return $receiver.times_14dthe$(numberToDouble(scale));
    };
  }));
  var div_9 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.div_hnwsli$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, scale) {
      return $receiver.div_14dthe$(numberToDouble(scale));
    };
  }));
  var contains_7 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.contains_4w54kw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.contains_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  var displaced = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.displaced_4w54kw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, dx, dy) {
      return $receiver.displaced_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  var displace = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.displace_4w54kw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, dx, dy) {
      return $receiver.displace_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  var inflate = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.inflate_4w54kw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, dx, dy) {
      $receiver.inflate_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  function IRectangleInt() {
    IRectangleInt$Companion_getInstance();
  }
  function IRectangleInt$Companion() {
    IRectangleInt$Companion_instance = this;
  }
  IRectangleInt$Companion.prototype.invoke_tjonv8$ = function (x, y, width, height) {
    return RectangleInt$Companion_getInstance().invoke_tjonv8$(x, y, width, height);
  };
  IRectangleInt$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.IRectangleInt.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var RectangleInt = _.com.soywiz.korma.geom.RectangleInt;
    var numberToInt = Kotlin.numberToInt;
    return function (x, y, width, height) {
      return RectangleInt.Companion.invoke_tjonv8$(numberToInt(x), numberToInt(y), numberToInt(width), numberToInt(height));
    };
  }));
  IRectangleInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IRectangleInt$Companion_instance = null;
  function IRectangleInt$Companion_getInstance() {
    if (IRectangleInt$Companion_instance === null) {
      new IRectangleInt$Companion();
    }return IRectangleInt$Companion_instance;
  }
  IRectangleInt.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IRectangleInt',
    interfaces: []
  };
  function get_left_0($receiver) {
    return $receiver.x;
  }
  function get_top_0($receiver) {
    return $receiver.y;
  }
  function get_right_0($receiver) {
    return $receiver.x + $receiver.width | 0;
  }
  function get_bottom_0($receiver) {
    return $receiver.y + $receiver.height | 0;
  }
  function RectangleInt(rect) {
    RectangleInt$Companion_getInstance();
    this.rect = rect;
  }
  Object.defineProperty(RectangleInt.prototype, 'x', {
    get: function () {
      return numberToInt(this.rect.x);
    },
    set: function (value) {
      this.rect.x = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'y', {
    get: function () {
      return numberToInt(this.rect.y);
    },
    set: function (value) {
      this.rect.y = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'width', {
    get: function () {
      return numberToInt(this.rect.width);
    },
    set: function (value) {
      this.rect.width = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'height', {
    get: function () {
      return numberToInt(this.rect.height);
    },
    set: function (value) {
      this.rect.height = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'left', {
    get: function () {
      return numberToInt(this.rect.left);
    },
    set: function (value) {
      this.rect.left = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'top', {
    get: function () {
      return numberToInt(this.rect.top);
    },
    set: function (value) {
      this.rect.top = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'right', {
    get: function () {
      return numberToInt(this.rect.right);
    },
    set: function (value) {
      this.rect.right = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'bottom', {
    get: function () {
      return numberToInt(this.rect.bottom);
    },
    set: function (value) {
      this.rect.bottom = value;
    }
  });
  function RectangleInt$Companion() {
    RectangleInt$Companion_instance = this;
  }
  RectangleInt$Companion.prototype.invoke = function () {
    return new RectangleInt(Rectangle$Companion_getInstance().invoke());
  };
  RectangleInt$Companion.prototype.invoke_tjonv8$ = function (x, y, width, height) {
    return new RectangleInt(new Rectangle(x, y, width, height));
  };
  RectangleInt$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.RectangleInt.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    var RectangleInt_init = _.com.soywiz.korma.geom.RectangleInt;
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      return new RectangleInt_init(new Rectangle(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height)));
    };
  }));
  RectangleInt$Companion.prototype.fromBounds_tjonv8$ = function (left, top, right, bottom) {
    return RectangleInt$Companion_getInstance().invoke_tjonv8$(left, top, right - left | 0, bottom - top | 0);
  };
  RectangleInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RectangleInt$Companion_instance = null;
  function RectangleInt$Companion_getInstance() {
    if (RectangleInt$Companion_instance === null) {
      new RectangleInt$Companion();
    }return RectangleInt$Companion_instance;
  }
  RectangleInt.prototype.toString = function () {
    return 'Rectangle(x=' + this.x + ', y=' + this.y + ', width=' + this.width + ', height=' + this.height + ')';
  };
  RectangleInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectangleInt',
    interfaces: [IRectangleInt]
  };
  RectangleInt.prototype.unbox = function () {
    return this.rect;
  };
  RectangleInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rect) | 0;
    return result;
  };
  RectangleInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.rect, other.rect))));
  };
  function setTo_8($receiver, that) {
    return setTo_9($receiver, that.x, that.y, that.width, that.height);
  }
  function setTo_9($receiver, x, y, width, height) {
    $receiver.x = x;
    $receiver.y = y;
    $receiver.width = width;
    $receiver.height = height;
    return $receiver;
  }
  function setPosition($receiver, x, y) {
    $receiver.x = x;
    $receiver.y = y;
    return $receiver;
  }
  function setSize($receiver, width, height) {
    $receiver.width = width;
    $receiver.height = height;
    return $receiver;
  }
  function setBoundsTo($receiver, left, top, right, bottom) {
    return setTo_9($receiver, left, top, right - left | 0, bottom - top | 0);
  }
  function contains_8($receiver, v) {
    return v.width <= $receiver.width && v.height <= $receiver.height;
  }
  function anchoredIn($receiver, container, anchor, out) {
    if (out === void 0)
      out = RectangleInt$Companion_getInstance().invoke();
    return setTo_9(out, numberToInt((container.width - $receiver.width | 0) * anchor.sx), numberToInt((container.height - $receiver.height | 0) * anchor.sy), $receiver.width, $receiver.height);
  }
  function getAnchorPosition($receiver, anchor, out) {
    if (out === void 0)
      out = PointInt$Companion_getInstance().invoke();
    return out.setTo_vux9f0$(numberToInt($receiver.x + $receiver.width * anchor.sx), numberToInt($receiver.y + $receiver.height * anchor.sy));
  }
  function asInt_0($receiver) {
    return new RectangleInt($receiver);
  }
  function asDouble_0($receiver) {
    return $receiver.rect;
  }
  function get_int_1($receiver) {
    var x = $receiver._x;
    var y = $receiver._y;
    var width = $receiver._width;
    var height = $receiver._height;
    return new RectangleInt(new Rectangle(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height)));
  }
  function get_float_0($receiver) {
    return new Rectangle($receiver.x, $receiver.y, $receiver.width, $receiver.height);
  }
  function anchor($receiver, ax, ay) {
    return PointInt$Companion_getInstance().invoke_vux9f0$(numberToInt($receiver.x + $receiver.width * ax), numberToInt($receiver.y + $receiver.height * ay));
  }
  var anchor_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.anchor_f1v9p2$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var anchor = _.com.soywiz.korma.geom.anchor_sg85ae$;
    return function ($receiver, ax, ay) {
      return anchor($receiver, numberToDouble(ax), numberToDouble(ay));
    };
  }));
  function get_center($receiver) {
    return anchor($receiver, 0.5, 0.5);
  }
  function bounds_1($receiver, target) {
    if (target === void 0)
      target = Rectangle$Companion_getInstance().invoke();
    var tmp$;
    var first = true;
    var left = 0.0;
    var right = 0.0;
    var top = 0.0;
    var bottom = 0.0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var r = tmp$.next();
      if (first) {
        left = r.left;
        right = r.right;
        top = r.top;
        bottom = r.bottom;
        first = false;
      } else {
        var a = left;
        var b = r.left;
        left = Math_0.min(a, b);
        var a_0 = right;
        var b_0 = r.right;
        right = Math_0.max(a_0, b_0);
        var a_1 = top;
        var b_1 = r.top;
        top = Math_0.min(a_1, b_1);
        var a_2 = bottom;
        var b_2 = r.bottom;
        bottom = Math_0.max(a_2, b_2);
      }
    }
    return target.setBounds_6y0v78$(left, top, right, bottom);
  }
  function ScaleMode(transform) {
    ScaleMode$Companion_getInstance();
    this.transform = transform;
  }
  ScaleMode.prototype.transformW_6y0v78$ = function (iw, ih, cw, ch) {
    return this.transform(0, iw, ih, cw, ch);
  };
  ScaleMode.prototype.transformH_6y0v78$ = function (iw, ih, cw, ch) {
    return this.transform(1, iw, ih, cw, ch);
  };
  ScaleMode.prototype.transform_ht9s21$ = function (iw, ih, cw, ch, target) {
    if (target === void 0)
      target = Size$Companion_getInstance().invoke();
    return target.setTo_lu1900$(this.transformW_6y0v78$(iw, ih, cw, ch), this.transformH_6y0v78$(iw, ih, cw, ch));
  };
  ScaleMode.prototype.transformW_1p0gok$ = function (item, container) {
    return this.transformW_6y0v78$(item.width, item.height, container.width, container.height);
  };
  ScaleMode.prototype.transformH_1p0gok$ = function (item, container) {
    return this.transformH_6y0v78$(item.width, item.height, container.width, container.height);
  };
  ScaleMode.prototype.invoke_35cwq9$ = function (item, container, target) {
    if (target === void 0)
      target = Size$Companion_getInstance().invoke();
    return this.transform_ht9s21$(item.width, item.height, container.width, container.height, target);
  };
  ScaleMode.prototype.invoke_n3lmo2$ = function (item, container, target) {
    if (target === void 0)
      target = SizeInt$Companion_getInstance().invoke();
    return setTo_12(target, numberToInt(this.transformW_6y0v78$(item.width, item.height, container.width, container.height)), numberToInt(this.transformH_6y0v78$(item.width, item.height, container.width, container.height)));
  };
  function ScaleMode$Companion() {
    ScaleMode$Companion_instance = this;
    this.COVER = new ScaleMode(ScaleMode$Companion$COVER$lambda);
    this.SHOW_ALL = new ScaleMode(ScaleMode$Companion$SHOW_ALL$lambda);
    this.EXACT = new ScaleMode(ScaleMode$Companion$EXACT$lambda);
    this.NO_SCALE = new ScaleMode(ScaleMode$Companion$NO_SCALE$lambda);
  }
  function ScaleMode$Companion$invoke$lambda(closure$function, closure$t1, closure$t2, closure$tt) {
    return function (c, iw, ih, cw, ch) {
      closure$function(closure$t1.setTo_lu1900$(iw, ih), closure$t2.setTo_lu1900$(cw, ch), closure$tt);
      var closure$tt_0 = closure$tt;
      return c === 0 ? closure$tt_0.width : closure$tt_0.height;
    };
  }
  ScaleMode$Companion.prototype.invoke_iajk68$ = function (function_0) {
    var t1 = Size$Companion_getInstance().invoke();
    var t2 = Size$Companion_getInstance().invoke();
    var tt = Size$Companion_getInstance().invoke();
    return new ScaleMode(ScaleMode$Companion$invoke$lambda(function_0, t1, t2, tt));
  };
  function ScaleMode$Companion$COVER$lambda(c, iw, ih, cw, ch) {
    var s0 = cw / iw;
    var s1 = ch / ih;
    var s = Math_0.max(s0, s1);
    return c === 0 ? iw * s : ih * s;
  }
  function ScaleMode$Companion$SHOW_ALL$lambda(c, iw, ih, cw, ch) {
    var s0 = cw / iw;
    var s1 = ch / ih;
    var s = Math_0.min(s0, s1);
    return c === 0 ? iw * s : ih * s;
  }
  function ScaleMode$Companion$EXACT$lambda(c, iw, ih, cw, ch) {
    return c === 0 ? cw : ch;
  }
  function ScaleMode$Companion$NO_SCALE$lambda(c, iw, ih, cw, ch) {
    return c === 0 ? iw : ih;
  }
  ScaleMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScaleMode$Companion_instance = null;
  function ScaleMode$Companion_getInstance() {
    if (ScaleMode$Companion_instance === null) {
      new ScaleMode$Companion();
    }return ScaleMode$Companion_instance;
  }
  ScaleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleMode',
    interfaces: []
  };
  function applyScaleMode($receiver, container, mode, anchor, out) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    return applyScaleMode_0($receiver.size, container, mode, anchor, out);
  }
  function applyScaleMode_0($receiver, container, mode, anchor, out, tempSize) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    if (tempSize === void 0)
      tempSize = Size$Companion_getInstance().invoke();
    var outSize = applyScaleMode_3($receiver, container.size, mode, tempSize);
    var width = outSize.width;
    var height = outSize.height;
    out.setToAnchoredRectangle_7qw0rf$(new Rectangle(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height)), anchor, container);
    return out;
  }
  function applyScaleMode_1($receiver, container, mode, anchor, out, tempSize) {
    if (out === void 0)
      out = RectangleInt$Companion_getInstance().invoke();
    if (tempSize === void 0)
      tempSize = SizeInt$Companion_getInstance().invoke();
    return asInt_0(applyScaleMode_0(asDouble_1($receiver), asDouble_0(container), mode, anchor, asDouble_0(out), asDouble_1(tempSize)));
  }
  function applyScaleMode_2($receiver, container, mode, out) {
    if (out === void 0)
      out = SizeInt$Companion_getInstance().invoke_vux9f0$(0, 0);
    return mode.invoke_n3lmo2$($receiver, container, out);
  }
  function applyScaleMode_3($receiver, container, mode, out) {
    if (out === void 0)
      out = Size$Companion_getInstance().invoke_vux9f0$(0, 0);
    return mode.invoke_35cwq9$($receiver, container, out);
  }
  function fitTo($receiver, container, out) {
    if (out === void 0)
      out = SizeInt$Companion_getInstance().invoke_vux9f0$(0, 0);
    return applyScaleMode_2($receiver, container, ScaleMode$Companion_getInstance().SHOW_ALL, out);
  }
  function fitTo_0($receiver, container, out) {
    if (out === void 0)
      out = Size$Companion_getInstance().invoke_vux9f0$(0, 0);
    return applyScaleMode_3($receiver, container, ScaleMode$Companion_getInstance().SHOW_ALL, out);
  }
  function ISize() {
    ISize$Companion_getInstance();
  }
  function ISize$Companion() {
    ISize$Companion_instance = this;
  }
  ISize$Companion.prototype.invoke_lu1900$ = function (width, height) {
    return new Size(new Point(width, height));
  };
  ISize$Companion.prototype.invoke_vux9f0$ = function (width, height) {
    return new Size(new Point(width, height));
  };
  ISize$Companion.prototype.invoke_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ISize.Companion.invoke_z8e4lc$', wrapFunction(function () {
    var Point = _.com.soywiz.korma.geom.Point;
    var Size_init = _.com.soywiz.korma.geom.Size;
    var numberToDouble = Kotlin.numberToDouble;
    return function (width, height) {
      return new Size_init(new Point(numberToDouble(width), numberToDouble(height)));
    };
  }));
  ISize$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ISize$Companion_instance = null;
  function ISize$Companion_getInstance() {
    if (ISize$Companion_instance === null) {
      new ISize$Companion();
    }return ISize$Companion_instance;
  }
  ISize.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ISize',
    interfaces: []
  };
  function Size(p) {
    Size$Companion_getInstance();
    this.p = p;
  }
  function Size$Companion() {
    Size$Companion_instance = this;
  }
  Size$Companion.prototype.invoke = function () {
    return new Size(new Point(0, 0));
  };
  Size$Companion.prototype.invoke_lu1900$ = function (width, height) {
    return new Size(new Point(width, height));
  };
  Size$Companion.prototype.invoke_vux9f0$ = function (width, height) {
    return new Size(new Point(width, height));
  };
  Size$Companion.prototype.invoke_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Size.Companion.invoke_z8e4lc$', wrapFunction(function () {
    var Point = _.com.soywiz.korma.geom.Point;
    var Size_init = _.com.soywiz.korma.geom.Size;
    var numberToDouble = Kotlin.numberToDouble;
    return function (width, height) {
      return new Size_init(new Point(numberToDouble(width), numberToDouble(height)));
    };
  }));
  Size$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Size$Companion_instance = null;
  function Size$Companion_getInstance() {
    if (Size$Companion_instance === null) {
      new Size$Companion();
    }return Size$Companion_instance;
  }
  Object.defineProperty(Size.prototype, 'size', {
    get: function () {
      return this;
    }
  });
  Object.defineProperty(Size.prototype, 'width', {
    get: function () {
      return this.p.x;
    },
    set: function (value) {
      this.p.x = value;
    }
  });
  Object.defineProperty(Size.prototype, 'height', {
    get: function () {
      return this.p.y;
    },
    set: function (value) {
      this.p.y = value;
    }
  });
  Size.prototype.setTo_lu1900$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Size.prototype.setTo_vux9f0$ = function (width, height) {
    return this.setTo_lu1900$(width, height);
  };
  Size.prototype.clone = function () {
    return Size$Companion_getInstance().invoke_lu1900$(this.width, this.height);
  };
  Size.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return Size$Companion_getInstance().invoke_vux9f0$(0, 0).setToInterpolated_bs4suk$(ratio, this, other);
  };
  Size.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_lu1900$(interpolate_1(ratio, l.width, r.width), interpolate_1(ratio, l.height, r.height));
  };
  Size.prototype.toString = function () {
    return 'Size(width=' + get_niceStr_0(this.width) + ', height=' + get_niceStr_0(this.height) + ')';
  };
  Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: [Sizeable, ISize, Interpolable, MutableInterpolable]
  };
  Size.prototype.unbox = function () {
    return this.p;
  };
  Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.p) | 0;
    return result;
  };
  Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.p, other.p))));
  };
  var setTo_10 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setTo_ykl03i$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, width, height) {
      return $receiver.setTo_lu1900$(numberToDouble(width), numberToDouble(height));
    };
  }));
  function setTo_11($receiver, that) {
    return $receiver.setTo_lu1900$(that.width, that.height);
  }
  function setToScaled($receiver, sx, sy) {
    return $receiver.setTo_lu1900$($receiver.width * sx, $receiver.height * sy);
  }
  var setToScaled_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setToScaled_ykl03i$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var setToScaled = _.com.soywiz.korma.geom.setToScaled_n266aa$;
    return function ($receiver, sx, sy) {
      if (sy === void 0)
        sy = sx;
      return setToScaled($receiver, numberToDouble(sx), numberToDouble(sy));
    };
  }));
  function get_area($receiver) {
    return $receiver.width * $receiver.height;
  }
  function get_perimeter($receiver) {
    return $receiver.width * 2 + $receiver.height * 2;
  }
  function get_min($receiver) {
    var a = $receiver.width;
    var b = $receiver.height;
    return Math_0.min(a, b);
  }
  function get_max($receiver) {
    var a = $receiver.width;
    var b = $receiver.height;
    return Math_0.max(a, b);
  }
  function ISizeInt() {
  }
  ISizeInt.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ISizeInt',
    interfaces: []
  };
  function SizeInt(size) {
    SizeInt$Companion_getInstance();
    this.size = size;
  }
  function SizeInt$Companion() {
    SizeInt$Companion_instance = this;
  }
  SizeInt$Companion.prototype.invoke = function () {
    return new SizeInt(Size$Companion_getInstance().invoke_vux9f0$(0, 0));
  };
  SizeInt$Companion.prototype.invoke_vux9f0$ = function (x, y) {
    return new SizeInt(Size$Companion_getInstance().invoke_vux9f0$(x, y));
  };
  SizeInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SizeInt$Companion_instance = null;
  function SizeInt$Companion_getInstance() {
    if (SizeInt$Companion_instance === null) {
      new SizeInt$Companion();
    }return SizeInt$Companion_instance;
  }
  Object.defineProperty(SizeInt.prototype, 'width', {
    get: function () {
      return numberToInt(this.size.width);
    },
    set: function (value) {
      this.size.width = value;
    }
  });
  Object.defineProperty(SizeInt.prototype, 'height', {
    get: function () {
      return numberToInt(this.size.height);
    },
    set: function (value) {
      this.size.height = value;
    }
  });
  SizeInt.prototype.toString = function () {
    return 'SizeInt(width=' + this.width + ', height=' + this.height + ')';
  };
  SizeInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeInt',
    interfaces: [ISizeInt]
  };
  SizeInt.prototype.unbox = function () {
    return this.size;
  };
  SizeInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  SizeInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.size, other.size))));
  };
  function setTo_12($receiver, width, height) {
    $receiver.width = width;
    $receiver.height = height;
    return $receiver;
  }
  function setTo_13($receiver, that) {
    return setTo_12($receiver, that.width, that.height);
  }
  function setToScaled_1($receiver, sx, sy) {
    return setTo_12($receiver, numberToInt($receiver.width * sx), numberToInt($receiver.height * sy));
  }
  var setToScaled_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setToScaled_39ro3z$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var setToScaled = _.com.soywiz.korma.geom.setToScaled_a4l7hd$;
    return function ($receiver, sx, sy) {
      if (sy === void 0)
        sy = sx;
      return setToScaled($receiver, numberToDouble(sx), numberToDouble(sy));
    };
  }));
  function anchoredIn_0($receiver, container, anchor, out) {
    if (out === void 0)
      out = RectangleInt$Companion_getInstance().invoke();
    return setTo_9(out, numberToInt((container.width - $receiver.width | 0) * anchor.sx), numberToInt((container.height - $receiver.height | 0) * anchor.sy), $receiver.width, $receiver.height);
  }
  function contains_9($receiver, v) {
    return v.width <= $receiver.width && v.height <= $receiver.height;
  }
  function times_13($receiver, v) {
    return new SizeInt(Size$Companion_getInstance().invoke_vux9f0$(numberToInt($receiver.width * v), numberToInt($receiver.height * v)));
  }
  function times_14($receiver, v) {
    return times_13($receiver, v);
  }
  var times_15 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.times_lwl45h$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var times = _.com.soywiz.korma.geom.times_h2z8p9$;
    return function ($receiver, v) {
      return times($receiver, numberToDouble(v));
    };
  }));
  function getAnchorPosition_0($receiver, anchor, out) {
    if (out === void 0)
      out = PointInt$Companion_getInstance().invoke_vux9f0$(0, 0);
    return out.setTo_vux9f0$(numberToInt($receiver.width * anchor.sx), numberToInt($receiver.height * anchor.sy));
  }
  function asInt_1($receiver) {
    return new SizeInt($receiver);
  }
  function asDouble_1($receiver) {
    return $receiver.size;
  }
  function Sizeable() {
  }
  Sizeable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Sizeable',
    interfaces: []
  };
  function Vector3D() {
    Vector3D$Companion_getInstance();
    this.data = new Float32Array([0.0, 0.0, 0.0, 1.0]);
  }
  Object.defineProperty(Vector3D.prototype, 'x', {
    get: function () {
      return this.data[0];
    },
    set: function (value) {
      this.data[0] = value;
    }
  });
  Object.defineProperty(Vector3D.prototype, 'y', {
    get: function () {
      return this.data[1];
    },
    set: function (value) {
      this.data[1] = value;
    }
  });
  Object.defineProperty(Vector3D.prototype, 'z', {
    get: function () {
      return this.data[2];
    },
    set: function (value) {
      this.data[2] = value;
    }
  });
  Object.defineProperty(Vector3D.prototype, 'w', {
    get: function () {
      return this.data[3];
    },
    set: function (value) {
      this.data[3] = value;
    }
  });
  Object.defineProperty(Vector3D.prototype, 'lengthSquared', {
    get: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
  });
  Object.defineProperty(Vector3D.prototype, 'length', {
    get: function () {
      var x = this.lengthSquared;
      return Math_0.sqrt(x);
    }
  });
  Object.defineProperty(Vector3D.prototype, 'length3Squared', {
    get: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
  });
  Object.defineProperty(Vector3D.prototype, 'length3', {
    get: function () {
      var x = this.length3Squared;
      return Math_0.sqrt(x);
    }
  });
  Vector3D.prototype.get_za3lpa$ = function (index) {
    return this.data[index];
  };
  Vector3D.prototype.set_24o109$ = function (index, value) {
    this.data[index] = value;
  };
  function Vector3D$Companion() {
    Vector3D$Companion_instance = this;
  }
  Vector3D$Companion.prototype.invoke_7b5o5w$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return (new Vector3D()).setTo_7b5o5w$(x, y, z, w);
  };
  Vector3D$Companion.prototype.invoke_6y0v78$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1.0;
    return (new Vector3D()).setTo_6y0v78$(x, y, z, w);
  };
  Vector3D$Companion.prototype.invoke_tjonv8$ = function (x, y, z, w) {
    if (w === void 0)
      w = 1;
    return (new Vector3D()).setTo_tjonv8$(x, y, z, w);
  };
  Vector3D$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var Vector3D_init = _.com.soywiz.korma.geom.Vector3D;
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z, w) {
      if (w === void 0)
        w = 1.0;
      return (new Vector3D_init()).setTo_7b5o5w$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  Vector3D$Companion.prototype.length_6y0v78$ = function (x, y, z, w) {
    var x_0 = this.lengthSq_6y0v78$(x, y, z, w);
    return Math_0.sqrt(x_0);
  };
  Vector3D$Companion.prototype.length_yvo9jy$ = function (x, y, z) {
    var x_0 = this.lengthSq_yvo9jy$(x, y, z);
    return Math_0.sqrt(x_0);
  };
  Vector3D$Companion.prototype.length_7b5o5w$ = function (x, y, z, w) {
    var x_0 = this.lengthSq_7b5o5w$(x, y, z, w);
    return Math_0.sqrt(x_0);
  };
  Vector3D$Companion.prototype.length_y2kzbl$ = function (x, y, z) {
    var x_0 = this.lengthSq_y2kzbl$(x, y, z);
    return Math_0.sqrt(x_0);
  };
  Vector3D$Companion.prototype.lengthSq_6y0v78$ = function (x, y, z, w) {
    return x * x + y * y + z * z + w * w;
  };
  Vector3D$Companion.prototype.lengthSq_yvo9jy$ = function (x, y, z) {
    return x * x + y * y + z * z;
  };
  Vector3D$Companion.prototype.lengthSq_7b5o5w$ = function (x, y, z, w) {
    return x * x + y * y + z * z + w * w;
  };
  Vector3D$Companion.prototype.lengthSq_y2kzbl$ = function (x, y, z) {
    return x * x + y * y + z * z;
  };
  Vector3D$Companion.prototype.length_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.Companion.length_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z, w) {
      return this.length_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  Vector3D$Companion.prototype.lengthSq_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.Companion.lengthSq_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z, w) {
      return this.lengthSq_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  Vector3D$Companion.prototype.length_a2j3zq$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.Companion.length_a2j3zq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z) {
      return this.length_yvo9jy$(numberToDouble(x), numberToDouble(y), numberToDouble(z));
    };
  }));
  Vector3D$Companion.prototype.lengthSq_a2j3zq$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.Companion.lengthSq_a2j3zq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z) {
      return this.lengthSq_yvo9jy$(numberToDouble(x), numberToDouble(y), numberToDouble(z));
    };
  }));
  Vector3D$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector3D$Companion_instance = null;
  function Vector3D$Companion_getInstance() {
    if (Vector3D$Companion_instance === null) {
      new Vector3D$Companion();
    }return Vector3D$Companion_instance;
  }
  Vector3D.prototype.copyFrom_t4ex0$ = function (other) {
    return this.setTo_7b5o5w$(other.x, other.y, other.z, other.w);
  };
  Vector3D.prototype.setTo_7b5o5w$ = function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  };
  Vector3D.prototype.setTo_6y0v78$ = function (x, y, z, w) {
    return this.setTo_7b5o5w$(x, y, z, w);
  };
  Vector3D.prototype.setTo_tjonv8$ = function (x, y, z, w) {
    return this.setTo_7b5o5w$(x, y, z, w);
  };
  Vector3D.prototype.setTo_y2kzbl$ = function (x, y, z) {
    return this.setTo_7b5o5w$(x, y, z, 1.0);
  };
  Vector3D.prototype.setTo_yvo9jy$ = function (x, y, z) {
    return this.setTo_6y0v78$(x, y, z, 1.0);
  };
  Vector3D.prototype.setTo_qt1dr2$ = function (x, y, z) {
    return this.setTo_tjonv8$(x, y, z, 1);
  };
  Vector3D.prototype.setToFunc_33fai9$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.setToFunc_33fai9$', function (func) {
    return this.setTo_7b5o5w$(func(0), func(1), func(2), func(3));
  });
  Vector3D.prototype.transform_p62hku$ = function (mat) {
    return mat.transform_glqd9o$(this, this);
  };
  Vector3D.prototype.normalize_t4ex0$ = function (vector) {
    if (vector === void 0)
      vector = this;
    var norm = 1.0 / vector.length3;
    var x = vector.x * norm;
    var y = vector.y * norm;
    var z = vector.z * norm;
    this.setTo_7b5o5w$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(1));
    return this;
  };
  Vector3D.prototype.normalized_t4ex0$ = function (out) {
    if (out === void 0)
      out = new Vector3D();
    return out.copyFrom_t4ex0$(this).normalize_t4ex0$();
  };
  Vector3D.prototype.setTo_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.Vector3D.setTo_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, z, w) {
      return this.setTo_7b5o5w$(numberToDouble(x), numberToDouble(y), numberToDouble(z), numberToDouble(w));
    };
  }));
  Vector3D.prototype.equals = function (other) {
    return Kotlin.isType(other, Vector3D) && almostEquals(this.x, other.x) && almostEquals(this.y, other.y) && almostEquals(this.z, other.z) && almostEquals(this.w, other.w);
  };
  Vector3D.prototype.hashCode = function () {
    return contentHashCode(this.data);
  };
  Vector3D.prototype.toString = function () {
    return this.w === 1.0 ? '(' + get_niceStr(this.x) + ', ' + get_niceStr(this.y) + ', ' + get_niceStr(this.z) + ')' : '(' + get_niceStr(this.x) + ', ' + get_niceStr(this.y) + ', ' + get_niceStr(this.z) + ', ' + get_niceStr(this.w) + ')';
  };
  Vector3D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector3D',
    interfaces: []
  };
  function IntVector3(v) {
    this.v = v;
  }
  Object.defineProperty(IntVector3.prototype, 'x', {
    get: function () {
      return numberToInt(this.v.x);
    }
  });
  Object.defineProperty(IntVector3.prototype, 'y', {
    get: function () {
      return numberToInt(this.v.y);
    }
  });
  Object.defineProperty(IntVector3.prototype, 'z', {
    get: function () {
      return numberToInt(this.v.z);
    }
  });
  Object.defineProperty(IntVector3.prototype, 'w', {
    get: function () {
      return numberToInt(this.v.w);
    }
  });
  IntVector3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntVector3',
    interfaces: []
  };
  IntVector3.prototype.unbox = function () {
    return this.v;
  };
  IntVector3.prototype.toString = function () {
    return 'IntVector3(v=' + Kotlin.toString(this.v) + ')';
  };
  IntVector3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  IntVector3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function asIntVector3D($receiver) {
    return new IntVector3($receiver);
  }
  function setToInterpolated_1($receiver, left, right, t) {
    return $receiver.setTo_7b5o5w$(interpolate_0(t, left.get_za3lpa$(0), right.get_za3lpa$(0)), interpolate_0(t, left.get_za3lpa$(1), right.get_za3lpa$(1)), interpolate_0(t, left.get_za3lpa$(2), right.get_za3lpa$(2)), interpolate_0(t, left.get_za3lpa$(3), right.get_za3lpa$(3)));
  }
  function scale_4($receiver, scale) {
    return $receiver.setTo_7b5o5w$($receiver.x * scale, $receiver.y * scale, $receiver.z * scale, $receiver.w * scale);
  }
  function scale_5($receiver, scale) {
    return scale_4($receiver, scale);
  }
  function scale_6($receiver, scale) {
    return scale_4($receiver, scale);
  }
  var scale_7 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.scale_qy8mz9$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var scale = _.com.soywiz.korma.geom.scale_zd61ja$;
    return function ($receiver, scale_0) {
      return scale($receiver, numberToDouble(scale_0));
    };
  }));
  var setTo_14 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.setTo_2nu8xt$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y, z) {
      return $receiver.setTo_7b5o5w$(numberToDouble(x), numberToDouble(y), numberToDouble(z), 1.0);
    };
  }));
  function Bezier() {
    Bezier$Companion_getInstance();
  }
  Bezier.prototype.getBounds_2da8yn$ = function (target, callback$default) {
    if (target === void 0)
      target = Rectangle$Companion_getInstance().invoke();
    return callback$default ? callback$default(target) : this.getBounds_2da8yn$$default(target);
  };
  Bezier.prototype.calc_iwfqvm$ = function (t, target, callback$default) {
    if (target === void 0)
      target = Point$Companion_getInstance().invoke();
    return callback$default ? callback$default(t, target) : this.calc_iwfqvm$$default(t, target);
  };
  function Bezier$Quad(p0, p1, p2) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
  }
  Bezier$Quad.prototype.getBounds_2da8yn$$default = function (target) {
    return Bezier$Companion_getInstance().quadBounds_oaz3ob$(get_x(this.p0), get_y(this.p0), get_x(this.p1), get_y(this.p1), get_x(this.p2), get_y(this.p2), target);
  };
  Bezier$Quad.prototype.calc_iwfqvm$$default = function (t, target) {
    return Bezier$Companion_getInstance().quadCalc_181vpe$(get_x(this.p0), get_y(this.p0), get_x(this.p1), get_y(this.p1), get_x(this.p2), get_y(this.p2), t, target);
  };
  Bezier$Quad.prototype.toCubic = function () {
    var tmp$ = this.p0;
    var tmp$_0 = this.p0;
    var $receiver = minus_0(this.p1, this.p0);
    var scale = 2.0 / 3.0;
    var x = $receiver._x * numberToDouble(scale);
    var y = $receiver._y * numberToDouble(scale);
    var tmp$_1 = plus_0(tmp$_0, new Point(numberToDouble(x), numberToDouble(y)));
    var tmp$_2 = this.p2;
    var $receiver_0 = minus_0(this.p1, this.p2);
    var scale_0 = 2.0 / 3.0;
    var x_0 = $receiver_0._x * numberToDouble(scale_0);
    var y_0 = $receiver_0._y * numberToDouble(scale_0);
    return new Bezier$Cubic(tmp$, tmp$_1, plus_0(tmp$_2, new Point(numberToDouble(x_0), numberToDouble(y_0))), this.p2);
  };
  Bezier$Quad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quad',
    interfaces: [Bezier]
  };
  function Bezier$Cubic(p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.temp_0 = new Bezier$Temp();
  }
  Bezier$Cubic.prototype.getBounds_2da8yn$$default = function (target) {
    return Bezier$Companion_getInstance().cubicBounds_1htcsh$(get_x(this.p0), get_y(this.p0), get_x(this.p1), get_y(this.p1), get_x(this.p2), get_y(this.p2), get_x(this.p3), get_y(this.p3), target, this.temp_0);
  };
  Bezier$Cubic.prototype.calc_iwfqvm$$default = function (t, target) {
    return Bezier$Companion_getInstance().cubicCalc_bmgyua$(get_x(this.p0), get_y(this.p0), get_x(this.p1), get_y(this.p1), get_x(this.p2), get_y(this.p2), get_x(this.p3), get_y(this.p3), t, target);
  };
  Bezier$Cubic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cubic',
    interfaces: [Bezier]
  };
  function Bezier$Temp() {
    this.tvalues = new Float64Array(6);
    this.xvalues = new Float64Array(8);
    this.yvalues = new Float64Array(8);
  }
  Bezier$Temp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Temp',
    interfaces: []
  };
  function Bezier$Companion() {
    Bezier$Companion_instance = this;
  }
  Bezier$Companion.prototype.invoke_36hh2h$ = function (p0, p1, p2) {
    return new Bezier$Quad(p0, p1, p2);
  };
  Bezier$Companion.prototype.invoke_j380b8$ = function (p0, p1, p2, p3) {
    return new Bezier$Cubic(p0, p1, p2, p3);
  };
  Bezier$Companion.prototype.quadToCubic_f17vmg$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.bezier.Bezier.Companion.quadToCubic_f17vmg$', function (x0, y0, xc, yc, x1, y1, bezier) {
    return bezier(x0, y0, x0 + 0 * (xc - x0), y0 + 0 * (yc - y0), x1 + 0 * (xc - x1), y1 + 0 * (yc - y1), x1, y1);
  });
  Bezier$Companion.prototype.quadBounds_oaz3ob$ = function (x0, y0, xc, yc, x1, y1, target, temp) {
    if (target === void 0)
      target = Rectangle$Companion_getInstance().invoke();
    if (temp === void 0)
      temp = new Bezier$Temp();
    return this.cubicBounds_1htcsh$(x0, y0, x0 + 0 * (xc - x0), y0 + 0 * (yc - y0), x1 + 0 * (xc - x1), y1 + 0 * (yc - y1), x1, y1, target, temp);
  };
  Bezier$Companion.prototype.quadCalc_aqpxk0$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.bezier.Bezier.Companion.quadCalc_aqpxk0$', function (x0, y0, xc, yc, x1, y1, t, emit) {
    var t1 = 1 - t;
    var a = t1 * t1;
    var c = t * t;
    var b = 2 * t1 * t;
    return emit(a * x0 + b * xc + c * x1, a * y0 + b * yc + c * y1);
  });
  Bezier$Companion.prototype.quadCalc_181vpe$ = function (x0, y0, xc, yc, x1, y1, t, target) {
    if (target === void 0)
      target = Point$Companion_getInstance().invoke();
    var t1 = 1 - t;
    var a = t1 * t1;
    var c = t * t;
    var b = 2 * t1 * t;
    return target.setTo_lu1900$(a * x0 + b * xc + c * x1, a * y0 + b * yc + c * y1);
  };
  Bezier$Companion.prototype.cubicBounds_1htcsh$ = function (x0, y0, x1, y1, x2, y2, x3, y3, target, temp) {
    if (target === void 0)
      target = Rectangle$Companion_getInstance().invoke();
    if (temp === void 0)
      temp = new Bezier$Temp();
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var j = 0;
    var a;
    var b;
    var c;
    var b2ac;
    var sqrtb2ac;
    for (var i = 0; i < 2; i++) {
      if (i === 0) {
        b = 6 * x0 - 12 * x1 + 6 * x2;
        a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
        c = 3 * x1 - 3 * x0;
      } else {
        b = 6 * y0 - 12 * y1 + 6 * y2;
        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
        c = 3 * y1 - 3 * y0;
      }
      var x = a;
      if (Math_0.abs(x) < 1.0E-12) {
        var x_0 = b;
        if (Math_0.abs(x_0) >= 1.0E-12) {
          var t = -c / b;
          if (0 < t && t < 1) {
            temp.tvalues[tmp$ = j, j = tmp$ + 1 | 0, tmp$] = t;
          }}} else {
        b2ac = b * b - 4 * c * a;
        if (b2ac < 0)
          continue;
        sqrtb2ac = Math_0.sqrt(b2ac);
        var t1 = (-b + sqrtb2ac) / (2.0 * a);
        if (0 < t1 && t1 < 1) {
          temp.tvalues[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = t1;
        }var t2 = (-b - sqrtb2ac) / (2.0 * a);
        if (0 < t2 && t2 < 1) {
          temp.tvalues[tmp$_1 = j, j = tmp$_1 + 1 | 0, tmp$_1] = t2;
        }}
    }
    while ((tmp$_2 = j, j = tmp$_2 - 1 | 0, tmp$_2) > 0) {
      var t_0 = temp.tvalues[j];
      var mt = 1 - t_0;
      temp.xvalues[j] = mt * mt * mt * x0 + 3 * mt * mt * t_0 * x1 + 3 * mt * t_0 * t_0 * x2 + t_0 * t_0 * t_0 * x3;
      temp.yvalues[j] = mt * mt * mt * y0 + 3 * mt * mt * t_0 * y1 + 3 * mt * t_0 * t_0 * y2 + t_0 * t_0 * t_0 * y3;
    }
    temp.xvalues[temp.tvalues.length + 0 | 0] = x0;
    temp.xvalues[temp.tvalues.length + 1 | 0] = x3;
    temp.yvalues[temp.tvalues.length + 0 | 0] = y0;
    temp.yvalues[temp.tvalues.length + 1 | 0] = y3;
    return target.setBounds_6y0v78$(minOrElse(temp.xvalues, 0.0), minOrElse(temp.yvalues, 0.0), maxOrElse(temp.xvalues, 0.0), maxOrElse(temp.yvalues, 0.0));
  };
  Bezier$Companion.prototype.cubicCalc_5wy1q4$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.bezier.Bezier.Companion.cubicCalc_5wy1q4$', function (x0, y0, x1, y1, x2, y2, x3, y3, t, emit) {
    var cx = 3.0 * (x1 - x0);
    var bx = 3.0 * (x2 - x1) - cx;
    var ax = x3 - x0 - cx - bx;
    var cy = 3.0 * (y1 - y0);
    var by = 3.0 * (y2 - y1) - cy;
    var ay = y3 - y0 - cy - by;
    var tSquared = t * t;
    var tCubed = tSquared * t;
    return emit(ax * tCubed + bx * tSquared + cx * t + x0, ay * tCubed + by * tSquared + cy * t + y0);
  });
  Bezier$Companion.prototype.cubicCalc_bmgyua$ = function (x0, y0, x1, y1, x2, y2, x3, y3, t, target) {
    if (target === void 0)
      target = Point$Companion_getInstance().invoke();
    var cx = 3.0 * (x1 - x0);
    var bx = 3.0 * (x2 - x1) - cx;
    var ax = x3 - x0 - cx - bx;
    var cy = 3.0 * (y1 - y0);
    var by = 3.0 * (y2 - y1) - cy;
    var ay = y3 - y0 - cy - by;
    var tSquared = t * t;
    var tCubed = tSquared * t;
    return target.setTo_lu1900$(ax * tCubed + bx * tSquared + cx * t + x0, ay * tCubed + by * tSquared + cy * t + y0);
  };
  Bezier$Companion.prototype.quadNPoints_8f3r3e$ = function (x0, y0, cx, cy, x1, y1, scale) {
    if (scale === void 0)
      scale = 1.0;
    return clamp_0(numberToInt((Point$Companion_getInstance().distance_6y0v78$(x0, y0, cx, cy) + Point$Companion_getInstance().distance_6y0v78$(cx, cy, x1, y1)) * scale), 5, 256);
  };
  Bezier$Companion.prototype.cubicNPoints_g0y5u6$ = function (x0, y0, cx1, cy1, cx2, cy2, x1, y1, scale) {
    if (scale === void 0)
      scale = 1.0;
    return clamp_0(numberToInt((Point$Companion_getInstance().distance_6y0v78$(x0, y0, cx1, cy1) + Point$Companion_getInstance().distance_6y0v78$(cx1, cy1, cx2, cy2) + Point$Companion_getInstance().distance_6y0v78$(cx2, cy2, x1, y1)) * scale), 5, 256);
  };
  Bezier$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bezier$Companion_instance = null;
  function Bezier$Companion_getInstance() {
    if (Bezier$Companion_instance === null) {
      new Bezier$Companion();
    }return Bezier$Companion_instance;
  }
  Bezier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Bezier',
    interfaces: []
  };
  function length($receiver, steps, temp) {
    if (steps === void 0)
      steps = 100;
    if (temp === void 0)
      temp = Point$Companion_getInstance().invoke();
    var dt = 1.0 / steps;
    var oldX = 0.0;
    var oldY = 0.0;
    var length = 0.0;
    for (var n = 0; n <= steps; n++) {
      $receiver.calc_iwfqvm$(dt * n, temp);
      if (n !== 0) {
        var x = oldX - temp.x;
        var y = oldY - temp.y;
        length += Math_0.hypot(x, y);
      }oldX = temp.x;
      oldY = temp.y;
    }
    return length;
  }
  function SegmentEmitter() {
    SegmentEmitter_instance = this;
  }
  SegmentEmitter.prototype.emit_nrsayj$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.bezier.SegmentEmitter.emit_nrsayj$', wrapFunction(function () {
    var Point = _.com.soywiz.korma.geom.Point;
    return function (segments, curveGen, gen, p1, p2) {
      if (p1 === void 0)
        p1 = Point.Companion.invoke();
      if (p2 === void 0)
        p2 = Point.Companion.invoke();
      var dt = 1.0 / segments;
      for (var n = 0; n < segments; n++) {
        p1.copyFrom_4l17gg$(p2);
        p2.copyFrom_4l17gg$(curveGen(p2, dt * n));
        if (n > 1)
          gen(p1, p2);
      }
    };
  }));
  SegmentEmitter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SegmentEmitter',
    interfaces: []
  };
  var SegmentEmitter_instance = null;
  function SegmentEmitter_getInstance() {
    if (SegmentEmitter_instance === null) {
      new SegmentEmitter();
    }return SegmentEmitter_instance;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function BinPacker(width, height, algo) {
    BinPacker$Companion_getInstance();
    if (algo === void 0)
      algo = new MaxRects(width, height);
    this.width = width;
    this.height = height;
    this.algo = algo;
    this.allocated = ArrayList_init_0();
  }
  function BinPacker$Algo() {
  }
  BinPacker$Algo.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Algo',
    interfaces: []
  };
  function BinPacker$Result(maxWidth, maxHeight, items) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.items = items;
    var $receiver = this.items;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.second);
    }
    this.rectanglesNotNull_0 = filterNotNull(destination);
    var tmp$_0, tmp$_1;
    var $receiver_0 = this.rectanglesNotNull_0;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(item_0.right);
    }
    this.width = (tmp$_0 = max(destination_0)) != null ? tmp$_0 : 0.0;
    var $receiver_1 = this.rectanglesNotNull_0;
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_3;
    tmp$_3 = $receiver_1.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_1.add_11rb$(item_1.bottom);
    }
    this.height = (tmp$_1 = max(destination_1)) != null ? tmp$_1 : 0.0;
  }
  Object.defineProperty(BinPacker$Result.prototype, 'rects', {
    get: function () {
      var $receiver = this.items;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.second);
      }
      return destination;
    }
  });
  Object.defineProperty(BinPacker$Result.prototype, 'rectsStr', {
    get: function () {
      return this.rects.toString();
    }
  });
  BinPacker$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  function BinPacker$addBatch$lambda(it) {
    return get_area(it.second);
  }
  BinPacker.prototype.addBatch_c28qhz$ = function ($receiver, items, getSize) {
    var tmp$;
    var its = toList(items);
    var out = HashMap_init();
    var destination = ArrayList_init(collectionSizeOrDefault(its, 10));
    var tmp$_0;
    tmp$_0 = its.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item, getSize(item)));
    }
    var sorted = sortedWith(destination, new Comparator$ObjectLiteral(compareByDescending$lambda(BinPacker$addBatch$lambda)));
    tmp$ = sorted.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var i = tmp$_1.component1()
      , size = tmp$_1.component2();
      var value = $receiver.add_lu1900$(size.width, size.height);
      out.put_xwzc9p$(i, value);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(its, 10));
    var tmp$_2;
    tmp$_2 = its.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(to(item_0, out.get_11rb$(item_0)));
    }
    return destination_0;
  };
  BinPacker.prototype.add_lu1900$ = function (width, height) {
    var tmp$;
    tmp$ = this.addOrNull_lu1900$(width, height);
    if (tmp$ == null) {
      throw IllegalStateException_init("Size '" + this.width + 'x' + this.height + "' doesn't fit in '" + this.width + 'x' + this.height + "'");
    }return tmp$;
  };
  BinPacker.prototype.addOrNull_lu1900$ = function (width, height) {
    var tmp$;
    tmp$ = this.algo.add_lu1900$(width, height);
    if (tmp$ == null) {
      return null;
    }var rect = tmp$;
    this.allocated.add_11rb$(rect);
    return rect;
  };
  BinPacker.prototype.add_vux9f0$ = function (width, height) {
    return this.add_lu1900$(width, height);
  };
  BinPacker.prototype.addOrNull_vux9f0$ = function (width, height) {
    return this.addOrNull_lu1900$(width, height);
  };
  BinPacker.prototype.add_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.binpack.BinPacker.add_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (width, height) {
      return this.add_lu1900$(numberToDouble(width), numberToDouble(height));
    };
  }));
  BinPacker.prototype.addOrNull_z8e4lc$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.binpack.BinPacker.addOrNull_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (width, height) {
      return this.addOrNull_lu1900$(numberToDouble(width), numberToDouble(height));
    };
  }));
  BinPacker.prototype.addBatch_f0fc84$ = function (items, getSize) {
    return new BinPacker$Result(this.width, this.height, this.addBatch_c28qhz$(this.algo, items, getSize));
  };
  function BinPacker$addBatch$lambda_0(it) {
    return it;
  }
  BinPacker.prototype.addBatch_v79qp2$ = function (items) {
    var $receiver = this.addBatch_c28qhz$(this.algo, items, BinPacker$addBatch$lambda_0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.second);
    }
    return destination;
  };
  function BinPacker$Companion() {
    BinPacker$Companion_instance = this;
  }
  BinPacker$Companion.prototype.invoke_1v2kpa$ = function (width, height, algo) {
    if (algo === void 0)
      algo = new MaxRects(width, height);
    return new BinPacker(width, height, algo);
  };
  BinPacker$Companion.prototype.invoke_bc5jmq$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.binpack.BinPacker.Companion.invoke_bc5jmq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var MaxRects_init = _.com.soywiz.korma.geom.binpack.MaxRects;
    var BinPacker_init = _.com.soywiz.korma.geom.binpack.BinPacker;
    return function (width, height, algo) {
      if (algo === void 0)
        algo = new MaxRects_init(numberToDouble(width), numberToDouble(height));
      return new BinPacker_init(numberToDouble(width), numberToDouble(height), algo);
    };
  }));
  BinPacker$Companion.prototype.pack_7eyens$ = function (width, height, items, getSize) {
    return (new BinPacker(width, height)).addBatch_f0fc84$(items, getSize);
  };
  BinPacker$Companion.prototype.pack_9701d0$ = function (width, height, items, getSize) {
    return this.pack_7eyens$(width, height, items, getSize);
  };
  BinPacker$Companion.prototype.pack_ektb60$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.binpack.BinPacker.Companion.pack_ektb60$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (width, height, items, getSize) {
      return this.pack_7eyens$(numberToDouble(width), numberToDouble(height), items, getSize);
    };
  }));
  BinPacker$Companion.prototype.packSeveral_6g33wa$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.binpack.BinPacker.Companion.packSeveral_6g33wa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    function BinPacker$Companion$packSeveral$lambda(it) {
      return it.size;
    }
    return function (maxWidth, maxHeight, items) {
      return this.packSeveral_7eyens$(numberToDouble(maxWidth), numberToDouble(maxHeight), items, BinPacker$Companion$packSeveral$lambda);
    };
  }));
  function BinPacker$Companion$packSeveral$lambda(it) {
    return it.size;
  }
  BinPacker$Companion.prototype.packSeveral_t57n7y$ = function (maxWidth, maxHeight, items) {
    return this.packSeveral_7eyens$(maxWidth, maxHeight, items, BinPacker$Companion$packSeveral$lambda);
  };
  function BinPacker$Companion$packSeveral$lambda_0(closure$getSize) {
    return function (it) {
      return get_area(closure$getSize(it));
    };
  }
  function BinPacker$Companion$packSeveral$emit(closure$currentPairs, closure$out, closure$maxWidth, closure$maxHeight, closure$currentBinPacker) {
    return function () {
      if (closure$currentPairs.v.isEmpty())
        return;
      var $receiver = closure$out;
      var element = new BinPacker$Result(closure$maxWidth, closure$maxHeight, toList(closure$currentPairs.v));
      $receiver.add_11rb$(element);
      closure$currentPairs.v = ArrayList_init_0();
      closure$currentBinPacker.v = new BinPacker(closure$maxWidth, closure$maxHeight);
    };
  }
  BinPacker$Companion.prototype.packSeveral_7eyens$ = function (maxWidth, maxHeight, items, getSize) {
    var tmp$;
    var currentBinPacker = {v: new BinPacker(maxWidth, maxHeight)};
    var currentPairs = {v: ArrayList_init_0()};
    var sortedItems = sortedWith(items, new Comparator$ObjectLiteral(compareByDescending$lambda(BinPacker$Companion$packSeveral$lambda_0(getSize))));
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType(sortedItems, Collection) && sortedItems.isEmpty()) {
        any$result = false;
        break any$break;
      }tmp$_0 = sortedItems.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var $receiver = getSize(element);
        if ($receiver.width > maxWidth || $receiver.height > maxHeight) {
          any$result = true;
          break any$break;
        }}
      any$result = false;
    }
     while (false);
    if (any$result) {
      throw IllegalArgumentException_init('Item is bigger than max size');
    }var out = ArrayList_init_0();
    var emit = BinPacker$Companion$packSeveral$emit(currentPairs, out, maxWidth, maxHeight, currentBinPacker);
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var done = false;
      while (!done) {
        var size = getSize(item);
        var rect = currentBinPacker.v.addOrNull_lu1900$(size.width, size.height);
        if (rect != null) {
          currentPairs.v.add_11rb$(to(item, rect));
          done = true;
        } else {
          emit();
        }
      }
    }
    emit();
    return out;
  };
  BinPacker$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BinPacker$Companion_instance = null;
  function BinPacker$Companion_getInstance() {
    if (BinPacker$Companion_instance === null) {
      new BinPacker$Companion();
    }return BinPacker$Companion_instance;
  }
  BinPacker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinPacker',
    interfaces: []
  };
  function MaxRects(maxWidth, maxHeight) {
    this.freeRectangles = arrayListOf([new Rectangle(0.0, 0.0, maxWidth, maxHeight)]);
  }
  MaxRects.prototype.add_lu1900$ = function (width, height) {
    return this.quickInsert_lu1900$(width, height);
  };
  MaxRects.prototype.quickInsert_lu1900$ = function (width, height) {
    if (width <= 0.0 && height <= 0.0) {
      return new Rectangle(0, 0, 0, 0);
    }var newNode = this.quickFindPositionForNewNodeBestAreaFit_0(width, height);
    if (newNode.height === 0.0)
      return null;
    var numRectanglesToProcess = this.freeRectangles.size;
    var i = 0;
    while (i < numRectanglesToProcess) {
      if (this.splitFreeNode_0(this.freeRectangles.get_za3lpa$(i), newNode)) {
        this.freeRectangles.removeAt_za3lpa$(i);
        numRectanglesToProcess = numRectanglesToProcess - 1 | 0;
        i = i - 1 | 0;
      }i = i + 1 | 0;
    }
    this.pruneFreeList_0();
    return newNode;
  };
  MaxRects.prototype.quickFindPositionForNewNodeBestAreaFit_0 = function (width, height) {
    var tmp$;
    var score = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    var areaFit;
    var bestNode = Rectangle$Companion_getInstance().invoke();
    tmp$ = this.freeRectangles.iterator();
    while (tmp$.hasNext()) {
      var r = tmp$.next();
      if (r.width >= width && r.height >= height) {
        areaFit = r.width * r.height - width * height;
        if (areaFit < score) {
          bestNode.x = r.x;
          bestNode.y = r.y;
          bestNode.width = width;
          bestNode.height = height;
          score = areaFit;
        }}}
    return bestNode;
  };
  MaxRects.prototype.splitFreeNode_0 = function (freeNode, usedNode) {
    var newNode;
    if (usedNode.left >= freeNode.right || usedNode.right <= freeNode.x || usedNode.top >= freeNode.bottom || usedNode.bottom <= freeNode.top) {
      return false;
    }if (usedNode.x < freeNode.right && usedNode.right > freeNode.x) {
      if (usedNode.y > freeNode.y && usedNode.y < freeNode.bottom) {
        newNode = freeNode.clone();
        newNode.height = usedNode.y - newNode.y;
        this.freeRectangles.add_11rb$(newNode);
      }if (usedNode.bottom < freeNode.bottom) {
        newNode = freeNode.clone();
        newNode.top = usedNode.bottom;
        newNode.height = freeNode.bottom - usedNode.bottom;
        this.freeRectangles.add_11rb$(newNode);
      }}if (usedNode.y < freeNode.bottom && usedNode.bottom > freeNode.y) {
      if (usedNode.x > freeNode.x && usedNode.x < freeNode.right) {
        newNode = freeNode.clone();
        newNode.width = usedNode.x - newNode.x;
        this.freeRectangles.add_11rb$(newNode);
      }if (usedNode.right < freeNode.right) {
        newNode = freeNode.clone();
        newNode.x = usedNode.right;
        newNode.width = freeNode.right - usedNode.right;
        this.freeRectangles.add_11rb$(newNode);
      }}return true;
  };
  MaxRects.prototype.pruneFreeList_0 = function () {
    var len = this.freeRectangles.size;
    var i = 0;
    while (i < len) {
      var j = i + 1 | 0;
      var tmpRect = this.freeRectangles.get_za3lpa$(i);
      while (j < len) {
        var tmpRect2 = this.freeRectangles.get_za3lpa$(j);
        if (Rectangle$Companion_getInstance().isContainedIn_z5mqcu$(tmpRect, tmpRect2)) {
          this.freeRectangles.removeAt_za3lpa$(i);
          i = i - 1 | 0;
          len = len - 1 | 0;
          break;
        }if (Rectangle$Companion_getInstance().isContainedIn_z5mqcu$(tmpRect2, tmpRect)) {
          this.freeRectangles.removeAt_za3lpa$(j);
          len = len - 1 | 0;
          j = j - 1 | 0;
        }j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
  };
  MaxRects.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxRects',
    interfaces: [BinPacker$Algo]
  };
  var get_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.get_hzg0an$', wrapFunction(function () {
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var numberToInt = Kotlin.numberToInt;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    return function ($receiver, p) {
      return $receiver.get_vux9f0$(numberToInt(get_x(p)), numberToInt(get_y(p)));
    };
  }));
  var set = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.set_dcv4jd$', wrapFunction(function () {
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var numberToInt = Kotlin.numberToInt;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    return function ($receiver, p, value) {
      $receiver.set_vq7693$(numberToInt(get_x(p)), numberToInt(get_y(p)), value);
    };
  }));
  var tryGet = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.tryGet_hzg0an$', wrapFunction(function () {
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var numberToInt = Kotlin.numberToInt;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    return function ($receiver, p) {
      return $receiver.tryGet_vux9f0$(numberToInt(get_x(p)), numberToInt(get_y(p)));
    };
  }));
  var trySet = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.trySet_dcv4jd$', wrapFunction(function () {
    var get_x = _.com.soywiz.korma.geom.get_x_qai0ns$;
    var numberToInt = Kotlin.numberToInt;
    var get_y = _.com.soywiz.korma.geom.get_y_qai0ns$;
    return function ($receiver, p, value) {
      $receiver.trySet_vq7693$(numberToInt(get_x(p)), numberToInt(get_y(p)), value);
    };
  }));
  var get_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.get_fnf2ik$', function ($receiver, p) {
    return $receiver.get_vux9f0$(p.x, p.y);
  });
  var set_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.set_vtn6wy$', function ($receiver, p, value) {
    $receiver.set_vq7693$(p.x, p.y, value);
  });
  var tryGet_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.tryGet_fnf2ik$', function ($receiver, p) {
    return $receiver.tryGet_vux9f0$(p.x, p.y);
  });
  var trySet_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.ds.trySet_vtn6wy$', function ($receiver, p, value) {
    $receiver.trySet_vq7693$(p.x, p.y, value);
  });
  function OpenRange(start, endExclusive) {
    this.start = start;
    this.endExclusive = endExclusive;
  }
  OpenRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpenRange',
    interfaces: []
  };
  function contains_10($receiver, item) {
    return Kotlin.compareTo(item, $receiver.start) >= 0 && Kotlin.compareTo(item, $receiver.endExclusive) < 0;
  }
  function HorizontalLine() {
    HorizontalLine_instance = this;
  }
  HorizontalLine.prototype.intersectionsWithLine_15yvbs$ = function (ax, ay, bx0, by0, bx1, by1) {
    return by1 > ay !== by0 > ay && ax < (bx0 - bx1) * (ay - by1) / (by0 - by1) + bx1 ? 1 : 0;
  };
  function HorizontalLine$interesectionsWithQuadBezier$lambda(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2) {
    return function (p, t) {
      return Bezier$Companion_getInstance().quadCalc_181vpe$(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2, t, p);
    };
  }
  function HorizontalLine$interesectionsWithQuadBezier$lambda_0(closure$count, closure$ax, closure$ay, this$HorizontalLine) {
    return function (p0, p1) {
      closure$count.v = closure$count.v + this$HorizontalLine.intersectionsWithLine_15yvbs$(closure$ax, closure$ay, p0.x, p0.y, p1.x, p1.y) | 0;
      return Unit;
    };
  }
  HorizontalLine.prototype.interesectionsWithQuadBezier_5vg17g$ = function (ax, ay, bx0, by0, bx1, by1, bx2, by2, t0, t1) {
    if (t0 === void 0)
      t0 = Point$Companion_getInstance().invoke();
    if (t1 === void 0)
      t1 = Point$Companion_getInstance().invoke();
    var count = {v: 0};
    var dt = 1.0 / 4;
    for (var n = 0; n < 4; n++) {
      t0.copyFrom_4l17gg$(t1);
      t1.copyFrom_4l17gg$(HorizontalLine$interesectionsWithQuadBezier$lambda(bx0, by0, bx1, by1, bx2, by2)(t1, dt * n));
      if (n > 1)
        HorizontalLine$interesectionsWithQuadBezier$lambda_0(count, ax, ay, this)(t0, t1);
    }
    return count.v;
  };
  function HorizontalLine$intersectionsWithCubicBezier$lambda(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2, closure$bx3, closure$by3) {
    return function (p, t) {
      return Bezier$Companion_getInstance().cubicCalc_bmgyua$(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2, closure$bx3, closure$by3, t, p);
    };
  }
  function HorizontalLine$intersectionsWithCubicBezier$lambda_0(closure$count, closure$ax, closure$ay, this$HorizontalLine) {
    return function (p0, p1) {
      closure$count.v = closure$count.v + this$HorizontalLine.intersectionsWithLine_15yvbs$(closure$ax, closure$ay, p0.x, p0.y, p1.x, p1.y) | 0;
      return Unit;
    };
  }
  HorizontalLine.prototype.intersectionsWithCubicBezier_erb1tk$ = function (ax, ay, bx0, by0, bx1, by1, bx2, by2, bx3, by3, t0, t1) {
    if (t0 === void 0)
      t0 = Point$Companion_getInstance().invoke();
    if (t1 === void 0)
      t1 = Point$Companion_getInstance().invoke();
    var count = {v: 0};
    var dt = 1.0 / 4;
    for (var n = 0; n < 4; n++) {
      t0.copyFrom_4l17gg$(t1);
      t1.copyFrom_4l17gg$(HorizontalLine$intersectionsWithCubicBezier$lambda(bx0, by0, bx1, by1, bx2, by2, bx3, by3)(t1, dt * n));
      if (n > 1)
        HorizontalLine$intersectionsWithCubicBezier$lambda_0(count, ax, ay, this)(t0, t1);
    }
    return count.v;
  };
  HorizontalLine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HorizontalLine',
    interfaces: []
  };
  var HorizontalLine_instance = null;
  function HorizontalLine_getInstance() {
    if (HorizontalLine_instance === null) {
      new HorizontalLine();
    }return HorizontalLine_instance;
  }
  function approximateCurve$lambda(closure$lastX, closure$lastY) {
    return function (x, y) {
      closure$lastX.v = x;
      closure$lastY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_0(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
    return function (x, y) {
      var closure$emit_0 = closure$emit;
      var closure$emittedCount_0 = closure$emittedCount;
      var closure$prevX_0 = closure$prevX;
      var closure$lastX_0 = closure$lastX;
      var closure$prevY_0 = closure$prevY;
      var closure$lastY_0 = closure$lastY;
      closure$emit_0(x, y);
      closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
      closure$lastX_0.v = closure$prevX_0.v;
      closure$lastY_0.v = closure$prevY_0.v;
      closure$prevX.v = x;
      closure$prevY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_1(closure$lastX, closure$lastY) {
    return function (x, y) {
      closure$lastX.v = x;
      closure$lastY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_2(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
    return function (x, y) {
      var closure$emit_0 = closure$emit;
      var closure$emittedCount_0 = closure$emittedCount;
      var closure$prevX_0 = closure$prevX;
      var closure$lastX_0 = closure$lastX;
      var closure$prevY_0 = closure$prevY;
      var closure$lastY_0 = closure$lastY;
      closure$emit_0(x, y);
      closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
      closure$lastX_0.v = closure$prevX_0.v;
      closure$lastY_0.v = closure$prevY_0.v;
      closure$prevX.v = x;
      closure$prevY.v = y;
      return Unit;
    };
  }
  function emitPoints2$lambda(it) {
    return Unit;
  }
  function emitPoints2$lambda_0(it) {
    return Unit;
  }
  function emitPoints2$lambda$lambda(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1) {
    return function (ratio, get) {
      var x0 = closure$lx.v;
      var y0 = closure$ly.v;
      var xc = closure$x0;
      var yc = closure$y0;
      var t1 = 1 - ratio;
      var a = t1 * t1;
      var c = ratio * ratio;
      var b = 2 * t1 * ratio;
      get(a * x0 + b * xc + c * closure$x1, a * y0 + b * yc + c * closure$y1);
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_0(closure$emit) {
    return function (x, y) {
      closure$emit(x, y, false);
      return Unit;
    };
  }
  var emitPoints2$lambda_1 = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
      return function (x0, y0, x1, y1) {
        var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1);
        var curveSteps = numberToInt(sum);
        var compute = emitPoints2$lambda$lambda(closure$lx, closure$ly, x0, y0, x1, y1);
        var emit = emitPoints2$lambda$lambda_0(closure$emit);
        var rcurveSteps = Math_0.max(curveSteps, 20);
        var dt = 1.0 / rcurveSteps;
        var lastX = {v: 0.0};
        var lastY = {v: 0.0};
        var prevX = {v: 0.0};
        var prevY = {v: 0.0};
        var emittedCount = {v: 0};
        compute(0.0, approximateCurve$lambda(lastX, lastY));
        for (var n = 1; n < rcurveSteps; n++) {
          var ratio = n * dt;
          compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
        }
        closure$lx.v = x1;
        closure$ly.v = y1;
        closure$joint(false);
        return Unit;
      };
    };
  });
  function emitPoints2$lambda$lambda_1(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1, closure$x2, closure$y2) {
    return function (ratio, get) {
      var x0 = closure$lx.v;
      var y0 = closure$ly.v;
      var x1 = closure$x0;
      var y1 = closure$y0;
      var x2 = closure$x1;
      var y2 = closure$y1;
      var cx = 3.0 * (x1 - x0);
      var bx = 3.0 * (x2 - x1) - cx;
      var ax = closure$x2 - x0 - cx - bx;
      var cy = 3.0 * (y1 - y0);
      var by = 3.0 * (y2 - y1) - cy;
      var ay = closure$y2 - y0 - cy - by;
      var tSquared = ratio * ratio;
      var tCubed = tSquared * ratio;
      get(ax * tCubed + bx * tSquared + cx * ratio + x0, ay * tCubed + by * tSquared + cy * ratio + y0);
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_2(closure$emit) {
    return function (x, y) {
      closure$emit(x, y, false);
      return Unit;
    };
  }
  var emitPoints2$lambda_2 = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
      return function (x0, y0, x1, y1, x2, y2) {
        var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
        var curveSteps = numberToInt(sum);
        var compute = emitPoints2$lambda$lambda_1(closure$lx, closure$ly, x0, y0, x1, y1, x2, y2);
        var emit = emitPoints2$lambda$lambda_2(closure$emit);
        var rcurveSteps = Math_0.max(curveSteps, 20);
        var dt = 1.0 / rcurveSteps;
        var lastX = {v: 0.0};
        var lastY = {v: 0.0};
        var prevX = {v: 0.0};
        var prevY = {v: 0.0};
        var emittedCount = {v: 0};
        compute(0.0, approximateCurve$lambda(lastX, lastY));
        for (var n = 1; n < rcurveSteps; n++) {
          var ratio = n * dt;
          compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
        }
        closure$lx.v = x2;
        closure$ly.v = y2;
        closure$joint(false);
        return Unit;
      };
    };
  });
  function Shape2d() {
  }
  Shape2d.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  function Shape2d$WithArea() {
  }
  Shape2d$WithArea.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WithArea',
    interfaces: []
  };
  function Shape2d$Empty() {
    Shape2d$Empty_instance = this;
    Shape2d.call(this);
    this.paths_n07sij$_0 = listOf(new PointArrayList(0));
    this.closed_ojj3px$_0 = false;
    this.area_5jn9v0$_0 = 0.0;
  }
  Object.defineProperty(Shape2d$Empty.prototype, 'paths', {
    get: function () {
      return this.paths_n07sij$_0;
    }
  });
  Object.defineProperty(Shape2d$Empty.prototype, 'closed', {
    get: function () {
      return this.closed_ojj3px$_0;
    }
  });
  Object.defineProperty(Shape2d$Empty.prototype, 'area', {
    get: function () {
      return this.area_5jn9v0$_0;
    }
  });
  Shape2d$Empty.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  Shape2d$Empty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Empty',
    interfaces: [Shape2d$WithArea, Shape2d]
  };
  var Shape2d$Empty_instance = null;
  function Shape2d$Empty_getInstance() {
    if (Shape2d$Empty_instance === null) {
      new Shape2d$Empty();
    }return Shape2d$Empty_instance;
  }
  function Shape2d$Line(x0, y0, x1, y1) {
    Shape2d$Line$Companion_getInstance();
    Shape2d.call(this);
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.closed_wkx08c$_0 = false;
  }
  function Shape2d$Line$Companion() {
    Shape2d$Line$Companion_instance = this;
  }
  Shape2d$Line$Companion.prototype.invoke_7b5o5w$ = function (x0, y0, x1, y1) {
    return new Shape2d$Line(x0, y0, x1, y1);
  };
  Shape2d$Line$Companion.prototype.invoke_tjonv8$ = function (x0, y0, x1, y1) {
    return new Shape2d$Line(x0, y0, x1, y1);
  };
  Shape2d$Line$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.Shape2d.Line.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Shape2d$Shape2d$Line_init = _.com.soywiz.korma.geom.shape.Shape2d.Line;
    return function (x0, y0, x1, y1) {
      return new Shape2d$Shape2d$Line_init(numberToDouble(x0), numberToDouble(y0), numberToDouble(x1), numberToDouble(y1));
    };
  }));
  Shape2d$Line$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Shape2d$Line$Companion_instance = null;
  function Shape2d$Line$Companion_getInstance() {
    if (Shape2d$Line$Companion_instance === null) {
      new Shape2d$Line$Companion();
    }return Shape2d$Line$Companion_instance;
  }
  Object.defineProperty(Shape2d$Line.prototype, 'paths', {
    get: function () {
      var $receiver = new PointArrayList(2);
      $receiver.add_lu1900$(this.x0, this.y0).add_lu1900$(this.x1, this.y1);
      return listOf($receiver);
    }
  });
  Object.defineProperty(Shape2d$Line.prototype, 'closed', {
    get: function () {
      return this.closed_wkx08c$_0;
    }
  });
  Object.defineProperty(Shape2d$Line.prototype, 'area', {
    get: function () {
      return 0.0;
    }
  });
  Shape2d$Line.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  Shape2d$Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Shape2d$WithArea, Shape2d]
  };
  Shape2d$Line.prototype.component1 = function () {
    return this.x0;
  };
  Shape2d$Line.prototype.component2 = function () {
    return this.y0;
  };
  Shape2d$Line.prototype.component3 = function () {
    return this.x1;
  };
  Shape2d$Line.prototype.component4 = function () {
    return this.y1;
  };
  Shape2d$Line.prototype.copy_6y0v78$ = function (x0, y0, x1, y1) {
    return new Shape2d$Line(x0 === void 0 ? this.x0 : x0, y0 === void 0 ? this.y0 : y0, x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1);
  };
  Shape2d$Line.prototype.toString = function () {
    return 'Line(x0=' + Kotlin.toString(this.x0) + (', y0=' + Kotlin.toString(this.y0)) + (', x1=' + Kotlin.toString(this.x1)) + (', y1=' + Kotlin.toString(this.y1)) + ')';
  };
  Shape2d$Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x0) | 0;
    result = result * 31 + Kotlin.hashCode(this.y0) | 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    return result;
  };
  Shape2d$Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x0, other.x0) && Kotlin.equals(this.y0, other.y0) && Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1)))));
  };
  function Shape2d$Circle(x, y, radius, totalPoints) {
    Shape2d$Circle$Companion_getInstance();
    if (totalPoints === void 0)
      totalPoints = 32;
    Shape2d.call(this);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.totalPoints = totalPoints;
    this.paths_bm3p3m$_0 = lazy(Shape2d$Circle$paths$lambda(this));
    this.closed_waqg5k$_0 = true;
  }
  function Shape2d$Circle$Companion() {
    Shape2d$Circle$Companion_instance = this;
  }
  Shape2d$Circle$Companion.prototype.invoke_r7h88x$ = function (x, y, radius, totalPoints) {
    if (totalPoints === void 0)
      totalPoints = 32;
    return new Shape2d$Circle(x, y, radius, totalPoints);
  };
  Shape2d$Circle$Companion.prototype.invoke_tjonv8$ = function (x, y, radius, totalPoints) {
    if (totalPoints === void 0)
      totalPoints = 32;
    return new Shape2d$Circle(x, y, radius, totalPoints);
  };
  Shape2d$Circle$Companion.prototype.invoke_kw9hvg$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.Shape2d.Circle.Companion.invoke_kw9hvg$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Shape2d$Shape2d$Circle_init = _.com.soywiz.korma.geom.shape.Shape2d.Circle;
    return function (x, y, radius, totalPoints) {
      if (totalPoints === void 0)
        totalPoints = 32;
      return new Shape2d$Shape2d$Circle_init(numberToDouble(x), numberToDouble(y), numberToDouble(radius), totalPoints);
    };
  }));
  Shape2d$Circle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Shape2d$Circle$Companion_instance = null;
  function Shape2d$Circle$Companion_getInstance() {
    if (Shape2d$Circle$Companion_instance === null) {
      new Shape2d$Circle$Companion();
    }return Shape2d$Circle$Companion_instance;
  }
  Object.defineProperty(Shape2d$Circle.prototype, 'paths', {
    get: function () {
      return this.paths_bm3p3m$_0.value;
    }
  });
  Object.defineProperty(Shape2d$Circle.prototype, 'closed', {
    get: function () {
      return this.closed_waqg5k$_0;
    }
  });
  Object.defineProperty(Shape2d$Circle.prototype, 'area', {
    get: function () {
      return math.PI * this.radius * this.radius;
    }
  });
  Shape2d$Circle.prototype.containsPoint_lu1900$ = function (x, y) {
    var x_0 = this.x - x;
    var y_0 = this.y - y;
    return Math_0.hypot(x_0, y_0) < this.radius;
  };
  function Shape2d$Circle$paths$lambda$lambda(this$Circle) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$Circle.totalPoints;
      for (var it = 0; it < tmp$; it++) {
        $receiver.add_lu1900$(this$Circle.x + Angle$Companion_getInstance().cos01_14dthe$(it / this$Circle.totalPoints) * this$Circle.radius, this$Circle.y + Angle$Companion_getInstance().sin01_14dthe$(it / this$Circle.totalPoints) * this$Circle.radius);
      }
      return Unit;
    };
  }
  function Shape2d$Circle$paths$lambda(this$Circle) {
    return function () {
      return listOf(PointArrayList$Companion_getInstance().invoke_r4cj56$(this$Circle.totalPoints, Shape2d$Circle$paths$lambda$lambda(this$Circle)));
    };
  }
  Shape2d$Circle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Circle',
    interfaces: [Shape2d$WithArea, Shape2d]
  };
  Shape2d$Circle.prototype.component1 = function () {
    return this.x;
  };
  Shape2d$Circle.prototype.component2 = function () {
    return this.y;
  };
  Shape2d$Circle.prototype.component3 = function () {
    return this.radius;
  };
  Shape2d$Circle.prototype.component4 = function () {
    return this.totalPoints;
  };
  Shape2d$Circle.prototype.copy_88ee24$ = function (x, y, radius, totalPoints) {
    return new Shape2d$Circle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, radius === void 0 ? this.radius : radius, totalPoints === void 0 ? this.totalPoints : totalPoints);
  };
  Shape2d$Circle.prototype.toString = function () {
    return 'Circle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', radius=' + Kotlin.toString(this.radius)) + (', totalPoints=' + Kotlin.toString(this.totalPoints)) + ')';
  };
  Shape2d$Circle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.radius) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalPoints) | 0;
    return result;
  };
  Shape2d$Circle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.radius, other.radius) && Kotlin.equals(this.totalPoints, other.totalPoints)))));
  };
  function Shape2d$Rectangle(rect) {
    Shape2d$Rectangle$Companion_getInstance();
    Shape2d.call(this);
    this.rect = rect;
    this.paths_s0gmm5$_0 = listOf(PointArrayList$Companion_getInstance().invoke_r4cj56$(4, Shape2d$Rectangle$paths$lambda(this)));
    this.closed_be5ak7$_0 = true;
  }
  function Shape2d$Rectangle$Companion() {
    Shape2d$Rectangle$Companion_instance = this;
  }
  Shape2d$Rectangle$Companion.prototype.invoke_6y0v78$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.Shape2d.Rectangle.Companion.invoke_6y0v78$', wrapFunction(function () {
    var Rectangle_init = _.com.soywiz.korma.geom.Rectangle;
    var Shape2d$Shape2d$Rectangle_init = _.com.soywiz.korma.geom.shape.Shape2d.Rectangle;
    return function (x, y, width, height) {
      return new Shape2d$Shape2d$Rectangle_init(new Rectangle_init(x, y, width, height));
    };
  }));
  Shape2d$Rectangle$Companion.prototype.invoke_7b5o5w$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.Shape2d.Rectangle.Companion.invoke_7b5o5w$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    var Shape2d$Shape2d$Rectangle_init = _.com.soywiz.korma.geom.shape.Shape2d.Rectangle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      return new Shape2d$Shape2d$Rectangle_init(new Rectangle(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height)));
    };
  }));
  Shape2d$Rectangle$Companion.prototype.invoke_1ugm5o$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.Shape2d.Rectangle.Companion.invoke_1ugm5o$', wrapFunction(function () {
    var Rectangle = _.com.soywiz.korma.geom.Rectangle;
    var Shape2d$Shape2d$Rectangle_init = _.com.soywiz.korma.geom.shape.Shape2d.Rectangle;
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      return new Shape2d$Shape2d$Rectangle_init(new Rectangle(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height)));
    };
  }));
  Shape2d$Rectangle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Shape2d$Rectangle$Companion_instance = null;
  function Shape2d$Rectangle$Companion_getInstance() {
    if (Shape2d$Rectangle$Companion_instance === null) {
      new Shape2d$Rectangle$Companion();
    }return Shape2d$Rectangle$Companion_instance;
  }
  Object.defineProperty(Shape2d$Rectangle.prototype, 'paths', {
    get: function () {
      return this.paths_s0gmm5$_0;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'closed', {
    get: function () {
      return this.closed_be5ak7$_0;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'area', {
    get: function () {
      return get_width(this) * get_height(this);
    }
  });
  Shape2d$Rectangle.prototype.containsPoint_lu1900$ = function (x, y) {
    return rangeTo(get_left(this), get_right(this)).contains_mef7kx$(x) && rangeTo(get_top(this), get_bottom(this)).contains_mef7kx$(y);
  };
  Shape2d$Rectangle.prototype.toString = function () {
    return 'Rectangle(x=' + get_niceStr_0(get_x_0(this)) + ', y=' + get_niceStr_0(get_y_0(this)) + ', width=' + get_niceStr_0(get_width(this)) + ', height=' + get_niceStr_0(get_height(this)) + ')';
  };
  Object.defineProperty(Shape2d$Rectangle.prototype, '_height', {
    get: function () {
      return this.rect._height;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, '_width', {
    get: function () {
      return this.rect._width;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, '_x', {
    get: function () {
      return this.rect._x;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, '_y', {
    get: function () {
      return this.rect._y;
    }
  });
  function Shape2d$Rectangle$paths$lambda(this$Rectangle) {
    return function ($receiver) {
      $receiver.add_lu1900$(get_x_0(this$Rectangle), get_y_0(this$Rectangle)).add_lu1900$(get_x_0(this$Rectangle) + get_width(this$Rectangle), get_y_0(this$Rectangle)).add_lu1900$(get_x_0(this$Rectangle) + get_width(this$Rectangle), get_y_0(this$Rectangle) + get_height(this$Rectangle)).add_lu1900$(get_x_0(this$Rectangle), get_y_0(this$Rectangle) + get_height(this$Rectangle));
      return Unit;
    };
  }
  Shape2d$Rectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: [IRectangle, Shape2d$WithArea, Shape2d]
  };
  Shape2d$Rectangle.prototype.component1 = function () {
    return this.rect;
  };
  Shape2d$Rectangle.prototype.copy_2da8yn$ = function (rect) {
    return new Shape2d$Rectangle(rect === void 0 ? this.rect : rect);
  };
  Shape2d$Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rect) | 0;
    return result;
  };
  Shape2d$Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.rect, other.rect))));
  };
  function Shape2d$Polygon(points) {
    Shape2d.call(this);
    this.points = points;
    this.paths_dmz4uw$_0 = listOf(this.points);
    this.closed_o0oyo2$_0 = true;
  }
  Object.defineProperty(Shape2d$Polygon.prototype, 'paths', {
    get: function () {
      return this.paths_dmz4uw$_0;
    }
  });
  Object.defineProperty(Shape2d$Polygon.prototype, 'closed', {
    get: function () {
      return this.closed_o0oyo2$_0;
    }
  });
  Shape2d$Polygon.prototype.containsPoint_lu1900$ = function (x, y) {
    return contains_4(this.points, x, y);
  };
  Shape2d$Polygon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polygon',
    interfaces: [Shape2d]
  };
  Shape2d$Polygon.prototype.component1 = function () {
    return this.points;
  };
  Shape2d$Polygon.prototype.copy_j6pgbk$ = function (points) {
    return new Shape2d$Polygon(points === void 0 ? this.points : points);
  };
  Shape2d$Polygon.prototype.toString = function () {
    return 'Polygon(points=' + Kotlin.toString(this.points) + ')';
  };
  Shape2d$Polygon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  Shape2d$Polygon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.points, other.points))));
  };
  function Shape2d$Polyline(points) {
    Shape2d.call(this);
    this.points = points;
    this.paths_6cx7oe$_0 = listOf(this.points);
    this.closed_rn9e4o$_0 = false;
  }
  Object.defineProperty(Shape2d$Polyline.prototype, 'paths', {
    get: function () {
      return this.paths_6cx7oe$_0;
    }
  });
  Object.defineProperty(Shape2d$Polyline.prototype, 'closed', {
    get: function () {
      return this.closed_rn9e4o$_0;
    }
  });
  Object.defineProperty(Shape2d$Polyline.prototype, 'area', {
    get: function () {
      return 0.0;
    }
  });
  Shape2d$Polyline.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  Shape2d$Polyline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polyline',
    interfaces: [Shape2d$WithArea, Shape2d]
  };
  Shape2d$Polyline.prototype.component1 = function () {
    return this.points;
  };
  Shape2d$Polyline.prototype.copy_j6pgbk$ = function (points) {
    return new Shape2d$Polyline(points === void 0 ? this.points : points);
  };
  Shape2d$Polyline.prototype.toString = function () {
    return 'Polyline(points=' + Kotlin.toString(this.points) + ')';
  };
  Shape2d$Polyline.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  Shape2d$Polyline.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.points, other.points))));
  };
  function Shape2d$Complex(items) {
    Shape2d.call(this);
    this.items = items;
    this.paths_vlpala$_0 = lazy(Shape2d$Complex$paths$lambda(this));
    this.closed_sv7aq0$_0 = false;
  }
  Object.defineProperty(Shape2d$Complex.prototype, 'paths', {
    get: function () {
      return this.paths_vlpala$_0.value;
    }
  });
  Object.defineProperty(Shape2d$Complex.prototype, 'closed', {
    get: function () {
      return this.closed_sv7aq0$_0;
    }
  });
  Shape2d$Complex.prototype.containsPoint_lu1900$ = function (x, y) {
    return contains_4(getAllPoints(this), x, y);
  };
  function Shape2d$Complex$paths$lambda(this$Complex) {
    return function () {
      var $receiver = this$Complex.items;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element.paths;
        addAll(destination, list);
      }
      return destination;
    };
  }
  Shape2d$Complex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Complex',
    interfaces: [Shape2d]
  };
  Shape2d$Complex.prototype.component1 = function () {
    return this.items;
  };
  Shape2d$Complex.prototype.copy_em9l51$ = function (items) {
    return new Shape2d$Complex(items === void 0 ? this.items : items);
  };
  Shape2d$Complex.prototype.toString = function () {
    return 'Complex(items=' + Kotlin.toString(this.items) + ')';
  };
  Shape2d$Complex.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  Shape2d$Complex.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  Shape2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shape2d',
    interfaces: []
  };
  function get_totalVertices($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.size);
    }
    return sum(destination);
  }
  function add_16($receiver, shape) {
    var tmp$;
    tmp$ = shape.paths.iterator();
    while (tmp$.hasNext()) {
      var path = tmp$.next();
      add_3($receiver, path);
    }
  }
  function get_bounds($receiver) {
    var $receiver_0 = new BoundsBuilder();
    add_16($receiver_0, $receiver);
    return $receiver_0.getBounds_2da8yn$();
  }
  function toShape($receiver) {
    return new Shape2d$Rectangle(new Rectangle(get_x_0($receiver), get_y_0($receiver), get_width($receiver), get_height($receiver)));
  }
  var emitPoints = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.emitPoints_rkjm2x$', function ($receiver, flush, emit, curveSteps) {
    if (curveSteps === void 0)
      curveSteps = 20;
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    flush(false);
    var n = {v: 0};
    var $receiver_0 = $receiver.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = $receiver.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = $receiver.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          emit(x, y);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = $receiver.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          emit(x_0, y_0);
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 2:
          var x1 = $receiver.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var dt = 1.0 / curveSteps;
          for (var n_1 = 1; n_1 < curveSteps; n_1++) {
            var t = n_1 * dt;
            var t1 = 1 - t;
            var a = t1 * t1;
            var c = t * t;
            var b = 2 * t1 * t;
            emit(a * lx.v + b * x1 + c * x2, a * ly.v + b * y1 + c * y2);
          }

          lx.v = x2;
          ly.v = y2;
          break;
        case 3:
          var x1_0 = $receiver.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var dt_0 = 1.0 / curveSteps;
          for (var n_2 = 1; n_2 < curveSteps; n_2++) {
            var x0 = lx.v;
            var y0 = ly.v;
            var t_0 = n_2 * dt_0;
            var cx = 3.0 * (x1_0 - x0);
            var bx = 3.0 * (x2_0 - x1_0) - cx;
            var ax = x3 - x0 - cx - bx;
            var cy = 3.0 * (y1_0 - y0);
            var by = 3.0 * (y2_0 - y1_0) - cy;
            var ay = y3 - y0 - cy - by;
            var tSquared = t_0 * t_0;
            var tCubed = tSquared * t_0;
            emit(ax * tCubed + bx * tSquared + cx * t_0 + x0, ay * tCubed + by * tSquared + cy * t_0 + y0);
          }

          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          flush(true);
          break;
      }
    }
    flush(false);
  });
  var emitPoints2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.emitPoints2_i9jvg2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Point = _.com.soywiz.korma.geom.Point;
    var numberToInt = Kotlin.numberToInt;
    var Math_0 = Math;
    function approximateCurve$lambda(closure$lastX, closure$lastY) {
      return function (x, y) {
        closure$lastX.v = x;
        closure$lastY.v = y;
        return Unit;
      };
    }
    function approximateCurve$lambda_0(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
      return function (x, y) {
        var closure$emit_0 = closure$emit;
        var closure$emittedCount_0 = closure$emittedCount;
        var closure$prevX_0 = closure$prevX;
        var closure$lastX_0 = closure$lastX;
        var closure$prevY_0 = closure$prevY;
        var closure$lastY_0 = closure$lastY;
        closure$emit_0(x, y);
        closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
        closure$lastX_0.v = closure$prevX_0.v;
        closure$lastY_0.v = closure$prevY_0.v;
        closure$prevX.v = x;
        closure$prevY.v = y;
        return Unit;
      };
    }
    function approximateCurve$lambda_1(closure$lastX, closure$lastY) {
      return function (x, y) {
        closure$lastX.v = x;
        closure$lastY.v = y;
        return Unit;
      };
    }
    function approximateCurve$lambda_2(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
      return function (x, y) {
        var closure$emit_0 = closure$emit;
        var closure$emittedCount_0 = closure$emittedCount;
        var closure$prevX_0 = closure$prevX;
        var closure$lastX_0 = closure$lastX;
        var closure$prevY_0 = closure$prevY;
        var closure$lastY_0 = closure$lastY;
        closure$emit_0(x, y);
        closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
        closure$lastX_0.v = closure$prevX_0.v;
        closure$lastY_0.v = closure$prevY_0.v;
        closure$prevX.v = x;
        closure$prevY.v = y;
        return Unit;
      };
    }
    function emitPoints2$lambda(it) {
      return Unit;
    }
    function emitPoints2$lambda_0(it) {
      return Unit;
    }
    function emitPoints2$lambda$lambda(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1) {
      return function (ratio, get) {
        var x0 = closure$lx.v;
        var y0 = closure$ly.v;
        var xc = closure$x0;
        var yc = closure$y0;
        var t1 = 1 - ratio;
        var a = t1 * t1;
        var c = ratio * ratio;
        var b = 2 * t1 * ratio;
        get(a * x0 + b * xc + c * closure$x1, a * y0 + b * yc + c * closure$y1);
        return Unit;
      };
    }
    function emitPoints2$lambda$lambda_0(closure$emit) {
      return function (x, y) {
        closure$emit(x, y, false);
        return Unit;
      };
    }
    var emitPoints2$lambda_1 = wrapFunction(function () {
      var Math_0 = Math;
      return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
        return function (x0, y0, x1, y1) {
          var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1);
          var curveSteps = numberToInt(sum);
          var compute = emitPoints2$lambda$lambda(closure$lx, closure$ly, x0, y0, x1, y1);
          var emit = emitPoints2$lambda$lambda_0(closure$emit);
          var rcurveSteps = Math_0.max(curveSteps, 20);
          var dt = 1.0 / rcurveSteps;
          var lastX = {v: 0.0};
          var lastY = {v: 0.0};
          var prevX = {v: 0.0};
          var prevY = {v: 0.0};
          var emittedCount = {v: 0};
          compute(0.0, approximateCurve$lambda(lastX, lastY));
          for (var n = 1; n < rcurveSteps; n++) {
            var ratio = n * dt;
            compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
          }
          closure$lx.v = x1;
          closure$ly.v = y1;
          closure$joint(false);
          return Unit;
        };
      };
    });
    function emitPoints2$lambda$lambda_1(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1, closure$x2, closure$y2) {
      return function (ratio, get) {
        var x0 = closure$lx.v;
        var y0 = closure$ly.v;
        var x1 = closure$x0;
        var y1 = closure$y0;
        var x2 = closure$x1;
        var y2 = closure$y1;
        var cx = 3.0 * (x1 - x0);
        var bx = 3.0 * (x2 - x1) - cx;
        var ax = closure$x2 - x0 - cx - bx;
        var cy = 3.0 * (y1 - y0);
        var by = 3.0 * (y2 - y1) - cy;
        var ay = closure$y2 - y0 - cy - by;
        var tSquared = ratio * ratio;
        var tCubed = tSquared * ratio;
        get(ax * tCubed + bx * tSquared + cx * ratio + x0, ay * tCubed + by * tSquared + cy * ratio + y0);
        return Unit;
      };
    }
    function emitPoints2$lambda$lambda_2(closure$emit) {
      return function (x, y) {
        closure$emit(x, y, false);
        return Unit;
      };
    }
    var emitPoints2$lambda_2 = wrapFunction(function () {
      var Math_0 = Math;
      return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
        return function (x0, y0, x1, y1, x2, y2) {
          var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
          var curveSteps = numberToInt(sum);
          var compute = emitPoints2$lambda$lambda_1(closure$lx, closure$ly, x0, y0, x1, y1, x2, y2);
          var emit = emitPoints2$lambda$lambda_2(closure$emit);
          var rcurveSteps = Math_0.max(curveSteps, 20);
          var dt = 1.0 / rcurveSteps;
          var lastX = {v: 0.0};
          var lastY = {v: 0.0};
          var prevX = {v: 0.0};
          var prevY = {v: 0.0};
          var emittedCount = {v: 0};
          compute(0.0, approximateCurve$lambda(lastX, lastY));
          for (var n = 1; n < rcurveSteps; n++) {
            var ratio = n * dt;
            compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
          }
          closure$lx.v = x2;
          closure$ly.v = y2;
          closure$joint(false);
          return Unit;
        };
      };
    });
    return function ($receiver, flush, joint, emit) {
      if (flush === void 0)
        flush = emitPoints2$lambda;
      if (joint === void 0)
        joint = emitPoints2$lambda_0;
      var ix = {v: 0.0};
      var iy = {v: 0.0};
      var lx = {v: 0.0};
      var ly = {v: 0.0};
      flush(false);
      var n = {v: 0};
      var $receiver_0 = $receiver.commands;
      var tmp$;
      var n_0 = 0;
      while (n_0 < $receiver_0.size) {
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
        switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
          case 0:
            var x = $receiver.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
            var y = $receiver.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
            ix.v = x;
            iy.v = y;
            emit(x, y, true);
            lx.v = x;
            ly.v = y;
            break;
          case 1:
            var x_0 = $receiver.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
            var y_0 = $receiver.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
            emit(x_0, y_0, false);
            lx.v = x_0;
            ly.v = y_0;
            joint(false);
            break;
          case 2:
            var x1 = $receiver.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
            var y1 = $receiver.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
            var x2 = $receiver.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
            var y2 = $receiver.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
            var sum = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
            var curveSteps = numberToInt(sum);
            var rcurveSteps = Math_0.max(curveSteps, 20);
            var dt = 1.0 / rcurveSteps;
            var lastX = {v: 0.0};
            var lastY = {v: 0.0};
            var prevX = {v: 0.0};
            var prevY = {v: 0.0};
            var emittedCount = {v: 0};
            emitPoints2$lambda$lambda(lx, ly, x1, y1, x2, y2)(0.0, approximateCurve$lambda(lastX, lastY));
            for (var n_1 = 1; n_1 < rcurveSteps; n_1++) {
              var ratio = n_1 * dt;
              emitPoints2$lambda$lambda(lx, ly, x1, y1, x2, y2)(ratio, approximateCurve$lambda_0(emitPoints2$lambda$lambda_0(emit), emittedCount, prevX, lastX, prevY, lastY));
            }

            lx.v = x2;
            ly.v = y2;
            joint(false);
            break;
          case 3:
            var x1_0 = $receiver.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
            var y1_0 = $receiver.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
            var x2_0 = $receiver.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
            var y2_0 = $receiver.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
            var x3 = $receiver.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
            var y3 = $receiver.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
            var sum_0 = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1_0, y1_0) + Point.Companion.distance_6y0v78$(x1_0, y1_0, x2_0, y2_0) + Point.Companion.distance_6y0v78$(x2_0, y2_0, x3, y3);
            var curveSteps_0 = numberToInt(sum_0);
            var rcurveSteps_0 = Math_0.max(curveSteps_0, 20);
            var dt_0 = 1.0 / rcurveSteps_0;
            var lastX_0 = {v: 0.0};
            var lastY_0 = {v: 0.0};
            var prevX_0 = {v: 0.0};
            var prevY_0 = {v: 0.0};
            var emittedCount_0 = {v: 0};
            emitPoints2$lambda$lambda_1(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(0.0, approximateCurve$lambda_1(lastX_0, lastY_0));
            for (var n_2 = 1; n_2 < rcurveSteps_0; n_2++) {
              var ratio_0 = n_2 * dt_0;
              emitPoints2$lambda$lambda_1(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(ratio_0, approximateCurve$lambda_2(emitPoints2$lambda$lambda_2(emit), emittedCount_0, prevX_0, lastX_0, prevY_0, lastY_0));
            }

            lx.v = x3;
            ly.v = y3;
            joint(false);
            break;
          case 4:
            emit(ix.v, iy.v, false);
            joint(true);
            flush(true);
            break;
        }
      }
      flush(false);
    };
  }));
  function getPoints2$lambda(closure$out) {
    return function (x, y, move) {
      closure$out.add_lu1900$(x, y);
      return Unit;
    };
  }
  function getPoints2($receiver, out) {
    if (out === void 0)
      out = new PointArrayList();
    var ix = {v: 0.0};
    var iy = {v: 0.0};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    emitPoints2$lambda(false);
    var n = {v: 0};
    var $receiver_0 = $receiver.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = $receiver.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = $receiver.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          ix.v = x;
          iy.v = y;
          getPoints2$lambda(out)(x, y, true);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = $receiver.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          getPoints2$lambda(out)(x_0, y_0, false);
          lx.v = x_0;
          ly.v = y_0;
          emitPoints2$lambda_0(false);
          break;
        case 2:
          var x1 = $receiver.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var sum = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
          var curveSteps = numberToInt(sum);
          var rcurveSteps = Math_0.max(curveSteps, 20);
          var dt = 1.0 / rcurveSteps;
          var lastX = {v: 0.0};
          var lastY = {v: 0.0};
          var prevX = {v: 0.0};
          var prevY = {v: 0.0};
          var emittedCount = {v: 0};
          emitPoints2$lambda$lambda(lx, ly, x1, y1, x2, y2)(0.0, approximateCurve$lambda(lastX, lastY));
          for (var n_1 = 1; n_1 < rcurveSteps; n_1++) {
            var ratio = n_1 * dt;
            emitPoints2$lambda$lambda(lx, ly, x1, y1, x2, y2)(ratio, approximateCurve$lambda_0(emitPoints2$lambda$lambda_0(getPoints2$lambda(out)), emittedCount, prevX, lastX, prevY, lastY));
          }

          lx.v = x2;
          ly.v = y2;
          emitPoints2$lambda_0(false);
          break;
        case 3:
          var x1_0 = $receiver.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var sum_0 = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1_0, y1_0) + Point.Companion.distance_6y0v78$(x1_0, y1_0, x2_0, y2_0) + Point.Companion.distance_6y0v78$(x2_0, y2_0, x3, y3);
          var curveSteps_0 = numberToInt(sum_0);
          var rcurveSteps_0 = Math_0.max(curveSteps_0, 20);
          var dt_0 = 1.0 / rcurveSteps_0;
          var lastX_0 = {v: 0.0};
          var lastY_0 = {v: 0.0};
          var prevX_0 = {v: 0.0};
          var prevY_0 = {v: 0.0};
          var emittedCount_0 = {v: 0};
          emitPoints2$lambda$lambda_1(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(0.0, approximateCurve$lambda_1(lastX_0, lastY_0));
          for (var n_2 = 1; n_2 < rcurveSteps_0; n_2++) {
            var ratio_0 = n_2 * dt_0;
            emitPoints2$lambda$lambda_1(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(ratio_0, approximateCurve$lambda_2(emitPoints2$lambda$lambda_2(getPoints2$lambda(out)), emittedCount_0, prevX_0, lastX_0, prevY_0, lastY_0));
          }

          lx.v = x3;
          ly.v = y3;
          emitPoints2$lambda_0(false);
          break;
        case 4:
          getPoints2$lambda(out)(ix.v, iy.v, false);
          emitPoints2$lambda_0(true);
          emitPoints2$lambda(true);
          break;
      }
    }
    emitPoints2$lambda(false);
    return out;
  }
  function buildPath(out, block) {
    if (out === void 0)
      out = new VectorPath();
    block(out);
    return out;
  }
  var buildPath_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.buildPath_gbrr1q$', wrapFunction(function () {
    var VectorPath_init = _.com.soywiz.korma.geom.vector.VectorPath;
    var Winding = _.com.soywiz.korma.geom.vector.Winding;
    return function (out, winding, block) {
      if (out === void 0)
        out = new VectorPath_init();
      if (winding === void 0)
        winding = Winding.EVEN_ODD;
      out.winding = winding;
      block(out);
      return out;
    };
  }));
  var approximateCurve = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.shape.approximateCurve_nle32h$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Math_0 = Math;
    function approximateCurve$lambda(closure$lastX, closure$lastY) {
      return function (x, y) {
        closure$lastX.v = x;
        closure$lastY.v = y;
        return Unit;
      };
    }
    function approximateCurve$lambda_0(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
      return function (x, y) {
        var closure$emit_0 = closure$emit;
        var closure$emittedCount_0 = closure$emittedCount;
        var closure$prevX_0 = closure$prevX;
        var closure$lastX_0 = closure$lastX;
        var closure$prevY_0 = closure$prevY;
        var closure$lastY_0 = closure$lastY;
        closure$emit_0(x, y);
        closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
        closure$lastX_0.v = closure$prevX_0.v;
        closure$lastY_0.v = closure$prevY_0.v;
        closure$prevX.v = x;
        closure$prevY.v = y;
        return Unit;
      };
    }
    return function (curveSteps, compute, emit) {
      var rcurveSteps = Math_0.max(curveSteps, 20);
      var dt = 1.0 / rcurveSteps;
      var lastX = {v: 0.0};
      var lastY = {v: 0.0};
      var prevX = {v: 0.0};
      var prevY = {v: 0.0};
      var emittedCount = {v: 0};
      compute(0.0, approximateCurve$lambda(lastX, lastY));
      for (var n = 1; n < rcurveSteps; n++) {
        var ratio = n * dt;
        compute(ratio, approximateCurve$lambda_0(emit, emittedCount, prevX, lastX, prevY, lastY));
      }
    };
  }));
  function toRectangleOrNull($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ($receiver.size !== 4)
      return null;
    var points = setOf([to($receiver.getX_za3lpa$(0), $receiver.getY_za3lpa$(0)), to($receiver.getX_za3lpa$(1), $receiver.getY_za3lpa$(1)), to($receiver.getX_za3lpa$(2), $receiver.getY_za3lpa$(2)), to($receiver.getX_za3lpa$(3), $receiver.getY_za3lpa$(3))]);
    if (points.size !== 4)
      return null;
    var xs = setOf([$receiver.getX_za3lpa$(0), $receiver.getX_za3lpa$(1), $receiver.getX_za3lpa$(2), $receiver.getX_za3lpa$(3)]);
    var ys = setOf([$receiver.getY_za3lpa$(0), $receiver.getY_za3lpa$(1), $receiver.getY_za3lpa$(2), $receiver.getY_za3lpa$(3)]);
    if (xs.size !== 2 || ys.size !== 2)
      return null;
    tmp$ = min(xs);
    if (tmp$ == null) {
      return null;
    }var left = tmp$;
    tmp$_0 = max(xs);
    if (tmp$_0 == null) {
      return null;
    }var right = tmp$_0;
    tmp$_1 = max(ys);
    if (tmp$_1 == null) {
      return null;
    }var top = tmp$_1;
    tmp$_2 = min(ys);
    if (tmp$_2 == null) {
      return null;
    }var bottom = tmp$_2;
    return new Shape2d$Rectangle(Rectangle.Companion.invoke().setBounds_6y0v78$(top, left, right, bottom));
  }
  function toShape2d($receiver, closed) {
    if (closed === void 0)
      closed = true;
    if (closed && $receiver.size === 4) {
      var x0 = $receiver.getX_za3lpa$(0);
      var y0 = $receiver.getY_za3lpa$(0);
      var x1 = $receiver.getX_za3lpa$(2);
      var y1 = $receiver.getY_za3lpa$(2);
      if ($receiver.getX_za3lpa$(1) === x1 && $receiver.getY_za3lpa$(1) === y0 && $receiver.getX_za3lpa$(3) === x0 && $receiver.getY_za3lpa$(3) === y1) {
        return new Shape2d$Rectangle(Rectangle.Companion.invoke().setBounds_6y0v78$(x0, y0, x1, y1));
      }}return closed ? new Shape2d$Polygon($receiver) : new Shape2d$Polyline($receiver);
  }
  function toShape2d_0($receiver, closed) {
    if (closed === void 0)
      closed = true;
    var tmp$;
    var $receiver_0 = toPathList($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(toShape2d(item, closed));
    }
    var items = destination;
    switch (items.size) {
      case 0:
        tmp$ = Shape2d$Empty_getInstance();
        break;
      case 1:
        tmp$ = first(items);
        break;
      default:tmp$ = new Shape2d$Complex(items);
        break;
    }
    return tmp$;
  }
  function toPathList($receiver) {
    var paths = ArrayList_init_0();
    var path = {v: new PointArrayList()};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    if (path.v.isNotEmpty()) {
      var element = path.v;
      paths.add_11rb$(element);
      path.v = new PointArrayList();
    }var n = {v: 0};
    var $receiver_0 = $receiver.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = $receiver.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = $receiver.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          path.v.add_lu1900$(x, y);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = $receiver.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          path.v.add_lu1900$(x_0, y_0);
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 2:
          var x1 = $receiver.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var dt = 1.0 / 20;
          for (var n_1 = 1; n_1 < 20; n_1++) {
            var t = n_1 * dt;
            var t1 = 1 - t;
            var a = t1 * t1;
            var c = t * t;
            var b = 2 * t1 * t;
            path.v.add_lu1900$(a * lx.v + b * x1 + c * x2, a * ly.v + b * y1 + c * y2);
          }

          lx.v = x2;
          ly.v = y2;
          break;
        case 3:
          var x1_0 = $receiver.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var dt_0 = 1.0 / 20;
          for (var n_2 = 1; n_2 < 20; n_2++) {
            var x0 = lx.v;
            var y0 = ly.v;
            var t_0 = n_2 * dt_0;
            var cx = 3.0 * (x1_0 - x0);
            var bx = 3.0 * (x2_0 - x1_0) - cx;
            var ax = x3 - x0 - cx - bx;
            var cy = 3.0 * (y1_0 - y0);
            var by = 3.0 * (y2_0 - y1_0) - cy;
            var ay = y3 - y0 - cy - by;
            var tSquared = t_0 * t_0;
            var tCubed = tSquared * t_0;
            path.v.add_lu1900$(ax * tCubed + bx * tSquared + cx * t_0 + x0, ay * tCubed + by * tSquared + cy * t_0 + y0);
          }

          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          if (path.v.isNotEmpty()) {
            var element_0 = path.v;
            paths.add_11rb$(element_0);
            path.v = new PointArrayList();
          }
          break;
      }
    }
    if (path.v.isNotEmpty()) {
      var element_1 = path.v;
      paths.add_11rb$(element_1);
      path.v = new PointArrayList();
    }return paths;
  }
  function getAllPoints($receiver, out) {
    if (out === void 0)
      out = new PointArrayList();
    var tmp$;
    tmp$ = $receiver.paths.iterator();
    while (tmp$.hasNext()) {
      var path = tmp$.next();
      add_13(out, path);
    }
    return out;
  }
  function toPolygon($receiver) {
    return Kotlin.isType($receiver, Shape2d$Polygon) ? $receiver : new Shape2d$Polygon(getAllPoints($receiver));
  }
  function containsPoint($receiver, x, y) {
    var tmp$;
    var intersections = 0;
    tmp$ = $receiver.size - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var p1 = $receiver.get_za3lpa$(n + 0 | 0);
      var p2 = $receiver.get_za3lpa$(n + 1 | 0);
      intersections = intersections + HorizontalLine_getInstance().intersectionsWithLine_15yvbs$(x, y, get_x(p1), get_y(p1), get_x(p2), get_y(p2)) | 0;
    }
    return intersections % 2 !== 0;
  }
  function Edge(dummy, p, q) {
    Edge$Companion_getInstance();
    this.dummy = dummy;
    this.p = p;
    this.q = q;
  }
  Edge.prototype.hasPoint_3qfxs9$ = function (point) {
    return equals(this.p, point) || equals(this.q, point);
  };
  function Edge$Companion() {
    Edge$Companion_instance = this;
  }
  Edge$Companion.prototype.invoke_v3tj7w$ = function (p1, p2) {
    var comp = compare(Point$Companion_getInstance(), p1, p2);
    if (comp === 0)
      throw Error_init('Repeat points');
    var p = comp < 0 ? p1 : p2;
    var q = comp < 0 ? p2 : p1;
    return new Edge(true, p, q);
  };
  Edge$Companion.prototype.getUniquePointsFromEdges_pujsku$ = function (edges) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = edges.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = listOf_0([element.p, element.q]);
      addAll(destination, list);
    }
    return distinct(destination);
  };
  Edge$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Edge$Companion_instance = null;
  function Edge$Companion_getInstance() {
    if (Edge$Companion_instance === null) {
      new Edge$Companion();
    }return Edge$Companion_instance;
  }
  Edge.prototype.toString = function () {
    return 'Edge(' + this.p + ', ' + this.q + ')';
  };
  Edge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  Edge.prototype.component1 = function () {
    return this.dummy;
  };
  Edge.prototype.component2 = function () {
    return this.p;
  };
  Edge.prototype.component3 = function () {
    return this.q;
  };
  Edge.prototype.copy_8x1n7p$ = function (dummy, p, q) {
    return new Edge(dummy === void 0 ? this.dummy : dummy, p === void 0 ? this.p : p, q === void 0 ? this.q : q);
  };
  Edge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    result = result * 31 + Kotlin.hashCode(this.p) | 0;
    result = result * 31 + Kotlin.hashCode(this.q) | 0;
    return result;
  };
  Edge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dummy, other.dummy) && Kotlin.equals(this.p, other.p) && Kotlin.equals(this.q, other.q)))));
  };
  function Triangle() {
    Triangle$Companion_getInstance();
  }
  function Triangle$Base(p0, p1, p2) {
    this.p0_y3br3n$_0 = p0;
    this.p1_y3br2s$_0 = p1;
    this.p2_y3br1x$_0 = p2;
  }
  Object.defineProperty(Triangle$Base.prototype, 'p0', {
    get: function () {
      return this.p0_y3br3n$_0;
    }
  });
  Object.defineProperty(Triangle$Base.prototype, 'p1', {
    get: function () {
      return this.p1_y3br2s$_0;
    }
  });
  Object.defineProperty(Triangle$Base.prototype, 'p2', {
    get: function () {
      return this.p2_y3br1x$_0;
    }
  });
  Triangle$Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [Triangle]
  };
  Triangle$Base.prototype.component1 = function () {
    return this.p0;
  };
  Triangle$Base.prototype.component2 = function () {
    return this.p1;
  };
  Triangle$Base.prototype.component3 = function () {
    return this.p2;
  };
  Triangle$Base.prototype.copy_36hh2h$ = function (p0, p1, p2) {
    return new Triangle$Base(p0 === void 0 ? this.p0 : p0, p1 === void 0 ? this.p1 : p1, p2 === void 0 ? this.p2 : p2);
  };
  Triangle$Base.prototype.toString = function () {
    return 'Base(p0=' + Kotlin.toString(this.p0) + (', p1=' + Kotlin.toString(this.p1)) + (', p2=' + Kotlin.toString(this.p2)) + ')';
  };
  Triangle$Base.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.p0) | 0;
    result = result * 31 + Kotlin.hashCode(this.p1) | 0;
    result = result * 31 + Kotlin.hashCode(this.p2) | 0;
    return result;
  };
  Triangle$Base.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.p0, other.p0) && Kotlin.equals(this.p1, other.p1) && Kotlin.equals(this.p2, other.p2)))));
  };
  function Triangle$Companion() {
    Triangle$Companion_instance = this;
    this.EPSILON_0 = 1.0E-12;
  }
  Triangle$Companion.prototype.area_36hh2h$ = function (p1, p2, p3) {
    return this.area_15yvbs$(get_x(p1), get_y(p1), get_x(p2), get_y(p2), get_x(p3), get_y(p3));
  };
  Triangle$Companion.prototype.area_15yvbs$ = function (ax, ay, bx, by, cx, cy) {
    var a = bx - ax;
    var b = by - ay;
    var c = cx - ax;
    var d = cy - ay;
    var x = a * d - c * b;
    return Math_0.abs(x) / 2.0;
  };
  Triangle$Companion.prototype.getNotCommonVertexIndex_q9l14g$ = function (t1, t2) {
    var sum = 0;
    var index = -1;
    if (!containsPoint_0(t2, point(t1, 0))) {
      index = 0;
      sum = sum + 1 | 0;
    }if (!containsPoint_0(t2, point(t1, 1))) {
      index = 1;
      sum = sum + 1 | 0;
    }if (!containsPoint_0(t2, point(t1, 2))) {
      index = 2;
      sum = sum + 1 | 0;
    }if (sum !== 1)
      throw Error_init('Triangles are not contiguous');
    return index;
  };
  Triangle$Companion.prototype.getNotCommonVertex_q9l14g$ = function (t1, t2) {
    return point(t1, this.getNotCommonVertexIndex_q9l14g$(t1, t2));
  };
  Triangle$Companion.prototype.getUniquePointsFromTriangles_pbqudv$ = function (triangles) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = triangles.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = listOf_0([element.p0, element.p1, element.p2]);
      addAll(destination, list);
    }
    return distinct(destination);
  };
  Triangle$Companion.prototype.insideIncircle_j380b8$ = function (pa, pb, pc, pd) {
    var adx = get_x(pa) - get_x(pd);
    var ady = get_y(pa) - get_y(pd);
    var bdx = get_x(pb) - get_x(pd);
    var bdy = get_y(pb) - get_y(pd);
    var adxbdy = adx * bdy;
    var bdxady = bdx * ady;
    var oabd = adxbdy - bdxady;
    if (oabd <= 0)
      return false;
    var cdx = get_x(pc) - get_x(pd);
    var cdy = get_y(pc) - get_y(pd);
    var cdxady = cdx * ady;
    var adxcdy = adx * cdy;
    var ocad = cdxady - adxcdy;
    if (ocad <= 0)
      return false;
    var bdxcdy = bdx * cdy;
    var cdxbdy = cdx * bdy;
    var alift = adx * adx + ady * ady;
    var blift = bdx * bdx + bdy * bdy;
    var clift = cdx * cdx + cdy * cdy;
    var det = alift * (bdxcdy - cdxbdy) + blift * ocad + clift * oabd;
    return det > 0;
  };
  Triangle$Companion.prototype.inScanArea_j380b8$ = function (pa, pb, pc, pd) {
    var pdx = get_x(pd);
    var pdy = get_y(pd);
    var adx = get_x(pa) - pdx;
    var ady = get_y(pa) - pdy;
    var bdx = get_x(pb) - pdx;
    var bdy = get_y(pb) - pdy;
    var adxbdy = adx * bdy;
    var bdxady = bdx * ady;
    var oabd = adxbdy - bdxady;
    if (oabd <= this.EPSILON_0)
      return false;
    var cdx = get_x(pc) - pdx;
    var cdy = get_y(pc) - pdy;
    var cdxady = cdx * ady;
    var adxcdy = adx * cdy;
    var ocad = cdxady - adxcdy;
    if (ocad <= this.EPSILON_0)
      return false;
    return true;
  };
  Triangle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Triangle$Companion_instance = null;
  function Triangle$Companion_getInstance() {
    if (Triangle$Companion_instance === null) {
      new Triangle$Companion();
    }return Triangle$Companion_instance;
  }
  Triangle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Triangle',
    interfaces: []
  };
  function point($receiver, index) {
    switch (index) {
      case 0:
        return $receiver.p0;
      case 1:
        return $receiver.p1;
      case 2:
        return $receiver.p2;
      default:throw IllegalStateException_init(('Invalid triangle point index ' + index).toString());
    }
  }
  function containsPoint_0($receiver, point) {
    return equals(point, $receiver.p0) || equals(point, $receiver.p1) || equals(point, $receiver.p2);
  }
  function containsEdge($receiver, edge) {
    return containsEdgePoints($receiver, edge.p, edge.q);
  }
  function containsEdgePoints($receiver, p1, p2) {
    return containsPoint_0($receiver, p1) && containsPoint_0($receiver, p2);
  }
  function _product(p1, p2, p3) {
    return (get_x(p1) - get_x(p3)) * (get_y(p2) - get_y(p3)) - (get_y(p1) - get_y(p3)) * (get_x(p2) - get_x(p3));
  }
  function pointInsideTriangle($receiver, pp) {
    var sign0 = _product($receiver.p0, $receiver.p1, $receiver.p2);
    var sign1 = _product($receiver.p0, $receiver.p1, pp);
    var sign2 = _product($receiver.p1, $receiver.p2, pp);
    var sign3 = _product($receiver.p2, $receiver.p0, pp);
    return sign0 >= 0 ? sign1 >= 0 && sign2 >= 0 && sign3 >= 0 : sign1 <= 0 && sign2 <= 0 && sign3 <= 0;
  }
  function getPointIndexOffsetNoThrow($receiver, p, offset, notFound) {
    if (offset === void 0)
      offset = 0;
    if (notFound === void 0)
      notFound = -2147483648;
    var no = offset;
    for (var n = 0; n < 3; n++) {
      while (no < 0)
        no = no + 3 | 0;
      while (no > 2)
        no = no - 3 | 0;
      if (equals(p, point($receiver, n)))
        return no;
      no = no + 1 | 0;
    }
    return notFound;
  }
  function getPointIndexOffset($receiver, p, offset) {
    if (offset === void 0)
      offset = 0;
    var v = getPointIndexOffsetNoThrow($receiver, p, offset, -2147483648);
    if (v === -2147483648)
      throw Error_init('Point2d not in triangle');
    return v;
  }
  function pointCW($receiver, p) {
    return point($receiver, getPointIndexOffset($receiver, p, -1));
  }
  function pointCCW($receiver, p) {
    return point($receiver, getPointIndexOffset($receiver, p, 1));
  }
  function oppositePoint($receiver, t, p) {
    return pointCW($receiver, pointCW(t, p));
  }
  function Triangle_0(p0, p1, p2, fixOrientation, checkOrientation) {
    if (fixOrientation === void 0)
      fixOrientation = false;
    if (checkOrientation === void 0)
      checkOrientation = true;
    var p1_0 = p1;
    var p2_0 = p2;
    if (fixOrientation) {
      if (Orientation$Companion_getInstance().orient2d_36hh2h$(p0, p1_0, p2_0) === Orientation$CLOCK_WISE_getInstance()) {
        var pt = p2_0;
        p2_0 = p1_0;
        p1_0 = pt;
      }}if (checkOrientation && Orientation$Companion_getInstance().orient2d_36hh2h$(p2_0, p1_0, p0) !== Orientation$CLOCK_WISE_getInstance())
      throw Error_init('Triangle must defined with Orientation.CW');
    return new Triangle$Base(p0, p1_0, p2_0);
  }
  function get_area_0($receiver) {
    return Triangle$Companion_getInstance().area_36hh2h$($receiver.p0, $receiver.p1, $receiver.p2);
  }
  function index($receiver, p) {
    return getPointIndexOffsetNoThrow($receiver, p, 0, -1);
  }
  function edgeIndex($receiver, p1, p2) {
    if (equals(p1, point($receiver, 0))) {
      if (equals(p2, point($receiver, 1)))
        return 2;
      if (equals(p2, point($receiver, 2)))
        return 1;
    } else if (equals(p1, point($receiver, 1))) {
      if (equals(p2, point($receiver, 2)))
        return 0;
      if (equals(p2, point($receiver, 0)))
        return 2;
    } else if (equals(p1, point($receiver, 2))) {
      if (equals(p2, point($receiver, 0)))
        return 1;
      if (equals(p2, point($receiver, 1)))
        return 0;
    }return -1;
  }
  function Edge_0() {
    Edge$Companion_getInstance_0();
    this.ax_hepvbn$_0 = 0;
    this.ay_hepvas$_0 = 0;
    this.bx_hepuky$_0 = 0;
    this.by_hepuk3$_0 = 0;
    this.wind_xputq4$_0 = 0;
    this.dy_hept2p$_0 = 0;
    this.dx_hept3k$_0 = 0;
    this.isCoplanarX_e75f14$_0 = false;
    this.isCoplanarY_e75f09$_0 = false;
    this.h_k265hk$_0 = 0;
  }
  Edge_0.prototype.getX_za3lpa$ = function (n) {
    return n === 0 ? this.ax : this.bx;
  };
  Edge_0.prototype.getY_za3lpa$ = function (n) {
    return n === 0 ? this.ay : this.by;
  };
  function Edge$Companion_0() {
    Edge$Companion_instance_0 = this;
  }
  Edge$Companion_0.prototype.invoke_4qozqa$ = function (ax, ay, bx, by, wind) {
    if (wind === void 0)
      wind = 0;
    return (new Edge_0()).setTo_4qozqa$(ax, ay, bx, by, wind);
  };
  Edge$Companion_0.prototype.getIntersectY_6yznwk$ = function (a, b) {
    getIntersectXY_im8a1b$break: do {
      var Ax = a.ax;
      var Ay = a.ay;
      var Bx = a.bx;
      var By = a.by;
      var Cx = b.ax;
      var Cy = b.ay;
      var Dx = b.bx;
      var Dy = b.by;
      var a1 = By - Ay;
      var b1 = Ax - Bx;
      var c1 = a1 * Ax + b1 * Ay;
      var a2 = Dy - Cy;
      var b2 = Cx - Dx;
      var c2 = a2 * Cx + b2 * Cy;
      var determinant = a1 * b2 - a2 * b1;
      if (determinant === 0.0) {
        false;
        break getIntersectXY_im8a1b$break;
      }var x = (b2 * c1 - b1 * c2) / determinant;
      var y = (a1 * c2 - a2 * c1) / determinant;
      floorCeil(x);
      return numberToInt(floorCeil(y));
    }
     while (false);
    return -2147483648;
  };
  Edge$Companion_0.prototype.getIntersectX_6yznwk$ = function (a, b) {
    getIntersectXY_im8a1b$break: do {
      var Ax = a.ax;
      var Ay = a.ay;
      var Bx = a.bx;
      var By = a.by;
      var Cx = b.ax;
      var Cy = b.ay;
      var Dx = b.bx;
      var Dy = b.by;
      var a1 = By - Ay;
      var b1 = Ax - Bx;
      var c1 = a1 * Ax + b1 * Ay;
      var a2 = Dy - Cy;
      var b2 = Cx - Dx;
      var c2 = a2 * Cx + b2 * Cy;
      var determinant = a1 * b2 - a2 * b1;
      if (determinant === 0.0) {
        false;
        break getIntersectXY_im8a1b$break;
      }var x = (b2 * c1 - b1 * c2) / determinant;
      var y = (a1 * c2 - a2 * c1) / determinant;
      var x_0 = floorCeil(x);
      floorCeil(y);
      return numberToInt(x_0);
    }
     while (false);
    return -2147483648;
  };
  Edge$Companion_0.prototype.areParallel_6yznwk$ = function (a, b) {
    return (Kotlin.imul(a.by - a.ay | 0, b.ax - b.bx | 0) - Kotlin.imul(b.by - b.ay | 0, a.ax - a.bx | 0) | 0) === 0;
  };
  Edge$Companion_0.prototype.getIntersectXY_h637yw$ = function (a, b, out) {
    if (out === void 0)
      out = Point$Companion_getInstance().invoke();
    getIntersectXY_im8a1b$break: do {
      var Ax = a.ax;
      var Ay = a.ay;
      var Bx = a.bx;
      var By = a.by;
      var Cx = b.ax;
      var Cy = b.ay;
      var Dx = b.bx;
      var Dy = b.by;
      var a1 = By - Ay;
      var b1 = Ax - Bx;
      var c1 = a1 * Ax + b1 * Ay;
      var a2 = Dy - Cy;
      var b2 = Cx - Dx;
      var c2 = a2 * Cx + b2 * Cy;
      var determinant = a1 * b2 - a2 * b1;
      if (determinant === 0.0) {
        false;
        break getIntersectXY_im8a1b$break;
      }var x = (b2 * c1 - b1 * c2) / determinant;
      var y = (a1 * c2 - a2 * c1) / determinant;
      return out.setTo_lu1900$(floorCeil(x), floorCeil(y));
    }
     while (false);
    return null;
  };
  Edge$Companion_0.prototype.getIntersectXYInt_7c9utl$ = function (a, b, out) {
    if (out === void 0)
      out = PointInt$Companion_getInstance().invoke();
    getIntersectXY_im8a1b$break: do {
      var Ax = a.ax;
      var Ay = a.ay;
      var Bx = a.bx;
      var By = a.by;
      var Cx = b.ax;
      var Cy = b.ay;
      var Dx = b.bx;
      var Dy = b.by;
      var a1 = By - Ay;
      var b1 = Ax - Bx;
      var c1 = a1 * Ax + b1 * Ay;
      var a2 = Dy - Cy;
      var b2 = Cx - Dx;
      var c2 = a2 * Cx + b2 * Cy;
      var determinant = a1 * b2 - a2 * b1;
      if (determinant === 0.0) {
        false;
        break getIntersectXY_im8a1b$break;
      }var x = (b2 * c1 - b1 * c2) / determinant;
      var y = (a1 * c2 - a2 * c1) / determinant;
      var x_0 = floorCeil(x);
      var y_0 = floorCeil(y);
      return out.setTo_vux9f0$(numberToInt(x_0), numberToInt(y_0));
    }
     while (false);
    return null;
  };
  Edge$Companion_0.prototype.angleBetween_6yznwk$ = function (a, b) {
    return minus(b.angle, a.angle);
  };
  Edge$Companion_0.prototype.getIntersectXY_im8a1b$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.Edge.Companion.getIntersectXY_im8a1b$', wrapFunction(function () {
    var floorCeil = _.com.soywiz.korma.internal.floorCeil_14dthe$;
    return function (a, b, out) {
      var Ax = a.ax;
      var Ay = a.ay;
      var Bx = a.bx;
      var By = a.by;
      var Cx = b.ax;
      var Cy = b.ay;
      var Dx = b.bx;
      var Dy = b.by;
      var a1 = By - Ay;
      var b1 = Ax - Bx;
      var c1 = a1 * Ax + b1 * Ay;
      var a2 = Dy - Cy;
      var b2 = Cx - Dx;
      var c2 = a2 * Cx + b2 * Cy;
      var determinant = a1 * b2 - a2 * b1;
      if (determinant === 0.0)
        return false;
      var x = (b2 * c1 - b1 * c2) / determinant;
      var y = (a1 * c2 - a2 * c1) / determinant;
      out(floorCeil(x), floorCeil(y));
      return true;
    };
  }));
  Edge$Companion_0.prototype.getIntersectXY_njgcw7$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.Edge.Companion.getIntersectXY_njgcw7$', function (Ax, Ay, Bx, By, Cx, Cy, Dx, Dy, out) {
    var a1 = By - Ay;
    var b1 = Ax - Bx;
    var c1 = a1 * Ax + b1 * Ay;
    var a2 = Dy - Cy;
    var b2 = Cx - Dx;
    var c2 = a2 * Cx + b2 * Cy;
    var determinant = a1 * b2 - a2 * b1;
    if (determinant === 0.0)
      return false;
    var x = (b2 * c1 - b1 * c2) / determinant;
    var y = (a1 * c2 - a2 * c1) / determinant;
    out(x, y);
    return true;
  });
  Edge$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Edge$Companion_instance_0 = null;
  function Edge$Companion_getInstance_0() {
    if (Edge$Companion_instance_0 === null) {
      new Edge$Companion_0();
    }return Edge$Companion_instance_0;
  }
  Object.defineProperty(Edge_0.prototype, 'ax', {
    get: function () {
      return this.ax_hepvbn$_0;
    },
    set: function (ax) {
      this.ax_hepvbn$_0 = ax;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'ay', {
    get: function () {
      return this.ay_hepvas$_0;
    },
    set: function (ay) {
      this.ay_hepvas$_0 = ay;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'bx', {
    get: function () {
      return this.bx_hepuky$_0;
    },
    set: function (bx) {
      this.bx_hepuky$_0 = bx;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'by', {
    get: function () {
      return this.by_hepuk3$_0;
    },
    set: function (by) {
      this.by_hepuk3$_0 = by;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'wind', {
    get: function () {
      return this.wind_xputq4$_0;
    },
    set: function (wind) {
      this.wind_xputq4$_0 = wind;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'dy', {
    get: function () {
      return this.dy_hept2p$_0;
    },
    set: function (dy) {
      this.dy_hept2p$_0 = dy;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'dx', {
    get: function () {
      return this.dx_hept3k$_0;
    },
    set: function (dx) {
      this.dx_hept3k$_0 = dx;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'isCoplanarX', {
    get: function () {
      return this.isCoplanarX_e75f14$_0;
    },
    set: function (isCoplanarX) {
      this.isCoplanarX_e75f14$_0 = isCoplanarX;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'isCoplanarY', {
    get: function () {
      return this.isCoplanarY_e75f09$_0;
    },
    set: function (isCoplanarY) {
      this.isCoplanarY_e75f09$_0 = isCoplanarY;
    }
  });
  Object.defineProperty(Edge_0.prototype, 'h', {
    get: function () {
      return this.h_k265hk$_0;
    },
    set: function (h) {
      this.h_k265hk$_0 = h;
    }
  });
  Edge_0.prototype.copyFrom_7cv26g$ = function (other) {
    return this.setTo_4qozqa$(other.ax, other.ay, other.bx, other.by, other.wind);
  };
  Edge_0.prototype.setTo_4qozqa$ = function (ax, ay, bx, by, wind) {
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    this.dx = bx - ax | 0;
    this.dy = by - ay | 0;
    this.isCoplanarX = ay === by;
    this.isCoplanarY = ax === bx;
    this.wind = wind;
    this.h = this.isCoplanarY ? 0 : ay - (Kotlin.imul(ax, this.dy) / this.dx | 0) | 0;
    return this;
  };
  Edge_0.prototype.setToHalf_6yznwk$ = function (a, b) {
    var a_0 = a.minY;
    var b_0 = b.minY;
    var minY = Math_0.min(a_0, b_0);
    var a_1 = a.maxY;
    var b_1 = b.maxY;
    var maxY = Math_0.min(a_1, b_1);
    var minX = (a.intersectX_za3lpa$(minY) + b.intersectX_za3lpa$(minY) | 0) / 2 | 0;
    var maxX = (a.intersectX_za3lpa$(maxY) + b.intersectX_za3lpa$(maxY) | 0) / 2 | 0;
    this.setTo_4qozqa$(minX, minY, maxX, maxY, 1);
    return this;
  };
  Object.defineProperty(Edge_0.prototype, 'minX', {
    get: function () {
      var a = this.ax;
      var b = this.bx;
      return Math_0.min(a, b);
    }
  });
  Object.defineProperty(Edge_0.prototype, 'maxX', {
    get: function () {
      var a = this.ax;
      var b = this.bx;
      return Math_0.max(a, b);
    }
  });
  Object.defineProperty(Edge_0.prototype, 'minY', {
    get: function () {
      var a = this.ay;
      var b = this.by;
      return Math_0.min(a, b);
    }
  });
  Object.defineProperty(Edge_0.prototype, 'maxY', {
    get: function () {
      var a = this.ay;
      var b = this.by;
      return Math_0.max(a, b);
    }
  });
  Edge_0.prototype.containsY_za3lpa$ = function (y) {
    return y >= this.ay && y < this.by;
  };
  Edge_0.prototype.containsYNear_vux9f0$ = function (y, offset) {
    return y >= (this.ay - offset | 0) && y < (this.by + offset | 0);
  };
  Edge_0.prototype.intersectX_za3lpa$ = function (y) {
    return this.isCoplanarY ? this.ax : Kotlin.imul(y - this.h | 0, this.dx) / this.dy | 0;
  };
  Object.defineProperty(Edge_0.prototype, 'angle', {
    get: function () {
      var $this = Angle$Companion_getInstance();
      var x0 = this.ax;
      var y0 = this.ay;
      var x1 = this.bx;
      var y1 = this.by;
      return $this.between_6y0v78$(numberToDouble(x0), numberToDouble(y0), numberToDouble(x1), numberToDouble(y1));
    }
  });
  Object.defineProperty(Edge_0.prototype, 'cos', {
    get: function () {
      return get_cosine(this.angle);
    }
  });
  Object.defineProperty(Edge_0.prototype, 'absCos', {
    get: function () {
      var $receiver = this.cos;
      return Math_0.abs($receiver);
    }
  });
  Object.defineProperty(Edge_0.prototype, 'sin', {
    get: function () {
      return get_sine(this.angle);
    }
  });
  Object.defineProperty(Edge_0.prototype, 'absSin', {
    get: function () {
      var $receiver = this.sin;
      return Math_0.abs($receiver);
    }
  });
  Edge_0.prototype.toString = function () {
    return 'Edge([' + this.ax + ',' + this.ay + ']-[' + this.bx + ',' + this.by + '])';
  };
  Edge_0.prototype.toString_14dthe$ = function (scale) {
    return 'Edge([' + numberToInt(this.ax * scale) + ',' + numberToInt(this.ay * scale) + ']-[' + numberToInt(this.bx * scale) + ',' + numberToInt(this.by * scale) + '])';
  };
  Edge_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  function LineCap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LineCap_initFields() {
    LineCap_initFields = function () {
    };
    LineCap$BUTT_instance = new LineCap('BUTT', 0);
    LineCap$SQUARE_instance = new LineCap('SQUARE', 1);
    LineCap$ROUND_instance = new LineCap('ROUND', 2);
  }
  var LineCap$BUTT_instance;
  function LineCap$BUTT_getInstance() {
    LineCap_initFields();
    return LineCap$BUTT_instance;
  }
  var LineCap$SQUARE_instance;
  function LineCap$SQUARE_getInstance() {
    LineCap_initFields();
    return LineCap$SQUARE_instance;
  }
  var LineCap$ROUND_instance;
  function LineCap$ROUND_getInstance() {
    LineCap_initFields();
    return LineCap$ROUND_instance;
  }
  LineCap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineCap',
    interfaces: [Enum]
  };
  function LineCap$values() {
    return [LineCap$BUTT_getInstance(), LineCap$SQUARE_getInstance(), LineCap$ROUND_getInstance()];
  }
  LineCap.values = LineCap$values;
  function LineCap$valueOf(name) {
    switch (name) {
      case 'BUTT':
        return LineCap$BUTT_getInstance();
      case 'SQUARE':
        return LineCap$SQUARE_getInstance();
      case 'ROUND':
        return LineCap$ROUND_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.vector.LineCap.' + name);
    }
  }
  LineCap.valueOf_61zpoe$ = LineCap$valueOf;
  function LineJoin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LineJoin_initFields() {
    LineJoin_initFields = function () {
    };
    LineJoin$BEVEL_instance = new LineJoin('BEVEL', 0);
    LineJoin$ROUND_instance = new LineJoin('ROUND', 1);
    LineJoin$MITER_instance = new LineJoin('MITER', 2);
    LineJoin$Companion_getInstance();
  }
  var LineJoin$BEVEL_instance;
  function LineJoin$BEVEL_getInstance() {
    LineJoin_initFields();
    return LineJoin$BEVEL_instance;
  }
  var LineJoin$ROUND_instance;
  function LineJoin$ROUND_getInstance() {
    LineJoin_initFields();
    return LineJoin$ROUND_instance;
  }
  var LineJoin$MITER_instance;
  function LineJoin$MITER_getInstance() {
    LineJoin_initFields();
    return LineJoin$MITER_instance;
  }
  function LineJoin$Companion() {
    LineJoin$Companion_instance = this;
    this.SQUARE = LineJoin$BEVEL_getInstance();
  }
  LineJoin$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LineJoin$Companion_instance = null;
  function LineJoin$Companion_getInstance() {
    LineJoin_initFields();
    if (LineJoin$Companion_instance === null) {
      new LineJoin$Companion();
    }return LineJoin$Companion_instance;
  }
  LineJoin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineJoin',
    interfaces: [Enum]
  };
  function LineJoin$values() {
    return [LineJoin$BEVEL_getInstance(), LineJoin$ROUND_getInstance(), LineJoin$MITER_getInstance()];
  }
  LineJoin.values = LineJoin$values;
  function LineJoin$valueOf(name) {
    switch (name) {
      case 'BEVEL':
        return LineJoin$BEVEL_getInstance();
      case 'ROUND':
        return LineJoin$ROUND_getInstance();
      case 'MITER':
        return LineJoin$MITER_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.vector.LineJoin.' + name);
    }
  }
  LineJoin.valueOf_61zpoe$ = LineJoin$valueOf;
  function approximateCurve$lambda_3(closure$lastX, closure$lastY) {
    return function (x, y) {
      closure$lastX.v = x;
      closure$lastY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_4(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
    return function (x, y) {
      var closure$emit_0 = closure$emit;
      var closure$emittedCount_0 = closure$emittedCount;
      var closure$prevX_0 = closure$prevX;
      var closure$lastX_0 = closure$lastX;
      var closure$prevY_0 = closure$prevY;
      var closure$lastY_0 = closure$lastY;
      closure$emit_0(x, y);
      closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
      closure$lastX_0.v = closure$prevX_0.v;
      closure$lastY_0.v = closure$prevY_0.v;
      closure$prevX.v = x;
      closure$prevY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_5(closure$lastX, closure$lastY) {
    return function (x, y) {
      closure$lastX.v = x;
      closure$lastY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_6(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
    return function (x, y) {
      var closure$emit_0 = closure$emit;
      var closure$emittedCount_0 = closure$emittedCount;
      var closure$prevX_0 = closure$prevX;
      var closure$lastX_0 = closure$lastX;
      var closure$prevY_0 = closure$prevY;
      var closure$lastY_0 = closure$lastY;
      closure$emit_0(x, y);
      closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
      closure$lastX_0.v = closure$prevX_0.v;
      closure$lastY_0.v = closure$prevY_0.v;
      closure$prevX.v = x;
      closure$prevY.v = y;
      return Unit;
    };
  }
  function emitPoints2$lambda_3(it) {
    return Unit;
  }
  function emitPoints2$lambda$lambda_3(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1) {
    return function (ratio, get) {
      var x0 = closure$lx.v;
      var y0 = closure$ly.v;
      var xc = closure$x0;
      var yc = closure$y0;
      var t1 = 1 - ratio;
      var a = t1 * t1;
      var c = ratio * ratio;
      var b = 2 * t1 * ratio;
      get(a * x0 + b * xc + c * closure$x1, a * y0 + b * yc + c * closure$y1);
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_4(closure$emit) {
    return function (x, y) {
      closure$emit(x, y, false);
      return Unit;
    };
  }
  var emitPoints2$lambda_4 = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
      return function (x0, y0, x1, y1) {
        var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1);
        var curveSteps = numberToInt(sum);
        var compute = emitPoints2$lambda$lambda_3(closure$lx, closure$ly, x0, y0, x1, y1);
        var emit = emitPoints2$lambda$lambda_4(closure$emit);
        var rcurveSteps = Math_0.max(curveSteps, 20);
        var dt = 1.0 / rcurveSteps;
        var lastX = {v: 0.0};
        var lastY = {v: 0.0};
        var prevX = {v: 0.0};
        var prevY = {v: 0.0};
        var emittedCount = {v: 0};
        compute(0.0, approximateCurve$lambda(lastX, lastY));
        for (var n = 1; n < rcurveSteps; n++) {
          var ratio = n * dt;
          compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
        }
        closure$lx.v = x1;
        closure$ly.v = y1;
        closure$joint(false);
        return Unit;
      };
    };
  });
  function emitPoints2$lambda$lambda_5(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1, closure$x2, closure$y2) {
    return function (ratio, get) {
      var x0 = closure$lx.v;
      var y0 = closure$ly.v;
      var x1 = closure$x0;
      var y1 = closure$y0;
      var x2 = closure$x1;
      var y2 = closure$y1;
      var cx = 3.0 * (x1 - x0);
      var bx = 3.0 * (x2 - x1) - cx;
      var ax = closure$x2 - x0 - cx - bx;
      var cy = 3.0 * (y1 - y0);
      var by = 3.0 * (y2 - y1) - cy;
      var ay = closure$y2 - y0 - cy - by;
      var tSquared = ratio * ratio;
      var tCubed = tSquared * ratio;
      get(ax * tCubed + bx * tSquared + cx * ratio + x0, ay * tCubed + by * tSquared + cy * ratio + y0);
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_6(closure$emit) {
    return function (x, y) {
      closure$emit(x, y, false);
      return Unit;
    };
  }
  var emitPoints2$lambda_5 = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
      return function (x0, y0, x1, y1, x2, y2) {
        var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
        var curveSteps = numberToInt(sum);
        var compute = emitPoints2$lambda$lambda_5(closure$lx, closure$ly, x0, y0, x1, y1, x2, y2);
        var emit = emitPoints2$lambda$lambda_6(closure$emit);
        var rcurveSteps = Math_0.max(curveSteps, 20);
        var dt = 1.0 / rcurveSteps;
        var lastX = {v: 0.0};
        var lastY = {v: 0.0};
        var prevX = {v: 0.0};
        var prevY = {v: 0.0};
        var emittedCount = {v: 0};
        compute(0.0, approximateCurve$lambda(lastX, lastY));
        for (var n = 1; n < rcurveSteps; n++) {
          var ratio = n * dt;
          compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
        }
        closure$lx.v = x2;
        closure$ly.v = y2;
        closure$joint(false);
        return Unit;
      };
    };
  });
  var RAST_FIXED_SCALE;
  var RAST_FIXED_SCALE_HALF;
  var RAST_SMALL_BUCKET_SIZE;
  var RAST_MEDIUM_BUCKET_SIZE;
  var RAST_BIG_BUCKET_SIZE;
  function RastScale() {
  }
  Object.defineProperty(RastScale.prototype, 'sscale', {
    get: function () {
      return 20;
    }
  });
  Object.defineProperty(RastScale.prototype, 'hscale', {
    get: function () {
      return 0;
    }
  });
  RastScale.prototype.get_s_yrwdxr$ = function ($receiver) {
    return numberToInt($receiver * this.sscale) + this.hscale | 0;
  };
  RastScale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RastScale',
    interfaces: []
  };
  function PolygonScanline() {
    RastScale.call(this);
    this.version = 0;
    this.winding = Winding$NON_ZERO_getInstance();
    this.boundsBuilder_0 = new BoundsBuilder();
    this.edgesPool_0 = Pool_init(void 0, PolygonScanline$edgesPool$lambda);
    this.edges = ArrayList_init_0();
    this.buckets_0 = new PolygonScanline$AllBuckets();
    this.closed_0 = true;
    this.points = new PointArrayList();
    this.moveToX = 0.0;
    this.moveToY = 0.0;
    this.lastX = 0.0;
    this.lastY = 0.0;
    this.lastMoveTo = false;
    this.tempXW_0 = new PolygonScanline$XWithWind();
    this.edgesChecked = 0;
    this.ss_0 = new IntSegmentSet();
  }
  function PolygonScanline$Bucket() {
    this.edges = ArrayList_init_0();
  }
  PolygonScanline$Bucket.prototype.clear = function () {
    this.edges.clear();
    return this;
  };
  PolygonScanline$Bucket.prototype.fastForEach_vht94p$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.PolygonScanline.Bucket.fastForEach_vht94p$', function (block) {
    var $receiver = this.edges;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      block($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
    }
  });
  PolygonScanline$Bucket.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bucket',
    interfaces: []
  };
  function PolygonScanline$Buckets(pool, ySize) {
    this.pool_0 = pool;
    this.ySize = ySize;
    this.buckets_0 = FastIntMap();
  }
  Object.defineProperty(PolygonScanline$Buckets.prototype, 'size', {
    get: function () {
      return get_size(this.buckets_0);
    }
  });
  PolygonScanline$Buckets.prototype.getIndex_za3lpa$ = function (y) {
    return y / this.ySize | 0;
  };
  PolygonScanline$Buckets.prototype.getForIndex_za3lpa$ = function (index) {
    var $receiver = this.buckets_0;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(index);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }var out = this.pool_0.alloc();
      $receiver.set(index, out);
      getOrPut$result = out;
    }
     while (false);
    return getOrPut$result;
  };
  PolygonScanline$Buckets.prototype.getForYOrNull_za3lpa$ = function (y) {
    var $receiver = this.buckets_0;
    var key = this.getIndex_za3lpa$(y);
    return $receiver.get(key);
  };
  PolygonScanline$Buckets.prototype.fastForEachY_nb0ocj$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.PolygonScanline.Buckets.fastForEachY_nb0ocj$', function (y, block) {
    var tmp$;
    if (this.size > 0) {
      if ((tmp$ = this.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver = tmp$.edges;
        var tmp$_0;
        var n = 0;
        while (n < $receiver.size) {
          block($receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)));
        }
      }}});
  PolygonScanline$Buckets.prototype.clear = function () {
    var $receiver = this.buckets_0;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var it = v.value;
      this.pool_0.free_11rb$(ensureNotNull($receiver.get(it)).clear());
    }
    this.buckets_0.clear();
  };
  PolygonScanline$Buckets.prototype.addThresold_d2r49i$ = function (edge, threshold) {
    if (threshold === void 0)
      threshold = 2147483647;
    var min = this.getIndex_za3lpa$(edge.minY);
    var max = this.getIndex_za3lpa$(edge.maxY);
    if ((max - min | 0) < threshold) {
      for (var n = min; n <= max; n++)
        this.getForIndex_za3lpa$(n).edges.add_11rb$(edge);
      return true;
    }return false;
  };
  PolygonScanline$Buckets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Buckets',
    interfaces: []
  };
  function PolygonScanline$AllBuckets() {
    this.pool_0 = new Pool(PolygonScanline$AllBuckets$pool$lambda, void 0, PolygonScanline$AllBuckets$pool$lambda_0);
    this.small = new PolygonScanline$Buckets(this.pool_0, 80);
    this.medium = new PolygonScanline$Buckets(this.pool_0, 320);
    this.big = new PolygonScanline$Buckets(this.pool_0, 1280);
  }
  PolygonScanline$AllBuckets.prototype.add_7cv26g$ = function (edge) {
    if (this.small.addThresold_d2r49i$(edge, 4))
      return;
    if (this.medium.addThresold_d2r49i$(edge, 4))
      return;
    this.big.addThresold_d2r49i$(edge);
  };
  PolygonScanline$AllBuckets.prototype.fastForEachY_nb0ocj$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.PolygonScanline.AllBuckets.fastForEachY_nb0ocj$', function (y, block) {
    var $this = this.small;
    var tmp$;
    if ($this.size > 0) {
      if ((tmp$ = $this.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver = tmp$.edges;
        var tmp$_0;
        var n = 0;
        while (n < $receiver.size) {
          block($receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)));
        }
      }}var $this_0 = this.medium;
    var tmp$_1;
    if ($this_0.size > 0) {
      if ((tmp$_1 = $this_0.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver_0 = tmp$_1.edges;
        var tmp$_2;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          block($receiver_0.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2)));
        }
      }}var $this_1 = this.big;
    var tmp$_3;
    if ($this_1.size > 0) {
      if ((tmp$_3 = $this_1.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver_1 = tmp$_3.edges;
        var tmp$_4;
        var n_1 = 0;
        while (n_1 < $receiver_1.size) {
          block($receiver_1.get_za3lpa$((tmp$_4 = n_1, n_1 = tmp$_4 + 1 | 0, tmp$_4)));
        }
      }}});
  PolygonScanline$AllBuckets.prototype.clear = function () {
    this.small.clear();
    this.medium.clear();
    this.big.clear();
  };
  function PolygonScanline$AllBuckets$pool$lambda(it) {
    it.clear();
    return Unit;
  }
  function PolygonScanline$AllBuckets$pool$lambda_0(it) {
    return new PolygonScanline$Bucket();
  }
  PolygonScanline$AllBuckets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllBuckets',
    interfaces: []
  };
  PolygonScanline.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    return this.boundsBuilder_0.getBounds_2da8yn$(out);
  };
  PolygonScanline.prototype.reset = function () {
    this.closed_0 = true;
    this.boundsBuilder_0.reset();
    var $receiver = this.edges;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      this.edgesPool_0.free_11rb$($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
    }
    this.edges.clear();
    this.points.clear();
    this.buckets_0.clear();
    this.moveToX = 0.0;
    this.moveToY = 0.0;
    this.lastX = 0.0;
    this.lastY = 0.0;
    this.lastMoveTo = false;
  };
  PolygonScanline.prototype.addPoint_0 = function (x, y) {
    this.points.add_lu1900$(x, y);
  };
  PolygonScanline.prototype.forEachPoint_tuav61$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.PolygonScanline.forEachPoint_tuav61$', function (callback) {
    var $this = this.points;
    var tmp$;
    tmp$ = $this.size;
    for (var n = 0; n < tmp$; n++) {
      callback($this.getX_za3lpa$(n), $this.getY_za3lpa$(n));
    }
  });
  PolygonScanline.prototype.addEdge_0 = function (ax, ay, bx, by) {
    if (ax === bx && ay === by)
      return;
    if (ay === by)
      return;
    var iax = this.get_s_yrwdxr$(ax);
    var ibx = this.get_s_yrwdxr$(bx);
    var iay = this.get_s_yrwdxr$(ay);
    var iby = this.get_s_yrwdxr$(by);
    var edge = ay < by ? this.edgesPool_0.alloc().setTo_4qozqa$(iax, iay, ibx, iby, 1) : this.edgesPool_0.alloc().setTo_4qozqa$(ibx, iby, iax, iay, -1);
    this.edges.add_11rb$(edge);
    this.buckets_0.add_7cv26g$(edge);
    this.boundsBuilder_0.add_lu1900$(ax, ay);
    this.boundsBuilder_0.add_lu1900$(bx, by);
  };
  Object.defineProperty(PolygonScanline.prototype, 'edgesSize', {
    get: function () {
      return this.edges.size;
    }
  });
  PolygonScanline.prototype.isNotEmpty = function () {
    return this.edgesSize > 0;
  };
  PolygonScanline.prototype.moveTo_lu1900$ = function (x, y) {
    this.lastX = x;
    this.lastY = y;
    this.moveToX = x;
    this.moveToY = y;
    this.lastMoveTo = true;
  };
  PolygonScanline.prototype.lineTo_lu1900$ = function (x, y) {
    if (this.lastMoveTo) {
      this.addPoint_0(this.lastX, this.lastY);
    }this.addEdge_0(this.lastX, this.lastY, x, y);
    this.addPoint_0(x, y);
    this.lastX = x;
    this.lastY = y;
    this.lastMoveTo = false;
  };
  function PolygonScanline$add$lambda(this$PolygonScanline) {
    return function (it) {
      if (it)
        this$PolygonScanline.close();
      return Unit;
    };
  }
  function PolygonScanline$add$lambda_0(this$PolygonScanline) {
    return function (x, y, move) {
      this$PolygonScanline.add_przk3b$(x, y, move);
      return Unit;
    };
  }
  PolygonScanline.prototype.add_d3txdv$ = function (path) {
    var ix = {v: 0.0};
    var iy = {v: 0.0};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    PolygonScanline$add$lambda(this)(false);
    var n = {v: 0};
    var $receiver = path.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = path.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = path.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          ix.v = x;
          iy.v = y;
          PolygonScanline$add$lambda_0(this)(x, y, true);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = path.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = path.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          PolygonScanline$add$lambda_0(this)(x_0, y_0, false);
          lx.v = x_0;
          ly.v = y_0;
          emitPoints2$lambda_3(false);
          break;
        case 2:
          var x1 = path.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = path.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = path.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = path.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var sum = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
          var curveSteps = numberToInt(sum);
          var rcurveSteps = Math_0.max(curveSteps, 20);
          var dt = 1.0 / rcurveSteps;
          var lastX = {v: 0.0};
          var lastY = {v: 0.0};
          var prevX = {v: 0.0};
          var prevY = {v: 0.0};
          var emittedCount = {v: 0};
          emitPoints2$lambda$lambda_3(lx, ly, x1, y1, x2, y2)(0.0, approximateCurve$lambda_3(lastX, lastY));
          for (var n_1 = 1; n_1 < rcurveSteps; n_1++) {
            var ratio = n_1 * dt;
            emitPoints2$lambda$lambda_3(lx, ly, x1, y1, x2, y2)(ratio, approximateCurve$lambda_4(emitPoints2$lambda$lambda_4(PolygonScanline$add$lambda_0(this)), emittedCount, prevX, lastX, prevY, lastY));
          }

          lx.v = x2;
          ly.v = y2;
          emitPoints2$lambda_3(false);
          break;
        case 3:
          var x1_0 = path.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = path.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = path.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = path.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = path.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = path.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var sum_0 = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1_0, y1_0) + Point.Companion.distance_6y0v78$(x1_0, y1_0, x2_0, y2_0) + Point.Companion.distance_6y0v78$(x2_0, y2_0, x3, y3);
          var curveSteps_0 = numberToInt(sum_0);
          var rcurveSteps_0 = Math_0.max(curveSteps_0, 20);
          var dt_0 = 1.0 / rcurveSteps_0;
          var lastX_0 = {v: 0.0};
          var lastY_0 = {v: 0.0};
          var prevX_0 = {v: 0.0};
          var prevY_0 = {v: 0.0};
          var emittedCount_0 = {v: 0};
          emitPoints2$lambda$lambda_5(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(0.0, approximateCurve$lambda_5(lastX_0, lastY_0));
          for (var n_2 = 1; n_2 < rcurveSteps_0; n_2++) {
            var ratio_0 = n_2 * dt_0;
            emitPoints2$lambda$lambda_5(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(ratio_0, approximateCurve$lambda_6(emitPoints2$lambda$lambda_6(PolygonScanline$add$lambda_0(this)), emittedCount_0, prevX_0, lastX_0, prevY_0, lastY_0));
          }

          lx.v = x3;
          ly.v = y3;
          emitPoints2$lambda_3(false);
          break;
        case 4:
          PolygonScanline$add$lambda_0(this)(ix.v, iy.v, false);
          emitPoints2$lambda_3(true);
          PolygonScanline$add$lambda(this)(true);
          break;
      }
    }
    PolygonScanline$add$lambda(this)(false);
  };
  PolygonScanline.prototype.add_przk3b$ = function (x, y, move) {
    move ? this.moveTo_lu1900$(x, y) : this.lineTo_lu1900$(x, y);
  };
  PolygonScanline.prototype.add_g1oyt7$ = function (x, y, move) {
    this.add_przk3b$(x, y, move);
  };
  PolygonScanline.prototype.add_ydzd23$ = function (x, y, move) {
    this.add_przk3b$(x, y, move);
  };
  PolygonScanline.prototype.add_63krrb$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.PolygonScanline.add_63krrb$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, move) {
      this.add_przk3b$(numberToDouble(x), numberToDouble(y), move);
    };
  }));
  PolygonScanline.prototype.forEachActiveEdgeAtY_9ias7u$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.PolygonScanline.forEachActiveEdgeAtY_9ias7u$', function (y, block) {
    var edgesChecked = {v: 0};
    var $this = this.buckets_0;
    var $this_0 = $this.small;
    var tmp$;
    if ($this_0.size > 0) {
      if ((tmp$ = $this_0.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver = tmp$.edges;
        var tmp$_0;
        var n = 0;
        while (n < $receiver.size) {
          var edge = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          edgesChecked.v = edgesChecked.v + 1 | 0;
          if (edge.containsY_za3lpa$(y))
            block(edge);
        }
      }}var $this_1 = $this.medium;
    var tmp$_1;
    if ($this_1.size > 0) {
      if ((tmp$_1 = $this_1.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver_0 = tmp$_1.edges;
        var tmp$_2;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          var edge_0 = $receiver_0.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2));
          edgesChecked.v = edgesChecked.v + 1 | 0;
          if (edge_0.containsY_za3lpa$(y))
            block(edge_0);
        }
      }}var $this_2 = $this.big;
    var tmp$_3;
    if ($this_2.size > 0) {
      if ((tmp$_3 = $this_2.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver_1 = tmp$_3.edges;
        var tmp$_4;
        var n_1 = 0;
        while (n_1 < $receiver_1.size) {
          var edge_1 = $receiver_1.get_za3lpa$((tmp$_4 = n_1, n_1 = tmp$_4 + 1 | 0, tmp$_4));
          edgesChecked.v = edgesChecked.v + 1 | 0;
          if (edge_1.containsY_za3lpa$(y))
            block(edge_1);
        }
      }}return edgesChecked.v;
  });
  PolygonScanline.prototype.close = function () {
    this.lineTo_lu1900$(this.moveToX, this.moveToY);
  };
  PolygonScanline.prototype.scanline_sa4tpg$ = function (y, winding, out) {
    if (out === void 0)
      out = new IntSegmentSet();
    var tmp$, tmp$_0;
    this.edgesChecked = 0;
    this.tempXW_0.clear();
    out.clear();
    var tmp$_1 = this.edgesChecked;
    var edgesChecked = {v: 0};
    var $this = this.buckets_0;
    var $this_0 = $this.small;
    var tmp$_2;
    if ($this_0.size > 0) {
      if ((tmp$_2 = $this_0.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver = tmp$_2.edges;
        var tmp$_3;
        var n = 0;
        while (n < $receiver.size) {
          var edge = $receiver.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          edgesChecked.v = edgesChecked.v + 1 | 0;
          if (edge.containsY_za3lpa$(y)) {
            var it = edge;
            if (!it.isCoplanarX) {
              this.tempXW_0.add_vux9f0$(it.intersectX_za3lpa$(y), it.wind);
            }}}
      }}var $this_1 = $this.medium;
    var tmp$_4;
    if ($this_1.size > 0) {
      if ((tmp$_4 = $this_1.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver_0 = tmp$_4.edges;
        var tmp$_5;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          var edge_0 = $receiver_0.get_za3lpa$((tmp$_5 = n_0, n_0 = tmp$_5 + 1 | 0, tmp$_5));
          edgesChecked.v = edgesChecked.v + 1 | 0;
          if (edge_0.containsY_za3lpa$(y)) {
            var it_0 = edge_0;
            if (!it_0.isCoplanarX) {
              this.tempXW_0.add_vux9f0$(it_0.intersectX_za3lpa$(y), it_0.wind);
            }}}
      }}var $this_2 = $this.big;
    var tmp$_6;
    if ($this_2.size > 0) {
      if ((tmp$_6 = $this_2.getForYOrNull_za3lpa$(y)) != null) {
        var $receiver_1 = tmp$_6.edges;
        var tmp$_7;
        var n_1 = 0;
        while (n_1 < $receiver_1.size) {
          var edge_1 = $receiver_1.get_za3lpa$((tmp$_7 = n_1, n_1 = tmp$_7 + 1 | 0, tmp$_7));
          edgesChecked.v = edgesChecked.v + 1 | 0;
          if (edge_1.containsY_za3lpa$(y)) {
            var it_1 = edge_1;
            if (!it_1.isCoplanarX) {
              this.tempXW_0.add_vux9f0$(it_1.intersectX_za3lpa$(y), it_1.wind);
            }}}
      }}this.edgesChecked = tmp$_1 + edgesChecked.v | 0;
    genericSort(this.tempXW_0, 0, this.tempXW_0.size - 1 | 0, PolygonScanline$IntArrayListSort_getInstance());
    var tempX = this.tempXW_0.x;
    var tempW = this.tempXW_0.w;
    if (this.tempXW_0.size >= 2) {
      switch (winding.name) {
        case 'EVEN_ODD':
          tmp$ = tempX.size - 1 | 0;
          for (var i = 0; i < tmp$; i += 2) {
            var a = tempX.getAt_za3lpa$(i);
            var b = tempX.getAt_za3lpa$(i + 1 | 0);
            out.add_vux9f0$(a, b);
          }

          break;
        case 'NON_ZERO':
          var count = 0;
          var startX = 0;
          var endX = 0;
          var pending = false;
          tmp$_0 = tempX.size - 1 | 0;
          for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
            var a_0 = tempX.getAt_za3lpa$(i_0);
            count = count + tempW.getAt_za3lpa$(i_0) | 0;
            var b_0 = tempX.getAt_za3lpa$(i_0 + 1 | 0);
            if (count !== 0) {
              if (pending && a_0 !== endX) {
                out.add_vux9f0$(startX, endX);
                startX = a_0;
                endX = b_0;
              } else {
                if (!pending) {
                  startX = a_0;
                }endX = b_0;
              }
              pending = true;
            }}

          if (pending) {
            out.add_vux9f0$(startX, endX);
          }
          break;
      }
    }return out;
  };
  PolygonScanline.prototype.containsPoint_n8dknv$ = function (x, y, winding) {
    if (winding === void 0)
      winding = this.winding;
    return this.containsPointInt_oggs75$(this.get_s_yrwdxr$(x), this.get_s_yrwdxr$(y), winding);
  };
  PolygonScanline.prototype.containsPointInt_oggs75$ = function (x, y, winding) {
    if (winding === void 0)
      winding = this.winding;
    var ss = this.ss_0;
    this.scanline_sa4tpg$(y, winding, ss.clear());
    return ss.contains_za3lpa$(x);
  };
  function PolygonScanline$XWithWind() {
    this.x = new IntArrayList(1024);
    this.w = new IntArrayList(1024);
  }
  Object.defineProperty(PolygonScanline$XWithWind.prototype, 'size', {
    get: function () {
      return this.x.size;
    }
  });
  PolygonScanline$XWithWind.prototype.add_vux9f0$ = function (x, wind) {
    this.x.add_za3lpa$(x);
    this.w.add_za3lpa$(wind);
  };
  PolygonScanline$XWithWind.prototype.clear = function () {
    this.x.clear();
    this.w.clear();
  };
  PolygonScanline$XWithWind.prototype.toString = function () {
    return 'XWithWind(' + this.x + ', ' + this.w + ')';
  };
  PolygonScanline$XWithWind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XWithWind',
    interfaces: []
  };
  function PolygonScanline$IntArrayListSort() {
    PolygonScanline$IntArrayListSort_instance = this;
    SortOps.call(this);
  }
  PolygonScanline$IntArrayListSort.prototype.compare_8olpll$ = function (subject, l, r) {
    return Kotlin.primitiveCompareTo(subject.x.getAt_za3lpa$(l), subject.x.getAt_za3lpa$(r));
  };
  PolygonScanline$IntArrayListSort.prototype.swap_8olpll$ = function (subject, indexL, indexR) {
    subject.x.swapIndices_vux9f0$(indexL, indexR);
    subject.w.swapIndices_vux9f0$(indexL, indexR);
  };
  PolygonScanline$IntArrayListSort.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntArrayListSort',
    interfaces: [SortOps]
  };
  var PolygonScanline$IntArrayListSort_instance = null;
  function PolygonScanline$IntArrayListSort_getInstance() {
    if (PolygonScanline$IntArrayListSort_instance === null) {
      new PolygonScanline$IntArrayListSort();
    }return PolygonScanline$IntArrayListSort_instance;
  }
  function PolygonScanline$edgesPool$lambda(it) {
    return new Edge_0();
  }
  PolygonScanline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolygonScanline',
    interfaces: [RastScale]
  };
  function approximateCurve$lambda_7(closure$lastX, closure$lastY) {
    return function (x, y) {
      closure$lastX.v = x;
      closure$lastY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_8(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
    return function (x, y) {
      var closure$emit_0 = closure$emit;
      var closure$emittedCount_0 = closure$emittedCount;
      var closure$prevX_0 = closure$prevX;
      var closure$lastX_0 = closure$lastX;
      var closure$prevY_0 = closure$prevY;
      var closure$lastY_0 = closure$lastY;
      closure$emit_0(x, y);
      closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
      closure$lastX_0.v = closure$prevX_0.v;
      closure$lastY_0.v = closure$prevY_0.v;
      closure$prevX.v = x;
      closure$prevY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_9(closure$lastX, closure$lastY) {
    return function (x, y) {
      closure$lastX.v = x;
      closure$lastY.v = y;
      return Unit;
    };
  }
  function approximateCurve$lambda_10(closure$emit, closure$emittedCount, closure$prevX, closure$lastX, closure$prevY, closure$lastY) {
    return function (x, y) {
      var closure$emit_0 = closure$emit;
      var closure$emittedCount_0 = closure$emittedCount;
      var closure$prevX_0 = closure$prevX;
      var closure$lastX_0 = closure$lastX;
      var closure$prevY_0 = closure$prevY;
      var closure$lastY_0 = closure$lastY;
      closure$emit_0(x, y);
      closure$emittedCount_0.v = closure$emittedCount_0.v + 1 | 0;
      closure$lastX_0.v = closure$prevX_0.v;
      closure$lastY_0.v = closure$prevY_0.v;
      closure$prevX.v = x;
      closure$prevY.v = y;
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_7(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1) {
    return function (ratio, get) {
      var x0 = closure$lx.v;
      var y0 = closure$ly.v;
      var xc = closure$x0;
      var yc = closure$y0;
      var t1 = 1 - ratio;
      var a = t1 * t1;
      var c = ratio * ratio;
      var b = 2 * t1 * ratio;
      get(a * x0 + b * xc + c * closure$x1, a * y0 + b * yc + c * closure$y1);
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_8(closure$emit) {
    return function (x, y) {
      closure$emit(x, y, false);
      return Unit;
    };
  }
  var emitPoints2$lambda_6 = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
      return function (x0, y0, x1, y1) {
        var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1);
        var curveSteps = numberToInt(sum);
        var compute = emitPoints2$lambda$lambda_7(closure$lx, closure$ly, x0, y0, x1, y1);
        var emit = emitPoints2$lambda$lambda_8(closure$emit);
        var rcurveSteps = Math_0.max(curveSteps, 20);
        var dt = 1.0 / rcurveSteps;
        var lastX = {v: 0.0};
        var lastY = {v: 0.0};
        var prevX = {v: 0.0};
        var prevY = {v: 0.0};
        var emittedCount = {v: 0};
        compute(0.0, approximateCurve$lambda(lastX, lastY));
        for (var n = 1; n < rcurveSteps; n++) {
          var ratio = n * dt;
          compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
        }
        closure$lx.v = x1;
        closure$ly.v = y1;
        closure$joint(false);
        return Unit;
      };
    };
  });
  function emitPoints2$lambda$lambda_9(closure$lx, closure$ly, closure$x0, closure$y0, closure$x1, closure$y1, closure$x2, closure$y2) {
    return function (ratio, get) {
      var x0 = closure$lx.v;
      var y0 = closure$ly.v;
      var x1 = closure$x0;
      var y1 = closure$y0;
      var x2 = closure$x1;
      var y2 = closure$y1;
      var cx = 3.0 * (x1 - x0);
      var bx = 3.0 * (x2 - x1) - cx;
      var ax = closure$x2 - x0 - cx - bx;
      var cy = 3.0 * (y1 - y0);
      var by = 3.0 * (y2 - y1) - cy;
      var ay = closure$y2 - y0 - cy - by;
      var tSquared = ratio * ratio;
      var tCubed = tSquared * ratio;
      get(ax * tCubed + bx * tSquared + cx * ratio + x0, ay * tCubed + by * tSquared + cy * ratio + y0);
      return Unit;
    };
  }
  function emitPoints2$lambda$lambda_10(closure$emit) {
    return function (x, y) {
      closure$emit(x, y, false);
      return Unit;
    };
  }
  var emitPoints2$lambda_7 = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$lx, closure$ly, closure$emit, this$emitPoints2, closure$joint) {
      return function (x0, y0, x1, y1, x2, y2) {
        var sum = Point.Companion.distance_6y0v78$(closure$lx.v, closure$ly.v, x0, y0) + Point.Companion.distance_6y0v78$(x0, y0, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
        var curveSteps = numberToInt(sum);
        var compute = emitPoints2$lambda$lambda_9(closure$lx, closure$ly, x0, y0, x1, y1, x2, y2);
        var emit = emitPoints2$lambda$lambda_10(closure$emit);
        var rcurveSteps = Math_0.max(curveSteps, 20);
        var dt = 1.0 / rcurveSteps;
        var lastX = {v: 0.0};
        var lastY = {v: 0.0};
        var prevX = {v: 0.0};
        var prevY = {v: 0.0};
        var emittedCount = {v: 0};
        compute(0.0, approximateCurve$lambda(lastX, lastY));
        for (var n = 1; n < rcurveSteps; n++) {
          var ratio = n * dt;
          compute(ratio, approximateCurve$lambda(emit, emittedCount, prevX, lastX, prevY, lastY));
        }
        closure$lx.v = x2;
        closure$ly.v = y2;
        closure$joint(false);
        return Unit;
      };
    };
  });
  function StrokeToFill() {
    this.weight_0 = 1;
    this.outFill_8o30ze$_0 = this.outFill_8o30ze$_0;
    this.startCap_0 = LineCap$BUTT_getInstance();
    this.endCap_0 = LineCap$BUTT_getInstance();
    this.joins_0 = LineJoin$BEVEL_getInstance();
    this.miterLimit_0 = 4.0;
    this.strokePoints_8be2vx$ = new PointIntArrayList(1024);
    this.doJointList_8be2vx$ = new IntArrayList(1024);
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new PointIntArrayList(1024);
    }
    this.fillPoints_8be2vx$ = array;
    this.fillPointsLeft_8be2vx$ = this.fillPoints_8be2vx$[0];
    this.fillPointsRight_8be2vx$ = this.fillPoints_8be2vx$[1];
    this.prevEdge_0 = new Edge_0();
    this.prevEdgeLeft_0 = new Edge_0();
    this.prevEdgeRight_0 = new Edge_0();
    this.currEdge_0 = new Edge_0();
    this.currEdgeLeft_0 = new Edge_0();
    this.currEdgeRight_0 = new Edge_0();
    this.tempP1_0 = Point$Companion_getInstance().invoke();
    this.tempP2_0 = Point$Companion_getInstance().invoke();
    this.tempP3_0 = Point$Companion_getInstance().invoke();
  }
  Object.defineProperty(StrokeToFill.prototype, 'outFill_0', {
    get: function () {
      if (this.outFill_8o30ze$_0 == null)
        return throwUPAE('outFill');
      return this.outFill_8o30ze$_0;
    },
    set: function (outFill) {
      this.outFill_8o30ze$_0 = outFill;
    }
  });
  StrokeToFill.prototype.setEdgeDisplaced_vnlx6n$ = function ($receiver, edge, width, angle) {
    var ldx = width * get_cosine(angle);
    var ldy = width * get_sine(angle);
    $receiver.setTo_4qozqa$(numberToInt(edge.ax + ldx), numberToInt(edge.ay + ldy), numberToInt(edge.bx + ldx), numberToInt(edge.by + ldy), edge.wind);
    return $receiver;
  };
  function StrokeToFill$EdgePoint(name, ordinal, n) {
    Enum.call(this);
    this.n = n;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StrokeToFill$EdgePoint_initFields() {
    StrokeToFill$EdgePoint_initFields = function () {
    };
    StrokeToFill$EdgePoint$A_instance = new StrokeToFill$EdgePoint('A', 0, 0);
    StrokeToFill$EdgePoint$B_instance = new StrokeToFill$EdgePoint('B', 1, 1);
  }
  var StrokeToFill$EdgePoint$A_instance;
  function StrokeToFill$EdgePoint$A_getInstance() {
    StrokeToFill$EdgePoint_initFields();
    return StrokeToFill$EdgePoint$A_instance;
  }
  var StrokeToFill$EdgePoint$B_instance;
  function StrokeToFill$EdgePoint$B_getInstance() {
    StrokeToFill$EdgePoint_initFields();
    return StrokeToFill$EdgePoint$B_instance;
  }
  StrokeToFill$EdgePoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgePoint',
    interfaces: [Enum]
  };
  function StrokeToFill$EdgePoint$values() {
    return [StrokeToFill$EdgePoint$A_getInstance(), StrokeToFill$EdgePoint$B_getInstance()];
  }
  StrokeToFill$EdgePoint.values = StrokeToFill$EdgePoint$values;
  function StrokeToFill$EdgePoint$valueOf(name) {
    switch (name) {
      case 'A':
        return StrokeToFill$EdgePoint$A_getInstance();
      case 'B':
        return StrokeToFill$EdgePoint$B_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.vector.StrokeToFill.EdgePoint.' + name);
    }
  }
  StrokeToFill$EdgePoint.valueOf_61zpoe$ = StrokeToFill$EdgePoint$valueOf;
  StrokeToFill.prototype.addEdgePointA_gq78jw$ = function ($receiver, e) {
    return $receiver.add_vux9f0$(e.ax, e.ay);
  };
  StrokeToFill.prototype.addEdgePointB_gq78jw$ = function ($receiver, e) {
    return $receiver.add_vux9f0$(e.bx, e.by);
  };
  StrokeToFill.prototype.addEdgePointAB_nlaoua$ = function ($receiver, e, point) {
    return point === StrokeToFill$EdgePoint$A_getInstance() ? this.addEdgePointA_gq78jw$($receiver, e) : this.addEdgePointB_gq78jw$($receiver, e);
  };
  StrokeToFill.prototype.add_nxcydf$ = function ($receiver, e) {
    if (e != null)
      $receiver.add_vux9f0$(numberToInt(e.x), numberToInt(e.y));
  };
  StrokeToFill.prototype.add_vrpmrw$ = function ($receiver, x, y) {
    return $receiver.add_vux9f0$(numberToInt(x), numberToInt(y));
  };
  StrokeToFill.prototype.doJoin_awfvdx$ = function (out, mainPrev, mainCurr, prev, curr, join, miterLimit, scale, forcedMiter) {
    var rjoin = forcedMiter ? LineJoin$MITER_getInstance() : join;
    switch (rjoin.name) {
      case 'MITER':
        var $receiver = this.tempP1_0;
        var x = mainPrev.bx;
        var y = mainPrev.by;
        var intersection2 = $receiver.setTo_lu1900$(numberToDouble(x), numberToDouble(y));
        var intersection = Edge$Companion_getInstance_0().getIntersectXY_h637yw$(prev, curr, this.tempP3_0);
        if (intersection != null) {
          var dist = Point$Companion_getInstance().distance_xwdphw$(intersection, intersection2);
          if (forcedMiter || dist <= miterLimit) {
            this.add_nxcydf$(out, intersection);
          } else {
            this.addEdgePointB_gq78jw$(out, prev);
            this.addEdgePointA_gq78jw$(out, curr);
          }
        }
        break;
      case 'BEVEL':
        this.addEdgePointB_gq78jw$(out, prev);
        this.addEdgePointA_gq78jw$(out, curr);
        break;
      case 'ROUND':
        var i = Edge$Companion_getInstance_0().getIntersectXY_h637yw$(prev, curr, this.tempP3_0);
        if (i != null) {
          var count = clamp_0(numberToInt(Point$Companion_getInstance().distance_6y0v78$(prev.bx, prev.by, curr.ax, curr.ay) * scale), 4, 64);
          for (var n = 0; n <= count; n++) {
            this.add_nxcydf$(out, Bezier$Companion_getInstance().quadCalc_181vpe$(prev.bx, prev.by, i.x, i.y, curr.ax, curr.ay, n / count, this.tempP2_0));
          }
        } else {
          this.addEdgePointB_gq78jw$(out, prev);
          this.addEdgePointA_gq78jw$(out, curr);
        }

        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  StrokeToFill.prototype.doCap_wqozuw$ = function (l, r, left, right, epoint, cap, scale) {
    var angle = epoint === StrokeToFill$EdgePoint$A_getInstance() ? unaryMinus(left.angle) : unaryPlus(left.angle);
    var lx = left.getX_za3lpa$(epoint.n);
    var ly = left.getY_za3lpa$(epoint.n);
    var rx = right.getX_za3lpa$(epoint.n);
    var ry = right.getY_za3lpa$(epoint.n);
    switch (cap.name) {
      case 'BUTT':
        l.add_vux9f0$(lx, ly);
        r.add_vux9f0$(rx, ry);
        break;
      case 'ROUND':
      case 'SQUARE':
        var ax = numberToInt(get_cosine(angle) * this.weight_0 / 2);
        var ay = numberToInt(get_sine(angle) * this.weight_0 / 2);
        var lx2 = lx + ax | 0;
        var ly2 = ly + ay | 0;
        var rx2 = rx + ax | 0;
        var ry2 = ry + ay | 0;
        if (cap === LineCap$SQUARE_getInstance()) {
          l.add_vux9f0$(lx2, ly2);
          r.add_vux9f0$(rx2, ry2);
        } else {
          var count = clamp_0(numberToInt(Point$Companion_getInstance().distance_6y0v78$(lx, ly, rx, ry) * scale), 4, 64);
          l.add_vux9f0$(lx, ly);
          for (var n = 0; n <= count; n++) {
            var m = epoint === StrokeToFill$EdgePoint$A_getInstance() ? n : count - n | 0;
            var ratio = m / count;
            this.add_nxcydf$(r, Bezier$Companion_getInstance().cubicCalc_bmgyua$(lx, ly, lx2, ly2, rx2, ry2, rx, ry, ratio, this.tempP2_0));
          }
        }

        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  StrokeToFill.prototype.computeStroke_27gqqi$ = function (scale, closed) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.strokePoints_8be2vx$.isEmpty())
      return;
    var weightD2 = this.weight_0 / 2 | 0;
    this.fillPointsLeft_8be2vx$.clear();
    this.fillPointsRight_8be2vx$.clear();
    var sp = this.strokePoints_8be2vx$;
    var nstrokePoints = sp.size;
    for (var n = 0; n < nstrokePoints; n++) {
      var isFirst = n === 0;
      var isLast = n === (nstrokePoints - 1 | 0);
      var isMiddle = !isFirst && (!isLast || closed);
      if (isLast)
        tmp$ = closed ? 1 : n;
      else
        tmp$ = n + 1 | 0;
      var n1 = tmp$;
      this.prevEdge_0.copyFrom_7cv26g$(this.currEdge_0);
      this.prevEdgeLeft_0.copyFrom_7cv26g$(this.currEdgeLeft_0);
      this.prevEdgeRight_0.copyFrom_7cv26g$(this.currEdgeRight_0);
      var doJoin = this.doJointList_8be2vx$.getAt_za3lpa$(n) !== 0;
      this.currEdge_0.setTo_4qozqa$(sp.getX_za3lpa$(n), sp.getY_za3lpa$(n), sp.getX_za3lpa$(n1), sp.getY_za3lpa$(n1), 1);
      this.setEdgeDisplaced_vnlx6n$(this.currEdgeLeft_0, this.currEdge_0, weightD2, minus(this.currEdge_0.angle, get_degrees_1(90)));
      this.setEdgeDisplaced_vnlx6n$(this.currEdgeRight_0, this.currEdge_0, weightD2, plus(this.currEdge_0.angle, get_degrees_1(90)));
      if (isFirst)
        this.doCap_wqozuw$(this.fillPointsLeft_8be2vx$, this.fillPointsRight_8be2vx$, this.currEdgeLeft_0, this.currEdgeRight_0, StrokeToFill$EdgePoint$A_getInstance(), closed ? LineCap$BUTT_getInstance() : this.startCap_0, scale);
      else if (isMiddle) {
        var angle = Edge$Companion_getInstance_0().angleBetween_6yznwk$(this.prevEdge_0, this.currEdge_0);
        var leftAngle = angle.compareTo_11rb$(get_degrees_1(0)) > 0;
        if (doJoin) {
          this.doJoin_awfvdx$(this.fillPointsLeft_8be2vx$, this.prevEdge_0, this.currEdge_0, this.prevEdgeLeft_0, this.currEdgeLeft_0, this.joins_0, this.miterLimit_0, scale, leftAngle);
          this.doJoin_awfvdx$(this.fillPointsRight_8be2vx$, this.prevEdge_0, this.currEdge_0, this.prevEdgeRight_0, this.currEdgeRight_0, this.joins_0, this.miterLimit_0, scale, !leftAngle);
        } else {
          this.addEdgePointA_gq78jw$(this.fillPointsLeft_8be2vx$, this.currEdgeLeft_0);
          this.addEdgePointA_gq78jw$(this.fillPointsRight_8be2vx$, this.currEdgeRight_0);
        }
      } else if (isLast)
        if (closed) {
          this.doCap_wqozuw$(this.fillPointsLeft_8be2vx$, this.fillPointsRight_8be2vx$, this.currEdgeLeft_0, this.currEdgeRight_0, StrokeToFill$EdgePoint$B_getInstance(), LineCap$BUTT_getInstance(), scale);
        } else {
          this.doCap_wqozuw$(this.fillPointsLeft_8be2vx$, this.fillPointsRight_8be2vx$, this.prevEdgeLeft_0, this.prevEdgeRight_0, StrokeToFill$EdgePoint$B_getInstance(), this.endCap_0, scale);
        }
    }
    tmp$_0 = this.fillPointsLeft_8be2vx$.size;
    for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
      var x = this.fillPointsLeft_8be2vx$.getX_za3lpa$(n_0);
      var y = this.fillPointsLeft_8be2vx$.getY_za3lpa$(n_0);
      if (n_0 === 0) {
        this.outFill_0.moveTo_lu1900$(x * scale, y * scale);
      } else {
        this.outFill_0.lineTo_lu1900$(x * scale, y * scale);
      }
    }
    tmp$_1 = this.fillPointsRight_8be2vx$.size;
    for (var n_1 = 0; n_1 < tmp$_1; n_1++) {
      var m = this.fillPointsRight_8be2vx$.size - n_1 - 1 | 0;
      this.outFill_0.lineTo_lu1900$(this.fillPointsRight_8be2vx$.getX_za3lpa$(m) * scale, this.fillPointsRight_8be2vx$.getY_za3lpa$(m) * scale);
    }
    this.outFill_0.close();
    this.outFill_0.winding = Winding$NON_ZERO_getInstance();
    this.strokePoints_8be2vx$.clear();
    this.doJointList_8be2vx$.clear();
  };
  StrokeToFill.prototype.set_prz38q$ = function (outFill, weight, startCap, endCap, joins, miterLimit) {
    this.outFill_0 = outFill;
    this.weight_0 = weight;
    this.startCap_0 = startCap;
    this.endCap_0 = endCap;
    this.joins_0 = joins;
    this.miterLimit_0 = miterLimit * weight;
  };
  function StrokeToFill$strokeFill$lambda(closure$iscale, this$StrokeToFill) {
    return function (close) {
      if (close)
        this$StrokeToFill.computeStroke_27gqqi$(closure$iscale, true);
      return Unit;
    };
  }
  function StrokeToFill$strokeFill$lambda_0(this$StrokeToFill) {
    return function (it) {
      this$StrokeToFill.doJointList_8be2vx$.set_vux9f0$(this$StrokeToFill.doJointList_8be2vx$.size - 1 | 0, 1);
      return Unit;
    };
  }
  function StrokeToFill$strokeFill$lambda_1(closure$iscale, this$StrokeToFill, closure$scale) {
    return function (x, y, move) {
      if (move)
        this$StrokeToFill.computeStroke_27gqqi$(closure$iscale, false);
      this$StrokeToFill.strokePoints_8be2vx$.add_vux9f0$(numberToInt(x * closure$scale), numberToInt(y * closure$scale));
      this$StrokeToFill.doJointList_8be2vx$.add_za3lpa$(0);
      return Unit;
    };
  }
  StrokeToFill.prototype.strokeFill_pzc2vp$ = function (stroke, lineWidth, joins, startCap, endCap, miterLimit, outFill) {
    var scale = 20;
    var iscale = 1.0 / 20;
    this.set_prz38q$(outFill, numberToInt(lineWidth * scale), startCap, endCap, joins, miterLimit);
    var ix = {v: 0.0};
    var iy = {v: 0.0};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    StrokeToFill$strokeFill$lambda(iscale, this)(false);
    var n = {v: 0};
    var $receiver = stroke.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = stroke.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = stroke.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          ix.v = x;
          iy.v = y;
          StrokeToFill$strokeFill$lambda_1(iscale, this, scale)(x, y, true);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = stroke.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = stroke.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          StrokeToFill$strokeFill$lambda_1(iscale, this, scale)(x_0, y_0, false);
          lx.v = x_0;
          ly.v = y_0;
          StrokeToFill$strokeFill$lambda_0(this)(false);
          break;
        case 2:
          var x1 = stroke.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = stroke.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = stroke.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = stroke.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var sum = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1, y1) + Point.Companion.distance_6y0v78$(x1, y1, x2, y2);
          var curveSteps = numberToInt(sum);
          var rcurveSteps = Math_0.max(curveSteps, 20);
          var dt = 1.0 / rcurveSteps;
          var lastX = {v: 0.0};
          var lastY = {v: 0.0};
          var prevX = {v: 0.0};
          var prevY = {v: 0.0};
          var emittedCount = {v: 0};
          emitPoints2$lambda$lambda_7(lx, ly, x1, y1, x2, y2)(0.0, approximateCurve$lambda_7(lastX, lastY));
          for (var n_1 = 1; n_1 < rcurveSteps; n_1++) {
            var ratio = n_1 * dt;
            emitPoints2$lambda$lambda_7(lx, ly, x1, y1, x2, y2)(ratio, approximateCurve$lambda_8(emitPoints2$lambda$lambda_8(StrokeToFill$strokeFill$lambda_1(iscale, this, scale)), emittedCount, prevX, lastX, prevY, lastY));
          }

          lx.v = x2;
          ly.v = y2;
          StrokeToFill$strokeFill$lambda_0(this)(false);
          break;
        case 3:
          var x1_0 = stroke.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = stroke.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = stroke.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = stroke.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = stroke.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = stroke.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var sum_0 = Point.Companion.distance_6y0v78$(lx.v, ly.v, x1_0, y1_0) + Point.Companion.distance_6y0v78$(x1_0, y1_0, x2_0, y2_0) + Point.Companion.distance_6y0v78$(x2_0, y2_0, x3, y3);
          var curveSteps_0 = numberToInt(sum_0);
          var rcurveSteps_0 = Math_0.max(curveSteps_0, 20);
          var dt_0 = 1.0 / rcurveSteps_0;
          var lastX_0 = {v: 0.0};
          var lastY_0 = {v: 0.0};
          var prevX_0 = {v: 0.0};
          var prevY_0 = {v: 0.0};
          var emittedCount_0 = {v: 0};
          emitPoints2$lambda$lambda_9(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(0.0, approximateCurve$lambda_9(lastX_0, lastY_0));
          for (var n_2 = 1; n_2 < rcurveSteps_0; n_2++) {
            var ratio_0 = n_2 * dt_0;
            emitPoints2$lambda$lambda_9(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(ratio_0, approximateCurve$lambda_10(emitPoints2$lambda$lambda_10(StrokeToFill$strokeFill$lambda_1(iscale, this, scale)), emittedCount_0, prevX_0, lastX_0, prevY_0, lastY_0));
          }

          lx.v = x3;
          ly.v = y3;
          StrokeToFill$strokeFill$lambda_0(this)(false);
          break;
        case 4:
          StrokeToFill$strokeFill$lambda_1(iscale, this, scale)(ix.v, iy.v, false);
          StrokeToFill$strokeFill$lambda_0(this)(true);
          StrokeToFill$strokeFill$lambda(iscale, this)(true);
          break;
      }
    }
    StrokeToFill$strokeFill$lambda(iscale, this)(false);
    this.computeStroke_27gqqi$(iscale, false);
  };
  StrokeToFill.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrokeToFill',
    interfaces: []
  };
  function strokeToFill($receiver, lineWidth, joins, startCap, endCap, miterLimit, temp, outFill) {
    if (joins === void 0)
      joins = LineJoin$MITER_getInstance();
    if (startCap === void 0)
      startCap = LineCap$BUTT_getInstance();
    if (endCap === void 0)
      endCap = startCap;
    if (miterLimit === void 0)
      miterLimit = 4.0;
    if (temp === void 0)
      temp = new StrokeToFill();
    if (outFill === void 0)
      outFill = new VectorPath(void 0, void 0, Winding$NON_ZERO_getInstance());
    temp.strokeFill_pzc2vp$($receiver, lineWidth, joins, startCap, endCap, miterLimit, outFill);
    return outFill;
  }
  function VectorBuilder() {
  }
  VectorBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VectorBuilder',
    interfaces: []
  };
  function isEmpty($receiver) {
    return $receiver.totalPoints === 0;
  }
  function isNotEmpty($receiver) {
    return $receiver.totalPoints !== 0;
  }
  function arcTo($receiver, ax, ay, cx, cy, r) {
    if (isEmpty($receiver))
      $receiver.moveTo_lu1900$(ax, ay);
    var bx = $receiver.lastX;
    var by = $receiver.lastY;
    var b = new Point(numberToDouble(bx), numberToDouble(by));
    var a = new Point(numberToDouble(ax), numberToDouble(ay));
    var c = new Point(numberToDouble(cx), numberToDouble(cy));
    var AB = minus_0(b, a);
    var AC = minus_0(c, a);
    var angle_0 = angle(Point$Companion_getInstance(), AB, AC).radians * 0.5;
    var x = math.PI / 2.0 - angle_0;
    var x_0 = r * Math_0.sin(x) / Math_0.sin(angle_0);
    var $receiver_0 = get_unit(AB);
    var x_1 = $receiver_0._x * numberToDouble(x_0);
    var y = $receiver_0._y * numberToDouble(x_0);
    var A = plus_0(a, new Point(numberToDouble(x_1), numberToDouble(y)));
    var $receiver_1 = get_unit(AC);
    var x_2 = $receiver_1._x * numberToDouble(x_0);
    var y_0 = $receiver_1._y * numberToDouble(x_0);
    var B = plus_0(a, new Point(numberToDouble(x_2), numberToDouble(y_0)));
    $receiver.lineTo_lu1900$(get_x(A), get_y(A));
    $receiver.quadTo_6y0v78$(get_x(a), get_y(a), get_x(B), get_y(B));
  }
  function rect($receiver, x, y, width, height) {
    $receiver.moveTo_lu1900$(x, y);
    $receiver.lineTo_lu1900$(x + width, y);
    $receiver.lineTo_lu1900$(x + width, y + height);
    $receiver.lineTo_lu1900$(x, y + height);
    $receiver.close();
  }
  function rectHole($receiver, x, y, width, height) {
    $receiver.moveTo_lu1900$(x, y);
    $receiver.lineTo_lu1900$(x, y + height);
    $receiver.lineTo_lu1900$(x + width, y + height);
    $receiver.lineTo_lu1900$(x + width, y);
    $receiver.close();
  }
  function roundRect($receiver, x, y, w, h, rx, ry) {
    if (ry === void 0)
      ry = rx;
    if (rx === 0.0 && ry === 0.0) {
      rect($receiver, x, y, w, h);
    } else {
      var r = w < 2 * rx ? w / 2.0 : h < 2 * rx ? h / 2.0 : rx;
      $receiver.moveTo_lu1900$(x + r, y);
      arcTo($receiver, x + w, y, x + w, y + h, r);
      arcTo($receiver, x + w, y + h, x, y + h, r);
      arcTo($receiver, x, y + h, x, y, r);
      arcTo($receiver, x, y, x + w, y, r);
    }
  }
  function arc($receiver, x, y, r, start, end) {
    var EPSILON = 1.0E-5;
    var PI_TWO = math.PI * 2.0;
    var PI_OVER_TWO = math.PI / 2.0;
    var startAngle = start % PI_TWO;
    var endAngle = end % PI_TWO;
    var x_0 = endAngle - startAngle;
    var b = Math_0.abs(x_0);
    var remainingAngle = Math_0.min(PI_TWO, b);
    if (remainingAngle === 0.0 && start !== end)
      remainingAngle = PI_TWO;
    var sgn = startAngle < endAngle ? 1 : -1;
    var a1 = startAngle;
    var p1 = Point$Companion_getInstance().invoke();
    var p2 = Point$Companion_getInstance().invoke();
    var p3 = Point$Companion_getInstance().invoke();
    var p4 = Point$Companion_getInstance().invoke();
    var index = 0;
    while (remainingAngle > EPSILON) {
      var tmp$ = a1;
      var a = remainingAngle;
      var a2 = tmp$ + sgn * Math_0.min(a, PI_OVER_TWO);
      var k = 0.5522847498;
      var a_0 = (a2 - a1) / 2.0;
      var x4 = r * Math_0.cos(a_0);
      var y4 = r * Math_0.sin(a_0);
      var x1 = x4;
      var y1 = -y4;
      var f = k * Math_0.tan(a_0);
      var x2 = x1 + f * y4;
      var y2 = y1 + f * x4;
      var x3 = x2;
      var y3 = -y2;
      var ar = a_0 + a1;
      var cos_ar = Math_0.cos(ar);
      var sin_ar = Math_0.sin(ar);
      var x_1 = a1;
      var tmp$_0 = x + r * Math_0.cos(x_1);
      var x_2 = a1;
      p1.setTo_lu1900$(tmp$_0, y + r * Math_0.sin(x_2));
      p2.setTo_lu1900$(x + x2 * cos_ar - y2 * sin_ar, y + x2 * sin_ar + y2 * cos_ar);
      p3.setTo_lu1900$(x + x3 * cos_ar - y3 * sin_ar, y + x3 * sin_ar + y3 * cos_ar);
      p4.setTo_lu1900$(x + r * Math_0.cos(a2), y + r * Math_0.sin(a2));
      if (index === 0)
        $receiver.moveTo_lu1900$(p1.x, p1.y);
      $receiver.cubicTo_15yvbs$(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
      index = index + 1 | 0;
      var x_3 = a2 - a1;
      remainingAngle -= Math_0.abs(x_3);
      a1 = a2;
    }
    if (startAngle === endAngle && index !== 0) {
      $receiver.close();
    }}
  function circle($receiver, x, y, radius) {
    arc($receiver, x, y, radius, 0.0, math.PI * 2.0);
  }
  function ellipse($receiver, x, y, rw, rh) {
    var k = 0.5522848;
    var ox = rw / 2 * k;
    var oy = rh / 2 * k;
    var xe = x + rw;
    var ye = y + rh;
    var xm = x + rw / 2;
    var ym = y + rh / 2;
    $receiver.moveTo_lu1900$(x, ym);
    $receiver.cubicTo_15yvbs$(x, ym - oy, xm - ox, y, xm, y);
    $receiver.cubicTo_15yvbs$(xm + ox, y, xe, ym - oy, xe, ym);
    $receiver.cubicTo_15yvbs$(xe, ym + oy, xm + ox, ye, xm, ye);
    $receiver.cubicTo_15yvbs$(xm - ox, ye, x, ym + oy, x, ym);
  }
  function moveTo($receiver, p) {
    $receiver.moveTo_lu1900$(p.x, p.y);
  }
  function lineTo($receiver, p) {
    $receiver.lineTo_lu1900$(p.x, p.y);
  }
  function quadTo($receiver, c, a) {
    $receiver.quadTo_6y0v78$(c.x, c.y, a.x, a.y);
  }
  function cubicTo($receiver, c1, c2, a) {
    $receiver.cubicTo_15yvbs$(c1.x, c1.y, c2.x, c2.y, a.x, a.y);
  }
  function moveToH($receiver, x) {
    $receiver.moveTo_lu1900$(x, $receiver.lastY);
  }
  function rMoveToH($receiver, x) {
    rMoveTo($receiver, x, 0.0);
  }
  function moveToV($receiver, y) {
    $receiver.moveTo_lu1900$($receiver.lastX, y);
  }
  function rMoveToV($receiver, y) {
    rMoveTo($receiver, 0.0, y);
  }
  function lineToH($receiver, x) {
    $receiver.lineTo_lu1900$(x, $receiver.lastY);
  }
  function rLineToH($receiver, x) {
    rLineTo($receiver, x, 0.0);
  }
  function lineToV($receiver, y) {
    $receiver.lineTo_lu1900$($receiver.lastX, y);
  }
  function rLineToV($receiver, y) {
    rLineTo($receiver, 0.0, y);
  }
  function rMoveTo($receiver, x, y) {
    $receiver.moveTo_lu1900$($receiver.lastX + x, $receiver.lastY + y);
  }
  function rLineTo($receiver, x, y) {
    $receiver.lineTo_lu1900$($receiver.lastX + x, $receiver.lastY + y);
  }
  function rQuadTo($receiver, cx, cy, ax, ay) {
    $receiver.quadTo_6y0v78$($receiver.lastX + cx, $receiver.lastY + cy, $receiver.lastX + ax, $receiver.lastY + ay);
  }
  function rCubicTo($receiver, cx1, cy1, cx2, cy2, ax, ay) {
    $receiver.cubicTo_15yvbs$($receiver.lastX + cx1, $receiver.lastY + cy1, $receiver.lastX + cx2, $receiver.lastY + cy2, $receiver.lastX + ax, $receiver.lastY + ay);
  }
  var moveTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.moveTo_29p75a$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      $receiver.moveTo_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  var lineTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.lineTo_29p75a$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      $receiver.lineTo_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  var quadTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.quadTo_3tbhqa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, controlX, controlY, anchorX, anchorY) {
      $receiver.quadTo_6y0v78$(numberToDouble(controlX), numberToDouble(controlY), numberToDouble(anchorX), numberToDouble(anchorY));
    };
  }));
  var cubicTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.cubicTo_3pnw5y$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, cx1, cy1, cx2, cy2, ax, ay) {
      $receiver.cubicTo_15yvbs$(numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
    };
  }));
  var moveToH_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.moveToH_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var moveToH = _.com.soywiz.korma.geom.vector.moveToH_ww6st0$;
    return function ($receiver, x) {
      moveToH($receiver, numberToDouble(x));
    };
  }));
  var rMoveToH_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rMoveToH_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveToH = _.com.soywiz.korma.geom.vector.rMoveToH_ww6st0$;
    return function ($receiver, x) {
      rMoveToH($receiver, numberToDouble(x));
    };
  }));
  var moveToV_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.moveToV_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var moveToV = _.com.soywiz.korma.geom.vector.moveToV_ww6st0$;
    return function ($receiver, y) {
      moveToV($receiver, numberToDouble(y));
    };
  }));
  var rMoveToV_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rMoveToV_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveToV = _.com.soywiz.korma.geom.vector.rMoveToV_ww6st0$;
    return function ($receiver, y) {
      rMoveToV($receiver, numberToDouble(y));
    };
  }));
  var lineToH_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.lineToH_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var lineToH = _.com.soywiz.korma.geom.vector.lineToH_ww6st0$;
    return function ($receiver, x) {
      lineToH($receiver, numberToDouble(x));
    };
  }));
  var rLineToH_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rLineToH_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineToH = _.com.soywiz.korma.geom.vector.rLineToH_ww6st0$;
    return function ($receiver, x) {
      rLineToH($receiver, numberToDouble(x));
    };
  }));
  var lineToV_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.lineToV_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var lineToV = _.com.soywiz.korma.geom.vector.lineToV_ww6st0$;
    return function ($receiver, y) {
      lineToV($receiver, numberToDouble(y));
    };
  }));
  var rLineToV_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rLineToV_s2kxcs$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineToV = _.com.soywiz.korma.geom.vector.rLineToV_ww6st0$;
    return function ($receiver, y) {
      rLineToV($receiver, numberToDouble(y));
    };
  }));
  var rMoveTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rMoveTo_29p75a$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveTo = _.com.soywiz.korma.geom.vector.rMoveTo_b4nog2$;
    return function ($receiver, x, y) {
      rMoveTo($receiver, numberToDouble(x), numberToDouble(y));
    };
  }));
  var rLineTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rLineTo_29p75a$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineTo = _.com.soywiz.korma.geom.vector.rLineTo_b4nog2$;
    return function ($receiver, x, y) {
      rLineTo($receiver, numberToDouble(x), numberToDouble(y));
    };
  }));
  var rQuadTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rQuadTo_3tbhqa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rQuadTo = _.com.soywiz.korma.geom.vector.rQuadTo_clsz36$;
    return function ($receiver, cx, cy, ax, ay) {
      rQuadTo($receiver, numberToDouble(cx), numberToDouble(cy), numberToDouble(ax), numberToDouble(ay));
    };
  }));
  var rCubicTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rCubicTo_3pnw5y$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rCubicTo = _.com.soywiz.korma.geom.vector.rCubicTo_eslsqu$;
    return function ($receiver, cx1, cy1, cx2, cy2, ax, ay) {
      rCubicTo($receiver, numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
    };
  }));
  var arcTo_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.arcTo_p44rec$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var arcTo = _.com.soywiz.korma.geom.vector.arcTo_iaoljg$;
    return function ($receiver, ax, ay, cx, cy, r) {
      arcTo($receiver, numberToDouble(ax), numberToDouble(ay), numberToDouble(cx), numberToDouble(cy), numberToDouble(r));
    };
  }));
  function line($receiver, x0, y0, x1, y1) {
    $receiver.moveTo_lu1900$(x0, y0);
    $receiver.lineTo_lu1900$(x1, y1);
  }
  function quad($receiver, x0, y0, controlX, controlY, anchorX, anchorY) {
    $receiver.moveTo_lu1900$(x0, y0);
    $receiver.quadTo_6y0v78$(controlX, controlY, anchorX, anchorY);
  }
  function cubic($receiver, x0, y0, cx1, cy1, cx2, cy2, ax, ay) {
    $receiver.moveTo_lu1900$(x0, y0);
    $receiver.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay);
  }
  function line_0($receiver, p0, p1) {
    line($receiver, p0.x, p0.y, p1.x, p1.y);
  }
  function quad_0($receiver, o, c, a) {
    quad($receiver, o.x, o.y, c.x, c.y, a.x, a.y);
  }
  function cubic_0($receiver, o, c1, c2, a) {
    cubic($receiver, o.x, o.y, c1.x, c1.y, c2.x, c2.y, a.x, a.y);
  }
  var line_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.line_3tbhqa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var line = _.com.soywiz.korma.geom.vector.line_clsz36$;
    return function ($receiver, x0, y0, x1, y1) {
      line($receiver, numberToDouble(x0), numberToDouble(y0), numberToDouble(x1), numberToDouble(y1));
    };
  }));
  var quad_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.quad_3pnw5y$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var quad = _.com.soywiz.korma.geom.vector.quad_eslsqu$;
    return function ($receiver, x0, y0, controlX, controlY, anchorX, anchorY) {
      quad($receiver, numberToDouble(x0), numberToDouble(y0), numberToDouble(controlX), numberToDouble(controlY), numberToDouble(anchorX), numberToDouble(anchorY));
    };
  }));
  var cubic_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.cubic_obn7oq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var cubic = _.com.soywiz.korma.geom.vector.cubic_2tf5d6$;
    return function ($receiver, x0, y0, cx1, cy1, cx2, cy2, ax, ay) {
      cubic($receiver, numberToDouble(x0), numberToDouble(y0), numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
    };
  }));
  var rect_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rect_3tbhqa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rect = _.com.soywiz.korma.geom.vector.rect_clsz36$;
    return function ($receiver, x, y, width, height) {
      rect($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  var rectHole_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rectHole_3tbhqa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rectHole = _.com.soywiz.korma.geom.vector.rectHole_clsz36$;
    return function ($receiver, x, y, width, height) {
      rectHole($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  var roundRect_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.roundRect_3pnw5y$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var roundRect = _.com.soywiz.korma.geom.vector.roundRect_eslsqu$;
    return function ($receiver, x, y, w, h, rx, ry) {
      if (ry === void 0)
        ry = rx;
      roundRect($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(w), numberToDouble(h), numberToDouble(rx), numberToDouble(ry));
    };
  }));
  var arc_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.arc_p44rec$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var arc = _.com.soywiz.korma.geom.vector.arc_iaoljg$;
    return function ($receiver, x, y, r, start, end) {
      arc($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(r), numberToDouble(start), numberToDouble(end));
    };
  }));
  var circle_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.circle_2ne5a0$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var circle = _.com.soywiz.korma.geom.vector.circle_m5r0a8$;
    return function ($receiver, x, y, radius) {
      circle($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(radius));
    };
  }));
  var ellipse_0 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.ellipse_3tbhqa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var ellipse = _.com.soywiz.korma.geom.vector.ellipse_clsz36$;
    return function ($receiver, x, y, rw, rh) {
      ellipse($receiver, numberToDouble(x), numberToDouble(y), numberToDouble(rw), numberToDouble(rh));
    };
  }));
  function rCubicTo_1($receiver, cx1, cy1, cx2, cy2, ax, ay, relative) {
    relative ? rCubicTo($receiver, cx1, cy1, cx2, cy2, ax, ay) : $receiver.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay);
  }
  function rQuadTo_1($receiver, cx, cy, ax, ay, relative) {
    relative ? rQuadTo($receiver, cx, cy, ax, ay) : $receiver.quadTo_6y0v78$(cx, cy, ax, ay);
  }
  function rLineTo_1($receiver, ax, ay, relative) {
    relative ? rLineTo($receiver, ax, ay) : $receiver.lineTo_lu1900$(ax, ay);
  }
  function rMoveTo_1($receiver, ax, ay, relative) {
    relative ? rMoveTo($receiver, ax, ay) : $receiver.moveTo_lu1900$(ax, ay);
  }
  function rMoveToH_1($receiver, ax, relative) {
    relative ? rMoveToH($receiver, ax) : moveToH($receiver, ax);
  }
  function rMoveToV_1($receiver, ay, relative) {
    relative ? rMoveToV($receiver, ay) : moveToV($receiver, ay);
  }
  function rLineToH_1($receiver, ax, relative) {
    relative ? rLineToH($receiver, ax) : lineToH($receiver, ax);
  }
  function rLineToV_1($receiver, ay, relative) {
    relative ? rLineToV($receiver, ay) : lineToV($receiver, ay);
  }
  var rCubicTo_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rCubicTo_iayga9$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rCubicTo = _.com.soywiz.korma.geom.vector.rCubicTo_eslsqu$;
    return function ($receiver, cx1, cy1, cx2, cy2, ax, ay, relative) {
      if (relative) {
        rCubicTo($receiver, numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.cubicTo_15yvbs$(numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
      }
    };
  }));
  var rQuadTo_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rQuadTo_y3e1yz$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rQuadTo = _.com.soywiz.korma.geom.vector.rQuadTo_clsz36$;
    return function ($receiver, cx, cy, ax, ay, relative) {
      if (relative) {
        rQuadTo($receiver, numberToDouble(cx), numberToDouble(cy), numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.quadTo_6y0v78$(numberToDouble(cx), numberToDouble(cy), numberToDouble(ax), numberToDouble(ay));
      }
    };
  }));
  var rLineTo_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rLineTo_prgkpz$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineTo = _.com.soywiz.korma.geom.vector.rLineTo_b4nog2$;
    return function ($receiver, ax, ay, relative) {
      if (relative) {
        rLineTo($receiver, numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.lineTo_lu1900$(numberToDouble(ax), numberToDouble(ay));
      }
    };
  }));
  var rMoveTo_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rMoveTo_prgkpz$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveTo = _.com.soywiz.korma.geom.vector.rMoveTo_b4nog2$;
    return function ($receiver, ax, ay, relative) {
      if (relative) {
        rMoveTo($receiver, numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.moveTo_lu1900$(numberToDouble(ax), numberToDouble(ay));
      }
    };
  }));
  var rMoveToH_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rMoveToH_xh636r$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveToH = _.com.soywiz.korma.geom.vector.rMoveToH_ww6st0$;
    var moveToH = _.com.soywiz.korma.geom.vector.moveToH_ww6st0$;
    return function ($receiver, ax, relative) {
      if (relative) {
        rMoveToH($receiver, numberToDouble(ax));
      } else {
        moveToH($receiver, numberToDouble(ax));
      }
    };
  }));
  var rMoveToV_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rMoveToV_xh636r$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveToV = _.com.soywiz.korma.geom.vector.rMoveToV_ww6st0$;
    var moveToV = _.com.soywiz.korma.geom.vector.moveToV_ww6st0$;
    return function ($receiver, ay, relative) {
      if (relative) {
        rMoveToV($receiver, numberToDouble(ay));
      } else {
        moveToV($receiver, numberToDouble(ay));
      }
    };
  }));
  var rLineToH_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rLineToH_xh636r$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineToH = _.com.soywiz.korma.geom.vector.rLineToH_ww6st0$;
    var lineToH = _.com.soywiz.korma.geom.vector.lineToH_ww6st0$;
    return function ($receiver, ax, relative) {
      if (relative) {
        rLineToH($receiver, numberToDouble(ax));
      } else {
        lineToH($receiver, numberToDouble(ax));
      }
    };
  }));
  var rLineToV_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.rLineToV_xh636r$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineToV = _.com.soywiz.korma.geom.vector.rLineToV_ww6st0$;
    var lineToV = _.com.soywiz.korma.geom.vector.lineToV_ww6st0$;
    return function ($receiver, ay, relative) {
      if (relative) {
        rLineToV($receiver, numberToDouble(ay));
      } else {
        lineToV($receiver, numberToDouble(ay));
      }
    };
  }));
  function transformed$ObjectLiteral(closure$im, closure$parent, closure$m) {
    this.closure$im = closure$im;
    this.closure$parent = closure$parent;
    this.closure$m = closure$m;
    this.totalPoints_59a4uy$_0 = closure$parent.totalPoints;
  }
  Object.defineProperty(transformed$ObjectLiteral.prototype, 'lastX', {
    get: function () {
      return this.closure$im.transformX_lu1900$(this.closure$parent.lastX, this.closure$parent.lastY);
    }
  });
  Object.defineProperty(transformed$ObjectLiteral.prototype, 'lastY', {
    get: function () {
      return this.closure$im.transformY_lu1900$(this.closure$parent.lastX, this.closure$parent.lastY);
    }
  });
  Object.defineProperty(transformed$ObjectLiteral.prototype, 'totalPoints', {
    get: function () {
      return this.totalPoints_59a4uy$_0;
    }
  });
  transformed$ObjectLiteral.prototype.tX_lu1900$ = function (x, y) {
    return this.closure$m.transformX_lu1900$(x, y);
  };
  transformed$ObjectLiteral.prototype.tY_lu1900$ = function (x, y) {
    return this.closure$m.transformY_lu1900$(x, y);
  };
  transformed$ObjectLiteral.prototype.close = function () {
    this.closure$parent.close();
  };
  transformed$ObjectLiteral.prototype.lineTo_lu1900$ = function (x, y) {
    this.closure$parent.lineTo_lu1900$(this.tX_lu1900$(x, y), this.tY_lu1900$(x, y));
  };
  transformed$ObjectLiteral.prototype.moveTo_lu1900$ = function (x, y) {
    this.closure$parent.lineTo_lu1900$(this.tX_lu1900$(x, y), this.tY_lu1900$(x, y));
  };
  transformed$ObjectLiteral.prototype.quadTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.closure$parent.quadTo_6y0v78$(this.tX_lu1900$(cx, cy), this.tY_lu1900$(cx, cy), this.tX_lu1900$(ax, ay), this.tY_lu1900$(ax, ay));
  };
  transformed$ObjectLiteral.prototype.cubicTo_15yvbs$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.closure$parent.cubicTo_15yvbs$(this.tX_lu1900$(cx1, cy1), this.tY_lu1900$(cx1, cy1), this.tX_lu1900$(cx2, cy2), this.tY_lu1900$(cx2, cy2), this.tX_lu1900$(ax, ay), this.tY_lu1900$(ax, ay));
  };
  transformed$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [VectorBuilder]
  };
  function transformed_0($receiver, m) {
    var im = m.inverted_1ktkmn$();
    var parent = $receiver;
    return new transformed$ObjectLiteral(im, parent, m);
  }
  function transformed_1($receiver, m, block) {
    return block(transformed_0($receiver, m));
  }
  function VectorPath(commands, data, winding) {
    VectorPath$Companion_getInstance();
    if (commands === void 0)
      commands = new IntArrayList();
    if (data === void 0)
      data = new DoubleArrayList();
    if (winding === void 0)
      winding = Winding$EVEN_ODD_getInstance();
    this.commands = commands;
    this.data = data;
    this.winding = winding;
    this.version = 0;
    this.lastX_8oecxp$_0 = 0.0;
    this.lastY_8oecwu$_0 = 0.0;
    this.bezierTemp = new Bezier$Temp();
    this.p1_xif5oy$_0 = Point$Companion_getInstance().invoke();
    this.p2_xif5o3$_0 = Point$Companion_getInstance().invoke();
    this.scanline_te8ole$_54po0q$_0 = lazy(VectorPath$scanline$lambda);
    this.tempMatrix_6i83ju$_0 = new Matrix();
    this.identityMatrix_9a5zyo$_0 = new Matrix();
  }
  VectorPath.prototype.clone = function () {
    return new VectorPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  function VectorPath$Companion() {
    VectorPath$Companion_instance = this;
  }
  VectorPath$Companion.prototype.invoke_xaxyhx$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.VectorPath.Companion.invoke_xaxyhx$', wrapFunction(function () {
    var Winding = _.com.soywiz.korma.geom.vector.Winding;
    var VectorPath_init = _.com.soywiz.korma.geom.vector.VectorPath;
    return function (winding, callback) {
      if (winding === void 0)
        winding = Winding.EVEN_ODD;
      var $receiver = new VectorPath_init(void 0, void 0, winding);
      callback($receiver);
      return $receiver;
    };
  }));
  VectorPath$Companion.prototype.intersects_yoodik$ = function (left, leftTransform, right, rightTransform) {
    return left.intersectsWith_2ih0mj$(leftTransform, right, rightTransform);
  };
  VectorPath$Companion.prototype.intersects_v1ijtm$ = function (left, right) {
    return left.intersectsWith_d3txdv$(right);
  };
  VectorPath$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VectorPath$Companion_instance = null;
  function VectorPath$Companion_getInstance() {
    if (VectorPath$Companion_instance === null) {
      new VectorPath$Companion();
    }return VectorPath$Companion_instance;
  }
  function VectorPath$Visitor() {
  }
  VectorPath$Visitor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Visitor',
    interfaces: []
  };
  VectorPath.prototype.visitCmds_4dsjb9$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.VectorPath.visitCmds_4dsjb9$', function (moveTo, lineTo, quadTo, cubicTo, close) {
    var n = {v: 0};
    var $receiver = this.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          moveTo(x, y);
          break;
        case 1:
          var x_0 = this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          lineTo(x_0, y_0);
          break;
        case 2:
          var x1 = this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          quadTo(x1, y1, x2, y2);
          break;
        case 3:
          var x1_0 = this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          cubicTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
          break;
        case 4:
          close();
          break;
      }
    }
  });
  VectorPath.prototype.visitEdges_slnxdm$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.VectorPath.visitEdges_slnxdm$', function (line, quad, cubic, close) {
    var mx = {v: 0.0};
    var my = {v: 0.0};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var n = {v: 0};
    var $receiver = this.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          mx.v = x;
          my.v = y;
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          line(lx.v, ly.v, x_0, y_0);
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 2:
          var x1 = this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          quad(lx.v, ly.v, x1, y1, x2, y2);
          lx.v = x2;
          ly.v = y2;
          break;
        case 3:
          var x1_0 = this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          cubic(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3);
          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          if (lx.v !== mx.v || ly.v !== my.v) {
            line(lx.v, ly.v, mx.v, my.v);
          }
          close();
          break;
      }
    }
  });
  VectorPath.prototype.visit_jw0dp9$ = function (visitor) {
    var moveTo = getCallableRef('moveTo', function ($receiver, x, y) {
      return $receiver.moveTo_lu1900$(x, y), Unit;
    }.bind(null, visitor));
    var lineTo = getCallableRef('lineTo', function ($receiver, x, y) {
      return $receiver.lineTo_lu1900$(x, y), Unit;
    }.bind(null, visitor));
    var quadTo = getCallableRef('quadTo', function ($receiver, cx, cy, ax, ay) {
      return $receiver.quadTo_6y0v78$(cx, cy, ax, ay), Unit;
    }.bind(null, visitor));
    var cubicTo = getCallableRef('cubicTo', function ($receiver, cx1, cy1, cx2, cy2, ax, ay) {
      return $receiver.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay), Unit;
    }.bind(null, visitor));
    var close = getCallableRef('close', function ($receiver) {
      return $receiver.close(), Unit;
    }.bind(null, visitor));
    var n = {v: 0};
    var $receiver = this.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          moveTo(x, y);
          break;
        case 1:
          var x_0 = this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          lineTo(x_0, y_0);
          break;
        case 2:
          var x1 = this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          quadTo(x1, y1, x2, y2);
          break;
        case 3:
          var x1_0 = this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          cubicTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
          break;
        case 4:
          close();
          break;
      }
    }
  };
  VectorPath.prototype.clear = function () {
    this.commands.clear();
    this.data.clear();
    this.lastX = 0.0;
    this.lastY = 0.0;
    this.version = 0;
  };
  VectorPath.prototype.setFrom_d3txdv$ = function (other) {
    this.clear();
    this.appendFrom_d3txdv$(other);
  };
  VectorPath.prototype.appendFrom_d3txdv$ = function (other) {
    this.commands.add_38vc8i$(other.commands);
    this.data.add_avch8c$(other.data);
    this.lastX = other.lastX;
    this.lastY = other.lastY;
    this.version = this.version + 1 | 0;
  };
  Object.defineProperty(VectorPath.prototype, 'lastX', {
    get: function () {
      return this.lastX_8oecxp$_0;
    },
    set: function (lastX) {
      this.lastX_8oecxp$_0 = lastX;
    }
  });
  Object.defineProperty(VectorPath.prototype, 'lastY', {
    get: function () {
      return this.lastY_8oecwu$_0;
    },
    set: function (lastY) {
      this.lastY_8oecwu$_0 = lastY;
    }
  });
  VectorPath.prototype.moveTo_lu1900$ = function (x, y) {
    this.commands.plusAssign_za3lpa$(0);
    this.data.plusAssign_14dthe$(x);
    this.data.plusAssign_14dthe$(y);
    this.lastX = x;
    this.lastY = y;
    this.version = this.version + 1 | 0;
  };
  VectorPath.prototype.lineTo_lu1900$ = function (x, y) {
    this.ensureMoveTo_mdggnp$_0(x, y);
    this.commands.plusAssign_za3lpa$(1);
    this.data.plusAssign_14dthe$(x);
    this.data.plusAssign_14dthe$(y);
    this.lastX = x;
    this.lastY = y;
    this.version = this.version + 1 | 0;
  };
  VectorPath.prototype.quadTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.ensureMoveTo_mdggnp$_0(cx, cy);
    this.commands.plusAssign_za3lpa$(2);
    this.data.plusAssign_14dthe$(cx);
    this.data.plusAssign_14dthe$(cy);
    this.data.plusAssign_14dthe$(ax);
    this.data.plusAssign_14dthe$(ay);
    this.lastX = ax;
    this.lastY = ay;
    this.version = this.version + 1 | 0;
  };
  VectorPath.prototype.cubicTo_15yvbs$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.ensureMoveTo_mdggnp$_0(cx1, cy1);
    this.commands.plusAssign_za3lpa$(3);
    this.data.plusAssign_14dthe$(cx1);
    this.data.plusAssign_14dthe$(cy1);
    this.data.plusAssign_14dthe$(cx2);
    this.data.plusAssign_14dthe$(cy2);
    this.data.plusAssign_14dthe$(ax);
    this.data.plusAssign_14dthe$(ay);
    this.lastX = ax;
    this.lastY = ay;
    this.version = this.version + 1 | 0;
  };
  VectorPath.prototype.close = function () {
    this.commands.plusAssign_za3lpa$(4);
    this.version = this.version + 1 | 0;
  };
  Object.defineProperty(VectorPath.prototype, 'totalPoints', {
    get: function () {
      return this.data.size / 2 | 0;
    }
  });
  VectorPath.prototype.ensureMoveTo_mdggnp$_0 = function (x, y) {
    if (isEmpty(this))
      this.moveTo_lu1900$(x, y);
  };
  VectorPath.prototype.getBounds_iqjpvb$ = function (out, bb) {
    if (out === void 0)
      out = Rectangle$Companion_getInstance().invoke();
    if (bb === void 0)
      bb = new BoundsBuilder();
    bb.reset();
    add_18(bb, this);
    return bb.getBounds_2da8yn$(out);
  };
  VectorPath.prototype.getPoints = function () {
    var points = ArrayList_init_0();
    var n = {v: 0};
    var $receiver = this.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          var element = new Point(numberToDouble(x), numberToDouble(y));
          points.add_11rb$(element);
          break;
        case 1:
          var x_0 = this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          var element_0 = new Point(numberToDouble(x_0), numberToDouble(y_0));
          points.add_11rb$(element_0);
          break;
        case 2:
          var x1 = this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var element_1 = new Point(numberToDouble(x2), numberToDouble(y2));
          points.add_11rb$(element_1);
          break;
        case 3:
          var x1_0 = this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var element_2 = new Point(numberToDouble(x3), numberToDouble(y3));
          points.add_11rb$(element_2);
          break;
        case 4:
          break;
      }
    }
    return points;
  };
  VectorPath.prototype.containsPoint_lu1900$ = function (x, y) {
    return this.containsPoint_n8dknv$(x, y, this.winding);
  };
  Object.defineProperty(VectorPath.prototype, 'scanline_te8ole$_0', {
    get: function () {
      return this.scanline_te8ole$_54po0q$_0.value;
    }
  });
  VectorPath.prototype.ensureScanline_374f4$_0 = function () {
    var $receiver = this.scanline_te8ole$_0;
    if ($receiver.version !== this.version) {
      $receiver.reset();
      $receiver.add_d3txdv$(this);
      $receiver.version = this.version;
    }return $receiver;
  };
  VectorPath.prototype.containsPoint_n8dknv$ = function (x, y, winding) {
    return this.ensureScanline_374f4$_0().containsPoint_n8dknv$(x, y, winding);
  };
  VectorPath.prototype.intersectsWith_d3txdv$ = function (right) {
    return this.intersectsWith_2ih0mj$(this.identityMatrix_9a5zyo$_0, right, this.identityMatrix_9a5zyo$_0);
  };
  VectorPath.prototype.intersectsWith_2ih0mj$ = function (leftMatrix, right, rightMatrix) {
    var left = this;
    var leftScanline = left.ensureScanline_374f4$_0();
    var rightScanline = right.ensureScanline_374f4$_0();
    this.tempMatrix_6i83ju$_0.invert_1ktkmn$(rightMatrix);
    this.tempMatrix_6i83ju$_0.premultiply_1ktkmn$(leftMatrix);
    var $this = leftScanline.points;
    var tmp$;
    tmp$ = $this.size;
    for (var n = 0; n < tmp$; n++) {
      var x = $this.getX_za3lpa$(n);
      var y = $this.getY_za3lpa$(n);
      var tx = this.tempMatrix_6i83ju$_0.transformX_lu1900$(x, y);
      var ty = this.tempMatrix_6i83ju$_0.transformY_lu1900$(x, y);
      if (rightScanline.containsPoint_n8dknv$(tx, ty))
        return true;
    }
    this.tempMatrix_6i83ju$_0.invert_1ktkmn$(leftMatrix);
    this.tempMatrix_6i83ju$_0.premultiply_1ktkmn$(rightMatrix);
    var $this_0 = rightScanline.points;
    var tmp$_0;
    tmp$_0 = $this_0.size;
    for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
      var x_0 = $this_0.getX_za3lpa$(n_0);
      var y_0 = $this_0.getY_za3lpa$(n_0);
      var tx_0 = this.tempMatrix_6i83ju$_0.transformX_lu1900$(x_0, y_0);
      var ty_0 = this.tempMatrix_6i83ju$_0.transformY_lu1900$(x_0, y_0);
      if (leftScanline.containsPoint_n8dknv$(tx_0, ty_0))
        return true;
    }
    return false;
  };
  VectorPath.prototype.numberOfIntersections_lu1900$ = function (x, y) {
    var testx = x;
    var testy = y;
    var intersections = {v: 0};
    var mx = {v: 0.0};
    var my = {v: 0.0};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var n = {v: 0};
    var $receiver = this.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x_0 = this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y_0 = this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          mx.v = x_0;
          my.v = y_0;
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 1:
          var x_1 = this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_1 = this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          var x0 = lx.v;
          var y0 = ly.v;
          intersections.v = intersections.v + HorizontalLine_getInstance().intersectionsWithLine_15yvbs$(testx, testy, x0, y0, x_1, y_1) | 0;
          lx.v = x_1;
          ly.v = y_1;
          break;
        case 2:
          var x1 = this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var x0_0 = lx.v;
          var y0_0 = ly.v;
          intersections.v = intersections.v + HorizontalLine_getInstance().interesectionsWithQuadBezier_5vg17g$(testx, testy, x0_0, y0_0, x1, y1, x2, y2, this.p1_xif5oy$_0, this.p2_xif5o3$_0) | 0;
          lx.v = x2;
          ly.v = y2;
          break;
        case 3:
          var x1_0 = this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var x0_1 = lx.v;
          var y0_1 = ly.v;
          intersections.v = intersections.v + HorizontalLine_getInstance().intersectionsWithCubicBezier_erb1tk$(testx, testy, x0_1, y0_1, x1_0, y1_0, x2_0, y2_0, x3, y3, this.p1_xif5oy$_0, this.p2_xif5o3$_0) | 0;
          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          if (lx.v !== mx.v || ly.v !== my.v) {
            var x0_2 = lx.v;
            var y0_2 = ly.v;
            var x1_1 = mx.v;
            var y1_1 = my.v;
            intersections.v = intersections.v + HorizontalLine_getInstance().intersectionsWithLine_15yvbs$(testx, testy, x0_2, y0_2, x1_1, y1_1) | 0;
          }
          break;
      }
    }
    return intersections.v;
  };
  function VectorPath$Stats() {
    this.stats = new Int32Array(5);
  }
  Object.defineProperty(VectorPath$Stats.prototype, 'moveTo', {
    get: function () {
      return this.stats[0];
    }
  });
  Object.defineProperty(VectorPath$Stats.prototype, 'lineTo', {
    get: function () {
      return this.stats[1];
    }
  });
  Object.defineProperty(VectorPath$Stats.prototype, 'quadTo', {
    get: function () {
      return this.stats[2];
    }
  });
  Object.defineProperty(VectorPath$Stats.prototype, 'cubicTo', {
    get: function () {
      return this.stats[3];
    }
  });
  Object.defineProperty(VectorPath$Stats.prototype, 'close', {
    get: function () {
      return this.stats[4];
    }
  });
  VectorPath$Stats.prototype.reset = function () {
    var tmp$;
    tmp$ = this.stats;
    for (var n = 0; n !== tmp$.length; ++n) {
      this.stats[n] = 0;
    }
  };
  VectorPath$Stats.prototype.toString = function () {
    return 'Stats(moveTo=' + this.moveTo + ', lineTo=' + this.lineTo + ', quadTo=' + this.quadTo + ', cubicTo=' + this.cubicTo + ', close=' + this.close + ')';
  };
  VectorPath$Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  VectorPath.prototype.readStats_s5chd8$ = function (out) {
    if (out === void 0)
      out = new VectorPath$Stats();
    var tmp$;
    out.reset();
    tmp$ = this.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      var tmp$_0;
      tmp$_0 = out.stats;
      tmp$_0[cmd] = tmp$_0[cmd] + 1 | 0;
    }
    return out;
  };
  function VectorPath$Command() {
    VectorPath$Command_instance = this;
    this.MOVE_TO = 0;
    this.LINE_TO = 1;
    this.QUAD_TO = 2;
    this.CUBIC_TO = 3;
    this.CLOSE = 4;
  }
  VectorPath$Command.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Command',
    interfaces: []
  };
  var VectorPath$Command_instance = null;
  function VectorPath$Command_getInstance() {
    if (VectorPath$Command_instance === null) {
      new VectorPath$Command();
    }return VectorPath$Command_instance;
  }
  VectorPath.prototype.write_d3txdv$ = function (path) {
    this.commands.plusAssign_38vc8i$(path.commands);
    this.data.plusAssign_avch8c$(path.data);
    this.lastX = path.lastX;
    this.lastY = path.lastY;
    this.version = this.version + 1 | 0;
  };
  VectorPath.prototype.write_qtj57e$ = function (path, transform) {
    var tmp$;
    this.commands.plusAssign_38vc8i$(path.commands);
    tmp$ = path.data.size;
    for (var n = 0; n < tmp$; n += 2) {
      var x = path.data.getAt_za3lpa$(n + 0 | 0);
      var y = path.data.getAt_za3lpa$(n + 1 | 0);
      this.data.plusAssign_14dthe$(transform.transformX_lu1900$(x, y));
      this.data.plusAssign_14dthe$(transform.transformY_lu1900$(x, y));
    }
    this.lastX = transform.transformX_lu1900$(path.lastX, path.lastY);
    this.lastY = transform.transformY_lu1900$(path.lastX, path.lastY);
    this.version = this.version + 1 | 0;
  };
  VectorPath.prototype.toSvgString = function () {
    var $receiver = StringBuilder_init();
    var n = {v: 0};
    var $receiver_0 = this.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          $receiver.append_61zpoe$('M' + get_niceStr_0(x) + ',' + get_niceStr_0(y) + ' ');
          break;
        case 1:
          var x_0 = this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          $receiver.append_61zpoe$('L' + get_niceStr_0(x_0) + ',' + get_niceStr_0(y_0) + ' ');
          break;
        case 2:
          var x1 = this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          $receiver.append_61zpoe$('Q' + get_niceStr_0(x1) + ',' + get_niceStr_0(y1) + ',' + get_niceStr_0(x2) + ',' + get_niceStr_0(y2) + ' ');
          break;
        case 3:
          var x1_0 = this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          $receiver.append_61zpoe$('C' + get_niceStr_0(x1_0) + ',' + get_niceStr_0(y1_0) + ',' + get_niceStr_0(x2_0) + ',' + get_niceStr_0(y2_0) + ',' + get_niceStr_0(x3) + ',' + get_niceStr_0(y3) + ' ');
          break;
        case 4:
          $receiver.append_61zpoe$('Z ');
          break;
      }
    }
    var $receiver_1 = $receiver.toString();
    var tmp$_14;
    return trimEnd(Kotlin.isCharSequence(tmp$_14 = $receiver_1) ? tmp$_14 : throwCCE()).toString();
  };
  VectorPath.prototype.toString = function () {
    return 'VectorPath(' + this.toSvgString() + ')';
  };
  function VectorPath$scanline$lambda() {
    return new PolygonScanline();
  }
  VectorPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorPath',
    interfaces: [VectorBuilder]
  };
  function write($receiver, path) {
    var n = {v: 0};
    var $receiver_0 = path.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = path.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = path.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          $receiver.moveTo_lu1900$(x, y);
          break;
        case 1:
          var x_0 = path.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = path.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          $receiver.lineTo_lu1900$(x_0, y_0);
          break;
        case 2:
          var x1 = path.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = path.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = path.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = path.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          $receiver.quadTo_6y0v78$(x1, y1, x2, y2);
          break;
        case 3:
          var x1_0 = path.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = path.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = path.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = path.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = path.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = path.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          $receiver.cubicTo_15yvbs$(x1_0, y1_0, x2_0, y2_0, x3, y3);
          break;
        case 4:
          $receiver.close();
          break;
      }
    }
  }
  var containsPoint_1 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.containsPoint_d3k4rk$', function ($receiver, x, y) {
    return $receiver.containsPoint_lu1900$(x, y);
  });
  var containsPoint_2 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.containsPoint_qoe3kb$', function ($receiver, x, y, winding) {
    return $receiver.containsPoint_n8dknv$(x, y, winding);
  });
  var containsPoint_3 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.containsPoint_kh22o$', function ($receiver, x, y) {
    return $receiver.containsPoint_lu1900$(x, y);
  });
  var containsPoint_4 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.containsPoint_q5a48b$', function ($receiver, x, y, winding) {
    return $receiver.containsPoint_n8dknv$(x, y, winding);
  });
  var containsPoint_5 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.containsPoint_ixem0k$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.containsPoint_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  var containsPoint_6 = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.containsPoint_x8hp6x$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y, winding) {
      return $receiver.containsPoint_n8dknv$(numberToDouble(x), numberToDouble(y), winding);
    };
  }));
  var numberOfIntersections = defineInlineFunction('korma-root-korma.com.soywiz.korma.geom.vector.numberOfIntersections_ixem0k$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.numberOfIntersections_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  function add_17($receiver, path, transform) {
    var bb = $receiver;
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var n = {v: 0};
    var $receiver_0 = path.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = path.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = path.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          bb.add_y2mxf1$(x, y, transform);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = path.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = path.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          bb.add_y2mxf1$(x_0, y_0, transform);
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 2:
          var x1 = path.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = path.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = path.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = path.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          add_8(bb, Bezier$Companion_getInstance().quadBounds_oaz3ob$(lx.v, ly.v, x1, y1, x2, y2, bb.tempRect), transform);
          lx.v = x2;
          ly.v = y2;
          break;
        case 3:
          var x1_0 = path.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = path.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = path.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = path.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = path.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = path.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          add_8(bb, Bezier$Companion_getInstance().cubicBounds_1htcsh$(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3, bb.tempRect, path.bezierTemp), transform);
          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          break;
      }
    }
  }
  function add_18($receiver, path) {
    var bb = $receiver;
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var n = {v: 0};
    var $receiver_0 = path.commands;
    var tmp$;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      switch ($receiver_0.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
        case 0:
          var x = path.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
          var y = path.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
          bb.add_lu1900$(x, y);
          lx.v = x;
          ly.v = y;
          break;
        case 1:
          var x_0 = path.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = path.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          bb.add_lu1900$(x_0, y_0);
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 2:
          var x1 = path.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = path.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = path.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = path.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          add_4(bb, Bezier$Companion_getInstance().quadBounds_oaz3ob$(lx.v, ly.v, x1, y1, x2, y2, bb.tempRect));
          lx.v = x2;
          ly.v = y2;
          break;
        case 3:
          var x1_0 = path.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = path.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = path.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = path.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = path.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = path.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          add_4(bb, Bezier$Companion_getInstance().cubicBounds_1htcsh$(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3, bb.tempRect, path.bezierTemp));
          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          break;
      }
    }
  }
  function applyTransform($receiver, m) {
    var tmp$;
    tmp$ = $receiver.data.size;
    for (var n = 0; n < tmp$; n += 2) {
      var x = $receiver.data.getAt_za3lpa$(n + 0 | 0);
      var y = $receiver.data.getAt_za3lpa$(n + 1 | 0);
      $receiver.data.set_5wr77w$(n + 0 | 0, m.transformX_lu1900$(x, y));
      $receiver.data.set_5wr77w$(n + 1 | 0, m.transformY_lu1900$(x, y));
    }
    return $receiver;
  }
  function Winding(name, ordinal, str) {
    Enum.call(this);
    this.str = str;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Winding_initFields() {
    Winding_initFields = function () {
    };
    Winding$EVEN_ODD_instance = new Winding('EVEN_ODD', 0, 'evenOdd');
    Winding$NON_ZERO_instance = new Winding('NON_ZERO', 1, 'nonZero');
  }
  var Winding$EVEN_ODD_instance;
  function Winding$EVEN_ODD_getInstance() {
    Winding_initFields();
    return Winding$EVEN_ODD_instance;
  }
  var Winding$NON_ZERO_instance;
  function Winding$NON_ZERO_getInstance() {
    Winding_initFields();
    return Winding$NON_ZERO_instance;
  }
  Winding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Winding',
    interfaces: [Enum]
  };
  function Winding$values() {
    return [Winding$EVEN_ODD_getInstance(), Winding$NON_ZERO_getInstance()];
  }
  Winding.values = Winding$values;
  function Winding$valueOf(name) {
    switch (name) {
      case 'EVEN_ODD':
        return Winding$EVEN_ODD_getInstance();
      case 'NON_ZERO':
        return Winding$NON_ZERO_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.vector.Winding.' + name);
    }
  }
  Winding.valueOf_61zpoe$ = Winding$valueOf;
  function get_niceStr($receiver) {
    return almostEquals(Kotlin.Long.fromNumber($receiver).toNumber(), $receiver) ? Kotlin.Long.fromNumber($receiver).toString() : $receiver.toString();
  }
  function get_niceStr_0($receiver) {
    return almostEquals_0(Kotlin.Long.fromNumber($receiver).toNumber(), $receiver) ? Kotlin.Long.fromNumber($receiver).toString() : $receiver.toString();
  }
  function umod($receiver, other) {
    var tmp$;
    var remainder = $receiver % other;
    if (remainder < 0)
      tmp$ = remainder + other;
    else
      tmp$ = remainder;
    return tmp$;
  }
  function floorCeil(v) {
    return v < 0.0 ? Math_0.ceil(v) : Math_0.floor(v);
  }
  var KORMA_VERSION;
  function Easing() {
    Easing$Companion_getInstance();
  }
  function Easing$Companion() {
    Easing$Companion_instance = this;
  }
  function Easing$Companion$cubic$lambda(closure$f) {
    return function (it) {
      return closure$f(it, 0.0, 1.0, 1.0);
    };
  }
  Easing$Companion.prototype.cubic_ibw4ua$ = function (f) {
    return Easing$Companion_getInstance().invoke_7fnk9s$(Easing$Companion$cubic$lambda(f));
  };
  function Easing$Companion$combine$lambda(closure$start, closure$end) {
    return function (it) {
      return it < 0.5 ? 0.5 * closure$start.invoke_14dthe$(it * 2.0) : 0.5 * closure$end.invoke_14dthe$((it - 0.5) * 2.0) + 0.5;
    };
  }
  Easing$Companion.prototype.combine_eswojm$ = function (start, end) {
    return Easing$Companion_getInstance().invoke_7fnk9s$(Easing$Companion$combine$lambda(start, end));
  };
  function Easing$Companion$invoke$ObjectLiteral(closure$f) {
    this.closure$f = closure$f;
  }
  Easing$Companion$invoke$ObjectLiteral.prototype.invoke_14dthe$ = function (it) {
    return this.closure$f(it);
  };
  Easing$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Easing]
  };
  Easing$Companion.prototype.invoke_7fnk9s$ = function (f) {
    return new Easing$Companion$invoke$ObjectLiteral(f);
  };
  Object.defineProperty(Easing$Companion.prototype, 'SMOOTH', {
    get: function () {
      return Easings_getInstance().SMOOTH;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_ELASTIC', {
    get: function () {
      return Easings_getInstance().EASE_IN_ELASTIC;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_ELASTIC', {
    get: function () {
      return Easings_getInstance().EASE_OUT_ELASTIC;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_BOUNCE', {
    get: function () {
      return Easings_getInstance().EASE_OUT_BOUNCE;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'LINEAR', {
    get: function () {
      return Easings_getInstance().LINEAR;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN', {
    get: function () {
      return Easings_getInstance().EASE_IN;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT', {
    get: function () {
      return Easings_getInstance().EASE_OUT;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT', {
    get: function () {
      return Easings_getInstance().EASE_IN_OUT;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN', {
    get: function () {
      return Easings_getInstance().EASE_OUT_IN;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_BACK', {
    get: function () {
      return Easings_getInstance().EASE_IN_BACK;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_BACK', {
    get: function () {
      return Easings_getInstance().EASE_OUT_BACK;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_BACK', {
    get: function () {
      return Easings_getInstance().EASE_IN_OUT_BACK;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_BACK', {
    get: function () {
      return Easings_getInstance().EASE_OUT_IN_BACK;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_ELASTIC', {
    get: function () {
      return Easings_getInstance().EASE_IN_OUT_ELASTIC;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_ELASTIC', {
    get: function () {
      return Easings_getInstance().EASE_OUT_IN_ELASTIC;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_BOUNCE', {
    get: function () {
      return Easings_getInstance().EASE_IN_BOUNCE;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_BOUNCE', {
    get: function () {
      return Easings_getInstance().EASE_IN_OUT_BOUNCE;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_BOUNCE', {
    get: function () {
      return Easings_getInstance().EASE_OUT_IN_BOUNCE;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_QUAD', {
    get: function () {
      return Easings_getInstance().EASE_IN_QUAD;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_QUAD', {
    get: function () {
      return Easings_getInstance().EASE_OUT_QUAD;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_QUAD', {
    get: function () {
      return Easings_getInstance().EASE_IN_OUT_QUAD;
    }
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_SINE', {
    get: function () {
      return Easings_getInstance().EASE_SINE;
    }
  });
  Easing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Easing$Companion_instance = null;
  function Easing$Companion_getInstance() {
    if (Easing$Companion_instance === null) {
      new Easing$Companion();
    }return Easing$Companion_instance;
  }
  Easing.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Easing',
    interfaces: []
  };
  function Easings() {
    Easings_instance = this;
    this.BOUNCE_10_0 = 1.70158;
    this.SMOOTH = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$SMOOTH$lambda);
    this.EASE_IN_ELASTIC = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_ELASTIC$lambda);
    this.EASE_OUT_ELASTIC = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_ELASTIC$lambda);
    this.EASE_OUT_BOUNCE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_BOUNCE$lambda);
    this.LINEAR = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$LINEAR$lambda);
    this.EASE_IN = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN$lambda);
    this.EASE_OUT = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT$lambda);
    this.EASE_IN_OUT = Easing$Companion_getInstance().combine_eswojm$(this.EASE_IN, this.EASE_OUT);
    this.EASE_OUT_IN = Easing$Companion_getInstance().combine_eswojm$(this.EASE_OUT, this.EASE_IN);
    this.EASE_IN_BACK = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_BACK$lambda(this));
    this.EASE_OUT_BACK = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_BACK$lambda(this));
    this.EASE_IN_OUT_BACK = Easing$Companion_getInstance().combine_eswojm$(this.EASE_IN_BACK, this.EASE_OUT_BACK);
    this.EASE_OUT_IN_BACK = Easing$Companion_getInstance().combine_eswojm$(this.EASE_OUT_BACK, this.EASE_IN_BACK);
    this.EASE_IN_OUT_ELASTIC = Easing$Companion_getInstance().combine_eswojm$(this.EASE_IN_ELASTIC, this.EASE_OUT_ELASTIC);
    this.EASE_OUT_IN_ELASTIC = Easing$Companion_getInstance().combine_eswojm$(this.EASE_OUT_ELASTIC, this.EASE_IN_ELASTIC);
    this.EASE_IN_BOUNCE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_BOUNCE$lambda(this));
    this.EASE_IN_OUT_BOUNCE = Easing$Companion_getInstance().combine_eswojm$(this.EASE_IN_BOUNCE, this.EASE_OUT_BOUNCE);
    this.EASE_OUT_IN_BOUNCE = Easing$Companion_getInstance().combine_eswojm$(this.EASE_OUT_BOUNCE, this.EASE_IN_BOUNCE);
    this.EASE_IN_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_QUAD$lambda);
    this.EASE_OUT_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_QUAD$lambda);
    this.EASE_IN_OUT_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_OUT_QUAD$lambda);
    this.EASE_SINE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_SINE$lambda);
  }
  function Easings$SMOOTH$lambda(it) {
    return it * it * (3 - 2 * it);
  }
  function Easings$EASE_IN_ELASTIC$lambda(it) {
    if (it === 0.0 || it === 1.0)
      return it;
    else {
      var p = 0.3;
      var s = p / 4.0;
      var inv = it - 1;
      var tmp$ = -1.0;
      var x = 10.0 * inv;
      var tmp$_0 = tmp$ * Math_0.pow(2.0, x);
      var x_0 = (inv - s) * (2.0 * math.PI) / p;
      return tmp$_0 * Math_0.sin(x_0);
    }
  }
  function Easings$EASE_OUT_ELASTIC$lambda(it) {
    if (it === 0.0 || it === 1.0)
      return it;
    else {
      var p = 0.3;
      var s = p / 4.0;
      var x = -10.0 * it;
      var tmp$ = Math_0.pow(2.0, x);
      var x_0 = (it - s) * (2.0 * math.PI) / p;
      return tmp$ * Math_0.sin(x_0) + 1;
    }
  }
  function Easings$EASE_OUT_BOUNCE$lambda(it) {
    var s = 7.5625;
    var p = 2.75;
    if (it < 1.0 / p) {
      return s * Math_0.pow(it, 2.0);
    } else if (it < 2.0 / p) {
      var $receiver = it - 1.5 / p;
      return s * Math_0.pow($receiver, 2.0) + 0.75;
    } else if (it < 2.5 / p) {
      var $receiver_0 = it - 2.25 / p;
      return s * Math_0.pow($receiver_0, 2.0) + 0.9375;
    } else {
      var $receiver_1 = it - 2.625 / p;
      return s * Math_0.pow($receiver_1, 2.0) + 0.984375;
    }
  }
  function Easings$LINEAR$lambda(it) {
    return it;
  }
  function Easings$EASE_IN$lambda(it) {
    return it * it * it;
  }
  function Easings$EASE_OUT$lambda(it) {
    var inv = it - 1.0;
    return inv * inv * inv + 1;
  }
  function Easings$EASE_IN_BACK$lambda(this$Easings) {
    return function (it) {
      return Math_0.pow(it, 2.0) * ((this$Easings.BOUNCE_10_0 + 1.0) * it - this$Easings.BOUNCE_10_0);
    };
  }
  function Easings$EASE_OUT_BACK$lambda(this$Easings) {
    return function (it) {
      var inv = it - 1.0;
      return Math_0.pow(inv, 2.0) * ((this$Easings.BOUNCE_10_0 + 1.0) * inv + this$Easings.BOUNCE_10_0) + 1.0;
    };
  }
  function Easings$EASE_IN_BOUNCE$lambda(this$Easings) {
    return function (it) {
      return 1.0 - this$Easings.EASE_OUT_BOUNCE.invoke_14dthe$(1.0 - it);
    };
  }
  function Easings$EASE_IN_QUAD$lambda(it) {
    return 1.0 * it * it;
  }
  function Easings$EASE_OUT_QUAD$lambda(it) {
    return -1.0 * it * (it - 2);
  }
  function Easings$EASE_IN_OUT_QUAD$lambda(it) {
    var t = it * 2.0;
    return t < 1 ? 1.0 / 2 * t * t : -1.0 / 2 * ((t - 1) * (t - 1 - 2) - 1);
  }
  function Easings$EASE_SINE$lambda(it) {
    return Math_0.sin(it);
  }
  Easings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Easings',
    interfaces: []
  };
  var Easings_instance = null;
  function Easings_getInstance() {
    if (Easings_instance === null) {
      new Easings();
    }return Easings_instance;
  }
  function Interpolable() {
  }
  Interpolable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Interpolable',
    interfaces: []
  };
  function MutableInterpolable() {
  }
  MutableInterpolable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MutableInterpolable',
    interfaces: []
  };
  function interpolateAny($receiver, min, max) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    if (typeof min === 'number') {
      return (tmp$_1 = interpolate_0($receiver, typeof (tmp$ = min) === 'number' ? tmp$ : throwCCE(), typeof (tmp$_0 = max) === 'number' ? tmp$_0 : throwCCE())) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    } else if (typeof min === 'number') {
      return (tmp$_4 = interpolate_2($receiver, typeof (tmp$_2 = min) === 'number' ? tmp$_2 : throwCCE(), typeof (tmp$_3 = max) === 'number' ? tmp$_3 : throwCCE())) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE();
    } else if (typeof min === 'number') {
      return (tmp$_7 = interpolate_1($receiver, typeof (tmp$_5 = min) === 'number' ? tmp$_5 : throwCCE(), typeof (tmp$_6 = max) === 'number' ? tmp$_6 : throwCCE())) == null || Kotlin.isType(tmp$_7, Any) ? tmp$_7 : throwCCE();
    } else if (Kotlin.isType(min, Kotlin.Long)) {
      return (tmp$_10 = interpolate_3($receiver, Kotlin.isType(tmp$_8 = min, Kotlin.Long) ? tmp$_8 : throwCCE(), Kotlin.isType(tmp$_9 = max, Kotlin.Long) ? tmp$_9 : throwCCE())) == null || Kotlin.isType(tmp$_10, Any) ? tmp$_10 : throwCCE();
    } else if (Kotlin.isType(min, Interpolable)) {
      return (tmp$_13 = (Kotlin.isType(tmp$_11 = min, Interpolable) ? tmp$_11 : throwCCE()).interpolateWith_41hqm1$($receiver, Kotlin.isType(tmp$_12 = max, Interpolable) ? tmp$_12 : throwCCE())) == null || Kotlin.isType(tmp$_13, Any) ? tmp$_13 : throwCCE();
    } else
      throw IllegalArgumentException_init('Value is not interpolable');
  }
  function interpolate_0($receiver, l, r) {
    return l + (r - l) * $receiver;
  }
  function interpolate_1($receiver, l, r) {
    return l + (r - l) * $receiver;
  }
  function interpolate_2($receiver, l, r) {
    return numberToInt(l + (r - l | 0) * $receiver);
  }
  function interpolate_3($receiver, l, r) {
    return Kotlin.Long.fromNumber(l.toNumber() + r.subtract(l).toNumber() * $receiver);
  }
  function interpolate_4($receiver, l, r) {
    var tmp$;
    return l.interpolateWith_41hqm1$($receiver, (tmp$ = r) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  }
  function interpolate_5($receiver, l, r) {
    return l.interpolateWith_41hqm1$($receiver, r);
  }
  function minOrElse($receiver, nil) {
    var tmp$;
    if ($receiver.length === 0)
      return nil;
    var out = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
    tmp$ = get_lastIndex($receiver);
    for (var i = 0; i <= tmp$; i++) {
      var a = out;
      var b = $receiver[i];
      out = Math_0.min(a, b);
    }
    return out;
  }
  function maxOrElse($receiver, nil) {
    var tmp$;
    if ($receiver.length === 0)
      return nil;
    var out = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
    tmp$ = get_lastIndex($receiver);
    for (var i = 0; i <= tmp$; i++) {
      var a = out;
      var b = $receiver[i];
      out = Math_0.max(a, b);
    }
    return out;
  }
  function clamp($receiver, min, max) {
    return $receiver.compareTo_11rb$(min) < 0 ? min : $receiver.compareTo_11rb$(max) > 0 ? max : $receiver;
  }
  function clamp_0($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function clamp_1($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function clamp_2($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function betweenInclusive($receiver, min, max) {
    return $receiver >= min && $receiver <= max;
  }
  function clampUByte($receiver) {
    var n = $receiver & (-($receiver >= 0 ? 1 : 0) | 0);
    return (n | 255 - n >> 31) & 255;
  }
  function almostEquals(a, b) {
    return almostZero(a - b);
  }
  function almostZero(a) {
    return Math_0.abs(a) <= 1.0E-7;
  }
  function almostEquals_0(a, b) {
    return almostZero_0(a - b);
  }
  function almostZero_0(a) {
    return Math_0.abs(a) <= 1.0E-7;
  }
  function roundDecimalPlaces($receiver, places) {
    var placesFactor = Math_0.pow(10.0, places);
    return round($receiver * placesFactor) / placesFactor;
  }
  function isEquivalent(a, b, epsilon) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return a - epsilon < b && a + epsilon > b;
  }
  function smoothstep($receiver, edge0, edge1) {
    var v = ($receiver - edge0) / (edge1 - edge0);
    var step2 = clamp_1(v, 0.0, 1.0);
    return step2 * step2 * (3 - 2 * step2);
  }
  function convertRange($receiver, minSrc, maxSrc, minDst, maxDst) {
    return ($receiver - minSrc) / (maxSrc - minSrc) * (maxDst - minDst) + minDst;
  }
  function log_0(v, base) {
    return numberToInt(log(v, base));
  }
  function ln(v) {
    return numberToInt(Math_0.log(v));
  }
  function log2(v) {
    return numberToInt(log(v, 2.0));
  }
  function log10(v) {
    return numberToInt(log(v, 10.0));
  }
  function signNonZeroM1(x) {
    return x <= 0 ? -1 : 1;
  }
  function signNonZeroP1(x) {
    return x >= 0 ? 1 : -1;
  }
  function isAlmostZero($receiver) {
    return Math_0.abs($receiver) <= 1.0E-19;
  }
  function isNanOrInfinite($receiver) {
    return isNaN_0($receiver) || isInfinite($receiver);
  }
  function isAlmostZero_0($receiver) {
    return Math_0.abs($receiver) <= 1.0E-19;
  }
  function isNanOrInfinite_0($receiver) {
    return isNaN_1($receiver) || isInfinite_0($receiver);
  }
  function nextMultipleOf($receiver, multiple) {
    return isMultipleOf($receiver, multiple) ? $receiver : Kotlin.imul(($receiver / multiple | 0) + 1 | 0, multiple);
  }
  function nextMultipleOf_0($receiver, multiple) {
    return isMultipleOf_0($receiver, multiple) ? $receiver : $receiver.div(multiple).add(Kotlin.Long.fromInt(1)).multiply(multiple);
  }
  function prevMultipleOf($receiver, multiple) {
    return isMultipleOf($receiver, multiple) ? $receiver : nextMultipleOf($receiver, multiple) - multiple | 0;
  }
  function prevMultipleOf_0($receiver, multiple) {
    return isMultipleOf_0($receiver, multiple) ? $receiver : nextMultipleOf_0($receiver, multiple).subtract(multiple);
  }
  function isMultipleOf($receiver, multiple) {
    return multiple === 0 || $receiver % multiple === 0;
  }
  function isMultipleOf_0($receiver, multiple) {
    return equals(multiple, L0) || equals($receiver.modulo(multiple), L0);
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function Coroutine$ints$lambda(this$ints_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ints = this$ints_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ints$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ints$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ints$lambda.prototype.constructor = Coroutine$ints$lambda;
  Coroutine$ints$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$this$ints.nextInt(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ints$lambda(this$ints_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ints$lambda(this$ints_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ints($receiver) {
    return sequence(ints$lambda($receiver));
  }
  function Coroutine$ints$lambda_0(closure$from_0, closure$until_0, this$ints_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$from = closure$from_0;
    this.local$closure$until = closure$until_0;
    this.local$this$ints = this$ints_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ints$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ints$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ints$lambda_0.prototype.constructor = Coroutine$ints$lambda_0;
  Coroutine$ints$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$this$ints.nextInt_vux9f0$(this.local$closure$from, this.local$closure$until), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ints$lambda_0(closure$from_0, closure$until_0, this$ints_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ints$lambda_0(closure$from_0, closure$until_0, this$ints_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ints_0($receiver, from, until) {
    return sequence(ints$lambda_0(from, until, $receiver));
  }
  function ints_1($receiver, range) {
    return ints_0($receiver, range.start, range.endInclusive + 1 | 0);
  }
  function Coroutine$doubles$lambda(this$doubles_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$doubles = this$doubles_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$doubles$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doubles$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doubles$lambda.prototype.constructor = Coroutine$doubles$lambda;
  Coroutine$doubles$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$this$doubles.nextDouble(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doubles$lambda(this$doubles_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$doubles$lambda(this$doubles_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doubles($receiver) {
    return sequence(doubles$lambda($receiver));
  }
  function Coroutine$floats$lambda(this$floats_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$floats = this$floats_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$floats$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$floats$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$floats$lambda.prototype.constructor = Coroutine$floats$lambda;
  Coroutine$floats$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$this$floats.nextFloat(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function floats$lambda(this$floats_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$floats$lambda(this$floats_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function floats($receiver) {
    return sequence(floats$lambda($receiver));
  }
  function random($receiver, random) {
    if (random === void 0)
      random = Random.Default;
    if ($receiver.isEmpty())
      throw IllegalArgumentException_init('Empty list');
    return $receiver.get_za3lpa$(random.nextInt_za3lpa$($receiver.size));
  }
  function randomWithWeights($receiver, weights, random) {
    if (random === void 0)
      random = Random.Default;
    return weighted(random, toMap(zip($receiver, weights)));
  }
  function get_3($receiver, min, max) {
    return min + $receiver.nextDouble() * (max - min);
  }
  function get_4($receiver, min, max) {
    return min + $receiver.nextFloat() * (max - min);
  }
  function get_5($receiver, min, max) {
    return min + $receiver.nextInt_za3lpa$(max - min | 0) | 0;
  }
  function get_6($receiver, range) {
    return range.start + $receiver.nextInt_za3lpa$(range.endInclusive - range.start + 1 | 0) | 0;
  }
  function get_7($receiver, range) {
    return range.start.add($receiver.nextLong().modulo(range.endInclusive.subtract(range.start).add(Kotlin.Long.fromInt(1))));
  }
  function get_8($receiver, l, r) {
    return interpolate_5($receiver.nextInt_za3lpa$(65537) / 65536, l, r);
  }
  function get_9($receiver, list) {
    return list.get_za3lpa$(get_6($receiver, get_indices(list)));
  }
  function get_10($receiver, rectangle) {
    var x = get_3($receiver, rectangle.left, rectangle.right);
    var y = get_3($receiver, rectangle.top, rectangle.bottom);
    return new Point(numberToDouble(x), numberToDouble(y));
  }
  function setToRandom($receiver, min, max, random) {
    if (random === void 0)
      random = Random.Default;
    return $receiver.setToInterpolated_bs4suk$(random.nextDouble(), min, max);
  }
  function get_11($receiver, range) {
    return interpolateAny($receiver.nextInt_za3lpa$(65537) / 65536, range.start, range.endInclusive);
  }
  function weighted($receiver, weights) {
    return first(shuffledWeighted($receiver, weights));
  }
  function weighted_0($receiver, weights) {
    return first(shuffledWeighted_1($receiver, weights));
  }
  function shuffledWeighted($receiver, weights) {
    return shuffledWeighted_1($receiver, new RandomWeights(weights));
  }
  function shuffledWeighted_0($receiver, values, weights) {
    return shuffledWeighted_1($receiver, RandomWeights_init_0(values, weights));
  }
  function shuffledWeighted$lambda(closure$randoms) {
    return function (a, b) {
      return Kotlin.compareTo(closure$randoms.get_za3lpa$(a), closure$randoms.get_za3lpa$(b));
    };
  }
  function shuffledWeighted_1($receiver, weights) {
    var $receiver_0 = until(0, weights.items.size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_1 = $receiver.nextDouble();
      var x = 1.0 / weights.normalizedWeights.get_za3lpa$(item);
      tmp$_0.call(destination, -Math_0.pow($receiver_1, x));
    }
    var randoms = destination;
    var sortedIndices = sortedWith(until(0, weights.items.size), new Comparator$ObjectLiteral_0(shuffledWeighted$lambda(randoms)));
    var destination_0 = ArrayList_init(collectionSizeOrDefault(sortedIndices, 10));
    var tmp$_1;
    tmp$_1 = sortedIndices.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(weights.items.get_za3lpa$(item_0));
    }
    return destination_0;
  }
  function RandomWeights(weightsMap) {
    RandomWeights$Companion_getInstance();
    this.weightsMap = weightsMap;
    this.items = toList(this.weightsMap.keys);
    this.weights = toList(this.weightsMap.values);
    this.normalizedWeights = RandomWeights$Companion_getInstance().normalizeWeights_0(this.weights);
  }
  function RandomWeights$Companion() {
    RandomWeights$Companion_instance = this;
  }
  RandomWeights$Companion.prototype.normalizeWeights_0 = function (weights) {
    var tmp$;
    var min_0 = (tmp$ = min(weights)) != null ? tmp$ : 0.0;
    var destination = ArrayList_init(collectionSizeOrDefault(weights, 10));
    var tmp$_0;
    tmp$_0 = weights.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item + min_0 + 1);
    }
    return destination;
  };
  RandomWeights$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RandomWeights$Companion_instance = null;
  function RandomWeights$Companion_getInstance() {
    if (RandomWeights$Companion_instance === null) {
      new RandomWeights$Companion();
    }return RandomWeights$Companion_instance;
  }
  RandomWeights.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomWeights',
    interfaces: []
  };
  function RandomWeights_init(pairs, $this) {
    $this = $this || Object.create(RandomWeights.prototype);
    RandomWeights.call($this, mapOf(pairs.slice()));
    return $this;
  }
  function RandomWeights_init_0(values, weights, $this) {
    $this = $this || Object.create(RandomWeights.prototype);
    RandomWeights.call($this, toMap(zip(values, weights)));
    return $this;
  }
  RandomWeights.prototype.component1 = function () {
    return this.weightsMap;
  };
  RandomWeights.prototype.copy_evw6n4$ = function (weightsMap) {
    return new RandomWeights(weightsMap === void 0 ? this.weightsMap : weightsMap);
  };
  RandomWeights.prototype.toString = function () {
    return 'RandomWeights(weightsMap=' + Kotlin.toString(this.weightsMap) + ')';
  };
  RandomWeights.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.weightsMap) | 0;
    return result;
  };
  RandomWeights.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.weightsMap, other.weightsMap))));
  };
  function genericBinarySearch$lambda(from, to, low, high) {
    return (-low | 0) - 1 | 0;
  }
  function genericBinarySearch$lambda_0(from, to, low, high) {
    return (-low | 0) - 1 | 0;
  }
  var genericBinarySearchLeft$lambda = wrapFunction(function () {
    var Math_0 = Math;
    return function (from, to, low, high) {
      return coerceIn(Math_0.min(low, high), from, to - 1 | 0);
    };
  });
  function genericBinarySearch$lambda_1(from, to, low, high) {
    return (-low | 0) - 1 | 0;
  }
  var genericBinarySearchRight$lambda = wrapFunction(function () {
    var Math_0 = Math;
    return function (from, to, low, high) {
      return coerceIn(Math_0.max(low, high), from, to - 1 | 0);
    };
  });
  var IntSegmentSet$intersectionSlow$lambda = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$min, closure$max, this$IntSegmentSet, closure$out, closure$count) {
      return function (n, x1, x2) {
        var tmp$;
        if (this$IntSegmentSet.intersects_tjonv8$(x1, x2, closure$min, closure$max)) {
          var tmp$_0 = closure$out;
          var b = closure$min;
          var tmp$_1 = Math_0.max(x1, b);
          var b_0 = closure$max;
          tmp$_0(tmp$_1, Math_0.min(x2, b_0));
          tmp$ = closure$count.v;
          closure$count.v = tmp$ + 1 | 0;
        }return Unit;
      };
    };
  });
  var IntSegmentSet$intersection$lambda = wrapFunction(function () {
    var Math_0 = Math;
    return function (closure$min, closure$max, this$IntSegmentSet, closure$out, closure$count) {
      return function (n, x1, x2) {
        var tmp$;
        if (this$IntSegmentSet.intersects_tjonv8$(x1, x2, closure$min, closure$max)) {
          var tmp$_0 = closure$out;
          var b = closure$min;
          var tmp$_1 = Math_0.max(x1, b);
          var b_0 = closure$max;
          tmp$_0(tmp$_1, Math_0.min(x2, b_0));
          tmp$ = closure$count.v;
          closure$count.v = tmp$ + 1 | 0;
        }return Unit;
      };
    };
  });
  function IntSegmentSet() {
    this.min = new IntArrayList(16);
    this.max = new IntArrayList(16);
  }
  Object.defineProperty(IntSegmentSet.prototype, 'size', {
    get: function () {
      return this.min.size;
    }
  });
  IntSegmentSet.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IntSegmentSet.prototype.isNotEmpty = function () {
    return this.size > 0;
  };
  IntSegmentSet.prototype.clear = function () {
    this.min.clear();
    this.max.clear();
    return this;
  };
  IntSegmentSet.prototype.copyFrom_izsqhr$ = function (other) {
    this.clear();
    this.addUnsafe_u1pyda$(other);
    return this;
  };
  IntSegmentSet.prototype.clone = function () {
    return (new IntSegmentSet()).copyFrom_izsqhr$(this);
  };
  Object.defineProperty(IntSegmentSet.prototype, 'minMin', {
    get: function () {
      return this.isNotEmpty() ? this.min.getAt_za3lpa$(0) : 0;
    }
  });
  Object.defineProperty(IntSegmentSet.prototype, 'maxMax', {
    get: function () {
      return this.isNotEmpty() ? this.max.getAt_za3lpa$(this.max.size - 1 | 0) : 0;
    }
  });
  IntSegmentSet.prototype.findNearIndex_za3lpa$ = function (x) {
    var toIndex = this.size;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var check$result;
        var min = this.min.getAt_za3lpa$(mid);
        var max = this.max.getAt_za3lpa$(mid);
        if (x < min) {
          check$result = 1;
        } else if (x > max) {
          check$result = -1;
        } else {
          check$result = 0;
        }
        var mval = check$result;
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      genericBinarySearch$result = genericBinarySearch$lambda(0, toIndex, low, high);
    }
     while (false);
    return new BSearchResult(genericBinarySearch$result);
  };
  IntSegmentSet.prototype.fastForEach_uijzbn$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.segment.IntSegmentSet.fastForEach_uijzbn$', function (block) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++)
      block(n, this.min.getAt_za3lpa$(n), this.max.getAt_za3lpa$(n));
  });
  IntSegmentSet.prototype.findLeftBound_za3lpa$ = function (x) {
    var toIndex = this.size;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = Kotlin.primitiveCompareTo(this.min.getAt_za3lpa$(mid), x);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      var low_0 = low;
      var high_0 = high;
      genericBinarySearch$result = coerceIn(Math_0.min(low_0, high_0), 0, toIndex - 1 | 0);
    }
     while (false);
    return coerceIn(genericBinarySearch$result, 0, this.size - 1 | 0);
  };
  IntSegmentSet.prototype.findRightBound_za3lpa$ = function (x) {
    var toIndex = this.size;
    var genericBinarySearch$result;
    genericBinarySearch$break: do {
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        var mval = Kotlin.primitiveCompareTo(this.max.getAt_za3lpa$(mid), x);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          genericBinarySearch$result = mid;
          break genericBinarySearch$break;
        }
      }
      var low_0 = low;
      var high_0 = high;
      genericBinarySearch$result = coerceIn(Math_0.max(low_0, high_0), 0, toIndex - 1 | 0);
    }
     while (false);
    return coerceIn(genericBinarySearch$result, 0, this.size - 1 | 0);
  };
  IntSegmentSet.prototype.fastForEachInterestingRange_szsfh$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.segment.IntSegmentSet.fastForEachInterestingRange_szsfh$', function (min, max, block) {
    if (this.isEmpty())
      return;
    var nmin = this.findLeftBound_za3lpa$(min);
    var nmax = this.findRightBound_za3lpa$(max);
    for (var n = nmin; n <= nmax; n++)
      block(n, this.min.getAt_za3lpa$(n), this.max.getAt_za3lpa$(n));
  });
  IntSegmentSet.prototype.addUnsafe_6xvm5r$ = function (min, max) {
    if (!(min <= max)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.insertAt_0(this.size, min, max);
    return this;
  };
  IntSegmentSet.prototype.addUnsafe_u1pyda$ = function (other) {
    this.min.add_38vc8i$(other.min);
    this.max.add_38vc8i$(other.max);
    return this;
  };
  IntSegmentSet.prototype.add_izsqhr$ = function (other) {
    var tmp$;
    tmp$ = other.size;
    for (var n = 0; n < tmp$; n++) {
      this.add_vux9f0$(other.min.getAt_za3lpa$(n), other.max.getAt_za3lpa$(n));
    }
    return this;
  };
  IntSegmentSet.prototype.add_vux9f0$ = function (min, max) {
    block$break: do {
      var tmp$, tmp$_0;
      if (!(min <= max)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (this.isEmpty())
        this.insertAt_0(this.size, min, max);
      else if (min === this.maxMax)
        this.max.set_vux9f0$(this.max.size - 1 | 0, max);
      else if (max === this.minMin)
        this.min.set_vux9f0$(0, min);
      else {
        var removeStart = {v: -1};
        var removeCount = {v: -1};
        fastForEachInterestingRange_szsfh$break: do {
          if (this.isEmpty())
            break fastForEachInterestingRange_szsfh$break;
          var nmin = this.findLeftBound_za3lpa$(min);
          var nmax = this.findRightBound_za3lpa$(max);
          for (var n = nmin; n <= nmax; n++) {
            var x1 = this.min.getAt_za3lpa$(n);
            var x2 = this.max.getAt_za3lpa$(n);
            if (this.intersects_tjonv8$(x1, x2, min, max)) {
              if (removeStart.v === -1)
                removeStart.v = n;
              var tmp$_1 = this.min;
              var tmp$_2 = removeStart.v;
              var tmp$_3 = this.min.getAt_za3lpa$(removeStart.v);
              var b = Math_0.min(x1, min);
              tmp$_1.set_vux9f0$(tmp$_2, Math_0.min(tmp$_3, b));
              var tmp$_4 = this.max;
              var tmp$_5 = removeStart.v;
              var tmp$_6 = this.max.getAt_za3lpa$(removeStart.v);
              var b_0 = Math_0.max(x2, max);
              tmp$_4.set_vux9f0$(tmp$_5, Math_0.max(tmp$_6, b_0));
              removeCount.v = removeCount.v + 1 | 0;
            }}
        }
         while (false);
        if (removeCount.v !== 0)
          if (removeCount.v > 0)
            this.removeAt_0(removeStart.v + 1 | 0, removeCount.v);
          else if (max < this.minMin)
            this.insertAt_0(0, min, max);
          else if (min > this.maxMax)
            this.insertAt_0(this.size, min, max);
          else {
            tmp$ = coerceAtLeast(this.findLeftBound_za3lpa$(min), 1);
            tmp$_0 = this.findRightBound_za3lpa$(max);
            for (var m = tmp$; m <= tmp$_0; m++) {
              var prevMax = this.max.getAt_za3lpa$(m - 1 | 0);
              var currMin = this.min.getAt_za3lpa$(m);
              if (min > prevMax && max < currMin) {
                this.insertAt_0(m, min, max);
                break block$break;
              }}
            throw IllegalStateException_init('Unexpected'.toString());
          }
      }
    }
     while (false);
    return this;
  };
  IntSegmentSet.prototype.insertAt_0 = function (n, min, max) {
    this.min.insertAt_vux9f0$(n, min);
    this.max.insertAt_vux9f0$(n, max);
  };
  IntSegmentSet.prototype.removeAt_0 = function (n, count) {
    this.min.removeAt_vux9f0$(n, count);
    this.max.removeAt_vux9f0$(n, count);
  };
  IntSegmentSet.prototype.intersection_240t67$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.segment.IntSegmentSet.intersection_240t67$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Math_0 = Math;
    var IntSegmentSet$intersection$lambda = wrapFunction(function () {
      var Math_0 = Math;
      return function (closure$min, closure$max, this$IntSegmentSet, closure$out, closure$count) {
        return function (n, x1, x2) {
          var tmp$;
          if (this$IntSegmentSet.intersects_tjonv8$(x1, x2, closure$min, closure$max)) {
            var tmp$_0 = closure$out;
            var b = closure$min;
            var tmp$_1 = Math_0.max(x1, b);
            var b_0 = closure$max;
            tmp$_0(tmp$_1, Math_0.min(x2, b_0));
            tmp$ = closure$count.v;
            closure$count.v = tmp$ + 1 | 0;
          }return Unit;
        };
      };
    });
    return function (min, max, out) {
      var count = {v: 0};
      fastForEachInterestingRange_szsfh$break: do {
        if (this.isEmpty())
          break fastForEachInterestingRange_szsfh$break;
        var nmin = this.findLeftBound_za3lpa$(min);
        var nmax = this.findRightBound_za3lpa$(max);
        for (var n = nmin; n <= nmax; n++) {
          var x1 = this.min.getAt_za3lpa$(n);
          var x2 = this.max.getAt_za3lpa$(n);
          if (this.intersects_tjonv8$(x1, x2, min, max)) {
            out(Math_0.max(x1, min), Math_0.min(x2, max));
            count.v = count.v + 1 | 0;
          }}
      }
       while (false);
      return count.v > 0;
    };
  }));
  IntSegmentSet.prototype.intersectionSlow_6xvm5r$ = function (min, max) {
    var out = {v: null};
    var count = {v: 0};
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var x1 = this.min.getAt_za3lpa$(n);
      var x2 = this.max.getAt_za3lpa$(n);
      if (this.intersects_tjonv8$(x1, x2, min, max)) {
        out.v = to(Math_0.max(x1, min), Math_0.min(x2, max));
        count.v = count.v + 1 | 0;
      }}
    count.v > 0;
    return out.v;
  };
  IntSegmentSet.prototype.intersectionSlow_yxc9qk$ = defineInlineFunction('korma-root-korma.com.soywiz.korma.segment.IntSegmentSet.intersectionSlow_yxc9qk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Math_0 = Math;
    var IntSegmentSet$intersectionSlow$lambda = wrapFunction(function () {
      var Math_0 = Math;
      return function (closure$min, closure$max, this$IntSegmentSet, closure$out, closure$count) {
        return function (n, x1, x2) {
          var tmp$;
          if (this$IntSegmentSet.intersects_tjonv8$(x1, x2, closure$min, closure$max)) {
            var tmp$_0 = closure$out;
            var b = closure$min;
            var tmp$_1 = Math_0.max(x1, b);
            var b_0 = closure$max;
            tmp$_0(tmp$_1, Math_0.min(x2, b_0));
            tmp$ = closure$count.v;
            closure$count.v = tmp$ + 1 | 0;
          }return Unit;
        };
      };
    });
    return function (min, max, out) {
      var count = {v: 0};
      var tmp$;
      tmp$ = this.size;
      for (var n = 0; n < tmp$; n++) {
        var x1 = this.min.getAt_za3lpa$(n);
        var x2 = this.max.getAt_za3lpa$(n);
        if (this.intersects_tjonv8$(x1, x2, min, max)) {
          out(Math_0.max(x1, min), Math_0.min(x2, max));
          count.v = count.v + 1 | 0;
        }}
      return count.v > 0;
    };
  }));
  IntSegmentSet.prototype.contains_za3lpa$ = function (v) {
    return this.findNearIndex_za3lpa$(v).found;
  };
  IntSegmentSet.prototype.setToIntersect_t6gtn0$ = function (a, b) {
    var aSmaller = a.size < b.size;
    var av = aSmaller ? a : b;
    var bv = aSmaller ? b : a;
    this.clear();
    var tmp$;
    tmp$ = av.size;
    loop_label: for (var n = 0; n < tmp$; n++) {
      var x1 = av.min.getAt_za3lpa$(n);
      var x2 = av.max.getAt_za3lpa$(n);
      var count = {v: 0};
      fastForEachInterestingRange_szsfh$break: do {
        if (bv.isEmpty())
          break fastForEachInterestingRange_szsfh$break;
        var nmin = bv.findLeftBound_za3lpa$(x1);
        var nmax = bv.findRightBound_za3lpa$(x2);
        for (var n_0 = nmin; n_0 <= nmax; n_0++) {
          var x1_0 = bv.min.getAt_za3lpa$(n_0);
          var x2_0 = bv.max.getAt_za3lpa$(n_0);
          if (bv.intersects_tjonv8$(x1_0, x2_0, x1, x2)) {
            this.add_vux9f0$(Math_0.max(x1_0, x1), Math_0.min(x2_0, x2));
            count.v = count.v + 1 | 0;
          }}
      }
       while (false);
      count.v > 0;
    }
    return this;
  };
  IntSegmentSet.prototype.setToIntersectSlow_j1cqgh$ = function (a, b) {
    this.clear();
    var tmp$;
    tmp$ = a.size;
    for (var n = 0; n < tmp$; n++) {
      var x1 = a.min.getAt_za3lpa$(n);
      var x2 = a.max.getAt_za3lpa$(n);
      var count = {v: 0};
      var tmp$_0;
      tmp$_0 = b.size;
      for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
        var x1_0 = b.min.getAt_za3lpa$(n_0);
        var x2_0 = b.max.getAt_za3lpa$(n_0);
        if (b.intersects_tjonv8$(x1_0, x2_0, x1, x2)) {
          this.add_vux9f0$(Math_0.max(x1_0, x1), Math_0.min(x2_0, x2));
          count.v = count.v + 1 | 0;
        }}
      count.v > 0;
    }
    return this;
  };
  IntSegmentSet.prototype.intersects_tjonv8$ = function (x1, x2, y1, y2) {
    return x2 >= y1 && y2 >= x1;
  };
  IntSegmentSet.prototype.intersects_qt1dr2$ = function (x1, x2, index) {
    return this.intersects_tjonv8$(x1, x2, this.min.getAt_za3lpa$(index), this.max.getAt_za3lpa$(index));
  };
  IntSegmentSet.prototype.contains_qt1dr2$ = function (v, x1, x2) {
    return x1 <= v && v < x2;
  };
  IntSegmentSet.prototype.contains_vux9f0$ = function (v, index) {
    return this.contains_qt1dr2$(v, this.min.getAt_za3lpa$(index), this.max.getAt_za3lpa$(index));
  };
  IntSegmentSet.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_61zpoe$('[');
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var min = this.min.getAt_za3lpa$(n);
      var max = this.max.getAt_za3lpa$(n);
      var first = n === 0;
      if (!first)
        $receiver.append_61zpoe$(', ');
      $receiver.append_61zpoe$(min.toString() + '-' + max);
    }
    $receiver.append_61zpoe$(']');
    return $receiver.toString();
  };
  IntSegmentSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntSegmentSet',
    interfaces: []
  };
  var genericBinarySearchLeft = defineInlineFunction('korma-root-korma.com.soywiz.korma.segment.genericBinarySearchLeft_51hkjm$', wrapFunction(function () {
    var coerceIn = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
    var wrapFunction = Kotlin.wrapFunction;
    var Math_0 = Math;
    function genericBinarySearch$lambda(from, to, low, high) {
      return (-low | 0) - 1 | 0;
    }
    var genericBinarySearchLeft$lambda = wrapFunction(function () {
      var Math_0 = Math;
      return function (from, to, low, high) {
        return coerceIn(Math_0.min(low, high), from, to - 1 | 0);
      };
    });
    return function (fromIndex, toIndex, check) {
      var genericBinarySearch$result;
      genericBinarySearch$break: do {
        var low = fromIndex;
        var high = toIndex - 1 | 0;
        while (low <= high) {
          var mid = (low + high | 0) / 2 | 0;
          var mval = check(mid);
          if (mval < 0)
            low = mid + 1 | 0;
          else if (mval > 0)
            high = mid - 1 | 0;
          else {
            genericBinarySearch$result = mid;
            break genericBinarySearch$break;
          }
        }
        var low_0 = low;
        var high_0 = high;
        genericBinarySearch$result = coerceIn(Math_0.min(low_0, high_0), fromIndex, toIndex - 1 | 0);
      }
       while (false);
      return genericBinarySearch$result;
    };
  }));
  var genericBinarySearchRight = defineInlineFunction('korma-root-korma.com.soywiz.korma.segment.genericBinarySearchRight_51hkjm$', wrapFunction(function () {
    var coerceIn = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
    var wrapFunction = Kotlin.wrapFunction;
    var Math_0 = Math;
    function genericBinarySearch$lambda(from, to, low, high) {
      return (-low | 0) - 1 | 0;
    }
    var genericBinarySearchRight$lambda = wrapFunction(function () {
      var Math_0 = Math;
      return function (from, to, low, high) {
        return coerceIn(Math_0.max(low, high), from, to - 1 | 0);
      };
    });
    return function (fromIndex, toIndex, check) {
      var genericBinarySearch$result;
      genericBinarySearch$break: do {
        var low = fromIndex;
        var high = toIndex - 1 | 0;
        while (low <= high) {
          var mid = (low + high | 0) / 2 | 0;
          var mval = check(mid);
          if (mval < 0)
            low = mid + 1 | 0;
          else if (mval > 0)
            high = mid - 1 | 0;
          else {
            genericBinarySearch$result = mid;
            break genericBinarySearch$break;
          }
        }
        var low_0 = low;
        var high_0 = high;
        genericBinarySearch$result = coerceIn(Math_0.max(low_0, high_0), fromIndex, toIndex - 1 | 0);
      }
       while (false);
      return genericBinarySearch$result;
    };
  }));
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korma = package$soywiz.korma || (package$soywiz.korma = {});
  Object.defineProperty(package$korma, 'Korma', {
    get: Korma_getInstance
  });
  Object.defineProperty(AStar, 'Companion', {
    get: AStar$Companion_getInstance
  });
  $$importsForInline$$['korma-root-korma'] = _;
  var package$algo = package$korma.algo || (package$korma.algo = {});
  package$algo.AStar = AStar;
  var package$annotations = package$korma.annotations || (package$korma.annotations = {});
  package$annotations.KormaExperimental = KormaExperimental;
  Object.defineProperty(Anchor, 'Companion', {
    get: Anchor$Companion_getInstance
  });
  var package$geom = package$korma.geom || (package$korma.geom = {});
  package$geom.Anchor = Anchor;
  Object.defineProperty(Angle, 'Companion', {
    get: Angle$Companion_getInstance
  });
  package$geom.Angle = Angle;
  package$geom.cos_4crm0z$ = cos;
  package$geom.sin_4crm0z$ = sin;
  package$geom.tan_4crm0z$ = tan;
  package$geom.get_cosine_72g52s$ = get_cosine;
  package$geom.get_sine_72g52s$ = get_sine;
  package$geom.get_tangent_72g52s$ = get_tangent;
  package$geom.get_degrees_72g52s$ = get_degrees;
  package$geom.get_absoluteValue_72g52s$ = get_absoluteValue;
  package$geom.shortDistanceTo_e486mh$ = shortDistanceTo;
  package$geom.longDistanceTo_e486mh$ = longDistanceTo;
  package$geom.times_gh9cj6$ = times;
  package$geom.div_gh9cj6$ = div;
  package$geom.times_gh3ihe$ = times_0;
  package$geom.div_gh3ihe$ = div_0;
  package$geom.times_lav7ze$ = times_1;
  package$geom.div_lav7ze$ = div_1;
  package$geom.div_e486mh$ = div_2;
  package$geom.plus_e486mh$ = plus;
  package$geom.minus_e486mh$ = minus;
  package$geom.unaryMinus_72g52s$ = unaryMinus;
  package$geom.unaryPlus_72g52s$ = unaryPlus;
  package$geom.compareTo_e486mh$ = compareTo;
  package$geom.contains_ws4igr$ = contains;
  package$geom.contains_jzdwcn$ = contains_0;
  package$geom.until_e486mh$ = until_0;
  package$geom.inBetweenInclusive_o5albm$ = inBetweenInclusive;
  package$geom.inBetweenExclusive_o5albm$ = inBetweenExclusive;
  package$geom.inBetween_fa3vxf$ = inBetween;
  package$geom.inBetween_aiw167$ = inBetween_0;
  package$geom.inBetween_luynt3$ = inBetween_1;
  package$geom.get_degrees_yrwdxr$ = get_degrees_0;
  package$geom.get_radians_yrwdxr$ = get_radians;
  package$geom.get_degrees_s8ev3n$ = get_degrees_1;
  package$geom.get_radians_s8ev3n$ = get_radians_0;
  package$geom.get_degrees_81szk$ = get_degrees_2;
  package$geom.get_radians_81szk$ = get_radians_1;
  package$geom.get_degrees_rcaex3$ = get_degrees_3;
  package$geom.get_radians_rcaex3$ = get_radians_2;
  package$geom.get_normalized_72g52s$ = get_normalized;
  package$geom.interpolate_90nupj$ = interpolate;
  Object.defineProperty(BoundsBuilder, 'Companion', {
    get: BoundsBuilder$Companion_getInstance
  });
  package$geom.BoundsBuilder = BoundsBuilder;
  package$geom.add_13w2sz$ = add;
  package$geom.add_jjtjgn$ = add_0;
  package$geom.add_7bm900$ = add_1;
  package$geom.add_n5l3dl$ = add_2;
  package$geom.add_xooazd$ = add_3;
  package$geom.add_wm3ouy$ = add_4;
  package$geom.add_90py0d$ = add_5;
  package$geom.add_tozflw$ = add_6;
  package$geom.add_4q3era$ = add_7;
  package$geom.add_uxbbc9$ = add_8;
  Object.defineProperty(IMatrix, 'Companion', {
    get: IMatrix$Companion_getInstance
  });
  package$geom.IMatrix = IMatrix;
  package$geom.get_a_gsfhcb$ = get_a;
  package$geom.get_b_gsfhcb$ = get_b;
  package$geom.get_c_gsfhcb$ = get_c;
  package$geom.get_d_gsfhcb$ = get_d;
  package$geom.get_tx_gsfhcb$ = get_tx;
  package$geom.get_ty_gsfhcb$ = get_ty;
  Object.defineProperty(Matrix, 'Companion', {
    get: Matrix$Companion_getInstance
  });
  Object.defineProperty(Matrix$Type, 'IDENTITY', {
    get: Matrix$Type$IDENTITY_getInstance
  });
  Object.defineProperty(Matrix$Type, 'TRANSLATE', {
    get: Matrix$Type$TRANSLATE_getInstance
  });
  Object.defineProperty(Matrix$Type, 'SCALE', {
    get: Matrix$Type$SCALE_getInstance
  });
  Object.defineProperty(Matrix$Type, 'SCALE_TRANSLATE', {
    get: Matrix$Type$SCALE_TRANSLATE_getInstance
  });
  Object.defineProperty(Matrix$Type, 'COMPLEX', {
    get: Matrix$Type$COMPLEX_getInstance
  });
  Matrix.Type = Matrix$Type;
  package$geom.Point = Point;
  Object.defineProperty(Matrix$Transform, 'Companion', {
    get: Matrix$Transform$Companion_getInstance
  });
  Matrix.Transform = Matrix$Transform;
  Object.defineProperty(Matrix$Computed, 'Companion', {
    get: Matrix$Computed$Companion_getInstance
  });
  Matrix.Computed_init_1ktkmn$ = Matrix$Matrix$Computed_init;
  Matrix.Computed_init_y2sis1$ = Matrix$Matrix$Computed_init_0;
  Matrix.Computed = Matrix$Computed;
  package$geom.Matrix = Matrix;
  package$geom.times_dzx4rf$ = times_2;
  package$geom.transformX_ccqrid$ = transformX;
  package$geom.transformY_ccqrid$ = transformY;
  package$geom.transform_7akd1r$ = transform;
  package$geom.transform_ew9zwh$ = transform_0;
  package$geom.get_x_qai0ns$ = get_x;
  package$geom.get_y_qai0ns$ = get_y;
  package$geom.transform_su616o$ = transform_1;
  package$geom.transformXf_11m42z$ = transformXf;
  package$geom.transformYf_11m42z$ = transformYf;
  package$geom.transformX_11m42z$ = transformX_0;
  package$geom.transformY_11m42z$ = transformY_0;
  package$geom.transformX_1w4g18$ = transformX_1;
  package$geom.transformY_1w4g18$ = transformY_1;
  package$geom.invert_ywjxrw$ = invert;
  package$geom.multiply_9gy2uu$ = multiply;
  package$geom.premultiply_ywjxrw$ = premultiply;
  package$geom.copyFrom_ywjxrw$ = copyFrom;
  Object.defineProperty(MajorOrder, 'ROW', {
    get: MajorOrder$ROW_getInstance
  });
  Object.defineProperty(MajorOrder, 'COLUMN', {
    get: MajorOrder$COLUMN_getInstance
  });
  package$geom.MajorOrder = MajorOrder;
  Object.defineProperty(Matrix3D, 'Companion', {
    get: Matrix3D$Companion_getInstance
  });
  package$geom.Matrix3D = Matrix3D;
  package$geom.copyToFloatWxH_qtb9v8$ = copyToFloatWxH;
  package$geom.copyToFloatWxH_zc45sq$ = copyToFloatWxH_0;
  package$geom.copyToFloat2x2_bcg1qk$ = copyToFloat2x2;
  package$geom.copyToFloat3x3_bcg1qk$ = copyToFloat3x3;
  package$geom.copyToFloat4x4_bcg1qk$ = copyToFloat4x4;
  package$geom.copyToFloat2x2_49tfx6$ = copyToFloat2x2_0;
  package$geom.copyToFloat3x3_49tfx6$ = copyToFloat3x3_0;
  package$geom.copyToFloat4x4_49tfx6$ = copyToFloat4x4_0;
  package$geom.setRows_6zrupt$ = setRows;
  package$geom.setRows_sn85vl$ = setRows_0;
  package$geom.setColumns_6zrupt$ = setColumns;
  package$geom.setColumns_sn85vl$ = setColumns_0;
  package$geom.setRows3x3_2rvse1$ = setRows3x3;
  package$geom.setRows3x3_esm9q7$ = setRows3x3_0;
  package$geom.setColumns3x3_2rvse1$ = setColumns3x3;
  package$geom.setColumns3x3_esm9q7$ = setColumns3x3_0;
  package$geom.setRows2x2_kqdnpj$ = setRows2x2;
  package$geom.setRows2x2_tiv52f$ = setRows2x2_0;
  package$geom.fromRows_e9mslf$ = fromRows;
  package$geom.fromRows_z40y7x$ = fromRows_0;
  package$geom.fromColumns_e9mslf$ = fromColumns;
  package$geom.fromColumns_z40y7x$ = fromColumns_0;
  package$geom.setColumns2x2_kqdnpj$ = setColumns2x2;
  package$geom.setColumns2x2_tiv52f$ = setColumns2x2_0;
  package$geom.fromRows3x3_bxle5z$ = fromRows3x3;
  package$geom.fromRows3x3_5mwny9$ = fromRows3x3_0;
  package$geom.fromColumns3x3_bxle5z$ = fromColumns3x3;
  package$geom.fromColumns3x3_5mwny9$ = fromColumns3x3_0;
  package$geom.fromRows2x2_ix13uj$ = fromRows2x2;
  package$geom.fromRows2x2_a4jmhn$ = fromRows2x2_0;
  package$geom.fromColumns2x2_ix13uj$ = fromColumns2x2;
  package$geom.fromColumns2x2_a4jmhn$ = fromColumns2x2_0;
  package$geom.times_3whwsx$ = times_3;
  package$geom.times_2zf9fo$ = times_4;
  package$geom.times_mdd2z3$ = times_5;
  package$geom.times_hjr7iv$ = times_6;
  package$geom.div_2zf9fo$ = div_3;
  package$geom.div_mdd2z3$ = div_4;
  package$geom.div_hjr7iv$ = div_5;
  package$geom.multiply_xw0j6r$ = multiply_0;
  package$geom.multiply_jlynhh$ = multiply_1;
  Object.defineProperty(package$geom, 'tempMat3D', {
    get: function () {
      return tempMat3D;
    }
  });
  package$geom.translate_nur0j3$ = translate;
  package$geom.rotate_etqn9z$ = rotate;
  package$geom.scale_nur0j3$ = scale;
  package$geom.translate_xz4w49$ = translate_0;
  package$geom.rotate_ov6v7i$ = rotate_0;
  package$geom.scale_xz4w49$ = scale_0;
  package$geom.translate_yluqtt$ = translate_1;
  package$geom.rotate_rzsy52$ = rotate_1;
  package$geom.scale_yluqtt$ = scale_1;
  package$geom.translate_bjipaf$ = translate_2;
  package$geom.rotate_y1t1wm$ = rotate_2;
  package$geom.scale_bjipaf$ = scale_2;
  package$geom.setToRotation_4rdrcj$ = setToRotation;
  package$geom.setToRotation_1bmha4$ = setToRotation_0;
  package$geom.rotate_dlf6ie$ = rotate_3;
  package$geom.rotate_1bmha4$ = rotate_4;
  package$geom.rotate_4rdrcj$ = rotate_5;
  package$geom.sub_dd5jtr$ = sub;
  package$geom.add_dd5jtr$ = add_9;
  package$geom.cross_dd5jtr$ = cross;
  package$geom.setToLookAt_gaeos1$ = setToLookAt;
  package$geom.translate_mozq5f$ = translate_3;
  package$geom.rotate_odkci4$ = rotate_6;
  package$geom.scale_mozq5f$ = scale_3;
  package$geom.setTRS_rva2x3$ = setTRS;
  package$geom.getTRS_rva2x3$ = getTRS;
  package$geom.invert_3whwsx$ = invert_0;
  package$geom.setToMap_h5thxz$ = setToMap;
  package$geom.setToInterpolated_89iisx$ = setToInterpolated;
  package$geom.copyFrom_kh6thv$ = copyFrom_0;
  package$geom.toMatrix3D_g4hryh$ = toMatrix3D;
  Object.defineProperty(Orientation, 'CLOCK_WISE', {
    get: Orientation$CLOCK_WISE_getInstance
  });
  Object.defineProperty(Orientation, 'COUNTER_CLOCK_WISE', {
    get: Orientation$COUNTER_CLOCK_WISE_getInstance
  });
  Object.defineProperty(Orientation, 'COLLINEAR', {
    get: Orientation$COLLINEAR_getInstance
  });
  Object.defineProperty(Orientation, 'Companion', {
    get: Orientation$Companion_getInstance
  });
  package$geom.Orientation = Orientation;
  Object.defineProperty(IPoint, 'Companion', {
    get: IPoint$Companion_getInstance
  });
  package$geom.IPoint = IPoint;
  package$geom.invoke_ytoi08$ = invoke;
  package$geom.middle_x9n3d1$ = middle;
  package$geom.angle_x9n3d1$ = angle;
  package$geom.compare_x9n3d1$ = compare;
  package$geom.distance_x9n3d1$ = distance;
  package$geom.copyFrom_g0tluu$ = copyFrom_1;
  package$geom.add_g0tluu$ = add_10;
  package$geom.sub_g0tluu$ = sub_0;
  package$geom.plus_5jbsoh$ = plus_0;
  package$geom.minus_5jbsoh$ = minus_0;
  package$geom.times_5jbsoh$ = times_7;
  package$geom.div_5jbsoh$ = div_6;
  package$geom.times_mc4xcy$ = times_8;
  package$geom.div_mc4xcy$ = div_7;
  package$geom.dot_5jbsoh$ = dot;
  package$geom.distanceTo_1hi0wo$ = distanceTo;
  package$geom.distanceTo_5jbsoh$ = distanceTo_0;
  package$geom.angleTo_5jbsoh$ = angleTo;
  package$geom.transformed_4z5n62$ = transformed;
  package$geom.get_hikog6$ = get_0;
  package$geom.get_unit_qai0ns$ = get_unit;
  package$geom.get_length_qai0ns$ = get_length;
  package$geom.get_magnitude_qai0ns$ = get_magnitude;
  package$geom.get_normalized_qai0ns$ = get_normalized_0;
  package$geom.get_mutable_qai0ns$ = get_mutable;
  package$geom.get_immutable_qai0ns$ = get_immutable;
  package$geom.copy_qai0ns$ = copy;
  package$geom.setToTransform_szn4dk$ = setToTransform;
  package$geom.setToTransform_ot1lip$ = setToTransform_0;
  package$geom.setToAdd_60j1a5$ = setToAdd;
  package$geom.setToSub_60j1a5$ = setToSub;
  package$geom.setToMul_60j1a5$ = setToMul;
  package$geom.setToMul_u0b7eg$ = setToMul_0;
  package$geom.setToMul_ytx2uo$ = setToMul_1;
  package$geom.setToDiv_60j1a5$ = setToDiv;
  package$geom.setToDiv_u0b7eg$ = setToDiv_0;
  package$geom.setToDiv_ytx2uo$ = setToDiv_1;
  package$geom.plusAssign_g0tluu$ = plusAssign;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  package$geom.get_unit_1tb8v$ = get_unit_0;
  package$geom.setTo_j4d39r$ = setTo;
  Object.defineProperty(IPointInt, 'Companion', {
    get: IPointInt$Companion_getInstance
  });
  package$geom.IPointInt = IPointInt;
  Object.defineProperty(PointInt, 'Companion', {
    get: PointInt$Companion_getInstance
  });
  package$geom.PointInt = PointInt;
  package$geom.plus_vszzvl$ = plus_1;
  package$geom.minus_vszzvl$ = minus_1;
  package$geom.times_vszzvl$ = times_9;
  package$geom.div_vszzvl$ = div_8;
  package$geom.rem_vszzvl$ = rem;
  package$geom.asInt_1tb8v$ = asInt;
  package$geom.asDouble_9ozadc$ = asDouble;
  package$geom.get_int_1tb8v$ = get_int;
  package$geom.get_int_qai0ns$ = get_int_0;
  package$geom.get_float_2btix5$ = get_float;
  package$geom.getPolylineLength_q6fom6$ = getPolylineLength;
  package$geom.bounds_74zbxn$ = bounds;
  package$geom.getPolylineLength_65xptb$ = getPolylineLength_0;
  package$geom.bounds_9zueiu$ = bounds_0;
  package$geom.PointArea = PointArea;
  package$geom.IPointArrayList = IPointArrayList;
  package$geom.getPoint_ak05lb$ = getPoint;
  package$geom.getIPoint_ak05lb$ = getIPoint;
  package$geom.toPoints_qj0m41$ = toPoints;
  package$geom.toIPoints_qj0m41$ = toIPoints;
  package$geom.contains_lzs23j$ = contains_4;
  package$geom.contains_8lf6i7$ = contains_1;
  package$geom.contains_dsrp2b$ = contains_2;
  package$geom.contains_a23yyr$ = contains_3;
  Object.defineProperty(PointArrayList, 'Companion', {
    get: PointArrayList$Companion_getInstance
  });
  Object.defineProperty(PointArrayList, 'PointSortOpts', {
    get: PointArrayList$PointSortOpts_getInstance
  });
  package$geom.PointArrayList = PointArrayList;
  package$geom.add_dyo8bs$ = add_11;
  package$geom.add_ntq88h$ = add_12;
  package$geom.add_oshxfc$ = add_13;
  package$geom.setX_mx0hxg$ = setX;
  package$geom.setY_mx0hxg$ = setY;
  package$geom.setXY_kl8v7y$ = setXY;
  package$geom.setX_xr98cf$ = setX_0;
  package$geom.setY_xr98cf$ = setY_0;
  package$geom.setXY_1j4lei$ = setXY_0;
  package$geom.setX_w6qyek$ = setX_1;
  package$geom.setY_w6qyek$ = setY_1;
  package$geom.setXY_or09tm$ = setXY_1;
  package$geom.IPointIntArrayList = IPointIntArrayList;
  Object.defineProperty(PointIntArrayList, 'Companion', {
    get: PointIntArrayList$Companion_getInstance
  });
  Object.defineProperty(PointIntArrayList, 'PointSortOpts', {
    get: PointIntArrayList$PointSortOpts_getInstance
  });
  package$geom.PointIntArrayList = PointIntArrayList;
  package$geom.add_jrp4jz$ = add_14;
  package$geom.add_6nv8m$ = add_15;
  package$geom.getPoint_8mx7oy$ = getPoint_0;
  package$geom.getIPoint_8mx7oy$ = getIPoint_0;
  package$geom.toPoints_y8y4a8$ = toPoints_0;
  package$geom.toIPoints_y8y4a8$ = toIPoints_0;
  package$geom.contains_njkhek$ = contains_5;
  Object.defineProperty(EulerRotation, 'Companion', {
    get: EulerRotation$Companion_getInstance
  });
  package$geom.EulerRotation = EulerRotation;
  Object.defineProperty(Quaternion, 'Companion', {
    get: Quaternion$Companion_getInstance
  });
  package$geom.Quaternion = Quaternion;
  package$geom.Quaternion_1ugm5o$ = Quaternion_0;
  package$geom.Quaternion_7b5o5w$ = Quaternion_1;
  package$geom.Quaternion_tjonv8$ = Quaternion_2;
  package$geom.quaternionToEuler_6m5xkn$ = quaternionToEuler_3;
  package$geom.setQuaternion_kwl54s$ = setQuaternion;
  package$geom.setQuaternion_tp2mho$ = setQuaternion_0;
  package$geom.setQuaternion_221wto$ = setQuaternion_1;
  package$geom.setQuaternion_mq666s$ = setQuaternion_2;
  package$geom.setQuaternion_7rcat6$ = setQuaternion_3;
  package$geom.setTo_h3kiav$ = setTo_0;
  package$geom.setTo_n2uxun$ = setTo_1;
  package$geom.setEuler_ku1bf4$ = setEuler;
  package$geom.setEuler_u932wa$ = setEuler_0;
  package$geom.setTo_u932wa$ = setTo_2;
  package$geom.setTo_u3d1mb$ = setTo_3;
  package$geom.setTo_qvsdor$ = setTo_4;
  package$geom.setTo_xxrgjv$ = setTo_5;
  package$geom.setTo_3rltyn$ = setTo_6;
  package$geom.copyFrom_3rltyn$ = copyFrom_2;
  package$geom.toMatrix_a6pije$ = toMatrix;
  package$geom.toMatrix_xk3rp9$ = toMatrix_0;
  package$geom.eulerToQuaternion_tjuywz$ = eulerToQuaternion;
  package$geom.quaternionToEuler_f1nx4p$ = quaternionToEuler;
  package$geom.quaternionToEuler_hsntc1$ = quaternionToEuler_0;
  package$geom.quaternionToEuler_37m6mh$ = quaternionToEuler_1;
  package$geom.quaternionToEuler_4surfl$ = quaternionToEuler_2;
  package$geom.eulerToQuaternion_y9cdft$ = eulerToQuaternion_0;
  package$geom.quaternionToMatrix_7r89s0$ = quaternionToMatrix;
  package$geom.setFromRotationMatrix_xk3rp9$ = setFromRotationMatrix;
  package$geom.unaryMinus_utjgox$ = unaryMinus_0;
  package$geom.plus_3rltyn$ = plus_2;
  package$geom.minus_3rltyn$ = minus_2;
  package$geom.times_ns0rfh$ = times_10;
  package$geom.times_2lfdnl$ = times_11;
  package$geom.negate_utjgox$ = negate;
  package$geom.setToFunc_zhw5r7$ = setToFunc;
  package$geom.setToFunc_6cu3s$ = setToFunc_0;
  package$geom.setToSlerp_vyz9gj$ = setToSlerp;
  package$geom.setToNlerp_vyz9gj$ = setToNlerp;
  package$geom.setToInterpolated_vyz9gj$ = setToInterpolated_0;
  package$geom.Rectangle = Rectangle;
  Object.defineProperty(IRectangle, 'Companion', {
    get: IRectangle$Companion_getInstance
  });
  package$geom.IRectangle = IRectangle;
  package$geom.get_x_f4ja93$ = get_x_0;
  package$geom.get_y_f4ja93$ = get_y_0;
  package$geom.get_width_f4ja93$ = get_width;
  package$geom.get_height_f4ja93$ = get_height;
  package$geom.get_left_f4ja93$ = get_left;
  package$geom.get_top_f4ja93$ = get_top;
  package$geom.get_right_f4ja93$ = get_right;
  package$geom.get_bottom_f4ja93$ = get_bottom;
  package$geom.setBounds_dpu63g$ = setBounds;
  Object.defineProperty(Rectangle, 'Companion', {
    get: Rectangle$Companion_getInstance
  });
  package$geom.contains_ux05ev$ = contains_6;
  package$geom.setTo_dpu63g$ = setTo_7;
  package$geom.times_hnwsli$ = times_12;
  package$geom.div_hnwsli$ = div_9;
  package$geom.contains_4w54kw$ = contains_7;
  package$geom.displaced_4w54kw$ = displaced;
  package$geom.displace_4w54kw$ = displace;
  package$geom.inflate_4w54kw$ = inflate;
  package$geom.RectangleInt = RectangleInt;
  Object.defineProperty(IRectangleInt, 'Companion', {
    get: IRectangleInt$Companion_getInstance
  });
  package$geom.IRectangleInt = IRectangleInt;
  package$geom.get_left_1odyom$ = get_left_0;
  package$geom.get_top_1odyom$ = get_top_0;
  package$geom.get_right_1odyom$ = get_right_0;
  package$geom.get_bottom_1odyom$ = get_bottom_0;
  Object.defineProperty(RectangleInt, 'Companion', {
    get: RectangleInt$Companion_getInstance
  });
  package$geom.setTo_yrmkr5$ = setTo_8;
  package$geom.setTo_woi95f$ = setTo_9;
  package$geom.setPosition_ea3osz$ = setPosition;
  package$geom.setSize_ea3osz$ = setSize;
  package$geom.setBoundsTo_woi95f$ = setBoundsTo;
  package$geom.contains_k42lqg$ = contains_8;
  package$geom.anchoredIn_m32xe9$ = anchoredIn;
  package$geom.getAnchorPosition_226irk$ = getAnchorPosition;
  package$geom.asInt_2epnw0$ = asInt_0;
  package$geom.asDouble_g438v3$ = asDouble_0;
  package$geom.get_int_f4ja93$ = get_int_1;
  package$geom.get_float_1odyom$ = get_float_0;
  package$geom.anchor_sg85ae$ = anchor;
  package$geom.anchor_f1v9p2$ = anchor_0;
  package$geom.get_center_1odyom$ = get_center;
  package$geom.bounds_kobt9m$ = bounds_1;
  Object.defineProperty(ScaleMode, 'Companion', {
    get: ScaleMode$Companion_getInstance
  });
  package$geom.ScaleMode = ScaleMode;
  package$geom.applyScaleMode_i891p8$ = applyScaleMode;
  package$geom.applyScaleMode_tngszv$ = applyScaleMode_0;
  package$geom.applyScaleMode_tsh6sx$ = applyScaleMode_1;
  package$geom.applyScaleMode_lphnow$ = applyScaleMode_2;
  package$geom.applyScaleMode_ffnjtp$ = applyScaleMode_3;
  package$geom.fitTo_s3ub6n$ = fitTo;
  package$geom.fitTo_ovp3m6$ = fitTo_0;
  Object.defineProperty(ISize, 'Companion', {
    get: ISize$Companion_getInstance
  });
  package$geom.ISize = ISize;
  Object.defineProperty(Size, 'Companion', {
    get: Size$Companion_getInstance
  });
  package$geom.Size = Size;
  package$geom.setTo_ykl03i$ = setTo_10;
  package$geom.setTo_5otp8c$ = setTo_11;
  package$geom.setToScaled_n266aa$ = setToScaled;
  package$geom.setToScaled_ykl03i$ = setToScaled_0;
  package$geom.get_area_3ow1l7$ = get_area;
  package$geom.get_perimeter_3ow1l7$ = get_perimeter;
  package$geom.get_min_3ow1l7$ = get_min;
  package$geom.get_max_3ow1l7$ = get_max;
  package$geom.ISizeInt = ISizeInt;
  Object.defineProperty(SizeInt, 'Companion', {
    get: SizeInt$Companion_getInstance
  });
  package$geom.SizeInt = SizeInt;
  package$geom.setTo_94azt1$ = setTo_12;
  package$geom.setTo_d3hfql$ = setTo_13;
  package$geom.setToScaled_a4l7hd$ = setToScaled_1;
  package$geom.setToScaled_39ro3z$ = setToScaled_2;
  package$geom.anchoredIn_f19he4$ = anchoredIn_0;
  package$geom.contains_d3hfql$ = contains_9;
  package$geom.times_h2z8p9$ = times_13;
  package$geom.times_jk1jeb$ = times_14;
  package$geom.times_lwl45h$ = times_15;
  package$geom.getAnchorPosition_p0zf17$ = getAnchorPosition_0;
  package$geom.asInt_4ml3ni$ = asInt_1;
  package$geom.asDouble_gb1s4v$ = asDouble_1;
  package$geom.Sizeable = Sizeable;
  Object.defineProperty(Vector3D, 'Companion', {
    get: Vector3D$Companion_getInstance
  });
  package$geom.Vector3D = Vector3D;
  package$geom.IntVector3 = IntVector3;
  package$geom.asIntVector3D_p2sugb$ = asIntVector3D;
  package$geom.setToInterpolated_wtbb0t$ = setToInterpolated_1;
  package$geom.scale_zd61ja$ = scale_4;
  package$geom.scale_1d8ez1$ = scale_5;
  package$geom.scale_vruifh$ = scale_6;
  package$geom.scale_qy8mz9$ = scale_7;
  package$geom.setTo_2nu8xt$ = setTo_14;
  Bezier.Quad = Bezier$Quad;
  Bezier.Cubic = Bezier$Cubic;
  Bezier.Temp = Bezier$Temp;
  Object.defineProperty(Bezier, 'Companion', {
    get: Bezier$Companion_getInstance
  });
  var package$bezier = package$geom.bezier || (package$geom.bezier = {});
  package$bezier.Bezier = Bezier;
  package$bezier.length_6m6tnd$ = length;
  Object.defineProperty(package$bezier, 'SegmentEmitter', {
    get: SegmentEmitter_getInstance
  });
  BinPacker.Algo = BinPacker$Algo;
  BinPacker.Result = BinPacker$Result;
  Object.defineProperty(BinPacker, 'Companion', {
    get: BinPacker$Companion_getInstance
  });
  var package$binpack = package$geom.binpack || (package$geom.binpack = {});
  package$binpack.BinPacker = BinPacker;
  package$binpack.MaxRects = MaxRects;
  var package$ds = package$geom.ds || (package$geom.ds = {});
  package$ds.get_hzg0an$ = get_1;
  package$ds.set_dcv4jd$ = set;
  package$ds.tryGet_hzg0an$ = tryGet;
  package$ds.trySet_dcv4jd$ = trySet;
  package$ds.get_fnf2ik$ = get_2;
  package$ds.set_vtn6wy$ = set_0;
  package$ds.tryGet_fnf2ik$ = tryGet_0;
  package$ds.trySet_vtn6wy$ = trySet_0;
  var package$range = package$geom.range || (package$geom.range = {});
  package$range.OpenRange = OpenRange;
  package$range.contains_rnjrfz$ = contains_10;
  var package$shape = package$geom.shape || (package$geom.shape = {});
  Object.defineProperty(package$shape, 'HorizontalLine', {
    get: HorizontalLine_getInstance
  });
  Shape2d.WithArea = Shape2d$WithArea;
  Object.defineProperty(Shape2d, 'Empty', {
    get: Shape2d$Empty_getInstance
  });
  Object.defineProperty(Shape2d$Line, 'Companion', {
    get: Shape2d$Line$Companion_getInstance
  });
  Shape2d.Line = Shape2d$Line;
  Object.defineProperty(Shape2d$Circle, 'Companion', {
    get: Shape2d$Circle$Companion_getInstance
  });
  Shape2d.Circle = Shape2d$Circle;
  Object.defineProperty(Shape2d$Rectangle, 'Companion', {
    get: Shape2d$Rectangle$Companion_getInstance
  });
  Shape2d.Rectangle = Shape2d$Rectangle;
  Shape2d.Polygon = Shape2d$Polygon;
  Shape2d.Polyline = Shape2d$Polyline;
  Shape2d.Complex = Shape2d$Complex;
  package$shape.Shape2d = Shape2d;
  package$shape.get_totalVertices_ahnv0i$ = get_totalVertices;
  package$shape.add_b9ploj$ = add_16;
  package$shape.get_bounds_ol95vd$ = get_bounds;
  package$shape.toShape_f4ja93$ = toShape;
  package$shape.emitPoints_rkjm2x$ = emitPoints;
  package$shape.approximateCurve_nle32h$ = approximateCurve;
  package$shape.emitPoints2_i9jvg2$ = emitPoints2;
  package$shape.getPoints2_51mzb1$ = getPoints2;
  package$shape.buildPath_rugifr$ = buildPath;
  var package$vector = package$geom.vector || (package$geom.vector = {});
  package$vector.Winding = Winding;
  package$shape.buildPath_gbrr1q$ = buildPath_0;
  package$shape.toRectangleOrNull_qj0m41$ = toRectangleOrNull;
  package$shape.toShape2d_4i78x6$ = toShape2d;
  package$shape.toShape2d_p4hkkn$ = toShape2d_0;
  package$shape.toPathList_jvwkvo$ = toPathList;
  package$shape.getAllPoints_jeazgw$ = getAllPoints;
  package$shape.toPolygon_ol95vd$ = toPolygon;
  package$shape.containsPoint_5swqtx$ = containsPoint;
  Object.defineProperty(Edge, 'Companion', {
    get: Edge$Companion_getInstance
  });
  var package$triangle = package$geom.triangle || (package$geom.triangle = {});
  package$triangle.Edge = Edge;
  Triangle.Base = Triangle$Base;
  Object.defineProperty(Triangle, 'Companion', {
    get: Triangle$Companion_getInstance
  });
  package$triangle.Triangle = Triangle;
  package$triangle.point_dckz4d$ = point;
  package$triangle.containsPoint_uoyjew$ = containsPoint_0;
  package$triangle.containsEdge_nzv7z2$ = containsEdge;
  package$triangle.containsEdgePoints_3gwwv9$ = containsEdgePoints;
  package$triangle.pointInsideTriangle_uoyjew$ = pointInsideTriangle;
  package$triangle.getPointIndexOffsetNoThrow_rn9b7c$ = getPointIndexOffsetNoThrow;
  package$triangle.getPointIndexOffset_stcegq$ = getPointIndexOffset;
  package$triangle.pointCW_uoyjew$ = pointCW;
  package$triangle.pointCCW_uoyjew$ = pointCCW;
  package$triangle.oppositePoint_ogrc4q$ = oppositePoint;
  package$triangle.Triangle_yyklkn$ = Triangle_0;
  package$triangle.get_area_1ts1sh$ = get_area_0;
  package$triangle.index_uoyjew$ = index;
  package$triangle.edgeIndex_3gwwv9$ = edgeIndex;
  var package$internal = package$korma.internal || (package$korma.internal = {});
  package$internal.floorCeil_14dthe$ = floorCeil;
  Object.defineProperty(Edge_0, 'Companion', {
    get: Edge$Companion_getInstance_0
  });
  package$vector.Edge = Edge_0;
  Object.defineProperty(LineCap, 'BUTT', {
    get: LineCap$BUTT_getInstance
  });
  Object.defineProperty(LineCap, 'SQUARE', {
    get: LineCap$SQUARE_getInstance
  });
  Object.defineProperty(LineCap, 'ROUND', {
    get: LineCap$ROUND_getInstance
  });
  package$vector.LineCap = LineCap;
  Object.defineProperty(LineJoin, 'BEVEL', {
    get: LineJoin$BEVEL_getInstance
  });
  Object.defineProperty(LineJoin, 'ROUND', {
    get: LineJoin$ROUND_getInstance
  });
  Object.defineProperty(LineJoin, 'MITER', {
    get: LineJoin$MITER_getInstance
  });
  Object.defineProperty(LineJoin, 'Companion', {
    get: LineJoin$Companion_getInstance
  });
  package$vector.LineJoin = LineJoin;
  Object.defineProperty(package$vector, 'RAST_FIXED_SCALE', {
    get: function () {
      return RAST_FIXED_SCALE;
    }
  });
  Object.defineProperty(package$vector, 'RAST_FIXED_SCALE_HALF', {
    get: function () {
      return RAST_FIXED_SCALE_HALF;
    }
  });
  Object.defineProperty(package$vector, 'RAST_SMALL_BUCKET_SIZE', {
    get: function () {
      return RAST_SMALL_BUCKET_SIZE;
    }
  });
  Object.defineProperty(package$vector, 'RAST_MEDIUM_BUCKET_SIZE', {
    get: function () {
      return RAST_MEDIUM_BUCKET_SIZE;
    }
  });
  Object.defineProperty(package$vector, 'RAST_BIG_BUCKET_SIZE', {
    get: function () {
      return RAST_BIG_BUCKET_SIZE;
    }
  });
  package$vector.RastScale = RastScale;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  PolygonScanline.Bucket = PolygonScanline$Bucket;
  PolygonScanline.Buckets = PolygonScanline$Buckets;
  PolygonScanline.AllBuckets = PolygonScanline$AllBuckets;
  package$vector.PolygonScanline = PolygonScanline;
  Object.defineProperty(StrokeToFill$EdgePoint, 'A', {
    get: StrokeToFill$EdgePoint$A_getInstance
  });
  Object.defineProperty(StrokeToFill$EdgePoint, 'B', {
    get: StrokeToFill$EdgePoint$B_getInstance
  });
  StrokeToFill.EdgePoint = StrokeToFill$EdgePoint;
  package$vector.StrokeToFill = StrokeToFill;
  package$vector.strokeToFill_yx328d$ = strokeToFill;
  package$vector.VectorBuilder = VectorBuilder;
  package$vector.isEmpty_6jcdf2$ = isEmpty;
  package$vector.isNotEmpty_6jcdf2$ = isNotEmpty;
  package$vector.arcTo_iaoljg$ = arcTo;
  package$vector.rect_clsz36$ = rect;
  package$vector.rectHole_clsz36$ = rectHole;
  package$vector.roundRect_eslsqu$ = roundRect;
  package$vector.arc_iaoljg$ = arc;
  package$vector.circle_m5r0a8$ = circle;
  package$vector.ellipse_clsz36$ = ellipse;
  package$vector.moveTo_sdnpzm$ = moveTo;
  package$vector.lineTo_sdnpzm$ = lineTo;
  package$vector.quadTo_vgy8la$ = quadTo;
  package$vector.cubicTo_k11ne2$ = cubicTo;
  package$vector.moveToH_ww6st0$ = moveToH;
  package$vector.rMoveToH_ww6st0$ = rMoveToH;
  package$vector.moveToV_ww6st0$ = moveToV;
  package$vector.rMoveToV_ww6st0$ = rMoveToV;
  package$vector.lineToH_ww6st0$ = lineToH;
  package$vector.rLineToH_ww6st0$ = rLineToH;
  package$vector.lineToV_ww6st0$ = lineToV;
  package$vector.rLineToV_ww6st0$ = rLineToV;
  package$vector.rMoveTo_b4nog2$ = rMoveTo;
  package$vector.rLineTo_b4nog2$ = rLineTo;
  package$vector.rQuadTo_clsz36$ = rQuadTo;
  package$vector.rCubicTo_eslsqu$ = rCubicTo;
  package$vector.moveTo_29p75a$ = moveTo_0;
  package$vector.lineTo_29p75a$ = lineTo_0;
  package$vector.quadTo_3tbhqa$ = quadTo_0;
  package$vector.cubicTo_3pnw5y$ = cubicTo_0;
  package$vector.moveToH_s2kxcs$ = moveToH_0;
  package$vector.rMoveToH_s2kxcs$ = rMoveToH_0;
  package$vector.moveToV_s2kxcs$ = moveToV_0;
  package$vector.rMoveToV_s2kxcs$ = rMoveToV_0;
  package$vector.lineToH_s2kxcs$ = lineToH_0;
  package$vector.rLineToH_s2kxcs$ = rLineToH_0;
  package$vector.lineToV_s2kxcs$ = lineToV_0;
  package$vector.rLineToV_s2kxcs$ = rLineToV_0;
  package$vector.rMoveTo_29p75a$ = rMoveTo_0;
  package$vector.rLineTo_29p75a$ = rLineTo_0;
  package$vector.rQuadTo_3tbhqa$ = rQuadTo_0;
  package$vector.rCubicTo_3pnw5y$ = rCubicTo_0;
  package$vector.arcTo_p44rec$ = arcTo_0;
  package$vector.line_clsz36$ = line;
  package$vector.quad_eslsqu$ = quad;
  package$vector.cubic_2tf5d6$ = cubic;
  package$vector.line_vgy8la$ = line_0;
  package$vector.quad_k11ne2$ = quad_0;
  package$vector.cubic_etnj2u$ = cubic_0;
  package$vector.line_3tbhqa$ = line_1;
  package$vector.quad_3pnw5y$ = quad_1;
  package$vector.cubic_obn7oq$ = cubic_1;
  package$vector.rect_3tbhqa$ = rect_0;
  package$vector.rectHole_3tbhqa$ = rectHole_0;
  package$vector.roundRect_3pnw5y$ = roundRect_0;
  package$vector.arc_p44rec$ = arc_0;
  package$vector.circle_2ne5a0$ = circle_0;
  package$vector.ellipse_3tbhqa$ = ellipse_0;
  package$vector.rCubicTo_60kr3z$ = rCubicTo_1;
  package$vector.rQuadTo_se77a3$ = rQuadTo_1;
  package$vector.rLineTo_631sdz$ = rLineTo_1;
  package$vector.rMoveTo_631sdz$ = rMoveTo_1;
  package$vector.rMoveToH_jaqvad$ = rMoveToH_1;
  package$vector.rMoveToV_jaqvad$ = rMoveToV_1;
  package$vector.rLineToH_jaqvad$ = rLineToH_1;
  package$vector.rLineToV_jaqvad$ = rLineToV_1;
  package$vector.rCubicTo_iayga9$ = rCubicTo_2;
  package$vector.rQuadTo_y3e1yz$ = rQuadTo_2;
  package$vector.rLineTo_prgkpz$ = rLineTo_2;
  package$vector.rMoveTo_prgkpz$ = rMoveTo_2;
  package$vector.rMoveToH_xh636r$ = rMoveToH_2;
  package$vector.rMoveToV_xh636r$ = rMoveToV_2;
  package$vector.rLineToH_xh636r$ = rLineToH_2;
  package$vector.rLineToV_xh636r$ = rLineToV_2;
  package$vector.transformed_t0plst$ = transformed_0;
  package$vector.transformed_cwi1wc$ = transformed_1;
  Object.defineProperty(VectorPath, 'Companion', {
    get: VectorPath$Companion_getInstance
  });
  VectorPath.Visitor = VectorPath$Visitor;
  VectorPath.Stats = VectorPath$Stats;
  Object.defineProperty(VectorPath, 'Command', {
    get: VectorPath$Command_getInstance
  });
  package$vector.VectorPath = VectorPath;
  package$vector.write_kaevin$ = write;
  package$vector.containsPoint_d3k4rk$ = containsPoint_1;
  package$vector.containsPoint_qoe3kb$ = containsPoint_2;
  package$vector.containsPoint_kh22o$ = containsPoint_3;
  package$vector.containsPoint_q5a48b$ = containsPoint_4;
  package$vector.containsPoint_ixem0k$ = containsPoint_5;
  package$vector.containsPoint_x8hp6x$ = containsPoint_6;
  package$vector.numberOfIntersections_ixem0k$ = numberOfIntersections;
  package$vector.add_c5632l$ = add_17;
  package$vector.add_1ik72i$ = add_18;
  package$vector.applyTransform_9tm6oz$ = applyTransform;
  Object.defineProperty(Winding, 'EVEN_ODD', {
    get: Winding$EVEN_ODD_getInstance
  });
  Object.defineProperty(Winding, 'NON_ZERO', {
    get: Winding$NON_ZERO_getInstance
  });
  package$internal.get_niceStr_umcohv$ = get_niceStr;
  package$internal.get_niceStr_1zw1ma$ = get_niceStr_0;
  package$internal.umod_3ahkds$ = umod;
  Object.defineProperty(package$internal, 'KORMA_VERSION_8be2vx$', {
    get: function () {
      return KORMA_VERSION;
    }
  });
  Object.defineProperty(Easing, 'Companion', {
    get: Easing$Companion_getInstance
  });
  var package$interpolation = package$korma.interpolation || (package$korma.interpolation = {});
  package$interpolation.Easing = Easing;
  package$interpolation.Interpolable = Interpolable;
  package$interpolation.MutableInterpolable = MutableInterpolable;
  package$interpolation.interpolateAny_i7pzeh$ = interpolateAny;
  package$interpolation.interpolate_mwqh4r$ = interpolate_0;
  package$interpolation.interpolate_nig4hr$ = interpolate_1;
  package$interpolation.interpolate_i767ff$ = interpolate_2;
  package$interpolation.interpolate_9z28t1$ = interpolate_3;
  package$interpolation.interpolate_jtloyj$ = interpolate_4;
  package$interpolation.interpolate_k3qle4$ = interpolate_5;
  var package$math = package$korma.math || (package$korma.math = {});
  package$math.minOrElse_taaqy$ = minOrElse;
  package$math.maxOrElse_taaqy$ = maxOrElse;
  package$math.clamp_ekzx8g$ = clamp;
  package$math.clamp_e4yvb3$ = clamp_0;
  package$math.clamp_nig4hr$ = clamp_1;
  package$math.clamp_wj6e7o$ = clamp_2;
  package$math.betweenInclusive_nig4hr$ = betweenInclusive;
  package$math.clampUByte_s8ev3n$ = clampUByte;
  package$math.almostEquals_dleff0$ = almostEquals;
  package$math.almostZero_mx4ult$ = almostZero;
  package$math.almostEquals_lu1900$ = almostEquals_0;
  package$math.almostZero_14dthe$ = almostZero_0;
  package$math.roundDecimalPlaces_j6vyb1$ = roundDecimalPlaces;
  package$math.isEquivalent_yvo9jy$ = isEquivalent;
  package$math.smoothstep_nig4hr$ = smoothstep;
  package$math.convertRange_legt9$ = convertRange;
  package$math.log_vux9f0$ = log_0;
  package$math.ln_za3lpa$ = ln;
  package$math.log2_za3lpa$ = log2;
  package$math.log10_za3lpa$ = log10;
  package$math.signNonZeroM1_14dthe$ = signNonZeroM1;
  package$math.signNonZeroP1_14dthe$ = signNonZeroP1;
  package$math.isAlmostZero_yrwdxr$ = isAlmostZero;
  package$math.isNanOrInfinite_yrwdxr$ = isNanOrInfinite;
  package$math.isAlmostZero_81szk$ = isAlmostZero_0;
  package$math.isNanOrInfinite_81szk$ = isNanOrInfinite_0;
  package$math.nextMultipleOf_dqglrj$ = nextMultipleOf;
  package$math.nextMultipleOf_2p08ub$ = nextMultipleOf_0;
  package$math.prevMultipleOf_dqglrj$ = prevMultipleOf;
  package$math.prevMultipleOf_2p08ub$ = prevMultipleOf_0;
  package$math.isMultipleOf_dqglrj$ = isMultipleOf;
  package$math.isMultipleOf_2p08ub$ = isMultipleOf_0;
  var package$random = package$korma.random || (package$korma.random = {});
  package$random.ints_j8mu42$ = ints;
  package$random.ints_80vof6$ = ints_0;
  package$random.ints_ixthlz$ = ints_1;
  package$random.doubles_j8mu42$ = doubles;
  package$random.floats_j8mu42$ = floats;
  package$random.random_hhb8gh$ = random;
  package$random.randomWithWeights_sbgfw8$ = randomWithWeights;
  package$random.get_18cute$ = get_3;
  package$random.get_yeabpe$ = get_4;
  package$random.get_80vof6$ = get_5;
  package$random.get_ixthlz$ = get_6;
  package$random.get_lq3jag$ = get_7;
  package$random.get_l9mson$ = get_8;
  package$random.get_aagopl$ = get_9;
  package$random.get_ui9pu9$ = get_10;
  package$random.setToRandom_v4ia3z$ = setToRandom;
  package$random.get_inmg5o$ = get_11;
  package$random.weighted_tw7v6x$ = weighted;
  package$random.weighted_2v5nst$ = weighted_0;
  package$random.shuffledWeighted_tw7v6x$ = shuffledWeighted;
  package$random.shuffledWeighted_63ckpe$ = shuffledWeighted_0;
  package$random.shuffledWeighted_2v5nst$ = shuffledWeighted_1;
  Object.defineProperty(RandomWeights, 'Companion', {
    get: RandomWeights$Companion_getInstance
  });
  package$random.RandomWeights_init_1627mc$ = RandomWeights_init;
  package$random.RandomWeights_init_vago78$ = RandomWeights_init_0;
  package$random.RandomWeights = RandomWeights;
  var package$segment = package$korma.segment || (package$korma.segment = {});
  package$segment.IntSegmentSet = IntSegmentSet;
  package$segment.genericBinarySearchLeft_51hkjm$ = genericBinarySearchLeft;
  package$segment.genericBinarySearchRight_51hkjm$ = genericBinarySearchRight;
  Bezier$Quad.prototype.getBounds_2da8yn$ = Bezier.prototype.getBounds_2da8yn$;
  Bezier$Quad.prototype.calc_iwfqvm$ = Bezier.prototype.calc_iwfqvm$;
  Bezier$Cubic.prototype.getBounds_2da8yn$ = Bezier.prototype.getBounds_2da8yn$;
  Bezier$Cubic.prototype.calc_iwfqvm$ = Bezier.prototype.calc_iwfqvm$;
  tempMat3D = new Matrix3D();
  tempVec1 = new Vector3D();
  tempVec2 = new Vector3D();
  tempVec3 = new Vector3D();
  tempMat1 = new Matrix3D();
  tempQuat = new Quaternion();
  tempMat1_0 = new Matrix3D();
  tempMat2 = new Matrix3D();
  tleft = new Quaternion();
  tright = new Quaternion();
  RAST_FIXED_SCALE = 20;
  RAST_FIXED_SCALE_HALF = 0;
  RAST_SMALL_BUCKET_SIZE = 80;
  RAST_MEDIUM_BUCKET_SIZE = 320;
  RAST_BIG_BUCKET_SIZE = 1280;
  KORMA_VERSION = '1.11.16';
  Kotlin.defineModule('korma-root-korma', _);
  return _;
}));

//# sourceMappingURL=korma-root-korma.js.map
