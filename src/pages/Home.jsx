import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };
  return (
    <main className="h-screen grid grid-rows-[1fr_auto]">
      <section className="grid place-content-center text-center">
        <article className="grid text-center items-center justify-items-center">
          <div className="w-[260px] min-[320px]:w-[280px] min-[400px]:w-[340px] min-[500px]:w-[440px] mx-2 min-[600px]:w-[540px] min-[700px]:w-[640px] md:w-[676px]">
            <img src="/public/images/banner.png" alt="" />
          </div>
          <h2 className="font-inter max-[320px]:text-xl max-[400px]:text-2xl min-[500px]:text-3xl text-4xl font-bold leading-15 text-center   text-[#FE1936] py-2">
            Hello trainer!
          </h2>
          <p>To star give me your name</p>
          <form
            className="p-2 flex flex-col min-[330px]:flex-row items-center"
            onSubmit={handleSubmit}
          >
            <input
              className="p-2 w-[200px] h-[35px] border-b shadow-sm border-l max-[330px]:mb-4"
              autoComplete="off"
              placeholder="your name ..."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="max-[330px]:px-2 bg-[#D93F3F] text-white w-[80px] h-[35px]">
              Start
            </button>
          </form>
        </article>
      </section>

      <FooterPokeball />
    </main>
  );
};

export default Home;
