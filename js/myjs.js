var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,

    states : {
        "default-state": {
            gradients: [
                ['#27324b', '#27324b'],
                ['#27324b', '#00CDAC'],
                ['#0076d1', '#27324b']
            ]
        }
    }
});
