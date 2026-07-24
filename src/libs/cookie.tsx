// src/libs/cookie.tsx
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()!.split(";").shift() || null;
  }

  return null;
}

export function setCookie(
  name: string,
  value: string,
  days = 7
) {
  if (typeof document === "undefined") return;

  const expires = new Date(
    Date.now() + days * 86400000
  ).toUTCString();

  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export function deleteCookie(name: string) {
  if (typeof document === "undefined") return;

  document.cookie = `${name}=; Max-Age=0; path=/`;
}