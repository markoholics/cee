export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export function hexToRgbString(hex: string, alpha = 1): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

export const houseAccentMap: Record<string, string> = {
  'bombay-dreams': '#D4AF37',
  brandoscopy: '#00D9D4',
  'labl-co': '#FF4D6D',
  'h2ai-technologies': '#7C5CFF',
}

export const houseTailwindMap: Record<string, string> = {
  'bombay-dreams': 'bombay',
  brandoscopy: 'brandoscopy',
  'labl-co': 'labl',
  'h2ai-technologies': 'h2ai',
}
