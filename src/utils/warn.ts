export function devWarning(valid: boolean, message: string): void {
  // Support uglify
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.error(`Warning: ${message}`)
  }
}
