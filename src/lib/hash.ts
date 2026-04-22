/**
 * Compute a SHA-256 hash of a string and return a lowercase hex digest.
 * Used by the restricted-area gates so the plaintext password does not
 * ship in the bundle.
 */
export async function sha256Hex(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
