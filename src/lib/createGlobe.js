import Globe from 'globe.gl';
import * as THREE from 'three';

function createIssObject() {
  const group = new THREE.Group();

  const panelGeometry = new THREE.BoxGeometry(0.55, 0.03, 0.22);
  const panelMaterial = new THREE.MeshStandardMaterial({
    color: 0x4f92e8,
    emissive: 0x14335f,
    metalness: 0.3,
    roughness: 0.45
  });

  const leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  leftPanel.position.set(-0.45, 0, 0);

  const rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  rightPanel.position.set(0.45, 0, 0);

  const truss = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.02, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x94a4b0, metalness: 0.55, roughness: 0.45 })
  );

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.08, 0.08),
    new THREE.MeshStandardMaterial({ color: 0xd9e4ee, metalness: 0.35, roughness: 0.35 })
  );
  body.position.set(0, 0.04, 0);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 20, 20),
    new THREE.MeshBasicMaterial({ color: 0xcffdff, transparent: true, opacity: 0.3, depthWrite: false })
  );
  glow.position.set(0, 0.02, 0);

  group.add(leftPanel, rightPanel, truss, body, glow);
  group.rotation.set(0.28, 0.7, 0.18);
  group.scale.setScalar(1.85);
  return group;
}

/**
 * @param {HTMLElement} container
 * @returns {any}
 */
export function initGlobe(container) {
  return new Globe(container)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .objectsData([])
    .objectLat('lat')
    .objectLng('lng')
    .objectAltitude('alt')
    .objectThreeObject(createIssObject)
    .objectFacesSurface(false)
    .pointsData([])
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude('alt')
    .pointRadius('size')
    .pointColor('color')
    .ringsData([])
    .ringLat('lat')
    .ringLng('lng')
    .ringAltitude(0)
    .ringMaxRadius('maxR')
    .ringPropagationSpeed('speed')
    .ringRepeatPeriod('period')
    .ringColor('colors')
    .arcsData([])
    .arcStartLat('startLat')
    .arcStartLng('startLng')
    .arcEndLat('endLat')
    .arcEndLng('endLng')
    .arcColor(() => 'rgba(255, 160, 80, 0.45)')
    .arcAltitude(0.05)
    .arcStroke(0.2)
    .arcDashLength(0.22)
    .arcDashGap(0.45)
    .arcDashAnimateTime(2600);
}
