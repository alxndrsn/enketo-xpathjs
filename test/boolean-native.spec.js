//      tests.FunctionBooleanCase = new Y.Test.Case({//

//          name: "Boolean Function Tests",//

//          _should: {
//              error: {
//                  testTrueExceptionTooManyArgs: true,
//                  testFalseExceptionTooManyArgs: true,
//                  testBooleanExceptionNotEnoughArgs: true,
//                  testBooleanExceptionTooManyArgs: true,
//                  testNotExceptionNotEnoughArgs: true,
//                  testNotExceptionTooManyArgs: true,
//                  testLangExceptionNotEnoughArgs: true,
//                  testLangExceptionTooManyArgs: true
//              },
//              ignore: {}
//          },//

//          testTrue: function() {
//              var result;//

//              result = documentEvaluate("true()", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);
//          },//

//          testTrueExceptionTooManyArgs: function() {
//              documentEvaluate("true(1)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testFalse: function() {
//              var result;//

//              result = documentEvaluate("false()", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);
//          },//

//          testFalseExceptionTooManyArgs: function() {
//              documentEvaluate("false('a')", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testBooleanString: function() {
//              var result;//

//              result = documentEvaluate("boolean('a')", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean('')", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);//

//          },//

//          testBooleanBoolean: function() {
//              var result;//

//              result = documentEvaluate("boolean(true())", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean(false())", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);
//          },//

//          testBooleanNumber: function() {
//              var result;//

//              result = documentEvaluate("boolean(1)", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean(-1)", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean(1 div 0)", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean(0.1)", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean('0.0001')", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean(0)", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);//

//              result = documentEvaluate("boolean(0.0)", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);//

//              result = documentEvaluate("boolean(number(''))", doc, null, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);
//          },//

//          testBooleanNodeset: function() {
//              var result;//

//              result = documentEvaluate("boolean(/xhtml:html)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("boolean(/asdf)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);//

//              result = documentEvaluate("boolean(self::node())", doc.getElementById('FunctionBooleanEmptyNode'), helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              //result = documentEvaluate("boolean(//xhtml:article)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              //Y.Assert.areSame(false, result.booleanValue);
//          },//

//          testBooleanExceptionNotEnoughArgs: function() {
//              documentEvaluate("boolean()", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testBooleanExceptionTooManyArgs: function() {
//              documentEvaluate("boolean(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testNot: function() {
//              var result;//

//              result = documentEvaluate("not(true())", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);//

//              result = documentEvaluate("not(false())", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(true, result.booleanValue);//

//              result = documentEvaluate("not(1)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//              Y.Assert.areSame(false, result.booleanValue);
//          },//

//          testNotExceptionNotEnoughArgs: function() {
//              documentEvaluate("not()", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testNotExceptionTooManyArgs: function() {
//              documentEvaluate("not(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testLang: function() {
//              var result, input, i;//

//              input = [
//                  ["lang('en')", doc.documentElement, true],
//                  ["lang('EN')", doc.documentElement, true],
//                  ["lang('EN-us')", doc.documentElement, true],
//                  ["lang('EN-us-boont')", doc.documentElement, false],//

//                  // hierarchy check
//                  ["lang('EN')", doc.body, true],
//                  ["lang('sr')", doc.getElementById('testLang2'), true],
//                  ["lang('sr-Cyrl-bg')", doc.getElementById('testLang2'), true],
//                  ["lang('fr')", doc.getElementById('testLang2'), false],//

//                  // node check
//                  ["lang('sl')", doc.getElementById('testLang3'), true],//

//                  // attribute node check
//                  ["lang('sr-Cyrl-bg')", filterAttributes(doc.getElementById('testLang4').attributes)[0], true]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], input[i][1], helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//                  Y.Assert.areSame(input[i][2], result.booleanValue, "Values should be the same. " + input[i][0]);
//              }
//          },//

//          testLangExceptionNotEnoughArgs: function() {
//              documentEvaluate("lang()", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          },//

//          testLangExceptionTooManyArgs: function() {
//              documentEvaluate("lang(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.BOOLEAN_TYPE, null);
//          }
//      });//
