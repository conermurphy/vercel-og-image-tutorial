import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

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
            backgroundColor: '#e5e5f7',
            opacity: 0.6,
            backgroundImage:
              'linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)',
            backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
            backgroundSize: '10px 10px',
            backgroundRepeat: 'repeat',
            width: '100%',
            height: '100%',
            position: 'absolute',
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
              backgroundColor: 'white',
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
              backgroundColor: 'white',
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
