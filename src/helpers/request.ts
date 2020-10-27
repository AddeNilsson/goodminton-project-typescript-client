const baseUrl = process.env.REACT_APP_API_HOST || 'http://localhost:3001';

interface HttpResponse<T> extends Response {
  data?: T;
}

interface IRequestOptions {
  method: 'GET' | 'POST' | 'PUT',
  headers?: { [key: string]: string },
  body?: string,
}

export default async function request<T>(
  path: string,
  options: IRequestOptions,
): Promise<T> {
  const token = localStorage.getItem('jwt'); // TODO: fix re-getting token for any call..

  const response: HttpResponse<T> = await fetch(`${baseUrl}/api${path}`, {
    method: options.method,
    headers: {
      ...options.headers,
      'x-access-token': token || '',
    },
    body: options.body,
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw (data);
}
