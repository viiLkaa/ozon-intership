export function clampValue(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.min(100, Math.max(0, n));
}

export function circleLength(radius) {
  const r = Number(radius);
  if (!Number.isFinite(r) || r <= 0) return 0;
  return 2 * Math.PI * r;
}

export function valueToDashOffset(value, length) {
  const v = clampValue(value) / 100;
  const c = Number(length);
  if (!Number.isFinite(c) || c <= 0) return 0;
  return c * (1 - v);
}
