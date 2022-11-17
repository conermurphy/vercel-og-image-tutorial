import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const backgrounds = [
  {
    backgroundColor: '#e5e5f7',
    opacity: 0.6,
    backgroundImage:
      'linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)',
    backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
    backgroundSize: '10px 10px',
    backgroundRepeat: 'repeat',
  },
  {
    backgroundColor: '#e5e5f7',
    opacity: 0.6,
    backgroundImage:
      'linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777)',
    backgroundPosition: '20px 35px',
    backgroundSize: '0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px',
  },
  {
    backgroundColor: '#e5e5f7',
    opacity: 0.6,
    backgroundImage: 'linear-gradient(45deg, #444cf7 50%, #e5e5f7 50%)',
    backgroundSize: '24px 24px',
  },
];

const randomBackgroundNumber = Math.floor(Math.random() * backgrounds.length);

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const hasDescription = searchParams.has('description');

    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : 'My default description';

    return new ImageResponse(
      (
        <div tw="w-full h-full flex text-center items-end justify-start relative">
          <div
            tw="w-full h-full absolute"
            style={{
              ...backgrounds[randomBackgroundNumber],
            }}
          />
          <div tw="flex flex-col items-start justify-center ml-5">
            <h1 tw="text-7xl text-black mb-0 bg-white">{title}</h1>
            <p tw="text-3xl text-black mt-0 font-bold bg-white">
              {description}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
