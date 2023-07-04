import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>존재하지 않는 페이지 입니다.🤔</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
