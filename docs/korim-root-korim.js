(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-root-korma', 'kmem-root-kmem', 'korio-root-korio', 'kds-root-kds', 'klock-root-klock', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-root-korma'), require('kmem-root-kmem'), require('korio-root-korio'), require('kds-root-kds'), require('klock-root-klock'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korim-root-korim'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korim-root-korim'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korim-root-korim'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korim-root-korim'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korim-root-korim'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korim-root-korim'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korim-root-korim'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korim-root-korim'.");
    }root['korim-root-korim'] = factory(typeof this['korim-root-korim'] === 'undefined' ? {} : this['korim-root-korim'], kotlin, this['korma-root-korma'], this['kmem-root-kmem'], this['korio-root-korio'], this['kds-root-kds'], this['klock-root-klock'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$korma_root_korma, $module$kmem_root_kmem, $module$korio_root_korio, $module$kds_root_kds, $module$klock_root_klock, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Size = $module$korma_root_korma.com.soywiz.korma.geom.Size;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var toIntFloor = $module$kmem_root_kmem.com.soywiz.kmem.toIntFloor_yrwdxr$;
  var toIntCeil = $module$kmem_root_kmem.com.soywiz.kmem.toIntCeil_yrwdxr$;
  var clamp = $module$kmem_root_kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var invalidOp = $module$korio_root_korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Sizeable = $module$korma_root_korma.com.soywiz.korma.geom.Sizeable;
  var throwCCE = Kotlin.throwCCE;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var Math_0 = Math;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var divCeil = $module$kmem_root_kmem.com.soywiz.kmem.divCeil_dqglrj$;
  var Unit = Kotlin.kotlin.Unit;
  var toShort = Kotlin.toShort;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init;
  var wrapFunction = Kotlin.wrapFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var numberToInt = Kotlin.numberToInt;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var toByte = Kotlin.toByte;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RectangleInt = $module$korma_root_korma.com.soywiz.korma.geom.RectangleInt;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var arrayfill = $module$kmem_root_kmem.com.soywiz.kmem.arrayfill_7lcbvb$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var lang = $module$korio_root_korio.com.soywiz.korio.lang;
  var insert = $module$kmem_root_kmem.com.soywiz.kmem.insert_4684dr$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UByteArrayInt = $module$kmem_root_kmem.com.soywiz.kmem.UByteArrayInt;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var setTo = $module$korma_root_korma.com.soywiz.korma.geom.setTo_woi95f$;
  var SizeInt = $module$korma_root_korma.com.soywiz.korma.geom.SizeInt;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var getCyclic = $module$kds_root_kds.com.soywiz.kds.getCyclic_r20n03$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toBase64 = $module$korio_root_korio.com.soywiz.korio.util.encoding.toBase64_964n91$;
  var printStackTrace = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var get_length = $module$korio_root_korio.com.soywiz.korio.util.get_length_9tsm8a$;
  var clamp_0 = $module$kmem_root_kmem.com.soywiz.kmem.clamp_nig4hr$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var get_endExclusive = $module$korio_root_korio.com.soywiz.korio.util.get_endExclusive_9tsm8a$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Extra$PropertyThis = $module$kds_root_kds.com.soywiz.kds.Extra.PropertyThis;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var Any = Object;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var numberToDouble = Kotlin.numberToDouble;
  var rect = $module$korma_root_korma.com.soywiz.korma.geom.vector.rect_clsz36$;
  var sum_0 = Kotlin.kotlin.collections.sum_l63kqw$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var BinPacker = $module$korma_root_korma.com.soywiz.korma.geom.binpack.BinPacker;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var UByteArray_init = Kotlin.kotlin.UByteArray;
  var UByte_init = Kotlin.kotlin.UByte;
  var extract8 = $module$kmem_root_kmem.com.soywiz.kmem.extract8_dqglrj$;
  var extractScaledFF = $module$kmem_root_kmem.com.soywiz.kmem.extractScaledFF_e4yvb3$;
  var extractScaledFFDefault = $module$kmem_root_kmem.com.soywiz.kmem.extractScaledFFDefault_4684dr$;
  var insertScaledFF = $module$kmem_root_kmem.com.soywiz.kmem.insertScaledFF_4684dr$;
  var readU16LE = $module$kmem_root_kmem.com.soywiz.kmem.readU16LE_mrm5p$;
  var getCallableRef = Kotlin.getCallableRef;
  var readU16BE = $module$kmem_root_kmem.com.soywiz.kmem.readU16BE_mrm5p$;
  var readU24LE = $module$kmem_root_kmem.com.soywiz.kmem.readU24LE_mrm5p$;
  var readU24BE = $module$kmem_root_kmem.com.soywiz.kmem.readU24BE_mrm5p$;
  var readS32LE = $module$kmem_root_kmem.com.soywiz.kmem.readS32LE_mrm5p$;
  var readS32BE = $module$kmem_root_kmem.com.soywiz.kmem.readS32BE_mrm5p$;
  var write16LE = $module$kmem_root_kmem.com.soywiz.kmem.write16LE_ietg8x$;
  var write16BE = $module$kmem_root_kmem.com.soywiz.kmem.write16BE_ietg8x$;
  var write24LE = $module$kmem_root_kmem.com.soywiz.kmem.write24LE_ietg8x$;
  var write24BE = $module$kmem_root_kmem.com.soywiz.kmem.write24BE_ietg8x$;
  var write32LE = $module$kmem_root_kmem.com.soywiz.kmem.write32LE_ietg8x$;
  var write32BE = $module$kmem_root_kmem.com.soywiz.kmem.write32BE_ietg8x$;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var interpolate = $module$korma_root_korma.com.soywiz.korma.interpolation.interpolate_nig4hr$;
  var interpolate_0 = $module$korma_root_korma.com.soywiz.korma.interpolation.interpolate_i767ff$;
  var get_niceStr = $module$korio_root_korio.com.soywiz.korio.util.get_niceStr_yrwdxr$;
  var MutableInterpolable = $module$korma_root_korma.com.soywiz.korma.interpolation.MutableInterpolable;
  var Interpolable = $module$korma_root_korma.com.soywiz.korma.interpolation.Interpolable;
  var substr = $module$korio_root_korio.com.soywiz.korio.lang.substr_6ic1pp$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var substr_0 = $module$korio_root_korio.com.soywiz.korio.lang.substr_qgyqat$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var insert8 = $module$kmem_root_kmem.com.soywiz.kmem.insert8_e4yvb3$;
  var format = $module$korio_root_korio.com.soywiz.korio.lang.format_e33kwl$;
  var Comparable = Kotlin.kotlin.Comparable;
  var clamp01 = $module$kmem_root_kmem.com.soywiz.kmem.clamp01_yrwdxr$;
  var clamp01_0 = $module$kmem_root_kmem.com.soywiz.kmem.clamp01_81szk$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var GenericSubList = $module$kds_root_kds.com.soywiz.kds.GenericSubList;
  var contains = Kotlin.kotlin.collections.contains_c03ot6$;
  var indexOf = Kotlin.kotlin.collections.indexOf_c03ot6$;
  var lastIndexOf = Kotlin.kotlin.collections.lastIndexOf_c03ot6$;
  var GenericListIterator = $module$kds_root_kds.com.soywiz.kds.GenericListIterator;
  var List = Kotlin.kotlin.collections.List;
  var toChar = Kotlin.toChar;
  var get_niceStr_0 = $module$korio_root_korio.com.soywiz.korio.util.get_niceStr_81szk$;
  var Vector3D = $module$korma_root_korma.com.soywiz.korma.geom.Vector3D;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var Rectangle = $module$korma_root_korma.com.soywiz.korma.geom.Rectangle;
  var get_nextPowerOfTwo = $module$kmem_root_kmem.com.soywiz.kmem.get_nextPowerOfTwo_s8ev3n$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toIntMap = $module$kds_root_kds.com.soywiz.kds.toIntMap_hx7udi$;
  var IntMap_init = $module$kds_root_kds.com.soywiz.kds.IntMap_init_42wstk$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var unquote = $module$korio_root_korio.com.soywiz.korio.util.unquote_pdl1vz$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  var KDynamic = $module$korio_root_korio.com.soywiz.korio.dynamic.KDynamic;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Xml = $module$korio_root_korio.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var get_0 = $module$korio_root_korio.com.soywiz.korio.serialization.xml.get_h00kq4$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var primitiveArrayConcat = Kotlin.primitiveArrayConcat;
  var fromBase64 = $module$korio_root_korio.com.soywiz.korio.util.encoding.fromBase64_pdl1vz$;
  var ZLib = $module$korio_root_korio.com.soywiz.korio.compression.deflate.ZLib;
  var uncompress = $module$korio_root_korio.com.soywiz.korio.compression.uncompress_ms6xh0$;
  var klock = $module$klock_root_klock.com.soywiz.klock;
  var TimedResult_init = $module$klock_root_klock.com.soywiz.klock.TimedResult;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var Matrix = $module$korma_root_korma.com.soywiz.korma.geom.Matrix;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var BoundsBuilder = $module$korma_root_korma.com.soywiz.korma.geom.BoundsBuilder;
  var CopyOnWriteFrozenMap = $module$kds_root_kds.com.soywiz.kds.CopyOnWriteFrozenMap;
  var toIntRound = $module$kmem_root_kmem.com.soywiz.kmem.toIntRound_yrwdxr$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var readS16LE = $module$korio_root_korio.com.soywiz.korio.stream.readS16LE_p2awyq$;
  var sliceStart = $module$korio_root_korio.com.soywiz.korio.stream.sliceStart_gezhyr$;
  var readU16BE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readU16BE_p2awyq$;
  var readStringz = $module$korio_root_korio.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS32BE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readS32BE_p2awyq$;
  var sliceWithSize = $module$korio_root_korio.com.soywiz.korio.stream.sliceWithSize_acdave$;
  var sliceWithSize_0 = $module$korio_root_korio.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var readAll = $module$korio_root_korio.com.soywiz.korio.stream.readAll_ucmi9i$;
  var toString = $module$korio_root_korio.com.soywiz.korio.lang.toString_5kit73$;
  var readBytesExact = $module$korio_root_korio.com.soywiz.korio.stream.readBytesExact_xpzb7k$;
  var FastByteArrayInputStream = $module$korio_root_korio.com.soywiz.korio.stream.FastByteArrayInputStream;
  var get_hex = $module$korio_root_korio.com.soywiz.korio.util.encoding.get_hex_s8ev3n$;
  var readS64BE = $module$korio_root_korio.com.soywiz.korio.stream.readS64BE_p2awyq$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var readS16BE = $module$korio_root_korio.com.soywiz.korio.stream.readS16BE_p2awyq$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var readCharArrayBE = $module$korio_root_korio.com.soywiz.korio.stream.readCharArrayBE_xpzb7k$;
  var readShortArrayBE = $module$korio_root_korio.com.soywiz.korio.stream.readShortArrayBE_xpzb7k$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_c03ot6$;
  var L0 = Kotlin.Long.ZERO;
  var IntArrayList = $module$kds_root_kds.com.soywiz.kds.IntArrayList;
  var DoubleArrayList = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList;
  var readS8 = $module$korio_root_korio.com.soywiz.korio.stream.readS8_p2awyq$;
  var readU8 = $module$korio_root_korio.com.soywiz.korio.stream.readU8_p2awyq$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_tmsbgo$;
  var openSync = $module$korio_root_korio.com.soywiz.korio.stream.openSync_m1iwyb$;
  var extract16Signed = $module$kmem_root_kmem.com.soywiz.kmem.extract16Signed_dqglrj$;
  var get_baseName = $module$korio_root_korio.com.soywiz.korio.file.get_baseName_hsf53c$;
  var Array_0 = Array;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var readS32LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readS32LE_p2awyq$;
  var readBytes = $module$korio_root_korio.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var skip = $module$korio_root_korio.com.soywiz.korio.stream.skip_hsu5ns$;
  var write8 = $module$korio_root_korio.com.soywiz.korio.stream.write8_n5df9z$;
  var write32LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.write32LE_n5df9z$;
  var write16LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.write16LE_n5df9z$;
  var writeBytes = $module$korio_root_korio.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var readString = $module$korio_root_korio.com.soywiz.korio.stream.readString_6ey4ts$;
  var readStream = $module$korio_root_korio.com.soywiz.korio.stream.readStream_hsu5ns$;
  var readIntArrayLE = $module$korio_root_korio.com.soywiz.korio.stream.readIntArrayLE_xpzb7k$;
  var Extra$Property = $module$kds_root_kds.com.soywiz.kds.Extra.Property;
  var setExtra = $module$kds_root_kds.com.soywiz.kds.setExtra_46skc7$;
  var readU32LE = $module$kmem_root_kmem.com.soywiz.kmem.readU32LE_mrm5p$;
  var L7 = Kotlin.Long.fromInt(7);
  var PathInfo = $module$korio_root_korio.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_root_korio.com.soywiz.korio.file.get_extensionLC_a72sjq$;
  var readU8_0 = $module$kmem_root_kmem.com.soywiz.kmem.readU8_mrm5p$;
  var UByteArray_init_0 = Kotlin.kotlin.UByteArray_init_za3lpa$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var get_hex_0 = $module$korio_root_korio.com.soywiz.korio.util.encoding.get_hex_964n91$;
  var fill = Kotlin.kotlin.collections.fill_i88zna$;
  var L1 = Kotlin.Long.ONE;
  var L13 = Kotlin.Long.fromInt(13);
  var L2 = Kotlin.Long.fromInt(2);
  var get_uniVfs = $module$korio_root_korio.com.soywiz.korio.file.std.get_uniVfs_pdl1vz$;
  var readU16LE_0 = $module$korio_root_korio.com.soywiz.korio.stream.readU16LE_p2awyq$;
  var readU32BE = $module$korio_root_korio.com.soywiz.korio.stream.readU32BE_p2awyq$;
  var L2303741511 = new Kotlin.Long(-1991225785, 0);
  var MemorySyncStream = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var sliceArray = Kotlin.kotlin.collections.sliceArray_dww5cs$;
  var toByteArray = $module$korio_root_korio.com.soywiz.korio.stream.toByteArray_ucmi9i$;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var ByteArrayBuilder_init = $module$korio_root_korio.$$importsForInline$$['kmem-root-kmem'].com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var MemorySyncStream_0 = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStream_i9anm0$;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var toString_0 = Kotlin.toString;
  var toAsync = $module$korio_root_korio.com.soywiz.korio.stream.toAsync_ucmi9i$;
  var ZipVfs = $module$korio_root_korio.com.soywiz.korio.file.std.ZipVfs_7p732o$;
  var runBlockingNoSuspensions = $module$korio_root_korio.com.soywiz.korio.async.runBlockingNoSuspensions_g8ox3d$;
  var readAll_0 = $module$korio_root_korio.com.soywiz.korio.stream.readAll_yjldv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var write32BE_0 = $module$korio_root_korio.com.soywiz.korio.stream.write32BE_n5df9z$;
  var toByteArray_0 = $module$korio_root_korio.com.soywiz.korio.lang.toByteArray_7jlb4b$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var checksum = $module$korio_root_korio.com.soywiz.korio.util.checksum;
  var convertRangeClamped = $module$kmem_root_kmem.com.soywiz.kmem.convertRangeClamped_legt9$;
  var CompressionContext = $module$korio_root_korio.com.soywiz.korio.compression.CompressionContext;
  var compress = $module$korio_root_korio.com.soywiz.korio.compression.compress_t54tj5$;
  var write8_0 = $module$kmem_root_kmem.com.soywiz.kmem.write8_ietg8x$;
  var ByteArrayBuilder_init_0 = $module$kmem_root_kmem.com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var UByteArrayInt_0 = $module$kmem_root_kmem.com.soywiz.kmem.UByteArrayInt_za3lpa$;
  var readStream_0 = $module$korio_root_korio.com.soywiz.korio.stream.readStream_gezhyr$;
  var asByteArray = $module$kmem_root_kmem.com.soywiz.kmem.asByteArray_ngdjuy$;
  var get_eof = $module$korio_root_korio.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var extract = $module$kmem_root_kmem.com.soywiz.kmem.extract_e4yvb3$;
  var readAvailable = $module$korio_root_korio.com.soywiz.korio.stream.readAvailable_ucmi9i$;
  var openFastStream = $module$korio_root_korio.com.soywiz.korio.stream.openFastStream_mrm5p$;
  var plus_0 = Kotlin.kotlin.collections.plus_ws1dkn$;
  var minus = Kotlin.kotlin.collections.minus_ws1dkn$;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var format_0 = $module$klock_root_klock.com.soywiz.klock.format_x6wc0j$;
  var DateFormat = $module$klock_root_klock.com.soywiz.klock.DateFormat;
  var strokeToFill = $module$korma_root_korma.com.soywiz.korma.geom.vector.strokeToFill_yx328d$;
  var intArrayListOf = $module$kds_root_kds.com.soywiz.kds.intArrayListOf_pmhfmb$;
  var fill_0 = Kotlin.kotlin.collections.fill_nwy378$;
  var fill_1 = Kotlin.kotlin.collections.fill_tpuxuu$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var get_float = $module$korma_root_korma.com.soywiz.korma.geom.get_float_1odyom$;
  var Winding = $module$korma_root_korma.com.soywiz.korma.geom.vector.Winding;
  var VectorPath = $module$korma_root_korma.com.soywiz.korma.geom.vector.VectorPath;
  var StrokeToFill = $module$korma_root_korma.com.soywiz.korma.geom.vector.StrokeToFill;
  var LineCap = $module$korma_root_korma.com.soywiz.korma.geom.vector.LineCap;
  var LineJoin = $module$korma_root_korma.com.soywiz.korma.geom.vector.LineJoin;
  var get_radians = $module$korma_root_korma.com.soywiz.korma.geom.get_radians_yrwdxr$;
  var get_degrees = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_yrwdxr$;
  var TGenStack = $module$kds_root_kds.com.soywiz.kds.TGenStack;
  var Disposable = $module$korio_root_korio.com.soywiz.korio.lang.Disposable;
  var VectorBuilder = $module$korma_root_korma.com.soywiz.korma.geom.vector.VectorBuilder;
  var IntArrayList_init = $module$kds_root_kds.com.soywiz.kds.IntArrayList_init_38vc8i$;
  var DoubleArrayList_init = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList_init_avch8c$;
  var Xml_0 = $module$korio_root_korio.com.soywiz.korio.serialization.xml.Xml;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var toStringDecimal = $module$korio_root_korio.com.soywiz.korio.util.toStringDecimal_9rbwic$;
  var plus_1 = Kotlin.kotlin.collections.plus_iwxh38$;
  var Bezier = $module$korma_root_korma.com.soywiz.korma.geom.bezier.Bezier;
  var Bezier$Temp = $module$korma_root_korma.com.soywiz.korma.geom.bezier.Bezier.Temp;
  var add = $module$korma_root_korma.com.soywiz.korma.geom.vector.add_1ik72i$;
  var add_0 = $module$korma_root_korma.com.soywiz.korma.geom.add_wm3ouy$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var isEmpty = $module$korma_root_korma.com.soywiz.korma.geom.vector.isEmpty_6jcdf2$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var max = Kotlin.kotlin.collections.max_l63kqw$;
  var max_0 = Kotlin.kotlin.collections.max_exjks8$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Pair = Kotlin.kotlin.Pair;
  var trim_0 = Kotlin.kotlin.text.trim_wqw3xr$;
  var get_allChildren = $module$korio_root_korio.com.soywiz.korio.serialization.xml.get_allChildren_ibjdnu$;
  var get_isComment = $module$korio_root_korio.com.soywiz.korio.serialization.xml.get_isComment_byavcz$;
  var roundRect = $module$korma_root_korma.com.soywiz.korma.geom.vector.roundRect_eslsqu$;
  var circle = $module$korma_root_korma.com.soywiz.korma.geom.vector.circle_m5r0a8$;
  var StrReader = $module$korio_root_korio.com.soywiz.korio.util.StrReader;
  var get_isNumeric = $module$korio_root_korio.com.soywiz.korio.util.get_isNumeric_myv2d0$;
  var ListReader = $module$kds_root_kds.com.soywiz.kds.ListReader;
  var math = Kotlin.kotlin.math;
  var isDigit = $module$korio_root_korio.com.soywiz.korio.util.isDigit_myv2d0$;
  var isLetterOrUnderscore = $module$korio_root_korio.com.soywiz.korio.util.isLetterOrUnderscore_myv2d0$;
  var expect = $module$kds_root_kds.com.soywiz.kds.expect_2mact2$;
  var rMoveTo = $module$korma_root_korma.com.soywiz.korma.geom.vector.rMoveTo_b4nog2$;
  var rLineTo = $module$korma_root_korma.com.soywiz.korma.geom.vector.rLineTo_b4nog2$;
  var rLineToH = $module$korma_root_korma.com.soywiz.korma.geom.vector.rLineToH_ww6st0$;
  var lineToH = $module$korma_root_korma.com.soywiz.korma.geom.vector.lineToH_ww6st0$;
  var rLineToV = $module$korma_root_korma.com.soywiz.korma.geom.vector.rLineToV_ww6st0$;
  var lineToV = $module$korma_root_korma.com.soywiz.korma.geom.vector.lineToV_ww6st0$;
  var get_degrees_0 = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_s8ev3n$;
  var div = $module$korma_root_korma.com.soywiz.korma.geom.div_e486mh$;
  var Angle = $module$korma_root_korma.com.soywiz.korma.geom.Angle;
  var unaryMinus = $module$korma_root_korma.com.soywiz.korma.geom.unaryMinus_72g52s$;
  var RastScale = $module$korma_root_korma.com.soywiz.korma.geom.vector.RastScale;
  var PolygonScanline = $module$korma_root_korma.com.soywiz.korma.geom.vector.PolygonScanline;
  var IntSegmentSet = $module$korma_root_korma.com.soywiz.korma.segment.IntSegmentSet;
  var Matrix$Type = $module$korma_root_korma.com.soywiz.korma.geom.Matrix.Type;
  var transformed = $module$korma_root_korma.com.soywiz.korma.geom.vector.transformed_cwi1wc$;
  var util = $module$korio_root_korio.com.soywiz.korio.util;
  var asInt32Buffer = $module$kmem_root_kmem.com.soywiz.kmem.asInt32Buffer_qfdq9h$;
  var LocalVfs = $module$korio_root_korio.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio_root_korio.com.soywiz.korio.file.std.UrlVfs;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  BitmapIndexed.prototype = Object.create(Bitmap.prototype);
  BitmapIndexed.prototype.constructor = BitmapIndexed;
  Bitmap1.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap1.prototype.constructor = Bitmap1;
  Bitmap16.prototype = Object.create(Bitmap.prototype);
  Bitmap16.prototype.constructor = Bitmap16;
  Bitmap2.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap2.prototype.constructor = Bitmap2;
  Bitmap32.prototype = Object.create(Bitmap.prototype);
  Bitmap32.prototype.constructor = Bitmap32;
  Bitmap4.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap4.prototype.constructor = Bitmap4;
  Bitmap8.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap8.prototype.constructor = Bitmap8;
  BitmapChannel.prototype = Object.create(Enum.prototype);
  BitmapChannel.prototype.constructor = BitmapChannel;
  NativeImage.prototype = Object.create(Bitmap.prototype);
  NativeImage.prototype.constructor = NativeImage;
  CMYK$Companion.prototype = Object.create(ColorFormat32.prototype);
  CMYK$Companion.prototype.constructor = CMYK$Companion;
  Colors$Default.prototype = Object.create(Colors$WithDefault.prototype);
  Colors$Default.prototype.constructor = Colors$Default;
  RGB.prototype = Object.create(ColorFormat24.prototype);
  RGB.prototype.constructor = RGB;
  RGB$Companion.prototype = Object.create(RGB.prototype);
  RGB$Companion.prototype.constructor = RGB$Companion;
  BGR.prototype = Object.create(RGB.prototype);
  BGR.prototype.constructor = BGR;
  RGBA$Companion.prototype = Object.create(ColorFormat32.prototype);
  RGBA$Companion.prototype.constructor = RGBA$Companion;
  YCbCr$Companion.prototype = Object.create(ColorFormat32.prototype);
  YCbCr$Companion.prototype.constructor = YCbCr$Companion;
  YUVA$Companion.prototype = Object.create(ColorFormat32.prototype);
  YUVA$Companion.prototype.constructor = YUVA$Companion;
  drawText$ObjectLiteral.prototype = Object.create(TextRendererActions.prototype);
  drawText$ObjectLiteral.prototype.constructor = drawText$ObjectLiteral;
  BoundBuilderTextRendererActions.prototype = Object.create(TextRendererActions.prototype);
  BoundBuilderTextRendererActions.prototype.constructor = BoundBuilderTextRendererActions;
  FontOrigin.prototype = Object.create(Enum.prototype);
  FontOrigin.prototype.constructor = FontOrigin;
  SystemFontRegistry.prototype = Object.create(DefaultFontRegistry.prototype);
  SystemFontRegistry.prototype.constructor = SystemFontRegistry;
  FallbackNativeSystemFontProvider.prototype = Object.create(NativeSystemFontProvider.prototype);
  FallbackNativeSystemFontProvider.prototype.constructor = FallbackNativeSystemFontProvider;
  TtfFont$NameIds.prototype = Object.create(Enum.prototype);
  TtfFont$NameIds.prototype.constructor = TtfFont$NameIds;
  TtfFont$CompositeGlyph.prototype = Object.create(TtfFont$Glyph.prototype);
  TtfFont$CompositeGlyph.prototype.constructor = TtfFont$CompositeGlyph;
  TtfFont$SimpleGlyph.prototype = Object.create(TtfFont$Glyph.prototype);
  TtfFont$SimpleGlyph.prototype.constructor = TtfFont$SimpleGlyph;
  BMP$BmImageInfo.prototype = Object.create(ImageInfo.prototype);
  BMP$BmImageInfo.prototype.constructor = BMP$BmImageInfo;
  BMP.prototype = Object.create(ImageFormat.prototype);
  BMP.prototype.constructor = BMP;
  DDS.prototype = Object.create(ImageFormat.prototype);
  DDS.prototype.constructor = DDS;
  DXT.prototype = Object.create(ImageFormat.prototype);
  DXT.prototype.constructor = DXT;
  DXT1Base.prototype = Object.create(DXT.prototype);
  DXT1Base.prototype.constructor = DXT1Base;
  DXT1.prototype = Object.create(DXT1Base.prototype);
  DXT1.prototype.constructor = DXT1;
  DXT2_3.prototype = Object.create(DXT.prototype);
  DXT2_3.prototype.constructor = DXT2_3;
  DXT2.prototype = Object.create(DXT2_3.prototype);
  DXT2.prototype.constructor = DXT2;
  DXT3.prototype = Object.create(DXT2_3.prototype);
  DXT3.prototype.constructor = DXT3;
  DXT4_5.prototype = Object.create(DXT.prototype);
  DXT4_5.prototype.constructor = DXT4_5;
  DXT4.prototype = Object.create(DXT4_5.prototype);
  DXT4.prototype.constructor = DXT4;
  DXT5.prototype = Object.create(DXT4_5.prototype);
  DXT5.prototype.constructor = DXT5;
  GIF.prototype = Object.create(ImageFormat.prototype);
  GIF.prototype.constructor = GIF;
  ICO.prototype = Object.create(ImageFormat.prototype);
  ICO.prototype.constructor = ICO;
  ImageFormats.prototype = Object.create(ImageFormat.prototype);
  ImageFormats.prototype.constructor = ImageFormats;
  KRA.prototype = Object.create(ImageFormat.prototype);
  KRA.prototype.constructor = KRA;
  BaseNativeImageFormatProvider.prototype = Object.create(NativeImageFormatProvider.prototype);
  BaseNativeImageFormatProvider.prototype.constructor = BaseNativeImageFormatProvider;
  BitmapNativeImage.prototype = Object.create(NativeImage.prototype);
  BitmapNativeImage.prototype.constructor = BitmapNativeImage;
  PNG$Colorspace.prototype = Object.create(Enum.prototype);
  PNG$Colorspace.prototype.constructor = PNG$Colorspace;
  PNG.prototype = Object.create(ImageFormat.prototype);
  PNG.prototype.constructor = PNG;
  PSD$PsdImageInfo.prototype = Object.create(ImageInfo.prototype);
  PSD$PsdImageInfo.prototype.constructor = PSD$PsdImageInfo;
  PSD.prototype = Object.create(ImageFormat.prototype);
  PSD.prototype.constructor = PSD;
  RegisteredImageFormats.prototype = Object.create(ImageFormat.prototype);
  RegisteredImageFormats.prototype.constructor = RegisteredImageFormats;
  SVG.prototype = Object.create(ImageFormat.prototype);
  SVG.prototype.constructor = SVG;
  TGA.prototype = Object.create(ImageFormat.prototype);
  TGA.prototype.constructor = TGA;
  QR$WifiKind.prototype = Object.create(Enum.prototype);
  QR$WifiKind.prototype.constructor = QR$WifiKind;
  QR$Companion.prototype = Object.create(QR.prototype);
  QR$Companion.prototype.constructor = QR$Companion;
  QRErrorCorrectLevel.prototype = Object.create(Enum.prototype);
  QRErrorCorrectLevel.prototype.constructor = QRErrorCorrectLevel;
  Bitmap32Context2d.prototype = Object.create(Renderer.prototype);
  Bitmap32Context2d.prototype.constructor = Bitmap32Context2d;
  CompositeMode.prototype = Object.create(Enum.prototype);
  CompositeMode.prototype.constructor = CompositeMode;
  BlendMode.prototype = Object.create(Enum.prototype);
  BlendMode.prototype.constructor = BlendMode;
  Context2d$ScaledRenderer.prototype = Object.create(Renderer.prototype);
  Context2d$ScaledRenderer.prototype.constructor = Context2d$ScaledRenderer;
  CycleMethod.prototype = Object.create(Enum.prototype);
  CycleMethod.prototype.constructor = CycleMethod;
  GraphicsPath.prototype = Object.create(VectorPath.prototype);
  GraphicsPath.prototype.constructor = GraphicsPath;
  LineScaleMode.prototype = Object.create(Enum.prototype);
  LineScaleMode.prototype.constructor = LineScaleMode;
  ShapeBuilder.prototype = Object.create(Context2d.prototype);
  ShapeBuilder.prototype.constructor = ShapeBuilder;
  ShapeRasterizerMethod.prototype = Object.create(Enum.prototype);
  ShapeRasterizerMethod.prototype.constructor = ShapeRasterizerMethod;
  ChartBars$Fit.prototype = Object.create(Enum.prototype);
  ChartBars$Fit.prototype.constructor = ChartBars$Fit;
  ChartBars.prototype = Object.create(Chart.prototype);
  ChartBars.prototype.constructor = ChartBars;
  NoneFiller.prototype = Object.create(BaseFiller.prototype);
  NoneFiller.prototype.constructor = NoneFiller;
  ColorFiller.prototype = Object.create(BaseFiller.prototype);
  ColorFiller.prototype.constructor = ColorFiller;
  BitmapFiller.prototype = Object.create(BaseFiller.prototype);
  BitmapFiller.prototype.constructor = BitmapFiller;
  GradientFiller.prototype = Object.create(BaseFiller.prototype);
  GradientFiller.prototype.constructor = GradientFiller;
  SVG$GradientUnits.prototype = Object.create(Enum.prototype);
  SVG$GradientUnits.prototype.constructor = SVG$GradientUnits;
  DefaultPaint.prototype = Object.create(ColorPaint.prototype);
  DefaultPaint.prototype.constructor = DefaultPaint;
  GradientKind.prototype = Object.create(Enum.prototype);
  GradientKind.prototype.constructor = GradientKind;
  GradientUnits.prototype = Object.create(Enum.prototype);
  GradientUnits.prototype.constructor = GradientUnits;
  GradientInterpolationMethod.prototype = Object.create(Enum.prototype);
  GradientInterpolationMethod.prototype.constructor = GradientInterpolationMethod;
  Rasterizer.prototype = Object.create(RastScale.prototype);
  Rasterizer.prototype.constructor = Rasterizer;
  DummyRenderer.prototype = Object.create(Renderer.prototype);
  DummyRenderer.prototype.constructor = DummyRenderer;
  DummyRenderer$Companion.prototype = Object.create(DummyRenderer.prototype);
  DummyRenderer$Companion.prototype.constructor = DummyRenderer$Companion;
  BufferedRenderer.prototype = Object.create(Renderer.prototype);
  BufferedRenderer.prototype.constructor = BufferedRenderer;
  NodeJsNativeImageFormatProvider.prototype = Object.create(BaseNativeImageFormatProvider.prototype);
  NodeJsNativeImageFormatProvider.prototype.constructor = NodeJsNativeImageFormatProvider;
  HtmlNativeImage.prototype = Object.create(NativeImage.prototype);
  HtmlNativeImage.prototype.constructor = HtmlNativeImage;
  HtmlNativeImageFormatProvider.prototype = Object.create(NativeImageFormatProvider.prototype);
  HtmlNativeImageFormatProvider.prototype.constructor = HtmlNativeImageFormatProvider;
  CanvasContext2dRenderer.prototype = Object.create(Renderer.prototype);
  CanvasContext2dRenderer.prototype.constructor = CanvasContext2dRenderer;
  function Korim() {
    Korim_instance = this;
    this.VERSION = KORIM_VERSION;
  }
  Korim.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korim',
    interfaces: []
  };
  var Korim_instance = null;
  function Korim_getInstance() {
    if (Korim_instance === null) {
      new Korim();
    }return Korim_instance;
  }
  function KorimExperimental() {
  }
  KorimExperimental.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorimExperimental',
    interfaces: [Annotation]
  };
  function KorimInternal() {
  }
  KorimInternal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorimInternal',
    interfaces: [Annotation]
  };
  function KorimInternalObject() {
    KorimInternalObject_instance = this;
  }
  KorimInternalObject.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KorimInternalObject',
    interfaces: []
  };
  var KorimInternalObject_instance = null;
  function KorimInternalObject_getInstance() {
    if (KorimInternalObject_instance === null) {
      new KorimInternalObject();
    }return KorimInternalObject_instance;
  }
  function Bitmap(width, height, bpp, premultiplied, backingArray) {
    this.width = width;
    this.height = height;
    this.bpp = bpp;
    this.premultiplied = premultiplied;
    this.backingArray = backingArray;
    this.$delegate_uler2c$_0 = new Extra$Mixin();
    this.tempRgba_9zbzts$_0 = lazy(Bitmap$tempRgba$lambda(this));
    this.contentVersion = 0;
    this.texture = null;
    this.mipmaps = false;
  }
  Object.defineProperty(Bitmap.prototype, 'tempRgba', {
    get: function () {
      return this.tempRgba_9zbzts$_0.value;
    }
  });
  Object.defineProperty(Bitmap.prototype, 'stride', {
    get: function () {
      return Kotlin.imul(this.width, this.bpp) / 8 | 0;
    }
  });
  Object.defineProperty(Bitmap.prototype, 'area', {
    get: function () {
      return Kotlin.imul(this.width, this.height);
    }
  });
  Bitmap.prototype.index_vux9f0$ = function (x, y) {
    return Kotlin.imul(y, this.width) + x | 0;
  };
  Object.defineProperty(Bitmap.prototype, 'size', {
    get: function () {
      return Size.Companion.invoke_vux9f0$(this.width, this.height);
    }
  });
  Bitmap.prototype.lock = function () {
  };
  Bitmap.prototype.unlock_2epnwg$$default = function (rect) {
    var tmp$;
    return tmp$ = this.contentVersion, this.contentVersion = tmp$ + 1 | 0, tmp$;
  };
  Bitmap.prototype.unlock_2epnwg$ = function (rect, callback$default) {
    if (rect === void 0)
      rect = null;
    return callback$default ? callback$default(rect) : this.unlock_2epnwg$$default(rect);
  };
  Bitmap.prototype.lock_yp0ir1$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap.lock_yp0ir1$', function (rect, block) {
    if (rect === void 0)
      rect = null;
    this.lock();
    try {
      block();
    }finally {
      this.unlock_2epnwg$(rect);
    }
  });
  Bitmap.prototype.readPixelsUnsafe_zddtuu$$default = function (x, y, width, height, out, offset) {
    var tmp$;
    var n = offset;
    for (var y0 = 0; y0 < height; y0++) {
      for (var x0 = 0; x0 < width; x0++) {
        out.set_vlvk8p$((tmp$ = n, n = tmp$ + 1 | 0, tmp$), this.getRgba_vux9f0$(x0 + x | 0, y0 + y | 0));
      }
    }
  };
  Bitmap.prototype.readPixelsUnsafe_zddtuu$ = function (x, y, width, height, out, offset, callback$default) {
    if (offset === void 0)
      offset = 0;
    callback$default ? callback$default(x, y, width, height, out, offset) : this.readPixelsUnsafe_zddtuu$$default(x, y, width, height, out, offset);
  };
  Bitmap.prototype.writePixelsUnsafe_zddtuu$$default = function (x, y, width, height, out, offset) {
    var tmp$;
    var n = offset;
    for (var y0 = 0; y0 < height; y0++) {
      for (var x0 = 0; x0 < width; x0++) {
        this.setRgba_ci55m7$(x0 + x | 0, y0 + y | 0, out.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
      }
    }
  };
  Bitmap.prototype.writePixelsUnsafe_zddtuu$ = function (x, y, width, height, out, offset, callback$default) {
    if (offset === void 0)
      offset = 0;
    callback$default ? callback$default(x, y, width, height, out, offset) : this.writePixelsUnsafe_zddtuu$$default(x, y, width, height, out, offset);
  };
  Bitmap.prototype.setRgba_ci55m7$ = function (x, y, v) {
    throw new NotImplementedError_init();
  };
  Bitmap.prototype.getRgba_vux9f0$ = function (x, y) {
    return Colors_getInstance().TRANSPARENT_BLACK;
  };
  Bitmap.prototype.setInt_qt1dr2$ = function (x, y, color) {
  };
  Bitmap.prototype.getInt_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.getRgbaClamped_vux9f0$ = function (x, y) {
    return this.inBounds_vux9f0$(x, y) ? this.getRgba_vux9f0$(x, y) : Colors_getInstance().TRANSPARENT_BLACK;
  };
  Bitmap.prototype.getRgbaSampled_lu1900$ = function (x, y) {
    if (x < 0.0 || x >= this.width || y < 0.0 || y >= this.height)
      return Colors_getInstance().TRANSPARENT_BLACK;
    var x0 = toIntFloor(x);
    var x1 = toIntCeil(x);
    var y0 = toIntFloor(y);
    var y1 = toIntCeil(y);
    var xratio = x % 1;
    var yratio = y % 1;
    var c00 = this.getRgbaClamped_vux9f0$(x0, y0);
    var c10 = this.inBounds_vux9f0$(x1, y0) ? this.getRgbaClamped_vux9f0$(x1, y0) : c00;
    var c01 = this.inBounds_vux9f0$(x1, y1) ? this.getRgbaClamped_vux9f0$(x0, y1) : c00;
    var c11 = this.inBounds_vux9f0$(x1, y1) ? this.getRgbaClamped_vux9f0$(x1, y1) : c01;
    var c1 = RGBA$Companion_getInstance().mixRgba_utyrs$(c00, c10, xratio);
    var c2 = RGBA$Companion_getInstance().mixRgba_utyrs$(c01, c11, xratio);
    return RGBA$Companion_getInstance().mixRgba_utyrs$(c1, c2, yratio);
  };
  Bitmap.prototype.getRgbaSampled_mm2q0a$ = function (x, y, count, row) {
    for (var n = 0; n < count; n++) {
      row.set_vlvk8p$(n, this.getRgbaSampled_lu1900$(x + n, y));
    }
  };
  Bitmap.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var src = this;
    var srcX0 = src.clampWidth_za3lpa$(srcX);
    var srcX1 = src.clampWidth_za3lpa$(srcX + width | 0);
    var srcY0 = src.clampHeight_za3lpa$(srcY);
    var srcY1 = src.clampHeight_za3lpa$(srcY + height | 0);
    var dstX0 = dst.clampWidth_za3lpa$(dstX);
    var dstX1 = dst.clampWidth_za3lpa$(dstX + width | 0);
    var dstY0 = dst.clampHeight_za3lpa$(dstY);
    var dstY1 = dst.clampHeight_za3lpa$(dstY + height | 0);
    var srcX_0 = srcX0;
    var srcY_0 = srcY0;
    var dstX_0 = dstX0;
    var dstY_0 = dstY0;
    var a = srcX1 - srcX0 | 0;
    var b = dstX1 - dstX0 | 0;
    var width_0 = Math_0.min(a, b);
    var a_0 = srcY1 - srcY0 | 0;
    var b_0 = dstY1 - dstY0 | 0;
    var height_0 = Math_0.min(a_0, b_0);
    this.copyUnchecked_akhah0$(srcX_0, srcY_0, dst, dstX_0, dstY_0, width_0, height_0);
  };
  Bitmap.prototype.copyUnchecked_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    for (var y = 0; y < height; y++) {
      this.readPixelsUnsafe_zddtuu$(srcX, srcY + y | 0, width, 1, this.tempRgba, 0);
      dst.writePixelsUnsafe_zddtuu$(dstX, dstY + y | 0, width, 1, this.tempRgba, 0);
    }
  };
  Bitmap.prototype.inBoundsX_za3lpa$ = function (x) {
    return x >= 0 && x < this.width;
  };
  Bitmap.prototype.inBoundsY_za3lpa$ = function (y) {
    return y >= 0 && y < this.height;
  };
  Bitmap.prototype.inBounds_vux9f0$ = function (x, y) {
    return this.inBoundsX_za3lpa$(x) && this.inBoundsY_za3lpa$(y);
  };
  Bitmap.prototype.clampX_za3lpa$ = function (x) {
    return clamp(x, 0, this.width - 1 | 0);
  };
  Bitmap.prototype.clampY_za3lpa$ = function (y) {
    return clamp(y, 0, this.height - 1 | 0);
  };
  Bitmap.prototype.clampWidth_za3lpa$ = function (x) {
    return clamp(x, 0, this.width);
  };
  Bitmap.prototype.clampHeight_za3lpa$ = function (y) {
    return clamp(y, 0, this.height);
  };
  Bitmap.prototype.flipY = function () {
    var tmp$;
    tmp$ = this.height / 2 | 0;
    for (var y = 0; y < tmp$; y++)
      this.swapRows_vux9f0$(y, this.height - y - 1 | 0);
    return this;
  };
  Bitmap.prototype.flipX = function () {
    var tmp$;
    tmp$ = this.width / 2 | 0;
    for (var x = 0; x < tmp$; x++)
      this.swapColumns_vux9f0$(x, this.width - x - 1 | 0);
    return this;
  };
  Bitmap.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var tmp$;
    tmp$ = this.width;
    for (var x = 0; x < tmp$; x++) {
      var c0 = this.getInt_vux9f0$(x, y0);
      var c1 = this.getInt_vux9f0$(x, y1);
      this.setInt_qt1dr2$(x, y0, c1);
      this.setInt_qt1dr2$(x, y1, c0);
    }
  };
  Bitmap.prototype.swapColumns_vux9f0$ = function (x0, x1) {
    var tmp$;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      var c0 = this.getInt_vux9f0$(x0, y);
      var c1 = this.getInt_vux9f0$(x1, y);
      this.setInt_qt1dr2$(x0, y, c1);
      this.setInt_qt1dr2$(x1, y, c0);
    }
  };
  Bitmap.prototype.forEach_50fifn$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap.forEach_50fifn$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        callback((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), x, y);
      }
    }
  });
  Bitmap.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    throw UnsupportedOperationException_init('Not implemented context2d on Bitmap, please use NativeImage or Bitmap32 instead');
  };
  Bitmap.prototype.getContext2d_6taknv$ = function (antialiasing, callback$default) {
    if (antialiasing === void 0)
      antialiasing = true;
    return callback$default ? callback$default(antialiasing) : this.getContext2d_6taknv$$default(antialiasing);
  };
  Bitmap.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return invalidOp('Unsupported createWithThisFormat (' + this + ')');
  };
  Bitmap.prototype.toBMP32 = function () {
    var $receiver = new Bitmap32(this.width, this.height, void 0, this.premultiplied);
    this.readPixelsUnsafe_zddtuu$(0, 0, this.width, this.height, $receiver.data, 0);
    return $receiver;
  };
  Bitmap.prototype.toBMP32IfRequired = function () {
    return Kotlin.isType(this, Bitmap32) ? this : this.toBMP32();
  };
  Bitmap.prototype.contentEquals_uler2c$ = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.width !== other.width)
      return false;
    if (this.height !== other.height)
      return false;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        if (!((tmp$_1 = this.getRgba_vux9f0$(x, y)) != null ? tmp$_1.equals(other.getRgba_vux9f0$(x, y)) : null))
          return false;
      }
    }
    return true;
  };
  Bitmap.prototype.clone = function () {
    var out = this.createWithThisFormat_vux9f0$(this.width, this.height);
    this.copyUnchecked_akhah0$(0, 0, out, 0, 0, this.width, this.height);
    return out;
  };
  Object.defineProperty(Bitmap.prototype, 'extra', {
    get: function () {
      return this.$delegate_uler2c$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_uler2c$_0.extra = tmp$;
    }
  });
  function Bitmap$tempRgba$lambda(this$Bitmap) {
    return function () {
      return RgbaArray$Companion_getInstance().invoke_za3lpa$(this$Bitmap.width * 2 | 0);
    };
  }
  Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: [Extra, Sizeable]
  };
  function createWithThisFormatTyped($receiver, width, height) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.createWithThisFormat_vux9f0$(width, height), Bitmap) ? tmp$ : throwCCE();
  }
  function extract_0($receiver, x, y, width, height) {
    var out = createWithThisFormatTyped($receiver, width, height);
    $receiver.copy_akhah0$(x, y, out, 0, 0, width, height);
    return out;
  }
  var context2d = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.context2d_rr3dot$', function ($receiver, antialiased, callback) {
    if (antialiased === void 0)
      antialiased = true;
    $receiver.lock();
    try {
      var ctx = $receiver.getContext2d_6taknv$(antialiased);
      try {
        callback(ctx);
      }finally {
        ctx.dispose();
      }
    }finally {
      $receiver.unlock_2epnwg$(null);
    }
    return $receiver;
  });
  function checkMatchDimensions($receiver, other) {
    if (!($receiver.width === other.width && $receiver.height === other.height)) {
      var message = "Bitmap doesn't have the same dimensions (" + $receiver.width + 'x' + $receiver.height + ') != (' + other.width + 'x' + other.height + ')';
      throw IllegalStateException_init(message.toString());
    }return other;
  }
  function mipmaps($receiver, enable) {
    if (enable === void 0)
      enable = true;
    $receiver.mipmaps = enable;
    return $receiver;
  }
  function Bitmap1(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(divCeil(Kotlin.imul(width, height), 8));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(2);
    BitmapIndexed.call(this, 1, width, height, data, palette);
  }
  Bitmap1.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap1(width, height, void 0, this.palette);
  };
  Bitmap1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap1',
    interfaces: [BitmapIndexed]
  };
  var arraycopy$lambda = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Bitmap16(width, height, data, format, premultiplied) {
    if (data === void 0)
      data = new Int16Array(Kotlin.imul(width, height));
    if (format === void 0)
      format = RGBA_4444_getInstance();
    if (premultiplied === void 0)
      premultiplied = false;
    Bitmap.call(this, width, height, 16, premultiplied, data);
    this.data = data;
    this.format = format;
    if (!(this.data.length >= Kotlin.imul(width, height)))
      throw AssertionError_init();
  }
  Bitmap16.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap16(width, height, void 0, this.format, this.premultiplied);
  };
  Bitmap16.prototype.clone = function () {
    return new Bitmap16(this.width, this.height, this.data.slice(), this.format, this.premultiplied);
  };
  Bitmap16.prototype.set_qt1dr2$ = function (x, y, color) {
    this.setInt_qt1dr2$(x, y, color);
  };
  Bitmap16.prototype.get_vux9f0$ = function (x, y) {
    return this.getInt_vux9f0$(x, y);
  };
  Bitmap16.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.data[this.index_vux9f0$(x, y)] = toShort(color);
  };
  Bitmap16.prototype.getInt_vux9f0$ = function (x, y) {
    return this.data[this.index_vux9f0$(x, y)] & 65535;
  };
  Bitmap16.prototype.setRgba_ci55m7$ = function (x, y, v) {
    this.setInt_qt1dr2$(x, y, packRGBA(this.format, v));
  };
  Bitmap16.prototype.getRgba_vux9f0$ = function (x, y) {
    return unpackToRGBA(this.format, this.data[this.index_vux9f0$(x, y)]);
  };
  Bitmap16.prototype.copyUnchecked_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    if (!Kotlin.isType(dst, Bitmap16))
      return Bitmap.prototype.copyUnchecked_akhah0$.call(this, srcX, srcY, dst, dstX, dstY, width, height);
    var src = this;
    var srcArray = src.data;
    var dstArray = dst.data;
    for (var y = 0; y < height; y++) {
      var srcPos = src.index_vux9f0$(srcX, srcY + y | 0);
      arrayCopy(srcArray, dstArray, dst.index_vux9f0$(dstX, dstY + y | 0), srcPos, srcPos + width | 0);
    }
  };
  Bitmap16.prototype.toString = function () {
    return 'Bitmap16(' + this.width + ', ' + this.height + ', format=' + this.format + ')';
  };
  Bitmap16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap16',
    interfaces: [Bitmap]
  };
  function Bitmap2(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(divCeil(Kotlin.imul(width, height), 4));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(4);
    BitmapIndexed.call(this, 2, width, height, data, palette);
  }
  Bitmap2.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap2(width, height, void 0, this.palette);
  };
  Bitmap2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap2',
    interfaces: [BitmapIndexed]
  };
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Bitmap32(width, height, data, premultiplied) {
    Bitmap32$Companion_getInstance();
    if (data === void 0)
      data = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(width, height));
    if (premultiplied === void 0)
      premultiplied = false;
    Bitmap.call(this, width, height, 32, premultiplied, data);
    this.data = data;
    this.dataPremult = new RgbaPremultipliedArray(this.data.ints);
    if (this.data.size < Kotlin.imul(width, height))
      throw RuntimeException_init('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.size + '), area=' + Kotlin.imul(width, height));
    this.temp_0 = RgbaArray$Companion_getInstance().invoke_za3lpa$(Math_0.max(width, height));
    this.bounds = RectangleInt.Companion.invoke_tjonv8$(0, 0, width, height);
  }
  Bitmap32.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap32(width, height, void 0, this.premultiplied);
  };
  Bitmap32.prototype.copyTo_59u9qz$ = function (other) {
    var $receiver = checkMatchDimensions(this, other);
    arraycopy(this.data, 0, other.data, 0, this.data.size);
    return $receiver;
  };
  Bitmap32.prototype.copyUnchecked_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    if (!Kotlin.isType(dst, Bitmap32))
      return Bitmap.prototype.copyUnchecked_akhah0$.call(this, srcX, srcY, dst, dstX, dstY, width, height);
    var src = this;
    var srcArray = src.data;
    var dstArray = dst.data;
    for (var y = 0; y < height; y++) {
      var src_0 = srcArray.ints;
      var srcPos = src.index_vux9f0$(srcX, srcY + y | 0);
      arrayCopy(src_0, dstArray.ints, dst.index_vux9f0$(dstX, dstY + y | 0), srcPos, srcPos + width | 0);
    }
  };
  Bitmap32.prototype.set_ci55m7$ = function (x, y, color) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), color);
  };
  Bitmap32.prototype.get_vux9f0$ = function (x, y) {
    return this.data.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap32.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), new RGBA(color));
  };
  Bitmap32.prototype.getInt_vux9f0$ = function (x, y) {
    return this.data.ints[this.index_vux9f0$(x, y)];
  };
  Bitmap32.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.data.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap32.prototype.setRgba_ci55m7$ = function (x, y, v) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), v);
  };
  Bitmap32.prototype.setRow_aio0fn$ = function (y, row) {
    arrayCopy(row, this.data.ints, this.index_vux9f0$(0, y), 0, 0 + this.width | 0);
  };
  Bitmap32.prototype._drawUnchecked_dd24ng$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var dstData = dst.data;
    var srcData = src.data;
    var dstDataPremult = dst.dataPremult;
    var srcDataPremult = src.dataPremult;
    var dstPremultiplied = this.premultiplied;
    var srcPremultiplied = src.premultiplied;
    for (var y = 0; y < height; y++) {
      var dstOffset = dst.index_vux9f0$(dx, dy + y | 0);
      var srcOffset = src.index_vux9f0$(sleft, stop + y | 0);
      if (mix) {
        if (dstPremultiplied && srcPremultiplied) {
          for (var x = 0; x < width; x++)
            dstDataPremult.set_wpz7qp$(dstOffset + x | 0, mix_2(dstDataPremult.get_za3lpa$(dstOffset + x | 0), srcDataPremult.get_za3lpa$(srcOffset + x | 0)));
        } else if (dstPremultiplied && !srcPremultiplied) {
          for (var x_0 = 0; x_0 < width; x_0++)
            dstDataPremult.set_wpz7qp$(dstOffset + x_0 | 0, mix_2(dstDataPremult.get_za3lpa$(dstOffset + x_0 | 0), srcData.get_za3lpa$(srcOffset + x_0 | 0).premultiplied));
        } else if (!dstPremultiplied && srcPremultiplied) {
          for (var x_1 = 0; x_1 < width; x_1++)
            dstData.set_vlvk8p$(dstOffset + x_1 | 0, mix_2(dstData.get_za3lpa$(dstOffset + x_1 | 0).premultiplied, srcDataPremult.get_za3lpa$(srcOffset + x_1 | 0)).depremultiplied);
        } else if (!dstPremultiplied && !srcPremultiplied) {
          for (var x_2 = 0; x_2 < width; x_2++)
            dstData.set_vlvk8p$(dstOffset + x_2 | 0, mix_2(dstData.get_za3lpa$(dstOffset + x_2 | 0).premultiplied, srcData.get_za3lpa$(srcOffset + x_2 | 0).premultiplied).depremultiplied);
        }} else {
        if (dstPremultiplied === srcPremultiplied)
          arraycopy(srcData, srcOffset, dstData, dstOffset, width);
        else if (dstPremultiplied && !srcPremultiplied) {
          for (var x_3 = 0; x_3 < width; x_3++)
            dstDataPremult.set_wpz7qp$(dstOffset + x_3 | 0, srcData.get_za3lpa$(srcOffset + x_3 | 0).premultiplied);
        } else if (!dstPremultiplied && srcPremultiplied) {
          for (var x_4 = 0; x_4 < width; x_4++)
            dstData.set_vlvk8p$(dstOffset + x_4 | 0, srcDataPremult.get_za3lpa$(srcOffset + x_4 | 0).depremultiplied);
        }}
    }
  };
  Bitmap32.prototype._draw_dd24ng$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var sleft_0 = 0;
    var stop_0 = 0;
    var dx_0 = dx;
    var dy_0 = dy;
    if (dx_0 < 0) {
      sleft_0 = sleft_0 - dx_0 | 0;
      dx_0 = 0;
    }if (dy_0 < 0) {
      stop_0 = stop_0 - dy_0 | 0;
      dy_0 = 0;
    }var availableWidth = this.width - dx_0 | 0;
    var availableHeight = this.height - dy_0 | 0;
    var b = sright - sleft_0 | 0;
    var awidth = Math_0.min(availableWidth, b);
    var b_0 = sbottom - stop_0 | 0;
    var aheight = Math_0.min(availableHeight, b_0);
    this._drawUnchecked_dd24ng$(src, dx_0, dy_0, sleft_0, stop_0, sleft_0 + awidth | 0, stop_0 + aheight | 0, mix);
  };
  Bitmap32.prototype.drawPixelMixed_ci55m7$ = function (x, y, c) {
    this.set_ci55m7$(x, y, RGBA$Companion_getInstance().mix_jh0t86$(this.get_vux9f0$(x, y), c));
  };
  Bitmap32.prototype._drawPut_11mu8c$ = function (mix, other, _dx, _dy) {
    if (_dx === void 0)
      _dx = 0;
    if (_dy === void 0)
      _dy = 0;
    this._draw_dd24ng$(other, _dx, _dy, 0, 0, other.width, other.height, mix);
  };
  Bitmap32.prototype.historiogram_9bhpaq$ = function (channel, out) {
    if (out === void 0)
      out = new Int32Array(256);
    if (!(out.length >= 256)) {
      var message = 'output array size must be 256';
      throw IllegalStateException_init(message.toString());
    }arrayfill(out, 0, 0, out.length);
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var tmp$_2;
        tmp$_2 = channel.extract_md34sx$(this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1)));
        out[tmp$_2] = out[tmp$_2] + 1 | 0;
      }
    }
    return out;
  };
  Bitmap32.prototype.fill_kuukgh$ = function (color, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width - x | 0;
    if (height === void 0)
      height = this.height - y | 0;
    var x1 = this.clampX_za3lpa$(x);
    var x2 = this.clampX_za3lpa$(x + width - 1 | 0);
    var y1 = this.clampY_za3lpa$(y);
    var y2 = this.clampY_za3lpa$(y + height - 1 | 0);
    for (var cy = y1; cy <= y2; cy++)
      this.data.fill_eb600h$(color, this.index_vux9f0$(x1, cy), this.index_vux9f0$(x2, cy) + 1 | 0);
  };
  Bitmap32.prototype._draw_uui62f$ = function (src, dx, dy, mix) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    var b = src.bounds;
    this._draw_dd24ng$(src.bmp, dx, dy, b.left, b.top, b.right, b.bottom, mix);
  };
  Bitmap32.prototype.put_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(false, src, dx, dy);
  };
  Bitmap32.prototype.draw_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(true, src, dx, dy);
  };
  Bitmap32.prototype.put_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, false);
  };
  Bitmap32.prototype.draw_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, true);
  };
  Bitmap32.prototype.drawUnoptimized_w6lfje$ = function (src, dx, dy, mix) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    if (mix === void 0)
      mix = true;
    var tmp$;
    if (Kotlin.isType(src.bmp, Bitmap32)) {
      this._draw_uui62f$(Kotlin.isType(tmp$ = src, BitmapSlice) ? tmp$ : throwCCE(), dx, dy, mix);
    } else {
      this.drawUnoptimized_oe1aq3$(src.bmp, dx, dy, src.left, src.top, src.right, src.bottom, mix);
    }
  };
  Bitmap32.prototype.drawUnoptimized_oe1aq3$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var dstData = dst.data;
    for (var y = 0; y < height; y++) {
      var dstOffset = dst.index_vux9f0$(dx, dy + y | 0);
      if (mix) {
        for (var x = 0; x < width; x++)
          dstData.set_vlvk8p$(dstOffset + x | 0, RGBA$Companion_getInstance().mix_jh0t86$(dstData.get_za3lpa$(dstOffset + x | 0), src.getRgba_vux9f0$(sleft + x | 0, stop + y | 0)));
      } else {
        for (var x_0 = 0; x_0 < width; x_0++)
          dstData.set_vlvk8p$(dstOffset + x_0 | 0, src.getRgba_vux9f0$(sleft + x_0 | 0, stop + y | 0));
      }
    }
  };
  Bitmap32.prototype.copySliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return this.copySliceWithSize_tjonv8$(left, top, right - left | 0, bottom - top | 0);
  };
  Bitmap32.prototype.copySliceWithSize_tjonv8$ = function (x, y, width, height) {
    var $receiver = new Bitmap32(width, height);
    for (var yy = 0; yy < height; yy++) {
      arraycopy(this.data, this.index_vux9f0$(x, y + yy | 0), $receiver.data, $receiver.index_vux9f0$(0, yy), width);
    }
    return $receiver;
  };
  Bitmap32.prototype.any_vcmugg$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.any_vcmugg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var Collection = Kotlin.kotlin.collections.Collection;
    return function (callback) {
      var $receiver = until(0, this.area);
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (callback(this.data.get_za3lpa$(element))) {
            any$result = true;
            break any$break;
          }}
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }));
  Bitmap32.prototype.all_vcmugg$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.all_vcmugg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var Collection = Kotlin.kotlin.collections.Collection;
    return function (callback) {
      var $receiver = until(0, this.area);
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!callback(this.data.get_za3lpa$(element))) {
            all$result = false;
            break all$break;
          }}
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }));
  Bitmap32.prototype.setEach_xn9fzl$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.setEach_xn9fzl$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        this.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), callback(x, y));
      }
    }
  });
  Bitmap32.prototype.updateColors_nwnvpc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.updateColors_nwnvpc$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, callback(this.data.get_za3lpa$(n_0)));
      }
    }
  });
  Bitmap32.prototype.updateColorsXY_covpbs$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.Bitmap32.updateColorsXY_covpbs$', function (sx, sy, width, height, callback) {
    if (sx === void 0)
      sx = 0;
    if (sy === void 0)
      sy = 0;
    if (width === void 0)
      width = this.width - sx | 0;
    if (height === void 0)
      height = this.height - sy | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sy + height | 0;
    for (var y = sy; y < tmp$; y++) {
      var n = this.index_vux9f0$(sx, sy + y | 0);
      tmp$_0 = sx + width | 0;
      for (var x = sx; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, callback(x, y, this.data.get_za3lpa$(n_0)));
      }
    }
  });
  Bitmap32.prototype.writeChannel_ccmnuj$ = function (destination, input, source) {
    Bitmap32$Companion_getInstance().copyChannel_ravo8c$(input, source, this, destination);
  };
  Bitmap32.prototype.writeChannel_z3s5mf$ = function (destination, input) {
    Bitmap32$Companion_getInstance().copyChannel_b84796$(input, this, destination);
  };
  Bitmap32.prototype.extractChannel_z3s5mf$ = function (channel, out) {
    if (out === void 0)
      out = new Bitmap8(this.width, this.height);
    Bitmap32$Companion_getInstance().copyChannel_3yarfq$(this, channel, out);
    return out;
  };
  Bitmap32.prototype.inverted_59u9qz$ = function (target) {
    if (target === void 0)
      target = new Bitmap32(this.width, this.height);
    var $receiver = this.copyTo_59u9qz$(target);
    $receiver.invert();
    return $receiver;
  };
  Bitmap32.prototype.xored_w8v7je$ = function (value, target) {
    if (target === void 0)
      target = new Bitmap32(this.width, this.height);
    var $receiver = this.copyTo_59u9qz$(target);
    $receiver.xor_md34sx$(value);
    return $receiver;
  };
  Bitmap32.prototype.invert = function () {
    this.xor_md34sx$(RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 0));
  };
  Bitmap32.prototype.xor_md34sx$ = function (value) {
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, new RGBA(this.data.get_za3lpa$(n_0).value ^ value.value));
      }
    }
  };
  Bitmap32.prototype.toString = function () {
    return 'Bitmap32(' + this.width + ', ' + this.height + ')';
  };
  Bitmap32.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_vux9f0$(0, y0);
    var s1 = this.index_vux9f0$(0, y1);
    arraycopy(this.data, s0, this.temp_0, 0, this.width);
    arraycopy(this.data, s1, this.data, s0, this.width);
    arraycopy(this.temp_0, 0, this.data, s1, this.width);
  };
  Bitmap32.prototype.writeDecoded_77vltg$ = function (color, data, offset, littleEndian) {
    if (offset === void 0)
      offset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    decode(color, data, offset, this.data, 0, this.area, littleEndian);
    return this;
  };
  Bitmap32.prototype.clone = function () {
    return new Bitmap32(this.width, this.height, new RgbaArray(this.data.ints.slice()), this.premultiplied);
  };
  Bitmap32.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new Bitmap32Context2d(this, antialiasing));
  };
  Bitmap32.prototype.premultipliedIfRequired = function () {
    return this.premultiplied ? this : this.copyPremultiplied();
  };
  Bitmap32.prototype.depremultipliedIfRequired = function () {
    return !this.premultiplied ? this : this.depremultiplied();
  };
  Bitmap32.prototype.copyPremultiplied = function () {
    var $receiver = this.clone();
    $receiver.premultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.depremultiplied = function () {
    var $receiver = this.clone();
    $receiver.depremultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.premultiplyInplace = function () {
    if (this.premultiplied)
      return;
    this.premultiplied = true;
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, asNonPremultiplied(this.data.get_za3lpa$(n_0).premultiplied));
      }
    }
  };
  Bitmap32.prototype.depremultiplyInplace = function () {
    if (!this.premultiplied)
      return;
    this.premultiplied = false;
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, asPremultiplied(this.data.get_za3lpa$(n_0)).depremultiplied);
      }
    }
  };
  Bitmap32.prototype.withColorTransform_zfnmgq$ = function (ct, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width - x | 0;
    if (height === void 0)
      height = this.height - y | 0;
    var $receiver = extract_0(this, x, y, width, height);
    $receiver.applyColorTransform_zfnmgq$(ct);
    return $receiver;
  };
  Bitmap32.prototype.applyColorTransform_zfnmgq$ = function (ct, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width - x | 0;
    if (height === void 0)
      height = this.height - y | 0;
    var array = new Int32Array(256);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = clamp(numberToInt(i * ct.mR + ct.aR), 0, 255);
    }
    var R = array;
    var array_0 = new Int32Array(256);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = clamp(numberToInt(i_0 * ct.mG + ct.aG), 0, 255);
    }
    var G = array_0;
    var array_1 = new Int32Array(256);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = clamp(numberToInt(i_1 * ct.mB + ct.aB), 0, 255);
    }
    var B = array_1;
    var array_2 = new Int32Array(256);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      array_2[i_2] = clamp(numberToInt(i_2 * ct.mA + ct.aA), 0, 255);
    }
    var A = array_2;
    var tmp$_3, tmp$_4, tmp$_5;
    tmp$_3 = y + height | 0;
    for (var y_0 = y; y_0 < tmp$_3; y_0++) {
      var n = this.index_vux9f0$(x, y + y_0 | 0);
      tmp$_4 = x + width | 0;
      for (var x_0 = x; x_0 < tmp$_4; x_0++) {
        var n_0 = (tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5);
        var tmp$_6 = this.data;
        var it = this.data.get_za3lpa$(n_0);
        tmp$_6.set_vlvk8p$(n_0, RGBA$Companion_getInstance().invoke_tjonv8$(R[it.r], G[it.g], B[it.b], A[it.a]));
      }
    }
  };
  Bitmap32.prototype.mipmap_za3lpa$ = function (levels) {
    var tmp$, tmp$_0;
    var temp = this.clone();
    temp.premultiplyInplace();
    var dst = asPremultiplied_0(temp.data);
    var twidth = this.width;
    var theight = this.height;
    for (var level = 0; level < levels; level++) {
      twidth = twidth / 2 | 0;
      theight = theight / 2 | 0;
      tmp$ = theight;
      for (var y = 0; y < tmp$; y++) {
        var n = temp.index_vux9f0$(0, y);
        var m = temp.index_vux9f0$(0, y * 2 | 0);
        tmp$_0 = twidth;
        for (var x = 0; x < tmp$_0; x++) {
          dst.set_wpz7qp$(n, RGBAPremultiplied$Companion_getInstance().blend_rvhnu4$(dst.get_za3lpa$(m + 0 | 0), dst.get_za3lpa$(m + 1 | 0), dst.get_za3lpa$(m + this.width + 0 | 0), dst.get_za3lpa$(m + this.width + 1 | 0)));
          m = m + 2 | 0;
          n = n + 1 | 0;
        }
      }
    }
    return temp.copySliceWithSize_tjonv8$(0, 0, twidth, theight);
  };
  Bitmap32.prototype.iterator = function () {
    return this.data.iterator();
  };
  Bitmap32.prototype.setRowChunk_mv2y54$ = function (x, y, data, width, increment) {
    if (increment === 1) {
      arraycopy(data, 0, this.data, this.index_vux9f0$(x, y), width);
    } else {
      var m = this.index_vux9f0$(x, y);
      for (var n = 0; n < width; n++) {
        this.data.ints[m] = data.ints[n];
        m = m + increment | 0;
      }
    }
  };
  Bitmap32.prototype.extractBytes_xrv259$ = function (format) {
    if (format === void 0)
      format = RGBA$Companion_getInstance();
    return encode_0(format, this.data);
  };
  Bitmap32.prototype.scaleNearest_vux9f0$ = function (sx, sy) {
    return this.scaled_ydzd23$(Kotlin.imul(this.width, sx), Kotlin.imul(this.height, sy), false);
  };
  Bitmap32.prototype.scaleLinear_lu1900$ = function (sx, sy) {
    return this.scaled_ydzd23$(numberToInt(this.width * sx), numberToInt(this.height * sy), true);
  };
  Bitmap32.prototype.scaled_ydzd23$ = function (width, height, smooth) {
    if (smooth === void 0)
      smooth = true;
    var sx = width / this.width;
    var sy = height / this.height;
    var isx = 1.0 / sx;
    var isy = 1.0 / sy;
    var out = new Bitmap32(width, height);
    if (smooth) {
      var width_0;
      width_0 = out.width - 0 | 0;
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = 0 + (out.height - 0 | 0) | 0;
      for (var y = 0; y < tmp$; y++) {
        var n = out.index_vux9f0$(0, 0 + y | 0);
        tmp$_0 = 0 + width_0 | 0;
        for (var x = 0; x < tmp$_0; x++) {
          out.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), this.get_vux9f0$(numberToInt(x * isx), numberToInt(y * isy)));
        }
      }
    } else {
      var gWidth = width > ((this.width / 2 | 0) + 1 | 0);
      var gHeight = height > ((this.height / 2 | 0) + 1 | 0);
      if (gWidth || gHeight) {
        return this.scaled_ydzd23$(gWidth ? this.width / 2 | 0 : width, gHeight ? this.height / 2 | 0 : height, true).scaled_ydzd23$(width, height);
      }var width_1;
      width_1 = out.width - 0 | 0;
      var tmp$_2, tmp$_3, tmp$_4;
      tmp$_2 = 0 + (out.height - 0 | 0) | 0;
      for (var y_0 = 0; y_0 < tmp$_2; y_0++) {
        var n_0 = out.index_vux9f0$(0, 0 + y_0 | 0);
        tmp$_3 = 0 + width_1 | 0;
        for (var x_0 = 0; x_0 < tmp$_3; x_0++) {
          out.data.set_vlvk8p$((tmp$_4 = n_0, n_0 = tmp$_4 + 1 | 0, tmp$_4), this.getRgbaSampled_lu1900$(x_0 * isx, y_0 * isy));
        }
      }
    }
    return out;
  };
  Bitmap32.prototype.rgbaToYCbCr = function () {
    var $receiver = this.clone();
    $receiver.rgbaToYCbCrInline();
    return $receiver;
  };
  Bitmap32.prototype.rgbaToYCbCrInline = function () {
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, new RGBA(toYCbCr(this.data.get_za3lpa$(n_0)).value));
      }
    }
  };
  Bitmap32.prototype.yCbCrToRgba = function () {
    var $receiver = this.clone();
    $receiver.yCbCrToRgbaInline();
    return $receiver;
  };
  Bitmap32.prototype.yCbCrToRgbaInline = function () {
    var width;
    width = this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + (this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
        this.data.set_vlvk8p$(n_0, toRGBA_0(new YCbCr(this.data.get_za3lpa$(n_0).value)));
      }
    }
  };
  Bitmap32.prototype.contentEquals_s8jyv4$ = function (other) {
    return Kotlin.isType(other, Bitmap32) && this.width === other.width && this.height === other.height && contentEquals(this.data.ints, other.data.ints);
  };
  Bitmap32.prototype.contentHashCode = function () {
    return (this.width * 31 | 0) + this.height + contentHashCode(this.data.ints) + (this.premultiplied ? 1 : 0) | 0;
  };
  function Bitmap32$Companion() {
    Bitmap32$Companion_instance = this;
  }
  Bitmap32$Companion.prototype.invoke_g4fuo$ = function (width, height, premultiplied, generator) {
    if (premultiplied === void 0)
      premultiplied = false;
    var $receiver = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(width, height));
    var tmp$;
    var n = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        $receiver.set_vlvk8p$((tmp$ = n, n = tmp$ + 1 | 0, tmp$), generator(x, y));
      }
    }
    return new Bitmap32(width, height, $receiver, premultiplied);
  };
  Bitmap32$Companion.prototype.copyChannel_ravo8c$ = function (src, srcChannel, dst, dstChannel) {
    var tmp$;
    var srcShift = srcChannel.shift;
    var dstShift = dstChannel.shift;
    var dstClear = dstChannel.clearMask;
    var dstData = dst.data;
    var srcData = src.data;
    tmp$ = dst.area;
    for (var n = 0; n < tmp$; n++) {
      var c = srcData.ints[n] >>> srcShift & 255;
      dstData.set_vlvk8p$(n, new RGBA(dstData.ints[n] & dstClear | c << dstShift));
    }
  };
  Bitmap32$Companion.prototype.copyChannel_b84796$ = function (src, dst, dstChannel) {
    var tmp$;
    var destShift = dstChannel.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = dst.area;
    for (var n = 0; n < tmp$; n++) {
      var c = src.data[n] & 255;
      dst.data.set_vlvk8p$(n, new RGBA(dst.data.ints[n] & destClear | c << destShift));
    }
  };
  Bitmap32$Companion.prototype.copyChannel_3yarfq$ = function (src, srcChannel, dst) {
    var tmp$;
    var shift = srcChannel.shift;
    tmp$ = src.area;
    for (var n = 0; n < tmp$; n++) {
      dst.data[n] = toByte(src.data.ints[n] >>> shift & 255);
    }
  };
  Bitmap32$Companion.prototype.copyRect_dpalmc$ = function (src, srcX, srcY, dst, dstX, dstY, width, height) {
    src.copy_akhah0$(srcX, srcY, dst, dstX, dstY, width, height);
  };
  Bitmap32$Companion.prototype.createWithAlpha_h1jruv$ = function (color, alpha, alphaChannel) {
    if (alphaChannel === void 0)
      alphaChannel = BitmapChannel$RED_getInstance();
    var $receiver = new Bitmap32(color.width, color.height);
    $receiver.put_dryc6d$(color);
    Bitmap32$Companion_getInstance().copyChannel_ravo8c$(alpha, BitmapChannel$RED_getInstance(), $receiver, BitmapChannel$ALPHA_getInstance());
    return $receiver;
  };
  Bitmap32$Companion.prototype.matchesSSMI_irislw$ = function (a, b, continuation) {
    throw new NotImplementedError_init();
  };
  Bitmap32$Companion.prototype.matches_9ho1nm$ = function (a, b, threshold, continuation) {
    if (threshold === void 0)
      threshold = 32;
    var diff = this.diff_irislw$(a, b);
    var $receiver = diff.data;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!(element.r < threshold && element.g < threshold && element.b < threshold && element.a < threshold)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  function Bitmap32$Companion$MatchResult(sizeMatches, differentPixels, samePixels) {
    if (differentPixels === void 0)
      differentPixels = 0;
    if (samePixels === void 0)
      samePixels = 0;
    this.sizeMatches = sizeMatches;
    this.differentPixels = differentPixels;
    this.samePixels = samePixels;
  }
  Bitmap32$Companion$MatchResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchResult',
    interfaces: []
  };
  Bitmap32$Companion$MatchResult.prototype.component1 = function () {
    return this.sizeMatches;
  };
  Bitmap32$Companion$MatchResult.prototype.component2 = function () {
    return this.differentPixels;
  };
  Bitmap32$Companion$MatchResult.prototype.component3 = function () {
    return this.samePixels;
  };
  Bitmap32$Companion$MatchResult.prototype.copy_judmud$ = function (sizeMatches, differentPixels, samePixels) {
    return new Bitmap32$Companion$MatchResult(sizeMatches === void 0 ? this.sizeMatches : sizeMatches, differentPixels === void 0 ? this.differentPixels : differentPixels, samePixels === void 0 ? this.samePixels : samePixels);
  };
  Bitmap32$Companion$MatchResult.prototype.toString = function () {
    return 'MatchResult(sizeMatches=' + Kotlin.toString(this.sizeMatches) + (', differentPixels=' + Kotlin.toString(this.differentPixels)) + (', samePixels=' + Kotlin.toString(this.samePixels)) + ')';
  };
  Bitmap32$Companion$MatchResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sizeMatches) | 0;
    result = result * 31 + Kotlin.hashCode(this.differentPixels) | 0;
    result = result * 31 + Kotlin.hashCode(this.samePixels) | 0;
    return result;
  };
  Bitmap32$Companion$MatchResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sizeMatches, other.sizeMatches) && Kotlin.equals(this.differentPixels, other.differentPixels) && Kotlin.equals(this.samePixels, other.samePixels)))));
  };
  Bitmap32$Companion.prototype.matchesWithResult_6bycng$ = function (a, b) {
    var tmp$;
    if (a.width !== b.width || a.height !== b.height)
      return new Bitmap32$Companion$MatchResult(false);
    var aData = a.data;
    var bData = b.data;
    var different = 0;
    var same = 0;
    tmp$ = aData.size;
    for (var n = 0; n < tmp$; n++) {
      var av = aData.get_za3lpa$(n);
      var bv = bData.get_za3lpa$(n);
      if ((av != null ? av.equals(bv) : null) || (av.a === 0 && bv.a === 0)) {
        same = same + 1 | 0;
      } else {
        different = different + 1 | 0;
      }
    }
    return new Bitmap32$Companion$MatchResult(true, different, same);
  };
  Bitmap32$Companion.prototype.diff_irislw$ = function (a, b) {
    var tmp$;
    if (a.width !== b.width || a.height !== b.height)
      throw IllegalArgumentException_init(a.toString() + ' not matches ' + b + ' size');
    var a32 = a.toBMP32();
    var b32 = b.toBMP32();
    var out = new Bitmap32(a.width, a.height, void 0, true);
    tmp$ = out.area;
    for (var n = 0; n < tmp$; n++) {
      var c1 = a32.data.get_za3lpa$(n).premultiplied;
      var c2 = b32.data.get_za3lpa$(n).premultiplied;
      out.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(abs(c1.r - c2.r | 0), abs(c1.g - c2.g | 0), abs(c1.b - c2.b | 0), abs(c1.a - c2.a | 0)));
    }
    return out;
  };
  Bitmap32$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bitmap32$Companion_instance = null;
  function Bitmap32$Companion_getInstance() {
    if (Bitmap32$Companion_instance === null) {
      new Bitmap32$Companion();
    }return Bitmap32$Companion_instance;
  }
  Bitmap32.prototype.toBMP32 = function () {
    return this;
  };
  Bitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32',
    interfaces: [Iterable, Bitmap]
  };
  function Bitmap32_init(width, height, value, premultiplied, $this) {
    if (premultiplied === void 0)
      premultiplied = false;
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premultiplied);
    $this.data.fill_eb600h$(value);
    return $this;
  }
  function Bitmap32_init_0(width, height, premultiplied, generator, $this) {
    if (premultiplied === void 0)
      premultiplied = false;
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premultiplied);
    var width_0;
    width_0 = $this.width - 0 | 0;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = 0 + ($this.height - 0 | 0) | 0;
    for (var y = 0; y < tmp$; y++) {
      var n = $this.index_vux9f0$(0, 0 + y | 0);
      tmp$_0 = 0 + width_0 | 0;
      for (var x = 0; x < tmp$_0; x++) {
        $this.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), generator(x, y));
      }
    }
    return $this;
  }
  function Bitmap4(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 2 | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(16);
    BitmapIndexed.call(this, 4, width, height, data, palette);
  }
  Bitmap4.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap4(width, height, void 0, this.palette);
  };
  Bitmap4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap4',
    interfaces: [BitmapIndexed]
  };
  function Bitmap8(width, height, data, palette) {
    Bitmap8$Companion_getInstance();
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(256);
    BitmapIndexed.call(this, 8, width, height, data, palette);
  }
  Bitmap8.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap8(width, height, void 0, this.palette);
  };
  Bitmap8.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.setIntIndex_vux9f0$(this.index_vux9f0$(x, y), color);
  };
  Bitmap8.prototype.getInt_vux9f0$ = function (x, y) {
    return this.datau.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap8.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.palette.get_za3lpa$(this.getInt_vux9f0$(x, y));
  };
  Bitmap8.prototype.getIntIndex_za3lpa$ = function (n) {
    return this.datau.get_za3lpa$(n);
  };
  Bitmap8.prototype.setIntIndex_vux9f0$ = function (n, color) {
    this.datau.set_vux9f0$(n, color);
  };
  Bitmap8.prototype.clone = function () {
    return new Bitmap8(this.width, this.height, this.data.slice(), new RgbaArray(this.palette.ints.slice()));
  };
  Bitmap8.prototype.toString = function () {
    return 'Bitmap8(' + this.width + ', ' + this.height + ', palette=' + this.palette.size + ')';
  };
  function Bitmap8$Companion() {
    Bitmap8$Companion_instance = this;
  }
  Bitmap8$Companion.prototype.copyRect_42fywk$ = function (src, srcX, srcY, dst, dstX, dstY, width, height) {
    src.copy_akhah0$(srcX, srcY, dst, dstX, dstY, width, height);
  };
  Bitmap8$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bitmap8$Companion_instance = null;
  function Bitmap8$Companion_getInstance() {
    if (Bitmap8$Companion_instance === null) {
      new Bitmap8$Companion();
    }return Bitmap8$Companion_instance;
  }
  Bitmap8.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap8',
    interfaces: [BitmapIndexed]
  };
  function BitmapChannel(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.shift = this.index * 8 | 0;
    this.setMask = 255 << this.shift;
    this.clearMask = ~this.setMask;
  }
  function BitmapChannel_initFields() {
    BitmapChannel_initFields = function () {
    };
    BitmapChannel$RED_instance = new BitmapChannel('RED', 0, 0);
    BitmapChannel$GREEN_instance = new BitmapChannel('GREEN', 1, 1);
    BitmapChannel$BLUE_instance = new BitmapChannel('BLUE', 2, 2);
    BitmapChannel$ALPHA_instance = new BitmapChannel('ALPHA', 3, 3);
    BitmapChannel$Companion_getInstance();
  }
  var BitmapChannel$RED_instance;
  function BitmapChannel$RED_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$RED_instance;
  }
  var BitmapChannel$GREEN_instance;
  function BitmapChannel$GREEN_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$GREEN_instance;
  }
  var BitmapChannel$BLUE_instance;
  function BitmapChannel$BLUE_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$BLUE_instance;
  }
  var BitmapChannel$ALPHA_instance;
  function BitmapChannel$ALPHA_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$ALPHA_instance;
  }
  BitmapChannel.prototype.extract_md34sx$ = function (rgba) {
    return rgba.value >>> this.shift & 255;
  };
  BitmapChannel.prototype.insert_3hpxcz$ = function (rgba, value) {
    return new RGBA(rgba.value & this.clearMask | (value & 255) << this.shift);
  };
  function BitmapChannel$Companion() {
    BitmapChannel$Companion_instance = this;
    this.ALL = BitmapChannel$values();
  }
  BitmapChannel$Companion.prototype.get_za3lpa$ = function (index) {
    return this.ALL[index];
  };
  BitmapChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapChannel$Companion_instance = null;
  function BitmapChannel$Companion_getInstance() {
    BitmapChannel_initFields();
    if (BitmapChannel$Companion_instance === null) {
      new BitmapChannel$Companion();
    }return BitmapChannel$Companion_instance;
  }
  BitmapChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapChannel',
    interfaces: [Enum]
  };
  function BitmapChannel$values() {
    return [BitmapChannel$RED_getInstance(), BitmapChannel$GREEN_getInstance(), BitmapChannel$BLUE_getInstance(), BitmapChannel$ALPHA_getInstance()];
  }
  BitmapChannel.values = BitmapChannel$values;
  function BitmapChannel$valueOf(name) {
    switch (name) {
      case 'RED':
        return BitmapChannel$RED_getInstance();
      case 'GREEN':
        return BitmapChannel$GREEN_getInstance();
      case 'BLUE':
        return BitmapChannel$BLUE_getInstance();
      case 'ALPHA':
        return BitmapChannel$ALPHA_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.bitmap.BitmapChannel.' + name);
    }
  }
  BitmapChannel.valueOf_61zpoe$ = BitmapChannel$valueOf;
  function get_Y($receiver) {
    return BitmapChannel$RED_getInstance();
  }
  function get_Cb($receiver) {
    return BitmapChannel$GREEN_getInstance();
  }
  function get_Cr($receiver) {
    return BitmapChannel$BLUE_getInstance();
  }
  function get_A($receiver) {
    return BitmapChannel$ALPHA_getInstance();
  }
  function toStringYCbCr($receiver) {
    switch ($receiver.index) {
      case 0:
        return 'Y';
      case 1:
        return 'Cb';
      case 2:
        return 'Cr';
      case 3:
        return 'A';
      default:return lang.invalidOp;
    }
  }
  function matchContentsDistinctCount($receiver, that) {
    var tmp$;
    if ($receiver.width !== that.width || $receiver.height !== that.height)
      return -1;
    var l = $receiver.toBMP32().depremultipliedIfRequired();
    var r = that.toBMP32().depremultipliedIfRequired();
    var width = l.width;
    var height = l.height;
    var count = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (!((tmp$ = l.getRgba_vux9f0$(x, y)) != null ? tmp$.equals(r.getRgba_vux9f0$(x, y)) : null)) {
          count = count + 1 | 0;
        }}
    }
    return count;
  }
  function matchContents($receiver, that) {
    return matchContentsDistinctCount($receiver, that) === 0;
  }
  function setAlpha($receiver, value) {
    var tmp$;
    tmp$ = $receiver.data.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_vux9f0$($receiver.data.get_za3lpa$(n).rgb, value));
  }
  function putWithBorder($receiver, x, y, bmp, border) {
    if (border === void 0)
      border = 1;
    var width = bmp.width;
    var height = bmp.height;
    bmp.copy_akhah0$(0, 0, $receiver, x, y, width, height);
    for (var n = 1; n <= border; n++) {
      $receiver.copy_akhah0$(x, y, $receiver, x - n | 0, y, 1, height);
      $receiver.copy_akhah0$(x + width - 1 | 0, y, $receiver, x + width - 1 + n | 0, y, 1, height);
    }
    for (var n_0 = 1; n_0 <= border; n_0++) {
      var rwidth = width + (border * 2 | 0) | 0;
      $receiver.copy_akhah0$(x, y, $receiver, x, y - n_0 | 0, rwidth, 1);
      $receiver.copy_akhah0$(x, y + height - 1 | 0, $receiver, x, y + height - 1 + n_0 | 0, rwidth, 1);
    }
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
  function BitmapIndexed(bpp, width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / (8 / bpp | 0) | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(1 << bpp);
    Bitmap.call(this, width, height, bpp, false, data);
    this.data = data;
    this.palette = palette;
    if (this.data.length < (Kotlin.imul(width, height) / (8 / bpp | 0) | 0))
      throw RuntimeException_init('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp = new Int8Array(Math_0.max(width, height));
    this.datau = new UByteArrayInt(this.data);
    this.n8_dbpp = 8 / bpp | 0;
    this.mask = (1 << bpp) - 1 | 0;
  }
  BitmapIndexed.prototype.toString = function () {
    return 'BitmapIndexed(bpp=' + this.bpp + ', width=' + this.width + ', height=' + this.height + ', clut=' + this.palette.size + ')';
  };
  BitmapIndexed.prototype.get_vux9f0$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.BitmapIndexed.get_vux9f0$', function (x, y) {
    return this.getInt_vux9f0$(x, y);
  });
  BitmapIndexed.prototype.set_qt1dr2$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.bitmap.BitmapIndexed.set_qt1dr2$', function (x, y, color) {
    this.setInt_qt1dr2$(x, y, color);
  });
  BitmapIndexed.prototype.getInt_vux9f0$ = function (x, y) {
    return this.getIntIndex_za3lpa$(this.index_vux9f0$(x, y));
  };
  BitmapIndexed.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.setIntIndex_vux9f0$(this.index_vux9f0$(x, y), color);
  };
  BitmapIndexed.prototype.getIntIndex_za3lpa$ = function (n) {
    return this.datau.get_za3lpa$(n / this.n8_dbpp | 0) >>> Kotlin.imul(this.bpp, n % this.n8_dbpp) & this.mask;
  };
  BitmapIndexed.prototype.setIntIndex_vux9f0$ = function (n, color) {
    var i = n / this.n8_dbpp | 0;
    this.datau.set_vux9f0$(i, insert(this.datau.get_za3lpa$(i), color, Kotlin.imul(this.bpp, n % this.n8_dbpp), this.bpp));
  };
  BitmapIndexed.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.palette.get_za3lpa$(this.getInt_vux9f0$(x, y));
  };
  BitmapIndexed.prototype.index_d_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) / this.n8_dbpp | 0;
  };
  BitmapIndexed.prototype.index_m_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) % this.n8_dbpp;
  };
  BitmapIndexed.prototype.setRow_96ojhb$ = function (y, row) {
    arrayCopy(row.storage, this.data, this.index_vux9f0$(0, y), 0, 0 + this.stride | 0);
  };
  BitmapIndexed.prototype.setRow_3fbn1q$ = function (y, row) {
    arrayCopy(row, this.data, this.index_vux9f0$(0, y), 0, 0 + this.stride | 0);
  };
  BitmapIndexed.prototype.setWhitescalePalette = function () {
    var tmp$;
    tmp$ = this.palette.size;
    for (var n = 0; n < tmp$; n++) {
      var col = numberToInt(n / this.palette.size * 255);
      this.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(col, col, col, 255));
    }
    return this;
  };
  BitmapIndexed.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_d_vux9f0$(0, y0);
    var s1 = this.index_d_vux9f0$(0, y1);
    arrayCopy(this.data, this.temp, 0, s0, s0 + this.stride | 0);
    arrayCopy(this.data, this.data, s0, s1, s1 + this.stride | 0);
    arrayCopy(this.temp, this.data, s1, 0, 0 + this.stride | 0);
  };
  BitmapIndexed.prototype.toLines_61zpoe$ = function (palette) {
    var $receiver = until(0, this.height);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.height);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(toBoxedChar(palette.charCodeAt(this.getInt_vux9f0$(item_0, item))));
      }
      tmp$_0.call(destination, joinToString(destination_0, ''));
    }
    return destination;
  };
  BitmapIndexed.prototype.setRowChunk_y8lvms$ = function (x, y, data, width, increment) {
    var tmp$;
    if (increment === 1) {
      arrayCopy(data, this.data, this.index_vux9f0$(x, y), 0, 0 + (width / this.n8_dbpp | 0) | 0);
    } else {
      var m = this.index_vux9f0$(x, y);
      tmp$ = width / this.n8_dbpp | 0;
      for (var n = 0; n < tmp$; n++) {
        this.data[m] = data[n];
        m = m + increment | 0;
      }
    }
  };
  BitmapIndexed.prototype.toBMP32 = function () {
    var $receiver = new Bitmap32(this.width, this.height, void 0, this.premultiplied);
    var tmp$;
    var out = $receiver.data.ints;
    var pal = this.palette.ints;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++)
      out[n] = pal[this.getIntIndex_za3lpa$(n)];
    return $receiver;
  };
  BitmapIndexed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapIndexed',
    interfaces: [Bitmap]
  };
  function BmpSlice() {
  }
  BmpSlice.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BmpSlice',
    interfaces: [Extra]
  };
  function asBitmapSlice($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver, BitmapSlice) ? tmp$ : throwCCE();
  }
  function getIntBounds($receiver, out) {
    if (out === void 0)
      out = RectangleInt.Companion.invoke();
    return setTo(out, $receiver.left, $receiver.top, $receiver.width, $receiver.height);
  }
  function extract_1($receiver) {
    return extract_0($receiver.bmp, $receiver.left, $receiver.top, $receiver.width, $receiver.height);
  }
  function BitmapSlice(bmp, bounds, name, rotated) {
    if (name === void 0)
      name = 'unknown';
    if (rotated === void 0)
      rotated = false;
    this.bmp_klb0st$_0 = bmp;
    this.bounds = bounds;
    this.name_r4yuh$_0 = name;
    this.$delegate_l9ixl6$_0 = new Extra$Mixin();
    this.parent_fb313s$_0 = null;
    this.tl_0 = new Point(this.left / this.bmp.width, this.top / this.bmp.height);
    this.br_0 = new Point(this.right / this.bmp.width, this.bottom / this.bmp.height);
    this.tr_0 = new Point(this.br_0.x, this.tl_0.y);
    this.bl_0 = new Point(this.tl_0.x, this.br_0.y);
    this.points_0 = [this.tl_0, this.tr_0, this.br_0, this.bl_0];
    this.offset_0 = rotated ? 1 : 0;
    this.p0_0 = getCyclic(this.points_0, this.offset_0 + 0 | 0);
    this.p1_0 = getCyclic(this.points_0, this.offset_0 + 1 | 0);
    this.p2_0 = getCyclic(this.points_0, this.offset_0 + 2 | 0);
    this.p3_0 = getCyclic(this.points_0, this.offset_0 + 3 | 0);
    this.tl_x_nngcv$_0 = this.p0_0.x;
    this.tl_y_nngc0$_0 = this.p0_0.y;
    this.tr_x_njmfp$_0 = this.p1_0.x;
    this.tr_y_njmeu$_0 = this.p1_0.y;
    this.br_x_xfx47$_0 = this.p2_0.x;
    this.br_y_xfx3c$_0 = this.p2_0.y;
    this.bl_x_xjr1d$_0 = this.p3_0.x;
    this.bl_y_xjr0i$_0 = this.p3_0.y;
    this.rotated_s99y09$_0 = false;
    this.rotatedAngle_pg30mg$_0 = 0;
  }
  Object.defineProperty(BitmapSlice.prototype, 'bmp', {
    get: function () {
      return this.bmp_klb0st$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'name', {
    get: function () {
      return this.name_r4yuh$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'premultiplied', {
    get: function () {
      return this.bmp.premultiplied;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'parent', {
    get: function () {
      return this.parent_fb313s$_0;
    },
    set: function (parent) {
      this.parent_fb313s$_0 = parent;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'left', {
    get: function () {
      return this.bounds.left;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'top', {
    get: function () {
      return this.bounds.top;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'right', {
    get: function () {
      return this.bounds.right;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bottom', {
    get: function () {
      return this.bounds.bottom;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'width', {
    get: function () {
      return this.bounds.width;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'height', {
    get: function () {
      return this.bounds.height;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tl_x', {
    get: function () {
      return this.tl_x_nngcv$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tl_y', {
    get: function () {
      return this.tl_y_nngc0$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tr_x', {
    get: function () {
      return this.tr_x_njmfp$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tr_y', {
    get: function () {
      return this.tr_y_njmeu$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'br_x', {
    get: function () {
      return this.br_x_xfx47$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'br_y', {
    get: function () {
      return this.br_y_xfx3c$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bl_x', {
    get: function () {
      return this.bl_x_xjr1d$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bl_y', {
    get: function () {
      return this.bl_y_xjr0i$_0;
    }
  });
  BitmapSlice.prototype.extract = function () {
    return extract_0(this.bmp, this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
  };
  BitmapSlice.prototype.sliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return new BitmapSlice(this.bmp, createRectangleInt(this.bounds.left, this.bounds.top, this.bounds.right, this.bounds.bottom, left, top, right, bottom));
  };
  BitmapSlice.prototype.sliceWithSize_tjonv8$ = function (x, y, width, height) {
    return this.sliceWithBounds_tjonv8$(x, y, x + width | 0, y + height | 0);
  };
  BitmapSlice.prototype.slice_t9mhyo$ = function (rect) {
    return this.sliceWithBounds_tjonv8$(rect.left, rect.top, rect.right, rect.bottom);
  };
  BitmapSlice.prototype.slice_2da8yn$ = function (rect) {
    return this.slice_t9mhyo$(rect.toInt());
  };
  BitmapSlice.prototype.split_vux9f0$ = function (width, height) {
    var self_0 = this;
    var nheight = self_0.height / height | 0;
    var nwidth = self_0.width / width | 0;
    var $receiver = ArrayList_init_0();
    for (var y = 0; y < nheight; y++) {
      for (var x = 0; x < nwidth; x++) {
        $receiver.add_11rb$(self_0.sliceWithSize_tjonv8$(Kotlin.imul(x, width), Kotlin.imul(y, height), width, height));
      }
    }
    return $receiver;
  };
  Object.defineProperty(BitmapSlice.prototype, 'rotated', {
    get: function () {
      return this.rotated_s99y09$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'rotatedAngle', {
    get: function () {
      return this.rotatedAngle_pg30mg$_0;
    }
  });
  BitmapSlice.prototype.toString = function () {
    return 'BitmapSlice(' + this.name + ':' + SizeInt.Companion.invoke_vux9f0$(this.bounds.width, this.bounds.height) + ')';
  };
  Object.defineProperty(BitmapSlice.prototype, 'extra', {
    get: function () {
      return this.$delegate_l9ixl6$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_l9ixl6$_0.extra = tmp$;
    }
  });
  BitmapSlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapSlice',
    interfaces: [BmpSlice, Extra]
  };
  function BitmapSliceCompat(bmp, frame, orig, trim, rotated, name) {
    if (name === void 0)
      name = 'unknown';
    return new BitmapSlice(bmp, frame.toInt(), name, rotated);
  }
  function slice($receiver, bounds, name) {
    if (bounds === void 0)
      bounds = RectangleInt.Companion.invoke_tjonv8$(0, 0, $receiver.width, $receiver.height);
    if (name === void 0)
      name = 'unknown';
    return new BitmapSlice($receiver, bounds, name);
  }
  function sliceWithBounds($receiver, left, top, right, bottom, name) {
    if (name === void 0)
      name = 'unknown';
    return slice($receiver, createRectangleInt(0, 0, $receiver.width, $receiver.height, left, top, right, bottom), name);
  }
  function sliceWithSize_1($receiver, x, y, width, height, name) {
    if (name === void 0)
      name = 'unknown';
    return sliceWithBounds($receiver, x, y, x + width | 0, y + height | 0, name);
  }
  function createRectangleInt(bleft, btop, bright, bbottom, left, top, right, bottom, allowInvalidBounds) {
    if (allowInvalidBounds === void 0)
      allowInvalidBounds = false;
    return RectangleInt.Companion.fromBounds_tjonv8$(clamp(bleft + left | 0, bleft, bright), clamp(btop + top | 0, btop, bbottom), clamp(bleft + right | 0, allowInvalidBounds ? bleft : bleft + left | 0, bright), clamp(btop + bottom | 0, allowInvalidBounds ? btop : btop + top | 0, bbottom));
  }
  function Bitmaps() {
    Bitmaps_instance = this;
    this.transparent = slice(new Bitmap32(1, 1), void 0, 'transparent');
    this.white = slice(new Bitmap32(1, 1, RgbaArray$Companion_getInstance().invoke_bvgci3$(1, Bitmaps$white$lambda)), void 0, 'white');
  }
  function Bitmaps$white$lambda(it) {
    return Colors_getInstance().WHITE;
  }
  Bitmaps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Bitmaps',
    interfaces: []
  };
  var Bitmaps_instance = null;
  function Bitmaps_getInstance() {
    if (Bitmaps_instance === null) {
      new Bitmaps();
    }return Bitmaps_instance;
  }
  function DistanceBitmap(width, height, dx, dy) {
    if (dx === void 0)
      dx = new Float32Array(Kotlin.imul(width, height));
    if (dy === void 0)
      dy = new Float32Array(Kotlin.imul(width, height));
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;
    this.area = Kotlin.imul(this.width, this.height);
    if (!(this.dx.length >= this.area))
      throw AssertionError_init();
    if (!(this.dy.length >= this.area))
      throw AssertionError_init();
  }
  DistanceBitmap.prototype.index_vux9f0$ = function (x, y) {
    return Kotlin.imul(y, this.width) + x | 0;
  };
  DistanceBitmap.prototype.set_onl0z8$ = function (x, y, dx, dy) {
    var i = this.index_vux9f0$(x, y);
    this.dx[i] = dx;
    this.dy[i] = dy;
  };
  DistanceBitmap.prototype.getX_vux9f0$ = function (x, y) {
    return this.dx[this.index_vux9f0$(x, y)];
  };
  DistanceBitmap.prototype.getY_vux9f0$ = function (x, y) {
    return this.dy[this.index_vux9f0$(x, y)];
  };
  DistanceBitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistanceBitmap',
    interfaces: []
  };
  function NativeImage(width, height, data, premultiplied) {
    Bitmap.call(this, width, height, 32, premultiplied, null);
    this.data = data;
    this.name_vm0j7s$_0 = 'NativeImage';
  }
  Object.defineProperty(NativeImage.prototype, 'name', {
    get: function () {
      return this.name_vm0j7s$_0;
    }
  });
  NativeImage.prototype.toUri = function () {
    return 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$(this, new ImageEncodingProps('out.png')));
  };
  NativeImage.prototype.toNonNativeBmp = function () {
    return this.toBMP32();
  };
  NativeImage.prototype.toBMP32 = function () {
    var $receiver = Bitmap32_init(this.width, this.height, Colors_getInstance().TRANSPARENT_BLACK, this.premultiplied);
    this.readPixelsUnsafe_zddtuu$(0, 0, this.width, this.height, $receiver.data, 0);
    return $receiver;
  };
  NativeImage.prototype.setRgba_ci55m7$ = function (x, y, v) {
    this.tempRgba.set_vlvk8p$(0, v);
    this.writePixelsUnsafe_zddtuu$(x, y, 1, 1, this.tempRgba, 0);
  };
  NativeImage.prototype.getRgba_vux9f0$ = function (x, y) {
    this.readPixelsUnsafe_zddtuu$(x, y, 1, 1, this.tempRgba, 0);
    return this.tempRgba.get_za3lpa$(0);
  };
  NativeImage.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.setRgba_ci55m7$(x, y, new RGBA(color));
  };
  NativeImage.prototype.getInt_vux9f0$ = function (x, y) {
    return this.getRgba_vux9f0$(x, y).value;
  };
  NativeImage.prototype.swapRows_vux9f0$ = function (y0, y1) {
    this.readPixelsUnsafe_zddtuu$(0, y0, this.width, 1, this.tempRgba, 0);
    this.readPixelsUnsafe_zddtuu$(0, y1, this.width, 1, this.tempRgba, this.width);
    this.writePixelsUnsafe_zddtuu$(0, y1, this.width, 1, this.tempRgba, 0);
    this.writePixelsUnsafe_zddtuu$(0, y0, this.width, 1, this.tempRgba, this.width);
  };
  NativeImage.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return NativeImage_0(width, height);
  };
  NativeImage.prototype.toString = function () {
    return this.name + '(' + this.width + ', ' + this.height + ')';
  };
  NativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImage',
    interfaces: [Bitmap]
  };
  function mipmap($receiver, levels) {
    return nativeImageFormatProvider.mipmap_uwsoz2$($receiver, levels);
  }
  function toUri($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver.toUri();
    return 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$($receiver, new ImageEncodingProps('out.png')));
  }
  function NativeImageOrBitmap32(width, height, native) {
    if (native === void 0)
      native = true;
    return native ? NativeImage_0(width, height) : new Bitmap32(width, height, void 0, true);
  }
  function NativeImage_0(width, height) {
    return nativeImageFormatProvider.create_vux9f0$(width, height);
  }
  function NativeImage_1(width, height, d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    var bmp = NativeImage_0(width, height);
    try {
      var ctx = bmp.getContext2d_6taknv$();
      ctx.save();
      try {
        ctx.scale_lu1900$(scaleX, scaleY);
        ctx.draw_x1nmjt$(d);
      }finally {
        ctx.restore();
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        printStackTrace(e);
      } else
        throw e;
    }
    return bmp;
  }
  function NativeImage_2(d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_1(numberToInt(d.width * scaleX), numberToInt(d.height * scaleY), d, scaleX, scaleY);
  }
  function ensureNative($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver;
    else
      return nativeImageFormatProvider.copy_uler2c$($receiver);
  }
  function raster($receiver, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_2($receiver, scaleX, scaleY);
  }
  function NinePatchInfo(xranges, yranges, width, height) {
    this.xranges = xranges;
    this.yranges = yranges;
    this.width = width;
    this.height = height;
    this.xaxis = new NinePatchInfo$AxisInfo(this.xranges, this.width);
    this.yaxis = new NinePatchInfo$AxisInfo(this.yranges, this.height);
    this.xsegments = this.xaxis.segments;
    this.ysegments = this.yaxis.segments;
    this.fixedWidth = this.xaxis.fixedLen;
    this.fixedHeight = this.yaxis.fixedLen;
    this.scaledWidth = this.xaxis.scaledLen;
    this.scaledHeight = this.yaxis.scaledLen;
    var $receiver = this.ysegments;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = this.xsegments;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new NinePatchInfo$Segment(RectangleInt.Companion.fromBounds_tjonv8$(item_0.range.start, item.range.start, get_endExclusive(item_0.range), get_endExclusive(item.range)), item_0, item));
      }
      tmp$_0.call(destination, destination_0);
    }
    this.segments = destination;
  }
  function NinePatchInfo$AxisSegment(scaled, range) {
    this.scaled = scaled;
    this.range = range;
  }
  Object.defineProperty(NinePatchInfo$AxisSegment.prototype, 'fixed', {
    get: function () {
      return !this.scaled;
    }
  });
  Object.defineProperty(NinePatchInfo$AxisSegment.prototype, 'length', {
    get: function () {
      return get_length(this.range);
    }
  });
  NinePatchInfo$AxisSegment.prototype.computedLength_cfr5bs$ = function (axis, boundsLength) {
    var tmp$;
    var scale = clamp_0(boundsLength / axis.totalLen, 0.0, 1.0);
    if (this.fixed) {
      tmp$ = this.length * scale;
    } else {
      var variableSize = boundsLength - axis.fixedLen * scale;
      tmp$ = variableSize * (this.length / axis.scaledLen);
    }
    return tmp$;
  };
  NinePatchInfo$AxisSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxisSegment',
    interfaces: []
  };
  function NinePatchInfo$AxisInfo(ranges, totalLen) {
    this.totalLen = totalLen;
    var destination = ArrayList_init(collectionSizeOrDefault(ranges, 10));
    var tmp$;
    tmp$ = ranges.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new NinePatchInfo$AxisSegment(item.first, item.second));
    }
    this.segments = destination;
    var $receiver = this.segments;
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.fixed)
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_1.add_11rb$(item_0.length);
    }
    var b = sum(destination_1);
    this.fixedLen = Math_0.max(1, b);
    var $receiver_0 = this.segments;
    var destination_2 = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (element_0.scaled)
        destination_2.add_11rb$(element_0);
    }
    var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
    var tmp$_3;
    tmp$_3 = destination_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_3.add_11rb$(item_1.length);
    }
    var b_0 = sum(destination_3);
    this.scaledLen = Math_0.max(1, b_0);
  }
  NinePatchInfo$AxisInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxisInfo',
    interfaces: []
  };
  function NinePatchInfo$Segment(rect, x, y) {
    this.rect = rect;
    this.x = x;
    this.y = y;
    this.$delegate_5nxubg$_0 = new Extra$Mixin();
    this.scaleX = this.x.scaled;
    this.scaleY = this.y.scaled;
  }
  Object.defineProperty(NinePatchInfo$Segment.prototype, 'extra', {
    get: function () {
      return this.$delegate_5nxubg$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_5nxubg$_0.extra = tmp$;
    }
  });
  NinePatchInfo$Segment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Segment',
    interfaces: [Extra]
  };
  NinePatchInfo.prototype.computeScale_89dyev$ = function (bounds, callback) {
    var ry = 0;
    var yindex = 0;
    for (var tmp$ = this.ysegments.iterator(); tmp$.hasNext(); ++yindex) {
      var y = tmp$.next();
      var segHeight = numberToInt(y.computedLength_cfr5bs$(this.yaxis, bounds.height));
      var rx = 0;
      var xindex = 0;
      for (var tmp$_0 = this.xsegments.iterator(); tmp$_0.hasNext(); ++xindex) {
        var x = tmp$_0.next();
        var segWidth = numberToInt(x.computedLength_cfr5bs$(this.xaxis, bounds.width));
        var seg = this.segments.get_za3lpa$(yindex).get_za3lpa$(xindex);
        var segLeft = rx + bounds.left | 0;
        var segTop = ry + bounds.top | 0;
        callback(seg, segLeft, segTop, segWidth, segHeight);
        rx = rx + segWidth | 0;
      }
      ry = ry + segHeight | 0;
    }
  };
  NinePatchInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchInfo',
    interfaces: []
  };
  function NinePatchInfo_init(width, height, left, top, right, bottom, $this) {
    $this = $this || Object.create(NinePatchInfo.prototype);
    NinePatchInfo.call($this, listOf([to(false, until(0, left)), to(true, until(left, right)), to(false, until(right, width))]), listOf([to(false, until(0, top)), to(true, until(top, bottom)), to(false, until(bottom, height))]), width, height);
    return $this;
  }
  function NinePatchBitmap32(bmp) {
    this.bmp = bmp;
    this.content = sliceWithBounds(this.bmp, 1, 1, this.bmp.width - 1 | 0, this.bmp.height - 1 | 0);
    var $receiver = until(1, this.bmp.width - 1 | 0);
    var tmp$;
    var first = true;
    var pos = 0;
    var startpos = 0;
    var lastRes;
    var out = ArrayList_init_0();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      var current = this.bmp.get_vux9f0$(it, 0).a !== 0;
      if (!first) {
        if (!equals(current, lastRes == null ? throwUPAE('lastRes') : lastRes)) {
          var element = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
          out.add_11rb$(element);
          startpos = pos;
        }}lastRes = current;
      first = false;
      pos = pos + 1 | 0;
    }
    if (startpos !== pos) {
      var element_0 = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
      out.add_11rb$(element_0);
    }var $receiver_0 = until(1, this.bmp.height - 1 | 0);
    var tmp$_0;
    var first_0 = true;
    var pos_0 = 0;
    var startpos_0 = 0;
    var lastRes_0;
    var out_0 = ArrayList_init_0();
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var it_0 = tmp$_0.next();
      var current_0 = this.bmp.get_vux9f0$(0, it_0).a !== 0;
      if (!first_0) {
        if (!equals(current_0, lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0)) {
          var element_1 = to(lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0, until(startpos_0, pos_0));
          out_0.add_11rb$(element_1);
          startpos_0 = pos_0;
        }}lastRes_0 = current_0;
      first_0 = false;
      pos_0 = pos_0 + 1 | 0;
    }
    if (startpos_0 !== pos_0) {
      var element_2 = to(lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0, until(startpos_0, pos_0));
      out_0.add_11rb$(element_2);
    }this.info = new NinePatchInfo(out, out_0, this.content.width, this.content.height);
    this.bmp_xjwzxv$_xan0lv$_0 = new Extra$PropertyThis(void 0, NinePatchBitmap32$bmp$lambda(this));
  }
  Object.defineProperty(NinePatchBitmap32.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'dwidth', {
    get: function () {
      return this.width;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'dheight', {
    get: function () {
      return this.height;
    }
  });
  var NinePatchBitmap32$bmp_metadata = new PropertyMetadata('bmp');
  NinePatchBitmap32.prototype.get_bmp_xjwzxv$ = function ($receiver) {
    var $this = this.bmp_xjwzxv$_xan0lv$_0;
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : NinePatchBitmap32$bmp_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : NinePatchBitmap32$bmp_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  };
  function NinePatchBitmap32$drawTo$lambda$lambda(this$NinePatchBitmap32, this$, closure$drawRegions) {
    return function (seg, segLeft, segTop, segWidth, segHeight) {
      this$.drawImage_6s4b0k$(this$NinePatchBitmap32.get_bmp_xjwzxv$(seg), numberToDouble(segLeft), numberToDouble(segTop), numberToDouble(segWidth), numberToDouble(segHeight));
      if (closure$drawRegions) {
        var $this = this$;
        var color = Colors_getInstance().RED;
        var lineWidth;
        var lineCap;
        var lineJoin;
        lineWidth = $this.lineWidth;
        lineCap = $this.lineCap;
        lineJoin = $this.lineJoin;
        rect(this$, numberToDouble(segLeft), numberToDouble(segTop), numberToDouble(segWidth), numberToDouble(segHeight));
        $this.lineWidth = lineWidth;
        $this.lineCap = lineCap;
        $this.lineJoin = lineJoin;
        $this.stroke_9bhh2t$(new ColorPaint(color));
      }return Unit;
    };
  }
  NinePatchBitmap32.prototype.drawTo_i0i8t6$ = function (other, bounds, antialiased, drawRegions) {
    if (antialiased === void 0)
      antialiased = true;
    if (drawRegions === void 0)
      drawRegions = false;
    other.lock();
    try {
      var ctx = other.getContext2d_6taknv$(antialiased);
      try {
        this.info.computeScale_89dyev$(bounds, NinePatchBitmap32$drawTo$lambda$lambda(this, ctx, drawRegions));
      }finally {
        ctx.dispose();
      }
    }finally {
      other.unlock_2epnwg$(null);
    }
    return other;
  };
  NinePatchBitmap32.prototype.rendered_wnu51o$ = function (width, height, antialiased, drawRegions) {
    if (antialiased === void 0)
      antialiased = true;
    if (drawRegions === void 0)
      drawRegions = false;
    return this.drawTo_i0i8t6$(NativeImage_0(width, height), RectangleInt.Companion.invoke_tjonv8$(0, 0, width, height), antialiased, drawRegions).toBMP32();
  };
  function NinePatchBitmap32$bmp$lambda(this$NinePatchBitmap32) {
    return function ($receiver) {
      return this$NinePatchBitmap32.content.slice_t9mhyo$($receiver.rect).extract();
    };
  }
  NinePatchBitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchBitmap32',
    interfaces: []
  };
  function asNinePatch($receiver) {
    return new NinePatchBitmap32($receiver.toBMP32());
  }
  function Coroutine$readNinePatch($receiver_0, format_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$format = format_0;
  }
  Coroutine$readNinePatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNinePatch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNinePatch.prototype.constructor = Coroutine$readNinePatch;
  Coroutine$readNinePatch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$format === void 0)
              this.local$format = RegisteredImageFormats_getInstance();
            this.state_0 = 2;
            this.result_0 = readBitmap_1(this.local$$receiver, this.local$format, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new NinePatchBitmap32(this.result_0.toBMP32());
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
  function readNinePatch($receiver_0, format_0, continuation_0, suspended) {
    var instance = new Coroutine$readNinePatch($receiver_0, format_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var computeRle = wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver, callback) {
      var tmp$;
      var first = true;
      var pos = 0;
      var startpos = 0;
      var lastRes;
      var out = ArrayList_init();
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var it = tmp$.next();
        var current = callback(it);
        if (!first) {
          if (!equals(current, lastRes == null ? throwUPAE('lastRes') : lastRes)) {
            var element = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
            out.add_11rb$(element);
            startpos = pos;
          }}lastRes = current;
        first = false;
        pos = pos + 1 | 0;
      }
      if (startpos !== pos) {
        var element_0 = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
        out.add_11rb$(element_0);
      }return out;
    };
  });
  function PSNR() {
    PSNR_instance = this;
  }
  PSNR.prototype.MSE_h1jruv$ = function (a, b, c) {
    var tmp$;
    if (!((tmp$ = a.size) != null ? tmp$.equals(b.size) : null))
      invalidOp(a.size.toString() + ' != ' + b.size);
    var area = a.area;
    var sum = 0.0;
    for (var n = 0; n < area; n++) {
      var v = c.extract_md34sx$(a.data.get_za3lpa$(n)) - c.extract_md34sx$(b.data.get_za3lpa$(n)) | 0;
      sum += Kotlin.imul(v, v);
    }
    return sum / area;
  };
  PSNR.prototype.MSE_6bycng$ = function (a, b) {
    var $receiver = BitmapChannel$Companion_getInstance().ALL;
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(this.MSE_h1jruv$(a, b, item));
    }
    return sum_0(destination) / 4.0;
  };
  PSNR.prototype.PSNR_0 = function (a, b, mse) {
    var x = 255 / Math_0.sqrt(mse);
    return 20.0 * Math_0.log10(x);
  };
  PSNR.prototype.invoke_6bycng$ = function (a, b) {
    return this.PSNR_0(a, b, this.MSE_6bycng$(a, b));
  };
  PSNR.prototype.invoke_h1jruv$ = function (a, b, c) {
    return this.PSNR_0(a, b, this.MSE_h1jruv$(a, b, c));
  };
  PSNR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSNR',
    interfaces: []
  };
  var PSNR_instance = null;
  function PSNR_getInstance() {
    if (PSNR_instance === null) {
      new PSNR();
    }return PSNR_instance;
  }
  function psnrDiffTo($receiver, that) {
    return computePsnr(Bitmap32$Companion_getInstance(), $receiver, that);
  }
  function computePsnr($receiver, a, b) {
    return PSNR_getInstance().invoke_6bycng$(a, b);
  }
  function Atlas(slices) {
    this.slices = slices;
  }
  Object.defineProperty(Atlas.prototype, 'slicesByName', {
    get: function () {
      var $receiver = this.slices;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(element.name, element);
      }
      return destination;
    }
  });
  Object.defineProperty(Atlas.prototype, 'size', {
    get: function () {
      return this.slices.size;
    }
  });
  Atlas.prototype.get_61zpoe$ = function (name) {
    return ensureNotNull(this.slicesByName.get_11rb$(name));
  };
  Atlas.prototype.get_za3lpa$ = function (index) {
    return ensureNotNull(this.slices.get_za3lpa$(index));
  };
  Atlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas',
    interfaces: []
  };
  function MutableAtlas(binPacker, border, premultiplied, allowToGrow) {
    if (border === void 0)
      border = 2;
    if (premultiplied === void 0)
      premultiplied = true;
    if (allowToGrow === void 0)
      allowToGrow = true;
    this.binPacker = binPacker;
    this.border = border;
    this.premultiplied = premultiplied;
    this.allowToGrow = allowToGrow;
    this.bitmap = new Bitmap32(this.width, this.height, void 0, this.premultiplied);
    this.entries = ArrayList_init_0();
    this.entriesByName = LinkedHashMap_init();
  }
  Object.defineProperty(MutableAtlas.prototype, 'width', {
    get: function () {
      return numberToInt(this.binPacker.width);
    }
  });
  Object.defineProperty(MutableAtlas.prototype, 'height', {
    get: function () {
      return numberToInt(this.binPacker.height);
    }
  });
  function MutableAtlas$Entry(slice, data) {
    this.slice = slice;
    this.data = data;
  }
  Object.defineProperty(MutableAtlas$Entry.prototype, 'name', {
    get: function () {
      return this.slice.name;
    }
  });
  MutableAtlas$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  MutableAtlas$Entry.prototype.component1 = function () {
    return this.slice;
  };
  MutableAtlas$Entry.prototype.component2 = function () {
    return this.data;
  };
  MutableAtlas$Entry.prototype.copy_v71953$ = function (slice, data) {
    return new MutableAtlas$Entry(slice === void 0 ? this.slice : slice, data === void 0 ? this.data : data);
  };
  MutableAtlas$Entry.prototype.toString = function () {
    return 'Entry(slice=' + Kotlin.toString(this.slice) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  MutableAtlas$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.slice) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  MutableAtlas$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.slice, other.slice) && Kotlin.equals(this.data, other.data)))));
  };
  Object.defineProperty(MutableAtlas.prototype, 'size', {
    get: function () {
      return this.entries.size;
    }
  });
  MutableAtlas.prototype.reconstructWithSize_vux9f0$ = function (width, height) {
    var tmp$;
    var slices = toList(this.entries);
    this.binPacker = BinPacker.Companion.invoke_1v2kpa$(width, height);
    this.bitmap = new Bitmap32(width, height, void 0, this.premultiplied);
    this.entriesByName.clear();
    this.entries.clear();
    tmp$ = slices.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      this.add_1707f$(entry.slice, entry.data, entry.slice.name);
    }
  };
  MutableAtlas.prototype.add_rdndlk$ = function (bmp, data, name) {
    if (name === void 0)
      name = 'Slice' + this.size;
    return this.add_1707f$(slice(bmp), data, name);
  };
  MutableAtlas.prototype.add_1707f$ = function (bmp, data, name) {
    if (name === void 0)
      name = 'Slice' + this.size;
    try {
      var rect = this.binPacker.add_lu1900$(bmp.width + (this.border * 2 | 0), bmp.height + (this.border * 2 | 0));
      var slice = sliceWithSize_1(this.bitmap, numberToInt(rect.left + this.border), numberToInt(rect.top + this.border), bmp.width, bmp.height, name);
      var dstX = slice.left;
      var dstY = slice.top;
      this.bitmap.draw_a26vum$(bmp, dstX, dstY);
      var entry = new MutableAtlas$Entry(slice, data);
      this.entries.add_11rb$(entry);
      this.entriesByName.put_xwzc9p$(name, entry);
      var tmp$;
      tmp$ = this.bitmap;
      tmp$.contentVersion = tmp$.contentVersion + 1 | 0;
      return entry;
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!this.allowToGrow)
          throw e;
        this.reconstructWithSize_vux9f0$(this.width * 2 | 0, this.height * 2 | 0);
        return this.add_1707f$(bmp, data, name);
      } else
        throw e;
    }
  };
  MutableAtlas.prototype.toImmutable = function () {
    var bitmap = this.bitmap.clone();
    var $receiver = this.entries;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var slice = item.slice;
      destination.add_11rb$(sliceWithBounds(bitmap, slice.left, slice.top, slice.width, slice.height, slice.name));
    }
    return new Atlas(destination);
  };
  MutableAtlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableAtlas',
    interfaces: []
  };
  function MutableAtlas_init(width, height, border, allowToGrow, $this) {
    if (border === void 0)
      border = 2;
    if (allowToGrow === void 0)
      allowToGrow = true;
    $this = $this || Object.create(MutableAtlas.prototype);
    MutableAtlas.call($this, BinPacker.Companion.invoke_1v2kpa$(width, height), border);
    return $this;
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
  function blur($receiver, r) {
    var out = new Bitmap32($receiver.width + (r * 2 | 0) | 0, $receiver.height + (r * 2 | 0) | 0, void 0, $receiver.premultiplied);
    Bitmap32$Companion_getInstance().copyRect_dpalmc$($receiver, 0, 0, out, r, r, $receiver.width, $receiver.height);
    out.premultiplyInplace();
    blurInplace(out, r);
    if (!$receiver.premultiplied) {
      out.depremultiplyInplace();
    }return out;
  }
  function blur_0($receiver, r) {
    var out = new Bitmap8($receiver.width + (r * 2 | 0) | 0, $receiver.height + (r * 2 | 0) | 0);
    Bitmap8$Companion_getInstance().copyRect_42fywk$($receiver, 0, 0, out, r, r, $receiver.width, $receiver.height);
    blurInplace_0(out, r);
    return out;
  }
  function blurInplace($receiver, r) {
    var r_0 = coerceAtMost(coerceAtMost(r, ($receiver.width / 2 | 0) - 1 | 0), ($receiver.height / 2 | 0) - 1 | 0);
    var t1 = new Bitmap8($receiver.width, $receiver.height);
    var t2 = new Bitmap8($receiver.width, $receiver.height);
    for (var n = 0; n < 4; n++) {
      var channel = BitmapChannel$Companion_getInstance().get_za3lpa$(n);
      $receiver.extractChannel_z3s5mf$(channel, t1);
      arrayCopy(t1.data, t2.data, 0, 0, 0 + t2.area | 0);
      gaussBlur(new UByteArray_init(t1.data), new UByteArray_init(t2.data), $receiver.width, $receiver.height, r_0);
      $receiver.writeChannel_z3s5mf$(channel, t2);
    }
  }
  function blurInplace_0($receiver, r) {
    var r_0 = coerceAtMost(coerceAtMost(r, ($receiver.width / 2 | 0) - 1 | 0), ($receiver.height / 2 | 0) - 1 | 0);
    var t2 = new Bitmap8($receiver.width, $receiver.height);
    arrayCopy($receiver.data, t2.data, 0, 0, 0 + $receiver.area | 0);
    gaussBlur(new UByteArray_init(t2.data), new UByteArray_init($receiver.data), $receiver.width, $receiver.height, r_0);
  }
  function gaussBlur$lambda(closure$a, closure$b, closure$c) {
    return function (v0, v1, v2) {
      closure$a.v = v0;
      closure$b.v = v1;
      closure$c.v = v2;
      return Unit;
    };
  }
  function gaussBlur(scl, tcl, w, h, r) {
    var a = {v: 0};
    var b = {v: 0};
    var c = {v: 0};
    boxesForGaussN3(r, gaussBlur$lambda(a, b, c));
    boxBlur(scl, tcl, w, h, (a.v - 1 | 0) / 2 | 0);
    boxBlur(tcl, scl, w, h, (b.v - 1 | 0) / 2 | 0);
    boxBlur(scl, tcl, w, h, (c.v - 1 | 0) / 2 | 0);
  }
  function boxBlur(scl, tcl, w, h, r) {
    arrayCopy(scl.storage, tcl.storage, 0, 0, 0 + scl.size | 0);
    boxBlurH(tcl, scl, w, h, r);
    boxBlurT(scl, tcl, w, h, r);
  }
  function boxBlurH(scl, tcl, w, h, r) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var arr = r + r + 1 | 0;
    for (var i = 0; i < h; i++) {
      var ti = Kotlin.imul(i, w);
      var li = ti;
      var ri = ti + r | 0;
      var fv = scl.get_za3lpa$(ti).data & 255;
      var lv = scl.get_za3lpa$(ti + w - 1 | 0).data & 255;
      var v = Kotlin.imul(r + 1 | 0, fv);
      for (var j = 0; j < r; j++) {
        v = v + (scl.get_za3lpa$(ti + j | 0).data & 255) | 0;
      }
      for (var j_0 = 0; j_0 <= r; j_0++) {
        var tmp$_3;
        v = v + ((scl.get_za3lpa$((tmp$_3 = ri, ri = tmp$_3 + 1 | 0, tmp$_3)).data & 255) - fv) | 0;
        tcl.set_2c6cbe$((tmp$ = ti, ti = tmp$ + 1 | 0, tmp$), new UByte_init(toByte(v / arr | 0)));
      }
      tmp$_0 = w - r | 0;
      for (var j_1 = r + 1 | 0; j_1 < tmp$_0; j_1++) {
        var tmp$_4, tmp$_5;
        v = v + ((scl.get_za3lpa$((tmp$_4 = ri, ri = tmp$_4 + 1 | 0, tmp$_4)).data & 255) - (scl.get_za3lpa$((tmp$_5 = li, li = tmp$_5 + 1 | 0, tmp$_5)).data & 255)) | 0;
        tcl.set_2c6cbe$((tmp$_1 = ti, ti = tmp$_1 + 1 | 0, tmp$_1), new UByte_init(toByte(v / arr | 0)));
      }
      for (var j_2 = w - r | 0; j_2 < w; j_2++) {
        var tmp$_6;
        v = v + (lv - (scl.get_za3lpa$((tmp$_6 = li, li = tmp$_6 + 1 | 0, tmp$_6)).data & 255)) | 0;
        tcl.set_2c6cbe$((tmp$_2 = ti, ti = tmp$_2 + 1 | 0, tmp$_2), new UByte_init(toByte(v / arr | 0)));
      }
    }
  }
  function boxBlurT(scl, tcl, w, h, r) {
    var tmp$;
    var arr = r + r + 1 | 0;
    for (var i = 0; i < w; i++) {
      var ti = i;
      var li = ti;
      var ri = ti + Kotlin.imul(r, w) | 0;
      var fv = scl.get_za3lpa$(ti).data & 255;
      var lv = scl.get_za3lpa$(ti + Kotlin.imul(w, h - 1 | 0) | 0).data & 255;
      var v = Kotlin.imul(r + 1 | 0, fv);
      for (var j = 0; j < r; j++) {
        v = v + (scl.get_za3lpa$(ti + Kotlin.imul(j, w) | 0).data & 255) | 0;
      }
      for (var j_0 = 0; j_0 <= r; j_0++) {
        v = v + ((scl.get_za3lpa$(ri).data & 255) - fv) | 0;
        tcl.set_2c6cbe$(ti, new UByte_init(toByte(v / arr | 0)));
        ri = ri + w | 0;
        ti = ti + w | 0;
      }
      tmp$ = h - r | 0;
      for (var j_1 = r + 1 | 0; j_1 < tmp$; j_1++) {
        v = v + ((scl.get_za3lpa$(ri).data & 255) - (scl.get_za3lpa$(li).data & 255)) | 0;
        tcl.set_2c6cbe$(ti, new UByte_init(toByte(v / arr | 0)));
        li = li + w | 0;
        ri = ri + w | 0;
        ti = ti + w | 0;
      }
      for (var j_2 = h - r | 0; j_2 < h; j_2++) {
        v = v + (lv - (scl.get_za3lpa$(li).data & 255)) | 0;
        tcl.set_2c6cbe$(ti, new UByte_init(toByte(v / arr | 0)));
        li = li + w | 0;
        ti = ti + w | 0;
      }
    }
  }
  function boxesForGaussN3(sigma, emit) {
    var n = 3;
    var x = 12.0 * sigma * sigma / n + 1;
    var wIdeal = Math_0.sqrt(x);
    var wl = toIntFloor(wIdeal);
    if (wl % 2 === 0) {
      wl = wl - 1 | 0;
    }var wu = wl + 2 | 0;
    var mIdeal = (12.0 * sigma * sigma - Kotlin.imul(Kotlin.imul(n, wl), wl) - Kotlin.imul(4 * n | 0, wl) - (3 * n | 0)) / ((-4 * wl | 0) - 4 | 0);
    var m = round(mIdeal);
    emit(0 < m ? wl : wu, 1 < m ? wl : wu, 2 < m ? wl : wu);
  }
  function dropShadow($receiver, x, y, r, color) {
    if (color === void 0)
      color = Colors_getInstance().BLACK;
    var pcolor = color.premultiplied;
    var tmp$ = abs(x);
    var b = abs(y);
    var add = Math_0.max(tmp$, b) + r | 0;
    var out = new Bitmap32($receiver.width + (add * 2 | 0) | 0, $receiver.height + (add * 2 | 0) | 0, void 0, true);
    var $receiver_0 = blur_0($receiver.extractChannel_z3s5mf$(BitmapChannel$ALPHA_getInstance()), r);
    $receiver_0.premultiplied = true;
    for (var n = 0; n < 256; n++) {
      $receiver_0.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(Kotlin.imul(pcolor.r, n) / 255 | 0, Kotlin.imul(pcolor.g, n) / 255 | 0, Kotlin.imul(pcolor.b, n) / 255 | 0, Kotlin.imul(pcolor.a, n) / 255 | 0));
    }
    var shadow = $receiver_0.toBMP32();
    out.draw_dryc6d$(shadow, add + x - r | 0, add + y - r | 0);
    out.draw_dryc6d$($receiver, add, add);
    return out;
  }
  function dropShadowInplace($receiver, x, y, r, color) {
    if (color === void 0)
      color = Colors_getInstance().BLACK;
    var copy = $receiver.clone();
    var pcolor = color.premultiplied;
    var $receiver_0 = blur_0($receiver.extractChannel_z3s5mf$(BitmapChannel$ALPHA_getInstance()), r);
    $receiver_0.premultiplied = true;
    for (var n = 0; n < 256; n++) {
      $receiver_0.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(Kotlin.imul(pcolor.r, n) / 255 | 0, Kotlin.imul(pcolor.g, n) / 255 | 0, Kotlin.imul(pcolor.b, n) / 255 | 0, Kotlin.imul(pcolor.a, n) / 255 | 0));
    }
    var shadow = $receiver_0.toBMP32();
    $receiver.fill_kuukgh$(Colors_getInstance().TRANSPARENT_BLACK);
    $receiver.draw_dryc6d$(shadow, x - r | 0, y - r | 0);
    $receiver.draw_dryc6d$(copy, 0, 0);
    return $receiver;
  }
  function glow($receiver, r, color) {
    if (color === void 0)
      color = Colors_getInstance().BLACK;
    return dropShadow($receiver, 0, 0, r, color);
  }
  function glowInplace($receiver, r, color) {
    if (color === void 0)
      color = Colors_getInstance().BLACK;
    return dropShadowInplace($receiver, 0, 0, r, color);
  }
  function ARGB() {
    ARGB_instance = this;
    this.$delegate_mcsiax$_0 = new ColorFormat$Mixin(32, 8, 8, 16, 8, 24, 8, 0, 8);
  }
  Object.defineProperty(ARGB.prototype, 'bpp', {
    get: function () {
      return this.$delegate_mcsiax$_0.bpp;
    }
  });
  ARGB.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getA_za3lpa$(v);
  };
  ARGB.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getB_za3lpa$(v);
  };
  ARGB.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getG_za3lpa$(v);
  };
  ARGB.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getR_za3lpa$(v);
  };
  ARGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsiax$_0.pack_tjonv8$(r, g, b, a);
  };
  ARGB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ARGB',
    interfaces: [ColorFormat]
  };
  var ARGB_instance = null;
  function ARGB_getInstance() {
    if (ARGB_instance === null) {
      new ARGB();
    }return ARGB_instance;
  }
  function BGRA() {
    BGRA_instance = this;
    this.$delegate_mcsxe9$_0 = new ColorFormat$Mixin(32, 16, 8, 8, 8, 0, 8, 24, 8);
  }
  BGRA.prototype.rgbaToBgra_za3lpa$ = function (v) {
    return v << 16 & 16711680 | v >> 16 & 255 | v & -16711936;
  };
  BGRA.prototype.bgraToRgba_za3lpa$ = function (v) {
    return this.rgbaToBgra_za3lpa$(v);
  };
  BGRA.prototype.rgbaToBgra_nd5v6f$ = function (v, offset, count) {
    var tmp$;
    tmp$ = offset + count | 0;
    for (var n = offset; n < tmp$; n++)
      v[n] = this.rgbaToBgra_za3lpa$(v[n]);
  };
  BGRA.prototype.bgraToRgba_nd5v6f$ = function (v, offset, count) {
    var tmp$;
    tmp$ = offset + count | 0;
    for (var n = offset; n < tmp$; n++)
      v[n] = this.bgraToRgba_za3lpa$(v[n]);
  };
  Object.defineProperty(BGRA.prototype, 'bpp', {
    get: function () {
      return this.$delegate_mcsxe9$_0.bpp;
    }
  });
  BGRA.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getA_za3lpa$(v);
  };
  BGRA.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getB_za3lpa$(v);
  };
  BGRA.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getG_za3lpa$(v);
  };
  BGRA.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getR_za3lpa$(v);
  };
  BGRA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsxe9$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA',
    interfaces: [ColorFormat]
  };
  var BGRA_instance = null;
  function BGRA_getInstance() {
    if (BGRA_instance === null) {
      new BGRA();
    }return BGRA_instance;
  }
  function CMYK(value) {
    CMYK$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(CMYK.prototype, 'c', {
    get: function () {
      return extract8(this.value, 0);
    }
  });
  Object.defineProperty(CMYK.prototype, 'm', {
    get: function () {
      return extract8(this.value, 8);
    }
  });
  Object.defineProperty(CMYK.prototype, 'y', {
    get: function () {
      return extract8(this.value, 16);
    }
  });
  Object.defineProperty(CMYK.prototype, 'k', {
    get: function () {
      return extract8(this.value, 24);
    }
  });
  Object.defineProperty(CMYK.prototype, 'cf', {
    get: function () {
      return this.c / 255.0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'mf', {
    get: function () {
      return this.m / 255.0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'yf', {
    get: function () {
      return this.y / 255.0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'kf', {
    get: function () {
      return this.k / 255.0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'r', {
    get: function () {
      return 255 - clamp0_255(Kotlin.imul(this.c, 1 - (this.k / 255 | 0) | 0) + this.k | 0) | 0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'g', {
    get: function () {
      return 255 - clamp0_255(Kotlin.imul(this.m, 1 - (this.k / 255 | 0) | 0) + this.k | 0) | 0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'b', {
    get: function () {
      return 255 - clamp0_255(Kotlin.imul(this.y, 1 - (this.k / 255 | 0) | 0) + this.k | 0) | 0;
    }
  });
  Object.defineProperty(CMYK.prototype, 'a', {
    get: function () {
      return 255;
    }
  });
  CMYK.prototype.toRGBA = function () {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r, this.g, this.b, this.a);
  };
  function CMYK$Companion() {
    CMYK$Companion_instance = this;
    ColorFormat32.call(this);
  }
  CMYK$Companion.prototype.invoke_tjonv8$ = function (c, m, y, k) {
    return new CMYK(RGBA$Companion_getInstance().pack_tjonv8$(c, m, y, k));
  };
  CMYK$Companion.prototype.float_7b5o5w$ = function (c, m, y, k) {
    return new CMYK(RGBA$Companion_getInstance().float_7b5o5w$(c, m, y, k).value);
  };
  CMYK$Companion.prototype.invoke_md34sx$ = function (rgba) {
    var r0 = rgba.rf;
    var g0 = rgba.gf;
    var b0 = rgba.bf;
    var a = Math_0.max(r0, g0);
    var k = 1.0 - Math_0.max(a, b0);
    var ik = 1.0 / (1 - k);
    var c = (1.0 - r0 - k) * ik;
    var m = (1.0 - g0 - k) * ik;
    var y = (1.0 - b0 - k) * ik;
    return this.float_7b5o5w$(c, m, y, k);
  };
  CMYK$Companion.prototype.getR_za3lpa$ = function (v) {
    return (new CMYK(v)).c;
  };
  CMYK$Companion.prototype.getG_za3lpa$ = function (v) {
    return (new CMYK(v)).m;
  };
  CMYK$Companion.prototype.getB_za3lpa$ = function (v) {
    return (new CMYK(v)).y;
  };
  CMYK$Companion.prototype.getA_za3lpa$ = function (v) {
    return (new CMYK(v)).k;
  };
  CMYK$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  CMYK$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var CMYK$Companion_instance = null;
  function CMYK$Companion_getInstance() {
    if (CMYK$Companion_instance === null) {
      new CMYK$Companion();
    }return CMYK$Companion_instance;
  }
  CMYK.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CMYK',
    interfaces: []
  };
  CMYK.prototype.unbox = function () {
    return this.value;
  };
  CMYK.prototype.toString = function () {
    return 'CMYK(value=' + Kotlin.toString(this.value) + ')';
  };
  CMYK.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  CMYK.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function toCMYK($receiver) {
    return CMYK$Companion_getInstance().invoke_md34sx$($receiver);
  }
  function ColorFormat() {
  }
  function ColorFormat$Mixin(bpp, rOffset, rSize, gOffset, gSize, bOffset, bSize, aOffset, aSize) {
    this.bpp_hky9yu$_0 = bpp;
    this.rOffset = rOffset;
    this.rSize = rSize;
    this.gOffset = gOffset;
    this.gSize = gSize;
    this.bOffset = bOffset;
    this.bSize = bSize;
    this.aOffset = aOffset;
    this.aSize = aSize;
  }
  Object.defineProperty(ColorFormat$Mixin.prototype, 'bpp', {
    get: function () {
      return this.bpp_hky9yu$_0;
    }
  });
  ColorFormat$Mixin.prototype.getR_za3lpa$ = function (v) {
    return extractScaledFF(v, this.rOffset, this.rSize);
  };
  ColorFormat$Mixin.prototype.getG_za3lpa$ = function (v) {
    return extractScaledFF(v, this.gOffset, this.gSize);
  };
  ColorFormat$Mixin.prototype.getB_za3lpa$ = function (v) {
    return extractScaledFF(v, this.bOffset, this.bSize);
  };
  ColorFormat$Mixin.prototype.getA_za3lpa$ = function (v) {
    return extractScaledFFDefault(v, this.aOffset, this.aSize, 255);
  };
  ColorFormat$Mixin.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insertScaledFF(insertScaledFF(insertScaledFF(insertScaledFF(0, r, this.rOffset, this.rSize), g, this.gOffset, this.gSize), b, this.bOffset, this.bSize), a, this.aOffset, this.aSize);
  };
  ColorFormat$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [ColorFormat]
  };
  ColorFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ColorFormat',
    interfaces: []
  };
  function ColorFormat16() {
  }
  ColorFormat16.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ColorFormat16',
    interfaces: [ColorFormat]
  };
  function ColorFormat24() {
    this.bpp_8lor5z$_0 = 24;
  }
  Object.defineProperty(ColorFormat24.prototype, 'bpp', {
    get: function () {
      return this.bpp_8lor5z$_0;
    }
  });
  ColorFormat24.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat24',
    interfaces: [ColorFormat]
  };
  function ColorFormat32() {
    this.bpp_mbzslm$_0 = 32;
  }
  Object.defineProperty(ColorFormat32.prototype, 'bpp', {
    get: function () {
      return this.bpp_mbzslm$_0;
    }
  });
  ColorFormat32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat32',
    interfaces: [ColorFormat]
  };
  function numberOfBytes($receiver, pixels) {
    return Kotlin.imul(pixels, $receiver.bpp) / 8 | 0;
  }
  function get_bytesPerPixel($receiver) {
    return $receiver.bpp / 8;
  }
  function toRGBA($receiver, v) {
    return RGBA$Companion_getInstance().invoke_tjonv8$($receiver.getR_za3lpa$(v), $receiver.getG_za3lpa$(v), $receiver.getB_za3lpa$(v), $receiver.getA_za3lpa$(v));
  }
  function packRGBA($receiver, c) {
    return $receiver.pack_tjonv8$(c.r, c.g, c.b, c.a);
  }
  function getRf($receiver, v) {
    return $receiver.getR_za3lpa$(v) / 255.0;
  }
  function getGf($receiver, v) {
    return $receiver.getG_za3lpa$(v) / 255.0;
  }
  function getBf($receiver, v) {
    return $receiver.getB_za3lpa$(v) / 255.0;
  }
  function getAf($receiver, v) {
    return $receiver.getA_za3lpa$(v) / 255.0;
  }
  function getRd($receiver, v) {
    return $receiver.getR_za3lpa$(v) / 255.0;
  }
  function getGd($receiver, v) {
    return $receiver.getG_za3lpa$(v) / 255.0;
  }
  function getBd($receiver, v) {
    return $receiver.getB_za3lpa$(v) / 255.0;
  }
  function getAd($receiver, v) {
    return $receiver.getA_za3lpa$(v) / 255.0;
  }
  function unpackToRGBA($receiver, packed) {
    return RGBA$Companion_getInstance().invoke_tjonv8$($receiver.getR_za3lpa$(packed), $receiver.getG_za3lpa$(packed), $receiver.getB_za3lpa$(packed), $receiver.getA_za3lpa$(packed));
  }
  function convertTo($receiver, color, target) {
    return target.pack_tjonv8$($receiver.getR_za3lpa$(color), $receiver.getG_za3lpa$(color), $receiver.getB_za3lpa$(color), $receiver.getA_za3lpa$(color));
  }
  var decodeInternal = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.decodeInternal_4v8vnc$', wrapFunction(function () {
    var get_bytesPerPixel = _.com.soywiz.korim.color.get_bytesPerPixel_igxz2m$;
    var numberToInt = Kotlin.numberToInt;
    var RGBA = _.com.soywiz.korim.color.RGBA;
    return function ($receiver, data, dataOffset, out, outOffset, size, read) {
      var tmp$;
      var io = dataOffset;
      var oo = outOffset;
      var bytesPerPixel = get_bytesPerPixel($receiver);
      var outdata = out;
      var Bpp = numberToInt(bytesPerPixel);
      for (var n = 0; n < size; n++) {
        var c = read(data, io);
        io = io + Bpp | 0;
        outdata.set_vlvk8p$((tmp$ = oo, oo = tmp$ + 1 | 0, tmp$), RGBA.Companion.invoke_tjonv8$($receiver.getR_za3lpa$(c), $receiver.getG_za3lpa$(c), $receiver.getB_za3lpa$(c), $receiver.getA_za3lpa$(c)));
      }
    };
  }));
  function decode($receiver, data, dataOffset, out, outOffset, size, littleEndian) {
    if (littleEndian === void 0)
      littleEndian = true;
    var tmp$;
    switch ($receiver.bpp) {
      case 16:
        tmp$ = littleEndian ? getCallableRef('readU16LE', function ($receiver, o) {
          return readU16LE($receiver, o);
        }) : getCallableRef('readU16BE', function ($receiver, o) {
          return readU16BE($receiver, o);
        });
        break;
      case 24:
        tmp$ = littleEndian ? getCallableRef('readU24LE', function ($receiver, o) {
          return readU24LE($receiver, o);
        }) : getCallableRef('readU24BE', function ($receiver, o) {
          return readU24BE($receiver, o);
        });
        break;
      case 32:
        tmp$ = littleEndian ? getCallableRef('readS32LE', function ($receiver, o) {
          return readS32LE($receiver, o);
        }) : getCallableRef('readS32BE', function ($receiver, o) {
          return readS32BE($receiver, o);
        });
        break;
      default:throw IllegalArgumentException_init('Unsupported bpp ' + $receiver.bpp);
    }
    var readFunc = tmp$;
    var tmp$_0;
    var io = dataOffset;
    var oo = outOffset;
    var bytesPerPixel = get_bytesPerPixel($receiver);
    var outdata = out;
    var Bpp = numberToInt(bytesPerPixel);
    for (var n = 0; n < size; n++) {
      var c = readFunc(data, io);
      io = io + Bpp | 0;
      outdata.set_vlvk8p$((tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0), RGBA.Companion.invoke_tjonv8$($receiver.getR_za3lpa$(c), $receiver.getG_za3lpa$(c), $receiver.getB_za3lpa$(c), $receiver.getA_za3lpa$(c)));
    }
  }
  function decode_0($receiver, data, dataOffset, size, littleEndian) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (size === void 0)
      size = numberToInt(data.length / get_bytesPerPixel($receiver));
    if (littleEndian === void 0)
      littleEndian = true;
    var out = RgbaArray$Companion_getInstance().invoke_za3lpa$(size);
    decode($receiver, data, dataOffset, out, 0, size, littleEndian);
    return out;
  }
  function decodeToBitmap32($receiver, width, height, data, dataOffset, littleEndian) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return new Bitmap32(width, height, decode_0($receiver, data, dataOffset, Kotlin.imul(width, height), littleEndian));
  }
  function decodeToBitmap32_0($receiver, bmp, data, dataOffset, littleEndian) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    decode($receiver, data, dataOffset, bmp.data, 0, bmp.area);
    return bmp;
  }
  function encode($receiver, colors, colorsOffset, out, outOffset, size, littleEndian) {
    if (littleEndian === void 0)
      littleEndian = true;
    var tmp$;
    var io = colorsOffset;
    var oo = outOffset;
    var Bpp = numberToInt(get_bytesPerPixel($receiver));
    for (var n = 0; n < size; n++) {
      var c = colors.get_za3lpa$((tmp$ = io, io = tmp$ + 1 | 0, tmp$));
      var ec = $receiver.pack_tjonv8$(c.r, c.g, c.b, c.a);
      switch ($receiver.bpp) {
        case 16:
          if (littleEndian)
            write16LE(out, oo, ec);
          else
            write16BE(out, oo, ec);
          break;
        case 24:
          if (littleEndian)
            write24LE(out, oo, ec);
          else
            write24BE(out, oo, ec);
          break;
        case 32:
          if (littleEndian)
            write32LE(out, oo, ec);
          else
            write32BE(out, oo, ec);
          break;
        default:throw IllegalArgumentException_init('Unsupported bpp ' + $receiver.bpp);
      }
      oo = oo + Bpp | 0;
    }
  }
  function encode_0($receiver, colors, colorsOffset, size, littleEndian) {
    if (colorsOffset === void 0)
      colorsOffset = 0;
    if (size === void 0)
      size = colors.size;
    if (littleEndian === void 0)
      littleEndian = true;
    var out = new Int8Array(numberToInt(size * get_bytesPerPixel($receiver)));
    encode($receiver, colors, colorsOffset, out, 0, size, littleEndian);
    return out;
  }
  function encode_1($receiver, colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = toShort($receiver.pack_tjonv8$(RGBA$Companion_getInstance().getR_za3lpa$(c), RGBA$Companion_getInstance().getG_za3lpa$(c), RGBA$Companion_getInstance().getB_za3lpa$(c), RGBA$Companion_getInstance().getA_za3lpa$(c)));
    }
  }
  function encode_2($receiver, colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = $receiver.pack_tjonv8$(RGBA$Companion_getInstance().getR_za3lpa$(c), RGBA$Companion_getInstance().getG_za3lpa$(c), RGBA$Companion_getInstance().getB_za3lpa$(c), RGBA$Companion_getInstance().getA_za3lpa$(c));
    }
  }
  function ColorMatrix(rr, rb, rg, ra, r1, gr, gb, gg, ga, g1, br, bb, bg, ba, b1, ar, ab, ag, aa, a1) {
    ColorMatrix$Companion_getInstance();
    this.rr = rr;
    this.rb = rb;
    this.rg = rg;
    this.ra = ra;
    this.r1 = r1;
    this.gr = gr;
    this.gb = gb;
    this.gg = gg;
    this.ga = ga;
    this.g1 = g1;
    this.br = br;
    this.bb = bb;
    this.bg = bg;
    this.ba = ba;
    this.b1 = b1;
    this.ar = ar;
    this.ab = ab;
    this.ag = ag;
    this.aa = aa;
    this.a1 = a1;
  }
  function ColorMatrix$Companion() {
    ColorMatrix$Companion_instance = this;
    this.IDENTITY_y07cct$_0 = lazy(ColorMatrix$Companion$IDENTITY$lambda);
  }
  Object.defineProperty(ColorMatrix$Companion.prototype, 'IDENTITY', {
    get: function () {
      return this.IDENTITY_y07cct$_0.value;
    }
  });
  ColorMatrix$Companion.prototype.invoke = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorMatrix.Companion.invoke', wrapFunction(function () {
    var ColorMatrix_init = _.com.soywiz.korim.color.ColorMatrix;
    return function () {
      return new ColorMatrix_init(1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
    };
  }));
  ColorMatrix$Companion.prototype.invoke_2i5j78$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorMatrix.Companion.invoke_2i5j78$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var ColorMatrix_init = _.com.soywiz.korim.color.ColorMatrix;
    return function (rr, rb, rg, ra, r1, gr, gb, gg, ga, g1, br, bb, bg, ba, b1, ar, ab, ag, aa, a1) {
      return new ColorMatrix_init(numberToDouble(rr), numberToDouble(rb), numberToDouble(rg), numberToDouble(ra), numberToDouble(r1), numberToDouble(gr), numberToDouble(gb), numberToDouble(gg), numberToDouble(ga), numberToDouble(g1), numberToDouble(br), numberToDouble(bb), numberToDouble(bg), numberToDouble(ba), numberToDouble(b1), numberToDouble(ar), numberToDouble(ab), numberToDouble(ag), numberToDouble(aa), numberToDouble(a1));
    };
  }));
  ColorMatrix$Companion.prototype.concat_mpemus$ = function (v0, v1) {
    return new ColorMatrix(v0.rr * v1.rr, v0.rg * v1.rg, v0.rb * v1.rb, v0.ra * v1.ra, v0.r1 + v1.r1, v0.gr * v1.gr, v0.gg * v1.gg, v0.gb * v1.gb, v0.ga * v1.ga, v0.g1 + v1.g1, v0.br * v1.br, v0.bg * v1.bg, v0.bb * v1.bb, v0.ba * v1.ba, v0.b1 + v1.b1, v0.ar * v1.ar, v0.ag * v1.ag, v0.ab * v1.ab, v0.aa * v1.aa, v0.a1 + v1.a1);
  };
  function ColorMatrix$Companion$IDENTITY$lambda() {
    return new ColorMatrix(1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
  }
  ColorMatrix$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorMatrix$Companion_instance = null;
  function ColorMatrix$Companion_getInstance() {
    if (ColorMatrix$Companion_instance === null) {
      new ColorMatrix$Companion();
    }return ColorMatrix$Companion_instance;
  }
  ColorMatrix.prototype.plus_y5ldi1$ = function (that) {
    return ColorMatrix$Companion_getInstance().concat_mpemus$(this, that);
  };
  ColorMatrix.prototype.copyR_8f6bxe$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorMatrix.copyR_8f6bxe$', wrapFunction(function () {
    var ColorMatrix = _.com.soywiz.korim.color.ColorMatrix;
    var numberToDouble = Kotlin.numberToDouble;
    return function (rr, rb, rg, ra, r1) {
      var gr = this.gr;
      var gb = this.gb;
      var gg = this.gg;
      var ga = this.ga;
      var g1 = this.g1;
      var br = this.br;
      var bb = this.bb;
      var bg = this.bg;
      var ba = this.ba;
      var b1 = this.b1;
      var ar = this.ar;
      var ab = this.ab;
      var ag = this.ag;
      var aa = this.aa;
      var a1 = this.a1;
      return new ColorMatrix(numberToDouble(rr), numberToDouble(rb), numberToDouble(rg), numberToDouble(ra), numberToDouble(r1), numberToDouble(gr), numberToDouble(gb), numberToDouble(gg), numberToDouble(ga), numberToDouble(g1), numberToDouble(br), numberToDouble(bb), numberToDouble(bg), numberToDouble(ba), numberToDouble(b1), numberToDouble(ar), numberToDouble(ab), numberToDouble(ag), numberToDouble(aa), numberToDouble(a1));
    };
  }));
  ColorMatrix.prototype.copyG_8f6bxe$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorMatrix.copyG_8f6bxe$', wrapFunction(function () {
    var ColorMatrix = _.com.soywiz.korim.color.ColorMatrix;
    var numberToDouble = Kotlin.numberToDouble;
    return function (gr, gb, gg, ga, g1) {
      var rr = this.rr;
      var rb = this.rb;
      var rg = this.rg;
      var ra = this.ra;
      var r1 = this.r1;
      var br = this.br;
      var bb = this.bb;
      var bg = this.bg;
      var ba = this.ba;
      var b1 = this.b1;
      var ar = this.ar;
      var ab = this.ab;
      var ag = this.ag;
      var aa = this.aa;
      var a1 = this.a1;
      return new ColorMatrix(numberToDouble(rr), numberToDouble(rb), numberToDouble(rg), numberToDouble(ra), numberToDouble(r1), numberToDouble(gr), numberToDouble(gb), numberToDouble(gg), numberToDouble(ga), numberToDouble(g1), numberToDouble(br), numberToDouble(bb), numberToDouble(bg), numberToDouble(ba), numberToDouble(b1), numberToDouble(ar), numberToDouble(ab), numberToDouble(ag), numberToDouble(aa), numberToDouble(a1));
    };
  }));
  ColorMatrix.prototype.copyB_8f6bxe$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorMatrix.copyB_8f6bxe$', wrapFunction(function () {
    var ColorMatrix = _.com.soywiz.korim.color.ColorMatrix;
    var numberToDouble = Kotlin.numberToDouble;
    return function (br, bb, bg, ba, b1) {
      var rr = this.rr;
      var rb = this.rb;
      var rg = this.rg;
      var ra = this.ra;
      var r1 = this.r1;
      var gr = this.gr;
      var gb = this.gb;
      var gg = this.gg;
      var ga = this.ga;
      var g1 = this.g1;
      var ar = this.ar;
      var ab = this.ab;
      var ag = this.ag;
      var aa = this.aa;
      var a1 = this.a1;
      return new ColorMatrix(numberToDouble(rr), numberToDouble(rb), numberToDouble(rg), numberToDouble(ra), numberToDouble(r1), numberToDouble(gr), numberToDouble(gb), numberToDouble(gg), numberToDouble(ga), numberToDouble(g1), numberToDouble(br), numberToDouble(bb), numberToDouble(bg), numberToDouble(ba), numberToDouble(b1), numberToDouble(ar), numberToDouble(ab), numberToDouble(ag), numberToDouble(aa), numberToDouble(a1));
    };
  }));
  ColorMatrix.prototype.copyA_8f6bxe$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorMatrix.copyA_8f6bxe$', wrapFunction(function () {
    var ColorMatrix = _.com.soywiz.korim.color.ColorMatrix;
    var numberToDouble = Kotlin.numberToDouble;
    return function (ar, ab, ag, aa, a1) {
      var rr = this.rr;
      var rb = this.rb;
      var rg = this.rg;
      var ra = this.ra;
      var r1 = this.r1;
      var gr = this.gr;
      var gb = this.gb;
      var gg = this.gg;
      var ga = this.ga;
      var g1 = this.g1;
      var br = this.br;
      var bb = this.bb;
      var bg = this.bg;
      var ba = this.ba;
      var b1 = this.b1;
      return new ColorMatrix(numberToDouble(rr), numberToDouble(rb), numberToDouble(rg), numberToDouble(ra), numberToDouble(r1), numberToDouble(gr), numberToDouble(gb), numberToDouble(gg), numberToDouble(ga), numberToDouble(g1), numberToDouble(br), numberToDouble(bb), numberToDouble(bg), numberToDouble(ba), numberToDouble(b1), numberToDouble(ar), numberToDouble(ab), numberToDouble(ag), numberToDouble(aa), numberToDouble(a1));
    };
  }));
  ColorMatrix.prototype.applyR_7b5o5w$ = function (r, g, b, a) {
    return this.rr * r + this.rg * g + this.rb * b + this.ra * a + this.r1;
  };
  ColorMatrix.prototype.applyG_7b5o5w$ = function (r, g, b, a) {
    return this.gr * r + this.gg * g + this.gb * b + this.ga * a + this.g1;
  };
  ColorMatrix.prototype.applyB_7b5o5w$ = function (r, g, b, a) {
    return this.br * r + this.bg * g + this.bb * b + this.ba * a + this.b1;
  };
  ColorMatrix.prototype.applyA_7b5o5w$ = function (r, g, b, a) {
    return this.ar * r + this.ag * g + this.ab * b + this.aa * a + this.a1;
  };
  ColorMatrix.prototype.apply_6s7ues$ = function (dst, src) {
    if (src === void 0)
      src = dst;
    var r = src.r;
    var g = src.g;
    var b = src.b;
    var a = src.a;
    dst.setTo_7b5o5w$(this.applyR_7b5o5w$(r, g, b, a), this.applyG_7b5o5w$(r, g, b, a), this.applyB_7b5o5w$(r, g, b, a), this.applyA_7b5o5w$(r, g, b, a));
  };
  ColorMatrix.prototype.applyInline_melyw8$ = function (array, pos, count) {
    if (pos === void 0)
      pos = 0;
    if (count === void 0)
      count = array.size;
    var tmp$;
    tmp$ = pos + count | 0;
    for (var n = pos; n < tmp$; n++) {
      array.set_vlvk8p$(n, this.transform_md34sx$(array.get_za3lpa$(n)));
    }
  };
  ColorMatrix.prototype.transform_md34sx$ = function (src) {
    var r = src.rf;
    var g = src.gf;
    var b = src.bf;
    var a = src.af;
    return RGBA$Companion_getInstance().float_7b5o5w$(this.applyR_7b5o5w$(r, g, b, a), this.applyG_7b5o5w$(r, g, b, a), this.applyB_7b5o5w$(r, g, b, a), this.applyA_7b5o5w$(r, g, b, a));
  };
  ColorMatrix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorMatrix',
    interfaces: []
  };
  ColorMatrix.prototype.component1 = function () {
    return this.rr;
  };
  ColorMatrix.prototype.component2 = function () {
    return this.rb;
  };
  ColorMatrix.prototype.component3 = function () {
    return this.rg;
  };
  ColorMatrix.prototype.component4 = function () {
    return this.ra;
  };
  ColorMatrix.prototype.component5 = function () {
    return this.r1;
  };
  ColorMatrix.prototype.component6 = function () {
    return this.gr;
  };
  ColorMatrix.prototype.component7 = function () {
    return this.gb;
  };
  ColorMatrix.prototype.component8 = function () {
    return this.gg;
  };
  ColorMatrix.prototype.component9 = function () {
    return this.ga;
  };
  ColorMatrix.prototype.component10 = function () {
    return this.g1;
  };
  ColorMatrix.prototype.component11 = function () {
    return this.br;
  };
  ColorMatrix.prototype.component12 = function () {
    return this.bb;
  };
  ColorMatrix.prototype.component13 = function () {
    return this.bg;
  };
  ColorMatrix.prototype.component14 = function () {
    return this.ba;
  };
  ColorMatrix.prototype.component15 = function () {
    return this.b1;
  };
  ColorMatrix.prototype.component16 = function () {
    return this.ar;
  };
  ColorMatrix.prototype.component17 = function () {
    return this.ab;
  };
  ColorMatrix.prototype.component18 = function () {
    return this.ag;
  };
  ColorMatrix.prototype.component19 = function () {
    return this.aa;
  };
  ColorMatrix.prototype.component20 = function () {
    return this.a1;
  };
  ColorMatrix.prototype.copy_i23ejw$ = function (rr, rb, rg, ra, r1, gr, gb, gg, ga, g1, br, bb, bg, ba, b1, ar, ab, ag, aa, a1) {
    return new ColorMatrix(rr === void 0 ? this.rr : rr, rb === void 0 ? this.rb : rb, rg === void 0 ? this.rg : rg, ra === void 0 ? this.ra : ra, r1 === void 0 ? this.r1 : r1, gr === void 0 ? this.gr : gr, gb === void 0 ? this.gb : gb, gg === void 0 ? this.gg : gg, ga === void 0 ? this.ga : ga, g1 === void 0 ? this.g1 : g1, br === void 0 ? this.br : br, bb === void 0 ? this.bb : bb, bg === void 0 ? this.bg : bg, ba === void 0 ? this.ba : ba, b1 === void 0 ? this.b1 : b1, ar === void 0 ? this.ar : ar, ab === void 0 ? this.ab : ab, ag === void 0 ? this.ag : ag, aa === void 0 ? this.aa : aa, a1 === void 0 ? this.a1 : a1);
  };
  ColorMatrix.prototype.toString = function () {
    return 'ColorMatrix(rr=' + Kotlin.toString(this.rr) + (', rb=' + Kotlin.toString(this.rb)) + (', rg=' + Kotlin.toString(this.rg)) + (', ra=' + Kotlin.toString(this.ra)) + (', r1=' + Kotlin.toString(this.r1)) + (', gr=' + Kotlin.toString(this.gr)) + (', gb=' + Kotlin.toString(this.gb)) + (', gg=' + Kotlin.toString(this.gg)) + (', ga=' + Kotlin.toString(this.ga)) + (', g1=' + Kotlin.toString(this.g1)) + (', br=' + Kotlin.toString(this.br)) + (', bb=' + Kotlin.toString(this.bb)) + (', bg=' + Kotlin.toString(this.bg)) + (', ba=' + Kotlin.toString(this.ba)) + (', b1=' + Kotlin.toString(this.b1)) + (', ar=' + Kotlin.toString(this.ar)) + (', ab=' + Kotlin.toString(this.ab)) + (', ag=' + Kotlin.toString(this.ag)) + (', aa=' + Kotlin.toString(this.aa)) + (', a1=' + Kotlin.toString(this.a1)) + ')';
  };
  ColorMatrix.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rr) | 0;
    result = result * 31 + Kotlin.hashCode(this.rb) | 0;
    result = result * 31 + Kotlin.hashCode(this.rg) | 0;
    result = result * 31 + Kotlin.hashCode(this.ra) | 0;
    result = result * 31 + Kotlin.hashCode(this.r1) | 0;
    result = result * 31 + Kotlin.hashCode(this.gr) | 0;
    result = result * 31 + Kotlin.hashCode(this.gb) | 0;
    result = result * 31 + Kotlin.hashCode(this.gg) | 0;
    result = result * 31 + Kotlin.hashCode(this.ga) | 0;
    result = result * 31 + Kotlin.hashCode(this.g1) | 0;
    result = result * 31 + Kotlin.hashCode(this.br) | 0;
    result = result * 31 + Kotlin.hashCode(this.bb) | 0;
    result = result * 31 + Kotlin.hashCode(this.bg) | 0;
    result = result * 31 + Kotlin.hashCode(this.ba) | 0;
    result = result * 31 + Kotlin.hashCode(this.b1) | 0;
    result = result * 31 + Kotlin.hashCode(this.ar) | 0;
    result = result * 31 + Kotlin.hashCode(this.ab) | 0;
    result = result * 31 + Kotlin.hashCode(this.ag) | 0;
    result = result * 31 + Kotlin.hashCode(this.aa) | 0;
    result = result * 31 + Kotlin.hashCode(this.a1) | 0;
    return result;
  };
  ColorMatrix.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rr, other.rr) && Kotlin.equals(this.rb, other.rb) && Kotlin.equals(this.rg, other.rg) && Kotlin.equals(this.ra, other.ra) && Kotlin.equals(this.r1, other.r1) && Kotlin.equals(this.gr, other.gr) && Kotlin.equals(this.gb, other.gb) && Kotlin.equals(this.gg, other.gg) && Kotlin.equals(this.ga, other.ga) && Kotlin.equals(this.g1, other.g1) && Kotlin.equals(this.br, other.br) && Kotlin.equals(this.bb, other.bb) && Kotlin.equals(this.bg, other.bg) && Kotlin.equals(this.ba, other.ba) && Kotlin.equals(this.b1, other.b1) && Kotlin.equals(this.ar, other.ar) && Kotlin.equals(this.ab, other.ab) && Kotlin.equals(this.ag, other.ag) && Kotlin.equals(this.aa, other.aa) && Kotlin.equals(this.a1, other.a1)))));
  };
  function transform($receiver, matrix) {
    return matrix.transform_md34sx$($receiver);
  }
  function swizzle($receiver, comps) {
    return RGBA$Companion_getInstance().invoke_tjonv8$($receiver.getComponent_s8itvh$(0 >= 0 && 0 <= get_lastIndex(comps) ? comps.charCodeAt(0) : unboxChar(toBoxedChar(114))), $receiver.getComponent_s8itvh$(1 >= 0 && 1 <= get_lastIndex(comps) ? comps.charCodeAt(1) : unboxChar(toBoxedChar(103))), $receiver.getComponent_s8itvh$(2 >= 0 && 2 <= get_lastIndex(comps) ? comps.charCodeAt(2) : unboxChar(toBoxedChar(98))), $receiver.getComponent_s8itvh$(3 >= 0 && 3 <= get_lastIndex(comps) ? comps.charCodeAt(3) : unboxChar(toBoxedChar(97))));
  }
  function ColorTransform(_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    ColorTransform$Companion_getInstance();
    this._mR_0 = _mR;
    this._mG_0 = _mG;
    this._mB_0 = _mB;
    this._mA_0 = _mA;
    this._aR_0 = _aR;
    this._aG_0 = _aG;
    this._aB_0 = _aB;
    this._aA_0 = _aA;
    this.dirty_0 = true;
    this._colorMul_0 = Colors_getInstance().WHITE;
    this._colorAdd_0 = 0;
  }
  function ColorTransform$Companion() {
    ColorTransform$Companion_instance = this;
    this.identity = new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(0), numberToInt(0), numberToInt(0), numberToInt(0));
  }
  ColorTransform$Companion.prototype.Multiply_6y0v78$ = function (r, g, b, a) {
    return new ColorTransform(r, g, b, a, 0, 0, 0, 0);
  };
  ColorTransform$Companion.prototype.Add_tjonv8$ = function (r, g, b, a) {
    return new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(r), numberToInt(g), numberToInt(b), numberToInt(a));
  };
  ColorTransform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorTransform$Companion_instance = null;
  function ColorTransform$Companion_getInstance() {
    if (ColorTransform$Companion_instance === null) {
      new ColorTransform$Companion();
    }return ColorTransform$Companion_instance;
  }
  ColorTransform.prototype.setToInterpolated_bs4suk$ = function (ratio, l, r) {
    return this.setTo_s3cjg4$(interpolate(ratio, l.mR, r.mR), interpolate(ratio, l.mG, r.mG), interpolate(ratio, l.mB, r.mB), interpolate(ratio, l.mA, r.mA), interpolate_0(ratio, l.aR, r.aR), interpolate_0(ratio, l.aG, r.aG), interpolate_0(ratio, l.aB, r.aB), interpolate_0(ratio, l.aA, r.aA));
  };
  ColorTransform.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return (new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(0), numberToInt(0), numberToInt(0), numberToInt(0))).setToInterpolated_bs4suk$(ratio, this, other);
  };
  ColorTransform.prototype.computeColors_0 = function () {
    if (this.dirty_0) {
      this.dirty_0 = false;
      this._colorMul_0 = RGBA$Companion_getInstance().float_7b5o5w$(this._mR_0, this._mG_0, this._mB_0, this._mA_0);
      this._colorAdd_0 = ColorAdd$Companion_getInstance().pack_tjonv8$(this._aR_0, this._aG_0, this._aB_0, this._aA_0);
    }return this;
  };
  Object.defineProperty(ColorTransform.prototype, 'colorMul', {
    get: function () {
      return this.computeColors_0()._colorMul_0;
    },
    set: function (v) {
      var mR = v.rd;
      var mG = v.gd;
      var mB = v.bd;
      var mA = v.ad;
      if (this._mR_0 !== mR || this._mG_0 !== mG || this._mB_0 !== mB || this._mA_0 !== mA) {
        this._mR_0 = mR;
        this._mG_0 = mG;
        this._mB_0 = mB;
        this._mA_0 = mA;
        this.dirty_0 = true;
      }}
  });
  Object.defineProperty(ColorTransform.prototype, 'colorAdd', {
    get: function () {
      return this.computeColors_0()._colorAdd_0;
    },
    set: function (v) {
      var c = new RGBA(v);
      this.aR = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(c.r);
      this.aG = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(c.g);
      this.aB = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(c.b);
      this.aA = ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(c.a);
      if (this._aR_0 !== this.aR || this._aG_0 !== this.aG || this._aB_0 !== this.aB || this._aA_0 !== this.aA) {
        this._aR_0 = this.aR;
        this._aG_0 = this.aG;
        this._aB_0 = this.aB;
        this._aA_0 = this.aA;
        this.dirty_0 = true;
      }}
  });
  Object.defineProperty(ColorTransform.prototype, 'mR', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mG', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mB', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mA', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mRf', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mGf', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mBf', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mAf', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aR', {
    get: function () {
      return this._aR_0;
    },
    set: function (v) {
      this._aR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aG', {
    get: function () {
      return this._aG_0;
    },
    set: function (v) {
      this._aG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aB', {
    get: function () {
      return this._aB_0;
    },
    set: function (v) {
      this._aB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aA', {
    get: function () {
      return this._aA_0;
    },
    set: function (v) {
      this._aA_0 = v;
      this.dirty_0 = true;
    }
  });
  ColorTransform.prototype.setMultiplyTo_6y0v78$ = function (mR, mG, mB, mA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setAddTo_tjonv8$ = function (aR, aG, aB, aA) {
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setTo_s3cjg4$ = function (mR, mG, mB, mA, aR, aG, aB, aA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.copyFrom_54kf7e$ = function (t) {
    this._mR_0 = t._mR_0;
    this._mG_0 = t._mG_0;
    this._mB_0 = t._mB_0;
    this._mA_0 = t._mA_0;
    this._aR_0 = t._aR_0;
    this._aG_0 = t._aG_0;
    this._aB_0 = t._aB_0;
    this._aA_0 = t._aA_0;
    this.dirty_0 = t.dirty_0;
    this._colorAdd_0 = t._colorAdd_0;
    this._colorMul_0 = t._colorMul_0;
    return this;
  };
  ColorTransform.prototype.setToConcat_k8ycrk$ = function (l, r) {
    return this.setTo_s3cjg4$(l.mR * r.mR, l.mG * r.mG, l.mB * r.mB, l.mA * r.mA, l.aR + r.aR | 0, l.aG + r.aG | 0, l.aB + r.aB | 0, l.aA + r.aA | 0);
  };
  ColorTransform.prototype.toString = function () {
    return 'ColorTransform(*[' + get_niceStr(this.mR) + ', ' + get_niceStr(this.mG) + ', ' + get_niceStr(this.mB) + ', ' + get_niceStr(this.mA) + ']+[' + this.aR + ', ' + this.aG + ', ' + this.aB + ', ' + this.aA + '])';
  };
  ColorTransform.prototype.isIdentity = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.mA === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.hasJustAlpha = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.setToIdentity = function () {
    return this.setTo_s3cjg4$(1.0, 1.0, 1.0, 1.0, 0, 0, 0, 0);
  };
  ColorTransform.prototype.applyToColor_za3lpa$ = function (color) {
    var r = numberToInt((new RGBA(color)).r * this.mR + this.aR);
    var g = numberToInt((new RGBA(color)).g * this.mG + this.aG);
    var b = numberToInt((new RGBA(color)).b * this.mB + this.aB);
    var a = numberToInt((new RGBA(color)).a * this.mA + this.aA);
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  ColorTransform.prototype.applyToRGBA_md34sx$ = function (color) {
    return new RGBA(this.applyToColor_za3lpa$(color.value));
  };
  ColorTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorTransform',
    interfaces: [Interpolable, MutableInterpolable]
  };
  ColorTransform.prototype.component1_0 = function () {
    return this._mR_0;
  };
  ColorTransform.prototype.component2_0 = function () {
    return this._mG_0;
  };
  ColorTransform.prototype.component3_0 = function () {
    return this._mB_0;
  };
  ColorTransform.prototype.component4_0 = function () {
    return this._mA_0;
  };
  ColorTransform.prototype.component5_0 = function () {
    return this._aR_0;
  };
  ColorTransform.prototype.component6_0 = function () {
    return this._aG_0;
  };
  ColorTransform.prototype.component7_0 = function () {
    return this._aB_0;
  };
  ColorTransform.prototype.component8_0 = function () {
    return this._aA_0;
  };
  ColorTransform.prototype.copy_s3cjg4$ = function (_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    return new ColorTransform(_mR === void 0 ? this._mR_0 : _mR, _mG === void 0 ? this._mG_0 : _mG, _mB === void 0 ? this._mB_0 : _mB, _mA === void 0 ? this._mA_0 : _mA, _aR === void 0 ? this._aR_0 : _aR, _aG === void 0 ? this._aG_0 : _aG, _aB === void 0 ? this._aB_0 : _aB, _aA === void 0 ? this._aA_0 : _aA);
  };
  ColorTransform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._mR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mA_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aA_0) | 0;
    return result;
  };
  ColorTransform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._mR_0, other._mR_0) && Kotlin.equals(this._mG_0, other._mG_0) && Kotlin.equals(this._mB_0, other._mB_0) && Kotlin.equals(this._mA_0, other._mA_0) && Kotlin.equals(this._aR_0, other._aR_0) && Kotlin.equals(this._aG_0, other._aG_0) && Kotlin.equals(this._aB_0, other._aB_0) && Kotlin.equals(this._aA_0, other._aA_0)))));
  };
  function ColorAdd(rgba) {
    ColorAdd$Companion_getInstance();
    this.rgba = rgba;
  }
  Object.defineProperty(ColorAdd.prototype, 'r', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 0 & 255);
    }
  });
  Object.defineProperty(ColorAdd.prototype, 'g', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 8 & 255);
    }
  });
  Object.defineProperty(ColorAdd.prototype, 'b', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 16 & 255);
    }
  });
  Object.defineProperty(ColorAdd.prototype, 'a', {
    get: function () {
      return ColorAdd$Companion_getInstance().unpackComponent_za3lpa$(this.rgba >>> 24 & 255);
    }
  });
  ColorAdd.prototype.withR_za3lpa$ = function (r) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(r, this.g, this.b, this.a);
  };
  ColorAdd.prototype.withG_za3lpa$ = function (g) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(this.r, g, this.b, this.a);
  };
  ColorAdd.prototype.withB_za3lpa$ = function (b) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(this.r, this.g, b, this.a);
  };
  ColorAdd.prototype.withA_za3lpa$ = function (a) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$(this.r, this.g, this.b, a);
  };
  ColorAdd.prototype.toInt = function () {
    return this.rgba;
  };
  function ColorAdd$Companion() {
    ColorAdd$Companion_instance = this;
  }
  ColorAdd$Companion.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return new ColorAdd(this.pack_tjonv8$(r, g, b, a));
  };
  ColorAdd$Companion.prototype.packComponent_za3lpa$ = function (v) {
    return clamp(127 + (v >> 1) | 0, 0, 255);
  };
  ColorAdd$Companion.prototype.unpackComponent_za3lpa$ = function (v) {
    return (v - 127 | 0) * 2 | 0;
  };
  ColorAdd$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return ColorAdd$Companion_getInstance().packComponent_za3lpa$(r) << 0 | ColorAdd$Companion_getInstance().packComponent_za3lpa$(g) << 8 | ColorAdd$Companion_getInstance().packComponent_za3lpa$(b) << 16 | ColorAdd$Companion_getInstance().packComponent_za3lpa$(a) << 24;
  };
  ColorAdd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorAdd$Companion_instance = null;
  function ColorAdd$Companion_getInstance() {
    if (ColorAdd$Companion_instance === null) {
      new ColorAdd$Companion();
    }return ColorAdd$Companion_instance;
  }
  ColorAdd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorAdd',
    interfaces: []
  };
  ColorAdd.prototype.unbox = function () {
    return this.rgba;
  };
  ColorAdd.prototype.toString = function () {
    return 'ColorAdd(rgba=' + Kotlin.toString(this.rgba) + ')';
  };
  ColorAdd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rgba) | 0;
    return result;
  };
  ColorAdd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.rgba, other.rgba))));
  };
  function toColorAdd($receiver) {
    return ColorAdd$Companion_getInstance().invoke_tjonv8$($receiver.r, $receiver.g, $receiver.b, $receiver.a);
  }
  var ColorTransform_0 = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorTransform_d3e2w0$', wrapFunction(function () {
    var ColorAdd = _.com.soywiz.korim.color.ColorAdd;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (multiply, add) {
      if (add === void 0)
        add = ColorAdd.Companion.invoke_tjonv8$(0, 0, 0, 0);
      var mR = multiply.rf;
      var mG = multiply.gf;
      var mB = multiply.bf;
      var mA = multiply.af;
      var aR = add.r;
      var aG = add.g;
      var aB = add.b;
      var aA = add.a;
      return new ColorTransform_init(numberToDouble(mR), numberToDouble(mG), numberToDouble(mB), numberToDouble(mA), numberToInt(aR), numberToInt(aG), numberToInt(aB), numberToInt(aA));
    };
  }));
  var ColorTransform_1 = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.ColorTransform_6tck58$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (mR, mG, mB, mA, aR, aG, aB, aA) {
      if (mR === void 0)
        mR = 1;
      if (mG === void 0)
        mG = 1;
      if (mB === void 0)
        mB = 1;
      if (mA === void 0)
        mA = 1;
      if (aR === void 0)
        aR = 0;
      if (aG === void 0)
        aG = 0;
      if (aB === void 0)
        aB = 0;
      if (aA === void 0)
        aA = 0;
      return new ColorTransform_init(numberToDouble(mR), numberToDouble(mG), numberToDouble(mB), numberToDouble(mA), numberToInt(aR), numberToInt(aG), numberToInt(aB), numberToInt(aA));
    };
  }));
  function transform_0($receiver, transform) {
    return transform.applyToRGBA_md34sx$($receiver);
  }
  function Colors() {
    Colors_instance = this;
    this.WHITE = RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 255);
    this.BLACK = RGBA$Companion_getInstance().invoke_tjonv8$(0, 0, 0, 255);
    this.RED = RGBA$Companion_getInstance().invoke_tjonv8$(255, 0, 0, 255);
    this.GREEN = RGBA$Companion_getInstance().invoke_tjonv8$(0, 255, 0, 255);
    this.BLUE = RGBA$Companion_getInstance().invoke_tjonv8$(0, 0, 255, 255);
    this.TRANSPARENT_BLACK = RGBA$Companion_getInstance().invoke_tjonv8$(0, 0, 0, 0);
    this.TRANSPARENT_WHITE = RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 0);
    this.ALICEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 248, 255);
    this.ANTIQUEWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 235, 215);
    this.AQUA = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 255);
    this.AQUAMARINE = RGBA$Companion_getInstance().invoke_qt1dr2$(127, 255, 212);
    this.AZURE = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 255, 255);
    this.BEIGE = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 245, 220);
    this.BISQUE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 228, 196);
    this.BLANCHEDALMOND = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 235, 205);
    this.BLUEVIOLET = RGBA$Companion_getInstance().invoke_qt1dr2$(138, 43, 226);
    this.BROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(165, 42, 42);
    this.BURLYWOOD = RGBA$Companion_getInstance().invoke_qt1dr2$(222, 184, 135);
    this.CADETBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(95, 158, 160);
    this.CHARTREUSE = RGBA$Companion_getInstance().invoke_qt1dr2$(127, 255, 0);
    this.CHOCOLATE = RGBA$Companion_getInstance().invoke_qt1dr2$(210, 105, 30);
    this.CORAL = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 127, 80);
    this.CORNFLOWERBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(100, 149, 237);
    this.CORNSILK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 248, 220);
    this.CRIMSON = RGBA$Companion_getInstance().invoke_qt1dr2$(220, 20, 60);
    this.DARKBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 0, 139);
    this.CYAN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 255);
    this.DARKCYAN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 139, 139);
    this.DARKGOLDENROD = RGBA$Companion_getInstance().invoke_qt1dr2$(184, 134, 11);
    this.DARKGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(169, 169, 169);
    this.DARKGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 100, 0);
    this.DARKGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(169, 169, 169);
    this.DARKKHAKI = RGBA$Companion_getInstance().invoke_qt1dr2$(189, 183, 107);
    this.MAGENTA = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 0, 255);
    this.DARKMAGENTA = RGBA$Companion_getInstance().invoke_qt1dr2$(139, 0, 139);
    this.DARKOLIVEGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(85, 107, 47);
    this.DARKORANGE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 140, 0);
    this.DARKORCHID = RGBA$Companion_getInstance().invoke_qt1dr2$(153, 50, 204);
    this.DARKRED = RGBA$Companion_getInstance().invoke_qt1dr2$(139, 0, 0);
    this.DARKSALMON = RGBA$Companion_getInstance().invoke_qt1dr2$(233, 150, 122);
    this.DARKSEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(143, 188, 143);
    this.DARKSLATEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(72, 61, 139);
    this.DARKSLATEGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(47, 79, 79);
    this.DARKSLATEGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(47, 79, 79);
    this.DARKTURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 206, 209);
    this.DARKVIOLET = RGBA$Companion_getInstance().invoke_qt1dr2$(148, 0, 211);
    this.DEEPPINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 20, 147);
    this.DEEPSKYBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 191, 255);
    this.DIMGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(105, 105, 105);
    this.DIMGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(105, 105, 105);
    this.DODGERBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(30, 144, 255);
    this.FIREBRICK = RGBA$Companion_getInstance().invoke_qt1dr2$(178, 34, 34);
    this.FLORALWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 250, 240);
    this.FORESTGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(34, 139, 34);
    this.FUCHSIA = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 0, 255);
    this.GAINSBORO = RGBA$Companion_getInstance().invoke_qt1dr2$(220, 220, 220);
    this.GHOSTWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(248, 248, 255);
    this.GOLD = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 215, 0);
    this.GOLDENROD = RGBA$Companion_getInstance().invoke_qt1dr2$(218, 165, 32);
    this.GREENYELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(173, 255, 47);
    this.HONEYDEW = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 255, 240);
    this.HOTPINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 105, 180);
    this.INDIANRED = RGBA$Companion_getInstance().invoke_qt1dr2$(205, 92, 92);
    this.INDIGO = RGBA$Companion_getInstance().invoke_qt1dr2$(75, 0, 130);
    this.IVORY = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 255, 240);
    this.KHAKI = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 230, 140);
    this.LAVENDER = RGBA$Companion_getInstance().invoke_qt1dr2$(230, 230, 250);
    this.LAVENDERBLUSH = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 240, 245);
    this.LAWNGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(124, 252, 0);
    this.LEMONCHIFFON = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 250, 205);
    this.LIGHTBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(173, 216, 230);
    this.LIGHTCORAL = RGBA$Companion_getInstance().invoke_qt1dr2$(240, 128, 128);
    this.LIGHTCYAN = RGBA$Companion_getInstance().invoke_qt1dr2$(224, 255, 255);
    this.LIGHTGOLDENRODYELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 250, 210);
    this.LIGHTGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(211, 211, 211);
    this.LIGHTGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(144, 238, 144);
    this.LIGHTGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(211, 211, 211);
    this.LIGHTPINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 182, 193);
    this.LIGHTSALMON = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 160, 122);
    this.LIGHTSEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(32, 178, 170);
    this.LIGHTSKYBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(135, 206, 250);
    this.LIGHTSLATEGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(119, 136, 153);
    this.LIGHTSLATEGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(119, 136, 153);
    this.LIGHTSTEELBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(176, 196, 222);
    this.LIGHTYELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 255, 224);
    this.LIME = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 0);
    this.LIMEGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(50, 205, 50);
    this.LINEN = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 240, 230);
    this.MAROON = RGBA$Companion_getInstance().invoke_qt1dr2$(128, 0, 0);
    this.MEDIUMAQUAMARINE = RGBA$Companion_getInstance().invoke_qt1dr2$(102, 205, 170);
    this.MEDIUMBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 0, 205);
    this.MEDIUMORCHID = RGBA$Companion_getInstance().invoke_qt1dr2$(186, 85, 211);
    this.MEDIUMPURPLE = RGBA$Companion_getInstance().invoke_qt1dr2$(147, 112, 219);
    this.MEDIUMSEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(60, 179, 113);
    this.MEDIUMSLATEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(123, 104, 238);
    this.MEDIUMSPRINGGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 250, 154);
    this.MEDIUMTURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(72, 209, 204);
    this.MEDIUMVIOLETRED = RGBA$Companion_getInstance().invoke_qt1dr2$(199, 21, 133);
    this.MIDNIGHTBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(25, 25, 112);
    this.MINTCREAM = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 255, 250);
    this.MISTYROSE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 228, 225);
    this.MOCCASIN = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 228, 181);
    this.NAVAJOWHITE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 222, 173);
    this.NAVY = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 0, 128);
    this.OLDLACE = RGBA$Companion_getInstance().invoke_qt1dr2$(253, 245, 230);
    this.OLIVE = RGBA$Companion_getInstance().invoke_qt1dr2$(128, 128, 0);
    this.OLIVEDRAB = RGBA$Companion_getInstance().invoke_qt1dr2$(107, 142, 35);
    this.ORANGE = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 165, 0);
    this.ORANGERED = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 69, 0);
    this.ORCHID = RGBA$Companion_getInstance().invoke_qt1dr2$(218, 112, 214);
    this.PALEGOLDENROD = RGBA$Companion_getInstance().invoke_qt1dr2$(238, 232, 170);
    this.PALEGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(152, 251, 152);
    this.PALETURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(175, 238, 238);
    this.PALEVIOLETRED = RGBA$Companion_getInstance().invoke_qt1dr2$(219, 112, 147);
    this.PAPAYAWHIP = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 239, 213);
    this.PEACHPUFF = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 218, 185);
    this.PERU = RGBA$Companion_getInstance().invoke_qt1dr2$(205, 133, 63);
    this.PINK = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 192, 203);
    this.PLUM = RGBA$Companion_getInstance().invoke_qt1dr2$(221, 160, 221);
    this.POWDERBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(176, 224, 230);
    this.PURPLE = RGBA$Companion_getInstance().invoke_qt1dr2$(128, 0, 128);
    this.ROSYBROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(188, 143, 143);
    this.ROYALBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(65, 105, 225);
    this.SADDLEBROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(139, 69, 19);
    this.SALMON = RGBA$Companion_getInstance().invoke_qt1dr2$(250, 128, 114);
    this.SANDYBROWN = RGBA$Companion_getInstance().invoke_qt1dr2$(244, 164, 96);
    this.SEAGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(46, 139, 87);
    this.SEASHELL = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 245, 238);
    this.SIENNA = RGBA$Companion_getInstance().invoke_qt1dr2$(160, 82, 45);
    this.SILVER = RGBA$Companion_getInstance().invoke_qt1dr2$(192, 192, 192);
    this.SKYBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(135, 206, 235);
    this.SLATEBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(106, 90, 205);
    this.SLATEGRAY = RGBA$Companion_getInstance().invoke_qt1dr2$(112, 128, 144);
    this.SLATEGREY = RGBA$Companion_getInstance().invoke_qt1dr2$(112, 128, 144);
    this.SNOW = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 250, 250);
    this.SPRINGGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 255, 127);
    this.STEELBLUE = RGBA$Companion_getInstance().invoke_qt1dr2$(70, 130, 180);
    this.TAN = RGBA$Companion_getInstance().invoke_qt1dr2$(210, 180, 140);
    this.TEAL = RGBA$Companion_getInstance().invoke_qt1dr2$(0, 128, 128);
    this.THISTLE = RGBA$Companion_getInstance().invoke_qt1dr2$(216, 191, 216);
    this.TOMATO = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 99, 71);
    this.TURQUOISE = RGBA$Companion_getInstance().invoke_qt1dr2$(64, 224, 208);
    this.VIOLET = RGBA$Companion_getInstance().invoke_qt1dr2$(238, 130, 238);
    this.WHEAT = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 222, 179);
    this.WHITESMOKE = RGBA$Companion_getInstance().invoke_qt1dr2$(245, 245, 245);
    this.YELLOWGREEN = RGBA$Companion_getInstance().invoke_qt1dr2$(154, 205, 50);
    this.YELLOW = RGBA$Companion_getInstance().invoke_qt1dr2$(255, 255, 0);
    this.colorsByName = mapOf([to('black', this.BLACK), to('white', this.WHITE), to('red', this.RED), to('green', this.GREEN), to('blue', this.BLUE), to('aliceblue', this.ALICEBLUE), to('antiquewhite', this.ANTIQUEWHITE), to('aqua', this.AQUA), to('aquamarine', this.AQUAMARINE), to('azure', this.AZURE), to('beige', this.BEIGE), to('bisque', this.BISQUE), to('blanchedalmond', this.BLANCHEDALMOND), to('blueviolet', this.BLUEVIOLET), to('brown', this.BROWN), to('burlywood', this.BURLYWOOD), to('cadetblue', this.CADETBLUE), to('chartreuse', this.CHARTREUSE), to('chocolate', this.CHOCOLATE), to('coral', this.CORAL), to('cornflowerblue', this.CORNFLOWERBLUE), to('cornsilk', this.CORNSILK), to('crimson', this.CRIMSON), to('darkblue', this.DARKBLUE), to('darkcyan', this.DARKCYAN), to('darkgoldenrod', this.DARKGOLDENROD), to('darkgray', this.DARKGRAY), to('darkgreen', this.DARKGREEN), to('darkgrey', this.DARKGREY), to('darkkhaki', this.DARKKHAKI), to('darkmagenta', this.DARKMAGENTA), to('darkolivegreen', this.DARKOLIVEGREEN), to('darkorange', this.DARKORANGE), to('darkorchid', this.DARKORCHID), to('darkred', this.DARKRED), to('darksalmon', this.DARKSALMON), to('darkseagreen', this.DARKSEAGREEN), to('darkslateblue', this.DARKSLATEBLUE), to('darkslategray', this.DARKSLATEGRAY), to('darkslategrey', this.DARKSLATEGREY), to('darkturquoise', this.DARKTURQUOISE), to('darkviolet', this.DARKVIOLET), to('deeppink', this.DEEPPINK), to('deepskyblue', this.DEEPSKYBLUE), to('dimgray', this.DIMGRAY), to('dimgrey', this.DIMGREY), to('dodgerblue', this.DODGERBLUE), to('firebrick', this.FIREBRICK), to('floralwhite', this.FLORALWHITE), to('forestgreen', this.FORESTGREEN), to('fuchsia', this.FUCHSIA), to('gainsboro', this.GAINSBORO), to('ghostwhite', this.GHOSTWHITE), to('gold', this.GOLD), to('goldenrod', this.GOLDENROD), to('greenyellow', this.GREENYELLOW), to('honeydew', this.HONEYDEW), to('hotpink', this.HOTPINK), to('indianred', this.INDIANRED), to('indigo', this.INDIGO), to('ivory', this.IVORY), to('khaki', this.KHAKI), to('lavender', this.LAVENDER), to('lavenderblush', this.LAVENDERBLUSH), to('lawngreen', this.LAWNGREEN), to('lemonchiffon', this.LEMONCHIFFON), to('lightblue', this.LIGHTBLUE), to('lightcoral', this.LIGHTCORAL), to('lightcyan', this.LIGHTCYAN), to('lightgoldenrodyellow', this.LIGHTGOLDENRODYELLOW), to('lightgray', this.LIGHTGRAY), to('lightgreen', this.LIGHTGREEN), to('lightgrey', this.LIGHTGREY), to('lightpink', this.LIGHTPINK), to('lightsalmon', this.LIGHTSALMON), to('lightseagreen', this.LIGHTSEAGREEN), to('lightskyblue', this.LIGHTSKYBLUE), to('lightslategray', this.LIGHTSLATEGRAY), to('lightslategrey', this.LIGHTSLATEGREY), to('lightsteelblue', this.LIGHTSTEELBLUE), to('lightyellow', this.LIGHTYELLOW), to('lime', this.LIME), to('limegreen', this.LIMEGREEN), to('linen', this.LINEN), to('maroon', this.MAROON), to('mediumaquamarine', this.MEDIUMAQUAMARINE), to('mediumblue', this.MEDIUMBLUE), to('mediumorchid', this.MEDIUMORCHID), to('mediumpurple', this.MEDIUMPURPLE), to('mediumseagreen', this.MEDIUMSEAGREEN), to('mediumslateblue', this.MEDIUMSLATEBLUE), to('mediumspringgreen', this.MEDIUMSPRINGGREEN), to('mediumturquoise', this.MEDIUMTURQUOISE), to('mediumvioletred', this.MEDIUMVIOLETRED), to('midnightblue', this.MIDNIGHTBLUE), to('mintcream', this.MINTCREAM), to('mistyrose', this.MISTYROSE), to('moccasin', this.MOCCASIN), to('navajowhite', this.NAVAJOWHITE), to('navy', this.NAVY), to('oldlace', this.OLDLACE), to('olive', this.OLIVE), to('olivedrab', this.OLIVEDRAB), to('orange', this.ORANGE), to('orangered', this.ORANGERED), to('orchid', this.ORCHID), to('palegoldenrod', this.PALEGOLDENROD), to('palegreen', this.PALEGREEN), to('paleturquoise', this.PALETURQUOISE), to('palevioletred', this.PALEVIOLETRED), to('papayawhip', this.PAPAYAWHIP), to('peachpuff', this.PEACHPUFF), to('peru', this.PERU), to('pink', this.PINK), to('plum', this.PLUM), to('powderblue', this.POWDERBLUE), to('purple', this.PURPLE), to('rosybrown', this.ROSYBROWN), to('royalblue', this.ROYALBLUE), to('saddlebrown', this.SADDLEBROWN), to('salmon', this.SALMON), to('sandybrown', this.SANDYBROWN), to('seagreen', this.SEAGREEN), to('seashell', this.SEASHELL), to('sienna', this.SIENNA), to('silver', this.SILVER), to('skyblue', this.SKYBLUE), to('slateblue', this.SLATEBLUE), to('slategray', this.SLATEGRAY), to('slategrey', this.SLATEGREY), to('snow', this.SNOW), to('springgreen', this.SPRINGGREEN), to('steelblue', this.STEELBLUE), to('tan', this.TAN), to('teal', this.TEAL), to('thistle', this.THISTLE), to('tomato', this.TOMATO), to('turquoise', this.TURQUOISE), to('violet', this.VIOLET), to('wheat', this.WHEAT), to('whitesmoke', this.WHITESMOKE), to('yellowgreen', this.YELLOWGREEN), to('yellow', this.YELLOW)]);
  }
  Colors.prototype.get_61zpoe$ = function (str) {
    return this.get_xtzj24$(str, Colors_getInstance().TRANSPARENT_BLACK, true);
  };
  Colors.prototype.get_xtzj24$ = function (str, default_0, errorOnDefault) {
    if (errorOnDefault === void 0)
      errorOnDefault = false;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (startsWith(str, '#')) {
      var hex = substr(str, 1);
      if (!setOf([3, 4, 6, 8]).contains_11rb$(hex.length))
        return this.BLACK;
      var chars = hex.length < 6 ? 1 : 2;
      var scale = hex.length < 6 ? 255.0 / 15.0 : 1.0;
      var hasAlpha = (hex.length / chars | 0) >= 4;
      var r = numberToInt(toInt(substr_0(hex, 0 * chars | 0, chars), 16) * scale);
      var g = numberToInt(toInt(substr_0(hex, 1 * chars | 0, chars), 16) * scale);
      var b = numberToInt(toInt(substr_0(hex, 2 * chars | 0, chars), 16) * scale);
      var a = hasAlpha ? numberToInt(toInt(substr_0(hex, 3 * chars | 0, chars), 16) * scale) : 255;
      return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a);
    } else if (startsWith(str, 'RGBA(', true)) {
      var parts = split(removeSuffix(removePrefix(str.toUpperCase(), 'RGBA('), ')'), [',']);
      var r_0 = (tmp$ = toIntOrNull(0 >= 0 && 0 <= get_lastIndex_0(parts) ? parts.get_za3lpa$(0) : '0')) != null ? tmp$ : 0;
      var g_0 = (tmp$_0 = toIntOrNull(1 >= 0 && 1 <= get_lastIndex_0(parts) ? parts.get_za3lpa$(1) : '0')) != null ? tmp$_0 : 0;
      var b_0 = (tmp$_1 = toIntOrNull(2 >= 0 && 2 <= get_lastIndex_0(parts) ? parts.get_za3lpa$(2) : '0')) != null ? tmp$_1 : 0;
      var af = (tmp$_2 = toDoubleOrNull(3 >= 0 && 3 <= get_lastIndex_0(parts) ? parts.get_za3lpa$(3) : '1.0')) != null ? tmp$_2 : 1.0;
      return RGBA$Companion_getInstance().invoke_tjonv8$(r_0, g_0, b_0, numberToInt(af * 255));
    } else {
      var col = this.colorsByName.get_11rb$(str.toLowerCase());
      if (col == null && errorOnDefault) {
        throw IllegalStateException_init(("Unsupported color '" + str + "'").toString());
      }return col != null ? col : default_0;
    }
  };
  function Colors$WithDefault(defaultColor) {
    this.defaultColor = defaultColor;
  }
  Colors$WithDefault.prototype.get_61zpoe$ = function (str) {
    return Colors_getInstance().get_xtzj24$(str, this.defaultColor);
  };
  Colors$WithDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithDefault',
    interfaces: []
  };
  function Colors$Default() {
    Colors$Default_instance = this;
    Colors$WithDefault.call(this, Colors_getInstance().RED);
  }
  Colors$Default.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Default',
    interfaces: [Colors$WithDefault]
  };
  var Colors$Default_instance = null;
  function Colors$Default_getInstance() {
    if (Colors$Default_instance === null) {
      new Colors$Default();
    }return Colors$Default_instance;
  }
  Colors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Colors',
    interfaces: []
  };
  var Colors_instance = null;
  function Colors_getInstance() {
    if (Colors_instance === null) {
      new Colors();
    }return Colors_instance;
  }
  function PaletteColorFormat(palette) {
    this.palette = palette;
    this.bpp_gs9dx2$_0 = 8;
  }
  Object.defineProperty(PaletteColorFormat.prototype, 'bpp', {
    get: function () {
      return this.bpp_gs9dx2$_0;
    }
  });
  PaletteColorFormat.prototype.getR_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).r;
  };
  PaletteColorFormat.prototype.getG_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).g;
  };
  PaletteColorFormat.prototype.getB_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).b;
  };
  PaletteColorFormat.prototype.getA_za3lpa$ = function (v) {
    return this.palette.get_za3lpa$(v).a;
  };
  PaletteColorFormat.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a).value;
  };
  PaletteColorFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaletteColorFormat',
    interfaces: [ColorFormat]
  };
  function RGB(rOffset, gOffset, bOffset) {
    RGB$Companion_getInstance();
    ColorFormat24.call(this);
    this.rOffset = rOffset;
    this.gOffset = gOffset;
    this.bOffset = bOffset;
  }
  RGB.prototype.getR_za3lpa$ = function (v) {
    return extract8(v, this.rOffset);
  };
  RGB.prototype.getG_za3lpa$ = function (v) {
    return extract8(v, this.gOffset);
  };
  RGB.prototype.getB_za3lpa$ = function (v) {
    return extract8(v, this.bOffset);
  };
  RGB.prototype.getA_za3lpa$ = function (v) {
    return 255;
  };
  RGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insert8(insert8(insert8(0, r, this.rOffset), g, this.gOffset), b, this.bOffset);
  };
  function RGB$Companion() {
    RGB$Companion_instance = this;
    RGB.call(this, 0, 8, 16);
  }
  RGB$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [RGB]
  };
  var RGB$Companion_instance = null;
  function RGB$Companion_getInstance() {
    if (RGB$Companion_instance === null) {
      new RGB$Companion();
    }return RGB$Companion_instance;
  }
  RGB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGB',
    interfaces: [ColorFormat24]
  };
  function BGR() {
    BGR_instance = this;
    RGB.call(this, 16, 8, 0);
  }
  BGR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR',
    interfaces: [RGB]
  };
  var BGR_instance = null;
  function BGR_getInstance() {
    if (BGR_instance === null) {
      new BGR();
    }return BGR_instance;
  }
  var arraycopy$lambda_3 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function RGBA(value) {
    RGBA$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(RGBA.prototype, 'r', {
    get: function () {
      return this.value >>> 0 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'g', {
    get: function () {
      return this.value >>> 8 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'b', {
    get: function () {
      return this.value >>> 16 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'a', {
    get: function () {
      return this.value >>> 24 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rf', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'gf', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'bf', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'af', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rd', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'gd', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'bd', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'ad', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rgb', {
    get: function () {
      return this.value & 16777215;
    }
  });
  RGBA.prototype.withR_za3lpa$ = function (v) {
    return new RGBA(this.value & -256 | (v & 255) << 0);
  };
  RGBA.prototype.withG_za3lpa$ = function (v) {
    return new RGBA(this.value & -65281 | (v & 255) << 8);
  };
  RGBA.prototype.withB_za3lpa$ = function (v) {
    return new RGBA(this.value & -16711681 | (v & 255) << 16);
  };
  RGBA.prototype.withA_za3lpa$ = function (v) {
    return new RGBA(this.value & 16777215 | (v & 255) << 24);
  };
  RGBA.prototype.withRGB_za3lpa$ = function (rgb) {
    return RGBA$Companion_getInstance().invoke_vux9f0$(rgb, this.a);
  };
  RGBA.prototype.withRd_14dthe$ = function (v) {
    return this.withR_za3lpa$(d2i(v));
  };
  RGBA.prototype.withGd_14dthe$ = function (v) {
    return this.withG_za3lpa$(d2i(v));
  };
  RGBA.prototype.withBd_14dthe$ = function (v) {
    return this.withB_za3lpa$(d2i(v));
  };
  RGBA.prototype.withAd_14dthe$ = function (v) {
    return this.withA_za3lpa$(d2i(v));
  };
  RGBA.prototype.getComponent_za3lpa$ = function (c) {
    switch (c) {
      case 0:
        return this.r;
      case 1:
        return this.g;
      case 2:
        return this.b;
      case 3:
        return this.a;
      default:return this.r;
    }
  };
  RGBA.prototype.getComponent_s8itvh$ = function (c) {
    switch (toChar(String.fromCharCode(c | 0).toLowerCase().charCodeAt(0))) {
      case 114:
        return this.r;
      case 103:
        return this.g;
      case 98:
        return this.b;
      case 97:
        return this.a;
      default:return this.r;
    }
  };
  Object.defineProperty(RGBA.prototype, 'hexString', {
    get: function () {
      return format('#%02x%02x%02x%02x', [this.r, this.g, this.b, this.a]);
    }
  });
  Object.defineProperty(RGBA.prototype, 'htmlColor', {
    get: function () {
      return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.af + ')';
    }
  });
  Object.defineProperty(RGBA.prototype, 'htmlStringSimple', {
    get: function () {
      return format('#%02x%02x%02x', [this.r, this.g, this.b]);
    }
  });
  RGBA.prototype.toString = function () {
    return this.hexString;
  };
  RGBA.prototype.plus_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r + other.r | 0, this.g + other.g | 0, this.b + other.b | 0, this.a + other.a | 0);
  };
  RGBA.prototype.minus_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r - other.r | 0, this.g - other.g | 0, this.b - other.b | 0, this.a - other.a | 0);
  };
  RGBA.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.value, other.value);
  };
  RGBA.prototype.interpolateWith_41hqm1$ = function (ratio, other) {
    return RGBA$Companion_getInstance().interpolate_utyrs$(this, other, ratio);
  };
  Object.defineProperty(RGBA.prototype, 'premultiplied', {
    get: function () {
      var A = this.a + 1 | 0;
      var RB = Kotlin.imul(this.value & 16711935, A) >>> 8 & 16711935;
      var G = Kotlin.imul(this.value & 65280, A) >>> 8 & 65280;
      return new RGBAPremultiplied(this.value & -16777216 | RB | G);
    }
  });
  RGBA.prototype.mix_md34sx$ = function (dst) {
    return RGBA$Companion_getInstance().mix_jh0t86$(this, dst);
  };
  RGBA.prototype.times_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().multiply_jh0t86$(this, other);
  };
  function RGBA$Companion() {
    RGBA$Companion_instance = this;
    ColorFormat32.call(this);
  }
  RGBA$Companion.prototype.float_7b5o5w$ = function (r, g, b, a) {
    return this.unclamped_tjonv8$(f2i(r), f2i(g), f2i(b), f2i(a));
  };
  RGBA$Companion.prototype.float_1ugm5o$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.RGBA.Companion.float_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (r, g, b, a) {
      if (a === void 0)
        a = 1.0;
      return this.float_7b5o5w$(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }));
  RGBA$Companion.prototype.unclamped_tjonv8$ = function (r, g, b, a) {
    return new RGBA(packIntUnchecked(r, g, b, a));
  };
  RGBA$Companion.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return new RGBA(packIntClamped(r, g, b, a));
  };
  RGBA$Companion.prototype.invoke_qt1dr2$ = function (r, g, b) {
    return new RGBA(packIntClamped(r, g, b, 255));
  };
  RGBA$Companion.prototype.invoke_vux9f0$ = function (rgb, a) {
    return new RGBA(rgb & 16777215 | a << 24);
  };
  RGBA$Companion.prototype.getR_za3lpa$ = function (v) {
    return (new RGBA(v)).r;
  };
  RGBA$Companion.prototype.getG_za3lpa$ = function (v) {
    return (new RGBA(v)).g;
  };
  RGBA$Companion.prototype.getB_za3lpa$ = function (v) {
    return (new RGBA(v)).b;
  };
  RGBA$Companion.prototype.getA_za3lpa$ = function (v) {
    return (new RGBA(v)).a;
  };
  RGBA$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a).value;
  };
  RGBA$Companion.prototype.mixRgbFactor256_74wf1k$ = function (c1, c2, factor256) {
    return new RGBA(this.mixRgbFactor256_qt1dr2$(c1.value, c2.value, factor256));
  };
  RGBA$Companion.prototype.mixRgbFactor256_qt1dr2$ = function (c1, c2, factor256) {
    var ifactor256 = 256 - factor256 | 0;
    return (Kotlin.imul(c1 & 16711935, ifactor256) + Kotlin.imul(c2 & 16711935, factor256) & -16711936 | Kotlin.imul(c1 & 65280, ifactor256) + Kotlin.imul(c2 & 65280, factor256) & 16711680) >>> 8;
  };
  RGBA$Companion.prototype.mixRgb_utyrs$ = function (c1, c2, factor) {
    return this.mixRgbFactor256_74wf1k$(c1, c2, numberToInt(factor * 256));
  };
  RGBA$Companion.prototype.mixRgba_utyrs$ = function (c1, c2, factor) {
    return RGBA$Companion_getInstance().invoke_vux9f0$(this.mixRgb_utyrs$(c1, c2, factor).rgb, this.blendComponent_0(c1.a, c2.a, factor));
  };
  RGBA$Companion.prototype.blendComponent_0 = function (c1, c2, factor) {
    return numberToInt(c1 * (1.0 - factor) + c2 * factor) & 255;
  };
  RGBA$Companion.prototype.mix_jh0t86$ = function (dst, src) {
    var tmp$;
    var srcA = src.a;
    var iSrcA = 255 - srcA | 0;
    switch (srcA) {
      case 0:
        tmp$ = dst;
        break;
      case 255:
        tmp$ = src;
        break;
      default:tmp$ = RGBA$Companion_getInstance().invoke_vux9f0$(this.mixRgbFactor256_74wf1k$(dst, src, srcA + 1 | 0).rgb, clamp0_255(srcA + (Kotlin.imul(dst.a, iSrcA) / 255 | 0) | 0));
        break;
    }
    return tmp$;
  };
  RGBA$Companion.prototype.multiply_jh0t86$ = function (c1, c2) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(Kotlin.imul(c1.r, c2.r) / 255 | 0, Kotlin.imul(c1.g, c2.g) / 255 | 0, Kotlin.imul(c1.b, c2.b) / 255 | 0, Kotlin.imul(c1.a, c2.a) / 255 | 0);
  };
  RGBA$Companion.prototype.interpolate_utyrs$ = function (src, dst, ratio) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(interpolate_0(ratio, src.r, dst.r), interpolate_0(ratio, src.g, dst.g), interpolate_0(ratio, src.b, dst.b), interpolate_0(ratio, src.a, dst.a));
  };
  RGBA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var RGBA$Companion_instance = null;
  function RGBA$Companion_getInstance() {
    if (RGBA$Companion_instance === null) {
      new RGBA$Companion();
    }return RGBA$Companion_instance;
  }
  RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: [Interpolable, Comparable]
  };
  RGBA.prototype.unbox = function () {
    return this.value;
  };
  RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function interpolate_1($receiver, a, b) {
    return RGBA$Companion_getInstance().interpolate_utyrs$(a, b, $receiver);
  }
  function RGBAPremultiplied(value) {
    RGBAPremultiplied$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(RGBAPremultiplied.prototype, 'rgb', {
    get: function () {
      return this.value & 16777215;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'r', {
    get: function () {
      return this.value >>> 0 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'g', {
    get: function () {
      return this.value >>> 8 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'b', {
    get: function () {
      return this.value >>> 16 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'a', {
    get: function () {
      return this.value >>> 24 & 255;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'rf', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'gf', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'bf', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'af', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'rd', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'gd', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'bd', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'ad', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'depremultiplied', {
    get: function () {
      var A = this.a;
      var Af = 255.0 / A;
      var R = numberToInt(this.r * Af);
      var G = numberToInt(this.g * Af);
      var B = numberToInt(this.b * Af);
      return RGBA$Companion_getInstance().invoke_tjonv8$(R, G, B, A);
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'depremultipliedFast', {
    get: function () {
      var A = this.a;
      var A1 = A + 1 | 0;
      var R = ((this.r << 8) / A1 | 0) & 255;
      var G = ((this.g << 8) / A1 | 0) & 255;
      var B = ((this.b << 8) / A1 | 0) & 255;
      return RGBA$Companion_getInstance().invoke_tjonv8$(R, G, B, A);
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'depremultipliedAccurate', {
    get: function () {
      var tmp$;
      var alpha = this.ad;
      if (alpha === 0.0)
        tmp$ = Colors_getInstance().TRANSPARENT_BLACK;
      else {
        var ialpha = 1.0 / alpha;
        tmp$ = RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(this.r * ialpha), numberToInt(this.g * ialpha), numberToInt(this.b * ialpha), this.a);
      }
      return tmp$;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'hexString', {
    get: function () {
      return asNonPremultiplied(this).hexString;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'htmlColor', {
    get: function () {
      return asNonPremultiplied(this).htmlColor;
    }
  });
  Object.defineProperty(RGBAPremultiplied.prototype, 'htmlStringSimple', {
    get: function () {
      return asNonPremultiplied(this).htmlStringSimple;
    }
  });
  RGBAPremultiplied.prototype.toString = function () {
    return this.hexString;
  };
  RGBAPremultiplied.prototype.scaled256_za3lpa$ = function (s) {
    var rb = Kotlin.imul(this.value & 16711935, s) >>> 8 & 16711935;
    var g = Kotlin.imul(this.value & 65280, s) >>> 8 & 65280;
    var a = Kotlin.imul(this.value >>> 24, s) >>> 8 << 24;
    return new RGBAPremultiplied(rb | g | a);
  };
  RGBAPremultiplied.prototype.scaled_14dthe$ = function (alpha) {
    return this.scaled256_za3lpa$(numberToInt(clamp01(alpha) * 256));
  };
  RGBAPremultiplied.prototype.scaled_mx4ult$ = function (alpha) {
    return this.scaled256_za3lpa$(numberToInt(clamp01_0(alpha) * 256));
  };
  function RGBAPremultiplied$Companion() {
    RGBAPremultiplied$Companion_instance = this;
    this.RB_MASK_0 = 16711935;
    this.GA_MASK_0 = -16711936;
  }
  RGBAPremultiplied$Companion.prototype.invoke_md34sx$ = function (rgba) {
    return rgba.premultiplied;
  };
  RGBAPremultiplied$Companion.prototype.mix_ryofg4$ = function (c1, c2) {
    return RGBAPremultiplied_init_0(c1.r + c2.r | 0, c1.g + c2.g | 0, c1.b + c2.b | 0, c1.a + c2.a | 0);
  };
  RGBAPremultiplied$Companion.prototype.blendAlpha_ryofg4$ = function (dst, src) {
    return new RGBAPremultiplied(sumPacked4MulR(src.value, dst.value, 256 - src.a | 0));
  };
  RGBAPremultiplied$Companion.prototype.blend_ryofg4$ = function (c1, c2) {
    var RB = (c1.value & 16711935) + (c2.value & 16711935) >>> 1 & 16711935;
    var G = (c1.value & 65280) + (c2.value & 65280) >>> 1 & 65280;
    var A = (c1.value >>> 24) + (c2.value >>> 24) >>> 1 & 255;
    return new RGBAPremultiplied(A << 24 | RB | G);
  };
  RGBAPremultiplied$Companion.prototype.blend_rvhnu4$ = function (c1, c2, c3, c4) {
    var RB = (c1.value & 16711935) + (c2.value & 16711935) + (c3.value & 16711935) + (c4.value & 16711935) >>> 2 & 16711935;
    var G = (c1.value & 65280) + (c2.value & 65280) + (c3.value & 65280) + (c4.value & 65280) >>> 2 & 65280;
    var A = (c1.value >>> 24) + (c2.value >>> 24) + (c3.value >>> 24) + (c4.value >>> 24) >>> 2 & 255;
    return new RGBAPremultiplied(A << 24 | RB | G);
  };
  RGBAPremultiplied$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RGBAPremultiplied$Companion_instance = null;
  function RGBAPremultiplied$Companion_getInstance() {
    if (RGBAPremultiplied$Companion_instance === null) {
      new RGBAPremultiplied$Companion();
    }return RGBAPremultiplied$Companion_instance;
  }
  RGBAPremultiplied.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAPremultiplied',
    interfaces: []
  };
  function RGBAPremultiplied_init(rgb, a, $this) {
    $this = $this || Object.create(RGBAPremultiplied.prototype);
    RGBAPremultiplied.call($this, rgb & 16777215 | a << 24);
    return $this;
  }
  function RGBAPremultiplied_init_0(r, g, b, a, $this) {
    $this = $this || Object.create(RGBAPremultiplied.prototype);
    RGBAPremultiplied.call($this, packIntClamped(r, g, b, a));
    return $this;
  }
  RGBAPremultiplied.prototype.unbox = function () {
    return this.value;
  };
  RGBAPremultiplied.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  RGBAPremultiplied.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function asPremultiplied($receiver) {
    return new RGBAPremultiplied($receiver.value);
  }
  function asNonPremultiplied($receiver) {
    return new RGBA($receiver.value);
  }
  function asPremultiplied_0($receiver) {
    return new RgbaPremultipliedArray($receiver.ints);
  }
  function asNonPremultiplied_0($receiver) {
    return new RgbaArray($receiver.ints);
  }
  function RgbaPremultipliedArray(ints) {
    RgbaPremultipliedArray$Companion_getInstance();
    this.ints = ints;
  }
  function RgbaPremultipliedArray$Companion() {
    RgbaPremultipliedArray$Companion_instance = this;
  }
  RgbaPremultipliedArray$Companion.prototype.invoke_siooix$ = function (colors) {
    var destination = ArrayList_init(colors.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== colors.length; ++tmp$) {
      var item = colors[tmp$];
      destination.add_11rb$(item.value);
    }
    return new RgbaPremultipliedArray(toIntArray(destination));
  };
  RgbaPremultipliedArray$Companion.prototype.invoke_za3lpa$ = function (size) {
    return new RgbaPremultipliedArray(new Int32Array(size));
  };
  RgbaPremultipliedArray$Companion.prototype.invoke_j7y641$ = function (size, callback) {
    var $receiver = new RgbaPremultipliedArray(new Int32Array(size));
    for (var n = 0; n < size; n++)
      $receiver.set_wpz7qp$(n, callback(n));
    return $receiver;
  };
  RgbaPremultipliedArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RgbaPremultipliedArray$Companion_instance = null;
  function RgbaPremultipliedArray$Companion_getInstance() {
    if (RgbaPremultipliedArray$Companion_instance === null) {
      new RgbaPremultipliedArray$Companion();
    }return RgbaPremultipliedArray$Companion_instance;
  }
  Object.defineProperty(RgbaPremultipliedArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  RgbaPremultipliedArray.prototype.get_za3lpa$ = function (index) {
    return new RGBAPremultiplied(this.ints[index]);
  };
  RgbaPremultipliedArray.prototype.set_wpz7qp$ = function (index, color) {
    this.ints[index] = color.value;
  };
  RgbaPremultipliedArray.prototype.fill_600akl$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    arrayfill(this.ints, value.value, start, end);
  };
  RgbaPremultipliedArray.prototype.premultiply_vux9f0$ = function (start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    for (var n = start; n < end; n++)
      this.set_wpz7qp$(n, asNonPremultiplied(this.get_za3lpa$(n)).premultiplied);
    return asNonPremultiplied_0(this);
  };
  RgbaPremultipliedArray.prototype.toString = function () {
    return 'RgbaPremultipliedArray(' + this.size + ')';
  };
  RgbaPremultipliedArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RgbaPremultipliedArray',
    interfaces: []
  };
  RgbaPremultipliedArray.prototype.unbox = function () {
    return this.ints;
  };
  RgbaPremultipliedArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  RgbaPremultipliedArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function scale(color, colorOffset, alpha, alphaOffset, count) {
    for (var n = 0; n < count; n++) {
      var a = clamp01_0(alpha[alphaOffset + n | 0]);
      if (a === 1.0)
        continue;
      color.set_wpz7qp$(colorOffset + n | 0, color.get_za3lpa$(colorOffset + n | 0).scaled_mx4ult$(a));
    }
  }
  function mix(dst, dstX, src, srcX, count) {
    for (var n = 0; n < count; n++) {
      dst.set_vlvk8p$(dstX + n | 0, RGBAPremultiplied$Companion_getInstance().blendAlpha_ryofg4$(dst.get_za3lpa$(dstX + n | 0).premultiplied, src.get_za3lpa$(srcX + n | 0)).depremultiplied);
    }
  }
  function mix_0(dst, dstX, src, srcX, count) {
    mix_1(dst, dstX, dst, dstX, src, srcX, count);
  }
  function mix_1(tgt, tgtX, dst, dstX, src, srcX, count) {
    for (var n = 0; n < count; n++)
      tgt.set_wpz7qp$(tgtX + n | 0, RGBAPremultiplied$Companion_getInstance().blendAlpha_ryofg4$(dst.get_za3lpa$(dstX + n | 0), src.get_za3lpa$(srcX + n | 0)));
  }
  function premultiply(src, srcN, dst, dstN, count) {
    for (var n = 0; n < count; n++)
      dst.set_wpz7qp$(dstN + n | 0, src.get_za3lpa$(srcN + n | 0).premultiplied);
  }
  function depremultiply(src, srcN, dst, dstN, count) {
    for (var n = 0; n < count; n++)
      dst.set_vlvk8p$(dstN + n | 0, src.get_za3lpa$(srcN + n | 0).depremultiplied);
  }
  function mix_2($receiver, src) {
    var dst = $receiver;
    var srcAf = src.af;
    var oneMSrcAf = 1.0 - srcAf;
    var outA = numberToInt(src.a + dst.a * oneMSrcAf);
    var outR = numberToInt(src.r + dst.r * oneMSrcAf);
    var outG = numberToInt(src.g + dst.g * oneMSrcAf);
    var outB = numberToInt(src.b + dst.b * oneMSrcAf);
    return RGBAPremultiplied_init_0(outR, outG, outB, outA);
  }
  function RgbaArray(ints) {
    RgbaArray$Companion_getInstance();
    this.ints = ints;
  }
  function RgbaArray$Companion() {
    RgbaArray$Companion_instance = this;
  }
  RgbaArray$Companion.prototype.invoke_4yxr0d$ = function (colors) {
    var destination = ArrayList_init(colors.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== colors.length; ++tmp$) {
      var item = colors[tmp$];
      destination.add_11rb$(item.value);
    }
    return new RgbaArray(toIntArray(destination));
  };
  RgbaArray$Companion.prototype.invoke_za3lpa$ = function (size) {
    return new RgbaArray(new Int32Array(size));
  };
  RgbaArray$Companion.prototype.invoke_bvgci3$ = function (size, callback) {
    var $receiver = new RgbaArray(new Int32Array(size));
    for (var n = 0; n < size; n++)
      $receiver.set_vlvk8p$(n, callback(n));
    return $receiver;
  };
  RgbaArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RgbaArray$Companion_instance = null;
  function RgbaArray$Companion_getInstance() {
    if (RgbaArray$Companion_instance === null) {
      new RgbaArray$Companion();
    }return RgbaArray$Companion_instance;
  }
  RgbaArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new GenericSubList(this, fromIndex, toIndex);
  };
  RgbaArray.prototype.contains_11rb$ = function (element) {
    return contains(this.ints, element.value);
  };
  RgbaArray.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  RgbaArray.prototype.indexOf_11rb$ = function (element) {
    return indexOf(this.ints, element.value);
  };
  RgbaArray.prototype.lastIndexOf_11rb$ = function (element) {
    return lastIndexOf(this.ints, element.value);
  };
  RgbaArray.prototype.isEmpty = function () {
    return this.ints.length === 0;
  };
  RgbaArray.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  RgbaArray.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  RgbaArray.prototype.listIterator_za3lpa$ = function (index) {
    return new GenericListIterator(this, index);
  };
  Object.defineProperty(RgbaArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  RgbaArray.prototype.get_za3lpa$ = function (index) {
    return new RGBA(this.ints[index]);
  };
  RgbaArray.prototype.set_vlvk8p$ = function (index, color) {
    this.ints[index] = color.value;
  };
  RgbaArray.prototype.fill_eb600h$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    arrayfill(this.ints, value.value, start, end);
  };
  RgbaArray.prototype.depremultiply_vux9f0$ = function (start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    for (var n = start; n < end; n++)
      this.set_vlvk8p$(n, asPremultiplied(this.get_za3lpa$(n)).depremultiplied);
    return asPremultiplied_0(this);
  };
  RgbaArray.prototype.toString = function () {
    return 'RgbaArray(' + this.size + ')';
  };
  RgbaArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RgbaArray',
    interfaces: [List]
  };
  RgbaArray.prototype.unbox = function () {
    return this.ints;
  };
  RgbaArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  RgbaArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function mix_3($receiver, other, ratio) {
    return RGBA$Companion_getInstance().mixRgba_utyrs$($receiver, other, ratio);
  }
  function toRgbaArray($receiver) {
    var array = new Int32Array($receiver.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = $receiver.get_za3lpa$(i).value;
    }
    return new RgbaArray(array);
  }
  function arraycopy(src, srcPos, dst, dstPos, size) {
    arrayCopy(src.ints, dst.ints, dstPos, srcPos, srcPos + size | 0);
  }
  function depremultiplyFaster($receiver, v) {
    return asPremultiplied(v).depremultiplied;
  }
  function depremultiplyFastest($receiver, v) {
    return asPremultiplied(v).depremultiplied;
  }
  function toRgbaArray$lambda(this$toRgbaArray) {
    return function (it) {
      return this$toRgbaArray[it];
    };
  }
  function toRgbaArray_0($receiver) {
    return RgbaArray$Companion_getInstance().invoke_bvgci3$($receiver.length, toRgbaArray$lambda($receiver));
  }
  function RGBA_4444() {
    RGBA_4444_instance = this;
    this.$delegate_kmfwcy$_0 = new ColorFormat$Mixin(16, 0, 4, 4, 4, 8, 4, 12, 4);
  }
  Object.defineProperty(RGBA_4444.prototype, 'bpp', {
    get: function () {
      return this.$delegate_kmfwcy$_0.bpp;
    }
  });
  RGBA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getA_za3lpa$(v);
  };
  RGBA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getB_za3lpa$(v);
  };
  RGBA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getG_za3lpa$(v);
  };
  RGBA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getR_za3lpa$(v);
  };
  RGBA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmfwcy$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_4444.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA_4444',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGBA_4444_instance = null;
  function RGBA_4444_getInstance() {
    if (RGBA_4444_instance === null) {
      new RGBA_4444();
    }return RGBA_4444_instance;
  }
  function RGBA_5551() {
    RGBA_5551_instance = this;
    this.$delegate_kmf8ly$_0 = new ColorFormat$Mixin(16, 0, 5, 5, 5, 10, 5, 15, 1);
  }
  Object.defineProperty(RGBA_5551.prototype, 'bpp', {
    get: function () {
      return this.$delegate_kmf8ly$_0.bpp;
    }
  });
  RGBA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getA_za3lpa$(v);
  };
  RGBA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getB_za3lpa$(v);
  };
  RGBA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getG_za3lpa$(v);
  };
  RGBA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getR_za3lpa$(v);
  };
  RGBA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmf8ly$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_5551.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA_5551',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGBA_5551_instance = null;
  function RGBA_5551_getInstance() {
    if (RGBA_5551_instance === null) {
      new RGBA_5551();
    }return RGBA_5551_instance;
  }
  function RGB_555() {
    RGB_555_instance = this;
    this.$delegate_x15h52$_0 = new ColorFormat$Mixin(16, 0, 5, 5, 5, 10, 5, 15, 0);
  }
  Object.defineProperty(RGB_555.prototype, 'bpp', {
    get: function () {
      return this.$delegate_x15h52$_0.bpp;
    }
  });
  RGB_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getA_za3lpa$(v);
  };
  RGB_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getB_za3lpa$(v);
  };
  RGB_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getG_za3lpa$(v);
  };
  RGB_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getR_za3lpa$(v);
  };
  RGB_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h52$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_555.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB_555',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGB_555_instance = null;
  function RGB_555_getInstance() {
    if (RGB_555_instance === null) {
      new RGB_555();
    }return RGB_555_instance;
  }
  function RGB_565() {
    RGB_565_instance = this;
    this.$delegate_x15h5x$_0 = new ColorFormat$Mixin(16, 0, 5, 5, 6, 11, 5, 15, 0);
  }
  Object.defineProperty(RGB_565.prototype, 'bpp', {
    get: function () {
      return this.$delegate_x15h5x$_0.bpp;
    }
  });
  RGB_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getA_za3lpa$(v);
  };
  RGB_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getB_za3lpa$(v);
  };
  RGB_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getG_za3lpa$(v);
  };
  RGB_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getR_za3lpa$(v);
  };
  RGB_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h5x$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_565.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB_565',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var RGB_565_instance = null;
  function RGB_565_getInstance() {
    if (RGB_565_instance === null) {
      new RGB_565();
    }return RGB_565_instance;
  }
  function BGRA_4444() {
    BGRA_4444_instance = this;
    this.$delegate_htfjwy$_0 = new ColorFormat$Mixin(16, 8, 4, 4, 4, 0, 4, 12, 4);
  }
  Object.defineProperty(BGRA_4444.prototype, 'bpp', {
    get: function () {
      return this.$delegate_htfjwy$_0.bpp;
    }
  });
  BGRA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getA_za3lpa$(v);
  };
  BGRA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getB_za3lpa$(v);
  };
  BGRA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getG_za3lpa$(v);
  };
  BGRA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getR_za3lpa$(v);
  };
  BGRA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htfjwy$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_4444.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA_4444',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGRA_4444_instance = null;
  function BGRA_4444_getInstance() {
    if (BGRA_4444_instance === null) {
      new BGRA_4444();
    }return BGRA_4444_instance;
  }
  function BGR_555() {
    BGR_555_instance = this;
    this.$delegate_bixszq$_0 = new ColorFormat$Mixin(16, 10, 5, 5, 5, 0, 5, 15, 0);
  }
  Object.defineProperty(BGR_555.prototype, 'bpp', {
    get: function () {
      return this.$delegate_bixszq$_0.bpp;
    }
  });
  BGR_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getA_za3lpa$(v);
  };
  BGR_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getB_za3lpa$(v);
  };
  BGR_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getG_za3lpa$(v);
  };
  BGR_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getR_za3lpa$(v);
  };
  BGR_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixszq$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_555.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR_555',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGR_555_instance = null;
  function BGR_555_getInstance() {
    if (BGR_555_instance === null) {
      new BGR_555();
    }return BGR_555_instance;
  }
  function BGR_565() {
    BGR_565_instance = this;
    this.$delegate_bixt0l$_0 = new ColorFormat$Mixin(16, 11, 5, 5, 6, 0, 5, 15, 0);
  }
  Object.defineProperty(BGR_565.prototype, 'bpp', {
    get: function () {
      return this.$delegate_bixt0l$_0.bpp;
    }
  });
  BGR_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getA_za3lpa$(v);
  };
  BGR_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getB_za3lpa$(v);
  };
  BGR_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getG_za3lpa$(v);
  };
  BGR_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getR_za3lpa$(v);
  };
  BGR_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixt0l$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_565.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR_565',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGR_565_instance = null;
  function BGR_565_getInstance() {
    if (BGR_565_instance === null) {
      new BGR_565();
    }return BGR_565_instance;
  }
  function BGRA_5551() {
    BGRA_5551_instance = this;
    this.$delegate_htew5y$_0 = new ColorFormat$Mixin(16, 10, 5, 5, 5, 0, 5, 15, 1);
  }
  Object.defineProperty(BGRA_5551.prototype, 'bpp', {
    get: function () {
      return this.$delegate_htew5y$_0.bpp;
    }
  });
  BGRA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getA_za3lpa$(v);
  };
  BGRA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getB_za3lpa$(v);
  };
  BGRA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getG_za3lpa$(v);
  };
  BGRA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getR_za3lpa$(v);
  };
  BGRA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htew5y$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_5551.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA_5551',
    interfaces: [ColorFormat16, ColorFormat]
  };
  var BGRA_5551_instance = null;
  function BGRA_5551_getInstance() {
    if (BGRA_5551_instance === null) {
      new BGRA_5551();
    }return BGRA_5551_instance;
  }
  function RGBAd(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  RGBAd.prototype.set_6y0v78$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };
  RGBAd.prototype.add_6y0v78$ = function (r, g, b, a) {
    this.r = this.r + r;
    this.g = this.g + g;
    this.b = this.b + b;
    this.a = this.a + a;
  };
  RGBAd.prototype.set_h1ferx$ = function (c) {
    this.set_6y0v78$(c.r, c.g, c.b, c.a);
  };
  RGBAd.prototype.toRGBA = function () {
    return RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(this.r * 255) & 255, numberToInt(this.g * 255) & 255, numberToInt(this.b * 255) & 255, numberToInt(this.a * 255) & 255);
  };
  RGBAd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAd',
    interfaces: []
  };
  function RGBAd_init(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, c.r, c.g, c.b, c.a);
    return $this;
  }
  function RGBAd_init_0(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, getRd(RGBA$Companion_getInstance(), c), getGd(RGBA$Companion_getInstance(), c), getBd(RGBA$Companion_getInstance(), c), getAd(RGBA$Companion_getInstance(), c));
    return $this;
  }
  function RGBAd_init_1($this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function RGBAf(_r, _g, _b, _a) {
    if (_r === void 0)
      _r = 1.0;
    if (_g === void 0)
      _g = 1.0;
    if (_b === void 0)
      _b = 1.0;
    if (_a === void 0)
      _a = 1.0;
    this._r_0 = _r;
    this._g_0 = _g;
    this._b_0 = _b;
    this._a_0 = _a;
    this.dirty_0 = true;
    this._rgba_0 = new RGBA(-1);
  }
  Object.defineProperty(RGBAf.prototype, 'r', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'g', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'b', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'a', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'rd', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'gd', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'bd', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'ad', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  RGBAf.prototype.makeDirty_0 = function () {
    this.dirty_0 = true;
  };
  Object.defineProperty(RGBAf.prototype, 'rgba', {
    get: function () {
      if (this.dirty_0) {
        this.dirty_0 = false;
        this._rgba_0 = RGBA$Companion_getInstance().float_7b5o5w$(this._r_0, this._g_0, this._b_0, this._a_0);
      }return this._rgba_0;
    }
  });
  RGBAf.prototype.setTo_7b5o5w$ = function (r, g, b, a) {
    this._r_0 = r;
    this._g_0 = g;
    this._b_0 = b;
    this._a_0 = a;
    this.makeDirty_0();
  };
  RGBAf.prototype.copyFrom_h1ferv$ = function (that) {
    this.setTo_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_h1ferv$ = function (that) {
    this.setToMultiply_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_7b5o5w$ = function (r, g, b, a) {
    this.setTo_7b5o5w$(this.r * r, this.g * g, this.b * b, this.a * a);
  };
  RGBAf.prototype.toRGBA = function () {
    return RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(this.r * 255) & 255, numberToInt(this.g * 255) & 255, numberToInt(this.b * 255) & 255, numberToInt(this.a * 255) & 255);
  };
  RGBAf.prototype.setToIdentity = function () {
    this.setTo_7b5o5w$(1.0, 1.0, 1.0, 1.0);
  };
  RGBAf.prototype.toString = function () {
    return 'RGBAf(' + get_niceStr_0(this.r) + ', ' + get_niceStr_0(this.g) + ', ' + get_niceStr_0(this.b) + ', ' + get_niceStr_0(this.a) + ')';
  };
  RGBAf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAf',
    interfaces: []
  };
  var RGBAf_0 = defineInlineFunction('korim-root-korim.com.soywiz.korim.color.RGBAf_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var RGBAf_init = _.com.soywiz.korim.color.RGBAf;
    return function (r, g, b, a) {
      return new RGBAf_init(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }));
  function setToColorPremultiplied($receiver, col) {
    toPremultipliedVector3D(col, $receiver);
    return $receiver;
  }
  function setToColor($receiver, col) {
    toPremultipliedVector3D(col, $receiver);
    return $receiver;
  }
  function toPremultipliedVector3D($receiver, out) {
    if (out === void 0)
      out = new Vector3D();
    return out.setTo_7b5o5w$($receiver.rf * $receiver.af, $receiver.gf * $receiver.af, $receiver.bf * $receiver.af, 1.0);
  }
  function toVector3D($receiver, out) {
    if (out === void 0)
      out = new Vector3D();
    return out.setTo_7b5o5w$($receiver.rf, $receiver.gf, $receiver.bf, $receiver.af);
  }
  function YCbCr(value) {
    YCbCr$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(YCbCr.prototype, 'y', {
    get: function () {
      return extract8(this.value, 0);
    }
  });
  Object.defineProperty(YCbCr.prototype, 'cb', {
    get: function () {
      return extract8(this.value, 8);
    }
  });
  Object.defineProperty(YCbCr.prototype, 'cr', {
    get: function () {
      return extract8(this.value, 16);
    }
  });
  Object.defineProperty(YCbCr.prototype, 'a', {
    get: function () {
      return extract8(this.value, 24);
    }
  });
  function YCbCr$Companion() {
    YCbCr$Companion_instance = this;
    ColorFormat32.call(this);
  }
  YCbCr$Companion.prototype.getY_za3lpa$ = function (v) {
    return (new YCbCr(v)).y;
  };
  YCbCr$Companion.prototype.getCb_za3lpa$ = function (v) {
    return (new YCbCr(v)).cb;
  };
  YCbCr$Companion.prototype.getCr_za3lpa$ = function (v) {
    return (new YCbCr(v)).cr;
  };
  YCbCr$Companion.prototype.getR_za3lpa$ = function (v) {
    return this.getY_za3lpa$(v);
  };
  YCbCr$Companion.prototype.getG_za3lpa$ = function (v) {
    return this.getCb_za3lpa$(v);
  };
  YCbCr$Companion.prototype.getB_za3lpa$ = function (v) {
    return this.getCr_za3lpa$(v);
  };
  YCbCr$Companion.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YCbCr$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  YCbCr$Companion.prototype.getY_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0 + 0.299 * r + 0.587 * g + 0.114 * b));
  };
  YCbCr$Companion.prototype.getCb_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(128 - 0.168736 * r - 0.331264 * g + 0.5 * b));
  };
  YCbCr$Companion.prototype.getCr_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(128 + 0.5 * r - 0.418688 * g - 0.081312 * b));
  };
  YCbCr$Companion.prototype.getR_qt1dr2$ = function (y, cb, cr) {
    return clamp0_255(numberToInt(y + 1.402 * (cr - 128 | 0)));
  };
  YCbCr$Companion.prototype.getG_qt1dr2$ = function (y, cb, cr) {
    return clamp0_255(numberToInt(y - 0.34414 * (cb - 128 | 0) - 0.71414 * (cr - 128 | 0)));
  };
  YCbCr$Companion.prototype.getB_qt1dr2$ = function (y, cb, cr) {
    return clamp0_255(numberToInt(y + 1.772 * (cb - 128 | 0)));
  };
  YCbCr$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var YCbCr$Companion_instance = null;
  function YCbCr$Companion_getInstance() {
    if (YCbCr$Companion_instance === null) {
      new YCbCr$Companion();
    }return YCbCr$Companion_instance;
  }
  YCbCr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YCbCr',
    interfaces: []
  };
  function YCbCr_init(y, cb, cr, a, $this) {
    if (a === void 0)
      a = 255;
    $this = $this || Object.create(YCbCr.prototype);
    YCbCr.call($this, packIntClamped(y, cb, cr, a));
    return $this;
  }
  YCbCr.prototype.unbox = function () {
    return this.value;
  };
  YCbCr.prototype.toString = function () {
    return 'YCbCr(value=' + Kotlin.toString(this.value) + ')';
  };
  YCbCr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  YCbCr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function YCbCrArray(ints) {
    this.ints = ints;
  }
  Object.defineProperty(YCbCrArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  YCbCrArray.prototype.get_za3lpa$ = function (index) {
    return new YCbCr(this.ints[index]);
  };
  YCbCrArray.prototype.set_ep708k$ = function (index, color) {
    this.ints[index] = color.value;
  };
  YCbCrArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YCbCrArray',
    interfaces: []
  };
  YCbCrArray.prototype.unbox = function () {
    return this.ints;
  };
  YCbCrArray.prototype.toString = function () {
    return 'YCbCrArray(ints=' + Kotlin.toString(this.ints) + ')';
  };
  YCbCrArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  YCbCrArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function toYCbCr($receiver) {
    return YCbCr_init(YCbCr$Companion_getInstance().getY_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YCbCr$Companion_getInstance().getCb_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YCbCr$Companion_getInstance().getCr_qt1dr2$($receiver.r, $receiver.g, $receiver.b), $receiver.a);
  }
  function toRGBA_0($receiver) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(YCbCr$Companion_getInstance().getR_qt1dr2$($receiver.y, $receiver.cb, $receiver.cr), YCbCr$Companion_getInstance().getG_qt1dr2$($receiver.y, $receiver.cb, $receiver.cr), YCbCr$Companion_getInstance().getB_qt1dr2$($receiver.y, $receiver.cb, $receiver.cr), $receiver.a);
  }
  function YUVA(value) {
    YUVA$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(YUVA.prototype, 'y', {
    get: function () {
      return extract8(this.value, 0);
    }
  });
  Object.defineProperty(YUVA.prototype, 'u', {
    get: function () {
      return extract8(this.value, 8);
    }
  });
  Object.defineProperty(YUVA.prototype, 'v', {
    get: function () {
      return extract8(this.value, 16);
    }
  });
  Object.defineProperty(YUVA.prototype, 'a', {
    get: function () {
      return extract8(this.value, 24);
    }
  });
  function YUVA$Companion() {
    YUVA$Companion_instance = this;
    ColorFormat32.call(this);
  }
  YUVA$Companion.prototype.getY_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  YUVA$Companion.prototype.getU_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  YUVA$Companion.prototype.getV_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  YUVA$Companion.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YUVA$Companion.prototype.getR_za3lpa$ = function (v) {
    return this.getR_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA$Companion.prototype.getG_za3lpa$ = function (v) {
    return this.getG_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA$Companion.prototype.getB_za3lpa$ = function (v) {
    return this.getB_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return toYUVA(RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a)).value;
  };
  YUVA$Companion.prototype.getY_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0.299 * r + 0.587 * g + 0.114 * b));
  };
  YUVA$Companion.prototype.getU_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0.492 * Kotlin.imul(b, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA$Companion.prototype.getV_qt1dr2$ = function (r, g, b) {
    return clamp0_255(numberToInt(0.877 * Kotlin.imul(r, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA$Companion.prototype.getR_qt1dr2$ = function (y, u, v) {
    return clamp0_255(numberToInt(y + 1.14 * v));
  };
  YUVA$Companion.prototype.getG_qt1dr2$ = function (y, u, v) {
    return clamp0_255(numberToInt(y - 0.395 * u - 0.581 * v));
  };
  YUVA$Companion.prototype.getB_qt1dr2$ = function (y, u, v) {
    return clamp0_255(numberToInt(y + 2.033 * u));
  };
  YUVA$Companion.prototype.YUVtoRGB_5w4zhm$ = function (out, outPos, inY, inU, inV, inPos, count) {
    for (var n = 0; n < count; n++) {
      out.set_vlvk8p$(outPos + n | 0, toRGBA_1(YUVA_init(inY[inPos + n | 0] & 255, (inU[inPos + n | 0] & 255) - 128 | 0, (inV[inPos + n | 0] & 255) - 128 | 0, 255)));
    }
  };
  YUVA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var YUVA$Companion_instance = null;
  function YUVA$Companion_getInstance() {
    if (YUVA$Companion_instance === null) {
      new YUVA$Companion();
    }return YUVA$Companion_instance;
  }
  YUVA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YUVA',
    interfaces: []
  };
  function YUVA_init(y, u, v, a, $this) {
    $this = $this || Object.create(YUVA.prototype);
    YUVA.call($this, packIntClamped(y, u, v, a));
    return $this;
  }
  YUVA.prototype.unbox = function () {
    return this.value;
  };
  YUVA.prototype.toString = function () {
    return 'YUVA(value=' + Kotlin.toString(this.value) + ')';
  };
  YUVA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  YUVA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function YuvaArray(ints) {
    this.ints = ints;
  }
  Object.defineProperty(YuvaArray.prototype, 'size', {
    get: function () {
      return this.ints.length;
    }
  });
  YuvaArray.prototype.get_za3lpa$ = function (index) {
    return new YUVA(this.ints[index]);
  };
  YuvaArray.prototype.set_vlqsh2$ = function (index, color) {
    this.ints[index] = color.value;
  };
  YuvaArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YuvaArray',
    interfaces: []
  };
  YuvaArray.prototype.unbox = function () {
    return this.ints;
  };
  YuvaArray.prototype.toString = function () {
    return 'YuvaArray(ints=' + Kotlin.toString(this.ints) + ')';
  };
  YuvaArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ints) | 0;
    return result;
  };
  YuvaArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ints, other.ints))));
  };
  function toYUVA($receiver) {
    return YUVA_init(YUVA$Companion_getInstance().getY_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YUVA$Companion_getInstance().getU_qt1dr2$($receiver.r, $receiver.g, $receiver.b), YUVA$Companion_getInstance().getV_qt1dr2$($receiver.r, $receiver.g, $receiver.b), $receiver.a);
  }
  function toRGBA_1($receiver) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(YUVA$Companion_getInstance().getR_qt1dr2$($receiver.y, $receiver.u, $receiver.v), YUVA$Companion_getInstance().getG_qt1dr2$($receiver.y, $receiver.u, $receiver.v), YUVA$Companion_getInstance().getB_qt1dr2$($receiver.y, $receiver.u, $receiver.v), $receiver.a);
  }
  function BitmapFont(fontSize, lineHeight, base, glyphs, kernings, atlas, name) {
    BitmapFont$Companion_getInstance();
    var tmp$, tmp$_0, tmp$_1;
    if (atlas === void 0)
      atlas = (tmp$_1 = (tmp$_0 = (tmp$ = glyphs.values.iterator().next()) != null ? tmp$.texture : null) != null ? tmp$_0.bmp : null) != null ? tmp$_1 : Bitmaps_getInstance().transparent.bmp;
    if (name === void 0)
      name = 'BitmapFont';
    this.fontSize = fontSize;
    this.lineHeight = lineHeight;
    this.base = base;
    this.glyphs = glyphs;
    this.kernings = kernings;
    this.atlas = atlas;
    this.name_rqhlxw$_0 = name;
    this.$delegate_cxq5x$_0 = new Extra$Mixin();
    this.naturalFontMetrics_87sx04$_0 = lazy(BitmapFont$naturalFontMetrics$lambda(this));
    this.naturalNonExistantGlyphMetrics_0 = new GlyphMetrics(this.fontSize, false, 0, Rectangle.Companion.invoke(), 0.0);
    this.dummyGlyph_nafmsz$_0 = lazy(BitmapFont$dummyGlyph$lambda(this));
    this.anyGlyph_2vk30p$_0 = lazy(BitmapFont$anyGlyph$lambda(this));
    this.baseBmp_xvm393$_0 = lazy(BitmapFont$baseBmp$lambda(this));
  }
  Object.defineProperty(BitmapFont.prototype, 'name', {
    get: function () {
      return this.name_rqhlxw$_0;
    }
  });
  Object.defineProperty(BitmapFont.prototype, 'naturalFontMetrics_0', {
    get: function () {
      return this.naturalFontMetrics_87sx04$_0.value;
    }
  });
  BitmapFont.prototype.getFontMetrics_fimaiv$$default = function (size, metrics) {
    return metrics.copyFromNewSize_tqohaf$(this.naturalFontMetrics_0, size);
  };
  BitmapFont.prototype.getGlyphMetrics_e5kjls$$default = function (size, codePoint, metrics) {
    var tmp$, tmp$_0;
    return metrics.copyFromNewSize_6sgv14$((tmp$_0 = (tmp$ = this.glyphs.get_za3lpa$(codePoint)) != null ? tmp$.naturalMetrics_8be2vx$ : null) != null ? tmp$_0 : this.naturalNonExistantGlyphMetrics_0, size, codePoint);
  };
  BitmapFont.prototype.getKerning_mqu1mq$ = function (size, leftCodePoint, rightCodePoint) {
    var tmp$, tmp$_0, tmp$_1;
    return this.getTextScale_0(size) * ((tmp$_1 = (tmp$_0 = (tmp$ = this.getKerning_vux9f0$(leftCodePoint, rightCodePoint)) != null ? tmp$.amount : null) != null ? tmp$_0 : null) != null ? tmp$_1 : 0.0);
  };
  BitmapFont.prototype.renderGlyph_pajsht$ = function (ctx, size, codePoint, x, y, fill, metrics) {
    var tmp$, tmp$_0;
    var scale = this.getTextScale_0(size);
    tmp$ = this.glyphs.get_za3lpa$(codePoint);
    if (tmp$ == null) {
      return;
    }var g = tmp$;
    var $receiver = this.getGlyphMetrics_e5kjls$(size, codePoint, metrics);
    if (($receiver.existing ? $receiver : null) == null)
      return;
    if (metrics.width === 0.0 && metrics.height === 0.0)
      return;
    var texX = x + metrics.left;
    var texY = y + metrics.top;
    var swidth = metrics.width;
    var sheight = metrics.height;
    if (equals(ctx.fillStyle, DefaultPaint_getInstance())) {
      tmp$_0 = g.bmp;
    } else {
      var $receiver_0 = new Bitmap32(g.bmp.width, g.bmp.height);
      $receiver_0.lock();
      try {
        var ctx_0 = $receiver_0.getContext2d_6taknv$(true);
        try {
          var t = ctx_0.state.transform;
          var a = t.a;
          var b = t.b;
          var c = t.c;
          var d = t.d;
          var tx = t.tx;
          var ty = t.ty;
          try {
            ctx_0.scale_lu1900$(1.0 / scale);
            ctx_0.fillStyle = ctx.fillStyle;
            var width = ctx_0.width * scale;
            var height = ctx_0.height * scale;
            ctx_0.fillRect_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
          }finally {
            t.setTo_15yvbs$(a, b, c, d, tx, ty);
          }
        }finally {
          ctx_0.dispose();
        }
      }finally {
        $receiver_0.unlock_2epnwg$(null);
      }
      var bmpFill = $receiver_0;
      bmpFill.writeChannel_ccmnuj$(BitmapChannel$ALPHA_getInstance(), g.bmp, BitmapChannel$ALPHA_getInstance());
      tmp$_0 = bmpFill;
    }
    var bmp = tmp$_0;
    ctx.drawImage_6s4b0k$(bmp, texX, texY - metrics.height, swidth, sheight);
  };
  BitmapFont.prototype.getTextScale_0 = function (size) {
    return size / this.fontSize;
  };
  BitmapFont.prototype.measureWidth_61zpoe$ = function (text) {
    var tmp$;
    var x = 0;
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var glyph = this.glyphs.get_za3lpa$(c | 0);
      if (glyph != null)
        x = x + glyph.xadvance | 0;
    }
    return x;
  };
  BitmapFont.prototype.getKerning_o3jtqy$ = function (first, second) {
    return this.getKerning_vux9f0$(first | 0, second | 0);
  };
  BitmapFont.prototype.getKerning_vux9f0$ = function (first, second) {
    return this.kernings.get_za3lpa$(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(first, second));
  };
  function BitmapFont$Kerning(first, second, amount) {
    BitmapFont$Kerning$Companion_getInstance();
    this.first = first;
    this.second = second;
    this.amount = amount;
  }
  function BitmapFont$Kerning$Companion() {
    BitmapFont$Kerning$Companion_instance = this;
  }
  BitmapFont$Kerning$Companion.prototype.buildKey_vux9f0$ = function (f, s) {
    return insert(insert(0, f, 0, 16), s, 16, 16);
  };
  BitmapFont$Kerning$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Kerning$Companion_instance = null;
  function BitmapFont$Kerning$Companion_getInstance() {
    if (BitmapFont$Kerning$Companion_instance === null) {
      new BitmapFont$Kerning$Companion();
    }return BitmapFont$Kerning$Companion_instance;
  }
  BitmapFont$Kerning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kerning',
    interfaces: []
  };
  function BitmapFont$Glyph(fontSize, id, texture, xoffset, yoffset, xadvance) {
    this.fontSize = fontSize;
    this.id = id;
    this.texture = texture;
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.xadvance = xadvance;
    this.bmp_ekhv22$_0 = lazy(BitmapFont$Glyph$bmp$lambda(this));
    this.naturalMetrics_8be2vx$ = new GlyphMetrics(this.fontSize, true, -1, new Rectangle(this.xoffset, this.yoffset, this.texture.width, this.texture.height), this.xadvance);
  }
  Object.defineProperty(BitmapFont$Glyph.prototype, 'bmp', {
    get: function () {
      return this.bmp_ekhv22$_0.value;
    }
  });
  function BitmapFont$Glyph$bmp$lambda(this$Glyph) {
    return function () {
      return this$Glyph.texture.extract().toBMP32();
    };
  }
  BitmapFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  Object.defineProperty(BitmapFont.prototype, 'dummyGlyph', {
    get: function () {
      return this.dummyGlyph_nafmsz$_0.value;
    }
  });
  Object.defineProperty(BitmapFont.prototype, 'anyGlyph', {
    get: function () {
      return this.anyGlyph_2vk30p$_0.value;
    }
  });
  Object.defineProperty(BitmapFont.prototype, 'baseBmp', {
    get: function () {
      return this.baseBmp_xvm393$_0.value;
    }
  });
  BitmapFont.prototype.get_za3lpa$ = function (charCode) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.glyphs.get_za3lpa$(charCode)) != null ? tmp$ : this.glyphs.get_za3lpa$(32)) != null ? tmp$_0 : this.dummyGlyph;
  };
  BitmapFont.prototype.get_s8itvh$ = function (char) {
    return this.get_za3lpa$(char | 0);
  };
  function BitmapFont$Companion() {
    BitmapFont$Companion_instance = this;
  }
  BitmapFont$Companion.prototype.invoke_4hh8u8$ = function (font, fontSize, chars, fontName, paint, mipmaps_0) {
    if (chars === void 0)
      chars = CharacterSet$Companion_getInstance().LATIN_ALL;
    if (fontName === void 0)
      fontName = font.name;
    if (paint === void 0)
      paint = new ColorPaint(Colors_getInstance().WHITE);
    if (mipmaps_0 === void 0)
      mipmaps_0 = true;
    var tmp$, tmp$_0;
    var fontSize_0 = numberToDouble(fontSize);
    var fmetrics = font.getFontMetrics_fimaiv$(fontSize_0);
    var $receiver = chars.codePoints;
    var destination = ArrayList_init($receiver.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var item = $receiver[tmp$_1];
      destination.add_11rb$(font.getGlyphMetrics_e5kjls$(fontSize_0, item));
    }
    var glyphMetrics = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(glyphMetrics, 10));
    var tmp$_2;
    tmp$_2 = glyphMetrics.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$((item_0.width + 4) * (fmetrics.lineHeight + 4));
    }
    var requiredArea = toIntCeil(sum_0(destination_0));
    var requiredAreaSide = toIntCeil(Math_0.sqrt(requiredArea));
    var matlas = MutableAtlas_init(get_nextPowerOfTwo(requiredAreaSide), get_nextPowerOfTwo(requiredAreaSide));
    var border = 2;
    tmp$ = chars.codePoints;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var codePoint = tmp$[tmp$_0];
      var result = renderGlyphToBitmap(font, fontSize_0, codePoint, paint, true, 1);
      matlas.add_rdndlk$(result.bmp.toBMP32().premultipliedIfRequired(), result);
    }
    var atlas = matlas.bitmap;
    var tmp$_3 = fmetrics.lineHeight;
    var tmp$_4 = fmetrics.top;
    var $receiver_0 = matlas.entries;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
    var destination_1 = LinkedHashMap_init_0(capacity);
    var tmp$_5;
    tmp$_5 = $receiver_0.iterator();
    while (tmp$_5.hasNext()) {
      var element = tmp$_5.next();
      var slice = element.slice;
      var g = first(element.data.glyphs);
      var m = g.metrics;
      var pair = to(g.codePoint, new BitmapFont$Glyph(fontSize_0, g.codePoint, slice, -border | 0, -border | 0, toIntCeil(m.xadvance)));
      destination_1.put_xwzc9p$(pair.first, pair.second);
    }
    return new BitmapFont(fontSize_0, tmp$_3, tmp$_4, toIntMap(destination_1), IntMap_init(), mipmaps(atlas, mipmaps_0), fontName);
  };
  BitmapFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Companion_instance = null;
  function BitmapFont$Companion_getInstance() {
    if (BitmapFont$Companion_instance === null) {
      new BitmapFont$Companion();
    }return BitmapFont$Companion_instance;
  }
  Object.defineProperty(BitmapFont.prototype, 'extra', {
    get: function () {
      return this.$delegate_cxq5x$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_cxq5x$_0.extra = tmp$;
    }
  });
  function BitmapFont$naturalFontMetrics$lambda(this$BitmapFont) {
    return function () {
      var tmp$ = this$BitmapFont.fontSize;
      var tmp$_0 = this$BitmapFont.lineHeight;
      var tmp$_1 = this$BitmapFont.lineHeight;
      var tmp$_2;
      var width = 0.0;
      tmp$_2 = this$BitmapFont.glyphs.values.iterator();
      while (tmp$_2.hasNext()) {
        var glyph = tmp$_2.next();
        if (glyph != null) {
          var a = width;
          var b = glyph.texture.width;
          width = Math_0.max(a, b);
        }}
      return new FontMetrics(tmp$, tmp$_0, tmp$_1, 0.0, 0.0, 0.0, 0.0, width);
    };
  }
  function BitmapFont$dummyGlyph$lambda(this$BitmapFont) {
    return function () {
      return new BitmapFont$Glyph(this$BitmapFont.fontSize, -1, Bitmaps_getInstance().transparent, 0, 0, 0);
    };
  }
  function BitmapFont$anyGlyph$lambda(this$BitmapFont) {
    return function () {
      var tmp$;
      return (tmp$ = this$BitmapFont.glyphs.get_za3lpa$(this$BitmapFont.glyphs.keys.iterator().next())) != null ? tmp$ : this$BitmapFont.dummyGlyph;
    };
  }
  function BitmapFont$baseBmp$lambda(this$BitmapFont) {
    return function () {
      return this$BitmapFont.anyGlyph.texture.bmp;
    };
  }
  BitmapFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFont',
    interfaces: [Font, Extra]
  };
  function Coroutine$readBitmapFont($receiver_0, imageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$fntFile = void 0;
    this.local$$receiver = $receiver_0;
    this.local$imageFormat = imageFormat_0;
  }
  Coroutine$readBitmapFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFont.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFont.prototype.constructor = Coroutine$readBitmapFont;
  Coroutine$readBitmapFont.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormat === void 0)
              this.local$imageFormat = RegisteredImageFormats_getInstance();
            this.local$fntFile = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$fntFile.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var tmp$;
            var content = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
            var textures = HashMap_init();
            if (startsWith_0(content, 60)) {
              this.state_0 = 5;
              this.result_0 = readBitmapFontXml(content, this.local$fntFile, textures, this.local$imageFormat, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (startsWith(content, 'info')) {
                this.state_0 = 3;
                this.result_0 = readBitmapFontTxt(content, this.local$fntFile, textures, this.local$imageFormat, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported font type starting with ' + substr_0(content, 0, 16)));
              }
            }

          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.local$tmp$ = this.result_0;
            this.state_0 = 6;
            continue;
          case 6:
            return this.local$tmp$;
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
  function readBitmapFont($receiver_0, imageFormat_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFont($receiver_0, imageFormat_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapFontTxt(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$kernings = void 0;
    this.local$glyphs = void 0;
    this.local$lineHeight = void 0;
    this.local$fontSize = void 0;
    this.local$base = void 0;
    this.local$id = void 0;
    this.local$content = content_0;
    this.local$fntFile = fntFile_0;
    this.local$textures = textures_0;
    this.local$imageFormat = imageFormat_0;
  }
  Coroutine$readBitmapFontTxt.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFontTxt.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFontTxt.prototype.constructor = Coroutine$readBitmapFontTxt;
  Coroutine$readBitmapFontTxt.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormat === void 0)
              this.local$imageFormat = RegisteredImageFormats_getInstance();
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
            this.local$kernings = ArrayList_init_0();
            this.local$glyphs = ArrayList_init_0();
            this.local$lineHeight = 16.0;
            this.local$fontSize = {v: 16.0};
            this.local$base = null;
            this.local$tmp$ = lines(this.local$content).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var rline = this.local$tmp$.next();
            var tmp$_17;
            var line = trim(Kotlin.isCharSequence(tmp$_17 = rline) ? tmp$_17 : throwCCE()).toString();
            var map = LinkedHashMap_init();
            tmp$ = split_0(line, Kotlin.charArrayOf(32)).iterator();
            while (tmp$.hasNext()) {
              var part = tmp$.next();
              var tmp$_18 = plus(split_0(part, Kotlin.charArrayOf(61)), listOf(['', '']));
              var key = tmp$_18.get_za3lpa$(0);
              var value = tmp$_18.get_za3lpa$(1);
              map.put_xwzc9p$(key, value);
            }

            if (startsWith(line, 'info')) {
              this.local$fontSize.v = (tmp$_1 = (tmp$_0 = map.get_11rb$('size')) != null ? toDouble(tmp$_0) : null) != null ? tmp$_1 : 16.0;
              this.state_0 = 5;
              continue;
            } else {
              if (startsWith(line, 'page')) {
                this.local$id = (tmp$_3 = (tmp$_2 = map.get_11rb$('id')) != null ? toInt_0(tmp$_2) : null) != null ? tmp$_3 : 0;
                var tmp$_19;
                if ((tmp$_5 = (tmp$_4 = map.get_11rb$('file')) != null ? unquote(tmp$_4) : null) != null)
                  tmp$_19 = tmp$_5;
                else {
                  throw IllegalStateException_init('page without file'.toString());
                }
                var file = tmp$_19;
                this.state_0 = 3;
                this.result_0 = readBitmapSlice(this.local$fntFile.parent.get_61zpoe$(file), this.local$imageFormat, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                if (startsWith(line, 'common ')) {
                  this.local$lineHeight = (tmp$_7 = (tmp$_6 = map.get_11rb$('lineHeight')) != null ? toDoubleOrNull(tmp$_6) : null) != null ? tmp$_7 : 16.0;
                  this.local$base = (tmp$_8 = map.get_11rb$('base')) != null ? toDoubleOrNull(tmp$_8) : null;
                } else if (startsWith(line, 'char ')) {
                  var page = (tmp$_10 = (tmp$_9 = map.get_11rb$('page')) != null ? toIntOrNull(tmp$_9) : null) != null ? tmp$_10 : 0;
                  var texture = (tmp$_11 = this.local$textures.get_11rb$(page)) != null ? tmp$_11 : first_0(this.local$textures.values);
                  var $receiver = KDynamic.Companion;
                  var tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24;
                  tmp$_20 = this.local$fontSize.v;
                  tmp$_21 = $receiver.get_int_mzud1t$(map.get_11rb$('id'));
                  tmp$_22 = $receiver.get_int_mzud1t$(map.get_11rb$('xoffset'));
                  tmp$_23 = $receiver.get_int_mzud1t$(map.get_11rb$('yoffset'));
                  tmp$_24 = $receiver.get_int_mzud1t$(map.get_11rb$('xadvance'));
                  var element = new BitmapFont$Glyph(tmp$_20, tmp$_21, texture.sliceWithSize_tjonv8$($receiver.get_int_mzud1t$(map.get_11rb$('x')), $receiver.get_int_mzud1t$(map.get_11rb$('y')), $receiver.get_int_mzud1t$(map.get_11rb$('width')), $receiver.get_int_mzud1t$(map.get_11rb$('height'))), tmp$_22, tmp$_23, tmp$_24);
                  this.local$glyphs.add_11rb$(element);
                } else if (startsWith(line, 'kerning ')) {
                  var tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30;
                  var element_0 = new BitmapFont$Kerning((tmp$_26 = (tmp$_25 = map.get_11rb$('first')) != null ? toIntOrNull(tmp$_25) : null) != null ? tmp$_26 : 0, (tmp$_28 = (tmp$_27 = map.get_11rb$('second')) != null ? toIntOrNull(tmp$_27) : null) != null ? tmp$_28 : 0, (tmp$_30 = (tmp$_29 = map.get_11rb$('amount')) != null ? toIntOrNull(tmp$_29) : null) != null ? tmp$_30 : 0);
                  this.local$kernings.add_11rb$(element_0);
                }this.state_0 = 4;
                continue;
              }
            }

          case 3:
            var value_0 = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id, value_0);
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            tmp$_12 = first_0(this.local$textures.values).bmp;
            tmp$_14 = (tmp$_13 = this.local$fontSize.v) != null ? tmp$_13 : 16.0;
            tmp$_15 = this.local$base != null ? this.local$base : this.local$lineHeight;
            var destination = ArrayList_init(collectionSizeOrDefault(this.local$glyphs, 10));
            var tmp$_31;
            tmp$_31 = this.local$glyphs.iterator();
            while (tmp$_31.hasNext()) {
              var item = tmp$_31.next();
              destination.add_11rb$(to(item.id, item));
            }

            tmp$_16 = toIntMap(toMap(destination));
            var destination_0 = ArrayList_init(collectionSizeOrDefault(this.local$kernings, 10));
            var tmp$_32;
            tmp$_32 = this.local$kernings.iterator();
            while (tmp$_32.hasNext()) {
              var item_0 = tmp$_32.next();
              destination_0.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_0.first, item_0.second), item_0));
            }

            return new BitmapFont(tmp$_14, this.local$lineHeight, tmp$_15, tmp$_16, toIntMap(toMap(destination_0)), tmp$_12);
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
  function readBitmapFontTxt(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFontTxt(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapFontXml(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_5 = void 0;
    this.local$xml = void 0;
    this.local$fontSize = void 0;
    this.local$lineHeight = void 0;
    this.local$base = void 0;
    this.local$id = void 0;
    this.local$content = content_0;
    this.local$fntFile = fntFile_0;
    this.local$textures = textures_0;
    this.local$imageFormat = imageFormat_0;
  }
  Coroutine$readBitmapFontXml.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFontXml.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFontXml.prototype.constructor = Coroutine$readBitmapFontXml;
  Coroutine$readBitmapFontXml.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormat === void 0)
              this.local$imageFormat = RegisteredImageFormats_getInstance();
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
            var tmp$_5, tmp$_6;
            this.local$xml = Xml(this.local$content);
            this.local$fontSize = (tmp$_0 = (tmp$ = firstOrNull(this.local$xml.get_61zpoe$('info'))) != null ? tmp$.double_io5o9c$('size', 16.0) : null) != null ? tmp$_0 : 16.0;
            this.local$lineHeight = (tmp$_2 = (tmp$_1 = firstOrNull(this.local$xml.get_61zpoe$('common'))) != null ? tmp$_1.double_io5o9c$('lineHeight', 16.0) : null) != null ? tmp$_2 : 16.0;
            this.local$base = (tmp$_4 = (tmp$_3 = firstOrNull(this.local$xml.get_61zpoe$('common'))) != null ? tmp$_3.double_io5o9c$('base', 16.0) : null) != null ? tmp$_4 : 16.0;
            this.local$tmp$_5 = get_0(this.local$xml.get_61zpoe$('pages'), 'page').iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$_5.hasNext()) {
              this.state_0 = 4;
              continue;
            }
            var page = this.local$tmp$_5.next();
            this.local$id = page.int_bm4lxs$('id');
            var file = page.str_puj7f4$('file');
            var texFile = this.local$fntFile.parent.get_61zpoe$(file);
            this.state_0 = 3;
            this.result_0 = readBitmapSlice(texFile, this.local$imageFormat, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var tex = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id, tex);
            this.state_0 = 2;
            continue;
          case 4:
            var $receiver = get_0(this.local$xml.get_61zpoe$('chars'), 'char');
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_7;
            tmp$_7 = $receiver.iterator();
            while (tmp$_7.hasNext()) {
              var item = tmp$_7.next();
              var tmp$_8 = destination.add_11rb$;
              var tmp$_9;
              var page_0 = item.int_bm4lxs$('page');
              var texture = (tmp$_9 = this.local$textures.get_11rb$(page_0)) != null ? tmp$_9 : first_0(this.local$textures.values);
              tmp$_8.call(destination, new BitmapFont$Glyph(this.local$fontSize, item.int_bm4lxs$('id'), texture.sliceWithSize_tjonv8$(item.int_bm4lxs$('x'), item.int_bm4lxs$('y'), item.int_bm4lxs$('width'), item.int_bm4lxs$('height')), item.int_bm4lxs$('xoffset'), item.int_bm4lxs$('yoffset'), item.int_bm4lxs$('xadvance')));
            }

            var glyphs = destination;
            var $receiver_0 = get_0(this.local$xml.get_61zpoe$('kernings'), 'kerning');
            var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_10;
            tmp$_10 = $receiver_0.iterator();
            while (tmp$_10.hasNext()) {
              var item_0 = tmp$_10.next();
              destination_0.add_11rb$(new BitmapFont$Kerning(item_0.int_bm4lxs$('first'), item_0.int_bm4lxs$('second'), item_0.int_bm4lxs$('amount')));
            }

            var kernings = destination_0;
            tmp$_5 = first_0(this.local$textures.values).bmp;
            var destination_1 = ArrayList_init(collectionSizeOrDefault(glyphs, 10));
            var tmp$_11;
            tmp$_11 = glyphs.iterator();
            while (tmp$_11.hasNext()) {
              var item_1 = tmp$_11.next();
              destination_1.add_11rb$(to(item_1.id, item_1));
            }

            tmp$_6 = toIntMap(toMap(destination_1));
            var destination_2 = ArrayList_init(collectionSizeOrDefault(kernings, 10));
            var tmp$_12;
            tmp$_12 = kernings.iterator();
            while (tmp$_12.hasNext()) {
              var item_2 = tmp$_12.next();
              destination_2.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_2.first, item_2.second), item_2));
            }

            return new BitmapFont(this.local$fontSize, this.local$lineHeight, this.local$base, tmp$_6, toIntMap(toMap(destination_2)), tmp$_5);
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
  function readBitmapFontXml(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFontXml(content_0, fntFile_0, textures_0, imageFormat_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function drawText($receiver, font, str, x, y, color, size, horizontalAlign, verticalAlign) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (size === void 0)
      size = font.fontSize;
    if (horizontalAlign === void 0)
      horizontalAlign = HorizontalAlign$Companion_getInstance().LEFT;
    if (verticalAlign === void 0)
      verticalAlign = VerticalAlign$Companion_getInstance().TOP;
    $receiver.lock();
    try {
      var ctx = $receiver.getContext2d_6taknv$(true);
      try {
        ctx.font = font;
        ctx.fontSize = size;
        ctx.horizontalAlign = horizontalAlign;
        ctx.verticalAlign = verticalAlign;
        ctx.fillStyle = ctx.createColor_md34sx$(color);
        ctx.drawText_60a4hs$(str, numberToDouble(x), numberToDouble(y), true);
      }finally {
        ctx.dispose();
      }
    }finally {
      $receiver.unlock_2epnwg$(null);
    }
    return $receiver;
  }
  function CharacterSet(codePoints) {
    CharacterSet$Companion_getInstance();
    this.codePoints = codePoints;
  }
  CharacterSet.prototype.plus_24t8d6$ = function (other) {
    return new CharacterSet(primitiveArrayConcat(this.codePoints, other.codePoints));
  };
  function CharacterSet$Companion() {
    CharacterSet$Companion_instance = this;
    this.SPACE = CharacterSet_init(' ');
    this.UPPERCASE = CharacterSet_init(joinToString(new CharRange(65, 90), ''));
    this.LOWERCASE = CharacterSet_init(joinToString(new CharRange(97, 122), ''));
    this.NUMBERS = CharacterSet_init(joinToString(new CharRange(48, 57), ''));
    this.PUNCTUATION = CharacterSet_init('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}');
    this.LATIN_BASIC = CharacterSet_init('\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5P\xC9\xE1\xED\xF3\xFA\xF1\xD1\xAA\xB0\xBF\xAC\xBD\xBC\xA1\xAB\xBB\xDF\xB5\xF8\xB1\xF7\xB0\xB7.\xB2');
    this.LATIN_ALL = this.SPACE.plus_24t8d6$(this.UPPERCASE).plus_24t8d6$(this.LOWERCASE).plus_24t8d6$(this.NUMBERS).plus_24t8d6$(this.PUNCTUATION).plus_24t8d6$(this.LATIN_BASIC);
  }
  CharacterSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CharacterSet$Companion_instance = null;
  function CharacterSet$Companion_getInstance() {
    if (CharacterSet$Companion_instance === null) {
      new CharacterSet$Companion();
    }return CharacterSet$Companion_instance;
  }
  CharacterSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharacterSet',
    interfaces: []
  };
  function CharacterSet_init(chars, $this) {
    $this = $this || Object.create(CharacterSet.prototype);
    var destination = ArrayList_init(chars.length);
    var tmp$;
    tmp$ = iterator(chars);
    while (tmp$.hasNext()) {
      var item = unboxChar(tmp$.next());
      destination.add_11rb$(unboxChar(toBoxedChar(item)) | 0);
    }
    CharacterSet.call($this, toIntArray(destination));
    return $this;
  }
  var DefaultTtfFontBytes;
  function DefaultTtfFont$lambda() {
    var start = klock.PerformanceCounter.microseconds;
    var result = TtfFont_init(DefaultTtfFontBytes, true, 'Default Font');
    var end = klock.PerformanceCounter.microseconds;
    var $receiver = end - start;
    var elapsed = TimeSpan.Companion.fromMicroseconds_14dthe$($receiver);
    var res = new TimedResult_init(result, elapsed);
    return res.result;
  }
  var DefaultTtfFont;
  function get_DefaultTtfFont() {
    return DefaultTtfFont.value;
  }
  function Font() {
  }
  Font.prototype.getFontMetrics_fimaiv$ = function (size, metrics, callback$default) {
    if (metrics === void 0)
      metrics = new FontMetrics();
    return callback$default ? callback$default(size, metrics) : this.getFontMetrics_fimaiv$$default(size, metrics);
  };
  Font.prototype.getGlyphMetrics_e5kjls$ = function (size, codePoint, metrics, callback$default) {
    if (metrics === void 0)
      metrics = new GlyphMetrics();
    return callback$default ? callback$default(size, codePoint, metrics) : this.getGlyphMetrics_e5kjls$$default(size, codePoint, metrics);
  };
  Font.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Font',
    interfaces: []
  };
  function TextToBitmapResult(bmp, fmetrics, metrics, glyphs) {
    this.bmp = bmp;
    this.fmetrics = fmetrics;
    this.metrics = metrics;
    this.glyphs = glyphs;
  }
  function TextToBitmapResult$PlacedGlyph(codePoint, x, y, metrics, transform) {
    this.codePoint = codePoint;
    this.x = x;
    this.y = y;
    this.metrics = metrics;
    this.transform = transform;
  }
  TextToBitmapResult$PlacedGlyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlacedGlyph',
    interfaces: []
  };
  TextToBitmapResult$PlacedGlyph.prototype.component1 = function () {
    return this.codePoint;
  };
  TextToBitmapResult$PlacedGlyph.prototype.component2 = function () {
    return this.x;
  };
  TextToBitmapResult$PlacedGlyph.prototype.component3 = function () {
    return this.y;
  };
  TextToBitmapResult$PlacedGlyph.prototype.component4 = function () {
    return this.metrics;
  };
  TextToBitmapResult$PlacedGlyph.prototype.component5 = function () {
    return this.transform;
  };
  TextToBitmapResult$PlacedGlyph.prototype.copy_2s75kj$ = function (codePoint, x, y, metrics, transform) {
    return new TextToBitmapResult$PlacedGlyph(codePoint === void 0 ? this.codePoint : codePoint, x === void 0 ? this.x : x, y === void 0 ? this.y : y, metrics === void 0 ? this.metrics : metrics, transform === void 0 ? this.transform : transform);
  };
  TextToBitmapResult$PlacedGlyph.prototype.toString = function () {
    return 'PlacedGlyph(codePoint=' + Kotlin.toString(this.codePoint) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', metrics=' + Kotlin.toString(this.metrics)) + (', transform=' + Kotlin.toString(this.transform)) + ')';
  };
  TextToBitmapResult$PlacedGlyph.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.codePoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.metrics) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    return result;
  };
  TextToBitmapResult$PlacedGlyph.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.codePoint, other.codePoint) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.metrics, other.metrics) && Kotlin.equals(this.transform, other.transform)))));
  };
  TextToBitmapResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextToBitmapResult',
    interfaces: []
  };
  TextToBitmapResult.prototype.component1 = function () {
    return this.bmp;
  };
  TextToBitmapResult.prototype.component2 = function () {
    return this.fmetrics;
  };
  TextToBitmapResult.prototype.component3 = function () {
    return this.metrics;
  };
  TextToBitmapResult.prototype.component4 = function () {
    return this.glyphs;
  };
  TextToBitmapResult.prototype.copy_3h9r6p$ = function (bmp, fmetrics, metrics, glyphs) {
    return new TextToBitmapResult(bmp === void 0 ? this.bmp : bmp, fmetrics === void 0 ? this.fmetrics : fmetrics, metrics === void 0 ? this.metrics : metrics, glyphs === void 0 ? this.glyphs : glyphs);
  };
  TextToBitmapResult.prototype.toString = function () {
    return 'TextToBitmapResult(bmp=' + Kotlin.toString(this.bmp) + (', fmetrics=' + Kotlin.toString(this.fmetrics)) + (', metrics=' + Kotlin.toString(this.metrics)) + (', glyphs=' + Kotlin.toString(this.glyphs)) + ')';
  };
  TextToBitmapResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bmp) | 0;
    result = result * 31 + Kotlin.hashCode(this.fmetrics) | 0;
    result = result * 31 + Kotlin.hashCode(this.metrics) | 0;
    result = result * 31 + Kotlin.hashCode(this.glyphs) | 0;
    return result;
  };
  TextToBitmapResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bmp, other.bmp) && Kotlin.equals(this.fmetrics, other.fmetrics) && Kotlin.equals(this.metrics, other.metrics) && Kotlin.equals(this.glyphs, other.glyphs)))));
  };
  function renderGlyphToBitmap($receiver, size, codePoint, paint, fill, border, nativeRendering) {
    if (paint === void 0)
      paint = DefaultPaint_getInstance();
    if (fill === void 0)
      fill = true;
    if (border === void 0)
      border = 1;
    if (nativeRendering === void 0)
      nativeRendering = true;
    var font = $receiver;
    var fmetrics = $receiver.getFontMetrics_fimaiv$(size);
    var gmetrics = $receiver.getGlyphMetrics_e5kjls$(size, codePoint);
    var gx = -gmetrics.left;
    var gy = gmetrics.height + gmetrics.top;
    var border2 = border * 2 | 0;
    var iwidth = toIntCeil(gmetrics.width) + border2 | 0;
    var iheight = toIntCeil(gmetrics.height) + border2 | 0;
    var image = nativeRendering ? NativeImage_0(iwidth, iheight) : new Bitmap32(iwidth, iheight, void 0, true);
    image.lock();
    try {
      var ctx = image.getContext2d_6taknv$(true);
      try {
        ctx.fillStyle = paint;
        font.renderGlyph_pajsht$(ctx, size, codePoint, gx + border, gy + border, true, gmetrics);
        if (fill)
          ctx.fill();
        else
          ctx.stroke();
      }finally {
        ctx.dispose();
      }
    }finally {
      image.unlock_2epnwg$(null);
    }
    return new TextToBitmapResult(image, fmetrics, new TextMetrics(), listOf_0(new TextToBitmapResult$PlacedGlyph(codePoint, gx + border, gy + border, gmetrics, new Matrix())));
  }
  function renderTextToBitmap$lambda$lambda(closure$returnGlyphs, closure$glyphs) {
    return function (codePoint, x, y, size, metrics, transform) {
      if (closure$returnGlyphs) {
        var $receiver = closure$glyphs;
        var element = new TextToBitmapResult$PlacedGlyph(codePoint, x, y, metrics.clone(), transform.clone());
        $receiver.add_11rb$(element);
      }return Unit;
    };
  }
  function renderTextToBitmap($receiver, size, text, paint, fill, border, renderer, returnGlyphs, nativeRendering) {
    var tmp$;
    if (paint === void 0)
      paint = DefaultPaint_getInstance();
    if (fill === void 0)
      fill = true;
    if (border === void 0)
      border = 0;
    if (renderer === void 0)
      renderer = typeof (tmp$ = DefaultStringTextRenderer) === 'function' ? tmp$ : throwCCE();
    if (returnGlyphs === void 0)
      returnGlyphs = true;
    if (nativeRendering === void 0)
      nativeRendering = true;
    var font = $receiver;
    var bounds = getTextBounds($receiver, size, text, void 0, renderer);
    var glyphs = ArrayList_init_0();
    var iwidth = numberToInt(bounds.width) + (border * 2 | 0) | 0;
    var iheight = numberToInt(bounds.height) + (border * 2 | 0) | 0;
    var image = nativeRendering ? NativeImage_0(iwidth, iheight) : new Bitmap32(iwidth, iheight, void 0, true);
    image.lock();
    try {
      var ctx = image.getContext2d_6taknv$(true);
      try {
        drawText_0(font, ctx, size, text, paint, -bounds.left, -bounds.top, fill, renderer, renderTextToBitmap$lambda$lambda(returnGlyphs, glyphs));
      }finally {
        ctx.dispose();
      }
    }finally {
      image.unlock_2epnwg$(null);
    }
    return new TextToBitmapResult(image, font.getFontMetrics_fimaiv$(size), bounds, glyphs);
  }
  function drawText$ObjectLiteral(closure$ctx, closure$x, closure$y, closure$paint, closure$size, closure$placed, closure$fill) {
    this.closure$ctx = closure$ctx;
    this.closure$x = closure$x;
    this.closure$y = closure$y;
    this.closure$paint = closure$paint;
    this.closure$size = closure$size;
    this.closure$placed = closure$placed;
    this.closure$fill = closure$fill;
    TextRendererActions.call(this);
  }
  drawText$ObjectLiteral.prototype.put_za3lpa$ = function (codePoint) {
    var $this = this.closure$ctx;
    this.closure$ctx;
    this.closure$x;
    this.closure$y;
    this.closure$paint;
    this.closure$size;
    this.closure$placed;
    this.closure$fill;
    var t = $this.state.transform;
    var a = t.a;
    var b = t.b;
    var c = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      var closure$ctx = this.closure$ctx;
      var closure$x = this.closure$x;
      var closure$y = this.closure$y;
      var closure$paint = this.closure$paint;
      var closure$size = this.closure$size;
      var closure$placed = this.closure$placed;
      var closure$fill = this.closure$fill;
      var tmp$;
      var m = this.getGlyphMetrics_za3lpa$(codePoint);
      closure$ctx.translate_lu1900$(this.x + closure$x, this.y + closure$y);
      closure$ctx.transform_1ktkmn$(this.transform);
      closure$ctx.fillStyle = (tmp$ = this.paint) != null ? tmp$ : closure$paint;
      this.font.renderGlyph_pajsht$(closure$ctx, closure$size, codePoint, 0.0, 0.0, true, this.glyphMetrics);
      closure$placed != null ? closure$placed(codePoint, this.x + closure$x, this.y + closure$y, closure$size, this.glyphMetrics, this.transform) : null;
      if (closure$fill)
        closure$ctx.fill();
      else
        closure$ctx.stroke();
    }finally {
      t.setTo_15yvbs$(a, b, c, d, tx, ty);
    }
    return this.glyphMetrics;
  };
  drawText$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TextRendererActions]
  };
  function drawText_0($receiver, ctx, size, text, paint, x, y, fill, renderer, placed) {
    var tmp$;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (fill === void 0)
      fill = true;
    if (renderer === void 0)
      renderer = typeof (tmp$ = DefaultStringTextRenderer) === 'function' ? tmp$ : throwCCE();
    if (placed === void 0)
      placed = null;
    var actions = new drawText$ObjectLiteral(ctx, x, y, paint, size, placed, fill);
    renderer(actions, text, size, $receiver);
  }
  function getTextBounds($receiver, size, text, out, renderer) {
    var tmp$;
    if (out === void 0)
      out = new TextMetrics();
    if (renderer === void 0)
      renderer = typeof (tmp$ = DefaultStringTextRenderer) === 'function' ? tmp$ : throwCCE();
    var actions = new BoundBuilderTextRendererActions();
    renderer(actions, text, size, $receiver);
    actions.bb.getBounds_2da8yn$(out.bounds);
    return out;
  }
  function BoundBuilderTextRendererActions() {
    TextRendererActions.call(this);
    this.bb = new BoundsBuilder();
  }
  BoundBuilderTextRendererActions.prototype.add_0 = function (x, y) {
    var rx = this.x + this.transform.transformX_lu1900$(x, y);
    var ry = this.y + this.transform.transformY_lu1900$(x, y);
    this.bb.add_lu1900$(rx, ry);
  };
  BoundBuilderTextRendererActions.prototype.put_za3lpa$ = function (codePoint) {
    var g = this.getGlyphMetrics_za3lpa$(codePoint);
    var fx = g.bounds.left;
    var fy = g.bounds.top;
    var w = g.bounds.width;
    var h = -g.bounds.height;
    this.add_0(fx, fy);
    this.add_0(fx + w, fy);
    this.add_0(fx + w, fy + h);
    this.add_0(fx, fy + h);
    return g;
  };
  BoundBuilderTextRendererActions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundBuilderTextRendererActions',
    interfaces: [TextRendererActions]
  };
  function FontOrigin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FontOrigin_initFields() {
    FontOrigin_initFields = function () {
    };
    FontOrigin$TOP_instance = new FontOrigin('TOP', 0);
    FontOrigin$BASELINE_instance = new FontOrigin('BASELINE', 1);
  }
  var FontOrigin$TOP_instance;
  function FontOrigin$TOP_getInstance() {
    FontOrigin_initFields();
    return FontOrigin$TOP_instance;
  }
  var FontOrigin$BASELINE_instance;
  function FontOrigin$BASELINE_getInstance() {
    FontOrigin_initFields();
    return FontOrigin$BASELINE_instance;
  }
  FontOrigin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontOrigin',
    interfaces: [Enum]
  };
  function FontOrigin$values() {
    return [FontOrigin$TOP_getInstance(), FontOrigin$BASELINE_getInstance()];
  }
  FontOrigin.values = FontOrigin$values;
  function FontOrigin$valueOf(name) {
    switch (name) {
      case 'TOP':
        return FontOrigin$TOP_getInstance();
      case 'BASELINE':
        return FontOrigin$BASELINE_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.FontOrigin.' + name);
    }
  }
  FontOrigin.valueOf_61zpoe$ = FontOrigin$valueOf;
  function FontRegistry() {
    FontRegistry$Companion_getInstance();
  }
  FontRegistry.prototype.get_61zpoe$ = function (name) {
    return new SystemFont(name);
  };
  function FontRegistry$Companion() {
    FontRegistry$Companion_instance = this;
  }
  FontRegistry$Companion.prototype.invoke = function () {
    return new DefaultFontRegistry();
  };
  FontRegistry$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FontRegistry$Companion_instance = null;
  function FontRegistry$Companion_getInstance() {
    if (FontRegistry$Companion_instance === null) {
      new FontRegistry$Companion();
    }return FontRegistry$Companion_instance;
  }
  FontRegistry.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FontRegistry',
    interfaces: []
  };
  function SystemFontRegistry() {
    SystemFontRegistry_instance = this;
    DefaultFontRegistry.call(this);
    this.DEFAULT_FONT = register(get_DefaultTtfFont(), void 0, 'sans-serif');
  }
  SystemFontRegistry.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SystemFontRegistry',
    interfaces: [DefaultFontRegistry]
  };
  var SystemFontRegistry_instance = null;
  function SystemFontRegistry_getInstance() {
    if (SystemFontRegistry_instance === null) {
      new SystemFontRegistry();
    }return SystemFontRegistry_instance;
  }
  function DefaultFontRegistry() {
    this.registeredFonts_qcbzsq$_0 = new CopyOnWriteFrozenMap();
  }
  DefaultFontRegistry.prototype.normalizeName_61zpoe$ = function (name) {
    var $receiver = name.toLowerCase();
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
  };
  DefaultFontRegistry.prototype.register_1f87g2$ = function (font, name) {
    if (name === void 0)
      name = font.name;
    var $receiver = this.registeredFonts_qcbzsq$_0;
    var key = this.normalizeName_61zpoe$(name);
    $receiver.put_xwzc9p$(key, font);
    return font;
  };
  DefaultFontRegistry.prototype.unregister_61zpoe$ = function (name) {
    return this.registeredFonts_qcbzsq$_0.remove_11rb$(name);
  };
  DefaultFontRegistry.prototype.registerTemporarily_jmqjiy$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.font.DefaultFontRegistry.registerTemporarily_jmqjiy$', function (font, name, block) {
    if (name === void 0)
      name = font.name;
    this.register_1f87g2$(font, name);
    try {
      return block();
    }finally {
      this.unregister_61zpoe$(name);
    }
  });
  DefaultFontRegistry.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.registeredFonts_qcbzsq$_0.get_11rb$(this.normalizeName_61zpoe$(name))) != null ? tmp$ : new SystemFont(name);
  };
  DefaultFontRegistry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultFontRegistry',
    interfaces: [FontRegistry]
  };
  function register($receiver, registry, name) {
    if (registry === void 0)
      registry = SystemFontRegistry_getInstance();
    if (name === void 0)
      name = $receiver.name;
    registry.register_1f87g2$($receiver, name);
    return $receiver;
  }
  var registerTemporarily = defineInlineFunction('korim-root-korim.com.soywiz.korim.font.registerTemporarily_78f45l$', wrapFunction(function () {
    var font = _.com.soywiz.korim.font;
    return function ($receiver, registry, name, block) {
      if (registry === void 0)
        registry = font.SystemFontRegistry;
      if (name === void 0)
        name = $receiver.name;
      var registerTemporarily_jmqjiy$result;
      registry.register_1f87g2$($receiver, name);
      try {
        registerTemporarily_jmqjiy$result = block();
      }finally {
        registry.unregister_61zpoe$(name);
      }
      return registerTemporarily_jmqjiy$result;
    };
  }));
  function GlyphPath(path, transform) {
    if (path === void 0)
      path = new GraphicsPath();
    if (transform === void 0)
      transform = new Matrix();
    this.path = path;
    this.transform = transform;
  }
  GlyphPath.prototype.draw_vuz2tk$ = function (c) {
    var t = c.state.transform;
    var a = t.a;
    var b = t.b;
    var c_0 = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      c.beginPath();
      c.transform_1ktkmn$(this.transform);
      c.draw_x1nmjt$(this.path);
    }finally {
      t.setTo_15yvbs$(a, b, c_0, d, tx, ty);
    }
  };
  GlyphPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphPath',
    interfaces: [Drawable]
  };
  GlyphPath.prototype.component1 = function () {
    return this.path;
  };
  GlyphPath.prototype.component2 = function () {
    return this.transform;
  };
  GlyphPath.prototype.copy_qsl39w$ = function (path, transform) {
    return new GlyphPath(path === void 0 ? this.path : path, transform === void 0 ? this.transform : transform);
  };
  GlyphPath.prototype.toString = function () {
    return 'GlyphPath(path=' + Kotlin.toString(this.path) + (', transform=' + Kotlin.toString(this.transform)) + ')';
  };
  GlyphPath.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    return result;
  };
  GlyphPath.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.transform, other.transform)))));
  };
  function FontMetrics(size, top, ascent, baseline, descent, bottom, leading, maxWidth) {
    if (size === void 0)
      size = 0.0;
    if (top === void 0)
      top = 0.0;
    if (ascent === void 0)
      ascent = 0.0;
    if (baseline === void 0)
      baseline = 0.0;
    if (descent === void 0)
      descent = 0.0;
    if (bottom === void 0)
      bottom = 0.0;
    if (leading === void 0)
      leading = 0.0;
    if (maxWidth === void 0)
      maxWidth = 0.0;
    this.size = size;
    this.top = top;
    this.ascent = ascent;
    this.baseline = baseline;
    this.descent = descent;
    this.bottom = bottom;
    this.leading = leading;
    this.maxWidth = maxWidth;
  }
  Object.defineProperty(FontMetrics.prototype, 'emHeight', {
    get: function () {
      return this.ascent - this.descent;
    }
  });
  Object.defineProperty(FontMetrics.prototype, 'lineHeight', {
    get: function () {
      return this.top - this.bottom;
    }
  });
  FontMetrics.prototype.copyFromNewSize_tqohaf$ = function (other, size) {
    return this.copyFromScaled_tqohaf$(other, size / other.size);
  };
  FontMetrics.prototype.copyFromScaled_tqohaf$ = function (other, scale) {
    this.size = other.size * scale;
    this.top = other.top * scale;
    this.ascent = other.ascent * scale;
    this.baseline = other.baseline * scale;
    this.descent = other.descent * scale;
    this.bottom = other.bottom * scale;
    this.leading = other.leading * scale;
    this.maxWidth = other.maxWidth * scale;
    return this;
  };
  FontMetrics.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_61zpoe$('FontMetrics(');
    $receiver.append_61zpoe$('size=' + toIntRound(this.size) + ', ');
    $receiver.append_61zpoe$('top=' + toIntRound(this.top) + ', ');
    $receiver.append_61zpoe$('ascent=' + toIntRound(this.ascent) + ', ');
    $receiver.append_61zpoe$('baseline=' + toIntRound(this.baseline) + ', ');
    $receiver.append_61zpoe$('descent=' + toIntRound(this.descent) + ', ');
    $receiver.append_61zpoe$('bottom=' + toIntRound(this.bottom) + ', ');
    $receiver.append_61zpoe$('leading=' + toIntRound(this.leading) + ', ');
    $receiver.append_61zpoe$('emHeight=' + toIntRound(this.emHeight) + ', ');
    $receiver.append_61zpoe$('lineHeight=' + toIntRound(this.lineHeight));
    $receiver.append_61zpoe$(')');
    return $receiver.toString();
  };
  FontMetrics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontMetrics',
    interfaces: []
  };
  FontMetrics.prototype.component1 = function () {
    return this.size;
  };
  FontMetrics.prototype.component2 = function () {
    return this.top;
  };
  FontMetrics.prototype.component3 = function () {
    return this.ascent;
  };
  FontMetrics.prototype.component4 = function () {
    return this.baseline;
  };
  FontMetrics.prototype.component5 = function () {
    return this.descent;
  };
  FontMetrics.prototype.component6 = function () {
    return this.bottom;
  };
  FontMetrics.prototype.component7 = function () {
    return this.leading;
  };
  FontMetrics.prototype.component8 = function () {
    return this.maxWidth;
  };
  FontMetrics.prototype.copy_eovi6c$ = function (size, top, ascent, baseline, descent, bottom, leading, maxWidth) {
    return new FontMetrics(size === void 0 ? this.size : size, top === void 0 ? this.top : top, ascent === void 0 ? this.ascent : ascent, baseline === void 0 ? this.baseline : baseline, descent === void 0 ? this.descent : descent, bottom === void 0 ? this.bottom : bottom, leading === void 0 ? this.leading : leading, maxWidth === void 0 ? this.maxWidth : maxWidth);
  };
  FontMetrics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.ascent) | 0;
    result = result * 31 + Kotlin.hashCode(this.baseline) | 0;
    result = result * 31 + Kotlin.hashCode(this.descent) | 0;
    result = result * 31 + Kotlin.hashCode(this.bottom) | 0;
    result = result * 31 + Kotlin.hashCode(this.leading) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxWidth) | 0;
    return result;
  };
  FontMetrics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.ascent, other.ascent) && Kotlin.equals(this.baseline, other.baseline) && Kotlin.equals(this.descent, other.descent) && Kotlin.equals(this.bottom, other.bottom) && Kotlin.equals(this.leading, other.leading) && Kotlin.equals(this.maxWidth, other.maxWidth)))));
  };
  function GlyphMetrics(size, existing, codePoint, bounds, xadvance) {
    if (size === void 0)
      size = 0.0;
    if (existing === void 0)
      existing = false;
    if (codePoint === void 0)
      codePoint = 0;
    if (bounds === void 0)
      bounds = Rectangle.Companion.invoke();
    if (xadvance === void 0)
      xadvance = 0.0;
    this.size = size;
    this.existing = existing;
    this.codePoint = codePoint;
    this.bounds = bounds;
    this.xadvance = xadvance;
  }
  Object.defineProperty(GlyphMetrics.prototype, 'right', {
    get: function () {
      return this.bounds.right;
    }
  });
  Object.defineProperty(GlyphMetrics.prototype, 'bottom', {
    get: function () {
      return this.bounds.bottom;
    }
  });
  Object.defineProperty(GlyphMetrics.prototype, 'left', {
    get: function () {
      return this.bounds.left;
    }
  });
  Object.defineProperty(GlyphMetrics.prototype, 'top', {
    get: function () {
      return this.bounds.top;
    }
  });
  Object.defineProperty(GlyphMetrics.prototype, 'width', {
    get: function () {
      return this.bounds.width;
    }
  });
  Object.defineProperty(GlyphMetrics.prototype, 'height', {
    get: function () {
      return this.bounds.height;
    }
  });
  GlyphMetrics.prototype.clone = function () {
    return this.copy_ughaei$(void 0, void 0, void 0, this.bounds.clone());
  };
  GlyphMetrics.prototype.copyFromNewSize_6sgv14$ = function (other, size, codePoint) {
    if (codePoint === void 0)
      codePoint = other.codePoint;
    return this.copyFromScaled_6sgv14$(other, size / other.size, codePoint);
  };
  GlyphMetrics.prototype.copyFromScaled_6sgv14$ = function (other, scale, codePoint) {
    if (codePoint === void 0)
      codePoint = other.codePoint;
    this.size = other.size;
    this.existing = other.existing;
    this.codePoint = codePoint;
    this.bounds.setTo_6y0v78$(other.bounds.x * scale, other.bounds.y * scale, other.bounds.width * scale, other.bounds.height * scale);
    this.xadvance = other.xadvance * scale;
    return this;
  };
  GlyphMetrics.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_61zpoe$('GlyphMetrics(');
    $receiver.append_61zpoe$('codePoint=' + this.codePoint + " ('" + String.fromCharCode(toChar(this.codePoint)) + "'), ");
    $receiver.append_61zpoe$('existing=' + this.existing + ', ');
    $receiver.append_61zpoe$('xadvance=' + roundToInt(this.xadvance) + ', ');
    $receiver.append_61zpoe$('bounds=' + this.bounds.toInt());
    $receiver.append_61zpoe$(')');
    return $receiver.toString();
  };
  GlyphMetrics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphMetrics',
    interfaces: []
  };
  GlyphMetrics.prototype.component1 = function () {
    return this.size;
  };
  GlyphMetrics.prototype.component2 = function () {
    return this.existing;
  };
  GlyphMetrics.prototype.component3 = function () {
    return this.codePoint;
  };
  GlyphMetrics.prototype.component4 = function () {
    return this.bounds;
  };
  GlyphMetrics.prototype.component5 = function () {
    return this.xadvance;
  };
  GlyphMetrics.prototype.copy_ughaei$ = function (size, existing, codePoint, bounds, xadvance) {
    return new GlyphMetrics(size === void 0 ? this.size : size, existing === void 0 ? this.existing : existing, codePoint === void 0 ? this.codePoint : codePoint, bounds === void 0 ? this.bounds : bounds, xadvance === void 0 ? this.xadvance : xadvance);
  };
  GlyphMetrics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.existing) | 0;
    result = result * 31 + Kotlin.hashCode(this.codePoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.xadvance) | 0;
    return result;
  };
  GlyphMetrics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.existing, other.existing) && Kotlin.equals(this.codePoint, other.codePoint) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.xadvance, other.xadvance)))));
  };
  function TextMetrics(bounds) {
    if (bounds === void 0)
      bounds = Rectangle.Companion.invoke();
    this.bounds = bounds;
  }
  Object.defineProperty(TextMetrics.prototype, 'left', {
    get: function () {
      return this.bounds.left;
    }
  });
  Object.defineProperty(TextMetrics.prototype, 'top', {
    get: function () {
      return this.bounds.top;
    }
  });
  Object.defineProperty(TextMetrics.prototype, 'right', {
    get: function () {
      return this.bounds.right;
    }
  });
  Object.defineProperty(TextMetrics.prototype, 'bottom', {
    get: function () {
      return this.bounds.bottom;
    }
  });
  Object.defineProperty(TextMetrics.prototype, 'width', {
    get: function () {
      return this.bounds.width;
    }
  });
  Object.defineProperty(TextMetrics.prototype, 'height', {
    get: function () {
      return this.bounds.height;
    }
  });
  TextMetrics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextMetrics',
    interfaces: []
  };
  TextMetrics.prototype.component1 = function () {
    return this.bounds;
  };
  TextMetrics.prototype.copy_2da8yn$ = function (bounds) {
    return new TextMetrics(bounds === void 0 ? this.bounds : bounds);
  };
  TextMetrics.prototype.toString = function () {
    return 'TextMetrics(bounds=' + Kotlin.toString(this.bounds) + ')';
  };
  TextMetrics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  TextMetrics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bounds, other.bounds))));
  };
  function NativeSystemFontProvider() {
  }
  NativeSystemFontProvider.prototype.getSystemFontGlyph_wjnvxz$$default = function (systemFont, size, codePoint, path) {
    return null;
  };
  NativeSystemFontProvider.prototype.getSystemFontGlyph_wjnvxz$ = function (systemFont, size, codePoint, path, callback$default) {
    if (path === void 0)
      path = new GlyphPath();
    return callback$default ? callback$default(systemFont, size, codePoint, path) : this.getSystemFontGlyph_wjnvxz$$default(systemFont, size, codePoint, path);
  };
  NativeSystemFontProvider.prototype.getSystemFontMetrics_cortg8$ = function (systemFont, size, metrics) {
    var ascentRatio = 0.8;
    metrics.size = size;
    metrics.top = size * ascentRatio;
    metrics.ascent = metrics.top;
    metrics.baseline = 0.0;
    metrics.descent = -size * (1.0 - ascentRatio);
    metrics.bottom = metrics.descent;
    metrics.maxWidth = size;
  };
  NativeSystemFontProvider.prototype.getSystemFontGlyphMetrics_gne02n$ = function (systemFont, size, codePoint, metrics) {
    metrics.existing = false;
    metrics.bounds.setTo_6y0v78$(0.0, 0.0, size, size);
    metrics.xadvance = size;
  };
  NativeSystemFontProvider.prototype.getSystemFontKerning_bab4v1$ = function (systemFont, size, leftCodePoint, rightCodePoint) {
    return 0.0;
  };
  NativeSystemFontProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSystemFontProvider',
    interfaces: []
  };
  function FallbackNativeSystemFontProvider(ttf) {
    NativeSystemFontProvider.call(this);
    this.ttf = ttf;
  }
  FallbackNativeSystemFontProvider.prototype.getSystemFontGlyph_wjnvxz$$default = function (systemFont, size, codePoint, path) {
    return this.ttf.getGlyphPath_mvgud4$(size, codePoint, path);
  };
  FallbackNativeSystemFontProvider.prototype.getSystemFontMetrics_cortg8$ = function (systemFont, size, metrics) {
    this.ttf.getFontMetrics_fimaiv$(size, metrics);
  };
  FallbackNativeSystemFontProvider.prototype.getSystemFontGlyphMetrics_gne02n$ = function (systemFont, size, codePoint, metrics) {
    this.ttf.getGlyphMetrics_e5kjls$(size, codePoint, metrics);
  };
  FallbackNativeSystemFontProvider.prototype.getSystemFontKerning_bab4v1$ = function (systemFont, size, leftCodePoint, rightCodePoint) {
    return this.ttf.getKerning_mqu1mq$(size, leftCodePoint, rightCodePoint);
  };
  FallbackNativeSystemFontProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FallbackNativeSystemFontProvider',
    interfaces: [NativeSystemFontProvider]
  };
  function SystemFont(name) {
    this.name_flv99o$_0 = name;
  }
  Object.defineProperty(SystemFont.prototype, 'name', {
    get: function () {
      return this.name_flv99o$_0;
    }
  });
  SystemFont.prototype.getFontMetrics_fimaiv$$default = function (size, metrics) {
    nativeSystemFontProvider.getSystemFontMetrics_cortg8$(this, size, metrics);
    return metrics;
  };
  SystemFont.prototype.getGlyphMetrics_e5kjls$$default = function (size, codePoint, metrics) {
    nativeSystemFontProvider.getSystemFontGlyphMetrics_gne02n$(this, size, codePoint, metrics);
    return metrics;
  };
  SystemFont.prototype.getKerning_mqu1mq$ = function (size, leftCodePoint, rightCodePoint) {
    return nativeSystemFontProvider.getSystemFontKerning_bab4v1$(this, size, leftCodePoint, rightCodePoint);
  };
  SystemFont.prototype.getGlyphPath_mvgud4$$default = function (size, codePoint, path) {
    return nativeSystemFontProvider.getSystemFontGlyph_wjnvxz$(this, size, codePoint, path);
  };
  SystemFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SystemFont',
    interfaces: [VectorFont]
  };
  SystemFont.prototype.unbox = function () {
    return this.name;
  };
  SystemFont.prototype.toString = function () {
    return 'SystemFont(name=' + Kotlin.toString(this.name) + ')';
  };
  SystemFont.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  SystemFont.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function TextRendererActions() {
    this.glyphMetrics = new GlyphMetrics();
    this.fontMetrics = new FontMetrics();
    this.font_uanlur$_0 = this.font_uanlur$_0;
    this.fontSize_hn5rmk$_0 = 0.0;
    this.x = 0.0;
    this.y = 0.0;
    this.transform = new Matrix();
    this.paint = null;
    this.tint = Colors_getInstance().WHITE;
  }
  Object.defineProperty(TextRendererActions.prototype, 'lineHeight', {
    get: function () {
      return this.fontMetrics.lineHeight;
    }
  });
  Object.defineProperty(TextRendererActions.prototype, 'font', {
    get: function () {
      if (this.font_uanlur$_0 == null)
        return throwUPAE('font');
      return this.font_uanlur$_0;
    },
    set: function (font) {
      this.font_uanlur$_0 = font;
    }
  });
  Object.defineProperty(TextRendererActions.prototype, 'fontSize', {
    get: function () {
      return this.fontSize_hn5rmk$_0;
    },
    set: function (fontSize) {
      this.fontSize_hn5rmk$_0 = fontSize;
    }
  });
  TextRendererActions.prototype.setFont_8llqlu$ = function (font, size) {
    this.font = font;
    this.fontSize = size;
    font.getFontMetrics_fimaiv$(size, this.fontMetrics);
  };
  TextRendererActions.prototype.reset = function () {
    this.x = 0.0;
    this.y = 0.0;
  };
  TextRendererActions.prototype.getGlyphMetrics_za3lpa$ = function (codePoint) {
    return this.font.getGlyphMetrics_e5kjls$(this.fontSize, codePoint, this.glyphMetrics);
  };
  TextRendererActions.prototype.getKerning_vux9f0$ = function (leftCodePoint, rightCodePoint) {
    return this.font.getKerning_mqu1mq$(this.fontSize, leftCodePoint, rightCodePoint);
  };
  TextRendererActions.prototype.advance_14dthe$ = function (x) {
    this.x = this.x + x;
  };
  TextRendererActions.prototype.newLine_14dthe$ = function (y) {
    this.x = 0.0;
    this.y = this.y + y;
  };
  TextRendererActions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextRendererActions',
    interfaces: []
  };
  var DefaultTextRenderer = defineInlineFunction('korim-root-korim.com.soywiz.korim.font.DefaultTextRenderer_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var font = _.com.soywiz.korim.font;
    var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
    var equals = Kotlin.equals;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT) {
      if (equals(getKClass(T_0), PrimitiveClasses$stringClass))
        return font.DefaultStringTextRenderer;
      else {
        throw IllegalStateException_init(('No default DefaultTextRenderer for class ' + getKClass(T_0) + ' only for String').toString());
      }
    };
  }));
  function CreateStringTextRenderer$lambda(closure$handler) {
    return function ($receiver, text, size, defaultFont) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      $receiver.reset();
      $receiver.setFont_8llqlu$(defaultFont, size);
      tmp$ = get_indices(text);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var n = tmp$_0; n <= tmp$_1; n += tmp$_2) {
        var c = text.charCodeAt(n) | 0;
        var index = n + 1 | 0;
        var c1 = (index >= 0 && index <= get_lastIndex(text) ? text.charCodeAt(index) : unboxChar(toBoxedChar(0))) | 0;
        if (c === 10) {
          $receiver.newLine_14dthe$($receiver.lineHeight);
        } else {
          var g = $receiver.getGlyphMetrics_za3lpa$(c);
          $receiver.transform.identity();
          closure$handler($receiver, text, n, c, c1, g, g.xadvance + $receiver.getKerning_vux9f0$(c, c1));
        }
      }
      return Unit;
    };
  }
  function CreateStringTextRenderer(handler) {
    return CreateStringTextRenderer$lambda(handler);
  }
  function DefaultStringTextRenderer$lambda($receiver, text, n, c, c1, g, advance) {
    $receiver.put_za3lpa$(c);
    $receiver.advance_14dthe$(advance);
    return Unit;
  }
  var DefaultStringTextRenderer;
  function TtfFont(s, freeze, extName) {
    if (freeze === void 0)
      freeze = false;
    if (extName === void 0)
      extName = null;
    this.s_0 = s;
    this.freeze_0 = freeze;
    this.extName_0 = extName;
    var array = Array_0(3);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new TtfFont$Contour();
    }
    this.tempContours_0 = array;
    this.numGlyphs_0 = 0;
    this.maxPoints_0 = 0;
    this.maxContours_0 = 0;
    this.maxCompositePoints_0 = 0;
    this.maxCompositeContours_0 = 0;
    this.maxZones_0 = 0;
    this.maxTwilightPoints_0 = 0;
    this.maxStorage_0 = 0;
    this.maxFunctionDefs_0 = 0;
    this.maxInstructionDefs_0 = 0;
    this.maxStackElements_0 = 0;
    this.maxSizeOfInstructions_0 = 0;
    this.maxComponentElements_0 = 0;
    this.maxComponentDepth_0 = 0;
    this.hheaVersion_0 = Fixed$Companion_getInstance().invoke_vux9f0$(0, 0);
    this.ascender_0 = 0;
    this.descender_0 = 0;
    this.lineGap_0 = 0;
    this.advanceWidthMax_0 = 0;
    this.minLeftSideBearing_0 = 0;
    this.minRightSideBearing_0 = 0;
    this.xMaxExtent_0 = 0;
    this.caretSlopeRise_0 = 0;
    this.caretSlopeRun_0 = 0;
    this.caretOffset_0 = 0;
    this.metricDataFormat_0 = 0;
    this.numberOfHMetrics_0 = 0;
    this.locs_0 = new Int32Array(0);
    this.fontRev_0 = Fixed$Companion_getInstance().invoke_vux9f0$(0, 0);
    this.unitsPerEm_0 = 128;
    this.xMin_0 = 0;
    this.yMin_0 = 0;
    this.xMax_0 = 0;
    this.yMax_0 = 0;
    this.macStyle_0 = 0;
    this.lowestRecPPEM_0 = 0;
    this.fontDirectionHint_0 = 0;
    this.indexToLocFormat_0 = 0;
    this.glyphDataFormat_0 = 0;
    this.horMetrics_0 = emptyList();
    this.characterMaps_0 = LinkedHashMap_init();
    this.tablesByName_0 = LinkedHashMap_init();
    this.glyphCache_0 = IntMap_init();
    this.frozen_0 = false;
    this.readHeaderTables_0();
    this.readHead_0();
    this.readMaxp_0();
    this.readHhea_0();
    this.readNames_0();
    this.readLoca_0();
    this.readCmap_0();
    this.readHmtx_0();
    if (this.freeze_0) {
      var $receiver = this.getAllGlyphs_0(true);
      var tmp$_0;
      var n = 0;
      while (n < $receiver.size) {
        var it = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        it.metrics1px_8be2vx$;
        it.path;
      }
    }this.frozen_0 = true;
    var $receiver_0 = new FontMetrics();
    var scale = this.getTextScale_0(1.0);
    $receiver_0.size = 1.0;
    $receiver_0.top = this.yMax_0 * scale;
    $receiver_0.ascent = this.ascender_0 * scale;
    $receiver_0.baseline = 0.0 * scale;
    $receiver_0.descent = this.descender_0 * scale;
    $receiver_0.bottom = this.yMin_0 * scale;
    $receiver_0.leading = this.lineGap_0 * scale;
    $receiver_0.maxWidth = this.advanceWidthMax_0 * scale;
    this.fontMetrics1px_0 = $receiver_0;
    this.nonExistantGlyphMetrics1px_0 = new GlyphMetrics(1.0, false, 0, Rectangle.Companion.invoke(), 0.0);
  }
  TtfFont.prototype.getFontMetrics_fimaiv$$default = function (size, metrics) {
    return metrics.copyFromNewSize_tqohaf$(this.fontMetrics1px_0, size);
  };
  TtfFont.prototype.getGlyphMetrics_e5kjls$$default = function (size, codePoint, metrics) {
    var tmp$, tmp$_0;
    return metrics.copyFromNewSize_6sgv14$((tmp$_0 = (tmp$ = this.getGlyphByCodePoint_0(codePoint)) != null ? tmp$.metrics1px_8be2vx$ : null) != null ? tmp$_0 : this.nonExistantGlyphMetrics1px_0, size, codePoint);
  };
  TtfFont.prototype.getKerning_mqu1mq$ = function (size, leftCodePoint, rightCodePoint) {
    return 0.0;
  };
  TtfFont.prototype.getGlyphPath_mvgud4$$default = function (size, codePoint, path) {
    var tmp$;
    tmp$ = this.getGlyphByCodePoint_0(codePoint);
    if (tmp$ == null) {
      return null;
    }var g = tmp$;
    var scale = this.getTextScale_0(size);
    path.path = g.path;
    path.transform.identity();
    path.transform.scale_lu1900$(scale, scale);
    return path;
  };
  TtfFont.prototype.getTextScale_0 = function (size) {
    return size / this.unitsPerEm_0;
  };
  Object.defineProperty(TtfFont.prototype, 'lineHeight_0', {
    get: function () {
      return this.yMax_0 - this.yMin_0 | 0;
    }
  });
  TtfFont.prototype.getCharacterMapOrNull_0 = function (key) {
    return this.characterMaps_0.get_11rb$(key);
  };
  Object.defineProperty(TtfFont.prototype, 'name', {
    get: function () {
      var tmp$;
      return (tmp$ = this.extName_0) != null ? tmp$ : 'TtfFont';
    }
  });
  function TtfFont$Table(id, checksum, offset, length) {
    this.id = id;
    this.checksum = checksum;
    this.offset = offset;
    this.length = length;
    this.s_1egyfh$_0 = this.s_1egyfh$_0;
  }
  Object.defineProperty(TtfFont$Table.prototype, 's', {
    get: function () {
      if (this.s_1egyfh$_0 == null)
        return throwUPAE('s');
      return this.s_1egyfh$_0;
    },
    set: function (s) {
      this.s_1egyfh$_0 = s;
    }
  });
  TtfFont$Table.prototype.open = function () {
    return this.s.clone();
  };
  TtfFont$Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: []
  };
  TtfFont$Table.prototype.component1 = function () {
    return this.id;
  };
  TtfFont$Table.prototype.component2 = function () {
    return this.checksum;
  };
  TtfFont$Table.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$Table.prototype.component4 = function () {
    return this.length;
  };
  TtfFont$Table.prototype.copy_wfrsr4$ = function (id, checksum, offset, length) {
    return new TtfFont$Table(id === void 0 ? this.id : id, checksum === void 0 ? this.checksum : checksum, offset === void 0 ? this.offset : offset, length === void 0 ? this.length : length);
  };
  TtfFont$Table.prototype.toString = function () {
    return 'Table(id=' + Kotlin.toString(this.id) + (', checksum=' + Kotlin.toString(this.checksum)) + (', offset=' + Kotlin.toString(this.offset)) + (', length=' + Kotlin.toString(this.length)) + ')';
  };
  TtfFont$Table.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.checksum) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    return result;
  };
  TtfFont$Table.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.checksum, other.checksum) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.length, other.length)))));
  };
  function TtfFont$NameIds(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$NameIds_initFields() {
    TtfFont$NameIds_initFields = function () {
    };
    TtfFont$NameIds$COPYRIGHT_instance = new TtfFont$NameIds('COPYRIGHT', 0, 0);
    TtfFont$NameIds$FONT_FAMILY_NAME_instance = new TtfFont$NameIds('FONT_FAMILY_NAME', 1, 1);
    TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance = new TtfFont$NameIds('FONT_SUBFAMILY_NAME', 2, 2);
    TtfFont$NameIds$UNIQUE_FONT_ID_instance = new TtfFont$NameIds('UNIQUE_FONT_ID', 3, 3);
    TtfFont$NameIds$FULL_FONT_NAME_instance = new TtfFont$NameIds('FULL_FONT_NAME', 4, 4);
    TtfFont$NameIds$VERSION_STRING_instance = new TtfFont$NameIds('VERSION_STRING', 5, 5);
    TtfFont$NameIds$POSTSCRIPT_NAME_instance = new TtfFont$NameIds('POSTSCRIPT_NAME', 6, 6);
    TtfFont$NameIds$TRADEMARK_instance = new TtfFont$NameIds('TRADEMARK', 7, 7);
    TtfFont$NameIds$MANUFACTURER_instance = new TtfFont$NameIds('MANUFACTURER', 8, 8);
    TtfFont$NameIds$DESIGNER_instance = new TtfFont$NameIds('DESIGNER', 9, 9);
    TtfFont$NameIds$DESCRIPTION_instance = new TtfFont$NameIds('DESCRIPTION', 10, 10);
    TtfFont$NameIds$URL_VENDOR_instance = new TtfFont$NameIds('URL_VENDOR', 11, 11);
    TtfFont$NameIds$URL_DESIGNER_instance = new TtfFont$NameIds('URL_DESIGNER', 12, 12);
    TtfFont$NameIds$LICENSE_DESCRIPTION_instance = new TtfFont$NameIds('LICENSE_DESCRIPTION', 13, 13);
    TtfFont$NameIds$LICENSE_URL_instance = new TtfFont$NameIds('LICENSE_URL', 14, 14);
    TtfFont$NameIds$RESERVED_15_instance = new TtfFont$NameIds('RESERVED_15', 15, 15);
    TtfFont$NameIds$TYPO_FAMILY_NAME_instance = new TtfFont$NameIds('TYPO_FAMILY_NAME', 16, 16);
    TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance = new TtfFont$NameIds('TYPO_SUBFAMILY_NAME', 17, 17);
    TtfFont$NameIds$COMPATIBLE_FULL_instance = new TtfFont$NameIds('COMPATIBLE_FULL', 18, 18);
    TtfFont$NameIds$SAMPLE_TEXT_instance = new TtfFont$NameIds('SAMPLE_TEXT', 19, 19);
    TtfFont$NameIds$POSTSCRIPT_CID_instance = new TtfFont$NameIds('POSTSCRIPT_CID', 20, 20);
    TtfFont$NameIds$WWS_FAMILY_NAME_instance = new TtfFont$NameIds('WWS_FAMILY_NAME', 21, 21);
    TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance = new TtfFont$NameIds('WWS_SUBFAMILY_NAME', 22, 22);
    TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('LIGHT_BACKGROUND_PALETTE', 23, 23);
    TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('DARK_BACKGROUND_PALETTE', 24, 24);
    TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance = new TtfFont$NameIds('VARIATIONS_POSTSCRIPT_NAME_PREFIX', 25, 25);
    TtfFont$NameIds$Companion_getInstance();
  }
  var TtfFont$NameIds$COPYRIGHT_instance;
  function TtfFont$NameIds$COPYRIGHT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COPYRIGHT_instance;
  }
  var TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  function TtfFont$NameIds$UNIQUE_FONT_ID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  }
  var TtfFont$NameIds$FULL_FONT_NAME_instance;
  function TtfFont$NameIds$FULL_FONT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FULL_FONT_NAME_instance;
  }
  var TtfFont$NameIds$VERSION_STRING_instance;
  function TtfFont$NameIds$VERSION_STRING_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VERSION_STRING_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  function TtfFont$NameIds$POSTSCRIPT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  }
  var TtfFont$NameIds$TRADEMARK_instance;
  function TtfFont$NameIds$TRADEMARK_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TRADEMARK_instance;
  }
  var TtfFont$NameIds$MANUFACTURER_instance;
  function TtfFont$NameIds$MANUFACTURER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$MANUFACTURER_instance;
  }
  var TtfFont$NameIds$DESIGNER_instance;
  function TtfFont$NameIds$DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESIGNER_instance;
  }
  var TtfFont$NameIds$DESCRIPTION_instance;
  function TtfFont$NameIds$DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESCRIPTION_instance;
  }
  var TtfFont$NameIds$URL_VENDOR_instance;
  function TtfFont$NameIds$URL_VENDOR_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_VENDOR_instance;
  }
  var TtfFont$NameIds$URL_DESIGNER_instance;
  function TtfFont$NameIds$URL_DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_DESIGNER_instance;
  }
  var TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  function TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  }
  var TtfFont$NameIds$LICENSE_URL_instance;
  function TtfFont$NameIds$LICENSE_URL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_URL_instance;
  }
  var TtfFont$NameIds$RESERVED_15_instance;
  function TtfFont$NameIds$RESERVED_15_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$RESERVED_15_instance;
  }
  var TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$COMPATIBLE_FULL_instance;
  function TtfFont$NameIds$COMPATIBLE_FULL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COMPATIBLE_FULL_instance;
  }
  var TtfFont$NameIds$SAMPLE_TEXT_instance;
  function TtfFont$NameIds$SAMPLE_TEXT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$SAMPLE_TEXT_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_CID_instance;
  function TtfFont$NameIds$POSTSCRIPT_CID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_CID_instance;
  }
  var TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  function TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  }
  function TtfFont$NameIds$Companion() {
    TtfFont$NameIds$Companion_instance = this;
    this.names = TtfFont$NameIds$values();
  }
  TtfFont$NameIds$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$NameIds$Companion_instance = null;
  function TtfFont$NameIds$Companion_getInstance() {
    TtfFont$NameIds_initFields();
    if (TtfFont$NameIds$Companion_instance === null) {
      new TtfFont$NameIds$Companion();
    }return TtfFont$NameIds$Companion_instance;
  }
  TtfFont$NameIds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NameIds',
    interfaces: [Enum]
  };
  function TtfFont$NameIds$values() {
    return [TtfFont$NameIds$COPYRIGHT_getInstance(), TtfFont$NameIds$FONT_FAMILY_NAME_getInstance(), TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$UNIQUE_FONT_ID_getInstance(), TtfFont$NameIds$FULL_FONT_NAME_getInstance(), TtfFont$NameIds$VERSION_STRING_getInstance(), TtfFont$NameIds$POSTSCRIPT_NAME_getInstance(), TtfFont$NameIds$TRADEMARK_getInstance(), TtfFont$NameIds$MANUFACTURER_getInstance(), TtfFont$NameIds$DESIGNER_getInstance(), TtfFont$NameIds$DESCRIPTION_getInstance(), TtfFont$NameIds$URL_VENDOR_getInstance(), TtfFont$NameIds$URL_DESIGNER_getInstance(), TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance(), TtfFont$NameIds$LICENSE_URL_getInstance(), TtfFont$NameIds$RESERVED_15_getInstance(), TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance(), TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$COMPATIBLE_FULL_getInstance(), TtfFont$NameIds$SAMPLE_TEXT_getInstance(), TtfFont$NameIds$POSTSCRIPT_CID_getInstance(), TtfFont$NameIds$WWS_FAMILY_NAME_getInstance(), TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance()];
  }
  TtfFont$NameIds.values = TtfFont$NameIds$values;
  function TtfFont$NameIds$valueOf(name) {
    switch (name) {
      case 'COPYRIGHT':
        return TtfFont$NameIds$COPYRIGHT_getInstance();
      case 'FONT_FAMILY_NAME':
        return TtfFont$NameIds$FONT_FAMILY_NAME_getInstance();
      case 'FONT_SUBFAMILY_NAME':
        return TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance();
      case 'UNIQUE_FONT_ID':
        return TtfFont$NameIds$UNIQUE_FONT_ID_getInstance();
      case 'FULL_FONT_NAME':
        return TtfFont$NameIds$FULL_FONT_NAME_getInstance();
      case 'VERSION_STRING':
        return TtfFont$NameIds$VERSION_STRING_getInstance();
      case 'POSTSCRIPT_NAME':
        return TtfFont$NameIds$POSTSCRIPT_NAME_getInstance();
      case 'TRADEMARK':
        return TtfFont$NameIds$TRADEMARK_getInstance();
      case 'MANUFACTURER':
        return TtfFont$NameIds$MANUFACTURER_getInstance();
      case 'DESIGNER':
        return TtfFont$NameIds$DESIGNER_getInstance();
      case 'DESCRIPTION':
        return TtfFont$NameIds$DESCRIPTION_getInstance();
      case 'URL_VENDOR':
        return TtfFont$NameIds$URL_VENDOR_getInstance();
      case 'URL_DESIGNER':
        return TtfFont$NameIds$URL_DESIGNER_getInstance();
      case 'LICENSE_DESCRIPTION':
        return TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance();
      case 'LICENSE_URL':
        return TtfFont$NameIds$LICENSE_URL_getInstance();
      case 'RESERVED_15':
        return TtfFont$NameIds$RESERVED_15_getInstance();
      case 'TYPO_FAMILY_NAME':
        return TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance();
      case 'TYPO_SUBFAMILY_NAME':
        return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance();
      case 'COMPATIBLE_FULL':
        return TtfFont$NameIds$COMPATIBLE_FULL_getInstance();
      case 'SAMPLE_TEXT':
        return TtfFont$NameIds$SAMPLE_TEXT_getInstance();
      case 'POSTSCRIPT_CID':
        return TtfFont$NameIds$POSTSCRIPT_CID_getInstance();
      case 'WWS_FAMILY_NAME':
        return TtfFont$NameIds$WWS_FAMILY_NAME_getInstance();
      case 'WWS_SUBFAMILY_NAME':
        return TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance();
      case 'LIGHT_BACKGROUND_PALETTE':
        return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance();
      case 'DARK_BACKGROUND_PALETTE':
        return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance();
      case 'VARIATIONS_POSTSCRIPT_NAME_PREFIX':
        return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.TtfFont.NameIds.' + name);
    }
  }
  TtfFont$NameIds.valueOf_61zpoe$ = TtfFont$NameIds$valueOf;
  TtfFont.prototype.readFixed_ucmi9i$ = function ($receiver) {
    return Fixed$Companion_getInstance().invoke_vux9f0$(readS16LE($receiver), readS16LE($receiver));
  };
  function TtfFont$HorMetric(advanceWidth, lsb) {
    this.advanceWidth = advanceWidth;
    this.lsb = lsb;
  }
  TtfFont$HorMetric.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorMetric',
    interfaces: []
  };
  TtfFont$HorMetric.prototype.component1 = function () {
    return this.advanceWidth;
  };
  TtfFont$HorMetric.prototype.component2 = function () {
    return this.lsb;
  };
  TtfFont$HorMetric.prototype.copy_vux9f0$ = function (advanceWidth, lsb) {
    return new TtfFont$HorMetric(advanceWidth === void 0 ? this.advanceWidth : advanceWidth, lsb === void 0 ? this.lsb : lsb);
  };
  TtfFont$HorMetric.prototype.toString = function () {
    return 'HorMetric(advanceWidth=' + Kotlin.toString(this.advanceWidth) + (', lsb=' + Kotlin.toString(this.lsb)) + ')';
  };
  TtfFont$HorMetric.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.advanceWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.lsb) | 0;
    return result;
  };
  TtfFont$HorMetric.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.advanceWidth, other.advanceWidth) && Kotlin.equals(this.lsb, other.lsb)))));
  };
  TtfFont.prototype.openTable_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.tablesByName_0.get_11rb$(name)) != null ? tmp$.open() : null;
  };
  TtfFont.prototype.readHeaderTables_0 = function () {
    var $receiver = sliceStart(this.s_0);
    var tmp$;
    var $receiver_0 = readU16BE_0($receiver);
    if ($receiver_0 !== 1)
      invalidOp('Not a TTF file');
    var majorVersion = $receiver_0;
    var $receiver_1 = readU16BE_0($receiver);
    if ($receiver_1 !== 0)
      invalidOp('Not a TTF file');
    var minorVersion = $receiver_1;
    var numTables = readU16BE_0($receiver);
    var searchRange = readU16BE_0($receiver);
    var entrySelector = readU16BE_0($receiver);
    var rangeShift = readU16BE_0($receiver);
    var $receiver_2 = until(0, numTables);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_0;
    tmp$_0 = $receiver_2.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new TtfFont$Table(readStringz($receiver, 4), readS32BE_0($receiver), readS32BE_0($receiver), readS32BE_0($receiver)));
    }
    var tables = destination;
    tmp$ = tables.iterator();
    while (tmp$.hasNext()) {
      var table = tmp$.next();
      table.s = sliceWithSize($receiver, table.offset, table.length);
      var $receiver_3 = this.tablesByName_0;
      var key = table.id;
      $receiver_3.put_xwzc9p$(key, table);
    }
    return $receiver;
  };
  TtfFont.prototype.runTableUnit_0 = function (name, callback) {
    var tmp$;
    (tmp$ = this.openTable_61zpoe$(name)) != null ? callback(tmp$) : null;
  };
  TtfFont.prototype.runTable_0 = function (name, callback) {
    var tmp$;
    return (tmp$ = this.openTable_61zpoe$(name)) != null ? callback(tmp$, ensureNotNull(this.tablesByName_0.get_11rb$(name))) : null;
  };
  TtfFont.prototype.readNames_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('name')) != null) {
      var tmp$_0;
      var format = readU16BE_0(tmp$);
      var count = readU16BE_0(tmp$);
      var stringOffset = readU16BE_0(tmp$);
      for (var n = 0; n < count; n++) {
        var platformId = readU16BE_0(tmp$);
        var encodingId = readU16BE_0(tmp$);
        var languageId = readU16BE_0(tmp$);
        var nameId = readU16BE_0(tmp$);
        var length = readU16BE_0(tmp$);
        var offset = readU16BE_0(tmp$);
        switch (encodingId) {
          case 0:
            tmp$_0 = lang.UTF8;
            break;
          case 1:
            tmp$_0 = lang.UTF16_BE;
            break;
          default:tmp$_0 = lang.UTF16_BE;
            break;
        }
        var charset = tmp$_0;
        var string = toString(readAll(sliceWithSize_0(tmp$.clone(), Kotlin.Long.fromInt(stringOffset).add(Kotlin.Long.fromInt(offset)), Kotlin.Long.fromInt(length))), charset);
      }
    }};
  TtfFont.prototype.readLoca_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('loca')) != null) {
      var tmp$_0;
      switch (this.indexToLocFormat_0) {
        case 0:
          tmp$_0 = 2;
          break;
        case 1:
          tmp$_0 = 4;
          break;
        default:tmp$_0 = lang.invalidOp;
          break;
      }
      var bytesPerEntry = tmp$_0;
      var data = readBytesExact(tmp$, Kotlin.imul(bytesPerEntry, this.numGlyphs_0 + 1 | 0));
      var $receiver = new FastByteArrayInputStream(data);
      var block$result;
      block$break: do {
        switch (this.indexToLocFormat_0) {
          case 0:
            var array = new Int32Array(this.numGlyphs_0 + 1 | 0);
            var tmp$_1;
            tmp$_1 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_1; i++) {
              array[i] = $receiver.readU16BE() * 2 | 0;
            }

            block$result = array;
            break block$break;
          case 1:
            var array_0 = new Int32Array(this.numGlyphs_0 + 1 | 0);
            var tmp$_2;
            tmp$_2 = array_0.length - 1 | 0;
            for (var i_0 = 0; i_0 <= tmp$_2; i_0++) {
              array_0[i_0] = $receiver.readS32BE();
            }

            block$result = array_0;
            break block$break;
          default:block$result = lang.invalidOp;
            break block$break;
        }
      }
       while (false);
      this.locs_0 = block$result;
    }};
  TtfFont.prototype.readHead_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('head')) != null) {
      if (readU16BE_0(tmp$) !== 1)
        invalidOp('Invalid TTF');
      if (readU16BE_0(tmp$) !== 0)
        invalidOp('Invalid TTF');
      this.fontRev_0 = this.readFixed_ucmi9i$(tmp$);
      var checkSumAdjustment = readS32BE_0(tmp$);
      var $receiver = readS32BE_0(tmp$);
      if ($receiver !== 1594834165)
        invalidOp('Invalid magic ' + get_hex($receiver));
      var flags = readU16BE_0(tmp$);
      this.unitsPerEm_0 = readU16BE_0(tmp$);
      var created = readS64BE(tmp$).multiply(L1000);
      var modified = readS64BE(tmp$).multiply(L1000);
      this.xMin_0 = readS16BE(tmp$);
      this.yMin_0 = readS16BE(tmp$);
      this.xMax_0 = readS16BE(tmp$);
      this.yMax_0 = readS16BE(tmp$);
      this.macStyle_0 = readU16BE_0(tmp$);
      this.lowestRecPPEM_0 = readU16BE_0(tmp$);
      this.fontDirectionHint_0 = readS16BE(tmp$);
      this.indexToLocFormat_0 = readS16BE(tmp$);
      this.glyphDataFormat_0 = readS16BE(tmp$);
    }};
  TtfFont.prototype.readMaxp_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('maxp')) != null) {
      var version = this.readFixed_ucmi9i$(tmp$);
      this.numGlyphs_0 = readU16BE_0(tmp$);
      this.maxPoints_0 = readU16BE_0(tmp$);
      this.maxContours_0 = readU16BE_0(tmp$);
      this.maxCompositePoints_0 = readU16BE_0(tmp$);
      this.maxCompositeContours_0 = readU16BE_0(tmp$);
      this.maxZones_0 = readU16BE_0(tmp$);
      this.maxTwilightPoints_0 = readU16BE_0(tmp$);
      this.maxStorage_0 = readU16BE_0(tmp$);
      this.maxFunctionDefs_0 = readU16BE_0(tmp$);
      this.maxInstructionDefs_0 = readU16BE_0(tmp$);
      this.maxStackElements_0 = readU16BE_0(tmp$);
      this.maxSizeOfInstructions_0 = readU16BE_0(tmp$);
      this.maxComponentElements_0 = readU16BE_0(tmp$);
      this.maxComponentDepth_0 = readU16BE_0(tmp$);
    }};
  TtfFont.prototype.readHhea_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('hhea')) != null) {
      this.hheaVersion_0 = this.readFixed_ucmi9i$(tmp$);
      this.ascender_0 = readS16BE(tmp$);
      this.descender_0 = readS16BE(tmp$);
      this.lineGap_0 = readS16BE(tmp$);
      this.advanceWidthMax_0 = readU16BE_0(tmp$);
      this.minLeftSideBearing_0 = readS16BE(tmp$);
      this.minRightSideBearing_0 = readS16BE(tmp$);
      this.xMaxExtent_0 = readS16BE(tmp$);
      this.caretSlopeRise_0 = readS16BE(tmp$);
      this.caretSlopeRun_0 = readS16BE(tmp$);
      this.caretOffset_0 = readS16BE(tmp$);
      readS16BE(tmp$);
      readS16BE(tmp$);
      readS16BE(tmp$);
      readS16BE(tmp$);
      this.metricDataFormat_0 = readS16BE(tmp$);
      this.numberOfHMetrics_0 = readU16BE_0(tmp$);
    }};
  TtfFont.prototype.readHmtx_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('hmtx')) != null) {
      var $receiver = until(0, this.numberOfHMetrics_0);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(new TtfFont$HorMetric(readU16BE_0(tmp$), readS16BE(tmp$)));
      }
      var firstMetrics = destination;
      var lastAdvanceWidth = last(firstMetrics).advanceWidth;
      var $receiver_0 = until(0, this.numGlyphs_0 - this.numberOfHMetrics_0 | 0);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new TtfFont$HorMetric(lastAdvanceWidth, readS16BE(tmp$)));
      }
      var compressedMetrics = destination_0;
      this.horMetrics_0 = plus(firstMetrics, compressedMetrics);
    }};
  function TtfFont$readCmap$lambda$EncodingRecord(platformId, encodingId, offset) {
    this.platformId = platformId;
    this.encodingId = encodingId;
    this.offset = offset;
  }
  TtfFont$readCmap$lambda$EncodingRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncodingRecord',
    interfaces: []
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component1 = function () {
    return this.platformId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component2 = function () {
    return this.encodingId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.copy_qt1dr2$ = function (platformId, encodingId, offset) {
    return new TtfFont$readCmap$lambda$EncodingRecord(platformId === void 0 ? this.platformId : platformId, encodingId === void 0 ? this.encodingId : encodingId, offset === void 0 ? this.offset : offset);
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.toString = function () {
    return 'EncodingRecord(platformId=' + Kotlin.toString(this.platformId) + (', encodingId=' + Kotlin.toString(this.encodingId)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.platformId) | 0;
    result = result * 31 + Kotlin.hashCode(this.encodingId) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.platformId, other.platformId) && Kotlin.equals(this.encodingId, other.encodingId) && Kotlin.equals(this.offset, other.offset)))));
  };
  TtfFont.prototype.readCmap_0 = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('cmap')) != null) {
      var tmp$_0;
      var version = readU16BE_0(tmp$);
      var numTables = readU16BE_0(tmp$);
      var $receiver = until(0, numTables);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(new TtfFont$readCmap$lambda$EncodingRecord(readU16BE_0(tmp$), readU16BE_0(tmp$), readS32BE_0(tmp$)));
      }
      var tables = destination;
      tmp$_0 = tables.iterator();
      while (tmp$_0.hasNext()) {
        var table = tmp$_0.next();
        var $receiver_0 = sliceStart(tmp$, Kotlin.Long.fromInt(table.offset));
        var tmp$_2;
        var format = readU16BE_0($receiver_0);
        switch (format) {
          case 4:
            var length = readU16BE_0($receiver_0);
            var language = readU16BE_0($receiver_0);
            var segCount = readU16BE_0($receiver_0) / 2 | 0;
            var searchRangeS = readU16BE_0($receiver_0);
            var entrySelector = readU16BE_0($receiver_0);
            var rangeShift = readU16BE_0($receiver_0);
            var endCount = readCharArrayBE($receiver_0, segCount);
            readU16BE_0($receiver_0);
            var startCount = readCharArrayBE($receiver_0, segCount);
            var idDelta = readShortArrayBE($receiver_0, segCount);
            var rangeOffsetPos = $receiver_0.position.toInt();
            var idRangeOffset = readCharArrayBE($receiver_0, segCount);
            for (var n = 0; n < segCount; n++) {
              var ec = endCount[n] | 0;
              var sc = startCount[n] | 0;
              var delta = idDelta[n];
              var iro = idRangeOffset[n] | 0;
              for (var c = sc; c <= ec; c++) {
                var index;
                if (iro !== 0) {
                  var glyphIndexOffset = rangeOffsetPos + (n * 2 | 0) | 0;
                  glyphIndexOffset = glyphIndexOffset + iro | 0;
                  glyphIndexOffset = glyphIndexOffset + ((c - sc | 0) * 2 | 0) | 0;
                  index = readU16BE_0(sliceStart($receiver_0, Kotlin.Long.fromInt(glyphIndexOffset)));
                  if (index !== 0) {
                    index = index + delta | 0;
                  }} else {
                  index = c + delta | 0;
                }
                var $receiver_1 = this.characterMaps_0;
                var value = index & 65535;
                $receiver_1.put_xwzc9p$(c, value);
              }
            }

            break;
          case 12:
            readU16BE_0($receiver_0);
            var length_0 = readS32BE_0($receiver_0);
            var language_0 = readS32BE_0($receiver_0);
            var numGroups = readS32BE_0($receiver_0);
            for (var n_0 = 0; n_0 < numGroups; n_0++) {
              var startCharCode = readS32BE_0($receiver_0);
              var endCharCode = readS32BE_0($receiver_0);
              var startGlyphId = readS32BE_0($receiver_0);
              var glyphId = startGlyphId;
              for (var c_0 = startCharCode; c_0 <= endCharCode; c_0++) {
                var $receiver_2 = this.characterMaps_0;
                var value_0 = (tmp$_2 = glyphId, glyphId = tmp$_2 + 1 | 0, tmp$_2);
                $receiver_2.put_xwzc9p$(c_0, value_0);
              }
            }

            break;
          default:break;
        }
      }
    }};
  TtfFont.prototype.getCharIndexFromCodePoint_0 = function (codePoint) {
    return this.getCharacterMapOrNull_0(codePoint);
  };
  TtfFont.prototype.getCharIndexFromChar_0 = function (char) {
    return this.getCharacterMapOrNull_0(char | 0);
  };
  TtfFont.prototype.getGlyphByCodePoint_0 = function (codePoint, cache) {
    if (cache === void 0)
      cache = true;
    var tmp$;
    return (tmp$ = this.getCharacterMapOrNull_0(codePoint)) != null ? this.getGlyphByIndex_0(tmp$, cache) : null;
  };
  TtfFont.prototype.getGlyphByChar_0 = function (char, cache) {
    if (cache === void 0)
      cache = true;
    return this.getGlyphByCodePoint_0(char | 0, cache);
  };
  TtfFont.prototype.get_0 = function (char) {
    return this.getGlyphByChar_0(char);
  };
  TtfFont.prototype.get_1 = function (codePoint) {
    return this.getGlyphByCodePoint_0(codePoint);
  };
  TtfFont.prototype.getGlyphByIndex_0 = function (index, cache) {
    if (cache === void 0)
      cache = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var start = (tmp$_0 = (tmp$ = getOrNull(this.locs_0, index)) != null ? Kotlin.Long.fromInt(tmp$).and(L4294967295) : null) != null ? tmp$_0 : L0;
    var end = (tmp$_2 = (tmp$_1 = getOrNull(this.locs_0, index + 1 | 0)) != null ? Kotlin.Long.fromInt(tmp$_1).and(L4294967295) : null) != null ? tmp$_2 : start;
    var size = end.subtract(start);
    if (!equals(size, L0)) {
      var tmp$_5;
      if ((tmp$_3 = this.glyphCache_0.get_za3lpa$(index)) != null)
        tmp$_5 = tmp$_3;
      else {
        var tmp$_6;
        var tmp$_7;
        if ((tmp$_6 = this.openTable_61zpoe$('glyf')) != null) {
          ensureNotNull(this.tablesByName_0.get_11rb$('glyf'));
          tmp$_7 = this.readGlyph_0(sliceStart(tmp$_6, start), index);
        } else
          tmp$_7 = null;
        tmp$_5 = tmp$_7;
      }
      tmp$_4 = tmp$_5;
    } else {
      tmp$_4 = new TtfFont$SimpleGlyph(this, index, 0, 0, 0, 0, new Int32Array([]), new Int32Array([]), new Int32Array([]), new Int32Array([]), this.horMetrics_0.get_za3lpa$(index).advanceWidth);
    }
    var glyph = tmp$_4;
    if (cache && !this.frozen_0)
      this.glyphCache_0.set_wxm5ur$(index, glyph);
    return glyph;
  };
  TtfFont.prototype.getAllGlyphs_0 = function (cache) {
    if (cache === void 0)
      cache = false;
    var $receiver = until(0, this.numGlyphs_0);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = this.getGlyphByIndex_0(element, cache)) != null) {
        destination.add_11rb$(tmp$_0);
      }}
    return destination;
  };
  function TtfFont$Contour(x, y, onCurve) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (onCurve === void 0)
      onCurve = false;
    this.x = x;
    this.y = y;
    this.onCurve = onCurve;
  }
  TtfFont$Contour.prototype.copyFrom_dizlkc$ = function (that) {
    this.x = that.x;
    this.y = that.y;
    this.onCurve = that.onCurve;
  };
  TtfFont$Contour.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contour',
    interfaces: []
  };
  TtfFont$Contour.prototype.component1 = function () {
    return this.x;
  };
  TtfFont$Contour.prototype.component2 = function () {
    return this.y;
  };
  TtfFont$Contour.prototype.component3 = function () {
    return this.onCurve;
  };
  TtfFont$Contour.prototype.copy_ydzd23$ = function (x, y, onCurve) {
    return new TtfFont$Contour(x === void 0 ? this.x : x, y === void 0 ? this.y : y, onCurve === void 0 ? this.onCurve : onCurve);
  };
  TtfFont$Contour.prototype.toString = function () {
    return 'Contour(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', onCurve=' + Kotlin.toString(this.onCurve)) + ')';
  };
  TtfFont$Contour.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.onCurve) | 0;
    return result;
  };
  TtfFont$Contour.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.onCurve, other.onCurve)))));
  };
  function TtfFont$GlyphReference(glyph, x, y, scaleX, scale01, scale10, scaleY) {
    this.glyph = glyph;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scale01 = scale01;
    this.scale10 = scale10;
    this.scaleY = scaleY;
  }
  TtfFont$GlyphReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphReference',
    interfaces: []
  };
  TtfFont$GlyphReference.prototype.component1 = function () {
    return this.glyph;
  };
  TtfFont$GlyphReference.prototype.component2 = function () {
    return this.x;
  };
  TtfFont$GlyphReference.prototype.component3 = function () {
    return this.y;
  };
  TtfFont$GlyphReference.prototype.component4 = function () {
    return this.scaleX;
  };
  TtfFont$GlyphReference.prototype.component5 = function () {
    return this.scale01;
  };
  TtfFont$GlyphReference.prototype.component6 = function () {
    return this.scale10;
  };
  TtfFont$GlyphReference.prototype.component7 = function () {
    return this.scaleY;
  };
  TtfFont$GlyphReference.prototype.copy_c85w86$ = function (glyph, x, y, scaleX, scale01, scale10, scaleY) {
    return new TtfFont$GlyphReference(glyph === void 0 ? this.glyph : glyph, x === void 0 ? this.x : x, y === void 0 ? this.y : y, scaleX === void 0 ? this.scaleX : scaleX, scale01 === void 0 ? this.scale01 : scale01, scale10 === void 0 ? this.scale10 : scale10, scaleY === void 0 ? this.scaleY : scaleY);
  };
  TtfFont$GlyphReference.prototype.toString = function () {
    return 'GlyphReference(glyph=' + Kotlin.toString(this.glyph) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', scaleX=' + Kotlin.toString(this.scaleX)) + (', scale01=' + Kotlin.toString(this.scale01)) + (', scale10=' + Kotlin.toString(this.scale10)) + (', scaleY=' + Kotlin.toString(this.scaleY)) + ')';
  };
  TtfFont$GlyphReference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.glyph) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale01) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale10) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleY) | 0;
    return result;
  };
  TtfFont$GlyphReference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.glyph, other.glyph) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scaleX, other.scaleX) && Kotlin.equals(this.scale01, other.scale01) && Kotlin.equals(this.scale10, other.scale10) && Kotlin.equals(this.scaleY, other.scaleY)))));
  };
  function TtfFont$Glyph($outer, index, xMin, yMin, xMax, yMax, advanceWidth) {
    this.$outer = $outer;
    this.index = index;
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
    this.advanceWidth = advanceWidth;
    this.$outer;
    var this$TtfFont = this.$outer;
    var size = this$TtfFont.unitsPerEm_0;
    var scale = this$TtfFont.getTextScale_0(size);
    var left = this.xMin * scale;
    var top = this.yMin * scale;
    var right = this.xMax * scale;
    var bottom = this.yMax * scale;
    this.metrics1px_8be2vx$ = new GlyphMetrics(size, true, -1, Rectangle.Companion.invoke().setBounds_6y0v78$(left, top, right, bottom), this.advanceWidth * scale);
  }
  TtfFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  function TtfFont$CompositeGlyph($outer, index, xMin, yMin, xMax, yMax, refs, advanceWidth) {
    this.$outer = $outer;
    TtfFont$Glyph.call(this, this.$outer, index, xMin, yMin, xMax, yMax, advanceWidth);
    this.refs = refs;
    var commandsSize = {v: 0};
    var dataSize = {v: 0};
    var $receiver = this.refs;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var gpath = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).glyph.path;
      commandsSize.v = commandsSize.v + gpath.commands.size | 0;
      dataSize.v = dataSize.v + gpath.data.size | 0;
    }
    var $receiver_0 = new GraphicsPath(new IntArrayList(commandsSize.v), new DoubleArrayList(dataSize.v));
    var $receiver_1 = this.refs;
    var tmp$_0;
    var n_0 = 0;
    while (n_0 < $receiver_1.size) {
      var ref = $receiver_1.get_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0));
      var m = new Matrix();
      var dx = ref.x;
      var dy = ref.y;
      m.translate_lu1900$(numberToDouble(dx), numberToDouble(dy));
      var sx = ref.scaleX;
      var sy = ref.scaleY;
      m.scale_lu1900$(numberToDouble(sx), numberToDouble(sy));
      $receiver_0.write_qtj57e$(ref.glyph.path, m);
    }
    this.path_kz6npq$_0 = $receiver_0;
  }
  TtfFont$CompositeGlyph.prototype.toString = function () {
    return 'CompositeGlyph[' + this.advanceWidth + '](' + this.refs + ')';
  };
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'path', {
    get: function () {
      return this.path_kz6npq$_0;
    }
  });
  TtfFont$CompositeGlyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeGlyph',
    interfaces: [TtfFont$Glyph]
  };
  function TtfFont$SimpleGlyph($outer, index, xMin, yMin, xMax, yMax, contoursIndices, flags, xPos, yPos, advanceWidth) {
    this.$outer = $outer;
    TtfFont$Glyph.call(this, this.$outer, index, xMin, yMin, xMax, yMax, advanceWidth);
    this.contoursIndices = contoursIndices;
    this.flags = flags;
    this.xPos = xPos;
    this.yPos = yPos;
    this.$outer;
    var this$TtfFont = this.$outer;
    var commandSize = {v: 0};
    var dataSize = {v: 0};
    var tmp$;
    tmp$ = this.contoursIndices.length - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var cstart = this.contoursIndices[n] + 1 | 0;
      var cend = this.contoursIndices[n + 1 | 0];
      var csize = cend - cstart + 1 | 0;
      commandSize.v = commandSize.v + (1 + (csize * 2 | 0)) | 0;
      dataSize.v = dataSize.v + (2 + (csize * 8 | 0)) | 0;
    }
    var $receiver = new GraphicsPath(new IntArrayList(commandSize.v), new DoubleArrayList(dataSize.v));
    var tmp$_0;
    tmp$_0 = this.contoursIndices.length - 1 | 0;
    for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
      var cstart_0 = this.contoursIndices[n_0] + 1 | 0;
      var cend_0 = this.contoursIndices[n_0 + 1 | 0];
      var csize_0 = cend_0 - cstart_0 + 1 | 0;
      var curr = this.contour_0(cend_0, this$TtfFont.tempContours_0[0]);
      var next = this.contour_0(cstart_0, this$TtfFont.tempContours_0[1]);
      if (curr.onCurve) {
        var x = curr.x;
        var y = -curr.y | 0;
        $receiver.moveTo_lu1900$(numberToDouble(x), numberToDouble(y));
      } else if (next.onCurve) {
        var x_0 = next.x;
        var y_0 = -next.y | 0;
        $receiver.moveTo_lu1900$(numberToDouble(x_0), numberToDouble(y_0));
      } else {
        var x_1 = (curr.x + next.x | 0) * 0 | 0;
        var y_1 = -numberToInt((curr.y + next.y | 0) * 0.5) | 0;
        $receiver.moveTo_lu1900$(numberToDouble(x_1), numberToDouble(y_1));
      }
      for (var cpos = 0; cpos < csize_0; cpos++) {
        var prev = curr;
        curr = next;
        next = this.contour_0(cstart_0 + (cpos + 1 | 0) % csize_0 | 0, this$TtfFont.tempContours_0[(cpos + 2 | 0) % 3]);
        if (curr.onCurve) {
          var x_2 = curr.x;
          var y_2 = -curr.y | 0;
          $receiver.lineTo_lu1900$(numberToDouble(x_2), numberToDouble(y_2));
        } else {
          var prev2X = prev.x;
          var prev2Y = prev.y;
          var next2X = next.x;
          var next2Y = next.y;
          if (!prev.onCurve) {
            prev2X = numberToInt((curr.x + prev.x | 0) * 0.5);
            prev2Y = numberToInt((curr.y + prev.y | 0) * 0.5);
            var x_3 = prev2X;
            var y_3 = -prev2Y | 0;
            $receiver.lineTo_lu1900$(numberToDouble(x_3), numberToDouble(y_3));
          }if (!next.onCurve) {
            next2X = numberToInt((curr.x + next.x | 0) * 0.5);
            next2Y = numberToInt((curr.y + next.y | 0) * 0.5);
          }var x_4 = prev2X;
          var y_4 = -prev2Y | 0;
          $receiver.lineTo_lu1900$(numberToDouble(x_4), numberToDouble(y_4));
          var controlX = curr.x;
          var controlY = -curr.y | 0;
          var anchorX = next2X;
          var anchorY = -next2Y | 0;
          $receiver.quadTo_6y0v78$(numberToDouble(controlX), numberToDouble(controlY), numberToDouble(anchorX), numberToDouble(anchorY));
        }
      }
      $receiver.close();
    }
    this.path_wymrkr$_0 = $receiver;
  }
  TtfFont$SimpleGlyph.prototype.toString = function () {
    return 'SimpleGlyph[' + this.advanceWidth + '](' + this.index + ') : ' + this.path;
  };
  Object.defineProperty(TtfFont$SimpleGlyph.prototype, 'npoints', {
    get: function () {
      return this.xPos.length;
    }
  });
  TtfFont$SimpleGlyph.prototype.onCurve_0 = function (n) {
    return (this.flags[n] & 1) !== 0;
  };
  TtfFont$SimpleGlyph.prototype.contour_0 = function (n, out) {
    if (out === void 0)
      out = new TtfFont$Contour();
    out.x = this.xPos[n];
    out.y = this.yPos[n];
    out.onCurve = this.onCurve_0(n);
    return out;
  };
  Object.defineProperty(TtfFont$SimpleGlyph.prototype, 'path', {
    get: function () {
      return this.path_wymrkr$_0;
    }
  });
  TtfFont$SimpleGlyph.prototype.forEachContour_0 = function (block) {
    var tmp$;
    tmp$ = this.contoursIndices.length - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var cstart = this.contoursIndices[n] + 1 | 0;
      var cend = this.contoursIndices[n + 1 | 0];
      var csize = cend - cstart + 1 | 0;
      block(cstart, cend, csize);
    }
  };
  TtfFont$SimpleGlyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleGlyph',
    interfaces: [TtfFont$Glyph]
  };
  TtfFont.prototype.readF2DOT14_0 = function ($receiver) {
    var v = readS16BE($receiver);
    var i = v >> 14;
    var f = v & 16383;
    return i + f / 16384.0;
  };
  TtfFont.prototype.readMixBE_0 = function ($receiver, signed, word) {
    var tmp$;
    if (!word && signed)
      tmp$ = readS8($receiver);
    else if (!word && !signed)
      tmp$ = readU8($receiver);
    else if (word && signed)
      tmp$ = readS16BE($receiver);
    else if (word && !signed)
      tmp$ = readU16BE_0($receiver);
    else
      tmp$ = lang.invalidOp;
    return tmp$;
  };
  TtfFont.prototype.readGlyph_0 = function ($receiver, index) {
    var tmp$, tmp$_0;
    var ncontours = readS16BE($receiver);
    var xMin = readS16BE($receiver);
    var yMin = readS16BE($receiver);
    var xMax = readS16BE($receiver);
    var yMax = readS16BE($receiver);
    if (ncontours < 0) {
      var ARG_1_AND_2_ARE_WORDS = 1;
      var ARGS_ARE_XY_VALUES = 2;
      var ROUND_XY_TO_GRID = 4;
      var WE_HAVE_A_SCALE = 8;
      var MORE_COMPONENTS = 32;
      var WE_HAVE_AN_X_AND_Y_SCALE = 64;
      var WE_HAVE_A_TWO_BY_TWO = 128;
      var WE_HAVE_INSTRUCTIONS = 256;
      var USE_MY_METRICS = 512;
      var OVERLAP_COMPOUND = 1024;
      var SCALED_COMPONENT_OFFSET = 2048;
      var UNSCALED_COMPONENT_OFFSET = 4096;
      var references = ArrayList_init_0();
      do {
        var flags = readU16BE_0($receiver);
        var glyphIndex = readU16BE_0($receiver);
        var signed = (flags & ARGS_ARE_XY_VALUES) !== 0;
        var words = (flags & ARG_1_AND_2_ARE_WORDS) !== 0;
        var x = this.readMixBE_0($receiver, signed, words);
        var y = this.readMixBE_0($receiver, signed, words);
        var scaleX = 1.0;
        var scaleY = 1.0;
        var scale01 = 0.0;
        var scale10 = 0.0;
        if ((flags & WE_HAVE_A_SCALE) !== 0) {
          scaleX = this.readF2DOT14_0($receiver);
          scaleY = scaleX;
        } else if ((flags & WE_HAVE_AN_X_AND_Y_SCALE) !== 0) {
          scaleX = this.readF2DOT14_0($receiver);
          scaleY = this.readF2DOT14_0($receiver);
        } else if ((flags & WE_HAVE_A_TWO_BY_TWO) !== 0) {
          scaleX = this.readF2DOT14_0($receiver);
          scale01 = this.readF2DOT14_0($receiver);
          scale10 = this.readF2DOT14_0($receiver);
          scaleY = this.readF2DOT14_0($receiver);
        }var ref = new TtfFont$GlyphReference(ensureNotNull(this.getGlyphByIndex_0(glyphIndex)), x, y, scaleX, scale01, scale10, scaleY);
        references.add_11rb$(ref);
      }
       while ((flags & MORE_COMPONENTS) !== 0);
      return new TtfFont$CompositeGlyph(this, index, xMin, yMin, xMax, yMax, references, this.horMetrics_0.get_za3lpa$(index).advanceWidth);
    } else {
      var contoursIndices = new Int32Array(ncontours + 1 | 0);
      contoursIndices[0] = -1;
      for (var n = 1; n <= ncontours; n++)
        contoursIndices[n] = readU16BE_0($receiver);
      var instructionLength = readU16BE_0($receiver);
      var instructions = readBytesExact($receiver, instructionLength);
      var numPoints = (tmp$_0 = (tmp$ = lastOrNull(contoursIndices)) != null ? tmp$ + 1 | 0 : null) != null ? tmp$_0 : 0;
      var flags_0 = new IntArrayList();
      var npos = 0;
      while (npos < numPoints) {
        var cf = readU8($receiver);
        flags_0.add_za3lpa$(cf);
        if ((cf & 8) !== 0) {
          var count = readU8($receiver);
          for (var n_0 = 0; n_0 < count; n_0++)
            flags_0.add_za3lpa$(cf);
          npos = npos + (count + 1) | 0;
        } else {
          npos = npos + 1 | 0;
        }
      }
      var xPos = new Int32Array(numPoints);
      var yPos = new Int32Array(numPoints);
      for (var xy = 0; xy <= 1; xy++) {
        var pos = xy === 0 ? xPos : yPos;
        var p = 0;
        for (var n_1 = 0; n_1 < numPoints; n_1++) {
          var flag = flags_0.getAt_za3lpa$(n_1);
          var b1 = (flag >>> 1 + xy & 1) !== 0;
          var b2 = (flag >>> 4 + xy & 1) !== 0;
          if (b1) {
            var magnitude = readU8($receiver);
            if (b2)
              p = p + magnitude | 0;
            else
              p = p - magnitude | 0;
          } else if (!b2) {
            p = p + readS16BE($receiver) | 0;
          }pos[n_1] = p;
        }
      }
      return new TtfFont$SimpleGlyph(this, index, xMin, yMin, xMax, yMax, contoursIndices, flags_0.toIntArray(), xPos, yPos, this.horMetrics_0.get_za3lpa$(index).advanceWidth);
    }
  };
  TtfFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TtfFont',
    interfaces: [VectorFont]
  };
  function TtfFont_init(d, freeze, extName, $this) {
    if (freeze === void 0)
      freeze = false;
    if (extName === void 0)
      extName = null;
    $this = $this || Object.create(TtfFont.prototype);
    TtfFont.call($this, openSync(d), freeze, extName);
    return $this;
  }
  function Fixed(data) {
    Fixed$Companion_getInstance();
    this.data = data;
  }
  Object.defineProperty(Fixed.prototype, 'num', {
    get: function () {
      return extract16Signed(this.data, 0);
    }
  });
  Object.defineProperty(Fixed.prototype, 'den', {
    get: function () {
      return extract16Signed(this.data, 16);
    }
  });
  function Fixed$Companion() {
    Fixed$Companion_instance = this;
  }
  Fixed$Companion.prototype.invoke_vux9f0$ = function (num, den) {
    return insert(insert(0, num, 0, 16), den, 16, 16);
  };
  Fixed$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Fixed$Companion_instance = null;
  function Fixed$Companion_getInstance() {
    if (Fixed$Companion_instance === null) {
      new Fixed$Companion();
    }return Fixed$Companion_instance;
  }
  Fixed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed',
    interfaces: []
  };
  Fixed.prototype.unbox = function () {
    return this.data;
  };
  Fixed.prototype.toString = function () {
    return 'Fixed(data=' + Kotlin.toString(this.data) + ')';
  };
  Fixed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  Fixed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function Coroutine$readTtfFont($receiver_0, preload_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$preload = preload_0;
  }
  Coroutine$readTtfFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readTtfFont.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readTtfFont.prototype.constructor = Coroutine$readTtfFont;
  Coroutine$readTtfFont.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$preload === void 0)
              this.local$preload = false;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return TtfFont_init(this.result_0, this.local$preload, get_baseName(this.local$$receiver));
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
  function readTtfFont($receiver_0, preload_0, continuation_0, suspended) {
    var instance = new Coroutine$readTtfFont($receiver_0, preload_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function write($receiver, path, transform) {
    var tmp$;
    $receiver.commands.plusAssign_38vc8i$(path.commands);
    tmp$ = path.data.size;
    for (var n = 0; n < tmp$; n += 2) {
      var x = path.data.getAt_za3lpa$(n + 0 | 0);
      var y = path.data.getAt_za3lpa$(n + 1 | 0);
      $receiver.data.plusAssign_14dthe$(transform.transformX_lu1900$(x, y));
      $receiver.data.plusAssign_14dthe$(transform.transformY_lu1900$(x, y));
    }
    $receiver.lastX = transform.transformX_lu1900$(path.lastX, path.lastY);
    $receiver.lastY = transform.transformY_lu1900$(path.lastX, path.lastY);
  }
  function VectorFont() {
  }
  VectorFont.prototype.getGlyphPath_mvgud4$ = function (size, codePoint, path, callback$default) {
    if (path === void 0)
      path = new GlyphPath();
    return callback$default ? callback$default(size, codePoint, path) : this.getGlyphPath_mvgud4$$default(size, codePoint, path);
  };
  VectorFont.prototype.renderGlyph_pajsht$ = function (ctx, size, codePoint, x, y, fill, metrics) {
    this.getGlyphMetrics_e5kjls$(size, codePoint, metrics);
    var g = this.getGlyphPath_mvgud4$(size, codePoint);
    if (g != null) {
      var t = ctx.state.transform;
      var a = t.a;
      var b = t.b;
      var c = t.c;
      var d = t.d;
      var tx = t.tx;
      var ty = t.ty;
      try {
        ctx.translate_lu1900$(x, y);
        g.draw_vuz2tk$(ctx);
      }finally {
        t.setTo_15yvbs$(a, b, c, d, tx, ty);
      }
      if (fill)
        ctx.fill();
      else
        ctx.stroke();
    }};
  VectorFont.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VectorFont',
    interfaces: [Font]
  };
  function BMP() {
    BMP_instance = this;
    ImageFormat.call(this, ['bmp']);
  }
  function BMP$BmImageInfo() {
    ImageInfo.call(this);
    this.flipX = false;
    this.flipY = false;
  }
  BMP$BmImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BmImageInfo',
    interfaces: [ImageInfo]
  };
  BMP.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 2), 'BM'))
      return null;
    var size = readS32LE_0(s);
    var reserved1 = readS16LE(s);
    var reserved2 = readS16LE(s);
    var offBits = readS32LE_0(s);
    var bsize = readS32LE_0(s);
    var width = readS32LE_0(s);
    var height = readS32LE_0(s);
    var planes = readS16LE(s);
    var bitcount = readS16LE(s);
    var $receiver = new BMP$BmImageInfo();
    $receiver.flipX = width < 0;
    $receiver.flipY = height >= 0;
    $receiver.width = abs(width);
    $receiver.height = abs(height);
    $receiver.bitsPerPixel = bitcount;
    return $receiver;
  };
  BMP.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.decodeHeader_1ooaqm$(s, props);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Not a BMP file');
    }var h = tmp$;
    var compression = readS32LE_0(s);
    var sizeImage = readS32LE_0(s);
    var pixelsPerMeterX = readS32LE_0(s);
    var pixelsPerMeterY = readS32LE_0(s);
    var clrUsed = readS32LE_0(s);
    var clrImportant = readS32LE_0(s);
    switch (h.bitsPerPixel) {
      case 8:
        var out = new Bitmap8(h.width, h.height);
        for (var n = 0; n < 256; n++)
          out.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_vux9f0$(readS32LE_0(s), 255));
        tmp$_0 = h.height;
        for (var n_0 = 0; n_0 < tmp$_0; n_0++)
          out.setRow_3fbn1q$(h.height - n_0 - 1 | 0, readBytes(s, h.width));
        tmp$_2 = new ImageData(listOf_0(new ImageFrame(out)));
        break;
      case 24:
      case 32:
        var bytesPerRow = Kotlin.imul(h.width, h.bitsPerPixel) / 8 | 0;
        var out_0 = new Bitmap32(h.width, h.height);
        var row = new Int8Array(bytesPerRow);
        var format = h.bitsPerPixel === 24 ? BGR_getInstance() : BGRA_getInstance();
        var padding = 4 - bytesPerRow % 4 | 0;
        var flipY = h.flipY;
        tmp$_1 = h.height;
        for (var n_1 = 0; n_1 < tmp$_1; n_1++) {
          var y = h.flipY ? h.height - n_1 - 1 | 0 : n_1;
          s.read_mj6st8$(row);
          decode(format, row, 0, out_0.data, out_0.index_vux9f0$(0, y), h.width);
          if (padding !== 0) {
            skip(s, padding);
          }}

        tmp$_2 = new ImageData(listOf_0(new ImageFrame(out_0)));
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported bitsPerPixel=' + h.bitsPerPixel));
    }
    return tmp$_2;
  };
  BMP.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var bmp = image.mainBitmap.toBMP32();
    write8(s, 66);
    write8(s, 77);
    write32LE_0(s, 4 * bmp.area | 0);
    write32LE_0(s, 0);
    write32LE_0(s, 54);
    write32LE_0(s, 40);
    write32LE_0(s, bmp.width);
    write32LE_0(s, bmp.height * 2 | 0);
    write16LE_0(s, 1);
    write16LE_0(s, 32);
    write32LE_0(s, 0);
    write32LE_0(s, 4 * bmp.area | 0);
    write32LE_0(s, 2834);
    write32LE_0(s, 2834);
    write32LE_0(s, 0);
    write32LE_0(s, 0);
    tmp$ = bmp.height;
    for (var n = 0; n < tmp$; n++) {
      var y = bmp.height - 1 - n | 0;
      writeBytes(s, encode_0(BGRA_getInstance(), bmp.data, Kotlin.imul(y, bmp.width), bmp.width, true));
    }
  };
  BMP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BMP',
    interfaces: [ImageFormat]
  };
  var BMP_instance = null;
  function BMP_getInstance() {
    if (BMP_instance === null) {
      new BMP();
    }return BMP_instance;
  }
  function DDS() {
    DDS_instance = this;
    ImageFormat.call(this, ['dds']);
  }
  DDS.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readString(s, 4), 'DDS '))
      return null;
    var size = readS32LE_0(s);
    var sh = readStream(s, size - 4 | 0);
    var flags = readS32LE_0(sh);
    var height = readS32LE_0(sh);
    var width = readS32LE_0(sh);
    var pitchOrLinearSize = readS32LE_0(sh);
    var depth = readS32LE_0(sh);
    var mipmapCount = readS32LE_0(sh);
    var reserved = readIntArrayLE(sh, 11);
    var pf_size = readS32LE_0(sh);
    var pf_s = readStream(sh, pf_size - 4 | 0);
    var pf_flags = readS32LE_0(pf_s);
    var pf_fourcc = readString(pf_s, 4);
    var pf_bitcount = readS32LE_0(pf_s);
    var pf_rbitmask = readS32LE_0(pf_s);
    var pf_gbitmask = readS32LE_0(pf_s);
    var pf_bbitmask = readS32LE_0(pf_s);
    var pf_abitmask = readS32LE_0(pf_s);
    var caps = readS32LE_0(sh);
    var caps2 = readS32LE_0(sh);
    var caps3 = readS32LE_0(sh);
    var caps4 = readS32LE_0(sh);
    var reserved2 = readS32LE_0(sh);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = 32;
    set_fourcc($receiver, pf_fourcc);
    return $receiver;
  };
  DDS.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var h = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a DDS file');
    var fourcc = get_fourcc(h).toUpperCase();
    switch (fourcc) {
      case 'DXT1':
        tmp$_0 = DXT1_getInstance();
        break;
      case 'DXT3':
        tmp$_0 = DXT3_getInstance();
        break;
      case 'DXT4':
        tmp$_0 = DXT4_getInstance();
        break;
      case 'DXT5':
        tmp$_0 = DXT5_getInstance();
        break;
      default:tmp$_0 = invalidOp("Unsupported DDS FourCC '" + fourcc + "'");
        break;
    }
    var subimageFormat = tmp$_0;
    var bytes = readAll(s);
    return subimageFormat.readImage_1ooaqm$(openSync(bytes), new ImageDecodingProps('image.' + fourcc, h.width, h.height));
  };
  DDS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DDS',
    interfaces: [ImageFormat]
  };
  var DDS_instance = null;
  function DDS_getInstance() {
    if (DDS_instance === null) {
      new DDS();
    }return DDS_instance;
  }
  function fourcc$lambda() {
    return '    ';
  }
  var fourcc;
  var fourcc_metadata = new PropertyMetadata('fourcc');
  function get_fourcc($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = fourcc.name) != null ? tmp$ : fourcc_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = fourcc.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = fourcc.name) != null ? tmp$_3 : fourcc_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_fourcc($receiver, fourcc_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = fourcc.name) != null ? tmp$ : fourcc_metadata.callableName, (tmp$_0 = fourcc_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function DXT1() {
    DXT1_instance = this;
    DXT1Base.call(this, 'dxt1', true);
  }
  DXT1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT1',
    interfaces: [DXT1Base]
  };
  var DXT1_instance = null;
  function DXT1_getInstance() {
    if (DXT1_instance === null) {
      new DXT1();
    }return DXT1_instance;
  }
  function DXT2() {
    DXT2_instance = this;
    DXT2_3.call(this, 'dxt2', true);
  }
  DXT2.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT2',
    interfaces: [DXT2_3]
  };
  var DXT2_instance = null;
  function DXT2_getInstance() {
    if (DXT2_instance === null) {
      new DXT2();
    }return DXT2_instance;
  }
  function DXT3() {
    DXT3_instance = this;
    DXT2_3.call(this, 'dxt3', false);
  }
  DXT3.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT3',
    interfaces: [DXT2_3]
  };
  var DXT3_instance = null;
  function DXT3_getInstance() {
    if (DXT3_instance === null) {
      new DXT3();
    }return DXT3_instance;
  }
  function DXT4() {
    DXT4_instance = this;
    DXT4_5.call(this, 'dxt4', true);
  }
  DXT4.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT4',
    interfaces: [DXT4_5]
  };
  var DXT4_instance = null;
  function DXT4_getInstance() {
    if (DXT4_instance === null) {
      new DXT4();
    }return DXT4_instance;
  }
  function DXT5() {
    DXT5_instance = this;
    DXT4_5.call(this, 'dxt5', false);
  }
  DXT5.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT5',
    interfaces: [DXT4_5]
  };
  var DXT5_instance = null;
  function DXT5_getInstance() {
    if (DXT5_instance === null) {
      new DXT5();
    }return DXT5_instance;
  }
  function DXT1Base(format, premultiplied) {
    DXT.call(this, format, true, 8);
  }
  DXT1Base.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt1ColorCond_k437h2$(data, dataOffset + 0 | 0, cc);
    var cdata = readS32LE(data, dataOffset + 4 | 0);
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$((new RGBA(cc.ints[c])).rgb, 255));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT1Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT1Base',
    interfaces: [DXT]
  };
  function DXT2_3(format, premultiplied) {
    DXT.call(this, format, premultiplied, 16);
  }
  DXT2_3.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, aa);
    DXT$Companion_getInstance().decodeDxt1Color_k437h2$(data, dataOffset + 8 | 0, cc);
    var cdata = readS32LE(data, dataOffset + 8 + 4 | 0);
    var adata = readU32LE(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16LE(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(L7).toInt();
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$((new RGBA(cc.ints[c])).rgb, aa[a]));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT2_3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT2_3',
    interfaces: [DXT]
  };
  function DXT4_5(format, premultiplied) {
    DXT.call(this, format, premultiplied, 16);
  }
  DXT4_5.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, aa);
    DXT$Companion_getInstance().decodeDxt1ColorCond_k437h2$(data, dataOffset + 8 | 0, cc);
    var cdata = readS32LE(data, dataOffset + 8 + 4 | 0);
    var adata = readU32LE(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16LE(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(L7).toInt();
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$((new RGBA(cc.ints[c])).rgb, aa[a]));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT4_5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT4_5',
    interfaces: [DXT]
  };
  function DXT(format, premultiplied, blockSize) {
    DXT$Companion_getInstance();
    ImageFormat.call(this, [format]);
    this.format = format;
    this.premultiplied = premultiplied;
    this.blockSize = blockSize;
  }
  DXT.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!startsWith(get_extensionLC(new PathInfo(props.filename)), this.format))
      return null;
    var $receiver = new ImageInfo();
    var tmp$, tmp$_0;
    $receiver.width = (tmp$ = props.width) != null ? tmp$ : 1;
    $receiver.height = (tmp$_0 = props.height) != null ? tmp$_0 : 1;
    return $receiver;
  };
  DXT.prototype.decodeBitmap_mj6st8$ = function (bytes, width, height) {
    var out = new Bitmap32(width, height, void 0, this.premultiplied);
    var blockWidth = out.width / 4 | 0;
    var blockHeight = out.height / 4 | 0;
    var offset = 0;
    var aa = new Int32Array(8);
    var cc = RgbaArray$Companion_getInstance().invoke_za3lpa$(4);
    for (var y = 0; y < blockHeight; y++) {
      for (var x = 0; x < blockWidth; x++) {
        this.decodeRow_cndmu7$(bytes, offset, out.data, out.index_vux9f0$(x * 4 | 0, y * 4 | 0), out.width, aa, cc);
        offset = offset + this.blockSize | 0;
      }
    }
    return out;
  };
  DXT.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var bytes = readAll(s);
    var totalPixels = ((bytes.length / this.blockSize | 0) * 4 | 0) * 4 | 0;
    var potentialSide = numberToInt(Math_0.sqrt(totalPixels));
    var width = (tmp$ = props.width) != null ? tmp$ : potentialSide;
    var height = (tmp$_0 = props.height) != null ? tmp$_0 : potentialSide;
    return new ImageData(listOf_0(new ImageFrame(this.decodeBitmap_mj6st8$(bytes, width, height))));
  };
  function DXT$Companion() {
    DXT$Companion_instance = this;
    this.FACT_2_3 = 170;
    this.FACT_1_3 = 85;
    this.FACT_1_2 = 128;
  }
  DXT$Companion.prototype.decodeRGB656_za3lpa$ = function (v) {
    return toRGBA(BGR_565_getInstance(), v);
  };
  DXT$Companion.prototype.decodeDxt1ColorCond_k437h2$ = function (data, dataOffset, cc) {
    var c0 = readU16LE(data, dataOffset + 0 | 0);
    var c1 = readU16LE(data, dataOffset + 2 | 0);
    var ccArray = cc;
    ccArray.set_vlvk8p$(0, this.decodeRGB656_za3lpa$(c0));
    ccArray.set_vlvk8p$(1, this.decodeRGB656_za3lpa$(c1));
    if (c0 > c1) {
      ccArray.set_vlvk8p$(2, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 170));
      ccArray.set_vlvk8p$(3, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 85));
    } else {
      ccArray.set_vlvk8p$(2, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 128));
      ccArray.set_vlvk8p$(3, Colors_getInstance().TRANSPARENT_BLACK);
    }
  };
  DXT$Companion.prototype.decodeDxt1Color_k437h2$ = function (data, dataOffset, cc) {
    cc.set_vlvk8p$(0, this.decodeRGB656_za3lpa$(readU16LE(data, dataOffset + 0 | 0)));
    cc.set_vlvk8p$(1, this.decodeRGB656_za3lpa$(readU16LE(data, dataOffset + 2 | 0)));
    cc.set_vlvk8p$(2, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 170));
    cc.set_vlvk8p$(3, RGBA$Companion_getInstance().mixRgbFactor256_74wf1k$(cc.get_za3lpa$(0), cc.get_za3lpa$(1), 85));
  };
  DXT$Companion.prototype.decodeDxt5Alpha_syel7v$ = function (data, dataOffset, aa) {
    var a0 = readU8_0(data, dataOffset + 0 | 0);
    var a1 = readU8_0(data, dataOffset + 1 | 0);
    aa[0] = a0;
    aa[1] = a1;
    if (a0 > a1) {
      aa[2] = ((6 * a0 | 0) + (1 * a1 | 0) | 0) / 7 | 0;
      aa[3] = ((5 * a0 | 0) + (2 * a1 | 0) | 0) / 7 | 0;
      aa[4] = ((4 * a0 | 0) + (3 * a1 | 0) | 0) / 7 | 0;
      aa[5] = ((3 * a0 | 0) + (4 * a1 | 0) | 0) / 7 | 0;
      aa[6] = ((2 * a0 | 0) + (5 * a1 | 0) | 0) / 7 | 0;
      aa[7] = ((1 * a0 | 0) + (6 * a1 | 0) | 0) / 7 | 0;
    } else {
      aa[2] = ((4 * a0 | 0) + (1 * a1 | 0) | 0) / 5 | 0;
      aa[3] = ((3 * a0 | 0) + (2 * a1 | 0) | 0) / 5 | 0;
      aa[4] = ((2 * a0 | 0) + (3 * a1 | 0) | 0) / 5 | 0;
      aa[5] = ((1 * a0 | 0) + (4 * a1 | 0) | 0) / 5 | 0;
      aa[6] = 0;
      aa[7] = 255;
    }
  };
  DXT$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DXT$Companion_instance = null;
  function DXT$Companion_getInstance() {
    if (DXT$Companion_instance === null) {
      new DXT$Companion();
    }return DXT$Companion_instance;
  }
  DXT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT',
    interfaces: [ImageFormat]
  };
  function GIF() {
    GIF_instance = this;
    ImageFormat.call(this, ['gif']);
  }
  GIF.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    try {
      var gif = GifDec_getInstance().gd_open_gif_39qel5$(s.clone());
      var $receiver = new ImageInfo();
      $receiver.bitsPerPixel = 32;
      $receiver.width = gif.width;
      $receiver.height = gif.height;
      GifDec_getInstance().gd_close_gif_pyaijx$(gif);
      return $receiver;
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        printStackTrace(e);
        return null;
      } else
        throw e;
    }
  };
  GIF.prototype.readImage_1ooaqm$$default = function (s, props) {
    var gif = GifDec_getInstance().gd_open_gif_39qel5$(s.clone());
    var frames = ArrayList_init_0();
    while (GifDec_getInstance().gd_get_frame_pyaijx$(gif) >= 1) {
      var out = new Bitmap32(gif.width, gif.height);
      var $receiver = (gif.gce.delay + 1 | 0) * 10 | 0;
      var time = TimeSpan.Companion.fromMilliseconds_14dthe$($receiver);
      try {
        GifDec_getInstance().gd_render_frame_nw933t$(gif, out.data);
        frames.add_11rb$(new ImageFrame(out, time, void 0, void 0, frames.size === 0));
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          printStackTrace(e);
        } else
          throw e;
      }
    }
    return new ImageData(frames, gif.loop_count);
  };
  GIF.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    this.writeImage_2psbf2$(image, s, props, ImageFormat.prototype.writeImage_2psbf2$$default.bind(this));
  };
  GIF.prototype.toString = function () {
    return ImageFormat.prototype.toString.call(this);
  };
  GIF.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GIF',
    interfaces: [ImageFormat]
  };
  var GIF_instance = null;
  function GIF_getInstance() {
    if (GIF_instance === null) {
      new GIF();
    }return GIF_instance;
  }
  function GifDec() {
    GifDec_instance = this;
    this.SEEK_SET = 0;
    this.SEEK_CUR = 1;
    this.O_RDONLY = 0;
  }
  function GifDec$gd_Palette(size, colors) {
    if (size === void 0)
      size = 0;
    if (colors === void 0)
      colors = RgbaArray$Companion_getInstance().invoke_za3lpa$(256);
    this.size = size;
    this.colors = colors;
  }
  GifDec$gd_Palette.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'gd_Palette',
    interfaces: []
  };
  function GifDec$gd_GCE(delay, tindex, disposal, input, transparency) {
    if (delay === void 0)
      delay = 0;
    if (tindex === void 0)
      tindex = 0;
    if (disposal === void 0)
      disposal = 0;
    if (input === void 0)
      input = 0;
    if (transparency === void 0)
      transparency = false;
    this.delay = delay;
    this.tindex = tindex;
    this.disposal = disposal;
    this.input = input;
    this.transparency = transparency;
  }
  GifDec$gd_GCE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'gd_GCE',
    interfaces: []
  };
  function GifDec$gd_GIF(fd, anim_start, width, height, depth, loop_count, gce, palette, lct, gct, plain_text, comment, application, fx, fy, fw, fh, bgindex, canvas, frame) {
    if (anim_start === void 0)
      anim_start = L0;
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    if (depth === void 0)
      depth = 0;
    if (loop_count === void 0)
      loop_count = 0;
    if (gce === void 0)
      gce = new GifDec$gd_GCE();
    if (palette === void 0)
      palette = new GifDec$gd_Palette();
    if (lct === void 0)
      lct = new GifDec$gd_Palette();
    if (gct === void 0)
      gct = new GifDec$gd_Palette();
    if (plain_text === void 0)
      plain_text = null;
    if (comment === void 0)
      comment = null;
    if (application === void 0)
      application = null;
    if (fx === void 0)
      fx = 0;
    if (fy === void 0)
      fy = 0;
    if (fw === void 0)
      fw = 0;
    if (fh === void 0)
      fh = 0;
    if (bgindex === void 0)
      bgindex = 0;
    if (canvas === void 0)
      canvas = RgbaArray$Companion_getInstance().invoke_za3lpa$(0);
    if (frame === void 0)
      frame = UByteArray_init_0(0);
    this.fd = fd;
    this.anim_start = anim_start;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.loop_count = loop_count;
    this.gce = gce;
    this.palette = palette;
    this.lct = lct;
    this.gct = gct;
    this.plain_text = plain_text;
    this.comment = comment;
    this.application = application;
    this.fx = fx;
    this.fy = fy;
    this.fw = fw;
    this.fh = fh;
    this.bgindex = bgindex;
    this.canvas = canvas;
    this.frame = frame;
  }
  GifDec$gd_GIF.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'gd_GIF',
    interfaces: []
  };
  function GifDec$Entry(length, prefix, suffix) {
    if (length === void 0)
      length = 0;
    if (prefix === void 0)
      prefix = 0;
    if (suffix === void 0)
      suffix = 0;
    this.length = length;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  GifDec$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  function GifDec$Table(bulk, nentries, entries) {
    if (bulk === void 0)
      bulk = 0;
    if (nentries === void 0)
      nentries = 0;
    if (entries === void 0) {
      entries = [];
    }this.bulk = bulk;
    this.nentries = nentries;
    this.entries = entries;
  }
  GifDec$Table.prototype.resize_za3lpa$ = function (count) {
    this.bulk = count;
    var array = Array_0(count);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      array[i] = (tmp$_0 = getOrNull_0(this.entries, i)) != null ? tmp$_0 : new GifDec$Entry();
    }
    this.entries = array;
  };
  GifDec$Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: []
  };
  GifDec.prototype.read_num_39qel5$ = function (fd) {
    var a = readU8(fd);
    var b = readU8(fd);
    return a | b << 8;
  };
  GifDec.prototype.eqbytes_m1iwyb$ = function ($receiver, str) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = get_indices(str);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var n = tmp$_0; n <= tmp$_1; n += tmp$_2)
      if ($receiver[n] !== toByte(str.charCodeAt(n) | 0))
        return false;
    return true;
  };
  GifDec.prototype.gd_open_gif_39qel5$ = function (fd) {
    var tmp$;
    var sigver1 = readBytes(fd, 3);
    if (!this.eqbytes_m1iwyb$(sigver1, 'GIF')) {
      throw IllegalStateException_init(('invalid signature: ' + get_hex_0(sigver1)).toString());
    }var sigver2 = readBytes(fd, 3);
    if (!this.eqbytes_m1iwyb$(sigver2, '89a')) {
      throw IllegalStateException_init(('invalid version: ' + get_hex_0(sigver2)).toString());
    }var width = this.read_num_39qel5$(fd);
    var height = this.read_num_39qel5$(fd);
    var fdsz = readU8(fd);
    if ((fdsz & 128) === 0) {
      throw IllegalStateException_init('no global color table'.toString());
    }var depth = (fdsz >>> 4 & 7) + 1 | 0;
    var gct_sz = 1 << (fdsz & 7) + 1;
    var bgidx = readU8(fd);
    var aspect = readU8(fd);
    var gif = new GifDec$gd_GIF(fd, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(width, height)), UByteArray_init_0(Kotlin.imul(width, height)));
    gif.fd = fd;
    gif.width = width;
    gif.height = height;
    gif.depth = depth;
    gif.gct.size = gct_sz;
    tmp$ = gif.gct.size;
    for (var n = 0; n < tmp$; n++) {
      var r = readU8(fd);
      var g = readU8(fd);
      var b = readU8(fd);
      gif.gct.colors.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_qt1dr2$(r, g, b));
    }
    gif.palette = gif.gct;
    gif.bgindex = bgidx;
    if (gif.bgindex !== 0) {
      fill(gif.frame, new UByte_init(toByte(gif.bgindex)), 0, Kotlin.imul(gif.width, gif.height));
    }gif.anim_start = this.lseek_g38coo$(fd, L0, this.SEEK_CUR);
    return gif;
  };
  GifDec.prototype.discard_sub_blocks_pyaijx$ = function (gif) {
    do {
      var size = readU8(gif.fd);
      this.lseek_g38coo$(gif.fd, Kotlin.Long.fromInt(size), this.SEEK_CUR);
    }
     while (size !== 0);
  };
  GifDec.prototype.read_plain_text_ext_pyaijx$ = function (gif) {
    var plain_text = gif.plain_text;
    if (plain_text != null) {
      this.lseek_g38coo$(gif.fd, L1, this.SEEK_CUR);
      var tx = this.read_num_39qel5$(gif.fd);
      var ty = this.read_num_39qel5$(gif.fd);
      var tw = this.read_num_39qel5$(gif.fd);
      var th = this.read_num_39qel5$(gif.fd);
      var cw = readU8(gif.fd);
      var ch = readU8(gif.fd);
      var fg = readU8(gif.fd);
      var bg = readU8(gif.fd);
      var sub_block = this.lseek_g38coo$(gif.fd, L0, this.SEEK_CUR);
      plain_text(gif, tx, ty, tw, th, cw, ch, fg, bg);
      this.lseek_g38coo$(gif.fd, sub_block, this.SEEK_SET);
    } else {
      this.lseek_g38coo$(gif.fd, L13, this.SEEK_CUR);
    }
    this.discard_sub_blocks_pyaijx$(gif);
  };
  GifDec.prototype.read_graphic_control_ext_pyaijx$ = function (gif) {
    this.lseek_g38coo$(gif.fd, L1, this.SEEK_CUR);
    var rdit = readU8(gif.fd);
    gif.gce.disposal = rdit >>> 2 & 3;
    gif.gce.input = rdit & 2;
    gif.gce.transparency = (rdit & 1) !== 0;
    gif.gce.delay = this.read_num_39qel5$(gif.fd);
    gif.gce.tindex = readU8(gif.fd);
    this.lseek_g38coo$(gif.fd, L1, this.SEEK_CUR);
  };
  GifDec.prototype.read_comment_ext_pyaijx$ = function (gif) {
    var comment = gif.comment;
    if (comment != null) {
      var sub_block = this.lseek_g38coo$(gif.fd, L0, this.SEEK_CUR);
      comment(gif);
      this.lseek_g38coo$(gif.fd, sub_block, this.SEEK_SET);
    }this.discard_sub_blocks_pyaijx$(gif);
  };
  GifDec.prototype.read_application_ext_pyaijx$ = function (gif) {
    this.lseek_g38coo$(gif.fd, L1, this.SEEK_CUR);
    var app_id = readBytesExact(gif.fd, 8);
    var app_auth_code = readBytesExact(gif.fd, 3);
    if (this.eqbytes_m1iwyb$(app_id, 'NETSCAPE')) {
      this.lseek_g38coo$(gif.fd, L2, this.SEEK_CUR);
      gif.loop_count = this.read_num_39qel5$(gif.fd);
      this.lseek_g38coo$(gif.fd, L1, this.SEEK_CUR);
    } else if (gif.application != null) {
      var sub_block = this.lseek_g38coo$(gif.fd, L0, this.SEEK_CUR);
      ensureNotNull(gif.application)(gif, app_id, app_auth_code);
      this.lseek_g38coo$(gif.fd, sub_block, this.SEEK_SET);
      this.discard_sub_blocks_pyaijx$(gif);
    } else {
      this.discard_sub_blocks_pyaijx$(gif);
    }
  };
  GifDec.prototype.read_ext_pyaijx$ = function (gif) {
    var label = readU8(gif.fd);
    switch (label) {
      case 1:
        this.read_plain_text_ext_pyaijx$(gif);
        break;
      case 249:
        this.read_graphic_control_ext_pyaijx$(gif);
        break;
      case 254:
        this.read_comment_ext_pyaijx$(gif);
        break;
      case 255:
        this.read_application_ext_pyaijx$(gif);
        break;
      default:throw IllegalStateException_init(format('unknown extension: %02X', [label]).toString());
    }
  };
  GifDec.prototype.new_table_za3lpa$ = function (key_size) {
    var a = 1 << key_size + 1;
    var init_bulk = Math_0.max(a, 256);
    var tmp$ = (1 << key_size) + 2 | 0;
    var array = Array_0(init_bulk);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = new GifDec$Entry(1, 4095, i);
    }
    return new GifDec$Table(init_bulk, tmp$, array);
  };
  GifDec.prototype.add_entry_u5z1x1$ = function (tablep, length, prefix, suffix) {
    var table = tablep;
    if (table.nentries === table.bulk) {
      table.resize_za3lpa$(table.bulk * 2 | 0);
    }table.entries[table.nentries] = new GifDec$Entry(length, prefix, suffix);
    table.nentries = table.nentries + 1 | 0;
    if ((table.nentries & table.nentries - 1) === 0)
      return 1;
    return 0;
  };
  function GifDec$KeyState(sub_len, shift, byte) {
    if (sub_len === void 0)
      sub_len = 0;
    if (shift === void 0)
      shift = 0;
    if (byte === void 0)
      byte = 0;
    this.sub_len = sub_len;
    this.shift = shift;
    this.byte = byte;
  }
  GifDec$KeyState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyState',
    interfaces: []
  };
  GifDec$KeyState.prototype.component1 = function () {
    return this.sub_len;
  };
  GifDec$KeyState.prototype.component2 = function () {
    return this.shift;
  };
  GifDec$KeyState.prototype.component3 = function () {
    return this.byte;
  };
  GifDec$KeyState.prototype.copy_qt1dr2$ = function (sub_len, shift, byte) {
    return new GifDec$KeyState(sub_len === void 0 ? this.sub_len : sub_len, shift === void 0 ? this.shift : shift, byte === void 0 ? this.byte : byte);
  };
  GifDec$KeyState.prototype.toString = function () {
    return 'KeyState(sub_len=' + Kotlin.toString(this.sub_len) + (', shift=' + Kotlin.toString(this.shift)) + (', byte=' + Kotlin.toString(this.byte)) + ')';
  };
  GifDec$KeyState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sub_len) | 0;
    result = result * 31 + Kotlin.hashCode(this.shift) | 0;
    result = result * 31 + Kotlin.hashCode(this.byte) | 0;
    return result;
  };
  GifDec$KeyState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sub_len, other.sub_len) && Kotlin.equals(this.shift, other.shift) && Kotlin.equals(this.byte, other.byte)))));
  };
  GifDec.prototype.get_key_otxu1e$ = function (gif, key_size, s) {
    var key = 0;
    var bits_read = 0;
    while (bits_read < key_size) {
      var rpad = (s.shift + bits_read | 0) % 8;
      if (rpad === 0) {
        if (s.sub_len === 0) {
          s.sub_len = readU8(gif.fd);
        }s.byte = readU8(gif.fd);
        s.sub_len = s.sub_len - 1 | 0;
      }var a = key_size - bits_read | 0;
      var b = 8 - rpad | 0;
      var frag_size = Math_0.min(a, b);
      key = key | (65535 & s.byte >>> rpad) << bits_read;
      bits_read = bits_read + frag_size | 0;
    }
    key = key & (1 << key_size) - 1;
    s.shift = (s.shift + key_size | 0) % 8;
    return key;
  };
  GifDec.prototype.interlaced_line_index_vux9f0$ = function (h, y) {
    var y_0 = y;
    var p = ((h - 1 | 0) / 8 | 0) + 1 | 0;
    if (y_0 < p)
      return y_0 * 8 | 0;
    y_0 = y_0 - p | 0;
    p = ((h - 5 | 0) / 8 | 0) + 1 | 0;
    if (y_0 < p)
      return (y_0 * 8 | 0) + 4 | 0;
    y_0 = y_0 - p | 0;
    p = ((h - 3 | 0) / 4 | 0) + 1 | 0;
    if (y_0 < p)
      return (y_0 * 4 | 0) + 2 | 0;
    y_0 = y_0 - p | 0;
    return (y_0 * 2 | 0) + 1 | 0;
  };
  GifDec.prototype.read_image_data_gugzei$ = function (gif, interlace) {
    var str_len = 0;
    var table_is_full = false;
    var byte = readU8(gif.fd);
    var key_size = byte;
    var start = this.lseek_g38coo$(gif.fd, L0, this.SEEK_CUR);
    this.discard_sub_blocks_pyaijx$(gif);
    var end = this.lseek_g38coo$(gif.fd, L0, this.SEEK_CUR);
    this.lseek_g38coo$(gif.fd, start, this.SEEK_SET);
    var clear = 1 << key_size;
    var stop = clear + 1 | 0;
    var table = this.new_table_za3lpa$(key_size);
    key_size = key_size + 1 | 0;
    var init_key_size = key_size;
    var state = new GifDec$KeyState();
    var entry;
    state.byte = byte;
    var key = this.get_key_otxu1e$(gif, key_size, state);
    var frm_off = 0;
    var ret = 0;
    while (true) {
      if (key === clear) {
        key_size = init_key_size;
        table.nentries = (1 << key_size - 1) + 2 | 0;
        table_is_full = false;
      } else if (!table_is_full) {
        ret = this.add_entry_u5z1x1$(table, str_len + 1 | 0, key, (entry == null ? throwUPAE('entry') : entry).suffix);
        if (ret === -1) {
          this.free_s8jyv4$(table);
          return -1;
        }if (table.nentries === 4096) {
          ret = 0;
          table_is_full = true;
        }}key = this.get_key_otxu1e$(gif, key_size, state);
      if (key === clear)
        continue;
      if (key === stop)
        break;
      if (ret === 1) {
        key_size = key_size + 1 | 0;
      }entry = table.entries[key];
      str_len = (entry == null ? throwUPAE('entry') : entry).length;
      while (true) {
        var p = frm_off + (entry == null ? throwUPAE('entry') : entry).length - 1 | 0;
        var x = p % gif.fw;
        var y = p / gif.fw | 0;
        if (interlace) {
          y = this.interlaced_line_index_vux9f0$(gif.fh, y);
        }gif.frame.set_2c6cbe$(Kotlin.imul(gif.fy + y | 0, gif.width) + gif.fx + x | 0, new UByte_init(toByte((entry == null ? throwUPAE('entry') : entry).suffix)));
        if ((entry == null ? throwUPAE('entry') : entry).prefix === 4095) {
          break;
        } else {
          entry = table.entries[(entry == null ? throwUPAE('entry') : entry).prefix];
        }
      }
      frm_off = frm_off + str_len | 0;
      if (key < (table.nentries - 1 | 0) && !table_is_full)
        table.entries[table.nentries - 1 | 0].suffix = (entry == null ? throwUPAE('entry') : entry).suffix;
    }
    this.free_s8jyv4$(table);
    state.sub_len = readU8(gif.fd);
    this.lseek_g38coo$(gif.fd, end, this.SEEK_SET);
    return 0;
  };
  GifDec.prototype.read_image_pyaijx$ = function (gif) {
    var tmp$;
    gif.fx = this.read_num_39qel5$(gif.fd);
    gif.fy = this.read_num_39qel5$(gif.fd);
    gif.fw = this.read_num_39qel5$(gif.fd);
    gif.fh = this.read_num_39qel5$(gif.fd);
    var fisrz = readU8(gif.fd);
    var interlace = (fisrz & 64) !== 0;
    if ((fisrz & 128) !== 0) {
      gif.lct.size = 1 << (fisrz & 7) + 1;
      tmp$ = gif.lct.size;
      for (var n = 0; n < tmp$; n++) {
        var r = readU8(gif.fd);
        var g = readU8(gif.fd);
        var b = readU8(gif.fd);
        gif.lct.colors.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_qt1dr2$(r, g, b));
      }
      gif.palette = gif.lct;
    } else {
      gif.palette = gif.gct;
    }
    return this.read_image_data_gugzei$(gif, interlace);
  };
  GifDec.prototype.render_frame_rect_nw933t$ = function (gif, buffer) {
    var tmp$, tmp$_0;
    var i = Kotlin.imul(gif.fy, gif.width) + gif.fx | 0;
    tmp$ = gif.fh;
    for (var j = 0; j < tmp$; j++) {
      tmp$_0 = gif.fw;
      for (var k = 0; k < tmp$_0; k++) {
        var index = gif.frame.get_za3lpa$(Kotlin.imul(gif.fy + j | 0, gif.width) + gif.fx + k | 0).data & 255;
        var color = gif.palette.colors.get_za3lpa$(index);
        if (!gif.gce.transparency || index !== gif.gce.tindex) {
          buffer.set_vlvk8p$(i + k | 0, color);
        }}
      i = i + gif.width | 0;
    }
  };
  GifDec.prototype.dispose_pyaijx$ = function (gif) {
    var tmp$, tmp$_0;
    switch (gif.gce.disposal) {
      case 2:
        var bgcolor = gif.palette.colors.get_za3lpa$(gif.bgindex * 3 | 0);
        var i = Kotlin.imul(gif.fy, gif.width) + gif.fx | 0;
        tmp$ = gif.fh;
        for (var j = 0; j < tmp$; j++) {
          tmp$_0 = gif.fw;
          for (var k = 0; k < tmp$_0; k++) {
            gif.canvas.set_vlvk8p$(i + k | 0, bgcolor);
          }
          i = i + gif.width | 0;
        }

        break;
      case 3:
        break;
      default:this.render_frame_rect_nw933t$(gif, gif.canvas);
        break;
    }
  };
  GifDec.prototype.gd_get_frame_pyaijx$ = function (gif) {
    var sep;
    this.dispose_pyaijx$(gif);
    sep = unboxChar(this.readChar_39qel5$(gif.fd));
    while (sep !== 44) {
      if (sep === 59)
        return 0;
      if (sep === 33)
        this.read_ext_pyaijx$(gif);
      else
        return -1;
      sep = unboxChar(this.readChar_39qel5$(gif.fd));
    }
    if (this.read_image_pyaijx$(gif) === -1)
      return -1;
    return 1;
  };
  GifDec.prototype.gd_render_frame_nw933t$ = function (gif, buffer) {
    arraycopy(gif.canvas, 0, buffer, 0, Kotlin.imul(gif.width, gif.height));
    this.render_frame_rect_nw933t$(gif, buffer);
  };
  GifDec.prototype.gd_rewind_pyaijx$ = function (gif) {
    this.lseek_g38coo$(gif.fd, gif.anim_start, this.SEEK_SET);
  };
  GifDec.prototype.gd_close_gif_pyaijx$ = function (gif) {
    this.close_39qel5$(gif.fd);
    this.free_s8jyv4$(gif);
  };
  GifDec.prototype.close_39qel5$ = function (fd) {
    fd.close();
  };
  GifDec.prototype.free_s8jyv4$ = function (obj) {
  };
  GifDec.prototype.readChar_39qel5$ = function (fd) {
    return toBoxedChar(toChar(readU8(fd)));
  };
  GifDec.prototype.lseek_g38coo$ = function (fd, pos, kind) {
    switch (kind) {
      case 0:
        fd.position = pos;
        break;
      case 1:
        fd.position = fd.position.add(pos);
        break;
    }
    return fd.position;
  };
  function Coroutine$open_bm4lxs$($this, name_0, mode_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
  }
  Coroutine$open_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$open_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$open_bm4lxs$.prototype.constructor = Coroutine$open_bm4lxs$;
  Coroutine$open_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = get_uniVfs(this.local$name).readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return openSync(this.result_0);
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
  GifDec.prototype.open_bm4lxs$ = function (name_0, mode_0, continuation_0, suspended) {
    var instance = new Coroutine$open_bm4lxs$(this, name_0, mode_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GifDec.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GifDec',
    interfaces: []
  };
  var GifDec_instance = null;
  function GifDec_getInstance() {
    if (GifDec_instance === null) {
      new GifDec();
    }return GifDec_instance;
  }
  function GifPtr(pos) {
    this.pos = pos;
  }
  GifPtr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GifPtr',
    interfaces: []
  };
  GifPtr.prototype.unbox = function () {
    return this.pos;
  };
  GifPtr.prototype.toString = function () {
    return 'GifPtr(pos=' + Kotlin.toString(this.pos) + ')';
  };
  GifPtr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    return result;
  };
  GifPtr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pos, other.pos))));
  };
  function ICO() {
    ICO_instance = this;
    ImageFormat.call(this, ['ico']);
  }
  ICO.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (readU16LE_0(s) !== 0)
      return null;
    if (readU16LE_0(s) !== 1)
      return null;
    var count = readU16LE_0(s);
    if (count >= 1000)
      return null;
    return new ImageInfo();
  };
  function ICO$readImage$DirEntry(width, height, colorCount, reserved, planes, bitCount, size, offset) {
    this.width = width;
    this.height = height;
    this.colorCount = colorCount;
    this.reserved = reserved;
    this.planes = planes;
    this.bitCount = bitCount;
    this.size = size;
    this.offset = offset;
  }
  ICO$readImage$DirEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirEntry',
    interfaces: []
  };
  ICO$readImage$DirEntry.prototype.component1 = function () {
    return this.width;
  };
  ICO$readImage$DirEntry.prototype.component2 = function () {
    return this.height;
  };
  ICO$readImage$DirEntry.prototype.component3 = function () {
    return this.colorCount;
  };
  ICO$readImage$DirEntry.prototype.component4 = function () {
    return this.reserved;
  };
  ICO$readImage$DirEntry.prototype.component5 = function () {
    return this.planes;
  };
  ICO$readImage$DirEntry.prototype.component6 = function () {
    return this.bitCount;
  };
  ICO$readImage$DirEntry.prototype.component7 = function () {
    return this.size;
  };
  ICO$readImage$DirEntry.prototype.component8 = function () {
    return this.offset;
  };
  ICO$readImage$DirEntry.prototype.copy_wrdw30$ = function (width, height, colorCount, reserved, planes, bitCount, size, offset) {
    return new ICO$readImage$DirEntry(width === void 0 ? this.width : width, height === void 0 ? this.height : height, colorCount === void 0 ? this.colorCount : colorCount, reserved === void 0 ? this.reserved : reserved, planes === void 0 ? this.planes : planes, bitCount === void 0 ? this.bitCount : bitCount, size === void 0 ? this.size : size, offset === void 0 ? this.offset : offset);
  };
  ICO$readImage$DirEntry.prototype.toString = function () {
    return 'DirEntry(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', colorCount=' + Kotlin.toString(this.colorCount)) + (', reserved=' + Kotlin.toString(this.reserved)) + (', planes=' + Kotlin.toString(this.planes)) + (', bitCount=' + Kotlin.toString(this.bitCount)) + (', size=' + Kotlin.toString(this.size)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  ICO$readImage$DirEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.reserved) | 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  ICO$readImage$DirEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.colorCount, other.colorCount) && Kotlin.equals(this.reserved, other.reserved) && Kotlin.equals(this.planes, other.planes) && Kotlin.equals(this.bitCount, other.bitCount) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.offset, other.offset)))));
  };
  function ICO$readImage$readDirEntry(closure$s) {
    return function () {
      return new ICO$readImage$DirEntry(readU8(closure$s), readU8(closure$s), readU8(closure$s), readU8(closure$s), readU16LE_0(closure$s), readU16LE_0(closure$s), readS32LE_0(closure$s), readS32LE_0(closure$s));
    };
  }
  function ICO$readImage$readBitmap(closure$props) {
    return function (e, s) {
      var tmp$;
      var tryPNGHead = readU32BE(sliceStart(s));
      if (equals(tryPNGHead, L2303741511))
        return PNG_getInstance().decode_1ooaqm$(sliceStart(s), closure$props.copy_qp3p0u$(closure$props.filename + '.png'));
      var headerSize = readS32LE_0(s);
      var width = readS32LE_0(s);
      var height = readS32LE_0(s);
      var planes = readS16LE(s);
      var bitCount = readS16LE(s);
      var compression = readS32LE_0(s);
      var imageSize = readS32LE_0(s);
      var pixelsXPerMeter = readS32LE_0(s);
      var pixelsYPerMeter = readS32LE_0(s);
      var clrUsed = readS32LE_0(s);
      var clrImportant = readS32LE_0(s);
      var palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(0);
      if (compression !== 0)
        throw UnsupportedOperationException_init('Not supported compressed .ico');
      if (bitCount <= 8) {
        var colors = clrUsed === 0 ? 1 << bitCount : clrUsed;
        var $receiver = until(0, colors);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var b = readU8(s);
          var g = readU8(s);
          var r = readU8(s);
          var reserved = readU8(s);
          tmp$_1.call(destination, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, 255));
        }
        palette = toRgbaArray(destination);
      }var stride = Kotlin.imul(e.width, bitCount) / 8 | 0;
      var data = readBytes(s, Kotlin.imul(stride, e.height));
      switch (bitCount) {
        case 4:
          tmp$ = new Bitmap4(e.width, e.height, data, palette);
          break;
        case 8:
          tmp$ = new Bitmap8(e.width, e.height, data, palette);
          break;
        case 32:
          tmp$ = (new Bitmap32(e.width, e.height)).writeDecoded_77vltg$(BGRA_getInstance(), data);
          break;
        default:throw UnsupportedOperationException_init('Unsupported bitCount: ' + bitCount);
      }
      return tmp$;
    };
  }
  ICO.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var readDirEntry = ICO$readImage$readDirEntry(s);
    var readBitmap = ICO$readImage$readBitmap(props);
    var reserved = readU16LE_0(s);
    var type = readU16LE_0(s);
    var count = readU16LE_0(s);
    var $receiver = until(0, count);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readDirEntry());
    }
    var entries = destination;
    var bitmaps = ArrayList_init_0();
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var bmp = readBitmap(e, sliceWithSize_0(s, Kotlin.Long.fromInt(e.offset), Kotlin.Long.fromInt(e.size)));
      bmp.flipY();
      bitmaps.add_11rb$(bmp);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(bitmaps, 10));
    var tmp$_1;
    tmp$_1 = bitmaps.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(new ImageFrame(item_0, void 0, void 0, void 0, false));
    }
    return new ImageData(destination_0);
  };
  ICO.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    write16LE_0(s, 0);
    write16LE_0(s, 1);
    write16LE_0(s, image.frames.size);
    var payloadStart = 6 + (16 * image.frames.size | 0) | 0;
    var payloadData = MemorySyncStream();
    tmp$ = image.frames.iterator();
    while (tmp$.hasNext()) {
      var frame = tmp$.next();
      var bitmap = frame.bitmap;
      var width = bitmap.width;
      var height = bitmap.height;
      if (width > 256 || height > 256) {
        throw IllegalStateException_init(('Size too big for ICO image: ' + frame.bitmap.size).toString());
      }write8(s, width);
      write8(s, height);
      write8(s, 0);
      write8(s, 0);
      write16LE_0(s, 1);
      write16LE_0(s, 32);
      var start = payloadData.position.toInt();
      if (width === 32 && height === 32) {
        var bmp = BMP_getInstance().encode_hnx2ev$(bitmap.toBMP32());
        writeBytes(payloadData, sliceArray(bmp, until(14, bmp.length)));
        var data = new Bitmap1(width, height);
        writeBytes(payloadData, data.data);
      } else {
        writeBytes(payloadData, PNG_getInstance().encode_hnx2ev$(bitmap.toBMP32()));
      }
      var size = payloadData.position.toInt() - start | 0;
      write32LE_0(s, size);
      write32LE_0(s, payloadStart + start | 0);
    }
    writeBytes(s, toByteArray(payloadData));
  };
  ICO.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ICO',
    interfaces: [ImageFormat]
  };
  var ICO_instance = null;
  function ICO_getInstance() {
    if (ICO_instance === null) {
      new ICO();
    }return ICO_instance;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ImageData(frames, loopCount, width, height) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (loopCount === void 0)
      loopCount = 0;
    if (width === void 0)
      width = (tmp$_0 = (tmp$ = firstOrNull_0(frames)) != null ? tmp$.width : null) != null ? tmp$_0 : 1;
    if (height === void 0)
      height = (tmp$_2 = (tmp$_1 = firstOrNull_0(frames)) != null ? tmp$_1.height : null) != null ? tmp$_2 : 1;
    this.frames = frames;
    this.loopCount = loopCount;
    this.width = width;
    this.height = height;
    this.$delegate_eltpmo$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageData.prototype, 'area', {
    get: function () {
      return get_area(this.frames);
    }
  });
  function ImageData$get_ImageData$mainBitmap$lambda(it) {
    if (it.main) {
      return 2147483647;
    } else {
      return Kotlin.imul(Kotlin.imul(it.bitmap.width, it.bitmap.height), Kotlin.imul(it.bitmap.bpp, it.bitmap.bpp));
    }
  }
  Object.defineProperty(ImageData.prototype, 'mainBitmap', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = firstOrNull_0(sortedWith(this.frames, new Comparator$ObjectLiteral(compareBy$lambda(ImageData$get_ImageData$mainBitmap$lambda))))) != null ? tmp$.bitmap : null;
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init('No bitmap found');
      }return tmp$_0;
    }
  });
  ImageData.prototype.toString = function () {
    return 'ImageData(' + this.frames + ')';
  };
  Object.defineProperty(ImageData.prototype, 'extra', {
    get: function () {
      return this.$delegate_eltpmo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_eltpmo$_0.extra = tmp$;
    }
  });
  ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: [Extra]
  };
  function ImageFormat(exts) {
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
  ImageFormat.prototype.readImage_1ooaqm$$default = function (s, props) {
    throw new NotImplementedError_init();
  };
  ImageFormat.prototype.readImage_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.readImage_1ooaqm$$default(s, props);
  };
  ImageFormat.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    throw UnsupportedOperationException_init_0();
  };
  ImageFormat.prototype.writeImage_2psbf2$ = function (image, s, props, callback$default) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    callback$default ? callback$default(image, s, props) : this.writeImage_2psbf2$$default(image, s, props);
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var runIgnoringExceptions$result;
    runIgnoringExceptions$break: do {
      try {
        var bmp = this.read_1ooaqm$(s, props);
        var $receiver = new ImageInfo();
        $receiver.width = bmp.width;
        $receiver.height = bmp.height;
        $receiver.bitsPerPixel = bmp.bpp;
        runIgnoringExceptions$result = $receiver;
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
            printStackTrace(e);
          runIgnoringExceptions$result = null;
          break runIgnoringExceptions$break;
        } else
          throw e;
      }
    }
     while (false);
    return runIgnoringExceptions$result;
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.decodeHeader_1ooaqm$$default(s, props);
  };
  ImageFormat.prototype.read_zdd1ed$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.readImage_1ooaqm$(s, (new ImageDecodingProps()).copy_qp3p0u$(filename)).mainBitmap;
  };
  function Coroutine$read_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$read_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_3ekr7n$.prototype.constructor = Coroutine$read_3ekr7n$;
  Coroutine$read_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, get_baseName(this.local$file));
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
  ImageFormat.prototype.read_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$read_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ImageFormat.prototype.read_nwlife$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.read_zdd1ed$(openSync(s), filename);
  };
  ImageFormat.prototype.read_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.readImage_1ooaqm$(s, props).mainBitmap;
  };
  ImageFormat.prototype.read_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  ImageFormat.prototype.check_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    var tmp$;
    var runIgnoringExceptions$result;
    runIgnoringExceptions$break: do {
      try {
        runIgnoringExceptions$result = this.decodeHeader_1ooaqm$(s, props) != null;
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
            printStackTrace(e);
          runIgnoringExceptions$result = null;
          break runIgnoringExceptions$break;
        } else
          throw e;
      }
    }
     while (false);
    return (tmp$ = runIgnoringExceptions$result) != null ? tmp$ : false;
  };
  ImageFormat.prototype.decode_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(s, props);
  };
  ImageFormat.prototype.decode_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  function Coroutine$decode_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$decode_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_3ekr7n$.prototype.constructor = Coroutine$decode_3ekr7n$;
  Coroutine$decode_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, get_baseName(this.local$file));
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
  ImageFormat.prototype.decode_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ImageFormat.prototype.encode_dqmhj5$ = function (frames, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuilder_init(get_area(frames) * 4 | 0);
    var s = MemorySyncStream_0(buffer);
    this.writeImage_2psbf2$(new ImageData(frames), s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_ruzdkj$ = function (image, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuilder_init(image.area * 4 | 0);
    var s = MemorySyncStream_0(buffer);
    this.writeImage_2psbf2$(image, s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_hnx2ev$ = function (bitmap, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    return this.encode_dqmhj5$(listOf_0(new ImageFrame(bitmap)), props);
  };
  function Coroutine$read_jxoshq$($this, file_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$props = props_0;
  }
  Coroutine$read_jxoshq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_jxoshq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_jxoshq$.prototype.constructor = Coroutine$read_jxoshq$;
  Coroutine$read_jxoshq$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$file.readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.readImage_1ooaqm$(openSync(this.result_0), this.local$props.copy_qp3p0u$(get_baseName(this.local$file)));
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
  ImageFormat.prototype.read_jxoshq$ = function (file_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$read_jxoshq$(this, file_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ImageFormat.prototype.toString = function () {
    return 'ImageFormat(' + this.extensions + ')';
  };
  ImageFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormat',
    interfaces: []
  };
  function ImageDecodingProps(filename, width, height, extra) {
    if (filename === void 0)
      filename = 'unknown';
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.extra_5zgpe1$_0 = extra;
  }
  Object.defineProperty(ImageDecodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_5zgpe1$_0;
    },
    set: function (extra) {
      this.extra_5zgpe1$_0 = extra;
    }
  });
  ImageDecodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageDecodingProps',
    interfaces: [Extra]
  };
  ImageDecodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageDecodingProps.prototype.component2 = function () {
    return this.width;
  };
  ImageDecodingProps.prototype.component3 = function () {
    return this.height;
  };
  ImageDecodingProps.prototype.component4 = function () {
    return this.extra;
  };
  ImageDecodingProps.prototype.copy_qp3p0u$ = function (filename, width, height, extra) {
    return new ImageDecodingProps(filename === void 0 ? this.filename : filename, width === void 0 ? this.width : width, height === void 0 ? this.height : height, extra === void 0 ? this.extra : extra);
  };
  ImageDecodingProps.prototype.toString = function () {
    return 'ImageDecodingProps(filename=' + Kotlin.toString(this.filename) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageDecodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageDecodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageEncodingProps(filename, quality, extra) {
    if (filename === void 0)
      filename = '';
    if (quality === void 0)
      quality = 0.81;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.quality = quality;
    this.extra_flamk1$_0 = extra;
  }
  Object.defineProperty(ImageEncodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_flamk1$_0;
    },
    set: function (extra) {
      this.extra_flamk1$_0 = extra;
    }
  });
  ImageEncodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageEncodingProps',
    interfaces: [Extra]
  };
  ImageEncodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageEncodingProps.prototype.component2 = function () {
    return this.quality;
  };
  ImageEncodingProps.prototype.component3 = function () {
    return this.extra;
  };
  ImageEncodingProps.prototype.copy_x69rha$ = function (filename, quality, extra) {
    return new ImageEncodingProps(filename === void 0 ? this.filename : filename, quality === void 0 ? this.quality : quality, extra === void 0 ? this.extra : extra);
  };
  ImageEncodingProps.prototype.toString = function () {
    return 'ImageEncodingProps(filename=' + Kotlin.toString(this.filename) + (', quality=' + Kotlin.toString(this.quality)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageEncodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.quality) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageEncodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.quality, other.quality) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageFormats(formats) {
    ImageFormat.call(this, ['']);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = formats.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = Kotlin.isType(element, ImageFormats) ? toList(element.formats) : listOf_0(element);
      addAll(destination, list);
    }
    this.formats = toSet(destination);
  }
  ImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    tmp$ = this.formats.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        tmp$_0 = format.decodeHeader_1ooaqm$(sliceStart(s), props);
        if (tmp$_0 == null) {
          continue;
        }} catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          continue;
        } else
          throw e;
      }
      return tmp$_0;
    }
    return null;
  };
  ImageFormats.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    tmp$ = this.formats.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      if (format.check_1ooaqm$(sliceStart(s), props)) {
        return format.readImage_1ooaqm$(sliceStart(s), props);
      }}
    throw UnsupportedOperationException_init('No suitable image format : MAGIC:' + readString(sliceStart(s), 4, lang.ASCII) + '(' + get_hex_0(readBytes(sliceStart(s), 4)) + ') (' + toString(readBytes(sliceStart(s), 4), lang.ASCII) + ')');
  };
  ImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(props.filename));
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
      var tmp$_1 = "Don't know how to generate file for extension '" + ext + "' (supported extensions ";
      var $receiver_0 = this.formats;
      var destination = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var list = element_0.extensions;
        addAll(destination, list);
      }
      throw UnsupportedOperationException_init(tmp$_1 + destination + ') (props ' + props + ')');
    }var format = tmp$;
    format.writeImage_2psbf2$(image, s, props);
  };
  ImageFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormats',
    interfaces: [ImageFormat]
  };
  function ImageFormats_init(formats, $this) {
    $this = $this || Object.create(ImageFormats.prototype);
    ImageFormats.call($this, toList_0(formats));
    return $this;
  }
  function plus_2($receiver, format) {
    return ImageFormats_init([$receiver, format]);
  }
  function plus_3($receiver, format) {
    return new ImageFormats(plus(listOf_0($receiver), format));
  }
  function writeTo($receiver, file, formats, props, continuation) {
    if (formats === void 0)
      formats = RegisteredImageFormats_getInstance();
    if (props === void 0)
      props = new ImageEncodingProps();
    return file.writeBytes_bdsgvo$(formats.encode_hnx2ev$($receiver, props.copy_x69rha$(get_baseName(file))), [], continuation);
  }
  function encode_3($receiver, formats, props, continuation) {
    if (formats === void 0)
      formats = RegisteredImageFormats_getInstance();
    if (props === void 0)
      props = new ImageEncodingProps();
    return formats.encode_hnx2ev$($receiver, props);
  }
  function ImageFrame(bitmap, time, targetX, targetY, main) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }if (targetX === void 0)
      targetX = 0;
    if (targetY === void 0)
      targetY = 0;
    if (main === void 0)
      main = true;
    this.bitmap = bitmap;
    this.time = time;
    this.targetX = targetX;
    this.targetY = targetY;
    this.main = main;
    this.$delegate_qnaswn$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageFrame.prototype, 'duration', {
    get: function () {
      return this.time;
    }
  });
  Object.defineProperty(ImageFrame.prototype, 'width', {
    get: function () {
      return this.bitmap.width;
    }
  });
  Object.defineProperty(ImageFrame.prototype, 'height', {
    get: function () {
      return this.bitmap.height;
    }
  });
  Object.defineProperty(ImageFrame.prototype, 'area', {
    get: function () {
      return this.bitmap.area;
    }
  });
  ImageFrame.prototype.toString = function () {
    return 'ImageFrame(' + this.bitmap + ', time=' + this.time + ', targetX=' + this.targetX + ', targetY=' + this.targetY + ', main=' + this.main + ')';
  };
  Object.defineProperty(ImageFrame.prototype, 'extra', {
    get: function () {
      return this.$delegate_qnaswn$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_qnaswn$_0.extra = tmp$;
    }
  });
  ImageFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFrame',
    interfaces: [Extra]
  };
  function get_area($receiver) {
    var tmp$;
    var sum = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.area | 0;
    }
    return sum;
  }
  function ImageInfo() {
    this.$delegate_elx5vo$_0 = new Extra$Mixin();
    this.width = 0;
    this.height = 0;
    this.bitsPerPixel = 8;
  }
  Object.defineProperty(ImageInfo.prototype, 'size', {
    get: function () {
      return Size.Companion.invoke_vux9f0$(this.width, this.height);
    }
  });
  ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + this.width + ', height=' + this.height + ', bpp=' + this.bitsPerPixel + ', extra=' + toString_0(this.extra) + ')';
  };
  Object.defineProperty(ImageInfo.prototype, 'extra', {
    get: function () {
      return this.$delegate_elx5vo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_elx5vo$_0.extra = tmp$;
    }
  });
  ImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageInfo',
    interfaces: [Extra]
  };
  function KRA() {
    KRA_instance = this;
    ImageFormat.call(this, ['kra']);
    this.mergedImagePng_0 = 'mergedimage.png';
  }
  function Coroutine$KRA$decodeHeader$lambda(closure$s_0, this$KRA_0, closure$props_0, closure$out_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$this$KRA = this$KRA_0;
    this.local$closure$props = closure$props_0;
    this.local$closure$out = closure$out_0;
  }
  Coroutine$KRA$decodeHeader$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KRA$decodeHeader$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KRA$decodeHeader$lambda.prototype.constructor = Coroutine$KRA$decodeHeader$lambda;
  Coroutine$KRA$decodeHeader$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = ZipVfs(toAsync(this.local$closure$s.clone()), void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var vfs = this.result_0;
            var mergedFile = vfs.get_61zpoe$(this.local$this$KRA.mergedImagePng_0);
            this.state_0 = 3;
            this.result_0 = mergedFile.readRangeBytes_6z6t3e$(L0.rangeTo(Kotlin.Long.fromInt(128)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var mergedBytes = this.result_0;
            return this.local$closure$out.v = PNG_getInstance().decodeHeader_1ooaqm$(openSync(mergedBytes), this.local$closure$props), Unit;
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
  function KRA$decodeHeader$lambda(closure$s_0, this$KRA_0, closure$props_0, closure$out_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KRA$decodeHeader$lambda(closure$s_0, this$KRA_0, closure$props_0, closure$out_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  KRA.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(toString(readBytesExact(s.clone(), 2), lang.UTF8), 'PK'))
      return null;
    var out = {v: null};
    runBlockingNoSuspensions(KRA$decodeHeader$lambda(s, this, props, out));
    return out.v;
  };
  function Coroutine$KRA$readImage$lambda(closure$s_0, this$KRA_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$this$KRA = this$KRA_0;
  }
  Coroutine$KRA$readImage$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KRA$readImage$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KRA$readImage$lambda.prototype.constructor = Coroutine$KRA$readImage$lambda;
  Coroutine$KRA$readImage$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = ZipVfs(toAsync(this.local$closure$s.clone()), void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var vfs = this.result_0;
            this.state_0 = 3;
            this.result_0 = vfs.get_61zpoe$(this.local$this$KRA.mergedImagePng_0).readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var mergedBytes = this.result_0;
            return PNG_getInstance().readImage_1ooaqm$(openSync(mergedBytes));
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
  function KRA$readImage$lambda(closure$s_0, this$KRA_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KRA$readImage$lambda(closure$s_0, this$KRA_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  KRA.prototype.readImage_1ooaqm$$default = function (s, props) {
    return runBlockingNoSuspensions(KRA$readImage$lambda(s, this));
  };
  KRA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KRA',
    interfaces: [ImageFormat]
  };
  var KRA_instance = null;
  function KRA_getInstance() {
    if (KRA_instance === null) {
      new KRA();
    }return KRA_instance;
  }
  function Coroutine$decode($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode.prototype.constructor = Coroutine$decode;
  Coroutine$decode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$s.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$s)));
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
  function decode_1($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$filename = filename_0;
  }
  Coroutine$decode_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_0.prototype.constructor = Coroutine$decode_0;
  Coroutine$decode_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, new ImageDecodingProps(this.local$filename));
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
  function decode_2($receiver_0, s_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_1.prototype.constructor = Coroutine$decode_1;
  Coroutine$decode_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, this.local$props);
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
  function decode_3($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function get_nativeImageFormatProviders() {
    return listOf_0(nativeImageFormatProvider);
  }
  function displayImage(bmp, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return nativeImageFormatProvider.display_uwsoz2$(bmp, kind, continuation);
  }
  function Coroutine$decodeImageBytes(bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$exceptions = void 0;
    this.local$bytes = bytes_0;
  }
  Coroutine$decodeImageBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageBytes.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageBytes.prototype.constructor = Coroutine$decodeImageBytes;
  Coroutine$decodeImageBytes.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$exceptions = ArrayList_init_0();
            this.local$tmp$ = get_nativeImageFormatProviders().iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_fqrh44$(this.local$bytes, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.local$exceptions.add_11rb$(t);
            } else
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            tmp$ = get_nativeImageFormatProviders().iterator();
            while (tmp$.hasNext()) {
              var v = tmp$.next();
              println(v);
            }

            tmp$_0 = this.local$exceptions.iterator();
            while (tmp$_0.hasNext()) {
              var v_0 = tmp$_0.next();
              printStackTrace(v_0);
            }

            throw UnsupportedOperationException_init('No format supported trying to decode ByteArray');
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
  function decodeImageBytes(bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageBytes(bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decodeImageFile(file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$exceptions = void 0;
    this.local$file = file_0;
  }
  Coroutine$decodeImageFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageFile.prototype.constructor = Coroutine$decodeImageFile;
  Coroutine$decodeImageFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$exceptions = ArrayList_init_0();
            this.local$tmp$ = get_nativeImageFormatProviders().iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_o2v52r$(this.local$file.vfs, this.local$file.path, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.local$exceptions.add_11rb$(t);
            } else
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            tmp$ = get_nativeImageFormatProviders().iterator();
            while (tmp$.hasNext()) {
              var v = tmp$.next();
              println(v);
            }

            tmp$_0 = this.local$exceptions.iterator();
            while (tmp$_0.hasNext()) {
              var e_0 = tmp$_0.next();
              printStackTrace(e_0);
            }

            throw UnsupportedOperationException_init('No format supported trying to decode ' + this.local$file);
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
  function decodeImageFile(file_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageFile(file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readNativeImage($receiver, continuation) {
    return decodeImageFile($receiver, continuation);
  }
  function Coroutine$readImageData($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readImageData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData.prototype.constructor = Coroutine$readImageData;
  Coroutine$readImageData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$$receiver)));
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
  function readImageData($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNativeImage($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readNativeImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNativeImage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNativeImage.prototype.constructor = Coroutine$readNativeImage;
  Coroutine$readNativeImage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
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
  function readNativeImage_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readNativeImage($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_0($receiver_0, formats_0, basename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$basename = basename_0;
  }
  Coroutine$readImageData_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_0.prototype.constructor = Coroutine$readImageData_0;
  Coroutine$readImageData_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$basename === void 0)
              this.local$basename = 'file.bin';
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(openSync(this.result_0), new ImageDecodingProps(this.local$basename));
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
  function readImageData_0($receiver_0, formats_0, basename_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_0($receiver_0, formats_0, basename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageDataProps($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readImageDataProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageDataProps.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageDataProps.prototype.constructor = Coroutine$readImageDataProps;
  Coroutine$readImageDataProps.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(openSync(this.result_0), this.local$props);
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
  function readImageDataProps($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageDataProps($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapListNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative.prototype.constructor = Coroutine$readBitmapListNoNative;
  Coroutine$readBitmapListNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_0(this.local$$receiver, this.local$formats, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readBitmapListNoNative($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmapInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo.prototype.constructor = Coroutine$readBitmapInfo;
  Coroutine$readBitmapInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0, this.local$props);
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
  function readBitmapInfo($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_1($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_1.prototype.constructor = Coroutine$readImageData_1;
  Coroutine$readImageData_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, new ImageDecodingProps(get_baseName(this.local$$receiver)));
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
  function readImageData_1($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_1($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapListNoNative_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative_0.prototype.constructor = Coroutine$readBitmapListNoNative_0;
  Coroutine$readBitmapListNoNative_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_1(this.local$$receiver, this.local$formats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readBitmapListNoNative_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readBitmapImageData($receiver, formats, continuation) {
    return readImageData_1($receiver, formats, continuation);
  }
  function readBitmap($receiver, basename, formats, continuation) {
    return readBitmap_0($receiver, formats, new ImageDecodingProps(basename), continuation);
  }
  function Coroutine$readBitmap($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$tmp$ = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap.prototype.constructor = Coroutine$readBitmap;
  Coroutine$readBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            this.state_0 = 1;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 4;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 2;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.local$tmp$ = this.local$formats.decode_pdgdrr$(this.local$bytes, this.local$props);
              this.state_0 = 3;
              continue;
            }

          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.local$tmp$ = this.local$formats.decode_pdgdrr$(this.local$bytes, this.local$props);
            } else
              throw t;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$;
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
  function readBitmap_0($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapInfo_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo_0.prototype.constructor = Coroutine$readBitmapInfo_0;
  Coroutine$readBitmapInfo_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0);
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
  function readBitmapInfo_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapOptimized($receiver_0, formats_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$readBitmapOptimized.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapOptimized.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapOptimized.prototype.constructor = Coroutine$readBitmapOptimized;
  Coroutine$readBitmapOptimized.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$premultiplied === void 0)
              this.local$premultiplied = true;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = nativeImageFormatProvider.decode_x9gm8m$(this.local$$receiver, this.local$premultiplied, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              printStackTrace(t);
              this.state_0 = 3;
              this.result_0 = readBitmap_1(this.local$$receiver, this.local$formats, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              throw t;
            }

          case 3:
            return this.result_0;
          case 4:
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
  function readBitmapOptimized($receiver_0, formats_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapOptimized($receiver_0, formats_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap_0($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmap_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap_0.prototype.constructor = Coroutine$readBitmap_0;
  Coroutine$readBitmap_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (nativeImageLoadingEnabled) {
              this.exceptionState_0 = 3;
              this.state_0 = 2;
              this.result_0 = nativeImageFormatProvider.decode_3ekr7n$(this.local$$receiver, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 1;
              this.result_0 = this.local$$receiver.read(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            return this.local$formats.decode_pdgdrr$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$$receiver)));
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              println("Couldn't read native image: " + e);
              printStackTrace(e);
              this.state_0 = 4;
              this.result_0 = this.local$$receiver.read(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              throw e;
            }

          case 4:
            return this.local$formats.decode_pdgdrr$(this.result_0, this.local$props.copy_qp3p0u$(get_baseName(this.local$$receiver)));
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            return;
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
  function readBitmap_1($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap_0($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapSlice($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapSlice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapSlice.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapSlice.prototype.constructor = Coroutine$readBitmapSlice;
  Coroutine$readBitmapSlice.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            this.state_0 = 2;
            this.result_0 = readBitmapOptimized(this.local$$receiver, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return slice(this.result_0);
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
  function readBitmapSlice($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapSlice($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var nativeImageLoadingEnabled;
  function disableNativeImageLoading(callback, continuation) {
    var oldNativeImageLoadingEnabled_0 = package$format.nativeImageLoadingEnabled;
    try {
      package$format.nativeImageLoadingEnabled = false;
      callback();
    }finally {
      package$format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
    }
  }
  defineInlineFunction('korim-root-korim.com.soywiz.korim.format.disableNativeImageLoading_o14v8n$', wrapFunction(function () {
    var format = _.com.soywiz.korim.format;
    return function (callback, continuation) {
      var oldNativeImageLoadingEnabled_0 = format.nativeImageLoadingEnabled;
      try {
        format.nativeImageLoadingEnabled = false;
        callback();
      }finally {
        format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
      }
    };
  }));
  function Coroutine$readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
  }
  Coroutine$readBitmapNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapNoNative.prototype.constructor = Coroutine$readBitmapNoNative;
  Coroutine$readBitmapNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = RegisteredImageFormats_getInstance();
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props).mainBitmap;
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
  function readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readBitmapNoNative_0($receiver, formats, continuation) {
    if (formats === void 0)
      formats = RegisteredImageFormats_getInstance();
    return decode_1(formats, $receiver, new ImageDecodingProps(get_baseName($receiver)), continuation);
  }
  function Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$bitmap = bitmap_0;
    this.local$format = format_0;
    this.local$props = props_0;
  }
  Coroutine$writeBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeBitmap.prototype.constructor = Coroutine$writeBitmap;
  Coroutine$writeBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageEncodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.write_bdsgvo$(this.local$format.encode_hnx2ev$(this.local$bitmap, this.local$props.copy_x69rha$(get_baseName(this.local$$receiver))), [], this);
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
  function writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function NativeImageConfig(premultiplied) {
    this.premultiplied = premultiplied;
  }
  NativeImageConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImageConfig',
    interfaces: []
  };
  NativeImageConfig.prototype.component1 = function () {
    return this.premultiplied;
  };
  NativeImageConfig.prototype.copy_6taknv$ = function (premultiplied) {
    return new NativeImageConfig(premultiplied === void 0 ? this.premultiplied : premultiplied);
  };
  NativeImageConfig.prototype.toString = function () {
    return 'NativeImageConfig(premultiplied=' + Kotlin.toString(this.premultiplied) + ')';
  };
  NativeImageConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.premultiplied) | 0;
    return result;
  };
  NativeImageConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.premultiplied, other.premultiplied))));
  };
  function NativeImageFormatProvider() {
  }
  function Coroutine$decode_52yb2k$($this, vfs_0, path_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$decode_52yb2k$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_52yb2k$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_52yb2k$.prototype.constructor = Coroutine$decode_52yb2k$;
  Coroutine$decode_52yb2k$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_fqrh44$(this.result_0, this);
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
  NativeImageFormatProvider.prototype.decode_52yb2k$ = function (vfs_0, path_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_52yb2k$(this, vfs_0, path_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeImageFormatProvider.prototype.decode_1ecnpg$ = function (file, premultiplied, continuation) {
    return this.decode_52yb2k$(file.vfs, file.path, premultiplied, continuation);
  };
  function Coroutine$decode_x9gm8m$($this, file_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_x9gm8m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_x9gm8m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_x9gm8m$.prototype.constructor = Coroutine$decode_x9gm8m$;
  Coroutine$decode_x9gm8m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_1ecnpg$(this.result_0, this.local$premultiplied, this);
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
  NativeImageFormatProvider.prototype.decode_x9gm8m$ = function (file_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_x9gm8m$(this, file_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeImageFormatProvider.prototype.decode_fqrh44$ = function (data, continuation) {
    return this.decode_1fhb37$(data, true, continuation);
  };
  NativeImageFormatProvider.prototype.decode_o2v52r$ = function (vfs, path, continuation) {
    return this.decode_52yb2k$(vfs, path, true, continuation);
  };
  NativeImageFormatProvider.prototype.decode_j9tqln$ = function (file, continuation) {
    return this.decode_1ecnpg$(file, true, continuation);
  };
  NativeImageFormatProvider.prototype.decode_3ekr7n$ = function (file, continuation) {
    return this.decode_x9gm8m$(file, true, continuation);
  };
  NativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    var $receiver = this.create_vux9f0$(bmp.width, bmp.height);
    $receiver.lock();
    try {
      var ctx = $receiver.getContext2d_6taknv$(true);
      try {
        var width;
        var height;
        width = bmp.width;
        height = bmp.height;
        ctx.drawImage_6s4b0k$(bmp, numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
      }finally {
        ctx.dispose();
      }
    }finally {
      $receiver.unlock_2epnwg$(null);
    }
    return $receiver;
  };
  NativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    return ensureNative(bmp.toBMP32().mipmap_za3lpa$(levels));
  };
  NativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var x = bmp.width * 0.5;
    var tmp$ = numberToInt(Math_0.ceil(x));
    var x_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, numberToInt(Math_0.ceil(x_0)));
    var $this = out.getContext2d_6taknv$(true).renderer;
    var width = out.width;
    var height = out.height;
    var transform;
    transform = new Matrix();
    $this.drawImage_r3wwxz$(bmp, numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height), transform);
    return out;
  };
  NativeImageFormatProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImageFormatProvider',
    interfaces: []
  };
  function showImageAndWait($receiver, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return nativeImageFormatProvider.display_uwsoz2$($receiver, kind, continuation);
  }
  function Coroutine$showImagesAndWait($receiver_0, kind_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$kind = kind_0;
  }
  Coroutine$showImagesAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImagesAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImagesAndWait.prototype.constructor = Coroutine$showImagesAndWait;
  Coroutine$showImagesAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$kind === void 0)
              this.local$kind = 0;
            this.local$tmp$ = this.local$$receiver.frames.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }
            var frame = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = showImageAndWait(frame.bitmap, this.local$kind, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
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
  function showImagesAndWait($receiver_0, kind_0, continuation_0, suspended) {
    var instance = new Coroutine$showImagesAndWait($receiver_0, kind_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function showImageAndWait_0($receiver, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return showImageAndWait(render($receiver).toBMP32(), kind, continuation);
  }
  function BaseNativeImageFormatProvider() {
    NativeImageFormatProvider.call(this);
  }
  Object.defineProperty(BaseNativeImageFormatProvider.prototype, 'formats', {
    get: function () {
      return RegisteredImageFormats_getInstance();
    }
  });
  BaseNativeImageFormatProvider.prototype.decode_1fhb37$ = function (data, premultiplied, continuation) {
    return this.wrapNative_lg0pjf$(this.formats.decode_pdgdrr$(data), premultiplied);
  };
  function Coroutine$decode_52yb2k$_0($this, vfs_0, path_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_52yb2k$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_52yb2k$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_52yb2k$_0.prototype.constructor = Coroutine$decode_52yb2k$_0;
  Coroutine$decode_52yb2k$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_1fhb37$(this.result_0, this.local$premultiplied, this);
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
  BaseNativeImageFormatProvider.prototype.decode_52yb2k$ = function (vfs_0, path_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_52yb2k$_0(this, vfs_0, path_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  BaseNativeImageFormatProvider.prototype.createBitmapNativeImage_uler2c$ = function (bmp) {
    return BitmapNativeImage_init(bmp);
  };
  BaseNativeImageFormatProvider.prototype.wrapNative_lg0pjf$ = function (bmp, premultiplied) {
    var bmp32 = bmp.toBMP32();
    return this.createBitmapNativeImage_uler2c$(premultiplied ? bmp32.premultipliedIfRequired() : bmp32.depremultipliedIfRequired());
  };
  BaseNativeImageFormatProvider.prototype.wrapNativeExt_p7kutq$ = function ($receiver, premultiplied) {
    if (premultiplied === void 0)
      premultiplied = true;
    return this.wrapNative_lg0pjf$($receiver, premultiplied);
  };
  BaseNativeImageFormatProvider.prototype.create_vux9f0$ = function (width, height) {
    return this.createBitmapNativeImage_uler2c$(new Bitmap32(width, height, void 0, true));
  };
  BaseNativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    return this.createBitmapNativeImage_uler2c$(bmp);
  };
  BaseNativeImageFormatProvider.prototype.display_uwsoz2$ = function (bitmap, kind, continuation) {
    println('TODO: NativeNativeImageFormatProvider.display(bitmap=' + bitmap + ', kind=' + kind + ')');
  };
  BaseNativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    return this.createBitmapNativeImage_uler2c$(bmp);
  };
  BaseNativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    return this.createBitmapNativeImage_uler2c$(bmp);
  };
  BaseNativeImageFormatProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseNativeImageFormatProvider',
    interfaces: [NativeImageFormatProvider]
  };
  function BitmapNativeImage(bitmap) {
    NativeImage.call(this, bitmap.width, bitmap.height, bitmap, bitmap.premultiplied);
    this.bitmap = bitmap;
    this.intData = this.bitmap.data.ints;
  }
  BitmapNativeImage.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return this.bitmap.getContext2d_6taknv$(antialiasing);
  };
  BitmapNativeImage.prototype.toBMP32 = function () {
    return this.bitmap;
  };
  BitmapNativeImage.prototype.readPixelsUnsafe_zddtuu$$default = function (x, y, width, height, out, offset) {
    this.bitmap.readPixelsUnsafe_zddtuu$(x, y, width, height, out, offset);
  };
  BitmapNativeImage.prototype.writePixelsUnsafe_zddtuu$$default = function (x, y, width, height, out, offset) {
    this.bitmap.writePixelsUnsafe_zddtuu$(x, y, width, height, out, offset);
  };
  BitmapNativeImage.prototype.setRgba_ci55m7$ = function (x, y, v) {
    this.bitmap.setRgba_ci55m7$(x, y, v);
  };
  BitmapNativeImage.prototype.getRgba_vux9f0$ = function (x, y) {
    return this.bitmap.getRgba_vux9f0$(x, y);
  };
  BitmapNativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapNativeImage',
    interfaces: [NativeImage]
  };
  function BitmapNativeImage_init(bitmap, $this) {
    $this = $this || Object.create(BitmapNativeImage.prototype);
    BitmapNativeImage.call($this, bitmap.toBMP32());
    return $this;
  }
  var arraycopy$lambda_4 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function PNG() {
    PNG_instance = this;
    ImageFormat.call(this, ['png']);
    this.MAGIC1 = -1991225785;
    this.MAGIC2 = 218765834;
    this.InterlacedPasses = listOf([new PNG$InterlacedPass(0, 0, 8, 8, 8, 8), new PNG$InterlacedPass(0, 4, 8, 8, 8, 4), new PNG$InterlacedPass(4, 0, 8, 4, 4, 4), new PNG$InterlacedPass(0, 2, 4, 4, 4, 2), new PNG$InterlacedPass(2, 0, 4, 2, 2, 2), new PNG$InterlacedPass(0, 1, 2, 2, 2, 1), new PNG$InterlacedPass(1, 0, 2, 1, 1, 1)]);
    this.NormalPasses = listOf_0(new PNG$InterlacedPass(0, 0, 1, 1, 1, 1));
  }
  function PNG$InterlacedPass(startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    this.startingRow = startingRow;
    this.startingCol = startingCol;
    this.rowIncrement = rowIncrement;
    this.colIncrement = colIncrement;
    this.blockHeight = blockHeight;
    this.blockWidth = blockWidth;
    var x = this.colIncrement;
    this.colIncrementShift = numberToInt(Math_0.log2(x));
  }
  PNG$InterlacedPass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterlacedPass',
    interfaces: []
  };
  PNG$InterlacedPass.prototype.component1 = function () {
    return this.startingRow;
  };
  PNG$InterlacedPass.prototype.component2 = function () {
    return this.startingCol;
  };
  PNG$InterlacedPass.prototype.component3 = function () {
    return this.rowIncrement;
  };
  PNG$InterlacedPass.prototype.component4 = function () {
    return this.colIncrement;
  };
  PNG$InterlacedPass.prototype.component5 = function () {
    return this.blockHeight;
  };
  PNG$InterlacedPass.prototype.component6 = function () {
    return this.blockWidth;
  };
  PNG$InterlacedPass.prototype.copy_mbbjvw$ = function (startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    return new PNG$InterlacedPass(startingRow === void 0 ? this.startingRow : startingRow, startingCol === void 0 ? this.startingCol : startingCol, rowIncrement === void 0 ? this.rowIncrement : rowIncrement, colIncrement === void 0 ? this.colIncrement : colIncrement, blockHeight === void 0 ? this.blockHeight : blockHeight, blockWidth === void 0 ? this.blockWidth : blockWidth);
  };
  PNG$InterlacedPass.prototype.toString = function () {
    return 'InterlacedPass(startingRow=' + Kotlin.toString(this.startingRow) + (', startingCol=' + Kotlin.toString(this.startingCol)) + (', rowIncrement=' + Kotlin.toString(this.rowIncrement)) + (', colIncrement=' + Kotlin.toString(this.colIncrement)) + (', blockHeight=' + Kotlin.toString(this.blockHeight)) + (', blockWidth=' + Kotlin.toString(this.blockWidth)) + ')';
  };
  PNG$InterlacedPass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startingRow) | 0;
    result = result * 31 + Kotlin.hashCode(this.startingCol) | 0;
    result = result * 31 + Kotlin.hashCode(this.rowIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.colIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockWidth) | 0;
    return result;
  };
  PNG$InterlacedPass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startingRow, other.startingRow) && Kotlin.equals(this.startingCol, other.startingCol) && Kotlin.equals(this.rowIncrement, other.rowIncrement) && Kotlin.equals(this.colIncrement, other.colIncrement) && Kotlin.equals(this.blockHeight, other.blockHeight) && Kotlin.equals(this.blockWidth, other.blockWidth)))));
  };
  function PNG$Colorspace(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PNG$Colorspace_initFields() {
    PNG$Colorspace_initFields = function () {
    };
    PNG$Colorspace$GRAYSCALE_instance = new PNG$Colorspace('GRAYSCALE', 0, 0);
    PNG$Colorspace$RGB_instance = new PNG$Colorspace('RGB', 1, 2);
    PNG$Colorspace$INDEXED_instance = new PNG$Colorspace('INDEXED', 2, 3);
    PNG$Colorspace$GRAYSCALE_ALPHA_instance = new PNG$Colorspace('GRAYSCALE_ALPHA', 3, 4);
    PNG$Colorspace$RGBA_instance = new PNG$Colorspace('RGBA', 4, 6);
    PNG$Colorspace$Companion_getInstance();
  }
  var PNG$Colorspace$GRAYSCALE_instance;
  function PNG$Colorspace$GRAYSCALE_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_instance;
  }
  var PNG$Colorspace$RGB_instance;
  function PNG$Colorspace$RGB_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGB_instance;
  }
  var PNG$Colorspace$INDEXED_instance;
  function PNG$Colorspace$INDEXED_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$INDEXED_instance;
  }
  var PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  function PNG$Colorspace$GRAYSCALE_ALPHA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  }
  var PNG$Colorspace$RGBA_instance;
  function PNG$Colorspace$RGBA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGBA_instance;
  }
  function PNG$Colorspace$Companion() {
    PNG$Colorspace$Companion_instance = this;
    var $receiver = PNG$Colorspace$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  PNG$Colorspace$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PNG$Colorspace$Companion_instance = null;
  function PNG$Colorspace$Companion_getInstance() {
    PNG$Colorspace_initFields();
    if (PNG$Colorspace$Companion_instance === null) {
      new PNG$Colorspace$Companion();
    }return PNG$Colorspace$Companion_instance;
  }
  PNG$Colorspace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Colorspace',
    interfaces: [Enum]
  };
  function PNG$Colorspace$values() {
    return [PNG$Colorspace$GRAYSCALE_getInstance(), PNG$Colorspace$RGB_getInstance(), PNG$Colorspace$INDEXED_getInstance(), PNG$Colorspace$GRAYSCALE_ALPHA_getInstance(), PNG$Colorspace$RGBA_getInstance()];
  }
  PNG$Colorspace.values = PNG$Colorspace$values;
  function PNG$Colorspace$valueOf(name) {
    switch (name) {
      case 'GRAYSCALE':
        return PNG$Colorspace$GRAYSCALE_getInstance();
      case 'RGB':
        return PNG$Colorspace$RGB_getInstance();
      case 'INDEXED':
        return PNG$Colorspace$INDEXED_getInstance();
      case 'GRAYSCALE_ALPHA':
        return PNG$Colorspace$GRAYSCALE_ALPHA_getInstance();
      case 'RGBA':
        return PNG$Colorspace$RGBA_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.format.PNG.Colorspace.' + name);
    }
  }
  PNG$Colorspace.valueOf_61zpoe$ = PNG$Colorspace$valueOf;
  function PNG$Header(width, height, bitsPerChannel, colorspace, compressionmethod, filtermethod, interlacemethod) {
    this.width = width;
    this.height = height;
    this.bitsPerChannel = bitsPerChannel;
    this.colorspace = colorspace;
    this.compressionmethod = compressionmethod;
    this.filtermethod = filtermethod;
    this.interlacemethod = interlacemethod;
    var tmp$;
    switch (this.colorspace.name) {
      case 'GRAYSCALE':
        tmp$ = 1;
        break;
      case 'INDEXED':
        tmp$ = 1;
        break;
      case 'GRAYSCALE_ALPHA':
        tmp$ = 2;
        break;
      case 'RGB':
        tmp$ = 3;
        break;
      case 'RGBA':
        tmp$ = 4;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    this.components = tmp$;
    this.stride = Kotlin.imul(Kotlin.imul(this.width, this.components), this.bitsPerChannel) / 8 | 0;
  }
  PNG$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  PNG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var header = Kotlin.isType(tmp$ = this.readCommon_0(s, true), PNG$Header) ? tmp$ : throwCCE();
      var $receiver = new ImageInfo();
      $receiver.width = header.width;
      $receiver.height = header.height;
      $receiver.bitsPerPixel = header.bitsPerChannel;
      return $receiver;
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      } else
        throw t;
    }
  };
  function PNG$writeImage$writeChunk(closure$s) {
    return function (name, data) {
      var nameBytes = copyOf(toByteArray_0(name), 4);
      var crc = checksum.CRC32.initialValue;
      crc = checksum.CRC32.update_3fge6q$(crc, nameBytes);
      crc = checksum.CRC32.update_3fge6q$(crc, data);
      write32BE_0(closure$s, data.length);
      writeBytes(closure$s, nameBytes);
      writeBytes(closure$s, data);
      write32BE_0(closure$s, crc);
    };
  }
  function PNG$writeImage$compress(closure$level) {
    return function (data) {
      return compress(data, ZLib.Companion, new CompressionContext(closure$level));
    };
  }
  function PNG$writeImage$writeChunk_0(closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var buffer = ByteArrayBuilder_init(initialCapacity);
      var s = MemorySyncStream_0(buffer);
      callback(s);
      return tmp$(name, buffer.toByteArray());
    };
  }
  function PNG$writeImage$writeChunkCompressed(closure$compress, closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var tmp$_0 = closure$compress;
      var buffer = ByteArrayBuilder_init(initialCapacity);
      var s = MemorySyncStream_0(buffer);
      callback(s);
      return tmp$(name, tmp$_0(buffer.toByteArray()));
    };
  }
  function PNG$writeImage$writeHeader$lambda(closure$width, closure$height, closure$colorspace) {
    return function ($receiver) {
      write32BE_0($receiver, closure$width);
      write32BE_0($receiver, closure$height);
      write8($receiver, 8);
      write8($receiver, closure$colorspace.id);
      write8($receiver, 0);
      write8($receiver, 0);
      write8($receiver, 0);
      return Unit;
    };
  }
  function PNG$writeImage$writeHeader(closure$width, closure$height, closure$writeChunk) {
    return function (colorspace) {
      closure$writeChunk('IHDR', 13, PNG$writeImage$writeHeader$lambda(closure$width, closure$height, colorspace));
    };
  }
  function PNG$writeImage$lambda(closure$bitmap) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$bitmap.palette.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        write8($receiver, c.r);
        write8($receiver, c.g);
        write8($receiver, c.b);
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_0(closure$bitmap) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$bitmap.palette.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        write8($receiver, c.a);
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_1($receiver) {
    return Unit;
  }
  PNG.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var bitmap = image.mainBitmap;
    var width = bitmap.width;
    var height = bitmap.height;
    write32BE_0(s, -1991225785);
    write32BE_0(s, 218765834);
    var writeChunk = PNG$writeImage$writeChunk(s);
    var level = numberToInt(convertRangeClamped(props.quality, 0.0, 1.0, 0.0, 9.0));
    var compress = PNG$writeImage$compress(level);
    var writeChunk_0 = PNG$writeImage$writeChunk_0(writeChunk);
    var writeChunkCompressed = PNG$writeImage$writeChunkCompressed(compress, writeChunk);
    var writeHeader = PNG$writeImage$writeHeader(width, height, writeChunk_0);
    if (Kotlin.isType(bitmap, Bitmap8)) {
      writeHeader(PNG$Colorspace$INDEXED_getInstance());
      writeChunk_0('PLTE', bitmap.palette.size * 3 | 0, PNG$writeImage$lambda(bitmap));
      writeChunk_0('tRNS', bitmap.palette.size * 1 | 0, PNG$writeImage$lambda_0(bitmap));
      var out = new Int8Array(height + Kotlin.imul(width, height) | 0);
      var pos = 0;
      for (var y = 0; y < height; y++) {
        write8_0(out, (tmp$ = pos, pos = tmp$ + 1 | 0, tmp$), 0);
        var index = bitmap.index_vux9f0$(0, y);
        arrayCopy(bitmap.data, out, pos, index, index + width | 0);
        pos = pos + width | 0;
      }
      writeChunk('IDAT', compress(out));
    } else {
      var bmp = bitmap.toBMP32();
      writeHeader(PNG$Colorspace$RGBA_getInstance());
      var out_0 = new Int8Array(height + (Kotlin.imul(width, height) * 4 | 0) | 0);
      var pos_0 = 0;
      for (var y_0 = 0; y_0 < height; y_0++) {
        write8_0(out_0, (tmp$_0 = pos_0, pos_0 = tmp$_0 + 1 | 0, tmp$_0), 0);
        var index_0 = bmp.index_vux9f0$(0, y_0);
        for (var x = 0; x < width; x++) {
          var c = bmp.premultiplied ? asPremultiplied(bmp.data.get_za3lpa$(index_0 + x | 0)).depremultiplied : bmp.data.get_za3lpa$(index_0 + x | 0);
          write8_0(out_0, (tmp$_1 = pos_0, pos_0 = tmp$_1 + 1 | 0, tmp$_1), c.r);
          write8_0(out_0, (tmp$_2 = pos_0, pos_0 = tmp$_2 + 1 | 0, tmp$_2), c.g);
          write8_0(out_0, (tmp$_3 = pos_0, pos_0 = tmp$_3 + 1 | 0, tmp$_3), c.b);
          write8_0(out_0, (tmp$_4 = pos_0, pos_0 = tmp$_4 + 1 | 0, tmp$_4), c.a);
        }
      }
      writeChunk('IDAT', compress(out_0));
    }
    writeChunk_0('IEND', 0, PNG$writeImage$lambda_1);
  };
  function PNG$readCommon$readChunk(closure$pheader, closure$paletteCount, closure$rgbPalette, closure$aPalette, closure$pngdata) {
    return function ($receiver) {
      var length = readS32BE_0($receiver);
      var type = readStringz($receiver, 4);
      var data = readStream_0($receiver, Kotlin.Long.fromInt(length));
      var crc = readS32BE_0($receiver);
      switch (type) {
        case 'IHDR':
          var tmp$;
          closure$pheader.v = new PNG$Header(readS32BE_0(data), readS32BE_0(data), readU8(data), (tmp$ = PNG$Colorspace$Companion_getInstance().BY_ID.get_11rb$(readU8(data))) != null ? tmp$ : PNG$Colorspace$RGBA_getInstance(), readU8(data), readU8(data), readU8(data));
          break;
        case 'PLTE':
          var tmp$_0 = closure$paletteCount;
          var a = closure$paletteCount.v;
          var b = data.length.toInt() / 3 | 0;
          tmp$_0.v = Math_0.max(a, b);
          data.read_mj6st8$(asByteArray(closure$rgbPalette), 0, data.length.toInt());
          break;
        case 'tRNS':
          var tmp$_1 = closure$paletteCount;
          var a_0 = closure$paletteCount.v;
          var b_0 = data.length.toInt();
          tmp$_1.v = Math_0.max(a_0, b_0);
          data.read_mj6st8$(asByteArray(closure$aPalette), 0, data.length.toInt());
          break;
        case 'IDAT':
          closure$pngdata.append_mj6st8$(readAll(data));
          break;
        case 'IEND':
          return false;
      }
      return true;
    };
  }
  PNG.prototype.readCommon_0 = function (s, readHeader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var magic = readS32BE_0(s);
    if (magic !== -1991225785)
      throw IllegalArgumentException_init('Invalid PNG file magic: ' + get_hex(magic) + '!=' + get_hex(-1991225785));
    readS32BE_0(s);
    var pheader = {v: null};
    var pngdata = ByteArrayBuilder_init_0();
    var rgbPalette = UByteArrayInt_0(768);
    var array = new Int8Array(256);
    var tmp$_8;
    tmp$_8 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_8; i++) {
      array[i] = -1 | 0;
    }
    var aPalette = new UByteArrayInt(array);
    var paletteCount = {v: 0};
    var readChunk = PNG$readCommon$readChunk(pheader, paletteCount, rgbPalette, aPalette, pngdata);
    while (!get_eof(s) && readChunk(s)) {
      if (readHeader && pheader.v != null)
        return pheader.v;
    }
    tmp$ = pheader.v;
    if (tmp$ == null) {
      throw IllegalArgumentException_init('PNG without header!');
    }var header = tmp$;
    var width = header.width;
    var height = header.height;
    var outputSizeHint = Kotlin.imul(Kotlin.imul(1 + width | 0, height), header.components);
    var databb = uncompress(pngdata.toByteArray(), ZLib.Companion);
    var databbp = 0;
    var context = new PNG$DecodingContext(header);
    var bpp = context.header.components;
    var row32 = context.row32;
    if (header.components === 1) {
      var tmp$_9 = void 0;
      var $receiver = until(0, paletteCount.v);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_10;
      tmp$_10 = $receiver.iterator();
      while (tmp$_10.hasNext()) {
        var item = tmp$_10.next();
        destination.add_11rb$(RGBA$Companion_getInstance().invoke_tjonv8$(rgbPalette.get_za3lpa$((item * 3 | 0) + 0 | 0), rgbPalette.get_za3lpa$((item * 3 | 0) + 1 | 0), rgbPalette.get_za3lpa$((item * 3 | 0) + 2 | 0), aPalette.get_za3lpa$(item)).value);
      }
      tmp$_0 = new Bitmap8(width, height, tmp$_9, new RgbaArray(toIntArray(destination)));
    } else
      tmp$_0 = new Bitmap32(width, height);
    var bmp = tmp$_0;
    var bmp8 = (tmp$_1 = bmp) == null || Kotlin.isType(tmp$_1, Bitmap8) ? tmp$_1 : null;
    var bmp32 = (tmp$_2 = bmp) == null || Kotlin.isType(tmp$_2, Bitmap32) ? tmp$_2 : null;
    if (header.interlacemethod === 1)
      tmp$_3 = this.InterlacedPasses;
    else
      tmp$_3 = this.NormalPasses;
    var passes = tmp$_3;
    tmp$_4 = passes.iterator();
    while (tmp$_4.hasNext()) {
      var pass = tmp$_4.next();
      tmp$_5 = pass.startingRow;
      tmp$_6 = pass.rowIncrement;
      for (var row = tmp$_5; row < height; row += tmp$_6) {
        var col = pass.startingCol;
        var colIncrement = pass.colIncrement;
        var pixelsInThisRow = width >>> pass.colIncrementShift;
        var bytesInThisRow = Kotlin.imul(Kotlin.imul(pixelsInThisRow, header.components), header.bitsPerChannel) / 8 | 0;
        var filter = databb[tmp$_7 = databbp, databbp = tmp$_7 + 1 | 0, tmp$_7] & 255;
        var currentRow = context.currentRow;
        var lastRow = context.lastRow;
        var srcPos = databbp;
        arrayCopy(databb, asByteArray(currentRow), 0, srcPos, srcPos + bytesInThisRow | 0);
        databbp = databbp + bytesInThisRow | 0;
        if (bmp8 != null) {
          this.applyFilter_nxw3fw$(filter, lastRow, currentRow, header.components);
          switch (header.bitsPerChannel) {
            case 1:
              for (var n = 0; n < width; n++) {
                bmp.setInt_qt1dr2$(col + n | 0, row, extract(currentRow.get_za3lpa$(n / 8 | 0), 7 - (n % 8 * 1 | 0) | 0, 1));
              }

              break;
            case 2:
              for (var n_0 = 0; n_0 < width; n_0++) {
                bmp.setInt_qt1dr2$(col + n_0 | 0, row, extract(currentRow.get_za3lpa$(n_0 / 4 | 0), 6 - (n_0 % 4 * 2 | 0) | 0, 2));
              }

              break;
            case 4:
              for (var n_1 = 0; n_1 < width; n_1++) {
                bmp.setInt_qt1dr2$(col + n_1 | 0, row, extract(currentRow.get_za3lpa$(n_1 / 2 | 0), 4 - (n_1 % 2 * 4 | 0) | 0, 4));
              }

              break;
            case 8:
              bmp8.setRowChunk_y8lvms$(col, row, asByteArray(currentRow), width, colIncrement);
              break;
            default:throw IllegalStateException_init(('Unsupported header.bitsPerChannel=' + header.bitsPerChannel).toString());
          }
        } else if (bmp32 != null) {
          if (header.bitsPerChannel === 8) {
            this.applyFilter_nxw3fw$(filter, lastRow, currentRow, bpp, bytesInThisRow);
            switch (bpp) {
              case 3:
                decode(RGB$Companion_getInstance(), asByteArray(currentRow), 0, row32, 0, pixelsInThisRow);
                break;
              case 4:
                decode(RGBA$Companion_getInstance(), asByteArray(currentRow), 0, row32, 0, pixelsInThisRow);
                break;
              default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Bytes: ' + bpp));
            }
            bmp32.setRowChunk_mv2y54$(col, row, row32, width, colIncrement);
          } else {
            throw IllegalStateException_init(('Unsupported header.bitsPerChannel=' + header.bitsPerChannel).toString());
          }
        }context.swapRows();
      }
    }
    return bmp;
  };
  function PNG$DecodingContext(header) {
    this.header = header;
    this.lastRow = UByteArrayInt_0(this.header.stride);
    this.currentRow = UByteArrayInt_0(this.header.stride);
    this.row32 = RgbaArray$Companion_getInstance().invoke_za3lpa$(this.header.width);
  }
  PNG$DecodingContext.prototype.swapRows = function () {
    var temp = this.currentRow;
    this.currentRow = this.lastRow;
    this.lastRow = temp;
  };
  PNG$DecodingContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodingContext',
    interfaces: []
  };
  PNG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    return new ImageData(listOf_0(new ImageFrame(Kotlin.isType(tmp$ = this.readCommon_0(s, false), Bitmap) ? tmp$ : throwCCE())));
  };
  PNG.prototype.paethPredictor_qt1dr2$ = function (a, b, c) {
    var p = a + b - c | 0;
    var pa = abs(p - a | 0);
    var pb = abs(p - b | 0);
    var pc = abs(p - c | 0);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  PNG.prototype.applyFilter_nxw3fw$ = function (filter, p, c, bpp, size) {
    if (size === void 0)
      size = c.size;
    switch (filter) {
      case 0:
        break;
      case 1:
        for (var n = bpp; n < size; n++)
          c.set_vux9f0$(n, c.get_za3lpa$(n) + c.get_za3lpa$(n - bpp | 0) | 0);
        break;
      case 2:
        for (var n_0 = 0; n_0 < size; n_0++)
          c.set_vux9f0$(n_0, c.get_za3lpa$(n_0) + p.get_za3lpa$(n_0) | 0);
        break;
      case 3:
        for (var n_1 = 0; n_1 < bpp; n_1++)
          c.set_vux9f0$(n_1, c.get_za3lpa$(n_1) + (p.get_za3lpa$(n_1) / 2 | 0) | 0);
        for (var n_2 = bpp; n_2 < size; n_2++)
          c.set_vux9f0$(n_2, c.get_za3lpa$(n_2) + ((c.get_za3lpa$(n_2 - bpp | 0) + p.get_za3lpa$(n_2) | 0) / 2 | 0) | 0);
        break;
      case 4:
        for (var n_3 = 0; n_3 < bpp; n_3++)
          c.set_vux9f0$(n_3, c.get_za3lpa$(n_3) + p.get_za3lpa$(n_3) | 0);
        for (var n_4 = bpp; n_4 < size; n_4++)
          c.set_vux9f0$(n_4, c.get_za3lpa$(n_4) + this.paethPredictor_qt1dr2$(c.get_za3lpa$(n_4 - bpp | 0), p.get_za3lpa$(n_4), p.get_za3lpa$(n_4 - bpp | 0)) | 0);
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Filter: ' + filter));
    }
  };
  PNG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PNG',
    interfaces: [ImageFormat]
  };
  var PNG_instance = null;
  function PNG_getInstance() {
    if (PNG_instance === null) {
      new PNG();
    }return PNG_instance;
  }
  function PSD() {
    PSD_instance = this;
    ImageFormat.call(this, ['psd']);
  }
  PSD.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var header = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a PSD file');
    var colorMode = readStream(s, readS32BE_0(s));
    var imageResources = readStream(s, readS32BE_0(s));
    var layerAndMask = readStream(s, readS32BE_0(s));
    var imageData = this.readImageData_0(openFastStream(readAvailable(s)), header);
    return new ImageData(listOf_0(new ImageFrame(imageData)));
  };
  PSD.prototype.packChannels_0 = function (width, height, channels) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pos = 0;
    var out = new Bitmap32(width, height);
    var array = new Int8Array(Kotlin.imul(width, height));
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
      array[i] = -1 | 0;
    }
    var dummyChannel = array;
    var rchannel = (tmp$ = getOrNull_0(channels, 0)) != null ? tmp$ : dummyChannel;
    var gchannel = (tmp$_0 = getOrNull_0(channels, 1)) != null ? tmp$_0 : dummyChannel;
    var bchannel = (tmp$_1 = getOrNull_0(channels, 2)) != null ? tmp$_1 : dummyChannel;
    var achannel = (tmp$_2 = getOrNull_0(channels, 3)) != null ? tmp$_2 : dummyChannel;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var r = rchannel[pos] & 255;
        var g = gchannel[pos] & 255;
        var b = bchannel[pos] & 255;
        var a = achannel[pos] & 255;
        out.data.set_vlvk8p$(pos, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a));
        pos = pos + 1 | 0;
      }
    }
    return out;
  };
  PSD.prototype.readImageData_0 = function ($receiver, header) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var compressionMethod = $receiver.readU16BE();
    var width = header.width;
    var height = header.height;
    var cchannels = header.channels;
    var array = Array_0(cchannels);
    var tmp$_4;
    tmp$_4 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_4; i++) {
      array[i] = new Int8Array(Kotlin.imul(width, height));
    }
    var channels = array;
    switch (compressionMethod) {
      case 0:
        for (var n = 0; n < cchannels; n++) {
          channels[n] = $receiver.readBytes_za3lpa$(Kotlin.imul(width, height));
        }

        break;
      case 1:
        var $receiver_0 = until(0, cchannels);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_5;
        tmp$_5 = $receiver_0.iterator();
        while (tmp$_5.hasNext()) {
          var item = tmp$_5.next();
          destination.add_11rb$($receiver.readShortArrayBE_za3lpa$(height));
        }

        var sizes = destination;
        for (var cindex = 0; cindex < cchannels; cindex++) {
          var carray = channels[cindex];
          var cpos = 0;
          tmp$ = sizes.get_za3lpa$(cindex);
          for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
            var size = tmp$[tmp$_0];
            var end = $receiver.offset + size;
            while ($receiver.offset < end) {
              var len = $receiver.readU8();
              if (len >= 128) {
                var byte = $receiver.readU8();
                tmp$_1 = 256 - len | 0;
                for (var j = 0; j <= tmp$_1; j++) {
                  carray[tmp$_2 = cpos, cpos = tmp$_2 + 1 | 0, tmp$_2] = toByte(byte);
                }
              } else {
                for (var j_0 = 0; j_0 <= len; j_0++) {
                  carray[tmp$_3 = cpos, cpos = tmp$_3 + 1 | 0, tmp$_3] = toByte($receiver.readU8());
                }
              }
            }
          }
        }

        break;
      default:invalidOp('Unsupported compression method ' + compressionMethod);
        break;
    }
    return this.packChannels_0(width, height, channels);
  };
  function PSD$PsdImageInfo() {
    ImageInfo.call(this);
    this.channels = 0;
    this.bitsPerChannel = 0;
    this.colorMode = 0;
  }
  PSD$PsdImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PsdImageInfo',
    interfaces: [ImageInfo]
  };
  PSD.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 4), '8BPS'))
      return null;
    var version = readU16BE_0(s);
    switch (version) {
      case 1:
        break;
      case 2:
        return null;
      default:return null;
    }
    var reserved = readBytes(s, 6);
    var channels = readU16BE_0(s);
    var height = readS32BE_0(s);
    var width = readS32BE_0(s);
    var bitsPerChannel = readU16BE_0(s);
    var colorMode = readU16BE_0(s);
    var $receiver = new PSD$PsdImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = Kotlin.imul(bitsPerChannel, channels);
    $receiver.channels = channels;
    $receiver.bitsPerChannel = bitsPerChannel;
    $receiver.colorMode = colorMode;
    return $receiver;
  };
  PSD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSD',
    interfaces: [ImageFormat]
  };
  var PSD_instance = null;
  function PSD_getInstance() {
    if (PSD_instance === null) {
      new PSD();
    }return PSD_instance;
  }
  var RegisteredImageFormats_formats;
  function RegisteredImageFormats() {
    RegisteredImageFormats_instance = this;
    ImageFormat.call(this, []);
  }
  Object.defineProperty(RegisteredImageFormats.prototype, 'formats', {
    get: function () {
      return RegisteredImageFormats_formats;
    },
    set: function (value) {
      RegisteredImageFormats_formats = value;
    }
  });
  RegisteredImageFormats.prototype.register_56bozu$ = function (formats) {
    this.formats = new ImageFormats(plus_0(this.formats.formats, formats));
  };
  RegisteredImageFormats.prototype.unregister_56bozu$ = function (formats) {
    this.formats = new ImageFormats(minus(this.formats.formats, formats));
  };
  RegisteredImageFormats.prototype.temporalRegister_t3vfgu$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.format.RegisteredImageFormats.temporalRegister_t3vfgu$', function (formats, callback) {
    var oldFormats = this.formats;
    try {
      this.register_56bozu$(formats.slice());
      return callback();
    }finally {
      this.formats = oldFormats;
    }
  });
  RegisteredImageFormats.prototype.readImage_1ooaqm$$default = function (s, props) {
    return this.formats.readImage_1ooaqm$(s, props);
  };
  RegisteredImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    this.formats.writeImage_2psbf2$(image, s, props);
  };
  RegisteredImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    return this.formats.decodeHeader_1ooaqm$(s, props);
  };
  RegisteredImageFormats.prototype.toString = function () {
    return 'RegisteredImageFormats(' + this.formats + ')';
  };
  RegisteredImageFormats.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RegisteredImageFormats',
    interfaces: [ImageFormat]
  };
  var RegisteredImageFormats_instance = null;
  function RegisteredImageFormats_getInstance() {
    if (RegisteredImageFormats_instance === null) {
      new RegisteredImageFormats();
    }return RegisteredImageFormats_instance;
  }
  function SVG() {
    SVG_instance = this;
    ImageFormat.call(this, ['svg']);
  }
  SVG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var block$result;
      var tmp$_0 = sliceStart(s);
      var b = s.length.toInt();
      var $receiver = readString(tmp$_0, Math_0.min(100, b));
      var tmp$_1;
      var start = trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString().toLowerCase();
      if (startsWith(start, '<svg') || startsWith(start, '<?xml')) {
        var $receiver_0 = toString(readAll(sliceStart(s)), lang.UTF8);
        var tmp$_2;
        var content = trim(Kotlin.isCharSequence(tmp$_2 = $receiver_0) ? tmp$_2 : throwCCE()).toString();
        var svg = SVG_init(content);
        var $receiver_1 = new ImageInfo();
        $receiver_1.width = svg.width;
        $receiver_1.height = svg.height;
        block$result = $receiver_1;
      } else {
        block$result = null;
      }
      tmp$ = new Result(block$result);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    var $this = tmp$;
    var getOrNull$result;
    var tmp$_3;
    if ($this.isFailure) {
      getOrNull$result = null;
    } else {
      getOrNull$result = (tmp$_3 = $this.value) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
    }
    return getOrNull$result;
  };
  SVG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = toString(readAll(sliceStart(s)), lang.UTF8);
    var tmp$;
    var content = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var svg = SVG_init(content);
    return new ImageData(listOf_0(new ImageFrame(render(svg).toBMP32())));
  };
  SVG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SVG',
    interfaces: [ImageFormat]
  };
  var SVG_instance = null;
  function SVG_getInstance() {
    if (SVG_instance === null) {
      new SVG();
    }return SVG_instance;
  }
  function TGA() {
    TGA_instance = this;
    ImageFormat.call(this, ['tga']);
  }
  TGA.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var $receiver = new ImageInfo();
      var h = this.readHeader_39qel5$(s);
      $receiver.width = h.width;
      $receiver.height = h.height;
      $receiver.bitsPerPixel = h.bitsPerPixel;
      tmp$ = new Result($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    var $this = tmp$;
    var getOrNull$result;
    var tmp$_0;
    if ($this.isFailure) {
      getOrNull$result = null;
    } else {
      getOrNull$result = (tmp$_0 = $this.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    }
    return getOrNull$result;
  };
  function TGA$Info(width, height, flipY, bitsPerPixel) {
    this.width = width;
    this.height = height;
    this.flipY = flipY;
    this.bitsPerPixel = bitsPerPixel;
    this.area = Kotlin.imul(this.width, this.height);
    this.bytes = this.bitsPerPixel / 8 | 0;
  }
  TGA$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  TGA.prototype.readHeader_39qel5$ = function (s) {
    var idLength = readU8(s);
    var colorMapType = readU8(s);
    switch (colorMapType) {
      case 0:
      case 1:
        break;
      default:throw IllegalStateException_init('Not a TGA. Unsupported colorMapType'.toString());
    }
    var imageType = readU8(s);
    switch (imageType) {
      case 1:
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported indexed');
      case 2:
        break;
      case 9:
      case 10:
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported RLE');
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Unknown TGA');
    }
    var firstIndexEntry = readU16LE_0(s);
    var colorMapLength = readU16LE_0(s);
    var colorMapEntrySize = readU8(s);
    s.position = s.position.add(Kotlin.Long.fromInt(Kotlin.imul(colorMapLength, colorMapEntrySize)));
    var xorig = readS16LE(s);
    var yorig = readS16LE(s);
    var width = readS16LE(s);
    var height = readS16LE(s);
    var pixelDepth = readU8(s);
    switch (pixelDepth) {
      case 24:
      case 32:
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    if (width < 0 || height < 0) {
      throw IllegalStateException_init('Not a TGA. Invalid width/height'.toString());
    }var imageDescriptor = readU8(s);
    var flipY = (imageDescriptor >>> 5 & 1) === 0;
    var storage = imageDescriptor >>> 6 & 3;
    readBytes(s, idLength);
    return new TGA$Info(width, height, flipY, pixelDepth);
  };
  TGA.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var info = this.readHeader_39qel5$(s);
    switch (info.bitsPerPixel) {
      case 24:
        tmp$ = RGB$Companion_getInstance();
        break;
      case 32:
        tmp$ = RGBA$Companion_getInstance();
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var format = tmp$;
    var out = (new Bitmap32(info.width, info.height)).writeDecoded_77vltg$(format, readBytes(s, Kotlin.imul(info.area, info.bytes)));
    if (info.flipY)
      out.flipY();
    return new ImageData(listOf_0(new ImageFrame(out)));
  };
  TGA.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var bitmap = image.mainBitmap;
    if (Kotlin.isType(bitmap, Bitmap8)) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented encoding TGA Bitmap8');
    } else {
      var bmp = bitmap.toBMP32();
      var data = new Int8Array(bmp.area * 4 | 0);
      var m = 0;
      tmp$ = bmp.data.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        data[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = toByte(c.b);
        data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(c.g);
        data[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(c.r);
        data[tmp$_3 = m, m = tmp$_3 + 1 | 0, tmp$_3] = toByte(c.a);
      }
      write8(s, 0);
      write8(s, 0);
      write8(s, 2);
      write16LE_0(s, 0);
      write16LE_0(s, 0);
      write8(s, 0);
      write16LE_0(s, 0);
      write16LE_0(s, 0);
      write16LE_0(s, bmp.width);
      write16LE_0(s, bmp.height);
      write8(s, 32);
      write8(s, 32);
      writeBytes(s, data);
    }
  };
  TGA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TGA',
    interfaces: [ImageFormat]
  };
  var TGA_instance = null;
  function TGA_getInstance() {
    if (TGA_instance === null) {
      new TGA();
    }return TGA_instance;
  }
  function clamp0_255($receiver) {
    var n = $receiver & (-($receiver >= 0 ? 1 : 0) | 0);
    return (n | 255 - n >> 31) & 255;
  }
  function sumPacked4MulR(a, b, mul) {
    var dstRB = Kotlin.imul(b & 16711935, mul) >>> 8;
    var dstGA = Kotlin.imul(b >>> 8 & 16711935, mul) >>> 8;
    var r = (a >>> 0 & 255) + (dstRB >>> 0 & 255) | 0;
    var g = (a >>> 8 & 255) + (dstGA >>> 0 & 255) | 0;
    var b_0 = (a >>> 16 & 255) + (dstRB >>> 16 & 255) | 0;
    var a_0 = (a >>> 24 & 255) + (dstGA >>> 16 & 255) | 0;
    return packIntClamped(r, g, b_0, a_0);
  }
  var KORIM_VERSION;
  function packIntUnchecked(r, g, b, a) {
    return (r & 255) << 0 | (g & 255) << 8 | (b & 255) << 16 | (a & 255) << 24;
  }
  function packIntClamped(r, g, b, a) {
    return packIntUnchecked(clamp0_255(r), clamp0_255(g), clamp0_255(b), clamp0_255(a));
  }
  function d2i(v) {
    return numberToInt(clamp01_0(v) * 255);
  }
  function f2i(v) {
    return numberToInt(clamp01_0(v) * 255);
  }
  function floorCeil(v) {
    return v < 0.0 ? Math_0.ceil(v) : Math_0.floor(v);
  }
  function QR(colorDark, colorLight, correctLevel) {
    QR$Companion_getInstance();
    if (colorDark === void 0)
      colorDark = Colors_getInstance().BLACK;
    if (colorLight === void 0)
      colorLight = Colors_getInstance().WHITE;
    if (correctLevel === void 0)
      correctLevel = QRErrorCorrectLevel$H_getInstance();
    this.colorDark = colorDark;
    this.colorLight = colorLight;
    this.correctLevel = correctLevel;
  }
  QR.prototype.msg_fqrh44$ = function (msg) {
    var $receiver = new QRCodeModel(QR$Companion_getInstance().getTypeNumber_0(msg, this.correctLevel), this.correctLevel);
    $receiver.addData_fqrh44$(msg);
    $receiver.make();
    return toBitmap($receiver, this.colorDark, this.colorLight);
  };
  QR.prototype.msg_61zpoe$ = function (msg) {
    var $receiver = new QRCodeModel(QR$Companion_getInstance().getTypeNumber_1(msg, this.correctLevel), this.correctLevel);
    $receiver.addData_61zpoe$(msg);
    $receiver.make();
    return toBitmap($receiver, this.colorDark, this.colorLight);
  };
  QR.prototype.vCard_blz5pm$ = function (name, phone, email, url, addr, org, note) {
    return this.msg_61zpoe$('BEGIN:VCARD' + '\n' + 'N:' + name + '\n' + 'TEL:' + phone + '\n' + 'EMAIL:' + email + '\n' + 'URL:' + url + '\n' + 'ADR:' + addr + '\n' + 'ORG:' + org + '\n' + 'NOTE:' + note + '\n' + 'VERSION:3.0' + '\n' + 'END:VCARD');
  };
  QR.prototype.meCard_x0a6t6$ = function (name, phone, email, url, addr) {
    return this.msg_61zpoe$('MECARD:N:' + name + ';ADR:' + addr + ';TEL:' + phone + ';EMAIL:' + email + ';URL:' + url + ';;');
  };
  function QR$WifiKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function QR$WifiKind_initFields() {
    QR$WifiKind_initFields = function () {
    };
    QR$WifiKind$WEP_instance = new QR$WifiKind('WEP', 0);
    QR$WifiKind$WAP_instance = new QR$WifiKind('WAP', 1);
    QR$WifiKind$nopass_instance = new QR$WifiKind('nopass', 2);
  }
  var QR$WifiKind$WEP_instance;
  function QR$WifiKind$WEP_getInstance() {
    QR$WifiKind_initFields();
    return QR$WifiKind$WEP_instance;
  }
  var QR$WifiKind$WAP_instance;
  function QR$WifiKind$WAP_getInstance() {
    QR$WifiKind_initFields();
    return QR$WifiKind$WAP_instance;
  }
  var QR$WifiKind$nopass_instance;
  function QR$WifiKind$nopass_getInstance() {
    QR$WifiKind_initFields();
    return QR$WifiKind$nopass_instance;
  }
  QR$WifiKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WifiKind',
    interfaces: [Enum]
  };
  function QR$WifiKind$values() {
    return [QR$WifiKind$WEP_getInstance(), QR$WifiKind$WAP_getInstance(), QR$WifiKind$nopass_getInstance()];
  }
  QR$WifiKind.values = QR$WifiKind$values;
  function QR$WifiKind$valueOf(name) {
    switch (name) {
      case 'WEP':
        return QR$WifiKind$WEP_getInstance();
      case 'WAP':
        return QR$WifiKind$WAP_getInstance();
      case 'nopass':
        return QR$WifiKind$nopass_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.qr.QR.WifiKind.' + name);
    }
  }
  QR$WifiKind.valueOf_61zpoe$ = QR$WifiKind$valueOf;
  QR.prototype.wifi_an007z$ = function (ssid, password, kind) {
    if (kind === void 0)
      kind = QR$WifiKind$WEP_getInstance();
    return this.msg_61zpoe$('WIFI:S:' + ssid + ';T:' + kind + ';P:' + password + ';;');
  };
  QR.prototype.itunesAppUrl_61zpoe$ = function (appId) {
    return this.msg_61zpoe$('itms://itunes.apple.com/app/' + appId);
  };
  QR.prototype.itunesAppReviewUrl_61zpoe$ = function (appId) {
    return this.msg_61zpoe$('itms-apps://ax.itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?type=Purple+Software&id=' + appId);
  };
  QR.prototype.androidMarketAppUrl_61zpoe$ = function (packageName) {
    return this.msg_61zpoe$('market://details?id=' + packageName);
  };
  QR.prototype.androidMarketSearchUrl_61zpoe$ = function (search) {
    return this.msg_61zpoe$('market://search?q=' + search);
  };
  QR.prototype.foursquareVenueURL_61zpoe$ = function (venueId) {
    return this.msg_61zpoe$('https://foursquare.com/venue/' + venueId);
  };
  QR.prototype.youtubeForIOS_61zpoe$ = function (videoId) {
    return this.msg_61zpoe$('youtube://' + videoId);
  };
  QR.prototype.twitterTweet_61zpoe$ = function (tweet) {
    return this.msg_61zpoe$('http://twitter.com/home?status=' + tweet);
  };
  QR.prototype.phone_61zpoe$ = function (phone) {
    return this.msg_61zpoe$('tel:' + phone);
  };
  QR.prototype.email_61zpoe$ = function (email) {
    return this.msg_61zpoe$('email:' + email);
  };
  QR.prototype.sms_puj7f4$ = function (number, message) {
    return this.msg_61zpoe$('smsto:' + number + ':' + message);
  };
  QR.prototype.geo_puj7f4$ = function (latitude, longitude) {
    return this.msg_61zpoe$('geo:' + latitude + ',' + longitude);
  };
  QR.prototype.geo_lu1900$ = function (latitude, longitude) {
    return this.msg_61zpoe$('geo:' + latitude + ',' + longitude);
  };
  QR.prototype.calendarEvent_xzwdno$ = function (summary, start, end, location, description) {
    return this.msg_61zpoe$('BEGIN:VEVENT' + '\n' + 'SUMMARY:' + summary + '\n' + 'DTSTART:' + format_0(QR$Companion_getInstance().dateFormat_0, start) + '\n' + 'DTEND:' + format_0(QR$Companion_getInstance().dateFormat_0, end) + '\n' + 'LOCATION:' + location + '\n' + 'DESCRIPTION:' + description + '\n' + 'END:VEVENT');
  };
  function QR$Companion() {
    QR$Companion_instance = this;
    QR.call(this);
    this.dateFormat_0 = DateFormat.Companion.invoke_61zpoe$('YYYYMMdd');
    this.QRCodeLimitLength_0 = listOf([new Int32Array([17, 14, 11, 7]), new Int32Array([32, 26, 20, 14]), new Int32Array([53, 42, 32, 24]), new Int32Array([78, 62, 46, 34]), new Int32Array([106, 84, 60, 44]), new Int32Array([134, 106, 74, 58]), new Int32Array([154, 122, 86, 64]), new Int32Array([192, 152, 108, 84]), new Int32Array([230, 180, 130, 98]), new Int32Array([271, 213, 151, 119]), new Int32Array([321, 251, 177, 137]), new Int32Array([367, 287, 203, 155]), new Int32Array([425, 331, 241, 177]), new Int32Array([458, 362, 258, 194]), new Int32Array([520, 412, 292, 220]), new Int32Array([586, 450, 322, 250]), new Int32Array([644, 504, 364, 280]), new Int32Array([718, 560, 394, 310]), new Int32Array([792, 624, 442, 338]), new Int32Array([858, 666, 482, 382]), new Int32Array([929, 711, 509, 403]), new Int32Array([1003, 779, 565, 439]), new Int32Array([1091, 857, 611, 461]), new Int32Array([1171, 911, 661, 511]), new Int32Array([1273, 997, 715, 535]), new Int32Array([1367, 1059, 751, 593]), new Int32Array([1465, 1125, 805, 625]), new Int32Array([1528, 1190, 868, 658]), new Int32Array([1628, 1264, 908, 698]), new Int32Array([1732, 1370, 982, 742]), new Int32Array([1840, 1452, 1030, 790]), new Int32Array([1952, 1538, 1112, 842]), new Int32Array([2068, 1628, 1168, 898]), new Int32Array([2188, 1722, 1228, 958]), new Int32Array([2303, 1809, 1283, 983]), new Int32Array([2431, 1911, 1351, 1051]), new Int32Array([2563, 1989, 1423, 1093]), new Int32Array([2699, 2099, 1499, 1139]), new Int32Array([2809, 2213, 1579, 1219]), new Int32Array([2953, 2331, 1663, 1273])]);
  }
  QR$Companion.prototype.getTypeNumber_1 = function (sText, nCorrectLevel) {
    return this.getTypeNumber_2(toByteArray_0(sText, lang.UTF8).length, nCorrectLevel);
  };
  QR$Companion.prototype.getTypeNumber_0 = function (msg, nCorrectLevel) {
    return this.getTypeNumber_2(msg.length, nCorrectLevel);
  };
  QR$Companion.prototype.getTypeNumber_2 = function (length, nCorrectLevel) {
    var tmp$, tmp$_0;
    var nType = 1;
    tmp$ = this.QRCodeLimitLength_0.size;
    for (var i = 0; i < tmp$; i++) {
      switch (nCorrectLevel.name) {
        case 'L':
          tmp$_0 = this.QRCodeLimitLength_0.get_za3lpa$(i)[0];
          break;
        case 'M':
          tmp$_0 = this.QRCodeLimitLength_0.get_za3lpa$(i)[1];
          break;
        case 'Q':
          tmp$_0 = this.QRCodeLimitLength_0.get_za3lpa$(i)[2];
          break;
        case 'H':
          tmp$_0 = this.QRCodeLimitLength_0.get_za3lpa$(i)[3];
          break;
        default:tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
      var nLimit = tmp$_0;
      if (length <= nLimit)
        break;
      nType = nType + 1 | 0;
    }
    if (nType > this.QRCodeLimitLength_0.size) {
      throw IllegalStateException_init('Too long data'.toString());
    }return nType;
  };
  QR$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [QR]
  };
  var QR$Companion_instance = null;
  function QR$Companion_getInstance() {
    if (QR$Companion_instance === null) {
      new QR$Companion();
    }return QR$Companion_instance;
  }
  QR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QR',
    interfaces: []
  };
  function QRErrorCorrectLevel(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function QRErrorCorrectLevel_initFields() {
    QRErrorCorrectLevel_initFields = function () {
    };
    QRErrorCorrectLevel$L_instance = new QRErrorCorrectLevel('L', 0, 1);
    QRErrorCorrectLevel$M_instance = new QRErrorCorrectLevel('M', 1, 0);
    QRErrorCorrectLevel$Q_instance = new QRErrorCorrectLevel('Q', 2, 3);
    QRErrorCorrectLevel$H_instance = new QRErrorCorrectLevel('H', 3, 2);
  }
  var QRErrorCorrectLevel$L_instance;
  function QRErrorCorrectLevel$L_getInstance() {
    QRErrorCorrectLevel_initFields();
    return QRErrorCorrectLevel$L_instance;
  }
  var QRErrorCorrectLevel$M_instance;
  function QRErrorCorrectLevel$M_getInstance() {
    QRErrorCorrectLevel_initFields();
    return QRErrorCorrectLevel$M_instance;
  }
  var QRErrorCorrectLevel$Q_instance;
  function QRErrorCorrectLevel$Q_getInstance() {
    QRErrorCorrectLevel_initFields();
    return QRErrorCorrectLevel$Q_instance;
  }
  var QRErrorCorrectLevel$H_instance;
  function QRErrorCorrectLevel$H_getInstance() {
    QRErrorCorrectLevel_initFields();
    return QRErrorCorrectLevel$H_instance;
  }
  QRErrorCorrectLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QRErrorCorrectLevel',
    interfaces: [Enum]
  };
  function QRErrorCorrectLevel$values() {
    return [QRErrorCorrectLevel$L_getInstance(), QRErrorCorrectLevel$M_getInstance(), QRErrorCorrectLevel$Q_getInstance(), QRErrorCorrectLevel$H_getInstance()];
  }
  QRErrorCorrectLevel.values = QRErrorCorrectLevel$values;
  function QRErrorCorrectLevel$valueOf(name) {
    switch (name) {
      case 'L':
        return QRErrorCorrectLevel$L_getInstance();
      case 'M':
        return QRErrorCorrectLevel$M_getInstance();
      case 'Q':
        return QRErrorCorrectLevel$Q_getInstance();
      case 'H':
        return QRErrorCorrectLevel$H_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.qr.QRErrorCorrectLevel.' + name);
    }
  }
  QRErrorCorrectLevel.valueOf_61zpoe$ = QRErrorCorrectLevel$valueOf;
  function toBitmap$lambda(this$toBitmap, closure$dark, closure$light) {
    return function (col, row) {
      return this$toBitmap.isDark_vux9f0$(row, col) ? closure$dark : closure$light;
    };
  }
  function toBitmap($receiver, dark, light) {
    return Bitmap32_init_0($receiver.moduleCount, $receiver.moduleCount, false, toBitmap$lambda($receiver, dark, light));
  }
  function QR8bitByte(parsedDataS) {
    QR8bitByte$Companion_getInstance();
    this.mode = 4;
    this.parsedData = new UByteArrayInt(parsedDataS);
  }
  function QR8bitByte$Companion() {
    QR8bitByte$Companion_instance = this;
  }
  QR8bitByte$Companion.prototype.invoke_61zpoe$ = function (data) {
    var datab = toByteArray_0(data, lang.UTF8);
    return new QR8bitByte(datab.length !== data.length ? primitiveArrayConcat(datab, new Int8Array([toByte(191), toByte(187), toByte(239)])) : datab);
  };
  QR8bitByte$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var QR8bitByte$Companion_instance = null;
  function QR8bitByte$Companion_getInstance() {
    if (QR8bitByte$Companion_instance === null) {
      new QR8bitByte$Companion();
    }return QR8bitByte$Companion_instance;
  }
  QR8bitByte.prototype.getLength = function () {
    return this.parsedData.size;
  };
  QR8bitByte.prototype.write_4ke367$ = function (buffer) {
    var tmp$;
    tmp$ = this.parsedData.size;
    for (var i = 0; i < tmp$; i++)
      buffer.put_vux9f0$(this.parsedData.get_za3lpa$(i), 8);
  };
  QR8bitByte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QR8bitByte',
    interfaces: []
  };
  function QRCodeModel(typeNumber, errorCorrectLevel) {
    QRCodeModel$Companion_getInstance();
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules_fwzav5$_0 = this.modules_fwzav5$_0;
    this.moduleCount_4urr2d$_0 = 0;
    this.dataCache = null;
    this.dataList = ArrayList_init_0();
  }
  Object.defineProperty(QRCodeModel.prototype, 'modules', {
    get: function () {
      if (this.modules_fwzav5$_0 == null)
        return throwUPAE('modules');
      return this.modules_fwzav5$_0;
    },
    set: function (modules) {
      this.modules_fwzav5$_0 = modules;
    }
  });
  Object.defineProperty(QRCodeModel.prototype, 'moduleCount', {
    get: function () {
      return this.moduleCount_4urr2d$_0;
    },
    set: function (moduleCount) {
      this.moduleCount_4urr2d$_0 = moduleCount;
    }
  });
  QRCodeModel.prototype.addData_61zpoe$ = function (data) {
    this.dataList.add_11rb$(QR8bitByte$Companion_getInstance().invoke_61zpoe$(data));
    this.dataCache = null;
  };
  QRCodeModel.prototype.addData_fqrh44$ = function (data) {
    this.dataList.add_11rb$(new QR8bitByte(data));
    this.dataCache = null;
  };
  QRCodeModel.prototype.isDark_vux9f0$ = function (row, col) {
    var tmp$;
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw IllegalStateException_init((row.toString() + ',' + col).toString());
    }return (tmp$ = this.modules[row][col]) != null ? tmp$ : false;
  };
  QRCodeModel.prototype.make = function () {
    this.makeImpl_eltk6l$(false, this.getBestMaskPattern());
  };
  QRCodeModel.prototype.makeImpl_eltk6l$ = function (test, maskPattern) {
    var tmp$, tmp$_0;
    this.moduleCount = (this.typeNumber * 4 | 0) + 17 | 0;
    if (this.moduleCount <= 0) {
      throw IllegalStateException_init('Invalid moduleCount'.toString());
    }var array = Array_0(this.moduleCount);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = [];
    }
    this.modules = array;
    tmp$ = this.moduleCount;
    for (var row = 0; row < tmp$; row++) {
      var tmp$_2 = this.modules;
      var array_0 = Array_0(this.moduleCount);
      var tmp$_3;
      tmp$_3 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
        array_0[i_0] = null;
      }
      tmp$_2[row] = array_0;
      tmp$_0 = this.moduleCount;
      for (var col = 0; col < tmp$_0; col++) {
        this.modules[row][col] = null;
      }
    }
    this.setupPositionProbePattern_vux9f0$(0, 0);
    this.setupPositionProbePattern_vux9f0$(this.moduleCount - 7 | 0, 0);
    this.setupPositionProbePattern_vux9f0$(0, this.moduleCount - 7 | 0);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo_eltk6l$(test, maskPattern);
    if (this.typeNumber >= 7)
      this.setupTypeNumber_6taknv$(test);
    if (this.dataCache == null) {
      this.dataCache = QRCodeModel$Companion_getInstance().createData_kq15z6$(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }this.mapData_u4kcgn$(ensureNotNull(this.dataCache), maskPattern);
  };
  QRCodeModel.prototype.setupPositionProbePattern_vux9f0$ = function (row, col) {
    for (var r = -1; r <= 7; r++) {
      if ((row + r | 0) <= -1 || this.moduleCount <= (row + r | 0))
        continue;
      for (var c = -1; c <= 7; c++) {
        if ((col + c | 0) <= -1 || this.moduleCount <= (col + c | 0))
          continue;
        this.modules[row + r | 0][col + c | 0] = 0 <= r && r <= 6 && (c === 0 || c === 6) || (0 <= c && c <= 6 && (r === 0 || r === 6)) || (2 <= r && r <= 4 && 2 <= c && c <= 4);
      }
    }
  };
  QRCodeModel.prototype.getBestMaskPattern = function () {
    var minLostPoint = 0;
    var pattern = 0;
    for (var i = 0; i < 8; i++) {
      this.makeImpl_eltk6l$(true, i);
      var lostPoint = QRUtil_getInstance().getLostPoint_9d91q8$(this);
      if (i === 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }}
    return pattern;
  };
  QRCodeModel.prototype.setupTimingPattern = function () {
    var tmp$, tmp$_0;
    tmp$ = this.moduleCount - 8 | 0;
    for (var r = 8; r < tmp$; r++) {
      if (this.modules[r][6] == null) {
        this.modules[r][6] = r % 2 === 0;
      }}
    tmp$_0 = this.moduleCount - 8 | 0;
    for (var c = 8; c < tmp$_0; c++) {
      if (this.modules[6][c] == null) {
        this.modules[6][c] = c % 2 === 0;
      }}
  };
  QRCodeModel.prototype.setupPositionAdjustPattern = function () {
    var pos = QRUtil_getInstance().getPatternPosition_za3lpa$(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] == null) {
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              this.modules[row + r | 0][col + c | 0] = r === -2 || r === 2 || c === -2 || c === 2 || (r === 0 && c === 0);
            }
          }
        }}
    }
  };
  QRCodeModel.prototype.setupTypeNumber_6taknv$ = function (test) {
    var bits = QRUtil_getInstance().getBCHTypeNumber_za3lpa$(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) === 1;
      this.modules[i / 3 | 0][i % 3 + this.moduleCount - 8 - 3 | 0] = mod;
    }
    for (var i_0 = 0; i_0 < 18; i_0++) {
      var mod_0 = !test && (bits >> i_0 & 1) === 1;
      this.modules[i_0 % 3 + this.moduleCount - 8 - 3 | 0][i_0 / 3 | 0] = mod_0;
    }
  };
  QRCodeModel.prototype.setupTypeInfo_eltk6l$ = function (test, maskPattern) {
    var data = this.errorCorrectLevel.id << 3 | maskPattern;
    var bits = QRUtil_getInstance().getBCHTypeInfo_za3lpa$(data);
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) === 1;
      if (i < 6)
        this.modules[i][8] = mod;
      else if (i < 8)
        this.modules[i + 1 | 0][8] = mod;
      else
        this.modules[this.moduleCount - 15 + i | 0][8] = mod;
    }
    for (var i_0 = 0; i_0 < 15; i_0++) {
      var mod_0 = !test && (bits >> i_0 & 1) === 1;
      if (i_0 < 8)
        this.modules[8][this.moduleCount - i_0 - 1 | 0] = mod_0;
      else if (i_0 < 9)
        this.modules[8][15 - i_0 - 1 + 1 | 0] = mod_0;
      else
        this.modules[8][15 - i_0 - 1 | 0] = mod_0;
    }
    this.modules[this.moduleCount - 8 | 0][8] = !test;
  };
  QRCodeModel.prototype.mapData_u4kcgn$ = function (data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1 | 0;
    var bitIndex = 7;
    var byteIndex = 0;
    var col = this.moduleCount - 1 | 0;
    while (col > 0) {
      if (col === 6) {
        col = col - 1 | 0;
      }while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c | 0] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) === 1;
            }var mask = QRUtil_getInstance().getMask_qt1dr2$(maskPattern, row, col - c | 0);
            if (mask)
              dark = !dark;
            this.modules[row][col - c | 0] = dark;
            bitIndex = bitIndex - 1 | 0;
            if (bitIndex === -1) {
              byteIndex = byteIndex + 1 | 0;
              bitIndex = 7;
            }}}
        row = row + inc | 0;
        if (row < 0 || this.moduleCount <= row) {
          row = row - inc | 0;
          inc = -inc | 0;
          break;
        }}
      col = col - 2 | 0;
    }
  };
  function QRCodeModel$Companion() {
    QRCodeModel$Companion_instance = this;
    this.PAD0 = 236;
    this.PAD1 = 17;
  }
  QRCodeModel$Companion.prototype.createData_kq15z6$ = function (typeNumber, errorCorrectLevel, dataList) {
    var tmp$, tmp$_0;
    var rsBlocks = QRRSBlock$Companion_getInstance().getRSBlocks_91f6xo$(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    tmp$ = dataList.size;
    for (var i = 0; i < tmp$; i++) {
      var data = dataList.get_za3lpa$(i);
      buffer.put_vux9f0$(data.mode, 4);
      buffer.put_vux9f0$(data.getLength(), QRUtil_getInstance().getLengthInBits_vux9f0$(data.mode, typeNumber));
      data.write_4ke367$(buffer);
    }
    var totalDataCount = 0;
    tmp$_0 = rsBlocks.size;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      totalDataCount = totalDataCount + rsBlocks.get_za3lpa$(i_0).dataCount | 0;
    if (buffer.getLengthInBits() > (totalDataCount * 8 | 0)) {
      throw IllegalStateException_init(('code length overflow. (' + buffer.getLengthInBits() + '>' + (totalDataCount * 8 | 0) + ')').toString());
    }if ((buffer.getLengthInBits() + 4 | 0) <= (totalDataCount * 8 | 0)) {
      buffer.put_vux9f0$(0, 4);
    }while (buffer.getLengthInBits() % 8 !== 0)
      buffer.putBit_6taknv$(false);
    while (buffer.getLengthInBits() < (totalDataCount * 8 | 0)) {
      buffer.put_vux9f0$(236, 8);
      if (buffer.getLengthInBits() >= (totalDataCount * 8 | 0))
        break;
      buffer.put_vux9f0$(17, 8);
    }
    return QRCodeModel$Companion_getInstance().createBytes_64sabq$(buffer, rsBlocks);
  };
  QRCodeModel$Companion.prototype.createBytes_64sabq$ = function (buffer, rsBlocks) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var array = Array_0(rsBlocks.size);
    var tmp$_9;
    tmp$_9 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_9; i++) {
      array[i] = new Int32Array([]);
    }
    var dcdata = array;
    var array_0 = Array_0(rsBlocks.size);
    var tmp$_10;
    tmp$_10 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_10; i_0++) {
      array_0[i_0] = new Int32Array([]);
    }
    var ecdata = array_0;
    tmp$ = rsBlocks.size;
    for (var r = 0; r < tmp$; r++) {
      var dcCount = rsBlocks.get_za3lpa$(r).dataCount;
      var ecCount = rsBlocks.get_za3lpa$(r).totalCount - dcCount | 0;
      var a = maxDcCount;
      maxDcCount = Math_0.max(a, dcCount);
      var a_0 = maxEcCount;
      maxEcCount = Math_0.max(a_0, ecCount);
      dcdata[r] = new Int32Array(dcCount);
      tmp$_0 = dcdata[r].length;
      for (var i_1 = 0; i_1 < tmp$_0; i_1++) {
        dcdata[r][i_1] = 255 & buffer.buffer.getAt_za3lpa$(i_1 + offset | 0);
      }
      offset = offset + dcCount | 0;
      var rsPoly = QRUtil_getInstance().getErrorCorrectPolynomial_za3lpa$(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1 | 0);
      var modPoly = rawPoly.mod_5zje5s$(rsPoly);
      ecdata[r] = new Int32Array(rsPoly.getLength() - 1 | 0);
      tmp$_1 = ecdata[r].length;
      for (var i_2 = 0; i_2 < tmp$_1; i_2++) {
        var modIndex = i_2 + modPoly.getLength() - ecdata[r].length | 0;
        ecdata[r][i_2] = modIndex >= 0 ? modPoly.get_za3lpa$(modIndex) : 0;
      }
    }
    var totalCodeCount = 0;
    tmp$_2 = rsBlocks.size;
    for (var i_3 = 0; i_3 < tmp$_2; i_3++)
      totalCodeCount = totalCodeCount + rsBlocks.get_za3lpa$(i_3).totalCount | 0;
    var data = new Int32Array(totalCodeCount);
    var index = 0;
    tmp$_3 = maxDcCount;
    for (var i_4 = 0; i_4 < tmp$_3; i_4++) {
      tmp$_4 = rsBlocks.size;
      for (var r_0 = 0; r_0 < tmp$_4; r_0++) {
        if (i_4 < dcdata[r_0].length) {
          data[tmp$_5 = index, index = tmp$_5 + 1 | 0, tmp$_5] = dcdata[r_0][i_4];
        }}
    }
    tmp$_6 = maxEcCount;
    for (var i_5 = 0; i_5 < tmp$_6; i_5++) {
      tmp$_7 = rsBlocks.size;
      for (var r_1 = 0; r_1 < tmp$_7; r_1++) {
        if (i_5 < ecdata[r_1].length) {
          data[tmp$_8 = index, index = tmp$_8 + 1 | 0, tmp$_8] = ecdata[r_1][i_5];
        }}
    }
    return data;
  };
  QRCodeModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var QRCodeModel$Companion_instance = null;
  function QRCodeModel$Companion_getInstance() {
    if (QRCodeModel$Companion_instance === null) {
      new QRCodeModel$Companion();
    }return QRCodeModel$Companion_instance;
  }
  QRCodeModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QRCodeModel',
    interfaces: []
  };
  function QRMode() {
    QRMode_instance = this;
    this.MODE_NUMBER = 1;
    this.MODE_ALPHA_NUM = 2;
    this.MODE_8BIT_BYTE = 4;
    this.MODE_KANJI = 8;
  }
  QRMode.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'QRMode',
    interfaces: []
  };
  var QRMode_instance = null;
  function QRMode_getInstance() {
    if (QRMode_instance === null) {
      new QRMode();
    }return QRMode_instance;
  }
  function QRMaskPattern() {
    QRMaskPattern_instance = this;
    this.PATTERN000 = 0;
    this.PATTERN001 = 1;
    this.PATTERN010 = 2;
    this.PATTERN011 = 3;
    this.PATTERN100 = 4;
    this.PATTERN101 = 5;
    this.PATTERN110 = 6;
    this.PATTERN111 = 7;
  }
  QRMaskPattern.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'QRMaskPattern',
    interfaces: []
  };
  var QRMaskPattern_instance = null;
  function QRMaskPattern_getInstance() {
    if (QRMaskPattern_instance === null) {
      new QRMaskPattern();
    }return QRMaskPattern_instance;
  }
  function QRUtil() {
    QRUtil_instance = this;
    this.PATTERN_POSITION_TABLE = listOf([new Int32Array([]), new Int32Array([6, 18]), new Int32Array([6, 22]), new Int32Array([6, 26]), new Int32Array([6, 30]), new Int32Array([6, 34]), new Int32Array([6, 22, 38]), new Int32Array([6, 24, 42]), new Int32Array([6, 26, 46]), new Int32Array([6, 28, 50]), new Int32Array([6, 30, 54]), new Int32Array([6, 32, 58]), new Int32Array([6, 34, 62]), new Int32Array([6, 26, 46, 66]), new Int32Array([6, 26, 48, 70]), new Int32Array([6, 26, 50, 74]), new Int32Array([6, 30, 54, 78]), new Int32Array([6, 30, 56, 82]), new Int32Array([6, 30, 58, 86]), new Int32Array([6, 34, 62, 90]), new Int32Array([6, 28, 50, 72, 94]), new Int32Array([6, 26, 50, 74, 98]), new Int32Array([6, 30, 54, 78, 102]), new Int32Array([6, 28, 54, 80, 106]), new Int32Array([6, 32, 58, 84, 110]), new Int32Array([6, 30, 58, 86, 114]), new Int32Array([6, 34, 62, 90, 118]), new Int32Array([6, 26, 50, 74, 98, 122]), new Int32Array([6, 30, 54, 78, 102, 126]), new Int32Array([6, 26, 52, 78, 104, 130]), new Int32Array([6, 30, 56, 82, 108, 134]), new Int32Array([6, 34, 60, 86, 112, 138]), new Int32Array([6, 30, 58, 86, 114, 142]), new Int32Array([6, 34, 62, 90, 118, 146]), new Int32Array([6, 30, 54, 78, 102, 126, 150]), new Int32Array([6, 24, 50, 76, 102, 128, 154]), new Int32Array([6, 28, 54, 80, 106, 132, 158]), new Int32Array([6, 32, 58, 84, 110, 136, 162]), new Int32Array([6, 26, 54, 82, 110, 138, 166]), new Int32Array([6, 30, 58, 86, 114, 142, 170])]);
    this.G15 = 1335;
    this.G18 = 7973;
    this.G15_MASK = 21522;
  }
  QRUtil.prototype.getBCHTypeInfo_za3lpa$ = function (data) {
    var d = data << 10;
    while ((QRUtil_getInstance().getBCHDigit_za3lpa$(d) - QRUtil_getInstance().getBCHDigit_za3lpa$(1335) | 0) >= 0) {
      d = d ^ 1335 << QRUtil_getInstance().getBCHDigit_za3lpa$(d) - QRUtil_getInstance().getBCHDigit_za3lpa$(1335);
    }
    return (data << 10 | d) ^ 21522;
  };
  QRUtil.prototype.getBCHTypeNumber_za3lpa$ = function (data) {
    var d = data << 12;
    while ((QRUtil_getInstance().getBCHDigit_za3lpa$(d) - QRUtil_getInstance().getBCHDigit_za3lpa$(7973) | 0) >= 0) {
      d = d ^ 7973 << QRUtil_getInstance().getBCHDigit_za3lpa$(d) - QRUtil_getInstance().getBCHDigit_za3lpa$(7973);
    }
    return data << 12 | d;
  };
  QRUtil.prototype.getBCHDigit_za3lpa$ = function (data) {
    var dd = data;
    var digit = 0;
    while (dd !== 0) {
      digit = digit + 1 | 0;
      dd = dd >>> 1;
    }
    return digit;
  };
  QRUtil.prototype.getPatternPosition_za3lpa$ = function (typeNumber) {
    return QRUtil_getInstance().PATTERN_POSITION_TABLE.get_za3lpa$(typeNumber - 1 | 0);
  };
  QRUtil.prototype.getMask_qt1dr2$ = function (maskPattern, i, j) {
    switch (maskPattern) {
      case 0:
        return (i + j | 0) % 2 === 0;
      case 1:
        return i % 2 === 0;
      case 2:
        return j % 3 === 0;
      case 3:
        return (i + j | 0) % 3 === 0;
      case 4:
        return ((i / 2 | 0) + (j / 3 | 0) | 0) % 2 === 0;
      case 5:
        return (Kotlin.imul(i, j) % 2 + Kotlin.imul(i, j) % 3 | 0) === 0;
      case 6:
        return (Kotlin.imul(i, j) % 2 + Kotlin.imul(i, j) % 3 | 0) % 2 === 0;
      case 7:
        return (Kotlin.imul(i, j) % 3 + (i + j | 0) % 2 | 0) % 2 === 0;
      default:throw IllegalStateException_init(('bad maskPattern:' + maskPattern).toString());
    }
  };
  QRUtil.prototype.getErrorCorrectPolynomial_za3lpa$ = function (errorCorrectLength) {
    var a = new QRPolynomial(new Int32Array([1]), 0);
    for (var i = 0; i < errorCorrectLength; i++)
      a = a.multiply_5zje5s$(new QRPolynomial(new Int32Array([1, QRMath_getInstance().gexp_za3lpa$(i)]), 0));
    return a;
  };
  QRUtil.prototype.getLengthInBits_vux9f0$ = function (mode, type) {
    if (type >= 1 && type <= 9) {
      switch (mode) {
        case 1:
          return 10;
        case 2:
          return 9;
        case 4:
          return 8;
        case 8:
          return 8;
        default:throw IllegalStateException_init(('mode:' + mode).toString());
      }
    } else if (type >= 10 && type <= 27) {
      switch (mode) {
        case 1:
          return 12;
        case 2:
          return 11;
        case 4:
          return 16;
        case 8:
          return 10;
        default:throw IllegalStateException_init(('mode:' + mode).toString());
      }
    } else if (type >= 28 && type <= 41) {
      switch (mode) {
        case 1:
          return 14;
        case 2:
          return 13;
        case 4:
          return 16;
        case 8:
          return 12;
        default:throw IllegalStateException_init(('mode:' + mode).toString());
      }
    } else {
      throw IllegalStateException_init(('type:' + type).toString());
    }
  };
  QRUtil.prototype.getLostPoint_9d91q8$ = function (qrCode) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var moduleCount = qrCode.moduleCount;
    var lostPoint = 0;
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark_vux9f0$(row, col);
        for (var r = -1; r <= 1; r++) {
          if ((row + r | 0) < 0 || moduleCount <= (row + r | 0))
            continue;
          for (var c = -1; c <= 1; c++) {
            if ((col + c | 0) < 0 || moduleCount <= (col + c | 0))
              continue;
            if (r === 0 && c === 0)
              continue;
            if (dark === qrCode.isDark_vux9f0$(row + r | 0, col + c | 0)) {
              sameCount = sameCount + 1 | 0;
            }}
        }
        if (sameCount > 5)
          lostPoint = lostPoint + (3 + sameCount - 5) | 0;
      }
    }
    tmp$ = moduleCount - 1 | 0;
    for (var row_0 = 0; row_0 < tmp$; row_0++) {
      tmp$_0 = moduleCount - 1 | 0;
      for (var col_0 = 0; col_0 < tmp$_0; col_0++) {
        var count = 0;
        if (qrCode.isDark_vux9f0$(row_0, col_0)) {
          count = count + 1 | 0;
        }if (qrCode.isDark_vux9f0$(row_0 + 1 | 0, col_0)) {
          count = count + 1 | 0;
        }if (qrCode.isDark_vux9f0$(row_0, col_0 + 1 | 0)) {
          count = count + 1 | 0;
        }if (qrCode.isDark_vux9f0$(row_0 + 1 | 0, col_0 + 1 | 0)) {
          count = count + 1 | 0;
        }if (count === 0 || count === 4)
          lostPoint = lostPoint + 3 | 0;
      }
    }
    for (var row_1 = 0; row_1 < moduleCount; row_1++) {
      tmp$_1 = moduleCount - 6 | 0;
      for (var col_1 = 0; col_1 < tmp$_1; col_1++) {
        if (qrCode.isDark_vux9f0$(row_1, col_1) && !qrCode.isDark_vux9f0$(row_1, col_1 + 1 | 0) && qrCode.isDark_vux9f0$(row_1, col_1 + 2 | 0) && qrCode.isDark_vux9f0$(row_1, col_1 + 3 | 0) && qrCode.isDark_vux9f0$(row_1, col_1 + 4 | 0) && !qrCode.isDark_vux9f0$(row_1, col_1 + 5 | 0) && qrCode.isDark_vux9f0$(row_1, col_1 + 6 | 0)) {
          lostPoint = lostPoint + 40 | 0;
        }}
    }
    for (var col_2 = 0; col_2 < moduleCount; col_2++) {
      tmp$_2 = moduleCount - 6 | 0;
      for (var row_2 = 0; row_2 < tmp$_2; row_2++) {
        if (qrCode.isDark_vux9f0$(row_2, col_2) && !qrCode.isDark_vux9f0$(row_2 + 1 | 0, col_2) && qrCode.isDark_vux9f0$(row_2 + 2 | 0, col_2) && qrCode.isDark_vux9f0$(row_2 + 3 | 0, col_2) && qrCode.isDark_vux9f0$(row_2 + 4 | 0, col_2) && !qrCode.isDark_vux9f0$(row_2 + 5 | 0, col_2) && qrCode.isDark_vux9f0$(row_2 + 6 | 0, col_2)) {
          lostPoint = lostPoint + 40 | 0;
        }}
    }
    var darkCount = 0;
    for (var col_3 = 0; col_3 < moduleCount; col_3++) {
      for (var row_3 = 0; row_3 < moduleCount; row_3++) {
        if (qrCode.isDark_vux9f0$(row_3, col_3)) {
          darkCount = darkCount + 1 | 0;
        }}
    }
    var ratio = abs((((100 * darkCount | 0) / moduleCount | 0) / moduleCount | 0) - 50 | 0) / 5 | 0;
    lostPoint = lostPoint + (ratio * 10 | 0) | 0;
    return lostPoint;
  };
  QRUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'QRUtil',
    interfaces: []
  };
  var QRUtil_instance = null;
  function QRUtil_getInstance() {
    if (QRUtil_instance === null) {
      new QRUtil();
    }return QRUtil_instance;
  }
  function QRMath() {
    QRMath_instance = this;
    var $receiver = new Int32Array(256);
    for (var i = 0; i < 8; i++)
      $receiver[i] = 1 << i;
    for (var i_0 = 8; i_0 < 256; i_0++)
      $receiver[i_0] = $receiver[i_0 - 4 | 0] ^ $receiver[i_0 - 5 | 0] ^ $receiver[i_0 - 6 | 0] ^ $receiver[i_0 - 8 | 0];
    this.EXP_0 = $receiver;
    var $receiver_0 = new Int32Array(256);
    for (var i_1 = 0; i_1 < 255; i_1++)
      $receiver_0[this.EXP_0[i_1]] = i_1;
    this.LOG_0 = $receiver_0;
  }
  QRMath.prototype.glog_za3lpa$ = function (n) {
    var tmp$ = this.LOG_0;
    var tmp$_0;
    if (n >= 1)
      tmp$_0 = n;
    else {
      throw IllegalStateException_init(('glog(' + n + ')').toString());
    }
    return tmp$[tmp$_0];
  };
  QRMath.prototype.gexp_za3lpa$ = function (n) {
    var nn = n;
    while (nn < 0)
      nn = nn + 255 | 0;
    while (nn >= 256)
      nn = nn - 255 | 0;
    return this.EXP_0[nn];
  };
  QRMath.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'QRMath',
    interfaces: []
  };
  var QRMath_instance = null;
  function QRMath_getInstance() {
    if (QRMath_instance === null) {
      new QRMath();
    }return QRMath_instance;
  }
  function QRPolynomial(cnum, shift) {
    var tmp$;
    var offset = 0;
    while (offset < cnum.length && cnum[offset] === 0) {
      offset = offset + 1 | 0;
    }
    var num = new Int32Array(cnum.length - offset + shift | 0);
    tmp$ = cnum.length - offset | 0;
    for (var i = 0; i < tmp$; i++)
      num[i] = cnum[i + offset | 0];
    this.num = num;
  }
  QRPolynomial.prototype.get_za3lpa$ = function (index) {
    return this.num[index];
  };
  QRPolynomial.prototype.getLength = function () {
    return this.num.length;
  };
  QRPolynomial.prototype.multiply_5zje5s$ = function (e) {
    var tmp$, tmp$_0;
    var num = new Int32Array(this.getLength() + e.getLength() - 1 | 0);
    tmp$ = this.getLength();
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = e.getLength();
      for (var j = 0; j < tmp$_0; j++) {
        num[i + j | 0] = num[i + j | 0] ^ QRMath_getInstance().gexp_za3lpa$(QRMath_getInstance().glog_za3lpa$(this.get_za3lpa$(i)) + QRMath_getInstance().glog_za3lpa$(e.get_za3lpa$(j)) | 0);
      }
    }
    return new QRPolynomial(num, 0);
  };
  QRPolynomial.prototype.mod_5zje5s$ = function (e) {
    var tmp$, tmp$_0;
    if ((this.getLength() - e.getLength() | 0) < 0)
      return this;
    var ratio = QRMath_getInstance().glog_za3lpa$(this.get_za3lpa$(0)) - QRMath_getInstance().glog_za3lpa$(e.get_za3lpa$(0)) | 0;
    var num = new Int32Array(this.getLength());
    tmp$ = this.getLength();
    for (var i = 0; i < tmp$; i++)
      num[i] = this.get_za3lpa$(i);
    tmp$_0 = e.getLength();
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      num[i_0] = num[i_0] ^ QRMath_getInstance().gexp_za3lpa$(QRMath_getInstance().glog_za3lpa$(e.get_za3lpa$(i_0)) + ratio | 0);
    return (new QRPolynomial(num, 0)).mod_5zje5s$(e);
  };
  QRPolynomial.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QRPolynomial',
    interfaces: []
  };
  function QRRSBlock(totalCount, dataCount) {
    QRRSBlock$Companion_getInstance();
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  function QRRSBlock$Companion() {
    QRRSBlock$Companion_instance = this;
    this.RS_BLOCK_TABLE = listOf([new Int32Array([1, 26, 19]), new Int32Array([1, 26, 16]), new Int32Array([1, 26, 13]), new Int32Array([1, 26, 9]), new Int32Array([1, 44, 34]), new Int32Array([1, 44, 28]), new Int32Array([1, 44, 22]), new Int32Array([1, 44, 16]), new Int32Array([1, 70, 55]), new Int32Array([1, 70, 44]), new Int32Array([2, 35, 17]), new Int32Array([2, 35, 13]), new Int32Array([1, 100, 80]), new Int32Array([2, 50, 32]), new Int32Array([2, 50, 24]), new Int32Array([4, 25, 9]), new Int32Array([1, 134, 108]), new Int32Array([2, 67, 43]), new Int32Array([2, 33, 15, 2, 34, 16]), new Int32Array([2, 33, 11, 2, 34, 12]), new Int32Array([2, 86, 68]), new Int32Array([4, 43, 27]), new Int32Array([4, 43, 19]), new Int32Array([4, 43, 15]), new Int32Array([2, 98, 78]), new Int32Array([4, 49, 31]), new Int32Array([2, 32, 14, 4, 33, 15]), new Int32Array([4, 39, 13, 1, 40, 14]), new Int32Array([2, 121, 97]), new Int32Array([2, 60, 38, 2, 61, 39]), new Int32Array([4, 40, 18, 2, 41, 19]), new Int32Array([4, 40, 14, 2, 41, 15]), new Int32Array([2, 146, 116]), new Int32Array([3, 58, 36, 2, 59, 37]), new Int32Array([4, 36, 16, 4, 37, 17]), new Int32Array([4, 36, 12, 4, 37, 13]), new Int32Array([2, 86, 68, 2, 87, 69]), new Int32Array([4, 69, 43, 1, 70, 44]), new Int32Array([6, 43, 19, 2, 44, 20]), new Int32Array([6, 43, 15, 2, 44, 16]), new Int32Array([4, 101, 81]), new Int32Array([1, 80, 50, 4, 81, 51]), new Int32Array([4, 50, 22, 4, 51, 23]), new Int32Array([3, 36, 12, 8, 37, 13]), new Int32Array([2, 116, 92, 2, 117, 93]), new Int32Array([6, 58, 36, 2, 59, 37]), new Int32Array([4, 46, 20, 6, 47, 21]), new Int32Array([7, 42, 14, 4, 43, 15]), new Int32Array([4, 133, 107]), new Int32Array([8, 59, 37, 1, 60, 38]), new Int32Array([8, 44, 20, 4, 45, 21]), new Int32Array([12, 33, 11, 4, 34, 12]), new Int32Array([3, 145, 115, 1, 146, 116]), new Int32Array([4, 64, 40, 5, 65, 41]), new Int32Array([11, 36, 16, 5, 37, 17]), new Int32Array([11, 36, 12, 5, 37, 13]), new Int32Array([5, 109, 87, 1, 110, 88]), new Int32Array([5, 65, 41, 5, 66, 42]), new Int32Array([5, 54, 24, 7, 55, 25]), new Int32Array([11, 36, 12]), new Int32Array([5, 122, 98, 1, 123, 99]), new Int32Array([7, 73, 45, 3, 74, 46]), new Int32Array([15, 43, 19, 2, 44, 20]), new Int32Array([3, 45, 15, 13, 46, 16]), new Int32Array([1, 135, 107, 5, 136, 108]), new Int32Array([10, 74, 46, 1, 75, 47]), new Int32Array([1, 50, 22, 15, 51, 23]), new Int32Array([2, 42, 14, 17, 43, 15]), new Int32Array([5, 150, 120, 1, 151, 121]), new Int32Array([9, 69, 43, 4, 70, 44]), new Int32Array([17, 50, 22, 1, 51, 23]), new Int32Array([2, 42, 14, 19, 43, 15]), new Int32Array([3, 141, 113, 4, 142, 114]), new Int32Array([3, 70, 44, 11, 71, 45]), new Int32Array([17, 47, 21, 4, 48, 22]), new Int32Array([9, 39, 13, 16, 40, 14]), new Int32Array([3, 135, 107, 5, 136, 108]), new Int32Array([3, 67, 41, 13, 68, 42]), new Int32Array([15, 54, 24, 5, 55, 25]), new Int32Array([15, 43, 15, 10, 44, 16]), new Int32Array([4, 144, 116, 4, 145, 117]), new Int32Array([17, 68, 42]), new Int32Array([17, 50, 22, 6, 51, 23]), new Int32Array([19, 46, 16, 6, 47, 17]), new Int32Array([2, 139, 111, 7, 140, 112]), new Int32Array([17, 74, 46]), new Int32Array([7, 54, 24, 16, 55, 25]), new Int32Array([34, 37, 13]), new Int32Array([4, 151, 121, 5, 152, 122]), new Int32Array([4, 75, 47, 14, 76, 48]), new Int32Array([11, 54, 24, 14, 55, 25]), new Int32Array([16, 45, 15, 14, 46, 16]), new Int32Array([6, 147, 117, 4, 148, 118]), new Int32Array([6, 73, 45, 14, 74, 46]), new Int32Array([11, 54, 24, 16, 55, 25]), new Int32Array([30, 46, 16, 2, 47, 17]), new Int32Array([8, 132, 106, 4, 133, 107]), new Int32Array([8, 75, 47, 13, 76, 48]), new Int32Array([7, 54, 24, 22, 55, 25]), new Int32Array([22, 45, 15, 13, 46, 16]), new Int32Array([10, 142, 114, 2, 143, 115]), new Int32Array([19, 74, 46, 4, 75, 47]), new Int32Array([28, 50, 22, 6, 51, 23]), new Int32Array([33, 46, 16, 4, 47, 17]), new Int32Array([8, 152, 122, 4, 153, 123]), new Int32Array([22, 73, 45, 3, 74, 46]), new Int32Array([8, 53, 23, 26, 54, 24]), new Int32Array([12, 45, 15, 28, 46, 16]), new Int32Array([3, 147, 117, 10, 148, 118]), new Int32Array([3, 73, 45, 23, 74, 46]), new Int32Array([4, 54, 24, 31, 55, 25]), new Int32Array([11, 45, 15, 31, 46, 16]), new Int32Array([7, 146, 116, 7, 147, 117]), new Int32Array([21, 73, 45, 7, 74, 46]), new Int32Array([1, 53, 23, 37, 54, 24]), new Int32Array([19, 45, 15, 26, 46, 16]), new Int32Array([5, 145, 115, 10, 146, 116]), new Int32Array([19, 75, 47, 10, 76, 48]), new Int32Array([15, 54, 24, 25, 55, 25]), new Int32Array([23, 45, 15, 25, 46, 16]), new Int32Array([13, 145, 115, 3, 146, 116]), new Int32Array([2, 74, 46, 29, 75, 47]), new Int32Array([42, 54, 24, 1, 55, 25]), new Int32Array([23, 45, 15, 28, 46, 16]), new Int32Array([17, 145, 115]), new Int32Array([10, 74, 46, 23, 75, 47]), new Int32Array([10, 54, 24, 35, 55, 25]), new Int32Array([19, 45, 15, 35, 46, 16]), new Int32Array([17, 145, 115, 1, 146, 116]), new Int32Array([14, 74, 46, 21, 75, 47]), new Int32Array([29, 54, 24, 19, 55, 25]), new Int32Array([11, 45, 15, 46, 46, 16]), new Int32Array([13, 145, 115, 6, 146, 116]), new Int32Array([14, 74, 46, 23, 75, 47]), new Int32Array([44, 54, 24, 7, 55, 25]), new Int32Array([59, 46, 16, 1, 47, 17]), new Int32Array([12, 151, 121, 7, 152, 122]), new Int32Array([12, 75, 47, 26, 76, 48]), new Int32Array([39, 54, 24, 14, 55, 25]), new Int32Array([22, 45, 15, 41, 46, 16]), new Int32Array([6, 151, 121, 14, 152, 122]), new Int32Array([6, 75, 47, 34, 76, 48]), new Int32Array([46, 54, 24, 10, 55, 25]), new Int32Array([2, 45, 15, 64, 46, 16]), new Int32Array([17, 152, 122, 4, 153, 123]), new Int32Array([29, 74, 46, 14, 75, 47]), new Int32Array([49, 54, 24, 10, 55, 25]), new Int32Array([24, 45, 15, 46, 46, 16]), new Int32Array([4, 152, 122, 18, 153, 123]), new Int32Array([13, 74, 46, 32, 75, 47]), new Int32Array([48, 54, 24, 14, 55, 25]), new Int32Array([42, 45, 15, 32, 46, 16]), new Int32Array([20, 147, 117, 4, 148, 118]), new Int32Array([40, 75, 47, 7, 76, 48]), new Int32Array([43, 54, 24, 22, 55, 25]), new Int32Array([10, 45, 15, 67, 46, 16]), new Int32Array([19, 148, 118, 6, 149, 119]), new Int32Array([18, 75, 47, 31, 76, 48]), new Int32Array([34, 54, 24, 34, 55, 25]), new Int32Array([20, 45, 15, 61, 46, 16])]);
  }
  QRRSBlock$Companion.prototype.getRSBlocks_91f6xo$ = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock$Companion_getInstance().getRsBlockTable_91f6xo$(typeNumber, errorCorrectLevel);
    var length = rsBlock.length / 3 | 0;
    var list = ArrayList_init_0();
    for (var i = 0; i < length; i++) {
      var count = rsBlock[(i * 3 | 0) + 0 | 0];
      var totalCount = rsBlock[(i * 3 | 0) + 1 | 0];
      var dataCount = rsBlock[(i * 3 | 0) + 2 | 0];
      for (var j = 0; j < count; j++)
        list.add_11rb$(new QRRSBlock(totalCount, dataCount));
    }
    return list;
  };
  QRRSBlock$Companion.prototype.getRsBlockTable_91f6xo$ = function (typeNumber, errorCorrectLevel) {
    var tmp$;
    switch (errorCorrectLevel.name) {
      case 'L':
        tmp$ = QRRSBlock$Companion_getInstance().RS_BLOCK_TABLE.get_za3lpa$(((typeNumber - 1 | 0) * 4 | 0) + 0 | 0);
        break;
      case 'M':
        tmp$ = QRRSBlock$Companion_getInstance().RS_BLOCK_TABLE.get_za3lpa$(((typeNumber - 1 | 0) * 4 | 0) + 1 | 0);
        break;
      case 'Q':
        tmp$ = QRRSBlock$Companion_getInstance().RS_BLOCK_TABLE.get_za3lpa$(((typeNumber - 1 | 0) * 4 | 0) + 2 | 0);
        break;
      case 'H':
        tmp$ = QRRSBlock$Companion_getInstance().RS_BLOCK_TABLE.get_za3lpa$(((typeNumber - 1 | 0) * 4 | 0) + 3 | 0);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  QRRSBlock$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var QRRSBlock$Companion_instance = null;
  function QRRSBlock$Companion_getInstance() {
    if (QRRSBlock$Companion_instance === null) {
      new QRRSBlock$Companion();
    }return QRRSBlock$Companion_instance;
  }
  QRRSBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QRRSBlock',
    interfaces: []
  };
  function QRBitBuffer() {
    this.buffer = new IntArrayList();
    this.length = 0;
  }
  QRBitBuffer.prototype.get_za3lpa$ = function (index) {
    return (this.buffer.get_za3lpa$(index / 8 | 0) >>> 7 - index % 8 & 1) === 1;
  };
  QRBitBuffer.prototype.put_vux9f0$ = function (num, length) {
    for (var i = 0; i < length; i++)
      this.putBit_6taknv$((num >>> length - i - 1 & 1) === 1);
  };
  QRBitBuffer.prototype.getLengthInBits = function () {
    return this.length;
  };
  QRBitBuffer.prototype.putBit_6taknv$ = function (bit) {
    var bufIndex = this.length / 8 | 0;
    if (this.buffer.size <= bufIndex)
      this.buffer.add_za3lpa$(0);
    if (bit)
      this.buffer.set_vux9f0$(bufIndex, this.buffer.get_za3lpa$(bufIndex) | 128 >>> this.length % 8);
    this.length = this.length + 1 | 0;
  };
  QRBitBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QRBitBuffer',
    interfaces: []
  };
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
  var arraycopy$lambda_5 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Bitmap32Context2d(bmp, antialiasing) {
    Renderer.call(this);
    this.bmp = bmp;
    this.antialiasing = antialiasing;
    this.bounds = get_float(this.bmp.bounds);
    this.rasterizer = new Rasterizer();
    this.colorFiller = new ColorFiller();
    this.gradientFiller = new GradientFiller();
    this.bitmapFiller = new BitmapFiller();
    this.scanlineWriter = new Bitmap32Context2d$ScanlineWriter(this);
    this.tempPath_0 = new VectorPath(void 0, void 0, Winding.EVEN_ODD);
    this.tempFillStrokeTemp_0 = new StrokeToFill();
  }
  Object.defineProperty(Bitmap32Context2d.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(Bitmap32Context2d.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  function Bitmap32Context2d$render$flush$lambda(this$Bitmap32Context2d) {
    return function (x0, x1, y) {
      this$Bitmap32Context2d.scanlineWriter.select_qt1dr2$(x0, x1, y);
      return Unit;
    };
  }
  function Bitmap32Context2d$render$flush(this$Bitmap32Context2d, closure$filler, closure$fillPath) {
    return function () {
      if (this$Bitmap32Context2d.rasterizer.path.isNotEmpty()) {
        this$Bitmap32Context2d.rasterizer.quality = this$Bitmap32Context2d.antialiasing ? 4 : 1;
        this$Bitmap32Context2d.scanlineWriter.filler = closure$filler;
        this$Bitmap32Context2d.scanlineWriter.reset();
        this$Bitmap32Context2d.rasterizer.rasterizeFill_pf7p4a$(this$Bitmap32Context2d.bounds, void 0, void 0, closure$fillPath.winding, Bitmap32Context2d$render$flush$lambda(this$Bitmap32Context2d));
        this$Bitmap32Context2d.scanlineWriter.flush();
        this$Bitmap32Context2d.rasterizer.path.reset();
      }};
  }
  function Bitmap32Context2d$render$lambda(this$Bitmap32Context2d) {
    return function (x, y, move) {
      this$Bitmap32Context2d.rasterizer.clip.add_przk3b$(x, y, move);
      return Unit;
    };
  }
  function Bitmap32Context2d$render$lambda_0(closure$doingStroke, closure$flush, this$Bitmap32Context2d) {
    return function (x, y, move) {
      if (closure$doingStroke) {
        if (move) {
          closure$flush();
        }}this$Bitmap32Context2d.rasterizer.path.add_przk3b$(x, y, move);
      return Unit;
    };
  }
  Bitmap32Context2d.prototype.render_w64o9o$ = function (state, fill) {
    var tmp$, tmp$_0;
    var style = fill ? state.fillStyle : state.strokeStyle;
    if (Kotlin.isType(style, NonePaint))
      tmp$ = NoneFiller_getInstance();
    else if (Kotlin.isType(style, ColorPaint))
      tmp$ = this.colorFiller.set_ld7uar$(style, state);
    else if (Kotlin.isType(style, GradientPaint))
      tmp$ = this.gradientFiller.set_rzuytg$(style, state);
    else if (Kotlin.isType(style, BitmapPaint))
      tmp$ = this.bitmapFiller.set_z3ts7v$(style, state);
    else {
      throw new NotImplementedError_init();
    }
    var filler = tmp$;
    this.scanlineWriter.compositeMode = state.globalCompositeOperation;
    this.rasterizer.reset();
    this.rasterizer.debug = this.debug;
    var doingStroke = !fill;
    if (fill) {
      tmp$_0 = state.path;
    } else {
      this.tempPath_0.clear();
      tmp$_0 = strokeToFill(state.path, state.scaledLineWidth, state.lineJoin, state.startLineCap, state.endLineCap, state.miterLimit, this.tempFillStrokeTemp_0, this.tempPath_0);
    }
    var fillPath = tmp$_0;
    var flush = Bitmap32Context2d$render$flush(this, filler, fillPath);
    if (state.clip != null) {
      this.rasterizer.clip.winding = ensureNotNull(state.clip).winding;
      var $receiver = ensureNotNull(state.clip);
      var ix = {v: 0.0};
      var iy = {v: 0.0};
      var lx = {v: 0.0};
      var ly = {v: 0.0};
      if (false)
        this.rasterizer.clip.close();
      var n = {v: 0};
      var $receiver_0 = $receiver.commands;
      var tmp$_1;
      var n_0 = 0;
      while (n_0 < $receiver_0.size) {
        var tmp$_0_0, tmp$_1_0, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
        switch ($receiver_0.getAt_za3lpa$((tmp$_1 = n_0, n_0 = tmp$_1 + 1 | 0, tmp$_1))) {
          case 0:
            var x = $receiver.data.getAt_za3lpa$((tmp$_0_0 = n.v, n.v = tmp$_0_0 + 1 | 0, tmp$_0_0));
            var y = $receiver.data.getAt_za3lpa$((tmp$_1_0 = n.v, n.v = tmp$_1_0 + 1 | 0, tmp$_1_0));
            ix.v = x;
            iy.v = y;
            this.rasterizer.clip.add_przk3b$(x, y, true);
            lx.v = x;
            ly.v = y;
            break;
          case 1:
            var x_0 = $receiver.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
            var y_0 = $receiver.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
            this.rasterizer.clip.add_przk3b$(x_0, y_0, false);
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
              emitPoints2$lambda$lambda(lx, ly, x1, y1, x2, y2)(ratio, approximateCurve$lambda_0(emitPoints2$lambda$lambda_0(Bitmap32Context2d$render$lambda(this)), emittedCount, prevX, lastX, prevY, lastY));
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
              emitPoints2$lambda$lambda_1(lx, ly, x1_0, y1_0, x2_0, y2_0, x3, y3)(ratio_0, approximateCurve$lambda_2(emitPoints2$lambda$lambda_2(Bitmap32Context2d$render$lambda(this)), emittedCount_0, prevX_0, lastX_0, prevY_0, lastY_0));
            }

            lx.v = x3;
            ly.v = y3;
            emitPoints2$lambda_0(false);
            break;
          case 4:
            this.rasterizer.clip.add_przk3b$(ix.v, iy.v, false);
            emitPoints2$lambda_0(true);
            if (true)
              this.rasterizer.clip.close();
            break;
        }
      }
      if (false)
        this.rasterizer.clip.close();
    }this.rasterizer.path.winding = ensureNotNull(state.path).winding;
    var ix_0 = {v: 0.0};
    var iy_0 = {v: 0.0};
    var lx_0 = {v: 0.0};
    var ly_0 = {v: 0.0};
    if (false) {
      this.rasterizer.path.close();
    }var n_3 = {v: 0};
    var $receiver_0_0 = fillPath.commands;
    var tmp$_14;
    var n_0_0 = 0;
    while (n_0_0 < $receiver_0_0.size) {
      var tmp$_0_1, tmp$_1_1, tmp$_2_0, tmp$_3_0, tmp$_4_0, tmp$_5_0, tmp$_6_0, tmp$_7_0, tmp$_8_0, tmp$_9_0, tmp$_10_0, tmp$_11_0, tmp$_12_0, tmp$_13_0;
      switch ($receiver_0_0.getAt_za3lpa$((tmp$_14 = n_0_0, n_0_0 = tmp$_14 + 1 | 0, tmp$_14))) {
        case 0:
          var x_1 = fillPath.data.getAt_za3lpa$((tmp$_0_1 = n_3.v, n_3.v = tmp$_0_1 + 1 | 0, tmp$_0_1));
          var y_1 = fillPath.data.getAt_za3lpa$((tmp$_1_1 = n_3.v, n_3.v = tmp$_1_1 + 1 | 0, tmp$_1_1));
          ix_0.v = x_1;
          iy_0.v = y_1;
          if (doingStroke) {
            if (true) {
              flush();
            }}
          this.rasterizer.path.add_przk3b$(x_1, y_1, true);
          lx_0.v = x_1;
          ly_0.v = y_1;
          break;
        case 1:
          var x_0_0 = fillPath.data.getAt_za3lpa$((tmp$_2_0 = n_3.v, n_3.v = tmp$_2_0 + 1 | 0, tmp$_2_0));
          var y_0_0 = fillPath.data.getAt_za3lpa$((tmp$_3_0 = n_3.v, n_3.v = tmp$_3_0 + 1 | 0, tmp$_3_0));
          if (doingStroke) {
            if (false) {
              flush();
            }}
          this.rasterizer.path.add_przk3b$(x_0_0, y_0_0, false);
          lx_0.v = x_0_0;
          ly_0.v = y_0_0;
          emitPoints2$lambda_0(false);
          break;
        case 2:
          var x1_1 = fillPath.data.getAt_za3lpa$((tmp$_4_0 = n_3.v, n_3.v = tmp$_4_0 + 1 | 0, tmp$_4_0));
          var y1_1 = fillPath.data.getAt_za3lpa$((tmp$_5_0 = n_3.v, n_3.v = tmp$_5_0 + 1 | 0, tmp$_5_0));
          var x2_1 = fillPath.data.getAt_za3lpa$((tmp$_6_0 = n_3.v, n_3.v = tmp$_6_0 + 1 | 0, tmp$_6_0));
          var y2_1 = fillPath.data.getAt_za3lpa$((tmp$_7_0 = n_3.v, n_3.v = tmp$_7_0 + 1 | 0, tmp$_7_0));
          var sum_1 = Point.Companion.distance_6y0v78$(lx_0.v, ly_0.v, x1_1, y1_1) + Point.Companion.distance_6y0v78$(x1_1, y1_1, x2_1, y2_1);
          var curveSteps_1 = numberToInt(sum_1);
          var rcurveSteps_1 = Math_0.max(curveSteps_1, 20);
          var dt_1 = 1.0 / rcurveSteps_1;
          var lastX_1 = {v: 0.0};
          var lastY_1 = {v: 0.0};
          var prevX_1 = {v: 0.0};
          var prevY_1 = {v: 0.0};
          var emittedCount_1 = {v: 0};
          emitPoints2$lambda$lambda(lx_0, ly_0, x1_1, y1_1, x2_1, y2_1)(0.0, approximateCurve$lambda(lastX_1, lastY_1));
          for (var n_1_0 = 1; n_1_0 < rcurveSteps_1; n_1_0++) {
            var ratio_1 = n_1_0 * dt_1;
            emitPoints2$lambda$lambda(lx_0, ly_0, x1_1, y1_1, x2_1, y2_1)(ratio_1, approximateCurve$lambda_0(emitPoints2$lambda$lambda_0(Bitmap32Context2d$render$lambda_0(doingStroke, flush, this)), emittedCount_1, prevX_1, lastX_1, prevY_1, lastY_1));
          }

          lx_0.v = x2_1;
          ly_0.v = y2_1;
          emitPoints2$lambda_0(false);
          break;
        case 3:
          var x1_0_0 = fillPath.data.getAt_za3lpa$((tmp$_8_0 = n_3.v, n_3.v = tmp$_8_0 + 1 | 0, tmp$_8_0));
          var y1_0_0 = fillPath.data.getAt_za3lpa$((tmp$_9_0 = n_3.v, n_3.v = tmp$_9_0 + 1 | 0, tmp$_9_0));
          var x2_0_0 = fillPath.data.getAt_za3lpa$((tmp$_10_0 = n_3.v, n_3.v = tmp$_10_0 + 1 | 0, tmp$_10_0));
          var y2_0_0 = fillPath.data.getAt_za3lpa$((tmp$_11_0 = n_3.v, n_3.v = tmp$_11_0 + 1 | 0, tmp$_11_0));
          var x3_0 = fillPath.data.getAt_za3lpa$((tmp$_12_0 = n_3.v, n_3.v = tmp$_12_0 + 1 | 0, tmp$_12_0));
          var y3_0 = fillPath.data.getAt_za3lpa$((tmp$_13_0 = n_3.v, n_3.v = tmp$_13_0 + 1 | 0, tmp$_13_0));
          var sum_0_0 = Point.Companion.distance_6y0v78$(lx_0.v, ly_0.v, x1_0_0, y1_0_0) + Point.Companion.distance_6y0v78$(x1_0_0, y1_0_0, x2_0_0, y2_0_0) + Point.Companion.distance_6y0v78$(x2_0_0, y2_0_0, x3_0, y3_0);
          var curveSteps_0_0 = numberToInt(sum_0_0);
          var rcurveSteps_0_0 = Math_0.max(curveSteps_0_0, 20);
          var dt_0_0 = 1.0 / rcurveSteps_0_0;
          var lastX_0_0 = {v: 0.0};
          var lastY_0_0 = {v: 0.0};
          var prevX_0_0 = {v: 0.0};
          var prevY_0_0 = {v: 0.0};
          var emittedCount_0_0 = {v: 0};
          emitPoints2$lambda$lambda_1(lx_0, ly_0, x1_0_0, y1_0_0, x2_0_0, y2_0_0, x3_0, y3_0)(0.0, approximateCurve$lambda_1(lastX_0_0, lastY_0_0));
          for (var n_2_0 = 1; n_2_0 < rcurveSteps_0_0; n_2_0++) {
            var ratio_0_0 = n_2_0 * dt_0_0;
            emitPoints2$lambda$lambda_1(lx_0, ly_0, x1_0_0, y1_0_0, x2_0_0, y2_0_0, x3_0, y3_0)(ratio_0_0, approximateCurve$lambda_2(emitPoints2$lambda$lambda_2(Bitmap32Context2d$render$lambda_0(doingStroke, flush, this)), emittedCount_0_0, prevX_0_0, lastX_0_0, prevY_0_0, lastY_0_0));
          }

          lx_0.v = x3_0;
          ly_0.v = y3_0;
          emitPoints2$lambda_0(false);
          break;
        case 4:
          var x_2 = ix_0.v;
          var y_2 = iy_0.v;
          if (doingStroke) {
            if (false) {
              flush();
            }}
          this.rasterizer.path.add_przk3b$(x_2, y_2, false);
          emitPoints2$lambda_0(true);
          if (true) {
            this.rasterizer.path.close();
          }
          break;
      }
    }
    if (false) {
      this.rasterizer.path.close();
    }flush();
  };
  function Bitmap32Context2d$SegmentHandler() {
    this.xmin = intArrayListOf(new Int32Array([]));
    this.xmax = intArrayListOf(new Int32Array([]));
    this.reset();
  }
  Object.defineProperty(Bitmap32Context2d$SegmentHandler.prototype, 'size', {
    get: function () {
      return this.xmin.size;
    }
  });
  Bitmap32Context2d$SegmentHandler.prototype.reset = function () {
    this.xmin.clear();
    this.xmax.clear();
  };
  Bitmap32Context2d$SegmentHandler.prototype.overlaps_0 = function (a0, a1, b0, b1) {
    var min = Math_0.min(a0, a0);
    var max = Math_0.max(a1, a1);
    var maxMinor = Math_0.max(a0, b0);
    var minMajor = Math_0.min(a1, b1);
    return min <= maxMinor && maxMinor <= max || (min <= minMajor && minMajor <= max);
  };
  Bitmap32Context2d$SegmentHandler.prototype.add_vux9f0$ = function (x0, x1) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var xmin = this.xmin.getAt_za3lpa$(n);
      var xmax = this.xmax.getAt_za3lpa$(n);
      if (this.overlaps_0(xmin, xmax, x0, x1)) {
        this.xmin.set_vux9f0$(n, Math_0.min(x0, xmin));
        this.xmax.set_vux9f0$(n, Math_0.max(x1, xmax));
        return;
      }}
    this.xmin.add_za3lpa$(x0);
    this.xmax.add_za3lpa$(x1);
  };
  Bitmap32Context2d$SegmentHandler.prototype.forEachFast_nnebrl$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Bitmap32Context2d.SegmentHandler.forEachFast_nnebrl$', function (block) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      block(this.xmin.getAt_za3lpa$(n), this.xmax.getAt_za3lpa$(n));
    }
  });
  Bitmap32Context2d$SegmentHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SegmentHandler',
    interfaces: []
  };
  function Bitmap32Context2d$ScanlineWriter($outer) {
    this.$outer = $outer;
    this.compositeMode = get_DEFAULT(CompositeOperation$Companion_getInstance());
    this.filler = NoneFiller_getInstance();
    this.ny0 = -1;
    this.ny = -1;
    this.alpha = new Float32Array(this.size);
    this.hitbits = new Int32Array(this.size);
    this.origin = RgbaPremultipliedArray$Companion_getInstance().invoke_za3lpa$(this.size);
    this.color = RgbaPremultipliedArray$Companion_getInstance().invoke_za3lpa$(this.size);
    this.segments = new Bitmap32Context2d$SegmentHandler();
    this.subRowCount = 0;
  }
  Object.defineProperty(Bitmap32Context2d$ScanlineWriter.prototype, 'size', {
    get: function () {
      return this.$outer.bmp.width;
    }
  });
  Object.defineProperty(Bitmap32Context2d$ScanlineWriter.prototype, 'width1', {
    get: function () {
      return this.$outer.bmp.width - 1 | 0;
    }
  });
  Bitmap32Context2d$ScanlineWriter.prototype.reset = function () {
    fill_0(this.alpha, 0.0);
    fill_1(this.hitbits, 0);
    this.subRowCount = 0;
    this.segments.reset();
  };
  Bitmap32Context2d$ScanlineWriter.prototype.select_qt1dr2$ = function (x0, x1, y0) {
    if (this.width1 < 1)
      return;
    var x0_0 = coerceIn(x0, 0, this.width1 * 20 | 0);
    var x1_0 = coerceIn(x1, 0, this.width1 * 20 | 0);
    var a = x0_0 / 20 | 0;
    var b = x1_0 / 20 | 0;
    var y = y0 / 20 | 0;
    var i0 = coerceIn(a, 0, this.width1);
    var i1 = coerceIn(b, 0, this.width1);
    var i0m = x0_0 % 20;
    var i1m = x1_0 % 20;
    if (this.ny !== y) {
      if (y >= 0)
        this.flush();
      this.ny = y;
      this.reset();
    }if (this.ny0 !== y0) {
      this.ny0 = y0;
      this.subRowCount = this.subRowCount + 1 | 0;
    }if (i1 > i0) {
      this.segments.add_vux9f0$(i0, i1);
      this.put_24o109$(i0, 1.0 - i0m / 20);
      for (var x = i0 + 1 | 0; x < i1; x++)
        this.put_24o109$(x, 1.0);
      if (i1m !== 0)
        this.put_24o109$(i1, i1m / 20);
    }};
  Bitmap32Context2d$ScanlineWriter.prototype.computeAlpha_0 = function (v, p, left) {
    if (v === p)
      return 1.0;
    else if (v > p !== left) {
      var $receiver = v - p;
      return Math_0.abs($receiver);
    } else {
      var $receiver_0 = v - p;
      return 1.0 - Math_0.abs($receiver_0);
    }
  };
  Bitmap32Context2d$ScanlineWriter.prototype.put_24o109$ = function (x, ratio) {
    var mask = 1 << this.subRowCount;
    if ((this.hitbits[x] & mask) === 0) {
      this.hitbits[x] = this.hitbits[x] | mask;
      this.alpha[x] = this.alpha[x] + ratio;
    }};
  Bitmap32Context2d$ScanlineWriter.prototype.flush = function () {
    var tmp$, tmp$_0;
    tmp$ = this.$outer.bmp.height;
    tmp$_0 = this.ny;
    if (!(0 <= tmp$_0 && tmp$_0 < tmp$))
      return;
    var scale_0 = 1.0 / this.subRowCount;
    var $this = this.segments;
    this.$outer;
    var tmp$_1;
    tmp$_1 = $this.size;
    for (var n = 0; n < tmp$_1; n++) {
      var this$Bitmap32Context2d = this.$outer;
      var xmin = $this.xmin.getAt_za3lpa$(n);
      var xmax = $this.xmax.getAt_za3lpa$(n);
      var x = xmin;
      var count = xmax - xmin + 1 | 0;
      this.filler.fill_6ept6c$(this.color, 0, xmin, xmax, this.ny);
      for (var n_0 = xmin; n_0 <= xmax; n_0++)
        this.alpha[n_0] = this.alpha[n_0] * scale_0;
      scale(this.color, xmin, this.alpha, xmin, count);
      var index = this$Bitmap32Context2d.bmp.index_vux9f0$(0, this.ny) + x | 0;
      if (this$Bitmap32Context2d.bmp.premultiplied) {
        arrayCopy(this$Bitmap32Context2d.bmp.dataPremult.ints, this.origin.ints, x, index, index + count | 0);
      } else
        premultiply(this$Bitmap32Context2d.bmp.data, index, this.origin, x, count);
      this.compositeMode.blend_ylb2hq$(this.origin, x, this.color, x, count);
      if (this$Bitmap32Context2d.bmp.premultiplied) {
        arrayCopy(this.origin.ints, this$Bitmap32Context2d.bmp.dataPremult.ints, index, x, x + count | 0);
      } else
        depremultiply(this.origin, x, this$Bitmap32Context2d.bmp.data, index, count);
    }
  };
  Bitmap32Context2d$ScanlineWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScanlineWriter',
    interfaces: []
  };
  Bitmap32Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32Context2d',
    interfaces: [Renderer]
  };
  function CompositeOperation() {
    CompositeOperation$Companion_getInstance();
  }
  function CompositeOperation$Companion() {
    CompositeOperation$Companion_instance = this;
    this.UNIMPLEMENTED = CompositeOperation$Companion_getInstance().invoke_kkq9dd$(CompositeOperation$Companion$UNIMPLEMENTED$lambda);
  }
  function CompositeOperation$Companion$invoke$ObjectLiteral(closure$func) {
    this.closure$func = closure$func;
  }
  CompositeOperation$Companion$invoke$ObjectLiteral.prototype.blend_ylb2hq$ = function (dst, dstN, src, srcN, count) {
    this.closure$func(dst, dstN, src, srcN, count);
  };
  CompositeOperation$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CompositeOperation]
  };
  CompositeOperation$Companion.prototype.invoke_kkq9dd$ = function (func) {
    return new CompositeOperation$Companion$invoke$ObjectLiteral(func);
  };
  function CompositeOperation$Companion$UNIMPLEMENTED$lambda(dst, dstN, src, srcN, count) {
    mix_0(dst, dstN, src, srcN, count);
    return Unit;
  }
  CompositeOperation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CompositeOperation$Companion_instance = null;
  function CompositeOperation$Companion_getInstance() {
    if (CompositeOperation$Companion_instance === null) {
      new CompositeOperation$Companion();
    }return CompositeOperation$Companion_instance;
  }
  CompositeOperation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompositeOperation',
    interfaces: []
  };
  function get_DEFAULT($receiver) {
    return CompositeMode$Companion_getInstance().DEFAULT;
  }
  function get_CLEAR($receiver) {
    return CompositeMode$CLEAR_getInstance();
  }
  function get_COPY($receiver) {
    return CompositeMode$COPY_getInstance();
  }
  function get_SOURCE_OVER($receiver) {
    return CompositeMode$SOURCE_OVER_getInstance();
  }
  function get_DESTINATION_OVER($receiver) {
    return CompositeMode$DESTINATION_OVER_getInstance();
  }
  function get_SOURCE_IN($receiver) {
    return CompositeMode$SOURCE_IN_getInstance();
  }
  function get_DESTINATION_IN($receiver) {
    return CompositeMode$DESTINATION_IN_getInstance();
  }
  function get_SOURCE_OUT($receiver) {
    return CompositeMode$SOURCE_OUT_getInstance();
  }
  function get_DESTINATION_OUT($receiver) {
    return CompositeMode$DESTINATION_OUT_getInstance();
  }
  function get_SOURCE_ATOP($receiver) {
    return CompositeMode$SOURCE_ATOP_getInstance();
  }
  function get_DESTINATION_ATOP($receiver) {
    return CompositeMode$DESTINATION_ATOP_getInstance();
  }
  function get_XOR($receiver) {
    return CompositeMode$XOR_getInstance();
  }
  function get_LIGHTER($receiver) {
    return CompositeMode$LIGHTER_getInstance();
  }
  function get_NORMAL($receiver) {
    return BlendMode$NORMAL_getInstance();
  }
  function get_MULTIPLY($receiver) {
    return BlendMode$MULTIPLY_getInstance();
  }
  function get_SCREEN($receiver) {
    return BlendMode$SCREEN_getInstance();
  }
  function get_OVERLAY($receiver) {
    return BlendMode$OVERLAY_getInstance();
  }
  function get_DARKEN($receiver) {
    return BlendMode$DARKEN_getInstance();
  }
  function get_LIGHTEN($receiver) {
    return BlendMode$LIGHTEN_getInstance();
  }
  function get_COLOR_DODGE($receiver) {
    return BlendMode$COLOR_DODGE_getInstance();
  }
  function get_COLOR_BURN($receiver) {
    return BlendMode$COLOR_BURN_getInstance();
  }
  function get_HARD_LIGHT($receiver) {
    return BlendMode$HARD_LIGHT_getInstance();
  }
  function get_SOFT_LIGHT($receiver) {
    return BlendMode$SOFT_LIGHT_getInstance();
  }
  function get_DIFFERENCE($receiver) {
    return BlendMode$DIFFERENCE_getInstance();
  }
  function get_EXCLUSION($receiver) {
    return BlendMode$EXCLUSION_getInstance();
  }
  function get_HUE($receiver) {
    return BlendMode$HUE_getInstance();
  }
  function get_SATURATION($receiver) {
    return BlendMode$SATURATION_getInstance();
  }
  function get_COLOR($receiver) {
    return BlendMode$COLOR_getInstance();
  }
  function get_LUMINOSITY($receiver) {
    return BlendMode$LUMINOSITY_getInstance();
  }
  function CompositeMode(name, ordinal, op) {
    Enum.call(this);
    this.op = op;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CompositeMode_initFields() {
    CompositeMode_initFields = function () {
    };
    CompositeMode$CLEAR_instance = new CompositeMode('CLEAR', 0, CompositeOperation$Companion_getInstance().invoke_kkq9dd$(CompositeMode$CompositeMode$CLEAR_init$lambda));
    CompositeMode$COPY_instance = new CompositeMode('COPY', 1, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$SOURCE_OVER_instance = new CompositeMode('SOURCE_OVER', 2, CompositeOperation$Companion_getInstance().invoke_kkq9dd$(CompositeMode$CompositeMode$SOURCE_OVER_init$lambda));
    CompositeMode$DESTINATION_OVER_instance = new CompositeMode('DESTINATION_OVER', 3, CompositeOperation$Companion_getInstance().invoke_kkq9dd$(CompositeMode$CompositeMode$DESTINATION_OVER_init$lambda));
    CompositeMode$SOURCE_IN_instance = new CompositeMode('SOURCE_IN', 4, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$DESTINATION_IN_instance = new CompositeMode('DESTINATION_IN', 5, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$SOURCE_OUT_instance = new CompositeMode('SOURCE_OUT', 6, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$DESTINATION_OUT_instance = new CompositeMode('DESTINATION_OUT', 7, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$SOURCE_ATOP_instance = new CompositeMode('SOURCE_ATOP', 8, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$DESTINATION_ATOP_instance = new CompositeMode('DESTINATION_ATOP', 9, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$XOR_instance = new CompositeMode('XOR', 10, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$LIGHTER_instance = new CompositeMode('LIGHTER', 11, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    CompositeMode$Companion_getInstance();
  }
  function CompositeMode$CompositeMode$CLEAR_init$lambda(dst, dstN, src, srcN, count) {
    for (var n = 0; n < count; n++) {
      var d = dst.get_za3lpa$(dstN + n | 0);
      var s = src.get_za3lpa$(srcN + n | 0);
      dst.set_wpz7qp$(dstN + n | 0, d.depremultiplied.withA_za3lpa$(clamp0_255(d.a - s.a | 0)).premultiplied);
    }
    return Unit;
  }
  var CompositeMode$CLEAR_instance;
  function CompositeMode$CLEAR_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$CLEAR_instance;
  }
  var CompositeMode$COPY_instance;
  function CompositeMode$COPY_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$COPY_instance;
  }
  function CompositeMode$CompositeMode$SOURCE_OVER_init$lambda(dst, dstN, src, srcN, count) {
    mix_1(dst, dstN, dst, dstN, src, srcN, count);
    return Unit;
  }
  var CompositeMode$SOURCE_OVER_instance;
  function CompositeMode$SOURCE_OVER_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$SOURCE_OVER_instance;
  }
  function CompositeMode$CompositeMode$DESTINATION_OVER_init$lambda(dst, dstN, src, srcN, count) {
    mix_1(dst, dstN, src, srcN, dst, dstN, count);
    return Unit;
  }
  var CompositeMode$DESTINATION_OVER_instance;
  function CompositeMode$DESTINATION_OVER_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$DESTINATION_OVER_instance;
  }
  var CompositeMode$SOURCE_IN_instance;
  function CompositeMode$SOURCE_IN_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$SOURCE_IN_instance;
  }
  var CompositeMode$DESTINATION_IN_instance;
  function CompositeMode$DESTINATION_IN_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$DESTINATION_IN_instance;
  }
  var CompositeMode$SOURCE_OUT_instance;
  function CompositeMode$SOURCE_OUT_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$SOURCE_OUT_instance;
  }
  var CompositeMode$DESTINATION_OUT_instance;
  function CompositeMode$DESTINATION_OUT_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$DESTINATION_OUT_instance;
  }
  var CompositeMode$SOURCE_ATOP_instance;
  function CompositeMode$SOURCE_ATOP_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$SOURCE_ATOP_instance;
  }
  var CompositeMode$DESTINATION_ATOP_instance;
  function CompositeMode$DESTINATION_ATOP_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$DESTINATION_ATOP_instance;
  }
  var CompositeMode$XOR_instance;
  function CompositeMode$XOR_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$XOR_instance;
  }
  var CompositeMode$LIGHTER_instance;
  function CompositeMode$LIGHTER_getInstance() {
    CompositeMode_initFields();
    return CompositeMode$LIGHTER_instance;
  }
  function CompositeMode$Companion() {
    CompositeMode$Companion_instance = this;
  }
  Object.defineProperty(CompositeMode$Companion.prototype, 'DEFAULT', {
    get: function () {
      return CompositeMode$SOURCE_OVER_getInstance();
    }
  });
  CompositeMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CompositeMode$Companion_instance = null;
  function CompositeMode$Companion_getInstance() {
    CompositeMode_initFields();
    if (CompositeMode$Companion_instance === null) {
      new CompositeMode$Companion();
    }return CompositeMode$Companion_instance;
  }
  CompositeMode.prototype.blend_ylb2hq$ = function (dst, dstN, src, srcN, count) {
    return this.op.blend_ylb2hq$(dst, dstN, src, srcN, count);
  };
  CompositeMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeMode',
    interfaces: [CompositeOperation, Enum]
  };
  function CompositeMode$values() {
    return [CompositeMode$CLEAR_getInstance(), CompositeMode$COPY_getInstance(), CompositeMode$SOURCE_OVER_getInstance(), CompositeMode$DESTINATION_OVER_getInstance(), CompositeMode$SOURCE_IN_getInstance(), CompositeMode$DESTINATION_IN_getInstance(), CompositeMode$SOURCE_OUT_getInstance(), CompositeMode$DESTINATION_OUT_getInstance(), CompositeMode$SOURCE_ATOP_getInstance(), CompositeMode$DESTINATION_ATOP_getInstance(), CompositeMode$XOR_getInstance(), CompositeMode$LIGHTER_getInstance()];
  }
  CompositeMode.values = CompositeMode$values;
  function CompositeMode$valueOf(name) {
    switch (name) {
      case 'CLEAR':
        return CompositeMode$CLEAR_getInstance();
      case 'COPY':
        return CompositeMode$COPY_getInstance();
      case 'SOURCE_OVER':
        return CompositeMode$SOURCE_OVER_getInstance();
      case 'DESTINATION_OVER':
        return CompositeMode$DESTINATION_OVER_getInstance();
      case 'SOURCE_IN':
        return CompositeMode$SOURCE_IN_getInstance();
      case 'DESTINATION_IN':
        return CompositeMode$DESTINATION_IN_getInstance();
      case 'SOURCE_OUT':
        return CompositeMode$SOURCE_OUT_getInstance();
      case 'DESTINATION_OUT':
        return CompositeMode$DESTINATION_OUT_getInstance();
      case 'SOURCE_ATOP':
        return CompositeMode$SOURCE_ATOP_getInstance();
      case 'DESTINATION_ATOP':
        return CompositeMode$DESTINATION_ATOP_getInstance();
      case 'XOR':
        return CompositeMode$XOR_getInstance();
      case 'LIGHTER':
        return CompositeMode$LIGHTER_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.CompositeMode.' + name);
    }
  }
  CompositeMode.valueOf_61zpoe$ = CompositeMode$valueOf;
  function BlendMode(name, ordinal, op) {
    Enum.call(this);
    this.op = op;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlendMode_initFields() {
    BlendMode_initFields = function () {
    };
    BlendMode$NORMAL_instance = new BlendMode('NORMAL', 0, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$MULTIPLY_instance = new BlendMode('MULTIPLY', 1, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$SCREEN_instance = new BlendMode('SCREEN', 2, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$OVERLAY_instance = new BlendMode('OVERLAY', 3, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$DARKEN_instance = new BlendMode('DARKEN', 4, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$LIGHTEN_instance = new BlendMode('LIGHTEN', 5, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 6, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$COLOR_BURN_instance = new BlendMode('COLOR_BURN', 7, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 8, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 9, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$DIFFERENCE_instance = new BlendMode('DIFFERENCE', 10, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$EXCLUSION_instance = new BlendMode('EXCLUSION', 11, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$HUE_instance = new BlendMode('HUE', 12, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$SATURATION_instance = new BlendMode('SATURATION', 13, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$COLOR_instance = new BlendMode('COLOR', 14, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
    BlendMode$LUMINOSITY_instance = new BlendMode('LUMINOSITY', 15, CompositeOperation$Companion_getInstance().UNIMPLEMENTED);
  }
  var BlendMode$NORMAL_instance;
  function BlendMode$NORMAL_getInstance() {
    BlendMode_initFields();
    return BlendMode$NORMAL_instance;
  }
  var BlendMode$MULTIPLY_instance;
  function BlendMode$MULTIPLY_getInstance() {
    BlendMode_initFields();
    return BlendMode$MULTIPLY_instance;
  }
  var BlendMode$SCREEN_instance;
  function BlendMode$SCREEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$SCREEN_instance;
  }
  var BlendMode$OVERLAY_instance;
  function BlendMode$OVERLAY_getInstance() {
    BlendMode_initFields();
    return BlendMode$OVERLAY_instance;
  }
  var BlendMode$DARKEN_instance;
  function BlendMode$DARKEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$DARKEN_instance;
  }
  var BlendMode$LIGHTEN_instance;
  function BlendMode$LIGHTEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$LIGHTEN_instance;
  }
  var BlendMode$COLOR_DODGE_instance;
  function BlendMode$COLOR_DODGE_getInstance() {
    BlendMode_initFields();
    return BlendMode$COLOR_DODGE_instance;
  }
  var BlendMode$COLOR_BURN_instance;
  function BlendMode$COLOR_BURN_getInstance() {
    BlendMode_initFields();
    return BlendMode$COLOR_BURN_instance;
  }
  var BlendMode$HARD_LIGHT_instance;
  function BlendMode$HARD_LIGHT_getInstance() {
    BlendMode_initFields();
    return BlendMode$HARD_LIGHT_instance;
  }
  var BlendMode$SOFT_LIGHT_instance;
  function BlendMode$SOFT_LIGHT_getInstance() {
    BlendMode_initFields();
    return BlendMode$SOFT_LIGHT_instance;
  }
  var BlendMode$DIFFERENCE_instance;
  function BlendMode$DIFFERENCE_getInstance() {
    BlendMode_initFields();
    return BlendMode$DIFFERENCE_instance;
  }
  var BlendMode$EXCLUSION_instance;
  function BlendMode$EXCLUSION_getInstance() {
    BlendMode_initFields();
    return BlendMode$EXCLUSION_instance;
  }
  var BlendMode$HUE_instance;
  function BlendMode$HUE_getInstance() {
    BlendMode_initFields();
    return BlendMode$HUE_instance;
  }
  var BlendMode$SATURATION_instance;
  function BlendMode$SATURATION_getInstance() {
    BlendMode_initFields();
    return BlendMode$SATURATION_instance;
  }
  var BlendMode$COLOR_instance;
  function BlendMode$COLOR_getInstance() {
    BlendMode_initFields();
    return BlendMode$COLOR_instance;
  }
  var BlendMode$LUMINOSITY_instance;
  function BlendMode$LUMINOSITY_getInstance() {
    BlendMode_initFields();
    return BlendMode$LUMINOSITY_instance;
  }
  BlendMode.prototype.blend_ylb2hq$ = function (dst, dstN, src, srcN, count) {
    return this.op.blend_ylb2hq$(dst, dstN, src, srcN, count);
  };
  BlendMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendMode',
    interfaces: [CompositeOperation, Enum]
  };
  function BlendMode$values() {
    return [BlendMode$NORMAL_getInstance(), BlendMode$MULTIPLY_getInstance(), BlendMode$SCREEN_getInstance(), BlendMode$OVERLAY_getInstance(), BlendMode$DARKEN_getInstance(), BlendMode$LIGHTEN_getInstance(), BlendMode$COLOR_DODGE_getInstance(), BlendMode$COLOR_BURN_getInstance(), BlendMode$HARD_LIGHT_getInstance(), BlendMode$SOFT_LIGHT_getInstance(), BlendMode$DIFFERENCE_getInstance(), BlendMode$EXCLUSION_getInstance(), BlendMode$HUE_getInstance(), BlendMode$SATURATION_getInstance(), BlendMode$COLOR_getInstance(), BlendMode$LUMINOSITY_getInstance()];
  }
  BlendMode.values = BlendMode$values;
  function BlendMode$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return BlendMode$NORMAL_getInstance();
      case 'MULTIPLY':
        return BlendMode$MULTIPLY_getInstance();
      case 'SCREEN':
        return BlendMode$SCREEN_getInstance();
      case 'OVERLAY':
        return BlendMode$OVERLAY_getInstance();
      case 'DARKEN':
        return BlendMode$DARKEN_getInstance();
      case 'LIGHTEN':
        return BlendMode$LIGHTEN_getInstance();
      case 'COLOR_DODGE':
        return BlendMode$COLOR_DODGE_getInstance();
      case 'COLOR_BURN':
        return BlendMode$COLOR_BURN_getInstance();
      case 'HARD_LIGHT':
        return BlendMode$HARD_LIGHT_getInstance();
      case 'SOFT_LIGHT':
        return BlendMode$SOFT_LIGHT_getInstance();
      case 'DIFFERENCE':
        return BlendMode$DIFFERENCE_getInstance();
      case 'EXCLUSION':
        return BlendMode$EXCLUSION_getInstance();
      case 'HUE':
        return BlendMode$HUE_getInstance();
      case 'SATURATION':
        return BlendMode$SATURATION_getInstance();
      case 'COLOR':
        return BlendMode$COLOR_getInstance();
      case 'LUMINOSITY':
        return BlendMode$LUMINOSITY_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.BlendMode.' + name);
    }
  }
  BlendMode.valueOf_61zpoe$ = BlendMode$valueOf;
  function Context2d(renderer) {
    this.renderer = renderer;
    this.state = new Context2d$State();
    this.stack_jt1krc$_0 = new TGenStack();
    this.moveX = 0.0;
    this.moveY = 0.0;
    this.lastX_g7lyn2$_0 = 0.0;
    this.lastY_g7lynx$_0 = 0.0;
  }
  Object.defineProperty(Context2d.prototype, 'debug', {
    get: function () {
      return this.renderer.debug;
    },
    set: function (value) {
      this.renderer.debug = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'rendererWidth', {
    get: function () {
      return this.renderer.width;
    }
  });
  Object.defineProperty(Context2d.prototype, 'rendererHeight', {
    get: function () {
      return this.renderer.height;
    }
  });
  Context2d.prototype.rendererRender_w64o9o$ = function (state, fill) {
    this.renderer.render_w64o9o$(state, fill);
  };
  Context2d.prototype.rendererDrawImage_r3wwxz$$default = function (image, x, y, width, height, transform) {
    this.renderer.drawImage_r3wwxz$(image, x, y, width, height, transform);
  };
  Context2d.prototype.rendererDrawImage_r3wwxz$ = function (image, x, y, width, height, transform, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (transform === void 0)
      transform = new Matrix();
    callback$default ? callback$default(image, x, y, width, height, transform) : this.rendererDrawImage_r3wwxz$$default(image, x, y, width, height, transform);
  };
  Context2d.prototype.rendererDispose = function () {
    this.renderer.dispose();
  };
  Context2d.prototype.rendererBufferingStart = function () {
    return this.renderer.bufferingStart();
  };
  Context2d.prototype.rendererBufferingEnd = function () {
    this.renderer.bufferingEnd();
  };
  Context2d.prototype.rendererRenderSystemText_tzo0ny$ = function (state, font, fontSize, text, x, y, fill) {
    drawText_0(font, this, fontSize, text, fill ? state.fillStyle : state.strokeStyle, x, y, fill);
  };
  Context2d.prototype.fillText_ai6r6m$ = function (text, x, y) {
    this.rendererRenderSystemText_tzo0ny$(this.state, this.font, this.fontSize, text, x, y, true);
  };
  Context2d.prototype.strokeText_ai6r6m$ = function (text, x, y) {
    this.rendererRenderSystemText_tzo0ny$(this.state, this.font, this.fontSize, text, x, y, false);
  };
  Object.defineProperty(Context2d.prototype, 'width', {
    get: function () {
      return this.rendererWidth;
    }
  });
  Object.defineProperty(Context2d.prototype, 'height', {
    get: function () {
      return this.rendererHeight;
    }
  });
  Context2d.prototype.dispose = function () {
    this.rendererDispose();
  };
  Context2d.prototype.withScaledRenderer_lu1900$ = function (scaleX, scaleY) {
    if (scaleY === void 0)
      scaleY = scaleX;
    return scaleX === 1.0 && scaleY === 1.0 ? this : new Context2d(new Context2d$ScaledRenderer(this.renderer, scaleX, scaleY));
  };
  function Context2d$ScaledRenderer(parent, scaleX, scaleY) {
    Renderer.call(this);
    this.parent = parent;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  Object.defineProperty(Context2d$ScaledRenderer.prototype, 'width', {
    get: function () {
      return numberToInt(this.parent.width / this.scaleX);
    }
  });
  Object.defineProperty(Context2d$ScaledRenderer.prototype, 'height', {
    get: function () {
      return numberToInt(this.parent.height / this.scaleY);
    }
  });
  Context2d$ScaledRenderer.prototype.adjustMatrix_0 = function (transform, callback) {
    var keep_vbqeof$result;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      keep_vbqeof$result = callback();
    }finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
    return keep_vbqeof$result;
  };
  Context2d$ScaledRenderer.prototype.adjustState_0 = function (state, callback) {
    var transform = state.transform;
    var keep_vbqeof$result;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      keep_vbqeof$result = callback();
    }finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
    return keep_vbqeof$result;
  };
  Context2d$ScaledRenderer.prototype.render_w64o9o$ = function (state, fill) {
    var transform = state.transform;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.render_w64o9o$(state, fill);
    }finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.prototype.drawImage_r3wwxz$$default = function (image, x, y, width, height, transform) {
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.drawImage_r3wwxz$(image, x, y, width, height, transform);
    }finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaledRenderer',
    interfaces: [Renderer]
  };
  Context2d.prototype.buffering_klfg04$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.buffering_klfg04$', function (callback) {
    this.rendererBufferingStart();
    try {
      return callback();
    }finally {
      this.rendererBufferingEnd();
    }
  });
  function Context2d$State(transform, clip, path, lineScaleMode, lineWidth, startLineCap, endLineCap, lineJoin, miterLimit, strokeStyle, fillStyle, fontRegistry, font, fontSize, verticalAlign, horizontalAlign, globalAlpha, globalCompositeOperation) {
    if (transform === void 0)
      transform = new Matrix();
    if (clip === void 0)
      clip = null;
    if (path === void 0)
      path = new GraphicsPath();
    if (lineScaleMode === void 0)
      lineScaleMode = LineScaleMode$NORMAL_getInstance();
    if (lineWidth === void 0)
      lineWidth = 1.0;
    if (startLineCap === void 0)
      startLineCap = LineCap.BUTT;
    if (endLineCap === void 0)
      endLineCap = LineCap.BUTT;
    if (lineJoin === void 0)
      lineJoin = LineJoin.MITER;
    if (miterLimit === void 0)
      miterLimit = 4.0;
    if (strokeStyle === void 0)
      strokeStyle = DefaultPaint_getInstance();
    if (fillStyle === void 0)
      fillStyle = DefaultPaint_getInstance();
    if (fontRegistry === void 0)
      fontRegistry = SystemFontRegistry_getInstance();
    if (font === void 0)
      font = SystemFontRegistry_getInstance().DEFAULT_FONT;
    if (fontSize === void 0)
      fontSize = 24.0;
    if (verticalAlign === void 0)
      verticalAlign = VerticalAlign$Companion_getInstance().BASELINE;
    if (horizontalAlign === void 0)
      horizontalAlign = HorizontalAlign$Companion_getInstance().LEFT;
    if (globalAlpha === void 0)
      globalAlpha = 1.0;
    if (globalCompositeOperation === void 0)
      globalCompositeOperation = CompositeMode$SOURCE_OVER_getInstance();
    this.transform = transform;
    this.clip = clip;
    this.path = path;
    this.lineScaleMode = lineScaleMode;
    this.lineWidth = lineWidth;
    this.startLineCap = startLineCap;
    this.endLineCap = endLineCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.fontRegistry = fontRegistry;
    this.font = font;
    this.fontSize = fontSize;
    this.verticalAlign = verticalAlign;
    this.horizontalAlign = horizontalAlign;
    this.globalAlpha = globalAlpha;
    this.globalCompositeOperation = globalCompositeOperation;
  }
  Object.defineProperty(Context2d$State.prototype, 'scaledLineWidth', {
    get: function () {
      return this.lineWidth * ((this.transform.a + this.transform.d) * 0.5);
    }
  });
  Object.defineProperty(Context2d$State.prototype, 'lineCap', {
    get: function () {
      return this.startLineCap;
    },
    set: function (value) {
      this.startLineCap = value;
      this.endLineCap = value;
    }
  });
  Context2d$State.prototype.fillOrStrokeStyle_6taknv$ = function (fill) {
    return fill ? this.fillStyle : this.strokeStyle;
  };
  Context2d$State.prototype.clone = function () {
    var tmp$;
    return this.copy_tc524n$(this.transform.clone(), (tmp$ = this.clip) != null ? tmp$.clone() : null, this.path.clone());
  };
  Context2d$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  Context2d$State.prototype.component1 = function () {
    return this.transform;
  };
  Context2d$State.prototype.component2 = function () {
    return this.clip;
  };
  Context2d$State.prototype.component3 = function () {
    return this.path;
  };
  Context2d$State.prototype.component4 = function () {
    return this.lineScaleMode;
  };
  Context2d$State.prototype.component5 = function () {
    return this.lineWidth;
  };
  Context2d$State.prototype.component6 = function () {
    return this.startLineCap;
  };
  Context2d$State.prototype.component7 = function () {
    return this.endLineCap;
  };
  Context2d$State.prototype.component8 = function () {
    return this.lineJoin;
  };
  Context2d$State.prototype.component9 = function () {
    return this.miterLimit;
  };
  Context2d$State.prototype.component10 = function () {
    return this.strokeStyle;
  };
  Context2d$State.prototype.component11 = function () {
    return this.fillStyle;
  };
  Context2d$State.prototype.component12 = function () {
    return this.fontRegistry;
  };
  Context2d$State.prototype.component13 = function () {
    return this.font;
  };
  Context2d$State.prototype.component14 = function () {
    return this.fontSize;
  };
  Context2d$State.prototype.component15 = function () {
    return this.verticalAlign;
  };
  Context2d$State.prototype.component16 = function () {
    return this.horizontalAlign;
  };
  Context2d$State.prototype.component17 = function () {
    return this.globalAlpha;
  };
  Context2d$State.prototype.component18 = function () {
    return this.globalCompositeOperation;
  };
  Context2d$State.prototype.copy_tc524n$ = function (transform, clip, path, lineScaleMode, lineWidth, startLineCap, endLineCap, lineJoin, miterLimit, strokeStyle, fillStyle, fontRegistry, font, fontSize, verticalAlign, horizontalAlign, globalAlpha, globalCompositeOperation) {
    return new Context2d$State(transform === void 0 ? this.transform : transform, clip === void 0 ? this.clip : clip, path === void 0 ? this.path : path, lineScaleMode === void 0 ? this.lineScaleMode : lineScaleMode, lineWidth === void 0 ? this.lineWidth : lineWidth, startLineCap === void 0 ? this.startLineCap : startLineCap, endLineCap === void 0 ? this.endLineCap : endLineCap, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit, strokeStyle === void 0 ? this.strokeStyle : strokeStyle, fillStyle === void 0 ? this.fillStyle : fillStyle, fontRegistry === void 0 ? this.fontRegistry : fontRegistry, font === void 0 ? this.font : font, fontSize === void 0 ? this.fontSize : fontSize, verticalAlign === void 0 ? this.verticalAlign : verticalAlign, horizontalAlign === void 0 ? this.horizontalAlign : horizontalAlign, globalAlpha === void 0 ? this.globalAlpha : globalAlpha, globalCompositeOperation === void 0 ? this.globalCompositeOperation : globalCompositeOperation);
  };
  Context2d$State.prototype.toString = function () {
    return 'State(transform=' + Kotlin.toString(this.transform) + (', clip=' + Kotlin.toString(this.clip)) + (', path=' + Kotlin.toString(this.path)) + (', lineScaleMode=' + Kotlin.toString(this.lineScaleMode)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + (', startLineCap=' + Kotlin.toString(this.startLineCap)) + (', endLineCap=' + Kotlin.toString(this.endLineCap)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + (', strokeStyle=' + Kotlin.toString(this.strokeStyle)) + (', fillStyle=' + Kotlin.toString(this.fillStyle)) + (', fontRegistry=' + Kotlin.toString(this.fontRegistry)) + (', font=' + Kotlin.toString(this.font)) + (', fontSize=' + Kotlin.toString(this.fontSize)) + (', verticalAlign=' + Kotlin.toString(this.verticalAlign)) + (', horizontalAlign=' + Kotlin.toString(this.horizontalAlign)) + (', globalAlpha=' + Kotlin.toString(this.globalAlpha)) + (', globalCompositeOperation=' + Kotlin.toString(this.globalCompositeOperation)) + ')';
  };
  Context2d$State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineScaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.startLineCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.endLineCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    result = result * 31 + Kotlin.hashCode(this.strokeStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fontRegistry) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.fontSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.verticalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.horizontalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.globalAlpha) | 0;
    result = result * 31 + Kotlin.hashCode(this.globalCompositeOperation) | 0;
    return result;
  };
  Context2d$State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.lineScaleMode, other.lineScaleMode) && Kotlin.equals(this.lineWidth, other.lineWidth) && Kotlin.equals(this.startLineCap, other.startLineCap) && Kotlin.equals(this.endLineCap, other.endLineCap) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit) && Kotlin.equals(this.strokeStyle, other.strokeStyle) && Kotlin.equals(this.fillStyle, other.fillStyle) && Kotlin.equals(this.fontRegistry, other.fontRegistry) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.fontSize, other.fontSize) && Kotlin.equals(this.verticalAlign, other.verticalAlign) && Kotlin.equals(this.horizontalAlign, other.horizontalAlign) && Kotlin.equals(this.globalAlpha, other.globalAlpha) && Kotlin.equals(this.globalCompositeOperation, other.globalCompositeOperation)))));
  };
  Object.defineProperty(Context2d.prototype, 'lineScaleMode', {
    get: function () {
      return this.state.lineScaleMode;
    },
    set: function (value) {
      this.state.lineScaleMode = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineWidth', {
    get: function () {
      return this.state.lineWidth;
    },
    set: function (value) {
      this.state.lineWidth = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineCap', {
    get: function () {
      return this.state.lineCap;
    },
    set: function (value) {
      this.state.lineCap = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'startLineCap', {
    get: function () {
      return this.state.startLineCap;
    },
    set: function (value) {
      this.state.startLineCap = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'endLineCap', {
    get: function () {
      return this.state.endLineCap;
    },
    set: function (value) {
      this.state.endLineCap = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineJoin', {
    get: function () {
      return this.state.lineJoin;
    },
    set: function (value) {
      this.state.lineJoin = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'strokeStyle', {
    get: function () {
      return this.state.strokeStyle;
    },
    set: function (value) {
      this.state.strokeStyle = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'fillStyle', {
    get: function () {
      return this.state.fillStyle;
    },
    set: function (value) {
      this.state.fillStyle = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'fontRegistry', {
    get: function () {
      return this.state.fontRegistry;
    },
    set: function (value) {
      this.state.fontRegistry = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'font', {
    get: function () {
      return this.state.font;
    },
    set: function (value) {
      this.state.font = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'fontName', {
    get: function () {
      return this.font.name;
    },
    set: function (value) {
      this.font = this.fontRegistry.get_61zpoe$(value);
    }
  });
  Object.defineProperty(Context2d.prototype, 'fontSize', {
    get: function () {
      return this.state.fontSize;
    },
    set: function (value) {
      this.state.fontSize = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'verticalAlign', {
    get: function () {
      return this.state.verticalAlign;
    },
    set: function (value) {
      this.state.verticalAlign = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'horizontalAlign', {
    get: function () {
      return this.state.horizontalAlign;
    },
    set: function (value) {
      this.state.horizontalAlign = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'globalAlpha', {
    get: function () {
      return this.state.globalAlpha;
    },
    set: function (value) {
      this.state.globalAlpha = value;
    }
  });
  Object.defineProperty(Context2d.prototype, 'globalCompositeOperation', {
    get: function () {
      return this.state.globalCompositeOperation;
    },
    set: function (value) {
      this.state.globalCompositeOperation = value;
    }
  });
  Context2d.prototype.fillStyle_gongu6$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillStyle_gongu6$', function (paint, callback) {
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      callback();
    }finally {
      this.fillStyle = oldStyle;
    }
  });
  Context2d.prototype.strokeStyle_gongu6$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.strokeStyle_gongu6$', function (paint, callback) {
    var oldStyle = this.strokeStyle;
    this.strokeStyle = paint;
    try {
      callback();
    }finally {
      this.strokeStyle = oldStyle;
    }
  });
  Context2d.prototype.font_y0i34x$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.font_y0i34x$', function (font, halign, valign, fontSize, callback) {
    if (font === void 0)
      font = this.font;
    if (halign === void 0)
      halign = this.horizontalAlign;
    if (valign === void 0)
      valign = this.verticalAlign;
    if (fontSize === void 0)
      fontSize = this.fontSize;
    var oldFont = this.font;
    var oldFontSize = this.fontSize;
    var oldHalign = this.horizontalAlign;
    var oldValign = this.verticalAlign;
    try {
      this.font = font;
      this.fontSize = fontSize;
      this.horizontalAlign = halign;
      this.verticalAlign = valign;
      callback();
    }finally {
      this.font = oldFont;
      this.fontSize = oldFontSize;
      this.horizontalAlign = oldHalign;
      this.verticalAlign = oldValign;
    }
  });
  Context2d.prototype.fillStyle_2rievy$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillStyle_2rievy$', function (color, callback) {
    var paint = this.createColor_md34sx$(color);
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      callback();
    }finally {
      this.fillStyle = oldStyle;
    }
  });
  Context2d.prototype.keepApply_hqcxwp$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.keepApply_hqcxwp$', function (callback) {
    this.save();
    try {
      callback(this);
    }finally {
      this.restore();
    }
    return this;
  });
  Context2d.prototype.keep_o14v8n$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.keep_o14v8n$', function (callback) {
    this.save();
    try {
      callback();
    }finally {
      this.restore();
    }
  });
  Context2d.prototype.keepTransform_o14v8n$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.keepTransform_o14v8n$', function (callback) {
    var t = this.state.transform;
    var a = t.a;
    var b = t.b;
    var c = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      callback();
    }finally {
      t.setTo_15yvbs$(a, b, c, d, tx, ty);
    }
  });
  Context2d.prototype.save = function () {
    return this.stack_jt1krc$_0.push_11rb$(this.state.clone());
  };
  Context2d.prototype.restore = function () {
    this.state = this.stack_jt1krc$_0.pop();
  };
  Context2d.prototype.scale_z8e4lc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.scale_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (sx, sy) {
      if (sy === void 0)
        sy = sx;
      return this.scale_lu1900$(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Context2d.prototype.translate_z8e4lc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.translate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (tx, ty) {
      return this.translate_lu1900$(numberToDouble(tx), numberToDouble(ty));
    };
  }));
  Context2d.prototype.rotate_3p81yu$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.rotate_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.rotate_14dthe$(numberToDouble(angle));
    };
  }));
  Context2d.prototype.rotateDeg_3p81yu$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.rotateDeg_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (degs) {
      return this.rotateDeg_14dthe$(numberToDouble(degs));
    };
  }));
  Context2d.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.state.transform.prescale_lu1900$(sx, sy);
  };
  Context2d.prototype.rotate_4crm0z$ = function (angle) {
    return this.state.transform.prerotate_4crm0z$(angle);
  };
  Context2d.prototype.rotate_14dthe$ = function (angle) {
    return this.state.transform.prerotate_4crm0z$(get_radians(angle));
  };
  Context2d.prototype.rotateDeg_14dthe$ = function (degs) {
    return this.state.transform.prerotate_4crm0z$(get_degrees(degs));
  };
  Context2d.prototype.translate_lu1900$ = function (tx, ty) {
    return this.state.transform.pretranslate_lu1900$(tx, ty);
  };
  Context2d.prototype.transform_1ktkmn$ = function (m) {
    return this.state.transform.premultiply_1ktkmn$(m);
  };
  Context2d.prototype.transform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.premultiply_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.setTransform_1ktkmn$ = function (m) {
    return this.state.transform.copyFrom_1ktkmn$(m);
  };
  Context2d.prototype.setTransform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.setTo_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.shear_lu1900$ = function (sx, sy) {
    return this.transform_15yvbs$(1.0, sy, sx, 1.0, 0.0, 0.0);
  };
  Object.defineProperty(Context2d.prototype, 'lastX', {
    get: function () {
      return this.lastX_g7lyn2$_0;
    },
    set: function (lastX) {
      this.lastX_g7lyn2$_0 = lastX;
    }
  });
  Object.defineProperty(Context2d.prototype, 'lastY', {
    get: function () {
      return this.lastY_g7lynx$_0;
    },
    set: function (lastY) {
      this.lastY_g7lynx$_0 = lastY;
    }
  });
  Object.defineProperty(Context2d.prototype, 'totalPoints', {
    get: function () {
      return this.state.path.totalPoints;
    }
  });
  Context2d.prototype.close = function () {
    this.state.path.close();
    this.lastX = this.moveX;
    this.lastY = this.moveY;
  };
  Context2d.prototype.transX_foh9p0$_0 = function (x, y) {
    return this.state.transform.transformX_lu1900$(x, y);
  };
  Context2d.prototype.transY_47tp03$_0 = function (x, y) {
    return this.state.transform.transformY_lu1900$(x, y);
  };
  Context2d.prototype.moveTo_lu1900$ = function (x, y) {
    this.state.path.moveTo_lu1900$(this.transX_foh9p0$_0(x, y), this.transY_47tp03$_0(x, y));
    this.lastX = x;
    this.lastY = y;
    this.moveX = x;
    this.moveY = y;
  };
  Context2d.prototype.lineTo_lu1900$ = function (x, y) {
    this.state.path.lineTo_lu1900$(this.transX_foh9p0$_0(x, y), this.transY_47tp03$_0(x, y));
    this.lastX = x;
    this.lastY = y;
  };
  Context2d.prototype.quadTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.quadTo_6y0v78$(this.transX_foh9p0$_0(cx, cy), this.transY_47tp03$_0(cx, cy), this.transX_foh9p0$_0(ax, ay), this.transY_47tp03$_0(ax, ay));
    this.lastX = ax;
    this.lastY = ay;
  };
  Context2d.prototype.cubicTo_15yvbs$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.state.path.cubicTo_15yvbs$(this.transX_foh9p0$_0(cx1, cy1), this.transY_47tp03$_0(cx1, cy1), this.transX_foh9p0$_0(cx2, cy2), this.transY_47tp03$_0(cx2, cy2), this.transX_foh9p0$_0(ax, ay), this.transY_47tp03$_0(ax, ay));
    this.lastX = ax;
    this.lastY = ay;
  };
  Context2d.prototype.strokeRect_1ugm5o$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.strokeRect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.strokeRect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.fillRect_1ugm5o$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillRect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.fillRect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.fillRoundRect_9wz194$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillRoundRect_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var roundRect = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.roundRect_eslsqu$;
    return function (x, y, width, height, rx, ry) {
      if (ry === void 0)
        ry = rx;
      this.beginPath();
      roundRect(this, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height), numberToDouble(rx), numberToDouble(ry));
      this.fill();
    };
  }));
  Context2d.prototype.strokeDot_lu1900$ = function (x, y) {
    this.beginPath();
    this.moveTo_lu1900$(x, y);
    this.lineTo_lu1900$(x, y);
    this.stroke();
  };
  Context2d.prototype.path_lcui0n$ = function (path) {
    write_0(this, path);
  };
  Context2d.prototype.draw_x1nmjt$ = function (d) {
    d.draw_vuz2tk$(this);
  };
  Context2d.prototype.strokeRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    rect(this, x, y, width, height);
    this.stroke();
  };
  Context2d.prototype.fillRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    rect(this, x, y, width, height);
    this.fill();
  };
  Context2d.prototype.beginPath = function () {
    this.state.path = new GraphicsPath();
  };
  Context2d.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = Rectangle.Companion.invoke();
    return this.state.path.getBounds_iqjpvb$(out);
  };
  Context2d.prototype.stroke = function () {
    if (!equals(this.state.strokeStyle, NonePaint_getInstance()))
      this.rendererRender_w64o9o$(this.state, false);
  };
  Context2d.prototype.fill = function () {
    if (!equals(this.state.fillStyle, NonePaint_getInstance()))
      this.rendererRender_w64o9o$(this.state, true);
  };
  Context2d.prototype.fill_9bhh2t$ = function (paint) {
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      this.fill();
    }finally {
      this.fillStyle = oldStyle;
    }
  };
  Context2d.prototype.stroke_9bhh2t$ = function (paint) {
    var oldStyle = this.strokeStyle;
    this.strokeStyle = paint;
    try {
      this.stroke();
    }finally {
      this.strokeStyle = oldStyle;
    }
  };
  Context2d.prototype.fill_2rievy$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fill_2rievy$', wrapFunction(function () {
    var ColorPaint_init = _.com.soywiz.korim.vector.paint.ColorPaint;
    return function (color, block) {
      block();
      this.fill_9bhh2t$(new ColorPaint_init(color));
    };
  }));
  Context2d.prototype.fill_gongu6$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fill_gongu6$', function (paint, block) {
    block();
    this.fill_9bhh2t$(paint);
  });
  Context2d.prototype.stroke_5vut8i$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.stroke_5vut8i$', function (paint, lineWidth, lineCap, lineJoin, callback) {
    if (lineWidth === void 0)
      lineWidth = this.lineWidth;
    if (lineCap === void 0)
      lineCap = this.lineCap;
    if (lineJoin === void 0)
      lineJoin = this.lineJoin;
    callback();
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.lineJoin = lineJoin;
    this.stroke_9bhh2t$(paint);
  });
  Context2d.prototype.stroke_awoogq$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.stroke_awoogq$', wrapFunction(function () {
    var ColorPaint_init = _.com.soywiz.korim.vector.paint.ColorPaint;
    return function (color, lineWidth, lineCap, lineJoin, callback) {
      if (lineWidth === void 0)
        lineWidth = this.lineWidth;
      if (lineCap === void 0)
        lineCap = this.lineCap;
      if (lineJoin === void 0)
        lineJoin = this.lineJoin;
      callback();
      this.lineWidth = lineWidth;
      this.lineCap = lineCap;
      this.lineJoin = lineJoin;
      this.stroke_9bhh2t$(new ColorPaint_init(color));
    };
  }));
  Context2d.prototype.fillStroke_35mqtx$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillStroke_35mqtx$', function (fill, stroke, callback) {
    callback();
    this.fill_9bhh2t$(fill);
    this.stroke_9bhh2t$(stroke);
  });
  Context2d.prototype.fillStroke = function () {
    this.fill();
    this.stroke();
  };
  Context2d.prototype.clip = function () {
    this.clip_2lyanz$(Winding.NON_ZERO);
  };
  Context2d.prototype.clip_2lyanz$ = function (winding) {
    if (this.state.clip == null) {
      this.state.clip = new GraphicsPath();
    }ensureNotNull(this.state.clip).clear();
    ensureNotNull(this.state.clip).winding = winding;
    ensureNotNull(this.state.clip).write_d3txdv$(this.state.path);
  };
  Context2d.prototype.drawShape_mkazj4$ = function (shape, rasterizerMethod) {
    if (rasterizerMethod === void 0)
      rasterizerMethod = ShapeRasterizerMethod$X4_getInstance();
    var tmp$;
    switch (rasterizerMethod.name) {
      case 'NONE':
        shape.draw_vuz2tk$(this);
        break;
      case 'X1':
      case 'X2':
      case 'X4':
        var scale = rasterizerMethod.scale;
        var x = this.rendererWidth * scale;
        var tmp$_0 = numberToInt(Math_0.ceil(x));
        var x_0 = this.rendererHeight * scale;
        var newBi = NativeImage_0(tmp$_0, numberToInt(Math_0.ceil(x_0)));
        var bi = newBi.getContext2d_6taknv$(false);
        bi.scale_lu1900$(scale, scale);
        bi.transform_1ktkmn$(this.state.transform);
        bi.draw_x1nmjt$(shape);
        switch (rasterizerMethod.name) {
          case 'X1':
            tmp$ = newBi;
            break;
          case 'X2':
            tmp$ = mipmap(newBi, 1);
            break;
          case 'X4':
            tmp$ = mipmap(newBi, 2);
            break;
          default:tmp$ = newBi;
            break;
        }

        var renderBi = tmp$;
        var t = this.state.transform;
        var a = t.a;
        var b = t.b;
        var c = t.c;
        var d = t.d;
        var tx = t.tx;
        var ty = t.ty;
        try {
          this.setTransform_1ktkmn$(new Matrix());
          this.rendererDrawImage_r3wwxz$(renderBi, 0.0, 0.0);
        }finally {
          t.setTo_15yvbs$(a, b, c, d, tx, ty);
        }

        break;
    }
  };
  Context2d.prototype.createLinearGradient_ppf5ku$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.createLinearGradient_ppf5ku$', wrapFunction(function () {
    var CycleMethod = _.com.soywiz.korim.vector.CycleMethod;
    var Unit = Kotlin.kotlin.Unit;
    var GradientKind = _.com.soywiz.korim.vector.paint.GradientKind;
    var numberToDouble = Kotlin.numberToDouble;
    var GradientPaint_init = _.com.soywiz.korim.vector.paint.GradientPaint;
    function Context2d$createLinearGradient$lambda($receiver) {
      return Unit;
    }
    return function (x0, y0, x1, y1, cycle, block) {
      if (cycle === void 0)
        cycle = CycleMethod.NO_CYCLE;
      if (block === void 0)
        block = Context2d$createLinearGradient$lambda;
      var $receiver = new GradientPaint_init(GradientKind.LINEAR, numberToDouble(x0), numberToDouble(y0), 0.0, numberToDouble(x1), numberToDouble(y1), 0.0, void 0, void 0, cycle);
      block($receiver);
      return $receiver;
    };
  }));
  Context2d.prototype.createRadialGradient_j4b27i$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.createRadialGradient_j4b27i$', wrapFunction(function () {
    var CycleMethod = _.com.soywiz.korim.vector.CycleMethod;
    var Unit = Kotlin.kotlin.Unit;
    var GradientKind = _.com.soywiz.korim.vector.paint.GradientKind;
    var numberToDouble = Kotlin.numberToDouble;
    var GradientPaint_init = _.com.soywiz.korim.vector.paint.GradientPaint;
    function Context2d$createRadialGradient$lambda($receiver) {
      return Unit;
    }
    return function (x0, y0, r0, x1, y1, r1, cycle, block) {
      if (cycle === void 0)
        cycle = CycleMethod.NO_CYCLE;
      if (block === void 0)
        block = Context2d$createRadialGradient$lambda;
      var $receiver = new GradientPaint_init(GradientKind.RADIAL, numberToDouble(x0), numberToDouble(y0), numberToDouble(r0), numberToDouble(x1), numberToDouble(y1), numberToDouble(r1), void 0, void 0, cycle);
      block($receiver);
      return $receiver;
    };
  }));
  Context2d.prototype.createSweepGradient_5chak8$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.createSweepGradient_5chak8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var GradientKind = _.com.soywiz.korim.vector.paint.GradientKind;
    var numberToDouble = Kotlin.numberToDouble;
    var GradientPaint_init = _.com.soywiz.korim.vector.paint.GradientPaint;
    function Context2d$createSweepGradient$lambda($receiver) {
      return Unit;
    }
    return function (x0, y0, block) {
      if (block === void 0)
        block = Context2d$createSweepGradient$lambda;
      var $receiver = new GradientPaint_init(GradientKind.SWEEP, numberToDouble(x0), numberToDouble(y0), 0.0, 0.0, 0.0, 0.0);
      block($receiver);
      return $receiver;
    };
  }));
  Context2d.prototype.createColor_md34sx$ = function (color) {
    return new ColorPaint(color);
  };
  Context2d.prototype.createPattern_vb86sh$ = function (bitmap, repeat, smooth, transform) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    if (transform === void 0)
      transform = new Matrix();
    return BitmapPaint_init(bitmap, transform, repeat, smooth);
  };
  Context2d.prototype.createPattern_svbbdi$ = function (bitmap, cycleX, cycleY, smooth, transform) {
    if (cycleX === void 0)
      cycleX = CycleMethod$NO_CYCLE_getInstance();
    if (cycleY === void 0)
      cycleY = cycleX;
    if (smooth === void 0)
      smooth = true;
    if (transform === void 0)
      transform = new Matrix();
    return new BitmapPaint(bitmap, transform, cycleX, cycleY, smooth);
  };
  Context2d.prototype.getTextBounds_m6rw0r$ = function (text, out) {
    if (out === void 0)
      out = new TextMetrics();
    return getTextBounds(this.font, this.fontSize, text, out);
  };
  Context2d.prototype.fillText_2w64eq$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillText_2w64eq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (text, x, y) {
      this.drawText_60a4hs$(text, numberToDouble(x), numberToDouble(y), true);
    };
  }));
  Context2d.prototype.strokeText_2w64eq$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.strokeText_2w64eq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (text, x, y) {
      this.drawText_60a4hs$(text, numberToDouble(x), numberToDouble(y), false);
    };
  }));
  Context2d.prototype.fillText_rtn8k4$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.fillText_rtn8k4$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Unit = Kotlin.kotlin.Unit;
    function Context2d$fillText$lambda$lambda(closure$text, closure$x, closure$y, this$Context2d) {
      return function () {
        this$Context2d.drawText_60a4hs$(closure$text, numberToDouble(closure$x), numberToDouble(closure$y), true);
        return Unit;
      };
    }
    return function (text, x, y, font, fontSize, halign, valign, color) {
      if (font === void 0)
        font = this.font;
      if (fontSize === void 0)
        fontSize = this.fontSize;
      if (halign === void 0)
        halign = this.horizontalAlign;
      if (valign === void 0)
        valign = this.verticalAlign;
      if (color === void 0)
        color = null;
      var oldFont = this.font;
      var oldFontSize = this.fontSize;
      var oldHalign = this.horizontalAlign;
      var oldValign = this.verticalAlign;
      try {
        this.font = font;
        this.fontSize = fontSize;
        this.horizontalAlign = halign;
        this.verticalAlign = valign;
        var tmp$, tmp$_0;
        tmp$_0 = (tmp$ = color != null ? this.createColor_md34sx$(color) : null) != null ? tmp$ : this.fillStyle;
        var oldStyle = this.fillStyle;
        this.fillStyle = tmp$_0;
        try {
          Context2d$fillText$lambda$lambda(text, x, y, this)();
        }finally {
          this.fillStyle = oldStyle;
        }
      }finally {
        this.font = oldFont;
        this.fontSize = oldFontSize;
        this.horizontalAlign = oldHalign;
        this.verticalAlign = oldValign;
      }
    };
  }));
  Context2d.prototype.drawText_60a4hs$ = function (text, x, y, fill, paint, font, size, renderer) {
    var tmp$;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (fill === void 0)
      fill = true;
    if (paint === void 0)
      paint = null;
    if (font === void 0)
      font = this.font;
    if (size === void 0)
      size = this.fontSize;
    if (renderer === void 0)
      renderer = typeof (tmp$ = DefaultStringTextRenderer) === 'function' ? tmp$ : throwCCE();
    var paint_0 = paint != null ? paint : fill ? this.fillStyle : this.strokeStyle;
    drawText_0(font, this, size, text, paint_0, x, y, fill, renderer);
  };
  Context2d.prototype.drawImage_6s4b0k$$default = function (image, x, y, width, height) {
    this.rendererDrawImage_r3wwxz$(image, x, y, width, height, this.state.transform);
  };
  Context2d.prototype.drawImage_6s4b0k$ = function (image, x, y, width, height, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    callback$default ? callback$default(image, x, y, width, height) : this.drawImage_6s4b0k$$default(image, x, y, width, height);
  };
  Context2d.prototype.drawImage_20d6cc$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.Context2d.drawImage_20d6cc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (image, x, y, width, height) {
      if (width === void 0)
        width = image.width;
      if (height === void 0)
        height = image.height;
      this.drawImage_6s4b0k$(image, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  function Context2d$StrokeInfo(thickness, pixelHinting, scaleMode, startCap, endCap, lineJoin, miterLimit) {
    if (thickness === void 0)
      thickness = 1.0;
    if (pixelHinting === void 0)
      pixelHinting = false;
    if (scaleMode === void 0)
      scaleMode = LineScaleMode$NORMAL_getInstance();
    if (startCap === void 0)
      startCap = LineCap.BUTT;
    if (endCap === void 0)
      endCap = LineCap.BUTT;
    if (lineJoin === void 0)
      lineJoin = LineJoin.MITER;
    if (miterLimit === void 0)
      miterLimit = 20.0;
    this.thickness = thickness;
    this.pixelHinting = pixelHinting;
    this.scaleMode = scaleMode;
    this.startCap = startCap;
    this.endCap = endCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
  }
  Context2d$StrokeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrokeInfo',
    interfaces: []
  };
  Context2d$StrokeInfo.prototype.component1 = function () {
    return this.thickness;
  };
  Context2d$StrokeInfo.prototype.component2 = function () {
    return this.pixelHinting;
  };
  Context2d$StrokeInfo.prototype.component3 = function () {
    return this.scaleMode;
  };
  Context2d$StrokeInfo.prototype.component4 = function () {
    return this.startCap;
  };
  Context2d$StrokeInfo.prototype.component5 = function () {
    return this.endCap;
  };
  Context2d$StrokeInfo.prototype.component6 = function () {
    return this.lineJoin;
  };
  Context2d$StrokeInfo.prototype.component7 = function () {
    return this.miterLimit;
  };
  Context2d$StrokeInfo.prototype.copy_clyk58$ = function (thickness, pixelHinting, scaleMode, startCap, endCap, lineJoin, miterLimit) {
    return new Context2d$StrokeInfo(thickness === void 0 ? this.thickness : thickness, pixelHinting === void 0 ? this.pixelHinting : pixelHinting, scaleMode === void 0 ? this.scaleMode : scaleMode, startCap === void 0 ? this.startCap : startCap, endCap === void 0 ? this.endCap : endCap, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit);
  };
  Context2d$StrokeInfo.prototype.toString = function () {
    return 'StrokeInfo(thickness=' + Kotlin.toString(this.thickness) + (', pixelHinting=' + Kotlin.toString(this.pixelHinting)) + (', scaleMode=' + Kotlin.toString(this.scaleMode)) + (', startCap=' + Kotlin.toString(this.startCap)) + (', endCap=' + Kotlin.toString(this.endCap)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + ')';
  };
  Context2d$StrokeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.thickness) | 0;
    result = result * 31 + Kotlin.hashCode(this.pixelHinting) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.endCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    return result;
  };
  Context2d$StrokeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.thickness, other.thickness) && Kotlin.equals(this.pixelHinting, other.pixelHinting) && Kotlin.equals(this.scaleMode, other.scaleMode) && Kotlin.equals(this.startCap, other.startCap) && Kotlin.equals(this.endCap, other.endCap) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit)))));
  };
  Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context2d',
    interfaces: [VectorBuilder, Disposable]
  };
  function toFill($receiver) {
    return new ColorPaint($receiver);
  }
  function renderTo($receiver, ctx) {
    ctx.draw_x1nmjt$($receiver);
  }
  function filled$ObjectLiteral(closure$paint, this$filled) {
    this.closure$paint = closure$paint;
    this.this$filled = this$filled;
    this.$delegate_ytihto$_0 = this$filled;
  }
  filled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.fillStyle = this.closure$paint;
    this.this$filled.draw_vuz2tk$(c);
    c.fill();
  };
  Object.defineProperty(filled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_ytihto$_0.height;
    }
  });
  Object.defineProperty(filled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_ytihto$_0.width;
    }
  });
  filled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SizedDrawable]
  };
  function filled($receiver, paint) {
    return new filled$ObjectLiteral(paint, $receiver);
  }
  function scaled$ObjectLiteral(closure$sx, closure$sy, this$scaled) {
    this.closure$sx = closure$sx;
    this.closure$sy = closure$sy;
    this.this$scaled = this$scaled;
    this.$delegate_7pgslg$_0 = this$scaled;
    var x = this$scaled.width * numberToDouble(closure$sx);
    this.width_mkevfi$_0 = numberToInt(Math_0.abs(x));
    var x_0 = this$scaled.height * numberToDouble(closure$sy);
    this.height_jmlctz$_0 = numberToInt(Math_0.abs(x_0));
  }
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_mkevfi$_0;
    }
  });
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_jmlctz$_0;
    }
  });
  scaled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.scale_lu1900$(numberToDouble(this.closure$sx), numberToDouble(this.closure$sy));
    this.this$scaled.draw_vuz2tk$(c);
  };
  scaled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SizedDrawable]
  };
  function scaled($receiver, sx, sy) {
    if (sx === void 0)
      sx = 1.0;
    if (sy === void 0)
      sy = sx;
    return new scaled$ObjectLiteral(sx, sy, $receiver);
  }
  function translated$ObjectLiteral(closure$tx, closure$ty, this$translated) {
    this.closure$tx = closure$tx;
    this.closure$ty = closure$ty;
    this.this$translated = this$translated;
    this.$delegate_rdveew$_0 = this$translated;
  }
  translated$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.translate_lu1900$(numberToDouble(this.closure$tx), numberToDouble(this.closure$ty));
    this.this$translated.draw_vuz2tk$(c);
  };
  Object.defineProperty(translated$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_rdveew$_0.height;
    }
  });
  Object.defineProperty(translated$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_rdveew$_0.width;
    }
  });
  translated$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SizedDrawable]
  };
  function translated($receiver, tx, ty) {
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = tx;
    return new translated$ObjectLiteral(tx, ty, $receiver);
  }
  function render($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = render_0($receiver, true), NativeImage) ? tmp$ : throwCCE();
  }
  function renderNoNative($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = render_0($receiver, false), Bitmap32) ? tmp$ : throwCCE();
  }
  function render_0($receiver, native) {
    var image = NativeImageOrBitmap32($receiver.width, $receiver.height, native);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function renderToImage($receiver, width, height) {
    var tmp$;
    return Kotlin.isType(tmp$ = renderToImage_0($receiver, width, height, true), NativeImage) ? tmp$ : throwCCE();
  }
  function renderToImage_0($receiver, width, height, native) {
    var image = NativeImageOrBitmap32(width, height, native);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function write_0($receiver, path) {
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
  function write_1($receiver, path, m) {
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
          $receiver.moveTo_lu1900$(m.transformX_lu1900$(x, y), m.transformY_lu1900$(x, y));
          break;
        case 1:
          var x_0 = path.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = path.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          $receiver.lineTo_lu1900$(m.transformX_lu1900$(x_0, y_0), m.transformY_lu1900$(x_0, y_0));
          break;
        case 2:
          var x1 = path.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = path.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = path.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = path.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          $receiver.quadTo_6y0v78$(m.transformX_lu1900$(x1, y1), m.transformY_lu1900$(x1, y1), m.transformX_lu1900$(x2, y2), m.transformY_lu1900$(x2, y2));
          break;
        case 3:
          var x1_0 = path.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = path.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = path.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = path.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = path.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = path.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          $receiver.cubicTo_15yvbs$(m.transformX_lu1900$(x1_0, y1_0), m.transformY_lu1900$(x1_0, y1_0), m.transformX_lu1900$(x2_0, y2_0), m.transformY_lu1900$(x2_0, y2_0), m.transformX_lu1900$(x3, y3), m.transformY_lu1900$(x3, y3));
          break;
        case 4:
          $receiver.close();
          break;
      }
    }
  }
  function CycleMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CycleMethod_initFields() {
    CycleMethod_initFields = function () {
    };
    CycleMethod$NO_CYCLE_instance = new CycleMethod('NO_CYCLE', 0);
    CycleMethod$REFLECT_instance = new CycleMethod('REFLECT', 1);
    CycleMethod$REPEAT_instance = new CycleMethod('REPEAT', 2);
  }
  var CycleMethod$NO_CYCLE_instance;
  function CycleMethod$NO_CYCLE_getInstance() {
    CycleMethod_initFields();
    return CycleMethod$NO_CYCLE_instance;
  }
  var CycleMethod$REFLECT_instance;
  function CycleMethod$REFLECT_getInstance() {
    CycleMethod_initFields();
    return CycleMethod$REFLECT_instance;
  }
  var CycleMethod$REPEAT_instance;
  function CycleMethod$REPEAT_getInstance() {
    CycleMethod_initFields();
    return CycleMethod$REPEAT_instance;
  }
  CycleMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CycleMethod',
    interfaces: [Enum]
  };
  function CycleMethod$values() {
    return [CycleMethod$NO_CYCLE_getInstance(), CycleMethod$REFLECT_getInstance(), CycleMethod$REPEAT_getInstance()];
  }
  CycleMethod.values = CycleMethod$values;
  function CycleMethod$valueOf(name) {
    switch (name) {
      case 'NO_CYCLE':
        return CycleMethod$NO_CYCLE_getInstance();
      case 'REFLECT':
        return CycleMethod$REFLECT_getInstance();
      case 'REPEAT':
        return CycleMethod$REPEAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.CycleMethod.' + name);
    }
  }
  CycleMethod.valueOf_61zpoe$ = CycleMethod$valueOf;
  function apply($receiver, ratio, clamp) {
    if (clamp === void 0)
      clamp = false;
    switch ($receiver.name) {
      case 'NO_CYCLE':
        return clamp ? clamp01(ratio) : ratio;
      case 'REPEAT':
        return ratio % 1;
      case 'REFLECT':
        var part = ratio % 2;
        return part > 1.0 ? 2.0 - part : part;
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function apply_0($receiver, value, size) {
    return apply($receiver, value / size) * size;
  }
  function apply_1($receiver, value, min, max) {
    return apply_0($receiver, value - min, max - min) + min;
  }
  function Drawable() {
  }
  Drawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Drawable',
    interfaces: []
  };
  function SizedDrawable() {
  }
  SizedDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SizedDrawable',
    interfaces: [Drawable]
  };
  function BoundsDrawable() {
  }
  Object.defineProperty(BoundsDrawable.prototype, 'left', {
    get: function () {
      return numberToInt(this.bounds.left);
    }
  });
  Object.defineProperty(BoundsDrawable.prototype, 'top', {
    get: function () {
      return numberToInt(this.bounds.top);
    }
  });
  Object.defineProperty(BoundsDrawable.prototype, 'width', {
    get: function () {
      return numberToInt(this.bounds.width);
    }
  });
  Object.defineProperty(BoundsDrawable.prototype, 'height', {
    get: function () {
      return numberToInt(this.bounds.height);
    }
  });
  BoundsDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoundsDrawable',
    interfaces: [SizedDrawable]
  };
  function FuncDrawable(action) {
    this.action = action;
  }
  FuncDrawable.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      this.action(c);
    }finally {
      c.restore();
    }
  };
  FuncDrawable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FuncDrawable',
    interfaces: [Drawable]
  };
  function GraphicsPath(commands, data, winding) {
    if (commands === void 0)
      commands = new IntArrayList();
    if (data === void 0)
      data = new DoubleArrayList();
    if (winding === void 0)
      winding = Winding.EVEN_ODD;
    VectorPath.call(this, commands, data, winding);
  }
  Object.defineProperty(GraphicsPath.prototype, 'width', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().width);
    }
  });
  Object.defineProperty(GraphicsPath.prototype, 'height', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().height);
    }
  });
  GraphicsPath.prototype.draw_vuz2tk$ = function (c) {
    c.path_lcui0n$(this);
  };
  GraphicsPath.prototype.clone = function () {
    return new GraphicsPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  GraphicsPath.prototype.toString = function () {
    return 'GraphicsPath(' + '"' + toSvgPathString(this) + '"' + ')';
  };
  GraphicsPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsPath',
    interfaces: [SizedDrawable, VectorPath]
  };
  function HorizontalAlign(ratio) {
    HorizontalAlign$Companion_getInstance();
    this.ratio = ratio;
  }
  function HorizontalAlign$Companion() {
    HorizontalAlign$Companion_instance = this;
    this.JUSTIFY = new HorizontalAlign(-0.001);
    this.LEFT = new HorizontalAlign(0.0);
    this.CENTER = new HorizontalAlign(0.5);
    this.RIGHT = new HorizontalAlign(1.0);
  }
  HorizontalAlign$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HorizontalAlign$Companion_instance = null;
  function HorizontalAlign$Companion_getInstance() {
    if (HorizontalAlign$Companion_instance === null) {
      new HorizontalAlign$Companion();
    }return HorizontalAlign$Companion_instance;
  }
  HorizontalAlign.prototype.getOffsetX_14dthe$ = function (width) {
    if (equals(this, HorizontalAlign$Companion_getInstance().JUSTIFY))
      return 0.0;
    else
      return width * this.ratio;
  };
  HorizontalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorizontalAlign',
    interfaces: []
  };
  HorizontalAlign.prototype.unbox = function () {
    return this.ratio;
  };
  HorizontalAlign.prototype.toString = function () {
    return 'HorizontalAlign(ratio=' + Kotlin.toString(this.ratio) + ')';
  };
  HorizontalAlign.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    return result;
  };
  HorizontalAlign.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ratio, other.ratio))));
  };
  function LineScaleMode(name, ordinal, hScale, vScale) {
    Enum.call(this);
    this.hScale = hScale;
    this.vScale = vScale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LineScaleMode_initFields() {
    LineScaleMode_initFields = function () {
    };
    LineScaleMode$NONE_instance = new LineScaleMode('NONE', 0, false, false);
    LineScaleMode$HORIZONTAL_instance = new LineScaleMode('HORIZONTAL', 1, true, false);
    LineScaleMode$VERTICAL_instance = new LineScaleMode('VERTICAL', 2, false, true);
    LineScaleMode$NORMAL_instance = new LineScaleMode('NORMAL', 3, true, true);
  }
  var LineScaleMode$NONE_instance;
  function LineScaleMode$NONE_getInstance() {
    LineScaleMode_initFields();
    return LineScaleMode$NONE_instance;
  }
  var LineScaleMode$HORIZONTAL_instance;
  function LineScaleMode$HORIZONTAL_getInstance() {
    LineScaleMode_initFields();
    return LineScaleMode$HORIZONTAL_instance;
  }
  var LineScaleMode$VERTICAL_instance;
  function LineScaleMode$VERTICAL_getInstance() {
    LineScaleMode_initFields();
    return LineScaleMode$VERTICAL_instance;
  }
  var LineScaleMode$NORMAL_instance;
  function LineScaleMode$NORMAL_getInstance() {
    LineScaleMode_initFields();
    return LineScaleMode$NORMAL_instance;
  }
  LineScaleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineScaleMode',
    interfaces: [Enum]
  };
  function LineScaleMode$values() {
    return [LineScaleMode$NONE_getInstance(), LineScaleMode$HORIZONTAL_getInstance(), LineScaleMode$VERTICAL_getInstance(), LineScaleMode$NORMAL_getInstance()];
  }
  LineScaleMode.values = LineScaleMode$values;
  function LineScaleMode$valueOf(name) {
    switch (name) {
      case 'NONE':
        return LineScaleMode$NONE_getInstance();
      case 'HORIZONTAL':
        return LineScaleMode$HORIZONTAL_getInstance();
      case 'VERTICAL':
        return LineScaleMode$VERTICAL_getInstance();
      case 'NORMAL':
        return LineScaleMode$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.LineScaleMode.' + name);
    }
  }
  LineScaleMode.valueOf_61zpoe$ = LineScaleMode$valueOf;
  function SvgBuilder(bounds, scale) {
    this.bounds = bounds;
    this.scale = scale;
    this.defs = ArrayList_init_0();
    this.nodes = ArrayList_init_0();
  }
  SvgBuilder.prototype.toXml = function () {
    return Xml_0.Companion.Tag_imnfz6$('svg', linkedMapOf([to('width', get_niceStr(this.bounds.width * this.scale) + 'px'), to('height', get_niceStr(this.bounds.height * this.scale) + 'px'), to('viewBox', '0 0 ' + get_niceStr(this.bounds.width * this.scale) + ' ' + get_niceStr(this.bounds.height * this.scale)), to('xmlns', 'http://www.w3.org/2000/svg'), to('xmlns:xlink', 'http://www.w3.org/1999/xlink')]), listOf([Xml_0.Companion.Tag_imnfz6$('defs', emptyMap(), this.defs), Xml_0.Companion.Tag_imnfz6$('g', mapOf_0(to('transform', toSvg((new Matrix()).translate_lu1900$(-this.bounds.x, -this.bounds.y).scale_lu1900$(this.scale, this.scale)))), this.nodes)]));
  };
  SvgBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgBuilder',
    interfaces: []
  };
  function buildSvgXml(width, height, block) {
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    var $receiver = new ShapeBuilder(width, height);
    block($receiver);
    return toSvg_0($receiver.buildShape());
  }
  function toSvg($receiver) {
    var block$result;
    block$break: do {
      switch ($receiver.getType().name) {
        case 'IDENTITY':
          block$result = 'translate()';
          break block$break;
        case 'TRANSLATE':
          block$result = 'translate(' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ')';
          break block$break;
        case 'SCALE':
          block$result = 'scale(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.d) + ')';
          break block$break;
        case 'SCALE_TRANSLATE':
          block$result = 'translate(' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ') scale(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.d) + ')';
          break block$break;
        default:block$result = 'matrix(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.b) + ', ' + get_niceStr($receiver.c) + ', ' + get_niceStr($receiver.d) + ', ' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ')';
          break block$break;
      }
    }
     while (false);
    return block$result;
  }
  function toSvgPathString$fixX(closure$decimalPlaces) {
    return function ($receiver) {
      return toStringDecimal($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString$fixY(closure$decimalPlaces) {
    return function ($receiver) {
      return toStringDecimal($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString($receiver, separator, decimalPlaces) {
    if (separator === void 0)
      separator = ' ';
    if (decimalPlaces === void 0)
      decimalPlaces = 1;
    var parts = ArrayList_init_0();
    var fixX = toSvgPathString$fixX(decimalPlaces);
    var fixY = toSvgPathString$fixY(decimalPlaces);
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
          var element = 'M' + fixX(x) + ' ' + fixY(y);
          parts.add_11rb$(element);
          break;
        case 1:
          var x_0 = $receiver.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
          var element_0 = 'L' + fixX(x_0) + ' ' + fixY(y_0);
          parts.add_11rb$(element_0);
          break;
        case 2:
          var x1 = $receiver.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
          var element_1 = 'Q' + fixX(x1) + ' ' + fixY(y1) + ', ' + fixX(x2) + ' ' + fixY(y2);
          parts.add_11rb$(element_1);
          break;
        case 3:
          var x1_0 = $receiver.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
          var element_2 = 'C' + fixX(x1_0) + ' ' + fixY(y1_0) + ', ' + fixX(x2_0) + ' ' + fixY(y2_0) + ', ' + fixX(x3) + ' ' + fixY(y3);
          parts.add_11rb$(element_2);
          break;
        case 4:
          parts.add_11rb$('Z');
          break;
      }
    }
    return joinToString(parts, '');
  }
  function Shape() {
  }
  Shape.prototype.buildSvg_b7xfbk$ = function (svg) {
  };
  Shape.prototype.getPath_lcui0n$$default = function (path) {
    return path;
  };
  Shape.prototype.getPath_lcui0n$ = function (path, callback$default) {
    if (path === void 0)
      path = new GraphicsPath();
    return callback$default ? callback$default(path) : this.getPath_lcui0n$$default(path);
  };
  Object.defineProperty(Shape.prototype, 'bounds', {
    get: function () {
      var $receiver = new BoundsBuilder();
      this.addBounds_w97n1m$($receiver);
      return $receiver.getBounds_2da8yn$();
    }
  });
  Shape.prototype.containsPoint_lu1900$ = function (x, y) {
    return this.bounds.contains_lu1900$(x, y);
  };
  Shape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Shape',
    interfaces: [BoundsDrawable]
  };
  function getBounds($receiver, out) {
    if (out === void 0)
      out = Rectangle.Companion.invoke();
    var bb = new BoundsBuilder();
    $receiver.addBounds_w97n1m$(bb);
    bb.getBounds_2da8yn$(out);
    return out;
  }
  function toSvg_0($receiver, scale) {
    if (scale === void 0)
      scale = 1.0;
    var $receiver_0 = new SvgBuilder(getBounds($receiver), scale);
    $receiver.buildSvg_b7xfbk$($receiver_0);
    return $receiver_0.toXml();
  }
  function toShape($receiver, width, height) {
    var $receiver_0 = new ShapeBuilder(width, height);
    $receiver_0.draw_x1nmjt$($receiver);
    return $receiver_0.buildShape();
  }
  function toSvg_1($receiver, width, height, scale) {
    if (scale === void 0)
      scale = 1.0;
    return toSvg_0(toShape($receiver, width, height), scale);
  }
  function toShape_0($receiver) {
    return toShape($receiver, $receiver.width, $receiver.height);
  }
  function toSvg_2($receiver, scale) {
    if (scale === void 0)
      scale = 1.0;
    return toSvg_1($receiver, $receiver.width, $receiver.height, scale);
  }
  function StyledShape() {
  }
  Object.defineProperty(StyledShape.prototype, 'path', {
    get: function () {
      return null;
    }
  });
  StyledShape.prototype.addBounds_w97n1m$ = function (bb) {
    var tmp$;
    if ((tmp$ = this.path) != null) {
      add_3(bb, tmp$, this.transform);
    }};
  StyledShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$;
    tmp$ = svg.nodes;
    var tmp$_0, tmp$_1;
    var element = Xml_0.Companion.Tag_imnfz6$('path', plus_1(mapOf([to('d', (tmp$_1 = (tmp$_0 = this.path) != null ? toSvgPathString(tmp$_0) : null) != null ? tmp$_1 : ''), to('transform', toSvg(this.transform))]), this.getSvgXmlAttributes_b7xfbk$(svg)), emptyList());
    tmp$.add_11rb$(element);
  };
  StyledShape.prototype.getPath_lcui0n$$default = function (path) {
    var tmp$;
    if ((tmp$ = this.path) != null) {
      path.write_d3txdv$(tmp$);
    }return path;
  };
  StyledShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return emptyMap();
  };
  StyledShape.prototype.draw_vuz2tk$ = function (c) {
    var t = c.state.transform;
    var a = t.a;
    var b = t.b;
    var c_0 = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      var tmp$;
      c.transform_1ktkmn$(this.transform);
      c.beginPath();
      (tmp$ = this.path) != null ? (tmp$.draw_vuz2tk$(c), Unit) : null;
      if (this.clip != null) {
        ensureNotNull(this.clip).draw_vuz2tk$(c);
        c.clip();
      }this.drawInternal_vuz2tk$(c);
    }finally {
      t.setTo_15yvbs$(a, b, c_0, d, tx, ty);
    }
  };
  StyledShape.prototype.drawInternal_vuz2tk$ = function (c) {
  };
  StyledShape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledShape',
    interfaces: [Shape]
  };
  function add_1($receiver, x, y, transform) {
    return $receiver.add_lu1900$(transform.transformX_lu1900$(x, y), transform.transformY_lu1900$(x, y));
  }
  function add_2($receiver, rect, transform) {
    if (rect.isNotEmpty) {
      $receiver.add_y2mxf1$(rect.left, rect.top, transform);
      $receiver.add_y2mxf1$(rect.right, rect.bottom, transform);
    }return $receiver;
  }
  function add_3($receiver, path, transform) {
    var bb = $receiver;
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var bezierTemp = new Bezier$Temp();
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
          add_2(bb, Bezier.Companion.quadBounds_oaz3ob$(lx.v, ly.v, x1, y1, x2, y2, bb.tempRect), transform);
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
          add_2(bb, Bezier.Companion.cubicBounds_1htcsh$(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3, bb.tempRect, bezierTemp), transform);
          lx.v = x3;
          ly.v = y3;
          break;
        case 4:
          break;
      }
    }
  }
  function colorToSvg(color) {
    var r = color.r;
    var g = color.g;
    var b = color.b;
    var af = color.af;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + af + ')';
  }
  function toSvg_3($receiver, svg) {
    var id = svg.defs.size;
    if (Kotlin.isType($receiver, GradientPaint)) {
      var $receiver_0 = until(0, $receiver.numberOfStops);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var ratio = $receiver.stops.get_za3lpa$(item);
        var color = new RGBA($receiver.colors.getAt_za3lpa$(item));
        tmp$_0.call(destination, Xml_0.Companion.Tag_imnfz6$('stop', mapOf([to('offset', (ratio * 100).toString() + '%'), to('stop-color', colorToSvg(color))]), emptyList()));
      }
      var stops = destination;
      if (Kotlin.isType($receiver, GradientPaint)) {
        switch ($receiver.kind.name) {
          case 'LINEAR':
            var $receiver_1 = svg.defs;
            var element = Xml_0.Companion.Tag_imnfz6$('linearGradient', mapOf([to('id', 'def' + id), to('x1', $receiver.x0.toString()), to('y1', $receiver.y0.toString()), to('x2', $receiver.x1.toString()), to('y2', $receiver.y1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
            $receiver_1.add_11rb$(element);
            break;
          case 'RADIAL':
            var $receiver_2 = svg.defs;
            var element_0 = Xml_0.Companion.Tag_imnfz6$('radialGradient', mapOf([to('id', 'def' + id), to('cx', $receiver.x0.toString()), to('cy', $receiver.y0.toString()), to('fx', $receiver.x1.toString()), to('fy', $receiver.y1.toString()), to('r', $receiver.r1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
            $receiver_2.add_11rb$(element_0);
            break;
        }
      }return 'url(#def' + id + ')';
    } else if (Kotlin.isType($receiver, BitmapPaint)) {
      var tmp$_1 = svg.defs;
      var element_1 = Xml_0.Companion.Tag_imnfz6$('pattern', mapOf([to('id', 'def' + id), to('patternUnits', 'userSpaceOnUse'), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString()), to('patternTransform', toSvg($receiver.transform))]), listOf_0(Xml_0.Companion.Tag_imnfz6$('image', mapOf([to('xlink:href', toUri($receiver.bitmap)), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString())]), emptyList())));
      tmp$_1.add_11rb$(element_1);
      return 'url(#def' + id + ')';
    } else if (Kotlin.isType($receiver, ColorPaint))
      return colorToSvg($receiver.color);
    else
      return 'red';
  }
  function EmptyShape() {
    EmptyShape_instance = this;
  }
  EmptyShape.prototype.addBounds_w97n1m$ = function (bb) {
  };
  EmptyShape.prototype.draw_vuz2tk$ = function (c) {
  };
  EmptyShape.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyShape',
    interfaces: [Shape]
  };
  var EmptyShape_instance = null;
  function EmptyShape_getInstance() {
    if (EmptyShape_instance === null) {
      new EmptyShape();
    }return EmptyShape_instance;
  }
  function FillShape(path, clip, paint, transform) {
    if (transform === void 0)
      transform = new Matrix();
    this.path_2357gs$_0 = path;
    this.clip_1w6on5$_0 = clip;
    this.paint_6bthi3$_0 = paint;
    this.transform_dukfqh$_0 = transform;
  }
  Object.defineProperty(FillShape.prototype, 'path', {
    get: function () {
      return this.path_2357gs$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'clip', {
    get: function () {
      return this.clip_1w6on5$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'paint', {
    get: function () {
      return this.paint_6bthi3$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'transform', {
    get: function () {
      return this.transform_dukfqh$_0;
    }
  });
  FillShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.fill_9bhh2t$(this.paint);
  };
  FillShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_1(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf_0(to('fill', toSvg_3(this.paint, svg))));
  };
  FillShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var tx = this.transform.transformX_lu1900$(x, y);
    var ty = this.transform.transformY_lu1900$(x, y);
    if (this.clip != null)
      return this.clip.containsPoint_lu1900$(tx, ty);
    return this.path.containsPoint_lu1900$(tx, ty);
  };
  FillShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillShape',
    interfaces: [StyledShape]
  };
  FillShape.prototype.component1 = function () {
    return this.path;
  };
  FillShape.prototype.component2 = function () {
    return this.clip;
  };
  FillShape.prototype.component3 = function () {
    return this.paint;
  };
  FillShape.prototype.component4 = function () {
    return this.transform;
  };
  FillShape.prototype.copy_m81jlt$ = function (path, clip, paint, transform) {
    return new FillShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform);
  };
  FillShape.prototype.toString = function () {
    return 'FillShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + ')';
  };
  FillShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    return result;
  };
  FillShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform)))));
  };
  function PolylineShape(path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, lineJoin, miterLimit) {
    this.path_szk01b$_0 = path;
    this.clip_sslh7o$_0 = clip;
    this.paint_osfjj2$_0 = paint;
    this.transform_eb3l64$_0 = transform;
    this.thickness = thickness;
    this.pixelHinting = pixelHinting;
    this.scaleMode = scaleMode;
    this.startCaps = startCaps;
    this.endCaps = endCaps;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.joints = this.lineJoin.name;
    this.tempBB_0 = new BoundsBuilder();
    this.tempRect_0 = Rectangle.Companion.invoke();
  }
  Object.defineProperty(PolylineShape.prototype, 'path', {
    get: function () {
      return this.path_szk01b$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'clip', {
    get: function () {
      return this.clip_sslh7o$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'paint', {
    get: function () {
      return this.paint_osfjj2$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'transform', {
    get: function () {
      return this.transform_eb3l64$_0;
    }
  });
  PolylineShape.prototype.addBounds_w97n1m$ = function (bb) {
    this.tempBB_0.reset();
    add(this.tempBB_0, this.path);
    this.tempBB_0.getBounds_2da8yn$(this.tempRect_0);
    var halfThickness = this.thickness / 2;
    this.tempRect_0.inflate_lu1900$(Math_0.max(halfThickness, 0.0), Math_0.max(halfThickness, 0.0));
    add_0(bb, this.tempRect_0);
  };
  PolylineShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.lineScaleMode = this.scaleMode;
    c.lineWidth = this.thickness;
    c.lineCap = this.endCaps;
    c.lineJoin = this.lineJoin;
    c.stroke_9bhh2t$(this.paint);
  };
  PolylineShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var tx = this.transform.transformX_lu1900$(x, y);
    var ty = this.transform.transformY_lu1900$(x, y);
    if (this.clip != null)
      return this.clip.containsPoint_lu1900$(tx, ty);
    return this.path.containsPoint_lu1900$(tx, ty);
  };
  PolylineShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_1(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf([to('fill', 'none'), to('stroke-width', this.thickness.toString()), to('stroke', toSvg_3(this.paint, svg))]));
  };
  PolylineShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolylineShape',
    interfaces: [StyledShape]
  };
  function PolylineShape_init(path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit, $this) {
    $this = $this || Object.create(PolylineShape.prototype);
    var tmp$;
    if (joints == null)
      tmp$ = LineJoin.MITER;
    else
      switch (joints) {
        case 'MITER':
        case 'miter':
          tmp$ = LineJoin.MITER;
          break;
        case 'BEVEL':
        case 'bevel':
          tmp$ = LineJoin.BEVEL;
          break;
        case 'SQUARE':
        case 'square':
          tmp$ = LineJoin.Companion.SQUARE;
          break;
        case 'ROUND':
        case 'round':
          tmp$ = LineJoin.ROUND;
          break;
        default:tmp$ = LineJoin.MITER;
          break;
      }
    PolylineShape.call($this, path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, tmp$, miterLimit);
    return $this;
  }
  PolylineShape.prototype.component1 = function () {
    return this.path;
  };
  PolylineShape.prototype.component2 = function () {
    return this.clip;
  };
  PolylineShape.prototype.component3 = function () {
    return this.paint;
  };
  PolylineShape.prototype.component4 = function () {
    return this.transform;
  };
  PolylineShape.prototype.component5 = function () {
    return this.thickness;
  };
  PolylineShape.prototype.component6 = function () {
    return this.pixelHinting;
  };
  PolylineShape.prototype.component7 = function () {
    return this.scaleMode;
  };
  PolylineShape.prototype.component8 = function () {
    return this.startCaps;
  };
  PolylineShape.prototype.component9 = function () {
    return this.endCaps;
  };
  PolylineShape.prototype.component10 = function () {
    return this.lineJoin;
  };
  PolylineShape.prototype.component11 = function () {
    return this.miterLimit;
  };
  PolylineShape.prototype.copy_9p27y1$ = function (path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, lineJoin, miterLimit) {
    return new PolylineShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform, thickness === void 0 ? this.thickness : thickness, pixelHinting === void 0 ? this.pixelHinting : pixelHinting, scaleMode === void 0 ? this.scaleMode : scaleMode, startCaps === void 0 ? this.startCaps : startCaps, endCaps === void 0 ? this.endCaps : endCaps, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit);
  };
  PolylineShape.prototype.toString = function () {
    return 'PolylineShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + (', thickness=' + Kotlin.toString(this.thickness)) + (', pixelHinting=' + Kotlin.toString(this.pixelHinting)) + (', scaleMode=' + Kotlin.toString(this.scaleMode)) + (', startCaps=' + Kotlin.toString(this.startCaps)) + (', endCaps=' + Kotlin.toString(this.endCaps)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + ')';
  };
  PolylineShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.thickness) | 0;
    result = result * 31 + Kotlin.hashCode(this.pixelHinting) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.endCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    return result;
  };
  PolylineShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.thickness, other.thickness) && Kotlin.equals(this.pixelHinting, other.pixelHinting) && Kotlin.equals(this.scaleMode, other.scaleMode) && Kotlin.equals(this.startCaps, other.startCaps) && Kotlin.equals(this.endCaps, other.endCaps) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit)))));
  };
  function CompoundShape(components) {
    this.components = components;
  }
  CompoundShape.prototype.addBounds_w97n1m$ = function (bb) {
    var $receiver = this.components;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).addBounds_w97n1m$(bb);
    }
  };
  CompoundShape.prototype.draw_vuz2tk$ = function (c) {
    c.rendererBufferingStart();
    try {
      var $receiver = this.components;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).draw_vuz2tk$(c);
      }
    }finally {
      c.rendererBufferingEnd();
    }
  };
  CompoundShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var $receiver = this.components;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).buildSvg_b7xfbk$(svg);
    }
  };
  CompoundShape.prototype.getPath_lcui0n$$default = function (path) {
    var $receiver = this.components;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).getPath_lcui0n$(path);
    }
    return path;
  };
  CompoundShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var $receiver = this.components;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.containsPoint_lu1900$(x, y)) {
          any$result = true;
          break any$break;
        }}
      any$result = false;
    }
     while (false);
    return any$result;
  };
  CompoundShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompoundShape',
    interfaces: [Shape]
  };
  function TextShape(text, x, y, font, fontSize, clip, fill, stroke, halign, valign, transform) {
    if (halign === void 0)
      halign = HorizontalAlign$Companion_getInstance().LEFT;
    if (valign === void 0)
      valign = VerticalAlign$Companion_getInstance().TOP;
    if (transform === void 0)
      transform = new Matrix();
    this.text = text;
    this.x = x;
    this.y = y;
    this.font = font;
    this.fontSize = fontSize;
    this.clip_bwzctl$_0 = clip;
    this.fill = fill;
    this.stroke = stroke;
    this.halign = halign;
    this.valign = valign;
    this.transform_fri0v$_0 = transform;
  }
  Object.defineProperty(TextShape.prototype, 'clip', {
    get: function () {
      return this.clip_bwzctl$_0;
    }
  });
  Object.defineProperty(TextShape.prototype, 'transform', {
    get: function () {
      return this.transform_fri0v$_0;
    }
  });
  Object.defineProperty(TextShape.prototype, 'paint', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.fill) != null ? tmp$ : this.stroke) != null ? tmp$_0 : NonePaint_getInstance();
    }
  });
  TextShape.prototype.addBounds_w97n1m$ = function (bb) {
    bb.add_lu1900$(this.x, this.y);
    bb.add_lu1900$(this.x + this.fontSize * this.text.length, this.y + this.fontSize);
  };
  TextShape.prototype.drawInternal_vuz2tk$ = function (c) {
    var font = this.font;
    var halign = this.halign;
    var valign = this.valign;
    var fontSize;
    fontSize = c.fontSize;
    var oldFont = c.font;
    var oldFontSize = c.fontSize;
    var oldHalign = c.horizontalAlign;
    var oldValign = c.verticalAlign;
    try {
      c.font = font;
      c.fontSize = fontSize;
      c.horizontalAlign = halign;
      c.verticalAlign = valign;
      if (this.fill != null)
        c.fillText_ai6r6m$(this.text, this.x, this.y);
      if (this.stroke != null)
        c.strokeText_ai6r6m$(this.text, this.x, this.y);
    }finally {
      c.font = oldFont;
      c.fontSize = oldFontSize;
      c.horizontalAlign = oldHalign;
      c.verticalAlign = oldValign;
    }
  };
  TextShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$;
    tmp$ = svg.nodes;
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    tmp$_15 = Xml_0.Companion;
    tmp$_0 = to('x', this.x);
    tmp$_1 = to('y', this.y);
    tmp$_4 = to('fill', (tmp$_3 = (tmp$_2 = this.fill) != null ? toSvg_3(tmp$_2, svg) : null) != null ? tmp$_3 : 'none');
    tmp$_7 = to('stroke', (tmp$_6 = (tmp$_5 = this.stroke) != null ? toSvg_3(tmp$_5, svg) : null) != null ? tmp$_6 : 'none');
    tmp$_8 = to('font-family', this.font.name);
    tmp$_9 = to('font-size', this.fontSize.toString() + 'px');
    tmp$_10 = this.halign;
    if (equals(tmp$_10, HorizontalAlign$Companion_getInstance().JUSTIFY))
      tmp$_11 = 'justify';
    else if (equals(tmp$_10, HorizontalAlign$Companion_getInstance().LEFT))
      tmp$_11 = 'start';
    else if (equals(tmp$_10, HorizontalAlign$Companion_getInstance().CENTER))
      tmp$_11 = 'middle';
    else if (equals(tmp$_10, HorizontalAlign$Companion_getInstance().RIGHT))
      tmp$_11 = 'end';
    else
      tmp$_11 = (this.halign.ratio * 100).toString() + '%';
    tmp$_12 = to('text-anchor', tmp$_11);
    tmp$_13 = this.valign;
    if (equals(tmp$_13, VerticalAlign$Companion_getInstance().TOP))
      tmp$_14 = 'hanging';
    else if (equals(tmp$_13, VerticalAlign$Companion_getInstance().MIDDLE))
      tmp$_14 = 'middle';
    else if (equals(tmp$_13, VerticalAlign$Companion_getInstance().BASELINE))
      tmp$_14 = 'baseline';
    else if (equals(tmp$_13, VerticalAlign$Companion_getInstance().BOTTOM))
      tmp$_14 = 'bottom';
    else
      tmp$_14 = (this.valign.ratio * 100).toString() + '%';
    var element = tmp$_15.Tag_imnfz6$('text', mapOf([tmp$_0, tmp$_1, tmp$_4, tmp$_7, tmp$_8, tmp$_9, tmp$_12, to('alignment-baseline', tmp$_14), to('transform', toSvg(this.transform))]), listOf_0(Xml_0.Companion.Text_61zpoe$(this.text)));
    tmp$.add_11rb$(element);
  };
  TextShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextShape',
    interfaces: [StyledShape]
  };
  var buildShape = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.buildShape_p5gwzq$', wrapFunction(function () {
    var ShapeBuilder_init = _.com.soywiz.korim.vector.ShapeBuilder;
    return function (width, height, builder) {
      if (width === void 0)
        width = null;
      if (height === void 0)
        height = null;
      var $receiver = new ShapeBuilder_init(width, height);
      builder($receiver);
      return $receiver.buildShape();
    };
  }));
  function ShapeBuilder(width, height) {
    Context2d.call(this, DummyRenderer$Companion_getInstance());
    this.rendererWidth_jix0ni$_0 = width != null ? width : 256;
    this.rendererHeight_p3b245$_0 = height != null ? height : 256;
    this.shapes = ArrayList_init_0();
  }
  Object.defineProperty(ShapeBuilder.prototype, 'rendererWidth', {
    get: function () {
      return this.rendererWidth_jix0ni$_0;
    }
  });
  Object.defineProperty(ShapeBuilder.prototype, 'rendererHeight', {
    get: function () {
      return this.rendererHeight_p3b245$_0;
    }
  });
  ShapeBuilder.prototype.rendererRender_w64o9o$ = function (state, fill) {
    if (isEmpty(state.path))
      return;
    if (fill) {
      var tmp$;
      tmp$ = this.shapes;
      var tmp$_0;
      var element = new FillShape(state.path.clone(), (tmp$_0 = state.clip) != null ? tmp$_0.clone() : null, state.fillStyle.transformed_1ktkmn$(state.transform), state.transform.clone());
      tmp$.add_11rb$(element);
    } else {
      var tmp$_1;
      tmp$_1 = this.shapes;
      var tmp$_2;
      var element_0 = new PolylineShape(state.path.clone(), (tmp$_2 = state.clip) != null ? tmp$_2.clone() : null, state.strokeStyle.transformed_1ktkmn$(state.transform), state.transform.clone(), state.lineWidth, true, state.lineScaleMode, state.startLineCap, state.endLineCap, state.lineJoin, state.miterLimit);
      tmp$_1.add_11rb$(element_0);
    }
    Context2d.prototype.rendererRender_w64o9o$.call(this, state, fill);
  };
  ShapeBuilder.prototype.rendererRenderSystemText_tzo0ny$ = function (state, font, fontSize, text, x, y, fill) {
    var tmp$;
    tmp$ = this.shapes;
    var tmp$_0;
    var element = new TextShape(text, x, y, font, fontSize, (tmp$_0 = state.clip) != null ? tmp$_0.clone() : null, fill ? state.fillStyle : null, fill ? null : state.strokeStyle, state.horizontalAlign, state.verticalAlign, state.transform.clone());
    tmp$.add_11rb$(element);
  };
  ShapeBuilder.prototype.rendererDrawImage_r3wwxz$$default = function (image, x, y, width, height, transform) {
    var tmp$ = void 0;
    var $receiver = new GraphicsPath();
    rect($receiver, x, y, width, height);
    this.rendererRender_w64o9o$(new Context2d$State(transform, tmp$, $receiver, void 0, void 0, void 0, void 0, void 0, void 0, void 0, BitmapPaint_init(image, (new Matrix()).scale_lu1900$(width / image.width, height / image.height).translate_lu1900$(x, y))), true);
  };
  ShapeBuilder.prototype.rendererDispose = function () {
  };
  ShapeBuilder.prototype.rendererBufferingStart = function () {
    return 0;
  };
  ShapeBuilder.prototype.rendererBufferingEnd = function () {
  };
  ShapeBuilder.prototype.clear = function () {
    this.state.clone();
    this.shapes.clear();
  };
  ShapeBuilder.prototype.buildShape = function () {
    return new CompoundShape(toList(this.shapes));
  };
  ShapeBuilder.prototype.draw_vuz2tk$ = function (c) {
    c.draw_x1nmjt$(this.buildShape());
  };
  ShapeBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeBuilder',
    interfaces: [Drawable, Context2d]
  };
  function ShapeRasterizerMethod(name, ordinal, scale) {
    Enum.call(this);
    this.scale = scale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShapeRasterizerMethod_initFields() {
    ShapeRasterizerMethod_initFields = function () {
    };
    ShapeRasterizerMethod$NONE_instance = new ShapeRasterizerMethod('NONE', 0, 0.0);
    ShapeRasterizerMethod$X1_instance = new ShapeRasterizerMethod('X1', 1, 1.0);
    ShapeRasterizerMethod$X2_instance = new ShapeRasterizerMethod('X2', 2, 2.0);
    ShapeRasterizerMethod$X4_instance = new ShapeRasterizerMethod('X4', 3, 4.0);
  }
  var ShapeRasterizerMethod$NONE_instance;
  function ShapeRasterizerMethod$NONE_getInstance() {
    ShapeRasterizerMethod_initFields();
    return ShapeRasterizerMethod$NONE_instance;
  }
  var ShapeRasterizerMethod$X1_instance;
  function ShapeRasterizerMethod$X1_getInstance() {
    ShapeRasterizerMethod_initFields();
    return ShapeRasterizerMethod$X1_instance;
  }
  var ShapeRasterizerMethod$X2_instance;
  function ShapeRasterizerMethod$X2_getInstance() {
    ShapeRasterizerMethod_initFields();
    return ShapeRasterizerMethod$X2_instance;
  }
  var ShapeRasterizerMethod$X4_instance;
  function ShapeRasterizerMethod$X4_getInstance() {
    ShapeRasterizerMethod_initFields();
    return ShapeRasterizerMethod$X4_instance;
  }
  ShapeRasterizerMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeRasterizerMethod',
    interfaces: [Enum]
  };
  function ShapeRasterizerMethod$values() {
    return [ShapeRasterizerMethod$NONE_getInstance(), ShapeRasterizerMethod$X1_getInstance(), ShapeRasterizerMethod$X2_getInstance(), ShapeRasterizerMethod$X4_getInstance()];
  }
  ShapeRasterizerMethod.values = ShapeRasterizerMethod$values;
  function ShapeRasterizerMethod$valueOf(name) {
    switch (name) {
      case 'NONE':
        return ShapeRasterizerMethod$NONE_getInstance();
      case 'X1':
        return ShapeRasterizerMethod$X1_getInstance();
      case 'X2':
        return ShapeRasterizerMethod$X2_getInstance();
      case 'X4':
        return ShapeRasterizerMethod$X4_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.ShapeRasterizerMethod.' + name);
    }
  }
  ShapeRasterizerMethod.valueOf_61zpoe$ = ShapeRasterizerMethod$valueOf;
  function VerticalAlign(ratio) {
    VerticalAlign$Companion_getInstance();
    this.ratio = ratio;
  }
  function VerticalAlign$Companion() {
    VerticalAlign$Companion_instance = this;
    this.TOP = new VerticalAlign(0.0);
    this.MIDDLE = new VerticalAlign(0.5);
    this.BOTTOM = new VerticalAlign(1.0);
    this.BASELINE = new VerticalAlign(kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY);
  }
  VerticalAlign$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VerticalAlign$Companion_instance = null;
  function VerticalAlign$Companion_getInstance() {
    if (VerticalAlign$Companion_instance === null) {
      new VerticalAlign$Companion();
    }return VerticalAlign$Companion_instance;
  }
  VerticalAlign.prototype.getOffsetY_lu1900$ = function (height, baseline) {
    if (equals(this, VerticalAlign$Companion_getInstance().BASELINE))
      return baseline;
    else
      return -height * this.ratio;
  };
  VerticalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalAlign',
    interfaces: []
  };
  VerticalAlign.prototype.unbox = function () {
    return this.ratio;
  };
  VerticalAlign.prototype.toString = function () {
    return 'VerticalAlign(ratio=' + Kotlin.toString(this.ratio) + ')';
  };
  VerticalAlign.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    return result;
  };
  VerticalAlign.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ratio, other.ratio))));
  };
  function Chart() {
  }
  Chart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chart',
    interfaces: [Drawable]
  };
  function ChartBars(list) {
    ChartBars$Companion_getInstance();
    Chart.call(this);
    this.list = list;
    var tmp$;
    var $receiver = this.list;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.localMaxValue);
    }
    this.maxValue = (tmp$ = max(destination)) != null ? tmp$ : 0.0;
    var x = this.maxValue;
    var x_0 = Math_0.log10(x);
    var x_1 = Math_0.floor(x_0);
    this.chartStep = Math_0.pow(10.0, x_1) / 2.0;
    var x_2 = this.maxValue / this.chartStep;
    this.rMaxValue = Math_0.ceil(x_2) * this.chartStep;
    this.colors = listOf([Colors_getInstance().get_61zpoe$('#5485ec'), Colors_getInstance().GREEN, Colors_getInstance().BLUE, Colors_getInstance().AZURE, Colors_getInstance().CHARTREUSE, Colors_getInstance().CADETBLUE]);
    this.count = 0;
  }
  function ChartBars$Companion() {
    ChartBars$Companion_instance = this;
  }
  ChartBars$Companion.prototype.invoke_jnqutm$ = function (items) {
    var destination = ArrayList_init(items.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      destination.add_11rb$(new ChartBars$DataPoint(item.first, listOf_0(numberToDouble(item.second))));
    }
    return new ChartBars(destination);
  };
  ChartBars$Companion.prototype.fromPoints_s2nmi9$ = function (items) {
    var destination = ArrayList_init(items.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1 = item.first;
      var $receiver = item.second;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_0.add_11rb$(numberToDouble(item_0));
      }
      tmp$_0.call(destination, new ChartBars$DataPoint(tmp$_1, destination_0));
    }
    return new ChartBars(destination);
  };
  ChartBars$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChartBars$Companion_instance = null;
  function ChartBars$Companion_getInstance() {
    if (ChartBars$Companion_instance === null) {
      new ChartBars$Companion();
    }return ChartBars$Companion_instance;
  }
  function ChartBars$DataPoint(name, values) {
    this.name = name;
    this.values = values;
    var tmp$;
    this.localMaxValue = (tmp$ = max(this.values)) != null ? tmp$ : 0.0;
  }
  ChartBars$DataPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataPoint',
    interfaces: []
  };
  ChartBars$DataPoint.prototype.component1 = function () {
    return this.name;
  };
  ChartBars$DataPoint.prototype.component2 = function () {
    return this.values;
  };
  ChartBars$DataPoint.prototype.copy_bijrlx$ = function (name, values) {
    return new ChartBars$DataPoint(name === void 0 ? this.name : name, values === void 0 ? this.values : values);
  };
  ChartBars$DataPoint.prototype.toString = function () {
    return 'DataPoint(name=' + Kotlin.toString(this.name) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  ChartBars$DataPoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  ChartBars$DataPoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.values, other.values)))));
  };
  ChartBars.prototype.draw_vuz2tk$ = function (c) {
    this.renderChart_6rdc61$(c);
  };
  ChartBars.prototype.renderLine_aioipf$_0 = function ($receiver, x0, y0, x1, y1, color, width) {
    if (width === void 0)
      width = 1.2;
    $receiver.lineWidth = width;
    $receiver.beginPath();
    $receiver.moveTo_lu1900$(x0, y0);
    $receiver.lineTo_lu1900$(x1, y1);
    $receiver.stroke_9bhh2t$($receiver.createColor_md34sx$(color));
  };
  ChartBars.prototype.renderRefLine_zakt03$_0 = function ($receiver, rect, y, value, important) {
    var x = rect.left;
    this.renderLine_aioipf$_0($receiver, x, y, rect.right, y, important ? Colors_getInstance().BLACK : Colors_getInstance().DARKGREY);
    var x_0 = x - 2;
    var halign = HorizontalAlign$Companion_getInstance().RIGHT;
    var valign = VerticalAlign$Companion_getInstance().BOTTOM;
    var color = Colors_getInstance().DARKGREY;
    var font;
    var fontSize;
    font = $receiver.font;
    fontSize = $receiver.fontSize;
    var oldFont = $receiver.font;
    var oldFontSize = $receiver.fontSize;
    var oldHalign = $receiver.horizontalAlign;
    var oldValign = $receiver.verticalAlign;
    try {
      $receiver.font = font;
      $receiver.fontSize = fontSize;
      $receiver.horizontalAlign = halign;
      $receiver.verticalAlign = valign;
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = color != null ? $receiver.createColor_md34sx$(color) : null) != null ? tmp$ : $receiver.fillStyle;
      var oldStyle = $receiver.fillStyle;
      $receiver.fillStyle = tmp$_0;
      try {
        $receiver.drawText_60a4hs$(value, numberToDouble(x_0), numberToDouble(y), true);
      }finally {
        $receiver.fillStyle = oldStyle;
      }
    }finally {
      $receiver.font = oldFont;
      $receiver.fontSize = oldFontSize;
      $receiver.horizontalAlign = oldHalign;
      $receiver.verticalAlign = oldValign;
    }
  };
  ChartBars.prototype.get_ratio_syzv5q$ = function ($receiver) {
    return first($receiver.values) / this.maxValue;
  };
  ChartBars.prototype.get_rRatio_syzv5q$ = function ($receiver) {
    return first($receiver.values) / this.rMaxValue;
  };
  ChartBars.prototype.renderReferenceLines_uzxjb5$_0 = function ($receiver, rect) {
    for (var n = 0; n < 5; n++) {
      var ratio = n / 4;
      this.renderRefLine_zakt03$_0($receiver, rect, rect.bottom - 1 - (rect.height - 1) * ratio, removeSuffix((ratio * this.rMaxValue).toString(), '.0'), n === 0);
    }
  };
  function ChartBars$Fit(name, ordinal, angle) {
    Enum.call(this);
    this.angle = angle;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ChartBars$Fit_initFields() {
    ChartBars$Fit_initFields = function () {
    };
    ChartBars$Fit$FULL_instance = new ChartBars$Fit('FULL', 0, 0.0);
    ChartBars$Fit$DEG45_instance = new ChartBars$Fit('DEG45', 1, -45.0);
    ChartBars$Fit$DEG90_instance = new ChartBars$Fit('DEG90', 2, -90.0);
  }
  var ChartBars$Fit$FULL_instance;
  function ChartBars$Fit$FULL_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$FULL_instance;
  }
  var ChartBars$Fit$DEG45_instance;
  function ChartBars$Fit$DEG45_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$DEG45_instance;
  }
  var ChartBars$Fit$DEG90_instance;
  function ChartBars$Fit$DEG90_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$DEG90_instance;
  }
  ChartBars$Fit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fit',
    interfaces: [Enum]
  };
  function ChartBars$Fit$values() {
    return [ChartBars$Fit$FULL_getInstance(), ChartBars$Fit$DEG45_getInstance(), ChartBars$Fit$DEG90_getInstance()];
  }
  ChartBars$Fit.values = ChartBars$Fit$values;
  function ChartBars$Fit$valueOf(name) {
    switch (name) {
      case 'FULL':
        return ChartBars$Fit$FULL_getInstance();
      case 'DEG45':
        return ChartBars$Fit$DEG45_getInstance();
      case 'DEG90':
        return ChartBars$Fit$DEG90_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.chart.ChartBars.Fit.' + name);
    }
  }
  ChartBars$Fit.valueOf_61zpoe$ = ChartBars$Fit$valueOf;
  ChartBars.prototype.renderBars_fdk1js$ = function ($receiver, rect) {
    var tmp$, tmp$_0;
    var barWidth = rect.width / (this.list.size * 1.5 + 0.5);
    var barLeft = barWidth * 0.5;
    var barSpace = barWidth * 1.5;
    this.renderReferenceLines_uzxjb5$_0($receiver, rect);
    var $receiver_0 = this.list;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var transform$result;
      var bounds = $receiver.getTextBounds_m6rw0r$(item.name);
      if (bounds.bounds.width > barWidth * 2.0) {
        transform$result = ChartBars$Fit$DEG90_getInstance();
      } else if (bounds.bounds.width > barWidth) {
        transform$result = ChartBars$Fit$DEG45_getInstance();
      } else {
        transform$result = ChartBars$Fit$FULL_getInstance();
      }
      tmp$_2.call(destination, transform$result);
    }
    var fit = (tmp$ = max_0(destination)) != null ? tmp$ : ChartBars$Fit$FULL_getInstance();
    tmp$_0 = this.list;
    for (var n = 0; n !== tmp$_0.size; ++n) {
      var item_0 = this.list.get_za3lpa$(n);
      var rx = rect.left + barLeft + barSpace * n;
      var paint = $receiver.createColor_md34sx$(this.colors.get_za3lpa$(0));
      var oldStyle = $receiver.fillStyle;
      $receiver.fillStyle = paint;
      try {
        $receiver.fillRect_6y0v78$(rx, rect.bottom - 1, barWidth, -rect.height * this.get_rRatio_syzv5q$(item_0));
      }finally {
        $receiver.fillStyle = oldStyle;
      }
      $receiver.save();
      try {
        $receiver.translate_lu1900$(rx + barWidth * 0.5, rect.bottom + 4);
        $receiver.rotateDeg_14dthe$(fit.angle);
        var text = item_0.name;
        var halign = fit === ChartBars$Fit$FULL_getInstance() ? HorizontalAlign$Companion_getInstance().CENTER : HorizontalAlign$Companion_getInstance().RIGHT;
        var valign = VerticalAlign$Companion_getInstance().MIDDLE;
        var color = Colors_getInstance().DARKSLATEGRAY;
        var font;
        var fontSize;
        font = $receiver.font;
        fontSize = $receiver.fontSize;
        var oldFont = $receiver.font;
        var oldFontSize = $receiver.fontSize;
        var oldHalign = $receiver.horizontalAlign;
        var oldValign = $receiver.verticalAlign;
        try {
          $receiver.font = font;
          $receiver.fontSize = fontSize;
          $receiver.horizontalAlign = halign;
          $receiver.verticalAlign = valign;
          var tmp$_3, tmp$_4;
          tmp$_4 = (tmp$_3 = color != null ? $receiver.createColor_md34sx$(color) : null) != null ? tmp$_3 : $receiver.fillStyle;
          var oldStyle_0 = $receiver.fillStyle;
          $receiver.fillStyle = tmp$_4;
          try {
            $receiver.drawText_60a4hs$(text, numberToDouble(0), numberToDouble(0), true);
          }finally {
            $receiver.fillStyle = oldStyle_0;
          }
        }finally {
          $receiver.font = oldFont;
          $receiver.fontSize = oldFontSize;
          $receiver.horizontalAlign = oldHalign;
          $receiver.verticalAlign = oldValign;
        }
      }finally {
        $receiver.restore();
      }
    }
  };
  ChartBars.prototype.renderChart_6rdc61$ = function ($receiver) {
    var b = $receiver.width * 0.1;
    var hpadding = Math_0.min(64.0, b);
    var b_0 = $receiver.height * 0.1;
    var vpadding = Math_0.min(64.0, b_0);
    var right = $receiver.width - hpadding;
    var bottom = $receiver.height - vpadding;
    this.renderBars_fdk1js$($receiver, Rectangle.Companion.invoke().setBounds_6y0v78$(hpadding, vpadding, right, bottom));
  };
  ChartBars.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChartBars',
    interfaces: [Chart]
  };
  function BaseFiller() {
  }
  BaseFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseFiller',
    interfaces: []
  };
  function NoneFiller() {
    NoneFiller_instance = this;
    BaseFiller.call(this);
  }
  NoneFiller.prototype.fill_6ept6c$ = function (data, offset, x0, x1, y) {
  };
  NoneFiller.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoneFiller',
    interfaces: [BaseFiller]
  };
  var NoneFiller_instance = null;
  function NoneFiller_getInstance() {
    if (NoneFiller_instance === null) {
      new NoneFiller();
    }return NoneFiller_instance;
  }
  function ColorFiller() {
    BaseFiller.call(this);
    this.color_0 = Colors_getInstance().RED.premultiplied;
  }
  ColorFiller.prototype.set_ld7uar$ = function (fill, state) {
    this.color_0 = fill.color.premultiplied;
    return this;
  };
  ColorFiller.prototype.fill_6ept6c$ = function (data, offset, x0, x1, y) {
    data.fill_600akl$(this.color_0, offset + x0 | 0, offset + x1 + 1 | 0);
  };
  ColorFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFiller',
    interfaces: [BaseFiller]
  };
  function BitmapFiller() {
    BaseFiller.call(this);
    this.cycleX_0 = CycleMethod$NO_CYCLE_getInstance();
    this.cycleY_0 = CycleMethod$NO_CYCLE_getInstance();
    this.texture_0 = Bitmaps_getInstance().transparent.bmp;
    this.transform_0 = new Matrix();
    this.linear_0 = true;
    this.stateTrans_0 = new Matrix();
    this.fillTrans_0 = new Matrix();
    this.compTrans_0 = new Matrix();
  }
  BitmapFiller.prototype.set_z3ts7v$ = function (fill, state) {
    this.cycleX_0 = fill.cycleX;
    this.cycleY_0 = fill.cycleY;
    this.texture_0 = fill.bmp32;
    this.transform_0 = fill.transform;
    this.linear_0 = fill.smooth;
    state.transform.inverted_1ktkmn$(this.stateTrans_0);
    fill.transform.inverted_1ktkmn$(this.fillTrans_0);
    var $receiver = this.compTrans_0;
    $receiver.identity();
    $receiver.multiply_19kw1g$($receiver, this.stateTrans_0);
    $receiver.multiply_19kw1g$($receiver, this.fillTrans_0);
    return this;
  };
  BitmapFiller.prototype.lookupLinear_lu1900$ = function (x, y) {
    return this.texture_0.getRgbaSampled_lu1900$(x, y);
  };
  BitmapFiller.prototype.lookupNearest_lu1900$ = function (x, y) {
    return this.texture_0.get_vux9f0$(numberToInt(x), numberToInt(y));
  };
  BitmapFiller.prototype.fill_6ept6c$ = function (data, offset, x0, x1, y) {
    for (var n = x0; n <= x1; n++) {
      var tx = apply_0(this.cycleX_0, this.compTrans_0.transformX_lu1900$(numberToDouble(n), numberToDouble(y)), this.texture_0.width);
      var ty = apply_0(this.cycleY_0, this.compTrans_0.transformY_lu1900$(numberToDouble(n), numberToDouble(y)), this.texture_0.height);
      var color = this.linear_0 ? this.lookupLinear_lu1900$(tx, ty) : this.lookupNearest_lu1900$(tx, ty);
      data.set_wpz7qp$(offset + n | 0, color.premultiplied);
    }
  };
  BitmapFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFiller',
    interfaces: [BaseFiller]
  };
  function GradientFiller() {
    BaseFiller.call(this);
    this.NCOLORS_0 = 256;
    this.colors_0 = RgbaPremultipliedArray$Companion_getInstance().invoke_za3lpa$(this.NCOLORS_0);
    this.fill_p4dx72$_0 = this.fill_p4dx72$_0;
    this.stateInv_0 = new Matrix();
  }
  Object.defineProperty(GradientFiller.prototype, 'fill_0', {
    get: function () {
      if (this.fill_p4dx72$_0 == null)
        return throwUPAE('fill');
      return this.fill_p4dx72$_0;
    },
    set: function (fill) {
      this.fill_p4dx72$_0 = fill;
    }
  });
  GradientFiller.prototype.stopN_0 = function (n) {
    return numberToInt(this.fill_0.stops.get_za3lpa$(n) * this.NCOLORS_0);
  };
  GradientFiller.prototype.set_rzuytg$ = function (fill, state) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.fill_0 = fill;
    state.transform.inverted_1ktkmn$(this.stateInv_0);
    switch (fill.numberOfStops) {
      case 0:
      case 1:
        var color = fill.numberOfStops === 0 ? Colors_getInstance().FUCHSIA : new RGBA(first(fill.colors));
        var pcolor = color.premultiplied;
        tmp$ = this.NCOLORS_0;
        for (var n = 0; n < tmp$; n++)
          this.colors_0.set_wpz7qp$(n, pcolor);
        break;
      default:tmp$_0 = this.stopN_0(0);
        for (var n_0 = 0; n_0 < tmp$_0; n_0++)
          this.colors_0.set_wpz7qp$(n_0, (new RGBA(first(fill.colors))).premultiplied);
        tmp$_1 = fill.numberOfStops - 1 | 0;
        for (var n_1 = 0; n_1 < tmp$_1; n_1++) {
          var stop0 = this.stopN_0(n_1 + 0 | 0);
          var stop1 = this.stopN_0(n_1 + 1 | 0);
          var color0 = new RGBA(fill.colors.getAt_za3lpa$(n_1 + 0 | 0));
          var color1 = new RGBA(fill.colors.getAt_za3lpa$(n_1 + 1 | 0));
          for (var s = stop0; s < stop1; s++) {
            var ratio = (s - stop0 | 0) / (stop1 - stop0 | 0);
            this.colors_0.set_wpz7qp$(s, RGBA$Companion_getInstance().interpolate_utyrs$(color0, color1, ratio).premultiplied);
          }
        }

        tmp$_2 = this.stopN_0(fill.numberOfStops - 1 | 0);
        tmp$_3 = this.NCOLORS_0;
        for (var n_2 = tmp$_2; n_2 < tmp$_3; n_2++)
          this.colors_0.ints[n_2] = last(fill.colors);
        break;
    }
    return this;
  };
  GradientFiller.prototype.color_0 = function (ratio) {
    return this.colors_0.get_za3lpa$(numberToInt(clamp01(ratio) * (this.NCOLORS_0 - 1 | 0)));
  };
  GradientFiller.prototype.fill_6ept6c$ = function (data, offset, x0, x1, y) {
    for (var n = x0; n <= x1; n++)
      data.set_wpz7qp$(offset + n | 0, this.color_0(this.fill_0.getRatioAt_y2mxf1$(n, y, this.stateInv_0)));
  };
  GradientFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientFiller',
    interfaces: [BaseFiller]
  };
  function SVG_0(root, warningProcessor) {
    SVG$Companion_getInstance();
    if (warningProcessor === void 0)
      warningProcessor = null;
    this.root = root;
    this.warningProcessor = warningProcessor;
    this.x = this.root.int_bm4lxs$('x', 0);
    this.y = this.root.int_bm4lxs$('y', 0);
    this.dwidth = this.root.double_io5o9c$('width', 128.0);
    this.dheight = this.root.double_io5o9c$('height', 128.0);
    var tmp$;
    this.viewBox = (tmp$ = this.root.getString_61zpoe$('viewBox')) != null ? tmp$ : '0 0 ' + this.dwidth + ' ' + this.dheight;
    var $receiver = split_0(this.viewBox, Kotlin.charArrayOf(32));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      var tmp$_2;
      destination.add_11rb$((tmp$_1 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString())) != null ? tmp$_1 : 0.0);
    }
    this.viewBoxNumbers = destination;
    var $receiver_0 = this.viewBoxNumbers;
    var $receiver_1 = this.viewBoxNumbers;
    var $receiver_2 = this.viewBoxNumbers;
    var $receiver_3 = this.viewBoxNumbers;
    this.viewBoxRectangle = new Rectangle(0 >= 0 && 0 <= get_lastIndex_0($receiver_0) ? $receiver_0.get_za3lpa$(0) : 0.0, 1 >= 0 && 1 <= get_lastIndex_0($receiver_1) ? $receiver_1.get_za3lpa$(1) : 0.0, 2 >= 0 && 2 <= get_lastIndex_0($receiver_2) ? $receiver_2.get_za3lpa$(2) : this.dwidth, 3 >= 0 && 3 <= get_lastIndex_0($receiver_3) ? $receiver_3.get_za3lpa$(3) : this.dheight);
    this.defs = HashMap_init();
    this.parseDefs();
    this.t_0 = new Float64Array(6);
  }
  Object.defineProperty(SVG_0.prototype, 'width', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.width);
    }
  });
  Object.defineProperty(SVG_0.prototype, 'height', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.height);
    }
  });
  function SVG$Style() {
    this.props = HashMap_init();
  }
  SVG$Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: []
  };
  function SVG$GradientUnits(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SVG$GradientUnits_initFields() {
    SVG$GradientUnits_initFields = function () {
    };
    SVG$GradientUnits$USER_SPACE_ON_USER_instance = new SVG$GradientUnits('USER_SPACE_ON_USER', 0);
    SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance = new SVG$GradientUnits('OBJECT_BOUNDING_BOX', 1);
  }
  var SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  function SVG$GradientUnits$USER_SPACE_ON_USER_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  }
  var SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  function SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  }
  SVG$GradientUnits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientUnits',
    interfaces: [Enum]
  };
  function SVG$GradientUnits$values() {
    return [SVG$GradientUnits$USER_SPACE_ON_USER_getInstance(), SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance()];
  }
  SVG$GradientUnits.values = SVG$GradientUnits$values;
  function SVG$GradientUnits$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USER':
        return SVG$GradientUnits$USER_SPACE_ON_USER_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.format.SVG.GradientUnits.' + name);
    }
  }
  SVG$GradientUnits.valueOf_61zpoe$ = SVG$GradientUnits$valueOf;
  SVG_0.prototype.parsePercent_61zpoe$ = function (str) {
    var tmp$;
    if (endsWith(str, '%')) {
      tmp$ = toDouble(substr_0(str, 0, -1)) / 100.0;
    } else {
      tmp$ = toDouble(str);
    }
    return tmp$;
  };
  SVG_0.prototype.parseStops_473e7m$ = function (xml) {
    var tmp$;
    var out = ArrayList_init_0();
    tmp$ = xml.children_61zpoe$('stop').iterator();
    while (tmp$.hasNext()) {
      var stop = tmp$.next();
      var offset = this.parsePercent_61zpoe$(stop.str_puj7f4$('offset'));
      var colorStop = Colors$Default_getInstance().get_61zpoe$(stop.str_puj7f4$('stop-color'));
      var alphaStop = stop.double_io5o9c$('stop-opacity', 1.0);
      var element = new Pair(offset, RGBA$Companion_getInstance().invoke_vux9f0$(colorStop.rgb, numberToInt(alphaStop * 255)));
      out.add_11rb$(element);
    }
    return out;
  };
  SVG_0.prototype.parseDef_473e7m$ = function (def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var type = def.nameLC;
    switch (type) {
      case 'lineargradient':
      case 'radialgradient':
        var id = def.str_puj7f4$('id').toLowerCase();
        var x0 = def.double_io5o9c$('x1', 0.0);
        var y0 = def.double_io5o9c$('y1', 0.0);
        var x1 = def.double_io5o9c$('x2', 1.0);
        var y1 = def.double_io5o9c$('y2', 1.0);
        var stops = this.parseStops_473e7m$(def);
        var href = def.strNull_61zpoe$('xlink:href');
        if (equals(type, 'lineargradient')) {
          tmp$ = new GradientPaint(GradientKind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
        } else {
          var r0 = def.double_io5o9c$('r0', 0.0);
          var r1 = def.double_io5o9c$('r1', 0.0);
          tmp$ = new GradientPaint(GradientKind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
        }

        var g = tmp$;
        if ((tmp$_0 = def.strNull_61zpoe$('xlink:href')) != null) {
          var tmp$_3;
          var id_0 = trim_0(tmp$_0, Kotlin.charArrayOf(35));
          var original = (tmp$_3 = this.defs.get_11rb$(id_0)) == null || Kotlin.isType(tmp$_3, GradientPaint) ? tmp$_3 : null;
          if (original != null) {
            g.stops.add_avch8c$(original.stops);
            g.colors.add_38vc8i$(original.colors);
          }}
        tmp$_1 = stops.iterator();
        while (tmp$_1.hasNext()) {
          var tmp$_4 = tmp$_1.next();
          var offset = tmp$_4.component1()
          , color = tmp$_4.component2();
          g.addColorStop_ycmdr1$(offset, color);
        }

        if ((tmp$_2 = def.getString_61zpoe$('gradientTransform')) != null) {
          g.transform.premultiply_1ktkmn$(this.parseTransform_61zpoe$(tmp$_2));
        }
        this.defs.put_xwzc9p$(id, g);
        break;
      case 'style':
        break;
      case '_text_':
        break;
      default:println("Unhandled def: '" + type + "'");
        break;
    }
  };
  SVG_0.prototype.parseDefs = function () {
    var tmp$;
    var $receiver = get_allChildren(this.root.get_61zpoe$('defs'));
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!get_isComment(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var def = tmp$.next();
      this.parseDef_473e7m$(def);
    }
  };
  SVG_0.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      c.strokeStyle = NonePaint_getInstance();
      c.fillStyle = NonePaint_getInstance();
      this.drawElement_97uusy$(this.root, c);
    }finally {
      c.restore();
    }
  };
  SVG_0.prototype.drawChildren_97uusy$ = function (xml, c) {
    var tmp$;
    tmp$ = xml.allChildren.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      this.drawElement_97uusy$(child, c);
    }
  };
  SVG_0.prototype.parseFillStroke_vgfctv$ = function (c, str2, bounds) {
    var tmp$, tmp$_0;
    var $receiver = str2.toLowerCase();
    var tmp$_1;
    var str = trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString();
    if (startsWith(str, 'url(')) {
      var urlPattern = substr_0(str, 4, -1);
      if (startsWith(urlPattern, '#')) {
        var idName = substr(urlPattern, 1).toLowerCase();
        var def = this.defs.get_11rb$(idName);
        if (def == null) {
          println(this.defs);
          println("Can't find svg definition '" + idName + "'");
        }tmp$ = def != null ? def : NonePaint_getInstance();
      } else {
        println('Unsupported ' + str);
        tmp$ = NonePaint_getInstance();
      }
    } else if (startsWith(str, 'rgba(')) {
      var $receiver_0 = split(removeSuffix(removePrefix(str, 'rgba('), ')'), [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3;
        var tmp$_4;
        destination.add_11rb$((tmp$_3 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_4 = item) ? tmp$_4 : throwCCE()).toString())) != null ? tmp$_3 : 0.0);
      }
      var components = destination;
      tmp$ = new ColorPaint(RGBA$Companion_getInstance().invoke_tjonv8$(numberToInt(components.get_za3lpa$(0)), numberToInt(components.get_za3lpa$(1)), numberToInt(components.get_za3lpa$(2)), numberToInt(components.get_za3lpa$(3) * 255)));
    } else {
      if (equals(str, 'none'))
        tmp$ = NonePaint_getInstance();
      else
        tmp$ = c.createColor_md34sx$(Colors$Default_getInstance().get_61zpoe$(str));
    }
    var res = tmp$;
    if (Kotlin.isType(res, GradientPaint)) {
      var m = new Matrix();
      m.scale_lu1900$(bounds.width, bounds.height);
      var out = res.applyMatrix_1ktkmn$(m);
      tmp$_0 = out;
    } else {
      tmp$_0 = res;
    }
    return tmp$_0;
  };
  function SVG$drawElement$lambda$lambda(closure$ss) {
    return function (it) {
      return closure$ss.hasMore;
    };
  }
  function SVG$drawElement$lambda$lambda_0(closure$ss) {
    return function (it) {
      var $this = closure$ss;
      while (true) {
        var tmp$ = $this.hasMore;
        if (tmp$) {
          tmp$ = !get_isNumeric(unboxChar($this.peekChar()));
        }if (!tmp$)
          break;
        $this.readChar();
      }
      var $this_0 = closure$ss;
      var tmp$_0;
      var start = $this_0.pos;
      while (true) {
        var tmp$_1 = $this_0.hasMore;
        if (tmp$_1) {
          tmp$_1 = get_isNumeric(unboxChar($this_0.peekChar()));
        }if (!tmp$_1)
          break;
        $this_0.readChar();
      }
      var end = $this_0.pos;
      var out = toDouble((tmp$_0 = end > start ? $this_0.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '');
      var $this_1 = closure$ss;
      while (true) {
        var tmp$_2 = $this_1.hasMore;
        if (tmp$_2) {
          tmp$_2 = !get_isNumeric(unboxChar($this_1.peekChar()));
        }if (!tmp$_2)
          break;
        $this_1.readChar();
      }
      return out;
    };
  }
  function SVG$drawElement$lambda$dumpTokens(closure$tokens, this$SVG, this$) {
    return function () {
      var closure$tokens_0 = closure$tokens;
      var this$SVG_0 = this$SVG;
      var n = 0;
      for (var tmp$ = closure$tokens_0.iterator(); tmp$.hasNext(); ++n) {
        var token = tmp$.next();
        var tmp$_0;
        (tmp$_0 = this$SVG_0.warningProcessor) != null ? tmp$_0('- ' + n + ': ' + token) : null;
      }
    };
  }
  function SVG$drawElement$lambda$isNextNumber(closure$tl) {
    return function () {
      return closure$tl.hasMore ? Kotlin.isType(closure$tl.peek(), SVG$PathTokenNumber) : false;
    };
  }
  function SVG$drawElement$lambda$readNumber(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      var tmp$;
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenNumber))
          return token.value;
        (tmp$ = this$SVG.warningProcessor) != null ? tmp$('Invalid path (expected number but found ' + token + ') at ' + (closure$tl.position - 1 | 0)) : null;
        closure$dumpTokens();
      }
      return 0.0;
    };
  }
  function SVG$drawElement$lambda$n(closure$readNumber) {
    return function () {
      return closure$readNumber();
    };
  }
  function SVG$drawElement$lambda$nX(this$, closure$readNumber) {
    return function (relative) {
      return relative ? this$.lastX + closure$readNumber() : closure$readNumber();
    };
  }
  function SVG$drawElement$lambda$nY(this$, closure$readNumber) {
    return function (relative) {
      return relative ? this$.lastY + closure$readNumber() : closure$readNumber();
    };
  }
  function SVG$drawElement$lambda$readNextTokenCmd(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      var tmp$;
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenCmd))
          return unboxChar(token.id);
        (tmp$ = this$SVG.warningProcessor) != null ? tmp$('Invalid path (expected command but found ' + token + ') at ' + (closure$tl.position - 1 | 0)) : null;
        closure$dumpTokens();
      }
      return null;
    };
  }
  SVG_0.prototype.drawElement_97uusy$ = function (xml, c) {
    c.save();
    try {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      var bounds = Rectangle.Companion.invoke();
      var nodeName = xml.nameLC;
      switch (nodeName) {
        case '_text_':
          break;
        case 'svg':
          this.drawChildren_97uusy$(xml, c);
          break;
        case 'lineargradient':
        case 'radialgradient':
          this.parseDef_473e7m$(xml);
          break;
        case 'rect':
          var x = xml.double_io5o9c$('x');
          var y = xml.double_io5o9c$('y');
          var width = xml.double_io5o9c$('width');
          var height = xml.double_io5o9c$('height');
          var rx = xml.double_io5o9c$('rx');
          var ry = xml.double_io5o9c$('ry');
          bounds.setTo_6y0v78$(x, y, width, height);
          roundRect(c, x, y, width, height, rx, ry);
          break;
        case 'circle':
          var cx = xml.double_io5o9c$('cx');
          var cy = xml.double_io5o9c$('cy');
          var radius = xml.double_io5o9c$('r');
          circle(c, cx, cy, radius);
          bounds.setBounds_6y0v78$(cx - radius, cy - radius, cx + radius, cy + radius);
          break;
        case 'polyline':
        case 'polygon':
          c.beginPath();
          var ss = new StrReader(xml.str_puj7f4$('points'));
          var $receiver = ArrayList_init_0();
          while (SVG$drawElement$lambda$lambda(ss)($receiver.size)) {
            var element = SVG$drawElement$lambda$lambda_0(ss)($receiver.size);
            $receiver.add_11rb$(element);
          }

          var pps = new ListReader(toList($receiver));
          var path = new GraphicsPath();
          var edges = 0;
          path.moveTo_lu1900$(pps.read(), pps.read());
          while (pps.hasMore) {
            var x_0 = pps.read();
            var y_0 = pps.read();
            path.lineTo_lu1900$(x_0, y_0);
            edges = edges + 1 | 0;
          }

          if (equals(nodeName, 'polygon'))
            path.close();
          path.getBounds_iqjpvb$(bounds);
          c.path_lcui0n$(path);
          break;
        case 'line':
          c.beginPath();
          var x1 = xml.double_io5o9c$('x1');
          var y1 = xml.double_io5o9c$('y1');
          var x2 = xml.double_io5o9c$('x2');
          var y2 = xml.double_io5o9c$('y2');
          c.moveTo_lu1900$(x1, y1);
          c.lineTo_lu1900$(x2, y2);
          bounds.setBounds_6y0v78$(x1, y1, x2, y2);
          break;
        case 'g':
          break;
        case 'text':
          break;
        case 'path':
          var d = xml.str_puj7f4$('d');
          var tokens = SVG$Companion_getInstance().tokenizePath_61zpoe$(d);
          var tl = new ListReader(tokens);
          var dumpTokens = SVG$drawElement$lambda$dumpTokens(tokens, this, c);
          var isNextNumber = SVG$drawElement$lambda$isNextNumber(tl);
          var readNumber = SVG$drawElement$lambda$readNumber(tl, this, dumpTokens);
          var n = SVG$drawElement$lambda$n(readNumber);
          var nX = SVG$drawElement$lambda$nX(c, readNumber);
          var nY = SVG$drawElement$lambda$nY(c, readNumber);
          var readNextTokenCmd = SVG$drawElement$lambda$readNextTokenCmd(tl, this, dumpTokens);
          c.beginPath();
          c.moveTo_lu1900$(0.0, 0.0);
          var lastCX = 0.0;
          var lastCY = 0.0;
          var lastCmd = 45;
          while (tl.hasMore) {
            tmp$ = readNextTokenCmd();
            if (tmp$ == null) {
              break;
            }var cmd = tmp$;
            var relative = (new CharRange(97, 122)).contains_mef7kx$(cmd);
            switch (lastCmd) {
              case 83:
              case 67:
              case 84:
              case 81:
              case 115:
              case 99:
              case 116:
              case 113:
                tmp$_0 = true;
                break;
              default:tmp$_0 = false;
                break;
            }
            var lastCurve = tmp$_0;
            switch (cmd) {
              case 77:
              case 109:
                var ax = n();
                var ay = n();
                if (relative) {
                  rMoveTo(c, numberToDouble(ax), numberToDouble(ay));
                } else {
                  c.moveTo_lu1900$(numberToDouble(ax), numberToDouble(ay));
                }

                while (isNextNumber()) {
                  var ax_0 = n();
                  var ay_0 = n();
                  if (relative) {
                    rLineTo(c, numberToDouble(ax_0), numberToDouble(ay_0));
                  } else {
                    c.lineTo_lu1900$(numberToDouble(ax_0), numberToDouble(ay_0));
                  }
                }

                break;
              case 76:
              case 108:
                while (isNextNumber()) {
                  var ax_1 = n();
                  var ay_1 = n();
                  if (relative) {
                    rLineTo(c, numberToDouble(ax_1), numberToDouble(ay_1));
                  } else {
                    c.lineTo_lu1900$(numberToDouble(ax_1), numberToDouble(ay_1));
                  }
                }

                break;
              case 72:
              case 104:
                while (isNextNumber()) {
                  var ax_2 = n();
                  if (relative) {
                    rLineToH(c, numberToDouble(ax_2));
                  } else {
                    lineToH(c, numberToDouble(ax_2));
                  }
                }

                break;
              case 86:
              case 118:
                while (isNextNumber()) {
                  var ay_2 = n();
                  if (relative) {
                    rLineToV(c, numberToDouble(ay_2));
                  } else {
                    lineToV(c, numberToDouble(ay_2));
                  }
                }

                break;
              case 81:
              case 113:
                while (isNextNumber()) {
                  var cx_0 = nX(relative);
                  var cy_0 = nY(relative);
                  var x2_0 = nX(relative);
                  var y2_0 = nY(relative);
                  lastCX = cx_0;
                  lastCY = cy_0;
                  c.quadTo_6y0v78$(cx_0, cy_0, x2_0, y2_0);
                }

                break;
              case 67:
              case 99:
                while (isNextNumber()) {
                  var x1_0 = nX(relative);
                  var y1_0 = nY(relative);
                  var x2_1 = nX(relative);
                  var y2_1 = nY(relative);
                  var x_1 = nX(relative);
                  var y_1 = nY(relative);
                  lastCX = x2_1;
                  lastCY = y2_1;
                  c.cubicTo_15yvbs$(x1_0, y1_0, x2_1, y2_1, x_1, y_1);
                }

                break;
              case 83:
              case 115:
                while (isNextNumber()) {
                  var x2_2 = nX(relative);
                  var y2_2 = nY(relative);
                  var x_2 = nX(relative);
                  var y_2 = nY(relative);
                  var x1_1 = lastCurve ? c.lastX * 2 - lastCX : c.lastX;
                  var y1_1 = lastCurve ? c.lastY * 2 - lastCY : c.lastY;
                  lastCX = x2_2;
                  lastCY = y2_2;
                  c.cubicTo_15yvbs$(x1_1, y1_1, x2_2, y2_2, x_2, y_2);
                  lastCurve = true;
                }

                break;
              case 84:
              case 116:
                var n_0 = 0;
                while (isNextNumber()) {
                  var x2_3 = nX(relative);
                  var y2_3 = nY(relative);
                  var cx_1 = lastCurve ? c.lastX * 2 - lastCX : c.lastX;
                  var cy_1 = lastCurve ? c.lastY * 2 - lastCY : c.lastY;
                  lastCX = cx_1;
                  lastCY = cy_1;
                  c.quadTo_6y0v78$(cx_1, cy_1, x2_3, y2_3);
                  n_0 = n_0 + 1 | 0;
                  lastCurve = true;
                }

                break;
              case 65:
              case 97:
                var $receiver_0 = readNumber();
                var rx_0 = Math_0.abs($receiver_0);
                var $receiver_1 = readNumber();
                var ry_0 = Math_0.abs($receiver_1);
                var rotx = readNumber() / 180.0 * math.PI;
                var $receiver_2 = readNumber();
                var fa = Math_0.abs($receiver_2) > 1.0E-6 ? 1 : 0;
                var $receiver_3 = readNumber();
                var fs = Math_0.abs($receiver_3) > 1.0E-6 ? 1 : 0;
                var x1_2 = c.lastX;
                var y1_2 = c.lastY;
                var x2_4 = nX(relative);
                var y2_4 = nY(relative);
                var dx = x1_2 - x2_4;
                var dy = y1_2 - y2_4;
                var x_3 = dx;
                var y_3 = dy;
                var d_0 = Math_0.hypot(x_3, y_3);
                if (d_0 < 1.0E-6 || rx_0 < 1.0E-6 || ry_0 < 1.0E-6) {
                  c.lineTo_lu1900$(x2_4, y2_4);
                } else {
                  var sinrx = Math_0.sin(rotx);
                  var cosrx = Math_0.cos(rotx);
                  var x1p = cosrx * dx / 2.0 + sinrx * dy / 2.0;
                  var y1p = -sinrx * dx / 2.0 + cosrx * dy / 2.0;
                  var d_1 = this.sqr_0(x1p) / this.sqr_0(rx_0) + this.sqr_0(y1p) / this.sqr_0(ry_0);
                  if (d_1 > 1) {
                    d_1 = this.sqr_0(d_1);
                    rx_0 *= d_1;
                    ry_0 *= d_1;
                  }var s = 0.0;
                  var sa = this.sqr_0(rx_0) * this.sqr_0(ry_0) - this.sqr_0(rx_0) * this.sqr_0(y1p) - this.sqr_0(ry_0) * this.sqr_0(x1p);
                  var sb = this.sqr_0(rx_0) * this.sqr_0(y1p) + this.sqr_0(ry_0) * this.sqr_0(x1p);
                  if (sa < 0.0)
                    sa = 0.0;
                  if (sb > 0.0) {
                    var x_4 = sa / sb;
                    s = Math_0.sqrt(x_4);
                  }if (fa === fs)
                    s = -s;
                  var cxp = s * rx_0 * y1p / ry_0;
                  var cyp = s * -ry_0 * x1p / rx_0;
                  var cx_2 = (x1_2 + x2_4) / 2.0 + cosrx * cxp - sinrx * cyp;
                  var cy_2 = (y1_2 + y2_4) / 2.0 + sinrx * cxp + cosrx * cyp;
                  var ux = (x1p - cxp) / rx_0;
                  var uy = (y1p - cyp) / ry_0;
                  var vx = (-x1p - cxp) / rx_0;
                  var vy = (-y1p - cyp) / ry_0;
                  var a1 = this.vecang_0(1.0, 0.0, ux, uy);
                  var da = this.vecang_0(ux, uy, vx, vy);
                  if (fs === 0 && da > 0)
                    da -= 2 * math.PI;
                  else if (fs === 1 && da < 0)
                    da += 2 * math.PI;
                  this.t_0[0] = cosrx;
                  this.t_0[1] = sinrx;
                  this.t_0[2] = -sinrx;
                  this.t_0[3] = cosrx;
                  this.t_0[4] = cx_2;
                  this.t_0[5] = cy_2;
                  var ndivs = numberToInt(Math_0.abs(da) / (math.PI * 0.5) + 1.0);
                  var hda = da / ndivs / 2.0;
                  var x_5 = 4.0 / 3.0 * (1.0 - Math_0.cos(hda)) / Math_0.sin(hda);
                  var kappa = Math_0.abs(x_5);
                  if (da < 0.0)
                    kappa = -kappa;
                  var ptanx = 0.0;
                  var ptany = 0.0;
                  var px = 0.0;
                  var py = 0.0;
                  for (var i = 0; i <= ndivs; i++) {
                    var a = a1 + da * (i / ndivs);
                    dx = Math_0.cos(a);
                    dy = Math_0.sin(a);
                    var x_6 = this.xformPointX_0(dx * rx_0, dy * ry_0, this.t_0);
                    var y_4 = this.xformPointY_0(dx * rx_0, dy * ry_0, this.t_0);
                    var tanx = this.xformVecX_0(-dy * rx_0 * kappa, dx * ry_0 * kappa, this.t_0);
                    var tany = this.xformVecY_0(-dy * rx_0 * kappa, dx * ry_0 * kappa, this.t_0);
                    if (i > 0) {
                      c.cubicTo_15yvbs$(px + ptanx, py + ptany, x_6 - tanx, y_4 - tany, x_6, y_4);
                    }px = x_6;
                    py = y_4;
                    ptanx = tanx;
                    ptany = tany;
                  }
                  c.lastX = x2_4;
                  c.lastY = y2_4;
                }

                break;
              case 90:
              case 122:
                c.close();
                break;
              default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Unsupported command '" + String.fromCharCode(cmd) + "' : Parsed: '" + toSvgPathString(c.state.path) + "', Original: '" + d + "'"));
            }
            lastCmd = cmd;
          }

          (tmp$_1 = this.warningProcessor) != null ? tmp$_1("Parsed SVG Path: '" + toSvgPathString(c.state.path) + "'") : null;
          (tmp$_2 = this.warningProcessor) != null ? tmp$_2("Original SVG Path: '" + d + "'") : null;
          (tmp$_3 = this.warningProcessor) != null ? tmp$_3('Points: ' + c.state.path.getPoints()) : null;
          c.getBounds_2da8yn$(bounds);
          break;
      }
      if (xml.hasAttribute_61zpoe$('stroke-width')) {
        c.lineWidth = xml.double_io5o9c$('stroke-width', 1.0);
      }if (xml.hasAttribute_61zpoe$('stroke')) {
        c.strokeStyle = this.parseFillStroke_vgfctv$(c, xml.str_puj7f4$('stroke'), bounds);
      }if (xml.hasAttribute_61zpoe$('fill'))
        this.applyFill_vgfctv$(c, xml.str_puj7f4$('fill'), bounds);
      if (xml.hasAttribute_61zpoe$('font-size')) {
        c.fontSize = this.parseSizeAsDouble_61zpoe$(xml.str_puj7f4$('font-size'));
      }if (xml.hasAttribute_61zpoe$('font-family')) {
        c.font = c.fontRegistry.get_61zpoe$(xml.str_puj7f4$('font-family'));
      }if (xml.hasAttribute_61zpoe$('style')) {
        this.applyStyle_0(c, SVG$SvgStyle$Companion_getInstance().parse_bodv9c$(xml.str_puj7f4$('style'), this.warningProcessor), bounds);
      }if (xml.hasAttribute_61zpoe$('transform')) {
        this.applyTransform_0(c.state, this.parseTransform_61zpoe$(xml.str_puj7f4$('transform')));
      }if (xml.hasAttribute_61zpoe$('text-anchor')) {
        var $receiver_4 = xml.str_puj7f4$('text-anchor').toLowerCase();
        var tmp$_6;
        switch (trim(Kotlin.isCharSequence(tmp$_6 = $receiver_4) ? tmp$_6 : throwCCE()).toString()) {
          case 'left':
            tmp$_4 = HorizontalAlign$Companion_getInstance().LEFT;
            break;
          case 'center':
          case 'middle':
            tmp$_4 = HorizontalAlign$Companion_getInstance().CENTER;
            break;
          case 'right':
          case 'end':
            tmp$_4 = HorizontalAlign$Companion_getInstance().RIGHT;
            break;
          default:tmp$_4 = c.horizontalAlign;
            break;
        }
        c.horizontalAlign = tmp$_4;
      }if (xml.hasAttribute_61zpoe$('alignment-baseline')) {
        var $receiver_5 = xml.str_puj7f4$('alignment-baseline').toLowerCase();
        var tmp$_7;
        switch (trim(Kotlin.isCharSequence(tmp$_7 = $receiver_5) ? tmp$_7 : throwCCE()).toString()) {
          case 'hanging':
            tmp$_5 = VerticalAlign$Companion_getInstance().TOP;
            break;
          case 'center':
          case 'middle':
            tmp$_5 = VerticalAlign$Companion_getInstance().MIDDLE;
            break;
          case 'baseline':
            tmp$_5 = VerticalAlign$Companion_getInstance().BASELINE;
            break;
          case 'bottom':
            tmp$_5 = VerticalAlign$Companion_getInstance().BOTTOM;
            break;
          default:tmp$_5 = c.verticalAlign;
            break;
        }
        c.verticalAlign = tmp$_5;
      }if (xml.hasAttribute_61zpoe$('fill-opacity')) {
        c.globalAlpha = xml.double_io5o9c$('fill-opacity', 1.0);
      }switch (nodeName) {
        case 'g':
          this.drawChildren_97uusy$(xml, c);
          break;
        case 'text':
          var $receiver_6 = xml.text;
          var tmp$_8;
          c.fillText_ai6r6m$(trim(Kotlin.isCharSequence(tmp$_8 = $receiver_6) ? tmp$_8 : throwCCE()).toString(), xml.double_io5o9c$('x') + xml.double_io5o9c$('dx'), xml.double_io5o9c$('y') + xml.double_io5o9c$('dy'));
          break;
      }
      c.fillStroke();
    }finally {
      c.restore();
    }
    return c;
  };
  SVG_0.prototype.sqr_0 = function (v) {
    return v * v;
  };
  SVG_0.prototype.vmag_0 = function (x, y) {
    var x_0 = x * x + y * y;
    return Math_0.sqrt(x_0);
  };
  SVG_0.prototype.vecrat_0 = function (ux, uy, vx, vy) {
    return (ux * vx + uy * vy) / (this.vmag_0(ux, uy) * this.vmag_0(vx, vy));
  };
  SVG_0.prototype.vecang_0 = function (ux, uy, vx, vy) {
    var r = this.vecrat_0(ux, uy, vx, vy);
    if (r < -1.0)
      r = -1.0;
    if (r > 1.0)
      r = 1.0;
    var tmp$ = ux * vy < uy * vx ? -1.0 : 1.0;
    var x = r;
    return tmp$ * Math_0.acos(x);
  };
  SVG_0.prototype.xformPointX_0 = function (x, y, t) {
    return x * t[0] + y * t[2] + t[4];
  };
  SVG_0.prototype.xformPointY_0 = function (x, y, t) {
    return x * t[1] + y * t[3] + t[5];
  };
  SVG_0.prototype.xformVecX_0 = function (x, y, t) {
    return x * t[0] + y * t[2];
  };
  SVG_0.prototype.xformVecY_0 = function (x, y, t) {
    return x * t[1] + y * t[3];
  };
  SVG_0.prototype.parseSizeAsDouble_61zpoe$ = function (size) {
    var tmp$;
    var destination = StringBuilder_init();
    var tmp$_0;
    tmp$_0 = size.length;
    for (var index = 0; index < tmp$_0; index++) {
      var element = size.charCodeAt(index);
      var it = toBoxedChar(element);
      if (!(new CharRange(97, 122)).contains_mef7kx$(unboxChar(it)) && !(new CharRange(65, 90)).contains_mef7kx$(unboxChar(it)))
        destination.append_s8itvh$(element);
    }
    return (tmp$ = toDoubleOrNull(destination.toString())) != null ? tmp$ : 16.0;
  };
  SVG_0.prototype.applyFill_vgfctv$ = function (c, str, bounds) {
    c.fillStyle = this.parseFillStroke_vgfctv$(c, str, bounds);
  };
  SVG_0.prototype.applyTransform_0 = function (state, transform) {
    state.transform.premultiply_1ktkmn$(transform);
  };
  SVG_0.prototype.applyStyle_0 = function (c, style, bounds) {
    var tmp$, tmp$_0;
    tmp$ = style.styles.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      var v = tmp$_1.value;
      if (equals(k, 'fill'))
        this.applyFill_vgfctv$(c, v, bounds);
      else
        (tmp$_0 = this.warningProcessor) != null ? tmp$_0('Unsupported style ' + k + ' in css') : null;
    }
  };
  function SVG$parseTransform$double(closure$doubleArgs) {
    return function (index) {
      var $receiver = closure$doubleArgs;
      return index >= 0 && index <= get_lastIndex_0($receiver) ? $receiver.get_za3lpa$(index) : 0.0;
    };
  }
  SVG_0.prototype.parseTransform_61zpoe$ = function (str) {
    var tokens = SVG$SvgStyle$Companion_getInstance().tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var out = new Matrix();
    while (tr.hasMore) {
      var id = tr.read().toLowerCase();
      var args = ArrayList_init_0();
      if (equals(tr.peek(), '(')) {
        tr.read();
        while (true) {
          if (equals(tr.peek(), ')')) {
            tr.read();
            break;
          }if (equals(tr.peek(), ',')) {
            tr.read();
            continue;
          }var element = tr.read();
          args.add_11rb$(element);
        }
      }var destination = ArrayList_init(collectionSizeOrDefault(args, 10));
      var tmp$;
      tmp$ = args.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$((tmp$_0 = toDoubleOrNull(item)) != null ? tmp$_0 : 0.0);
      }
      var doubleArgs = destination;
      var double = SVG$parseTransform$double(doubleArgs);
      switch (id) {
        case 'translate':
          out.pretranslate_lu1900$(double(0), double(1));
          break;
        case 'scale':
          out.prescale_lu1900$(double(0), double(1));
          break;
        case 'matrix':
          out.premultiply_15yvbs$(double(0), double(1), double(2), double(3), double(4), double(5));
          break;
        default:invalidOp('Unsupported transform ' + id + ' : ' + args + ' : ' + doubleArgs + ' (' + str + ')');
          break;
      }
    }
    return out;
  };
  function SVG$Companion() {
    SVG$Companion_instance = this;
  }
  function SVG$Companion$tokenizePath$skipSeparators($receiver) {
    while (true) {
      var tmp$ = $receiver.hasMore;
      if (tmp$) {
        var it = $receiver.peekChar();
        tmp$ = unboxChar(it) === 44 || unboxChar(it) === 32 || unboxChar(it) === 9 || unboxChar(it) === 10 || unboxChar(it) === 13;
      }if (!tmp$)
        break;
      $receiver.readChar();
    }
  }
  function SVG$Companion$tokenizePath$readNumber(closure$skipSeparators) {
    return function ($receiver) {
      var tmp$;
      closure$skipSeparators($receiver);
      var first = {v: true};
      var tmp$_0;
      var start = $receiver.pos;
      while (true) {
        var tmp$_1 = $receiver.hasMore;
        if (tmp$_1) {
          var it = $receiver.peekChar();
          var filter$result;
          if (first.v) {
            first.v = false;
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 43;
          } else {
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 46;
          }
          tmp$_1 = filter$result;
        }if (!tmp$_1)
          break;
        $receiver.readChar();
      }
      var end = $receiver.pos;
      var str = (tmp$_0 = end > start ? $receiver.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '';
      if (str.length === 0)
        tmp$ = 0.0;
      else
        try {
          tmp$ = toDouble(str);
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            printStackTrace(e);
            tmp$ = 0.0;
          } else
            throw e;
        }
      return tmp$;
    };
  }
  SVG$Companion.prototype.tokenizePath_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var skipSeparators = SVG$Companion$tokenizePath$skipSeparators;
    var readNumber = SVG$Companion$tokenizePath$readNumber(skipSeparators);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      skipSeparators(sr);
      var c = unboxChar(sr.peekChar());
      var tmp$;
      if ((new CharRange(48, 57)).contains_mef7kx$(c) || c === 45 || c === 43) {
        tmp$ = new SVG$PathTokenNumber(readNumber(sr));
      } else {
        tmp$ = new SVG$PathTokenCmd(unboxChar(sr.readChar()));
      }
      var element = tmp$;
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$Companion_instance = null;
  function SVG$Companion_getInstance() {
    if (SVG$Companion_instance === null) {
      new SVG$Companion();
    }return SVG$Companion_instance;
  }
  function SVG$PathToken() {
  }
  SVG$PathToken.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PathToken',
    interfaces: []
  };
  function SVG$PathTokenNumber(value) {
    this.value = value;
  }
  SVG$PathTokenNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenNumber',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenNumber.prototype.component1 = function () {
    return this.value;
  };
  SVG$PathTokenNumber.prototype.copy_14dthe$ = function (value) {
    return new SVG$PathTokenNumber(value === void 0 ? this.value : value);
  };
  SVG$PathTokenNumber.prototype.toString = function () {
    return 'PathTokenNumber(value=' + Kotlin.toString(this.value) + ')';
  };
  SVG$PathTokenNumber.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SVG$PathTokenNumber.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function SVG$PathTokenCmd(id) {
    this.id = toBoxedChar(id);
  }
  SVG$PathTokenCmd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenCmd',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenCmd.prototype.component1 = function () {
    return this.id;
  };
  SVG$PathTokenCmd.prototype.copy_s8itvh$ = function (id) {
    return new SVG$PathTokenCmd(id === void 0 ? this.id : id);
  };
  SVG$PathTokenCmd.prototype.toString = function () {
    return 'PathTokenCmd(id=' + Kotlin.toString(this.id) + ')';
  };
  SVG$PathTokenCmd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  SVG$PathTokenCmd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function SVG$SvgStyle(styles) {
    SVG$SvgStyle$Companion_getInstance();
    if (styles === void 0) {
      styles = HashMap_init();
    }this.styles = styles;
  }
  function SVG$SvgStyle$Companion() {
    SVG$SvgStyle$Companion_instance = this;
  }
  SVG$SvgStyle$Companion.prototype.tokenize_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      while (true) {
        sr.skipSpaces();
        var tmp$;
        var start = sr.pos;
        while (true) {
          var tmp$_0 = sr.hasMore;
          if (tmp$_0) {
            var it = sr.peekChar();
            tmp$_0 = isLetterOrUnderscore(unboxChar(it)) || get_isNumeric(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 35;
          }if (!tmp$_0)
            break;
          sr.readChar();
        }
        var end = sr.pos;
        var id = (tmp$ = end > start ? sr.slice_vux9f0$(start, end) : null) != null ? tmp$ : '';
        if (id.length > 0) {
          out.add_11rb$(id);
        } else {
          break;
        }
      }
      if (sr.eof)
        break;
      sr.skipSpaces();
      var symbol = unboxChar(sr.read());
      var element = String.fromCharCode(symbol);
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$SvgStyle$Companion.prototype.readId_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.readColon_mr88w2$ = function ($receiver) {
    return expect($receiver, ':');
  };
  SVG$SvgStyle$Companion.prototype.readExpression_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.parse_bodv9c$ = function (str, warningProcessor) {
    if (warningProcessor === void 0)
      warningProcessor = null;
    var tokens = this.tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var style = new SVG$SvgStyle();
    while (tr.hasMore) {
      var id = this.readId_mr88w2$(tr);
      if (tr.eof) {
        warningProcessor != null ? warningProcessor("EOF. Parsing (ID='" + id + "'): '" + str + "', " + tokens) : null;
        break;
      }this.readColon_mr88w2$(tr);
      var rexpr = ArrayList_init_0();
      while (tr.hasMore && !equals(tr.peek(), ';')) {
        var element = this.readExpression_mr88w2$(tr);
        rexpr.add_11rb$(element);
      }
      var tmp$ = style.styles;
      var key = id.toLowerCase();
      var value = joinToString(rexpr, '');
      tmp$.put_xwzc9p$(key, value);
      if (tr.hasMore)
        expect(tr, ';');
    }
    return style;
  };
  SVG$SvgStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$SvgStyle$Companion_instance = null;
  function SVG$SvgStyle$Companion_getInstance() {
    if (SVG$SvgStyle$Companion_instance === null) {
      new SVG$SvgStyle$Companion();
    }return SVG$SvgStyle$Companion_instance;
  }
  SVG$SvgStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgStyle',
    interfaces: []
  };
  SVG$SvgStyle.prototype.component1 = function () {
    return this.styles;
  };
  SVG$SvgStyle.prototype.copy_gtra9a$ = function (styles) {
    return new SVG$SvgStyle(styles === void 0 ? this.styles : styles);
  };
  SVG$SvgStyle.prototype.toString = function () {
    return 'SvgStyle(styles=' + Kotlin.toString(this.styles) + ')';
  };
  SVG$SvgStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.styles) | 0;
    return result;
  };
  SVG$SvgStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.styles, other.styles))));
  };
  SVG_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SVG',
    interfaces: [SizedDrawable]
  };
  function SVG_init(str, $this) {
    $this = $this || Object.create(SVG_0.prototype);
    SVG_0.call($this, Xml(str));
    return $this;
  }
  var rCubicTo = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rCubicTo = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rCubicTo_eslsqu$;
    return function ($receiver, cx1, cy1, cx2, cy2, ax, ay, relative) {
      if (relative) {
        rCubicTo($receiver, numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.cubicTo_15yvbs$(numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
      }
    };
  });
  var rQuadTo = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rQuadTo = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rQuadTo_clsz36$;
    return function ($receiver, cx, cy, ax, ay, relative) {
      if (relative) {
        rQuadTo($receiver, numberToDouble(cx), numberToDouble(cy), numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.quadTo_6y0v78$(numberToDouble(cx), numberToDouble(cy), numberToDouble(ax), numberToDouble(ay));
      }
    };
  });
  var rLineTo_0 = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineTo = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rLineTo_b4nog2$;
    return function ($receiver, ax, ay, relative) {
      if (relative) {
        rLineTo($receiver, numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.lineTo_lu1900$(numberToDouble(ax), numberToDouble(ay));
      }
    };
  });
  var rMoveTo_0 = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveTo = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rMoveTo_b4nog2$;
    return function ($receiver, ax, ay, relative) {
      if (relative) {
        rMoveTo($receiver, numberToDouble(ax), numberToDouble(ay));
      } else {
        $receiver.moveTo_lu1900$(numberToDouble(ax), numberToDouble(ay));
      }
    };
  });
  var rMoveToH = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveToH = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rMoveToH_ww6st0$;
    var moveToH = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.moveToH_ww6st0$;
    return function ($receiver, ax, relative) {
      if (relative) {
        rMoveToH($receiver, numberToDouble(ax));
      } else {
        moveToH($receiver, numberToDouble(ax));
      }
    };
  });
  var rMoveToV = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rMoveToV = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rMoveToV_ww6st0$;
    var moveToV = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.moveToV_ww6st0$;
    return function ($receiver, ay, relative) {
      if (relative) {
        rMoveToV($receiver, numberToDouble(ay));
      } else {
        moveToV($receiver, numberToDouble(ay));
      }
    };
  });
  var rLineToH_0 = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineToH = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rLineToH_ww6st0$;
    var lineToH = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.lineToH_ww6st0$;
    return function ($receiver, ax, relative) {
      if (relative) {
        rLineToH($receiver, numberToDouble(ax));
      } else {
        lineToH($receiver, numberToDouble(ax));
      }
    };
  });
  var rLineToV_0 = wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var rLineToV = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.rLineToV_ww6st0$;
    var lineToV = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.lineToV_ww6st0$;
    return function ($receiver, ay, relative) {
      if (relative) {
        rLineToV($receiver, numberToDouble(ay));
      } else {
        lineToV($receiver, numberToDouble(ay));
      }
    };
  });
  function Paint() {
  }
  Paint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Paint',
    interfaces: []
  };
  function NonePaint() {
    NonePaint_instance = this;
  }
  NonePaint.prototype.transformed_1ktkmn$ = function (m) {
    return this;
  };
  NonePaint.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NonePaint',
    interfaces: [Paint]
  };
  var NonePaint_instance = null;
  function NonePaint_getInstance() {
    if (NonePaint_instance === null) {
      new NonePaint();
    }return NonePaint_instance;
  }
  function ColorPaint(color) {
    this.color = color;
  }
  ColorPaint.prototype.transformed_1ktkmn$ = function (m) {
    return this;
  };
  ColorPaint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorPaint',
    interfaces: [Paint]
  };
  function DefaultPaint() {
    DefaultPaint_instance = this;
    ColorPaint.call(this, Colors_getInstance().BLACK);
  }
  DefaultPaint.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultPaint',
    interfaces: [ColorPaint]
  };
  var DefaultPaint_instance = null;
  function DefaultPaint_getInstance() {
    if (DefaultPaint_instance === null) {
      new DefaultPaint();
    }return DefaultPaint_instance;
  }
  function TransformedPaint() {
  }
  TransformedPaint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransformedPaint',
    interfaces: [Paint]
  };
  function GradientKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientKind_initFields() {
    GradientKind_initFields = function () {
    };
    GradientKind$LINEAR_instance = new GradientKind('LINEAR', 0);
    GradientKind$RADIAL_instance = new GradientKind('RADIAL', 1);
    GradientKind$SWEEP_instance = new GradientKind('SWEEP', 2);
  }
  var GradientKind$LINEAR_instance;
  function GradientKind$LINEAR_getInstance() {
    GradientKind_initFields();
    return GradientKind$LINEAR_instance;
  }
  var GradientKind$RADIAL_instance;
  function GradientKind$RADIAL_getInstance() {
    GradientKind_initFields();
    return GradientKind$RADIAL_instance;
  }
  var GradientKind$SWEEP_instance;
  function GradientKind$SWEEP_getInstance() {
    GradientKind_initFields();
    return GradientKind$SWEEP_instance;
  }
  GradientKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientKind',
    interfaces: [Enum]
  };
  function GradientKind$values() {
    return [GradientKind$LINEAR_getInstance(), GradientKind$RADIAL_getInstance(), GradientKind$SWEEP_getInstance()];
  }
  GradientKind.values = GradientKind$values;
  function GradientKind$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return GradientKind$LINEAR_getInstance();
      case 'RADIAL':
        return GradientKind$RADIAL_getInstance();
      case 'SWEEP':
        return GradientKind$SWEEP_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.paint.GradientKind.' + name);
    }
  }
  GradientKind.valueOf_61zpoe$ = GradientKind$valueOf;
  function GradientUnits(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientUnits_initFields() {
    GradientUnits_initFields = function () {
    };
    GradientUnits$USER_SPACE_ON_USE_instance = new GradientUnits('USER_SPACE_ON_USE', 0);
    GradientUnits$OBJECT_BOUNDING_BOX_instance = new GradientUnits('OBJECT_BOUNDING_BOX', 1);
  }
  var GradientUnits$USER_SPACE_ON_USE_instance;
  function GradientUnits$USER_SPACE_ON_USE_getInstance() {
    GradientUnits_initFields();
    return GradientUnits$USER_SPACE_ON_USE_instance;
  }
  var GradientUnits$OBJECT_BOUNDING_BOX_instance;
  function GradientUnits$OBJECT_BOUNDING_BOX_getInstance() {
    GradientUnits_initFields();
    return GradientUnits$OBJECT_BOUNDING_BOX_instance;
  }
  GradientUnits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientUnits',
    interfaces: [Enum]
  };
  function GradientUnits$values() {
    return [GradientUnits$USER_SPACE_ON_USE_getInstance(), GradientUnits$OBJECT_BOUNDING_BOX_getInstance()];
  }
  GradientUnits.values = GradientUnits$values;
  function GradientUnits$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USE':
        return GradientUnits$USER_SPACE_ON_USE_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return GradientUnits$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.paint.GradientUnits.' + name);
    }
  }
  GradientUnits.valueOf_61zpoe$ = GradientUnits$valueOf;
  function GradientInterpolationMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientInterpolationMethod_initFields() {
    GradientInterpolationMethod_initFields = function () {
    };
    GradientInterpolationMethod$LINEAR_instance = new GradientInterpolationMethod('LINEAR', 0);
    GradientInterpolationMethod$NORMAL_instance = new GradientInterpolationMethod('NORMAL', 1);
  }
  var GradientInterpolationMethod$LINEAR_instance;
  function GradientInterpolationMethod$LINEAR_getInstance() {
    GradientInterpolationMethod_initFields();
    return GradientInterpolationMethod$LINEAR_instance;
  }
  var GradientInterpolationMethod$NORMAL_instance;
  function GradientInterpolationMethod$NORMAL_getInstance() {
    GradientInterpolationMethod_initFields();
    return GradientInterpolationMethod$NORMAL_instance;
  }
  GradientInterpolationMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientInterpolationMethod',
    interfaces: [Enum]
  };
  function GradientInterpolationMethod$values() {
    return [GradientInterpolationMethod$LINEAR_getInstance(), GradientInterpolationMethod$NORMAL_getInstance()];
  }
  GradientInterpolationMethod.values = GradientInterpolationMethod$values;
  function GradientInterpolationMethod$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return GradientInterpolationMethod$LINEAR_getInstance();
      case 'NORMAL':
        return GradientInterpolationMethod$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.paint.GradientInterpolationMethod.' + name);
    }
  }
  GradientInterpolationMethod.valueOf_61zpoe$ = GradientInterpolationMethod$valueOf;
  function GradientPaint(kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    if (stops === void 0)
      stops = new DoubleArrayList();
    if (colors === void 0)
      colors = new IntArrayList();
    if (cycle === void 0)
      cycle = CycleMethod$NO_CYCLE_getInstance();
    if (transform === void 0)
      transform = new Matrix();
    if (interpolationMethod === void 0)
      interpolationMethod = GradientInterpolationMethod$NORMAL_getInstance();
    if (units === void 0)
      units = GradientUnits$OBJECT_BOUNDING_BOX_getInstance();
    this.kind = kind;
    this.x0 = x0;
    this.y0 = y0;
    this.r0 = r0;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
    this.stops = stops;
    this.colors = colors;
    this.cycle = cycle;
    this.transform_la1uuv$_0 = transform;
    this.interpolationMethod = interpolationMethod;
    this.units = units;
    var $receiver = new Matrix();
    $receiver.translate_lu1900$(-this.x0, -this.y0);
    $receiver.scale_lu1900$(1.0 / clamp_0(Point.Companion.distance_6y0v78$(this.x0, this.y0, this.x1, this.y1), 1.0, 16000.0));
    $receiver.rotate_4crm0z$(unaryMinus(Angle.Companion.between_6y0v78$(this.x0, this.y0, this.x1, this.y1)));
    $receiver.premultiply_1ktkmn$(this.transform);
    this.gradientMatrix = $receiver;
    this.gradientMatrixInv = this.gradientMatrix.inverted_1ktkmn$();
    this.r0r1_2_0 = 2 * this.r0 * this.r1;
    this.r0pow2_0 = this.get_pow2_yrwdxr$(this.r0);
    this.r1pow2_0 = this.get_pow2_yrwdxr$(this.r1);
    this.y0_y1_0 = this.y0 - this.y1;
    this.r0_r1_0 = this.r0 - this.r1;
    this.x0_x1_0 = this.x0 - this.x1;
    this.radial_scale_0 = 1.0 / (this.get_pow2_yrwdxr$(this.r0 - this.r1) - this.get_pow2_yrwdxr$(this.x0 - this.x1) - this.get_pow2_yrwdxr$(this.y0 - this.y1));
  }
  Object.defineProperty(GradientPaint.prototype, 'transform', {
    get: function () {
      return this.transform_la1uuv$_0;
    }
  });
  GradientPaint.prototype.x0_1ktkmn$ = function (m) {
    return m.transformX_lu1900$(this.x0, this.y0);
  };
  GradientPaint.prototype.y0_1ktkmn$ = function (m) {
    return m.transformY_lu1900$(this.x0, this.y0);
  };
  GradientPaint.prototype.r0_1ktkmn$ = function (m) {
    return m.transformX_lu1900$(this.r0, this.r0);
  };
  GradientPaint.prototype.x1_1ktkmn$ = function (m) {
    return m.transformX_lu1900$(this.x1, this.y1);
  };
  GradientPaint.prototype.y1_1ktkmn$ = function (m) {
    return m.transformY_lu1900$(this.x1, this.y1);
  };
  GradientPaint.prototype.r1_1ktkmn$ = function (m) {
    return m.transformX_lu1900$(this.r1, this.r1);
  };
  Object.defineProperty(GradientPaint.prototype, 'numberOfStops', {
    get: function () {
      return this.stops.size;
    }
  });
  GradientPaint.prototype.addColorStop_ycmdr1$ = function (stop, color) {
    return this.add_ycmdr1$(stop, color);
  };
  GradientPaint.prototype.addColorStop_mxu3s5$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.paint.GradientPaint.addColorStop_mxu3s5$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (stop, color) {
      return this.add_ycmdr1$(numberToDouble(stop), color);
    };
  }));
  GradientPaint.prototype.add_ycmdr1$ = function (stop, color) {
    this.stops.plusAssign_14dthe$(stop);
    this.colors.plusAssign_za3lpa$(color.value);
    return this;
  };
  GradientPaint.prototype.getRatioAt_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    tmp$_0 = this.cycle;
    switch (this.kind.name) {
      case 'SWEEP':
        tmp$ = div(Point.Companion.angle_6y0v78$(this.x0, this.y0, x, y), get_degrees_0(360));
        break;
      case 'RADIAL':
        var tmp$_1 = -this.r1 * this.r0_r1_0 + this.x0_x1_0 * (this.x1 - x) + this.y0_y1_0 * (this.y1 - y);
        var x_0 = this.r1pow2_0 * (this.get_pow2_yrwdxr$(this.x0 - x) + this.get_pow2_yrwdxr$(this.y0 - y)) - this.r0r1_2_0 * ((this.x0 - x) * (this.x1 - x) + (this.y0 - y) * (this.y1 - y)) + this.r0pow2_0 * (this.get_pow2_yrwdxr$(this.x1 - x) + this.get_pow2_yrwdxr$(this.y1 - y)) - this.get_pow2_yrwdxr$(this.x1 * this.y0 - x * this.y0 - this.x0 * this.y1 + x * this.y1 + this.x0 * y - this.x1 * y);
        tmp$ = 1.0 - (tmp$_1 - Math_0.sqrt(x_0)) * this.radial_scale_0;
        break;
      default:tmp$ = this.gradientMatrix.transformX_lu1900$(x, y);
        break;
    }
    return apply(tmp$_0, tmp$);
  };
  GradientPaint.prototype.get_pow2_yrwdxr$ = function ($receiver) {
    return $receiver * $receiver;
  };
  GradientPaint.prototype.getRatioAt_y2mxf1$ = function (x, y, m) {
    return this.getRatioAt_lu1900$(m.transformX_lu1900$(x, y), m.transformY_lu1900$(x, y));
  };
  GradientPaint.prototype.applyMatrix_1ktkmn$ = function (m) {
    return new GradientPaint(this.kind, m.transformX_lu1900$(this.x0, this.y0), m.transformY_lu1900$(this.x0, this.y0), this.r0, m.transformX_lu1900$(this.x1, this.y1), m.transformY_lu1900$(this.x1, this.y1), this.r1, DoubleArrayList_init(this.stops), IntArrayList_init(this.colors), this.cycle, new Matrix(), this.interpolationMethod, this.units);
  };
  GradientPaint.prototype.transformed_1ktkmn$ = function (m) {
    return this.applyMatrix_1ktkmn$(m);
  };
  GradientPaint.prototype.toString = function () {
    switch (this.kind.name) {
      case 'LINEAR':
        return 'LinearGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.stops + ', ' + this.colors + ')';
      case 'RADIAL':
        return 'RadialGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.r0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.r1 + ', ' + this.stops + ', ' + this.colors + ')';
      case 'SWEEP':
        return 'SweepGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.stops + ', ' + this.colors + ')';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  GradientPaint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientPaint',
    interfaces: [TransformedPaint]
  };
  GradientPaint.prototype.component1 = function () {
    return this.kind;
  };
  GradientPaint.prototype.component2 = function () {
    return this.x0;
  };
  GradientPaint.prototype.component3 = function () {
    return this.y0;
  };
  GradientPaint.prototype.component4 = function () {
    return this.r0;
  };
  GradientPaint.prototype.component5 = function () {
    return this.x1;
  };
  GradientPaint.prototype.component6 = function () {
    return this.y1;
  };
  GradientPaint.prototype.component7 = function () {
    return this.r1;
  };
  GradientPaint.prototype.component8 = function () {
    return this.stops;
  };
  GradientPaint.prototype.component9 = function () {
    return this.colors;
  };
  GradientPaint.prototype.component10 = function () {
    return this.cycle;
  };
  GradientPaint.prototype.component11 = function () {
    return this.transform;
  };
  GradientPaint.prototype.component12 = function () {
    return this.interpolationMethod;
  };
  GradientPaint.prototype.component13 = function () {
    return this.units;
  };
  GradientPaint.prototype.copy_njcfao$ = function (kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    return new GradientPaint(kind === void 0 ? this.kind : kind, x0 === void 0 ? this.x0 : x0, y0 === void 0 ? this.y0 : y0, r0 === void 0 ? this.r0 : r0, x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1, r1 === void 0 ? this.r1 : r1, stops === void 0 ? this.stops : stops, colors === void 0 ? this.colors : colors, cycle === void 0 ? this.cycle : cycle, transform === void 0 ? this.transform : transform, interpolationMethod === void 0 ? this.interpolationMethod : interpolationMethod, units === void 0 ? this.units : units);
  };
  GradientPaint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.x0) | 0;
    result = result * 31 + Kotlin.hashCode(this.y0) | 0;
    result = result * 31 + Kotlin.hashCode(this.r0) | 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    result = result * 31 + Kotlin.hashCode(this.r1) | 0;
    result = result * 31 + Kotlin.hashCode(this.stops) | 0;
    result = result * 31 + Kotlin.hashCode(this.colors) | 0;
    result = result * 31 + Kotlin.hashCode(this.cycle) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.interpolationMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.units) | 0;
    return result;
  };
  GradientPaint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.x0, other.x0) && Kotlin.equals(this.y0, other.y0) && Kotlin.equals(this.r0, other.r0) && Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1) && Kotlin.equals(this.r1, other.r1) && Kotlin.equals(this.stops, other.stops) && Kotlin.equals(this.colors, other.colors) && Kotlin.equals(this.cycle, other.cycle) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.interpolationMethod, other.interpolationMethod) && Kotlin.equals(this.units, other.units)))));
  };
  var LinearGradientPaint = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.paint.LinearGradientPaint_ppf5ku$', wrapFunction(function () {
    var CycleMethod = _.com.soywiz.korim.vector.CycleMethod;
    var Unit = Kotlin.kotlin.Unit;
    var GradientKind = _.com.soywiz.korim.vector.paint.GradientKind;
    var numberToDouble = Kotlin.numberToDouble;
    var GradientPaint_init = _.com.soywiz.korim.vector.paint.GradientPaint;
    function LinearGradientPaint$lambda($receiver) {
      return Unit;
    }
    return function (x0, y0, x1, y1, cycle, block) {
      if (cycle === void 0)
        cycle = CycleMethod.NO_CYCLE;
      if (block === void 0)
        block = LinearGradientPaint$lambda;
      var $receiver = new GradientPaint_init(GradientKind.LINEAR, numberToDouble(x0), numberToDouble(y0), 0.0, numberToDouble(x1), numberToDouble(y1), 0.0, void 0, void 0, cycle);
      block($receiver);
      return $receiver;
    };
  }));
  var RadialGradientPaint = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.paint.RadialGradientPaint_j4b27i$', wrapFunction(function () {
    var CycleMethod = _.com.soywiz.korim.vector.CycleMethod;
    var Unit = Kotlin.kotlin.Unit;
    var GradientKind = _.com.soywiz.korim.vector.paint.GradientKind;
    var numberToDouble = Kotlin.numberToDouble;
    var GradientPaint_init = _.com.soywiz.korim.vector.paint.GradientPaint;
    function RadialGradientPaint$lambda($receiver) {
      return Unit;
    }
    return function (x0, y0, r0, x1, y1, r1, cycle, block) {
      if (cycle === void 0)
        cycle = CycleMethod.NO_CYCLE;
      if (block === void 0)
        block = RadialGradientPaint$lambda;
      var $receiver = new GradientPaint_init(GradientKind.RADIAL, numberToDouble(x0), numberToDouble(y0), numberToDouble(r0), numberToDouble(x1), numberToDouble(y1), numberToDouble(r1), void 0, void 0, cycle);
      block($receiver);
      return $receiver;
    };
  }));
  var SweepGradientPaint = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.paint.SweepGradientPaint_5chak8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var GradientKind = _.com.soywiz.korim.vector.paint.GradientKind;
    var numberToDouble = Kotlin.numberToDouble;
    var GradientPaint_init = _.com.soywiz.korim.vector.paint.GradientPaint;
    function SweepGradientPaint$lambda($receiver) {
      return Unit;
    }
    return function (x0, y0, block) {
      if (block === void 0)
        block = SweepGradientPaint$lambda;
      var $receiver = new GradientPaint_init(GradientKind.SWEEP, numberToDouble(x0), numberToDouble(y0), 0.0, 0.0, 0.0, 0.0);
      block($receiver);
      return $receiver;
    };
  }));
  function BitmapPaint(bitmap, transform, cycleX, cycleY, smooth) {
    if (cycleX === void 0)
      cycleX = CycleMethod$NO_CYCLE_getInstance();
    if (cycleY === void 0)
      cycleY = CycleMethod$NO_CYCLE_getInstance();
    if (smooth === void 0)
      smooth = true;
    this.bitmap = bitmap;
    this.transform_xowsp6$_0 = transform;
    this.cycleX = cycleX;
    this.cycleY = cycleY;
    this.smooth = smooth;
    this.bmp32 = this.bitmap.toBMP32();
  }
  Object.defineProperty(BitmapPaint.prototype, 'transform', {
    get: function () {
      return this.transform_xowsp6$_0;
    }
  });
  Object.defineProperty(BitmapPaint.prototype, 'repeatX', {
    get: function () {
      return this.cycleX !== CycleMethod$NO_CYCLE_getInstance();
    }
  });
  Object.defineProperty(BitmapPaint.prototype, 'repeatY', {
    get: function () {
      return this.cycleY !== CycleMethod$NO_CYCLE_getInstance();
    }
  });
  Object.defineProperty(BitmapPaint.prototype, 'repeat', {
    get: function () {
      return this.repeatX || this.repeatY;
    }
  });
  BitmapPaint.prototype.transformed_1ktkmn$ = function (m) {
    return BitmapPaint_init(this.bitmap, (new Matrix()).multiply_19kw1g$(m, this.transform));
  };
  BitmapPaint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapPaint',
    interfaces: [TransformedPaint]
  };
  function BitmapPaint_init(bitmap, transform, repeat, smooth, $this) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    $this = $this || Object.create(BitmapPaint.prototype);
    BitmapPaint.call($this, bitmap, transform, repeat ? CycleMethod$REPEAT_getInstance() : CycleMethod$NO_CYCLE_getInstance(), repeat ? CycleMethod$REPEAT_getInstance() : CycleMethod$NO_CYCLE_getInstance(), smooth);
    return $this;
  }
  function Rasterizer() {
    RastScale.call(this);
    this.debug = false;
    this.tempRect_0 = Rectangle.Companion.invoke();
    this.quality = 2;
    this.scale = 1;
    this.path = new PolygonScanline();
    this.clip = new PolygonScanline();
    this.fillSegmentSet_0 = new IntSegmentSet();
    this.clipSegmentSet_0 = new IntSegmentSet();
    this.finalSegmentSet_0 = new IntSegmentSet();
    this.yList_0 = new IntArrayList(1024);
  }
  function Rasterizer$Stats(edgesChecked, edgesEmitted, yCount) {
    if (edgesChecked === void 0)
      edgesChecked = 0;
    if (edgesEmitted === void 0)
      edgesEmitted = 0;
    if (yCount === void 0)
      yCount = 0;
    this.edgesChecked = edgesChecked;
    this.edgesEmitted = edgesEmitted;
    this.yCount = yCount;
  }
  Rasterizer$Stats.prototype.reset = function () {
    this.edgesChecked = 0;
    this.edgesEmitted = 0;
    this.yCount = 0;
  };
  Rasterizer$Stats.prototype.chunk_qt1dr2$ = function (edgesChecked, edgesEmitted, yCount) {
    this.edgesChecked = this.edgesChecked + edgesChecked | 0;
    this.edgesEmitted = this.edgesEmitted + edgesEmitted | 0;
    this.yCount = this.yCount + yCount | 0;
  };
  Rasterizer$Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  Rasterizer$Stats.prototype.component1 = function () {
    return this.edgesChecked;
  };
  Rasterizer$Stats.prototype.component2 = function () {
    return this.edgesEmitted;
  };
  Rasterizer$Stats.prototype.component3 = function () {
    return this.yCount;
  };
  Rasterizer$Stats.prototype.copy_qt1dr2$ = function (edgesChecked, edgesEmitted, yCount) {
    return new Rasterizer$Stats(edgesChecked === void 0 ? this.edgesChecked : edgesChecked, edgesEmitted === void 0 ? this.edgesEmitted : edgesEmitted, yCount === void 0 ? this.yCount : yCount);
  };
  Rasterizer$Stats.prototype.toString = function () {
    return 'Stats(edgesChecked=' + Kotlin.toString(this.edgesChecked) + (', edgesEmitted=' + Kotlin.toString(this.edgesEmitted)) + (', yCount=' + Kotlin.toString(this.yCount)) + ')';
  };
  Rasterizer$Stats.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edgesChecked) | 0;
    result = result * 31 + Kotlin.hashCode(this.edgesEmitted) | 0;
    result = result * 31 + Kotlin.hashCode(this.yCount) | 0;
    return result;
  };
  Rasterizer$Stats.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edgesChecked, other.edgesChecked) && Kotlin.equals(this.edgesEmitted, other.edgesEmitted) && Kotlin.equals(this.yCount, other.yCount)))));
  };
  Rasterizer.prototype.reset = function () {
    this.path.reset();
    this.clip.reset();
  };
  function Rasterizer$rasterizeFill$lambda(closure$xmax, closure$xmin, this$Rasterizer, closure$callback) {
    return function (a, b, y) {
      if (a <= closure$xmax && b >= closure$xmin) {
        var a0 = coerceIn(a, closure$xmin, closure$xmax);
        var b0 = coerceIn(b, closure$xmin, closure$xmax);
        if (this$Rasterizer.debug) {
          println('RASTER(' + a0 + ', ' + b0 + ', ' + y + ')');
        }closure$callback(a0, b0, y);
      }return Unit;
    };
  }
  Rasterizer.prototype.rasterizeFill_pf7p4a$ = function (bounds, quality, stats, winding, callback) {
    if (quality === void 0)
      quality = this.quality;
    if (stats === void 0)
      stats = null;
    if (winding === void 0)
      winding = Winding.NON_ZERO;
    var tmp$;
    stats != null ? (stats.reset(), Unit) : null;
    var xmin = this.get_s_yrwdxr$(bounds.left);
    var xmax = this.get_s_yrwdxr$(bounds.right);
    this.path.getBounds_2da8yn$(this.tempRect_0);
    var a = bounds.top;
    var b = this.tempRect_0.top;
    var startY = this.get_s_yrwdxr$(Math_0.max(a, b));
    var a_0 = bounds.bottom;
    var b_0 = this.tempRect_0.bottom;
    var endY = this.get_s_yrwdxr$(Math_0.min(a_0, b_0));
    var func = Rasterizer$rasterizeFill$lambda(xmax, xmin, this, callback);
    this.yList_0.clear();
    var q = quality;
    var yCount = Kotlin.imul(((endY - startY | 0) / this.sscale | 0) + 1 | 0, q);
    tmp$ = yCount + q - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var y = startY + ((Kotlin.imul(n, this.sscale) / this.scale | 0) / q | 0) | 0;
      this.yList_0.add_za3lpa$(y);
    }
    var edgesEmitted = {v: 0};
    var edgesChecked = {v: 0};
    var $receiver = this.yList_0;
    var tmp$_0;
    var n_0 = 0;
    while (n_0 < $receiver.size) {
      var y_0 = $receiver.getAt_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0));
      this.path.scanline_sa4tpg$(y_0, winding, this.fillSegmentSet_0);
      edgesChecked.v = edgesChecked.v + this.path.edgesChecked | 0;
      if (this.clip.isNotEmpty()) {
        this.clip.scanline_sa4tpg$(y_0, this.clip.winding, this.clipSegmentSet_0);
        edgesChecked.v = edgesChecked.v + this.clip.edgesChecked | 0;
        this.finalSegmentSet_0.setToIntersect_t6gtn0$(this.fillSegmentSet_0, this.clipSegmentSet_0);
      }var $this = this.clip.isNotEmpty() ? this.finalSegmentSet_0 : this.fillSegmentSet_0;
      var tmp$_1;
      tmp$_1 = $this.size;
      for (var n_1 = 0; n_1 < tmp$_1; n_1++) {
        func($this.min.getAt_za3lpa$(n_1), $this.max.getAt_za3lpa$(n_1), y_0);
        edgesEmitted.v = edgesEmitted.v + 1 | 0;
      }
    }
    stats != null ? (stats.chunk_qt1dr2$(edgesChecked.v, edgesEmitted.v, yCount), Unit) : null;
  };
  Rasterizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rasterizer',
    interfaces: [RastScale]
  };
  function Renderer() {
    this.debug = false;
    this.bufferingLevel_o746in$_0 = 0;
  }
  Renderer.prototype.buffering_klfg04$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.renderer.Renderer.buffering_klfg04$', function (callback) {
    this.bufferingStart();
    try {
      return callback();
    }finally {
      this.bufferingEnd();
    }
  });
  Renderer.prototype.isBuffering = function () {
    return this.bufferingLevel_o746in$_0 > 0;
  };
  Renderer.prototype.flush = function () {
  };
  Renderer.prototype.bufferingStart = function () {
    var tmp$;
    return tmp$ = this.bufferingLevel_o746in$_0, this.bufferingLevel_o746in$_0 = tmp$ + 1 | 0, tmp$;
  };
  Renderer.prototype.bufferingEnd = function () {
    this.bufferingLevel_o746in$_0 = this.bufferingLevel_o746in$_0 - 1 | 0;
    if (this.bufferingLevel_o746in$_0 === 0) {
      this.flush();
    }};
  Renderer.prototype.render_w64o9o$ = function (state, fill) {
  };
  function Renderer$drawImage$lambda$lambda(closure$x, closure$y, closure$width, closure$height) {
    return function ($receiver) {
      rect($receiver, closure$x, closure$y, closure$width, closure$height);
      return Unit;
    };
  }
  Renderer.prototype.drawImage_r3wwxz$$default = function (image, x, y, width, height, transform) {
    var tmp$ = void 0;
    var $receiver = new GraphicsPath();
    if (transform.getType() === Matrix$Type.IDENTITY) {
      rect($receiver, x, y, width, height);
    } else {
      transformed($receiver, transform, Renderer$drawImage$lambda$lambda(x, y, width, height));
    }
    this.render_w64o9o$(new Context2d$State(transform, tmp$, $receiver, void 0, void 0, void 0, void 0, void 0, void 0, void 0, BitmapPaint_init(image, (new Matrix()).scale_lu1900$(width / image.width, height / image.height).translate_lu1900$(x, y))), true);
  };
  Renderer.prototype.drawImage_r3wwxz$ = function (image, x, y, width, height, transform, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (transform === void 0)
      transform = new Matrix();
    callback$default ? callback$default(image, x, y, width, height, transform) : this.drawImage_r3wwxz$$default(image, x, y, width, height, transform);
  };
  Renderer.prototype.drawImage_4nykkn$ = defineInlineFunction('korim-root-korim.com.soywiz.korim.vector.renderer.Renderer.drawImage_4nykkn$', wrapFunction(function () {
    var Matrix_init = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.Matrix;
    var numberToDouble = Kotlin.numberToDouble;
    return function (image, x, y, width, height, transform) {
      if (width === void 0)
        width = image.width;
      if (height === void 0)
        height = image.height;
      if (transform === void 0)
        transform = new Matrix_init();
      this.drawImage_r3wwxz$(image, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height), transform);
    };
  }));
  Renderer.prototype.dispose = function () {
    this.flush();
  };
  Renderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Renderer',
    interfaces: []
  };
  function DummyRenderer(width, height) {
    DummyRenderer$Companion_getInstance();
    Renderer.call(this);
    this.width_6g2yeh$_0 = width;
    this.height_m52ew2$_0 = height;
  }
  Object.defineProperty(DummyRenderer.prototype, 'width', {
    get: function () {
      return this.width_6g2yeh$_0;
    }
  });
  Object.defineProperty(DummyRenderer.prototype, 'height', {
    get: function () {
      return this.height_m52ew2$_0;
    }
  });
  function DummyRenderer$Companion() {
    DummyRenderer$Companion_instance = this;
    DummyRenderer.call(this, 128, 128);
  }
  DummyRenderer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [DummyRenderer]
  };
  var DummyRenderer$Companion_instance = null;
  function DummyRenderer$Companion_getInstance() {
    if (DummyRenderer$Companion_instance === null) {
      new DummyRenderer$Companion();
    }return DummyRenderer$Companion_instance;
  }
  DummyRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyRenderer',
    interfaces: [Renderer]
  };
  function BufferedRenderer() {
    Renderer.call(this);
    this.commands = ArrayList_init_0();
  }
  function BufferedRenderer$RenderCommand(state, fill, font, fontSize, text, x, y) {
    if (font === void 0)
      font = null;
    if (fontSize === void 0)
      fontSize = 0.0;
    if (text === void 0)
      text = null;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.state = state;
    this.fill = fill;
    this.font = font;
    this.fontSize = fontSize;
    this.text = text;
    this.x = x;
    this.y = y;
  }
  BufferedRenderer$RenderCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderCommand',
    interfaces: []
  };
  BufferedRenderer$RenderCommand.prototype.component1 = function () {
    return this.state;
  };
  BufferedRenderer$RenderCommand.prototype.component2 = function () {
    return this.fill;
  };
  BufferedRenderer$RenderCommand.prototype.component3 = function () {
    return this.font;
  };
  BufferedRenderer$RenderCommand.prototype.component4 = function () {
    return this.fontSize;
  };
  BufferedRenderer$RenderCommand.prototype.component5 = function () {
    return this.text;
  };
  BufferedRenderer$RenderCommand.prototype.component6 = function () {
    return this.x;
  };
  BufferedRenderer$RenderCommand.prototype.component7 = function () {
    return this.y;
  };
  BufferedRenderer$RenderCommand.prototype.copy_ecspqs$ = function (state, fill, font, fontSize, text, x, y) {
    return new BufferedRenderer$RenderCommand(state === void 0 ? this.state : state, fill === void 0 ? this.fill : fill, font === void 0 ? this.font : font, fontSize === void 0 ? this.fontSize : fontSize, text === void 0 ? this.text : text, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  BufferedRenderer$RenderCommand.prototype.toString = function () {
    return 'RenderCommand(state=' + Kotlin.toString(this.state) + (', fill=' + Kotlin.toString(this.fill)) + (', font=' + Kotlin.toString(this.font)) + (', fontSize=' + Kotlin.toString(this.fontSize)) + (', text=' + Kotlin.toString(this.text)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  BufferedRenderer$RenderCommand.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.fontSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  BufferedRenderer$RenderCommand.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.fill, other.fill) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.fontSize, other.fontSize) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  BufferedRenderer.prototype.render_w64o9o$ = function (state, fill) {
    var $receiver = this.commands;
    var element = new BufferedRenderer$RenderCommand(state.clone(), fill);
    $receiver.add_11rb$(element);
    if (!this.isBuffering())
      this.flush();
  };
  BufferedRenderer.prototype.flush = function () {
    this.flushCommands();
  };
  BufferedRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferedRenderer',
    interfaces: [Renderer]
  };
  var nativeSystemFontProvider;
  function HtmlCanvas() {
    HtmlCanvas_instance = this;
  }
  HtmlCanvas.prototype.createCanvas_vux9f0$ = function (width, height) {
    if (util.OS.isJsNodeJs) {
      throw IllegalStateException_init('Canvas not available on Node.JS'.toString());
    }var out = document.createElement('canvas');
    out.width = width;
    out.height = height;
    return toLike(out);
  };
  HtmlCanvas.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlCanvas',
    interfaces: []
  };
  var HtmlCanvas_instance = null;
  function HtmlCanvas_getInstance() {
    if (HtmlCanvas_instance === null) {
      new HtmlCanvas();
    }return HtmlCanvas_instance;
  }
  function toLike($receiver) {
    return $receiver;
  }
  function HtmlImage() {
    HtmlImage_instance = this;
  }
  HtmlImage.prototype.createHtmlCanvas_vux9f0$ = function (width, height) {
    return HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height);
  };
  HtmlImage.prototype.renderToHtmlCanvas_fzugah$ = function (bmpData, bmpWidth, bmpHeight, canvas) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pixelCount = bmpData.size;
    var ctx = canvas.getContext('2d');
    var idata = ctx.createImageData(bmpWidth, bmpHeight);
    var idataData = idata.data;
    var m = 0;
    for (var n = 0; n < pixelCount; n++) {
      var c = bmpData.get_za3lpa$(n);
      idataData[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = c.r;
      idataData[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = c.g;
      idataData[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = c.b;
      idataData[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = c.a;
    }
    ctx.putImageData(idata, 0.0, 0.0);
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_ypw47a$ = function (bmp, canvas) {
    return this.renderToHtmlCanvas_fzugah$(bmp.depremultipliedIfRequired().data, bmp.width, bmp.height, canvas);
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_x25gtl$ = function (canvas, out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var width = canvas.width;
    var height = canvas.height;
    var len = Kotlin.imul(width, height);
    if (width <= 0 || height <= 0)
      return;
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0.0, 0.0, width, height);
    var ddata = data.data;
    var m = 0;
    for (var n = 0; n < len; n++) {
      var r = ddata[tmp$ = m, m = tmp$ + 1 | 0, tmp$] & 255;
      var g = ddata[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] & 255;
      var b = ddata[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] & 255;
      var a = ddata[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] & 255;
      out.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a));
    }
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_1stg9o$ = function (canvas, bmp) {
    this.renderHtmlCanvasIntoBitmap_x25gtl$(canvas, bmp.data);
  };
  HtmlImage.prototype.bitmapToHtmlCanvas_59u9qz$ = function (bmp) {
    return this.renderToHtmlCanvas_ypw47a$(bmp, this.createHtmlCanvas_vux9f0$(bmp.width, bmp.height));
  };
  HtmlImage.prototype.htmlCanvasToDataUrl_4en8az$ = function (canvas) {
    return canvas.toDataURL();
  };
  HtmlImage.prototype.htmlCanvasClear_4en8az$ = function (canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
  };
  HtmlImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlImage',
    interfaces: []
  };
  var HtmlImage_instance = null;
  function HtmlImage_getInstance() {
    if (HtmlImage_instance === null) {
      new HtmlImage();
    }return HtmlImage_instance;
  }
  function toHtmlNative($receiver) {
    if (Kotlin.isType($receiver, HtmlNativeImage))
      return $receiver;
    else
      return HtmlNativeImage_init_0(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$($receiver.toBMP32()));
  }
  var arraycopy$lambda_6 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  var nativeImageFormatProvider;
  function NodeJsNativeImageFormatProvider() {
    NodeJsNativeImageFormatProvider_instance = this;
    BaseNativeImageFormatProvider.call(this);
    this.formats_tmgd80$_0 = lazy(NodeJsNativeImageFormatProvider$formats$lambda);
  }
  Object.defineProperty(NodeJsNativeImageFormatProvider.prototype, 'formats', {
    get: function () {
      return this.formats_tmgd80$_0.value;
    }
  });
  function NodeJsNativeImageFormatProvider$formats$lambda() {
    var $receiver = RegisteredImageFormats_getInstance();
    $receiver.register_56bozu$([PNG_getInstance()]);
    return $receiver;
  }
  NodeJsNativeImageFormatProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NodeJsNativeImageFormatProvider',
    interfaces: [BaseNativeImageFormatProvider]
  };
  var NodeJsNativeImageFormatProvider_instance = null;
  function NodeJsNativeImageFormatProvider_getInstance() {
    if (NodeJsNativeImageFormatProvider_instance === null) {
      new NodeJsNativeImageFormatProvider();
    }return NodeJsNativeImageFormatProvider_instance;
  }
  var tempB;
  var tempI;
  var temp8;
  function isLittleEndian$lambda() {
    tempI[0] = 1;
    return temp8[0] === 1;
  }
  var isLittleEndian;
  function get_isLittleEndian() {
    return isLittleEndian.value;
  }
  function get_isBigEndian() {
    return !get_isLittleEndian();
  }
  function bswap32(v) {
    return (v >>> 24 | v << 24 | (v & 65280) << 8 | v >>> 8) & 65280;
  }
  function bswap32_0(v, offset, size) {
    var tmp$;
    tmp$ = offset + size | 0;
    for (var n = offset; n < tmp$; n++)
      v[n] = bswap32(v[n]);
  }
  function HtmlNativeImage(texSourceBase, width, height) {
    NativeImage.call(this, width, height, texSourceBase, true);
    this.name_pab2p7$_0 = 'HtmlNativeImage';
    this.texSource_i1q1si$_0 = texSourceBase;
    this.lazyCanvasElement_5st6v8$_0 = lazy(HtmlNativeImage$lazyCanvasElement$lambda(this));
    this.ctx_341b2r$_0 = lazy(HtmlNativeImage$ctx$lambda(this));
  }
  Object.defineProperty(HtmlNativeImage.prototype, 'name', {
    get: function () {
      return this.name_pab2p7$_0;
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'texSource', {
    get: function () {
      return this.texSource_i1q1si$_0;
    },
    set: function (texSource) {
      this.texSource_i1q1si$_0 = texSource;
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'element', {
    get: function () {
      return this.texSource;
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'lazyCanvasElement', {
    get: function () {
      return this.lazyCanvasElement_5st6v8$_0.value;
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'ctx', {
    get: function () {
      return this.ctx_341b2r$_0.value;
    }
  });
  HtmlNativeImage.prototype.readPixelsUnsafe_zddtuu$$default = function (x, y, width, height, out, offset) {
    if (width <= 0 || height <= 0)
      return;
    var size = Kotlin.imul(width, height);
    var idata = this.ctx.getImageData(x, y, width, height);
    var data = asInt32Buffer(idata.data.buffer);
    arrayCopy(data, out.ints, offset, 0, 0 + size | 0);
    if (get_isBigEndian())
      bswap32_0(out.ints, offset, size);
  };
  HtmlNativeImage.prototype.writePixelsUnsafe_zddtuu$$default = function (x, y, width, height, out, offset) {
    if (width <= 0 || height <= 0)
      return;
    var size = Kotlin.imul(width, height);
    var idata = this.ctx.createImageData(width, height);
    var data = asInt32Buffer(idata.data.buffer);
    arrayCopy(out.ints, data, 0, offset, offset + size | 0);
    if (get_isBigEndian())
      bswap32_0(data, 0, size);
    this.ctx.putImageData(idata, x, y);
  };
  HtmlNativeImage.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new CanvasContext2dRenderer(this.lazyCanvasElement));
  };
  function HtmlNativeImage$lazyCanvasElement$lambda(this$HtmlNativeImage) {
    return function () {
      var tmp$;
      if (this$HtmlNativeImage.texSource.src !== undefined) {
        tmp$ = BrowserImage_getInstance().imageToCanvas_3rpr94$(this$HtmlNativeImage.texSource);
      } else {
        tmp$ = this$HtmlNativeImage.texSource;
      }
      var $receiver = tmp$;
      this$HtmlNativeImage.texSource = $receiver;
      return $receiver;
    };
  }
  function HtmlNativeImage$ctx$lambda(this$HtmlNativeImage) {
    return function () {
      return this$HtmlNativeImage.lazyCanvasElement.getContext('2d');
    };
  }
  HtmlNativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeImage',
    interfaces: [NativeImage]
  };
  function HtmlNativeImage_init(img, $this) {
    $this = $this || Object.create(HtmlNativeImage.prototype);
    HtmlNativeImage.call($this, img, img.width, img.height);
    return $this;
  }
  function HtmlNativeImage_init_0(canvas, $this) {
    $this = $this || Object.create(HtmlNativeImage.prototype);
    HtmlNativeImage.call($this, canvas, canvas.width, canvas.height);
    return $this;
  }
  function HtmlNativeImageFormatProvider() {
    HtmlNativeImageFormatProvider_instance = this;
    NativeImageFormatProvider.call(this);
  }
  function Coroutine$decode_1fhb37$($this, data_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_1fhb37$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_1fhb37$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_1fhb37$.prototype.constructor = Coroutine$decode_1fhb37$;
  Coroutine$decode_1fhb37$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = BrowserImage_getInstance().decodeToCanvas_1fhb37$(this.local$data, this.local$premultiplied, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return HtmlNativeImage_init_0(this.result_0);
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
  HtmlNativeImageFormatProvider.prototype.decode_1fhb37$ = function (data_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_1fhb37$(this, data_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_52yb2k$_1($this, vfs_0, path_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decode_52yb2k$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_52yb2k$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_52yb2k$_1.prototype.constructor = Coroutine$decode_52yb2k$_1;
  Coroutine$decode_52yb2k$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$vfs, LocalVfs)) {
              this.state_0 = 6;
              this.result_0 = BrowserImage_getInstance().loadImage_ivxn3r$(this.local$path, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                var jsUrl = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
                this.state_0 = 4;
                this.result_0 = BrowserImage_getInstance().loadImage_ivxn3r$(jsUrl, this.local$premultiplied, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.local$tmp$ = BrowserImage_getInstance();
                this.state_0 = 2;
                this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readAll(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.decodeToCanvas_1fhb37$(this.result_0, this.local$premultiplied, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = HtmlNativeImage_init_0(this.result_0);
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$_0 = HtmlNativeImage_init(this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            this.local$tmp$_0 = HtmlNativeImage_init(this.result_0);
            this.state_0 = 7;
            continue;
          case 7:
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
  HtmlNativeImageFormatProvider.prototype.decode_52yb2k$ = function (vfs_0, path_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_52yb2k$_1(this, vfs_0, path_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlNativeImageFormatProvider.prototype.create_vux9f0$ = function (width, height) {
    return HtmlNativeImage_init_0(HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height));
  };
  HtmlNativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    return HtmlNativeImage_init_0(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$(bmp.toBMP32()));
  };
  HtmlNativeImageFormatProvider.prototype.display_uwsoz2$ = function (bitmap, kind, continuation) {
    var tmp$, tmp$_0;
    if (kind === 1) {
      var img = document.createElement('img');
      img.setAttribute('src', 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$(bitmap)));
      (tmp$ = document.body) != null ? tmp$.appendChild(img) : null;
    } else {
      var img_0 = toHtmlNative(bitmap);
      (tmp$_0 = document.body) != null ? tmp$_0.appendChild(img_0.element) : null;
    }
  };
  HtmlNativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    var out = ensureNative(bmp);
    for (var n = 0; n < levels; n++)
      out = this.mipmap_uler2c$(out);
    return out;
  };
  HtmlNativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var x = bmp.width * 0.5;
    var tmp$ = numberToInt(Math_0.ceil(x));
    var x_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, numberToInt(Math_0.ceil(x_0)));
    out.getContext2d_6taknv$(true).renderer.drawImage_r3wwxz$(bmp, 0.0, 0.0, out.width, out.height);
    return out;
  };
  HtmlNativeImageFormatProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlNativeImageFormatProvider',
    interfaces: [NativeImageFormatProvider]
  };
  var HtmlNativeImageFormatProvider_instance = null;
  function HtmlNativeImageFormatProvider_getInstance() {
    if (HtmlNativeImageFormatProvider_instance === null) {
      new HtmlNativeImageFormatProvider();
    }return HtmlNativeImageFormatProvider_instance;
  }
  function BrowserImage() {
    BrowserImage_instance = this;
  }
  BrowserImage.prototype.toNodeJsBuffer_0 = function (ba) {
    return Buffer.from(ba.buffer);
  };
  function Coroutine$decodeToCanvas_1fhb37$($this, bytes_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$blobURL = void 0;
    this.local$bytes = bytes_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$decodeToCanvas_1fhb37$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeToCanvas_1fhb37$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeToCanvas_1fhb37$.prototype.constructor = Coroutine$decodeToCanvas_1fhb37$;
  Coroutine$decodeToCanvas_1fhb37$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$premultiplied === void 0)
              this.local$premultiplied = true;
            if (util.OS.isJsNodeJs) {
              throw IllegalStateException_init('Canvas not available on NodeJS'.toString());
            }
            var type = 'image/png';
            var o = {};
            o['type'] = type;
            var blob = new Blob([this.local$bytes], o);
            this.local$blobURL = URL.createObjectURL(blob);
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.$this.loadCanvas_61zpoe$(this.local$blobURL, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            URL.revokeObjectURL(this.local$blobURL);
            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  BrowserImage.prototype.decodeToCanvas_1fhb37$ = function (bytes_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeToCanvas_1fhb37$(this, bytes_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  BrowserImage.prototype.imageToCanvas_3rpr94$ = function (img) {
    var canvas = HtmlCanvas_getInstance().createCanvas_vux9f0$(img.width, img.height);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0.0, 0.0);
    return canvas;
  };
  function BrowserImage$loadImage$lambda$lambda(closure$c, closure$img) {
    return function (it) {
      var tmp$ = closure$c;
      var value = closure$img;
      tmp$.resumeWith_tl1gpc$(new Result(value));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda$lambda_0(closure$c, closure$jsUrl) {
    return function (f, f_0, f_1, f_2, f_3) {
      var $receiver = closure$c;
      var exception = RuntimeException_init('error loading image ' + closure$jsUrl);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda(closure$jsUrl) {
    return function (c) {
      if (util.OS.isJsNodeJs) {
        throw IllegalStateException_init('Canvas not available on NodeJS'.toString());
      }var img = document.createElement('img');
      img.onload = BrowserImage$loadImage$lambda$lambda(c, img);
      img.onerror = BrowserImage$loadImage$lambda$lambda_0(c, closure$jsUrl);
      img.src = closure$jsUrl;
      return Unit;
    };
  }
  function Coroutine$loadImage_ivxn3r$($this, jsUrl_0, premultiplied_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsUrl = jsUrl_0;
    this.local$premultiplied = premultiplied_0;
  }
  Coroutine$loadImage_ivxn3r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadImage_ivxn3r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadImage_ivxn3r$.prototype.constructor = Coroutine$loadImage_ivxn3r$;
  Coroutine$loadImage_ivxn3r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$premultiplied === void 0)
              this.local$premultiplied = true;
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(BrowserImage$loadImage$lambda(this.local$jsUrl))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  BrowserImage.prototype.loadImage_ivxn3r$ = function (jsUrl_0, premultiplied_0, continuation_0, suspended) {
    var instance = new Coroutine$loadImage_ivxn3r$(this, jsUrl_0, premultiplied_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadCanvas_61zpoe$($this, jsUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsUrl = jsUrl_0;
  }
  Coroutine$loadCanvas_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadCanvas_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadCanvas_61zpoe$.prototype.constructor = Coroutine$loadCanvas_61zpoe$;
  Coroutine$loadCanvas_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.loadImage_ivxn3r$(this.local$jsUrl, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.imageToCanvas_3rpr94$(this.result_0);
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
  BrowserImage.prototype.loadCanvas_61zpoe$ = function (jsUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$loadCanvas_61zpoe$(this, jsUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  BrowserImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BrowserImage',
    interfaces: []
  };
  var BrowserImage_instance = null;
  function BrowserImage_getInstance() {
    if (BrowserImage_instance === null) {
      new BrowserImage();
    }return BrowserImage_instance;
  }
  function CanvasContext2dRenderer(canvas) {
    Renderer.call(this);
    this.canvas_0 = canvas;
    this.ctx = this.canvas_0.getContext('2d');
  }
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'width', {
    get: function () {
      return this.canvas_0.width;
    }
  });
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'height', {
    get: function () {
      return this.canvas_0.height;
    }
  });
  CanvasContext2dRenderer.prototype.toJsStr_4rlhju$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (Kotlin.isType($receiver, NonePaint))
      tmp$_4 = 'none';
    else if (Kotlin.isType($receiver, ColorPaint))
      tmp$_4 = $receiver.color.htmlColor;
    else if (Kotlin.isType($receiver, GradientPaint)) {
      switch ($receiver.kind.name) {
        case 'LINEAR':
          var grad = this.ctx.createLinearGradient($receiver.x0, $receiver.y0, $receiver.x1, $receiver.y1);
          tmp$ = $receiver.stops.size;
          for (var n = 0; n < tmp$; n++) {
            var stop = $receiver.stops.getAt_za3lpa$(n);
            var color = $receiver.colors.getAt_za3lpa$(n);
            grad.addColorStop(stop, (new RGBA(color)).htmlStringSimple);
          }

          tmp$_4 = grad;
          break;
        case 'RADIAL':
          var grad_0 = this.ctx.createRadialGradient($receiver.x0, $receiver.y0, $receiver.r0, $receiver.x1, $receiver.y1, $receiver.r1);
          tmp$_0 = $receiver.stops.size;
          for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
            var stop_0 = $receiver.stops.getAt_za3lpa$(n_0);
            var color_0 = $receiver.colors.getAt_za3lpa$(n_0);
            grad_0.addColorStop(stop_0, (new RGBA(color_0)).htmlStringSimple);
          }

          tmp$_4 = grad_0;
          break;
        case 'SWEEP':
          tmp$_4 = 'fuchsia';
          break;
        default:tmp$_4 = Kotlin.noWhenBranchMatched();
          break;
      }
    } else if (Kotlin.isType($receiver, BitmapPaint)) {
      tmp$_3 = this.ctx;
      tmp$_1 = toHtmlNative($receiver.bitmap).texSource;
      if ($receiver.repeatX && $receiver.repeatY)
        tmp$_2 = 'repeat';
      else if ($receiver.repeatX)
        tmp$_2 = 'repeat-x';
      else if ($receiver.repeatY)
        tmp$_2 = 'repeat-y';
      else
        tmp$_2 = 'no-repeat';
      tmp$_4 = tmp$_3.createPattern(tmp$_1, tmp$_2);
    } else
      tmp$_4 = 'black';
    return tmp$_4;
  };
  CanvasContext2dRenderer.prototype.keep_0 = function (callback) {
    this.ctx.save();
    try {
      return callback();
    }finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.setFont_0 = function (font, fontSize) {
    this.ctx.font = fontSize.toString() + "px '" + font.name + "'";
  };
  CanvasContext2dRenderer.prototype.toJsStr_o7ms0u$ = function ($receiver) {
    switch ($receiver.name) {
      case 'CLEAR':
        return 'clear';
      case 'COPY':
        return 'copy';
      case 'SOURCE_OVER':
        return 'source-over';
      case 'DESTINATION_OVER':
        return 'destination-over';
      case 'SOURCE_IN':
        return 'source-in';
      case 'DESTINATION_IN':
        return 'destination-in';
      case 'SOURCE_OUT':
        return 'source-out';
      case 'DESTINATION_OUT':
        return 'destination-out';
      case 'SOURCE_ATOP':
        return 'source-atop';
      case 'DESTINATION_ATOP':
        return 'destination-atop';
      case 'XOR':
        return 'xor';
      case 'LIGHTER':
        return 'lighter';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  CanvasContext2dRenderer.prototype.toJsStr_loo09g$ = function ($receiver) {
    switch ($receiver.name) {
      case 'NORMAL':
        return 'normal';
      case 'MULTIPLY':
        return 'multiply';
      case 'SCREEN':
        return 'screen';
      case 'OVERLAY':
        return 'overlay';
      case 'DARKEN':
        return 'darken';
      case 'LIGHTEN':
        return 'lighten';
      case 'COLOR_DODGE':
        return 'color-dodge';
      case 'COLOR_BURN':
        return 'color-burn';
      case 'HARD_LIGHT':
        return 'hard-light';
      case 'SOFT_LIGHT':
        return 'soft-light';
      case 'DIFFERENCE':
        return 'difference';
      case 'EXCLUSION':
        return 'exclusion';
      case 'HUE':
        return 'hue';
      case 'SATURATION':
        return 'saturation';
      case 'COLOR':
        return 'color';
      case 'LUMINOSITY':
        return 'luminosity';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  CanvasContext2dRenderer.prototype.toJsStr_8fa7pm$ = function ($receiver) {
    if (Kotlin.isType($receiver, CompositeMode))
      return this.toJsStr_o7ms0u$($receiver);
    else if (Kotlin.isType($receiver, BlendMode))
      return this.toJsStr_loo09g$($receiver);
    else
      return 'source-over';
  };
  CanvasContext2dRenderer.prototype.setState_0 = function (state, fill, fontSize) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.ctx.globalAlpha = state.globalAlpha;
    this.ctx.globalCompositeOperation = this.toJsStr_8fa7pm$(state.globalCompositeOperation);
    this.setFont_0(state.font, state.fontSize);
    if (fill) {
      this.ctx.fillStyle = this.toJsStr_4rlhju$(state.fillStyle);
    } else {
      this.ctx.lineWidth = state.scaledLineWidth;
      tmp$_0 = this.ctx;
      switch (state.lineJoin.name) {
        case 'BEVEL':
          tmp$ = 'bevel';
          break;
        case 'MITER':
          tmp$ = 'miter';
          break;
        case 'ROUND':
          tmp$ = 'round';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.lineJoin = tmp$;
      tmp$_2 = this.ctx;
      switch (state.lineCap.name) {
        case 'BUTT':
          tmp$_1 = 'butt';
          break;
        case 'ROUND':
          tmp$_1 = 'round';
          break;
        case 'SQUARE':
          tmp$_1 = 'square';
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_2.lineCap = tmp$_1;
      this.ctx.strokeStyle = this.toJsStr_4rlhju$(state.strokeStyle);
    }
  };
  CanvasContext2dRenderer.prototype.transformPaint_0 = function (paint) {
    if (Kotlin.isType(paint, TransformedPaint)) {
      var m = paint.transform;
      this.ctx.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
    }};
  CanvasContext2dRenderer.prototype.drawImage_r3wwxz$$default = function (image, x, y, width, height, transform) {
    var tmp$;
    this.ctx.save();
    try {
      this.ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
      this.ctx.drawImage((Kotlin.isType(tmp$ = ensureNative(image), HtmlNativeImage) ? tmp$ : throwCCE()).texSource, x, y, width, height);
    }finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.render_w64o9o$ = function (state, fill) {
    if (isEmpty(state.path))
      return;
    this.ctx.save();
    try {
      this.setState_0(state, fill, state.fontSize);
      this.ctx.beginPath();
      var $this = state.path;
      var n = {v: 0};
      var $receiver = $this.commands;
      var tmp$;
      var n_0 = 0;
      while (n_0 < $receiver.size) {
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
        switch ($receiver.getAt_za3lpa$((tmp$ = n_0, n_0 = tmp$ + 1 | 0, tmp$))) {
          case 0:
            var x = $this.data.getAt_za3lpa$((tmp$_0 = n.v, n.v = tmp$_0 + 1 | 0, tmp$_0));
            var y = $this.data.getAt_za3lpa$((tmp$_1 = n.v, n.v = tmp$_1 + 1 | 0, tmp$_1));
            this.ctx.moveTo(x, y);
            break;
          case 1:
            var x_0 = $this.data.getAt_za3lpa$((tmp$_2 = n.v, n.v = tmp$_2 + 1 | 0, tmp$_2));
            var y_0 = $this.data.getAt_za3lpa$((tmp$_3 = n.v, n.v = tmp$_3 + 1 | 0, tmp$_3));
            this.ctx.lineTo(x_0, y_0);
            break;
          case 2:
            var x1 = $this.data.getAt_za3lpa$((tmp$_4 = n.v, n.v = tmp$_4 + 1 | 0, tmp$_4));
            var y1 = $this.data.getAt_za3lpa$((tmp$_5 = n.v, n.v = tmp$_5 + 1 | 0, tmp$_5));
            var x2 = $this.data.getAt_za3lpa$((tmp$_6 = n.v, n.v = tmp$_6 + 1 | 0, tmp$_6));
            var y2 = $this.data.getAt_za3lpa$((tmp$_7 = n.v, n.v = tmp$_7 + 1 | 0, tmp$_7));
            this.ctx.quadraticCurveTo(x1, y1, x2, y2);
            break;
          case 3:
            var x1_0 = $this.data.getAt_za3lpa$((tmp$_8 = n.v, n.v = tmp$_8 + 1 | 0, tmp$_8));
            var y1_0 = $this.data.getAt_za3lpa$((tmp$_9 = n.v, n.v = tmp$_9 + 1 | 0, tmp$_9));
            var x2_0 = $this.data.getAt_za3lpa$((tmp$_10 = n.v, n.v = tmp$_10 + 1 | 0, tmp$_10));
            var y2_0 = $this.data.getAt_za3lpa$((tmp$_11 = n.v, n.v = tmp$_11 + 1 | 0, tmp$_11));
            var x3 = $this.data.getAt_za3lpa$((tmp$_12 = n.v, n.v = tmp$_12 + 1 | 0, tmp$_12));
            var y3 = $this.data.getAt_za3lpa$((tmp$_13 = n.v, n.v = tmp$_13 + 1 | 0, tmp$_13));
            this.ctx.bezierCurveTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
            break;
          case 4:
            this.ctx.closePath();
            break;
        }
      }
      if (fill) {
        this.transformPaint_0(state.fillStyle);
        this.ctx.fill(this.toCanvasFillRule_9vf4pc$(state.path.winding));
      } else {
        this.transformPaint_0(state.strokeStyle);
        this.ctx.stroke();
      }
    }finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.toCanvasFillRule_9vf4pc$ = function ($receiver) {
    switch ($receiver.name) {
      case 'NON_ZERO':
        return 'nonzero';
      case 'EVEN_ODD':
        return 'evenodd';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  CanvasContext2dRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasContext2dRenderer',
    interfaces: [Renderer]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korim = package$soywiz.korim || (package$soywiz.korim = {});
  Object.defineProperty(package$korim, 'Korim', {
    get: Korim_getInstance
  });
  var package$annotation = package$korim.annotation || (package$korim.annotation = {});
  package$annotation.KorimExperimental = KorimExperimental;
  package$annotation.KorimInternal = KorimInternal;
  Object.defineProperty(package$annotation, 'KorimInternalObject', {
    get: KorimInternalObject_getInstance
  });
  $$importsForInline$$['korim-root-korim'] = _;
  var package$bitmap = package$korim.bitmap || (package$korim.bitmap = {});
  package$bitmap.Bitmap = Bitmap;
  package$bitmap.createWithThisFormatTyped_cq1euf$ = createWithThisFormatTyped;
  package$bitmap.extract_or9s9z$ = extract_0;
  package$bitmap.context2d_rr3dot$ = context2d;
  package$bitmap.checkMatchDimensions_kvavrz$ = checkMatchDimensions;
  package$bitmap.mipmaps_6tbmt4$ = mipmaps;
  package$bitmap.Bitmap1 = Bitmap1;
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  package$bitmap.Bitmap16 = Bitmap16;
  package$bitmap.Bitmap2 = Bitmap2;
  Bitmap32$Companion.prototype.MatchResult = Bitmap32$Companion$MatchResult;
  Object.defineProperty(Bitmap32, 'Companion', {
    get: Bitmap32$Companion_getInstance
  });
  package$bitmap.Bitmap32_init_l6bm7e$ = Bitmap32_init;
  package$bitmap.Bitmap32_init_g4fuo$ = Bitmap32_init_0;
  package$bitmap.Bitmap32 = Bitmap32;
  package$bitmap.Bitmap4 = Bitmap4;
  Object.defineProperty(Bitmap8, 'Companion', {
    get: Bitmap8$Companion_getInstance
  });
  package$bitmap.Bitmap8 = Bitmap8;
  Object.defineProperty(BitmapChannel, 'RED', {
    get: BitmapChannel$RED_getInstance
  });
  Object.defineProperty(BitmapChannel, 'GREEN', {
    get: BitmapChannel$GREEN_getInstance
  });
  Object.defineProperty(BitmapChannel, 'BLUE', {
    get: BitmapChannel$BLUE_getInstance
  });
  Object.defineProperty(BitmapChannel, 'ALPHA', {
    get: BitmapChannel$ALPHA_getInstance
  });
  Object.defineProperty(BitmapChannel, 'Companion', {
    get: BitmapChannel$Companion_getInstance
  });
  package$bitmap.BitmapChannel = BitmapChannel;
  package$bitmap.get_Y_tqizvu$ = get_Y;
  package$bitmap.get_Cb_tqizvu$ = get_Cb;
  package$bitmap.get_Cr_tqizvu$ = get_Cr;
  package$bitmap.get_A_tqizvu$ = get_A;
  package$bitmap.toStringYCbCr_4f4qi0$ = toStringYCbCr;
  package$bitmap.matchContentsDistinctCount_1cy7pt$ = matchContentsDistinctCount;
  package$bitmap.matchContents_1cy7pt$ = matchContents;
  package$bitmap.setAlpha_1dwlii$ = setAlpha;
  package$bitmap.putWithBorder_cxfkob$ = putWithBorder;
  package$bitmap.BitmapIndexed = BitmapIndexed;
  package$bitmap.BmpSlice = BmpSlice;
  package$bitmap.asBitmapSlice_94b807$ = asBitmapSlice;
  package$bitmap.getIntBounds_hoecl$ = getIntBounds;
  package$bitmap.extract_56kw4r$ = extract_1;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  package$bitmap.BitmapSlice = BitmapSlice;
  package$bitmap.BitmapSliceCompat_qpf1ss$ = BitmapSliceCompat;
  package$bitmap.slice_umqjjl$ = slice;
  package$bitmap.sliceWithBounds_lunxvd$ = sliceWithBounds;
  package$bitmap.sliceWithSize_lunxvd$ = sliceWithSize_1;
  Object.defineProperty(package$bitmap, 'Bitmaps', {
    get: Bitmaps_getInstance
  });
  package$bitmap.DistanceBitmap = DistanceBitmap;
  package$bitmap.NativeImage = NativeImage;
  package$bitmap.mipmap_lzupcl$ = mipmap;
  package$bitmap.toUri_p18lal$ = toUri;
  package$bitmap.NativeImageOrBitmap32_ydzd23$ = NativeImageOrBitmap32;
  package$bitmap.NativeImage_vux9f0$ = NativeImage_0;
  package$bitmap.NativeImage_ekqg6z$ = NativeImage_1;
  package$bitmap.NativeImage_s56r90$ = NativeImage_2;
  package$bitmap.ensureNative_p18lal$ = ensureNative;
  package$bitmap.raster_u8xmsp$ = raster;
  NinePatchInfo.AxisSegment = NinePatchInfo$AxisSegment;
  NinePatchInfo.AxisInfo = NinePatchInfo$AxisInfo;
  NinePatchInfo.Segment = NinePatchInfo$Segment;
  package$bitmap.NinePatchInfo_init_mbbjvw$ = NinePatchInfo_init;
  package$bitmap.NinePatchInfo = NinePatchInfo;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  package$bitmap.NinePatchBitmap32 = NinePatchBitmap32;
  package$bitmap.asNinePatch_p18lal$ = asNinePatch;
  package$bitmap.readNinePatch_2axf5n$ = readNinePatch;
  Object.defineProperty(package$bitmap, 'PSNR', {
    get: PSNR_getInstance
  });
  package$bitmap.psnrDiffTo_uz8x2p$ = psnrDiffTo;
  package$bitmap.computePsnr_so1h92$ = computePsnr;
  var package$atlas = package$bitmap.atlas || (package$bitmap.atlas = {});
  package$atlas.Atlas = Atlas;
  MutableAtlas.Entry = MutableAtlas$Entry;
  package$atlas.MutableAtlas_init_o5n3kf$ = MutableAtlas_init;
  package$atlas.MutableAtlas = MutableAtlas;
  var package$effect = package$bitmap.effect || (package$bitmap.effect = {});
  package$effect.blur_1dwlii$ = blur;
  package$effect.blur_7l7dat$ = blur_0;
  package$effect.blurInplace_1dwlii$ = blurInplace;
  package$effect.blurInplace_7l7dat$ = blurInplace_0;
  package$effect.dropShadow_hsbt4r$ = dropShadow;
  package$effect.dropShadowInplace_hsbt4r$ = dropShadowInplace;
  package$effect.glow_hbw1hh$ = glow;
  package$effect.glowInplace_hbw1hh$ = glowInplace;
  var package$color = package$korim.color || (package$korim.color = {});
  Object.defineProperty(package$color, 'ARGB', {
    get: ARGB_getInstance
  });
  Object.defineProperty(package$color, 'BGRA', {
    get: BGRA_getInstance
  });
  Object.defineProperty(CMYK, 'Companion', {
    get: CMYK$Companion_getInstance
  });
  package$color.CMYK = CMYK;
  package$color.toCMYK_h1fete$ = toCMYK;
  ColorFormat.Mixin = ColorFormat$Mixin;
  package$color.ColorFormat = ColorFormat;
  package$color.ColorFormat16 = ColorFormat16;
  package$color.ColorFormat24 = ColorFormat24;
  package$color.ColorFormat32 = ColorFormat32;
  package$color.numberOfBytes_6i9sz0$ = numberOfBytes;
  package$color.get_bytesPerPixel_igxz2m$ = get_bytesPerPixel;
  package$color.toRGBA_6i9sz0$ = toRGBA;
  package$color.packRGBA_qvhnkv$ = packRGBA;
  package$color.getRf_6i9sz0$ = getRf;
  package$color.getGf_6i9sz0$ = getGf;
  package$color.getBf_6i9sz0$ = getBf;
  package$color.getAf_6i9sz0$ = getAf;
  package$color.getRd_6i9sz0$ = getRd;
  package$color.getGd_6i9sz0$ = getGd;
  package$color.getBd_6i9sz0$ = getBd;
  package$color.getAd_6i9sz0$ = getAd;
  package$color.unpackToRGBA_6i9sz0$ = unpackToRGBA;
  package$color.convertTo_1b61px$ = convertTo;
  package$color.RGBA = RGBA;
  package$color.decodeInternal_4v8vnc$ = decodeInternal;
  package$color.decode_aeo8vf$ = decode;
  package$color.decode_8dn5f5$ = decode_0;
  package$color.decodeToBitmap32_hx8rld$ = decodeToBitmap32;
  package$color.decodeToBitmap32_rp8m90$ = decodeToBitmap32_0;
  package$color.encode_4qtzhn$ = encode;
  package$color.encode_ewnnn1$ = encode_0;
  package$color.encode_59hu82$ = encode_1;
  package$color.encode_3fz5f9$ = encode_2;
  Object.defineProperty(ColorMatrix, 'Companion', {
    get: ColorMatrix$Companion_getInstance
  });
  package$color.ColorMatrix = ColorMatrix;
  package$color.transform_7q9351$ = transform;
  package$color.swizzle_32r3gg$ = swizzle;
  Object.defineProperty(ColorTransform, 'Companion', {
    get: ColorTransform$Companion_getInstance
  });
  package$color.ColorTransform = ColorTransform;
  Object.defineProperty(ColorAdd, 'Companion', {
    get: ColorAdd$Companion_getInstance
  });
  package$color.ColorAdd = ColorAdd;
  package$color.toColorAdd_h1fete$ = toColorAdd;
  package$color.ColorTransform_6tck58$ = ColorTransform_1;
  package$color.ColorTransform_d3e2w0$ = ColorTransform_0;
  package$color.transform_kgvwc8$ = transform_0;
  Colors.prototype.WithDefault = Colors$WithDefault;
  Object.defineProperty(Colors.prototype, 'Default', {
    get: Colors$Default_getInstance
  });
  Object.defineProperty(package$color, 'Colors', {
    get: Colors_getInstance
  });
  package$color.PaletteColorFormat = PaletteColorFormat;
  Object.defineProperty(RGB, 'Companion', {
    get: RGB$Companion_getInstance
  });
  package$color.RGB = RGB;
  Object.defineProperty(package$color, 'BGR', {
    get: BGR_getInstance
  });
  Object.defineProperty(RGBA, 'Companion', {
    get: RGBA$Companion_getInstance
  });
  package$color.interpolate_bxlh7p$ = interpolate_1;
  Object.defineProperty(RGBAPremultiplied, 'Companion', {
    get: RGBAPremultiplied$Companion_getInstance
  });
  package$color.RGBAPremultiplied_init_vux9f0$ = RGBAPremultiplied_init;
  package$color.RGBAPremultiplied_init_tjonv8$ = RGBAPremultiplied_init_0;
  package$color.RGBAPremultiplied = RGBAPremultiplied;
  package$color.asPremultiplied_h1fete$ = asPremultiplied;
  package$color.asNonPremultiplied_w4w6h6$ = asNonPremultiplied;
  package$color.asPremultiplied_3ze06x$ = asPremultiplied_0;
  package$color.asNonPremultiplied_c2t4n9$ = asNonPremultiplied_0;
  Object.defineProperty(RgbaPremultipliedArray, 'Companion', {
    get: RgbaPremultipliedArray$Companion_getInstance
  });
  package$color.RgbaPremultipliedArray = RgbaPremultipliedArray;
  package$color.scale_r7q85k$ = scale;
  package$color.mix_nfwb9u$ = mix;
  package$color.mix_ylb2hq$ = mix_0;
  package$color.mix_gzgd4k$ = mix_1;
  package$color.premultiply_nfwb9u$ = premultiply;
  package$color.depremultiply_lxyc6y$ = depremultiply;
  package$color.mix_i27xe7$ = mix_2;
  Object.defineProperty(RgbaArray, 'Companion', {
    get: RgbaArray$Companion_getInstance
  });
  package$color.RgbaArray = RgbaArray;
  package$color.mix_70fxd1$ = mix_3;
  package$color.toRgbaArray_6eadht$ = toRgbaArray;
  package$color.arraycopy_m3qhle$ = arraycopy;
  package$color.depremultiplyFaster_bx7wdr$ = depremultiplyFaster;
  package$color.depremultiplyFastest_bx7wdr$ = depremultiplyFastest;
  package$color.toRgbaArray_c0u5ea$ = toRgbaArray_0;
  Object.defineProperty(package$color, 'RGBA_4444', {
    get: RGBA_4444_getInstance
  });
  Object.defineProperty(package$color, 'RGBA_5551', {
    get: RGBA_5551_getInstance
  });
  Object.defineProperty(package$color, 'RGB_555', {
    get: RGB_555_getInstance
  });
  Object.defineProperty(package$color, 'RGB_565', {
    get: RGB_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_4444', {
    get: BGRA_4444_getInstance
  });
  Object.defineProperty(package$color, 'BGR_555', {
    get: BGR_555_getInstance
  });
  Object.defineProperty(package$color, 'BGR_565', {
    get: BGR_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_5551', {
    get: BGRA_5551_getInstance
  });
  package$color.RGBAd_init_h1ferx$ = RGBAd_init;
  package$color.RGBAd_init_za3lpa$ = RGBAd_init_0;
  package$color.RGBAd_init = RGBAd_init_1;
  package$color.RGBAd = RGBAd;
  package$color.RGBAf = RGBAf;
  package$color.RGBAf_1ugm5o$ = RGBAf_0;
  package$color.setToColorPremultiplied_1r9l2y$ = setToColorPremultiplied;
  package$color.setToColor_1r9l2y$ = setToColor;
  package$color.toPremultipliedVector3D_8kyabi$ = toPremultipliedVector3D;
  package$color.toVector3D_8kyabi$ = toVector3D;
  Object.defineProperty(YCbCr, 'Companion', {
    get: YCbCr$Companion_getInstance
  });
  package$color.YCbCr_init_tjonv8$ = YCbCr_init;
  package$color.YCbCr = YCbCr;
  package$color.YCbCrArray = YCbCrArray;
  package$color.toYCbCr_h1fete$ = toYCbCr;
  package$color.toRGBA_rqsoe3$ = toRGBA_0;
  Object.defineProperty(YUVA, 'Companion', {
    get: YUVA$Companion_getInstance
  });
  package$color.YUVA_init_tjonv8$ = YUVA_init;
  package$color.YUVA = YUVA;
  package$color.YuvaArray = YuvaArray;
  package$color.toYUVA_h1fete$ = toYUVA;
  package$color.toRGBA_gxbi0l$ = toRGBA_1;
  Object.defineProperty(BitmapFont$Kerning, 'Companion', {
    get: BitmapFont$Kerning$Companion_getInstance
  });
  BitmapFont.Kerning = BitmapFont$Kerning;
  BitmapFont.Glyph = BitmapFont$Glyph;
  Object.defineProperty(BitmapFont, 'Companion', {
    get: BitmapFont$Companion_getInstance
  });
  var package$font = package$korim.font || (package$korim.font = {});
  package$font.BitmapFont = BitmapFont;
  package$font.readBitmapFont_2axf5n$ = readBitmapFont;
  package$font.drawText_81yp5e$ = drawText;
  Object.defineProperty(CharacterSet, 'Companion', {
    get: CharacterSet$Companion_getInstance
  });
  package$font.CharacterSet_init_61zpoe$ = CharacterSet_init;
  package$font.CharacterSet = CharacterSet;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  Object.defineProperty(package$font, 'DefaultTtfFont', {
    get: get_DefaultTtfFont
  });
  package$font.Font = Font;
  TextToBitmapResult.PlacedGlyph = TextToBitmapResult$PlacedGlyph;
  package$font.TextToBitmapResult = TextToBitmapResult;
  package$font.renderGlyphToBitmap_6sjsfo$ = renderGlyphToBitmap;
  package$font.renderTextToBitmap_wsx2ss$ = renderTextToBitmap;
  package$font.drawText_kjdcad$ = drawText_0;
  package$font.getTextBounds_2spkf5$ = getTextBounds;
  package$font.BoundBuilderTextRendererActions = BoundBuilderTextRendererActions;
  Object.defineProperty(FontOrigin, 'TOP', {
    get: FontOrigin$TOP_getInstance
  });
  Object.defineProperty(FontOrigin, 'BASELINE', {
    get: FontOrigin$BASELINE_getInstance
  });
  package$font.FontOrigin = FontOrigin;
  Object.defineProperty(FontRegistry, 'Companion', {
    get: FontRegistry$Companion_getInstance
  });
  package$font.FontRegistry = FontRegistry;
  Object.defineProperty(package$font, 'SystemFontRegistry', {
    get: SystemFontRegistry_getInstance
  });
  package$font.DefaultFontRegistry = DefaultFontRegistry;
  package$font.register_dmw6x9$ = register;
  package$font.registerTemporarily_78f45l$ = registerTemporarily;
  package$font.GlyphPath = GlyphPath;
  package$font.FontMetrics = FontMetrics;
  package$font.GlyphMetrics = GlyphMetrics;
  package$font.TextMetrics = TextMetrics;
  package$font.NativeSystemFontProvider = NativeSystemFontProvider;
  package$font.FallbackNativeSystemFontProvider = FallbackNativeSystemFontProvider;
  package$font.SystemFont = SystemFont;
  package$font.TextRendererActions = TextRendererActions;
  package$font.CreateStringTextRenderer_hzx9r9$ = CreateStringTextRenderer;
  Object.defineProperty(package$font, 'DefaultStringTextRenderer', {
    get: function () {
      return DefaultStringTextRenderer;
    }
  });
  Object.defineProperty(TtfFont$NameIds, 'COPYRIGHT', {
    get: TtfFont$NameIds$COPYRIGHT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_FAMILY_NAME', {
    get: TtfFont$NameIds$FONT_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'UNIQUE_FONT_ID', {
    get: TtfFont$NameIds$UNIQUE_FONT_ID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FULL_FONT_NAME', {
    get: TtfFont$NameIds$FULL_FONT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VERSION_STRING', {
    get: TtfFont$NameIds$VERSION_STRING_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_NAME', {
    get: TtfFont$NameIds$POSTSCRIPT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TRADEMARK', {
    get: TtfFont$NameIds$TRADEMARK_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'MANUFACTURER', {
    get: TtfFont$NameIds$MANUFACTURER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESIGNER', {
    get: TtfFont$NameIds$DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESCRIPTION', {
    get: TtfFont$NameIds$DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_VENDOR', {
    get: TtfFont$NameIds$URL_VENDOR_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_DESIGNER', {
    get: TtfFont$NameIds$URL_DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_DESCRIPTION', {
    get: TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_URL', {
    get: TtfFont$NameIds$LICENSE_URL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'RESERVED_15', {
    get: TtfFont$NameIds$RESERVED_15_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_FAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'COMPATIBLE_FULL', {
    get: TtfFont$NameIds$COMPATIBLE_FULL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'SAMPLE_TEXT', {
    get: TtfFont$NameIds$SAMPLE_TEXT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_CID', {
    get: TtfFont$NameIds$POSTSCRIPT_CID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_FAMILY_NAME', {
    get: TtfFont$NameIds$WWS_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LIGHT_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DARK_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VARIATIONS_POSTSCRIPT_NAME_PREFIX', {
    get: TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'Companion', {
    get: TtfFont$NameIds$Companion_getInstance
  });
  TtfFont.NameIds = TtfFont$NameIds;
  TtfFont.HorMetric = TtfFont$HorMetric;
  package$font.TtfFont_init_1plrxm$ = TtfFont_init;
  package$font.TtfFont = TtfFont;
  Object.defineProperty(Fixed, 'Companion', {
    get: Fixed$Companion_getInstance
  });
  package$font.Fixed = Fixed;
  package$font.readTtfFont_thwgyb$ = readTtfFont;
  package$font.VectorFont = VectorFont;
  BMP.prototype.BmImageInfo = BMP$BmImageInfo;
  var package$format = package$korim.format || (package$korim.format = {});
  Object.defineProperty(package$format, 'BMP', {
    get: BMP_getInstance
  });
  Object.defineProperty(package$format, 'DDS', {
    get: DDS_getInstance
  });
  Object.defineProperty(package$format, 'DXT1', {
    get: DXT1_getInstance
  });
  Object.defineProperty(package$format, 'DXT2', {
    get: DXT2_getInstance
  });
  Object.defineProperty(package$format, 'DXT3', {
    get: DXT3_getInstance
  });
  Object.defineProperty(package$format, 'DXT4', {
    get: DXT4_getInstance
  });
  Object.defineProperty(package$format, 'DXT5', {
    get: DXT5_getInstance
  });
  package$format.DXT1Base = DXT1Base;
  package$format.DXT2_3 = DXT2_3;
  package$format.DXT4_5 = DXT4_5;
  Object.defineProperty(DXT, 'Companion', {
    get: DXT$Companion_getInstance
  });
  package$format.DXT = DXT;
  Object.defineProperty(package$format, 'GIF', {
    get: GIF_getInstance
  });
  GifDec.prototype.gd_Palette = GifDec$gd_Palette;
  GifDec.prototype.gd_GCE = GifDec$gd_GCE;
  GifDec.prototype.gd_GIF = GifDec$gd_GIF;
  GifDec.prototype.Entry = GifDec$Entry;
  GifDec.prototype.Table = GifDec$Table;
  GifDec.prototype.KeyState = GifDec$KeyState;
  Object.defineProperty(package$format, 'GifDec', {
    get: GifDec_getInstance
  });
  Object.defineProperty(package$format, 'ICO', {
    get: ICO_getInstance
  });
  package$format.ImageData = ImageData;
  package$format.ImageFormat = ImageFormat;
  package$format.ImageDecodingProps = ImageDecodingProps;
  package$format.ImageEncodingProps = ImageEncodingProps;
  package$format.ImageFormats_init_56bozu$ = ImageFormats_init;
  package$format.ImageFormats = ImageFormats;
  package$format.plus_bexuvf$ = plus_2;
  package$format.plus_al0iei$ = plus_3;
  package$format.writeTo_d2mj5k$ = writeTo;
  package$format.encode_ccak55$ = encode_3;
  package$format.ImageFrame = ImageFrame;
  package$format.get_area_mj13kf$ = get_area;
  package$format.ImageInfo = ImageInfo;
  Object.defineProperty(package$format, 'KRA', {
    get: KRA_getInstance
  });
  package$format.decode_97bjr4$ = decode_1;
  package$format.decode_cv04aa$ = decode_2;
  package$format.decode_rk4kpr$ = decode_3;
  Object.defineProperty(package$format, 'nativeImageFormatProviders', {
    get: get_nativeImageFormatProviders
  });
  package$format.displayImage_uwsoz2$ = displayImage;
  package$format.decodeImageBytes_fqrh44$ = decodeImageBytes;
  package$format.decodeImageFile_3ekr7n$ = decodeImageFile;
  package$format.readNativeImage_yirdke$ = readNativeImage;
  package$format.readImageData_vi5npc$ = readImageData;
  package$format.readNativeImage_yjldv$ = readNativeImage_0;
  package$format.readImageData_8dzss$ = readImageData_0;
  package$format.readImageDataProps_ie8jgv$ = readImageDataProps;
  package$format.readBitmapListNoNative_a0awwm$ = readBitmapListNoNative;
  package$format.readBitmapInfo_vi5npc$ = readBitmapInfo;
  package$format.readImageData_2axf5n$ = readImageData_1;
  package$format.readBitmapListNoNative_2axf5n$ = readBitmapListNoNative_0;
  package$format.readBitmapImageData_2axf5n$ = readBitmapImageData;
  package$format.readBitmap_alhih0$ = readBitmap;
  package$format.readBitmap_ie8jgv$ = readBitmap_0;
  package$format.readBitmapInfo_2axf5n$ = readBitmapInfo_0;
  package$format.readBitmapOptimized_c6jndg$ = readBitmapOptimized;
  package$format.readBitmap_vi5npc$ = readBitmap_1;
  package$format.readBitmapSlice_2axf5n$ = readBitmapSlice;
  Object.defineProperty(package$format, 'nativeImageLoadingEnabled', {
    get: function () {
      return nativeImageLoadingEnabled;
    },
    set: function (value) {
      nativeImageLoadingEnabled = value;
    }
  });
  package$format.disableNativeImageLoading_o14v8n$ = disableNativeImageLoading;
  package$format.readBitmapNoNative_vi5npc$ = readBitmapNoNative;
  package$format.readBitmapNoNative_2axf5n$ = readBitmapNoNative_0;
  package$format.writeBitmap_d6890c$ = writeBitmap;
  package$format.NativeImageConfig = NativeImageConfig;
  package$format.NativeImageFormatProvider = NativeImageFormatProvider;
  package$format.showImageAndWait_lzupcl$ = showImageAndWait;
  package$format.showImagesAndWait_q2hz9t$ = showImagesAndWait;
  package$format.showImageAndWait_9vnxih$ = showImageAndWait_0;
  package$format.BaseNativeImageFormatProvider = BaseNativeImageFormatProvider;
  package$format.BitmapNativeImage_init_uler2c$ = BitmapNativeImage_init;
  package$format.BitmapNativeImage = BitmapNativeImage;
  PNG.prototype.InterlacedPass = PNG$InterlacedPass;
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE', {
    get: PNG$Colorspace$GRAYSCALE_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGB', {
    get: PNG$Colorspace$RGB_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'INDEXED', {
    get: PNG$Colorspace$INDEXED_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE_ALPHA', {
    get: PNG$Colorspace$GRAYSCALE_ALPHA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGBA', {
    get: PNG$Colorspace$RGBA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'Companion', {
    get: PNG$Colorspace$Companion_getInstance
  });
  PNG.prototype.Colorspace = PNG$Colorspace;
  PNG.prototype.Header = PNG$Header;
  PNG.prototype.DecodingContext = PNG$DecodingContext;
  Object.defineProperty(package$format, 'PNG', {
    get: PNG_getInstance
  });
  PSD.prototype.PsdImageInfo = PSD$PsdImageInfo;
  Object.defineProperty(package$format, 'PSD', {
    get: PSD_getInstance
  });
  Object.defineProperty(package$format, 'RegisteredImageFormats', {
    get: RegisteredImageFormats_getInstance
  });
  Object.defineProperty(package$format, 'SVG', {
    get: SVG_getInstance
  });
  TGA.prototype.Info = TGA$Info;
  Object.defineProperty(package$format, 'TGA', {
    get: TGA_getInstance
  });
  var package$internal = package$korim.internal || (package$korim.internal = {});
  package$internal.clamp0_255_8e50z4$ = clamp0_255;
  package$internal.sumPacked4MulR_cub51b$ = sumPacked4MulR;
  Object.defineProperty(package$internal, 'KORIM_VERSION_8be2vx$', {
    get: function () {
      return KORIM_VERSION;
    }
  });
  package$internal.packIntUnchecked_r9yya9$ = packIntUnchecked;
  package$internal.packIntClamped_r9yya9$ = packIntClamped;
  package$internal.d2i_tq0o01$ = d2i;
  package$internal.f2i_nwfnho$ = f2i;
  package$internal.floorCeil_tq0o01$ = floorCeil;
  Object.defineProperty(QR$WifiKind, 'WEP', {
    get: QR$WifiKind$WEP_getInstance
  });
  Object.defineProperty(QR$WifiKind, 'WAP', {
    get: QR$WifiKind$WAP_getInstance
  });
  Object.defineProperty(QR$WifiKind, 'nopass', {
    get: QR$WifiKind$nopass_getInstance
  });
  QR.WifiKind = QR$WifiKind;
  Object.defineProperty(QR, 'Companion', {
    get: QR$Companion_getInstance
  });
  var package$qr = package$korim.qr || (package$korim.qr = {});
  package$qr.QR = QR;
  Object.defineProperty(QRErrorCorrectLevel, 'L', {
    get: QRErrorCorrectLevel$L_getInstance
  });
  Object.defineProperty(QRErrorCorrectLevel, 'M', {
    get: QRErrorCorrectLevel$M_getInstance
  });
  Object.defineProperty(QRErrorCorrectLevel, 'Q', {
    get: QRErrorCorrectLevel$Q_getInstance
  });
  Object.defineProperty(QRErrorCorrectLevel, 'H', {
    get: QRErrorCorrectLevel$H_getInstance
  });
  package$qr.QRErrorCorrectLevel = QRErrorCorrectLevel;
  Bitmap32Context2d.SegmentHandler = Bitmap32Context2d$SegmentHandler;
  Bitmap32Context2d.ScanlineWriter = Bitmap32Context2d$ScanlineWriter;
  var package$vector = package$korim.vector || (package$korim.vector = {});
  package$vector.Bitmap32Context2d = Bitmap32Context2d;
  Object.defineProperty(CompositeOperation, 'Companion', {
    get: CompositeOperation$Companion_getInstance
  });
  package$vector.CompositeOperation = CompositeOperation;
  package$vector.get_DEFAULT_cei86w$ = get_DEFAULT;
  package$vector.get_CLEAR_cei86w$ = get_CLEAR;
  package$vector.get_COPY_cei86w$ = get_COPY;
  package$vector.get_SOURCE_OVER_cei86w$ = get_SOURCE_OVER;
  package$vector.get_DESTINATION_OVER_cei86w$ = get_DESTINATION_OVER;
  package$vector.get_SOURCE_IN_cei86w$ = get_SOURCE_IN;
  package$vector.get_DESTINATION_IN_cei86w$ = get_DESTINATION_IN;
  package$vector.get_SOURCE_OUT_cei86w$ = get_SOURCE_OUT;
  package$vector.get_DESTINATION_OUT_cei86w$ = get_DESTINATION_OUT;
  package$vector.get_SOURCE_ATOP_cei86w$ = get_SOURCE_ATOP;
  package$vector.get_DESTINATION_ATOP_cei86w$ = get_DESTINATION_ATOP;
  package$vector.get_XOR_cei86w$ = get_XOR;
  package$vector.get_LIGHTER_cei86w$ = get_LIGHTER;
  package$vector.get_NORMAL_cei86w$ = get_NORMAL;
  package$vector.get_MULTIPLY_cei86w$ = get_MULTIPLY;
  package$vector.get_SCREEN_cei86w$ = get_SCREEN;
  package$vector.get_OVERLAY_cei86w$ = get_OVERLAY;
  package$vector.get_DARKEN_cei86w$ = get_DARKEN;
  package$vector.get_LIGHTEN_cei86w$ = get_LIGHTEN;
  package$vector.get_COLOR_DODGE_cei86w$ = get_COLOR_DODGE;
  package$vector.get_COLOR_BURN_cei86w$ = get_COLOR_BURN;
  package$vector.get_HARD_LIGHT_cei86w$ = get_HARD_LIGHT;
  package$vector.get_SOFT_LIGHT_cei86w$ = get_SOFT_LIGHT;
  package$vector.get_DIFFERENCE_cei86w$ = get_DIFFERENCE;
  package$vector.get_EXCLUSION_cei86w$ = get_EXCLUSION;
  package$vector.get_HUE_cei86w$ = get_HUE;
  package$vector.get_SATURATION_cei86w$ = get_SATURATION;
  package$vector.get_COLOR_cei86w$ = get_COLOR;
  package$vector.get_LUMINOSITY_cei86w$ = get_LUMINOSITY;
  Object.defineProperty(CompositeMode, 'CLEAR', {
    get: CompositeMode$CLEAR_getInstance
  });
  Object.defineProperty(CompositeMode, 'COPY', {
    get: CompositeMode$COPY_getInstance
  });
  Object.defineProperty(CompositeMode, 'SOURCE_OVER', {
    get: CompositeMode$SOURCE_OVER_getInstance
  });
  Object.defineProperty(CompositeMode, 'DESTINATION_OVER', {
    get: CompositeMode$DESTINATION_OVER_getInstance
  });
  Object.defineProperty(CompositeMode, 'SOURCE_IN', {
    get: CompositeMode$SOURCE_IN_getInstance
  });
  Object.defineProperty(CompositeMode, 'DESTINATION_IN', {
    get: CompositeMode$DESTINATION_IN_getInstance
  });
  Object.defineProperty(CompositeMode, 'SOURCE_OUT', {
    get: CompositeMode$SOURCE_OUT_getInstance
  });
  Object.defineProperty(CompositeMode, 'DESTINATION_OUT', {
    get: CompositeMode$DESTINATION_OUT_getInstance
  });
  Object.defineProperty(CompositeMode, 'SOURCE_ATOP', {
    get: CompositeMode$SOURCE_ATOP_getInstance
  });
  Object.defineProperty(CompositeMode, 'DESTINATION_ATOP', {
    get: CompositeMode$DESTINATION_ATOP_getInstance
  });
  Object.defineProperty(CompositeMode, 'XOR', {
    get: CompositeMode$XOR_getInstance
  });
  Object.defineProperty(CompositeMode, 'LIGHTER', {
    get: CompositeMode$LIGHTER_getInstance
  });
  Object.defineProperty(CompositeMode, 'Companion', {
    get: CompositeMode$Companion_getInstance
  });
  package$vector.CompositeMode = CompositeMode;
  Object.defineProperty(BlendMode, 'NORMAL', {
    get: BlendMode$NORMAL_getInstance
  });
  Object.defineProperty(BlendMode, 'MULTIPLY', {
    get: BlendMode$MULTIPLY_getInstance
  });
  Object.defineProperty(BlendMode, 'SCREEN', {
    get: BlendMode$SCREEN_getInstance
  });
  Object.defineProperty(BlendMode, 'OVERLAY', {
    get: BlendMode$OVERLAY_getInstance
  });
  Object.defineProperty(BlendMode, 'DARKEN', {
    get: BlendMode$DARKEN_getInstance
  });
  Object.defineProperty(BlendMode, 'LIGHTEN', {
    get: BlendMode$LIGHTEN_getInstance
  });
  Object.defineProperty(BlendMode, 'COLOR_DODGE', {
    get: BlendMode$COLOR_DODGE_getInstance
  });
  Object.defineProperty(BlendMode, 'COLOR_BURN', {
    get: BlendMode$COLOR_BURN_getInstance
  });
  Object.defineProperty(BlendMode, 'HARD_LIGHT', {
    get: BlendMode$HARD_LIGHT_getInstance
  });
  Object.defineProperty(BlendMode, 'SOFT_LIGHT', {
    get: BlendMode$SOFT_LIGHT_getInstance
  });
  Object.defineProperty(BlendMode, 'DIFFERENCE', {
    get: BlendMode$DIFFERENCE_getInstance
  });
  Object.defineProperty(BlendMode, 'EXCLUSION', {
    get: BlendMode$EXCLUSION_getInstance
  });
  Object.defineProperty(BlendMode, 'HUE', {
    get: BlendMode$HUE_getInstance
  });
  Object.defineProperty(BlendMode, 'SATURATION', {
    get: BlendMode$SATURATION_getInstance
  });
  Object.defineProperty(BlendMode, 'COLOR', {
    get: BlendMode$COLOR_getInstance
  });
  Object.defineProperty(BlendMode, 'LUMINOSITY', {
    get: BlendMode$LUMINOSITY_getInstance
  });
  package$vector.BlendMode = BlendMode;
  Context2d.ScaledRenderer = Context2d$ScaledRenderer;
  Context2d.State = Context2d$State;
  package$vector.CycleMethod = CycleMethod;
  var package$paint = package$vector.paint || (package$vector.paint = {});
  package$paint.LinearGradientPaint_ppf5ku$ = LinearGradientPaint;
  package$paint.RadialGradientPaint_j4b27i$ = RadialGradientPaint;
  package$paint.SweepGradientPaint_5chak8$ = SweepGradientPaint;
  Context2d.StrokeInfo = Context2d$StrokeInfo;
  package$vector.Context2d = Context2d;
  package$vector.toFill_h1fete$ = toFill;
  package$vector.renderTo_qv3v8w$ = renderTo;
  package$vector.filled_tra6b6$ = filled;
  package$vector.scaled_rdtjl3$ = scaled;
  package$vector.translated_rdtjl3$ = translated;
  package$vector.render_iha9l$ = render;
  package$vector.renderNoNative_iha9l$ = renderNoNative;
  package$vector.render_q0z526$ = render_0;
  package$vector.renderToImage_qns25w$ = renderToImage;
  package$vector.renderToImage_6v3dwt$ = renderToImage_0;
  Object.defineProperty(CycleMethod, 'NO_CYCLE', {
    get: CycleMethod$NO_CYCLE_getInstance
  });
  Object.defineProperty(CycleMethod, 'REFLECT', {
    get: CycleMethod$REFLECT_getInstance
  });
  Object.defineProperty(CycleMethod, 'REPEAT', {
    get: CycleMethod$REPEAT_getInstance
  });
  package$vector.apply_ie4252$ = apply;
  package$vector.apply_yq57yn$ = apply_0;
  package$vector.apply_67ndnj$ = apply_1;
  package$vector.Drawable = Drawable;
  package$vector.SizedDrawable = SizedDrawable;
  package$vector.BoundsDrawable = BoundsDrawable;
  package$vector.FuncDrawable = FuncDrawable;
  package$vector.GraphicsPath = GraphicsPath;
  Object.defineProperty(HorizontalAlign, 'Companion', {
    get: HorizontalAlign$Companion_getInstance
  });
  package$vector.HorizontalAlign = HorizontalAlign;
  Object.defineProperty(LineScaleMode, 'NONE', {
    get: LineScaleMode$NONE_getInstance
  });
  Object.defineProperty(LineScaleMode, 'HORIZONTAL', {
    get: LineScaleMode$HORIZONTAL_getInstance
  });
  Object.defineProperty(LineScaleMode, 'VERTICAL', {
    get: LineScaleMode$VERTICAL_getInstance
  });
  Object.defineProperty(LineScaleMode, 'NORMAL', {
    get: LineScaleMode$NORMAL_getInstance
  });
  package$vector.LineScaleMode = LineScaleMode;
  package$vector.SvgBuilder = SvgBuilder;
  package$vector.buildSvgXml_p5gwzq$ = buildSvgXml;
  package$vector.toSvgPathString_9fp9g$ = toSvgPathString;
  package$vector.Shape = Shape;
  package$vector.getBounds_infsew$ = getBounds;
  package$vector.toSvg_wxx4ll$ = toSvg_0;
  package$vector.toShape_qns25w$ = toShape;
  package$vector.toSvg_xn3bqy$ = toSvg_1;
  package$vector.toShape_iha9l$ = toShape_0;
  package$vector.toSvg_vyuxgp$ = toSvg_2;
  package$vector.StyledShape = StyledShape;
  package$vector.toSvg_bhqsfe$ = toSvg_3;
  Object.defineProperty(package$vector, 'EmptyShape', {
    get: EmptyShape_getInstance
  });
  package$vector.FillShape = FillShape;
  package$vector.PolylineShape_init_eu19nt$ = PolylineShape_init;
  package$vector.PolylineShape = PolylineShape;
  package$vector.CompoundShape = CompoundShape;
  package$vector.TextShape = TextShape;
  package$vector.buildShape_p5gwzq$ = buildShape;
  package$vector.ShapeBuilder = ShapeBuilder;
  Object.defineProperty(ShapeRasterizerMethod, 'NONE', {
    get: ShapeRasterizerMethod$NONE_getInstance
  });
  Object.defineProperty(ShapeRasterizerMethod, 'X1', {
    get: ShapeRasterizerMethod$X1_getInstance
  });
  Object.defineProperty(ShapeRasterizerMethod, 'X2', {
    get: ShapeRasterizerMethod$X2_getInstance
  });
  Object.defineProperty(ShapeRasterizerMethod, 'X4', {
    get: ShapeRasterizerMethod$X4_getInstance
  });
  package$vector.ShapeRasterizerMethod = ShapeRasterizerMethod;
  Object.defineProperty(VerticalAlign, 'Companion', {
    get: VerticalAlign$Companion_getInstance
  });
  package$vector.VerticalAlign = VerticalAlign;
  var package$chart = package$vector.chart || (package$vector.chart = {});
  package$chart.Chart = Chart;
  Object.defineProperty(ChartBars, 'Companion', {
    get: ChartBars$Companion_getInstance
  });
  ChartBars.DataPoint = ChartBars$DataPoint;
  Object.defineProperty(ChartBars$Fit, 'FULL', {
    get: ChartBars$Fit$FULL_getInstance
  });
  Object.defineProperty(ChartBars$Fit, 'DEG45', {
    get: ChartBars$Fit$DEG45_getInstance
  });
  Object.defineProperty(ChartBars$Fit, 'DEG90', {
    get: ChartBars$Fit$DEG90_getInstance
  });
  ChartBars.Fit = ChartBars$Fit;
  package$chart.ChartBars = ChartBars;
  var package$filler = package$vector.filler || (package$vector.filler = {});
  package$filler.BaseFiller = BaseFiller;
  Object.defineProperty(package$filler, 'NoneFiller', {
    get: NoneFiller_getInstance
  });
  package$filler.ColorFiller = ColorFiller;
  package$filler.BitmapFiller = BitmapFiller;
  package$filler.GradientFiller = GradientFiller;
  SVG_0.Style = SVG$Style;
  Object.defineProperty(SVG$GradientUnits, 'USER_SPACE_ON_USER', {
    get: SVG$GradientUnits$USER_SPACE_ON_USER_getInstance
  });
  Object.defineProperty(SVG$GradientUnits, 'OBJECT_BOUNDING_BOX', {
    get: SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance
  });
  SVG_0.GradientUnits = SVG$GradientUnits;
  Object.defineProperty(SVG_0, 'Companion', {
    get: SVG$Companion_getInstance
  });
  SVG_0.PathToken = SVG$PathToken;
  SVG_0.PathTokenNumber = SVG$PathTokenNumber;
  SVG_0.PathTokenCmd = SVG$PathTokenCmd;
  Object.defineProperty(SVG$SvgStyle, 'Companion', {
    get: SVG$SvgStyle$Companion_getInstance
  });
  SVG_0.SvgStyle = SVG$SvgStyle;
  var package$format_0 = package$vector.format || (package$vector.format = {});
  package$format_0.SVG_init_61zpoe$ = SVG_init;
  package$format_0.SVG = SVG_0;
  package$paint.Paint = Paint;
  Object.defineProperty(package$paint, 'NonePaint', {
    get: NonePaint_getInstance
  });
  package$paint.ColorPaint = ColorPaint;
  Object.defineProperty(package$paint, 'DefaultPaint', {
    get: DefaultPaint_getInstance
  });
  package$paint.TransformedPaint = TransformedPaint;
  Object.defineProperty(GradientKind, 'LINEAR', {
    get: GradientKind$LINEAR_getInstance
  });
  Object.defineProperty(GradientKind, 'RADIAL', {
    get: GradientKind$RADIAL_getInstance
  });
  Object.defineProperty(GradientKind, 'SWEEP', {
    get: GradientKind$SWEEP_getInstance
  });
  package$paint.GradientKind = GradientKind;
  Object.defineProperty(GradientUnits, 'USER_SPACE_ON_USE', {
    get: GradientUnits$USER_SPACE_ON_USE_getInstance
  });
  Object.defineProperty(GradientUnits, 'OBJECT_BOUNDING_BOX', {
    get: GradientUnits$OBJECT_BOUNDING_BOX_getInstance
  });
  package$paint.GradientUnits = GradientUnits;
  Object.defineProperty(GradientInterpolationMethod, 'LINEAR', {
    get: GradientInterpolationMethod$LINEAR_getInstance
  });
  Object.defineProperty(GradientInterpolationMethod, 'NORMAL', {
    get: GradientInterpolationMethod$NORMAL_getInstance
  });
  package$paint.GradientInterpolationMethod = GradientInterpolationMethod;
  package$paint.GradientPaint = GradientPaint;
  package$paint.BitmapPaint_init_wksi73$ = BitmapPaint_init;
  package$paint.BitmapPaint = BitmapPaint;
  Rasterizer.Stats = Rasterizer$Stats;
  var package$rasterizer = package$vector.rasterizer || (package$vector.rasterizer = {});
  package$rasterizer.Rasterizer = Rasterizer;
  var package$renderer = package$vector.renderer || (package$vector.renderer = {});
  package$renderer.Renderer = Renderer;
  Object.defineProperty(DummyRenderer, 'Companion', {
    get: DummyRenderer$Companion_getInstance
  });
  package$renderer.DummyRenderer = DummyRenderer;
  BufferedRenderer.RenderCommand = BufferedRenderer$RenderCommand;
  package$renderer.BufferedRenderer = BufferedRenderer;
  Object.defineProperty(package$font, 'nativeSystemFontProvider', {
    get: function () {
      return nativeSystemFontProvider;
    }
  });
  Object.defineProperty(package$format, 'HtmlCanvas', {
    get: HtmlCanvas_getInstance
  });
  package$format.toLike_ng27xv$ = toLike;
  Object.defineProperty(package$format, 'HtmlImage', {
    get: HtmlImage_getInstance
  });
  package$format.toHtmlNative_p18lal$ = toHtmlNative;
  Object.defineProperty(package$format, 'nativeImageFormatProvider', {
    get: function () {
      return nativeImageFormatProvider;
    }
  });
  Object.defineProperty(package$format, 'NodeJsNativeImageFormatProvider', {
    get: NodeJsNativeImageFormatProvider_getInstance
  });
  package$format.HtmlNativeImage_init_3rpr94$ = HtmlNativeImage_init;
  package$format.HtmlNativeImage_init_4en8az$ = HtmlNativeImage_init_0;
  package$format.HtmlNativeImage = HtmlNativeImage;
  Object.defineProperty(package$format, 'HtmlNativeImageFormatProvider', {
    get: HtmlNativeImageFormatProvider_getInstance
  });
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  Object.defineProperty(package$format, 'BrowserImage', {
    get: BrowserImage_getInstance
  });
  package$format.CanvasContext2dRenderer = CanvasContext2dRenderer;
  BitmapFont.prototype.getFontMetrics_fimaiv$ = Font.prototype.getFontMetrics_fimaiv$;
  BitmapFont.prototype.getGlyphMetrics_e5kjls$ = Font.prototype.getGlyphMetrics_e5kjls$;
  VectorFont.prototype.getFontMetrics_fimaiv$ = Font.prototype.getFontMetrics_fimaiv$;
  VectorFont.prototype.getGlyphMetrics_e5kjls$ = Font.prototype.getGlyphMetrics_e5kjls$;
  SystemFont.prototype.renderGlyph_pajsht$ = VectorFont.prototype.renderGlyph_pajsht$;
  SystemFont.prototype.getFontMetrics_fimaiv$ = VectorFont.prototype.getFontMetrics_fimaiv$;
  SystemFont.prototype.getGlyphMetrics_e5kjls$ = VectorFont.prototype.getGlyphMetrics_e5kjls$;
  SystemFont.prototype.getGlyphPath_mvgud4$ = VectorFont.prototype.getGlyphPath_mvgud4$;
  TtfFont.prototype.renderGlyph_pajsht$ = VectorFont.prototype.renderGlyph_pajsht$;
  TtfFont.prototype.getFontMetrics_fimaiv$ = VectorFont.prototype.getFontMetrics_fimaiv$;
  TtfFont.prototype.getGlyphMetrics_e5kjls$ = VectorFont.prototype.getGlyphMetrics_e5kjls$;
  TtfFont.prototype.getGlyphPath_mvgud4$ = VectorFont.prototype.getGlyphPath_mvgud4$;
  Object.defineProperty(Shape.prototype, 'left', Object.getOwnPropertyDescriptor(BoundsDrawable.prototype, 'left'));
  Object.defineProperty(Shape.prototype, 'top', Object.getOwnPropertyDescriptor(BoundsDrawable.prototype, 'top'));
  Object.defineProperty(Shape.prototype, 'width', Object.getOwnPropertyDescriptor(BoundsDrawable.prototype, 'width'));
  Object.defineProperty(Shape.prototype, 'height', Object.getOwnPropertyDescriptor(BoundsDrawable.prototype, 'height'));
  Object.defineProperty(StyledShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(Shape.prototype, 'bounds'));
  StyledShape.prototype.containsPoint_lu1900$ = Shape.prototype.containsPoint_lu1900$;
  Object.defineProperty(StyledShape.prototype, 'left', Object.getOwnPropertyDescriptor(Shape.prototype, 'left'));
  Object.defineProperty(StyledShape.prototype, 'top', Object.getOwnPropertyDescriptor(Shape.prototype, 'top'));
  Object.defineProperty(StyledShape.prototype, 'width', Object.getOwnPropertyDescriptor(Shape.prototype, 'width'));
  Object.defineProperty(StyledShape.prototype, 'height', Object.getOwnPropertyDescriptor(Shape.prototype, 'height'));
  StyledShape.prototype.getPath_lcui0n$ = Shape.prototype.getPath_lcui0n$;
  EmptyShape.prototype.buildSvg_b7xfbk$ = Shape.prototype.buildSvg_b7xfbk$;
  EmptyShape.prototype.getPath_lcui0n$$default = Shape.prototype.getPath_lcui0n$$default;
  Object.defineProperty(EmptyShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(Shape.prototype, 'bounds'));
  EmptyShape.prototype.containsPoint_lu1900$ = Shape.prototype.containsPoint_lu1900$;
  Object.defineProperty(EmptyShape.prototype, 'left', Object.getOwnPropertyDescriptor(Shape.prototype, 'left'));
  Object.defineProperty(EmptyShape.prototype, 'top', Object.getOwnPropertyDescriptor(Shape.prototype, 'top'));
  Object.defineProperty(EmptyShape.prototype, 'width', Object.getOwnPropertyDescriptor(Shape.prototype, 'width'));
  Object.defineProperty(EmptyShape.prototype, 'height', Object.getOwnPropertyDescriptor(Shape.prototype, 'height'));
  EmptyShape.prototype.getPath_lcui0n$ = Shape.prototype.getPath_lcui0n$;
  FillShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  FillShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  FillShape.prototype.getPath_lcui0n$$default = StyledShape.prototype.getPath_lcui0n$$default;
  FillShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  Object.defineProperty(FillShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'bounds'));
  Object.defineProperty(FillShape.prototype, 'left', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'left'));
  Object.defineProperty(FillShape.prototype, 'top', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'top'));
  Object.defineProperty(FillShape.prototype, 'width', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'width'));
  Object.defineProperty(FillShape.prototype, 'height', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'height'));
  FillShape.prototype.getPath_lcui0n$ = StyledShape.prototype.getPath_lcui0n$;
  PolylineShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  PolylineShape.prototype.getPath_lcui0n$$default = StyledShape.prototype.getPath_lcui0n$$default;
  PolylineShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  Object.defineProperty(PolylineShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'bounds'));
  Object.defineProperty(PolylineShape.prototype, 'left', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'left'));
  Object.defineProperty(PolylineShape.prototype, 'top', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'top'));
  Object.defineProperty(PolylineShape.prototype, 'width', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'width'));
  Object.defineProperty(PolylineShape.prototype, 'height', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'height'));
  PolylineShape.prototype.getPath_lcui0n$ = StyledShape.prototype.getPath_lcui0n$;
  Object.defineProperty(CompoundShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(Shape.prototype, 'bounds'));
  Object.defineProperty(CompoundShape.prototype, 'left', Object.getOwnPropertyDescriptor(Shape.prototype, 'left'));
  Object.defineProperty(CompoundShape.prototype, 'top', Object.getOwnPropertyDescriptor(Shape.prototype, 'top'));
  Object.defineProperty(CompoundShape.prototype, 'width', Object.getOwnPropertyDescriptor(Shape.prototype, 'width'));
  Object.defineProperty(CompoundShape.prototype, 'height', Object.getOwnPropertyDescriptor(Shape.prototype, 'height'));
  CompoundShape.prototype.getPath_lcui0n$ = Shape.prototype.getPath_lcui0n$;
  Object.defineProperty(TextShape.prototype, 'path', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'path'));
  TextShape.prototype.getPath_lcui0n$$default = StyledShape.prototype.getPath_lcui0n$$default;
  TextShape.prototype.getSvgXmlAttributes_b7xfbk$ = StyledShape.prototype.getSvgXmlAttributes_b7xfbk$;
  TextShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  Object.defineProperty(TextShape.prototype, 'bounds', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'bounds'));
  TextShape.prototype.containsPoint_lu1900$ = StyledShape.prototype.containsPoint_lu1900$;
  Object.defineProperty(TextShape.prototype, 'left', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'left'));
  Object.defineProperty(TextShape.prototype, 'top', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'top'));
  Object.defineProperty(TextShape.prototype, 'width', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'width'));
  Object.defineProperty(TextShape.prototype, 'height', Object.getOwnPropertyDescriptor(StyledShape.prototype, 'height'));
  TextShape.prototype.getPath_lcui0n$ = StyledShape.prototype.getPath_lcui0n$;
  DefaultTtfFontBytes = uncompress(fromBase64('eNq0kwO8HFsSxv/Vmr4T20k/xZzYtu1J7maSp6vYtm3bTp5t25z71rbv3t4zp3t3nn98Z37f1OFXVV9XIUBRlmDSqUePYf1zK/5yNcSHAVUHDm0Um/qv7LYgvYCJk7Iz85o8PPgqOD8B89SdmdPzfB8T4v0A986suVOOvF/yV1CsPvT74K7JmYnI+XcmA68ALe5SG6XuiwqIBdx+V/aMOb0vDRkMcgbsdlm5kzJPDXrwPohuAONIduacPImzHaQ24OVkZk/etuvQSBhjgVUzL3f6DD+DBMTrAx4CyIE6I392V80JJdr9lSIuAK++/9gIgDdONirqLy/Mi26IZAEZGARDIJJVmEer6GP+cn+58i58ZchARP8PI0J7LL46TAxMq5hswca1m9p7QaoH1nyfKUZp1zawTfRYgtGoJEQJR89B/UbRCe8P2HNUDK9GsmTLErA18S/sOUFmdlkSAMY5kL8oxOlrjCKhzhPWImL2HIUexNR+Qp3HUjB6ETN/odZbSJheYNUbrH7UNmqSUDaFmHVF2crENPql57IlfPsLjRxtPyMWydJvUH4T1otq/oXm0VBxar5UHOZ9IZ+C00nZK+H5orRV0PdD4JzQ8QVQe0bNIGYdbxtiqbls0XmpGJWPl7XVa2Odnuv9lD4y2z9grghicYrrvILcQms8EsQYvkuou6i4MDdAap7K1/idfq9tykeKV/u8onR4Q+eGztULcjL36lj0XPGH+msd9Hut6V/Ce59pHr4NERe0tlq/NCTu35Q4ofWXW1/4B/6n69dh5qSs/6tQ2zT6hd+uchDTt8E5oezL39z/uv8v6/lV6Ptq3/+3Pk9D6/x/+6L2o2vIPkdap7iOVd93mymt3aBelKa6ZnRtBeehVQhrRn+3dbpWQqR1V0gYD+tvHtTrJ4HVWiveMLflil99X430nZBfgaB2v8oRaQPKxtI6axtL1354FvZNeAe9n7I9gnvONMXl6poNuMP7zgk9T9f+fVpD/Sa1p/RDrbXuGivC/bLBOv1Ngr4J76BrZQMEva+/g+7XsE8DPy9r/tQ89K97K+C5L+iLlG6pnlNvg5zDO2EvaT302gtili1pGI+kEcSv+17fcw1iRtsAKh6tafQxFdvT6uylwJfdI9S38ld6QJ8BZoiqCIAcwET02pIlwDg6YavVIk5xlgtc4ioP8DC+lJAq0kR6yVAZLZkyWXJljiySbcbzxqdWUWugNc6aYG31ynqVvererV5Nr7HXxjvhnfYueJe9q96jt1S45dbf//4P+D7gcZQznOcSV7jBwzwuRaWyYu8pQ2SUTJSE5Cj2hYr9OeMDS6zi1mArbm3xyngVvaqep9lbe8e/xv7bFLv/Y/9J/wn/cf8x/1H/Yf9B/z7/nH/EX+/P8rP9u/1JfqY/2h/s9/fbFEb+8/eCdwreLnir4M2Co/lefrX8qvlV8ivml8iPJA8nDyb3JncndyXXJ2PJ2qXipQYg/JDDMaIAwjf8CAbBMPj+Ebw0sbBxiOCSQZQiFKUYxSlBSUpRmjKUpRzlqUBFKlGZKlSlGtWpgcct3Mpt3M4d1KQWtalDXepRnwY0pBGNaUKMpjSjOS1oSSta04a2tKM9HehIJzrTha50ozs96EkvetOHvvSjPwMYyCAGM4ShDGM4IxjJKEYzhrGMYzxxJjCRTGAe81nIYlazgW3sZhd72Mde9nOQwxziCEc5zjFOcJLTnOUM57jAea5wmatck7ZkM4kESHumspMs7pY+5HIXsIBNQA4AU8jj6+MAl5jJj7gXeAWAe5ghHYBZzGU9j/OENJVm0kpaS3NpwUXgJi+CdJdO0hlA2jFNWkob6cgcljCbpSxiOStYyTLWsg5Ywxa2splHeJW3gdd5gzeZzju8xWsANAt/vRjGJn4iMZklq+SQ3Cfvye+k0ChqVDRqGiOMu4w9xgfGP8za5kRzlvmCherFilZ9q5M1wlpm/cZ27S72HPuI/YD9muM6ntPQ6eUknBnONueM85FTGGkRmRjZE7kQeSWSdHE9t5U7xE2409wV7j73jHuf+7uM2zP6ZazIeCDjg2jVaJfoiOi06KbofwmCB+AwggAAgLVeZz0vtW3btm3btm3bHdS2bdu2ld1ZyY4ke2UQo4IxwlhhXDG+mMLMZFYwO5iTzHXmNfOJBaxMVh6ri7XL+mbH2LnsEvY8e5W9zUngpHPKOXWcXs4UZ55zyDnn3HCeOB+cPyAJECAFqACWgU1gFzgGroFH4B34BZPBfLAUrAYbwXawFxwF18BvKB6ykULpUC7UAM1Cy9AmtAsdQ9fQI1wMj8Oz8DK8Ce/Dp/A1/Ah/IllIAVKG1CBNSAcygMwiF8gd8oJ8oQkooPloOVqLNqOdaD86ik6jS+gGuoP+YjVYE9aB9WEj2BS2gK1hW9gRdoHd4Um44hl4KV6F9+Jz+BZ+gJ/gP0QCUUiUEpVEI9FKzBHHxCvxTcaTSsbIcrKabCbHyClyj/yjkApUKlVElVFVVB3VQfVQA9QINU9dUXfUF5e4mdwKbg93iLvCved5XimvkjfNO+Pd8f75ifwsfjt/iD/BX+Mf8h/4P4I4AQm8IEWQJygSTAhmBBuCS8GrMEmYKcwXNgonhUfCD1GcKE9UIuoRDYhGRDOiBdGZ6JdOo3PoIrqObqcH6BF6ml6mN+gt+oA+p2/pWMasO7qNYuvvnVWxn5vWtiSHEluWC71IVhRawiGhOjSHIs4LfT/wJ/JCdTDfM/UIcEK1zDekHZOqF+flwyZHlGPyGlV0DoRQ4j8oIS/4genFG2vy/WZ3pUj0yDNbMuXOnXt/93dnv2r0NR7SOKNxQ+PfG99o/Co4O7ghaDTNaLquaXXTp83VzfHmTMtJLfOBMPru6Y5h17G4mwLsUJq94Yji8IbbmiJtTcFGt8vtnxadFg75vDVaQKNtGaoUMzg9JX4Y2b5qH3+nr74r1TO8e1c6k8mwxaM7+OiO1FiX19fpqzk52cliP/wgeZ/CgB0K1YDTq0AzpUYLa35vMKLzKRm6X905WYfuigLUl3GSvnF2explPuFRURtmf11GdfTfW6mXIwUj4ZqwGkAJe4NmCdYEUIIRwls685Q3Jy5dcinNQ/X8Z9aDWCsf6LVTaN4prIUO4nS/uEoWLrZweScLp4PEFjrIQt8QdDMHumkGboYxq8/vbmnVfH6HVgvFQP6W1pbWqM/v82strU1aW3RaNBLWoK9IW7Pqcru8tU62+IuH4tc9Ul5Bgzde9Zb+xUPH7NfTEJYvxLnyRddcXWyRNR3kXFi1Jt5dKeoZO018lF5w6R9eeLFqzcyO89oj3ZX0IWOn0r7mWyNWEjr6tvtOZP9jXk9QZG4VkmzL1G8VdNQq5Q1QmJjPW+sKNrZE2qaFvY2QyBcOQbwW5Rfe0wVs6kD2w8bh4Z4elFkXXjhr1kUXsW+Ln53dRq+zW76SZdFFs6z32f/+ySu5d1I2x4eQrQmxR2m2poWuoD05fQhaDZoi+AORsBd7qQW1gC1TVE1wI2N0HXh4w9766I4PhuKJ1esTt8RoE89kuJjRmVy92MCtwVNdB8Lx9BuXj6bjvYnzz79VRYPsQrY42RlbLY2LTA5mQA4nLBAzuYM6bznFMWzZnkJyv+kp7HcpdMk0T01YVnSQYXDDgJ3SN/jBSkQ5flcVt/dXax41LKvQLzSX7dUE82F+DQ+wHndrtDXqhyBRv9vvpnP0e0P34s+6OPZbu7bjnA782VeFJI9XE+CcZegf8AakmiIBLcxm0vHiSS6epOO52sCl/XKYMEnfxjUDBqGEg+aCh9ozup5fL3IKthncVZXyBCJsc3Y9+nPr/1DJvir6oqvdieCj01lM4gXWHKTwkiX0zyUZ28f3wz57nN2Qz4+mHiXYqGgeJRxSmhuhyepwCPphDo/48uPt4gvybP+YqkR56oknUn95/HG2WWwUS6iTzsKvUyx5Q3whxvBDO/Lh57FlegrjYz010TCWH9QznGecJ4SMXseH9prsM4a9pAROhxd6iniam2DaJpq1mmjmUHeKRWIRG5/soevp+uGeVFe9r9O/z6rtI1SC/9uy6ZGnOad9H9n0Rmfy5BqgmbdrzLYRmelh/APwAFSUQODzW85kg4HlSAdSq7yR02JS1rJjVN87EDqwyzDeHzIxILFq8+pk59//MHR+IrF+dSI+5OweXX6jDhs+sCvFjbTp+L2rY51JDmtO9MbTORx0zMH8DH4OK9Ci7qhmu0yEqI62/i8xy/CvAK+4/RXGJh820Y2rHZb8ln6mwhPz8mnSmqCXonWwljtSqTsyOjpmZ+uZZ4R4Jic6Ty5blrxWZ0u5OPTasXfeGbOlVVh+fK/SYGvIZZmB7efMPa0mN+9UYi1yWMsaJh6Mzx9JPVy64l9y3n+uqBhUE3LsnE1k4ivE7k/uzlbLye/aMlG83yXShhUt6KFABDuIGPVwtsXZzbPrJQawGFfUvGx7Y/eiwMdiHCraTfJWUh4UWyOqhU/hGYRHVvFBDpBeeSW3rWILoGjNGmxp+32JW8654ZxbE4WYVLi17B5iEpTk3jJiZ0uwcrtvxSb/RH+NlmSKJp0JuwIXirrUHDYeQvSNqT/yiC9+Rn/0jdSfWCI2St+C/og+uZuN2/qz4630c3WnB3sk462s1Qa8l9gh3wetNx7Ym6VvvJUYJH2QvBXkJWS/2fvY1ZPvqz6aNvDVVwM0DetYQE+p9wJvEe8tdJFFvRetGlB2ctgk58XjlVLkYEL8Tky+z67O3qc2sEvEi3JA8SKmtnWz0YxxUyRTQawv9mpvrcMbbGtiaoa2Ffu0yVkAYWrDHn9O7RjlO0bNccVV7iMxbqVyHMadFtVgEUFbyc2WEXiUQIOioQ5F/S77FnUtM93FDRtnkTYgnN8HQHc8UO/z1V/Wd+e6dXf20eH7eq9ZJU4WL+B3Mj1O0fEnrvhYbBF3Zb9kVdRFXaxqYnjukYeV1nSlns1mn011lZbwyfogzQ9OvfzlZPLlkHffV/ooSo/nBrnlir/mema/FHe9JrYddeixdUlqev11auovKxu08kvHsMQJyaOojNwq0JqCqjrz3/+ODAzQp+/QpwMDLMaS2QWIozKi01OKmscXD3Tc+BOMC2iAnIDFFOxrkK1ZbjvBaDq7nsXEDHpqYSKZ3UqDgLbzC2EtPerszlaL8sRCWD4aSmCzMfVBzLkvbEoCBXzS73LvwQ2Td7XgMUMlIyOJcEPPfscMTUyIVXThxIQNSSMj4ge2WQaM3kj7eR0z0znYsKFJfGHZkG7rpcSMwpZnBbT8DYtN0IVi1YQop2+eJLeYeFKsdnbnXMjZvWtqLh7tShfhTxlklyhqF12CJotBH4gxgCEYoCjndvvH0L60oH0w35pbTbMLrVhjyxoAVv1EF5qtKZMDQFts8U8VAnW91j/FK65iLS1t//iJRqwAu2qfqTSFi6aZ019RKL//WA+EQ1gJawEU9bHsbM7ZZs4WZxdiE7HPRq+9fpNTqVgPWhvc4oY5+dUO3FfgIayZoSVqehPGGU2beLXgbmf3ZF16FOB09wKleP6asEbhUgqSCg1xdmRatLHD0uKADEefr9TK7KLJ3ex2MS7uKdgHp9lP7gCXqpc7xu1xnbA+pdySM1BKcnEUNDgxGsGPcXHCO46xXT508TnGjF55ryiFMpVafcMEhaDjBraeb3D8edft6HG748/QRwHX/SkHsm9QowVM7Aexki76AeaWXW9tlWlvv82D8hwAnl2Tj7FyNf68S74lI45o5py25Xxw+ajcOG47nYWnu1+VOZXMGKSsIKGtrl+QN/GYnn7ozV8U+b2hR/X0bb8idRF3qVB8Obnd2N6fiD5yMe29Tnwi4kXyj9Rl57PFxYuwfGSO5SMkIdvpkIbWUMjFmps0BNEGOA5oQIYGadAwxLjtJm/yjDhXnGsYVI3cwvFh920bZsn0a9T2EjzPlomXzCoKbUFGNZuCO+aIc7k4F3Ltmur4kBfbjAabsUKIBhdggQaGG2MI//jXYrfY/TWnb5Y//fRyRL2ed8XHtPe78nCZ8viNuChxG8VRPSBq3xG1AzQifUyaqdXOtdaya7gK/EX+SaDvEFtfFmuX0AF0wMuyWiLWvuwY2nUm+p2JKwoMFv3z/ib7W71xw1rEoiF6TRw+JAnykAjRq0NsejbDNiNLyOBudnY2utr9Lf5lT60FaZtotvs1czbIXjN7HJ49t9i/o+QGdnkpauJlmTt7iPrY5DelqjpZN8ex3Mnn7NJdlu9aeZalc/gf9C6juVjtOpYbTdxdUpyXaFi+TEtcx/7wg/Lj/tgvOG+EnhKrMxnZgjtHuZmbdThKpL5tPQSJXU99aRlw09QHxHuP/irOZi3mmgGosd0uOZcTrEYCt8Htfcd3D7oAZ/cSD1vD/g+GMvhKYBh5/pJQd2LtTbZVyBMDpLrRgJ0nSBIK6VxuOzfPdM1d3rePT6ye25WhC/ovl3nCB+v+w52uVZv6XnmFDpoR6/LVLYqNX96PBOE/67LrN+K/ZAaO+fKYWC29Iyo1p5lEqdpr8ZZqBHYtn7EA0XhJaZ6D9F+2h8QMDkIBz5eVJ8Xo66+L0f4ylr6sPigesAlKDuuXYm1ePFjUyQzijUqkTQnLoMUq7vz73+98/Io4/+5ZMUa+Z7/j8SvUjidSqSfUjfF3GTIA8Fj2bnxjXleP5WRvKiJYmrmBORJs0TW1rrSAPSEHNrmXtYSBsn6LGiXLy9gRRu8gG5RSXz5VUqz6y5Q980H+GpyhKwFL7JDidTtN/WAp5HI3m5GXVZjybwSt3C87o2rOhXc+OT/+oGg4WWNnVJ4Y61lgrQQnZH+s6z553lB8G/vuxKu9F54Us/XEYlhXLR5k1oa8PNKGZXkPoWDjvhRmsYw8zgiFpoSm6Bm1Y/JhtYNzo+pupurc4qqmnJU4zVd+pATaE2KPgbjFpJS+KVAJHf7+sHmWck1vSaHi1I5CzUw+PPw+YK/3msGyAhUOKkoBj5H7jWXYRFzL25hPfYwnO+V0llWlxkw2hJQHlpM9x7ansZ87GwxqrThxMHA2KE8G1Z32eQXbvUJchXYS6xBP/LVYa2QqhUMAVLODrTQ+lLH15bgJXW1ZEzbmSC+waQXsna5Ji+doIC02f/stSMV1NCnOzD5Pf7NyI5vbIPc5KLdm5wboHrlzWMKQXKbf8llbA7krhm4fSt5d19eXfJlfd9ZQu1nJtOf2gzc9tUKmpBfEOTifvOzRJ8b+qT69v0ef6s5BW525HBJjWRwEVlyrBE2L9hec9MGMySfGnrWcUfomiroTieR7Yodlwlw6pywSS2B3GNPyR6UQRVpNIclO6m1IIVbkj3RQgfGpp5T1W0ACa8o+7+wezJ5rm514wHLIvJ1b85HEbK3Iolm0KE9TG34RvNSZg0YvOwLqySVI2TmXFaRX+XjN5HwaHn6sez/rO/zIPao/dZZ6lL9A61PQJY/t8gzdIh1FZ5s4iZK0BM5J3/TcJF4Tf9k68sGN8Y7VPTfR4XTe1hHxFugwnzvr7MiMTM8wj8dx2zYTt9viQ3nccAxL3KixT0lrsZFRL3QSAYrIQ1Ad5h8KGRnpMjj40FV2d5UBzlNkX9bpew41wvloo//IvOh+aWCmebENk3WWeZGi2Ot0ASWteC/zpQFqoqYBsQoO+y915mRd/humsxZty/Gg4pR+b5J/apAtfv7FiSXPPffyc88tmXhRrZ/8AP0+UveVpaCvejf6Sl7Cgjlqot4tHqD5aXD+8TTNFw+kqZqqYbQ4YqVu0SuPXFF3WzFaygmcVAB/oaglKwu0tO4/LXrP6eLenMi3iq9OOunTCnraUW/JDpDJ836s1ZbBZCkRk7EgWZt0sBBOKaaXCxdOUM/LHk38FLXcwe1+4CKLwTdgC05sVMMUagtGghGJVJ4AXjR68QHBh4rFQiGxhYdCcBBUK1fKG5r+GfFxctFBnAvj+1nHfScyPDeuYmDcfK4l+Yu75MdzOiL4FNGC6kD4DSavPQqsyYtJPQEIQQetXIkZ6SBUiJMh1DT9u+NmfU8ujmdhjHP6TGQglsVnWAx2kzB5rEc6HlYR9ki/xzJChr7gT2fq3PivPy04Q2cxOqi9HWOgMvGzXeI1zpDKFAdOrnf+M4dNS4HFdUog/0VFMgX7c0rE+ohifT3BxrFj37wjPq+/f178jjf11A133XVDStc7T73wwlM7Hf/neyreX5edU9cff8r30otV1/du3957fdWL4qHK9nmp1Lz2Sjs/uAnzhTGbPMqw6U7YOuiUpEue6bVCMUWfI6zZQU43ef7YM+/C2+Z28Vf6brvwwttuOF3XueeJZYyFxlITCKEjnckQY/QFWzz7iP5b6PBQsjM1Fgrp+hnbbjpitu5yL9JTY4iiyU59kdsl6a+Cyj3fPJtxgjc3mNkx7U3NqkwnavCzT3SDcBqLIzjnbcrut2lT9r1NnNh22rjdPOTduv2d7Vt5ho3TZHalcNCkTpPCIXMkWXTrYhW9kKvXWadnAftnuYY3YP7Y1eYHBFn2kHjrOQOE0fVHc3T+UTxY8SZvl7n4bVknh32a5311soY9gAmzzf9PzHWAt1Vk6zv3Xkl2LMtJ3O0Qxy3GxGmWnR7jNG9MHD5I8lixpEeL8wKpkPI2NlULKRTHy97tnQ4f0rf40XsVRXT4eInYkte0vQU+nmLfvHNmzp1bomRffwHJc+dOnzPnzPznH/lKEFPEliDayAaQJ8Sx2Sicm0u4zWoH6iWTRgv8U2jBwq34oJXLvbENhshdkHYjKiNChoRh40aubWdxdUS4piLVxTtGBduWdl9+effStqCvRKaHY20/2EOZbeTFWTXVEdxLR6prZoWCYcjQ2xaEfsDi0Xqh/XWsEzFT1glcIcXyz4A/xSdsOOCdMYBytAlmB6w2RZd9zIM+1itTIQ93FJSGWwP1pZCesLbyes3RY90eiFatpK0hHm+Yb/SzlpW751SM29bf7+gm+5rdGXW4oaEtvjOpRnavXDmnIvSJFnB27rjdadozANx6yMItzugdPOr2A+bwAdK5g/xURW5PFWLATm8VWwKSIT1WwxcYxmlnqJnhQGs0GaczFJP7kDG4S2/i+01oHBkydWK83zD64/zbGDkKu8zFRlz9yXBFPC78dbgPRJvg4+tqDPWxFibKMFrhRHWEnUj67s9eosVSR46kUGZRq2kTBDKuRkT7QK+9oETRxxQO2G6T9jLb43M+C2fD581tBdfu1atWXd08d27zsspFi1qjX65atqz78nA03FJT09K66KtRkqfNXJ4WcHlagJOC8dDXB7n+rNN+BvoT4zgu4P9obJ3SgGmVRWAwBnLEb2cncsanXOl/KuPfV7KO+DspHlYqnFbSvPdJX9p6H7hS5nuXrWUDiipxiCKOSYErns+7RDi1WlgG4xB31m+ygdE3/onF4STeIQFS/ThCnzTGHBOepSh47MoFfhJMXKTmnoKZ6qVHv5fwIqISQP7exyzHBKmjfzyUCyUlVPlHY1TvBIpzgpbhY3yumBMaS2/8dvZCzviUK/2dGE9jP5HG3sCxP/X3eB7h+VpEPcBOpHzsPkf8dmUZxmN6V3xKpD91I8Qf4/W0iHpO1VA9cV8az1mEPQXRzwK8DwscD5c2ygfccrK1FkQOWAw7YSHnQAQxgxbwZwajUXgmAB0MkWiv3sNlb7pT9gR2ytvbSrK9Nmf8dnVizviUK/1PZfz7rMURfyfFoxXKin6D5kujzLGLtHn6l2i/l8/K81kgnzWx5eY/bwH7XL0F8Tn4gkf1Q8cjvoUvtGOn4AjmO49jxcX8hI77DRiytqZ8RqJbwspwBPHkBEIqJXtmOev0+2MIqZ4/nFVTPn/sSRBY7eFexIoTfv9dX4j3Ivqa8Pvu+gKbFPAfwDF+rm/kgJqCBxTU59Qtd5vDONBD/gCkv5vpKMr8QY47jtcsp+7wxqPuyBmfcqW/E+NpHJM0jhHSEVa+ebbcO/DfPHEKIcS3sdZGsMNZAfiajeyYBWFrjwi410AMG70xLr/LuWLH4fXf4taXFy8DsEvIGr9+9tlfR6rOObdh96+f7e+/fnDw+v74FyOD118/KKCGu3/967v7IlVjKxvwCAQnIvC+7165eXBQ6GOOI3RBvxbTOo/njN/O9uaMT7nS11G8qrzfrzjiSzCexnUZ7ZKO6T3yfVqW967yS9o7Kf5dYBPz4bQ8n5BFxBVtzIpZ1lwCjShyeLh1YVwolAA5Jg0EHLVqiWiZnyeyaBxtCHJPXUVZ1WEPBpZ9+XADQpI/ORhhtwjIa+TGD3F7wOHJ3fVN51QdcOBiBxqkrufY4TSh6y3EsMmBI5YGzqDk2UvGzsOEJj5KCONt/5xDs/tKtx2wEEaNUMe3gsyrzq15eITP21Ka56SSK347G8gZn3KlL6F4nM8ozecJmE/S5zzfU1wOFt0IEZY+d8RvX4bxmN4dn+LpSZ9jPRBP+lzUo8C+SVHlGSikNJ+GGc5EAJJYV+1uzNCFGH4nibik4UQL3WBhNgrHg5NDLqiQbNojXNYvJl1vr4EM78sKGuNf5ozfzu7LGZ9ypa/DeCo/4YgvwXga+34xJmqh3sP93FnYoyb4maXAYijUtxfDBwkI7ARnCxgGugnU3yeTqNtPnjqu1+jIxy5S6kFWhRxOZXReDHDJbQVNHijjm3bQ72x+ZN/Nz4QX8u8r14CgPhIb7LpjjflrHvjZ0sfu/sqKC/j3lf1PgnheDW/7nwQIDgIkCyRbETlO3ngap5zxKVf6Eor3jAe853gJz7eaysMzDeF+XHZwLyBhP7nzpoWY7Y+jWIjtN4pNvF+bkBQoX3Lk3kDeyX9JorQkFVlXCdWFbWmldfECtkXwAbj9mMjb8pa064gdYBu7RLzdN9rjNlG83E/4ujiX9As8vkiv0hPe/ZdM713HGJ9UpI9by9i4izAWiuKykdOprdJGUlkXy7YS/hF4h5/BG0CCbJJDDWt3bJiZ0/naUxW3nMXxKievwOxweGHfGWdTHsa9I/fTXkesZS8+0jJ4BkULzs5oC5q4QvAixz6HJ+RwY3V1Yw470DSuqv6wG1tmD0t7omUONEya1OCyBY2Tmxtu9eDOq4URcY9zu3POMF4V4/w3XCe+tYFsqUw/wzkvDpt8iZxjd/kzT0v/CJehLwoZUg/pCSs9PwfNss9Bct7RRkcovpiXr8g90zySeYP2TLDHd9U/3ytH1N41LplsRR+k4MwwVN62N8TtUiplA9KdJAPgiBiu4D4SDBoiJP2X0KIu7ncur28K1M9k197TD//u8XVln3wy60mDPk44ov+DSKL38CTONJz7IcCEMBcgIELjtqq/u62t29cFW6vNbd3dZPfg3N8C+JAm8CGxXiDuBV/6r+ASy3cDygGf5jlzmpvnzfOl8RE/m+Y1izjCDvC2HJ5QyxFnDPsDZAtLOQIeq2/qb6qPzW2+bNWqy9bEkndsHldSMm7zHc1zl0eX77bH56CvjuOhbRYeWmLhoQ8snzVr8eJe+DNzyWK956NJky7BD2Ffh3xdIEfbW4V+bZF6OcN9TOcSvnGVbx/Na2275GWOKSGaW7vlaGIn0ENi7jiSGkrv3nRz4/ol3bE9bw7CkjeMkfjt6SFzx927NxV9TV/SvZkN7IndbvqkHeBy9i+W3WADDg5WneAloRY4Iw8r4E+pK0fuK9gXOzMbK3YFWM8/7T+Qm411YBu2hbgbY1VlhsPfhs84NvKcOjrnOZXW5gqefrLUrd/H8wXyWSQ/jdUCK7t+bCX8tU4aKFN7YrE9QA49+sJ3wcvKXhhKc/baISSn7YkhOc1sNR9iK9hbqG3TQ0Npwjpz1tHMLKZUjjqIOeWtg3hUVDrZGT73pZ65r88154Z3tmmSXbrkd9Y+lbAdK/4zHv826lDuO5hicTKamdWN0noV7ihgw+EbaVT68eyB9xSJQfFxb3DxeoK85dh5yM5HOwAN54RBvQe7rj0CO6sXeNsFS5ANDKU5+JMe2hODYSE9IOWi0faNErfL5ssZnHBD+DMfNx+u7MYxON+1iAfWorMXJ17vGTm6T2szQOsZiT5wqOs9ML9fN3+JuztQ3DXsCoT2HOtxrLUe4R9yQ7FkprF6TnBx8NK0FUnzvCF1mtk2pM5xcdTYVWzsyH4NaCTIVXPz1f6/eeRuTlutcIkjHS50v6Hee79hEdr0/R7b+BshN2Sb7HmaInSjg7vHuYNi5WVhwMU6m6BGkKlvrS0q25fmZUzzzP0kaceP4zOG3PyrWqqDcxO1jH785HgkRnllKIzPpN/weaLn/UyaZ1lumGhQcQcByuI90Xkb2kQc0ibUAjRDtcITge42bqPmwht4J/CIMUBtMzi28QH/YxgIcBj0R6IcEulAn4tAPKw1R+2dqyi0Zo971ixMod4DIg5r1uBLFofE/KaXjyb9v5hhDKr3KDi3QJkYR1LAJdYybABVzO3qOvCb33g7a6T8/pCoj2Fl9PGHspcAgw3+x6GnOuFj+SQJE1YYB+id+QxD5oRcsBCdmVWSC8KKmKVGGKlXfGr3dVlqZGSxpVy5GkRNoq8VelX/7S18/Ei3gi05xWW4Be6CKx4uJemucA7NZeRQW1gBaS2X/VSanKx0tJ20psmmogs5c4XTdiJw6rSd+wpG7lNXar/dZplPCz+1zOf+PxnYdsR9cE7Qh+g8MghrFB7rrF/TqxynhWEA1t4s/3oCyZwcX/xJ8PSzApgubqNYwbfsFtzDplo81yrJ5cR1yOrZFObYmdWO0asMc4v5q7tY9YYn0t9B2WbHUEy4S/KOiidAurlOYi848C8tAzK+WJH8NX8I6jiPUC3JMQEU4xzmILMpsC9S8D1uWLKJPgu5YC19CQuzEN3fPHikeM1uduJICs+jyG6YlTqyRHLbWOPbbOBt1hjpmLa2K8JpCJIHgJx4OPejfLg0ttwGFIPMlPJwlL26N9FdUdt6HngQARxf2xGJdMxqmW2+zabPjmiZ7/atWlxeVFzXvbkvAR6QDyIdHRG2rS47p6PD5qP8Hur0WTxT9fdwnsON+0MQy22e3gMhy+ZBe2ybB7tE9Lf8GJxXhgHKce0W9RBoheyf3xEG750/22cbPt5LhQ4kfhOW2OSxdeCfh6t05lND7PvmK0Nsl4M6NWh8mjQXqbNZHH3Q8CESVfJTiwMOZSJx0mXkZuY0cEh0miDG7aMnOEO875pIx1DJd2ZHtuw9uGJLf/KBN9V35NghO2bloo6IMadjdveWLcagk7eBti0sTVvUYKmnDTMMZ/fPtFHDFfD5zHm+YgW0J0q6yjg7Z0zL2N2l84Gdj2xgKbeBMAHmj5/6Mfhj2QBUviJrDpknWFDq5gTxZDgpHb+hOj1hmOmPzbTxb2wym8xBh87h5/AD4bu1L1FeZ33YVaw1C5rV4AJj7sAK0cumZSxcjM/5Clc/kRtLebWYyInNRGkT+tPcQflW4jPxPfG5y1OO5EVrMe7nFTK7wlAUif3wfKuFLTV3cDtWDRIyHdtgIZDtrUj0BG0iESfN9vQX29CTev6FGxCb3nChIQNLe/H017vUCsAY/HkjrGxY12wj+5NZtJGZx94GW7fRDOnXbkJXb5R9ahZEMcTbSfwjbOdlli3D/nvtLWxEx6IVi+J4PYTjhfb6rHyrMbn5VupTaPE534pdAxP2IfH56FzQJeoOY9X0AYkewP+pZvxUWG31pSF9kWyrbK+v6+R4ymZQRtls2x5qGbK7lmJz2F3kTgt1hmoNvf/g8bNUGNDGdyDeD9Nt4XJ4t4zV8LX1lPYI1iFlhdvcYrto6RLKWgUboiYtQ8VmRo6KihQn57gKGYK1eDTlRlcQHrnBxTGHjfhNpZ3riHqMPAlyFqy7qJC9YKzvWM35x0B8hHuI3Duw+sIb5J3zfVqG7KsDbyD7SphZibDv2vcI6Br+yDDerrwC4C9BsDy8PyR4zvgxd5i8Oz/42wOCanng756HuqSeDCE7p5i4SHwdafXQOUFICmdmTb74R7vUQsN8I3EXHCQPtnU3NLaxd0umXLRr14/EMoc9NmArjQ2K0wcxOqcPQmHAqb2Kn61wk2eTTm2nAPbRhT9oE0huuUNAyC7hD5KNqvegM8D8C4rw3SP3ShyC8Lrfc33rlzizZy6LwUZ42eNN2LDa0tcLL1rn5JDTRHaWspvYCzdcuNrDJNdWd6w3vHuLS/gzcY7hucfpQxmd04cC74l7DOmXW1iDPwTt9WINpV6sQYvRagkK/X/Ikm1p9gfIFrAeNiDkHGWPyj87zuAuP2igKvKWL+RNFo1zjjJB9+1ogglk8Ex/Vkyv4ZhxvUdOq2e6cZyd9rSQ5ncJj/f6F95WJKcR58WLPbD7zCexM/BNWqrCtssZfycxzfhtjizc9DLE6Q94CJRmgp7wpJloCHMGaaA9dPcdcLfR1l14vce+C4/nKPsuvJZhLXTvHNZE+8zwL/EevfjlACiL3iM6jBqP95fu3vN7s5QG8VrQhRy/Zu3w1hlfL/JiGazFLkONQBl1+A7fYB6bz3623wHQe4zhC4AyDjkoPWEYPCW5GSgnu49nwcyyAJ4VfxcjKNhZol7k12oxXq/EYVuB0WyhrepT4u9uxxmct3+MWFNsQNwx1iYgrEK+EOdvVpyvLPuv/W5Fw3/q9yx817qfR+L/1d+3OHhaDOeRtKj50HMfcZfVfPMTVv+wmWYNsHx24GJkA+50xZzh/M+swUw/zOrNT1zpouS/RW66nDqiiIIcWS4hXJ5sr8647+d3UfN3rBhyOjiws3H+/xoJFr/cPNjaAMDBtdpkoF7n4MKyVx8rKP72V8okG7ZM1SvN9uICdoc6sTDopcQGC6NT26MrFxEndtHKaPtU4sSOuoXO4ecqXbnvNfpyMd/ZWen23quQ6k8cRHm958xc/NPuTGbdpPrhh3KT9Wm/BlfG0FPFPEh6kzXA6HdH1etE1QMw0nzAtRfNUdVrnQhB/Oaa915j7LX3am6OO5GCtdXqgsqRtxhTK9WJ96638IKhQ5loJfyLZg4NWZjB+nujFVVVFYqOe+68b3L+cZ5SgSezRiA6cQowc93qaBurlUogEsZV+8Tcb+7/EXviY/bEySH/nfJ+x0ivddni5rsMfdXJB/Pw8ixc/3dc89BiwAkwg48AVQAP3m8qmsR4/HDCr+V6l1+Iw9HAY2wtjg1MNw5crZD1F2ASF04rLJy2EChChrrzO9tWF73xRtHqbTjDSe3t+MJp86Pzpy2MsyXbVu+P7l+9Dfi3b0ft3w/y2mtpRpH8LOtAQcHfNBCig2sLDN9xIQYjY7UYSoYRxfUZVRy83lGAhdRx1hdhftCJMxGZ1RnE/RU6M97P/pKbu7y9DTm/Wgb1ahLJqGckLJutYeT8Ep8XrSrHM/GmGemK2mp+FgZaOXzD3jdqqBFYwlH859snOmTexnaZQfjcxj8nvNxs942iMrtH9SqJihP9shFtuJ9ud7DN7t/LBwrDgo0dLhy1w8nT3nk2cvYjwbZeyBYOhpwsbQ5hyPYWwg6nUZnM9Z5rERY7GBu4BGfCM3SkBlNBV5qcPVT3B/KAKJ7PKeSdM74ayOu+nPWWJyD8QN9d0KANl8IfVrbBvMnRQTXE2oKF2LRy9iK7vDsv0Dujsy9R/uUN0Iu7+i7dwMrgD5vp7CBCvO6xxrM2s+nfSqNDgNhZmfCNZ32rH3fWO3KvQ9zM5y8Nlc8V9nxueejSvILxzUihah5fwBJnfKU+RaXhCBx3TdTnk8eVz4UcSFefHAqeA+nnji8I5Yx14L4h4LIpjG9VmsDY8f8QeMb92wevmu8no0l0JuDWVo28+iqAlAPIJWcD9OsDVaxD/v5iI6Fb+D0ankRYhbUxg8KaUiPjdaVChn1w8ltMYT+0KUrhPBD8EIXzIbSLwniz9zoKBx3hQqjpTgqHlPHKUaiR6fnwdIHyOYWZMoEtpLCqhFiUwprSIeN1ZZoM+5ROdh2F/co49hyF85QWVkLhfIhPU7hAWcqsuoKOcKFypdpJ4ZAyT33w39u4iuQ4giCYxnfUyewBsXQ0g5iuioHe2Y4Yiq5e+os/oN/47sesc1sMjVlZ0Fkbsdc5l6Uk2ZSPvNIV+e6ytuz62kxl33XlqPC2azU6ylorx85OrRFilUNTjerMbUkarUXpqXHKuAuDpb6YwjS5cbL8IZRdpF9kE2l44/Mw63QzSZKh9/1WHFcLsrgio9KMbdb6zPmo6JrjoVUZdK2XSaZS28K0akoZuK6Ro5/bstebVr4t/Ns2d5mbUUkaXVbWwtnea6S2jjpXxXvfts8mJsc5BEtIODeJPl5aKVaIvsMhQ4sSHXrUMJiS3SfbkRuhgIclbqGIcBRiLSOO4XhPuQ3kkleiQ9oV82oyDltkUuatcac4hSGnl/VueS5VfaG/4G6Qh0jBMj7cUnv5+u23Lzm91cdnDIk6cpvM46TtOXuqiTmr68jiQWRE1mAMGyJ86MGTLRjV4JjxNnQ5oE0/0QRZYGp6qD1oMShDjAtZQo0/sc17D32IEHy7zt9mXh4UOcwufxPue5oVRei5J6f0KnHNuyNb0b/Hits4oxqDPPzvw5i/pJLHx5P5HE/Bmxt//7z+d/f7689O/gNZQgPX'), ZLib.Companion);
  DefaultTtfFont = lazy(DefaultTtfFont$lambda);
  DefaultStringTextRenderer = CreateStringTextRenderer(DefaultStringTextRenderer$lambda);
  fourcc = new Extra$Property(void 0, fourcc$lambda);
  nativeImageLoadingEnabled = true;
  RegisteredImageFormats_formats = ImageFormats_init([BMP_getInstance(), TGA_getInstance()]);
  KORIM_VERSION = '1.12.24';
  nativeSystemFontProvider = new FallbackNativeSystemFontProvider(get_DefaultTtfFont());
  nativeImageFormatProvider = util.OS.isJsNodeJs ? NodeJsNativeImageFormatProvider_getInstance() : HtmlNativeImageFormatProvider_getInstance();
  tempB = new ArrayBuffer(4);
  tempI = new Int32Array(tempB);
  temp8 = new Uint8Array(tempB);
  isLittleEndian = lazy(isLittleEndian$lambda);
  Kotlin.defineModule('korim-root-korim', _);
  return _;
}));

//# sourceMappingURL=korim-root-korim.js.map
