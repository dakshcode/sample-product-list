import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const useAxios = (axiosParams) => {
    const [data, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    const fetchData = async (params) => {
      try {
       const result = await axios.request(params);
      //  result.data =  await [{
      //   'name': 'BMW Sedan',
      //   'price': '49.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-mike-244206.jpg'
      //  },
      //  {
      //   'name': 'Black Toyata',
      //   'price': '39.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-kelson-downes-1149137.jpg'
      //  },
      //  {
      //   'name': 'Land Rover',
      //   'price': '38.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-mike-116675.jpg'
      //  },
      //  {
      //   'name': 'Baleno',
      //   'price': '9.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-kelson-downes-1149137.jpg'
      //  },
      //  {
      //   'name': 'Ford Focus',
      //   'price': '9.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-mike-1007410.jpg'
      //  },
      //  {
      //   'name': 'Mercedes Benz',
      //   'price': '9.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-mike-1335077.jpg'
      //  },
      //  {
      //   'name': 'Audi',
      //   'price': '9.78',
      //   'unit': 'Lakhs',
      //   'image': 'pexels-mike-1335077.jpg'
      //  },
      //  {
      //  'name': 'Land Rover',
      //  'price': '9.78',
      //  'unit': 'Lakhs',
      //  'image': 'pexels-mike-116675.jpg'
      // }
      //  ];
       
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return [{ data, error, loading }, fetchData];
};