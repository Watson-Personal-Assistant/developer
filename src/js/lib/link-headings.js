/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import compose from 'ramda/src/compose';
import converge from 'ramda/src/converge';
import curry from 'ramda/src/curry';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
import join from 'ramda/src/join';
import map from 'ramda/src/map';
import mapObjIndexed from 'ramda/src/mapObjIndexed';
import props from 'ramda/src/props';
import tail from 'ramda/src/tail';
import useWith from 'ramda/src/useWith';
import zipObj from 'ramda/src/zipObj';

// These functions build the selector(s) for targeting elements.
const getElementById = document.getElementById.bind(document);
const getElements = document.querySelectorAll.bind(document);
const getDescendantSelector = isDirectOnly => (isDirectOnly ? '>' : ' ');
const getSelectorScope = (descendantLimit, scope) => `${scope}${descendantLimit}`;
const getScope = useWith(getSelectorScope, [getDescendantSelector, identity]);
const buildSelector = curry((prefix, element) => `${prefix}${element}`);
const getSelectorTemplate = compose(buildSelector, getScope);
const getSelectorList = compose(join(','), map);

// These functions create anchor links for elements.
const buildAnchorLink = curry((linkClass, id, text) => (
  `<a class="${linkClass}" href="#${id}">${text}</a>`
));

// These functions have side-effects, so we quarantine them here.
const unsafe = {
  updateInnerHTML: (text, id) => {
    const element = getElementById(id);
    element.innerHTML = text;
  },
};

// This function exposes a public API so people can, y’know, _use_ this module.
export default function initialize({
  elementsToTarget = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  limitToScope = 'body',
  limitToDirectDescendants = false,
  linkClass = 'link-headings__permalink',
} = {}) {
  const templateFunc = getSelectorTemplate(limitToDirectDescendants, limitToScope);
  const linkTemplateFunc = buildAnchorLink(linkClass);
  const getLinksAsKeyedObj = converge(zipObj, [
    map(head),
    map(converge(linkTemplateFunc, [head, tail])),
  ]);

  Promise.resolve(getSelectorList(templateFunc, elementsToTarget))
    .then(getElements)
    .then(map(props(['id', 'textContent'])))
    .then(getLinksAsKeyedObj)
    .then(mapObjIndexed(unsafe.updateInnerHTML));
}
