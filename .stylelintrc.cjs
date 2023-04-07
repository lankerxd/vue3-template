module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
  ],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-html',
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'number-leading-zero': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      'overflow',

      'position',
      'top',
      'right',
      'bottom',
      'left',

      'display',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',

      'width',
      'min-width',
      'max-width',
      'height',
      'line-height',
      'min-height',
      'max-height',

      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      'color',
      'direction',
      'letter-spacing',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-shadow',
      'text-transform',
      'unicode-bidi',
      'vertical-align',
      'white-space',
      'word-spacing',

      'font',
      'font-style',
      'font-variant',
      'font-weight',
      'font-size',
      'line-height',
      'font-family',

      'border',
      'boder-style',
      'border-width',
      'border-color',
      'border-radius',

      'background',
      'background-color',
      'background-position',
      'background-size',
      'background-repeat',
      'background-origin',
      'background-clip',
      'background-attachment',
      'background-image',
    ],
  },
  overrides: [
    {
      files: ['**/*.{scss,css,sass}'],
      customSyntax: 'postcss-scss',
    },
  ],
}
