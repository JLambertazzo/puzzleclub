var granimInstance = new Granim({
  element: '#content',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#5188b8', '#355e89'],
              ['#FF9999', '#FF1F1F'],
              ['#FFBA0A', '#FFCB47']
          ]
      }
  }
});