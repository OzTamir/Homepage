const Avatar = () => (
  <div className="group relative">
    {/* soft golden halo behind the photo */}
    <div
      aria-hidden
      className="absolute -inset-3 rounded-full bg-golden/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
    />
    <img
      src="/profile/profile-256.png"
      width={96}
      height={96}
      alt="Oz Tamir"
      className="relative h-24 w-24 rounded-full object-cover ring-1 ring-golden/40 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:ring-golden/70"
    />
  </div>
);

export default Avatar;
