var granimInstance = new Granim({
  element: '#content',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#5188b8', '#7da6ca'],
              ['#FF9999', '#FF1F1F'],
              ['#FFE8AD', '#FFCB47']
          ]
      }
  }
});