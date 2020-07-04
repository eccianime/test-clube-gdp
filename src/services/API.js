import axios from 'axios';

export const APOD = axios.create({
	baseURL: "https://api.nasa.gov/planetary/"
})

export const API_KEY = 'A1zpxZlT9qGlpbVYfGUz47cEe0Dt3zHjqhQ57dL3';