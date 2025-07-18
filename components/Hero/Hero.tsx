const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[var(--color-light)] px-4 py-8">
      {/* Showcase UI/UX */}
      <div className="flex flex-col items-center gap-10 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] text-center mb-2 tracking-tight">
          Консалтинг нового рівня
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-secondary)] text-center mb-6 max-w-xl">
          Сучасні рішення для вашого бізнесу, земельних, будівельних, фінансових
          та юридичних питань
        </p>
        <div className="flex flex-wrap gap-6 justify-center w-full">
          {/* Кнопки */}
          <button className="px-6 py-2 rounded-full font-semibold bg-[var(--color-primary)] text-[var(--color-light)] shadow-md hover:bg-[var(--color-secondary)] transition-colors">
            Дізнатись більше
          </button>
          <button className="px-6 py-2 rounded-full font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-warm)] transition-colors">
            Замовити консультацію
          </button>
          {/* Инпут */}
          <input
            type="text"
            placeholder="Ваше ім'я"
            className="px-4 py-2 rounded-full border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white text-[var(--color-primary)] min-w-[180px]"
          />
          {/* Селект */}
          <select className="px-4 py-2 rounded-full border border-[var(--color-secondary)] bg-white text-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] min-w-[180px]">
            <option>Оберіть послугу</option>
            <option>Земельний консалтинг</option>
            <option>Будівельний консалтинг</option>
            <option>Фінансовий консалтинг</option>
            <option>Юридичний консалтинг</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Hero;
