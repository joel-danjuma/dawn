const prompt_suggesstions = [
  "I want to enhance my lessons",
  "I want to enhance my lessons",
  "I want to learn a new course",
  "Discuss best practices in teaching",
];

function Intro({
  onPromptClicked,
}: {
  onPromptClicked: (prompt: string) => void;
}) {
  return (
    <>
      <h3 className="text-[33px] font-[600]">Hello Fancy</h3>

      <div className="bg-[#9A4FFF]/[10%] rounded-[7px] mt-12 w-full">
        <p className="text-center text-[19px] p-4">
          Welcome to DAWN AI STUDY, your ultimate guide to personalized
          learning! 🌟 I&apos;m your friendly AI teacher, here to make your
          learning journey smooth and exciting. Whether you&apos;re a student
          eager to explore new subjects or a teacher looking for innovative
          teaching strategies, I&apos;ve got you covered! then it will also have
          the translation sign behind that play button
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-7 cursor-pointer">
        {prompt_suggesstions.map((prompt, idx) => (
          <div
            key={idx}
            className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]"
            onClick={() => onPromptClicked(prompt)}
          >
            <p>{prompt}</p>
          </div>
        ))}
        
      </div>
    </>
  );
}

export { Intro };
