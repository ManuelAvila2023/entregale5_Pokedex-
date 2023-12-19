import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice";

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }
  return (
    <section>
      <header>
        <div className="h-16 bg-red-600 ">
          <div className="h-full pl-4 ">
            <img className="h-[36px] sm:h-full w-auto translate-y-4 relative z-10" src="/public/images/banner.png" alt="" />
          </div>
        </div>
        <div className="h-12 bg-black relative ">
          <div onClick={handleLogout} className='h-[70px] w-[70px] aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[8px] translate-y-[30%] border-black after:block after:content-[""] after:h-9 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black transition-colors hover:bg-red-500 cursor-pointer'></div>
        </div>
      </header>
      {children}
    </section>
  );
};

export default HeaderPokeball;
