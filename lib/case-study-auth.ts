export const CASE_STUDY_COOKIE_NAME = "pia-case-study-access";
export const CASE_STUDY_SESSION_SECONDS = 60 * 60 * 12;
const CASE_STUDY_TOKEN_VERSION = "v1";

function readConfiguredPasswords() {
  const fromList =
    process.env.CASE_STUDY_PASSWORDS?.split(",")
      .map((password) => password.trim())
      .filter(Boolean) ?? [];

  const single = process.env.CASE_STUDY_PASSWORD?.trim();
  if (single) {
    fromList.push(single);
  }

  return Array.from(new Set(fromList));
}

function readSigningSecret() {
  const explicitSecret = process.env.CASE_STUDY_AUTH_SECRET?.trim();
  if (explicitSecret) {
    return explicitSecret;
  }

  const configuredPasswords = readConfiguredPasswords();
  if (configuredPasswords.length === 0) {
    return "";
  }

  // Fallback keeps setup simple: if no explicit signing secret is provided,
  // derive one from configured password material.
  return `case-study-auth:${CASE_STUDY_TOKEN_VERSION}:${configuredPasswords
    .slice()
    .sort()
    .join("::")}`;
}

function tokenPayload(expiresAtEpochSeconds: number) {
  return `${CASE_STUDY_TOKEN_VERSION}.${expiresAtEpochSeconds}`;
}

function toBase64Url(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((value) => {
    binary += String.fromCharCode(value);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(input: string) {
  const padded = input
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(input.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function importSigningKey(secret: string) {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error("Web Crypto is unavailable.");
  }

  return subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function parseToken(rawToken: string) {
  const [version, expiresAtRaw, signature] = rawToken.split(".");
  const expiresAt = Number(expiresAtRaw);

  if (!version || !signature || !Number.isFinite(expiresAt)) {
    return null;
  }

  return { version, expiresAt, signature };
}

export function isCaseStudyPasswordValid(password: string) {
  const candidates = readConfiguredPasswords();
  if (!password || candidates.length === 0) {
    return false;
  }

  return candidates.includes(password.trim());
}

export async function createCaseStudyAccessToken() {
  const secret = readSigningSecret();
  if (!secret) {
    return null;
  }

  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    return null;
  }

  const expiresAt = Math.floor(Date.now() / 1000) + CASE_STUDY_SESSION_SECONDS;
  const payload = tokenPayload(expiresAt);
  const key = await importSigningKey(secret);
  const signature = await subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload)
  );

  return `${payload}.${toBase64Url(signature)}`;
}

export async function isCaseStudyAccessTokenValid(rawToken: string | undefined) {
  const secret = readSigningSecret();
  if (!rawToken || !secret) {
    return false;
  }

  const parsed = parseToken(rawToken);
  if (!parsed || parsed.version !== CASE_STUDY_TOKEN_VERSION) {
    return false;
  }

  const now = Math.floor(Date.now() / 1000);
  if (parsed.expiresAt <= now) {
    return false;
  }

  try {
    const subtle = globalThis.crypto?.subtle;
    if (!subtle) {
      return false;
    }
    const key = await importSigningKey(secret);
    return subtle.verify(
      "HMAC",
      key,
      fromBase64Url(parsed.signature),
      new TextEncoder().encode(tokenPayload(parsed.expiresAt))
    );
  } catch {
    return false;
  }
}

export function isCaseStudyAuthConfigured() {
  return readConfiguredPasswords().length > 0;
}
