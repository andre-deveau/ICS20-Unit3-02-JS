// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-02-JS/sw.js", {
    scope: "/ICS20-Unit3-02-JS/",
  })
}

/**
 * This function displays an alert.
 */
function enterClicked() {
  //input
  const lengthbase = parseInt(document.getElementById("base-length").value)
  const basewidth = parseInt(document.getElementById("base-width").value)
  const pyramidheight = parseInt(
    document.getElementById("pyramid-height").value
  )

  //process
  const volume = (lengthbase * basewidth * pyramidheight) / 3

  //output
  document.getElementById("volume-of-right-rectangular-pyramid").innerHTML =
    "The are of the trapezoid is: " + volume.toFixed(2) + "cm³"
}
