import loadTraits from './traits';
import loadComponents from './components';
import loadBlocks from './blocks';
import {
  default_block_categories,
  default_blocks,
  default_components,
  default_labels
} from './defaults';

const loadCss = editor => {
  editor.Config.canvasCss += `
    /* Layout */

    .gjs-dashed .container, .gjs-dashed .container-fluid,
    .gjs-dashed .row,
    .gjs-dashed .col, .gjs-dashed [class^="col-"] {
      min-height: 1.5rem !important;
    }
    .gjs-dashed .w-100 {
      min-height: .25rem !important;
      background-color: rgba(0,0,0,0.1);
    }
    .gjs-dashed img {
      min-width: 25px;
      min-height: 25px;
      background-color: rgba(0,0,0,0.5);
    }

    /* Components */

    .gjs-dashed .btn-group,
    .gjs-dashed .btn-toolbar {
      padding-right: 1.5rem !important;
      min-height: 1.5rem !important;
    }
    .gjs-dashed .card,
    .gjs-dashed .card-group, .gjs-dashed .card-deck, .gjs-dashed .card-columns {
      min-height: 1.5rem !important;
    }
    .gjs-dashed .collapse {
      display: block !important;
      min-height: 1.5rem !important;
    }
    .gjs-dashed .dropdown {
      display: block !important;
      min-height: 1.5rem !important;
    }
    .gjs-dashed .dropdown-menu {
      min-height: 1.5rem !important;
      display: block !important;
    }
  `
};

export default (editor, opts = {}) => {

  window.editor = editor;

  const opts_blocks = opts.blocks || {};
  const opts_block_categories = opts.blockCategories || {};
  const opts_labels = opts.labels || {};
  const opts_components = opts.components || {};
  const opts_traits = opts.traits || false;
  const opts_css = opts.css || false;
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['components'];
  delete opts['blockCategories'];

  let options = { ...{
    components: Object.assign(default_components, opts_components),
    blocks: Object.assign(default_blocks, opts_blocks),
    labels: Object.assign(default_labels, opts_labels),
    blockCategories: Object.assign(default_block_categories, opts_block_categories),
    optionsStringSeparator: '::',
    classNavigation: 'nav',
    classTabPanes: 'tab-content',
    classTabPane: 'tab-pane',
    classTab: 'nav-item',
  },  ...opts };

  // Add components
  if (opts_traits) {
    loadTraits(editor, options);
  }
  loadComponents(editor, options);
  loadBlocks(editor, options);
  if (opts_css) {
    loadCss(editor, options);
  }
};

export const addBlocks = (editor, blocks, opts) => {
  const opts_labels = opts.labels || {}
  const opts_blockCategories = opts.blockCategories || {}
  let options = { ...{
    components: {},
    blocks,
    labels: Object.assign(default_labels, opts_labels),
    blockCategories: Object.assign(default_block_categories, opts_blockCategories),
    optionsStringSeparator: '::',
    classNavigation: 'nav',
    classTabPanes: 'tab-content',
    classTabPane: 'tab-pane',
    classTab: 'nav-item',
  },  ...opts };

  loadBlocks(editor, options);
}
