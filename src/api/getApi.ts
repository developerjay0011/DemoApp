import api from './index';

// Define the types
interface ExampleData {
  id: number;
  name: string;
}

// Fetch example data from the API
export const fetchData = async (): Promise<ExampleData[]> => {
  try {
    const response = await api.get<ExampleData[]>('');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch example data');
  }
};
