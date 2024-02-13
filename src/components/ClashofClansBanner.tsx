import cocBanner from "/images/coc.webp";

function ClashofClansBanner() {
  return (
    <section className="relative flex flex-col gap-2 p-2">
      <img
        src={cocBanner}
        alt="Clash of Clans Banner"
        className="object-cover rounded-lg min-h-36"
      />
    </section>
  );
}

export default ClashofClansBanner;
