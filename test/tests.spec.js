/* global define, describe, xdescribe, require, it, xit, before, after, beforeEach, afterEach, expect, Blob, doc, win, docEvaluate, documentEvaluate, window, loadXMLFile, helpers, XPathJS*/
"use strict";



//YUI.add('xpathjs-test', function(Y) {//

//  Y.namespace("XPathJS.Test");//

//  Y.XPathJS.Test.generateTestSuite = function(win, doc, docEvaluate) {
//      var tests = {};



//      tests.XPathExpressionEvaluateCase = new Y.Test.Case({
//          name: 'XPathExpression.evaluate Tests',//

//          _should: {
//              error: {
//                  testContextNodeParameterExceptionDocumentFragment: true
//              },
//              ignore: {}
//          },//

//          testContextNodeParameter: function() {
//              var result, input, i;//

//              input = [
//                  [".", doc, 9], // Document
//                  [".", doc.documentElement, 1], // Element
//                  [".", doc.getElementById('testContextNodeParameter'), 1], // Element
//                  [".", filterAttributes(doc.getElementById('testContextNodeParameter').attributes)[0], 2], // Attribute
//                  [".", doc.getElementById('testContextNodeParameterText').firstChild, 3], // Text//

//                  // TODO: See for more details http://reference.sitepoint.com/javascript/CDATASection
//                  // [".", doc.getElementById('testContextNodeParameterCData').firstChild, 4] // CDATASection//

//                  // TODO: See for more details http://reference.sitepoint.com/javascript/ProcessingInstruction
//                  //[".", doc.getElementById('testContextNodeParameterProcessingInstruction').firstChild, 7], // ProcessingInstruction//

//                  [".", doc.getElementById('testContextNodeParameterComment').firstChild, 8] // Comment
//              ];//

//              for (i = 0; i < input.length; i++) {
//                  Y.Assert.areSame(input[i][2], input[i][1].nodeType);
//                  result = documentEvaluate(input[i][0], input[i][1], null, win.XPathResult.ANY_UNORDERED_NODE_TYPE, null);
//                  Y.Assert.areSame(input[i][1], result.singleNodeValue);
//              }
//          },//

//          testContextNodeParameterNamespace: function() {
//              var result, i, item;//

//              // get a namespace node
//              result = documentEvaluate("namespace::node()", doc.getElementById('testContextNodeParameterNamespace'), null, win.XPathResult.ANY_UNORDERED_NODE_TYPE, null);
//              item = result.singleNodeValue;
//              Y.Assert.isNotNull(item);
//              Y.Assert.areSame(item.nodeType, 13);//

//              // use namespacenode as a context node
//              result = documentEvaluate(".", item, null, win.XPathResult.ANY_UNORDERED_NODE_TYPE, null);
//              Y.Assert.areSame(item, result.singleNodeValue);
//          },//

//          testContextNodeParameterExceptionDocumentFragment: function() {
//              documentEvaluate(".", doc.createDocumentFragment(), null, win.XPathResult.ANY_UNORDERED_NODE_TYPE, null);
//          }
//      });//

//      tests.StepAxisCase = new Y.Test.Case({
//          name: 'Step Axis Tests',//

//          setUp: function() {
//              this.getNodeAttribute = function() {
//                  var attribute,
//                      node = doc.getElementById('testStepAxisNodeAttribute'),
//                      i;//

//                  for (i = 0; i < node.attributes.length; i++) {
//                      if (node.attributes[i].specified) {
//                          attribute = node.attributes[i];
//                          break;
//                      }
//                  }//

//                  Y.Assert.isObject(attribute);//

//                  return attribute;
//              }//

//              this.getNodeComment = function() {
//                  return doc.getElementById('testStepAxisNodeComment').firstChild;
//              }//

//              this.getNodeCData = function() {
//                  return doc.getElementById('testStepAxisNodeCData').firstChild;
//              }//

//              this.getNodeProcessingInstruction = function() {
//                  return doc.getElementById('testStepAxisNodeProcessingInstruction').firstChild;
//              }//

//              this.getNodeNamespace = function() {
//                  var result;//

//                  result = documentEvaluate("namespace::node()", doc.getElementById('testStepAxisNodeNamespace'), null, win.XPathResult.ANY_UNORDERED_NODE_TYPE, null);
//                  return result.singleNodeValue;
//              }//

//              this.followingSiblingNodes = function(node) {
//                  var nodes = [],
//                      i;//

//                  while (node = node.nextSibling) {
//                      nodes.push(node);
//                  }//

//                  return nodes;
//              }//

//              this.precedingSiblingNodes = function(node) {
//                  var nodes = [],
//                      i;//

//                  while (node = node.previousSibling) {
//                      if (node.nodeType == 10)
//                          continue;
//                      nodes.push(node);
//                  }//

//                  nodes.reverse();//

//                  return nodes;
//              }//

//              this.followingNodes = function(node) {
//                  var nodes = [],
//                      i,
//                      nodesAll,
//                      result,
//                      node2;//

//                  nodesAll = helpers.getAllNodes();//

//                  for (i = 0; i < nodesAll.length; i++) {
//                      node2 = nodesAll[i];//

//                      if (node2.nodeType == 10) // document type node
//                          continue;//

//                      result = helpers.comparePosition(node, node2);
//                      if (4 === result) {
//                          nodes.push(node2);
//                      }
//                  }//

//                  return nodes;
//              }//

//              this.precedingNodes = function(node) {
//                  var nodes = [],
//                      i,
//                      nodesAll,
//                      result,
//                      node2;//

//                  nodesAll = helpers.getAllNodes();//

//                  for (i = 0; i < nodesAll.length; i++) {
//                      node2 = nodesAll[i];//

//                      if (node2.nodeType == 10) // document type node
//                          continue;//

//                      result = helpers.comparePosition(node, node2);
//                      if (2 == result) {
//                          nodes.push(node2);
//                      }
//                  }//

//                  return nodes;
//              }
//          },//

//          tearDown: function() {},//

//          _should: {
//              error: {
//                  testSelfAxisDocumentFragment: true
//              },
//              ignore: {
//                  testSelfAxisNamespace: true,
//                  testChildAxisNamespace: true,
//                  testDescendantAxisNamespace: true,
//                  testDescendantOrSelfAxisNamespace: true,
//                  testParentAxisNamespace: true,
//                  testAncestorAxisNamespace: true,
//                  testAncestorOrSelfAxisNamespace: true,
//                  testFollowingSiblingAxisNamespace: true,
//                  testPrecedingSiblingAxisNamespace: true,
//                  testFollowingAxisNamespace: true,
//                  testPrecedingAxisNamespace: true,
//                  testAttributeAxisNamespace: true
//              }
//          },//

//          testSelfAxisDocument: function() {
//              checkNodeResult("self::node()", doc, [doc]);
//          },//

//          testSelfAxisDocumentElement: function() {
//              checkNodeResult("self::node()", doc.documentElement, [doc.documentElement]);
//          },//

//          testSelfAxisElement: function() {
//              checkNodeResult("self::node()", doc.getElementById('testStepAxisChild'), [doc.getElementById('testStepAxisChild')]);
//          },//

//          testSelfAxisAttribute: function() {
//              checkNodeResult("self::node()", this.getNodeAttribute(), [this.getNodeAttribute()]);
//          },//

//          testSelfAxisCData: function() {
//              checkNodeResult("self::node()", this.getNodeCData(), [this.getNodeCData()]);
//          },//

//          testSelfAxisComment: function() {
//              checkNodeResult("self::node()", this.getNodeComment(), [this.getNodeComment()]);
//          },//

//          testSelfAxisProcessingInstruction: function() {
//              checkNodeResult("self::node()", this.getNodeProcessingInstruction(), [this.getNodeProcessingInstruction()]);
//          },//

//          testSelfAxisNamespace: function() {
//              checkNodeResult("self::node()", this.getNodeNamespace(), [this.getNodeNamespace()]);
//          },//

//          testSelfAxisDocumentFragment: function() {
//              var fragment = doc.createDocumentFragment();
//              checkNodeResult("self::node()", fragment, [fragment]);
//          },//

//          testChildAxisDocument: function() {
//              var i, expectedResult = [];//

//              for (i = 0; i < doc.childNodes.length; i++) {
//                  if (doc.childNodes.item(i).nodeType == 1 ||
//                      doc.childNodes.item(i).nodeType == 8) {
//                      expectedResult.push(doc.childNodes.item(i));
//                  }
//              }//

//              checkNodeResult("child::node()", doc, expectedResult);
//          },//

//          testChildAxisDocumentElement: function() {
//              checkNodeResult("child::node()", doc.documentElement, doc.documentElement.childNodes);
//          },//

//          testChildAxisElement: function() {
//              checkNodeResult("child::node()", doc.getElementById('testStepAxisChild'),
//                  doc.getElementById('testStepAxisChild').childNodes);
//          },//

//          testChildAxisAttribute: function() {
//              checkNodeResult("child::node()", this.getNodeAttribute(), []);
//          },//

//          testChildAxisCData: function() {
//              checkNodeResult("child::node()", this.getNodeCData(), []);
//          },//

//          testChildAxisComment: function() {
//              checkNodeResult("child::node()", this.getNodeComment(), []);
//          },//

//          testChildAxisProcessingInstruction: function() {
//              checkNodeResult("child::node()", this.getNodeProcessingInstruction(), []);
//          },//

//          testChildAxisNamespace: function() {
//              checkNodeResult("child::node()", this.getNodeNamespace(), []);
//          },//

//          testDescendantAxisElement: function() {
//              var descendantNodes = function(node) {
//                  var nodes = [],
//                      i;//

//                  for (i = 0; i < node.childNodes.length; i++) {
//                      nodes.push(node.childNodes.item(i));
//                      nodes.push.apply(nodes, descendantNodes(node.childNodes.item(i)));
//                  }//

//                  return nodes;
//              };//

//              checkNodeResult("descendant::node()", doc.getElementById('testStepAxisDescendant'),
//                  descendantNodes(doc.getElementById('testStepAxisDescendant')));
//          },//

//          testDescendantAxisAttribute: function() {
//              checkNodeResult("descendant::node()", this.getNodeAttribute(), []);
//          },//

//          testDescendantAxisCData: function() {
//              checkNodeResult("descendant::node()", this.getNodeCData(), []);
//          },//

//          testDescendantAxisComment: function() {
//              checkNodeResult("descendant::node()", this.getNodeComment(), []);
//          },//

//          testDescendantAxisProcessingInstruction: function() {
//              checkNodeResult("descendant::node()", this.getNodeProcessingInstruction(), []);
//          },//

//          testDescendantAxisNamespace: function() {
//              checkNodeResult("descendant::node()", this.getNodeNamespace(), []);
//          },//

//          testDescendantOrSelfAxisElement: function() {
//              var descendantNodes = function(node) {
//                      var nodes = [],
//                          i;//

//                      for (i = 0; i < node.childNodes.length; i++) {
//                          nodes.push(node.childNodes.item(i));
//                          nodes.push.apply(nodes, descendantNodes(node.childNodes.item(i)));
//                      }//

//                      return nodes;
//                  },
//                  nodes;//

//              nodes = descendantNodes(doc.getElementById('testStepAxisDescendant'));
//              nodes.unshift(doc.getElementById('testStepAxisDescendant'));//

//              checkNodeResult("descendant-or-self::node()", doc.getElementById('testStepAxisDescendant'), nodes);
//          },//

//          testDescendantOrSelfAxisAttribute: function() {
//              checkNodeResult("descendant-or-self::node()", this.getNodeAttribute(), [
//                  this.getNodeAttribute()
//              ]);
//          },//

//          testDescendantOrSelfAxisCData: function() {
//              checkNodeResult("descendant-or-self::node()", this.getNodeCData(), [
//                  this.getNodeCData()
//              ]);
//          },//

//          testDescendantOrSelfAxisComment: function() {
//              checkNodeResult("descendant-or-self::node()", this.getNodeComment(), [
//                  this.getNodeComment()
//              ]);
//          },//

//          testDescendantOrSelfAxisProcessingInstruction: function() {
//              checkNodeResult("descendant-or-self::node()", this.getNodeProcessingInstruction(), [
//                  this.getNodeProcessingInstruction()
//              ]);
//          },//

//          testDescendantOrSelfAxisNamespace: function() {
//              checkNodeResult("descendant-or-self::node()", this.getNodeNamespace(), [
//                  this.getNodeNamespace()
//              ]);
//          },//

//          testParentAxisDocument: function() {
//              checkNodeResult("parent::node()", doc, []);
//          },//

//          testParentAxisDocumentElement: function() {
//              checkNodeResult("parent::node()", doc.documentElement, [doc]);
//          },//

//          testParentAxisElement: function() {
//              checkNodeResult("parent::node()", doc.getElementById('testStepAxisNodeElement'), [doc.getElementById('StepAxisCase')]);
//          },//

//          testParentAxisAttribute: function() {
//              checkNodeResult("parent::node()", this.getNodeAttribute(), [doc.getElementById('testStepAxisNodeAttribute')]);
//          },//

//          testParentAxisCData: function() {
//              checkNodeResult("parent::node()", this.getNodeCData(), [doc.getElementById('testStepAxisNodeCData')]);
//          },//

//          testParentAxisComment: function() {
//              checkNodeResult("parent::node()", this.getNodeComment(), [doc.getElementById('testStepAxisNodeComment')]);
//          },//

//          testParentAxisProcessingInstruction: function() {
//              checkNodeResult("parent::node()", this.getNodeProcessingInstruction(), [doc.getElementById('testStepAxisNodeProcessingInstruction')]);
//          },//

//          testParentAxisNamespace: function() {
//              checkNodeResult("parent::node()", this.getNodeNamespace(), [doc.getElementById('testStepAxisNodeNamespace')]);
//          },//

//          testAncestorAxisDocument: function() {
//              checkNodeResult("ancestor::node()", doc, []);
//          },//

//          testAncestorAxisDocumentElement: function() {
//              checkNodeResult("ancestor::node()", doc.documentElement, [
//                  doc
//              ]);
//          },//

//          testAncestorAxisElement: function() {
//              checkNodeResult("ancestor::node()", doc.getElementById('testStepAxisNodeElement'), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase')
//              ]);
//          },//

//          testAncestorAxisAttribute: function() {
//              checkNodeResult("ancestor::node()", this.getNodeAttribute(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeAttribute')
//              ]);
//          },//

//          testAncestorAxisCData: function() {
//              checkNodeResult("ancestor::node()", this.getNodeCData(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeCData')
//              ]);
//          },//

//          testAncestorAxisComment: function() {
//              checkNodeResult("ancestor::node()", this.getNodeComment(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeComment')
//              ]);
//          },//

//          testAncestorAxisProcessingInstruction: function() {
//              checkNodeResult("ancestor::node()", this.getNodeProcessingInstruction(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeProcessingInstruction')
//              ]);
//          },//

//          testAncestorAxisNamespace: function() {
//              checkNodeResult("ancestor::node()", this.getNodeNamespace(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeNamespace')
//              ]);
//          },//

//          testAncestorOrSelfAxisDocument: function() {
//              checkNodeResult("ancestor-or-self::node()", doc, [
//                  doc
//              ]);
//          },//

//          testAncestorOrSelfAxisDocumentElement: function() {
//              checkNodeResult("ancestor-or-self::node()", doc.documentElement, [
//                  doc,
//                  doc.documentElement
//              ]);
//          },//

//          testAncestorOrSelfAxisElement: function() {
//              checkNodeResult("ancestor-or-self::node()", doc.getElementById('testStepAxisNodeElement'), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeElement')
//              ]);
//          },//

//          testAncestorOrSelfAxisAttribute: function() {
//              checkNodeResult("ancestor-or-self::node()", this.getNodeAttribute(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeAttribute'),
//                  this.getNodeAttribute()
//              ]);
//          },//

//          testAncestorOrSelfAxisCData: function() {
//              checkNodeResult("ancestor-or-self::node()", this.getNodeCData(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeCData'),
//                  this.getNodeCData()
//              ]);
//          },//

//          testAncestorOrSelfAxisComment: function() {
//              checkNodeResult("ancestor-or-self::node()", this.getNodeComment(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeComment'),
//                  this.getNodeComment()
//              ]);
//          },//

//          testAncestorOrSelfAxisProcessingInstruction: function() {
//              checkNodeResult("ancestor-or-self::node()", this.getNodeProcessingInstruction(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeProcessingInstruction'),
//                  this.getNodeProcessingInstruction()
//              ]);
//          },//

//          testAncestorOrSelfAxisNamespace: function() {
//              checkNodeResult("ancestor-or-self::node()", this.getNodeNamespace(), [
//                  doc,
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepAxisCase'),
//                  doc.getElementById('testStepAxisNodeNamespace'),
//                  this.getNodeNamespace()
//              ]);
//          },//

//          testFollowingSiblingAxisDocument: function() {
//              checkNodeResult("following-sibling::node()", doc, []);
//          },//

//          testFollowingSiblingAxisDocumentElement: function() {
//              checkNodeResult("following-sibling::node()", doc.documentElement, this.followingSiblingNodes(doc.documentElement));
//          },//

//          testFollowingSiblingAxisElement: function() {
//              checkNodeResult("following-sibling::node()", doc.getElementById('testStepAxisNodeElement'), this.followingSiblingNodes(doc.getElementById('testStepAxisNodeElement')));
//          },//

//          testFollowingSiblingAxisAttribute: function() {
//              checkNodeResult("following-sibling::node()", this.getNodeAttribute(), []);
//          },//

//          testFollowingSiblingAxisCData: function() {
//              checkNodeResult("following-sibling::node()", this.getNodeCData(), this.followingSiblingNodes(this.getNodeCData()));
//          },//

//          testFollowingSiblingAxisComment: function() {
//              checkNodeResult("following-sibling::node()", this.getNodeComment(), this.followingSiblingNodes(this.getNodeComment()));
//          },//

//          testFollowingSiblingAxisProcessingInstruction: function() {
//              checkNodeResult("following-sibling::node()", this.getNodeProcessingInstruction(), this.followingSiblingNodes(this.getNodeProcessingInstruction()));
//          },//

//          testFollowingSiblingAxisNamespace: function() {
//              checkNodeResult("following-sibling::node()", this.getNodeNamespace(), []);
//          },//

//          testPrecedingSiblingAxisDocument: function() {
//              checkNodeResult("preceding-sibling::node()", doc, []);
//          },//

//          testPrecedingSiblingAxisDocumentElement: function() {
//              checkNodeResult("preceding-sibling::node()", doc.documentElement, this.precedingSiblingNodes(doc.documentElement));
//          },//

//          testPrecedingSiblingAxisElement: function() {
//              checkNodeResult("preceding-sibling::node()", doc.getElementById('testStepAxisNodeElement'), this.precedingSiblingNodes(doc.getElementById('testStepAxisNodeElement')));
//          },//

//          testPrecedingSiblingAxisAttribute: function() {
//              checkNodeResult("preceding-sibling::node()", this.getNodeAttribute(), []);
//          },//

//          testPrecedingSiblingAxisCData: function() {
//              checkNodeResult("preceding-sibling::node()", this.getNodeCData(), this.precedingSiblingNodes(this.getNodeCData()));
//          },//

//          testPrecedingSiblingAxisComment: function() {
//              checkNodeResult("preceding-sibling::node()", this.getNodeComment(), this.precedingSiblingNodes(this.getNodeComment()));
//          },//

//          testPrecedingSiblingAxisProcessingInstruction: function() {
//              checkNodeResult("preceding-sibling::node()", this.getNodeProcessingInstruction(), this.precedingSiblingNodes(this.getNodeProcessingInstruction()));
//          },//

//          testPrecedingSiblingAxisNamespace: function() {
//              checkNodeResult("preceding-sibling::node()", this.getNodeNamespace(), []);
//          },//

//          testFollowingAxisDocument: function() {
//              checkNodeResult("following::node()", doc, []);
//          },//

//          testFollowingAxisDocumentElement: function() {
//              checkNodeResult("following::node()", doc.documentElement, this.followingNodes(doc.documentElement));
//          },//

//          testFollowingAxisElement: function() {
//              checkNodeResult("following::node()", doc.getElementById('testStepAxisNodeElement'), this.followingNodes(doc.getElementById('testStepAxisNodeElement')));
//          },//

//          testFollowingAxisAttribute: function() {
//              checkNodeResult("following::node()", this.getNodeAttribute(), this.followingNodes(doc.getElementById('testStepAxisNodeAttribute')));
//          },//

//          testFollowingAxisCData: function() {
//              checkNodeResult("following::node()", this.getNodeCData(), this.followingNodes(this.getNodeCData()));
//          },//

//          testFollowingAxisComment: function() {
//              checkNodeResult("following::node()", this.getNodeComment(), this.followingNodes(this.getNodeComment()));
//          },//

//          testFollowingAxisProcessingInstruction: function() {
//              checkNodeResult("following::node()", this.getNodeProcessingInstruction(), this.followingNodes(this.getNodeProcessingInstruction()));
//          },//

//          testFollowingAxisNamespace: function() {
//              checkNodeResult("following::node()", this.getNodeNamespace(), this.followingNodes(doc.getElementById('testStepAxisNodeNamespace')));
//          },//

//          testPrecedingAxisDocument: function() {
//              checkNodeResult("preceding::node()", doc, []);
//          },//

//          testPrecedingAxisDocumentElement: function() {
//              checkNodeResult("preceding::node()", doc.documentElement, this.precedingNodes(doc.documentElement));
//          },//

//          testPrecedingAxisElement: function() {
//              checkNodeResult("preceding::node()", doc.getElementById('testStepAxisNodeElement'), this.precedingNodes(doc.getElementById('testStepAxisNodeElement')));
//          },//

//          testPrecedingAxisAttribute: function() {
//              checkNodeResult("preceding::node()", this.getNodeAttribute(), this.precedingNodes(doc.getElementById('testStepAxisNodeAttribute')));
//          },//

//          testPrecedingAxisCData: function() {
//              checkNodeResult("preceding::node()", this.getNodeCData(), this.precedingNodes(this.getNodeCData()));
//          },//

//          testPrecedingAxisComment: function() {
//              checkNodeResult("preceding::node()", this.getNodeComment(), this.precedingNodes(this.getNodeComment()));
//          },//

//          testPrecedingAxisProcessingInstruction: function() {
//              checkNodeResult("preceding::node()", this.getNodeProcessingInstruction(), this.precedingNodes(this.getNodeProcessingInstruction()));
//          },//

//          testPrecedingAxisNamespace: function() {
//              checkNodeResult("preceding::node()", this.getNodeNamespace(), this.precedingNodes(doc.getElementById('testStepAxisNodeNamespace')));
//          },//

//          testAttributeAxisDocument: function() {
//              checkNodeResult("attribute::node()", doc, []);
//          },//

//          testAttributeAxisAttribute: function() {
//              checkNodeResult("attribute::node()", this.getNodeAttribute(), []);
//          },//

//          testAttributeAxisCData: function() {
//              checkNodeResult("attribute::node()", this.getNodeCData(), []);
//          },//

//          testAttributeAxisComment: function() {
//              checkNodeResult("attribute::node()", this.getNodeComment(), []);
//          },//

//          testAttributeAxisProcessingInstruction: function() {
//              checkNodeResult("attribute::node()", this.getNodeProcessingInstruction(), []);
//          },//

//          testAttributeAxisNamespace: function() {
//              checkNodeResult("attribute::node()", this.getNodeNamespace(), []);
//          },//

//          testAttributeAxis0: function() {
//              checkNodeResult("attribute::node()", doc.getElementById('testStepAxisNodeAttribute0'), filterAttributes(doc.getElementById('testStepAxisNodeAttribute0').attributes));
//          },//

//          testAttributeAxis1: function() {
//              checkNodeResult("attribute::node()", doc.getElementById('testStepAxisNodeAttribute1'), filterAttributes(doc.getElementById('testStepAxisNodeAttribute1').attributes));
//          },//

//          testAttributeAxis3: function() {
//              checkNodeResult("attribute::node()", doc.getElementById('testStepAxisNodeAttribute3'), filterAttributes(doc.getElementById('testStepAxisNodeAttribute3').attributes));
//          },//

//          testAttributeAxisStartXml: function() {
//              checkNodeResult("attribute::node()", doc.getElementById('testStepAxisNodeAttributeStartXml'), filterAttributes(doc.getElementById('testStepAxisNodeAttributeStartXml').attributes));
//          },//

//          testNamespaceAxisDocument: function() {
//              checkNodeResultNamespace("namespace::node()", doc, []);
//          },//

//          testNamespaceAxisAttribute: function() {
//              checkNodeResultNamespace("namespace::node()", this.getNodeAttribute(), []);
//          },//

//          testNamespaceAxisCData: function() {
//              checkNodeResultNamespace("namespace::node()", this.getNodeCData(), []);
//          },//

//          testNamespaceAxisComment: function() {
//              checkNodeResultNamespace("namespace::node()", this.getNodeComment(), []);
//          },//

//          testNamespaceAxisProcessingInstruction: function() {
//              checkNodeResultNamespace("namespace::node()", this.getNodeProcessingInstruction(), []);
//          },//

//          testNamespaceAxisNamespace: function() {
//              checkNodeResultNamespace("namespace::node()", this.getNodeNamespace(), []);
//          },//

//          testNamespaceAxisDocumentElement: function() {
//              checkNodeResultNamespace("namespace::node()", doc.documentElement, [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },
//          testNamespaceAxis0: function() {
//              checkNodeResultNamespace("namespace::node()", doc.getElementById('testStepAxisNodeNamespace0'), [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testNamespaceAxis1: function() {
//              checkNodeResultNamespace("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1'), [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['a', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testNamespaceAxis1default: function() {
//              checkNodeResultNamespace("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1defaultContainer').firstChild, [
//                  ['', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testNamespaceAxis1default2: function() {
//              checkNodeResultNamespace("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1defaultContainer2').firstChild, [
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testNamespaceAxis3: function() {
//              var namespaces = []
//              contextNode = doc.getElementById('testStepAxisNodeNamespace3');//

//              namespaces.push(['', 'http://www.w3.org/1999/xhtml']);
//              parseNamespacesFromAttributes(contextNode.attributes, namespaces);
//              namespaces.push(['ev', 'http://some-namespace.com/nss']);
//              namespaces.push(['xml', 'http://www.w3.org/XML/1998/namespace']);//

//              checkNodeResultNamespace("namespace::node()", contextNode, namespaces);
//          },//

//          testNamespaceAxis3default: function() {
//              var namespaces = []
//              contextNode = doc.getElementById('testStepAxisNodeNamespace3defaultContainer').firstChild;//

//              parseNamespacesFromAttributes(contextNode.attributes, namespaces);
//              namespaces.push(['ev', 'http://some-namespace.com/nss']);
//              namespaces.push(['xml', 'http://www.w3.org/XML/1998/namespace']);//

//              checkNodeResultNamespace("namespace::node()", contextNode, namespaces);
//          },//

//          testNamespaceAxisXmlOverride: function() {
//              checkNodeResultNamespace("namespace::node()", doc.getElementById('testStepAxisNodeNamespaceXmlOverride'), [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['ev', 'http://some-other-namespace/'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testNamespaceAxisNoNamespaceNodeSharingAmongstElements: function() {
//              var j, result, result2, item, item2, expectedResult;//

//              expectedResult = [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['a', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ];//

//              result = documentEvaluate("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1'), null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
//              result2 = documentEvaluate("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1b'), null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);//

//              Y.Assert.areSame(expectedResult.length, result.snapshotLength);
//              Y.Assert.areSame(expectedResult.length, result2.snapshotLength);//

//              for (j = 0; j < result.snapshotLength; j++) {
//                  item = result.snapshotItem(j);
//                  item2 = result2.snapshotItem(j);//

//                  Y.Assert.areSame('#namespace', item.nodeName);
//                  Y.Assert.areSame('#namespace', item2.nodeName);//

//                  Y.Assert.areSame(expectedResult[j][0], item.localName);
//                  Y.Assert.areSame(expectedResult[j][0], item2.localName);//

//                  Y.Assert.areSame(expectedResult[j][1], item.namespaceURI);
//                  Y.Assert.areSame(expectedResult[j][1], item2.namespaceURI);//

//                  Y.Assert.areNotSame(item, item2);
//              }
//          },//

//          testNamespaceAxisSameNamespaceNodeOnSameElement: function() {
//              var j, result, result2, item, item2, expectedResult;//

//              expectedResult = [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['a', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ];//

//              result = documentEvaluate("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1'), null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
//              result2 = documentEvaluate("namespace::node()", doc.getElementById('testStepAxisNodeNamespace1'), null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);//

//              Y.Assert.areSame(expectedResult.length, result.snapshotLength);
//              Y.Assert.areSame(expectedResult.length, result2.snapshotLength);//

//              for (j = 0; j < result.snapshotLength; j++) {
//                  item = result.snapshotItem(j);
//                  item2 = result2.snapshotItem(j);//

//                  Y.Assert.areSame('#namespace', item.nodeName);
//                  Y.Assert.areSame(expectedResult[j][0], item.localName);
//                  Y.Assert.areSame(expectedResult[j][1], item.namespaceURI);
//                  Y.Assert.areSame(item, item2);
//              }
//          },//

//          testStepAxisNodeAttrib1Ns1: function() {
//              var attributes = [],
//                  i,
//                  contextNode;//

//              contextNode = doc.getElementById('testStepAxisNodeAttrib1Ns1');//

//              for (i = 0; i < contextNode.attributes.length; i++) {
//                  if (!contextNode.attributes[i].specified) {
//                      continue;
//                  }
//                  if (contextNode.attributes.item(i).nodeName.substring(0, 5) !== 'xmlns') {
//                      attributes.push(contextNode.attributes.item(i));
//                  }
//              }//

//              checkNodeResult("attribute::node()", contextNode, attributes);//

//              checkNodeResultNamespace("namespace::node()", contextNode, [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['a', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testStepAxisNodeAttrib1Ns1reversed: function() {
//              var attributes = [],
//                  i,
//                  contextNode;//

//              contextNode = doc.getElementById('testStepAxisNodeAttrib1Ns1reversed');//

//              for (i = 0; i < contextNode.attributes.length; i++) {
//                  if (!contextNode.attributes[i].specified) {
//                      continue;
//                  }
//                  if (contextNode.attributes.item(i).nodeName.substring(0, 5) !== 'xmlns') {
//                      attributes.push(contextNode.attributes.item(i));
//                  }
//              }//

//              checkNodeResult("attribute::node()", contextNode, attributes);//

//              checkNodeResultNamespace("namespace::node()", contextNode, [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['a', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testStepAxisNodeAttrib2Ns1: function() {
//              var attributes = [],
//                  i,
//                  contextNode;//

//              contextNode = doc.getElementById('testStepAxisNodeAttrib2Ns1');//

//              for (i = 0; i < contextNode.attributes.length; i++) {
//                  if (!contextNode.attributes[i].specified) {
//                      continue;
//                  }
//                  if (contextNode.attributes.item(i).nodeName.substring(0, 5) !== 'xmlns') {
//                      attributes.push(contextNode.attributes.item(i));
//                  }
//              }//

//              checkNodeResult("attribute::node()", contextNode, attributes);//

//              checkNodeResultNamespace("namespace::node()", contextNode, [
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['c', 'asdf3'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testStepAxisNodeAttrib2Ns1reversed: function() {
//              var attributes = [],
//                  i,
//                  contextNode;//

//              contextNode = doc.getElementById('testStepAxisNodeAttrib2Ns1reversedContainer').firstChild;//

//              for (i = 0; i < contextNode.attributes.length; i++) {
//                  if (!contextNode.attributes[i].specified) {
//                      continue;
//                  }
//                  if (contextNode.attributes.item(i).nodeName.substring(0, 5) !== 'xmlns') {
//                      attributes.push(contextNode.attributes.item(i));
//                  }
//              }//

//              checkNodeResult("attribute::node()", contextNode, attributes);//

//              checkNodeResultNamespace("namespace::node()", contextNode, [
//                  ['', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          },//

//          testStepAxisNodeAttrib2Ns2: function() {
//              var attributes = [],
//                  i,
//                  contextNode;//

//              contextNode = doc.getElementById('testStepAxisNodeAttrib2Ns2Container').firstChild;//

//              for (i = 0; i < contextNode.attributes.length; i++) {
//                  if (!contextNode.attributes[i].specified) {
//                      continue;
//                  }
//                  if (contextNode.attributes.item(i).nodeName.substring(0, 5) !== 'xmlns') {
//                      attributes.push(contextNode.attributes.item(i));
//                  }
//              }//

//              checkNodeResult("attribute::node()", contextNode, attributes);//

//              checkNodeResultNamespace("namespace::node()", contextNode, [
//                  ['', 'asdf2'],
//                  ['a', 'asdf'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ]);
//          }
//      });//

//      tests.FunctionNodesetIdCase = new Y.Test.Case({//

//          name: "Nodset Function Id Tests",//

//          setUp: function() {},//

//          _should: {
//              error: {},
//              ignore: {}
//          },//

//          testSimple: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdCaseSimple');
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdCaseSimple')", doc, [
//                  node
//              ]);
//          },//

//          testDuplicate: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdCaseSimple');
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdCaseSimple FunctionNodesetIdCaseSimple')", doc, [
//                  node
//              ]);
//          },//

//          testNoId: function() {
//              checkNodeResult("id('FunctionNodesetIdCaseSimpleDoesNotExist')", doc, []);
//          },//

//          testNoDefaultNamespace: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdCaseNoDefaultNamespaceContainer').firstChild;
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdCaseNoDefaultNamespace')", doc, []);
//          },//

//          testXhtmlDefaultNamespace: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdCaseXhtmlDefaultNamespaceContainer').firstChild;
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdCaseXhtmlDefaultNamespace')", doc, [
//                  node
//              ]);
//          },//

//          testXhtmlNamespace: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdCaseXhtmlNamespaceContainer').firstChild;
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdCaseXhtmlNamespace')", doc, [
//                  node
//              ]);
//          },//

//          testXhtmlNamespaceParent: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdCaseXhtmlNamespaceParentContainer').firstChild;
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdCaseXhtmlNamespaceParent')", doc, [
//                  node
//              ]);
//          },//

//          testXmlNamespace: function() {
//              var expectedResults,
//                  node,
//                  id;//

//              node = doc.getElementById('FunctionNodesetIdXmlNamespaceContainer').firstChild;
//              Y.Assert.isObject(node);//

//              checkNodeResult("id('FunctionNodesetIdXmlNamespace')", doc, [
//                  node
//              ]);
//          },//

//          testMultiple: function() {
//              checkNodeResult("id('FunctionNodesetIdCaseMultiple1 FunctionNodesetIdCaseMultiple2 FunctionNodesetIdCaseMultiple3')", doc, [
//                  doc.getElementById('FunctionNodesetIdCaseMultiple1'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple2'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple3')
//              ]);
//          },//

//          testMultiple2: function() {
//              checkNodeResult("id('  FunctionNodesetIdCaseMultiple1 sss FunctionNodesetIdCaseMultiple2\r\n\tFunctionNodesetIdCaseMultiple3\t')", doc, [
//                  doc.getElementById('FunctionNodesetIdCaseMultiple1'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple2'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple3')
//              ]);
//          },//

//          testNodeset: function() {
//              checkNodeResult("id(.)", doc.getElementById('FunctionNodesetIdCaseNodeset'), []);//

//              checkNodeResult("id(child::*)", doc.getElementById('FunctionNodesetIdCaseNodeset'), [
//                  doc.getElementById('FunctionNodesetIdCaseMultiple1'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple2'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple3'),
//                  doc.getElementById('FunctionNodesetIdCaseMultiple4')
//              ]);
//          }
//      });//

//      tests.StepNodeTestNodeTypeCase = new Y.Test.Case({
//          name: 'Step Node Test - Node Type Tests',//

//          setUp: function() {},//

//          tearDown: function() {},//

//          _should: {
//              error: {},
//              ignore: {}
//          },//

//          testNode: function() {
//              var node = doc.getElementById('StepNodeTestNodeTypeCase');
//              checkNodeResult("child::node()", node, node.childNodes);
//          },//

//          testText: function() {
//              var node = doc.getElementById('StepNodeTestNodeTypeCase'),
//                  nodes = [],
//                  i;//

//              for (i = 0; i < node.childNodes.length; i++) {
//                  switch (node.childNodes[i].nodeType) {
//                      case 3: // text
//                      case 4: // cdata
//                          nodes.push(node.childNodes[i]);
//                          break;
//                  }
//              }//

//              checkNodeResult("child::text()", node, nodes);
//          },//

//          testComment: function() {
//              var node = doc.getElementById('StepNodeTestNodeTypeCase'),
//                  nodes = [],
//                  i;//

//              for (i = 0; i < node.childNodes.length; i++) {
//                  switch (node.childNodes[i].nodeType) {
//                      case 8: // comment
//                          nodes.push(node.childNodes[i]);
//                          break;
//                  }
//              }//

//              checkNodeResult("child::comment()", node, nodes);
//          },//

//          testProcessingInstructionAny: function() {
//              var node = doc.getElementById('StepNodeTestNodeTypeCase'),
//                  nodes = [],
//                  i;//

//              for (i = 0; i < node.childNodes.length; i++) {
//                  switch (node.childNodes[i].nodeType) {
//                      case 7: // processing instruction
//                          nodes.push(node.childNodes[i]);
//                          break;
//                  }
//              }//

//              checkNodeResult("child::processing-instruction()", node, nodes);
//          },//

//          testProcessingInstructionSpecific: function() {
//              var node = doc.getElementById('StepNodeTestNodeTypeCase'),
//                  nodes = [],
//                  i;//

//              for (i = 0; i < node.childNodes.length; i++) {
//                  switch (node.childNodes[i].nodeType) {
//                      case 7: // processing instruction
//                          if (node.childNodes[i].nodeName == 'custom-process-instruct') {
//                              nodes.push(node.childNodes[i]);
//                          }
//                          break;
//                  }
//              }//

//              checkNodeResult("child::processing-instruction('custom-process-instruct')", node, nodes);
//          }
//      });//

//      tests.StepNodeTestNameTestCase = new Y.Test.Case({
//          name: 'Step Node Test - Name Test Tests',//

//          setUp: function() {
//              this.filterElementNodes = function(nodes) {
//                  var elementNodes = [],
//                      i;//

//                  for (i = 0; i < nodes.length; i++) {
//                      if (nodes[i].nodeType == 1) {
//                          elementNodes.push(nodes[i]);
//                      }
//                  }//

//                  return elementNodes;
//              }
//          },//

//          tearDown: function() {},//

//          _should: {
//              error: {},
//              ignore: {}
//          },//

//          testAnyAnyAttribute: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestAttribute');
//              checkNodeResult("attribute::*", node, filterAttributes(node.attributes));
//          },//

//          testAnyAnyNamespace: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestNamespace'),
//                  namespaces = [];//

//              namespaces.push(['', 'http://www.w3.org/1999/xhtml']);
//              parseNamespacesFromAttributes(node.attributes, namespaces);
//              namespaces.push(['ev', 'http://some-namespace.com/nss']);
//              namespaces.push(['xml', 'http://www.w3.org/XML/1998/namespace']);//

//              checkNodeResultNamespace("namespace::*", node, namespaces);
//          },//

//          testAnyAnyChild: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestChild');
//              checkNodeResult("child::*", node, this.filterElementNodes(node.childNodes));
//          },//

//          testAnyAnyAncestorOrSelfAttribute: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestAttribute'),
//                  attributes = filterAttributes(node.attributes);//

//              checkNodeResult("ancestor-or-self::*", attributes[0], [
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('StepNodeTestCaseNameTest'),
//                  doc.getElementById('StepNodeTestCaseNameTestAttribute')
//              ]);
//          },//

//          testNamespaceAnyAttribute: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestAttribute'),
//                  attributes = filterAttributes(node.attributes),
//                  i,
//                  name;//

//              for (i = attributes.length - 1; i >= 0; i--) {
//                  name = attributes[i].nodeName.split(':')//

//                  if (name[0] != 'ev') {
//                      attributes.splice(i, 1);
//                  }
//              }//

//              Y.Assert.areSame(2, attributes.length);//

//              checkNodeResult("attribute::ev:*", node, attributes, helpers.xhtmlResolver);
//          },//

//          testNamespaceAnyNamespace: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestNamespace');//

//              checkNodeResultNamespace("namespace::ns2:*", node, [], helpers.xhtmlResolver);
//          },//

//          testNamespaceAnyChild: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestChild'),
//                  nodesFinal = [];//

//              nodesFinal = [
//                  node.childNodes[0],
//                  node.childNodes[1],
//                  node.childNodes[2]
//              ];//

//              checkNodeResult("child::ns2:*", node, nodesFinal, helpers.xhtmlResolver);
//          },//

//          testNamespaceNameAttribute: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestAttribute'),
//                  attributes = filterAttributes(node.attributes),
//                  i,
//                  name;//

//              for (i = attributes.length - 1; i >= 0; i--) {
//                  name = attributes[i].nodeName.split(':')//

//                  if (name[0] != 'ev' || name[1] != 'attrib2') {
//                      attributes.splice(i, 1);
//                  }
//              }//

//              Y.Assert.areSame(1, attributes.length);//

//              checkNodeResult("attribute::ev:attrib2", node, attributes, helpers.xhtmlResolver);
//          },//

//          testNamespaceNameNamespace: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestNamespace');//

//              checkNodeResultNamespace("namespace::ns2:ns2", node, [], helpers.xhtmlResolver);
//          },//

//          testNamespaceNameChild: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestChild'),
//                  nodesFinal = [];//

//              nodesFinal = [
//                  node.childNodes[0],
//                  node.childNodes[1]
//              ];//

//              checkNodeResult("child::ns2:div", node, nodesFinal, helpers.xhtmlResolver);
//          },//

//          testNameAttribute: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestAttribute'),
//                  attributes = filterAttributes(node.attributes),
//                  i,
//                  name;//

//              for (i = attributes.length - 1; i >= 0; i--) {
//                  name = attributes[i].nodeName.split(':')//

//                  if (name[0] != 'attrib3') {
//                      attributes.splice(i, 1);
//                  }
//              }//

//              Y.Assert.areSame(1, attributes.length);//

//              checkNodeResult("attribute::attrib3", node, attributes, helpers.xhtmlResolver);
//          },//

//          testNameNamespace: function() {
//              var node = doc.getElementById('StepNodeTestCaseNameTestNamespace');//
//

//              checkNodeResultNamespace("namespace::ns2", node, [
//                  [
//                      'ns2',
//                      'http://asdf/'
//                  ]
//              ], helpers.xhtmlResolver);
//          },//

//          testNameChild: function() {
//              checkNodeResult("child::html", doc, [], helpers.xhtmlResolver);
//              checkNodeResult("child::xhtml:html", doc, [doc.documentElement], helpers.xhtmlResolver);
//          },//

//          testAncestorNodeName: function() {
//              checkNodeResult("ancestor::xhtml:div", doc.getElementById('StepNodeTestCaseNameTest3'), [
//                  doc.getElementById('StepNodeTestCaseNameTest'),
//                  doc.getElementById('StepNodeTestCaseNameTest1'),
//                  doc.getElementById('StepNodeTestCaseNameTest2')
//              ], helpers.xhtmlResolver);
//          },//

//          testAncestorNodeNameNoDefaultNamespace: function() {
//              checkNodeResult("ancestor::div", doc.getElementById('StepNodeTestCaseNameTestNoNamespace').firstChild.firstChild.firstChild, [
//                  doc.getElementById('StepNodeTestCaseNameTestNoNamespace').firstChild,
//                  doc.getElementById('StepNodeTestCaseNameTestNoNamespace').firstChild.firstChild
//              ], helpers.xhtmlResolver);
//          }
//      });//

//      tests.LocationPathCase = new Y.Test.Case({
//          name: 'Location Path Tests',//

//          setUp: function() {
//              this.oneNamespaceNode = function(node) {
//                  var result, item;//

//                  result = documentEvaluate("namespace::node()", node, null, win.XPathResult.ANY_UNORDERED_NODE_TYPE, null);
//                  item = result.singleNodeValue;
//                  Y.Assert.isNotNull(item);
//                  Y.Assert.areSame(item.nodeType, 13);//

//                  return item;
//              }
//          },//

//          tearDown: function() {},//

//          _should: {
//              error: {},
//              ignore: {
//                  testNodeAttribute: true,
//                  testNodeNamespace: true
//              }
//          },//

//          testRoot: function() {
//              var input = [
//                      [doc, [doc]], // Document
//                      [doc.documentElement, [doc]], // Element
//                      [doc.getElementById('LocationPathCase'), [doc]], // Element
//                      [doc.getElementById('LocationPathCaseText').firstChild, [doc]], // Text
//                      [doc.getElementById('LocationPathCaseComment').firstChild, [doc]], // Comment
//                      [filterAttributes(doc.getElementById('LocationPathCaseAttribute').attributes)[0],
//                          [doc]
//                      ] // Attribute
//                  ],
//                  i,
//                  node;//

//              // ProcessingInstruction
//              node = doc.getElementById('LocationPathCaseProcessingInstruction').firstChild;
//              if (node && node.nodeType == 7) {
//                  input.push([node, [doc]]);
//              }//

//              // CDATASection
//              node = doc.getElementById('LocationPathCaseCData').firstChild
//              if (node && node.nodeType == 4) {
//                  input.push([node, [doc]]);
//              }//

//              for (i = 0; i < input.length; i++) {
//                  checkNodeResult("/", input[i][0], input[i][1]);
//              }
//          },//

//          testRootNamespace: function() {
//              var input = [this.oneNamespaceNode(doc.getElementById('LocationPathCaseNamespace')), [doc]] // XPathNamespace
//              ;//

//              checkNodeResult("/", input[0], input[1]);
//          },//

//          testRootNode: function() {
//              checkNodeResult("/html", doc, [], helpers.xhtmlResolver);
//              checkNodeResult("/xhtml:html", doc, [doc.documentElement], helpers.xhtmlResolver);
//              checkNodeResult("/xhtml:html", doc.getElementById('LocationPathCase'), [doc.documentElement], helpers.xhtmlResolver);
//              checkNodeResult("/htmlnot", doc.getElementById('LocationPathCase'), [], helpers.xhtmlResolver);
//          },//

//          testRootNodeNode: function() {
//              checkNodeResult("/xhtml:html/xhtml:body", doc.getElementById('LocationPathCase'), [doc.body], helpers.xhtmlResolver);
//          },//

//          testNodeNode: function() {
//              checkNodeResult("html", doc, [], helpers.xhtmlResolver);
//              checkNodeResult("xhtml:html", doc, [doc.documentElement], helpers.xhtmlResolver);
//              checkNodeResult("xhtml:html/xhtml:body", doc, [doc.body], helpers.xhtmlResolver);
//          },//

//          testNodeAttribute: function() {
//              var node = doc.getElementById('LocationPathCaseAttributeParent');//

//              checkNodeResult("child::*/attribute::*", node, [
//                  filterAttributes(node.childNodes[0].attributes)[0],
//                  filterAttributes(node.childNodes[1].attributes)[0],
//                  filterAttributes(node.childNodes[1].attributes)[1],
//                  filterAttributes(node.childNodes[2].attributes)[0],
//                  filterAttributes(node.childNodes[3].attributes)[0]
//              ], helpers.xhtmlResolver);
//          },//

//          testNodeNamespace: function() {
//              var node = doc.getElementById('LocationPathCaseNamespaceParent');//

//              checkNodeResultNamespace("child::* /namespace::*", node, [
//                  ['', 'http://asdss/'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace'],
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['ab', 'hello/world2'],
//                  ['a2', 'hello/world'],
//                  ['aa', 'http://saa/'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace'],
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace'],
//                  ['', 'http://www.w3.org/1999/xhtml'],
//                  ['aa', 'http://saa/'],
//                  ['ev', 'http://some-namespace.com/nss'],
//                  ['xml', 'http://www.w3.org/XML/1998/namespace']
//              ], helpers.xhtmlResolver);
//          },//

//          testDuplicates: function() {
//              checkNodeResult("ancestor-or-self::* /ancestor-or-self::*", doc.getElementById('LocationPathCaseDuplicates'), [
//                  doc.documentElement,
//                  doc.body,
//                  doc.getElementById('LocationPathCase'),
//                  doc.getElementById('LocationPathCaseDuplicates')
//              ], helpers.xhtmlResolver);
//          }
//      });//
//

//      tests.ComparisonOperatorCase = new Y.Test.Case({
//          name: 'Comparison Operator Tests',//

//          _should: {
//              error: {
//                  testAndLetterCase: true,
//                  testOrLetterCase: true
//              },
//              ignore: {}
//          },//

//          testEqualsAndNotEquals: function() {
//              var result, input, i, expr, j, k,
//                  ops = ['=', '!='];//

//              input = [
//                  [
//                      ["1", "1"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["1", "0"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["1", "'1'"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["1", "'0'"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["1", "true()"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["1", "false()"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["0", "false()"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["-10", "*"],
//                      [false, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["4", "*"],
//                      [true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["4.3", "*"],
//                      [false, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["0", "*"],
//                      [false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],//

//                  [
//                      ["true()", "true()"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["false()", "false()"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["true()", "false()"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["true()", "'1'"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["true()", "''"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["false()", "'0'"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["false()", "''"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["true()", "*"],
//                      [true, false], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["false()", "*"],
//                      [false, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["true()", "*"],
//                      [false, true], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],
//                  [
//                      ["false()", "*"],
//                      [true, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],//

//                  [
//                      ["'1a'", "'1a'"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["'1'", "'0'"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["''", "''"],
//                      [true, false], doc
//                  ],
//                  [
//                      ["''", "'0'"],
//                      [false, true], doc
//                  ],
//                  [
//                      ["'aaa'", "*"],
//                      [true, true], doc.getElementById('ComparisonOperatorCaseNodesetStrings')
//                  ],
//                  [
//                      ["'bb'", "*"],
//                      [false, true], doc.getElementById('ComparisonOperatorCaseNodesetStrings')
//                  ],
//                  [
//                      ["''", "*"],
//                      [false, true], doc.getElementById('ComparisonOperatorCaseNodesetStrings')
//                  ],
//                  [
//                      ["''", "*"],
//                      [false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],//

//                  [
//                      ["id('ComparisonOperatorCaseNodesetNegative5to5')/*", "id('ComparisonOperatorCaseNodesetEmpty')/*"],
//                      [false, false], doc
//                  ],
//                  [
//                      ["id('ComparisonOperatorCaseNodesetNegative5to5')/*", "id('ComparisonOperatorCaseNodeset4to8')/*"],
//                      [true, true], doc
//                  ],
//                  [
//                      ["id('ComparisonOperatorCaseNodesetNegative5to5')/*", "id('ComparisonOperatorCaseNodeset6to10')/*"],
//                      [false, true], doc
//                  ]
//              ];//

//              for (k = 0; k < ops.length; k++) // different operators
//              {
//                  for (j = 0; j < 2; j++) // switch parameter order
//                  {
//                      for (i = 0; i < input.length; i++) // all cases
//                      {
//                          expr = input[i][0][j % 2] + " " + ops[k] + " " + input[i][0][(j + 1) % 2];
//                          result = documentEvaluate(expr, input[i][2], null, win.XPathResult.BOOLEAN_TYPE, null);
//                          Y.Assert.areSame(input[i][1][k], result.booleanValue, 'Values should be the same. (xpath: "' + expr + '")');
//                      }
//                  }
//              }
//          },//

//          testLessGreaterEquals: function() {
//              var result, input, i, expr, k,
//                  ops = ['<', '<=', '>', '>='];//

//              input = [
//                  [
//                      ["1", "2"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["1", "1"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["1", "0"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["1", "'2'"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["1", "'1'"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["1", "'0'"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["2", "true()"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["1", "true()"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["1", "false()"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["0", "false()"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["0", "true()"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["-10", "*"],
//                      [true, true, false, false], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["10", "*"],
//                      [false, false, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["5", "*"],
//                      [false, true, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["2", "*"],
//                      [true, true, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["0", "*"],
//                      [false, false, false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],//

//                  [
//                      ["true()", "2"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["true()", "1"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["false()", "1"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["false()", "0"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["true()", "0"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["true()", "true()"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["true()", "false()"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["false()", "false()"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["false()", "true()"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["true()", "'1'"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["true()", "''"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["false()", "'0'"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["false()", "''"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["true()", "*"],
//                      [false, true, false, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["true()", "*"],
//                      [false, false, true, true], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],
//                  [
//                      ["false()", "*"],
//                      [true, true, false, false], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["false()", "*"],
//                      [false, true, false, true], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],//

//                  [
//                      ["'2'", "1"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["'1'", "1"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["'0'", "1"],
//                      [true, true, false, false], doc
//                  ],
//                  [
//                      ["'1'", "true()"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["''", "true()"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["'0'", "false()"],
//                      [false, true, false, true], doc
//                  ],
//                  [
//                      ["''", "false()"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["'1a'", "'1a'"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["'1'", "'0'"],
//                      [false, false, true, true], doc
//                  ],
//                  [
//                      ["''", "''"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["''", "'0'"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["'4'", "*"],
//                      [true, true, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["'aaa'", "*"],
//                      [false, false, false, false], doc.getElementById('ComparisonOperatorCaseNodesetStrings')
//                  ],
//                  [
//                      ["''", "*"],
//                      [false, false, false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],//

//                  [
//                      ["*", "-10"],
//                      [false, false, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "10"],
//                      [true, true, false, false], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "5"],
//                      [true, true, false, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "2"],
//                      [true, true, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "0"],
//                      [false, false, false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],
//                  [
//                      ["*", "true()"],
//                      [false, true, false, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "true()"],
//                      [true, true, false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],
//                  [
//                      ["*", "false()"],
//                      [false, false, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "false()"],
//                      [false, true, false, true], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],
//                  [
//                      ["*", "'4'"],
//                      [true, true, true, true], doc.getElementById('ComparisonOperatorCaseNodesetNegative5to5')
//                  ],
//                  [
//                      ["*", "'aaa'"],
//                      [false, false, false, false], doc.getElementById('ComparisonOperatorCaseNodesetStrings')
//                  ],
//                  [
//                      ["*", "''"],
//                      [false, false, false, false], doc.getElementById('ComparisonOperatorCaseNodesetEmpty')
//                  ],
//                  [
//                      ["id('ComparisonOperatorCaseNodesetNegative5to5')/*", "id('ComparisonOperatorCaseNodesetEmpty')/*"],
//                      [false, false, false, false], doc
//                  ],
//                  [
//                      ["id('ComparisonOperatorCaseNodesetNegative5to5')/*", "id('ComparisonOperatorCaseNodeset4to8')/*"],
//                      [true, true, true, true], doc
//                  ],
//                  [
//                      ["id('ComparisonOperatorCaseNodesetNegative5to5')/*", "id('ComparisonOperatorCaseNodeset6to10')/*"],
//                      [true, true, false, false], doc
//                  ]
//              ];//

//              for (k = 0; k < ops.length; k++) // different operators
//              {
//                  for (i = 0; i < input.length; i++) // all cases
//                  {
//                      expr = input[i][0][0] + " " + ops[k] + " " + input[i][0][1];
//                      result = documentEvaluate(expr, input[i][2], null, win.XPathResult.BOOLEAN_TYPE, null);
//                      Y.Assert.areSame(input[i][1][k], result.booleanValue, 'Values should be the same. (xpath: "' + expr + '")');
//                  }
//              }
//          }
//      });//

//      tests.UnionOperatorTestCase = new Y.Test.Case({
//          name: 'Union Operator Tests',//

//          setUp: function() {},//

//          tearDown: function() {},//

//          _should: {
//              error: {},
//              ignore: {}
//          },//

//          testElementNode: function() {
//              checkNodeResult("id('eee40') | id('eee20') | id('eee25') | id('eee10') | id('eee30') | id('eee50')", doc, [
//                  doc.getElementById('eee10'),
//                  doc.getElementById('eee20'),
//                  doc.getElementById('eee25'),
//                  doc.getElementById('eee30'),
//                  doc.getElementById('eee40'),
//                  doc.getElementById('eee50')
//              ]);
//          },//

//          testAttributeElementContains: function() {
//              checkNodeResult("id('eee40')/attribute::*[1] | id('eee30')", doc, [
//                  doc.getElementById('eee30'),
//                  filterAttributes(doc.getElementById('eee40').attributes)[0]
//              ]);
//          },//

//          testAttributeElementSame: function() {
//              checkNodeResult("id('eee40')/attribute::*[1] | id('eee40')", doc, [
//                  doc.getElementById('eee40'),
//                  filterAttributes(doc.getElementById('eee40').attributes)[0]
//              ]);
//          },//

//          testAttributeElementDifferentTrees: function() {
//              checkNodeResult("id('eee40')/attribute::*[1] | id('eee20')", doc, [
//                  doc.getElementById('eee20'),
//                  filterAttributes(doc.getElementById('eee40').attributes)[0]
//              ]);
//          },//

//          testAttributeElementUnderAttribute: function() {
//              checkNodeResult("id('eee40') | id('eee30')/attribute::*[1]", doc, [
//                  filterAttributes(doc.getElementById('eee30').attributes)[0],
//                  doc.getElementById('eee40')
//              ]);
//          },//

//          testAttributeElementBothUnderElement: function() {
//              checkNodeResult("id('eee40') | id('eee35')/attribute::*[1]", doc, [
//                  filterAttributes(doc.getElementById('eee35').attributes)[0],
//                  doc.getElementById('eee40')
//              ]);
//          },//

//          testAttributeAttributeDifferentElements: function() {
//              checkNodeResult("id('eee35')/attribute::*[1] | id('eee40')/attribute::*[1]", doc, [
//                  filterAttributes(doc.getElementById('eee35').attributes)[0],
//                  filterAttributes(doc.getElementById('eee40').attributes)[0]
//              ]);
//          },//

//          testAttributeAttributeContains: function() {
//              checkNodeResult("id('eee30')/attribute::*[1] | id('eee40')/attribute::*[1]", doc, [
//                  filterAttributes(doc.getElementById('eee30').attributes)[0],
//                  filterAttributes(doc.getElementById('eee40').attributes)[0]
//              ]);
//          },//

//          testAttributeAttributeContainsReverse: function() {
//              checkNodeResult("id('eee40')/attribute::*[1] | id('eee30')/attribute::*[1]", doc, [
//                  filterAttributes(doc.getElementById('eee30').attributes)[0],
//                  filterAttributes(doc.getElementById('eee40').attributes)[0]
//              ]);
//          },//

//          testAttributeAttributeSameElement: function() {
//              checkNodeResult("id('eee40')/attribute::*[2] | id('eee40')/attribute::*[1]", doc, [
//                  filterAttributes(doc.getElementById('eee40').attributes)[0],
//                  filterAttributes(doc.getElementById('eee40').attributes)[1]
//              ]);
//          },//

//          testNamespaceAttributeSameElement: function() {
//              var result = documentEvaluate("id('nss25')/namespace::*", doc, null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);//

//              checkNodeResult("id('nss25')/namespace::* | id('nss25')/attribute::*", doc,
//                  snapshotToArray(result).concat(
//                      filterAttributes(doc.getElementById('nss25').attributes)
//                  )
//              );
//          },//

//          testNamespaceNamespaceSameElement: function() {
//              var result = documentEvaluate("id('nss40')/namespace::*", doc, null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);//

//              checkNodeResult("id('nss40')/namespace::* | id('nss40')/namespace::*", doc,
//                  snapshotToArray(result)
//              );
//          },//

//          testNamespaceAttributeElement: function() {
//              var result = documentEvaluate("id('nss40')/namespace::*", doc, null, win.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);//

//              checkNodeResult("id('nss40')/namespace::* | id('nss25')/attribute::* | id('nss25')", doc, [
//                  doc.getElementById('nss25')
//              ].concat(
//                  filterAttributes(doc.getElementById('nss25').attributes)
//              ).concat(
//                  snapshotToArray(result)
//              ));
//          }
//      });//

//      var suite = new Y.Test.Suite("DOM XPath Suite");
//      //suite.add(tests.XPathExceptionCase);
//      suite.add(tests.FunctionNodesetIdCase);
//      suite.add(tests.StepNodeTestNameTestCase);
//      suite.add(tests.XPathNSResolverCase);
//      suite.add(tests.XPathEvaluatorCreateExpressionCase);
//      suite.add(tests.FunctionBooleanCase);
//      suite.add(tests.FunctionNumberCase);
//      suite.add(tests.FunctionStringCase);
//      suite.add(tests.FunctionNodesetCase);
//      suite.add(tests.FunctionJavarosaCase);
//      suite.add(tests.NumberOperatorCase);
//      suite.add(tests.AndOrOperatorCase);
//      suite.add(tests.XPathExpressionEvaluateCase);
//      suite.add(tests.StepAxisCase);
//      suite.add(tests.StepNodeTestNodeTypeCase);
//      suite.add(tests.LocationPathCase);
//      suite.add(tests.ComparisonOperatorCase);
//      suite.add(tests.UnionOperatorTestCase);//

//      return suite;
//  }
//}, '0.0.1', {
//  requires: ["node", "test"]
//});
