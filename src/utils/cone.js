// Прямий круговий конус

export function coneSurfaceArea(radius, height) {
  const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  return Math.PI * radius * (radius + slantHeight);
}

export function coneVolume(radius, height) {
  return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
}