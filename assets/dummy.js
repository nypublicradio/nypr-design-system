'use strict';



;define("dummy/app", ["exports", "dummy/resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});

;define("dummy/component-manifest", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "blank-template": {
      "children": [],
      "parents": ["nypr-a-media-object", "nypr-m-newsletter-form", "nypr-m-newsletter", "nypr-o-article-footer", "nypr-o-article-header/lead", "nypr-o-featured-block-list", "nypr-o-footer", "nypr-o-header/left", "nypr-o-header/menu", "nypr-o-newsletter-tout"]
    },
    "nypr-a-ad-label": {
      "children": [],
      "parents": []
    },
    "nypr-a-button": {
      "children": ["link-to"],
      "parents": ["nypr-m-box-banner", "nypr-m-inline-search/form", "nypr-m-inline-search/open", "nypr-o-donate", "nypr-o-header/left", "nypr-o-header/menu"]
    },
    "nypr-a-kicker": {
      "children": ["link-to"],
      "parents": ["nypr-m-block/eyebrow"]
    },
    "nypr-a-media-object": {
      "children": ["blank-template"],
      "parents": []
    },
    "nypr-a-picture": {
      "children": [],
      "parents": ["nypr-m-author-block", "nypr-m-block/media", "nypr-m-figure/image", "nypr-o-gallery-overlay/slide", "nypr-o-newsletter-tout"]
    },
    "nypr-a-section-heading": {
      "children": [],
      "parents": []
    },
    "nypr-a-story-headline": {
      "children": [],
      "parents": ["nypr-o-article-header/top"]
    },
    "nypr-a-svg": {
      "children": [],
      "parents": ["nypr-a-toggle-box/trigger", "nypr-m-block-meta", "nypr-m-box-banner", "nypr-m-figcaption/caption", "nypr-m-figcaption/credit", "nypr-m-inline-search/form", "nypr-m-inline-search/open", "nypr-m-newsletter", "nypr-m-share-tools/link", "nypr-m-share-tools/share", "nypr-m-to-top", "nypr-o-article-header/meta", "nypr-o-donate", "nypr-o-footer", "nypr-o-gallery-overlay", "nypr-o-header/menu", "nypr-o-newsletter-tout"]
    },
    "nypr-a-svg/arrow-dashed": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/arrow-skinny": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/arrow-stylish": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/audio": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/caret-down": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/check": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/close": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/comment": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/email": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/facebook": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/gallery": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/gothamist-logo--stacked": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/gothamist-logo": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/instagram": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/linked-in": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/nypr-logo": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/party-confetti": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/pinterest": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/pointing-finger": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/reddit": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/search": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/spotify": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/twitter": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/video": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/wnyc-logo": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/wqxr-logo": {
      "children": [],
      "parents": []
    },
    "nypr-a-svg/youtube": {
      "children": [],
      "parents": []
    },
    "nypr-a-tag": {
      "children": ["link-to"],
      "parents": ["nypr-m-tags"]
    },
    "nypr-a-toggle-box": {
      "children": ["basic-dropdown", "nypr-a-toggle-box/trigger"],
      "parents": ["nypr-m-brands-linkroll", "nypr-o-gallery-overlay/slide"]
    },
    "nypr-a-toggle-box/trigger": {
      "children": ["nypr-a-svg"],
      "parents": ["nypr-a-toggle-box"]
    },
    "nypr-m-author-block": {
      "children": ["link-to", "each-in", "nypr-m-share-tools", "nypr-a-picture"],
      "parents": []
    },
    "nypr-m-block-list": {
      "children": [],
      "parents": []
    },
    "nypr-m-block-meta": {
      "children": ["link-to", "nypr-a-svg"],
      "parents": ["nypr-m-block/body"]
    },
    "nypr-m-block": {
      "children": ["nypr-m-block/title", "nypr-m-block/media", "nypr-m-block/object"],
      "parents": ["nypr-m-block/title", "nypr-m-text-banner"]
    },
    "nypr-m-block/body": {
      "children": ["nypr-m-block/text", "nypr-m-block-meta"],
      "parents": ["nypr-m-block/object"]
    },
    "nypr-m-block/eyebrow": {
      "children": ["nypr-a-kicker"],
      "parents": ["nypr-m-block/object"]
    },
    "nypr-m-block/media": {
      "children": ["link-to", "nypr-a-picture"],
      "parents": ["nypr-m-block"]
    },
    "nypr-m-block/object": {
      "children": ["nypr-m-block/eyebrow", "nypr-m-block/title", "nypr-m-block/body"],
      "parents": ["nypr-m-block"]
    },
    "nypr-m-block/text": {
      "children": [],
      "parents": ["nypr-m-block/body"]
    },
    "nypr-m-block/title-layout": {
      "children": ["link-to"],
      "parents": ["nypr-m-block/title"]
    },
    "nypr-m-block/title": {
      "children": ["nypr-m-block/title-layout"],
      "parents": ["nypr-m-block", "nypr-m-block/object"]
    },
    "nypr-m-box-banner": {
      "children": ["nypr-m-box-banner/title", "nypr-m-box-banner/body", "nypr-a-button", "nypr-a-svg"],
      "parents": []
    },
    "nypr-m-box-banner/body": {
      "children": ["nypr-m-box-banner/dek", "nypr-m-box-banner/cta"],
      "parents": ["nypr-m-box-banner"]
    },
    "nypr-m-box-banner/cta": {
      "children": [],
      "parents": ["nypr-m-box-banner/body"]
    },
    "nypr-m-box-banner/dek": {
      "children": [],
      "parents": ["nypr-m-box-banner/body"]
    },
    "nypr-m-box-banner/title": {
      "children": [],
      "parents": ["nypr-m-box-banner"]
    },
    "nypr-m-brands-linkroll": {
      "children": ["nypr-a-toggle-box"],
      "parents": ["nypr-o-footer", "nypr-o-header/menu"]
    },
    "nypr-m-breadcrumb": {
      "children": ["link-to"],
      "parents": ["nypr-o-article-header/top"]
    },
    "nypr-m-byline": {
      "children": ["link-to"],
      "parents": ["nypr-o-article-header/meta"]
    },
    "nypr-m-figcaption": {
      "children": ["nypr-m-figcaption/caption", "nypr-m-figcaption/credit"],
      "parents": ["nypr-m-figcaption/caption", "nypr-m-figure"]
    },
    "nypr-m-figcaption/caption": {
      "children": ["nypr-m-figcaption/credit", "nypr-a-svg"],
      "parents": ["nypr-m-figcaption"]
    },
    "nypr-m-figcaption/credit": {
      "children": ["nypr-a-svg"],
      "parents": ["nypr-m-figcaption", "nypr-m-figcaption/caption"]
    },
    "nypr-m-figure": {
      "children": ["nypr-m-figure/image", "nypr-m-figcaption"],
      "parents": ["nypr-m-gallery-lead"]
    },
    "nypr-m-figure/image": {
      "children": ["nypr-a-picture"],
      "parents": ["nypr-m-figure"]
    },
    "nypr-m-gallery-lead": {
      "children": ["nypr-m-figure"],
      "parents": []
    },
    "nypr-m-inline-search": {
      "children": ["nypr-m-inline-search/form", "nypr-m-inline-search/open"],
      "parents": ["nypr-o-header/menu", "nypr-o-header/right"]
    },
    "nypr-m-inline-search/form": {
      "children": ["nypr-a-button", "nypr-a-svg"],
      "parents": ["nypr-m-inline-search"]
    },
    "nypr-m-inline-search/open": {
      "children": ["nypr-a-button", "nypr-a-svg"],
      "parents": ["nypr-m-inline-search"]
    },
    "nypr-m-nav-read-more": {
      "children": ["link-to"],
      "parents": []
    },
    "nypr-m-newsletter-form": {
      "children": ["blank-template", "nypr-m-newsletter-form/input", "nypr-m-newsletter-form/button"],
      "parents": ["nypr-m-newsletter", "nypr-o-newsletter-tout"]
    },
    "nypr-m-newsletter-form/button": {
      "children": [],
      "parents": ["nypr-m-newsletter-form"]
    },
    "nypr-m-newsletter": {
      "children": ["blank-template", "nypr-a-svg", "nypr-m-newsletter-form"],
      "parents": ["nypr-o-newsletter-tout"]
    },
    "nypr-m-progress-bar": {
      "children": [],
      "parents": ["nypr-o-header"]
    },
    "nypr-m-pullquote": {
      "children": ["nypr-m-pullquote/quote", "nypr-m-pullquote/attribution"],
      "parents": []
    },
    "nypr-m-pullquote/attribution": {
      "children": [],
      "parents": ["nypr-m-pullquote"]
    },
    "nypr-m-pullquote/quote": {
      "children": [],
      "parents": ["nypr-m-pullquote"]
    },
    "nypr-m-secondary-nav": {
      "children": ["link-to"],
      "parents": ["nypr-o-footer", "nypr-o-header/menu"]
    },
    "nypr-m-share-tools": {
      "children": ["nypr-m-share-tools/share", "nypr-m-share-tools/link"],
      "parents": ["nypr-m-author-block", "nypr-o-footer", "nypr-o-gallery-overlay/slide", "nypr-o-header/menu"]
    },
    "nypr-m-share-tools/link": {
      "children": ["nypr-a-svg"],
      "parents": ["nypr-m-share-tools"]
    },
    "nypr-m-share-tools/share": {
      "children": ["nypr-a-svg"],
      "parents": ["nypr-m-share-tools"]
    },
    "nypr-m-tags": {
      "children": ["nypr-a-tag"],
      "parents": ["nypr-o-article-footer"]
    },
    "nypr-m-text-banner": {
      "children": ["nypr-m-block"],
      "parents": []
    },
    "nypr-m-to-top": {
      "children": ["nypr-a-svg"],
      "parents": ["nypr-o-footer"]
    },
    "nypr-o-article-body": {
      "children": [],
      "parents": []
    },
    "nypr-o-article-footer": {
      "children": ["nypr-m-tags", "nypr-o-contact", "nypr-o-donate", "blank-template"],
      "parents": []
    },
    "nypr-o-article-header": {
      "children": ["nypr-o-article-header/top", "nypr-o-article-header/lead"],
      "parents": []
    },
    "nypr-o-article-header/lead": {
      "children": ["blank-template"],
      "parents": ["nypr-o-article-header"]
    },
    "nypr-o-article-header/meta": {
      "children": ["link-to", "nypr-m-byline", "nypr-o-article-header/publish-date", "nypr-a-svg"],
      "parents": ["nypr-o-article-header/top"]
    },
    "nypr-o-article-header/publish-date": {
      "children": ["moment-format"],
      "parents": ["nypr-o-article-header/meta"]
    },
    "nypr-o-article-header/top": {
      "children": ["nypr-m-breadcrumb", "nypr-a-story-headline", "nypr-o-article-header/meta"],
      "parents": ["nypr-o-article-header"]
    },
    "nypr-o-block-list-group": {
      "children": ["nypr-o-block-list-group/column"],
      "parents": []
    },
    "nypr-o-block-list-group/ad": {
      "children": [],
      "parents": ["nypr-o-block-list-group/column"]
    },
    "nypr-o-block-list-group/column": {
      "children": ["nypr-o-block-list-group/ad"],
      "parents": ["nypr-o-block-list-group"]
    },
    "nypr-o-contact": {
      "children": [],
      "parents": ["nypr-o-article-footer"]
    },
    "nypr-o-donate": {
      "children": ["nypr-a-button", "nypr-a-svg"],
      "parents": ["nypr-o-article-footer"]
    },
    "nypr-o-featured-block-list": {
      "children": ["nypr-o-featured-block-list/heading", "blank-template"],
      "parents": []
    },
    "nypr-o-featured-block-list/heading": {
      "children": [],
      "parents": ["nypr-o-featured-block-list"]
    },
    "nypr-o-footer": {
      "children": ["link-to", "moment-format", "blank-template", "nypr-m-secondary-nav", "nypr-m-to-top", "nypr-a-svg", "nypr-m-share-tools", "nypr-m-brands-linkroll"],
      "parents": []
    },
    "nypr-o-gallery-overlay": {
      "children": ["link-to", "nypr-o-gallery-overlay/slide", "nypr-o-gallery-overlay/billboard", "nypr-a-svg"],
      "parents": []
    },
    "nypr-o-gallery-overlay/billboard": {
      "children": [],
      "parents": ["nypr-o-gallery-overlay"]
    },
    "nypr-o-gallery-overlay/slide": {
      "children": ["nypr-a-picture", "nypr-a-toggle-box", "nypr-m-share-tools"],
      "parents": ["nypr-o-gallery-overlay"]
    },
    "nypr-o-header": {
      "children": ["nypr-o-header/leaderboard", "nypr-o-header/menu", "nypr-o-header/left", "nypr-o-header/nav", "nypr-o-header/right", "nypr-m-progress-bar"],
      "parents": []
    },
    "nypr-o-header/headline": {
      "children": [],
      "parents": ["nypr-o-header/left"]
    },
    "nypr-o-header/leaderboard": {
      "children": [],
      "parents": ["nypr-o-header"]
    },
    "nypr-o-header/left": {
      "children": ["blank-template", "nypr-o-header/headline", "nypr-a-button"],
      "parents": ["nypr-o-header"]
    },
    "nypr-o-header/menu": {
      "children": ["moment-format", "blank-template", "nypr-o-header/nav", "nypr-m-share-tools", "nypr-m-secondary-nav", "nypr-m-inline-search", "nypr-a-button", "nypr-a-svg", "nypr-m-brands-linkroll"],
      "parents": ["nypr-o-header"]
    },
    "nypr-o-header/nav": {
      "children": ["link-to"],
      "parents": ["nypr-o-header", "nypr-o-header/menu"]
    },
    "nypr-o-header/right": {
      "children": ["nypr-m-inline-search"],
      "parents": ["nypr-o-header"]
    },
    "nypr-o-header/share": {
      "children": [],
      "parents": []
    },
    "nypr-o-newsletter-tout": {
      "children": ["blank-template", "nypr-a-picture", "nypr-m-newsletter-form", "nypr-a-svg"],
      "parents": []
    },
    "nypr-o-related-content": {
      "children": ["link-to"],
      "parents": []
    },
    "nypr-o-sponsored-tout": {
      "children": [],
      "parents": []
    }
  };
  _exports.default = _default;
});

;define("dummy/component-route-overrides", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {};
  _exports.default = _default;
});

;define("dummy/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
});

;define("dummy/components/basic-dropdown/content-element", ["exports", "ember-basic-dropdown/components/basic-dropdown/content-element"], function (_exports, _contentElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _contentElement.default;
    }
  });
});

;define("dummy/components/basic-dropdown/content", ["exports", "ember-basic-dropdown/components/basic-dropdown/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _content.default;
    }
  });
});

;define("dummy/components/basic-dropdown/trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});

;define("dummy/components/click-outside", ["exports", "ember-click-outside/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _component.default;
    }
  });
});

;define("dummy/components/component-lineage", ["exports", "component-lineage/components/component-lineage"], function (_exports, _componentLineage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _componentLineage.default;
    }
  });
});

;define("dummy/components/link-to", ["exports", "nypr-design-system/components/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkTo.default;
    }
  });
});

;define("dummy/components/nypr-a-ad-label", ["exports", "nypr-design-system/components/nypr-a-ad-label"], function (_exports, _nyprAAdLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAAdLabel.default;
    }
  });
});

;define("dummy/components/nypr-a-button", ["exports", "nypr-design-system/components/nypr-a-button"], function (_exports, _nyprAButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAButton.default;
    }
  });
});

;define("dummy/components/nypr-a-kicker", ["exports", "nypr-design-system/components/nypr-a-kicker"], function (_exports, _nyprAKicker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAKicker.default;
    }
  });
});

;define("dummy/components/nypr-a-media-object", ["exports", "nypr-design-system/components/nypr-a-media-object"], function (_exports, _nyprAMediaObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAMediaObject.default;
    }
  });
});

;define("dummy/components/nypr-a-picture", ["exports", "nypr-design-system/components/nypr-a-picture"], function (_exports, _nyprAPicture) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAPicture.default;
    }
  });
});

;define("dummy/components/nypr-a-section-heading", ["exports", "nypr-design-system/components/nypr-a-section-heading"], function (_exports, _nyprASectionHeading) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprASectionHeading.default;
    }
  });
});

;define("dummy/components/nypr-a-story-headline", ["exports", "nypr-design-system/components/nypr-a-story-headline"], function (_exports, _nyprAStoryHeadline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAStoryHeadline.default;
    }
  });
});

;define("dummy/components/nypr-a-svg", ["exports", "nypr-design-system/components/nypr-a-svg"], function (_exports, _nyprASvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprASvg.default;
    }
  });
});

;define("dummy/components/nypr-a-tag", ["exports", "nypr-design-system/components/nypr-a-tag"], function (_exports, _nyprATag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprATag.default;
    }
  });
});

;define("dummy/components/nypr-a-toggle-box", ["exports", "nypr-design-system/components/nypr-a-toggle-box"], function (_exports, _nyprAToggleBox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprAToggleBox.default;
    }
  });
});

;define("dummy/components/nypr-a-toggle-box/trigger", ["exports", "nypr-design-system/components/nypr-a-toggle-box/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});

;define("dummy/components/nypr-m-author-block", ["exports", "nypr-design-system/components/nypr-m-author-block"], function (_exports, _nyprMAuthorBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMAuthorBlock.default;
    }
  });
});

;define("dummy/components/nypr-m-block-list", ["exports", "nypr-design-system/components/nypr-m-block-list"], function (_exports, _nyprMBlockList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMBlockList.default;
    }
  });
});

;define("dummy/components/nypr-m-block-meta", ["exports", "nypr-design-system/components/nypr-m-block-meta"], function (_exports, _nyprMBlockMeta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMBlockMeta.default;
    }
  });
});

;define("dummy/components/nypr-m-block", ["exports", "nypr-design-system/components/nypr-m-block"], function (_exports, _nyprMBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMBlock.default;
    }
  });
});

;define("dummy/components/nypr-m-block/body", ["exports", "nypr-design-system/components/nypr-m-block/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _body.default;
    }
  });
});

;define("dummy/components/nypr-m-block/eyebrow", ["exports", "nypr-design-system/components/nypr-m-block/eyebrow"], function (_exports, _eyebrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _eyebrow.default;
    }
  });
});

;define("dummy/components/nypr-m-block/media", ["exports", "nypr-design-system/components/nypr-m-block/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _media.default;
    }
  });
});

;define("dummy/components/nypr-m-block/object", ["exports", "nypr-design-system/components/nypr-m-block/object"], function (_exports, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _object.default;
    }
  });
});

;define("dummy/components/nypr-m-block/text", ["exports", "nypr-design-system/components/nypr-m-block/text"], function (_exports, _text) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _text.default;
    }
  });
});

;define("dummy/components/nypr-m-block/title-layout", ["exports", "nypr-design-system/components/nypr-m-block/title-layout"], function (_exports, _titleLayout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _titleLayout.default;
    }
  });
});

;define("dummy/components/nypr-m-block/title", ["exports", "nypr-design-system/components/nypr-m-block/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _title.default;
    }
  });
});

;define("dummy/components/nypr-m-box-banner", ["exports", "nypr-design-system/components/nypr-m-box-banner"], function (_exports, _nyprMBoxBanner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMBoxBanner.default;
    }
  });
});

;define("dummy/components/nypr-m-box-banner/body", ["exports", "nypr-design-system/components/nypr-m-box-banner/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _body.default;
    }
  });
});

;define("dummy/components/nypr-m-box-banner/cta", ["exports", "nypr-design-system/components/nypr-m-box-banner/cta"], function (_exports, _cta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cta.default;
    }
  });
});

;define("dummy/components/nypr-m-box-banner/dek", ["exports", "nypr-design-system/components/nypr-m-box-banner/dek"], function (_exports, _dek) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _dek.default;
    }
  });
});

;define("dummy/components/nypr-m-box-banner/title", ["exports", "nypr-design-system/components/nypr-m-box-banner/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _title.default;
    }
  });
});

;define("dummy/components/nypr-m-brands-linkroll", ["exports", "nypr-design-system/components/nypr-m-brands-linkroll"], function (_exports, _nyprMBrandsLinkroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMBrandsLinkroll.default;
    }
  });
});

;define("dummy/components/nypr-m-breadcrumb", ["exports", "nypr-design-system/components/nypr-m-breadcrumb"], function (_exports, _nyprMBreadcrumb) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMBreadcrumb.default;
    }
  });
});

;define("dummy/components/nypr-m-byline", ["exports", "nypr-design-system/components/nypr-m-byline"], function (_exports, _nyprMByline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMByline.default;
    }
  });
});

;define("dummy/components/nypr-m-figcaption", ["exports", "nypr-design-system/components/nypr-m-figcaption"], function (_exports, _nyprMFigcaption) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMFigcaption.default;
    }
  });
});

;define("dummy/components/nypr-m-figcaption/caption", ["exports", "nypr-design-system/components/nypr-m-figcaption/caption"], function (_exports, _caption) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _caption.default;
    }
  });
});

;define("dummy/components/nypr-m-figcaption/credit", ["exports", "nypr-design-system/components/nypr-m-figcaption/credit"], function (_exports, _credit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _credit.default;
    }
  });
});

;define("dummy/components/nypr-m-figure", ["exports", "nypr-design-system/components/nypr-m-figure"], function (_exports, _nyprMFigure) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMFigure.default;
    }
  });
});

;define("dummy/components/nypr-m-figure/image", ["exports", "nypr-design-system/components/nypr-m-figure/image"], function (_exports, _image) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _image.default;
    }
  });
});

;define("dummy/components/nypr-m-gallery-lead", ["exports", "nypr-design-system/components/nypr-m-gallery-lead"], function (_exports, _nyprMGalleryLead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMGalleryLead.default;
    }
  });
});

;define("dummy/components/nypr-m-inline-search", ["exports", "nypr-design-system/components/nypr-m-inline-search"], function (_exports, _nyprMInlineSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMInlineSearch.default;
    }
  });
});

;define("dummy/components/nypr-m-inline-search/form", ["exports", "nypr-design-system/components/nypr-m-inline-search/form"], function (_exports, _form) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _form.default;
    }
  });
});

;define("dummy/components/nypr-m-inline-search/open", ["exports", "nypr-design-system/components/nypr-m-inline-search/open"], function (_exports, _open) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _open.default;
    }
  });
});

;define("dummy/components/nypr-m-nav-read-more", ["exports", "nypr-design-system/components/nypr-m-nav-read-more"], function (_exports, _nyprMNavReadMore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMNavReadMore.default;
    }
  });
});

;define("dummy/components/nypr-m-newsletter-form", ["exports", "nypr-design-system/components/nypr-m-newsletter-form"], function (_exports, _nyprMNewsletterForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMNewsletterForm.default;
    }
  });
});

;define("dummy/components/nypr-m-newsletter-form/button", ["exports", "nypr-design-system/components/nypr-m-newsletter-form/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _button.default;
    }
  });
});

;define("dummy/components/nypr-m-newsletter-form/input", ["exports", "nypr-design-system/components/nypr-m-newsletter-form/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _input.default;
    }
  });
});

;define("dummy/components/nypr-m-newsletter", ["exports", "nypr-design-system/components/nypr-m-newsletter"], function (_exports, _nyprMNewsletter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMNewsletter.default;
    }
  });
  Object.defineProperty(_exports, "DEFAULT_LEGAL", {
    enumerable: true,
    get: function get() {
      return _nyprMNewsletter.DEFAULT_LEGAL;
    }
  });
  Object.defineProperty(_exports, "DEFAULT_SUBSCRIBED_MESSAGE", {
    enumerable: true,
    get: function get() {
      return _nyprMNewsletter.DEFAULT_SUBSCRIBED_MESSAGE;
    }
  });
});

;define("dummy/components/nypr-m-progress-bar", ["exports", "nypr-design-system/components/nypr-m-progress-bar"], function (_exports, _nyprMProgressBar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMProgressBar.default;
    }
  });
});

;define("dummy/components/nypr-m-pullquote", ["exports", "nypr-design-system/components/nypr-m-pullquote"], function (_exports, _nyprMPullquote) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMPullquote.default;
    }
  });
});

;define("dummy/components/nypr-m-pullquote/attribution", ["exports", "nypr-design-system/components/nypr-m-pullquote/attribution"], function (_exports, _attribution) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _attribution.default;
    }
  });
});

;define("dummy/components/nypr-m-pullquote/quote", ["exports", "nypr-design-system/components/nypr-m-pullquote/quote"], function (_exports, _quote) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _quote.default;
    }
  });
});

;define("dummy/components/nypr-m-secondary-nav", ["exports", "nypr-design-system/components/nypr-m-secondary-nav"], function (_exports, _nyprMSecondaryNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMSecondaryNav.default;
    }
  });
});

;define("dummy/components/nypr-m-share-tools", ["exports", "nypr-design-system/components/nypr-m-share-tools"], function (_exports, _nyprMShareTools) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMShareTools.default;
    }
  });
});

;define("dummy/components/nypr-m-share-tools/link", ["exports", "nypr-design-system/components/nypr-m-share-tools/link"], function (_exports, _link) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _link.default;
    }
  });
});

;define("dummy/components/nypr-m-share-tools/share", ["exports", "nypr-design-system/components/nypr-m-share-tools/share"], function (_exports, _share) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _share.default;
    }
  });
});

;define("dummy/components/nypr-m-tags", ["exports", "nypr-design-system/components/nypr-m-tags"], function (_exports, _nyprMTags) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMTags.default;
    }
  });
});

;define("dummy/components/nypr-m-text-banner", ["exports", "nypr-design-system/components/nypr-m-text-banner"], function (_exports, _nyprMTextBanner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMTextBanner.default;
    }
  });
});

;define("dummy/components/nypr-m-to-top", ["exports", "nypr-design-system/components/nypr-m-to-top"], function (_exports, _nyprMToTop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprMToTop.default;
    }
  });
});

;define("dummy/components/nypr-o-article-body", ["exports", "nypr-design-system/components/nypr-o-article-body"], function (_exports, _nyprOArticleBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOArticleBody.default;
    }
  });
});

;define("dummy/components/nypr-o-article-footer", ["exports", "nypr-design-system/components/nypr-o-article-footer"], function (_exports, _nyprOArticleFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOArticleFooter.default;
    }
  });
});

;define("dummy/components/nypr-o-article-header", ["exports", "nypr-design-system/components/nypr-o-article-header"], function (_exports, _nyprOArticleHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOArticleHeader.default;
    }
  });
});

;define("dummy/components/nypr-o-article-header/lead", ["exports", "nypr-design-system/components/nypr-o-article-header/lead"], function (_exports, _lead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lead.default;
    }
  });
});

;define("dummy/components/nypr-o-article-header/meta", ["exports", "nypr-design-system/components/nypr-o-article-header/meta"], function (_exports, _meta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _meta.default;
    }
  });
});

;define("dummy/components/nypr-o-article-header/publish-date", ["exports", "nypr-design-system/components/nypr-o-article-header/publish-date"], function (_exports, _publishDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _publishDate.default;
    }
  });
});

;define("dummy/components/nypr-o-article-header/top", ["exports", "nypr-design-system/components/nypr-o-article-header/top"], function (_exports, _top) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _top.default;
    }
  });
});

;define("dummy/components/nypr-o-block-list-group", ["exports", "nypr-design-system/components/nypr-o-block-list-group"], function (_exports, _nyprOBlockListGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOBlockListGroup.default;
    }
  });
});

;define("dummy/components/nypr-o-block-list-group/ad", ["exports", "nypr-design-system/components/nypr-o-block-list-group/ad"], function (_exports, _ad) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ad.default;
    }
  });
});

;define("dummy/components/nypr-o-block-list-group/column", ["exports", "nypr-design-system/components/nypr-o-block-list-group/column"], function (_exports, _column) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _column.default;
    }
  });
});

;define("dummy/components/nypr-o-contact", ["exports", "nypr-design-system/components/nypr-o-contact"], function (_exports, _nyprOContact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOContact.default;
    }
  });
});

;define("dummy/components/nypr-o-donate", ["exports", "nypr-design-system/components/nypr-o-donate"], function (_exports, _nyprODonate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprODonate.default;
    }
  });
});

;define("dummy/components/nypr-o-featured-block-list", ["exports", "nypr-design-system/components/nypr-o-featured-block-list"], function (_exports, _nyprOFeaturedBlockList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOFeaturedBlockList.default;
    }
  });
});

;define("dummy/components/nypr-o-featured-block-list/heading", ["exports", "nypr-design-system/components/nypr-o-featured-block-list/heading"], function (_exports, _heading) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _heading.default;
    }
  });
});

;define("dummy/components/nypr-o-footer", ["exports", "nypr-design-system/components/nypr-o-footer"], function (_exports, _nyprOFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOFooter.default;
    }
  });
});

;define("dummy/components/nypr-o-gallery-overlay", ["exports", "nypr-design-system/components/nypr-o-gallery-overlay"], function (_exports, _nyprOGalleryOverlay) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOGalleryOverlay.default;
    }
  });
});

;define("dummy/components/nypr-o-gallery-overlay/billboard", ["exports", "nypr-design-system/components/nypr-o-gallery-overlay/billboard"], function (_exports, _billboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _billboard.default;
    }
  });
});

;define("dummy/components/nypr-o-gallery-overlay/slide", ["exports", "nypr-design-system/components/nypr-o-gallery-overlay/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _slide.default;
    }
  });
});

;define("dummy/components/nypr-o-header", ["exports", "nypr-design-system/components/nypr-o-header"], function (_exports, _nyprOHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOHeader.default;
    }
  });
});

;define("dummy/components/nypr-o-header/headline", ["exports", "nypr-design-system/components/nypr-o-header/headline"], function (_exports, _headline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _headline.default;
    }
  });
});

;define("dummy/components/nypr-o-header/leaderboard", ["exports", "nypr-design-system/components/nypr-o-header/leaderboard"], function (_exports, _leaderboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _leaderboard.default;
    }
  });
});

;define("dummy/components/nypr-o-header/left", ["exports", "nypr-design-system/components/nypr-o-header/left"], function (_exports, _left) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _left.default;
    }
  });
});

;define("dummy/components/nypr-o-header/menu", ["exports", "nypr-design-system/components/nypr-o-header/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _menu.default;
    }
  });
});

;define("dummy/components/nypr-o-header/nav", ["exports", "nypr-design-system/components/nypr-o-header/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nav.default;
    }
  });
});

;define("dummy/components/nypr-o-header/right", ["exports", "nypr-design-system/components/nypr-o-header/right"], function (_exports, _right) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _right.default;
    }
  });
});

;define("dummy/components/nypr-o-header/share", ["exports", "nypr-design-system/components/nypr-o-header/share"], function (_exports, _share) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _share.default;
    }
  });
});

;define("dummy/components/nypr-o-newsletter-tout", ["exports", "nypr-design-system/components/nypr-o-newsletter-tout"], function (_exports, _nyprONewsletterTout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprONewsletterTout.default;
    }
  });
});

;define("dummy/components/nypr-o-related-content", ["exports", "nypr-design-system/components/nypr-o-related-content"], function (_exports, _nyprORelatedContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprORelatedContent.default;
    }
  });
});

;define("dummy/components/nypr-o-sponsored-tout", ["exports", "nypr-design-system/components/nypr-o-sponsored-tout"], function (_exports, _nyprOSponsoredTout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOSponsoredTout.default;
    }
  });
});

;define("dummy/helpers/-link-to-params", ["exports", "ember-angle-bracket-invocation-polyfill/helpers/-link-to-params"], function (_exports, _linkToParams) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkToParams.default;
    }
  });
});

;define("dummy/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function get() {
      return _and.and;
    }
  });
});

;define("dummy/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function get() {
      return _append.append;
    }
  });
});

;define("dummy/helpers/array", ["exports", "ember-composable-helpers/helpers/array"], function (_exports, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _array.default;
    }
  });
  Object.defineProperty(_exports, "array", {
    enumerable: true,
    get: function get() {
      return _array.array;
    }
  });
});

;define("dummy/helpers/camelize", ["exports", "ember-cli-string-helpers/helpers/camelize"], function (_exports, _camelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _camelize.default;
    }
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function get() {
      return _camelize.camelize;
    }
  });
});

;define("dummy/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cancelAll.default;
    }
  });
});

;define("dummy/helpers/capitalize", ["exports", "ember-cli-string-helpers/helpers/capitalize"], function (_exports, _capitalize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _capitalize.default;
    }
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function get() {
      return _capitalize.capitalize;
    }
  });
});

;define("dummy/helpers/cast", ["exports", "nypr-design-system/helpers/cast"], function (_exports, _cast) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cast.default;
    }
  });
  Object.defineProperty(_exports, "cast", {
    enumerable: true,
    get: function get() {
      return _cast.cast;
    }
  });
});

;define("dummy/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function get() {
      return _chunk.chunk;
    }
  });
});

;define("dummy/helpers/classify", ["exports", "ember-cli-string-helpers/helpers/classify"], function (_exports, _classify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _classify.default;
    }
  });
  Object.defineProperty(_exports, "classify", {
    enumerable: true,
    get: function get() {
      return _classify.classify;
    }
  });
});

;define("dummy/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _compact.default;
    }
  });
});

;define("dummy/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function get() {
      return _compute.compute;
    }
  });
});

;define("dummy/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function get() {
      return _contains.contains;
    }
  });
});

;define("dummy/helpers/dasherize", ["exports", "ember-cli-string-helpers/helpers/dasherize"], function (_exports, _dasherize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _dasherize.default;
    }
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function get() {
      return _dasherize.dasherize;
    }
  });
});

;define("dummy/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function get() {
      return _dec.dec;
    }
  });
});

;define("dummy/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _drop.default;
    }
  });
});

;define("dummy/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function get() {
      return _equal.equal;
    }
  });
});

;define("dummy/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _filterBy.default;
    }
  });
});

;define("dummy/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _filter.default;
    }
  });
});

;define("dummy/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _findBy.default;
    }
  });
});

;define("dummy/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function get() {
      return _flatten.flatten;
    }
  });
});

;define("dummy/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _groupBy.default;
    }
  });
});

;define("dummy/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function get() {
      return _gt.gt;
    }
  });
});

;define("dummy/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function get() {
      return _gte.gte;
    }
  });
});

;define("dummy/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function get() {
      return _hasNext.hasNext;
    }
  });
});

;define("dummy/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function get() {
      return _hasPrevious.hasPrevious;
    }
  });
});

;define("dummy/helpers/html-safe", ["exports", "ember-cli-string-helpers/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function get() {
      return _htmlSafe.htmlSafe;
    }
  });
});

;define("dummy/helpers/humanize", ["exports", "ember-cli-string-helpers/helpers/humanize"], function (_exports, _humanize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _humanize.default;
    }
  });
  Object.defineProperty(_exports, "humanize", {
    enumerable: true,
    get: function get() {
      return _humanize.humanize;
    }
  });
});

;define("dummy/helpers/in-viewport", ["exports", "nypr-design-system/helpers/in-viewport"], function (_exports, _inViewport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _inViewport.default;
    }
  });
  Object.defineProperty(_exports, "inViewport", {
    enumerable: true,
    get: function get() {
      return _inViewport.inViewport;
    }
  });
});

;define("dummy/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function get() {
      return _inc.inc;
    }
  });
});

;define("dummy/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _intersect.default;
    }
  });
});

;define("dummy/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function get() {
      return _invoke.invoke;
    }
  });
});

;define("dummy/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isAfter.default;
    }
  });
});

;define("dummy/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function get() {
      return _isArray.isArray;
    }
  });
});

;define("dummy/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isBefore.default;
    }
  });
});

;define("dummy/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isBetween.default;
    }
  });
});

;define("dummy/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEmpty.default;
    }
  });
});

;define("dummy/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function get() {
      return _isEqual.isEqual;
    }
  });
});

;define("dummy/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isSameOrAfter.default;
    }
  });
});

;define("dummy/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isSameOrBefore.default;
    }
  });
});

;define("dummy/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isSame.default;
    }
  });
});

;define("dummy/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _join.default;
    }
  });
});

;define("dummy/helpers/lowercase", ["exports", "ember-cli-string-helpers/helpers/lowercase"], function (_exports, _lowercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lowercase.default;
    }
  });
  Object.defineProperty(_exports, "lowercase", {
    enumerable: true,
    get: function get() {
      return _lowercase.lowercase;
    }
  });
});

;define("dummy/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function get() {
      return _lt.lt;
    }
  });
});

;define("dummy/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function get() {
      return _lte.lte;
    }
  });
});

;define("dummy/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mapBy.default;
    }
  });
});

;define("dummy/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _map.default;
    }
  });
});

;define("dummy/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentAdd.default;
    }
  });
});

;define("dummy/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentCalendar.default;
    }
  });
});

;define("dummy/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentDiff.default;
    }
  });
});

;define("dummy/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentDuration.default;
    }
  });
});

;define("dummy/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentFormat.default;
    }
  });
});

;define("dummy/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentFromNow.default;
    }
  });
});

;define("dummy/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentFrom.default;
    }
  });
});

;define("dummy/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentSubtract.default;
    }
  });
});

;define("dummy/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentToDate.default;
    }
  });
});

;define("dummy/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentToNow.default;
    }
  });
});

;define("dummy/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentTo.default;
    }
  });
});

;define("dummy/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _unix.default;
    }
  });
});

;define("dummy/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _moment.default;
    }
  });
});

;define("dummy/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function get() {
      return _next.next;
    }
  });
});

;define("dummy/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function get() {
      return _notEqual.notEq;
    }
  });
});

;define("dummy/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function get() {
      return _not.not;
    }
  });
});

;define("dummy/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _now.default;
    }
  });
});

;define("dummy/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function get() {
      return _objectAt.objectAt;
    }
  });
});

;define("dummy/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function get() {
      return _optional.optional;
    }
  });
});

;define("dummy/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function get() {
      return _or.or;
    }
  });
});

;define("dummy/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _perform.default;
    }
  });
});

;define("dummy/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pipeAction.default;
    }
  });
});

;define("dummy/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function get() {
      return _pipe.pipe;
    }
  });
});

;define("dummy/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function get() {
      return _previous.previous;
    }
  });
});

;define("dummy/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function get() {
      return _queue.queue;
    }
  });
});

;define("dummy/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function get() {
      return _range.range;
    }
  });
});

;define("dummy/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _reduce.default;
    }
  });
});

;define("dummy/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _rejectBy.default;
    }
  });
});

;define("dummy/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function get() {
      return _repeat.repeat;
    }
  });
});

;define("dummy/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _reverse.default;
    }
  });
});

;define("dummy/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function get() {
      return _shuffle.shuffle;
    }
  });
});

;define("dummy/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _slice.default;
    }
  });
});

;define("dummy/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _sortBy.default;
    }
  });
});

;define("dummy/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _take.default;
    }
  });
});

;define("dummy/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _task.default;
    }
  });
});

;define("dummy/helpers/titleize", ["exports", "ember-cli-string-helpers/helpers/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _titleize.default;
    }
  });
  Object.defineProperty(_exports, "titleize", {
    enumerable: true,
    get: function get() {
      return _titleize.titleize;
    }
  });
});

;define("dummy/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggleAction.default;
    }
  });
});

;define("dummy/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function get() {
      return _toggle.toggle;
    }
  });
});

;define("dummy/helpers/trim", ["exports", "ember-cli-string-helpers/helpers/trim"], function (_exports, _trim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trim.default;
    }
  });
  Object.defineProperty(_exports, "trim", {
    enumerable: true,
    get: function get() {
      return _trim.trim;
    }
  });
});

;define("dummy/helpers/truncate", ["exports", "ember-cli-string-helpers/helpers/truncate"], function (_exports, _truncate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _truncate.default;
    }
  });
  Object.defineProperty(_exports, "truncate", {
    enumerable: true,
    get: function get() {
      return _truncate.truncate;
    }
  });
});

;define("dummy/helpers/underscore", ["exports", "ember-cli-string-helpers/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function get() {
      return _underscore.underscore;
    }
  });
});

;define("dummy/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _union.default;
    }
  });
});

;define("dummy/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _unix.default;
    }
  });
});

;define("dummy/helpers/uppercase", ["exports", "ember-cli-string-helpers/helpers/uppercase"], function (_exports, _uppercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _uppercase.default;
    }
  });
  Object.defineProperty(_exports, "uppercase", {
    enumerable: true,
    get: function get() {
      return _uppercase.uppercase;
    }
  });
});

;define("dummy/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function get() {
      return _utc.utc;
    }
  });
});

;define("dummy/helpers/w", ["exports", "ember-cli-string-helpers/helpers/w"], function (_exports, _w) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _w.default;
    }
  });
  Object.defineProperty(_exports, "w", {
    enumerable: true,
    get: function get() {
      return _w.w;
    }
  });
});

;define("dummy/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function get() {
      return _without.without;
    }
  });
});

;define("dummy/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function get() {
      return _xor.xor;
    }
  });
});

;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});

;define("dummy/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberConcurrency.default;
    }
  });
});

;define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});

;define("dummy/locations/router-scroll", ["exports", "ember-router-scroll/locations/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _routerScroll.default;
    }
  });
});

;define("dummy/mixins/click-outside", ["exports", "ember-click-outside/mixin"], function (_exports, _mixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mixin.default;
    }
  });
});

;define("dummy/nypr-design-system/tests/addon-test-support.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon-test-support');
  QUnit.test('addon-test-support/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon-test-support/index.js should pass ESLint\n\n');
  });
});

;define("dummy/nypr-design-system/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/link-to.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/link-to.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-ad-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-ad-label.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-button.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-kicker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-kicker.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-media-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-media-object.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-picture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-picture.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-section-heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-section-heading.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-story-headline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-story-headline.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-svg.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-svg.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-tag.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-toggle-box.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-toggle-box.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-a-toggle-box/trigger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-a-toggle-box/trigger.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-author-block.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-author-block.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block-list.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block-meta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block-meta.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/body.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/body.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/eyebrow.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/eyebrow.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/media.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/media.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/object.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/text.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/title-layout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/title-layout.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-block/title.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-block/title.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-box-banner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-box-banner.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-box-banner/body.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-box-banner/body.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-box-banner/cta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-box-banner/cta.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-box-banner/dek.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-box-banner/dek.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-box-banner/title.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-box-banner/title.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-brands-linkroll.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-brands-linkroll.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-breadcrumb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-breadcrumb.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-byline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-byline.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-figcaption.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-figcaption.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-figcaption/caption.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-figcaption/caption.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-figcaption/credit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-figcaption/credit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-figure.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-figure.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-figure/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-figure/image.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-gallery-lead.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-gallery-lead.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-inline-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-inline-search.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-inline-search/form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-inline-search/form.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-inline-search/open.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-inline-search/open.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-nav-read-more.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-nav-read-more.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-newsletter-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-newsletter-form.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-newsletter-form/button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-newsletter-form/button.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-newsletter-form/input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-newsletter-form/input.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-newsletter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-newsletter.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-progress-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-progress-bar.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-pullquote.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-pullquote.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-pullquote/attribution.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-pullquote/attribution.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-pullquote/quote.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-pullquote/quote.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-secondary-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-secondary-nav.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-share-tools.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-share-tools.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-share-tools/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-share-tools/link.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-share-tools/share.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-share-tools/share.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-tags.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-text-banner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-text-banner.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-m-to-top.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-m-to-top.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-body.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-body.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-footer.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-header.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-header/lead.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-header/lead.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-header/meta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-header/meta.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-header/publish-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-header/publish-date.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-article-header/top.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-article-header/top.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-block-list-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-block-list-group.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-block-list-group/ad.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-block-list-group/ad.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-block-list-group/column.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-block-list-group/column.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-contact.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-donate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-donate.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-featured-block-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-featured-block-list.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-featured-block-list/heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-featured-block-list/heading.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-footer.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-gallery-overlay.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-gallery-overlay.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-gallery-overlay/billboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-gallery-overlay/billboard.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-gallery-overlay/slide.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-gallery-overlay/slide.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/headline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/headline.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/leaderboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/leaderboard.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/left.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/left.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/menu.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/nav.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/right.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/right.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-header/share.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-header/share.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-newsletter-tout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-newsletter-tout.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-related-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-related-content.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nypr-o-sponsored-tout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nypr-o-sponsored-tout.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/cast.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/cast.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/in-viewport.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/in-viewport.js should pass ESLint\n\n');
  });
  QUnit.test('addon/services/nypr-o-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/nypr-o-header.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/toggle-box-positions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/toggle-box-positions.js should pass ESLint\n\n');
  });
});

;define("dummy/nypr-design-system/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/components/link-to.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/link-to.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-ad-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-ad-label.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-button.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-kicker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-kicker.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-media-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-media-object.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-picture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-picture.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-section-heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-section-heading.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-story-headline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-story-headline.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-svg.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-svg.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-tag.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-toggle-box.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-toggle-box.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-a-toggle-box/trigger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-a-toggle-box/trigger.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-author-block.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-author-block.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block-list.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block-meta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block-meta.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/body.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/body.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/eyebrow.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/eyebrow.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/media.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/media.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/object.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/text.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/title-layout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/title-layout.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-block/title.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-block/title.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-box-banner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-box-banner.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-box-banner/body.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-box-banner/body.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-box-banner/cta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-box-banner/cta.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-box-banner/dek.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-box-banner/dek.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-box-banner/title.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-box-banner/title.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-brands-linkroll.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-brands-linkroll.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-breadcrumb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-breadcrumb.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-byline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-byline.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-figcaption.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-figcaption.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-figcaption/caption.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-figcaption/caption.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-figcaption/credit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-figcaption/credit.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-figure.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-figure.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-figure/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-figure/image.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-gallery-lead.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-gallery-lead.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-inline-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-inline-search.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-inline-search/form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-inline-search/form.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-inline-search/open.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-inline-search/open.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-nav-read-more.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-nav-read-more.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-newsletter-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-newsletter-form.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-newsletter-form/button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-newsletter-form/button.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-newsletter-form/input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-newsletter-form/input.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-newsletter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-newsletter.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-progress-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-progress-bar.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-pullquote.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-pullquote.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-pullquote/attribution.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-pullquote/attribution.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-pullquote/quote.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-pullquote/quote.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-secondary-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-secondary-nav.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-share-tools.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-share-tools.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-share-tools/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-share-tools/link.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-share-tools/share.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-share-tools/share.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-tags.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-text-banner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-text-banner.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-m-to-top.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-m-to-top.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-body.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-body.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-footer.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-header.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-header/lead.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-header/lead.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-header/meta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-header/meta.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-header/publish-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-header/publish-date.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-article-header/top.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-article-header/top.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-block-list-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-block-list-group.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-block-list-group/ad.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-block-list-group/ad.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-block-list-group/column.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-block-list-group/column.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-contact.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-donate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-donate.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-featured-block-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-featured-block-list.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-featured-block-list/heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-featured-block-list/heading.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-footer.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-gallery-overlay.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-gallery-overlay.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-gallery-overlay/billboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-gallery-overlay/billboard.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-gallery-overlay/slide.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-gallery-overlay/slide.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/headline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/headline.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/leaderboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/leaderboard.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/left.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/left.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/menu.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/nav.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/right.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/right.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-header/share.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-header/share.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-newsletter-tout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-newsletter-tout.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-related-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-related-content.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nypr-o-sponsored-tout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nypr-o-sponsored-tout.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/cast.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/cast.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/in-viewport.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/in-viewport.js should pass ESLint\n\n');
  });
  QUnit.test('app/services/nypr-o-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/services/nypr-o-header.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/toggle-box-positions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/toggle-box-positions.js should pass ESLint\n\n');
  });
});

;define("dummy/nypr-design-system/tests/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('addon/templates/components/nypr-a-ad-label.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-ad-label.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-button.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-button.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-kicker.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-kicker.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-media-object.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-media-object.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-picture.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-picture.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-section-heading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-section-heading.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-story-headline.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-story-headline.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-tag.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-tag.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-toggle-box.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-toggle-box.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-a-toggle-box/trigger.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-a-toggle-box/trigger.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-author-block.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-author-block.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block-list.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block-meta.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block-meta.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/body.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/body.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/eyebrow.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/eyebrow.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/media.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/media.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/object.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/object.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/text.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/text.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/title-layout.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/title-layout.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-block/title.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-block/title.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-box-banner.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-box-banner.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-box-banner/body.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-box-banner/body.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-box-banner/cta.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-box-banner/cta.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-box-banner/dek.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-box-banner/dek.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-box-banner/title.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-box-banner/title.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-brands-linkroll.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-brands-linkroll.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-breadcrumb.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-breadcrumb.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-byline.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-byline.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-figcaption.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-figcaption.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-figcaption/caption.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-figcaption/caption.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-figcaption/credit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-figcaption/credit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-figure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-figure.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-figure/image.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-figure/image.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-gallery-lead.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-gallery-lead.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-inline-search.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-inline-search.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-inline-search/form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-inline-search/form.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-inline-search/open.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-inline-search/open.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-nav-read-more.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-nav-read-more.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-newsletter-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-newsletter-form.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-newsletter-form/button.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-newsletter-form/button.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-newsletter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-newsletter.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-progress-bar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-progress-bar.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-pullquote.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-pullquote.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-pullquote/attribution.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-pullquote/attribution.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-pullquote/quote.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-pullquote/quote.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-secondary-nav.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-secondary-nav.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-share-tools.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-share-tools.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-share-tools/link.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-share-tools/link.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-share-tools/share.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-share-tools/share.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-tags.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-tags.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-text-banner.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-text-banner.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-m-to-top.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-m-to-top.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-body.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-body.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-footer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-footer.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-header/lead.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-header/lead.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-header/meta.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-header/meta.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-header/publish-date.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-header/publish-date.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-article-header/top.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-article-header/top.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-block-list-group.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-block-list-group.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-block-list-group/ad.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-block-list-group/ad.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-block-list-group/column.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-block-list-group/column.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-donate.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-donate.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-featured-block-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-featured-block-list.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-featured-block-list/heading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-featured-block-list/heading.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-footer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-footer.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-gallery-overlay.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-gallery-overlay.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-gallery-overlay/billboard.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-gallery-overlay/billboard.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-gallery-overlay/slide.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-gallery-overlay/slide.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/headline.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/headline.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/leaderboard.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/leaderboard.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/left.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/left.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/menu.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/menu.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/nav.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/nav.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/right.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/right.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-header/share.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-header/share.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-newsletter-tout.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-newsletter-tout.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-related-content.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-related-content.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('addon/templates/components/nypr-o-sponsored-tout.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/nypr-o-sponsored-tout.hbs should pass TemplateLint.\n\n');
  });
});

;define("dummy/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});

;define("dummy/router", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var Router = Ember.Router.extend({
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('not-found', {
      path: '/*path'
    });
  });
  var _default = Router;
  _exports.default = _default;
});

;define("dummy/services/moment", ["exports", "ember-moment/services/moment", "dummy/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var get = Ember.get;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});

;define("dummy/services/nypr-o-header", ["exports", "nypr-design-system/services/nypr-o-header"], function (_exports, _nyprOHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nyprOHeader.default;
    }
  });
});

;define("dummy/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _routerScroll.default;
    }
  });
});

;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8VpUpqJF",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/blank-template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WrinWLPQ",
    "block": "{\"symbols\":[\"@text\",\"&default\"],\"statements\":[[4,\"if\",[[24,2]],null,{\"statements\":[[0,\"  \"],[14,2],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[22,1,[]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/blank-template.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xaehmlo1",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,0,[\"svgPartial\"]]],null,{\"statements\":[[0,\"  \"],[15,[22,0,[\"svgPartial\"]],[]],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":true}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/arrow-dashed", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "eb6ood0+",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"arrow-dashed-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Dashed Arrow\"],[10],[0,\"\\n  \"],[7,\"polygon\"],[11,\"points\",\"18.74 3.12 29.96 14 18.74 24.88 18.74 16.72 15 16.72 15 11.28 18.74 11.28 18.74 3.12\"],[9],[10],[0,\"\\n  \"],[7,\"rect\"],[11,\"x\",\"8.2\"],[11,\"y\",\"11.28\"],[11,\"width\",\"5.44\"],[11,\"height\",\"5.44\"],[9],[10],[0,\"\\n  \"],[7,\"rect\"],[11,\"x\",\"4.12\"],[11,\"y\",\"11.28\"],[11,\"width\",\"2.72\"],[11,\"height\",\"5.44\"],[9],[10],[0,\"\\n  \"],[7,\"rect\"],[11,\"x\",\"0.04\"],[11,\"y\",\"11.28\"],[11,\"width\",\"2.72\"],[11,\"height\",\"5.44\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/arrow-dashed.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/arrow-skinny", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R3qOaj/O",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"arrow-skinny-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Skinny Arrow\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M19.77,4.75l10,9.74a.51.51,0,0,1,.15.23.94.94,0,0,1,0,.7.51.51,0,0,1-.15.23l-10,9.74a.81.81,0,0,1-1.14,0s0,0-.05-.05a.94.94,0,0,1,.05-1.26l8.43-8.2H.84A.85.85,0,0,1,0,15a.86.86,0,0,1,.84-.89H27.06L18.63,5.92a.92.92,0,0,1-.25-.85A.87.87,0,0,1,19,4.42a.8.8,0,0,1,.82.19Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/arrow-skinny.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/arrow-stylish", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jmjF50M5",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"arrow-stylish-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Stylish Arrow\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M17.06,3.28l11,4.56L30,9.79,19.62,20.16l3.52,3.52-17.85,3L3.35,24.77,0,12l5.92,2.45L17.06,3.28Zm-12.23,20,12.53-2.15-3.67-1.53L24.81,8.49l-7.31-3L6.36,16.59,2.69,15.05l2.14,8.24Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/arrow-stylish.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/audio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "K6hYaSoy",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"o-audio-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Audio Icon\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M14.56,4.32a3.43,3.43,0,0,0-3.73.55L6.85,9H1.46A1.46,1.46,0,0,0,0,10.4v9.19A1.46,1.46,0,0,0,1.46,21h5.4L11,25.25a3.38,3.38,0,0,0,2.14.75,3.62,3.62,0,0,0,1.45-.33,3.29,3.29,0,0,0,1.94-3V7.34A3.29,3.29,0,0,0,14.56,4.32Zm-1,18.33a.42.42,0,0,1-.27.42.65.65,0,0,1-.39,0L8.52,18.6a1.41,1.41,0,0,0-1-.44H2.91V11.84H7.48a1.45,1.45,0,0,0,1-.44L12.8,7a.45.45,0,0,1,.52,0,.42.42,0,0,1,.27.36ZM24.17,15a7.07,7.07,0,0,1-3.51,6.1,1.36,1.36,0,0,1-.76.21,1.41,1.41,0,0,1-.75-2.64,4.27,4.27,0,0,0,0-7.35,1.42,1.42,0,0,1,0-2.58,1.46,1.46,0,0,1,1.54.15A7.08,7.08,0,0,1,24.17,15ZM30,15a12.77,12.77,0,0,1-5,10.14,1.44,1.44,0,0,1-.89.31A1.4,1.4,0,0,1,23,24.89a1.43,1.43,0,0,1,.22-2h0a9.92,9.92,0,0,0,0-15.77A1.42,1.42,0,0,1,23,5.2,1.46,1.46,0,0,1,24.89,5,12.76,12.76,0,0,1,30,15Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/audio.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/caret-down", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "K7xVPEHH",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"caret-down-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Caret Down\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M.42,7.29a1,1,0,0,1,1.47,0L15.34,20,28.16,7.89a1.19,1.19,0,0,1,1.52.05c.72.67,0,1.61,0,1.61L15.32,23,.2,8.79A1.11,1.11,0,0,1,.42,7.29Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/caret-down.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/check", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "crjudV0H",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"check-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Check\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M10.43,25.65a1.63,1.63,0,0,0,1.19.5,1.65,1.65,0,0,0,1.19-.5L29,9.42a1.65,1.65,0,0,0,0-2.37l-2.69-2.7a1.67,1.67,0,0,0-1.19-.5,1.63,1.63,0,0,0-1.19.5L11.62,16.69,6,11.12a1.6,1.6,0,0,0-1.19-.51,1.64,1.64,0,0,0-1.19.51L1,13.81a1.67,1.67,0,0,0,0,2.38Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/check.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/close", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VZgEwJ8J",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"close-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Close\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M4.43.76A2.6,2.6,0,0,0,.76,4.43L11.33,15,.76,25.57a2.6,2.6,0,1,0,3.67,3.67L15,18.67,25.57,29.24a2.6,2.6,0,1,0,3.67-3.67L18.67,15,29.24,4.43A2.6,2.6,0,1,0,25.57.76L15,11.33Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/close.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/comment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QXdvVj1b",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"comment-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Comment\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M1.34,29.38A1.6,1.6,0,0,0,2.63,30a.73.73,0,0,0,.29,0l7.32-1.27a15.66,15.66,0,0,0,4.76.78A14.9,14.9,0,0,0,30,14.71,14.86,14.86,0,0,0,15,0,14.89,14.89,0,0,0,0,14.75a14.09,14.09,0,0,0,1,5.39,15,15,0,0,0,1.88,3.37L1.09,27.74A1.65,1.65,0,0,0,1.34,29.38ZM15,3.28A11.58,11.58,0,0,1,26.66,14.75,11.58,11.58,0,0,1,15,26.22a12.41,12.41,0,0,1-4.05-.7,2,2,0,0,0-.88-.08l-4.72.82,1-2.34a1.72,1.72,0,0,0-.25-1.73,12.93,12.93,0,0,1-2-3.25,10.92,10.92,0,0,1-.8-4.19A11.63,11.63,0,0,1,15,3.29Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/comment.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cO2Qpk1E",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"email-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Email\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M30,5.88a2.68,2.68,0,0,0-2.68-2.67H2.68A2.68,2.68,0,0,0,0,5.88V7.22l14.42,7.15a1.38,1.38,0,0,0,1.16,0L30,7.22V5.89Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M2.68,25.62H27.32A2.69,2.69,0,0,0,30,22.94V9.23L16.38,16a3,3,0,0,1-1.38.32A2.89,2.89,0,0,1,13.62,16L0,9.23V22.94a2.69,2.69,0,0,0,2.68,2.68Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/email.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/facebook", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bqWedd7b",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"o-facebook-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 448 512\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Facebook\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/facebook.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/gallery", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1s5ZX0vg",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"gallery-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Gallery\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M25.35,3H0V23.09H4.33V27H30V6.91H25.35V3ZM2.52,5.46H22.83V18.74l-5.52-6.8L15,14.77,10.52,8.34,2.58,19.73H22.82v.87H2.53V5.46ZM16.74,17.24l-.23-.33.8-1,1.06,1.31Zm-3.07,0H7.38l3.16-4.51,3.14,4.51ZM27.47,9.4V24.54H6.86V23.09H25.35V9.4Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M15.46,12.13a3.07,3.07,0,1,0-3.11-3.06A3.08,3.08,0,0,0,15.46,12.13Zm0-3.64a.58.58,0,1,1,0,1.15.58.58,0,1,1,0-1.15Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/gallery.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/gothamist-logo--stacked", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MFe0Scgv",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"gothamis-logo-icon--stacked\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 57 60\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Gothamist\"],[10],[0,\"\\n  \"],[7,\"g\"],[11,\"class\",\"gothamist-letters\"],[9],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M2.008 52.417c0 .514.237.845.807.845.569 0 .806-.331.806-.845 0-.513-.237-.844-.806-.844-.57 0-.807.331-.807.844zm.838 4.818c-.759 0-1.138.182-1.138.63 0 .446.379.628 1.138.628.76 0 1.138-.182 1.138-.629s-.379-.629-1.138-.629zm3.241-5.397H5.25c.032.182.048.447.048.58 0 1.605-.854 2.417-2.482 2.417h-.348c-.27 0-.427.231-.427.463 0 .215.126.43.363.43h.443c1.882 0 2.846.745 2.846 2.136S4.728 60 2.846 60C.965 60 0 59.255 0 57.864c0-.778.316-1.308.743-1.606a1.705 1.705 0 0 1-.284-.96c0-.497.174-.894.442-1.142-.22-.249-.569-.713-.569-1.739 0-1.606.87-2.417 2.483-2.417h3.272v1.838z\"],[11,\"class\",\"G\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M9.156 53.334c0 1.063.321 1.587 1.082 1.587.76 0 1.082-.524 1.082-1.587 0-1.064-.322-1.588-1.082-1.588s-1.082.524-1.082 1.588zm1.082 3.333c-1.978 0-3.044-1.112-3.044-3.333C7.194 51.11 8.26 50 10.238 50s3.044 1.111 3.044 3.334c0 2.221-1.066 3.333-3.044 3.333z\"],[11,\"class\",\"O\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M16.637 51.834v1.439c0 1.405-.016 1.793.867 1.793.216 0 .51-.097.758-.258v1.47c-.448.243-.944.389-1.362.389-1.827 0-2.059-.922-2.059-2.91v-1.923h-1.006V50.04h1.006v-1.487l1.796-.775v2.262h1.625v1.794h-1.625\"],[11,\"class\",\"T\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M21.28 56.667h-1.911v-9.761l1.91-.795v4.318c.528-.28 1.269-.546 1.714-.546 1.465 0 1.91.976 1.91 2.317v4.467h-1.91v-4.02c0-.679-.28-.877-.725-.877-.264 0-.626.148-.988.38v4.517\"],[11,\"class\",\"H\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M29.897 52.207a1.16 1.16 0 0 0-.95-.477c-.752 0-1.002.572-1.002 1.604 0 1.031.25 1.603 1.001 1.603.384 0 .734-.175.951-.477v-2.253zM31.833 50v4.778c0 .603.15.73.467.73a.728.728 0 0 0 .35-.095v.904c-.417.222-.85.35-1.301.35-.5 0-.901-.191-1.151-.509a2.48 2.48 0 0 1-1.519.509c-1.768 0-2.67-1.191-2.67-3.333 0-2.143.902-3.334 2.67-3.334.634 0 1.185.222 1.618.603L31.833 50z\"],[11,\"class\",\"A\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M35.588 56.667h-1.83v-5.914l1.83-.753v.769c.457-.283 1.136-.534 1.531-.534.71 0 1.152.267 1.404.722.553-.392 1.341-.722 1.831-.722 1.31 0 1.704.926 1.704 2.196v4.236h-1.83v-3.812c0-.643-.237-.831-.584-.831-.206 0-.52.14-.82.376v4.267h-1.831v-3.812c0-.643-.238-.831-.584-.831-.206 0-.521.14-.821.376v4.267\"],[11,\"class\",\"M\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M45.379 49.667v7h-1.107v-6.533l1.107-.467zm-1.107-1.734h1.107v-1.266h-1.107v1.266z\"],[11,\"class\",\"I\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M47.608 54.825c.45.445 1.058.985 1.913.985.576 0 1.074-.223 1.074-.953 0-.666-.607-.92-1.136-1.11-.84-.318-1.867-.747-1.867-2.032 0-1.08.84-1.715 1.945-1.715.638 0 1.15.159 1.54.381v1a2.508 2.508 0 0 0-1.54-.523c-.545 0-1.073.237-1.073.857 0 .555.482.793.995.984.84.317 2.007.809 2.007 2.158 0 1.111-.716 1.81-1.945 1.81-.964 0-1.57-.445-1.913-.731v-1.11\"],[11,\"class\",\"S\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"d\",\"M54.709 50.897v3.07c0 1.423.258 1.746 1.206 1.746.275 0 .706-.13 1.085-.29v.92c-.465.178-.982.324-1.326.324-1.706 0-1.999-1.05-1.999-2.7v-3.07h-1.102v-.857h1.102v-1.81l1.034-.452v2.262H57v.857h-2.291\"],[11,\"class\",\"T\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"g\"],[11,\"class\",\"gothamist-buildings\"],[9],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M.02 43.333h8.985V18.541H.02z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M13.282 26.667h5.534v-3.889h-5.534z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M11.068 39.444h9.408V25.556h-9.408z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M10.515 43.333h10.514v-3.889H10.515z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M22.531 43.333h12.15V13.66h-12.15z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M23.796 15h9.961v-3.889h-9.961z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M26.563 12.778h3.32V10h-3.32z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M28.223 17.778h.554V2.222h-.554z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M36.524 0.588l12.175 6.581v36.197H36.524V0\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M49.806 43.333H57v-20h-7.194zM51.466 23.333h4.427v-1.666h-4.427z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/gothamist-logo--stacked.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/gothamist-logo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "q3wdjkw0",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"gothamist-logo-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 119 27\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Gothamist\"],[10],[0,\"\\n  \"],[7,\"g\"],[11,\"class\",\"gothamist-buildings\"],[9],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"0.01 21.13 4.62 21.13 4.62 9.04 0.01 9.04 0.01 21.13\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"6.82 13 9.66 13 9.66 11.11 6.82 11.11 6.82 13\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"5.68 19.23 10.52 19.23 10.52 12.46 5.68 12.46 5.68 19.23\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"5.4 21.13 10.8 21.13 10.8 18.96 5.4 18.96 5.4 20.86\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"11.57 21.13 17.81 21.13 17.81 6.66 11.57 6.66 11.57 21.13\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"12.22 7.31 17.34 7.31 17.34 5.42 12.22 5.42 12.22 7.31\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"13.64 6.23 15.35 6.23 15.35 4.88 13.64 4.88 13.64 6.23\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"14.49 8.67 15.06 8.67 15.06 1.08 14.49 1.08 14.49 8.67\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"polyline\"],[11,\"points\",\"18.76 0 25.01 3.21 25.01 21.13 18.76 21.13 18.76 0\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"building\"],[9],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"25.58 21.13 29.27 21.13 29.27 11.38 25.58 11.38 25.58 21.13\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"26.43 11.4 28.7 11.4 28.7 10.56 26.43 10.56 26.43 11.4\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"g\"],[11,\"class\",\"letters\"],[9],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"G\"],[11,\"d\",\"M38.92,15.61c0,.77.35,1.27,1.18,1.27s1.17-.5,1.17-1.27-.34-1.26-1.17-1.26S38.92,14.84,38.92,15.61Zm1.22,7.22c-1.1,0-1.65.27-1.65.94s.55.94,1.65.94,1.66-.27,1.66-.94S41.25,22.83,40.14,22.83Zm4.72-8.09H43.64a5.83,5.83,0,0,1,.07.87c0,2.41-1.24,3.62-3.61,3.62h-.51a.65.65,0,0,0-.62.7.57.57,0,0,0,.53.64h.64c2.74,0,4.15,1.12,4.15,3.2S42.88,27,40.14,27,36,25.85,36,23.77a2.81,2.81,0,0,1,1.08-2.4,2.71,2.71,0,0,1-.41-1.44,2.31,2.31,0,0,1,.64-1.71,3.66,3.66,0,0,1-.83-2.61c0-2.4,1.27-3.62,3.62-3.62h4.76Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"O\"],[11,\"d\",\"M49.33,17c0,1.59.47,2.37,1.58,2.37s1.57-.78,1.57-2.37-.47-2.38-1.57-2.38S49.33,15.39,49.33,17Zm1.58,5c-2.88,0-4.43-1.67-4.43-5s1.55-5,4.43-5,4.43,1.67,4.43,5S53.79,22,50.91,22Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"T\"],[11,\"d\",\"M60.23,14.74v2.15c0,2.11,0,2.69,1.26,2.69a2.1,2.1,0,0,0,1.1-.39V21.4a4.3,4.3,0,0,1-2,.58c-2.66,0-3-1.38-3-4.36V14.74H56.15V12.05h1.46V9.82l2.62-1.16v3.39h2.36v2.69H60.23\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"H\"],[11,\"d\",\"M67,22H64.2V7.36L67,6.17v6.46a6.3,6.3,0,0,1,2.49-.81c2.13,0,2.78,1.46,2.78,3.47V22H69.48V16c0-1-.41-1.32-1-1.32a3,3,0,0,0-1.44.57V22\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"A\"],[11,\"d\",\"M79.53,15.3a1.67,1.67,0,0,0-1.38-.72c-1.09,0-1.46.86-1.46,2.41s.37,2.4,1.46,2.4a1.67,1.67,0,0,0,1.38-.72ZM82.35,12v7.16c0,.9.22,1.09.68,1.09a1.09,1.09,0,0,0,.51-.14v1.35a3.83,3.83,0,0,1-1.89.53A2.07,2.07,0,0,1,80,21.22a3.58,3.58,0,0,1-2.21.76c-2.57,0-3.89-1.79-3.89-5s1.32-5,3.89-5a3.42,3.42,0,0,1,2.36.91Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"M\"],[11,\"d\",\"M87.82,22H85.16V13.12L87.82,12v1.15a5.21,5.21,0,0,1,2.23-.8,2.12,2.12,0,0,1,2,1.09,5.44,5.44,0,0,1,2.66-1.09c1.91,0,2.48,1.39,2.48,3.29V22H94.58V16.27c0-1-.35-1.25-.85-1.25a2.22,2.22,0,0,0-1.2.57V22H89.87V16.27c0-1-.35-1.25-.85-1.25a2.22,2.22,0,0,0-1.2.57V22\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"I\"],[11,\"d\",\"M102.08,11.49V22h-1.61V12.19ZM100.47,8.9h1.61V7h-1.61Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"S\"],[11,\"d\",\"M105.32,19.22a4,4,0,0,0,2.79,1.47c.84,0,1.56-.33,1.56-1.42s-.88-1.38-1.65-1.67c-1.22-.47-2.72-1.11-2.72-3A2.56,2.56,0,0,1,108.13,12a4.38,4.38,0,0,1,2.24.57v1.5a3.6,3.6,0,0,0-2.24-.78c-.79,0-1.56.35-1.56,1.28s.7,1.19,1.45,1.47c1.22.48,2.92,1.22,2.92,3.24A2.56,2.56,0,0,1,108.11,22a4.13,4.13,0,0,1-2.79-1.1V19.22\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"T\"],[11,\"d\",\"M115.66,13.33v4.6c0,2.13.38,2.62,1.76,2.62a4.69,4.69,0,0,0,1.58-.44v1.38a6.07,6.07,0,0,1-1.93.49c-2.48,0-2.91-1.58-2.91-4.05v-4.6h-1.61V12.05h1.61V9.34l1.5-.68v3.39H119v1.28h-3.34\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/gothamist-logo.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/instagram", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iWvpzJRH",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"o-instagram-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 448 512\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Instagram\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/instagram.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/linked-in", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9xm4TuTZ",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"linked-in-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"LinkedIn\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M28.63-1H1.37A2.33,2.33,0,0,0-1,1.29V28.71A2.33,2.33,0,0,0,1.37,31H28.63A2.33,2.33,0,0,0,31,28.71V1.29A2.33,2.33,0,0,0,28.63-1ZM8.7,25.79H3.87V11.34H8.7V25.79ZM6.28,9.37h0a2.51,2.51,0,1,1,.06-5,2.51,2.51,0,1,1,0,5ZM26.13,25.79H21.31V18.06c0-1.94-.71-3.28-2.46-3.28a2.63,2.63,0,0,0-2.48,1.77,3.38,3.38,0,0,0-.16,1.17v8.07H11.38s.06-13.1,0-14.45h4.83v2.05A4.81,4.81,0,0,1,20.56,11c3.19,0,5.57,2.07,5.57,6.5v8.29ZM16.18,13.44a.13.13,0,0,1,0,0v0Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/linked-in.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/nypr-logo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tNDs3EWB",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"nypr-logo-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 515.62 207.19\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"NYPR\"],[10],[0,\"\\n  \"],[7,\"g\"],[11,\"class\",\"new-york\"],[9],[0,\"\\n    \"],[7,\"polygon\"],[11,\"class\",\"N\"],[11,\"points\",\"155.73 20.19 140.46 0.49 135.82 0.49 135.82 28.99 140.74 28.99 140.74 8.71 156.46 28.99 160.66 28.99 160.66 0.49 155.73 0.49 155.73 20.19 155.73 20.19\"],[9],[10],[0,\"\\n    \"],[7,\"polygon\"],[11,\"class\",\"E\"],[11,\"points\",\"192.03 0.49 170.9 0.49 170.9 28.99 192.23 28.99 192.23 24.51 175.91 24.51 175.91 16.86 190.2 16.86 190.2 12.38 175.91 12.38 175.91 4.97 192.03 4.97 192.03 0.49 192.03 0.49\"],[9],[10],[0,\"\\n    \"],[7,\"polygon\"],[11,\"class\",\"W\"],[11,\"points\",\"210.85 21.62 204.05 0.49 198.63 0.49 208.57 29.19 212.89 29.19 219.89 8.71 226.89 29.19 231.21 29.19 241.15 0.49 235.89 0.49 229.09 21.62 222.09 0.41 217.86 0.41 210.85 21.62 210.85 21.62\"],[9],[10],[0,\"\\n    \"],[7,\"polygon\"],[11,\"class\",\"Y\"],[11,\"points\",\"268.63 17.63 279.94 0.49 274.2 0.49 266.14 13.11 258.16 0.49 252.26 0.49 263.58 17.75 263.58 28.99 268.63 28.99 268.63 17.63 268.63 17.63\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"O\"],[11,\"d\",\"M298.36,0a14.61,14.61,0,0,0-14.94,14.78,14.9,14.9,0,0,0,29.8-.08A14.48,14.48,0,0,0,298.36,0Zm0,24.88c-5.66,0-9.69-4.61-9.69-10.18s3.95-10.1,9.61-10.1S308,9.2,308,14.78s-4,10.1-9.61,10.1Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"R\"],[11,\"d\",\"M338.44,18.2c4-1.1,6.79-3.95,6.79-8.67,0-5.58-4-9-10.58-9H321.94V29h5V19.05h6.27l7,9.94h5.9L338.44,18.2ZM327,14.62V5.05h7.29c3.71,0,5.9,1.63,5.9,4.76,0,2.94-2.28,4.81-5.86,4.81Z\"],[9],[10],[0,\"\\n    \"],[7,\"polygon\"],[11,\"class\",\"K\"],[11,\"points\",\"367.42 12.75 379.27 0.49 373.12 0.49 359.57 14.82 359.57 0.49 354.56 0.49 354.56 28.99 359.57 28.99 359.57 20.73 364 16.16 373.74 28.99 379.8 28.99 367.42 12.75 367.42 12.75\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"g\"],[11,\"class\",\"public\"],[9],[0,\"\\n    \"],[7,\"g\"],[11,\"class\",\"P\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M24.12,149.53V119.85H38.54c10.4,0,19.2-2.62,25.27-7.43h0c6-4.84,9.62-11.78,9.65-21.41h0v-.24c0-9-3.23-15.84-8.94-20.61h0c-5.71-4.77-14.16-7.49-24.75-7.49H5v86.84H0V57.69H39.77c11.41,0,21,3,27.93,8.65h0C74.58,72,78.45,80.53,78.43,90.77h0V91c0,10.89-4.3,19.6-11.54,25.29h0c-7.23,5.72-17.15,8.51-28.35,8.51H29.08v24.7h-5v0Z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M49.69,81.43C46.68,79,42.62,78,37.91,78H24.12v28H38c4.71,0,8.76-1.23,11.7-3.66a12.79,12.79,0,0,0,4.58-10.13v-.25a12.9,12.9,0,0,0-4.62-10.45ZM38,101h-9v-18h8.83c4,0,6.89.92,8.66,2.37s2.75,3.41,2.78,6.58v.25c-.13,5.35-3.53,8.62-11.32,8.83Z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[7,\"g\"],[11,\"class\",\"U\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M108.19,141.77c-7.59-7.11-11.66-17.86-11.64-31.91h0V57.67h5v52.19c0,13.16,3.72,22.3,10.08,28.29h0c6.37,6,15.74,9,27.72,9h0c12,0,21.48-3,28-9h0c6.49-6,10.3-15.31,10.32-28.91h0V57.69h5v51.55c0,14.48-4.19,25.4-11.91,32.55h0c-7.71,7.15-18.59,10.32-31.34,10.32h0c-12.77,0-23.54-3.24-31.12-10.34Z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M126.07,125c-3.34-3.66-5-9-5-15.64h0V57.65h5v51.71c0,5.88,1.48,9.83,3.73,12.29h0c2.26,2.46,5.46,3.73,9.82,3.75h0c4.38,0,7.61-1.25,9.85-3.61h0c2.24-2.36,3.7-6.13,3.7-11.81h0V57.69h5V110c0,6.5-1.71,11.68-5.07,15.23h0c-3.34,3.54-8.14,5.17-13.45,5.15h-.08c-5.3,0-10.08-1.71-13.4-5.36Z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"g\"],[11,\"class\",\"B\"],[9],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M243.52,111.74c-2.57-1.78-6-2.58-10.36-2.58H212.29v21h21.12c4,0,7.34-.75,9.93-2.5a9.26,9.26,0,0,0,4.11-7.93v-.25a9.1,9.1,0,0,0-3.93-7.72Zm-1,8a4.27,4.27,0,0,1-2,3.84c-1.35,1-3.77,1.64-7.12,1.63H217.25V114.12h15.91c3.73,0,6.19.74,7.51,1.68a4.13,4.13,0,0,1,1.82,3.66v.25Z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M240,79.36c-2.46-1.69-5.69-2.39-9.6-2.41H212.29V97.21h17.64c3.93,0,7.23-.63,9.82-2.28a8.92,8.92,0,0,0,4.1-7.78V86.9A8.89,8.89,0,0,0,240,79.36Zm-1.14,7.79a3.88,3.88,0,0,1-1.83,3.62c-1.31.86-3.73,1.49-7.12,1.48H217.25V81.92h13.17c3.31,0,5.56.65,6.76,1.51a3.86,3.86,0,0,1,1.7,3.47v.25Z\"],[9],[10],[0,\"\\n      \"],[7,\"path\"],[11,\"d\",\"M272.17,122.92c0-.62,0-1.18,0-1.56,0-2.69-.91-13.84-13.62-20.33,10.91-7.84,9.77-19.1,9.77-19.1,0-19.94-20.17-24.59-31.83-24.24H211.81v4.84h24.64c24.21,0,26.84,14,26.86,19.4,0,0,.85,15-15.42,19.27,0,0,19.23,4.84,19.23,20.76,0,0,2.86,22.61-30.41,22.61h-24.9v4.93h24.9c10.73,0,19.52-2.23,25.72-6.84a24.12,24.12,0,0,0,9.74-19.74Z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"g\"],[11,\"class\",\"L\"],[9],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"292.23 149.5 292.24 57.68 297.2 57.68 297.2 144.54 359.31 144.54 359.31 144.54 359.31 149.5 292.23 149.5 292.23 149.5\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"316.35 128.37 316.35 57.68 321.31 57.68 321.31 123.4 359.31 123.41 359.31 128.37 316.35 128.37 316.35 128.37\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"g\"],[11,\"class\",\"I\"],[9],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"400.94 149.5 400.94 57.68 405.91 57.68 405.91 149.5 400.94 149.5 400.94 149.5\"],[9],[10],[0,\"\\n      \"],[7,\"polygon\"],[11,\"points\",\"376.71 149.5 376.71 57.68 381.67 57.68 381.67 149.5 376.71 149.5 376.71 149.5\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"path\"],[11,\"class\",\"C\"],[11,\"d\",\"M473.61,151.28a47.39,47.39,0,0,1-33.5-13.47h0a47.24,47.24,0,0,1-13.86-34h0v-.25A47.45,47.45,0,0,1,440,69.66h0a48.38,48.38,0,0,1,34.57-13.83h0c18.48-.06,30.9,8,38.93,19.18h0l-4,2.9c-7.39-10.17-17.83-17.06-34.89-17.12h0c-25.06.05-43.34,18.72-43.39,42.76h0v.25c0,24.64,18.82,42.46,42.39,42.51h0c17.37-.07,27.24-6.79,35-16.62h0l-14.21-10.11c-5,5.65-11,9.76-20.06,9.69h0a22,22,0,0,1-16.81-7.57h0a27.34,27.34,0,0,1-6.42-18.15h0v-.24a27,27,0,0,1,6.42-17.9h0a22.1,22.1,0,0,1,16.81-7.58h0c9.19,0,15.81,4.59,21,11.13h0l-3.88,3.09c-4.79-5.9-9.6-9.21-17.08-9.26h0c-10.63,0-18.19,8.91-18.27,20.52h0v.24c.09,12,7.63,20.74,18.27,20.76h0c8.23-.07,12.58-3.53,17.73-9.66h0l1.47-1.78,22.07,15.71-1.47,2c-8.37,11.68-20.42,20.67-40.29,20.67h-.25Z\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"g\"],[11,\"class\",\"radio\"],[9],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"R\"],[11,\"d\",\"M200.89,195.92c4-1.11,6.8-3.95,6.8-8.68,0-5.58-4-9-10.59-9H184.39v28.51h5v-9.94h6.27l7,9.94h5.9l-7.69-10.79Zm-11.49-3.59v-9.57h7.29c3.71,0,5.91,1.63,5.91,4.76,0,2.93-2.28,4.81-5.87,4.81Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"A\"],[11,\"d\",\"M232.54,178h-4.65l-12.54,28.71h5.13l2.93-6.89h13.48l2.89,6.89h5.3L232.54,178Zm-7.29,17.38,4.88-11.4,4.93,11.4Z\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"D\"],[11,\"d\",\"M263.25,178.2H252.62v28.51h10.63c9,0,15.15-6.23,15.15-14.3s-6.19-14.21-15.15-14.21Zm0,24h-5.62V182.76h5.62c6,0,9.89,4.11,9.89,9.73s-3.91,9.66-9.89,9.66Z\"],[9],[10],[0,\"\\n    \"],[7,\"polygon\"],[11,\"class\",\"I\"],[11,\"points\",\"287.4 178.2 287.4 206.71 292.41 206.71 292.41 178.2 287.4 178.2 287.4 178.2\"],[9],[10],[0,\"\\n    \"],[7,\"path\"],[11,\"class\",\"O\"],[11,\"d\",\"M316.36,177.71a14.74,14.74,0,1,0,14.87,14.7,14.61,14.61,0,0,0-14.87-14.7Zm0,24.88c-5.65,0-9.69-4.6-9.69-10.18s3.95-10.1,9.61-10.1,9.69,4.61,9.69,10.18-4,10.1-9.61,10.1Z\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/nypr-logo.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/party-confetti", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "g5KSQtIa",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"party-confetti-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 131.3 169.69\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Party Confetti\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M32.2,14.85a2.67,2.67,0,0,1-5.15-1.38l.69-2.57-2.58-.69A2.67,2.67,0,0,1,26.48,5l.06,0,2.58.69.69-2.58A2.67,2.67,0,0,1,35,4.55l-.69,2.58,2.57.69A2.67,2.67,0,1,1,35.52,13l-.06,0-2.57-.69Zm30.24-1.37a2.61,2.61,0,0,1,3.55.95L67.44,17,70,15.5A2.59,2.59,0,0,1,72.55,20L70,21.44,71.49,24a2.6,2.6,0,0,1-4.44,2.7.54.54,0,0,1,0-.11L65.54,24,63,25.49A2.59,2.59,0,0,1,60.43,21L63,19.54,61.49,17a2.6,2.6,0,0,1,.95-3.54ZM30.11,110.85a2.67,2.67,0,0,1-3.65-1L24,105.64l-4.23,2.45a2.67,2.67,0,0,1-2.67-4.63L21.34,101,18.9,96.78a2.67,2.67,0,0,1,4.63-2.67L26,98.34,30.2,95.9a2.67,2.67,0,0,1,2.67,4.63L28.64,103l2.44,4.23a2.67,2.67,0,0,1-1,3.65ZM46,105.52,99.08,68.59a2.61,2.61,0,0,1,3.63.65,2.78,2.78,0,0,1,.36.76l28.13,96.36a2.61,2.61,0,0,1-4,2.83L46,109.75a2.59,2.59,0,0,1-.56-3.63A2.89,2.89,0,0,1,46,105.52Zm6,2.19,15.62,11.43,31.62-43.7-.15-.51L52,107.71Zm35.45,26,20-30.21-6.33-21.67L71.82,122.22l15.63,11.44ZM109.33,110,91.65,136.75l13.83,10.12,10.38-14.5L109.33,110Zm.36,39.93,14.37,10.52-6.34-21.73ZM46.45,88.74a2.64,2.64,0,0,1-2.07,1.92,2.55,2.55,0,0,1-2.57-1.07A44.23,44.23,0,0,0,13.69,71.76a2.63,2.63,0,0,1,.64-5.23,48.61,48.61,0,0,1,31.74,20,2.65,2.65,0,0,1,.38,2.19Zm-3.37-28a2.68,2.68,0,0,1-3.42-1.45A44.6,44.6,0,0,0,17.89,36a2.55,2.55,0,0,1-1.39-3.31,2.6,2.6,0,0,1,3.33-1.42A49.37,49.37,0,0,1,44.49,57.43a2.52,2.52,0,0,1-1.33,3.3ZM82,23.1h0a2.52,2.52,0,1,1,4.89,1.24A45.22,45.22,0,0,0,92.76,56.9,2.67,2.67,0,0,1,92,60.46a2.46,2.46,0,0,1-3.43-.61l0,0A49.78,49.78,0,0,1,82,23.1ZM53.86,29.69a2.72,2.72,0,0,1,2,.41A2.67,2.67,0,0,1,57,31.77,69.12,69.12,0,0,0,70.72,61.23a2.54,2.54,0,0,1-.37,3.56l-.09.07a2.72,2.72,0,0,1-3.73-.5A74.36,74.36,0,0,1,51.77,32.7,2.55,2.55,0,0,1,53.86,29.69ZM52.16,2A2.5,2.5,0,0,1,55.1.07a2.5,2.5,0,0,1,1.6,3.14,71.84,71.84,0,0,0-1.76,15.11,2.37,2.37,0,0,1-.1.7,2.54,2.54,0,0,1-2.63,2,2.36,2.36,0,0,1-2-2.5A79.29,79.29,0,0,1,52.16,2ZM15.73,57.08a8,8,0,1,1-5.64-9.76,8,8,0,0,1,5.64,9.76ZM5.43,54.32a2.67,2.67,0,0,0,5.12,1.5l0-.12a2.67,2.67,0,0,0-5.15-1.38Zm95.93-17.53a10.5,10.5,0,1,1,7.42,12.86A10.5,10.5,0,0,1,101.36,36.79Zm15.21,4.08a5.25,5.25,0,1,0-10.13-2.76v0a5.25,5.25,0,0,0,10.14,2.72ZM56.93,83.74a8,8,0,0,1,4-15.5l.15.05a8,8,0,0,1-4.14,15.45Zm-.5-8.42a2.67,2.67,0,0,0,5.12,1.5l0-.12a2.67,2.67,0,0,0-5.15-1.38Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/party-confetti.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/pinterest", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ked7Vhp5",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"pinterest-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 496 512\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Pinterest\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/pinterest.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/pointing-finger", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Bfd1U1F6",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"pointing-finger-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 120 133\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Finger Pointing\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"hand\"],[11,\"d\",\"M108.44,82.56l-22-34.27a2.26,2.26,0,0,0-.4-.47v-.73C86.09,39.32,78.61,33,69.42,33c-7,0-13,3.7-15.49,8.91a18.36,18.36,0,0,0-13.36-1.44c-6.84,2-9.53,8.08-10.51,11.42a28.38,28.38,0,0,0-13.38,4.25C10.47,60,10,67.92,10.28,72.2A17.44,17.44,0,0,0,2.9,74.74c-5.39,3.51-1.76,13.55-1,15.55l6.87,17A21.05,21.05,0,0,0,21.12,118a31.72,31.72,0,0,0,10.32,2.08,14.78,14.78,0,0,0,11.85-5.41,18.22,18.22,0,0,0,2,.12h.15c-3.58,5.2-3.38,10.86-1.27,14.52A6.63,6.63,0,0,0,49.74,133a5.06,5.06,0,0,0,1.48-.22c2.87-.87,20.58-2,31.08-2.46a3,3,0,0,0,.65-.11c.93-.29,9.6-3.47,25.61-27.63C114.72,93.28,111.29,85.56,108.44,82.56Zm-39-44.45c6.31,0,11.45,4,11.45,9V58c0,5.18-5.26,9.72-11.27,9.72-5.46,0-10.48-3.74-11.45-8.19.08-1.9,1.69-4.7,4.38-6.23,3-1.74,6.71-1.51,10.62.65a2.65,2.65,0,0,0,3.17-.47,2.62,2.62,0,0,0,.89-.27,2.5,2.5,0,0,0,1-3.4c-3.08-5.55-7.25-8.83-11.73-9.25a11.47,11.47,0,0,0-6.32,1.31,12.63,12.63,0,0,1,9.28-3.74ZM58,50.09c1.88-2.26,4.78-4.86,8-4.57a7.43,7.43,0,0,1,4,1.8A14.42,14.42,0,0,0,59.9,48.87,13.62,13.62,0,0,0,58,50.22Zm-18.5,58.47a37.33,37.33,0,0,1-11.31-8.09L20.47,83.56A2.64,2.64,0,0,0,17,82.26a2.54,2.54,0,0,0-1.32,3.38l7.85,17.23a2.11,2.11,0,0,0,.33.54c.18.22,4.45,5.47,13.34,9.76l.13,0c-3.31,2.36-7.81,2.33-14.46,0a15.79,15.79,0,0,1-9.25-7.83l-6.86-17c-1.6-4-2.09-8.71-1-9.44A13.66,13.66,0,0,1,13,77.17a2.56,2.56,0,0,0,2.11-.86,2.48,2.48,0,0,0,.62-2.16c0-.1-1.86-10.22,3.74-13.7A22.34,22.34,0,0,1,31.89,57a2.58,2.58,0,0,0,2.83-2.19c0-.08,1.15-7.67,7.31-9.43a13.47,13.47,0,0,1,10.72,1.75V58A12.6,12.6,0,0,0,53,60.11s0,.06,0,.1a14.65,14.65,0,0,0,5,8.25l5.4,16.45a2.53,2.53,0,0,0,1.37,1.53c6.42,3,12.63,6.84,13.26,8.16.3,1.62-1.46,5.12-2.83,7.14a5.65,5.65,0,0,1-1.65.52c-.52,0-1.7.09-3.3.28a56.35,56.35,0,0,1-11.06-1.29C45.31,98.49,43.93,90,43.89,89.69a2.71,2.71,0,0,0-.09-.41L36.43,64.14a2.62,2.62,0,0,0-3.22-1.75,2.55,2.55,0,0,0-1.79,3.16l7.32,25c.29,1.65,2.44,10.51,15.14,14.6a10,10,0,0,1-4.78,3.91C44.53,110.74,39.47,108.56,39.47,108.56ZM63,126.36h0c-3.79.28-7.37.6-9.94.94a4.73,4.73,0,0,1,.92-2.5c1.49-1.84,4.76-2.16,7.39-2.41l.91-.12C62.66,122.62,63,124.42,63,126.36ZM104.18,99.8h0C90.66,120.21,82.9,124.6,81.6,125.24c-1.92.09-7.45.36-13.43.75,0-2.18-.33-5.43-2.22-7.31a5.33,5.33,0,0,0-4.33-1.45l-.81.08c-3.22.31-8.09.78-11,4.31a9.24,9.24,0,0,0-1.76,3.58c-.38-1.62-.79-6,4.1-10.24,5.78-5,13.94-6.75,18.43-7.32,5.92-.1,8-1.78,8.66-2.76h0a26.45,26.45,0,0,0,3.14-6c2.07-4.24,2.31-9.84.54-13.47a2.63,2.63,0,0,0-3.48-1.2,2.53,2.53,0,0,0-1.23,3.4,5.7,5.7,0,0,1,.24.62,68.32,68.32,0,0,0-10.53-6L64.61,72.08a17.57,17.57,0,0,0,5,.73C78.54,72.81,86.09,66,86.09,58v-.7l18.07,28.21a2.54,2.54,0,0,0,.36.45C104.58,86,109.82,91.3,104.18,99.8Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"middle-knuckle\"],[11,\"d\",\"M38.09,95.26l-3.93,2.53a3.22,3.22,0,0,0-1,3.65A2.09,2.09,0,0,0,35,103a1.61,1.61,0,0,0,.87-.27l3.93-2.52a3.19,3.19,0,0,0,1-3.65c-.48-1.37-1.7-1.94-2.71-1.3Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"right-knuckle\"],[11,\"d\",\"M51,95a1.83,1.83,0,0,0,1.14-.42l4-3.26a2.68,2.68,0,0,0,.51-3.3,1.83,1.83,0,0,0-2.79-.6l-4,3.26a2.67,2.67,0,0,0-.51,3.3A2,2,0,0,0,51,95Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"left-knuckle\"],[11,\"d\",\"M20.29,108a4.15,4.15,0,0,0,1-.11l1.42-.31c1.73-.38,2.7-1.7,2.16-2.93s-2.38-1.93-4.12-1.54l-1.42.31c-1.73.39-2.7,1.7-2.16,2.93A3.35,3.35,0,0,0,20.29,108Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"starburst starburst--1\"],[11,\"d\",\"M45,32.09a2.11,2.11,0,0,0,1.67.91,2.07,2.07,0,0,0,1.62-.85,3.62,3.62,0,0,0,.05-4.24L37,12.91a2,2,0,0,0-3.29-.06,3.62,3.62,0,0,0-.05,4.24Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"starburst starburst--2\"],[11,\"d\",\"M73.5,25A2.57,2.57,0,0,0,76,22.37V2.63a2.5,2.5,0,1,0-5,0V22.37A2.57,2.57,0,0,0,73.5,25Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"starburst starburst--3\"],[11,\"d\",\"M89.88,33a2.87,2.87,0,0,0,2-.84L107.15,17a2.89,2.89,0,0,0,0-4.09,2.86,2.86,0,0,0-4,0l0,0L87.85,28.05a2.91,2.91,0,0,0,0,4.09A2.88,2.88,0,0,0,89.88,33Z\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"class\",\"starburst starburst--4\"],[11,\"d\",\"M117.49,49h-20a2.5,2.5,0,1,0,0,5h20a2.5,2.5,0,1,0,0-5Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/pointing-finger.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/reddit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Kzc2C9TT",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"reddit-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Reddit\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M21.45,16.12a1.56,1.56,0,0,1,.11.6,1.9,1.9,0,0,1-.38,1.13,1.77,1.77,0,0,1-.95.68h0a1.52,1.52,0,0,1-.55.1,2,2,0,0,1-1.21-.43,1.82,1.82,0,0,1-.68-1.1h0a2.21,2.21,0,0,1,0-.35,1.9,1.9,0,0,1,.36-1.09A1.82,1.82,0,0,1,19,15h0a2,2,0,0,1,.64-.11,2,2,0,0,1,1.1.34,1.77,1.77,0,0,1,.72.91h0ZM20.25,21a.94.94,0,0,0-.52-.16.77.77,0,0,0-.45.14h0a8.71,8.71,0,0,1-4.43,1.22,7.65,7.65,0,0,1-3.36-.76h0a3.56,3.56,0,0,1-.54-.34,2.4,2.4,0,0,0-.32-.17.9.9,0,0,0-.72,0h0a.82.82,0,0,0-.42.35,1,1,0,0,0-.14.52,1.12,1.12,0,0,0,.11.47.88.88,0,0,0,.35.34,8.9,8.9,0,0,0,5,1.47,11,11,0,0,0,4.62-1h0c.19-.11.44-.21.67-.36a1.4,1.4,0,0,0,.33-.27,1,1,0,0,0,.22-.41h0a.76.76,0,0,0,0-.21.92.92,0,0,0-.09-.37A1,1,0,0,0,20.25,21ZM9.76,18.52h0a1.74,1.74,0,0,0,.59.1,2,2,0,0,0,1.31-.52,1.78,1.78,0,0,0,.6-1.31v-.12a1.81,1.81,0,0,0-.59-1.31,1.94,1.94,0,0,0-1.31-.53,1.83,1.83,0,0,0-.4.05h0a1.9,1.9,0,0,0-1.42,1.27h0a1.71,1.71,0,0,0-.09.55,2,2,0,0,0,.36,1.12,1.75,1.75,0,0,0,.94.68ZM30,13.82h0a1.27,1.27,0,0,1,0,.2,3.72,3.72,0,0,1-.62,2,4.14,4.14,0,0,1-1.45,1.34,6.36,6.36,0,0,1,.06.87,7.25,7.25,0,0,1-1.48,4.35h0A12.69,12.69,0,0,1,19.39,27h0A18.73,18.73,0,0,1,15,27.5a17.37,17.37,0,0,1-6.49-1.23h0a11.18,11.18,0,0,1-5.43-4.34,7.07,7.07,0,0,1-1-3.67,6.36,6.36,0,0,1,.06-.87A4.15,4.15,0,0,1,.66,16.08a3.86,3.86,0,0,1-.66-2H0a3.89,3.89,0,0,1,1.11-2.65A3.64,3.64,0,0,1,3.7,10.31h.35a4.14,4.14,0,0,1,1.47.26h0a4.46,4.46,0,0,1,1.16.66A3.52,3.52,0,0,1,7.07,11a15.59,15.59,0,0,1,7.14-1.92A8,8,0,0,1,15,5.51a3.77,3.77,0,0,1,2.37-1.89h0a6.62,6.62,0,0,1,1.17-.11,8.24,8.24,0,0,1,3,.63,3.75,3.75,0,0,1,1.75-1.42h0a4.42,4.42,0,0,1,1.3-.21A3.31,3.31,0,0,1,26,2.78h0A3.39,3.39,0,0,1,27.53,4,3.44,3.44,0,0,1,28.14,6a2.34,2.34,0,0,1,0,.38h0a3.34,3.34,0,0,1-1.17,2.24,3.57,3.57,0,0,1-2.33.9l-.42,0A3.43,3.43,0,0,1,22,8.38a3.38,3.38,0,0,1-1-2.31.57.57,0,0,1,0-.13,6.39,6.39,0,0,0-2.49-.65l-.37,0h0a1.92,1.92,0,0,0-1.5,1h0a6.39,6.39,0,0,0-.53,2.8,15.88,15.88,0,0,1,7,2h0l0,0,.19.1a3.72,3.72,0,0,1,.48-.35A3.91,3.91,0,0,1,26,10.23a3.83,3.83,0,0,1,1,.13h0a4.08,4.08,0,0,1,2,1.25,3.79,3.79,0,0,1,.95,2.2ZM22.88,5.91V6h0a1.68,1.68,0,0,0,1.63,1.56h.1a1.64,1.64,0,0,0,1.12-.47A1.62,1.62,0,0,0,26.26,6h0V5.92a1.63,1.63,0,0,0-.52-1.16,1.71,1.71,0,0,0-1.17-.5,1.39,1.39,0,0,0-.4.06h0a1.8,1.8,0,0,0-.9.59A1.58,1.58,0,0,0,22.88,5.91ZM5,12.39a2.35,2.35,0,0,0-1-.26H3.87a2.06,2.06,0,0,0-1.31.55A1.83,1.83,0,0,0,2,14H2a.45.45,0,0,0,0,.11,1.79,1.79,0,0,0,.25.87,2.26,2.26,0,0,0,.45.53A9.21,9.21,0,0,1,5,12.39Zm21.05,5.93a5.29,5.29,0,0,0-1-3,10,10,0,0,0-5.25-3.53h0c-.39-.12-.78-.23-1.18-.32a16.57,16.57,0,0,0-8.45.32,10.15,10.15,0,0,0-5.25,3.54h0a5.26,5.26,0,0,0-1,3,4.38,4.38,0,0,0,.16,1.19h0a5.93,5.93,0,0,0,1.25,2.33,8.88,8.88,0,0,0,2,1.73c.16.11.33.2.5.3A14.67,14.67,0,0,0,15,25.62c.42,0,.85,0,1.26,0a13.68,13.68,0,0,0,7-2.45h0A7.54,7.54,0,0,0,25,21.41a5.64,5.64,0,0,0,1-2.19h0A4.58,4.58,0,0,0,26.09,18.32Zm2-4.3a1.6,1.6,0,0,0-.19-.77h0a1.88,1.88,0,0,0-.78-.82A2.23,2.23,0,0,0,26,12.14a2.35,2.35,0,0,0-1,.23,9.38,9.38,0,0,1,2.42,3.12,2,2,0,0,0,.46-.57A1.91,1.91,0,0,0,28.06,14Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/reddit.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0kVimwWl",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"search-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Search\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M12.72,3.78a8.22,8.22,0,0,1,8,8.37,8.48,8.48,0,0,1-2.36,5.91,7.84,7.84,0,0,1-5.69,2.45,8.22,8.22,0,0,1-8-8.36,8.22,8.22,0,0,1,8.05-8.37M19,22.44l7,7a1.72,1.72,0,0,0,2.44,0,1.74,1.74,0,0,0,0-2.44l-6.92-6.92a12.4,12.4,0,0,0,2.85-8A12,12,0,0,0,12.72,0,12,12,0,0,0,1,12.17,12,12,0,0,0,12.72,24.35,11.28,11.28,0,0,0,19,22.44Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/search.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/spotify", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5XBOwejk",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"spotify-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 17 17\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Spotify\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zm3.898 12.26a.53.53 0 0 1-.729.175c-1.996-1.22-4.508-1.495-7.467-.82a.53.53 0 0 1-.235-1.033c3.237-.74 6.015-.42 8.255.948a.53.53 0 0 1 .176.73zm1.04-2.315a.663.663 0 0 1-.911.218c-2.285-1.404-5.768-1.811-8.47-.99a.664.664 0 0 1-.385-1.269c3.087-.937 6.924-.483 9.548 1.13.312.191.41.6.218.91zm.09-2.41c-2.74-1.628-7.26-1.777-9.875-.983A.795.795 0 1 1 3.19 5.03c3.003-.911 7.994-.735 11.148 1.137a.794.794 0 1 1-.81 1.367h-.001z\"],[9],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/spotify.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/twitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "T21uT6aB",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"o-twitter-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 512 512\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Twitter\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/twitter.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/video", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "B8M6fZu8",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"o-video-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Video Icon\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M29.64,5.33a2.16,2.16,0,0,0-2-1H2.46a2.25,2.25,0,0,0-2.07,1A8.81,8.81,0,0,0,0,6.27V23.73a5.27,5.27,0,0,0,.39.95,2.21,2.21,0,0,0,1.95,1H27.51a2.3,2.3,0,0,0,2.1-1,9,9,0,0,0,.39-.95V6.27A5.07,5.07,0,0,0,29.64,5.33Zm-16.08.61h3.12a.2.2,0,0,1,.18.12v2H13.35V6.15a.19.19,0,0,1,.12-.22h.09ZM5,24.07l-.21,0h-3c-.18,0-.27,0-.27-.24V21.94H5v2.13ZM5.14,7.94A.26.26,0,0,1,5,8.13H1.74a.18.18,0,0,1-.12,0v-2a.2.2,0,0,1,.15-.12H4.93c.09,0,.15,0,.18.12v.06c0,.61,0,1.22,0,1.82Zm5.74,16.13c-.09,0-.15,0-.21,0h-3A.23.23,0,0,1,7.39,24v-2h3.49v2.16ZM11,7.91a.22.22,0,0,1-.12.25H7.69A.28.28,0,0,1,7.48,8V6h3.25a.23.23,0,0,1,.27.15V7.91Zm5.74,16.16c-.09,0-.15,0-.24,0h-3c-.18,0-.24,0-.24-.24V22.12a.59.59,0,0,1,0-.21h3.46v2.16Zm.36-8.25L13.65,18c-.69.45-1.27.12-1.27-.71V12.72c0-.85.58-1.16,1.27-.7l3.45,2.16A.9.9,0,0,1,17.1,15.82ZM22.6,24a.2.2,0,0,1-.15.12H19.27a.2.2,0,0,1-.15-.12v-2H22.6v2Zm.12-16.07c0,.12,0,.22-.15.22h-3.3V5.94h3.27a.16.16,0,0,1,.21.12v.09A17.42,17.42,0,0,0,22.72,7.91Zm5.75,16.16H25V21.94h3.46v2.13Zm.12-16.13c0,.13,0,.22-.18.22H25.22a.18.18,0,0,1-.12,0V6h3.25a.23.23,0,0,1,.27.15v.12A16,16,0,0,0,28.59,7.94Z\"],[11,\"fill-rule\",\"evenodd\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/video.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/wnyc-logo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "P6JKYiED",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"wnyc-logo-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"1 8 22 9\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"WNYC\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M12.422 16.735h4.857v-6.93h-4.857v6.93zm3.086-5.4h.963l-1.181 1.892v1.216h-.866V13.24l-1.181-1.905h.981l.64 1.092.644-1.092zm2.625 5.4h4.857V8h-4.857v8.735zm2.542-2.23a1.578 1.578 0 0 1-1.603-1.607v-.009c0-.905.697-1.616 1.638-1.616.635 0 1.044.266 1.32.648l-.649.502c-.178-.222-.382-.364-.68-.364-.435 0-.74.368-.74.821v.01c0 .466.305.83.74.83.325 0 .516-.151.702-.378l.649.462c-.294.404-.689.701-1.377.701zm-13.964 2.23h4.857V9.028H6.711v7.707zm3.941-2.292h-.755L8.57 12.738v1.705h-.853v-3.108h.804L9.8 12.978v-1.643h.852v3.108zm-8.598.016h.75l.622-1.79.627 1.79h.75l1.039-3.13H4.95l-.542 1.798-.6-1.807h-.741l-.6 1.807-.541-1.798h-.91l1.038 3.13zm-1.054.8h4.857v1.476H1v-1.476z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/wnyc-logo.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/wqxr-logo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mmsIYVtK",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"wqxr-logo-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 114 25\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"WQXR\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M51.048 10.922v-.05c0-5.056-4.269-9.105-10.032-9.105-5.765 0-10.086 4.1-10.086 9.155v.05c0 5.056 4.268 9.106 10.032 9.106.265 0 .524-.017.784-.035a9 9 0 0 0 2.212 2.623c1.175.96 2.682 1.687 4.431 2.078l2.867-4.012c-2.3.179-3.76-1.047-4.584-2.208 2.68-1.645 4.376-4.436 4.376-7.602zm-5.282.05c0 2.539-1.896 4.703-4.75 4.703-2.828 0-4.776-2.212-4.776-4.753v-.05c0-2.54 1.892-4.704 4.722-4.704 2.855 0 4.804 2.213 4.804 4.754v.05z\"],[11,\"class\",\"W\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M6.089 19.442h4.396l3.643-10.076 3.667 10.076h4.398l6.086-17.624h-5.228l-3.174 10.125-3.512-10.176h-4.346L8.507 11.943 5.334 1.818H0z\"],[11,\"class\",\"Q\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M54.791 19.442h5.426l3.361-5.328 3.335 5.328h5.552l-5.974-9.04 5.726-8.635H66.79l-3.112 4.974-3.087-4.974H55.04l5.726 8.685z\"],[11,\"class\",\"X\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M93.989 7.851v-.05c0-1.742-.52-3.105-1.532-4.116-1.16-1.21-2.988-1.918-5.631-1.918h-8.175v17.675h4.792v-5.354h2.099l3.483 5.354h5.533l-4.126-6.163c2.148-.933 3.557-2.725 3.557-5.428zm-4.815.304c0 1.287-.939 2.096-2.569 2.096h-3.162V6.008h3.137c1.606 0 2.594.707 2.594 2.096v.05z\"],[11,\"class\",\"R\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M111.349 22.977H114V0h-2.651z\"],[11,\"class\",\"rest-two\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M104.28 10.605a1.768 1.768 0 1 0-.003-3.536 1.768 1.768 0 0 0 .004 3.536\"],[11,\"class\",\"dot-two\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M104.28 16.79a1.767 1.767 0 1 0-.002-3.533 1.767 1.767 0 0 0 .003 3.534\"],[11,\"class\",\"dot-one\"],[9],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M108.698 22.977h.883V0h-.883z\"],[11,\"class\",\"rest-one\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/wqxr-logo.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/components/nypr-a-svg/youtube", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nQRGdSdi",
    "block": "{\"symbols\":[\"&attrs\"],\"statements\":[[8,\"svg\"],[11,\"class\",\"youtube-icon\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 30 30\"],[13,1],[9],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"YouTube\"],[10],[0,\"\\n  \"],[7,\"path\"],[11,\"d\",\"M29.37,7.75a3.76,3.76,0,0,0-2.65-2.67C24.38,4.45,15,4.45,15,4.45s-9.38,0-11.72.63A3.76,3.76,0,0,0,.63,7.75,39.4,39.4,0,0,0,0,15a39.4,39.4,0,0,0,.63,7.27,3.71,3.71,0,0,0,2.65,2.63c2.34.63,11.72.63,11.72.63s9.38,0,11.72-.63a3.71,3.71,0,0,0,2.65-2.63A39.4,39.4,0,0,0,30,15,39.4,39.4,0,0,0,29.37,7.75ZM11.93,19.48V10.56L19.77,15l-7.84,4.46Z\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/components/nypr-a-svg/youtube.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GfZhxA4Y",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"nypr-design-system\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The documentation and demos for this addon live in Storybook. To start Storybook, run \"],[7,\"code\"],[9],[0,\"yarn storybook\"],[10],[0,\" in the terminal.\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/index.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/templates/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "61zWyJBB",
    "block": "{\"symbols\":[],\"statements\":[[0,\"404 - Page Not Found\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/not-found.hbs"
    }
  });

  _exports.default = _default;
});

;define("dummy/utils/titleize", ["exports", "ember-cli-string-helpers/utils/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _titleize.default;
    }
  });
});

;define("dummy/utils/toggle-box-positions", ["exports", "nypr-design-system/utils/toggle-box-positions"], function (_exports, _toggleBoxPositions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "positionRightCenter", {
    enumerable: true,
    get: function get() {
      return _toggleBoxPositions.positionRightCenter;
    }
  });
  Object.defineProperty(_exports, "positionTopCenter", {
    enumerable: true,
    get: function get() {
      return _toggleBoxPositions.positionTopCenter;
    }
  });
  Object.defineProperty(_exports, "positionBottomCenter", {
    enumerable: true,
    get: function get() {
      return _toggleBoxPositions.positionBottomCenter;
    }
  });
});

;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
