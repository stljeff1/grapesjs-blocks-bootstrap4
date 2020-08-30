import windowIcon from "raw-loader!../icons/window-maximize-solid.svg";

export const ContainerBlock = (bm, label) => {
    bm.add('bs-container').set({
        label: `
            ${windowIcon}
            <div>${label}</div>
        `,
        category: 'Bootstrap Layout',
        content: {
            type: 'bs-container',
            classes: ['container']
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('bs-container', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Container',
                tagName: 'div',
                droppable: true,
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: 'container', name: 'Fixed'},
                            {value: 'container-fluid', name: 'Fluid'}
                        ],
                        label: 'Width'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            })
        }, {
            isComponent(el) {
                if(el && el.classList && (el.classList.contains('container') || el.classList.contains('container-fluid'))) {
                    return {type: 'bs-container'};
                }
            }
        }),
        view: defaultView
    });
}
