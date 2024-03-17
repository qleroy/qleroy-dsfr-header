/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from 'react';
import { styled } from '@superset-ui/core';
import { QleroyHeaderDsfrProps, QleroyHeaderDsfrStylesProps } from './types';

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

const Styles = styled.div<QleroyHeaderDsfrStylesProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

export default function QleroyHeaderDsfr(props: QleroyHeaderDsfrProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const { data, height, width, hrefAction1, hrefAction2, hrefAction3, textAction1, textAction2, textAction3, iconClassNameAction1 } = props;

  const rootElem = createRef<HTMLDivElement>();

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  });

  console.log('Plugin props', props);


  return (
    <Styles
      ref={rootElem}
      boldText={props.boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
    >
      <header role="banner" className="fr-header">
        <div className="fr-header__body">
          <div className="fr-container">
            <div className="fr-header__body-row">
              <div className="fr-header__brand fr-enlarge-link">
                <div className="fr-header__brand-top">
                  <div className="fr-header__logo">
                    <p className="fr-logo">
                      République
                      <br></br>Française
                    </p>
                  </div>
                  <div className="fr-header__operator">
                    <img className="fr-responsive-img" style={{ maxWidth: '9.0625rem' }} src="/static/assets/dsfr/tool/example/img/placeholder.16x9.png" alt="alt" />
                  </div>
                  <div className="fr-header__navbar">
                    <button className="fr-btn--search fr-btn" data-fr-opened="false" aria-controls="modal-575" id="button-576" title="Rechercher">
                      Rechercher
                    </button>
                    <button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-577" aria-haspopup="menu" id="button-578" title="Menu">
                      Menu
                    </button>
                  </div>
                </div>
                <div className="fr-header__service">
                  <a href="/" title="Accueil">
                    <p className="fr-header__service-title">
                      Nom du site / service
                    </p>
                  </a>
                  <p className="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                </div>
              </div>
              <div className="fr-header__tools">
                <div className="fr-header__tools-links">
                  <ul className="fr-btns-group">
                    <li>
                      <a className={iconClassNameAction1} href={hrefAction1}>
                        {textAction1}
                      </a>
                    </li>
                    <li>
                      <a className="fr-btn fr-icon-lock-line" href={hrefAction2}>
                        {textAction2}
                      </a>
                    </li>
                    <li>
                      <a className="fr-btn fr-icon-account-line" href={hrefAction3}>
                        {textAction3}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="fr-header__search fr-modal" id="modal-575">
                  <div className="fr-container fr-container-lg--fluid">
                    <button className="fr-btn--close fr-btn" aria-controls="modal-575" title="Fermer">
                      Fermer
                    </button>
                    <div className="fr-search-bar" id="search-574" role="search">
                      <label className="fr-label" for="search-574-input" >
                        Rechercher
                      </label>
                      <input className="fr-input" placeholder="Rechercher" type="search" id="search-574-input" name="search-574-input" />
                      <button className="fr-btn" title="Rechercher">
                        Rechercher
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-header__menu fr-modal" id="modal-577" aria-labelledby="button-578">
          <div className="fr-container">
            <button className="fr-btn--close fr-btn" aria-controls="modal-577" title="Fermer">
              Fermer
            </button>
            <div className="fr-header__menu-links">
            </div>
            <nav className="fr-nav" id="navigation-581" role="navigation" aria-label="Menu principal">
              <ul className="fr-nav__list">
                <li className="fr-nav__item">
                  <a className="fr-nav__link" href="#" target="_self">accès direct</a>
                </li>
                <li className="fr-nav__item">
                  <a className="fr-nav__link" href="#" target="_self">accès direct</a>
                </li>
                <li className="fr-nav__item">
                  <a className="fr-nav__link" href="#" target="_self">accès direct</a>
                </li>
                <li className="fr-nav__item">
                  <a className="fr-nav__link" href="#" target="_self">accès direct</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Styles >
  );
}
