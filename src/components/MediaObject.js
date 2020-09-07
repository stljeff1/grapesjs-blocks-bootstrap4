import columnsIcon from 'raw-loader!../icons/columns-solid.svg';

export const MediaObjectBlock = (bm, label, cat) => {
    bm.add('media_object', {
        label: `
            ${columnsIcon}
            <div>${label}</div>
        `,
        category: cat,
        content: `<div class="media">
                 <img class="mr-3" src="">
                 <div class="media-body">
                 <h5>Media heading</h5>
                 <div>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                 </div>
                 </div>`
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('bs-media_object', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Media Object',
                tagName: 'div',
                classes: ['media']
            })
        }, {
            isComponent(el) {
                if(el && el.classList && el.classList.contains('media')) {
                    return {type: 'bs-media'};
                }
            }
        }),
        view: defaultView
    });

    domc.addType('bs-media_body', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Media Body',
                tagName: 'div',
                classes: ['media-body']
            })
        }, {
            isComponent(el) {
                if(el && el.classList && el.classList.contains('media-body')) {
                    return {type: 'bs-media_body'};
                }
            }
        }),
        view: defaultView
    });
}
