import "./index.css";
// eslint-disable-next-line
// @ts-ignore
import { DashboardLayout } from "@myorg/dashboard-layout";

export default function Root(props) {
  return (
    <section>
      <DashboardLayout tabs={[]} tabTitle={""}>
        <div>
          <p>Welcome to users page!</p>
        </div>
      </DashboardLayout>
    </section>
  );
}
