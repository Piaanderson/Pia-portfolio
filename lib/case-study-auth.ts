export const CASE_STUDY_COOKIE_NAME = "pia-case-study-access";
export const CASE_STUDY_COOKIE_VALUE = "granted";
export const CASE_STUDY_SESSION_SECONDS = 60 * 60 * 12;

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

export function isCaseStudyPasswordValid(password: string) {
  const candidates = readConfiguredPasswords();
  if (!password || candidates.length === 0) {
    return false;
  }

  return candidates.includes(password.trim());
}

export function isCaseStudyAuthConfigured() {
  return readConfiguredPasswords().length > 0;
}
