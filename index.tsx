import type { NextPage } from "next";

const MLogin: NextPage = () => {
  return (
    <div className="relative bg-gray-100 w-full overflow-hidden flex flex-col items-center justify-center mix-blend-normal min-w-[360px] max-w-[509px] text-left text-smi text-gray-800 font-text-sm">
      <div className="self-stretch rounded-[10px] h-[640px] flex flex-col items-center justify-between py-16 px-4 box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] min-w-[328px]">
          <img
            className="relative w-[100px] h-[43.04px] overflow-hidden shrink-0"
            alt=""
            src="/turin.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[130%]">E-mail</div>
                <div className="self-stretch rounded-11xl bg-white box-border h-12 flex flex-col items-center justify-center py-0 px-4 text-lg text-blackalpha-800 border-[1px] border-solid border-gray-300">
                  <div className="self-stretch relative">{` `}</div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[130%]">Senha</div>
                <div className="self-stretch rounded-11xl bg-white box-border h-12 flex flex-row items-center justify-start py-0 px-4 gap-[16px] text-lg text-blackalpha-800 border-[1px] border-solid border-gray-300">
                  <div className="flex-1 relative">{` `}</div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-mini text-blackalpha-700 sm:self-stretch sm:w-auto sm:items-center sm:justify-between sm:gap-[0px]">
              <b className="relative [text-decoration:underline] leading-[130%]">
                Esqueceu a senha?
              </b>
              <div className="rounded-11xl bg-orange-500 h-12 flex flex-row items-center justify-center py-2 px-6 box-border text-center text-white sm:w-auto sm:[align-self:unset] sm:h-auto sm:gap-[0px] sm:items-center sm:justify-center sm:pr-6 sm:box-border">
                <b className="relative leading-[130%]">Entrar</b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[328px] flex flex-col items-center justify-start gap-[8px] min-w-[328px] text-center text-mini text-blackalpha-700 sm:self-stretch sm:w-auto">
          <div className="self-stretch rounded-11xl flex flex-row items-center justify-start py-2 px-6 gap-[16px] border-[1px] border-solid border-blackalpha-200">
            <img className="relative w-6 h-6" alt="" src="/icon-google.svg" />
            <b className="flex-1 relative leading-[130%]">
              Entrar com conta do Google
            </b>
          </div>
          <div className="self-stretch rounded-11xl flex flex-row items-center justify-start py-2 px-6 gap-[33px] text-left border-[1px] border-solid border-blackalpha-200 sm:gap-[16px] sm:items-center sm:justify-start">
            <img className="relative w-6 h-6" alt="" src="/icon-turin.svg" />
            <b className="flex-1 relative leading-[130%] sm:text-center sm:flex-1">
              Criar conta na Turin
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLogin;
