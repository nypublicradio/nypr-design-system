# `nypr-design-system` changelog

## `3.0.0-alpha2`

- [DOCS] Documentation Updates
- [CHANGE] Update font and line height scales to be independent of type (type = small, body, header, etc)
- [CHANGE] Move storybook style imports to preview.js 
- [CHANGE] Remove media query from typeface mixin and convert typeface usages to mobile-first responsive

## `3.0.0-alpha1`
- [BREAKING] Tokens updated to use CSS custom properties (CSS variables) 
- [BREAKING] Typography Tokens refactored (WIP)
- [BREAKING] Spacing Tokens refactored
- [BREAKING] Color Tokens refactored (WIP)
- [CHANGE] CSS themes are now included in addon instead of importing from the Pattern Lab site
- [ENHANCEMENT] Added White Label CSS theme
- [ENHANCEMENT] Alternate stylesheet support for development
- [ENHANCEMENT] Removed parent selectors (ampersands) from SASS
- [REMOVED] Removed ember-addon-docs site
- [ENHANCEMENT] Added Storybook
- [ENHANCEMENT] Added live swatches to storybook documentation for fonts and spacing
- [ENHANCEMENT] Installed storybook plugins (a11y, actions, knobs, links, viewport)
- [ENHANCEMENT] Set up a basic Github pages deploy for storybook in circle.yml
- [DOCS] Added a real README.md
- [DOCS] Decided on using [Trello CSS Style Guide](https://github.com/trello/trellisheets/blob/master/styleguide.md) going forward
- [DOCS] Added documentation for Style Foundations
- [DOCS] Added documentation for Design Onboarding
- [DOCS] Added documentation for Development Guidelines
- [DOCS] Added design component documentation for cards, buttons, images, bylines, timestamps, footer, sidebar
- [DOCS] Added example "stories" for buttons

## `2.10.4`
- [CHANGE] added newsletter signup component for article page
- [CHANGE] added link for terms on newsletter signup components
- [CHANGE] added GA tracking to newsletter signup components 
- [CHANGE] added location field for mailchimp tracking to newsletter signup components 

## `2.10.3`
- [CHANGE] Update NyprODonate to accept an icon name as a parameter.
- [ENHANCEMENT] Add a new icon `nyc-love`, depicting a heart over a city skyline.

## `2.10.2`
- [CHANGE] replace GTM click tracking attributes added in 2.10.1 with more generic and flexible `...attributes`

## `2.10.1`
- [CHANGE] add optional GTM click tracking attributes to nypr-m-share-tools/link.hbs

## `2.10.0`
- [CHANGE] add optional target and clickAction to nypr-m-share-tools/link.hbs

## `2.0.9`
- [CHANGE] add optional title to `nypr-m-share-tools/link.hbs`

## `2.0.7`
- [CHANGE] Updates to `<NyprMByline>`

## `2.0.6`
- [ENHANCEMENT] add spotify links to `<NyprMShareTools>`

## `2.0.5`
- [ENHANCMENT] add source maps
- [BUGFIX] allow for non-route urls in nav menu (not sure how this worked previously :thinking:)

## `2.0.4`
- [ENHANCEMENT] allow passing in image dimensions to `nypr-m-figure`

## `2.0.3`
- [ENHANCEMENT] article body component parces facebook embed
- [ENHANCEMENT] support multiple authors in meta block
- [ENHANCEMENT] add nypr-m-pull-quote molecule
- [CHANGE] remove nypr-m-block-urgent, replace with nypr-m-text-banner

## `2.0.2`
- [ENHANCEMENT] support linked image credits

## `2.0.1`
- [ENHANCEMENT] pass in image metadata to gallery and image components

## `2.0.0`
- [BREAKING] argument changes to the following components:
 - `<NyprMGalleryLead/>`
 - `<NyprOGallery::slide/>`
 - `<NyprOArticleHeader::meta/>`

## `1.1.8`
- support `@urgent` param for urgent block variation

## `1.1.7`
- Add m-block-urgent (breaking news banner)

## `1.1.6`
- update contact touts to conform with new pattern lab styles

## `1.1.5`
- inline form updates

## `1.1.4`
- Security updates
- #27 Update box-banner

## `1.1.3`
- Fix bad release

## `1.1.2`
- #19 UTM fixes for gallery shares
- Add spacing class to footer

## `1.1.11`
- #12 audio and video icon support

## `1.1.0`
- #23 adds bo banner molecule

## `1.0.10`
see release notes

## `1.0.9`
- #20 support srcset in gallery lead thumbnails
- fix share button arrow alignment
- accesibility nav roles and labels
- misc pattern lab sync

## `1.0.8`
- #7 accessibility improvements for newsletter signup module
- #10 accessibility improvements for gallery
- #16 add 'Advertisement' back to ad label component
- #16 remove built in ad label from several templates

## `1.0.7`
- svg and image accessibility updates [DS-310] & [DS-307]
- update progress bar to accept a target to measure against

## `1.0.6`
- render gallery overlay titles as raw HTML

## `1.0.5`
- #13 move third-party API calls to article body component
- #14 update brands linkroll to exclude brands

## `1.0.4`
- test selector for a release

## `1.0.3`
- fix timestamp formatting [DS-315]

## `1.0.2`
- comments out advertisment label

## `1.0.1`
- tips email in footer. hardcoded for gothamist launch.

## `1.0.0`
- first major release ahead of gothamist launch

## `0.2.0`
- blocks and assorted layout components
- nypr-o-header service for managing rules
- share tools
- gallery overlay

## `0.1.0`
- initial internal release
- article template components
- header bar
- side menu
- footer

## `0.0.4`
- adds a `component-lineage` in-repo addon 282d379
- adds a corresponding `component-lineage` component to render out the actual related component names e45f006

## `0.0.3`
fix build stage for sass vars

## `0.0.2`
some updates for demo

## `0.0.1`
initial release
