/**
 * @file Design selection.
 */
(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.paragraphSelection = {
    attach: function (context) {

      /**
       * Perform alterations for each "paragraph selection" select element.
       */
      $('.paragraph-selection', context).once('paragraph-selection-init').each(function () {
        const buttons = $(this).find('li.dropbutton__item');

        buttons.each(function () {
          const button = $(this);
          const title = button.data('paragraph-title');
          const description = button.data('paragraph-description');
          const image = button.data('paragraph-image');
          const thumb = image + '.svg';
          const pathToThumb = drupalSettings.paragraphSelect.pathToImages + thumb;

          button.children('input[type=submit]').wrap( '<div class="paragraph-selection__wrapper"></div>');
          button.children('.paragraph-selection__wrapper').prepend(`
            <img src="${pathToThumb}" data-hover-title="${title}" data-hover-image="${image}" data-hover-description="${description}" class="paragraph-selection__thumbnail" />
          `);
        });
      });

      /**
       * Assign image preview to the paragraph selection.
       */
      const selector = '.paragraph-selection .paragraph-selection__thumbnail';
      $(selector, context).imagePreviewer(selector, {
        pathToImages: drupalSettings.paragraphSelect.pathToImages,
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
