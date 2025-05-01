// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Function to calculate the volume of a sphere
function calculateVolume() {
  // Get the radius value from the input
  const radius = parseFloat(document.getElementById('radius').value);

  // Check for valid input
  if (isNaN(radius) || radius < 0) {
    document.getElementById('result').textContent = 'Please enter a valid radius.';
    return;
  }

  // Calculate volume: V = (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 2 decimal places and display the result
  document.getElementById('result').textContent =
    `Volume of the sphere: ${volume.toFixed(2)} cubic units`;
}
