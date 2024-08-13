import Link from 'next/link';

import Image from 'next/image';
const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTour = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};
async function TourPage() {
  const data: Tour[] = await fetchTour();
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8'>
        {data.map((tour) => {
          return (
            <Link
              href={`/tour/${tour.id}`}
              className='hover:text-green-300'
              key={tour.id}
            >
              <div className='relative h-48 mb-2 '>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  priority
                  className='object-cover rounded'
                  sizes='(max-width:768px) 100vw,(max-width:1200) 50vw,33vw'
                />
              </div>
              {tour.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default TourPage;
