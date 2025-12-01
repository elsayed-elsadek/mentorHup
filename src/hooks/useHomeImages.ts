import { useMemo } from 'react';
import imagesManifest from '../assets/homePage/images.json';

const modules = import.meta.glob('../assets/homePage/*.{webp,png,jpg,jpeg}', { eager: true, as: 'url' }) as Record<string, string>;

export const useHomeImages = () => {
  return useMemo(() => {
    const imageMap: Record<string, string> = {};
    
    imagesManifest.forEach((img) => {
      const fullPath = `../assets/homePage/${img.name}.webp`;
      imageMap[img.name] = modules[fullPath] || '';
    });

    return {
      // Get single image by name
      get: (name: string) => imageMap[name] || '',
      
      // Predefined collections
      persons: ['person1', 'person2', 'person3', 'person4', 'person5']
        .map(name => imageMap[name])
        .filter(Boolean),
      
      aboutUs: ['aboutus1', 'aboutus2', 'aboutus3']
        .map(name => imageMap[name])
        .filter(Boolean),
      
      // Quick access to commonly used
      person1: imageMap['person1'],
      person2: imageMap['person2'],
      person3: imageMap['person3'],
      blog1: imageMap['blog1'],
      explore1: imageMap['explore1'],
      ask: imageMap['ask'],
      img1: imageMap['img1'],
      book: imageMap['book'],
      stars: imageMap['stars']


    };
  }, []);
};
