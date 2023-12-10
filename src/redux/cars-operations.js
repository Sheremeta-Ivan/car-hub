import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const response = await axios.get(
      'https://6572eb9c192318b7db414286.mockapi.io/advert',
      {
        headers: { 'content-type': 'application/json' },
      }
    );
    return response.data;
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw error;
  }
});

const carsOperations = {
  fetchCars,
};

export default carsOperations;
