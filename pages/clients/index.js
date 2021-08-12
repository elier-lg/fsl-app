import { ClientOnly } from "../../components/client-only";
import { ListClients } from "../../components/list-clients";
export default function Clients() {

  return <>
    <h1>Clients</h1>
    <ClientOnly>
      <ListClients />
    </ClientOnly>
  </>
}
