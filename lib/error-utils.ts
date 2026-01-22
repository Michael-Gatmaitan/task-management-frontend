import { AxiosError } from 'axios';

/**
 * Extracts error messages from Laravel validation errors
 * Laravel returns errors in the format:
 * - response.data.errors: { field: ["message1", "message2"] }
 * - response.data.message: "General error message"
 */
export function getLaravelErrorMessage(error: unknown): string {
  if (!error) return 'An error occurred';

  // Check if it's an Axios error
  if (error instanceof AxiosError && error.response) {
    const { data } = error.response;

    // Laravel validation errors (422 status)
    if (data.errors && typeof data.errors === 'object') {
      // Flatten all error messages from all fields
      const messages: string[] = [];
      Object.values(data.errors).forEach((fieldErrors) => {
        if (Array.isArray(fieldErrors)) {
          messages.push(...fieldErrors);
        } else if (typeof fieldErrors === 'string') {
          messages.push(fieldErrors);
        }
      });
      return messages.length > 0 ? messages.join(', ') : 'Validation error';
    }

    // General error message
    if (data.message && typeof data.message === 'string') {
      return data.message;
    }
  }

  // Fallback for other error types
  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred';
}
