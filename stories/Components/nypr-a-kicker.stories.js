import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components|Atoms/Kicker',
  parameters: { lineage: {'name': 'nypr-a-kicker'} },
};

export const News = () => {
  return {
    template: hbs`
        <NyprAKicker @url={{url}}>
            {{text}}
        </NyprAKicker>`,
    context: {
        text: "News",
        url: "http://www.gothamist.com/news"
    }
  }
};

export const Sponsored = () => {
    return {
      template: hbs`
          <NyprAKicker class={{class}}>
              Sponsored
          </NyprAKicker>`,
      context: {
          text: "News",
          url: "http://www.gothamist.com/news",
          class: "o-kicker--sponsored"
      }
    }
  };
