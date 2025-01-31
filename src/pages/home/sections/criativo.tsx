import MenuNav from "../../../components/menuNav";
import { ArrowUp } from "phosphor-react";

export default function Criativo() {
  return (
    <>
      <div className=" w-full sm:w-10/12 md:w-8/12">
        <p className="text-[#1c1c1e] text-lg">
          Por fim, solicitamos as <strong>peças criativas</strong> já produzidas
          por vocês e em linha com a atual estratégia de comunicação. Caso não
          possuam todos os formatos colocados, podemos realizar o desdobramento
          por aqui, respeitando KV (A ser enviado) e guide da marca (A ser
          enviado):
        </p>
      </div>

      <div className=" sm:flex pt-10">
        <div className="sm:w-1/4 pb-8 sm:pt-0">
          <MenuNav />
        </div>
        <div className=" sm:flex-1">
          <div>
            <form action="">
              <div className="w-full sm:w-9/12 md:w-6/12 pb-7">
                <label className="text-[#393939] text-lg font-medium ">
                  <p className="p-1 text-[#1c1c1e]">E-mail marketing: *</p>
                </label>
                <div className=" flex items-center gap-3 pb-1">
                  <input
                    required
                    className={`w-full border-2 border-[#1462AC] outline-none pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent`}
                    type="text"
                  />
                  <div className=" border-2 border-[#1462AC] py-1 px-1 text-[]">
                    <ArrowUp size={28} weight="regular" color="#1462AC" />
                  </div>
                </div>
                <p className=" text-lg">
                  Arte (Se tiverem já o HTML, solicitamos o arquivo);{" "}
                </p>
              </div>

              <div className="w-full sm:w-9/12 md:w-6/12 pb-7">
                <label className="text-[#393939] text-lg font-medium ">
                  <p className="p-1 text-[#1c1c1e]">Banners (Formatos): * </p>
                </label>
                <div className=" flex items-center gap-3 pb-1">
                  <input
                    required
                    className={`w-full border-2 border-[#1462AC] outline-none pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent`}
                    type="text"
                  />
                  <div className=" border-2 border-[#1462AC] py-1 px-1 text-[]">
                    <ArrowUp size={28} weight="regular" color="#1462AC" />
                  </div>
                </div>
                <p className=" text-lg">
                  300x50, 320x480x 480x320, 728x90, 1024x768, 768x1024,
                  1200x627, 320x50
                </p>
              </div>
              <div className="w-full sm:w-9/12 md:w-6/12 pb-7">
                <label className="text-[#393939] text-lg font-medium ">
                  <p className="p-1 text-[#1c1c1e]">Vídeo:</p>
                </label>
                <div className=" flex items-center gap-3 pb-1">
                  <input
                    required
                    className={`w-full border-2 border-[#1462AC] outline-none pl-5 pr-2 py-1 text-lg text-[#393939] bg-transparent`}
                    type="text"
                  />
                  <div className=" border-2 border-[#1462AC] py-1 px-1 text-[]">
                    <ArrowUp size={28} weight="regular" color="#1462AC" />
                  </div>
                </div>
                <p className=" text-lg">
                  (1200x1200, Texto 80, Título 25 e Descrição 30; 1080x1920
                  (9:16), podendo ser animado.)
                </p>
              </div>
              <div className=" sm:px-4 pb-14">
                <button
                  type="submit"
                  className="duration-200 ease-in text-xs px-10 py-2 bg-[#3962a8] text-white btn-custom"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
