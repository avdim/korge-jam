(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'klock-root-klock', 'kds-root-kds', 'korio-root-korio', 'kmem-root-kmem', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('klock-root-klock'), require('kds-root-kds'), require('korio-root-korio'), require('kmem-root-kmem'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korau-root-korau'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korau-root-korau'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korau-root-korau'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korau-root-korau'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korau-root-korau'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korau-root-korau'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korau-root-korau'.");
    }root['korau-root-korau'] = factory(typeof this['korau-root-korau'] === 'undefined' ? {} : this['korau-root-korau'], kotlin, this['klock-root-klock'], this['kds-root-kds'], this['korio-root-korio'], this['kmem-root-kmem'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$klock_root_klock, $module$kds_root_kds, $module$korio_root_korio, $module$kmem_root_kmem, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Exception = Kotlin.kotlin.Exception;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var openAsync = $module$korio_root_korio.com.soywiz.korio.stream.openAsync_m1iwyb$;
  var unsupported = $module$korio_root_korio.com.soywiz.korio.lang.unsupported;
  var toAsync = $module$korio_root_korio.com.soywiz.korio.stream.toAsync_ucmi9i$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var printStackTrace = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var PathInfo = $module$korio_root_korio.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_root_korio.com.soywiz.korio.file.get_extensionLC_a72sjq$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var ByteArrayBuilder_init = $module$korio_root_korio.$$importsForInline$$['kmem-root-kmem'].com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var MemorySyncStream = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_i9anm0$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var VfsOpenMode = $module$korio_root_korio.com.soywiz.korio.file.VfsOpenMode;
  var Any = Object;
  var binarySearch = $module$kds_root_kds.com.soywiz.kds.binarySearch_gadt63$;
  var DoubleArrayList = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList;
  var Unit = Kotlin.kotlin.Unit;
  var L0 = Kotlin.Long.ZERO;
  var readStream = $module$korio_root_korio.com.soywiz.korio.stream.readStream_50x9bh$;
  var readBytesUpTo = $module$korio_root_korio.com.soywiz.korio.stream.readBytesUpTo_a0g59h$;
  var UByteArrayInt = $module$kmem_root_kmem.com.soywiz.kmem.UByteArrayInt;
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var openSync = $module$korio_root_korio.com.soywiz.korio.stream.openSync_m1iwyb$;
  var readString = $module$korio_root_korio.com.soywiz.korio.stream.readString_6ey4ts$;
  var equals = Kotlin.equals;
  var lang = $module$korio_root_korio.com.soywiz.korio.lang;
  var readString_0 = $module$korio_root_korio.com.soywiz.korio.stream.readString_4xit9n$;
  var readU8 = $module$korio_root_korio.com.soywiz.korio.stream.readU8_yjldv$;
  var extract = $module$kmem_root_kmem.com.soywiz.kmem.extract_dqglrj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var extract_0 = $module$kmem_root_kmem.com.soywiz.kmem.extract_e4yvb3$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var format = $module$korio_root_korio.com.soywiz.korio.lang.format_e33kwl$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var klock = $module$klock_root_klock.com.soywiz.klock;
  var TimedResult_init = $module$klock_root_klock.com.soywiz.klock.TimedResult;
  var numberToDouble = Kotlin.numberToDouble;
  var hasAvailable = $module$korio_root_korio.com.soywiz.korio.stream.hasAvailable_g5ykjz$;
  var readS8 = $module$korio_root_korio.com.soywiz.korio.stream.readS8_yjldv$;
  var readS64LE = $module$korio_root_korio.com.soywiz.korio.stream.readS64LE_yjldv$;
  var readS32LE = $module$korio_root_korio.com.soywiz.korio.stream.readS32LE_yjldv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var invalidOp = $module$korio_root_korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var MemorySyncStream_0 = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var readU8_0 = $module$kmem_root_kmem.com.soywiz.kmem.readU8_mrm5p$;
  var toShort = Kotlin.toShort;
  var readS16LE = $module$kmem_root_kmem.com.soywiz.kmem.readS16LE_mrm5p$;
  var readS24LE = $module$kmem_root_kmem.com.soywiz.kmem.readS24LE_mrm5p$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var writeString = $module$korio_root_korio.com.soywiz.korio.stream.writeString_wczyte$;
  var write32LE = $module$korio_root_korio.com.soywiz.korio.stream.write32LE_1j05bi$;
  var write16LE = $module$korio_root_korio.com.soywiz.korio.stream.write16LE_1j05bi$;
  var writeShortArrayLE = $module$korio_root_korio.com.soywiz.korio.stream.writeShortArrayLE_axfcu2$;
  var readS16LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readS16LE_yjldv$;
  var readU32LE = $module$korio_root_korio.com.soywiz.korio.stream.readU32LE_yjldv$;
  var L8 = Kotlin.Long.fromInt(8);
  var runBlockingNoSuspensions = $module$korio_root_korio.com.soywiz.korio.async.runBlockingNoSuspensions_g8ox3d$;
  var readU8_1 = $module$korio_root_korio.com.soywiz.korio.stream.readU8_p2awyq$;
  var readStringz = $module$korio_root_korio.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var numberToInt = Kotlin.numberToInt;
  var toByte = Kotlin.toByte;
  var toString = Kotlin.toString;
  var EOFException = $module$korio_root_korio.com.soywiz.korio.lang.EOFException;
  var throwUPAE = Kotlin.throwUPAE;
  var math = Kotlin.kotlin.math;
  var Math_0 = Math;
  var wrapFunction = Kotlin.wrapFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var readAll = $module$korio_root_korio.com.soywiz.korio.stream.readAll_yjldv$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var clamp = $module$kmem_root_kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var contentDeepHashCode = Kotlin.arrayDeepHashCode;
  var contentDeepEquals = Kotlin.arrayDeepEquals;
  var clamp01 = $module$kmem_root_kmem.com.soywiz.kmem.clamp01_yrwdxr$;
  var Array_0 = Array;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var ShortArrayDeque = $module$kds_root_kds.com.soywiz.kds.ShortArrayDeque;
  var Closeable = $module$korio_root_korio.com.soywiz.korio.lang.Closeable;
  var get_baseName = $module$korio_root_korio.com.soywiz.korio.file.get_baseName_hsf53c$;
  var delay = $module$korio_root_korio.com.soywiz.korio.async.delay_fv8bff$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var DateTime = $module$klock_root_klock.com.soywiz.klock.DateTime;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var RedirectMutableField_init = $module$korio_root_korio.com.soywiz.korio.util.RedirectMutableField;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var Disposable = $module$korio_root_korio.com.soywiz.korio.lang.Disposable;
  var clamp01_0 = $module$kmem_root_kmem.com.soywiz.kmem.clamp01_81szk$;
  var clamp_0 = $module$kmem_root_kmem.com.soywiz.kmem.clamp_wj6e7o$;
  var LocalVfs = $module$korio_root_korio.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio_root_korio.com.soywiz.korio.file.std.UrlVfs;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope_1fupul$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var launchImmediately_0 = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_hilpzi$;
  var Cancellable = $module$korio_root_korio.com.soywiz.korio.lang.Cancellable;
  var get_uniVfs = $module$korio_root_korio.com.soywiz.korio.file.std.get_uniVfs_pdl1vz$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Deferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.Deferred;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  var delay_0 = $module$korio_root_korio.com.soywiz.korio.async.delay_boqi9f$;
  var FloatArrayDeque = $module$kds_root_kds.com.soywiz.kds.FloatArrayDeque;
  SeekingNotSupported.prototype = Object.create(Exception.prototype);
  SeekingNotSupported.prototype.constructor = SeekingNotSupported;
  InvalidAudioFormatException.prototype = Object.create(RuntimeException.prototype);
  InvalidAudioFormatException.prototype.constructor = InvalidAudioFormatException;
  AudioFormats.prototype = Object.create(AudioFormat.prototype);
  AudioFormats.prototype.constructor = AudioFormats;
  MP3Base.prototype = Object.create(AudioFormat.prototype);
  MP3Base.prototype.constructor = MP3Base;
  MP3.prototype = Object.create(MP3Base.prototype);
  MP3.prototype.constructor = MP3;
  MP3$Companion.prototype = Object.create(MP3.prototype);
  MP3$Companion.prototype.constructor = MP3$Companion;
  MP3Base$Parser$Companion$ChannelMode.prototype = Object.create(Enum.prototype);
  MP3Base$Parser$Companion$ChannelMode.prototype.constructor = MP3Base$Parser$Companion$ChannelMode;
  OggBase.prototype = Object.create(AudioFormat.prototype);
  OggBase.prototype.constructor = OggBase;
  OGG.prototype = Object.create(OggBase.prototype);
  OGG.prototype.constructor = OGG;
  OGG$Companion.prototype = Object.create(OGG.prototype);
  OGG$Companion.prototype.constructor = OGG$Companion;
  WAV.prototype = Object.create(AudioFormat.prototype);
  WAV.prototype.constructor = WAV;
  WAV$Companion.prototype = Object.create(WAV.prototype);
  WAV$Companion.prototype.constructor = WAV$Companion;
  WAV$WavAudioStream.prototype = Object.create(AudioStream.prototype);
  WAV$WavAudioStream.prototype.constructor = WAV$WavAudioStream;
  JavaMp3Decoder$DecodeStatus.prototype = Object.create(Enum.prototype);
  JavaMp3Decoder$DecodeStatus.prototype.constructor = JavaMp3Decoder$DecodeStatus;
  MP3Decoder.prototype = Object.create(AudioFormat.prototype);
  MP3Decoder.prototype.constructor = MP3Decoder;
  MP3Decoder$Companion.prototype = Object.create(MP3Decoder.prototype);
  MP3Decoder$Companion.prototype.constructor = MP3Decoder$Companion;
  createJavaMp3DecoderStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  createJavaMp3DecoderStream$ObjectLiteral.prototype.constructor = createJavaMp3DecoderStream$ObjectLiteral;
  AudioConversionQuality.prototype = Object.create(Enum.prototype);
  AudioConversionQuality.prototype.constructor = AudioConversionQuality;
  AudioDataStream.prototype = Object.create(AudioStream.prototype);
  AudioDataStream.prototype.constructor = AudioDataStream;
  AudioStream$GeneratorAudioStream.prototype = Object.create(AudioStream.prototype);
  AudioStream$GeneratorAudioStream.prototype.constructor = AudioStream$GeneratorAudioStream;
  NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype.constructor = NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral;
  NativeSoundProvider$createStreamingSound$ObjectLiteral.prototype = Object.create(NativeSound.prototype);
  NativeSoundProvider$createStreamingSound$ObjectLiteral.prototype.constructor = NativeSoundProvider$createStreamingSound$ObjectLiteral;
  DummyNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  DummyNativeSoundProvider.prototype.constructor = DummyNativeSoundProvider;
  DummyNativeSoundChannel.prototype = Object.create(NativeSoundChannel.prototype);
  DummyNativeSoundChannel.prototype.constructor = DummyNativeSoundChannel;
  DequeBasedPlatformAudioOutput.prototype = Object.create(PlatformAudioOutput.prototype);
  DequeBasedPlatformAudioOutput.prototype.constructor = DequeBasedPlatformAudioOutput;
  HtmlNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  HtmlNativeSoundProvider.prototype.constructor = HtmlNativeSoundProvider;
  AudioBufferNativeSound$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  AudioBufferNativeSound$play$ObjectLiteral.prototype.constructor = AudioBufferNativeSound$play$ObjectLiteral;
  AudioBufferNativeSound.prototype = Object.create(NativeSound.prototype);
  AudioBufferNativeSound.prototype.constructor = AudioBufferNativeSound;
  JsPlatformAudioOutput.prototype = Object.create(PlatformAudioOutput.prototype);
  JsPlatformAudioOutput.prototype.constructor = JsPlatformAudioOutput;
  function Korau() {
    Korau_instance = this;
    this.VERSION = KORAU_VERSION;
  }
  Korau.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korau',
    interfaces: []
  };
  var Korau_instance = null;
  function Korau_getInstance() {
    if (Korau_instance === null) {
      new Korau();
    }return Korau_instance;
  }
  function SeekingNotSupported(message) {
    if (message === void 0)
      message = 'seekingNotSupported';
    Exception_init(message, this);
    this.name = 'SeekingNotSupported';
  }
  SeekingNotSupported.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SeekingNotSupported',
    interfaces: [Exception]
  };
  function seekingNotSupported(message) {
    if (message === void 0)
      message = 'seekingNotSupported';
    throw new SeekingNotSupported(message);
  }
  function AudioFormat(exts) {
    var destination = ArrayList_init(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString());
    }
    this.extensions = toSet(destination);
  }
  function AudioFormat$Info(duration, channels, decodingTime) {
    if (duration === void 0) {
      duration = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }if (channels === void 0)
      channels = 2;
    if (decodingTime === void 0)
      decodingTime = null;
    this.duration = duration;
    this.channels = channels;
    this.decodingTime = decodingTime;
    this.$delegate_q4l724$_0 = new Extra$Mixin();
  }
  AudioFormat$Info.prototype.toString = function () {
    return 'Info(duration=' + get_niceStr(this.duration.milliseconds) + 'ms, channels=' + this.channels + ')';
  };
  Object.defineProperty(AudioFormat$Info.prototype, 'extra', {
    get: function () {
      return this.$delegate_q4l724$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_q4l724$_0.extra = tmp$;
    }
  });
  AudioFormat$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: [Extra]
  };
  AudioFormat$Info.prototype.component1 = function () {
    return this.duration;
  };
  AudioFormat$Info.prototype.component2 = function () {
    return this.channels;
  };
  AudioFormat$Info.prototype.component3 = function () {
    return this.decodingTime;
  };
  AudioFormat$Info.prototype.copy_dlcq9v$ = function (duration, channels, decodingTime) {
    return new AudioFormat$Info(duration === void 0 ? this.duration : duration, channels === void 0 ? this.channels : channels, decodingTime === void 0 ? this.decodingTime : decodingTime);
  };
  AudioFormat$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.duration) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    result = result * 31 + Kotlin.hashCode(this.decodingTime) | 0;
    return result;
  };
  AudioFormat$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.duration, other.duration) && Kotlin.equals(this.channels, other.channels) && Kotlin.equals(this.decodingTime, other.decodingTime)))));
  };
  AudioFormat.prototype.tryReadInfo_yt2zhq$$default = function (data, props, continuation) {
    return null;
  };
  AudioFormat.prototype.tryReadInfo_yt2zhq$ = function (data, props, continuation, callback$default) {
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return callback$default ? callback$default(data, props, continuation) : this.tryReadInfo_yt2zhq$$default(data, props, continuation);
  };
  AudioFormat.prototype.decodeStream_yt2zhq$$default = function (data, props, continuation) {
    return null;
  };
  AudioFormat.prototype.decodeStream_yt2zhq$ = function (data, props, continuation, callback$default) {
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return callback$default ? callback$default(data, props, continuation) : this.decodeStream_yt2zhq$$default(data, props, continuation);
  };
  function Coroutine$decode_yt2zhq$($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$decode_yt2zhq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_yt2zhq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_yt2zhq$.prototype.constructor = Coroutine$decode_yt2zhq$;
  Coroutine$decode_yt2zhq$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = AudioDecodingProps$Companion_getInstance().DEFAULT;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_yt2zhq$(this.local$data, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = toData(tmp$, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return this.result_0;
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
  AudioFormat.prototype.decode_yt2zhq$ = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_yt2zhq$(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_c0djcc$($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$decode_c0djcc$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_c0djcc$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_c0djcc$.prototype.constructor = Coroutine$decode_c0djcc$;
  Coroutine$decode_c0djcc$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = AudioDecodingProps$Companion_getInstance().DEFAULT;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_yt2zhq$(openAsync(this.local$data), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = toData(tmp$, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return this.result_0;
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
  AudioFormat.prototype.decode_c0djcc$ = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_c0djcc$(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormat.prototype.encode_ovnsdg$$default = function (data, out, filename, props, continuation) {
    return unsupported();
  };
  AudioFormat.prototype.encode_ovnsdg$ = function (data, out, filename, props, continuation, callback$default) {
    if (props === void 0)
      props = AudioEncodingProps$Companion_getInstance().DEFAULT;
    return callback$default ? callback$default(data, out, filename, props, continuation) : this.encode_ovnsdg$$default(data, out, filename, props, continuation);
  };
  function Coroutine$encodeToByteArray_1hptbf$($this, data_0, filename_0, format_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$buffer = void 0;
    this.local$data = data_0;
    this.local$filename = filename_0;
    this.local$format = format_0;
    this.local$props = props_0;
  }
  Coroutine$encodeToByteArray_1hptbf$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encodeToByteArray_1hptbf$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encodeToByteArray_1hptbf$.prototype.constructor = Coroutine$encodeToByteArray_1hptbf$;
  Coroutine$encodeToByteArray_1hptbf$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$filename === void 0)
              this.local$filename = 'out.wav';
            if (this.local$format === void 0)
              this.local$format = this.$this;
            if (this.local$props === void 0)
              this.local$props = AudioEncodingProps$Companion_getInstance().DEFAULT;
            this.local$buffer = ByteArrayBuilder_init(4096);
            var s = MemorySyncStream(this.local$buffer);
            this.state_0 = 2;
            this.result_0 = this.local$format.encode_ovnsdg$(this.local$data, toAsync(s), this.local$filename, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$buffer.toByteArray();
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
  AudioFormat.prototype.encodeToByteArray_1hptbf$ = function (data_0, filename_0, format_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$encodeToByteArray_1hptbf$(this, data_0, filename_0, format_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormat.prototype.toString = function () {
    return 'AudioFormat(' + sorted(this.extensions) + ')';
  };
  AudioFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormat',
    interfaces: []
  };
  function AudioDecodingProps(exactTimings) {
    AudioDecodingProps$Companion_getInstance();
    if (exactTimings === void 0)
      exactTimings = null;
    this.exactTimings = exactTimings;
    this.readInMemory = true;
  }
  function AudioDecodingProps$Companion() {
    AudioDecodingProps$Companion_instance = this;
    this.DEFAULT = new AudioDecodingProps();
  }
  AudioDecodingProps$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioDecodingProps$Companion_instance = null;
  function AudioDecodingProps$Companion_getInstance() {
    if (AudioDecodingProps$Companion_instance === null) {
      new AudioDecodingProps$Companion();
    }return AudioDecodingProps$Companion_instance;
  }
  AudioDecodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioDecodingProps',
    interfaces: []
  };
  function AudioEncodingProps(quality, filename) {
    AudioEncodingProps$Companion_getInstance();
    if (quality === void 0)
      quality = 0.84;
    if (filename === void 0)
      filename = null;
    this.quality = quality;
    this.filename = filename;
  }
  function AudioEncodingProps$Companion() {
    AudioEncodingProps$Companion_instance = this;
    this.DEFAULT = new AudioEncodingProps();
  }
  AudioEncodingProps$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioEncodingProps$Companion_instance = null;
  function AudioEncodingProps$Companion_getInstance() {
    if (AudioEncodingProps$Companion_instance === null) {
      new AudioEncodingProps$Companion();
    }return AudioEncodingProps$Companion_instance;
  }
  AudioEncodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioEncodingProps',
    interfaces: []
  };
  function InvalidAudioFormatException(message) {
    RuntimeException_init(message, this);
    this.name = 'InvalidAudioFormatException';
  }
  InvalidAudioFormatException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidAudioFormatException',
    interfaces: [RuntimeException]
  };
  function invalidAudioFormat(message) {
    if (message === void 0)
      message = 'invalid audio format';
    throw new InvalidAudioFormatException(message);
  }
  function defaultAudioFormats$lambda() {
    return standardAudioFormats();
  }
  var defaultAudioFormats;
  function get_defaultAudioFormats() {
    return defaultAudioFormats.value;
  }
  function AudioFormats() {
    AudioFormats$Companion_getInstance();
    AudioFormat.call(this, []);
    this.formats = LinkedHashSet_init();
  }
  function AudioFormats$Companion() {
    AudioFormats$Companion_instance = this;
  }
  AudioFormats$Companion.prototype.invoke_rtj1ud$ = function (formats) {
    return (new AudioFormats()).register_rtj1ud$(formats.slice());
  };
  AudioFormats$Companion.prototype.invoke_19yo1f$ = function (formats) {
    return (new AudioFormats()).register_19yo1f$(formats);
  };
  AudioFormats$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioFormats$Companion_instance = null;
  function AudioFormats$Companion_getInstance() {
    if (AudioFormats$Companion_instance === null) {
      new AudioFormats$Companion();
    }return AudioFormats$Companion_instance;
  }
  AudioFormats.prototype.register_d1u64b$ = function (formats) {
    addAll(this.formats, formats.formats);
    return this;
  };
  AudioFormats.prototype.register_rtj1ud$ = function (formats) {
    addAll_0(this.formats, formats);
    return this;
  };
  AudioFormats.prototype.register_19yo1f$ = function (formats) {
    addAll(this.formats, formats);
    return this;
  };
  function Coroutine$tryReadInfo_yt2zhq$$default($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$tryReadInfo_yt2zhq$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_yt2zhq$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_yt2zhq$$default.prototype.constructor = Coroutine$tryReadInfo_yt2zhq$$default;
  Coroutine$tryReadInfo_yt2zhq$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }
            var format = this.local$tmp$.next();
            this.exceptionState_0 = 4;
            this.state_0 = 2;
            this.result_0 = format.tryReadInfo_yt2zhq$(this.local$data.duplicate(), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 4;
              this.state_0 = 1;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return this.local$tmp$_0;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            } else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 1;
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            return null;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AudioFormats.prototype.tryReadInfo_yt2zhq$$default = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_yt2zhq$$default(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStream_yt2zhq$$default($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$format = void 0;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$decodeStream_yt2zhq$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_yt2zhq$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_yt2zhq$$default.prototype.constructor = Coroutine$decodeStream_yt2zhq$$default;
  Coroutine$decodeStream_yt2zhq$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 9;
              continue;
            }
            this.local$format = this.local$tmp$.next();
            this.exceptionState_0 = 6;
            this.state_0 = 2;
            this.result_0 = this.local$format.tryReadInfo_yt2zhq$(this.local$data.duplicate(), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (this.result_0 == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 1;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$format.decodeStream_yt2zhq$(this.local$data.duplicate(), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 1;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            return this.local$tmp$_0;
          case 6:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            } else
              throw e;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            throw this.exception_0;
          case 9:
            return null;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AudioFormats.prototype.decodeStream_yt2zhq$$default = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_yt2zhq$$default(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStreamOrError_yt2zhq$($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$decodeStreamOrError_yt2zhq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStreamOrError_yt2zhq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStreamOrError_yt2zhq$.prototype.constructor = Coroutine$decodeStreamOrError_yt2zhq$;
  Coroutine$decodeStreamOrError_yt2zhq$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_yt2zhq$(this.local$data, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            if ((tmp$ = this.result_0) != null)
              tmp$_0 = tmp$;
            else {
              throw IllegalStateException_init(("Can't decode audio stream [" + this.$this.formats + ']').toString());
            }

            return tmp$_0;
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
  AudioFormats.prototype.decodeStreamOrError_yt2zhq$ = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStreamOrError_yt2zhq$(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormats.prototype.encode_ovnsdg$$default = function (data, out, filename, props, continuation) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(filename));
    var $receiver = this.formats;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.extensions.contains_11rb$(ext)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw UnsupportedOperationException_init("Don't know how to generate file for extension '" + ext + "'");
    }var format = tmp$;
    return format.encode_ovnsdg$(data, out, filename, void 0, continuation);
  };
  AudioFormats.prototype.plus_504pvc$ = function (other) {
    return AudioFormats$Companion_getInstance().invoke_19yo1f$(plus(this.formats, other));
  };
  AudioFormats.prototype.plus_19yo1f$ = function (other) {
    return AudioFormats$Companion_getInstance().invoke_19yo1f$(plus_0(this.formats, other));
  };
  AudioFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormats',
    interfaces: [AudioFormat]
  };
  function Coroutine$readSoundInfo($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readSoundInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSoundInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSoundInfo.prototype.constructor = Coroutine$readSoundInfo;
  Coroutine$readSoundInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultAudioFormats();
            if (this.local$props === void 0)
              this.local$props = AudioDecodingProps$Companion_getInstance().DEFAULT;
            var mode;
            mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$formats.tryReadInfo_yt2zhq$(this.local$$receiver_0, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = this.result_0;
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            } else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readSoundInfo($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readSoundInfo($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function standardAudioFormats() {
    return AudioFormats$Companion_getInstance().invoke_rtj1ud$([WAV$Companion_getInstance(), OGG$Companion_getInstance(), MP3$Companion_getInstance()]);
  }
  function registerStandard($receiver) {
    $receiver.register_d1u64b$(standardAudioFormats());
    return $receiver;
  }
  function MP3() {
    MP3$Companion_getInstance();
    MP3Base.call(this);
  }
  function MP3$Companion() {
    MP3$Companion_instance = this;
    MP3.call(this);
  }
  MP3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [MP3]
  };
  var MP3$Companion_instance = null;
  function MP3$Companion_getInstance() {
    if (MP3$Companion_instance === null) {
      new MP3$Companion();
    }return MP3$Companion_instance;
  }
  MP3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3',
    interfaces: [MP3Base]
  };
  function MP3Base() {
    AudioFormat.call(this, ['mp3']);
  }
  function Coroutine$tryReadInfo_yt2zhq$$default_0($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.$this = $this;
    this.local$parser = void 0;
    this.local$start = void 0;
    this.local$callback$result = void 0;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$tryReadInfo_yt2zhq$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_yt2zhq$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_yt2zhq$$default_0.prototype.constructor = Coroutine$tryReadInfo_yt2zhq$$default_0;
  Coroutine$tryReadInfo_yt2zhq$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.exceptionState_0 = 6;
            this.local$parser = new MP3Base$Parser(this.local$data);
            this.local$start = klock.PerformanceCounter.microseconds;
            var tmp$_2;
            tmp$_2 = this.local$props.exactTimings;
            if (tmp$_2 == null) {
              this.state_0 = 4;
              this.result_0 = this.local$parser.getDurationExact(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (tmp$_2 === true) {
                this.state_0 = 2;
                this.result_0 = this.local$parser.getDurationExact(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = this.local$parser.getDurationEstimate(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$callback$result = this.result_0;
            this.state_0 = 3;
            continue;
          case 2:
            this.local$callback$result = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            this.local$callback$result = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            var result = this.local$callback$result;
            var end = klock.PerformanceCounter.microseconds;
            var $receiver = end - this.local$start;
            var elapsed = TimeSpan.Companion.fromMicroseconds_14dthe$($receiver);
            var tmp$_3 = new TimedResult_init(result, elapsed);
            var duration = tmp$_3.component1()
            , decodingTime = tmp$_3.component2();
            return new AudioFormat$Info(duration, (tmp$_1 = (tmp$_0 = (tmp$ = this.local$parser.info) != null ? tmp$.channelMode : null) != null ? tmp$_0.channels : null) != null ? tmp$_1 : 2, decodingTime);
          case 6:
            this.exceptionState_0 = 9;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            } else {
              throw e;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MP3Base.prototype.tryReadInfo_yt2zhq$$default = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_yt2zhq$$default_0(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MP3Base$SeekingTable(microseconds, filePositions, rate) {
    if (rate === void 0)
      rate = 44100;
    this.microseconds = microseconds;
    this.filePositions = filePositions;
    this.rate = rate;
  }
  Object.defineProperty(MP3Base$SeekingTable.prototype, 'lengthTime', {
    get: function () {
      var $receiver = this.microseconds.get_za3lpa$(this.microseconds.size - 1 | 0);
      return TimeSpan.Companion.fromMicroseconds_14dthe$($receiver);
    }
  });
  Object.defineProperty(MP3Base$SeekingTable.prototype, 'lengthSamples', {
    get: function () {
      return Kotlin.Long.fromNumber(this.lengthTime.seconds * this.rate);
    }
  });
  MP3Base$SeekingTable.prototype.locate_fv8bff$ = function (time) {
    var searchMicro = time.microseconds;
    var result = binarySearch(this.microseconds, searchMicro);
    return Kotlin.Long.fromNumber(this.filePositions.get_za3lpa$(result.nearIndex));
  };
  MP3Base$SeekingTable.prototype.locateSample_s8cxhz$ = function (sample) {
    var $receiver = sample.toNumber() / this.rate;
    return this.locate_fv8bff$(TimeSpan.Companion.fromSeconds_14dthe$($receiver));
  };
  MP3Base$SeekingTable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SeekingTable',
    interfaces: []
  };
  function MP3Base$Parser(data) {
    MP3Base$Parser$Companion_getInstance();
    this.data = data;
    this.info = null;
  }
  MP3Base$Parser.prototype.getDurationEstimate = function (continuation) {
    return this._getDuration_0(true, void 0, continuation);
  };
  MP3Base$Parser.prototype.getDurationExact = function (continuation) {
    return this._getDuration_0(false, void 0, continuation);
  };
  function MP3Base$Parser$getSeekingTable$lambda(closure$times, closure$filePositions) {
    return function (filePos, totalMicro, info) {
      closure$times.add_14dthe$(totalMicro);
      closure$filePositions.add_14dthe$(filePos.toNumber());
      return Unit;
    };
  }
  function Coroutine$getSeekingTable_za3lpa$($this, rate_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$times = void 0;
    this.local$filePositions = void 0;
    this.local$rate = rate_0;
  }
  Coroutine$getSeekingTable_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getSeekingTable_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getSeekingTable_za3lpa$.prototype.constructor = Coroutine$getSeekingTable_za3lpa$;
  Coroutine$getSeekingTable_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$rate === void 0)
              this.local$rate = 44100;
            this.local$times = new DoubleArrayList();
            this.local$filePositions = new DoubleArrayList();
            this.state_0 = 2;
            this.result_0 = this.$this._getDuration_0(false, MP3Base$Parser$getSeekingTable$lambda(this.local$times, this.local$filePositions), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new MP3Base$SeekingTable(this.local$times, this.local$filePositions, this.local$rate);
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
  MP3Base$Parser.prototype.getSeekingTable_za3lpa$ = function (rate_0, continuation_0, suspended) {
    var instance = new Coroutine$getSeekingTable_za3lpa$(this, rate_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_getDuration_0($this, use_cbr_estimate_0, emit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fd = void 0;
    this.local$durationMicroseconds = void 0;
    this.local$offset = void 0;
    this.local$info = void 0;
    this.local$nframes = void 0;
    this.local$block2 = void 0;
    this.local$framePos = void 0;
    this.local$use_cbr_estimate = use_cbr_estimate_0;
    this.local$emit = emit_0;
  }
  Coroutine$_getDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_getDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_getDuration_0.prototype.constructor = Coroutine$_getDuration_0;
  Coroutine$_getDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$emit === void 0)
              this.local$emit = null;
            this.$this.data.position = L0;
            this.local$fd = this.$this.data.duplicate();
            this.local$durationMicroseconds = 0.0;
            this.state_0 = 2;
            this.result_0 = readStream(this.local$fd, 100, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.skipID3v2Tag_0(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$offset = this.result_0;
            this.local$fd.position = this.local$offset;
            this.local$info = null;
            this.local$nframes = 0;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$fd.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (!!this.result_0) {
              this.state_0 = 14;
              continue;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.state_0 = 7;
            this.result_0 = readBytesUpTo(this.local$fd, 10, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$block2 = new UByteArrayInt(this.result_0);
            if (this.local$block2.size < 10) {
              this.state_0 = 14;
              continue;
            } else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            if (this.local$block2.get_za3lpa$(0) === 255 && (this.local$block2.get_za3lpa$(1) & 224) !== 0) {
              this.local$framePos = this.local$fd.position;
              this.state_0 = 9;
              this.result_0 = MP3Base$Parser$Companion_getInstance().parseFrameHeader_m5mxob$(this.local$block2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (equals(readString(openSync(this.local$block2.bytes), 3), 'TAG')) {
                this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(118));
              } else {
                this.local$fd.position = this.local$fd.position.subtract(Kotlin.Long.fromInt(9));
              }
              this.state_0 = 11;
              continue;
            }

          case 9:
            this.local$info = this.result_0;
            this.local$emit != null ? this.local$emit(this.local$framePos, this.local$durationMicroseconds, this.local$info) : null;
            this.local$nframes = this.local$nframes + 1 | 0;
            this.$this.info = this.local$info;
            if (this.local$info.frameSize === 0) {
              return TimeSpan.Companion.fromMicroseconds_14dthe$(this.local$durationMicroseconds);
            } else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(this.local$info.frameSize - 10 | 0));
            this.local$durationMicroseconds += Kotlin.Long.fromInt(this.local$info.samples).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$info.samplingRate));
            this.state_0 = 11;
            continue;
          case 11:
            if (this.local$info != null && this.local$use_cbr_estimate) {
              this.state_0 = 12;
              this.result_0 = this.$this.estimateDuration_0(this.local$info.bitrate, this.local$info.channelMode.channels, this.local$offset.toInt(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 13;
              continue;
            }

          case 12:
            var $receiver_0 = numberToDouble(this.result_0);
            return TimeSpan.Companion.fromMicroseconds_14dthe$($receiver_0);
          case 13:
            this.state_0 = 4;
            continue;
          case 14:
            return TimeSpan.Companion.fromMicroseconds_14dthe$(this.local$durationMicroseconds);
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
  MP3Base$Parser.prototype._getDuration_0 = function (use_cbr_estimate_0, emit_0, continuation_0, suspended) {
    var instance = new Coroutine$_getDuration_0(this, use_cbr_estimate_0, emit_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$estimateDuration_0($this, bitrate_0, channels_0, offset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$kbps = void 0;
    this.local$bitrate = bitrate_0;
    this.local$channels = channels_0;
    this.local$offset = offset_0;
  }
  Coroutine$estimateDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$estimateDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$estimateDuration_0.prototype.constructor = Coroutine$estimateDuration_0;
  Coroutine$estimateDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$kbps = (this.local$bitrate * 1000 | 0) / 8 | 0;
            this.state_0 = 2;
            this.result_0 = this.$this.data.getLength(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var dataSize = this.result_0.subtract(Kotlin.Long.fromInt(this.local$offset));
            return dataSize.multiply(Kotlin.Long.fromInt(2 / this.local$channels | 0)).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$kbps));
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
  MP3Base$Parser.prototype.estimateDuration_0 = function (bitrate_0, channels_0, offset_0, continuation_0, suspended) {
    var instance = new Coroutine$estimateDuration_0(this, bitrate_0, channels_0, offset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$skipID3v2Tag_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$b = void 0;
    this.local$flag_footer_present = void 0;
    this.local$z0 = void 0;
    this.local$z1 = void 0;
    this.local$z2 = void 0;
    this.local$block = block_0;
  }
  Coroutine$skipID3v2Tag_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$skipID3v2Tag_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$skipID3v2Tag_0.prototype.constructor = Coroutine$skipID3v2Tag_0;
  Coroutine$skipID3v2Tag_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$b = this.local$block.duplicate();
            this.state_0 = 2;
            this.result_0 = readString_0(this.local$b, 3, lang.Charsets.LATIN1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.result_0, 'ID3')) {
              this.state_0 = 3;
              this.result_0 = readU8(this.local$b, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 11;
              continue;
            }

          case 3:
            var id3v2_major_version = this.result_0;
            this.state_0 = 4;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var id3v2_minor_version = this.result_0;
            this.state_0 = 5;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var id3v2_flags = this.result_0;
            var flag_unsynchronisation = extract(id3v2_flags, 7);
            var flag_extended_header = extract(id3v2_flags, 6);
            var flag_experimental_ind = extract(id3v2_flags, 5);
            this.local$flag_footer_present = extract(id3v2_flags, 4);
            this.state_0 = 6;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$z0 = this.result_0;
            this.state_0 = 7;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$z1 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$z2 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var z3 = this.result_0;
            if ((this.local$z0 & 128) === 0 && (this.local$z1 & 128) === 0 && (this.local$z2 & 128) === 0 && (z3 & 128) === 0) {
              var header_size = 10;
              var tag_size = Kotlin.imul(this.local$z0 & 127, 2097152) + ((this.local$z1 & 127) * 16384 | 0) + ((this.local$z2 & 127) * 128 | 0) + (z3 & 127) | 0;
              var footer_size = this.local$flag_footer_present ? 10 : 0;
              return Kotlin.Long.fromInt(header_size + tag_size + footer_size | 0);
            } else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            return L0;
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
  MP3Base$Parser.prototype.skipID3v2Tag_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$skipID3v2Tag_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MP3Base$Parser$Companion() {
    MP3Base$Parser$Companion_instance = this;
    this.versions = ['2.5', 'x', '2', '1'];
    this.layers = new Int32Array([-1, 3, 2, 1]);
    this.bitrates = mapOf([to('V1L1', new Int32Array([0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448])), to('V1L2', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384])), to('V1L3', new Int32Array([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320])), to('V2L1', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256])), to('V2L2', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160])), to('V2L3', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]))]);
    this.sampleRates = mapOf([to('1', new Int32Array([44100, 48000, 32000])), to('2', new Int32Array([22050, 24000, 16000])), to('2.5', new Int32Array([11025, 12000, 8000]))]);
    this.samples = mapOf([to(1, mapOf([to(1, 384), to(2, 1152), to(3, 1152)])), to(2, mapOf([to(1, 384), to(2, 1152), to(3, 576)]))]);
  }
  function MP3Base$Parser$Companion$ChannelMode(name, ordinal, id, channels) {
    Enum.call(this);
    this.id = id;
    this.channels = channels;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MP3Base$Parser$Companion$ChannelMode_initFields() {
    MP3Base$Parser$Companion$ChannelMode_initFields = function () {
    };
    MP3Base$Parser$Companion$ChannelMode$STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('STEREO', 0, 0, 2);
    MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('JOINT_STEREO', 1, 1, 1);
    MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('DUAL_CHANNEL', 2, 2, 2);
    MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('SINGLE_CHANNEL', 3, 3, 1);
    MP3Base$Parser$Companion$ChannelMode$Companion_getInstance();
  }
  var MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  }
  function MP3Base$Parser$Companion$ChannelMode$Companion() {
    MP3Base$Parser$Companion$ChannelMode$Companion_instance = this;
    var $receiver = MP3Base$Parser$Companion$ChannelMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  MP3Base$Parser$Companion$ChannelMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion$ChannelMode$Companion_instance = null;
  function MP3Base$Parser$Companion$ChannelMode$Companion_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    if (MP3Base$Parser$Companion$ChannelMode$Companion_instance === null) {
      new MP3Base$Parser$Companion$ChannelMode$Companion();
    }return MP3Base$Parser$Companion$ChannelMode$Companion_instance;
  }
  MP3Base$Parser$Companion$ChannelMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelMode',
    interfaces: [Enum]
  };
  function MP3Base$Parser$Companion$ChannelMode$values() {
    return [MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance(), MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance()];
  }
  MP3Base$Parser$Companion$ChannelMode.values = MP3Base$Parser$Companion$ChannelMode$values;
  function MP3Base$Parser$Companion$ChannelMode$valueOf(name) {
    switch (name) {
      case 'STEREO':
        return MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance();
      case 'JOINT_STEREO':
        return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance();
      case 'DUAL_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance();
      case 'SINGLE_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.format.MP3Base.Parser.Companion.ChannelMode.' + name);
    }
  }
  MP3Base$Parser$Companion$ChannelMode.valueOf_61zpoe$ = MP3Base$Parser$Companion$ChannelMode$valueOf;
  function MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    this.version = version;
    this.layer = layer;
    this.bitrate = bitrate;
    this.samplingRate = samplingRate;
    this.channelMode = channelMode;
    this.frameSize = frameSize;
    this.samples = samples;
  }
  MP3Base$Parser$Companion$Mp3Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mp3Info',
    interfaces: []
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component1 = function () {
    return this.version;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component2 = function () {
    return this.layer;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component3 = function () {
    return this.bitrate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component4 = function () {
    return this.samplingRate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component5 = function () {
    return this.channelMode;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component6 = function () {
    return this.frameSize;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component7 = function () {
    return this.samples;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.copy_wikoj$ = function (version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    return new MP3Base$Parser$Companion$Mp3Info(version === void 0 ? this.version : version, layer === void 0 ? this.layer : layer, bitrate === void 0 ? this.bitrate : bitrate, samplingRate === void 0 ? this.samplingRate : samplingRate, channelMode === void 0 ? this.channelMode : channelMode, frameSize === void 0 ? this.frameSize : frameSize, samples === void 0 ? this.samples : samples);
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.toString = function () {
    return 'Mp3Info(version=' + Kotlin.toString(this.version) + (', layer=' + Kotlin.toString(this.layer)) + (', bitrate=' + Kotlin.toString(this.bitrate)) + (', samplingRate=' + Kotlin.toString(this.samplingRate)) + (', channelMode=' + Kotlin.toString(this.channelMode)) + (', frameSize=' + Kotlin.toString(this.frameSize)) + (', samples=' + Kotlin.toString(this.samples)) + ')';
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.layer) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitrate) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplingRate) | 0;
    result = result * 31 + Kotlin.hashCode(this.channelMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.samples) | 0;
    return result;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.layer, other.layer) && Kotlin.equals(this.bitrate, other.bitrate) && Kotlin.equals(this.samplingRate, other.samplingRate) && Kotlin.equals(this.channelMode, other.channelMode) && Kotlin.equals(this.frameSize, other.frameSize) && Kotlin.equals(this.samples, other.samples)))));
  };
  MP3Base$Parser$Companion.prototype.parseFrameHeader_m5mxob$ = function (f4, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var b0 = f4.get_za3lpa$(0);
    var b1 = f4.get_za3lpa$(1);
    var b2 = f4.get_za3lpa$(2);
    var b3 = f4.get_za3lpa$(3);
    if (b0 !== 255)
      lang.invalidOp;
    var version = this.versions[extract_0(b1, 3, 2)];
    var simple_version = equals(version, '2.5') ? 2 : toInt(version);
    var layer = this.layers[extract_0(b1, 1, 2)];
    var protection_bit = extract_0(b1, 0, 1);
    var bitrate_key = format('V%dL%d', [simple_version, layer]);
    var bitrate_idx = extract_0(b2, 4, 4);
    var bitrate = (tmp$_0 = (tmp$ = this.bitrates.get_11rb$(bitrate_key)) != null ? tmp$[bitrate_idx] : null) != null ? tmp$_0 : 0;
    var sample_rate = (tmp$_2 = (tmp$_1 = this.sampleRates.get_11rb$(version)) != null ? tmp$_1[extract_0(b2, 2, 2)] : null) != null ? tmp$_2 : 0;
    var padding_bit = extract_0(b2, 1, 1);
    var private_bit = extract_0(b2, 0, 1);
    var channelMode = ensureNotNull(MP3Base$Parser$Companion$ChannelMode$Companion_getInstance().BY_ID.get_11rb$(extract_0(b3, 6, 2)));
    var mode_extension_bits = extract_0(b3, 4, 2);
    var copyright_bit = extract_0(b3, 3, 1);
    var original_bit = extract_0(b3, 2, 1);
    var emphasis = extract_0(b3, 0, 2);
    return new MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, sample_rate, channelMode, this.framesize_0(layer, bitrate, sample_rate, padding_bit), (tmp$_4 = (tmp$_3 = this.samples.get_11rb$(simple_version)) != null ? tmp$_3.get_11rb$(layer) : null) != null ? tmp$_4 : 0);
  };
  MP3Base$Parser$Companion.prototype.framesize_0 = function (layer, bitrate, sample_rate, padding_bit) {
    var tmp$;
    if (layer === 1) {
      tmp$ = ((((12 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0) * 4 | 0;
    } else {
      tmp$ = (((144 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0;
    }
    return tmp$;
  };
  MP3Base$Parser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion_instance = null;
  function MP3Base$Parser$Companion_getInstance() {
    if (MP3Base$Parser$Companion_instance === null) {
      new MP3Base$Parser$Companion();
    }return MP3Base$Parser$Companion_instance;
  }
  MP3Base$Parser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  MP3Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3Base',
    interfaces: [AudioFormat]
  };
  function OGG() {
    OGG$Companion_getInstance();
    OggBase.call(this);
  }
  function OGG$Companion() {
    OGG$Companion_instance = this;
    OGG.call(this);
  }
  OGG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [OGG]
  };
  var OGG$Companion_instance = null;
  function OGG$Companion_getInstance() {
    if (OGG$Companion_instance === null) {
      new OGG$Companion();
    }return OGG$Companion_instance;
  }
  OGG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OGG',
    interfaces: [OggBase]
  };
  function OggBase() {
    AudioFormat.call(this, ['ogg']);
  }
  function Coroutine$tryReadInfo_yt2zhq$$default_1($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_yt2zhq$$default_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_yt2zhq$$default_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_yt2zhq$$default_1.prototype.constructor = Coroutine$tryReadInfo_yt2zhq$$default_1;
  Coroutine$tryReadInfo_yt2zhq$$default_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  OggBase.prototype.tryReadInfo_yt2zhq$$default = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_yt2zhq$$default_1(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_axnxby$($this, s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$channels = void 0;
    this.local$sampleRate = void 0;
    this.local$bos = void 0;
    this.local$eos = void 0;
    this.local$gpos = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$info = void 0;
    this.local$packetType = void 0;
    this.local$s = s_0;
  }
  Coroutine$parse_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_axnxby$.prototype.constructor = Coroutine$parse_axnxby$;
  Coroutine$parse_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$channels = 2;
            this.local$sampleRate = 44100;
            var brnom = 160000;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = hasAvailable(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 30;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s, 5, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var magic = this.result_0;
            if (!equals(magic, 'OggS\x00'))
              invalidAudioFormat('Not an OGG file');
            this.state_0 = 6;
            this.result_0 = readS8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var type = this.result_0;
            var cont = extract(type, 0);
            this.local$bos = extract(type, 1);
            this.local$eos = extract(type, 2);
            this.state_0 = 7;
            this.result_0 = readS64LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$gpos = this.result_0;
            this.state_0 = 8;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var sn = this.result_0;
            this.state_0 = 9;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var psn = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var chk = this.result_0;
            this.state_0 = 11;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var pseg = this.result_0;
            var $receiver = until(0, pseg);
            this.local$destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 12;
            continue;
          case 12:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 14;
              continue;
            }
            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 13;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 12;
            continue;
          case 14:
            var psizs = this.local$destination;
            this.local$destination_0 = ArrayList_init(collectionSizeOrDefault(psizs, 10));
            this.local$tmp$_1 = psizs.iterator();
            this.state_0 = 15;
            continue;
          case 15:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 17;
              continue;
            }
            var item_0 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.state_0 = 16;
            this.result_0 = readStream(this.local$s, item_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_2.call(this.local$destination_0, this.result_0);
            this.state_0 = 15;
            continue;
          case 17:
            var pages = this.local$destination_0;
            if (this.local$bos) {
              this.local$info = pages.get_za3lpa$(0);
              this.state_0 = 18;
              this.result_0 = readU8(this.local$info, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 28;
              continue;
            }

          case 18:
            this.local$packetType = this.result_0;
            if (this.local$packetType > 3)
              invalidOp('Unsupported OGG vorbis file');
            this.state_0 = 19;
            this.result_0 = readString_0(this.local$info, 6, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            if (!equals(this.result_0, 'vorbis'))
              invalidOp('Unsupported OGG vorbis file');
            switch (this.local$packetType) {
              case 1:
                this.state_0 = 20;
                this.result_0 = readS32LE(this.local$info, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 3:
                this.state_0 = 27;
                continue;
              case 5:
                this.state_0 = 27;
                continue;
            }

          case 20:
            var vver = this.result_0;
            this.state_0 = 21;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$channels = this.result_0;
            this.state_0 = 22;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$sampleRate = this.result_0;
            this.state_0 = 23;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            var brmax = this.result_0;
            this.state_0 = 24;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            brnom = this.result_0;
            this.state_0 = 25;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            var brmin = this.result_0;
            this.state_0 = 26;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            var bsinfo = this.result_0;
            this.state_0 = 27;
            continue;
          case 27:
            this.state_0 = 28;
            continue;
          case 28:
            if (this.local$eos) {
              var $receiver_0 = numberToDouble(Kotlin.Long.fromNumber(this.local$gpos.toNumber() * 1000000.0 / this.local$sampleRate));
              return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$($receiver_0), this.local$channels);
            } else {
              this.state_0 = 29;
              continue;
            }

          case 29:
            this.state_0 = 2;
            continue;
          case 30:
            invalidOp('Cannot parse stream');
            return;
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
  OggBase.prototype.parse_axnxby$ = function (s_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_axnxby$(this, s_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function OggBase$PacketTypes() {
    OggBase$PacketTypes_instance = this;
    this.ID_HEADER = 1;
    this.COMMENT_HEADER = 3;
    this.SETUP_HEADER = 5;
  }
  OggBase$PacketTypes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PacketTypes',
    interfaces: []
  };
  var OggBase$PacketTypes_instance = null;
  function OggBase$PacketTypes_getInstance() {
    if (OggBase$PacketTypes_instance === null) {
      new OggBase$PacketTypes();
    }return OggBase$PacketTypes_instance;
  }
  OggBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OggBase',
    interfaces: [AudioFormat]
  };
  function WAV() {
    WAV$Companion_getInstance();
    AudioFormat.call(this, ['wav']);
  }
  function WAV$Companion() {
    WAV$Companion_instance = this;
    WAV.call(this);
  }
  WAV$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [WAV]
  };
  var WAV$Companion_instance = null;
  function WAV$Companion_getInstance() {
    if (WAV$Companion_instance === null) {
      new WAV$Companion();
    }return WAV$Companion_instance;
  }
  function WAV$Chunk(type, data) {
    this.type = type;
    this.data = data;
  }
  WAV$Chunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  WAV$Chunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$Chunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$Chunk.prototype.copy_519pps$ = function (type, data) {
    return new WAV$Chunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data);
  };
  WAV$Chunk.prototype.toString = function () {
    return 'Chunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  WAV$Chunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  WAV$Chunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data)))));
  };
  function WAV$ProcessedChunk(type, data, extra) {
    this.type = type;
    this.data = data;
    this.extra = extra;
  }
  WAV$ProcessedChunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessedChunk',
    interfaces: []
  };
  WAV$ProcessedChunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$ProcessedChunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$ProcessedChunk.prototype.component3 = function () {
    return this.extra;
  };
  WAV$ProcessedChunk.prototype.copy_rxnnyd$ = function (type, data, extra) {
    return new WAV$ProcessedChunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data, extra === void 0 ? this.extra : extra);
  };
  WAV$ProcessedChunk.prototype.toString = function () {
    return 'ProcessedChunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  WAV$ProcessedChunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  WAV$ProcessedChunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.extra, other.extra)))));
  };
  function WAV$tryReadInfo$lambda(it) {
    return Unit;
  }
  function Coroutine$tryReadInfo_yt2zhq$$default_2($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_yt2zhq$$default_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_yt2zhq$$default_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_yt2zhq$$default_2.prototype.constructor = Coroutine$tryReadInfo_yt2zhq$$default_2;
  Coroutine$tryReadInfo_yt2zhq$$default_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$tryReadInfo$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WAV.prototype.tryReadInfo_yt2zhq$$default = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_yt2zhq$$default_2(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$decodeStream$lambda(closure$fmt, closure$buffer) {
    return function (it) {
      var extra = it.extra;
      if (Kotlin.isType(extra, WAV$Fmt))
        closure$fmt.v = extra;
      if (equals(it.type, 'data'))
        closure$buffer.v = it.data;
      return Unit;
    };
  }
  function Coroutine$decodeStream_yt2zhq$$default_0($this, data_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$fmt = void 0;
    this.local$buffer = void 0;
    this.local$data = data_0;
    this.local$props = props_0;
  }
  Coroutine$decodeStream_yt2zhq$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_yt2zhq$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_yt2zhq$$default_0.prototype.constructor = Coroutine$decodeStream_yt2zhq$$default_0;
  Coroutine$decodeStream_yt2zhq$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = {v: new WAV$Fmt()};
            this.local$buffer = {v: toAsync(MemorySyncStream_0())};
            this.state_0 = 2;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$decodeStream$lambda(this.local$fmt, this.local$buffer), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.local$fmt.v;
            this.local$tmp$_0 = this.local$buffer.v;
            this.state_0 = 3;
            this.result_0 = this.local$buffer.v.getLength(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return new WAV$WavAudioStream(this.local$tmp$, this.local$tmp$_0, this.result_0, this.local$data, this.local$props);
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
  WAV.prototype.decodeStream_yt2zhq$$default = function (data_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_yt2zhq$$default_0(this, data_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$WavAudioStream(fmt, buffer, bufferLength, data, props) {
    AudioStream.call(this, fmt.samplesPerSec, fmt.channels);
    this.fmt = fmt;
    this.buffer = buffer;
    this.bufferLength = bufferLength;
    this.data = data;
    this.props = props;
    this.bytesPerSample = this.fmt.bytesPerSample;
    this.finished_c0f29n$_0 = false;
  }
  Object.defineProperty(WAV$WavAudioStream.prototype, 'finished', {
    get: function () {
      return this.finished_c0f29n$_0;
    },
    set: function (finished) {
      this.finished_c0f29n$_0 = finished;
    }
  });
  Object.defineProperty(WAV$WavAudioStream.prototype, 'totalLengthInSamples', {
    get: function () {
      return this.bufferLength.div(Kotlin.Long.fromInt(this.bytesPerSample));
    }
  });
  Object.defineProperty(WAV$WavAudioStream.prototype, 'currentPositionInSamples', {
    get: function () {
      return this.buffer.position.div(Kotlin.Long.fromInt(this.bytesPerSample));
    },
    set: function (value) {
      this.finished = false;
      this.buffer.position = value.multiply(Kotlin.Long.fromInt(this.bytesPerSample));
    }
  });
  function Coroutine$read_trriok$($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bytes = void 0;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$.prototype.constructor = Coroutine$read_trriok$;
  Coroutine$read_trriok$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = readBytesUpTo(this.$this.buffer, Kotlin.imul(Kotlin.imul(this.local$length, this.$this.bytesPerSample), this.$this.channels), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$bytes = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.buffer.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.finished = this.result_0;
            var availableSamples = (this.local$bytes.length / this.$this.bytesPerSample | 0) / this.$this.channels | 0;
            tmp$ = this.$this.channels;
            for (var channel = 0; channel < tmp$; channel++) {
              switch (this.$this.bytesPerSample) {
                case 1:
                  var bytesPerSample = this.$this.bytesPerSample;
                  var increment = Kotlin.imul(this.$this.channels, bytesPerSample);
                  var index = Kotlin.imul(channel, bytesPerSample);
                  var outc = this.local$out.get_za3lpa$(channel);
                  for (var n = 0; n < availableSamples; n++) {
                    outc[this.local$offset + n | 0] = toShort((readU8_0(this.local$bytes, index) - 128 | 0) * 255 | 0);
                    index = index + increment | 0;
                  }

                  break;
                case 2:
                  var bytesPerSample_0 = this.$this.bytesPerSample;
                  var increment_0 = Kotlin.imul(this.$this.channels, bytesPerSample_0);
                  var index_0 = Kotlin.imul(channel, bytesPerSample_0);
                  var outc_0 = this.local$out.get_za3lpa$(channel);
                  for (var n_0 = 0; n_0 < availableSamples; n_0++) {
                    outc_0[this.local$offset + n_0 | 0] = toShort(readS16LE(this.local$bytes, index_0));
                    index_0 = index_0 + increment_0 | 0;
                  }

                  break;
                case 3:
                  var bytesPerSample_1 = this.$this.bytesPerSample;
                  var increment_1 = Kotlin.imul(this.$this.channels, bytesPerSample_1);
                  var index_1 = Kotlin.imul(channel, bytesPerSample_1);
                  var outc_1 = this.local$out.get_za3lpa$(channel);
                  for (var n_1 = 0; n_1 < availableSamples; n_1++) {
                    outc_1[this.local$offset + n_1 | 0] = toShort(readS24LE(this.local$bytes, index_1) >>> 8);
                    index_1 = index_1 + increment_1 | 0;
                  }

                  break;
                default:invalidOp('Unsupported bytesPerSample=' + this.$this.bytesPerSample);
                  break;
              }
            }

            return availableSamples;
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
  WAV$WavAudioStream.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$clone($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$clone.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$clone.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$clone.prototype.constructor = Coroutine$clone;
  Coroutine$clone.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = (new WAV()).decodeStream_yt2zhq$(this.$this.data.duplicate(), this.$this.props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return ensureNotNull(this.result_0);
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
  WAV$WavAudioStream.prototype.clone = function (continuation_0, suspended) {
    var instance = new Coroutine$clone(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV$WavAudioStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WavAudioStream',
    interfaces: [AudioStream]
  };
  WAV.prototype.readBlock_uku4u4$ = defineInlineFunction('korau-root-korau.com.soywiz.korau.format.WAV.readBlock_uku4u4$', function (channel, channels, availableSamples, bytesPerSample, out, offset, read) {
    var increment = Kotlin.imul(channels, bytesPerSample);
    var index = Kotlin.imul(channel, bytesPerSample);
    var outc = out.get_za3lpa$(channel);
    for (var n = 0; n < availableSamples; n++) {
      outc[offset + n | 0] = read(index);
      index = index + increment | 0;
    }
  });
  function Coroutine$encode_ovnsdg$$default($this, data_0, out_0, filename_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$out = out_0;
  }
  Coroutine$encode_ovnsdg$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encode_ovnsdg$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encode_ovnsdg$$default.prototype.constructor = Coroutine$encode_ovnsdg$$default;
  Coroutine$encode_ovnsdg$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = writeString(this.local$out, 'RIFF', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = write32LE(this.local$out, 36 + (this.local$data.samples.size * 2 | 0) | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeString(this.local$out, 'WAVE', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = writeString(this.local$out, 'fmt ', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = write32LE(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = write16LE(this.local$out, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = write16LE(this.local$out, this.local$data.channels, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = write32LE(this.local$out, this.local$data.rate, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = write32LE(this.local$out, Kotlin.imul(this.local$data.rate, this.local$data.channels) * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = write16LE(this.local$out, 2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = write16LE(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = writeString(this.local$out, 'data', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = write32LE(this.local$out, this.local$data.samples.size * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.state_0 = 15;
            this.result_0 = writeShortArrayLE(this.local$out, interleaved(this.local$data.samples).data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
            return;
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
  WAV.prototype.encode_ovnsdg$$default = function (data_0, out_0, filename_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$encode_ovnsdg$$default(this, data_0, out_0, filename_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$Fmt(formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    if (formatTag === void 0)
      formatTag = -1;
    if (channels === void 0)
      channels = 2;
    if (samplesPerSec === void 0)
      samplesPerSec = 44100;
    if (avgBytesPerSec === void 0)
      avgBytesPerSec = L0;
    if (blockAlign === void 0)
      blockAlign = 0;
    if (bitsPerSample === void 0)
      bitsPerSample = 0;
    this.formatTag = formatTag;
    this.channels = channels;
    this.samplesPerSec = samplesPerSec;
    this.avgBytesPerSec = avgBytesPerSec;
    this.blockAlign = blockAlign;
    this.bitsPerSample = bitsPerSample;
  }
  Object.defineProperty(WAV$Fmt.prototype, 'bytesPerSample', {
    get: function () {
      return this.bitsPerSample / 8 | 0;
    }
  });
  WAV$Fmt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fmt',
    interfaces: []
  };
  WAV$Fmt.prototype.component1 = function () {
    return this.formatTag;
  };
  WAV$Fmt.prototype.component2 = function () {
    return this.channels;
  };
  WAV$Fmt.prototype.component3 = function () {
    return this.samplesPerSec;
  };
  WAV$Fmt.prototype.component4 = function () {
    return this.avgBytesPerSec;
  };
  WAV$Fmt.prototype.component5 = function () {
    return this.blockAlign;
  };
  WAV$Fmt.prototype.component6 = function () {
    return this.bitsPerSample;
  };
  WAV$Fmt.prototype.copy_9l942n$ = function (formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    return new WAV$Fmt(formatTag === void 0 ? this.formatTag : formatTag, channels === void 0 ? this.channels : channels, samplesPerSec === void 0 ? this.samplesPerSec : samplesPerSec, avgBytesPerSec === void 0 ? this.avgBytesPerSec : avgBytesPerSec, blockAlign === void 0 ? this.blockAlign : blockAlign, bitsPerSample === void 0 ? this.bitsPerSample : bitsPerSample);
  };
  WAV$Fmt.prototype.toString = function () {
    return 'Fmt(formatTag=' + Kotlin.toString(this.formatTag) + (', channels=' + Kotlin.toString(this.channels)) + (', samplesPerSec=' + Kotlin.toString(this.samplesPerSec)) + (', avgBytesPerSec=' + Kotlin.toString(this.avgBytesPerSec)) + (', blockAlign=' + Kotlin.toString(this.blockAlign)) + (', bitsPerSample=' + Kotlin.toString(this.bitsPerSample)) + ')';
  };
  WAV$Fmt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.formatTag) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.avgBytesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitsPerSample) | 0;
    return result;
  };
  WAV$Fmt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.formatTag, other.formatTag) && Kotlin.equals(this.channels, other.channels) && Kotlin.equals(this.samplesPerSec, other.samplesPerSec) && Kotlin.equals(this.avgBytesPerSec, other.avgBytesPerSec) && Kotlin.equals(this.blockAlign, other.blockAlign) && Kotlin.equals(this.bitsPerSample, other.bitsPerSample)))));
  };
  function Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fmt = closure$fmt_0;
    this.local$closure$dataSize = closure$dataSize_0;
    this.local$closure$handle = closure$handle_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$d = void 0;
    this.local$cdata = void 0;
    this.local$tmp$_5 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WAV$parse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WAV$parse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WAV$parse$lambda.prototype.constructor = Coroutine$WAV$parse$lambda;
  Coroutine$WAV$parse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var type = this.local$$receiver.component1()
            , d2 = this.local$$receiver.component2();
            this.local$d = d2.duplicate();
            this.local$cdata = Unit;
            switch (type) {
              case 'fmt ':
                this.local$tmp$ = this.local$closure$fmt;
                this.state_0 = 3;
                this.result_0 = readS16LE_0(this.local$d, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'data':
                this.local$tmp$_5 = this.local$closure$dataSize.v;
                this.state_0 = 2;
                this.result_0 = this.local$d.getLength(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:this.state_0 = 9;
                continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$dataSize.v = this.local$tmp$_5.add(this.result_0);
            this.local$cdata = this.local$d;
            this.state_0 = 9;
            continue;
          case 3:
            this.local$tmp$.formatTag = this.result_0;
            this.local$tmp$_0 = this.local$closure$fmt;
            this.state_0 = 4;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.channels = this.result_0;
            this.local$tmp$_1 = this.local$closure$fmt;
            this.state_0 = 5;
            this.result_0 = readS32LE(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_1.samplesPerSec = this.result_0;
            this.local$tmp$_2 = this.local$closure$fmt;
            this.state_0 = 6;
            this.result_0 = readU32LE(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_2.avgBytesPerSec = this.result_0;
            this.local$tmp$_3 = this.local$closure$fmt;
            this.state_0 = 7;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_3.blockAlign = this.result_0;
            this.local$tmp$_4 = this.local$closure$fmt;
            this.state_0 = 8;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_4.bitsPerSample = this.result_0;
            this.local$cdata = this.local$closure$fmt;
            this.state_0 = 9;
            continue;
          case 9:
            return this.local$closure$handle(new WAV$ProcessedChunk(this.local$$receiver.type, this.local$$receiver.data, this.local$cdata));
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
  function WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$parse_phffkd$($this, data_0, handle_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$dataSize = void 0;
    this.local$data = data_0;
    this.local$handle = handle_0;
  }
  Coroutine$parse_phffkd$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_phffkd$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_phffkd$.prototype.constructor = Coroutine$parse_phffkd$;
  Coroutine$parse_phffkd$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = new WAV$Fmt();
            this.local$dataSize = {v: L0};
            this.state_0 = 2;
            this.result_0 = this.$this.riff_9bjwaz$(this.local$data, WAV$parse$lambda(this.local$fmt, this.local$dataSize, this.local$handle), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$fmt.formatTag < 0)
              invalidOp("Couldn't find RIFF 'fmt ' chunk");
            var $receiver_0 = numberToDouble(this.local$dataSize.v.multiply(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000)).div(this.local$fmt.avgBytesPerSec));
            return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$($receiver_0), this.local$fmt.channels);
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
  WAV.prototype.parse_phffkd$ = function (data_0, handle_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_phffkd$(this, data_0, handle_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$riff_9bjwaz$($this, data_0, handler_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$s2 = void 0;
    this.local$magic = void 0;
    this.local$length = void 0;
    this.local$s = void 0;
    this.local$type = void 0;
    this.local$size = void 0;
    this.local$data = data_0;
    this.local$handler = handler_0;
  }
  Coroutine$riff_9bjwaz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$riff_9bjwaz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$riff_9bjwaz$.prototype.constructor = Coroutine$riff_9bjwaz$;
  Coroutine$riff_9bjwaz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$s2 = this.local$data.duplicate();
            this.state_0 = 2;
            this.result_0 = this.local$s2.getAvailable(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.result_0.toNumber() < 12) {
              throw IllegalStateException_init('Not enough data for a RIFF file'.toString());
            }
            this.state_0 = 3;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$magic = this.result_0;
            this.state_0 = 4;
            this.result_0 = readS32LE(this.local$s2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$length = this.result_0;
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var magic2 = this.result_0;
            if (!equals(this.local$magic, 'RIFF'))
              invalidAudioFormat("Not a RIFF file but '" + this.local$magic + "'");
            if (!equals(magic2, 'WAVE'))
              invalidAudioFormat('Not a RIFF + WAVE file');
            this.state_0 = 6;
            this.result_0 = readStream(this.local$s2, this.local$length - 4 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$s = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.local$s.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            if (!!this.result_0) {
              this.state_0 = 18;
              continue;
            } else {
              this.state_0 = 9;
              continue;
            }

          case 9:
            this.state_0 = 10;
            this.result_0 = this.local$s.getAvailable(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            if (this.result_0.compareTo_11rb$(L8) < 0) {
              this.state_0 = 18;
              continue;
            } else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            this.state_0 = 12;
            this.result_0 = readString_0(this.local$s, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.local$type = this.result_0;
            this.state_0 = 13;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$size = this.result_0;
            this.state_0 = 14;
            this.result_0 = this.local$s.getAvailable(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            if (this.result_0.toNumber() < this.local$size) {
              this.state_0 = 18;
              continue;
            } else {
              this.state_0 = 15;
              continue;
            }

          case 15:
            this.state_0 = 16;
            this.result_0 = readStream(this.local$s, this.local$size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            var d = this.result_0;
            this.state_0 = 17;
            this.result_0 = this.local$handler(new WAV$Chunk(this.local$type, d), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.state_0 = 7;
            continue;
          case 18:
            return;
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
  WAV.prototype.riff_9bjwaz$ = function (data_0, handler_0, continuation_0, suspended) {
    var instance = new Coroutine$riff_9bjwaz$(this, data_0, handler_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WAV',
    interfaces: [AudioFormat]
  };
  function Coroutine$toWav$lambda(this$toWav_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$toWav = this$toWav_0;
  }
  Coroutine$toWav$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toWav$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toWav$lambda.prototype.constructor = Coroutine$toWav$lambda;
  Coroutine$toWav$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = WAV$Companion_getInstance().encodeToByteArray_1hptbf$(this.local$this$toWav, void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function toWav$lambda(this$toWav_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$toWav$lambda(this$toWav_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toWav($receiver) {
    return runBlockingNoSuspensions(toWav$lambda($receiver));
  }
  var arraycopy$lambda = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function JavaMp3Decoder() {
    JavaMp3Decoder_instance = this;
    this.INV_SQUARE_2_8be2vx$ = 0.70710677;
    this.BITRATE_LAYER_I_8be2vx$ = new Int32Array([0, 32000, 64000, 96000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 352000, 384000, 416000, 448000]);
    this.BITRATE_LAYER_II_8be2vx$ = new Int32Array([0, 32000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000, 384000]);
    this.BITRATE_LAYER_III_8be2vx$ = new Int32Array([0, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000]);
    this.SAMPLING_FREQUENCY_8be2vx$ = new Int32Array([44100, 48000, 32000]);
    this.SCALEFACTORS_8be2vx$ = new Float32Array([2.0, 1.587401, 1.2599211, 1.0, 0.7937005, 0.62996054, 0.5, 0.39685026, 0.31498027, 0.25, 0.19842513, 0.15749013, 0.125, 0.099212565, 0.07874507, 0.0625, 0.049606282, 0.039372534, 0.03125, 0.024803141, 0.019686267, 0.015625, 0.012401571, 0.009843133, 0.0078125, 0.0062007853, 0.0049215667, 0.00390625, 0.0031003926, 0.0024607833, 0.001953125, 0.0015501963, 0.0012303917, 9.765625E-4, 7.7509816E-4, 6.1519584E-4, 4.8828125E-4, 3.8754908E-4, 3.0759792E-4, 2.4414062E-4, 1.9377454E-4, 1.5379896E-4, 1.2207031E-4, 9.688727E-5, 7.689948E-5, 6.1035156E-5, 4.8443635E-5, 3.844974E-5, 3.0517578E-5, 2.4221818E-5, 1.922487E-5, 1.5258789E-5, 1.2110909E-5, 9.612435E-6, 7.6293945E-6, 6.0554544E-6, 4.8062175E-6, 3.8146973E-6, 3.0277272E-6, 2.4031087E-6, 1.9073486E-6, 1.5138636E-6, 1.2015544E-6, 0.0]);
    this.SCALEFACTOR_SIZES_LAYER_III_8be2vx$ = new Int32Array([0, 0, 0, 1, 0, 2, 0, 3, 3, 0, 1, 1, 1, 2, 1, 3, 2, 1, 2, 2, 2, 3, 3, 1, 3, 2, 3, 3, 4, 2, 4, 3]);
    this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$ = new Int32Array([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 52, 62, 74, 90, 110, 134, 162, 196, 238, 288, 342, 418, 576, 0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106, 136, 192, 0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50, 60, 72, 88, 106, 128, 156, 190, 230, 276, 330, 384, 576, 0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100, 126, 192, 0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 54, 66, 82, 102, 126, 156, 194, 240, 296, 364, 448, 550, 576, 0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138, 180, 192]);
    this.CS_ALIASING_LAYER_III_8be2vx$ = new Float32Array([0.857493, 0.881742, 0.949629, 0.983315, 0.995518, 0.999161, 0.999899, 0.999993]);
    this.CA_ALIASING_LAYER_III_8be2vx$ = new Float32Array([-0.514496, -0.471732, -0.313377, -0.181913, -0.094574, -0.040966, -0.014199, -0.0037]);
    var array = new Float32Array(8207);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = this.pow_0(i, 4.0 / 3.0);
    }
    this.POWTAB_LAYER_III_8be2vx$ = array;
    var array_0 = new Float32Array(6);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      var x = i_0 * math.PI / 12.0;
      array_0[i_0] = Math_0.tan(x);
    }
    this.IS_RATIOS_LAYER_III_8be2vx$ = array_0;
    var $receiver = new Float32Array(144);
    for (var i_1 = 0; i_1 <= 35; i_1++) {
      var x_0 = math.PI / 36 * (i_1 + 0.5);
      $receiver[0 + i_1 | 0] = Math_0.sin(x_0);
    }
    for (var i_2 = 0; i_2 <= 17; i_2++) {
      var x_1 = math.PI / 36 * (i_2 + 0.5);
      $receiver[36 + i_2 | 0] = Math_0.sin(x_1);
    }
    for (var i_3 = 18; i_3 <= 23; i_3++)
      $receiver[36 + i_3 | 0] = 1.0;
    for (var i_4 = 24; i_4 <= 29; i_4++) {
      var x_2 = math.PI / 12 * (i_4 + 0.5 - 18.0);
      $receiver[36 + i_4 | 0] = Math_0.sin(x_2);
    }
    for (var i_5 = 0; i_5 <= 11; i_5++) {
      var x_3 = math.PI / 12 * (i_5 + 0.5);
      $receiver[72 + i_5 | 0] = Math_0.sin(x_3);
    }
    for (var i_6 = 6; i_6 <= 11; i_6++) {
      var x_4 = math.PI / 12 * (i_6 + 0.5 - 6.0);
      $receiver[108 + i_6 | 0] = Math_0.sin(x_4);
    }
    for (var i_7 = 12; i_7 <= 17; i_7++)
      $receiver[108 + i_7 | 0] = 1.0;
    for (var i_8 = 18; i_8 <= 35; i_8++) {
      var x_5 = math.PI / 36 * (i_8 + 0.5);
      $receiver[108 + i_8 | 0] = Math_0.sin(x_5);
    }
    this.IMDCT_WINDOW_LAYER_III_8be2vx$ = $receiver;
    var array_1 = new Float32Array(16);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_9 = 0; i_9 <= tmp$_1; i_9++) {
      var pow = 1 << numberToInt(i_9);
      array_1[i_9] = pow / (pow - 1);
    }
    this.PRE_FRACTOR_LAYER_I_8be2vx$ = array_1;
    var $receiver_0 = new Float32Array(2048);
    for (var i_10 = 0; i_10 <= 63; i_10++) {
      for (var k = 0; k <= 31; k++) {
        var x_6 = Kotlin.imul(16 + i_10 | 0, (2 * k | 0) + 1 | 0) * math.PI / 64;
        var value = 1.0E9 * Math_0.cos(x_6);
        if (value >= 0) {
          value = value + 0.5;
        } else {
          value = value - 0.5;
        }
        $receiver_0[(i_10 * 32 | 0) + k | 0] = value * 1.0E-9;
      }
    }
    this.NIK_COEFFICIENTS_8be2vx$ = $receiver_0;
    var $receiver_1 = new Float32Array(2048);
    for (var i_11 = 0; i_11 <= 63; i_11++) {
      for (var j = 0; j <= 31; j++) {
        var x_7 = Kotlin.imul(16 + i_11 | 0, (2 * j | 0) + 1 | 0) * math.PI / 64.0;
        $receiver_1[(i_11 * 32 | 0) + j | 0] = Math_0.cos(x_7);
      }
    }
    this.SYNTH_WINDOW_TABLE_LAYER_III_8be2vx$ = $receiver_1;
    this.DI_COEFFICIENTS_8be2vx$ = new Float32Array([0.0, -1.5259E-5, -1.5259E-5, -1.5259E-5, -1.5259E-5, -1.5259E-5, -1.5259E-5, -3.0518E-5, -3.0518E-5, -3.0518E-5, -3.0518E-5, -4.5776E-5, -4.5776E-5, -6.1035E-5, -6.1035E-5, -7.6294E-5, -7.6294E-5, -9.1553E-5, -1.06812E-4, -1.06812E-4, -1.2207E-4, -1.37329E-4, -1.52588E-4, -1.67847E-4, -1.98364E-4, -2.13623E-4, -2.44141E-4, -2.59399E-4, -2.89917E-4, -3.20435E-4, -3.66211E-4, -3.96729E-4, -4.42505E-4, -4.73022E-4, -5.34058E-4, -5.79834E-4, -6.2561E-4, -6.86646E-4, -7.47681E-4, -8.08716E-4, -8.8501E-4, -9.61304E-4, -0.001037598, -0.001113892, -0.001205444, -0.001296997, -0.00138855, -0.001480103, -0.001586914, -0.001693726, -0.001785278, -0.001907349, -0.00201416, -0.002120972, -0.002243042, -0.002349854, -0.002456665, -0.002578735, -0.002685547, -0.002792358, -0.00289917, -0.002990723, -0.003082275, -0.003173828, 0.003250122, 0.003326416, 0.003387451, 0.003433228, 0.003463745, 0.003479004, 0.003479004, 0.003463745, 0.003417969, 0.003372192, 0.00328064, 0.003173828, 0.003051758, 0.002883911, 0.002700806, 0.002487183, 0.002227783, 0.001937866, 0.001617432, 0.001266479, 8.69751E-4, 4.42505E-4, -3.0518E-5, -5.49316E-4, -0.001098633, -0.001693726, -0.002334595, -0.003005981, -0.003723145, -0.004486084, -0.0052948, -0.006118774, -0.007003784, -0.007919312, -0.008865356, -0.009841919, -0.010848999, -0.011886597, -0.012939453, -0.014022827, -0.01512146, -0.016235352, -0.017349243, -0.018463135, -0.019577026, -0.020690918, -0.02178955, -0.022857666, -0.023910522, -0.024932861, -0.025909424, -0.02684021, -0.02772522, -0.028533936, -0.029281616, -0.029937744, -0.030532837, -0.03100586, -0.03138733, -0.031661987, -0.031814575, -0.031845093, -0.03173828, -0.03147888, 0.031082153, 0.030517578, 0.029785156, 0.028884888, 0.027801514, 0.026535034, 0.02508545, 0.023422241, 0.021575928, 0.01953125, 0.01725769, 0.014801025, 0.012115479, 0.009231567, 0.006134033, 0.002822876, -6.86646E-4, -0.004394531, -0.00831604, -0.012420654, -0.016708374, -0.0211792, -0.025817871, -0.03060913, -0.03555298, -0.040634155, -0.045837402, -0.051132202, -0.056533813, -0.06199646, -0.06752014, -0.07305908, -0.07862854, -0.08418274, -0.08970642, -0.09516907, -0.10054016, -0.1058197, -0.110946655, -0.11592102, -0.12069702, -0.1252594, -0.12956238, -0.1335907, -0.13729858, -0.14067078, -0.14367676, -0.1462555, -0.14842224, -0.15011597, -0.15130615, -0.15196228, -0.15206909, -0.15159607, -0.15049744, -0.1487732, -0.1463623, -0.14326477, -0.13945007, -0.1348877, -0.12957764, -0.12347412, -0.11657715, -0.1088562, 0.10031128, 0.090927124, 0.08068848, 0.06959534, 0.057617188, 0.044784546, 0.031082153, 0.01651001, 0.001068115, -0.015228271, -0.03237915, -0.050354004, -0.06916809, -0.088775635, -0.10916138, -0.13031006, -0.15220642, -0.17478943, -0.19805908, -0.22198486, -0.24650574, -0.2715912, -0.2972107, -0.32331848, -0.34986877, -0.37680054, -0.40408325, -0.43165588, -0.45947266, -0.48747253, -0.51560974, -0.54382324, -0.57203674, -0.6002197, -0.6282959, -0.6562195, -0.6839142, -0.71131897, -0.7383728, -0.7650299, -0.791214, -0.816864, -0.84194946, -0.8663635, -0.89009094, -0.9130554, -0.9351959, -0.95648193, -0.9768524, -0.99624634, -1.0146179, -1.0319366, -1.0481567, -1.0632172, -1.0771179, -1.0897827, -1.1012115, -1.1113739, -1.120224, -1.1277466, -1.1339264, -1.1387634, -1.1422119, -1.1442871, 1.144989, 1.1442871, 1.1422119, 1.1387634, 1.1339264, 1.1277466, 1.120224, 1.1113739, 1.1012115, 1.0897827, 1.0771179, 1.0632172, 1.0481567, 1.0319366, 1.0146179, 0.99624634, 0.9768524, 0.95648193, 0.9351959, 0.9130554, 0.89009094, 0.8663635, 0.84194946, 0.816864, 0.791214, 0.7650299, 0.7383728, 0.71131897, 0.6839142, 0.6562195, 0.6282959, 0.6002197, 0.57203674, 0.54382324, 0.51560974, 0.48747253, 0.45947266, 0.43165588, 0.40408325, 0.37680054, 0.34986877, 0.32331848, 0.2972107, 0.2715912, 0.24650574, 0.22198486, 0.19805908, 0.17478943, 0.15220642, 0.13031006, 0.10916138, 0.088775635, 0.06916809, 0.050354004, 0.03237915, 0.015228271, -0.001068115, -0.01651001, -0.031082153, -0.044784546, -0.057617188, -0.06959534, -0.08068848, -0.090927124, 0.10031128, 0.1088562, 0.11657715, 0.12347412, 0.12957764, 0.1348877, 0.13945007, 0.14326477, 0.1463623, 0.1487732, 0.15049744, 0.15159607, 0.15206909, 0.15196228, 0.15130615, 0.15011597, 0.14842224, 0.1462555, 0.14367676, 0.14067078, 0.13729858, 0.1335907, 0.12956238, 0.1252594, 0.12069702, 0.11592102, 0.110946655, 0.1058197, 0.10054016, 0.09516907, 0.08970642, 0.08418274, 0.07862854, 0.07305908, 0.06752014, 0.06199646, 0.056533813, 0.051132202, 0.045837402, 0.040634155, 0.03555298, 0.03060913, 0.025817871, 0.0211792, 0.016708374, 0.012420654, 0.00831604, 0.004394531, 6.86646E-4, -0.002822876, -0.006134033, -0.009231567, -0.012115479, -0.014801025, -0.01725769, -0.01953125, -0.021575928, -0.023422241, -0.02508545, -0.026535034, -0.027801514, -0.028884888, -0.029785156, -0.030517578, 0.031082153, 0.03147888, 0.03173828, 0.031845093, 0.031814575, 0.031661987, 0.03138733, 0.03100586, 0.030532837, 0.029937744, 0.029281616, 0.028533936, 0.02772522, 0.02684021, 0.025909424, 0.024932861, 0.023910522, 0.022857666, 0.02178955, 0.020690918, 0.019577026, 0.018463135, 0.017349243, 0.016235352, 0.01512146, 0.014022827, 0.012939453, 0.011886597, 0.010848999, 0.009841919, 0.008865356, 0.007919312, 0.007003784, 0.006118774, 0.0052948, 0.004486084, 0.003723145, 0.003005981, 0.002334595, 0.001693726, 0.001098633, 5.49316E-4, 3.0518E-5, -4.42505E-4, -8.69751E-4, -0.001266479, -0.001617432, -0.001937866, -0.002227783, -0.002487183, -0.002700806, -0.002883911, -0.003051758, -0.003173828, -0.00328064, -0.003372192, -0.003417969, -0.003463745, -0.003479004, -0.003479004, -0.003463745, -0.003433228, -0.003387451, -0.003326416, 0.003250122, 0.003173828, 0.003082275, 0.002990723, 0.00289917, 0.002792358, 0.002685547, 0.002578735, 0.002456665, 0.002349854, 0.002243042, 0.002120972, 0.00201416, 0.001907349, 0.001785278, 0.001693726, 0.001586914, 0.001480103, 0.00138855, 0.001296997, 0.001205444, 0.001113892, 0.001037598, 9.61304E-4, 8.8501E-4, 8.08716E-4, 7.47681E-4, 6.86646E-4, 6.2561E-4, 5.79834E-4, 5.34058E-4, 4.73022E-4, 4.42505E-4, 3.96729E-4, 3.66211E-4, 3.20435E-4, 2.89917E-4, 2.59399E-4, 2.44141E-4, 2.13623E-4, 1.98364E-4, 1.67847E-4, 1.52588E-4, 1.37329E-4, 1.2207E-4, 1.06812E-4, 1.06812E-4, 9.1553E-5, 7.6294E-5, 7.6294E-5, 6.1035E-5, 6.1035E-5, 4.5776E-5, 4.5776E-5, 3.0518E-5, 3.0518E-5, 3.0518E-5, 3.0518E-5, 1.5259E-5, 1.5259E-5, 1.5259E-5, 1.5259E-5, 1.5259E-5, 1.5259E-5]);
    this.SHIFT_ENDIANESS_8be2vx$ = new Int32Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    this.SB_LIMIT_8be2vx$ = new Int32Array([27, 30, 8, 12]);
    this.NBAL_8be2vx$ = [new Int32Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2]), new Int32Array([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2]), new Int32Array([4, 4, 3, 3, 3, 3, 3, 3]), new Int32Array([4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])];
    this.QUANTIZATION_INDEX_LAYER_II_8be2vx$ = [[new Int32Array([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), new Int32Array([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), new Int32Array([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16])], [new Int32Array([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), new Int32Array([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), new Int32Array([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 2, 3, 4, 5, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16]), new Int32Array([0, 1, 16])], [new Int32Array([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), new Int32Array([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7])], [new Int32Array([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), new Int32Array([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7]), new Int32Array([0, 1, 3, 4, 5, 6, 7])]];
    this.NLEVELS_8be2vx$ = new Int32Array([3, 5, 7, 9, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
    this.C_LAYER_II_8be2vx$ = new Float32Array([1.3333334, 1.6, 1.1428572, 1.7777778, 1.0666667, 1.032258, 1.0158731, 1.007874, 1.0039216, 1.0019569, 1.0009775, 1.0004885, 1.0002443, 1.0001221, 1.000061, 1.0000305, 1.0000153]);
    this.D_LAYER_II_8be2vx$ = new Float32Array([0.5, 0.5, 0.25, 0.5, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125, 0.00390625, 0.001953125, 9.765625E-4, 4.8828125E-4, 2.4414062E-4, 1.2207031E-4, 6.103516E-5, 3.051758E-5]);
    this.GROUPING_LAYER_II_8be2vx$ = Kotlin.booleanArrayOf(true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false);
    this.BITS_LAYER_II_8be2vx$ = new Int32Array([5, 7, 3, 10, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    this.HUFFMAN_TABLE_LAYER_III_8be2vx$ = new Int32Array([513, 0, 513, 16, 513, 1, 17, 513, 0, 1025, 513, 16, 1, 513, 17, 1025, 513, 32, 33, 513, 18, 513, 2, 34, 1025, 513, 0, 1, 513, 17, 513, 16, 1025, 513, 32, 33, 513, 18, 513, 2, 34, 513, 0, 1025, 513, 16, 1, 513, 17, 2049, 1025, 513, 32, 2, 513, 33, 18, 2049, 1025, 513, 34, 48, 513, 3, 19, 513, 49, 513, 50, 513, 35, 51, 1537, 1025, 513, 0, 16, 17, 1537, 513, 1, 513, 32, 33, 1537, 513, 18, 513, 2, 34, 1025, 513, 49, 19, 1025, 513, 48, 50, 513, 35, 513, 3, 51, 513, 0, 1025, 513, 16, 1, 2049, 513, 17, 1025, 513, 32, 2, 33, 4609, 1537, 513, 18, 513, 34, 48, 1025, 513, 49, 19, 1025, 513, 3, 50, 513, 35, 4, 2561, 1025, 513, 64, 65, 513, 20, 513, 66, 36, 3073, 1537, 1025, 513, 51, 67, 80, 1025, 513, 52, 5, 81, 1537, 513, 21, 513, 82, 37, 1025, 513, 68, 53, 1025, 513, 83, 84, 513, 69, 85, 1537, 513, 0, 513, 16, 1, 513, 17, 1025, 513, 33, 18, 3585, 1025, 513, 32, 2, 513, 34, 1025, 513, 48, 3, 513, 49, 19, 3585, 2049, 1025, 513, 50, 35, 513, 64, 4, 513, 65, 513, 20, 66, 3073, 1537, 513, 36, 513, 51, 80, 1025, 513, 67, 52, 81, 1537, 513, 21, 513, 5, 82, 1537, 513, 37, 513, 68, 53, 513, 83, 513, 69, 513, 84, 85, 2049, 1025, 513, 0, 16, 513, 1, 17, 2561, 1025, 513, 32, 33, 513, 18, 513, 2, 34, 3073, 1537, 1025, 513, 48, 3, 49, 513, 19, 513, 50, 35, 3073, 1025, 513, 65, 20, 1025, 513, 64, 51, 513, 66, 36, 2561, 1537, 1025, 513, 4, 80, 67, 513, 52, 81, 2049, 1025, 513, 21, 82, 513, 37, 68, 1537, 1025, 513, 5, 84, 83, 513, 53, 513, 69, 85, 513, 0, 1025, 513, 16, 1, 2561, 513, 17, 1025, 513, 32, 2, 513, 33, 18, 7169, 2049, 1025, 513, 34, 48, 513, 49, 19, 2049, 1025, 513, 3, 50, 513, 35, 64, 1025, 513, 65, 20, 1025, 513, 4, 51, 513, 66, 36, 7169, 2561, 1537, 1025, 513, 80, 5, 96, 513, 97, 22, 3073, 1537, 1025, 513, 67, 52, 81, 513, 21, 513, 82, 37, 1025, 513, 38, 54, 113, 5121, 2049, 513, 23, 1025, 513, 68, 83, 6, 1537, 1025, 513, 53, 69, 98, 513, 112, 513, 7, 100, 3585, 1025, 513, 114, 39, 1537, 513, 99, 513, 84, 85, 513, 70, 115, 2049, 1025, 513, 55, 101, 513, 86, 116, 1537, 513, 71, 513, 102, 117, 1025, 513, 87, 118, 513, 103, 119, 1537, 513, 0, 513, 16, 1, 2049, 513, 17, 1025, 513, 32, 2, 18, 6145, 2049, 513, 33, 513, 34, 513, 48, 3, 1025, 513, 49, 19, 1025, 513, 50, 35, 1025, 513, 64, 4, 513, 65, 20, 7681, 4097, 2561, 1025, 513, 66, 36, 1025, 513, 51, 67, 80, 1025, 513, 52, 81, 97, 1537, 513, 22, 513, 6, 38, 513, 98, 513, 21, 513, 5, 82, 4097, 2561, 1537, 1025, 513, 37, 68, 96, 513, 99, 54, 1025, 513, 112, 23, 113, 4097, 1537, 1025, 513, 7, 100, 114, 513, 39, 1025, 513, 83, 53, 513, 84, 69, 2561, 1025, 513, 70, 115, 513, 55, 513, 101, 86, 2561, 1537, 1025, 513, 85, 87, 116, 513, 71, 102, 1025, 513, 117, 118, 513, 103, 119, 3073, 1025, 513, 16, 1, 513, 17, 513, 0, 513, 32, 2, 4097, 1025, 513, 33, 18, 1025, 513, 34, 49, 513, 19, 513, 48, 513, 3, 64, 6657, 2049, 1025, 513, 50, 35, 513, 65, 51, 2561, 1025, 513, 20, 66, 513, 36, 513, 4, 80, 1025, 513, 67, 52, 513, 81, 21, 7169, 3585, 2049, 1025, 513, 82, 37, 513, 83, 53, 1025, 513, 96, 22, 97, 1025, 513, 98, 38, 1537, 1025, 513, 5, 6, 68, 513, 84, 69, 4609, 2561, 1025, 513, 99, 54, 1025, 513, 112, 7, 113, 1025, 513, 23, 100, 513, 70, 114, 2561, 1537, 513, 39, 513, 85, 115, 513, 55, 86, 2049, 1025, 513, 101, 116, 513, 71, 102, 1025, 513, 117, 87, 513, 118, 513, 103, 119, 513, 0, 1537, 513, 16, 513, 1, 17, 7169, 2049, 1025, 513, 32, 2, 513, 33, 18, 2049, 1025, 513, 34, 48, 513, 3, 49, 1537, 513, 19, 513, 50, 35, 1025, 513, 64, 4, 65, 17921, 7169, 3585, 1537, 513, 20, 513, 51, 66, 1025, 513, 36, 80, 513, 67, 52, 1025, 513, 81, 21, 1025, 513, 5, 82, 513, 37, 513, 68, 83, 3585, 2049, 1025, 513, 96, 6, 513, 97, 22, 1025, 513, 128, 8, 129, 4097, 2049, 1025, 513, 53, 98, 513, 38, 84, 1025, 513, 69, 99, 513, 54, 112, 1537, 1025, 513, 7, 85, 113, 513, 23, 513, 39, 55, 18433, 6145, 3073, 1025, 513, 24, 130, 513, 40, 1025, 513, 100, 70, 114, 2049, 1025, 513, 132, 72, 513, 144, 9, 513, 145, 25, 6145, 3585, 2049, 1025, 513, 115, 101, 513, 86, 116, 1025, 513, 71, 102, 131, 1537, 513, 56, 513, 117, 87, 513, 146, 41, 3585, 2049, 1025, 513, 103, 133, 513, 88, 57, 513, 147, 513, 73, 134, 1537, 513, 160, 513, 104, 10, 513, 161, 26, 17409, 6145, 3073, 1025, 513, 162, 42, 1025, 513, 149, 89, 513, 163, 58, 2049, 1025, 513, 74, 150, 513, 176, 11, 513, 177, 27, 5121, 2049, 513, 178, 1025, 513, 118, 119, 148, 1537, 1025, 513, 135, 120, 164, 1025, 513, 105, 165, 43, 3073, 1537, 1025, 513, 90, 136, 179, 513, 59, 513, 121, 166, 1537, 1025, 513, 106, 180, 192, 1025, 513, 12, 152, 193, 15361, 5633, 2561, 1537, 513, 28, 513, 137, 181, 513, 91, 194, 1025, 513, 44, 60, 1025, 513, 182, 107, 513, 196, 76, 4097, 2049, 1025, 513, 168, 138, 513, 208, 13, 513, 209, 513, 75, 513, 151, 167, 3073, 1537, 513, 195, 513, 122, 153, 1025, 513, 197, 92, 183, 1025, 513, 29, 210, 513, 45, 513, 123, 211, 13313, 7169, 3073, 1025, 513, 61, 198, 1025, 513, 108, 169, 513, 154, 212, 2049, 1025, 513, 184, 139, 513, 77, 199, 1025, 513, 124, 213, 513, 93, 224, 2561, 1025, 513, 225, 30, 1025, 513, 14, 46, 226, 2049, 1025, 513, 227, 109, 513, 140, 228, 1025, 513, 229, 186, 240, 9729, 4097, 1025, 513, 241, 31, 1537, 1025, 513, 170, 155, 185, 513, 62, 513, 214, 200, 3073, 1537, 513, 78, 513, 215, 125, 513, 171, 513, 94, 201, 1537, 513, 15, 513, 156, 110, 513, 242, 47, 8193, 4097, 1537, 1025, 513, 216, 141, 63, 1537, 513, 243, 513, 230, 202, 513, 244, 79, 2049, 1025, 513, 187, 172, 513, 231, 245, 1025, 513, 217, 157, 513, 95, 232, 7681, 3073, 1537, 513, 111, 513, 246, 203, 1025, 513, 188, 173, 218, 2049, 513, 247, 1025, 513, 126, 127, 142, 1537, 1025, 513, 158, 174, 204, 513, 248, 143, 4609, 2049, 1025, 513, 219, 189, 513, 234, 249, 1025, 513, 159, 235, 513, 190, 513, 205, 250, 3585, 1025, 513, 221, 236, 1537, 1025, 513, 233, 175, 220, 513, 206, 251, 2049, 1025, 513, 191, 222, 513, 207, 238, 1025, 513, 223, 239, 513, 255, 513, 237, 513, 253, 513, 252, 254, 4097, 1537, 513, 0, 513, 16, 1, 513, 17, 1025, 513, 32, 2, 513, 33, 18, 12801, 4097, 1537, 513, 34, 513, 48, 49, 1537, 513, 19, 513, 3, 64, 513, 50, 35, 3585, 1537, 1025, 513, 4, 20, 65, 1025, 513, 51, 66, 513, 36, 67, 2561, 1537, 513, 52, 513, 80, 5, 513, 81, 21, 1025, 513, 82, 37, 1025, 513, 68, 83, 97, 23041, 9217, 4609, 2561, 1537, 513, 53, 513, 96, 6, 513, 22, 98, 1025, 513, 38, 84, 513, 69, 99, 2561, 1537, 513, 54, 513, 112, 7, 513, 113, 85, 1025, 513, 23, 100, 513, 114, 39, 6145, 4097, 2049, 1025, 513, 70, 115, 513, 55, 101, 1025, 513, 86, 128, 513, 8, 116, 1025, 513, 129, 24, 513, 130, 40, 4097, 2049, 1025, 513, 71, 102, 513, 131, 56, 1025, 513, 117, 87, 513, 132, 72, 1537, 1025, 513, 144, 25, 145, 1025, 513, 146, 118, 513, 103, 41, 23553, 9217, 4609, 2561, 1025, 513, 133, 88, 1025, 513, 9, 119, 147, 1025, 513, 57, 148, 513, 73, 134, 2561, 1537, 513, 104, 513, 160, 10, 513, 161, 26, 1025, 513, 162, 42, 513, 149, 89, 6657, 3585, 1537, 513, 163, 513, 58, 135, 1025, 513, 120, 164, 513, 74, 150, 1537, 1025, 513, 105, 176, 177, 1025, 513, 27, 165, 178, 3585, 2049, 1025, 513, 90, 43, 513, 136, 151, 513, 179, 513, 121, 59, 2049, 1025, 513, 106, 180, 513, 75, 193, 1025, 513, 152, 137, 513, 28, 181, 20481, 8705, 4097, 1537, 1025, 513, 91, 44, 194, 1537, 1025, 513, 11, 192, 166, 513, 167, 122, 2561, 1025, 513, 195, 60, 1025, 513, 12, 153, 182, 1025, 513, 107, 196, 513, 76, 168, 5121, 2561, 1025, 513, 138, 197, 1025, 513, 208, 92, 209, 1025, 513, 183, 123, 513, 29, 513, 13, 45, 3073, 1025, 513, 210, 211, 1025, 513, 61, 198, 513, 108, 169, 1537, 1025, 513, 154, 184, 212, 1025, 513, 139, 77, 513, 199, 124, 17409, 8705, 4609, 2561, 1025, 513, 213, 93, 1025, 513, 224, 14, 225, 1025, 513, 30, 226, 513, 170, 46, 2049, 1025, 513, 185, 155, 513, 227, 214, 1025, 513, 109, 62, 513, 200, 140, 4097, 2049, 1025, 513, 228, 78, 513, 215, 125, 1025, 513, 229, 186, 513, 171, 94, 2049, 1025, 513, 201, 156, 513, 241, 31, 1537, 1025, 513, 240, 110, 242, 513, 47, 230, 9729, 4609, 2049, 1025, 513, 216, 243, 513, 63, 244, 1537, 513, 79, 513, 141, 217, 513, 187, 202, 2049, 1025, 513, 172, 231, 513, 126, 245, 2049, 1025, 513, 157, 95, 513, 232, 142, 513, 246, 203, 8705, 4609, 2561, 1537, 1025, 513, 15, 174, 111, 513, 188, 218, 1025, 513, 173, 247, 513, 127, 233, 2049, 1025, 513, 158, 204, 513, 248, 143, 1025, 513, 219, 189, 513, 234, 249, 4097, 2049, 1025, 513, 159, 220, 513, 205, 235, 1025, 513, 190, 250, 513, 175, 221, 3585, 1537, 1025, 513, 236, 206, 251, 1025, 513, 191, 237, 513, 222, 252, 1537, 1025, 513, 207, 253, 238, 1025, 513, 223, 254, 513, 239, 255, 513, 0, 1537, 513, 16, 513, 1, 17, 10753, 2049, 1025, 513, 32, 2, 513, 33, 18, 2561, 1537, 513, 34, 513, 48, 3, 513, 49, 19, 2561, 1025, 513, 50, 35, 1025, 513, 64, 4, 65, 1537, 513, 20, 513, 51, 66, 1025, 513, 36, 80, 513, 67, 52, 35329, 10241, 4097, 1537, 1025, 513, 5, 21, 81, 1025, 513, 82, 37, 1025, 513, 68, 53, 83, 2561, 1537, 1025, 513, 96, 6, 97, 513, 22, 98, 2049, 1025, 513, 38, 84, 513, 69, 99, 1025, 513, 54, 112, 113, 10241, 4609, 2049, 513, 23, 513, 7, 513, 85, 100, 1025, 513, 114, 39, 1025, 513, 70, 101, 115, 2561, 1537, 513, 55, 513, 86, 8, 513, 128, 129, 1537, 513, 24, 513, 116, 71, 513, 130, 513, 40, 102, 6145, 3585, 2049, 1025, 513, 131, 56, 513, 117, 132, 1025, 513, 72, 144, 145, 1537, 513, 25, 513, 9, 118, 513, 146, 41, 3585, 2049, 1025, 513, 133, 88, 513, 147, 57, 1025, 513, 160, 10, 26, 2049, 513, 162, 513, 103, 513, 87, 73, 1537, 513, 148, 513, 119, 134, 513, 161, 513, 104, 149, 56321, 32257, 12801, 6657, 3073, 1537, 513, 42, 513, 89, 58, 513, 163, 513, 135, 120, 2049, 1025, 513, 164, 74, 513, 150, 105, 1025, 513, 176, 11, 177, 2561, 1025, 513, 27, 178, 513, 43, 513, 165, 90, 1537, 513, 179, 513, 166, 106, 1025, 513, 180, 75, 513, 12, 193, 7681, 3585, 1537, 1025, 513, 181, 194, 44, 1025, 513, 167, 195, 513, 107, 196, 2049, 513, 29, 1025, 513, 136, 151, 59, 1025, 513, 209, 210, 513, 45, 211, 4609, 1537, 1025, 513, 30, 46, 226, 1537, 1025, 513, 121, 152, 192, 513, 28, 513, 137, 91, 3585, 1537, 513, 60, 513, 122, 182, 1025, 513, 76, 153, 513, 168, 138, 1537, 513, 13, 513, 197, 92, 1025, 513, 61, 198, 513, 108, 154, 22529, 22017, 9217, 4097, 2049, 1025, 513, 139, 77, 513, 199, 124, 1025, 513, 213, 93, 513, 224, 14, 2049, 513, 227, 1025, 513, 208, 183, 123, 1537, 1025, 513, 169, 184, 212, 513, 225, 513, 170, 185, 6145, 2561, 1537, 1025, 513, 155, 214, 109, 513, 62, 200, 1537, 1025, 513, 140, 228, 78, 1025, 513, 215, 229, 513, 186, 171, 3073, 1025, 513, 156, 230, 1025, 513, 110, 216, 513, 141, 187, 2049, 1025, 513, 231, 157, 513, 232, 142, 1025, 513, 203, 188, 158, 241, 513, 31, 513, 15, 47, 16897, 14337, 513, 242, 13313, 12801, 5121, 2049, 513, 189, 513, 94, 513, 125, 201, 1537, 513, 202, 513, 172, 126, 1025, 513, 218, 173, 204, 2561, 1537, 513, 174, 513, 219, 220, 513, 205, 190, 1537, 1025, 513, 235, 237, 238, 1537, 1025, 513, 217, 234, 233, 513, 222, 1025, 513, 221, 236, 206, 63, 240, 1025, 513, 243, 244, 513, 79, 513, 245, 95, 2561, 513, 255, 1025, 513, 246, 111, 513, 247, 127, 3073, 1537, 513, 143, 513, 248, 249, 1025, 513, 159, 250, 175, 2049, 1025, 513, 251, 191, 513, 252, 207, 1025, 513, 253, 223, 513, 254, 239, 15361, 2049, 1025, 513, 0, 16, 513, 1, 17, 3585, 1537, 1025, 513, 32, 2, 33, 513, 18, 513, 34, 513, 48, 3, 3585, 1025, 513, 49, 19, 1025, 513, 50, 35, 1025, 513, 64, 4, 65, 2049, 1025, 513, 20, 51, 513, 66, 36, 1537, 1025, 513, 67, 52, 81, 1537, 1025, 513, 80, 5, 21, 513, 82, 37, 64001, 25089, 8705, 4609, 2561, 1025, 513, 68, 83, 513, 53, 513, 96, 6, 1025, 513, 97, 22, 513, 98, 38, 2049, 1025, 513, 84, 69, 513, 99, 54, 1025, 513, 113, 85, 513, 100, 70, 8193, 3585, 1537, 513, 114, 513, 39, 55, 513, 115, 1025, 513, 112, 7, 23, 2561, 1025, 513, 101, 86, 1025, 513, 128, 8, 129, 1025, 513, 116, 71, 513, 24, 130, 4097, 2049, 1025, 513, 40, 102, 513, 131, 56, 1025, 513, 117, 87, 513, 132, 72, 2049, 1025, 513, 145, 25, 513, 146, 118, 1025, 513, 103, 41, 513, 133, 88, 23553, 8705, 4097, 2049, 1025, 513, 147, 57, 513, 148, 73, 1025, 513, 119, 134, 513, 104, 161, 2049, 1025, 513, 162, 42, 513, 149, 89, 1025, 513, 163, 58, 513, 135, 513, 120, 74, 5633, 3073, 1025, 513, 164, 150, 1025, 513, 105, 177, 513, 27, 165, 1537, 513, 178, 513, 90, 43, 513, 136, 179, 4097, 2561, 1537, 513, 144, 513, 9, 160, 513, 151, 121, 1025, 513, 166, 106, 180, 3073, 1537, 513, 26, 513, 10, 176, 513, 59, 513, 11, 192, 1025, 513, 75, 193, 513, 152, 137, 17153, 8705, 4097, 2049, 1025, 513, 28, 181, 513, 91, 194, 1025, 513, 44, 167, 513, 122, 195, 2561, 1537, 513, 60, 513, 12, 208, 513, 182, 107, 1025, 513, 196, 76, 513, 153, 168, 4097, 2049, 1025, 513, 138, 197, 513, 92, 209, 1025, 513, 183, 123, 513, 29, 210, 2305, 1025, 513, 45, 211, 513, 61, 198, 22010, 1025, 513, 108, 169, 513, 154, 212, 8193, 4097, 2049, 1025, 513, 184, 139, 513, 77, 199, 1025, 513, 124, 213, 513, 93, 225, 2049, 1025, 513, 30, 226, 513, 170, 185, 1025, 513, 155, 227, 513, 214, 109, 5121, 2561, 1537, 513, 62, 513, 46, 78, 513, 200, 140, 1025, 513, 228, 215, 1025, 513, 125, 171, 229, 2561, 1025, 513, 186, 94, 513, 201, 513, 156, 110, 2049, 513, 230, 513, 13, 513, 224, 14, 1025, 513, 216, 141, 513, 187, 202, 18945, 513, 255, 16385, 14849, 8193, 4097, 2049, 1025, 513, 172, 231, 513, 126, 217, 1025, 513, 157, 232, 513, 142, 203, 2049, 1025, 513, 188, 218, 513, 173, 233, 1025, 513, 158, 204, 513, 219, 189, 4097, 2049, 1025, 513, 234, 174, 513, 220, 205, 1025, 513, 235, 190, 513, 221, 236, 2049, 1025, 513, 206, 237, 513, 222, 238, 15, 1025, 513, 240, 31, 241, 1025, 513, 242, 47, 513, 243, 63, 4609, 2049, 1025, 513, 244, 79, 513, 245, 95, 1025, 513, 246, 111, 513, 247, 513, 127, 143, 2561, 1025, 513, 248, 249, 1025, 513, 159, 175, 250, 2049, 1025, 513, 251, 191, 513, 252, 207, 1025, 513, 253, 223, 513, 254, 239, 513, 0, 2049, 1025, 513, 8, 4, 513, 1, 2, 2049, 1025, 513, 12, 10, 513, 3, 6, 1537, 513, 9, 513, 5, 7, 1025, 513, 14, 13, 513, 15, 11, 4097, 2049, 1025, 513, 0, 1, 513, 2, 3, 1025, 513, 4, 5, 513, 6, 7, 2049, 1025, 513, 8, 9, 513, 10, 11, 1025, 513, 12, 13, 513, 14, 15]);
    this.HUFFMAN_TABLE_OFFSET_LAYER_III_8be2vx$ = new Int32Array([-32768, 0, 7, 24, -32768, 41, 72, 103, 174, 245, 316, 443, 570, 697, -32768, 1208, 1719, 1719, 1719, 1719, 1719, 1719, 1719, 1719, 2230, 2230, 2230, 2230, 2230, 2230, 2230, 2230, 2742, 2261]);
    this.HUFFMAN_TREELEN_LAYER_III_8be2vx$ = new Int32Array([0, 7, 17, 17, 0, 31, 31, 71, 71, 71, 127, 127, 127, 511, 0, 511, 511, 511, 511, 511, 511, 511, 511, 511, 512, 512, 512, 512, 512, 512, 512, 512, 31, 31]);
    this.HUFFMAN_LINBITS_LAYER_III_8be2vx$ = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 6, 8, 10, 13, 4, 5, 6, 7, 8, 9, 11, 13, 0, 0]);
    this.REQUANTIZE_LONG_PRETAB_LAYER_III_8be2vx$ = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 3.0, 2.0]);
    var $receiver_2 = new Float32Array(72);
    for (var i_12 = 0; i_12 <= 5; i_12++) {
      for (var j_0 = 0; j_0 <= 11; j_0++) {
        var x_8 = math.PI / 24 * (2.0 * j_0 + 1 + 6) * (2.0 * i_12 + 1);
        $receiver_2[(i_12 * 12 | 0) + j_0 | 0] = Math_0.cos(x_8);
      }
    }
    this.COS_12_LAYER_III_8be2vx$ = $receiver_2;
    var $receiver_3 = new Float32Array(648);
    for (var i_13 = 0; i_13 <= 17; i_13++) {
      for (var j_1 = 0; j_1 <= 35; j_1++) {
        var x_9 = math.PI / 72 * (2.0 * j_1 + 1 + 18) * (2.0 * i_13 + 1);
        $receiver_3[(i_13 * 36 | 0) + j_1 | 0] = Math_0.cos(x_9);
      }
    }
    this.COS_36_LAYER_III_8be2vx$ = $receiver_3;
    this.L3_NSAMPLES = 576;
  }
  JavaMp3Decoder.prototype.init_fqrh44$ = function (inp) {
    return this.init_39qel5$(openSync(inp));
  };
  JavaMp3Decoder.prototype.readSyncSafeS28_ucmi9i$ = function ($receiver) {
    var v0 = readU8_1($receiver);
    var v1 = readU8_1($receiver);
    var v2 = readU8_1($receiver);
    var v3 = readU8_1($receiver);
    return v3 & 127 | (v2 & 127) << 7 | (v1 & 127) << 14 | (v0 & 127) << 21;
  };
  JavaMp3Decoder.prototype.init_39qel5$ = function (inp) {
    var oldPos = inp.position;
    if (equals(readStringz(inp, 3, lang.Charsets.LATIN1), 'ID3')) {
      var major = readU8_1(inp);
      var revision = readU8_1(inp);
      var flags = readU8_1(inp);
      var size = this.readSyncSafeS28_ucmi9i$(inp);
      inp.position = inp.position.add(Kotlin.Long.fromInt(size));
    } else {
      inp.position = oldPos;
    }
    var buffer = new JavaMp3Decoder$Buffer(inp);
    while (buffer.lastByte !== -1) {
      var soundData = new JavaMp3Decoder$SoundData(buffer);
      if (this.decodeFrame_smp1v0$(soundData) === JavaMp3Decoder$DecodeStatus$OK_getInstance()) {
        var adjacentHeader = this.findNextHeader_uoyl1f$(soundData, 1);
        if (adjacentHeader != null) {
          adjacentHeader.unRead_ha2gpb$(soundData);
          return soundData;
        }}}
    return null;
  };
  JavaMp3Decoder.prototype.findNextHeader_ha2gpb$ = function (soundData) {
    return this.findNextHeader_uoyl1f$(soundData, 2147483647);
  };
  JavaMp3Decoder.prototype.findNextHeader_uoyl1f$ = function (soundData, maxBytesSkipped) {
    var header = new JavaMp3Decoder$FrameHeader(soundData);
    var skipped = 0;
    while (!header.isValid_8be2vx$) {
      if (ensureNotNull(soundData.buffer_8be2vx$).lastByte === -1 || skipped >= maxBytesSkipped) {
        return null;
      }skipped = skipped + 1 | 0;
      soundData.buffer_8be2vx$.reset();
      soundData.buffer_8be2vx$.lastByte = soundData.buffer_8be2vx$.inp.read();
      if (soundData.buffer_8be2vx$.lastByte === -1) {
        throw IllegalStateException_init('EOF'.toString());
      }header.set_ha2gpb$(soundData);
    }
    return header;
  };
  function JavaMp3Decoder$DecodeStatus(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JavaMp3Decoder$DecodeStatus_initFields() {
    JavaMp3Decoder$DecodeStatus_initFields = function () {
    };
    JavaMp3Decoder$DecodeStatus$OK_instance = new JavaMp3Decoder$DecodeStatus('OK', 0);
    JavaMp3Decoder$DecodeStatus$ERROR_instance = new JavaMp3Decoder$DecodeStatus('ERROR', 1);
    JavaMp3Decoder$DecodeStatus$COMPLETED_instance = new JavaMp3Decoder$DecodeStatus('COMPLETED', 2);
  }
  var JavaMp3Decoder$DecodeStatus$OK_instance;
  function JavaMp3Decoder$DecodeStatus$OK_getInstance() {
    JavaMp3Decoder$DecodeStatus_initFields();
    return JavaMp3Decoder$DecodeStatus$OK_instance;
  }
  var JavaMp3Decoder$DecodeStatus$ERROR_instance;
  function JavaMp3Decoder$DecodeStatus$ERROR_getInstance() {
    JavaMp3Decoder$DecodeStatus_initFields();
    return JavaMp3Decoder$DecodeStatus$ERROR_instance;
  }
  var JavaMp3Decoder$DecodeStatus$COMPLETED_instance;
  function JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance() {
    JavaMp3Decoder$DecodeStatus_initFields();
    return JavaMp3Decoder$DecodeStatus$COMPLETED_instance;
  }
  JavaMp3Decoder$DecodeStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodeStatus',
    interfaces: [Enum]
  };
  function JavaMp3Decoder$DecodeStatus$values() {
    return [JavaMp3Decoder$DecodeStatus$OK_getInstance(), JavaMp3Decoder$DecodeStatus$ERROR_getInstance(), JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance()];
  }
  JavaMp3Decoder$DecodeStatus.values = JavaMp3Decoder$DecodeStatus$values;
  function JavaMp3Decoder$DecodeStatus$valueOf(name) {
    switch (name) {
      case 'OK':
        return JavaMp3Decoder$DecodeStatus$OK_getInstance();
      case 'ERROR':
        return JavaMp3Decoder$DecodeStatus$ERROR_getInstance();
      case 'COMPLETED':
        return JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.format.mp3.JavaMp3Decoder.DecodeStatus.' + name);
    }
  }
  JavaMp3Decoder$DecodeStatus.valueOf_61zpoe$ = JavaMp3Decoder$DecodeStatus$valueOf;
  JavaMp3Decoder.prototype.decodeFrame_smp1v0$ = function (soundData) {
    var tmp$, tmp$_0, tmp$_1;
    if (soundData.buffer_8be2vx$.lastByte === -1)
      return JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance();
    tmp$ = this.findNextHeader_ha2gpb$(soundData);
    if (tmp$ == null) {
      return JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance();
    }var header = tmp$;
    if (soundData.frequency === -1) {
      soundData.frequency = this.SAMPLING_FREQUENCY_8be2vx$[header.samplingFrequency];
    }if (soundData.stereo === -1) {
      soundData.stereo = header.mode === 3 ? 0 : 1;
    }var bound = header.modeExtension === 0 ? 4 : header.modeExtension === 1 ? 8 : header.modeExtension === 2 ? 12 : header.modeExtension === 3 ? 16 : -1;
    if (header.protectionBit === 0) {
      this.read_jpcm8n$(soundData.buffer_8be2vx$, 16);
    }if (header.layer === 3) {
      switch (header.mode) {
        case 3:
          tmp$_0 = this.samples_I_pggwpj$(soundData.buffer_8be2vx$, 1, -1);
          break;
        case 0:
        case 2:
          tmp$_0 = this.samples_I_pggwpj$(soundData.buffer_8be2vx$, 2, -1);
          break;
        case 1:
          tmp$_0 = this.samples_I_pggwpj$(soundData.buffer_8be2vx$, 2, bound);
          break;
        default:tmp$_0 = null;
          break;
      }
      if (tmp$_0 == null) {
        return JavaMp3Decoder$DecodeStatus$ERROR_getInstance();
      }var sampleDecoded = tmp$_0;
      this.synth_63p8h7$(soundData, sampleDecoded, soundData.synthOffset_8be2vx$, soundData.synthBuffer_8be2vx$, header.mode === 3 ? 1 : 2);
    } else if (header.layer === 2) {
      var bitrate = this.BITRATE_LAYER_II_8be2vx$[header.bitrateIndex];
      switch (header.mode) {
        case 3:
          tmp$_1 = this.samples_II_89g89$(soundData.buffer_8be2vx$, 1, -1, bitrate, soundData.frequency);
          break;
        case 0:
        case 2:
          tmp$_1 = this.samples_II_89g89$(soundData.buffer_8be2vx$, 2, -1, bitrate, soundData.frequency);
          break;
        case 1:
          tmp$_1 = this.samples_II_89g89$(soundData.buffer_8be2vx$, 2, bound, bitrate, soundData.frequency);
          break;
        default:tmp$_1 = null;
          break;
      }
      var sampleDecoded_0 = tmp$_1;
      this.synth_63p8h7$(soundData, sampleDecoded_0, soundData.synthOffset_8be2vx$, soundData.synthBuffer_8be2vx$, header.mode === 3 ? 1 : 2);
    } else if (header.layer === 1) {
      var frameSize = ((144 * this.BITRATE_LAYER_III_8be2vx$[header.bitrateIndex] | 0) / this.SAMPLING_FREQUENCY_8be2vx$[header.samplingFrequency] | 0) + header.paddingBit | 0;
      if (frameSize > 2000) {
        println('Frame too large! ' + frameSize);
      }try {
        this.samples_III_r2t9qz$(soundData.buffer_8be2vx$, soundData.stereo === 1 ? 2 : 1, soundData.mainDataReader_8be2vx$, frameSize, header.samplingFrequency, header.mode, header.modeExtension, soundData.store_8be2vx$, soundData.v_8be2vx$, soundData);
      } catch (e) {
        if (Kotlin.isType(e, IndexOutOfBoundsException)) {
          printStackTrace(e);
        } else
          throw e;
      }
    }if (soundData.buffer_8be2vx$.current !== 0) {
      this.read_jpcm8n$(soundData.buffer_8be2vx$, 8 - soundData.buffer_8be2vx$.current | 0);
    }return JavaMp3Decoder$DecodeStatus$OK_getInstance();
  };
  JavaMp3Decoder.prototype.samples_III_r2t9qz$ = function (buffer, stereo, mainDataReader, frameSize, samplingFrequency, mode, modeExtension, store, v, soundData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var scfsi = new Int32Array(stereo * 4 | 0);
    var part2_3_length = new Int32Array(stereo * 2 | 0);
    var big_values = new Int32Array(stereo * 2 | 0);
    var global_gain = new Int32Array(stereo * 2 | 0);
    var scalefac_compress = new Int32Array(stereo * 2 | 0);
    var win_switch_flag = new Int32Array(stereo * 2 | 0);
    var block_type = new Int32Array(stereo * 2 | 0);
    var mixed_block_flag = new Int32Array(stereo * 2 | 0);
    var table_select = new Int32Array((stereo * 2 | 0) * 3 | 0);
    var subblock_gain = new Int32Array((stereo * 2 | 0) * 3 | 0);
    var region0_count = new Int32Array(stereo * 2 | 0);
    var region1_count = new Int32Array(stereo * 2 | 0);
    var preflag = new Int32Array(stereo * 2 | 0);
    var scalefac_scale = new Int32Array(stereo * 2 | 0);
    var count1table_select = new Int32Array(stereo * 2 | 0);
    var count1 = new Int32Array(stereo * 2 | 0);
    var scalefac_l = new Int32Array((stereo * 2 | 0) * 21 | 0);
    var scalefac_s = new Int32Array(((stereo * 2 | 0) * 12 | 0) * 3 | 0);
    var is = new Float32Array((stereo * 2 | 0) * 576 | 0);
    var mainDataBegin = this.read_jpcm8n$(buffer, 9);
    this.read_jpcm8n$(buffer, stereo === 1 ? 5 : 3);
    for (var ch = 0; ch < stereo; ch++) {
      for (var scaleband = 0; scaleband <= 3; scaleband++) {
        scfsi[(ch * 4 | 0) + scaleband | 0] = this.read_jpcm8n$(buffer, 1);
      }
    }
    for (var gr = 0; gr <= 1; gr++) {
      for (var ch_0 = 0; ch_0 < stereo; ch_0++) {
        part2_3_length[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 12);
        big_values[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 9);
        global_gain[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 8);
        scalefac_compress[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 4);
        win_switch_flag[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 1);
        if (win_switch_flag[(ch_0 * 2 | 0) + gr | 0] === 1) {
          block_type[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 2);
          mixed_block_flag[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 1);
          for (var region = 0; region <= 1; region++) {
            table_select[((ch_0 * 2 | 0) * 3 | 0) + (gr * 3 | 0) + region | 0] = this.read_jpcm8n$(buffer, 5);
          }
          for (var window_0 = 0; window_0 <= 2; window_0++) {
            subblock_gain[((ch_0 * 2 | 0) * 3 | 0) + (gr * 3 | 0) + window_0 | 0] = this.read_jpcm8n$(buffer, 3);
          }
          if (block_type[(ch_0 * 2 | 0) + gr | 0] === 2 && mixed_block_flag[(ch_0 * 2 | 0) + gr | 0] === 0) {
            region0_count[(ch_0 * 2 | 0) + gr | 0] = 8;
          } else {
            region0_count[(ch_0 * 2 | 0) + gr | 0] = 7;
          }
          region1_count[(ch_0 * 2 | 0) + gr | 0] = 20 - region0_count[(ch_0 * 2 | 0) + gr | 0] | 0;
        } else {
          for (var region_0 = 0; region_0 <= 2; region_0++) {
            table_select[((ch_0 * 2 | 0) * 3 | 0) + (gr * 3 | 0) + region_0 | 0] = this.read_jpcm8n$(buffer, 5);
          }
          region0_count[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 4);
          region1_count[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 3);
          block_type[(ch_0 * 2 | 0) + gr | 0] = 0;
        }
        preflag[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 1);
        scalefac_scale[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 1);
        count1table_select[(ch_0 * 2 | 0) + gr | 0] = this.read_jpcm8n$(buffer, 1);
      }
    }
    var srcPos = mainDataReader.top - mainDataBegin | 0;
    arrayCopy(ensureNotNull(mainDataReader).array, mainDataReader.array, 0, srcPos, srcPos + mainDataBegin | 0);
    var mainDataSize = frameSize - (stereo === 2 ? 32 : 17) - 4 | 0;
    this.readInto_v4n8vb$(buffer, mainDataReader.array, mainDataBegin, mainDataSize);
    mainDataReader.index = 0;
    mainDataReader.current = 0;
    mainDataReader.top = mainDataBegin + mainDataSize | 0;
    for (var gr_0 = 0; gr_0 <= 1; gr_0++) {
      for (var ch_1 = 0; ch_1 < stereo; ch_1++) {
        var rsample = ((ch_1 * 2 | 0) * 576 | 0) + (gr_0 * 576 | 0) | 0;
        var part_2_start = (mainDataReader.index * 8 | 0) + mainDataReader.current | 0;
        var slen1 = this.SCALEFACTOR_SIZES_LAYER_III_8be2vx$[scalefac_compress[(ch_1 * 2 | 0) + gr_0 | 0] * 2 | 0];
        var slen2 = this.SCALEFACTOR_SIZES_LAYER_III_8be2vx$[(scalefac_compress[(ch_1 * 2 | 0) + gr_0 | 0] * 2 | 0) + 1 | 0];
        if (win_switch_flag[(ch_1 * 2 | 0) + gr_0 | 0] !== 0 && block_type[(ch_1 * 2 | 0) + gr_0 | 0] === 2) {
          if (mixed_block_flag[(ch_1 * 2 | 0) + gr_0 | 0] !== 0) {
            for (var sfb = 0; sfb <= 7; sfb++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + (gr_0 * 21 | 0) + sfb | 0] = this.read_t2q39f$(mainDataReader, slen1);
            }
            for (var sfb_0 = 3; sfb_0 <= 11; sfb_0++) {
              var nbits = sfb_0 < 6 ? slen1 : slen2;
              for (var win = 0; win <= 2; win++)
                scalefac_s[(((ch_1 * 2 | 0) * 12 | 0) * 3 | 0) + ((gr_0 * 12 | 0) * 3 | 0) + (sfb_0 * 3 | 0) + win | 0] = this.read_t2q39f$(mainDataReader, nbits);
            }
          } else {
            for (var sfb_1 = 0; sfb_1 <= 11; sfb_1++) {
              var nbits_0 = sfb_1 < 6 ? slen1 : slen2;
              for (var win_0 = 0; win_0 <= 2; win_0++)
                scalefac_s[(((ch_1 * 2 | 0) * 12 | 0) * 3 | 0) + ((gr_0 * 12 | 0) * 3 | 0) + (sfb_1 * 3 | 0) + win_0 | 0] = this.read_t2q39f$(mainDataReader, nbits_0);
            }
          }
        } else {
          if (scfsi[(ch_1 * 4 | 0) + 0 | 0] === 0 || gr_0 === 0) {
            for (var sfb_2 = 0; sfb_2 <= 5; sfb_2++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + (gr_0 * 21 | 0) + sfb_2 | 0] = this.read_t2q39f$(mainDataReader, slen1);
            }
          } else if (scfsi[(ch_1 * 4 | 0) + 0 | 0] === 1 && gr_0 === 1) {
            for (var sfb_3 = 0; sfb_3 <= 5; sfb_3++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 21 + sfb_3 | 0] = scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 0 + sfb_3 | 0];
            }
          }if (scfsi[(ch_1 * 4 | 0) + 1 | 0] === 0 || gr_0 === 0) {
            for (var sfb_4 = 6; sfb_4 <= 10; sfb_4++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + (gr_0 * 21 | 0) + sfb_4 | 0] = this.read_t2q39f$(mainDataReader, slen1);
            }
          } else if (scfsi[(ch_1 * 4 | 0) + 1 | 0] === 1 && gr_0 === 1) {
            for (var sfb_5 = 6; sfb_5 <= 10; sfb_5++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 21 + sfb_5 | 0] = scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 0 + sfb_5 | 0];
            }
          }if (scfsi[(ch_1 * 4 | 0) + 2 | 0] === 0 || gr_0 === 0) {
            for (var sfb_6 = 11; sfb_6 <= 15; sfb_6++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + (gr_0 * 21 | 0) + sfb_6 | 0] = this.read_t2q39f$(mainDataReader, slen2);
            }
          } else if (scfsi[(ch_1 * 4 | 0) + 2 | 0] === 1 && gr_0 === 1) {
            for (var sfb_7 = 11; sfb_7 <= 15; sfb_7++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 21 + sfb_7 | 0] = scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 0 + sfb_7 | 0];
            }
          }if (scfsi[(ch_1 * 4 | 0) + 3 | 0] === 0 || gr_0 === 0) {
            for (var sfb_8 = 16; sfb_8 <= 20; sfb_8++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + (gr_0 * 21 | 0) + sfb_8 | 0] = this.read_t2q39f$(mainDataReader, slen2);
            }
          } else if (scfsi[(ch_1 * 4 | 0) + 3 | 0] === 1 && gr_0 === 1) {
            for (var sfb_9 = 16; sfb_9 <= 20; sfb_9++) {
              scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 21 + sfb_9 | 0] = scalefac_l[((ch_1 * 2 | 0) * 21 | 0) + 0 + sfb_9 | 0];
            }
          }}
        if (part2_3_length[(ch_1 * 2 | 0) + gr_0 | 0] !== 0) {
          var bit_pos_end = part_2_start + part2_3_length[(ch_1 * 2 | 0) + gr_0 | 0] - 1 | 0;
          var region_1_start;
          var region_2_start;
          var table_num;
          var is_pos;
          var huffman = new Int32Array(4);
          if (win_switch_flag[(ch_1 * 2 | 0) + gr_0 | 0] === 1 && block_type[(ch_1 * 2 | 0) + gr_0 | 0] === 2) {
            region_1_start = 36;
            region_2_start = 576;
          } else {
            region_1_start = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + region0_count[(ch_1 * 2 | 0) + gr_0 | 0] + 1 | 0];
            region_2_start = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + region0_count[(ch_1 * 2 | 0) + gr_0 | 0] + region1_count[(ch_1 * 2 | 0) + gr_0 | 0] + 2 | 0];
          }
          is_pos = 0;
          while (is_pos < (big_values[(ch_1 * 2 | 0) + gr_0 | 0] * 2 | 0)) {
            if (is_pos < region_1_start)
              tmp$ = table_select[((ch_1 * 2 | 0) * 3 | 0) + (gr_0 * 3 | 0) + 0 | 0];
            else if (is_pos < region_2_start)
              tmp$ = table_select[((ch_1 * 2 | 0) * 3 | 0) + (gr_0 * 3 | 0) + 1 | 0];
            else
              tmp$ = table_select[((ch_1 * 2 | 0) * 3 | 0) + (gr_0 * 3 | 0) + 2 | 0];
            table_num = tmp$;
            this.huffman_III_eex9pk$(mainDataReader, table_num, huffman);
            if (is_pos >= 576)
              break;
            is[rsample + (tmp$_0 = is_pos, is_pos = tmp$_0 + 1 | 0, tmp$_0) | 0] = huffman[0];
            if (is_pos >= 576)
              break;
            is[rsample + (tmp$_1 = is_pos, is_pos = tmp$_1 + 1 | 0, tmp$_1) | 0] = huffman[1];
          }
          table_num = count1table_select[(ch_1 * 2 | 0) + gr_0 | 0] + 32 | 0;
          is_pos = big_values[(ch_1 * 2 | 0) + gr_0 | 0] * 2 | 0;
          while (is_pos <= 572 && ((mainDataReader.index * 8 | 0) + mainDataReader.current | 0) <= bit_pos_end) {
            this.huffman_III_eex9pk$(mainDataReader, table_num, huffman);
            is[rsample + (tmp$_2 = is_pos, is_pos = tmp$_2 + 1 | 0, tmp$_2) | 0] = huffman[2];
            if (is_pos >= 576)
              break;
            is[rsample + (tmp$_3 = is_pos, is_pos = tmp$_3 + 1 | 0, tmp$_3) | 0] = huffman[3];
            if (is_pos >= 576)
              break;
            is[rsample + (tmp$_4 = is_pos, is_pos = tmp$_4 + 1 | 0, tmp$_4) | 0] = huffman[0];
            if (is_pos >= 576)
              break;
            is[rsample + is_pos | 0] = huffman[1];
            is_pos = is_pos + 1 | 0;
          }
          if (((mainDataReader.index * 8 | 0) + mainDataReader.current | 0) > (bit_pos_end + 1 | 0)) {
            is_pos = is_pos - 4 | 0;
          }count1[(ch_1 * 2 | 0) + gr_0 | 0] = is_pos;
          while (is_pos < 576) {
            is[rsample + (tmp$_5 = is_pos, is_pos = tmp$_5 + 1 | 0, tmp$_5) | 0] = 0.0;
          }
          mainDataReader.index = (bit_pos_end + 1 | 0) / 8 | 0;
          mainDataReader.current = (bit_pos_end + 1 | 0) % 8;
        }}
    }
    if (!soundData.samplesBufferInit) {
      soundData.samplesBufferInit = true;
      soundData.samplesBuffer = new Int8Array((1152 * stereo | 0) * 2 | 0);
    }for (var gr_1 = 0; gr_1 <= 1; gr_1++) {
      for (var ch_2 = 0; ch_2 < stereo; ch_2++) {
        if (win_switch_flag[(ch_2 * 2 | 0) + gr_1 | 0] === 1 && block_type[(ch_2 * 2 | 0) + gr_1 | 0] === 2) {
          if (mixed_block_flag[(ch_2 * 2 | 0) + gr_1 | 0] !== 0) {
            var sfb_10 = 0;
            var next_sfb = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb_10 + 1 | 0];
            for (var i = 0; i <= 35; i++) {
              if (i === next_sfb) {
                sfb_10 = sfb_10 + 1 | 0;
                next_sfb = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb_10 + 1 | 0];
              }this.requantize_long_III_orfflz$(gr_1, ch_2, scalefac_scale, preflag, global_gain, scalefac_l, is, i, sfb_10);
            }
            sfb_10 = 3;
            next_sfb = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_10 + 1 | 0] * 3 | 0;
            var win_len = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_10 + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_10 | 0] | 0;
            var i_0 = 36;
            while (i_0 < count1[(ch_2 * 2 | 0) + gr_1 | 0]) {
              if (i_0 === next_sfb) {
                sfb_10 = sfb_10 + 1 | 0;
                next_sfb = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_10 + 1 | 0] * 3 | 0;
                win_len = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_10 + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_10 | 0] | 0;
              }for (var win_1 = 0; win_1 <= 2; win_1++) {
                tmp$_6 = win_len;
                for (var j = 0; j < tmp$_6; j++) {
                  this.requantize_short_III_nwhljf$(gr_1, ch_2, scalefac_scale, subblock_gain, global_gain, scalefac_s, is, i_0, sfb_10, win_1);
                  i_0 = i_0 + 1 | 0;
                }
              }
            }
          } else {
            var sfb_11 = 0;
            var next_sfb_0 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_11 + 1 | 0] * 3 | 0;
            var win_len_0 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_11 + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_11 | 0] | 0;
            var i_1 = 0;
            while (i_1 < count1[(ch_2 * 2 | 0) + gr_1 | 0]) {
              if (i_1 === next_sfb_0) {
                sfb_11 = sfb_11 + 1 | 0;
                next_sfb_0 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_11 + 1 | 0] * 3 | 0;
                win_len_0 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_11 + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_11 | 0] | 0;
              }for (var win_2 = 0; win_2 <= 2; win_2++) {
                tmp$_7 = win_len_0;
                for (var j_0 = 0; j_0 < tmp$_7; j_0++) {
                  this.requantize_short_III_nwhljf$(gr_1, ch_2, scalefac_scale, subblock_gain, global_gain, scalefac_s, is, i_1, sfb_11, win_2);
                  i_1 = i_1 + 1 | 0;
                }
              }
            }
          }
        } else {
          var sfb_12 = 0;
          var next_sfb_1 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb_12 + 1 | 0];
          tmp$_8 = count1[(ch_2 * 2 | 0) + gr_1 | 0];
          for (var i_2 = 0; i_2 < tmp$_8; i_2++) {
            if (i_2 === next_sfb_1) {
              sfb_12 = sfb_12 + 1 | 0;
              next_sfb_1 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb_12 + 1 | 0];
            }this.requantize_long_III_orfflz$(gr_1, ch_2, scalefac_scale, preflag, global_gain, scalefac_l, is, i_2, sfb_12);
          }
        }
        outer: while (true) {
          if (win_switch_flag[(ch_2 * 2 | 0) + gr_1 | 0] === 1 && block_type[(ch_2 * 2 | 0) + gr_1 | 0] === 2) {
            var re = new Float32Array(576);
            var i_3 = 0;
            var sfb_13 = 0;
            var next_sfb_2;
            var win_len_1;
            if (mixed_block_flag[(ch_2 * 2 | 0) + gr_1 | 0] !== 0) {
              sfb_13 = 3;
              i_3 = 36;
            }next_sfb_2 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 + 1 | 0] * 3 | 0;
            win_len_1 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 | 0] | 0;
            while (i_3 < 576) {
              if (i_3 === next_sfb_2) {
                tmp$_9 = 3 * win_len_1 | 0;
                for (var j_1 = 0; j_1 < tmp$_9; j_1++) {
                  is[((ch_2 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (3 * this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 | 0] | 0) + j_1 | 0] = re[j_1];
                }
                if (i_3 >= count1[(ch_2 * 2 | 0) + gr_1 | 0]) {
                  break outer;
                }sfb_13 = sfb_13 + 1 | 0;
                next_sfb_2 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 + 1 | 0] * 3 | 0;
                win_len_1 = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_13 | 0] | 0;
              }for (var win_3 = 0; win_3 <= 2; win_3++) {
                tmp$_10 = win_len_1;
                for (var j_2 = 0; j_2 < tmp$_10; j_2++) {
                  re[(j_2 * 3 | 0) + win_3 | 0] = is[((ch_2 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + i_3 | 0];
                  i_3 = i_3 + 1 | 0;
                }
              }
            }
            tmp$_11 = 3 * win_len_1 | 0;
            for (var j_3 = 0; j_3 < tmp$_11; j_3++) {
              is[((ch_2 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (3 * this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + 12 | 0] | 0) + j_3 | 0] = re[j_3];
            }
          }break;
        }
      }
      if (mode === 1 && modeExtension !== 0) {
        if ((modeExtension & 2) !== 0) {
          var max_pos = count1[0 + gr_1 | 0] > count1[2 + gr_1 | 0] ? count1[0 + gr_1 | 0] : count1[2 + gr_1 | 0];
          for (var i_4 = 0; i_4 < max_pos; i_4++) {
            var left = (is[0 + (gr_1 * 576 | 0) + i_4 | 0] + is[1152 + (gr_1 * 576 | 0) + i_4 | 0]) * this.INV_SQUARE_2_8be2vx$;
            var right = (is[0 + (gr_1 * 576 | 0) + i_4 | 0] - is[1152 + (gr_1 * 576 | 0) + i_4 | 0]) * this.INV_SQUARE_2_8be2vx$;
            is[0 + (gr_1 * 576 | 0) + i_4 | 0] = left;
            is[1152 + (gr_1 * 576 | 0) + i_4 | 0] = right;
          }
        }if ((modeExtension & 1) !== 0) {
          if (win_switch_flag[0 + gr_1 | 0] === 1 && block_type[0 + gr_1 | 0] === 2) {
            if (mixed_block_flag[0 + gr_1 | 0] !== 0) {
              for (var sfb_14 = 0; sfb_14 <= 7; sfb_14++) {
                if (this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb_14 | 0] >= count1[2 + gr_1 | 0]) {
                  this.stereo_long_III_qftas6$(is, scalefac_l, gr_1, sfb_14, samplingFrequency);
                }}
              for (var sfb_15 = 3; sfb_15 <= 11; sfb_15++) {
                if ((this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_15 | 0] * 3 | 0) >= count1[2 + gr_1 | 0]) {
                  this.stereo_short_III_qftas6$(is, scalefac_s, gr_1, sfb_15, samplingFrequency);
                }}
            } else {
              for (var sfb_16 = 0; sfb_16 <= 11; sfb_16++) {
                if ((this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb_16 | 0] * 3 | 0) >= count1[2 + gr_1 | 0]) {
                  this.stereo_short_III_qftas6$(is, scalefac_s, gr_1, sfb_16, samplingFrequency);
                }}
            }
          } else {
            for (var sfb_17 = 0; sfb_17 <= 20; sfb_17++) {
              if (this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb_17 | 0] >= count1[2 + gr_1 | 0]) {
                this.stereo_long_III_qftas6$(is, scalefac_l, gr_1, sfb_17, samplingFrequency);
              }}
          }
        }}for (var ch_3 = 0; ch_3 < stereo; ch_3++) {
        if (!(win_switch_flag[(ch_3 * 2 | 0) + gr_1 | 0] === 1 && block_type[(ch_3 * 2 | 0) + gr_1 | 0] === 2 && mixed_block_flag[(ch_3 * 2 | 0) + gr_1 | 0] === 0)) {
          var sblim = win_switch_flag[(ch_3 * 2 | 0) + gr_1 | 0] === 1 && block_type[(ch_3 * 2 | 0) + gr_1 | 0] === 2 && mixed_block_flag[(ch_3 * 2 | 0) + gr_1 | 0] === 1 ? 2 : 32;
          for (var sb = 1; sb < sblim; sb++) {
            for (var i_5 = 0; i_5 <= 7; i_5++) {
              var li = (18 * sb | 0) - 1 - i_5 | 0;
              var ui = (18 * sb | 0) + i_5 | 0;
              var lb = is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + li | 0] * this.CS_ALIASING_LAYER_III_8be2vx$[i_5] - is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + ui | 0] * this.CA_ALIASING_LAYER_III_8be2vx$[i_5];
              var ub = is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + ui | 0] * this.CS_ALIASING_LAYER_III_8be2vx$[i_5] + is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + li | 0] * this.CA_ALIASING_LAYER_III_8be2vx$[i_5];
              is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + li | 0] = lb;
              is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + ui | 0] = ub;
            }
          }
        }for (var sb_0 = 0; sb_0 <= 31; sb_0++) {
          var bt = win_switch_flag[(ch_3 * 2 | 0) + gr_1 | 0] === 1 && mixed_block_flag[(ch_3 * 2 | 0) + gr_1 | 0] === 1 && sb_0 < 2 ? 0 : block_type[(ch_3 * 2 | 0) + gr_1 | 0];
          var rawout = new Float32Array(36);
          var offset = ((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (sb_0 * 18 | 0) | 0;
          if (bt === 2) {
            for (var j_4 = 0; j_4 <= 2; j_4++) {
              for (var p = 0; p <= 11; p++) {
                var sum = 0.0;
                for (var m = 0; m <= 5; m++) {
                  sum += is[offset + j_4 + (3 * m | 0) | 0] * this.COS_12_LAYER_III_8be2vx$[(m * 12 | 0) + p | 0];
                }
                rawout[(6 * j_4 | 0) + p + 6 | 0] = rawout[(6 * j_4 | 0) + p + 6 | 0] + sum * this.IMDCT_WINDOW_LAYER_III_8be2vx$[(bt * 36 | 0) + p | 0];
              }
            }
          } else {
            for (var p_0 = 0; p_0 <= 35; p_0++) {
              var sum_0 = 0.0;
              for (var m_0 = 0; m_0 <= 17; m_0++) {
                sum_0 += is[offset + m_0 | 0] * this.COS_36_LAYER_III_8be2vx$[(m_0 * 36 | 0) + p_0 | 0];
              }
              rawout[p_0] = sum_0 * this.IMDCT_WINDOW_LAYER_III_8be2vx$[(bt * 36 | 0) + p_0 | 0];
            }
          }
          for (var i_6 = 0; i_6 <= 17; i_6++) {
            is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (sb_0 * 18 | 0) + i_6 | 0] = rawout[i_6] + store[((ch_3 * 32 | 0) * 18 | 0) + (sb_0 * 18 | 0) + i_6 | 0];
            store[((ch_3 * 32 | 0) * 18 | 0) + (sb_0 * 18 | 0) + i_6 | 0] = rawout[i_6 + 18 | 0];
          }
        }
        var sb_1 = 1;
        while (sb_1 < 32) {
          var i_7 = 1;
          while (i_7 < 18) {
            is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (sb_1 * 18 | 0) + i_7 | 0] = -is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (sb_1 * 18 | 0) + i_7 | 0];
            i_7 = i_7 + 2 | 0;
          }
          sb_1 = sb_1 + 2 | 0;
        }
        var u = new Float32Array(512);
        var s = new Float32Array(32);
        for (var ss = 0; ss <= 17; ss++) {
          for (var i_8 = 1023; i_8 >= 64; i_8--) {
            v[(ch_3 * 1024 | 0) + i_8 | 0] = v[(ch_3 * 1024 | 0) + i_8 - 64 | 0];
          }
          for (var i_9 = 0; i_9 <= 31; i_9++) {
            s[i_9] = is[((ch_3 * 2 | 0) * 576 | 0) + (gr_1 * 576 | 0) + (i_9 * 18 | 0) + ss | 0];
          }
          for (var i_10 = 0; i_10 <= 63; i_10++) {
            var sum_1 = 0.0;
            for (var j_5 = 0; j_5 <= 31; j_5++) {
              sum_1 += this.SYNTH_WINDOW_TABLE_LAYER_III_8be2vx$[(i_10 * 32 | 0) + j_5 | 0] * s[j_5];
            }
            v[(ch_3 * 1024 | 0) + i_10 | 0] = sum_1;
          }
          for (var i_11 = 0; i_11 <= 7; i_11++) {
            for (var j_6 = 0; j_6 <= 31; j_6++) {
              u[(i_11 * 64 | 0) + j_6 | 0] = v[(ch_3 * 1024 | 0) + (i_11 * 128 | 0) + j_6 | 0];
              u[(i_11 * 64 | 0) + j_6 + 32 | 0] = v[(ch_3 * 1024 | 0) + (i_11 * 128 | 0) + j_6 + 96 | 0];
            }
          }
          for (var i_12 = 0; i_12 <= 511; i_12++)
            u[i_12] = u[i_12] * this.DI_COEFFICIENTS_8be2vx$[i_12];
          for (var i_13 = 0; i_13 <= 31; i_13++) {
            var sum_2 = 0.0;
            for (var j_7 = 0; j_7 <= 15; j_7++) {
              sum_2 += u[(j_7 * 32 | 0) + i_13 | 0];
            }
            var samp = numberToInt(sum_2 * 32767.0);
            if (samp > 32767) {
              samp = 32767;
            } else if (samp < -32767) {
              samp = -32767;
            }samp = samp & 65535;
            if (stereo > 1) {
              soundData.samplesBuffer[((((gr_1 * 18 | 0) * 32 | 0) * 2 | 0) * 2 | 0) + (((ss * 32 | 0) * 2 | 0) * 2 | 0) + ((i_13 * 2 | 0) * 2 | 0) + (ch_3 * 2 | 0) | 0] = toByte(samp);
              soundData.samplesBuffer[((((gr_1 * 18 | 0) * 32 | 0) * 2 | 0) * 2 | 0) + (((ss * 32 | 0) * 2 | 0) * 2 | 0) + ((i_13 * 2 | 0) * 2 | 0) + (ch_3 * 2 | 0) + 1 | 0] = toByte(samp >>> 8);
            } else {
              soundData.samplesBuffer[(((gr_1 * 18 | 0) * 32 | 0) * 2 | 0) + ((ss * 32 | 0) * 2 | 0) + (i_13 * 2 | 0) | 0] = toByte(samp);
              ensureNotNull(soundData.samplesBuffer)[(((gr_1 * 18 | 0) * 32 | 0) * 2 | 0) + ((ss * 32 | 0) * 2 | 0) + (i_13 * 2 | 0) + 1 | 0] = toByte(samp >>> 8);
            }
          }
        }
      }
    }
  };
  JavaMp3Decoder.prototype.stereo_short_III_qftas6$ = function (is, scalefac_s, gr, sfb, samplingFrequency) {
    var win_len = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb + 1 | 0] - this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb | 0] | 0;
    for (var win = 0; win <= 2; win++) {
      var is_pos = {v: null};
      var $receiver = scalefac_s[0 + ((gr * 12 | 0) * 3 | 0) + (sfb * 3 | 0) + win | 0];
      is_pos.v = $receiver;
      if ($receiver !== 7) {
        var sfb_start = (this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 23 + sfb | 0] * 3 | 0) + Kotlin.imul(win_len, win) | 0;
        var sfb_stop = sfb_start + win_len | 0;
        var is_ratio_l = is_pos.v === 6 ? 1.0 : this.IS_RATIOS_LAYER_III_8be2vx$[is_pos.v] / (1.0 + this.IS_RATIOS_LAYER_III_8be2vx$[is_pos.v]);
        var is_ratio_r = is_pos.v === 6 ? 0.0 : 1.0 / (1.0 + this.IS_RATIOS_LAYER_III_8be2vx$[is_pos.v]);
        for (var i = sfb_start; i < sfb_stop; i++) {
          is[0 + (gr * 576 | 0) + i | 0] = is[0 + (gr * 576 | 0) + i | 0] * is_ratio_l;
          is[1152 + (gr * 576 | 0) + i | 0] = is[1152 + (gr * 576 | 0) + i | 0] * is_ratio_r;
        }
      }}
  };
  JavaMp3Decoder.prototype.stereo_long_III_qftas6$ = function (is, scalefac_l, gr, sfb, samplingFrequency) {
    var is_pos = {v: null};
    var $receiver = scalefac_l[0 + (gr * 21 | 0) + sfb | 0];
    is_pos.v = $receiver;
    if ($receiver !== 7) {
      var sfb_start = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb | 0];
      var sfb_stop = this.SCALEFACTOR_BAND_INDICES_LAYER_III_8be2vx$[(samplingFrequency * 37 | 0) + 0 + sfb + 1 | 0];
      var is_ratio_l;
      var is_ratio_r;
      if (is_pos.v === 6) {
        is_ratio_l = 1.0;
        is_ratio_r = 0.0;
      } else {
        is_ratio_l = this.IS_RATIOS_LAYER_III_8be2vx$[is_pos.v] / (1.0 + this.IS_RATIOS_LAYER_III_8be2vx$[is_pos.v]);
        is_ratio_r = 1.0 / (1.0 + this.IS_RATIOS_LAYER_III_8be2vx$[is_pos.v]);
      }
      for (var i = sfb_start; i < sfb_stop; i++) {
        is[0 + (gr * 576 | 0) + i | 0] = is[0 + (gr * 576 | 0) + i | 0] * is_ratio_l;
        is[1152 + (gr * 576 | 0) + i | 0] = is[1152 + (gr * 576 | 0) + i | 0] * is_ratio_r;
      }
    }};
  JavaMp3Decoder.prototype.pow_0 = function (b, e) {
    return Math_0.pow(b, e);
  };
  JavaMp3Decoder.prototype.requantize_short_III_nwhljf$ = function (gr, ch, scalefac_scale, subblock_gain, global_gain, scalefac_s, is, is_pos, sfb, win) {
    var sf_mult = scalefac_scale[(ch * 2 | 0) + gr | 0] !== 0 ? 1.0 : 0.5;
    var tmp1 = sfb < 12 ? this.pow_0(2.0, -(sf_mult * scalefac_s[(((ch * 2 | 0) * 12 | 0) * 3 | 0) + ((gr * 12 | 0) * 3 | 0) + (sfb * 3 | 0) + win | 0])) : 1.0;
    var tmp2 = this.pow_0(2.0, 0.25 * (global_gain[(ch * 2 | 0) + gr | 0] - 210.0 - 8.0 * subblock_gain[((ch * 2 | 0) * 3 | 0) + (gr * 3 | 0) + win | 0]));
    var tmp3 = is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0] < 0.0 ? -this.POWTAB_LAYER_III_8be2vx$[numberToInt(-is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0])] : this.POWTAB_LAYER_III_8be2vx$[numberToInt(is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0])];
    is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0] = tmp1 * tmp2 * tmp3;
  };
  JavaMp3Decoder.prototype.requantize_long_III_orfflz$ = function (gr, ch, scalefac_scale, preflag, global_gain, scalefac_l, is, is_pos, sfb) {
    var tmp$, tmp$_0;
    var sf_mult = scalefac_scale[(ch * 2 | 0) + gr | 0] !== 0 ? 1.0 : 0.5;
    if (sfb < 21) {
      var pf_x_pt = preflag[(ch * 2 | 0) + gr | 0] * this.REQUANTIZE_LONG_PRETAB_LAYER_III_8be2vx$[sfb];
      tmp$ = this.pow_0(2.0, -(sf_mult * (scalefac_l[((ch * 2 | 0) * 21 | 0) + (gr * 21 | 0) + sfb | 0] + pf_x_pt)));
    } else {
      tmp$ = 1.0;
    }
    var tmp1 = tmp$;
    var tmp2 = this.pow_0(2.0, 0.25 * (global_gain[(ch * 2 | 0) + gr | 0] - 210 | 0));
    if (is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0] < 0.0) {
      tmp$_0 = -this.POWTAB_LAYER_III_8be2vx$[numberToInt(-is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0])];
    } else {
      tmp$_0 = this.POWTAB_LAYER_III_8be2vx$[numberToInt(is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0])];
    }
    var tmp3 = tmp$_0;
    is[((ch * 2 | 0) * 576 | 0) + (gr * 576 | 0) + is_pos | 0] = tmp1 * tmp2 * tmp3;
  };
  JavaMp3Decoder.prototype.huffman_III_eex9pk$ = function (mainDataReader, table_num, array) {
    var point = 0;
    var currpos;
    if (this.HUFFMAN_TREELEN_LAYER_III_8be2vx$[table_num] === 0) {
      array[3] = 0;
      array[2] = array[3];
      array[1] = array[2];
      array[0] = array[1];
      return;
    }var treelen = this.HUFFMAN_TREELEN_LAYER_III_8be2vx$[table_num];
    var linbits = this.HUFFMAN_LINBITS_LAYER_III_8be2vx$[table_num];
    var offset = this.HUFFMAN_TABLE_OFFSET_LAYER_III_8be2vx$[table_num];
    var error = 1;
    var bitsleft = 32;
    do {
      if ((this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] & 65280) === 0) {
        error = 0;
        array[0] = this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] >> 4 & 15;
        array[1] = this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] & 15;
        break;
      }if (this.read_t2q39f$(mainDataReader, 1) !== 0) {
        while ((this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] & 255) >= 250) {
          point = point + (this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] & 255) | 0;
        }
        point = point + (this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] & 255) | 0;
      } else {
        while (this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] >> 8 >= 250) {
          point = point + (this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] >> 8) | 0;
        }
        point = point + (this.HUFFMAN_TABLE_LAYER_III_8be2vx$[offset + point | 0] >> 8) | 0;
      }
    }
     while ((bitsleft = bitsleft - 1 | 0, bitsleft) > 0 && point < treelen);
    if (error !== 0) {
      array[1] = 0;
      array[0] = array[1];
      throw IllegalStateException_init('Illegal Huff code in data. bleft = %d,point = %d. tab = %d.' + toString(bitsleft) + ' ' + toString(point) + ' ' + toString(table_num));
    }if (table_num > 31) {
      array[2] = array[1] >> 3 & 1;
      array[3] = array[1] >> 2 & 1;
      array[0] = array[1] >> 1 & 1;
      array[1] = array[1] >> 0 & 1;
      if (array[2] > 0)
        if (this.read_t2q39f$(mainDataReader, 1) === 1)
          array[2] = -array[2] | 0;
      if (array[3] > 0)
        if (this.read_t2q39f$(mainDataReader, 1) === 1)
          array[3] = -array[3] | 0;
      if (array[0] > 0)
        if (this.read_t2q39f$(mainDataReader, 1) === 1)
          array[0] = -array[0] | 0;
      if (array[1] > 0)
        if (this.read_t2q39f$(mainDataReader, 1) === 1)
          array[1] = -array[1] | 0;
    } else {
      if (linbits > 0 && array[0] === 15) {
        array[0] = array[0] + this.read_t2q39f$(mainDataReader, linbits) | 0;
      }if (array[0] > 0) {
        if (this.read_t2q39f$(mainDataReader, 1) === 1) {
          array[0] = -array[0] | 0;
        }}if (linbits > 0 && array[1] === 15) {
        array[1] = array[1] + this.read_t2q39f$(mainDataReader, linbits) | 0;
      }if (array[1] > 0) {
        if (this.read_t2q39f$(mainDataReader, 1) === 1) {
          array[1] = -array[1] | 0;
        }}}
  };
  JavaMp3Decoder.prototype.samples_I_pggwpj$ = function (buffer, stereo, bound) {
    var tmp$, tmp$_0, tmp$_1;
    var bound_0 = bound;
    if (bound_0 < 0) {
      bound_0 = 32;
    }var allocation = new Int32Array(32 - bound_0 | 0);
    var allocationChannel = new Int32Array(Kotlin.imul(stereo, bound_0));
    var scalefactorChannel = new Int32Array(stereo * 32 | 0);
    var sampleDecoded = new Float32Array((stereo * 32 | 0) * 12 | 0);
    tmp$ = bound_0;
    for (var sb = 0; sb < tmp$; sb++) {
      for (var ch = 0; ch < stereo; ch++) {
        allocationChannel[Kotlin.imul(ch, bound_0) + sb | 0] = this.read_jpcm8n$(buffer, 4);
      }
    }
    for (var sb_0 = bound_0; sb_0 <= 31; sb_0++) {
      allocation[sb_0 - bound_0 | 0] = this.read_jpcm8n$(buffer, 4);
    }
    tmp$_0 = bound_0;
    for (var sb_1 = 0; sb_1 < tmp$_0; sb_1++) {
      for (var ch_0 = 0; ch_0 < stereo; ch_0++) {
        if (allocationChannel[Kotlin.imul(ch_0, bound_0) + sb_1 | 0] !== 0) {
          scalefactorChannel[(ch_0 * 32 | 0) + sb_1 | 0] = this.read_jpcm8n$(buffer, 6);
        }}
    }
    for (var sb_2 = bound_0; sb_2 <= 31; sb_2++) {
      for (var ch_1 = 0; ch_1 < stereo; ch_1++) {
        if (allocation[sb_2 - bound_0 | 0] !== 0) {
          scalefactorChannel[(ch_1 * 32 | 0) + sb_2 | 0] = this.read_jpcm8n$(buffer, 6);
        }}
    }
    for (var s = 0; s <= 11; s++) {
      tmp$_1 = bound_0;
      for (var sb_3 = 0; sb_3 < tmp$_1; sb_3++) {
        for (var ch_2 = 0; ch_2 < stereo; ch_2++) {
          var n = allocationChannel[Kotlin.imul(ch_2, bound_0) + sb_3 | 0];
          if (n === 0) {
            sampleDecoded[((ch_2 * 32 | 0) * 12 | 0) + (sb_3 * 12 | 0) + s | 0] = 0.0;
          } else {
            var read = this.read_jpcm8n$(buffer, n + 1 | 0);
            var fraction = 0.0;
            if ((read >> n & 1) === 0) {
              fraction = -1.0;
            }fraction += (read & (1 << n) - 1) / (1 << n) + 1.0 / (1 << n);
            var sfc = scalefactorChannel[(ch_2 * 32 | 0) + sb_3 | 0];
            if ((n + 1 | 0) >= this.PRE_FRACTOR_LAYER_I_8be2vx$.length)
              return null;
            sampleDecoded[((ch_2 * 32 | 0) * 12 | 0) + (sb_3 * 12 | 0) + s | 0] = this.SCALEFACTORS_8be2vx$[sfc] * this.PRE_FRACTOR_LAYER_I_8be2vx$[n + 1 | 0] * fraction;
          }
        }
      }
      for (var sb_4 = bound_0; sb_4 <= 31; sb_4++) {
        var sbb = sb_4 - bound_0 | 0;
        if (sbb < 0 || sbb >= allocationChannel.length)
          return null;
        var n_0 = allocationChannel[sbb];
        if (n_0 === 0) {
          sampleDecoded[384 + (sb_4 * 12 | 0) + s | 0] = 0.0;
          sampleDecoded[0 + (sb_4 * 12 | 0) + s | 0] = sampleDecoded[384 + (sb_4 * 12 | 0) + s | 0];
        } else {
          var read_0 = this.read_jpcm8n$(buffer, n_0 + 1 | 0);
          var fraction_0 = 0.0;
          if ((read_0 >> n_0 & 1) === 0) {
            fraction_0 = -1.0;
          }fraction_0 += (read_0 & (1 << n_0) - 1) / (1 << n_0) + 1.0 / (1 << n_0);
          for (var ch_3 = 0; ch_3 <= 1; ch_3++) {
            if ((n_0 + 1 | 0) >= this.PRE_FRACTOR_LAYER_I_8be2vx$.length)
              return null;
            sampleDecoded[((ch_3 * 32 | 0) * 12 | 0) + (sb_4 * 12 | 0) + s | 0] = this.SCALEFACTORS_8be2vx$[scalefactorChannel[(ch_3 * 32 | 0) + sb_4 | 0]] * this.PRE_FRACTOR_LAYER_I_8be2vx$[n_0 + 1 | 0] * fraction_0;
          }
        }
      }
    }
    return sampleDecoded;
  };
  JavaMp3Decoder.prototype.samples_II_89g89$ = function (buffer, stereo, bound, bitrate, frequency) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var bound_0 = bound;
    if (frequency !== 48000 && (bitrate >= 96000 || bitrate === 0))
      tmp$ = 1;
    else if (frequency !== 32000 && (1 <= bitrate && bitrate <= 48000))
      tmp$ = 2;
    else if (frequency === 32000 && (1 <= bitrate && bitrate <= 48000))
      tmp$ = 3;
    else
      tmp$ = 0;
    var sbIndex = tmp$;
    var sbLimit = this.SB_LIMIT_8be2vx$[sbIndex];
    if (bound_0 < 0)
      bound_0 = sbLimit;
    var allocation = new Int32Array(sbLimit - bound_0 | 0);
    var allocationChannel = new Int32Array(Kotlin.imul(stereo, bound_0));
    var scfsi = new Int32Array(Kotlin.imul(stereo, sbLimit));
    var scalefactorChannel = new Int32Array(Kotlin.imul(stereo, sbLimit) * 3 | 0);
    var sampleDecoded = new Float32Array(((stereo * 32 | 0) * 12 | 0) * 3 | 0);
    tmp$_0 = bound_0;
    for (var sb = 0; sb < tmp$_0; sb++) {
      for (var ch = 0; ch < stereo; ch++)
        allocationChannel[Kotlin.imul(ch, bound_0) + sb | 0] = this.read_jpcm8n$(buffer, this.NBAL_8be2vx$[sbIndex][sb]);
    }
    for (var sb_0 = bound_0; sb_0 < sbLimit; sb_0++)
      allocation[sb_0 - bound_0 | 0] = this.read_jpcm8n$(buffer, this.NBAL_8be2vx$[sbIndex][sb_0]);
    tmp$_1 = bound_0;
    for (var sb_1 = 0; sb_1 < tmp$_1; sb_1++) {
      for (var ch_0 = 0; ch_0 < stereo; ch_0++) {
        if (allocationChannel[Kotlin.imul(ch_0, bound_0) + sb_1 | 0] !== 0) {
          scfsi[Kotlin.imul(ch_0, sbLimit) + sb_1 | 0] = this.read_jpcm8n$(buffer, 2);
        }}
    }
    for (var sb_2 = bound_0; sb_2 < sbLimit; sb_2++) {
      for (var ch_1 = 0; ch_1 < stereo; ch_1++) {
        if (allocation[sb_2 - bound_0 | 0] !== 0) {
          scfsi[Kotlin.imul(ch_1, sbLimit) + sb_2 | 0] = this.read_jpcm8n$(buffer, 2);
        }}
    }
    tmp$_2 = bound_0;
    for (var sb_3 = 0; sb_3 < tmp$_2; sb_3++) {
      for (var ch_2 = 0; ch_2 < stereo; ch_2++) {
        if (allocationChannel[Kotlin.imul(ch_2, bound_0) + sb_3 | 0] !== 0) {
          var offset = (Kotlin.imul(ch_2, sbLimit) * 3 | 0) + (sb_3 * 3 | 0) | 0;
          if (scfsi[Kotlin.imul(ch_2, sbLimit) + sb_3 | 0] === 0) {
            scalefactorChannel[offset + 0 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset + 1 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset + 2 | 0] = this.read_jpcm8n$(buffer, 6);
          } else if (scfsi[Kotlin.imul(ch_2, sbLimit) + sb_3 | 0] === 1) {
            scalefactorChannel[offset + 1 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset + 0 | 0] = scalefactorChannel[offset + 1 | 0];
            scalefactorChannel[offset + 2 | 0] = this.read_jpcm8n$(buffer, 6);
          } else if (scfsi[Kotlin.imul(ch_2, sbLimit) + sb_3 | 0] === 2) {
            scalefactorChannel[offset + 2 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset + 1 | 0] = scalefactorChannel[offset + 2 | 0];
            scalefactorChannel[offset + 0 | 0] = scalefactorChannel[offset + 1 | 0];
          } else if (scfsi[Kotlin.imul(ch_2, sbLimit) + sb_3 | 0] === 3) {
            scalefactorChannel[offset + 0 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset + 2 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset + 1 | 0] = scalefactorChannel[offset + 2 | 0];
          }}}
    }
    for (var sb_4 = bound_0; sb_4 < sbLimit; sb_4++) {
      for (var ch_3 = 0; ch_3 < stereo; ch_3++) {
        if (allocation[sb_4 - bound_0 | 0] !== 0) {
          var offset_0 = (Kotlin.imul(ch_3, sbLimit) * 3 | 0) + (sb_4 * 3 | 0) | 0;
          if (scfsi[Kotlin.imul(ch_3, sbLimit) + sb_4 | 0] === 0) {
            scalefactorChannel[offset_0 + 0 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset_0 + 1 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset_0 + 2 | 0] = this.read_jpcm8n$(buffer, 6);
          } else if (scfsi[Kotlin.imul(ch_3, sbLimit) + sb_4 | 0] === 1) {
            scalefactorChannel[offset_0 + 1 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset_0 + 0 | 0] = scalefactorChannel[offset_0 + 1 | 0];
            scalefactorChannel[offset_0 + 2 | 0] = this.read_jpcm8n$(buffer, 6);
          } else if (scfsi[Kotlin.imul(ch_3, sbLimit) + sb_4 | 0] === 2) {
            scalefactorChannel[offset_0 + 2 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset_0 + 1 | 0] = scalefactorChannel[offset_0 + 2 | 0];
            scalefactorChannel[offset_0 + 0 | 0] = scalefactorChannel[offset_0 + 1 | 0];
          } else if (scfsi[Kotlin.imul(ch_3, sbLimit) + sb_4 | 0] === 3) {
            scalefactorChannel[offset_0 + 0 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset_0 + 2 | 0] = this.read_jpcm8n$(buffer, 6);
            scalefactorChannel[offset_0 + 1 | 0] = scalefactorChannel[offset_0 + 2 | 0];
          }}}
    }
    for (var gr = 0; gr <= 11; gr++) {
      tmp$_3 = bound_0;
      for (var sb_5 = 0; sb_5 < tmp$_3; sb_5++) {
        for (var ch_4 = 0; ch_4 < stereo; ch_4++) {
          var n = allocationChannel[Kotlin.imul(ch_4, bound_0) + sb_5 | 0];
          var offset_1 = (((ch_4 * 32 | 0) * 12 | 0) * 3 | 0) + ((sb_5 * 12 | 0) * 3 | 0) + (gr * 3 | 0) | 0;
          if (n === 0) {
            sampleDecoded[offset_1 + 2 | 0] = 0.0;
            sampleDecoded[offset_1 + 1 | 0] = sampleDecoded[offset_1 + 2 | 0];
            sampleDecoded[offset_1] = sampleDecoded[offset_1 + 1 | 0];
          } else {
            var index = this.QUANTIZATION_INDEX_LAYER_II_8be2vx$[sbIndex][sb_5][n - 1 | 0];
            var sampleInt = new Int32Array(3);
            var sampleBits = this.BITS_LAYER_II_8be2vx$[index];
            var nlevels = this.NLEVELS_8be2vx$[index];
            if (this.GROUPING_LAYER_II_8be2vx$[index]) {
              var samplecode = this.read_jpcm8n$(buffer, sampleBits);
              sampleInt[0] = samplecode % nlevels;
              samplecode = samplecode / nlevels | 0;
              sampleInt[1] = samplecode % nlevels;
              samplecode = samplecode / nlevels | 0;
              sampleInt[2] = samplecode % nlevels;
            } else {
              sampleInt[0] = this.read_jpcm8n$(buffer, sampleBits);
              sampleInt[1] = this.read_jpcm8n$(buffer, sampleBits);
              sampleInt[2] = this.read_jpcm8n$(buffer, sampleBits);
            }
            var msb = 0;
            while (1 << msb <= nlevels) {
              msb = msb + 1 | 0;
            }
            msb = msb - 1 | 0;
            for (var i = 0; i <= 2; i++) {
              var sample = 0.0;
              if ((sampleInt[i] >> msb & 1) === 0) {
                sample = -1.0;
              }sample += (sampleInt[i] & (1 << msb) - 1) / (1 << msb);
              sample += this.D_LAYER_II_8be2vx$[index];
              sample *= this.C_LAYER_II_8be2vx$[index];
              sample *= this.SCALEFACTORS_8be2vx$[scalefactorChannel[(Kotlin.imul(ch_4, sbLimit) * 3 | 0) + (sb_5 * 3 | 0) + (gr / 4 | 0) | 0]];
              sampleDecoded[offset_1 + i | 0] = sample;
            }
          }
        }
      }
      for (var sb_6 = bound_0; sb_6 < sbLimit; sb_6++) {
        var n_0 = allocation[sb_6 - bound_0 | 0];
        var offset_2 = ((sb_6 * 12 | 0) * 3 | 0) + (gr * 3 | 0) | 0;
        if (n_0 === 0) {
          for (var ch_5 = 0; ch_5 < stereo; ch_5++) {
            sampleDecoded[offset_2 + (((ch_5 * 32 | 0) * 12 | 0) * 3 | 0) + 2 | 0] = 0.0;
            sampleDecoded[offset_2 + (((ch_5 * 32 | 0) * 12 | 0) * 3 | 0) + 1 | 0] = sampleDecoded[offset_2 + (((ch_5 * 32 | 0) * 12 | 0) * 3 | 0) + 2 | 0];
            sampleDecoded[offset_2 + (((ch_5 * 32 | 0) * 12 | 0) * 3 | 0) | 0] = sampleDecoded[offset_2 + (((ch_5 * 32 | 0) * 12 | 0) * 3 | 0) + 1 | 0];
          }
        } else {
          var index_0 = this.QUANTIZATION_INDEX_LAYER_II_8be2vx$[sbIndex][sb_6][n_0 - 1 | 0];
          var sampleInt_0 = new Int32Array(3);
          var sampleBits_0 = this.BITS_LAYER_II_8be2vx$[index_0];
          var nlevels_0 = this.NLEVELS_8be2vx$[index_0];
          if (this.GROUPING_LAYER_II_8be2vx$[index_0]) {
            var samplecode_0 = this.read_jpcm8n$(buffer, sampleBits_0);
            sampleInt_0[0] = samplecode_0 % nlevels_0;
            samplecode_0 = samplecode_0 / nlevels_0 | 0;
            sampleInt_0[1] = samplecode_0 % nlevels_0;
            samplecode_0 = samplecode_0 / nlevels_0 | 0;
            sampleInt_0[2] = samplecode_0 % nlevels_0;
          } else {
            sampleInt_0[0] = this.read_jpcm8n$(buffer, sampleBits_0);
            sampleInt_0[1] = this.read_jpcm8n$(buffer, sampleBits_0);
            sampleInt_0[2] = this.read_jpcm8n$(buffer, sampleBits_0);
          }
          var msb_0 = 0;
          while (1 << msb_0 <= nlevels_0) {
            msb_0 = msb_0 + 1 | 0;
          }
          msb_0 = msb_0 - 1 | 0;
          for (var i_0 = 0; i_0 <= 2; i_0++) {
            var sample_0 = 0.0;
            if ((sampleInt_0[i_0] >> msb_0 & 1) === 0) {
              sample_0 = -1.0;
            }sample_0 += (sampleInt_0[i_0] & (1 << msb_0) - 1) / (1 << msb_0);
            sample_0 += this.D_LAYER_II_8be2vx$[index_0];
            sample_0 *= this.C_LAYER_II_8be2vx$[index_0];
            for (var ch_6 = 0; ch_6 < stereo; ch_6++) {
              sampleDecoded[offset_2 + (((ch_6 * 32 | 0) * 12 | 0) * 3 | 0) + i_0 | 0] = sample_0 * this.SCALEFACTORS_8be2vx$[scalefactorChannel[(Kotlin.imul(ch_6, sbLimit) * 3 | 0) + (sb_6 * 3 | 0) + (gr / 4 | 0) | 0]];
            }
          }
        }
      }
    }
    return sampleDecoded;
  };
  JavaMp3Decoder.prototype.synth_63p8h7$ = function (soundData, samples, synthOffset, synthBuffer, stereo) {
    var tmp$;
    var size = (ensureNotNull(samples).length / stereo | 0) / 32 | 0;
    var pcm = new Float32Array(Kotlin.imul(size * 32 | 0, stereo));
    for (var ch = 0; ch < stereo; ch++) {
      for (var s = 0; s < size; s++) {
        synthOffset[ch] = synthOffset[ch] - 64 & 1023;
        for (var i = 0; i <= 63; i++) {
          var sum = 0.0;
          for (var k = 0; k <= 31; k++) {
            sum += this.NIK_COEFFICIENTS_8be2vx$[(i * 32 | 0) + k | 0] * samples[Kotlin.imul(ch * 32 | 0, size) + Kotlin.imul(k, size) + s | 0];
          }
          synthBuffer[(ch * 1024 | 0) + synthOffset[ch] + i | 0] = sum;
        }
        for (var j = 0; j <= 31; j++) {
          var sum_0 = 0.0;
          for (var i_0 = 0; i_0 <= 15; i_0++) {
            var k_0 = j + (i_0 << 5) | 0;
            sum_0 += this.DI_COEFFICIENTS_8be2vx$[k_0] * synthBuffer[(ch * 1024 | 0) + (synthOffset[ch] + (k_0 + (i_0 + 1 >> 1 << 6)) & 1023) | 0];
          }
          pcm[Kotlin.imul(s * 32 | 0, stereo) + Kotlin.imul(j, stereo) + ch | 0] = sum_0;
        }
      }
    }
    if (soundData.samplesBufferInit === false) {
      soundData.samplesBufferInit = true;
      soundData.samplesBuffer = new Int8Array(Kotlin.imul(size * 32 | 0, stereo) * 2 | 0);
    }tmp$ = Kotlin.imul(size * 32 | 0, stereo);
    for (var i_1 = 0; i_1 < tmp$; i_1++) {
      var sample = numberToInt(pcm[i_1] * 32768);
      if (sample >= 32768) {
        sample = 32767;
      } else if (sample < -32768) {
        sample = -32768;
      }ensureNotNull(soundData.samplesBuffer)[i_1 * 2 | 0] = toByte(sample);
      ensureNotNull(soundData.samplesBuffer)[(i_1 * 2 | 0) + 1 | 0] = toByte(sample >>> 8);
    }
  };
  JavaMp3Decoder.prototype.read_t2q39f$ = function (reader, bits) {
    var bits_0 = bits;
    var number = 0;
    while (bits_0 > 0) {
      var a = bits_0;
      var b = 8 - ensureNotNull(reader).current | 0;
      var advance = Math_0.min(a, b);
      bits_0 = bits_0 - advance | 0;
      reader.current = reader.current + advance | 0;
      number = number | ((reader.array[reader.index] & 255) >>> 8 - reader.current & 255 >>> 8 - advance) << bits_0;
      if (reader.current === 8) {
        reader.current = 0;
        reader.index = reader.index + 1 | 0;
      }}
    return number;
  };
  JavaMp3Decoder.prototype.read_jpcm8n$ = function (buffer, bits) {
    var bits_0 = bits;
    var number = 0;
    while (bits_0 > 0) {
      var a = bits_0;
      var b = 8 - ensureNotNull(buffer).current | 0;
      var advance = Math_0.min(a, b);
      bits_0 = bits_0 - advance | 0;
      buffer.current = buffer.current + advance | 0;
      if (bits_0 !== 0 && buffer.lastByte === -1) {
        throw new EOFException('Unexpected EOF reached in MPEG data');
      }number = number | (buffer.lastByte >>> 8 - buffer.current & 255 >>> 8 - advance) << bits_0;
      if (buffer.current === 8) {
        buffer.current = 0;
        buffer.lastByte = buffer.inp.read();
      }}
    return number;
  };
  JavaMp3Decoder.prototype.readInto_v4n8vb$ = function (buffer, array, offset, length) {
    if (ensureNotNull(buffer).current !== 0) {
      throw IllegalStateException_init('buffer current is ' + toString(buffer.current));
    }if (length === 0) {
      return;
    }if (buffer.lastByte === -1) {
      throw new EOFException('Unexpected EOF reached in MPEG data');
    }array[offset] = toByte(buffer.lastByte);
    var read = 1;
    while (read < length) {
      read = read + buffer.inp.read_mj6st8$(array, offset + read | 0, length - read | 0) | 0;
    }
    buffer.lastByte = buffer.inp.read();
  };
  function JavaMp3Decoder$FrameHeader(soundData) {
    this.sigBytes = 0;
    this.version = 0;
    this.layer = 0;
    this.protectionBit = 0;
    this.bitrateIndex = 0;
    this.samplingFrequency = 0;
    this.paddingBit = 0;
    this.privateBit = 0;
    this.mode = 0;
    this.modeExtension = 0;
    this.set_ha2gpb$(soundData);
  }
  Object.defineProperty(JavaMp3Decoder$FrameHeader.prototype, 'nchannels', {
    get: function () {
      return this.mode === 3 ? 1 : 2;
    }
  });
  JavaMp3Decoder$FrameHeader.prototype.set_ha2gpb$ = function (soundData) {
    ensureNotNull(soundData.buffer_8be2vx$).current = 0;
    soundData.buffer_8be2vx$.mark_za3lpa$(4);
    try {
      this.sigBytes = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 12);
      this.version = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 1);
      this.layer = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 2);
      this.protectionBit = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 1);
      this.bitrateIndex = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 4);
      this.samplingFrequency = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 2);
      this.paddingBit = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 1);
      this.privateBit = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 1);
      this.mode = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 2);
      this.modeExtension = JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 2);
      JavaMp3Decoder_getInstance().read_jpcm8n$(soundData.buffer_8be2vx$, 4);
    } catch (e) {
      if (Kotlin.isType(e, EOFException)) {
        this.sigBytes = 0;
      } else
        throw e;
    }
  };
  JavaMp3Decoder$FrameHeader.prototype.unRead_ha2gpb$ = function (soundData) {
    ensureNotNull(soundData.buffer_8be2vx$).reset();
    soundData.buffer_8be2vx$.lastByte = this.sigBytes >>> 4;
  };
  Object.defineProperty(JavaMp3Decoder$FrameHeader.prototype, 'isValid_8be2vx$', {
    get: function () {
      return this.sigBytes === 4095 && this.layer !== 0 && this.bitrateIndex !== 15 && this.samplingFrequency !== 3;
    }
  });
  JavaMp3Decoder$FrameHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameHeader',
    interfaces: []
  };
  function JavaMp3Decoder$MainDataReader(array) {
    this.array = array;
    this.top = 0;
    this.index = 0;
    this.current = 0;
  }
  JavaMp3Decoder$MainDataReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainDataReader',
    interfaces: []
  };
  function JavaMp3Decoder$Buffer(inp) {
    this.inp = inp;
    this.current = 0;
    this.lastByte = this.inp.read();
    this.markedPos_0 = L0;
  }
  JavaMp3Decoder$Buffer.prototype.mark_za3lpa$ = function (count) {
    this.markedPos_0 = this.inp.position;
  };
  JavaMp3Decoder$Buffer.prototype.reset = function () {
    this.inp.position = this.markedPos_0;
  };
  JavaMp3Decoder$Buffer.prototype.seek_s8cxhz$ = function (pos) {
    this.inp.position = pos;
    this.markedPos_0 = L0;
    this.current = 0;
    this.lastByte = this.inp.read();
  };
  JavaMp3Decoder$Buffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Buffer',
    interfaces: []
  };
  function JavaMp3Decoder$SoundData(buffer) {
    this.buffer_8be2vx$ = buffer;
    this.frequency = -1;
    this.stereo = -1;
    this.synthOffset_8be2vx$ = new Int32Array([64, 64]);
    this.synthBuffer_8be2vx$ = new Float32Array(2048);
    this.mainData_8be2vx$ = new Int8Array(2048);
    this.store_8be2vx$ = new Float32Array(1152);
    this.v_8be2vx$ = new Float32Array(2048);
    this.mainDataReader_8be2vx$ = new JavaMp3Decoder$MainDataReader(this.mainData_8be2vx$);
    this.samplesBufferInit = false;
    this.samplesBuffer_j4loj9$_0 = this.samplesBuffer_j4loj9$_0;
  }
  Object.defineProperty(JavaMp3Decoder$SoundData.prototype, 'nchannels', {
    get: function () {
      return this.stereo === 1 ? 2 : 1;
    }
  });
  Object.defineProperty(JavaMp3Decoder$SoundData.prototype, 'samplesBuffer', {
    get: function () {
      if (this.samplesBuffer_j4loj9$_0 == null)
        return throwUPAE('samplesBuffer');
      return this.samplesBuffer_j4loj9$_0;
    },
    set: function (samplesBuffer) {
      this.samplesBuffer_j4loj9$_0 = samplesBuffer;
    }
  });
  JavaMp3Decoder$SoundData.prototype.seek_s8cxhz$ = function (pos) {
    if (true) {
      this.mainDataReader_8be2vx$.index = 0;
      this.mainDataReader_8be2vx$.current = 0;
      this.buffer_8be2vx$.seek_s8cxhz$(pos);
    }};
  JavaMp3Decoder$SoundData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundData',
    interfaces: []
  };
  JavaMp3Decoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JavaMp3Decoder',
    interfaces: []
  };
  var JavaMp3Decoder_instance = null;
  function JavaMp3Decoder_getInstance() {
    if (JavaMp3Decoder_instance === null) {
      new JavaMp3Decoder();
    }return JavaMp3Decoder_instance;
  }
  function MP3Decoder() {
    MP3Decoder$Companion_getInstance();
    AudioFormat.call(this, ['mp3']);
  }
  function MP3Decoder$Companion() {
    MP3Decoder$Companion_instance = this;
    MP3Decoder.call(this);
  }
  MP3Decoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [MP3Decoder]
  };
  var MP3Decoder$Companion_instance = null;
  function MP3Decoder$Companion_getInstance() {
    if (MP3Decoder$Companion_instance === null) {
      new MP3Decoder$Companion();
    }return MP3Decoder$Companion_instance;
  }
  MP3Decoder.prototype.tryReadInfo_yt2zhq$$default = function (data, props, continuation) {
    return MP3$Companion_getInstance().tryReadInfo_yt2zhq$(data, props, continuation);
  };
  MP3Decoder.prototype.decodeStream_yt2zhq$$default = function (data, props, continuation) {
    return createJavaMp3DecoderStream(data, continuation);
  };
  MP3Decoder.prototype.toString = function () {
    return 'NativeMp3DecoderFormat';
  };
  MP3Decoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3Decoder',
    interfaces: [AudioFormat]
  };
  function Coroutine$createJavaMp3DecoderStream(s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$s = s_0;
  }
  Coroutine$createJavaMp3DecoderStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createJavaMp3DecoderStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createJavaMp3DecoderStream.prototype.constructor = Coroutine$createJavaMp3DecoderStream;
  Coroutine$createJavaMp3DecoderStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = createJavaMp3DecoderStream_0(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  function createJavaMp3DecoderStream(s_0, continuation_0, suspended) {
    var instance = new Coroutine$createJavaMp3DecoderStream(s_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function createJavaMp3DecoderStream$ObjectLiteral(closure$samplesPos, closure$seekPos, closure$data, closure$deque, closure$mp3SeekingTable, closure$decodeSamples, closure$samples, closure$idata, rate, channels) {
    this.closure$samplesPos = closure$samplesPos;
    this.closure$seekPos = closure$seekPos;
    this.closure$data = closure$data;
    this.closure$deque = closure$deque;
    this.closure$mp3SeekingTable = closure$mp3SeekingTable;
    this.closure$decodeSamples = closure$decodeSamples;
    this.closure$samples = closure$samples;
    this.closure$idata = closure$idata;
    AudioStream.call(this, rate, channels);
    this.finished_u7gjl8$_0 = false;
    this.totalLengthInSamples_i10fvg$_0 = closure$mp3SeekingTable.lengthSamples;
  }
  Object.defineProperty(createJavaMp3DecoderStream$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_u7gjl8$_0;
    },
    set: function (finished) {
      this.finished_u7gjl8$_0 = finished;
    }
  });
  Object.defineProperty(createJavaMp3DecoderStream$ObjectLiteral.prototype, 'totalLengthInSamples', {
    get: function () {
      return this.totalLengthInSamples_i10fvg$_0;
    }
  });
  Object.defineProperty(createJavaMp3DecoderStream$ObjectLiteral.prototype, 'currentPositionInSamples', {
    get: function () {
      return this.closure$samplesPos.v;
    },
    set: function (value) {
      this.closure$seekPos.v = value;
      this.closure$samplesPos.v = value;
      this.finished = false;
    }
  });
  createJavaMp3DecoderStream$ObjectLiteral.prototype.seek_0 = function (pos) {
    this.closure$data.v.seek_s8cxhz$(pos);
    while (JavaMp3Decoder_getInstance().decodeFrame_smp1v0$(this.closure$data.v) === JavaMp3Decoder$DecodeStatus$ERROR_getInstance()) {
    }
    JavaMp3Decoder_getInstance().decodeFrame_smp1v0$(this.closure$data.v);
  };
  createJavaMp3DecoderStream$ObjectLiteral.prototype.read_trriok$ = function (out, offset, length, continuation) {
    if (this.closure$seekPos.v.compareTo_11rb$(L0) >= 0) {
      this.closure$deque.clear();
      if (equals(this.closure$seekPos.v, L0)) {
        this.seek_0(L0);
      } else {
        this.seek_0(this.closure$mp3SeekingTable.locateSample_s8cxhz$(this.closure$seekPos.v));
      }
      this.closure$seekPos.v = L_1;
    }if (this.closure$deque.availableRead < length) {
      if (!this.finished && JavaMp3Decoder_getInstance().decodeFrame_smp1v0$(this.closure$data.v) !== JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance()) {
        this.closure$decodeSamples();
        this.closure$deque.writeInterleaved_rbjysc$(this.closure$samples, 0);
      } else {
        this.finished = true;
      }
    }var $receiver = this.closure$deque.read_trriok$(out, offset, length);
    this.closure$samplesPos;
    var closure$samplesPos = this.closure$samplesPos;
    closure$samplesPos.v = closure$samplesPos.v.add(Kotlin.Long.fromInt(length));
    return $receiver;
  };
  createJavaMp3DecoderStream$ObjectLiteral.prototype.clone = function (continuation) {
    return createJavaMp3DecoderStream_0(this.closure$idata, continuation);
  };
  createJavaMp3DecoderStream$ObjectLiteral.prototype.close = function () {
    this.finished = true;
  };
  createJavaMp3DecoderStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  function createJavaMp3DecoderStream_0(idata, continuation) {
    var sdata = openAsync(idata);
    throw IllegalStateException_init('Not an mp3 file [2]'.toString());
  }
  var temp;
  function write($receiver, value) {
    temp[0] = value;
    $receiver.write_kgymra$(temp, 0, 1);
  }
  var KORAU_VERSION;
  function get_niceStr($receiver) {
    return Math_0.floor($receiver) === $receiver ? numberToInt($receiver).toString() : $receiver.toString();
  }
  function SampleConvert() {
    SampleConvert_instance = this;
  }
  SampleConvert.prototype.floatToShort_mx4ult$ = function (v) {
    return toShort(clamp(numberToInt(v * kotlin_js_internal_ShortCompanionObject.MAX_VALUE), -32768, 32767));
  };
  SampleConvert.prototype.shortToFloat_mq22fl$ = function (v) {
    return v / kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
  };
  SampleConvert.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SampleConvert',
    interfaces: []
  };
  var SampleConvert_instance = null;
  function SampleConvert_getInstance() {
    if (SampleConvert_instance === null) {
      new SampleConvert();
    }return SampleConvert_instance;
  }
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function combine($receiver) {
    var tmp$;
    var tmp$_0 = Int16Array;
    var tmp$_1;
    var sum = 0;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      sum = sum + element.length | 0;
    }
    var combined = new tmp$_0(sum);
    var pos = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var buffer = tmp$.next();
      arrayCopy(buffer, combined, pos, 0, 0 + buffer.length | 0);
      pos = pos + $receiver.size | 0;
    }
    return combined;
  }
  function Coroutine$copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deque = deque_0;
    this.local$temp = temp_0;
    this.local$maxSize = maxSize_0;
  }
  Coroutine$copyChunkTo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$copyChunkTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyChunkTo.prototype.constructor = Coroutine$copyChunkTo;
  Coroutine$copyChunkTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$maxSize === void 0)
              this.local$maxSize = this.local$temp.length;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read_mj6st8$(this.local$temp, 0, this.local$maxSize, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var size = this.result_0;
            this.local$deque.write_mj6st8$(this.local$temp, 0, size);
            return size;
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
  function copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0, suspended) {
    var instance = new Coroutine$copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function toByteArrayLE($receiver) {
    var out = new Int8Array($receiver.length * 2 | 0);
    for (var n = 0; n < $receiver.length; n++) {
      out[(n * 2 | 0) + 0 | 0] = toByte($receiver[n] >> 0);
      out[(n * 2 | 0) + 1 | 0] = toByte($receiver[n] >> 8);
    }
    return out;
  }
  function toShortArrayLE($receiver) {
    var out = new Int16Array($receiver.length / 2 | 0);
    for (var n = 0; n < out.length; n++) {
      var l = $receiver[(n * 2 | 0) + 0 | 0] & 255;
      var h = $receiver[(n * 2 | 0) + 1 | 0] & 255;
      out[n] = toShort(h << 8 | l);
    }
    return out;
  }
  function arraycopyStep(step, src, srcPos, dst, dstPos, length) {
    for (var n = 0; n < length; n += step)
      dst[dstPos + n | 0] = src[srcPos + n | 0];
  }
  function arraycopyStep_0(step, src, srcPos, dst, dstPos, length) {
    for (var n = 0; n < length; n += step)
      dst[dstPos + n | 0] = src[srcPos + n | 0];
  }
  var arraycopy$lambda_1 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function AudioData(rate, samples) {
    AudioData$Companion_getInstance();
    this.rate = rate;
    this.samples = samples;
    this.samplesInterleaved_i5r49h$_0 = lazy(AudioData$samplesInterleaved$lambda(this));
  }
  Object.defineProperty(AudioData.prototype, 'samplesInterleaved', {
    get: function () {
      return this.samplesInterleaved_i5r49h$_0.value;
    }
  });
  function AudioData$Companion() {
    AudioData$Companion_instance = this;
    this.DUMMY_o40jgj$_0 = lazy(AudioData$Companion$DUMMY$lambda);
  }
  Object.defineProperty(AudioData$Companion.prototype, 'DUMMY', {
    get: function () {
      return this.DUMMY_o40jgj$_0.value;
    }
  });
  function AudioData$Companion$DUMMY$lambda() {
    return new AudioData(44100, new AudioSamples(2, 0));
  }
  AudioData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioData$Companion_instance = null;
  function AudioData$Companion_getInstance() {
    if (AudioData$Companion_instance === null) {
      new AudioData$Companion();
    }return AudioData$Companion_instance;
  }
  Object.defineProperty(AudioData.prototype, 'stereo', {
    get: function () {
      return this.channels > 1;
    }
  });
  Object.defineProperty(AudioData.prototype, 'channels', {
    get: function () {
      return this.samples.channels;
    }
  });
  Object.defineProperty(AudioData.prototype, 'totalSamples', {
    get: function () {
      return this.samples.totalSamples;
    }
  });
  Object.defineProperty(AudioData.prototype, 'totalTime', {
    get: function () {
      return this.timeAtSample_za3lpa$(this.totalSamples);
    }
  });
  AudioData.prototype.timeAtSample_za3lpa$ = function (sample) {
    var $receiver = sample / this.rate;
    return TimeSpan.Companion.fromSeconds_14dthe$($receiver);
  };
  AudioData.prototype.get_za3lpa$ = function (channel) {
    return this.samples.data[channel];
  };
  AudioData.prototype.get_vux9f0$ = function (channel, sample) {
    return this.samples.data[channel][sample];
  };
  AudioData.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.samples.data[channel][sample] = value;
  };
  AudioData.prototype.toString = function () {
    return 'AudioData(rate=' + this.rate + ', channels=' + this.channels + ', samples=' + this.totalSamples + ')';
  };
  function AudioData$samplesInterleaved$lambda(this$AudioData) {
    return function () {
      return interleaved(this$AudioData.samples);
    };
  }
  AudioData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioData',
    interfaces: []
  };
  function AudioConversionQuality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AudioConversionQuality_initFields() {
    AudioConversionQuality_initFields = function () {
    };
    AudioConversionQuality$FAST_instance = new AudioConversionQuality('FAST', 0);
  }
  var AudioConversionQuality$FAST_instance;
  function AudioConversionQuality$FAST_getInstance() {
    AudioConversionQuality_initFields();
    return AudioConversionQuality$FAST_instance;
  }
  AudioConversionQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioConversionQuality',
    interfaces: [Enum]
  };
  function AudioConversionQuality$values() {
    return [AudioConversionQuality$FAST_getInstance()];
  }
  AudioConversionQuality.values = AudioConversionQuality$values;
  function AudioConversionQuality$valueOf(name) {
    switch (name) {
      case 'FAST':
        return AudioConversionQuality$FAST_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.sound.AudioConversionQuality.' + name);
    }
  }
  AudioConversionQuality.valueOf_61zpoe$ = AudioConversionQuality$valueOf;
  function withRate($receiver, rate) {
    return new AudioData(rate, $receiver.samples);
  }
  function toStream($receiver) {
    return new AudioDataStream($receiver);
  }
  function AudioDataStream(data) {
    AudioStream.call(this, data.rate, data.channels);
    this.data = data;
    this.cursor = 0;
    this.finished_x7y4p3$_0 = false;
  }
  Object.defineProperty(AudioDataStream.prototype, 'finished', {
    get: function () {
      return this.finished_x7y4p3$_0;
    },
    set: function (finished) {
      this.finished_x7y4p3$_0 = finished;
    }
  });
  AudioDataStream.prototype.read_trriok$ = function (out, offset, length, continuation) {
    var tmp$;
    var available = this.data.samples.totalSamples - this.cursor | 0;
    var toread = Math_0.min(available, length);
    if (toread > 0) {
      tmp$ = this.channels;
      for (var n = 0; n < tmp$; n++) {
        var srcPos = this.cursor;
        arrayCopy(this.data.samples.get_za3lpa$(n), out.get_za3lpa$(n), offset, srcPos, srcPos + toread | 0);
      }
    }if (toread <= 0)
      this.finished = true;
    return toread;
  };
  AudioDataStream.prototype.clone = function (continuation) {
    return new AudioDataStream(this.data);
  };
  AudioDataStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioDataStream',
    interfaces: [AudioStream]
  };
  function toNativeSound($receiver, continuation) {
    return get_nativeSoundProvider().createSound_7xzv69$($receiver, void 0, void 0, void 0, continuation);
  }
  function Coroutine$playAndWait($receiver_0, times_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$times = times_0;
  }
  Coroutine$playAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait.prototype.constructor = Coroutine$playAndWait;
  Coroutine$playAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$times === void 0) {
              this.local$times = new PlaybackTimes(1);
            }
            this.state_0 = 2;
            this.result_0 = toNativeSound(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = playAndWait_3(this.result_0, this.local$times, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  function playAndWait($receiver_0, times_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait($receiver_0, times_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAudioData($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readAudioData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioData.prototype.constructor = Coroutine$readAudioData;
  Coroutine$readAudioData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultAudioFormats();
            if (this.local$props === void 0)
              this.local$props = AudioDecodingProps$Companion_getInstance().DEFAULT;
            var mode;
            mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$formats.decode_yt2zhq$(this.local$$receiver_0, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = (tmp$ = this.result_0) != null ? tmp$ : invalidOp("Can't decode audio file " + this.local$$receiver);
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            } else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readAudioData($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioData($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var arraycopy$lambda_2 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function IAudioSamples() {
  }
  Object.defineProperty(IAudioSamples.prototype, 'size', {
    get: function () {
      return this.totalSamples;
    }
  });
  IAudioSamples.prototype.isEmpty = function () {
    return this.totalSamples === 0;
  };
  IAudioSamples.prototype.isNotEmpty = function () {
    return this.totalSamples !== 0;
  };
  IAudioSamples.prototype.getFloat_vux9f0$ = function (channel, sample) {
    return SampleConvert_getInstance().shortToFloat_mq22fl$(this.get_vux9f0$(channel, sample));
  };
  IAudioSamples.prototype.setFloat_n0b4r3$ = function (channel, sample, value) {
    this.set_n7dwxb$(channel, sample, SampleConvert_getInstance().floatToShort_mx4ult$(value));
  };
  IAudioSamples.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IAudioSamples',
    interfaces: []
  };
  function resample($receiver, scale, totalSamples, out) {
    if (totalSamples === void 0)
      totalSamples = numberToInt($receiver.totalSamples * scale);
    if (out === void 0)
      out = new AudioSamples($receiver.channels, totalSamples);
    var tmp$;
    var iscale = 1.0 / scale;
    tmp$ = $receiver.channels;
    for (var c = 0; c < tmp$; c++) {
      var outc = out.get_za3lpa$(c);
      var inpc = $receiver.get_za3lpa$(c);
      for (var n = 0; n < totalSamples; n++) {
        outc[n] = inpc[numberToInt(n * iscale)];
      }
    }
    return out;
  }
  function AudioSamples(channels, totalSamples, data) {
    if (data === void 0) {
      var array = Array_0(channels);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = new Int16Array(totalSamples);
      }
      data = array;
    }this.channels_kqaju8$_0 = channels;
    this.totalSamples_tcevdn$_0 = totalSamples;
    this.data = data;
  }
  Object.defineProperty(AudioSamples.prototype, 'channels', {
    get: function () {
      return this.channels_kqaju8$_0;
    }
  });
  Object.defineProperty(AudioSamples.prototype, 'totalSamples', {
    get: function () {
      return this.totalSamples_tcevdn$_0;
    }
  });
  AudioSamples.prototype.get_za3lpa$ = function (channel) {
    return this.data[channel];
  };
  AudioSamples.prototype.get_vux9f0$ = function (channel, sample) {
    return this.data[channel][sample];
  };
  AudioSamples.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.data[channel][sample] = value;
  };
  AudioSamples.prototype.hashCode = function () {
    return this.channels + (this.totalSamples * 32 | 0) + (contentDeepHashCode(this.data) * 64 | 0) | 0;
  };
  AudioSamples.prototype.equals = function (other) {
    return Kotlin.isType(other, AudioSamples) && this.channels === other.channels && this.totalSamples === other.totalSamples && contentDeepEquals(this.data, other.data);
  };
  AudioSamples.prototype.toString = function () {
    return 'AudioSamples(channels=' + this.channels + ', totalSamples=' + this.totalSamples + ')';
  };
  AudioSamples.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamples',
    interfaces: [IAudioSamples]
  };
  function AudioSamplesInterleaved(channels, totalSamples, data) {
    if (data === void 0)
      data = new Int16Array(Kotlin.imul(totalSamples, channels));
    this.channels_n99llb$_0 = channels;
    this.totalSamples_s6a5dw$_0 = totalSamples;
    this.data = data;
  }
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'channels', {
    get: function () {
      return this.channels_n99llb$_0;
    }
  });
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'totalSamples', {
    get: function () {
      return this.totalSamples_s6a5dw$_0;
    }
  });
  AudioSamplesInterleaved.prototype.index_0 = function (channel, sample) {
    return Kotlin.imul(sample, this.channels) + channel | 0;
  };
  AudioSamplesInterleaved.prototype.get_vux9f0$ = function (channel, sample) {
    return this.data[this.index_0(channel, sample)];
  };
  AudioSamplesInterleaved.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.data[this.index_0(channel, sample)] = value;
  };
  AudioSamplesInterleaved.prototype.toString = function () {
    return 'AudioSamplesInterleaved(channels=' + this.channels + ', totalSamples=' + this.totalSamples + ')';
  };
  AudioSamplesInterleaved.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamplesInterleaved',
    interfaces: [IAudioSamples]
  };
  function copyOfRange($receiver, start, end) {
    var tmp$;
    var out = new AudioSamples($receiver.channels, end - start | 0);
    tmp$ = $receiver.channels;
    for (var n = 0; n < tmp$; n++) {
      arrayCopy($receiver.get_za3lpa$(n), out.get_za3lpa$(n), 0, start, start + (end - start | 0) | 0);
    }
    return out;
  }
  function interleaved($receiver, out) {
    if (out === void 0)
      out = new AudioSamplesInterleaved($receiver.channels, $receiver.totalSamples);
    var tmp$;
    var channels = $receiver.channels;
    for (var c = 0; c < channels; c++) {
      var m = c;
      tmp$ = $receiver.totalSamples;
      for (var n = 0; n < tmp$; n++) {
        out.data[m] = $receiver.get_vux9f0$(c, n);
        m = m + channels | 0;
      }
    }
    return out;
  }
  function applyProps($receiver, speed, panning, volume) {
    var tmp$, tmp$_0;
    if (speed === 1.0 && panning === 0.0 && volume === 1.0)
      return $receiver;
    var speedf = speed;
    var ispeedf = 1.0 / speed;
    var out = new AudioSamplesInterleaved($receiver.channels, numberToInt($receiver.totalSamples * ispeedf));
    var rratio = clamp01((panning + 1.0) / 2.0) * volume;
    var lratio = (1.0 - rratio) * volume;
    if ($receiver.channels === 2) {
      tmp$ = out.totalSamples;
      for (var n = 0; n < tmp$; n++) {
        out.set_n7dwxb$(0, n, toShort(numberToInt($receiver.get_vux9f0$(0, numberToInt(n * speedf)) * lratio)));
        out.set_n7dwxb$(1, n, toShort(numberToInt($receiver.get_vux9f0$(1, numberToInt(n * speedf)) * rratio)));
      }
    } else {
      tmp$_0 = out.data;
      for (var n_0 = 0; n_0 !== tmp$_0.length; ++n_0) {
        out.data[n_0] = toShort(numberToInt($receiver.data[numberToInt(n_0 * speedf)] * lratio));
      }
    }
    return out;
  }
  function ensureTwoChannels($receiver) {
    var tmp$;
    if ($receiver.channels === 2)
      tmp$ = $receiver;
    else {
      var $receiver_0 = new AudioSamplesInterleaved(2, $receiver.totalSamples);
      var tmp$_0, tmp$_1, tmp$_2;
      var inp = $receiver;
      var m = 0;
      tmp$_0 = $receiver_0.totalSamples;
      for (var n = 0; n < tmp$_0; n++) {
        var v = inp.data[n];
        $receiver_0.data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = v;
        $receiver_0.data[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = v;
      }
      tmp$ = $receiver_0;
    }
    return tmp$;
  }
  function separated($receiver, out) {
    if (out === void 0)
      out = new AudioSamples($receiver.channels, $receiver.totalSamples);
    var tmp$, tmp$_0;
    tmp$ = $receiver.totalSamples;
    for (var n = 0; n < tmp$; n++) {
      tmp$_0 = $receiver.channels;
      for (var c = 0; c < tmp$_0; c++)
        out.set_n7dwxb$(c, n, $receiver.get_vux9f0$(c, n));
    }
    return out;
  }
  function AudioSamplesDeque(channels) {
    this.channels = channels;
    var array = Array_0(this.channels);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new ShortArrayDeque();
    }
    this.buffer = array;
    this.temp_0 = new Int16Array(1);
  }
  Object.defineProperty(AudioSamplesDeque.prototype, 'availableRead', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = getOrNull(this.buffer, 0)) != null ? tmp$.availableRead : null) != null ? tmp$_0 : 0;
    }
  });
  Object.defineProperty(AudioSamplesDeque.prototype, 'availableReadMax', {
    get: function () {
      var tmp$;
      var $receiver = this.buffer;
      var destination = ArrayList_init($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        destination.add_11rb$(item.availableRead);
      }
      return (tmp$ = max(destination)) != null ? tmp$ : 0;
    }
  });
  AudioSamplesDeque.prototype.read_za3lpa$ = function (channel) {
    this.buffer[channel].read_359eei$(this.temp_0, 0, 1);
    return this.temp_0[0];
  };
  AudioSamplesDeque.prototype.write_2bqt6h$ = function (channel, sample) {
    var tmp$ = this.buffer[channel];
    var $receiver = this.temp_0;
    this.temp_0[0] = sample;
    return tmp$.write_359eei$($receiver, 0, 1);
  };
  AudioSamplesDeque.prototype.readFloat_za3lpa$ = function (channel) {
    return this.read_za3lpa$(channel) / kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
  };
  AudioSamplesDeque.prototype.writeFloat_24o109$ = function (channel, sample) {
    return this.write_2bqt6h$(channel, toShort(numberToInt(sample * kotlin_js_internal_ShortCompanionObject.MAX_VALUE)));
  };
  AudioSamplesDeque.prototype.write_trriok$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    var tmp$;
    tmp$ = samples.channels;
    for (var channel = 0; channel < tmp$; channel++)
      this.write_r43jz4$(channel, samples.get_za3lpa$(channel), offset, len);
  };
  AudioSamplesDeque.prototype.write_7kdvij$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    this.writeInterleaved_rbjysc$(samples.data, offset, len, samples.channels);
  };
  AudioSamplesDeque.prototype.write_32capx$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    var tmp$;
    if (Kotlin.isType(samples, AudioSamples))
      this.write_trriok$(samples, offset, len);
    else if (Kotlin.isType(samples, AudioSamplesInterleaved))
      this.write_7kdvij$(samples, offset, len);
    else {
      tmp$ = samples.channels;
      for (var c = 0; c < tmp$; c++) {
        for (var n = 0; n < len; n++)
          this.write_2bqt6h$(c, samples.get_vux9f0$(c, offset + n | 0));
      }
    }
  };
  AudioSamplesDeque.prototype.write_r43jz4$ = function (channel, data, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = data.length - offset | 0;
    this.buffer[channel].write_359eei$(data, offset, len);
  };
  AudioSamplesDeque.prototype.write_3hvitc$ = function (channel, data, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = data.length - offset | 0;
    for (var n = 0; n < len; n++)
      this.write_2bqt6h$(channel, SampleConvert_getInstance().floatToShort_mx4ult$(data[offset + n | 0]));
  };
  AudioSamplesDeque.prototype.writeInterleaved_rbjysc$ = function (data, offset, len, channels) {
    if (len === void 0)
      len = data.length - offset | 0;
    if (channels === void 0)
      channels = this.channels;
    var tmp$, tmp$_0, tmp$_1;
    switch (channels) {
      case 1:
        this.buffer[0].write_359eei$(data, offset, len);
        break;
      case 2:
        tmp$ = len / 2 | 0;
        for (var n = 0; n < tmp$; n++)
          this.write_2bqt6h$(0, data[(n * 2 | 0) + 0 | 0]);
        tmp$_0 = len / 2 | 0;
        for (var n_0 = 0; n_0 < tmp$_0; n_0++)
          this.write_2bqt6h$(1, data[(n_0 * 2 | 0) + 1 | 0]);
        break;
      default:for (var c = 0; c < channels; c++) {
          tmp$_1 = len / channels | 0;
          for (var n_1 = 0; n_1 < tmp$_1; n_1++)
            this.write_2bqt6h$(c, data[Kotlin.imul(n_1, channels) + c | 0]);
        }

        break;
    }
  };
  AudioSamplesDeque.prototype.read_trriok$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    tmp$ = out.channels;
    for (var channel = 0; channel < tmp$; channel++)
      this.buffer[channel].read_359eei$(out.get_za3lpa$(channel), offset, len);
    return result;
  };
  AudioSamplesDeque.prototype.read_7kdvij$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    tmp$ = out.channels;
    for (var channel = 0; channel < tmp$; channel++) {
      for (var n = 0; n < len; n++)
        out.set_n7dwxb$(channel, offset + n | 0, this.read_za3lpa$(channel));
    }
    return result;
  };
  AudioSamplesDeque.prototype.read_32capx$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    if (Kotlin.isType(out, AudioSamples))
      this.read_trriok$(out, offset, len);
    else if (Kotlin.isType(out, AudioSamplesInterleaved))
      this.read_7kdvij$(out, offset, len);
    else {
      tmp$ = out.channels;
      for (var c = 0; c < tmp$; c++) {
        for (var n = 0; n < len; n++)
          out.set_n7dwxb$(c, offset + n | 0, this.read_za3lpa$(c));
      }
    }
    return result;
  };
  AudioSamplesDeque.prototype.clear = function () {
    var tmp$;
    tmp$ = this.buffer;
    for (var c = 0; c !== tmp$.length; ++c) {
      this.buffer[c].clear();
    }
  };
  AudioSamplesDeque.prototype.toString = function () {
    return 'AudioSamplesDeque(channels=' + this.channels + ', availableRead=' + this.availableRead + ')';
  };
  AudioSamplesDeque.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamplesDeque',
    interfaces: []
  };
  function AudioStream(rate, channels) {
    AudioStream$Companion_getInstance();
    this.rate = rate;
    this.channels = channels;
    this.finished_3olf9t$_0 = false;
    this.totalLengthInSamples_i9kvvr$_0 = null;
    this.currentPositionInSamples_guh1lr$_0 = L0;
  }
  Object.defineProperty(AudioStream.prototype, 'finished', {
    get: function () {
      return this.finished_3olf9t$_0;
    }
  });
  Object.defineProperty(AudioStream.prototype, 'totalLengthInSamples', {
    get: function () {
      return this.totalLengthInSamples_i9kvvr$_0;
    }
  });
  Object.defineProperty(AudioStream.prototype, 'totalLength', {
    get: function () {
      var tmp$;
      var $receiver = ((tmp$ = this.totalLengthInSamples) != null ? tmp$ : L0).toNumber() / this.rate;
      return TimeSpan.Companion.fromSeconds_14dthe$($receiver);
    }
  });
  Object.defineProperty(AudioStream.prototype, 'currentPositionInSamples', {
    get: function () {
      return this.currentPositionInSamples_guh1lr$_0;
    },
    set: function (currentPositionInSamples) {
      this.currentPositionInSamples_guh1lr$_0 = currentPositionInSamples;
    }
  });
  Object.defineProperty(AudioStream.prototype, 'currentTime', {
    get: function () {
      var $receiver = this.currentPositionInSamples.toNumber() / this.rate;
      return TimeSpan.Companion.fromSeconds_14dthe$($receiver);
    },
    set: function (value) {
      this.currentPositionInSamples = Kotlin.Long.fromNumber(value.seconds * this.rate);
    }
  });
  AudioStream.prototype.read_trriok$ = function (out, offset, length, continuation) {
    return 0;
  };
  AudioStream.prototype.close = function () {
  };
  function AudioStream$Companion() {
    AudioStream$Companion_instance = this;
  }
  AudioStream$Companion.prototype.generator_cyo1yf$ = function (rate, channels, generateChunk) {
    return new AudioStream$GeneratorAudioStream(rate, channels, generateChunk);
  };
  AudioStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioStream$Companion_instance = null;
  function AudioStream$Companion_getInstance() {
    if (AudioStream$Companion_instance === null) {
      new AudioStream$Companion();
    }return AudioStream$Companion_instance;
  }
  function AudioStream$GeneratorAudioStream(rate, channels, generateChunk) {
    AudioStream.call(this, rate, channels);
    this.generateChunk = generateChunk;
    this.deque = new AudioSamplesDeque(channels);
    this.finished_dntyxi$_0 = false;
    this.step_0 = 0;
  }
  Object.defineProperty(AudioStream$GeneratorAudioStream.prototype, 'availableRead', {
    get: function () {
      return this.deque.availableRead;
    }
  });
  Object.defineProperty(AudioStream$GeneratorAudioStream.prototype, 'finished', {
    get: function () {
      return this.finished_dntyxi$_0;
    },
    set: function (finished) {
      this.finished_dntyxi$_0 = finished;
    }
  });
  function Coroutine$read_trriok$_0($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$_0.prototype.constructor = Coroutine$read_trriok$_0;
  Coroutine$read_trriok$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.$this.finished && this.$this.availableRead <= 0) {
              return -1;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (this.$this.availableRead > 0) {
              this.state_0 = 6;
              continue;
            }
            this.state_0 = 4;
            this.result_0 = this.$this.generateChunk(this.$this.deque, (tmp$ = this.$this.step_0, this.$this.step_0 = tmp$ + 1 | 0, tmp$), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (!this.result_0) {
              this.$this.finished = true;
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 3;
            continue;
          case 6:
            var b = this.$this.availableRead;
            var read = Math_0.min(this.local$length, b);
            this.$this.deque.read_trriok$(this.local$out, this.local$offset, read);
            return read;
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
  AudioStream$GeneratorAudioStream.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$_0(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioStream$GeneratorAudioStream.prototype.clone = function (continuation) {
    return new AudioStream$GeneratorAudioStream(this.rate, this.channels, this.generateChunk);
  };
  AudioStream$GeneratorAudioStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneratorAudioStream',
    interfaces: [AudioStream]
  };
  AudioStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioStream',
    interfaces: [Closeable]
  };
  function Coroutine$toData($receiver_0, maxSamples_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$out = void 0;
    this.local$buffer = void 0;
    this.local$read = void 0;
    this.local$$receiver = $receiver_0;
    this.local$maxSamples = maxSamples_0;
  }
  Coroutine$toData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toData.prototype.constructor = Coroutine$toData;
  Coroutine$toData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$maxSamples === void 0)
              this.local$maxSamples = 2147483647;
            this.local$out = new AudioSamplesDeque(this.local$$receiver.channels);
            this.local$buffer = new AudioSamples(this.local$$receiver.channels, 1024);
            this.exceptionState_0 = 7;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$$receiver.finished) {
              this.state_0 = 5;
              continue;
            }
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read_trriok$(this.local$buffer, 0, this.local$buffer.totalSamples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$read = this.result_0;
            if (this.local$read <= 0) {
              this.state_0 = 5;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$out.write_trriok$(this.local$buffer, 0, this.local$read);
            if (this.local$out.availableRead >= this.local$maxSamples) {
              this.state_0 = 5;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [6];
            this.state_0 = 8;
            continue;
          case 6:
            var maxOutSamples = this.local$out.availableReadMax;
            var tmp$ = this.local$$receiver.rate;
            var $receiver = new AudioSamples(this.local$$receiver.channels, maxOutSamples);
            this.local$out.read_trriok$($receiver);
            return new AudioData(tmp$, $receiver);
          case 7:
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 9;
            this.local$$receiver.close();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toData($receiver_0, maxSamples_0, continuation_0, suspended) {
    var instance = new Coroutine$toData($receiver_0, maxSamples_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function playAndWait_0($receiver, params, continuation) {
    if (params === void 0)
      params = PlaybackParameters$Companion_getInstance().DEFAULT;
    return get_nativeSoundProvider().playAndWait_4nen4f$($receiver, params, continuation);
  }
  function Coroutine$playAndWait_0($receiver_0, times_0, startTime_0, bufferTime_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$times = times_0;
    this.local$startTime = startTime_0;
    this.local$bufferTime = bufferTime_0;
  }
  Coroutine$playAndWait_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait_0.prototype.constructor = Coroutine$playAndWait_0;
  Coroutine$playAndWait_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$times === void 0) {
              this.local$times = new PlaybackTimes(1);
            }
            if (this.local$startTime === void 0) {
              this.local$startTime = TimeSpan.Companion.fromSeconds_14dthe$(0);
            }
            if (this.local$bufferTime === void 0) {
              this.local$bufferTime = TimeSpan.Companion.fromSeconds_14dthe$(0.1);
            }
            this.state_0 = 2;
            this.result_0 = get_nativeSoundProvider().createStreamingSound_j4pf99$(this.local$$receiver, void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = playAndWait_2(this.result_0, new PlaybackParameters(this.local$times, this.local$startTime, this.local$bufferTime), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  function playAndWait_1($receiver_0, times_0, startTime_0, bufferTime_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait_0($receiver_0, times_0, startTime_0, bufferTime_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAudioStream($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readAudioStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioStream.prototype.constructor = Coroutine$readAudioStream;
  Coroutine$readAudioStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultAudioFormats();
            if (this.local$props === void 0)
              this.local$props = AudioDecodingProps$Companion_getInstance().DEFAULT;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.open_tiaunm$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeStream_yt2zhq$(this.result_0, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  function readAudioStream($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioStream($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeAudio($receiver_0, data_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$data = data_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$writeAudio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeAudio.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAudio.prototype.constructor = Coroutine$writeAudio;
  Coroutine$writeAudio.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultAudioFormats();
            if (this.local$props === void 0)
              this.local$props = AudioEncodingProps$Companion_getInstance().DEFAULT;
            var mode = VfsOpenMode.CREATE_OR_TRUNCATE;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$formats.encode_ovnsdg$(this.local$data, this.local$$receiver_0, get_baseName(this.local$$receiver), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = Unit;
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            } else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function writeAudio($receiver_0, data_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$writeAudio($receiver_0, data_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function AudioTone() {
    AudioTone_instance = this;
  }
  AudioTone.prototype.generate_wivp55$ = function (length, freq, rate) {
    if (rate === void 0)
      rate = 44100;
    var nsamples = numberToInt(rate * length.seconds);
    var samples = new AudioSamples(1, nsamples);
    for (var n = 0; n < nsamples; n++) {
      var ratio = n * freq / rate;
      var x = ratio * math.PI * 2;
      var sample = Math_0.sin(x);
      samples.set_n7dwxb$(0, n, SampleConvert_getInstance().floatToShort_mx4ult$(sample));
    }
    return new AudioData(rate, samples);
  };
  AudioTone.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AudioTone',
    interfaces: []
  };
  var AudioTone_instance = null;
  function AudioTone_getInstance() {
    if (AudioTone_instance === null) {
      new AudioTone();
    }return AudioTone_instance;
  }
  function NativeSoundProvider() {
    this.target_bgeedf$_0 = 'unknown';
    this.initialized_768h90$_0 = false;
    this.audioFormats_tnr0i6$_0 = AudioFormats$Companion_getInstance().invoke_rtj1ud$([WAV$Companion_getInstance()]);
  }
  Object.defineProperty(NativeSoundProvider.prototype, 'target', {
    get: function () {
      return this.target_bgeedf$_0;
    }
  });
  NativeSoundProvider.prototype.initOnce = function () {
    if (!this.initialized_768h90$_0) {
      this.initialized_768h90$_0 = true;
      this.init();
    }};
  NativeSoundProvider.prototype.createAudioStream_s4tm7$$default = function (coroutineContext, freq) {
    return new PlatformAudioOutput(coroutineContext, freq);
  };
  NativeSoundProvider.prototype.createAudioStream_s4tm7$ = function (coroutineContext, freq, callback$default) {
    if (freq === void 0)
      freq = 44100;
    return callback$default ? callback$default(coroutineContext, freq) : this.createAudioStream_s4tm7$$default(coroutineContext, freq);
  };
  NativeSoundProvider.prototype.createAudioStream_za3lpa$ = function (freq, continuation) {
    if (freq === void 0)
      freq = 44100;
    return this.createAudioStream_s4tm7$(continuation.context, freq);
  };
  NativeSoundProvider.prototype.init = function () {
  };
  function Coroutine$createSound_eit78h$$default($this, data_0, streaming_0, props_0, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$props = props_0;
    this.local$name = name_0;
  }
  Coroutine$createSound_eit78h$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_eit78h$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_eit78h$$default.prototype.constructor = Coroutine$createSound_eit78h$$default;
  Coroutine$createSound_eit78h$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.audioFormats.decodeStreamOrError_yt2zhq$(openAsync(this.local$data), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createStreamingSound_j4pf99$(this.result_0, true, this.local$name, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  NativeSoundProvider.prototype.createSound_eit78h$$default = function (data_0, streaming_0, props_0, name_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_eit78h$$default(this, data_0, streaming_0, props_0, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_eit78h$ = function (data, streaming, props, name, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    if (name === void 0)
      name = 'Unknown';
    return callback$default ? callback$default(data, streaming, props, name, continuation) : this.createSound_eit78h$$default(data, streaming, props, name, continuation);
  };
  Object.defineProperty(NativeSoundProvider.prototype, 'audioFormats', {
    get: function () {
      return this.audioFormats_tnr0i6$_0;
    }
  });
  function Coroutine$NativeSoundProvider$createSound$lambda(closure$stream_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$stream = closure$stream_0;
  }
  Coroutine$NativeSoundProvider$createSound$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NativeSoundProvider$createSound$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NativeSoundProvider$createSound$lambda.prototype.constructor = Coroutine$NativeSoundProvider$createSound$lambda;
  Coroutine$NativeSoundProvider$createSound$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$stream.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function NativeSoundProvider$createSound$lambda(closure$stream_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NativeSoundProvider$createSound$lambda(closure$stream_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$createSound_k8kuec$$default($this, vfs_0, path_0, streaming_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$vfsFile = void 0;
    this.local$stream = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$streaming = streaming_0;
    this.local$props = props_0;
  }
  Coroutine$createSound_k8kuec$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_k8kuec$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_k8kuec$$default.prototype.constructor = Coroutine$createSound_k8kuec$$default;
  Coroutine$createSound_k8kuec$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$streaming) {
              this.local$vfsFile = this.local$vfs.file_61zpoe$(this.local$path);
              if (this.local$props.readInMemory) {
                this.state_0 = 5;
                this.result_0 = this.local$vfsFile.readAll(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 4;
                this.result_0 = this.local$vfsFile.open_tiaunm$(void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            } else {
              this.state_0 = 2;
              this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).read(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_eit78h$(this.result_0, this.local$streaming, this.local$props, get_baseName(this.local$vfs.get_61zpoe$(this.local$path)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 9;
            continue;
          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 6;
            continue;
          case 5:
            this.local$tmp$ = openAsync(this.result_0);
            this.state_0 = 6;
            continue;
          case 6:
            this.local$stream = this.local$tmp$;
            this.state_0 = 7;
            this.result_0 = this.$this.audioFormats.decodeStreamOrError_yt2zhq$(this.local$stream, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.$this.createStreamingSound_j4pf99$(this.result_0, void 0, get_baseName(this.local$vfsFile), NativeSoundProvider$createSound$lambda(this.local$stream), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 9;
            continue;
          case 9:
            return this.local$tmp$_0;
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
  NativeSoundProvider.prototype.createSound_k8kuec$$default = function (vfs_0, path_0, streaming_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_k8kuec$$default(this, vfs_0, path_0, streaming_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_k8kuec$ = function (vfs, path, streaming, props, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return callback$default ? callback$default(vfs, path, streaming, props, continuation) : this.createSound_k8kuec$$default(vfs, path, streaming, props, continuation);
  };
  NativeSoundProvider.prototype.createSound_uxshnw$ = function (file, streaming, props, continuation) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return this.createSound_k8kuec$(file.vfs, file.path, streaming, props, continuation);
  };
  function Coroutine$createSound_2k6roa$($this, file_0, streaming_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$streaming = streaming_0;
    this.local$props = props_0;
  }
  Coroutine$createSound_2k6roa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_2k6roa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_2k6roa$.prototype.constructor = Coroutine$createSound_2k6roa$;
  Coroutine$createSound_2k6roa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$streaming === void 0)
              this.local$streaming = false;
            if (this.local$props === void 0)
              this.local$props = AudioDecodingProps$Companion_getInstance().DEFAULT;
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_uxshnw$(this.result_0, this.local$streaming, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  NativeSoundProvider.prototype.createSound_2k6roa$ = function (file_0, streaming_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_2k6roa$(this, file_0, streaming_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_7xzv69$$default($this, data_0, formats_0, streaming_0, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$streaming = streaming_0;
    this.local$name = name_0;
  }
  Coroutine$createSound_7xzv69$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_7xzv69$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_7xzv69$$default.prototype.constructor = Coroutine$createSound_7xzv69$$default;
  Coroutine$createSound_7xzv69$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = WAV$Companion_getInstance().encodeToByteArray_1hptbf$(this.local$data, void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_eit78h$(this.result_0, this.local$streaming, void 0, this.local$name, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  NativeSoundProvider.prototype.createSound_7xzv69$$default = function (data_0, formats_0, streaming_0, name_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_7xzv69$$default(this, data_0, formats_0, streaming_0, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_7xzv69$ = function (data, formats, streaming, name, continuation, callback$default) {
    if (formats === void 0)
      formats = get_defaultAudioFormats();
    if (streaming === void 0)
      streaming = false;
    if (name === void 0)
      name = 'Unknown';
    return callback$default ? callback$default(data, formats, streaming, name, continuation) : this.createSound_7xzv69$$default(data, formats, streaming, name, continuation);
  };
  function Coroutine$NativeSoundProvider$createStreamingSound$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$NativeSoundProvider$createStreamingSound$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NativeSoundProvider$createStreamingSound$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NativeSoundProvider$createStreamingSound$lambda.prototype.constructor = Coroutine$NativeSoundProvider$createStreamingSound$lambda;
  Coroutine$NativeSoundProvider$createStreamingSound$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
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
  function NativeSoundProvider$createStreamingSound$lambda(continuation_0, suspended) {
    var instance = new Coroutine$NativeSoundProvider$createStreamingSound$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function NativeSoundProvider$createStreamingSound$ObjectLiteral(closure$stream, closure$coroutineContext, this$NativeSoundProvider, closure$closeStream, closure$onComplete, closure$name) {
    this.closure$stream = closure$stream;
    this.closure$coroutineContext = closure$coroutineContext;
    this.this$NativeSoundProvider = this$NativeSoundProvider;
    this.closure$closeStream = closure$closeStream;
    this.closure$onComplete = closure$onComplete;
    NativeSound.call(this);
    this.name_pxlazb$_0 = closure$name;
    this.nativeSound = this;
  }
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral.prototype, 'name', {
    get: function () {
      return this.name_pxlazb$_0;
    }
  });
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral.prototype, 'length', {
    get: function () {
      return this.closure$stream.totalLength;
    }
  });
  NativeSoundProvider$createStreamingSound$ObjectLiteral.prototype.decode = function (continuation) {
    return toData(this.closure$stream, void 0, continuation);
  };
  function Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda(closure$stream_0, closure$params_0, closure$playing_0, closure$nas_0, closure$closeStream_0, closure$onComplete_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 18;
    this.local$closure$stream = closure$stream_0;
    this.local$closure$params = closure$params_0;
    this.local$closure$playing = closure$playing_0;
    this.local$closure$nas = closure$nas_0;
    this.local$closure$closeStream = closure$closeStream_0;
    this.local$closure$onComplete = closure$onComplete_0;
    this.local$stream = void 0;
    this.local$times = void 0;
    this.local$temp = void 0;
    this.local$minBuf = void 0;
  }
  Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda.prototype.constructor = Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda;
  Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 1;
            this.result_0 = this.local$closure$stream.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$stream = this.result_0;
            this.local$stream.currentTime = this.local$closure$params.startTime;
            this.local$closure$playing.v = true;
            this.local$times = this.local$closure$params.times;
            this.exceptionState_0 = 12;
            this.local$temp = new AudioSamples(this.local$stream.channels, 1024);
            var nchannels = 2;
            this.local$minBuf = numberToInt(Kotlin.imul(this.local$stream.rate, nchannels) * this.local$closure$params.bufferTime.seconds);
            this.local$closure$nas.start();
            this.state_0 = 2;
            continue;
          case 2:
            if (!this.local$times.hasMore) {
              this.state_0 = 11;
              continue;
            }
            this.local$times = this.local$times.oneLess;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$stream.finished) {
              this.state_0 = 10;
              continue;
            }
            this.state_0 = 4;
            this.result_0 = this.local$stream.read_trriok$(this.local$temp, 0, this.local$temp.totalSamples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var read = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$closure$nas.add_trriok$(this.local$temp, 0, read, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            tmp$ = this.local$closure$nas.availableSamples;
            if (!(this.local$minBuf <= tmp$ && tmp$ <= (this.local$minBuf * 2 | 0))) {
              this.state_0 = 9;
              continue;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 7:
            this.state_0 = 8;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(2), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 6;
            continue;
          case 9:
            this.state_0 = 3;
            continue;
          case 10:
            this.local$stream.currentPositionInSamples = L0;
            this.state_0 = 2;
            continue;
          case 11:
            this.exceptionState_0 = 18;
            this.finallyPath_0 = [17];
            this.state_0 = 15;
            continue;
          case 12:
            this.finallyPath_0 = [18];
            this.exceptionState_0 = 15;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              this.local$closure$nas.stop();
              this.exceptionState_0 = 18;
              this.finallyPath_0 = [13];
              this.state_0 = 15;
              this.$returnValue = (this.local$closure$nas.dispose(), Unit);
              continue;
            } else {
              throw e;
            }

          case 13:
            return this.$returnValue;
          case 14:
            this.finallyPath_0 = [17];
            this.state_0 = 15;
            continue;
          case 15:
            this.exceptionState_0 = 18;
            if (this.local$closure$closeStream) {
              this.local$stream.close();
            }
            this.local$closure$playing.v = false;
            this.state_0 = 16;
            this.result_0 = this.local$closure$onComplete(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 17:
            return Unit;
          case 18:
            throw this.exception_0;
          default:this.state_0 = 18;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 18) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda(closure$stream_0, closure$params_0, closure$playing_0, closure$nas_0, closure$closeStream_0, closure$onComplete_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda(closure$stream_0, closure$params_0, closure$playing_0, closure$nas_0, closure$closeStream_0, closure$onComplete_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function NativeSoundProvider$createStreamingSound$ObjectLiteral$play$close(closure$job) {
    return function () {
      closure$job.cancel_m4sck1$();
    };
  }
  function NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral(closure$stream, closure$playing, closure$close, closure$nas, sound) {
    this.closure$stream = closure$stream;
    this.closure$playing = closure$playing;
    this.closure$close = closure$close;
    NativeSoundChannel.call(this, sound);
    this.volume_3kry8h$_0 = new RedirectMutableField_init(getPropertyCallableRef('volume', 0, function ($receiver) {
      return $receiver.volume;
    }.bind(null, closure$nas), function ($receiver, value) {
      $receiver.volume = value;
    }.bind(null, closure$nas)));
    this.pitch_8euft7$_0 = new RedirectMutableField_init(getPropertyCallableRef('pitch', 0, function ($receiver) {
      return $receiver.pitch;
    }.bind(null, closure$nas), function ($receiver, value) {
      $receiver.pitch = value;
    }.bind(null, closure$nas)));
    this.panning_8qlfiy$_0 = new RedirectMutableField_init(getPropertyCallableRef('panning', 0, function ($receiver) {
      return $receiver.panning;
    }.bind(null, closure$nas), function ($receiver, value) {
      $receiver.panning = value;
    }.bind(null, closure$nas)));
  }
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype, 'volume', {
    get: function () {
      return this.volume_3kry8h$_0.redirect.get();
    },
    set: function (volume) {
      this.volume_3kry8h$_0.redirect.set(volume);
    }
  });
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype, 'pitch', {
    get: function () {
      return this.pitch_8euft7$_0.redirect.get();
    },
    set: function (pitch) {
      this.pitch_8euft7$_0.redirect.set(pitch);
    }
  });
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype, 'panning', {
    get: function () {
      return this.panning_8qlfiy$_0.redirect.get();
    },
    set: function (panning) {
      this.panning_8qlfiy$_0.redirect.set(panning);
    }
  });
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype, 'current', {
    get: function () {
      return this.closure$stream.currentTime;
    },
    set: function (value) {
      this.closure$stream;
      this.closure$stream.currentTime = value;
    }
  });
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype, 'total', {
    get: function () {
      return this.closure$stream.totalLength;
    }
  });
  Object.defineProperty(NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype, 'playing', {
    get: function () {
      return this.closure$playing.v;
    }
  });
  NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.prototype.stop = function () {
    this.closure$close();
  };
  NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  NativeSoundProvider$createStreamingSound$ObjectLiteral.prototype.play_gfl8bq$$default = function (params) {
    var nas = this.this$NativeSoundProvider.createAudioStream_s4tm7$(this.closure$coroutineContext, this.closure$stream.rate);
    nas.copySoundPropsFrom_bx1fg$(params);
    var playing = {v: true};
    var job = launchImmediately(this.closure$coroutineContext, NativeSoundProvider$createStreamingSound$ObjectLiteral$play$lambda(this.closure$stream, params, playing, nas, this.closure$closeStream, this.closure$onComplete));
    var close = NativeSoundProvider$createStreamingSound$ObjectLiteral$play$close(job);
    return new NativeSoundProvider$createStreamingSound$ObjectLiteral$play$ObjectLiteral(this.closure$stream, playing, close, nas, this.nativeSound);
  };
  NativeSoundProvider$createStreamingSound$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSound]
  };
  NativeSoundProvider.prototype.createStreamingSound_j4pf99$ = function (stream, closeStream, name, onComplete, continuation) {
    if (closeStream === void 0)
      closeStream = false;
    if (name === void 0)
      name = 'Unknown';
    if (onComplete === void 0)
      onComplete = NativeSoundProvider$createStreamingSound$lambda;
    var coroutineContext = continuation.context;
    return new NativeSoundProvider$createStreamingSound$ObjectLiteral(stream, coroutineContext, this, closeStream, onComplete, name);
  };
  function Coroutine$playAndWait_4nen4f$($this, stream_0, params_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$stream = stream_0;
    this.local$params = params_0;
  }
  Coroutine$playAndWait_4nen4f$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait_4nen4f$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait_4nen4f$.prototype.constructor = Coroutine$playAndWait_4nen4f$;
  Coroutine$playAndWait_4nen4f$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$params === void 0)
              this.local$params = PlaybackParameters$Companion_getInstance().DEFAULT;
            this.state_0 = 2;
            this.result_0 = this.$this.createStreamingSound_j4pf99$(this.local$stream, void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = playAndWait_2(this.result_0, this.local$params, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  NativeSoundProvider.prototype.playAndWait_4nen4f$ = function (stream_0, params_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait_4nen4f$(this, stream_0, params_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundProvider',
    interfaces: []
  };
  function DummyNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  DummyNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function DummyNativeSoundChannel(sound, data) {
    if (data === void 0)
      data = null;
    NativeSoundChannel.call(this, sound);
    this.data = data;
    this.timeStart_0 = DateTime.Companion.now();
  }
  Object.defineProperty(DummyNativeSoundChannel.prototype, 'current', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.timeStart_0);
    },
    set: function (value) {
    }
  });
  Object.defineProperty(DummyNativeSoundChannel.prototype, 'total', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.data) != null ? tmp$.totalTime : null) != null ? tmp$_0 : TimeSpan.Companion.fromSeconds_14dthe$(0);
    }
  });
  DummyNativeSoundChannel.prototype.stop = function () {
    this.timeStart_0 = DateTime.Companion.now().plus_fv8bff$(this.total);
  };
  DummyNativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundChannel',
    interfaces: [NativeSoundChannel]
  };
  function ReadonlySoundProps() {
  }
  ReadonlySoundProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReadonlySoundProps',
    interfaces: []
  };
  function SoundProps() {
  }
  SoundProps.prototype.copySoundPropsFrom_bx1fg$ = function (other) {
    this.volume = other.volume;
    this.pitch = other.pitch;
    this.panning = other.panning;
  };
  SoundProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SoundProps',
    interfaces: [ReadonlySoundProps]
  };
  function NativeSoundChannelGroup(volume, pitch, panning) {
    if (volume === void 0)
      volume = 1.0;
    if (pitch === void 0)
      pitch = 1.0;
    if (panning === void 0)
      panning = 0.0;
    this.channels_0 = ArrayList_init_0();
    this.volume_nkpy6z$_0 = 1.0;
    this.pitch_m0przf$_0 = 1.0;
    this.panning_s2bylg$_0 = 0.0;
    this.volume = volume;
    this.pitch = pitch;
    this.panning = panning;
  }
  Object.defineProperty(NativeSoundChannelGroup.prototype, 'playing', {
    get: function () {
      var $receiver = this.channels_0;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.playing) {
            any$result = true;
            break any$break;
          }}
        any$result = false;
      }
       while (false);
      return any$result;
    }
  });
  Object.defineProperty(NativeSoundChannelGroup.prototype, 'volume', {
    get: function () {
      return this.volume_nkpy6z$_0;
    },
    set: function (value) {
      this.volume_nkpy6z$_0 = value;
      var tmp$;
      tmp$ = this.channels_0.iterator();
      while (tmp$.hasNext()) {
        var channel = tmp$.next();
        channel.volume = value;
      }
      this.prune();
    }
  });
  Object.defineProperty(NativeSoundChannelGroup.prototype, 'pitch', {
    get: function () {
      return this.pitch_m0przf$_0;
    },
    set: function (value) {
      this.pitch_m0przf$_0 = value;
      var tmp$;
      tmp$ = this.channels_0.iterator();
      while (tmp$.hasNext()) {
        var channel = tmp$.next();
        channel.pitch = value;
      }
      this.prune();
    }
  });
  Object.defineProperty(NativeSoundChannelGroup.prototype, 'panning', {
    get: function () {
      return this.panning_s2bylg$_0;
    },
    set: function (value) {
      this.panning_s2bylg$_0 = value;
      var tmp$;
      tmp$ = this.channels_0.iterator();
      while (tmp$.hasNext()) {
        var channel = tmp$.next();
        channel.panning = value;
      }
      this.prune();
    }
  });
  NativeSoundChannelGroup.prototype.add_1ganj1$ = function (channel) {
    var $receiver = this.channels_0.add_11rb$(channel);
    this.setProps_0(channel);
    return $receiver;
  };
  NativeSoundChannelGroup.prototype.remove_1ganj1$ = function (channel) {
    return this.channels_0.remove_11rb$(channel);
  };
  NativeSoundChannelGroup.prototype.setProps_0 = function (channel) {
    channel.volume = this.volume;
    channel.pitch = this.pitch;
    channel.panning = this.panning;
  };
  function NativeSoundChannelGroup$prune$lambda$lambda(it) {
    return !it.playing;
  }
  NativeSoundChannelGroup.prototype.prune = function () {
    return removeAll(this.channels_0, NativeSoundChannelGroup$prune$lambda$lambda);
  };
  NativeSoundChannelGroup.prototype.all_0 = function (callback) {
    var tmp$;
    tmp$ = this.channels_0.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      callback(channel);
    }
    this.prune();
  };
  NativeSoundChannelGroup.prototype.reset = function () {
    var tmp$;
    tmp$ = this.channels_0.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      channel.reset();
    }
    this.prune();
  };
  NativeSoundChannelGroup.prototype.stop = function () {
    var tmp$;
    tmp$ = this.channels_0.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      channel.stop();
    }
    this.prune();
  };
  NativeSoundChannelGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundChannelGroup',
    interfaces: [NativeSoundChannelBase]
  };
  function NativeSoundChannelBase() {
  }
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.$this.playing) {
              this.state_0 = 4;
              continue;
            }
            this.state_0 = 3;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return;
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
  NativeSoundChannelBase.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundChannelBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NativeSoundChannelBase',
    interfaces: [SoundProps]
  };
  function attachTo($receiver, group) {
    group.add_1ganj1$($receiver);
    return $receiver;
  }
  function NativeSoundChannel(sound) {
    this.sound = sound;
    this.startTime_po208j$_0 = DateTime.Companion.now();
    this.volume_jvnuhq$_0 = 1.0;
    this.pitch_g1jq7w$_0 = 1.0;
    this.panning_pl2mbv$_0 = 0.0;
  }
  Object.defineProperty(NativeSoundChannel.prototype, 'volume', {
    get: function () {
      return this.volume_jvnuhq$_0;
    },
    set: function (volume) {
      this.volume_jvnuhq$_0 = volume;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'pitch', {
    get: function () {
      return this.pitch_g1jq7w$_0;
    },
    set: function (pitch) {
      this.pitch_g1jq7w$_0 = pitch;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'panning', {
    get: function () {
      return this.panning_pl2mbv$_0;
    },
    set: function (panning) {
      this.panning_pl2mbv$_0 = panning;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'current', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.startTime_po208j$_0);
    },
    set: function (value) {
      this.startTime_po208j$_0 = DateTime.Companion.now().minus_fv8bff$(value);
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'total', {
    get: function () {
      return this.sound.length;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'playing', {
    get: function () {
      return this.current.compareTo_11rb$(this.total) < 0;
    }
  });
  NativeSoundChannel.prototype.reset = function () {
    this.current = TimeSpan.Companion.fromSeconds_14dthe$(0);
  };
  NativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundChannel',
    interfaces: [NativeSoundChannelBase]
  };
  function await$lambda($receiver, current, total) {
    return Unit;
  }
  function Coroutine$await_0($receiver_0, progress_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$progress = progress_0;
  }
  Coroutine$await_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_0.prototype.constructor = Coroutine$await_0;
  Coroutine$await_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$progress === void 0)
              this.local$progress = await$lambda;
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$$receiver.playing) {
              this.state_0 = 3;
              continue;
            }
            this.local$progress(this.local$$receiver, this.local$$receiver.current, this.local$$receiver.total);
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(4), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 1;
            continue;
          case 3:
            this.local$progress(this.local$$receiver, this.local$$receiver.total, this.local$$receiver.total);
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              this.local$$receiver.stop();
            } else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function await_0($receiver_0, progress_0, continuation_0, suspended) {
    var instance = new Coroutine$await_0($receiver_0, progress_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function NativeSound() {
    this.name_9m3o3c$_0 = 'UnknownNativeSound';
    this.volume_d1ckzb$_0 = 1.0;
    this.panning_epxog$_0 = 0.0;
    this.pitch_ezbl2p$_0 = 1.0;
    this.length_mgoqkj$_0 = TimeSpan.Companion.fromSeconds_14dthe$(0);
  }
  Object.defineProperty(NativeSound.prototype, 'name', {
    get: function () {
      return this.name_9m3o3c$_0;
    }
  });
  Object.defineProperty(NativeSound.prototype, 'volume', {
    get: function () {
      return this.volume_d1ckzb$_0;
    },
    set: function (volume) {
      this.volume_d1ckzb$_0 = volume;
    }
  });
  Object.defineProperty(NativeSound.prototype, 'panning', {
    get: function () {
      return this.panning_epxog$_0;
    },
    set: function (panning) {
      this.panning_epxog$_0 = panning;
    }
  });
  Object.defineProperty(NativeSound.prototype, 'pitch', {
    get: function () {
      return this.pitch_ezbl2p$_0;
    },
    set: function (pitch) {
      this.pitch_ezbl2p$_0 = pitch;
    }
  });
  Object.defineProperty(NativeSound.prototype, 'length', {
    get: function () {
      return this.length_mgoqkj$_0;
    }
  });
  NativeSound.prototype.play_gfl8bq$$default = function (params) {
    throw new NotImplementedError_init();
  };
  NativeSound.prototype.play_gfl8bq$ = function (params, callback$default) {
    if (params === void 0)
      params = PlaybackParameters$Companion_getInstance().DEFAULT;
    return callback$default ? callback$default(params) : this.play_gfl8bq$$default(params);
  };
  NativeSound.prototype.play_tqskvx$ = function (times, startTime) {
    if (startTime === void 0) {
      startTime = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }return this.play_gfl8bq$(new PlaybackParameters(times, startTime));
  };
  NativeSound.prototype.playForever_fv8bff$ = function (startTime) {
    if (startTime === void 0) {
      startTime = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }return this.play_tqskvx$(get_infinitePlaybackTimes(), startTime);
  };
  NativeSound.prototype.toString = function () {
    return "NativeSound('" + this.name + "')";
  };
  NativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSound',
    interfaces: [SoundProps]
  };
  function PlaybackParameters(times, startTime, bufferTime, volume, pitch, panning) {
    PlaybackParameters$Companion_getInstance();
    if (times === void 0) {
      times = new PlaybackTimes(1);
    }if (startTime === void 0) {
      startTime = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }if (bufferTime === void 0) {
      bufferTime = TimeSpan.Companion.fromSeconds_14dthe$(0.1);
    }if (volume === void 0)
      volume = 1.0;
    if (pitch === void 0)
      pitch = 1.0;
    if (panning === void 0)
      panning = 0.0;
    this.times = times;
    this.startTime = startTime;
    this.bufferTime = bufferTime;
    this.volume_q3yggo$_0 = volume;
    this.pitch_ykolmq$_0 = pitch;
    this.panning_5mvdht$_0 = panning;
  }
  Object.defineProperty(PlaybackParameters.prototype, 'volume', {
    get: function () {
      return this.volume_q3yggo$_0;
    }
  });
  Object.defineProperty(PlaybackParameters.prototype, 'pitch', {
    get: function () {
      return this.pitch_ykolmq$_0;
    }
  });
  Object.defineProperty(PlaybackParameters.prototype, 'panning', {
    get: function () {
      return this.panning_5mvdht$_0;
    }
  });
  function PlaybackParameters$Companion() {
    PlaybackParameters$Companion_instance = this;
    this.DEFAULT = new PlaybackParameters(new PlaybackTimes(1), TimeSpan.Companion.fromSeconds_14dthe$(0));
  }
  PlaybackParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlaybackParameters$Companion_instance = null;
  function PlaybackParameters$Companion_getInstance() {
    if (PlaybackParameters$Companion_instance === null) {
      new PlaybackParameters$Companion();
    }return PlaybackParameters$Companion_instance;
  }
  PlaybackParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlaybackParameters',
    interfaces: [ReadonlySoundProps]
  };
  PlaybackParameters.prototype.component1 = function () {
    return this.times;
  };
  PlaybackParameters.prototype.component2 = function () {
    return this.startTime;
  };
  PlaybackParameters.prototype.component3 = function () {
    return this.bufferTime;
  };
  PlaybackParameters.prototype.component4 = function () {
    return this.volume;
  };
  PlaybackParameters.prototype.component5 = function () {
    return this.pitch;
  };
  PlaybackParameters.prototype.component6 = function () {
    return this.panning;
  };
  PlaybackParameters.prototype.copy_ljwe7m$ = function (times, startTime, bufferTime, volume, pitch, panning) {
    return new PlaybackParameters(times === void 0 ? this.times : times, startTime === void 0 ? this.startTime : startTime, bufferTime === void 0 ? this.bufferTime : bufferTime, volume === void 0 ? this.volume : volume, pitch === void 0 ? this.pitch : pitch, panning === void 0 ? this.panning : panning);
  };
  PlaybackParameters.prototype.toString = function () {
    return 'PlaybackParameters(times=' + Kotlin.toString(this.times) + (', startTime=' + Kotlin.toString(this.startTime)) + (', bufferTime=' + Kotlin.toString(this.bufferTime)) + (', volume=' + Kotlin.toString(this.volume)) + (', pitch=' + Kotlin.toString(this.pitch)) + (', panning=' + Kotlin.toString(this.panning)) + ')';
  };
  PlaybackParameters.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.times) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.bufferTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.volume) | 0;
    result = result * 31 + Kotlin.hashCode(this.pitch) | 0;
    result = result * 31 + Kotlin.hashCode(this.panning) | 0;
    return result;
  };
  PlaybackParameters.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.times, other.times) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.bufferTime, other.bufferTime) && Kotlin.equals(this.volume, other.volume) && Kotlin.equals(this.pitch, other.pitch) && Kotlin.equals(this.panning, other.panning)))));
  };
  function get_infinitePlaybackTimes() {
    return PlaybackTimes$Companion_getInstance().INFINITE;
  }
  var get_playbackTimes = defineInlineFunction('korau-root-korau.com.soywiz.korau.sound.get_playbackTimes_s8ev3n$', wrapFunction(function () {
    var PlaybackTimes_init = _.com.soywiz.korau.sound.PlaybackTimes;
    return function ($receiver) {
      return new PlaybackTimes_init($receiver);
    };
  }));
  function PlaybackTimes(count) {
    PlaybackTimes$Companion_getInstance();
    this.count = count;
  }
  function PlaybackTimes$Companion() {
    PlaybackTimes$Companion_instance = this;
    this.ZERO = new PlaybackTimes(0);
    this.ONE = new PlaybackTimes(1);
    this.INFINITE = new PlaybackTimes(-1);
  }
  PlaybackTimes$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlaybackTimes$Companion_instance = null;
  function PlaybackTimes$Companion_getInstance() {
    if (PlaybackTimes$Companion_instance === null) {
      new PlaybackTimes$Companion();
    }return PlaybackTimes$Companion_instance;
  }
  Object.defineProperty(PlaybackTimes.prototype, 'hasMore', {
    get: function () {
      return !(this != null ? this.equals(PlaybackTimes$Companion_getInstance().ZERO) : null);
    }
  });
  Object.defineProperty(PlaybackTimes.prototype, 'oneLess', {
    get: function () {
      return (this != null ? this.equals(PlaybackTimes$Companion_getInstance().INFINITE) : null) ? PlaybackTimes$Companion_getInstance().INFINITE : new PlaybackTimes(this.count - 1 | 0);
    }
  });
  PlaybackTimes.prototype.toString = function () {
    return this.count >= 0 ? this.count.toString() + ' times' : 'Infinite times';
  };
  PlaybackTimes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlaybackTimes',
    interfaces: []
  };
  PlaybackTimes.prototype.unbox = function () {
    return this.count;
  };
  PlaybackTimes.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    return result;
  };
  PlaybackTimes.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.count, other.count))));
  };
  function toData_0($receiver, continuation) {
    return $receiver.decode(continuation);
  }
  function Coroutine$toStream($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toStream.prototype.constructor = Coroutine$toStream;
  Coroutine$toStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.decode(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toStream(this.result_0);
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
  function toStream_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toStream($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function playAndWait$lambda($receiver, current, total) {
    return Unit;
  }
  function playAndWait_2($receiver, params, progress, continuation) {
    if (progress === void 0)
      progress = playAndWait$lambda;
    return await_0($receiver.play_gfl8bq$(params), progress, continuation);
  }
  function playAndWait$lambda_0($receiver, current, total) {
    return Unit;
  }
  function playAndWait_3($receiver, times, startTime, progress, continuation) {
    if (times === void 0) {
      times = new PlaybackTimes(1);
    }if (startTime === void 0) {
      startTime = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }if (progress === void 0)
      progress = playAndWait$lambda_0;
    return await_0($receiver.play_tqskvx$(times, startTime), progress, continuation);
  }
  function readNativeSound($receiver, streaming, props, continuation) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readSound($receiver, streaming, props, continuation);
  }
  function readNativeSound_0($receiver, streaming, props, continuation) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readSound_0($receiver, streaming, props, continuation);
  }
  function readSound($receiver, streaming, props, continuation) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return get_nativeSoundProvider().createSound_2k6roa$($receiver, streaming, props, continuation);
  }
  function readSound_0($receiver, streaming, props, continuation) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return get_nativeSoundProvider().createSound_eit78h$($receiver, streaming, props, void 0, continuation);
  }
  function readNativeMusic($receiver, props, continuation) {
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readMusic_0($receiver, props, continuation);
  }
  function readNativeMusic_0($receiver, props, continuation) {
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readMusic($receiver, props, continuation);
  }
  function readMusic($receiver, props, continuation) {
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readNativeSound_0($receiver, true, props, continuation);
  }
  function readMusic_0($receiver, props, continuation) {
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readNativeSound($receiver, true, props, continuation);
  }
  function readNativeSoundOptimized($receiver, streaming, props, continuation) {
    if (streaming === void 0)
      streaming = false;
    if (props === void 0)
      props = AudioDecodingProps$Companion_getInstance().DEFAULT;
    return readNativeSound($receiver, streaming, props, continuation);
  }
  function PlatformAudioOutput(coroutineContext, frequency) {
    this.coroutineContext = coroutineContext;
    this.frequency = frequency;
    this.availableSamples_ezqrsf$_0 = 0;
    this.pitch_3myfvf$_0 = 1.0;
    this.volume_lz2yjv$_0 = 1.0;
    this.panning_6o0lis$_0 = 0.0;
  }
  Object.defineProperty(PlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.availableSamples_ezqrsf$_0;
    }
  });
  Object.defineProperty(PlatformAudioOutput.prototype, 'pitch', {
    get: function () {
      return this.pitch_3myfvf$_0;
    },
    set: function (pitch) {
      this.pitch_3myfvf$_0 = pitch;
    }
  });
  Object.defineProperty(PlatformAudioOutput.prototype, 'volume', {
    get: function () {
      return this.volume_lz2yjv$_0;
    },
    set: function (volume) {
      this.volume_lz2yjv$_0 = volume;
    }
  });
  Object.defineProperty(PlatformAudioOutput.prototype, 'panning', {
    get: function () {
      return this.panning_6o0lis$_0;
    },
    set: function (panning) {
      this.panning_6o0lis$_0 = panning;
    }
  });
  function Coroutine$add_trriok$$default($this, samples_0, offset_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$add_trriok$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_trriok$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_trriok$$default.prototype.constructor = Coroutine$add_trriok$$default;
  Coroutine$add_trriok$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(100), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  PlatformAudioOutput.prototype.add_trriok$$default = function (samples_0, offset_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$add_trriok$$default(this, samples_0, offset_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  PlatformAudioOutput.prototype.add_trriok$ = function (samples, offset, size, continuation, callback$default) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = samples.totalSamples;
    return callback$default ? callback$default(samples, offset, size, continuation) : this.add_trriok$$default(samples, offset, size, continuation);
  };
  PlatformAudioOutput.prototype.add_29y2db$ = function (data, continuation) {
    return this.add_trriok$(data.samples, 0, data.totalSamples, continuation);
  };
  PlatformAudioOutput.prototype.start = function () {
  };
  PlatformAudioOutput.prototype.stop = function () {
  };
  PlatformAudioOutput.prototype.dispose = function () {
    this.stop();
  };
  PlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformAudioOutput',
    interfaces: [SoundProps, Disposable]
  };
  function DequeBasedPlatformAudioOutput(coroutineContext, frequency) {
    DequeBasedPlatformAudioOutput$Companion_getInstance();
    PlatformAudioOutput.call(this, coroutineContext, frequency);
    this.deque_f8cr3c$_0 = new AudioSamplesDeque(2);
    this.pitch_9hkkaw$_0 = 1.0;
    this.volume_9r7e1u$_0 = 1.0;
    this.panning_44nbg9$_0 = 0.0;
    var array = new Float32Array(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = 1.0;
    }
    this.volumes = array;
  }
  function DequeBasedPlatformAudioOutput$Companion() {
    DequeBasedPlatformAudioOutput$Companion_instance = this;
    this.nchannels = 2;
  }
  DequeBasedPlatformAudioOutput$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DequeBasedPlatformAudioOutput$Companion_instance = null;
  function DequeBasedPlatformAudioOutput$Companion_getInstance() {
    if (DequeBasedPlatformAudioOutput$Companion_instance === null) {
      new DequeBasedPlatformAudioOutput$Companion();
    }return DequeBasedPlatformAudioOutput$Companion_instance;
  }
  Object.defineProperty(DequeBasedPlatformAudioOutput.prototype, 'pitch', {
    get: function () {
      return this.pitch_9hkkaw$_0;
    },
    set: function (value) {
      this.pitch_9hkkaw$_0 = value;
      this.updateProps_mz427$_0();
    }
  });
  Object.defineProperty(DequeBasedPlatformAudioOutput.prototype, 'volume', {
    get: function () {
      return this.volume_9r7e1u$_0;
    },
    set: function (value) {
      this.volume_9r7e1u$_0 = value;
      this.updateProps_mz427$_0();
    }
  });
  Object.defineProperty(DequeBasedPlatformAudioOutput.prototype, 'panning', {
    get: function () {
      return this.panning_44nbg9$_0;
    },
    set: function (value) {
      this.panning_44nbg9$_0 = value;
      this.updateProps_mz427$_0();
    }
  });
  DequeBasedPlatformAudioOutput.prototype.updateProps_mz427$_0 = function () {
    var rratio = clamp01_0((this.panning + 1.0) / 2.0);
    var lratio = 1.0 - rratio;
    this.volumes[0] = this.volume * lratio;
    this.volumes[1] = this.volume * rratio;
  };
  Object.defineProperty(DequeBasedPlatformAudioOutput.prototype, 'availableRead', {
    get: function () {
      return this.deque_f8cr3c$_0.availableRead;
    }
  });
  DequeBasedPlatformAudioOutput.prototype.readFloat_za3lpa$ = function (channel) {
    return this.deque_f8cr3c$_0.availableRead >= 1 ? clamp_0(this.deque_f8cr3c$_0.readFloat_za3lpa$(channel) * this.volumes[channel], -1.0, +1.0) : 0.0;
  };
  DequeBasedPlatformAudioOutput.prototype.readShort_za3lpa$ = function (channel) {
    return toShort(numberToInt(this.readFloat_za3lpa$(channel) * kotlin_js_internal_ShortCompanionObject.MAX_VALUE));
  };
  Object.defineProperty(DequeBasedPlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.deque_f8cr3c$_0.availableRead;
    }
  });
  DequeBasedPlatformAudioOutput.prototype.add_trriok$$default = function (samples, offset, size, continuation) {
    this.deque_f8cr3c$_0.write_trriok$(samples, offset, size);
  };
  DequeBasedPlatformAudioOutput.prototype.dispose = function () {
    this.stop();
  };
  DequeBasedPlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DequeBasedPlatformAudioOutput',
    interfaces: [PlatformAudioOutput]
  };
  function SoundUtils() {
    SoundUtils_instance = this;
  }
  SoundUtils.prototype.convertS16ToF32_r43jz4$ = function (channels, input, leftVolume, rightVolume) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var output = new Float32Array((input.length * 2 | 0) / channels | 0);
    var optimized = leftVolume === 1 && rightVolume === 1;
    switch (channels) {
      case 2:
        if (optimized) {
          for (var n = 0; n < output.length; n++)
            output[n] = input[n] / 32767.0;
        } else {
          for (var n_0 = 0; n_0 < output.length; n_0 += 2) {
            output[n_0 + 0 | 0] = input[n_0 + 0 | 0] / 32767.0 * leftVolume;
            output[n_0 + 1 | 0] = input[n_0 + 1 | 0] / 32767.0 * rightVolume;
          }
        }

        break;
      case 1:
        if (optimized) {
          var m = 0;
          for (var n_1 = 0; n_1 < input.length; n_1++) {
            var v = input[n_1] / 32767.0;
            output[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = v;
            output[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = v;
          }
        } else {
          var m_0 = 0;
          for (var n_2 = 0; n_2 < input.length; n_2++) {
            var sample = input[n_2] / 32767.0;
            output[tmp$_1 = m_0, m_0 = tmp$_1 + 1 | 0, tmp$_1] = sample * leftVolume;
            output[tmp$_2 = m_0, m_0 = tmp$_2 + 1 | 0, tmp$_2] = sample * rightVolume;
          }
        }

        break;
    }
    return output;
  };
  SoundUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundUtils',
    interfaces: []
  };
  var SoundUtils_instance = null;
  function SoundUtils_getInstance() {
    if (SoundUtils_instance === null) {
      new SoundUtils();
    }return SoundUtils_instance;
  }
  function HtmlNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  HtmlNativeSoundProvider.prototype.initOnce = function () {
  };
  HtmlNativeSoundProvider.prototype.createAudioStream_s4tm7$$default = function (coroutineContext, freq) {
    return new JsPlatformAudioOutput(coroutineContext, freq);
  };
  function Coroutine$createSound_eit78h$$default_0($this, data_0, streaming_0, props_0, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$name = name_0;
  }
  Coroutine$createSound_eit78h$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_eit78h$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_eit78h$$default_0.prototype.constructor = Coroutine$createSound_eit78h$$default_0;
  Coroutine$createSound_eit78h$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HtmlSimpleSound_getInstance().loadSound_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new AudioBufferNativeSound(this.result_0, this.context, this.local$name);
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
  HtmlNativeSoundProvider.prototype.createSound_eit78h$$default = function (data_0, streaming_0, props_0, name_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_eit78h$$default_0(this, data_0, streaming_0, props_0, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_k8kuec$$default_0($this, vfs_0, path_0, streaming_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$createSound_k8kuec$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_k8kuec$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_k8kuec$$default_0.prototype.constructor = Coroutine$createSound_k8kuec$$default_0;
  Coroutine$createSound_k8kuec$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.local$vfs, LocalVfs) || Kotlin.isType(this.local$vfs, UrlVfs)) {
              if (Kotlin.isType(this.local$vfs, LocalVfs))
                tmp$ = this.local$path;
              else if (Kotlin.isType(this.local$vfs, UrlVfs))
                tmp$ = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
              else
                tmp$ = lang.invalidOp;
              var rpath = tmp$;
              this.state_0 = 3;
              this.result_0 = HtmlSimpleSound_getInstance().loadSound_61zpoe$(rpath, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              this.result_0 = this.$this.createSound_k8kuec$(this.local$vfs, this.local$path, void 0, void 0, this, NativeSoundProvider.prototype.createSound_k8kuec$$default.bind(this.$this));
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return new AudioBufferNativeSound(this.result_0, this.context);
          case 4:
            return;
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
  HtmlNativeSoundProvider.prototype.createSound_k8kuec$$default = function (vfs_0, path_0, streaming_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_k8kuec$$default_0(this, vfs_0, path_0, streaming_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function AudioBufferNativeSound(buffer, coroutineContext, name) {
    if (name === void 0)
      name = 'unknown';
    NativeSound.call(this);
    this.buffer = buffer;
    this.coroutineContext = coroutineContext;
    this.name_dj1hto$_0 = name;
    var tmp$, tmp$_0;
    var $receiver = (tmp$_0 = (tmp$ = this.buffer) != null ? tmp$.duration : null) != null ? tmp$_0 : 0.0;
    this.length_u3ai7r$_0 = TimeSpan.Companion.fromSeconds_14dthe$($receiver);
  }
  Object.defineProperty(AudioBufferNativeSound.prototype, 'name', {
    get: function () {
      return this.name_dj1hto$_0;
    }
  });
  Object.defineProperty(AudioBufferNativeSound.prototype, 'length', {
    get: function () {
      return this.length_u3ai7r$_0;
    }
  });
  AudioBufferNativeSound.prototype.decode = function (continuation) {
    var tmp$;
    if (this.buffer == null) {
      return AudioData$Companion_getInstance().DUMMY;
    } else {
      var nchannels = this.buffer.numberOfChannels;
      var nsamples = this.buffer.length;
      var data = new AudioSamples(nchannels, nsamples);
      var m = 0;
      for (var c = 0; c < nchannels; c++) {
        var channelF = this.buffer.getChannelData(c);
        for (var n = 0; n < nsamples; n++) {
          data.get_za3lpa$(c)[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = SampleConvert_getInstance().floatToShort_mx4ult$(channelF[n]);
        }
      }
      return new AudioData(this.buffer.sampleRate, data);
    }
  };
  function AudioBufferNativeSound$play$ObjectLiteral(this$AudioBufferNativeSound, closure$params, sound) {
    NativeSoundChannel.call(this, sound);
    this.channel = this$AudioBufferNativeSound.buffer != null ? HtmlSimpleSound_getInstance().playSound_lsen1i$(this$AudioBufferNativeSound.buffer, closure$params, this$AudioBufferNativeSound.coroutineContext) : null;
    var tmp$, tmp$_0, tmp$_1;
    this.total_ri43qs$_0 = (tmp$_1 = (tmp$_0 = (tmp$ = this$AudioBufferNativeSound.buffer) != null ? tmp$.duration : null) != null ? TimeSpan.Companion.fromSeconds_14dthe$(tmp$_0) : null) != null ? tmp$_1 : TimeSpan.Companion.fromSeconds_14dthe$(0);
  }
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'volume', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.volume : null) != null ? tmp$_0 : 1.0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.channel) != null ? (tmp$.volume = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'pitch', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.pitch : null) != null ? tmp$_0 : 1.0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.channel) != null ? (tmp$.pitch = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'panning', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.panning : null) != null ? tmp$_0 : 0.0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.channel) != null ? (tmp$.panning = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'current', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.currentTime : null) != null ? tmp$_0 : TimeSpan.Companion.fromSeconds_14dthe$(0);
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.channel) != null ? (tmp$.currentTime = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'total', {
    get: function () {
      return this.total_ri43qs$_0;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'playing', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.playing : null) != null ? tmp$_0 : this.current.compareTo_11rb$(this.total) < 0;
    }
  });
  AudioBufferNativeSound$play$ObjectLiteral.prototype.stop = function () {
    var tmp$;
    (tmp$ = this.channel) != null ? (tmp$.stop(), Unit) : null;
  };
  AudioBufferNativeSound$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  AudioBufferNativeSound.prototype.play_gfl8bq$$default = function (params) {
    var $receiver = new AudioBufferNativeSound$play$ObjectLiteral(this, params, this);
    $receiver.copySoundPropsFrom_bx1fg$(params);
    return $receiver;
  };
  AudioBufferNativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioBufferNativeSound',
    interfaces: [NativeSound]
  };
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  function MediaElementAudioSourceNodeWithAudioElement(node, audio) {
    this.node = node;
    this.audio = audio;
  }
  MediaElementAudioSourceNodeWithAudioElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MediaElementAudioSourceNodeWithAudioElement',
    interfaces: []
  };
  function HtmlSimpleSound() {
    HtmlSimpleSound_instance = this;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    try {
      if (!equals(typeof window.AudioContext, 'undefined'))
        tmp$ = new AudioContext();
      else {
        if (!equals(typeof window.webkitAudioContext, 'undefined'))
          tmp$ = new webkitAudioContext();
        else
          tmp$ = null;
      }
      var $receiver = tmp$;
      window.globalAudioContext = $receiver;
      tmp$_0 = $receiver;
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        tmp$_0 = null;
      } else
        throw e;
    }
    this.ctx = tmp$_0;
    this.unlocked = false;
    this.unlockDeferred_0 = CompletableDeferred(Job());
    this.unlock = Kotlin.isType(tmp$_1 = this.unlockDeferred_0, Deferred) ? tmp$_1 : throwCCE();
    var _scratchBuffer = (tmp$_2 = this.ctx) != null ? tmp$_2.createBuffer(1, 1, 22050) : null;
    var unlock = {v: null};
    unlock.v = HtmlSimpleSound_init$lambda(this, _scratchBuffer, unlock);
    document.addEventListener('keydown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchstart', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchend', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('mousedown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
  }
  Object.defineProperty(HtmlSimpleSound.prototype, 'available', {
    get: function () {
      return this.ctx != null;
    }
  });
  function HtmlSimpleSound$SimpleSoundChannel(buffer, ctx, params, coroutineContext) {
    this.buffer = buffer;
    this.ctx = ctx;
    this.params = params;
    this.coroutineContext = coroutineContext;
    this.gainNode = null;
    this.pannerNode = null;
    this.sourceNode = null;
    this.startedAt = DateTime.Companion.now();
    this.times = this.params.times;
    this.job = this.createJobAt_fv8bff$(this.params.startTime);
    this.volume_7ahtrp$_0 = 1.0;
    this.pitch_6gz9ol$_0 = 1.0;
    this.panning_9hjq7g$_0 = 0.0;
    this.running_0 = true;
  }
  function HtmlSimpleSound$SimpleSoundChannel$createNode$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function HtmlSimpleSound$SimpleSoundChannel$createNode$lambda$lambda$lambda(this$SimpleSoundChannel) {
    return function ($receiver) {
      $receiver.gain.value = 1.0;
      this$SimpleSoundChannel.sourceNode = HtmlSimpleSound_getInstance().source_qe40ti$($receiver, this$SimpleSoundChannel.buffer, HtmlSimpleSound$SimpleSoundChannel$createNode$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function HtmlSimpleSound$SimpleSoundChannel$createNode$lambda$lambda(this$SimpleSoundChannel) {
    return function ($receiver) {
      this$SimpleSoundChannel.gainNode = HtmlSimpleSound_getInstance().gain_cvo8qv$($receiver, HtmlSimpleSound$SimpleSoundChannel$createNode$lambda$lambda$lambda(this$SimpleSoundChannel));
      return Unit;
    };
  }
  HtmlSimpleSound$SimpleSoundChannel.prototype.createNode_fv8bff$ = function (startTime) {
    var tmp$;
    var $receiver = this.ctx.destination;
    this.pannerNode = HtmlSimpleSound_getInstance().panner_2onr8o$($receiver, HtmlSimpleSound$SimpleSoundChannel$createNode$lambda$lambda(this));
    (tmp$ = this.sourceNode) != null ? (tmp$.start(0.0, startTime.seconds), Unit) : null;
  };
  function HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda$lambda(closure$deferred) {
    return function () {
      return closure$deferred.complete_11rb$(Unit);
    };
  }
  function HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda$lambda_0(closure$deferred) {
    return function () {
      closure$deferred.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda(this$SimpleSoundChannel_0, closure$startTime_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$this$SimpleSoundChannel = this$SimpleSoundChannel_0;
    this.local$closure$startTime = closure$startTime_0;
  }
  Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda.prototype.constructor = Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda;
  Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.exceptionState_0 = 6;
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$this$SimpleSoundChannel.times.hasMore) {
              this.state_0 = 4;
              continue;
            }
            this.local$this$SimpleSoundChannel.startedAt = DateTime.Companion.now();
            this.local$this$SimpleSoundChannel.createNode_fv8bff$(this.local$closure$startTime.v);
            this.local$closure$startTime.v = TimeSpan.Companion.fromSeconds_14dthe$(0);
            var deferred = CompletableDeferred();
            if (this.local$this$SimpleSoundChannel.sourceNode == null || !equals((tmp$ = this.local$this$SimpleSoundChannel.ctx) != null ? tmp$.state : null, 'running')) {
              window.setTimeout(HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda$lambda(deferred), numberToInt(this.local$this$SimpleSoundChannel.buffer.duration * 1000));
            } else {
              (tmp$_0 = this.local$this$SimpleSoundChannel.sourceNode) != null ? (tmp$_0.onended = HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda$lambda_0(deferred)) : null;
            }

            this.local$this$SimpleSoundChannel.times = this.local$this$SimpleSoundChannel.times.oneLess;
            this.state_0 = 2;
            this.result_0 = deferred.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (!this.local$this$SimpleSoundChannel.times.hasMore) {
              this.state_0 = 4;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 1;
            continue;
          case 4:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [5];
            this.state_0 = 7;
            continue;
          case 5:
            return Unit;
          case 6:
            this.finallyPath_0 = [8];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 8;
            this.local$this$SimpleSoundChannel.running_0 = false;
            (tmp$_1 = this.local$this$SimpleSoundChannel.sourceNode) != null ? (tmp$_1.stop(), Unit) : null;
            this.local$this$SimpleSoundChannel.gainNode = null;
            this.local$this$SimpleSoundChannel.pannerNode = null;
            this.local$this$SimpleSoundChannel.sourceNode = null;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda(this$SimpleSoundChannel_0, closure$startTime_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda(this$SimpleSoundChannel_0, closure$startTime_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HtmlSimpleSound$SimpleSoundChannel.prototype.createJobAt_fv8bff$ = function (startTime) {
    var tmp$;
    this.startedAt = DateTime.Companion.now();
    var startTime_0 = {v: startTime};
    (tmp$ = this.ctx) != null ? (tmp$.resume(), Unit) : null;
    return launchImmediately_0(CoroutineScope(this.coroutineContext), HtmlSimpleSound$SimpleSoundChannel$createJobAt$lambda(this, startTime_0));
  };
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'currentTime', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.startedAt);
    },
    set: function (value) {
      this.job.cancel_m4sck1$();
      this.job = this.createJobAt_fv8bff$(value);
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'volume', {
    get: function () {
      return this.volume_7ahtrp$_0;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.volume_7ahtrp$_0 = value;
      (tmp$_0 = (tmp$ = this.gainNode) != null ? tmp$.gain : null) != null ? (tmp$_0.value = value) : null;
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'pitch', {
    get: function () {
      return this.pitch_6gz9ol$_0;
    },
    set: function (value) {
      this.pitch_6gz9ol$_0 = value;
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'panning', {
    get: function () {
      return this.panning_9hjq7g$_0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.pannerNode) != null ? (tmp$.setPosition(this.panning, 0.0, 0.0), Unit) : null;
      this.panning_9hjq7g$_0 = value;
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'playing', {
    get: function () {
      return this.running_0;
    }
  });
  HtmlSimpleSound$SimpleSoundChannel.prototype.stop = function () {
    this.job.cancel_m4sck1$();
  };
  HtmlSimpleSound$SimpleSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleSoundChannel',
    interfaces: []
  };
  function HtmlSimpleSound$panner$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.panner_2onr8o$ = function ($receiver, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$panner$lambda;
    var tmp$, tmp$_0;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }var ctx = tmp$;
    var tmp$_1;
    try {
      tmp$_1 = new Result(ctx.createPanner());
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$_1 = new Result(createFailure(e));
      } else
        throw e;
    }
    var $this = tmp$_1;
    var getOrNull$result;
    var tmp$_2;
    if ($this.isFailure) {
      getOrNull$result = null;
    } else {
      getOrNull$result = (tmp$_2 = $this.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
    }
    tmp$_0 = getOrNull$result;
    if (tmp$_0 == null) {
      return null;
    }var node = tmp$_0;
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$gain$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.gain_cvo8qv$ = function ($receiver, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$gain$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }var ctx = tmp$;
    var node = ctx.createGain();
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$source$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.source_qe40ti$ = function ($receiver, buffer, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$source$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }var ctx = tmp$;
    var node = ctx.createBufferSource();
    node.buffer = buffer;
    callback(node);
    node.connect($receiver);
    return node;
  };
  HtmlSimpleSound.prototype.playSound_lsen1i$ = function (buffer, params, coroutineContext) {
    var tmp$;
    return (tmp$ = this.ctx) != null ? new HtmlSimpleSound$SimpleSoundChannel(buffer, tmp$, params, coroutineContext) : null;
  };
  HtmlSimpleSound.prototype.stopSound_dq0zcj$ = function (channel) {
    channel != null ? (channel.disconnect(0), Unit) : null;
    channel != null ? (channel.stop(0.0), Unit) : null;
  };
  function Coroutine$waitUnlocked($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$waitUnlocked.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitUnlocked.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitUnlocked.prototype.constructor = Coroutine$waitUnlocked;
  Coroutine$waitUnlocked.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.unlock.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.ctx;
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
  HtmlSimpleSound.prototype.waitUnlocked = function (continuation_0, suspended) {
    var instance = new Coroutine$waitUnlocked(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HtmlSimpleSound$callOnUnlocked$lambda(closure$cancelled, closure$callback) {
    return function (it) {
      if (!closure$cancelled.v)
        closure$callback(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound$callOnUnlocked$lambda_0(closure$cancelled) {
    return function (it) {
      closure$cancelled.v = true;
      return Unit;
    };
  }
  HtmlSimpleSound.prototype.callOnUnlocked_x41j5s$ = function (callback) {
    var cancelled = {v: false};
    this.unlock.invokeOnCompletion_f05bi3$(HtmlSimpleSound$callOnUnlocked$lambda(cancelled, callback));
    return Cancellable.Companion.invoke_4m4org$(HtmlSimpleSound$callOnUnlocked$lambda_0(cancelled));
  };
  function HtmlSimpleSound$loadSound$lambda$lambda(closure$c) {
    return function (data) {
      closure$c.resumeWith_tl1gpc$(new Result(data));
      return Unit;
    };
  }
  function HtmlSimpleSound$loadSound$lambda$lambda_0(closure$c, closure$url) {
    return function () {
      var $receiver = closure$c;
      var exception = Exception_init('error decoding ' + closure$url);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      return Unit;
    };
  }
  function HtmlSimpleSound$loadSound$lambda(this$HtmlSimpleSound, closure$data, closure$url) {
    return function (c) {
      this$HtmlSimpleSound.ctx.decodeAudioData(closure$data, HtmlSimpleSound$loadSound$lambda$lambda(c), HtmlSimpleSound$loadSound$lambda$lambda_0(c, closure$url));
      return Unit;
    };
  }
  function Coroutine$loadSound_qucnhy$($this, data_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$url = url_0;
  }
  Coroutine$loadSound_qucnhy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_qucnhy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_qucnhy$.prototype.constructor = Coroutine$loadSound_qucnhy$;
  Coroutine$loadSound_qucnhy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.ctx == null) {
              return null;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = suspendCoroutine$lambda(HtmlSimpleSound$loadSound$lambda(this.$this, this.local$data, this.local$url))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0;
            return this.result_0;
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
  HtmlSimpleSound.prototype.loadSound_qucnhy$ = function (data_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_qucnhy$(this, data_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlSimpleSound.prototype.loadSoundBuffer_61zpoe$ = function (url, continuation) {
    if (this.ctx == null)
      return null;
    var audioPool = document.createElement('audio');
    audioPool.currentTime = 0.0;
    audioPool.pause();
    audioPool.autoplay = false;
    audioPool.src = url;
    return new MediaElementAudioSourceNodeWithAudioElement(this.ctx.createMediaElementSource(audioPool), audioPool);
  };
  HtmlSimpleSound.prototype.playSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? tmp$.play() : null;
      (tmp$_0 = buffer != null ? buffer.node : null) != null ? tmp$_0.connect(this.ctx.destination) : null;
    }};
  HtmlSimpleSound.prototype.stopSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? (tmp$.pause(), Unit) : null;
      (tmp$_0 = buffer != null ? buffer.audio : null) != null ? (tmp$_0.currentTime = 0.0) : null;
      (tmp$_1 = buffer != null ? buffer.node : null) != null ? (tmp$_1.disconnect(this.ctx.destination), Unit) : null;
    }};
  HtmlSimpleSound.prototype.loadSound_fqrh44$ = function (data, continuation) {
    return this.loadSound_qucnhy$(data.buffer, 'ByteArray', continuation);
  };
  function Coroutine$loadSound_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
  }
  Coroutine$loadSound_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_61zpoe$.prototype.constructor = Coroutine$loadSound_61zpoe$;
  Coroutine$loadSound_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = get_uniVfs(this.local$url).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.loadSound_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
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
  HtmlSimpleSound.prototype.loadSound_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HtmlSimpleSound_init$lambda$lambda(closure$source, closure$unlock, this$HtmlSimpleSound) {
    return function () {
      closure$source.disconnect(0);
      document.removeEventListener('keydown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchstart', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchend', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('mousedown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      this$HtmlSimpleSound.unlocked = true;
      this$HtmlSimpleSound.unlockDeferred_0.complete_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound_init$lambda(this$HtmlSimpleSound, closure$_scratchBuffer, closure$unlock) {
    return function (it) {
      var tmp$;
      if (this$HtmlSimpleSound.ctx != null) {
        (tmp$ = window.globalAudioContext) != null ? (tmp$.resume(), Unit) : null;
        var source = this$HtmlSimpleSound.ctx.createBufferSource();
        source.buffer = closure$_scratchBuffer;
        source.connect(this$HtmlSimpleSound.ctx.destination);
        source.start(0.0);
        if (typeof this$HtmlSimpleSound.ctx.resume === 'function')
          this$HtmlSimpleSound.ctx.resume();
        source.onended = HtmlSimpleSound_init$lambda$lambda(source, closure$unlock, this$HtmlSimpleSound);
      }return Unit;
    };
  }
  HtmlSimpleSound.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlSimpleSound',
    interfaces: []
  };
  var HtmlSimpleSound_instance = null;
  function HtmlSimpleSound_getInstance() {
    if (HtmlSimpleSound_instance === null) {
      new HtmlSimpleSound();
    }return HtmlSimpleSound_instance;
  }
  function nativeSoundProvider$lambda() {
    return new HtmlNativeSoundProvider();
  }
  var nativeSoundProvider;
  function get_nativeSoundProvider() {
    return nativeSoundProvider.value;
  }
  function JsPlatformAudioOutput(coroutineContext, freq) {
    JsPlatformAudioOutput$Companion_getInstance();
    PlatformAudioOutput.call(this, coroutineContext, freq);
    this.freq = freq;
    var tmp$;
    this.id = (tmp$ = JsPlatformAudioOutput$Companion_getInstance().lastId, JsPlatformAudioOutput$Companion_getInstance().lastId = tmp$ + 1 | 0, tmp$);
    get_nativeSoundProvider().initOnce();
    this.missingDataCount = 0;
    this.nodeRunning = false;
    this.node = null;
    this.nchannels_0 = 2;
    var array = Array_0(this.nchannels_0);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = new FloatArrayDeque();
    }
    this.deques_0 = array;
    this.startPromise_0 = null;
    this.totalShorts = 0;
  }
  function JsPlatformAudioOutput$Companion() {
    JsPlatformAudioOutput$Companion_instance = this;
    this.lastId = 0;
  }
  JsPlatformAudioOutput$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsPlatformAudioOutput$Companion_instance = null;
  function JsPlatformAudioOutput$Companion_getInstance() {
    if (JsPlatformAudioOutput$Companion_instance === null) {
      new JsPlatformAudioOutput$Companion();
    }return JsPlatformAudioOutput$Companion_instance;
  }
  JsPlatformAudioOutput.prototype.process_0 = function (e) {
    var tmp$;
    var array = Array_0(e.outputBuffer.numberOfChannels);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = e.outputBuffer.getChannelData(i);
    }
    var outChannels = array;
    var hasData = true;
    if (!document.hidden) {
      tmp$ = this.nchannels_0;
      for (var channel = 0; channel < tmp$; channel++) {
        var deque = this.deques_0[channel];
        var outChannel = outChannels[channel];
        var read = deque.read_kgymra$(outChannel);
        if (read < outChannel.length)
          hasData = false;
      }
    }if (!hasData) {
      this.missingDataCount = this.missingDataCount + 1 | 0;
    }if (this.missingDataCount >= 500) {
      this.stop();
    }};
  JsPlatformAudioOutput.prototype.ensureInit_0 = function () {
    return this.node;
  };
  function JsPlatformAudioOutput$start$lambda$lambda(this$JsPlatformAudioOutput) {
    return function (it) {
      this$JsPlatformAudioOutput.process_0(it);
      return Unit;
    };
  }
  function JsPlatformAudioOutput$start$lambda(this$JsPlatformAudioOutput) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      this$JsPlatformAudioOutput.node = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.createScriptProcessor(1024, 2, 2) : null;
      (tmp$_0 = this$JsPlatformAudioOutput.node) != null ? (tmp$_0.onaudioprocess = JsPlatformAudioOutput$start$lambda$lambda(this$JsPlatformAudioOutput)) : null;
      if (HtmlSimpleSound_getInstance().ctx != null)
        (tmp$_1 = this$JsPlatformAudioOutput.node) != null ? tmp$_1.connect(HtmlSimpleSound_getInstance().ctx.destination) : null;
      return Unit;
    };
  }
  JsPlatformAudioOutput.prototype.start = function () {
    if (this.nodeRunning)
      return;
    this.startPromise_0 = HtmlSimpleSound_getInstance().callOnUnlocked_x41j5s$(JsPlatformAudioOutput$start$lambda(this));
    this.missingDataCount = 0;
    this.nodeRunning = true;
  };
  JsPlatformAudioOutput.prototype.stop = function () {
    var tmp$, tmp$_0;
    if (!this.nodeRunning)
      return;
    (tmp$ = this.startPromise_0) != null ? (tmp$.cancel_tcv7n7$(), Unit) : null;
    (tmp$_0 = this.node) != null ? (tmp$_0.disconnect(), Unit) : null;
    this.nodeRunning = false;
  };
  JsPlatformAudioOutput.prototype.ensureRunning = function () {
    this.ensureInit_0();
    if (!this.nodeRunning) {
      this.start();
    }};
  Object.defineProperty(JsPlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.totalShorts;
    }
  });
  function Coroutine$add_trriok$$default_0($this, samples_0, offset_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$samples = samples_0;
    this.local$offset = offset_0;
    this.local$size = size_0;
  }
  Coroutine$add_trriok$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_trriok$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_trriok$$default_0.prototype.constructor = Coroutine$add_trriok$$default_0;
  Coroutine$add_trriok$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.$this.totalShorts = this.$this.totalShorts + this.local$size | 0;
            if (!HtmlSimpleSound_getInstance().available) {
              var sampleCount = this.local$size / 2 | 0;
              var timeSeconds = sampleCount / 41000.0;
              this.state_0 = 5;
              this.result_0 = delay_0(this.$this.coroutineContext, TimeSpan.Companion.fromSeconds_14dthe$(timeSeconds), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.$this.ensureRunning();
              var schannels = this.local$samples.channels;
              tmp$ = this.$this.nchannels_0;
              for (var channel = 0; channel < tmp$; channel++) {
                var sample = this.local$samples.get_za3lpa$(channel % schannels);
                var deque = this.$this.deques_0[channel];
                for (var n = 0; n < this.local$size; n++) {
                  write(deque, SampleConvert_getInstance().shortToFloat_mq22fl$(sample[this.local$offset + n | 0]));
                }
              }
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.deques_0[0].availableRead <= (this.local$samples.totalSamples * 4 | 0)) {
              this.state_0 = 4;
              continue;
            }
            this.state_0 = 3;
            this.result_0 = delay_0(this.$this.coroutineContext, TimeSpan.Companion.fromMilliseconds_14dthe$(4), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
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
  JsPlatformAudioOutput.prototype.add_trriok$$default = function (samples_0, offset_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$add_trriok$$default_0(this, samples_0, offset_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPlatformAudioOutput',
    interfaces: [PlatformAudioOutput]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korau = package$soywiz.korau || (package$soywiz.korau = {});
  Object.defineProperty(package$korau, 'Korau', {
    get: Korau_getInstance
  });
  var package$error = package$korau.error || (package$korau.error = {});
  package$error.SeekingNotSupported = SeekingNotSupported;
  package$error.seekingNotSupported_61zpoe$ = seekingNotSupported;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  AudioFormat.Info = AudioFormat$Info;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  var package$format = package$korau.format || (package$korau.format = {});
  package$format.AudioFormat = AudioFormat;
  Object.defineProperty(AudioDecodingProps, 'Companion', {
    get: AudioDecodingProps$Companion_getInstance
  });
  package$format.AudioDecodingProps = AudioDecodingProps;
  Object.defineProperty(AudioEncodingProps, 'Companion', {
    get: AudioEncodingProps$Companion_getInstance
  });
  package$format.AudioEncodingProps = AudioEncodingProps;
  package$format.InvalidAudioFormatException = InvalidAudioFormatException;
  package$format.invalidAudioFormat_61zpoe$ = invalidAudioFormat;
  Object.defineProperty(package$format, 'defaultAudioFormats', {
    get: get_defaultAudioFormats
  });
  Object.defineProperty(AudioFormats, 'Companion', {
    get: AudioFormats$Companion_getInstance
  });
  package$format.AudioFormats = AudioFormats;
  package$format.readSoundInfo_9fcx0q$ = readSoundInfo;
  package$format.standardAudioFormats = standardAudioFormats;
  package$format.registerStandard_llp23w$ = registerStandard;
  Object.defineProperty(MP3, 'Companion', {
    get: MP3$Companion_getInstance
  });
  package$format.MP3 = MP3;
  MP3Base.SeekingTable = MP3Base$SeekingTable;
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'JOINT_STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'DUAL_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'SINGLE_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'Companion', {
    get: MP3Base$Parser$Companion$ChannelMode$Companion_getInstance
  });
  MP3Base$Parser$Companion.prototype.ChannelMode = MP3Base$Parser$Companion$ChannelMode;
  MP3Base$Parser$Companion.prototype.Mp3Info = MP3Base$Parser$Companion$Mp3Info;
  Object.defineProperty(MP3Base$Parser, 'Companion', {
    get: MP3Base$Parser$Companion_getInstance
  });
  MP3Base.Parser = MP3Base$Parser;
  package$format.MP3Base = MP3Base;
  Object.defineProperty(OGG, 'Companion', {
    get: OGG$Companion_getInstance
  });
  package$format.OGG = OGG;
  Object.defineProperty(OggBase, 'PacketTypes', {
    get: OggBase$PacketTypes_getInstance
  });
  package$format.OggBase = OggBase;
  Object.defineProperty(WAV, 'Companion', {
    get: WAV$Companion_getInstance
  });
  WAV.Chunk = WAV$Chunk;
  WAV.ProcessedChunk = WAV$ProcessedChunk;
  $$importsForInline$$['korau-root-korau'] = _;
  WAV.WavAudioStream = WAV$WavAudioStream;
  WAV.Fmt = WAV$Fmt;
  package$format.WAV = WAV;
  package$format.toWav_gs0hc$ = toWav;
  Object.defineProperty(JavaMp3Decoder$DecodeStatus, 'OK', {
    get: JavaMp3Decoder$DecodeStatus$OK_getInstance
  });
  Object.defineProperty(JavaMp3Decoder$DecodeStatus, 'ERROR', {
    get: JavaMp3Decoder$DecodeStatus$ERROR_getInstance
  });
  Object.defineProperty(JavaMp3Decoder$DecodeStatus, 'COMPLETED', {
    get: JavaMp3Decoder$DecodeStatus$COMPLETED_getInstance
  });
  JavaMp3Decoder.prototype.DecodeStatus = JavaMp3Decoder$DecodeStatus;
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  JavaMp3Decoder.prototype.FrameHeader = JavaMp3Decoder$FrameHeader;
  JavaMp3Decoder.prototype.MainDataReader = JavaMp3Decoder$MainDataReader;
  JavaMp3Decoder.prototype.Buffer = JavaMp3Decoder$Buffer;
  JavaMp3Decoder.prototype.SoundData = JavaMp3Decoder$SoundData;
  var package$mp3 = package$format.mp3 || (package$format.mp3 = {});
  Object.defineProperty(package$mp3, 'JavaMp3Decoder', {
    get: JavaMp3Decoder_getInstance
  });
  Object.defineProperty(MP3Decoder, 'Companion', {
    get: MP3Decoder$Companion_getInstance
  });
  package$mp3.MP3Decoder = MP3Decoder;
  var package$internal = package$korau.internal || (package$korau.internal = {});
  package$internal.write_n2t6zc$ = write;
  Object.defineProperty(package$internal, 'KORAU_VERSION_8be2vx$', {
    get: function () {
      return KORAU_VERSION;
    }
  });
  package$internal.get_niceStr_1zw1ma$ = get_niceStr;
  Object.defineProperty(package$internal, 'SampleConvert', {
    get: SampleConvert_getInstance
  });
  package$internal.combine_ydpzj9$ = combine;
  package$internal.copyChunkTo_heux3r$ = copyChunkTo;
  package$internal.toByteArrayLE_dez40u$ = toByteArrayLE;
  package$internal.toShortArrayLE_jln3ri$ = toShortArrayLE;
  package$internal.arraycopyStep_ft9mzz$ = arraycopyStep;
  package$internal.arraycopyStep_b5ow4v$ = arraycopyStep_0;
  Object.defineProperty(AudioData, 'Companion', {
    get: AudioData$Companion_getInstance
  });
  var package$sound = package$korau.sound || (package$korau.sound = {});
  package$sound.AudioData = AudioData;
  Object.defineProperty(AudioConversionQuality, 'FAST', {
    get: AudioConversionQuality$FAST_getInstance
  });
  package$sound.AudioConversionQuality = AudioConversionQuality;
  package$sound.withRate_fii12q$ = withRate;
  package$sound.toStream_gs0hc$ = toStream;
  package$sound.AudioDataStream = AudioDataStream;
  package$sound.toNativeSound_gs0hc$ = toNativeSound;
  package$sound.playAndWait_bwyejq$ = playAndWait;
  package$sound.readAudioData_dys1st$ = readAudioData;
  package$sound.IAudioSamples = IAudioSamples;
  package$sound.resample_x4qbcg$ = resample;
  package$sound.AudioSamples = AudioSamples;
  package$sound.AudioSamplesInterleaved = AudioSamplesInterleaved;
  package$sound.copyOfRange_bca8f$ = copyOfRange;
  package$sound.interleaved_ym3bex$ = interleaved;
  package$sound.applyProps_scdoso$ = applyProps;
  package$sound.ensureTwoChannels_k4ohk6$ = ensureTwoChannels;
  package$sound.separated_ywklkw$ = separated;
  package$sound.AudioSamplesDeque = AudioSamplesDeque;
  Object.defineProperty(AudioStream, 'Companion', {
    get: AudioStream$Companion_getInstance
  });
  AudioStream.GeneratorAudioStream = AudioStream$GeneratorAudioStream;
  package$sound.AudioStream = AudioStream;
  package$sound.toData_ev1oyk$ = toData;
  package$sound.playAndWait_at0lpo$ = playAndWait_0;
  package$sound.playAndWait_mg0xpy$ = playAndWait_1;
  package$sound.readAudioStream_9fcx0q$ = readAudioStream;
  package$sound.writeAudio_jzeo0l$ = writeAudio;
  Object.defineProperty(package$sound, 'AudioTone', {
    get: AudioTone_getInstance
  });
  package$sound.NativeSoundProvider = NativeSoundProvider;
  package$sound.DummyNativeSoundProvider = DummyNativeSoundProvider;
  package$sound.DummyNativeSoundChannel = DummyNativeSoundChannel;
  package$sound.ReadonlySoundProps = ReadonlySoundProps;
  package$sound.SoundProps = SoundProps;
  package$sound.NativeSoundChannelGroup = NativeSoundChannelGroup;
  package$sound.NativeSoundChannelBase = NativeSoundChannelBase;
  package$sound.attachTo_7xdv7r$ = attachTo;
  package$sound.NativeSoundChannel = NativeSoundChannel;
  package$sound.await_6ares6$ = await_0;
  package$sound.NativeSound = NativeSound;
  Object.defineProperty(PlaybackParameters, 'Companion', {
    get: PlaybackParameters$Companion_getInstance
  });
  package$sound.PlaybackParameters = PlaybackParameters;
  Object.defineProperty(package$sound, 'infinitePlaybackTimes', {
    get: get_infinitePlaybackTimes
  });
  package$sound.get_playbackTimes_s8ev3n$ = get_playbackTimes;
  Object.defineProperty(PlaybackTimes, 'Companion', {
    get: PlaybackTimes$Companion_getInstance
  });
  package$sound.PlaybackTimes = PlaybackTimes;
  package$sound.toData_kbpa60$ = toData_0;
  package$sound.toStream_kbpa60$ = toStream_0;
  package$sound.playAndWait_lai3ut$ = playAndWait_2;
  package$sound.playAndWait_7dsnk8$ = playAndWait_3;
  package$sound.readNativeSound_rbebel$ = readNativeSound;
  package$sound.readNativeSound_bahcra$ = readNativeSound_0;
  package$sound.readSound_rbebel$ = readSound;
  package$sound.readSound_bahcra$ = readSound_0;
  package$sound.readNativeMusic_fotfka$ = readNativeMusic;
  package$sound.readNativeMusic_a91ua9$ = readNativeMusic_0;
  package$sound.readMusic_a91ua9$ = readMusic;
  package$sound.readMusic_fotfka$ = readMusic_0;
  package$sound.readNativeSoundOptimized_rbebel$ = readNativeSoundOptimized;
  package$sound.PlatformAudioOutput = PlatformAudioOutput;
  Object.defineProperty(DequeBasedPlatformAudioOutput, 'Companion', {
    get: DequeBasedPlatformAudioOutput$Companion_getInstance
  });
  package$sound.DequeBasedPlatformAudioOutput = DequeBasedPlatformAudioOutput;
  Object.defineProperty(package$sound, 'SoundUtils', {
    get: SoundUtils_getInstance
  });
  package$sound.HtmlNativeSoundProvider = HtmlNativeSoundProvider;
  package$sound.AudioBufferNativeSound = AudioBufferNativeSound;
  package$sound.MediaElementAudioSourceNodeWithAudioElement = MediaElementAudioSourceNodeWithAudioElement;
  HtmlSimpleSound.prototype.SimpleSoundChannel = HtmlSimpleSound$SimpleSoundChannel;
  Object.defineProperty(package$sound, 'HtmlSimpleSound', {
    get: HtmlSimpleSound_getInstance
  });
  Object.defineProperty(package$sound, 'nativeSoundProvider', {
    get: get_nativeSoundProvider
  });
  Object.defineProperty(JsPlatformAudioOutput, 'Companion', {
    get: JsPlatformAudioOutput$Companion_getInstance
  });
  package$sound.JsPlatformAudioOutput = JsPlatformAudioOutput;
  Object.defineProperty(AudioSamples.prototype, 'size', Object.getOwnPropertyDescriptor(IAudioSamples.prototype, 'size'));
  AudioSamples.prototype.isEmpty = IAudioSamples.prototype.isEmpty;
  AudioSamples.prototype.isNotEmpty = IAudioSamples.prototype.isNotEmpty;
  AudioSamples.prototype.getFloat_vux9f0$ = IAudioSamples.prototype.getFloat_vux9f0$;
  AudioSamples.prototype.setFloat_n0b4r3$ = IAudioSamples.prototype.setFloat_n0b4r3$;
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'size', Object.getOwnPropertyDescriptor(IAudioSamples.prototype, 'size'));
  AudioSamplesInterleaved.prototype.isEmpty = IAudioSamples.prototype.isEmpty;
  AudioSamplesInterleaved.prototype.isNotEmpty = IAudioSamples.prototype.isNotEmpty;
  AudioSamplesInterleaved.prototype.getFloat_vux9f0$ = IAudioSamples.prototype.getFloat_vux9f0$;
  AudioSamplesInterleaved.prototype.setFloat_n0b4r3$ = IAudioSamples.prototype.setFloat_n0b4r3$;
  NativeSoundChannelBase.prototype.copySoundPropsFrom_bx1fg$ = SoundProps.prototype.copySoundPropsFrom_bx1fg$;
  NativeSoundChannel.prototype.await = NativeSoundChannelBase.prototype.await;
  NativeSoundChannel.prototype.copySoundPropsFrom_bx1fg$ = NativeSoundChannelBase.prototype.copySoundPropsFrom_bx1fg$;
  NativeSound.prototype.copySoundPropsFrom_bx1fg$ = SoundProps.prototype.copySoundPropsFrom_bx1fg$;
  NativeSoundChannelGroup.prototype.await = NativeSoundChannelBase.prototype.await;
  NativeSoundChannelGroup.prototype.copySoundPropsFrom_bx1fg$ = NativeSoundChannelBase.prototype.copySoundPropsFrom_bx1fg$;
  PlatformAudioOutput.prototype.copySoundPropsFrom_bx1fg$ = SoundProps.prototype.copySoundPropsFrom_bx1fg$;
  defaultAudioFormats = lazy(defaultAudioFormats$lambda);
  temp = new Float32Array(1);
  KORAU_VERSION = '1.11.9';
  nativeSoundProvider = lazy(nativeSoundProvider$lambda);
  Kotlin.defineModule('korau-root-korau', _);
  return _;
}));

//# sourceMappingURL=korau-root-korau.js.map
