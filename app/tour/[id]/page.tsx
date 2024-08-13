import Image from 'next/image';

import mapsImg from '@/images/beautiful.jpg';
function TourDetail({ params }: { params: { id: string } }) {
  const id = params.id;
  const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';
  return (
    <div>
      <h1 className='bg-green-400'>{params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        {/* local image */}
        <div>
          <Image
            src={mapsImg}
            alt='map image'
            className='w-48 h-48 object-cover rounded'
            width={192}
            height={192}
            priority
          />
          <h2>local image</h2>
        </div>
        {/* remote iamge  */}
        <div>
          <Image
            src={url}
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
            alt='remote image'
          />
        </div>
      </section>
    </div>
  );
}
export default TourDetail;
