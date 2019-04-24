<template lang="pug">
  main
    section.section.section-hero#home
      .content-container.section-hero__content
        .section-hero__video( style="background-image: url(img/video-thumb.jpg);" )
          video( muted autoplay loop="loop" poster="img/video-thumb.jpg" )
            source( src="vid/demo.mp4" type="video/mp4" )
        .section-hero__text
          h1.title Airtabledata Plugin
          h2.sub-title  A simple way to get your Airtable data into your sketch symbols. 
          div.button-container
            AppButton( @click="goToMore" style="color: #973df2;" ) More...
            AppButton( @click="goToProductPage" style="color: #ffb142;" pop ) Buy $8,99
          // p.paragraph  Just link the Sketch layer inside your symbol to your Airtable column by giving it the same name. Whether it's and image or a text layer, it will fill your data effortlessly.
          // p.paragraph  If you want more advanced options, no problem we've got multiple available! 
    section.section.section-info#info-section
      .content-container.section-info__content
        .section-info__text
          h1.title Seamless integration
          p.paragraph Just link the Sketch layer inside your symbol to your Airtable column by giving it the same name. Whether it's and image or a text layer, it will fill your data effortlessly.
          p.paragraph If you want more advanced options, no problem we've got multiple available! 
        .section-info__image
          img( src="img/info-image.png" style="object-fit: cover;")
    section.section.section-specs#specs-section
      .content-container.section-specs__header
        h1.title Fill data in advanced ways
        h2.sub-title Fill your data using multiple flexible methods.
      .content-container.section-specs__content
        .content-column
          img.content-column__image( src="img/screenshot-name.png" style="object-fit: cover;")
          .content-column__text
            h1.sub-title.content-column__title Simple names
            p.paragraph
              | Just link the layer to your Airtable column by giving it the same name. Whether it's and image or a text layer, it will fill your data effortlessly. 
        .content-column
          img.content-column__image( src="img/screenshot-helpers.png" style="object-fit: cover;")
          .content-column__text
            h1.sub-title.content-column__title Advanced filling
            p.paragraph
              | There are several helper tools available, for example <code># WiFi •</code> will fill the symbol <code>•</code> WiFI amount of times, so if your WiFi field has a value of 4 this layer would be filled with ••••.
        .content-column
          img.content-column__image( src="img/screenshot-javascript.png" style="object-fit: cover;")
          .content-column__text
            h1.sub-title.content-column__title Inline JavaScript
            p.paragraph
              | There is also a full-fledged JavaScript evaluator available by using the prefix <code>></code>. This means you can create all sorts of special dynamic layers, go nuts! 
        .content-column
          img.content-column__image( src="img/screenshot-get-record.png" style="object-fit: cover;")
          .content-column__text
            h1.sub-title.content-column__title Get specific records
            p.paragraph
              | Need to fill a specific record? No problem! Just refrence the record ID in the symbol or parent folder name by including it prefaced by an <code>@</code> and you're good to go.
    section.section.section-faq#faq-section
      .content-container( style="text-align: center;" )
        h1.title Try it out!
        h2.sub-title  30 day money back policy, no questions asked.
        div.button-container
          AppButton( @click="goToProductPage" style="color: #973df2;" pop ) Buy $8,99
    footer.footer( style="background-color: #171717;" )
      div
        a.link( href="https://www.notion.so/F-A-Q-429e80e216364bd7b32b99d51c58938e" target="blank" ) F.A.Q.
        a.link( href="mailto:will@sketchairtabledataplugin.com" ) Contact
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppButton
  },
  methods: {
    goToProductPage () {
      this.$ga.event({
        eventCategory: 'conversion',
        eventAction: 'buy-button',
      })
      document.location.href = 'https://gum.co/FNdp'
    },
    goToMore () {
      this.$ga.event({
        eventCategory: 'interaction',
        eventAction: 'goto-more',
      })
      document.querySelector('#info-section').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.section-hero {
  padding-top: 10px;
  color: rgb(43, 43, 43);
  // background-color: rgb(114, 63, 205);
  
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
  }

  &__video {
    margin: 10px 0;
    max-width: 100%;

    background-size: cover;
    background-position: center center;

    video {
      width: 100%;
    }
  }

  &__text {
    margin: 12px 0;
  }
}

.section-info {
  color: white;
  background-color: rgb(114, 63, 205);

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap-reverse;

    & > * {
      width: 50%;
      flex-grow: 1;
    }
  }

  &__image {
    min-width: 360px;
    img {
      width: 100%;
    }
  }

}

.section-specs {
  &__header {
    text-align: center;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px;
  }

  &__text {
    width: 66%;
  }
}

.section-faq {
  background-color: rgb(240, 241, 241);
}

.title {
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 1em;
  padding: 0.1em 0;
}

.sub-title {
  margin: 12px 0;
  letter-spacing: -1px;
  color: rgb(87, 87, 87);
}

.button-container {
  font-size: 1.5rem;
}

.paragraph {
  line-height: 1.5em;
  margin: 12px 0;

  code {
    border-radius: 3px;
    background-color: rgba(138, 138, 138, 0.29);
    padding: 2px 6px;
  }
}

.content-column {
  $column-count: 2;
  width: calc(#{100 / $column-count}% - 40px);
  max-width: 480px;

  min-width: 240px;
  margin: 20px;

  flex-grow: 1;

  &__image {
    width: 100%;
    height: 240px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  &__text {
    line-height: 1.5em;
  }

  &__title {
    color: #0080ff;
  }
}
</style>
