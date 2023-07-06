import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useFetchLogin } from "../../query/auth";

export default function Login() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useFetchLogin();

  const onSubmit = async (data) => {
    try {
      const { username, password } = data;

      await mutate({
        username,
        password,
      });
      // useFetchLogin 내에서 main으로 이동
    } catch (error) {
      console.log(error);
    }
  };

  const onInvalid = (error) => {
    console.log(error);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSubmit(onSubmit, onInvalid);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <div className="px-5 py-7">
              <div className="mb-5">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  {t("account.id")}
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                  name="username"
                  {...register("username", {
                    required: "아이디를 입력해주세요",
                  })}
                />
                {errors.username && (
                  <span className="text-red-500 text-xs">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  {t("account.password")}
                </label>
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                  name="password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요",
                  })}
                  onKeyDown={(e) => handleEnter(e)}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
              </button>
            </div>
          </form>
          <div className="py-5">
            <div className="text-center whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <span className="inline-block ml-1">Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
