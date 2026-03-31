export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div
        className="max-w-4xl mx-auto flex flex-col
          md:flex-row items-center md:items-start gap-8"
      >
        <figure className="shrink-0">
          <img
            src="https://ui-avatars.com/api/?name=Batuhan+Yasar+Ozkan&size=180&background=1E3A8A&color=ffffff&bold=true&format=svg"
            alt="Batuhan Yasar Ozkan profil fotografi"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
            width={180}
            height={180}
          />
          <figcaption
            className="mt-2 text-sm text-gray-500
              dark:text-gray-400 text-center"
          >
            Batuhan Yasar Ozkan
          </figcaption>
        </figure>
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold
              text-gray-900 dark:text-white mb-4
              text-center md:text-left"
          >
            Hakkimda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Merhaba! Ben <strong>Batuhan Yasar Ozkan</strong> (230541050).{" "}
            <strong>Firat Universitesi Yazilim Muhendisligi</strong> bolumunde
            3. sinif ogrencisiyim. Full Stack Development ve Yapay Zeka
            alanlarinda calismalar yurutuyorum.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Modern web teknolojileri ile kullanici dostu, performansli ve
            erisilebilir uygulamalar gelistirmeyi hedefliyorum. React, TypeScript
            ve Tailwind CSS temel teknoloji yiginim arasindadir.
          </p>
        </div>
      </div>
    </section>
  );
}
