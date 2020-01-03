const hoods = {
    id: 'hoods',
    layout: {},
    paint: {
        'line-color': '#627BC1',
        'line-width': 2
    },
    source: 'hoodMap',
    type: 'line'
};
const hoodsInner = {
    id: 'hoods-inner',
    layout: {},
    paint: {
        'fill-color': '#627BC1',
        'fill-opacity': [
            'case',
            [
                'boolean',
                [
                    'feature-state',
                    'hover'
                ],
                false
            ],
            1,
            0.5
        ]
    },
    source: 'hoodMap',
    type: 'fill'
};
const hoodsLabels = {
    id: 'hoods-labels',
    layout: {
        'text-field': ['get', 'NAME'],
        'text-letter-spacing': 0.1,
        'text-max-width': 5,
        'text-transform': 'uppercase',
        'text-variable-anchor': ['top', 'bottom', 'left', 'right']
    },
    source: 'hoodMap',
    type: 'symbol'
};
export const layersToAdd = [
    hoods,
    hoodsInner,
    hoodsLabels
];
