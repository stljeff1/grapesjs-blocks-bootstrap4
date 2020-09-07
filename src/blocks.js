import { CollapseBlock } from './components/Collapse';
import { DropDownBlock } from './components/Dropdown';
import { TabsBlock } from "./components/tabs/TabsNavigation";
import { FormBlock } from "./components/Form";
import { InputBlock } from "./components/Input";
import { InputGroupBlock } from "./components/InputGroup";
import { TextareaBlock } from "./components/Textarea";
import { SelectBlock } from "./components/Select";
import { CheckboxBlock } from "./components/Checkbox";
import { RadioBlock } from "./components/Radio";
import { ButtonBlock } from "./components/Button";
import { ButtonGroupBlock } from "./components/ButtonGroup";
import { ButtonToolbarBlock } from "./components/ButtonToolbar";
import { LabelBlock } from "./components/Label";
import { LinkBlock } from "./components/Link";
import { FileInputBlock } from "./components/FileInput";
import { ImageBlock } from "./components/Image";
import { VideoBlock } from "./components/video/Video";
import { ParagraphBlock } from "./components/Paragraph";
import { HeaderBlock } from "./components/Header";
import { CardBlock } from "./components/Card";
import { BadgeBlock } from "./components/Badge";
import { AlertBlock } from "./components/Alert";
import { MediaObjectBlock } from "./components/MediaObject";
import { ColumnBreakBlock } from "./components/ColumnBreak";
import { ColumnBlock } from "./components/Column";
import { RowBlock } from "./components/Row";
import { ContainerBlock } from "./components/Container";
import { TextBlock } from "./components/Text";

export default (editor, config = {}) => {
    const c = config;
    const blocks = c.blocks;
    const bm = editor.BlockManager;
    const cats = c.blockCategories;

    if (blocks.image) {
        ImageBlock(bm, c.labels.image);
    }

    if (blocks.video) {
        VideoBlock(bm, c.labels.video);
    }

    // Rebuild the default component and add utility settings to it (border, bg, color, etc)
    // Rebuild the text component and add display utility setting
    if (blocks.text) {
        TextBlock(bm, c.labels.text);
    }

    // Rebuild the link component with settings for collapse-control
    if (blocks.link) {
        LinkBlock(bm, c.labels.link);
    }

    // Basic
    /*if (blocks.list) {
      ListBlock(bm, c.labels.list)
      List(domc);
    }*/

    /*if (blocks.description_list) {
    }*/


    // LAYOUT
    if (blocks.container) {
        ContainerBlock(bm, c.labels.container);
    }
    if (blocks.row) {
        RowBlock(bm, c.labels.row);
    }
    if (blocks.column) {
        ColumnBlock(bm, c.labels.column);

        ColumnBreakBlock(bm, c.labels.column_break);
    }
    // Media object
    if (blocks.media_object) {
        MediaObjectBlock(bm, c.labels.media_object);
    }

    // Bootstrap COMPONENTS
    // Alert
    if (blocks.alert) {
        AlertBlock(bm, c.labels.alert);
    }

    if (blocks.tabs) {
        TabsBlock(bm, c);
    }

    // Badge
    if (blocks.badge) {
        BadgeBlock(bm, c.labels.badge);
    }

    // Card
    if (blocks.card) {
        CardBlock(bm, c);
    }

    // Collapse
    if (blocks.collapse) {
        CollapseBlock(bm, c.labels.collapse);
    }

    // Dropdown
    if (blocks.dropdown) {
        DropDownBlock(bm, c.labels.dropdown);
    }


    // TYPOGRAPHY
    if (blocks.header) {
        HeaderBlock(bm, c.labels.header);
    }
    if (blocks.paragraph) {
        ParagraphBlock(bm, c.labels.paragraph);
    }

    if (blocks.form) {
        FormBlock(bm, c.labels.form);
    }

    if (blocks.input) {
        InputBlock(bm, c.labels.input);

        FileInputBlock(bm, c.labels.file_input);
    }

    if (blocks.form_group_input) {
        InputGroupBlock(bm, c.labels.form_group_input);
    }

    if (blocks.textarea) {
        TextareaBlock(bm, c.labels.textarea);
    }

    if (blocks.select) {
        SelectBlock(bm, c.labels.select);
    }

    if (blocks.checkbox) {
        CheckboxBlock(bm, c.labels.checkbox);
    }

    if (blocks.radio) {
        RadioBlock(bm, c.labels.radio);
    }

    if (blocks.label) {
        LabelBlock(bm, c.labels.label);
    }

    if (blocks.button) {
        ButtonBlock(bm, c.labels.button);
    }

    if (blocks.button_group) {
        ButtonGroupBlock(bm, c.labels.button_group);
    }

    if (blocks.button_toolbar) {
        ButtonToolbarBlock(bm, c.labels.button_toolbar, c);
    }
}

