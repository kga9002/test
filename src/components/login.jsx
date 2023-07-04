import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useFetchLogin } from "../query/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
    <div>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <label htmlFor="username">{t("account.id")}</label>
        <input
          type="text"
          name="username"
          {...register("username", { required: "아이디를 입력해주세요" })}
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username.message}</span>
        )}
        <br />
        <label htmlFor="password">{t("account.password")}</label>
        <input
          type="password"
          name="password"
          {...register("password", { required: "비밀번호를 입력해주세요" })}
          onKeyDown={(e) => handleEnter(e)}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
        <br />
        <button type="submit">제출</button>
      </form>
      {/* routing 테스트용 */}
      <button onClick={() => navigate("/auth/register")}>Register</button>
    </div>
  );
}
