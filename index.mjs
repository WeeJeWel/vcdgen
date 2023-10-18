#!/usr/bin/env node

(() => {
  if (!process.argv[2]) {
    console.log(`Usage:

$ vcdgen "<timings>"

Example:

$ vcdgen "100 300 100 300 100 200" > out.vcd

Note: Timings are µsec.`);
    return;
  }

  const recording = process.argv[2].split(' ');

  let output = [];
  output.push('$timescale 1 us $end');
  output.push('$scope module vcdgen $end');
  output.push('$var wire 1 ! recording $end');
  output.push('$upscope $end');
  output.push('$enddefinitions $end');

  let delta = 0;
  let bit = false;
  Object.values(recording).forEach(change => {
    change = parseInt(change);
    output.push('#' + delta);

    if (bit) {
      output.push('0!');
    } else {
      output.push('1!');
    }

    bit = !bit;
    delta += change;
  });

  console.log(output.join('\n'));
})();