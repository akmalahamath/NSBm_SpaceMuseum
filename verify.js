const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const checks = [
  { name: 'A-Frame 1.3.0 CDN', test: html.includes('https://aframe.io/releases/1.3.0/aframe.min.js') },
  { name: 'AR.js 3.4.5 CDN', test: html.includes('https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.5/aframe/build/aframe-ar.js') },
  { name: 'Script order (A-Frame before AR.js)', test: html.indexOf('aframe.min.js') < html.indexOf('aframe-ar.js') },
  { name: 'a-scene embedded vr-mode-ui arjs', test: html.includes('embedded') && html.includes('vr-mode-ui="enabled: false"') && html.includes('arjs="sourceType: webcam') },
  { name: 'a-marker preset="hiro"', test: html.includes('<a-marker preset="hiro"') },
  { name: 'Earth a-sphere', test: html.includes('<a-sphere') },
  { name: 'Satellite a-box', test: html.includes('<a-box') },
  { name: 'Rocket cylinder and cone', test: html.includes('<a-cylinder') && html.includes('<a-cone') },
  { name: 'Floor a-plane', test: html.includes('<a-plane') },
  { name: 'a-text NSBM SPACE MUSEUM', test: html.includes('NSBM SPACE MUSEUM') || html.includes('AR SPACE MUSEUM') },
  { name: 'Earth Animation (rotation around Y, linear)', test: html.includes('property: rotation') && html.includes('easing: linear') },
  { name: 'Satellite Animation (position, dir: alternate)', test: html.includes('property: position') && html.includes('dir: alternate') },
  { name: 'models/astronaut.glb asset', test: html.includes('models/astronaut.glb') && html.includes('gltf-model') },
  { name: 'color-changer component', test: html.includes("AFRAME.registerComponent('color-changer'") && html.includes('color-changer') },
  { name: 'grow-on-tap component', test: html.includes("AFRAME.registerComponent('grow-on-tap'") && html.includes('grow-on-tap') },
  { name: 'clickable class', test: html.includes('class="clickable"') },
  { name: 'cursor rayOrigin mouse and raycaster', test: html.includes('cursor="rayOrigin: mouse"') && html.includes('raycaster="objects: .clickable"') },
  { name: 'marker-status component', test: html.includes("AFRAME.registerComponent('marker-status'") && html.includes('markerFound') && html.includes('markerLost') },
  { name: 'Status banner red/green initial', test: html.includes('SEARCHING FOR HIRO MARKER...') && html.includes('MARKER FOUND') && html.includes('MARKER LOST') },
  { name: 'Camera entity outside marker', test: html.indexOf('</a-marker>') < html.indexOf('<a-entity\n      camera') || html.indexOf('</a-marker>') < html.indexOf('<a-entity camera') },
  { name: 'astronaut.glb exists on disk', test: fs.existsSync('models/astronaut.glb') && fs.statSync('models/astronaut.glb').size > 1000000 },
  { name: 'hiro.png marker exists on disk', test: fs.existsSync('markers/hiro.png') && fs.statSync('markers/hiro.png').size > 10000 }
];

let allPassed = true;
checks.forEach(c => {
  console.log((c.test ? '✅ PASS' : '❌ FAIL') + ' - ' + c.name);
  if (!c.test) allPassed = false;
});

if (allPassed) {
  console.log('\n🚀 ALL 22 VERIFICATION CHECKS PASSED PERFECTLY!');
} else {
  process.exit(1);
}
