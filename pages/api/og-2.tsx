import { ImageResponse } from '@vercel/og';

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

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            ...backgrounds[randomBackgroundNumber],
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: '20px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              color: 'black',
              marginBottom: 0,
            }}
          >
            Some title
          </h1>
          <p
            style={{
              marginTop: 0,
              fontSize: 32,
              color: 'black',
              fontWeight: 700,
            }}
          >
            Some description
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
