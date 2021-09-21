//fetch return json
export const fetchApi = async (url: string) => {
  const response = await fetch(
    `https://hmg-dev-brf-backend.profitmais.com.br${url}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();
  return data;
};
