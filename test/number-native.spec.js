//      tests.FunctionNumberCase = new Y.Test.Case({//

//          name: "Number Function Tests",//

//          _should: {
//              error: {
//                  testNumberExceptionTooManyArgs: true,
//                  testSumExceptionTooManyArgs: true,
//                  testSumExceptionNotEnoughArgs: true,
//                  testFloorExceptionTooManyArgs: true,
//                  testFloorExceptionNotEnoughArgs: true,
//                  testCeilingExceptionTooManyArgs: true,
//                  testCeilingExceptionNotEnoughArgs: true,
//                  testRoundExceptionTooManyArgs: true,
//                  testRoundExceptionNotEnoughArgs: true
//              },
//              ignore: {}
//          },//

//          testNumberNumber: function() {
//              var result;//

//              result = documentEvaluate("number(-1.0)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(-1, result.numberValue);//

//              result = documentEvaluate("number(1)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(1, result.numberValue);//

//              result = documentEvaluate("number(0.199999)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(0.199999, result.numberValue);//

//              result = documentEvaluate("number(-0.9991)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(-0.9991, result.numberValue);//

//              result = documentEvaluate("number(- 0.9991)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(-0.9991, result.numberValue);//

//              result = documentEvaluate("number(0.0)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(0, result.numberValue);//

//              result = documentEvaluate("number(.0)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(0, result.numberValue);//

//              result = documentEvaluate("number(0.)", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(0, result.numberValue);
//          },//

//          testNumberBoolean: function() {
//              var result;//

//              result = documentEvaluate("number(true())", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(1, result.numberValue);//

//              result = documentEvaluate("number(false())", doc, null, win.XPathResult.NUMBER_TYPE, null);
//              Y.Assert.areSame(0, result.numberValue);
//          },//

//          testNumberString: function() {
//              var result, input, i;//

//              input = [
//                  ["number('-1.0')", -1],
//                  ["number('1')", 1],
//                  ["number('0.199999')", 0.199999],
//                  ["number('-0.9991')", -0.9991],
//                  ["number('0.0')", 0],
//                  ["number('.0')", 0],
//                  ["number('.112')", 0.112],
//                  ["number('0.')", 0],
//                  ["number('  1.1')", 1.1],
//                  ["number('1.1   ')", 1.1],
//                  ["number('1.1   \n ')", 1.1],
//                  ["number('  1.1 \n\r\n  ')", 1.1]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], doc, null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.areSame(input[i][1], result.numberValue);
//              }//

//              input = [
//                  ["number('asdf')", Number.NaN],
//                  ["number('1asdf')", Number.NaN],
//                  ["number('1.1sd')", Number.NaN],
//                  ["number('.1sd')", Number.NaN],
//                  ["number(' . ')", Number.NaN]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], doc, null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.isTypeOf("number", result.numberValue);
//                  Y.Assert.isNaN(result.numberValue);
//              }
//          },//

//          testNumberNodeset: function() {
//              var result, input, i;//

//              input = [
//                  ["number(self::node())", doc.getElementById('FunctionNumberCaseNumber'), 123],
//                  ["number(*)", doc.getElementById('FunctionNumberCaseNumberMultiple'), -10],
//                  ["number()", doc.getElementById('FunctionNumberCaseNumber'), 123]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], input[i][1], null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.areSame(input[i][2], result.numberValue);
//              }//

//              input = [
//                  ["number()", doc.getElementById('FunctionNumberCaseNotNumber')]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], input[i][1], null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.isTypeOf("number", result.numberValue);
//                  Y.Assert.isNaN(result.numberValue);
//              }
//          },//

//          testNumberExceptionTooManyArgs: function() {
//              documentEvaluate("number(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testSum: function() {
//              var result, input, i;//

//              input = [
//                  ["sum(self::*)", doc.getElementById('FunctionNumberCaseNumber'), 123],
//                  ["sum(*)", doc.getElementById('FunctionNumberCaseNumberMultiple'), 100]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], input[i][1], null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.areSame(input[i][2], result.numberValue);
//              }//

//              input = [
//                  ["sum(node())", doc.getElementById('FunctionNumberCaseNotNumberMultiple')],
//                  ["sum(*)", doc.getElementById('FunctionSumCaseJavarosa')]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], input[i][1], null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.isTypeOf("number", result.numberValue);
//                  Y.Assert.isNaN(result.numberValue);
//              }
//          },//

//          testSumExceptionTooManyArgs: function() {
//              documentEvaluate("sum(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testSumExceptionNotEnoughArgs: function() {
//              documentEvaluate("sum()", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testFloor: function() {
//              var result, input, i;//

//              input = [
//                  ["floor(-1.55)", -2],
//                  ["floor(2.44)", 2],
//                  ["floor(0.001)", 0],
//                  ["floor(1.5)", 1],
//                  ["floor(5)", 5],
//                  ["floor(1.00)", 1],
//                  ["floor(-1.05)", -2]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], doc, null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.areSame(input[i][1], result.numberValue);
//              }
//          },//

//          testFloorExceptionTooManyArgs: function() {
//              documentEvaluate("floor(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testFloorExceptionNotEnoughArgs: function() {
//              documentEvaluate("floor()", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testCeiling: function() {
//              var result, input, i;//

//              input = [
//                  ["ceiling(-1.55)", -1],
//                  ["ceiling(2.44)", 3],
//                  ["ceiling(0.001)", 1],
//                  ["ceiling(1.5)", 2],
//                  ["ceiling(5)", 5],
//                  ["ceiling(1.00)", 1],
//                  ["ceiling(-1.05)", -1]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], doc, null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.areSame(input[i][1], result.numberValue);
//              }
//          },//

//          testCeilingExceptionTooManyArgs: function() {
//              documentEvaluate("ceiling(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testCeilingExceptionNotEnoughArgs: function() {
//              documentEvaluate("ceiling()", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          },//

//          testRound: function() {
//              var result, input, i;//

//              input = [
//                  ["round(-1.55)", -2],
//                  ["round(2.44)", 2],
//                  ["round(0.001)", 0],
//                  ["round(1.5)", 2],
//                  ["round(5)", 5],
//                  ["round(1.00)", 1],
//                  ["round(-1.05)", -1]
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  result = documentEvaluate(input[i][0], doc, null, win.XPathResult.NUMBER_TYPE, null);
//                  Y.Assert.areSame(input[i][1], result.numberValue);
//              }
//          },//

//          //testRoundExceptionTooManyArgs: function() {
//          //  documentEvaluate("round(1, 2)", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          //},//

//          testRoundExceptionNotEnoughArgs: function() {
//              documentEvaluate("round()", doc, helpers.xhtmlResolver, win.XPathResult.NUMBER_TYPE, null);
//          }//

//      });//
