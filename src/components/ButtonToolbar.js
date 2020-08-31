import buttonIcon from "raw-loader!../icons/button.svg";

export const ButtonToolbarBlock = (bm, label) => {
    bm.add('bs-button_toolbar', {
        label: `
            ${buttonIcon}
            <div>${label}</div>
        `,
        category: 'Bootstrap Forms',
        content: {
            type: 'bs-button_toolbar'
        }
    });
};

export default (dc) => {

    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('bs-button_toolbar', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Button Toolbar',
                tagName: 'div',
                classes: ['btn-toolbar'],
                droppable: '.btn-group',
                attributes: {
                    role: 'toolbar'
                },
                traits: [
                    {
                        type: 'Text',
                        label: 'ARIA Label',
                        name: 'aria-label',
                        placeholder: 'A toolbar of button groups'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            })
        }, {
            isComponent(el) {
                if(el && el.classList && el.classList.contains('btn-toolbar')) {
                    return {type: 'bs-button_toolbar'};
                }
            }
        }),
        view: defaultView
    });
}
