/* global define, describe, xdescribe, require, it, xit, before, after, beforeEach, afterEach, expect, Blob, doc, win, docEvaluate, documentEvaluate, documentCreateNSResolver, window, filterAttributes, loadXMLFile, helpers, XPathJS*/
"use strict";

describe('namespace resolver', function() {

    it('looks up the namespaceURIElement', function() {
        var node = doc.getElementById("testXPathNSResolverNode");
        var resolver = documentCreateNSResolver(node);

        // check type
        expect(resolver).to.be.an.instanceOf(win.XPathNSResolver);
        //Y.Assert.isInstanceOf(win.XPathNSResolver, resolver);
        expect(resolver.lookupNamespaceURI).to.be.a('function');
        //Y.Assert.areSame("function", typeof resolver.lookupNamespaceURI); 

        // check preconfigured namespaces
        expect(resolver.lookupNamespaceURI('xml')).to.equal('http://www.w3.org/XML/1998/namespace');
        //Y.Assert.areSame('http://www.w3.org/XML/1998/namespace', resolver.lookupNamespaceURI('xml'));
        expect(resolver.lookupNamespaceURI('xmlns')).to.equal('http://www.w3.org/2000/xmlns/');
        //Y.Assert.areSame('http://www.w3.org/2000/xmlns/', resolver.lookupNamespaceURI('xmlns')); 

        // check namespaces on current element
        expect(resolver.lookupNamespaceURI('xforms')).to.equal('http://www.w3.org/2002/xforms');
        //Y.Assert.areSame('http://www.w3.org/2002/xforms', resolver.lookupNamespaceURI('xforms'));
        expect(resolver.lookupNamespaceURI('nsnotexists')).to.equal(null);
        //Y.Assert.areSame(null, resolver.lookupNamespaceURI('nsnotexists'));

        // check default namespace
        resolver = documentCreateNSResolver(helpers.getNextChildElementNode(node));
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/TR/REC-html40');
        //Y.Assert.areSame('http://www.w3.org/TR/REC-html40', resolver.lookupNamespaceURI(''));
    });

    it('looks up the namespaceURIDocument', function() {
        var resolver = documentCreateNSResolver(doc);

        expect(resolver).to.be.an.instanceOf(win.XPathNSResolver);
        //Y.Assert.isInstanceOf(win.XPathNSResolver, resolver);

        expect(resolver.lookupNamespaceURI).to.be.a('function');
        //Y.Assert.areSame("function", typeof resolver.lookupNamespaceURI);

        expect(resolver.lookupNamespaceURI('ev')).to.equal('http://some-namespace.com/nss');
        //Y.Assert.areSame('http://some-namespace.com/nss', resolver.lookupNamespaceURI('ev'));
    });

    it('looks up the namespaceURIDocumentElement', function() {
        var node = doc.documentElement;
        var resolver = documentCreateNSResolver(node);

        expect(resolver).to.be.an.instanceOf(win.XPathNSResolver);
        //Y.Assert.isInstanceOf(win.XPathNSResolver, resolver);
        expect(resolver.lookupNamespaceURI).to.be.a('function');
        //Y.Assert.areSame("function", typeof resolver.lookupNamespaceURI);

        expect(resolver.lookupNamespaceURI('ev')).to.equal('http://some-namespace.com/nss');
        //Y.Assert.areSame('http://some-namespace.com/nss', resolver.lookupNamespaceURI('ev'));
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/1999/xhtml');
        //Y.Assert.areSame('http://www.w3.org/1999/xhtml', resolver.lookupNamespaceURI(''));

        // Make sure default xhtml namespace is correct
        node.removeAttribute('xmlns');
        expect(resolver.lookupNamespaceURI('')).to.equal(null);
        //Y.Assert.areSame(null, resolver.lookupNamespaceURI(''));

        // Change default root namespace
        helpers.setAttribute(node, 'http://www.w3.org/2000/xmlns/', 'xmlns', 'some-namespace');
        expect(resolver.lookupNamespaceURI('')).to.equal('some-namespace');
        //Y.Assert.areSame('some-namespace', resolver.lookupNamespaceURI(''));

        // Revert back to default xhtml namespace
        helpers.setAttribute(node, 'http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/1999/xhtml');
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/1999/xhtml');
        //Y.Assert.areSame('http://www.w3.org/1999/xhtml', resolver.lookupNamespaceURI(''));
    });

    it('looks up the namespaceURIAttribute', function() {
        var attribute, i, resolver,
            node = doc.documentElement;

        // Check parent nodes for namespace prefix declarations
        for (i = 0; i < node.attributes.length; i++) {
            if (node.attributes[i].specified) {
                attribute = node.attributes[i];
                break;
            }
        }

        expect(attribute).to.be.an('object');
        //Y.Assert.isObject(attribute);

        resolver = documentCreateNSResolver(attribute);
        expect(resolver.lookupNamespaceURI('ev')).to.equal('http://some-namespace.com/nss');
        //Y.Assert.areSame('http://some-namespace.com/nss', resolver.lookupNamespaceURI('ev')); //

        // Check parent nodes for default namespace declaration
        attribute = null;
        node = doc.getElementById("testXPathNSResolverNode");

        for (i = 0; i < node.attributes.length; i++) {
            if (node.attributes[i].specified) {
                attribute = node.attributes[i];
                break;
            }
        }

        expect(attribute).to.be.an('object');
        //Y.Assert.isObject(attribute);

        resolver = documentCreateNSResolver(attribute);
        expect(resolver.lookupNamespaceURI('xforms')).to.equal('http://www.w3.org/2002/xforms');
        //Y.Assert.areSame('http://www.w3.org/2002/xforms', resolver.lookupNamespaceURI('xforms'));
    });

    it('looks up namespaceURIs that have changed', function() {
        var node = helpers.getNextChildElementNode(doc.getElementById("testXPathNSResolverNode"));
        var resolver = documentCreateNSResolver(node);

        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/TR/REC-html40');
        //Y.Assert.areSame('http://www.w3.org/TR/REC-html40', resolver.lookupNamespaceURI(''));

        // Remove default namespace
        node.removeAttribute('xmlns');
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/1999/xhtml');
        //Y.Assert.areSame('http://www.w3.org/1999/xhtml', resolver.lookupNamespaceURI(''));

        // Change default namespace to some other namespace
        helpers.setAttribute(node, 'http://www.w3.org/2000/xmlns/', 'xmlns', 'some-namespace');
        expect(resolver.lookupNamespaceURI('')).to.equal('some-namespace');
        //Y.Assert.areSame('some-namespace', resolver.lookupNamespaceURI(''));

        // No default namespace
        helpers.setAttribute(node, 'http://www.w3.org/2000/xmlns/', 'xmlns', '');
        expect(resolver.lookupNamespaceURI('')).to.equal('');
        //Y.Assert.areSame('', resolver.lookupNamespaceURI(''));

        // Back to original
        helpers.setAttribute(node, 'http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/TR/REC-html40');
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/TR/REC-html40');
        //Y.Assert.areSame('http://www.w3.org/TR/REC-html40', resolver.lookupNamespaceURI(''));
    });

    it('looks up a hierarchical namespaceURI', function() {
        var node = doc.getElementById("testXPathNSResolverNode");
        var resolver = documentCreateNSResolver(node);

        // check prefix in parents
        expect(resolver.lookupNamespaceURI('ev')).to.equal('http://some-namespace.com/nss');
        //Y.Assert.areSame('http://some-namespace.com/nss', resolver.lookupNamespaceURI('ev'));

        // check default prefix in parents
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/1999/xhtml');
        //Y.Assert.areSame('http://www.w3.org/1999/xhtml', resolver.lookupNamespaceURI(''));

        resolver = documentCreateNSResolver(
            helpers.getNextChildElementNode(helpers.getNextChildElementNode(node))
        );
        expect(resolver.lookupNamespaceURI('')).to.equal('http://www.w3.org/TR/REC-html40');
        //Y.Assert.areSame('http://www.w3.org/TR/REC-html40', resolver.lookupNamespaceURI(''));
    });
});
