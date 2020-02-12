'use strict';

define("dummy/tests/integration/components/nypr-a-ad-label-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-ad-label', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YU8wOQbZ",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-ad-label\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-ad__label').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-a-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "cUimu8DL",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-button\",[],[[\"@text\"],[\"Foo\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-button').hasText('Foo');
      this.set('click', () => assert.ok('click handler called'));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "abI8duFG",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-a-button\",[],[[\"@onclick\"],[[21,\"click\"]]],{\"statements\":[[0,\"\\n        Click Me\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-button').hasText('Click Me');
      await (0, _testHelpers.click)('.o-button');
    });
    (0, _qunit.test)('alternate forms', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "oipfdxan",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-button\",[],[[\"@url\",\"@text\"],[\"https://example.com\",\"foo\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('a.o-button').hasAttribute('href', 'https://example.com', 'passing a @url makes an `a` tag');
      assert.dom('a.o-button').hasText('foo');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9+mHjSqh",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-button\",[],[[\"@blank\",\"@text\"],[true,\"plain\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('button.o-button').doesNotExist('rendered without class');
      assert.dom('button').exists('rendered a blank button');
    });
    (0, _qunit.test)('classes can be added via component helper form', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2/0YOH0N",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"component\",[\"nypr-a-button\"],[[\"class\",\"text\"],[\"foo\",\"bar\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('button.o-button.foo').hasText('bar');
    });
  });
});

define("dummy/tests/integration/components/nypr-a-kicker-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-kicker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UjiaGLTA",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-kicker\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-kicker').exists(); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6nneN7L4",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-a-kicker\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});

define("dummy/tests/integration/components/nypr-a-media-object-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-media-object', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Hayg3GQ8",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-media-object\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.media-object').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-a-picture-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-picture', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const IMG = 'https://picsum.photos/300';
      this.set('img', IMG);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YzGvvk6i",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-picture\",[],[[\"@srcS\"],[[21,\"img\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('picture').exists();
      assert.dom('picture img').hasAttribute('src', IMG);
    });
  });
});

define("dummy/tests/integration/components/nypr-a-section-heading-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-section-heading', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZgvjJeIl",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-section-heading\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('h2.o-section-heading').exists(); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "oTEW2DiM",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-a-section-heading\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('h2.o-section-heading').hasText('template block text');
    });
  });
});

define("dummy/tests/integration/components/nypr-a-story-headline-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-story-headline', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Hffh2qx1",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-story-headline\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/H0ExOsr",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-a-story-headline\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('h1.o-headline').hasText('template block text');
    });
  });
});

define("dummy/tests/integration/components/nypr-a-svg-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-svg', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MZvicRom",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-svg\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '', 'renders nothing with no inputs');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7lyhVbkb",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-svg\",[],[[\"@icon\"],[\"whatever\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok('renders ok with a bad filename');
    });
  });
});

define("dummy/tests/integration/components/nypr-a-tag-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "pLP1zeId",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-tag\",[],[[\"@url\",\"@tag\"],[\"http://example.com\",\"foo\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('a.o-tag').hasText('#foo', 'prepends a "#" character');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ULZYclml",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-tag\",[],[[\"@url\",\"@tag\",\"@prefix\"],[\"http://example.com\",\"foo\",\"\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('a.o-tag').hasText('foo', 'can override prefix');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kSIiXHxC",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-a-tag\",[],[[\"@tag\"],[\"bar\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('span.o-tag').exists('renders a span if no url is provided');
    });
  });
});

define("dummy/tests/integration/components/nypr-a-toggle-box-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-basic-dropdown/test-support/helpers"], function (_qunit, _emberQunit, _testHelpers, _helpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-a-toggle-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qi2nSty/",
        "block": "{\"symbols\":[\"toggle\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-a-toggle-box\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"trigger\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"the-label\"],[9],[0,\"Toggle Box Label\"],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"dropdown\"]],[],[[],[]],{\"statements\":[[0,\"\\n          Dropdown Contents\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      })); // target span b/c there's an icon with assistive text in the label

      assert.dom('.c-toggle-box__label span.the-label').hasText('Toggle Box Label');
      await (0, _helpers.clickTrigger)();
      assert.dom('.c-toggle-box__dropdown').hasText('Dropdown Contents');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-author-block-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-author-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const AUTHOR = {
        name: 'Jen Chung',
        title: 'Executive editor and co-founder',
        image: '/images/staff/jen-chung.jpg',
        bio: "Jen, a New Jersey-born New Yorker, edits Gothamist. She attended Columbia University, likes learning about NYC infrastructure (the subway system's intricacies, how engineers design skyscrapers), and hopes that one day a NYC zoo will have pandas. Her favorite TV shows are usually crime procedurals set in New York City, preferably with a chung-chung sound effect. She also yells at cars for not obeying stop signs.",
        contact: {
          twitter: 'jenchung',
          email: 'jen@gothamist.com'
        }
      };
      this.set('author', AUTHOR);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "g4p2skyf",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-author-block\",[],[[\"@author\"],[[21,\"author\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').hasText(AUTHOR.name);
      assert.dom('[data-test-author-title]').hasText(AUTHOR.title);
      assert.dom('[data-test-author-media] img').hasAttribute('src', AUTHOR.image);
      assert.dom('[data-test-author-bio]').hasText(AUTHOR.bio);
    });
  });
});

define("dummy/tests/integration/components/nypr-m-block-list-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-block-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "q6SmEDv5",
        "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-block-list\",[],[[\"@items\"],[[27,\"array\",[\"foo\",\"bar\"],null]]],{\"statements\":[[0,\"\\n        \"],[1,[22,1,[]],false],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block-list').exists();
      assert.dom('.c-block-list li').exists({
        count: 2
      });
      assert.dom('.c-block-list').includesText('foo bar', 'yields out items unchanged');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-block-meta-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-block-meta', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "d53sCISn",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-block-meta\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block-meta').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-m-block-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DDyAnsuj",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-block\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "g9cD2VZN",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-block\",[],[[\"@orientation\"],[\"h\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block--horizontal').exists('`orientation` controls a class');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kLLVKiBS",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-block\",[],[[\"@orientation\",\"@size\"],[\"h\",\"l\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block--horizontal.c-block--horizontal--large').exists('`size` controls a class');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5iQL13GC",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-block\",[],[[\"@urgent\"],[true]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block--urgent').exists();
    });
    (0, _qunit.test)('icons', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AxHNNSZ/",
        "block": "{\"symbols\":[\"block\",\"o\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-block\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"object\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"title\"]],[],[[\"@h2\",\"@hasGallery\"],[\"\",true]],{\"statements\":[[0,\"\\n            Foo\\n          \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block__title--is-gallery').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "na8j2Q6W",
        "block": "{\"symbols\":[\"block\",\"o\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-block\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"object\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"title\"]],[],[[\"@h2\",\"@hasVideo\"],[\"\",true]],{\"statements\":[[0,\"\\n            Foo\\n          \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block__title--is-video').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "X/hRYw2i",
        "block": "{\"symbols\":[\"block\",\"o\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-block\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"object\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"title\"]],[],[[\"@h2\",\"@hasAudio\"],[\"\",true]],{\"statements\":[[0,\"\\n            Foo\\n          \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block__title--is-audio').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "X/hRYw2i",
        "block": "{\"symbols\":[\"block\",\"o\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-block\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"object\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"title\"]],[],[[\"@h2\",\"@hasAudio\"],[\"\",true]],{\"statements\":[[0,\"\\n            Foo\\n          \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block__title--is-audio').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qI2Ypngu",
        "block": "{\"symbols\":[\"block\",\"o\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-block\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"object\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"title\"]],[],[[\"@h2\",\"@hasVideo\",\"@hasGallery\"],[\"\",true,true]],{\"statements\":[[0,\"\\n            Foo\\n          \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block__title--is-gallery').exists();
      assert.dom('.c-block__title--is-video').doesNotExist('gallery takes precedence over video');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-box-banner-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-sinon-qunit/test-support/test"], function (_qunit, _emberQunit, _testHelpers, _test) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-box-banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _test.default)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/blStbSY",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-box-banner\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-box-banner').exists(); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zlb4ycIZ",
        "block": "{\"symbols\":[\"banner\",\"body\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-box-banner\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"title\"]],[],[[],[]],{\"statements\":[[0,\"TITLE\"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"dek\"]],[],[[],[]],{\"statements\":[[0,\"BODY\"]],\"parameters\":[]}],[0,\"\\n          \"],[6,[22,2,[\"cta\"]],[],[[],[]],{\"statements\":[[0,\"CTA\"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-box-banner__title').hasText('TITLE');
      assert.dom('.o-box-banner__dek').hasText('BODY');
      assert.dom('.o-box-banner__cta').hasText('CTA');
    });
    (0, _test.default)('it calls the @close action when close is clicked', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/blStbSY",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-box-banner\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-box-banner__close').doesNotExist('no close button if @close is not passed in');
      this.set('CLOSE', this.mock('close').once());
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4ARIhale",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-box-banner\",[],[[\"@close\"],[[21,\"CLOSE\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('.o-box-banner__close');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-brands-linkroll-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-brands-linkroll', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "pyvLf9Q+",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nypr-m-brands-linkroll\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-toggle-box--linkroll').exists();
    });
    (0, _qunit.test)('can choose a site to exclude', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "G5XDfzL8",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-brands-linkroll\",[],[[\"@exclude\"],[\"gothamist\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('.c-toggle-box--linkroll > button'); // open the linkroll

      assert.dom('.c-nypr-nav__list').doesNotIncludeText('Gothamist');
    });
    (0, _qunit.test)('can exclude multiple sites', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6q8bjmNw",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-brands-linkroll\",[],[[\"@exclude\"],[[27,\"array\",[\"gothamist\",\"wqxr\"],null]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('.c-toggle-box--linkroll > button'); // open the linkroll

      assert.dom('.c-nypr-nav__list').doesNotIncludeText('Gothamist');
      assert.dom('.c-nypr-nav__list').doesNotIncludeText('WQXR');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-breadcrumb-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-breadcrumb', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "GDPJlLS9",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-breadcrumb\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-breadcrumbs').exists();
      this.set('breadcrumbs', [{
        label: 'News',
        url: '/tags/news'
      }, {
        label: 'Politics'
      }]);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "P+ppjG4G",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-breadcrumb\",[],[[\"@breadcrumbs\"],[[21,\"breadcrumbs\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-breadcrumb').exists({
        count: 2
      });
      assert.dom('a.o-breadcrumb').hasAttribute('href', '/tags/news');
      assert.dom('span.o-breadcrumb').exists({
        count: 1
      });
    });
  });
});

define("dummy/tests/integration/components/nypr-m-byline-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-byline', function (hooks) {
    const IN_HOUSE = [{
      name: 'Foo Bar',
      url: 'https://example.com/foo-bar'
    }, {
      name: 'Biz Baz',
      url: 'https://example.com/biz-baz'
    }];
    const CONTRIBUTORS = [{
      name: 'Qux Wux',
      url: 'https://example.com/qux-wux',
      org: {
        name: 'WNYC',
        url: 'https://example.org/wnyc'
      }
    }, {
      name: 'Zooey Yooey',
      url: 'https://example.com/zooey-yooey',
      org: {
        name: 'NPR',
        url: 'https://example.org/npr'
      }
    }];
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QElBFcV/",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-byline').exists();
    });
    (0, _qunit.test)('1 to n in house authors', async function (assert) {
      this.setProperties({
        IN_HOUSE,
        JUST_ONE: IN_HOUSE.slice(-1)
      }); // N many

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+9NWfsl0",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@authors\"],[[21,\"IN_HOUSE\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').exists({
        count: 2
      });
      (0, _testHelpers.findAll)('[data-test-author-name]').forEach((el, i) => {
        assert.dom(el).hasText(IN_HOUSE[i].name);
        assert.dom(el).hasAttribute('href', IN_HOUSE[i].url);
      }); // JUST ONE

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "I4gpVjSe",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@authors\"],[[21,\"JUST_ONE\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').exists({
        count: 1
      });
      assert.dom('.o-byline').doesNotIncludeText(',', 'single names should not be a serialized list');
    });
    (0, _qunit.test)('1 to n authors from contributing orgs, no in house authors', async function (assert) {
      this.setProperties({
        CONTRIBUTORS,
        JUST_ONE: CONTRIBUTORS.slice(-1)
      }); // N many

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5puKv9R+",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@authors\"],[[21,\"CONTRIBUTORS\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').exists({
        count: 2
      });
      assert.dom('[data-test-author-org]').exists({
        count: 2
      });
      (0, _testHelpers.findAll)('[data-test-author-name]').forEach((el, i) => {
        assert.dom(el).hasText(CONTRIBUTORS[i].name);
        assert.dom(el).hasAttribute('href', CONTRIBUTORS[i].url);
      });
      (0, _testHelpers.findAll)('[data-test-author-org-link]').forEach((el, i) => {
        assert.dom(el).hasText(CONTRIBUTORS[i].org.name);
        assert.dom(el).hasAttribute('href', CONTRIBUTORS[i].org.url);
      }); // JUST ONE

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "I4gpVjSe",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@authors\"],[[21,\"JUST_ONE\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').exists({
        count: 1
      });
      assert.dom('[data-test-author-org]').exists({
        count: 1
      });
    });
    (0, _qunit.test)('1 to n in-house authors with 1 to n authors from contributing orgs', async function (assert) {
      const ALL = IN_HOUSE.concat(CONTRIBUTORS);
      const JUST_TWO = IN_HOUSE.slice(-1).concat(CONTRIBUTORS.slice(-1));
      this.setProperties({
        ALL,
        JUST_TWO
      }); // N many

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IA7FKJ6c",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@authors\"],[[21,\"ALL\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').exists({
        count: 4
      });
      assert.dom('[data-test-author-org]').exists({
        count: 2
      });
      (0, _testHelpers.findAll)('[data-test-author-name]').forEach((el, i) => {
        assert.dom(el).hasText(ALL[i].name);
        assert.dom(el).hasAttribute('href', ALL[i].url);
      }); // JUST ONE OF EACH

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MKakx5r3",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@authors\"],[[21,\"JUST_TWO\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-author-name]').exists({
        count: 2
      });
      assert.dom('[data-test-author-org]').exists({
        count: 1
      });
      (0, _testHelpers.findAll)('[data-test-author-name]').forEach((el, i) => {
        assert.dom(el).hasText(JUST_TWO[i].name);
        assert.dom(el).hasAttribute('href', JUST_TWO[i].url);
      });
    });
    (0, _qunit.test)('sponsored', async function (assert) {
      const SPONSOR = {
        name: 'BMW',
        url: 'https://example.com/bmw'
      };
      this.setProperties({
        SPONSOR
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Mp3pVkm5",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-byline\",[],[[\"@sponsor\"],[[21,\"SPONSOR\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-sponsor-name]').hasText("Sponsored by ".concat(SPONSOR.name));
      assert.dom('[data-test-sponsor-name]').hasAttribute('href', SPONSOR.url);
    });
  });
});

define("dummy/tests/integration/components/nypr-m-figcaption-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-figcaption', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const CAPTION = "Figure caption";
      const CREDIT = "Credit for this figure";
      this.setProperties({
        caption: CAPTION,
        credit: CREDIT
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rIwR2UGl",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-figcaption\",[],[[\"@caption\",\"@credit\"],[[21,\"caption\"],[21,\"credit\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('figcaption.o-caption').exists();
      assert.dom('figcaption').includesText(CAPTION);
      assert.dom('figcaption .o-credit').hasText(CREDIT);
    });
    (0, _qunit.test)('the many variations of figcaptions', async function (assert) {
      const CAPTION = "Figure caption";
      const CREDIT = "Credit for this figure";
      this.setProperties({
        caption: CAPTION,
        credit: CREDIT
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rIwR2UGl",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-figcaption\",[],[[\"@caption\",\"@credit\"],[[21,\"caption\"],[21,\"credit\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-caption > .o-icon').exists('inline form puts the icon insdide the caption root');
      assert.dom('.o-caption > .o-icon + .o-caption__text').exists('inline form puts the text as a sibling to the icon');
      assert.dom('.o-caption > .o-caption__text > span:not(.o-credit)').hasText(CAPTION);
      assert.dom('.o-caption > .o-caption__text > span.o-credit').hasText(CREDIT);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "gNrSnI64",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-figcaption\",[],[[\"@credit\"],[[21,\"credit\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-caption > .o-caption__text > span.o-credit > span.o-icon').exists('inline form WITHOUT a caption puts the icon inside the credit span');
      assert.dom('.o-caption > .o-caption__text > span.o-credit > span:not(.o-icon)').hasText(CREDIT);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hrDfPhqe",
        "block": "{\"symbols\":[\"figcaption\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-figcaption\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"caption\"]],[],[[\"@caption\"],[[21,\"caption\"]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-caption > .o-icon + .o-caption__text').exists('block form with only an inline caption puts the icon directly below `.o-caption` as a sibling of `.o-caption__text`');
      assert.dom('.o-caption > .o-caption__text > span').hasText(CAPTION);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7jbFjDSN",
        "block": "{\"symbols\":[\"figcaption\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-figcaption\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"credit\"]],[],[[\"@credit\"],[[21,\"credit\"]]]],[0,\"\\n        \"],[6,[22,1,[\"caption\"]],[],[[\"@caption\"],[[21,\"caption\"]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-caption > .o-credit + .o-icon + .o-caption__text').exists('adding a credit does not interfere with the icon rendering');
      assert.dom('.o-caption > .o-credit > span').doesNotExist('no inner span for credit');
      assert.dom('.o-caption > .o-credit').hasText(CREDIT);
      assert.dom('.o-caption > .o-caption__text > span').hasText(CAPTION);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQJTU+Sa",
        "block": "{\"symbols\":[\"figcaption\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-figcaption\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"credit\"]],[],[[\"@credit\",\"@includeIcon\"],[[21,\"credit\"],true]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-caption > .o-credit > span.o-icon').exists('block form with only inline credit requires @includeIcon to show an icon');
      assert.dom('.o-caption > .o-credit > span:not(.o-icon)').hasText(CREDIT, 'rendering with `@includeIcon` adds a wrapper span');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-figure-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-figure', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "oJ+/5BrF",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-figure\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('figure.o-figure').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-m-gallery-lead-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-sinon-qunit/test-support/test"], function (_qunit, _emberQunit, _testHelpers, _test) {
  "use strict";

  const GALLERY = [{
    caption: 'This is a slide caption',
    credit: 'Getty',
    thumb: 'https://picsum.photos/100/100?random',
    srcS: 'https://picsum.photos/600/300?random',
    title: 'This is what a slide title looks like'
  }, {
    caption: 'This is a slide only a caption; no title or credit',
    thumb: 'https://picsum.photos/100/100?random=1',
    srcS: 'https://picsum.photos/600/300?random=1'
  }, {
    title: 'This is a slide with only a title',
    thumb: 'https://picsum.photos/100/100?random=2',
    srcS: 'https://picsum.photos/600/300?random=2'
  }, {
    caption: 'This is a slide with no title; just caption & credit',
    credit: 'Foo Bar/AP News',
    thumb: 'https://picsum.photos/100/100?random=3',
    srcS: 'https://picsum.photos/600/300?random=3'
  }];
  (0, _qunit.module)('Integration | Component | nypr-m-gallery-lead', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _test.default)('it renders', async function (assert) {
      this.set('gallery', GALLERY);
      this.set('goToSlide', this.mock('goToSlide is called with the current index when clicking the current slide').once().withArgs(1));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LrVe0f3M",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-gallery-lead\",[],[[\"@slides\",\"@goToSlide\"],[[21,\"gallery\"],[21,\"goToSlide\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-lead-gallery').exists();
      assert.dom('.c-lead-gallery__thumbs-thumb').exists({
        count: GALLERY.length + 1
      }, 'one thumbnail for each image plus the "view all" button');
      assert.dom('figure.o-figure img').hasAttribute('src', GALLERY[0].srcS);
      assert.dom('.c-lead-gallery__thumbs-thumb-text').hasText("View all ".concat(GALLERY.length));
      await (0, _testHelpers.click)('[data-test-gallery-thumb="1"]');
      assert.dom('figure.o-figure img').hasAttribute('src', GALLERY[1].srcS, 'it changes the active slide when clicking a thumbnail');
      await (0, _testHelpers.click)('[data-test-gallery-current]');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-inline-search-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-sinon-qunit/test-support/test"], function (_qunit, _emberQunit, _testHelpers, _test) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-inline-search', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _test.default)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "suexBoAZ",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-inline-search\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('form.c-search').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1JxRxCIE",
        "block": "{\"symbols\":[\"search\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-inline-search\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"open\"]],[],[[],[]]],[0,\"\\n\\n        \"],[6,[22,1,[\"form\"]],[],[[],[]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('button.c-search-toggle').exists();
      assert.dom('form.c-search').exists();
    });
    (0, _test.default)('interactivity', async function (assert) {
      assert.expect(10);
      const QUERY = 'foo';

      const SEARCH = val => assert.equal(val, QUERY);

      this.setProperties({
        QUERY,
        SEARCH
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0DfBIA+U",
        "block": "{\"symbols\":[\"search\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-inline-search\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"open\"]],[],[[],[]]],[0,\"\\n        \"],[6,[22,1,[\"form\"]],[],[[\"@search\"],[[21,\"SEARCH\"]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"outside\"],[9],[0,\"not in the search form\"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-search').hasAttribute('aria-hidden', 'true');
      await (0, _testHelpers.click)('.c-search-toggle');
      assert.dom('.c-search.is-open').exists();
      assert.dom('.c-search').hasAttribute('aria-hidden', 'false');
      assert.dom('button.c-search__button[type="submit"]').exists('submit button exists');
      await (0, _testHelpers.fillIn)('.c-search__input', QUERY);
      await (0, _testHelpers.click)('#outside');
      assert.dom('.c-search.is-open').doesNotExist('should close on blur');
      await (0, _testHelpers.click)('.c-search-toggle');
      assert.dom('.c-search__input').hasNoValue('should clear on blur');
      await (0, _testHelpers.fillIn)('.c-search__input', QUERY);
      await (0, _testHelpers.click)('[data-test-inline-search-submit]');
      assert.dom('.c-search.is-open').exists();
      await (0, _testHelpers.fillIn)('.c-search__input', '');
      await (0, _testHelpers.click)('[data-test-inline-search-submit]');
      assert.dom('.c-search.is-open').doesNotExist('should close if field is empty and submit is clicked');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eioe0Hsu",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-inline-search\",[],[[\"@search\"],[[21,\"SEARCH\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.fillIn)('.c-search__input', QUERY);
      await (0, _testHelpers.click)('[data-test-inline-search-submit]');
    });
    (0, _test.default)('can init with a query value', async function (assert) {
      const QUERY = 'foo';
      this.setProperties({
        QUERY
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eCeQ3t+d",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-inline-search\",[],[[\"@query\"],[[21,\"QUERY\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-search__input').hasValue(QUERY);
    });
    (0, _test.default)('can update search value from outer context', async function (assert) {
      const SEARCH = this.spy();
      const QUERY = 'foo';
      this.setProperties({
        SEARCH,
        QUERY
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "siGoNPJ/",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-inline-search\",[],[[\"@query\",\"@search\"],[[21,\"QUERY\"],[21,\"SEARCH\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('[data-test-inline-search-submit]');
      this.set('QUERY', 'bar');
      await (0, _testHelpers.click)('[data-test-inline-search-submit]');
      assert.ok(SEARCH.firstCall.calledWith('foo'), 'first call is called with the initial value');
      assert.ok(SEARCH.secondCall.calledWith('bar'), 'second call is called with the updated value');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-nav-read-more-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-nav-read-more', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xdFhmL24",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-nav-read-more\",[],[[\"@items\"],[[27,\"array\",[[27,\"hash\",null,[[\"route\",\"label\"],[[27,\"array\",[\"tags\",\"news\"],null],\"News\"]]],[27,\"hash\",null,[[\"route\",\"label\"],[[27,\"array\",[\"tags\",\"arts\"],null],\"Arts\"]]]],null]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-read-more-nav').exists();
      assert.dom('.c-read-more-nav__item').exists({
        count: 2
      });
      assert.dom('.c-read-more-nav ul').includesText('News Arts');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-newsletter-form-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-sinon-qunit/test-support/test", "fetch", "nypr-design-system/components/nypr-m-newsletter-form"], function (_qunit, _emberQunit, _testHelpers, _test, fetch, _nyprMNewsletterForm) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-newsletter-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _test.default)('it handles successful submissions', async function (assert) {
      const ENDPOINT = 'https://example.com';
      const EMAIL = 'foo@bar.com';
      const OTHER_PARAMS = {
        id: 'baz'
      };
      const SUCCESS_RESPONSE = new Response(JSON.stringify({
        status: 'subscribed'
      }), {
        status: 200
      });
      this.setProperties({
        ENDPOINT,
        OTHER_PARAMS
      });
      this.mock(fetch).expects('default').withArgs(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...OTHER_PARAMS,
          email: EMAIL
        })
      }).resolves(SUCCESS_RESPONSE);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ePwRzZ7s",
        "block": "{\"symbols\":[\"form\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-newsletter-form\",[],[[\"@endpoint\",\"@params\"],[[21,\"ENDPOINT\"],[21,\"OTHER_PARAMS\"]]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"input\"]],[],[[],[]]],[0,\"\\n        \"],[6,[22,1,[\"submit\"]],[],[[],[]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.fillIn)('.c-newsletter-form__input', EMAIL);
      await (0, _testHelpers.click)('[data-test-newsletter-submit]');
      assert.dom('.c-newsletter-form__message').hasText(_nyprMNewsletterForm.DEFAULT_SUBSCRIBED_MESSAGE);
    });
    (0, _test.default)('it handles error responses', async function (assert) {
      const EMAIL = 'foo@bar.com';
      const ENDPOINT = 'https://example.com';
      const ERROR_MESSAGE = 'bad news';
      const ERROR_RESPONSE = new Response(JSON.stringify({
        detail: ERROR_MESSAGE
      }), {
        status: 400
      });
      this.setProperties({
        ENDPOINT
      });
      this.mock(fetch).expects('default').withArgs(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: EMAIL
        })
      }).resolves(ERROR_RESPONSE);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SigOQKhb",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-newsletter\",[],[[\"@endpoint\"],[[21,\"ENDPOINT\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.fillIn)('.c-newsletter-form__input', EMAIL);
      await (0, _testHelpers.click)('[data-test-newsletter-submit]');
      assert.dom('.c-newsletter-form__message').hasText(ERROR_MESSAGE);
    });
  });
});

define("dummy/tests/integration/components/nypr-m-newsletter-test", ["qunit", "ember-qunit", "@ember/test-helpers", "nypr-design-system/components/nypr-m-newsletter-form"], function (_qunit, _emberQunit, _testHelpers, _nyprMNewsletterForm) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-newsletter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const BLURB = "Sign up for this great newsletter.";
      const OTHER_LEGAL = "Waive all your rights.";
      this.setProperties({
        BLURB,
        OTHER_LEGAL
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+vClojiP",
        "block": "{\"symbols\":[\"newsletter\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-newsletter\",[],[[],[]],{\"statements\":[[0,\"\\n\\n        \"],[6,[22,1,[\"graphic\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[5,\"nypr-a-svg\",[],[[\"@icon\"],[\"party-confetti\"]]],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"blurb\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[1,[21,\"BLURB\"],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"legal\"]],[],[[],[]]],[0,\"\\n\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-newsletter-form__graphic svg.party-confetti-icon').exists('can render into graphic slot');
      assert.dom('[data-test-newsletter-blurb]').hasText(BLURB);
      assert.dom('.c-newsletter-form__terms').hasText(_nyprMNewsletterForm.DEFAULT_LEGAL, 'must use the yielded `.legal` component in order to display terms');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7egtdxU3",
        "block": "{\"symbols\":[\"newsletter\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-newsletter\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"legal\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[1,[21,\"OTHER_LEGAL\"],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-newsletter-form__terms').hasText(OTHER_LEGAL, 'can pass in other legal terms');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-progress-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "nypr-design-system/test-support"], function (_qunit, _emberQunit, _testHelpers, _testSupport) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-progress-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bQUxzias",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-progress-bar\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-progress').exists();
    });
    (0, _qunit.test)('it updates as you scroll', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "RF6Szsmk",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-progress-bar\",[],[[],[]]],[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"foo\"],[11,\"style\",\"height: 1000px;\"],[9],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      let reset = await (0, _testSupport.scrollPastTarget)(this, '#foo');
      assert.ok(".o-progress has value ".concat(this.element.querySelector('.o-progress')));
      assert.dom('.o-progress').hasValue(1);
      reset();
    });
  });
});

define("dummy/tests/integration/components/nypr-m-pullquote-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-pullquote', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const QUOTE = "Lorem Ipsum";
      const AUTHOR = "Mrs. Foo Bar";
      this.setProperties({
        QUOTE,
        AUTHOR
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "W8QofyYl",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-pullquote\",[],[[\"@quote\",\"@attribution\"],[[21,\"QUOTE\"],[21,\"AUTHOR\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('blockquote.o-pullquote > p > span').hasText(QUOTE);
      assert.dom('blockquote.o-pullquote > .o-pullquote__author').hasText(AUTHOR);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "R0dA0UrG",
        "block": "{\"symbols\":[\"pull\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-pullquote\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"quote\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[1,[21,\"QUOTE\"],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"attribution\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[1,[21,\"AUTHOR\"],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('blockquote.o-pullquote > p > span').hasText(QUOTE);
      assert.dom('blockquote.o-pullquote > .o-pullquote__author').hasText(AUTHOR);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "cUoFPrkH",
        "block": "{\"symbols\":[\"pull\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-pullquote\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"quote\"]],[],[[\"@quote\"],[[21,\"QUOTE\"]]]],[0,\"\\n\\n        \"],[6,[22,1,[\"attribution\"]],[],[[\"@attribution\"],[[21,\"AUTHOR\"]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('blockquote.o-pullquote > p > span').hasText(QUOTE);
      assert.dom('blockquote.o-pullquote > .o-pullquote__author').hasText(AUTHOR);
    });
  });
});

define("dummy/tests/integration/components/nypr-m-secondary-nav-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-secondary-nav', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UHtnL48H",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nypr-m-secondary-nav\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('nav.c-secondary-nav').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-m-share-tools-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-sinon-qunit/test-support/test"], function (_qunit, _emberQunit, _testHelpers, _test) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-share-tools', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _test.default)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zwQxFQcn",
        "block": "{\"symbols\":[\"tools\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-share-tools\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"link\"]],[],[[\"@service\",\"@username\"],[\"facebook\",\"foo\"]]],[0,\"\\n        \"],[6,[22,1,[\"link\"]],[],[[\"@service\",\"@username\"],[\"twitter\",\"bar\"]]],[0,\"\\n        \"],[6,[22,1,[\"link\"]],[],[[\"@service\",\"@username\"],[\"instagram\",\"baz\"]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('a[href="https://www.facebook.com/foo"]').exists();
      assert.dom('.o-facebook-icon').exists();
      assert.dom('a[href="https://twitter.com/bar"]').exists();
      assert.dom('.o-twitter-icon').exists();
      assert.dom('a[href="https://www.instagram.com/baz"]').exists();
      assert.dom('.o-instagram-icon').exists();
    });
    (0, _test.default)('it opens a popup to facebook', async function () {
      const URL = window.location.toString();
      this.mock(window).expects('open').withArgs("https://www.facebook.com/sharer.php?u=".concat(URL));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UqGFGus+",
        "block": "{\"symbols\":[\"tools\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-share-tools\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"share\"]],[],[[\"@service\"],[\"facebook\"]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('button.c-share-tools__link');
    });
    (0, _test.default)('it opens a popup to twitter', async function () {
      const URL = window.location.toString();
      const TEXT = 'bar';
      const VIA = 'baz';
      this.mock(window).expects('open').withArgs("https://twitter.com/intent/tweet?text=".concat(TEXT, "&via=").concat(VIA, "&url=").concat(URL));
      this.setProperties({
        TEXT,
        VIA
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Qh0ZY+L8",
        "block": "{\"symbols\":[\"tools\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-share-tools\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"share\"]],[],[[\"@service\",\"@params\"],[\"twitter\",[27,\"hash\",null,[[\"text\",\"via\"],[[23,[\"TEXT\"]],[23,[\"VIA\"]]]]]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('button.c-share-tools__link');
    });
    (0, _test.default)('it can override the derived share url', async function () {
      const URL = 'http://example.com';
      const TEXT = 'bar';
      const VIA = 'baz';
      this.mock(window).expects('open').withArgs("https://twitter.com/intent/tweet?text=".concat(TEXT, "&via=").concat(VIA, "&url=").concat(URL));
      this.setProperties({
        TEXT,
        VIA,
        URL
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zvavwHFC",
        "block": "{\"symbols\":[\"tools\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-share-tools\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"share\"]],[],[[\"@service\",\"@url\",\"@params\"],[\"twitter\",[21,\"URL\"],[27,\"hash\",null,[[\"text\",\"via\"],[[23,[\"TEXT\"]],[23,[\"VIA\"]]]]]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('button.c-share-tools__link');
    });
    (0, _test.default)('it can substitute a variable for the derived URL', async function () {
      const BODY = 'check out {{URL}}';
      this.mock(window).expects('open').withArgs("mailto:?body=check out ".concat(window.location.toString()));
      this.setProperties({
        BODY
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "pdNtQ6PA",
        "block": "{\"symbols\":[\"tools\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-share-tools\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"share\"]],[],[[\"@service\",\"@params\"],[\"email\",[27,\"hash\",null,[[\"body\"],[[23,[\"BODY\"]]]]]]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('button.c-share-tools__link');
    });
  });
});

define("dummy/tests/integration/components/nypr-m-tags-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('tags', ['foo', 'bar']);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "v/YCgH5D",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-tags\",[],[[\"@tags\"],[[21,\"tags\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-tags').hasText('#foo #bar');
      assert.dom('span.o-tag').exists({
        count: 2
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "X6X+Khlh",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-tags\",[],[[\"@tags\",\"@prefix\"],[[21,\"tags\"],\"\"]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-tags').hasText('foo bar', 'can override prefix');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Ovuu/hrw",
        "block": "{\"symbols\":[\"Tag\",\"tag\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-tags\",[],[[\"@tags\"],[[21,\"tags\"]]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[]],[],[[\"@url\"],[[28,[\"/tags/\",[22,2,[]]]]]]],[0,\"\\n      \"]],\"parameters\":[1,2]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('a.o-tag').exists({
        count: 2
      });
      (0, _testHelpers.findAll)('a.o-tag').forEach(el => {
        assert.dom(el).hasAttribute('href', "/tags/".concat(el.textContent.trim().slice(1)));
      });
    });
  });
});

define("dummy/tests/integration/components/nypr-m-text-banner-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-text-banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VvT3jyum",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-text-banner\",[],[[],[]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-text-banner').exists();
    });
    (0, _qunit.test)('it renders properties', async function (assert) {
      const CATEGORY = "Test";
      const TITLE = "Test Title";
      const URL = "http://example.com";
      const TIMESTAMP = "Just Now";
      const DESCRIPTION = "Test Description";
      this.setProperties({
        category: CATEGORY,
        title: TITLE,
        url: URL,
        timestamp: TIMESTAMP,
        description: DESCRIPTION
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "RjCfV1sZ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-m-text-banner\",[],[[\"@category\",\"@title\",\"@url\",\"@timestamp\",\"@description\"],[[21,\"category\"],[21,\"title\"],[21,\"url\"],[21,\"timestamp\"],[21,\"description\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block__eyebrow').includesText(CATEGORY);
      assert.dom('.c-block__title>a').includesText(TITLE);
      assert.dom('.c-block__title>a').hasAttribute('href', URL);
      assert.dom('.c-block-meta').includesText(TIMESTAMP);
      assert.dom('.c-block__dek').includesText(DESCRIPTION);
    });
  });
});

define("dummy/tests/integration/components/nypr-m-to-top-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-sinon-qunit/test-support/test"], function (_qunit, _emberQunit, _testHelpers, _test) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-m-to-top', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _test.default)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aOIR4MmI",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-to-top\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-to-top]').exists();
    });
    (0, _test.default)('it scrolls to the top of the window', async function () {
      this.mock(window).expects('scrollTo').withArgs({
        top: 0,
        behavior: 'smooth'
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aOIR4MmI",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-m-to-top\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('[data-test-to-top]');
    });
    (0, _test.default)('it scrolls to a given target', async function () {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6u2s/pY9",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"target\"],[9],[10],[0,\"\\n      \"],[5,\"nypr-m-to-top\",[],[[\"@selector\"],[\"#target\"]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      let target = document.querySelector('#target');
      let y = target.offsetTop - target.offsetHeight;
      this.mock(window).expects('scrollTo').withArgs({
        top: y,
        behavior: 'smooth'
      });
      await (0, _testHelpers.click)('[data-test-to-top]');
    });
    (0, _test.default)('it scrolls to a given offset', async function () {
      const OFFSET = 500;
      this.set('offset', OFFSET);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "V3I49AUe",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"target\"],[9],[10],[0,\"\\n      \"],[5,\"nypr-m-to-top\",[],[[\"@offset\",\"@selector\"],[[21,\"offset\"],\"#target\"]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      let target = document.querySelector('#target');
      let y = target.offsetTop - (target.offsetHeight + OFFSET);
      this.mock(window).expects('scrollTo').withArgs({
        top: y,
        behavior: 'smooth'
      });
      await (0, _testHelpers.click)('[data-test-to-top]');
    });
  });
});

define("dummy/tests/integration/components/nypr-o-article-body-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-article-body', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/zn7ivG0",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-o-article-body\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-article__body').exists(); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UV2tbKBC",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-article-body\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-article__body').hasText('template block text');
    });
  });
});

define("dummy/tests/integration/components/nypr-o-article-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-article-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const TAGS = ['foo', 'bar'];
      const CONTACT = 'contact us';
      const DONATE_MESSAGE = 'Donate already';
      const DONATE_CTA = 'donate';
      this.setProperties({
        tags: TAGS,
        contact: CONTACT,
        donateMessage: DONATE_MESSAGE,
        donateCta: DONATE_CTA
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8aV0U1hw",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-o-article-footer\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-article__footer').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "l/v7iSGc",
        "block": "{\"symbols\":[\"footer\",\"Tag\",\"tag\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-article-footer\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"tags\"]],[],[[\"@tags\"],[[21,\"tags\"]]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[]],[],[[\"@url\"],[[28,[\"http://example.com/tags/\",[22,3,[]]]]]]],[0,\"\\n        \"]],\"parameters\":[2,3]}],[0,\"\\n\\n        \"],[6,[22,1,[\"contact\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[1,[21,\"contact\"],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"donate\"]],[],[[\"@linkText\",\"@linkUrl\",\"@message\"],[[21,\"donateCta\"],\"https://example.com/pledge\",[21,\"donateMessage\"]]]],[0,\"\\n\\n        \"],[6,[22,1,[\"comments\"]],[],[[],[]],{\"statements\":[[0,\"\\n          comments go here\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-tag').exists({
        count: 2
      });
      assert.dom('.c-article__contact').hasText(CONTACT);
      assert.dom('[data-test-donate-message]').hasText(DONATE_MESSAGE);
      assert.dom('[data-test-article-footer-comments]').hasText('comments go here');
    });
  });
});

define("dummy/tests/integration/components/nypr-o-article-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-article-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yaqT/U+Z",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-o-article-header\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-article__header').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-o-block-list-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-block-list-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders columns', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "y0eSYYTz",
        "block": "{\"symbols\":[\"blg\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-block-list-group\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"col1\"]],[],[[],[]],{\"statements\":[[0,\"\\n          column 1\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,1,[\"col2\"]],[],[[],[]],{\"statements\":[[0,\"\\n          column 2\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block-group__col1').hasText('column 1');
      assert.dom('.c-block-group__col2').hasText('column 2');
    });
    (0, _qunit.test)('it tracks how many columns are rendered', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WR8/zO0o",
        "block": "{\"symbols\":[\"blg\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-block-list-group\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"col1\"]],[],[[],[]],{\"statements\":[[0,\"\\n          column 1\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-block-group').hasClass('c-block-group--single-col');
    });
    (0, _qunit.test)('the ad unit renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "63ZsYDEI",
        "block": "{\"symbols\":[\"blg\",\"col\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-block-list-group\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"col1\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,2,[\"ad\"]],[],[[],[]]],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.o-ad').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-o-contact-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-contact', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "lOqEIwP5",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-o-contact\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-contact-tout').exists();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "iLKE9/Lf",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-contact\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[7,\"p\"],[9],[7,\"strong\"],[9],[0,\"hello\"],[10],[0,\" \"],[7,\"em\"],[9],[0,\"world\"],[10],[10],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-contact-tout').hasText('hello world');
    });
  });
});

define("dummy/tests/integration/components/nypr-o-donate-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-donate', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(3);
      this.set('close', () => assert.ok('close argument is called'));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1ZYbe2zF",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-donate\",[],[[\"@message\",\"@linkText\",\"@linkUrl\",\"@close\"],[\"hello world\",\"click me\",\"http://example.com/pledge\",[27,\"action\",[[22,0,[]],[23,[\"close\"]]],null]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('[data-test-donate-close]');
      assert.dom('.c-donate-tout__inner p').hasText('hello world');
      assert.dom('a.o-button').hasAttribute('href', 'http://example.com/pledge');
    });
    (0, _qunit.test)('yields a block for the "message" area', async function (assert) {
      const TEXT = 'Donate';
      const URL = 'https://example.com';
      this.setProperties({
        TEXT,
        URL,
        message: '<p data-test-message>hello <strong>world</strong></p>'
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dej/jP2s",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-donate\",[],[[\"@linkText\",\"@linkUrl\"],[[21,\"TEXT\"],[21,\"URL\"]]],{\"statements\":[[0,\"\\n        \"],[1,[21,\"message\"],true],[0,\"\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-message]').hasText('hello world');
      assert.dom('a.o-button').hasAttribute('href', URL);
      assert.dom('a.o-button').hasText(TEXT);
    });
  });
});

define("dummy/tests/integration/components/nypr-o-featured-block-list-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-featured-block-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "i1tfyJgS",
        "block": "{\"symbols\":[\"fbl\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-featured-block-list\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"heading\"]],[],[[],[]],{\"statements\":[[0,\"\\n          Featured Block List Heading\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"featured\"]],[],[[],[]],{\"statements\":[[0,\"\\n          Featured Block List Content\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"col\"]],[],[[],[]],{\"statements\":[[0,\"\\n          column to the side\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('section.c-featured-blocks').exists();
      assert.dom('h2.c-featured-blocks__heading').hasText('Featured Block List Heading');
      assert.dom('.c-featured-blocks__col1').hasText('Featured Block List Content');
      assert.dom('.c-featured-blocks__col2').hasText('column to the side');
    });
  });
});

define("dummy/tests/integration/components/nypr-o-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tT9P3EeA",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nypr-o-footer\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('footer.c-main-footer').exists();
    });
  });
});

define("dummy/tests/integration/components/nypr-o-gallery-overlay-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/controllers/docs/molecules/nypr-m-gallery-lead", "dummy/helpers/in-viewport"], function (_qunit, _emberQunit, _testHelpers, _nyprMGalleryLead, _inViewport) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-gallery-overlay', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const TITLE = 'Foo Gallery';
      const AD_TEXT = 'Bar Ad';
      this.setProperties({
        SLIDES: _nyprMGalleryLead.GALLERY,
        TITLE,
        AD_TEXT
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "p4p0QXlH",
        "block": "{\"symbols\":[\"index\",\"gallery\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-gallery-overlay\",[],[[\"@title\",\"@parentRoute\",\"@slides\"],[[21,\"TITLE\"],[27,\"array\",[\"foo\",\"bar\"],null],[21,\"SLIDES\"]]],{\"statements\":[[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[]],1],null]],null,{\"statements\":[[0,\"          \"],[6,[22,2,[\"billboard\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[1,[21,\"AD_TEXT\"],false],[0,\"\\n          \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"]],\"parameters\":[1,2]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('[data-test-gallery-title]').hasText(TITLE);
      assert.dom('[data-test-gallery-slide]').exists({
        count: _nyprMGalleryLead.GALLERY.length
      });
      assert.dom('[data-test-gallery-billboard]').includesText(AD_TEXT);
      const gallery = document.querySelector('[data-test-gallery-overlay]');
      const galleryHeight = Math.round(gallery.getBoundingClientRect().height);
      assert.equal(galleryHeight, Math.round(parseFloat(gallery.getBoundingClientRect().height)), 'resizes body to match gallery height');
    });
    (0, _qunit.test)('it scrolls to a slide at the specified zero-based index on render', async function (assert) {
      const TITLE = 'Foo Gallery';
      const SLIDE_FOR_INIT = _nyprMGalleryLead.GALLERY.length - 1;
      this.setProperties({
        SLIDES: _nyprMGalleryLead.GALLERY.map((slide, i) => {
          Ember.set(slide, 'full', "/test-image".concat(i + 1, ".jpeg"));
          return slide;
        }),
        TITLE,
        SLIDE_FOR_INIT
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Ba/zUaRO",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-gallery-overlay\",[],[[\"@title\",\"@parentRoute\",\"@slides\",\"@slideForInit\"],[[21,\"TITLE\"],[27,\"array\",[\"foo\",\"bar\"],null],[21,\"SLIDES\"],[21,\"SLIDE_FOR_INIT\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      const slideForInit = document.querySelector("[data-test-gallery-slide=\"".concat(SLIDE_FOR_INIT, "\"]")); // await pauseTest();

      await (0, _testHelpers.waitUntil)(() => {
        return (0, _inViewport.inViewport)(slideForInit);
      }, {
        timeout: 1000
      });
      assert.ok("slide ".concat(SLIDE_FOR_INIT + 1, " should be visible"));
    });
    (0, _qunit.test)('slides call the gallery `registerSlide` method on insert', async function (assert) {
      this.setProperties({
        registerSlide: slide => assert.ok(slide instanceof HTMLElement),
        SLIDES: _nyprMGalleryLead.GALLERY
      });
      assert.expect(_nyprMGalleryLead.GALLERY.length);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SNQE/y6K",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-gallery-overlay\",[],[[\"@registerSlide\",\"@slides\"],[[21,\"registerSlide\"],[21,\"SLIDES\"]]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
    });
  });
});

define("dummy/tests/integration/components/nypr-o-header-test", ["qunit", "ember-qunit", "@ember/test-helpers", "nypr-design-system/test-support"], function (_qunit, _emberQunit, _testHelpers, _testSupport) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      const LEADERBOARD = 'ad unit';
      const BRANDING = 'some logo';
      const PRIMARY_NAV = [{
        route: ['foo'],
        text: 'One'
      }, {
        route: ['bar'],
        text: 'Two'
      }];
      const SECONDARY_NAV = [{
        url: '/three',
        Title: 'Three'
      }, {
        url: '/four',
        Title: 'Four'
      }];
      const HEADLINE = "headline";
      const RIGHT_SIDE = 'foo';
      this.setProperties({
        LEADERBOARD,
        BRANDING,
        PRIMARY_NAV,
        SECONDARY_NAV,
        HEADLINE,
        RIGHT_SIDE
      }); // test injection for leaderboard

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "svhIavTE",
        "block": "{\"symbols\":[\"header\",\"right\",\"search\",\"left\",\"menu\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-header\",[],[[\"@rules\"],[[27,\"hash\",null,[[\"leaderboard\"],[true]]]]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"leaderboard\"]],[],[[\"@hideLabel\"],[true]],{\"statements\":[[0,\"\\n          \"],[1,[21,\"LEADERBOARD\"],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"menu\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,5,[\"branding\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[1,[21,\"BRANDING\"],false],[0,\"\\n          \"]],\"parameters\":[]}],[0,\"\\n\\n          \"],[6,[22,5,[\"primaryNav\"]],[],[[\"@navItems\"],[[21,\"PRIMARY_NAV\"]]]],[0,\"\\n          \"],[6,[22,5,[\"secondaryNav\"]],[],[[\"@navItems\"],[[21,\"SECONDARY_NAV\"]]]],[0,\"\\n        \"]],\"parameters\":[5]}],[0,\"\\n\\n        \"],[6,[22,1,[\"left\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[6,[22,4,[\"branding\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[1,[21,\"BRANDING\"],false],[0,\"\\n          \"]],\"parameters\":[]}],[0,\"\\n\\n          \"],[6,[22,4,[\"headline\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[1,[21,\"HEADLINE\"],false],[0,\"\\n          \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[4]}],[0,\"\\n\\n        \"],[6,[22,1,[\"nav\"]],[],[[\"@navItems\"],[[21,\"PRIMARY_NAV\"]]]],[0,\"\\n\\n        \"],[6,[22,1,[\"right\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"arbitrary-content\"],[9],[0,\"\\n            \"],[1,[21,\"RIGHT_SIDE\"],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[6,[22,2,[\"search\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[6,[22,3,[\"open\"]],[],[[],[]]],[0,\"\\n            \"],[6,[22,3,[\"form\"]],[],[[],[]]],[0,\"\\n          \"]],\"parameters\":[3]}],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      })); // leaderboard ad

      assert.dom('.o-ad--leaderboard').hasText(LEADERBOARD); // side menu

      assert.dom('.c-side-menu__branding').hasText(BRANDING);
      assert.dom('.c-primary-nav--side li').exists({
        count: 2
      });
      assert.dom('.c-side-menu__secondary-nav li').exists({
        count: 2
      }); // full width strip

      assert.dom('.c-main-header__branding').hasText(BRANDING);
      assert.dom('.c-main-header__title').hasText(HEADLINE);
      assert.dom('.c-primary-nav--top li').exists({
        count: 2
      });
      assert.dom('.c-main-header__right .arbitrary-content').hasText(RIGHT_SIDE); // search

      assert.dom('.c-search-toggle').exists();
      assert.dom('form.c-search').exists();
    });
    (0, _qunit.test)('interactivity', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "XuHpu/I1",
        "block": "{\"symbols\":[\"header\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-header\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"menu\"]],[],[[],[]]],[0,\"\\n        \"],[6,[22,1,[\"left\"]],[],[[],[]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('.c-main-header__left .o-menu-toggle');
      assert.dom('.c-main-header.side-menu-is-active').exists();
      assert.dom('body.side-menu-is-active', document).exists();
    });
    (0, _qunit.test)('floating header', async function (assert) {
      // header test injection
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/PswzgaC",
        "block": "{\"symbols\":[\"header\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-header\",[],[[\"@rules\"],[[27,\"hash\",null,[[\"progressTarget\"],[true]]]]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"menu\"]],[],[[],[]]],[0,\"\\n        \"],[6,[22,1,[\"left\"]],[],[[],[]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      let reset = await (0, _testSupport.scrollPastHeader)(this);
      const {
        height: HEADER_HEIGHT
      } = this.element.querySelector('.c-main-header__inner').getBoundingClientRect();
      assert.dom('.o-progress').exists();
      assert.dom('.c-main-header__inner.c-floating-header.is-visible').exists();
      const header = this.element.querySelector('.c-main-header');
      assert.equal(Math.round(header.offsetHeight), Math.round(HEADER_HEIGHT));
      reset();
    });
    (0, _qunit.test)('yields active rules', async function (assert) {
      let service = this.owner.lookup('service:nypr-o-header');
      service.addRule(null, {
        resting: {
          foo: true
        },
        floating: {
          bar: true
        }
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0R1nLADq",
        "block": "{\"symbols\":[\"header\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-header\",[],[[],[]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"left\"]],[],[[],[]],{\"statements\":[[0,\"\\n          \"],[7,\"div\"],[11,\"id\",\"example\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"rules\",\"foo\"]]],null,{\"statements\":[[0,\"              foo\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,1,[\"rules\",\"bar\"]]],null,{\"statements\":[[0,\"              bar\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('#example').hasText('foo', 'resting state should turn on `foo` rule');

      function headerIsFloating(owner) {
        return owner.element.querySelector('.c-floating-header');
      }

      let reset = await (0, _testSupport.scrollPastHeader)(this, headerIsFloating);
      assert.dom('#example').hasText('bar', 'floating state should turn on `bar` rule');
      reset();
    });
  });
});

define("dummy/tests/integration/components/nypr-o-newsletter-tout-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-newsletter-tout', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2TdVjICf",
        "block": "{\"symbols\":[\"tout\"],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-newsletter-tout\",[],[[\"@img\"],[[27,\"hash\",null,[[\"src\",\"alt\"],[\"/test-image1.jpeg\",\"newsletter image\"]]]]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"heading\"]],[],[[],[]],{\"statements\":[[0,\"\\n          Newsletter Tout\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"blurb\"]],[],[[],[]],{\"statements\":[[0,\"\\n          Tout Blurb\\n        \"]],\"parameters\":[]}],[0,\"\\n\\n        \"],[6,[22,1,[\"legal\"]],[],[[],[]]],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-newsletter-tout__media img').hasAttribute('src', '/test-image1.jpeg');
      assert.dom('[data-test-newsletter-tout-heading]').hasText('Newsletter Tout');
      assert.dom('[data-test-newsletter-tout-blurb]').hasText('Tout Blurb');
    });
  });
});

define("dummy/tests/integration/components/nypr-o-related-content-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-related-content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('items', [{
        url: 'http://example.com',
        title: 'foo'
      }, {
        url: 'http://example.com/bar',
        title: 'bar'
      }]);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zvF7wxfY",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-o-related-content\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('h3.c-related-content__heading').hasText('Related');
      assert.dom('a').doesNotExist();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WxGhfYgD",
        "block": "{\"symbols\":[],\"statements\":[[5,\"nypr-o-related-content\",[],[[\"@items\"],[[21,\"items\"]]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('a').exists({
        count: 2
      });
    });
  });
});

define("dummy/tests/integration/components/nypr-o-sponsored-tout-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nypr-o-sponsored-tout', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WLjHAf+U",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-sponsored-tout\",[],[[],[]],{\"statements\":[[0,\"\\n        sponsored text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('.c-sponsored-tout').hasText('sponsored text');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DzLSh5IG",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"nypr-o-sponsored-tout\",[],[[\"@heading\"],[\"Sponsored\"]]],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('h2.c-sponsored-tout__heading').hasText('Sponsored');
    });
  });
});

define("dummy/tests/integration/helpers/cast-test", ["qunit", "ember-qunit", "dummy/helpers/cast"], function (_qunit, _emberQunit, _cast) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | cast', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      assert.ok(typeof (0, _cast.cast)([1234, 'String']) === 'string', 'numbers to string');
      assert.ok(typeof (0, _cast.cast)([1234, 'string']) === 'string', 'numbers to string case insensitive');
      assert.ok(typeof (0, _cast.cast)(['1234', 'Number']) === 'number', 'string to number');
      assert.ok(typeof (0, _cast.cast)(['1234', 'number']) === 'number', 'string to number case insensitive');
    });
  });
});

define("dummy/tests/integration/helpers/in-viewport-test", ["qunit", "ember-qunit", "@ember/test-helpers", "nypr-design-system/helpers/in-viewport"], function (_qunit, _emberQunit, _testHelpers, _inViewport) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | in-viewport', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      const HEIGHT = window.innerHeight * 2;
      const testingContainer = document.querySelector('#ember-testing-container');
      const OLD_POSITION = testingContainer.style.position;
      testingContainer.style.height = "".concat(HEIGHT, "px");
      testingContainer.style.position = 'relative';
      this.set('spacerHeight', HEIGHT);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dowXH3VC",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"spacer\"],[12,\"style\",[28,[\"height: \",[21,\"spacerHeight\"],\"px; margin-bottom: 25px;\"]]],[9],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"target\"],[11,\"style\",\"height: 25px;\"],[9],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      const target = document.querySelector('#target');
      assert.notOk((0, _inViewport.inViewport)(target), 'target should not be in viewport');
      window.scrollTo(0, HEIGHT);
      assert.ok((0, _inViewport.inViewport)(target), 'target should be in viewport');
      testingContainer.style.height = '';
      testingContainer.style.position = OLD_POSITION;
      testingContainer.scrollTo(0, 0);
    });
  });
});

define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/color-showcase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/color-showcase.js should pass ESLint\n\n');
  });
  QUnit.test('components/color-showcase/gradient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/color-showcase/gradient.js should pass ESLint\n\n');
  });
  QUnit.test('components/color-showcase/row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/color-showcase/row.js should pass ESLint\n\n');
  });
  QUnit.test('components/color-showcase/swatch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/color-showcase/swatch.js should pass ESLint\n\n');
  });
  QUnit.test('components/theme-chooser.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/theme-chooser.js should pass ESLint\n\n');
  });
  QUnit.test('components/theme-chooser/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/theme-chooser/item.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/atoms/nypr-a-toggle-box.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/atoms/nypr-a-toggle-box.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/molecules/blocks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/molecules/blocks.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/molecules/nypr-m-box-banner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/molecules/nypr-m-box-banner.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/molecules/nypr-m-breadcrumb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/molecules/nypr-m-breadcrumb.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/molecules/nypr-m-byline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/molecules/nypr-m-byline.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/molecules/nypr-m-gallery-lead.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/molecules/nypr-m-gallery-lead.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/molecules/nypr-m-newsletter-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/molecules/nypr-m-newsletter-form.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/organisms/nypr-o-article-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/organisms/nypr-o-article-header.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/organisms/nypr-o-gallery-overlay.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/organisms/nypr-o-gallery-overlay.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/organisms/nypr-o-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/organisms/nypr-o-header.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/docs/organisms/nypr-o-related-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/organisms/nypr-o-related-content.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/color-fn.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/color-fn.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/to-color.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/to-color.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('utils/sass-vars/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/sass-vars/colors.js should pass ESLint\n\n');
  });
  QUnit.test('utils/sass-vars/gothamist-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/sass-vars/gothamist-colors.js should pass ESLint\n\n');
  });
  QUnit.test('utils/sass-vars/wnyc-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/sass-vars/wnyc-colors.js should pass ESLint\n\n');
  });
});

define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/color-showcase.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/color-showcase.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/color-showcase/gradient.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/color-showcase/gradient.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/color-showcase/row.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/color-showcase/row.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/color-showcase/swatch.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/color-showcase/swatch.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/theme-chooser.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/theme-chooser.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/theme-chooser/item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/theme-chooser/item.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/docs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/not-found.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/not-found.hbs should pass TemplateLint.\n\n');
  });
});

define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/nypr-a-ad-label-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-ad-label-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-kicker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-kicker-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-media-object-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-media-object-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-picture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-picture-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-section-heading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-section-heading-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-story-headline-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-story-headline-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-svg-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-svg-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-tag-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-a-toggle-box-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-a-toggle-box-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-author-block-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-author-block-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-block-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-block-list-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-block-meta-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-block-meta-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-block-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-block-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-box-banner-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-box-banner-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-brands-linkroll-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-brands-linkroll-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-breadcrumb-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-breadcrumb-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-byline-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-byline-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-figcaption-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-figcaption-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-figure-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-figure-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-gallery-lead-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-gallery-lead-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-inline-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-inline-search-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-nav-read-more-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-nav-read-more-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-newsletter-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-newsletter-form-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-newsletter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-newsletter-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-progress-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-progress-bar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-pullquote-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-pullquote-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-secondary-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-secondary-nav-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-share-tools-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-share-tools-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-tags-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-text-banner-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-text-banner-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-m-to-top-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-m-to-top-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-article-body-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-article-body-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-article-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-article-footer-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-article-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-article-header-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-block-list-group-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-block-list-group-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-donate-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-donate-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-featured-block-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-featured-block-list-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-footer-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-gallery-overlay-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-gallery-overlay-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-header-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-newsletter-tout-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-newsletter-tout-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-related-content-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-related-content-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nypr-o-sponsored-tout-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nypr-o-sponsored-tout-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/cast-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/cast-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/in-viewport-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/in-viewport-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/nypr-o-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/nypr-o-header-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/toggle-box-positions-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/toggle-box-positions-test.js should pass ESLint\n\n');
  });
});

define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});

define("dummy/tests/unit/services/nypr-o-header-test", ["qunit", "ember-qunit", "ember-sinon-qunit/test-support/test"], function (_qunit, _emberQunit, _test) {
  "use strict";

  (0, _qunit.module)('Unit | Service | nypr-o-header', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _test.default)('it sets arbitrary instance variables based on UI state', function (assert) {
      let header = this.owner.lookup('component:nypr-o-header');
      let service = this.owner.lookup('service:nypr-o-header'); // no routing in unit tests

      service.addRule(null, {
        resting: {
          bar: true
        },
        floating: {
          bar: false
        },
        all: {
          baz: true
        }
      });
      assert.ok(header.rules.bar, 'bar should be true under rules namespace');
      assert.ok(header.rules.baz, '`all` rules should be true in both states');
      header.set('outOfViewport', true);
      assert.equal(header.rules.bar, false, 'bar should be false when outOfViewport flips');
      assert.ok(header.rules.baz, '`all` rules should be true in both states');
    });
    (0, _test.default)('it does inverted clears', function (assert) {
      let header = this.owner.lookup('component:nypr-o-header');
      let service = this.owner.lookup('service:nypr-o-header');
      service.addRule(null, {
        resting: {
          bar: true
        },
        floating: {
          baz: true
        },
        all: {
          foo: true
        }
      });
      assert.ok(header.rules.bar, 'bar should be true');
      assert.ok(header.rules.foo, 'foo should be true');
      header.set('outOfViewport', true);
      assert.notOk(header.rules.bar, 'should clear keys not included in the current set');
      assert.ok(header.rules.baz);
      assert.ok(header.rules.foo, 'foo should be true');
      header.set('outOfViewport', false);
      assert.ok(header.rules.bar);
      assert.notOk(header.rules.baz);
      assert.ok(header.rules.foo, 'foo should be true');
    });
    (0, _test.default)('all key is not required', async function (assert) {
      let header = this.owner.lookup('component:nypr-o-header');
      let service = this.owner.lookup('service:nypr-o-header');
      service.addRule(null, {
        resting: {
          bar: true
        },
        floating: {
          baz: true
        }
      });
      assert.ok(header.rules.bar, 'bar should be true');
      header.set('outOfViewport', true);
      assert.ok(header.rules.baz, 'bar should be true');
      header.set('outOfViewport', false);
      assert.ok('can change states without exception');
    });
  });
});

define("dummy/tests/unit/utils/toggle-box-positions-test", ["dummy/utils/toggle-box-positions", "qunit"], function (_toggleBoxPositions, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | toggle-box-positions', function () {
    // Replace this with your real tests.
    (0, _qunit.skip)('it works', function (assert) {
      let result = (0, _toggleBoxPositions.default)();
      assert.ok(result);
    });
  });
});

define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
