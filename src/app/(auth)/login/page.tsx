import Link from "next/link";
import styles from "./page.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <div>로그인페이지</div>
      <Link href={"/"}>home</Link>
    </main>
  );
};
export default Login;
