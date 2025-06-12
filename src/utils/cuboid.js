// Прямокутний паралелепіпед

export function cuboidSurfaceArea(length, width, height) {
  return 2 * (length * width + length * height + width * height);
}

export function cuboidVolume(length, width, height) {
  return length * width * height;
}