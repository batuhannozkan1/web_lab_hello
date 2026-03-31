interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 75 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold
            text-center text-gray-900
            dark:text-white mb-2"
        >
          Yetenekler
        </h2>
        <p
          className="text-gray-600 dark:text-gray-400
            text-center mb-10"
        >
          Kullandigim teknolojiler ve araclar
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span
                  className="text-sm font-medium
                    text-gray-700 dark:text-gray-300"
                >
                  {skill.name}
                </span>
                <span
                  className="text-sm text-gray-500
                    dark:text-gray-400"
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="w-full bg-gray-200
                  dark:bg-gray-700 rounded-full h-2.5"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} seviyesi`}
              >
                <div
                  className="bg-blue-600 dark:bg-blue-500
                    h-2.5 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
