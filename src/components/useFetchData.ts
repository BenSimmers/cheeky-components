/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

type FetchDataResponse<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type FetchDataOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown>;
};

export const useFetchData = <T>(url: string) => {
  const [response, setResponse] = useState<FetchDataResponse<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async (options: FetchDataOptions) => {
    try {
      setResponse({ data: null, loading: true, error: null });

      const response = await fetch(url, {
        method: options.method,
        body: options.body ? JSON.stringify(options.body) : undefined,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      setResponse({ data, loading: false, error: null });
    } catch (error) {
      setResponse({ data: null, loading: false, error: error as Error });
    }
  };

  useEffect(() => {
    fetchData({ method: 'GET' });
  }, []);

  return { ...response, fetchData };
};
