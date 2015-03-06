/* global define, describe, xdescribe, require, it, xit, before, after, beforeEach, afterEach, expect, Blob, documentEvaluate, window, loadXMLFile, helpers, XPathJS*/
"use strict";

var doc, win, docEvaluate;

before(function(done) {
    console.log('running before');
    /*
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', '/base/test/doc.xml');

    iframe.onload = function() {
        XPathJS.bindDomLevel3XPath(doc);
        win = window;
        doc = iframe.contentWindow.document;
        console.log(typeof win, doc);
        console.log('el1', doc.getElementById("FunctionSumCaseJavarosa"));

        docEvaluate = win.document.evaluate;
        done();
    };
    document.body.appendChild(iframe);
    */

    loadXMLFile('/base/test/doc.xml', function(xmlStr) {
        var parser = new window.DOMParser();
        win = window;
        XPathJS.bindDomLevel3XPath();
        doc = parser.parseFromString(xmlStr, "text/xml");
        docEvaluate = win.document.evaluate;
        done();
    });
});
