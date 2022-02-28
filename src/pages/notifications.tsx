import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {
  const ctx = useAppData();

  return (
    <Layout title="Notifications" subtitle="Work in progress">
      <button onClick={ctx.alterTheme}>Alter theme</button>
    </Layout>
  )
}