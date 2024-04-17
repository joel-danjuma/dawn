import { Header } from "./ui/Header";
import { Input } from "./ui/Input";

function Page() {
  return (
    <>
      <Header />
      <form className="" action="">
        <div className="grid grid-cols-[auto_1fr] gap-5 border-1 border-white/20 rounded-md p-10 md:w-[601px] my-7">
          <div className="flex flex-col gap-7">
            <label htmlFor="name">Name</label>
            <label htmlFor="native-language">Naive language</label>
            <label htmlFor="language-studying">Language studying</label>
            <label htmlFor="level">Level</label>
            <label htmlFor="grammatical-gender">Grammatical gender</label>
          </div>

          <div className="flex flex-col gap-7">
            <Input type="text" id="name" name="name" />
            <Input type="text" id="naitve-language" name="naitve-language" />
            <Input
              type="text"
              id="language-studying"
              name="language-studying"
            />
            <Input type="text" id="level" name="level" />
            <Input
              type="text"
              id="grammatical-gender"
              name="grammatical-gender"
            />
          </div>
        </div>

        <div>
          <h4 className="font-[600] text-[28px] my-5">Teacher</h4>

          <div className="grid grid-cols-[auto_1fr] gap-5 border-1 border-white/20 rounded-md p-10 md:w-[601px]">
            <div className="flex flex-col gap-7">
                <label htmlFor="t-grammatical-gender">Grammatical gender</label>
                <label htmlFor="t-speed">Speed</label>
            </div>

            <div className="flex flex-col gap-7">
                <Input name="t-grammatical-gender" id="t-grammatical-gender" type="text"/>
                <Input name="speed" id="speed" type="text"/>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Page;
