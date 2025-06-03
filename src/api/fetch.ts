/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_API_URL } from "./endpoints";

export const getData = async <T = any>(
  url: string,
  params?: Record<string, any>,
  options?: {
    timeout?: number;
  }
): Promise<T> => {
  const controller = new AbortController();
  const timeout = options?.timeout ?? 30000;

  const queryString = params
    ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
    : "";

  const fetchUrl = `${BASE_API_URL}${url}${queryString}`;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error(`Request to ${fetchUrl} timed out after ${timeout}ms`);
    } else {
      console.error(`Request failed to ${fetchUrl}:`, error);
    }
    throw error;
  }
};
