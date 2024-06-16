'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">init documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' : 'data-bs-target="#xs-components-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' :
                                            'id="xs-components-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' }>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' :
                                        'id="xs-injectables-links-module-AdminModule-fe62882d5fcf328cf093f57cf37660df05bd9068d6ff209f10abb4d7b2893b2e158b2c87f5839c2bd3a5bfda52d2c78da63ef23bb2c58804d6bc4d5cde7888f3"' }>
                                        <li class="link">
                                            <a href="injectables/AdminDashboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-fd82594c037bc4481a185b3bf1e23418c9896bab352c5cdf6ee5a0472c971ded9a2d7e88b5d7c2d19a634ee9ae50e2db77dfa69b09c18a74778620c56c4cd96b"' : 'data-bs-target="#xs-components-links-module-AppModule-fd82594c037bc4481a185b3bf1e23418c9896bab352c5cdf6ee5a0472c971ded9a2d7e88b5d7c2d19a634ee9ae50e2db77dfa69b09c18a74778620c56c4cd96b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fd82594c037bc4481a185b3bf1e23418c9896bab352c5cdf6ee5a0472c971ded9a2d7e88b5d7c2d19a634ee9ae50e2db77dfa69b09c18a74778620c56c4cd96b"' :
                                            'id="xs-components-links-module-AppModule-fd82594c037bc4481a185b3bf1e23418c9896bab352c5cdf6ee5a0472c971ded9a2d7e88b5d7c2d19a634ee9ae50e2db77dfa69b09c18a74778620c56c4cd96b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthenticationModule-4d3463291371d0055fdc2d129c3a0e846496670495b27822712acf0ea80623d6e6e22a355d9f2e734b80a72339c7d1d94c108ace45a2e8e0b79d989ac13f826f"' : 'data-bs-target="#xs-components-links-module-AuthenticationModule-4d3463291371d0055fdc2d129c3a0e846496670495b27822712acf0ea80623d6e6e22a355d9f2e734b80a72339c7d1d94c108ace45a2e8e0b79d989ac13f826f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-4d3463291371d0055fdc2d129c3a0e846496670495b27822712acf0ea80623d6e6e22a355d9f2e734b80a72339c7d1d94c108ace45a2e8e0b79d989ac13f826f"' :
                                            'id="xs-components-links-module-AuthenticationModule-4d3463291371d0055fdc2d129c3a0e846496670495b27822712acf0ea80623d6e6e22a355d9f2e734b80a72339c7d1d94c108ace45a2e8e0b79d989ac13f826f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomModule.html" data-type="entity-link" >CustomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' : 'data-bs-target="#xs-components-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' :
                                            'id="xs-components-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' }>
                                            <li class="link">
                                                <a href="components/ChatBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatUserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatUserListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutBtn.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutBtn</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' : 'data-bs-target="#xs-pipes-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' :
                                            'id="xs-pipes-links-module-CustomModule-901726601a4fa4372d38a87577facf826e54c190a5a0009041d7544f57aaa5d270151f1dbfa7fefbc06f2ef2b6dd2907e79d5a35dd59693a6d6e803391c32a71"' }>
                                            <li class="link">
                                                <a href="pipes/TimeStampConvertPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimeStampConvertPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-8fc616da12fbfc4aafa4eadabbc25f78efc0f47fe82ab7e31491fb9371ac494089f31a99745e7920411e5d3b8c6b339d9cc1a4c0e44de4009c31ef5d7d61bf90"' : 'data-bs-target="#xs-components-links-module-UserModule-8fc616da12fbfc4aafa4eadabbc25f78efc0f47fe82ab7e31491fb9371ac494089f31a99745e7920411e5d3b8c6b339d9cc1a4c0e44de4009c31ef5d7d61bf90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-8fc616da12fbfc4aafa4eadabbc25f78efc0f47fe82ab7e31491fb9371ac494089f31a99745e7920411e5d3b8c6b339d9cc1a4c0e44de4009c31ef5d7d61bf90"' :
                                            'id="xs-components-links-module-UserModule-8fc616da12fbfc4aafa4eadabbc25f78efc0f47fe82ab7e31491fb9371ac494089f31a99745e7920411e5d3b8c6b339d9cc1a4c0e44de4009c31ef5d7d61bf90"' }>
                                            <li class="link">
                                                <a href="components/ChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthTokenInterceptor.html" data-type="entity-link" >AuthTokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatBoxCommunicateService.html" data-type="entity-link" >ChatBoxCommunicateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatServiceService.html" data-type="entity-link" >ChatServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackbarService.html" data-type="entity-link" >SnackbarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocketService.html" data-type="entity-link" >SocketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileService.html" data-type="entity-link" >UserProfileService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/LoginAuth.html" data-type="entity-link" >LoginAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseMessage.html" data-type="entity-link" >ResponseMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendMessageType.html" data-type="entity-link" >SendMessageType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpAuth.html" data-type="entity-link" >SignUpAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserData.html" data-type="entity-link" >UserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserDetailsTableModel.html" data-type="entity-link" >UserDetailsTableModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});