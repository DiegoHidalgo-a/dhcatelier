import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <Spline
        scene="https://prod.spline.design/u0DdYdsg58lJIbjN/scene.splinecode"
        className="w-full h-full"
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
} 