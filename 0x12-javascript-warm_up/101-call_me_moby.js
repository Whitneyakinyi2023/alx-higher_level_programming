#!/usr/bin/node
module.exports = {
    callMeMoby: function (t, theFunction) {
        for (let w = 0; w < t; w++) {
            theFunction();
        }
    }
