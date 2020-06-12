(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge-root-korge', 'korim-root-korim', 'korma-root-korma', 'korio-root-korio', 'klock-root-klock'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge-root-korge'), require('korim-root-korim'), require('korma-root-korma'), require('korio-root-korio'), require('klock-root-klock'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-jam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-jam'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-jam'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-jam'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korge-jam'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korge-jam'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korge-jam'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korge-jam'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korge-jam'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korge-jam'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korge-jam'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korge-jam'.");
    }root['korge-jam'] = factory(typeof this['korge-jam'] === 'undefined' ? {} : this['korge-jam'], kotlin, this['korge-root-korge'], this['korim-root-korim'], this['korma-root-korma'], this['korio-root-korio'], this['klock-root-klock']);
  }
}(this, function (_, Kotlin, $module$korge_root_korge, $module$korim_root_korim, $module$korma_root_korma, $module$korio_root_korio, $module$klock_root_klock) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var get_degrees = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_s8ev3n$;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var anchor = $module$korge_root_korge.com.soywiz.korge.view.anchor_11wmr3$;
  var scale = $module$korge_root_korge.com.soywiz.korge.view.scale_2cbtc5$;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var Unit = Kotlin.kotlin.Unit;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Easing = $module$korma_root_korma.com.soywiz.korma.interpolation.Easing;
  var tween = $module$korge_root_korge.com.soywiz.korge.tween.tween_t8t7it$;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var _interpolateAngle = $module$korge_root_korge.com.soywiz.korge.tween._interpolateAngle_a0zjys$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge_root_korge.com.soywiz.korge.tween.V2;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  function image$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda(closure$maxDegrees) {
    return function ($receiver) {
      $receiver.rotation = closure$maxDegrees;
      anchor($receiver, 0.5, 0.5);
      scale($receiver, 0.8);
      position($receiver, 256, 256);
      return Unit;
    };
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$minDegrees = void 0;
    this.local$maxDegrees = void 0;
    this.local$image = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$minDegrees = get_degrees(-16);
            this.local$maxDegrees = get_degrees(16);
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('korge.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            main$lambda$lambda(this.local$maxDegrees)($receiver_0);
            this.local$image = $receiver_0;
            this.state_0 = 3;
            continue;
          case 3:
            var $receiver = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$image));
            this.state_0 = 4;
            this.result_0 = tween(this.local$image, [new V2_init($receiver, $receiver.get(), this.local$minDegrees, getCallableRef('_interpolateAngle', function (ratio_0, l_0, r_0) {
              return _interpolateAngle(ratio_0, l_0, r_0);
            }), false)], TimeSpan.Companion.fromSeconds_14dthe$(1), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_1 = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$image));
            this.state_0 = 5;
            this.result_0 = tween(this.local$image, [new V2_init($receiver_1, $receiver_1.get(), this.local$maxDegrees, getCallableRef('_interpolateAngle', function (ratio_0, l_0, r_0) {
              return _interpolateAngle(ratio_0, l_0, r_0);
            }), false)], TimeSpan.Companion.fromSeconds_14dthe$(1), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 3;
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
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    return korge.Korge.invoke_hyfg37$(void 0, 512, 512, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, color.Colors.get_61zpoe$('#2b2b2b'), void 0, void 0, void 0, void 0, void 0, void 0, main$lambda, continuation);
  }
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  _.main = main;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('korge-jam', _);
  return _;
}));

//# sourceMappingURL=korge-jam.js.map
