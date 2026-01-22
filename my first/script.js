let current = 0;
  const lights = ['red', 'yellow', 'green'];

  function updateLights() {
    // Remove all active lights
    lights.forEach(color => {
      document.getElementById(color).classList.remove('active');
    });

    // Add active to the current light
    document.getElementById(lights[current]).classList.add('active');

    // Move to next
    current = (current + 1) % lights.length;
  }

  setInterval(updateLights, 2000); // change every 2 seconds
  updateLights(); // initial call
