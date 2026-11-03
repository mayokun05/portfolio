import type { ImageMetadata } from 'astro';
import quantum from '../assets/certificates/quantum-analytics-data-analytics.png';
import alx from '../assets/certificates/alx-ai-career-essentials.png';
import star from '../assets/certificates/excelerate-star-performer.png';
import merishot from '../assets/certificates/merishot-excel-python.png';

export interface Certificate {
  title: string;
  issuer: string;
  image: ImageMetadata;
}

export const certificates: readonly Certificate[] = [
  { title: 'Data Analytics Track Training', issuer: 'Quantum Analytics', image: quantum },
  { title: 'Data Analyst Associate Star Performer', issuer: 'Excelerate', image: star },
  { title: 'AI Career Essentials', issuer: 'ALX', image: alx },
  { title: 'Data Analytics & Visualization: Excel and Python', issuer: 'Merishot Academy', image: merishot },
];
