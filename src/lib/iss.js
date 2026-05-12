const ISS_API = 'https://api.wheretheiss.at/v1/satellites/25544';

/**
 * @returns {Promise<{lat: number, lng: number, altKm: number, velocityKmh: number, visibility: string, footprintKm: number}>}
 */
export async function fetchISSData() {
  const res = await fetch(ISS_API, { cache: 'no-store' });
  const data = await res.json();
  return {
    lat: data.latitude,
    lng: data.longitude,
    altKm: data.altitude,
    velocityKmh: data.velocity,
    visibility: data.visibility,
    footprintKm: data.footprint
  };
}
